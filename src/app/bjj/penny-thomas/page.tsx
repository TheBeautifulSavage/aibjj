import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Penny Thomas: BJJ Champion & Grappling Pioneer | AIBJJ",
  description: "Discover Penny Thomas's BJJ journey, competition record, signature techniques, and lasting impact on women's grappling and jiu-jitsu.",
};

export default function Page() {
  const tags = ["Penny Thomas", "BJJ", "Brazilian Jiu-Jitsu", "grappling", "women's jiu-jitsu"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Penny Thomas: BJJ Champion & Grappling Pioneer</h1>
        <p className="mt-4 text-xl text-zinc-400">Discover Penny Thomas's BJJ journey, competition record, signature techniques, and lasting impact on women's grappling and jiu-jitsu.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Penny Thomas emerged as one of women's Brazilian jiu-jitsu's most dynamic competitors during the sport's explosive growth in the early 2000s. Beginning her grappling career in the gi, Thomas demonstrated exceptional natural ability and tactical awareness from her early competitions. She trained under respected instructors who recognized her potential and cultivated her technical foundation across both gi and no-gi disciplines. Thomas's path to becoming a BJJ elite athlete was marked by consistent dedication to improving her craft, competing regularly at local and regional tournaments before gaining national recognition. Her early success came from a methodical approach to training, emphasizing fundamental techniques while developing her own unique style. The combination of her athletic ability, competitive mindset, and willingness to evolve her game allowed Thomas to progress rapidly through the ranks. She became known for her work ethic in the gym and her sportsmanship on the mat, earning respect from both competitors and coaches throughout the BJJ community.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Throughout her competitive career, Penny Thomas accumulated an impressive record of victories across multiple weight classes and divisions. She competed successfully in prominent BJJ tournaments, consistently placing among the top competitors in women's grappling. Thomas's tournament results demonstrated her ability to perform under pressure and adapt her strategy against diverse opponents. Her achievements extended across both gi and no-gi competitions, showcasing her versatility as a complete grappler. Thomas earned recognition from major BJJ organizations and was frequently featured in competition highlights and rankings. Her competitive longevity allowed her to face and defeat many of the era's top female grapplers, establishing herself as a formidable force in women's jiu-jitsu. Beyond individual tournament victories, Thomas contributed to the broader elevation of women's BJJ by consistently raising the competitive level of every tournament she entered. Her results helped validate women's grappling as a serious competitive discipline worthy of attention and respect in the broader martial arts community.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Penny Thomas developed a well-rounded grappling style that emphasized technical precision and positional control. Known for her strong top game, Thomas excelled at passing guards and maintaining dominant positions with crushing pressure. Her leg lock entries and finishing sequences became signature elements of her no-gi game, utilizing both heel hooks and traditional submissions with devastating accuracy. Thomas demonstrated exceptional footlock technique, particularly in leg reaping and calf slicer applications that showcased her lower body grappling mastery. In the gi, she proved equally effective, employing a diverse range of attacks from cross-side control, north-south position, and mount. Her submission game featured solid collar chokes and arm-triangle setups that she executed with excellent timing. Thomas's approach emphasized control before submission, understanding that dominant positioning creates natural finishing opportunities. She balanced an aggressive attacking style with intelligent defense, rarely making tactical errors under competition stress. Her ability to transition fluidly between techniques and adapt against different opponents demonstrated a sophisticated understanding of grappling mechanics and strategic positioning.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on Women's BJJ</h2>
            <p>Penny Thomas's contributions to women's Brazilian jiu-jitsu extended far beyond her individual tournament results. She helped elevate the competitive standard for female grapplers during a critical period of women's BJJ development, demonstrating that women could compete at the highest technical and physical levels. Thomas served as an inspiration for aspiring female competitors, proving that serious competitive success was achievable through dedication and intelligent training. Her presence in tournaments legitimized women's grappling and contributed to increased media coverage and sponsorship opportunities for female athletes. Many upcoming grapplers cite Thomas as an influence on their own BJJ journeys, both for her technical abilities and her representation in the sport. She helped shift perceptions about women's capabilities in grappling sports, challenging outdated assumptions about female athleticism in combat sports. Thomas's legacy continues through her impact on training partners and students who learned from her experience and competitive insights. The athletes she influenced have themselves become prominent figures in women's jiu-jitsu, creating a lasting ripple effect of her contributions to the sport's growth and evolution.</p>
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
