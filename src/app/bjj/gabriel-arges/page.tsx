import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Gabriel Arges: BJJ Competitor & Grappling Pioneer | AIBJJ",
  description: "Explore Gabriel Arges' BJJ career, competition achievements, fighting style, and impact on Brazilian Jiu-Jitsu grappling.",
};

export default function Page() {
  const tags = ["Gabriel Arges", "BJJ", "Brazilian Jiu-Jitsu", "grappling", "competition"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Gabriel Arges: BJJ Competitor & Grappling Pioneer</h1>
        <p className="mt-4 text-xl text-zinc-400">Explore Gabriel Arges' BJJ career, competition achievements, fighting style, and impact on Brazilian Jiu-Jitsu grappling.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Gabriel Arges emerged as a prominent figure in Brazilian Jiu-Jitsu during the competitive landscape of the late 2000s and 2010s. His introduction to BJJ came through dedicated training at respected academies, where he developed a strong foundation in fundamental grappling techniques. Arges' early years in the sport were marked by consistent progression through the belt ranks, demonstrating the discipline and technical focus necessary to compete at elite levels. His training emphasized both gi and no-gi grappling, allowing him to develop versatility across different rulesets. Throughout his formative years, Arges trained alongside notable competitors and coaches who helped shape his approach to the sport. His commitment to continuous improvement and technical refinement established the groundwork for a successful competitive career that would span multiple weight classes and competition formats.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Gabriel Arges built an impressive competition résumé competing in major BJJ tournaments and events. He competed at various belt levels, from purple through black belt, earning recognition through victories against formidable opponents. Arges participated in prestigious competitions including IBJJF events and other significant grappling tournaments, consistently demonstrating his technical prowess. His competition record reflects strategic match execution and effective application of his technical arsenal. Throughout his competitive journey, Arges earned promotions and accolades that reflected his dedication and skill development. He competed in multiple weight classes, showcasing his adaptability and strength as a complete grappler. His tournament performances established him as a respected competitor within the BJJ community, earning him recognition among peers and coaches alike.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Gabriel Arges developed a comprehensive grappling approach that combined positional control with effective submissions. His style emphasized strong fundamentals, particularly in establishing dominant positions from which he could execute technical transitions. Arges was known for his effective use of guard positions, demonstrating proficiency in both defending and attacking from bottom positions. His passing game reflected systematic, pressure-based approaches that wore down opponents while minimizing risk. In terms of submissions, Arges developed reliable setups for leg lock sequences and upper body submissions, adapting his attacks based on opponent positioning. His no-gi grappling displayed particular strength in dynamic leg lock systems and positional transitions. Arges' technical approach prioritized control and efficiency over flashy techniques, earning respect for his fundamental, pressure-based style that proved effective across different competition formats and ruleset variations.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Gabriel Arges contributed to Brazilian Jiu-Jitsu through both competition and coaching, helping develop the next generation of grapplers. His technical approaches and competitive demonstrations influenced how contemporary grapplers approach fundamental techniques and positional strategy. Arges represented the evolution of BJJ during a period of significant technical development in the sport, bridging classical methodologies with emerging modern concepts. Through teaching and training partnerships, he shared knowledge that benefited students across various academies and competition levels. His competitive legacy serves as a reference point for technical execution and match strategy in Brazilian Jiu-Jitsu. Arges' contributions to the sport demonstrate the importance of fundamental technical mastery and consistent training principles. His influence extends through the athletes he trained and coached, who continue applying and evolving the techniques and philosophies he emphasized throughout his career in the BJJ community.</p>
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
