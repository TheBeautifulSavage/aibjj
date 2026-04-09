import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BJJ Blue Belt Requirements: What You Need to Know | AIBJJ",
  description: "What does it take to earn your BJJ blue belt? Learn the technical requirements, time expectations, and skills that separate blue belts from white belts.",
};

export default function BJJBlueBeltCurriculumPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "BJJ Blue Belt Requirements: What You Need to Know",
            description: "A comprehensive look at what skills, techniques, and mindset are required to earn a BJJ blue belt at most reputable academies.",
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
        <h1 className="text-4xl font-black sm:text-5xl">BJJ Blue Belt Requirements: What You Need to Know</h1>
        <p className="mt-4 text-xl text-zinc-400">The blue belt is the first major milestone in Brazilian Jiu-Jitsu — and for many practitioners, the hardest to earn. Not because the techniques are difficult, but because it requires fundamental competency across all areas of the game, plus the mindset to handle a year or two of constant losing.</p>
        <div className="mt-8 flex gap-4">
          <Link href="/auth/signup" className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700">Try AIBJJ Free</Link>
          <Link href="/pricing" className="rounded-lg border border-zinc-700 px-6 py-3 font-semibold text-zinc-300 hover:border-zinc-500">See Pricing</Link>
        </div>
      </div>

      {/* Content */}
      <article className="mx-auto max-w-4xl px-6 pb-20 prose prose-invert prose-zinc max-w-none">
        <h2 className="text-2xl font-bold text-white">How Long Does Blue Belt Take?</h2>
        <p className="text-zinc-300">At most reputable academies, blue belt comes after 1.5 to 3 years of consistent training — roughly 2-4 sessions per week. Accelerated programs and competition experience can speed this up. Inconsistent attendance stretches it out.</p>
        <p className="text-zinc-300">IBJJF rules require a minimum age of 16 for blue belt. Beyond age, it's purely competency-based — there's no formal curriculum that every school follows, but there are consistent themes across good academies.</p>

        <h2 className="text-2xl font-bold text-white mt-10">Technical Requirements for BJJ Blue Belt</h2>
        <p className="text-zinc-300">While every school is different, these technical benchmarks appear consistently across quality academies:</p>

        <h3 className="text-xl font-semibold text-white mt-6">Defensive Fundamentals</h3>
        <ul className="text-zinc-300 space-y-2">
          <li>Mount escape (both bridge-and-roll and elbow-knee escape)</li>
          <li>Side control escape (guard recovery and underhook to turtle)</li>
          <li>Back defense and escape (preventing the choke, returning to guard)</li>
          <li>Knee-on-belly escape</li>
          <li>Basic standing defense against takedowns</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mt-6">Guard Play (Bottom)</h3>
        <ul className="text-zinc-300 space-y-2">
          <li>Closed guard: basic sweeps (hip bump, scissor), basic submissions (armbar, triangle, guillotine)</li>
          <li>Half guard: basic sweep (underhook sweep or Old School)</li>
          <li>Understanding guard retention when passing is attempted</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mt-6">Passing (Top Game)</h3>
        <ul className="text-zinc-300 space-y-2">
          <li>Basic closed guard pass (standing or knee-cut)</li>
          <li>Torreando or basic open guard pass</li>
          <li>Maintaining side control and transitioning to mount</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mt-6">Submissions</h3>
        <ul className="text-zinc-300 space-y-2">
          <li>Armbar from guard, mount, and side control</li>
          <li>Triangle choke from guard</li>
          <li>Rear naked choke from back control</li>
          <li>Basic americana and kimura from top positions</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-10">The Mindset Requirement</h2>
        <p className="text-zinc-300">Technical competency is necessary but not sufficient. Blue belt also requires demonstrating the right mindset on the mat:</p>
        <ul className="text-zinc-300 space-y-2">
          <li><strong>Controlled ego:</strong> Can handle losing without reacting dangerously or becoming demoralized</li>
          <li><strong>Good training partner:</strong> Controls strength appropriately, helps newer students</li>
          <li><strong>Consistency:</strong> Shows up reliably, not just when motivated</li>
          <li><strong>Coachability:</strong> Absorbs and applies instruction from professors</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-10">Accelerate Your Blue Belt Progress</h2>
        <p className="text-zinc-300">The fastest path to blue belt isn't grinding mindlessly — it's intelligent, intentional training. Use AIBJJ to track the techniques you're learning, identify which fundamentals you're weakest in, and build a training focus for each week.</p>
        <p className="text-zinc-300">When you know exactly which blue belt competencies you're missing, you can target them directly instead of hoping you'll randomly improve. Check our <Link href="/bjj-white-belt-tips" className="text-red-400 hover:text-red-300">white belt tips</Link> and <Link href="/bjj-progress-tracker" className="text-red-400 hover:text-red-300">progress tracker</Link> to build the clearest path to your blue belt.</p>
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
