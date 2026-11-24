/**
 * วาดการ์ดผลลัพธ์ (PNG 1080×1350 — สัดส่วน 4:5 สำหรับ Instagram/Facebook/X)
 * ใช้ canvas ของเบราว์เซอร์ จึงเรนเดอร์ได้ทุกภาษา/ตัวอักษรด้วยฟอนต์ของระบบ
 */
import type { VerdictKey } from "@/lib/ai-test/quiz";
import { GRADE_STYLE, type Grade } from "@/lib/ai-test/grade";

export interface ShareCardData {
  aiPct: number;
  antiPct: number;
  verdictKey: VerdictKey;
  heading: string;
  verdictSubtitle: string;
  verdictTitle: string;
  verdictDescription: string;
  aiLevel: string;
  antiLevel: string;
  mapHeading: string;
  youAreHere: string;
  footer: string;
  /** ชื่อผู้ทำแบบทดสอบ */
  name: string;
  /** 21/12/26 */
  date: string;
  /** ครั้งที่ในรอบปี เช่น 01/26 */
  attempt: string;
  labels: { name: string; date: string; attempt: string; disclaimer: string };
  grade: Grade;
  clarity: number;
  gradeTitle: string;
  rarity: string;
  dir: "ltr" | "rtl";
  lang: string;
}

const W = 1080;
const H = 1350;
const PAD = 72;
const FONT =
  '"Noto Sans Thai", "Geist", "Segoe UI", "Noto Sans", system-ui, -apple-system, sans-serif';
const MONO = '"Geist Mono", ui-monospace, Consolas, monospace';

const ACCENT: Record<VerdictKey, string> = {
  ai: "#ff2a6d",
  anti: "#00f5d4",
  doomloop: "#ffc300",
  watch: "#b6ff2e",
  balanced: "#b6ff2e",
};

/** ตัดบรรทัด — รองรับภาษาที่ไม่เว้นวรรค (ไทย/ลาว/เขมร/พม่า/จีน/ญี่ปุ่น) ผ่าน Intl.Segmenter */
function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number,
  lang: string
): string[] {
  let parts: string[];
  const Seg = (Intl as unknown as { Segmenter?: typeof Intl.Segmenter }).Segmenter;
  if (Seg) {
    parts = Array.from(new Seg(lang, { granularity: "word" }).segment(text), (s) => s.segment);
  } else {
    parts = text.split(/(\s+)/);
  }
  const lines: string[] = [];
  let line = "";
  for (const part of parts) {
    const candidate = line + part;
    if (line && ctx.measureText(candidate.trimEnd()).width > maxWidth) {
      lines.push(line.trimEnd());
      line = part.trimStart();
    } else {
      line = candidate;
    }
  }
  if (line.trim()) lines.push(line.trimEnd());
  return lines;
}

function drawLines(
  ctx: CanvasRenderingContext2D,
  lines: string[],
  x: number,
  y: number,
  lineHeight: number,
  maxLines: number
): number {
  const shown = lines.slice(0, maxLines);
  if (lines.length > maxLines) {
    shown[maxLines - 1] = shown[maxLines - 1].replace(/.{0,2}$/, "…");
  }
  shown.forEach((l, i) => ctx.fillText(l, x, y + i * lineHeight));
  return y + shown.length * lineHeight;
}

/** ตัดข้อความให้พอดีความกว้าง ต่อท้ายด้วย … */
function fitText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string {
  if (ctx.measureText(text).width <= maxWidth) return text;
  const chars = Array.from(text);
  while (chars.length > 1 && ctx.measureText(chars.join("") + "…").width > maxWidth) chars.pop();
  return chars.join("") + "…";
}

/** ดาว 5 แฉก */
function star(ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number) {
  ctx.beginPath();
  for (let i = 0; i < 10; i++) {
    const rad = i % 2 === 0 ? r : r * 0.45;
    const a = -Math.PI / 2 + (i * Math.PI) / 5;
    ctx.lineTo(cx + rad * Math.cos(a), cy + rad * Math.sin(a));
  }
  ctx.closePath();
}

