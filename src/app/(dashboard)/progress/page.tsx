"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useSession } from "next-auth/react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Flame,
  Clock,
  Calendar,
  TrendingUp,
  Award,
  Loader2,
  Zap,
  Sparkles,
  Target,
  CheckCircle2,
  Star,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface JournalEntry {
  id: string;
  date: string;
  trainingType: string;
  duration: number;
  workedOn: string | null;
  rating: number | null;
}

const BELT_ORDER = ["WHITE", "BLUE", "PURPLE", "BROWN", "BLACK"];
const BELT_COLORS: Record<string, string> = {
  WHITE: "bg-white",
  BLUE: "bg-blue-600",
  PURPLE: "bg-purple-600",
  BROWN: "bg-amber-800",
  BLACK: "bg-zinc-800 border border-zinc-600",
};
const BELT_YEARS: Record<string, string> = {
  WHITE: "~2 years",
  BLUE: "~2-3 years",
  PURPLE: "~1.5-2 years",
  BROWN: "~1-2 years",
  BLACK: "Lifetime",
};

function toDateStr(d: Date) {
  return d.toISOString().split("T")[0];
}

function ChartTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 shadow-xl">
      <p className="text-xs text-zinc-400">{label}</p>
      <p className="text-sm font-semibold text-zinc-100">
        {payload[0].value} sessions
      </p>
    </div>
  );
}

// Belt promotion timeline estimates (in months)
const BELT_MONTHS_RANGE: Record<string, [number, number]> = {
  WHITE: [12, 18],   // White → Blue
  BLUE: [18, 30],    // Blue → Purple
  PURPLE: [24, 36],  // Purple → Brown
  BROWN: [36, 60],   // Brown → Black
};

interface Competition {
  id: string;
  wins: number;
  losses: number;
  result: string | null;
  date: string;
}

