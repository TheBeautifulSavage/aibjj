import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Calf Slicer from Top Half Guard: Complete Guide | AIBJJ",
  description: "Master the calf slicer from top half guard. Learn setup, execution, and defensive strategies for this effective leglock submission.",
};

export default function Page() {
  const tags = ["leglock", "half guard", "calf slicer", "heel hook"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Calf Slicer from Top Half Guard: Complete Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Master the calf slicer from top half guard. Learn setup, execution, and defensive strategies for this effective leglock submission.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Calf Slicer?</h2>
            <p>The calf slicer is a compression-based leglock that targets the calf muscle and Achilles tendon of your opponent. When executed from top half guard, you're positioned advantageously to apply tremendous pressure. Unlike heel hooks that focus on ankle rotation, the calf slicer works by squeezing the lower leg between your shin and forearm, creating intense pressure on the calf. This technique is particularly effective because it's difficult for opponents to defend once properly positioned. The submission attacks the posterior chain, making it especially useful against opponents with tight hamstrings or those who resist traditional heel hook pressure. The calf slicer has gained popularity in modern submission grappling and is legal in most rulesets, making it a valuable addition to any leglock arsenal.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>Begin from top half guard with your opponent's bottom leg trapped. Control their hips with your hands and maintain heavy upper body pressure. Thread your leg through, creating space between your shin and their calf. Position your shin across the back of their calf while keeping your foot hooked under their opposite leg for stability. Your other leg should be extended for base and control. Thread your arm under their leg, wrapping around their shin or ankle area. Lock your hands together, creating a figure-four grip or clasped position. Elevate your hips slightly and pull their leg toward your chest while simultaneously squeezing your forearm and shin together. The pressure should compress the calf muscle against your shin. Keep your posture tight and maintain control of their hips to prevent escape. Gradually increase pressure while monitoring your opponent's submission signals.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>Pressure direction is critical: squeeze downward and toward your body simultaneously, not just laterally. Many practitioners fail to isolate the leg properly, allowing escape. Ensure the target leg is completely controlled before applying submission pressure. Your base matters significantly—weak base positioning allows your opponent to turn into you and relieve pressure. Keep your hips engaged and maintain connection throughout. Common mistake: applying pressure too high on the thigh instead of focusing on the calf itself. The submission requires precise shin placement across the back of the calf, not the outer thigh. Another error is loose hand positioning. Your grip must be tight and locked—loose hands allow the leg to slip free. Watch for your opponent's head position; if they're turning their hips away, reposition before increasing pressure. Tap signals come quickly with this submission, so maintain constant awareness of their body language.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>The calf slicer excels when your opponent is defending their bottom half guard aggressively, making traditional passing difficult. It's particularly effective against opponents who focus on sweeping or escaping rather than attacking submissions themselves. Use this technique when you've already established strong top half guard control and can't pass the guard cleanly. It transitions well from failed guard pass attempts. The calf slicer is especially useful against opponents with tight hamstrings who struggle with knee reaping positions. Consider using it when your opponent is fatigued and their leg defense weakens. In competition, this technique shines when opponents play defensive, reactionary half guard. It's also valuable in nogi competition where gripping mechanics differ from gi. Avoid using this technique if you're unstable or facing a heavy opponent with superior leverage. If your opponent has strong hip mobility and flexibility, choose alternate submissions. The calf slicer works best when executed with surprise and commitment—half-hearted attempts allow escape.</p>
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
