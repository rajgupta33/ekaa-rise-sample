# EKAA Rise — Visual Redesign Report (Improvement 1)

**Prepared:** 30 October 2026  
**Scope:** Visual direction, imagery, homepage and inner-page heroes, navigation, motion, mobile experience, and production guidance. This is a redesign specification, not an implementation claim.

## 1. The design decision

Make EKAA feel like a **private, thoughtful education advisory studio in Dubai**: warm, confident, human, and editorial. The site should create the feeling of a clear path opening up for a student. The distinguishing visual motif is **the path**: one fine, continuous line that moves through the brand, illustrations, page transitions, and the five-step journey. Use it with restraint so the work feels commissioned rather than assembled from generic template parts.

The site currently communicates the services, but its visual rhythm is too uniform. A near-identical split `PageHero` is used on the homepage and most service pages; many subsequent sections repeat white, outlined, rounded cards; headings repeatedly mix Manrope and teal Playfair italic; small uppercase monospace labels and Lucide icons appear almost everywhere. The homepage has 12 major sections with similar spacing and density. The result has too few visual peaks or quiet moments.

The homepage photograph has good intent but is composed with roughly half the frame as empty window and the people pushed to the right. `PageHero` then crops that 16:9 source into a 4:3-ish container; the people lose presence. The existing logo artwork is visually busy at header size, and the live “Opt A / Opt B” switch reads like a review tool. The preview banner also takes space above the first impression. The desktop Study Abroad dropdown contains nine entries in a narrow panel. On mobile, the hero leads with a long institutional eyebrow, long headline, long paragraph, price pill, two actions, curriculum badges, then the image; the emotional hook arrives late.

**Keep:** the genuine service proposition, AED 100 test as an accessible entry offer, curriculum knowledge, interactive report, discovery orbit, and destination information. Redesign their presentation and hierarchy.

## 2. Creative concept and art direction

**Working concept:** “Find your direction.” The visual language combines real human moments with precise, almost architectural path graphics. It should feel closer to a premium editorial publication and boutique advisory practice than an education SaaS dashboard.

| Element | Direction | Avoid |
|---|---|---|
| Photography | Observational, candid, warm natural light; real students and advisers; believable Dubai interiors | Everyone smiling at camera; over-polished skin; hands pointing at blank laptops; generic graduation caps |
| Composition | Strong subject, intentional negative space, foreground/background depth | Tiny subjects at the edge of a wide frame; identical centered stock compositions |
| Graphic motif | Thin path line, compass arc, coordinate marks, purposeful diagrams | Floating blobs, sparkles, random orbital circles, decorative arrows everywhere |
| 3D | One hero-quality sculptural object or path model, material-led and subtle | Glossy AI spheres, chrome loops, constantly spinning objects, large WebGL payloads |
| Motion | Storytelling: a line finds a route, cards reveal steps, proof expands | Every section sliding up, looping bounce, autoplay motion competing with copy |
| Layout | Editorial asymmetry, varied scale, generous margins, a few full-bleed moments | Continuous card grids and identical section headers |

The brand mark should be resolved before polishing the header. Retain the client's official logo in formal contexts if required, but commission a simplified vector **EKAA Rise wordmark + monogram** for the site. It should reproduce cleanly at 24–32 px. Remove the visitor-facing logo option toggle when the direction is selected.

## 3. Colour system from scratch

The current cool ivory/teal treatment is coherent but evenly applied, making the site feel like a template. Move to a warmer paper base, a deep blue-black for authority, a richer teal used sparingly, and one clay/copper accent for human warmth. The hex values below are design targets; verify contrast in the implemented combinations.

