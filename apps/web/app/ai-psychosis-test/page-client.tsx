"use client";

import { useCallback, useEffect, useMemo } from "react";
import { BrainCircuit, HeartPulse } from "lucide-react";
import { Hero } from "@/components/ai-test/hero";
import { Phenomena } from "@/components/ai-test/phenomena";
import { QuizFlow } from "@/components/ai-test/quiz-flow";
import { Results } from "@/components/ai-test/results";
import { MemberGate, SaveResultToAccount } from "@/components/ai-test/member-gate";
import { useAuth } from "@/lib/auth-context";
import { claimSession, clearForOtherMember } from "@/lib/ai-test/test-session";
import { Guidance } from "@/components/ai-test/guidance";
import { References } from "@/components/ai-test/references";
import { LanguageSwitcher } from "@/components/ai-test/language-switcher";
import { ThemeSwitcher } from "@/components/ai-test/theme-switcher";
import { useI18n } from "@/lib/ai-test/i18n";
import { getFormText } from "@/lib/ai-test/i18n/form";
import { ProfileForm } from "@/components/ai-test/profile-form";
import { NeuralBackground } from "@/components/ai-test/neural-background";
import {
  attemptLabel,
  finishTest,
  formatShortDate,
  readAnswers,
  resetSession,
  setAnswer,
  useAnswersRaw,
  useAttempts,
  useProfile,
  useSession,
} from "@/lib/ai-test/test-session";
import { QUESTIONS_META, computeScores, type VerdictKey } from "@/lib/ai-test/quiz";

