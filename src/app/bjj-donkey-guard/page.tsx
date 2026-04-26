import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BJJ Donkey Guard: The Leg Attack Entry Position | AIBJJ",
  description: "Learn BJJ donkey guard — the unusual back-facing leg attack position. Understand how it creates heel hook entries, leg entanglements, and submission threats.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "BJJ Donkey Guard: Back-Facing Leg Attack System",
    "author": { "@type": "Organization", "name": "AIBJJ" },
    "publisher": { "@type": "Organization", "name": "AIBJJ", "url": "https://aibjj.com" }
  };
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
<article className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-black">BJJ Donkey Guard: Back-Facing Leg Attack System</h1>
        <p className="mt-4 text-xl text-zinc-400">Donkey guard is one of BJJ's most unorthodox positions — facing away from the opponent while attacking their legs from an unusual angle. Though rarely seen at lower levels, it creates real submission threats and confuses even experienced opponents.</p>
        <div className="mt-10 space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What Is Donkey Guard</h2>
            <p>Donkey guard occurs when a bottom player faces away from their opponent and attacks their legs from behind. The practitioner sits or is on all fours, facing away, with their legs reaching back toward the opponent's legs for entanglement. The position is most commonly entered from a failed guard inversion or when an opponent backs away from leg lock entries and a forward roll creates the back-facing position. Donkey guard's primary threat is heel hook entries when the opponent steps forward — their advancing leg is immediately available for an outside heel hook or knee bar. The shock value is significant: most competitors have minimal training defending submissions from a completely unexpected angle. Advanced practitioners use donkey guard deliberately to create confusion and set up leg entanglement chains.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Attacks from Donkey Guard</h2>
            <p>The outside heel hook is the primary weapon from donkey guard. As the opponent steps their near leg forward to pressure or pass, reach back and trap the heel with both hands, engaging the knee joint with your hips. Quickly establish leg entanglement to prevent them from simply stepping out. The knee bar targets the same leg from a different angle — control the foot, face away from them, and extend the knee against your chest. Calf slicers are available when the leg position creates the appropriate angle. Transitioning from donkey guard to 50/50 occurs when the opponent tries to engage from the back — their attempt to attach creates mutual entanglement. The key to donkey guard effectiveness is speed: attacks must happen before the opponent disengages and resets to a safe distance.</p>
            <ul className="mt-3 space-y-1 list-disc list-inside text-zinc-400">
              <li>Outside heel hook: trap the advancing heel before they plant it</li><li>Knee bar: foot control while facing away, extend knee against chest</li><li>Speed is critical — attacks before opponent can back away</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Defending Against Donkey Guard</h2>
            <p>Defending donkey guard requires understanding its primary threat: the heel hook on the advancing leg. Never step your leg forward toward a donkey guard player — always advance by stepping your far leg first, keeping the near leg at a safe distance. Back away from a donkey guard setup rather than engaging; most practitioners can't follow without transitioning out of the position. If caught in a heel hook entry, the knee escape (popping the knee out of entanglement by quickly straightening and pulling the leg backward) is the primary defense. Avoid falling forward over a donkey guard player — this creates a scramble situation where leg entanglements develop rapidly. Maintaining upright posture and moving your feet to safe angles denies donkey guard most of its attack options.</p>
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
