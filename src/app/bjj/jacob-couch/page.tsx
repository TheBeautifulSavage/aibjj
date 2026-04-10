import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Jacob Couch BJJ Athlete: Career, Achievements & Legacy | AIBJJ",
  description: "Explore Jacob Couch's BJJ career, competition record, fighting style, and influence on Brazilian Jiu-Jitsu. Complete athlete biography.",
};

export default function Page() {
  const tags = ["Jacob Couch", "BJJ athlete", "Brazilian Jiu-Jitsu", "grappling", "competition"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Jacob Couch BJJ Athlete: Career, Achievements & Legacy</h1>
        <p className="mt-4 text-xl text-zinc-400">Explore Jacob Couch's BJJ career, competition record, fighting style, and influence on Brazilian Jiu-Jitsu. Complete athlete biography.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Jacob Couch emerged as a prominent figure in Brazilian Jiu-Jitsu through dedicated training and competitive spirit. Beginning his grappling journey in the early 2000s, Couch developed his skills in wrestling and submission grappling before transitioning fully into BJJ. His background in wrestling provided a strong foundation for his grappling game, particularly in positional control and takedown defense. Couch trained under respected coaches who emphasized technical precision and intelligent mat awareness. His early years in BJJ were marked by consistent progression through the belt ranks, where he demonstrated exceptional work ethic and adaptability. The combination of his wrestling base and newfound submission skills created a well-rounded grappler capable of competing at elite levels. Couch's rise through the ranks reflected his commitment to continuous improvement and his willingness to compete frequently at increasingly challenging levels of competition throughout his BJJ career.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Jacob Couch has established himself as a formidable competitor in BJJ tournaments, competing across multiple weight classes and age divisions depending on competition format. His record includes victories over respected opponents at major tournaments and submission-only events. Couch has competed in both gi and no-gi formats, demonstrating versatility in adapting his game to different rulesets. His tournament appearances have included participation in regional and national level competitions where he consistently placed among top competitors. Couch's submission victories, particularly his technical prowess in executing and defending submissions, became a hallmark of his competitive style. Throughout his competition career, he has earned recognition for his ability to maintain high performance standards while facing increasingly skilled opponents. His achievements extend beyond individual tournament wins to include contributions to team accomplishments and collaborative grappling events. The consistency of his performances across different competition formats has solidified his reputation as a reliable, technical competitor in the BJJ community.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Jacob Couch's grappling approach combines wrestling fundamentals with sophisticated BJJ submission mechanics. His fighting style emphasizes positional superiority, control-based advancement, and technical submissions executed from dominant positions. Couch demonstrates exceptional proficiency in leg lock systems, utilizing both traditional and modern leg attack methodologies. His wrestling background manifests in superior takedown execution and top pressure, making him difficult to escape from mounted or side control positions. Couch favors pressure-based grappling that systematically advances position before committing to submission attempts, reflecting a methodical approach to competitive grappling. His guard passing demonstrates technical precision, combining footwork with upper body control to neutralize opponent sweeps and submissions. In the submission department, Couch shows particular effectiveness with leglocks, chokes from dominant positions, and armlock variations. His ability to transition smoothly between techniques and positions creates continuous pressure that accumulates throughout matches. This comprehensive technical arsenal, combined with intelligent match strategy, makes Couch a challenging opponent across all grappling ranges.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Jacob Couch's contributions to Brazilian Jiu-Jitsu extend beyond his personal competition achievements to include influence on training methodology and technical development within the grappling community. His demonstrations of effective leglock systems and pressure-based passing have informed training practices for numerous athletes. Couch represents the modern hybrid grappler who successfully integrates wrestling fundamentals with traditional and progressive BJJ techniques. His competitive longevity across multiple decades has provided stability and consistent representation of technical, fundamentals-focused grappling in an evolving sport. Through training, coaching, and competition, Couch has influenced younger grapplers to prioritize positional mastery and control before submission attempts. His approach to grappling emphasizes sustainable techniques that don't rely solely on youth or athleticism, making his methods applicable across age and experience levels. Couch's career demonstrates the value of consistent technical development and strategic competition participation in building a lasting presence in BJJ. His legacy continues through athletes he has trained and coached, perpetuating his technical philosophy and competitive standards throughout the Brazilian Jiu-Jitsu community.</p>
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
