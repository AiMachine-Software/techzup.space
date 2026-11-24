"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Languages } from "lucide-react";
import { LANGUAGES, useI18n } from "@/lib/ai-test/i18n";

export function LanguageSwitcher() {
  const { lang, setLang, t } = useI18n();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[1];

  /* ปิดเมื่อคลิกนอกตัว dropdown */
  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${t.ui.languageLabel}: ${current.label}`}
        className="glass clip-corner-xs group flex h-10 cursor-pointer items-center gap-2 px-2.5 text-[13px] font-semibold text-white/80 transition-[box-shadow,color] duration-200 hover:text-white hover:shadow-[0_0_18px_rgba(0,245,212,0.25)]"
      >
        <Languages
          className="h-3.5 w-3.5 text-[#00f5d4] drop-shadow-[0_0_6px_rgba(0,245,212,0.7)]"
          aria-hidden
        />
        {/* ธงปัจจุบัน + animation เด้งเมื่อเปลี่ยนภาษา */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={current.code}
            initial={{ scale: 0.3, rotate: -25, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0.3, rotate: 25, opacity: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 22 }}
            className="text-base leading-none"
            role="img"
            aria-label={current.label}
          >
            {current.flag}
          </motion.span>
        </AnimatePresence>
        <span className="hidden max-w-[92px] truncate sm:inline">{current.label}</span>
        <ChevronDown
          className={`h-3.5 w-3.5 text-white/50 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            aria-label={t.ui.languageLabel}
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="glass clip-corner-sm absolute end-0 top-12 z-50 max-h-[70vh] w-56 overflow-y-auto rounded-sm p-1.5 shadow-[0_24px_70px_rgba(0,0,0,0.5)]"
          >
            {LANGUAGES.map((l) => {
              const active = l.code === lang;
              return (
                <li key={l.code}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={active}
                    onClick={() => {
                      setLang(l.code);
                      setOpen(false);
                    }}
                    className={`flex w-full cursor-pointer items-center gap-3 rounded-sm px-3 py-2 text-start text-[13px] font-medium transition-colors ${
                      active
                        ? "bg-[#00f5d4]/15 text-[#7ff5e4]"
                        : "text-white/70 hover:bg-white/8 hover:text-white"
                    }`}
                  >
                    {/* ธงเด้งเมื่อ hover/เลือก */}
                    <motion.span
                      whileHover={{ scale: 1.25, rotate: -8 }}
                      whileTap={{ scale: 0.9 }}
                      animate={active ? { scale: [1, 1.35, 1] } : {}}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      className="text-lg leading-none"
                      role="img"
                      aria-label={l.label}
                    >
                      {l.flag}
                    </motion.span>
                    <span className="flex-1 truncate">{l.label}</span>
                    {active && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500, damping: 20 }}
                        className="h-1.5 w-1.5 rounded-full bg-[#00f5d4] shadow-[0_0_8px_rgba(0,245,212,0.9)]"
                        aria-hidden
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