| Token | Hex | Use |
|---|---:|---|
| Canvas / warm paper | `#F6F2EA` | Main light-page background, long reading sections |
| Clean surface | `#FFFCF7` | Forms, dropdowns, carefully selected content panels |
| Deep ink | `#172A32` | Headlines, primary text, dark hero |
| Midnight | `#10242B` | Full-bleed hero and closing CTA |
| Mineral teal | `#176C70` | Main action, selected states, path line |
| Sea glass | `#DCECE8` | Soft highlights, quiet panels, light diagram fill |
| Burnished copper | `#B87955` | Small editorial detail, numbering, path endpoint |
| Body slate | `#40545B` | Paragraphs and captions on light background |
| Hairline | `#D7DCD6` | Separators and quiet borders |
| On-dark white | `#F8F6F0` | Type on midnight |

**Distribution:** approximately 65% warm light surfaces, 20% deep ink/midnight, 10% photography, 5% teal/copper accents. Do not make every card teal or every italic word teal. Use a dark hero, then a warm paper section, then a clean photo-led section to create visible rhythm.

**Rules:** body text at least 16 px on desktop and mobile; avoid pale grey body copy; never place copper as small text on warm paper without contrast validation; use teal for meaningful controls and one selected phrase, not every decorative element. Keep surfaces mostly flat. Reserve shadows for floating menus and one or two feature objects; use hairline dividers elsewhere.

## 4. Typography and composition

Use **one editorial serif plus one modern sans**. Recommended: **Fraunces** for the expressive display phrase and **DM Sans** for navigation, body and UI. Fraunces has warmth and recognizable character; use its optical sizing and moderate weight. If a more restrained direction is preferred, use **Cormorant Garamond** for display with slightly larger sizes. Do not keep Manrope + DM Sans + Playfair + monospace labels as four competing voices.

| Role | Desktop | Mobile | Detail |
|---|---|---|---|
| Hero H1 | 68–84 px / 0.98–1.04 | 42–52 px / 1.02–1.08 | Sans first line, serif emphasis on one short phrase |
| Section H2 | 44–56 px / 1.06 | 34–40 px / 1.1 | At most one display phrase |
| H3 | 24–30 px | 22–25 px | Plain sans, medium/semibold |
| Body | 17–19 px / 1.55–1.7 | 16–17 px / 1.55 | Maximum 65–70 characters per line |
| Eyebrow | 11–12 px | 11 px | Sentence case or spaced uppercase, used selectively |
| Navigation | 14–15 px | 16–18 px | Clear labels, no tiny descriptions on mobile |

Set a content max width around 1320 px, a text column around 610 px, and responsive gutters of 20 / 32 / 48 px. Use an 8 px spacing base but allow larger editorial breaks: 96–136 px between major desktop sections and 64–88 px on mobile. Vary content alignments. The first three homepage sections should not all be centered or card-based.

## 5. Homepage hero: full redesign

### Message and hierarchy

The first viewport should answer: **Who is this for? What outcome can I get? What do I do next?** Show one person-centred promise, then support it with the assessment and advisory route. The test price is useful, but it should not dominate the brand's first sentence.

**Recommended copy:**

> For the student with more than one possible future.  
> **Find the path that fits you.**

Supporting line: “From subject choices to universities abroad, EKAA Rise helps Dubai students and families turn strengths into a clear, considered plan.”

Primary CTA: **Explore my next step** → `/pathway-explorer` (provided that tool is polished and mobile-ready). Secondary CTA: **See the AED 100 assessment** → `/psychometric-test-dubai`. A small tertiary text link can lead to `/study-abroad-consultants-dubai`. If booking the test remains the business priority, make **Book the AED 100 assessment** primary and keep the exploratory action secondary. Pick one conversion priority before implementation.

### Desktop layout (1440 px reference)

