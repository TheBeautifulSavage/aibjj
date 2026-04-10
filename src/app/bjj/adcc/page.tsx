import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400; // Re-generate daily
export const metadata: Metadata = {
  title: "ADCC: The World's Most Prestigious Grappling Tournament | AIBJJ",
  description: "The Abu Dhabi Combat Club Submission Wrestling World Championship is the most prestigious no-gi grappling event on the planet. Held every two years, ADCC d",
};

export default function Page() {
  const tags = ["adcc", "no-gi", "competition", "gordon-ryan", "marcelo-garcia", "andre-galvao"];
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
        <h1 className="text-4xl font-black sm:text-5xl">ADCC: The World's Most Prestigious Grappling Tournament</h1>
        <p className="mt-4 text-xl text-zinc-400">The Abu Dhabi Combat Club Submission Wrestling World Championship is the most prestigious no-gi grappling event on the planet. Held every two years, ADCC determines the undisputed world champions of submission grappling.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">History and Origins</h2>
            <p>ADCC was founded by Sheikh Tahnoon bin Zayed Al Nahyan of the UAE royal family, a passionate grappler who wanted to create the premier no-gi competition. The first tournament was held in Abu Dhabi in 1998. The format has evolved significantly — today ADCC features invitation-only elite competitors alongside qualification tournament winners from every major region.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Rules and Format</h2>
            <p>ADCC uses a unique ruleset designed for exciting, submission-focused matches. The first half awards no points — the goal is submission only. Points become available in the second half: takedowns (2), sweeps and guard passes (2), mount and back control (3-4). No points for guard pulling. Matches that go to time are decided by penalty count, then referee decision.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Greatest Champions</h2>
            <p>The ADCC record books are a Hall of Fame. Marcelo Garcia&apos;s five titles across different weight classes and absolutes set the gold standard. Gordon Ryan won back-to-back absolutes in 2019 and 2022. Andre Galvao won four times. Other legends include Ricco Rodriguez, Pablo Popovitch, and Roberto Abreu. On the women&apos;s side, Gabi Garcia and Ffion Davies have been dominant.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">ADCC Trials and Qualification</h2>
            <p>Every two years, regional ADCC trials determine who earns the remaining invitation spots alongside the directly invited elite. Trials are held across North America, Europe, Asia-Pacific, and South America — drawing thousands of competitors. Winning an ADCC trial and qualifying is itself considered a major achievement in the no-gi community.</p>
          </section>
        </div>
        <div className="mt-16 rounded-2xl border border-red-900/30 bg-red-950/20 p-8 text-center">
          <h2 className="text-2xl font-black">Train Smarter with AI Coaching</h2>
          <p className="mt-2 text-zinc-400">Track your training, get personalized coaching, and build your game plan — free to start.</p>
          <Link href="/auth/signup" className="mt-5 inline-block rounded-xl bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700">Start Free</Link>
        </div>
        <div className="mt-10">
          <h3 className="text-lg font-bold text-white mb-4">Explore More</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/brazilian-jiu-jitsu" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">Complete BJJ Guide</Link>
            <Link href="/academies" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">Find an Academy</Link>
            <Link href="/bjj-techniques" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">Technique Library</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
