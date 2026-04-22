import { MetadataRoute } from 'next'

const baseUrl = 'https://www.saikattanti.dev'
const stableLastModified = '2026-03-15T00:00:00.000Z'

const routes: Array<{
  path: string
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  priority: number
}> = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/saikat-tanti', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/payment', changeFrequency: 'monthly', priority: 0.8 },
  {
    path: '/policies/privacy-policy',
    changeFrequency: 'yearly',
    priority: 0.6,
  },
  {
    path: '/policies/terms-conditions',
    changeFrequency: 'yearly',
    priority: 0.6,
  },
  {
    path: '/policies/cancellation-refunds',
    changeFrequency: 'yearly',
    priority: 0.6,
  },
  {
    path: '/policies/shipping-policy',
    changeFrequency: 'yearly',
    priority: 0.6,
  },
]
 
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route.path === '/' ? '' : route.path}`,
    lastModified: stableLastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