1. Header on a deep midnight or transparent-dark hero. Logo left; four concise nav groups centre; one high-contrast CTA right.
2. Hero height about 700–780 px including header. Left 47% contains a short eyebrow (“Student guidance, Dubai”), a two/three-line H1, 2-line supporting copy, CTAs, and one proof line. Right 53% is a commissioned editorial photograph featuring a student in an actual conversation. Photograph can bleed to the right edge, with the subject in the inner half so the face remains visible. Use a soft curved mask only if it follows the path motif.
3. A slender line begins beneath the headline, travels toward the image, and ends at a copper node near the student’s working materials. This is the signature SVG motion. It is subordinate to the face and copy.
4. Beneath the hero, a slim **“What can we help with?”** three-option band: “Understand strengths”, “Choose subjects”, “Plan university applications”. Each routes to a real page; each has one short sentence. This replaces the existing badges and begins the next section as a clear action.

**Do not:** reuse the current floating “Dubai Focus” card, put text inside generated photography, fill the empty side of the current image with another text overlay, or add invented results/testimonial numbers.

### Mobile hero (390 px reference)

Make the hook visible before the first scroll. Target this sequence inside the initial 700–760 px viewport:

1. Compact header (64–72 px): vector wordmark, menu button, and **one** small CTA if space permits.
2. A 40–60 px full-width editorial image strip or portrait crop **above or alongside** the headline, showing a recognisable student face. Prefer a dedicated 4:5 mobile image. Do not simply center-crop the desktop photograph.
3. Eyebrow: “For students choosing what comes next”.
4. H1: “More than one future? **Find yours.**” at roughly 46 px, 3–4 lines maximum. The question is the mobile hook.
5. One brief line of support (no curriculum acronym list).
6. Full-width primary CTA with arrow; compact secondary text link. Place the AED 100 detail in the secondary link or a quiet trust line.
7. Show the top of the next “three ways we help” band at the viewport edge to invite scrolling.

The current fixed `MobileBottomCTA` should appear **after** the hero leaves view, not cover the hero’s own buttons. Keep enough bottom safe area. The header CTA and bottom CTA must not compete with different actions. Test at 320, 375, 390, 430, and 768 px.

## 6. Inner-page heroes should have different jobs

Do not use one `PageHero` composition everywhere. Create 4–5 hero patterns with shared tokens, then assign by page intent.

| Page group | Hero treatment | Hook / visual |
|---|---|---|
| Psychometric test | Deep ink background, close-up student portrait on right, oversized report excerpt layered in foreground | “Know your strengths before you choose your direction.” Price immediately below the first CTA, not in the H1 |
| Career / subject selection | Warm paper, real adviser-and-student conversation or annotated curriculum spread | Bespoke “decision map” graphic reveals routes from subjects to degrees |
| Study abroad hub | Full-width cinematic campus image with dark ink panel carrying the message | “The right university starts with the right fit.” Distinct destination selector below |
| Country pages | Country-specific full-bleed photograph, typographic country title, concise Dubai applicant context | One authentic place cue per destination; avoid six near-identical campus cards above fold |
| For parents | Warm, intimate family portrait with text on a clean light surface | “Help them decide with confidence, together.” Avoid fear-based language |
| About / process | Portraits of real team members if available; otherwise a tactile process editorial graphic | Human proof of expertise, followed by five-step path diagram |
| Booking / forms | Minimal, calm, low-distraction hero | Progress and expectations, not decorative animation |

## 7. Homepage section order and visual rhythm

The existing homepage has too many similarly weighted panels. Proposed order:

1. **Hero + three pathways** — immediate emotional hook and route selection.
2. **“A clearer way forward”** — one large editorial split explaining the method in three steps. Use path line and genuine desk photography; avoid three equal icon cards.
3. **Assessment feature** — a dark, high-contrast section with one realistic report preview, what the AED 100 assessment covers, and CTA. Rework the existing `MockReportInteractive` as the centerpiece. Use the existing orbit as an optional small interactive explainer later, not a second large card beside the price card.
4. **Student story / proof** — only if genuine and consented. A short quote, concrete context and outcome; otherwise show an anonymized illustrative journey clearly labelled as illustrative. Do not fabricate proof.
5. **Subject-to-university journey** — a horizontal editorial path on desktop and vertical path on mobile, connecting assessment, subject choice and study abroad.
6. **Destination gallery** — one featured destination card plus a compact list/rail for the other five. Use distinct real photography and country-specific one-line rationale.
7. **Parent reassurance** — one warm portrait with a clear supporting message.
8. **Resources** — 2–3 more magazine-like article covers; varied ratios rather than three identical cards.
9. **FAQ** — compact, quiet typography; no large card enclosure.
10. **Final CTA** — deep midnight, one sentence, one action, one contact alternative.

