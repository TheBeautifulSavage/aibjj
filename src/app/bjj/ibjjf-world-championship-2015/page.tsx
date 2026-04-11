import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "IBJJF World Championship 2015 | AIBJJ",
  description: "Comprehensive overview of the 2015 IBJJF World Championship, featuring elite Brazilian Jiu-Jitsu competitors, champions, and historic moments.",
};

export default function Page() {
  const tags = ["IBJJF", "World Championship", "Brazilian Jiu-Jitsu", "2015"];
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
        <h1 className="text-4xl font-black sm:text-5xl">IBJJF World Championship 2015</h1>
        <p className="mt-4 text-xl text-zinc-400">Comprehensive overview of the 2015 IBJJF World Championship, featuring elite Brazilian Jiu-Jitsu competitors, champions, and historic moments.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Overview</h2>
            <p>The 2015 IBJJF World Championship took place in Long Beach, California, representing one of the most prestigious Brazilian Jiu-Jitsu tournaments in the sport. Held annually by the International Brazilian Jiu-Jitsu Federation, the event attracts the world's elite grapplers across all belt levels and weight classes. The championship features divisions for white, blue, purple, brown, and black belts, with separate categories for men and women across various age groups. Athletes from around the globe converge to compete for the title of World Champion, making it the sport's most coveted achievement. The tournament showcases technical excellence, strategic depth, and the evolving nature of modern BJJ competition. With hundreds of matches across multiple mats, the World Championship demonstrates the global growth and popularity of Brazilian Jiu-Jitsu, attracting spectators, coaches, and media coverage from around the world.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Results and Champions</h2>
            <p>The 2015 World Championship produced numerous champions across all divisions. In the black belt heavyweight division, notable competitors competed for supremacy in one of the most stacked weight classes. The super heavyweight division saw exceptional performances from top-ranked athletes. The lighter weight classes featured emerging talents and established champions defending their titles. Women's divisions showcased the growing strength and technical proficiency of female competitors in Brazilian Jiu-Jitsu. Competitors like Rafael Mendes, the Miyao brothers, and other elite athletes demonstrated exceptional grappling skills. The results reflected the highest level of competition, with champions displaying mastery of fundamental techniques combined with innovative approaches. Multiple weight classes were decided by close matches, emphasizing the competitive depth at the world championship level and the minimal margins separating elite performers in the sport.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Notable Matches and Moments</h2>
            <p>The 2015 World Championship featured several memorable encounters that highlighted the technical and athletic excellence of modern BJJ. Matches between top-ranked competitors showcased innovative leg lock systems, foot lock variations, and refined guard passing techniques. Several divisions produced unexpected upsets where underdog competitors defeated higher-ranked athletes through tactical execution and conditioning. Women's matches demonstrated the sport's technical evolution, with competitors displaying increasingly sophisticated techniques and strategies. The final matches in major divisions drew significant spectator interest, with packed mats and enthusiastic crowds supporting their favorite competitors. Performances by multiple-time champions facing hungry challengers created dramatic moments throughout the tournament. Some matches went to overtime periods, showcasing intense competition and athletic endurance. The event highlighted the depth of talent in Brazilian Jiu-Jitsu, with competitors from various countries and training camps performing at extraordinary levels.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Historical Significance</h2>
            <p>The 2015 IBJJF World Championship represented a pivotal moment in Brazilian Jiu-Jitsu's continued global expansion and sport development. The event showcased the technical evolution of the sport, particularly regarding leg lock systems and heel hook techniques that were becoming increasingly prevalent in high-level competition. The championship served as a proving ground for emerging talent and established stars, cementing legacies and launching careers of future champions. The tournament highlighted growing participation from non-traditional BJJ countries, demonstrating the sport's internationalization. Women's participation and achievement in 2015 marked continued progress toward gender equality in competitive Brazilian Jiu-Jitsu. The event provided a snapshot of the sport's technical direction and competitive landscape during a transformative period. Results and performances from the 2015 World Championship influenced training methodologies and competitive strategies globally, as athletes studied champion techniques and tactics to improve their own games.</p>
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
