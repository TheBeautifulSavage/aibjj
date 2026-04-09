/**
 * API key authentication for the AIBJJ developer API
 * Pro users can generate a personal API key in Settings
 */
import { supabase } from "@/lib/supabase";

export async function authenticateApiKey(request: Request): Promise<{ userId: string; tier: string } | null> {
  const authHeader = request.headers.get("Authorization");
  if (!authHeader?.startsWith("Bearer ")) return null;

  const apiKey = authHeader.slice(7).trim();
  if (!apiKey || !apiKey.startsWith("aibjj_")) return null;

  const { data: users } = await supabase
    .from("User")
    .select("id, subscriptionTier, isLifetime")
    .eq("apiKey", apiKey)
    .limit(1);

  const user = users?.[0];
  if (!user) return null;

  // Only Pro/Annual/Lifetime users get API access
  const allowed = ["PRO", "ANNUAL"].includes(user.subscriptionTier) || user.isLifetime;
  if (!allowed) return null;

  return { userId: user.id, tier: user.subscriptionTier };
}
