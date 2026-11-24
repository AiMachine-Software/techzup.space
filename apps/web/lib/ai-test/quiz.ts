/**
 * ระบบคะแนนและโครงสร้างแบบทดสอบ 20 ข้อ — วัดความเสี่ยง AI-PSYCHOSIS / ANTI-AI PSYCHOSIS
 * เนื้อหาข้อความทั้งหมดอยู่ใน src/lib/i18n/<lang>.ts (ออกแบบจากงานวิจัยและรายงานเคสจริง — ดูแหล่งอ้างอิงในหน้าเว็บ)
 */

export type Dimension = "ai" | "anti";
export type LevelKey = "low" | "watch" | "high" | "critical";
export type VerdictKey = "balanced" | "watch" | "ai" | "anti" | "doomloop";
export type GuidanceKey = "ai" | "anti" | "balanced" | "doomloop";

/** โครงสร้างข้อคำถาม (ข้อความอยู่ในพจนานุกรม i18n ตาม id) */
export const QUESTIONS_META: { id: number; dimension: Dimension }[] = [
  { id: 1, dimension: "ai" },
  { id: 2, dimension: "anti" },
  { id: 3, dimension: "ai" },
  { id: 4, dimension: "anti" },
  { id: 5, dimension: "ai" },
  { id: 6, dimension: "anti" },
  { id: 7, dimension: "ai" },
  { id: 8, dimension: "anti" },
  { id: 9, dimension: "ai" },
  { id: 10, dimension: "anti" },
  { id: 11, dimension: "ai" },
  { id: 12, dimension: "anti" },
  { id: 13, dimension: "ai" },
  { id: 14, dimension: "anti" },
  { id: 15, dimension: "ai" },
  { id: 16, dimension: "anti" },
  { id: 17, dimension: "ai" },
  { id: 18, dimension: "anti" },
  { id: 19, dimension: "ai" },
  { id: 20, dimension: "anti" },
];

export const LIKERT_VALUES = [1, 2, 3, 4, 5] as const;

export function levelOf(pct: number): LevelKey {
  if (pct < 30) return "low";
  if (pct < 60) return "watch";
  if (pct < 80) return "high";
  return "critical";
}

export interface DimensionScore {
  pct: number;
  level: LevelKey;
}

export interface ScoreResult {
  ai: DimensionScore;
  anti: DimensionScore;
  verdictKey: VerdictKey;
  flaggedIds: number[];
}

export function computeScores(answers: Record<number, number>): ScoreResult {
  const avg = (dim: Dimension) => {
    const qs = QUESTIONS_META.filter((q) => q.dimension === dim);
    const sum = qs.reduce((acc, q) => acc + (answers[q.id] ?? 3), 0);
    return sum / qs.length;
  };
  const pctOf = (mean: number) => Math.round(((mean - 1) / 4) * 100);

  const aiPct = pctOf(avg("ai"));
  const antiPct = pctOf(avg("anti"));

  let verdictKey: VerdictKey;
  if (aiPct >= 60 && antiPct >= 60) {
    verdictKey = "doomloop";
  } else if (aiPct >= 60) {
    verdictKey = "ai";
  } else if (antiPct >= 60) {
    verdictKey = "anti";
  } else if (aiPct >= 30 || antiPct >= 30) {
    verdictKey = "watch";
  } else {
    verdictKey = "balanced";
  }

  const flaggedIds = QUESTIONS_META.filter((q) => (answers[q.id] ?? 0) >= 4).map(
    (q) => q.id
  );

  return {
    ai: { pct: aiPct, level: levelOf(aiPct) },
    anti: { pct: antiPct, level: levelOf(antiPct) },
    verdictKey,
    flaggedIds,
  };
}
