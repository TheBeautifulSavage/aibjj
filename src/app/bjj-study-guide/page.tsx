import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Study BJJ Instructionals Effectively | AIBJJ',
  description: 'Learn how to study BJJ instructionals effectively. Note-taking strategies, drilling methods, and how to translate video study into real mat performance.',
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
        <h1 className="text-4xl md:text-5xl font-black mb-6">How to Study BJJ Instructionals Effectively</h1>
        <p className="text-xl text-zinc-400 mb-8">Buying an instructional is the easy part. Actually extracting value from it is a skill. Here's the complete framework for turning video study into real improvement on the mat.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>
      <section className="max-w-4xl mx-auto px-4 py-12 prose prose-invert prose-zinc max-w-none">
        <h2>The Problem with How Most People Study Instructionals</h2>
        <p>The most common approach to BJJ instructionals: buy it, watch it start to finish, feel excited and overwhelmed, try one or two things in rolling, fail, give up. The instructional collects digital dust. This isn't a learning problem — it's a study method problem. Passive viewing is the least effective way to learn a physical skill.</p>
        <p>Effective instructional study is active, deliberate, and integrated with your mat time. Here's the framework that actually works.</p>

        <h2>Step 1: Watch Once Without Stopping</h2>
        <p>Your first pass through any instructional should be at 1.5x or 2x speed without pausing or taking notes. The goal is to understand the overall system and architecture. How does this instructor think about the problem? What are the major positions and concepts? What's the logical flow? This contextual overview makes everything you study afterward stick faster because you understand where it fits in the bigger picture.</p>
        <p>Most people skip this step and dive straight into note-taking on technique one. Don't. Context first, details second.</p>

        <h2>Step 2: Identify Your Priority Techniques</h2>
        <p>After your first pass, ask yourself: which 2-3 techniques from this instructional most directly address my current biggest problem? If you're getting your guard passed constantly, study the guard retention section first. If you keep losing from mount, go to the mount escape section. Don't study in order — study by priority.</p>
        <p>Write these priorities down before your second viewing. This deliberate selection prevents the "studying everything so I learn nothing" trap.</p>

        <h2>Step 3: Deep Study — One Technique at a Time</h2>
        <p>Now go back to your selected techniques and watch them carefully. Pause. Rewind. Watch at 0.5x speed. Look for:</p>
        <ul>
          <li><strong>Entry conditions</strong> — When does this technique work? What position do you need to be in?</li>
          <li><strong>Grips and contact points</strong> — Where exactly are the hands and body? This is where most people miss detail.</li>
          <li><strong>Weight distribution</strong> — Where is the instructor's weight? This is almost always the key to making a technique work.</li>
          <li><strong>Timing triggers</strong> — What movement from the opponent triggers this technique?</li>
          <li><strong>Defensive reactions</strong> — How does the instructor address common defenses?</li>
        </ul>
        <p>Write these observations in your training journal. AIBJJ's technique library is perfect for this — you can store each technique with position tags, personal notes, and status tracking so you know what you've studied and what you're currently drilling.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block not-prose">Log Your Techniques in AIBJJ →</Link>

        <h2>Step 4: Solo Drilling Before Live Application</h2>
        <p>Before attempting a new technique in live rolling, drill the movement pattern alone. This is often skipped because it feels unproductive — there's no opponent to test against. But solo drilling burns the motor pattern into muscle memory before the chaos of live rolling. 50-100 slow, deliberate reps of a technique alone is worth far more than 20 rushed attempts against a resisting partner who exposes every gap.</p>
        <p>Solo drill: the hip escape, the grip configuration, the weight shift, the finishing mechanism. Individually. Slowly. Then string them together.</p>

        <h2>Step 5: Positional Sparring Before Free Rolling</h2>
        <p>The biggest mistake students make: watching a technique, skipping drilling, and going straight to free rolling to try it. Free rolling gives you too many variables. Use positional sparring instead — start in the specific position the technique requires and repeat it against a semi-resisting partner. This is the fastest way to find what you're missing without the confusion of a full roll.</p>
        <p>Ask a training partner: "Can we do 10 minutes of closed guard? I'm trying something new." Most partners will agree. Use that focused time to test your study.</p>

        <h2>Step 6: Debrief After Rolling</h2>
        <p>After rolling, immediately write down what happened with your new technique. Did it work? What went wrong? What surprised you? This debrief captures the feedback your body just received and anchors it cognitively. Without writing it down, most of this insight evaporates before your next training session.</p>
        <p>Common debrief questions:</p>
        <ul>
          <li>Did I create the entry condition the instructor described?</li>
          <li>Where in the sequence did it break down?</li>
          <li>What adjustment do I need to make?</li>
          <li>Do I need to rewatch a specific section?</li>
        </ul>

        <h2>Step 7: Return to the Instructional</h2>
        <p>After 1-2 weeks of rolling with the technique, go back to the instructional. You'll understand it completely differently now. Details that seemed irrelevant on first viewing suddenly become obvious solutions to problems you've encountered live. This iterative loop — study, drill, roll, reflect, return — is how instructionals actually change your game.</p>

        <h2>Managing Multiple Instructionals</h2>
        <p>Most serious students accumulate multiple instructionals. The risk: splitting attention across too many systems and not developing mastery in any. A better approach: designate one "active" instructional at a time. Study it deeply for 4-8 weeks. Apply it. Then move to the next. Your "inactive" instructionals are reference material — you can dip in to answer specific questions, but don't spread your full focus across them simultaneously.</p>

        <h2>The Role of AIBJJ in Instructional Study</h2>
        <p>AIBJJ's platform is built for exactly this kind of structured, reflective learning. The training journal captures your daily rolling observations. The technique library organizes what you're studying. The AI coach can help you identify which instructional concepts to focus on based on patterns in your training notes. It's the infrastructure that makes this study method stick.</p>
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
