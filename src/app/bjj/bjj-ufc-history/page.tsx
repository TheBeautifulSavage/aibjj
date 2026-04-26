import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400; // Re-generate daily
export const metadata: Metadata = {
  title: "How BJJ Changed the UFC: From Royce Gracie to Today | AIBJJ",
  description: "BJJ transformed the UFC and MMA from a fringe spectacle into a legitimate sport. The story of how ground fighting became the foundation of modern mixed mar",
};

export default function Page() {
  const tags = ["bjj-history", "mma", "royce-gracie", "gracie-family"];
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
<article className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map(tag => (
            <Link key={tag} href={`/bjj/tag/${tag}`}
              className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:border-red-600/50 hover:text-red-400 transition-colors">
              #{tag}
            </Link>
          ))}
        </div>
        <h1 className="text-4xl font-black sm:text-5xl">How BJJ Changed the UFC: From Royce Gracie to Today</h1>
        <p className="mt-4 text-xl text-zinc-400">BJJ transformed the UFC and MMA from a fringe spectacle into a legitimate sport. The story of how ground fighting became the foundation of modern mixed martial arts is the story of the Gracie family's greatest achievement.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">The Problem BJJ Solved</h2>
            <p>Before the UFC and the MMA era, martial arts existed in silos. Boxers fought boxers. Wrestlers fought wrestlers. No one truly knew what would happen when different disciplines met with minimal rules. The Gracies created the Ultimate Fighting Championship specifically to answer this question — and to demonstrate that their art was the answer.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">The First Decade: BJJ Dominance</h2>
            <p>The first decade of UFC competition was defined by BJJ's dominance of the ground game. Fighters who could not defend takedowns and submissions were systematically destroyed. The entire martial arts world scrambled to address the ground fighting deficiency that Royce Gracie had exposed. BJJ academies opened everywhere. Wrestling coaches began learning guard defense. The hybrid fighter was born.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">BJJ Evolves With MMA</h2>
            <p>As MMA evolved, so did the BJJ practiced within it. Pure sport BJJ techniques proved less effective when punches were added. Practitioners developed MMA-specific modifications — maintaining more controlled positions, using shorter ground and pound, focusing on cage work. The BJJ in MMA today is a distinct subspecialty from sport BJJ, though the fundamental principles remain the same.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Modern MMA and the BJJ Foundation</h2>
            <p>Every elite MMA competitor today has significant BJJ training. Champions like Demian Maia, Ronaldo Souza, Charles Oliveira, and Brian Ortega have demonstrated that high-level BJJ remains deadly in MMA. Even strikers invest heavily in BJJ defense. The sport Royce Gracie helped create now reaches hundreds of millions of viewers and generates billions in revenue annually.</p>
          </section>
        </div>
        <div className="mt-16 rounded-2xl border border-red-900/30 bg-red-950/20 p-8 text-center">
          <h2 className="text-2xl font-black">Train Like the Pros</h2>
          <p className="mt-2 text-zinc-400">AI coaching, technique library, training journal — everything to level up your BJJ.</p>
          <Link href="/auth/signup" className="mt-5 inline-block rounded-xl bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700">Start Free</Link>
        </div>
        <div className="mt-10">
          <h3 className="text-lg font-bold text-white mb-4">Explore More</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/bjj" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">BJJ Encyclopedia</Link>
            <Link href="/brazilian-jiu-jitsu" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">Complete BJJ Guide</Link>
            <Link href="/academies" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">Find an Academy</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
