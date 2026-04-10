"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  ReferenceLine,
} from "recharts";
import {
  TrendingUp,
  TrendingDown,
  Minus,
  BarChart2,
  Brain,
  ChevronRight,
  ArrowUpRight,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Submission {
  name: string;
  count?: number;
  percentage: number;
  trend?: string;
}

interface YearData {
  event: string;
  totalMatches: number;
  submissionRate: number;
  submissions: Submission[];
}

interface HeelHookTrendEntry {
  year: number;
  nogiPercentage: number;
  context: string;
}

interface TournamentEntry {
  tournament: string;
  submissionRate: number;
  heelHooks: number;
  legLocks: number;
  chokes: number;
  armlocks: number;
}

interface MetaData {
  lastUpdated: string;
  sources: string[];
  gi: Record<string, YearData>;
  nogi: Record<string, YearData>;
  heelHookTrend: HeelHookTrendEntry[];
  tournamentComparison: TournamentEntry[];
  metaInsights: {
    gi_2024: string[];
    nogi_2025: string[];
  };
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function TrendBadge({ trend }: { trend: string }) {
  if (trend === "rising_fast") {
    return (
      <Badge className="bg-red-900/40 text-red-400 border border-red-800 gap-1 text-xs">
        <ArrowUpRight className="h-3 w-3" /> Fast ↑
      </Badge>
    );
  }
  if (trend === "rising") {
    return (
      <Badge className="bg-emerald-900/30 text-emerald-400 border border-emerald-800 gap-1 text-xs">
        <TrendingUp className="h-3 w-3" /> Rising
      </Badge>
    );
  }
  if (trend === "declining") {
    return (
      <Badge className="bg-zinc-800 text-zinc-400 border border-zinc-700 gap-1 text-xs">
        <TrendingDown className="h-3 w-3" /> Declining
      </Badge>
    );
  }
  return (
    <Badge className="bg-zinc-800/50 text-zinc-500 border border-zinc-700 gap-1 text-xs">
      <Minus className="h-3 w-3" /> Stable
    </Badge>
  );
}

function getBarColor(trend?: string) {
  if (trend === "rising_fast") return "#ef4444";
  if (trend === "rising") return "#22c55e";
  if (trend === "declining") return "#71717a";
  return "#3b82f6";
}

// ─── Custom Tooltips ──────────────────────────────────────────────────────────

const CustomBarTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 shadow-xl">
        <p className="text-sm font-semibold text-zinc-200">{label}</p>
        <p className="text-sm text-zinc-400">{payload[0].value}% of submissions</p>
      </div>
    );
  }
  return null;
};

const CustomLineTooltip = ({ active, payload, label, trendData }: any) => {
  if (active && payload && payload.length) {
    const data = trendData?.find((d: HeelHookTrendEntry) => d.year === label);
    return (
      <div className="rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 shadow-xl max-w-[220px]">
        <p className="text-sm font-semibold text-zinc-200">{label}</p>
        <p className="text-red-400 font-bold">{payload[0].value}%</p>
        {data && <p className="text-xs text-zinc-500 mt-1">{data.context}</p>}
      </div>
    );
  }
  return null;
};

// ─── Component ───────────────────────────────────────────────────────────────

