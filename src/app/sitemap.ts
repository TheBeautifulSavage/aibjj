import { MetadataRoute } from "next"
import { supabase } from "@/lib/supabase"

export const revalidate = 86400 // Rebuild sitemap daily

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://aibjj.com"
  const now = new Date()

  // Static content pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/academies`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${base}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/bjj`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/bjj-techniques`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/brazilian-jiu-jitsu`, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/instructor-marketplace`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
  ]

  // All technique pages
  const techniqueSlugs = [
    "bjj-armbar","bjj-rear-naked-choke","bjj-triangle-choke","bjj-kimura","bjj-guard-passing",
    "bjj-half-guard","bjj-closed-guard","bjj-mount","bjj-side-control","bjj-back-control",
    "bjj-leg-locks","bjj-takedowns","bjj-sweeps","bjj-escapes","bjj-chokes",
    "bjj-guillotine","bjj-omoplata","bjj-darce-choke","bjj-bow-and-arrow-choke",
    "bjj-north-south-choke","bjj-heel-hook","bjj-kneebar","bjj-toe-hold",
    "bjj-knee-slice-pass","bjj-smash-pass","bjj-bullfighter-pass","bjj-over-under-pass",
    "bjj-double-leg-takedown","bjj-single-leg-takedown","bjj-butterfly-guard",
    "bjj-de-la-riva-guard","bjj-spider-guard","bjj-lasso-guard","bjj-x-guard",
    "bjj-deep-half-guard","bjj-rubber-guard","bjj-worm-guard","bjj-lapel-guard",
    "bjj-open-guard","bjj-hip-bump-sweep","bjj-scissor-sweep","bjj-flower-sweep",
    "bjj-berimbolo","bjj-mount-escapes","bjj-side-control-escapes","bjj-back-control-escapes",
    "bjj-guard-retention","bjj-guard-recovery","bjj-shrimping","bjj-bridge-and-roll",
    "bjj-for-beginners","bjj-for-kids","bjj-for-women","bjj-for-military",
    "bjj-for-law-enforcement","bjj-for-older-adults","bjj-for-mma","bjj-self-defense",
    "bjj-gi-vs-no-gi","bjj-belt-system","bjj-competition","bjj-competition-prep",
    "bjj-strength-training","bjj-conditioning","bjj-injury-prevention","bjj-nutrition-for-bjj",
    "bjj-diet","bjj-mental-game","bjj-drilling","bjj-sparring","bjj-home-training",
    "bjj-private-lessons","bjj-online-training","bjj-instructionals",
    "no-gi-bjj","ibjjf-rules","bjj-white-belt","bjj-blue-belt","bjj-purple-belt",
    "bjj-brown-belt","bjj-black-belt",
    "bjj-50-50-guard","bjj-body-lock-pass","bjj-crab-ride","bjj-leg-entanglement",
    "bjj-gordon-ryan-style","bjj-marcelo-garcia-style","bjj-roger-gracie-style",
    "bjj-game-plan","bjj-game-plan-builder","bjj-training-journal","bjj-training-app",
    "bjj-progress-tracker","bjj-technique-tracker","bjj-journal-app","bjj-ai-coach",
    "ai-bjj-coach","bjj-instructor-platform","bjj-fanatics-alternative",
    "sell-bjj-instructionals","switch-from-bjj-fanatics","grapplers-guide-alternative",
    "aibjj-vs-bjj-fanatics","aibjj-vs-flograppling",
    "best-bjj-gi","best-bjj-instructionals","best-bjj-rash-guard","bjj-gear-complete-list",
    "bjj-ear-guards","bjj-mouthguard-guide","bjj-how-to-tie-belt",
    "how-to-get-better-at-bjj-faster","how-to-train-bjj-at-home",
    "how-to-escape-rear-naked-choke","how-to-improve-guard-retention",
    "how-to-pass-butterfly-guard","how-to-submit-bigger-opponents-bjj",
    "how-long-to-get-bjj-blue-belt","how-long-to-purple-belt-bjj",
    "is-bjj-effective-in-street-fight","what-does-bjj-stand-for",
    "what-belt-do-you-need-for-adcc-trials",
    "bjj-vs-wrestling","bjj-vs-judo","bjj-vs-muay-thai","bjj-vs-sambo",
    "bjj-vs-karate-which-better","bjj-vs-wrestling-which-is-better",
    "bjj-grappling-vs-bjj","bjj-in-mma",
    "adcc-statistics","ibjjf-statistics","bjj-submission-statistics","bjj-heel-hook-statistics",
  ]
  const techniquePages: MetadataRoute.Sitemap = techniqueSlugs.map(s => ({
    url: `${base}/${s}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7,
  }))

  // City pages
  const citySlugs = [
    "bjj-austin","bjj-chicago","bjj-dallas","bjj-denver","bjj-houston",
    "bjj-los-angeles","bjj-miami","bjj-new-york","bjj-phoenix","bjj-seattle",
    "bjj-san-diego","bjj-san-jose","bjj-san-francisco","bjj-portland","bjj-las-vegas",
    "bjj-atlanta","bjj-orlando","bjj-tampa","bjj-jacksonville","bjj-charlotte",
    "bjj-raleigh","bjj-nashville","bjj-minneapolis","bjj-detroit","bjj-columbus",
    "bjj-indianapolis","bjj-kansas-city","bjj-sacramento","bjj-salt-lake-city",
    "bjj-pittsburgh","bjj-philadelphia","bjj-boston","bjj-washington-dc","bjj-baltimore",
    "bjj-st-louis","bjj-milwaukee","bjj-albuquerque","bjj-tucson","bjj-honolulu",
    "bjj-anchorage","bjj-richmond","bjj-colorado-springs","bjj-san-antonio",
    "bjj-fort-worth","bjj-el-paso",
    "bjj-london","bjj-toronto","bjj-sydney","bjj-melbourne","bjj-sao-paulo",
    "bjj-rio-de-janeiro","bjj-dubai","bjj-tokyo","bjj-singapore",
  ]
  const cityPages: MetadataRoute.Sitemap = citySlugs.map(s => ({
    url: `${base}/${s}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8,
  }))

  // BJJ Wiki / athlete pages
  const wikiSlugs = [
    "gordon-ryan","marcelo-garcia","roger-gracie","john-danaher","helio-gracie",
    "rickson-gracie","royce-gracie","royler-gracie","renzo-gracie","craig-jones",
    "mikey-musumeci","keenan-cornelius","buchecha","leandro-lo","lucas-lepri",
    "andre-galvao","bernardo-faria","garry-tonon","gabi-garcia","mackenzie-dern",
    "ffion-davies","beatriz-mesquita","carlos-gracie-sr","nicholas-meregali",
    "tainan-dalpra","romulo-barral","xande-ribeiro",
    "adcc","adcc-2019","ibjjf-world-championship","vale-tudo-history",
    "alliance-bjj-history","bjj-gracie-barra-history","bjj-ufc-history",
    "bjj-in-australia","bjj-in-europe","bjj-olympics-future","mitsuyo-maeda-story","tags",
  ]
  const wikiPages: MetadataRoute.Sitemap = wikiSlugs.map(s => ({
    url: `${base}/bjj/${s}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8,
  }))

  // Academy pages from Supabase
  let academyPages: MetadataRoute.Sitemap = []
  try {
    let allSlugs: string[] = []
    let offset = 0
    const batch = 1000
    while (true) {
      const { data, error } = await supabase
        .from("Academy")
        .select("slug")
        .range(offset, offset + batch - 1)
        .order("id")
      if (error || !data || data.length === 0) break
      allSlugs.push(...data.map((a: { slug: string }) => a.slug))
      if (data.length < batch) break
      offset += batch
    }
    academyPages = allSlugs.map(slug => ({
      url: `${base}/academies/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
    console.log(`Sitemap: loaded ${allSlugs.length} academy slugs`)
  } catch (e) {
    console.error("Sitemap: academy fetch failed", e)
  }

  const pages = [...staticPages, ...techniquePages, ...cityPages, ...wikiPages, ...academyPages]
  console.log(`Sitemap: ${pages.length} total URLs`)
  return pages
}
