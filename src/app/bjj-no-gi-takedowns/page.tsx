import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "BJJ No-Gi Takedowns: Wrestling Shots, Hip Throws & Trips | AIBJJ", description: "Learn no-gi BJJ takedowns: double leg, single leg, hip throws, foot sweeps and more. Build a complete standing game for no-gi competition and MMA." };
export default function Page() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "BJJ No-Gi Takedowns: Wrestling Shots, Hip Throws & Trips", "publisher": { "@type": "Organization", "name": "AIBJJ", "url": "https://aibjj.com" } }) }} />
      <nav className="border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-black">BJJ No-Gi Takedowns: Wrestling Shots, Hip Throws & Trips</h1>
        <p className="mt-4 text-xl text-zinc-400">No-gi takedowns are where wrestling and BJJ merge. From explosive shots to trips and hip throws, developing a reliable standing game ensures you can choose where a fight takes place — on your terms, in your best position.</p>
        <div className="mt-10 space-y-8 text-zinc-300">
          <section><h2 className="text-2xl font-bold text-white mb-3">Double Leg and Single Leg: The Core Wrestling Shots</h2><p>The double leg takedown is the most reliable takedown in no-gi grappling. From a level change, shoot your lead foot between the opponent's feet, drive your shoulder into their hip, wrap both legs at the knee, and drive through. The finish can be a straight drive, a dump to the side, or a run-the-pipe around the leg. The single leg begins the same way but captures only one leg — grabbing behind the knee with both hands. From single leg, you can drive them forward (running the leg), elevate and dump, or finish with a trip from outside. The key to successful shots is the level change: your hips must drop before you commit forward. Shooting from too high is easily sprawled. Combine shots with head-and-arm setups (collar tie, Russian tie) to create lowering reactions that open takedown entries.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Hip Throws and Clinch-Based Takedowns</h2><p>Hip throws (O-goshi, Tai otoshi derivatives) work in no-gi from underhook and overhook clinch positions. The arm throw from underhook: secure an underhook, step across their front foot, rotate your hips into them, and use your underhook arm to drive them over your hip. These throws require getting your hips below theirs — level change is essential. The hip toss from a neck tie and underhook combination is particularly effective when opponents are driving forward into you. Snap-downs from collar ties drop their head, creating a reaction that can be used to re-shoot. Body lock takedowns grab around the opponent's waist from behind and either trip or lift. The suplex (body lock from behind, fall backward) is spectacular but requires control to be safe. In BJJ competition, a controlled throw that you land in top position scores more and is safer than a wild explosive suplex.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Trips, Foot Sweeps, and Guard Pull Alternatives</h2><p>Trips and foot sweeps are high-percentage techniques that don't require the explosive athleticism of wrestling shots. The outside trip (osoto gari variant) steps behind their lead leg as you pull their upper body forward — they fall straight back. Inside trips catch their foot during a step. The kouchi gari (inside heel catch) works when opponents step forward: hook their inside heel with your foot and push-pull them off balance. These trips work exceptionally well when the opponent is focused on defending your other attacks. Against opponents who are comfortable with guard pulls, commit to a takedown threat early — even a fake shot creates a reaction that can be exploited. Guard pulling is a valid no-gi tactic but relying solely on it limits your game. A practitioner with a functional standing game and a functional guard game is far more complete than one who only pulls guard every match.</p></section>
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
