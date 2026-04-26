import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BJJ for MMA: What Translates & What Doesn\'t | AIBJJ',
  description: 'Complete guide to BJJ for MMA — what techniques translate from BJJ to MMA, what needs adaptation, and how to train BJJ specifically for mixed martial arts.',
}

export default function BJJForMMAPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
<section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black mb-6">BJJ for MMA: What Translates & What Doesn't</h1>
        <p className="text-xl text-zinc-400 mb-8">BJJ was born in MMA. The Gracies proved its effectiveness in the UFC, and submission grappling remains the primary finishing art in professional fighting. But MMA BJJ and sport BJJ are not the same — understanding the differences makes you dangerous in both.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        <div>
          <h2 className="text-3xl font-black mb-4">The BJJ Foundation of MMA</h2>
          <p className="text-zinc-300 mb-4">Brazilian Jiu-Jitsu changed combat sports permanently. Royce Gracie demonstrated in the early UFCs that a skilled grappler could defeat strikers, wrestlers, and other martial artists — not through superior athleticism, but through superior ground fighting knowledge.</p>
          <p className="text-zinc-300 mb-4">Today, every elite MMA fighter trains grappling. BJJ provides the submission finishing skills; wrestling provides the takedown and top pressure; both together create the complete ground game required to compete at the highest levels.</p>
          <p className="text-zinc-300">The question isn't whether BJJ matters for MMA — it clearly does. The question is which parts of BJJ transfer directly and which require modification.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">What Translates Directly</h2>
          <h3 className="text-xl font-bold mb-2 text-red-400">Rear Naked Choke</h3>
          <p className="text-zinc-300 mb-4">The RNC is the single most common finish in MMA history. Back control with hooks and the rear naked choke translates identically from BJJ — the mechanics don't change. This is why taking the back is so valuable in MMA.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Armbar</h3>
          <p className="text-zinc-300 mb-4">The armbar translates well, particularly from top positions. Mount armbars, guard armbars (when used selectively), and transition armbars all appear in MMA. The mechanics are identical to sport BJJ.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Triangle Choke</h3>
          <p className="text-zinc-300 mb-4">The triangle works in MMA, but with a critical modification: MMA gloves make it harder to control the sleeve, so triangle setups often use the neck tie or body clinch. The rubber guard triangle is specifically designed for MMA, using the leg on shoulder to prevent posturing and striking.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Guillotine</h3>
          <p className="text-zinc-300 mb-4">The guillotine is extremely effective in MMA — particularly the arm-in guillotine (high elbow variation). When opponents shoot takedowns without level changes, the guillotine is immediately available. Many MMA fights have been finished with guillotine chokes.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Kimura</h3>
          <p className="text-zinc-300 mb-4">The kimura appears frequently in MMA — both as a submission and as a control tool. From half guard, the kimura grip creates a back take or finish. Many MMA fights have been won with the kimura trap system.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">What Needs Adaptation</h2>
          <h3 className="text-xl font-bold mb-2 text-red-400">Guard Game</h3>
          <p className="text-zinc-300 mb-4">The guard game changes dramatically in MMA because your opponent can punch you from inside your guard. The traditional sport BJJ guard — where you work at a relaxed pace to set up armbars and triangles — gets you hit in the face in MMA.</p>
          <p className="text-zinc-300 mb-4">MMA guard adjustments:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Clinch the opponent's arms to prevent striking</li>
            <li>Create tight body control with overhooks</li>
            <li>Get back to your feet when the guard is not immediately threatening</li>
            <li>Rubber guard (leg on shoulder) can prevent posturing and create submission setups</li>
            <li>Attacks must be sharp — extended guard work gives time for ground-and-pound</li>
          </ul>
          <h3 className="text-xl font-bold mb-2 text-red-400">Top Game</h3>
          <p className="text-zinc-300 mb-4">The top game in MMA benefits significantly from BJJ — positional control from mount and side control creates both submission and striking opportunities. However, MMA top players must also be able to pass guard quickly before their opponent escapes or creates striking opportunities from the bottom.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Half Guard</h3>
          <p className="text-zinc-300 mb-4">Half guard works in MMA similarly to no-gi — the underhook back take and stand-up are primary goals. However, being in bottom half guard in MMA also exposes you to punches from the top, so offensive urgency is higher than in sport BJJ.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">What Doesn't Translate Well</h2>
          <h3 className="text-xl font-bold mb-2 text-red-400">Open Guard Games</h3>
          <p className="text-zinc-300 mb-4">Spider guard, lasso guard, DLR — these sport BJJ positions don't work in MMA. The grips don't exist (no gi), and the open guard positions expose you to strikes. The Worm Guard and other lapel-dependent guards are purely sport techniques.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Berimbolo and Inverted Guards</h3>
          <p className="text-zinc-300 mb-4">Inverting and rolling in MMA puts your back to your opponent with your head down — a position where you can be kneed and punched. These guard positions work in sport BJJ but are not applicable to MMA.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Gi-Specific Chokes</h3>
          <p className="text-zinc-300 mb-4">Cross collar chokes, bow-and-arrow chokes, and all collar-based submissions are gi-only. The no-gi equivalent chokes (guillotine, RNC, triangle) replace them.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Training BJJ for MMA</h2>
          <p className="text-zinc-300 mb-4">If your goal is MMA performance, structure your BJJ training accordingly:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Train primarily no-gi — MMA is no-gi grappling</li>
            <li>Add "BJJ with strikes" sparring — simulate punches (touch, don't hit) from positions</li>
            <li>Prioritize back control, rear naked choke, and guillotine above all else</li>
            <li>Develop guard that creates immediate submission threats, not positional control</li>
            <li>Add wrestling — takedowns and top pressure are equally important as submissions</li>
            <li>Develop aggressive guard passing — time in bad positions in MMA = getting hit</li>
          </ul>
        </div>

        <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">
          <h2 className="text-2xl font-black mb-3">Build Your MMA-Specific BJJ Game</h2>
          <p className="text-zinc-300 mb-4">Try AIBJJ's AI Coach to get personalized advice on your BJJ for MMA. Tell the AI your current BJJ background and MMA goals — it creates a curriculum specifically designed for mixed martial arts application.</p>
          <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block">Get Your MMA BJJ Plan →</Link>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Historical Evidence: BJJ in MMA</h2>
          <p className="text-zinc-300 mb-4">The history of MMA shows BJJ's centrality: nearly every UFC champion has strong BJJ credentials. Demian Maia, Anderson Silva, BJ Penn, Fabricio Werdum, Ronaldo Souza — all black belts who used their grappling to finish fights that their opponents thought they could survive.</p>
          <p className="text-zinc-300">The pattern is consistent: BJJ black belts in MMA don't lose to grappling. They may lose to striking, but their ground game is always elite. This reflects the depth of BJJ training — a decade of grappling leaves a signature on how you move on the ground that doesn't disappear under pressure.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-black mb-4">Ready to level up your BJJ?</h2>
        <p className="text-zinc-400 mb-6">Develop BJJ that works everywhere — in the gym, in competition, and in the cage — with AIBJJ's AI coaching.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Join AIBJJ Free</Link>
      </section>

      <footer className="border-t border-zinc-800 px-4 py-8 text-center text-zinc-500 text-sm">
        <Link href="/">AIBJJ</Link> · <Link href="/terms">Terms</Link> · <Link href="/privacy">Privacy</Link>
      </footer>
    </div>
  )
}
