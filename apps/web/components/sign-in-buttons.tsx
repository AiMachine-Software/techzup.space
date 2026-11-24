"use client";

import { useState } from "react";
import { Loader2, Mail } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FacebookIcon, GoogleIcon, XIcon } from "@/components/brand-icons";
import { useAuth } from "@/lib/auth-context";
import { devAuthEnabled, firebaseEnabled, type ProviderId } from "@/lib/firebase";
import { useSiteI18n, type SiteDict } from "@/lib/i18n";

const PROVIDERS: { id: ProviderId; key: "google" | "facebook" | "x"; Icon: React.ComponentType<{ className?: string }> }[] = [
  { id: "google", key: "google", Icon: GoogleIcon },
  { id: "facebook", key: "facebook", Icon: FacebookIcon },
  { id: "x", key: "x", Icon: XIcon },
];

function friendly(e: unknown, t: SiteDict) {
  const code = (e as { code?: string })?.code ?? "";
  if (code.includes("popup-closed") || code.includes("cancelled-popup")) return null;
  if (code.includes("account-exists-with-different-credential")) return t.auth.errOtherProvider;
  if (code.includes("popup-blocked")) return t.auth.errPopupBlocked;
  if (code.includes("unauthorized-domain")) return t.auth.errDomain;
  return t.auth.errGeneric;
}

export function SignInButtons() {
  const { signIn, devSignIn } = useAuth();
  const { t } = useSiteI18n();
  const [busy, setBusy] = useState<ProviderId | null>(null);
  const [email, setEmail] = useState("");

  const go = async (id: ProviderId) => {
    setBusy(id);
    try {
      await signIn(id);
    } catch (e) {
      console.error("[auth] sign-in failed", (e as { code?: string })?.code ?? e);
      const m = friendly(e, t);
      if (m) toast.error(m);
    } finally {
      setBusy(null);
    }
  };

  return (
    <div className="flex flex-col gap-2.5">
      {PROVIDERS.map(({ id, key, Icon }) => (
        <Button
          key={id}
          variant="outline"
          size="lg"
          data-provider={id}
          className="h-11 justify-center gap-3 bg-background/40 text-[15px]"
          disabled={!firebaseEnabled || busy !== null}
          onClick={() => go(id)}
        >
          {busy === id ? <Loader2 className="size-4 animate-spin" /> : <Icon className="size-[18px]" />}
          {t.auth[key]}
        </Button>
      ))}

      {!firebaseEnabled && !devAuthEnabled && (
        <p className="mt-1 text-center text-xs text-muted-foreground">{t.auth.notConfigured}</p>
      )}

      {devAuthEnabled && (
        <form
          className="mt-3 flex flex-col gap-2 rounded-lg border border-dashed border-amber-400/40 p-3"
          onSubmit={(e) => {
            e.preventDefault();
            if (/^\S+@\S+\.\S+$/.test(email)) void devSignIn(email);
          }}
        >
          <p className="text-xs text-amber-500">{t.auth.devTitle}</p>
          <div className="flex gap-2">
            <Input type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Button type="submit" variant="secondary">
              <Mail className="size-4" /> {t.auth.devButton}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}

/** "By continuing you agree to our terms & privacy notice." */
export function AgreeNote({ className = "" }: { className?: string }) {
  const { t } = useSiteI18n();
  return (
    <p className={`text-center text-xs text-muted-foreground ${className}`}>
      {t.auth.agreePrefix}{" "}
      <a href="/terms" className="underline underline-offset-2">{t.auth.agreeLink}</a>.
    </p>
  );
}
