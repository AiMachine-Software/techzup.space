"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Loader2, Lock, UserPlus } from "lucide-react";
import { useAuth } from "@/lib/auth-context";
import { useSiteI18n } from "@/lib/i18n";
import { useI18n } from "@/lib/ai-test/i18n";
import { gradeOf } from "@/lib/ai-test/grade";
import { computeScores } from "@/lib/ai-test/quiz";

const NEXT = "/ai-psychosis-test";

/** Gate text follows the site language (22 languages). */
export function useGateText() {
  return useSiteI18n().t.gate;
}

/** True once the visitor is a registered, active techzup.space member. */
export function useIsMember() {
  return useAuth().status === "ready";
}

export function MemberGate() {
  const { status } = useAuth();
  const g = useGateText();

  const panel = "glass test-panel cyber-frame clip-corner relative rounded-sm p-6 text-center sm:p-8";

  if (status === "loading")
    return (
      <div className={panel} role="status">
        <Loader2 className="mx-auto h-6 w-6 animate-spin text-[#00f5d4]" aria-hidden />
        <p className="mt-3 text-sm text-white/70">{g.checking}</p>
      </div>
    );

  const box = (title: string, body: string, cta?: { href: string; label: string }) => (
    <div className={panel}>
      <p className="hud-label text-[10px] text-[#ff2a6d]">{g.label}</p>
      <Lock className="mx-auto mt-4 h-8 w-8 text-[#00f5d4]" aria-hidden />
      <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">{title}</h3>
      <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-white/70">{body}</p>
      {cta && (
        <a
          href={cta.href}
          className="clip-corner mt-6 inline-flex h-12 items-center gap-2 bg-gradient-to-r from-[#00f5d4] via-[#00b3ff] to-[#a06bff] px-6 text-base font-extrabold text-[#050510] shadow-[0_0_30px_rgba(0,245,212,0.45)] transition hover:brightness-110"
        >
          <UserPlus className="h-5 w-5" aria-hidden />
          {cta.label}
        </a>
      )}
    </div>
  );

  if (status === "needs-registration")
    return box(g.finishTitle, g.finishBody, { href: `/register?next=${encodeURIComponent(NEXT)}`, label: g.finish });
  if (status === "suspended") return box(g.title, g.suspended);
  if (status === "error") return box(g.title, g.error);
  return box(g.title, g.body, { href: `/login?next=${encodeURIComponent(NEXT)}`, label: g.join });
}

/** Saves a finished test to the member's account once (the server keys it by finishedAt). */
export function SaveResultToAccount({
  answers,
  finishedAt,
  timedOut,
}: {
  answers: Record<number, number>;
  finishedAt: number;
  timedOut: boolean;
}) {
  const { status, api } = useAuth();
  const { lang } = useI18n();
  const g = useGateText();
  const [state, setState] = useState<"idle" | "saving" | "saved" | "failed">("idle");
  const sent = useRef<number | null>(null);

  useEffect(() => {
    if (status !== "ready" || sent.current === finishedAt) return;
    sent.current = finishedAt;
    const s = computeScores(answers);
    const { grade, clarity } = gradeOf(s.ai.pct, s.anti.pct, s.verdictKey);
    setState("saving");
    void api("/results", {
      method: "POST",
      body: JSON.stringify({
        ai: s.ai.pct,
        anti: s.anti.pct,
        verdict: s.verdictKey,
        grade,
        clarity,
        timedOut,
        lang,
        finishedAt,
      }),
    }).then((r) => setState(r.ok ? "saved" : "failed"));
  }, [status, api, answers, finishedAt, timedOut, lang]);

  if (state === "idle") return null;
  return (
    <p
      role="status"
      className={`mx-auto mt-4 flex max-w-3xl items-center justify-center gap-2 px-4 text-center text-[13px] ${
        state === "failed" ? "text-amber-300" : "text-[#7ff5e4]"
      }`}
    >
      {state === "saving" ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : <CheckCircle2 className="h-4 w-4" aria-hidden />}
      {state === "saving" ? g.saving : state === "saved" ? g.saved : g.saveFailed}
    </p>
  );
}
