"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

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

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = HEEL_HOOK_TREND.find((d) => d.year === label);
    return (
      <div className="rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 shadow-xl max-w-[220px]">
        <p className="text-sm font-bold text-zinc-200">{label}</p>
        <p className="text-red-400 font-black text-lg">{payload[0].value}%</p>
        {data && <p className="text-xs text-zinc-500 mt-1">{data.context}</p>}
      </div>
    );
  }
  return null;
};

export default function HeelHookTrendChart() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
      <h3 className="text-lg font-bold text-zinc-100 mb-1">
        Heel Hooks as % of No-Gi Submissions: 2015–2024
      </h3>
      <p className="text-sm text-zinc-500 mb-4">
        Data from ADCC, EBI, Polaris, and major No-Gi events
      </p>
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
          <Tooltip content={<CustomTooltip />} />
          <ReferenceLine
            x={2016}
            stroke="#52525b"
            strokeDasharray="4 4"
            label={{ value: "Danaher", fill: "#71717a", fontSize: 10, position: "top" }}
          />
          <ReferenceLine
            x={2019}
            stroke="#52525b"
            strokeDasharray="4 4"
            label={{ value: "ADCC '19", fill: "#71717a", fontSize: 10, position: "top" }}
          />
          <Line
            type="monotone"
            dataKey="percentage"
            stroke="#ef4444"
            strokeWidth={3}
            dot={{ fill: "#ef4444", r: 5, strokeWidth: 0 }}
            activeDot={{ r: 7, fill: "#ef4444" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
