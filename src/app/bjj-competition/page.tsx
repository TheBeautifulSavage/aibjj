import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BJJ Competition Guide: How to Prepare & Compete | AIBJJ',
  description: 'Complete BJJ competition guide — how to prepare, what to expect on competition day, weight cutting, strategy, and how to use competition to accelerate your development.',
}

export default function CompetitionPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <nav className="border-b border-zinc-800 px-4 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
          <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold">Get Started Free</Link>
        </div>
      </nav>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black mb-6">BJJ Competition Guide: How to Prepare & Compete</h1>
        <p className="text-xl text-zinc-400 mb-8">Competition accelerates BJJ development like nothing else. The nervousness, the pressure, the stranger on the mat who doesn't care about your feelings — these experiences forge a different kind of skill than academy training alone. Here's everything you need to compete well.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        <div>
          <h2 className="text-3xl font-black mb-4">Why Compete?</h2>
          <p className="text-zinc-300 mb-4">Many practitioners resist competition because of fear of losing. This is the wrong frame. Competition isn't about winning — it's about testing your BJJ against fully resistant strangers under pressure. The lessons available in competition don't exist anywhere else.</p>
          <p className="text-zinc-300 mb-4">When you compete regularly, you:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Discover what actually works under real pressure</li>
            <li>Develop mental toughness and adrenaline management</li>
            <li>Identify technical and strategic gaps you can't see in training</li>
            <li>Build honest assessment of your current level</li>
            <li>Accelerate your overall development significantly</li>
          </ul>
          <p className="text-zinc-300">Practitioners who compete regularly typically improve 2-3x faster than those who only train. This isn't hyperbole — it's widely observed.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Choosing the Right Competition</h2>
          <h3 className="text-xl font-bold mb-2 text-red-400">Local vs. Major Events</h3>
          <p className="text-zinc-300 mb-4">Start local. IBJJF Pan, Worlds, and Nationals are excellent goals but poor starting points. Find local IBJJF, NAGA, Grappling Industries, or submission wrestling events. These are lower pressure environments where you can develop competition experience before stepping up to major events.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Gi vs. No-Gi</h3>
          <p className="text-zinc-300 mb-4">Compete in what you primarily train. If you train gi, compete in gi. If you train no-gi, compete no-gi. Cross-training for competition requires additional preparation.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Major Competition Organizations</h3>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li><strong>IBJJF:</strong> Most prestigious, global presence, strict rules</li>
            <li><strong>ADCC:</strong> No-gi submission wrestling, the Olympics of grappling</li>
            <li><strong>NAGA:</strong> Large US organization, beginner-friendly</li>
            <li><strong>Grappling Industries:</strong> Round robin format, more matches per event</li>
            <li><strong>Submission Underground:</strong> Professional submission-only events</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Competition Preparation (8-12 Weeks Out)</h2>
          <h3 className="text-xl font-bold mb-2 text-red-400">Technical Preparation</h3>
          <p className="text-zinc-300 mb-4">Don't learn new techniques in competition camp. Competition camp is for sharpening what you already have, not building new tools. Key focus areas:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Identify your A-game: 3-5 techniques that work reliably under pressure</li>
            <li>Drill your A-game obsessively for the entire camp</li>
            <li>Identify and address one major weakness</li>
            <li>Sharpen conditioning — competition rounds feel different from gym rounds</li>
          </ul>
          <h3 className="text-xl font-bold mb-2 text-red-400">Physical Preparation</h3>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Increase training frequency 2-4 weeks before competition</li>
            <li>Practice competition-length rounds (5 minutes for most gi divisions)</li>
            <li>Taper the final week — reduce volume but maintain sharpness</li>
            <li>Sleep becomes even more critical during camp</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Weight Cutting and Weight Classes</h2>
          <p className="text-zinc-300 mb-4">For beginners, don't cut weight. Compete at your natural weight. Severe cuts compromise performance and health for someone who hasn't developed the skill to leverage any size advantage.</p>
          <p className="text-zinc-300 mb-4">If you're a few pounds over a class, light rehydration management (no extreme cutting) on competition week is acceptable. For significant cuts, work with a qualified coach — improper weight cutting has killed athletes.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Competition Day Protocol</h2>
          <h3 className="text-xl font-bold mb-2 text-red-400">Morning of Competition</h3>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Eat a normal meal 2-3 hours before competing — nothing experimental</li>
            <li>Hydrate well</li>
            <li>Arrive early — rushing creates anxiety</li>
            <li>Warm up properly — joint circles, light drilling, light positional work</li>
          </ul>
          <h3 className="text-xl font-bold mb-2 text-red-400">Managing Competition Nerves</h3>
          <p className="text-zinc-300 mb-4">Competition nerves are normal and actually helpful — adrenaline improves performance when managed. Strategies that work:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Deep breathing — slows heart rate and centers focus</li>
            <li>Pre-match visualization — see yourself executing specific techniques</li>
            <li>Process focus, not outcome focus — "execute my game plan" not "win"</li>
            <li>Warm up physically — movement reduces anxiety</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Match Strategy</h2>
          <p className="text-zinc-300 mb-4">Having a strategy going into each match is critical:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Know the point system for your ruleset — points matter</li>
            <li>Have a takedown or guard pull plan — the match starts standing</li>
            <li>Know your A-game and pursue it immediately</li>
            <li>Be aware of time and score if it's close</li>
            <li>Don't change strategy mid-match based on nervousness</li>
          </ul>
          <p className="text-zinc-300">Research your likely opponents if possible. If not, default to your strongest game.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Post-Competition Review</h2>
          <p className="text-zinc-300 mb-4">Win or lose, the post-competition review is where learning happens. Watch footage if available. Questions to answer:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>What in my game worked under competition pressure?</li>
            <li>Where did I get stuck or fall apart?</li>
            <li>Was conditioning an issue?</li>
            <li>What did I avoid doing because of nerves?</li>
            <li>What will I drill differently before the next competition?</li>
          </ul>
        </div>

        <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">
          <h2 className="text-2xl font-black mb-3">Build Your Competition Game Plan</h2>
          <p className="text-zinc-300 mb-4">Try AIBJJ's AI Coach to get personalized advice on your competition preparation. Tell the AI your event date, current level, and competition history — it builds a complete prep plan.</p>
          <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block">Get Your Competition Plan →</Link>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-black mb-4">Ready to level up your BJJ?</h2>
        <p className="text-zinc-400 mb-6">Compete with confidence using AIBJJ's AI-powered competition preparation system.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Join AIBJJ Free</Link>
      </section>

      <footer className="border-t border-zinc-800 px-4 py-8 text-center text-zinc-500 text-sm">
        <Link href="/">AIBJJ</Link> · <Link href="/terms">Terms</Link> · <Link href="/privacy">Privacy</Link>
      </footer>
    </div>
  )
}
