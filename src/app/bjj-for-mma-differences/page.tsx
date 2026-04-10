import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BJJ for MMA: Key Differences from Sport BJJ | AIBJJ",
  description: "MMA BJJ requires significant modifications from sport jiu-jitsu. Understanding these differences helps practitioners adapt their game for the cage.",
};

export default function Page() {
  const tags = ["mma", "self-defense", "no-gi"];
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
              className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:border-red-600/50 hover:text-red-400">
              #{tag}
            </Link>
          ))}
        </div>
        <h1 className="text-4xl font-black sm:text-5xl">BJJ for MMA: Key Differences from Sport BJJ</h1>
        <p className="mt-4 text-xl text-zinc-400">MMA BJJ requires significant modifications from sport jiu-jitsu. Understanding these differences helps practitioners adapt their game for the cage.</p>
        <div className="mt-10 space-y-3">

          <details className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 open:border-zinc-700">
            <summary className="font-bold text-white cursor-pointer">What is different about BJJ in MMA vs sport BJJ?</summary>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">The presence of strikes fundamentally changes BJJ. Positions that are safe in sport — like being flat on your back in closed guard — become dangerous when an opponent can punch. MMA BJJ emphasizes tighter control, shorter lever positions, and faster transitions. The closed guard is less commonly used because it requires full commitment while the bottom person is exposed to ground and pound.</p>
          </details>
          <details className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 open:border-zinc-700">
            <summary className="font-bold text-white cursor-pointer">Which BJJ positions work best in MMA?</summary>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">Back control, clinch work, and top control are most effective in MMA. Back control removes the strike threat almost entirely. Clinch BJJ — underhooks, body locks, and cage work — controls the fight standing. Top positions allow ground and pound while threatening submissions. Half guard and modified guard positions are more commonly used than full closed guard.</p>
          </details>
          <details className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 open:border-zinc-700">
            <summary className="font-bold text-white cursor-pointer">Do leg locks work in MMA?</summary>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">Yes, heel hooks and ankle locks have become increasingly common in MMA. Gordon Ryan and other grapplers have demonstrated that leg locks are highly effective in MMA because the bottom position in a leg lock entanglement allows submission attempts while avoiding punches. However, the entries are different — you cannot pull guard to leg locks in MMA the way you might in no-gi competition.</p>
          </details>
          <details className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 open:border-zinc-700">
            <summary className="font-bold text-white cursor-pointer">What BJJ techniques are less effective in MMA?</summary>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">Long, slow guard setups that require time and cooperation to establish are less effective. Berimbolo and advanced lapel guards are largely irrelevant. Very open guard positions that leave you vulnerable to being passed and punched are dangerous. The gi-specific techniques obviously do not apply. MMA rewards simpler, tighter techniques that work in shorter time windows.</p>
          </details>
        </div>
        <div className="mt-16 rounded-2xl border border-red-900/30 bg-red-950/20 p-8 text-center">
          <h2 className="text-2xl font-black">Get AI BJJ Coaching</h2>
          <p className="mt-2 text-zinc-400">Ask your AI coach anything about BJJ — technique questions, game plans, drilling sequences.</p>
          <Link href="/auth/signup" className="mt-5 inline-block rounded-xl bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700">Start Free</Link>
        </div>
        <div className="mt-10 flex flex-wrap gap-2">
          <Link href="/bjj" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">BJJ Encyclopedia</Link>
          <Link href="/brazilian-jiu-jitsu" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">Complete BJJ Guide</Link>
          <Link href="/coach" className="rounded-full bg-red-600/10 border border-red-700/30 px-3 py-1.5 text-sm text-red-400">AI Coach →</Link>
        </div>
      </article>
    </div>
  );
}
