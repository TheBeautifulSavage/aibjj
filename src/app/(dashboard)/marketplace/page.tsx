"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  Star,
  Users,
  ShoppingCart,
  Play,
  Filter,
  BookOpen,
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

// Mock marketplace courses
const mockCourses = [
  {
    id: "1",
    title: "Complete Guard System",
    creator: "Andre Silva",
    creatorUsername: "andresilva",
    price: 79,
    rating: 4.8,
    students: 423,
    category: "Guard",
    beltLevel: "BLUE",
    description:
      "Master every guard position from closed guard to spider guard, lasso, and De La Riva. This comprehensive system covers sweeps, submissions, and retention strategies that will transform your bottom game. Includes detailed breakdowns of competition-tested sequences.",
    lessons: [
      { title: "Introduction to Guard Philosophy", duration: 12, free: true },
      { title: "Closed Guard Fundamentals", duration: 25, free: false },
      { title: "Spider Guard Entries", duration: 18, free: false },
      { title: "De La Riva Sweeps", duration: 22, free: false },
      { title: "Lasso Guard Attacks", duration: 20, free: false },
      { title: "Guard Retention Drills", duration: 15, free: false },
    ],
    reviews: [
      { user: "Mike T.", rating: 5, comment: "Best guard instructional I've ever seen. Changed my entire bottom game." },
      { user: "Sarah K.", rating: 5, comment: "Incredibly detailed. The spider guard section alone is worth the price." },
      { user: "James R.", rating: 4, comment: "Great content, would love more competition footage examples." },
    ],
  },
  {
    id: "2",
    title: "Pressure Passing Masterclass",
    creator: "Roberto Souza",
    creatorUsername: "robertosouza",
    price: 89,
    rating: 4.9,
    students: 312,
    category: "Passing",
    beltLevel: "PURPLE",
    description:
      "Dominate from the top position with systematic pressure passing. Learn to shut down every guard with heavy passing sequences that chain together seamlessly. From headquarters position to smash pass, over-under, and stack passes.",
    lessons: [
      { title: "Pressure Passing Principles", duration: 15, free: true },
      { title: "Headquarters Position", duration: 20, free: false },
      { title: "Over-Under Pass System", duration: 28, free: false },
      { title: "Stack Pass Variations", duration: 22, free: false },
      { title: "Smash Pass Details", duration: 18, free: false },
    ],
    reviews: [
      { user: "David L.", rating: 5, comment: "My passing has improved dramatically. Roberto explains concepts so clearly." },
      { user: "Tom W.", rating: 5, comment: "Worth every penny. The over-under section is a masterpiece." },
    ],
  },
  {
    id: "3",
    title: "Submission Chain Attacks",
    creator: "Andre Silva",
    creatorUsername: "andresilva",
    price: 59,
    rating: 4.6,
    students: 289,
    category: "Submissions",
    beltLevel: "BLUE",
    description:
      "Link submissions together into devastating chains your opponents cannot escape. Learn to flow between armbars, triangles, kimuras, and omoplatas with precision timing.",
    lessons: [
      { title: "The Chain Attack Philosophy", duration: 10, free: true },
      { title: "Armbar-Triangle Chain", duration: 24, free: false },
      { title: "Kimura Trap System", duration: 20, free: false },
      { title: "Omoplata Transitions", duration: 18, free: false },
    ],
    reviews: [
      { user: "Chris P.", rating: 5, comment: "My submission rate has doubled since watching this." },
      { user: "Anna M.", rating: 4, comment: "Great for blue belts looking to add depth to their attacks." },
    ],
  },
  {
    id: "4",
    title: "Competition Gameplan Blueprint",
    creator: "Lucas Mendes",
    creatorUsername: "lucasmendes",
    price: 69,
    rating: 4.5,
    students: 187,
    category: "Competition",
    beltLevel: "PURPLE",
    description:
      "Build a winning competition strategy from takedowns to submissions. Covers game planning, point strategy, time management, and mental preparation for tournament success.",
    lessons: [
      { title: "Building Your A-Game", duration: 14, free: true },
      { title: "Takedown Strategy for Points", duration: 22, free: false },
      { title: "Advantage Scenarios", duration: 18, free: false },
      { title: "Mental Preparation", duration: 16, free: false },
      { title: "Competition Day Protocol", duration: 12, free: false },
    ],
    reviews: [
      { user: "Ryan S.", rating: 5, comment: "Won my first tournament after applying these strategies!" },
      { user: "Pat K.", rating: 4, comment: "Solid content for anyone preparing to compete." },
    ],
  },
  {
    id: "5",
    title: "No-Gi Fundamentals",
    creator: "Andre Silva",
    creatorUsername: "andresilva",
    price: 49,
    rating: 4.7,
    students: 223,
    category: "Fundamentals",
    beltLevel: "WHITE",
    description:
      "Build a rock-solid no-gi foundation from the ground up. Perfect for beginners and those transitioning from gi to no-gi. Covers grips, clinch work, and fundamental positions.",
    lessons: [
      { title: "No-Gi Gripping Basics", duration: 12, free: true },
      { title: "Clinch Work & Takedowns", duration: 20, free: false },
      { title: "Top Control Without Grips", duration: 18, free: false },
      { title: "Escapes & Movement", duration: 22, free: false },
    ],
    reviews: [
      { user: "Newbie Nick", rating: 5, comment: "Perfect for getting started with no-gi. Very clear instruction." },
      { user: "Laura B.", rating: 5, comment: "Wish I had this when I started. Excellent fundamentals." },
    ],
  },
  {
    id: "6",
    title: "Berimbolo & Modern Guard",
    creator: "Felipe Costa",
    creatorUsername: "felipecosta",
    price: 79,
    rating: 4.4,
    students: 156,
    category: "Guard",
    beltLevel: "PURPLE",
    description:
      "Explore the modern guard game with berimbolo, kiss of the dragon, and crab ride systems. High-level techniques broken down step by step for intermediate to advanced practitioners.",
    lessons: [
      { title: "Modern Guard Overview", duration: 10, free: true },
      { title: "Berimbolo Mechanics", duration: 26, free: false },
      { title: "Kiss of the Dragon", duration: 22, free: false },
      { title: "Crab Ride to Back", duration: 20, free: false },
      { title: "Competition Applications", duration: 18, free: false },
    ],
    reviews: [
      { user: "John D.", rating: 5, comment: "Finally understand the berimbolo. Incredible detail." },
      { user: "Kyle M.", rating: 4, comment: "Advanced material but explained very well." },
    ],
  },
  {
    id: "7",
    title: "Leg Lock Encyclopedia",
    creator: "Roberto Souza",
    creatorUsername: "robertosouza",
    price: 99,
    rating: 4.8,
    students: 398,
    category: "Submissions",
    beltLevel: "BROWN",
    description:
      "The most comprehensive leg lock system available. From heel hooks to knee bars, toe holds, and calf slicers. Covers entries, finishing mechanics, and the leg lock game in both gi and no-gi.",
    lessons: [
      { title: "Leg Lock Fundamentals", duration: 15, free: true },
      { title: "Straight Ankle Lock Mastery", duration: 20, free: false },
      { title: "Heel Hook System", duration: 30, free: false },
      { title: "Knee Bar Entries", duration: 24, free: false },
      { title: "Ashi Garami Positions", duration: 22, free: false },
      { title: "Leg Lock Defense", duration: 18, free: false },
      { title: "Competition Leg Locks", duration: 20, free: false },
    ],
    reviews: [
      { user: "Leg Lock Larry", rating: 5, comment: "The most complete leg lock resource I've found anywhere." },
      { user: "Beth A.", rating: 5, comment: "Roberto's heel hook details are insane. Game-changer." },
    ],
  },
  {
    id: "8",
    title: "Wrestling for BJJ",
    creator: "Lucas Mendes",
    creatorUsername: "lucasmendes",
    price: 59,
    rating: 4.3,
    students: 201,
    category: "Takedowns",
    beltLevel: "WHITE",
    description:
      "Develop a strong takedown game specifically designed for BJJ competition. Covers single legs, double legs, snap downs, and how to chain wrestling into your BJJ game.",
    lessons: [
      { title: "Wrestling Stance for BJJ", duration: 12, free: true },
      { title: "Single Leg Variations", duration: 22, free: false },
      { title: "Double Leg Mastery", duration: 20, free: false },
      { title: "Snap Downs & Front Headlocks", duration: 18, free: false },
      { title: "Wrestling-to-Submission Chains", duration: 16, free: false },
    ],
    reviews: [
      { user: "Dan F.", rating: 4, comment: "Great wrestling basics tailored for BJJ. Practical and effective." },
      { user: "Sam T.", rating: 5, comment: "No more pulling guard! My standup game is 10x better." },
    ],
  },
  {
    id: "9",
    title: "Half Guard Mastery",
    creator: "Felipe Costa",
    creatorUsername: "felipecosta",
    price: 69,
    rating: 4.7,
    students: 267,
    category: "Guard",
    beltLevel: "BLUE",
    description:
      "Transform your half guard from a survival position into your most dangerous weapon. Covers underhook battles, sweeps, deep half, lockdown, and submission entries.",
    lessons: [
      { title: "Half Guard Principles", duration: 14, free: true },
      { title: "The Underhook Battle", duration: 20, free: false },
      { title: "Deep Half Guard System", duration: 24, free: false },
      { title: "Lockdown Attacks", duration: 18, free: false },
      { title: "Half Guard Sweeps", duration: 22, free: false },
    ],
    reviews: [
      { user: "Half Guard Harry", rating: 5, comment: "My half guard was always defensive. Now it's my A-game." },
      { user: "Mia L.", rating: 4, comment: "Excellent deep half content." },
    ],
  },
  {
    id: "10",
    title: "Mount Escapes & Survival",
    creator: "Lucas Mendes",
    creatorUsername: "lucasmendes",
    price: 29,
    rating: 4.2,
    students: 345,
    category: "Fundamentals",
    beltLevel: "WHITE",
    description:
      "Never get stuck under mount again. Learn systematic escapes, frames, and survival strategies that work at every level. The essential defense course every practitioner needs.",
    lessons: [
      { title: "Survival Posture", duration: 10, free: true },
      { title: "Elbow-Knee Escape", duration: 18, free: false },
      { title: "Bridge & Roll Variations", duration: 16, free: false },
      { title: "Defending Submissions from Bottom", duration: 20, free: false },
    ],
    reviews: [
      { user: "White Belt Will", rating: 5, comment: "Finally I can escape mount. This should be mandatory viewing." },
      { user: "Jen C.", rating: 4, comment: "Simple, effective, and well-taught." },
    ],
  },
];

