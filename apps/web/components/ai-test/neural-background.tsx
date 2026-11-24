"use client";

import { useEffect, useRef } from "react";
import type { VerdictKey } from "@/lib/ai-test/quiz";

/**
 * ฉากหลังโครงข่ายประสาท 3 มิติแบบอนุภาค ขยับตามเมาส์
 *   ฝั่งซ้าย  (แดง)    — AI Psychosis
 *   ฝั่งขวา  (น้ำเงิน) — Anti-AI Psychosis
 *   ตรงกลาง  (เขียว)   — Balance: สะพานเชื่อมสองขั้ว
 *   ห่วงเลขแปด (ส้ม)  — Doomloop: วนผ่านทั้งสองขั้วไม่รู้จบ
 * จอแนวตั้ง (มือถือ) จะเรียงบน-ล่างแทนซ้าย-ขวา
 */

const COLORS = ["#3b9bff", "#ff3b4f", "#34e07a", "#ff9a2e"] as const;
type G = 0 | 1 | 2 | 3; // anti, ai, balance, doom

const FOCUS: Partial<Record<VerdictKey, G>> = { anti: 0, ai: 1, balanced: 2, doomloop: 3 };

interface N {
  bx: number; by: number; bz: number; // ตำแหน่งฐาน
  g: G;
  ph: number; // เฟสการลอย
  r: number; // ขนาด
  t: number; // ตำแหน่งบนห่วง (เฉพาะ doom)
  sx: number; sy: number; sc: number; dz: number; // ค่าหลังฉาย
  ox: number; oy: number; hl: number; // แรงผลักจากเมาส์ + ความสว่าง
}

function rng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function sprite(color: string, size = 64) {
  const c = document.createElement("canvas");
  c.width = c.height = size;
  const x = c.getContext("2d")!;
  const g = x.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.18, color);
  g.addColorStop(0.45, color + "55");
  g.addColorStop(1, color + "00");
  x.fillStyle = g;
  x.fillRect(0, 0, size, size);
  return c;
}

const LOOP_X = 1.6, LOOP_Y = 0.62, LOOP_Z = 0.55;
const loopPos = (t: number): [number, number, number] => [
  LOOP_X * Math.sin(t),
  LOOP_Y * Math.sin(t) * Math.cos(t),
  LOOP_Z * Math.cos(t),
];

