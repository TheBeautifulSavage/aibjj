import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BJJ Crab Ride: Back Control Entry and Leg Lock Position | AIBJJ",
  description: "Master the BJJ crab ride — the leg entanglement used in EBI overtime and back takes. Learn entries, attacks, and how to use crab ride in competition.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "BJJ Crab Ride: Back Entry and Leg Entanglement",
    "author": { "@type": "Organization", "name": "AIBJJ" },
    "publisher": { "@type": "Organization", "name": "AIBJJ", "url": "https://aibjj.com" }
  };
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-black">BJJ Crab Ride: Back Entry and Leg Entanglement</h1>
        <p className="mt-4 text-xl text-zinc-400">The crab ride is a behind-the-opponent leg control position used as a back take entry, leg lock setup, and famously as one of the overtime positions in EBI competition. It rewards athletes who understand leg-body connection.</p>
        <div className="mt-10 space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Crab Ride Position and Entry</h2>
            <p>The crab ride positions you behind a turtled or moving opponent with one leg hooked over their hip and under their thigh from behind (like a leg hook from the back), while your other leg posts for base. Your body faces the same direction as theirs. The 'crab' name comes from the lateral, multi-directional mobility the position enables — you can follow an opponent through almost any direction of movement while maintaining the leg hook. Common entries include: from turtle, reaching around and hooking the far hip with your top leg; from a guard pass attempt where you end up behind them; from a double-leg takedown finish where you ride through to a hooked position. The crab ride is a transition position — its goal is to advance to back mount, a leg lock, or maintain connection through a scramble.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Attacks from Crab Ride</h2>
            <p>Back mount is the primary target from crab ride. Once the leg hook is established, bring your chest to their back and seek the seatbelt grip before inserting your hooks. The heel hook entry from crab ride comes when the opponent steps away — the hooking leg catches the heel, and the hip controls the knee joint. The banana split (a painful hip and groin stretch) occurs when you extend the hooked leg while controlling their other leg in the opposite direction. In EBI overtime, crab ride is one of the two starting positions (the other is back control); escaping crab ride within a time limit determines the winner if no submission occurs. Crab ride escape training specifically prepares athletes for this format — step-over escapes, rolling through, and getting to a standing position all work.</p>
            <ul className="mt-3 space-y-1 list-disc list-inside text-zinc-400">
              <li>Back take: chest on their back, seatbelt before hooks</li><li>Heel hook entry: crab ride hook catches the heel as they step away</li><li>EBI overtime: crab ride is the starting position — escape training required</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Crab Ride Escapes</h2>
            <p>Escaping crab ride requires understanding the hook's mechanical function. The hook holds you in a specific rotation; removing it or rotating through it defeats the control. The step-over escape brings your far leg over the hooking leg, rotating forward to remove the hook entirely. Rolling through the crab ride — diving your near shoulder forward — creates a rolling scramble that leaves the crab rider behind. Standing up while maintaining posture brings you out of range, provided you prevent them from inserting a second hook during the stand-up. The most common mistake in crab ride escape is panicking and stalling, allowing the rider to advance to full back mount. Commit immediately to one escape direction — the longer you wait in crab ride, the worse your position becomes.</p>
          </section>
        </div>
        <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
          <h3 className="font-bold text-white mb-3">Related Techniques</h3>
          <div className="flex flex-wrap gap-2 text-sm">
            <Link href="/bjj-armbar" className="rounded-full border border-zinc-700 px-3 py-1 text-zinc-400 hover:text-white">Armbar</Link>
            <Link href="/bjj-triangle-choke" className="rounded-full border border-zinc-700 px-3 py-1 text-zinc-400 hover:text-white">Triangle</Link>
            <Link href="/bjj-guard-passing" className="rounded-full border border-zinc-700 px-3 py-1 text-zinc-400 hover:text-white">Guard Passing</Link>
            <Link href="/bjj-techniques" className="rounded-full bg-red-600/10 border border-red-700/30 px-3 py-1 text-red-400 hover:text-red-300">All Techniques →</Link>
          </div>
        </div>
        <div className="mt-12 rounded-2xl border border-red-900/30 bg-red-950/20 p-8 text-center">
          <h2 className="text-2xl font-black">Master This Technique with AI Coaching</h2>
          <p className="mt-2 text-zinc-400">Get personalized drilling sequences and real-time feedback.</p>
          <Link href="/auth/signup" className="mt-5 inline-block rounded-xl bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700">Start Free</Link>
        </div>
      </article>
    </div>
  );
}
