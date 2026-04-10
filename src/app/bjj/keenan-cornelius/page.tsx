import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400; // Re-generate daily
export const metadata: Metadata = {
  title: "Keenan Cornelius: The Lapel Guard Innovator | AIBJJ",
  description: "Keenan Cornelius revolutionized guard play with his lapel guard systems — worm guard, squid guard, and reverse de la riva lapel — creating positions so com",
};

export default function Page() {
  const tags = ["keenan-cornelius", "gi-bjj", "ibjjf-worlds", "guard-retention"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Keenan Cornelius: The Lapel Guard Innovator</h1>
        <p className="mt-4 text-xl text-zinc-400">Keenan Cornelius revolutionized guard play with his lapel guard systems — worm guard, squid guard, and reverse de la riva lapel — creating positions so complex they sparked rule changes in major organizations.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Career</h2>
            <p>Keenan Cornelius was born in 1993 in Hawaii and began training BJJ as a child. He trained under Andre Galvao at Atos Jiu-Jitsu and rapidly became one of the most technically innovative practitioners of his generation. He won multiple IBJJF World and Pan American championships at multiple belt levels with an extraordinarily complex guard game.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">The Lapel Guard Systems</h2>
            <p>Keenan&apos;s most significant contribution is the lapel guard — a family of positions that use the gi lapel to create complex, near-inescapable entanglements. Worm guard wraps the lapel around the opponent&apos;s leg, creating sweeping and submission opportunities that most practitioners had never seen before. Squid guard and other variations expanded the system into a complete guard framework.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Controversy and Rule Changes</h2>
            <p>Keenan&apos;s lapel guards were so effective and confusing that multiple organizations changed their rules specifically to limit lapel entanglements. The IBJJF and other organizations placed time limits on lapel wrapping. Rather than seeing this as defeat, Keenan viewed it as validation — when they change the rules for you, you&apos;ve created something genuinely disruptive.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legion Jiu-Jitsu and Teaching</h2>
            <p>Keenan runs Legion Jiu-Jitsu in San Diego, California. He is known as one of the most thorough instructors in the world, breaking down his lapel systems and underlying principles with extraordinary detail. His online instruction platform offers some of the most advanced gi content available, with thousands of students worldwide learning his systems.</p>
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
