import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Copa Podio 2015: Premier Brazilian Jiu-Jitsu Tournament | AIBJJ",
  description: "Copa Podio 2015 was a landmark BJJ tournament featuring elite grappling competitors from around the world competing in various weight classes.",
};

export default function Page() {
  const tags = ["Copa Podio", "BJJ Tournament", "Brazilian Jiu-Jitsu", "Grappling"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Copa Podio 2015: Premier Brazilian Jiu-Jitsu Tournament</h1>
        <p className="mt-4 text-xl text-zinc-400">Copa Podio 2015 was a landmark BJJ tournament featuring elite grappling competitors from around the world competing in various weight classes.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Overview</h2>
            <p>Copa Podio 2015 represented one of the most prestigious Brazilian Jiu-Jitsu tournaments of its era, showcasing elite-level grappling talent from around the globe. Held in Brazil, the event attracted competitors across multiple weight divisions, from lightweight to heavyweight categories. The tournament format emphasized technical excellence and competitive intensity, drawing athletes from leading teams and academies worldwide. Copa Podio distinguished itself through its professional presentation, high production quality, and commitment to promoting the sport at its highest level. The event featured both absolute and weight-class divisions, allowing competitors multiple opportunities to demonstrate their skills. Athletes competed for significant prize money and prestige, making Copa Podio a defining event in the professional BJJ circuit. The tournament served as a platform for emerging champions to establish themselves alongside established elite competitors, creating compelling matchups that captivated the grappling community. Copa Podio's success in 2015 reinforced its position as a marquee event in international Brazilian Jiu-Jitsu competition.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Results and Champions</h2>
            <p>Copa Podio 2015 produced numerous notable champions and standout performances across its various divisions. The tournament crowned weight-class champions who demonstrated exceptional technical proficiency and competitive dominance. Elite competitors from renowned academies claimed titles, further cementing their status within the sport. The absolute division served as the tournament's centerpiece, determining the overall champion regardless of weight class. Several athletes utilized Copa Podio as a springboard for ascending rankings in the international BJJ hierarchy. The results reflected the high caliber of competitors present, with matches frequently showcasing advanced technique and strategic depth. Champions in their respective divisions earned substantial prize purses alongside valuable ranking points. The tournament results rippled throughout the global BJJ community, influencing rankings and setting narratives for future competitions. Competitors' performances at Copa Podio 2015 shaped career trajectories and established reputations that would persist throughout subsequent seasons. The event's competitive outcomes underscored the evolving technical sophistication of professional Brazilian Jiu-Jitsu at its elite level.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Notable Matches and Moments</h2>
            <p>Copa Podio 2015 featured several memorable confrontations between top-tier grapplers, delivering compelling technical exchanges and dramatic finishes. Matches frequently showcased innovative approaches to traditional BJJ positions and submission sequences. Competitors demonstrated the evolution of leg lock systems, guard passing techniques, and defensive strategies characteristic of contemporary elite grappling. Several encounters between ranked athletes produced overtime scenarios and sudden-death advantages, intensifying competition dynamics. Submission victories highlighted the technical depth of participating athletes, while points-based decisions demonstrated positional mastery and control. The tournament's bracket arrangement created intriguing matchups between stylistically diverse competitors, producing varied grappling philosophies in action. Notable upsets challenged conventional rankings and demonstrated the unpredictable nature of elite-level competition. Standout performances from unexpected contenders generated excitement and earned recognition from the grappling community. The intensity and technical quality of matches reinforced Copa Podio's reputation for hosting world-class BJJ competition, with individual performances becoming referenced discussions within the sport.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Historical Significance</h2>
            <p>Copa Podio 2015 occupies an important position in professional Brazilian Jiu-Jitsu history, representing the sport's continued growth and professionalization. The tournament demonstrated the viability of premium BJJ events offering substantial prize purses and professional production values. Copa Podio's success illustrated increasing market demand for high-level grappling content and professional competitions. The event contributed to establishing BJJ as a legitimate professional sport with dedicated audiences and commercial appeal. Copa Podio 2015 coincided with the sport's expanding global reach, featuring international competitors and attracting worldwide viewership. The tournament influenced subsequent event promotions and competition formats adopted across the professional BJJ circuit. Results from Copa Podio 2015 remain relevant reference points for understanding competitor rankings and technical evolution during that competitive era. The event showcased emerging athletes who would become dominant forces in following years, marking pivotal moments in their careers. Copa Podio's legacy extends beyond individual tournament results, encompassing its role in popularizing professional Brazilian Jiu-Jitsu and establishing standards for premium grappling competitions.</p>
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
