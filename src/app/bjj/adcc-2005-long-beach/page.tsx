import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "ADCC 2005 Long Beach: Premier Grappling Championship | AIBJJ",
  description: "ADCC 2005 Long Beach was a landmark submission grappling championship featuring elite competitors from BJJ, wrestling, and catch wrestling disciplines.",
};

export default function Page() {
  const tags = ["ADCC 2005", "grappling", "BJJ", "Long Beach", "submission wrestling"];
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
        <h1 className="text-4xl font-black sm:text-5xl">ADCC 2005 Long Beach: Premier Grappling Championship</h1>
        <p className="mt-4 text-xl text-zinc-400">ADCC 2005 Long Beach was a landmark submission grappling championship featuring elite competitors from BJJ, wrestling, and catch wrestling disciplines.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Overview</h2>
            <p>ADCC 2005 took place in Long Beach, California, representing one of the most prestigious submission grappling tournaments in the world. The event brought together elite competitors from diverse grappling backgrounds including Brazilian Jiu-Jitsu, freestyle wrestling, Greco-Roman wrestling, and catch wrestling. The tournament maintained ADCC's reputation for hosting absolute weight class divisions alongside traditional weight categories, allowing fighters to test themselves against the best regardless of size. The event featured both male and female divisions, showcasing the growing prominence of women in competitive grappling. The Long Beach venue provided a major platform for grappling athletes to gain international recognition and compete for substantial prize money. The tournament's format emphasized submission finishes while awarding points for takedowns, guard passes, and positional control, making it a true test of complete grappling skill across all disciplines.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Results and Champions</h2>
            <p>ADCC 2005 produced several memorable champions across its divisions. The heavyweight and absolute divisions featured some of the tournament's most compelling matchups, with wrestlers and BJJ athletes competing at the highest level. Roger Huerta emerged as a standout performer, demonstrating the effectiveness of wrestling-based grappling at the elite level. The middleweight and lighter weight divisions showcased technical proficiency from competitors who had trained extensively in submission grappling. The women's divisions highlighted rising talent in female grappling, with competitors displaying increasing skill levels and athleticism. Several international competitors made their mark, reinforcing ADCC's status as a truly global competition. The tournament results influenced the evolution of grappling techniques and training methodologies, as top competitors analyzed the winning strategies employed by champions. Notable finalists pushed each other to their limits, creating exciting matches that demonstrated the convergence of different grappling styles at the championship level.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Notable Matches and Moments</h2>
            <p>ADCC 2005 featured several matches that captivated the grappling community and influenced future competition. The absolute division matches were particularly intense, showcasing dramatic scrambles and submission attempts from athletes with diverse technical backgrounds. Several bouts went to decision, creating controversial moments that sparked discussion about scoring and judging in submission grappling. Outstanding displays of wrestling defense and BJJ submission attempts made for compelling viewing. Competitors demonstrated improved leg lock techniques, reflecting the growing emphasis on lower body submissions in the sport. Multiple matches featured exciting exchanges between wrestlers attempting to control and submit, against BJJ athletes utilizing guard and positional transitions. The tournament's pacing and match quality established it as a benchmark event for the grappling community. Submissions by heel hook, armlock, and choke demonstrated the technical depth competitors had developed. These matches became reference points for coaches analyzing high-level grappling tactics and strategy development.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Historical Significance</h2>
            <p>ADCC 2005 Long Beach represented a critical moment in modern grappling history, occurring during a period of significant evolution in submission wrestling technique and methodology. The tournament demonstrated the increasing crossover between wrestling and BJJ, as elite athletes from both disciplines competed at equal levels. Results from ADCC 2005 influenced training camps worldwide, with coaches analyzing techniques and strategies employed by competitors. The event reinforced California's position as a major grappling hub, supporting the growth of submission wrestling on the West Coast. Women's participation at ADCC 2005 marked continued progress in establishing female grappling as a serious competitive discipline. The tournament helped popularize submission grappling among mainstream audiences and influenced the direction of MMA training, as fighters studied techniques employed in the event. ADCC 2005 contributed to the standardization of ruleset discussions and highlighted ongoing debates about scoring systems in submission wrestling. The event's legacy includes inspiring future generations of grapplers and contributing to the technical advancement of the sport across all weight classes and skill levels.</p>
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
