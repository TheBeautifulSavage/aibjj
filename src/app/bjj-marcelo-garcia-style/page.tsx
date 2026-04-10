import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Marcelo Garcia BJJ Style: Guard, Guillotines & Pressure | AIBJJ", description: "Discover Marcelo Garcia's BJJ style — X-guard, arm drags, guillotine chokes, and the relentless pressure that made him a 5-time world champion grappler." };
export default function Page() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "Marcelo Garcia BJJ Style: Guard, Guillotines & Pressure", "publisher": { "@type": "Organization", "name": "AIBJJ", "url": "https://aibjj.com" } }) }} />
      <nav className="border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-black">Marcelo Garcia BJJ Style: Guard, Guillotines & Pressure</h1>
        <p className="mt-4 text-xl text-zinc-400">Marcelo Garcia redefined what a smaller grappler could accomplish against bigger opponents, winning ADCC and World titles while regularly submitting people who outweighed him significantly.</p>
        <div className="mt-10 space-y-8 text-zinc-300">
          <section><h2 className="text-2xl font-bold text-white mb-3">X-Guard and the Guard Passing Counter System</h2><p>Marcelo Garcia popularized the X-guard as a complete system for dealing with standing opponents and guard passers. Rather than simply playing guard, Marcelo used X-guard as a dynamic sweeping and transition hub that led directly into leg entanglements, back takes, and submission opportunities. His X-guard entries off arm drags became a template copied worldwide. The arm drag itself — pulling the opponent's arm across to take the back or enter X-guard — became one of the most studied techniques in grappling. What made Marcelo's guard special was its seamless connectivity: every position connected to three others, making his guard nearly impossible to pass without walking into a trap. He also used butterfly guard masterfully, combining it with under-hooks and head positioning to generate sweeps and back takes that baffled even the best guard passers of his era consistently.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">The Guillotine Choke Mastery</h2><p>Marcelo Garcia elevated the arm-in guillotine to a primary weapon, catching it from guard pulls, failed takedown attempts, and scrambles. His guillotine was uniquely dangerous because he applied it with full body mechanics — not just arm squeeze but hip engagement and positional control that prevented the usual defenses. He caught the guillotine against wrestlers and judokas who shot double legs, turning their own momentum against them. The high elbow guillotine variation he favored created a bite that was extremely difficult to survive. Studying Marcelo's guillotine teaches practitioners about creating submission setups from transitions rather than static positions. His philosophy was that the submission happens during movement — and the guillotine was the perfect weapon to capitalize on that moment when an opponent's neck becomes exposed during a failed offensive action or a reactive defensive scramble.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">What You Can Learn from Marcelo Garcia's Style</h2><p>Marcelo Garcia proves that technique and timing can overcome significant size and strength disadvantages. His willingness to go to the ground immediately and his comfort in all bottom positions made him nearly impossible to hold down. Practitioners can learn from his obsession with back takes — almost everything in his game creates a path to the back. His training methodology at MG in Action, his gym in New York, emphasized drilling connections between techniques until they became automatic. He also demonstrated extraordinary mental resilience, losing early in tournaments to larger opponents and still winning. The key insight from Marcelo's career is that having a connected system beats having individual techniques. Build your game around a few high-percentage positions that flow into each other, and you will always have options regardless of what the opponent does in response to your attacks.</p></section>
        </div>
        <div className="mt-12 rounded-2xl border border-red-900/30 bg-red-950/20 p-8 text-center">
          <h2 className="text-2xl font-black">Train Smarter with AI</h2>
          <p className="mt-2 text-zinc-400">AI coaching, technique tracker, training journal.</p>
          <Link href="/auth/signup" className="mt-5 inline-block rounded-xl bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700">Start Free</Link>
        </div>
      </article>
    </div>
  );
}
