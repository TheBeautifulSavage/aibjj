import { Metadata } from "next";
import Link from "next/link";
import MetaChartsPublic from "./MetaChartsPublic";

export const metadata: Metadata = {
  title: "BJJ Competition Meta Breakdown 2025: What's Winning in Gi & No-Gi | AIBJJ",
  description:
    "Complete data analysis of BJJ competition trends in 2025. Submission percentages, heel hook rise, tournament comparison — what's actually finishing fights at IBJJF, ADCC, and EBI.",
  openGraph: {
    title: "BJJ Competition Meta Breakdown 2025: What's Winning in Gi & No-Gi",
    description:
      "Data-driven analysis of BJJ competition trends. Heel hooks, submission rates, and what's actually winning at the highest levels of competition.",
    type: "article",
    url: "https://aibjj.com/bjj-meta",
  },
};

export default function BJJMetaPage() {
  const publishedDate = "2025-01-15";
  const updatedDate = "2025-04-08";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "BJJ Competition Meta Breakdown 2025: What's Winning in Gi & No-Gi",
    datePublished: publishedDate,
    dateModified: updatedDate,
    author: { "@type": "Organization", name: "AIBJJ" },
    publisher: {
      "@type": "Organization",
      name: "AIBJJ",
      logo: { "@type": "ImageObject", url: "https://aibjj.com/logo.png" },
    },
    description:
      "Complete data analysis of BJJ competition trends. Submission percentages, heel hook rise, tournament comparison at IBJJF, ADCC, and EBI.",
    url: "https://aibjj.com/bjj-meta",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="min-h-screen bg-zinc-950 text-zinc-100">
        {/* Nav */}
        <nav className="border-b border-zinc-800 px-4 py-4">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-black">
              <span className="text-red-600">AI</span>BJJ
            </Link>
            <Link
              href="/auth/signup"
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold"
            >
              Get Started Free
            </Link>
          </div>
        </nav>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 py-16">
          <div className="flex items-center gap-2 text-red-500 text-sm font-semibold mb-4 uppercase tracking-wider">
            📊 Competition Analysis
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            BJJ Competition Meta Breakdown 2025: What&apos;s Winning in Gi &amp; No-Gi
          </h1>
          <p className="text-xl text-zinc-400 mb-4">
            Data-driven analysis across 4,770 matches from IBJJF Worlds, ADCC, EBI, and Polaris.
            Here&apos;s exactly what&apos;s finishing fights — and what that means for your training.
          </p>
          <div className="flex items-center gap-4 text-xs text-zinc-500 mb-8">
            <span>Published: {publishedDate}</span>
            <span>•</span>
            <span className="text-emerald-400 font-semibold">Updated: {updatedDate}</span>
            <span>•</span>
            <span>4,770 matches analyzed</span>
          </div>
          <Link
            href="/auth/signup"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block"
          >
            Train Smarter with AI Coach →
          </Link>
        </section>

        {/* Interactive Charts */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <MetaChartsPublic />
        </section>

        {/* Analysis Text */}
        <article className="max-w-4xl mx-auto px-4 pb-16 space-y-10">
          <section>
            <h2 className="text-3xl font-black mb-4">
              The Big Picture: Submission Rates by Format
            </h2>
            <p className="text-zinc-300 mb-4">
              The single most important factor determining what technique wins is not skill — it&apos;s
              the ruleset. IBJJF Gi matches end by submission just 31% of the time. ADCC, with its
              no-points overtime period, sees submission finishes in 52% of matches. EBI/Overtime
              format pushes that number to a remarkable 89%.
            </p>
            <p className="text-zinc-300 mb-4">
              This matters because competitive BJJ practitioners often train techniques that are
              over-indexed for the highest-submission format they watch online — often ADCC or EBI —
              while competing in IBJJF where points and advantages decide the majority of matches.
            </p>
            <p className="text-zinc-300">
              <strong className="text-zinc-100">Coach&apos;s takeaway:</strong> Know your format.
              If you compete IBJJF, positional control and top game are equally important as submissions.
              If you compete ADCC or EBI-style, submission offense and overtime strategies are paramount.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-black mb-4">Gi Competition: What&apos;s Winning at IBJJF</h2>
            <p className="text-zinc-300 mb-4">
              In 2024 IBJJF Gi competition analyzed across 2,847 matches, the rear naked choke leads
              at 18% of all submissions — driven primarily by back take sequences that result in bow
              & arrow variations at the highest levels. Back control is the most valuable position in
              modern Gi BJJ.
            </p>
            <p className="text-zinc-300 mb-4">
              The armbar (16%) remains high but is declining as athletes become better at defending
              arm attacks. Triangle chokes hold steady at 14%. The rising techniques are significant:
              guillotines are up (11%, rising), bow & arrow specifically (10%, rising), and Ezekiel
              chokes (6%, rising) as athletes exploit the unique offensive options that the Gi provides.
            </p>
            <p className="text-zinc-300">
              The takeaway for Gi competitors: master the bow & arrow choke from back control.
              It is the clearest trend in elite Gi competition. Additionally, understand Ezekiel and
              loop chokes from guard — these are catching high-level practitioners off guard and
              producing upsets.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-black mb-4">
              No-Gi: The Heel Hook Revolution
            </h2>
            <p className="text-zinc-300 mb-4">
              The single most dramatic shift in competitive BJJ history is the rise of heel hooks in
              No-Gi competition. In 2015, heel hooks accounted for approximately 8% of No-Gi
              submissions. By 2024, that number is 40% — a 400% increase in under a decade.
            </p>
            <p className="text-zinc-300 mb-4">
              This transformation was driven by John Danaher&apos;s systematic leg lock curriculum,
              the success of the Danaher Death Squad (Gordon Ryan, Gary Tonon, Garry Tonon, Nicky
              Ryan, Craig Jones), and their dominance at ADCC 2019 where leg locks accounted for
              the majority of their finishes.
            </p>
            <p className="text-zinc-300 mb-4">
              Inside heel hooks lead at 28% of all No-Gi submissions, with outside heel hooks at 12%.
              Combined, heel hooks alone account for 40% — more than any other single technique category.
              The rear naked choke (14%) and guillotine (11%) remain relevant, but both are declining
              as athletes develop better back defense and neck protection.
            </p>
            <p className="text-zinc-300">
              <strong className="text-zinc-100">The critical implication:</strong> Any No-Gi competitor
              who doesn&apos;t train leg lock defense is entering competition with a critical vulnerability.
              Heel hook defense — specifically understanding leg entanglement positions, knee alignment,
              and the hip escape — is now baseline competency, not advanced material.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-black mb-4">
              Rising Techniques to Watch in 2025
            </h2>
            <p className="text-zinc-300 mb-4">
              Several techniques are trending upward and likely to become more prominent in 2025:
            </p>
            <ul className="space-y-4">
              <li className="border-l-2 border-red-600 pl-4">
                <strong className="text-zinc-100">Kneebar (No-Gi, rising):</strong>{" "}
                <span className="text-zinc-300">
                  Kneebars are emerging from leg lock entanglements as the natural complement to heel
                  hooks. Athletes who can threaten both create serious dilemmas. Currently at 7% and climbing.
                </span>
              </li>
              <li className="border-l-2 border-red-600 pl-4">
                <strong className="text-zinc-100">Bow & Arrow (Gi, rising):</strong>{" "}
                <span className="text-zinc-300">
                  As back takes become more systematized (influenced by no-gi back systems entering
                  gi training), the bow & arrow has become a higher-percentage finish from the back.
                </span>
              </li>
              <li className="border-l-2 border-red-600 pl-4">
                <strong className="text-zinc-100">Ezekiel Choke (Gi, rising):</strong>{" "}
                <span className="text-zinc-300">
                  Elite competitors are finding creative Ezekiel entries from guard and mount.
                  At 6% and rising — understand the attack and defense.
                </span>
              </li>
              <li className="border-l-2 border-red-600 pl-4">
                <strong className="text-zinc-100">Toe Hold (No-Gi, rising):</strong>{" "}
                <span className="text-zinc-300">
                  As heel hook defense improves, toe holds are becoming the alternative finishing
                  option from many leg lock positions. Currently at 5%.
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-black mb-4">
              Declining Techniques: What&apos;s Being Defended More
            </h2>
            <p className="text-zinc-300 mb-4">
              Just as telling as what&apos;s rising is what&apos;s declining. The armbar is falling
              in both Gi and No-Gi competition as athletes become better at hiding their elbows,
              defending arm extensions, and escaping the position. The triangle choke faces similar
              pressure as guard passing becomes more developed.
            </p>
            <p className="text-zinc-300">
              In No-Gi, the rear naked choke — once the dominant finish — is declining as athletes
              invest more time in back defense, seatbelt escapes, and hand fighting from the back.
              The meta adapts: as one technique peaks, counters develop and its dominance wanes.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-black mb-4">
              How to Use This Data in Your Training
            </h2>
            <p className="text-zinc-300 mb-4">
              Meta analysis is only useful if it changes how you train. Here&apos;s the practical
              application:
            </p>
            <ol className="space-y-3 list-decimal list-inside text-zinc-300">
              <li>
                <strong className="text-zinc-100">Prioritize by your format.</strong> Gi competitor?
                Double down on back attacks and passing. No-Gi competitor? Leg lock literacy is mandatory.
              </li>
              <li>
                <strong className="text-zinc-100">Train both offense and defense on trending techniques.</strong>{" "}
                Rising techniques catch people off guard. Know the Ezekiel attack so you can recognize
                and defend it.
              </li>
              <li>
                <strong className="text-zinc-100">Don&apos;t neglect fundamentals.</strong> Points
                and advantages decide 69% of Gi matches. Takedowns, guard passing, and sweeps are
                the foundation.
              </li>
              <li>
                <strong className="text-zinc-100">Study heel hook counters now.</strong> The trend
                shows counter-systems developing — being ahead of this curve is the strategic
                opportunity of 2025.
              </li>
              <li>
                <strong className="text-zinc-100">Use the AI Coach.</strong> Ask specific questions
                about how the current meta affects your personal game plan. Get personalized training
                recommendations.
              </li>
            </ol>
          </section>

          {/* CTA */}
          <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-8 text-center">
            <h3 className="text-2xl font-black mb-3">
              Get a Personalized Meta Training Plan
            </h3>
            <p className="text-zinc-400 mb-6">
              Our AI Coach analyzes your current training and creates a customized plan
              based on the current competition meta.
            </p>
            <Link
              href="/auth/signup"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block"
            >
              Start Free — No Credit Card Required →
            </Link>
          </div>
        </article>

        {/* Footer */}
        <footer className="border-t border-zinc-800 py-8">
          <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
            <Link href="/" className="font-black text-lg">
              <span className="text-red-600">AI</span>BJJ
            </Link>
            <div className="flex gap-6">
              <Link href="/bjj-submission-statistics" className="hover:text-zinc-300">
                Submission Stats
              </Link>
              <Link href="/bjj-heel-hook-statistics" className="hover:text-zinc-300">
                Heel Hook Data
              </Link>
              <Link href="/adcc-statistics" className="hover:text-zinc-300">
                ADCC Stats
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
