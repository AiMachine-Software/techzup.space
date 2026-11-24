"use client";

import { Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { INTERESTS, type InterestId } from "@/lib/interests";
import { cn } from "@/lib/utils";

export interface ProfileDraft {
  nickname: string;
  displayName: string;
  country: string;
  interests: InterestId[];
  newsletter: boolean;
}

export type ProfileErrors = Partial<Record<keyof ProfileDraft, string>>;

export function validateProfile(d: ProfileDraft): ProfileErrors {
  const e: ProfileErrors = {};
  if (d.nickname.trim().length < 2 || d.nickname.trim().length > 32) e.nickname = "2–32 characters.";
  if (!d.displayName.trim()) e.displayName = "Please enter your name.";
  else if (d.displayName.trim().length > 80) e.displayName = "80 characters max.";
  if (d.country.length > 56) e.country = "56 characters max.";
  return e;
}

export function ProfileFields({
  draft,
  errors,
  onChange,
}: {
  draft: ProfileDraft;
  errors: ProfileErrors;
  onChange: (d: ProfileDraft) => void;
}) {
  const set = <K extends keyof ProfileDraft>(k: K, v: ProfileDraft[K]) => onChange({ ...draft, [k]: v });
  const toggle = (id: InterestId) =>
    set("interests", draft.interests.includes(id) ? draft.interests.filter((x) => x !== id) : [...draft.interests, id]);

  return (
    <div className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="displayName" label="Name" hint="Real name or the name you go by" error={errors.displayName}>
          <Input id="displayName" value={draft.displayName} maxLength={80} autoComplete="name"
            aria-invalid={!!errors.displayName} onChange={(e) => set("displayName", e.target.value)} />
        </Field>
        <Field id="nickname" label="Nickname" hint="Shown on your profile" error={errors.nickname}>
          <Input id="nickname" value={draft.nickname} maxLength={32} autoComplete="nickname"
            aria-invalid={!!errors.nickname} onChange={(e) => set("nickname", e.target.value)} />
        </Field>
      </div>
      <Field id="country" label="Country (optional)" error={errors.country}>
        <Input id="country" value={draft.country} maxLength={56} autoComplete="country-name"
          onChange={(e) => set("country", e.target.value)} />
      </Field>

      <fieldset className="grid gap-2">
        <legend className="mb-1 text-sm font-medium">Topics you want to follow</legend>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {INTERESTS.map(({ id, short, Icon }) => {
            const on = draft.interests.includes(id);
            return (
              <button
                type="button"
                key={id}
                aria-pressed={on}
                onClick={() => toggle(id)}
                className={cn(
                  "flex items-center gap-2 rounded-lg border px-3 py-2.5 text-left text-sm transition",
                  on ? "border-cyan-400/70 bg-cyan-400/10 text-foreground" : "border-border text-muted-foreground hover:border-foreground/30"
                )}
              >
                {on ? <Check className="size-4 text-cyan-300" /> : <Icon className="size-4" />}
                {short}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="flex items-center justify-between gap-4 rounded-lg border border-border p-3">
        <div>
          <Label htmlFor="newsletter">Weekly digest email</Label>
          <p className="text-xs text-muted-foreground">The week&apos;s biggest tech &amp; AI stories. Unsubscribe anytime.</p>
        </div>
        <Switch id="newsletter" checked={draft.newsletter} onCheckedChange={(v) => set("newsletter", v)} />
      </div>
    </div>
  );
}

function Field({ id, label, hint, error, children }: { id: string; label: string; hint?: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error ? <p className="text-xs text-destructive">{error}</p> : hint ? <p className="text-xs text-muted-foreground">{hint}</p> : null}
    </div>
  );
}
