"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Search, Send, MapPin, Star, Loader2, ArrowRight } from "lucide-react";

interface Academy {
  id: string;
  name: string;
  city: string;
  country: string;
  rating: number;
  review_count: number;
  slug: string;
  google_maps_url: string;
  address: string;
  distance?: number;
}

const SUGGESTIONS = [
  "BJJ academies near me",
  "Find BJJ gyms in Austin",
  "How do I escape from mount?",
  "BJJ academies in London",
  "What is a kimura?",
  "Best BJJ gym in Miami",
];

export default function HomepageSearch() {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{ type: "academies" | "ai" | "location_required"; academies?: Academy[]; reply?: string; location?: string; locationDetected?: boolean; message?: string } | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = async (query?: string) => {
    const q = query || input;
    if (!q.trim() || isLoading) return;

    setIsLoading(true);
    setHasSearched(true);
    if (query) setInput(query);

    const isNearMe = /near me/i.test(q);

    try {
      let lat: number | null = null;
      let lng: number | null = null;

      // If "near me" — request geolocation first
      if (isNearMe && navigator.geolocation) {
        try {
          const position = await new Promise<GeolocationPosition>((resolve, reject) =>
            navigator.geolocation.getCurrentPosition(resolve, reject, { timeout: 8000 })
          );
          lat = position.coords.latitude;
          lng = position.coords.longitude;
        } catch {
          // Permission denied or timeout — fall back to IP-based or show message
        }
      }

      const res = await fetch("/api/find-academy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: q, lat, lng }),
      });
      const data = await res.json();
      setResult(data);
    } catch {
      setResult({ type: "ai", reply: "Something went wrong. Try searching for academies or asking a BJJ question!" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="mx-auto mt-10 w-full max-w-2xl">
      {/* Search bar */}
      <div className="relative flex items-center rounded-2xl border border-zinc-700 bg-zinc-800/80 backdrop-blur shadow-xl shadow-black/40 focus-within:border-zinc-500 transition-colors">
        <Search className="ml-4 h-5 w-5 flex-shrink-0 text-zinc-400" />
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Find BJJ academies near me or ask anything..."
          className="flex-1 bg-transparent px-3 py-4 text-base text-zinc-100 placeholder:text-zinc-500 focus:outline-none"
          autoComplete="off"
        />
        <button
          onClick={() => handleSearch()}
          disabled={!input.trim() || isLoading}
          className="mr-2 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-red-600 text-white hover:bg-red-700 disabled:opacity-40 transition-colors"
        >
          {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        </button>
      </div>

      {/* Quick suggestions */}
      {!hasSearched && (
        <div className="mt-3 flex flex-wrap justify-center gap-2">
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              onClick={() => handleSearch(s)}
              className="rounded-full border border-zinc-700/60 bg-zinc-800/40 px-3 py-1 text-xs text-zinc-400 hover:border-zinc-500 hover:text-zinc-200 transition-colors"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Results */}
      {result && (
        <div className="mt-4 rounded-2xl border border-zinc-700 bg-zinc-900/90 backdrop-blur shadow-xl">
          {result.type === "location_required" && (
            <div className="p-5 text-center">
              <MapPin className="h-8 w-8 text-red-500 mx-auto mb-3" />
              <p className="text-sm font-semibold text-white">Location access needed</p>
              <p className="mt-1 text-xs text-zinc-400">{result.message}</p>
              <div className="mt-3 flex gap-2 justify-center">
                <button
                  onClick={() => handleSearch("bjj academies near me")}
                  className="rounded-lg bg-red-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-red-700"
                >
                  Allow Location
                </button>
                <button
                  onClick={() => { setInput("BJJ academies in "); inputRef.current?.focus(); setResult(null); setHasSearched(false); }}
                  className="rounded-lg border border-zinc-700 px-3 py-1.5 text-xs text-zinc-300 hover:border-zinc-500"
                >
                  Type my city
                </button>
              </div>
            </div>
          )}

          {result.type === "academies" && (
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <MapPin className="h-4 w-4 text-red-500" />
                  {result.locationDetected
                    ? "Nearest BJJ Academies to You"
                    : result.location && result.location !== "worldwide"
                    ? `BJJ Academies near "${result.location}"`
                    : "Top-Rated BJJ Academies"}
                </div>
                <Link href="/academies" className="text-xs text-red-400 hover:text-red-300">
                  View all →
                </Link>
              </div>

              {result.academies && result.academies.length === 0 ? (
                <div className="py-4 text-center">
                  <p className="text-sm text-zinc-400">No academies found for that location yet.</p>
                  <p className="mt-1 text-xs text-zinc-500">
                    Try a nearby city, or{" "}
                    <Link href="/academies" className="text-red-400 hover:underline">browse all academies</Link>.
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  {result.academies?.map((academy) => (
                    <div key={academy.id} className="flex items-start justify-between gap-3 rounded-xl border border-zinc-800 bg-zinc-800/40 p-3 hover:border-zinc-600 transition-colors">
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-white text-sm truncate">{academy.name}</p>
                        <p className="text-xs text-zinc-400 truncate">
                          {academy.city}, {academy.country}
                          {academy.distance !== undefined && (
                            <span className="ml-1 text-red-400">· {academy.distance.toFixed(1)}km ({(academy.distance * 0.621371).toFixed(1)}mi) away</span>
                          )}
                        </p>
                        {academy.rating && (
                          <div className="flex items-center gap-1 mt-0.5">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs text-zinc-300">{academy.rating.toFixed(1)}</span>
                            {academy.review_count > 0 && <span className="text-xs text-zinc-500">({academy.review_count})</span>}
                          </div>
                        )}
                      </div>
                      <div className="flex flex-col gap-1.5 flex-shrink-0">
                        <a
                          href={academy.google_maps_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-lg border border-zinc-700 px-2.5 py-1 text-[11px] font-medium text-zinc-300 hover:border-zinc-500 hover:text-white whitespace-nowrap"
                        >
                          Maps →
                        </a>
                        <Link
                          href={`/academies/${academy.slug}`}
                          className="rounded-lg bg-red-600/20 border border-red-700/30 px-2.5 py-1 text-[11px] font-medium text-red-400 hover:bg-red-600/30 whitespace-nowrap"
                        >
                          Details
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-3 rounded-xl border border-zinc-800 bg-zinc-800/30 p-3 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-white">Training at one of these?</p>
                  <p className="text-[11px] text-zinc-500">Track sessions, get AI coaching, build your game plan.</p>
                </div>
                <Link href="/auth/signup" className="flex-shrink-0 rounded-lg bg-red-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-red-700 flex items-center gap-1">
                  Free <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          )}

          {result.type === "ai" && (
            <div className="p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-red-600 text-[10px] font-black text-white">AI</div>
                <div className="flex-1">
                  <p className="text-sm text-zinc-200 leading-relaxed">{result.reply}</p>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-800/30 p-3">
                <p className="text-xs text-zinc-400">Get unlimited AI coaching + training journal</p>
                <Link href="/auth/signup" className="flex-shrink-0 rounded-lg bg-red-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-red-700 flex items-center gap-1">
                  Start Free <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
