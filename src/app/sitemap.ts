import { MetadataRoute } from "next";
import { destinations } from "@/config/destinations";
import { articlesData } from "@/config/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ekaarise.ae";
  const now = new Date();

  // Static P0 & P1 indexable routes
  const staticRoutes = [
    "",
    "/psychometric-test-dubai",
    "/psychometric-test-dubai/sample-report",
    "/career-counselling-dubai",
    "/subject-selection-counselling-dubai",
    "/study-abroad-consultants-dubai",
    "/study-abroad/undergraduate-admissions",
    "/study-abroad/masters-admissions",
    "/our-process",
    "/for-parents",
    "/about",
    "/book-psychometric-test",
    "/book-consultation",
    "/contact",
    "/pathway-explorer",
    "/faq",
    "/resources",
    "/privacy-policy",
    "/terms-and-conditions",
    "/refund-and-cancellation-policy",
    "/assessment-disclaimer",
  ];

  const destinationRoutes = Object.keys(destinations).map((d) => `/study-abroad/${d}`);
  const articleRoutes = Object.keys(articlesData).map((a) => `/resources/${a}`);

  const allRoutes = [...staticRoutes, ...destinationRoutes, ...articleRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.includes("psychometric") ? 0.9 : 0.8,
  }));
}
