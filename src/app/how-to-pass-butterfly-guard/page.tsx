import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Pass Butterfly Guard | AIBJJ",
  description: "Butterfly guard is one of the most effective guard positions in BJJ. Learn the fundamental passing concepts and specific techniques to overcome this tricky",
};

export default function Page() {
  const tags = ["guard-passing", "sweeps", "beginners"];
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
              className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:border-red-600/50 hover:text-red-400">
              #{tag}
            </Link>
          ))}
        </div>
        <h1 className="text-4xl font-black sm:text-5xl">How to Pass Butterfly Guard</h1>
        <p className="mt-4 text-xl text-zinc-400">Butterfly guard is one of the most effective guard positions in BJJ. Learn the fundamental passing concepts and specific techniques to overcome this tricky guard.</p>
        <div className="mt-10 space-y-3">

          <details className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 open:border-zinc-700">
            <summary className="font-bold text-white cursor-pointer">What makes butterfly guard difficult to pass?</summary>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">Butterfly guard uses inside hooks (feet on your inner thighs) combined with underhooks to generate sweeping leverage. When your opponent has double underhooks and butterfly hooks, any forward lean gives them the angle to sweep. The guard is difficult because you cannot simply pressure forward — you need to address the underhooks before passing.</p>
          </details>
          <details className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 open:border-zinc-700">
            <summary className="font-bold text-white cursor-pointer">What is the most effective butterfly guard pass?</summary>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">The smash pass addresses butterfly guard by clearing the hooks and using chest pressure to flatten the opponent. Step to the outside of one hook, pinch that leg between your knee and hip, drive your chest forward and down, and walk around to side control. Alternatively, the headquarters position with a knee wedge between their legs disrupts both hooks simultaneously.</p>
          </details>
          <details className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 open:border-zinc-700">
            <summary className="font-bold text-white cursor-pointer">How do you stop butterfly guard sweeps?</summary>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">Proper base is essential against butterfly guard. Keep your hips low, base wide, and stay heavy. When you feel the sweep pressure, post your outside leg and lower your hips further. Do not stand upright — that is exactly when butterfly guard is most effective. Strip the underhooks first, then address the hooks.</p>
          </details>
          <details className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 open:border-zinc-700">
            <summary className="font-bold text-white cursor-pointer">Should you try to pass butterfly guard standing or kneeling?</summary>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">Generally, staying low (kneeling or crouching) is safer against butterfly guard because it makes sweeps harder. Standing allows you to use leg drag and torreando passes, but gives the guard player more sweep opportunities. Match your passing strategy to your body type and base — taller grapplers may prefer standing passes while shorter, heavier grapplers often use pressure passing.</p>
          </details>
        </div>
        <div className="mt-16 rounded-2xl border border-red-900/30 bg-red-950/20 p-8 text-center">
          <h2 className="text-2xl font-black">Get AI BJJ Coaching</h2>
          <p className="mt-2 text-zinc-400">Ask your AI coach anything about BJJ — technique questions, game plans, drilling sequences.</p>
          <Link href="/auth/signup" className="mt-5 inline-block rounded-xl bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700">Start Free</Link>
        </div>
        <div className="mt-10 flex flex-wrap gap-2">
          <Link href="/bjj" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">BJJ Encyclopedia</Link>
          <Link href="/brazilian-jiu-jitsu" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">Complete BJJ Guide</Link>
          <Link href="/coach" className="rounded-full bg-red-600/10 border border-red-700/30 px-3 py-1.5 text-sm text-red-400">AI Coach →</Link>
        </div>
      </article>
    </div>
  );
}
