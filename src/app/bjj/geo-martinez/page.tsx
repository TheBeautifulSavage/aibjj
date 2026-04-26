import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Geo Martinez: Revolutionary BJJ Innovator | AIBJJ",
  description: "Explore Geo Martinez's impact on Brazilian Jiu-Jitsu. Learn about his innovative techniques, competition legacy, and influence on modern grappling.",
};

export default function Page() {
  const tags = ["Geo Martinez", "Brazilian Jiu-Jitsu", "BJJ innovator", "grappling techniques", "jiu-jitsu legacy"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Geo Martinez: Revolutionary BJJ Innovator</h1>
        <p className="mt-4 text-xl text-zinc-400">Explore Geo Martinez's impact on Brazilian Jiu-Jitsu. Learn about his innovative techniques, competition legacy, and influence on modern grappling.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Geo Martinez emerged as one of Brazilian Jiu-Jitsu's most creative and innovative competitors during the 2010s. Beginning his BJJ journey in the competitive circuit, Martinez quickly distinguished himself through unconventional thinking and a willingness to experiment with techniques that other competitors largely ignored. His path to prominence was driven by a passion for exploring the deeper technical aspects of grappling, particularly in leg lock systems and unorthodox positional transitions. Martinez developed a reputation for studying competition footage obsessively and identifying gaps in opponents' defenses that others missed. His analytical approach to the sport set him apart from fighters who relied primarily on athleticism. Martinez trained extensively in various BJJ environments, absorbing knowledge from multiple lineages and camps while maintaining his independent approach to technique development. This diverse training background provided him with a broad technical foundation that allowed him to blend traditional BJJ with innovative applications. His early years were marked by constant experimentation, as he treated every competition as an opportunity to test new ideas and refine his understanding of grappling mechanics.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Geo Martinez established himself as a formidable competitor across multiple weight classes and tournaments throughout his career. He achieved notable success at high-level competitions including IBJJF events, submission-focused tournaments, and invitational matches against elite-level grapplers. Martinez competed at both the absolute weight division and in his respective weight class, demonstrating versatility against opponents of varying sizes and styles. His submission victories showcased his mastery of leg lock systems, particularly heel hooks and knee reap positions that became signatures of his competitive arsenal. Martinez was known for securing victories through technical superiority rather than relying on strength or speed advantages. He achieved recognition within the BJJ community for consistently defeating higher-ranked competitors and earning respect from fellow athletes and coaches. His tournament appearances generated significant interest due to his unpredictable and innovative approach to matches. Martinez proved that unconventional techniques could be executed at the highest competitive levels, challenging the conventional wisdom about what constituted effective BJJ strategy. His competitive record demonstrated sustained excellence over multiple years, establishing him as a significant figure in modern grappling competition.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Geo Martinez's fighting philosophy revolved around technical innovation and systematic leg lock development. His signature techniques included advanced heel hook systems, sophisticated knee reap mechanics, and transitional sequences that caught opponents off-guard. Martinez pioneered leg lock combinations that integrated entries from unexpected positions, making his leg lock game nearly impossible to defend comprehensively. He developed methodical approaches to foot lock entries and heel hook finishes that emphasized control and proper mechanics over explosive athleticism. Martinez's style emphasized positional dominance from unorthodox positions, often controlling opponents from locations where they felt secure. His wrestling-influenced takedowns and scrambling abilities complemented his submission expertise, creating a well-rounded game. Martinez demonstrated exceptional footlock mastery, executing techniques with precision and timing that illustrated deep technical understanding. His approach to leg locking influenced how the broader BJJ community viewed leg lock viability and development. Martinez proved that studying one technical system in extraordinary depth could generate a champion-level skill set. His fighting style prioritized logical progressions and positional clarity, making his techniques reproducible for other athletes willing to invest time in systematic study and repetition.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Geo Martinez's impact on Brazilian Jiu-Jitsu extends beyond his individual competition results to fundamentally influence how modern grapplers approach leg lock systems and technical innovation. He demonstrated that unconventional techniques could achieve elite-level success, inspiring countless athletes to explore previously overlooked technical areas. Martinez's work legitimized leg lock development as a primary competitive focus rather than a supplementary skillset, catalyzing widespread adoption of heel hook systems across all competition levels. His detailed technical approach and willingness to share knowledge through instructionals and seminars elevated the collective understanding of lower body attacking systems. Martinez influenced coaching methodologies by demonstrating the importance of systematic technical development and positional clarity. He proved that grappling innovation could emerge from independent technical research rather than only from established lineage hierarchies. Martinez's legacy encompasses his role in democratizing advanced technical knowledge, making sophisticated grappling concepts accessible to athletes worldwide. His competitive philosophy emphasized that technical superiority could overcome physical advantages, resonating with grapplers of all body types and athletic backgrounds. Today, Martinez remains recognized as a pioneering figure whose contributions fundamentally advanced Brazilian Jiu-Jitsu's technical landscape and inspired generations of athletes to approach grappling with analytical rigor and creative exploration.</p>
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
