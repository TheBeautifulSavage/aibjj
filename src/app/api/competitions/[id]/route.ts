import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db as prisma } from "@/lib/db";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({ where: { email: session.user.email } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const { id } = await params;
  const body = await req.json();

  const existing = await prisma.competition.findFirst({
    where: { id, userId: user.id },
  });
  if (!existing) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const competition = await prisma.competition.update({
    where: { id },
    data: {
      name: body.name ?? existing.name,
      date: body.date ? new Date(body.date) : existing.date,
      location: body.location ?? existing.location,
      division: body.division ?? existing.division,
      weightClass: body.weightClass ?? existing.weightClass,
      result: body.result ?? existing.result,
      wins: body.wins ?? existing.wins,
      losses: body.losses ?? existing.losses,
      notes: body.notes ?? existing.notes,
    },
  });

  return NextResponse.json({ competition });
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({ where: { email: session.user.email } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const { id } = await params;

  const existing = await prisma.competition.findFirst({
    where: { id, userId: user.id },
  });
  if (!existing) return NextResponse.json({ error: "Not found" }, { status: 404 });

  await prisma.competition.delete({ where: { id } });

  return NextResponse.json({ success: true });
}
