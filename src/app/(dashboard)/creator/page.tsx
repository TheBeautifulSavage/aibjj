"use client";

import React, { useState, useEffect } from "react";
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

// Mock data
const mockStats = {
  totalCourses: 5,
  totalStudents: 1247,
  totalRevenue: 34580,
  conversionRate: 4.2,
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

const mockRecentSales = [
  { buyer: "Alex M.", course: "Complete Guard System", amount: 79, time: "2 min ago" },
  { buyer: "Sarah K.", course: "Pressure Passing Masterclass", amount: 89, time: "18 min ago" },
  { buyer: "Jake T.", course: "No-Gi Fundamentals", amount: 49, time: "1 hr ago" },
  { buyer: "Maria L.", course: "Submission Chain Attacks", amount: 59, time: "3 hrs ago" },
  { buyer: "Chris B.", course: "Complete Guard System", amount: 79, time: "5 hrs ago" },
];

export default function CreatorDashboard() {
  const [username, setUsername] = useState<string | null>(null);
  const [connectStatus, setConnectStatus] = useState<{
    connected: boolean;
    chargesEnabled: boolean;
    payoutsEnabled: boolean;
    accountId: string | null;
  } | null>(null);
  const [connectLoading, setConnectLoading] = useState(false);

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

  useEffect(() => {
    fetch("/api/creator/profile")
      .then((r) => r.json())
      .then((d) => setUsername(d.username))
      .catch(() => {});

    fetch("/api/stripe/connect/status")
      .then((r) => r.json())
      .then((d) => setConnectStatus(d))
      .catch(() => {});
  }, []);



  const hasCourses = mockCourses.length > 0;

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
              Stripe is reviewing your account. This usually takes 1-2 business days. You&apos;ll be able to publish courses once verification is complete.
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

      {!hasCourses ? (
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
                  ${mockStats.totalRevenue.toLocaleString()}
                </div>
                <p className="text-xs text-green-500 mt-1">+8% this month</p>
              </CardContent>
            </Card>

            <Card className="border-zinc-800">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-zinc-400">
                  Courses Published
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
                  Conversion Rate
                </CardTitle>
                <TrendingUp className="h-4 w-4 text-zinc-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-zinc-100">
                  {mockStats.conversionRate}%
                </div>
                <p className="text-xs text-green-500 mt-1">+0.5% this month</p>
              </CardContent>
            </Card>
          </div>

          {/* Tabs: Courses / Analytics / Sales */}
          <Tabs defaultValue="courses" className="space-y-4">
            <TabsList>
              <TabsTrigger value="courses">Courses</TabsTrigger>
              <TabsTrigger value="sales">Recent Sales</TabsTrigger>
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

            {/* Recent Sales Tab */}
            <TabsContent value="sales" className="space-y-4">
              <Card className="border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-base">Recent Sales</CardTitle>
                  <CardDescription>Your latest course purchases</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {mockRecentSales.map((sale, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-800 text-sm font-medium text-zinc-300">
                            {sale.buyer.charAt(0)}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-zinc-200">
                              {sale.buyer}
                            </p>
                            <p className="text-xs text-zinc-500">
                              {sale.course}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-semibold text-green-500">
                            +${sale.amount}
                          </p>
                          <p className="text-xs text-zinc-500">{sale.time}</p>
                        </div>
                      </div>
                      {i < mockRecentSales.length - 1 && (
                        <Separator className="mt-4 bg-zinc-800/50" />
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
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
