"use client";

import { useId, useState, type FormEvent, type ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Timer, UserRound } from "lucide-react";
import { useI18n } from "@/lib/ai-test/i18n";
import { getFormText } from "@/lib/ai-test/i18n/form";
import {
  AGE_RANGES,
  AI_EXPS,
  GENDERS,
  startTest,
  type AgeRange,
  type AiExp,
  type Gender,
  type Profile,
} from "@/lib/ai-test/test-session";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Field = "name" | "email" | "gender" | "age" | "aiExp" | "consent";

const inputCls =
  "h-11 w-full rounded-sm border border-white/15 bg-black/30 px-3 text-[15px] text-white placeholder:text-white/35 outline-none transition-[border-color,box-shadow] focus:border-[#00f5d4]/70 focus:shadow-[0_0_0_3px_rgba(0,245,212,0.18)] aria-[invalid=true]:border-[#ff2a6d]/80";

function FieldWrap({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-[13px] font-semibold text-white/80">
        {label} <span className="text-[#ff8fb3]" aria-hidden>*</span>
      </label>
      {children}
      <p id={`${id}-err`} className="min-h-[1rem] text-[12px] leading-4 text-[#ff8fb3]" role={error ? "alert" : undefined}>
        {error}
      </p>
    </div>
  );
}

