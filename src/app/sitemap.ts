import { MetadataRoute } from "next";

const baseUrl = "https://www.saikattanti.dev";

const routes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/saikat-tanti", changeFrequency: "weekly", priority: 0.9 },
  { path: "/payment", changeFrequency: "yearly", priority: 0.3 },
  {
    path: "/policies/privacy-policy",
    changeFrequency: "yearly",
    priority: 0.2,
  },
  {
    path: "/policies/terms-conditions",
    changeFrequency: "yearly",
    priority: 0.2,
  },
  {
    path: "/policies/cancellation-refunds",
    changeFrequency: "yearly",
    priority: 0.2,
  },
  {
    path: "/policies/shipping-policy",
    changeFrequency: "yearly",
    priority: 0.2,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route.path === "/" ? "" : route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
