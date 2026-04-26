import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Anaconda Choke: Rolling Neck Crank | AIBJJ",
  description: "Learn the anaconda choke setup, arm threading, and rolling finish. A devastating front headlock submission for no-gi BJJ that combines a blood choke with a crank.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Anaconda Choke: Rolling Neck Crank",
    "author": { "@type": "Organization", "name": "AIBJJ" },
    "publisher": { "@type": "Organization", "name": "AIBJJ", "url": "https://aibjj.com" },
  };
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
<article className="mx-auto max-w-4xl px-6 py-12">
        <nav className="text-sm text-zinc-500 mb-6">
          <Link href="/" className="hover:text-zinc-300">Home</Link> ›
          <Link href="/bjj-techniques" className="hover:text-zinc-300 ml-1">Techniques</Link> ›
          <span className="ml-1 text-zinc-300">Anaconda Choke</span>
        </nav>
        <h1 className="text-4xl font-black">Anaconda Choke: Rolling Neck Crank</h1>
        <p className="mt-4 text-xl text-zinc-400">The anaconda choke is a powerful arm-in choke that threads under the near arm from the front headlock position and finishes with a barrel roll over the opponent's trapped arm. It combines carotid compression with a neck crank for a high-percentage finish.</p>

        <div className="mt-10 space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Establishing Front Headlock and Threading</h2>
            <p>The anaconda most often occurs when the opponent shoots in for a takedown or is in a turtle position, exposing their head and near arm. Secure front headlock control with your arm over their back. Unlike the D'Arce, the anaconda threads from the front — slide your arm under their near arm and bring your hand across their neck, threading your forearm between their neck and shoulder from the far side. The figure-four is then locked as your free hand grabs your own bicep. The key difference from the D'Arce is the direction your elbow points: in the anaconda, your elbow points toward their near hip.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">The Rolling Finish</h2>
            <p>Once locked, the anaconda is typically finished by rolling over the opponent's trapped arm — you barrel roll toward the side of the trapped limb. As you roll, they are forced to follow, and the torque tightens the choke dramatically. Land in a tight ball with your knees tucked to maximize the squeeze. Some practitioners finish without rolling by simply driving forward and compressing, but the roll is the classic and most powerful method.</p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-zinc-400">
              <li>Thread from the front — elbow points toward their near hip</li>
              <li>Lock a tight figure-four before initiating the roll</li>
              <li>Roll over their trapped arm toward their near-arm side</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use Anaconda vs D'Arce</h2>
            <p>Choose the anaconda when you are directly in front of the opponent as they shoot in or turtle. The forward-facing position makes threading from the front natural. Use the D'Arce when you are passing guard and they turn to their knees — you are more at their side, making the D'Arce threading motion easier. Both are figure-four arm-in chokes, but the entry angle determines which is available. Training both gives you a complete front headlock submission system that capitalizes on different opponent reactions.</p>
          </section>
        </div>

        <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
          <h3 className="font-bold text-white mb-2">Related Techniques</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/bjj-darce-choke" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">D'Arce Choke</Link>
            <Link href="/bjj-arm-triangle-choke" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Arm Triangle Choke</Link>
            <Link href="/bjj-turtle-position-attacks" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Turtle Position Attacks</Link>
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
