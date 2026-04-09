"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Search,
  Star,
  Users,
  Play,
  BookOpen,
  Lock,
  Globe,
  Upload,
  Loader2,
  Sparkles,
  X,
  BadgeCheck,
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
  bio?: string | null;
  socialInstagram?: string | null;
  socialYoutube?: string | null;
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
  featured: boolean;
  published: boolean;
  createdAt: string;
  creator: CourseCreator;
  lessons: CourseLesson[];
  averageRating: number;
  studentCount: number;
  reviewCount: number;
  isNew?: boolean;
}

// ---------- Constants ----------

const CATEGORIES = [
  "All",
  "Guard",
  "Passing",
  "Submissions",
  "Takedowns",
  "Escapes",
  "Competition",
  "No-Gi",
  "Self-Defense",
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

function CourseCard({
  course,
  onClick,
}: {
  course: Course;
  onClick: () => void;
}) {
  const hasFreePreview = course.lessons.some((l) => l.free);

  return (
    <Card
      className="border-zinc-800 overflow-hidden group hover:border-zinc-700 transition-all cursor-pointer hover:shadow-lg hover:shadow-black/20"
      onClick={onClick}
    >
      {/* Thumbnail */}
      <div className="relative h-44 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center overflow-hidden">
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

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-1.5">
          {course.isNew && (
            <Badge className="bg-green-600/90 text-white text-[10px] px-1.5 py-0.5 hover:bg-green-600">
              NEW
            </Badge>
          )}
          {hasFreePreview && (
            <Badge className="bg-blue-600/90 text-white text-[10px] px-1.5 py-0.5 hover:bg-blue-600">
              Free Preview
            </Badge>
          )}
        </div>

        {course.beltLevel && (
          <Badge
            className={`absolute top-3 right-3 ${beltColorMap[course.beltLevel] ?? ""} text-xs`}
          >
            {course.beltLevel.charAt(0) + course.beltLevel.slice(1).toLowerCase()}
          </Badge>
        )}

        {/* Free preview button overlay */}
        {hasFreePreview && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
            <Button
              size="sm"
              className="bg-white text-zinc-900 hover:bg-zinc-100 text-xs gap-1.5"
              onClick={(e) => {
                e.stopPropagation();
                onClick();
              }}
            >
              <Play className="h-3.5 w-3.5 fill-zinc-900" />
              Preview
            </Button>
          </div>
        )}
      </div>

      <CardContent className="p-4 space-y-2.5">
        <h3 className="font-semibold text-zinc-100 group-hover:text-red-400 transition-colors line-clamp-2 leading-snug">
          {course.title}
        </h3>

        {/* Creator */}
        <div className="flex items-center gap-2">
          {course.creator.image ? (
            <Image
              src={course.creator.image}
              alt={course.creator.name}
              width={20}
              height={20}
              className="rounded-full flex-shrink-0"
            />
          ) : (
            <div className="h-5 w-5 rounded-full bg-gradient-to-br from-red-700 to-zinc-800 flex items-center justify-center text-[9px] font-bold text-zinc-100 flex-shrink-0">
              {getInitials(course.creator.name)}
            </div>
          )}
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="text-sm text-zinc-400 truncate">{course.creator.name}</span>
            <span
              className={`h-2 w-2 rounded-full flex-shrink-0 ${beltDotMap[course.creator.belt] ?? "bg-zinc-600"}`}
            />
            <span className="text-xs text-zinc-600 hidden sm:inline flex-shrink-0">
              {course.creator.belt.charAt(0) + course.creator.belt.slice(1).toLowerCase()}
            </span>
          </div>
        </div>

        {/* Rating + students */}
        <div className="flex items-center gap-3">
          <StarRating rating={course.averageRating} />
          <span className="text-xs text-zinc-500">({course.reviewCount})</span>
          <span className="flex items-center gap-1 text-xs text-zinc-500 ml-auto">
            <Users className="h-3 w-3" />
            {course.studentCount}
          </span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-[10px] border-zinc-700 text-zinc-500">
            {course.category ?? "General"}
          </Badge>
          <span className="text-xs text-zinc-600">{course.lessons.length} lessons</span>
        </div>
        <span className="text-lg font-bold text-zinc-100">
          {course.price === 0 ? (
            <span className="text-green-400 text-base">Free</span>
          ) : (
            `$${course.price}`
          )}
        </span>
      </CardFooter>
    </Card>
  );
}

// ---------- Main Page ----------