export function ProfileForm({ initial }: { initial: Profile | null }) {
  const { t, lang } = useI18n();
  const f = getFormText(lang);
  const uid = useId();
  const id = (k: string) => `${uid}-${k}`;

  const [name, setName] = useState(initial?.name ?? "");
  const [email, setEmail] = useState(initial?.email ?? "");
  const [gender, setGender] = useState<Gender | "">(initial?.gender ?? "");
  const [age, setAge] = useState<AgeRange | "">(initial?.age ?? "");
  const [aiExp, setAiExp] = useState<AiExp | "">(initial?.aiExp ?? "");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});

  const validate = () => {
    const e: Partial<Record<Field, string>> = {};
    if (!name.trim()) e.name = f.errors.required;
    if (!email.trim()) e.email = f.errors.required;
    else if (!EMAIL_RE.test(email.trim())) e.email = f.errors.email;
    if (!gender) e.gender = f.errors.required;
    if (!age) e.age = f.errors.required;
    if (!aiExp) e.aiExp = f.errors.required;
    if (!consent) e.consent = f.errors.consent;
    return e;
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    const first = (Object.keys(e) as Field[])[0];
    if (first) {
      document.getElementById(id(first))?.focus();
      return;
    }
    startTest({
      name: name.trim().slice(0, 40),
      email: email.trim(),
      gender: gender as Gender,
      age: age as AgeRange,
      aiExp: aiExp as AiExp,
    });
    requestAnimationFrame(() =>
      document.getElementById("test")?.scrollIntoView({ behavior: "smooth", block: "start" })
    );
  };

  const ageLabel = (a: AgeRange) => (a === "u18" ? f.ageUnder18 : a);
  const err = (k: Field) => errors[k];
  const aria = (k: Field) => ({
    "aria-invalid": err(k) ? true : undefined,
    "aria-describedby": `${id(k)}-err`,
  });

  return (
    <motion.form
      noValidate
      onSubmit={onSubmit}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="glass test-panel cyber-frame clip-corner relative rounded-sm p-5 sm:p-7"
    >
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[#00f5d4]/40 bg-[#00f5d4]/8">
          <UserRound className="h-5 w-5 text-[#00f5d4]" aria-hidden />
        </span>
        <div>
          <h3 className="text-lg font-bold text-white sm:text-xl">{f.heading}</h3>
          <p className="mt-1 flex items-start gap-1.5 text-[13px] leading-relaxed text-white/60">
            <Timer className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#b6ff2e]" aria-hidden />
            {f.intro}
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-x-4 gap-y-1 sm:grid-cols-2">
        <FieldWrap id={id("name")} label={f.name} error={err("name")}>
          <input
            id={id("name")}
            className={inputCls}
            value={name}
            maxLength={40}
            autoComplete="nickname"
            placeholder={f.namePh}
            onChange={(e) => setName(e.target.value)}
            {...aria("name")}
          />
        </FieldWrap>
        <FieldWrap id={id("email")} label={f.email} error={err("email")}>
          <input
            id={id("email")}
            type="email"
            inputMode="email"
            className={inputCls}
            value={email}
            autoComplete="email"
            placeholder={f.emailPh}
            onChange={(e) => setEmail(e.target.value)}
            {...aria("email")}
          />
        </FieldWrap>
        <FieldWrap id={id("gender")} label={f.gender} error={err("gender")}>
          <select
            id={id("gender")}
            className={`${inputCls} cursor-pointer`}
            value={gender}
            onChange={(e) => setGender(e.target.value as Gender)}
            {...aria("gender")}
          >
            <option value="" disabled>{f.select}</option>
            {GENDERS.map((g) => (
              <option key={g} value={g}>{f.genders[g]}</option>
            ))}
          </select>
        </FieldWrap>
        <FieldWrap id={id("age")} label={f.age} error={err("age")}>
          <select
            id={id("age")}
            className={`${inputCls} cursor-pointer`}
            value={age}
            onChange={(e) => setAge(e.target.value as AgeRange)}
            {...aria("age")}
          >
            <option value="" disabled>{f.select}</option>
            {AGE_RANGES.map((a) => (
              <option key={a} value={a}>{ageLabel(a)}</option>
            ))}
          </select>
        </FieldWrap>
        <div className="sm:col-span-2">
          <FieldWrap id={id("aiExp")} label={f.aiExp} error={err("aiExp")}>
            <select
              id={id("aiExp")}
              className={`${inputCls} cursor-pointer`}
              value={aiExp}
              onChange={(e) => setAiExp(e.target.value as AiExp)}
              {...aria("aiExp")}
            >
              <option value="" disabled>{f.select}</option>
              {AI_EXPS.map((x) => (
                <option key={x} value={x}>{f.exps[x]}</option>
              ))}
            </select>
          </FieldWrap>
        </div>
      </div>

      {/* ข้อตกลง */}
      <div className="mt-2 rounded-sm border border-white/12 bg-black/25 p-4">
        <h4 className="flex items-center gap-2 text-[13px] font-bold text-white/85">
          <ShieldCheck className="h-4 w-4 text-[#b6ff2e]" aria-hidden />
          {f.termsHeading}
        </h4>
        <ul className="mt-2.5 max-h-36 list-disc space-y-1.5 overflow-y-auto ps-5 text-[12.5px] leading-relaxed text-white/65">
          {f.terms.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>

      <label
        htmlFor={id("consent")}
        className="mt-4 flex cursor-pointer items-start gap-3 text-[13.5px] leading-relaxed text-white/80"
      >
        <input
          id={id("consent")}
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer accent-[#00f5d4]"
          {...aria("consent")}
        />
        <span>{f.consent}</span>
      </label>
      <p id={`${id("consent")}-err`} className="min-h-[1rem] ps-8 text-[12px] text-[#ff8fb3]" role={errors.consent ? "alert" : undefined}>
        {errors.consent}
      </p>

      <button
        type="submit"
        className="clip-corner group relative mt-3 inline-flex h-12 w-full cursor-pointer items-center justify-center gap-2 overflow-hidden bg-gradient-to-r from-[#ff2a6d] via-[#ff5e3a] to-[#ffc300] px-7 text-base font-extrabold text-[#050510] shadow-[0_0_30px_rgba(255,42,109,0.4)] transition-[box-shadow,filter] hover:brightness-110 active:brightness-95 sm:w-auto"
        style={{ color: "#050510" }}
      >
        {f.start}
        <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden />
      </button>
      <span className="sr-only">{t.quiz.heading}</span>
    </motion.form>
  );
}
