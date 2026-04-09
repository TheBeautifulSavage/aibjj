"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  BookOpen,
  ChevronDown,
  ChevronUp,
  Check,
  Clock,
  MessageSquare,
  Trophy,
  Target,
  Dumbbell,
  Shield,
  Zap,
  Lock,
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
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface Module {
  title: string;
  description: string;
  position: string;
  category: string;
  drills: string[];
  estimatedSessions: number;
}

interface LearningPath {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  borderColor: string;
  estimatedWeeks: number;
  beltRange: string;
  modules: Module[];
}

// ---------------------------------------------------------------------------
// Learning Paths Data
// ---------------------------------------------------------------------------

const LEARNING_PATHS: LearningPath[] = [
  {
    id: "white-belt-fundamentals",
    name: "White Belt Fundamentals",
    subtitle: "0–6 months",
    description:
      "Master the foundational positions, escapes, and submissions every BJJ student must know. Build the framework your entire game will stand on.",
    icon: Shield,
    color: "text-zinc-300",
    bgColor: "bg-zinc-800/40",
    borderColor: "border-zinc-700/40",
    estimatedWeeks: 24,
    beltRange: "White Belt",
    modules: [
      {
        title: "Defensive Posture & Base",
        description: "Understand base, frames, and why posture is your first line of defense.",
        position: "mount",
        category: "escape",
        drills: ["Hip escape (shrimp) 20x", "Bridge and roll drill", "Defensive guard recovery"],
        estimatedSessions: 3,
      },
      {
        title: "Mount Escapes",
        description: "Bridge & roll, elbow-knee escape — the two fundamental mount escapes.",
        position: "mount",
        category: "escape",
        drills: ["Bridge & roll with partner", "Upa (explosion bridge)", "Elbow-knee to guard"],
        estimatedSessions: 4,
      },
      {
        title: "Side Control Escapes",
        description: "Frame and recover guard. Never stay stuck in side control.",
        position: "side-control",
        category: "escape",
        drills: ["Near-side underhook escape", "Far-side arm frame", "Granby roll"],
        estimatedSessions: 4,
      },
      {
        title: "Closed Guard Basics",
        description: "Learn to control from the bottom with a closed guard and basic attacks.",
        position: "guard",
        category: "submission",
        drills: ["Hip elevation", "Armbar from guard setup", "Triangle entry hip movement"],
        estimatedSessions: 4,
      },
      {
        title: "Guard Passing Fundamentals",
        description: "Torreando pass, knee-slice pass — the two passes every white belt needs.",
        position: "guard",
        category: "pass",
        drills: ["Knee-slice footwork", "Torreando drive drill", "Over-under pass posture"],
        estimatedSessions: 4,
      },
      {
        title: "Basic Takedowns",
        description: "Double leg, single leg, and body lock takedowns to start the match standing.",
        position: "standing",
        category: "takedown",
        drills: ["Level change drill", "Penetration step", "Sprawl defense"],
        estimatedSessions: 3,
      },
      {
        title: "Mount Control & Submissions",
        description: "Learn to hold mount and attack the straight armbar and cross collar choke.",
        position: "mount",
        category: "submission",
        drills: ["S-mount transition", "Armbar from mount isolation", "Cross-collar grip setup"],
        estimatedSessions: 4,
      },
      {
        title: "Back Control & Rear Naked Choke",
        description: "Take the back properly and finish the most dominant choke in BJJ.",
        position: "back",
        category: "submission",
        drills: ["Seat belt grip", "Body triangle lock", "Chin strap defense & RNC entry"],
        estimatedSessions: 4,
      },
    ],
  },
  {
    id: "blue-belt-builder",
    name: "Blue Belt Builder",
    subtitle: "6–18 months",
    description:
      "Develop your guard game, build a passing system, and add submission offense. Move from surviving to threatening.",
    icon: BookOpen,
    color: "text-blue-400",
    bgColor: "bg-blue-900/20",
    borderColor: "border-blue-800/40",
    estimatedWeeks: 40,
    beltRange: "White → Blue Belt",
    modules: [
      {
        title: "Half Guard Development",
        description: "Understand both top and bottom half guard. The most common position in sparring.",
        position: "half-guard",
        category: "sweep",
        drills: ["Deep half entry", "Old school sweep drill", "Dog fight position"],
        estimatedSessions: 5,
      },
      {
        title: "De La Riva Guard",
        description: "Develop your DLR hook, berimbolo entry, and basic sweeps.",
        position: "guard",
        category: "sweep",
        drills: ["DLR hook on the ankle", "Kick sweep entry", "Back take from DLR"],
        estimatedSessions: 5,
      },
      {
        title: "Passing Systems",
        description: "Build a 3-pass system: knee-slice, torreando, and leg drag.",
        position: "guard",
        category: "pass",
        drills: ["Leg drag hip-to-hip", "Knee-slice chain reaction", "Smash pass pressure"],
        estimatedSessions: 5,
      },
      {
        title: "Triangle Choke Mastery",
        description: "Set up, finish, and counter-attack with the triangle choke.",
        position: "guard",
        category: "submission",
        drills: ["Triangle isolation drill", "Hip angle correction", "Armbar to triangle combo"],
        estimatedSessions: 4,
      },
      {
        title: "Guillotine & Arm-In Guillotine",
        description: "The most common finish in no-gi. Learn arm-in and arm-out variations.",
        position: "standing",
        category: "submission",
        drills: ["Snap down to guillotine", "Arm-in squeeze drill", "High elbow guillotine"],
        estimatedSessions: 4,
      },
      {
        title: "North-South & Far-Side Armbar",
        description: "Top position transitions and attacks from north-south.",
        position: "side-control",
        category: "submission",
        drills: ["North-south transitions", "Far-side armbar setup", "Kimura from north-south"],
        estimatedSessions: 4,
      },
      {
        title: "Turtle Position",
        description: "Attack the turtle from top and defend from bottom.",
        position: "turtle",
        category: "submission",
        drills: ["Clock choke setup", "Bow and arrow from turtle", "Granby roll defense"],
        estimatedSessions: 4,
      },
      {
        title: "Competition Game Planning",
        description: "Build a simple A-game: 2 guard passes, 2 sweeps, 2 submissions.",
        position: "guard",
        category: "takedown",
        drills: ["Scenario drilling (pass > sub)", "Sweep to sub chain", "Back take chain"],
        estimatedSessions: 5,
      },
    ],
  },
  {
    id: "guard-specialist",
    name: "Guard Specialist",
    subtitle: "Any level",
    description:
      "Master every guard position — from closed to berimbolo, from single leg X to lasso. Become unpassable.",
    icon: Target,
    color: "text-purple-400",
    bgColor: "bg-purple-900/20",
    borderColor: "border-purple-800/40",
    estimatedWeeks: 32,
    beltRange: "Blue Belt +",
    modules: [
      {
        title: "Closed Guard Offense",
        description: "Advanced closed guard attacks, sweeps, and back takes.",
        position: "guard",
        category: "submission",
        drills: ["Overhook armbar", "Hip bump sweep chain", "Scissor sweep combo"],
        estimatedSessions: 5,
      },
      {
        title: "Spider Guard",
        description: "Use sleeve grips and foot pressure to control and sweep.",
        position: "guard",
        category: "sweep",
        drills: ["Lollipop sweep", "Spider to triangle", "Tomoe nage"],
        estimatedSessions: 5,
      },
      {
        title: "Lasso Guard",
        description: "The lasso hook creates powerful angles and controls the posture.",
        position: "guard",
        category: "sweep",
        drills: ["Lasso entry", "Cross sweep", "Triangle from lasso"],
        estimatedSessions: 4,
      },
      {
        title: "Single Leg X (Ashi Garami)",
        description: "Build your leg entanglement game from SLX.",
        position: "guard",
        category: "submission",
        drills: ["SLX entry from guard", "Ankle lock from SLX", "Outside heel hook entry"],
        estimatedSessions: 5,
      },
      {
        title: "X-Guard & Matrix",
        description: "Use X-guard to sweep large opponents and set up leg locks.",
        position: "guard",
        category: "sweep",
        drills: ["X-guard entry from single leg", "Homer sweep", "Back take from X"],
        estimatedSessions: 5,
      },
      {
        title: "Rubber Guard",
        description: "Use hyper-flexible closed guard to control posture and attack submissions.",
        position: "guard",
        category: "submission",
        drills: ["Mission control entry", "Omoplata from rubber guard", "Triangle from vaporizer"],
        estimatedSessions: 4,
      },
      {
        title: "Omoplata",
        description: "The omoplata — sweep, submission, and position all in one.",
        position: "guard",
        category: "submission",
        drills: ["Omoplata entry from triangle", "Forward roll when defended", "Omoplata to armbar"],
        estimatedSessions: 4,
      },
      {
        title: "Inversion & Berimbolo",
        description: "Use inversions to take the back and enter leg attacks.",
        position: "guard",
        category: "takedown",
        drills: ["Basic inversion drill", "DLR to berimbolo", "Back take from berimbolo"],
        estimatedSessions: 5,
      },
    ],
  },
  {
    id: "competitors-prep",
    name: "Competitor's Prep",
    subtitle: "Competition-focused",
    description:
      "12-week competition prep: game planning, conditioning, mental toughness, and match strategy. Train to win.",
    icon: Trophy,
    color: "text-red-400",
    bgColor: "bg-red-900/20",
    borderColor: "border-red-800/40",
    estimatedWeeks: 12,
    beltRange: "All belts",
    modules: [
      {
        title: "Build Your A-Game",
        description: "Identify your 3 best positions and build a flowchart to each.",
        position: "guard",
        category: "takedown",
        drills: ["A-game chain drilling", "Worst-case scenario drilling", "High-percentage entry practice"],
        estimatedSessions: 4,
      },
      {
        title: "Match Simulation & Pacing",
        description: "Train at competition intensity. Learn to manage energy over 5–10 minute matches.",
        position: "mount",
        category: "escape",
        drills: ["Timed rounds at 90% intensity", "Recovery breathing", "Point-based rolling"],
        estimatedSessions: 5,
      },
      {
        title: "Takedown & Opening Strategy",
        description: "Win the takedown battle or pull guard strategically.",
        position: "standing",
        category: "takedown",
        drills: ["Snap down to sprawl", "Guard pull to immediate sweep", "Level change entries"],
        estimatedSessions: 4,
      },
      {
        title: "Defensive Systems Under Pressure",
        description: "Escape bad positions when you're tired and the clock is running.",
        position: "side-control",
        category: "escape",
        drills: ["Pressure escape circuits", "Clock escape", "Back recovery drilling"],
        estimatedSessions: 5,
      },
      {
        title: "Grip Fighting",
        description: "Control the grip battle to control the match.",
        position: "standing",
        category: "takedown",
        drills: ["Grip stripping", "Collar drag entries", "2-on-1 control"],
        estimatedSessions: 3,
      },
      {
        title: "Submission Finishing",
        description: "Close out submissions instead of letting opponents escape.",
        position: "mount",
        category: "submission",
        drills: ["Armbar isolation drill", "Triangle angle drill", "Finishing under resistance"],
        estimatedSessions: 4,
      },
      {
        title: "Mental Preparation",
        description: "Visualization, pressure management, and competing without emotion.",
        position: "standing",
        category: "takedown",
        drills: ["Pre-match visualization routine", "Breathing protocol", "Reset trigger drill"],
        estimatedSessions: 3,
      },
      {
        title: "Weight Management & Game Day",
        description: "Cutting, rehydration, warm-up, and match-day routine.",
        position: "standing",
        category: "takedown",
        drills: ["Competition warm-up sequence", "Drilling at 50% to preserve energy", "Mental rehearsal"],
        estimatedSessions: 3,
      },
    ],
  },
  {
    id: "no-gi-foundation",
    name: "No-Gi Foundation",
    subtitle: "Submission grappling",
    description:
      "Build your no-gi game from the ground up: wrestling, leg locks, heel hooks, and the submission grappling meta.",
    icon: Dumbbell,
    color: "text-emerald-400",
    bgColor: "bg-emerald-900/20",
    borderColor: "border-emerald-800/40",
    estimatedWeeks: 28,
    beltRange: "All levels",
    modules: [
      {
        title: "Wrestling Fundamentals",
        description: "Shots, sprawls, and mat wrestling — dominate the takedown battle.",
        position: "standing",
        category: "takedown",
        drills: ["Penetration step drill", "Sprawl and crossface", "Level change", "Sit out"],
        estimatedSessions: 5,
      },
      {
        title: "Snap Downs & Front Headlocks",
        description: "Catch your opponent bent and attack guillotines and darce chokes.",
        position: "standing",
        category: "submission",
        drills: ["Snap down repetition", "Front headlock control", "Guillotine from snap"],
        estimatedSessions: 4,
      },
      {
        title: "No-Gi Guard Retention",
        description: "Guard without grips — use frames, knees, and hips to stay safe.",
        position: "guard",
        category: "escape",
        drills: ["Hip escape without grips", "Knee shield drill", "Inversion to guard recovery"],
        estimatedSessions: 4,
      },
      {
        title: "Leg Lock Fundamentals (Ankle Locks)",
        description: "Straight ankle lock mechanics, finish, and defense.",
        position: "guard",
        category: "submission",
        drills: ["Ankle lock grip", "Hip extension finish", "Ankle lock defense"],
        estimatedSessions: 4,
      },
      {
        title: "Kneebar & Calf Slicer",
        description: "Advanced leg attacks that complement your ankle lock game.",
        position: "guard",
        category: "submission",
        drills: ["Kneebar entry from top", "Calf slicer from mount", "Transition between attacks"],
        estimatedSessions: 4,
      },
      {
        title: "Heel Hook Entries (Inside & Outside)",
        description: "Safe heel hook mechanics and responsible training protocols.",
        position: "guard",
        category: "submission",
        drills: ["Inside heel hook from SLX", "Outside heel hook from saddle", "Ashi garami control"],
        estimatedSessions: 5,
      },
      {
        title: "Darce & Anaconda Chokes",
        description: "Attack the turtle and north-south with arm triangle variations.",
        position: "turtle",
        category: "submission",
        drills: ["Darce entry from turtle", "Anaconda roll", "Switch to RNC when defended"],
        estimatedSessions: 4,
      },
      {
        title: "The No-Gi Meta: Position vs Submission",
        description: "Understand when to take points vs. when to hunt the finish in competitive no-gi.",
        position: "guard",
        category: "pass",
        drills: ["Dominant control drilling", "Submission hunting timer rounds", "Leg entanglement game planning"],
        estimatedSessions: 4,
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// localStorage helpers
// ---------------------------------------------------------------------------

const STORAGE_KEY = "aibjj_learning_path_progress";

function loadProgress(): Record<string, Set<number>> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Record<string, number[]>;
    return Object.fromEntries(
      Object.entries(parsed).map(([k, v]) => [k, new Set(v)])
    );
  } catch {
    return {};
  }
}

function saveProgress(progress: Record<string, Set<number>>) {
  try {
    const serializable = Object.fromEntries(
      Object.entries(progress).map(([k, v]) => [k, Array.from(v)])
    );
    localStorage.setItem(STORAGE_KEY, JSON.stringify(serializable));
  } catch { /* ignore */ }
}

// ---------------------------------------------------------------------------
// Module Row Component
// ---------------------------------------------------------------------------

function ModuleRow({
  module,
  index,
  pathId,
  completed,
  onToggle,
  locked,
}: {
  module: Module;
  index: number;
  pathId: string;
  completed: boolean;
  onToggle: () => void;
  locked: boolean;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={cn(
        "rounded-lg border transition-colors",
        completed
          ? "border-emerald-800/40 bg-emerald-950/20"
          : locked
          ? "border-zinc-800/40 bg-zinc-900/30 opacity-60"
          : "border-zinc-800/40 bg-zinc-800/20"
      )}
    >
      <div className="flex items-center gap-3 p-3">
        {/* Step number / check */}
        <button
          onClick={!locked ? onToggle : undefined}
          className={cn(
            "flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors",
            completed
              ? "bg-emerald-600 text-white"
              : locked
              ? "bg-zinc-800 text-zinc-600 cursor-not-allowed"
              : "bg-zinc-700 text-zinc-300 hover:bg-zinc-600 cursor-pointer"
          )}
          aria-label={completed ? "Mark incomplete" : "Mark complete"}
        >
          {completed ? <Check className="h-3.5 w-3.5" /> : locked ? <Lock className="h-3 w-3" /> : index + 1}
        </button>

        {/* Title */}
        <div className="min-w-0 flex-1">
          <button
            className="text-left w-full"
            onClick={() => setExpanded(!expanded)}
          >
            <p className={cn("text-sm font-medium", completed ? "text-emerald-300 line-through opacity-70" : "text-zinc-200")}>
              {module.title}
            </p>
            <p className="text-xs text-zinc-500 mt-0.5">{module.description}</p>
          </button>
        </div>

        {/* Right side controls */}
        <div className="flex flex-shrink-0 items-center gap-2">
          <span className="text-xs text-zinc-600 hidden sm:block">{module.estimatedSessions} sessions</span>
          <Link
            href={`/library?position=${encodeURIComponent(module.position)}&category=${encodeURIComponent(module.category)}`}
            className="text-xs text-red-500 hover:text-red-400 hidden sm:block"
          >
            View techniques
          </Link>
          <button onClick={() => setExpanded(!expanded)}>
            {expanded ? (
              <ChevronUp className="h-4 w-4 text-zinc-500" />
            ) : (
              <ChevronDown className="h-4 w-4 text-zinc-500" />
            )}
          </button>
        </div>
      </div>

      {expanded && (
        <div className="border-t border-zinc-800/40 px-3 pb-3 pt-2 space-y-3">
          {/* Drills */}
          <div>
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Drills to practice:</p>
            <ul className="space-y-1">
              {module.drills.map((drill, di) => (
                <li key={di} className="flex items-start gap-2 text-xs text-zinc-400">
                  <Check className="h-3 w-3 text-red-500 flex-shrink-0 mt-0.5" />
                  {drill}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href={`/library?position=${encodeURIComponent(module.position)}&category=${encodeURIComponent(module.category)}`}
              className="inline-flex items-center gap-1 rounded-md border border-zinc-700 bg-zinc-800 px-2.5 py-1 text-xs text-zinc-300 hover:bg-zinc-700 transition-colors"
            >
              <BookOpen className="h-3 w-3" />
              View {module.position} techniques
            </Link>
            <Link
              href={`/coach?q=${encodeURIComponent(`Teach me about ${module.title} in BJJ. Give me detailed instruction and key concepts.`)}`}
              className="inline-flex items-center gap-1 rounded-md border border-red-800/40 bg-red-900/20 px-2.5 py-1 text-xs text-red-400 hover:bg-red-900/40 transition-colors"
            >
              <MessageSquare className="h-3 w-3" />
              Ask AI Coach about this
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Path Card Component
// ---------------------------------------------------------------------------

function PathCard({
  path,
  progress,
  onToggleModule,
}: {
  path: LearningPath;
  progress: Set<number>;
  onToggleModule: (pathId: string, moduleIdx: number) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const completedCount = progress.size;
  const total = path.modules.length;
  const pct = Math.round((completedCount / total) * 100);

  return (
    <Card className={cn("border transition-all", path.borderColor, expanded ? "shadow-lg" : "hover:shadow-md")}>
      {/* Path Header */}
      <CardHeader className="pb-3">
        <div className="flex items-start gap-3">
          <div className={cn("flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl", path.bgColor)}>
            <path.icon className={cn("h-5 w-5", path.color)} />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <CardTitle className="text-base">{path.name}</CardTitle>
              <Badge variant="outline" className="text-xs">{path.beltRange}</Badge>
            </div>
            <CardDescription className="mt-0.5">{path.subtitle}</CardDescription>
          </div>
          <div className="flex flex-col items-end flex-shrink-0 gap-1">
            <span className="text-xs text-zinc-500 flex items-center gap-1">
              <Clock className="h-3 w-3" /> ~{path.estimatedWeeks}w
            </span>
            <span className={cn("text-xs font-semibold", pct === 100 ? "text-emerald-400" : "text-zinc-400")}>
              {completedCount}/{total} done
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-3 h-1.5 w-full rounded-full bg-zinc-800">
          <div
            className={cn("h-full rounded-full transition-all duration-500", pct === 100 ? "bg-emerald-500" : "bg-red-600")}
            style={{ width: `${pct}%` }}
          />
        </div>
      </CardHeader>

      <CardContent className="pt-0 space-y-3">
        <p className="text-sm text-zinc-400">{path.description}</p>

        {/* Expand / collapse */}
        <Button
          variant="ghost"
          size="sm"
          className="w-full border border-zinc-800/60 text-zinc-400 hover:text-zinc-200"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? (
            <>
              <ChevronUp className="h-4 w-4 mr-1" /> Hide Modules
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4 mr-1" /> View {total} Modules
            </>
          )}
        </Button>

        {expanded && (
          <div className="space-y-2 pt-1">
            {path.modules.map((mod, idx) => (
              <ModuleRow
                key={idx}
                module={mod}
                index={idx}
                pathId={path.id}
                completed={progress.has(idx)}
                onToggle={() => onToggleModule(path.id, idx)}
                locked={false}
              />
            ))}
            {pct === 100 && (
              <div className="flex items-center gap-2 rounded-lg border border-emerald-700/40 bg-emerald-900/20 p-3">
                <Trophy className="h-5 w-5 text-emerald-400" />
                <div>
                  <p className="text-sm font-semibold text-emerald-300">Path Complete! 🎉</p>
                  <p className="text-xs text-emerald-500">Well done. Pick the next path to keep progressing.</p>
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function LearnPage() {
  const [allProgress, setAllProgress] = useState<Record<string, Set<number>>>({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setAllProgress(loadProgress());
    setLoaded(true);
  }, []);

  const handleToggleModule = useCallback((pathId: string, moduleIdx: number) => {
    setAllProgress((prev) => {
      const pathProgress = new Set(prev[pathId] ?? []);
      if (pathProgress.has(moduleIdx)) {
        pathProgress.delete(moduleIdx);
      } else {
        pathProgress.add(moduleIdx);
      }
      const next = { ...prev, [pathId]: pathProgress };
      saveProgress(next);
      return next;
    });
  }, []);

  const totalModules = LEARNING_PATHS.reduce((s, p) => s + p.modules.length, 0);
  const totalCompleted = Object.values(allProgress).reduce((s, set) => s + set.size, 0);

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-zinc-100 flex items-center gap-2">
            <Zap className="h-6 w-6 text-red-500" />
            Learning Paths
          </h1>
          <p className="text-sm text-zinc-400 mt-1">
            Structured BJJ curriculum. Complete modules in order, track your progress, and ask the AI Coach anytime.
          </p>
        </div>
        {loaded && totalCompleted > 0 && (
          <div className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 mt-2 sm:mt-0">
            <Trophy className="h-4 w-4 text-amber-400" />
            <span className="text-sm text-zinc-300">
              <span className="font-bold text-amber-400">{totalCompleted}</span>
              <span className="text-zinc-500">/{totalModules} modules</span>
            </span>
          </div>
        )}
      </div>

      {/* Overall progress bar */}
      {loaded && totalCompleted > 0 && (
        <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
          <div className="flex justify-between text-xs text-zinc-500 mb-2">
            <span>Overall Progress</span>
            <span>{Math.round((totalCompleted / totalModules) * 100)}%</span>
          </div>
          <div className="h-2 w-full rounded-full bg-zinc-800">
            <div
              className="h-full rounded-full bg-gradient-to-r from-red-600 to-amber-500 transition-all duration-500"
              style={{ width: `${(totalCompleted / totalModules) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Path Cards */}
      <div className="space-y-4">
        {LEARNING_PATHS.map((path) => (
          <PathCard
            key={path.id}
            path={path}
            progress={allProgress[path.id] ?? new Set()}
            onToggleModule={handleToggleModule}
          />
        ))}
      </div>

      {/* Footer tip */}
      <div className="rounded-lg border border-zinc-800/60 bg-zinc-900/50 p-4 text-center">
        <p className="text-sm text-zinc-400">
          Progress is saved locally in your browser.{" "}
          <Link href="/coach" className="text-red-400 hover:text-red-300">
            Ask the AI Coach
          </Link>{" "}
          about any technique for deeper explanations and drills.
        </p>
      </div>
    </div>
  );
}