This removes repeated “section eyebrow + centered H2 + three rounded cards” compositions. Use **three or four** substantial visual moments on the homepage and let other sections breathe.

## 8. Exact image production brief and prompts

**Preferred production:** commission a half-day real shoot in a warm, contemporary Dubai advisory/study setting with a diverse, age-appropriate cast and signed model releases. Use real EKAA advisers if possible. The prompts below are exact fallback briefs for image generation or direction for a photographer. Generated visuals must be reviewed for hands, faces, devices, signage and believable relationships. Do not represent generated people as actual clients or staff. Avoid visible university logos and unlicensed landmarks.

**Global photographic style prefix for every prompt:** “Premium documentary editorial photography for a boutique Dubai education advisory, natural human expressions, believable contemporary setting, gentle late-afternoon window light, warm stone and oak palette with deep teal details, nuanced skin texture, realistic hands, natural clothing, rich but restrained contrast, 35mm or 50mm lens look, subtle film grain, sophisticated art direction, no posed stock-photo smiles, no text, no logos, no watermarks.”

**Global negative prompt:** “No fantasy campus, no graduation cap, no floating UI, no impossible hands or fingers, no duplicated faces, no plastic skin, no oversaturated teal, no generic corporate handshake, no fake writing, no gibberish on screens, no brand logos, no embedded typography.”

| ID / file target | Exact subject and composition prompt (append global style prefix and negative prompt) | Delivery / crop |
|---|---|---|
| `home-hero-desktop` | “A thoughtful 16–18-year-old Dubai student of South Asian or Middle Eastern background at a real oak table with a female education adviser, engaged in a genuine conversation over a few blank planning sheets; student’s face and hands are clear; adviser is listening rather than pointing; modern Dubai interior with textured limestone and softly blurred city light; people occupy the centre-right 55% of frame, with visual breathing room to the left; camera slightly below eye level, candid moment, warm confidence.” | 16:9, minimum 2400×1350. Also deliver a tight 4:3 crop. Keep faces within centre 60% for responsive crops. |
| `home-hero-mobile` | “Portrait editorial crop of a thoughtful 16–18-year-old student in the same advisory setting, looking down at a personal pathway notebook, slight smile of recognition, face in upper-middle third, soft window light from side, no adviser partly cut off, no laptop screen, rich background depth.” | Dedicated 4:5, minimum 1200×1500; test at 390 px. Do not use automatic desktop crop. |
| `psychometric-hero` | “Teenage student alone at a desk after an assessment, reviewing a small paper chart with three clean coloured bands and discussing it with an off-frame adviser; curiosity rather than test anxiety; visible face, hands, pencil and paper; dark teal background gradient achieved through lighting, no readable numbers or text.” | 4:3 and 4:5, minimum 1800 px wide. Reserve one corner for an overlaid real HTML report excerpt. |
| `adviser-conversation` | “Realistic one-to-one advising session, experienced female adviser listening attentively to a late-teen student seated opposite, student speaks and gestures naturally, oak desk with a few curriculum sheets; over-the-shoulder framing creates intimacy; luminous, quiet Dubai studio, not a corporate conference room.” | 3:2, minimum 1800×1200. Use on career/subject pages, but vary crops so the same image is not repeated as both hero and About proof. |
| `parents-conversation` | “Parent and 16–18-year-old child having a calm, equal conversation about school choices at home, both engaged with one notebook, no anxious or controlling gestures, contemporary Dubai family apartment, natural morning light, culturally inclusive and credible, candid documentary framing.” | 3:2 plus 4:5, minimum 1800×1200. |
| `about-team` | “Authentic portrait of the actual EKAA Rise adviser or team in their working space, direct but relaxed eye contact, editorial portrait with meaningful environmental details and neutral background.” | **Real photography only**; do not generate a fictional team member. 3:2 and portrait crops. |
| `study-abroad-hero` | “Student seen from behind and slight side profile walking through a beautiful but believable university courtyard, strong architectural depth, tactile stone and trees, one clear human focal point, aspirational yet quiet, no famous or identifiable institution, golden hour.” | 21:9 wide for desktop and 4:5 dedicated mobile; minimum 2560 px wide. |
| `report-desk` | “Top-down editorial still life of a printed educational assessment report with abstract coloured charts but no legible text, notebook, pencil and a single warm copper object on a dark teal desk, directional light and rich shadows, carefully imperfect arrangement.” | 3:2, minimum 1800×1200. Use only if real HTML report preview cannot carry the section. |
| `destination-uk/usa/canada/australia/germany/ireland` | “A real, geographically credible university environment in [COUNTRY], one student or small group at human scale, specific regional materials, trees and weather, documentary composition with distinct architecture and colour mood; no identifiable university or misleading landmark.” | One unique 3:2 image per country, minimum 1600×1067; ideally licensed real photography. Avoid repeating the same architectural angle across countries. |
| `resource-covers` | “Tactile education editorial still life relevant to [ARTICLE TOPIC]: annotated paper, one human hand, restrained stationery, real daylight and shallow depth of field, distinct composition from other covers, no readable writing.” | Create 3 distinct 4:3 compositions. Avoid near-duplicates and city/campus filler. |

