import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BJJ vs Muay Thai: Grappling vs Striking | AIBJJ',
  description: 'BJJ vs Muay Thai compared — which is better for self-defense, MMA, fitness, and beginners? Learn what each art offers and why combining them is the answer.',
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
        <h1 className="text-4xl md:text-5xl font-black mb-6">BJJ vs Muay Thai: Grappling vs Striking</h1>
        <p className="text-xl text-zinc-400 mb-8">BJJ and Muay Thai are the two most respected arts in modern MMA and combat sports. This comprehensive comparison breaks down what each offers — and why most serious fighters train both.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>
      <section className="max-w-4xl mx-auto px-4 py-12 prose prose-invert prose-zinc max-w-none">
        <h2>The Fundamental Divide: Grappling vs. Striking</h2>
        <p>BJJ and Muay Thai operate in completely different domains. BJJ is a grappling art — it's designed to control and submit opponents at close range, primarily on the ground. Muay Thai is a striking art — it uses fists, elbows, knees, and kicks to damage opponents at standing range. In a pure confrontation, the question is simple: if the fight stays standing, Muay Thai dominates. If the fight goes to the ground, BJJ dominates. In reality, fights transition between both ranges — which is why MMA fighters train both extensively.</p>

        <h2>What Muay Thai Offers</h2>
        <p>Muay Thai, the "art of eight limbs," uses punches, kicks, elbows, and knee strikes — more weapons than any other standalone striking art. Key advantages:</p>
        <ul>
          <li><strong>Explosive power development</strong> — Muay Thai builds striking power through years of pad work and heavy bag training. The physical conditioning is elite.</li>
          <li><strong>Clinch striking</strong> — Muay Thai's clinch work (grabbing and kneeing) is devastating. This is particularly relevant against BJJ practitioners who try to close the distance.</li>
          <li><strong>Range management</strong> — Thai boxing develops sophisticated understanding of striking range — when you're safe, when you're vulnerable, and how to control the engagement distance.</li>
          <li><strong>Mental toughness</strong> — Taking and delivering strikes under pressure builds a specific kind of mental resilience that grappling-only training doesn't develop.</li>
        </ul>

        <h2>What BJJ Offers</h2>
        <ul>
          <li><strong>Ground dominance</strong> — Once a fight goes to the ground, BJJ training provides overwhelming technical advantage over untrained opponents. The ability to control, escape, and submit from any position is uniquely BJJ.</li>
          <li><strong>Submission skills</strong> — The ability to end a confrontation without permanent injury (via choke or joint lock rather than strikes) has self-defense and legal advantages.</li>
          <li><strong>Non-size-dependent technique</strong> — BJJ's leverage-based mechanics allow smaller practitioners to neutralize larger opponents' physical advantages — more reliably than striking.</li>
          <li><strong>Guard game</strong> — The ability to threaten submissions from the bottom position is unique to BJJ and creates attacks from what every other martial art treats as a purely defensive situation.</li>
        </ul>

        <h2>Self-Defense: Which Is More Practical?</h2>
        <p>The honest answer: it depends on the context. In a real confrontation on the street, most situations end up in the clinch or on the ground — where BJJ's skills are highly applicable. The ability to control an aggressor without striking them can be valuable in many real-world scenarios (preventing someone from running away, restraining without injuring, controlling someone much larger than you).</p>
        <p>However, in environments where there are multiple attackers, weapons, or hard surfaces, going to the ground is extremely dangerous. Muay Thai's ability to deal damage quickly from standing can be more practical in those specific scenarios.</p>
        <p>The consensus among combat sports professionals: BJJ is the most important martial art to know for one-on-one self-defense. Muay Thai is critical for the standup range. Both together cover the full spectrum.</p>

        <h2>For MMA: You Need Both</h2>
        <p>Modern MMA has reached a consensus that BJJ and Muay Thai (or boxing/kickboxing equivalent) form the foundation of an effective MMA game. Since the early UFC days when BJJ specialists dominated due to opponents' groundwork ignorance, the sport has evolved to the point where all elite fighters are competent in both striking and grappling. A BJJ specialist without striking will get knocked out before reaching the ground; a striker without ground work will get submitted.</p>
        <p>Notable combinations: Anderson Silva (Muay Thai base) added BJJ and wrestling to become dominant. Demian Maia (BJJ specialist) developed Muay Thai standup to become a complete threat. Most modern champions train both from early in their careers.</p>

        <h2>For Fitness</h2>
        <p>Both arts provide exceptional fitness. Muay Thai builds cardiovascular conditioning, explosive power, and whole-body strength through pad work, sparring, and drilling. BJJ builds functional strength, body awareness, and mental resilience through rolling. If weight loss and general conditioning are priorities, Muay Thai training burns slightly more calories per hour due to the striking and cardio emphasis. If mobility, body awareness, and problem-solving under physical stress appeal more, BJJ wins.</p>

        <h2>For Beginners</h2>
        <p>BJJ is generally more beginner-friendly. Sparring in BJJ (rolling) allows progressive resistance without the injury risk of taking strikes. The tap-out mechanism creates a safe feedback loop that beginners can engage with immediately. Muay Thai sparring, even at recreational levels, involves contact that some beginners find discouraging. Both arts have beginner programs that minimize injury, but BJJ's fundamental safety advantage makes it more accessible.</p>

        <h2>Training Both: The Modern Approach</h2>
        <p>The ideal combat sports curriculum: 3-4 BJJ sessions per week plus 2-3 Muay Thai sessions per week. This builds a complete striking-and-grappling game. Most MMA gyms offer both and the cross-pollination — learning to grapple someone who's also thinking about striking, learning to strike someone who understands grappling range — produces more realistic and complete martial artists. Use AIBJJ to track your BJJ rolling progress even as you cross-train in Muay Thai.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block not-prose">Start Your BJJ Journey with AIBJJ →</Link>
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
