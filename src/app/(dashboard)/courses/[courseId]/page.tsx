"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getVideoEmbed } from "@/lib/video-utils";

interface Lesson {
  id: string;
  title: string;
  description: string | null;
  videoUrl: string | null;
  duration: number | null;
  order: number;
  free: boolean;
}

interface CourseData {
  id: string;
  title: string;
  description: string | null;
  creator: { id: string; name: string; username: string };
  lessons: Lesson[];
  hasPurchased: boolean;
  isCreator: boolean;
}

interface ProgressEntry {
  lessonId: string;
  completed: boolean;
}

function VideoPlayer({ url }: { url: string }) {
  const embed = getVideoEmbed(url);

  if (embed.type === "youtube" || embed.type === "vimeo" || embed.type === "drive") {
    return (
      <iframe
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
        src={embed.embedUrl}
        className="absolute inset-0 h-full w-full"
        controls
        autoPlay
        playsInline
      />
    );
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center text-zinc-500">
      <p>Unsupported video format</p>
    </div>
  );
}

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

  const fetchCourse = useCallback(async () => {
    try {
      const res = await fetch(`/api/courses/${courseId}`);
      if (!res.ok) {
        router.push("/marketplace");
        return;
      }
      const data: CourseData = await res.json();
      setCourse(data);

      // Set first lesson as active
      if (data.lessons.length > 0) {
        const sorted = [...data.lessons].sort((a, b) => a.order - b.order);
        setActiveLessonId(sorted[0].id);
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
        data.forEach((p) => {
          if (p.completed) map[p.lessonId] = true;
        });
        setProgress(map);
      }
    } catch {
      // ignore
    }
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

  const canViewLesson = (lesson: Lesson) => {
    return lesson.free || hasAccess;
  };

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
    } catch {
      // ignore
    } finally {
      setMarkingComplete(false);
    }
  };

  const goToNextLesson = () => {
    if (activeLessonIndex < sortedLessons.length - 1) {
      const next = sortedLessons[activeLessonIndex + 1];
      if (canViewLesson(next)) {
        setActiveLessonId(next.id);
      }
    }
  };

  const goToPrevLesson = () => {
    if (activeLessonIndex > 0) {
      const prev = sortedLessons[activeLessonIndex - 1];
      if (canViewLesson(prev)) {
        setActiveLessonId(prev.id);
      }
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
    <div className="-m-4 lg:-m-6 flex h-[calc(100vh-4rem)] flex-col bg-black">
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

      <div className="flex flex-1 overflow-hidden">
        {/* Main content */}
        <div className="flex flex-1 flex-col overflow-y-auto">
          {/* Video area */}
          <div className="relative w-full bg-black" style={{ paddingBottom: "56.25%" }}>
            {activeLesson?.videoUrl && canViewLesson(activeLesson) ? (
              <VideoPlayer url={activeLesson.videoUrl} />
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
          </div>
        </div>

        {/* Desktop sidebar */}
        <aside className="hidden lg:flex w-80 flex-col border-l border-zinc-800 bg-zinc-950">
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
