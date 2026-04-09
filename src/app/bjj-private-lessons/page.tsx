import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BJJ Private Lessons: Are They Worth It? | AIBJJ',
  description: 'Are BJJ private lessons worth the investment? When to get them, how to prepare, what to focus on, and how to maximize every minute with your coach.',
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
        <h1 className="text-4xl md:text-5xl font-black mb-6">BJJ Private Lessons: Are They Worth It?</h1>
        <p className="text-xl text-zinc-400 mb-8">BJJ private lessons can be transformational — or a waste of money. The difference is entirely in how you prepare for them, what you focus on, and how you apply what you learn afterward.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>
      <section className="max-w-4xl mx-auto px-4 py-12 prose prose-invert prose-zinc max-w-none">
        <h2>The Case for Private Lessons</h2>
        <p>In a group class of 20 students, your coach's attention is divided. You get corrections when they happen to be watching, and the curriculum is designed for the group, not for your specific gaps. Private lessons flip this: the entire session is focused on your game, your problems, and your questions. A skilled black belt can diagnose and address in 60 minutes what might take months of group training to stumble upon organically.</p>
        <p>The fastest-improving students at high-level academies almost universally incorporate private lessons into their training. Competition preparation, technique troubleshooting, and accelerated belt progression are all enhanced by dedicated private instruction.</p>

        <h2>When Privates Are Worth It</h2>
        <ul>
          <li><strong>Pre-competition</strong> — Specific game planning, addressing known holes in your game, and drilling your A-game under coach supervision is extremely valuable before important tournaments.</li>
          <li><strong>Stuck at a plateau</strong> — When you're feeling like you've stopped progressing in group class, a private can identify the specific technical or conceptual issues causing the plateau.</li>
          <li><strong>Working on a complex technique</strong> — Some techniques (leg locks, berimbolo, complex back takes) benefit enormously from hands-on correction that group instruction can't provide.</li>
          <li><strong>New to BJJ</strong> — If budget allows, early privates build foundational mechanics correctly from the start, preventing bad habits that take years to unlearn.</li>
          <li><strong>Returning from injury</strong> — Rebuilding your game under coach supervision after a significant injury reduces the risk of re-injury and ensures you're addressing the injury appropriately in your game.</li>
        </ul>

        <h2>When to Wait</h2>
        <p>Privates are less valuable when you don't have enough mat time to identify what to work on, when you haven't exhausted the information available from group training, or when you're so new that every group class session is already delivering rapid improvement. If you've been training for less than 3-6 months, your group class instruction is likely sufficient — save your private lesson budget for when you've identified specific gaps.</p>

        <h2>How to Prepare for a Private Lesson</h2>
        <p>The difference between a transformational private and a forgettable one is entirely in your preparation. Here's how to prepare:</p>
        <ol>
          <li><strong>Identify your most significant problem</strong> — What position are you consistently losing from? What technique keeps failing even though you drill it? What submission are you having trouble finishing? Be as specific as possible.</li>
          <li><strong>Write down your questions</strong> — Come with 3-5 specific questions or problems. Open-ended "teach me guard passing" is less valuable than "I'm getting stalemated when I try the torreando against flexible guard players — what am I missing?"</li>
          <li><strong>Review your training journal</strong> — If you've been logging your sessions in AIBJJ, review your recent notes to identify patterns in what's going wrong.</li>
          <li><strong>Watch video</strong> — If you're working on a specific technique, watch instructionals or competition footage of it before the lesson so you have context for the coach's corrections.</li>
        </ol>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block not-prose">Use AIBJJ to Prepare for Your Private Lessons →</Link>

        <h2>What to Focus On During the Lesson</h2>
        <p>During the private, resist the temptation to ask about everything. Focus on your primary problem. Let the coach guide the session with that focus in mind — they'll add context you didn't know you needed. Take mental notes actively. Ask "why" not just "what" — understanding the principle behind a correction makes it applicable in situations the drill doesn't cover.</p>
        <p>If possible, record the lesson (with your coach's permission). Watching yourself on video — seeing what you actually do versus what you think you do — is invaluable for implementing corrections.</p>

        <h2>What to Do After a Private</h2>
        <p>The private is only valuable if you apply what you learned. Immediately after:</p>
        <ul>
          <li>Write down the key corrections and concepts while they're fresh</li>
          <li>Drill the specific movements that were corrected 50-100 times before your next class</li>
          <li>Test the corrections in positional sparring before free rolling</li>
          <li>Follow up with your coach in group class if something isn't translating</li>
        </ul>
        <p>Log your private lesson content in AIBJJ's training journal so you can reference it in future sessions and track whether the corrections are sticking in your rolling.</p>

        <h2>Cost and Frequency</h2>
        <p>Private lesson costs vary widely: $60-200+ per hour depending on coach credentials, location, and demand. Elite coaches (black belts with competition pedigree) typically charge premium rates. Black belt instructors at good academies are typically $80-150/hour and are worth the investment if you use the lesson effectively.</p>
        <p>Frequency: most students benefit from one private per month or before competition. Unless your budget is unlimited, bi-weekly or monthly is more realistic and sustainable. The compounding effect of monthly privates over a year produces noticeable game development. Weekly privates produce accelerated development for those who can invest in it.</p>

        <h2>Choosing the Right Coach for Your Privates</h2>
        <p>Your head instructor is the obvious first choice — they know your game and can give contextualized feedback. But sometimes a guest instructor, higher-level black belt from another school, or specialist in the specific area you're working on can provide fresh perspective. Many serious competitors seek privates from multiple coaches to get diverse input.</p>
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
