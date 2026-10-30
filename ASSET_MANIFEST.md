# EKAA RISE — ASSET MANIFEST & PROVENANCE RECORD
**Version:** 1.0  
**Date:** 29 October 2026  
**Project:** EKAA Rise (Dubai, UAE)  

---

## 1. Brand Marks & Identity Assets

| Asset File | Display Context | Source / Provenance | Status | Approval Required |
|---|---|---|---|---|
| `public/images/ekaa/logo-original.png` | Global header, footer, favicon | Client-supplied official logo artwork | High-res PNG | Final lockup variant sign-off (Option A vs Option B) |
| `Option A (Heritage Retained)` | SiteHeader toggle | Cleaned original logo with educational icons & typography | Implemented | Select Option A |
| `Option B (Modern Monogram)` | SiteHeader toggle | Minimal luxury monogram wordmark ("EKAA RISE") | Implemented | Select Option B |

---

## 2. Editorial Photography (Photorealistic Sourced / Generated)

| Asset File | Dimensions & Ratio | Page & Usage | Concept & Description | License & Attribution |
|---|---|---|---|---|
| `public/images/ekaa/hero-homepage.webp` | 16:9 widescreen | Homepage Hero (`/`) | Authentic, candid editorial scene of 16–18 year old multicultural student and parent actively consulting with advisor at minimal light-wood table in luminous studio with 48% negative space on left. | Generated original editorial asset (Subagent synthesis) · Disclosed for client review |
| `public/images/ekaa/hero-psychometric.webp` | 3:2 landscape | Psychometric Landing (`/psychometric-test-dubai`) | Focused 17-year-old student engaged with abstract self-reflection digital dashboard on laptop in Dubai study space with light oak and pale aqua accents. | Generated original editorial asset · Disclosed for client review |
| `public/images/ekaa/career-counselling.webp` | 3:2 landscape | Career Counselling (`/career-counselling-dubai`) & About (`/about`) | Authentic documentary-style 1-on-1 guidance discussion between experienced adult counsellor and high school student across oak table with genuine eye contact. | Generated original editorial asset · Disclosed for client review |
| `public/images/ekaa/hero-parents.webp` | 16:9 widescreen | For Parents (`/for-parents`) | Warm, authentic conversation between a mother and her late-teen son reviewing educational materials together on a sofa in a bright Dubai modern apartment. | Generated original editorial asset · Disclosed for client review |
| `public/images/ekaa/hero-study-abroad.webp` | 16:9 widescreen | Study Abroad Hub & UG/PG pages | Collegiate architectural library with limestone arches and high windows; student seated at oak table with laptop and notebook exploring universities. | Generated original editorial asset · Disclosed for client review |

---

## 3. Study Abroad Destination Photography

| Asset File | Country | Usage | Scene Description |
|---|---|---|---|
| `public/images/ekaa/destinations/uk.webp` | United Kingdom (`/study-abroad/uk`) | Destination hero & cards | Historic honey-stone British university college quad, manicured green lawns, students walking between arched cloisters under bright overcast skies. |
| `public/images/ekaa/destinations/usa.webp` | United States (`/study-abroad/usa`) | Destination hero & cards | Collegiate American campus quad with classical portico, clock tower, red-brick architecture, green lawn, autumn foliage, and students walking along diagonal paths. |
| `public/images/ekaa/destinations/canada.webp` | Canada (`/study-abroad/canada`) | Destination hero & cards | Contemporary Canadian university academic pavilion with limestone masonry, glass curtain walls, brilliant red maple trees, and students walking in crisp autumn daylight. |
| `public/images/ekaa/destinations/australia.webp` | Australia (`/study-abroad/australia`) | Destination hero & cards | Airy Australian university campus quad with contemporary sandstone, timber, and steel verandahs, bright blue sky, eucalyptus trees, and sunny courtyard. |
| `public/images/ekaa/destinations/germany.webp` | Germany (`/study-abroad/germany`) | Destination hero & cards | Contemporary German university research architecture with glass and engineered granite facades, wide stone pedestrian plaza, and students walking and cycling under soft European daylight. |
| `public/images/ekaa/destinations/ireland.webp` | Ireland (`/study-abroad/ireland`) | Destination hero & cards | Historic Irish granite university quad with clock tower, cobblestone paths, vibrant emerald lawn, and students in wool coats and scarves walking under soft overcast daylight. |

---

## 4. Editorial Resource & Article Covers

| Asset File | Article Slug | Visual Content |
|---|---|---|
| `public/images/ekaa/articles/psychometric-guide.webp` | `psychometric-tests-for-students-explained` | Reflective student with an open journal contemplating colorful aptitude and spectrum charts on a sunlit oak desk. |
| `public/images/ekaa/articles/subject-selection-guide.webp` | `choosing-subjects-after-grade-10-dubai` | Student and mother collaboratively reviewing curriculum course options, pathway sheets, and sticky notes at a bright desk. |
| `public/images/ekaa/articles/curriculum-comparison.webp` | `ib-vs-a-levels-university-admissions` | High-fidelity collegiate academic courtyard setting reflecting British and European study environments. |
| `public/images/ekaa/articles/timeline-guide.webp` | `study-abroad-application-timeline-dubai` | Architectural university exploration and planning setting. |

---

## 5. Non-Photographic Bespoke Vector & UI Graphics

| Asset / Component | Location | Description |
|---|---|---|
| **Psychometric Discovery Orbit** | `src/components/report/PsychometricOrbit.tsx` | Bespoke 4-band SVG concentric orbit (Interests, Aptitudes, Context, Next Steps) with interactive selection and responsive mobile viewBox. |
| **Interactive Mock Assessment Report** | `src/components/report/MockReportInteractive.tsx` | SaaS-grade interactive HTML/SVG report navigator featuring Holland RIASEC categories, aptitude velocity benchmarks, pathway recommendations, and counselor questions with permanent watermark. |
| **Interactive Curriculum Tabs** | `src/components/cards/CurriculumTabs.tsx` | Interactive multi-curriculum comparison engine for IB Diploma, British A Levels, American AP, and CBSE streams. |
| **Pathway Explorer Widget** | `src/components/explorer/PathwayExplorerWidget.tsx` | 4-step interactive intake tool providing deterministic educational orientation. |

---

*All visual assets are stored locally in `public/images/ekaa/` with dual WebP / JPG formats and responsive Next.js Image handling.*
