import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Lucas Lepri BJJ Style: Passing and Guard Mastery | AIBJJ", description: "Learn Lucas Lepri's BJJ style — elite guard passing, technical precision, and the systematic approach that made him a dominant lightweight World Champion." };
export default function Page() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "Lucas Lepri BJJ Style: Passing and Guard Mastery", "publisher": { "@type": "Organization", "name": "AIBJJ", "url": "https://aibjj.com" } }) }} />
      <nav className="border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-black">Lucas Lepri BJJ Style: Passing and Guard Mastery</h1>
        <p className="mt-4 text-xl text-zinc-400">Lucas Lepri is a six-time World Champion whose technical precision and systematic game made him one of the most dominant lightweight competitors in BJJ history.</p>
        <div className="mt-10 space-y-8 text-zinc-300">
          <section><h2 className="text-2xl font-bold text-white mb-3">Guard Passing: Technical Excellence</h2><p>Lucas Lepri's guard passing is defined by exceptional technique and timing. He specializes in the torreando pass, knee cut, and leg drag, using precise grip work and hip positioning to neutralize active guards. What separates his passing is the combination of pressure and mobility — he applies enough pressure to limit guard movement while maintaining the ability to quickly transition between passing lanes. His grip fighting before the pass is particularly instructive: Lepri invests heavily in establishing the right grips before committing to a passing direction, understanding that grip control largely determines passing success. He also demonstrates excellent sensitivity to guard player reactions, adjusting his passing angle in real time based on hip movement and weight shifts. For practitioners developing their passing game, Lepri's approach emphasizes that technical precision and grip work are more reliable than pure athleticism, making his style highly transferable to practitioners of all physical types and competitive levels.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Guard Game and Sweeps</h2><p>Lepri plays a technical closed and open guard game that creates sweeping opportunities through excellent timing and connection. His butterfly guard is particularly refined, using under-hooks and head position to generate leverage for sweeps against both standing and kneeling opponents. He transitions smoothly between guard positions, never committing fully to one until the opportunity presents itself. His closed guard is active and threatening, hunting submissions and creating off-balancing movements that set up sweeps. From half guard, he uses standard BJJ principles excellently — getting the under-hook, elevating the hip, and converting to full guard or sweeping. Lepri's guard game teaches the importance of staying active and maintaining connection with the opponent. A passive guard invites passing; an active guard that constantly threatens creates the hesitation and reaction needed to execute sweeps and create positional improvements throughout a match.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">What You Can Learn from Lucas Lepri's Style</h2><p>Lucas Lepri represents the ideal of technical BJJ — winning through precision and understanding rather than athleticism or unusual techniques. His game is largely classical, built on excellent fundamentals applied with exceptional attention to detail. Practitioners can learn from his grip fighting, which is some of the best in the lightweight division. He demonstrates that controlling grips before passing or sweeping dramatically increases success rates because it limits the opponent's defensive options before the main technique begins. Lepri also shows how to maintain technical consistency in tournament conditions — his game does not change under pressure because it is built on reliable principles rather than reactive improvisations. His success as an Alliance team player also highlights the value of training within a system with coaches who can identify and correct technical errors over years of consistent development and competition at the highest levels of the sport.</p></section>
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
