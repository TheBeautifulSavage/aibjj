import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Flower Sweep: Master This Essential BJJ Technique | AIBJJ",
  description: "Learn the flower sweep, a fundamental BJJ technique for reversing guard position. Complete guide with setup, execution, and strategic applications.",
};

export default function Page() {
  const tags = ["flower sweep", "guard sweeps", "BJJ techniques", "positional grappling"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Flower Sweep: Master This Essential BJJ Technique</h1>
        <p className="mt-4 text-xl text-zinc-400">Learn the flower sweep, a fundamental BJJ technique for reversing guard position. Complete guide with setup, execution, and strategic applications.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Sweep?</h2>
            <p>The flower sweep is a foundational guard sweep used in Brazilian Jiu-Jitsu to reverse your opponent's position when trapped in closed or open guard. This technique involves using your opponent's own momentum and weight distribution against them, allowing you to transition from a defensive bottom position to a dominant top position. Named for the blooming motion of your leg control, the flower sweep is one of the first sweeps taught to beginners due to its reliability and ease of execution. It works particularly well against opponents who posture up in your guard or apply downward pressure. The sweep relies on precise hip movement, foot placement, and timing rather than strength, making it accessible for grapplers of all sizes. Understanding the flower sweep builds foundational knowledge for more advanced sweeping techniques and improves your overall guard retention.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>Start from closed guard with your opponent in a high posture. First, break their posture by pulling their head down to your chest while gripping behind their neck or collar. Establish a solid connection through your legs, squeezing them together to maintain control. Place your feet flat on the mat with heels near your glutes. As your opponent posts their hands to create space, identify which arm they're posting with. Grab their posting arm's sleeve or wrist with both hands. Press your hips upward into their body while simultaneously sweeping your top leg in an arc, rotating your hips explosively. Your bottom leg's knee drives toward their armpit as your top leg extends across their body. This creates a flower-like unfolding motion. As you sweep, maintain control of their arm to prevent them from base-building. Complete the sweep by following your opponent over into a mounted or knee-on-belly position, maintaining control throughout.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>Critical details include maintaining constant pressure on your opponent's arm while sweeping. Many practitioners fail to control the posting arm sufficiently, allowing their opponent to post on the mat and prevent the sweep. Timing is essential: execute the sweep when your opponent commits weight to their posting hand. Your hip escape should be explosive and directed away from your opponent, not just upward. Keep your feet in contact with the mat as long as possible before the sweep to generate maximum power. Common mistakes include sweeping too early before establishing proper arm control, using excessive upper body strength instead of hip mechanics, and losing contact with your opponent during the transition. Additionally, practitioners often fail to follow their opponent after the sweep, getting caught in scrambles instead of securing top position. Practice maintaining your grip through the entire sweep and immediately moving to control their trapped arm while establishing mount or side control.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>The flower sweep is most effective when your opponent assumes a high posture in your closed guard, presenting an open target for your sweeping motion. It's particularly valuable against opponents who prefer to stay upright and create distance rather than maintain pressure. Use this sweep when your opponent posts their hands to defend against submissions or create space for passing. The technique excels in situations where your opponent hasn't established strong base control or when they're reacting to your submission threats. Beginners should practice this sweep consistently as it builds essential mechanics applicable to numerous other sweeps. Intermediate grapplers can use it as a reliable option when other sweeps aren't available or as a setup to create scrambles for positional advantage. In competition, the flower sweep scores two points and provides genuine top position control. It's less effective against opponents maintaining heavy top pressure or those who successfully establish strong frames. Combine this sweep with collar drag sweeps and scissor sweeps for maximum guard effectiveness.</p>
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
