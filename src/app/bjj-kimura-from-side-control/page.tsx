import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kimura from Side Control: Dominant Attack | AIBJJ",
  description: "Master the kimura from side control — isolation, figure-four lock, and finish. A dominant shoulder attack from top position that transitions to back takes.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Kimura from Side Control: Dominant Attack",
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
          <span className="ml-1 text-zinc-300">Kimura from Side Control</span>
        </nav>
        <h1 className="text-4xl font-black">Kimura from Side Control: Dominant Attack</h1>
        <p className="mt-4 text-xl text-zinc-400">The kimura from side control is one of the most powerful shoulder attacks in BJJ, launched from a position of complete top dominance. It is especially effective when the opponent reaches across to frame against your hip or pushes your head.</p>

        <div className="mt-10 space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Setting Up the Kimura from Side Control</h2>
            <p>From side control, the kimura becomes available when your opponent's near arm reaches across their body or pushes your hip. Secure their wrist with your near hand immediately. Then, reach under their elbow with your far arm to establish the figure-four grip on your own wrist. This pins their arm and isolates the shoulder. The key is keeping their elbow bent — a straight arm cannot be kimura'd. Use your body weight to keep them flat and prevent them from turning into you. Many opponents grip their own belt or shorts to stall — your job is to break that grip by prying their arm away from their body before locking the figure-four.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Finishing and Rotation</h2>
            <p>To finish the kimura from side control, step over their head with your far leg (north-south kimura) or keep your hips low and rotate the arm up toward their back. The north-south kimura is extremely powerful — walking toward their head while keeping the figure-four rotates the shoulder into maximum internal rotation. Keep the elbow bent at 90 degrees throughout the finish.</p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-zinc-400">
              <li>Bend their elbow to 90 degrees — straight arm cannot be kimura'd</li>
              <li>Step over their head for the north-south kimura finish</li>
              <li>Rotate the hand toward their back, not just up in the air</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When They Defend: Transitions</h2>
            <p>If the opponent locks their own hands together to prevent the kimura, transition to the Americana (key lock) by switching the direction of rotation — instead of rotating up behind their back, push the wrist down toward the mat while the elbow stays in place. Alternatively, if they roll to escape, follow them over to take their back. The kimura from side control is the entry point to an entire submission chain that flows between shoulder locks and positional advances based on how the opponent reacts.</p>
          </section>
        </div>

        <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
          <h3 className="font-bold text-white mb-2">Related Techniques</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/bjj-kimura-from-guard" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Kimura from Guard</Link>
            <Link href="/bjj-kimura-trap-system" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Kimura Trap System</Link>
            <Link href="/bjj-north-south-choke" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">North-South Choke</Link>
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
