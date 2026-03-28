"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
  Search,
  Filter,
  BookOpen,
  Play,
  ChevronRight,
  X,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  TECHNIQUES,
  POSITIONS,
  CATEGORIES,
  BELT_LEVELS,
  type Technique,
  type BeltLevel,
} from "@/lib/technique-data";

const BELT_COLORS: Record<BeltLevel, string> = {
  WHITE: "bg-white",
  BLUE: "bg-blue-600",
  PURPLE: "bg-purple-600",
  BROWN: "bg-amber-800",
  BLACK: "bg-zinc-900 border border-zinc-600",
};

const BELT_TEXT_COLORS: Record<BeltLevel, string> = {
  WHITE: "text-zinc-900",
  BLUE: "text-white",
  PURPLE: "text-white",
  BROWN: "text-white",
  BLACK: "text-white",
};

const POSITION_COLORS: Record<string, string> = {
  Guard: "bg-emerald-900/50 text-emerald-300 border-emerald-800",
  Mount: "bg-red-900/50 text-red-300 border-red-800",
  "Side Control": "bg-orange-900/50 text-orange-300 border-orange-800",
  Back: "bg-purple-900/50 text-purple-300 border-purple-800",
  Standing: "bg-blue-900/50 text-blue-300 border-blue-800",
  Turtle: "bg-yellow-900/50 text-yellow-300 border-yellow-800",
  "Half Guard": "bg-teal-900/50 text-teal-300 border-teal-800",
};

const CATEGORY_COLORS: Record<string, string> = {
  Submissions: "bg-red-900/40 text-red-300 border-red-800/50",
  Sweeps: "bg-sky-900/40 text-sky-300 border-sky-800/50",
  Passes: "bg-amber-900/40 text-amber-300 border-amber-800/50",
  Escapes: "bg-green-900/40 text-green-300 border-green-800/50",
  Takedowns: "bg-violet-900/40 text-violet-300 border-violet-800/50",
  Transitions: "bg-zinc-800/60 text-zinc-300 border-zinc-700/50",
};

