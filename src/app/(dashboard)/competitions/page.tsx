"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import {
  Trophy,
  Plus,
  Trash2,
  Edit2,
  Loader2,
  Calendar,
  MapPin,
  Swords,
  Target,
  X,
  Check,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface Competition {
  id: string;
  name: string;
  date: string;
  location: string | null;
  division: string | null;
  weightClass: string | null;
  result: string | null;
  wins: number;
  losses: number;
  notes: string | null;
}

const RESULT_OPTIONS = [
  { value: "gold", label: "🥇 Gold / 1st Place" },
  { value: "silver", label: "🥈 Silver / 2nd Place" },
  { value: "bronze", label: "🥉 Bronze / 3rd Place" },
  { value: "did-not-place", label: "Did Not Place" },
];

const RESULT_BADGE: Record<string, { label: string; color: string }> = {
  gold: { label: "🥇 Gold", color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" },
  silver: { label: "🥈 Silver", color: "bg-zinc-300/10 text-zinc-300 border-zinc-400/30" },
  bronze: { label: "🥉 Bronze", color: "bg-amber-600/10 text-amber-500 border-amber-600/30" },
  "did-not-place": { label: "DNP", color: "bg-zinc-800 text-zinc-400 border-zinc-700" },
};

const WEIGHT_CLASSES = [
  "Rooster", "Light Feather", "Feather", "Light", "Middle",
  "Medium Heavy", "Heavy", "Super Heavy", "Ultra Heavy", "Open Class",
];

const DIVISIONS = ["Gi", "No-Gi", "Both"];

const defaultForm = {
  name: "",
  date: "",
  location: "",
  division: "",
  weightClass: "",
  result: "",
  wins: 0,
  losses: 0,
  notes: "",
};

export default function CompetitionsPage() {
  const router = useRouter();
  const [competitions, setCompetitions] = useState<Competition[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(defaultForm);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    fetchCompetitions();
  }, []);

  async function fetchCompetitions() {
    try {
      const res = await fetch("/api/competitions");
      if (res.ok) {
        const data = await res.json();
        setCompetitions(data.competitions);
      }
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    try {
      const url = editingId ? `/api/competitions/${editingId}` : "/api/competitions";
      const method = editingId ? "PATCH" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        await fetchCompetitions();
        setShowForm(false);
        setEditingId(null);
        setForm(defaultForm);
      }
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: string) {
    setDeletingId(id);
    try {
      await fetch(`/api/competitions/${id}`, { method: "DELETE" });
      setCompetitions((prev) => prev.filter((c) => c.id !== id));
    } finally {
      setDeletingId(null);
    }
  }

  function startEdit(comp: Competition) {
    setForm({
      name: comp.name,
      date: comp.date.split("T")[0],
      location: comp.location || "",
      division: comp.division || "",
      weightClass: comp.weightClass || "",
      result: comp.result || "",
      wins: comp.wins,
      losses: comp.losses,
      notes: comp.notes || "",
    });
    setEditingId(comp.id);
    setShowForm(true);
  }

  function handleCompPrepare(comp: Competition) {
    const prompt = `Help me prepare for an upcoming BJJ competition: ${comp.name} on ${new Date(comp.date).toLocaleDateString()}. ${comp.division ? `Division: ${comp.division}.` : ""} ${comp.weightClass ? `Weight class: ${comp.weightClass}.` : ""} Give me a focused competition preparation plan for the next 2 weeks.`;
    const encoded = encodeURIComponent(prompt);
    router.push(`/coach?prompt=${encoded}`);
  }

  // Stats
  const stats = useMemo(() => {
    const totalWins = competitions.reduce((s, c) => s + c.wins, 0);
    const totalLosses = competitions.reduce((s, c) => s + c.losses, 0);
    const medals = competitions.filter((c) =>
      ["gold", "silver", "bronze"].includes(c.result || "")
    ).length;
    const winRate = totalWins + totalLosses > 0
      ? Math.round((totalWins / (totalWins + totalLosses)) * 100)
      : 0;
    return { totalWins, totalLosses, medals, winRate };
  }, [competitions]);

  // Chart data
  const chartData = useMemo(() => {
    return competitions
      .slice()
      .reverse()
      .slice(-8)
      .map((c) => ({
        name: c.name.length > 12 ? c.name.slice(0, 12) + "…" : c.name,
        Wins: c.wins,
        Losses: c.losses,
      }));
  }, [competitions]);

  const now = new Date();
  const upcoming = competitions.filter((c) => new Date(c.date) >= now);
  const past = competitions.filter((c) => new Date(c.date) < now);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-32">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-500" />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-zinc-100 flex items-center gap-2">
            <Trophy className="h-6 w-6 text-yellow-500" />
            Competition Tracker
          </h1>
          <p className="text-sm text-zinc-400 mt-1">
            Track your tournament history, results, and match record.
          </p>
        </div>
        <Button
          onClick={() => { setShowForm(true); setEditingId(null); setForm(defaultForm); }}
          className="bg-red-600 hover:bg-red-700 text-white"
        >
          <Plus className="h-4 w-4 mr-1.5" />
          Add Competition
        </Button>
      </div>

      {/* Stats */}
      {competitions.length > 0 && (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <Card>
            <CardContent className="p-4">
              <p className="text-xs text-zinc-500">Competitions</p>
              <p className="text-2xl font-bold text-zinc-100 mt-1">{competitions.length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-xs text-zinc-500">Win Rate</p>
              <p className="text-2xl font-bold text-emerald-400 mt-1">{stats.winRate}%</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-xs text-zinc-500">W / L</p>
              <p className="text-2xl font-bold text-zinc-100 mt-1">
                <span className="text-emerald-400">{stats.totalWins}</span>
                <span className="text-zinc-500 text-lg mx-1">/</span>
                <span className="text-red-400">{stats.totalLosses}</span>
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-xs text-zinc-500">Medals</p>
              <p className="text-2xl font-bold text-yellow-400 mt-1">{stats.medals} 🏅</p>
            </CardContent>
          </Card>
        </div>
      )}

      {/* W/L Chart */}
      {chartData.length > 0 && (
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-red-500" />
              Match Record by Tournament
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-52">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                  <XAxis dataKey="name" tick={{ fontSize: 10, fill: "#71717a" }} tickLine={false} axisLine={false} />
                  <YAxis tick={{ fontSize: 11, fill: "#71717a" }} tickLine={false} axisLine={false} allowDecimals={false} />
                  <Tooltip
                    contentStyle={{ backgroundColor: "#18181b", border: "1px solid #27272a", borderRadius: "8px" }}
                    labelStyle={{ color: "#e4e4e7" }}
                  />
                  <Legend wrapperStyle={{ fontSize: "12px" }} />
                  <Bar dataKey="Wins" fill="#10b981" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="Losses" fill="#ef4444" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Add/Edit Form */}
      {showForm && (
        <Card className="border-red-600/30">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">
                {editingId ? "Edit Competition" : "Add Competition"}
              </CardTitle>
              <Button variant="ghost" size="icon" onClick={() => { setShowForm(false); setEditingId(null); }}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="name">Tournament Name *</Label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. IBJJF Pan Championship"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="date">Date *</Label>
                  <Input
                    id="date"
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={form.location}
                    onChange={(e) => setForm({ ...form, location: e.target.value })}
                    placeholder="City, State"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="division">Division</Label>
                  <select
                    id="division"
                    value={form.division}
                    onChange={(e) => setForm({ ...form, division: e.target.value })}
                    className="flex h-10 w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:ring-1 focus:ring-zinc-500"
                  >
                    <option value="">Select division</option>
                    {DIVISIONS.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="weightClass">Weight Class</Label>
                  <select
                    id="weightClass"
                    value={form.weightClass}
                    onChange={(e) => setForm({ ...form, weightClass: e.target.value })}
                    className="flex h-10 w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:ring-1 focus:ring-zinc-500"
                  >
                    <option value="">Select weight class</option>
                    {WEIGHT_CLASSES.map((w) => (
                      <option key={w} value={w}>{w}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="result">Result</Label>
                  <select
                    id="result"
                    value={form.result}
                    onChange={(e) => setForm({ ...form, result: e.target.value })}
                    className="flex h-10 w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:ring-1 focus:ring-zinc-500"
                  >
                    <option value="">Select result</option>
                    {RESULT_OPTIONS.map((r) => (
                      <option key={r.value} value={r.value}>{r.label}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-1.5">
                  <Label>Wins</Label>
                  <Input
                    type="number"
                    min="0"
                    value={form.wins}
                    onChange={(e) => setForm({ ...form, wins: parseInt(e.target.value) || 0 })}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label>Losses</Label>
                  <Input
                    type="number"
                    min="0"
                    value={form.losses}
                    onChange={(e) => setForm({ ...form, losses: parseInt(e.target.value) || 0 })}
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  placeholder="Notes about the competition, what worked, what to improve..."
                  rows={3}
                />
              </div>
              <div className="flex gap-2">
                <Button type="submit" disabled={saving} className="bg-red-600 hover:bg-red-700 text-white">
                  {saving ? <Loader2 className="h-4 w-4 animate-spin mr-1.5" /> : <Check className="h-4 w-4 mr-1.5" />}
                  {editingId ? "Update" : "Add Competition"}
                </Button>
                <Button type="button" variant="outline" onClick={() => { setShowForm(false); setEditingId(null); }}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Upcoming Competitions */}
      {upcoming.length > 0 && (
        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest">
            Upcoming
          </h2>
          {upcoming.map((comp) => (
            <CompetitionCard
              key={comp.id}
              comp={comp}
              onEdit={() => startEdit(comp)}
              onDelete={() => handleDelete(comp.id)}
              onPrepare={() => handleCompPrepare(comp)}
              isDeleting={deletingId === comp.id}
              upcoming
            />
          ))}
        </div>
      )}

      {/* Past Competitions */}
      {past.length > 0 && (
        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest">
            Past Competitions
          </h2>
          {past.map((comp) => (
            <CompetitionCard
              key={comp.id}
              comp={comp}
              onEdit={() => startEdit(comp)}
              onDelete={() => handleDelete(comp.id)}
              onPrepare={() => handleCompPrepare(comp)}
              isDeleting={deletingId === comp.id}
            />
          ))}
        </div>
      )}

      {/* Empty state */}
      {competitions.length === 0 && !showForm && (
        <div className="text-center py-20">
          <div className="mx-auto h-20 w-20 rounded-full bg-zinc-800 flex items-center justify-center mb-6">
            <Trophy className="h-10 w-10 text-zinc-600" />
          </div>
          <h2 className="text-xl font-bold text-zinc-100 mb-2">No competitions yet</h2>
          <p className="text-zinc-400 max-w-md mx-auto mb-6">
            Start tracking your tournament history. Add your first competition to see your match record and medal count.
          </p>
          <Button
            onClick={() => setShowForm(true)}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            <Plus className="h-4 w-4 mr-1.5" />
            Add Your First Competition
          </Button>
        </div>
      )}
    </div>
  );
}

function CompetitionCard({
  comp,
  onEdit,
  onDelete,
  onPrepare,
  isDeleting,
  upcoming = false,
}: {
  comp: Competition;
  onEdit: () => void;
  onDelete: () => void;
  onPrepare: () => void;
  isDeleting: boolean;
  upcoming?: boolean;
}) {
  const resultInfo = comp.result ? RESULT_BADGE[comp.result] : null;
  const dateStr = new Date(comp.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Card className={upcoming ? "border-red-600/30 bg-red-950/10" : ""}>
      <CardContent className="p-5">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-semibold text-zinc-100">{comp.name}</h3>
              {resultInfo && (
                <Badge
                  variant="outline"
                  className={`text-xs ${resultInfo.color}`}
                >
                  {resultInfo.label}
                </Badge>
              )}
              {upcoming && (
                <Badge variant="outline" className="text-xs border-red-600/40 text-red-400">
                  Upcoming
                </Badge>
              )}
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-zinc-400">
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                {dateStr}
              </span>
              {comp.location && (
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" />
                  {comp.location}
                </span>
              )}
              {comp.division && <span>• {comp.division}</span>}
              {comp.weightClass && <span>• {comp.weightClass}</span>}
            </div>

            {(comp.wins > 0 || comp.losses > 0) && (
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1 text-sm">
                  <Swords className="h-3.5 w-3.5 text-zinc-500" />
                  <span className="text-emerald-400 font-medium">{comp.wins}W</span>
                  <span className="text-zinc-500">/</span>
                  <span className="text-red-400 font-medium">{comp.losses}L</span>
                </span>
              </div>
            )}

            {comp.notes && (
              <p className="text-sm text-zinc-500 line-clamp-2">{comp.notes}</p>
            )}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {upcoming && (
              <Button
                size="sm"
                variant="outline"
                onClick={onPrepare}
                className="border-red-600/40 text-red-400 hover:bg-red-950/20 text-xs"
              >
                <Sparkles className="h-3.5 w-3.5 mr-1" />
                Prepare
              </Button>
            )}
            <Button size="icon" variant="ghost" onClick={onEdit} className="h-8 w-8 text-zinc-400">
              <Edit2 className="h-3.5 w-3.5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={onDelete}
              disabled={isDeleting}
              className="h-8 w-8 text-zinc-400 hover:text-red-400"
            >
              {isDeleting ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Trash2 className="h-3.5 w-3.5" />}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
