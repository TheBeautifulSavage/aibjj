import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "EBI 5 Eddie Bravo Invitational - Grappling Tournament | AIBJJ",
  description: "EBI 5 Eddie Bravo Invitational coverage including results, champions, notable matches and the event's impact on submission grappling.",
};

export default function Page() {
  const tags = ["EBI 5", "Eddie Bravo Invitational", "submission grappling", "BJJ tournament"];
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
        <h1 className="text-4xl font-black sm:text-5xl">EBI 5 Eddie Bravo Invitational - Grappling Tournament</h1>
        <p className="mt-4 text-xl text-zinc-400">EBI 5 Eddie Bravo Invitational coverage including results, champions, notable matches and the event's impact on submission grappling.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Overview</h2>
            <p>EBI 5 (Eddie Bravo Invitational 5) took place on November 14, 2015, at the Palms Casino Resort in Las Vegas, Nevada. The event continued Eddie Bravo's mission to revolutionize grappling competition by showcasing submission-only matches without points or advantages. EBI tournaments feature a unique format emphasizing leg lock transitions and creative submissions that traditional point-based competitions discourage. The event attracted elite submission grapplers, leg lock specialists, and BJJ practitioners seeking to test their skills in a ruleset that rewards finishing techniques above all else. With matches ranging from 10 to 20 minutes depending on bracket position, competitors faced extended periods requiring endurance, technical proficiency, and submission-hunting instincts. The Las Vegas venue provided a professional production quality that elevated the event's profile within the grappling community. EBI 5 maintained the tournament's reputation for unpredictable outcomes where unexpected submissions and leg lock exchanges frequently determined winners, making it essential viewing for serious submission grappling enthusiasts.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Results and Champions</h2>
            <p>EBI 5 produced several notable champions across its weight divisions. The heavyweight division saw intense competition among top submission specialists competing for prominence. Multiple matches showcased leg lock exchanges that defined modern submission grappling, with heel hooks and reaping becoming central tactical elements. Rising competitors demonstrated technical mastery in leg lock sequences, while established veterans proved their enduring dominance in submission wrestling. The tournament's bracket system ensured competitors faced progressively skilled opponents, creating dramatic finals matches. Winners demonstrated exceptional cardio, technical adaptability, and submission threat awareness. Several matches required overtime sudden submission rounds where competitors battled for finishing positions. The results reflected EBI 5's unpredictable nature, where technical innovation and submission-focused grappling produced unexpected champion selections. Participants gained significant credibility within the submission grappling community through strong performances, regardless of final placement. The event reinforced certain competitors' reputations while elevating others' profiles significantly within the sport's upper echelon.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Notable Matches and Moments</h2>
            <p>EBI 5 delivered memorable grappling exchanges that highlighted submission wrestling's technical depth. Leg lock sequences dominated match narratives as competitors demonstrated advanced heel hook entries, counter-attacks, and defensive escapes. Several matches featured dramatic overtime sudden submission rounds where exhausted competitors battled for position changes and submission opportunities. Unexpected submissions occurred regularly, defying predictions and demonstrating grappling's unpredictable nature. High-level leg lock specialists displayed intricate footlock transitions that audiences found captivating despite technical complexity. Certain matches showcased exceptional cardio and positional control, with grapplers maintaining pressure through extended periods. Standout performances from emerging competitors announced their arrival as serious submission wrestling threats. Veteran grapplers demonstrated why experience matters in submission-only formats requiring extended match endurance. The tournament's unique rules rewarded creative submissions and leg lock mastery, producing grappling sequences rarely seen in point-based competitions. Several competitors earned recognition through exceptional performances that elevated their standing within submission wrestling's elite circles.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Historical Significance</h2>
            <p>EBI 5 represented a pivotal moment in submission grappling's evolution during 2015, furthering Eddie Bravo's vision of submission-focused competition. The event demonstrated growing mainstream interest in leg lock-heavy grappling, establishing submission wrestling's credibility as legitimate combat sport. EBI tournaments collectively influenced IBJJF and other organizations to reconsider submission emphasis within competitive structures. EBI 5 accelerated leg lock technique development, inspiring widespread adoption among competitors previously focusing exclusively on traditional positions. The tournament proved submission-only formats created compelling entertainment while maintaining technical integrity. By 2015, EBI had established itself as essential viewing for grappling enthusiasts seeking innovation beyond traditional ruleset constraints. Several EBI 5 competitors progressed to prominence in subsequent tournaments and professional grappling promotions. The event contributed significantly to modern BJJ's evolving technical landscape, particularly regarding lower body submission mastery. EBI 5 reinforced that submission wrestling offered distinct entertainment value and competitive challenges compared to point-based systems, influencing grappling's direction moving forward.</p>
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
