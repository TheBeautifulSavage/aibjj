import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const session = await getServerSession(authOptions)
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  if (session.user.role !== 'ADMIN') return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  const now = new Date()
  const todayStart = new Date(now)
  todayStart.setHours(0, 0, 0, 0)
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1)

  const [
    totalUsers,
    totalCourses,
    totalPurchases,
    dailyActiveUsers,
    monthlyActiveUsers,
    pendingCreators,
    recentPurchases,
  ] = await Promise.all([
    prisma.user.count(),
    prisma.course.count(),
    prisma.purchase.count(),
    prisma.chatMessage.groupBy({
      by: ['userId'],
      where: { createdAt: { gte: todayStart } },
    }).then(r => r.length),
    prisma.chatMessage.groupBy({
      by: ['userId'],
      where: { createdAt: { gte: monthStart } },
    }).then(r => r.length),
    prisma.user.count({ where: { role: 'CREATOR', verified: false } }),
    prisma.purchase.findMany({ select: { amount: true } }),
  ])

  const totalRevenue = recentPurchases.reduce((sum, p) => sum + p.amount, 0)
  const platformRevenue = totalRevenue * 0.15

  return NextResponse.json({
    totalUsers,
    totalCourses,
    totalPurchases,
    totalRevenue,
    platformRevenue,
    dailyActiveUsers,
    monthlyActiveUsers,
    pendingCreators,
  })
}
