import { MetadataRoute } from 'next'; 

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.letter-or-number.com/fr',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://www.letter-or-number.com/en',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://acme.https://www.letter-or-number.com/en/o-or-0/about',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: 'https://acme.https://www.letter-or-number.com/fr/o-or-0/about',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: 'https://www.letter-or-number.com/en/i-or-l',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: 'https://www.letter-or-number.com/fr/i-or-l',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ]
}