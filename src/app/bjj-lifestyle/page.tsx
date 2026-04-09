import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The BJJ Lifestyle: More Than Martial Arts | AIBJJ',
  description: 'Discover the BJJ lifestyle — how jiu-jitsu transforms not just your physical abilities but your mindset, relationships, discipline, and approach to life\'s challenges.',
}

export default function BJJLifestylePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <nav className="border-b border-zinc-800 px-4 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
          <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold">Get Started Free</Link>
        </div>
      </nav>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black mb-6">The BJJ Lifestyle: More Than Martial Arts</h1>
        <p className="text-xl text-zinc-400 mb-8">Ask anyone who trains BJJ seriously and they&apos;ll tell you: it&apos;s not just a sport. It&apos;s a way of thinking, a community, and a framework for approaching challenges. The mat teaches lessons that extend far beyond the gym.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        <div>
          <h2 className="text-3xl font-black mb-4">The Mat as a Mirror</h2>
          <p className="text-zinc-300 mb-4">There are few places in modern life where you get immediate, honest feedback about your capabilities. BJJ is one of them. When you roll, you can&apos;t fake it — your technique either works or it doesn&apos;t. Your ego either survives getting tapped or it doesn&apos;t. Your character shows up.</p>
          <p className="text-zinc-300 mb-4">This honesty is uncomfortable but valuable. The mat reveals where you are right now, not where you think you are. Practitioners who stay in BJJ for years often describe it as one of the most character-building experiences of their lives — precisely because it doesn&apos;t allow pretense.</p>
          <p className="text-zinc-300">You learn who you are under pressure. You learn whether your ego is in control or whether you can put it aside for growth. You learn that consistent effort over time produces results that shortcuts can&apos;t match.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">The BJJ Community</h2>
          <p className="text-zinc-300 mb-4">The BJJ community is uniquely bonded. There&apos;s something about regularly trying to choke and armbar each other — and being choked and armbared in return — that creates a specific kind of trust and camaraderie. Training partners become friends in a way that people who haven&apos;t experienced BJJ often find hard to understand.</p>
          <p className="text-zinc-300 mb-4">This community crosses backgrounds, professions, and demographics in ways that few activities do. On the mat, your rank is determined by skill and time on the mat — not by your job title, your bank account, or your social status. A blue belt doctor taps to a purple belt construction worker. The mat is a great equalizer.</p>
          <p className="text-zinc-300">Academies become second families. The inside jokes, the shared struggle of learning difficult techniques, the mutual respect for everyone&apos;s journey — these create lasting bonds that extend far beyond the gym walls.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Discipline and Consistency</h2>
          <p className="text-zinc-300 mb-4">BJJ requires years of consistent effort before significant skill develops. There is no shortcut to a legitimate black belt — it takes 8-12 years of regular training for most people. This long timeline is a feature, not a bug.</p>
          <p className="text-zinc-300 mb-4">The discipline built by showing up three times per week for years — even when you&apos;re tired, even when you&apos;re getting beaten, even when progress feels invisible — transfers directly to other areas of life. Practitioners who train BJJ long-term often describe improvements in work ethic, persistence through difficulty, and the ability to delay gratification.</p>
          <p className="text-zinc-300">The ability to distinguish between discomfort and danger — to push through the former while respecting the latter — is one of the most valuable lessons BJJ teaches.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Ego Management</h2>
          <p className="text-zinc-300 mb-4">Ego is one of the greatest obstacles to learning in any field. BJJ systematically dismantles unhealthy ego because the mat doesn&apos;t care about your credentials, your job, or your past accomplishments. You tap or you don&apos;t. Your technique works or it doesn&apos;t.</p>
          <p className="text-zinc-300 mb-4">The process of getting tapped hundreds of times in your first year — by people who look nothing like what you&apos;d expect to beat you — teaches you that ego is a liability. The white belt who checks their ego at the door improves ten times faster than the one who can&apos;t accept being tapped.</p>
          <p className="text-zinc-300">This ego management extends beyond the mat. Practitioners who learn to receive feedback on the mat tend to become better at receiving feedback in professional and personal life. The lesson is transferable.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Physical Health and Longevity</h2>
          <p className="text-zinc-300 mb-4">BJJ provides a complete physical workout — cardiovascular conditioning, strength, flexibility, and coordination all develop through regular training. But beyond fitness, BJJ builds a physical resilience that comes from regularly putting your body through physical challenge.</p>
          <p className="text-zinc-300 mb-4">It&apos;s also highly scalable. A 60-year-old practitioner can roll with a 25-year-old by using experience and technique over athleticism. BJJ has a meaningful life as a lifelong physical practice — something that crossfit, soccer, and most competitive sports don&apos;t offer.</p>
          <p className="text-zinc-300">The physical confidence that comes from knowing you can handle yourself in physical confrontation — without ever needing to use it — is quietly transformative. You walk differently through the world.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">BJJ and Mental Health</h2>
          <p className="text-zinc-300 mb-4">The mental health benefits of BJJ are increasingly documented and widely reported by practitioners. Regular BJJ training:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Reduces anxiety — physical exertion metabolizes stress hormones</li>
            <li>Provides perspective — whatever happened at work matters less after rolling</li>
            <li>Builds confidence — real, earned confidence from genuine capability</li>
            <li>Creates community — loneliness is a public health crisis; BJJ provides belonging</li>
            <li>Develops present-moment focus — you can&apos;t ruminate during a roll</li>
          </ul>
          <p className="text-zinc-300">Many practitioners describe BJJ as better therapy than therapy — not because it replaces mental health care, but because the combination of physical challenge, community, and structured problem-solving addresses multiple mental health needs simultaneously.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">The Philosophy of BJJ</h2>
          <p className="text-zinc-300 mb-4">BJJ carries an implicit philosophy: use leverage and technique over brute force. A small person, properly trained, can control and submit a much larger, stronger untrained person. This principle — that superior knowledge and technique beat superior force — applies beyond the mat.</p>
          <p className="text-zinc-300 mb-4">The Gracie family didn&apos;t just teach techniques; they demonstrated a way of approaching problems. Don&apos;t meet force with force — redirect, leverage, use their energy against them. Find the angle that makes your problem solvable.</p>
          <p className="text-zinc-300">This isn&apos;t unique to BJJ — martial arts philosophies generally teach similar principles — but BJJ proves it empirically, over and over, on the mat. That empirical proof changes how practitioners think about challenges in their lives.</p>
        </div>

        <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">
          <h2 className="text-2xl font-black mb-3">Start Your BJJ Journey with AI Support</h2>
          <p className="text-zinc-300 mb-4">Try AIBJJ&apos;s AI Coach to get personalized guidance on your BJJ journey. Whether you&apos;re just starting or developing your long-term game, the AI coach helps you train with purpose.</p>
          <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block">Start Your Journey →</Link>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-black mb-4">Ready to level up your BJJ?</h2>
        <p className="text-zinc-400 mb-6">Join the AIBJJ community and train with purpose at every step of your journey.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Join AIBJJ Free</Link>
      </section>

      <footer className="border-t border-zinc-800 px-4 py-8 text-center text-zinc-500 text-sm">
        <Link href="/">AIBJJ</Link> · <Link href="/terms">Terms</Link> · <Link href="/privacy">Privacy</Link>
      </footer>
    </div>
  )
}
