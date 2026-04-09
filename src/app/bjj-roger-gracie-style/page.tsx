import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Roger Gracie BJJ Style: Fundamentals That Dominate | AIBJJ", description: "Learn Roger Gracie's BJJ style — pure fundamentals, dominant top pressure, and the cross collar choke that submitted world champions at every belt level." };
export default function Page() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "Roger Gracie BJJ Style: Fundamentals That Dominate", "publisher": { "@type": "Organization", "name": "AIBJJ", "url": "https://aibjj.com" } }) }} />
      <nav className="border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-black">Roger Gracie BJJ Style: Fundamentals That Dominate</h1>
        <p className="mt-4 text-xl text-zinc-400">Roger Gracie is widely considered the greatest BJJ competitor of all time. His secret? Perfect fundamentals applied with relentless precision against the world&apos;s best.</p>
        <div className="mt-10 space-y-8 text-zinc-300">
          <section><h2 className="text-2xl font-bold text-white mb-3">The Cross Collar Choke: Roger&apos;s Signature Weapon</h2><p>Roger Gracie built his legacy on a submission that every white belt learns on day one: the cross collar choke from mount. What made it unstoppable was not creativity but perfection. Roger&apos;s body positioning, weight distribution, and grip depth were so precise that even knowing it was coming could not stop it. He submitted world champions with this technique repeatedly throughout his career. The lesson for every BJJ practitioner is profound — mastery of basics beats novelty every time. Roger spent thousands of hours perfecting the same handful of techniques until they became weapons that could not be defended by anyone on earth. His cross collar choke from mount remains the gold standard example of what BJJ fundamentals look like when taken to their absolute ceiling through dedication and intelligent repetition over decades of serious practice.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Top Pressure and the Mount Game</h2><p>Roger Gracie&apos;s top game is a clinic in pressure, patience, and positional hierarchy. He seeks mount above all other positions, using his long frame and exceptional base to flatten opponents and systematically remove their frames. His transitions from side control to mount are methodical — he never rushes, never abandons position for a submission attempt prematurely. Once in mount, his weight settles like concrete. Opponents exhaust themselves trying to escape while Roger waits calmly for the inevitable opening. This patient, pressure-based top game reflects classical Gracie jiu-jitsu at its finest: win the position, then win the submission. For practitioners looking to improve their top game, studying Roger means learning that pressure is not just physical weight — it is the psychological weight of knowing your opponent has nowhere to go and all the time in the world to find out.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">What You Can Learn from Roger Gracie&apos;s Style</h2><p>The primary lesson from Roger Gracie is that depth beats breadth in BJJ. Rather than collecting techniques, Roger refined a small system to perfection. He also demonstrated exceptional mental composure — his matches are chess games where he never panics, never takes risks, and never deviates from his game plan under pressure. His guard passing relies on establishing grips and breaking posture before advancing, never forcing. Studying Roger teaches you to slow down, trust your fundamentals, and understand that the person who controls position controls the match. His career also highlights the importance of understanding weight and pressure as active tools rather than passive byproducts of positioning. If you train BJJ and your fundamentals feel boring, watch Roger Gracie compete and remember: boring fundamentals done perfectly are the most dangerous tools in grappling.</p></section>
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
