export interface NavLink {
  label: string;
  href: string;
  badge?: string;
  description?: string;
}

export interface NavGroup {
  label: string;
  href?: string;
  items: NavLink[];
}

export const navigationConfig = {
  mainNav: [
    {
      label: "Psychometric Test",
      href: "/psychometric-test-dubai",
      items: [
        {
          label: "Psychometric Test in Dubai",
          href: "/psychometric-test-dubai",
          description: "Structured reflection on interests, aptitudes and direction — AED 100",
          badge: "AED 100",
        },
        {
          label: "Illustrative Sample Report",
          href: "/psychometric-test-dubai/sample-report",
          description: "Explore what structured student insights look like in practice",
        },
        {
          label: "Book Psychometric Test",
          href: "/book-psychometric-test",
          description: "Start your AED 100 assessment booking journey",
          badge: "Popular",
        },
      ],
    },
    {
      label: "Career Guidance",
      href: "/career-counselling-dubai",
      items: [
        {
          label: "Career Counselling in Dubai",
          href: "/career-counselling-dubai",
          description: "Personalised, conversational guidance connecting strengths to careers",
        },
        {
          label: "Subject Selection Counselling",
          href: "/subject-selection-counselling-dubai",
          description: "Strategic curriculum choices across IB, A Levels, CBSE & AP",
        },
        {
          label: "For Parents & Guardians",
          href: "/for-parents",
          description: "Supporting your child's choices with clarity and without pressure",
        },
        {
          label: "Our 5-Step Process",
          href: "/our-process",
          description: "From student self-discovery to global university applications",
        },
      ],
    },
    {
      label: "Study Abroad",
      href: "/study-abroad-consultants-dubai",
      items: [
        {
          label: "Study Abroad Admissions Hub",
          href: "/study-abroad-consultants-dubai",
          description: "Course fit, realistic shortlists and comprehensive application support",
        },
        {
          label: "Undergraduate Admissions",
          href: "/study-abroad/undergraduate-admissions",
          description: "Bachelor's degree planning from Dubai school curricula",
        },
        {
          label: "Master's & Postgraduate",
          href: "/study-abroad/masters-admissions",
          description: "Postgraduate programme fit, career advancement & prerequisites",
        },
        {
          label: "United Kingdom",
          href: "/study-abroad/uk",
          description: "UCAS, degree specialisation, Russell Group and Scottish pathways",
        },
        {
          label: "United States",
          href: "/study-abroad/usa",
          description: "Holistic admissions, major exploration and Common App guidance",
        },
        {
          label: "Canada",
          href: "/study-abroad/canada",
          description: "Provincial university systems, cooperative programmes & prerequisites",
        },
        {
          label: "Australia",
          href: "/study-abroad/australia",
          description: "Go8 institutions, major intakes, and dynamic degree structures",
        },
        {
          label: "Germany",
          href: "/study-abroad/germany",
          description: "English-taught degrees, academic qualification checks & TU9",
        },
        {
          label: "Ireland",
          href: "/study-abroad/ireland",
          description: "Top European tech hub degrees, entry criteria and career alignment",
        },
      ],
    },
    {
      label: "Resources",
      href: "/resources",
      items: [
        {
          label: "Guides & Editorial Hub",
          href: "/resources",
          description: "Independent guides on psychometrics, subject choices & admissions",
        },
        {
          label: "Pathway Explorer (Intake Tool)",
          href: "/pathway-explorer",
          description: "A 90-second orientation to find your recommended next step",
          badge: "Interactive",
        },
        {
          label: "Frequently Asked Questions",
          href: "/faq",
          description: "Clear answers on tests, AED 100 pricing, counselling & policies",
        },
      ],
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  footerNav: {
    services: [
      { label: "Psychometric Test (AED 100)", href: "/psychometric-test-dubai" },
      { label: "Illustrative Sample Report", href: "/psychometric-test-dubai/sample-report" },
      { label: "Career Counselling in Dubai", href: "/career-counselling-dubai" },
      { label: "Subject Selection (IB/A Level/CBSE/AP)", href: "/subject-selection-counselling-dubai" },
      { label: "How Our Process Works", href: "/our-process" },
      { label: "Guidance for Parents", href: "/for-parents" },
    ],
    studyAbroad: [
      { label: "Study Abroad Hub", href: "/study-abroad-consultants-dubai" },
      { label: "Undergraduate Admissions", href: "/study-abroad/undergraduate-admissions" },
      { label: "Master's & Postgraduate", href: "/study-abroad/masters-admissions" },
      { label: "Study in the UK from Dubai", href: "/study-abroad/uk" },
      { label: "Study in the USA from Dubai", href: "/study-abroad/usa" },
      { label: "Study in Canada from Dubai", href: "/study-abroad/canada" },
      { label: "Study in Australia from Dubai", href: "/study-abroad/australia" },
      { label: "Study in Germany from Dubai", href: "/study-abroad/germany" },
      { label: "Study in Ireland from Dubai", href: "/study-abroad/ireland" },
    ],
    resources: [
      { label: "Pathway Explorer", href: "/pathway-explorer" },
      { label: "Frequently Asked Questions", href: "/faq" },
      { label: "All Editorial Guides", href: "/resources" },
      { label: "What Psychometric Tests Measure", href: "/resources/psychometric-tests-for-students-explained" },
      { label: "Choosing Subjects After Grade 10", href: "/resources/choosing-subjects-after-grade-10-dubai" },
      { label: "IB vs A Levels for Admissions", href: "/resources/ib-vs-a-levels-university-admissions" },
      { label: "Study Abroad Timeline from Dubai", href: "/resources/study-abroad-application-timeline-dubai" },
    ],
    legal: [
      { label: "Privacy Policy (Draft)", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
      { label: "Refund & Cancellation Policy", href: "/refund-and-cancellation-policy" },
      { label: "Assessment Disclaimer", href: "/assessment-disclaimer" },
    ],
  },
};
