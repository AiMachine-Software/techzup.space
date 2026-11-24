"use client";

import { useEffect, useState } from "react";
import { BrainCircuit, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/lib/auth-context";
import { useSiteI18n } from "@/lib/i18n";
import type { TestResult } from "@techzup/api";


const GRADE_COLOR: Record<TestResult["grade"], string> = {
  SSS: "#ff3b4f",
  S: "#ffd84d",
  A: "#c084ff",
  B: "#4fa8ff",
  C: "#5ee07a",
  D: "#a3abbd",
};

export function TestHistory() {
  const { api } = useAuth();
  const { t, date } = useSiteI18n();
  const h = t.history;
  const [rows, setRows] = useState<TestResult[] | null>(null);

  useEffect(() => {
    let alive = true;
    void api<{ results: TestResult[] }>("/results").then((r) => alive && setRows(r.ok ? r.data.results : []));
    return () => {
      alive = false;
    };
  }, [api]);

  return (
    <Card className="tz-panel">
      <CardHeader className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:gap-4">
        <div>
          <CardTitle>{h.title}</CardTitle>
          <CardDescription>{h.desc}</CardDescription>
        </div>
        <Button asChild variant="outline" size="sm">
          <a href="/ai-psychosis-test"><BrainCircuit className="size-4" /> {h.take}</a>
        </Button>
      </CardHeader>
      <CardContent>
        {rows === null ? (
          <div className="flex justify-center py-6"><Loader2 className="size-5 animate-spin text-muted-foreground" /></div>
        ) : rows.length === 0 ? (
          <p className="text-sm text-muted-foreground">{h.empty}</p>
        ) : (
          <ul className="divide-y divide-border">
            {rows.map((r) => (
              <li key={r.id} className="flex flex-wrap items-center gap-x-4 gap-y-1 py-3 text-sm">
                <span
                  className="font-[family-name:var(--font-display)] w-12 text-lg font-bold"
                  style={{ color: GRADE_COLOR[r.grade] }}
                >
                  {r.grade}
                </span>
                <span className="font-medium sm:min-w-36">{h.verdicts[r.verdict]}</span>
                <span className="text-muted-foreground">AI {r.ai}% · Anti {r.anti}% · {h.clarity} {r.clarity}</span>
                {r.timedOut && <Badge variant="outline">{h.timedOut}</Badge>}
                <span className="ms-auto text-xs text-muted-foreground">
                  {date(r.finishedAt, { dateStyle: "medium", timeStyle: "short" })}
                </span>
              </li>
            ))}
          </ul>
        )}
        {rows?.some((r) => r.grade === "SSS") && (
          <p className="mt-4 rounded-md border border-red-500/40 bg-red-500/10 p-3 text-xs text-red-200">
            {h.sssNote}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
