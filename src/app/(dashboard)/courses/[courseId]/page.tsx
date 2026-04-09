"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Play,
  Check,
  CheckCircle,
  Lock,
  ChevronRight,
  ChevronLeft,
  List,
  X,
  Loader2,
  ArrowLeft,
  Star,
  Users,
  BadgeCheck,
  Globe,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { getVideoEmbed } from "@/lib/video-utils";

// ---------- Types ----------

interface Lesson {
  id: string;
  title: string;
  description: string | null;
  videoUrl: string | null;
  duration: number | null;
  order: number;
  free: boolean;
}

interface Review {
  id: string;
  rating: number;
  comment: string | null;
  createdAt: string;
  user: {
    id: string;
    name: string | null;
    image: string | null;
    belt: string;
  };
}

interface Creator {
  id: string;
  name: string;
  username: string;
  image: string | null;
  belt: string;
  bio: string | null;
  socialInstagram?: string | null;
  socialYoutube?: string | null;
}

interface CourseData {
  id: string;
  title: string;
  description: string | null;
  category: string | null;
  beltLevel: string | null;
  price: number;
  coverImage: string | null;
  creator: Creator;
  lessons: Lesson[];
  reviews: Review[];
  hasPurchased: boolean;
  isCreator: boolean;
  averageRating: number;
  studentCount: number;
  reviewCount: number;
}

interface RelatedCourse {
  id: string;
  title: string;
  price: number;
  coverImage: string | null;
  category: string | null;
  averageRating: number;
  studentCount: number;
  creator: { name: string; belt: string };
}

interface ProgressEntry {
  lessonId: string;
  completed: boolean;
}

const beltDotMap: Record<string, string> = {
  WHITE: "bg-white",
  BLUE: "bg-blue-500",
  PURPLE: "bg-purple-500",
  BROWN: "bg-amber-700",
  BLACK: "bg-zinc-800 ring-1 ring-zinc-600",
};

function getInitials(name: string): string {
  return name.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2);
}

// ---------- Video Player ----------

function VideoPlayer({
  url,
  onEnded,
  lessonId,
}: {
  url: string;
  onEnded?: () => void;
  lessonId: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const embed = getVideoEmbed(url);

  // Resume from localStorage
  const storageKey = `lesson-position-${lessonId}`;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const saved = localStorage.getItem(storageKey);
    if (saved) {
      const pos = parseFloat(saved);
      if (!isNaN(pos) && pos > 0) {
        video.currentTime = pos;
      }
    }

    const handleTimeUpdate = () => {
      if (video.currentTime > 5) {
        localStorage.setItem(storageKey, String(video.currentTime));
      }
    };

    const handleEnded = () => {
      localStorage.removeItem(storageKey);
      onEnded?.();
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
    };
  }, [storageKey, onEnded]);

  // Keyboard shortcuts for direct video
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.code === "Space") {
        e.preventDefault();
        video.paused ? video.play() : video.pause();
      } else if (e.code === "ArrowRight") {
        e.preventDefault();
        video.currentTime = Math.min(video.currentTime + 10, video.duration);
      } else if (e.code === "ArrowLeft") {
        e.preventDefault();
        video.currentTime = Math.max(video.currentTime - 10, 0);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (embed.type === "youtube" || embed.type === "vimeo" || embed.type === "drive") {
    return (
      <iframe
        ref={iframeRef}
        src={embed.embedUrl}
        className="absolute inset-0 h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowFullScreen
        frameBorder="0"
      />
    );
  }

  if (embed.type === "direct") {
    return (
      <video
        ref={videoRef}
        src={embed.embedUrl}
        className="absolute inset-0 h-full w-full"
        controls
        autoPlay
        playsInline
        onEnded={onEnded}
      />
    );
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center text-zinc-500">
      <p>Unsupported video format</p>
    </div>
  );
}

// ---------- Star Rating ----------

function StarDisplay({ rating, size = "sm" }: { rating: number; size?: "sm" | "lg" }) {
  const sz = size === "lg" ? "h-5 w-5" : "h-3.5 w-3.5";
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={`${sz} ${s <= Math.round(rating) ? "fill-yellow-500 text-yellow-500" : "text-zinc-700"}`}
        />
      ))}
    </div>
  );
}

