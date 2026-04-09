import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { z } from "zod";
import { db as prisma } from "@/lib/db";
import { authOptions } from "@/lib/auth";

const createEntrySchema = z.object({
  date: z.string(),
  trainingType: z.string().default("GI"),
  duration: z.number().min(1).max(600).default(60),
  partners: z.string().optional(),
  workedOn: z.string().optional(),
  wentWell: z.string().optional(),
  toImprove: z.string().optional(),
  energyLevel: z.number().min(1).max(5).optional(),
  rating: z.number().min(1).max(5).optional(),
  injuryNotes: z.string().optional(),
});

const updateEntrySchema = createEntrySchema.partial().extend({
  id: z.string(),
});

async function getUserId() {
  const session = await getServerSession(authOptions);
  if (!session?.user || !(session.user as { id?: string }).id) return null;
  return (session.user as { id: string }).id;
}

export async function GET(req: NextRequest) {
  try {
    const userId = await getUserId();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "20", 10);
    const type = searchParams.get("type");
    const dateFrom = searchParams.get("dateFrom");
    const dateTo = searchParams.get("dateTo");
    const all = searchParams.get("all");

    const where: Record<string, unknown> = { userId };

    if (type && type !== "ALL") {
      where.trainingType = type;
    }

    if (dateFrom || dateTo) {
      const dateFilter: Record<string, Date> = {};
      if (dateFrom) dateFilter.gte = new Date(dateFrom);
      if (dateTo) {
        const end = new Date(dateTo);
        end.setHours(23, 59, 59, 999);
        dateFilter.lte = end;
      }
      where.date = dateFilter;
    }

    if (all === "true") {
      const entries = await prisma.journalEntry.findMany({
        where,
        orderBy: { date: "desc" },
      });
      return NextResponse.json({ entries, total: entries.length });
    }

    const [entries, total] = await Promise.all([
      prisma.journalEntry.findMany({
        where,
        orderBy: { date: "desc" },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.journalEntry.count({ where }),
    ]);

    return NextResponse.json({
      entries,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.error("Journal GET error:", error);
    return NextResponse.json(
      { error: "Failed to fetch journal entries" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const userId = await getUserId();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Anti-spam: Free users limited to 10 journal entries/month
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { subscriptionTier: true, isLifetime: true },
    });
    const isPro = user && (["PRO", "ANNUAL"].includes(user.subscriptionTier) || user.isLifetime);
    if (!isPro) {
      const startOfMonth = new Date();
      startOfMonth.setDate(1);
      startOfMonth.setHours(0, 0, 0, 0);
      const monthEntries = await prisma.journalEntry.findMany({
        where: { userId },
      });
      const thisMonthCount = monthEntries.filter(
        (e: { createdAt: string }) => new Date(e.createdAt) >= startOfMonth
      ).length;
      if (thisMonthCount >= 10) {
        return NextResponse.json(
          {
            error: "Free accounts are limited to 10 journal entries per month. Upgrade to Pro for unlimited logging.",
            upgradeUrl: "/pricing",
          },
          { status: 429 }
        );
      }
    }

    const body = await req.json();
    const parsed = createEntrySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", details: parsed.error.issues },
        { status: 400 }
      );
    }

    const data = parsed.data;

    const entry = await prisma.journalEntry.create({
      data: {
        userId,
        date: new Date(data.date),
        trainingType: data.trainingType,
        duration: data.duration,
        partners: data.partners || null,
        workedOn: data.workedOn || null,
        wentWell: data.wentWell || null,
        toImprove: data.toImprove || null,
        energyLevel: data.energyLevel ?? null,
        rating: data.rating ?? null,
        injuryNotes: data.injuryNotes || null,
      },
    });

    return NextResponse.json(entry, { status: 201 });
  } catch (error) {
    console.error("Journal POST error:", error);
    return NextResponse.json(
      { error: "Failed to create journal entry" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const userId = await getUserId();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const parsed = updateEntrySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", details: parsed.error.issues },
        { status: 400 }
      );
    }

    const { id, ...data } = parsed.data;

    const existing = await prisma.journalEntry.findFirst({
      where: { id, userId },
    });

    if (!existing) {
      return NextResponse.json({ error: "Entry not found" }, { status: 404 });
    }

    const updateData: Record<string, unknown> = {};
    if (data.date) updateData.date = new Date(data.date);
    if (data.trainingType !== undefined) updateData.trainingType = data.trainingType;
    if (data.duration !== undefined) updateData.duration = data.duration;
    if (data.partners !== undefined) updateData.partners = data.partners || null;
    if (data.workedOn !== undefined) updateData.workedOn = data.workedOn || null;
    if (data.wentWell !== undefined) updateData.wentWell = data.wentWell || null;
    if (data.toImprove !== undefined) updateData.toImprove = data.toImprove || null;
    if (data.energyLevel !== undefined) updateData.energyLevel = data.energyLevel ?? null;
    if (data.rating !== undefined) updateData.rating = data.rating ?? null;
    if (data.injuryNotes !== undefined) updateData.injuryNotes = data.injuryNotes || null;

    const entry = await prisma.journalEntry.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json(entry);
  } catch (error) {
    console.error("Journal PATCH error:", error);
    return NextResponse.json(
      { error: "Failed to update journal entry" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const userId = await getUserId();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Missing id" }, { status: 400 });
    }

    const existing = await prisma.journalEntry.findFirst({
      where: { id, userId },
    });

    if (!existing) {
      return NextResponse.json({ error: "Entry not found" }, { status: 404 });
    }

    await prisma.journalEntry.delete({ where: { id } });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Journal DELETE error:", error);
    return NextResponse.json(
      { error: "Failed to delete journal entry" },
      { status: 500 }
    );
  }
}
