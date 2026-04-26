import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "BJJ No-Gi Guard: Best Guards to Play Without the Gi | AIBJJ", description: "Discover the best BJJ guards for no-gi: half guard, butterfly, seated guard, rubber guard and more. Learn what works without collar and sleeve grips." };
export default function Page() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "BJJ No-Gi Guard: Best Guards to Play Without the Gi", "publisher": { "@type": "Organization", "name": "AIBJJ", "url": "https://aibjj.com" } }) }} />
<article className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-black">BJJ No-Gi Guard: Best Guards to Play Without the Gi</h1>
        <p className="mt-4 text-xl text-zinc-400">No-gi guard play requires adapting to a world without collars and sleeves. The best no-gi guards rely on body locks, wrist control, underhooks, and positional framing to create the same dangers as gi-based guards — just with different tools.</p>
        <div className="mt-10 space-y-8 text-zinc-300">
          <section><h2 className="text-2xl font-bold text-white mb-3">Half Guard: The Foundation of No-Gi Bottom Play</h2><p>Half guard is arguably the most important guard in no-gi BJJ because it works for everyone regardless of athleticism. From half guard bottom, your primary goal is underhook or deep half. The underhook gives you the ability to come up to a single leg or sweep with the knee shield. Deep half guard — where you dive under their hip and control their far leg — creates powerful sweeps when you lift and shift their weight. In no-gi, the half guard requires active hip movement to prevent flattening. A flat half guard bottom player will be smashed and passed. Keep your knee shield framing their hip, fight for the underhook, and stay on your side. Half guard flows naturally into back takes when opponents reach over to flatten you — use their forward lean to take the back instead of fighting the position.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Butterfly Guard and Seated Guard in No-Gi</h2><p>Butterfly guard is the classic Marcelo Garcia-style no-gi guard: both hooks inside the opponent's thighs, controlling their torso with underhooks or arm drags. The butterfly sweep lifts and rolls the opponent to either side, and works at every level because it uses your whole body against their off-balanced structure. The arm drag from butterfly is one of the highest-percentage back takes in no-gi: pull their arm across your body and come up behind them. Seated guard — sitting upright with your feet on the mat — is excellent for leg lock entries and wrestling scrambles. From seated guard, you can shoot arm drags, enter leg entanglements, or set up takedowns. Modern no-gi competition frequently starts from seated guard because it's a neutral position that transitions to many offensive options. These guards pair well because you can transition between butterfly and seated based on how the opponent reacts.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Rubber Guard and Closed Guard in No-Gi</h2><p>Closed guard remains effective in no-gi — perhaps more so than many realize. The posture-breaking mechanics work identically without the gi: break their posture by pulling their head down, open sweeps and submission attacks. The challenge is that experienced no-gi passers know to stay posture-conscious and use their hands to post. Rubber guard (developed by Eddie Bravo) takes closed guard to an extreme by using high guard — your leg over their shoulder — to control posture without collar grips. This requires flexibility but creates omoplata, gogoplata, and triangle entries that are very difficult to defend. New Wave Jiu-Jitsu (John Danaher, Gordon Ryan) favors leg lock entries from back-sitting guard positions. The current meta in elite no-gi tends toward leg entanglements, but a strong closed guard with active hips and arm drags remains a viable and effective strategy at all competition levels.</p></section>
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
