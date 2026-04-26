import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400; // Re-generate daily
export const metadata: Metadata = {
  title: "Andre Galvao: Four-Time ADCC Champion | AIBJJ",
  description: "Andre Galvao is a four-time ADCC champion and one of the most decorated grapplers in history. The founder of Atos Jiu-Jitsu, Galvao built one of the most s",
};

export default function Page() {
  const tags = ["andre-galvao", "adcc", "atos-jiu-jitsu", "competition"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Andre Galvao: Four-Time ADCC Champion</h1>
        <p className="mt-4 text-xl text-zinc-400">Andre Galvao is a four-time ADCC champion and one of the most decorated grapplers in history. The founder of Atos Jiu-Jitsu, Galvao built one of the most successful competition teams in BJJ.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Career Overview</h2>
            <p>Andre Galvao was born in 1984 in Sao Paulo, Brazil. He trained under Fabio Gurgel at Alliance BJJ and became a world champion before founding Atos Jiu-Jitsu in San Diego. Galvao's technical evolution — from a primarily gi specialist to an all-around submission grappler — mirrors the evolution of the sport itself.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">ADCC Championships</h2>
            <p>Galvao won ADCC four times — 2007, 2009, 2011, and 2013 — across different weight classes and divisions. His battles with Buchecha at ADCC became legendary, featuring some of the highest-level no-gi grappling ever seen. He is the longest-reigning ADCC champion in a single weight class.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Building Atos</h2>
            <p>Galvao founded Atos Jiu-Jitsu in San Diego in 2009, building it into one of the most successful competition teams in the sport. Under his leadership, Atos has produced multiple world champions including Keenan Cornelius, Paulo Miyao, Joao Miyao, and many others. His team has dominated IBJJF team competitions for over a decade.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Rivalry with Gordon Ryan</h2>
            <p>Galvao's late-career rivalry with Gordon Ryan became one of the most talked-about storylines in submission grappling. The two competed at ADCC 2022 in a highly anticipated match. Regardless of outcome, their rivalry demonstrated that Galvao remained competitive at the elite level well into his late 30s — a testament to his technical foundation.</p>
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
