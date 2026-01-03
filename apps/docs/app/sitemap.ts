import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kookieblocks.com";

  return [
    { url: baseUrl, lastModified: new Date(), priority: 1.0 },
    { url: `${baseUrl}/docs`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/docs/blocks`, lastModified: new Date(), priority: 0.8 },
  ];
}
