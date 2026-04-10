import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BJJ Triangle Choke from North-South | AIBJJ",
  description: "Learn how to set up and finish the triangle choke from north-south in BJJ. Step-by-step breakdown with key details, common mistakes, and drilling tips.",
};

export default function Page() {
  const tags = ["submissions", "submissions", "beginners"];
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
        <h1 className="text-4xl font-black sm:text-5xl">BJJ Triangle Choke from North-South</h1>
        <p className="mt-4 text-xl text-zinc-400">Learn how to set up and finish the triangle choke from north-south in BJJ. Step-by-step breakdown with key details, common mistakes, and drilling tips.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Setting Up the Triangle Choke from North-South</h2>
            <p>The triangle choke from north-south is one of the fundamental techniques in Brazilian jiu-jitsu. Understanding the mechanics of this position requires grasping why the leverage works and what your opponent must do to defend. The setup begins with establishing proper control of north-south and identifying the openings that allow entry into the triangle choke attack. Grips, body position, and timing all play critical roles in making this technique effective against resisting opponents.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>The most common mistake when attempting the triangle choke from north-south is rushing the finish before establishing proper control. Squeeze before you extend — make sure the position is locked in before applying finishing pressure. Hip angle and alignment directly affect the mechanical advantage of the submission. Many practitioners also fail to address their opponent&apos;s defensive reactions, which requires having a follow-up technique ready when the primary attack is defended.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Drilling and Competition Application</h2>
            <p>Drilling the triangle choke from north-south should start slowly with a cooperative partner, focusing on mechanics before adding resistance. Build the entry sequence first, then the finish, then combine them. In competition or live rolling, the setup matters as much as the finish — most experienced practitioners will defend the obvious entry. Use combinations and feints to create openings. Log your drilling and rolling sessions in AIBJJ to track your progress and identify when this technique is or is not working for you.</p>
          </section>
        </div>
        <div className="mt-12 rounded-2xl border border-red-900/30 bg-red-950/20 p-8 text-center">
          <h2 className="text-2xl font-black">Get AI Coaching on This Technique</h2>
          <p className="mt-2 text-zinc-400">Ask your AI coach for a personalized drilling sequence and get feedback on your technique.</p>
          <Link href="/auth/signup" className="mt-5 inline-block rounded-xl bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700">Start Free</Link>
        </div>
        <div className="mt-10 flex flex-wrap gap-2">
          <Link href="/bjj-techniques" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">Technique Library</Link>
          <Link href="/bjj" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">BJJ Encyclopedia</Link>
          <Link href="/coach" className="rounded-full bg-red-600/10 border border-red-700/30 px-3 py-1.5 text-sm text-red-400">AI Coach →</Link>
        </div>
      </article>
    </div>
  );
}
