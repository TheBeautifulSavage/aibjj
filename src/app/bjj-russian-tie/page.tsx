import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "BJJ Russian Tie: Two-on-One Control for Takedowns and Back Takes | AIBJJ", description: "Learn the Russian tie (two-on-one) in BJJ and no-gi grappling. Dominant arm control for takedowns, arm drags, and back takes that work at every level." };
export default function Page() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "BJJ Russian Tie: Two-on-One Control for Takedowns and Back Takes", "publisher": { "@type": "Organization", "name": "AIBJJ", "url": "https://aibjj.com" } }) }} />
      <nav className="border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-black">BJJ Russian Tie: Two-on-One Control for Takedowns and Back Takes</h1>
        <p className="mt-4 text-xl text-zinc-400">The Russian tie (2-on-1) is a dominant arm control position used extensively in both wrestling and no-gi BJJ. By controlling one of their arms with both of yours, you create a structural advantage that opens takedowns, back takes, and submission entries.</p>
        <div className="mt-10 space-y-8 text-zinc-300">
          <section><h2 className="text-2xl font-bold text-white mb-3">Russian Tie Setup and Grip Details</h2><p>The Russian tie is established from a collar tie or wrist control by pivoting under the opponent's arm: your inside hand grips their wrist, your outside arm reaches over their arm to grip the crook of their elbow. Both your arms now trap one of theirs — a two-on-one control. Your hips step slightly outside their controlled arm side, creating an angle that amplifies your leverage. The key detail: keep their arm pulled tight across your chest, not extended out. Extension weakens the control and gives them room to spin out. The Russian tie is a neutral enough position that it works both standing and from guard — in guard, it functions like a two-sleeve spider guard variant without the sleeve. In top position against a seated opponent, the Russian tie is your primary hand-fighting tool to prevent guard establishment and set up guard passing or back takes.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Takedowns from Russian Tie</h2><p>The single leg takedown is the most direct Russian tie attack. With their arm pulled tight across your chest, lower your level and shoot directly to their same-side leg — their arm is out of the way and they have no defense on that side. Complete the single leg with a run-the-pipe finish or a dump to the outside. The throw by from Russian tie: step behind their near leg, pull them forward with the two-on-one, and trip them over your leg. A lateral hip throw works when they bend their arm to try to extract: use that elbow bend to lift and hip throw across your body. The key is that Russian tie gives you a safe, committed grip from which to build takedowns without being countered easily. Their free arm is too far to reach you effectively. Practice Russian tie to single leg as a drilling combination until the transition flows without thought.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Back Take and Arm Lock from Russian Tie</h2><p>The back take from Russian tie is high percentage: pull their arm down and step behind them in one smooth motion. As their arm crosses their centerline, they must turn their back or give you a hip throw. Circle behind, establish the seat belt grip, and take the back. This movement is nearly identical to an arm drag in result. For arm locks, the Russian tie sets up a natural arm bar or shoulder lock: pull the wrist to your hip while using your upper arm to lever their elbow. The Kimura is available when they bend their elbow to escape — grab the wrist, come over with the second hand, and lock the figure four. From a guard position (lying on your back), using a Russian tie to pull your opponent into guard is an excellent guard pulling technique — you have an offensive position established the moment guard is closed. Build Russian tie into your game as a primary hand-fighting tool and watch your overall control improve dramatically.</p></section>
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
