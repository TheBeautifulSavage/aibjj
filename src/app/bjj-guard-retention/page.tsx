import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BJJ Guard Retention: Active Defense Principles | AIBJJ",
  description: "Master BJJ guard retention with active hip movement, framing, and re-guard mechanics. Learn the principles that keep your guard intact against aggressive passers.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "BJJ Guard Retention: Active Defense Principles",
    "author": { "@type": "Organization", "name": "AIBJJ" },
    "publisher": { "@type": "Organization", "name": "AIBJJ", "url": "https://aibjj.com" },
  };
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <nav className="text-sm text-zinc-500 mb-6">
          <Link href="/" className="hover:text-zinc-300">Home</Link> ›
          <Link href="/bjj-techniques" className="hover:text-zinc-300 ml-1">Techniques</Link> ›
          <span className="ml-1 text-zinc-300">Guard Retention</span>
        </nav>
        <h1 className="text-4xl font-black">BJJ Guard Retention: Active Defense Principles</h1>
        <p className="mt-4 text-xl text-zinc-400">Guard retention is the ability to prevent your opponent from passing your guard by using hip movement, frames, and re-guard mechanics. It is the most foundational defensive skill in BJJ — without it, your guard game collapses under any pressure.</p>

        <div className="mt-10 space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">The Hip Is Your Engine</h2>
            <p>Every guard retention technique is fundamentally about hip movement. Your hips must constantly move to stay connected to the passer, creating angles and re-establishing your guard layers. Shrimping — the side-to-side hip escape — is the core movement. When your opponent begins to pass to your right, your hips shrimp left to face them and reestablish your knee shield or leg position. Lazy hips equals passed guard, every time. Drilling the hip escape in isolation until it is reflexive is the single most impactful thing a newer practitioner can do for their defensive game. Active hips keep you in guard; passive hips let passes complete.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Frames and Connection Points</h2>
            <p>Guard retention uses frames — stiff arm or leg structures — to create space and slow the passer down while your hips reposition. A knee shield to the hip, a forearm to the neck, or a foot on the hip are all frames that buy you time. The key is to frame actively and immediately when the pass begins — not after the passer has settled. Passive frames get crushed; active frames redirect the passer's energy and create the moment you need to hip escape and re-guard.</p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-zinc-400">
              <li>Frame early — before the passer settles, not after</li>
              <li>Knee shield, foot on hip, and forearm frames are your primary tools</li>
              <li>Combine frames with hip escapes — frames alone won't stop a determined passer</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Re-Guard: Getting Back Inside</h2>
            <p>When a pass partially completes, re-guard is the act of repositioning your legs back inside your opponent's hips to restore guard. The fastest re-guard uses a knee cut back between you and the passer — turn to your knees as the pass completes and immediately insert the far knee as a shield. From turtle position, standing up into stance or spinning to guard are both viable re-guard options. Building a complete guard retention game requires drilling these re-guard movements until they are second nature in live rolling.</p>
          </section>
        </div>

        <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
          <h3 className="font-bold text-white mb-2">Related Techniques</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/bjj-shrimping" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Shrimping</Link>
            <Link href="/bjj-guard-recovery" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Guard Recovery</Link>
            <Link href="/bjj-butterfly-guard" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Butterfly Guard</Link>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-red-900/30 bg-red-950/20 p-8 text-center">
          <h2 className="text-2xl font-black">Master This Technique with AI Coaching</h2>
          <p className="mt-2 text-zinc-400">Get personalized drilling sequences from your AI BJJ coach.</p>
          <Link href="/auth/signup" className="mt-5 inline-block rounded-xl bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700">Start Free</Link>
        </div>
      </article>
    </div>
  );
}
