import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI BJJ Coach — Train Smarter with an AI That Knows Jiu-Jitsu',
  description: 'AIBJJ\'s AI coach knows Brazilian Jiu-Jitsu deeply — positions, techniques, game plans, and training strategy. Ask anything. Available 24/7. Built by a black belt.',
  openGraph: {
    title: 'AI BJJ Coach — Train Smarter | AIBJJ',
    description: 'An AI coach that actually understands BJJ. Ask technique questions, build game plans, analyze your training. Available 24/7 and built by a black belt.',
    url: 'https://aibjj.com/bjj-ai-coach',
  },
}

export default function BJJAICoachPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300">
      {/* Nav */}
      <nav className="border-b border-zinc-800/60 bg-black/80 backdrop-blur-xl px-4 py-4">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <Link href="/" className="text-xl font-black tracking-tight">
            <span className="text-red-600">AI</span><span className="text-white">BJJ</span>
          </Link>
          <div className="flex gap-3">
            <Link href="/auth/signin" className="text-sm text-zinc-400 hover:text-white px-4 py-2">Sign In</Link>
            <Link href="/auth/signup" className="text-sm bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Get Started</Link>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-500 mb-3">AI BJJ Coach</p>
          <h1 className="text-4xl font-black text-white sm:text-5xl mb-6">
            The AI BJJ Coach That Actually Knows Jiu-Jitsu
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed">
            Most BJJ athletes only get coaching during class — a few hours a week, shared with 20 other students. The best athletes get private coaching, custom game plans, and on-demand answers to their questions. AIBJJ&apos;s AI coach makes that accessible to everyone.
          </p>
        </div>

        {/* CTA Banner */}
        <div className="mb-12 p-6 rounded-xl bg-red-950/30 border border-red-900/40">
          <p className="font-semibold text-white mb-1">🤖 Try Your AI Coach Now</p>
          <p className="text-zinc-400 text-sm mb-4">Ask it anything about BJJ — technique details, game plan help, training strategy, competition prep. Free to start.</p>
          <Link href="/auth/signup" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors">
            Start Free — No Credit Card →
          </Link>
        </div>

        <div className="space-y-12">

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Why AI Coaching Works for BJJ</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Jiu-jitsu is a knowledge-intensive sport. Unlike sports that rely primarily on athleticism, BJJ rewards technical understanding. A smaller, older practitioner can regularly submit larger, stronger, more athletic opponents — if their knowledge is superior. This makes BJJ uniquely suited to AI coaching.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-4">
              The challenge has always been access. High-quality coaching is expensive and geographically limited. Most BJJ practitioners train in academies where the instructor is spread thin across 30 students. Private lessons are $100-200/hr for a good black belt. The knowledge gap between well-coached and self-coached athletes is enormous.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              AIBJJ&apos;s AI coach changes this equation. It has deep knowledge of BJJ technique, positions, and strategy — and it&apos;s available to answer your specific question, about your specific situation, at 11pm when you&apos;re watching competition footage in bed. That&apos;s a new kind of access.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What You Can Ask Your AI BJJ Coach</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              The AI coach isn&apos;t a search engine — it&apos;s a conversation. You can ask complex, contextual questions and get coaching-quality responses:
            </p>

            <div className="space-y-4">
              {[
                {
                  category: '🥋 Technique Questions',
                  examples: [
                    '"What are the best defenses against an inside heel hook?"',
                    '"My armbar keeps getting stacked — what am I doing wrong?"',
                    '"Explain the difference between the D\'arce and anaconda mechanics."',
                  ],
                },
                {
                  category: '🗺️ Game Plan Building',
                  examples: [
                    '"Help me build a butterfly guard game plan for no-gi."',
                    '"I\'m a purple belt guard player competing IBJJF — what should my top game look like?"',
                    '"What are the best attacks from single leg X for someone with long legs?"',
                  ],
                },
                {
                  category: '📈 Training Strategy',
                  examples: [
                    '"I only train 3x per week — how should I structure my sessions for maximum progress?"',
                    '"I have a competition in 4 weeks — what should I focus on?"',
                    '"How do I deal with training partners who are 50 lbs heavier than me?"',
                  ],
                },
                {
                  category: '🏆 Competition Prep',
                  examples: [
                    '"What should my warm-up look like 30 minutes before my first match?"',
                    '"My opponent pulls guard in every match — how do I prepare for this?"',
                    '"I keep losing on advantages in IBJJF — how do I fix my activity game?"',
                  ],
                },
              ].map((item) => (
                <div key={item.category} className="p-5 rounded-lg bg-zinc-900/50 border border-zinc-800">
                  <p className="font-semibold text-white mb-3">{item.category}</p>
                  <ul className="space-y-2">
                    {item.examples.map((ex) => (
                      <li key={ex} className="text-sm text-zinc-400 flex gap-2">
                        <span className="text-red-500 shrink-0">→</span>
                        <em>{ex}</em>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">How the AI Coach Learns Your Game</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Unlike generic AI tools, AIBJJ&apos;s coach is personalized to you. When you set up your profile — belt level, weight class, preferred style, training goals — the AI coach adapts its responses accordingly. A blue belt beginner and a brown belt competitor might ask the same technique question and get different levels of depth and context.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-4">
              As you use the training journal and game plan builder, the AI coach learns more about your game — your tendencies, your problem areas, your competitive history. Over time, your coaching becomes increasingly personalized and specific to how you actually roll.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              This is the same kind of long-term coaching relationship that elite athletes have with their coaches — the coach who knows your game deeply, not just your general skill level.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">AI Coach vs. Human Coach: The Honest Comparison</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              We want to be honest: an AI coach does not replace a human coach. Period. Physical correction, live demonstration, drilling supervision, and the human relationship element of coaching are irreplaceable. You should train with a human instructor.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-4">
              What an AI coach does is fill the massive gaps that exist between your training sessions. When you have a question at 10pm, when you want to review technique concepts before drilling, when you need help thinking through your game plan before competition — your human coach isn&apos;t available. The AI coach is.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Think of the AI coach as the knowledgeable training partner you can ask anything — without ego, without judgment, and without scheduling.
            </p>

            <div className="overflow-hidden rounded-xl border border-zinc-800 mt-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-800 bg-zinc-900">
                    <th className="px-5 py-3 text-left font-medium text-zinc-400">Situation</th>
                    <th className="px-5 py-3 text-center font-bold text-red-500">AI Coach</th>
                    <th className="px-5 py-3 text-center font-medium text-zinc-500">Human Coach</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/50">
                  {[
                    ['Available 24/7', '✅', '❌'],
                    ['Answers any question instantly', '✅', '❌'],
                    ['Unlimited sessions', '✅', '❌ ($/hr)'],
                    ['Physical corrections', '❌', '✅'],
                    ['Live sparring analysis', '❌', '✅'],
                    ['Long-term relationship', '✅ (learns your game)', '✅'],
                    ['Personalized to you', '✅', '✅'],
                  ].map(([situation, ai, human]) => (
                    <tr key={situation} className="bg-zinc-950/50">
                      <td className="px-5 py-3 font-medium text-zinc-300">{situation}</td>
                      <td className="px-5 py-3 text-center font-semibold text-green-400">{ai}</td>
                      <td className="px-5 py-3 text-center text-zinc-500">{human}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Built by Someone Who Knows BJJ</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              AIBJJ was built by a BJJ black belt with 20+ years on the mats and a combat veteran background. This matters because it means the AI coach was designed by someone who understands the real questions BJJ athletes ask — not a software engineer who discovered BJJ recently.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-4">
              The AI coach understands BJJ terminology, the culture of the sport, the difference between gi and no-gi contexts, and the nuances that matter between belt levels. When you ask a question, you get an answer that sounds like it came from someone who has been on the mats — not a search engine.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              That authenticity is the difference between a tool that BJJ athletes actually use vs. one that sits abandoned after the first week.
            </p>
          </section>

          {/* Example conversation */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Example Coaching Session</h2>
            <div className="space-y-3 p-6 rounded-xl bg-zinc-900/60 border border-zinc-800">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-xs font-bold shrink-0">You</div>
                <div className="bg-zinc-800/80 rounded-lg px-4 py-3 text-sm text-zinc-300 max-w-lg">
                  I keep getting heel hooked from outside ashi. I can tell it&apos;s coming but I don&apos;t know how to bail out fast enough. I train no-gi, brown belt.
                </div>
              </div>
              <div className="flex gap-3 justify-end">
                <div className="bg-red-950/60 border border-red-900/40 rounded-lg px-4 py-3 text-sm text-zinc-300 max-w-lg">
                  <p className="text-red-400 font-semibold text-xs mb-1">AI Coach</p>
                  Good awareness — recognizing the entry is the first step. For outside heel hook defense from ashi garami: your priority is the hip escape before the finish develops. The moment you feel them sit to outside ashi, start your hip escape away from the trapped leg while keeping your free foot active. The &ldquo;knee shield&rdquo; with your free leg creates separation. Avoid the common mistake of reaching for their leg — that often locks your own position. Want me to walk through the specific mechanics of the hip escape or the early warning signs to look for in the setup?
                </div>
                <div className="w-8 h-8 rounded-full bg-red-600/20 border border-red-600/30 flex items-center justify-center text-xs font-bold shrink-0 text-red-500">AI</div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="p-8 rounded-xl bg-zinc-900/60 border border-zinc-800 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Start Coaching with AIBJJ</h2>
            <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
              Free tier includes 5 AI coach messages per day. Upgrade to Founding Member for unlimited coaching at $9.99/mo — locked forever.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/auth/signup" className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Start Free →
              </Link>
              <Link href="/bjj-game-plan" className="inline-flex items-center justify-center gap-2 border border-zinc-700 bg-zinc-900 hover:border-zinc-600 text-zinc-300 px-6 py-3 rounded-lg font-semibold transition-colors">
                Build Your Game Plan
              </Link>
            </div>
          </section>

        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-zinc-800/60 bg-zinc-950 py-8 mt-16">
        <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-600">
          <Link href="/" className="font-black text-base"><span className="text-red-600">AI</span><span className="text-white">BJJ</span></Link>
          <div className="flex gap-6">
            <Link href="/bjj-techniques" className="hover:text-zinc-400">Techniques</Link>
            <Link href="/bjj-training-journal" className="hover:text-zinc-400">Journal</Link>
            <Link href="/bjj-game-plan" className="hover:text-zinc-400">Game Plan</Link>
            <Link href="/terms" className="hover:text-zinc-400">Terms</Link>
            <Link href="/privacy" className="hover:text-zinc-400">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
