"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Plus, Search, Loader2, Trash2, Pencil, Star, Flame } from "lucide-react";
import { cn } from "@/lib/utils";

// ── Types ──────────────────────────────────────────────────────────────────────
interface Entry {
  id: string;
  date: string;
  trainingType: string;
  duration: number;
  workedOn: string | null;
  wentWell: string | null;
  toImprove: string | null;
  energyLevel: number | null;
  rating: number | null;
  injuryNotes: string | null;
  partners: string | null;
  createdAt: string;
}

const TYPES = ["GI", "NOGI", "COMP", "DRILLING", "OPEN_MAT"] as const;
const TYPE_LABEL: Record<string, string> = { GI: "Gi", NOGI: "No-Gi", COMP: "Comp", DRILLING: "Drilling", OPEN_MAT: "Open Mat" };
const TYPE_COLOR: Record<string, string> = { GI: "bg-blue-600", NOGI: "bg-purple-600", COMP: "bg-red-600", DRILLING: "bg-green-600", OPEN_MAT: "bg-yellow-600" };
const ENERGY = ["", "😴", "😐", "😊", "💪", "🔥"];

function toDateStr(d: Date) { return d.toISOString().split("T")[0]; }
function fmtDate(s: string) { return new Date(s).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }); }
function fmtDuration(m: number) { const h = Math.floor(m / 60); const mins = m % 60; return h ? (mins ? `${h}h ${mins}m` : `${h}h`) : `${m}m`; }

function groupEntries(entries: Entry[]) {
  const groups: Record<string, Entry[]> = {};
  const today = toDateStr(new Date());
  const yesterday = toDateStr(new Date(Date.now() - 86400000));
  entries.forEach(e => {
    const d = toDateStr(new Date(e.date));
    const label = d === today ? "Today" : d === yesterday ? "Yesterday" : new Date(e.date).toLocaleDateString("en-US", { month: "long", year: "numeric" });
    groups[label] = groups[label] || [];
    groups[label].push(e);
  });
  return groups;
}

// ── Blank form ─────────────────────────────────────────────────────────────────
const blankForm = () => ({
  date: toDateStr(new Date()),
  trainingType: "GI",
  duration: 60,
  partners: "",
  workedOn: "",
  wentWell: "",
  toImprove: "",
  energyLevel: 0,
  rating: 0,
  injuryNotes: "",
});