**Asset acceptance:** export true AVIF/WebP plus JPG fallback, preserve original masters, set focal-point metadata for each crop, use correct `alt` text describing visible content, and validate LCP image sizing. The current `.webp` files are **JPEG-encoded data with a `.webp` extension** (verified from file signatures), so the new pipeline should actually encode them as WebP/AVIF and record provenance accurately.

## 9. 3D and motion graphics production brief

Use one recognisable “path sculpture” as the premium 3D asset. It can be pre-rendered, avoiding a heavy real-time 3D bundle on mobile.

### 3D hero asset: the path sculpture

**Exact generation / modelling prompt:** “Create a high-end, physically plausible 3D sculpture for a premium education advisory brand: a single continuous satin mineral-teal ribbon forms a gentle ascending path through two open brushed-copper rings, ending at a small warm ivory sphere. The form suggests exploring possible routes and arriving at a personally fitting direction. Minimal, elegant, architectural, no literal compass, no graduation symbols, no text. Matte ceramic and anodized metal materials, soft studio lighting from upper left, subtle contact shadow, warm ivory background, generous negative space, camera at three-quarter view, luxury editorial product render, no glossy chrome, no neon, no glassmorphism, no stock 3D blobs.”

**Deliverables:** transparent still PNG/AVIF at 1800×1800; 6–8 second silent seamless loop at 1080×1080 and 30 fps (WebM/MP4); poster frame; dark and light background versions; 3D source file. Animation: camera moves only 6–8 degrees while a light trace follows the ribbon once; do not spin continuously. Pause when offscreen. On mobile use the poster or a short lightweight loop only after LCP. Alt/accessible label: “A curved path sculpture symbolising different routes toward a clear choice.”

### SVG motion system

