import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Berimbolo: Complete Step-by-Step BJJ Guide | AIBJJ",
  description: "Master the berimbolo with our comprehensive guide. Learn setup, execution, key details, and strategic applications for modern BJJ.",
};

export default function Page() {
  const tags = ["berimbolo", "footlock", "leglock", "advanced technique"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Berimbolo: Complete Step-by-Step BJJ Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Master the berimbolo with our comprehensive guide. Learn setup, execution, key details, and strategic applications for modern BJJ.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Berimbolo?</h2>
            <p>The berimbolo is a dynamic lower body technique that combines a footlock with an inversion, allowing you to attack your opponent's legs while simultaneously improving your position. Originating from Brazilian footlock systems, it's become essential in modern leg lock attacks at all competitive levels. The technique involves using your leg to trap and control your opponent's foot while inverting your body to apply pressure and set up submissions. What makes the berimbolo unique is its ability to transition smoothly between attacking and positional control. You can finish with various submissions including straight foots locks, heel hooks, or knee reaps depending on your opponent's defensive posture. The berimbolo works particularly well against opponents who attempt to defend their legs passively or who grip your hips to prevent leg lock entries. It's especially valuable in no-gi grappling where leg lock-heavy games dominate modern competition. Understanding the berimbolo gives you a versatile tool that disrupts opponent positioning while creating high-percentage submission opportunities.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>Begin in a position where you're attacking your opponent's leg—typically from an open guard or when they've advanced past your guard. Position yourself perpendicular to your opponent's trapped leg. Step your far leg over their hip, placing your foot on their far hip or chest for underhook control. Your near leg wraps around the back of their calf or ankle, creating an initial footlock shape. Push with your chest-side foot against their hip to create distance while pulling their leg toward you with your wrapped leg. This creates the initial inversion momentum. As you invert, your body rotates underneath theirs while maintaining control of their foot. Your head goes toward the mat as you rotate. Once inverted, reposition your legs for maximum control—you can adjust into a saddle position, leg scissors, or other entanglement variations. Control their hips with your hands to prevent them from escaping or passing. The key is maintaining constant pressure while inverting smoothly. Practice the inversion without a partner first to develop timing and body awareness. Speed and control should increase gradually as you become comfortable with the movement pattern.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>Critical technical details make the difference between a smooth berimbolo and a failed attempt. First, establish control before inverting—rushing your inversion allows escapes. Keep your opponent's trapped leg close to your body throughout the technique rather than letting it drift away. Your grip on their foot must be tight and secure; loose grips allow them to extract their leg during your inversion. Position your head correctly during the rotation—lead with your shoulder and neck, not your face. Control their hips simultaneously with leg entanglement; many practitioners focus only on the leg and allow the opponent to escape by passing your guard. Common mistakes include inverting too early before establishing footlock control, allowing the opponent to stack you during inversion, and losing pressure on the trapped leg during the rotation. Avoid telegraphing your inversion—sudden, smooth movements are more effective than hesitant attempts. Don't invert directly under their body weight; angle your entry to use their momentum. Practice footlock fundamentals before attempting berimolos, as grip strength and positioning directly impact success.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>The berimbolo is most effective against specific opponent behaviors and positions. Use it when opponents defend their legs by sitting back or stacking weight—their defensive positioning actually aids your inversion. It works excellently against larger opponents who rely on weight and pressure, as you're using their own momentum to invert. The berimbolo is valuable when your guard passes are stuffed and you need leg lock attacks to maintain control. In competition, it shines in the middle rounds when opponents become comfortable and less defensive. Use berimolos when opponents post their leg forward aggressively or step into your guard recklessly. The technique is particularly effective in no-gi competition where leg lock exchanges dominate. Avoid berimbolo attempts against opponents with exceptional hip mobility or strong leg lock defense. It's less effective against opponents who immediately turn into you or drop their hips heavily. The berimbolo works best as part of a complete leg lock system rather than a standalone technique. Combine it with other footlock entries, heel hook setups, and positional advantages. Use it to transition between leg lock variations rather than purely as a finishing technique.</p>
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
