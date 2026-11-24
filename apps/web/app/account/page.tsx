"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Shield, Trash2 } from "lucide-react";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ProfileFields, validateProfile, type ProfileDraft, type ProfileErrors } from "@/components/profile-fields";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TestHistory } from "@/components/test-history";
import { useAuth } from "@/lib/auth-context";
import { fill, useSiteI18n } from "@/lib/i18n";
import type { InterestId } from "@/lib/interests";


const providerLabel = (p: string) =>
  ({ "google.com": "Google", "facebook.com": "Facebook", "twitter.com": "X", dev: "dev" })[p] ?? p;

export default function AccountPage() {
  const { status, profile, isAdmin, api, refresh, signOut } = useAuth();
  const { t, date } = useSiteI18n();
  const a = t.account;
  const router = useRouter();
  const [draft, setDraft] = useState<ProfileDraft | null>(null);
  const [errors, setErrors] = useState<ProfileErrors>({});
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (status === "signed-out") router.replace("/login?next=/account");
    if (status === "needs-registration") router.replace("/register");
  }, [status, router]);

  useEffect(() => {
    if (profile)
      setDraft({
        nickname: profile.nickname,
        displayName: profile.displayName,
        country: profile.country ?? "",
        interests: profile.interests as InterestId[],
        newsletter: profile.newsletter,
      });
  }, [profile]);

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!draft) return;
    const errs = validateProfile(draft, t);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setBusy(true);
    const r = await api("/users/me", { method: "PATCH", body: JSON.stringify({ ...draft, country: draft.country || null }) });
    setBusy(false);
    if (r.ok) {
      toast.success(a.saved);
      await refresh();
    } else toast.error(a.saveError);
  };

  const deleteAccount = async () => {
    const r = await api("/users/me", { method: "DELETE" });
    if (!r.ok) return toast.error(a.deleteError);
    await signOut();
    toast.success(a.deleted);
    router.replace("/");
  };

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto grid w-full max-w-4xl flex-1 gap-6 px-4 py-10 sm:px-6">
        {!profile || !draft ? (
          <div className="flex justify-center py-24"><Loader2 className="size-6 animate-spin text-muted-foreground" /></div>
        ) : (
          <>
            <Card className="tz-panel">
              <CardContent className="flex flex-col items-start gap-4 pt-6 sm:flex-row sm:items-center">
                <Avatar className="size-16 border border-border">
                  <AvatarImage src={profile.photoURL ?? undefined} alt="" />
                  <AvatarFallback className="text-xl">{profile.nickname.slice(0, 1).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1">
                  <h1 className="break-words font-[family-name:var(--font-display)] text-xl font-bold sm:truncate sm:text-2xl">{profile.displayName}</h1>
                  <p className="break-all text-sm text-muted-foreground sm:truncate">@{profile.nickname} · {profile.email ?? a.noEmail}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge variant="secondary">{a.roles[profile.role]}</Badge>
                    <Badge variant="outline">{fill(a.signedInWith, { provider: providerLabel(profile.provider) })}</Badge>
                    <Badge variant="outline">{fill(a.memberSince, { date: date(profile.createdAt) })}</Badge>
                  </div>
                </div>
                {isAdmin && (
                  <Button variant="outline" onClick={() => router.push("/admin/users")}>
                    <Shield className="size-4" /> {t.nav.userManagement}
                  </Button>
                )}
              </CardContent>
            </Card>

            <TestHistory />

            <form onSubmit={save} noValidate>
              <Card className="tz-panel">
                <CardHeader>
                  <CardTitle>{a.profileTitle}</CardTitle>
                  <CardDescription>{a.profileDesc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ProfileFields draft={draft} errors={errors} onChange={setDraft} />
                </CardContent>
                <CardFooter className="justify-end">
                  <Button type="submit" disabled={busy}>{busy && <Loader2 className="size-4 animate-spin" />} {a.save}</Button>
                </CardFooter>
              </Card>
            </form>

            <Card className="border-destructive/40 tz-panel">
              <CardHeader>
                <CardTitle>{a.deleteTitle}</CardTitle>
                <CardDescription>{a.deleteDesc}</CardDescription>
              </CardHeader>
              <CardFooter>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive"><Trash2 className="size-4" /> {a.deleteButton}</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>{a.deleteConfirmTitle}</AlertDialogTitle>
                      <AlertDialogDescription>
                        {a.deleteConfirmDesc}
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>{a.cancel}</AlertDialogCancel>
                      <AlertDialogAction onClick={deleteAccount}>{a.deleteForever}</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </CardFooter>
            </Card>
          </>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
