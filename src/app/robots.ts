import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/api/sitemap'],
      disallow: ['/api/', '/dashboard/'],
    },
    sitemap: 'https://aibjj.com/sitemap.xml',
  }
}
