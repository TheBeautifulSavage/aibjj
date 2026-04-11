"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import {
  MessageSquare, BookOpen, Library, Target, Flame,
  Clock, ChevronRight, Swords, Trophy, Home, TrendingUp,
  Plus, BarChart2,
} from "lucide-react";

// ── Types ──────────────────────────────────────────────────────────────────────
interface Stats {
  totalSessions: number;
  totalMinutes: number;
  currentStreak: number;
  belt: string;
  name: string;
  subscriptionTier: string;
}

// ── Quick actions — the 6 most important things ────────────────────────────────
const QUICK_ACTIONS = [
  { label: "AI Coach",       href: "/coach",    icon: MessageSquare, desc: "Ask anything about BJJ",    color: "bg-red-600/10 text-red-400 border-red-800/20" },
  { label: "Log Session",    href: "/journal",  icon: Plus,          desc: "Track today's training",     color: "bg-blue-600/10 text-blue-400 border-blue-800/20" },
  { label: "Techniques",     href: "/library",  icon: Library,       desc: "Browse technique library",   color: "bg-purple-600/10 text-purple-400 border-purple-800/20" },
  { label: "Game Plan",      href: "/gameplan", icon: Target,        desc: "Build your A-game",          color: "bg-green-600/10 text-green-400 border-green-800/20" },
  { label: "Sparring AI",    href: "/sparring", icon: Swords,        desc: "Drill scenario thinking",    color: "bg-orange-600/10 text-orange-400 border-orange-800/20" },
  { label: "Find Academy",   href: "/academies",icon: Home,          desc: "Gyms near you",              color: "bg-yellow-600/10 text-yellow-400 border-yellow-800/20" },
];

const BELT_COLORS: Record<string, string> = {
  WHITE: "bg-white text-black",
  BLUE: "bg-blue-600 text-white",
  PURPLE: "bg-purple-600 text-white",
  BROWN: "bg-amber-800 text-white",
  BLACK: "bg-zinc-900 text-white border border-zinc-600",
};

const BELT_LABEL: Record<string, string> = {
  WHITE: "White Belt", BLUE: "Blue Belt", PURPLE: "Purple Belt",
  BROWN: "Brown Belt", BLACK: "Black Belt",
};

