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

const STYLE_OPTIONS = [
  { value: "Guard Player", label: "Guard Player" },
  { value: "Pressure Passer", label: "Pressure Passer" },
  { value: "Wrestler", label: "Wrestler" },
  { value: "Berimbolo/Modern", label: "Berimbolo / Modern" },
  { value: "Submission Hunter", label: "Submission Hunter" },
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

export default function GamePlanPage() {
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const [savedPlans, setSavedPlans] = useState<GamePlanData[]>([]);
  const [activePlan, setActivePlan] = useState<GamePlanData | null>(null);
  const [generating, setGenerating] = useState(false);
  const [plansLoading, setPlansLoading] = useState(true);

  // Form state
  const [belt, setBelt] = useState("");
  const [weight, setWeight] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [style, setStyle] = useState("");
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
    if (!belt || !bodyType || !style) return;

    setGenerating(true);
    try {
      const res = await fetch("/api/gameplan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ belt, weight: weight || undefined, bodyType, style, focus: focus || undefined }),
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

  const openPlan = (plan: GamePlanData) => {
    setActivePlan(plan);
    setViewMode("view");
  };

  const startNewPlan = () => {
    setBelt("");
    setWeight("");
    setBodyType("");
    setStyle("");
    setFocus("");
    setViewMode("form");
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
                    <Label htmlFor="style">Style Preference</Label>
                    <Select value={style} onValueChange={setStyle}>
                      <SelectTrigger id="style">
                        <SelectValue placeholder="Select style" />
                      </SelectTrigger>
                      <SelectContent>
                        {STYLE_OPTIONS.map((opt) => (
                          <SelectItem key={opt.value} value={opt.value}>
                            {opt.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
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
                disabled={generating || !belt || !bodyType || !style}
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
              <div className="flex gap-2 print:hidden">
                <Button variant="outline" size="sm" onClick={handlePrint}>
                  <Printer className="mr-2 h-4 w-4" />
                  Print
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
