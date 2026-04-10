"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
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
  ExternalLink,
  TrendingUp,
  Palette,
  ArrowRight,
  AlertCircle,
  Loader2,
  CheckCircle,
  Clock,
  Globe,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface CourseData {
  id: string;
  title: string;
  price: number;
  students: number;
  revenue: number;
  published: boolean;
  rating: number | null;
  lessonCount: number;
  category: string | null;
  beltLevel: string | null;
  createdAt: string;
}

interface StatsData {
  totalRevenue: number;
  totalStudents: number;
  totalCourses: number;
  publishedCourses: number;
  averageRating: number;
  revenueData: Array<{ month: string; revenue: number }>;
  courses: CourseData[];
}

function StatsSkeleton() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {[...Array(4)].map((_, i) => (
        <Card key={i} className="border-zinc-800">
          <CardHeader className="pb-2">
            <div className="h-4 w-24 bg-zinc-800 rounded animate-pulse" />
          </CardHeader>
          <CardContent>
            <div className="h-8 w-20 bg-zinc-800 rounded animate-pulse mb-2" />
            <div className="h-3 w-16 bg-zinc-800 rounded animate-pulse" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function CoursesSkeleton() {
  return (
    <div className="grid gap-4">
      {[...Array(3)].map((_, i) => (
        <Card key={i} className="border-zinc-800">
          <CardContent className="p-4">
            <div className="flex gap-4">
              <div className="h-16 w-24 bg-zinc-800 rounded animate-pulse hidden sm:block" />
              <div className="flex-1 space-y-2">
                <div className="h-5 w-48 bg-zinc-800 rounded animate-pulse" />
                <div className="h-4 w-64 bg-zinc-800 rounded animate-pulse" />
                <div className="h-3 w-32 bg-zinc-800 rounded animate-pulse" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default function CreatorDashboard() {
  const [stats, setStats] = useState<StatsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState<string | null>(null);
  const [connectStatus, setConnectStatus] = useState<{
    connected: boolean;
    chargesEnabled: boolean;
    payoutsEnabled: boolean;
    accountId: string | null;
  } | null>(null);
  const [connectLoading, setConnectLoading] = useState(false);
  const [deletingCourse, setDeletingCourse] = useState<string | null>(null);
  const [togglingCourse, setTogglingCourse] = useState<string | null>(null);

  const fetchStats = useCallback(async () => {
    try {
      const res = await fetch("/api/creator/stats");
      if (res.ok) {
        const data = await res.json();
        setStats(data);
      }
    } catch {
      // silently fail
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStats();

    fetch("/api/creator/profile")
      .then((r) => r.json())
      .then((d) => setUsername(d.username))
      .catch(() => {});

    fetch("/api/stripe/connect/status")
      .then((r) => r.json())
      .then((d) => setConnectStatus(d))
      .catch(() => {});
  }, [fetchStats]);

  const handleConnectBank = async () => {
    setConnectLoading(true);
    try {
      const res = await fetch("/api/stripe/connect/onboard", { method: "POST" });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } catch {
      setConnectLoading(false);
    }
  };

  const handleDeleteCourse = async (courseId: string) => {
    if (!confirm("Delete this course? This cannot be undone.")) return;
    setDeletingCourse(courseId);
    try {
      await fetch(`/api/courses/${courseId}`, { method: "DELETE" });
      await fetchStats();
    } finally {
      setDeletingCourse(null);
    }
  };

  const handleTogglePublish = async (courseId: string, currentPublished: boolean) => {
    setTogglingCourse(courseId);
    try {
      await fetch(`/api/courses/${courseId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ published: !currentPublished }),
      });
      await fetchStats();
    } finally {
      setTogglingCourse(null);
    }
  };

  const courses = stats?.courses ?? [];
  const hasCourses = courses.length > 0;

  const CustomTooltip = ({
    active,
    payload,
    label,
  }: {
    active?: boolean;
    payload?: Array<{ value: number }>;
    label?: string;
  }) => {
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

  const revenueData = stats?.revenueData.map(d => ({
    ...d,
    month: d.month.slice(5), // show "04" instead of "2026-04"
  })) ?? [];

  // Compute this month's earnings from revenueData
  const currentMonth = new Date().toISOString().slice(0, 7);
  const thisMonthRevenue = stats?.revenueData?.find((d) => d.month === currentMonth)?.revenue ?? 0;
  const lifetimeRevenue = stats?.totalRevenue ?? 0;
  const totalStudentsCount = stats?.totalStudents ?? 0;
  const fanaticsEquivalent = lifetimeRevenue * 0.40;
  const aibjjEquivalent = lifetimeRevenue * 0.85;
  const advantage = aibjjEquivalent - fanaticsEquivalent;

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
        <div className="flex items-center gap-3">
          {username && (
            <Button variant="outline" className="border-zinc-700" asChild>
              <a
                href={`https://${username}.aibjj.com`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                My Public Page
              </a>
            </Button>
          )}
          <Button className="bg-red-600 hover:bg-red-700 text-white" asChild>
            <Link href="/upload">
              <Upload className="mr-2 h-4 w-4" />
              Upload Course
            </Link>
          </Button>
        </div>
      </div>

      {/* Earnings Widget */}
      <Card className="border-green-800/40 bg-gradient-to-r from-green-950/30 to-zinc-900/50">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-400" />
            <CardTitle className="text-base text-green-300">Your Earnings</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-4">
            <div>
              <p className="text-xs text-zinc-500 mb-1">This Month</p>
              <p className="text-2xl font-bold text-zinc-100">
                ${thisMonthRevenue.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-xs text-zinc-500 mb-1">Lifetime Earnings</p>
              <p className="text-2xl font-bold text-zinc-100">
                ${lifetimeRevenue.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-xs text-zinc-500 mb-1">Students</p>
              <p className="text-2xl font-bold text-zinc-100">
                {totalStudentsCount.toLocaleString()}
              </p>
            </div>
            <div className="rounded-xl bg-green-900/20 border border-green-800/40 px-4 py-3">
              <p className="text-xs text-zinc-400 mb-1">
                AIBJJ advantage vs Fanatics
              </p>
              <p className="text-2xl font-black text-green-400">
                +${advantage.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </p>
              <p className="text-xs text-zinc-500 mt-0.5">
                On Fanatics you'd have kept only ${fanaticsEquivalent.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </p>
            </div>
          </div>
          {lifetimeRevenue === 0 && (
            <div className="mt-3 flex items-center gap-2">
              <Link
                href="/creator/import"
                className="text-xs text-green-400 underline underline-offset-2 hover:text-green-300"
              >
                Import your existing courses →
              </Link>
              <span className="text-xs text-zinc-600">to start earning today</span>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid gap-3 sm:grid-cols-3">
        <Link href="/upload">
          <Card className="border-zinc-800 hover:border-zinc-700 transition-colors cursor-pointer group">
            <CardContent className="flex items-center gap-3 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600/10">
                <Plus className="h-5 w-5 text-red-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-zinc-200">Upload Course</p>
                <p className="text-xs text-zinc-500">60 seconds to live</p>
              </div>
              <ArrowRight className="h-4 w-4 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
            </CardContent>
          </Card>
        </Link>
        <Link href="/creator-setup">
          <Card className="border-zinc-800 hover:border-zinc-700 transition-colors cursor-pointer group">
            <CardContent className="flex items-center gap-3 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800">
                <Palette className="h-5 w-5 text-zinc-400" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-zinc-200">Edit Page</p>
                <p className="text-xs text-zinc-500">Template & profile</p>
              </div>
              <ArrowRight className="h-4 w-4 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
            </CardContent>
          </Card>
        </Link>
        <Link href="/pricing">
          <Card className="border-zinc-800 hover:border-zinc-700 transition-colors cursor-pointer group">
            <CardContent className="flex items-center gap-3 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800">
                <BarChart3 className="h-5 w-5 text-zinc-400" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-zinc-200">View Analytics</p>
                <p className="text-xs text-zinc-500">Deep insights</p>
              </div>
              <ArrowRight className="h-4 w-4 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* Payouts Section */}
      {!connectStatus || (!connectStatus.connected && !connectStatus.chargesEnabled) ? (
        <Card className="border-red-600/50 border-2">
          <CardHeader>
            <div className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-red-500" />
              <CardTitle className="text-base text-red-400">Connect your bank to start selling</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-zinc-300">
              You must connect a bank account to publish courses and receive payments. AIBJJ uses Stripe to send you <strong className="text-zinc-100">85% of every sale</strong> automatically.
            </p>
            <Button
              onClick={handleConnectBank}
              disabled={connectLoading}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              {connectLoading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Connecting...
                </>
              ) : (
                <>
                  Connect Bank Account <ArrowRight className="h-4 w-4 ml-2" />
                </>
              )}
            </Button>
            <p className="text-xs text-zinc-500">Powered by Stripe — bank-level security</p>
          </CardContent>
        </Card>
      ) : connectStatus.connected && !connectStatus.chargesEnabled ? (
        <Card className="border-yellow-600/50 border-2">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-yellow-500" />
              <CardTitle className="text-base text-yellow-400">Verification in progress</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-zinc-400">
              Stripe is reviewing your account. This usually takes 1-2 business days. You'll be able to publish courses once verification is complete.
            </p>
          </CardContent>
        </Card>
      ) : (
        <Card className="border-green-600/50">
          <CardHeader>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <CardTitle className="text-base text-green-400">Payouts Active</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-zinc-400">
                Your earnings are deposited automatically within 2 business days. You receive <strong className="text-zinc-200">85% of every sale</strong>.
              </p>
              <Badge className="bg-green-600/20 text-green-400 border-green-800 w-fit">
                Connected
              </Badge>
            </div>
          </CardContent>
        </Card>
      )}

      {loading ? (
        <>
          <StatsSkeleton />
          <CoursesSkeleton />
        </>
      ) : !hasCourses ? (
        <Card className="border-zinc-800">
          <CardContent className="flex flex-col items-center justify-center py-16">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-800">
              <Video className="h-8 w-8 text-zinc-500" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-zinc-100">
              Start creating BJJ content
            </h3>
            <p className="mt-2 max-w-sm text-center text-sm text-zinc-400">
              Share your knowledge with the BJJ community. Upload for free — we only take 15% when you make a sale.
            </p>
            <Button
              className="mt-6 bg-red-600 hover:bg-red-700 text-white"
              asChild
            >
              <Link href="/upload">
                <Plus className="mr-2 h-4 w-4" />
                Create Your First Course
              </Link>
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
                  Total Revenue
                </CardTitle>
                <DollarSign className="h-4 w-4 text-zinc-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-zinc-100">
                  ${stats!.totalRevenue.toLocaleString()}
                </div>
                <p className="text-xs text-zinc-500 mt-1">All time</p>
              </CardContent>
            </Card>

            <Card className="border-zinc-800">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-zinc-400">
                  Courses
                </CardTitle>
                <Video className="h-4 w-4 text-zinc-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-zinc-100">
                  {stats!.totalCourses}
                </div>
                <p className="text-xs text-zinc-500 mt-1">
                  {stats!.publishedCourses} published
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
                  {stats!.totalStudents.toLocaleString()}
                </div>
                <p className="text-xs text-zinc-500 mt-1">Enrolled learners</p>
              </CardContent>
            </Card>

            <Card className="border-zinc-800">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-zinc-400">
                  Avg Rating
                </CardTitle>
                <Star className="h-4 w-4 text-zinc-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-zinc-100">
                  {stats!.averageRating > 0 ? stats!.averageRating.toFixed(1) : "—"}
                </div>
                <p className="text-xs text-zinc-500 mt-1">Across all courses</p>
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
                {courses.map((course) => (
                  <Card key={course.id} className="border-zinc-800">
                    <CardContent className="p-4">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-start gap-4">
                          <div className="hidden sm:flex h-16 w-24 flex-shrink-0 items-center justify-center rounded-lg bg-zinc-800">
                            <Video className="h-6 w-6 text-zinc-600" />
                          </div>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 flex-wrap">
                              <h3 className="font-semibold text-zinc-100">
                                {course.title}
                              </h3>
                              <Badge
                                className={
                                  course.published
                                    ? "bg-green-600/20 text-green-400 border-green-800"
                                    : "bg-zinc-700/50 text-zinc-400"
                                }
                              >
                                {course.published ? "Published" : "Draft"}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-zinc-400 flex-wrap">
                              <span className="flex items-center gap-1">
                                <DollarSign className="h-3.5 w-3.5" />${course.price}
                              </span>
                              <span className="flex items-center gap-1">
                                <Users className="h-3.5 w-3.5" />
                                {course.students} students
                              </span>
                              <span className="flex items-center gap-1">
                                <DollarSign className="h-3.5 w-3.5" />${course.revenue.toLocaleString()} earned
                              </span>
                              {course.rating !== null && course.rating > 0 && (
                                <span className="flex items-center gap-1">
                                  <Star className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" />
                                  {course.rating.toFixed(1)}
                                </span>
                              )}
                              <span className="flex items-center gap-1">
                                <Video className="h-3.5 w-3.5" />
                                {course.lessonCount} lessons
                              </span>
                            </div>
                            <div className="flex items-center gap-2 flex-wrap">
                              {course.category && (
                                <Badge variant="outline" className="text-xs">
                                  {course.category}
                                </Badge>
                              )}
                              {course.beltLevel && (
                                <Badge variant="outline" className="text-xs">
                                  {course.beltLevel.charAt(0) + course.beltLevel.slice(1).toLowerCase()} Belt
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-zinc-700 text-zinc-300 text-xs"
                            onClick={() => handleTogglePublish(course.id, course.published)}
                            disabled={togglingCourse === course.id}
                          >
                            {togglingCourse === course.id ? (
                              <Loader2 className="h-3 w-3 animate-spin mr-1" />
                            ) : course.published ? (
                              <Eye className="h-3 w-3 mr-1" />
                            ) : (
                              <Globe className="h-3 w-3 mr-1" />
                            )}
                            {course.published ? "Unpublish" : "Publish"}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-zinc-400 hover:text-zinc-200"
                            asChild
                          >
                            <Link href={`/creator/courses/${course.id}/edit`}>
                              <Edit className="h-4 w-4" />
                            </Link>
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-zinc-400 hover:text-red-400"
                            onClick={() => handleDeleteCourse(course.id)}
                            disabled={deletingCourse === course.id}
                          >
                            {deletingCourse === course.id ? (
                              <Loader2 className="h-4 w-4 animate-spin" />
                            ) : (
                              <Trash className="h-4 w-4" />
                            )}
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
              {revenueData.length > 0 ? (
                <Card className="border-zinc-800">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-zinc-400" />
                      <CardTitle className="text-base">Monthly Revenue</CardTitle>
                    </div>
                    <CardDescription>
                      Your earnings over the past 6 months
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={revenueData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                          <XAxis dataKey="month" stroke="#71717a" fontSize={12} />
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
                            activeDot={{ r: 6, fill: "#dc2626", stroke: "#fca5a5", strokeWidth: 2 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-zinc-800">
                  <CardContent className="flex flex-col items-center justify-center py-12">
                    <TrendingUp className="h-10 w-10 text-zinc-600 mb-3" />
                    <p className="text-zinc-400">No revenue data yet</p>
                    <p className="text-sm text-zinc-500 mt-1">Sales will appear here once you start making them</p>
                  </CardContent>
                </Card>
              )}

              {courses.filter(c => c.published && c.revenue > 0).length > 0 && (
                <Card className="border-zinc-800">
                  <CardHeader>
                    <CardTitle className="text-base">Course Performance</CardTitle>
                    <CardDescription>Revenue breakdown by course</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {courses
                      .filter(c => c.published)
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
                            value={stats!.totalRevenue > 0 ? (course.revenue / stats!.totalRevenue) * 100 : 0}
                            className="h-2"
                          />
                        </div>
                      ))}
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </>
      )}
    </div>
  );
}
