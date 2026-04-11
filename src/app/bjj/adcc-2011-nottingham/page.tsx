import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "ADCC 2011 Nottingham: Wrestling's Premier Grappling Event | AIBJJ",
  description: "Comprehensive coverage of ADCC 2011 in Nottingham, featuring top submission grappling competitors, championship results, and historic moments.",
};

export default function Page() {
  const tags = ["ADCC 2011", "grappling", "submission wrestling", "Nottingham", "BJJ"];
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
        <h1 className="text-4xl font-black sm:text-5xl">ADCC 2011 Nottingham: Wrestling's Premier Grappling Event</h1>
        <p className="mt-4 text-xl text-zinc-400">Comprehensive coverage of ADCC 2011 in Nottingham, featuring top submission grappling competitors, championship results, and historic moments.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Overview</h2>
            <p>ADCC 2011 took place in Nottingham, England, continuing the prestigious Abu Dhabi Combat Club's tradition of hosting the world's elite submission grappling competitors. The event remained one of the most significant grappling tournaments globally, attracting top wrestlers, judokas, and Brazilian jiu-jitsu athletes across multiple weight divisions. ADCC tournaments are known for their strict ruleset emphasizing submission finishes while limiting heel hook usage, distinguishing them from other grappling formats. The 2011 edition featured intense competition across men's and women's divisions, with both absolute and weight-class tournaments determining champions. The event showcased the highest level of technical grappling, with competitors employing diverse martial arts backgrounds including wrestling, judo, sambo, and BJJ. Athletes traveled from across the globe to compete for the prestige of winning an ADCC title, making it one of the most coveted championships in submission grappling.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Results and Champions</h2>
            <p>The 2011 ADCC championships produced several notable champions across its various weight divisions. Marcio Cruz defeated strong opposition in his respective division, while other elite competitors battled for supremacy in their categories. The absolute division, featuring competitors regardless of weight class, showcased some of the most exciting and unpredictable matches of the tournament. Female competitors demonstrated exceptional technical skill, with champions proving themselves among the elite grapplers worldwide. Many weight divisions saw victories from both established champions defending their titles and hungry challengers making their mark at the ADCC level. The tournament results reflected the diverse skill sets present, with wrestlers, judokas, and BJJ specialists all achieving success. These championships served as crucial stepping stones for athletes establishing or maintaining their legacies in submission grappling. The victory margins and methods of wins demonstrated evolving technical approaches in competitive grappling during this era.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Notable Matches and Moments</h2>
            <p>ADCC 2011 Nottingham featured several memorable encounters that captivated grappling enthusiasts. High-level athletes engaged in technical wrestling exchanges, explosive takedowns, and dynamic positional battles. Submission attempts showcased the rule set's emphasis on legitimate finishing techniques, with competitors hunting leg locks, arm triangles, and other submission holds throughout matches. The tournament highlighted the increasing technical sophistication of submission grappling, particularly in leg lock systems and leg reaping techniques. Several matches went to decision, with judges evaluating advantages and positional superiority. The event demonstrated the tactical depth of ADCC competition, where athletes balanced offensive aggression with defensive responsibility. Veteran competitors faced rising talents, creating generational matchups that defined the sport's competitive landscape. Epic performances in the absolute division proved particularly thrilling, as different weight classes battled for ultimate supremacy. These encounters produced technical innovations and tactical approaches that influenced subsequent grappling competitions.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Historical Significance</h2>
            <p>ADCC 2011 Nottingham represented a pivotal moment in submission grappling's evolution during the 2010s. The tournament underscored grappling's global reach, attracting world-class competitors from multiple continents and martial arts backgrounds. This event continued establishing ADCC as the premiere submission grappling championship, rivaling major BJJ tournaments in prestige and competitor caliber. The 2011 edition demonstrated the sport's technical advancement, with athletes employing increasingly sophisticated leg lock systems and positional strategies. The tournament highlighted growing diversity in competitive grappling, with wrestlers and judokas competing successfully alongside pure BJJ athletes. ADCC 2011 helped solidify submission grappling's position as a legitimate competitive sport, featuring rule sets emphasizing technique and safety. The event's legacy influenced subsequent grappling competitions' formats and technical standards. For many competitors, success at ADCC 2011 launched or elevated their grappling careers significantly. The tournament remains an important reference point for understanding competitive submission grappling's development during this transformative period for the sport.</p>
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
