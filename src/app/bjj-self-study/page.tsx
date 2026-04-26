import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BJJ Self Study: Learning Outside the Gym | AIBJJ',
  description: 'BJJ self study methods that actually work. Video analysis, solo drilling, mental rehearsal, and how to accelerate your BJJ progress outside the academy.',
}

export default function Page() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
<section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black mb-6">BJJ Self Study: Learning Outside the Gym</h1>
        <p className="text-xl text-zinc-400 mb-8">The mat time you get at your academy is just the beginning. The students who progress fastest spend meaningful time studying, drilling, and analyzing BJJ outside of class. Here's how to do it effectively.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>
      <section className="max-w-4xl mx-auto px-4 py-12 prose prose-invert prose-zinc max-w-none">
        <h2>Why Self Study Matters</h2>
        <p>Most people train BJJ 2-4 times per week, spending 1-2 hours per session on the mat. That's roughly 4-8 hours of BJJ per week — and most of that time is split between warmups, technique instruction, and drilling with partners. Self-directed study outside of class can double or triple your effective learning time without requiring a training partner or a gym membership.</p>
        <p>The athletes who progress fastest are almost always the ones who think about BJJ away from the mat. They watch matches, study instructionals, drill alone, and analyze their own rolling. This intellectual engagement accelerates physical learning in ways that are hard to overstate.</p>

        <h2>Video Analysis: Study Matches Like a Coach</h2>
        <p>Watching matches is one of the highest-value BJJ self study activities — if you watch actively, not passively. The difference: passive watching is entertainment. Active watching is analysis. Here's how to analyze BJJ matches productively:</p>
        <ul>
          <li><strong>Focus on one position</strong> — Instead of watching entire matches, search for highlight reels or tournament footage of your specific position. If you're working on butterfly guard, watch how the best butterfly guard players in the world set up their sweeps.</li>
          <li><strong>Watch entries, not finishes</strong> — Most people watch submissions. Study the setups instead. How does the competitor create the entry condition? What does their opponent do wrong?</li>
          <li><strong>Watch the same sequence repeatedly</strong> — Slow down, rewind, study the weight distribution and grip changes that make each sequence work.</li>
          <li><strong>Compare approaches</strong> — Watch two different high-level competitors use the same position. What do they do similarly? What's different?</li>
        </ul>
        <p>Log your match analysis observations in AIBJJ alongside your training notes — so insights from your video study connect directly to your mat work.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block not-prose">Connect Your Video Study to Mat Work →</Link>

        <h2>Solo Drilling: Building Motor Patterns Without a Partner</h2>
        <p>Many BJJ movements can be drilled alone with a mat and some floor space. Solo drilling isn't a replacement for partner work — but it builds the movement fluency that makes techniques feel natural when you do have a partner. Key solo drilling exercises:</p>
        <ul>
          <li><strong>Hip escapes (shrimping)</strong> — The foundational defensive movement in BJJ. Drill for quality, not speed.</li>
          <li><strong>Hip escape to guard replacement</strong> — Adding guard recovery to the shrimping sequence.</li>
          <li><strong>Bridge and roll</strong> — Mount escape movement pattern, can be drilled solo against air.</li>
          <li><strong>Technical standup</strong> — Getting to standing from seated guard in a structured way.</li>
          <li><strong>Forward and backward rolls</strong> — Builds body awareness and is useful for guard inversions.</li>
          <li><strong>Sit-outs</strong> — Wrestling-based movement for turtle escapes and scrambles.</li>
          <li><strong>Pummeling</strong> — Shadow pummeling to practice underhook entries.</li>
        </ul>
        <p>Even 15 minutes of daily solo drilling — done consistently — builds a level of movement fluency that accelerates everything else in your training.</p>

        <h2>Mental Rehearsal: Visualizing Techniques</h2>
        <p>Mental rehearsal is scientifically validated for motor skill development. Studies on athletes show that vivid mental rehearsal activates similar neural pathways as physical practice. For BJJ, this means: lying still and mentally running through a technique sequence — feeling the grips, visualizing the hip movement, imagining the opponent's reactions — genuinely improves your ability to execute it live.</p>
        <p>Practice mental rehearsal before sleep or in the morning before training. Pick one specific technique and run through it 5-10 times in full mental detail. The key is specificity — vague visualization is less effective than detailed, sensory-rich rehearsal.</p>

        <h2>Journaling Your Training</h2>
        <p>The single highest-leverage self study habit is keeping a training journal. After every session, write down:</p>
        <ul>
          <li>What techniques were covered in class</li>
          <li>What worked in rolling and why</li>
          <li>What failed and what you think went wrong</li>
          <li>Questions to ask your coach next session</li>
          <li>What to drill before the next class</li>
        </ul>
        <p>This reflection process consolidates learning, identifies patterns, and gives you a roadmap for self study between sessions. AIBJJ's training journal is designed for exactly this workflow — making it easy to log, review, and build on your training sessions over time.</p>

        <h2>Building a Self Study Curriculum</h2>
        <p>Self study works best when it's structured around a specific goal. Rather than watching random BJJ videos, build a temporary curriculum around one area of your game. Example: "For the next 4 weeks, I'm focused on improving my mount escape." Your self study activities for those weeks:</p>
        <ul>
          <li>Watch Bernardo Faria's mount escape instructional section</li>
          <li>Find 10 high-level match clips featuring mount escape sequences</li>
          <li>Solo drill bridge and roll and hip escape daily</li>
          <li>Ask your training partner for extra mount escape positional rounds</li>
          <li>Journal your progress weekly</li>
        </ul>
        <p>Four weeks of focused self study on a single position will produce more progress than six months of passive watching and hoping things improve.</p>

        <h2>Resources for BJJ Self Study</h2>
        <p>Free resources worth using consistently: FloGrappling (match footage), Flo's YouTube channel, BJJ Fanatics YouTube, Marcelo Garcia's YouTube archive, and the Chewjitsu channel (Chewy's practical advice is excellent for white through blue belts). For paid resources, BJJ Fanatics and Digitsu provide the widest selection of instructionals.</p>
        <p>AIBJJ ties all of your self study together — connecting your technique library, training journal, AI coaching feedback, and progress tracking in one place. It's the infrastructure that makes self study stick.</p>
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
