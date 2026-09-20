import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      if (session) setReady(true);
    });
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) setReady(true);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (password !== confirm) {
      toast({ title: "Passwords don't match", description: "Please type the same password twice.", variant: "destructive" });
      return;
    }
    setBusy(true);
    try {
      const { error } = await supabase.auth.updateUser({ password });
      if (error) throw error;
      toast({ title: "Password updated", description: "You're signed in with your new password." });
      navigate("/profile", { replace: true });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Please try again.";
      toast({ title: "Could not update password", description: message, variant: "destructive" });
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-secondary/30 to-background px-4 py-10">
      <Card className="w-full max-w-md p-6 md:p-8 space-y-6">
        <div className="text-center space-y-1">
          <Link to="/" className="inline-block">
            <img src="/logo_proper.png" alt="Zypdrive" className="h-10 w-auto mx-auto object-contain block dark:hidden" />
            <img src="/logo_proper_dark.png" alt="Zypdrive" className="h-10 w-auto mx-auto object-contain hidden dark:block" />
          </Link>
          <h1 className="font-heading text-2xl">Set a new password</h1>
          <p className="text-sm text-muted-foreground">
            {ready
              ? "Choose a new password for your Zypdrive account."
              : "Open this page from the reset link in your email to continue."}
          </p>
        </div>

        <form className="space-y-4" onSubmit={submit}>
          <div className="space-y-2">
            <Label htmlFor="password">New password</Label>
            <Input
              id="password"
              type="password"
              autoComplete="new-password"
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm">Repeat new password</Label>
            <Input
              id="confirm"
              type="password"
              autoComplete="new-password"
              required
              minLength={8}
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />
          </div>
          <Button type="submit" variant="hero" size="lg" className="w-full" disabled={busy || !ready}>
            {busy ? "Please wait…" : "Update password"}
          </Button>
        </form>

        <div className="text-center text-sm text-muted-foreground">
          <Link to="/login" className="text-primary hover:underline font-medium">Back to sign in</Link>
        </div>
      </Card>
    </main>
  );
}
