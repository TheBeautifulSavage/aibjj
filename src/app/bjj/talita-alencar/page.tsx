import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Talita Alencar: BJJ Champion & Grappling Legend | AIBJJ",
  description: "Discover Talita Alencar's BJJ career, achievements, and fighting style. Learn about the Brazilian grappling champion's legacy.",
};

export default function Page() {
  const tags = ["Talita Alencar", "BJJ", "Brazilian Jiu-Jitsu", "Grappling", "Women's BJJ"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Talita Alencar: BJJ Champion & Grappling Legend</h1>
        <p className="mt-4 text-xl text-zinc-400">Discover Talita Alencar's BJJ career, achievements, and fighting style. Learn about the Brazilian grappling champion's legacy.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Talita Alencar emerged as one of the most dominant female grapplers in Brazilian Jiu-Jitsu history, representing Brazil on the international stage. Beginning her training in the competitive Brazilian jiu-jitsu environment, Alencar developed her skills under experienced instructors who recognized her natural athleticism and technical aptitude. Her journey through the ranks showcased her dedication to the art and her commitment to excellence in a sport that demands constant evolution.

Alencar's rise through the BJJ ranks coincided with the sport's explosive growth in women's grappling. She trained extensively in Brazil, where she refined her techniques and built the foundational skills that would define her competitive career. Her progression from white belt to elite-level competition demonstrated the systematic approach she took to mastering Brazilian jiu-jitsu. Throughout her development, Alencar became known for her technical proficiency and competitive mindset, qualities that would propel her to championship-level success.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Talita Alencar's competition record established her as a formidable force in women's BJJ, particularly at the absolute heavyweight division and her respective weight class. She competed in some of the most prestigious tournaments in the sport, including the IBJJF World Championships, Pan American Championships, and other high-level international competitions. Her consistent performances against top-ranked competitors earned her recognition among grappling enthusiasts worldwide.

Throughout her career, Alencar claimed multiple medals at elite-level tournaments, demonstrating her ability to perform under pressure against the world's best female athletes. Her success at major competitions solidified her status as one of Brazil's premier female grapplers. Alencar's competitive achievements extended beyond individual tournaments, as she contributed significantly to team-based competitions and helped elevate the profile of women's Brazilian jiu-jitsu globally. Her victories over notable opponents and consistent placements at world-class events remain testament to her technical skill and competitive excellence.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Talita Alencar's grappling style combined technical precision with powerful positional control, characteristics that made her particularly effective in top-pressure situations. Her approach emphasized solid fundamentals and intelligent positioning, allowing her to dominate matches through superior control rather than relying solely on explosive athleticism. Alencar demonstrated exceptional skills in maintaining dominant positions and extracting submissions from her opponents.

Her technical arsenal included strong leg lock entries, positional control sequences, and methodical passing systems that reflected the high level of Brazilian jiu-jitsu training available in her country. Alencar's ability to transition smoothly between submissions and positional improvements showcased her comprehensive understanding of grappling mechanics. She developed a reputation for technical excellence and match intelligence, making her a complete athlete rather than a specialist in any single technique. Her fighting style influenced many younger female competitors who studied her matches to improve their own technical approaches to BJJ competition.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on Women's BJJ</h2>
            <p>Talita Alencar's impact on women's Brazilian jiu-jitsu extended beyond her competition victories, contributing to the elevation and visibility of female athletes in the sport. As one of Brazil's elite female grapplers, she represented the high technical standard available to women training at the highest levels of BJJ. Her success helped inspire younger generations of female athletes to pursue grappling with serious competitive intent and dedication.

Alencar's career trajectory demonstrated the viability of professional women's grappling and helped legitimize women's BJJ as a competitive discipline worthy of major tournament platforms and sponsorship opportunities. Through her achievements and technical displays, she expanded the possibilities for female athletes in Brazilian jiu-jitsu. Her influence persists in the training methods and technical approaches adopted by contemporary female competitors who recognize the importance of her contributions to the sport's development. Talita Alencar remains a significant figure in women's grappling history, remembered for her technical excellence and her role in advancing female representation in Brazilian jiu-jitsu competition.</p>
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
