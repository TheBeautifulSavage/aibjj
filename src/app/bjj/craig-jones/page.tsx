import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400; // Re-generate daily
export const metadata: Metadata = {
  title: "Craig Jones: The Australian Leg Lock Specialist | AIBJJ",
  description: "Craig Jones is one of the most entertaining and technically devastating leg lock specialists in submission grappling. The Australian developed his game in ",
};

export default function Page() {
  const tags = ["craig-jones", "no-gi", "leg-locks", "adcc", "b-team"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Craig Jones: The Australian Leg Lock Specialist</h1>
        <p className="mt-4 text-xl text-zinc-400">Craig Jones is one of the most entertaining and technically devastating leg lock specialists in submission grappling. The Australian developed his game in obscurity before bursting onto the global scene with shocking performances against elite competition.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Rise to Prominence</h2>
            <p>Craig Jones was born in 1991 in Adelaide, Australia, and trained BJJ without much international recognition until his shocking performance at ADCC 2017. At that event, as a relative unknown, he submitted Felipe Pena and nearly beat Gordon Ryan in the 88kg division — alerting the entire grappling world to his existence. He had been quietly developing a devastating leg lock game in Australia.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Leg Lock System</h2>
            <p>Jones&apos;s leg lock system is built around patience and precision — he creates entanglements methodically and waits for opponents to make the mistake that allows the finish. His heel hook in particular is considered one of the sharpest in the sport. Unlike many leg lock specialists who rely on explosive entries, Jones&apos;s game rewards deep technical understanding of leg mechanics.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">B-Team and Gordon Ryan</h2>
            <p>Jones was part of the Danaher Death Squad before a widely-publicized team split led to the formation of B-Team Jiu-Jitsu in Austin, Texas, alongside Gordon Ryan, Nick Rodriguez, and others. B-Team has become one of the most successful teams in no-gi submission grappling, with Jones serving as both a top competitor and a team anchor.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Comedy and Culture</h2>
            <p>Jones is as well-known for his humor as for his jiu-jitsu. His social media presence, self-deprecating commentary, and genuine personality have made him one of the most beloved figures in grappling. He has spoken openly about the business aspects of professional grappling and about the challenges of competing at the elite level while maintaining a sustainable career.</p>
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
