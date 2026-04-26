import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Tarsis Humphreys: BJJ Legend & Grappling Pioneer | AIBJJ",
  description: "Explore Tarsis Humphreys' legendary BJJ career, competition achievements, signature techniques, and lasting influence on Brazilian Jiu-Jitsu.",
};

export default function Page() {
  const tags = ["Tarsis Humphreys", "Brazilian Jiu-Jitsu", "BJJ Grappling", "Submission Wrestling", "BJJ History"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Tarsis Humphreys: BJJ Legend & Grappling Pioneer</h1>
        <p className="mt-4 text-xl text-zinc-400">Explore Tarsis Humphreys' legendary BJJ career, competition achievements, signature techniques, and lasting influence on Brazilian Jiu-Jitsu.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Tarsis Humphreys emerged as one of Brazilian Jiu-Jitsu's most dynamic competitors during the sport's explosive growth in the 1990s and 2000s. Beginning his grappling journey in Brazil, Humphreys developed his skills through rigorous training in the competitive BJJ circuit where intensity and innovation were paramount. His early years shaped a technical foundation combining traditional Brazilian jiu-jitsu fundamentals with creative problem-solving on the mat.

Humpreys' progression through the ranks demonstrated exceptional athleticism and mental fortitude. He trained under renowned coaches who recognized his potential for high-level competition. His dedication to refining technique while maintaining physical conditioning became the hallmark of his approach to the sport. This commitment propelled him into prominence within the international BJJ community, where he began earning recognition for both his technical prowess and competitive spirit during an era that defined modern grappling.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Throughout his competitive career, Tarsis Humphreys accumulated an impressive record at prestigious BJJ tournaments and submission grappling events. He competed at the highest levels of the sport, facing elite opponents in both gi and no-gi competitions. His performances at major tournaments demonstrated consistency and the ability to execute under pressure against world-class grapplers.

Humpreys' tournament victories and placements established him as a formidable competitor across multiple weight classes and divisions. He earned respect from peers and coaches for his tactical approach to matches and his ability to adapt strategies against diverse opponents. His competition experience included matches against some of BJJ's most accomplished athletes, providing valuable learning opportunities that shaped his grappling philosophy. The combination of wins, technical performances, and competitive experience solidified Humphreys' status as a respected figure in the global BJJ competition circuit.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Tarsis Humphreys developed a distinctive grappling style characterized by fluid transitions, precise positioning, and submission hunting from multiple angles. His approach emphasized control before submission, reflecting the technical sophistication required at elite competition levels. Humphreys became known for his ability to execute submissions from unexpected positions, keeping opponents constantly defensive and reactive.

His technical arsenal included both traditional and innovative techniques refined through years of high-level training and competition. Humphreys' footwork and hip movement allowed him to create dominant positions while maintaining balance and control. His leg lock game, particularly relevant during the evolution of lower body submissions in BJJ, demonstrated technical depth and timing. The combination of wrestling-influenced positioning and submission expertise made Humphreys a complete grappler capable of imposing his will in varied match scenarios, earning admiration from students of the sport studying effective technique application.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Tarsis Humphreys' contributions to Brazilian Jiu-Jitsu extend beyond competition records into the broader development of the sport. His technical innovations and competitive demonstrations influenced how grapplers approached problem-solving on the mat. By showcasing effective strategies against elite competition, Humphreys provided templates for developing grapplers to study and incorporate into their own games.

Humpreys' impact on BJJ includes inspiration to athletes pursuing excellence in submission grappling and combat sports. His career trajectory during a pivotal period in BJJ's evolution reflected the sport's progression toward increased technical sophistication and competitive depth. Through competition, teaching, and his influence within the grappling community, Humphreys contributed to elevating standards and encouraging innovation in technique. His legacy represents the dedication required to achieve elite status in Brazilian Jiu-Jitsu while maintaining the technical principles that define the art. Humphreys remains respected within BJJ circles as a competitor who embodied the sport's competitive spirit and technical excellence.</p>
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
