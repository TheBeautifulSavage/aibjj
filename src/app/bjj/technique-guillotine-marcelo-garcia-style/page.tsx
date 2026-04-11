import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Guillotine Choke: Marcelo Garcia Style Guide | AIBJJ",
  description: "Master the Marcelo Garcia guillotine choke with our comprehensive technique guide. Learn setup, execution, and defensive counters.",
};

export default function Page() {
  const tags = ["guillotine choke", "marcelo garcia", "submission", "bjj technique"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Guillotine Choke: Marcelo Garcia Style Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Master the Marcelo Garcia guillotine choke with our comprehensive technique guide. Learn setup, execution, and defensive counters.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Guillotine?</h2>
            <p>The guillotine choke is one of Brazilian Jiu-Jitsu's most effective submissions, applying pressure to the opponent's neck and windpipe. Marcelo Garcia's version emphasizes control and positioning over brute force, making it accessible regardless of strength level. Unlike traditional guillotines that rely on arm strength, Marcelo's approach uses proper body mechanics, chest pressure, and leverage to create an inescapable submission. The Marcelo Garcia style is distinguished by its focus on getting your opponent's chin up and maintaining control throughout the technique. This submission works from multiple positions including top control, during takedowns, and even from bottom guard. The beauty of this technique lies in its efficiency and the difficulty opponents face when trying to defend or escape once properly applied. It's a fundamental submission that appears in virtually every grappling match and remains one of the highest-percentage finishes in competition BJJ.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>Begin by establishing control with your opponent in a collar tie or front headlock position. Drop your hips low and move your head to the side of their body, creating distance from their knees. Wrap your arm around their neck, threading one arm deep under the chin with your palm facing their neck. Your other hand clasps over your first hand, forming a figure-four grip. The critical Marcelo Garcia detail: keep your hands high and tight against their neck, not their shoulders. Press your chest into their upper back while driving your forehead into their temple. Your legs should be positioned wider than shoulder-width for stability. Pull their chin upward by rotating your shoulders and engaging your core, creating a powerful squeeze. Maintain constant pressure while gradually increasing the tightness. Your opponent's chin should point toward the ceiling as you compress. The submission comes from the combination of chest pressure, the squeeze, and the chin being elevated, not just arm strength alone. This positioning makes it nearly impossible to defend or escape.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>The most critical detail in Marcelo's style is hand placement. Your grip must be high on the neck, just below the jawline, not low on the shoulders where it becomes a collar choke. Keep your forearm tight against their windpipe rather than relying on bicep strength. Many practitioners make the mistake of squeezing too early before achieving proper positioning, allowing escape. Instead, focus on controlling your opponent's posture first by keeping their chin up and preventing them from turning their face away. Another common error is positioning your body too vertically instead of driving your hips forward and chest backward. Your weight distribution should favor chest pressure over arm squeeze. Don't let your opponent get their hands inside your grip to create space. Keep constant control of their head and neck throughout, preventing any repositioning. Beginners often lose the submission by relaxing pressure momentarily, so maintain consistent tension. Practice the grip without a partner first to develop muscle memory and ensure your hand positioning is precise.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>The Marcelo Garcia guillotine excels in several situations. Use it when you establish a front headlock from a takedown or when your opponent shoots a single or double-leg takedown. It's particularly effective when transitioning from top control positions like side control or north-south position. The submission works well when your opponent tries to stand up from bottom position, creating the perfect moment to cinch the choke. In no-gi grappling, it becomes even more valuable since collar chokes become harder to execute. Competition-wise, it's legal at all belt levels and age divisions, making it universally applicable. The technique shines when you're facing stronger opponents because it relies on positioning and mechanics rather than raw strength. Use it when your opponent is defending other submissions by tying up their hands, as they can't defend the guillotine simultaneously. It's also excellent for maintaining control while setting up transitions rather than immediately finishing. The Marcelo Garcia style makes it an ideal submission for developing control-based grappling rather than relying on explosive finishing techniques.</p>
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
