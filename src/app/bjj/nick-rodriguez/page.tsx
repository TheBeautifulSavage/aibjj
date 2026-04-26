import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Nick Rodriguez: BJJ Athlete Profile & Career | AIBJJ",
  description: "Comprehensive biography of Nick Rodriguez, elite BJJ competitor. Learn about his achievements, techniques, and influence on Brazilian Jiu-Jitsu.",
};

export default function Page() {
  const tags = ["Nick Rodriguez", "BJJ", "Brazilian Jiu-Jitsu", "Grappling", "MMA"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Nick Rodriguez: BJJ Athlete Profile & Career</h1>
        <p className="mt-4 text-xl text-zinc-400">Comprehensive biography of Nick Rodriguez, elite BJJ competitor. Learn about his achievements, techniques, and influence on Brazilian Jiu-Jitsu.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Nick Rodriguez emerged as one of the most promising grapplers of his generation, beginning his BJJ training in his teenage years with a fierce dedication to the sport. Coming from a wrestling background, Rodriguez brought the fundamental strength and positional awareness that wrestling develops, translating those skills seamlessly into Brazilian Jiu-Jitsu. His early training focused on building a solid foundation in fundamentals while developing his own unique style that combined aggressive wrestling-based takedowns with sophisticated submission attacks. Rodriguez trained under experienced coaches who recognized his potential and nurtured his competitive instincts. His transition from novice to elite competitor happened relatively quickly, showcasing natural athleticism combined with technical proficiency. By his late teens and early twenties, Rodriguez was already competing at high levels, gaining recognition in major BJJ tournaments and building a reputation as a relentless competitor. His work ethic and willingness to test himself against top-tier opponents accelerated his development, establishing him as a rising star in the grappling community.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Nick Rodriguez's competition record demonstrates his consistent performance at the highest levels of Brazilian Jiu-Jitsu. He has competed successfully in multiple weight classes and achieved notable victories over established competitors in prestigious tournaments including IBJJF events and submission-only competitions. His results showcase his ability to adapt his game against various styles and skill levels, winning matches through both points and submissions. Rodriguez has earned recognition for his performances in both gi and no-gi grappling, proving his versatility across different BJJ formats. His tournament placements have consistently placed him among the elite competitors in his division, earning him invitations to elite-level competitions and superfight opportunities. Beyond traditional BJJ tournaments, Rodriguez has also competed in submission wrestling and has transitioned into MMA, where he continues to leverage his grappling expertise. His competitive resume reflects not just wins and losses, but the quality of opposition faced and the methods of victory, demonstrating a complete skill set that includes takedowns, positional control, submissions, and points-based strategies.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Nick Rodriguez's fighting style is characterized by aggressive wrestling-based offense combined with technical submission grappling. His signature approach emphasizes dominant positional control before pursuing submissions, reflecting his wrestling background while incorporating sophisticated BJJ fundamentals. Rodriguez excels at wrestling-based takedowns and uses leg attacks effectively, particularly leg locks which have become increasingly prominent in his game at higher competition levels. His submission attacks are technical and methodical, often setting up sequences that capitalize on positional advantages. Rodriguez demonstrates strong pressure passing skills and excels in top position, making him difficult to escape from once he achieves dominant control. His guard work, both offensive and defensive, continues to develop as he integrates modern leg lock systems with traditional guard techniques. Rodriguez's pace and intensity create challenges for opponents, forcing them to constantly defend against multiple threats. His ability to chain techniques together and create submission angles from various positions makes him a multi-faceted threat. Whether competing in gi or no-gi, Rodriguez adapts his technical arsenal effectively while maintaining his core strengths in wrestling and positional dominance.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Nick Rodriguez represents a generation of grapplers who successfully bridge wrestling and Brazilian Jiu-Jitsu, demonstrating that wrestling fundamentals combined with technical grappling creates formidable competitors. His approach to the sport has influenced younger athletes to develop well-rounded games that incorporate wrestling-based pressure and modern leg lock systems. Rodriguez's success in both gi and no-gi competition, along with his MMA ventures, showcases the applicability of BJJ across multiple combat sports formats. As the sport continues evolving, Rodriguez's emphasis on athleticism, positional dominance, and submission technical proficiency aligns with contemporary grappling trends. His willingness to compete against elite-level opposition and test his skills in varied formats has contributed to the competitive elevation of the sport overall. Rodriguez's career trajectory continues to shape how emerging grapplers approach their training and competition strategy. His legacy extends beyond personal achievements to influencing training methodologies and competitive standards within the BJJ community, establishing new benchmarks for what elite-level grappling requires.</p>
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
