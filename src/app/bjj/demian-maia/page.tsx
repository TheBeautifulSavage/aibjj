import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Demian Maia: BJJ Grappling Legend Profile | AIBJJ",
  description: "Explore Demian Maia's BJJ career, fighting style, and legacy. Learn how this grappling master revolutionized combat sports.",
};

export default function Page() {
  const tags = ["Demian Maia", "BJJ", "grappling", "UFC", "Brazilian Jiu-Jitsu"];
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <nav className="sticky top-0 z-40 border-b border-zinc-800 bg-[#0a0a0a]/95 backdrop-blur px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map(tag => (
            <Link key={tag} href={`/bjj/tag/${tag}`}
              className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:border-red-600/50 hover:text-red-400 transition-colors">
              #{tag}
            </Link>
          ))}
        </div>
        <h1 className="text-4xl font-black sm:text-5xl">Demian Maia: BJJ Grappling Legend Profile</h1>
        <p className="mt-4 text-xl text-zinc-400">Explore Demian Maia's BJJ career, fighting style, and legacy. Learn how this grappling master revolutionized combat sports.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Demian Maia was born in Santa Catarina, Brazil, and developed a passion for Brazilian Jiu-Jitsu from an early age. He began training in BJJ as a child, immersing himself in the technical aspects of grappling that would define his career. Maia's early years were marked by dedication to mastering positional control and submission techniques, training under experienced coaches who recognized his potential for greatness.

Maia's BJJ foundation proved instrumental in shaping his approach to combat sports. Unlike many fighters who relied heavily on striking, Maia embraced grappling as his primary weapon, developing exceptional wrestling credentials and ground control skills. This commitment to technical excellence in BJJ separated him from contemporaries and created a unique fighting identity that would influence mixed martial arts for decades.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Demian Maia compiled an impressive record throughout his MMA career, competing at the highest levels of professional fighting. He competed in the UFC's welterweight and middleweight divisions, earning multiple title shots and establishing himself as a perennial top contender. Maia's competition record includes victories over notable fighters and demonstrated his ability to perform against elite-level opposition across various weight classes.

Throughout his career, Maia earned respect from the fighting community for his consistency and technical mastery. His achievements extended beyond wins and losses, as he became known for adapting to different opponents and implementing game plans that showcased superior grappling control. Maia's ability to neutralize threats and dominate through positional wrestling made him a formidable competitor, and his achievements highlighted the effectiveness of pure grappling in modern mixed martial arts competition.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Demian Maia's fighting style revolutionized how grappling could be utilized in MMA. Rather than pursuing flashy submissions, Maia excelled at establishing dominant positions, controlling his opponents, and dictating fight pace through superior wrestling and positional awareness. His signature techniques included devastating clinch control, excellent footwork, and methodical ground positioning that frustrated opponents accustomed to explosive striking exchanges.

Maia's approach emphasized cage control and positional dominance, wearing down opponents through relentless pressure and technical superiority. He developed a remarkable ability to neutralize striking threats by closing distance and establishing clinches, controlling opponents against the cage. His signature techniques included trips, takedowns, and positional transitions that demonstrated mastery of fundamental BJJ principles applied in competitive fighting. This technical-focused approach earned Maia recognition as one of the most skilled grapplers in combat sports history.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Demian Maia's legacy fundamentally changed perceptions about grappling effectiveness in modern combat sports. He demonstrated that technical excellence, positional control, and patience could triumph over flashier, more explosive fighting styles. Maia's influence extended beyond his individual success, inspiring younger grapplers to embrace technical mastery and positional wrestling as viable paths to championship success.

Maia's contributions to BJJ and grappling include validating pure jiu-jitsu approaches in professional fighting and proving that methodical, technical grappling could achieve championship-level success. His career influenced how fighters and coaches view ground control, positional dominance, and the importance of wrestling fundamentals. Today, Maia remains respected as a pioneer who elevated grappling standards and demonstrated that technical proficiency, patience, and superior positioning could overcome other attributes in competitive fighting, securing his position as an influential figure in both BJJ and mixed martial arts history.</p>
          </section>
        </div>
        <div className="mt-16 rounded-2xl border border-red-900/30 bg-red-950/20 p-8 text-center">
          <h2 className="text-2xl font-black">Train Smarter with AI Coaching</h2>
          <p className="mt-2 text-zinc-400">Track your training, get personalized coaching, and build your game plan.</p>
          <Link href="/auth/signup" className="mt-5 inline-block rounded-xl bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700">Start Free</Link>
        </div>
        <div className="mt-10">
          <h3 className="text-lg font-bold text-white mb-4">Explore More</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/bjj" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">BJJ Encyclopedia</Link>
            <Link href="/academies" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">Find an Academy</Link>
            <Link href="/bjj-techniques" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">Technique Library</Link>
            <Link href="/coach" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">AI Coach</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
