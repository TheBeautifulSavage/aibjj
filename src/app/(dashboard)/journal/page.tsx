"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  Plus,
  Clock,
  Flame,
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Loader2,
  X,
  Star,
  Trash2,
  Pencil,
  TrendingUp,
  Brain,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

// --- Types & Constants ---

const TRAINING_TYPES = [
  { value: "GI", label: "Gi" },
  { value: "NOGI", label: "No-Gi" },
  { value: "COMP", label: "Competition" },
  { value: "DRILLING", label: "Drilling" },
  { value: "OPEN_MAT", label: "Open Mat" },
] as const;

const TYPE_COLORS: Record<string, string> = {
  GI: "bg-blue-600",
  NOGI: "bg-purple-600",
  COMP: "bg-red-600",
  DRILLING: "bg-green-600",
  OPEN_MAT: "bg-yellow-600",
};

const ENERGY_EMOJIS = ["", "\u{1F634}", "\u{1F611}", "\u{1F60A}", "\u{1F4AA}", "\u{1F525}"];

interface JournalEntry {
  id: string;
  date: string;
  trainingType: string;
  duration: number;
  partners: string | null;
  workedOn: string | null;
  wentWell: string | null;
  toImprove: string | null;
  energyLevel: number | null;
  rating: number | null;
  injuryNotes: string | null;
  createdAt: string;
}

// --- Helpers ---

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

function toDateStr(d: Date) {
  return d.toISOString().split("T")[0];
}

function formatDateShort(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function formatDuration(mins: number) {
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  if (h === 0) return `${m}m`;
  if (m === 0) return `${h}h`;
  return `${h}h ${m}m`;
}

// --- Stars Component ---

function Stars({
  value,
  onChange,
  readonly = false,
}: {
  value: number;
  onChange?: (v: number) => void;
  readonly?: boolean;
}) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <button
          key={i}
          type="button"
          disabled={readonly}
          onClick={() => onChange?.(value === i ? 0 : i)}
          className={cn(
            "transition-colors",
            readonly ? "cursor-default" : "cursor-pointer hover:text-yellow-400"
          )}
        >
          <Star
            className={cn(
              "h-4 w-4",
              i <= value
                ? "fill-yellow-400 text-yellow-400"
                : "text-zinc-600"
            )}
          />
        </button>
      ))}
    </div>
  );
}

// --- Weekly Chart Tooltip ---

