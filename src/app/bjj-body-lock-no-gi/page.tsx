import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Body Lock No-Gi BJJ: Passing, Takedowns & Clinch Domination | AIBJJ", description: "Master the body lock in no-gi BJJ. Learn body lock guard passing, body lock takedowns, suplex mechanics, and how to use the body lock in MMA and grappling." };
export default function Page() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "Body Lock No-Gi BJJ: Passing, Takedowns & Clinch Domination", "publisher": { "@type": "Organization", "name": "AIBJJ", "url": "https://aibjj.com" } }) }} />
      <nav className="border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-black">Body Lock No-Gi BJJ: Passing, Takedowns & Clinch Domination</h1>
        <p className="mt-4 text-xl text="zinc-400">The body lock is one of the most dominant control positions in no-gi grappling — whether you're passing guard, executing takedowns, or controlling the clinch. It replaces gi collar-and-pants control with pure body-to-body pressure.</p>
        <div className="mt-10 space-y-8 text-zinc-300">
          <section><h2 className="text-2xl font-bold text-white mb-3">Body Lock Guard Passing Fundamentals</h2><p>The body lock pass (over-under) is the workhorse no-gi guard pass. Reach one arm over their hip and one arm under their far leg, lace your hands together with your top arm's wrist in the bottom hand's palm. Drive your shoulder into their thigh as you stack their hips and walk around to side control. The key mechanical principle: stay heavy, keep your hips low, and never allow space between your chest and their body. Against butterfly guard, step over one hook to neutralize it before body locking — attempting to body lock with both butterfly hooks active often results in a sweep. The body lock pass is systematic and reliable because it controls both the hips and a leg simultaneously. Bernardo Faria built an entire competitive career on this pass, winning multiple world championships primarily with body lock pressure passing. Study his methodology for the most thorough understanding of this technique.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Body Lock Takedowns: Front, Rear, and Suplex</h2><p>The standing body lock from behind is one of the most dominant takedown positions in wrestling. Once you establish the rear body lock (arms clasped around their waist from behind), you can lift and dump to either side, execute a double leg from the clinch, or attempt the suplex (fall backward). For safe competition use, control the landing — fall to the side rather than straight back to avoid spine injury. The front body lock (bear hug) from the front is used to hip throw or turn and dump. Under-the-arm body locks (gator roll) create tilt and takedown from the side clinch. Body lock entries: pursue a leg shot, they sprawl and you establish rear body lock. Or clinch at chest level, clear their arms, and lock. The body lock from the front also transitions to knee picks, trip takedowns, and leg attacks when they widen their stance to base against the takedown pressure.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Body Lock to Back Takes and Submissions</h2><p>The rear body lock is a direct back control precursor. Once you have rear body lock while standing, lower your hips and work for a seat belt transition — one arm goes above their arm (under the shoulder), one goes below (across the chest). This is the BJJ back control position. From standing rear body lock, you can also force them to the mat by sitting to the side, ending in back mount. Body lock submission setups: the rear body lock with their arm trapped creates a standing armbar opportunity. The neck crank from body lock uses your clasp to drive their chin while pulling with your chest. In half guard top or knee-on-belly scrambles, body lock entries create immediate passing or takedown finishing positions. Any time you are close to a standing opponent with hands free, a body lock attempt is appropriate. The body lock is the universal no-gi clinch tool — all serious no-gi practitioners should develop a complete body lock game.</p></section>
        </div>
        <div className="mt-12 rounded-2xl border border-red-900/30 bg-red-950/20 p-8 text-center">
          <h2 className="text-2xl font-black">Level Up Your BJJ</h2>
          <p className="mt-2 text-zinc-400">AI coaching, technique library, training journal — all in one place.</p>
          <Link href="/auth/signup" className="mt-5 inline-block rounded-xl bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700">Start Free</Link>
        </div>
      </article>
    </div>
  );
}
