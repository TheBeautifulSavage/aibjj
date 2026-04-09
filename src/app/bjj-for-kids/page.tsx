import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BJJ for Kids: Building Confidence, Discipline, and Self-Defense | AIBJJ",
  description: "BJJ for kids teaches discipline, confidence, and practical self-defense skills. Learn why jiu-jitsu is one of the best martial arts for children of all ages.",
};

export default function BJJForKidsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "BJJ for Kids: Building Confidence, Discipline, and Self-Defense",
            description: "Why Brazilian Jiu-Jitsu is one of the best activities for children, covering physical development, confidence building, bullying prevention, and character development.",
            author: { "@type": "Organization", name: "AIBJJ" },
            publisher: { "@type": "Organization", name: "AIBJJ", url: "https://aibjj.com" },
          }),
        }}
      />

      {/* Nav */}
      <nav className="border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>

      {/* Hero */}
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-black sm:text-5xl">BJJ for Kids: Building Confidence, Discipline, and Self-Defense</h1>
        <p className="mt-4 text-xl text-zinc-400">Brazilian Jiu-Jitsu is one of the most effective martial arts you can put your child in. Beyond the physical fitness and self-defense skills, BJJ teaches kids how to handle adversity, respect others, and develop the kind of confidence that comes from genuinely earning something difficult.</p>
        <div className="mt-8 flex gap-4">
          <Link href="/auth/signup" className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700">Try AIBJJ Free</Link>
          <Link href="/pricing" className="rounded-lg border border-zinc-700 px-6 py-3 font-semibold text-zinc-300 hover:border-zinc-500">See Pricing</Link>
        </div>
      </div>

      {/* Content */}
      <article className="mx-auto max-w-4xl px-6 pb-20 prose prose-invert prose-zinc max-w-none">
        <h2 className="text-2xl font-bold text-white">Why BJJ Is Different from Other Kids' Martial Arts</h2>
        <p className="text-zinc-300">Many martial arts programs for children are excellent at teaching structure and discipline, but they lack one crucial element: testing. Kids learn kata and forms but never actually test those skills against resisting opponents. When the situation arises where they need to use what they've learned, it fails.</p>
        <p className="text-zinc-300">BJJ is different. Even in kids' classes, students spar (at age-appropriate intensity) against each other. They learn what actually works — not just what looks good. This live training builds real confidence because kids know their skills are genuine. They've tested them.</p>

        <h2 className="text-2xl font-bold text-white mt-10">The Bullying Problem — and How BJJ Solves It</h2>
        <p className="text-zinc-300">Bullying is a real threat that every parent worries about. BJJ addresses it in multiple ways:</p>
        <ul className="text-zinc-300 space-y-2">
          <li><strong>Physical confidence:</strong> Kids who know they can handle themselves physically don't project vulnerability. Bullies target easy victims — a confident kid who doesn't flinch is less likely to be targeted.</li>
          <li><strong>Non-violent control:</strong> BJJ teaches kids to control an aggressor without necessarily striking. If a bully grabs your child, they can take them down and control them until the situation de-escalates — without punching, which can create its own problems.</li>
          <li><strong>Mental resilience:</strong> BJJ kids learn to handle losing gracefully. They get tapped constantly in training and learn that getting submitted doesn't define them. This resilience transfers directly to handling social pressure and bullying.</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-10">Physical and Mental Benefits for Kids</h2>
        <ul className="text-zinc-300 space-y-2">
          <li><strong>Fitness:</strong> BJJ is a full-body workout that develops strength, flexibility, and cardiovascular fitness without kids even realizing they're exercising</li>
          <li><strong>Focus and discipline:</strong> Learning techniques requires listening, following instructions, and paying attention — skills that transfer to school</li>
          <li><strong>Problem-solving:</strong> BJJ is chess with your body. Kids learn to read situations and respond with technique rather than emotion</li>
          <li><strong>Respect:</strong> The mat culture in good BJJ academies is built on mutual respect between training partners</li>
          <li><strong>Social skills:</strong> Kids train with partners of different ages, sizes, and backgrounds — developing social flexibility</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-10">What Age to Start Kids in BJJ</h2>
        <p className="text-zinc-300">Most academies accept kids starting at age 4-5, though early programs focus on games and movement rather than formal technique. True BJJ instruction typically begins around age 6-7 when kids have the focus to follow detailed instruction.</p>
        <p className="text-zinc-300">Ages 8-12 are often the golden window — kids are physically capable of learning technique, emotionally mature enough to handle competition, and young enough that the habits and movements ingrained now will serve them for life.</p>
        <p className="text-zinc-300">Teenagers who start BJJ often progress quickly due to physical development and intellectual capacity for strategy. It's never too early — and rarely too late.</p>

        <h2 className="text-2xl font-bold text-white mt-10">Finding the Right BJJ Academy for Your Child</h2>
        <p className="text-zinc-300">Not all academies are equal for kids. Look for:</p>
        <ul className="text-zinc-300 space-y-2">
          <li>Dedicated kids' classes with age-appropriate instruction</li>
          <li>Instructors who clearly enjoy working with children</li>
          <li>A culture of positivity and encouragement, not just winning</li>
          <li>Age and size matching for sparring</li>
          <li>Good reviews from other parents</li>
        </ul>
        <p className="text-zinc-300">A trial class is the best way to evaluate fit. Watch how instructors interact with kids who are struggling. The best programs build kids up through challenge, not tear them down. For families interested in getting into BJJ together, check our <Link href="/bjj-for-beginners" className="text-red-400 hover:text-red-300">beginners guide</Link> and <Link href="/bjj-for-women" className="text-red-400 hover:text-red-300">BJJ for women</Link>.</p>
      </article>

      {/* Bottom CTA */}
      <div className="bg-zinc-900 border-t border-zinc-800 py-16 text-center">
        <h2 className="text-3xl font-black">Ready to level up your jiu-jitsu?</h2>
        <p className="mt-3 text-zinc-400">AI coaching, technique library, training journal — all in one place.</p>
        <Link href="/auth/signup" className="mt-6 inline-block rounded-lg bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700">Start Free Today</Link>
      </div>
    </div>
  );
}
