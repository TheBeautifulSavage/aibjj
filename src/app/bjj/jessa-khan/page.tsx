import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Jessa Khan: Elite BJJ Competitor & Women's Grappling Pioneer | AIBJJ",
  description: "Discover Jessa Khan's BJJ journey, competition record, signature techniques, and influence on women's grappling. Elite female competitor profile.",
};

export default function Page() {
  const tags = ["Jessa Khan", "women's BJJ", "Brazilian Jiu-Jitsu", "grappling competitor", "judo"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Jessa Khan: Elite BJJ Competitor & Women's Grappling Pioneer</h1>
        <p className="mt-4 text-xl text-zinc-400">Discover Jessa Khan's BJJ journey, competition record, signature techniques, and influence on women's grappling. Elite female competitor profile.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Jessa Khan emerged as one of the most dynamic figures in women's Brazilian Jiu-Jitsu, bringing a unique blend of judo expertise and grappling versatility to the sport. Her background in judo provided an exceptional foundation for understanding positional control, footwork, and explosive takedowns that would later define her BJJ approach. Khan began her formal BJJ training during the early 2010s, rapidly progressing through the belt ranks while maintaining her judo credentials. Her dual expertise in both disciplines allowed her to develop an unconventional style that caught opponents off-guard. Training at elite academies, Khan immersed herself in technical refinement while competing regularly in local and regional tournaments. Her early competition experience revealed her natural athleticism and problem-solving ability on the mat. By achieving her brown belt in BJJ, Khan had already established herself as a formidable competitor capable of challenging established champions.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Jessa Khan's competition record demonstrates consistent excellence across multiple weight divisions and prestigious tournaments. She has competed in major BJJ competitions including IBJJF-sanctioned events, submission-only competitions, and absolute divisions against top-ranked opponents. Khan's ability to adapt her game across different rule sets showcases her technical depth and tactical intelligence. Her victories often come through decisive positional control, submission mastery, and efficient transitions that frustrate opponents attempting to generate offense. Throughout her competitive career, Khan has earned multiple podium finishes at regional and national tournaments, establishing herself as a top-tier female competitor. Her judo background frequently translates into dominant performances, particularly in takedown-heavy matchups. Khan's success extends beyond traditional BJJ competition into submission grappling formats where her wrestling credentials shine. Her competitive longevity reflects both her dedication to continuous improvement and her ability to evolve her technical arsenal against increasingly skilled opposition.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Jessa Khan's fighting style is characterized by aggressive wrestling integration, explosive footwork, and exceptional lower body control. Her judo experience manifests through devastating seoi nage variations, o goshi hip throws, and dynamic entry strategies that catch opponents unprepared for her wrestling level. Khan excels in top position control, utilizing pressure-based passing systems that systematically dismantle opponent guards while minimizing energy expenditure. Her leg lock game represents another signature strength, employing knee reap entries, heel hook sequences, and straight ankle lock variations with surprising technical precision. Khan demonstrates excellent hip mobility and positional awareness, allowing her to transition seamlessly between dominant positions. Her guard passing approach combines methodical knee-slice techniques with occasional explosive smash pass variations depending on opponent defensive tendencies. Khan's submission finishing often involves maintaining dominant position pressure while methodically securing limbs, rarely rushing submissions without ensuring proper positioning. Her ability to control pace and dictate match flow through positional dominance makes her particularly challenging for opponents preferring quick submission exchanges.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on Women's BJJ</h2>
            <p>Jessa Khan's contributions to women's Brazilian Jiu-Jitsu extend beyond competition success into influencing how female athletes approach technical development and athletic training. Her success integrating judo into BJJ competition demonstrated the viability of hybrid martial arts approaches for female competitors, inspiring athletes to explore cross-training opportunities rather than specializing exclusively. Khan's competitive performances against male training partners and in absolute divisions helped establish that women's grappling standards were advancing significantly, pushing the entire sport toward recognizing female athlete technical capabilities. Her emphasis on explosive athleticism and wrestling-based approaches influenced a generation of female BJJ competitors to prioritize physical conditioning and takedown mastery alongside traditional submission training. Khan has contributed to growing recognition of women's grappling through tournament participation, social media presence, and demonstration of elite-level technical execution. Her influence extends into promoting judo's relevance within BJJ communities and encouraging cross-disciplinary training discussions. Through her competitive example and positive representation, Khan has contributed to expanding opportunities for female grapplers and elevating the competitive standards women's BJJ competitors face and achieve.</p>
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
