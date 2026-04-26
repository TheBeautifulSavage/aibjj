import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Half Guard Underhook Game: Complete BJJ Guide | AIBJJ",
  description: "Master the half guard underhook game with step-by-step instructions, key details, and strategic applications for BJJ competition and training.",
};

export default function Page() {
  const tags = ["half guard", "underhook", "BJJ techniques", "grappling"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Half Guard Underhook Game: Complete BJJ Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Master the half guard underhook game with step-by-step instructions, key details, and strategic applications for BJJ competition and training.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Half Guard?</h2>
            <p>The half guard is a fundamental BJJ position where you control one of your opponent's legs between your legs while they maintain top position. The underhook game specifically focuses on controlling your opponent's arm on the same side as your trapped leg, creating a powerful framework for sweeps and submissions. This position bridges the gap between closed guard and side control, offering unique leverage opportunities. The underhook prevents your opponent from establishing strong top pressure and limits their ability to pass your guard. It's an essential position because it provides defensive security while maintaining offensive potential. Many modern BJJ players develop this game from closed guard or as a transition from other guard positions. The underhook creates what's often called a 'frame' that disrupts your opponent's posture and balance. Understanding half guard underhook mechanics is crucial for both gi and no-gi grappling, as it applies across all rule sets and competition levels.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>Begin from a position where your opponent is passing your closed guard or establishing top control. As they move to pass, trap one of their legs between yours by closing your bottom leg across their thigh while your top leg hooks their back. Simultaneously, thread your underhook arm under their arm on the same side as your trapped leg. Grip deep across their back, ideally getting your hand to their far hip or lat. Keep your chest tight to theirs to prevent them from generating pressure. Your head position should be on the same side as your underhook, looking toward their hip. Create a tight connection by pulling them down with your underhook while using your legs to control their trapped leg. Position your free arm either framing their face or shoulder to maintain distance. Your hips should be slightly elevated and angled to generate leverage. This setup creates a stable platform from which you can execute sweeps, transition to attacks, or switch to other guard variations. Maintain constant tension through your entire body to maximize control and prevent escape attempts.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>The most critical detail is keeping your underhook grip deep and tight against your opponent's torso. A shallow grip allows them to slip free and establish dominant position. Your body position must remain connected—distance creates opportunities for them to pass. Many practitioners make the mistake of not controlling the trapped leg properly, allowing their opponent to free it by turning their hips. Keep constant downward and inward pressure with both legs. Another common error is poor head positioning; keeping your head on the opposite side weakens your control and makes sweeps less effective. Don't neglect your free hand—use it actively to frame or control their posture rather than leaving it passive. Avoid leaning back excessively, which breaks your connection and creates space. Stay relaxed enough to move fluidly while maintaining tension in your key control points. Many athletes fail to angle their hips correctly for sweep generation, severely limiting offensive options. Finally, premature commitment to submissions without securing proper positioning often leads to failed attacks and position loss.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>The half guard underhook game is essential when opponents aggressively pass your closed guard or establish dominant top position. Use it as a defensive measure to prevent side control transitions and as a launching pad for offensive techniques. It's particularly effective against larger, stronger opponents because the underhook and leg control neutralize raw strength advantages. In competition, develop this position when facing passers who avoid tight top control. It's valuable in both gi and no-gi contexts, though underhook grips work differently in each ruleset. The technique shines against opponents who pressure forward heavily, as their momentum feeds into your sweep mechanics. This position is ideal for executing ankle picks, sweeps, and submission attempts like kimuras or arm triangles. Many high-level competitors use half guard underhook as their primary guard system because of its versatility and effectiveness. It's particularly useful when you're behind on points and need to create movement and offense. Train this extensively if you struggle with guard passing opponents or face weight and strength mismatches, as it's a genuine equalizer that allows technical advantage over athletic opponents.</p>
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
