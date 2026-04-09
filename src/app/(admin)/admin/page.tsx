'use client'

import { useState, useEffect, useCallback } from 'react'
import {
  Users, BookOpen, DollarSign, TrendingUp, Shield, Search,
  CheckCircle, XCircle, Trash2, Edit, Eye, RefreshCw
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from '@/components/ui/select'

interface PlatformStats {
  totalUsers: number
  totalCourses: number
  totalPurchases: number
  totalRevenue: number
  platformRevenue: number
  dailyActiveUsers: number
  monthlyActiveUsers: number
  pendingCreators: number
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

export default function AdminPage() {
  const [stats, setStats] = useState<PlatformStats | null>(null)
  const [users, setUsers] = useState<AdminUser[]>([])
  const [courses, setCourses] = useState<AdminCourse[]>([])
  const [userSearch, setUserSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [usersLoading, setUsersLoading] = useState(false)

  const fetchStats = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/stats')
      if (res.ok) setStats(await res.json())
    } catch {}
  }, [])

  const fetchUsers = useCallback(async (search = '') => {
    setUsersLoading(true)
    try {
      const res = await fetch(`/api/admin/users?search=${encodeURIComponent(search)}&limit=50`)
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
      const res = await fetch('/api/admin/courses?limit=50')
      if (res.ok) {
        const data = await res.json()
        setCourses(data.courses)
      }
    } catch {}
  }, [])

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

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <RefreshCw className="h-8 w-8 animate-spin text-zinc-500" />
      </div>
    )
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

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-zinc-100">Admin Panel</h1>
        <p className="text-sm text-zinc-400 mt-1">Platform management and oversight</p>
      </div>

      {/* Stats */}
      {stats && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="border-zinc-800">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-zinc-400">Total Users</CardTitle>
              <Users className="h-4 w-4 text-zinc-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-zinc-100">{stats.totalUsers.toLocaleString()}</div>
              <p className="text-xs text-zinc-500 mt-1">DAU: {stats.dailyActiveUsers} / MAU: {stats.monthlyActiveUsers}</p>
            </CardContent>
          </Card>

          <Card className="border-zinc-800">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-zinc-400">Total Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-zinc-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-zinc-100">{stats.totalCourses}</div>
              <p className="text-xs text-zinc-500 mt-1">{stats.totalPurchases} total purchases</p>
            </CardContent>
          </Card>

          <Card className="border-zinc-800">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-zinc-400">Platform Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-zinc-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-zinc-100">${stats.platformRevenue.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
              <p className="text-xs text-zinc-500 mt-1">15% of ${stats.totalRevenue.toLocaleString(undefined, { maximumFractionDigits: 0 })} total</p>
            </CardContent>
          </Card>

          <Card className="border-zinc-800">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-zinc-400">Pending Creators</CardTitle>
              <Shield className="h-4 w-4 text-zinc-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-zinc-100">{stats.pendingCreators}</div>
              <p className="text-xs text-zinc-500 mt-1">Awaiting verification</p>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Tabs */}
      <Tabs defaultValue="users" className="space-y-4">
        <TabsList>
          <TabsTrigger value="users">Users ({users.length})</TabsTrigger>
          <TabsTrigger value="courses">Courses ({courses.length})</TabsTrigger>
          <TabsTrigger value="creators">
            Pending Creators ({users.filter(u => u.role === 'CREATOR' && !u.verified).length})
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

          <div className="rounded-lg border border-zinc-800 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-zinc-900">
                <tr>
                  <th className="text-left p-3 text-zinc-400 font-medium">User</th>
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
                    <td colSpan={6} className="p-8 text-center text-zinc-500">Loading...</td>
                  </tr>
                ) : users.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="p-8 text-center text-zinc-500">No users found</td>
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
                      {user._count.courses} courses · {user._count.purchases} purchases
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
          <div className="rounded-lg border border-zinc-800 overflow-hidden">
            <table className="w-full text-sm">
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
                      <p className="text-zinc-300">{course.creator.name || 'Unknown'}</p>
                      <p className="text-xs text-zinc-500">{course.creator.email}</p>
                    </td>
                    <td className="p-3 hidden md:table-cell text-zinc-400 text-xs">
                      {course._count.purchases} sold · {course._count.lessons} lessons · {course._count.reviews} reviews
                    </td>
                    <td className="p-3">
                      <Badge
                        className={course.published
                          ? 'bg-green-600/20 text-green-400 border-green-800'
                          : 'bg-zinc-700 text-zinc-400'
                        }
                      >
                        {course.published ? 'Published' : 'Draft'}
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
                <p className="text-zinc-300 font-medium">All creators verified</p>
                <p className="text-sm text-zinc-500 mt-1">No pending verifications</p>
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
                    <div className="flex items-center gap-2">
                      {creator.username && (
                        <Button variant="outline" size="sm" className="border-zinc-700" asChild>
                          <a href={`https://${creator.username}.aibjj.com`} target="_blank" rel="noopener noreferrer">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </a>
                        </Button>
                      )}
                      <Button
                        size="sm"
                        className="bg-green-600 hover:bg-green-700 text-white"
                        onClick={() => handleVerifyCreator(creator.id)}
                      >
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Verify
                      </Button>
                    </div>
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
