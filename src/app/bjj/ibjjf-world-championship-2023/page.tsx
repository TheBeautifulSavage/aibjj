import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "IBJJF World Championship 2023 | AIBJJ",
  description: "Comprehensive coverage of the 2023 IBJJF World Championship, featuring top competitors, champions, and historic moments in Brazilian Jiu-Jitsu.",
};

export default function Page() {
  const tags = ["IBJJF", "World Championship", "Brazilian Jiu-Jitsu", "Grappling"];
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
        <h1 className="text-4xl font-black sm:text-5xl">IBJJF World Championship 2023</h1>
        <p className="mt-4 text-xl text-zinc-400">Comprehensive coverage of the 2023 IBJJF World Championship, featuring top competitors, champions, and historic moments in Brazilian Jiu-Jitsu.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Overview</h2>
            <p>The IBJJF World Championship 2023 took place in Las Vegas, Nevada, representing the pinnacle of competitive Brazilian Jiu-Jitsu. The tournament attracted elite grapplers from around the globe, competing across multiple weight classes and belt levels from white belt through black belt. As the most prestigious BJJ tournament in the world, the Worlds championship serves as the ultimate test of skill, technique, and mental fortitude. Athletes spend years preparing for this single event, making it the most coveted title in the sport. The 2023 edition continued the tradition of showcasing the highest level of technical jiu-jitsu, with competitors demonstrating innovative techniques, superior conditioning, and strategic mastery. The event featured divisions for both men and women across gi and no-gi formats, with thousands of competitors participating across all age and experience levels, making it the largest gathering of BJJ athletes annually.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Results and Champions</h2>
            <p>The 2023 World Championship crowned multiple champions across all divisions. In the black belt absolute division, one of the most prestigious titles, competitors fought for supremacy in the sport's highest echelon. The lighter weight classes featured intense competitions with multiple submission victories and technical displays. Top-ranked competitors like Felipe Pena, Kaynan Dutton, and other elite black belts competed for the coveted titles. Women's divisions also showcased exceptional talent, with champions like Beatriz Mesquita and other leading female competitors demonstrating world-class technique. The no-gi divisions produced their own champions, with athletes utilizing submission-heavy styles and leg lock techniques. Multiple weight classes across all belt levels crowned champions, with competitors from Brazil, USA, and international teams claiming victories. The results reflected the global nature of modern BJJ, with representation from multiple nations and training lineages, demonstrating how the sport has evolved into a truly worldwide competitive arena with diverse tactical approaches and technical innovations.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Notable Matches and Moments</h2>
            <p>The 2023 World Championship featured several memorable matches that captivated the BJJ community. High-level black belt matches showcased intricate positional exchanges, with competitors demonstrating years of technical refinement. Several matches went to advantage points, with athletes making last-second escapes and sweeps. Submission victories provided dramatic finishes, including various leg lock sequences and choke techniques. Rematches between previous rivals added narrative intensity, with athletes seeking redemption or solidifying their dominance. Young competitors made breakthrough performances against established champions, signaling the next generation's emergence in competitive BJJ. The absolute divisions produced particularly compelling matches, featuring athletes across different body types and styles competing for the ultimate championship. Emotional celebrations and technical exchanges demonstrated the sport's combination of athleticism and artistry. Multiple matches went the distance, with judges' decisions determining champions in closely contested affairs. These memorable moments contributed to the tournament's status as BJJ's most prestigious event, inspiring athletes worldwide and generating extensive coverage across the sport's media platforms and social networks.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Historical Significance</h2>
            <p>The 2023 IBJJF World Championship continued a legacy spanning decades as Brazilian Jiu-Jitsu's most important competition. The event represents the culmination of the sport's competitive calendar, where athletes earn ranking points and establish themselves as world-class competitors. Championship titles carry immense prestige within the BJJ community, with winners gaining significant credibility and sponsorship opportunities. The tournament's history reflects BJJ's evolution from a Brazilian martial art to a global sport with millions of practitioners. Past World Champions have become legendary figures in the sport, and their legacies influence training methodology and technical development worldwide. The 2023 edition occurred during BJJ's period of explosive growth, with increased media coverage, athlete professionalization, and international participation. The event demonstrated how the sport has become increasingly technical and competitive, with athletes from diverse backgrounds achieving championship success. The championship's significance extends beyond individual victories, shaping the sport's direction and establishing technical standards. Champions become ambassadors for the sport, influencing how future generations train and compete, making the World Championship the most meaningful achievement in Brazilian Jiu-Jitsu.</p>
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
