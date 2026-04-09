import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Best BJJ Guard Instructionals 2025 | AIBJJ',
  description: 'Best BJJ guard instructionals for closed guard, half guard, spider guard, De La Riva, and more. Expert picks to build a dangerous guard game.',
}

export default function Page() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <nav className="border-b border-zinc-800 px-4 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
          <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold">Get Started Free</Link>
        </div>
      </nav>
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black mb-6">Best BJJ Guard Instructionals</h1>
        <p className="text-xl text-zinc-400 mb-8">Guard is the heart of BJJ. Whether you prefer closed guard, half guard, spider, De La Riva, or modern open guards, these instructionals will sharpen your game at every level.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>
      <section className="max-w-4xl mx-auto px-4 py-12 prose prose-invert prose-zinc max-w-none">
        <h2>Why Guard Instructionals Are Worth the Investment</h2>
        <p>Guard is the position that defines BJJ. Unlike wrestling or judo, BJJ's identity was built on the idea that you can fight effectively off your back. A strong guard creates offense, neutralizes bigger opponents, and gives you options even when things go wrong. Guard instructionals are worth every dollar because guard is endlessly deep — you can spend a lifetime refining it.</p>

        <h2>Best Closed Guard: Marcelo Garcia — Closed Guard System</h2>
        <p>Marcelo Garcia dominated an era of high-level grappling primarily from closed guard, even against larger opponents. His instructional on closed guard is a masterclass in control, breaking posture, and creating submission opportunities. He covers arm drags, collar ties, guillotine entries, and his famous rear naked choke system from guard. Garcia's teaching style is direct and practical — he explains concepts in real time while demonstrating on live partners.</p>
        <p><strong>Key techniques covered:</strong> Hip bump sweep, kimura, armbar from guard, guillotine choke entries, arm drag to back take.</p>

        <h2>Best Half Guard: Tom DeBlass — Half Guard Domination</h2>
        <p>Tom DeBlass built a competition career on half guard. His instructional is comprehensive and authentic — he teaches the exact system he used to compete at the elite level. The series covers the deep half guard position, the lockdown, underhook battles, sweeps, and submissions. He also addresses the defensive half guard for students who end up there accidentally and need to know how to survive and recover.</p>
        <p><strong>Key techniques:</strong> Deep half sweep, electric chair stretch, old school sweep, waiter sweep entries.</p>

        <h2>Best Spider Guard: Romulo Barral — Spider Guard</h2>
        <p>Romulo Barral is a seven-time world champion whose spider guard is legendary in the gi community. His instructional breaks down grip fighting, sleeve and collar control, and the sweep and submission options that flow from spider guard. This is a gi-specific instructional that rewards technical precision — perfect for the competitive gi player who wants to develop a dangerous open guard.</p>
        <p><strong>Key techniques:</strong> Spider guard triangle, lasso guard transitions, spider to De La Riva combinations.</p>

        <h2>Best De La Riva Guard: Caio Terra — De La Riva System</h2>
        <p>Caio Terra is one of the most technical BJJ practitioners alive, and his De La Riva guard instructional reflects that obsession with detail. He covers the basic De La Riva hook, berimbolo entries, back takes, and the guard retention options that make De La Riva sustainable against bigger, stronger passers. This instructional rewards students who've already built a foundation in open guard basics.</p>

        <h2>Best Rubber Guard: Eddie Bravo — Rubber Guard</h2>
        <p>Love it or hate it, rubber guard is a legitimate tool for flexible athletes who want to control opponents from closed guard in no-gi. Eddie Bravo's instruction is unconventional but genuine — the system is used successfully by many practitioners, particularly in MMA contexts. Mission control, New York, and zombie are covered in depth.</p>

        <h2>Best Butterfly Guard: Marcelo Garcia — Butterfly Guard</h2>
        <p>Marcelo Garcia's butterfly guard work is inseparable from his overall system. His ability to use butterfly hooks to elevate, sweep, and take backs against much larger opponents is a fundamental skill for no-gi grapplers. The arm drag from butterfly is one of the highest-percentage back-take entries in no-gi grappling — Garcia covers it exhaustively.</p>

        <h2>Best Guard Retention: Lachlan Giles — Guard Retention</h2>
        <p>Having a great guard means nothing if you can't keep it. Lachlan Giles — ADCC absolute medalist and one of the most analytically minded coaches in BJJ — produced what many consider the definitive guard retention instructional. He covers hip movement mechanics, framing principles, and specific retention responses to the most common passes (torreando, leg weave, over-under). This is a high-percentage defensive resource for any level.</p>
        <p>Use AIBJJ's technique library to organize guard retention techniques alongside your offensive guard game — so you can study them as a connected system rather than isolated moves.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block not-prose">Build Your Guard Game with AIBJJ →</Link>

        <h2>Best X-Guard: Marcelo Garcia — X-Guard</h2>
        <p>X-guard is one of the most reliable sweeping positions in both gi and no-gi BJJ, and Garcia is its most famous practitioner. His X-guard instructional covers the primary entries (from butterfly, from single leg), the two main sweep variations (shin sweep and back step), and the submissions available from the position. X-guard is mechanically simple enough for blue belts but deep enough to use at black belt level.</p>

        <h2>How to Build a Complete Guard Game</h2>
        <p>A complete guard game has three layers:</p>
        <ol>
          <li><strong>Primary guard</strong> — Your main weapon. The position you return to and attack from consistently.</li>
          <li><strong>Secondary guard</strong> — Your backup when opponents shut down your primary. Often complements the primary (e.g., closed guard + half guard, De La Riva + spider).</li>
          <li><strong>Guard retention</strong> — The defensive layer that keeps your guard intact when opponents try to pass.</li>
        </ol>
        <p>Most students make the mistake of collecting techniques from many guards rather than developing mastery in two or three. Focus your instructional investment on depth, not breadth.</p>

        <h2>Gi vs No-Gi Guard Instructionals</h2>
        <p>Some guard systems only work in the gi (spider guard, lasso guard) because they rely on sleeve and lapel grips. Others work equally well in both (butterfly, closed guard, X-guard). If you train both, prioritize no-gi-compatible guards first — those skills transfer everywhere. Spider and lasso are gi-specific bonuses, not foundational investments for the pure competitor.</p>
      </section>
      <section className="bg-zinc-900 border-t border-zinc-800 px-4 py-16 text-center">
        <h2 className="text-3xl font-black mb-4">Take your BJJ to the next level</h2>
        <p className="text-zinc-400 mb-8">AI coach, training journal, technique library — all in one platform.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Join AIBJJ Free →</Link>
      </section>
      <footer className="border-t border-zinc-800 px-4 py-8 text-center text-zinc-500 text-sm">
        © 2025 AIBJJ · <Link href="/terms" className="hover:text-zinc-300">Terms</Link> · <Link href="/privacy" className="hover:text-zinc-300">Privacy</Link>
      </footer>
    </div>
  )
}
