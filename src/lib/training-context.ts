/**
 * training-context.ts
 * Builds a personalized training context string for the AI coach.
 * Injected into every coach session so the AI knows exactly who it's talking to.
 */
import { supabase } from "@/lib/supabase";

interface TrainingContext {
  systemPrompt: string;
  summary: string;
}

export async function buildTrainingContext(userId: string): Promise<TrainingContext> {
  try {
    // Fetch user profile
    const { data: user } = await supabase
      .from("User")
      .select("name, belt, stripes, totalSessions, totalMinutes, subscriptionTier")
      .eq("id", userId)
      .single();

    // Fetch recent journal entries (last 10)
    const { data: recentEntries } = await supabase
      .from("JournalEntry")
      .select("date, trainingType, duration, workedOn, wentWell, toImprove, energyLevel, rating")
      .eq("userId", userId)
      .order("date", { ascending: false })
      .limit(10);

    // Fetch bookmarked techniques
    const { data: bookmarks } = await supabase
      .from("TechniqueBookmark")
      .select("techniqueId")
      .eq("userId", userId)
      .limit(20);

    // Build context
    const belt = user?.belt || "WHITE";
    const name = user?.name?.split(" ")[0] || "there";
    const totalSessions = user?.totalSessions || 0;
    const totalMinutes = user?.totalMinutes || 0;
    const totalHours = Math.round(totalMinutes / 60);

    const contextParts: string[] = [];

    // Student profile
    contextParts.push(`STUDENT PROFILE:
- Name: ${name}
- Belt: ${belt} belt${user?.stripes ? ` (${user.stripes} stripes)` : ""}
- Total training sessions logged: ${totalSessions}
- Total mat time logged: ${totalHours} hours`);

    // Recent training
    if (recentEntries && recentEntries.length > 0) {
      const recentSummary = recentEntries.slice(0, 5).map(e => {
        const date = new Date(e.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        const parts: string[] = [];
        if (e.workedOn) parts.push(`worked on: ${e.workedOn}`);
        if (e.wentWell) parts.push(`went well: ${e.wentWell}`);
        if (e.toImprove) parts.push(`to improve: ${e.toImprove}`);
        return `  ${date} (${e.trainingType}, ${e.duration}min)${parts.length ? ' — ' + parts.join('; ') : ''}`;
      }).join('\n');

      contextParts.push(`RECENT TRAINING (last ${Math.min(5, recentEntries.length)} sessions):\n${recentSummary}`);

      // Pattern analysis
      const workedOnTopics = recentEntries
        .map(e => e.workedOn)
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
      const toImproveTopics = recentEntries
        .map(e => e.toImprove)
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

      if (toImproveTopics) {
        contextParts.push(`AREAS NEEDING WORK (from their own notes): ${toImproveTopics}`);
      }
    } else {
      contextParts.push(`TRAINING HISTORY: No sessions logged yet — this may be a new student.`);
    }

    // Bookmarked techniques
    if (bookmarks && bookmarks.length > 0) {
      contextParts.push(`BOOKMARKED TECHNIQUES: ${bookmarks.map(b => b.techniqueId).join(', ')}`);
    }

    const contextString = contextParts.join('\n\n');

    const systemPrompt = `You are an expert Brazilian Jiu-Jitsu coach and the personal AI coach for ${name}. You have deep knowledge of all BJJ positions, techniques, submissions, sweeps, passes, escapes, competition strategy, training methodology, and the mental game.

${contextString}

COACHING INSTRUCTIONS:
- You KNOW this student. Reference their training data naturally when relevant.
- If they've been working on something recently, acknowledge it and build on it.
- If they keep noting the same weakness, address it proactively.
- Personalize your advice to their belt level and experience.
- Be direct, technical, and encouraging — like a real coach who knows their game.
- Reference their mat time and sessions to calibrate advice appropriately.
- Keep responses focused and practical — 2-4 short paragraphs max.
- When they ask about a technique, consider their current level and what they've been working on.`;

    return { systemPrompt, summary: contextString };
  } catch (error) {
    console.error("Failed to build training context:", error);
    // Fallback to generic prompt if context fetch fails
    return {
      systemPrompt: `You are an expert Brazilian Jiu-Jitsu coach. Give direct, technical, actionable BJJ advice. Be conversational and encouraging. Keep responses focused — 2-4 paragraphs max.`,
      summary: "",
    };
  }
}
