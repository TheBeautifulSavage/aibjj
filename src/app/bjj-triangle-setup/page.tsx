import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Triangle Choke Setup: Creating the Angle | AIBJJ",
  description: "Learn how to set up the triangle choke from closed guard — angle creation, leg position, and the essential hip escape that makes the triangle tight and effective.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Triangle Choke Setup: Creating the Angle",
    "author": { "@type": "Organization", "name": "AIBJJ" },
    "publisher": { "@type": "Organization", "name": "AIBJJ", "url": "https://aibjj.com" },
  };
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
<article className="mx-auto max-w-4xl px-6 py-12">
        <nav className="text-sm text-zinc-500 mb-6">
          <Link href="/" className="hover:text-zinc-300">Home</Link> ›
          <Link href="/bjj-techniques" className="hover:text-zinc-300 ml-1">Techniques</Link> ›
          <span className="ml-1 text-zinc-300">Triangle Choke Setup</span>
        </nav>
        <h1 className="text-4xl font-black">Triangle Choke Setup: Creating the Angle</h1>
        <p className="mt-4 text-xl text-zinc-400">The triangle choke is the signature submission of closed guard BJJ, using your legs to form a figure-four around the opponent's neck and one arm to compress the carotid arteries. Setting it up correctly is all about angle and arm position.</p>

        <div className="mt-10 space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Breaking Posture and Creating the Frame</h2>
            <p>The triangle begins with breaking your opponent's posture from closed guard. Use your legs to pull them down and control one arm across your centerline with a sleeve or wrist grip. You need one arm in and one arm out of your guard — the shoulder of the trapped arm becomes the fulcrum of the choke. Once their posture is broken and you have one arm controlled, push their other arm away to clear it from the path of your leg swing. The hip escape is next: drive your hips out to the side of the trapped arm and swing your leg over their shoulder and behind their neck to begin forming the triangle.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Locking and Adjusting the Triangle</h2>
            <p>Once your leg is over their neck, lock your ankles by placing the back of your knee over the top of your other foot (figure-four). The locked position should feel snug but not yet tight — the finish comes from adjusting the angle. Hip out toward the trapped arm side and pull your knee toward your chest while pulling their head down. These three actions together create the choking pressure on the carotid arteries.</p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-zinc-400">
              <li>One arm in, one arm out — shoulder of trapped arm must be inside</li>
              <li>Hip escape to the trapped arm side before locking the legs</li>
              <li>Pull knee to chest + pull head down + hip toward trapped arm = finish</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Cutting the Angle for the Finish</h2>
            <p>The most common reason triangles fail to finish is poor angle. You must be perpendicular to your opponent — if you are straight in front of them, the triangle is loose and ineffective. Use your arms to pull yourself sideways by grabbing their head and pulling toward the trapped arm. This cuts your body at 90 degrees, tightening the figure-four against their neck. Combined with squeezing your knees together and extending your hips, a properly angled triangle is virtually inescapable.</p>
          </section>
        </div>

        <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
          <h3 className="font-bold text-white mb-2">Related Techniques</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/bjj-armbar-from-guard" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Armbar from Guard</Link>
            <Link href="/bjj-triangle-from-mount" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Triangle from Mount</Link>
            <Link href="/bjj-omoplata-setup" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Omoplata Setup</Link>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-red-900/30 bg-red-950/20 p-8 text-center">
          <h2 className="text-2xl font-black">Master This Technique with AI Coaching</h2>
          <p className="mt-2 text-zinc-400">Get personalized drilling sequences from your AI BJJ coach.</p>
          <Link href="/auth/signup" className="mt-5 inline-block rounded-xl bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700">Start Free</Link>
        </div>
      </article>
    </div>
  );
}
