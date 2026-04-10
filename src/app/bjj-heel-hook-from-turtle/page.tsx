import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BJJ Heel Hook from Turtle Position | AIBJJ",
  description: "How to set up and finish the heel hook from turtle position in BJJ. Step-by-step breakdown with key details and drilling tips.",
};

export default function Page() {
  const tags = ["leg-locks", "submissions", "beginners"];
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
              className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:text-red-400 transition-colors">
              #{tag}
            </Link>
          ))}
        </div>
        <h1 className="text-4xl font-black sm:text-5xl">BJJ Heel Hook from Turtle Position</h1>
        <p className="mt-4 text-xl text-zinc-400">How to set up and finish the heel hook from turtle position in BJJ. Step-by-step breakdown with key details and drilling tips.</p>

        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Setting Up from Turtle Position</h2>
            <p>The heel hook from turtle position begins with establishing control of the position and identifying the openings that allow entry. Grips, body position, and timing are critical. The setup must be smooth enough that your opponent does not recognize the entry until it is too late to defend effectively. Drill the entry sequence separately before combining it with the finish — muscle memory for the setup is what makes this technique work under pressure.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Mechanics</h2>
            <p>The most common error when attempting the heel hook from turtle position is rushing the finish before the position is fully controlled. Alignment and angle directly affect mechanical advantage. Address your opponent&apos;s likely defenses before they materialize — have a follow-up ready. The small details that differentiate a finished heel hook from one that gets defended are usually found in hip position, grip location, and the timing of the finishing pressure.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Drilling and Application</h2>
            <p>Begin drilling slowly with a cooperative partner, focusing on mechanics before adding resistance. Build the entry sequence first, then add the finish. In rolling, the setup matters as much as the execution — use feints and combinations to create openings. Log your sessions in AIBJJ to track when this technique is working and identify patterns in when it gets defended, then use the AI coach to troubleshoot specific problems.</p>
          </section>
        </div>

        <div className="mt-12 rounded-2xl border border-red-900/30 bg-red-950/20 p-8 text-center">
          <h2 className="text-2xl font-black">Get AI Coaching on This Technique</h2>
          <p className="mt-2 text-zinc-400">Ask your AI coach for a personalized drilling sequence and real-time feedback.</p>
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
