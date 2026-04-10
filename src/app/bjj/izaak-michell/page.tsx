import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Izaak Michell - BJJ Grappler Biography | AIBJJ",
  description: "Comprehensive biography of Izaak Michell, Brazilian Jiu-Jitsu athlete. Explore his competition record, techniques, and impact on modern grappling.",
};

export default function Page() {
  const tags = ["Izaak Michell", "Brazilian Jiu-Jitsu", "BJJ athlete", "grappling champion", "submission wrestling"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Izaak Michell - BJJ Grappler Biography</h1>
        <p className="mt-4 text-xl text-zinc-400">Comprehensive biography of Izaak Michell, Brazilian Jiu-Jitsu athlete. Explore his competition record, techniques, and impact on modern grappling.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Izaak Michell's introduction to Brazilian Jiu-Jitsu began during his formative years, where he discovered a passion for grappling that would define his athletic career. Training through various academies, Michell developed a well-rounded foundation in both gi and no-gi grappling, earning his stripes through dedicated mat time and technical refinement. His early competitions at local and regional levels showcased his natural athleticism and tactical awareness, drawing attention from coaches and competitors alike.

The progression through the ranks demonstrated Michell's commitment to mastering fundamental techniques while gradually incorporating advanced strategies. His training philosophy emphasized deep technical understanding over reliance on physical attributes alone, a mindset that would prove invaluable as he faced increasingly competitive opponents. Early victories in amateur divisions provided crucial experience and confidence building, establishing the foundation for his later successes in professional grappling circuits.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Izaak Michell's competitive resume reflects consistent performance across multiple grappling platforms and weight divisions. Throughout his BJJ career, Michell competed in prestigious tournaments including major IBJJF-sanctioned events, submission-only competitions, and professional grappling matches. His competitive victories demonstrate versatility against diverse fighting styles and tactical approaches, earning him recognition among peers and coaches in the international grappling community.

Michell's achievements extend beyond individual tournament wins, encompassing notable performances at elite-level competitions where he faced established names in the sport. His ability to compete successfully at different rulesets—from points-based IBJJF format to submission wrestling—highlights his technical adaptability and ring intelligence. Tournament placements and submission victories showcase both his offensive capabilities and defensive resilience, establishing credibility as a serious competitor who consistently performs under pressure.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Izaak Michell's grappling style combines positional dominance with effective submission hunting, reflecting years of technical development and strategic refinement. Known for his leg lock proficiency, Michell demonstrates particularly strong heel hook entries and finishes from both top and bottom positions. His leg lock game incorporates modern foot lock sequences and knee reap variations, making him dangerous in scrambles and transitions where many grapplers struggle.

Beyond leg attacks, Michell's technical arsenal includes solid wrestling credentials, strong clinch control, and effective upper body submissions. His approach emphasizes fluid transitions between positions, maintaining pressure while creating multiple submission threats. Competition footage reveals a methodical grappler who controls match pace through top position wrestling and positional grinding, only escalating to aggressive submission attempts when advantages are maximized. This patient, calculated approach minimizes risks while systematically breaking down opponent defenses, making him tactically cerebral alongside technically proficient.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Izaak Michell's contributions to Brazilian Jiu-Jitsu extend beyond his personal competition record, influencing how modern grapplers approach leg lock systems and submission wrestling. His emphasis on technical leg lock proficiency in an era of evolving grappling standards helped elevate submission wrestling expertise within broader BJJ communities. Through competition results and technical demonstrations, Michell exemplified how systematic leg lock development could become integral to well-rounded grappling arsenals.

Michell's competitive journey and technical approach continue inspiring emerging grapplers to develop submission-focused skills while maintaining positional awareness. His presence in professional grappling helped legitimize submission wrestling formats and demonstrated the value of specialized training in specific techniques. Beyond direct student instruction, Michell's competitive legacy reinforces principles of technical dedication and intelligent match strategy that resonate throughout Brazilian Jiu-Jitsu communities worldwide, cementing his role as a notable figure in contemporary grappling evolution.</p>
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
