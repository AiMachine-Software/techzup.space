import type { GuidanceKey } from "@/lib/ai-test/quiz";

export interface VerdictText {
  title: string;
  subtitle: string;
  description: string;
}

export interface Dictionary {
  /** native name shown in the language switcher */
  langName: string;
  meta: { title: string; description: string };
  nav: {
    phenomena: string;
    test: string;
    guidance: string;
    references: string;
    tagline: string;
  };
  hero: {
    badge: string;
    title1: string;
    title2: string;
    title3: string;
    intro: string;
    start: string;
    viewGuidance: string;
    poleLeft: string;
    poleCenter: string;
    poleRight: string;
  };
  phenomena: {
    heading: string;
    intro: string;
    mechanismsLabel: string;
    patternsLabel: string;
    sourcePrefix: string;
    items: {
      key: "ai" | "anti";
      name: string;
      nameLocal: string;
      definition: string;
      mechanisms: string[];
      patterns: string[];
      stat: string;
    }[];
    stats: { value: string; label: string; source: string }[];
  };
  quiz: {
    heading: string;
    intro: string;
    answeredPrefix: string;
    scoreHint: string;
    prev: string;
    next: string;
    process: string;
    allAnsweredNote: string;
    progressAria: string;
    gotoTemplate: string;
    answerAriaTemplate: string;
    likert: { label: string; short: string }[];
    questions: { id: number; text: string; insight: string; tip: string }[];
  };
  results: {
    heading: string;
    riskAiPrefix: string;
    riskAntiPrefix: string;
    toGuidance: string;
    retake: string;
    gaugeAiSub: string;
    gaugeAntiSub: string;
    levelPrefix: string;
    scale: { safe: string; enter: string; high: string };
    mapHeading: string;
    youAreHere: string;
    mapBalanced: string;
    mapAriaTemplate: string;
    axisDownLeft: string;
    axisRight: string;
    axisLeft: string;
    axisUpRight: string;
    readHeading: string;
    readItems: string[];
    flaggedHeading: string;
    flaggedIntro: string;
    noFlaggedNote: string;
    questionPrefix: string;
    insightLabel: string;
    tipLabel: string;
    criticalTitle: string;
    criticalBody: string;
    levels: Record<"low" | "watch" | "high" | "critical", { label: string; note: string }>;
    verdicts: Record<
      "balanced" | "watch" | "ai" | "anti" | "doomloop",
      VerdictText
    >;
  };
  guidance: {
    heading: string;
    intro: string;
    tabs: Record<GuidanceKey, string>;
    headers: Record<GuidanceKey, string>;
    descs: Record<GuidanceKey, string>;
    items: Record<GuidanceKey, { title: string; detail: string }[]>;
  };
  references: {
    heading: string;
    intro: string;
    disclaimerTitle: string;
    disclaimer: string;
    groups: { group: string; items: { title: string; url: string; note?: string }[] }[];
  };
  footer: { brand: string; note: string };
  ui: {
    languageLabel: string;
    themeLabel: string;
    themes: { cyberpunk: string; dark: string; light: string };
  };
}
