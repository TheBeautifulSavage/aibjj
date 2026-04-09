"use client";

import React, { useEffect, useState } from "react";
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
  ChevronRight,
  Zap,
  ShoppingBag,
  Check,
  Loader2,
  Brain,
  RefreshCw,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  X,
  BarChart2,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// ---------- Types ----------

interface StudyFocusArea {
  area: string;
  reason: string;
  position: string;
  category: string;
  drills: string[];
}

interface StudyPlan {
  summary: string;
  weaknesses: string[];
  focusAreas: StudyFocusArea[];
  weeklyGoal: string;
  searchTerms: string[];
}

interface RelatedCourse {
  id: string;
  title: string;
  slug: string;
  price: number;
  coverImage: string | null;
  creator: { name: string | null; username: string | null; belt: string | null };
  reviews: { rating: number }[];
}

interface JournalEntry {
  id: string;
  date: string;
  trainingType: string;
  duration: number;
  workedOn: string | null;
  wentWell: string | null;
}

interface TrainingDataPoint {
  date: string;
  duration: number;
}

interface DashboardStats {
  journalCount: number;
  techniqueCount: number;
  chatSessionCount: number;
  courseCount: number;
  streak: number;
  recentJournals: JournalEntry[];
  trainingData: TrainingDataPoint[];
}

// ---------- Quick Actions ----------

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
    href: "/library",
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

// ---------- Onboarding Cards ----------

const onboardingCards = [
  {
    label: "AI Coach",
    href: "/coach",
    icon: MessageSquare,
    description: "Get personalized guidance",
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
  {
    label: "Technique Library",
    href: "/library",
    icon: Library,
    description: "Browse 510+ techniques",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    label: "Training Journal",
    href: "/journal",
    icon: BookOpen,
    description: "Log your sessions",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    label: "Browse Courses",
    href: "/marketplace",
    icon: ShoppingBag,
    description: "Discover instructionals",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
];

// ---------- Custom Tooltip ----------

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
        {payload[0].value} min
      </p>
    </div>
  );
}

// ---------- Meta Alert Card ----------

function MetaAlertCard() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;
  return (
    <div className="flex items-start gap-3 rounded-xl border border-amber-800/40 bg-amber-950/20 p-4">
      <BarChart2 className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-amber-300 mb-0.5">
          🏆 Trending in No-Gi: Inside Heel Hooks
        </p>
        <p className="text-sm text-zinc-400">
          Inside heel hooks account for <strong className="text-amber-400">40%</strong> of No-Gi
          submissions in 2024. Study your leg lock defense.{" "}
          <Link href="/meta" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">
            See full meta breakdown →
          </Link>
        </p>
      </div>
      <button
        onClick={() => setDismissed(true)}
        className="flex-shrink-0 text-zinc-500 hover:text-zinc-300 transition-colors"
        aria-label="Dismiss"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}

// ---------- Study Plan Card ----------

const STUDY_PLAN_CACHE_KEY = 'aibjj_study_plan_cache'
const STUDY_PLAN_TTL_MS = 24 * 60 * 60 * 1000 // 24 hours

