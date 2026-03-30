"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import {
  Play,
  Plus,
  BookOpen,
  ShoppingBag,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CourseWithProgress {
  id: string;
  title: string;
  coverImage: string | null;
  category: string | null;
  beltLevel: string | null;
  creator: { id: string; name: string };
  lessons: { id: string }[];
  completedLessons: number;
  totalLessons: number;
  isOwned: boolean; // true = created by user
}

const beltColorMap: Record<string, string> = {
  WHITE: "bg-white text-zinc-900",
  BLUE: "bg-blue-600 text-white",
  PURPLE: "bg-purple-700 text-white",
  BROWN: "bg-amber-800 text-white",
  BLACK: "bg-zinc-900 text-white border border-zinc-600",
};

export default function MyCoursesPage() {
  const { data: session } = useSession();
  const [courses, setCourses] = useState<CourseWithProgress[]>([]);
  const [loading, setLoading] = useState(true);

  const user = session?.user;
  const isCreator = (user as { role?: string })?.role === "CREATOR";

  useEffect(() => {
    async function fetchMyCourses() {
      try {
        const res = await fetch("/api/courses/my-courses");
        if (res.ok) {
          const data = await res.json();
          setCourses(data);
        }
      } catch {
        // ignore
      } finally {
        setLoading(false);
      }
    }
    fetchMyCourses();
  }, []);

  if (loading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-500" />
      </div>
    );
  }

  const purchasedCourses = courses.filter((c) => !c.isOwned);
  const createdCourses = courses.filter((c) => c.isOwned);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-zinc-100">My Courses</h1>
          <p className="text-sm text-zinc-400 mt-1">
            {courses.length === 0
              ? "Start learning by enrolling in a course"
              : `${courses.length} course${courses.length !== 1 ? "s" : ""}`}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {isCreator && (
            <Link href="/upload">
              <Button variant="outline" className="border-zinc-700 gap-1.5">
                <Plus className="h-4 w-4" />
                Create Course
              </Button>
            </Link>
          )}
          <Link href="/marketplace">
            <Button className="bg-red-600 hover:bg-red-700 text-white gap-1.5">
              <ShoppingBag className="h-4 w-4" />
              Browse
            </Button>
          </Link>
        </div>
      </div>

      {/* Empty state */}
      {courses.length === 0 && (
        <Card className="border-zinc-800 border-dashed">
          <CardContent className="flex flex-col items-center justify-center py-20">
            <div className="rounded-full bg-zinc-800/50 p-4 mb-4">
              <BookOpen className="h-10 w-10 text-zinc-600" />
            </div>
            <h3 className="text-lg font-semibold text-zinc-300">
              No courses yet
            </h3>
            <p className="mt-2 text-sm text-zinc-500 text-center max-w-sm">
              Explore the marketplace to find world-class BJJ instruction from
              top creators.
            </p>
            <Link href="/marketplace" className="mt-6">
              <Button className="bg-red-600 hover:bg-red-700 text-white gap-2">
                <ShoppingBag className="h-4 w-4" />
                Browse Marketplace
              </Button>
            </Link>
          </CardContent>
        </Card>
      )}

      {/* Enrolled Courses */}
      {purchasedCourses.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold text-zinc-200 mb-4">
            Enrolled Courses
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {purchasedCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>
      )}

      {/* Created Courses */}
      {createdCourses.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold text-zinc-200 mb-4">
            My Created Courses
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {createdCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function CourseCard({ course }: { course: CourseWithProgress }) {
  const progressPercent =
    course.totalLessons > 0
      ? Math.round((course.completedLessons / course.totalLessons) * 100)
      : 0;

  return (
    <Link href={`/courses/${course.id}`}>
      <Card className="border-zinc-800 overflow-hidden group hover:border-zinc-700 transition-colors cursor-pointer">
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
          {course.beltLevel && (
            <Badge
              className={`absolute top-3 right-3 ${
                beltColorMap[course.beltLevel] ?? ""
              } text-xs`}
            >
              {course.beltLevel.charAt(0) + course.beltLevel.slice(1).toLowerCase()}
            </Badge>
          )}
          {course.isOwned && (
            <Badge className="absolute top-3 left-3 bg-zinc-800 text-zinc-300 text-xs">
              Created
            </Badge>
          )}
        </div>

        <CardContent className="p-4 space-y-3">
          <h3 className="font-semibold text-zinc-100 group-hover:text-red-400 transition-colors line-clamp-1">
            {course.title}
          </h3>
          <p className="text-sm text-zinc-500">{course.creator.name}</p>

          {/* Progress bar */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-zinc-500">
                {course.completedLessons}/{course.totalLessons} lessons
              </span>
              <span className="text-xs text-zinc-400">{progressPercent}%</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-zinc-800">
              <div
                className="h-full rounded-full bg-red-600 transition-all"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          <Button
            size="sm"
            className="w-full bg-red-600/10 text-red-400 hover:bg-red-600/20 border border-red-900/30"
          >
            <Play className="h-3.5 w-3.5 mr-1.5" />
            {progressPercent > 0 ? "Continue" : "Start Learning"}
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
}
