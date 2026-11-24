"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, MailCheck } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/lib/auth-context";
import { fill, useSiteI18n, type SiteDict } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type Mode = "signin" | "signup" | "reset";

function emailError(e: unknown, t: SiteDict): string {
  const code = (e as { code?: string })?.code ?? "";
  const E = t.email;
  if (/invalid-credential|wrong-password|user-not-found|invalid-login/.test(code)) return E.errInvalid;
  if (code.includes("email-already-in-use") || code.includes("account-exists")) return E.errInUse;
  if (code.includes("weak-password")) return E.errWeak;
  if (code.includes("too-many-requests")) return E.errTooMany;
  if (code.includes("invalid-email")) return E.errEmail;
  if (code.includes("user-disabled")) return E.errDisabled;
  return E.errGeneric;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Email + password: sign in, create account, or request a reset link. */
export function EmailAuthForm() {
  const { emailSignIn, emailSignUp, resetPassword } = useAuth();
  const { t } = useSiteI18n();
  const E = t.email;
  const [mode, setMode] = useState<Mode>("signin");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [resetSentTo, setResetSentTo] = useState<string | null>(null);

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    setError(null);
    if (!EMAIL_RE.test(email.trim())) return setError(E.errEmail);
    if (mode === "signup" && !name.trim()) return setError(E.errName);
    if (mode !== "reset" && password.length < (mode === "signup" ? 8 : 1)) return setError(E.errWeak);
    setBusy(true);
    try {
      if (mode === "signin") await emailSignIn(email, password);
      else if (mode === "signup") await emailSignUp(email, password, name);
      else {
        await resetPassword(email);
        setResetSentTo(email.trim());
      }
    } catch (e) {
      // Reset: don't reveal whether an account exists.
      if (mode === "reset" && (e as { code?: string })?.code?.includes("user-not-found")) setResetSentTo(email.trim());
      else setError(emailError(e, t));
    } finally {
      setBusy(false);
    }
  };

  if (mode === "reset")
    return (
      <form onSubmit={submit} noValidate className="grid gap-3" aria-labelledby="reset-title">
        <div>
          <h3 id="reset-title" className="font-semibold">{E.resetTitle}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{E.resetDesc}</p>
        </div>
        {resetSentTo ? (
          <p role="status" className="flex items-start gap-2 rounded-md border border-[#1e9bff]/40 bg-[#1e9bff]/10 p-3 text-sm">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#4cc3ff]" />
            {fill(E.resetSent, { email: resetSentTo })}
          </p>
        ) : (
          <>
            <div className="grid gap-1.5">
              <Label htmlFor="reset-email">{E.email}</Label>
              <Input id="reset-email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
            <Button type="submit" disabled={busy}>
              {busy && <Loader2 className="size-4 animate-spin" />} {E.sendReset}
            </Button>
          </>
        )}
        <Button type="button" variant="link" className="justify-self-start px-0" onClick={() => { setMode("signin"); setResetSentTo(null); setError(null); }}>
          {E.back}
        </Button>
      </form>
    );

  return (
    <form onSubmit={submit} noValidate className="grid gap-3" data-testid="email-auth">
      <div role="tablist" className="grid grid-cols-2 gap-1 rounded-md border border-border p-1">
        {(["signin", "signup"] as const).map((m) => (
          <button
            key={m}
            type="button"
            role="tab"
            aria-selected={mode === m}
            onClick={() => { setMode(m); setError(null); }}
            className={cn(
              "rounded px-3 py-1.5 text-sm transition-colors",
              mode === m ? "bg-[#1e9bff]/15 font-medium text-foreground shadow-[inset_0_0_0_1px_rgba(30,155,255,0.5)]" : "text-muted-foreground hover:text-foreground"
            )}
          >
            {m === "signin" ? E.signInTab : E.signUpTab}
          </button>
        ))}
      </div>

      {mode === "signup" && (
        <div className="grid gap-1.5">
          <Label htmlFor="ea-name">{E.name}</Label>
          <Input id="ea-name" autoComplete="name" value={name} maxLength={80} onChange={(e) => setName(e.target.value)} />
        </div>
      )}
      <div className="grid gap-1.5">
        <Label htmlFor="ea-email">{E.email}</Label>
        <Input id="ea-email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="grid gap-1.5">
        <div className="flex items-center justify-between">
          <Label htmlFor="ea-password">{E.password}</Label>
          {mode === "signin" && (
            <button type="button" className="text-xs text-[#4cc3ff] hover:underline" onClick={() => { setMode("reset"); setError(null); }}>
              {E.forgot}
            </button>
          )}
        </div>
        <Input
          id="ea-password"
          type="password"
          autoComplete={mode === "signup" ? "new-password" : "current-password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {mode === "signup" && <p className="text-xs text-muted-foreground">{E.passwordHint}</p>}
      </div>
      {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
      <Button type="submit" size="lg" className="h-11" disabled={busy}>
        {busy && <Loader2 className="size-4 animate-spin" />} {mode === "signin" ? E.signIn : E.signUp}
      </Button>
    </form>
  );
}

/** Shown after an email/password sign-up until the address is verified. */
export function VerifyEmailCard() {
  const { identity, resendVerification, checkVerified, refresh, signOut } = useAuth();
  const { t } = useSiteI18n();
  const E = t.email;
  const [busy, setBusy] = useState<"resend" | "check" | null>(null);

  const resend = async () => {
    setBusy("resend");
    try {
      await resendVerification();
      toast.success(E.resent);
    } catch (e) {
      toast.error(emailError(e, t));
    } finally {
      setBusy(null);
    }
  };
  const check = async () => {
    setBusy("check");
    try {
      if (await checkVerified()) await refresh();
      else toast.message(E.stillUnverified);
    } finally {
      setBusy(null);
    }
  };

  return (
    <div className="grid gap-4 text-center" data-testid="verify-email">
      <MailCheck className="mx-auto size-10 text-[#4cc3ff]" />
      <div>
        <h3 className="tz-display text-xl">{E.verifyTitle}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{fill(E.verifyDesc, { email: identity?.email ?? "" })}</p>
      </div>
      <Button onClick={check} disabled={busy !== null} size="lg">
        {busy === "check" && <Loader2 className="size-4 animate-spin" />} {E.verified}
      </Button>
      <div className="flex flex-wrap justify-center gap-2">
        <Button variant="outline" size="sm" onClick={resend} disabled={busy !== null}>
          {busy === "resend" && <Loader2 className="size-4 animate-spin" />} {E.resend}
        </Button>
        <Button variant="ghost" size="sm" onClick={() => void signOut()}>
          {E.useOther}
        </Button>
      </div>
    </div>
  );
}
