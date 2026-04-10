import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Rodolfo Vieira: BJJ Heavyweight Champion and Innovator | AIBJJ",
  description: "Learn about Rodolfo Vieira's legendary BJJ career, competition achievements, signature techniques, and lasting influence on grappling.",
};

export default function Page() {
  const tags = ["Rodolfo Vieira", "Brazilian Jiu-Jitsu", "BJJ heavyweight", "grappling champion", "jiu-jitsu legend"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Rodolfo Vieira: BJJ Heavyweight Champion and Innovator</h1>
        <p className="mt-4 text-xl text-zinc-400">Learn about Rodolfo Vieira's legendary BJJ career, competition achievements, signature techniques, and lasting influence on grappling.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Rodolfo Vieira emerged as one of Brazilian Jiu-Jitsu's most dominant heavyweight competitors during the late 2000s and 2010s. Born and raised in Brazil, Vieira began his BJJ training at a young age, developing his skills under respected coaches who recognized his natural athleticism and technical aptitude. His early competition experience in the Brazilian circuit proved instrumental in refining his grappling abilities against elite-level opponents.

Vieira's rise through the ranks was marked by consistent victories and an increasingly refined technical approach to heavyweight jiu-jitsu. He earned his black belt through years of dedicated training and competition, quickly establishing himself as a serious threat in absolute and heavyweight divisions. His combination of strength, technique, and mental fortitude set him apart from his peers and attracted attention from major international competitions.

By the time Vieira entered his prime competitive years, he had already developed a reputation for technical excellence and innovative approaches to position control and submissions. His lineage and training environment in Brazil provided the foundation for a career that would reshape expectations for heavyweight grappling.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Rodolfo Vieira's competition record stands as one of the most impressive in modern BJJ history, particularly in the heavyweight and absolute divisions. He won multiple IBJJF World Championships, cementing his status as the sport's premier heavyweight competitor of his era. His victories against some of the most respected names in Brazilian Jiu-Jitsu demonstrated exceptional consistency and adaptability at the highest levels of competition.

Vieira also achieved significant success at the Abu Dhabi Combat Club Pro (ADCC) submission wrestling championship, arguably the most prestigious grappling tournament in the world. His performances there showcased his ability to compete effectively against elite wrestlers and submission specialists, proving the universal effectiveness of his techniques. He secured multiple medals and deep runs in the absolute division, facing legendary grapplers and holding his own against the world's best.

Beyond major tournaments, Vieira maintained an exceptional record in superfight competitions and high-level matches against hand-picked opponents. His ability to win decisively against top-ranked competitors across different ruleset formats—from IBJJF points-based competition to submission-only grappling—illustrated the depth and versatility of his technical arsenal. These achievements established Vieira as arguably the dominant heavyweight of his competitive generation.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Rodolfo Vieira's approach to Brazilian Jiu-Jitsu is characterized by intelligent, methodical positional control combined with devastating leg lock specialists knowledge. He built his reputation on the ability to establish dominant positions, particularly in side control and north-south position, from which he would methodically advance toward submissions. His passing game is considered exceptional, featuring patient footwork and timing that frustrates opponents attempting guard retention.

Vieira is particularly renowned for his leg lock expertise, especially heel hooks and knee reaping techniques that he employs with precision and control. These submissions, executed from various positions and angles, have become signature finishes in his matches. He combines leg attacks with upper body submissions seamlessly, forcing opponents into impossible defensive positions where escaping one threat exposes them to another.

A hallmark of Vieira's style is his exceptional use of pressure and weight distribution. Rather than relying solely on speed or explosiveness, he uses strategic positioning to neutralize opponent movement and create openings for submissions. His matches often feature long periods of positional dominance where he steadily improves his position before securing a tapout. This deliberate, technical approach influenced how many heavyweight competitors approach match strategy and position hierarchy.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Rodolfo Vieira's impact on Brazilian Jiu-Jitsu extends far beyond his impressive trophy collection and competition record. He fundamentally elevated the technical standards expected of heavyweight competitors, proving that elite grappling doesn't require relying purely on size and strength. His methodical approach to position and submission has become a blueprint for developing heavyweight competitors, with many modern grapplers studying his matches to understand positional hierarchy and pressure application.

Vieira's leg lock innovations and refinements contributed significantly to the modern emphasis on foot lock and knee reaping techniques in contemporary BJJ. His success with these submissions at the highest levels of competition helped legitimize leg lock systems as central to a complete grappling game, influencing coaching methodologies worldwide. Coaches now prioritize leg lock education for serious competitors largely due to grapplers like Vieira demonstrating their competitive viability.

Beyond technical contributions, Vieira represented Brazilian Jiu-Jitsu excellence on the international stage during crucial years for the sport's global expansion. His matches against international wrestlers and submission specialists helped establish BJJ's credibility in cross-training contexts. Through his dominance and technical sophistication, Vieira inspired a generation of heavyweight grapplers and remains a reference point for studying elite positional jiu-jitsu and high-level competition strategy.</p>
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
