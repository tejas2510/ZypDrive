import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.4";

// Whole-number floats (1.0) -> integers (1), recursively.
function shortenFloats(v: unknown): unknown {
  if (Array.isArray(v)) return v.map(shortenFloats);
  if (v && typeof v === "object") {
    return Object.fromEntries(
      Object.entries(v as Record<string, unknown>).map(([k, x]) => [k, shortenFloats(x)]),
    );
  }
  if (typeof v === "number" && !Number.isInteger(v) && v % 1 === 0) return Math.trunc(v);
  return v;
}

// Recursive lexicographic key sort (array order preserved).
function sortKeys(v: unknown): unknown {
  if (Array.isArray(v)) return v.map(sortKeys);
  if (v && typeof v === "object") {
    return Object.keys(v as object)
      .sort()
      .reduce<Record<string, unknown>>((acc, k) => {
        acc[k] = sortKeys((v as Record<string, unknown>)[k]);
        return acc;
      }, {});
  }
  return v;
}

function toHex(buf: ArrayBuffer): string {
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

Deno.serve(async (req) => {
  if (req.method !== "POST") return new Response("method not allowed", { status: 405 });

  const raw = await req.text();
  const sig = (req.headers.get("x-signature-v2") ?? "").toLowerCase();
  const ts = Number(req.headers.get("x-timestamp"));

  // 1. Freshness (replay protection)
  if (!ts || Math.abs(Date.now() / 1000 - ts) > 300) {
    return new Response("stale", { status: 401 });
  }

  let parsed: Record<string, unknown>;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return new Response("bad body", { status: 400 });
  }

  // 2. Canonicalise
  const canonical = JSON.stringify(sortKeys(shortenFloats(parsed)));

  // 3. Constant-time HMAC-SHA256 compare
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(Deno.env.get("DIDIT_WEBHOOK_SECRET") ?? ""),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const expected = toHex(
    await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(canonical)),
  );
  if (!timingSafeEqual(expected, sig)) {
    return new Response("bad sig", { status: 401 });
  }

  const admin = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  // 4. Idempotency on event_id
  const eventId = String(parsed.event_id ?? "");
  if (eventId) {
    const { error } = await admin.from("didit_webhook_events").insert({ event_id: eventId });
    if (error) return new Response("ok"); // already processed
  }

  // 5. Apply the decision — statuses are case-sensitive literals
  const status = String(parsed.status ?? "");
  const vendorData = String(parsed.vendor_data ?? "");
  const knownStatuses = [
    "Not Started",
    "In Progress",
    "Awaiting User",
    "In Review",
    "Approved",
    "Declined",
    "Resubmitted",
    "Abandoned",
    "Expired",
    "Kyc Expired",
  ];

  if (vendorData && knownStatuses.includes(status)) {
    await admin.from("kyc_verifications").upsert(
      {
        user_id: vendorData,
        session_id: parsed.session_id ? String(parsed.session_id) : null,
        status,
        decision: (parsed.decision ?? parsed.resubmit_info ?? null) as unknown,
        last_event_at: new Date().toISOString(),
      },
      { onConflict: "user_id" },
    );
  } else {
    console.log("didit-webhook: unhandled payload", status, vendorData);
  }

  // 6. Always 2xx quickly
  return new Response("ok");
});
