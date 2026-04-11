import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Outside Heel Hook: Complete BJJ Submission Guide | AIBJJ",
  description: "Master the outside heel hook with detailed setup, execution, and defensive strategies. Learn this powerful leg lock submission used in modern BJJ.",
};

export default function Page() {
  const tags = ["heel hook", "leg lock", "submission", "footlock"];
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <nav className="sticky top-0 z-40 border-b border-zinc-800 bg-[#0a0a0a]/95 backdrop-blur px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map(tag => (
            <Link key={tag} href={`/bjj/tag/${tag}`}
              className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:border-red-600/50 hover:text-red-400 transition-colors">
              #{tag}
            </Link>
          ))}
        </div>
        <h1 className="text-4xl font-black sm:text-5xl">Outside Heel Hook: Complete BJJ Submission Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Master the outside heel hook with detailed setup, execution, and defensive strategies. Learn this powerful leg lock submission used in modern BJJ.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Heel Hook?</h2>
            <p>The outside heel hook is a devastating leg lock submission that targets the ankle and knee joint through rotational pressure. Unlike the inside heel hook, the outside variation uses a figure-four grip on the leg from the outside position, creating torque that hyperextends and internally rotates the knee while applying ankle pressure simultaneously.

This submission is particularly effective because it attacks two joints at once, making it extremely difficult to defend against once properly established. The heel hook has become increasingly popular in modern BJJ and submission grappling, especially in no-gi competitions where leg lock entries are more prevalent.

The outside heel hook is considered one of the most powerful submissions available, which is why many traditional BJJ academies historically restricted it to higher belts. Understanding proper mechanics prevents injury to both practitioners. When executed with control and knowledge of proper defense, it's a valuable addition to any grappler's arsenal.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>Begin from a position where you've controlled your opponent's leg, typically from leg drag guard, inside leg lock position, or after passing to side control. Your target is establishing the fundamental position: controlling your opponent's leg between your arms.

1. Cup the heel of your target leg firmly with one hand, securing it tightly against your body.

2. Thread your other arm through the leg from the outside, creating a figure-four grip by interlocking your hands behind the knee.

3. Position yourself at approximately a 45-degree angle to your opponent, not directly in line with the leg.

4. Tighten your grip by pulling your elbows toward your hips, bringing your hands closer together.

5. Apply rotation by turning your hips toward the trapped leg, creating internal rotation at the knee.

6. Finish by extending your torso backward while maintaining the grip, hyperextending the knee joint.

Maintain control throughout, ensuring your grip remains tight and pressure increases gradually. Never jerk or apply sudden force, as this increases injury risk.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>Critical technical details determine success and safety. Your grip must be secure: cupping the heel correctly means your hand cups the bottom of the foot, not grasping the sides. Your figure-four grip should lock behind the knee with hands clasped tightly together. Many practitioners fail by applying pressure too early before establishing solid control.

Common mistakes include: positioning yourself directly in line with the leg, which reduces mechanical advantage; failing to control the upper leg, allowing escape; applying sudden jerking motions instead of gradual pressure; and not properly securing the heel, causing the foot to slip free.

Angle matters significantly—maintain a 45-degree angle to maximize torque while protecting yourself from counter-attacks. Keep your opponent's leg pinned against your body throughout the submission. Many new practitioners rush the finish without establishing the foundational position first.

Injury prevention requires understanding that tap times are typically very fast with heel hooks. Communication with training partners is essential. Always warm up your knees and ankles thoroughly before practicing leg lock work, and tap early to prevent joint damage.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>The outside heel hook works best in specific positions and against particular defenses. Use it when you've controlled an opponent's leg in leg drag guard, caught them in a failed leg attack, or transitioned from inside leg lock position after they've escaped the initial threats.

This submission shines in no-gi grappling where leg lock entries flow more naturally and repeatedly. In gi competition, opportunities arise after passing guard or controlling an opponent's movement. The outside heel hook is particularly valuable against opponents who focus on leg lock defense without understanding positional escapes.

Strategically, employ it when your opponent has committed their weight forward or is defending upper body submissions, leaving their leg vulnerable. It's also effective when you've established leg lock dominance and your opponent expects inside heel hook entries—the outside variation surprises them with different attack angles.

Timing matters: use it when your opponent is fatigued, when they've been defending multiple leg lock threats, or when they're focused on upper body defense. Avoid applying it against much larger opponents from inferior positions or when you lack solid control of the leg. Always consider your opponent's leg lock experience and match context before committing to the submission.</p>
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
