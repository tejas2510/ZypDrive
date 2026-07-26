import { useEffect, useState } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

function sanitizeNext(raw: string | null): string {
  if (!raw) return "/";
  try {
    // Only allow same-origin relative paths starting with a single '/'
    if (!raw.startsWith("/") || raw.startsWith("//")) return "/";
    return raw;
  } catch {
    return "/";
  }
}

export default function Login() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const next = sanitizeNext(params.get("next"));
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate(next, { replace: true });
    });
  }, [navigate, next]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    try {
      if (mode === "signup") {
        const emailRedirectTo = `${window.location.origin}${next}`;
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo },
        });
        if (error) throw error;
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      }
      navigate(next, { replace: true });
    } catch (err: any) {
      toast({ title: "Sign in failed", description: err?.message ?? "Try again.", variant: "destructive" });
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-secondary/30 to-background px-4">
      <Card className="w-full max-w-md p-6 md:p-8 space-y-6">
        <div className="text-center space-y-1">
          <Link to="/" className="inline-block">
            <img
              src="/logo_proper.png"
              alt="Zypdrive"
              className="h-10 w-auto mx-auto object-contain block dark:hidden"
            />
            <img
              src="/logo_proper_dark.png"
              alt="Zypdrive"
              className="h-10 w-auto mx-auto object-contain hidden dark:block"
            />
          </Link>
          <h1 className="font-heading text-2xl">
            {mode === "signin" ? "Welcome back" : "Create your account"}
          </h1>
          <p className="text-sm text-muted-foreground">
            {mode === "signin"
              ? "Sign in to continue."
              : "Sign up to manage your Zypdrive subscription."}
          </p>
        </div>

        <form className="space-y-4" onSubmit={submit}>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              autoComplete={mode === "signin" ? "current-password" : "new-password"}
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button type="submit" variant="hero" size="lg" className="w-full" disabled={busy}>
            {busy ? "Please wait…" : mode === "signin" ? "Sign in" : "Create account"}
          </Button>
        </form>

        <div className="text-center text-sm text-muted-foreground">
          {mode === "signin" ? (
            <>
              New here?{" "}
              <button
                type="button"
                className="text-primary hover:underline font-medium"
                onClick={() => setMode("signup")}
              >
                Create an account
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                type="button"
                className="text-primary hover:underline font-medium"
                onClick={() => setMode("signin")}
              >
                Sign in
              </button>
            </>
          )}
        </div>
      </Card>
    </main>
  );
}