function build(scale: number) {
  const rand = rng(20261123);
  const gauss = () => (rand() + rand() + rand() - 1.5) / 1.5;
  const nodes: N[] = [];
  const add = (x: number, y: number, z: number, g: G, r: number, t = 0) =>
    nodes.push({ bx: x, by: y, bz: z, g, ph: rand() * Math.PI * 2, r, t, sx: 0, sy: 0, sc: 1, dz: 0, ox: 0, oy: 0, hl: 0 });

  const perPole = Math.round(78 * scale);
  // ตรงกับแถบสเปกตรัมของเว็บ: AI-Psychosis ซ้าย, Anti ขวา
  for (const [g, cx] of [[1, -1.2], [0, 1.2]] as const) {
    for (let i = 0; i < perPole; i++) {
      // กลุ่มทรงกลมหนาแน่นตรงกลาง บางลงที่ขอบ
      const u = rand() * Math.PI * 2, v = Math.acos(2 * rand() - 1), rad = 0.72 * Math.cbrt(rand());
      add(cx + rad * Math.sin(v) * Math.cos(u), rad * Math.sin(v) * Math.sin(u) * 0.95, rad * Math.cos(v), g, i < 3 ? 2.6 : 1 + rand() * 1.1);
    }
  }
  const bal = Math.round(26 * scale);
  for (let i = 0; i < bal; i++) add(gauss() * 0.2, gauss() * 0.7, gauss() * 0.45, 2, 1 + rand());
  const doom = Math.round(46 * scale);
  for (let i = 0; i < doom; i++) {
    const t = (i / doom) * Math.PI * 2;
    const [x, y, z] = loopPos(t);
    add(x, y, z, 3, i % 6 === 0 ? 1.9 : 1.1, t);
  }

  // เส้นเชื่อม: เพื่อนบ้านใกล้สุดในกลุ่มเดียวกัน + สะพานจากเขียวไปทั้งสองขั้ว + ห่วงส้มต่อกันเป็นวง
  const edges: [number, number][] = [];
  const seen = new Set<string>();
  const link = (a: number, b: number) => {
    const k = a < b ? `${a}-${b}` : `${b}-${a}`;
    if (a !== b && !seen.has(k)) { seen.add(k); edges.push([a, b]); }
  };
  const d2 = (a: N, b: N) => (a.bx - b.bx) ** 2 + (a.by - b.by) ** 2 + (a.bz - b.bz) ** 2;
  const nearest = (i: number, filter: (n: N) => boolean, k: number) =>
    nodes
      .map((n, j) => [j, filter(n) && j !== i ? d2(nodes[i], n) : Infinity] as const)
      .sort((a, b) => a[1] - b[1])
      .slice(0, k)
      .filter((e) => e[1] < Infinity)
      .map((e) => e[0]);
  nodes.forEach((n, i) => {
    if (n.g === 3) return;
    nearest(i, (m) => m.g === n.g, 3).forEach((j) => link(i, j));
    if (n.g === 2) {
      nearest(i, (m) => m.g === 0, 1).forEach((j) => link(i, j));
      nearest(i, (m) => m.g === 1, 1).forEach((j) => link(i, j));
    }
  });
  const doomStart = nodes.findIndex((n) => n.g === 3);
  for (let i = 0; i < doom; i++) link(doomStart + i, doomStart + ((i + 1) % doom));
  // ห่วงส้มเกาะกับเซลล์ของทั้งสองขั้วบางจุด
  for (let i = 0; i < doom; i += 5) {
    nearest(doomStart + i, (m) => m.g === 0 || m.g === 1, 1).forEach((j) => link(doomStart + i, j));
  }
  return { nodes, edges, doomStart, doom };
}

