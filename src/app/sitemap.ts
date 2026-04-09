import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://aibjj.com'
  const now = new Date()

  return [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/pricing`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/academies`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/affiliates`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/auth/signin`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/auth/signup`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    // SEO landing pages
    { url: `${base}/bjj-techniques`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-training-journal`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-game-plan`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-instructionals`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-ai-coach`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ]
}
