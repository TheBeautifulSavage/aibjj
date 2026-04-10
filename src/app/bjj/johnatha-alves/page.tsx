import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Johnatha Alves: BJJ Competitor & Grappling Champion | AIBJJ",
  description: "Explore Johnatha Alves' BJJ career, competition achievements, fighting style, and influence on Brazilian Jiu-Jitsu. Complete athlete biography.",
};

export default function Page() {
  const tags = ["Johnatha Alves", "BJJ", "Brazilian Jiu-Jitsu", "Grappling", "Competition"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Johnatha Alves: BJJ Competitor & Grappling Champion</h1>
        <p className="mt-4 text-xl text-zinc-400">Explore Johnatha Alves' BJJ career, competition achievements, fighting style, and influence on Brazilian Jiu-Jitsu. Complete athlete biography.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Johnatha Alves emerged as a significant figure in the Brazilian Jiu-Jitsu community through dedicated training and a passion for the martial art. Beginning his grappling career in Brazil's competitive BJJ landscape, Alves developed his skills under experienced instructors who recognized his potential and athletic ability. His early years in BJJ were marked by consistent progression through the belt ranks, demonstrating the discipline and technical proficiency required to compete at elite levels.

Alves' journey reflects the traditional path of many successful Brazilian Jiu-Jitsu athletes, combining rigorous training camps with competition experience that shaped his approach to grappling. His commitment to mastering fundamental techniques while developing advanced submissions and positional control established a strong foundation for his competitive career. Throughout his development as a grappler, Alves remained focused on continuous improvement, studying opponents and refining his technical arsenal to become a formidable competitor in his weight class.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Johnatha Alves built an impressive competitive record across major BJJ tournaments and grappling events, establishing himself as a respected name in Brazilian Jiu-Jitsu competition circuits. His achievements include victories against notable opponents and performances in prestigious tournaments where he demonstrated consistency and technical excellence. Alves competed across multiple weight classes and divisions, showcasing his adaptability as a grappler and his ability to perform under pressure in high-level competitions.

Throughout his competitive career, Alves earned recognition from the BJJ community for his performances in both gi and no-gi formats, proving his versatility as a complete martial artist. His tournament placements and championship results contributed to his reputation as a skilled technician and fierce competitor. Alves' dedication to competing regularly kept him sharp and contributed to the development of his strategic approach to match analysis and tactical execution. His competitive resume reflects years of dedication to the sport and continuous testing of his skills against quality opposition.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Johnatha Alves developed a distinctive grappling style characterized by technical precision, intelligent positioning, and effective submission strategies. His approach emphasizes fundamental BJJ principles combined with creative problem-solving on the mat, allowing him to adapt to different opponent styles and competition formats. Alves' technique selection reflects a deep understanding of leverage and biomechanics, enabling him to execute submissions efficiently and maintain dominant positions throughout matches.

Known for his leg lock prowess and positional transitions, Alves utilizes modern grappling innovations while respecting traditional BJJ fundamentals. His competitive matches showcase excellent timing, footwork, and the ability to control tempo and distance effectively. Alves' willingness to engage in dynamic exchanges while maintaining tactical awareness has made him a challenging opponent at any competition level. His technical arsenal includes numerous submission options, guard passes, and position transitions that he applies with precision and timing, making him difficult to predict during matches.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Johnatha Alves' contributions to Brazilian Jiu-Jitsu extend beyond his personal competition achievements, influencing the grappling community through his technical approach and competitive performances. His career demonstrated the effectiveness of combining traditional BJJ principles with modern techniques, inspiring younger grapplers to develop well-rounded skill sets. Alves' presence in the sport contributed to the continued evolution and competitiveness of Brazilian Jiu-Jitsu at elite levels.

As a respected figure in the BJJ community, Alves has influenced training methodologies and competitive strategy through his performances and technical innovations. His dedication to the sport and consistent performances at high levels helped elevate the standard of competition in his era. Alves' legacy includes not only his tournament victories and technical accomplishments but also his role in advancing BJJ's competitive landscape. His approach to grappling continues to resonate with athletes studying Brazilian Jiu-Jitsu, serving as an example of how technical excellence and competitive heart combine to create success in modern martial arts competition.</p>
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
