"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Star,
  Users,
  Play,
  Filter,
  BookOpen,
  Lock,
  Globe,
  Upload,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { BJJ_FANATICS_CREATORS } from "@/lib/bjj-fanatics-creators";

// ---------- Types ----------

interface CourseLesson {
  id: string;
  title: string;
  duration: number | null;
  free: boolean;
  order: number;
}

interface CourseCreator {
  id: string;
  name: string;
  username: string;
  image: string | null;
  belt: string;
}

interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  coverImage: string | null;
  category: string | null;
  beltLevel: string | null;
  published: boolean;
  creator: CourseCreator;
  lessons: CourseLesson[];
  averageRating: number;
  studentCount: number;
  reviewCount: number;
}

// ---------- Constants ----------

const categoryTabs = [
  "All",
  "Guard",
  "Passing",
  "Submissions",
  "Leg Locks",
  "Takedowns",
  "Competition",
];

const beltColorMap: Record<string, string> = {
  WHITE: "bg-white text-zinc-900",
  BLUE: "bg-blue-600 text-white",
  PURPLE: "bg-purple-700 text-white",
  BROWN: "bg-amber-800 text-white",
  BLACK: "bg-zinc-900 text-white border border-zinc-600",
};

const beltDotMap: Record<string, string> = {
  WHITE: "bg-white",
  BLUE: "bg-blue-500",
  PURPLE: "bg-purple-500",
  BROWN: "bg-amber-700",
  BLACK: "bg-zinc-800 ring-1 ring-zinc-600",
};

const featuredCreators = BJJ_FANATICS_CREATORS.slice(0, 6);

// ---------- Helpers ----------

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function StarRating({ rating, size = "sm" }: { rating: number; size?: "sm" | "xs" }) {
  const starSize = size === "sm" ? "h-3.5 w-3.5" : "h-3 w-3";
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`${starSize} ${
            star <= Math.round(rating)
              ? "fill-yellow-500 text-yellow-500"
              : "text-zinc-700"
          }`}
        />
      ))}
      <span className="ml-1 text-sm text-zinc-400">{rating.toFixed(1)}</span>
    </div>
  );
}

function SkeletonCard() {
  return (
    <Card className="border-zinc-800 overflow-hidden animate-pulse">
      <div className="h-40 bg-zinc-800" />
      <CardContent className="p-4 space-y-3">
        <div className="h-4 bg-zinc-800 rounded w-3/4" />
        <div className="h-3 bg-zinc-800 rounded w-1/2" />
        <div className="h-3 bg-zinc-800 rounded w-1/3" />
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="h-3 bg-zinc-800 rounded w-20" />
        <div className="h-5 bg-zinc-800 rounded w-12" />
      </CardFooter>
    </Card>
  );
}

