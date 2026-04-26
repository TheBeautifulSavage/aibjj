import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "John Machado: Brazilian Jiu-Jitsu Pioneer | AIBJJ",
  description: "Explore John Machado's legacy as a BJJ pioneer. Learn about his competition achievements, fighting style, and influence on modern grappling.",
};

export default function Page() {
  const tags = ["John Machado", "Brazilian Jiu-Jitsu", "BJJ Pioneer", "Grappling", "Machado Family"];
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
        <h1 className="text-4xl font-black sm:text-5xl">John Machado: Brazilian Jiu-Jitsu Pioneer</h1>
        <p className="mt-4 text-xl text-zinc-400">Explore John Machado's legacy as a BJJ pioneer. Learn about his competition achievements, fighting style, and influence on modern grappling.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>John Machado is one of the most influential figures in Brazilian Jiu-Jitsu history, emerging from the legendary Machado family dynasty. Born in Brazil, Machado grew up immersed in BJJ culture during a transformative period for the sport. The Machado family, known for their technical expertise and innovation, provided John with an ideal environment to develop world-class grappling skills from childhood.

Machado's early training emphasized fundamental technique, positional control, and systematic progression through belt levels. His family's lineage in BJJ gave him access to knowledge that most competitors could only dream of acquiring. As he progressed through the ranks, John distinguished himself as not just a talented practitioner, but an innovative thinker who contributed new perspectives to the sport's technical development.

His journey from a young Brazilian student to international competitor shaped the modern understanding of high-level grappling. Machado's dedication to both competing and teaching helped establish the Machado family name as synonymous with technical excellence and systematic instruction.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>John Machado competed at the highest levels of Brazilian Jiu-Jitsu during an era when the sport was rapidly gaining international recognition. He participated in prestigious competitions including the ADCC Submission Wrestling World Championship, one of the most prestigious grappling tournaments in the world. His performances demonstrated the effectiveness of the Machado family's technical system against elite-level competitors from diverse backgrounds.

Machado's competition record reflected his versatility and adaptability as a grappler. He earned respect for his ability to execute techniques with precision while maintaining strong defensive fundamentals. His success in no-gi competition, particularly at ADCC, helped validate the Machado family's approach during a critical period when the sport was determining which technical systems would dominate.

Beyond tournament victories, Machado's greatest achievement was proving that systematic, technically-sound BJJ could compete successfully against any style. His results contributed to the Machado family's reputation and helped establish their academy as a premier training destination for serious competitors worldwide.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>John Machado exemplifies the Machado family's technical philosophy: position before submission, control before action, and systematic progression. His fighting style emphasizes precise footwork, weight distribution, and leverage manipulation over pure athleticism. Machado developed exceptional skill in transitional movements and position changes, understanding that fluid movement between positions creates submission opportunities.

Known for his leg lock expertise, Machado helped pioneer advanced heel hook and ankle lock techniques that later became standard in no-gi grappling. His leg lock system demonstrated how seemingly minor technical details could create decisive advantages at elite levels. Additionally, Machado excelled in top control, utilizing sustained positional dominance to wear down opponents before executing submissions.

His submission transitions showcased understanding of how positions connect seamlessly. Rather than forcing isolated techniques, Machado demonstrated how to flow between attacks based on opponent reactions. This dynamic approach influenced an entire generation of grapplers who adopted the principle of reading opponents and adjusting techniques accordingly.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>John Machado's contributions to Brazilian Jiu-Jitsu extend far beyond his competition record. As part of the Machado family lineage, he helped preserve and evolve technical knowledge during pivotal decades of the sport's development. The Machado academy became a beacon for serious students seeking systematic, scientifically-grounded instruction rather than pure athleticism-based training.

Machado's influence shaped how modern grapplers approach leg lock systems, positional dominance, and technical transitions. His work demonstrated that BJJ could evolve while maintaining fundamental principles that define the art. International competitors who trained at Machado academies carried these principles worldwide, creating a technical influence that extended across continents.

Today, John Machado's legacy represents a crucial bridge between traditional BJJ fundamentals and modern competition innovations. His systematic approach to teaching and technical refinement influenced how gyms structure their curricula globally. The Machado family's continued presence in elite grappling validates John's foundational contributions, ensuring his impact on the sport remains relevant for current and future generations of Brazilian Jiu-Jitsu practitioners.</p>
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
