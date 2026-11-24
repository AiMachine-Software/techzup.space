"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ProfileFields, validateProfile, type ProfileDraft, type ProfileErrors } from "@/components/profile-fields";
import { SiteHeader } from "@/components/site-header";
import { useAuth } from "@/lib/auth-context";
import { goTo, safeNext } from "@/lib/next-path";
import { fillNodes, useSiteI18n } from "@/lib/i18n";

export default function RegisterPage() {
  return (
    <Suspense>
      <RegisterInner />
    </Suspense>
  );
}

function RegisterInner() {
  const { status, identity, api, refresh } = useAuth();
  const { t } = useSiteI18n();
  const router = useRouter();
  const next = safeNext(useSearchParams().get("next"));
  const [draft, setDraft] = useState<ProfileDraft>({ nickname: "", displayName: "", country: "", interests: ["ai", "ml"], newsletter: true });
  const [terms, setTerms] = useState(false);
  const [errors, setErrors] = useState<ProfileErrors & { terms?: string }>({});
  const [busy, setBusy] = useState(false);
  const [prefilled, setPrefilled] = useState(false);

  useEffect(() => {
    if (status === "signed-out") router.replace(`/login?next=${encodeURIComponent(next === "/account" ? "/register" : next)}`);
    if (status === "ready") goTo(next, router.replace);
  }, [status, router, next]);

  // Prefill from the social account once
  useEffect(() => {
    if (!identity || prefilled) return;
    const name = identity.name ?? "";
    setDraft((d) => ({ ...d, displayName: name, nickname: (name.split(" ")[0] || identity.email?.split("@")[0] || "").slice(0, 32) }));
    setPrefilled(true);
  }, [identity, prefilled]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs: typeof errors = validateProfile(draft, t);
    if (!terms) errs.terms = t.register.errTerms;
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setBusy(true);
    const r = await api("/users/register", {
      method: "POST",
      body: JSON.stringify({ ...draft, country: draft.country || null, acceptTerms: true }),
    });
    setBusy(false);
    if (!r.ok) {
      toast.error(r.status === 403 ? t.register.errSuspended : t.register.errSave);
      return;
    }
    toast.success(t.register.welcome);
    await refresh();
    goTo(next, router.replace);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-10 sm:px-6">
        <form onSubmit={submit} noValidate>
          <Card className="tz-panel">
            <CardHeader>
              <p className="text-xs font-medium uppercase tracking-widest text-[#4cc3ff]">{t.register.step}</p>
              <CardTitle className="font-[family-name:var(--font-display)] text-2xl">{t.register.title}</CardTitle>
              <CardDescription>
                {fillNodes(t.register.signedInAs, {
                  who: <span className="text-foreground">{identity?.email ?? identity?.name ?? "…"}</span>,
                })}
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              {status === "loading" ? (
                <div className="flex justify-center py-10"><Loader2 className="size-6 animate-spin text-muted-foreground" /></div>
              ) : (
                <>
                  <ProfileFields draft={draft} errors={errors} onChange={setDraft} />
                  <div className="grid gap-1.5">
                    <div className="flex items-start gap-3">
                      <Checkbox id="terms" checked={terms} onCheckedChange={(v) => setTerms(v === true)} aria-invalid={!!errors.terms} className="mt-0.5" />
                      <Label htmlFor="terms" className="text-sm font-normal leading-relaxed">
                        {fillNodes(t.register.agree, {
                          link: (
                            <Link href="/terms" target="_blank" className="underline underline-offset-2">
                              {t.auth.agreeLink}
                            </Link>
                          ),
                        })}
                      </Label>
                    </div>
                    {errors.terms && <p className="text-xs text-destructive">{errors.terms}</p>}
                  </div>
                </>
              )}
            </CardContent>
            <CardFooter className="justify-end">
              <Button type="submit" size="lg" disabled={busy || status !== "needs-registration"}>
                {busy && <Loader2 className="size-4 animate-spin" />} {t.register.submit}
              </Button>
            </CardFooter>
          </Card>
        </form>
      </main>
    </div>
  );
}