1. **Signature path line:** hand-authored SVG Bézier path crossing hero/section boundary; stroke width 1.5–2 px; progressive draw in 1.1–1.5 s once after page load; slight copper endpoint pulse once. No infinite animation.
2. **Decision-map diagram:** 3 incoming lines (“interests”, “strengths”, “goals”) joining into 1 route. On scroll into view, draw lines in sequence (200–300 ms stagger), then reveal labels. Use actual selectable buttons for interactive states rather than clickable bare SVG groups.
3. **Five-step journey:** a single vertical line on mobile and horizontal path on desktop. Active step marker grows from 8 to 12 px; related content fades in 150–250 ms. Preserve readable content when motion is disabled.
4. **Report preview:** real HTML/SVG card layers, subtle parallax maximum 8 px on desktop pointer move; static on touch. Do not render report text into a bitmap.
5. **Destination transition:** image scale from 1.00 to at most 1.04 on hover, 350–500 ms; overlay deepens slightly; title remains legible.

**GIF policy:** GIF is acceptable for a tiny decorative loop or social preview, but use WebM/MP4 or animated WebP/AVIF in the website for better quality and size. If a GIF is required, export a 480×480, ≤4 s, 12–15 fps companion only. The hero must have a static poster and work without autoplay.

**Motion tokens:** hover 160–220 ms; dropdown 180–240 ms; section reveal 350–500 ms; expressive SVG 900–1500 ms; easing `cubic-bezier(.22,1,.36,1)`. Limit translation to 8–20 px. Honour `prefers-reduced-motion` by showing the final state immediately. Animate `transform` and `opacity`, not layout dimensions where avoidable.

## 10. Header, dropdowns and mobile menu

### Desktop header

Keep 4 main groups: **Assessment**, **Guidance**, **Study Abroad**, **Resources**. Put About and Contact as smaller utility links or inside a final “About EKAA” cluster. Use one persistent CTA: **Book the AED 100 assessment**. On the homepage, the header can begin transparent/dark over the hero and transition to warm paper after scrolling. Keep height around 72–80 px. Use a clean vector wordmark and no option-switch badge.

### Dropdown interaction

- Trigger on click and keyboard activation; optional hover enhancement after a 100–150 ms intent delay. Avoid menus that disappear as the pointer crosses a small gap.
- Open beneath the header in a fixed, aligned panel with a 12–16 px offset and soft shadow. Fade + translate 8 px in about 200 ms. Chevron rotates 180°. No bouncing or large scaling.
- **Assessment:** a compact 2-column panel: overview, sample report, booking action. **Guidance:** career, subject choice, parents, process. **Study Abroad:** a wider mega-menu with two featured admissions links and a clean 2×3 country grid; the current nine-item narrow list is too long. **Resources:** articles, pathway explorer, FAQ.
- Each item needs a short title and optional one-line description. Remove repeated icon tiles. Use one small line icon per column at most. Add a strong “See all” footer link where useful.
- Escape closes; outside click closes; focus returns to trigger; arrow/tab focus order is logical; the panel stays open while focus is inside. Mark current page. Maintain 44 px targets.

### Mobile navigation

Use a full-height drawer with a dark top band, clear wordmark, close control, and four large accordion rows. Put the CTA at the bottom of the drawer, not twice at the top and bottom. Only one accordion open at a time. Expand/collapse in ~220 ms with opacity and content reveal; chevron rotates. Close on route change and Escape. Keep drawer scroll independent, but restore body scroll on close/unmount. The current `top-[60px]` assumption should be replaced with measured/structured header height so the drawer does not overlap the preview banner or shifted header.

## 11. Cards, imagery, forms and small details

- **Cards:** reduce radius from the repeated 24 px treatment. Use 12–16 px for ordinary cards; reserve a larger radius for a single feature panel. Remove borders on many cards and use space/dividers instead. One accent edge or image crop is enough.
- **Buttons:** primary dark/teal filled, 48–54 px high; secondary text-with-arrow or quiet outline. Standardize wording and shape. Hover: subtle background change and 3–4 px arrow movement, no large lift.
- **Images:** give people more visual area. Use 3:2/4:5/21:9 ratios intentionally; select crop per breakpoint. Do not put one wide source into every 4:3 container. Use consistent colour grading across the library.
- **Icons:** remove generic icon-on-pastel-square treatment from most sections. Keep icons only where they improve scanning or signal function. Commission 6–8 tiny custom line illustrations if needed.
- **Forms:** use spacious labels above controls, 48–52 px inputs, clear progress indicator, reassuring privacy/next-step text. Keep decorative 3D away from booking forms. Make the price, deliverable and next step explicit.
- **Proof:** collect real adviser names/photos, credentials, authentic quotes and consented outcomes before adding claims. Avoid invented “trusted by” logos, acceptance rates or guarantees.
- **Footer:** deepen the background, enlarge the wordmark, add a compact positioning line and direct contact route. Fewer, better-organized links; keep legal policies easy to find.