function StudyPlanCard() {
  const [plan, setPlan] = useState<StudyPlan | null>(null)
  const [relatedCourses, setRelatedCourses] = useState<RelatedCourse[]>([])
  const [loading, setLoading] = useState(false)
  const [expandedArea, setExpandedArea] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)

  function loadFromCache(): { plan: StudyPlan; courses: RelatedCourse[] } | null {
    try {
      const raw = localStorage.getItem(STUDY_PLAN_CACHE_KEY)
      if (!raw) return null
      const { data, timestamp } = JSON.parse(raw)
      if (Date.now() - timestamp > STUDY_PLAN_TTL_MS) return null
      return data
    } catch {
      return null
    }
  }

  function saveToCache(data: { plan: StudyPlan; courses: RelatedCourse[] }) {
    try {
      localStorage.setItem(STUDY_PLAN_CACHE_KEY, JSON.stringify({ data, timestamp: Date.now() }))
    } catch { /* ignore */ }
  }

  async function fetchPlan(force = false) {
    if (!force) {
      const cached = loadFromCache()
      if (cached) {
        setPlan(cached.plan)
        setRelatedCourses(cached.courses)
        return
      }
    }
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/dashboard/study-plan')
      if (!res.ok) throw new Error('Failed to fetch')
      const data = await res.json()
      if (data.plan) {
        setPlan(data.plan)
        setRelatedCourses(data.relatedCourses || [])
        saveToCache({ plan: data.plan, courses: data.relatedCourses || [] })
      }
    } catch {
      setError('Could not load study plan. Try again.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchPlan() }, []) // eslint-disable-line react-hooks/exhaustive-deps

  if (!plan && !loading && !error) return null

  return (
    <Card className="border-amber-700/30 bg-gradient-to-br from-amber-950/20 to-zinc-900">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-amber-400" />
            <CardTitle className="text-base text-amber-300">Your Study Plan</CardTitle>
            <span className="text-xs text-zinc-600">AI-powered · Updated daily</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="h-7 px-2 text-zinc-500 hover:text-zinc-300"
            onClick={() => fetchPlan(true)}
            disabled={loading}
          >
            <RefreshCw className={`h-3.5 w-3.5 mr-1 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {loading && (
          <div className="flex items-center gap-2 text-zinc-500 text-sm py-4">
            <Loader2 className="h-4 w-4 animate-spin" />
            Analyzing your training data...
          </div>
        )}
        {error && (
          <p className="text-sm text-red-400">{error}</p>
        )}
        {plan && !loading && (
          <>
            {/* Weekly Goal */}
            <div className="rounded-lg border border-amber-600/20 bg-amber-600/10 p-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-500 mb-1">This Week&apos;s Goal</p>
              <p className="text-sm text-zinc-200 font-medium">{plan.weeklyGoal}</p>
            </div>

            {/* Summary */}
            <p className="text-sm text-zinc-400">{plan.summary}</p>

            {/* Focus Areas */}
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Focus Areas</p>
              {plan.focusAreas?.map((area, i) => (
                <div key={i} className="rounded-lg border border-zinc-800/60 bg-zinc-800/20">
                  <button
                    className="w-full flex items-center justify-between p-3 text-left"
                    onClick={() => setExpandedArea(expandedArea === i ? null : i)}
                  >
                    <div className="flex items-center gap-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-600/20 text-xs font-bold text-amber-400">{i + 1}</span>
                      <div>
                        <p className="text-sm font-medium text-zinc-200">{area.area}</p>
                        <p className="text-xs text-zinc-500">{area.reason}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <Link
                        href={`/library?position=${encodeURIComponent(area.position)}&category=${encodeURIComponent(area.category)}`}
                        className="text-xs text-amber-500 hover:text-amber-400 mr-1"
                        onClick={(e) => e.stopPropagation()}
                      >
                        View techniques
                      </Link>
                      {expandedArea === i ? <ChevronUp className="h-4 w-4 text-zinc-500" /> : <ChevronDown className="h-4 w-4 text-zinc-500" />}
                    </div>
                  </button>
                  {expandedArea === i && area.drills?.length > 0 && (
                    <div className="border-t border-zinc-800/60 px-3 pb-3 pt-2">
                      <p className="text-xs font-semibold text-zinc-500 mb-2 uppercase tracking-wider">Drills to practice:</p>
                      <ul className="space-y-1">
                        {area.drills.map((drill, di) => (
                          <li key={di} className="flex items-start gap-2 text-xs text-zinc-400">
                            <Check className="h-3 w-3 text-amber-500 flex-shrink-0 mt-0.5" />
                            {drill}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={`/coach?q=${encodeURIComponent(`Teach me about ${area.area}`)}`}
                        className="mt-2 inline-flex items-center gap-1 text-xs text-red-400 hover:text-red-300"
                      >
                        <MessageSquare className="h-3 w-3" />
                        Ask AI Coach about this
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Recommended Courses */}
            {relatedCourses.length > 0 && (
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Recommended Courses</p>
                {relatedCourses.slice(0, 2).map((course) => {
                  const avgRating = course.reviews.length > 0
                    ? (course.reviews.reduce((s, r) => s + r.rating, 0) / course.reviews.length).toFixed(1)
                    : null
                  return (
                    <Link key={course.id} href={`/courses/${course.slug || course.id}`}>
                      <div className="flex items-center gap-3 rounded-lg border border-zinc-800/50 bg-zinc-800/20 p-3 hover:border-zinc-700 transition-colors">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-zinc-800">
                          <GraduationCap className="h-5 w-5 text-zinc-400" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium text-zinc-200 truncate">{course.title}</p>
                          <p className="text-xs text-zinc-500">by {course.creator?.name || 'Instructor'} {avgRating ? `· ⭐ ${avgRating}` : ''}</p>
                        </div>
                        <span className="text-sm font-semibold text-zinc-300 flex-shrink-0">
                          {course.price === 0 ? 'Free' : `$${course.price}`}
                        </span>
                      </div>
                    </Link>
                  )
                })}
              </div>
            )}
          </>
        )}
      </CardContent>
    </Card>
  )
}

// ---------- Loading Skeleton ----------

function DashboardSkeleton() {
  return (
    <div className="mx-auto max-w-7xl space-y-6">
      {/* Header skeleton */}
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <div className="h-7 w-64 animate-pulse rounded bg-zinc-800" />
          <div className="h-4 w-80 animate-pulse rounded bg-zinc-800" />
        </div>
        <div className="h-6 w-28 animate-pulse rounded-full bg-zinc-800 mt-2 sm:mt-0" />
      </div>

      {/* Stats skeleton */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <Card key={i}>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 animate-pulse rounded-lg bg-zinc-800" />
                <div className="space-y-1.5">
                  <div className="h-3 w-20 animate-pulse rounded bg-zinc-800" />
                  <div className="h-6 w-12 animate-pulse rounded bg-zinc-800" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Chart + Sessions skeleton */}
      <div className="grid gap-6 lg:grid-cols-5">
        <Card className="lg:col-span-3">
          <CardContent className="p-6">
            <div className="h-64 animate-pulse rounded bg-zinc-800" />
          </CardContent>
        </Card>
        <Card className="lg:col-span-2">
          <CardContent className="p-6 space-y-3">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="h-16 animate-pulse rounded-lg bg-zinc-800"
              />
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// ---------- Quick Log Widget ----------

function QuickLogWidget() {
  const [type, setType] = useState("GI");
  const [duration, setDuration] = useState(60);
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [lastSession, setLastSession] = useState<string | null>(null);

  useEffect(() => {
    async function fetchLast() {
      try {
        const res = await fetch("/api/journal?limit=1");
        if (res.ok) {
          const data = await res.json();
          if (data.entries?.length > 0) {
            const d = new Date(data.entries[0].date);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            d.setHours(0, 0, 0, 0);
            const diff = Math.floor(
              (today.getTime() - d.getTime()) / (1000 * 60 * 60 * 24)
            );
            if (diff === 0) setLastSession("today");
            else if (diff === 1) setLastSession("1 day ago");
            else setLastSession(`${diff} days ago`);
          }
        }
      } catch {
        // silent
      }
    }
    fetchLast();
  }, [success]);

  async function handleQuickLog() {
    setSubmitting(true);
    try {
      const res = await fetch("/api/journal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date: new Date().toISOString().split("T")[0],
          trainingType: type,
          duration,
          workedOn: notes || undefined,
        }),
      });
      if (res.ok) {
        setSuccess(true);
        setNotes("");
        setTimeout(() => setSuccess(false), 3000);
      }
    } catch {
      // silent
    } finally {
      setSubmitting(false);
    }
  }

  const durations = [30, 60, 90, 120];

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base flex items-center gap-2">
          Quick Log
          {lastSession && (
            <span className="text-xs font-normal text-zinc-500 ml-auto">
              {lastSession === "today" ? (
                <span className="text-emerald-400">You trained today!</span>
              ) : (
                `Last session: ${lastSession}`
              )}
            </span>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {success ? (
          <div className="flex items-center gap-2 text-emerald-400 py-4 justify-center">
            <Check className="h-5 w-5" />
            <span className="text-sm font-medium">Session logged!</span>
          </div>
        ) : (
          <div className="space-y-3">
            {/* Type toggle */}
            <div className="flex gap-2">
              {[
                { value: "GI", label: "Gi" },
                { value: "NOGI", label: "No-Gi" },
              ].map((t) => (
                <button
                  key={t.value}
                  onClick={() => setType(t.value)}
                  className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    type === t.value
                      ? "bg-red-600 text-white"
                      : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Duration quick picker */}
            <div className="flex gap-2">
              {durations.map((d) => (
                <button
                  key={d}
                  onClick={() => setDuration(d)}
                  className={`flex-1 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    duration === d
                      ? "bg-zinc-700 text-zinc-100"
                      : "bg-zinc-800/50 text-zinc-500 hover:bg-zinc-800"
                  }`}
                >
                  {d}m
                </button>
              ))}
            </div>

            {/* Notes */}
            <textarea
              placeholder="Quick notes (optional)"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={2}
              className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 resize-none"
            />

            {/* Submit */}
            <Button
              className="w-full bg-red-600 hover:bg-red-700 text-white"
              onClick={handleQuickLog}
              disabled={submitting}
            >
              {submitting ? (
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
              ) : null}
              Log Session
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// ---------- Page ----------

export default function DashboardPage() {
  const { data: session } = useSession();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [suggestion, setSuggestion] = useState<string[] | null>(null);
  const [loadingSuggestion, setLoadingSuggestion] = useState(false);

  const userName = session?.user?.name?.split(" ")[0] || "Practitioner";
  const belt = (session?.user as { belt?: string })?.belt;

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch("/api/dashboard/stats");
        if (res.ok) {
          const data = await res.json();
          setStats(data);
        }
      } catch (err) {
        console.error("Failed to fetch dashboard stats:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchStats();

    // Fetch AI suggestion
    setLoadingSuggestion(true);
    fetch("/api/dashboard/suggestion")
      .then((r) => r.json())
      .then((d) => { if (d.bullets) setSuggestion(d.bullets); })
      .catch(() => {})
      .finally(() => setLoadingSuggestion(false));
  }, []);

  if (loading) {
    return <DashboardSkeleton />;
  }

  const statCards = [
    {
      label: "Journal Entries",
      value: String(stats?.journalCount ?? 0),
      icon: BookOpen,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
    },
    {
      label: "Techniques Available",
      value: String(stats?.techniqueCount ?? 0),
      icon: Library,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
    },
    {
      label: "Current Streak",
      value: `${stats?.streak ?? 0} days`,
      icon: Flame,
      color: "text-orange-400",
      bg: "bg-orange-500/10",
    },
    {
      label: "Coach Sessions",
      value: String(stats?.chatSessionCount ?? 0),
      icon: MessageSquare,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
    },
  ];

  const trainingData = stats?.trainingData ?? [];
  const recentJournals = stats?.recentJournals ?? [];

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
        {belt && (
          <Badge
            variant="outline"
            className="w-fit mt-2 sm:mt-0 border-blue-500/30 text-blue-400"
          >
            <Zap className="mr-1 h-3 w-3" />
            {belt}
          </Badge>
        )}
      </div>

      {/* Today's Focus — AI Suggestion */}
      {(loadingSuggestion || suggestion) && (
        <Card className="border-red-800/40 bg-gradient-to-r from-red-950/30 to-zinc-900">
          <CardContent className="p-4 sm:p-5">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="h-4 w-4 text-red-400" />
              <span className="text-sm font-semibold text-red-300">Today&apos;s Focus</span>
              <span className="text-xs text-zinc-600 ml-auto">Powered by AI Coach</span>
            </div>
            {loadingSuggestion ? (
              <div className="flex items-center gap-2 text-zinc-500 text-sm">
                <Loader2 className="h-4 w-4 animate-spin" />
                Generating your daily training plan...
              </div>
            ) : (
              <ul className="space-y-1.5">
                {suggestion?.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                    <Check className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      )}

      {/* Study Plan */}
      <StudyPlanCard />

      {/* Meta Alert */}
      <MetaAlertCard />

      {/* Stats Row */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {statCards.map((stat) => (
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
                  <p className="text-xl font-bold text-zinc-100">
                    {stat.value}
                  </p>
                </div>
              </div>
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
            <CardDescription>
              Minutes trained per day (last 30 days)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              {trainingData.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={trainingData}
                    margin={{ top: 5, right: 5, left: -20, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient
                        id="trainGrad"
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
                      dataKey="duration"
                      stroke="#dc2626"
                      strokeWidth={2}
                      fill="url(#trainGrad)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
                  <Clock className="h-10 w-10 text-zinc-600" />
                  <div>
                    <p className="text-sm font-medium text-zinc-400">
                      No training data yet
                    </p>
                    <p className="text-xs text-zinc-500 mt-1">
                      Start logging sessions to see your progress
                    </p>
                  </div>
                  <Link href="/journal">
                    <Button
                      size="sm"
                      className="mt-1 bg-red-600 hover:bg-red-700 text-white"
                    >
                      Log Your First Session
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Recent Sessions */}
        <Card className="lg:col-span-2">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Recent Sessions</CardTitle>
              {recentJournals.length > 0 && (
                <Link
                  href="/journal"
                  className="text-xs text-red-500 hover:text-red-400 flex items-center gap-0.5"
                >
                  View all <ChevronRight className="h-3 w-3" />
                </Link>
              )}
            </div>
          </CardHeader>
          <CardContent>
            {recentJournals.length > 0 ? (
              <div className="space-y-3">
                {recentJournals.map((entry) => (
                  <div
                    key={entry.id}
                    className="flex items-start gap-3 rounded-lg border border-zinc-800/50 bg-zinc-800/20 p-3"
                  >
                    <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-zinc-800">
                      <BookOpen className="h-4 w-4 text-zinc-400" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <p className="truncate text-sm font-medium text-zinc-200">
                          {entry.trainingType.replace("_", " ")}
                        </p>
                        <span className="flex-shrink-0 text-xs text-zinc-500">
                          {entry.duration}m
                        </span>
                      </div>
                      <p className="text-xs text-zinc-500 mt-0.5">
                        {new Date(entry.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </p>
                      {entry.workedOn && (
                        <p className="mt-1 truncate text-xs text-zinc-400">
                          {entry.workedOn}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-sm text-zinc-400 mb-4">
                  Get started with your BJJ journey
                </p>
                {onboardingCards.map((card) => (
                  <Link key={card.label} href={card.href}>
                    <div className="flex items-center gap-3 rounded-lg border border-zinc-800/50 bg-zinc-800/20 p-3 transition-colors hover:border-zinc-700 hover:bg-zinc-800/40">
                      <div
                        className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md ${card.bg}`}
                      >
                        <card.icon className={`h-4 w-4 ${card.color}`} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-zinc-200">
                          {card.label}
                        </p>
                        <p className="text-xs text-zinc-500">
                          {card.description}
                        </p>
                      </div>
                      <ChevronRight className="h-4 w-4 text-zinc-600" />
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Quick Log Widget */}
      <QuickLogWidget />

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
