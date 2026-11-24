"use client";

import { Suspense, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Logo } from "@/components/site-header";
import { SignInButtons } from "@/components/sign-in-buttons";
import { useAuth } from "@/lib/auth-context";

function safeNext(v: string | null) {
  return v && v.startsWith("/") && !v.startsWith("//") ? v : "/account";
}

function LoginInner() {
  const { status } = useAuth();
  const router = useRouter();
  const next = safeNext(useSearchParams().get("next"));

  useEffect(() => {
    if (status === "needs-registration") router.replace("/register");
    else if (status === "ready") router.replace(next === "/register" ? "/account" : next);
  }, [status, next, router]);

  return (
    <Card className="w-full max-w-md bg-card/70 backdrop-blur">
      <CardHeader className="items-center text-center">
        <Logo />
        <CardTitle className="mt-4 font-[family-name:var(--font-display)] text-2xl">Sign in or create an account</CardTitle>
        <CardDescription>Use Google (Gmail), Facebook or X. New members finish a short profile next.</CardDescription>
      </CardHeader>
      <CardContent>
        {status === "suspended" ? (
          <p className="rounded-md border border-destructive/50 bg-destructive/10 p-3 text-sm">
            This account is suspended. Contact the techzup.space team if you think this is a mistake.
          </p>
        ) : (
          <SignInButtons />
        )}
        <p className="mt-6 text-center text-xs text-muted-foreground">
          By continuing you agree to our{" "}
          <Link href="/terms" className="underline underline-offset-2">terms &amp; privacy notice</Link>.
        </p>
      </CardContent>
    </Card>
  );
}

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center px-4 py-12">
      <div aria-hidden className="brand-grid absolute inset-0 -z-10" />
      <Suspense>
        <LoginInner />
      </Suspense>
    </main>
  );
}
