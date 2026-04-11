import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Back Control with Hooks: Complete BJJ Guide | AIBJJ",
  description: "Master back control with hooks in BJJ. Learn setup, positioning, weight distribution, and defensive strategies to dominate from the back.",
};

export default function Page() {
  const tags = ["back control", "hooks", "BJJ positioning", "grappling fundamentals"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Back Control with Hooks: Complete BJJ Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Master back control with hooks in BJJ. Learn setup, positioning, weight distribution, and defensive strategies to dominate from the back.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is Back Control?</h2>
            <p>Back control with hooks is one of the most dominant positions in Brazilian Jiu-Jitsu, giving you maximum control while minimizing your opponent's offensive options. When you have back control, you're positioned behind your opponent with your legs wrapped around their torso using your insteps (hooks) to secure the position. Your chest is glued to their back, and your arms control their arms or neck. This position is highly advantageous because your opponent cannot see you, making defense significantly harder. The hooks prevent them from escaping forward or rolling toward you. Back control is considered one of the highest-percentage positions for submissions, particularly rear-naked chokes and body triangles. It's fundamental in both gi and no-gi BJJ, appearing frequently in competition and self-defense scenarios. Understanding how to establish, maintain, and defend back control is essential for any serious grappler.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>First, establish position behind your opponent either from a takedown, sweep, or transition. Position your hips low and tight against theirs, with your chest pressed firmly against their back. Wrap your legs around their torso, placing your insteps (the inside of your feet near the arch) against their sides, approximately at the floating rib area. Cross your feet or hook them firmly for maximum security. Your feet should not be touching; instead, squeeze with your shins and insteps. Control your opponent's arms by wrapping your arms around theirs or securing a seat belt grip (one hand around their torso, the other behind their head). Keep your head to one side, tucked close to their shoulder. Maintain constant pressure by flexing your legs and drawing your opponent into your body. Distribute your weight evenly across their back. Prevent arm-trap escapes by controlling their posture and keeping them rounded. Stay mobile, adjusting your position slightly as your opponent moves. The key is maintaining all four pressure points simultaneously: leg hooks, arm control, chest pressure, and head position.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>Common mistake: positioning hooks too high or too low on the ribs. Hooks should target the floating rib area for maximum control and comfort. Don't rely solely on arm strength; back control requires constant leg pressure. Many beginners fail to keep their feet uncrossed, weakening their hooks. Your opponent can escape if your legs are crossed because they have more freedom to shrimp. Avoid sitting too high on their shoulders, which reduces leverage and allows escapes. Keep your weight distributed through your legs, not just your upper body. Don't give up chest pressure for aggressive arm control; maintain connection at all times. Common error: allowing your opponent to extend their posture. Keep them rounded and flexed. Don't telegraph your submission attempts by loosening your hooks or grip. Maintain constant control before attempting any technique. If your opponent manages to get on their knees, immediately adjust by stepping your feet outward to prevent them from standing. Practice maintaining position for extended periods without submissions to build control skills that will serve you throughout your grappling career.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>Back control with hooks is effective in virtually every BJJ context. In competition, it scores 4 points and provides a dominant position with minimal risk. Use it when you've successfully transitioned from side control, achieved a takedown advantage, or swept your opponent. Back control is particularly valuable against larger opponents because position and hooks matter more than strength. In self-defense situations, back control is one of the safest positions because you control the confrontation while minimizing exposure to strikes. Use back control when your opponent is defending other submissions, as it provides access to devastating chokes. It's especially effective against defensive grapplers who turtle or look to escape. In training, back control develops crucial skills: pressure, control, awareness, and submission timing. Use it to teach yourself patience and positional dominance before finishing with submissions. During rolling, establish back control first, then practice maintaining it against resistance before attempting submissions. This builds legitimate control rather than relying on strength. Back control transitions beautifully into leg lock entries and various chokes, making it a versatile position for developing comprehensive grappling skills.</p>
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
