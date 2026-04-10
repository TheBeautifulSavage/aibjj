import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400; // Re-generate daily
export const metadata: Metadata = {
  title: "Mikey Musumeci: The No-Gi World Champion | AIBJJ",
  description: "Mikey Musumeci is the dominant no-gi grappling champion of the 125-135lb weight classes. Known for his relentless submission hunting and technical precisio",
};

export default function Page() {
  const tags = ["mikey-musumeci", "no-gi", "leg-locks", "submissions"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Mikey Musumeci: The No-Gi World Champion</h1>
        <p className="mt-4 text-xl text-zinc-400">Mikey Musumeci is the dominant no-gi grappling champion of the 125-135lb weight classes. Known for his relentless submission hunting and technical precision, Musumeci has won every major no-gi title available.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Background</h2>
            <p>Michael Musumeci Jr. was born in 2000 in New Jersey and began training BJJ as a child. He is the son of a BJJ instructor and grew up immersed in the sport. Musumeci is notable for training out of multiple academies throughout his career and for his exceptional dedication to technical study — he is known to watch instructional footage for hours daily.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">IBJJF World Championships</h2>
            <p>Musumeci dominated the gi at lighter weight classes before transitioning to no-gi competition as his primary focus. He won multiple IBJJF World and Pan championships in the gi, showcasing exceptional technical BJJ. His guard work and submission arsenal in the gi translated effectively to no-gi competition.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">No-Gi Dominance</h2>
            <p>Musumeci became the dominant no-gi competitor at 125-135lbs, winning ONE Championship&apos;s sub-grappling world championship multiple times. His no-gi game is characterized by relentless submission hunting from all positions, exceptional guard retention, and creative leg lock entries. He is known for attempting submissions from positions where most practitioners would focus purely on control.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Philosophy</h2>
            <p>Musumeci is deeply influenced by conceptual BJJ — understanding the why behind every technique. He has spoken extensively about the importance of studying techniques at a deep mechanical level rather than memorizing movements. His instructional content reflects this philosophy, explaining the principles that make his system work rather than just showing the techniques.</p>
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
