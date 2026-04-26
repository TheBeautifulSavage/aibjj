import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "ADCC 2017 Helsinki: Absolute Grappling Championship | AIBJJ",
  description: "ADCC 2017 Helsinki was a premier submission grappling tournament featuring elite competitors from around the world competing for titles.",
};

export default function Page() {
  const tags = ["ADCC", "grappling", "submission wrestling", "Helsinki 2017", "BJJ tournament"];
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
        <h1 className="text-4xl font-black sm:text-5xl">ADCC 2017 Helsinki: Absolute Grappling Championship</h1>
        <p className="mt-4 text-xl text-zinc-400">ADCC 2017 Helsinki was a premier submission grappling tournament featuring elite competitors from around the world competing for titles.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Overview</h2>
            <p>ADCC 2017 took place in Helsinki, Finland, continuing the tradition of the Abu Dhabi Combat Club's biennial submission grappling championship. The event showcased the world's most elite grapplers across multiple weight divisions for both men and women, featuring submission-only and points-based matches. The tournament attracted top competitors from various grappling disciplines including Brazilian Jiu-Jitsu, wrestling, and sambo. Athletes competed under ADCC rules, which emphasize leg lock progression and allow heel hooks at higher levels. The event represented a crucial checkpoint in the international grappling calendar, drawing thousands of spectators and establishing itself as one of the most prestigious submission wrestling competitions globally. Helsinki provided a strong venue for the tournament, bringing European grappling prominence to the forefront of international competition.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Results and Champions</h2>
            <p>The 2017 ADCC featured dominant performances from several legendary competitors. In the heavyweight absolute division, Marcio Cruz de Oliveira delivered exceptional performances with his technical superiority and submission threat. Nicky Ryan emerged as a standout performer, particularly impressing in his weight class with his innovative leg lock techniques and tactical precision. Kaynan Duarte showcased the evolution of modern leg lock jiu-jitsu, advancing deep in the tournament with aggressive positional control. In the female divisions, competitors like Ffion Davies and Gabi Garcia demonstrated the rising caliber of women's submission grappling. The tournament results highlighted the competitive depth across all weight classes, with multiple medal finishers earning international recognition. These performances set benchmarks for future ADCC competitions and influenced the global grappling community's technical development.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Notable Matches and Moments</h2>
            <p>ADCC 2017 Helsinki produced several memorable encounters that defined modern submission grappling. Intense matchups showcased the evolution of leg lock techniques, with competitors employing sophisticated footlock systems and reap variations. Several matches went deep into overtime periods, testing athletes' physical and mental endurance. Submissions were varied and technical, ranging from traditional chokes and joint locks to the emerging leg lock arsenal that increasingly dominated the sport. Dramatic position exchanges and scrambles provided edge-of-seat entertainment for spectators. The tournament demonstrated the sport's progression in athleticism and technical sophistication, with competitors executing complex chain attacks and counter-sequences. Close decisions and razor-thin margins between victory and defeat emphasized the competition's elite level. These matches generated significant discussion within the grappling community regarding rule effectiveness and the sport's technical direction.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Historical Significance</h2>
            <p>ADCC 2017 Helsinki marked an important moment in submission grappling's evolution, particularly regarding the legitimization of leg lock techniques in high-level competition. The tournament demonstrated the sport's global expansion beyond traditional strongholds, establishing Northern Europe as a viable venue. Performance data from Helsinki influenced future ADCC rule modifications and technical development. The event showcased how grappling styles were converging, with wrestlers, judokas, and BJJ athletes competing at equivalent levels. Women's participation continued expanding, validating female submission grappling as a serious competitive category. The tournament contributed to the growing professionalization of grappling, attracting sponsorships and media coverage. Results from Helsinki influenced coaching methodologies worldwide, as athletes studied and implemented successful techniques from the competition. The event reinforced ADCC's position as grappling's premier championship and contributed to the sport's broader cultural recognition.</p>
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
