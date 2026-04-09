import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Body Lock No-Gi BJJ: Passing, Takedowns & Clinch Domination | AIBJJ",
  description: "Master the body lock in no-gi BJJ. Learn body lock guard passing, body lock takedowns, suplex mechanics, and how to use the body lock in MMA and grappling.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Body Lock No-Gi BJJ",
    "publisher": { "@type": "Organization", "name": "AIBJJ", "url": "https://aibjj.com" },
  };
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-black">Body Lock No-Gi BJJ: Passing, Takedowns &amp; Clinch</h1>
        <p className="mt-4 text-xl text-zinc-400">The body lock is one of the most dominant control positions in no-gi grappling — whether you&apos;re passing guard, executing takedowns, or controlling the clinch.</p>
        <div className="mt-10 space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Body Lock Guard Passing</h2>
            <p>The over-under body lock pass is the workhorse no-gi guard pass. Reach one arm over their hip and one arm under their far leg, lace your hands together. Drive your shoulder into their thigh as you stack their hips and walk around to side control. Stay heavy, keep your hips low, and never allow space between your chest and their body. Bernardo Faria built an entire competitive career winning multiple world championships primarily with body lock pressure passing.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Body Lock Takedowns</h2>
            <p>The standing body lock from behind is one of the most dominant takedown positions in wrestling. Once you establish the rear body lock, you can lift and dump to either side, execute a double leg from the clinch, or attempt the suplex. The front body lock is used to hip throw or turn and dump. Body lock entries come from sprawling on leg shots — they sprawl and you establish rear body lock, or clinch at chest level and lock from there.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Body Lock to Back Takes</h2>
            <p>The rear body lock is a direct back control precursor. Once you have rear body lock while standing, work for a seat belt transition — one arm above their arm, one across the chest. From standing rear body lock, force them to the mat by sitting to the side, ending in back mount. Any time you are close to a standing opponent with hands free, a body lock attempt is appropriate. The body lock is the universal no-gi clinch tool.</p>
          </section>
        </div>
        <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
          <h3 className="font-bold text-white mb-3">Related Techniques</h3>
          <div className="flex flex-wrap gap-2 text-sm">
            <Link href="/bjj-guard-passing" className="rounded-full border border-zinc-700 px-3 py-1 text-zinc-400 hover:text-white">Guard Passing</Link>
            <Link href="/bjj-back-control" className="rounded-full border border-zinc-700 px-3 py-1 text-zinc-400 hover:text-white">Back Control</Link>
            <Link href="/bjj-techniques" className="rounded-full bg-red-600/10 border border-red-700/30 px-3 py-1 text-red-400">All Techniques →</Link>
          </div>
        </div>
        <div className="mt-12 rounded-2xl border border-red-900/30 bg-red-950/20 p-8 text-center">
          <h2 className="text-2xl font-black">Master This with AI Coaching</h2>
          <p className="mt-2 text-zinc-400">Get personalized drilling sequences from your AI BJJ coach.</p>
          <Link href="/auth/signup" className="mt-5 inline-block rounded-xl bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700">Start Free</Link>
        </div>
      </article>
    </div>
  );
}
