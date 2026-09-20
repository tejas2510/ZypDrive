import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

function sanitizeNext(raw: string | null): string {
  if (!raw) return "/profile";
  if (!raw.startsWith("/") || raw.startsWith("//")) return "/profile";
  return raw;
}

type Mode = "signin" | "signup" | "otp" | "forgot";

/** Turn backend auth errors into something a rider can act on. */
function friendly(message: string): string {
  const m = message.toLowerCase();
  if (m.includes("invalid login credentials")) return "That email and password don't match. Try again, or reset your password.";
  if (m.includes("email not confirmed")) return "Please confirm your email first — we've sent you a code.";
  if (m.includes("already registered") || m.includes("already been registered")) return "You already have an account with this email. Please sign in instead.";
  if (m.includes("token has expired") || m.includes("expired")) return "That code has expired. Tap 'Send a new code' and try again.";
  if (m.includes("invalid token") || m.includes("otp")) return "That code doesn't look right. Please check the email and retype it.";
  if (m.includes("password should be")) return "Please use a password of at least 8 characters.";
  if (m.includes("rate limit") || m.includes("too many")) return "Too many attempts. Please wait a minute and try again.";
  return message;
}

export default function Login() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const next = sanitizeNext(params.get("next"));
  const [mode, setMode] = useState<Mode>("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [code, setCode] = useState("");
  const [busy, setBusy] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const [notice, setNotice] = useState<string | null>(null);
  const codeRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate(next, { replace: true });
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      if (session) navigate(next, { replace: true });
    });
    return () => sub.subscription.unsubscribe();
  }, [navigate, next]);

  useEffect(() => {
    if (cooldown <= 0) return;
    const t = setTimeout(() => setCooldown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [cooldown]);

  useEffect(() => {
    if (mode === "otp") setTimeout(() => codeRef.current?.focus(), 50);
    setNotice(null);
  }, [mode]);

  function fail(err: unknown) {
    const message = err instanceof Error ? friendly(err.message) : "Please try again.";
    toast({ title: "Something went wrong", description: message, variant: "destructive" });
  }

  async function resend() {
    if (cooldown > 0) return;
    try {
      const { error } = await supabase.auth.resend({
        type: "signup",
        email,
        options: { emailRedirectTo: `${window.location.origin}${next}` },
      });
      if (error) throw error;
      setCooldown(45);
      setNotice("A new code is on its way. It can take a minute to arrive.");
    } catch (err) {
      fail(err);
    }
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    try {
      if (mode === "forgot") {
        const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
          redirectTo: `${window.location.origin}/reset-password`,
        });
        if (error) throw error;
        setNotice("Check your email for a link to set a new password.");
        return;
      }

      if (mode === "signup") {
        const { data, error } = await supabase.auth.signUp({
          email: email.trim(),
          password,
          options: { emailRedirectTo: `${window.location.origin}${next}` },
        });
        if (error) throw error;
        if (!data.session) {
          setMode("otp");
          setCooldown(45);
          setNotice(`We emailed a 6-digit code to ${email.trim()}. Enter it below, or just tap the link in that email.`);
          return;
        }
      } else if (mode === "otp") {
        const { error } = await supabase.auth.verifyOtp({
          email: email.trim(),
          token: code.replace(/\D/g, ""),
          type: "email",
        });
        if (error) throw error;
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
        if (error) throw error;
      }
      navigate(next, { replace: true });
    } catch (err) {
      fail(err);
    } finally {
      setBusy(false);
    }
  }

  const heading =
    mode === "signin"
      ? "Welcome back"
      : mode === "signup"
        ? "Create your account"
        : mode === "otp"
          ? "Confirm your email"
          : "Reset your password";

  const sub =
    mode === "signin"
      ? "Sign in to manage your subscription and verification."
      : mode === "signup"
        ? "Sign up to start your Zypdrive subscription."
        : mode === "otp"
          ? `Enter the 6-digit code we emailed to ${email}, or tap the link in that email.`
          : "Enter your email and we'll send you a link to set a new password.";

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-secondary/30 to-background px-4 py-10">
      <Card className="w-full max-w-md p-6 md:p-8 space-y-6">
        <div className="text-center space-y-1">
          <Link to="/" className="inline-block">
            <img src="/logo_proper.png" alt="Zypdrive" className="h-10 w-auto mx-auto object-contain block dark:hidden" />
            <img src="/logo_proper_dark.png" alt="Zypdrive" className="h-10 w-auto mx-auto object-contain hidden dark:block" />
          </Link>
          <h1 className="font-heading text-2xl">{heading}</h1>
          <p className="text-sm text-muted-foreground">{sub}</p>
        </div>

        {notice && (
          <p className="text-sm text-center font-medium text-green-600 dark:text-green-400">{notice}</p>
        )}

        <form className="space-y-4" onSubmit={submit}>
          {mode !== "otp" && (
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                autoFocus
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          )}

          {(mode === "signin" || mode === "signup") && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <button
                  type="button"
                  className="text-xs text-muted-foreground hover:text-foreground"
                  onClick={() => setShowPassword((s) => !s)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                autoComplete={mode === "signin" ? "current-password" : "new-password"}
                required
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {mode === "signup" && (
                <p className="text-xs text-muted-foreground">At least 8 characters.</p>
              )}
            </div>
          )}

          {mode === "otp" && (
            <div className="space-y-2">
              <Label htmlFor="code">Verification code</Label>
              <Input
                id="code"
                ref={codeRef}
                inputMode="numeric"
                autoComplete="one-time-code"
                maxLength={6}
                required
                placeholder="123456"
                className="text-center text-lg tracking-[0.4em]"
                value={code}
                onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
              />
            </div>
          )}

          <Button type="submit" variant="hero" size="lg" className="w-full" disabled={busy}>
            {busy && <Loader2 className="h-4 w-4 animate-spin" />}
            {busy
              ? "Please wait…"
              : mode === "signin"
                ? "Sign in"
                : mode === "signup"
                  ? "Create account"
                  : mode === "otp"
                    ? "Confirm"
                    : "Send reset link"}
          </Button>
        </form>

        <div className="text-center text-sm text-muted-foreground space-y-2">
          {mode === "otp" ? (
            <>
              <div>
                <button
                  type="button"
                  className="text-primary hover:underline font-medium disabled:opacity-60 disabled:no-underline"
                  onClick={resend}
                  disabled={cooldown > 0}
                >
                  {cooldown > 0 ? `Send a new code in ${cooldown}s` : "Send a new code"}
                </button>
              </div>
              <div>
                <button type="button" className="hover:text-foreground" onClick={() => setMode("signin")}>
                  Back to sign in
                </button>
              </div>
            </>
          ) : mode === "forgot" ? (
            <button type="button" className="text-primary hover:underline font-medium" onClick={() => setMode("signin")}>
              Back to sign in
            </button>
          ) : mode === "signin" ? (
            <>
              <div>
                <button type="button" className="hover:text-foreground" onClick={() => setMode("forgot")}>
                  Forgot your password?
                </button>
              </div>
              <div>
                New here?{" "}
                <button type="button" className="text-primary hover:underline font-medium" onClick={() => setMode("signup")}>
                  Create an account
                </button>
              </div>
            </>
          ) : (
            <div>
              Already have an account?{" "}
              <button type="button" className="text-primary hover:underline font-medium" onClick={() => setMode("signin")}>
                Sign in
              </button>
            </div>
          )}
        </div>
      </Card>
    </main>
  );
}
