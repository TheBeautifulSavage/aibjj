import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Erberth Santos: BJJ Heavyweight Champion Profile | AIBJJ",
  description: "Explore Erberth Santos' BJJ career, achievements, and revolutionary techniques. Learn about the heavyweight grappling legend's competition record.",
};

export default function Page() {
  const tags = ["Erberth Santos", "Brazilian Jiu-Jitsu", "BJJ Heavyweight", "Grappling", "IBJJF Champion"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Erberth Santos: BJJ Heavyweight Champion Profile</h1>
        <p className="mt-4 text-xl text-zinc-400">Explore Erberth Santos' BJJ career, achievements, and revolutionary techniques. Learn about the heavyweight grappling legend's competition record.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Erberth Santos emerged from Brazil's competitive grappling scene to become one of the most dominant heavyweight grapplers of his generation. Beginning his BJJ training in the early 2000s, Santos dedicated himself to the art with the intensity and discipline that would later define his competitive career. His progression through the belt ranks demonstrated exceptional technical prowess and a relentless work ethic. Training primarily in the Brazilian top team environment, Santos benefited from exposure to some of Brazil's most accomplished instructors and training partners. His early competitive experiences in local and regional tournaments laid the foundation for his rise to international prominence. Santos' transition from aspiring athlete to championship contender marked a pivotal moment in his journey, establishing him as a serious threat in the heavyweight division. His commitment to mastering fundamental techniques while developing innovative approaches to grappling distinguished him early in his career.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Erberth Santos achieved remarkable success at the highest levels of BJJ competition, particularly in the heavyweight and absolute divisions. His resume includes multiple victories at prestigious tournaments including the IBJJF World Championships, where he competed against the sport's elite athletes. Santos earned his black belt through consistent demonstration of technical excellence and competitive dominance. Throughout his career, he accumulated victories over numerous high-ranked opponents, establishing himself as a formidable heavyweight competitor. His achievements extended beyond individual tournament wins to include consistent performances at major events and rankings as a top contender in his weight class. Santos represented Brazil with distinction on the international grappling circuit, competing against champions from various continents. His tournament success demonstrated his ability to execute techniques under pressure while adapting to different opponent styles. The accumulation of these achievements established Santos as one of the notable figures in heavyweight BJJ competition, earning respect from peers and recognition within the grappling community.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Erberth Santos developed a technical grappling style that emphasized control, positioning, and methodical advancement through positions. Known for his impressive top game, Santos excelled at maintaining dominant positions and capitalizing on positional advantages to set up submissions. His wrestling background informed his approach to takedowns and top control, areas where he demonstrated consistent excellence. Santos became recognized for his effectiveness with leg lock systems, particularly heel hooks and other lower body submission techniques that became increasingly prominent in modern BJJ. His ability to transition smoothly between positions while maintaining control allowed him to wear down opponents and create opportunities for submission attempts. Santos' footlock variations and leg attack sequences exemplified the evolution of lower body grappling in professional competition. Beyond submissions, his guard passing techniques and positional transitions showcased technical refinement. His approach to grappling emphasized patience, precise timing, and capitalizing on opponent mistakes rather than relying solely on athleticism, allowing him sustained success at the heavyweight level.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Erberth Santos' contributions to Brazilian Jiu-Jitsu extended beyond his competition record to include influence on how heavyweight grapplers approach modern competition. His technical demonstrations and competitive approaches influenced emerging athletes studying advanced grappling concepts. Santos participated in the continued evolution of leg lock systems within BJJ, adapting traditional techniques for contemporary competition. His work ethic and dedication served as inspiration for aspiring grapplers pursuing excellence at elite levels. Through competition, training partnerships, and the athletes he influenced, Santos contributed to the development of Brazilian Jiu-Jitsu's technical landscape. His presence in the heavyweight division elevated the level of competition and pushed opponents to develop more sophisticated defensive systems. Santos' career demonstrated the viability of technical grappling excellence at the highest competitive levels, particularly through methodical position work and systematic approaches to submission. His legacy continues through the techniques he utilized, the training partners he influenced, and the competitive standards he maintained throughout his grappling journey.</p>
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
