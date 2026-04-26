import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "ADCC 2003 Rio de Janeiro: Grappling's Premier Event | AIBJJ",
  description: "ADCC 2003 Rio de Janeiro was a landmark grappling tournament featuring elite submission wrestlers and BJJ athletes competing for global supremacy.",
};

export default function Page() {
  const tags = ["ADCC 2003", "grappling tournament", "Brazilian Jiu-Jitsu", "submission wrestling"];
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
<article className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map(tag => (
            <Link key={tag} href={`/bjj/tag/${tag}`}
              className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:border-red-600/50 hover:text-red-400 transition-colors">
              #{tag}
            </Link>
          ))}
        </div>
        <h1 className="text-4xl font-black sm:text-5xl">ADCC 2003 Rio de Janeiro: Grappling's Premier Event</h1>
        <p className="mt-4 text-xl text-zinc-400">ADCC 2003 Rio de Janeiro was a landmark grappling tournament featuring elite submission wrestlers and BJJ athletes competing for global supremacy.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Overview</h2>
            <p>The ADCC Submission Wrestling World Championship 2003 took place in Rio de Janeiro, Brazil, cementing the city's status as grappling's global epicenter. This biennial event attracted the world's most elite submission wrestlers, catch wrestlers, judokas, and Brazilian Jiu-Jitsu practitioners. The tournament featured multiple weight divisions for both men and women, along with a highly competitive absolute division. The format combined traditional submission wrestling rules with elements of BJJ competition, creating a unique ruleset that emphasized positional control and submission technique. The event showcased the growing technical sophistication of the sport, with athletes from diverse grappling backgrounds converging to test their skills against international competition. Held in front of passionate Brazilian crowds, the tournament demonstrated the sport's increasing popularity and professionalization. The 2003 edition continued ADCC's tradition of attracting top talent from every continent, featuring legendary competitors alongside rising stars preparing to define the next era of submission grappling.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Results and Champions</h2>
            <p>The 2003 ADCC produced memorable champions across its weight divisions. Marcio Cruz secured victory in one of the competitive weight classes, demonstrating exceptional technical prowess against world-class opposition. The absolute division showcased phenomenal talent, with competitors from different grappling disciplines proving their superiority through submission wrestling excellence. Women's divisions highlighted the growing strength and technical level of female submission wrestlers, with champions demonstrating that the sport transcended gender limitations. Notable competitors included established ADCC veterans defending their status alongside emerging athletes establishing themselves on the world stage. The tournament results reflected the globalization of grappling, with champions hailing from Brazil, Europe, and other regions. These victories carried immense prestige, as winning an ADCC title represented mastery over the world's most elite competition. The results influenced rankings and positioning within the grappling community for years following the event, shaping future matchups and promotional decisions.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Notable Matches and Moments</h2>
            <p>The 2003 ADCC delivered spectacular grappling action that captivated audiences and defined memorable encounters between elite competitors. Matches showcased varied submission techniques, reversals, and positional transitions that demonstrated the technical depth of modern submission wrestling. Several matches went the distance, decided by advantages and points, highlighting the defensive improvements wrestlers had made since previous ADCC events. Submission victories remained the tournament's most celebrated outcomes, with athletes successfully applying heel hooks, arm locks, and chokes against previously undefeated opponents. The atmosphere in Rio's venue was electric, with passionate fans creating an intensely competitive environment that elevated performances. Matches between rivals renewed longstanding debates about which grappling style reigned supreme. Notable upsets occurred when lesser-known competitors defeated established names, proving that ADCC consistently produced unpredictable outcomes based purely on technical execution. The absolute division matches were particularly memorable, featuring extended battles between massive, elite athletes demonstrating incredible conditioning and technical mastery.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Historical Significance</h2>
            <p>ADCC 2003 Rio de Janeiro represented a crucial moment in grappling's evolution, continuing the tournament's legacy of legitimizing submission wrestling as the sport's ultimate test. The event reinforced Brazil's dominance in grappling while proving that international athletes could compete successfully at the highest levels. The 2003 tournament showcased the technical innovations athletes had developed since the previous ADCC, particularly regarding leg lock techniques and defensive strategies. Competitors from catch wrestling and other disciplines demonstrated that submission wrestling knowledge transcended traditional BJJ training, validating ADCC's inclusive format. The event's success motivated increased investment in grappling training worldwide, inspiring athletes to pursue submission wrestling excellence. Results from Rio influenced the sport's trajectory, establishing new standard-bearers and creating rivalries that would define upcoming competitions. The 2003 tournament remains referenced as a pivotal moment when grappling's global community genuinely represented worldwide talent. Broadcasting and promotion of the event expanded grappling's international audience, contributing to the sport's continued growth and professionalization in subsequent years.</p>
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
