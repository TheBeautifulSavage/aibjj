import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import Anthropic from '@anthropic-ai/sdk'

export async function GET() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const userId = session.user.id

  // Gather training context
  const [recentJournals, gamePlans, completedLessons, bookmarks] = await Promise.all([
    prisma.journalEntry.findMany({
      where: { userId },
      orderBy: { date: 'desc' },
      take: 30,
    }),
    prisma.gamePlan.findMany({
      where: { userId },
      orderBy: { updatedAt: 'desc' },
      take: 1,
    }),
    prisma.lessonProgress.findMany({
      where: { userId, completed: true },
      include: { lesson: { select: { title: true, description: true } } },
      orderBy: { completedAt: 'desc' },
      take: 20,
    }),
    prisma.techniqueBookmark.findMany({
      where: { userId },
      take: 20,
    }),
  ])

  // Build context for AI
  const journalSummary = recentJournals.map(j =>
    `${j.date.toISOString().slice(0,10)}: Worked on: ${j.workedOn || 'not specified'}. Issues: ${j.toImprove || 'none noted'}. Notes: ${j.wentWell || ''}`
  ).join('\n')

  const gamePlanSummary = gamePlans[0]?.gameplanData || gamePlans[0]?.description || 'No game plan set'

  // Suppress unused variable warning — available for future use
  void completedLessons
  void bookmarks

  const client = new Anthropic()

  const response = await client.messages.create({
    model: 'claude-haiku-4-5',
    max_tokens: 1000,
    system: `You are an expert BJJ coach analyzing a student's training data. Based on their journal entries and game plan, identify their 3 biggest weaknesses or gaps and recommend specific study areas. Be specific, actionable, and reference actual BJJ positions and techniques. Return JSON only.`,
    messages: [{
      role: 'user',
      content: `Analyze this BJJ practitioner's recent training and provide study recommendations.

RECENT JOURNALS (last 30 sessions):
${journalSummary || 'No journal entries yet'}

GAME PLAN:
${gamePlanSummary}

Return a JSON object with this exact structure:
{
  "summary": "2-3 sentence analysis of their game",
  "weaknesses": ["weakness 1", "weakness 2", "weakness 3"],
  "focusAreas": [
    {
      "area": "e.g. Half Guard Recovery",
      "reason": "why this was identified",
      "position": "e.g. half-guard",
      "category": "e.g. escape",
      "drills": ["specific drill 1", "specific drill 2"]
    }
  ],
  "weeklyGoal": "One specific goal for this week",
  "searchTerms": ["search term 1", "search term 2", "search term 3"]
}`
    }]
  })

  const content = response.content[0]
  if (content.type !== 'text') throw new Error('Invalid response')

  let plan
  try {
    plan = JSON.parse(content.text)
  } catch {
    // Extract JSON from response if wrapped in markdown
    const match = content.text.match(/\{[\s\S]*\}/)
    plan = match ? JSON.parse(match[0]) : null
  }

  // Find matching courses from marketplace
  const relatedCourses = plan?.searchTerms ? await prisma.course.findMany({
    where: {
      published: true,
      OR: plan.searchTerms.map((term: string) => ({
        OR: [
          { title: { contains: term, mode: 'insensitive' } },
          { description: { contains: term, mode: 'insensitive' } },
          { category: { contains: term, mode: 'insensitive' } },
        ]
      }))
    },
    include: {
      creator: { select: { name: true, username: true, belt: true } },
      reviews: { select: { rating: true } },
    },
    take: 3,
  }) : []

  return NextResponse.json({ plan, relatedCourses })
}
