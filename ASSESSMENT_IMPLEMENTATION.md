# EKAA student career explorer

## Reference analysis (4 November 2026)

Reviewed the public [Edumilestones assessment directory](https://www.edumilestones.com/psychometric-career-assessment/), its [Grades 8–10 page](https://www.edumilestones.com/psychometric-career-assessment/8th-to-10th-students), [Grades 11–12 page](https://www.edumilestones.com/psychometric-career-assessment/11th-and-12th-students), and linked registration entry point.

The reference separates school stages and specialist assessments, advertises five dimensions, and connects reports to subject planning, career information, and counselling. Its entry flow requests identity/contact details, current stage and goals, and offers account, access-code and payment paths. The public pages advertise roughly 45 minutes and a comprehensive report. Page counts and career totals differ between sections; these are marketing claims, not independently verified measures of validity. The private item bank, scoring weights, norms and report-generation logic were not accessible without registration; no account was created and no proprietary questions were copied.

For EKAA, the useful pattern is profile → guided assessment → review → explained report → practical exploration. The implemented version prioritises immediate student access over account/payment friction, uses the existing Ekaa identity, and adds same-browser resume. It deliberately does not copy claims about scientific accuracy, AI admission predictions, or thousands of validated career matches.

## Implemented

- Catalogue: `/career-assessment`, with stage filters and individual `/career-assessment/grade-4` through `/career-assessment/grade-12` routes.
- Nine separate grade banks: Grades 4–7 have 40 items each; Grades 8–12 have 48 each. Every grade has 12 unique interest activities and six unique reasoning problems. Reflection items are shared within stages.
- Each grade has independent saved progress and a downloadable grade-labelled report. Younger grades receive activity suggestions; older grades receive subject/course exploration guidance.
- Earlier 60-item attempts remain accessible at `/career-assessment/general`; the catalogue shows a resume link when one is saved.
- Nickname, grade, curriculum and age-group intake; required consent wording adapts for under-18 students.
- One question at a time, keyboard-accessible radios, explicit next/back, section navigation, complete-answer review and incomplete-submission prevention.
- Automatic versioned localStorage persistence; validated recovery, corrupt-data handling, unavailable-storage notice, pause/resume, report recovery and explicit reset.
- Five dimension profiles, four interest-based career directions from ten curated areas, subject exploration prompts, curriculum/stage-specific next steps, and reasoning explanations.
- Text report download and browser print/save-as-PDF. No external service or API key is needed to take the test.

## Scoring and interpretation

Self-report items use 0–4 mapped to 0–100, averaged per dimension. The third working-style item in each dimension is reverse-keyed. Reasoning scores show correct/total and percentage correct; unsure is incorrect. Career alignment is the equal-weight mean of the two explicitly named interest dimensions. Ties are alphabetical. Similar interest scores trigger a broad-exploration message. Other profiles are reported separately, not used to restrict careers. Learning preferences are not fixed learning types.

This is a functioning exploratory questionnaire, **not a psychometrically validated instrument**. It has no empirical reliability estimates, standardisation sample, validated career prediction, or population percentiles. Before offering it as a validated paid psychometric test, commission expert item review, age/language suitability review, representative pilot data, reliability and validity studies, and fairness evaluation. The on-screen copy and exports explain this distinction.

## Data and operational boundaries

Profile and answers stay in this browser under `ekaa-career-explorer-v1`; they are not submitted to Ekaa. Students must download reports themselves. There is no cross-device account, counsellor dashboard, central record collection, email delivery or live payment integration. The existing AED 100 advisory booking remains a separate demonstration. Shared-device users can clear their attempt; browser data deletion also removes it. Consent is student-attested, not verified guardian identity.

This change extends the existing local Next.js repository; it does not deploy or change domain hosting. Publish the updated project through its hosting pipeline for students outside this computer to access it.

## Verification

Run `npm run build`, then `npm run test:assessment`. The Playwright configuration uses installed Microsoft Edge and starts the production server if needed. For a host without Edge, install an appropriate Playwright browser and adjust the channel.

Tests exercise scoring boundaries, reverse keys, all-correct and unsure reasoning, different career profiles, corrupt saved data, all 60 questions, reload/resume, answer changes, report download contents, reset, blocked storage, required input, keyboard interaction and mobile overflow. Screenshots are written to ignored `test-results/`.

Verified on 4 November 2026: production build passed (39 generated pages); all 7 assessment tests passed in Microsoft Edge, including the complete 60-question student journey. Desktop results and mobile intake/question screenshots were visually inspected.
