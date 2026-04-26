import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "BJJ Lapel Attacks: Advanced Gi Techniques Using the Lapel | AIBJJ", description: "Explore BJJ lapel attacks including worm guard, lapel guard, and lapel chokes. Advanced gi techniques that create unstoppable sweeping and submission pressure." };
export default function Page() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "BJJ Lapel Attacks: Advanced Gi Techniques Using the Lapel", "publisher": { "@type": "Organization", "name": "AIBJJ", "url": "https://aibjj.com" } }) }} />
<article className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-black">BJJ Lapel Attacks: Advanced Gi Techniques Using the Lapel</h1>
        <p className="mt-4 text-xl text-zinc-400">The lapel is one of the most underutilized weapons in gi BJJ. When you learn to feed and manipulate your opponent's own lapel, you create entanglements that are nearly impossible to escape without giving up a sweep or submission.</p>
        <div className="mt-10 space-y-8 text-zinc-300">
          <section><h2 className="text-2xl font-bold text-white mb-3">Introduction to Lapel Guard Systems</h2><p>Keenan Cornelius popularized the modern lapel guard system, particularly the worm guard, which uses the opponent's own lapel fed under their leg to create a powerful breaking structure. The concept is simple: by threading the lapel through your opponent's legs or around their body, you create a mechanical lock that compromises their base from any angle they try to pass. The lapel becomes a rope that connects your grip to their skeleton, bypassing their muscular strength. To enter lapel guard, begin from De La Riva or sit-up guard — reach down, grab the free hanging lapel, and begin threading. The initial entry is the hardest part; once the lapel is threaded, your opponent must address the entanglement before they can advance. This system requires patience and drilling but rewards players with an almost unsweepable guard position.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Worm Guard and Reverse De La Riva Lapel Sweeps</h2><p>The worm guard sweep is executed from the lapel entanglement position. With the lapel threaded under your opponent's lead leg and gripped in your outside hand, use your De La Riva hook and inside leg to off-balance them. The sweep direction is determined by which way they post — if they post their foot wide, roll them over their posting leg; if they bring it in, reverse the sweep. The reverse De La Riva with lapel control offers similar mechanics but from a different angle, making it a perfect follow-up when opponents defend the worm guard sweep. High-level lapel users create a choose-your-own-adventure problem: every defensive adjustment opens a different sweep. Pair these with the lapel back-take — when opponents try to extract the lapel, use the moment of distraction to climb to the back.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Lapel Chokes: Submissions from Entanglement</h2><p>The lapel creates choke setups that are unique to gi BJJ. The loop choke — where you thread the lapel around the opponent's neck while they're posturing — is one of the sneakiest submissions at the intermediate level. From closed guard, feed the lapel over the opponent's same-side shoulder and control it with your arm. As they drive forward to posture, they literally choke themselves. The baseball bat choke uses lapel fabric to create a cross-collar variation from top half guard or mount. The spinning lapel choke, popularized in sport BJJ, uses the lapel as the finishing mechanism while transitioning to back control. Any time you have lapel control and your opponent is unaware, you have a choke threat. The key is to train the lapel feeding motion until it becomes instinctive, because the window to establish these positions is often very brief in live rolling.</p></section>
        </div>
        <div className="mt-12 rounded-2xl border border-red-900/30 bg-red-950/20 p-8 text-center">
          <h2 className="text-2xl font-black">Level Up Your BJJ</h2>
          <p className="mt-2 text-zinc-400">AI coaching, technique library, training journal — all in one place.</p>
          <Link href="/auth/signup" className="mt-5 inline-block rounded-xl bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700">Start Free</Link>
        </div>
      </article>
    </div>
  );
}
