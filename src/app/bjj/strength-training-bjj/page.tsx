import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Strength Training for BJJ: Complete Guide | AIBJJ",
  description: "Learn effective strength training methods for Brazilian Jiu-Jitsu. Discover exercises, programming, and nutrition tips to build functional strength and imp",
};

export default function Page() {
  const tags = ["strength", "conditioning", "fitness"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Strength Training for BJJ: Complete Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Learn effective strength training methods for Brazilian Jiu-Jitsu. Discover exercises, programming, and nutrition tips to build functional strength and improve your BJJ performance.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Why Strength Training Matters in BJJ</h2>
            <p>Strength training is essential for BJJ athletes looking to improve performance, prevent injuries, and gain competitive advantages. While technique remains paramount, having adequate strength allows you to execute techniques more efficiently, maintain positions longer, and escape difficult situations. Strength training enhances power output, enabling faster transitions and more explosive movements. It also builds resilience in joints and connective tissues, reducing injury risk during intense rolling sessions. Stronger muscles support better posture and body mechanics, improving your ability to apply leverage-based techniques. Additionally, strength training boosts confidence and mental toughness, helping you perform better under pressure. The combination of technical skill and physical strength creates a well-rounded BJJ athlete capable of handling various opponents and competition levels.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Exercises for BJJ Strength Development</h2>
            <p>Effective BJJ strength training focuses on compound movements that develop functional, sport-specific strength. Deadlifts build posterior chain power crucial for leg lock defense and takedown explosiveness. Squats strengthen legs for base stability and guard retention. Bench press and push-ups develop chest and shoulder strength for arm drag control and escape mechanics. Rows strengthen the back, essential for pulling guard and maintaining upper body positioning. Overhead press builds shoulder stability and pressing power. Farmer's carries improve grip strength and core stability. Pull-ups and lat pulldowns develop pulling power for submissions and positional control. Planks and core rotations enhance spinal stability and prevent injuries. Turkish get-ups improve shoulder mobility and functional strength. Include exercises like trap bar deadlifts, front squats, and weighted dips for sport-specific benefits. Progressive overload ensures continuous strength gains.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Programming and Periodization Strategy</h2>
            <p>Effective strength programming requires balancing BJJ training with strength work while avoiding overtraining. Periodization structures your training into phases emphasizing different qualities: hypertrophy, strength, and power. A typical week includes two to four strength sessions lasting 45-60 minutes, performed on days with lighter BJJ training. Begin with a hypertrophy phase building muscle foundation, progress to strength phases developing maximum force, then transition to power phases for explosive movements. Periodize around competition schedules, peaking strength for important tournaments. Include deload weeks every fourth week, reducing volume by 40-50% to allow recovery. Integrate dynamic warm-ups and mobility work before strength sessions. After strength training, perform light conditioning rather than heavy technique work. Adjust volume based on your BJJ schedule's intensity. Listen to your body and prioritize recovery through sleep, nutrition, and stress management.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Recovery, Nutrition, and Common Mistakes</h2>
            <p>Recovery is crucial when combining BJJ with strength training. Prioritize seven to nine hours of quality sleep nightly, as strength adaptations occur during rest. Consume adequate protein, targeting 0.8-1 gram per pound of body weight daily to support muscle repair. Include complex carbohydrates for energy and glycogen replenishment. Stay hydrated throughout training sessions. Consider mobility work, foam rolling, and stretching to maintain flexibility and reduce injury risk. Avoid common mistakes like training too heavy too often, which leads to overuse injuries and CNS fatigue. Don't neglect smaller muscle groups and joints. Avoid excessive volume that interferes with BJJ recovery. Don't ignore mobility and flexibility work, causing movement restrictions. Never sacrifice technique for pure strength gains. Avoid poor form on strength exercises, increasing injury risk. Track your training to identify imbalances and recovery needs. Balance ambition with smart, sustainable training practices for long-term progress.</p>
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
