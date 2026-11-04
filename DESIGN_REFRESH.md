# Ekaa visual refresh — 4 November 2026

The homepage now uses a forest-green and ivory palette, editorial typography, an original CSS 3D-style orbital sculpture with pointer tilt, floating glass insight cards, dimensional service tiles, an interactive five-dimension assessment preview, an academic-stage selector, and destination photography from existing project assets. The main assessment landing page shares the new visual direction. Long homepage paragraphs and duplicated promotions were removed; the footer is shorter across the site.

The sculpture uses CSS transforms, gradients, lighting and perspective rather than an additional WebGL library. Touch devices use a stable composition, and reduced-motion settings disable animations and pointer tilt. Dimension tabs support arrow keys, Home and End. Stage buttons expose their selected state.

## Price reveal

Student/academic details → contact details and consent → final review with **AED 100** → demo checkout.

The fee is removed from headers, navigation, footer, promotional cards, page copy, FAQs, titles/descriptions and public service structured data. It remains in the final booking review, checkout and central price configuration. The separate no-payment career explorer continues to work without a payment gate. Booking remains an explicitly labelled demonstration; personal information is not sent to a backend and checkout does not collect money.

## Verification

Production build passed. Ten browser/scoring tests passed, including the full 60-question assessment, price visibility across booking steps, validation before review, back-navigation hiding the price, dimension-tab keyboard controls, stage-specific links, public page price checks, and responsive overflow checks at 390, 768 and 1440 pixels. Desktop and mobile screenshots were inspected. Re-run `npm run build` and `npm run test:assessment` to verify a future change.

## Internal-page rollout

The visual system now extends to career guidance, subject selection, parents, about, process, study-abroad, undergraduate and postgraduate pages. These use dimensional photographic heroes, concise introductions, selectable guidance plans, completion checklists and downloadable text plans. Detailed existing content remains accessible in expandable guides. Plans are intentionally local to the open page; downloads preserve them.

All six destination pages include study-level selectors, curriculum panels, interactive timeline stages, country comparison and expandable FAQs. The resource library has live search, category filters and a resettable empty state. Article pages have section navigation, adjustable text size and browser print/PDF controls. Contact, FAQ, consultation and pathway-explorer introductions share the updated visual treatment. Booking and legal pages receive the shared typography, surface and form styling while keeping their existing flows.

Five new test scenarios cover every guidance plan, all six destination timelines, curriculum and comparison controls, plan downloads, reading tools, search and responsive layouts. No live submission or payment integration was added. Assessment results and pricing behavior are retained.

Final internal-page verification: production build passed; all 15 browser/scoring tests passed, including the full student assessment and delayed price reveal; all 35 route smoke checks passed. Desktop and mobile internal-page screenshots were visually inspected.
