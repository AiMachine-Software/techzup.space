"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Dictionary } from "./types";

import th from "./th";
import en from "./en";
import ja from "./ja";
import zh from "./zh";
import ko from "./ko";
import lo from "./lo";
import km from "./km";
import vi from "./vi";
import my from "./my";
import ms from "./ms";
import id from "./id";
import tl from "./tl";
import hi from "./hi";
import ar from "./ar";
import fr from "./fr";
import de from "./de";
import es from "./es";
import pt from "./pt";
import it from "./it";
import ru from "./ru";
import nl from "./nl";
import sv from "./sv";

export interface LanguageDef {
  code: string;
  flag: string;
  /** native language name for the switcher */
  label: string;
  dir: "ltr" | "rtl";
  dict: Dictionary;
}

/** ลำดับตามที่ผู้ใช้กำหนด: EN/TH/JA/ZH/KO/LO/KM/VI/MY/MS/ID/TL/HI/AR/FR/DE/ES/PT/IT/RU/NL/SV */
export const LANGUAGES: LanguageDef[] = [
  { code: "en", flag: "🇬🇧", label: "English", dir: "ltr", dict: en },
  { code: "th", flag: "🇹🇭", label: "ไทย", dir: "ltr", dict: th },
  { code: "ja", flag: "🇯🇵", label: "日本語", dir: "ltr", dict: ja },
  { code: "zh", flag: "🇨🇳", label: "中文", dir: "ltr", dict: zh },
  { code: "ko", flag: "🇰🇷", label: "한국어", dir: "ltr", dict: ko },
  { code: "lo", flag: "🇱🇦", label: "ລາວ", dir: "ltr", dict: lo },
  { code: "km", flag: "🇰🇭", label: "ខ្មែរ", dir: "ltr", dict: km },
  { code: "vi", flag: "🇻🇳", label: "Tiếng Việt", dir: "ltr", dict: vi },
  { code: "my", flag: "🇲🇲", label: "မြန်မာ", dir: "ltr", dict: my },
  { code: "ms", flag: "🇲🇾", label: "Melayu", dir: "ltr", dict: ms },
  { code: "id", flag: "🇮🇩", label: "Indonesia", dir: "ltr", dict: id },
  { code: "tl", flag: "🇵🇭", label: "Filipino", dir: "ltr", dict: tl },
  { code: "hi", flag: "🇮🇳", label: "हिन्दी", dir: "ltr", dict: hi },
  { code: "ar", flag: "🇸🇦", label: "العربية", dir: "rtl", dict: ar },
  { code: "fr", flag: "🇫🇷", label: "Français", dir: "ltr", dict: fr },
  { code: "de", flag: "🇩🇪", label: "Deutsch", dir: "ltr", dict: de },
  { code: "es", flag: "🇪🇸", label: "Español", dir: "ltr", dict: es },
  { code: "pt", flag: "🇵🇹", label: "Português", dir: "ltr", dict: pt },
  { code: "it", flag: "🇮🇹", label: "Italiano", dir: "ltr", dict: it },
  { code: "ru", flag: "🇷🇺", label: "Русский", dir: "ltr", dict: ru },
  { code: "nl", flag: "🇳🇱", label: "Nederlands", dir: "ltr", dict: nl },
  { code: "sv", flag: "🇸🇪", label: "Svenska", dir: "ltr", dict: sv },
];

export const DEFAULT_LANG = "th";
const STORAGE_KEY = "ai-psy-lang";

export function getLang(code: string): LanguageDef {
  return LANGUAGES.find((l) => l.code === code) ?? LANGUAGES[1]; // fallback: th
}

interface I18nContextValue {
  lang: string;
  setLang: (code: string) => void;
  t: Dictionary;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  // ค่าเริ่มต้น TH (มาจาก inline script ใน layout ที่ตั้ง attribute ก่อน paint)
  const [lang, setLangState] = useState(DEFAULT_LANG);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && LANGUAGES.some((l) => l.code === saved)) {
      setLangState(saved);
    }
  }, []);

  const applyLang = useCallback((code: string) => {
    const def = getLang(code);
    document.documentElement.lang = def.code;
    document.documentElement.dir = def.dir;
    document.title = def.dict.meta.title;
    window.localStorage.setItem(STORAGE_KEY, def.code);
    setLangState(def.code);
  }, []);

  useEffect(() => {
    // sync ครั้งแรกหลัง mount (กรณี inline script ตั้งค่าไว้ก่อนหน้า)
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && saved !== DEFAULT_LANG && LANGUAGES.some((l) => l.code === saved)) {
      applyLang(saved);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // คง title / lang / dir ให้ตรงกับภาษาปัจจุบันเสมอ (กัน metadata ของ Next เขียนทับหลัง hydrate)
  useEffect(() => {
    const def = getLang(lang);
    const sync = () => {
      if (document.title !== def.dict.meta.title) document.title = def.dict.meta.title;
    };
    document.documentElement.lang = def.code;
    document.documentElement.dir = def.dir;
    sync();
    const head = document.head;
    const mo = new MutationObserver(sync);
    mo.observe(head, { childList: true, subtree: true, characterData: true });
    return () => mo.disconnect();
  }, [lang]);

  const value = useMemo<I18nContextValue>(
    () => ({ lang, setLang: applyLang, t: getLang(lang).dict }),
    [lang, applyLang]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

/** แทนค่าใน template เช่น "ไปข้อ {n}" */
export function tpl(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, k: string) =>
    vars[k] !== undefined ? String(vars[k]) : `{${k}}`
  );
}
