import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ekaarise.ae";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/checkout-demo", "/thank-you", "/api/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