// ── Stars ──────────────────────────────────────────────────────────────────────
function Stars({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  return (
    <div className="flex gap-1">
      {[1,2,3,4,5].map(i => (
        <button key={i} type="button" onClick={() => onChange(value === i ? 0 : i)}>
          <Star className={cn("h-5 w-5 transition-colors", i <= value ? "fill-yellow-400 text-yellow-400" : "text-zinc-600")} />
        </button>
      ))}
    </div>
  );
}

// ── Main ───────────────────────────────────────────────────────────────────────
export default function JournalPage() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Entry | null>(null);
  const [mode, setMode] = useState<"view" | "new" | "edit">("view");
  const [search, setSearch] = useState("");
  const [form, setForm] = useState(blankForm());
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const fetchEntries = useCallback(async () => {
    setLoading(true);
    try {
      const r = await fetch("/api/journal?all=true");
      const d = await r.json();
      setEntries(d.entries || []);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchEntries(); }, [fetchEntries]);

  const filtered = entries.filter(e =>
    !search || [e.workedOn, e.wentWell, e.toImprove, e.partners, TYPE_LABEL[e.trainingType]]
      .some(v => v?.toLowerCase().includes(search.toLowerCase()))
  );

  const groups = groupEntries(filtered);

  function openNew() {
    setForm(blankForm());
    setSelected(null);
    setMode("new");
    setError("");
  }

  function openEdit(e: Entry) {
    setForm({
      date: toDateStr(new Date(e.date)),
      trainingType: e.trainingType,
      duration: e.duration,
      partners: e.partners || "",
      workedOn: e.workedOn || "",
      wentWell: e.wentWell || "",
      toImprove: e.toImprove || "",
      energyLevel: e.energyLevel || 0,
      rating: e.rating || 0,
      injuryNotes: e.injuryNotes || "",
    });
    setSelected(e);
    setMode("edit");
    setError("");
  }

  async function handleSave(ev: React.FormEvent) {
    ev.preventDefault();
    setSaving(true);
    setError("");
    try {
      const payload = {
        date: form.date,
        trainingType: form.trainingType,
        duration: form.duration,
        partners: form.partners || undefined,
        workedOn: form.workedOn || undefined,
        wentWell: form.wentWell || undefined,
        toImprove: form.toImprove || undefined,
        energyLevel: form.energyLevel || undefined,
        rating: form.rating || undefined,
        injuryNotes: form.injuryNotes || undefined,
      };
      const method = mode === "edit" ? "PATCH" : "POST";
      const body = mode === "edit" ? { id: selected!.id, ...payload } : payload;
      const r = await fetch("/api/journal", { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      const data = await r.json();
      if (!r.ok) {
        setError(data.error || "Failed to save. Please try again.");
        return;
      }
      await fetchEntries();
      setMode("view");
      setSelected(data);
    } catch {
      setError("Network error — please try again.");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this session?")) return;
    await fetch(`/api/journal?id=${id}`, { method: "DELETE" });
    setSelected(null);
    setMode("view");
    fetchEntries();
  }

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div className="flex h-full overflow-hidden">

      {/* ── LEFT SIDEBAR ────────────────────────────────────────────────── */}
      <div className="w-64 flex-shrink-0 flex flex-col border-r border-white/[0.06] bg-[#171717] overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-white/[0.06]">
          <button
            onClick={openNew}
            className="w-full flex items-center justify-center gap-2 rounded-lg bg-white text-black font-semibold py-2.5 text-sm hover:bg-zinc-200 transition-colors"
          >
            <Plus className="h-4 w-4" />
            New Session
          </button>
        </div>

        {/* Search */}
        <div className="px-3 py-2 border-b border-white/[0.06]">
          <div className="flex items-center gap-2 rounded-lg bg-[#2f2f2f] px-3 py-2">
            <Search className="h-3.5 w-3.5 text-zinc-500 flex-shrink-0" />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search sessions..."
              className="bg-transparent text-sm text-zinc-300 placeholder:text-zinc-600 focus:outline-none w-full"
            />
          </div>
        </div>

        {/* Entry list */}
        <div className="flex-1 overflow-y-auto">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-5 w-5 animate-spin text-zinc-600" />
            </div>
          ) : filtered.length === 0 ? (
            <div className="p-4 text-center text-xs text-zinc-600">
              {search ? "No matches" : "No sessions yet"}
            </div>
          ) : (
            Object.entries(groups).map(([label, grpEntries]) => (
              <div key={label}>
                <p className="px-3 py-2 text-[10px] font-semibold uppercase tracking-wider text-zinc-600">{label}</p>
                {grpEntries.map(e => (
                  <button
                    key={e.id}
                    onClick={() => { setSelected(e); setMode("view"); }}
                    className={cn(
                      "w-full text-left px-3 py-2.5 hover:bg-[#2f2f2f] transition-colors border-b border-white/[0.03]",
                      selected?.id === e.id && mode !== "new" && "bg-[#2f2f2f]"
                    )}
                  >
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className={cn("h-1.5 w-1.5 rounded-full flex-shrink-0", TYPE_COLOR[e.trainingType] || "bg-zinc-500")} />
                      <span className="text-xs font-medium text-zinc-300 truncate">{TYPE_LABEL[e.trainingType]}</span>
                      <span className="ml-auto text-[10px] text-zinc-600">{fmtDuration(e.duration)}</span>
                    </div>
                    <p className="text-[11px] text-zinc-600 truncate pl-3.5">{e.workedOn || fmtDate(e.date)}</p>
                  </button>
                ))}
              </div>
            ))
          )}
        </div>

        {/* Stats strip */}
        <div className="border-t border-white/[0.06] p-3 grid grid-cols-3 gap-1 text-center">
          <div><p className="text-lg font-bold text-white">{entries.length}</p><p className="text-[10px] text-zinc-600">Sessions</p></div>
          <div><p className="text-lg font-bold text-white">{Math.round(entries.reduce((s, e) => s + e.duration, 0) / 60)}</p><p className="text-[10px] text-zinc-600">Hours</p></div>
          <div>
            <p className="text-lg font-bold text-white flex items-center justify-center gap-0.5">
              <Flame className="h-4 w-4 text-orange-400" />
              {(() => {
                const dates = Array.from(new Set(entries.map(e => toDateStr(new Date(e.date))))).sort((a,b) => b.localeCompare(a));
                let streak = 0;
                for (let i = 0; i < dates.length; i++) {
                  const expected = toDateStr(new Date(Date.now() - i * 86400000));
                  if (dates[i] === expected) streak++; else break;
                }
                return streak;
              })()}
            </p>
            <p className="text-[10px] text-zinc-600">Streak</p>
          </div>
        </div>
      </div>

      {/* ── MAIN PANEL ──────────────────────────────────────────────────── */}
      <div className="flex-1 overflow-y-auto bg-[#212121]">

        {/* NEW / EDIT FORM */}
        {(mode === "new" || mode === "edit") && (
          <div className="max-w-2xl mx-auto px-6 py-8">
            <h2 className="text-xl font-bold text-white mb-6">{mode === "edit" ? "Edit Session" : "Log Session"}</h2>
            <form onSubmit={handleSave} className="space-y-5">

              {/* Date + Type row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2 block">Date</label>
                  <input type="date" value={form.date} onChange={e => setForm(f => ({...f, date: e.target.value}))}
                    className="w-full rounded-xl bg-[#2f2f2f] border-transparent text-white px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-zinc-600" />
                </div>
                <div>
                  <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2 block">Duration</label>
                  <div className="flex items-center gap-3">
                    <input type="range" min={15} max={180} step={5} value={form.duration}
                      onChange={e => setForm(f => ({...f, duration: Number(e.target.value)}))}
                      className="flex-1 accent-white" />
                    <span className="text-sm text-white font-medium w-12 text-right">{fmtDuration(form.duration)}</span>
                  </div>
                </div>
              </div>

              {/* Training type */}
              <div>
                <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2 block">Type</label>
                <div className="flex flex-wrap gap-2">
                  {TYPES.map(t => (
                    <button key={t} type="button" onClick={() => setForm(f => ({...f, trainingType: t}))}
                      className={cn("px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                        form.trainingType === t ? "bg-white text-black" : "bg-[#2f2f2f] text-zinc-400 hover:bg-[#3f3f3f]")}>
                      {TYPE_LABEL[t]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Main text fields */}
              <div>
                <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2 block">What did you work on?</label>
                <textarea value={form.workedOn} onChange={e => setForm(f => ({...f, workedOn: e.target.value}))}
                  placeholder="Techniques, positions, drills..."
                  rows={3} className="w-full rounded-xl bg-[#2f2f2f] border-transparent text-zinc-100 placeholder:text-zinc-600 px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-zinc-600 resize-none" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2 block">What went well?</label>
                  <textarea value={form.wentWell} onChange={e => setForm(f => ({...f, wentWell: e.target.value}))}
                    placeholder="Wins..." rows={2}
                    className="w-full rounded-xl bg-[#2f2f2f] border-transparent text-zinc-100 placeholder:text-zinc-600 px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-zinc-600 resize-none" />
                </div>
                <div>
                  <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2 block">What to improve?</label>
                  <textarea value={form.toImprove} onChange={e => setForm(f => ({...f, toImprove: e.target.value}))}
                    placeholder="Focus areas..." rows={2}
                    className="w-full rounded-xl bg-[#2f2f2f] border-transparent text-zinc-100 placeholder:text-zinc-600 px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-zinc-600 resize-none" />
                </div>
              </div>

              {/* Partners */}
              <div>
                <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2 block">Training partners (optional)</label>
                <input value={form.partners} onChange={e => setForm(f => ({...f, partners: e.target.value}))}
                  placeholder="Who did you roll with?"
                  className="w-full rounded-xl bg-[#2f2f2f] border-transparent text-zinc-100 placeholder:text-zinc-600 px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-zinc-600" />
              </div>

              {/* Energy + Rating row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2 block">Energy</label>
                  <div className="flex gap-1.5">
                    {[1,2,3,4,5].map(n => (
                      <button key={n} type="button" onClick={() => setForm(f => ({...f, energyLevel: f.energyLevel === n ? 0 : n}))}
                        className={cn("h-10 w-10 rounded-lg text-xl transition-all", form.energyLevel === n ? "bg-[#3f3f3f] ring-1 ring-white/30 scale-110" : "bg-[#2f2f2f] hover:bg-[#3f3f3f]")}>
                        {ENERGY[n]}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2 block">Rating</label>
                  <Stars value={form.rating} onChange={v => setForm(f => ({...f, rating: v}))} />
                </div>
              </div>

              {/* Injury */}
              <div>
                <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2 block">Injury notes (optional)</label>
                <input value={form.injuryNotes} onChange={e => setForm(f => ({...f, injuryNotes: e.target.value}))}
                  placeholder="Any pain or injuries?"
                  className="w-full rounded-xl bg-[#2f2f2f] border-transparent text-zinc-100 placeholder:text-zinc-600 px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-zinc-600" />
              </div>

              {/* Error */}
              {error && <p className="text-sm text-red-400 bg-red-950/30 rounded-lg px-4 py-3">{error}</p>}

              {/* Buttons */}
              <div className="flex gap-3 pt-2">
                <button type="submit" disabled={saving}
                  className="flex-1 rounded-xl bg-white text-black font-semibold py-3 text-sm hover:bg-zinc-200 disabled:opacity-50 transition-colors flex items-center justify-center gap-2">
                  {saving && <Loader2 className="h-4 w-4 animate-spin" />}
                  {saving ? "Saving..." : mode === "edit" ? "Update Session" : "Save Session"}
                </button>
                <button type="button" onClick={() => { setMode("view"); setError(""); }}
                  className="px-6 rounded-xl bg-[#2f2f2f] text-zinc-400 hover:bg-[#3f3f3f] text-sm font-medium transition-colors">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* VIEW ENTRY */}
        {mode === "view" && selected && (
          <div className="max-w-2xl mx-auto px-6 py-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className={cn("rounded-lg px-3 py-1 text-xs font-semibold text-white", TYPE_COLOR[selected.trainingType] || "bg-zinc-600")}>
                  {TYPE_LABEL[selected.trainingType]}
                </span>
                <span className="text-zinc-400 text-sm">{fmtDate(selected.date)}</span>
                <span className="text-zinc-600 text-sm">{fmtDuration(selected.duration)}</span>
              </div>
              <div className="flex gap-2">
                <button onClick={() => openEdit(selected)} className="p-2 rounded-lg text-zinc-500 hover:text-zinc-200 hover:bg-[#2f2f2f] transition-colors">
                  <Pencil className="h-4 w-4" />
                </button>
                <button onClick={() => handleDelete(selected.id)} className="p-2 rounded-lg text-zinc-500 hover:text-red-400 hover:bg-red-950/20 transition-colors">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>

            {selected.rating && selected.rating > 0 && (
              <div className="flex gap-0.5 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} className={cn("h-4 w-4", i <= selected.rating! ? "fill-yellow-400 text-yellow-400" : "text-zinc-700")} />)}
              </div>
            )}

            <div className="space-y-6">
              {selected.workedOn && (
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">What I Worked On</h3>
                  <p className="text-zinc-200 leading-relaxed whitespace-pre-wrap">{selected.workedOn}</p>
                </div>
              )}
              {selected.wentWell && (
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">What Went Well</h3>
                  <p className="text-zinc-200 leading-relaxed whitespace-pre-wrap">{selected.wentWell}</p>
                </div>
              )}
              {selected.toImprove && (
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">What to Improve</h3>
                  <p className="text-zinc-200 leading-relaxed whitespace-pre-wrap">{selected.toImprove}</p>
                </div>
              )}
              {selected.partners && (
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">Training Partners</h3>
                  <p className="text-zinc-200">{selected.partners}</p>
                </div>
              )}
              {selected.energyLevel && selected.energyLevel > 0 && (
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">Energy</h3>
                  <span className="text-2xl">{ENERGY[selected.energyLevel]}</span>
                </div>
              )}
              {selected.injuryNotes && (
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-red-500 mb-2">Injury Notes</h3>
                  <p className="text-red-300">{selected.injuryNotes}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* EMPTY STATE */}
        {mode === "view" && !selected && (
          <div className="flex flex-col items-center justify-center h-full text-center px-6">
            <div className="h-16 w-16 rounded-2xl bg-[#2f2f2f] flex items-center justify-center mb-4">
              <Plus className="h-8 w-8 text-zinc-600" />
            </div>
            <h3 className="text-lg font-semibold text-zinc-300 mb-2">Log your training</h3>
            <p className="text-sm text-zinc-600 max-w-sm mb-6">Track every session, see your progress, build your game.</p>
            <button onClick={openNew} className="rounded-xl bg-white text-black font-semibold px-6 py-3 text-sm hover:bg-zinc-200 transition-colors">
              + New Session
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