// ---------- Main Page ----------

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("popular");
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const fetchCourses = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (searchQuery.trim()) params.set("search", searchQuery.trim());
      if (activeCategory !== "All") params.set("category", activeCategory);
      if (sortBy) params.set("sort", sortBy);

      const qs = params.toString();
      const res = await fetch(`/api/courses${qs ? `?${qs}` : ""}`);
      if (res.ok) {
        const data: Course[] = await res.json();
        setCourses(data);
      } else {
        setCourses([]);
      }
    } catch {
      setCourses([]);
    } finally {
      setLoading(false);
    }
  }, [searchQuery, activeCategory, sortBy]);

  useEffect(() => {
    const timeout = setTimeout(fetchCourses, 300);
    return () => clearTimeout(timeout);
  }, [fetchCourses]);

  const hasFreePreview = (course: Course) =>
    course.lessons.some((l) => l.free);

  const totalDuration = (lessons: CourseLesson[]) =>
    lessons.reduce((sum, l) => sum + (l.duration ?? 0), 0);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-zinc-100">Marketplace</h1>
          <p className="text-sm text-zinc-400">
            Discover BJJ courses from world-class instructors
          </p>
        </div>
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
          <Input
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      {/* Featured Creators */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-zinc-200">
            Featured Creators
          </h2>
          <Link
            href="/marketplace"
            className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors flex items-center gap-1"
          >
            <Globe className="h-3 w-3" />
            View all
          </Link>
        </div>
        <ScrollArea className="w-full">
          <div className="flex gap-3 pb-2">
            {featuredCreators.map((creator) => (
              <Link
                key={creator.username}
                href={`/s/${creator.username}`}
                className="flex-shrink-0"
              >
                <Card className="border-zinc-800 hover:border-zinc-600 transition-colors w-52 cursor-pointer group">
                  <CardContent className="p-4 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-red-700 to-zinc-800 flex items-center justify-center text-sm font-bold text-zinc-100 flex-shrink-0">
                        {getInitials(creator.name)}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-zinc-200 truncate group-hover:text-red-400 transition-colors">
                          {creator.name}
                        </p>
                        <div className="flex items-center gap-1.5">
                          <span
                            className={`h-2 w-2 rounded-full ${
                              beltDotMap[creator.belt] ?? "bg-zinc-600"
                            }`}
                          />
                          <span className="text-xs text-zinc-500">
                            {creator.belt.charAt(0) +
                              creator.belt.slice(1).toLowerCase()}{" "}
                            Belt
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {creator.specialties.slice(0, 2).map((s) => (
                        <Badge
                          key={s}
                          variant="outline"
                          className="text-[10px] px-1.5 py-0 border-zinc-700 text-zinc-400"
                        >
                          {s}
                        </Badge>
                      ))}
                      {creator.specialties.length > 2 && (
                        <Badge
                          variant="outline"
                          className="text-[10px] px-1.5 py-0 border-zinc-700 text-zinc-500"
                        >
                          +{creator.specialties.length - 2}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </ScrollArea>
      </section>

      <Separator className="bg-zinc-800" />

      {/* Filters Row */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <ScrollArea className="w-full sm:w-auto">
          <Tabs value={activeCategory} onValueChange={setActiveCategory}>
            <TabsList className="h-auto flex-wrap">
              {categoryTabs.map((cat) => (
                <TabsTrigger key={cat} value={cat} className="text-xs sm:text-sm">
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </ScrollArea>

        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-zinc-500" />
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-44">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Popular</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="rating">Top Rated</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Results Count */}
      {!loading && (
        <p className="text-sm text-zinc-500">
          {courses.length} course{courses.length !== 1 && "s"} found
        </p>
      )}

      {/* Loading Skeletons */}
      {loading && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      )}

      {/* Empty State */}
      {!loading && courses.length === 0 && (
        <Card className="border-zinc-800 border-dashed">
          <CardContent className="flex flex-col items-center justify-center py-20">
            <div className="rounded-full bg-zinc-800/50 p-4 mb-4">
              <BookOpen className="h-10 w-10 text-zinc-600" />
            </div>
            <h3 className="text-lg font-semibold text-zinc-300">
              No courses yet
            </h3>
            <p className="mt-2 text-sm text-zinc-500 text-center max-w-sm">
              Be the first to publish a course and share your BJJ knowledge with
              the community.
            </p>
            <Link href="/upload" className="mt-6">
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                <Upload className="mr-2 h-4 w-4" />
                Publish a Course
              </Button>
            </Link>
          </CardContent>
        </Card>
      )}

      {/* Course Grid */}
      {!loading && courses.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="border-zinc-800 overflow-hidden group hover:border-zinc-700 transition-colors cursor-pointer"
              onClick={() => setSelectedCourse(course)}
            >
              {/* Thumbnail */}
              <div className="relative h-40 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center overflow-hidden">
                {course.coverImage ? (
                  <Image
                    src={course.coverImage}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <Play className="h-10 w-10 text-zinc-700 group-hover:text-red-600/60 transition-colors" />
                )}
                {/* Belt badge top-right */}
                {course.beltLevel && (
                  <Badge
                    className={`absolute top-3 right-3 ${
                      beltColorMap[course.beltLevel] ?? ""
                    } text-xs`}
                  >
                    {course.beltLevel.charAt(0) +
                      course.beltLevel.slice(1).toLowerCase()}
                  </Badge>
                )}
                {/* Free preview badge */}
                {hasFreePreview(course) && (
                  <Badge className="absolute top-3 left-3 bg-green-600/90 text-white text-xs hover:bg-green-600">
                    Free Preview
                  </Badge>
                )}
              </div>

              <CardContent className="p-4 space-y-2">
                <h3 className="font-semibold text-zinc-100 group-hover:text-red-400 transition-colors line-clamp-1">
                  {course.title}
                </h3>
                <div className="flex items-center gap-1.5">
                  <span
                    className={`h-2 w-2 rounded-full flex-shrink-0 ${
                      beltDotMap[course.creator.belt] ?? "bg-zinc-600"
                    }`}
                  />
                  <span className="text-sm text-zinc-500 truncate">
                    {course.creator.name}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <StarRating rating={course.averageRating} />
                  <span className="flex items-center gap-1 text-xs text-zinc-500">
                    <Users className="h-3 w-3" />
                    {course.studentCount}
                  </span>
                </div>
              </CardContent>

              <CardFooter className="p-4 pt-0 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-zinc-500">
                  <Badge variant="outline" className="text-xs">
                    {course.category ?? "General"}
                  </Badge>
                  <span>{course.lessons.length} lessons</span>
                </div>
                <span className="text-lg font-bold text-zinc-100">
                  ${course.price}
                </span>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      {/* Course Detail Dialog */}
      <Dialog
        open={selectedCourse !== null}
        onOpenChange={(open) => !open && setSelectedCourse(null)}
      >
        {selectedCourse && (
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <div className="flex items-center gap-2 mb-1">
                {selectedCourse.beltLevel && (
                  <Badge
                    className={`${
                      beltColorMap[selectedCourse.beltLevel] ?? ""
                    } text-xs`}
                  >
                    {selectedCourse.beltLevel.charAt(0) +
                      selectedCourse.beltLevel.slice(1).toLowerCase()}{" "}
                    Belt
                  </Badge>
                )}
                <Badge variant="outline" className="text-xs">
                  {selectedCourse.category ?? "General"}
                </Badge>
                {hasFreePreview(selectedCourse) && (
                  <Badge className="bg-green-600/20 text-green-400 border border-green-800 text-xs">
                    Free Preview
                  </Badge>
                )}
              </div>
              <DialogTitle className="text-xl">
                {selectedCourse.title}
              </DialogTitle>
              <DialogDescription className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1">
                <span className="flex items-center gap-1.5">
                  <span
                    className={`h-2 w-2 rounded-full ${
                      beltDotMap[selectedCourse.creator.belt] ?? "bg-zinc-600"
                    }`}
                  />
                  {selectedCourse.creator.name}
                </span>
                <StarRating rating={selectedCourse.averageRating} />
                <span className="flex items-center gap-1 text-zinc-500">
                  <Users className="h-3.5 w-3.5" />
                  {selectedCourse.studentCount} student
                  {selectedCourse.studentCount !== 1 && "s"}
                </span>
                {selectedCourse.reviewCount > 0 && (
                  <span className="text-zinc-500">
                    {selectedCourse.reviewCount} review
                    {selectedCourse.reviewCount !== 1 && "s"}
                  </span>
                )}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 py-2">
              {/* Description */}
              <p className="text-sm text-zinc-300 leading-relaxed">
                {selectedCourse.description}
              </p>

              <Separator className="bg-zinc-800" />

              {/* Creator Info */}
              <div className="flex items-center gap-3 rounded-lg bg-zinc-900/50 border border-zinc-800/50 p-3">
                {selectedCourse.creator.image ? (
                  <Image
                    src={selectedCourse.creator.image}
                    alt={selectedCourse.creator.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                ) : (
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-red-700 to-zinc-800 flex items-center justify-center text-sm font-bold text-zinc-100 flex-shrink-0">
                    {getInitials(selectedCourse.creator.name)}
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-zinc-200">
                    {selectedCourse.creator.name}
                  </p>
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        beltDotMap[selectedCourse.creator.belt] ?? "bg-zinc-600"
                      }`}
                    />
                    <span className="text-xs text-zinc-500">
                      {selectedCourse.creator.belt.charAt(0) +
                        selectedCourse.creator.belt.slice(1).toLowerCase()}{" "}
                      Belt
                    </span>
                  </div>
                </div>
                <Link href={`/s/${selectedCourse.creator.username}`}>
                  <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-zinc-200">
                    <Globe className="h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <Separator className="bg-zinc-800" />

              {/* Lessons */}
              <div>
                <h4 className="text-sm font-semibold text-zinc-200 mb-1">
                  Lessons ({selectedCourse.lessons.length})
                </h4>
                <p className="text-xs text-zinc-500 mb-3">
                  Total: {totalDuration(selectedCourse.lessons)} min
                </p>
                <div className="space-y-2">
                  {[...selectedCourse.lessons]
                    .sort((a, b) => a.order - b.order)
                    .map((lesson, index) => (
                      <div
                        key={lesson.id}
                        className="flex items-center justify-between rounded-lg bg-zinc-900/50 border border-zinc-800/50 p-3"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-800 text-xs text-zinc-400">
                            {index + 1}
                          </div>
                          <div>
                            <p className="text-sm text-zinc-200">
                              {lesson.title}
                            </p>
                            {lesson.duration && (
                              <p className="text-xs text-zinc-500">
                                {lesson.duration} min
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {lesson.free ? (
                            <Badge
                              variant="secondary"
                              className="bg-green-600/20 text-green-400 border-green-800 text-xs"
                            >
                              Free
                            </Badge>
                          ) : (
                            <Lock className="h-3.5 w-3.5 text-zinc-600" />
                          )}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <DialogFooter className="gap-2 sm:gap-0">
              <div className="flex items-center gap-2 mr-auto">
                <span className="text-2xl font-bold text-zinc-100">
                  ${selectedCourse.price}
                </span>
              </div>
              <div className="relative group/buy">
                <Button
                  disabled
                  className="bg-red-600 text-white opacity-60 cursor-not-allowed"
                >
                  Purchase Course
                </Button>
                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-zinc-800 border border-zinc-700 px-3 py-1.5 text-xs text-zinc-300 opacity-0 group-hover/buy:opacity-100 transition-opacity pointer-events-none">
                  Coming Soon — Stripe setup required
                </div>
              </div>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
