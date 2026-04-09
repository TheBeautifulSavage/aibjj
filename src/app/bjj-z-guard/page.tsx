import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BJJ Z-Guard: The Knee Shield Half Guard | AIBJJ",
  description: "Learn BJJ Z-guard — the knee shield variation of half guard. Master the frames, sweeps, and submissions that make Z-guard one of the most practical guards.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "BJJ Z-Guard: Knee Shield Half Guard",
    "author": { "@type": "Organization", "name": "AIBJJ" },
    "publisher": { "@type": "Organization", "name": "AIBJJ", "url": "https://aibjj.com" }
  };
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-black">BJJ Z-Guard: Knee Shield Half Guard</h1>
        <p className="mt-4 text-xl text-zinc-400">Z-guard (also called knee shield half guard) uses a diagonal knee frame across the opponent's torso to create space and prevent smashing. It's one of the most practical guards for all levels because it blends defense with immediate offensive threats.</p>
        <div className="mt-10 space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Z-Guard Position and Frames</h2>
            <p>Z-guard is half guard with your top knee elevated across the opponent's chest or hip, creating a frame that prevents them from flattening you. The bottom leg hooks under their far leg (standard half guard hook), and the top knee creates the shield. Your elbow connects to the knee to create a rigid structure; the other hand frames against their hip or neck. The diagonal shape of the knee shield creates the 'Z' silhouette that gives the guard its name. High knee shield (across the chest) prevents smashing pressure; low knee shield (across the hip) is used as a transition to other guards or when attacking sweeps. The underhook battle is central to Z-guard success — if you secure an underhook from Z-guard, you directly threaten sweeps and back takes; if the opponent wins the underhook battle, they can flatten you and begin passing.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Sweeps from Z-Guard</h2>
            <p>The electric chair is a devastating sweep from Z-guard: when the opponent reaches over your knee shield with an overhook, shoot your top leg (the shield) under their far arm, creating a two-on-one leg position. From this straddle position, sweep them forward or take the back. The tripod sweep from Z-guard uses a foot on the hip and a hand behind the knee to create an off-balance forward fall. The Homer sweep targets a posted hand. Converting to single-leg takedown from Z-guard occurs when the opponent stands to pass — sit up into their single leg. Z-guard also creates natural guard inversion opportunities, converting to tornado guard or deep half when the passer attempts to clear the knee shield by circling over it.</p>
            <ul className="mt-3 space-y-1 list-disc list-inside text-zinc-400">
              <li>Electric chair: catch their overhook with your knee, then straddle</li><li>Sit-up sweep: whenever they stand, immediately attack single leg</li><li>Convert to deep half when passer attempts to clear the knee shield</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Passing Z-Guard</h2>
            <p>Passing Z-guard requires removing the knee shield before any traditional pass can succeed. Two primary approaches: the leg drag removes the shield by pulling the knee downward and across, creating a direct path to side control from the far side. The torreando flattens the knee shield with hip pressure while stepping to the head side. Both passes require commitment and speed because Z-guard players actively reposition their shield and threaten sweeps the moment you engage. The smash pass — driving forward with chest weight through the knee shield — can work but requires superior strength or technical precision to prevent the Z-guard player from threading their top leg through for a triangle or omoplata. Establish a wrist grip on the knee shield hand before moving to neutralize their frame power.</p>
          </section>
        </div>
        <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
          <h3 className="font-bold text-white mb-3">Related Techniques</h3>
          <div className="flex flex-wrap gap-2 text-sm">
            <Link href="/bjj-armbar" className="rounded-full border border-zinc-700 px-3 py-1 text-zinc-400 hover:text-white">Armbar</Link>
            <Link href="/bjj-triangle-choke" className="rounded-full border border-zinc-700 px-3 py-1 text-zinc-400 hover:text-white">Triangle</Link>
            <Link href="/bjj-guard-passing" className="rounded-full border border-zinc-700 px-3 py-1 text-zinc-400 hover:text-white">Guard Passing</Link>
            <Link href="/bjj-techniques" className="rounded-full bg-red-600/10 border border-red-700/30 px-3 py-1 text-red-400 hover:text-red-300">All Techniques →</Link>
          </div>
        </div>
        <div className="mt-12 rounded-2xl border border-red-900/30 bg-red-950/20 p-8 text-center">
          <h2 className="text-2xl font-black">Master This Technique with AI Coaching</h2>
          <p className="mt-2 text-zinc-400">Get personalized drilling sequences and real-time feedback.</p>
          <Link href="/auth/signup" className="mt-5 inline-block rounded-xl bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700">Start Free</Link>
        </div>
      </article>
    </div>
  );
}