export default function MetaBreakdownPage() {
  const [activeTab, setActiveTab] = useState<"gi" | "nogi">("gi");
  const [metaData, setMetaData] = useState<MetaData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/meta/stats")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch meta stats");
        return res.json();
      })
      .then((data: MetaData) => {
        setMetaData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-red-500" />
      </div>
    );
  }

  if (error || !metaData) {
    return (
      <div className="flex items-center justify-center h-64 text-zinc-400">
        Failed to load meta data. Please try again.
      </div>
    );
  }

  // Resolve current year data
  const giYears = Object.keys(metaData.gi).sort((a, b) => Number(b) - Number(a));
  const nogiYears = Object.keys(metaData.nogi).sort((a, b) => Number(b) - Number(a));
  const currentGiYear = giYears[0];
  const currentNogiYear = nogiYears[0];

  const giStats = metaData.gi[currentGiYear];
  const nogiStats = metaData.nogi[currentNogiYear];

  const stats = activeTab === "gi" ? giStats : nogiStats;
  const currentYear = activeTab === "gi" ? currentGiYear : currentNogiYear;
  const insights =
    activeTab === "gi" ? metaData.metaInsights.gi_2024 : metaData.metaInsights.nogi_2025;

  const barData = stats.submissions.map((s) => ({
    name: s.name,
    percentage: s.percentage,
    trend: s.trend,
    fill: getBarColor(s.trend),
  }));

  // Normalize heel hook trend data for chart
  const heelHookChartData = metaData.heelHookTrend.map((d) => ({
    year: d.year,
    percentage: d.nogiPercentage,
    context: d.context,
  }));

  const aiPrompt =
    "Based on the current BJJ meta where heel hooks account for 30% of No-Gi submissions, what should I prioritize in my training?";

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <BarChart2 className="h-6 w-6 text-red-500" />
            <h1 className="text-2xl font-black text-zinc-100">BJJ Meta Breakdown</h1>
          </div>
          <p className="text-zinc-400 text-sm">
            What's actually winning in competition — updated {metaData.lastUpdated}
          </p>
        </div>
        <Link
          href={`/coach?q=${encodeURIComponent(aiPrompt)}`}
          className="flex items-center gap-2 rounded-lg bg-red-600 hover:bg-red-700 px-4 py-2 text-sm font-semibold text-white transition-colors"
        >
          <Brain className="h-4 w-4" />
          Ask AI About This Meta
        </Link>
      </div>

      {/* Stats Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="pt-4 pb-4">
            <p className="text-xs text-zinc-500 mb-1">Matches Analyzed</p>
            <p className="text-2xl font-black text-zinc-100">
              {stats.totalMatches.toLocaleString()}
            </p>
            <p className="text-[10px] text-zinc-600 mt-1">{stats.event}</p>
          </CardContent>
        </Card>
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="pt-4 pb-4">
            <p className="text-xs text-zinc-500 mb-1">Submission Rate</p>
            <p className="text-2xl font-black text-red-400">{stats.submissionRate}%</p>
            <p className="text-[10px] text-zinc-600 mt-1">matches ending by sub</p>
          </CardContent>
        </Card>
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="pt-4 pb-4">
            <p className="text-xs text-zinc-500 mb-1">Top Technique</p>
            <p className="text-lg font-black text-zinc-100 leading-tight">
              {stats.submissions[0].name}
            </p>
            <p className="text-[10px] text-zinc-600 mt-1">
              {stats.submissions[0].percentage}% of all subs
            </p>
          </CardContent>
        </Card>
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="pt-4 pb-4">
            <p className="text-xs text-zinc-500 mb-1">Year</p>
            <p className="text-2xl font-black text-zinc-100">{currentYear}</p>
            <p className="text-[10px] text-zinc-600 mt-1">competition data</p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 p-1 bg-zinc-900 rounded-lg border border-zinc-800 w-fit">
        {(["gi", "nogi"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-md text-sm font-semibold transition-colors ${
              activeTab === tab
                ? "bg-red-600 text-white shadow"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            {tab === "gi" ? "🥋 Gi" : "🩱 No-Gi"}
          </button>
        ))}
      </div>

      {/* Bar Chart */}
      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle className="text-zinc-100 text-lg">
            Submission Breakdown — {activeTab === "gi" ? "Gi" : "No-Gi"} {currentYear}
          </CardTitle>
          <CardDescription>
            % of total submissions in analyzed matches ·{" "}
            <span className="text-emerald-400">green = rising</span>{" "}
            <span className="text-red-400">red = rising fast</span>{" "}
            <span className="text-zinc-400">gray = declining</span>{" "}
            <span className="text-blue-400">blue = stable</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={340}>
            <BarChart
              data={barData}
              layout="vertical"
              margin={{ left: 16, right: 16, top: 8, bottom: 8 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#27272a" horizontal={false} />
              <XAxis
                type="number"
                domain={[0, 32]}
                tick={{ fill: "#71717a", fontSize: 11 }}
                tickLine={false}
                axisLine={false}
                tickFormatter={(v) => `${v}%`}
              />
              <YAxis
                type="category"
                dataKey="name"
                width={148}
                tick={{ fill: "#a1a1aa", fontSize: 11 }}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip
                content={<CustomBarTooltip />}
                cursor={{ fill: "rgba(255,255,255,0.04)" }}
              />
              <Bar dataKey="percentage" radius={[0, 4, 4, 0]}>
                {barData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>

          {/* Legend table */}
          <div className="mt-4 space-y-1.5">
            {stats.submissions.map((sub) => (
              <div
                key={sub.name}
                className="flex items-center justify-between py-1.5 px-3 rounded-md bg-zinc-800/40 border border-zinc-800/60"
              >
                <span className="text-sm text-zinc-300 font-medium">{sub.name}</span>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-zinc-200">{sub.percentage}%</span>
                  {sub.trend && <TrendBadge trend={sub.trend} />}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Heel Hook Trend Line */}
      {activeTab === "nogi" && (
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle className="text-zinc-100 text-lg flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-red-400" />
              The Heel Hook Revolution: 2015 → {heelHookChartData[heelHookChartData.length - 1]?.year}
            </CardTitle>
            <CardDescription>
              No-Gi submission share accounted for by heel hooks over time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart
                data={heelHookChartData}
                margin={{ left: 0, right: 16, top: 8, bottom: 8 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                <XAxis
                  dataKey="year"
                  tick={{ fill: "#71717a", fontSize: 11 }}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  domain={[0, 50]}
                  tick={{ fill: "#71717a", fontSize: 11 }}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(v) => `${v}%`}
                />
                <Tooltip
                  content={(props) => (
                    <CustomLineTooltip {...props} trendData={metaData.heelHookTrend} />
                  )}
                />
                <ReferenceLine
                  x={2016}
                  stroke="#71717a"
                  strokeDasharray="3 3"
                  label={{ value: "Danaher", fill: "#71717a", fontSize: 10, position: "top" }}
                />
                <ReferenceLine
                  x={2019}
                  stroke="#71717a"
                  strokeDasharray="3 3"
                  label={{ value: "ADCC '19", fill: "#71717a", fontSize: 10, position: "top" }}
                />
                <Line
                  type="monotone"
                  dataKey="percentage"
                  stroke="#ef4444"
                  strokeWidth={2.5}
                  dot={{ fill: "#ef4444", r: 4, strokeWidth: 0 }}
                  activeDot={{ r: 6, fill: "#ef4444" }}
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="mt-3 p-3 rounded-lg bg-red-950/30 border border-red-900/40">
              <p className="text-sm text-red-300">
                <strong>Key takeaway:</strong> Heel hooks grew from 8% → 36% of No-Gi submissions at peak — driven by the Danaher system and Gordon Ryan's ADCC dominance. Defense has since matured, bringing rates back to 30%.
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Heel Hook Trend (Gi tab — teaser) */}
      {activeTab === "gi" && (
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle className="text-zinc-100 text-lg">
              No-Gi Heel Hook Trend (Preview)
            </CardTitle>
            <CardDescription>
              Heel hooks peaked at 36% in No-Gi — switch to the No-Gi tab to see the full chart
            </CardDescription>
          </CardHeader>
          <CardContent>
            <button
              onClick={() => setActiveTab("nogi")}
              className="flex items-center gap-2 text-red-400 hover:text-red-300 text-sm font-semibold transition-colors"
            >
              View No-Gi heel hook data <ChevronRight className="h-4 w-4" />
            </button>
          </CardContent>
        </Card>
      )}

      {/* Tournament Comparison Table */}
      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle className="text-zinc-100 text-lg">Tournament Comparison</CardTitle>
          <CardDescription>
            How different rulesets change what wins — % of submissions by category
          </CardDescription>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="text-left py-2 px-3 text-zinc-400 font-medium">Tournament</th>
                <th className="text-center py-2 px-3 text-zinc-400 font-medium">Sub Rate</th>
                <th className="text-center py-2 px-3 text-zinc-400 font-medium">Heel Hooks</th>
                <th className="text-center py-2 px-3 text-zinc-400 font-medium">Leg Locks</th>
                <th className="text-center py-2 px-3 text-zinc-400 font-medium">Chokes</th>
                <th className="text-center py-2 px-3 text-zinc-400 font-medium">Armlocks</th>
              </tr>
            </thead>
            <tbody>
              {metaData.tournamentComparison.map((row, i) => (
                <tr
                  key={row.tournament}
                  className={`border-b border-zinc-800/50 ${i % 2 === 0 ? "bg-zinc-800/20" : ""}`}
                >
                  <td className="py-2.5 px-3 text-zinc-200 font-medium">{row.tournament}</td>
                  <td className="py-2.5 px-3 text-center">
                    <span
                      className={`font-bold ${
                        row.submissionRate >= 60
                          ? "text-red-400"
                          : row.submissionRate >= 40
                          ? "text-amber-400"
                          : "text-zinc-300"
                      }`}
                    >
                      {row.submissionRate}%
                    </span>
                  </td>
                  <td className="py-2.5 px-3 text-center">
                    <span className={row.heelHooks > 0 ? "text-red-400 font-semibold" : "text-zinc-500"}>
                      {row.heelHooks}%
                    </span>
                  </td>
                  <td className="py-2.5 px-3 text-center text-zinc-300">{row.legLocks}%</td>
                  <td className="py-2.5 px-3 text-center text-zinc-300">{row.chokes}%</td>
                  <td className="py-2.5 px-3 text-center text-zinc-300">{row.armlocks}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

      {/* Meta Insights */}
      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle className="text-zinc-100 text-lg flex items-center gap-2">
            <Brain className="h-5 w-5 text-red-500" />
            Meta Insights — {activeTab === "gi" ? "Gi" : "No-Gi"}
          </CardTitle>
          <CardDescription>Coach-level takeaways from the data</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {insights.map((insight, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-600/20 border border-red-700/40 flex items-center justify-center text-[10px] font-bold text-red-400 mt-0.5">
                  {i + 1}
                </span>
                <p className="text-sm text-zinc-300 leading-relaxed">{insight}</p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* How this affects your training */}
      <Card className="bg-gradient-to-br from-zinc-900 to-zinc-900 border-red-900/30 border">
        <CardHeader>
          <CardTitle className="text-zinc-100 text-lg">
            How This Affects Your Training
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-zinc-800/60 border border-zinc-700/50">
              <h3 className="font-semibold text-zinc-200 mb-2">🥋 Gi Competitors</h3>
              <ul className="text-sm text-zinc-400 space-y-1.5">
                <li>• Invest heavily in back control and the bow & arrow</li>
                <li>• Drill Ezekiel and loop choke — they create high-percentage surprise finishes</li>
                <li>• Points still win most matches — master passing</li>
                <li>• Expect creative chokes from guard — loop, baseball bat, etc.</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg bg-zinc-800/60 border border-zinc-700/50">
              <h3 className="font-semibold text-zinc-200 mb-2">🩱 No-Gi Competitors</h3>
              <ul className="text-sm text-zinc-400 space-y-1.5">
                <li>• Leg lock defense is mandatory — no exceptions</li>
                <li>• Learn inside heel hook and toe hold offense</li>
                <li>• Study the ashi garami system before competing</li>
                <li>• Straight ankle lock is the underrated finisher — learn to set it up</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link
              href={`/coach?q=${encodeURIComponent(aiPrompt)}`}
              className="flex items-center justify-center gap-2 rounded-lg bg-red-600 hover:bg-red-700 px-5 py-3 text-sm font-semibold text-white transition-colors"
            >
              <Brain className="h-4 w-4" />
              Ask AI Coach About the Meta
            </Link>
            <Link
              href="/gameplan"
              className="flex items-center justify-center gap-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 px-5 py-3 text-sm font-semibold text-zinc-200 transition-colors border border-zinc-700"
            >
              Build Your Game Plan
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Data disclaimer */}
      <p className="text-xs text-zinc-600 text-center pb-4">
        Data compiled from {metaData.sources.join(", ")} · Percentages rounded to nearest whole number
      </p>
    </div>
  );
}
