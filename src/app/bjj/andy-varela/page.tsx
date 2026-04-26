import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Andy Varela | BJJ Competitor & Grappling Legend | AIBJJ",
  description: "Discover Andy Varela's BJJ journey, competition achievements, signature techniques, and lasting impact on Brazilian Jiu-Jitsu and modern grappling.",
};

export default function Page() {
  const tags = ["Andy Varela", "Brazilian Jiu-Jitsu", "BJJ Competitor", "Grappling", "Jiu-Jitsu Championships"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Andy Varela | BJJ Competitor & Grappling Legend</h1>
        <p className="mt-4 text-xl text-zinc-400">Discover Andy Varela's BJJ journey, competition achievements, signature techniques, and lasting impact on Brazilian Jiu-Jitsu and modern grappling.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Andy Varela emerged as a prominent figure in Brazilian Jiu-Jitsu during the competitive golden era of grappling. Beginning his BJJ training in the early 2000s, Varela quickly demonstrated exceptional technical aptitude and competitive drive. He developed his skills under respected instructors who emphasized fundamental technique combined with innovative approaches to modern grappling. Varela's early tournament appearances showcased his ability to compete effectively across multiple weight classes and divisions. His dedication to training and constant refinement of his craft established him as a rising talent within the BJJ community. Through consistent participation in regional and national competitions, Varela built a reputation for technical excellence and strategic match awareness. His journey reflects the evolution of Brazilian Jiu-Jitsu as athletes began incorporating more dynamic and aggressive competition styles while maintaining traditional grappling principles.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Andy Varela's competitive resume demonstrates consistent success across prestigious BJJ tournaments and grappling events. Throughout his career, he competed at various belt levels, earning promotions through demonstrated technical skill and tournament performance. Varela participated in major BJJ competitions including IBJJF sanctioned events, absolute divisions, and submission-only tournaments. His tournament victories showcased his ability to adapt to different rule sets and opponent styles. Varela earned respect from peers and competitors for his professional approach to competition and sportsmanship. His achievements include wins over notable opponents and impressive performances in highly competitive divisions. Beyond belt advancement, Varela's record reflects years of dedicated training, strategic improvement, and competitive maturity. His success in both gi and no-gi grappling demonstrates versatility and comprehensive technical knowledge. The consistency of his performance across different competition formats established him as a reliable and formidable competitor within the BJJ landscape.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Andy Varela's grappling approach emphasizes technical precision combined with athletic pressure and control. His fighting style incorporates both traditional BJJ fundamentals and modern submission mechanics. Varela demonstrates proficiency in leg lock systems, demonstrating the evolving technical sophistication of contemporary grappling. His positional control emphasizes pressure and dominant positioning before advancing to submissions. Varela's guard work showcases defensive understanding and counter-attack opportunities from bottom positions. He employs transitions effectively, moving fluidly between positions while maintaining offensive momentum. His submission arsenal includes various chokes, joint locks, and positional attacks executed with technical accuracy. Varela's approach to grappling reflects the sport's evolution toward more aggressive but technically sound competition. His performances illustrate how fundamental principles combine with specialized technique development in modern BJJ. Throughout his career, Varela has adapted his technical approach, incorporating new methodologies while maintaining classical grappling foundations. His technical evolution represents the continuous development within Brazilian Jiu-Jitsu as the sport advances.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Andy Varela's contributions to Brazilian Jiu-Jitsu extend beyond his competitive accomplishments to influence within the grappling community. His technical approach and competitive consistency provided examples for developing athletes pursuing advanced BJJ training. Varela's participation in the sport during significant evolutionary periods contributed to modern grappling methodologies. His willingness to compete across different formats and rule sets demonstrated versatility and comprehensive technical understanding. Within BJJ circles, Varela earned recognition for professionalism and dedication to the sport's development. His tournament performances and technical demonstrations influenced peers and younger grapplers studying advanced concepts. Varela's legacy includes advocacy for continued technical refinement and competitive progression within BJJ. Through instruction and mentorship, he has contributed to knowledge dissemination within the grappling community. His career exemplifies the dedication required for sustained success in competitive Brazilian Jiu-Jitsu. Andy Varela's impact on the sport reflects his commitment to technical excellence and professional standards, contributing meaningfully to BJJ's continued growth and development as a respected martial art and competitive discipline.</p>
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
