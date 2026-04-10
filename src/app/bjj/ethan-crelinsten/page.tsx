import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Ethan Crelinsten: Elite BJJ Competitor & Grappling Pioneer | AIBJJ",
  description: "Explore Ethan Crelinsten's BJJ career, competition achievements, signature techniques, and influence on modern grappling.",
};

export default function Page() {
  const tags = ["Ethan Crelinsten", "BJJ competitor", "Brazilian Jiu-Jitsu", "grappling", "jiu-jitsu athlete"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Ethan Crelinsten: Elite BJJ Competitor & Grappling Pioneer</h1>
        <p className="mt-4 text-xl text-zinc-400">Explore Ethan Crelinsten's BJJ career, competition achievements, signature techniques, and influence on modern grappling.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Ethan Crelinsten emerged as one of the most dynamic and innovative grapplers in modern Brazilian Jiu-Jitsu. Beginning his BJJ journey during his formative years, Crelinsten demonstrated exceptional aptitude for the sport, combining natural athleticism with a methodical approach to technique development. His early training established a strong foundation in fundamental grappling positions while fostering a competitive mindset that would define his career. As he progressed through the belt ranks, Crelinsten distinguished himself through dedicated training and a commitment to continuous improvement. His trajectory from white belt to elite competitor reflects both personal determination and access to quality instruction from experienced coaches. The combination of technical refinement and strategic competition experience shaped Crelinsten into a formidable opponent. His early years in BJJ emphasized the importance of fundamentals while developing the advanced problem-solving skills necessary for high-level grappling. This period established his reputation as a serious competitor willing to test his skills against increasingly challenging opponents.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Ethan Crelinsten has compiled an impressive competitive record across multiple grappling organizations and weight divisions. His accomplishments include victories over notable competitors and consistent placements in prestigious tournaments. Crelinsten has competed in various IBJJF sanctioned events, earning recognition for technical excellence and competitive consistency. His performances demonstrate adaptability across different rule sets and competition formats, from gi competitions to submission-only events. Throughout his career, Crelinsten has faced elite-level opponents, using these high-caliber matchups to refine his approach and expand his technical arsenal. His results reflect not only athletic ability but also strategic competition planning and mental resilience. Success at major tournaments has established Crelinsten as a respected figure within the competitive grappling community. His commitment to consistent participation in high-level competitions has resulted in a body of work that demonstrates sustained excellence and continuous evolution as a competitor.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Ethan Crelinsten is recognized for a technically sophisticated and position-focused grappling approach. His fighting style emphasizes superior positioning, control sequences, and methodical pressure application. Crelinsten demonstrates exceptional proficiency in leg lock systems, leveraging foot lock and heel hook techniques with precision and timing. His leg lock game represents one of his defining technical strengths, combining lower body submissions with positional control. Beyond leg lock specialization, Crelinsten exhibits well-rounded technical capabilities including effective upper body submissions and guard passing sequences. His approach to grappling prioritizes establishing dominant positions before pursuing finishing techniques, reflecting a strategic mindset focused on championship-level success. Crelinsten's technical diversity allows him to adapt to different opponent styles and competition scenarios. His signature techniques have influenced how many modern competitors approach leg lock systems and lower body submissions. The technical precision and efficiency Crelinsten demonstrates inspire competitors seeking to develop more sophisticated grappling fundamentals.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Ethan Crelinsten's contributions to Brazilian Jiu-Jitsu extend beyond personal competitive achievements to broader influence on grappling methodology and technical development. His emphasis on systematic leg lock progression has resonated throughout the BJJ community, contributing to increased technical sophistication in submission systems. Crelinsten represents the modern BJJ competitor who balances aggressive technical innovation with fundamental positional excellence. His competitive approach and technical preferences have inspired numerous grapplers to explore more comprehensive lower body submission systems. Through competition, instruction, and technical demonstration, Crelinsten has helped advance collective understanding of modern grappling effectiveness. His legacy demonstrates how individual competitors shape the evolution of martial arts through dedicated excellence and technical innovation. Crelinsten's influence continues as emerging competitors study his matches and incorporate his principles into their own training. The grappling community recognizes Crelinsten as a significant figure in contemporary BJJ, representing the highest standards of technical proficiency and competitive dedication. His impact on modern grappling ensures his contributions will influence the sport's continued development for years to come.</p>
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
