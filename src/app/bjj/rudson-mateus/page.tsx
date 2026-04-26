import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Rudson Mateus: Brazilian Jiu-Jitsu Champion Profile | AIBJJ",
  description: "Explore Rudson Mateus' BJJ career, competition achievements, signature techniques, and impact on Brazilian jiu-jitsu. Complete athlete biography.",
};

export default function Page() {
  const tags = ["Rudson Mateus", "Brazilian Jiu-Jitsu", "BJJ Champion", "Grappling", "Jiu-Jitsu Athlete"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Rudson Mateus: Brazilian Jiu-Jitsu Champion Profile</h1>
        <p className="mt-4 text-xl text-zinc-400">Explore Rudson Mateus' BJJ career, competition achievements, signature techniques, and impact on Brazilian jiu-jitsu. Complete athlete biography.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Rudson Mateus emerged as one of Brazilian jiu-jitsu's most exciting competitors in the modern era, bringing explosive athleticism and technical precision to the sport. Beginning his BJJ training in Brazil, Mateus developed his foundation through rigorous training at top academies, where he refined both his fundamental techniques and advanced positional strategies. His early competition experience at local and regional tournaments quickly established him as a rising talent with exceptional wrestling-derived grappling skills and innovative approaches to leg lock systems. Mateus' dedication to continuous improvement and his willingness to evolve his game through various training partners accelerated his progression through the belt ranks. His journey reflects the competitive spirit of contemporary Brazilian jiu-jitsu, where athletes must constantly adapt and develop new technical approaches to remain competitive at elite levels.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Throughout his competitive career, Rudson Mateus has competed at prestigious international BJJ tournaments, earning recognition for his consistent performance and technical excellence. He has competed in both gi and no-gi formats, demonstrating versatility across different rule sets and competition styles. His results at major tournaments showcase his ability to execute advanced techniques under pressure while maintaining composed decision-making during high-stakes matches. Mateus has earned multiple medals at significant grappling competitions, establishing himself among the elite competitors in his weight class. His competitive record reflects not only his technical proficiency but also his mental fortitude and preparation standards. The progression of his results demonstrates continuous improvement and an athlete who challenges himself against increasingly formidable opponents. His participation in prestigious competitions has positioned him as a notable figure in contemporary Brazilian jiu-jitsu competition circles.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Rudson Mateus is recognized for an aggressive, pressure-based grappling style that emphasizes leg lock systems and dynamic lower body attacks. His approach to leg entanglements showcases sophisticated understanding of heel hook mechanics, reaping positions, and modern footlock entries that characterize contemporary no-gi jiu-jitsu. Mateus employs intelligent guard passing with strong positional awareness, combining wrestling fundamentals with Brazilian jiu-jitsu refinement. His technical repertoire includes effective wrestling transitions and takedown integration, allowing him to control match pacing and dictate engagement ranges. Mateus demonstrates excellent hip mobility and lower body control, enabling him to access advanced leg lock positions from various starting points. His signature techniques reflect the evolution of Brazilian jiu-jitsu toward more leg-lock-centric approaches in modern competition. These technical specializations have proven highly effective against elite opposition and continue to influence how contemporary grapplers approach lower body submissions.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Rudson Mateus contributes to Brazilian jiu-jitsu's continued technical evolution, particularly in advanced leg lock application and modern submission systems. His competitive success at elite levels demonstrates the viability of pressure-based, lower-body-focused strategies in contemporary grappling. Through tournament performances and training partnerships with other elite athletes, Mateus influences technical development within the broader BJJ community. His approach to leg entanglements has provided valuable technical perspectives for grapplers studying modern submission chains and positional transitions. As competition in Brazilian jiu-jitsu becomes increasingly sophisticated, athletes like Mateus establish benchmarks for technical excellence and competitive consistency. His presence in elite competition circles continues to raise performance standards while inspiring younger grapplers to develop technical depth and athletic capability. Mateus represents the modern competitive jiu-jitsu athlete who constantly pushes technical boundaries and demonstrates the sport's ongoing evolution toward more refined and sophisticated grappling methodologies.</p>
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