export default function ProgressPage() {
  const { data: session } = useSession();
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [competitions, setCompetitions] = useState<Competition[]>([]);
  const [loading, setLoading] = useState(true);
  const [aiReport, setAiReport] = useState<string | null>(null);
  const [reportLoading, setReportLoading] = useState(false);
  const [techniqueRatings, setTechniqueRatings] = useState<Record<string, number>>({});

  const belt = ((session?.user as Record<string, unknown>)?.belt as string) || "WHITE";
  const stripes = ((session?.user as Record<string, unknown>)?.stripes as number) || 0;

  useEffect(() => {
    async function fetchAll() {
      try {
        const [journalRes, compRes] = await Promise.all([
          fetch("/api/journal?all=true"),
          fetch("/api/competitions"),
        ]);
        if (journalRes.ok) {
          const data = await journalRes.json();
          setEntries(data.entries);
        }
        if (compRes.ok) {
          const data = await compRes.json();
          setCompetitions(data.competitions || []);
        }
      } catch {
        // silent
      } finally {
        setLoading(false);
      }
    }
    fetchAll();
  }, []);

  async function generateAIReport() {
    setReportLoading(true);
    setAiReport(null);
    try {
      const res = await fetch("/api/progress/report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ belt, stripes, monthsAtBelt: monthsAtBelt }),
      });
      if (res.ok) {
        const data = await res.json();
        setAiReport(data.report);
      }
    } finally {
      setReportLoading(false);
    }
  }

  // --- 12-week frequency chart ---
  const weeklyFrequency = useMemo(() => {
    const data: Record<string, unknown>[] = [];
    const now = new Date();
    for (let w = 11; w >= 0; w--) {
      const weekStart = new Date(now);
      weekStart.setDate(now.getDate() - w * 7 - now.getDay());
      weekStart.setHours(0, 0, 0, 0);
      const weekEnd = new Date(weekStart);
      weekEnd.setDate(weekStart.getDate() + 7);

      const count = entries.filter((e) => {
        const d = new Date(e.date);
        return d >= weekStart && d < weekEnd;
      }).length;

      const label = weekStart.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
      data.push({ week: label, sessions: count });
    }
    return data;
  }, [entries]);

  // --- Streaks ---
  const { currentStreak, longestStreak } = useMemo(() => {
    const sortedDates = [
      ...Array.from(new Set(entries.map((e) => toDateStr(new Date(e.date))))),
    ].sort((a, b) => b.localeCompare(a));

    let current = 0;
    let longest = 0;

    if (sortedDates.length > 0) {
      const todayStr = toDateStr(new Date());
      const yesterdayDate = new Date();
      yesterdayDate.setDate(yesterdayDate.getDate() - 1);
      const yesterdayStr = toDateStr(yesterdayDate);

      if (sortedDates[0] === todayStr || sortedDates[0] === yesterdayStr) {
        current = 1;
        for (let i = 1; i < sortedDates.length; i++) {
          const prev = new Date(sortedDates[i - 1]);
          const curr = new Date(sortedDates[i]);
          const diff = Math.round(
            (prev.getTime() - curr.getTime()) / (1000 * 60 * 60 * 24)
          );
          if (diff === 1) current++;
          else break;
        }
      }

      let temp = 1;
      const asc = [...sortedDates].sort();
      for (let i = 1; i < asc.length; i++) {
        const prev = new Date(asc[i - 1]);
        const curr = new Date(asc[i]);
        const diff = Math.round(
          (curr.getTime() - prev.getTime()) / (1000 * 60 * 60 * 24)
        );
        if (diff === 1) temp++;
        else {
          longest = Math.max(longest, temp);
          temp = 1;
        }
      }
      longest = Math.max(longest, temp);
    }

    return { currentStreak: current, longestStreak: longest };
  }, [entries]);

  // --- Monthly Summaries ---
  const monthlySummaries = useMemo(() => {
    const months: Record<string, JournalEntry[]> = {};
    entries.forEach((e) => {
      const d = new Date(e.date);
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
      if (!months[key]) months[key] = [];
      months[key].push(e);
    });

    return Object.entries(months)
      .sort((a, b) => b[0].localeCompare(a[0]))
      .slice(0, 6)
      .map(([key, ents]) => {
        const totalMins = ents.reduce((a, e) => a + e.duration, 0);
        const d = new Date(key + "-01");
        return {
          month: d.toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          }),
          sessions: ents.length,
          hours: Math.round(totalMins / 60),
          avgLength: Math.round(totalMins / ents.length),
        };
      });
  }, [entries]);

  // --- Top Positions (text analysis) ---
  const topPositions = useMemo(() => {
    const counts: Record<string, number> = {};
    const keywords = [
      "guard",
      "mount",
      "side control",
      "back",
      "half guard",
      "turtle",
      "standing",
      "closed guard",
      "open guard",
      "butterfly",
      "de la riva",
      "spider guard",
      "lasso",
      "x-guard",
      "leg locks",
      "takedowns",
    ];

    entries.forEach((e) => {
      if (!e.workedOn) return;
      const lower = e.workedOn.toLowerCase();
      keywords.forEach((kw) => {
        if (lower.includes(kw)) {
          const display = kw
            .split(" ")
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join(" ");
          counts[display] = (counts[display] || 0) + 1;
        }
      });
    });

    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8);
  }, [entries]);

  // --- Belt Journey ---
  const beltIdx = BELT_ORDER.indexOf(belt.toUpperCase());
  const trainedToday = entries.some(
    (e) => toDateStr(new Date(e.date)) === toDateStr(new Date())
  );

  // --- Belt Promotion Estimator ---
  const sessionsPerMonth = useMemo(() => {
    if (entries.length === 0) return 0;
    const oldest = new Date(entries[entries.length - 1].date);
    const monthsTotal = Math.max(
      1,
      (Date.now() - oldest.getTime()) / (1000 * 60 * 60 * 24 * 30)
    );
    return Math.round(entries.length / monthsTotal);
  }, [entries]);

  // Months since first entry (rough proxy for time at current belt)
  const monthsAtBelt = useMemo(() => {
    if (entries.length === 0) return 0;
    const oldest = new Date(entries[entries.length - 1].date);
    return Math.round((Date.now() - oldest.getTime()) / (1000 * 60 * 60 * 24 * 30));
  }, [entries]);

  const beltEstimate = useMemo(() => {
    if (beltIdx >= 4) return null; // Black belt
    const [minMonths, maxMonths] = BELT_MONTHS_RANGE[belt.toUpperCase()] || [12, 24];
    const avgTarget = (minMonths + maxMonths) / 2;
    const remaining = Math.max(0, avgTarget - monthsAtBelt);
    // Adjust for training frequency (target: 3x/week = 12 sessions/month)
    const freqMultiplier = sessionsPerMonth >= 12 ? 0.8 : sessionsPerMonth >= 8 ? 1.0 : 1.3;
    const estimatedMonths = Math.round(remaining * freqMultiplier);
    return { estimatedMonths, minMonths, maxMonths, avgTarget };
  }, [belt, beltIdx, monthsAtBelt, sessionsPerMonth]);

  // --- Training Consistency Score ---
  const consistencyScore30 = useMemo(() => {
    const uniqueDays = new Set(
      entries
        .filter((e) => {
          const d = new Date(e.date);
          return d >= new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
        })
        .map((e) => toDateStr(new Date(e.date)))
    ).size;
    return Math.min(100, Math.round((uniqueDays / 30) * 100));
  }, [entries]);

  const consistencyScore90 = useMemo(() => {
    const uniqueDays = new Set(
      entries
        .filter((e) => {
          const d = new Date(e.date);
          return d >= new Date(Date.now() - 90 * 24 * 60 * 60 * 1000);
        })
        .map((e) => toDateStr(new Date(e.date)))
    ).size;
    return Math.min(100, Math.round((uniqueDays / 90) * 100));
  }, [entries]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-32">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-500" />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-zinc-100">Progress</h1>
        <p className="text-sm text-zinc-400 mt-1">
          Your training analytics and growth over time.
        </p>
      </div>

      {/* Streak Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10">
                <Flame className="h-6 w-6 text-orange-400" />
              </div>
              <div>
                <p className="text-xs text-zinc-500">Current Streak</p>
                <p className="text-2xl font-bold text-zinc-100">
                  {currentStreak} day{currentStreak !== 1 ? "s" : ""}
                </p>
              </div>
            </div>
            {!trainedToday && currentStreak > 0 && (
              <p className="mt-3 text-xs text-orange-400">
                Train today to keep your streak!
              </p>
            )}
            {trainedToday && (
              <p className="mt-3 text-xs text-emerald-400">
                You trained today! Keep it up!
              </p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500/10">
                <Award className="h-6 w-6 text-yellow-400" />
              </div>
              <div>
                <p className="text-xs text-zinc-500">Longest Streak</p>
                <p className="text-2xl font-bold text-zinc-100">
                  {longestStreak} day{longestStreak !== 1 ? "s" : ""}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                <Calendar className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <p className="text-xs text-zinc-500">Total Sessions</p>
                <p className="text-2xl font-bold text-zinc-100">
                  {entries.length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Training Frequency Chart */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-red-500" />
            Training Frequency
          </CardTitle>
          <p className="text-xs text-zinc-500">Sessions per week (last 12 weeks)</p>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            {entries.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={weeklyFrequency}
                  margin={{ top: 5, right: 5, left: -20, bottom: 0 }}
                >
                  <defs>
                    <linearGradient
                      id="freqGrad"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#dc2626"
                        stopOpacity={0.3}
                      />
                      <stop
                        offset="100%"
                        stopColor="#dc2626"
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#27272a"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="week"
                    tick={{ fontSize: 10, fill: "#71717a" }}
                    tickLine={false}
                    axisLine={false}
                    interval={1}
                  />
                  <YAxis
                    tick={{ fontSize: 11, fill: "#71717a" }}
                    tickLine={false}
                    axisLine={false}
                    allowDecimals={false}
                  />
                  <Tooltip content={<ChartTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="sessions"
                    stroke="#dc2626"
                    strokeWidth={2}
                    fill="url(#freqGrad)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
                <Clock className="h-10 w-10 text-zinc-600" />
                <p className="text-sm text-zinc-400">
                  Log sessions to see your training frequency
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Belt Journey */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base flex items-center gap-2">
            <Zap className="h-4 w-4 text-red-500" />
            Belt Journey
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            {BELT_ORDER.map((b, i) => {
              const isCurrent = i === beltIdx;
              const isPast = i < beltIdx;
              return (
                <div
                  key={b}
                  className="flex flex-col items-center gap-2 min-w-[80px]"
                >
                  <div className="flex items-center gap-2">
                    {i > 0 && (
                      <div
                        className={`h-0.5 w-8 ${
                          isPast ? "bg-red-500" : "bg-zinc-700"
                        }`}
                      />
                    )}
                    <div
                      className={`h-10 w-10 rounded-full flex items-center justify-center ${BELT_COLORS[b]} ${
                        isCurrent
                          ? "ring-2 ring-red-500 ring-offset-2 ring-offset-zinc-950"
                          : ""
                      }`}
                    >
                      {isPast && (
                        <span className="text-xs font-bold text-white/80">
                          &#10003;
                        </span>
                      )}
                      {isCurrent && (
                        <span className="text-xs font-bold text-white">
                          &#9733;
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-center">
                    <p
                      className={`text-xs font-medium ${
                        isCurrent ? "text-red-400" : "text-zinc-400"
                      }`}
                    >
                      {b.charAt(0) + b.slice(1).toLowerCase()}
                    </p>
                    {isCurrent && (
                      <Badge
                        variant="outline"
                        className="mt-1 text-[10px] border-red-800/50 text-red-400"
                      >
                        Current
                      </Badge>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          {beltIdx < 4 && (
            <p className="text-xs text-zinc-500 mt-4">
              Estimated time to{" "}
              {BELT_ORDER[beltIdx + 1].charAt(0) +
                BELT_ORDER[beltIdx + 1].slice(1).toLowerCase()}{" "}
              belt: {BELT_YEARS[belt.toUpperCase()]} of consistent training
            </p>
          )}
        </CardContent>
      </Card>

      {/* Belt Promotion Estimator */}
      {beltIdx < 4 && (
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <Target className="h-4 w-4 text-red-500" />
              Belt Promotion Estimator
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1">
                {beltEstimate && (
                  <>
                    <p className="text-sm text-zinc-300">
                      At your current pace (
                      <span className="text-red-400 font-medium">{sessionsPerMonth} sessions/mo</span>
                      ), you&apos;re approximately
                    </p>
                    <p className="text-2xl font-bold text-zinc-100 mt-1">
                      {beltEstimate.estimatedMonths <= 0 ? (
                        <span className="text-emerald-400">You may be ready! 🎉</span>
                      ) : (
                        <>
                          ~{beltEstimate.estimatedMonths} months{" "}
                          <span className="text-sm font-normal text-zinc-400">
                            from your{" "}
                            {BELT_ORDER[beltIdx + 1].charAt(0) +
                              BELT_ORDER[beltIdx + 1].slice(1).toLowerCase()}{" "}
                            belt
                          </span>
                        </>
                      )}
                    </p>
                    <p className="text-xs text-zinc-500 mt-1">
                      Average time range:{" "}
                      {beltEstimate.minMonths}–{beltEstimate.maxMonths} months
                      (you&apos;ve been training {monthsAtBelt} months)
                    </p>
                  </>
                )}
                {entries.length === 0 && (
                  <p className="text-sm text-zinc-500">
                    Start logging training sessions to get your promotion estimate.
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2 text-center shrink-0">
                <div className="text-xs text-zinc-500">Train faster?</div>
                <div className="text-xs text-zinc-400">
                  3× per week = fastest path
                </div>
              </div>
            </div>

            {/* Tips based on frequency */}
            {sessionsPerMonth > 0 && (
              <div className={`rounded-lg p-3 text-sm ${
                sessionsPerMonth >= 12
                  ? "bg-emerald-950/30 border border-emerald-800/30 text-emerald-400"
                  : sessionsPerMonth >= 8
                  ? "bg-yellow-950/30 border border-yellow-800/30 text-yellow-400"
                  : "bg-red-950/30 border border-red-800/30 text-red-400"
              }`}>
                {sessionsPerMonth >= 12
                  ? "🔥 Excellent training frequency! You're on track for a fast promotion."
                  : sessionsPerMonth >= 8
                  ? "⚡ Good frequency. Add 1-2 more sessions per month to accelerate."
                  : "💡 Try to get on the mat more consistently — aim for 3× per week."}
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Training Consistency */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-red-500" />
            Training Consistency
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-zinc-400">Last 30 days</span>
                <span className="text-sm font-bold text-zinc-100">{consistencyScore30}%</span>
              </div>
              <div className="h-2.5 rounded-full bg-zinc-800">
                <div
                  className={`h-2.5 rounded-full transition-all ${
                    consistencyScore30 >= 50 ? "bg-emerald-500" : consistencyScore30 >= 25 ? "bg-yellow-500" : "bg-red-500"
                  }`}
                  style={{ width: `${consistencyScore30}%` }}
                />
              </div>
              <p className="text-xs text-zinc-500 mt-1">days trained out of 30</p>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-zinc-400">Last 90 days</span>
                <span className="text-sm font-bold text-zinc-100">{consistencyScore90}%</span>
              </div>
              <div className="h-2.5 rounded-full bg-zinc-800">
                <div
                  className={`h-2.5 rounded-full transition-all ${
                    consistencyScore90 >= 50 ? "bg-emerald-500" : consistencyScore90 >= 25 ? "bg-yellow-500" : "bg-red-500"
                  }`}
                  style={{ width: `${consistencyScore90}%` }}
                />
              </div>
              <p className="text-xs text-zinc-500 mt-1">days trained out of 90</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI Progress Report */}
      <Card className="border-red-600/20">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-red-500" />
              AI Progress Report
            </CardTitle>
            <Button
              size="sm"
              onClick={generateAIReport}
              disabled={reportLoading}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              {reportLoading ? (
                <><Loader2 className="h-3.5 w-3.5 mr-1.5 animate-spin" />Generating...</>
              ) : (
                <><Sparkles className="h-3.5 w-3.5 mr-1.5" />Generate Report</>
              )}
            </Button>
          </div>
          <p className="text-xs text-zinc-500">
            Claude analyzes your journal stats, competition record, and belt to give you a personalized progress assessment.
          </p>
        </CardHeader>
        <CardContent>
          {aiReport ? (
            <div className="rounded-lg bg-zinc-800/40 border border-zinc-700/50 p-4">
              <p className="text-sm text-zinc-200 leading-relaxed whitespace-pre-wrap">{aiReport}</p>
            </div>
          ) : (
            <div className="text-center py-8 text-zinc-500 text-sm">
              Click &ldquo;Generate Report&rdquo; to get your personalized AI progress assessment.
            </div>
          )}
        </CardContent>
      </Card>

      {/* Top Positions + Monthly Summaries */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Top Trained Positions */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Top Trained Positions</CardTitle>
            <p className="text-xs text-zinc-500">
              Based on your journal notes
            </p>
          </CardHeader>
          <CardContent>
            {topPositions.length > 0 ? (
              <div className="space-y-3">
                {topPositions.map(([pos, count]) => {
                  const max = topPositions[0][1];
                  const pct = Math.round((count / max) * 100);
                  return (
                    <div key={pos}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-zinc-300">{pos}</span>
                        <span className="text-xs text-zinc-500">
                          {count} session{count !== 1 ? "s" : ""}
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-zinc-800">
                        <div
                          className="h-2 rounded-full bg-red-600 transition-all"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-sm text-zinc-500 py-8 text-center">
                Start logging what you worked on to see position analytics
              </p>
            )}
          </CardContent>
        </Card>

        {/* Monthly Summaries */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Monthly Summary</CardTitle>
          </CardHeader>
          <CardContent>
            {monthlySummaries.length > 0 ? (
              <div className="space-y-3">
                {monthlySummaries.map((m) => (
                  <div
                    key={m.month}
                    className="flex items-center justify-between rounded-lg border border-zinc-800/50 bg-zinc-800/20 p-3"
                  >
                    <p className="text-sm font-medium text-zinc-200">
                      {m.month}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-zinc-400">
                      <span>{m.sessions} sessions</span>
                      <span>{m.hours}h</span>
                      <span>avg {m.avgLength}m</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-zinc-500 py-8 text-center">
                No data yet
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
