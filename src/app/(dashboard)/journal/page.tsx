"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Plus,
  Calendar,
  Clock,
  Swords,
  BookOpen,
  TrendingUp,
  Loader2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { cn, formatDate, formatDuration } from "@/lib/utils";

// --- Types & Constants ---

const TRAINING_TYPES = [
  { value: "GI", label: "Gi", color: "bg-blue-600" },
  { value: "NOGI", label: "No-Gi", color: "bg-purple-600" },
  { value: "COMP", label: "Comp", color: "bg-red-600" },
  { value: "DRILLING", label: "Drilling", color: "bg-green-600" },
  { value: "OPEN_MAT", label: "Open Mat", color: "bg-yellow-600" },
] as const;

type TrainingType = (typeof TRAINING_TYPES)[number]["value"];

interface JournalEntry {
  id: string;
  date: string;
  duration: number;
  type: TrainingType;
  techniques: string[];
  notes: string | null;
  taps: number;
  wasTapped: number;
  sparringRounds: number;
  energyLevel: number | null;
  createdAt: string;
}

interface JournalResponse {
  entries: JournalEntry[];
  total: number;
  page: number;
  totalPages: number;
}

// --- Form Schema ---

const formSchema = z.object({
  date: z.string().min(1, "Date is required"),
  duration: z.number().min(1, "Duration must be at least 1 minute").max(600),
  type: z.enum(["GI", "NOGI", "COMP", "DRILLING", "OPEN_MAT"]),
  techniques: z.string(),
  notes: z.string(),
  taps: z.number().min(0),
  wasTapped: z.number().min(0),
  sparringRounds: z.number().min(0),
  energyLevel: z.number().min(1).max(5).optional(),
});

type FormValues = z.infer<typeof formSchema>;

// --- Helpers ---

function getTypeConfig(type: TrainingType) {
  return TRAINING_TYPES.find((t) => t.value === type) ?? TRAINING_TYPES[0];
}

function EnergyDots({ level }: { level: number | null }) {
  if (!level) return <span className="text-zinc-600 text-xs">N/A</span>;
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className={cn(
            "h-2 w-2 rounded-full",
            i <= level ? "bg-red-500" : "bg-zinc-700"
          )}
        />
      ))}
    </div>
  );
}

// --- Main Page ---