export function NeuralBackground({ focus }: { focus?: VerdictKey | null }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const focusRef = useRef<G | null>(null);
  useEffect(() => {
    focusRef.current = focus ? FOCUS[focus] ?? null : null;
  }, [focus]);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sprites = COLORS.map((c) => sprite(c));
    const white = sprite("#ffffff");
    let W = 0, H = 0, dpr = 1, portrait = false;
    let net = build(1);
    let netScale = 1;
    let light = document.documentElement.dataset.theme === "light";

    const mouse = { x: -9999, y: -9999, nx: 0, ny: 0 };
    const rot = { yaw: 0, pitch: 0 };
    let focusLv = [1, 1, 1, 1];
    const pulses: { e: number; t: number; sp: number; dir: number }[] = [];

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      canvas.style.width = W + "px";
      canvas.style.height = H + "px";
      portrait = H > W * 1.15;
      const scale = W < 640 ? 0.6 : W < 1024 ? 0.8 : 1;
      if (scale !== netScale) { net = build(scale); netScale = scale; }
      if (reduce) draw(0);
    };

    const onMove = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.nx = (e.clientX / W) * 2 - 1;
      mouse.ny = (e.clientY / H) * 2 - 1;
    };
    const onLeave = () => { mouse.x = mouse.y = -9999; mouse.nx = mouse.ny = 0; };

    const themeObs = new MutationObserver(() => { light = document.documentElement.dataset.theme === "light"; });
    themeObs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    function draw(time: number) {
      const { nodes, edges, doomStart, doom } = net;
      const s = portrait ? Math.min(H * 0.86 / 3.6, W * 0.9 / 1.9) : Math.min(W * 0.86 / 3.6, H * 0.8 / 1.9);
      const cx = W / 2, cy = H / 2, D = 3.4;
      const sec = time / 1000;

      // หมุนตามเมาส์อย่างนุ่มนวล + แกว่งช้า ๆ เอง
      const ty = (portrait ? mouse.ny : mouse.nx) * 0.55 + Math.sin(sec * 0.13) * 0.22;
      const tp = -(portrait ? mouse.nx : mouse.ny) * 0.32 + Math.sin(sec * 0.09) * 0.08;
      rot.yaw += (ty - rot.yaw) * 0.05;
      rot.pitch += (tp - rot.pitch) * 0.05;
      const ca = Math.cos(rot.yaw), sa = Math.sin(rot.yaw), cb = Math.cos(rot.pitch), sb = Math.sin(rot.pitch);

      const fg = focusRef.current;
      focusLv = focusLv.map((v, g) => v + ((fg == null || fg === g ? 1 : 0.32) - v) * 0.04);

      const R = Math.max(110, Math.min(W, H) * 0.16);
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        let x: number, y: number, z: number;
        if (n.g === 3) {
          [x, y, z] = loopPos(n.t + sec * 0.12);
        } else {
          x = n.bx + Math.sin(sec * 0.6 + n.ph) * 0.03;
          y = n.by + Math.cos(sec * 0.5 + n.ph * 1.3) * 0.035;
          z = n.bz + Math.sin(sec * 0.4 + n.ph * 0.7) * 0.03;
        }
        const x1 = x * ca + z * sa;
        const z1 = -x * sa + z * ca;
        const y1 = y * cb - z1 * sb;
        const z2 = y * sb + z1 * cb;
        const p = D / (D + z2);
        let px = x1 * s * p, py = y1 * s * p;
        if (portrait) [px, py] = [py, px];
        const bx = cx + px, by = cy + py;
        // เมาส์ผลักอนุภาคออกเล็กน้อยและทำให้สว่างขึ้น
        const dx = bx - mouse.x, dy = by - mouse.y;
        const d = Math.hypot(dx, dy);
        let tox = 0, toy = 0, thl = 0;
        if (d < R && d > 0.01) {
          const f = (1 - d / R) ** 2;
          tox = (dx / d) * f * 26;
          toy = (dy / d) * f * 26;
          thl = f;
        }
        n.ox += (tox - n.ox) * 0.12;
        n.oy += (toy - n.oy) * 0.12;
        n.hl += (thl - n.hl) * 0.12;
        n.sx = bx + n.ox;
        n.sy = by + n.oy;
        n.sc = p;
        n.dz = z2;
      }

      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx!.clearRect(0, 0, W, H);
      ctx!.globalCompositeOperation = light ? "source-over" : "lighter";
      const edgeA = light ? 0.32 : 0.22;

      // เส้นเชื่อม
      ctx!.lineWidth = 1;
      for (let i = 0; i < edges.length; i++) {
        const a = nodes[edges[i][0]], b = nodes[edges[i][1]];
        const g = a.g === 3 || b.g === 3 ? 3 : a.g === 2 || b.g === 2 ? 2 : a.g;
        const depth = Math.max(0.25, Math.min(1, 1.25 - (a.dz + b.dz) * 0.35));
        const boost = Math.max(a.hl, b.hl);
        ctx!.globalAlpha = Math.min(1, (edgeA + boost * 0.5 + (g === 3 ? 0.12 : 0)) * depth * focusLv[g]);
        ctx!.strokeStyle = COLORS[g];
        ctx!.lineWidth = g === 3 ? 1.4 : 1;
        ctx!.beginPath();
        ctx!.moveTo(a.sx, a.sy);
        ctx!.lineTo(b.sx, b.sy);
        ctx!.stroke();
      }

      // เส้นจากเคอร์เซอร์ไปยังเซลล์ใกล้ ๆ
      if (mouse.x > -9000) {
        const near = nodes
          .map((n, i) => [i, Math.hypot(n.sx - mouse.x, n.sy - mouse.y)] as const)
          .filter((e) => e[1] < R)
          .sort((a, b) => a[1] - b[1])
          .slice(0, 6);
        for (const [i, d] of near) {
          const n = nodes[i];
          ctx!.globalAlpha = (1 - d / R) * (light ? 0.6 : 0.5);
          ctx!.strokeStyle = COLORS[n.g];
          ctx!.beginPath();
          ctx!.moveTo(mouse.x, mouse.y);
          ctx!.lineTo(n.sx, n.sy);
          ctx!.stroke();
        }
      }

      // สัญญาณประสาทวิ่งตามเส้น
      if (!reduce) {
        if (pulses.length < 34 && Math.random() < 0.5) {
          pulses.push({ e: (Math.random() * edges.length) | 0, t: 0, sp: 0.008 + Math.random() * 0.018, dir: Math.random() < 0.5 ? 1 : -1 });
        }
        // ห่วงส้มมีสัญญาณวิ่งวนเพิ่ม
        if (pulses.length < 40 && Math.random() < 0.08) {
          const i = (Math.random() * doom) | 0;
          const e = edges.findIndex(([a, b]) => a === doomStart + i && b === doomStart + ((i + 1) % doom));
          if (e >= 0) pulses.push({ e, t: 0, sp: 0.04, dir: 1 });
        }
        for (let k = pulses.length - 1; k >= 0; k--) {
          const pu = pulses[k];
          pu.t += pu.sp;
          if (pu.t >= 1) {
            // สัญญาณบนห่วงส้มส่งต่อไปเส้นถัดไป
            const [a, b] = edges[pu.e];
            if (nodes[a].g === 3 && nodes[b].g === 3 && Math.random() < 0.92) {
              const nb = doomStart + ((b - doomStart + 1) % doom);
              const ne = edges.findIndex(([x, y]) => x === b && y === nb);
              if (ne >= 0) { pu.e = ne; pu.t = 0; continue; }
            }
            pulses.splice(k, 1);
            continue;
          }
          const [ia, ib] = edges[pu.e];
          const a = nodes[pu.dir > 0 ? ia : ib], b = nodes[pu.dir > 0 ? ib : ia];
          const g = a.g === 3 || b.g === 3 ? 3 : b.g;
          const x = a.sx + (b.sx - a.sx) * pu.t, y = a.sy + (b.sy - a.sy) * pu.t;
          const sz = 9 * ((a.sc + b.sc) / 2);
          ctx!.globalAlpha = Math.sin(pu.t * Math.PI) * 0.9 * focusLv[g];
          ctx!.drawImage(sprites[g], x - sz, y - sz, sz * 2, sz * 2);
        }
      }

      // เซลล์ประสาท
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const depth = Math.max(0.3, Math.min(1, 1.2 - n.dz * 0.4));
        const tw = 0.75 + 0.25 * Math.sin(sec * 1.7 + n.ph * 3);
        const lv = focusLv[n.g];
        const sz = (n.r * 6 + n.hl * 8) * n.sc * (0.85 + 0.35 * lv);
        ctx!.globalAlpha = Math.min(1, (light ? 0.85 : 0.75) * depth * tw * lv + n.hl * 0.4);
        ctx!.drawImage(sprites[n.g], n.sx - sz, n.sy - sz, sz * 2, sz * 2);
      }

      // แสงที่เคอร์เซอร์
      if (mouse.x > -9000 && !light) {
        ctx!.globalAlpha = 0.18;
        ctx!.drawImage(white, mouse.x - 18, mouse.y - 18, 36, 36);
      }
      ctx!.globalAlpha = 1;
      ctx!.globalCompositeOperation = "source-over";
    }

    let raf = 0;
    const loop = (t: number) => {
      draw(t);
      raf = requestAnimationFrame(loop);
    };
    const onVis = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden && !reduce) raf = requestAnimationFrame(loop);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    window.addEventListener("blur", onLeave);
    document.addEventListener("visibilitychange", onVis);
    if (reduce) draw(0);
    else raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      themeObs.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("blur", onLeave);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className="neural-bg absolute inset-0 h-full w-full" />;
}
