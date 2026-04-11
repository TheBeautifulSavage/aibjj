import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Closed Guard: Complete Sweeps & Attacks Guide | AIBJJ",
  description: "Master closed guard sweeps and submissions. Learn collar chokes, arm locks, triangle setups, and hip bump techniques with step-by-step instructions.",
};

export default function Page() {
  const tags = ["closed guard", "sweeps", "submissions", "BJJ fundamentals", "collar chokes"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Closed Guard: Complete Sweeps & Attacks Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Master closed guard sweeps and submissions. Learn collar chokes, arm locks, triangle setups, and hip bump techniques with step-by-step instructions.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Closed Guard?</h2>
            <p>The closed guard is BJJ's most fundamental defensive position, executed by wrapping your legs around your opponent's torso and locking your feet together. This position provides exceptional control and numerous offensive opportunities including sweeps, submissions, and positional advancement. Your legs act as a barrier, preventing your opponent from passing and creating leverage for attacks. The closed guard is ideal for smaller or weaker practitioners because it neutralizes size advantages through proper leverage and technique. Unlike open guard variations, closed guard offers consistent control with minimal footwork complexity. It's considered the foundation position that all BJJ practitioners must master, appearing frequently in gi and no-gi competition. From closed guard, you can attack the neck, limbs, and hips while maintaining defensive integrity. The position rewards patience and timing, making it essential for developing technical proficiency. Understanding closed guard mechanics builds the foundation for advancing to more complex guard systems and becoming a complete grappler.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>Begin by establishing a strong closed guard position: sit on your back with knees bent and feet locked behind your opponent's back. Ensure your hips are positioned underneath their center of gravity rather than extended outward. Create space by framing against their chest or underhooks to prevent them from flattening you. For the collar choke attack, grip one lapel deep near the collar with your palm facing inward, then cup the back of their head with your other hand. Keep your elbows tight to your ribs. For the hip bump sweep, secure an underhook on one side and grip their opposite sleeve. Elevate your hips explosively while turning into them. For the triangle, break their posture by pulling their head down, then feed one ankle across their neck while extending the opposite leg. Maintain engagement at all times—don't allow them space to posture up or escape. Control the distance with your arms while generating power from your hips and core. Each setup requires proper positioning before committing to the attack sequence.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>Critical details determine success or failure in closed guard. Always break your opponent's posture first—this prevents them from generating defensive power and creates submission openings. Keep your feet locked tightly; loose leg positioning allows escape and pass attempts. Maintain connection through your entire body, not just your legs. When executing collar chokes, thread the grip properly with sufficient lapel control to prevent defense. Control the head to finish submissions; many practitioners lose submissions by allowing head movement. For sweeps, explode through your opponent's center line rather than rolling sideways. Common mistakes include extending your hips too far (creating space for passes), using arm strength instead of hip power, and abandoning attacks prematurely. Avoid telegraphing movements; execute transitions smoothly. Don't grip too tightly initially—this fatigues your hands and telegraphs intentions. Many practitioners fail to transition between attacks, allowing opponents to defend statically. Instead, chain multiple threats together, forcing constant defensive adjustments. Timing and patience matter more than aggression in closed guard fundamentals.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>The closed guard works best when you're on your back facing a standing or posturing opponent. Use it as your primary defensive position when taken down, immediately securing the guard to prevent mount or side control advancement. Collar chokes work optimally when your opponent has poor posture or is leaning forward aggressively. The hip bump sweep excels against opponents who base heavily and resist arm drags. Triangle setups transition perfectly after breaking posture or when opponents attempt to defend collar choke threats. Use closed guard during positional rolling to develop comfort and timing before introducing it in live sparring. The position becomes increasingly valuable as opponents improve—better grapplers respect closed guard boundaries and cannot simply muscle through attacks. In competition, closed guard provides a sustainable position for points or submission attempts without excessive energy expenditure. When recovering from inferior positions, establish closed guard immediately to neutralize your opponent's advantages. This position is timeless in BJJ; elite competitors at all belt levels maintain closed guard proficiency. Understanding when to engage or disengage from closed guard, and when to transition to other positions, separates skilled practitioners from beginners.</p>
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
