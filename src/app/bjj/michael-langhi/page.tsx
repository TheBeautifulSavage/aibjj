import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Michael Langhi: BJJ Legend and Competitor | AIBJJ",
  description: "Explore Michael Langhi's BJJ career, achievements, fighting style, and legacy in Brazilian Jiu-Jitsu competition history.",
};

export default function Page() {
  const tags = ["Michael Langhi", "Brazilian Jiu-Jitsu", "BJJ competitor", "grappling", "jiu-jitsu championships"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Michael Langhi: BJJ Legend and Competitor</h1>
        <p className="mt-4 text-xl text-zinc-400">Explore Michael Langhi's BJJ career, achievements, fighting style, and legacy in Brazilian Jiu-Jitsu competition history.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Michael Langhi is a prominent Brazilian Jiu-Jitsu competitor who has made significant contributions to the sport at the highest levels of competition. Born and raised in Brazil, Langhi developed a passion for BJJ from an early age, training rigorously to master the fundamental and advanced techniques of grappling. His commitment to the art led him to compete in major international tournaments, where he began establishing himself as a formidable athlete in his weight class.

Langhi's early competition experience shaped his technical development and competitive mindset. Through years of dedicated training and competition, he refined his approach to grappling, developing a balanced game that combined strong fundamentals with innovative techniques. His progression through the ranks demonstrated his adaptability and willingness to evolve his game, earning respect from coaches, teammates, and competitors alike. This foundation prepared him for the intense demands of elite-level BJJ competition.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Throughout his competitive career, Michael Langhi has competed in prestigious BJJ tournaments and events, facing some of the world's best grapplers. His performances in major competitions showcased his technical proficiency and mental toughness under pressure. Langhi has competed across different weight classes and categories, demonstrating his versatility and skill across various competitive formats. His results have consistently placed him among the top competitors in the international BJJ scene.

Langhi's competition achievements reflect his dedication to excellence and continuous improvement. He has earned recognition through his performances at IBJJF events and other major grappling competitions. His ability to adapt his game plan against different opponents and successfully execute his techniques under tournament conditions has defined his career. Langhi's competitive spirit and drive to succeed have made him a respected figure in the global BJJ community, inspiring younger athletes to pursue excellence in the sport.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Michael Langhi is known for his technical, methodical approach to Brazilian Jiu-Jitsu. His fighting style emphasizes strong positional control, efficient movement, and precise technique execution. Langhi's game reflects a deep understanding of leverage and timing, allowing him to control opponents while minimizing energy expenditure. His approach demonstrates the importance of fundamental techniques performed at the highest level of proficiency.

Langhi's signature techniques showcase his grappling expertise, with particular strengths in top position control, transitions, and submissions. He has developed a systematic approach to breaking down opponents, using positional dominance to set up finishing techniques. His wrestling background complements his BJJ skills, giving him exceptional leg control and passing ability. Langhi's technical proficiency and ability to implement his game plan consistently against elite competition have made him a valuable resource for studying advanced grappling mechanics and competition strategy.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Michael Langhi's contributions to Brazilian Jiu-Jitsu extend beyond his competition results. As an accomplished competitor and instructor, he has influenced the development of technical approaches within the sport. His emphasis on fundamental technique and positional control has shaped how many athletes approach their grappling training. Langhi's success at the highest levels of competition has demonstrated the effectiveness of his methods, inspiring coaches and students to incorporate similar principles into their training.

Langhi's impact on the BJJ community reflects his commitment to the sport's development and the sharing of knowledge. Through his competition results, teaching, and technical innovations, he has contributed to the evolution of modern grappling. His legacy as a competitor and instructor continues to influence the next generation of Brazilian Jiu-Jitsu athletes, emphasizing the importance of technical excellence, consistency, and continuous improvement in achieving success at elite levels of competition.</p>
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
