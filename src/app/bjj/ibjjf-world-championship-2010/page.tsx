import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "IBJJF World Championship 2010 | AIBJJ",
  description: "Comprehensive overview of the 2010 IBJJF World Championship, featuring top competitors, champions, and historic grappling moments.",
};

export default function Page() {
  const tags = ["IBJJF", "World Championship", "BJJ", "Grappling", "2010"];
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
        <h1 className="text-4xl font-black sm:text-5xl">IBJJF World Championship 2010</h1>
        <p className="mt-4 text-xl text-zinc-400">Comprehensive overview of the 2010 IBJJF World Championship, featuring top competitors, champions, and historic grappling moments.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Overview</h2>
            <p>The 2010 IBJJF World Championship took place in Long Beach, California, representing one of the most prestigious Brazilian Jiu-Jitsu tournaments globally. Held annually, the World Championship attracts elite grapplers from every continent to compete for titles across multiple weight divisions and belt levels. The 2010 edition continued the tradition of showcasing the highest level of technical skill, athleticism, and strategic innovation in BJJ competition. Athletes competed in gi divisions spanning from lightweight divisions through super heavyweight, with separate brackets for men and women across various belt levels from white belt through black belt. The tournament served as the definitive measuring stick for competitive BJJ excellence, with victors earning prestigious gold medals and recognition as world champions in their respective categories. The event drew thousands of spectators and attracted significant media attention within the grappling community.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Results and Champions</h2>
            <p>The 2010 World Championship crowned numerous champions across its expansive bracket structure. Roger Gracie dominated the black belt heavyweight division, demonstrating the technical mastery expected of elite competitors. Marcio Cruz, an accomplished competitor, secured significant victories throughout his bracket. In women's divisions, talented female grapplers competed intensely across multiple weight classes, with champions emerging from prominent BJJ lineages and academies. Multiple division winners represented top teams including Gracie Jiu-Jitsu, Alliance, and other respected institutions. The competition featured both established champions defending their titles and rising competitors breaking through to claim world championship status. Results across purple belt, brown belt, and black belt divisions showcased the deep talent pool within competitive BJJ. Many competitors who performed well at the 2010 Worlds subsequently became mainstream figures within professional grappling, validating the tournament's significance as a talent identification platform.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Notable Matches and Moments</h2>
            <p>The 2010 World Championship featured numerous memorable matches showcasing technical excellence and dramatic competition. Black belt matches particularly captivated audiences with intense scrambles, submission attempts, and positional battles between world-class grapplers. Several matches went to overtime or advantage points, creating nail-biting finishes that exemplified the high-stakes nature of world championship competition. Unexpected upsets occurred alongside dominant performances from anticipated favorites, demonstrating the unpredictability inherent in grappling sports. Submission victories earned by elite competitors highlighted the technical depth of modern BJJ, with triangle chokes, arm locks, and leg lock variations appearing throughout brackets. Several matches featured tactical adjustments and counter-strategies that influenced competitive BJJ methodology moving forward. The women's divisions produced equally compelling matches, with female competitors demonstrating sophisticated technical abilities and competitive intensity. Emotional celebrations followed championship victories, reflecting the significance placed on achieving world champion status.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Historical Significance</h2>
            <p>The 2010 IBJJF World Championship represented an important checkpoint in Brazilian Jiu-Jitsu's evolution as a mainstream sport. The tournament occurred during BJJ's significant growth phase, with increasing participation globally and expanding professional opportunities for competitors. Results from 2010 influenced subsequent competitive landscapes, establishing certain competitors as dominant figures and introducing emerging talents to international prominence. The championship demonstrated the sport's technical maturation, with competitors utilizing sophisticated guard systems, footlock techniques, and positional sequences. Successful competitors from 2010 went on to shape professional grappling's trajectory, including those who later competed in ADCC and submission-only formats. The tournament's format and organizational structure influenced how subsequent World Championships operated. Archives of 2010 matches provide historical documentation of BJJ technical standards at a specific evolutionary moment. For many competitors and spectators, the 2010 Worlds represented memorable experiences within their BJJ journeys, contributing to the community's collective history and cultural narrative surrounding competitive grappling excellence.</p>
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
