import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Leandro Silva: BJJ Competitor & Grappling Pioneer | AIBJJ",
  description: "Explore Leandro Silva's BJJ career, competition achievements, signature techniques, and lasting impact on Brazilian Jiu-Jitsu grappling.",
};

export default function Page() {
  const tags = ["Leandro Silva", "Brazilian Jiu-Jitsu", "BJJ competitor", "grappling techniques", "martial arts"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Leandro Silva: BJJ Competitor & Grappling Pioneer</h1>
        <p className="mt-4 text-xl text-zinc-400">Explore Leandro Silva's BJJ career, competition achievements, signature techniques, and lasting impact on Brazilian Jiu-Jitsu grappling.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Leandro Silva emerged as a notable figure in Brazilian Jiu-Jitsu during the competitive grappling boom of the 1990s and 2000s. Growing up in Brazil, Silva was immersed in the rich culture of BJJ from an early age, training under respected coaches who shaped his technical foundation. His dedication to the art reflected the traditional values of Brazilian Jiu-Jitsu, combining rigorous mat time with strategic study of submissions and positional control. Silva's early career was marked by his commitment to mastering fundamental techniques before developing his own distinct style. His progression through the belt ranks demonstrated a methodical approach to improvement, earning him recognition among peers and coaches. The grappling community took notice of Silva's potential as he began competing in regional and national tournaments, establishing himself as a serious contender in his weight class and earning respect for his technical proficiency and competitive spirit.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Throughout his competitive career, Leandro Silva compiled an impressive record across multiple BJJ tournaments and grappling events. He competed consistently at high levels, facing some of the most skilled grapplers of his era and proving his ability to execute under pressure. Silva's tournament success came through a combination of solid fundamentals and tactical awareness, allowing him to advance through brackets and achieve notable victories. His competitive resume includes performances in absolute weight divisions and specific weight class competitions, demonstrating versatility in his approach. Silva's ability to maintain composure during intense matches and adapt to opponent strategies became a hallmark of his competitive style. Over the years, he earned promotions and recognition within the BJJ community, establishing himself as a respected competitor whose contributions to the sport extended beyond individual victories to include mentoring younger athletes and helping elevate the technical level of Brazilian Jiu-Jitsu competition.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Leandro Silva developed a grappling approach characterized by technical precision and methodical progression through positions. His style emphasized strong fundamentals including takedowns, guard passes, and positional dominance, reflecting traditional BJJ principles. Silva was known for executing clean, efficient techniques rather than relying on explosive athleticism alone. His submission game included proficiency with common and creative finishing techniques, applied with proper timing and leverage. Silva's leg lock game demonstrated the evolving nature of BJJ during his competitive period, utilizing these techniques strategically within matches. His guard work displayed solid defensive mechanics and counter-attack capability, allowing him to create opportunities from bottom positions. Silva's approach to conditioning and match preparation reflected a comprehensive understanding of competition demands. His technical repertoire adapted throughout his career as the sport evolved, showing his commitment to continuous improvement and learning. Opponents faced a well-rounded grappler who could control matches through positional superiority or finish with submissions.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Leandro Silva's contributions to Brazilian Jiu-Jitsu extend beyond his individual competition achievements to encompass his role in developing the next generation of grapplers. As an instructor and mentor, Silva shared his technical knowledge and competitive experience with students, helping establish training excellence in his academy. His commitment to technical development and athlete improvement reflected a dedication to preserving and advancing BJJ traditions. Silva's competitive example demonstrated that consistent training, technical focus, and mental preparation yield success in grappling. Within the broader BJJ community, Silva is recognized as someone who contributed to the sport's growth during a crucial period of expansion. His willingness to compete against quality opponents and test his skills against diverse styles enriched the competitive environment. Silva's legacy includes both the athletes he trained directly and the technical principles he emphasized throughout his career. His presence in BJJ history represents the many dedicated competitors and coaches who quietly built the foundation that modern Brazilian Jiu-Jitsu stands upon, contributing to the art's evolution and global recognition.</p>
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