const categoryTabs = [
  "All",
  "Guard",
  "Passing",
  "Submissions",
  "Takedowns",
  "Competition",
  "Fundamentals",
];

const beltColorMap: Record<string, string> = {
  WHITE: "bg-white text-zinc-900",
  BLUE: "bg-blue-600 text-white",
  PURPLE: "bg-purple-700 text-white",
  BROWN: "bg-amber-800 text-white",
  BLACK: "bg-zinc-900 text-white border border-zinc-600",
};

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
      <span className="ml-1 text-sm text-zinc-400">{rating}</span>
    </div>
  );
}

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("popular");
  const [selectedCourse, setSelectedCourse] = useState<(typeof mockCourses)[0] | null>(null);

  const filteredCourses = useMemo(() => {
    let courses = [...mockCourses];

    // Filter by category
    if (activeCategory !== "All") {
      courses = courses.filter((c) => c.category === activeCategory);
    }

    // Filter by search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      courses = courses.filter(
        (c) =>
          c.title.toLowerCase().includes(query) ||
          c.creator.toLowerCase().includes(query) ||
          c.description.toLowerCase().includes(query)
      );
    }

    // Sort
    switch (sortBy) {
      case "popular":
        courses.sort((a, b) => b.students - a.students);
        break;
      case "newest":
        courses.sort((a, b) => parseInt(b.id) - parseInt(a.id));
        break;
      case "price-low":
        courses.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        courses.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        courses.sort((a, b) => b.rating - a.rating);
        break;
    }

    return courses;
  }, [searchQuery, activeCategory, sortBy]);

  return (
    <div className="space-y-6">
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

      {/* Filters Row */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Category Tabs */}
        <ScrollArea className="w-full sm:w-auto">
          <Tabs
            value={activeCategory}
            onValueChange={setActiveCategory}
          >
            <TabsList className="h-auto flex-wrap">
              {categoryTabs.map((cat) => (
                <TabsTrigger key={cat} value={cat} className="text-xs sm:text-sm">
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </ScrollArea>

        {/* Sort */}
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
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Results Count */}
      <p className="text-sm text-zinc-500">
        {filteredCourses.length} course{filteredCourses.length !== 1 && "s"} found
      </p>

      {/* Course Grid */}
      {filteredCourses.length === 0 ? (
        <Card className="border-zinc-800">
          <CardContent className="flex flex-col items-center justify-center py-16">
            <BookOpen className="h-12 w-12 text-zinc-700" />
            <h3 className="mt-4 text-lg font-semibold text-zinc-300">
              No courses found
            </h3>
            <p className="mt-2 text-sm text-zinc-500">
              Try adjusting your search or filters.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => (
            <Card
              key={course.id}
              className="border-zinc-800 overflow-hidden group hover:border-zinc-700 transition-colors cursor-pointer"
              onClick={() => setSelectedCourse(course)}
            >
              {/* Cover Placeholder */}
              <div className="relative h-40 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                <Play className="h-10 w-10 text-zinc-700 group-hover:text-red-600/60 transition-colors" />
                <Badge
                  className={`absolute top-3 right-3 ${beltColorMap[course.beltLevel]} text-xs`}
                >
                  {course.beltLevel.charAt(0) +
                    course.beltLevel.slice(1).toLowerCase()}
                </Badge>
              </div>

              <CardContent className="p-4 space-y-2">
                <h3 className="font-semibold text-zinc-100 group-hover:text-red-400 transition-colors line-clamp-1">
                  {course.title}
                </h3>
                <p className="text-sm text-zinc-500">{course.creator}</p>
                <StarRating rating={course.rating} />
              </CardContent>

              <CardFooter className="p-4 pt-0 flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs text-zinc-500">
                  <span className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {course.students}
                  </span>
                  <Badge variant="outline" className="text-xs">
                    {course.category}
                  </Badge>
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
                <Badge
                  className={`${beltColorMap[selectedCourse.beltLevel]} text-xs`}
                >
                  {selectedCourse.beltLevel.charAt(0) +
                    selectedCourse.beltLevel.slice(1).toLowerCase()}{" "}
                  Belt
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {selectedCourse.category}
                </Badge>
              </div>
              <DialogTitle className="text-xl">
                {selectedCourse.title}
              </DialogTitle>
              <DialogDescription className="flex items-center gap-4 pt-1">
                <span>by {selectedCourse.creator}</span>
                <StarRating rating={selectedCourse.rating} />
                <span className="flex items-center gap-1 text-zinc-500">
                  <Users className="h-3.5 w-3.5" />
                  {selectedCourse.students} students
                </span>
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 py-2">
              {/* Description */}
              <p className="text-sm text-zinc-300 leading-relaxed">
                {selectedCourse.description}
              </p>

              <Separator className="bg-zinc-800" />

              {/* Lessons */}
              <div>
                <h4 className="text-sm font-semibold text-zinc-200 mb-3">
                  Lessons ({selectedCourse.lessons.length})
                </h4>
                <div className="space-y-2">
                  {selectedCourse.lessons.map((lesson, index) => (
                    <div
                      key={index}
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
                          <p className="text-xs text-zinc-500">
                            {lesson.duration} min
                          </p>
                        </div>
                      </div>
                      {lesson.free && (
                        <Badge
                          variant="secondary"
                          className="bg-green-600/20 text-green-400 border-green-800 text-xs"
                        >
                          Free
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <Separator className="bg-zinc-800" />

              {/* Reviews */}
              <div>
                <h4 className="text-sm font-semibold text-zinc-200 mb-3">
                  Reviews ({selectedCourse.reviews.length})
                </h4>
                <div className="space-y-3">
                  {selectedCourse.reviews.map((review, index) => (
                    <div
                      key={index}
                      className="rounded-lg bg-zinc-900/50 border border-zinc-800/50 p-3"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-zinc-300">
                          {review.user}
                        </span>
                        <StarRating rating={review.rating} size="xs" />
                      </div>
                      <p className="text-sm text-zinc-400">{review.comment}</p>
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
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Purchase Course
              </Button>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
