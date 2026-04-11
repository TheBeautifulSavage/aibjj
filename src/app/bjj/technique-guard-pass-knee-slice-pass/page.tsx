import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Knee Slice Guard Pass: Complete BJJ Guide | AIBJJ",
  description: "Master the knee slice pass with detailed step-by-step instructions, key technical details, and strategic application for effective guard passing.",
};

export default function Page() {
  const tags = ["guard pass", "knee slice", "BJJ techniques", "positional control"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Knee Slice Guard Pass: Complete BJJ Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Master the knee slice pass with detailed step-by-step instructions, key technical details, and strategic application for effective guard passing.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Guard Pass?</h2>
            <p>The knee slice pass, also called the knee cut or knee slide pass, is one of the most fundamental and effective guard passing techniques in Brazilian Jiu-Jitsu. This pass involves driving your knee across your opponent's hips while controlling their upper body, effectively slicing through their guard and advancing to side control or mount position.

The knee slice is favored by grapplers of all levels because it's relatively safe, mechanically sound, and difficult to counter when executed properly. Unlike more aggressive passes that rely heavily on strength, the knee slice uses leverage and timing to dismantle the guard. It's particularly effective against closed guards and certain variations of open guard. The pass has become standard curriculum at most BJJ academies and is a cornerstone technique for anyone serious about improving their top game.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>Start in a strong top position with your opponent in closed guard. Break the closed guard by hugging their hips to your chest while driving your shoulders forward, or by posting your hands on their hips and applying pressure. Once the guard is open, establish a solid base with your feet wide and positioned behind your hips.

Next, control your opponent's hips by wrapping your arms around their waist or posting your hands firmly on their pelvis. The key is preventing them from regaining their guard or creating distance. Position your knee on one side of their hip, typically your right knee if passing to the right. Drive this knee in a slicing motion across their hip toward the opposite side of their body, moving from their hip area toward their thigh.

As your knee cuts through, keep your upper body low and tight against theirs. Drive your head toward their shoulder and maintain constant pressure. Once your knee passes their hips, transition your weight fully onto that leg and establish control by pinning their leg down while advancing into side control.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>Proper pressure distribution is critical for success. Many beginners cut their knee too high on the opponent's body, which reduces leverage and allows escape. Your knee should travel low across the hips and abdomen. Maintain constant contact and don't allow any space for your opponent to frame or create leverage.

Common mistakes include losing your base by positioning your feet too close together, which allows your opponent to sweep you. Keep your feet wide and grounded throughout the pass. Another error is releasing pressure during the transition—maintain upper body contact at all times.

Also avoid standing up too early, as this gives your opponent frame opportunities. Stay low and tight as you pass. Your grip matters too; maintain control of their hips, collar, or sleeves depending on the position. Don't allow their hands to establish a strong under-hook or overhook, as these create powerful counters. Finally, stay aware of your opponent's knee shield defense and adjust your knee position accordingly to maintain control and forward momentum.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>The knee slice pass is most effective when your opponent is in an open guard with limited frame options. It works particularly well against leg lock-heavy open guards where your opponent's hands are committed to leg attacks. It's also ideal when your opponent isn't maintaining strong frames on your hips or shoulders.

Use this pass when you want a safe, positionally sound technique that doesn't require explosive athleticism. It's excellent for drilling and developing control fundamentals. The knee slice is tactically valuable when your opponent is defending upright—the low-pressure approach bypasses their frame-based defense.

Avoid this pass if your opponent has strong under-hook control or has established a solid knee shield. It's less effective against opponents who successfully transition to leg entanglements. The knee slice is less ideal if you're significantly smaller than your opponent, as the technique relies on controlled pressure rather than overwhelming strength. It's best used when you have stable control and aren't in a time crunch. In competition, it's a reliable pass for scoring points and establishing positional control without excessive risk.</p>
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
