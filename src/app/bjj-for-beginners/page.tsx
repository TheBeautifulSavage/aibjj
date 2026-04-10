import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BJJ for Beginners: Complete First Year Guide | AIBJJ',
  description: 'Complete BJJ beginner guide — what to expect your first year, what to focus on, how to survive sparring, and how to accelerate your progress in Brazilian Jiu-Jitsu.',
}

export default function BJJBeginnersPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <nav className="border-b border-zinc-800 px-4 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
          <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold">Get Started Free</Link>
        </div>
      </nav>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black mb-6">BJJ for Beginners: Complete First Year Guide</h1>
        <p className="text-xl text-zinc-400 mb-8">Your first year in Brazilian Jiu-Jitsu is humbling, confusing, and transformative. Everyone taps you. You don't understand what's happening. And then, slowly, it clicks. Here's everything you need to know to survive and thrive in your first year.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        <div>
          <h2 className="text-3xl font-black mb-4">What to Expect in Your First Month</h2>
          <p className="text-zinc-300 mb-4">You will get tapped constantly. This is normal and expected. Every person at every belt level was exactly where you are — completely lost, exhausted after three minutes of rolling, and wondering if they'll ever understand what's happening.</p>
          <p className="text-zinc-300 mb-4">The goal for your first month is not to win. The goal is to survive, learn to tap without ego, and keep showing up. Nothing else matters in month one.</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2">
            <li>Tap early and often — protecting your ego at the cost of injury is stupid</li>
            <li>Ask questions after class, not during drilling</li>
            <li>Watch what higher belts are doing — even passive observation teaches you</li>
            <li>Don't compare your progress to others — every body learns differently</li>
            <li>Come to class consistently — 3x per week minimum to see real progress</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">The Fundamental Positions: Learn These First</h2>
          <p className="text-zinc-300 mb-4">Before you learn submissions, learn positions. Knowing where you are on the mat is the foundation of everything else.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Positions to Know as a Beginner</h3>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li><strong>Closed guard (bottom):</strong> Legs locked around opponent's waist — your default bottom position</li>
            <li><strong>Side control (top and bottom):</strong> Perpendicular pin — know how to maintain and escape</li>
            <li><strong>Mount (top and bottom):</strong> Sitting on their chest — know how to escape the upa and elbow-knee escape</li>
            <li><strong>Back control:</strong> Both hooks in, seatbelt grip — the king position</li>
            <li><strong>Turtle:</strong> Hands and knees — transitional defensive position</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">First Submissions to Learn</h2>
          <p className="text-zinc-300 mb-4">Focus on these three submissions in your first year. They are reliable, taught everywhere, and build the mechanical understanding that later techniques are built on:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li><strong>Rear naked choke:</strong> From back control — the most reliable submission in combat sports</li>
            <li><strong>Armbar from guard:</strong> Fundamental arm lock that teaches hip movement and timing</li>
            <li><strong>Triangle choke:</strong> The guard blood choke — if you learn nothing else from guard, learn this</li>
          </ul>
          <p className="text-zinc-300">Don't chase exotic submissions. A white belt who can reliably set up an armbar is more dangerous than a white belt who has watched every heel hook instructional on the internet but can't control someone from side control.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Surviving Your First Year of Sparring</h2>
          <p className="text-zinc-300 mb-4">Sparring (called "rolling" in BJJ) is where the learning happens. It's also where ego gets tested. Here's how to approach rolling as a beginner:</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Mindset for Rolling</h3>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Treat every round as a learning experience, not a competition</li>
            <li>Try to apply what was taught in class — even if it fails</li>
            <li>Roll with intention: "today I'm going to focus on guard retention"</li>
            <li>Don't spaz — controlled, intentional movement beats frantic muscling</li>
            <li>Ask better training partners questions: "when you passed my guard, what did I do wrong?"</li>
          </ul>
          <h3 className="text-xl font-bold mb-2 text-red-400">Practical Sparring Tips</h3>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Breathe — most beginners hold their breath under pressure</li>
            <li>Use your whole body, not just your arms — BJJ is a whole-body sport</li>
            <li>Don't forget about your hips — they drive everything</li>
            <li>Take breaks if needed, but push your cardio threshold regularly</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Building Good Habits Early</h2>
          <p className="text-zinc-300 mb-4">The habits you build in your first year become deeply ingrained. Build good ones:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li><strong>Consistent attendance:</strong> 2-3x per week minimum, every week</li>
            <li><strong>Active listening during instruction:</strong> Not just hearing but trying to feel what's being described</li>
            <li><strong>Partner drilling with resistance:</strong> Drilling with no resistance develops poor timing</li>
            <li><strong>Journaling your training:</strong> Write what you learned, what worked, what didn't</li>
            <li><strong>Gym culture respect:</strong> Help newer students when you can; tap graciously</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Common Beginner Mistakes to Avoid</h2>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Using too much strength — you'll hurt yourself and your partners</li>
            <li>Watching too many YouTube tutorials before applying fundamentals</li>
            <li>Skipping warm-up or drilling to save energy for sparring</li>
            <li>Comparing your progress to people who have trained for years</li>
            <li>Avoiding training partners who are better than you</li>
            <li>Not tapping — the "I almost had it" ego trip that leads to injuries</li>
            <li>Trying to learn everything at once instead of mastering a few core techniques</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">How Long Until You're Good?</h2>
          <p className="text-zinc-300 mb-4">Honest answer: it takes about 1-2 years of consistent training before you feel competent. That means you can hold position, you know where you are and what to do, and you're not getting tapped by everyone in the gym.</p>
          <p className="text-zinc-300 mb-4">Blue belt (usually 1-2 years in for consistent students) represents genuine competence — not excellence, but real functional BJJ. The journey from there accelerates because your foundation is solid.</p>
          <p className="text-zinc-300">The practitioners who progress fastest are: consistent (3+x per week), coachable (they listen and apply), and ego-free (they tap without drama). That's the formula.</p>
        </div>

        <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">
          <h2 className="text-2xl font-black mb-3">Accelerate Your BJJ Progress</h2>
          <p className="text-zinc-300 mb-4">Try AIBJJ's AI Coach to get personalized advice for beginners. Tell the AI your current challenges and it builds a focused curriculum for your first year.</p>
          <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block">Get Your Beginner Plan →</Link>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Choosing the Right School</h2>
          <p className="text-zinc-300 mb-4">The quality of your school determines your trajectory. Key things to look for:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2">
            <li>Instructor who can explain technique, not just demonstrate it</li>
            <li>Culture of respect — ego-free environment where beginners are welcomed</li>
            <li>Consistent class structure with drilling and controlled sparring</li>
            <li>Lineage matters — a school affiliated with a legitimate black belt is preferable</li>
            <li>Clean mats and professional environment</li>
          </ul>
          <p className="text-zinc-300 mt-4">The best school is the one you'll actually attend consistently. A school two minutes from your house beats the world-champion instructor who's 45 minutes away.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-black mb-4">Ready to level up your BJJ?</h2>
        <p className="text-zinc-400 mb-6">Start your BJJ journey with AIBJJ's AI coaching system guiding every step.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Join AIBJJ Free</Link>
      </section>

      <footer className="border-t border-zinc-800 px-4 py-8 text-center text-zinc-500 text-sm">
        <Link href="/">AIBJJ</Link> · <Link href="/terms">Terms</Link> · <Link href="/privacy">Privacy</Link>
      </footer>
    </div>
  )
}
