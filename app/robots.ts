import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: '*', allow: '/' }, sitemap: 'https://kush4casino.vercel.app/sitemap.xml', host: 'https://kush4casino.vercel.app/' }
}
