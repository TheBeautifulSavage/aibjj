'use client'

import { useState, useEffect, useCallback } from 'react'
import {
  Users, BookOpen, DollarSign, TrendingUp, Shield, Search,
  CheckCircle, XCircle, Trash2, RefreshCw, UserPlus, Activity,
  MessageSquare, PenLine, ArrowUpRight, ArrowDownRight,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend,
} from 'recharts'

interface PlatformStats {
  totalUsers: number
  newUsersThisMonth: number
  newUsersLastMonth: number
  totalCourses: number
  publishedCourses: number
  totalPurchases: number
  totalRevenue: number
  platformRevenue: number
  pendingCreators: number
  tierCounts: Record<string, number>
  roleBreakdown: Record<string, number>
  growthData: Array<{ month: string; signups: number }>
  aiMsgsToday: number
  journalEntriesMonth: number
}

interface AdminUser {
  id: string
  name: string | null
  email: string | null
  username: string | null
  role: string
  belt: string
  verified: boolean
  subscriptionTier: string
  createdAt: string
  _count: { courses: number; purchases: number }
}

interface AdminCourse {
  id: string
  title: string
  published: boolean
  price: number
  category: string | null
  beltLevel: string | null
  createdAt: string
  creator: { id: string; name: string | null; email: string | null; username: string | null }
  _count: { purchases: number; lessons: number; reviews: number }
}

const TIER_COLORS = ['#3f3f46', '#3b82f6', '#8b5cf6', '#f59e0b', '#ef4444']

function StatCard({
  title, value, sub, icon: Icon, trend, trendLabel,
}: {
  title: string
  value: string | number
  sub?: string
  icon: React.ElementType
  trend?: 'up' | 'down' | 'neutral'
  trendLabel?: string
}) {
  return (
    <Card className="border-zinc-800">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-zinc-400">{title}</CardTitle>
        <Icon className="h-4 w-4 text-zinc-500" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-zinc-100">{value}</div>
        <div className="flex items-center gap-1 mt-1">
          {trendLabel && trend && (
            <>
              {trend === 'up' && <ArrowUpRight className="h-3 w-3 text-green-500" />}
              {trend === 'down' && <ArrowDownRight className="h-3 w-3 text-red-500" />}
              <span className={`text-xs ${trend === 'up' ? 'text-green-400' : trend === 'down' ? 'text-red-400' : 'text-zinc-500'}`}>
                {trendLabel}
              </span>
            </>
          )}
          {sub && !trendLabel && <p className="text-xs text-zinc-500">{sub}</p>}
        </div>
      </CardContent>
    </Card>
  )
}

