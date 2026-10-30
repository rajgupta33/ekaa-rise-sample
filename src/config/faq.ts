export interface FAQItem {
  id: string;
  category: "psychometric" | "counselling" | "admissions" | "parents" | "pricing";
  categoryLabel: string;
  question: string;
  answer: string;
  relevantLinks?: { label: string; href: string }[];
}

export const faqData: FAQItem[] = [
  {
    id: "price-aed-100",
    category: "pricing",
    categoryLabel: "Pricing & Offer",
    question: "What is the EKAA Rise Psychometric Test price in Dubai?",
    answer: "The EKAA Rise psychometric test is confirmed at AED 100. The exact assessment format, delivery method and included reporting services will be confirmed directly during the initial booking conversation before any payment is processed.",
    relevantLinks: [{ label: "Book Psychometric Test", href: "/book-psychometric-test" }],
  },
  {
    id: "not-definitive-career",
    category: "psychometric",
    categoryLabel: "Psychometric Assessment",
    question: "Can a psychometric test tell me which career I must choose?",
    answer: "No. An appropriately selected psychometric assessment provides structured, objective data to stimulate reflection on interests, aptitudes and working styles. Career decisions must also account for academic attainment, personal goals, family context and actual university prerequisites.",
    relevantLinks: [{ label: "Assessment Limitations & Ethics", href: "/assessment-disclaimer" }],
  },
  {
    id: "test-vs-counselling",
    category: "psychometric",
    categoryLabel: "Psychometric Assessment",
    question: "Is a psychometric test the same as career counselling?",
    answer: "Not exactly. A psychometric assessment provides structured diagnostic information from a standardised instrument; counselling interprets that data in conversation to explore realistic options and make decisions. Whether 1-on-1 counselling is bundled with the AED 100 test fee depends on the confirmed booking package.",
    relevantLinks: [{ label: "Career Counselling in Dubai", href: "/career-counselling-dubai" }],
  },
  {
    id: "curricula-suitability",
    category: "counselling",
    categoryLabel: "Curriculum & Subjects",
    question: "Is the assessment suitable for IB, A Level, American and CBSE students?",
    answer: "Yes, EKAA Rise serves students across these four predominant school systems in Dubai. The interpretation of results directly connects student strengths with the specific subject requirements of each curriculum.",
    relevantLinks: [{ label: "Subject Selection Guide", href: "/subject-selection-counselling-dubai" }],
  },
  {
    id: "subject-selection-support",
    category: "counselling",
    categoryLabel: "Curriculum & Subjects",
    question: "Can the psychometric test help me select Grade 11 or IB DP subjects?",
    answer: "Yes. Understanding whether your natural strengths lean toward quantitative analysis, spatial reasoning, verbal deduction or creative design helps guide high-stakes choices like Math AA vs AI, or selecting sciences for degree prerequisites.",
    relevantLinks: [{ label: "Choosing Subjects After Grade 10", href: "/resources/choosing-subjects-after-grade-10-dubai" }],
  },
  {
    id: "no-guarantees",
    category: "admissions",
    categoryLabel: "Admissions Guidance",
    question: "Does taking the test guarantee university admission or scholarships?",
    answer: "No. University admissions decisions and scholarship grants are made exclusively by the respective institutions according to their independent published criteria. EKAA Rise provides guidance and strategic application preparation.",
    relevantLinks: [{ label: "Study Abroad Admissions Hub", href: "/study-abroad-consultants-dubai" }],
  },
  {
    id: "parent-involvement",
    category: "parents",
    categoryLabel: "Parents & Privacy",
    question: "Will parents or guardians be involved in the guidance process?",
    answer: "Yes, guardian involvement is encouraged, especially for students under 18 years old. We facilitate open, constructive family discussions while safeguarding the student's authentic individual voice.",
    relevantLinks: [{ label: "Guidance for Parents", href: "/for-parents" }],
  },
  {
    id: "data-privacy-minors",
    category: "parents",
    categoryLabel: "Parents & Privacy",
    question: "Are student test responses and personal data kept private?",
    answer: "Strictly so. All student responses and records are treated under applicable UAE data protection regulations. Assessment data is never shared with third parties or advertisers without explicit guardian consent.",
    relevantLinks: [{ label: "Privacy Policy (Draft)", href: "/privacy-policy" }],
  },
  {
    id: "destinations-comparison",
    category: "admissions",
    categoryLabel: "Admissions Guidance",
    question: "Can EKAA Rise help me compare universities in the UK, USA, Canada and Australia?",
    answer: "Yes. Our advisors evaluate degree duration (e.g. 3-year UK vs 4-year US degrees), curricular breadth, post-graduation opportunities, total financial budget and campus culture to build a balanced, realistic shortlist.",
    relevantLinks: [{ label: "Destination Overviews", href: "/study-abroad-consultants-dubai" }],
  },
  {
    id: "refund-policy",
    category: "pricing",
    categoryLabel: "Pricing & Offer",
    question: "Can I receive a refund or reschedule if my schedule changes?",
    answer: "Our formal cancellation and rescheduling policy is provided in draft form and will be confirmed prior to live commercial transactions. In preview mode, no financial transactions occur.",
    relevantLinks: [{ label: "Refund & Cancellation Policy", href: "/refund-and-cancellation-policy" }],
  },
  {
    id: "duration-mode",
    category: "psychometric",
    categoryLabel: "Psychometric Assessment",
    question: "How long does the test take and is it conducted online?",
    answer: "Assessment duration and modality (online digital vs supervised session) depend on the validated assessment instrument approved for client rollout, typically ranging from 45 to 75 minutes. Details are confirmed upon enquiry.",
  },
  {
    id: "not-sure-destination",
    category: "admissions",
    categoryLabel: "Admissions Guidance",
    question: "Do I need to have a chosen university destination before reaching out?",
    answer: "Not at all. In fact, starting without rigid preconceived destinations is often an advantage. We work from your genuine interests and academic profile to identify the countries and courses that best align.",
    relevantLinks: [{ label: "Try the Pathway Explorer", href: "/pathway-explorer" }],
  },
];
