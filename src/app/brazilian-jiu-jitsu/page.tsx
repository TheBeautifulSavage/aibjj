import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Brazilian Jiu-Jitsu: The Complete Guide (2026) | AIBJJ",
  description: "The ultimate guide to Brazilian jiu-jitsu. Learn BJJ history, techniques, belt system, competition, training methods, and how AI is transforming the gentle art.",
  keywords: ["brazilian jiu jitsu", "bjj", "jiu jitsu", "bjj guide", "learn bjj", "bjj techniques", "bjj belt system"],
  openGraph: {
    title: "Brazilian Jiu-Jitsu: The Complete Guide (2026)",
    description: "Everything you need to know about BJJ — from white belt to black belt, techniques to competition, history to modern training.",
    type: "article",
  },
};

export default function BrazilianJiuJitsuPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Brazilian Jiu-Jitsu: The Complete Guide (2026)",
    "description": "The ultimate comprehensive guide to Brazilian jiu-jitsu covering history, techniques, belt system, competition, and training methods.",
    "author": { "@type": "Person", "name": "Jesse Hull", "jobTitle": "BJJ Black Belt & Academy Owner" },
    "publisher": { "@type": "Organization", "name": "AIBJJ", "url": "https://aibjj.com" },
    "datePublished": "2026-04-01",
    "dateModified": "2026-04-09",
    "mainEntityOfPage": "https://aibjj.com/brazilian-jiu-jitsu",
    "image": "https://aibjj.com/og-image.jpg",
    "articleSection": "Martial Arts",
    "wordCount": 3200,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Brazilian jiu-jitsu?",
        "acceptedAnswer": { "@type": "Answer", "text": "Brazilian jiu-jitsu (BJJ) is a martial art and combat sport focused on ground fighting and submission grappling. It emphasizes technique and leverage over strength, allowing smaller practitioners to defeat larger opponents." }
      },
      {
        "@type": "Question",
        "name": "How long does it take to get a BJJ black belt?",
        "acceptedAnswer": { "@type": "Answer", "text": "The average BJJ black belt takes 10-15 years of consistent training. The belt system progresses through white, blue, purple, brown, and black, with each belt typically requiring 2-4 years of dedicated training." }
      },
      {
        "@type": "Question",
        "name": "Is BJJ good for self-defense?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes — BJJ is widely considered one of the most effective self-defense systems. Its focus on ground control, submissions, and escaping dangerous positions makes it practical in real situations." }
      },
      {
        "@type": "Question",
        "name": "What is the difference between gi and no-gi BJJ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Gi BJJ uses the traditional uniform (kimono) for gripping. No-gi BJJ is practiced in shorts and rash guards without the gi, emphasizing body locks, underhooks, and leg attacks." }
      },
      {
        "@type": "Question",
        "name": "How often should I train BJJ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Most practitioners train 3-5 times per week. Beginners can start with 2-3 sessions per week to allow adaptation. Consistent attendance matters more than frequency — 3 days a week every week beats 6 days a week for a month then burning out." }
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aibjj.com" },
      { "@type": "ListItem", "position": 2, "name": "Brazilian Jiu-Jitsu Guide", "item": "https://aibjj.com/brazilian-jiu-jitsu" },
    ],
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Nav */}
      <nav className="sticky top-0 z-40 border-b border-zinc-800 bg-[#0a0a0a]/95 backdrop-blur px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <div className="flex items-center gap-4">
          <Link href="/auth/signin" className="text-sm text-zinc-400 hover:text-white">Sign In</Link>
          <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
        </div>
      </nav>

      {/* Hero */}
      <div className="mx-auto max-w-4xl px-6 py-16">
        <nav className="text-sm text-zinc-500 mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-zinc-300">Home</Link>
          <span>›</span>
          <span className="text-zinc-300">Brazilian Jiu-Jitsu: Complete Guide</span>
        </nav>

        <div className="mb-4 flex items-center gap-2">
          <span className="rounded-full bg-red-600/20 border border-red-600/30 px-3 py-1 text-xs font-semibold text-red-400">Ultimate Guide</span>
          <span className="text-xs text-zinc-500">Updated April 2026 · 15 min read</span>
        </div>

        <h1 className="text-5xl font-black leading-tight sm:text-6xl">
          Brazilian Jiu-Jitsu:<br />
          <span className="text-red-600">The Complete Guide</span>
        </h1>
        <p className="mt-6 text-xl text-zinc-400 leading-relaxed">
          Everything you need to know about the gentle art — from its origins in Japan to the cutting edge of modern sport BJJ. Whether you&apos;re stepping on the mats for the first time or competing at the world level, this guide covers it all.
        </p>

        {/* Table of Contents */}
        <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
          <h2 className="text-lg font-bold text-white mb-4">Table of Contents</h2>
          <ol className="space-y-2 text-sm text-zinc-400">
            {[
              ["#what-is-bjj", "What Is Brazilian Jiu-Jitsu?"],
              ["#history", "History and Origins"],
              ["#why-train", "Why Train BJJ? 10 Reasons"],
              ["#belt-system", "The Belt System Explained"],
              ["#techniques", "Core Techniques and Positions"],
              ["#gi-vs-nogi", "Gi vs No-Gi: Which Is Better?"],
              ["#training", "How to Train BJJ Effectively"],
              ["#competition", "Competition: IBJJF, ADCC, and Beyond"],
              ["#self-defense", "BJJ for Self-Defense"],
              ["#ai-coaching", "How AI Is Transforming BJJ Training"],
              ["#faq", "Frequently Asked Questions"],
            ].map(([href, label], i) => (
              <li key={href}>
                <a href={href} className="flex items-center gap-2 hover:text-white transition-colors">
                  <span className="text-red-500 font-bold w-5">{i + 1}.</span>
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Article Body */}
      <article className="mx-auto max-w-4xl px-6 pb-20 space-y-16">

        {/* Section 1 */}
        <section id="what-is-bjj">
          <h2 className="text-3xl font-black text-white mb-6 border-l-4 border-red-600 pl-4">What Is Brazilian Jiu-Jitsu?</h2>
          <div className="space-y-4 text-zinc-300 leading-relaxed">
            <p>Brazilian jiu-jitsu (BJJ) is a ground-based martial art, combat sport, and self-defense system that centers on grappling — specifically controlling and submitting an opponent through joint locks, chokes, and positional dominance. Unlike striking arts, BJJ resolves conflict by taking fights to the ground and using technique and leverage to neutralize opponents, regardless of size.</p>
            <p>The foundational premise of BJJ is that a smaller, weaker person can successfully defend against a larger, stronger attacker by using proper technique and leverage. This principle — born in the Gracie family&apos;s challenge matches and refined over a century of competition — has been proven repeatedly across every level of martial arts and MMA competition.</p>
            <p>BJJ is practiced in two primary forms: gi (using the traditional kimono for gripping) and no-gi (in shorts and rash guards, emphasizing body control and leg attacks). Both share the same positional hierarchy — guard, side control, mount, back control — but differ significantly in gripping strategy and technique emphasis.</p>
            <div className="grid grid-cols-2 gap-4 mt-6 sm:grid-cols-4">
              {[["10-15 yrs", "Average to Black Belt"], ["192+", "Countries with BJJ"], ["2M+", "Estimated Practitioners"], ["1993", "UFC 1 Year (BJJ Went Global)"]].map(([stat, label]) => (
                <div key={stat} className="rounded-xl border border-zinc-800 bg-zinc-900 p-4 text-center">
                  <div className="text-2xl font-black text-red-500">{stat}</div>
                  <div className="text-xs text-zinc-500 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section id="history">
          <h2 className="text-3xl font-black text-white mb-6 border-l-4 border-red-600 pl-4">History and Origins of BJJ</h2>
          <div className="space-y-4 text-zinc-300 leading-relaxed">
            <p>Brazilian jiu-jitsu traces its lineage to Japanese judo (Kodokan Judo) through a chain of transmission that is both well-documented and deeply contested within the martial arts world. The story begins with Mitsuyo Maeda, a top student of Judo founder Jigoro Kano, who traveled the world from 1904 onward as part of a campaign to demonstrate judo&apos;s effectiveness.</p>
            <p>Maeda arrived in Brazil in 1914 and eventually settled in Belém, Pará. There, he befriended Gastão Gracie — a prominent local businessman — and agreed to teach his son Carlos Gracie. Carlos trained diligently, absorbed Maeda&apos;s ground fighting methods, and passed the knowledge to his brothers, most significantly to Hélio Gracie.</p>
            <p>Hélio was a frail child who couldn&apos;t practice the more physically demanding judo throws. Instead, he refined the ground fighting elements — emphasizing leverage over strength, developing guard as an offensive position, and systematically testing techniques through open challenge matches. The result was a distinct martial art that Hélio and Carlos would spend decades refining and proving against all comers in the famous Gracie Challenge.</p>
            <p>BJJ exploded onto the global stage on November 12, 1993, when Royce Gracie — a relatively slim 175-pound fighter — entered the first Ultimate Fighting Championship and submitted every opponent he faced, including much larger wrestlers, boxers, and kickboxers. The message was undeniable: ground fighting was the missing piece of almost every martial artist&apos;s training, and BJJ was its most refined expression.</p>
          </div>
          <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 text-sm text-zinc-400">
            <strong className="text-zinc-200">Key Lineage:</strong> Jigoro Kano → Mitsuyo Maeda → Carlos Gracie → Hélio Gracie → Rickson, Royce, Relson Gracie → modern BJJ
          </div>
        </section>

        {/* Section 3 */}
        <section id="why-train">
          <h2 className="text-3xl font-black text-white mb-6 border-l-4 border-red-600 pl-4">Why Train BJJ? 10 Compelling Reasons</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["🧠", "Mental Toughness", "BJJ constantly puts you in uncomfortable positions and forces you to stay calm and problem-solve. There is no better classroom for composure under pressure."],
              ["💪", "Full-Body Fitness", "A one-hour BJJ session burns 500-700 calories and works every muscle group. The fitness gains are functional — not just aesthetic."],
              ["🛡️", "Effective Self-Defense", "BJJ&apos;s ground control and submission techniques are among the most field-tested self-defense methods in existence, validated across thousands of real altercations and MMA fights."],
              ["🤝", "Community", "The BJJ community is uniquely tight-knit. The shared suffering of training creates bonds that last a lifetime. Most practitioners describe their gym as family."],
              ["⏳", "Lifelong Practice", "BJJ can be practiced well into old age. Unlike striking arts, the ground game doesn&apos;t rely on explosive speed — technique and timing developed over decades remain valuable at 60."],
              ["🏆", "Competition Pathway", "From local invitationals to IBJJF Worlds and ADCC, BJJ offers a full competitive pathway for those who want to test themselves."],
              ["🧩", "Problem Solving", "Every roll is a chess match — reading your opponent, setting traps, chaining techniques. BJJ is the most mentally stimulating fitness activity most people ever discover."],
              ["📈", "Measurable Progress", "The belt system, improved rolling performance, and specific technical milestones give clear, tangible markers of growth that most fitness pursuits lack."],
              ["🌍", "Global Passport", "Walk into any BJJ gym anywhere in the world and you have an instant community. The universal language of BJJ transcends every cultural barrier."],
              ["🤖", "AI-Enhanced Learning", "Modern tools like AIBJJ let you track techniques, build game plans, get AI coaching between sessions, and analyze your progress in ways that accelerate development dramatically."],
            ].map(([icon, title, desc]) => (
              <div key={title} className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{icon}</span>
                  <h3 className="font-bold text-white">{title}</h3>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4 */}
        <section id="belt-system">
          <h2 className="text-3xl font-black text-white mb-6 border-l-4 border-red-600 pl-4">The BJJ Belt System Explained</h2>
          <div className="space-y-4 text-zinc-300 leading-relaxed">
            <p>BJJ uses one of the most rigorous belt systems in all of martial arts. Unlike many styles where belts can be earned in months, a BJJ black belt typically requires a decade or more of consistent, high-level training. There are no formal tests — advancement is based entirely on demonstrated skill in rolling and technical knowledge.</p>
          </div>
          <div className="mt-6 space-y-3">
            {[
              ["bg-gray-100", "text-gray-900", "White Belt", "The beginning. Survival is the goal. Focus on escapes, basic positions, and not getting hurt. Most tap a lot — that&apos;s normal and how you learn.", "1-2 years"],
              ["bg-blue-500", "text-white", "Blue Belt", "Fundamentals are solid. You have a basic guard, know core submissions, and can hold your own with other beginners. The largest attrition point in BJJ.", "2-4 years"],
              ["bg-purple-500", "text-white", "Purple Belt", "The technical period. You develop a game plan and identity. Purple belts are dangerous and creative. Often qualified to teach fundamentals.", "3-5 years"],
              ["bg-amber-700", "text-white", "Brown Belt", "Refining the game. Brown belts iron out weaknesses and develop competition-level technique. One step from the pinnacle.", "2-3 years"],
              ["bg-black border border-zinc-600", "text-white", "Black Belt", "Mastery. A BJJ black belt is one of the hardest athletic achievements in any sport. Most never get here — those who do have proven it on the mat.", "10-15 years total"],
            ].map(([bg, textColor, belt, desc, time]) => (
              <div key={belt} className="flex items-start gap-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
                <div className={`rounded px-3 py-1.5 text-xs font-black whitespace-nowrap ${bg} ${textColor}`}>{belt}</div>
                <div className="flex-1">
                  <p className="text-sm text-zinc-300">{desc}</p>
                </div>
                <div className="text-xs text-zinc-500 whitespace-nowrap">{time}</div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-zinc-500">Each belt also has up to 4 stripe degrees. Red-black and red-white belts exist beyond black for the highest levels, with red belt reserved for those who have dedicated their lives to the art (typically 50+ years of training).</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link href="/bjj-belt-system" className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:text-white">Belt System Deep Dive →</Link>
            <Link href="/how-long-to-get-bjj-blue-belt" className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:text-white">How Long to Blue Belt →</Link>
            <Link href="/bjj-black-belt-journey" className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:text-white">Road to Black Belt →</Link>
          </div>
        </section>

        {/* Section 5 */}
        <section id="techniques">
          <h2 className="text-3xl font-black text-white mb-6 border-l-4 border-red-600 pl-4">Core BJJ Techniques and Positions</h2>
          <div className="space-y-4 text-zinc-300 leading-relaxed">
            <p>BJJ&apos;s technical depth is virtually unlimited — practitioners spend entire careers mastering one position. But the architecture of BJJ is built on a clear positional hierarchy and a core set of positions and submissions that every practitioner must understand.</p>
          </div>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">The Positional Hierarchy</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["Back Control", "The top position. Hooks in, seatbelt grip, hunting the rear naked choke.", "/bjj-back-control", "🥇"],
              ["Mount", "Dominant top position straddling the opponent. Armbar, triangle, and choke entries.", "/bjj-mount-position", "🥈"],
              ["Side Control", "Top dominant position beside the opponent. Kimura, americana, and neck crank threats.", "/bjj-side-control-position", "🥉"],
              ["Guard (Top)", "Passing the guard is the path to dominant positions. Multiple passing systems exist.", "/bjj-guard-passing", "⚔️"],
              ["Guard (Bottom)", "Unique to BJJ — fighting from your back. Closed guard, open guard, half guard variants.", "/bjj-closed-guard-attacks", "🛡️"],
              ["Turtle", "Defensive position. Attacked with clock chokes, back takes, and leg attacks.", "/bjj-turtle-position", "🐢"],
            ].map(([pos, desc, href, icon]) => (
              <Link key={pos} href={href} className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 hover:border-zinc-600 transition-colors">
                <div className="flex items-center gap-2 mb-1">
                  <span>{icon}</span>
                  <h4 className="font-bold text-white">{pos}</h4>
                </div>
                <p className="text-xs text-zinc-400">{desc}</p>
              </Link>
            ))}
          </div>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">Essential Submissions</h3>
          <div className="flex flex-wrap gap-2">
            {[
              ["/bjj-armbar", "Armbar"], ["/bjj-triangle-choke", "Triangle Choke"],
              ["/bjj-rear-naked-choke", "Rear Naked Choke"], ["/bjj-kimura", "Kimura"],
              ["/bjj-guillotine", "Guillotine"], ["/bjj-omoplata", "Omoplata"],
              ["/bjj-heel-hook", "Heel Hook"], ["/bjj-darce-choke", "D&apos;Arce Choke"],
              ["/bjj-bow-and-arrow-choke", "Bow &amp; Arrow"], ["/bjj-leg-locks", "Leg Locks"],
            ].map(([href, name]) => (
              <Link key={href} href={href} className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-300 hover:border-red-600/50 hover:text-white transition-colors" dangerouslySetInnerHTML={{ __html: name }} />
            ))}
          </div>
        </section>

        {/* Section 6 */}
        <section id="gi-vs-nogi">
          <h2 className="text-3xl font-black text-white mb-6 border-l-4 border-red-600 pl-4">Gi vs No-Gi BJJ</h2>
          <div className="space-y-4 text-zinc-300 leading-relaxed">
            <p>The gi (kimono) vs no-gi debate is one of BJJ&apos;s most enduring conversations. Both have genuine value, and serious practitioners should train both — but understanding the differences helps you choose where to start.</p>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
              <h3 className="text-lg font-bold text-white mb-3">🥋 Gi BJJ</h3>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>✓ Richer gripping game (collar, sleeve, pants)</li>
                <li>✓ Slower pace — more chess-like</li>
                <li>✓ Traditional training method</li>
                <li>✓ Larger competition circuit (IBJJF)</li>
                <li>✓ Wider submission variety (collar chokes)</li>
                <li>✗ Slower techniques don&apos;t translate directly to MMA/self-defense</li>
              </ul>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
              <h3 className="text-lg font-bold text-white mb-3">🩲 No-Gi BJJ</h3>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>✓ Directly applicable to MMA and self-defense</li>
                <li>✓ Faster, more explosive pace</li>
                <li>✓ Leg lock emphasis (heel hooks, etc.)</li>
                <li>✓ ADCC — most prestigious grappling event</li>
                <li>✓ Growing fastest in terms of competition growth</li>
                <li>✗ Easier to &apos;muscle&apos; positions without refined technique</li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-sm text-zinc-400"><strong className="text-zinc-200">Bottom line:</strong> Train gi to build technique and connection. Train no-gi to apply it under realistic conditions. The best grapplers do both.</p>
        </section>

        {/* Section 7 */}
        <section id="training">
          <h2 className="text-3xl font-black text-white mb-6 border-l-4 border-red-600 pl-4">How to Train BJJ Effectively</h2>
          <div className="space-y-4 text-zinc-300 leading-relaxed">
            <p>Most people who train BJJ don&apos;t train smart. They roll hard, get injured, miss weeks, come back, and repeat. The practitioners who progress fastest take a different approach.</p>
          </div>
          <div className="mt-6 space-y-4">
            {[
              ["Log Every Session", "The single biggest accelerator of BJJ progress. Write down what you worked on, what caught you, and what you want to drill. The patterns reveal your blind spots.", "/bjj-journal-app"],
              ["Drill with Intent", "Drilling isn&apos;t about reps — it&apos;s about perfect reps. 50 correct repetitions of a technique builds more muscle memory than 500 sloppy ones.", "/bjj-drilling-techniques"],
              ["Have a Game Plan", "Random rolling produces random results. Build a position-by-position game plan and use every roll to test it. Struggle from mount? Spend 3 months focusing only on mount.", "/bjj-game-planning"],
              ["Use an AI Coach", "Between sessions, an AI coach can answer technique questions, build drilling sequences, and help you analyze your game — multiplying your mat time.", "/coach"],
              ["Manage Your Ego", "Tap early, tap often — especially in training. Getting submitted is data, not failure. Ego protection leads to injuries and stunted growth.", "/bjj-mental-game"],
              ["Train Consistently", "3 days a week every week for a year beats 6 days a week for two months then burnout. Consistency is the only variable that matters.", "/bjj-training-frequency"],
            ].map(([title, desc, href]) => (
              <div key={title} className="flex gap-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600/20 border border-red-600/30 flex items-center justify-center text-red-500">✓</div>
                <div>
                  <h3 className="font-bold text-white">{title}</h3>
                  <p className="mt-1 text-sm text-zinc-400">{desc}</p>
                  <Link href={href} className="mt-1 inline-block text-xs text-red-400 hover:text-red-300">Learn more →</Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 8 */}
        <section id="competition">
          <h2 className="text-3xl font-black text-white mb-6 border-l-4 border-red-600 pl-4">BJJ Competition</h2>
          <div className="space-y-4 text-zinc-300 leading-relaxed">
            <p>Competition is the ultimate testing ground for your BJJ. It reveals what actually works under pressure versus what only works in the safety of familiar training partners. You don&apos;t need to compete to practice BJJ, but most practitioners who do compete describe it as transformative.</p>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              ["IBJJF", "The largest gi competition circuit. Points-based. World Championship is the most prestigious annual event.", "/bjj-ibjjf-rules"],
              ["ADCC", "No-gi submission wrestling. The Olympics of grappling — held every 2 years, invitation-only at the top level.", "/bjj-adcc-rules"],
              ["Submission Only", "No points, no time limits in some formats. Win by submission only. Growing rapidly in popularity.", "/bjj-submission-only"],
            ].map(([name, desc, href]) => (
              <Link key={name} href={href} className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 hover:border-zinc-600 transition-colors">
                <h3 className="font-bold text-white text-lg mb-2">{name}</h3>
                <p className="text-sm text-zinc-400">{desc}</p>
              </Link>
            ))}
          </div>
          <Link href="/bjj-competition-strategy" className="mt-4 inline-block text-sm text-red-400 hover:text-red-300">Competition strategy guide →</Link>
        </section>

        {/* Section 9 */}
        <section id="self-defense">
          <h2 className="text-3xl font-black text-white mb-6 border-l-4 border-red-600 pl-4">BJJ for Self-Defense</h2>
          <div className="space-y-4 text-zinc-300 leading-relaxed">
            <p>The original purpose of Brazilian jiu-jitsu was self-defense — specifically, giving a smaller person the ability to control and neutralize a larger attacker. The Gracies proved this worked through decades of open challenge matches and ultimately through the UFC.</p>
            <p>The core self-defense value of BJJ comes from its ground fighting emphasis. Statistics on street altercations consistently show that most fights end up on the ground. A trained BJJ practitioner on the ground against an untrained larger attacker has an enormous advantage — they can control, neutralize, or submit without causing permanent injury, or create distance and escape.</p>
            <p>BJJ also trains calm under pressure in a way few martial arts can match. Regular sparring against resisting opponents builds the stress inoculation that makes performance under real threat possible. You learn to control your breathing, manage panic, and think clearly when someone is actively trying to submit you — a skill that transfers directly to real-world situations.</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link href="/bjj-self-defense" className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:text-white">BJJ Self-Defense Guide →</Link>
            <Link href="/bjj-for-women-self-defense" className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:text-white">BJJ for Women →</Link>
            <Link href="/bjj-for-law-enforcement" className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:text-white">BJJ for Law Enforcement →</Link>
          </div>
        </section>

        {/* Section 10 */}
        <section id="ai-coaching">
          <h2 className="text-3xl font-black text-white mb-6 border-l-4 border-red-600 pl-4">How AI Is Transforming BJJ Training</h2>
          <div className="space-y-4 text-zinc-300 leading-relaxed">
            <p>For the first time in BJJ&apos;s history, every practitioner — from white belt in a small-town gym to advanced competitor — has access to personalized coaching quality that previously required expensive private lessons with elite instructors.</p>
            <p>AI coaching tools like AIBJJ use large language models trained on deep BJJ knowledge to answer technical questions, build personalized game plans, generate drilling sequences, and analyze training patterns. Ask &quot;How do I improve my guard retention against passing pressure?&quot; at midnight and get a detailed, actionable answer immediately.</p>
            <p>The training journal aspect is equally transformative. Logging sessions consistently, then using AI to identify patterns — &quot;You&apos;ve logged side control escape failures 8 times this month&quot; — accelerates the self-awareness that usually takes years of experienced coaching to develop.</p>
            <p>The practitioners who will dominate BJJ in the next decade will be those who combine traditional mat time with intelligent use of AI tools for the hours they&apos;re not training.</p>
          </div>
          <div className="mt-6 rounded-2xl border border-red-900/30 bg-red-950/20 p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-red-600 font-black text-white">AI</div>
              <div>
                <h3 className="font-bold text-white">Try AIBJJ Free</h3>
                <p className="mt-1 text-sm text-zinc-400">AI coaching, training journal, technique library, game plan builder — everything you need to accelerate your BJJ development.</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free — No Credit Card</Link>
                  <Link href="/ai-bjj-coach" className="rounded-lg border border-zinc-700 px-4 py-2 text-sm font-semibold text-zinc-300 hover:border-zinc-500">Learn About AI Coaching →</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-3xl font-black text-white mb-6 border-l-4 border-red-600 pl-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              ["What is Brazilian jiu-jitsu?", "Brazilian jiu-jitsu (BJJ) is a martial art and combat sport focused on ground fighting and submission grappling. It emphasizes technique and leverage over strength, allowing smaller practitioners to defeat larger opponents using joint locks, chokes, and positional control."],
              ["How long does it take to get a BJJ black belt?", "The average BJJ black belt takes 10-15 years of consistent training. The path goes through white, blue, purple, and brown belts first — each requiring years of demonstrated skill, not just time on the mat."],
              ["Is BJJ good for self-defense?", "Yes — BJJ is widely considered one of the most effective self-defense systems available. Its ground control, submission techniques, and stress inoculation from live sparring make it extremely practical in real situations."],
              ["What is the difference between gi and no-gi BJJ?", "Gi BJJ uses the traditional kimono uniform for gripping and tends to be more technical and methodical. No-gi uses shorts and rash guards, is faster-paced, and emphasizes body locks, underhooks, and leg attacks. Both are valuable — serious practitioners train both."],
              ["How often should I train BJJ?", "Most practitioners train 3-5 times per week. Beginners can start with 2-3 sessions per week to allow physical adaptation. Consistency matters more than frequency — showing up 3 days a week every week beats sporadic intensive blocks."],
              ["Do I need to be in shape to start BJJ?", "No — BJJ will get you in shape. Many people start BJJ specifically to get fit. The conditioning comes from the training itself. The first few months are humbling regardless of your prior fitness level."],
              ["Is BJJ good for kids?", "BJJ is excellent for children. It builds confidence, discipline, problem-solving, and self-defense awareness. Many schools have dedicated kids programs starting from age 4-5. The no-strikes rule makes it safer than many martial arts."],
            ].map(([q, a]) => (
              <details key={q} className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 open:border-zinc-700">
                <summary className="font-bold text-white cursor-pointer">{q}</summary>
                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Related Pages Grid */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Explore More BJJ Topics</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["/bjj-techniques", "🥋", "Technique Library", "Every submission, sweep, and pass"],
              ["/academies", "🏫", "Find an Academy", "283+ academies worldwide"],
              ["/bjj-for-beginners", "🌱", "Beginner's Guide", "Start your BJJ journey right"],
              ["/bjj-competition-prep", "🏆", "Competition Prep", "Train to win"],
              ["/bjj-self-defense", "🛡️", "Self-Defense", "Real-world BJJ applications"],
              ["/bjj-fitness", "💪", "Fitness & Conditioning", "Get in the best shape of your life"],
              ["/bjj-for-women", "♀️", "BJJ for Women", "Why women love jiu-jitsu"],
              ["/bjj-for-kids", "🧒", "BJJ for Kids", "Building confidence from day one"],
              ["/bjj-history", "📚", "BJJ History", "From Japan to the world"],
            ].map(([href, icon, title, desc]) => (
              <Link key={href} href={href} className="flex items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 hover:border-zinc-600 transition-colors">
                <span className="text-2xl">{icon}</span>
                <div>
                  <div className="font-semibold text-white text-sm">{title}</div>
                  <div className="text-xs text-zinc-500">{desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </article>

      {/* Final CTA */}
      <div className="border-t border-zinc-800 bg-zinc-950 py-20 text-center px-6">
        <h2 className="text-4xl font-black">Start Your BJJ Journey Today</h2>
        <p className="mt-4 text-lg text-zinc-400 max-w-xl mx-auto">Track your training, get AI coaching, learn techniques, and build your game plan — all in one platform built by a BJJ black belt.</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/auth/signup" className="rounded-xl bg-red-600 px-8 py-4 text-lg font-bold text-white hover:bg-red-700 w-full sm:w-auto">
            Start Free — No Credit Card
          </Link>
          <Link href="/academies" className="rounded-xl border border-zinc-700 px-8 py-4 text-lg font-semibold text-zinc-300 hover:border-zinc-500 w-full sm:w-auto">
            Find an Academy Near You →
          </Link>
        </div>
      </div>
    </div>
  );
}
