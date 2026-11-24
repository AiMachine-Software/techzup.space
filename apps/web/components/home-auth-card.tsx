"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AgreeNote, SignInButtons } from "@/components/sign-in-buttons";
import { useAuth } from "@/lib/auth-context";
import { fill, useSiteI18n } from "@/lib/i18n";

export function HomeAuthCard() {
  const { status, profile } = useAuth();
  const { t } = useSiteI18n();
  const c = t.home.card;

  if (status === "ready" && profile) {
    const topics = profile.interests
      .map((i) => t.interests[i as keyof typeof t.interests]?.short ?? i)
      .join(", ");
    return (
      <Card className="tz-panel tz-panel-glow">
        <CardHeader>
          <CardTitle>{fill(c.welcome, { name: profile.nickname })}</CardTitle>
          <CardDescription>{fill(c.yourTopics, { topics: topics || c.noTopics })}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <Button asChild>
            <Link href="/account">{t.nav.myAccount} <ArrowRight className="size-4 rtl:rotate-180" /></Link>
          </Button>
          <Button asChild variant="outline">
            <a href="/ai-psychosis-test">{c.takeTest}</a>
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (status === "error")
    return (
      <Card className="tz-panel tz-panel-glow">
        <CardHeader>
          <CardTitle>{c.unavailableTitle}</CardTitle>
          <CardDescription>{c.unavailableDesc}</CardDescription>
        </CardHeader>
      </Card>
    );

  if (status === "needs-registration")
    return (
      <Card className="tz-panel tz-panel-glow">
        <CardHeader>
          <CardTitle>{c.oneMoreTitle}</CardTitle>
          <CardDescription>{c.oneMoreDesc}</CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild className="w-full">
            <Link href="/register">{t.nav.finishRegistration} <ArrowRight className="size-4 rtl:rotate-180" /></Link>
          </Button>
        </CardContent>
      </Card>
    );

  return (
    <Card className="tz-panel tz-panel-glow">
      <CardHeader>
        <CardTitle className="tz-display text-xl">{c.signInTitle}</CardTitle>
        <CardDescription>{c.signInDesc}</CardDescription>
      </CardHeader>
      <CardContent>
        <SignInButtons />
        <AgreeNote className="mt-4" />
      </CardContent>
    </Card>
  );
}
