"use client";

import { Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Logo } from "@/components/site-header";
import { AgreeNote, SignInButtons } from "@/components/sign-in-buttons";
import { VerifyEmailCard } from "@/components/email-auth";
import { useSiteI18n } from "@/lib/i18n";
import { useAuth } from "@/lib/auth-context";
import { goTo, safeNext } from "@/lib/next-path";


function LoginInner() {
  const { status, checkVerified, refresh } = useAuth();
  const { t } = useSiteI18n();
  const router = useRouter();
  const params = useSearchParams();
  const next = safeNext(params.get("next"));
  const cameFromVerifyLink = params.get("verified") === "1";

  // Back from the verification email link: re-check with Firebase automatically.
  useEffect(() => {
    if (status === "needs-verification" && cameFromVerifyLink)
      void checkVerified().then((ok) => {
        if (ok) void refresh();
      });
  }, [status, cameFromVerifyLink, checkVerified, refresh]);

  useEffect(() => {
    if (status === "needs-registration")
      router.replace(next === "/register" || next === "/account" ? "/register" : `/register?next=${encodeURIComponent(next)}`);
    else if (status === "ready") goTo(next === "/register" ? "/account" : next, router.replace);
  }, [status, next, router]);

  return (
    <Card className="tz-panel tz-panel-glow w-full max-w-md">
      <CardHeader className="flex flex-col items-center gap-2 text-center">
        <Logo size="lg" className="justify-center" />
        <p className="tz-kicker mt-3 text-[#4cc3ff]">{t.login.kicker}</p>
        <CardTitle className="tz-display text-2xl">{t.login.title}</CardTitle>
        <CardDescription className="max-w-xs">{t.login.desc}</CardDescription>
      </CardHeader>
      <CardContent>
        {status === "suspended" ? (
          <p className="rounded-md border border-destructive/50 bg-destructive/10 p-3 text-sm">
            {t.login.suspended}
          </p>
        ) : status === "needs-verification" ? (
          <VerifyEmailCard />
        ) : status === "error" ? (
          <p className="rounded-md border border-amber-400/50 bg-amber-400/10 p-3 text-sm">
            {t.login.unavailable}
          </p>
        ) : (
          <SignInButtons />
        )}
        <AgreeNote className="mt-6" />
      </CardContent>
    </Card>
  );
}

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-12">
      <div aria-hidden className="tz-laser tz-laser-blue left-0 top-[18%] -rotate-[14deg]" />
      <div aria-hidden className="tz-laser tz-laser-red right-0 top-[22%] rotate-[14deg]" />
      <Suspense>
        <LoginInner />
      </Suspense>
    </main>
  );
}
