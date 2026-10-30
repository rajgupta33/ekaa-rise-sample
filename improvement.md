# EKAA Rise — Redesign implementation log

**Updated:** 30 October 2026  
**Source plan:** [improvement1.md](improvement1.md)

## Phase 1: Homepage hero — implemented

- Replaced the shared homepage `PageHero` with a dedicated `HomeHero` composition. Other page heroes are unchanged for now.
- Added a direct mobile hook: **“More than one future? Find yours.”** The desktop hero uses the same promise with a more spacious editorial layout.
- On narrow phones, placed the primary action immediately after the headline so it remains visible in the first screen; the short supporting copy follows it.
- Replaced the long first-screen paragraph, price pill and curriculum badges with one clear value statement, a primary route to the Pathway Explorer and a secondary route to the AED 100 assessment.
- Created separate desktop and mobile photographs. The mobile image is a dedicated portrait composition, not an automatic crop of the landscape image. The images are illustrative generated editorial visuals; they must not be presented as real EKAA clients or staff.
- Added a one-time SVG path animation on desktop with a static final state for reduced-motion users.
- Replaced the old curriculum trust strip with three explicit route choices: understand strengths, choose subjects and plan university.
- Delayed the fixed mobile booking bar until the homepage hero leaves view, so it does not cover the hero action.
- Removed the visitor-facing logo option switch from the header, made the existing clean wordmark variant the default, and compressed the preview notice so the hero has more room on small screens. The preview notice still explains that forms are demos.

## Files changed

| File | Purpose |
|---|---|
| `src/components/hero/HomeHero.tsx` | New responsive hero and three pathway links |
| `src/app/page.tsx` | Uses the new hero; removes the old homepage hero and trust strip |
| `src/app/globals.css` | SVG path draw animation and reduced-motion state |
| `src/components/layout/MobileBottomCTA.tsx` | Shows fixed CTA only after homepage hero exits view |
| `src/components/layout/SiteHeader.tsx` | Removes review-only logo switch from header |
| `src/components/ui/Logo.tsx` | Defaults to the cleaner existing wordmark option |
| `src/components/layout/PreviewBanner.tsx` | Compact preview notice |
| `public/images/ekaa/hero-home-desktop-v2.webp` | New desktop photo, true WebP, 126 KB |
| `public/images/ekaa/hero-home-mobile-v2.webp` | New mobile photo, true WebP, 135 KB |

## Image prompts used

**Desktop photo:** “Premium Dubai education advisory homepage photograph. Intimate student guidance conversation at a contemporary studio with tactile warm limestone, oak table, softly blurred Dubai windows and a few blank planning sheets. Thoughtful 16–18-year-old South Asian student in dark teal is the focal point; professional female adviser listens attentively. Both faces and hands visible inside central 70%, framed at eye level with a 50mm documentary lens. Warm late-afternoon side light, nuanced skin texture, subtle film grain, sophisticated editorial colour grade. No large empty window, posed smiles, logos, text, floating UI, distorted hands or watermark.”

**Mobile photo:** “Using the desktop scene as a continuity reference, recompose the same student and adviser in a vertical 4:5 editorial photograph. Student is the primary subject in the upper and middle frame, speaking thoughtfully; adviser listens to one side. Keep both faces within the central 80%, with some oak table and blank planning pages at bottom. Preserve the warm studio, clothing and natural late-afternoon light. Do not stretch or simply crop the horizontal image. No logos, text, watermark or distorted fingers.”

Both images were generated using the built-in image generation tool and encoded to WebP for the website. The generated source PNGs remain in the local Codex generated-images directory; the consumed WebP files are in this project.

## Verification

- `npm run build` completed successfully after the initial hero implementation.
- The live browser confirmed the new heading, routes and responsive hero image are present. A narrow mobile inspection exposed a cramped first viewport because of the review banner and logo switch; both were simplified, and the mobile image height and top spacing were reduced.
- The final `npm run build` completed successfully, including TypeScript checking and generation of all 37 static pages.
- Browser screenshots were checked at desktop width, 390×844 and 320×640. The mobile hook, both faces and the primary CTA are visible together at the tested mobile sizes. Review captures were saved under the local Codex visualizations folder as `home-hero-desktop-review.png` and `home-hero-mobile-review.png`.

## Next phases from the report

The rest of [improvement1.md](improvement1.md) remains a design plan: navigation dropdown redesign, inner-page hero variants, broader colour/type rollout, 3D path sculpture, SVG diagrams, destination imagery and homepage section recomposition. No completion is claimed for those phases.

## Phase 2: Client review checkout — implemented

- Added `/checkout-demo`, a standalone checkout concept with AED 100 order summary, disabled sample card fields, progress indicator, preview notice and confirmation action.
- The third step of the assessment booking wizard now leads to the demo checkout instead of ending on an in-place success message. No entered student or contact details are passed to the checkout page or stored by this demo.
- The confirmation action routes to the existing thank-you page, whose copy now accurately states that no booking or payment was created.
- The fixed mobile booking bar is hidden on the checkout page. The preview route is marked `noindex` and disallowed in `robots.txt`.
- Added `/checkout-demo` to the route smoke test. A real payment provider, tax treatment, transaction processing and scheduling remain outside this demo.
- Verified the full local path with sample data: booking details → consent → order review → demo checkout → demo confirmation. The final production build passed, and the route smoke test reported **35 passed, 0 failed**.
- The production preview is running at `http://localhost:3000`; direct client review link: `http://localhost:3000/checkout-demo` (available on this computer while the local server is running).
