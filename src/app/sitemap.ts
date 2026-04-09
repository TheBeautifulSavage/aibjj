import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://aibjj.com'
  const now = new Date()

  return [
    // Core pages
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/pricing`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/academies`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/affiliates`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/instructor-marketplace`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/sell-bjj-instructionals`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-instructor-platform`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/api-docs`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/auth/signin`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/auth/signup`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },

    // Core feature pages
    { url: `${base}/bjj-techniques`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/bjj-training-journal`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-game-plan`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-game-plan-strategy`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-instructionals`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-ai-coach`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/bjj-online-coaching`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-online-training`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-self-study`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/bjj-study-guide`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/bjj-private-lessons`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

    // Guard Techniques
    { url: `${base}/bjj-guard`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-closed-guard`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-half-guard`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-open-guard`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-rubber-guard`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/bjj-x-guard`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/bjj-berimbolo`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/bjj-guard-passing`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-sweeps`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Submissions
    { url: `${base}/bjj-armbar`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-triangle-choke`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-rear-naked-choke`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-guillotine`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-heel-hook`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-kimura`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-omoplata`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/bjj-chokes`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-leg-locks`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-escapes`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/bjj-takedowns`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Positions
    { url: `${base}/bjj-mount`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-side-control`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-back-control`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-turtle-position`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Beginner/Belt Content
    { url: `${base}/bjj-for-beginners`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/bjj-white-belt`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-blue-belt`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-purple-belt`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-brown-belt`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/bjj-black-belt`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/bjj-belt-system`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

    // Training & Fitness
    { url: `${base}/bjj-training-tips`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-conditioning`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/bjj-warm-up`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/bjj-drilling`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/bjj-sparring`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/bjj-recovery`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/bjj-injury-prevention`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/bjj-diet`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/bjj-weight-cutting`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/bjj-home-training`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/bjj-for-big-guys`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/bjj-for-small-guys`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/bjj-for-women`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Competition & Stats
    { url: `${base}/bjj-competition`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-competition-tips`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/ibjjf-rules`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/ibjjf-statistics`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/adcc-statistics`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/bjj-submission-statistics`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/bjj-heel-hook-statistics`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/bjj-meta`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },

    // No-Gi & Cross-Training
    { url: `${base}/no-gi-bjj`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-for-mma`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/bjj-vs-wrestling`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/bjj-vs-judo`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/bjj-vs-muay-thai`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Instructional Comparisons
    { url: `${base}/bjj-instructionals-for-beginners`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-instructionals-guard`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/bjj-instructionals-leg-locks`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/bjj-instructionals-passing`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/best-bjj-instructionals`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-fanatics-alternative`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/grapplers-guide-alternative`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/aibjj-vs-bjj-fanatics`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/aibjj-vs-flograppling`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Lifestyle/Culture
    { url: `${base}/bjj-lifestyle`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/bjj-mental-game`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Local/Geo pages
    { url: `${base}/bjj-academy-near-me`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bjj-new-york`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/bjj-los-angeles`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/bjj-miami`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/bjj-dallas`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/bjj-houston`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/bjj-chicago`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/bjj-denver`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/bjj-austin`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/bjj-phoenix`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/bjj-seattle`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ]
}
