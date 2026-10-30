import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PreviewBanner } from "@/components/layout/PreviewBanner";
import { MobileBottomCTA } from "@/components/layout/MobileBottomCTA";
import { MotionScrollRail } from "@/components/layout/MotionScrollRail";
import { siteConfig } from "@/config/site";
import { generateOrganizationSchema, generateServiceSchema, constructMetadata } from "@/lib/seo";

export const viewport: Viewport = {
  themeColor: "#102A3B",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = constructMetadata({
  title: "EKAA Rise Dubai | Psychometric Test & Study Abroad Guidance",
  description: siteConfig.description,
  canonicalPath: "/",
  keywords: [
    "psychometric test in Dubai",
    "career counselling Dubai students",
    "study abroad consultants in Dubai",
    "subject selection counselling Dubai",
    "EKAA Rise Dubai",
    "AED 100 psychometric assessment",
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = generateOrganizationSchema();
  const serviceSchema = generateServiceSchema();

  return (
    <html lang="en-AE" className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/ekaa/ekaa-rise-official.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-ivory text-ink antialiased selection:bg-teal selection:text-white">
        <MotionScrollRail />
        <PreviewBanner />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <MobileBottomCTA />
        <SiteFooter />
      </body>
    </html>
  );
}
