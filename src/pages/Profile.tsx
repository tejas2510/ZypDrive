import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useSession } from "@/hooks/useSession";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { KYC_LABEL } from "./Kyc";

export default function Profile() {
  const { user, loading } = useSession();
  const navigate = useNavigate();
  const [status, setStatus] = useState<string>("Not Started");

  useEffect(() => {
    if (!loading && !user) navigate("/login?next=/profile", { replace: true });
  }, [loading, user, navigate]);

  useEffect(() => {
    if (!user) return;
    supabase
      .from("kyc_verifications")
      .select("status")
      .eq("user_id", user.id)
      .maybeSingle()
      .then(({ data }) => {
        if (data?.status) setStatus(data.status);
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
            <Badge variant={verified ? "default" : "secondary"}>
              {verified ? "Verified" : "Pending"}
            </Badge>
          </div>

          {pending && (
            <p className="text-sm text-muted-foreground">
              You can keep browsing, but we'll need this done before your scooter is handed over.
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild variant="hero" size="lg">
              <Link to="/kyc">{verified ? "Re-verify identity" : "Complete verification"}</Link>
            </Button>
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