// ── Component ──────────────────────────────────────────────────────────────────
export default function DashboardPage() {
  const { data: session } = useSession();
  const [stats, setStats] = useState<Stats | null>(null);
  const [recentSessions, setRecentSessions] = useState<{ date: string; trainingType: string; duration: number; workedOn: string | null }[]>([]);

  const user = session?.user as { name?: string } | undefined;
  const firstName = stats?.name?.split(" ")[0] || user?.name?.split(" ")[0] || "Athlete";

  useEffect(() => {
    fetch("/api/dashboard/stats").then(r => r.json()).then(d => {
      if (!d.error) setStats(d);
    }).catch(() => {});

    fetch("/api/journal?limit=5&all=false&page=1").then(r => r.json()).then(d => {
      if (d.entries) setRecentSessions(d.entries.slice(0, 4));
    }).catch(() => {});
  }, []);

  const totalHours = stats ? Math.round((stats.totalMinutes || 0) / 60) : 0;

  const TYPE_LABEL: Record<string, string> = { GI: "Gi", NOGI: "No-Gi", COMP: "Comp", DRILLING: "Drilling", OPEN_MAT: "Open Mat" };
  const TYPE_DOT: Record<string, string> = { GI: "bg-blue-500", NOGI: "bg-purple-500", COMP: "bg-red-500", DRILLING: "bg-green-500", OPEN_MAT: "bg-yellow-500" };

  function fmtDate(s: string) {
    const d = new Date(s);
    const now = new Date();
    const diff = Math.floor((now.getTime() - d.getTime()) / 86400000);
    if (diff === 0) return "Today";
    if (diff === 1) return "Yesterday";
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  }

  function fmtDuration(m: number) {
    const h = Math.floor(m / 60); const mins = m % 60;
    return h ? (mins ? `${h}h ${mins}m` : `${h}h`) : `${m}m`;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-8">

      {/* ── Greeting ──────────────────────────────────────────────── */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            Good {new Date().getHours() < 12 ? "morning" : new Date().getHours() < 17 ? "afternoon" : "evening"}, {firstName} 👋
          </h1>
          <p className="text-zinc-500 text-sm mt-1">
            {stats?.totalSessions
              ? `${stats.totalSessions} sessions logged · ${totalHours}h on the mats`
              : "Ready to train? Let's go."}
          </p>
        </div>
        {stats?.belt && (
          <span className={`text-xs font-bold px-3 py-1.5 rounded-full flex-shrink-0 ${BELT_COLORS[stats.belt] || "bg-zinc-700 text-white"}`}>
            {BELT_LABEL[stats.belt] || stats.belt}
          </span>
        )}
      </div>

      {/* ── Stats strip ───────────────────────────────────────────── */}
      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-2xl bg-[#1a1a1a] border border-white/[0.06] p-4 text-center">
          <div className="flex items-center justify-center gap-1.5 mb-1">
            <Flame className="h-4 w-4 text-orange-400" />
            <span className="text-2xl font-black text-white">{stats?.currentStreak ?? 0}</span>
          </div>
          <p className="text-xs text-zinc-600">Day Streak</p>
        </div>
        <div className="rounded-2xl bg-[#1a1a1a] border border-white/[0.06] p-4 text-center">
          <div className="flex items-center justify-center gap-1.5 mb-1">
            <Clock className="h-4 w-4 text-blue-400" />
            <span className="text-2xl font-black text-white">{totalHours}</span>
          </div>
          <p className="text-xs text-zinc-600">Total Hours</p>
        </div>
        <div className="rounded-2xl bg-[#1a1a1a] border border-white/[0.06] p-4 text-center">
          <div className="flex items-center justify-center gap-1.5 mb-1">
            <BarChart2 className="h-4 w-4 text-green-400" />
            <span className="text-2xl font-black text-white">{stats?.totalSessions ?? 0}</span>
          </div>
          <p className="text-xs text-zinc-600">Sessions</p>
        </div>
      </div>

      {/* ── Quick actions ─────────────────────────────────────────── */}
      <div>
        <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">Quick Access</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {QUICK_ACTIONS.map(({ label, href, icon: Icon, desc, color }) => (
            <Link
              key={href}
              href={href}
              className={`rounded-2xl border p-4 flex flex-col gap-2 hover:opacity-80 transition-opacity ${color}`}
            >
              <Icon className="h-5 w-5" />
              <div>
                <p className="text-sm font-semibold text-white">{label}</p>
                <p className="text-xs opacity-70">{desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Recent sessions ───────────────────────────────────────── */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Recent Sessions</h2>
          <Link href="/journal" className="text-xs text-zinc-500 hover:text-zinc-300 flex items-center gap-1">
            View all <ChevronRight className="h-3 w-3" />
          </Link>
        </div>

        {recentSessions.length === 0 ? (
          <div className="rounded-2xl bg-[#1a1a1a] border border-white/[0.06] p-6 text-center">
            <BookOpen className="h-8 w-8 text-zinc-700 mx-auto mb-3" />
            <p className="text-sm text-zinc-400 mb-3">No sessions yet — log your first one</p>
            <Link href="/journal" className="inline-flex items-center gap-1.5 rounded-xl bg-white text-black px-4 py-2 text-sm font-semibold hover:bg-zinc-200 transition-colors">
              <Plus className="h-3.5 w-3.5" /> Log Session
            </Link>
          </div>
        ) : (
          <div className="space-y-2">
            {recentSessions.map((s, i) => (
              <Link
                key={i}
                href="/journal"
                className="flex items-center gap-3 rounded-2xl bg-[#1a1a1a] border border-white/[0.06] px-4 py-3 hover:bg-[#222] transition-colors"
              >
                <span className={`h-2.5 w-2.5 rounded-full flex-shrink-0 ${TYPE_DOT[s.trainingType] || "bg-zinc-500"}`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white">{TYPE_LABEL[s.trainingType] || s.trainingType}</p>
                  {s.workedOn && <p className="text-xs text-zinc-500 truncate">{s.workedOn}</p>}
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-xs text-zinc-500">{fmtDate(s.date)}</p>
                  <p className="text-xs text-zinc-600">{fmtDuration(s.duration)}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* ── Upgrade CTA (free users only) ─────────────────────────── */}
      {stats?.subscriptionTier === "FREE" && (
        <div className="rounded-2xl bg-gradient-to-br from-red-950/40 to-zinc-900 border border-red-900/30 p-6">
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-xl bg-red-600/20 flex items-center justify-center flex-shrink-0">
              <TrendingUp className="h-5 w-5 text-red-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-bold text-white">Unlock Full Access</h3>
              <p className="text-sm text-zinc-400 mt-1">Unlimited AI coaching, full technique library, game plan builder, and more.</p>
              <Link href="/pricing" className="mt-3 inline-flex items-center gap-1.5 rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 transition-colors">
                See Plans <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
