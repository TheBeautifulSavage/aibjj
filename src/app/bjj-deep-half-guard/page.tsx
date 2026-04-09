import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BJJ Deep Half Guard: Sweeps and Control System | AIBJJ",
  description: "Master BJJ deep half guard — the offensive underhook position under the opponent's hips. Learn the waiter sweep, back take, and Jeff Glover entries.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "BJJ Deep Half Guard: The Offensive Underhook System",
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
        <h1 className="text-4xl font-black">BJJ Deep Half Guard: The Offensive Underhook System</h1>
        <p className="mt-4 text-xl text-zinc-400">Deep half guard puts you underneath your opponent's hips with an underhook on their leg, disrupting their base completely. From this seemingly desperate position, elite practitioners launch powerful sweeps and back takes.</p>
        <div className="mt-10 space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Understanding Deep Half Guard Position</h2>
            <p>Deep half guard is achieved when you slide your entire body under your opponent's hips, controlling one of their legs from underneath with an underhook. Your head emerges between their legs; your body is perpendicular to theirs. The position is disorienting for the top player because their base is completely disrupted — they cannot pressure downward through their legs without driving them into an even more compromised position. The entry to deep half typically comes from standard half guard when the top player flattens you: rather than fighting the flatten, you accept it and slide deeper under, converting the pass attempt into your offensive position. This counter-intuitive response to top pressure is the hallmark of deep half guard — using the opponent's weight and forward pressure as the mechanism for entry.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Waiter Sweep and Back Take</h2>
            <p>The waiter sweep is the signature attack from deep half guard. Controlling the opponent's far leg with both hands (like holding a waiter's tray), use a hip extension and leg post to drive them over your body. The sweep direction follows the curvature of their compromised base. The back take from deep half requires rolling under the opponent's hips as they attempt to post and stabilize — your rolling motion brings you behind them in a turtle-taking position. Jeff Glover's back roll from deep half involves a specific head tuck and shoulder roll that comes up directly behind the opponent for back mount. The Homer Simpson sweep attacks when the opponent posts their far hand on the mat, hooking that arm and rolling them over it. Each attack exploits a different defensive reaction.</p>
            <ul className="mt-3 space-y-1 list-disc list-inside text-zinc-400">
              <li>Waiter sweep: control both legs from under, lift and extend hips</li><li>Back take: roll under their hip post to emerge behind them</li><li>Homer Simpson sweep targets their posted far hand</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Defenses Against Deep Half Guard</h2>
            <p>Stopping deep half guard requires intercepting the entry before your opponent slides fully under your hips. When you feel them begin to dive deep, sprawl hard to flatten them and establish a whizzer (overhook) on their underhooking arm. A strong whizzer combined with hip driving forward forces their shoulder into the mat and begins a guard pass. If they establish deep half despite your defense, immediately post your free leg on the far side of their body to maintain balance and begin peeling their underhook. Knee slide passes are highly effective against deep half — thread the knee between their legs and slide to side control. The worst response to deep half guard is passivity: sitting still while someone has full underhook control of your leg will result in a sweep within seconds.</p>
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
