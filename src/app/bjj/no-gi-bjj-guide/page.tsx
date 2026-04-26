import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "No-Gi BJJ Guide: Techniques, Rules & Training Tips | AIBJJ",
  description: "Master no-gi BJJ with our comprehensive guide covering techniques, rules, training methods, and key differences from traditional gi grappling.",
};

export default function Page() {
  const tags = ["no-gi", "grappling", "competition"];
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
        <h1 className="text-4xl font-black sm:text-5xl">No-Gi BJJ Guide: Techniques, Rules & Training Tips</h1>
        <p className="mt-4 text-xl text-zinc-400">Master no-gi BJJ with our comprehensive guide covering techniques, rules, training methods, and key differences from traditional gi grappling.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is No-Gi BJJ?</h2>
            <p>No-gi Brazilian Jiu-Jitsu is a grappling discipline practiced without the traditional kimono or gi. Athletes wear rash guards and shorts instead, making matches faster-paced and more dynamic. This format has grown exponentially in recent years, with major competitions like ADCC and submission-only tournaments showcasing elite no-gi talent. No-gi BJJ emphasizes speed, athleticism, and explosive movements compared to gi training. The absence of lapels and sleeves eliminates many gi-specific grips and submissions, requiring fighters to develop different control mechanisms. No-gi training develops superior wrestling foundations and scrambling ability. Many competitors train both gi and no-gi, as each format reinforces different aspects of grappling. The sport has influenced modern mixed martial arts significantly, with many MMA fighters using no-gi BJJ techniques. Understanding no-gi fundamentals is essential for serious grapplers wanting to compete across multiple formats and adapt to various grappling scenarios effectively.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Differences from Gi Grappling</h2>
            <p>No-gi BJJ eliminates collar chokes, sleeve grips, and other gi-specific submissions that rely on fabric control. This forces competitors to rely more on positional dominance and body control rather than grip strength. Submissions like arm drags, leg lock attacks, and neck cranks become more prominent in no-gi competition. The faster pace in no-gi demands superior cardio, as athletes can't use the gi to slow down matches. Grip fighting becomes less technical but more explosive, focusing on wrist and arm control rather than sleeve management. No-gi demands stronger wrestling fundamentals including takedowns, leg drives, and positional awareness. The slippery nature of sweat-covered skin makes submissions harder to secure, requiring excellent technique and timing. Pass percentages typically differ significantly between formats, with certain positions proving more effective without the gi. Footwork and base become critically important since you can't anchor yourself with gi grabs. Understanding these distinctions helps grapplers adapt their games when transitioning between gi and no-gi training.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Essential No-Gi Techniques to Master</h2>
            <p>Collar ties, underhooks, and clinch control form the foundation of no-gi offense and defense. The front headlock position becomes one of the most dominant spots, leading to numerous submissions and sweeps. Leg lock systems, particularly ankle locks and heel hooks, play a larger role in no-gi BJJ than traditional gi grappling. Upper body lock passing and knee slice passes adapt well to no-gi competition without relying on gi grips. The arm drag remains one of the highest-percentage submissions and back-take techniques in no-gi. Leg reap attacks and saddle positions become increasingly effective when the gi isn't available. Double-leg and single-leg takedowns require refined technique without gi handholds for balance. Chin lock submissions and neck cranks developed in no-gi are illegal in some gi competitions. Footlock entries improve significantly through no-gi training due to increased practice frequency. The guillotine choke adapts beautifully to no-gi, especially from scrambles and clinch situations. Mastering these core techniques provides a strong foundation for competitive no-gi success and wrestling-heavy grappling.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">No-Gi Training Tips and Competition Advice</h2>
            <p>Develop superior grip strength and explosive power through supplemental conditioning specific to no-gi grappling. Practice scrambling drills regularly since no-gi matches involve more position reversals and dynamic exchanges. Train wrestling-heavy partners who understand underhook and clinch control systems thoroughly. Focus on cardio endurance because no-gi matches rarely have pace breaks available during gi training. Study leg lock systems systematically, starting with ankle locks before advancing to heel hooks and reaping positions. Develop excellent footwork and base by drilling takedown defense and positional awareness extensively. Use video review to study high-level no-gi competitors and understand their technical systems. Implement cross-training with freestyle wrestling to enhance sprawl mechanics and top-control positions. Practice maintaining grip fighting distances where your strengths excel. Condition specifically for explosive movements since no-gi matches demand higher work rates. Compete regularly in submission-only tournaments to test techniques under pressure. Understand current rule sets thoroughly before competing, as regulations vary by organization. Build a strong wrestling foundation early because it transfers directly to successful no-gi grappling.</p>
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
