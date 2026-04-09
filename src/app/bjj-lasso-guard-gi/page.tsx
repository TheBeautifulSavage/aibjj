import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Lasso Guard BJJ: Sweeps, Submissions & Guard Retention with Lasso | AIBJJ", description: "Learn the BJJ lasso guard system. Discover lasso sweeps, omoplata entries, triangle setups, and how lasso guard stops aggressive passers in their tracks." };
export default function Page() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "Lasso Guard BJJ: Sweeps, Submissions & Guard Retention with Lasso", "publisher": { "@type": "Organization", "name": "AIBJJ", "url": "https://aibjj.com" } }) }} />
      <nav className="border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-black">Lasso Guard BJJ: Sweeps, Submissions & Guard Retention with Lasso</h1>
        <p className="mt-4 text-xl text-zinc-400">The lasso guard is one of the most powerful gi guard positions available. By threading your leg through the opponent's arm and gripping their sleeve, you create a lock on their arm that dramatically limits their passing options while opening diverse attacking paths.</p>
        <div className="mt-10 space-y-8 text-zinc-300">
          <section><h2 className="text-2xl font-bold text-white mb-3">Lasso Guard Fundamentals: Entry and Control</h2><p>The lasso is formed when you thread your leg (typically shin and foot) through the inside of the opponent's arm, rotating your foot to hook their shoulder from the outside while maintaining the sleeve grip. This creates a spiral lock on their arm — they cannot simply pull away or posture up without your entire leg being extracted. The classic spider-lasso hybrid pairs one lasso leg with the opposite foot on the bicep, giving you a two-sided control system. Lasso guard entries are most natural when opponents are in a combat base or kneeling position. When they stand, transition to a standing lasso by keeping the hook tight and adjusting your hip position. The lasso guard is renowned for its staying power — even when opponents try to pass, the lasso hooks their arm and drags them back into your guard.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Lasso Sweeps: Triangle and Hip Bump Variations</h2><p>The lasso sweep to mount is the most direct technique: from a lasso control on their left arm, push their left knee with your right foot, pull the sleeve with your lasso grip, and roll them over your right shoulder. Your lasso leg controls their arm through the entire sweep, landing you in mount with the arm already isolated. The technical standup from lasso keeps the hook while you sit up to your knee and finish a single leg takedown. The pendulum sweep uses the lasso hook as the anchor while your free leg swings for momentum. Lasso guard also sets up the triangle by pulling the arm across and closing your legs around the neck and shoulder — the arm is already controlled by your lasso, so the triangle lock is immediate. These sweeps chain beautifully because the lasso prevents the opponent from posting effectively to any side.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Omoplata and Submission Chain from Lasso</h2><p>The lasso omoplata is one of the cleanest submissions in gi BJJ. With your lasso controlling their arm and your leg threaded through, swing your hips out and sit up into the omoplata position — your leg becomes the shoulder lock. Opponents who try to roll out of the omoplata give you their back. From the lasso omoplata setup, you can also enter the gogoplata by sneaking your foot under their chin as you sit up. The triangle from lasso is extremely high percentage because the arm is already compromised — simply close your legs. If they defend the triangle by stacking, finish the omoplata or armbar instead. The lasso guard creates a true submission web: every defense opens a different attack. Long-limbed grapplers find lasso guard especially advantageous because their leg length makes extraction even more difficult for opponents.</p></section>
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
