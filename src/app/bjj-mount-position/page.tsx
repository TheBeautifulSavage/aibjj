import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BJJ Mount Position: Control, Escapes, and Submissions | AIBJJ",
  description: "Master the BJJ mount position — the highest-value ground position worth 4 points. Learn mount control, submissions, and how to escape mount effectively.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "BJJ Mount Position: Control, Attacks, and Escapes",
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
        <h1 className="text-4xl font-black">BJJ Mount Position: Control, Attacks, and Escapes</h1>
        <p className="mt-4 text-xl text-zinc-400">Mount is the crown jewel of Brazilian Jiu-Jitsu positions — 4 points under IBJJF rules and a direct path to the most powerful submissions in the art. Controlling mount effectively is the difference between dominant top players and those who lose the position immediately.</p>
        <div className="mt-10 space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Establishing and Maintaining Mount</h2>
            <p>Achieving mount means placing both knees on either side of your opponent's torso with your hips over their center of mass. High mount — where your knees are under their armpits — is the most powerful variation, severely limiting their arm movement and enabling collar chokes and armbars. Low mount, with knees near the hips, is easier to hold but offers fewer submission angles. The key to maintaining mount is constant weight distribution adjustment. When your opponent bridges and rolls, follow their motion by widening your knees and lowering your hips. When they insert their elbows to create frames, neutralize the frame by controlling the arm before it becomes a full structure. Hooks under the legs (S-mount transition) or grapevines keep the opponent flat and prevent bridging. Never post your hands on the mat — this raises your base and makes you easier to off-balance.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Submissions from Mount Position</h2>
            <p>Mount offers direct access to armbar, cross-collar choke, Ezekiel choke, americana, and triangle setups. The cross-collar choke (from gi) requires both hands inserted palm-up into the collar — one deep, one shallow — and is one of the highest-percentage submissions at black belt. The armbar from mount requires trapping one arm, sitting to the side, and pivoting to extend the elbow. The Ezekiel choke works in both gi and no-gi using a forearm crush against the neck with the opposite hand bracing. Americanas attack the shoulder joint by isolating one arm flat and creating an L-shape leverage. Each submission flows from the previous — if the armbar defense raises the elbow, transition to the Ezekiel; if the Ezekiel defense tucks the chin, switch to cross-collar.</p>
            <ul className="mt-3 space-y-1 list-disc list-inside text-zinc-400">
              <li>Cross-collar choke: highest-percentage gi submission from mount</li><li>Armbar from mount: pivot to the side before sitting back</li><li>S-mount transition isolates one arm for armbar or triangle</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Escaping the Mount</h2>
            <p>The two fundamental mount escapes are the upa (bridge and roll) and the elbow-knee escape. The upa requires trapping one arm and one leg on the same side, bridging explosively, and rolling the opponent over that shoulder. The elbow-knee escape (shrimping) uses hip movement to create space between your elbow and knee, gradually reclaiming half guard and then full guard. The upa works best against high-mount opponents who post; the elbow-knee escape works when the opponent sits back to attack. Against expert mount players, combine both: threaten the upa to make them post their arms, then shrimp to half guard while their base is compromised. Early in training, master the elbow-knee escape — it's the more reliable technical option against aggressive submission attackers.</p>
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
