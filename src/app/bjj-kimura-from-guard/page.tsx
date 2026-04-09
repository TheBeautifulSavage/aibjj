import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kimura from Guard: Classic Attack | AIBJJ",
  description: "Learn the kimura from closed guard — grip, hip angle, and finish mechanics. One of BJJ's most versatile attacks that sets up sweeps and back takes.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Kimura from Guard: Classic Attack",
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
          <span className="ml-1 text-zinc-300">Kimura from Guard</span>
        </nav>
        <h1 className="text-4xl font-black">Kimura from Guard: Classic Attack</h1>
        <p className="mt-4 text-xl text-zinc-400">The kimura from guard is one of the foundational submissions in BJJ, attacking the shoulder with a double-wrist lock that can be finished, swept from, or used to take the back. Mastery of this position makes your entire closed guard game more dangerous.</p>

        <div className="mt-10 space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Gripping the Kimura from Closed Guard</h2>
            <p>The kimura grip begins when your opponent places their hand on the mat to base or posts at your hip. Immediately grab their wrist with your same-side hand and sit up to secure the figure-four: your other arm threads under their elbow and grabs your own wrist. This double-wrist lock traps their arm in a controlled position. Once the kimura grip is locked, break their posture down with your legs and pull their arm away from their body. The arm must be isolated — if they can grip their belt or their own body, the submission stalls. Using your legs to break posture and your hips to create angle are the most important factors in this setup.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Finishing and Angle</h2>
            <p>To finish the kimura from guard, open your guard and swing your body to the side of the trapped arm. Your hip movement creates the angle that allows you to rotate the arm up behind their back into internal rotation of the shoulder. Without the angle, you are fighting their strength. With it, the joint mechanics do the work for you. Keep the elbow close to your body and rotate the wrist up and behind their back smoothly.</p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-zinc-400">
              <li>Lock figure-four grip before any finishing attempt</li>
              <li>Angle your hips out toward the trapped arm side</li>
              <li>Rotate the hand toward their back — shoulder internal rotation</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Kimura as a Guard Retention Tool</h2>
            <p>Even when the kimura submission fails, the grip is a powerful guard retention and sweeping tool. If they stand to pass, use the kimura grip to pull them down and sweep to the top. If they posture strongly, use the grip to take their back by swinging your legs around toward their side. The kimura from guard is best understood not as a single submission but as a control grip that opens up a complete system of attacks, sweeps, and back takes across all positions.</p>
          </section>
        </div>

        <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
          <h3 className="font-bold text-white mb-2">Related Techniques</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/bjj-kimura-from-side-control" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Kimura from Side Control</Link>
            <Link href="/bjj-kimura-trap-system" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Kimura Trap System</Link>
            <Link href="/bjj-omoplata-setup" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Omoplata Setup</Link>
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
