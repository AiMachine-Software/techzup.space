"use client";

import { Check, Globe, Moon, Orbit, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SITE_LANGUAGES, useSiteI18n } from "@/lib/i18n";
import { setSiteTheme, useSiteTheme, type SiteTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

/** Language picker (22 languages, shared with the AI-Psychosis Test). */
export function LanguageMenu({ className }: { className?: string }) {
  const { t, lang, setLang } = useSiteI18n();
  const cur = SITE_LANGUAGES.find((l) => l.code === lang)!;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className={cn("gap-1.5 px-2", className)} aria-label={t.nav.language}>
          <Globe className="size-4" />
          <span className="font-mono text-xs uppercase">{cur.code}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="max-h-[70vh] w-52 overflow-y-auto">
        <DropdownMenuLabel>{t.nav.language}</DropdownMenuLabel>
        {SITE_LANGUAGES.map((l) => (
          <DropdownMenuItem key={l.code} onSelect={() => setLang(l.code)} className="gap-2" dir={l.dir}>
            <span aria-hidden>{l.flag}</span>
            <span className="flex-1">{l.label}</span>
            {l.code === lang && <Check className="size-4 text-[#4cc3ff]" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const THEMES: { key: SiteTheme; Icon: typeof Sun; label: "space" | "dark" | "light" }[] = [
  { key: "cyberpunk", Icon: Orbit, label: "space" },
  { key: "dark", Icon: Moon, label: "dark" },
  { key: "light", Icon: Sun, label: "light" },
];

/** Segmented Space / Dark / Light toggle, like the one on /ai-psychosis-test. */
export function ThemeToggle({ className }: { className?: string }) {
  const { t } = useSiteI18n();
  const theme = useSiteTheme();
  return (
    <div
      role="radiogroup"
      aria-label={t.nav.theme}
      className={cn("tz-chamfer flex h-9 items-center gap-0.5 border border-[#1e9bff]/30 bg-background/40 p-0.5", className)}
    >
      {THEMES.map(({ key, Icon, label }) => {
        const on = theme === key;
        return (
          <button
            key={key}
            type="button"
            role="radio"
            aria-checked={on}
            aria-label={t.nav.themes[label]}
            title={t.nav.themes[label]}
            onClick={() => setSiteTheme(key)}
            className={cn(
              "flex size-8 items-center justify-center transition-colors",
              on ? "bg-[#1e9bff]/20 text-[#4cc3ff] shadow-[inset_0_0_0_1px_rgba(30,155,255,0.6)]" : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Icon className="size-4" />
          </button>
        );
      })}
    </div>
  );
}
