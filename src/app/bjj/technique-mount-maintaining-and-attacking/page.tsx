import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Mount Position: Maintain & Attack in BJJ | AIBJJ",
  description: "Master mount control and attacks. Learn setup, maintenance, submissions, and striking from dominant top position in Brazilian Jiu-Jitsu.",
};

export default function Page() {
  const tags = ["mount position", "top control", "BJJ attacks", "submission techniques"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Mount Position: Maintain & Attack in BJJ</h1>
        <p className="mt-4 text-xl text-zinc-400">Master mount control and attacks. Learn setup, maintenance, submissions, and striking from dominant top position in Brazilian Jiu-Jitsu.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Mount?</h2>
            <p>The mount position is one of the most dominant positions in Brazilian Jiu-Jitsu, where you sit on your opponent's torso with both knees inside their arms. Your weight is distributed across their chest and abdomen, making it extremely difficult to escape. From mount, you control their upper body completely while maintaining superior positioning for both submissions and strikes. This position is considered 4 points in competition and opens numerous finishing opportunities. The mount is particularly valuable because your opponent cannot easily bridge, buck, or create space. You control the pace entirely, allowing you to set traps and execute submissions with minimal risk. Understanding mount position fundamentals separates intermediate from advanced grapplers. The position demands technical awareness of weight distribution, base management, and threat creation to prevent reversals or arm drags.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>Establish mount from side control or guard escape. First, secure underhook control on your opponent's far arm while maintaining knee pressure on their ribs. Post your outside foot flat on the mat for base. Drive your hips forward explosively, sliding your inside knee over their hip toward their armpit. Immediately post your other foot, threading both knees inside their arms. Keep your chest low and tight against theirs, minimizing space. Distribute weight evenly across both knees and your upper body. Keep your head on their chest or slightly to the side, never leaning back. Maintain grip on their collar or wrist to control their arm. Stay perpendicular or slightly angled, avoiding straight alignment. Establish this position methodically—rushing creates vulnerabilities to bridge escapes. Once settled, maintain constant pressure while managing their hips. Your base should feel immovable, with feet positioned wide enough for stability but not so wide that you lose mount position.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>Pressure is essential for mount maintenance. Many beginners sit upright, allowing space for bridge escapes. Instead, keep your chest glued to theirs with your weight forward. Control their hips by gripping their belt or maintaining knee pressure. Never allow them to frame your hips or create separation. Avoid keeping feet in guard range—post them wide and flat for stability. Common mistakes include crossing ankles, which enables leglock vulnerabilities, and allowing arm frames that lead to reversals. Manage their hands constantly. If they establish underhooks, your position crumbles quickly. Use collar and wrist control to dictate arm placement. Keep your posture compact and your base wide. When they bridge, drive your hips down and secure grips before remounting. Stay mentally engaged—mount requires active pressure maintenance, not passive sitting. Prevent arm drags by keeping elbows tight. Watch for their hips clearing yours, signaling position loss. Constantly adjust your hips to recenter if they shift.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>Mount position excels when you need to finish opponents decisively. It's ideal for executing collar chokes, arm triangle chokes, and straight armlocks. Use mount when your opponent is fatigued—sustained pressure accelerates exhaustion. In competition, mount scores 4 points and provides dominant control. It's strategically valuable when leading on points and needing to secure a win. However, be cautious against strong strikers or heavy opponents who generate powerful bridges. From side control or guard recovery, mount offers maximum control with minimal risk if properly maintained. Use it to set submission traps rather than just holding position—dynamic attacks prevent escapes. Transition to mount when establishing dominant top control becomes necessary. Against defensive opponents, mount creates urgency, forcing them to react. Avoid mount against skilled leg lockers if your position becomes compromised. In training, use mount to practice pressure, control, and technical submission execution. Develop mount mastery as a fundamental skill since it appears frequently in competitions and validates complete positional dominance.</p>
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
