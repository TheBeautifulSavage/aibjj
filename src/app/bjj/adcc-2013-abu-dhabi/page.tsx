import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "ADCC 2013 Abu Dhabi: World Grappling Championship | AIBJJ",
  description: "Comprehensive guide to ADCC 2013 in Abu Dhabi. Results, champions, notable matches, and historical significance of this elite grappling tournament.",
};

export default function Page() {
  const tags = ["ADCC 2013", "grappling", "BJJ", "Abu Dhabi", "wrestling"];
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
        <h1 className="text-4xl font-black sm:text-5xl">ADCC 2013 Abu Dhabi: World Grappling Championship</h1>
        <p className="mt-4 text-xl text-zinc-400">Comprehensive guide to ADCC 2013 in Abu Dhabi. Results, champions, notable matches, and historical significance of this elite grappling tournament.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Overview</h2>
            <p>The ADCC Submission Wrestling World Championship 2013 took place in Abu Dhabi, United Arab Emirates, continuing the prestigious biennial tradition of elite grappling competition. The event showcased the world's best submission wrestlers, Brazilian Jiu-Jitsu athletes, and grapplers from diverse backgrounds competing across multiple weight divisions for both men and women. ADCC 2013 maintained its reputation as one of the most competitive and respected grappling tournaments globally, attracting elite athletes from around the world. The competition featured the traditional format with absolute divisions where the best grapplers competed regardless of weight class. Abu Dhabi's hosting of the event reinforced its position as the epicenter of international grappling, supported by the Abu Dhabi Combat Club. The tournament emphasized submission wrestling, positional control, and technical excellence. Athletes trained specifically for ADCC's unique ruleset, which differs from standard BJJ competition. The event drew significant attention from the grappling community and served as a measuring stick for world-class competitors.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Results and Champions</h2>
            <p>Rafael Mendes emerged as one of the standout performers at ADCC 2013, demonstrating his exceptional leg lock techniques and positional dominance. The Mendes brothers continued their impressive run in international grappling competition. Multiple weight divisions crowned champions across gi-less submission wrestling, with competitors from Brazil, Europe, and North America claiming titles. The absolute division, featuring the tournament's most elite grapplers regardless of weight, produced thrilling competition among the world's best. Women's divisions showcased the rapidly growing talent pool in female grappling, with accomplished athletes competing at the highest level. The results reflected the ongoing evolution of grappling styles, with leg lock techniques becoming increasingly prominent at the professional level. Champions demonstrated mastery across various positions and submission techniques. The tournament results influenced rankings and prestige within the grappling community, with victory at ADCC considered one of grappling's highest achievements. Medalists gained significant recognition and opportunities within the sport. The competition validated training methodologies and technical approaches of various camps and instructors.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Notable Matches and Moments</h2>
            <p>ADCC 2013 featured several memorable encounters that exemplified high-level grappling competition. Matches showcased innovative leg lock systems that were gaining prominence in modern grappling. The tournament produced dramatic submissions, escapes, and positional reversals that entertained spectators and provided technical instruction for viewers. Several matches went to decision, demonstrating the difficulty of finishing elite competitors. Overtime periods and sudden-death formats added drama to closely contested bouts. Heel hook submissions became increasingly visible, reflecting the evolution of lower body attack systems in international grappling. Unexpected upsets highlighted the competitive depth of the tournament. Dominant performances by certain athletes established their credentials as world-class grapplers. The matches generated discussion within the grappling community about technique, strategy, and rule implications. Particular encounters between notable rivals created compelling narratives. Spectacular reversals and position changes demonstrated the athleticism and technical proficiency of competitors. These matches became reference points for grappling enthusiasts studying technique and competition strategy.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Historical Significance</h2>
            <p>ADCC 2013 represented a pivotal moment in grappling's evolution, particularly the continued legitimization of leg lock systems at the elite level. The tournament highlighted the maturation of women's submission wrestling as a competitive discipline. The event contributed to the professionalization and global expansion of grappling as a sport distinct from traditional BJJ. Results and performances influenced technical development across the grappling community, with athletes incorporating techniques displayed at ADCC into their training. The tournament's hosting in Abu Dhabi underscored the region's investment in combat sports and grappling specifically. ADCC 2013 occurred during a period of significant rule evolution and technical innovation in submission wrestling. The competition documented the state of world-class grappling circa 2013, serving as a historical benchmark. Athletes' performances at the event shaped their legacies and influenced future generations of grapplers. The tournament reinforced ADCC's status as the premier grappling championship, essential for athletes seeking world recognition. Media coverage and documentation made the event accessible to global audiences. ADCC 2013 remains an important reference point for understanding modern grappling's technical and competitive development.</p>
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
