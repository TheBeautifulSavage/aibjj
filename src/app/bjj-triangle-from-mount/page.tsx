import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Triangle from Mount: High Percentage Attack | AIBJJ",
  description: "Learn to attack the mounted triangle choke in BJJ. Arm isolation from mount, leg configuration, and the powerful finish from this dominant top position attack.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Triangle from Mount: High Percentage Attack",
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
          <span className="ml-1 text-zinc-300">Triangle from Mount</span>
        </nav>
        <h1 className="text-4xl font-black">Triangle from Mount: High Percentage Attack</h1>
        <p className="mt-4 text-xl text-zinc-400">The mounted triangle is a devastating combination attack that traps one arm and the neck using your legs from the top mount position. It is one of the most difficult positions to escape from and combines mount dominance with choking pressure.</p>

        <div className="mt-10 space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Setting Up the Mounted Triangle</h2>
            <p>The mounted triangle becomes available when your opponent raises one arm to push your chest or reaches across their own body. Trap that arm by pinching it with your knees and controlling it at the wrist. From high mount, swing your leg over their face on the side of the trapped arm, hooking behind their head with the back of your knee. Your other leg remains in mount position or hooks under their opposite shoulder. The figure-four is completed by crossing your ankle behind your knee. One arm is now trapped inside the triangle while their neck is compressed between your thighs.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Finishing the Mounted Triangle</h2>
            <p>Once the triangle is locked, pull their head down toward your body while squeezing your knees together. Drive your hips into their face to tighten the choke. The mounted triangle applies both carotid compression and airway pressure, making it extremely tight when locked correctly. Ensure the arm is trapped on the correct side — the shoulder of the trapped arm must be inside the triangle, not outside.</p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-zinc-400">
              <li>Swing leg over on the same side as the trapped arm</li>
              <li>Pull their head down while squeezing knees together</li>
              <li>Drive hips into their face — mounted triangle is tighter than guard triangle</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Mounted Triangle as a Transition</h2>
            <p>The mounted triangle naturally transitions to the mounted armbar — simply grab their wrist, extend one leg toward their far hip, and hyperextend the elbow. Conversely, a defended mounted armbar often creates the mounted triangle as the opponent tucks their arm. Drilling these two attacks together creates a seamless top game combination that covers each other's defenses, giving your mount attacks a true chain submission structure that pressures opponents into impossible choices.</p>
          </section>
        </div>

        <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
          <h3 className="font-bold text-white mb-2">Related Techniques</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/bjj-triangle-setup" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Triangle Setup</Link>
            <Link href="/bjj-armbar-from-mount" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Armbar from Mount</Link>
            <Link href="/bjj-reverse-triangle" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Reverse Triangle</Link>
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
