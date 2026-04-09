import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Roger Gracie: The Most Dominant BJJ Competitor Ever | AIBJJ",
  description: "Roger Gracie won 10 IBJJF World Championships with such dominance that he became the benchmark for all BJJ competition. His game was simple, classical, and",
};

export default function Page() {
  const tags = ["roger-gracie", "gi-bjj", "ibjjf-worlds", "gracie-family", "submissions"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Roger Gracie: The Most Dominant BJJ Competitor Ever</h1>
        <p className="mt-4 text-xl text-zinc-400">Roger Gracie won 10 IBJJF World Championships with such dominance that he became the benchmark for all BJJ competition. His game was simple, classical, and utterly unstoppable.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Gracie Lineage</h2>
            <p>Roger Gracie was born in 1981 in Rio de Janeiro, grandson of Carlos Gracie Sr. and son of Mauricio Gracie. He trained under his father and Royler Gracie before establishing his academy in London. Roger competed for Gracie Humaita and Gracie Barra at various points in his career.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">World Championship Dominance</h2>
            <p>Roger won 10 IBJJF World Championship gold medals — eight in medium-heavy and two in the absolute. He finished the majority of world championship matches by submission, unmatched at his level. His game was built entirely on classical positions: closed guard, mount, back control, textbook submissions.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">The 2009 ADCC Absolute</h2>
            <p>Roger&apos;s finest performance came at ADCC 2009 in Barcelona, where he submitted every opponent to win the absolute. In the final against Xande Ribeiro — one of the best defensive grapplers alive — Roger choked him out from back control with a rear naked choke. This is frequently cited as the greatest individual grappling performance in history.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy</h2>
            <p>Roger validated classical jiu-jitsu at the highest level at a time when sport-specific specializations were fragmenting the art. He proved that Helio Gracie&apos;s original vision — dominant positions leading to inevitable submissions — remained devastating. Roger has since become an MMA fighter and continues to teach BJJ globally.</p>
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
