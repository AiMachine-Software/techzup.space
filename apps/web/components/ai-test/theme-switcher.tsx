"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Cpu } from "lucide-react";
import { useI18n } from "@/lib/ai-test/i18n";

export type ThemeKey = "cyberpunk" | "dark" | "light";
const STORAGE_KEY = "ai-psy-theme";
const DEFAULT_THEME: ThemeKey = "cyberpunk";

export function ThemeSwitcher() {
  const { t } = useI18n();
  const [theme, setTheme] = useState<ThemeKey>(DEFAULT_THEME);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "cyberpunk" || saved === "dark" || saved === "light") {
      setTheme(saved);
    }
  }, []);

  const apply = (next: ThemeKey) => {
    setTheme(next);
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  const options: { key: ThemeKey; icon: typeof Sun; label: string }[] = [
    { key: "cyberpunk", icon: Cpu, label: t.ui.themes.cyberpunk },
    { key: "dark", icon: Moon, label: t.ui.themes.dark },
    { key: "light", icon: Sun, label: t.ui.themes.light },
  ];

  return (
    <div
      role="radiogroup"
      aria-label={t.ui.themeLabel}
      className="glass clip-corner-xs flex h-10 items-center gap-0.5 p-1"
    >
      {options.map((o) => {
        const Icon = o.icon;
        const active = theme === o.key;
        return (
          <button
            key={o.key}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={o.label}
            title={o.label}
            onClick={() => apply(o.key)}
            className="relative flex h-8 w-9 cursor-pointer items-center justify-center rounded-sm"
          >
            {active && (
              <motion.span
                layoutId="theme-pill"
                transition={{ type: "spring", stiffness: 420, damping: 30 }}
                className="absolute inset-0 rounded-sm bg-[#00f5d4]/20 shadow-[0_0_14px_rgba(0,245,212,0.35)]"
              />
            )}
            <Icon
              className={`relative h-4 w-4 transition-colors duration-200 ${
                active ? "text-[#7ff5e4]" : "text-white/45 hover:text-white/75"
              }`}
              aria-hidden
            />
          </button>
        );
      })}
    </div>
  );
}
