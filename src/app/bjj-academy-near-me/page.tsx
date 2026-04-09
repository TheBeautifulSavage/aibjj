import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Find the Best BJJ Academy Near You | AIBJJ',
  description: 'How to find the best BJJ academy near you. What to look for in a school, red flags to avoid, questions to ask, and how to evaluate coaches and culture.',
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
        <h1 className="text-4xl md:text-5xl font-black mb-6">How to Find the Best BJJ Academy Near You</h1>
        <p className="text-xl text-zinc-400 mb-8">Choosing the right BJJ academy is one of the most important decisions you'll make in your grappling journey. The right gym accelerates your progress and builds a community you'll love. Here's how to find it.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>
      <section className="max-w-4xl mx-auto px-4 py-12 prose prose-invert prose-zinc max-w-none">
        <h2>Why Your Academy Choice Matters</h2>
        <p>Most people improve primarily based on where they train — not what they watch online, not which instructionals they buy. Your training environment: the quality of your coach, the quality of your training partners, the culture of the room, and how much you enjoy being there. A mediocre student in a great room often outpaces a highly motivated student in a bad one. Choose carefully.</p>

        <h2>How to Find BJJ Schools Near You</h2>
        <p>Start with these resources:</p>
        <ul>
          <li><strong>Google Maps</strong> — Search "BJJ near me" or "Brazilian jiu-jitsu [your city]." Read reviews, check photos, note class schedules.</li>
          <li><strong>IBJJF Academy Finder</strong> — The International Brazilian Jiu-Jitsu Federation lists affiliated academies globally.</li>
          <li><strong>Gracie Finder</strong> — Gracie University's academy locator for Gracie Barra and Gracie Certified schools.</li>
          <li><strong>Reddit</strong> — r/bjj frequently has "which gym in [city]?" posts with honest community feedback.</li>
          <li><strong>Instagram and YouTube</strong> — Local academies often post content. Watching their training videos gives you a feel for the culture and skill level before you walk in.</li>
          <li><strong>Word of mouth</strong> — Ask people who train. Grapplers are generally enthusiastic about recommending good gyms.</li>
        </ul>

        <h2>What to Look for in a BJJ Academy</h2>
        <h3>Coach Credentials</h3>
        <p>The head instructor's credentials matter — but not in the way most beginners think. A black belt from a credible lineage is the baseline requirement, but the quality of instruction, teaching ability, and competition record are equally important. A competition champion who can't teach isn't as valuable as a non-champion who communicates concepts clearly and develops students consistently. Ask about their lineage (who promoted them?), their competition history, and look for evidence that their students are progressing and competing.</p>

        <h3>Class Structure and Curriculum</h3>
        <p>Quality academies have organized curricula — not just random technique-of-the-day instruction every session. Look for: structured beginner programs that build fundamentals systematically, clear progression through belt levels with defined requirements, regular drilling and technique instruction (not just rolling), and some form of curriculum documentation or structure. Ask what the first 3 months of training look like for a new student.</p>

        <h3>Training Culture</h3>
        <p>Culture is everything. Visit during a class (most academies offer free trial classes) and observe:</p>
        <ul>
          <li>Do upper belts help and encourage lower belts, or bully them?</li>
          <li>Is sparring competitive but controlled, or dangerously ego-driven?</li>
          <li>Do people tap early and respect taps, or do they muscle through submissions?</li>
          <li>Are new students welcomed and introduced?</li>
          <li>Is there a visible community — people hanging out after class, talking, bonding?</li>
        </ul>
        <p>You'll spend hundreds or thousands of hours in this room. The people need to be worth spending time around.</p>

        <h3>Hygiene and Facility</h3>
        <p>Dirty mats are a genuine health hazard — staph infections, ringworm, and other skin conditions are real risks in grappling facilities with poor hygiene. Visit and look: Are the mats clean? Does the facility smell acceptable? Is laundry/gi hygiene enforced? A good gym treats hygiene as a safety issue, not a cosmetic one.</p>

        <h2>Red Flags to Avoid</h2>
        <ul>
          <li><strong>Long-term contracts with no trial period</strong> — Quality gyms offer trial classes because they're confident in their product. Aggressive sales tactics before you've trained are a warning sign.</li>
          <li><strong>Belt selling</strong> — Promotions should be earned through skill and time. Any academy that implies belts can be accelerated through money is not legitimate.</li>
          <li><strong>Secretive lineage</strong> — A coach who won't clearly identify who promoted them and their lineage may have a reason for the secrecy.</li>
          <li><strong>Unsafe training environment</strong> — Injuries happen, but an unusually high injury rate, ego-driven training culture, or coaches who encourage or tolerate dangerous behavior is a red flag.</li>
          <li><strong>Cult-like devotion to the head instructor</strong> — Healthy academies have respect for coaches without requiring worship. Discouraging students from visiting other schools or receiving outside instruction is a control tactic.</li>
        </ul>

        <h2>Questions to Ask During Your Trial</h2>
        <ol>
          <li>What does the beginner program look like? How long is it?</li>
          <li>How often do classes cover fundamentals versus advanced material?</li>
          <li>How do you approach belt promotions?</li>
          <li>Is there an open mat for extra rolling?</li>
          <li>Do students compete, and what local competitions are available?</li>
          <li>What's the monthly membership cost, and what does it include?</li>
        </ol>

        <h2>Using AIBJJ to Maximize Your Academy Training</h2>
        <p>Once you've found your academy, AIBJJ helps you extract maximum value from every class. Log what you learn in each session, track your drilling progress, get AI coaching feedback on patterns in your rolling, and build a structured curriculum around your academy's instruction. Your academy provides the mat time and instruction — AIBJJ provides the structure and reflection that turns mat time into mastery.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block not-prose">Start Using AIBJJ with Your Academy Training →</Link>
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