function StarInput({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  const [hover, setHover] = useState(0);
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <button
          key={s}
          type="button"
          onMouseEnter={() => setHover(s)}
          onMouseLeave={() => setHover(0)}
          onClick={() => onChange(s)}
        >
          <Star
            className={`h-6 w-6 transition-colors ${
              s <= (hover || value) ? "fill-yellow-500 text-yellow-500" : "text-zinc-600"
            }`}
          />
        </button>
      ))}
    </div>
  );
}

// ---------- Main Page ----------

export default function CoursePlayerPage() {
  const params = useParams();
  const router = useRouter();
  const courseId = params.courseId as string;

  const [course, setCourse] = useState<CourseData | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);
  const [progress, setProgress] = useState<Record<string, boolean>>({});
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [markingComplete, setMarkingComplete] = useState(false);
  const [relatedCourses, setRelatedCourses] = useState<RelatedCourse[]>([]);

  // Review form state
  const [reviewRating, setReviewRating] = useState(0);
  const [reviewComment, setReviewComment] = useState("");
  const [submittingReview, setSubmittingReview] = useState(false);
  const [reviewSuccess, setReviewSuccess] = useState(false);

  const fetchCourse = useCallback(async () => {
    try {
      const res = await fetch(`/api/courses/${courseId}`);
      if (!res.ok) {
        router.push("/marketplace");
        return;
      }
      const data: CourseData = await res.json();
      setCourse(data);

      if (data.lessons.length > 0) {
        const sorted = [...data.lessons].sort((a, b) => a.order - b.order);
        setActiveLessonId(sorted[0].id);
      }

      // Fetch related courses
      if (data.creator.id) {
        const relRes = await fetch(
          `/api/courses/search?sort=popular&category=${encodeURIComponent(data.category || "")}`
        );
        if (relRes.ok) {
          const all: RelatedCourse[] = await relRes.json();
          setRelatedCourses(
            all.filter((c) => c.id !== courseId).slice(0, 3)
          );
        }
      }
    } catch {
      router.push("/marketplace");
    } finally {
      setLoading(false);
    }
  }, [courseId, router]);

  const fetchProgress = useCallback(async () => {
    try {
      const res = await fetch(`/api/courses/${courseId}/progress`);
      if (res.ok) {
        const data: ProgressEntry[] = await res.json();
        const map: Record<string, boolean> = {};
        data.forEach((p) => { if (p.completed) map[p.lessonId] = true; });
        setProgress(map);
      }
    } catch { /* ignore */ }
  }, [courseId]);

  useEffect(() => {
    fetchCourse();
    fetchProgress();
  }, [fetchCourse, fetchProgress]);

  const sortedLessons = course
    ? [...course.lessons].sort((a, b) => a.order - b.order)
    : [];

  const activeLesson = sortedLessons.find((l) => l.id === activeLessonId);
  const activeLessonIndex = sortedLessons.findIndex((l) => l.id === activeLessonId);
  const hasAccess = course?.hasPurchased || course?.isCreator;
  const completedCount = Object.values(progress).filter(Boolean).length;
  const totalLessons = sortedLessons.length;
  const progressPercent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  const canViewLesson = (lesson: Lesson) => lesson.free || hasAccess;

  const markComplete = useCallback(async (lessonId: string) => {
    if (!hasAccess) return;
    try {
      await fetch(`/api/courses/${courseId}/progress`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lessonId, completed: true }),
      });
      setProgress((prev) => ({ ...prev, [lessonId]: true }));
    } catch { /* ignore */ }
  }, [courseId, hasAccess]);

  const handleVideoEnded = useCallback(() => {
    if (!activeLesson) return;
    markComplete(activeLesson.id);
    // Auto-advance
    if (activeLessonIndex < sortedLessons.length - 1) {
      const next = sortedLessons[activeLessonIndex + 1];
      if (canViewLesson(next)) {
        setTimeout(() => setActiveLessonId(next.id), 1500);
      }
    }
  }, [activeLesson, activeLessonIndex, sortedLessons, markComplete, canViewLesson]);

  const toggleComplete = async () => {
    if (!activeLesson) return;
    setMarkingComplete(true);
    const newCompleted = !progress[activeLesson.id];
    try {
      await fetch(`/api/courses/${courseId}/progress`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lessonId: activeLesson.id, completed: newCompleted }),
      });
      setProgress((prev) => ({ ...prev, [activeLesson.id]: newCompleted }));
    } catch { /* ignore */ } finally {
      setMarkingComplete(false);
    }
  };

  const goToNextLesson = () => {
    if (activeLessonIndex < sortedLessons.length - 1) {
      const next = sortedLessons[activeLessonIndex + 1];
      if (canViewLesson(next)) setActiveLessonId(next.id);
    }
  };

  const goToPrevLesson = () => {
    if (activeLessonIndex > 0) {
      const prev = sortedLessons[activeLessonIndex - 1];
      if (canViewLesson(prev)) setActiveLessonId(prev.id);
    }
  };

  const submitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewRating) return;
    setSubmittingReview(true);
    try {
      const res = await fetch(`/api/courses/${courseId}/reviews`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rating: reviewRating, comment: reviewComment }),
      });
      if (res.ok) {
        setReviewSuccess(true);
        setReviewRating(0);
        setReviewComment("");
        fetchCourse();
      }
    } catch { /* ignore */ } finally {
      setSubmittingReview(false);
    }
  };

  if (loading) {
    return (
      <div className="flex h-[80vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-500" />
      </div>
    );
  }

  if (!course) return null;

  const LessonSidebar = () => (
    <div className="flex h-full flex-col">
      {/* Progress bar */}
      <div className="border-b border-zinc-800 p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-zinc-400">Progress</span>
          <span className="text-xs text-zinc-500">
            {completedCount}/{totalLessons} lessons
          </span>
        </div>
        <div className="h-2 w-full rounded-full bg-zinc-800">
          <div
            className="h-full rounded-full bg-red-600 transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <p className="mt-1 text-right text-xs text-zinc-500">{progressPercent}%</p>
      </div>

      {/* Lesson list */}
      <div className="flex-1 overflow-y-auto">
        {sortedLessons.map((lesson, index) => {
          const isActive = lesson.id === activeLessonId;
          const isCompleted = progress[lesson.id];
          const canView = canViewLesson(lesson);

          return (
            <button
              key={lesson.id}
              onClick={() => canView && setActiveLessonId(lesson.id)}
              disabled={!canView}
              className={`flex w-full items-center gap-3 border-b border-zinc-800/50 px-4 py-3 text-left transition-colors ${
                isActive
                  ? "bg-red-600/10 border-l-2 border-l-red-500"
                  : canView
                  ? "hover:bg-zinc-800/50"
                  : "opacity-50 cursor-not-allowed"
              }`}
            >
              <div className="flex-shrink-0">
                {isCompleted ? (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                ) : canView ? (
                  <div
                    className={`flex h-6 w-6 items-center justify-center rounded-full border text-xs ${
                      isActive
                        ? "border-red-500 text-red-400"
                        : "border-zinc-700 text-zinc-500"
                    }`}
                  >
                    {index + 1}
                  </div>
                ) : (
                  <Lock className="h-4 w-4 text-zinc-600" />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p
                  className={`text-sm truncate ${
                    isActive ? "text-zinc-100 font-medium" : "text-zinc-400"
                  }`}
                >
                  {lesson.title}
                </p>
                <div className="flex items-center gap-2">
                  {lesson.duration && (
                    <span className="text-xs text-zinc-600">
                      {Math.ceil(lesson.duration / 60)} min
                    </span>
                  )}
                  {lesson.free && (
                    <Badge className="bg-green-600/20 text-green-400 border-green-800 text-[10px] px-1 py-0">
                      Free
                    </Badge>
                  )}
                </div>
              </div>
              {isActive && <Play className="h-3 w-3 text-red-500 flex-shrink-0" />}
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="-m-4 lg:-m-6 flex flex-col bg-black min-h-screen">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-950 px-4 py-2">
        <div className="flex items-center gap-3">
          <Link href="/my-courses">
            <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-zinc-200 gap-1.5">
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">My Courses</span>
            </Button>
          </Link>
          <h1 className="text-sm font-medium text-zinc-300 truncate max-w-[300px]">
            {course.title}
          </h1>
        </div>
        <div className="flex items-center gap-2">
          {/* Progress pill */}
          <div className="hidden sm:flex items-center gap-2 rounded-full bg-zinc-900 border border-zinc-800 px-3 py-1">
            <div className="h-1.5 w-20 rounded-full bg-zinc-800">
              <div
                className="h-full rounded-full bg-red-600 transition-all"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="text-xs text-zinc-400">{progressPercent}%</span>
          </div>
          {/* Mobile sidebar toggle */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-zinc-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <List className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="flex flex-1">
        {/* Main content */}
        <div className="flex flex-1 flex-col overflow-y-auto">
          {/* Video area */}
          <div className="relative w-full bg-black" style={{ paddingBottom: "56.25%" }}>
            {activeLesson?.videoUrl && canViewLesson(activeLesson) ? (
              <VideoPlayer
                url={activeLesson.videoUrl}
                onEnded={handleVideoEnded}
                lessonId={activeLesson.id}
              />
            ) : activeLesson && !canViewLesson(activeLesson) ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-zinc-950">
                <Lock className="h-12 w-12 text-zinc-600" />
                <p className="text-zinc-400">Purchase this course to unlock</p>
                <Button
                  onClick={() => router.push("/marketplace")}
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  Go to Marketplace
                </Button>
              </div>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-950">
                <div className="text-center">
                  <Play className="mx-auto h-12 w-12 text-zinc-700" />
                  <p className="mt-2 text-sm text-zinc-500">
                    {activeLesson ? "No video URL set for this lesson" : "Select a lesson"}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Below video controls */}
          <div className="border-t border-zinc-800 bg-zinc-950 p-4 space-y-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-zinc-100">
                  {activeLesson?.title || "No lesson selected"}
                </h2>
                <p className="text-sm text-zinc-500">
                  Lesson {activeLessonIndex + 1} of {totalLessons} &middot; by{" "}
                  <Link
                    href={`/s/${course.creator.username}`}
                    className="text-red-400 hover:underline"
                  >
                    {course.creator.name}
                  </Link>
                </p>
              </div>
              <div className="flex items-center gap-2">
                {hasAccess && activeLesson && (
                  <Button
                    variant={progress[activeLesson.id] ? "outline" : "default"}
                    size="sm"
                    onClick={toggleComplete}
                    disabled={markingComplete}
                    className={
                      progress[activeLesson.id]
                        ? "border-green-700 text-green-400 hover:bg-green-900/20"
                        : "bg-green-600 hover:bg-green-700 text-white"
                    }
                  >
                    {markingComplete ? (
                      <Loader2 className="h-4 w-4 animate-spin mr-1.5" />
                    ) : (
                      <Check className="h-4 w-4 mr-1.5" />
                    )}
                    {progress[activeLesson.id] ? "Completed" : "Mark Complete"}
                  </Button>
                )}
                <div className="flex items-center gap-1">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={goToPrevLesson}
                    disabled={activeLessonIndex <= 0}
                    className="border-zinc-700"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={goToNextLesson}
                    disabled={activeLessonIndex >= sortedLessons.length - 1}
                    className="border-zinc-700 gap-1.5"
                  >
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {activeLesson?.description && (
              <p className="text-sm text-zinc-400 leading-relaxed">
                {activeLesson.description}
              </p>
            )}
            <p className="text-xs text-zinc-600">
              Keyboard: Space = play/pause | ← → = seek 10s (direct video only)
            </p>
          </div>

          {/* Course Info Section (below video) */}
          <div className="border-t border-zinc-800 bg-zinc-950 p-4 lg:p-6 space-y-8">
            {/* Creator block */}
            <div>
              <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">Instructor</h3>
              <div className="flex items-start gap-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
                {course.creator.image ? (
                  <Image
                    src={course.creator.image}
                    alt={course.creator.name}
                    width={56}
                    height={56}
                    className="rounded-full flex-shrink-0"
                  />
                ) : (
                  <div className="h-14 w-14 rounded-full bg-gradient-to-br from-red-700 to-zinc-800 flex items-center justify-center text-lg font-bold text-zinc-100 flex-shrink-0">
                    {getInitials(course.creator.name)}
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-semibold text-zinc-100">{course.creator.name}</p>
                    <div className="flex items-center gap-1.5">
                      <span className={`h-2.5 w-2.5 rounded-full ${beltDotMap[course.creator.belt] ?? "bg-zinc-600"}`} />
                      <span className="text-sm text-zinc-400">
                        {course.creator.belt.charAt(0) + course.creator.belt.slice(1).toLowerCase()} Belt
                      </span>
                    </div>
                  </div>
                  {course.creator.bio && (
                    <p className="text-sm text-zinc-400 mt-1 leading-relaxed">
                      {course.creator.bio}
                    </p>
                  )}
                  <div className="flex gap-3 mt-2 flex-wrap">
                    {course.creator.socialInstagram && (
                      <a
                        href={`https://instagram.com/${course.creator.socialInstagram.replace("@", "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-pink-400 hover:underline"
                      >
                        📸 Instagram
                      </a>
                    )}
                    {course.creator.socialYoutube && (
                      <a
                        href={course.creator.socialYoutube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-red-400 hover:underline"
                      >
                        ▶ YouTube
                      </a>
                    )}
                    {course.creator.username && (
                      <Link href={`/s/${course.creator.username}`} className="text-xs text-zinc-400 hover:text-zinc-200 flex items-center gap-1">
                        <Globe className="h-3 w-3" /> Creator Page
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Guarantee */}
            <div className="flex items-center gap-3 rounded-xl border border-green-800/40 bg-green-900/10 p-4">
              <BadgeCheck className="h-6 w-6 text-green-400 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-green-300">30-Day Money-Back Guarantee</p>
                <p className="text-xs text-zinc-500 mt-0.5">Not satisfied? Get a full refund within 30 days.</p>
              </div>
            </div>

            {/* Progress bar for enrolled users */}
            {hasAccess && totalLessons > 0 && (
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-zinc-200">Your Progress</span>
                  <span className="text-sm text-zinc-400">{completedCount}/{totalLessons} lessons</span>
                </div>
                <div className="h-3 w-full rounded-full bg-zinc-800">
                  <div
                    className="h-full rounded-full bg-red-600 transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                <p className="mt-1 text-sm text-zinc-400">{progressPercent}% complete</p>
              </div>
            )}

            {/* Reviews section */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">
                  Reviews ({course.reviewCount})
                </h3>
                {course.averageRating > 0 && (
                  <div className="flex items-center gap-2">
                    <StarDisplay rating={course.averageRating} size="lg" />
                    <span className="text-lg font-bold text-zinc-100">{course.averageRating.toFixed(1)}</span>
                    <span className="text-sm text-zinc-500">/ 5</span>
                  </div>
                )}
              </div>

              {/* Review form (only for purchasers) */}
              {hasAccess && !course.isCreator && (
                <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 mb-4">
                  <p className="text-sm font-medium text-zinc-200 mb-3">Leave a Review</p>
                  {reviewSuccess ? (
                    <p className="text-sm text-green-400">✓ Thanks for your review!</p>
                  ) : (
                    <form onSubmit={submitReview} className="space-y-3">
                      <StarInput value={reviewRating} onChange={setReviewRating} />
                      <Textarea
                        placeholder="Share your thoughts about this course..."
                        value={reviewComment}
                        onChange={(e) => setReviewComment(e.target.value)}
                        rows={3}
                        className="bg-zinc-800 border-zinc-700 text-zinc-100 text-sm"
                      />
                      <Button
                        type="submit"
                        size="sm"
                        disabled={!reviewRating || submittingReview}
                        className="bg-red-600 hover:bg-red-700 text-white"
                      >
                        {submittingReview ? (
                          <Loader2 className="h-4 w-4 animate-spin mr-1.5" />
                        ) : (
                          <Send className="h-4 w-4 mr-1.5" />
                        )}
                        Submit Review
                      </Button>
                    </form>
                  )}
                </div>
              )}

              {/* Review list */}
              {course.reviews && course.reviews.length > 0 ? (
                <div className="space-y-3">
                  {course.reviews.slice(0, 5).map((review) => (
                    <div key={review.id} className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-4">
                      <div className="flex items-start gap-3">
                        {review.user.image ? (
                          <Image
                            src={review.user.image}
                            alt={review.user.name || ""}
                            width={36}
                            height={36}
                            className="rounded-full flex-shrink-0"
                          />
                        ) : (
                          <div className="h-9 w-9 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-400 flex-shrink-0">
                            {getInitials(review.user.name || "?")}
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-sm font-medium text-zinc-200">{review.user.name || "User"}</span>
                            <div className="flex items-center gap-1">
                              <span className={`h-2 w-2 rounded-full ${beltDotMap[review.user.belt] ?? "bg-zinc-600"}`} />
                              <span className="text-xs text-zinc-500">
                                {review.user.belt.charAt(0) + review.user.belt.slice(1).toLowerCase()}
                              </span>
                            </div>
                            <span className="text-xs text-zinc-600">
                              {new Date(review.createdAt).toLocaleDateString()}
                            </span>
                          </div>
                          <StarDisplay rating={review.rating} />
                          {review.comment && (
                            <p className="text-sm text-zinc-400 mt-1 leading-relaxed">
                              {review.comment}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-zinc-500 italic">No reviews yet. Be the first!</p>
              )}
            </div>

            {/* Related courses */}
            {relatedCourses.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">Related Courses</h3>
                <div className="grid gap-3 sm:grid-cols-3">
                  {relatedCourses.map((rc) => (
                    <Link key={rc.id} href={`/courses/${rc.id}`}>
                      <div className="rounded-xl border border-zinc-800 hover:border-zinc-700 bg-zinc-900/50 p-3 transition-colors group">
                        {rc.coverImage ? (
                          <div className="relative h-24 rounded-lg overflow-hidden mb-2">
                            <Image src={rc.coverImage} alt={rc.title} fill className="object-cover" />
                          </div>
                        ) : (
                          <div className="h-24 rounded-lg bg-zinc-800 flex items-center justify-center mb-2">
                            <Play className="h-6 w-6 text-zinc-600" />
                          </div>
                        )}
                        <p className="text-sm font-medium text-zinc-200 group-hover:text-red-400 transition-colors line-clamp-2">
                          {rc.title}
                        </p>
                        <p className="text-xs text-zinc-500 mt-1">{rc.creator.name}</p>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                            <span className="text-xs text-zinc-400">{rc.averageRating.toFixed(1)}</span>
                          </div>
                          <span className="text-sm font-bold text-zinc-100">
                            {rc.price === 0 ? <span className="text-green-400 text-xs">Free</span> : `$${rc.price}`}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Desktop sidebar */}
        <aside className="hidden lg:flex w-80 flex-col border-l border-zinc-800 bg-zinc-950 sticky top-0 h-screen">
          <LessonSidebar />
        </aside>

        {/* Mobile sidebar overlay */}
        {sidebarOpen && (
          <>
            <div
              className="fixed inset-0 z-40 bg-black/60 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
            <aside className="fixed inset-x-0 bottom-0 z-50 h-[70vh] rounded-t-2xl border-t border-zinc-800 bg-zinc-950 lg:hidden">
              <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3">
                <h3 className="text-sm font-semibold text-zinc-200">Lessons</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSidebarOpen(false)}
                  className="text-zinc-400"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <div className="overflow-y-auto h-[calc(70vh-3.5rem)]">
                <LessonSidebar />
              </div>
            </aside>
          </>
        )}
      </div>
    </div>
  );
}
