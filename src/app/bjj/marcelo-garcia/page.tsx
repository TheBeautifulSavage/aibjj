import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Marcelo Garcia: The Greatest Guard Player in BJJ History | AIBJJ",
  description: "Marcelo Garcia is widely regarded as the greatest grappler of his era — perhaps the most technically gifted BJJ practitioner ever. His butterfly guard and ",
};

export default function Page() {
  const tags = ["marcelo-garcia", "guard-passing", "submissions", "adcc", "ibjjf-worlds"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Marcelo Garcia: The Greatest Guard Player in BJJ History</h1>
        <p className="mt-4 text-xl text-zinc-400">Marcelo Garcia is widely regarded as the greatest grappler of his era — perhaps the most technically gifted BJJ practitioner ever. His butterfly guard and guillotine choke changed BJJ forever.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Background and Rise</h2>
            <p>Marcelo Garcia was born in Mato Grosso, Brazil. He affiliated with Alliance BJJ and rapidly became famous for competing above his weight class and winning. Garcia earned his black belt under Fabio Gurgel and won his first ADCC title in 2003 at age 21.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">The Butterfly Guard Revolution</h2>
            <p>Garcia popularized competitive butterfly guard, demonstrating that inside hooks with double underhooks could generate sweeps and back takes against larger opponents. His butterfly guard became the template for a generation of guard players — explosive hips, tight underhooks, constant connection.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">The Marcelotine</h2>
            <p>Garcia&apos;s guillotine variation uses a high elbow position creating a direct blood choke. He has finished world champions at heavier weight classes with it, often in seconds. The setup flows naturally from his wrestling-based style and butterfly guard.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">ADCC Legacy</h2>
            <p>Garcia won ADCC five times across weight classes and the absolute — arguably the greatest ADCC record in history. His 2003, 2005, and 2009 performances are required viewing for serious grapplers. After retiring from competition, he founded the Marcelo Garcia Academy in New York City, one of the most respected BJJ schools in the world.</p>
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