export default function MarketplacePage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("popular");
  const [courses, setCourses] = useState<Course[]>([]);
  const [featuredCourses, setFeaturedCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [enrolling, setEnrolling] = useState(false);

  const buildParams = useCallback(() => {
    const params = new URLSearchParams();
    if (searchQuery.trim()) params.set("q", searchQuery.trim());
    if (activeCategory !== "All") params.set("category", activeCategory);
    if (sortBy) params.set("sort", sortBy);
    return params;
  }, [searchQuery, activeCategory, sortBy]);

  const fetchCourses = useCallback(async () => {
    setLoading(true);
    try {
      const params = buildParams();
      const res = await fetch(`/api/courses/search?${params.toString()}`);
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
  }, [buildParams]);

  const fetchFeatured = useCallback(async () => {
    try {
      const res = await fetch("/api/courses/search?featured=true&sort=popular");
      if (res.ok) {
        const data: Course[] = await res.json();
        setFeaturedCourses(data.slice(0, 4));
      }
    } catch {
      // silent
    }
  }, []);

  useEffect(() => {
    fetchFeatured();
  }, [fetchFeatured]);

  useEffect(() => {
    const timeout = setTimeout(fetchCourses, 300);
    return () => clearTimeout(timeout);
  }, [fetchCourses]);

  const hasFreePreview = (course: Course) => course.lessons.some((l) => l.free);

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
            className="pl-9 pr-8"
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

      {/* Editor's Picks (Featured) */}
      {featuredCourses.length > 0 && (
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="h-4 w-4 text-yellow-400" />
            <h2 className="text-lg font-semibold text-zinc-200">Editor&apos;s Picks</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featuredCourses.map((course) => (
              <div key={course.id} className="relative">
                <div className="absolute -top-2 -left-2 z-10">
                  <Badge className="bg-yellow-500 text-zinc-900 text-[10px] px-1.5 py-0.5 font-bold">
                    ⭐ Featured
                  </Badge>
                </div>
                <CourseCard course={course} onClick={() => setSelectedCourse(course)} />
              </div>
            ))}
          </div>
          <Separator className="bg-zinc-800 mt-8" />
        </section>
      )}

      {/* Category Filter Pills */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <ScrollArea className="w-full sm:w-auto">
          <div className="flex gap-2 pb-1 flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-red-600 text-white"
                    : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollArea>

        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-44 flex-shrink-0">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="popular">Most Popular</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="price-low">Price: Low → High</SelectItem>
            <SelectItem value="price-high">Price: High → Low</SelectItem>
            <SelectItem value="highest-rated">Top Rated</SelectItem>
            <SelectItem value="most-students">Most Students</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Results Count */}
      {!loading && (
        <p className="text-sm text-zinc-500">
          {courses.length} course{courses.length !== 1 && "s"} found
          {activeCategory !== "All" && ` in ${activeCategory}`}
          {searchQuery && ` for "${searchQuery}"`}
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
              {searchQuery || activeCategory !== "All" ? "No courses match your search" : "No courses yet"}
            </h3>
            <p className="mt-2 text-sm text-zinc-500 text-center max-w-sm">
              {searchQuery || activeCategory !== "All"
                ? "Try adjusting your filters or search query."
                : "Be the first to publish a course and share your BJJ knowledge with the community."}
            </p>
            {!searchQuery && activeCategory === "All" && (
              <Link href="/upload" className="mt-6">
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  <Upload className="mr-2 h-4 w-4" />
                  Publish a Course
                </Button>
              </Link>
            )}
          </CardContent>
        </Card>
      )}

      {/* Course Grid */}
      {!loading && courses.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onClick={() => setSelectedCourse(course)}
            />
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
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                {selectedCourse.featured && (
                  <Badge className="bg-yellow-500 text-zinc-900 text-xs">
                    ⭐ Featured
                  </Badge>
                )}
                {selectedCourse.beltLevel && (
                  <Badge
                    className={`${beltColorMap[selectedCourse.beltLevel] ?? ""} text-xs`}
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
                {selectedCourse.isNew && (
                  <Badge className="bg-blue-600/20 text-blue-400 border border-blue-800 text-xs">
                    NEW
                  </Badge>
                )}
              </div>
              <DialogTitle className="text-xl">
                {selectedCourse.title}
              </DialogTitle>
              <DialogDescription className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1">
                <span className="flex items-center gap-1.5">
                  {selectedCourse.creator.image ? (
                    <Image
                      src={selectedCourse.creator.image}
                      alt={selectedCourse.creator.name}
                      width={16}
                      height={16}
                      className="rounded-full"
                    />
                  ) : (
                    <span
                      className={`h-2 w-2 rounded-full ${beltDotMap[selectedCourse.creator.belt] ?? "bg-zinc-600"}`}
                    />
                  )}
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
              {/* Cover image */}
              {selectedCourse.coverImage && (
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src={selectedCourse.coverImage}
                    alt={selectedCourse.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {/* Description */}
              <p className="text-sm text-zinc-300 leading-relaxed">
                {selectedCourse.description}
              </p>

              {/* Guarantee */}
              <div className="flex items-center gap-2 rounded-lg bg-green-900/20 border border-green-800/40 p-3">
                <BadgeCheck className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-sm text-green-300">30-day money-back guarantee</span>
              </div>

              <Separator className="bg-zinc-800" />

              {/* Creator Info */}
              <div className="flex items-center gap-3 rounded-lg bg-zinc-900/50 border border-zinc-800/50 p-3">
                {selectedCourse.creator.image ? (
                  <Image
                    src={selectedCourse.creator.image}
                    alt={selectedCourse.creator.name}
                    width={40}
                    height={40}
                    className="rounded-full flex-shrink-0"
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
                      className={`h-2 w-2 rounded-full ${beltDotMap[selectedCourse.creator.belt] ?? "bg-zinc-600"}`}
                    />
                    <span className="text-xs text-zinc-500">
                      {selectedCourse.creator.belt.charAt(0) +
                        selectedCourse.creator.belt.slice(1).toLowerCase()}{" "}
                      Belt
                    </span>
                  </div>
                  {selectedCourse.creator.bio && (
                    <p className="text-xs text-zinc-500 mt-1 line-clamp-2">
                      {selectedCourse.creator.bio}
                    </p>
                  )}
                  {/* Social links */}
                  <div className="flex gap-2 mt-1">
                    {selectedCourse.creator.socialInstagram && (
                      <a
                        href={`https://instagram.com/${selectedCourse.creator.socialInstagram.replace("@", "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-pink-400 hover:underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Instagram
                      </a>
                    )}
                    {selectedCourse.creator.socialYoutube && (
                      <a
                        href={selectedCourse.creator.socialYoutube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-red-400 hover:underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        YouTube
                      </a>
                    )}
                  </div>
                </div>
                {selectedCourse.creator.username && (
                  <Link href={`/s/${selectedCourse.creator.username}`}>
                    <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-zinc-200">
                      <Globe className="h-4 w-4" />
                    </Button>
                  </Link>
                )}
              </div>

              <Separator className="bg-zinc-800" />

              {/* Lessons / Curriculum */}
              <div>
                <h4 className="text-sm font-semibold text-zinc-200 mb-1">
                  Curriculum ({selectedCourse.lessons.length} lessons)
                </h4>
                {totalDuration(selectedCourse.lessons) > 0 && (
                  <p className="text-xs text-zinc-500 mb-3">
                    Total: {Math.round(totalDuration(selectedCourse.lessons) / 60)} hours
                  </p>
                )}
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
                            <p className="text-sm text-zinc-200">{lesson.title}</p>
                            {lesson.duration && (
                              <p className="text-xs text-zinc-500">
                                {Math.ceil(lesson.duration / 60)} min
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
                  {selectedCourse.price === 0
                    ? <span className="text-green-400">Free</span>
                    : `$${selectedCourse.price}`}
                </span>
              </div>
              {hasFreePreview(selectedCourse) && (
                <Button
                  variant="outline"
                  onClick={() => {
                    router.push(`/courses/${selectedCourse.id}`);
                    setSelectedCourse(null);
                  }}
                  className="border-zinc-700 text-zinc-300 hover:bg-zinc-800"
                >
                  <Play className="h-4 w-4 mr-2" />
                  Preview
                </Button>
              )}
              <Button
                onClick={async () => {
                  setEnrolling(true);
                  try {
                    const res = await fetch(
                      `/api/courses/${selectedCourse.id}/enroll`,
                      { method: "POST" }
                    );
                    const data = await res.json();
                    if (data.checkoutUrl) {
                      window.location.href = data.checkoutUrl;
                    } else if (data.redirect) {
                      router.push(data.redirect);
                    }
                  } catch {
                    // handle error
                  } finally {
                    setEnrolling(false);
                  }
                }}
                disabled={enrolling}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                {enrolling ? (
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                ) : (
                  <Play className="h-4 w-4 mr-2" />
                )}
                {selectedCourse.price === 0 ? "Enroll Free" : "Enroll Now"}
              </Button>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
