# EKAA RISE — CLIENT REVIEW & APPROVAL PLAYBOOK
**Project:** EKAA Rise (Dubai, UAE)  
**Preview Build URL:** `http://localhost:3000` (Local Preview Server)  
**Version:** 1.0 Release Candidate  

---

## 1. Quick Review Guide for Stakeholders

Welcome to the client review environment for **EKAA Rise**. This website has been built as a complete, fully functional multi-page web platform designed to establish a premier, credible education advisory brand in Dubai, centered around the **AED 100 Psychometric Assessment**.

To test the application locally:
1. Ensure the server is running (`npm run build && npm start` or `npm run dev`).
2. Open `http://localhost:3000` in your web browser.
3. Test both **Desktop (1440px)** and **Mobile (390px / 375px via DevTools)** viewports.

---

## 2. Page-by-Page Inspection Checklist

| Priority | Route URL | Key Elements to Inspect & Sign Off | Review Status |
|---|---|---|---|
| **P0** | [`/`](http://localhost:3000/) | • High-impact editorial hero with multicultural student & parent.<br>• Brand identity toggle (Option A original vs Option B modern lockup).<br>• Confirmed **AED 100** price box.<br>• Interactive 4-Band Discovery Orbit.<br>• Destination cards & Why EKAA advisory story. | `[ ] Ready for Sign-Off` |
| **P0** | [`/psychometric-test-dubai`](http://localhost:3000/psychometric-test-dubai) | • Primary SEO money page.<br>• Plain language definition of educational psychometrics.<br>• Comparison table: Testing vs Career Counselling.<br>• AED 100 transparent offer strip.<br>• Assessment FAQs. | `[ ] Ready for Sign-Off` |
| **P0** | [`/psychometric-test-dubai/sample-report`](http://localhost:3000/psychometric-test-dubai/sample-report) | • Interactive mock assessment report (Interests, Aptitudes, Pathways, Counselor questions).<br>• Permanent "SAMPLE / ILLUSTRATIVE" watermark.<br>• Ethical guidance on reading findings responsibly. | `[ ] Ready for Sign-Off` |
| **P0** | [`/career-counselling-dubai`](http://localhost:3000/career-counselling-dubai) | • Authentic counselling editorial photography.<br>• Question-led student dilemma cards.<br>• 4-stage advisory methodology.<br>• Consultation booking form. | `[ ] Ready for Sign-Off` |
| **P0** | [`/subject-selection-counselling-dubai`](http://localhost:3000/subject-selection-counselling-dubai) | • Interactive curriculum tabs: IB Diploma, British A Levels, American AP, CBSE.<br>• Strategic prerequisite warnings (e.g. Math AA vs AI).<br>• 4 illustrative student case studies.<br>• Pre-selection checklist. | `[ ] Ready for Sign-Off` |
| **P0** | [`/study-abroad-consultants-dubai`](http://localhost:3000/study-abroad-consultants-dubai) | • Study abroad hub overview.<br>• Undergraduate vs Master's vertical cards.<br>• 6 destination portals (UK, US, Canada, Australia, Germany, Ireland).<br>• Criteria to evaluate beyond rankings. | `[ ] Ready for Sign-Off` |
| **P0** | [`/study-abroad/undergraduate-admissions`](http://localhost:3000/study-abroad/undergraduate-admissions) | • High school to Bachelor's degree guidance.<br>• UK vs US vs Canada vs Australia matrix.<br>• 5-step application timeline. | `[ ] Ready for Sign-Off` |
| **P0** | [`/study-abroad/masters-admissions`](http://localhost:3000/study-abroad/masters-admissions) | • Master's & Postgraduate admissions guidance.<br>• Statement of Purpose (SOP) and CV guidance.<br>• 1-year UK/Ireland vs 2-year US/Germany Master's models. | `[ ] Ready for Sign-Off` |
| **P0** | [`/study-abroad/uk`](http://localhost:3000/study-abroad/uk) | • UK collegiate quad photography.<br>• UCAS application timeline.<br>• A Level & IB minimum requirements. | `[ ] Ready for Sign-Off` |
| **P0** | [`/study-abroad/usa`](http://localhost:3000/study-abroad/usa) | • US collegiate campus photography.<br>• Holistic Common App review.<br>• Early Decision vs Early Action guidance. | `[ ] Ready for Sign-Off` |
| **P0** | [`/study-abroad/canada`](http://localhost:3000/study-abroad/canada) | • Canadian university photography.<br>• Co-op work-term explanation.<br>• Provincial admission portals (OUAC). | `[ ] Ready for Sign-Off` |
| **P0** | [`/study-abroad/australia`](http://localhost:3000/study-abroad/australia) | • Australian sunlit campus photography.<br>• Group of Eight (Go8) insights.<br>• February & July dual intake cycles. | `[ ] Ready for Sign-Off` |
| **P0** | [`/study-abroad/germany`](http://localhost:3000/study-abroad/germany) | • German research campus photography.<br>• English-taught degrees & zero-tuition public university explanation.<br>• Abitur equivalence / Studienkolleg notes. | `[ ] Ready for Sign-Off` |
| **P0** | [`/study-abroad/ireland`](http://localhost:3000/study-abroad/ireland) | • Irish stone campus photography.<br>• European tech hub connections (Dublin).<br>• 1-year Master's degree pathways. | `[ ] Ready for Sign-Off` |
| **P0** | [`/our-process`](http://localhost:3000/our-process) | • 5-stage interactive vertical timeline (Listen -> Discover -> Reflect -> Explore -> Plan).<br>• Alternative entry path for students with chosen courses. | `[ ] Ready for Sign-Off` |
| **P0** | [`/for-parents`](http://localhost:3000/for-parents) | • Warm parent-student photography in Dubai.<br>• Family dilemma resolutions.<br>• Minor data protection & guardian consent protocols. | `[ ] Ready for Sign-Off` |
| **P0** | [`/about`](http://localhost:3000/about) | • Founding philosophy: "Understand the person first".<br>• Core values: Clarity, Choice, Trust, Transparency.<br>• Serving Dubai families notice. | `[ ] Ready for Sign-Off` |
| **P0** | [`/book-psychometric-test`](http://localhost:3000/book-psychometric-test) | • 3-stage interactive booking wizard.<br>• Confirmed **AED 100** order summary.<br>• Form validation (minor guardian consent).<br>• Safe preview submission dialog. | `[ ] Ready for Sign-Off` |
| **P0** | [`/book-consultation`](http://localhost:3000/book-consultation) | • Advisory consultation request form.<br>• Selection of service and destination preferences. | `[ ] Ready for Sign-Off` |
| **P0** | [`/contact`](http://localhost:3000/contact) | • Direct inquiry form.<br>• Verified operational status note without fake address pin. | `[ ] Ready for Sign-Off` |
| **P1** | [`/pathway-explorer`](http://localhost:3000/pathway-explorer) | • 4-step interactive intake tool.<br>• Deterministic recommendation engine.<br>• Explicit non-diagnostic disclaimer. | `[ ] Ready for Sign-Off` |
| **P1** | [`/faq`](http://localhost:3000/faq) | • 5 categorized FAQ tabs with search bar.<br>• Clear answers regarding AED 100 pricing and test limitations. | `[ ] Ready for Sign-Off` |
| **P1** | [`/resources`](http://localhost:3000/resources) | • Editorial library featuring 4 complete research articles. | `[ ] Ready for Sign-Off` |
| **P1** | [`/privacy-policy`](http://localhost:3000/privacy-policy) | • Structured draft with visible "Legal Review Required" banner. | `[ ] Ready for Sign-Off` |
| **P1** | [`/terms-and-conditions`](http://localhost:3000/terms-and-conditions) | • Commercial terms draft with visible "Legal Review Required" banner. | `[ ] Ready for Sign-Off` |
| **P1** | [`/refund-and-cancellation-policy`](http://localhost:3000/refund-and-cancellation-policy) | • Rescheduling draft framework with "Review Required" banner. | `[ ] Ready for Sign-Off` |
| **P1** | [`/assessment-disclaimer`](http://localhost:3000/assessment-disclaimer) | • Educational scope & non-clinical diagnostic limitation statements. | `[ ] Ready for Sign-Off` |
| **P1** | [`/thank-you`](http://localhost:3000/thank-you) | • Confirmation page with noindex meta protection. | `[ ] Ready for Sign-Off` |

---

## 3. How to Provide Approval or Request Refinements

1. **Logo Selection:** Note whether Option A (Heritage with icons) or Option B (Modern monogram) is approved for production.
2. **Pricing & VAT:** Confirm if AED 100 is inclusive of 5% UAE VAT.
3. **Assessment Vendor:** Confirm selected psychometric test provider (e.g. Morrisby, Cambridge, etc.) to configure final question lengths and report formats.
4. **Commercial Checkout:** Supply UAE payment gateway credentials when ready to transition from Preview Demo Mode to Live Transactions.
