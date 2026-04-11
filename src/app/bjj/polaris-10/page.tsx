import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Polaris 10: Premier Submission Grappling Event | AIBJJ",
  description: "Polaris 10 showcased elite submission grappling talent with intense matches and championship-level competition from top international grapplers.",
};

export default function Page() {
  const tags = ["polaris", "submission grappling", "BJJ tournament", "grappling event"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Polaris 10: Premier Submission Grappling Event</h1>
        <p className="mt-4 text-xl text-zinc-400">Polaris 10 showcased elite submission grappling talent with intense matches and championship-level competition from top international grapplers.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Overview</h2>
            <p>Polaris 10 continued the prestigious Polaris Professionalsubmission grappling series, known for showcasing the highest level of technical grappling without the constraints of points-based judging. The event featured elite competitors from around the world competing in absolute and absolute superfight divisions. Polaris events are distinctive for their emphasis on submission-only rulesets in main card matches, promoting aggressive positioning and legitimate finishing techniques. The tournament format and matchmaking reflect the promotion's commitment to presenting compelling grappling narratives and genuine competition between world-class athletes. Each edition builds on the legacy of previous events, attracting international talent and providing platforms for both established grapplers and rising competitors to demonstrate their skills at the highest competitive level.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Results and Champions</h2>
            <p>Polaris 10 featured several significant results that shaped the submission grappling landscape. The event's main card showcased matches between internationally recognized competitors competing for supremacy in submission wrestling. Top finishes and dominant performances demonstrated the technical depth of modern submission grappling across different weight classes and experience levels. The tournament's bracket structure and results contributed to defining rankings and determining next matchups within the elite grappling community. Notable victories showcased various technical approaches including leg lock systems, upper body submissions, and positional dominance patterns. Winners from Polaris 10 solidified their standing within the professional grappling circuit and earned opportunities for future high-profile matchups at subsequent events.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Notable Matches and Moments</h2>
            <p>Polaris 10 produced compelling matches highlighting different technical approaches within submission grappling. Competitors demonstrated various guard systems, passing strategies, and submission chains throughout the card. The event featured intense exchanges emphasizing both offensive aggression and defensive resilience. Notable performances showcased leg lock progressions, back control sequences, and innovative positional transitions that define contemporary submission grappling. Matches illustrated the technical depth available within rule systems prioritizing submissions over points, creating different strategic approaches compared to point-based competitions. Performances from various competitors demonstrated distinct technical signatures and problem-solving capabilities under high-pressure competition. The event contributed valuable content to submission grappling's growing media presence and competitive documentation.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Historical Significance</h2>
            <p>Polaris 10 represented another important installment within the Polaris series' evolution as submission grappling's premier professional promotion. The event continued establishing submission-only grappling as a distinct competitive format with legitimate mainstream appeal. Each Polaris card contributes to the professionalization and growth of submission wrestling as a spectator sport and serious competitive pursuit. The tournament helped showcase technical grappling talent to international audiences and influenced how submission grappling competitions structure their formats and presentation. Results from Polaris events carry weight in determining rankings and matchmaking throughout the professional grappling circuit. The series' emphasis on high-level technical competition and compelling storytelling has elevated submission grappling's status within combat sports, attracting diverse competitors and growing viewership across global grappling communities.</p>
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
