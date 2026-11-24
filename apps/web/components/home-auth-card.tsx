"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SignInButtons } from "@/components/sign-in-buttons";
import { useAuth } from "@/lib/auth-context";

export function HomeAuthCard() {
  const { status, profile } = useAuth();

  if (status === "ready" && profile)
    return (
      <Card className="bg-card/70 backdrop-blur">
        <CardHeader>
          <CardTitle>Welcome back, {profile.nickname}</CardTitle>
          <CardDescription>Your topics: {profile.interests.length ? profile.interests.join(", ").toUpperCase() : "none yet"}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <Button asChild>
            <Link href="/account">My account <ArrowRight className="size-4" /></Link>
          </Button>
          <Button asChild variant="outline">
            <a href="/ai-psychosis-test">Take the AI-Psychosis Test</a>
          </Button>
        </CardContent>
      </Card>
    );

  if (status === "error")
    return (
      <Card className="bg-card/70 backdrop-blur">
        <CardHeader>
          <CardTitle>Accounts are temporarily unavailable</CardTitle>
          <CardDescription>You&apos;re signed in, but we couldn&apos;t load your profile. Please try again shortly.</CardDescription>
        </CardHeader>
      </Card>
    );

  if (status === "needs-registration")
    return (
      <Card className="bg-card/70 backdrop-blur">
        <CardHeader>
          <CardTitle>One more step</CardTitle>
          <CardDescription>You&apos;re signed in. Finish your profile to activate your account.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild className="w-full">
            <Link href="/register">Finish registration <ArrowRight className="size-4" /></Link>
          </Button>
        </CardContent>
      </Card>
    );

  return (
    <Card className="bg-card/70 backdrop-blur">
      <CardHeader>
        <CardTitle className="font-[family-name:var(--font-display)] text-xl">Sign in to techzup.space</CardTitle>
        <CardDescription>New here? Signing in creates your account.</CardDescription>
      </CardHeader>
      <CardContent>
        <SignInButtons />
        <p className="mt-4 text-center text-xs text-muted-foreground">
          By continuing you agree to our <Link href="/terms" className="underline underline-offset-2">terms &amp; privacy notice</Link>.
        </p>
      </CardContent>
    </Card>
  );
}
