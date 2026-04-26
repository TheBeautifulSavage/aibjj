import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Elder Cruz - BJJ Legend & Grappling Pioneer | AIBJJ",
  description: "Explore Elder Cruz's legendary BJJ career, competition achievements, signature techniques, and lasting impact on Brazilian Jiu-Jitsu.",
};

export default function Page() {
  const tags = ["Elder Cruz", "Brazilian Jiu-Jitsu", "BJJ Legend", "Grappling Pioneer", "Jiu-Jitsu History"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Elder Cruz - BJJ Legend & Grappling Pioneer</h1>
        <p className="mt-4 text-xl text-zinc-400">Explore Elder Cruz's legendary BJJ career, competition achievements, signature techniques, and lasting impact on Brazilian Jiu-Jitsu.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Elder Cruz's path in Brazilian Jiu-Jitsu began in the heart of Rio de Janeiro, where he was introduced to grappling as a young athlete. Growing up in Brazil during a transformative period for BJJ, Cruz was shaped by the sport's golden era and trained under influential lineages that emphasized technical excellence and mat time. His early years in jiu-jitsu were marked by an insatiable hunger to learn and compete, regularly training in local academies and competing in regional tournaments that tested his developing skills. Cruz's dedication to the art during his formative years established the foundation for what would become a distinguished career in competitive grappling. His commitment to continuous improvement and his willingness to challenge stronger opponents accelerated his technical development and earning his higher belt ranks.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Elder Cruz became known throughout the BJJ world for his impressive competition record across multiple weight classes and divisions. He competed in some of Brazil's most prestigious tournaments, facing some of the sport's elite competitors and consistently proving his technical prowess on the mat. His victories at significant competitions demonstrated his ability to execute high-level jiu-jitsu under pressure and against formidable opponents. Cruz earned recognition not only for winning matches but for the technical quality he displayed while doing so. His competitive success spanned years of active competition, during which he earned promotions through demonstrated skill rather than mere longevity. The consistency of his performance across various tournaments and against diverse styles of opponents solidified his reputation as a legitimate high-level competitor and contributed significantly to his legacy in BJJ.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Elder Cruz was renowned for his technical, fundamentally sound approach to grappling that emphasized position before submission. His fighting style reflected the classical BJJ lineage he represented, with particular strengths in leg lock systems, positional control, and leg drag passes that became hallmarks of his competition game. Cruz's signature techniques were executed with precision and timing rather than raw athleticism, making them accessible to students of varying physical attributes. He developed exceptional leg lock sequences that caught opponents off-guard when they weren't expecting such advanced lower-body work. His pass game was characterized by methodical advancement and pressure, controlling the hips and breaking posture before transitioning into dominant positions. Cruz's technical arsenal extended to his understanding of weight distribution and leverage, principles he integrated into submissions and positional transitions that made him difficult to escape from once he gained control.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Elder Cruz's contributions to Brazilian Jiu-Jitsu extend beyond his personal competition record to encompass his role in preserving and promoting technical excellence within the sport. As a teacher and instructor, he passed on his knowledge to multiple generations of athletes who carried his principles forward. Cruz became a respected voice in discussions about jiu-jitsu fundamentals and technical progression, influencing how many academies approach skill development. His emphasis on positional mastery and controlled aggression provided an alternative approach to the increasingly athletic and high-speed direction some competition styles were heading. Today, Cruz is remembered as one of BJJ's technical pioneers who elevated the sport's grappling standards while maintaining respect for the art's classical principles. His impact continues through his students, lineage, and the lasting impression his competition performance and teaching methodology left on the jiu-jitsu community.</p>
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
