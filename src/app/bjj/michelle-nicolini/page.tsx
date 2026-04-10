import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Michelle Nicolini: BJJ Legend and Multiple-Time World Champion | AIBJJ",
  description: "Discover Michelle Nicolini's remarkable BJJ career, achievements, and influence as one of women's grappling's greatest competitors and innovators.",
};

export default function Page() {
  const tags = ["Michelle Nicolini", "Brazilian Jiu-Jitsu", "Women's BJJ", "Jiu-Jitsu Champion", "Grappling"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Michelle Nicolini: BJJ Legend and Multiple-Time World Champion</h1>
        <p className="mt-4 text-xl text-zinc-400">Discover Michelle Nicolini's remarkable BJJ career, achievements, and influence as one of women's grappling's greatest competitors and innovators.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Michelle Nicolini is a Brazilian jiu-jitsu pioneer who transformed women's grappling through her exceptional talent and dedication. Born and raised in Brazil, Nicolini was introduced to BJJ at a young age, developing her skills in a sport that was still emerging for women competitors. She trained under some of Brazil's most respected instructors, absorbing technical knowledge and the competitive mindset that would define her career.

Nicolini's early competition days showcased her natural athleticism and innovative approach to grappling. Rather than following traditional patterns, she developed her own technical arsenal, blending aggressive positioning with strategic submissions. Her progression through the ranks was swift and impressive, earning her promotions and respect within the Brazilian jiu-jitsu community. By her teenage years, Nicolini was already establishing herself as a formidable competitor at both national and international levels, setting the stage for what would become one of the most dominant careers in women's BJJ history.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Michelle Nicolini's competition resume is extraordinary, featuring multiple World Championship titles and victories at the sport's most prestigious tournaments. She has won the IBJJF World Championship multiple times across different weight divisions, demonstrating her adaptability and technical excellence. Nicolini also claimed numerous Pan-American Championship titles and regularly competed at the Abu Dhabi Combat Club (ADCC) submission wrestling championship, where she proved her skills against the world's elite competitors.

Her dominance extended across various tournaments, including the European Open and numerous super fight competitions. Nicolini accumulated victories against some of women's jiu-jitsu's most respected names, building a resume that places her among the greatest athletes in female grappling. Beyond titles and medals, her consistent performance at the highest levels over many years demonstrates remarkable longevity and continuous improvement. She maintained her competitive edge while facing evolving competition, adapting her game and staying relevant in a sport that constantly evolved around her exceptional skill level.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Michelle Nicolini's grappling style is characterized by technical precision, aggressive leg lock entries, and innovative submission attacks. She pioneered leg lock techniques in women's jiu-jitsu, developing sophisticated footlock and heel hook approaches that became increasingly standard in modern grappling. Her ability to transition seamlessly between positions and attacks made her unpredictable and dangerous from virtually any position on the mat.

Nicolini's signature techniques include her excellent knee reaping, heel hook finishes, and positional control from top pressure positions. She combined upper body control with lower body attacks in ways that created inescapable situations for opponents. Her match footage reveals a fighter who understood timing, leverage, and the importance of controlling the opponent's base before committing to submissions. Nicolini's technical innovations influenced how subsequent generations of female grapplers approach leg lock systems and submission chaining, making her not just a champion but also a technical innovator who expanded the tactical possibilities within women's jiu-jitsu.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on Women's BJJ</h2>
            <p>Michelle Nicolini's impact on Brazilian jiu-jitsu extends far beyond her competition victories. She elevated women's grappling to new technical heights and proved that female competitors could perform at the highest levels of submission wrestling. Her success opened doors for subsequent generations of female athletes, demonstrating that women's jiu-jitsu deserved the same respect, investment, and media attention as men's divisions.

Nicolini's technical innovations, particularly her leg lock systems, became foundational knowledge for modern grapplers of all genders. She challenged gender stereotypes within martial arts and showed that women could compete with the same aggression, technical sophistication, and strategic depth as their male counterparts. Her career trajectory inspired countless young female athletes to pursue jiu-jitsu seriously and competitively. Today, Michelle Nicolini's legacy continues through her influence on technique, her role as a mentor and instructor, and her undeniable place in BJJ history. She remains a reference point for understanding women's jiu-jitsu evolution and continues contributing to the sport's development.</p>
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
