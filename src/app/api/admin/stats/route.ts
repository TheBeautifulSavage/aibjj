import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { supabase } from '@/lib/supabase'

export async function GET() {
  const session = await getServerSession(authOptions)
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  if (session.user.role !== 'ADMIN') return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  const now = new Date()
  const todayStart = new Date(now)
  todayStart.setHours(0, 0, 0, 0)
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1)
  const lastMonthStart = new Date(now.getFullYear(), now.getMonth() - 1, 1)
  const sixMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 5, 1)

  // Total users
  const { count: totalUsers } = await supabase
    .from('User')
    .select('*', { count: 'exact', head: true })

  // New users this month
  const { count: newUsersThisMonth } = await supabase
    .from('User')
    .select('*', { count: 'exact', head: true })
    .gte('createdAt', monthStart.toISOString())

  // New users last month
  const { count: newUsersLastMonth } = await supabase
    .from('User')
    .select('*', { count: 'exact', head: true })
    .gte('createdAt', lastMonthStart.toISOString())
    .lt('createdAt', monthStart.toISOString())

  // Users by subscription
  const { data: subTiers } = await supabase
    .from('User')
    .select('subscriptionTier')

  const tierCounts: Record<string, number> = {}
  if (subTiers) {
    for (const u of subTiers) {
      const t = u.subscriptionTier || 'FREE'
      tierCounts[t] = (tierCounts[t] || 0) + 1
    }
  }

  // Users by role
  const { data: roleCounts } = await supabase
    .from('User')
    .select('role')

  const roleBreakdown: Record<string, number> = {}
  if (roleCounts) {
    for (const u of roleCounts) {
      roleBreakdown[u.role] = (roleBreakdown[u.role] || 0) + 1
    }
  }

  // Total courses
  const { count: totalCourses } = await supabase
    .from('Course')
    .select('*', { count: 'exact', head: true })

  const { count: publishedCourses } = await supabase
    .from('Course')
    .select('*', { count: 'exact', head: true })
    .eq('published', true)

  // Total purchases + revenue
  const { data: purchases } = await supabase
    .from('Purchase')
    .select('amount, createdAt')

  const totalPurchases = purchases?.length ?? 0
  const totalRevenue = purchases?.reduce((s, p) => s + (p.amount || 0), 0) ?? 0
  const platformRevenue = totalRevenue * 0.15

  // Pending creators
  const { count: pendingCreators } = await supabase
    .from('User')
    .select('*', { count: 'exact', head: true })
    .eq('role', 'CREATOR')
    .eq('verified', false)

  // Monthly signups for growth chart (last 6 months)
  const { data: allUsers } = await supabase
    .from('User')
    .select('createdAt')
    .gte('createdAt', sixMonthsAgo.toISOString())

  const signupsByMonth: Record<string, number> = {}
  if (allUsers) {
    for (const u of allUsers) {
      const month = u.createdAt.slice(0, 7) // "2026-04"
      signupsByMonth[month] = (signupsByMonth[month] || 0) + 1
    }
  }

  // Fill in months with 0 if missing
  const growthData = []
  for (let i = 5; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1)
    const key = d.toISOString().slice(0, 7)
    growthData.push({ month: key, signups: signupsByMonth[key] || 0 })
  }

  // AI usage today
  const { count: aiMsgsToday } = await supabase
    .from('ChatMessage')
    .select('*', { count: 'exact', head: true })
    .gte('createdAt', todayStart.toISOString())

  // Journal entries this month
  const { count: journalEntriesMonth } = await supabase
    .from('JournalEntry')
    .select('*', { count: 'exact', head: true })
    .gte('createdAt', monthStart.toISOString())

  return NextResponse.json({
    totalUsers: totalUsers ?? 0,
    newUsersThisMonth: newUsersThisMonth ?? 0,
    newUsersLastMonth: newUsersLastMonth ?? 0,
    totalCourses: totalCourses ?? 0,
    publishedCourses: publishedCourses ?? 0,
    totalPurchases,
    totalRevenue,
    platformRevenue,
    pendingCreators: pendingCreators ?? 0,
    tierCounts,
    roleBreakdown,
    growthData,
    aiMsgsToday: aiMsgsToday ?? 0,
    journalEntriesMonth: journalEntriesMonth ?? 0,
  })
}
