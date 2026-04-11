import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Butterfly Guard Back Takes: Complete BJJ Guide | AIBJJ",
  description: "Master butterfly guard back takes with our comprehensive guide. Learn setup, execution, key details, and strategic applications for effective BJJ transitio",
};

export default function Page() {
  const tags = ["butterfly guard", "back takes", "BJJ techniques", "guard transitions"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Butterfly Guard Back Takes: Complete BJJ Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Master butterfly guard back takes with our comprehensive guide. Learn setup, execution, key details, and strategic applications for effective BJJ transitions.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Butterfly Guard?</h2>
            <p>The butterfly guard is a dynamic position where you're on your back with at least one foot hooked inside your opponent's thigh. It's renowned for its offensive capabilities and explosive movements. From here, back takes become particularly effective because your positioning naturally disrupts your opponent's base and balance. The butterfly guard creates immediate threats that force your opponent to react defensively, opening pathways to the back. This guard excels at middle distance, where you control your opponent's posture while maintaining offensive options. The back is considered the dominant position in BJJ, and transitioning there from butterfly guard leverages your leg hooks and upper body control. Understanding this position's mechanics is crucial for developing a well-rounded game, especially at higher belts where guard retention and positional transitions matter significantly.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>Start from butterfly guard with both feet hooked inside your opponent's thighs. Establish a collar grip with your dominant hand while controlling their wrist or sleeve with your other hand. Elevate your hips slightly to destabilize their base and create upward pressure. First variation: underhook their arm on one side while maintaining your butterfly hooks. Drive your shoulder through their armpit, rotating your body perpendicular to theirs. As they defend, release one butterfly hook and swing your leg around their back while pulling them down with your underhook. Second variation: use a high collar grip and pump their posture forward. When they post their hand to defend, grab behind their neck with both hands. Elevate one butterfly hook while driving your outside shoulder in, rotating underneath and behind their back. The key is timing your hip elevation with your upper body controls to catch them off-balance during their defensive response.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>Control the near-side arm before transitioning. Many practitioners lose back position because they move too early without securing the opponent's arm. Your underhook must be deep and connected to your body, not just your hand. Maintain constant butterfly hook pressure throughout the transition. Releasing too early allows your opponent to frame and escape. Keep your hips elevated—dropping them prematurely telegraphs your intentions. Your grip sequence matters significantly. Establish the collar grip first, then work your underhook, rather than attempting both simultaneously. Common mistakes include losing connection during the leg swing, failing to control posture before the transition, and not using your legs explosively enough. Many beginners also abandon their hooks too early when pressure increases. Remember that your butterfly hooks are your control points throughout. Position your outside leg strategically to prevent your opponent from turning into you. Stay connected with your upper body; space between you and your opponent creates escape opportunities they can exploit.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>Butterfly guard back takes work best when your opponent has upright posture or when they're actively defending your sweeps. They're particularly effective in gi rolling where grips provide more control. Use this technique against opponents who posture up constantly, as their elevated base makes the transition smoother. The approach excels when you've already established collar and underhook grips—there's no need to abandon working grips to pursue this. Avoid forcing back takes against opponents with excellent base awareness or those heavily posting their arms. In no-gi, control becomes more challenging, so ensure you've established dominant underhooks and arm connections before attempting the transition. This technique shines during flowing roll sessions where you can practice timing and positioning against cooperative partners. Competition contexts favor it against opponents unfamiliar with butterfly guard pressure. The back take becomes especially valuable when your opponent defends your butterfly sweeps; immediately pivot to the back rather than forcing the sweep. Understanding positional flow helps you recognize optimal moments for execution.</p>
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
