import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "ADCC 2007 Barcelona: Submission Wrestling Championship | AIBJJ",
  description: "Comprehensive overview of ADCC 2007 Barcelona submission wrestling tournament, champions, key matches and historical significance in grappling.",
};

export default function Page() {
  const tags = ["ADCC 2007", "Barcelona", "submission wrestling", "grappling tournament"];
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
        <h1 className="text-4xl font-black sm:text-5xl">ADCC 2007 Barcelona: Submission Wrestling Championship</h1>
        <p className="mt-4 text-xl text-zinc-400">Comprehensive overview of ADCC 2007 Barcelona submission wrestling tournament, champions, key matches and historical significance in grappling.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Overview</h2>
            <p>The ADCC Submission Wrestling World Championship 2007 took place in Barcelona, Spain, representing one of the premier international submission wrestling tournaments. Held every two years, ADCC 2007 continued the tradition of bringing together elite grapplers from around the world to compete in submission-only matches across multiple weight divisions. The tournament featured both gi-less submission wrestling and absolute weight class competitions, attracting top talent from Brazilian Jiu-Jitsu, catch wrestling, and other grappling disciplines. The Barcelona venue provided a prestigious platform for international competitors to test their skills against the world's best. The event showcased the evolution of modern grappling techniques and tactics, with athletes demonstrating increasingly sophisticated leg lock systems, wrestling takedowns, and submission chains. ADCC 2007 Barcelona solidified the tournament's status as one of the most important submission wrestling competitions in the world, drawing significant attention from the international grappling community.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Results and Champions</h2>
            <p>The 2007 ADCC tournament produced several memorable championship performances across its divisions. Roger Gracie competed successfully in the middleweight division, further establishing his reputation as an elite submission wrestler. In the absolute division, showcasing matches between champions across all weight classes, top-level competitors demonstrated their superiority in open competition. The tournament featured emerging talents alongside established names, with competitors from Brazil, the United States, and Europe claiming victories in their respective divisions. The heavyweight and super heavyweight divisions saw intense competition from accomplished wrestlers and jiu-jitsu competitors. Several notable grapplers earned submission victories, demonstrating the high technical level of the event. The results reflected the competitive balance between different grappling styles and the increasing technical sophistication of modern submission wrestling. Winners and medalists from ADCC 2007 Barcelona gained significant credibility and recognition within the professional grappling community, with many leveraging their performances into successful careers.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Notable Matches and Moments</h2>
            <p>ADCC 2007 Barcelona featured several compelling matches that illustrated the evolution of submission wrestling tactics and techniques. Competitors displayed sophisticated leg lock systems that would increasingly define modern grappling in subsequent years. The tournament showcased dramatic submissions, with athletes successfully implementing heel hooks, knee reaping, and other advanced lower body techniques. Matches between established champions and rising competitors provided compelling narratives, demonstrating generational evolution in grappling skill. Several fights went to decision, highlighting the nuanced point system and positional wrestling that characterized ADCC format. Competitors from different backgrounds brought distinct approaches, with wrestlers featuring strong takedown games while BJJ specialists emphasized guard work and leg lock transitions. The absolute division matches were particularly noteworthy, featuring competitors attempting to impose their styles against unfamiliar opponents from different weight classes. These matches produced surprising results and demonstrated the effectiveness of various grappling approaches. Key performances by Brazilian competitors affirmed the dominance of Brazilian Jiu-Jitsu in the submission wrestling world.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Historical Significance</h2>
            <p>ADCC 2007 Barcelona represented a crucial moment in submission wrestling history, occurring during a period of significant technical evolution in grappling. The tournament documented the increasing sophistication and refinement of leg lock techniques, which would become increasingly prevalent in subsequent ADCC competitions. The 2007 event contributed to the growing international profile of submission wrestling as a legitimate sport, attracting elite athletes and media coverage. Results and performances from Barcelona influenced the direction of grappling training worldwide, with competitors studying matches and incorporating successful techniques into their own methods. The tournament demonstrated the effectiveness of modern wrestling integration with submission grappling, particularly regarding takedown-based strategies. ADCC 2007 showcased athletes who would later become legends in submission wrestling history, capturing their performances at important stages of their careers. The Barcelona event reinforced Barcelona's position as a significant venue for international grappling competitions and contributed to the growing prestige of European submission wrestling events. The tournament remains an important reference point for understanding the technical and tactical evolution of modern submission wrestling from the mid-2000s onward.</p>
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