function WeeklyTooltip({
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

// --- Main Page ---

export default function JournalPage() {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [allEntries, setAllEntries] = useState<JournalEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Calendar state
  const today = new Date();
  const [calYear, setCalYear] = useState(today.getFullYear());
  const [calMonth, setCalMonth] = useState(today.getMonth());

  // Slide-over form
  const [aiAnalysis, setAiAnalysis] = useState<string | null>(null);
  const [analyzingAI, setAnalyzingAI] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [editingEntry, setEditingEntry] = useState<JournalEntry | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Form fields
  const [formDate, setFormDate] = useState(toDateStr(today));
  const [formType, setFormType] = useState("GI");
  const [formDuration, setFormDuration] = useState(60);
  const [formPartners, setFormPartners] = useState("");
  const [formWorkedOn, setFormWorkedOn] = useState("");
  const [formWentWell, setFormWentWell] = useState("");
  const [formToImprove, setFormToImprove] = useState("");
  const [formEnergy, setFormEnergy] = useState(0);
  const [formRating, setFormRating] = useState(0);
  const [formInjury, setFormInjury] = useState("");

  // Fetch paginated entries for the list
  const fetchEntries = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({ page: String(page), limit: "10" });
      const res = await fetch(`/api/journal?${params.toString()}`);
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setEntries(data.entries);
      setTotalPages(data.totalPages);
    } catch {
      console.error("Failed to load journal entries");
    } finally {
      setLoading(false);
    }
  }, [page]);

  // Fetch ALL entries for calendar dots + stats
  const fetchAllEntries = useCallback(async () => {
    try {
      const res = await fetch("/api/journal?all=true");
      if (!res.ok) return;
      const data = await res.json();
      setAllEntries(data.entries);
    } catch {
      // silent
    }
  }, []);

  useEffect(() => {
    fetchEntries();
  }, [fetchEntries]);

  useEffect(() => {
    fetchAllEntries();
  }, [fetchAllEntries]);

  // --- Stats ---

  const stats = useMemo(() => {
    const totalSessions = allEntries.length;
    const totalMinutes = allEntries.reduce((a, e) => a + e.duration, 0);
    const totalHours = Math.round(totalMinutes / 60);

    // This week
    const now = new Date();
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - now.getDay());
    startOfWeek.setHours(0, 0, 0, 0);
    const thisWeek = allEntries.filter(
      (e) => new Date(e.date) >= startOfWeek
    ).length;

    // Streak
    const sortedDates = Array.from(
      new Set(allEntries.map((e) => toDateStr(new Date(e.date))))
    ).sort((a, b) => b.localeCompare(a));

    let streak = 0;
    let longestStreak = 0;
    let currentStreak = 0;

    if (sortedDates.length > 0) {
      // Check if trained today or yesterday for current streak
      const todayStr = toDateStr(new Date());
      const yesterdayDate = new Date();
      yesterdayDate.setDate(yesterdayDate.getDate() - 1);
      const yesterdayStr = toDateStr(yesterdayDate);

      if (sortedDates[0] === todayStr || sortedDates[0] === yesterdayStr) {
        currentStreak = 1;
        for (let i = 1; i < sortedDates.length; i++) {
          const prev = new Date(sortedDates[i - 1]);
          const curr = new Date(sortedDates[i]);
          const diffDays = Math.round(
            (prev.getTime() - curr.getTime()) / (1000 * 60 * 60 * 24)
          );
          if (diffDays === 1) {
            currentStreak++;
          } else {
            break;
          }
        }
      }

      // Longest streak
      let tempStreak = 1;
      const allSorted = [...sortedDates].sort();
      for (let i = 1; i < allSorted.length; i++) {
        const prev = new Date(allSorted[i - 1]);
        const curr = new Date(allSorted[i]);
        const diffDays = Math.round(
          (curr.getTime() - prev.getTime()) / (1000 * 60 * 60 * 24)
        );
        if (diffDays === 1) {
          tempStreak++;
        } else {
          longestStreak = Math.max(longestStreak, tempStreak);
          tempStreak = 1;
        }
      }
      longestStreak = Math.max(longestStreak, tempStreak);
    }

    streak = currentStreak;

    return { totalSessions, totalHours, thisWeek, streak, longestStreak };
  }, [allEntries]);

  // --- Calendar Data ---

  const trainedDays = useMemo(() => {
    const set = new Set<string>();
    allEntries.forEach((e) => set.add(toDateStr(new Date(e.date))));
    return set;
  }, [allEntries]);

  const daysInMonth = getDaysInMonth(calYear, calMonth);
  const firstDay = getFirstDayOfMonth(calYear, calMonth);
  const monthName = new Date(calYear, calMonth).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const calendarDays = useMemo(() => {
    const days: (number | null)[] = [];
    for (let i = 0; i < firstDay; i++) days.push(null);
    for (let d = 1; d <= daysInMonth; d++) days.push(d);
    return days;
  }, [firstDay, daysInMonth]);

  function prevMonth() {
    if (calMonth === 0) {
      setCalMonth(11);
      setCalYear(calYear - 1);
    } else {
      setCalMonth(calMonth - 1);
    }
  }

  function nextMonth() {
    if (calMonth === 11) {
      setCalMonth(0);
      setCalYear(calYear + 1);
    } else {
      setCalMonth(calMonth + 1);
    }
  }

  // --- Weekly Chart Data ---

  const weeklyData = useMemo(() => {
    const now = new Date();
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const data = [];

    for (let i = 6; i >= 0; i--) {
      const d = new Date(now);
      d.setDate(now.getDate() - i);
      const dateStr = toDateStr(d);
      const dayMins = allEntries
        .filter((e) => toDateStr(new Date(e.date)) === dateStr)
        .reduce((sum, e) => sum + e.duration, 0);
      data.push({ day: dayNames[d.getDay()], minutes: dayMins });
    }

    return data;
  }, [allEntries]);

  // --- Form ---

  function resetForm() {
    setFormDate(toDateStr(today));
    setFormType("GI");
    setFormDuration(60);
    setFormPartners("");
    setFormWorkedOn("");
    setFormWentWell("");
    setFormToImprove("");
    setFormEnergy(0);
    setFormRating(0);
    setFormInjury("");
    setEditingEntry(null);
  }

  function openNewForm() {
    resetForm();
    setFormOpen(true);
  }

  function openEditForm(entry: JournalEntry) {
    setEditingEntry(entry);
    setFormDate(toDateStr(new Date(entry.date)));
    setFormType(entry.trainingType);
    setFormDuration(entry.duration);
    setFormPartners(entry.partners || "");
    setFormWorkedOn(entry.workedOn || "");
    setFormWentWell(entry.wentWell || "");
    setFormToImprove(entry.toImprove || "");
    setFormEnergy(entry.energyLevel || 0);
    setFormRating(entry.rating || 0);
    setFormInjury(entry.injuryNotes || "");
    setFormOpen(true);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    const payload = {
      date: formDate,
      trainingType: formType,
      duration: formDuration,
      partners: formPartners || undefined,
      workedOn: formWorkedOn || undefined,
      wentWell: formWentWell || undefined,
      toImprove: formToImprove || undefined,
      energyLevel: formEnergy || undefined,
      rating: formRating || undefined,
      injuryNotes: formInjury || undefined,
    };

    try {
      if (editingEntry) {
        const res = await fetch("/api/journal", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: editingEntry.id, ...payload }),
        });
        if (!res.ok) throw new Error("Failed to update");
      } else {
        const res = await fetch("/api/journal", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error("Failed to create");
      }

      setFormOpen(false);
      resetForm();
      setPage(1);
      fetchEntries();
      fetchAllEntries();
    } catch {
      console.error("Failed to save entry");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete(id: string) {
    try {
      const res = await fetch(`/api/journal?id=${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete");
      setExpandedId(null);
      fetchEntries();
      fetchAllEntries();
    } catch {
      console.error("Failed to delete entry");
    }
  }

  return (
    <div className="space-y-6 relative">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-zinc-100">
            Training Journal
          </h1>
          <p className="text-sm text-zinc-400 mt-1">
            Track every session. See your growth.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 gap-1.5"
            onClick={async () => {
              setAnalyzingAI(true);
              setAiAnalysis(null);
              try {
                const res = await fetch("/api/journal/analyze", { method: "POST" });
                if (res.ok) {
                  const data = await res.json();
                  setAiAnalysis(data.analysis);
                }
              } catch { /* ignore */ } finally {
                setAnalyzingAI(false);
              }
            }}
            disabled={analyzingAI || allEntries.length === 0}
          >
            {analyzingAI ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Brain className="h-4 w-4 text-purple-400" />
            )}
            Analyze Training
          </Button>
          <Button
            className="bg-red-600 hover:bg-red-700 text-white"
            onClick={openNewForm}
          >
            <Plus className="mr-2 h-4 w-4" />
            Log Session
          </Button>
        </div>
      </div>

      {/* Stats Strip */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
        {[
          {
            label: "Total Sessions",
            value: stats.totalSessions,
            icon: CalendarIcon,
            color: "text-blue-400",
            bg: "bg-blue-500/10",
          },
          {
            label: "Total Hours",
            value: stats.totalHours,
            icon: Clock,
            color: "text-emerald-400",
            bg: "bg-emerald-500/10",
          },
          {
            label: "This Week",
            value: stats.thisWeek,
            icon: TrendingUp,
            color: "text-purple-400",
            bg: "bg-purple-500/10",
          },
          {
            label: "Current Streak",
            value: `${stats.streak}d`,
            icon: Flame,
            color: "text-orange-400",
            bg: "bg-orange-500/10",
          },
          {
            label: "Longest Streak",
            value: `${stats.longestStreak}d`,
            icon: Star,
            color: "text-yellow-400",
            bg: "bg-yellow-500/10",
          },
        ].map((stat) => (
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

      {/* AI Analysis Result */}
      {aiAnalysis && (
        <Card className="border-purple-800/40 bg-purple-900/10">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-purple-400" />
                <h3 className="text-sm font-semibold text-purple-300">AI Training Analysis</h3>
              </div>
              <button
                onClick={() => setAiAnalysis(null)}
                className="text-zinc-500 hover:text-zinc-300"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="text-sm text-zinc-300 whitespace-pre-wrap leading-relaxed">
              {aiAnalysis}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Calendar + Weekly Chart Row */}
      <div className="grid gap-6 lg:grid-cols-5">
        {/* Calendar */}
        <Card className="lg:col-span-3">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={prevMonth}
                className="p-1 rounded hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <h3 className="text-base font-semibold text-zinc-100">
                {monthName}
              </h3>
              <button
                onClick={nextMonth}
                className="p-1 rounded hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Day headers */}
            <div className="grid grid-cols-7 gap-1 mb-1">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                <div
                  key={d}
                  className="text-center text-xs font-medium text-zinc-500 py-1"
                >
                  {d}
                </div>
              ))}
            </div>

            {/* Day grid */}
            <div className="grid grid-cols-7 gap-1">
              {calendarDays.map((day, idx) => {
                if (day === null) {
                  return <div key={`empty-${idx}`} className="aspect-square" />;
                }
                const dateStr = `${calYear}-${String(calMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                const trained = trainedDays.has(dateStr);
                const isToday = dateStr === toDateStr(new Date());

                return (
                  <div
                    key={dateStr}
                    className={cn(
                      "aspect-square flex flex-col items-center justify-center rounded-lg text-sm transition-colors relative",
                      isToday
                        ? "bg-zinc-800 text-zinc-100 font-semibold"
                        : "text-zinc-400 hover:bg-zinc-800/50"
                    )}
                  >
                    {day}
                    {trained && (
                      <div className="absolute bottom-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Weekly Bar Chart */}
        <Card className="lg:col-span-2">
          <CardContent className="p-4 sm:p-6">
            <h3 className="text-sm font-semibold text-zinc-200 mb-1">
              This Week
            </h3>
            <p className="text-xs text-zinc-500 mb-4">Minutes trained per day</p>
            <div className="h-52">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#27272a"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="day"
                    tick={{ fontSize: 11, fill: "#71717a" }}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    tick={{ fontSize: 11, fill: "#71717a" }}
                    tickLine={false}
                    axisLine={false}
                    width={30}
                  />
                  <Tooltip content={<WeeklyTooltip />} />
                  <Bar
                    dataKey="minutes"
                    fill="#dc2626"
                    radius={[4, 4, 0, 0]}
                    maxBarSize={40}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Session List */}
      <div>
        <h2 className="text-lg font-semibold text-zinc-100 mb-3">Sessions</h2>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-zinc-500" />
          </div>
        ) : entries.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-16 text-center">
              <CalendarIcon className="h-12 w-12 text-zinc-600 mb-4" />
              <h3 className="text-lg font-semibold text-zinc-200 mb-1">
                No sessions logged yet
              </h3>
              <p className="text-sm text-zinc-400 max-w-sm mb-6">
                Start tracking your BJJ journey by logging your first session.
              </p>
              <Button
                className="bg-red-600 hover:bg-red-700 text-white"
                onClick={openNewForm}
              >
                <Plus className="mr-2 h-4 w-4" />
                Log Your First Session
              </Button>
            </CardContent>
          </Card>
        ) : (
          <>
            <div className="space-y-3">
              {entries.map((entry) => {
                const typeLabel =
                  TRAINING_TYPES.find((t) => t.value === entry.trainingType)
                    ?.label || entry.trainingType;
                const isExpanded = expandedId === entry.id;

                return (
                  <Card
                    key={entry.id}
                    className={cn(
                      "transition-colors cursor-pointer",
                      isExpanded
                        ? "border-zinc-600"
                        : "hover:border-zinc-700"
                    )}
                    onClick={() =>
                      setExpandedId(isExpanded ? null : entry.id)
                    }
                  >
                    <CardContent className="p-4 sm:p-5">
                      {/* Summary row */}
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge
                            className={cn(
                              "border-transparent text-white text-xs",
                              TYPE_COLORS[entry.trainingType] || "bg-zinc-600"
                            )}
                          >
                            {typeLabel}
                          </Badge>
                          <span className="text-sm text-zinc-400">
                            {formatDateShort(entry.date)}
                          </span>
                          <span className="text-sm text-zinc-500">
                            {formatDuration(entry.duration)}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          {entry.rating && entry.rating > 0 && (
                            <Stars value={entry.rating} readonly />
                          )}
                          {entry.energyLevel && entry.energyLevel > 0 && (
                            <span className="text-lg">
                              {ENERGY_EMOJIS[entry.energyLevel]}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Preview */}
                      {!isExpanded && entry.workedOn && (
                        <p className="text-sm text-zinc-500 mt-2 line-clamp-1">
                          {entry.workedOn}
                        </p>
                      )}

                      {/* Expanded */}
                      {isExpanded && (
                        <div
                          className="mt-4 space-y-3 border-t border-zinc-800 pt-4"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {entry.partners && (
                            <div>
                              <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1">
                                Training Partners
                              </p>
                              <p className="text-sm text-zinc-300">
                                {entry.partners}
                              </p>
                            </div>
                          )}
                          {entry.workedOn && (
                            <div>
                              <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1">
                                What I Worked On
                              </p>
                              <p className="text-sm text-zinc-300 whitespace-pre-wrap">
                                {entry.workedOn}
                              </p>
                            </div>
                          )}
                          {entry.wentWell && (
                            <div>
                              <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1">
                                What Went Well
                              </p>
                              <p className="text-sm text-zinc-300 whitespace-pre-wrap">
                                {entry.wentWell}
                              </p>
                            </div>
                          )}
                          {entry.toImprove && (
                            <div>
                              <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1">
                                What to Improve
                              </p>
                              <p className="text-sm text-zinc-300 whitespace-pre-wrap">
                                {entry.toImprove}
                              </p>
                            </div>
                          )}
                          {entry.injuryNotes && (
                            <div>
                              <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1">
                                Injury Notes
                              </p>
                              <p className="text-sm text-red-400">
                                {entry.injuryNotes}
                              </p>
                            </div>
                          )}

                          {/* Actions */}
                          <div className="flex gap-2 pt-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-zinc-700 text-zinc-300 hover:bg-zinc-800"
                              onClick={() => openEditForm(entry)}
                            >
                              <Pencil className="h-3.5 w-3.5 mr-1" />
                              Edit
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-red-800/50 text-red-400 hover:bg-red-900/30"
                              onClick={() => handleDelete(entry.id)}
                            >
                              <Trash2 className="h-3.5 w-3.5 mr-1" />
                              Delete
                            </Button>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  disabled={page <= 1}
                  onClick={() => setPage((p) => p - 1)}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <span className="text-sm text-zinc-400">
                  Page {page} of {totalPages}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  disabled={page >= totalPages}
                  onClick={() => setPage((p) => p + 1)}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Slide-over Form */}
      {formOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={() => setFormOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-zinc-950 border-l border-zinc-800 shadow-2xl overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-zinc-100">
                  {editingEntry ? "Edit Session" : "Log Session"}
                </h2>
                <button
                  onClick={() => setFormOpen(false)}
                  className="p-1 rounded hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Date */}
                <div className="space-y-2">
                  <Label>Date</Label>
                  <Input
                    type="date"
                    value={formDate}
                    onChange={(e) => setFormDate(e.target.value)}
                    className="bg-zinc-900 border-zinc-700 text-zinc-100"
                  />
                </div>

                {/* Training Type Tabs */}
                <div className="space-y-2">
                  <Label>Training Type</Label>
                  <div className="flex flex-wrap gap-2">
                    {TRAINING_TYPES.map((t) => (
                      <button
                        key={t.value}
                        type="button"
                        onClick={() => setFormType(t.value)}
                        className={cn(
                          "px-3 py-1.5 rounded-lg text-sm font-medium transition-colors",
                          formType === t.value
                            ? "bg-red-600 text-white"
                            : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-200"
                        )}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Duration Slider */}
                <div className="space-y-2">
                  <Label>
                    Duration:{" "}
                    <span className="text-red-400 font-semibold">
                      {formatDuration(formDuration)}
                    </span>
                  </Label>
                  <input
                    type="range"
                    min={30}
                    max={180}
                    step={5}
                    value={formDuration}
                    onChange={(e) => setFormDuration(Number(e.target.value))}
                    className="w-full accent-red-600"
                  />
                  <div className="flex justify-between text-xs text-zinc-500">
                    <span>30m</span>
                    <span>1h</span>
                    <span>1.5h</span>
                    <span>2h</span>
                    <span>2.5h</span>
                    <span>3h</span>
                  </div>
                </div>

                {/* Partners */}
                <div className="space-y-2">
                  <Label>Training Partners</Label>
                  <Input
                    placeholder="Who did you roll with?"
                    value={formPartners}
                    onChange={(e) => setFormPartners(e.target.value)}
                    className="bg-zinc-900 border-zinc-700 text-zinc-100"
                  />
                </div>

                {/* What I Worked On */}
                <div className="space-y-2">
                  <Label>What I Worked On</Label>
                  <Textarea
                    placeholder="Techniques, positions, drills..."
                    rows={3}
                    value={formWorkedOn}
                    onChange={(e) => setFormWorkedOn(e.target.value)}
                    className="bg-zinc-900 border-zinc-700 text-zinc-100"
                  />
                </div>

                {/* What Went Well */}
                <div className="space-y-2">
                  <Label>What Went Well</Label>
                  <Textarea
                    placeholder="Highlight your wins..."
                    rows={2}
                    value={formWentWell}
                    onChange={(e) => setFormWentWell(e.target.value)}
                    className="bg-zinc-900 border-zinc-700 text-zinc-100"
                  />
                </div>

                {/* What to Improve */}
                <div className="space-y-2">
                  <Label>What to Improve</Label>
                  <Textarea
                    placeholder="Areas to focus on next time..."
                    rows={2}
                    value={formToImprove}
                    onChange={(e) => setFormToImprove(e.target.value)}
                    className="bg-zinc-900 border-zinc-700 text-zinc-100"
                  />
                </div>

                {/* Energy Level */}
                <div className="space-y-2">
                  <Label>Energy Level</Label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((level) => (
                      <button
                        key={level}
                        type="button"
                        onClick={() =>
                          setFormEnergy(formEnergy === level ? 0 : level)
                        }
                        className={cn(
                          "h-11 w-11 rounded-lg text-xl transition-all",
                          formEnergy === level
                            ? "bg-zinc-700 ring-2 ring-red-500 scale-110"
                            : "bg-zinc-800 hover:bg-zinc-700"
                        )}
                      >
                        {ENERGY_EMOJIS[level]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Injury Notes */}
                <div className="space-y-2">
                  <Label>
                    Injury Notes{" "}
                    <span className="text-zinc-500 font-normal">(optional)</span>
                  </Label>
                  <Input
                    placeholder="Any pain or injuries?"
                    value={formInjury}
                    onChange={(e) => setFormInjury(e.target.value)}
                    className="bg-zinc-900 border-zinc-700 text-zinc-100"
                  />
                </div>

                {/* Rating */}
                <div className="space-y-2">
                  <Label>Overall Rating</Label>
                  <Stars value={formRating} onChange={setFormRating} />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                  disabled={submitting}
                >
                  {submitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Saving...
                    </>
                  ) : editingEntry ? (
                    "Update Session"
                  ) : (
                    "Save Session"
                  )}
                </Button>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
