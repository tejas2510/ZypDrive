import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DiditSdk } from "@didit-protocol/sdk-web";
import { supabase } from "@/integrations/supabase/client";
import { useSession } from "@/hooks/useSession";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { ShieldCheck, FileCheck2, Clock } from "lucide-react";
import { KycStatusPill, KYC_LOCKED, KYC_FAILED } from "@/components/KycStatusPill";

export const KYC_LABEL: Record<string, string> = {
  "Not Started": "Not started",
  "In Progress": "In progress",
  "Awaiting User": "Waiting on you",
  "In Review": "Under review",
  Approved: "Verified",
  Declined: "Declined",
  Resubmitted: "Needs resubmission",
  Abandoned: "Incomplete",
  Expired: "Expired",
  "Kyc Expired": "Expired — please verify again",
};

export default function Kyc() {
  const { user, loading } = useSession();
  const navigate = useNavigate();
  const [status, setStatus] = useState<string>("Not Started");
  const [busy, setBusy] = useState(false);
  const [reason, setReason] = useState<string | null>(null);

  useEffect(() => {
    if (!loading && !user) navigate("/login?next=/kyc", { replace: true });
  }, [loading, user, navigate]);

  const refresh = useCallback(async () => {
    if (!user) return;
    const { data } = await supabase
      .from("kyc_verifications")
      .select("status, reason")
      .eq("user_id", user.id)
      .maybeSingle();
    if (data?.status) setStatus(data.status);
    setReason(data?.reason ?? null);
  }, [user]);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  async function start() {
    setBusy(true);
    try {
      const { data, error } = await supabase.functions.invoke("didit-session", {
        body: { callback: `${window.location.origin}/kyc` },
      });
      if (error) {
        const ctx = (error as { context?: Response }).context;
        if (ctx?.status === 409) {
          await refresh();
          throw new Error("Your verification is already submitted. No need to do it again.");
        }
        throw error;
      }
      const url = (data as { url?: string })?.url;
      if (!url) throw new Error("Could not start verification.");
      DiditSdk.shared.onComplete = () => {
        // The webhook is the source of truth; just refresh what we show.
        setTimeout(() => void refresh(), 2000);
      };
      DiditSdk.shared.startVerification({ url });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Please try again in a moment.";
      toast({ title: "Verification could not start", description: message, variant: "destructive" });
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 md:py-14 max-w-3xl">
        <h1 className="font-heading text-3xl md:text-4xl">Verify your identity</h1>
        <p className="mt-2 text-muted-foreground">
          A quick, one-time check before you get the keys. It takes about 3 minutes on your phone.
        </p>

        <Card className="mt-6 p-5 md:p-6 space-y-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-primary" />
            <div>
              <div className="text-sm text-muted-foreground">Current status</div>
              <div className="font-semibold">{KYC_LABEL[status] ?? status}</div>
            </div>
            <div className="ml-auto"><KycStatusPill status={status} /></div>
          </div>

          {status === "In Review" && (
            <p className="text-sm rounded-md bg-warning/10 p-3">
              Thanks — your documents are with our team. We'll update your status here and email you once it's done.
            </p>
          )}
          {status === "Approved" && (
            <p className="text-sm rounded-md bg-success/10 p-3">You're verified. Nothing more to do here.</p>
          )}
          {KYC_FAILED.includes(status) && (
            <div className="text-sm rounded-md bg-destructive/10 p-3">
              <div className="font-semibold text-destructive">Verification not successful</div>
              <p className="mt-1">{reason ?? "Please try again with clear photos in good light."}</p>
              <p className="mt-1 text-muted-foreground">You can verify again below.</p>
            </div>
          )}

          <ul className="text-sm text-muted-foreground space-y-2">
            <li className="flex gap-2"><FileCheck2 className="h-4 w-4 mt-0.5 shrink-0" /> Keep your Aadhaar and driving licence handy.</li>
            <li className="flex gap-2"><Clock className="h-4 w-4 mt-0.5 shrink-0" /> You'll take a selfie and a photo of your ID.</li>
          </ul>

          <p className="text-xs text-muted-foreground">
            By continuing you agree that our verification partner may process your ID document and
            selfie to confirm your identity, as described in our{" "}
            <Link to="/terms" className="text-primary hover:underline">terms</Link>.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            {!KYC_LOCKED.includes(status) && (
              <Button variant="hero" size="lg" onClick={start} disabled={busy}>
                {busy ? "Opening…" : KYC_FAILED.includes(status) ? "Verify again" : "Start verification"}
              </Button>
            )}
            <Button variant="outline" size="lg" onClick={() => navigate("/profile")}>
              {KYC_LOCKED.includes(status) ? "Go to my profile" : "Skip for now"}
            </Button>
          </div>
        </Card>

        <p className="mt-4 text-sm text-muted-foreground">
          Already finished? Your status updates automatically —{" "}
          <button className="text-primary hover:underline" onClick={() => void refresh()}>refresh status</button>.
        </p>
      </main>
      <Footer />
    </div>
  );
}
