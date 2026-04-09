"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Flame, Trophy, CheckCircle2 } from "lucide-react";

interface StreakData {
  streak: number;
  lastTraining: string;
  totalSessions: number;
  longestStreak: number;
}

function getMilestone(streak: number): string | null {
  if (streak >= 100) return "👑 Legend!";
  if (streak >= 30) return "🥋 One month!";
  if (streak >= 7) return "🏆 One week!";
  return null;
}

export default function TrainingStreak() {
  const [data, setData] = useState<StreakData | null>(null);
  const [loading, setLoading] = useState(true);
  const [logging, setLogging] = useState(false);
  const [trainedToday, setTrainedToday] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  const fetchStreak = async () => {
    try {
      const res = await fetch("/api/streak");
      if (res.ok) {
        const d = await res.json();
        setData(d);
        setTrainedToday(d.lastTraining === today);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStreak();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logTraining = async () => {
    if (logging || trainedToday) return;
    setLogging(true);
    try {
      const res = await fetch("/api/streak", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      const d = await res.json();
      if (d.alreadyLogged) {
        setTrainedToday(true);
      } else {
        setTrainedToday(true);
        await fetchStreak();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLogging(false);
    }
  };

  if (loading) {
    return (
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 animate-pulse h-24" />
    );
  }

  const streak = data?.streak ?? 0;
  const milestone = getMilestone(streak);

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        {/* Streak display */}
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10">
            <Flame className="h-6 w-6 text-orange-500" />
          </div>
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-bold text-white">{streak}</span>
              <span className="text-sm text-zinc-400">day streak</span>
              {milestone && (
                <span className="text-sm font-medium text-orange-400 ml-1">{milestone}</span>
              )}
            </div>
            <p className="text-xs text-zinc-500">
              Best: {data?.longestStreak ?? 0} days · Total: {data?.totalSessions ?? 0} sessions
            </p>
          </div>
        </div>

        {/* Log button */}
        <div>
          {trainedToday ? (
            <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
              <CheckCircle2 className="h-5 w-5" />
              Trained today!
            </div>
          ) : (
            <Button
              onClick={logTraining}
              disabled={logging}
              size="sm"
              className="bg-orange-500 hover:bg-orange-600 text-white gap-2"
            >
              <Flame className="h-4 w-4" />
              {logging ? "Logging..." : "Log Today's Training"}
            </Button>
          )}
        </div>

        {/* Streak record hint */}
        {streak > 0 && streak === data?.longestStreak && (
          <div className="w-full flex items-center gap-1.5 text-xs text-yellow-500">
            <Trophy className="h-3.5 w-3.5" />
            New personal best streak!
          </div>
        )}
      </div>
    </div>
  );
}
