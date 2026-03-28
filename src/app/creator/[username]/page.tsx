import { Star, Users, BookOpen, Award } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

// Mock creator data
const mockCreator = {
  name: "Professor Andre Silva",
  username: "andresilva",
  belt: "BLACK",
  stripes: 3,
  bio: "3rd degree black belt with over 20 years of experience in Brazilian Jiu-Jitsu. IBJJF World Champion and Pan American gold medalist. Passionate about sharing the art and helping practitioners of all levels reach their full potential.",
  image: null,
  stats: {
    courses: 5,
    students: 1247,
    rating: 4.8,
  },
};

const mockCourses = [
  {
    id: "1",
    title: "Complete Guard System",
    price: 79,
    rating: 4.8,
    students: 423,
    category: "Guard",
    beltLevel: "BLUE",
    description:
      "Master every guard position from closed guard to spider guard, lasso, and De La Riva.",
  },
  {
    id: "2",
    title: "Pressure Passing Masterclass",
    price: 89,
    rating: 4.9,
    students: 312,
    category: "Passing",
    beltLevel: "PURPLE",
    description:
      "Dominate from top with systematic pressure passing sequences.",
  },
  {
    id: "3",
    title: "Submission Chain Attacks",
    price: 59,
    rating: 4.6,
    students: 289,
    category: "Submissions",
    beltLevel: "BLUE",
    description:
      "Link submissions together into devastating chains your opponents can't escape.",
  },
  {
    id: "4",
    title: "No-Gi Fundamentals",
    price: 49,
    rating: 4.7,
    students: 223,
    category: "Fundamentals",
    beltLevel: "WHITE",
    description:
      "Build a rock-solid no-gi foundation from the ground up.",
  },
];

const beltColorMap: Record<string, string> = {
  WHITE: "bg-white text-zinc-900",
  BLUE: "bg-blue-600 text-white",
  PURPLE: "bg-purple-700 text-white",
  BROWN: "bg-amber-800 text-white",
  BLACK: "bg-zinc-900 text-white border border-zinc-600",
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= Math.round(rating)
              ? "fill-yellow-500 text-yellow-500"
              : "text-zinc-700"
          }`}
        />
      ))}
      <span className="ml-1 text-sm text-zinc-400">{rating}</span>
    </div>
  );
}

export default function CreatorStorefront({
  params,
}: {
  params: { username: string };
}) {
  // Next.js dynamic route params - used by framework for routing
  void params;
  const creator = mockCreator;
  const courses = mockCourses;

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Navigation */}
      <nav className="border-b border-zinc-800/50 bg-[#0a0a0a]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-600 font-bold text-white text-sm">
              AI
            </div>
            <span className="text-lg font-bold tracking-tight text-white">
              AIBJJ
            </span>
          </Link>
          <Link
            href="/marketplace"
            className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            Browse Marketplace
          </Link>
        </div>
      </nav>

      {/* Creator Profile Header */}
      <div className="border-b border-zinc-800/50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left gap-6">
            {/* Avatar */}
            <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-zinc-800 ring-2 ring-red-600/50">
              <span className="text-3xl font-bold text-zinc-300">
                {creator.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>

            {/* Info */}
            <div className="space-y-3 flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <h1 className="text-2xl font-bold text-zinc-100">
                  {creator.name}
                </h1>
                <Badge
                  className={`${beltColorMap[creator.belt]} w-fit`}
                >
                  {creator.belt.charAt(0) + creator.belt.slice(1).toLowerCase()}{" "}
                  Belt {creator.stripes > 0 && `${"I".repeat(creator.stripes)}`}
                </Badge>
              </div>

              <p className="max-w-2xl text-sm text-zinc-400 leading-relaxed">
                {creator.bio}
              </p>

              {/* Stats */}
              <div className="flex items-center gap-6 pt-2">
                <div className="flex items-center gap-2 text-sm">
                  <BookOpen className="h-4 w-4 text-red-500" />
                  <span className="font-semibold text-zinc-100">
                    {creator.stats.courses}
                  </span>
                  <span className="text-zinc-500">Courses</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-red-500" />
                  <span className="font-semibold text-zinc-100">
                    {creator.stats.students.toLocaleString()}
                  </span>
                  <span className="text-zinc-500">Students</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                  <span className="font-semibold text-zinc-100">
                    {creator.stats.rating}
                  </span>
                  <span className="text-zinc-500">Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-xl font-bold text-zinc-100 mb-6">
          Courses by {creator.name.split(" ").pop()}
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="border-zinc-800 overflow-hidden group hover:border-zinc-700 transition-colors cursor-pointer"
            >
              {/* Cover Image Placeholder */}
              <div className="relative h-44 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                <div className="text-center">
                  <Award className="mx-auto h-10 w-10 text-zinc-700 group-hover:text-red-600/50 transition-colors" />
                  <p className="mt-2 text-xs text-zinc-600">Course Preview</p>
                </div>
                <Badge
                  className={`absolute top-3 right-3 ${beltColorMap[course.beltLevel]} text-xs`}
                >
                  {course.beltLevel.charAt(0) +
                    course.beltLevel.slice(1).toLowerCase()}
                </Badge>
                <Badge
                  variant="secondary"
                  className="absolute top-3 left-3 text-xs"
                >
                  {course.category}
                </Badge>
              </div>

              <CardContent className="p-4 space-y-2">
                <h3 className="font-semibold text-zinc-100 group-hover:text-red-400 transition-colors">
                  {course.title}
                </h3>
                <p className="text-sm text-zinc-400 line-clamp-2">
                  {course.description}
                </p>
              </CardContent>

              <CardFooter className="p-4 pt-0 flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <StarRating rating={course.rating} />
                  <span className="text-xs text-zinc-500">
                    {course.students} students
                  </span>
                </div>
                <span className="text-lg font-bold text-zinc-100">
                  ${course.price}
                </span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-zinc-800/50 py-8 text-center">
        <p className="text-sm text-zinc-500">
          Powered by{" "}
          <Link href="/" className="text-red-500 hover:text-red-400">
            AIBJJ
          </Link>
        </p>
      </div>
    </div>
  );
}
