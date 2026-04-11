import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "UFC Fight Pass Invitational 1 - BJJ Grappling Event | AIBJJ",
  description: "Comprehensive guide to UFC Fight Pass Invitational 1, featuring elite grappling competitors, championship results, and notable matches from this significan",
};

export default function Page() {
  const tags = ["UFC Fight Pass Invitational", "BJJ Tournament", "Grappling", "MMA", "Brazilian Jiu-Jitsu"];
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
        <h1 className="text-4xl font-black sm:text-5xl">UFC Fight Pass Invitational 1 - BJJ Grappling Event</h1>
        <p className="mt-4 text-xl text-zinc-400">Comprehensive guide to UFC Fight Pass Invitational 1, featuring elite grappling competitors, championship results, and notable matches from this significant BJJ tournament.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Overview</h2>
            <p>The UFC Fight Pass Invitational 1 represented a significant venture into the competitive grappling space by the UFC, streaming exclusively on UFC Fight Pass. This invitation-only tournament brought together elite Brazilian Jiu-Jitsu competitors from around the world to compete in a bracket-style format. The event showcased high-level grappling with matches featuring some of the sport's most technical and dangerous submission specialists and positional grapplers. The tournament format emphasized exciting, competitive matches that appealed to both hardcore grappling enthusiasts and casual MMA fans. By hosting this event on Fight Pass, the UFC demonstrated its commitment to promoting pure grappling competition alongside its combat sports offerings. The production quality and live commentary elevated the viewing experience, making technical grappling accessible to a broader audience and highlighting the intricate skill sets required at the highest levels of BJJ competition.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Results and Champions</h2>
            <p>The UFC Fight Pass Invitational 1 crowned champions across multiple weight divisions, with victory going to competitors who demonstrated exceptional technical skill, conditioning, and strategic grappling acumen. The tournament featured matches between recognizable names in the BJJ community, including established competitors and rising talents. Champions were determined through a series of matches utilizing standard BJJ scoring, submissions, and advantages. The winners of each division claimed prestigious titles and substantial prize money, reflecting the UFC's investment in promoting elite grappling competition. Each divisional champion showcased a distinct style, whether through dominant positional control, relentless submission attempts, or technical proficiency in escapes and reversals. The results highlighted the depth of talent in competitive BJJ and provided valuable exposure for competitors competing at the highest amateur and professional levels. These champions later became referenced benchmarks in the grappling community and several parlayed their success into prominent careers in professional MMA or continued BJJ competition.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Notable Matches and Moments</h2>
            <p>The tournament produced several memorable matches that demonstrated the intensity and technical brilliance of elite-level grappling. Matches featured intense scrambles, creative submission attempts, and display of advanced guard work that captivated audiences. Several encounters went to decision, with judges determining winners through accumulated points and advantages, while others ended decisively via submission, showcasing the lethal submission game of top competitors. Notable performances included displays of leg lock sequences, intricate collar choke systems, and dynamic positional transitions that exemplified modern BJJ evolution. Some matches became talking points within the grappling community for their technical quality or unexpected outcomes. The tournament's live broadcast format allowed fans worldwide to witness these moments in real-time, generating discussion on social media and in BJJ forums. Key performances elevated certain competitors' profiles significantly, leading to future match offers and sponsorship opportunities. These matches served as educational content for aspiring grapplers studying high-level competition tactics and techniques.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Historical Significance</h2>
            <p>The UFC Fight Pass Invitational 1 represented an important moment in grappling's mainstream visibility, as a major combat sports organization invested resources into promoting pure BJJ competition. By streaming on UFC Fight Pass, the event reached millions of subscribers globally, introducing serious grappling content to audiences primarily familiar with MMA. This venture legitimized competitive grappling as entertainment worthy of significant production and investment, competing with other major BJJ tournaments like ADCC and IBJJF events. The tournament demonstrated that technical grappling could generate compelling entertainment without strikes or MMA context. The success of the first invitational potentially laid groundwork for future similar events, though subsequent iterations varied in prominence. The event contributed to growing acceptance and appreciation of pure grappling competitions within mainstream combat sports culture. It showcased rising talent in the sport and created permanent records of performances that influenced competitive grappling's landscape. The invitational helped bridge audiences between MMA and pure BJJ communities.</p>
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