/** การ์ดเกรดแบบการ์ดสะสม (S/A มีฟอยล์) */
function drawGradeEmblem(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  d: ShareCardData
) {
  const st = GRADE_STYLE[d.grade];
  ctx.save();
  ctx.direction = "ltr";
  // เงาเรืองแสง + กรอบไล่สี
  ctx.shadowColor = st.color;
  ctx.shadowBlur = 34;
  const border = ctx.createLinearGradient(x, y, x + w, y + h);
  border.addColorStop(0, st.from);
  border.addColorStop(1, st.to);
  roundRect(ctx, x, y, w, h, 18);
  ctx.fillStyle = border;
  ctx.fill();
  ctx.shadowBlur = 0;
  // พื้นใน
  roundRect(ctx, x + 7, y + 7, w - 14, h - 14, 13);
  ctx.fillStyle = "rgba(11,13,26,0.9)";
  ctx.fill();
  // ฟอยล์โฮโลแกรม
  if (st.foil) {
    ctx.save();
    roundRect(ctx, x + 7, y + 7, w - 14, h - 14, 13);
    ctx.clip();
    const foil = ctx.createLinearGradient(x, y + h, x + w, y);
    foil.addColorStop(0.2, "rgba(255,255,255,0)");
    foil.addColorStop(0.42, "rgba(255,255,255,0.22)");
    foil.addColorStop(0.5, "rgba(255,120,220,0.2)");
    foil.addColorStop(0.58, "rgba(120,220,255,0.2)");
    foil.addColorStop(0.8, "rgba(255,255,255,0)");
    ctx.fillStyle = foil;
    ctx.fillRect(x, y, w, h);
    ctx.restore();
  }
  // ดาว rarity
  const sr = 9;
  const gap = 22;
  const sx = x + w / 2 - gap * 2;
  for (let i = 0; i < 5; i++) {
    star(ctx, sx + i * gap, y + 32, sr);
    ctx.fillStyle = i < st.stars ? st.color : "rgba(255,255,255,0.14)";
    ctx.fill();
  }
  // ตัวอักษรเกรด
  ctx.textAlign = "center";
  ctx.textBaseline = "alphabetic";
  ctx.font = `900 ${d.grade === "SSS" ? 50 : 104}px "Orbitron", ${FONT}`;
  ctx.shadowColor = st.color;
  ctx.shadowBlur = 22;
  ctx.fillStyle = st.color;
  ctx.fillText(d.grade, x + w / 2, y + h * 0.66);
  ctx.shadowBlur = 0;
  // แถบความหายาก + คะแนน
  const bh = 34;
  const by = y + h - bh - 16;
  roundRect(ctx, x + 16, by, w - 32, bh, 6);
  ctx.fillStyle = st.color + "2e";
  ctx.fill();
  ctx.fillStyle = st.color;
  ctx.font = `800 19px ${FONT}`;
  ctx.fillText(fitText(ctx, `${d.rarity.toUpperCase()} · ${d.clarity}`, w - 44), x + w / 2, by + 24);
  ctx.restore();
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function drawBar(
  ctx: CanvasRenderingContext2D,
  y: number,
  label: string,
  pct: number,
  level: string,
  from: string,
  to: string,
  rtl: boolean
) {
  const x = PAD;
  const w = W - PAD * 2;
  // label (แบรนด์ ละติน) + ระดับ
  ctx.font = `700 30px ${FONT}`;
  ctx.fillStyle = "rgba(255,255,255,0.92)";
  ctx.textAlign = rtl ? "right" : "left";
  ctx.fillText(label, rtl ? x + w : x, y);
  ctx.font = `500 24px ${FONT}`;
  ctx.fillStyle = "rgba(255,255,255,0.6)";
  ctx.fillText(level, rtl ? x + w : x, y + 36);
  // ตัวเลข %
  ctx.font = `800 76px ${FONT}`;
  ctx.fillStyle = from;
  ctx.textAlign = rtl ? "left" : "right";
  ctx.direction = "ltr";
  ctx.fillText(`${pct}%`, rtl ? x : x + w, y + 30);
  ctx.direction = rtl ? "rtl" : "ltr";
  // ราง + แท่ง
  const by = y + 62;
  roundRect(ctx, x, by, w, 26, 13);
  ctx.fillStyle = "rgba(255,255,255,0.1)";
  ctx.fill();
  const fillW = Math.max(26, (w * pct) / 100);
  const g = ctx.createLinearGradient(x, 0, x + w, 0);
  g.addColorStop(0, from);
  g.addColorStop(1, to);
  roundRect(ctx, x, by, fillW, 26, 13);
  ctx.fillStyle = g;
  ctx.fill();
  // เส้นเกณฑ์ 30 / 60 / 80
  ctx.fillStyle = "rgba(5,5,16,0.75)";
  [30, 60, 80].forEach((t) => ctx.fillRect(x + (w * t) / 100 - 1, by, 2, 26));
}

function drawMap(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  d: ShareCardData
) {
  // โซนสี่มุม
  roundRect(ctx, x, y, size, size, 18);
  ctx.fillStyle = "rgba(255,255,255,0.045)";
  ctx.fill();
  ctx.save();
  roundRect(ctx, x, y, size, size, 18);
  ctx.clip();
  const zone = (zx: number, zy: number, zw: number, zh: number, c: string) => {
    ctx.fillStyle = c;
    ctx.fillRect(x + zx * size, y + zy * size, zw * size, zh * size);
  };
  // แกน x = AI-PSYCHOSIS (ซ้าย→ขวา), แกน y = ANTI-AI (ล่าง→บน)
  zone(0.6, 0.4, 0.4, 0.6, "rgba(255,42,109,0.16)"); // AI สูง
  zone(0, 0, 0.6, 0.4, "rgba(0,245,212,0.14)"); // ANTI สูง
  zone(0.6, 0, 0.4, 0.4, "rgba(255,195,0,0.18)"); // สองขั้ว
  zone(0, 0.7, 0.3, 0.3, "rgba(182,255,46,0.16)"); // สมดุล
  // กริด
  ctx.strokeStyle = "rgba(255,255,255,0.1)";
  ctx.lineWidth = 1;
  for (let i = 1; i < 10; i++) {
    ctx.beginPath();
    ctx.moveTo(x + (size * i) / 10, y);
    ctx.lineTo(x + (size * i) / 10, y + size);
    ctx.moveTo(x, y + (size * i) / 10);
    ctx.lineTo(x + size, y + (size * i) / 10);
    ctx.stroke();
  }
  // เส้นเกณฑ์ 30 / 60
  ctx.strokeStyle = "rgba(255,255,255,0.35)";
  ctx.setLineDash([8, 8]);
  [0.3, 0.6].forEach((t) => {
    ctx.beginPath();
    ctx.moveTo(x + size * t, y);
    ctx.lineTo(x + size * t, y + size);
    ctx.moveTo(x, y + size * (1 - t));
    ctx.lineTo(x + size, y + size * (1 - t));
    ctx.stroke();
  });
  ctx.setLineDash([]);
  ctx.restore();
  ctx.strokeStyle = "rgba(255,255,255,0.22)";
  ctx.lineWidth = 2;
  roundRect(ctx, x, y, size, size, 18);
  ctx.stroke();

  // จุดตำแหน่ง
  const px = x + (size * d.aiPct) / 100;
  const py = y + size - (size * d.antiPct) / 100;
  const accent = ACCENT[d.verdictKey];
  const glow = ctx.createRadialGradient(px, py, 0, px, py, 54);
  glow.addColorStop(0, accent + "aa");
  glow.addColorStop(1, accent + "00");
  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.arc(px, py, 54, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.arc(px, py, 15, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = accent;
  ctx.lineWidth = 6;
  ctx.stroke();

  // ป้ายแกน (ละติน — อ่านได้ทุกภาษา)
  ctx.direction = "ltr";
  ctx.font = `600 20px ${MONO}`;
  ctx.fillStyle = "rgba(255,255,255,0.6)";
  ctx.textAlign = "center";
  ctx.fillText("AI-PSYCHOSIS % →", x + size / 2, y + size + 34);
  ctx.save();
  ctx.translate(x - 18, y + size / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText("ANTI-AI % →", 0, 0);
  ctx.restore();
  ctx.direction = d.dir;
}

export async function renderShareCard(d: ShareCardData): Promise<Blob> {
  try {
    await document.fonts?.ready;
  } catch {
    /* ไม่เป็นไร ใช้ฟอนต์ fallback */
  }
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("canvas unsupported");
  const rtl = d.dir === "rtl";
  const accent = ACCENT[d.verdictKey];
  const startX = rtl ? W - PAD : PAD;
  const textW = W - PAD * 2;

  // พื้นหลัง
  ctx.fillStyle = "#050510";
  ctx.fillRect(0, 0, W, H);
  const orb = (cx: number, cy: number, r: number, c: string) => {
    const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
    g.addColorStop(0, c);
    g.addColorStop(1, "rgba(5,5,16,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
  };
  orb(120, 80, 620, "rgba(255,42,109,0.30)");
  orb(W - 80, 420, 620, "rgba(0,245,212,0.22)");
  orb(W / 2, H, 640, "rgba(160,107,255,0.24)");
  ctx.strokeStyle = "rgba(255,255,255,0.035)";
  ctx.lineWidth = 1;
  for (let gx = 0; gx <= W; gx += 54) {
    ctx.beginPath();
    ctx.moveTo(gx, 0);
    ctx.lineTo(gx, H);
    ctx.stroke();
  }
  for (let gy = 0; gy <= H; gy += 54) {
    ctx.beginPath();
    ctx.moveTo(0, gy);
    ctx.lineTo(W, gy);
    ctx.stroke();
  }
  // แถบสีบนสุด
  const top = ctx.createLinearGradient(0, 0, W, 0);
  top.addColorStop(0, "#ff2a6d");
  top.addColorStop(0.5, "#ffc300");
  top.addColorStop(1, "#00f5d4");
  ctx.fillStyle = top;
  ctx.fillRect(0, 0, W, 10);

  ctx.direction = d.dir;
  ctx.textBaseline = "alphabetic";
  ctx.textAlign = rtl ? "right" : "left";

  // หัวการ์ด
  ctx.font = `800 40px ${FONT}`;
  ctx.fillStyle = "#ffffff";
  ctx.fillText("AI-PSYCHOSIS", startX, 104);
  ctx.font = `500 26px ${FONT}`;
  ctx.fillStyle = "rgba(255,255,255,0.6)";
  ctx.fillText(d.heading, startX, 144);

  // ผู้ทำแบบทดสอบ: ชื่อ + วันที่ + ครั้งที่ (มุมบนฝั่งตรงข้ามกับหัวการ์ด)
  const infoX = rtl ? PAD : W - PAD;
  ctx.textAlign = rtl ? "left" : "right";
  ctx.font = `800 34px ${FONT}`;
  ctx.fillStyle = "#ffffff";
  ctx.fillText(fitText(ctx, d.name, 480), infoX, 100);
  ctx.font = `500 23px ${FONT}`;
  ctx.fillStyle = "rgba(255,255,255,0.68)";
  ctx.fillText(
    fitText(ctx, `${d.labels.date} ${d.date}  ·  ${d.labels.attempt} ${d.attempt}`, 520),
    infoX,
    142
  );
  ctx.textAlign = rtl ? "right" : "left";

  // ป้าย subtitle
  ctx.font = `700 22px ${MONO}`;
  const chipW = ctx.measureText(d.verdictSubtitle).width + 40;
  const chipX = rtl ? W - PAD - chipW : PAD;
  roundRect(ctx, chipX, 186, chipW, 46, 8);
  ctx.fillStyle = accent + "26";
  ctx.fill();
  ctx.strokeStyle = accent + "99";
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = accent;
  ctx.textAlign = "center";
  ctx.fillText(d.verdictSubtitle, chipX + chipW / 2, 217);
  ctx.textAlign = rtl ? "right" : "left";

  // การ์ดเกรด D → S (ฝั่งตรงข้ามกับหัวข้อคำตัดสิน)
  const EW = 150;
  const EH = 200;
  drawGradeEmblem(ctx, rtl ? PAD : W - PAD - EW, 172, EW, EH, d);
  ctx.direction = d.dir;
  ctx.textAlign = rtl ? "right" : "left";

  // ชื่อคำตัดสิน (เว้นที่ให้การ์ดเกรด)
  ctx.font = `800 58px ${FONT}`;
  ctx.fillStyle = "#ffffff";
  let y = drawLines(ctx, wrapText(ctx, d.verdictTitle, textW - EW - 32, d.lang), startX, 306, 68, 2);

  // แท่งคะแนนสองขั้ว
  y = Math.max(y, 172 + EH) + 62;
  drawBar(ctx, y, "AI-PSYCHOSIS", d.aiPct, d.aiLevel, "#ff2a6d", "#ffc300", rtl);
  y += 144;
  drawBar(ctx, y, "ANTI-AI PSYCHOSIS", d.antiPct, d.antiLevel, "#00f5d4", "#a06bff", rtl);
  y += 130;

  // กราฟตำแหน่ง + รายละเอียด
  const mapSize = 400;
  const mapX = rtl ? PAD + 26 : W - PAD - mapSize;
  const mapY = y + 46;
  ctx.textAlign = rtl ? "right" : "left";
  ctx.font = `700 26px ${FONT}`;
  ctx.fillStyle = "rgba(255,255,255,0.9)";
  const colW = textW - mapSize - 62;
  const colX = rtl ? W - PAD : PAD;
  let ty = drawLines(ctx, wrapText(ctx, d.mapHeading, colW, d.lang), colX, y + 30, 34, 2);
  ty += 14;
  ctx.font = `400 25px ${FONT}`;
  ctx.fillStyle = "rgba(255,255,255,0.74)";
  const descMaxLines = Math.max(4, Math.floor((mapY + mapSize + 40 - ty) / 37));
  drawLines(ctx, wrapText(ctx, d.verdictDescription, colW, d.lang), colX, ty + 22, 37, descMaxLines);
  drawMap(ctx, mapX, mapY, mapSize, d);

  // ท้ายการ์ด
  ctx.fillStyle = "rgba(255,255,255,0.14)";
  ctx.fillRect(PAD, H - 118, W - PAD * 2, 1);
  ctx.direction = "ltr";
  ctx.textAlign = "left";
  ctx.font = `600 24px ${MONO}`;
  ctx.fillStyle = "rgba(255,255,255,0.7)";
  ctx.fillText(d.footer, PAD, H - 66);
  ctx.textAlign = "right";
  ctx.fillStyle = accent;
  ctx.direction = d.dir;
  ctx.font = `600 22px ${FONT}`;
  ctx.fillText(fitText(ctx, d.labels.disclaimer, 500), W - PAD, H - 66);

  return new Promise<Blob>((resolve, reject) =>
    canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("toBlob failed"))), "image/png")
  );
}