export default function TechniqueLibraryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [position, setPosition] = useState("All");
  const [category, setCategory] = useState("All");
  const [belt, setBelt] = useState("All");
  const [techniques, setTechniques] = useState<Technique[]>(TECHNIQUES);
  const [selectedTechnique, setSelectedTechnique] = useState<Technique | null>(
    null
  );
  const [dialogOpen, setDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Fetch techniques from API
  const fetchTechniques = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (position !== "All") params.set("position", position);
      if (category !== "All") params.set("category", category);
      if (belt !== "All") params.set("belt", belt);
      if (searchQuery.trim()) params.set("q", searchQuery.trim());

      const res = await fetch(`/api/techniques?${params.toString()}`);
      if (res.ok) {
        const data = await res.json();
        setTechniques(data);
      }
    } catch {
      // Fallback to client-side filtering if API fails
      clientFilter();
    } finally {
      setLoading(false);
    }
  }, [position, category, belt, searchQuery]);

  // Client-side filter fallback
  const clientFilter = useCallback(() => {
    let filtered = [...TECHNIQUES];
    if (position !== "All") {
      filtered = filtered.filter((t) => t.position === position);
    }
    if (category !== "All") {
      filtered = filtered.filter((t) => t.category === category);
    }
    if (belt !== "All") {
      filtered = filtered.filter((t) => t.beltLevel === belt);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q)
      );
    }
    setTechniques(filtered);
  }, [position, category, belt, searchQuery]);

  // Debounced search via API
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchTechniques();
    }, 300);
    return () => clearTimeout(timer);
  }, [fetchTechniques]);

  // Get related techniques for the detail view
  const relatedTechniques = useMemo(() => {
    if (!selectedTechnique?.relatedTechniqueIds) return [];
    return TECHNIQUES.filter((t) =>
      selectedTechnique.relatedTechniqueIds?.includes(t.id)
    );
  }, [selectedTechnique]);

  const openDetail = (technique: Technique) => {
    setSelectedTechnique(technique);
    setDialogOpen(true);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setPosition("All");
    setCategory("All");
    setBelt("All");
  };

  const hasActiveFilters =
    position !== "All" ||
    category !== "All" ||
    belt !== "All" ||
    searchQuery.trim() !== "";

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-100">
            Technique Library
          </h1>
          <p className="text-sm text-zinc-400 mt-1">
            Browse and study {TECHNIQUES.length} BJJ techniques across all
            positions
          </p>
        </div>
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
          <Input
            placeholder="Search techniques..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-zinc-900 border-zinc-700 text-zinc-100 placeholder:text-zinc-500"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2 text-zinc-400">
          <Filter className="h-4 w-4" />
          <span className="text-sm font-medium">Filters:</span>
        </div>

        <Select value={position} onValueChange={setPosition}>
          <SelectTrigger className="w-[150px] bg-zinc-900 border-zinc-700 text-zinc-100">
            <SelectValue placeholder="Position" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Positions</SelectItem>
            {POSITIONS.map((p) => (
              <SelectItem key={p} value={p}>
                {p}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-[150px] bg-zinc-900 border-zinc-700 text-zinc-100">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Categories</SelectItem>
            {CATEGORIES.map((c) => (
              <SelectItem key={c} value={c}>
                {c}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={belt} onValueChange={setBelt}>
          <SelectTrigger className="w-[150px] bg-zinc-900 border-zinc-700 text-zinc-100">
            <SelectValue placeholder="Belt Level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Belts</SelectItem>
            {BELT_LEVELS.map((b) => (
              <SelectItem key={b} value={b}>
                <span className="flex items-center gap-2">
                  <span
                    className={`inline-block h-3 w-3 rounded-full ${BELT_COLORS[b]}`}
                  />
                  {b.charAt(0) + b.slice(1).toLowerCase()}
                </span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-zinc-400 hover:text-zinc-200"
          >
            <X className="h-4 w-4 mr-1" />
            Clear
          </Button>
        )}

        <span className="ml-auto text-sm text-zinc-500">
          {techniques.length} technique{techniques.length !== 1 ? "s" : ""}
        </span>
      </div>

      <Separator className="bg-zinc-800" />

      {/* Technique Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i} className="border-zinc-800 bg-zinc-900/50 animate-pulse">
              <CardHeader className="pb-3">
                <div className="h-5 bg-zinc-800 rounded w-3/4" />
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="h-4 bg-zinc-800 rounded w-full" />
                  <div className="h-4 bg-zinc-800 rounded w-2/3" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : techniques.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <BookOpen className="h-12 w-12 text-zinc-600 mb-4" />
          <h3 className="text-lg font-medium text-zinc-300">
            No techniques found
          </h3>
          <p className="text-sm text-zinc-500 mt-1 max-w-sm">
            Try adjusting your filters or search query to find what you are
            looking for.
          </p>
          {hasActiveFilters && (
            <Button
              variant="outline"
              size="sm"
              className="mt-4 border-zinc-700 text-zinc-300 hover:bg-zinc-800"
              onClick={clearFilters}
            >
              Clear all filters
            </Button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {techniques.map((technique) => (
            <Card
              key={technique.id}
              className="border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 hover:border-zinc-700 transition-all cursor-pointer group"
              onClick={() => openDetail(technique)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-base font-semibold text-zinc-100 group-hover:text-red-400 transition-colors leading-tight">
                    {technique.name}
                  </CardTitle>
                  <span
                    className={`flex-shrink-0 inline-flex items-center justify-center h-6 w-6 rounded-full text-[10px] font-bold ${BELT_COLORS[technique.beltLevel]} ${BELT_TEXT_COLORS[technique.beltLevel]}`}
                    title={`${technique.beltLevel.charAt(0) + technique.beltLevel.slice(1).toLowerCase()} belt`}
                  >
                    {technique.beltLevel.charAt(0)}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  <Badge
                    variant="outline"
                    className={`text-[11px] px-2 py-0 ${POSITION_COLORS[technique.position] || ""}`}
                  >
                    {technique.position}
                  </Badge>
                  <Badge
                    variant="outline"
                    className={`text-[11px] px-2 py-0 ${CATEGORY_COLORS[technique.category] || ""}`}
                  >
                    {technique.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-400 line-clamp-2 leading-relaxed">
                  {technique.description}
                </p>
                <div className="flex items-center gap-1 mt-3 text-xs text-zinc-500 group-hover:text-red-400/70 transition-colors">
                  <span>View details</span>
                  <ChevronRight className="h-3 w-3" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Technique Detail Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] p-0 border-zinc-800 bg-zinc-950">
          {selectedTechnique && (
            <ScrollArea className="max-h-[90vh]">
              <div className="p-6 space-y-6">
                <DialogHeader>
                  <div className="flex items-start gap-3">
                    <div className="flex-1">
                      <DialogTitle className="text-xl font-bold text-zinc-100">
                        {selectedTechnique.name}
                      </DialogTitle>
                      <DialogDescription className="mt-2 text-zinc-400 leading-relaxed">
                        {selectedTechnique.description}
                      </DialogDescription>
                    </div>
                    <span
                      className={`flex-shrink-0 inline-flex items-center justify-center h-8 w-8 rounded-full text-xs font-bold ${BELT_COLORS[selectedTechnique.beltLevel]} ${BELT_TEXT_COLORS[selectedTechnique.beltLevel]}`}
                    >
                      {selectedTechnique.beltLevel.charAt(0) +
                        selectedTechnique.beltLevel.slice(1).toLowerCase()}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <Badge
                      variant="outline"
                      className={`${POSITION_COLORS[selectedTechnique.position] || ""}`}
                    >
                      {selectedTechnique.position}
                    </Badge>
                    <Badge
                      variant="outline"
                      className={`${CATEGORY_COLORS[selectedTechnique.category] || ""}`}
                    >
                      {selectedTechnique.category}
                    </Badge>
                  </div>
                </DialogHeader>

                <Separator className="bg-zinc-800" />

                {/* Video Placeholder */}
                <div className="rounded-lg bg-zinc-900 border border-zinc-800 aspect-video flex flex-col items-center justify-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-800 border border-zinc-700">
                    <Play className="h-6 w-6 text-red-500 ml-0.5" />
                  </div>
                  <p className="text-sm text-zinc-500">
                    Video tutorial coming soon
                  </p>
                </div>

                {/* Step by Step Instructions */}
                <div>
                  <h3 className="text-sm font-semibold text-zinc-200 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-red-500" />
                    Step-by-Step Instructions
                  </h3>
                  <ol className="space-y-3">
                    {selectedTechnique.steps.map((step, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-red-600/20 text-red-400 text-xs font-bold">
                          {idx + 1}
                        </span>
                        <span className="text-sm text-zinc-300 leading-relaxed pt-0.5">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>

                <Separator className="bg-zinc-800" />

                {/* Tips */}
                {selectedTechnique.tips.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-200 uppercase tracking-wider mb-3">
                      Tips
                    </h3>
                    <ul className="space-y-2">
                      {selectedTechnique.tips.map((tip, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-zinc-400"
                        >
                          <span className="text-red-500 mt-1 flex-shrink-0">
                            &bull;
                          </span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Related Techniques */}
                {relatedTechniques.length > 0 && (
                  <>
                    <Separator className="bg-zinc-800" />
                    <div>
                      <h3 className="text-sm font-semibold text-zinc-200 uppercase tracking-wider mb-3">
                        Related Techniques
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {relatedTechniques.map((rt) => (
                          <button
                            key={rt.id}
                            onClick={() => setSelectedTechnique(rt)}
                            className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900/50 p-3 text-left hover:bg-zinc-900 hover:border-zinc-700 transition-all group"
                          >
                            <span
                              className={`flex-shrink-0 h-5 w-5 rounded-full ${BELT_COLORS[rt.beltLevel]}`}
                            />
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-zinc-200 group-hover:text-red-400 transition-colors truncate">
                                {rt.name}
                              </p>
                              <p className="text-xs text-zinc-500 truncate">
                                {rt.position} &middot; {rt.category}
                              </p>
                            </div>
                            <ChevronRight className="h-4 w-4 text-zinc-600 group-hover:text-red-400 transition-colors flex-shrink-0" />
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </ScrollArea>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
