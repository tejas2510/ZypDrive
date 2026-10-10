import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useSession } from "@/hooks/useSession";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { KycStatusPill, KYC_LOCKED, KYC_FAILED } from "@/components/KycStatusPill";
import { KYC_LABEL } from "./Kyc";

export default function Profile() {
  const { user, loading } = useSession();
  const navigate = useNavigate();
  const [status, setStatus] = useState<string>("Not Started");
  const [reason, setReason] = useState<string | null>(null);

  useEffect(() => {
    if (!loading && !user) navigate("/login?next=/profile", { replace: true });
  }, [loading, user, navigate]);

  useEffect(() => {
    if (!user) return;
    supabase
      .from("kyc_verifications")
      .select("status, reason")
      .eq("user_id", user.id)
      .maybeSingle()
      .then(({ data }) => {
        if (data?.status) setStatus(data.status);
        setReason(data?.reason ?? null);
      });
  }, [user]);

  const verified = status === "Approved";
  const pending = !verified;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 md:py-14 max-w-3xl">
        <h1 className="font-heading text-3xl md:text-4xl">Your profile</h1>

        <Card className="mt-6 p-5 md:p-6 space-y-5">
          <div>
            <div className="text-sm text-muted-foreground">Email</div>
            <div className="font-medium break-all">{user?.email ?? "—"}</div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div>
              <div className="text-sm text-muted-foreground">Identity check</div>
              <div className="font-medium">{KYC_LABEL[status] ?? status}</div>
            </div>
<KycStatusPill status={status} />
          </div>

          {KYC_FAILED.includes(status) && (
            <p className="text-sm rounded-md bg-destructive/10 p-3">
              <span className="font-semibold text-destructive">Reason: </span>
              {reason ?? "Please try again with clear photos in good light."}
            </p>
          )}

          {pending && status !== "In Review" && (
            <p className="text-sm text-muted-foreground">
              You can keep browsing, but we'll need this done before your scooter is handed over.
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            {!KYC_LOCKED.includes(status) && (
              <Button asChild variant="hero" size="lg">
                <Link to="/kyc">{KYC_FAILED.includes(status) ? "Verify again" : "Complete verification"}</Link>
              </Button>
            )}
            <Button
              variant="outline"
              size="lg"
              onClick={async () => {
                await supabase.auth.signOut();
                navigate("/", { replace: true });
              }}
            >
              Sign out
            </Button>
          </div>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
