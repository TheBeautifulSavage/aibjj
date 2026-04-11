import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "EBI 10: Eddie Bravo Invitational - Premier Submission Grappling | AIBJJ",
  description: "EBI 10 Eddie Bravo Invitational featured elite submission grappling competition. Explore champions, memorable matches, and the event's impact on modern BJJ",
};

export default function Page() {
  const tags = ["EBI 10", "Eddie Bravo Invitational", "submission grappling", "BJJ tournament"];
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
        <h1 className="text-4xl font-black sm:text-5xl">EBI 10: Eddie Bravo Invitational - Premier Submission Grappling</h1>
        <p className="mt-4 text-xl text-zinc-400">EBI 10 Eddie Bravo Invitational featured elite submission grappling competition. Explore champions, memorable matches, and the event's impact on modern BJJ.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Overview</h2>
            <p>EBI 10, the tenth iteration of Eddie Bravo's premier submission grappling tournament, continued the tradition of showcasing pure no-gi grappling at the highest competitive level. Held in 2016, the event featured both male and female competitors across multiple weight divisions, maintaining EBI's signature format that emphasized submission-only victories and sudden-death overtime rounds. The tournament attracted elite grapplers from around the world, including accomplished BJJ athletes, wrestlers, and submission specialists. EBI 10 maintained the promotion's commitment to exciting, fast-paced grappling with minimal stalling penalties and emphasis on aggressive, creative techniques. The event took place at the iconic Schubas Tavern venue in Chicago, which had become synonymous with EBI's most memorable tournaments. The competition showcased the evolution of leg lock systems, footlock techniques, and modern no-gi grappling strategies that had become increasingly dominant in submission wrestling.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Results and Champions</h2>
            <p>EBI 10 produced several notable champions across its divisions. The tournament featured impressive performances from competitors who would continue to shape the sport's landscape. Winners demonstrated mastery of submission grappling's technical requirements, with many matches decided by heel hooks, neck cranks, and other advanced techniques. The event highlighted the growing sophistication of leg lock attacks in modern BJJ, with competitors at the highest levels employing intricate footlock and heel hook systems to secure victories. Female competitors also showcased exceptional skill and athleticism throughout their divisions. The tournament's results reflected the ongoing evolution of submission grappling tactics, particularly the increased prevalence of lower body attacks that had become staples of elite-level no-gi competition. Champions earned recognition within the grappling community and demonstrated their technical prowess on a prestigious platform that Eddie Bravo had established as one of submission wrestling's most respected tournaments.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Notable Matches and Moments</h2>
            <p>EBI 10 delivered several memorable encounters that exemplified high-level submission grappling. Matches featured creative exchanges, defensive wizardry, and technically sound attacks that captivated audiences. The tournament showcased competitors implementing leg lock systems with increasing sophistication, demonstrating the leg lock revolution's continued momentum in modern grappling. Some matches went to sudden-death overtime, producing dramatic finishes where competitors executed submissions under extreme pressure. The event highlighted contrasting grappling styles, from traditional upper body submissions to modern leg lock specialists whose approaches had fundamentally altered submission wrestling's tactical landscape. Fans witnessed technical exchanges that demonstrated the sport's complexity and the athletes' extensive preparation. Key matches showcased both established veterans and rising competitors proving their capabilities against elite opposition. The tournament provided platforms for grapplers to experiment with novel techniques and refine their submission systems, contributing valuable content to the grappling community's technical library.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Historical Significance</h2>
            <p>EBI 10 represented a crucial moment in submission grappling's evolution during the mid-2010s. The tournament further cemented Eddie Bravo Invitational's status as one of submission wrestling's premier platforms, where innovation and technical excellence converged. The event contributed to the leg lock revolution's mainstream acceptance, validating lower body submission systems that traditionalists had previously dismissed. EBI 10 demonstrated that no-gi grappling had matured into a sophisticated sport with diverse tactical approaches and world-class athletes. The tournament's format and emphasis on submissions influenced how submission grappling competitions were structured globally. EBI 10 helped popularize submission wrestling among mainstream audiences and continued building the credibility of no-gi grappling as a serious combat sport discipline. The event's outcomes and technical displays influenced training methodologies and competition strategies throughout the grappling community, reinforcing EBI's role in shaping modern BJJ and submission wrestling's technical development and competitive standards.</p>
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
