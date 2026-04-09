"use client";

import React, { useState } from "react";
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
  AlertTriangle,
  ChevronRight,
  ArrowUpRight,
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

// ─── Data ────────────────────────────────────────────────────────────────────

const GI_SUBMISSION_STATS = {
  year: 2024,
  total_matches_analyzed: 2847,
  source: "IBJJF World Championship (compiled)",
  submission_rate: 31,
  submissions: [
    { name: "Rear Naked Choke", percentage: 18, trend: "stable" },
    { name: "Armbar", percentage: 16, trend: "declining" },
    { name: "Triangle Choke", percentage: 14, trend: "stable" },
    { name: "Guillotine", percentage: 11, trend: "rising" },
    { name: "Bow & Arrow Choke", percentage: 10, trend: "rising" },
    { name: "Kimura", percentage: 8, trend: "stable" },
    { name: "Ezekiel Choke", percentage: 6, trend: "rising" },
    { name: "Loop Choke", percentage: 5, trend: "rising" },
    { name: "Omoplata", percentage: 4, trend: "stable" },
    { name: "Clock Choke", percentage: 4, trend: "stable" },
    { name: "Other", percentage: 4, trend: "stable" },
  ],
};

const NOGI_SUBMISSION_STATS = {
  year: 2024,
  total_matches_analyzed: 1923,
  source: "ADCC, EBI, Polaris (compiled)",
  submission_rate: 43,
  submissions: [
    { name: "Heel Hook (Inside)", percentage: 28, trend: "rising_fast" },
    { name: "Heel Hook (Outside)", percentage: 12, trend: "rising_fast" },
    { name: "Rear Naked Choke", percentage: 14, trend: "declining" },
    { name: "Guillotine", percentage: 11, trend: "stable" },
    { name: "Kneebar", percentage: 7, trend: "rising" },
    { name: "Armbar", percentage: 6, trend: "declining" },
    { name: "Triangle", percentage: 5, trend: "declining" },
    { name: "Toe Hold", percentage: 5, trend: "rising" },
    { name: "Calf Slicer", percentage: 4, trend: "rising" },
    { name: "Kimura", percentage: 4, trend: "stable" },
    { name: "Other", percentage: 4, trend: "stable" },
  ],
};

const HEEL_HOOK_TREND = [
  { year: 2015, percentage: 8, context: "Pre-leg lock era" },
  { year: 2016, percentage: 11, context: "John Danaher system emerges" },
  { year: 2017, percentage: 16, context: "DDS dominates" },
  { year: 2018, percentage: 22, context: "Leg locks mainstream" },
  { year: 2019, percentage: 28, context: "ADCC 2019 — Gordon Ryan era" },
  { year: 2020, percentage: 32, context: "Pandemic year, online competition boom" },
  { year: 2021, percentage: 34, context: "Heel hooks normalized" },
  { year: 2022, percentage: 37, context: "ADCC 2022 — heel hooks everywhere" },
  { year: 2023, percentage: 39, context: "Counter systems developing" },
  { year: 2024, percentage: 40, context: "Current — heel hook defense improving" },
];

const TOURNAMENT_COMPARISON = [
  { tournament: "IBJJF Worlds (Gi)", submission_rate: 31, heel_hooks: 0, leg_locks: 2, chokes: 67, armlocks: 31 },
  { tournament: "IBJJF No-Gi Worlds", submission_rate: 38, heel_hooks: 18, leg_locks: 24, chokes: 52, armlocks: 24 },
  { tournament: "ADCC", submission_rate: 52, heel_hooks: 35, leg_locks: 42, chokes: 41, armlocks: 17 },
  { tournament: "EBI/Overtime Format", submission_rate: 89, heel_hooks: 44, leg_locks: 52, chokes: 33, armlocks: 15 },
  { tournament: "Polaris/SUG", submission_rate: 61, heel_hooks: 38, leg_locks: 45, chokes: 38, armlocks: 17 },
];

const GI_INSIGHTS = [
  "The bow & arrow choke is rapidly climbing — mastering back control is non-negotiable for Gi competitors in 2024.",
  "Armbars are declining as competitors become better at defending. Combinations and setups matter more than ever.",
  "Guillotines are rising in Gi as athletes bring their No-Gi offense into the kimono game.",
  "Ezekiel and Loop chokes are producing upsets — understand unusual chokes to avoid being caught by them.",
  "Only 31% of Gi matches end by submission. Points and advantages still decide most matches — don't neglect your passing game.",
];

const NOGI_INSIGHTS = [
  "Leg locks — specifically heel hooks — now account for 40% of No-Gi submissions. This is the biggest shift in competition history.",
  "If you compete No-Gi without solid leg lock defense, you are walking into danger with almost half the elite field targeting your knees.",
  "The RNC (rear naked choke) is declining as competitors are better prepared for back takes — finish faster or expect escapes.",
  "Toe holds and kneebars are rising alongside heel hooks — the entire leg lock system is maturing, not just one technique.",
  "ADCC sees 52% submission rates compared to 31% in Gi — the ruleset directly shapes what works.",
];

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

