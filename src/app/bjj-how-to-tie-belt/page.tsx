import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Tie Your BJJ Belt: Step by Step | AIBJJ",
  description: "Tying your BJJ belt properly is a fundamental skill every practitioner needs.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Tie Your BJJ Belt: Step by Step",
    "publisher": { "@type": "Organization", "name": "AIBJJ", "url": "https://aibjj.com" },
  };
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
<article className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-black">How to Tie Your BJJ Belt: Step by Step</h1>
        <p className="mt-4 text-xl text-zinc-400">Tying your BJJ belt properly is a fundamental skill every practitioner needs.</p>
        <div className="mt-10 space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fundamentals</h2>
            <p>Understanding how to tie your bjj belt: step by step starts with the basic mechanics and positional requirements. This technique fits within the broader BJJ system and connects to multiple positions and attacks. Proper execution requires correct body positioning, timing, and an understanding of how your opponent is likely to respond.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details</h2>
            <p>The critical details that make this technique work come down to grips, weight distribution, and angle. Many practitioners rush through the setup and miss the small adjustments that create the mechanical advantage needed to finish. Focus on each step individually before trying to chain them together at speed.</p>
            <ul className="mt-3 space-y-1 list-disc list-inside text-zinc-400">
              <li>Control the position before attempting the technique</li>
              <li>Maintain connection and pressure throughout</li>
              <li>Have a follow-up ready if the primary option is defended</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Practice and Development</h2>
            <p>Drilling this technique in isolation builds the muscle memory needed to apply it under pressure. Start slow with a cooperative partner, focus on the mechanics, then gradually increase resistance. Use your training journal to track which entries work best against different body types and defensive responses you encounter in rolling.</p>
          </section>
        </div>
        <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
          <h3 className="font-bold text-white mb-3">Related</h3>
          <div className="flex flex-wrap gap-2 text-sm">
            <Link href="/bjj-techniques" className="rounded-full border border-zinc-700 px-3 py-1 text-zinc-400 hover:text-white">Techniques</Link>
            <Link href="/coach" className="rounded-full border border-zinc-700 px-3 py-1 text-zinc-400 hover:text-white">AI Coach</Link>
            <Link href="/journal" className="rounded-full border border-zinc-700 px-3 py-1 text-zinc-400 hover:text-white">Training Journal</Link>
          </div>
        </div>
        <div className="mt-12 rounded-2xl border border-red-900/30 bg-red-950/20 p-8 text-center">
          <h2 className="text-2xl font-black">Master BJJ with AI Coaching</h2>
          <p className="mt-2 text-zinc-400">Get personalized drilling sequences and feedback from your AI BJJ coach.</p>
          <Link href="/auth/signup" className="mt-5 inline-block rounded-xl bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700">Start Free</Link>
        </div>
      </article>
    </div>
  );
}
