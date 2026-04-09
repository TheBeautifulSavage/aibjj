import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function PATCH(
  req: NextRequest,
  { params }: { params: { courseId: string } }
) {
  const session = await getServerSession(authOptions)
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  if (session.user.role !== 'ADMIN') return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  const body = await req.json()
  const { published, approved, rejected } = body

  const updateData: Record<string, unknown> = {}
  if (published !== undefined) updateData.published = published
  // approved/rejected would need extra fields in schema; for now just control published
  if (approved === true) updateData.published = true
  if (rejected === true) updateData.published = false

  const course = await prisma.course.update({
    where: { id: params.courseId },
    data: updateData,
    select: { id: true, title: true, published: true },
  })

  return NextResponse.json(course)
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { courseId: string } }
) {
  const session = await getServerSession(authOptions)
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  if (session.user.role !== 'ADMIN') return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  await prisma.course.delete({ where: { id: params.courseId } })
  return NextResponse.json({ message: 'Course deleted' })
}
