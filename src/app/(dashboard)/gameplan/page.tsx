"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  Target,
  Sparkles,
  Printer,
  Swords,
  Shield,
  ArrowUp,
  ArrowDown,
  Plus,
  ChevronRight,
  Clock,
  Loader2,
  Trash2,
  Share2,
  Copy,
  Check,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn, formatDate } from "@/lib/utils";
import Link from "next/link";

interface GamePlanData {
  id: string;
  name: string;
  description?: string;
  standingGame: string[];
  topGame: string[];
  bottomGame: string[];
  submissions: string[];
  escapes: string[];
  createdAt: string;
}

type ViewMode = "list" | "form" | "view";

const BELT_OPTIONS = [
  { value: "WHITE", label: "White Belt" },
  { value: "BLUE", label: "Blue Belt" },
  { value: "PURPLE", label: "Purple Belt" },
  { value: "BROWN", label: "Brown Belt" },
  { value: "BLACK", label: "Black Belt" },
];

const BODY_TYPE_OPTIONS = [
  { value: "tall-lanky", label: "Tall / Lanky" },
  { value: "short-stocky", label: "Short / Stocky" },
  { value: "average", label: "Average Build" },
  { value: "heavy-strong", label: "Heavy / Strong" },
];

const WEIGHT_CLASS_OPTIONS = [
  "Rooster",
  "Light Feather",
  "Feather",
  "Light",
  "Middle",
  "Medium Heavy",
  "Heavy",
  "Super Heavy",
  "Ultra Heavy",
  "Open",
];

const STRENGTH_OPTIONS = [
  "Guard Player",
  "Passer",
  "Wrestler",
  "Leg Locker",
  "Submission Hunter",
  "Pressure Player",
];

const WEAKNESS_OPTIONS = [
  "Guard Player",
  "Passer",
  "Wrestler",
  "Leg Locker",
  "Submission Hunter",
  "Pressure Player",
];

const GOAL_OPTIONS = ["Competition", "Self-Defense", "Fitness", "Hobbyist"];

const TRAINING_FREQUENCY_OPTIONS = [
  "1-2x/week",
  "3-4x/week",
  "5-6x/week",
  "Daily",
];

