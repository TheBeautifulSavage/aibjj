import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "ADCC 2022 Las Vegas: Results, Champions & Highlights | AIBJJ",
  description: "ADCC 2022 Las Vegas featured elite grappling competition with historic wins by Gordon Ryan, Ffion Davies, and Amanda Alves. Complete results and analysis.",
};

export default function Page() {
  const tags = ["ADCC 2022", "grappling", "submission wrestling", "Las Vegas"];
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
        <h1 className="text-4xl font-black sm:text-5xl">ADCC 2022 Las Vegas: Results, Champions & Highlights</h1>
        <p className="mt-4 text-xl text-zinc-400">ADCC 2022 Las Vegas featured elite grappling competition with historic wins by Gordon Ryan, Ffion Davies, and Amanda Alves. Complete results and analysis.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Overview</h2>
            <p>ADCC 2022 took place in Las Vegas on October 1st, marking a triumphant return for the legendary submission wrestling championship after a four-year hiatus since ADCC 2018. The event was held at the T-Mobile Arena and featured the sport's elite competitors from around the world, showcasing the highest level of grappling talent across multiple weight divisions for both men and women. The tournament format remained true to ADCC tradition, featuring absolute divisions where champions from all weight classes competed regardless of size. The event drew significant attention from the grappling community, with competitors traveling from Brazil, Europe, Asia, and North America to compete for championship titles and the prestigious ADCC medals. The Las Vegas venue provided a world-class setting with state-of-the-art facilities and a substantial audience. The 2022 edition demonstrated the continued growth and evolution of submission wrestling as a respected combat sport, featuring technical displays from both veteran champions and rising stars establishing themselves on the international stage.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Results and Champions</h2>
            <p>Gordon Ryan dominated the men's absolute division, cementing his status as a submission wrestling phenom by securing consecutive victories over elite opponents. In the women's absolute division, Ffion Davies of Wales delivered a dominant performance, while Amanda Alves from Brazil captured her weight class title. Kaynan Duarte won in the middleweight division, continuing his legacy as one of the sport's premier heavyweights. Nicholas Meregali secured victory in the super heavyweight division with impressive submission performances. The female divisions showcased remarkable talent, with athletes like Jessa Khan and Michelle Nicolini competing at their peak. Other notable champions included wrestlers who claimed titles across various weight classes, demonstrating the deep competitive pool ADCC attracts. These results highlighted the global nature of elite grappling, with champions emerging from established powerhouses like Brazil and rising competitive regions. The 2022 tournament provided significant validation for competitors seeking to prove themselves against the world's best, with championship victories carrying substantial prestige within the submission wrestling community and influencing rankings and recognition throughout the sport.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Notable Matches and Moments</h2>
            <p>ADCC 2022 delivered several memorable encounters that defined the event. Gordon Ryan's performances throughout the tournament showcased technical precision and dominant positional control that reminded audiences why he is considered one of the greatest submission wrestlers of his generation. Ffion Davies's victory was particularly significant as a Welsh athlete winning at the prestigious absolute level, representing a breakthrough moment for British grappling on the world stage. Several matches featured spectacular submissions and near-finishes that had the audience captivated throughout the evening. The women's divisions produced exceptionally technical matches, with competitors demonstrating the rapidly improving skill levels in female submission wrestling. Intense scrambles and positional battles highlighted matches across all divisions, with athletes employing sophisticated leg lock systems and upper body submission chains. The heavyweight absolute divisions were particularly notable for their intensity, with larger athletes demonstrating surprisingly technical grappling exchanges. Upset victories over seeded competitors added dramatic elements, while established champions retained their status through dominant displays. These moments reinforced ADCC's reputation for consistently delivering exciting, high-level grappling that appeals to both technical enthusiasts and mainstream audiences seeking compelling athletic competition.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Historical Significance</h2>
            <p>ADCC 2022 marked a critical turning point for submission wrestling following a four-year gap in competition. The successful Las Vegas event demonstrated sustained interest in the sport despite the hiatus and proved that ADCC remained the premier international championship. The tournament showcased evolution in grappling techniques, particularly the increased sophistication of leg lock systems that have dominated modern submission wrestling. The event's return was significant for athlete development, providing elite competitors with the opportunity to test themselves against international opposition and establish ranking legitimacy. ADCC 2022 reinforced the sport's growing mainstream appeal and media interest, with high production values reflecting grappling's professionalization. The strong participation from female athletes highlighted the sport's increasing gender inclusivity and the emergence of world-class female submission wrestlers. Gordon Ryan's performances solidified his historical legacy among the sport's greatest practitioners, while other champions cemented their places in competitive grappling history. The tournament's success suggested momentum for ADCC's future and the continued expansion of submission wrestling internationally. The event served as a benchmark for technical standards and competitive excellence that would influence training methodologies and tournament expectations globally in subsequent years.</p>
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
