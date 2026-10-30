import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ekaarise.ae";

export interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
}

export function constructMetadata({
  title,
  description,
  canonicalPath = "",
  keywords = [],
  ogImage = "/images/ekaa/hero-homepage.webp",
  noIndex = false,
}: SEOProps): Metadata {
  const fullUrl = `${siteUrl}${canonicalPath}`;
  const cleanTitle = title.includes("EKAA Rise") ? title : `${title} | EKAA Rise`;

  return {
    title: cleanTitle,
    description,
    keywords: [
      "EKAA Rise Dubai",
      "psychometric test in Dubai",
      "career counselling Dubai students",
      "study abroad consultants in Dubai",
      "subject selection counselling Dubai",
      ...keywords,
    ],
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: fullUrl,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: {
      title: cleanTitle,
      description,
      url: fullUrl,
      siteName: siteConfig.name,
      locale: "en_AE",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — ${description.slice(0, 80)}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: cleanTitle,
      description,
      images: [ogImage],
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}

export function generateServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/#service-psychometric`,
    name: "EKAA Rise Psychometric Test for Students",
    serviceType: "Educational Guidance & Assessment",
    description: "Structured psychometric assessment and student guidance in Dubai; final assessment scope confirmed before booking.",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteUrl,
      areaServed: {
        "@type": "Place",
        name: "Dubai, United Arab Emirates",
      },
    },
    areaServed: {
      "@type": "Place",
      name: "Dubai, United Arab Emirates",
    },
    offers: {
      "@type": "Offer",
      price: siteConfig.primaryPrice.amount.toString(),
      priceCurrency: siteConfig.primaryPrice.currency,
      availability: "https://schema.org/InStock",
      url: `${siteUrl}/book-psychometric-test`,
    },
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${siteUrl}/#organization`,
    name: siteConfig.name,
    url: siteUrl,
    logo: `${siteUrl}/images/ekaa/ekaa-rise-official.png`,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
  };
}
