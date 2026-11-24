/**
 * Clarity Grade — เกรดความชัดเจนของวิธีคิด จัดระดับแบบความหายากของการ์ดสะสม (D → S)
 *
 * หลักคิด: แบบทดสอบวัดความหลงผิด 2 ขั้ว ยิ่ง "ขั้วที่หนักกว่า" สูง ยิ่งเสี่ยง
 * จึงให้น้ำหนักขั้วที่สูงกว่า 80% และขั้วที่ต่ำกว่า 20% (กันกรณีเอียงทั้งสองทาง)
 *
 *   clarity = 100 − (0.8 × max(ai, anti) + 0.2 × min(ai, anti))
 *
 *   S  ≥ 88  Legendary  — ทั้งสองขั้วนิ่งมาก (เฉลี่ยตอบ ≈ "ไม่เห็นด้วยอย่างยิ่ง")
 *   A  ≥ 72  Epic       — อยู่ในโซนสมดุล (ทั้งสองขั้ว < 30%)
 *   B  ≥ 56  Rare       — เริ่มเอียง แต่ยังอยู่ในเกณฑ์ปกติ
 *   C  ≥ 40  Uncommon   — เข้าโซนเฝ้าระวัง / ขั้วใดขั้วหนึ่งแตะเกณฑ์
 *   D  < 40  Common     — รูปแบบความคิดเอนไปทางหลงผิดชัดเจน
 *
 * SSS (Mythic) — DOOMLOOP: ทั้งสองขั้ว ≥ 60% พร้อมกัน
 *   แยกออกจากบันได D → S: เป็นผลที่พบได้น้อยที่สุด และน่ากังวลที่สุด
 *   แสดงเป็นสีแดงพร้อมคำแนะนำให้ปรึกษาแพทย์โดยเร็ว
 *
 * ชื่อ rarity ไม่ใช่คำตัดสินตัวบุคคล — D = "Common" สื่อว่ารูปแบบนี้พบได้บ่อยและปรับได้
 */
import type { VerdictKey } from "@/lib/ai-test/quiz";

export type Grade = "SSS" | "S" | "A" | "B" | "C" | "D";

/** บันไดเกรดปกติ (SSS อยู่นอกบันได) */
export const GRADES: Exclude<Grade, "SSS">[] = ["S", "A", "B", "C", "D"];

export const GRADE_MIN: Record<Exclude<Grade, "SSS">, number> = { S: 88, A: 72, B: 56, C: 40, D: 0 };

export interface GradeStyle {
  /** สีหลักของเกรด */
  color: string;
  /** ไล่สีพื้นการ์ด */
  from: string;
  to: string;
  /** การ์ดฟอยล์โฮโลแกรม (S, A) */
  foil: boolean;
  /** จำนวนดาว rarity */
  stars: number;
}

export const GRADE_STYLE: Record<Grade, GradeStyle> = {
  SSS: { color: "#ff3b4f", from: "#ff1744", to: "#7a0b2e", foil: true, stars: 5 },
  S: { color: "#ffd84d", from: "#ffcf3a", to: "#ff5ea8", foil: true, stars: 5 },
  A: { color: "#c084ff", from: "#a855f7", to: "#22d3ee", foil: true, stars: 4 },
  B: { color: "#4fa8ff", from: "#3b82f6", to: "#06b6d4", foil: false, stars: 3 },
  C: { color: "#5ee07a", from: "#22c55e", to: "#84cc16", foil: false, stars: 2 },
  D: { color: "#a3abbd", from: "#64748b", to: "#94a3b8", foil: false, stars: 1 },
};

export function clarityScore(aiPct: number, antiPct: number): number {
  const hi = Math.max(aiPct, antiPct);
  const lo = Math.min(aiPct, antiPct);
  return Math.max(0, Math.min(100, Math.round(100 - (0.8 * hi + 0.2 * lo))));
}

export function gradeOf(
  aiPct: number,
  antiPct: number,
  verdictKey?: VerdictKey
): { grade: Grade; clarity: number } {
  const clarity = clarityScore(aiPct, antiPct);
  if (verdictKey === "doomloop" || (aiPct >= 60 && antiPct >= 60)) return { grade: "SSS", clarity };
  const grade = GRADES.find((g) => clarity >= GRADE_MIN[g]) ?? "D";
  return { grade, clarity };
}
