import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gogoplata: The Shin Choke | AIBJJ",
  description: "Learn the gogoplata shin choke from rubber guard and inverted positions. A rare and devastating BJJ submission that uses the shin bone to apply direct neck pressure.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Gogoplata: The Shin Choke",
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
          <span className="ml-1 text-zinc-300">Gogoplata</span>
        </nav>
        <h1 className="text-4xl font-black">Gogoplata: The Shin Choke</h1>
        <p className="mt-4 text-xl text-zinc-400">The gogoplata is an unusual and highly flexible submission that places the shin across the opponent's throat to apply a choking or cranking pressure. Popularized by Shinya Aoki and the 10th Planet Jiu-Jitsu system, it remains one of the most surprising finishes in grappling.</p>

        <div className="mt-10 space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Gogoplata Mechanics and Setup</h2>
            <p>The gogoplata is most often accessed from the rubber guard or an inverted guard position. From rubber guard (mission control), slide your shin across their throat by threading your foot past their head. Your shin bone — specifically the area just above the ankle — presses directly against their trachea or carotid area. Reach behind their head with both hands to clasp together, pulling their neck into the shin. This requires significant hip flexibility and a long leg, as you must get your shin high enough to contact their neck. Flexibility drills and rubber guard practice are prerequisites for this submission.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Gogoplata from the Top and Side</h2>
            <p>Less commonly, the gogoplata appears from top position when the opponent is turtled. You can thread your foot under their chin and use the shin to apply the choke from a mounted or north-south position. The inverted gogoplata, or "electric chair" position, combines shin pressure with spinal flexion for a hybrid submission. Each variation requires the shin to be placed precisely — too high or too low on the neck changes the submission's effectiveness dramatically.</p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-zinc-400">
              <li>Shin must contact the throat or carotid — ankle bone is too low</li>
              <li>Clasp both hands behind their head and pull neck into the shin</li>
              <li>Flexibility in the hip flexors is essential for a deep setup</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Why the Gogoplata Works</h2>
            <p>The gogoplata works because the shin bone creates a hard, narrow point of pressure directly against the soft throat and neck structures. Unlike arm-based chokes that use the softer forearm, the shin concentrates force into a much smaller area, making the pressure intense and immediate. Against a resisting opponent, the gogoplata also threatens a neck crank if their chin rises, combining two different submission mechanisms into one position. It is a true submission for flexible, creative grapplers willing to explore the edges of the positional map.</p>
          </section>
        </div>

        <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
          <h3 className="font-bold text-white mb-2">Related Techniques</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/bjj-rubber-guard" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Rubber Guard</Link>
            <Link href="/bjj-triangle-setup" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Triangle Setup</Link>
            <Link href="/bjj-inverted-guard" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Inverted Guard</Link>
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
