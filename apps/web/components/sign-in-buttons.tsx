"use client";

import { useState } from "react";
import { Loader2, Mail } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FacebookIcon, GoogleIcon, XIcon } from "@/components/brand-icons";
import { useAuth } from "@/lib/auth-context";
import { devAuthEnabled, firebaseEnabled, type ProviderId } from "@/lib/firebase";

const PROVIDERS: { id: ProviderId; label: string; Icon: React.ComponentType<{ className?: string }> }[] = [
  { id: "google", label: "Continue with Google", Icon: GoogleIcon },
  { id: "facebook", label: "Continue with Facebook", Icon: FacebookIcon },
  { id: "x", label: "Continue with X", Icon: XIcon },
];

function friendly(e: unknown) {
  const code = (e as { code?: string })?.code ?? "";
  if (code.includes("popup-closed") || code.includes("cancelled-popup")) return null;
  if (code.includes("account-exists-with-different-credential"))
    return "This email is already linked to another sign-in method. Use the provider you signed up with.";
  if (code.includes("popup-blocked")) return "Your browser blocked the sign-in popup. Allow popups and try again.";
  if (code.includes("unauthorized-domain")) return "This domain isn't authorised in Firebase Auth yet.";
  return "Sign-in failed. Please try again.";
}

export function SignInButtons() {
  const { signIn, devSignIn } = useAuth();
  const [busy, setBusy] = useState<ProviderId | null>(null);
  const [email, setEmail] = useState("");

  const go = async (id: ProviderId) => {
    setBusy(id);
    try {
      await signIn(id);
    } catch (e) {
      const m = friendly(e);
      if (m) toast.error(m);
    } finally {
      setBusy(null);
    }
  };

  return (
    <div className="flex flex-col gap-2.5">
      {PROVIDERS.map(({ id, label, Icon }) => (
        <Button
          key={id}
          variant="outline"
          size="lg"
          className="h-11 justify-center gap-3 bg-background/40 text-[15px]"
          disabled={!firebaseEnabled || busy !== null}
          onClick={() => go(id)}
        >
          {busy === id ? <Loader2 className="size-4 animate-spin" /> : <Icon className="size-[18px]" />}
          {label}
        </Button>
      ))}

      {!firebaseEnabled && !devAuthEnabled && (
        <p className="mt-1 text-center text-xs text-muted-foreground">
          Sign-in opens once Firebase is connected (NEXT_PUBLIC_FIREBASE_* settings).
        </p>
      )}

      {devAuthEnabled && (
        <form
          className="mt-3 flex flex-col gap-2 rounded-lg border border-dashed border-amber-400/40 p-3"
          onSubmit={(e) => {
            e.preventDefault();
            if (/^\S+@\S+\.\S+$/.test(email)) void devSignIn(email);
          }}
        >
          <p className="text-xs text-amber-300">Local dev sign-in (Firebase not configured)</p>
          <div className="flex gap-2">
            <Input type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Button type="submit" variant="secondary">
              <Mail className="size-4" /> Dev sign-in
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
