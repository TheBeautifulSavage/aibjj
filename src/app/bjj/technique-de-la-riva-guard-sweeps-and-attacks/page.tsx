import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "De La Riva Guard: Sweeps and Attacks Guide | AIBJJ",
  description: "Master De La Riva guard techniques including sweeps, foot lock attacks, and leg drag counters. Complete BJJ guide for all skill levels.",
};

export default function Page() {
  const tags = ["de la riva guard", "BJJ sweeps", "leg lock attacks", "guard techniques"];
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
        <h1 className="text-4xl font-black sm:text-5xl">De La Riva Guard: Sweeps and Attacks Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Master De La Riva guard techniques including sweeps, foot lock attacks, and leg drag counters. Complete BJJ guide for all skill levels.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the De La Riva Guard?</h2>
            <p>The De La Riva guard is an advanced leg lock-oriented guard position developed by Ricardo De La Riva in the 1980s. It combines elements of half guard and open guard, creating a versatile system for sweeping and attacking the legs. In this position, you hook your opponent's far leg with your near leg while controlling their same-side arm. Your other leg frames against their hip or leg for leverage. This guard excels at creating angles for foot locks, heel hooks, and explosive sweeps while maintaining defensive integrity. The De La Riva guard has become essential in modern BJJ, especially for smaller competitors or those seeking leg lock specialization. It transitions seamlessly into other positions like the berimbolo and allows you to control larger opponents effectively. The guard's strength lies in its leg engagement and the constant threat of multiple attacks simultaneously, keeping opponents defensive rather than aggressive.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>Begin from open guard with your opponent standing or in base. As they step forward, hook their far leg (the one away from you) with your near shin, placing your foot on the inside of their thigh. Simultaneously, grip their same-side arm with both hands, controlling their posture. Position your free leg's foot against their hip for framing. Your hip should be angled to the side, creating space for leg attacks. From here, you can establish the classic DLR position. Keep your grip tight on their arm while maintaining the leg hook—this prevents them from passing. Your hooking leg should be active, not passive, constantly threatening foot lock entries. Ensure your shoulders stay on the mat or elevated slightly, maintaining spinal safety. The position naturally creates distance, allowing you to prevent immediate pressure. Practice the entry from various open guard scenarios: when opponents base out, when they post their leg forward, or when they attempt to pass. Smooth transitions into DLR from closed guard are also valuable.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>Critical details make De La Riva effective. Your hook must be on the inside of their leg, not wrapping around externally—this prevents heel hook counters and provides better control. Keep constant pressure on their arm; releasing grip invites passing attempts. Your framing leg prevents them from driving forward or collapsing the position. Many beginners hold the position statically; instead, maintain constant micro-movements with your hook, threatening foot locks continuously. Common mistakes include: placing your hook too high on the leg, losing arm control, crossing your legs (vulnerable to passes), and not angling your hips properly for sweeps. Don't grip just the wrist; control the entire arm to prevent underhook escapes. Avoid pulling straight down on their arm—angle it toward your hip for proper leverage. Your opposite shoulder should be ready for transitions. Never leave your hooking leg relaxed or passive; active hooks threaten submissions constantly. Beginners often lean back too far, losing technical control. Stay relatively upright initially, then adjust as needed for specific attacks.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>De La Riva guard excels against opponents who like to stand and base out, particularly those who pressure heavily. It's ideal when facing larger, stronger opponents since it doesn't rely on strength but on positioning and angles. Use it when your opponent plays heavy top pressure—DLR naturally creates distance and prevents smashing. The guard shines in leg lock-heavy rulesets (especially heel hook legal competitions) where foot lock threats are constant. Tactically, employ DLR when your opponent repeatedly tries the same passing lane; the hook catches them predictably. It's excellent for stalling time while maintaining offense, particularly valuable in tournament situations. DLR works best against opponents unfamiliar with the position or those who don't defend the foot lock threat appropriately. Avoid it against extremely leg lock-savvy opponents who immediately counter-attack your bottom leg. The guard transitions well into footlock entries, berimbolo sweeps, and the outside heel hook system. Use DLR against passing attempts from standing rather than side control transitions. It's particularly effective in matches where you need to dictate pace and control engagement angles without explosive movement, making it suitable across different skill levels and body types.</p>
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