export default function AdminPage() {
  const [stats, setStats] = useState<PlatformStats | null>(null)
  const [users, setUsers] = useState<AdminUser[]>([])
  const [courses, setCourses] = useState<AdminCourse[]>([])
  const [userSearch, setUserSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [usersLoading, setUsersLoading] = useState(false)
  const [lastRefresh, setLastRefresh] = useState(new Date())

  const fetchStats = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/stats')
      if (res.ok) setStats(await res.json())
    } catch {}
  }, [])

  const fetchUsers = useCallback(async (search = '') => {
    setUsersLoading(true)
    try {
      const res = await fetch(`/api/admin/users?search=${encodeURIComponent(search)}&limit=100`)
      if (res.ok) {
        const data = await res.json()
        setUsers(data.users)
      }
    } catch {} finally {
      setUsersLoading(false)
    }
  }, [])

  const fetchCourses = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/courses?limit=100')
      if (res.ok) {
        const data = await res.json()
        setCourses(data.courses)
      }
    } catch {}
  }, [])

  const refreshAll = useCallback(async () => {
    await Promise.all([fetchStats(), fetchUsers(userSearch), fetchCourses()])
    setLastRefresh(new Date())
  }, [fetchStats, fetchUsers, fetchCourses, userSearch])

  useEffect(() => {
    Promise.all([fetchStats(), fetchUsers(), fetchCourses()]).finally(() => setLoading(false))
  }, [fetchStats, fetchUsers, fetchCourses])

  useEffect(() => {
    const timer = setTimeout(() => fetchUsers(userSearch), 400)
    return () => clearTimeout(timer)
  }, [userSearch, fetchUsers])

  const handleUserRoleChange = async (userId: string, role: string) => {
    await fetch(`/api/admin/users/${userId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ role }),
    })
    fetchUsers(userSearch)
    fetchStats()
  }

  const handleDeleteUser = async (userId: string) => {
    if (!confirm('Delete this user? This cannot be undone.')) return
    await fetch(`/api/admin/users/${userId}`, { method: 'DELETE' })
    fetchUsers(userSearch)
    fetchStats()
  }

  const handleVerifyCreator = async (userId: string) => {
    await fetch(`/api/admin/creators/${userId}/verify`, { method: 'POST' })
    fetchUsers(userSearch)
    fetchStats()
  }

  const handleCourseAction = async (courseId: string, action: 'publish' | 'unpublish' | 'delete') => {
    if (action === 'delete') {
      if (!confirm('Delete this course? This cannot be undone.')) return
      await fetch(`/api/admin/courses/${courseId}`, { method: 'DELETE' })
    } else {
      await fetch(`/api/admin/courses/${courseId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ published: action === 'publish' }),
      })
    }
    fetchCourses()
    fetchStats()
  }

  const beltColor = (belt: string) => {
    const colors: Record<string, string> = {
      WHITE: 'border-zinc-300 text-zinc-300',
      BLUE: 'border-blue-500 text-blue-400',
      PURPLE: 'border-purple-500 text-purple-400',
      BROWN: 'border-amber-700 text-amber-600',
      BLACK: 'border-zinc-100 text-zinc-100',
    }
    return colors[belt] || 'border-zinc-600 text-zinc-400'
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <RefreshCw className="h-8 w-8 animate-spin text-zinc-500" />
      </div>
    )
  }

  // Compute growth trend
  const growthTrend = stats && stats.newUsersLastMonth > 0
    ? Math.round(((stats.newUsersThisMonth - stats.newUsersLastMonth) / stats.newUsersLastMonth) * 100)
    : null

  // Pie chart data for subscription tiers
  const tierData = stats
    ? Object.entries(stats.tierCounts).map(([name, value]) => ({ name, value }))
    : []

  // Role data
  const roleData = stats
    ? Object.entries(stats.roleBreakdown).map(([name, value]) => ({ name, value }))
    : []

  // Format month labels for chart
  const chartData = stats?.growthData.map(d => ({
    ...d,
    month: d.month.slice(5), // "04" instead of "2026-04"
  })) ?? []

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-zinc-100 flex items-center gap-2">
            <Shield className="h-7 w-7 text-red-500" />
            Admin Dashboard
          </h1>
          <p className="text-sm text-zinc-500 mt-1">
            Last updated {lastRefresh.toLocaleTimeString()}
          </p>
        </div>
        <Button variant="outline" className="border-zinc-700" onClick={refreshAll}>
          <RefreshCw className="h-4 w-4 mr-2" />
          Refresh
        </Button>
      </div>

      {/* Primary Stats */}
      {stats && (
        <>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              title="Total Users"
              value={stats.totalUsers.toLocaleString()}
              icon={Users}
              trendLabel={growthTrend !== null
                ? `${growthTrend >= 0 ? '+' : ''}${growthTrend}% vs last month`
                : undefined}
              trend={growthTrend !== null ? (growthTrend >= 0 ? 'up' : 'down') : 'neutral'}
            />
            <StatCard
              title="New This Month"
              value={stats.newUsersThisMonth}
              sub={`${stats.newUsersLastMonth} last month`}
              icon={UserPlus}
            />
            <StatCard
              title="Platform Revenue"
              value={`$${stats.platformRevenue.toLocaleString(undefined, { maximumFractionDigits: 0 })}`}
              sub={`15% of $${stats.totalRevenue.toLocaleString(undefined, { maximumFractionDigits: 0 })} GMV`}
              icon={DollarSign}
            />
            <StatCard
              title="Pending Creators"
              value={stats.pendingCreators}
              sub="Awaiting verification"
              icon={Shield}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              title="Total Courses"
              value={stats.totalCourses}
              sub={`${stats.publishedCourses} published`}
              icon={BookOpen}
            />
            <StatCard
              title="Total Purchases"
              value={stats.totalPurchases.toLocaleString()}
              sub="All time"
              icon={TrendingUp}
            />
            <StatCard
              title="AI Messages Today"
              value={stats.aiMsgsToday.toLocaleString()}
              icon={MessageSquare}
            />
            <StatCard
              title="Journal Entries (Month)"
              value={stats.journalEntriesMonth.toLocaleString()}
              icon={PenLine}
            />
          </div>

          {/* Charts */}
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Signup Growth Chart */}
            <Card className="border-zinc-800 lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-base">User Signups — Last 6 Months</CardTitle>
                <CardDescription>New user registrations per month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[220px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                      <XAxis dataKey="month" stroke="#71717a" fontSize={12} />
                      <YAxis stroke="#71717a" fontSize={12} allowDecimals={false} />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#18181b', border: '1px solid #3f3f46', borderRadius: 8 }}
                        labelStyle={{ color: '#a1a1aa' }}
                        itemStyle={{ color: '#e4e4e7' }}
                      />
                      <Bar dataKey="signups" fill="#dc2626" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Subscription Breakdown */}
            <Card className="border-zinc-800">
              <CardHeader>
                <CardTitle className="text-base">Subscription Tiers</CardTitle>
                <CardDescription>Users by plan</CardDescription>
              </CardHeader>
              <CardContent>
                {tierData.length > 0 ? (
                  <div className="h-[220px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie data={tierData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={75} label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} labelLine={false} fontSize={11}>
                          {tierData.map((_, i) => (
                            <Cell key={i} fill={TIER_COLORS[i % TIER_COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip
                          contentStyle={{ backgroundColor: '#18181b', border: '1px solid #3f3f46', borderRadius: 8 }}
                          itemStyle={{ color: '#e4e4e7' }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                ) : (
                  <div className="h-[220px] flex items-center justify-center text-zinc-500 text-sm">No data yet</div>
                )}
                {/* Tier count list */}
                <div className="mt-3 space-y-1">
                  {tierData.map((t, i) => (
                    <div key={t.name} className="flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1.5">
                        <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ backgroundColor: TIER_COLORS[i % TIER_COLORS.length] }} />
                        <span className="text-zinc-300">{t.name}</span>
                      </span>
                      <span className="text-zinc-400 font-medium">{t.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </>
      )}

      {/* Tabs */}
      <Tabs defaultValue="users" className="space-y-4">
        <TabsList>
          <TabsTrigger value="users">Users ({users.length})</TabsTrigger>
          <TabsTrigger value="courses">Courses ({courses.length})</TabsTrigger>
          <TabsTrigger value="creators">
            Pending ({users.filter(u => u.role === 'CREATOR' && !u.verified).length})
          </TabsTrigger>
        </TabsList>

        {/* Users Tab */}
        <TabsContent value="users" className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
              <Input
                placeholder="Search by email, name, username..."
                value={userSearch}
                onChange={e => setUserSearch(e.target.value)}
                className="pl-9 bg-zinc-900 border-zinc-700"
              />
            </div>
            <Button variant="outline" className="border-zinc-700" onClick={() => fetchUsers(userSearch)}>
              <RefreshCw className="h-4 w-4" />
            </Button>
          </div>

          <div className="rounded-lg border border-zinc-800 overflow-x-auto">
            <table className="w-full text-sm min-w-[640px]">
              <thead className="bg-zinc-900">
                <tr>
                  <th className="text-left p-3 text-zinc-400 font-medium">User</th>
                  <th className="text-left p-3 text-zinc-400 font-medium">Joined</th>
                  <th className="text-left p-3 text-zinc-400 font-medium">Role</th>
                  <th className="text-left p-3 text-zinc-400 font-medium hidden md:table-cell">Belt</th>
                  <th className="text-left p-3 text-zinc-400 font-medium hidden lg:table-cell">Plan</th>
                  <th className="text-left p-3 text-zinc-400 font-medium hidden lg:table-cell">Activity</th>
                  <th className="text-right p-3 text-zinc-400 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                {usersLoading ? (
                  <tr>
                    <td colSpan={7} className="p-8 text-center text-zinc-500">Loading...</td>
                  </tr>
                ) : users.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="p-8 text-center text-zinc-500">No users found</td>
                  </tr>
                ) : users.map(user => (
                  <tr key={user.id} className="hover:bg-zinc-900/50">
                    <td className="p-3">
                      <div>
                        <p className="font-medium text-zinc-200">{user.name || 'No name'}</p>
                        <p className="text-xs text-zinc-500">{user.email}</p>
                        {user.username && <p className="text-xs text-zinc-600">@{user.username}</p>}
                      </div>
                    </td>
                    <td className="p-3 text-xs text-zinc-500 whitespace-nowrap">
                      {new Date(user.createdAt).toLocaleDateString()}
                    </td>
                    <td className="p-3">
                      <Select
                        value={user.role}
                        onValueChange={role => handleUserRoleChange(user.id, role)}
                      >
                        <SelectTrigger className="h-7 w-28 bg-zinc-800 border-zinc-700 text-xs">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="STUDENT">Student</SelectItem>
                          <SelectItem value="CREATOR">Creator</SelectItem>
                          <SelectItem value="ADMIN">Admin</SelectItem>
                        </SelectContent>
                      </Select>
                    </td>
                    <td className="p-3 hidden md:table-cell">
                      <Badge variant="outline" className={`text-xs ${beltColor(user.belt)}`}>
                        {user.belt.charAt(0) + user.belt.slice(1).toLowerCase()}
                      </Badge>
                    </td>
                    <td className="p-3 hidden lg:table-cell">
                      <Badge variant="outline" className="text-xs">
                        {user.subscriptionTier}
                      </Badge>
                    </td>
                    <td className="p-3 hidden lg:table-cell text-zinc-400 text-xs">
                      {user._count.courses}c · {user._count.purchases}p
                    </td>
                    <td className="p-3 text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-500 hover:text-red-400 hover:bg-red-950"
                        onClick={() => handleDeleteUser(user.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>

        {/* Courses Tab */}
        <TabsContent value="courses" className="space-y-4">
          <div className="rounded-lg border border-zinc-800 overflow-x-auto">
            <table className="w-full text-sm min-w-[560px]">
              <thead className="bg-zinc-900">
                <tr>
                  <th className="text-left p-3 text-zinc-400 font-medium">Course</th>
                  <th className="text-left p-3 text-zinc-400 font-medium">Creator</th>
                  <th className="text-left p-3 text-zinc-400 font-medium hidden md:table-cell">Stats</th>
                  <th className="text-left p-3 text-zinc-400 font-medium">Status</th>
                  <th className="text-right p-3 text-zinc-400 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                {courses.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-8 text-center text-zinc-500">No courses yet</td>
                  </tr>
                ) : courses.map(course => (
                  <tr key={course.id} className="hover:bg-zinc-900/50">
                    <td className="p-3">
                      <p className="font-medium text-zinc-200">{course.title}</p>
                      <p className="text-xs text-zinc-500">${course.price} · {course.category || 'No category'}</p>
                    </td>
                    <td className="p-3">
                      <p className="text-zinc-300 text-sm">{course.creator.name || 'Unknown'}</p>
                      <p className="text-xs text-zinc-500">{course.creator.email}</p>
                    </td>
                    <td className="p-3 hidden md:table-cell text-zinc-400 text-xs">
                      {course._count.purchases} sold · {course._count.lessons} lessons · {course._count.reviews} reviews
                    </td>
                    <td className="p-3">
                      <Badge className={course.published
                        ? 'bg-green-600/20 text-green-400 border-green-800'
                        : 'bg-zinc-700 text-zinc-400'}>
                        {course.published ? 'Live' : 'Draft'}
                      </Badge>
                    </td>
                    <td className="p-3 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-zinc-400 hover:text-zinc-200"
                          onClick={() => handleCourseAction(course.id, course.published ? 'unpublish' : 'publish')}
                        >
                          {course.published ? <XCircle className="h-4 w-4" /> : <CheckCircle className="h-4 w-4" />}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-500 hover:text-red-400 hover:bg-red-950"
                          onClick={() => handleCourseAction(course.id, 'delete')}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>

        {/* Pending Creators Tab */}
        <TabsContent value="creators" className="space-y-4">
          {users.filter(u => u.role === 'CREATOR' && !u.verified).length === 0 ? (
            <Card className="border-zinc-800">
              <CardContent className="flex flex-col items-center justify-center py-12">
                <CheckCircle className="h-10 w-10 text-green-500 mb-3" />
                <p className="text-zinc-300 font-medium">All clear</p>
                <p className="text-sm text-zinc-500 mt-1">No creators pending verification</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4">
              {users.filter(u => u.role === 'CREATOR' && !u.verified).map(creator => (
                <Card key={creator.id} className="border-zinc-800">
                  <CardContent className="flex items-center justify-between p-4">
                    <div>
                      <p className="font-medium text-zinc-200">{creator.name || 'No name'}</p>
                      <p className="text-sm text-zinc-400">{creator.email}</p>
                      {creator.username && (
                        <p className="text-xs text-zinc-500 mt-1">
                          @{creator.username} · {creator.belt.charAt(0) + creator.belt.slice(1).toLowerCase()} belt
                        </p>
                      )}
                    </div>
                    <Button
                      size="sm"
                      className="bg-green-600 hover:bg-green-700 text-white"
                      onClick={() => handleVerifyCreator(creator.id)}
                    >
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Verify
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
