import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "BJJ Collar Grip Attacks: Master Gi Gripping for Sweeps & Submissions | AIBJJ", description: "Learn how to use collar grips to control, sweep, and submit opponents in gi BJJ. Setups, attacks, and competition tips for every level." };
export default function Page() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "BJJ Collar Grip Attacks: Master Gi Gripping for Sweeps & Submissions", "publisher": { "@type": "Organization", "name": "AIBJJ", "url": "https://aibjj.com" } }) }} />
      <nav className="border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-black">BJJ Collar Grip Attacks: Master Gi Gripping for Sweeps & Submissions</h1>
        <p className="mt-4 text-xl text-zinc-400">The collar grip is one of the most powerful tools in gi BJJ. When you control the collar, you control posture, breathing, and movement — setting up chokes, sweeps, and takedowns with mechanical efficiency.</p>
        <div className="mt-10 space-y-8 text-zinc-300">
          <section><h2 className="text-2xl font-bold text-white mb-3">Why Collar Grips Dominate Gi BJJ</h2><p>The collar grip gives you direct access to the opponent's spine and head alignment. A deep cross-collar grip breaks posture instantly, forcing your opponent to fight the choke threat while you set up sweeps. High-level competitors like Rodolfo Vieira and Lucas Lepri built entire games around collar control. The grip creates a mechanical advantage — by pulling the collar across the neck and rotating your wrist, you compress the carotid arteries without needing perfect technique. Even a sloppy collar grip creates danger. The key is getting your hand deep enough past the collar that your knuckles press against the spine. From closed guard, the collar grip combined with hip movement creates unstoppable sweeping pressure. Train collar grips with intention and they become your most reliable attack in the gi.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Top Attacks from Collar Grip Control</h2><p>Once you secure a deep collar grip, multiple attacks open simultaneously. The cross-choke from closed guard is the classic: second hand secures the opposite collar, elbows drive in, and the choke finishes as you crunch inward. The ezekiel choke uses the collar grip as the anchor while your forearm slides across the throat. From mount, a deep collar grip with an arm-in setup becomes one of the tightest chokes in BJJ. The bow-and-arrow choke uses the collar grip while sitting out to the side, creating a rotational force on the neck that is extremely difficult to defend. Collar grips also set up takedowns — a cross collar pull combined with a sleeve grip allows devastating hip throws and collar drags. Every collar grip creates a dilemma your opponent must address, which opens secondary attacks.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Collar Grip Sweeps and Posture Breaking</h2><p>Posture control is the foundation of guard play, and the collar grip is your primary posture-breaking tool. From closed guard, shoot your hand deep into the collar and pull their head toward your chest — their base immediately compromises. This opens the scissor sweep, hip bump sweep, and triangle setups. The single collar grip with a hip shift loads all your body weight into the sweep. From open guard positions like spider guard or De La Riva, maintaining the collar grip while pushing with your feet creates a two-direction force that destroys base. For the balloon sweep (overhead sweep), the collar grip is essential to redirect their weight straight over your head. Practice collar grip maintenance during live training — opponents will fight to remove it constantly, so learning to re-grip under pressure is as important as the attacks themselves.</p></section>
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