export function AiTestPage() {
  const { t, lang } = useI18n();
  const f = getFormText(lang);
  const profile = useProfile();
  const session = useSession();
  const attempts = useAttempts();
  const raw = useAnswersRaw();

  const answers = useMemo<Record<number, number>>(() => {
    if (!raw) return {};
    try {
      const parsed = JSON.parse(raw) as Record<number, number>;
      return parsed && typeof parsed === "object" ? parsed : {};
    } catch {
      return {};
    }
  }, [raw]);

  // สถานะ: ยังไม่เริ่ม (แบบฟอร์ม) → กำลังทำ (มีตัวจับเวลา) → เสร็จ (แสดงผล)
  // techzup.space membership is required to take the test
  const { status: memberStatus, profile: member } = useAuth();
  const isMember = memberStatus === "ready";

  // Tests belong to the member who took them: claim a new test, and never show or save
  // a previous person's test (shared browsers) to whoever is signed in now.
  useEffect(() => {
    if (!isMember || !member || !session) return;
    if (session.ownerUid && session.ownerUid !== member.uid) clearForOtherMember();
    else if (!session.ownerUid && session.finishedAt) clearForOtherMember();
    else if (!session.ownerUid) claimSession(member.uid);
  }, [isMember, member, session]);
  const finished = isMember && !!(profile && session?.finishedAt);
  const inProgress = isMember && !!(profile && session && !session.finishedAt);

  const scrollTo = (id: string) =>
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 80);

  const handleAnswer = useCallback((id: number, value: number) => setAnswer(id, value), []);

  const handleSubmit = useCallback(() => {
    if (!QUESTIONS_META.every((q) => readAnswers()[q.id] != null)) return;
    finishTest(false);
    scrollTo("results");
  }, []);

  const handleTimeout = useCallback(() => {
    finishTest(true);
    scrollTo("results");
  }, []);

  const handleRetake = useCallback(() => {
    resetSession();
    scrollTo("test");
  }, []);

  const verdictKey: VerdictKey | null = finished ? computeScores(answers).verdictKey : null;

  return (
    <div className="page-bg relative isolate flex min-h-screen flex-col text-white">
      {/* ฉากหลังไซเบอร์พังก์: ตารางเรืองแสง + ออร์บ + สแกนไลน์ */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="page-bg absolute inset-0" />
        <div className="cyber-grid cyber-grid-pan absolute inset-0" />
        {/* โครงข่ายประสาท 3D: น้ำเงิน=Anti · แดง=AI · เขียว=Balance · ส้ม=Doomloop */}
        <NeuralBackground focus={verdictKey} />
        <div className="page-vignette absolute inset-0" />
        <div className="scanlines absolute inset-0 opacity-70" />
      </div>

      {/* แถบนำทางแบบ HUD กระจกฝ้า */}
      <header className="page-bar sticky top-0 z-40 border-b border-white/10 backdrop-blur-xl">
        <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
          {/* เส้นเรืองแสงขอบล่าง */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#00f5d4]/60 to-transparent"
          />
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex shrink-0 cursor-pointer items-center gap-3 text-white"
          >
            <span className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-[#00f5d4]/40 bg-[#00f5d4]/5 transition-all group-hover:shadow-[0_0_18px_rgba(0,245,212,0.45)]">
              <BrainCircuit
                className="h-5 w-5 text-[#00f5d4] drop-shadow-[0_0_10px_rgba(0,245,212,0.9)]"
                aria-hidden
              />
            </span>
            <span className="hidden flex-col items-start leading-none min-[440px]:flex">
              <span className="text-[15px] font-extrabold tracking-wide text-white">
                AI-PSYCHOSIS
              </span>
              <span className="hud-label mt-1 text-[9px] text-[#00f5d4]/85">
                {t.nav.tagline}
              </span>
            </span>
          </button>

          <nav
            className="hidden items-center gap-0.5 text-[13px] font-medium text-white/60 lg:flex"
          >
            {[
              { id: "phenomena", label: t.nav.phenomena },
              { id: "test", label: t.nav.test },
              { id: "guidance", label: t.nav.guidance },
              { id: "references", label: t.nav.references },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() =>
                  document
                    .getElementById(item.id)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group relative cursor-pointer whitespace-nowrap rounded-lg px-2.5 py-2 transition-colors hover:bg-white/5 hover:text-white"
              >
                {item.label}
                <span
                  aria-hidden
                  className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r from-[#ff2a6d] to-[#00f5d4] transition-transform duration-300 group-hover:scale-x-100"
                />
              </button>
            ))}
          </nav>

          {/* ตัวเลือกธีม + ภาษา */}
          <div className="flex shrink-0 items-center gap-2">
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Hero
          onStart={() =>
            document.getElementById("test")?.scrollIntoView({ behavior: "smooth" })
          }
        />
        <Phenomena />
        {/* ส่วนแบบทดสอบ: อยู่ในหนึ่งหน้าจอพอดี ทั้ง desktop / tablet / mobile */}
        <section
          id="test"
          className="relative flex min-h-[calc(100svh-4rem)] scroll-mt-16 flex-col justify-center py-6 sm:py-10"
        >
          {/* พื้นหรี่หลังส่วนแบบทดสอบ ให้อ่านง่ายบนฉากโครงข่ายประสาท */}
          <div aria-hidden className="test-backdrop pointer-events-none absolute inset-0 -z-10" />
          <div className="mx-auto w-full max-w-3xl px-3 sm:px-6">
            <div className={`text-center ${inProgress ? "mb-3 sm:mb-4" : "mb-6 sm:mb-8"}`}>
              <p className="hud-label text-[10px] text-[#00f5d4]/80">[ MODULE :: SELF-REPORT ]</p>
              <h2
                className={`mt-2 font-bold text-white text-glow-white ${
                  inProgress ? "text-lg sm:text-2xl" : "text-2xl sm:text-3xl"
                }`}
              >
                {t.quiz.heading}
              </h2>
              {!inProgress && (
                <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/60">
                  {t.quiz.intro}
                </p>
              )}
            </div>
            {!isMember ? (
              <MemberGate />
            ) : inProgress && session && profile ? (
              <QuizFlow
                answers={answers}
                onAnswer={handleAnswer}
                onSubmit={handleSubmit}
                onTimeout={handleTimeout}
                startedAt={session.startedAt}
                profileName={profile.name}
              />
            ) : (
              <ProfileForm
                key={profile?.consentAt ?? "new"}
                initial={profile ?? (member ? { name: member.displayName, email: member.email ?? "" } : null)}
              />
            )}
          </div>
        </section>
        {finished && session?.finishedAt && profile && (
          <Results
            answers={answers}
            onRetake={handleRetake}
            meta={{
              name: profile.name,
              date: formatShortDate(session.finishedAt),
              attempt: attemptLabel(session.finishedAt, attempts),
              timedOutNote: session.timedOut ? f.timeUpNote : null,
            }}
          />
        )}
        {finished && session?.finishedAt && (
          <SaveResultToAccount
            answers={answers}
            finishedAt={session.finishedAt}
            timedOut={!!session.timedOut}
            ownerUid={session.ownerUid}
          />
        )}
        <Guidance verdictKey={verdictKey} />
        <References />
      </main>

      <footer className="page-bar relative mt-auto border-t border-white/10 backdrop-blur-xl">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ff2a6d]/50 to-transparent"
        />
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2.5 text-sm font-semibold text-white/70">
              <span className="relative flex h-8 w-8 items-center justify-center rounded-md border border-[#ff2a6d]/40 bg-[#ff2a6d]/5">
                <HeartPulse
                  className="h-4 w-4 text-[#ff2a6d] drop-shadow-[0_0_8px_rgba(255,42,109,0.9)]"
                  aria-hidden
                />
              </span>
              {t.footer.brand}
            </div>
            <p className="hud-label text-[10px] text-white/35">
              {t.footer.note}
            </p>
          </div>
          <p className="mt-6 border-t border-white/10 pt-5 text-center text-[12px] text-white/45">
            © {new Date().getFullYear()}{" "}
            <a
              href="https://techzup.space"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white/65 transition-colors hover:text-[#00f5d4]"
            >
              techzup.space
            </a>
            . All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