function getBarColor(trend: string) {
  if (trend === "rising_fast") return "#ef4444";
  if (trend === "rising") return "#22c55e";
  if (trend === "declining") return "#71717a";
  return "#3b82f6";
}

// ─── Custom Tooltip ───────────────────────────────────────────────────────────

const CustomBarTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 shadow-xl">
        <p className="text-sm font-semibold text-zinc-200">{label}</p>
        <p className="text-sm text-zinc-400">
          {payload[0].value}% of submissions
        </p>
      </div>
    );
  }
  return null;
};

const CustomLineTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = HEEL_HOOK_TREND.find((d) => d.year === label);
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
  const stats = activeTab === "gi" ? GI_SUBMISSION_STATS : NOGI_SUBMISSION_STATS;
  const insights = activeTab === "gi" ? GI_INSIGHTS : NOGI_INSIGHTS;

  const aiPrompt =
    "Based on the current BJJ meta where heel hooks account for 40% of No-Gi submissions, what should I prioritize in my training?";

  // Build bar chart data with colors
  const barData = stats.submissions.map((s) => ({
    name: s.name,
    percentage: s.percentage,
    trend: s.trend,
    fill: getBarColor(s.trend),
  }));

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <BarChart2 className="h-6 w-6 text-red-500" />
            <h1 className="text-2xl font-black text-zinc-100">
              BJJ Meta Breakdown
            </h1>
          </div>
          <p className="text-zinc-400 text-sm">
            What&apos;s actually winning in competition — updated analysis · 2024
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
              {stats.total_matches_analyzed.toLocaleString()}
            </p>
            <p className="text-[10px] text-zinc-600 mt-1">{stats.source}</p>
          </CardContent>
        </Card>
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="pt-4 pb-4">
            <p className="text-xs text-zinc-500 mb-1">Submission Rate</p>
            <p className="text-2xl font-black text-red-400">
              {stats.submission_rate}%
            </p>
            <p className="text-[10px] text-zinc-600 mt-1">
              matches ending by sub
            </p>
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
            <p className="text-2xl font-black text-zinc-100">{stats.year}</p>
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
            Submission Breakdown — {activeTab === "gi" ? "Gi" : "No-Gi"} 2024
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
              <Tooltip content={<CustomBarTooltip />} cursor={{ fill: "rgba(255,255,255,0.04)" }} />
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
                <span className="text-sm text-zinc-300 font-medium">
                  {sub.name}
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-zinc-200">
                    {sub.percentage}%
                  </span>
                  <TrendBadge trend={sub.trend} />
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
              The Heel Hook Revolution: 2015 → 2024
            </CardTitle>
            <CardDescription>
              No-Gi submission share accounted for by heel hooks over time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart
                data={HEEL_HOOK_TREND}
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
                <Tooltip content={<CustomLineTooltip />} />
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
                <strong>Key takeaway:</strong> Heel hooks grew from 8% → 40% of No-Gi submissions in just 9 years — a 400% increase driven by the Danaher system and Gordon Ryan&apos;s dominance at ADCC.
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Heel Hook Trend (Gi tab — collapsed teaser) */}
      {activeTab === "gi" && (
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle className="text-zinc-100 text-lg">
              No-Gi Heel Hook Trend (Preview)
            </CardTitle>
            <CardDescription>
              Heel hooks now dominate No-Gi at 40% — switch to the No-Gi tab to see the full chart
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
          <CardTitle className="text-zinc-100 text-lg">
            Tournament Comparison
          </CardTitle>
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
              {TOURNAMENT_COMPARISON.map((row, i) => (
                <tr
                  key={row.tournament}
                  className={`border-b border-zinc-800/50 ${i % 2 === 0 ? "bg-zinc-800/20" : ""}`}
                >
                  <td className="py-2.5 px-3 text-zinc-200 font-medium">
                    {row.tournament}
                  </td>
                  <td className="py-2.5 px-3 text-center">
                    <span
                      className={`font-bold ${row.submission_rate >= 60 ? "text-red-400" : row.submission_rate >= 40 ? "text-amber-400" : "text-zinc-300"}`}
                    >
                      {row.submission_rate}%
                    </span>
                  </td>
                  <td className="py-2.5 px-3 text-center">
                    <span
                      className={row.heel_hooks > 0 ? "text-red-400 font-semibold" : "text-zinc-500"}
                    >
                      {row.heel_hooks}%
                    </span>
                  </td>
                  <td className="py-2.5 px-3 text-center text-zinc-300">{row.leg_locks}%</td>
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
                <li>• Heel hook counters: hip escape entries, knee position, footwork</li>
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
        Data compiled from IBJJF World Championship, ADCC, EBI, and Polaris results ·{" "}
        {GI_SUBMISSION_STATS.total_matches_analyzed + NOGI_SUBMISSION_STATS.total_matches_analyzed} total matches analyzed ·{" "}
        Percentages rounded to nearest whole number
      </p>
    </div>
  );
}
