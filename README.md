# EKAA Rise — Premium Dubai Education & Psychometric Advisory Website

> **Discover Your Strengths. Design Your Future.**  
> Built for students (Grades 8–12), parents, and university applicants in Dubai, UAE across IB, British, American, and CBSE curricula.

---

## 1. Project Overview & Commercial Core

EKAA Rise is an education guidance and study-abroad advisory platform based in Dubai, United Arab Emirates. The platform is architected around a clear conversion hierarchy:
1. **Commercial Entry Offer:** **EKAA Rise Psychometric Test — AED 100** (anchored across homepage, primary service pages, booking wizards, and schema).
2. **Subject Selection & Career Guidance:** Strategic subject-choice planning for Dubai curricula (IB Diploma, A Levels, AP, CBSE) to satisfy international university prerequisites.
3. **Study Abroad Admissions Advisory:** Comprehensive undergraduate and postgraduate planning across 6 primary destinations: United Kingdom, United States, Canada, Australia, Germany, and Ireland.

---

## 2. Technical Stack & Architecture

- **Framework:** Next.js 14 (App Router) + TypeScript (Strict Mode)
- **Styling & Design System:** Tailwind CSS with custom brand tokens:
  - Deep Navy (`#102A3B`) & Primary Ink (`#142D3E`)
  - Accent Sea Teal (`#227F95`) & Soft Aqua (`#E6F3F5`)
  - Warm Ivory Body (`#F8FAF9`) & Champagne Accents (`#C3A375`)
- **Typography:** Display (`Manrope`), Body (`DM Sans`), Editorial Italic (`Playfair Display`)
- **Icons:** Lucide React
- **Rendering Model:** 100% SSG / Server-Side Rendered for complete SEO crawlability (34 static pages pre-rendered).

---

## 3. Directory Layout

```text
src/
  app/
    (marketing routes)
      page.tsx                                    # Homepage (P0)
      psychometric-test-dubai/page.tsx            # Psychometric Money Page (P0)
      psychometric-test-dubai/sample-report/page.tsx # Interactive Mock Report (P0)
      career-counselling-dubai/page.tsx           # Career Guidance (P0)
      subject-selection-counselling-dubai/page.tsx # Curriculum Strategy (P0)
      study-abroad-consultants-dubai/page.tsx     # Study Abroad Admissions Hub (P0)
      study-abroad/undergraduate-admissions/page.tsx # UG Planning (P0)
      study-abroad/masters-admissions/page.tsx    # Master's Planning (P0)
      study-abroad/[country]/page.tsx             # 6 Country Destination Portals (P0)
      our-process/page.tsx                        # 5-Stage Methodology (P0)
      for-parents/page.tsx                        # Guidance for Dubai Parents (P0)
      about/page.tsx                              # Advisory Philosophy (P0)
      book-psychometric-test/page.tsx             # 3-Stage Booking Wizard (P0)
      book-consultation/page.tsx                  # Advisory Consultation Form (P0)
      contact/page.tsx                            # Contact & Dubai Operations (P0)
      pathway-explorer/page.tsx                   # 4-Step Intake Tool (P1)
      faq/page.tsx                                # Categorized FAQ Directory (P1)
      resources/page.tsx                          # Editorial Hub (P1)
      resources/[slug]/page.tsx                   # 4 Editorial Guides (P1)
    (legal drafts)
      privacy-policy/page.tsx                     # Draft Privacy Policy (P1)
      terms-and-conditions/page.tsx               # Draft Commercial Terms (P1)
      refund-and-cancellation-policy/page.tsx     # Draft Cancellation Terms (P1)
      assessment-disclaimer/page.tsx              # Ethical Boundaries (P1)
    thank-you/page.tsx                            # Protected Conversion Landing
    not-found.tsx                                 # Brand 404 Recovery
    sitemap.ts                                    # XML Sitemap (34 URLs)
    robots.ts                                     # Crawl & Indexing Rules
  components/
    layout/         # SiteHeader, SiteFooter, PreviewBanner, MobileBottomCTA, Breadcrumbs
    hero/           # PageHero with responsive splits
    cards/          # PriceCard (AED 100), DestinationCard, ArticleCard, CurriculumTabs
    report/         # PsychometricOrbit (SVG), MockReportInteractive
    journey/        # JourneyTimeline (5-stage vertical flow)
    explorer/       # PathwayExplorerWidget (Intake orientation)
    forms/          # BookingWizard, ConsultationForm, ContactForm
    ui/             # Logo (Option A & B toggle), FAQAccordion
  config/
    site.ts         # Central typed brand constants, contact & feature flags
    navigation.ts   # Navigation link hierarchy
    destinations.ts # Detailed data for UK, US, CA, AU, DE, IE
    curricula.ts    # IB, British, American, CBSE prerequisites
    articles.ts     # 4 full-length research guides
    faq.ts          # Comprehensive Q&A repository
  lib/
    seo.ts          # Metadata constructor & JSON-LD schema generators
```

---

## 4. Getting Started & Running Locally

### Prerequisites
- Node.js >= 18.17 (Node.js 22.12 recommended)
- npm >= 9.0

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the live preview.

### Production Build & Static Generation
```bash
npm run build
npm start
```

### Route Smoke Test Suite
```bash
node tests/route-smoke-test.mjs
```
Executes automated HTTP checks verifying status 200 across all 34 indexable routes.

---

## 5. Key Documentation Files for Reviewers

- **`CLIENT_REVIEW_CHECKLIST.md`**: Complete URL directory and evaluation steps for client sign-off.
- **`APPROVALS_NEEDED.md`**: Register of open business, operational, and vendor decisions (e.g. VAT treatment, vendor tool selection, legal review).
- **`ASSET_MANIFEST.md`**: Provenance, license, and visual descriptions for all photography and SVG diagrams.
- **`SEO_IMPLEMENTATION_REPORT.md`**: Technical SEO audit, canonical URLs, JSON-LD schemas, and keyword-intent mappings.
- **`QA_REPORT.md`**: Responsive audit across 320px, 390px, 768px, and 1440px viewports with WCAG accessibility verification.
