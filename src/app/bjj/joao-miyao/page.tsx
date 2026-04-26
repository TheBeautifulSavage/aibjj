import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Joao Miyao: BJJ Legend and Competitor | AIBJJ",
  description: "Explore Joao Miyao's remarkable career in Brazilian Jiu-Jitsu, his innovative techniques, and lasting influence on modern grappling.",
};

export default function Page() {
  const tags = ["Joao Miyao", "Brazilian Jiu-Jitsu", "BJJ competitor", "grappling techniques", "IBJJF"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Joao Miyao: BJJ Legend and Competitor</h1>
        <p className="mt-4 text-xl text-zinc-400">Explore Joao Miyao's remarkable career in Brazilian Jiu-Jitsu, his innovative techniques, and lasting influence on modern grappling.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Joao Miyao emerged from Brazil's competitive BJJ landscape during the early 2000s, establishing himself as a prodigious talent in the sport. Growing up in a country with deep grappling traditions, Miyao dedicated himself to mastering Brazilian Jiu-Jitsu from a young age, training extensively to develop his unique skill set. His early career was marked by rapid progression through the ranks, showcasing exceptional athleticism and technical precision that caught the attention of the global BJJ community.

Miyao's development as a competitor reflected the evolution of modern BJJ, where athletes began combining traditional techniques with innovative approaches. He trained under respected coaches who emphasized both fundamental soundness and creative problem-solving on the mat. His competitive journey gained momentum as he entered the absolute and heavyweight divisions, competing against some of the sport's most elite athletes. This formative period established Miyao as a serious contender in international competition.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Joao Miyao's competition resume includes victories against top-ranked opponents and performances at prestigious tournaments including the IBJJF World Championship, Pan American Championship, and other major international events. His success in both gi and no-gi competition demonstrated his technical versatility and competitive intelligence. Miyao consistently performed well in absolute divisions, where he faced the sport's heaviest and most accomplished grapplers.

Throughout his career, Miyao earned recognition for his ability to execute complex techniques under pressure and adapt his game plan against diverse opponents. His tournament appearances showcased submission finishes and dominant positional control that became hallmarks of his style. Miyao's competitive longevity allowed him to remain relevant across multiple decades of BJJ evolution, testament to his fundamental understanding of grappling mechanics and continuous technical development. His achievement of competing at the highest levels against world-class athletes solidified his status as a significant figure in Brazilian Jiu-Jitsu history.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Joao Miyao is known for his technical mastery of leg lock systems and lower body submissions, which became increasingly prominent in modern BJJ. His approach emphasized methodical positional advancement, strong passing mechanics, and the ability to establish dominant pins before pursuing submissions. Miyao's style reflected intelligent, calculated grappling rather than explosive athleticism alone, demonstrating how technical knowledge provides lasting advantage in competition.

His signature techniques included sophisticated footlock entries and heel hook sequences that executed from various positions. Miyao developed his leg lock game during an era when these techniques gained prominence in no-gi competition, establishing himself as a skilled practitioner of these submissions. His guard game featured solid fundamentals with emphasis on frame control and movement efficiency. Miyao's technical arsenal demonstrated the importance of drilling foundational positions while maintaining adaptability against different opponent styles. His systematic approach to grappling problems influenced how many modern athletes structure their technical development.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Joao Miyao's contributions to Brazilian Jiu-Jitsu extend beyond competition results to his influence on technical development and training methodology. As the sport evolved toward greater emphasis on leg lock systems and lower body submissions, Miyao stood among competitors demonstrating the effectiveness and consistency of these techniques at the highest levels. His competitive success validated specific technical approaches that subsequently became standard curriculum in many BJJ academies worldwide.

Miyao's legacy includes inspiring athletes to develop comprehensive submission systems and recognize leg lock mastery as essential rather than supplementary. His technical demonstrations and competition footage provided valuable instruction for students seeking to understand advanced grappling concepts. By maintaining competitive relevance across BJJ's evolution, Miyao demonstrated that fundamental principles combined with specialized technical knowledge create lasting success. His career trajectory continues to serve as example of how dedicated training, intelligent technical development, and competitive experience build genuine expertise in Brazilian Jiu-Jitsu. Miyao remains respected figure whose contributions shaped modern grappling practice.</p>
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
