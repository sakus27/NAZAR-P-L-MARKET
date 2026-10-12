import type { MetadataRoute } from "next";
import { CATEGORIES } from "@/data/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nazarpilicmarket.com"; // Default production domain placeholder

  const buildDate = new Date("2026-10-12");

  const categoryEntries = CATEGORIES.map((category) => ({
    url: `${baseUrl}/katalog?kategori=${category.slug}`,
    lastModified: buildDate,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: buildDate,
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/katalog`,
      lastModified: buildDate,
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    ...categoryEntries,
    {
      url: `${baseUrl}/sepet`,
      lastModified: buildDate,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
  ];
}
