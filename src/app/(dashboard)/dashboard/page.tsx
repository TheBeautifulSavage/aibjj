"use client";

import React from "react";
import Link from "next/link";
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
  MessageSquare,
  BookOpen,
  Library,
  Target,
  Flame,
  Clock,
  Dumbbell,
  TrendingUp,
  ChevronRight,
  Zap,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

// ---------- Mock Data ----------

const trainingChartData = Array.from({ length: 30 }, (_, i) => {
  const date = new Date();
  date.setDate(date.getDate() - 29 + i);
  const dayOfWeek = date.getDay();
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
  return {
    date: date.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
    minutes: isWeekend
      ? Math.floor(Math.random() * 60 + 60)
      : Math.random() > 0.35
      ? Math.floor(Math.random() * 90 + 30)
      : 0,
  };
});

const recentSessions = [
  {
    id: 1,
    date: "Mar 27, 2026",
    type: "Gi Training",
    duration: 90,
    notes: "Focused on closed guard sweeps and collar chokes",
  },
  {
    id: 2,
    date: "Mar 25, 2026",
    type: "No-Gi Rolling",
    duration: 60,
    notes: "Worked on guillotine defense and leg lock entries",
  },
  {
    id: 3,
    date: "Mar 24, 2026",
    type: "Drilling",
    duration: 45,
    notes: "Hip escape drills and guard retention patterns",
  },
  {
    id: 4,
    date: "Mar 22, 2026",
    type: "Competition Class",
    duration: 120,
    notes: "Takedown sequences and pressure passing",
  },
  {
    id: 5,
    date: "Mar 20, 2026",
    type: "Open Mat",
    duration: 75,
    notes: "Experimented with de la Riva guard transitions",
  },
];

const stats = [
  {
    label: "Total Sessions",
    value: "142",
    icon: Dumbbell,
    change: "+8 this month",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    label: "Hours Trained",
    value: "213",
    icon: Clock,
    change: "+12h this month",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    label: "Current Streak",
    value: "7 days",
    icon: Flame,
    change: "Personal best!",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
  {
    label: "Techniques Logged",
    value: "68",
    icon: TrendingUp,
    change: "+5 this month",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
];

const quickActions = [
  {
    label: "Start AI Coach",
    href: "/coach",
    icon: MessageSquare,
    description: "Get personalized guidance",
    accent: true,
  },
  {
    label: "Log Training",
    href: "/journal",
    icon: BookOpen,
    description: "Record your session",
    accent: false,
  },
  {
    label: "View Techniques",
    href: "/techniques",
    icon: Library,
    description: "Browse your library",
    accent: false,
  },
  {
    label: "Build Game Plan",
    href: "/gameplan",
    icon: Target,
    description: "Strategize your game",
    accent: false,
  },
];

const beltInfo = {
  current: "Blue Belt",
  stripe: 3,
  progress: 72,
  nextBelt: "Purple Belt",
};

// ---------- Custom Tooltip ----------

function ChartTooltip({ active, payload, label }: { active?: boolean; payload?: { value: number }[]; label?: string }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 shadow-xl">
      <p className="text-xs text-zinc-400">{label}</p>
      <p className="text-sm font-semibold text-zinc-100">
        {payload[0].value} min
      </p>
    </div>
  );
}

// ---------- Page ----------

export default function DashboardPage() {
  const { data: session } = useSession();
  const userName = session?.user?.name?.split(" ")[0] || "Practitioner";

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      {/* Welcome */}
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-zinc-100">
            Welcome back, {userName}
          </h1>
          <p className="text-sm text-zinc-400 mt-1">
            Keep pushing forward on the mats. Here is your training overview.
          </p>
        </div>
        <Badge variant="outline" className="w-fit mt-2 sm:mt-0 border-blue-500/30 text-blue-400">
          <Zap className="mr-1 h-3 w-3" />
          {beltInfo.current} &middot; {beltInfo.stripe} stripes
        </Badge>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-lg ${stat.bg}`}
                >
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-xs text-zinc-500">{stat.label}</p>
                  <p className="text-xl font-bold text-zinc-100">{stat.value}</p>
                </div>
              </div>
              <p className="mt-2 text-xs text-zinc-500">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Middle row: Chart + Recent Sessions */}
      <div className="grid gap-6 lg:grid-cols-5">
        {/* Training Chart */}
        <Card className="lg:col-span-3">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Training Frequency</CardTitle>
            <CardDescription>Minutes trained per day (last 30 days)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={trainingChartData}
                  margin={{ top: 5, right: 5, left: -20, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="trainGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#dc2626" stopOpacity={0.3} />
                      <stop offset="100%" stopColor="#dc2626" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#27272a"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="date"
                    tick={{ fontSize: 11, fill: "#71717a" }}
                    tickLine={false}
                    axisLine={false}
                    interval={6}
                  />
                  <YAxis
                    tick={{ fontSize: 11, fill: "#71717a" }}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip content={<ChartTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="minutes"
                    stroke="#dc2626"
                    strokeWidth={2}
                    fill="url(#trainGrad)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Recent Sessions */}
        <Card className="lg:col-span-2">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Recent Sessions</CardTitle>
              <Link
                href="/journal"
                className="text-xs text-red-500 hover:text-red-400 flex items-center gap-0.5"
              >
                View all <ChevronRight className="h-3 w-3" />
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentSessions.map((session) => (
                <div
                  key={session.id}
                  className="flex items-start gap-3 rounded-lg border border-zinc-800/50 bg-zinc-800/20 p-3"
                >
                  <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-zinc-800">
                    <BookOpen className="h-4 w-4 text-zinc-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="truncate text-sm font-medium text-zinc-200">
                        {session.type}
                      </p>
                      <span className="flex-shrink-0 text-xs text-zinc-500">
                        {session.duration}m
                      </span>
                    </div>
                    <p className="text-xs text-zinc-500 mt-0.5">{session.date}</p>
                    <p className="mt-1 truncate text-xs text-zinc-400">
                      {session.notes}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Belt Progress */}
      <Card>
        <CardContent className="p-4 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <h3 className="text-sm font-medium text-zinc-200">
                Belt Progression
              </h3>
              <p className="text-xs text-zinc-500">
                {beltInfo.current} &rarr; {beltInfo.nextBelt} &middot;{" "}
                {beltInfo.progress}% complete
              </p>
            </div>
            <div className="w-full sm:w-64">
              <Progress value={beltInfo.progress} className="h-2.5" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div>
        <h2 className="mb-3 text-sm font-medium text-zinc-400">
          Quick Actions
        </h2>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {quickActions.map((action) => (
            <Link key={action.label} href={action.href}>
              <Card className="group cursor-pointer transition-colors hover:border-zinc-700">
                <CardContent className="flex flex-col items-center gap-3 p-5 text-center">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${
                      action.accent
                        ? "bg-red-600/10 group-hover:bg-red-600/20"
                        : "bg-zinc-800 group-hover:bg-zinc-700"
                    }`}
                  >
                    <action.icon
                      className={`h-6 w-6 ${
                        action.accent ? "text-red-500" : "text-zinc-400"
                      }`}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-zinc-200">
                      {action.label}
                    </p>
                    <p className="mt-0.5 text-xs text-zinc-500">
                      {action.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
