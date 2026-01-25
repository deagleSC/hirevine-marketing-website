import { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hirevine.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = [
    {
      path: "",
      priority: 1.0,
      changeFrequency: "weekly" as const,
      lastModified: now,
    },
    {
      path: "/about",
      priority: 0.8,
      changeFrequency: "monthly" as const,
      lastModified: now,
    },
    {
      path: "/privacy",
      priority: 0.3,
      changeFrequency: "yearly" as const,
      lastModified: new Date("2025-01-25"),
    },
    {
      path: "/terms",
      priority: 0.3,
      changeFrequency: "yearly" as const,
      lastModified: new Date("2025-01-25"),
    },
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