export default function JournalPage() {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Filters
  const [filterType, setFilterType] = useState<string>("ALL");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  const fetchEntries = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({ page: String(page), limit: "10" });
      if (filterType !== "ALL") params.set("type", filterType);
      if (dateFrom) params.set("dateFrom", dateFrom);
      if (dateTo) params.set("dateTo", dateTo);

      const res = await fetch(`/api/journal?${params.toString()}`);
      if (!res.ok) throw new Error("Failed to fetch");
      const data: JournalResponse = await res.json();
      setEntries(data.entries);
      setTotalPages(data.totalPages);
    } catch {
      console.error("Failed to load journal entries");
    } finally {
      setLoading(false);
    }
  }, [page, filterType, dateFrom, dateTo]);

  useEffect(() => {
    fetchEntries();
  }, [fetchEntries]);

  // Reset to page 1 when filters change
  useEffect(() => {
    setPage(1);
  }, [filterType, dateFrom, dateTo]);

  // --- Form ---

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date: new Date().toISOString().split("T")[0],
      duration: 60,
      type: "GI",
      techniques: "",
      notes: "",
      taps: 0,
      wasTapped: 0,
      sparringRounds: 0,
      energyLevel: undefined,
    },
  });

  const [selectedEnergy, setSelectedEnergy] = useState<number | undefined>(
    undefined
  );

  async function onSubmit(values: FormValues) {
    setSubmitting(true);
    try {
      const techniques = values.techniques
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);

      const res = await fetch("/api/journal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          techniques,
          energyLevel: selectedEnergy,
        }),
      });

      if (!res.ok) throw new Error("Failed to create entry");

      setDialogOpen(false);
      form.reset();
      setSelectedEnergy(undefined);
      setPage(1);
      fetchEntries();
    } catch {
      console.error("Failed to save journal entry");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-zinc-100">
            Training Journal
          </h1>
          <p className="text-sm text-zinc-400 mt-1">
            Track your sessions, techniques, and progress over time.
          </p>
        </div>

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Log Session
            </Button>
          </DialogTrigger>

          <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>Log Training Session</DialogTitle>
              <DialogDescription>
                Record the details of your training session.
              </DialogDescription>
            </DialogHeader>

            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 pt-2"
            >
              {/* Date & Duration */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    type="date"
                    {...form.register("date")}
                    className="text-zinc-100"
                  />
                  {form.formState.errors.date && (
                    <p className="text-xs text-red-400">
                      {form.formState.errors.date.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">Duration (min)</Label>
                  <Input
                    id="duration"
                    type="number"
                    min={1}
                    max={600}
                    {...form.register("duration", { valueAsNumber: true })}
                  />
                  {form.formState.errors.duration && (
                    <p className="text-xs text-red-400">
                      {form.formState.errors.duration.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Training Type */}
              <div className="space-y-2">
                <Label>Training Type</Label>
                <Controller
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <Select
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        {TRAINING_TYPES.map((t) => (
                          <SelectItem key={t.value} value={t.value}>
                            {t.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>

              {/* Techniques */}
              <div className="space-y-2">
                <Label htmlFor="techniques">
                  Techniques{" "}
                  <span className="text-zinc-500 font-normal">
                    (comma-separated)
                  </span>
                </Label>
                <Input
                  id="techniques"
                  placeholder="e.g. Arm bar, Triangle, Sweep"
                  {...form.register("techniques")}
                />
              </div>

              {/* Notes */}
              <div className="space-y-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  placeholder="How did the session go?"
                  rows={3}
                  {...form.register("notes")}
                />
              </div>

              {/* Taps / Was Tapped / Rounds */}
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="taps">Taps Given</Label>
                  <Input
                    id="taps"
                    type="number"
                    min={0}
                    {...form.register("taps", { valueAsNumber: true })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="wasTapped">Was Tapped</Label>
                  <Input
                    id="wasTapped"
                    type="number"
                    min={0}
                    {...form.register("wasTapped", { valueAsNumber: true })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sparringRounds">Rounds</Label>
                  <Input
                    id="sparringRounds"
                    type="number"
                    min={0}
                    {...form.register("sparringRounds", { valueAsNumber: true })}
                  />
                </div>
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
                        setSelectedEnergy(
                          selectedEnergy === level ? undefined : level
                        )
                      }
                      className={cn(
                        "h-10 w-10 rounded-md border text-sm font-medium transition-colors",
                        selectedEnergy === level
                          ? "border-red-500 bg-red-600 text-white"
                          : "border-zinc-700 bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200"
                      )}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <Button type="submit" className="w-full" disabled={submitting}>
                {submitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  "Save Session"
                )}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
            <div className="space-y-1.5">
              <Label className="text-xs text-zinc-400">Training Type</Label>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ALL">All Types</SelectItem>
                  {TRAINING_TYPES.map((t) => (
                    <SelectItem key={t.value} value={t.value}>
                      {t.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs text-zinc-400">From</Label>
              <Input
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                className="w-[160px] text-zinc-100"
              />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs text-zinc-400">To</Label>
              <Input
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                className="w-[160px] text-zinc-100"
              />
            </div>
            {(filterType !== "ALL" || dateFrom || dateTo) && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setFilterType("ALL");
                  setDateFrom("");
                  setDateTo("");
                }}
                className="text-zinc-400 hover:text-zinc-200"
              >
                Clear filters
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Content */}
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="h-8 w-8 animate-spin text-zinc-500" />
        </div>
      ) : entries.length === 0 ? (
        /* Empty state */
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-16 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-800 mb-4">
              <BookOpen className="h-8 w-8 text-zinc-500" />
            </div>
            <h3 className="text-lg font-semibold text-zinc-200 mb-1">
              No sessions logged yet
            </h3>
            <p className="text-sm text-zinc-400 max-w-sm mb-6">
              Start tracking your BJJ journey. Log your first training session
              to see your progress over time.
            </p>
            <Button onClick={() => setDialogOpen(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Log Your First Session
            </Button>
          </CardContent>
        </Card>
      ) : (
        <>
          {/* Entries */}
          <div className="space-y-3">
            {entries.map((entry) => {
              const typeConfig = getTypeConfig(entry.type);
              return (
                <Card key={entry.id} className="hover:border-zinc-700 transition-colors">
                  <CardContent className="p-4 sm:p-5">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      {/* Left side */}
                      <div className="flex-1 space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge
                            className={cn(
                              "border-transparent text-white text-xs",
                              typeConfig.color
                            )}
                          >
                            {typeConfig.label}
                          </Badge>
                          <span className="flex items-center gap-1 text-sm text-zinc-400">
                            <Calendar className="h-3.5 w-3.5" />
                            {formatDate(entry.date)}
                          </span>
                          <span className="flex items-center gap-1 text-sm text-zinc-400">
                            <Clock className="h-3.5 w-3.5" />
                            {formatDuration(entry.duration)}
                          </span>
                        </div>

                        {/* Techniques */}
                        {entry.techniques.length > 0 && (
                          <div className="flex flex-wrap gap-1.5">
                            {entry.techniques.map((tech, i) => (
                              <Badge
                                key={i}
                                variant="secondary"
                                className="text-xs"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        )}

                        {/* Notes */}
                        {entry.notes && (
                          <p className="text-sm text-zinc-400 line-clamp-2">
                            {entry.notes}
                          </p>
                        )}
                      </div>

                      {/* Right side stats */}
                      <div className="flex items-center gap-4 sm:flex-col sm:items-end sm:gap-2">
                        <div className="flex items-center gap-3 text-sm">
                          <span className="flex items-center gap-1 text-green-400">
                            <Swords className="h-3.5 w-3.5" />
                            {entry.taps}
                          </span>
                          <span className="text-zinc-600">/</span>
                          <span className="flex items-center gap-1 text-red-400">
                            <TrendingUp className="h-3.5 w-3.5" />
                            {entry.wasTapped}
                          </span>
                          {entry.sparringRounds > 0 && (
                            <>
                              <span className="text-zinc-600">|</span>
                              <span className="text-zinc-400 text-xs">
                                {entry.sparringRounds} rnd
                                {entry.sparringRounds !== 1 ? "s" : ""}
                              </span>
                            </>
                          )}
                        </div>
                        <EnergyDots level={entry.energyLevel} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 pt-2">
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
  );
}
