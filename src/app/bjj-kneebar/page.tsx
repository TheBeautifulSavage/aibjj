import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kneebar: Leg Lock Breakdown | AIBJJ",
  description: "Learn the kneebar setup, body positioning, and finish mechanics. A versatile BJJ leg lock that hyperextends the knee from multiple positions and guard passes.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Kneebar: Leg Lock Breakdown",
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
          <span className="ml-1 text-zinc-300">Kneebar</span>
        </nav>
        <h1 className="text-4xl font-black">Kneebar: Leg Lock Breakdown</h1>
        <p className="mt-4 text-xl text-zinc-400">The kneebar is a leg lock submission that hyperextends the knee joint using your body as a fulcrum against the opponent's thigh and shin. It is the lower-body analog of the armbar and can be attacked from guard passing, top position, and leg entanglements.</p>

        <div className="mt-10 space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Kneebar Mechanics and Entry</h2>
            <p>To apply a kneebar, you must position your body perpendicular to the opponent's leg so that their knee rests against your chest or hip. Your arms wrap around their leg — one arm hooks over the shin and the other hooks under the thigh — and clasp together. Your hips or chest act as the fulcrum that drives the knee into hyperextension when you extend your hips forward. Common entries include trapping the leg as they step over during a guard pass, or from a leg entanglement when transitioning between positions. The kneebar is most accessible when you can get perpendicular to their leg with control of both above and below the knee.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Finishing the Kneebar</h2>
            <p>With their leg secured across your body, press your hips forward while pulling their leg toward your chest. This creates a hyperextension force on the knee joint — the same mechanism as the armbar but on the leg. Point their toes in a consistent direction to control rotation of the joint. The finish should be a smooth hip drive forward rather than a violent jerk.</p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-zinc-400">
              <li>Position their knee against your hip or chest as the fulcrum point</li>
              <li>Clasp hands around the leg above and below the knee</li>
              <li>Drive hips forward smoothly — control the extension to prevent injury</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Kneebar from Guard Passing</h2>
            <p>The kneebar appears frequently during guard passing when your opponent's leg becomes isolated. As you pass the spider guard or de la riva, their leg often gets trapped in a position that naturally sets up the kneebar. Recognizing the kneebar opportunity during guard passing makes you a dual-threat passer — your opponent must defend both the pass and the submission simultaneously. The kneebar is restricted in gi competition to brown and black belt, but in no-gi, rules vary by organization. Always know the ruleset before competing.</p>
          </section>
        </div>

        <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
          <h3 className="font-bold text-white mb-2">Related Techniques</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/bjj-straight-footlock" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Straight Foot Lock</Link>
            <Link href="/bjj-inside-heel-hook" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Inside Heel Hook</Link>
            <Link href="/bjj-armbar-from-guard" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Armbar from Guard</Link>
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
