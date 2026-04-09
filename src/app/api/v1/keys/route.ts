import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { randomBytes } from "crypto";

export const dynamic = "force-dynamic";

/** GET /api/v1/keys — get current API key (masked) */
export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const userId = (session.user as { id: string }).id;
  const user = await db.user.findUnique({ where: { id: userId }, select: { apiKey: true, subscriptionTier: true, isLifetime: true } });

  const allowed = user && (["PRO", "ANNUAL"].includes(user.subscriptionTier) || user.isLifetime);
  if (!allowed) return NextResponse.json({ error: "API access requires Pro subscription", upgradeUrl: "/pricing" }, { status: 403 });

  const masked = user?.apiKey ? "aibjj_" + "*".repeat(32) + user.apiKey.slice(-8) : null;

  return NextResponse.json({ hasKey: !!user?.apiKey, maskedKey: masked });
}

/** POST /api/v1/keys — generate or regenerate API key */
export async function POST() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const userId = (session.user as { id: string }).id;
  const user = await db.user.findUnique({ where: { id: userId }, select: { subscriptionTier: true, isLifetime: true } });

  const allowed = user && (["PRO", "ANNUAL"].includes(user.subscriptionTier) || user.isLifetime);
  if (!allowed) return NextResponse.json({ error: "API access requires Pro subscription", upgradeUrl: "/pricing" }, { status: 403 });

  const newKey = "aibjj_" + randomBytes(32).toString("hex");

  await db.user.update({ where: { id: userId }, data: { apiKey: newKey } });

  return NextResponse.json({ apiKey: newKey, message: "Save this key — it won't be shown again." });
}

/** DELETE /api/v1/keys — revoke API key */
export async function DELETE() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const userId = (session.user as { id: string }).id;
  await db.user.update({ where: { id: userId }, data: { apiKey: null } });

  return NextResponse.json({ success: true });
}
