import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";
import { gradeOf, GRADE_STYLE, type Grade } from "@/lib/ai-test/grade";

const RARITY: Record<Grade, string> = { SSS: "MYTHIC", S: "LEGENDARY", A: "EPIC", B: "RARE", C: "UNCOMMON", D: "COMMON" };

/** ภาพพรีวิวลิงก์ (1200×630) สำหรับ X / Facebook — แสดง % และกราฟตำแหน่ง */
function pct(v: string | null): number {
  const n = Math.round(Number(v));
  return Number.isFinite(n) ? Math.min(100, Math.max(0, n)) : 0;
}

export async function GET(req: NextRequest) {
  const sp = req.nextUrl.searchParams;
  const ai = pct(sp.get("ai"));
  const anti = pct(sp.get("anti"));

  const verdict =
    ai >= 60 && anti >= 60
      ? { label: "DUAL-EXTREME PATTERN", color: "#ffc300" }
      : ai >= 60
        ? { label: "OVER-BELIEF PATTERN", color: "#ff2a6d" }
        : anti >= 60
          ? { label: "OVER-REJECTION PATTERN", color: "#00f5d4" }
          : ai >= 30 || anti >= 30
            ? { label: "WATCHLIST", color: "#b6ff2e" }
            : { label: "BALANCED REALIST", color: "#b6ff2e" };

  const { grade, clarity } = gradeOf(ai, anti);
  const gs = GRADE_STYLE[grade];
  const MAP = 400;
  const bar = (label: string, value: number, from: string, to: string) => (
    <div style={{ display: "flex", flexDirection: "column", marginTop: 26 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          color: "#fff",
        }}
      >
        <span style={{ fontSize: 28, fontWeight: 700 }}>{label}</span>
        <span style={{ fontSize: 64, fontWeight: 800, color: from, lineHeight: 1 }}>
          {value}%
        </span>
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 12,
          height: 24,
          width: "100%",
          borderRadius: 12,
          background: "rgba(255,255,255,0.12)",
        }}
      >
        <div
          style={{
            width: `${Math.max(4, value)}%`,
            height: 24,
            borderRadius: 12,
            background: `linear-gradient(90deg, ${from}, ${to})`,
          }}
        />
      </div>
    </div>
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          padding: 56,
          backgroundColor: "#050510",
          backgroundImage:
            "radial-gradient(circle at 10% 0%, rgba(255,42,109,0.35), rgba(255,42,109,0) 55%), radial-gradient(circle at 100% 60%, rgba(0,245,212,0.25), rgba(0,245,212,0) 55%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 1, paddingRight: 48 }}>
          <span style={{ fontSize: 40, fontWeight: 800 }}>AI-PSYCHOSIS CHECKLIST</span>
          <span
            style={{
              fontSize: 24,
              marginTop: 6,
              color: grade === "SSS" ? "#ff8a98" : "rgba(255,255,255,0.6)",
              fontWeight: grade === "SSS" ? 700 : 400,
            }}
          >
            {grade === "SSS"
              ? "Both poles high — please see a doctor soon"
              : "20-question mindset scan — my result"}
          </span>
          <div style={{ display: "flex", alignItems: "center", marginTop: 28, gap: 14 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "6px 16px",
              borderRadius: 10,
              backgroundImage: `linear-gradient(135deg, ${gs.from}, ${gs.to})`,
              color: "#0b0d1a",
              fontWeight: 900,
              boxShadow: `0 0 26px ${gs.color}`,
            }}
          >
            <span style={{ fontSize: 44, lineHeight: 1 }}>{grade}</span>
            <span style={{ fontSize: 20, marginLeft: 10, letterSpacing: 2 }}>
              {RARITY[grade]} · {clarity}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              padding: "8px 18px",
              borderRadius: 8,
              border: `2px solid ${verdict.color}`,
              color: verdict.color,
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: 3,
            }}
          >
            {verdict.label}
          </div>
          </div>
          {bar("AI-PSYCHOSIS", ai, "#ff2a6d", "#ffc300")}
          {bar("ANTI-AI PSYCHOSIS", anti, "#00f5d4", "#a06bff")}
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              position: "relative",
              width: MAP,
              height: MAP,
              marginTop: 34,
              borderRadius: 18,
              border: "2px solid rgba(255,255,255,0.25)",
              background: "rgba(255,255,255,0.05)",
              overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", left: MAP * 0.6, top: MAP * 0.4, width: MAP * 0.4, height: MAP * 0.6, background: "rgba(255,42,109,0.2)" }} />
            <div style={{ position: "absolute", left: 0, top: 0, width: MAP * 0.6, height: MAP * 0.4, background: "rgba(0,245,212,0.16)" }} />
            <div style={{ position: "absolute", left: MAP * 0.6, top: 0, width: MAP * 0.4, height: MAP * 0.4, background: "rgba(255,195,0,0.22)" }} />
            <div style={{ position: "absolute", left: 0, top: MAP * 0.7, width: MAP * 0.3, height: MAP * 0.3, background: "rgba(182,255,46,0.2)" }} />
            {[0.3, 0.6].map((t) => (
              <div key={`v${t}`} style={{ position: "absolute", left: MAP * t, top: 0, width: 2, height: MAP, background: "rgba(255,255,255,0.3)" }} />
            ))}
            {[0.3, 0.6].map((t) => (
              <div key={`h${t}`} style={{ position: "absolute", left: 0, top: MAP * (1 - t), width: MAP, height: 2, background: "rgba(255,255,255,0.3)" }} />
            ))}
            <div
              style={{
                position: "absolute",
                left: (MAP * ai) / 100 - 20,
                top: MAP - (MAP * anti) / 100 - 20,
                width: 36,
                height: 36,
                borderRadius: 18,
                background: "#fff",
                border: `7px solid ${verdict.color}`,
                boxShadow: `0 0 40px ${verdict.color}`,
              }}
            />
          </div>
          <span style={{ fontSize: 20, color: "rgba(255,255,255,0.6)", marginTop: 14 }}>
            AI-PSYCHOSIS % → · ANTI-AI % ↑
          </span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
