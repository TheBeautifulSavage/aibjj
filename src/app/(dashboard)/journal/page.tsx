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
  Wand2,
  Search,
  BookOpen,
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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
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

// Group entries by date label
function groupEntriesByDate(entries: JournalEntry[]): { label: string; entries: JournalEntry[] }[] {
  const now = new Date();
  const todayStr = toDateStr(now);
  const yesterdayDate = new Date(now);
  yesterdayDate.setDate(now.getDate() - 1);
  const yesterdayStr = toDateStr(yesterdayDate);
  const sevenDaysAgo = new Date(now);
  sevenDaysAgo.setDate(now.getDate() - 7);
  const thirtyDaysAgo = new Date(now);
  thirtyDaysAgo.setDate(now.getDate() - 30);

  const groups: Record<string, JournalEntry[]> = {};

  for (const entry of entries) {
    const entryDateStr = toDateStr(new Date(entry.date));
    const entryDate = new Date(entry.date);
    let label: string;
    if (entryDateStr === todayStr) {
      label = "Today";
    } else if (entryDateStr === yesterdayStr) {
      label = "Yesterday";
    } else if (entryDate >= sevenDaysAgo) {
      label = "Last 7 Days";
    } else if (entryDate >= thirtyDaysAgo) {
      label = "This Month";
    } else {
      label = entryDate.toLocaleDateString("en-US", { month: "long", year: "numeric" });
    }
    if (!groups[label]) groups[label] = [];
    groups[label].push(entry);
  }

  const order = ["Today", "Yesterday", "Last 7 Days", "This Month"];
  const result: { label: string; entries: JournalEntry[] }[] = [];
  for (const label of order) {
    if (groups[label]) result.push({ label, entries: groups[label] });
  }
  // Add older month groups
  for (const label of Object.keys(groups)) {
    if (!order.includes(label)) result.push({ label, entries: groups[label] });
  }
  return result;
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
  const [allEntries, setAllEntries] = useState<JournalEntry[]>([]);
  const [loading, setLoading] = useState(true);

  // Calendar state
  const today = new Date();
  const [calYear, setCalYear] = useState(today.getFullYear());
  const [calMonth, setCalMonth] = useState(today.getMonth());

  // Panel state
  const [selectedEntry, setSelectedEntry] = useState<JournalEntry | null>(null);
  const [panelMode, setPanelMode] = useState<"empty" | "view" | "form">("empty");
  const [searchQuery, setSearchQuery] = useState("");

  // AI Analysis
  const [aiAnalysis, setAiAnalysis] = useState<string | null>(null);
  const [analyzingAI, setAnalyzingAI] = useState(false);

  // Form state
  const [editingEntry, setEditingEntry] = useState<JournalEntry | null>(null);
  const [submitting, setSubmitting] = useState(false);
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
  const [isRewriting, setIsRewriting] = useState(false);
  const [rewriteError, setRewriteError] = useState("");

  // Fetch ALL entries
  const fetchAllEntries = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/journal?all=true");
      if (!res.ok) return;
      const data = await res.json();
      setAllEntries(data.entries);
    } catch {
      // silent
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAllEntries();
  }, [fetchAllEntries]);

  // --- Stats ---

  const stats = useMemo(() => {
    const totalSessions = allEntries.length;
    const totalMinutes = allEntries.reduce((a, e) => a + e.duration, 0);
    const totalHours = Math.round(totalMinutes / 60);

    const now = new Date();
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - now.getDay());
    startOfWeek.setHours(0, 0, 0, 0);
    const thisWeek = allEntries.filter(
      (e) => new Date(e.date) >= startOfWeek
    ).length;

    const sortedDates = Array.from(
      new Set(allEntries.map((e) => toDateStr(new Date(e.date))))
    ).sort((a, b) => b.localeCompare(a));

    let streak = 0;
    let longestStreak = 0;

    if (sortedDates.length > 0) {
      const todayStr = toDateStr(new Date());
      const yesterdayDate = new Date();
      yesterdayDate.setDate(yesterdayDate.getDate() - 1);
      const yesterdayStr = toDateStr(yesterdayDate);

      let currentStreak = 0;
      if (sortedDates[0] === todayStr || sortedDates[0] === yesterdayStr) {
        currentStreak = 1;
        for (let i = 1; i < sortedDates.length; i++) {
          const prev = new Date(sortedDates[i - 1]);
          const curr = new Date(sortedDates[i]);
          const diffDays = Math.round(
            (prev.getTime() - curr.getTime()) / (1000 * 60 * 60 * 24)
          );
          if (diffDays === 1) currentStreak++;
          else break;
        }
      }

      let tempStreak = 1;
      const allSorted = [...sortedDates].sort();
      for (let i = 1; i < allSorted.length; i++) {
        const prev = new Date(allSorted[i - 1]);
        const curr = new Date(allSorted[i]);
        const diffDays = Math.round(
          (curr.getTime() - prev.getTime()) / (1000 * 60 * 60 * 24)
        );
        if (diffDays === 1) tempStreak++;
        else { longestStreak = Math.max(longestStreak, tempStreak); tempStreak = 1; }
      }
      longestStreak = Math.max(longestStreak, tempStreak);
      streak = currentStreak;
    }

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
    if (calMonth === 0) { setCalMonth(11); setCalYear(calYear - 1); }
    else setCalMonth(calMonth - 1);
  }

  function nextMonth() {
    if (calMonth === 11) { setCalMonth(0); setCalYear(calYear + 1); }
    else setCalMonth(calMonth + 1);
  }

  // --- Weekly Chart Data ---

  const weeklyData = useMemo(() => {
    const now = new Date();
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const data: { day: string; minutes: number }[] = [];
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

  // --- Filtered & Grouped Entries ---

  const filteredEntries = useMemo(() => {
    if (!searchQuery.trim()) return allEntries;
    const q = searchQuery.toLowerCase();
    return allEntries.filter(
      (e) =>
        e.workedOn?.toLowerCase().includes(q) ||
        e.wentWell?.toLowerCase().includes(q) ||
        e.toImprove?.toLowerCase().includes(q) ||
        e.partners?.toLowerCase().includes(q) ||
        e.trainingType.toLowerCase().includes(q)
    );
  }, [allEntries, searchQuery]);

  const groupedEntries = useMemo(() => groupEntriesByDate(filteredEntries), [filteredEntries]);

  // --- Form Helpers ---

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
    setRewriteError("");
  }

  function openNewForm() {
    resetForm();
    setSelectedEntry(null);
    setPanelMode("form");
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
    setRewriteError("");
    setPanelMode("form");
  }

  function selectEntry(entry: JournalEntry) {
    setSelectedEntry(entry);
    setPanelMode("view");
  }

  function handleCalendarDayClick(dateStr: string) {
    const entry = allEntries.find((e) => toDateStr(new Date(e.date)) === dateStr);
    if (entry) selectEntry(entry);
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

      resetForm();
      setPanelMode("empty");
      setSelectedEntry(null);
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
      setSelectedEntry(null);
      setPanelMode("empty");
      fetchAllEntries();
    } catch {
      console.error("Failed to delete entry");
    }
  }

  const typeLabel = (trainingType: string) =>
    TRAINING_TYPES.find((t) => t.value === trainingType)?.label || trainingType;

  return (
    <div className="flex h-full -m-4 md:-m-6 overflow-hidden" style={{ height: "calc(100vh - 48px)" }}>
      {/* ── LEFT SIDEBAR ────────────────────────────────────────── */}
      <aside className="hidden md:flex w-[260px] flex-shrink-0 flex-col bg-[#171717] border-r border-white/[0.06] overflow-hidden">
        {/* Sidebar header */}
        <div className="flex-shrink-0 px-3 pt-4 pb-2 space-y-3">
          <div className="flex items-center justify-between px-1">
            <span className="text-sm font-semibold text-zinc-200">Training Journal</span>
          </div>
          <button
            onClick={openNewForm}
            className="w-full flex items-center justify-center gap-2 bg-white text-black text-sm font-semibold rounded-lg py-2 hover:bg-zinc-200 transition-colors"
          >
            <Plus className="h-4 w-4" />
            New Entry
          </button>
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-500" />
            <input
              type="text"
              placeholder="Search sessions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#2f2f2f] border-none rounded-lg pl-8 pr-3 py-2 text-sm text-zinc-300 placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-600"
            />
          </div>
        </div>

        {/* Entry list */}
        <div className="flex-1 overflow-y-auto min-h-0 py-1">
          {loading ? (
            <div className="flex items-center justify-center py-10">
              <Loader2 className="h-5 w-5 animate-spin text-zinc-600" />
            </div>
          ) : groupedEntries.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-10 px-4 text-center">
              <BookOpen className="h-8 w-8 text-zinc-700 mb-2" />
              <p className="text-xs text-zinc-500">No sessions yet</p>
            </div>
          ) : (
            groupedEntries.map((group) => (
              <div key={group.label}>
                <p className="px-3 pt-3 pb-1 text-[11px] font-semibold text-zinc-500 uppercase tracking-wider">
                  {group.label}
                </p>
                {group.entries.map((entry) => {
                  const isSelected = selectedEntry?.id === entry.id;
                  return (
                    <button
                      key={entry.id}
                      onClick={() => selectEntry(entry)}
                      className={cn(
                        "w-full text-left px-3 py-2 mx-0 rounded-lg transition-colors group",
                        isSelected ? "bg-[#2f2f2f]" : "hover:bg-[#2f2f2f]/60"
                      )}
                    >
                      <div className="flex items-center gap-2 mb-0.5">
                        <span
                          className={cn(
                            "inline-block px-1.5 py-0.5 rounded text-[10px] font-semibold text-white",
                            TYPE_COLORS[entry.trainingType] || "bg-zinc-600"
                          )}
                        >
                          {typeLabel(entry.trainingType)}
                        </span>
                        <span className="text-[11px] text-zinc-500">
                          {formatDateShort(entry.date)}
                        </span>
                      </div>
                      {entry.workedOn && (
                        <p className="text-xs text-zinc-400 truncate leading-snug">
                          {entry.workedOn}
                        </p>
                      )}
                    </button>
                  );
                })}
              </div>
            ))
          )}
        </div>

        {/* Mini Calendar */}
        <div className="flex-shrink-0 border-t border-white/[0.06] px-3 py-3">
          <div className="flex items-center justify-between mb-2">
            <button onClick={prevMonth} className="p-0.5 rounded hover:bg-[#2f2f2f] text-zinc-500 hover:text-zinc-300">
              <ChevronLeft className="h-3.5 w-3.5" />
            </button>
            <span className="text-[11px] font-medium text-zinc-400">{monthName}</span>
            <button onClick={nextMonth} className="p-0.5 rounded hover:bg-[#2f2f2f] text-zinc-500 hover:text-zinc-300">
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
          <div className="grid grid-cols-7 gap-px mb-1">
            {["S","M","T","W","T","F","S"].map((d, i) => (
              <div key={i} className="text-center text-[9px] text-zinc-600 font-medium py-0.5">{d}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-px">
            {calendarDays.map((day, idx) => {
              if (day === null) return <div key={`e-${idx}`} />;
              const dateStr = `${calYear}-${String(calMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
              const trained = trainedDays.has(dateStr);
              const isToday = dateStr === toDateStr(new Date());
              return (
                <button
                  key={dateStr}
                  onClick={() => handleCalendarDayClick(dateStr)}
                  className={cn(
                    "relative flex flex-col items-center justify-center rounded text-[10px] h-6 transition-colors",
                    isToday ? "bg-[#2f2f2f] text-white font-bold" : "text-zinc-500 hover:bg-[#2f2f2f] hover:text-zinc-300",
                    trained && !isToday ? "text-zinc-200" : ""
                  )}
                >
                  {day}
                  {trained && (
                    <span className="absolute bottom-0.5 h-1 w-1 rounded-full bg-red-500" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </aside>

      {/* ── MAIN PANEL ──────────────────────────────────────────── */}
      <main className="flex-1 overflow-y-auto bg-[#212121] min-w-0">
        {panelMode === "empty" && (
          <div className="flex flex-col h-full">
            {/* Stats strip */}
            <div className="flex-shrink-0 px-4 pt-5 pb-3 md:px-6">
              <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
                {[
                  { label: "Sessions", value: stats.totalSessions, icon: CalendarIcon, color: "text-blue-400", bg: "bg-blue-500/10" },
                  { label: "Total Hours", value: stats.totalHours, icon: Clock, color: "text-emerald-400", bg: "bg-emerald-500/10" },
                  { label: "This Week", value: stats.thisWeek, icon: TrendingUp, color: "text-purple-400", bg: "bg-purple-500/10" },
                  { label: "Streak", value: `${stats.streak}d`, icon: Flame, color: "text-orange-400", bg: "bg-orange-500/10" },
                  { label: "Best Streak", value: `${stats.longestStreak}d`, icon: Star, color: "text-yellow-400", bg: "bg-yellow-500/10" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl bg-[#2f2f2f] p-4 flex items-center gap-3">
                    <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${stat.bg}`}>
                      <stat.icon className={`h-4 w-4 ${stat.color}`} />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500">{stat.label}</p>
                      <p className="text-lg font-bold text-zinc-100">{stat.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Analyze + Chart row */}
            <div className="px-4 md:px-6 pb-4 grid gap-4 lg:grid-cols-5">
              {/* AI Analysis */}
              <div className="lg:col-span-3">
                {aiAnalysis ? (
                  <div className="rounded-xl bg-purple-900/10 border border-purple-800/40 p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Brain className="h-4 w-4 text-purple-400" />
                        <span className="text-sm font-semibold text-purple-300">AI Training Analysis</span>
                      </div>
                      <button onClick={() => setAiAnalysis(null)} className="text-zinc-500 hover:text-zinc-300">
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-sm text-zinc-300 whitespace-pre-wrap leading-relaxed">{aiAnalysis}</p>
                  </div>
                ) : (
                  <button
                    onClick={async () => {
                      setAnalyzingAI(true);
                      try {
                        const res = await fetch("/api/journal/analyze", { method: "POST" });
                        if (res.ok) { const data = await res.json(); setAiAnalysis(data.analysis); }
                      } catch { /* ignore */ } finally { setAnalyzingAI(false); }
                    }}
                    disabled={analyzingAI || allEntries.length === 0}
                    className="w-full flex items-center gap-3 rounded-xl bg-[#2f2f2f] hover:bg-[#3a3a3a] transition-colors p-4 text-left disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {analyzingAI ? <Loader2 className="h-5 w-5 animate-spin text-purple-400" /> : <Brain className="h-5 w-5 text-purple-400" />}
                    <div>
                      <p className="text-sm font-medium text-zinc-200">AI Analyze Training</p>
                      <p className="text-xs text-zinc-500">Get insights from your recent sessions</p>
                    </div>
                  </button>
                )}
              </div>

              {/* Weekly Chart */}
              <div className="lg:col-span-2 rounded-xl bg-[#2f2f2f] p-4">
                <p className="text-sm font-semibold text-zinc-200 mb-0.5">This Week</p>
                <p className="text-xs text-zinc-500 mb-3">Minutes per day</p>
                <div className="h-32">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={weeklyData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                      <XAxis dataKey="day" tick={{ fontSize: 10, fill: "#71717a" }} tickLine={false} axisLine={false} />
                      <YAxis tick={{ fontSize: 10, fill: "#71717a" }} tickLine={false} axisLine={false} width={28} />
                      <Tooltip content={<WeeklyTooltip />} />
                      <Bar dataKey="minutes" fill="#dc2626" radius={[3, 3, 0, 0]} maxBarSize={32} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Empty state prompt */}
            <div className="flex-1 flex flex-col items-center justify-center gap-4 px-4 pb-12">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#2f2f2f]">
                <BookOpen className="h-7 w-7 text-zinc-500" />
              </div>
              <div className="text-center">
                <p className="text-base font-medium text-zinc-300">Select a session or log a new one</p>
                <p className="text-sm text-zinc-500 mt-1">Your training history will appear in the sidebar</p>
              </div>
              <button
                onClick={openNewForm}
                className="flex items-center gap-2 bg-white text-black text-sm font-semibold rounded-xl px-5 py-2.5 hover:bg-zinc-200 transition-colors"
              >
                <Plus className="h-4 w-4" />
                Log New Session
              </button>
            </div>
          </div>
        )}

        {/* ── ENTRY VIEW ── */}
        {panelMode === "view" && selectedEntry && (
          <div className="max-w-2xl mx-auto px-4 md:px-6 py-6 space-y-6">
            {/* Back + actions */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => { setSelectedEntry(null); setPanelMode("empty"); }}
                className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
                All sessions
              </button>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => openEditForm(selectedEntry)}
                  className="flex items-center gap-1.5 rounded-lg bg-[#2f2f2f] hover:bg-[#3a3a3a] px-3 py-1.5 text-sm text-zinc-300 transition-colors"
                >
                  <Pencil className="h-3.5 w-3.5" />
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(selectedEntry.id)}
                  className="flex items-center gap-1.5 rounded-lg bg-red-900/20 hover:bg-red-900/40 px-3 py-1.5 text-sm text-red-400 transition-colors"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                  Delete
                </button>
              </div>
            </div>

            {/* Entry header */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <Badge className={cn("border-transparent text-white text-xs", TYPE_COLORS[selectedEntry.trainingType] || "bg-zinc-600")}>
                  {typeLabel(selectedEntry.trainingType)}
                </Badge>
                <span className="text-zinc-400 text-sm">{formatDateShort(selectedEntry.date)}</span>
                <span className="text-zinc-500 text-sm">{formatDuration(selectedEntry.duration)}</span>
              </div>
              <div className="flex items-center gap-3 mt-2">
                {selectedEntry.rating && selectedEntry.rating > 0 && <Stars value={selectedEntry.rating} readonly />}
                {selectedEntry.energyLevel && selectedEntry.energyLevel > 0 && (
                  <span className="text-lg">{ENERGY_EMOJIS[selectedEntry.energyLevel]}</span>
                )}
              </div>
            </div>

            {/* Fields */}
            {[
              { label: "Training Partners", value: selectedEntry.partners },
              { label: "What I Worked On", value: selectedEntry.workedOn },
              { label: "What Went Well", value: selectedEntry.wentWell },
              { label: "What to Improve", value: selectedEntry.toImprove },
            ].map(
              ({ label, value }) =>
                value && (
                  <div key={label}>
                    <p className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider mb-1.5">{label}</p>
                    <p className="text-sm text-zinc-300 whitespace-pre-wrap leading-relaxed">{value}</p>
                  </div>
                )
            )}
            {selectedEntry.injuryNotes && (
              <div>
                <p className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider mb-1.5">Injury Notes</p>
                <p className="text-sm text-red-400">{selectedEntry.injuryNotes}</p>
              </div>
            )}
          </div>
        )}

        {/* ── FORM ── */}
        {panelMode === "form" && (
          <div className="max-w-2xl mx-auto px-4 md:px-6 py-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-white">
                {editingEntry ? "Edit Session" : "Log Session"}
              </h2>
              <button
                onClick={() => { resetForm(); setPanelMode(selectedEntry ? "view" : "empty"); }}
                className="p-1.5 rounded-lg hover:bg-[#2f2f2f] text-zinc-400 hover:text-zinc-200 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Date */}
              <div>
                <p className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">Date</p>
                <Input
                  type="date"
                  value={formDate}
                  onChange={(e) => setFormDate(e.target.value)}
                  className="bg-[#2f2f2f] border-transparent focus:border-zinc-600 focus:ring-0 text-white placeholder-zinc-500 rounded-xl"
                />
              </div>

              {/* Training Type */}
              <div>
                <p className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">Training Type</p>
                <div className="flex flex-wrap gap-2">
                  {TRAINING_TYPES.map((t) => (
                    <button
                      key={t.value}
                      type="button"
                      onClick={() => setFormType(t.value)}
                      className={cn(
                        "px-4 py-1.5 rounded-full text-sm font-medium transition-colors",
                        formType === t.value
                          ? "bg-white text-black"
                          : "bg-[#2f2f2f] text-zinc-400 hover:bg-[#3f3f3f]"
                      )}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Duration */}
              <div>
                <p className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">
                  Duration — <span className="text-red-400 font-semibold normal-case">{formatDuration(formDuration)}</span>
                </p>
                <input
                  type="range"
                  min={30}
                  max={180}
                  step={5}
                  value={formDuration}
                  onChange={(e) => setFormDuration(Number(e.target.value))}
                  className="w-full accent-red-600"
                />
                <div className="flex justify-between text-xs text-zinc-500 mt-1">
                  <span>30m</span><span>1h</span><span>1.5h</span><span>2h</span><span>2.5h</span><span>3h</span>
                </div>
              </div>

              {/* Partners */}
              <div>
                <p className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">Training Partners</p>
                <Input
                  placeholder="Who did you roll with?"
                  value={formPartners}
                  onChange={(e) => setFormPartners(e.target.value)}
                  className="bg-[#2f2f2f] border-transparent focus:border-zinc-600 focus:ring-0 text-white placeholder-zinc-500 rounded-xl"
                />
              </div>

              {/* What I Worked On */}
              <div>
                <p className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">What I Worked On</p>
                <Textarea
                  placeholder="Techniques, positions, drills..."
                  rows={3}
                  value={formWorkedOn}
                  onChange={(e) => setFormWorkedOn(e.target.value)}
                  className="bg-[#2f2f2f] border-transparent focus:border-zinc-600 focus:ring-0 text-white placeholder-zinc-500 rounded-xl"
                />
              </div>

              {/* What Went Well */}
              <div>
                <p className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">What Went Well</p>
                <Textarea
                  placeholder="Highlight your wins..."
                  rows={2}
                  value={formWentWell}
                  onChange={(e) => setFormWentWell(e.target.value)}
                  className="bg-[#2f2f2f] border-transparent focus:border-zinc-600 focus:ring-0 text-white placeholder-zinc-500 rounded-xl"
                />
              </div>

              {/* What to Improve */}
              <div>
                <p className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">What to Improve</p>
                <Textarea
                  placeholder="Areas to focus on next time..."
                  rows={2}
                  value={formToImprove}
                  onChange={(e) => setFormToImprove(e.target.value)}
                  className="bg-[#2f2f2f] border-transparent focus:border-zinc-600 focus:ring-0 text-white placeholder-zinc-500 rounded-xl"
                />
              </div>

              {/* AI Rewriter */}
              <div className="bg-[#2f2f2f] rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Wand2 className="h-4 w-4 text-red-500" />
                    <span className="text-sm font-medium text-zinc-200">AI Rewriter</span>
                    <span className="rounded-full bg-red-600/20 px-2 py-0.5 text-[10px] font-semibold text-red-400">PRO</span>
                  </div>
                  <button
                    type="button"
                    disabled={isRewriting || (!formWorkedOn && !formWentWell && !formToImprove)}
                    onClick={async () => {
                      setIsRewriting(true);
                      setRewriteError("");
                      try {
                        const res = await fetch("/api/journal/rewrite", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({
                            workedOn: formWorkedOn,
                            wentWell: formWentWell,
                            toImprove: formToImprove,
                            trainingType: formType,
                            duration: formDuration,
                          }),
                        });
                        const data = await res.json();
                        if (!res.ok) {
                          setRewriteError(res.status === 403 ? "Upgrade to Pro to use the AI Rewriter ✨" : (data.error || "Rewrite failed"));
                          return;
                        }
                        if (data.rewritten) {
                          if (data.rewritten.workedOn) setFormWorkedOn(data.rewritten.workedOn);
                          if (data.rewritten.wentWell) setFormWentWell(data.rewritten.wentWell);
                          if (data.rewritten.toImprove) setFormToImprove(data.rewritten.toImprove);
                        }
                      } catch {
                        setRewriteError("Something went wrong");
                      } finally {
                        setIsRewriting(false);
                      }
                    }}
                    className="flex items-center gap-1.5 rounded-lg bg-red-600/10 border border-red-600/20 px-3 py-1.5 text-xs font-medium text-red-400 hover:bg-red-600/20 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    {isRewriting ? (
                      <><Loader2 className="h-3 w-3 animate-spin" /> Rewriting...</>
                    ) : (
                      <><Wand2 className="h-3 w-3" /> Polish with AI</>
                    )}
                  </button>
                </div>
                <p className="mt-1.5 text-xs text-zinc-500">Turns your raw notes into structured, insightful entries</p>
                {rewriteError && (
                  <p className="mt-2 text-xs text-red-400">
                    {rewriteError}{" "}
                    {rewriteError.includes("Pro") && <a href="/pricing" className="underline">Upgrade →</a>}
                  </p>
                )}
              </div>

              {/* Energy Level */}
              <div>
                <p className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">Energy Level</p>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((level) => (
                    <button
                      key={level}
                      type="button"
                      onClick={() => setFormEnergy(formEnergy === level ? 0 : level)}
                      className={cn(
                        "h-11 w-11 rounded-lg text-xl transition-all bg-[#2f2f2f] hover:bg-[#3f3f3f]",
                        formEnergy === level ? "ring-1 ring-white/30 scale-110" : ""
                      )}
                    >
                      {ENERGY_EMOJIS[level]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Injury Notes */}
              <div>
                <p className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">
                  Injury Notes <span className="normal-case text-zinc-600">(optional)</span>
                </p>
                <Input
                  placeholder="Any pain or injuries?"
                  value={formInjury}
                  onChange={(e) => setFormInjury(e.target.value)}
                  className="bg-[#2f2f2f] border-transparent focus:border-zinc-600 focus:ring-0 text-white placeholder-zinc-500 rounded-xl"
                />
              </div>

              {/* Rating */}
              <div>
                <p className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">Overall Rating</p>
                <Stars value={formRating} onChange={setFormRating} />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full bg-white text-black hover:bg-zinc-200 font-semibold rounded-xl h-12"
                disabled={submitting}
              >
                {submitting ? (
                  <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Saving...</>
                ) : editingEntry ? (
                  "Update Session"
                ) : (
                  "Save Session"
                )}
              </Button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}
