import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Back Escape (Rolling Escape) - Complete BJJ Guide | AIBJJ",
  description: "Master the rolling back escape in BJJ. Learn step-by-step setup, key technical details, and strategic applications for escaping back control.",
};

export default function Page() {
  const tags = ["back escape", "rolling escape", "back control", "BJJ techniques"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Back Escape (Rolling Escape) - Complete BJJ Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Master the rolling back escape in BJJ. Learn step-by-step setup, key technical details, and strategic applications for escaping back control.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Back Escape?</h2>
            <p>The back escape, commonly called the rolling escape, is a fundamental defensive technique used when your opponent has back control with hooks in. This escape relies on explosive hip movement and momentum to dislodge your opponent's grip and create separation. Unlike passive escapes where you wait for opportunities, the rolling escape is an active, aggressive counter that puts immediate pressure on your attacker. The technique is essential for all BJJ practitioners because back control is one of the most dangerous positions in grappling. By mastering this escape, you gain confidence when mounted from behind and significantly reduce your opponent's ability to establish submission threats like rear-naked chokes. The rolling escape works at all skill levels and belt ranks, from white belt through black belt, making it a cornerstone of bottom-position defense. It's particularly effective against opponents who haven't fully secured their hooks or body triangle.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>Start in back control with your opponent sitting high on your shoulders, hooks in your hips. First, drive your hips backward into their body to create pressure and test their grip stability. Immediately grip your own collar or chest area with both hands for frame protection. Turn your head sharply toward the side you'll escape to, tucking your chin to protect your neck from choke attempts. Plant your outside foot (the side you're rolling toward) firmly on the mat. Explosively roll toward that planted foot, driving your hip upward and backward simultaneously. As you roll, your body weight should load onto your shoulder blade. This momentum naturally dislodges your opponent's hooks and hip pressure. Follow through by continuing the roll until you break their back control completely. If successful, you'll land in side control or a neutral position where you can establish guard or continue escaping. The entire movement should be smooth and explosive, not jerky or hesitant.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>Protect your neck aggressively throughout the escape. Many practitioners lose this position because they neglect neck defense while rolling. Always maintain grip on your collar or cross your arms over your chest. Your head positioning is critical: turn it away from your opponent and tuck your chin to create space from choke attacks. Weight distribution matters significantly. Don't collapse your weight passively—instead, drive explosively into the roll to generate momentum. Common mistakes include rolling too slowly, which allows your opponent to adjust their position or tighten submissions. Another frequent error is failing to plant your foot properly before rolling, reducing leverage and power. Don't roll perpendicular to your opponent's body; angle your roll slightly forward to break their hooks more effectively. Many practitioners also abandon their grip too early, leaving their neck exposed. Maintain your defensive frames until you've completely escaped back control. Finally, avoid rolling toward your opponent's strong side or where their grip is tightest. Always roll toward the weaker hook or open space.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>The rolling escape is most effective when your opponent has just established back control and hasn't fully locked in hooks or a body triangle. Use it immediately rather than waiting passively, as delays allow them to secure tighter control. This escape works exceptionally well against opponents who sit high on your back or apply pressure primarily through hooks. If your opponent has deep hooks with their legs wrapped around your torso, consider transitioning to other escape methods like the sit-up escape or buck escape instead. The rolling escape shines in live rolling and competition because it's explosive and momentum-based. It's ideal for escaping less experienced grapplers who rely on position pressure rather than technical submission setup. Use this escape proactively when you anticipate a choke attempt but haven't yet been caught. Combine it with follow-up techniques: after escaping, immediately work toward guard recovery or establish side control dominance. Train this escape regularly to develop the explosive hip movement and timing needed for reliable execution under pressure. Drilling partners at varying skill levels helps you understand when adjustments are necessary.</p>
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
