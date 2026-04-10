import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400; // Re-generate daily
export const metadata: Metadata = {
  title: "Gordon Ryan: The Greatest No-Gi Grappler of All Time | AIBJJ",
  description: "Gordon Ryan is widely considered the greatest no-gi submission grappler in history. Known for his systematic leg lock game and back control, Ryan has domin",
};

export default function Page() {
  const tags = ["gordon-ryan", "no-gi", "leg-locks", "adcc", "b-team"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Gordon Ryan: The Greatest No-Gi Grappler of All Time</h1>
        <p className="mt-4 text-xl text-zinc-400">Gordon Ryan is widely considered the greatest no-gi submission grappler in history. Known for his systematic leg lock game and back control, Ryan has dominated every major no-gi competition.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and Training</h2>
            <p>Gordon Ryan was born on July 8, 1995, in Highland Park, New Jersey. He began training BJJ at age 16 under Garry Tonon and later became a core member of John Danaher&apos;s leg lock study group — the Danaher Death Squad. Ryan&apos;s development was rapid: black belt in four years, a timeline that reflected both natural talent and obsessive training methodology.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">The Danaher Death Squad Era</h2>
            <p>Ryan&apos;s ascent coincided with the DDS revolutionizing submission grappling with a systematic approach to leg locks and back control. Ryan served as the anchor, winning two consecutive ADCC absolute divisions in 2019 and 2022 — an achievement no one else has ever accomplished. His teammates included Garry Tonon, Craig Jones, and Nicky Ryan.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record</h2>
            <p>Ryan has defeated virtually every top competitor: Buchecha, Keenan Cornelius, Craig Jones, Felipe Pena. His matches are characterized by methodical, systematic positioning. He has said: &apos;The secret is making the right technique impossible to stop, not hard to see.&apos; Ryan trains and teaches at B-Team Jiu-Jitsu in Austin, Texas.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Philosophy and Methodology</h2>
            <p>Ryan emphasizes understanding mechanical principles over memorizing moves. He advocates for a hierarchical approach — always prioritizing back control. His training volume is legendary: multiple sessions per day, heavy drilling focus. He has been open about using performance-enhancing substances, a controversial aspect of his career that sparked rule changes in major competitions.</p>
          </section>
        </div>
        <div className="mt-16 rounded-2xl border border-red-900/30 bg-red-950/20 p-8 text-center">
          <h2 className="text-2xl font-black">Train Smarter with AI Coaching</h2>
          <p className="mt-2 text-zinc-400">Track your training, get personalized coaching, and build your game plan — free to start.</p>
          <Link href="/auth/signup" className="mt-5 inline-block rounded-xl bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700">Start Free</Link>
        </div>
        <div className="mt-10">
          <h3 className="text-lg font-bold text-white mb-4">Explore More</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/brazilian-jiu-jitsu" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">Complete BJJ Guide</Link>
            <Link href="/academies" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">Find an Academy</Link>
            <Link href="/bjj-techniques" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">Technique Library</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
