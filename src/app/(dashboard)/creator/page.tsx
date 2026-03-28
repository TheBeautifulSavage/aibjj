"use client";

import React, { useState } from "react";
import {
  Video,
  Upload,
  DollarSign,
  Users,
  Star,
  Plus,
  Edit,
  Trash,
  Eye,
  BarChart3,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Mock data
const mockStats = {
  totalCourses: 5,
  totalStudents: 1247,
  totalRevenue: 34580,
  averageRating: 4.7,
};

const mockCourses = [
  {
    id: "1",
    title: "Complete Guard System",
    price: 79,
    students: 423,
    revenue: 12870,
    status: "published" as const,
    rating: 4.8,
    category: "Guard",
    beltLevel: "BLUE",
  },
  {
    id: "2",
    title: "Pressure Passing Masterclass",
    price: 89,
    students: 312,
    revenue: 9640,
    status: "published" as const,
    rating: 4.9,
    category: "Passing",
    beltLevel: "PURPLE",
  },
  {
    id: "3",
    title: "Submission Chain Attacks",
    price: 59,
    students: 289,
    revenue: 7210,
    status: "published" as const,
    rating: 4.6,
    category: "Submissions",
    beltLevel: "BLUE",
  },
  {
    id: "4",
    title: "No-Gi Fundamentals",
    price: 49,
    students: 223,
    revenue: 4860,
    status: "published" as const,
    rating: 4.7,
    category: "Fundamentals",
    beltLevel: "WHITE",
  },
  {
    id: "5",
    title: "Advanced Leg Lock Systems",
    price: 99,
    students: 0,
    revenue: 0,
    status: "draft" as const,
    rating: 0,
    category: "Submissions",
    beltLevel: "BROWN",
  },
];

const mockRevenueData = [
  { month: "Sep", revenue: 2100 },
  { month: "Oct", revenue: 3400 },
  { month: "Nov", revenue: 2800 },
  { month: "Dec", revenue: 4200 },
  { month: "Jan", revenue: 5100 },
  { month: "Feb", revenue: 4800 },
  { month: "Mar", revenue: 6200 },
  { month: "Apr", revenue: 5900 },
  { month: "May", revenue: 7300 },
  { month: "Jun", revenue: 6800 },
  { month: "Jul", revenue: 8100 },
  { month: "Aug", revenue: 7900 },
];

const categories = [
  "Guard",
  "Passing",
  "Submissions",
  "Takedowns",
  "Competition",
  "Fundamentals",
];

const beltLevels = ["WHITE", "BLUE", "PURPLE", "BROWN", "BLACK"];

interface LessonForm {
  title: string;
  description: string;
  duration: string;
  order: number;
  free: boolean;
}

export default function CreatorDashboard() {
  const [uploadOpen, setUploadOpen] = useState(false);
  const [courseTitle, setCourseTitle] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [coursePrice, setCoursePrice] = useState("");
  const [courseCategory, setCourseCategory] = useState("");
  const [courseBelt, setCourseBelt] = useState("");
  const [lessons, setLessons] = useState<LessonForm[]>([]);

  const hasCourses = mockCourses.length > 0;

  const addLesson = () => {
    setLessons([
      ...lessons,
      {
        title: "",
        description: "",
        duration: "",
        order: lessons.length + 1,
        free: false,
      },
    ]);
  };

  const updateLesson = (
    index: number,
    field: keyof LessonForm,
    value: string | boolean | number
  ) => {
    const updated = [...lessons];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (updated[index] as any)[field] = value;
    setLessons(updated);
  };

  const removeLesson = (index: number) => {
    setLessons(lessons.filter((_, i) => i !== index));
  };

  const resetForm = () => {
    setCourseTitle("");
    setCourseDescription("");
    setCoursePrice("");
    setCourseCategory("");
    setCourseBelt("");
    setLessons([]);
  };

  const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number }>; label?: string }) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 shadow-lg">
          <p className="text-xs text-zinc-400">{label}</p>
          <p className="text-sm font-semibold text-zinc-100">
            ${payload[0].value.toLocaleString()}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-zinc-100">
            Creator Dashboard
          </h1>
          <p className="text-sm text-zinc-400">
            Manage your courses and track performance
          </p>
        </div>
        <Dialog open={uploadOpen} onOpenChange={setUploadOpen}>
          <DialogTrigger asChild>
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              <Upload className="mr-2 h-4 w-4" />
              Upload Course
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Create New Course</DialogTitle>
              <DialogDescription>
                Build your BJJ course and share your knowledge with the
                community.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 py-4">
              {/* Course Details */}
              <div className="space-y-2">
                <Label htmlFor="title">Course Title</Label>
                <Input
                  id="title"
                  placeholder="e.g., Complete Guard System"
                  value={courseTitle}
                  onChange={(e) => setCourseTitle(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe what students will learn..."
                  rows={4}
                  value={courseDescription}
                  onChange={(e) => setCourseDescription(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price">Price ($)</Label>
                  <Input
                    id="price"
                    type="number"
                    placeholder="49.99"
                    value={coursePrice}
                    onChange={(e) => setCoursePrice(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Category</Label>
                  <Select
                    value={courseCategory}
                    onValueChange={setCourseCategory}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Belt Level</Label>
                <Select value={courseBelt} onValueChange={setCourseBelt}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select belt level" />
                  </SelectTrigger>
                  <SelectContent>
                    {beltLevels.map((belt) => (
                      <SelectItem key={belt} value={belt}>
                        {belt.charAt(0) + belt.slice(1).toLowerCase()}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Cover Image Upload */}
              <div className="space-y-2">
                <Label>Cover Image</Label>
                <div className="flex h-32 w-full items-center justify-center rounded-lg border-2 border-dashed border-zinc-700 bg-zinc-900/50 transition-colors hover:border-zinc-600 cursor-pointer">
                  <div className="text-center">
                    <Upload className="mx-auto h-8 w-8 text-zinc-500" />
                    <p className="mt-2 text-sm text-zinc-400">
                      Click to upload cover image
                    </p>
                    <p className="text-xs text-zinc-500">
                      PNG, JPG up to 5MB
                    </p>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Lessons */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="text-base">Lessons</Label>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={addLesson}
                    className="border-zinc-700"
                  >
                    <Plus className="mr-1 h-3 w-3" />
                    Add Lesson
                  </Button>
                </div>

                {lessons.length === 0 && (
                  <p className="text-sm text-zinc-500 text-center py-4">
                    No lessons added yet. Click &quot;Add Lesson&quot; to get started.
                  </p>
                )}

                {lessons.map((lesson, index) => (
                  <Card key={index} className="border-zinc-800">
                    <CardContent className="p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-zinc-300">
                          Lesson {index + 1}
                        </span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeLesson(index)}
                          className="text-zinc-500 hover:text-red-400 h-8 w-8 p-0"
                        >
                          <Trash className="h-3.5 w-3.5" />
                        </Button>
                      </div>

                      <Input
                        placeholder="Lesson title"
                        value={lesson.title}
                        onChange={(e) =>
                          updateLesson(index, "title", e.target.value)
                        }
                      />

                      <Textarea
                        placeholder="Lesson description"
                        rows={2}
                        value={lesson.description}
                        onChange={(e) =>
                          updateLesson(index, "description", e.target.value)
                        }
                      />

                      <div className="grid grid-cols-2 gap-3">
                        {/* Video Upload Placeholder */}
                        <div className="flex h-20 items-center justify-center rounded-lg border border-dashed border-zinc-700 bg-zinc-900/50 cursor-pointer hover:border-zinc-600 transition-colors">
                          <div className="text-center">
                            <Video className="mx-auto h-5 w-5 text-zinc-500" />
                            <p className="mt-1 text-xs text-zinc-500">
                              Upload video
                            </p>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Input
                            placeholder="Duration (min)"
                            type="number"
                            value={lesson.duration}
                            onChange={(e) =>
                              updateLesson(index, "duration", e.target.value)
                            }
                          />
                          <label className="flex items-center gap-2 text-sm text-zinc-400 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={lesson.free}
                              onChange={(e) =>
                                updateLesson(index, "free", e.target.checked)
                              }
                              className="rounded border-zinc-700 bg-zinc-900 text-red-600 focus:ring-red-600"
                            />
                            Free preview
                          </label>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <DialogFooter className="gap-2">
              <Button
                variant="outline"
                onClick={() => {
                  resetForm();
                  setUploadOpen(false);
                }}
                className="border-zinc-700"
              >
                Save Draft
              </Button>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Publish Course
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {!hasCourses ? (
        /* Empty State */
        <Card className="border-zinc-800">
          <CardContent className="flex flex-col items-center justify-center py-16">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-800">
              <Video className="h-8 w-8 text-zinc-500" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-zinc-100">
              Start creating BJJ content
            </h3>
            <p className="mt-2 max-w-sm text-center text-sm text-zinc-400">
              Share your knowledge with the BJJ community. Create your first
              course and start earning today.
            </p>
            <Button
              className="mt-6 bg-red-600 hover:bg-red-700 text-white"
              onClick={() => setUploadOpen(true)}
            >
              <Plus className="mr-2 h-4 w-4" />
              Create Your First Course
            </Button>
          </CardContent>
        </Card>
      ) : (
        <>
          {/* Stats Row */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="border-zinc-800">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-zinc-400">
                  Total Courses
                </CardTitle>
                <Video className="h-4 w-4 text-zinc-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-zinc-100">
                  {mockStats.totalCourses}
                </div>
                <p className="text-xs text-zinc-500 mt-1">
                  {mockCourses.filter((c) => c.status === "published").length}{" "}
                  published
                </p>
              </CardContent>
            </Card>

            <Card className="border-zinc-800">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-zinc-400">
                  Total Students
                </CardTitle>
                <Users className="h-4 w-4 text-zinc-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-zinc-100">
                  {mockStats.totalStudents.toLocaleString()}
                </div>
                <p className="text-xs text-green-500 mt-1">+12% this month</p>
              </CardContent>
            </Card>

            <Card className="border-zinc-800">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-zinc-400">
                  Total Revenue
                </CardTitle>
                <DollarSign className="h-4 w-4 text-zinc-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-zinc-100">
                  ${mockStats.totalRevenue.toLocaleString()}
                </div>
                <p className="text-xs text-green-500 mt-1">+8% this month</p>
              </CardContent>
            </Card>

            <Card className="border-zinc-800">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-zinc-400">
                  Average Rating
                </CardTitle>
                <Star className="h-4 w-4 text-zinc-500" />
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-zinc-100">
                    {mockStats.averageRating}
                  </span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-3.5 w-3.5 ${
                          star <= Math.round(mockStats.averageRating)
                            ? "fill-yellow-500 text-yellow-500"
                            : "text-zinc-700"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-zinc-500 mt-1">
                  Based on all reviews
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Tabs: Courses / Analytics */}
          <Tabs defaultValue="courses" className="space-y-4">
            <TabsList>
              <TabsTrigger value="courses">Courses</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            {/* Courses Tab */}
            <TabsContent value="courses" className="space-y-4">
              <div className="grid gap-4">
                {mockCourses.map((course) => (
                  <Card key={course.id} className="border-zinc-800">
                    <CardContent className="p-4">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-start gap-4">
                          {/* Cover image placeholder */}
                          <div className="hidden sm:flex h-16 w-24 flex-shrink-0 items-center justify-center rounded-lg bg-zinc-800">
                            <Video className="h-6 w-6 text-zinc-600" />
                          </div>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold text-zinc-100">
                                {course.title}
                              </h3>
                              <Badge
                                variant={
                                  course.status === "published"
                                    ? "default"
                                    : "secondary"
                                }
                                className={
                                  course.status === "published"
                                    ? "bg-green-600/20 text-green-400 border-green-800"
                                    : ""
                                }
                              >
                                {course.status === "published"
                                  ? "Published"
                                  : "Draft"}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-zinc-400">
                              <span className="flex items-center gap-1">
                                <DollarSign className="h-3.5 w-3.5" />$
                                {course.price}
                              </span>
                              <span className="flex items-center gap-1">
                                <Users className="h-3.5 w-3.5" />
                                {course.students} students
                              </span>
                              <span className="flex items-center gap-1">
                                <DollarSign className="h-3.5 w-3.5" />$
                                {course.revenue.toLocaleString()} earned
                              </span>
                              {course.rating > 0 && (
                                <span className="flex items-center gap-1">
                                  <Star className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" />
                                  {course.rating}
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className="text-xs">
                                {course.category}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                {course.beltLevel.charAt(0) +
                                  course.beltLevel.slice(1).toLowerCase()}{" "}
                                Belt
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-zinc-400 hover:text-zinc-200"
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-zinc-400 hover:text-zinc-200"
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-zinc-400 hover:text-red-400"
                          >
                            <Trash className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="space-y-4">
              <Card className="border-zinc-800">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-zinc-400" />
                    <CardTitle className="text-base">
                      Monthly Revenue
                    </CardTitle>
                  </div>
                  <CardDescription>
                    Your earnings over the past 12 months
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={mockRevenueData}>
                        <CartesianGrid
                          strokeDasharray="3 3"
                          stroke="#27272a"
                        />
                        <XAxis
                          dataKey="month"
                          stroke="#71717a"
                          fontSize={12}
                        />
                        <YAxis
                          stroke="#71717a"
                          fontSize={12}
                          tickFormatter={(value) => `$${value}`}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Line
                          type="monotone"
                          dataKey="revenue"
                          stroke="#dc2626"
                          strokeWidth={2}
                          dot={{ fill: "#dc2626", strokeWidth: 0, r: 4 }}
                          activeDot={{
                            r: 6,
                            fill: "#dc2626",
                            stroke: "#fca5a5",
                            strokeWidth: 2,
                          }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Top Performing Courses */}
              <Card className="border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-base">
                    Course Performance
                  </CardTitle>
                  <CardDescription>
                    Revenue breakdown by course
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {mockCourses
                    .filter((c) => c.status === "published")
                    .sort((a, b) => b.revenue - a.revenue)
                    .map((course) => (
                      <div key={course.id} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-zinc-200">{course.title}</span>
                          <span className="font-medium text-zinc-100">
                            ${course.revenue.toLocaleString()}
                          </span>
                        </div>
                        <Progress
                          value={
                            (course.revenue / mockStats.totalRevenue) * 100
                          }
                          className="h-2"
                        />
                      </div>
                    ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </>
      )}
    </div>
  );
}
