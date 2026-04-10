import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400; // Re-generate daily
export const metadata: Metadata = {
  title: "Helio Gracie: Father of Brazilian Jiu-Jitsu | AIBJJ",
  description: "Helio Gracie co-developed and systematized Brazilian jiu-jitsu. His physical limitations forced him to refine leverage-based technique to a degree that tra",
};

export default function Page() {
  const tags = ["helio-gracie", "gracie-family", "bjj-history", "self-defense"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Helio Gracie: Father of Brazilian Jiu-Jitsu</h1>
        <p className="mt-4 text-xl text-zinc-400">Helio Gracie co-developed and systematized Brazilian jiu-jitsu. His physical limitations forced him to refine leverage-based technique to a degree that transformed Japanese judo into something entirely new and devastatingly effective.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and Physical Challenges</h2>
            <p>Helio Gracie was born October 1, 1913, in Belem, Para, Brazil — the youngest of five brothers. As a child, he was small, frail, and chronically ill, unable to perform many of the physically demanding judo techniques his brother Carlos had learned from Mitsuyo Maeda. This limitation became his greatest asset: he spent decades refining technique that worked without physical advantages.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Developing the BJJ System</h2>
            <p>Helio developed closed guard as an offensive weapon, refined escapes from inferior positions, and created a complete system for fighting from the back. He modified and expanded the ground fighting elements of Maeda's judo curriculum into a comprehensive self-defense and fighting system that genuinely worked for physically disadvantaged practitioners.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">The Challenge Matches</h2>
            <p>The Gracies accepted fights from practitioners of any martial art to prove their system. Helio participated in dozens of challenge matches over his lifetime. His most famous was against Masahiko Kimura in 1951 — the greatest judoka of that era. Kimura outweighed Helio by 40 pounds and was 20 years younger. Helio lasted 13 minutes before his brother threw in the towel. The shoulder lock Kimura used is now called the kimura in honor of this match.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy</h2>
            <p>Helio Gracie lived to 95 and trained until the end of his life. His sons Rickson, Royce, Relson, and Royler became world champions and spread BJJ globally. Royce's victories at UFC 1, 2, and 4 validated the entire system internationally. Helio's approach to jiu-jitsu as a self-defense system for the disadvantaged remains the philosophical foundation of the art.</p>
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
