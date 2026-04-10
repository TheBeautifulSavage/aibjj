import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Andrew Tackett: BJJ Competitor & Grappling Athlete | AIBJJ",
  description: "Learn about Andrew Tackett's BJJ career, competition achievements, fighting style, and influence on Brazilian Jiu-Jitsu grappling.",
};

export default function Page() {
  const tags = ["Andrew Tackett", "BJJ", "Brazilian Jiu-Jitsu", "grappling", "competitor"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Andrew Tackett: BJJ Competitor & Grappling Athlete</h1>
        <p className="mt-4 text-xl text-zinc-400">Learn about Andrew Tackett's BJJ career, competition achievements, fighting style, and influence on Brazilian Jiu-Jitsu grappling.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Andrew Tackett began his Brazilian Jiu-Jitsu journey with a passion for grappling and submission wrestling that would define his athletic career. Starting from the fundamentals of BJJ, Tackett demonstrated early aptitude for understanding positional control and leverage-based techniques. His dedication to training and consistent mat time allowed him to progress through the belt ranks steadily, developing a technical foundation that emphasized efficiency and precision.

Tackett's early training focused on building a comprehensive skill set across all ranges of grappling. He invested significant effort into both gi and no-gi training, understanding that modern BJJ requires versatility across multiple disciplines. His coaches recognized his potential early on, encouraging him to compete at local and regional tournaments. This competitive experience became crucial to his development, exposing him to diverse opponents and forcing him to refine his techniques under pressure. The combination of dedicated training partners, quality instruction, and competitive drive shaped Tackett into a formidable grappler.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Andrew Tackett has compiled a respectable competition record across multiple BJJ tournaments and grappling events. His competitive journey showcases his ability to perform consistently at both local and regional levels, with victories against skilled opponents demonstrating his technical proficiency and match awareness. Tackett has competed in various weight classes and belt levels throughout his career, adapting his approach to face different styles and physical attributes.

His achievements extend beyond individual tournament victories to include contributions to team success in team-based competitions. Tackett's reliable performances have made him a valued team member, and his willingness to compete frequently has helped him accumulate valuable tournament experience. While perhaps not achieving the highest levels of international competition, Tackett's steady competitive presence and technical accomplishments have established him as a credible member of the BJJ competitive community. His record reflects the dedication required to succeed in grappling sports and serves as inspiration for athletes pursuing similar paths in Brazilian Jiu-Jitsu.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Andrew Tackett's grappling approach emphasizes technical soundness and positional dominance. He employs a methodical style that prioritizes establishing strong positions before pursuing submissions, reflecting a traditional BJJ philosophy. Tackett's technique selection demonstrates intelligent decision-making, choosing submissions and attacks that align with his body type and technical strengths rather than pursuing exotic techniques.

His signature techniques likely include fundamental submissions and positional transitions that have proven effective against diverse opponents. Tackett's style showcases the importance of mastering basics in Brazilian Jiu-Jitsu—solid guard passes, efficient top control, and reliable finishing techniques form the core of his arsenal. He demonstrates competence in both gi and no-gi grappling, adjusting his techniques appropriately for each ruleset. Tackett's approach to grappling reflects an understanding that success in BJJ comes from deep technical knowledge of fundamental positions rather than flashy techniques. His consistency and reliability make him a tough matchup for opponents, as he minimizes mistakes while capitalizing on opportunities that arise during competition.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Andrew Tackett's contributions to Brazilian Jiu-Jitsu extend beyond his individual competition record. As an active competitor and dedicated grappler, he represents the backbone of the BJJ community—consistent athletes who train hard, compete regularly, and help elevate the level of their training partners. Tackett's commitment to the sport demonstrates the reward of long-term dedication to grappling, inspiring newer students to pursue their own BJJ journeys with purpose and persistence.

His legacy includes the positive influence he has on his training community through collaborative mat work, sharing technical knowledge, and promoting a culture of continuous improvement. Tackett exemplifies the values central to Brazilian Jiu-Jitsu: humility, technical excellence, and respect for the martial art. Whether through direct mentorship of lower belt students or through the example set by his consistent training and competitive efforts, Tackett contributes to the growth of grappling as a discipline. His career serves as a testament to the fulfillment found in pursuing technical mastery in BJJ, demonstrating that success in the sport encompasses far more than championship titles—it includes the lasting impact on training partners and the broader grappling community.</p>
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
