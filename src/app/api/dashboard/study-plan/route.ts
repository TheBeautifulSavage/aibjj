import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { anthropic } from '@/lib/anthropic'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const userId = (session.user as { id: string }).id

    // Gather training context
    const [recentJournals, gamePlans, bookmarks] = await Promise.all([
      db.journalEntry.findMany({
        where: { userId },
        orderBy: { date: 'desc' },
        take: 20,
      }),
      db.gamePlan.findMany({
        where: { userId },
        orderBy: { updatedAt: 'desc' },
        take: 1,
      }),
      db.techniqueBookmark.findMany({
        where: { userId },
        take: 20,
      }),
    ])

    const journalSummary = recentJournals.map((j: { date: string; workedOn?: string; toImprove?: string; wentWell?: string }) =>
      `${j.date.toString().slice(0, 10)}: Worked on: ${j.workedOn || 'not specified'}. To improve: ${j.toImprove || 'none noted'}. Went well: ${j.wentWell || ''}`
    ).join('\n')

    const gamePlanSummary = (gamePlans[0] as { gameplanData?: string; description?: string } | undefined)?.gameplanData
      || (gamePlans[0] as { description?: string } | undefined)?.description
      || 'No game plan set'

    const bookmarkList = (bookmarks as { techniqueId: string }[]).map(b => b.techniqueId).join(', ') || 'None'

    const response = await anthropic.messages.create({
      model: 'claude-3-5-haiku-20241022',
      max_tokens: 1000,
      system: `You are an expert BJJ coach analyzing a student's training data. Based on their journal entries and game plan, identify their 3 biggest weaknesses and recommend specific study areas. Be specific, actionable, and reference actual BJJ positions and techniques. Return JSON only.`,
      messages: [{
        role: 'user',
        content: `Analyze this BJJ practitioner's training and provide study recommendations.

RECENT JOURNALS (last ${recentJournals.length} sessions):
${journalSummary || 'No journal entries yet — this is a new student.'}

GAME PLAN: ${gamePlanSummary}
BOOKMARKED TECHNIQUES: ${bookmarkList}

Return a JSON object with this exact structure:
{
  "summary": "2-3 sentence analysis of their game or advice for new students",
  "weaknesses": ["weakness or focus area 1", "focus area 2", "focus area 3"],
  "focusAreas": [
    {
      "area": "e.g. Guard Retention",
      "reason": "why this was identified",
      "drills": ["specific drill 1", "specific drill 2"]
    }
  ],
  "weeklyGoal": "One specific goal for this week"
}`,
      }],
    })

    const content = response.content[0]
    if (content.type !== 'text') throw new Error('Invalid response from AI')

    let plan
    try {
      plan = JSON.parse(content.text)
    } catch {
      const match = content.text.match(/\{[\s\S]*\}/)
      plan = match ? JSON.parse(match[0]) : {
        summary: "Start logging your training sessions to get personalized recommendations.",
        weaknesses: ["Log your first session to begin analysis"],
        focusAreas: [{ area: "Fundamentals", reason: "Build your foundation", drills: ["Hip escapes", "Basic guard retention"] }],
        weeklyGoal: "Train at least 3 times this week and log each session",
      }
    }

    return NextResponse.json({ plan, relatedCourses: [] })
  } catch (error) {
    console.error('Study plan error:', error)
    return NextResponse.json({ error: 'Failed to generate study plan' }, { status: 500 })
  }
}
