/**
 * สถานะการทำแบบทดสอบที่เก็บใน localStorage (อยู่ในเบราว์เซอร์เท่านั้น ไม่ส่งขึ้นเซิร์ฟเวอร์)
 * - profile: ข้อมูลผู้ทำแบบทดสอบ + เวลาที่ยินยอม
 * - session: เวลาเริ่ม/จบของรอบปัจจุบัน (ใช้คำนวณตัวจับเวลา 20 นาที)
 * - attempts: เวลาที่ทำเสร็จแต่ละครั้ง (ใช้หาครั้งที่ในรอบปี)
 */
import { useSyncExternalStore } from "react";

export const TEST_DURATION_MS = 20 * 60 * 1000;

export type Gender = "male" | "female" | "nonbinary" | "na";
export type AgeRange = "u18" | "18-24" | "25-34" | "35-44" | "45-54" | "55-64" | "65+";
export type AiExp = "lt1" | "y1_2" | "y2_3" | "y3p";

export const AGE_RANGES: AgeRange[] = ["u18", "18-24", "25-34", "35-44", "45-54", "55-64", "65+"];
export const GENDERS: Gender[] = ["male", "female", "nonbinary", "na"];
export const AI_EXPS: AiExp[] = ["lt1", "y1_2", "y2_3", "y3p"];

export interface Profile {
  name: string;
  email: string;
  gender: Gender;
  age: AgeRange;
  aiExp: AiExp;
  consentAt: number;
}

export interface Session {
  startedAt: number;
  finishedAt?: number;
  timedOut?: boolean;
}

const KEYS = {
  profile: "ai-psy-profile-v1",
  session: "ai-psy-session-v1",
  attempts: "ai-psy-attempts-v1",
  answers: "ai-psy-check-answers-v1",
} as const;

/* ---------- external store บน localStorage ---------- */
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  window.addEventListener("storage", cb);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", cb);
  };
}

function read(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function write(key: string, value: unknown | null) {
  try {
    if (value === null) window.localStorage.removeItem(key);
    else window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage ถูกบล็อก (private mode) — ข้ามไป */
  }
}

function parse<T>(raw: string | null, fallback: T): T {
  if (!raw) return fallback;
  try {
    const v = JSON.parse(raw);
    return v && typeof v === "object" ? (v as T) : fallback;
  } catch {
    return fallback;
  }
}

/** อ่านค่าดิบเป็น string เพื่อให้ snapshot เทียบกันได้ (useSyncExternalStore ต้องการค่าคงที่) */
function useRaw(key: string): string | null {
  return useSyncExternalStore(
    subscribe,
    () => read(key),
    () => null
  );
}

/* ---------- hooks ---------- */
export function useProfile(): Profile | null {
  const raw = useRaw(KEYS.profile);
  const p = parse<Profile | null>(raw, null);
  return p && typeof p.name === "string" && p.consentAt ? p : null;
}

export function useSession(): Session | null {
  const raw = useRaw(KEYS.session);
  const s = parse<Session | null>(raw, null);
  return s && typeof s.startedAt === "number" ? s : null;
}

export function useAnswersRaw(): string | null {
  return useRaw(KEYS.answers);
}

export function useAttempts(): number[] {
  const raw = useRaw(KEYS.attempts);
  const a = parse<number[]>(raw, []);
  return Array.isArray(a) ? a.filter((n) => typeof n === "number") : [];
}

/* ---------- actions ---------- */
export function readAnswers(): Record<number, number> {
  return parse<Record<number, number>>(read(KEYS.answers), {});
}

export function setAnswer(id: number, value: number) {
  write(KEYS.answers, { ...readAnswers(), [id]: value });
  emit();
}

/** บันทึกโปรไฟล์ + เริ่มรอบใหม่ (ล้างคำตอบเก่า เริ่มนับเวลา) */
export function startTest(profile: Omit<Profile, "consentAt">) {
  write(KEYS.profile, { ...profile, consentAt: Date.now() });
  write(KEYS.answers, null);
  write(KEYS.session, { startedAt: Date.now() } satisfies Session);
  emit();
}

/** จบรอบ (กดประมวลผล หรือหมดเวลา) และนับเป็นหนึ่งครั้งในประวัติ */
export function finishTest(timedOut: boolean) {
  const s = parse<Session | null>(read(KEYS.session), null);
  if (!s || s.finishedAt) return;
  const finishedAt = Date.now();
  write(KEYS.session, { ...s, finishedAt, timedOut });
  const attempts = parse<number[]>(read(KEYS.attempts), []);
  write(KEYS.attempts, [...(Array.isArray(attempts) ? attempts : []), finishedAt]);
  emit();
}

/** กลับไปหน้าแบบฟอร์ม (ข้อมูลโปรไฟล์ยังอยู่ให้แก้ไขได้) */
export function resetSession() {
  write(KEYS.session, null);
  write(KEYS.answers, null);
  emit();
}

/* ---------- helpers สำหรับรูปแชร์ ---------- */
const pad2 = (n: number) => String(n).padStart(2, "0");

/** 21/12/26 */
export function formatShortDate(ts: number): string {
  const d = new Date(ts);
  return `${pad2(d.getDate())}/${pad2(d.getMonth() + 1)}/${pad2(d.getFullYear() % 100)}`;
}

/** ครั้งที่ในรอบปีของการทดสอบที่จบเวลา ts → "01/26" */
export function attemptLabel(ts: number, attempts: number[]): string {
  const year = new Date(ts).getFullYear();
  const n = attempts.filter((a) => new Date(a).getFullYear() === year && a <= ts).length || 1;
  return `${pad2(n)}/${pad2(year % 100)}`;
}
