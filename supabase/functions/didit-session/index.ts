import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

// Per-session config (not a secret): "Free KYC" workflow
const WORKFLOW_ID = "67fe5d21-e903-405d-9532-9fbf83abd6ba";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const authHeader = req.headers.get("Authorization") ?? "";
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_ANON_KEY")!,
      { global: { headers: { Authorization: authHeader } } },
    );

    const { data: userData, error: userError } = await supabase.auth.getUser();
    const user = userData?.user;
    if (userError || !user) {
      return new Response(JSON.stringify({ error: "unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const body = await req.json().catch(() => ({}));
    const origin = req.headers.get("origin") ?? "https://zypdrive.com";
    const callback = typeof body?.callback === "string" ? body.callback : `${origin}/kyc`;

    const res = await fetch("https://verification.didit.me/v3/session/", {
      method: "POST",
      headers: {
        "x-api-key": Deno.env.get("DIDIT_API_KEY")!,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        workflow_id: WORKFLOW_ID,
        vendor_data: user.id,
        callback,
        contact_details: user.email ? { email: user.email } : undefined,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("didit session create failed", res.status, detail);
      return new Response(JSON.stringify({ error: "session_create_failed" }), {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const session = await res.json();

    const admin = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );
    await admin.from("kyc_verifications").upsert(
      {
        user_id: user.id,
        session_id: session.session_id,
        status: session.status ?? "Not Started",
      },
      { onConflict: "user_id" },
    );

    return new Response(
      JSON.stringify({ url: session.url, session_id: session.session_id }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (e) {
    console.error("didit-session error", e);
    return new Response(JSON.stringify({ error: "unexpected_error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
