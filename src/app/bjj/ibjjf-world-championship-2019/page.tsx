import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "IBJJF World Championship 2019 | AIBJJ",
  description: "Comprehensive coverage of the 2019 IBJJF World Championship, the premier Brazilian Jiu-Jitsu tournament. Results, champions, and highlights.",
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
        <h1 className="text-4xl font-black sm:text-5xl">IBJJF World Championship 2019</h1>
        <p className="mt-4 text-xl text-zinc-400">Comprehensive coverage of the 2019 IBJJF World Championship, the premier Brazilian Jiu-Jitsu tournament. Results, champions, and highlights.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Overview</h2>
            <p>The 2019 IBJJF World Championship, officially known as the IBJJF Jiu-Jitsu World Championship, took place in Long Beach, California. This prestigious annual event is widely recognized as the most important grappling tournament in the world, attracting elite competitors from every continent. The championship featured divisions for both men and women across multiple weight classes and belt levels, from white belt through coral belt rank. Competitors spent months preparing for this elite competition, as winning a world title remains the gold standard achievement in Brazilian Jiu-Jitsu. The event showcased the highest level of technical skill, athleticism, and strategic grappling. With thousands of competitors entering various divisions, the 2019 edition continued the tournament's legacy of determining the year's elite champions. The championship format requires athletes to compete in gi jiu-jitsu, emphasizing traditional techniques with the kimono. Spectators and analysts worldwide followed the competition closely, as results significantly impact rankings and career trajectories within the sport.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Results and Champions</h2>
            <p>The 2019 World Championship crowned numerous division champions across weight classes and belt levels. In the heavyweight absolute division, notable champions demonstrated exceptional dominance. Leandro Lo won the heavyweight division and absolute title, solidifying his position as one of the sport's elite competitors. Beatriz Mesquita captured women's heavyweight gold, showcasing excellence against top-tier opposition. Other standout champions included competitors who displayed technical prowess and physical conditioning at the highest level. The lightweight divisions produced several exciting champions, with athletes demonstrating exceptional submission and positional skills. In the absolute division, historically the most prestigious category featuring the tournament's best regardless of weight class, the competition reached remarkable intensity. Female divisions also highlighted the sport's growing depth in women's jiu-jitsu, with champions from Brazil, the United States, and international competitors securing titles. Masters divisions crowned experienced competitors, proving that elite-level jiu-jitsu excellence spans various age groups. Results from these championship matches influenced rankings for years following the tournament and shaped tournament seeding for subsequent years.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Notable Matches and Moments</h2>
            <p>The 2019 World Championship produced several memorable matches that showcased jiu-jitsu's technical depth and competitive intensity. High-level matches featured sophisticated guard systems, innovative passing techniques, and explosive footlock attacks reflecting modern competition trends. Several matches went to advantages and decision points, creating dramatic finishes that captivated audiences. Submission victories demonstrated the effectiveness of leg lock systems that dominated contemporary competition. Guard players displayed intricate techniques including reverse de la riva hooks and complex footlock sequences. Top control specialists showcased positional dominance and submission hunting from dominant positions. Women's divisions featured equally compelling matches with technical exchanges and dominant performances. Upsets occurred throughout the tournament as athletes defied seeding expectations. Matches between multiple-time champions and rising competitors generated significant interest. The absolute division featured particularly intense encounters between the world's best grapplers regardless of weight class. These matches highlighted the evolving technical landscape of competitive jiu-jitsu as innovative techniques gained prominence in elite competition.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Historical Significance</h2>
            <p>The 2019 IBJJF World Championship maintained the tournament's position as jiu-jitsu's most prestigious event and the ultimate measure of competitive excellence. The championship continued traditions established over decades of IBJJF competition while reflecting the sport's continued evolution. This edition illustrated how leg lock systems had gained prominent positions in elite competitors' arsenals, representing significant technical shifts in grappling. The tournament demonstrated jiu-jitsu's exponential growth in participation and technical sophistication globally. Results from 2019 influenced the sport's competitive landscape for subsequent years, affecting rankings, athlete opportunities, and sponsorship trajectories. The championship reinforced Brazil's traditional dominance while highlighting emerging competitive strength from other nations. Women's jiu-jitsu continued gaining recognition and competitive depth, with high-quality matches attracting increased viewership and sponsorship. The 2019 edition represented a moment in jiu-jitsu's professionalization trajectory as streaming and media coverage expanded the sport's reach. Championship titles from this year remained significant career accomplishments for winners. The tournament's results contributed to historical records and competitive narratives that continue shaping jiu-jitsu culture and athlete legacies in the sport's ongoing development.</p>
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
