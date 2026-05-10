import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://softgrama.com'
  const today = new Date()

  return [
    {
      url: `${baseUrl}/`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/audit`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ]
}
