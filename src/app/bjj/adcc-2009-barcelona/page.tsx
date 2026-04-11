import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "ADCC 2009 Barcelona: Grappling Championship | AIBJJ",
  description: "Comprehensive coverage of ADCC 2009 Barcelona, the premier absolute grappling championship held in Spain featuring elite submission wrestling competitors.",
};

export default function Page() {
  const tags = ["ADCC 2009", "Barcelona", "Grappling", "Submission Wrestling", "BJJ Tournament"];
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
        <h1 className="text-4xl font-black sm:text-5xl">ADCC 2009 Barcelona: Grappling Championship</h1>
        <p className="mt-4 text-xl text-zinc-400">Comprehensive coverage of ADCC 2009 Barcelona, the premier absolute grappling championship held in Spain featuring elite submission wrestling competitors.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Overview</h2>
            <p>ADCC 2009 took place in Barcelona, Spain, representing one of the premier submission wrestling championships in the world. The event continued the ADCC tradition of bringing together the best grapplers from various disciplines including Brazilian Jiu-Jitsu, catch wrestling, and judo. The tournament featured both absolute and weight-class divisions, showcasing technical excellence and competitive intensity at the highest level. Barcelona provided an ideal European venue for this prestigious competition, attracting elite athletes from across the globe. The event maintained ADCC's reputation for hosting matches between competitors from different grappling backgrounds, creating unique stylistic matchups. Competitors faced rigorous qualifying rounds before advancing through bracket-style competition. The tournament emphasized submission wrestling as a distinct discipline while welcoming BJJ practitioners at its peak competitive levels. ADCC 2009 Barcelona demonstrated the growing popularity of submission grappling in Europe and solidified the event's status as a world-class championship that transcended traditional BJJ competition formats.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Results and Champions</h2>
            <p>ADCC 2009 Barcelona produced memorable champions across its weight divisions and absolute categories. The tournament showcased dominant performances from established grapplers and rising stars in the submission wrestling scene. Top-seeded competitors faced intense competition throughout the brackets, with several matches going to submission or decision. The absolute division represented the pinnacle of the competition, featuring the tournament's most explosive and technical grapplers regardless of weight class. Champions demonstrated mastery across various positions including leg lock sequences, upper body submissions, and positional control strategies. Several European competitors performed exceptionally well on home soil, while international visitors from North and South America contributed to the tournament's competitive depth. The results reflected the increasing technical sophistication of modern grappling, with competitors displaying advanced leg lock systems and intricate submission chains. Notable competitors who advanced deep into brackets showcased diverse technical approaches. The tournament's decision-making and scoring criteria remained consistent with ADCC standards, emphasizing positional dominance and submission victories. Results from Barcelona 2009 contributed significantly to shaping the competitive landscape of submission wrestling during that era.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Notable Matches and Moments</h2>
            <p>ADCC 2009 Barcelona featured several compelling matches that highlighted the technical diversity of submission wrestling. Close decision victories and exciting submission finishes created memorable moments throughout the competition. High-level grapplers engaged in tactical battles showcasing leg lock systems that were becoming increasingly refined in the ADCC ruleset. Several matches went to the wire with judges' decisions determining advancement, reflecting the competitive parity among elite competitors. Spectacular submission victories including heel hooks and upper body techniques demonstrated the technical mastery of competitors. Matches between stylistically different opponents created fascinating strategic contrasts, with wrestlers employing traditional catch wrestling approaches against modern BJJ techniques. Surprise upsets and unexpected performances from less-favored competitors added drama to the tournament progression. The absolute division featured particularly intense matchups between the tournament's heavyweights, with explosive wrestling exchanges and submission attempts creating compelling viewing moments. Commentary and analysis of matches emphasized the technical nuances and strategic depth of submission grappling at the professional level. Barcelona's crowd provided enthusiastic support, creating an engaging atmosphere for competitors and spectators witnessing world-class grappling competition.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Historical Significance</h2>
            <p>ADCC 2009 Barcelona holds importance in the broader timeline of submission wrestling championship competitions. The event demonstrated Europe's growing investment in hosting premier grappling tournaments, establishing Barcelona as a serious competitive venue. The tournament contributed to the evolution of leg lock techniques, as competitors increasingly incorporated advanced heel hook systems and leg lock chains reflecting contemporary technical progression. ADCC 2009 occurred during a pivotal period in grappling's development, when submission wrestling was gaining mainstream recognition and technical sophistication was accelerating rapidly. The event showcased how different grappling traditions continued merging, with catch wrestling, BJJ, and judo practitioners competing under unified ruleset. Results and performances from Barcelona influenced global grappling training methodologies and competitive preparation strategies. The tournament reinforced ADCC's position as the premier submission wrestling championship, attracting elite competitors seeking validation at the highest level. European success stories from Barcelona encouraged regional grappling development and inspired younger competitors pursuing professional careers. ADCC 2009 remains referenced when discussing the progression of modern grappling techniques and the increasing technical depth of submission wrestling championships during the late 2000s.</p>
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
