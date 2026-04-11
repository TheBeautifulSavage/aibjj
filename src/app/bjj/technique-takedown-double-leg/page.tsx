import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Double Leg Takedown: Complete BJJ Technique Guide | AIBJJ",
  description: "Master the double leg takedown with our comprehensive guide. Learn setup, execution, key details, and strategic applications for BJJ competition.",
};

export default function Page() {
  const tags = ["takedown", "double leg", "technique", "BJJ fundamentals"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Double Leg Takedown: Complete BJJ Technique Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Master the double leg takedown with our comprehensive guide. Learn setup, execution, key details, and strategic applications for BJJ competition.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Takedown?</h2>
            <p>The double leg takedown is one of the most fundamental and effective techniques in Brazilian Jiu-Jitsu and wrestling. It involves simultaneously controlling both of your opponent's legs while driving them backward and downward to take them to the ground. This technique forms the foundation of top position control and is essential for any grappler looking to dominate both standing and ground exchanges. The double leg is prized for its reliability, power, and the dominant position it often provides once executed successfully. Unlike single-leg variations, the double leg offers superior control and balance, making it harder for opponents to base out or maintain their posture. It's equally effective against opponents of varying sizes and experience levels when performed with proper technique and timing. The double leg remains a staple in no-gi competition, wrestling, and is increasingly popular in modern BJJ as athletes recognize the value of strong takedown fundamentals for match control and point acquisition.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>Begin by establishing a strong stance with your feet shoulder-width apart and your knees slightly bent. Approach your opponent at an angle rather than straight on, making it harder for them to sprawl effectively. Use your hands to control their posture by either pushing their chest or collar to destabilize their base. Drop your level by bending at your knees and hips while keeping your back straight. This level change is critical to the technique's success. Shoot forward explosively, driving your legs beneath your opponent's hips. As you move in, wrap your arms around the backs of both their legs just above the knees. Your head should be on one side of their body, typically on the hip side. Once you've secured the grip, drive your hips into theirs while extending your legs powerfully. Keep your chest close to their body to prevent them from falling backward onto you. Continue driving forward and upward with your legs while keeping your grip tight, eventually bringing them down to the mat.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>Proper hand placement is essential: grip around the back of the thighs or just above the knees, never around the waist where your opponent has more control. Your head position determines where your opponent falls. Placing your head to the outside prevents them from guillotining you. Maintaining a tight chest-to-chest connection prevents your opponent from simply backing away. Keep your arms locked and your grip secure throughout the entire movement. Common mistakes include shooting too high, which allows opponents to sprawl and post out. Lifting your head too early breaks your connection and allows escape. Rushing the technique without proper foot placement often results in failed attempts. Another frequent error is telegraphing your intentions through excessive arm movements before committing to the shot. Beginners often forget to drive with their legs rather than their arms, reducing power significantly. Always maintain control after landing the takedown by keeping pressure and transitioning immediately into positional dominance rather than standing up.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>The double leg takedown works best when your opponent is in an aggressive stance moving forward or distracted by other engagement. Use it when your opponent has poor base awareness or is standing upright. In competition, the double leg is ideal when you need points and want to guarantee top position. It's particularly effective against taller opponents since bringing them down eliminates their reach advantage. The technique suits defensive situations where you need to control an aggressive striker or prevent distance management. Timing is crucial: execute the takedown when your opponent commits to their own movement rather than when they're in a solid, defensive stance. Use the double leg as a counter when your opponent overextends or commits their weight forward. In training, practice this regularly against resisting opponents of varying sizes and skill levels to develop timing and explosive power. Avoid using it exclusively; combine it with single-leg variations, foot sweeps, and other takedowns to keep opponents guessing. In no-gi competitions, the double leg becomes even more valuable since gripping limitations make it a primary scoring method. Develop entries from collar ties and wrist control to set up successful shots.</p>
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
