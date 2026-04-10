import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Joao Assis: BJJ Pioneer and Grappling Legend | AIBJJ",
  description: "Discover Joao Assis' remarkable BJJ career, competition achievements, signature techniques, and lasting influence on Brazilian Jiu-Jitsu.",
};

export default function Page() {
  const tags = ["Joao Assis", "Brazilian Jiu-Jitsu", "BJJ Champion", "Grappling Legend", "BJJ History"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Joao Assis: BJJ Pioneer and Grappling Legend</h1>
        <p className="mt-4 text-xl text-zinc-400">Discover Joao Assis' remarkable BJJ career, competition achievements, signature techniques, and lasting influence on Brazilian Jiu-Jitsu.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Joao Assis emerged as a pivotal figure in Brazilian Jiu-Jitsu during a transformative era for the sport. Beginning his BJJ training in Brazil, Assis developed his grappling foundation under experienced instructors who recognized his natural athleticism and technical aptitude. His early years in the academy were marked by relentless training and a commitment to mastering fundamental techniques before pursuing advanced strategies. Like many Brazilian grapplers of his generation, Assis was shaped by the competitive culture of Rio de Janeiro, where intense academy rivalries and constant sparring sessions forged elite athletes. His progression through the belt ranks demonstrated consistent improvement and a deep understanding of positioning and leverage. Assis quickly gained recognition within the BJJ community for his technical proficiency and competitive mindset, establishing himself as a formidable competitor who could compete at the highest levels of the sport.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Throughout his competitive career, Joao Assis compiled an impressive resume of tournament victories and accolades that solidified his status as one of Brazilian Jiu-Jitsu's notable champions. He competed successfully in prestigious tournaments across Brazil and internationally, consistently defeating high-level opponents through technical superiority and strategic grappling. Assis earned multiple titles and medals at major BJJ competitions, demonstrating his ability to perform under pressure in high-stakes matches. His achievements extended across different weight classes and competitive formats, showcasing his versatility as a grappler. Assis' success in both gi and submission grappling competitions highlighted his comprehensive understanding of the sport. His tournament victories established him as a respected figure in BJJ circles and contributed significantly to his lineage's reputation for producing quality competitors. These accomplishments not only reflected his individual talent but also demonstrated the effectiveness of the training methodologies and techniques he developed and refined throughout his career.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Joao Assis distinguished himself through a technical, position-focused grappling style that emphasized control, leverage, and systematic progression. His approach to BJJ prioritized fundamental soundness and strategic positioning over flashy, high-risk techniques. Assis was known for his exceptional leg lock game and innovative approaches to lower body submissions, which became hallmarks of his technical arsenal. He demonstrated mastery of guard retention, escape techniques, and pressure-based passing systems that frustrated opponents throughout matches. His instruction emphasized understanding positional hierarchy and the importance of base and leverage in executing effective techniques. Assis' signature techniques reflected his philosophical approach to jiu-jitsu: efficient, effective, and built upon established principles. His ability to adapt his game plan based on opponent styles showcased his technical maturity. Through his competition and instruction, Assis contributed valuable insights into modern grappling methodology, influencing how athletes approach leg lock systems and positional control.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Joao Assis' contribution to Brazilian Jiu-Jitsu extends far beyond his competition record, as he became an influential instructor and lineage builder within the sport. His academy produced numerous successful competitors and contributed meaningfully to the development of BJJ in his region. Assis maintained a commitment to preserving and advancing traditional jiu-jitsu principles while adapting to modern competitive demands. His teaching methodology emphasized detailed technical instruction and systematic skill development, creating an environment where students could excel. Assis helped democratize high-level BJJ instruction, making sophisticated grappling concepts accessible to serious students. His influence on leg lock development and leg attack systems continues to resonate in contemporary Brazilian Jiu-Jitsu, with his technical innovations studied and implemented by modern competitors. Through his academy lineage and the athletes he produced, Joao Assis left an indelible mark on BJJ history. His commitment to technical excellence and systematic instruction established standards that continue influencing how jiu-jitsu is taught and trained today.</p>
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
