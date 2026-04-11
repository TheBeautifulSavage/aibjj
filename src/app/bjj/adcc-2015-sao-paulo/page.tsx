import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "ADCC 2015 Sao Paulo: BJJ Submission Grappling | AIBJJ",
  description: "ADCC 2015 Sao Paulo featured top submission grappling athletes competing for world titles. Explore results, champions, and historic moments.",
};

export default function Page() {
  const tags = ["ADCC 2015", "submission grappling", "Sao Paulo", "BJJ tournament"];
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
        <h1 className="text-4xl font-black sm:text-5xl">ADCC 2015 Sao Paulo: BJJ Submission Grappling</h1>
        <p className="mt-4 text-xl text-zinc-400">ADCC 2015 Sao Paulo featured top submission grappling athletes competing for world titles. Explore results, champions, and historic moments.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Overview</h2>
            <p>ADCC 2015 took place in Sao Paulo, Brazil, hosting one of the most prestigious submission grappling tournaments in the world. The event brought together elite competitors from across the globe to compete under the ADCC ruleset, which emphasizes positional control and submission techniques while restricting certain leg lock variations for lower weight classes. The tournament featured multiple weight divisions for both men and women, showcasing the technical depth of submission grappling at the highest level. Held in Brazil, the spiritual home of Brazilian Jiu-Jitsu, ADCC 2015 continued the organization's tradition of discovering and promoting the world's best grapplers. The event attracted thousands of spectators and featured competitors ranging from decorated BJJ black belts to accomplished wrestlers transitioning to submission grappling. The tournament format included absolute divisions where competitors of all sizes competed against each other, making it one of the most demanding tests in grappling competition.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Results and Champions</h2>
            <p>ADCC 2015 produced several notable champions across its weight divisions. Andre Galvao secured his position as one of the sport's elite by competing at the highest levels, while competitors like Demian Maia, known for his MMA background, also tested themselves in submission grappling. The absolute division featured intense matchups with some of the world's most dangerous grapplers. Women's divisions showcased rising talent in female submission grappling, with competitors demonstrating the technical sophistication that had become standard in the sport. The 99kg division and open weight categories attracted international talent from multiple martial arts backgrounds. Several wrestlers transitioned successfully to ADCC competition, proving the compatibility between wrestling fundamentals and submission grappling excellence. The tournament results reinforced established hierarchies while also providing platforms for emerging athletes to announce themselves on the world stage. Champions earned significant prize money and recognition within the global grappling community.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Notable Matches and Moments</h2>
            <p>ADCC 2015 delivered several memorable matches that showcased technical excellence and competitive intensity. High-level matches featured intricate positional exchanges, where establishing dominance and controlling an opponent's posture proved as important as executing flashy submissions. Several matches went to decision, demonstrating the difficulty of finishing elite opponents at this competitive level. The tournament included tense scrambles and explosive takedowns from competitors well-versed in wrestling and judo. Submission finishes that did occur were typically well-earned conclusions to technical battles. The absolute division matchups were particularly compelling, as they pitted specialists from various weight classes against each other. Some competitors successfully transitioned between different grappling styles, adapting their techniques to the ADCC ruleset's specific emphasis. The event featured both established veterans defending their legacies and hungry up-and-coming athletes attempting breakthrough performances. These matches contributed to the evolving technical landscape of submission grappling.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Historical Significance</h2>
            <p>ADCC 2015 Sao Paulo represented a crucial moment in submission grappling's development as a standalone sport. The tournament continued ADCC's legacy of establishing universal standards for competition and identifying the world's elite grapplers under consistent rules. By 2015, ADCC had solidified its reputation as the definitive world championship for submission grappling, attracting top talent across all backgrounds. The event in Brazil specifically reinforced the country's dominance in the sport while also showcasing international competitors proving competitive at the highest levels. ADCC 2015 contributed to the sport's growing mainstream recognition and inspired increased investment in grappling competition globally. The technical innovations displayed at ADCC 2015 influenced training methodologies worldwide, as competitors studied championship-level performances to improve their own skills. The tournament demonstrated that submission grappling could sustain a thriving competitive ecosystem separate from MMA, with athletes dedicating themselves entirely to grappling excellence. Results and performances from ADCC 2015 helped shape training camps and competitive strategies for years afterward.</p>
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
