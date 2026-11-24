"use client";

import { useEffect, useState } from "react";
import { BrainCircuit, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/lib/auth-context";
import type { TestResult } from "@techzup/api";

const VERDICT: Record<TestResult["verdict"], string> = {
  balanced: "Balanced",
  watch: "Watch zone",
  ai: "Leans AI-Psychosis",
  anti: "Leans Anti-AI",
  doomloop: "Doomloop",
};

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
  const [rows, setRows] = useState<TestResult[] | null>(null);

  useEffect(() => {
    let alive = true;
    void api<{ results: TestResult[] }>("/results").then((r) => alive && setRows(r.ok ? r.data.results : []));
    return () => {
      alive = false;
    };
  }, [api]);

  return (
    <Card className="bg-card/70">
      <CardHeader className="flex flex-row items-start justify-between gap-4">
        <div>
          <CardTitle>AI-Psychosis Test history</CardTitle>
          <CardDescription>Your saved results, newest first.</CardDescription>
        </div>
        <Button asChild variant="outline" size="sm">
          <a href="/ai-psychosis-test"><BrainCircuit className="size-4" /> Take the test</a>
        </Button>
      </CardHeader>
      <CardContent>
        {rows === null ? (
          <div className="flex justify-center py-6"><Loader2 className="size-5 animate-spin text-muted-foreground" /></div>
        ) : rows.length === 0 ? (
          <p className="text-sm text-muted-foreground">No results yet. Finish the test and it&apos;s saved here automatically.</p>
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
                <span className="min-w-36 font-medium">{VERDICT[r.verdict]}</span>
                <span className="text-muted-foreground">AI {r.ai}% · Anti {r.anti}% · clarity {r.clarity}</span>
                {r.timedOut && <Badge variant="outline">timed out</Badge>}
                <span className="ms-auto text-xs text-muted-foreground">
                  {new Date(r.finishedAt).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" })}
                </span>
              </li>
            ))}
          </ul>
        )}
        {rows?.some((r) => r.grade === "SSS") && (
          <p className="mt-4 rounded-md border border-red-500/40 bg-red-500/10 p-3 text-xs text-red-200">
            An SSS (Doomloop) result means both patterns were high at once. Please consider talking to a doctor or
            mental-health professional soon.
          </p>
        )}
      </CardContent>
    </Card>
  );
}