## 12. Responsive, accessibility and performance requirements

- Design at 320, 390, 768, 1024 and 1440 px. Check the hero at short mobile viewport heights too, not only width.
- Use text and controls over backgrounds with WCAG AA contrast; maintain visible focus rings. Test dropdown, drawer, carousel/rail and report interaction with keyboard and touch.
- Never make meaning depend solely on animation. Supply still poster/final states and respect reduced motion. Autoplay motion must be muted, pause when offscreen, and avoid flashing.
- Target LCP ≤2.5 s on a typical mobile connection, CLS ≤0.1, and responsive images. Preload only the actual hero image/font needed. Keep the 3D loop out of the critical rendering path.
- Use licensed or owned source assets, document model releases for real people, and maintain truthful captions/alt text. Do not imply an AI-generated person is an EKAA adviser or student client.

## 13. Implementation sequence and acceptance

| Priority | Work | Acceptance condition |
|---|---|---|
| P0 | Confirm one brand mark; define tokens and typography | Vector header mark works at 24 px; colours and type documented in code |
| P0 | Produce desktop/mobile hero photography and rebuild homepage hero | Hook, one main CTA and visible person appear in first mobile viewport; no poor crop |
| P0 | Rebuild header/dropdowns/mobile drawer | Study Abroad is scannable; keyboard/touch works; no duplicate CTA |
| P1 | Recompose first 5 homepage sections | Distinct visual rhythm; no run of three same-size card grids |
| P1 | Create SVG path system and lightweight 3D poster/loop | Motion is purposeful, reduced-motion-safe, and does not delay hero LCP |
| P1 | Give service pages distinct hero templates and crop-specific assets | Each key page has a recognizable story and immediate page-specific action |
| P2 | Refresh destination/resources/FAQ/footer and forms | Coherent design system across routes; conversion and editorial pages remain usable |

**Review gate:** compare desktop and mobile screenshots of homepage, psychometric page, study-abroad hub, one destination, and the mobile menu side by side. Ask whether the imagery is believable, the primary action is obvious in five seconds, the page feels specific to EKAA, and the next section invites a scroll. Validate keyboard access, reduced motion, asset formats and mobile performance before release.

## 14. Source observations in this repository

- `src/components/hero/PageHero.tsx`: one shared split/compact hero drives most marketing pages and adds the same floating badge.
- `src/app/page.tsx`: the long homepage repeats centered headings, rounded card grids and similar section gaps.
- `src/components/layout/SiteHeader.tsx` and `src/config/navigation.ts`: hover-only desktop dropdown behavior, long Study Abroad list, and dense mobile drawer.
- `src/components/ui/Logo.tsx` and `src/components/layout/PreviewBanner.tsx`: brand-option switch and review banner currently appear in visitor-facing UI.
- `src/app/globals.css` and `tailwind.config.ts`: cool ivory/teal palette and three font families establish the current visual style.
- `public/images/ekaa/hero-homepage.jpg`: people occupy the far-right portion of the source frame; current hero container crops it further.
- `public/images/ekaa/*.webp`: image headers identify these files as JPEG data despite their WebP suffix; fix encoding in the asset refresh.

The goal is a site whose first impression comes from a real student moment, a strong line of copy, and a distinctive guided-path motif. The 3D and SVG work should deepen that impression, while the layout and photography carry it even when motion is off.
