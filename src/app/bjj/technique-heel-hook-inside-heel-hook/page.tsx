import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Inside Heel Hook: Complete BJJ Technique Guide | AIBJJ",
  description: "Master the inside heel hook with our comprehensive guide. Learn setup, execution, key details, and strategic applications for all BJJ levels.",
};

export default function Page() {
  const tags = ["heel hook", "leg lock", "footlock", "BJJ technique", "submission"];
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
<article className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map(tag => (
            <Link key={tag} href={`/bjj/tag/${tag}`}
              className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:border-red-600/50 hover:text-red-400 transition-colors">
              #{tag}
            </Link>
          ))}
        </div>
        <h1 className="text-4xl font-black sm:text-5xl">Inside Heel Hook: Complete BJJ Technique Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Master the inside heel hook with our comprehensive guide. Learn setup, execution, key details, and strategic applications for all BJJ levels.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Heel Hook?</h2>
            <p>The inside heel hook is one of the most powerful and dangerous leg lock submissions in Brazilian Jiu-Jitsu. It targets the heel and ankle by controlling the foot while applying rotational and compressive pressure to the knee joint. Unlike outside heel hooks that attack from the leg's exterior, inside heel hooks attack from between the opponent's legs, making them exceptionally effective from various positions. The submission works by hyperextending and internally rotating the knee, creating immense pressure on the ligaments and joint structure. This technique has evolved from submission-only rulesets into mainstream BJJ, with many competitors now specializing in leg lock systems. The inside heel hook is particularly valuable because it can be entered from positions like the back take, deep half guard, and leg drag positions. Understanding its mechanics is essential for modern BJJ practitioners, as leg lock expertise has become fundamental to competitive success at all levels.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>The most common setup begins from a dominant leg drag or back control position. First, secure your opponent's leg by wrapping your arm around their foot, positioning your bicep on the heel area. Ensure your grip is tight and your palm faces upward. Next, hook your outside leg over their opposite leg to control their free leg and prevent escape. Your body positioning is crucial: keep your hips low and drive forward into their leg. Lock your hands together underneath their leg, creating a secure frame. Your second arm should grip your own wrist or clasp together, maintaining control. Once established, keep the foot locked against your hip or torso. To finish, slowly increase pressure by rotating your hips and leaning back, or apply compression by squeezing your arms together. The key is controlling the heel firmly while isolating the leg completely. Many practitioners enter this from the back control by dropping the leg, creating a trapped leg scenario where escape becomes nearly impossible. Practice these setups slowly first, focusing on proper positioning before adding submission pressure.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>Proper foot placement is absolutely critical. The heel must be firmly locked in your grip, not the middle of the foot. Many beginners grip too high on the foot, reducing submission effectiveness and allowing escapes. Your positioning relative to your opponent determines submission security: maintain low hips and keep your weight distributed forward. Never extend your legs straight out, as this allows your opponent to posture up and escape. Control the free leg aggressively to prevent your opponent from turning into you, which eliminates submission pressure. A common mistake is applying submission too quickly without establishing dominance first. Patience is essential: establish control, immobilize both legs, then gradually increase pressure. Watch for your opponent's defensive positioning. If they manage to turn toward you significantly, the submission becomes ineffective and potentially dangerous to your own knee. Always start with light pressure during training to develop feel and safety awareness. The inside heel hook is illegal in many BJJ rulesets below advanced levels, so verify competition rules. Finally, tap early when caught in this submission during training, as the injury potential is substantial.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>The inside heel hook is most effective in leg lock-focused competition brackets and advanced training environments. Advanced competitors utilize this from back control, leg drag, and deep half guard positions where leg isolation is already established. In self-defense scenarios, leg locks are generally impractical compared to standing techniques. During training, use heel hooks sparingly and only with experienced training partners who understand the risks. The submission is particularly valuable when you've already achieved dominant positioning and your opponent is actively defending upper body submissions. Competition-wise, leg lock specialists often set up heel hooks through systematic leg lock sequences, chaining multiple attacks together. If your opponent defends by moving their hips toward you, immediately switch to different submissions like calf slicers or knee reaps. This technique shines when you control the center of the mat and your opponent cannot easily stand or escape. Development of heel hook proficiency requires consistent drilling and technical refinement. Many modern BJJ athletes dedicate specific training phases to leg lock systems, understanding that leg lock defense is mandatory knowledge for survival in contemporary jiu-jitsu.</p>
          </section>
        </div>
        <div className="mt-16 rounded-2xl border border-red-900/30 bg-red-950/20 p-8 text-center">
          <h2 className="text-2xl font-black">Train Smarter with AI Coaching</h2>
          <p className="mt-2 text-zinc-400">Track your training, get personalized coaching, and build your game plan.</p>
          <Link href="/auth/signup" className="mt-5 inline-block rounded-xl bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700">Start Free</Link>
        </div>
        <div className="mt-10">
          <h3 className="text-lg font-bold text-white mb-4">Explore More</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/bjj" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">BJJ Encyclopedia</Link>
            <Link href="/academies" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">Find an Academy</Link>
            <Link href="/bjj-techniques" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">Technique Library</Link>
            <Link href="/coach" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">AI Coach</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
