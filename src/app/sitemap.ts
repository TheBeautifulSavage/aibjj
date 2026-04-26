import { MetadataRoute } from "next"
import { supabase } from "@/lib/supabase"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://aibjj.com"
  const now = new Date()

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/academies`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${base}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/bjj`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/bjj-techniques`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/brazilian-jiu-jitsu`, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/instructor-marketplace`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/adcc-statistics`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/affiliates`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/ai-bjj-coach`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/aibjj-vs-bjj-fanatics`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/aibjj-vs-flograppling`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/best-bjj-gi`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/best-bjj-instructionals`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/best-bjj-rash-guard`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/bjj-academy-near-me`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/bjj-for-beginners`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/bjj-gi-vs-no-gi`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/bjj-belt-system`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/bjj-competition`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/bjj-guard-passing`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/bjj-leg-locks`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/bjj-takedowns`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/bjj-armbar`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/bjj-rear-naked-choke`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/bjj-triangle-choke`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/bjj-kimura`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/bjj-half-guard`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/bjj-closed-guard`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/bjj-mount`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/bjj-side-control`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/bjj-back-control`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/no-gi-bjj`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/ibjjf-rules`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/sell-bjj-instructionals`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/grapplers-guide-alternative`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/how-to-get-better-at-bjj-faster`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/how-to-train-bjj-at-home`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
  ]

  // BJJ athlete/wiki pages
  const wikiSlugs = [
    "gordon-ryan", "marcelo-garcia", "roger-gracie", "john-danaher", "helio-gracie",
    "rickson-gracie", "royce-gracie", "royler-gracie", "renzo-gracie", "craig-jones",
    "mikey-musumeci", "keenan-cornelius", "buchecha", "leandro-lo", "lucas-lepri",
    "andre-galvao", "bernardo-faria", "garry-tonon", "gabi-garcia", "mackenzie-dern",
    "ffion-davies", "beatriz-mesquita", "carlos-gracie-sr", "nicholas-meregali",
    "tainan-dalpra", "romulo-barral", "xande-ribeiro",
    "adcc", "adcc-2019", "ibjjf-world-championship", "vale-tudo-history",
    "alliance-bjj-history", "bjj-gracie-barra-history", "bjj-ufc-history",
    "bjj-in-australia", "bjj-in-europe", "bjj-olympics-future", "mitsuyo-maeda-story", "tags",
  ]
  const wikiPages: MetadataRoute.Sitemap = wikiSlugs.map(slug => ({
    url: `${base}/bjj/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  // Fetch ALL academy slugs from Supabase
  let academyPages: MetadataRoute.Sitemap = []
  try {
    // Supabase limits to 1000 per query, paginate
    let allSlugs: string[] = []
    let offset = 0
    const batchSize = 1000
    while (true) {
      const { data, error } = await supabase
        .from("Academy")
        .select("slug")
        .range(offset, offset + batchSize - 1)
        .order("id")
      if (error || !data || data.length === 0) break
      allSlugs.push(...data.map((a: { slug: string }) => a.slug))
      if (data.length < batchSize) break
      offset += batchSize
    }
    academyPages = allSlugs.map(slug => ({
      url: `${base}/academies/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  } catch (e) {
    // If Supabase fails, return sitemap without academies
    console.error("Sitemap: Failed to fetch academies", e)
  }

  return [...staticPages, ...wikiPages, ...academyPages]
}
