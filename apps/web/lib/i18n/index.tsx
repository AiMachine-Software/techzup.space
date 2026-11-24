"use client";

import { Fragment, useCallback, useEffect, useMemo, useSyncExternalStore } from "react";
import en, { type SiteDict } from "./en";
import th from "./th";
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

export type { SiteDict };

export interface SiteLanguage {
  code: string;
  flag: string;
  label: string;
  dir: "ltr" | "rtl";
  /** BCP-47 tag for dates/numbers */
  locale: string;
  dict: SiteDict;
}

/** Same 22 languages and order as the AI-Psychosis Test. */
export const SITE_LANGUAGES: SiteLanguage[] = [
  { code: "en", flag: "🇬🇧", label: "English", dir: "ltr", locale: "en-GB", dict: en },
  { code: "th", flag: "🇹🇭", label: "ไทย", dir: "ltr", locale: "th-TH", dict: th },
  { code: "ja", flag: "🇯🇵", label: "日本語", dir: "ltr", locale: "ja-JP", dict: ja },
  { code: "zh", flag: "🇨🇳", label: "中文", dir: "ltr", locale: "zh-CN", dict: zh },
  { code: "ko", flag: "🇰🇷", label: "한국어", dir: "ltr", locale: "ko-KR", dict: ko },
  { code: "lo", flag: "🇱🇦", label: "ລາວ", dir: "ltr", locale: "lo-LA", dict: lo },
  { code: "km", flag: "🇰🇭", label: "ខ្មែរ", dir: "ltr", locale: "km-KH", dict: km },
  { code: "vi", flag: "🇻🇳", label: "Tiếng Việt", dir: "ltr", locale: "vi-VN", dict: vi },
  { code: "my", flag: "🇲🇲", label: "မြန်မာ", dir: "ltr", locale: "my-MM", dict: my },
  { code: "ms", flag: "🇲🇾", label: "Melayu", dir: "ltr", locale: "ms-MY", dict: ms },
  { code: "id", flag: "🇮🇩", label: "Indonesia", dir: "ltr", locale: "id-ID", dict: id },
  { code: "tl", flag: "🇵🇭", label: "Filipino", dir: "ltr", locale: "fil-PH", dict: tl },
  { code: "hi", flag: "🇮🇳", label: "हिन्दी", dir: "ltr", locale: "hi-IN", dict: hi },
  { code: "ar", flag: "🇸🇦", label: "العربية", dir: "rtl", locale: "ar", dict: ar },
  { code: "fr", flag: "🇫🇷", label: "Français", dir: "ltr", locale: "fr-FR", dict: fr },
  { code: "de", flag: "🇩🇪", label: "Deutsch", dir: "ltr", locale: "de-DE", dict: de },
  { code: "es", flag: "🇪🇸", label: "Español", dir: "ltr", locale: "es-ES", dict: es },
  { code: "pt", flag: "🇵🇹", label: "Português", dir: "ltr", locale: "pt-PT", dict: pt },
  { code: "it", flag: "🇮🇹", label: "Italiano", dir: "ltr", locale: "it-IT", dict: it },
  { code: "ru", flag: "🇷🇺", label: "Русский", dir: "ltr", locale: "ru-RU", dict: ru },
  { code: "nl", flag: "🇳🇱", label: "Nederlands", dir: "ltr", locale: "nl-NL", dict: nl },
  { code: "sv", flag: "🇸🇪", label: "Svenska", dir: "ltr", locale: "sv-SE", dict: sv },
];

/** Shared with the AI-Psychosis Test so the choice carries across the site. */
export const LANG_KEY = "ai-psy-lang";
const EVENT = "techzup-lang";

function read(): string {
  try {
    const v = localStorage.getItem(LANG_KEY);
    if (v && SITE_LANGUAGES.some((l) => l.code === v)) return v;
  } catch {}
  return "en";
}

function subscribe(cb: () => void) {
  const on = (e: Event) => {
    if (e instanceof StorageEvent && e.key !== LANG_KEY) return;
    cb();
  };
  window.addEventListener("storage", on);
  window.addEventListener(EVENT, on);
  return () => {
    window.removeEventListener("storage", on);
    window.removeEventListener(EVENT, on);
  };
}

export function setSiteLang(code: string) {
  try {
    localStorage.setItem(LANG_KEY, code);
  } catch {}
  window.dispatchEvent(new Event(EVENT));
}

/** Replace {placeholders} in a string. */
export function fill(s: string, vars: Record<string, string | number>) {
  return s.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? String(vars[k]) : m));
}

export function useSiteI18n() {
  const code = useSyncExternalStore(subscribe, read, () => "en");
  const lang = useMemo(() => SITE_LANGUAGES.find((l) => l.code === code) ?? SITE_LANGUAGES[0], [code]);

  // keep <html lang/dir> in sync for platform pages
  useEffect(() => {
    document.documentElement.lang = lang.code;
    document.documentElement.dir = lang.dir;
  }, [lang]);

  const date = useCallback(
    (ms: number, opts: Intl.DateTimeFormatOptions = { year: "numeric", month: "short", day: "numeric" }) => {
      // Intl.DateTimeFormat accepts date-only and date+time options (toLocaleDateString rejects timeStyle).
      try {
        return new Intl.DateTimeFormat(lang.locale, opts).format(ms);
      } catch {
        try {
          return new Intl.DateTimeFormat(undefined, opts).format(ms);
        } catch {
          return new Date(ms).toISOString().slice(0, 10);
        }
      }
    },
    [lang.locale]
  );

  return { t: lang.dict, lang: lang.code, dir: lang.dir, locale: lang.locale, setLang: setSiteLang, date };
}

/** Like fill(), but placeholders can be React nodes (e.g. a link inside a sentence). */
export function fillNodes(s: string, vars: Record<string, React.ReactNode>): React.ReactNode[] {
  return s.split(/(\{\w+\})/g).map((part, i) => {
    const m = /^\{(\w+)\}$/.exec(part);
    if (m && m[1] in vars) return <Fragment key={i}>{vars[m[1]]}</Fragment>;
    return <Fragment key={i}>{part}</Fragment>;
  });
}
