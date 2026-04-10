import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Kendall Reusing: BJJ Competitor Profile & Career | AIBJJ",
  description: "Learn about Kendall Reusing's BJJ career, competition achievements, fighting style, and impact on Brazilian Jiu-Jitsu grappling.",
};

export default function Page() {
  const tags = ["Kendall Reusing", "BJJ", "Brazilian Jiu-Jitsu", "grappling", "competition"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Kendall Reusing: BJJ Competitor Profile & Career</h1>
        <p className="mt-4 text-xl text-zinc-400">Learn about Kendall Reusing's BJJ career, competition achievements, fighting style, and impact on Brazilian Jiu-Jitsu grappling.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Kendall Reusing emerged as a notable figure in the Brazilian Jiu-Jitsu community through dedicated training and consistent competition participation. Like many modern grapplers, Reusing's introduction to BJJ came during the sport's explosive growth in North America, where the discipline transitioned from niche martial art to mainstream athletic pursuit. Her journey reflects the commitment required to excel at the highest levels of competitive grappling, combining technical refinement with strategic competition planning.

Reusing's development as a competitor showcased the importance of training consistency and quality instruction. Throughout her career, she has emphasized fundamental techniques while progressively incorporating advanced submissions and positional control methods. Her progression through belt levels demonstrated the typical pathway for serious BJJ athletes, marked by competition experience and technical growth across various tournament circuits.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Kendall Reusing competed extensively throughout the grappling circuit, participating in prestigious tournaments that define BJJ excellence. Her competition resume includes appearances at major events where she faced top-ranked opponents across various weight classes and divisions. These competitions provided platforms to showcase technical proficiency and competitive acumen against elite-level grapplers.

Reusing's achievement in BJJ competition extends beyond individual tournament placements to include contributions to team success and advancement of women's grappling. Throughout her competitive tenure, she demonstrated consistency across multiple tournament formats, including absolute divisions where she competed against significantly larger opponents. Her willingness to challenge herself in these settings reflected the competitive spirit characteristic of dedicated BJJ athletes. The breadth of her competition experience across different rule sets and tournament organizations solidified her reputation within the grappling community as a serious and determined competitor.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Kendall Reusing's grappling approach combines technical fundamentals with tactical adaptability, a hallmark of successful modern BJJ competitors. Her style emphasizes positional control and methodical advancement, utilizing classical BJJ principles to manage distance and control opponents. This foundation-focused methodology allowed her to succeed against varied opponents with different strengths and athletic attributes.

Reusing's technical arsenal includes proficiency in both gi and no-gi grappling, demonstrating the versatility required in contemporary BJJ. Her competition success came through consistent application of fundamental techniques refined through thousands of training hours and match experience. She exemplified the importance of defensive positioning and efficient energy management, particularly valuable when facing larger or more athletic opponents. Her willingness to compete in diverse tournament formats showcased technical breadth and adaptability, key qualities separating elite competitors from casual participants in the grappling community.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Kendall Reusing's contributions to Brazilian Jiu-Jitsu extend beyond her competition achievements to include broader impact on women's grappling development. As a visible competitor during a transformative period for women's BJJ, she helped advance the sport's competitive standards and visibility. Her participation in major tournaments contributed to the growing recognition that women's grappling deserved equal attention and organizational support.

Reusing's career trajectory reflects the evolving landscape of BJJ, where increased competition opportunities enabled women athletes to develop higher technical levels and achieve greater recognition. Through consistent competition and technical development, she contributed to establishing higher performance benchmarks in women's grappling. Her legacy encompasses both specific tournament achievements and the broader influence of dedicated athletes who elevated competitive standards. As BJJ continues expanding globally, competitors like Reusing represent the foundation of modern women's grappling, demonstrating that success in Brazilian Jiu-Jitsu comes through dedication, technical refinement, and unwavering commitment to competitive excellence.</p>
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
