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
import type { InterestId } from "@/lib/interests";

const fmt = (ms: number) => new Date(ms).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });

export default function AccountPage() {
  const { status, profile, isAdmin, api, refresh, signOut } = useAuth();
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
    const errs = validateProfile(draft);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setBusy(true);
    const r = await api("/users/me", { method: "PATCH", body: JSON.stringify({ ...draft, country: draft.country || null }) });
    setBusy(false);
    if (r.ok) {
      toast.success("Profile saved");
      await refresh();
    } else toast.error("Couldn't save. Please try again.");
  };

  const deleteAccount = async () => {
    const r = await api("/users/me", { method: "DELETE" });
    if (!r.ok) return toast.error("Couldn't delete your account.");
    await signOut();
    toast.success("Your account was deleted.");
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
                  <h1 className="truncate font-[family-name:var(--font-display)] text-2xl font-bold">{profile.displayName}</h1>
                  <p className="truncate text-sm text-muted-foreground">@{profile.nickname} · {profile.email ?? "no email"}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge variant="secondary" className="capitalize">{profile.role}</Badge>
                    <Badge variant="outline">Signed in with {profile.provider.replace(".com", "")}</Badge>
                    <Badge variant="outline">Member since {fmt(profile.createdAt)}</Badge>
                  </div>
                </div>
                {isAdmin && (
                  <Button variant="outline" onClick={() => router.push("/admin/users")}>
                    <Shield className="size-4" /> User management
                  </Button>
                )}
              </CardContent>
            </Card>

            <TestHistory />

            <form onSubmit={save} noValidate>
              <Card className="tz-panel">
                <CardHeader>
                  <CardTitle>Profile &amp; preferences</CardTitle>
                  <CardDescription>Update how you appear and what you follow.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ProfileFields draft={draft} errors={errors} onChange={setDraft} />
                </CardContent>
                <CardFooter className="justify-end">
                  <Button type="submit" disabled={busy}>{busy && <Loader2 className="size-4 animate-spin" />} Save changes</Button>
                </CardFooter>
              </Card>
            </form>

            <Card className="border-destructive/40 tz-panel">
              <CardHeader>
                <CardTitle>Delete account</CardTitle>
                <CardDescription>Permanently removes your profile and sign-in. This can&apos;t be undone.</CardDescription>
              </CardHeader>
              <CardFooter>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive"><Trash2 className="size-4" /> Delete my account</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Delete your techzup.space account?</AlertDialogTitle>
                      <AlertDialogDescription>
                        Your profile and preferences will be removed permanently and you&apos;ll be signed out.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={deleteAccount}>Delete permanently</AlertDialogAction>
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
