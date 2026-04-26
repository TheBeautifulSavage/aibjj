import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "De La Riva Guard in Gi BJJ: Sweeps, Back Takes & Guard Retention | AIBJJ", description: "Complete guide to De La Riva guard in gi BJJ. Learn DLR sweeps, back takes, berimbolo entries, and how to defend DLR as a passer." };
export default function Page() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "De La Riva Guard in Gi BJJ: Sweeps, Back Takes & Guard Retention", "publisher": { "@type": "Organization", "name": "AIBJJ", "url": "https://aibjj.com" } }) }} />
<article className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-black">De La Riva Guard in Gi BJJ: Sweeps, Back Takes & Guard Retention</h1>
        <p className="mt-4 text-xl text-zinc-400">De La Riva guard revolutionized modern BJJ. Named after Ricardo De La Riva, this outside hook guard position disrupts standing passers and opens sweeps and back takes that work at the highest levels of competition.</p>
        <div className="mt-10 space-y-8 text-zinc-300">
          <section><h2 className="text-2xl font-bold text-white mb-3">De La Riva Guard Fundamentals and Position</h2><p>The De La Riva hook is established when your outside leg hooks around the opponent's lead leg from the outside, with your foot pointing inward behind their knee. Your inside foot pushes against their hip or biceps for frames. The key grips in gi: far sleeve grip and same-side collar grip, or far ankle and collar. This position excels against standing passers because your hook connects you to their movement — when they step, you move with them. The DLR hook prevents the opponent from posting their hooked leg freely, disrupting their base. From this position you can sweep them forward (tripod-style), backward over your head, or use rotation to take their back. Modern gi competition is heavily influenced by DLR systems — understanding the guard from both top and bottom is essential for anyone competing in gi events.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Core De La Riva Sweeps</h2><p>The DLR overhead sweep pushes the opponent's hip forward while your hook prevents them from stepping — they go directly over your head. The technical standup sweep uses your inside leg to push the hip while you sit up and take a knee, coming up underneath them. The single-leg sweep from DLR works when they post their free leg wide: come up on your elbow, establish an outside single leg, and drive through. In gi, the collar grip during sweeps gives extra pulling force that accelerates all these actions. When opponents post aggressively to defend, transition to the technical standup and pursue them. The DLR system is designed as a chain: every defensive reaction opens a different sweep. Train the transitions between these sweeps until they become intuitive, because opponents at higher levels will constantly shift weight to counter individual techniques.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Berimbolo and Back Takes from De La Riva</h2><p>The berimbolo is the most complex evolution of the De La Riva system — a spinning inversion that ends in back control. From DLR with collar or ankle control, pull the opponent's leg toward you and invert under them, spinning to face their back. The motion is a combination of pulling with your hook, inverting your hips, and using your free leg to push their hip as you rotate. It requires flexibility and timing but, once mastered, offers an almost unstoppable back take against opponents who are unfamiliar with the position. Even without completing the berimbolo, the threat of it creates defensive reactions that open simpler sweeps. In gi, the sleeve and collar grips during the berimbolo entry make it significantly more reliable than no-gi versions. Study Caio Terra, Gui Mendes, and Mikey Musumeci for world-class DLR and berimbolo instruction.</p></section>
        </div>
        <div className="mt-12 rounded-2xl border border-red-900/30 bg-red-950/20 p-8 text-center">
          <h2 className="text-2xl font-black">Level Up Your BJJ</h2>
          <p className="mt-2 text-zinc-400">AI coaching, technique library, training journal — all in one place.</p>
          <Link href="/auth/signup" className="mt-5 inline-block rounded-xl bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700">Start Free</Link>
        </div>
      </article>
    </div>
  );
}
