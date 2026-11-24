"use client";

import { useEffect, useRef, useState } from "react";
import { Timer } from "lucide-react";
import { TEST_DURATION_MS } from "@/lib/ai-test/test-session";

/** สีไล่จากเขียว (เต็มเวลา) → เหลือง → แดง (หมดเวลา) */
function colorFor(frac: number): string {
  const hue = Math.round(120 * Math.max(0, Math.min(1, frac)));
  return `hsl(${hue} 95% 52%)`;
}

export function Countdown({
  startedAt,
  label,
  onTimeout,
}: {
  startedAt: number;
  label: string;
  onTimeout: () => void;
}) {
  const remainingAt = () => Math.max(0, startedAt + TEST_DURATION_MS - Date.now());
  const [left, setLeft] = useState(remainingAt);
  const firedRef = useRef(false);
  const cbRef = useRef(onTimeout);
  cbRef.current = onTimeout;

  useEffect(() => {
    firedRef.current = false;
    const tick = () => {
      const r = remainingAt();
      setLeft(r);
      if (r <= 0 && !firedRef.current) {
        firedRef.current = true;
        cbRef.current();
      }
    };
    tick();
    const iv = window.setInterval(tick, 250);
    return () => window.clearInterval(iv);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startedAt]);

  const secs = Math.ceil(left / 1000);
  const mm = String(Math.floor(secs / 60)).padStart(2, "0");
  const ss = String(secs % 60).padStart(2, "0");
  const frac = left / TEST_DURATION_MS;
  const color = colorFor(frac);
  const urgent = secs <= 60;

  return (
    <div
      className="flex min-w-0 flex-col items-center"
      role="timer"
      aria-label={`${label} ${mm}:${ss}`}
    >
      <div
        className={`flex items-center gap-1.5 rounded-sm border px-2.5 py-1 font-display text-lg font-bold tabular-nums leading-none sm:text-xl ${
          urgent ? "animate-pulse" : ""
        }`}
        style={{
          color,
          borderColor: color,
          boxShadow: `0 0 14px ${color}55`,
          backgroundColor: "rgba(0,0,0,0.25)",
        }}
      >
        <Timer className="h-4 w-4" aria-hidden />
        <span aria-hidden>
          {mm}:{ss}
        </span>
      </div>
      <div className="mt-1 h-1 w-24 overflow-hidden rounded-full bg-white/10" aria-hidden>
        <div
          className="h-full rounded-full transition-[width] duration-300 ease-linear"
          style={{ width: `${frac * 100}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}
