import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Kaynan Duarte: Elite BJJ Competitor Profile | AIBJJ",
  description: "Discover Kaynan Duarte's BJJ career, competition achievements, signature techniques, and impact on modern grappling. Elite Brazilian Jiu-Jitsu athlete prof",
};

export default function Page() {
  const tags = ["Kaynan Duarte", "Brazilian Jiu-Jitsu", "BJJ Competitor", "Grappling", "IBJJF"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Kaynan Duarte: Elite BJJ Competitor Profile</h1>
        <p className="mt-4 text-xl text-zinc-400">Discover Kaynan Duarte's BJJ career, competition achievements, signature techniques, and impact on modern grappling. Elite Brazilian Jiu-Jitsu athlete profile.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Kaynan Duarte emerged as one of Brazil's most promising grappling talents during the early 2010s. Born and raised in Rio de Janeiro, Duarte was introduced to Brazilian Jiu-Jitsu at a young age, following the cultural tradition deeply embedded in his hometown. He trained through the fundamental ranks with dedication, quickly demonstrating the technical proficiency and athletic ability that would define his career. His development as a competitor coincided with a golden era of Brazilian Jiu-Jitsu, where intense competition and innovative techniques flourished. Duarte's early success in regional competitions established him as a rising prospect in the sport. He eventually earned his black belt and began competing at the highest levels of international grappling. Throughout his progression, Duarte maintained a commitment to technical excellence while developing the physical conditioning necessary to compete against elite-level opponents. His journey reflects the competitive nature of modern BJJ, where athletes must continuously evolve their skills to remain at the forefront of the sport.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Kaynan Duarte has compiled an impressive resume competing in prestigious BJJ competitions worldwide. He has competed in multiple weight categories throughout his career, demonstrating versatility and adaptability across different divisions. His performances at major tournaments have earned him recognition among the sport's elite competitors. Duarte has secured podium finishes at significant events, showcasing his ability to execute under pressure against top-ranked opponents. His competition strategy emphasizes technical precision combined with aggressive positioning and control. Throughout his career, Duarte has faced and defeated numerous high-caliber competitors, establishing himself as a formidable presence in international grappling. He has consistently competed at events sanctioned by the International Brazilian Jiu-Jitsu Federation (IBJJF), maintaining the highest standards of competitive integrity. His results reflect not only technical skill but also the mental fortitude required to succeed at elite levels of professional BJJ competition.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Kaynan Duarte's grappling approach combines classical Brazilian Jiu-Jitsu fundamentals with modern competition tactics. His fighting style emphasizes positional control and methodical advancement through the guard and passing sequences. Duarte demonstrates exceptional leg lock proficiency, incorporating heel hooks and other lower body submissions into his arsenal. His footlock game has become increasingly refined, reflecting the evolution of leg lock systems in contemporary BJJ. Beyond leg attacks, Duarte maintains strong upper body submissions including arm triangles and various choke variations. His guard passing technique showcases excellent timing and pressure distribution, allowing him to progress against defensive opponents. Duarte's guard work displays both defensive acumen and offensive threat, where he maintains the ability to create submission opportunities while remaining positionally safe. His approach balances aggressive attack sequences with calculated risk management, preventing unnecessary position losses during competition. This comprehensive technical toolkit allows Duarte to adapt to different opponent styles and competition formats effectively.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on Modern BJJ</h2>
            <p>Kaynan Duarte has contributed significantly to the evolution of Brazilian Jiu-Jitsu technique and competition standards. His consistent performances at elite levels have influenced how modern grapplers approach leg lock systems and positional dominance. Duarte represents a generation of Brazilian athletes who refined technical execution while integrating athletic conditioning and strategic competition awareness. Through his competitive journey, he has demonstrated the effectiveness of particular passing systems and submission sequences that other competitors study and integrate into their training. His presence in international competition has elevated the overall technical level by providing a benchmark for excellence in grappling. Beyond competition, Duarte's career illustrates the dedication required to maintain elite status in modern Brazilian Jiu-Jitsu. He has inspired younger competitors through his technical proficiency and competitive longevity. Duarte's legacy extends through the lineages of athletes he has trained and influenced, contributing to the continuous advancement of the sport. His work exemplifies how individual competitors shape the collective knowledge and technical standards within the global BJJ community.</p>
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
