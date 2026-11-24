"use client";

import { useSyncExternalStore } from "react";

/** Stored values are shared with the AI-Psychosis Test ("cyberpunk" is shown as "Space" on TechZup). */
export type SiteTheme = "cyberpunk" | "dark" | "light";
export const THEME_KEY = "ai-psy-theme";
const EVENT = "techzup-theme";

function read(): SiteTheme {
  try {
    const v = localStorage.getItem(THEME_KEY);
    if (v === "cyberpunk" || v === "dark" || v === "light") return v;
  } catch {}
  return "cyberpunk";
}

function subscribe(cb: () => void) {
  window.addEventListener("storage", cb);
  window.addEventListener(EVENT, cb);
  return () => {
    window.removeEventListener("storage", cb);
    window.removeEventListener(EVENT, cb);
  };
}

export function applyTheme(t: SiteTheme) {
  const d = document.documentElement;
  d.dataset.theme = t;
  d.classList.toggle("dark", t !== "light");
  d.style.colorScheme = t === "light" ? "light" : "dark";
}

export function setSiteTheme(t: SiteTheme) {
  try {
    localStorage.setItem(THEME_KEY, t);
  } catch {}
  applyTheme(t);
  window.dispatchEvent(new Event(EVENT));
}

export function useSiteTheme(): SiteTheme {
  return useSyncExternalStore(subscribe, read, () => "cyberpunk");
}
