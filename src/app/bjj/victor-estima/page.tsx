import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Victor Estima: BJJ Legend & Grappling Pioneer | AIBJJ",
  description: "Discover Victor Estima's remarkable BJJ career, competition achievements, signature techniques, and lasting influence on Brazilian Jiu-Jitsu.",
};

export default function Page() {
  const tags = ["Victor Estima", "BJJ", "Brazilian Jiu-Jitsu", "Grappling", "Estima Brothers"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Victor Estima: BJJ Legend & Grappling Pioneer</h1>
        <p className="mt-4 text-xl text-zinc-400">Discover Victor Estima's remarkable BJJ career, competition achievements, signature techniques, and lasting influence on Brazilian Jiu-Jitsu.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Victor Estima rose to prominence as one of the most technically gifted grapplers of his generation, representing the legendary Estima family in Brazilian Jiu-Jitsu. Growing up in an environment deeply rooted in grappling culture, Victor was exposed to high-level jiu-jitsu from an early age, training alongside his brothers and developing the technical excellence that would define his career. His dedication to the art saw him progress through the ranks with remarkable consistency, earning his black belt through years of rigorous training and competition experience.

The Estima name became synonymous with innovative grappling and technical sophistication. Victor's early competition years showcased his versatility and problem-solving abilities on the mat. He competed across multiple weight classes and rulesets, demonstrating adaptability that few athletes achieve. His willingness to test himself against elite competition worldwide helped refine his skills and establish him as a formidable force in both gi and no-gi grappling. This period laid the foundation for a career that would influence how modern jiu-jitsu is taught and competed.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Victor Estima compiled an impressive competition record throughout his career, securing victories against some of the sport's most respected competitors. He competed successfully in major BJJ tournaments and absolute divisions, consistently demonstrating the high-level grappling ability expected of elite black belts. His performances in both gi and no-gi competition showcased remarkable technical depth and strategic intelligence.

Beyond tournament medals, Estima's contributions to grappling extended through submission-only events and superfight competitions, where he faced the absolute best grapplers globally. His reputation as a technical wizard attracted challenges from competitors seeking to test themselves against one of the sport's finest. While individual tournament results represent only part of his legacy, Victor's consistent success against quality opposition over many years of competition reinforced his standing among the elite. His ability to adapt and innovate within different rulesets demonstrated the mark of a truly exceptional grappler, earning respect from both peers and the broader jiu-jitsu community.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Victor Estima became known for a technical, systematic approach to grappling that emphasized precise positioning and control before pursuing submissions. His style reflected deep understanding of leverage and biomechanics, allowing him to execute techniques efficiently while managing energy expenditure. The Estima family style emphasized leg lock systems extensively before leg attacks became mainstream in modern BJJ, giving Victor significant technical advantages in these positions.

Estima's signature techniques included advanced footlock variations and lower body submissions that demonstrated innovation and creativity. His leg lock game was particularly dangerous, combining traditional jiu-jitsu fundamentals with experimental approaches that influenced how the technique evolved. Beyond submissions, his guard passing and top control sequences showcased methodical progression and positional dominance. His problem-solving approach meant adapting techniques to specific opponents and ruleset variations. Victor's technical arsenal extended across all positions, but his particular mastery of lower body mechanics made him especially feared in no-gi competition and submission-only events where leg attacks carry heightened significance.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Victor Estima's influence on Brazilian Jiu-Jitsu extends far beyond his personal competition record. As part of the pioneering Estima family, he helped legitimize leg lock systems and lower body submissions during an era when many traditional programs dismissed these techniques. His technical innovations and competition success encouraged the broader jiu-jitsu community to seriously study and develop leg attack systems that are now fundamental to modern grappling.

His teaching contributions and technical philosophy continue influencing how new generations learn jiu-jitsu. The emphasis on systematic positioning, leverage-based technique, and continuous innovation remains relevant to contemporary grappling. Victor's demonstration that technical excellence could achieve consistent success helped establish the standard for modern black belt-level competition. The Estima legacy represents a crucial bridge between traditional jiu-jitsu principles and modern innovative thinking. Through his competition performances, technical contributions, and influence on the next generation of grapplers, Victor Estima helped shape the sport's evolution, ensuring his name remains synonymous with technical excellence and progressive thinking in Brazilian Jiu-Jitsu.</p>
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
