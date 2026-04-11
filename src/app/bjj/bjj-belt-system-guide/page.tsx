import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "BJJ Belt System: Ranks, Requirements & Progression | AIBJJ",
  description: "Complete guide to Brazilian Jiu-Jitsu belt ranking system. Learn about belt colors, promotion requirements, time commitments, and what each rank represents",
};

export default function Page() {
  const tags = ["bjj", "belts", "progression", "ranks"];
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
        <h1 className="text-4xl font-black sm:text-5xl">BJJ Belt System: Ranks, Requirements & Progression</h1>
        <p className="mt-4 text-xl text-zinc-400">Complete guide to Brazilian Jiu-Jitsu belt ranking system. Learn about belt colors, promotion requirements, time commitments, and what each rank represents.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Understanding the BJJ Belt Hierarchy</h2>
            <p>The Brazilian Jiu-Jitsu belt system represents a structured progression of skill, knowledge, and dedication. Unlike some martial arts with numerous ranks, BJJ maintains a focused hierarchy that emphasizes quality over quantity. The standard adult belt system includes white, blue, purple, brown, and black belts, each with their own significance and requirements. Some organizations add coral belts (red-and-black and red) above black belt for masters. The belt system isn't merely about technical proficiency but also reflects a practitioner's understanding of BJJ philosophy, teaching ability, and contribution to the martial art. Promotions require demonstrated competency, consistent training, and instructor evaluation. The system ensures that belt rank carries genuine weight and respect within the BJJ community. Progressing through the ranks is a personal journey that teaches patience, humility, and perseverance alongside combat techniques.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">White, Blue, and Purple Belts</h2>
            <p>White belt represents the beginning of your BJJ journey. As a white belt, you're learning fundamental techniques, positional control, and basic submissions. Promotion to blue belt typically requires 6-12 months of consistent training and demonstrates competency in foundational skills. Blue belts represent intermediate students who've developed solid technique and can roll safely with higher belts. Achieving purple belt usually takes 4-8 years of dedicated training from white belt. Purple belts are considered advanced students capable of teaching fundamentals and demonstrating strong technical knowledge. They often serve as assistant instructors. These three belts form the foundation of technical development, where students build muscle memory, understand leverage principles, and develop their personal style. Training frequency, mat time, and tournament experience significantly influence progression speed at these levels.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Brown and Black Belt Achievement</h2>
            <p>Brown belt represents the advanced student approaching mastery. Achieving brown belt typically requires 8-12+ years of training and demonstrates exceptional technical proficiency, teaching ability, and deep understanding of BJJ principles. Brown belts are expected to assist in instruction and contribute meaningfully to their academy. Promotion to black belt is the pinnacle achievement, usually taking 10-15 years from white belt. Black belt signifies mastery, teaching credentials, and significant contribution to the art. The IBJJF requires black belts to have trained at least 19 years old and demonstrated technical excellence. Beyond black belt lie coral belts awarded to masters who've dedicated 30+ years and significantly advanced the art. These upper ranks emphasize mentorship, innovation, and preserving BJJ culture. Black belt promotion is typically based on technical mastery, tournament success, instructor evaluation, and community reputation rather than strict time requirements alone.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Stripe System and Training Timeline</h2>
            <p>Most BJJ organizations use a stripe system within belt ranks to provide intermediate milestones and acknowledge progress between full promotions. Stripes typically progress from white to blue, with 1-4 stripes marking advancement toward the next belt level. This system maintains motivation during longer progression periods and offers regular recognition of improvement. Training timelines vary significantly based on individual commitment, natural athleticism, instruction quality, and competition experience. Casual practitioners might take 15-20+ years reaching black belt, while dedicated competitors may achieve it in 10-12 years. Training frequency matters considerably—training 3-4 times weekly accelerates progression compared to once-weekly training. Most academies require minimum ages for certain belts (typically black belt requires being 19+). The stripe system also helps instructors provide specific technical feedback for the next promotion level. Consistent training, tournament participation, and actively learning new techniques all contribute to faster, more deserved progression through the ranks.</p>
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
