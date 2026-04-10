import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'IBJJF Rules Explained: Complete Ruleset Guide | AIBJJ',
  description: 'Complete guide to IBJJF rules — points system, advantages, illegal techniques by belt level, penalties, and everything you need to compete in IBJJF tournaments.',
}

export default function IBJJFRulesPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <nav className="border-b border-zinc-800 px-4 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
          <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold">Get Started Free</Link>
        </div>
      </nav>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black mb-6">IBJJF Rules Explained: Complete Ruleset Guide</h1>
        <p className="text-xl text-zinc-400 mb-8">The International Brazilian Jiu-Jitsu Federation (IBJJF) runs the most prestigious BJJ competitions in the world — including the World Championships. Understanding their rules isn't just for competitors; it's fundamental knowledge for any serious practitioner.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        <div>
          <h2 className="text-3xl font-black mb-4">IBJJF Points System</h2>
          <p className="text-zinc-300 mb-4">IBJJF uses a points-based scoring system where different positions and movements score different values. Submissions are instant wins regardless of score.</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li><strong>Rear mount (back control with hooks): 4 points</strong></li>
            <li><strong>Mount: 4 points</strong></li>
            <li><strong>Guard pass: 3 points</strong></li>
            <li><strong>Knee-on-belly: 2 points</strong> (must hold 3 seconds)</li>
            <li><strong>Sweep from guard: 2 points</strong></li>
            <li><strong>Takedown: 2 points</strong></li>
          </ul>
          <p className="text-zinc-300 mb-4">Points are only scored when a position is stabilized (held for 3 seconds). Positions held for less than 3 seconds may score an advantage instead.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Advantages</h2>
          <p className="text-zinc-300 mb-4">Advantages are scored for near-scoring situations — a submission attempt that nearly works, a position held briefly, a takedown that doesn't fully materialize. Advantages are tiebreakers only — they don't override points.</p>
          <p className="text-zinc-300 mb-4">Situations that generate advantages:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2">
            <li>Submission attempt that makes opponent react or defend strongly</li>
            <li>Position held less than 3 seconds</li>
            <li>Takedown that results in the opponent going to guard immediately</li>
            <li>Near sweep that doesn't complete</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Illegal Techniques by Belt Level</h2>
          <p className="text-zinc-300 mb-4">IBJJF restricts certain techniques based on belt and age division. These restrictions exist for safety reasons. Understanding them is essential before competing.</p>

          <h3 className="text-xl font-bold mb-2 text-red-400">White Belt (Adult)</h3>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>No heel hooks, knee bars, calf slicers, or spine locks</li>
            <li>Straight ankle locks are legal</li>
            <li>No reaping the knee</li>
          </ul>

          <h3 className="text-xl font-bold mb-2 text-red-400">Blue and Purple Belt</h3>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Same as white belt — heel hooks, knee bars, calf slicers still illegal</li>
            <li>Straight footlocks (ankle locks) are legal</li>
            <li>Toehold is legal at blue/purple in gi; illegal in some no-gi divisions</li>
          </ul>

          <h3 className="text-xl font-bold mb-2 text-red-400">Brown and Black Belt</h3>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Knee bars and calf slicers are legal</li>
            <li>Inside heel hook is legal in no-gi; outside heel hook is still illegal in IBJJF</li>
            <li>Spine locks without chokes are still illegal at all levels</li>
          </ul>

          <h3 className="text-xl font-bold mb-2 text-red-400">Always Illegal (All Levels)</h3>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Slamming</li>
            <li>Striking</li>
            <li>Neck cranks</li>
            <li>Spine locks</li>
            <li>Outside heel hook in gi at all belts; in no-gi at all belt levels</li>
            <li>Scissors takedown (flying scissors to the knee)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Penalties</h2>
          <p className="text-zinc-300 mb-4">IBJJF has a penalty system for stalling, unsportsmanlike conduct, and illegal techniques:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li><strong>First penalty:</strong> Advantage given to opponent</li>
            <li><strong>Second penalty:</strong> 2 points given to opponent</li>
            <li><strong>Third penalty:</strong> 2 more points to opponent</li>
            <li><strong>Fourth penalty:</strong> Disqualification</li>
          </ul>
          <p className="text-zinc-300 mb-4">Stalling is one of the most common penalty situations. Referees warn practitioners who aren't working to progress the match — particularly when holding a position without attempting submissions or transitions.</p>
          <p className="text-zinc-300">Illegal technique application results in immediate disqualification, not just a penalty.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Match Duration</h2>
          <p className="text-zinc-300 mb-4">IBJJF match times vary by belt and age:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li><strong>White belt adult:</strong> 5 minutes</li>
            <li><strong>Blue belt adult:</strong> 6 minutes</li>
            <li><strong>Purple belt adult:</strong> 7 minutes</li>
            <li><strong>Brown belt adult:</strong> 8 minutes</li>
            <li><strong>Black belt adult:</strong> 10 minutes</li>
            <li><strong>Masters divisions:</strong> Slightly shorter, varies by division</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Tiebreakers</h2>
          <p className="text-zinc-300 mb-4">When the match ends tied on points, tiebreakers apply in this order:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Advantages (whoever has more wins)</li>
            <li>Penalties (fewer penalties wins)</li>
            <li>Referee decision (last resort)</li>
          </ul>
          <p className="text-zinc-300">Referee decisions are controversial but a reality of the sport. Understanding advantages and minimizing penalties is critical in close matches.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Guard Pull Rules</h2>
          <p className="text-zinc-300 mb-4">A guard pull occurs when a practitioner sits to guard without a takedown attempt. In IBJJF:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Pulling guard without engaging in a takedown first does not give the opponent any points</li>
            <li>The opponent standing while you pull can pursue a guard pass for 3 points</li>
            <li>If you pull guard and immediately sweep, you score 2 points</li>
            <li>If the opponent achieves standing while you have guard, and then you sit again, you can receive a stalling penalty</li>
          </ul>
        </div>

        <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">
          <h2 className="text-2xl font-black mb-3">Compete Smarter with AI Coaching</h2>
          <p className="text-zinc-300 mb-4">Try AIBJJ's AI Coach to get personalized advice on your competition game plan. The AI understands IBJJF rules and helps you build a strategy that maximizes your scoring opportunities.</p>
          <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block">Build Your Competition Strategy →</Link>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">No-Gi IBJJF Rules Differences</h2>
          <p className="text-zinc-300 mb-4">IBJJF no-gi follows the same points structure with these key differences:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2">
            <li>No collar, sleeve, or lapel grips (no gi = no grips on fabric)</li>
            <li>Inside heel hook legal at brown/black belt</li>
            <li>Toehold restrictions differ by division</li>
            <li>No reaping the knee rules remain consistent with gi</li>
          </ul>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-black mb-4">Ready to level up your BJJ?</h2>
        <p className="text-zinc-400 mb-6">Compete with full confidence in the rules. Join AIBJJ and build a complete competition game plan.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Join AIBJJ Free</Link>
      </section>

      <footer className="border-t border-zinc-800 px-4 py-8 text-center text-zinc-500 text-sm">
        <Link href="/">AIBJJ</Link> · <Link href="/terms">Terms</Link> · <Link href="/privacy">Privacy</Link>
      </footer>
    </div>
  )
}
