import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BJJ Takedowns: Wrestling & Judo for Grapplers | AIBJJ',
  description: 'Master BJJ takedowns with wrestling and judo techniques. Double leg, single leg, hip throws, foot sweeps — the complete BJJ takedown guide for all levels.',
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
        <h1 className="text-4xl md:text-5xl font-black mb-6">BJJ Takedowns: Wrestling & Judo for Grapplers</h1>
        <p className="text-xl text-zinc-400 mb-8">Most BJJ practitioners have weak takedown games — and their opponents know it. This guide covers the most effective takedowns for BJJ competition and self-defense, drawn from wrestling and judo traditions.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>
      <section className="max-w-4xl mx-auto px-4 py-12 prose prose-invert prose-zinc max-w-none">
        <h2>Why Takedowns Matter in BJJ</h2>
        <p>The traditional answer to takedowns in BJJ is "just pull guard." And at the recreational level, that's fine. But as you advance — especially if you compete — a weak standup game is a liability. Competitors who can take opponents down force them to fight from uncomfortable positions, score early points, and control the narrative of the match. Even in self-defense contexts, being able to take someone down (and avoid being taken down yourself) is irreplaceable.</p>
        <p>Beyond competition, learning takedowns from wrestling and judo makes you a more complete martial artist — and the balance, body awareness, and explosive movement that takedown training develops improves your overall grappling significantly.</p>

        <h2>Wrestling Takedowns for BJJ</h2>
        <h3>Double Leg Takedown</h3>
        <p>The double leg is the most universally recognized wrestling takedown. You level-change (drop your level), penetration step between the opponent's feet, secure both legs at the thighs, and drive through while lifting or redirecting their hips. For BJJ, the finish matters: you want to end in a dominant position rather than just knocking them down. The most common BJJ double leg finish is to the side, ending in side control or north-south.</p>
        <p>Key details: level change must be explosive, penetration step must get your hips inside the opponent's feet, and the drive must be through their center of gravity, not just forward.</p>

        <h3>Single Leg Takedown</h3>
        <p>The single leg is more versatile than the double leg and arguably more useful in BJJ because it can be secured from level changes, from guard recovery, and from scrambles. There are multiple single leg finishes: the "run the pipe" (lift and drive the leg), the trip, and the cut corner finish. Wrestlers like Ben Askren built entire careers on single leg variations. In BJJ, the single leg also integrates naturally with guard pulls and ankle pick transitions.</p>

        <h3>Fireman's Carry</h3>
        <p>A wrestling throw that works beautifully in the gi. From a head-tie and arm control, you drop to your knees and roll your opponent over your back. It's particularly effective when the opponent is bent forward or their weight is loaded on their toes. The fireman's carry is a high-impact throw that generates immediate top position.</p>

        <h3>High Crotch to Double</h3>
        <p>The high crotch is a penetration step entry that grabs inside the opponent's leg at the hip level, creating a powerful single-to-double leg transition. Used extensively in freestyle wrestling and highly effective in no-gi BJJ and MMA contexts. The high crotch entry is safer against guillotine attempts than a deep double leg shot.</p>

        <h2>Judo Throws for BJJ</h2>
        <h3>Osoto Gari (Major Outer Reap)</h3>
        <p>The most effective judo throw for BJJ contexts — it doesn't require exceptional timing or flexibility, and the mechanics are learnable without years of judo study. You establish grips (collar and sleeve in gi, neck and arm in no-gi), reap the opponent's far leg with your far leg while pulling them backward, and they fall onto their back. The osoto gari scores well in BJJ competition and transitions directly to guard passing or mount.</p>

        <h3>Seoi Nage (Shoulder Throw)</h3>
        <p>The seoi nage is a forward throw where you turn your back to the opponent, load them on your hip/shoulder, and throw them forward over your body. It requires a decisive entry and good timing, but generates tremendous power when executed correctly. Multiple world champions use seoi nage as their primary takedown in both gi and no-gi competition.</p>

        <h3>Tai Otoshi (Body Drop)</h3>
        <p>A foot trip throw that works well in the gi. You pull the opponent forward and place your foot in front of their leg to trip them over it. Less dynamic than seoi nage but requires less physical strength — a smart technical throw for grapplers who lack a wrestling background.</p>

        <h3>Uchi Mata (Inner Thigh Throw)</h3>
        <p>One of the most spectacular and effective judo throws. The uchi mata targets the inner thigh of the forward leg, hooking it while pulling the opponent forward and rotating them into a fall. It's biomechanically complex but extremely high-percentage for those who develop it. Works in both gi and no-gi, though grip fighting is critical in the gi context.</p>

        <h2>Clinch Work: The Foundation</h2>
        <p>Most takedowns begin in the clinch. Learning to fight for the inside position — underhooks versus overhooks, neck ties, collar ties — is what enables takedown entries. Without good clinch mechanics, your takedowns won't get started against experienced opponents who understand standup positioning.</p>
        <p>Key clinch positions: double underhooks (best position for wrestling throws), body lock (controls hips, enables trips and sweeps), over-under (common in wrestling, transitions to multiple entries), and snap-down (forces the opponent's head down, creates single or double leg opportunities).</p>

        <h2>Building Your Takedown Game</h2>
        <p>Most BJJ practitioners need three reliable takedowns: a leg level change (double or single leg), a hip/shoulder throw (osoto or seoi nage), and a foot sweep or trip. These three cover the main attack angles and create enough variety to be unpredictable.</p>
        <p>Log your takedown drilling and competition results in AIBJJ's training journal to identify which entries feel most natural for your body type and athletic background. Wrestlers typically find leg shots more natural; judo athletes prefer throws. Develop what fits your body first, then expand.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block not-prose">Track Your Takedown Progress →</Link>

        <h2>Guard Pull vs. Takedown</h2>
        <p>In BJJ competition, you often have a choice: take the fight to the ground via takedown (2 points) or pull guard (0 points for you, 0 for them). The right choice depends on your top game versus bottom game, your opponent's strengths, and the ruleset. Against an opponent with a strong guard, taking them down and smashing is often better than pulling guard yourself. Against an excellent top player, pulling guard might give you more advantageous terrain. Study both options and have a standup game plan for every competition.</p>
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
