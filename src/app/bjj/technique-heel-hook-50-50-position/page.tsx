import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Heel Hook from 50/50 Position: Complete Guide | AIBJJ",
  description: "Master the heel hook from 50/50 position. Learn setup, execution, and defense strategies for this powerful leglock in BJJ.",
};

export default function Page() {
  const tags = ["heel hook", "50/50 position", "leglock", "footlock"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Heel Hook from 50/50 Position: Complete Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Master the heel hook from 50/50 position. Learn setup, execution, and defense strategies for this powerful leglock in BJJ.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Heel Hook?</h2>
            <p>The heel hook is one of the most powerful and sought-after leglocks in Brazilian Jiu-Jitsu. From the 50/50 position, where both competitors have mutual leg entanglement, the heel hook becomes an exceptionally dangerous submission. The technique targets the heel and ankle by applying rotational pressure to the foot and lower leg, creating tremendous torque on the knee and ankle joints. The 50/50 position offers a unique advantage because both athletes have equal positional control, making it a high-stakes scramble where technical precision determines success. The heel hook from this position is particularly effective because it's difficult to defend once properly established. The technique gained prominence in modern BJJ through high-level competitors and has become increasingly prevalent in both gi and no-gi competition. Understanding the mechanics of this submission is essential for any serious grappler, as it's become fundamental to contemporary leglock systems. The heel hook demands respect due to its injury potential, requiring athletes to train it carefully with experienced partners.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>Begin in the 50/50 position where both you and your opponent have one leg entangled. Position yourself on your side with your hips low and connected to your opponent's leg. Control their foot with both hands, gripping around the heel and sole. Your grip should be firm but controlled. Execute the lock by cupping your hands around their heel, placing one hand on top of the other for maximum control and pressure distribution. Your bottom leg should hook their top leg at the knee, creating stability and preventing escape. Rotate your hips toward your opponent while maintaining the heel grip, which applies rotational pressure to their ankle and knee. The key is keeping your hips connected and your pressure directed through the heel. Your top leg can wrap across their hip for additional control and to prevent them from rolling out. Once you've achieved the lock configuration, apply steady, controlled pressure by rotating your hips and pulling the heel toward your body. This creates the torque necessary to threaten the submission. Always communicate with training partners and tap early to avoid injury.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>Common mistakes include gripping too high on the foot instead of the heel, which reduces submission pressure and control. Many athletes fail to maintain hip connection, allowing their opponent to escape by creating space. Applying pressure too quickly without proper positioning often results in the opponent rolling out or reversing the position. The grip must be specific: one hand cups the heel from underneath while the other controls the foot from above, creating a vice-like grip. Your body positioning is critical—keep your chest low and connected to their leg, preventing them from shrimping out. Many practitioners neglect to secure their bottom leg hook, which allows escapes. The submission's safety depends on applying gradual, controlled pressure rather than jerking movements. Avoid twisting the heel excessively without engaging your hips, as this wastes energy and reduces submission effectiveness. Proper hip rotation generates the power, not arm strength alone. Don't neglect your own ankle safety when establishing the position. Always ensure your opponent can tap clearly and never ignore their submission signals. Training with experienced partners who understand heel hook safety is essential before attempting this technique in competition.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>The heel hook from 50/50 is most effective when you've already achieved mutual leg entanglement and your opponent is committed to the position. Use it when your opponent attempts to escape 50/50 by rolling, as the rolling motion often strengthens your heel hook position. This technique works well against opponents who prefer leglock exchanges, as the 50/50 position allows you to compete equally. It's particularly valuable in no-gi competition where gripping opportunities are limited to limbs. In gi competition, understand your ruleset—heel hooks are restricted or prohibited at lower belt levels in many organizations. The technique shines against opponents trying to establish top control from 50/50, as you can catch them mid-transition. Use it strategically in scrambling situations where both athletes are equally positioned. It's effective when your opponent is fatigued and less capable of defending or escaping. Avoid overrelying on heel hooks as your primary leglock game; develop a complete leg lock system including other techniques like knee reaps and toe holds. Time the submission for moments when your opponent is vulnerable or committed to escape attempts. Always consider match context, rule restrictions, and opponent experience level before attempting heel hooks.</p>
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
