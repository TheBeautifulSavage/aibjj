import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BJJ Competition Tips from Black Belts | AIBJJ',
  description: 'Black belt BJJ competition tips — mental preparation, game planning, tactical advice, and the insider knowledge that separates champions from competitors.',
}

export default function CompetitionTipsPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <nav className="border-b border-zinc-800 px-4 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
          <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold">Get Started Free</Link>
        </div>
      </nav>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black mb-6">BJJ Competition Tips from Black Belts</h1>
        <p className="text-xl text-zinc-400 mb-8">The tactical and mental insights that separate consistent competitors from occasional participants don't come from technique videos — they come from thousands of matches and years of competition experience. Here's what black belt competitors know that most don't.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        <div>
          <h2 className="text-3xl font-black mb-4">Simplify Your Game for Competition</h2>
          <p className="text-zinc-300 mb-4">Every black belt competitor will tell you: competition is not the time to expand your game. It's the time to narrow it. Identify your 3-5 highest-percentage techniques — the ones that work reliably against fully resistant training partners — and make them your entire game plan.</p>
          <p className="text-zinc-300 mb-4">In competition, adrenaline and pressure strip away everything that isn't deeply ingrained. The practitioners who perform best in competition are those who have trained their A-game so many thousands of times that it happens automatically under stress.</p>
          <p className="text-zinc-300">Your training game can be complex and exploratory. Your competition game should be simple and reliable.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Control the Pace</h2>
          <p className="text-zinc-300 mb-4">One of the most important tactical concepts in BJJ competition: control the pace of the match. Work at your preferred tempo, not your opponent's. This applies at both strategic and positional levels:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>If you're more technical, slow the match down — deny scrambles and chaos</li>
            <li>If you're stronger and more athletic, create scrambles and impose pace</li>
            <li>If you're ahead on points, control and maintain — don't give up position</li>
            <li>Physically exhausted? Slow things down and recover — there's no shame in it</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">The Guard Pull Decision</h2>
          <p className="text-zinc-300 mb-4">Whether to take the fight to the ground immediately (guard pull) or fight for the takedown is one of the most important competition decisions. The considerations:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>If your guard is your strength, pull guard immediately — take the fight where you win</li>
            <li>If your opponent is a guard puller, attack the guard pull with a guard pass or standing to pull before they do</li>
            <li>Takedowns score 2 points and immediately give you top pressure — a significant advantage</li>
            <li>In IBJJF, sitting to guard (not pulling) doesn't give the opponent any points</li>
          </ul>
          <p className="text-zinc-300">Know your plan before the match starts. Deciding in the moment under adrenaline leads to bad choices.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Playing the Points Game</h2>
          <p className="text-zinc-300 mb-4">Understanding the IBJJF points system is a technical skill. Black belt competitors know how to accumulate points efficiently:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li><strong>Back control: 4 points</strong> — highest value, pursue aggressively</li>
            <li><strong>Mount: 4 points</strong> — transition from side control when possible</li>
            <li><strong>Guard pass: 3 points</strong> — establishes top game advantage</li>
            <li><strong>Knee-on-belly: 2 points</strong> — quick points opportunity from side control</li>
            <li><strong>Sweep: 2 points</strong> — attacking your guard generates scoring</li>
            <li><strong>Takedown: 2 points</strong> — plus immediate top pressure</li>
          </ul>
          <p className="text-zinc-300">Know when you're ahead and when you're behind. If you're winning by four points with two minutes left, change your game plan — consolidate and don't take risks.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Don't Play Your Opponent's Game</h2>
          <p className="text-zinc-300 mb-4">One of the most common competition mistakes: letting your opponent dictate the fight. If you know they're a leg locker, don't engage in leg lock battles unless that's your game. Deny them their preferred positions and force them to fight from yours.</p>
          <p className="text-zinc-300 mb-4">Against a guard specialist: work standing and look to pass quickly. Don't sit in their guard and fight on their terms. Against a top pressure player: attack from guard before they establish control.</p>
          <p className="text-zinc-300">Scouting opponents is valuable when possible. Even 10 minutes watching competition footage of an opponent reveals patterns.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Mental Toughness in Competition</h2>
          <p className="text-zinc-300 mb-4">Technique under normal conditions and technique under competition pressure are different skills. The mental game is separable from the technical game and requires its own development:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li><strong>Pre-match visualization:</strong> Visualize your game plan executing successfully</li>
            <li><strong>Breathing control:</strong> Box breathing (4-4-4-4) before a match controls adrenaline</li>
            <li><strong>Focus cues:</strong> A specific phrase or focus word that brings you back when your mind wanders</li>
            <li><strong>Process focus:</strong> Think about execution, not outcome — "attack the guard" not "I must win"</li>
          </ul>
          <p className="text-zinc-300">The nervousness before a match never fully goes away — even black belt world champions report pre-match nerves. The skill is not eliminating nerves but channeling them into focused energy.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Recovering Mid-Match</h2>
          <p className="text-zinc-300 mb-4">Matches don't always go your way — you might give up an early sweep or get stuck in a bad position. The ability to recover mid-match is what separates experienced competitors:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Stay calm — one bad exchange doesn't lose the match</li>
            <li>Refocus on process — what do I need to do from this position?</li>
            <li>Don't force it — desperate attacks are low percentage</li>
            <li>Look for opportunities to score — even a sweep puts you back in the game</li>
          </ul>
        </div>

        <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">
          <h2 className="text-2xl font-black mb-3">Prepare Like a Champion</h2>
          <p className="text-zinc-300 mb-4">Try AIBJJ's AI Coach to get personalized competition advice. Tell the AI your upcoming event, your strengths and weaknesses, and your competition history — it builds a targeted competition prep curriculum.</p>
          <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block">Get Your Competition Plan →</Link>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">The Long View: Building a Competition Career</h2>
          <p className="text-zinc-300 mb-4">No one is a great competitor from their first tournament. Competition skill is built over years — each tournament teaches something the next one can apply. Practitioners who compete regularly build:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2">
            <li>Adrenaline management — it gets easier with experience</li>
            <li>Match awareness — reading time, score, and opponent's game</li>
            <li>Game plan execution — the ability to do what you trained</li>
            <li>Resilience — losing gracefully and returning stronger</li>
          </ul>
          <p className="text-zinc-300 mt-4">The practitioners who compete 10+ times per year for several years inevitably become formidable competitors at their level. Volume of competition, more than any other factor, develops competitive skill.</p>
          <Link href="/ibjjf-rules" className="text-red-400 hover:text-red-300 font-semibold">→ Complete IBJJF rules guide</Link>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-black mb-4">Ready to level up your BJJ?</h2>
        <p className="text-zinc-400 mb-6">Build a competitive BJJ game with AIBJJ's AI coaching system — from game plan development to match-day preparation.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Join AIBJJ Free</Link>
      </section>

      <footer className="border-t border-zinc-800 px-4 py-8 text-center text-zinc-500 text-sm">
        <Link href="/">AIBJJ</Link> · <Link href="/terms">Terms</Link> · <Link href="/privacy">Privacy</Link>
      </footer>
    </div>
  )
}
