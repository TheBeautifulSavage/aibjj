import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Leg Drag Guard Pass: Complete BJJ Technique Guide | AIBJJ",
  description: "Master the leg drag pass in BJJ. Learn setup, execution, and key details for this effective guard passing technique used by top competitors.",
};

export default function Page() {
  const tags = ["guard pass", "leg drag", "passing", "bjj technique"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Leg Drag Guard Pass: Complete BJJ Technique Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Master the leg drag pass in BJJ. Learn setup, execution, and key details for this effective guard passing technique used by top competitors.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Leg Drag Pass?</h2>
            <p>The leg drag pass is a fundamental guard passing technique where the top player uses their leg to drag the opponent's leg away from their body, creating space to advance position. This pass is highly effective against closed guard, half guard, and open guard variations. The technique's beauty lies in its simplicity and directness—rather than fighting through the opponent's legs, you neutralize them by dragging them to the side. The leg drag maintains strong control throughout the movement and leads naturally into dominant positions like side control or mount. It's a staple technique used by competitors at all levels, from white belts to elite black belts. The pass works by exploiting the mechanical disadvantage of the defending player's legs when extended and separated. Once you master the leg drag, you'll find it becomes one of your most reliable passing options. The technique also teaches proper weight distribution and base maintenance, fundamental skills applicable to all guard passes.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>Begin in a strong base position across your opponent's hips with your hands controlling their legs or gi. Establish a combat base with your weight distributed evenly. Grip one of your opponent's legs, typically below the knee or on the pants leg, with your same-side hand. Your opposite hand can control their other leg or their hip. Drive your hips forward and slightly to the side while simultaneously dragging their leg across your body using your leg and hand. As you drag, your leg acts as a barrier, preventing their leg from blocking your pass. Keep your posture upright and your chest low. As the leg drags across, immediately begin shifting your weight to advance past their guard. Your head should stay low and forward to maintain pressure. Once past their legs, transition into side control by rotating your hips and establishing underhook or cross-face control. The entire movement should be smooth and continuous rather than jerky or slow. Timing is crucial—execute the drag quickly before your opponent can counter or re-close their guard.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>The most critical detail is maintaining constant forward pressure throughout the pass. Many beginners pause during the transition, allowing the opponent to recover guard position. Keep your base wide and stable—a collapsed base leads to getting swept or caught in submissions. Your leg drag should be aggressive and committed; hesitation gives your opponent time to defend effectively. Common mistakes include holding the leg too high, which reduces control and leverage. Grip below the knee or on the pants cuff for maximum effectiveness. Don't let your chest come up too high or you'll lose pressure and control. Another frequent error is losing connection with your opponent's body—maintain contact with your hips and chest throughout. Beginners often drag too slowly, which allows experienced opponents to frame and create distance. Execute the drag with speed and commitment. Avoid crossing your feet or getting your legs tangled, as this compromises your base. Keep your leg drag tight to your body rather than extending it far away. Finally, ensure you immediately establish control when reaching side control, securing an underhook or cross-face to prevent escape or reversal.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>The leg drag pass excels when your opponent has an open guard, closed guard, or half guard with their leg extended toward you. It's particularly effective against taller opponents whose long legs create more drag distance. Use this pass when your opponent is playing a heavy, stationary guard style rather than an active, dynamic one. The technique shines when you have good grip strength and explosive hip drive. If your opponent is playing an inverted guard or footlock-heavy guard, the leg drag becomes risky—consider alternative passes instead. This pass works well in competition when you need to establish dominant position quickly before your opponent accumulates advantages. It's excellent for athletes with strong lower bodies and explosive hips. The leg drag is less effective against opponents with excellent hip mobility or when they're wearing extremely loose gi pants. Contextually, use this when you're already making forward progress but need to finish the pass cleanly. It's ideal when you've broken their guard structure and need to capitalize on the opening. Against defensive players who avoid leg entanglements, the leg drag becomes one of your safest options.</p>
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
