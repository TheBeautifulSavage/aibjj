import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Short Limb BJJ: Compact Frame Advantages in Grappling | AIBJJ", description: "Short limb BJJ strategies — use your compact frame for superior half guard, wrestling shots, body lock attacks, and close-range pressure that taller opponents hate." };
export default function Page() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "Short Limb BJJ: Compact Frame Advantages in Grappling", "publisher": { "@type": "Organization", "name": "AIBJJ", "url": "https://aibjj.com" } }) }} />
      <nav className="border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-black">Short Limb BJJ: Compact Frame Advantages in Grappling</h1>
        <p className="mt-4 text-xl text-zinc-400">Compact, short-limbed grapplers have real structural advantages in BJJ — tighter closed guard, better wrestling shot mechanics, superior deep half guard, and close-range attacks that leverage the compact frame.</p>
        <div className="mt-10 space-y-8 text-zinc-300">
          <section><h2 className="text-2xl font-bold text-white mb-3">Wrestling Takedowns and Close-Range Dominance</h2><p>Short-limbed practitioners excel at wrestling-based takedowns because their compact frame is mechanically optimized for shooting. The double leg, single leg, and high crotch takedowns require changing levels — shorter practitioners drop less distance, making their level changes faster and harder to read. Body lock attacks are also natural fits for compact grapplers who can maintain the lock more easily once established. In the clinch, short-limbed practitioners can get under the opponent's underhooks more easily and stay connected at hip level where leverage is most effective. Their compact frames are also harder to throw because the center of gravity is lower and more stable. Judo and wrestling style throws that rely on creating off-balance moments are more difficult against shorter, compact opponents. Building a takedown game around these physical advantages creates a strong foundation and confidence in the standup phase that translates to better overall grappling performance.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Deep Half Guard and Guard Underneath</h2><p>Deep half guard is one of the best positions for short-limbed, compact grapplers because it puts them underneath the opponent where their compact body creates natural leverage. The mechanics of deep half — threading under the opponent's near leg and wrapping — suit a compact practitioner who can maneuver in tight spaces more easily than long-limbed opponents. The waiter sweep, back take, and Homer Simpson sweep from deep half all work excellently for shorter practitioners whose body naturally fits the required mechanical positions. Butterfly guard also suits compact grapplers well — the ability to get both feet inside the opponent's thighs and generate explosive hip lift is enhanced by a shorter, denser frame. The explosive quality of shorter limbed athletes in butterfly guard creates genuinely dangerous sweeps against even large opponents. Prioritizing these guard positions that favor compact mechanics accelerates development and builds confidence early in the BJJ journey.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Overcoming Reach Disadvantages</h2><p>Short-limbed practitioners face clear disadvantages in techniques requiring reach: collar chokes from distance, long-range guard management, and triangle chokes are all mechanically harder with shorter limbs. The strategic response is to build a close-range game that eliminates the reach disadvantage by keeping the grappling tight and compact. Getting inside the opponent's reach — clinching, body locking, getting to half guard or closed guard — removes the reach disadvantage entirely. Arm triangles and body triangles suit compact practitioners better than standard triangles. Rear naked chokes work excellently regardless of arm length because back control closes the range automatically. Guard passing for compact practitioners works best from tight, pressure-based positions rather than long-range passing. Building comfort in the close-range grappling game where compact frames thrive is the key strategic principle for short-limbed BJJ practitioners seeking to maximize their physical reality.</p></section>
        </div>
        <div className="mt-12 rounded-2xl border border-red-900/30 bg-red-950/20 p-8 text-center">
          <h2 className="text-2xl font-black">Train Smarter with AI</h2>
          <p className="mt-2 text-zinc-400">AI coaching, technique tracker, training journal.</p>
          <Link href="/auth/signup" className="mt-5 inline-block rounded-xl bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700">Start Free</Link>
        </div>
      </article>
    </div>
  );
}
