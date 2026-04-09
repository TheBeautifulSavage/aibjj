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
    // Existing SEO landing pages
    { url: `${base}/bjj-techniques`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-training-journal`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-game-plan`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-instructionals`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-ai-coach`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    // Guard Techniques
    { url: `${base}/bjj-guard`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-closed-guard`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-half-guard`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-open-guard`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-rubber-guard`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    // Submissions
    { url: `${base}/bjj-armbar`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-triangle-choke`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-rear-naked-choke`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-guillotine`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-heel-hook`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-kimura`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-omoplata`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    // Positions
    { url: `${base}/bjj-mount`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-side-control`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-back-control`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-turtle-position`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    // Beginner/Belt Content
    { url: `${base}/bjj-for-beginners`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/bjj-white-belt`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-blue-belt`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-belt-system`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    // Training & Fitness
    { url: `${base}/bjj-training-tips`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-conditioning`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/bjj-warm-up`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/bjj-drilling`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/bjj-sparring`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    // Competition
    { url: `${base}/bjj-competition`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-competition-tips`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/ibjjf-rules`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    // No-Gi & MMA
    { url: `${base}/no-gi-bjj`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-for-mma`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    // Lifestyle/Culture
    { url: `${base}/bjj-lifestyle`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/bjj-mental-game`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ]
}
