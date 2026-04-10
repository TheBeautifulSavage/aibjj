import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Bruno Malfacine: Brazilian Jiu-Jitsu Legend | AIBJJ",
  description: "Discover Bruno Malfacine's remarkable BJJ career, achievements, fighting style, and lasting influence on grappling competition.",
};

export default function Page() {
  const tags = ["Bruno Malfacine", "Brazilian Jiu-Jitsu", "BJJ Champion", "Grappling", "Martial Arts"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Bruno Malfacine: Brazilian Jiu-Jitsu Legend</h1>
        <p className="mt-4 text-xl text-zinc-400">Discover Bruno Malfacine's remarkable BJJ career, achievements, fighting style, and lasting influence on grappling competition.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Bruno Malfacine emerged from the rich grappling culture of Brazil, where he began his Brazilian Jiu-Jitsu training during his formative years. Like many BJJ athletes who would become champions, Malfacine dedicated himself to mastering the fundamentals while competing at local and regional levels. His journey through the belt ranks showcased exceptional technical proficiency and competitive drive. By the time he reached the black belt level, Malfacine had already distinguished himself as a formidable competitor with innovative approaches to grappling. His progression demonstrated the effectiveness of consistent training, strategic development, and adaptability in competition. Malfacine's early experiences competing against diverse opponents helped shape his technical arsenal and problem-solving abilities on the mat. His rise through the competitive ranks established him as one of Brazil's most respected grapplers, earning recognition from peers and coaches alike for his contributions to the sport's evolution.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Bruno Malfacine's competitive résumé includes numerous prestigious tournament victories and world-class performances that cement his status among BJJ's elite competitors. He achieved remarkable success in weight class competitions, consistently defeating high-level opponents and advancing through challenging brackets. Malfacine's ability to perform under pressure and adapt his strategy against different styles demonstrated his championship mentality. His victories against notable competitors showcased technical excellence and tactical awareness that characterized his approach to grappling. Beyond individual tournament success, Malfacine has been instrumental in team competitions, contributing to his academy's reputation for producing elite athletes. His consistency across multiple competitions and years of active participation at the highest levels solidified his legacy as one of Brazilian Jiu-Jitsu's respected champions. Malfacine's competitive achievements extended beyond domestic competition, earning him international recognition and opportunities to represent Brazil on the global stage.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Bruno Malfacine is renowned for technical precision and a methodical approach to grappling that emphasized positional control and submission mastery. His style showcased exceptional leg lock expertise, particularly in lower body submissions that became his signature techniques in competition. Malfacine's ability to transition smoothly between positions and capitalize on opponent mistakes reflected years of dedicated technical refinement. He demonstrated proficiency in leg lock sequences, utilizing heelhooks, footlock variations, and knee reap positions with precision timing and proper biomechanical application. His approach to leg attacks was calculated rather than reckless, showing deep understanding of leg lock mechanics and finishing sequences. Malfacine's technical repertoire extended beyond leg attacks, including solid fundamentals in passing guard, maintaining superior positions, and capitalizing on openings. His fighting style influenced how many competitors approach lower body submissions, contributing to modern BJJ's emphasis on leg lock techniques. Malfacine's methodical approach proved effective against diverse opponents and became a model for aspiring grapplers studying advanced submission techniques.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Bruno Malfacine's contributions to Brazilian Jiu-Jitsu extend far beyond his personal competition record, encompassing significant influence on technical development and training methodologies. As a competitor who mastered advanced leg lock techniques, Malfacine helped elevate the legitimacy and effectiveness of lower body submissions in modern BJJ competition. His success at elite levels demonstrated that leg attacks could be primary strategies for winning matches against world-class opponents. Malfacine's technical innovations and strategic applications influenced countless students and fellow competitors who studied his matches and training philosophy. Through teaching and mentorship, he contributed to spreading technical knowledge within the Brazilian Jiu-Jitsu community, helping shape the next generation of grapplers. His legacy encompasses both tangible tournament victories and intangible contributions to the sport's technical evolution. Malfacine represents the tradition of Brazilian grapplers who combined technical excellence with competitive success, embodying the principles that define BJJ at its highest levels. His influence on leg lock development and application remains evident in contemporary grappling techniques and competition strategies used worldwide.</p>
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
