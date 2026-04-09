import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const userId = session.user.id

  // Get all courses by this creator
  const courses = await prisma.course.findMany({
    where: { creatorId: userId },
    include: {
      purchases: true,
      reviews: true,
      lessons: { select: { id: true } },
    },
    orderBy: { createdAt: 'desc' },
  })

  // Calculate stats
  const totalRevenue = courses.reduce((sum: number, c: { purchases: { amount: number }[] }) =>
    sum + c.purchases.reduce((s: number, p: { amount: number }) => s + p.amount, 0), 0)
  const totalStudents = courses.reduce((sum: number, c: { purchases: unknown[] }) => sum + c.purchases.length, 0)
  const totalCourses = courses.length
  const publishedCourses = courses.filter(c => c.published).length

  const allRatings = courses.flatMap((c: { reviews: { rating: number }[] }) => c.reviews.map((r: { rating: number }) => r.rating))
  const averageRating = allRatings.length > 0
    ? allRatings.reduce((a, b) => a + b, 0) / allRatings.length
    : 0

  // Revenue by month (last 6 months)
  const sixMonthsAgo = new Date()
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6)

  const recentPurchases = await prisma.purchase.findMany({
    where: {
      course: { creatorId: userId },
      createdAt: { gte: sixMonthsAgo },
    },
    orderBy: { createdAt: 'asc' },
  })

  // Group by month
  const revenueByMonth: Record<string, number> = {}
  recentPurchases.forEach(p => {
    const month = p.createdAt.toISOString().slice(0, 7)
    revenueByMonth[month] = (revenueByMonth[month] || 0) + p.amount
  })

  const revenueData = Object.entries(revenueByMonth).map(([month, revenue]) => ({
    month,
    revenue,
  }))

  return NextResponse.json({
    totalRevenue,
    totalStudents,
    totalCourses,
    publishedCourses,
    averageRating,
    revenueData,
    courses: courses.map(c => ({
      id: c.id,
      title: c.title,
      price: c.price,
      students: c.purchases.length,
      revenue: c.purchases.reduce((s: number, p: { amount: number }) => s + p.amount, 0),
      published: c.published,
      rating: c.reviews.length > 0
        ? c.reviews.reduce((s: number, r: { rating: number }) => s + r.rating, 0) / c.reviews.length
        : null,
      lessonCount: c.lessons.length,
      category: c.category,
      beltLevel: c.beltLevel,
      createdAt: c.createdAt,
    })),
  })
}
