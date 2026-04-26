import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET() {
  const base = "https://aibjj.com"
  const now = new Date().toISOString()

  const urls: { url: string; priority: string }[] = []

  // Static high-priority pages
  const topPages = [
    "", "/academies", "/blog", "/pricing", "/bjj", "/bjj-techniques",
    "/brazilian-jiu-jitsu", "/instructor-marketplace",
  ]
  topPages.forEach(p => urls.push({ url: `${base}${p}`, priority: p === "" || p === "/brazilian-jiu-jitsu" ? "1.0" : "0.9" }))

  // Technique pages
  const techniques = [
    "bjj-armbar","bjj-rear-naked-choke","bjj-triangle-choke","bjj-kimura","bjj-guard-passing",
    "bjj-half-guard","bjj-closed-guard","bjj-mount","bjj-side-control","bjj-back-control",
    "bjj-leg-locks","bjj-takedowns","bjj-sweeps","bjj-escapes","bjj-chokes",
    "bjj-guillotine","bjj-omoplata","bjj-darce-choke","bjj-heel-hook","bjj-kneebar",
    "bjj-knee-slice-pass","bjj-smash-pass","bjj-bullfighter-pass","bjj-over-under-pass",
    "bjj-double-leg-takedown","bjj-single-leg-takedown","bjj-butterfly-guard",
    "bjj-de-la-riva-guard","bjj-spider-guard","bjj-x-guard","bjj-deep-half-guard",
    "bjj-rubber-guard","bjj-worm-guard","bjj-open-guard","bjj-berimbolo",
    "bjj-mount-escapes","bjj-side-control-escapes","bjj-back-control-escapes",
    "bjj-guard-retention","bjj-for-beginners","bjj-for-kids","bjj-for-women",
    "bjj-for-military","bjj-for-mma","bjj-self-defense","bjj-gi-vs-no-gi",
    "bjj-belt-system","bjj-competition","bjj-strength-training","bjj-injury-prevention",
    "bjj-mental-game","bjj-drilling","bjj-sparring","bjj-home-training",
    "bjj-instructionals","no-gi-bjj","ibjjf-rules",
    "bjj-white-belt","bjj-blue-belt","bjj-purple-belt","bjj-brown-belt","bjj-black-belt",
    "bjj-50-50-guard","bjj-body-lock-pass","bjj-leg-entanglement",
    "bjj-game-plan","bjj-training-journal","bjj-ai-coach","ai-bjj-coach",
    "bjj-fanatics-alternative","sell-bjj-instructionals","aibjj-vs-bjj-fanatics",
    "best-bjj-gi","best-bjj-instructionals","how-to-get-better-at-bjj-faster",
    "how-to-train-bjj-at-home","bjj-vs-wrestling","bjj-vs-judo",
    "what-does-bjj-stand-for","bjj-academy-near-me",
  ]
  techniques.forEach(t => urls.push({ url: `${base}/${t}`, priority: "0.7" }))

  // City pages
  const cities = [
    "bjj-austin","bjj-chicago","bjj-dallas","bjj-denver","bjj-houston",
    "bjj-los-angeles","bjj-miami","bjj-new-york","bjj-phoenix","bjj-seattle",
    "bjj-san-diego","bjj-san-francisco","bjj-portland","bjj-las-vegas",
    "bjj-atlanta","bjj-orlando","bjj-tampa","bjj-charlotte","bjj-nashville",
    "bjj-boston","bjj-philadelphia","bjj-washington-dc","bjj-london","bjj-toronto",
    "bjj-sydney","bjj-melbourne","bjj-sao-paulo","bjj-rio-de-janeiro",
    "bjj-dubai","bjj-tokyo","bjj-singapore","bjj-anchorage","bjj-honolulu",
    "bjj-minneapolis","bjj-detroit","bjj-columbus","bjj-indianapolis",
    "bjj-salt-lake-city","bjj-pittsburgh","bjj-sacramento","bjj-san-antonio",
  ]
  cities.forEach(c => urls.push({ url: `${base}/${c}`, priority: "0.8" }))

  // Wiki pages
  const wiki = [
    "gordon-ryan","marcelo-garcia","roger-gracie","john-danaher","helio-gracie",
    "rickson-gracie","royce-gracie","craig-jones","mikey-musumeci","keenan-cornelius",
    "buchecha","leandro-lo","andre-galvao","gabi-garcia","mackenzie-dern",
    "adcc","ibjjf-world-championship","vale-tudo-history",
  ]
  wiki.forEach(w => urls.push({ url: `${base}/bjj/${w}`, priority: "0.8" }))

  // Academy pages from Supabase
  try {
    let offset = 0
    const batch = 1000
    while (true) {
      const { data, error } = await supabase
        .from("Academy")
        .select("slug")
        .range(offset, offset + batch - 1)
        .order("id")
      if (error || !data || data.length === 0) break
      data.forEach((a: { slug: string }) => urls.push({ url: `${base}/academies/${a.slug}`, priority: "0.6" }))
      if (data.length < batch) break
      offset += batch
    }
  } catch (e) {
    console.error("Sitemap API: academy fetch failed", e)
  }

  // Build XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `<url><loc>${u.url}</loc><lastmod>${now}</lastmod><priority>${u.priority}</priority></url>`).join("\n")}
</urlset>`

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
