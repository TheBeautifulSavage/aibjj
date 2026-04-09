"use client";

import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const GI_SUBMISSIONS = [
  { name: "Rear Naked Choke", percentage: 18 },
  { name: "Armbar", percentage: 16 },
  { name: "Triangle Choke", percentage: 14 },
  { name: "Guillotine", percentage: 11 },
  { name: "Bow & Arrow Choke", percentage: 10 },
  { name: "Kimura", percentage: 8 },
  { name: "Ezekiel Choke", percentage: 6 },
  { name: "Loop Choke", percentage: 5 },
  { name: "Omoplata", percentage: 4 },
  { name: "Clock Choke", percentage: 4 },
  { name: "Other", percentage: 4 },
];

const NOGI_SUBMISSIONS = [
  { name: "Heel Hook (Inside)", percentage: 28 },
  { name: "Heel Hook (Outside)", percentage: 12 },
  { name: "Rear Naked Choke", percentage: 14 },
  { name: "Guillotine", percentage: 11 },
  { name: "Kneebar", percentage: 7 },
  { name: "Armbar", percentage: 6 },
  { name: "Triangle", percentage: 5 },
  { name: "Toe Hold", percentage: 5 },
  { name: "Calf Slicer", percentage: 4 },
  { name: "Kimura", percentage: 4 },
  { name: "Other", percentage: 4 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
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

export default function SubmissionStatsCharts() {
  const [tab, setTab] = useState<"gi" | "nogi">("gi");
  const data = tab === "gi" ? GI_SUBMISSIONS : NOGI_SUBMISSIONS;

  return (
    <div className="space-y-6">
      <div className="flex gap-1 p-1 bg-zinc-900 rounded-lg border border-zinc-800 w-fit">
        {(["gi", "nogi"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-6 py-2 rounded-md text-sm font-semibold transition-colors ${
              tab === t ? "bg-red-600 text-white" : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            {t === "gi" ? "🥋 Gi" : "🩱 No-Gi"}
          </button>
        ))}
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
        <h3 className="text-lg font-bold text-zinc-100 mb-4">
          {tab === "gi" ? "Gi" : "No-Gi"} Submission Breakdown — 2024 Data
        </h3>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={data} layout="vertical" margin={{ left: 8, right: 16, top: 4, bottom: 4 }}>
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
            <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(255,255,255,0.04)" }} />
            <Bar
              dataKey="percentage"
              fill={tab === "gi" ? "#3b82f6" : "#ef4444"}
              radius={[0, 4, 4, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
