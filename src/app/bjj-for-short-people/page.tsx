import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "BJJ for Short People: Low Center of Gravity Dominance | AIBJJ", description: "BJJ for short people — use your low center of gravity, explosive hips, and superior leverage from bottom positions to sweep and submit taller opponents consistently." };
export default function Page() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "BJJ for Short People: Low Center of Gravity Dominance", "publisher": { "@type": "Organization", "name": "AIBJJ", "url": "https://aibjj.com" } }) }} />
      <nav className="border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-black">BJJ for Short People: Low Center of Gravity Dominance</h1>
        <p className="mt-4 text-xl text-zinc-400">Short grapplers have real advantages in BJJ — a lower center of gravity for superior balance and base, explosive hip movement, and the ability to get under taller opponents effectively.</p>
        <div className="mt-10 space-y-8 text-zinc-300">
          <section><h2 className="text-2xl font-bold text-white mb-3">Leverage and Low Center of Gravity</h2><p>Short practitioners naturally have a lower center of gravity, which translates directly to superior base and balance in grappling. This makes them harder to sweep from top positions and gives them excellent stability when defending takedowns. The compact frame of a shorter grappler also means their hips are naturally closer to the ground, making hip escapes and guard retention movements more powerful and explosive. Short practitioners excel at getting underneath larger opponents — crawling under the hips to execute deep half guard, X-guard entries, and single leg takedowns all benefit from a shorter stature. Many of BJJ's most explosive guard players are shorter practitioners who learned to use their compact bodies to generate tremendous leverage from positions that taller practitioners find awkward. Understanding your leverage advantages and building a game around them — particularly guard games that take you underneath opponents — is the strategic foundation for shorter BJJ practitioners at every level of the sport.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Best Techniques for Short Grapplers</h2><p>Double leg and single leg takedowns suit short grapplers well because the level change is less dramatic — shorter practitioners do not have as far to drop for a shot. Butterfly guard is excellent for shorter grapplers whose hips generate tremendous sweep power from that position. Half guard, particularly deep half and the waiter sweep series, suits compact practitioners who can easily slide underneath. Guard passing for short practitioners works well from headquarters and smash passing positions where compact body mechanics generate strong pressure. Short practitioners often excel at wrestling-style top control because they can maintain low hips and good base. The body lock pass and leg weave are natural fits. Avoid relying on triangle chokes unless you have exceptional hip flexibility because shorter leg length makes triangles mechanically harder. Instead, build a submission game around armbars from guard, rear naked chokes from back control, and collar chokes that work regardless of limb length.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Mental Game and Adapting to Size Differences</h2><p>Short practitioners will frequently train and compete against taller and often heavier opponents. Developing mental toughness around this reality is important — many short grapplers become exceptionally technical because they cannot rely on size, which often makes them better grapplers long-term. Embracing guard pulling and guard play removes the height disadvantage in takedowns. Getting the clinch and staying close neutralizes the reach of taller opponents. Learning to use grips to control posture — preventing taller opponents from using their height advantage effectively — is a key tactical skill. Short practitioners who compete regularly against taller opponents often develop excellent sensitivity and timing because they must be more precise to overcome mechanical disadvantages. The BJJ community has many examples of elite short practitioners who became world-class by optimizing their game for their body type rather than fighting it.</p></section>
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