const SECTION_CONFIG = [
  {
    key: "standingGame" as const,
    title: "Standing Game",
    subtitle: "Takedowns & Grip Fighting",
    icon: ArrowUp,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
  {
    key: "topGame" as const,
    title: "Top Game",
    subtitle: "Passing & Top Control",
    icon: Swords,
    color: "text-orange-400",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
  },
  {
    key: "bottomGame" as const,
    title: "Guard / Bottom Game",
    subtitle: "Sweeps & Submissions from Bottom",
    icon: ArrowDown,
    color: "text-green-400",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
  },
  {
    key: "submissions" as const,
    title: "Key Submissions",
    subtitle: "Go-To Finishing Techniques",
    icon: Target,
    color: "text-red-400",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/20",
  },
  {
    key: "escapes" as const,
    title: "Escape Priorities",
    subtitle: "Critical Defensive Techniques",
    icon: Shield,
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
  },
];

function parseSection(data: string | string[]): string[] {
  if (Array.isArray(data)) return data;
  if (typeof data === "string") {
    try {
      const parsed = JSON.parse(data);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }
  return [];
}

// BJJ Position flow map
const BJJ_POSITIONS = [
  { id: "standing", label: "Standing", x: 50, y: 8, color: "#3b82f6" },
  { id: "takedown", label: "Takedown", x: 50, y: 22, color: "#8b5cf6" },
  { id: "guard", label: "Guard", x: 20, y: 42, color: "#10b981" },
  { id: "half-guard", label: "Half Guard", x: 50, y: 42, color: "#14b8a6" },
  { id: "top-control", label: "Side / Mount", x: 80, y: 42, color: "#f97316" },
  { id: "sweep", label: "Sweep", x: 20, y: 62, color: "#22c55e" },
  { id: "back", label: "Back", x: 50, y: 62, color: "#ef4444" },
  { id: "submission", label: "Submission 🏆", x: 50, y: 80, color: "#eab308" },
];

const POSITION_EDGES = [
  ["standing", "takedown"],
  ["takedown", "guard"],
  ["takedown", "half-guard"],
  ["takedown", "top-control"],
  ["guard", "sweep"],
  ["guard", "back"],
  ["guard", "submission"],
  ["half-guard", "sweep"],
  ["half-guard", "top-control"],
  ["top-control", "submission"],
  ["top-control", "back"],
  ["sweep", "top-control"],
  ["back", "submission"],
];

const POSITION_TO_SECTION: Record<string, keyof GamePlanData> = {
  standing: "standingGame",
  takedown: "standingGame",
  guard: "bottomGame",
  "half-guard": "bottomGame",
  "top-control": "topGame",
  sweep: "bottomGame",
  back: "submissions",
  submission: "submissions",
};

export default function GamePlanPage() {
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const [savedPlans, setSavedPlans] = useState<GamePlanData[]>([]);
  const [activePlan, setActivePlan] = useState<GamePlanData | null>(null);
  const [generating, setGenerating] = useState(false);
  const [plansLoading, setPlansLoading] = useState(true);
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null);
  const [shareCopied, setShareCopied] = useState(false);

  // Form state
  const [belt, setBelt] = useState("");
  const [weight, setWeight] = useState("");
  const [weightClass, setWeightClass] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [strengths, setStrengths] = useState<string[]>([]);
  const [weaknesses, setWeaknesses] = useState<string[]>([]);
  const [goals, setGoals] = useState<string[]>([]);
  const [trainingFrequency, setTrainingFrequency] = useState("");
  const [focus, setFocus] = useState("");

  const fetchPlans = useCallback(async () => {
    try {
      setPlansLoading(true);
      const res = await fetch("/api/gameplan");
      if (res.ok) {
        const data = await res.json();
        const parsed = data.map((plan: Record<string, unknown>) => ({
          ...plan,
          standingGame: parseSection(plan.standingGame as string | string[]),
          topGame: parseSection(plan.topGame as string | string[]),
          bottomGame: parseSection(plan.bottomGame as string | string[]),
          submissions: parseSection(plan.submissions as string | string[]),
          escapes: parseSection(plan.escapes as string | string[]),
        }));
        setSavedPlans(parsed);
      }
    } catch (error) {
      console.error("Failed to fetch plans:", error);
    } finally {
      setPlansLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPlans();
  }, [fetchPlans]);

  const handleGenerate = async () => {
    if (!belt || !bodyType || strengths.length === 0) return;

    setGenerating(true);
    try {
      const res = await fetch("/api/gameplan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          belt,
          weight: weight || undefined,
          weightClass: weightClass || undefined,
          bodyType,
          strengths,
          weaknesses,
          goals,
          trainingFrequency: trainingFrequency || undefined,
          focus: focus || undefined,
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to generate");
      }

      const plan = await res.json();
      const parsed: GamePlanData = {
        ...plan,
        standingGame: parseSection(plan.standingGame),
        topGame: parseSection(plan.topGame),
        bottomGame: parseSection(plan.bottomGame),
        submissions: parseSection(plan.submissions),
        escapes: parseSection(plan.escapes),
      };

      setActivePlan(parsed);
      setSavedPlans((prev) => [parsed, ...prev]);
      setViewMode("view");
    } catch (error) {
      console.error("Generation error:", error);
    } finally {
      setGenerating(false);
    }
  };

  const handleDelete = async (planId: string) => {
    try {
      const res = await fetch(`/api/gameplan?id=${planId}`, { method: "DELETE" });
      if (res.ok) {
        setSavedPlans((prev) => prev.filter((p) => p.id !== planId));
        if (activePlan?.id === planId) {
          setActivePlan(null);
          setViewMode("list");
        }
      }
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    if (!activePlan) return;
    const url = `${window.location.origin}/gameplan/share/${activePlan.id}`;
    try {
      await navigator.clipboard.writeText(url);
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2000);
    } catch {
      // fallback
      prompt("Copy this link to share:", url);
    }
  };

  const openPlan = (plan: GamePlanData) => {
    setActivePlan(plan);
    setViewMode("view");
  };

  const startNewPlan = () => {
    setBelt("");
    setWeight("");
    setWeightClass("");
    setBodyType("");
    setStrengths([]);
    setWeaknesses([]);
    setGoals([]);
    setTrainingFrequency("");
    setFocus("");
    setViewMode("form");
  };

  const toggleArrayValue = (
    arr: string[],
    setter: React.Dispatch<React.SetStateAction<string[]>>,
    value: string
  ) => {
    setter(arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value]);
  };

  // ---------- RENDER ----------

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600/10">
            <Target className="h-5 w-5 text-red-500" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-zinc-100">
              Game Plan Builder
            </h1>
            <p className="text-sm text-zinc-500">
              AI-powered personalized BJJ strategy
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          {viewMode !== "list" && (
            <Button
              variant="outline"
              onClick={() => setViewMode("list")}
            >
              All Plans
            </Button>
          )}
          <Button onClick={startNewPlan}>
            <Plus className="mr-2 h-4 w-4" />
            Generate New Plan
          </Button>
        </div>
      </div>

      <Separator className="bg-zinc-800" />

      {/* Plan Generator Form */}
      {viewMode === "form" && (
        <div className="mx-auto max-w-2xl">
          <Card className="border-zinc-800 bg-zinc-900/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Sparkles className="h-5 w-5 text-red-500" />
                Build Your Game Plan
              </CardTitle>
              <p className="text-sm text-zinc-500">
                Tell us about yourself and our AI coach will create a personalized strategy.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Your Profile */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
                  Your Profile
                </h3>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="belt">Belt Level</Label>
                    <Select value={belt} onValueChange={setBelt}>
                      <SelectTrigger id="belt">
                        <SelectValue placeholder="Select belt" />
                      </SelectTrigger>
                      <SelectContent>
                        {BELT_OPTIONS.map((opt) => (
                          <SelectItem key={opt.value} value={opt.value}>
                            {opt.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="weight">Weight (lbs)</Label>
                    <Input
                      id="weight"
                      type="number"
                      placeholder="e.g. 170"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      className="border-zinc-700 bg-zinc-900"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="weightClass">Weight Class</Label>
                    <Select value={weightClass} onValueChange={setWeightClass}>
                      <SelectTrigger id="weightClass">
                        <SelectValue placeholder="Select weight class" />
                      </SelectTrigger>
                      <SelectContent>
                        {WEIGHT_CLASS_OPTIONS.map((wc) => (
                          <SelectItem key={wc} value={wc}>
                            {wc}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bodyType">Body Type</Label>
                    <Select value={bodyType} onValueChange={setBodyType}>
                      <SelectTrigger id="bodyType">
                        <SelectValue placeholder="Select body type" />
                      </SelectTrigger>
                      <SelectContent>
                        {BODY_TYPE_OPTIONS.map((opt) => (
                          <SelectItem key={opt.value} value={opt.value}>
                            {opt.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="trainingFrequency">Training Frequency</Label>
                    <Select value={trainingFrequency} onValueChange={setTrainingFrequency}>
                      <SelectTrigger id="trainingFrequency">
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        {TRAINING_FREQUENCY_OPTIONS.map((freq) => (
                          <SelectItem key={freq} value={freq}>
                            {freq}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Strengths</Label>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {STRENGTH_OPTIONS.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => toggleArrayValue(strengths, setStrengths, opt)}
                        className={cn(
                          "rounded-md border px-3 py-2 text-sm font-medium transition-colors",
                          strengths.includes(opt)
                            ? "border-red-500 bg-red-500/10 text-red-400"
                            : "border-zinc-700 bg-zinc-900 text-zinc-400 hover:border-zinc-600 hover:text-zinc-300"
                        )}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Weaknesses</Label>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {WEAKNESS_OPTIONS.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => toggleArrayValue(weaknesses, setWeaknesses, opt)}
                        className={cn(
                          "rounded-md border px-3 py-2 text-sm font-medium transition-colors",
                          weaknesses.includes(opt)
                            ? "border-orange-500 bg-orange-500/10 text-orange-400"
                            : "border-zinc-700 bg-zinc-900 text-zinc-400 hover:border-zinc-600 hover:text-zinc-300"
                        )}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Goals</Label>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {GOAL_OPTIONS.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => toggleArrayValue(goals, setGoals, opt)}
                        className={cn(
                          "rounded-md border px-3 py-2 text-sm font-medium transition-colors",
                          goals.includes(opt)
                            ? "border-green-500 bg-green-500/10 text-green-400"
                            : "border-zinc-700 bg-zinc-900 text-zinc-400 hover:border-zinc-600 hover:text-zinc-300"
                        )}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="focus">
                    Specific Area to Focus On{" "}
                    <span className="text-zinc-500">(optional)</span>
                  </Label>
                  <Textarea
                    id="focus"
                    placeholder="e.g. Improving my closed guard, dealing with pressure passers, competition prep..."
                    value={focus}
                    onChange={(e) => setFocus(e.target.value)}
                    className="border-zinc-700 bg-zinc-900 resize-none"
                    rows={3}
                  />
                </div>
              </div>

              <Separator className="bg-zinc-800" />

              <Button
                className="w-full"
                size="lg"
                onClick={handleGenerate}
                disabled={generating || !belt || !bodyType || strengths.length === 0}
              >
                {generating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Generate Game Plan
                  </>
                )}
              </Button>

              {generating && (
                <div className="rounded-lg border border-zinc-800 bg-zinc-950/50 p-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-600/10">
                    <Sparkles className="h-6 w-6 animate-pulse text-red-500" />
                  </div>
                  <p className="text-sm font-medium text-zinc-300">
                    AI is building your personalized game plan...
                  </p>
                  <p className="mt-1 text-xs text-zinc-500">
                    Analyzing your profile and crafting optimal strategies
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}

      {/* Game Plan Display */}
      {viewMode === "view" && activePlan && (
        <div className="space-y-6 print:space-y-4">
          {/* Plan header */}
          <Card className="border-zinc-800 bg-zinc-900/50">
            <CardContent className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-bold text-zinc-100">
                  {activePlan.name}
                </h2>
                {activePlan.description && (
                  <p className="mt-1 text-sm text-zinc-400">
                    {activePlan.description}
                  </p>
                )}
                <div className="mt-2 flex items-center gap-2">
                  <Badge
                    variant="outline"
                    className="border-zinc-700 text-zinc-400"
                  >
                    <Clock className="mr-1 h-3 w-3" />
                    {formatDate(activePlan.createdAt)}
                  </Badge>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 print:hidden">
                <Button variant="outline" size="sm" onClick={() => { setViewMode("form"); }}>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Regenerate
                </Button>
                <Button variant="outline" size="sm" onClick={handlePrint}>
                  <Printer className="mr-2 h-4 w-4" />
                  Print
                </Button>
                <Button variant="outline" size="sm" onClick={handleShare}>
                  {shareCopied ? <Check className="mr-2 h-4 w-4 text-emerald-400" /> : <Share2 className="mr-2 h-4 w-4" />}
                  {shareCopied ? "Copied!" : "Share"}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-red-400 hover:text-red-300 border-red-500/20 hover:bg-red-500/10"
                  onClick={() => handleDelete(activePlan.id)}
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Visual Position Map */}
          <Card className="border-zinc-800 bg-zinc-900/50 print:hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <Target className="h-4 w-4 text-red-500" />
                Position Flow Map
              </CardTitle>
              <p className="text-xs text-zinc-500">Click a position to jump to that section of your game plan</p>
            </CardHeader>
            <CardContent>
              <div className="relative w-full" style={{ paddingBottom: "55%" }}>
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 100 90"
                  preserveAspectRatio="xMidYMid meet"
                >
                  {/* Edges */}
                  {POSITION_EDGES.map(([from, to]) => {
                    const fromNode = BJJ_POSITIONS.find((p) => p.id === from);
                    const toNode = BJJ_POSITIONS.find((p) => p.id === to);
                    if (!fromNode || !toNode) return null;
                    return (
                      <line
                        key={`${from}-${to}`}
                        x1={fromNode.x}
                        y1={fromNode.y}
                        x2={toNode.x}
                        y2={toNode.y}
                        stroke="#3f3f46"
                        strokeWidth="0.5"
                        strokeDasharray="1,1"
                      />
                    );
                  })}
                  {/* Nodes */}
                  {BJJ_POSITIONS.map((pos) => {
                    const isSelected = selectedPosition === pos.id;
                    return (
                      <g
                        key={pos.id}
                        onClick={() => setSelectedPosition(isSelected ? null : pos.id)}
                        style={{ cursor: "pointer" }}
                      >
                        <circle
                          cx={pos.x}
                          cy={pos.y}
                          r={isSelected ? 7 : 5.5}
                          fill={pos.color}
                          fillOpacity={isSelected ? 1 : 0.7}
                          stroke={isSelected ? "#fff" : "transparent"}
                          strokeWidth="0.8"
                        />
                        <text
                          x={pos.x}
                          y={pos.y + 10}
                          textAnchor="middle"
                          fill="#a1a1aa"
                          fontSize="3.5"
                          fontFamily="sans-serif"
                        >
                          {pos.label}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>
              {/* Show section content for selected position */}
              {selectedPosition && (() => {
                const sectionKey = POSITION_TO_SECTION[selectedPosition];
                const items = sectionKey ? (activePlan[sectionKey] as string[]) : [];
                return items && items.length > 0 ? (
                  <div className="mt-2 rounded-lg border border-zinc-700/50 bg-zinc-800/40 p-3">
                    <p className="text-xs font-semibold text-zinc-300 mb-2">
                      {BJJ_POSITIONS.find(p => p.id === selectedPosition)?.label} — Your Game Plan:
                    </p>
                    <ul className="space-y-1">
                      {items.slice(0, 4).map((item: string, i: number) => (
                        <li key={i} className="text-xs text-zinc-400 flex items-start gap-1.5">
                          <span className="text-red-500 mt-0.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null;
              })()}
            </CardContent>
          </Card>

          {/* Sections grid */}
          <div className="grid gap-4 md:grid-cols-2 print:grid-cols-2">
            {SECTION_CONFIG.map((section) => {
              const items = activePlan[section.key];
              if (!items || items.length === 0) return null;

              return (
                <Card
                  key={section.key}
                  className={cn(
                    "border bg-zinc-950/50",
                    section.borderColor
                  )}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          "flex h-9 w-9 items-center justify-center rounded-lg",
                          section.bgColor
                        )}
                      >
                        <section.icon
                          className={cn("h-5 w-5", section.color)}
                        />
                      </div>
                      <div>
                        <CardTitle className="text-base">
                          {section.title}
                        </CardTitle>
                        <p className="text-xs text-zinc-500">
                          {section.subtitle}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-2.5">
                      {items.map((item, idx) => {
                        const [technique, ...noteParts] = item.split(":");
                        const note = noteParts.join(":").trim();
                        return (
                          <li key={idx} className="flex gap-2 text-sm">
                            <span
                              className={cn(
                                "mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full",
                                section.color.replace("text-", "bg-")
                              )}
                            />
                            <div>
                              <span className="font-medium text-zinc-200">
                                {technique}
                              </span>
                              {note && (
                                <span className="text-zinc-500">
                                  {" "}
                                  &mdash; {note}
                                </span>
                              )}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Recommended Techniques */}
          <Card className="border-zinc-800 bg-zinc-900/50">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-zinc-200">Recommended Techniques</h3>
                <p className="mt-1 text-xs text-zinc-500">Browse techniques that match your game plan</p>
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link href="/library">
                  View in Library
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Saved Plans List */}
      {viewMode === "list" && (
        <div>
          {plansLoading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="h-6 w-6 animate-spin text-zinc-500" />
            </div>
          ) : savedPlans.length === 0 ? (
            <Card className="border-zinc-800 bg-zinc-900/50">
              <CardContent className="flex flex-col items-center justify-center py-16">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-800">
                  <Target className="h-8 w-8 text-zinc-600" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-300">
                  No Game Plans Yet
                </h3>
                <p className="mt-1 text-sm text-zinc-500">
                  Generate your first AI-powered game plan to get started.
                </p>
                <Button className="mt-6" onClick={startNewPlan}>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Create Your First Plan
                </Button>
              </CardContent>
            </Card>
          ) : (
            <ScrollArea className="h-[calc(100vh-16rem)]">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {savedPlans.map((plan) => (
                  <Card
                    key={plan.id}
                    className="group cursor-pointer border-zinc-800 bg-zinc-900/50 transition-colors hover:border-zinc-700 hover:bg-zinc-900"
                    onClick={() => openPlan(plan)}
                  >
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <h3 className="truncate font-semibold text-zinc-200 group-hover:text-zinc-100">
                            {plan.name}
                          </h3>
                          {plan.description && (
                            <p className="mt-1 line-clamp-2 text-xs text-zinc-500">
                              {plan.description}
                            </p>
                          )}
                        </div>
                        <ChevronRight className="ml-2 h-5 w-5 flex-shrink-0 text-zinc-600 transition-colors group-hover:text-zinc-400" />
                      </div>

                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {SECTION_CONFIG.map((section) => {
                          const count = plan[section.key]?.length || 0;
                          if (!count) return null;
                          return (
                            <Badge
                              key={section.key}
                              variant="outline"
                              className={cn(
                                "text-[10px] px-1.5 py-0",
                                section.borderColor,
                                section.color
                              )}
                            >
                              {count} {section.title.split(" ")[0]}
                            </Badge>
                          );
                        })}
                      </div>

                      <div className="mt-3 flex items-center gap-1 text-xs text-zinc-600">
                        <Clock className="h-3 w-3" />
                        {formatDate(plan.createdAt)}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          )}
        </div>
      )}
    </div>
  );
}
