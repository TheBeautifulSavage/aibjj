import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BJJ Online Training: Can You Really Learn Online? | AIBJJ',
  description: 'Can you learn BJJ online? The honest answer, best platforms, how to supplement online learning with mat time, and what online training can and cannot teach you.',
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
        <h1 className="text-4xl md:text-5xl font-black mb-6">BJJ Online Training: Can You Really Learn Online?</h1>
        <p className="text-xl text-zinc-400 mb-8">The honest answer to "can you learn BJJ online" is nuanced. Online training is a powerful supplement — but it's not a replacement for mat time. Here's what online BJJ can teach you, what it can't, and how to use it effectively.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>
      <section className="max-w-4xl mx-auto px-4 py-12 prose prose-invert prose-zinc max-w-none">
        <h2>What Online BJJ Training Can and Cannot Do</h2>
        <p>Let's be direct: you cannot learn to grapple without grappling. BJJ is a contact sport that requires live, resistant training partners to develop timing, sensitivity, and the ability to apply techniques against resistance. No amount of video watching, online courses, or even solo drilling can replicate the learning that happens when a resisting human is trying to stop you. Period.</p>
        <p>That said, online BJJ training is not useless — it's enormously valuable as a supplement. Here's what it can legitimately teach you:</p>
        <ul>
          <li><strong>Conceptual understanding</strong> — Why techniques work, positional hierarchy, strategic thinking</li>
          <li><strong>Technique mechanics</strong> — Detailed breakdowns of grips, body positioning, weight distribution</li>
          <li><strong>Vocabulary</strong> — Learning the names and concepts of positions so you can communicate with training partners</li>
          <li><strong>Solo drilling movements</strong> — Hip escapes, bridges, and other movements that can be practiced alone</li>
          <li><strong>Game planning</strong> — Understanding how techniques connect into systems</li>
        </ul>

        <h2>Best Online BJJ Platforms</h2>
        <h3>Gracie University</h3>
        <p>Founded by Rener and Ryron Gracie, Gracie University offers the most structured online BJJ curriculum available. Their "Gracie Combatives" course is particularly strong for beginners — covering 36 core techniques in a progressive format. They also offer a belt testing and certification process that, while controversial among traditionalists, provides structured accountability for remote learners. For beginners who genuinely cannot access an academy, Gracie University is the most legitimate online-first option.</p>

        <h3>BJJ Fanatics</h3>
        <p>The largest marketplace for BJJ instructionals. Not a structured curriculum, but a massive library of technique-focused content from world-class practitioners. Best used as a supplement to academy training rather than a standalone learning resource. Regular sales make it accessible financially.</p>

        <h3>Digitsu</h3>
        <p>Similar to BJJ Fanatics — instructional marketplace with strong no-gi content. Some exclusive instructionals not available elsewhere. Good streaming interface. Best as a supplement to mat training.</p>

        <h3>YouTube</h3>
        <p>The amount of free, high-quality BJJ instruction on YouTube is staggering. Channels worth following: Marcelo Garcia's channel, Lachlan Giles' Absolute MMA channel, Chewjitsu (accessible beginner instruction), Art of Jiu-Jitsu, and Grapplearts. For conceptual understanding and specific technique breakdowns, YouTube is genuinely world-class and free.</p>

        <h3>AIBJJ</h3>
        <p>AIBJJ adds an AI-coaching layer to your training — whether you're training at an academy or supplementing with online study. The platform organizes what you're learning, helps you identify patterns in your rolling, and provides structured coaching feedback that makes your training more deliberate. It's the connective tissue between your online study and your mat work.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block not-prose">Try AIBJJ's AI Coaching Platform →</Link>

        <h2>Online BJJ During Travel or Injury</h2>
        <p>Online training becomes most valuable when you can't access an academy — during travel, injury recovery (mental training while physically restricted), or relocation. In these contexts, online study is genuinely the best available option and can meaningfully maintain your conceptual understanding and keep your mind engaged with the sport. Return to mat training with clear goals based on what you studied while away.</p>

        <h2>Virtual Live Classes</h2>
        <p>During the COVID-19 pandemic, many academies pivoted to Zoom-based classes. Instructors found creative ways to teach solo drilling, movement patterns, and conceptual material virtually. Some academies continue to offer virtual options for remote students. Virtual live classes are superior to recorded video for beginners because you can ask questions in real time. For solo drilling content, they're legitimate.</p>

        <h2>The Hybrid Approach</h2>
        <p>The most effective approach for most people: attend an academy regularly (minimum 2-3 times per week) AND use online resources for supplemental study. Identify what you're working on in class, study that specific area through instructionals or YouTube, drill it alone, test it in class. This loop — class instruction → online depth study → solo drilling → mat application — produces faster development than either alone.</p>

        <h2>When You Genuinely Can't Access an Academy</h2>
        <p>If you're in a location with no BJJ academy, your options: Gracie University's online program (most legitimate for beginners), attending local wrestling or judo clubs (related grappling arts), organizing informal training sessions with one or two willing partners (even basic self-study with a partner produces more than solo training), and extensive online study to prepare for when you can access proper instruction. Even imperfect options are better than none — stay engaged.</p>
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
