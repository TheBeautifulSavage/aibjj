import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "X Guard Sweep System: Complete BJJ Guide | AIBJJ",
  description: "Master the X Guard sweep system with step-by-step instructions, key technical details, and strategic applications for all skill levels.",
};

export default function Page() {
  const tags = ["x guard", "sweep", "leglock", "guard systems", "bjj techniques"];
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
        <h1 className="text-4xl font-black sm:text-5xl">X Guard Sweep System: Complete BJJ Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Master the X Guard sweep system with step-by-step instructions, key technical details, and strategic applications for all skill levels.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the X Guard?</h2>
            <p>The X Guard is a dynamic leg lock-based guard system where you control your opponent's leg using both of your legs in an 'X' formation. Originating from footlock attacks, this guard evolved into a complete sweep system offering multiple submission and positional options. Unlike traditional closed guard, X Guard emphasizes leg entanglement and hip mobility, making it especially effective in modern competition BJJ. The beauty of X Guard lies in its versatility: you can attack submissions, execute sweeps, or transition to dominant positions from the same fundamental control. The system gained prominence through high-level competitors who demonstrated its effectiveness at the highest levels of competition. X Guard works exceptionally well against taller opponents and those who prefer standing passes. It's particularly valuable for leg lock specialists and those seeking alternatives to hand-based guard systems. The guard requires less upper body strength, making it accessible to smaller or lighter competitors. Understanding X Guard fundamentals opens doors to advanced leg lock entries and creates pressure that forces opponents into defensive mistakes. This guard system has become essential knowledge for modern BJJ athletes.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>Begin from closed guard or open guard with your opponent standing or base-heavy. As they attempt to pass or when they're in a vulnerable standing position, hook your inside leg around their far leg while simultaneously placing your opposite foot on their hip or stomach. Your inside shin should contact their leg below the knee. Once hooked, scoop their same-side leg with your outside leg, creating the characteristic X formation with both your legs. Your legs should form an 'X' when viewed from above, with maximum leg entanglement. Post your hands lightly for balance and hip positioning. Drive your hips forward and slightly upward toward their centerline, creating immediate pressure. Keep your legs tight and flexed, not rigid. Your body position should be slightly off to the side rather than directly underneath. Once established, maintain constant pressure while waiting for their reaction. Control their base and posture with precise leg placement. The key is smooth entry without telegraphing—transition naturally into X Guard during guard recovery or passing defense. Practice the entry repeatedly until it becomes automatic, responding instinctively when opportunities present themselves.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>Essential details separate effective X Guard from ineffective attempts. Your grip strength matters less than leg positioning and hip pressure. Keep your legs hugging their leg tightly throughout sweeps, preventing escape. Many practitioners fail to maintain hip contact during the sweep, allowing opponents to create space. Your entry foot on their hip must stay connected for optimal leverage. The common mistake of sitting straight back diminishes pressure—instead, angle your hips sideways while driving forward. Another error involves losing leg entanglement by extending too early. Maintain constant leg tension and hook security. Don't rely purely on leg strength; use hip mobility and timing for sweeps. Your posting hand placement affects sweep mechanics significantly. Post too far away and you lose momentum; too close and you limit hip rotation. Keep hands ready to block counterattacks rather than over-committing to control. Many neglect upper body positioning, leaving themselves exposed to arm drags or counters. Maintain awareness of your opponent's arm positions and adjust accordingly. The timing of weight distribution between your legs and hands is crucial. Transition smoothly between different sweep variations rather than forcing a single option. Practice against resistance to develop sensitivity and adaptability in live rolling situations.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>X Guard shines in specific tactical situations and against particular opponent types. Use it against taller opponents and those with excellent posture in standing positions. It's particularly effective when your opponent prefers pressure passing or forward-based movement. X Guard works beautifully as a leg lock entry system, making it essential knowledge for submission-focused competitors. Employ it when your opponent has strong hand fighting capabilities—X Guard minimizes hand-on-hand combat. It's excellent in tournaments where leglocks are legal, especially at intermediate and advanced levels. Use X Guard during guard recovery when your opponent stands to pass your closed guard. It's particularly valuable against opponents who tend to sit back after passing attempts. X Guard provides natural transitions to advanced leg lock chains including heel hooks and toe holds. Consider X Guard when protecting against opponents who utilize knee slice passes. It's effective when your opponent commits too much weight forward during passing attempts. In gi competition, X Guard works well against those unfamiliar with leg entanglement systems. During positional scrambles, X Guard often catches opponents off-balance. However, avoid forcing X Guard against opponents with excellent leg lock defense or exceptional mobility. Recognize when your opponent can easily counterattack or escape. The best practitioners use X Guard situationally, seamlessly integrating it into their overall guard repertoire rather than relying solely on this single system.</p>
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
