import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/dashboard/'],
      allow: ['/api/sitemap'],
    },
    sitemap: 'https://aibjj.com/sitemap.xml',
  }
}
