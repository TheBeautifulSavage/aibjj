import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BJJ Turtle Position: Attacks and Escapes | AIBJJ",
  description: "Learn BJJ turtle position — how to attack with back takes and clock chokes, and how to escape turtle safely without giving up submissions or back control.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "BJJ Turtle Position: Attacks, Defenses, and Back Takes",
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
        <h1 className="text-4xl font-black">BJJ Turtle Position: Attacks, Defenses, and Back Takes</h1>
        <p className="mt-4 text-xl text-zinc-400">The turtle position — hips low, knees under the body, head tucked — is a common transitional position that invites constant back-take attempts. Understanding it from both sides is essential for complete BJJ.</p>
        <div className="mt-10 space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Attacking the Turtle: Back Takes</h2>
            <p>When an opponent turtles, they protect their front but expose their back. The seat-belt entry is the primary back take: reach over their near shoulder with one arm and under their far armpit with the other, securing the seatbelt grip. Once the seatbelt is locked, insert one hook, then roll them to the side to fully mount the back. A second entry is the clock choke setup from the near side — head control with collar grip combined with a sawing motion behind the ear. The wrestler's head-and-arm lock (guillotine setup from the turtle) attacks the neck from the front. The arm-drag from the turtle catches a reaching arm and pulls the turtle player through a back take. These attacks must flow into each other: if the back take is defended, go to clock choke; if the clock choke defense exposes the back, retake.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Clock Choke and Turk Submissions</h2>
            <p>The clock choke is a gi-specific submission from the turtle — grip the collar behind the ear, walk your body in a clock motion (head toward their feet) while maintaining collar pressure. The motion tightens the collar against the carotid as you walk. The far arm must be controlled or the turtle player can roll. The turk ride is a wrestling-based control from the turtle where you insert one leg between their legs and control their near arm, creating a tight breakdown position. From the turk, back takes are simple — the body position already resembles a seatbelt entry. Against a defensive turtle player who refuses to give the back, transition to a leg drag or torreando pass to progress past them entirely rather than waiting for them to react.</p>
            <ul className="mt-3 space-y-1 list-disc list-inside text-zinc-400">
              <li>Clock choke: walk your body like a clock hand tightening the collar</li><li>Seatbelt sinks before the first hook — lock the grip first</li><li>If turtle is refused, transition to pass rather than waiting</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Escaping the Turtle Safely</h2>
            <p>When you are in turtle, your primary danger is back control. Protect the seatbelt entry by locking your arms across your chest and keeping your elbows tight to your body. When an opponent attempts back insertion, spin into them — facing an opponent eliminates their back position but requires committing to a scramble. If they have a seatbelt locked, use the shoulder roll escape: roll over your near shoulder away from their seatbelt to disrupt their hook insertion. Shrimping under while in turtle converts the position to a sitting guard or single-leg defense. The best escape from turtle is to never fully turtle — maintain a posting hand or immediately begin a scramble rather than settling into turtle passively, as skilled opponents will establish control before you can react.</p>
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
