export interface Article {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  readTime: string;
  publishDate: string;
  category: "Assessment" | "Subject Choice" | "Admissions" | "Planning";
  summary: string;
  heroImage: string;
  altText: string;
  sections: {
    heading: string;
    paragraphs: string[];
    bulletPoints?: string[];
    callout?: string;
  }[];
  relatedSlugs: string[];
}

export const articlesData: Record<string, Article> = {
  "psychometric-tests-for-students-explained": {
    slug: "psychometric-tests-for-students-explained",
    title: "Psychometric Tests for Students: What They Measure and What They Don't",
    h1: "Psychometric Tests for Students: What They Measure and What They Don't",
    metaTitle: "Psychometric Tests for Students: What They Measure | EKAA Rise",
    metaDescription: "Learn what psychometric assessments can and cannot tell students about interests, aptitudes, working preferences and career exploration.",
    readTime: "6 min read",
    publishDate: "October 2026",
    category: "Assessment",
    summary: "A psychometric assessment is neither an IQ test nor an infallible oracle. When designed and interpreted properly, it provides a structured vocabulary for students and families to explore aptitudes and career directions without premature pigeonholing.",
    heroImage: "/images/ekaa/articles/psychometric-guide.webp",
    altText: "High school student reflecting over learning style and interest exploration charts",
    sections: [
      {
        heading: "1. Demystifying the Term: What Is an Educational Psychometric Test?",
        paragraphs: [
          "The term 'psychometric' simply means the measurement of mental capacities and behavioural characteristics. In an educational setting, standardized assessments examine cognitive patterns (such as numerical reasoning, verbal abstraction, and spatial relations), alongside occupational interest inventories and work-style preferences.",
          "Unlike classroom tests that evaluate whether you memorized a chemistry formula or historical date, psychometric instruments are diagnostic and reflective. They look at how a student processes information, what environments engage their curiosity, and where their natural cognitive velocity lies.",
        ],
      },
      {
        heading: "2. The Three Dimensions Measured in Student Career Assessments",
        paragraphs: [
          "Reputable student guidance assessments generally evaluate three interlocking spheres:",
        ],
        bulletPoints: [
          "Aptitudes & Cognitive Capacities: Objective measures of speed and accuracy in reasoning—verbal, numerical, abstract, spatial, and mechanical.",
          "Occupational Interests: Holland Codes (RIASEC) or similar frameworks that identify affinity for Realistic, Investigative, Artistic, Social, Enterprising, or Conventional activities.",
          "Workplace & Study Preferences: Behavioural traits such as need for structure, collaborative vs solitary study, risk tolerance, and creative autonomy.",
        ],
      },
      {
        heading: "3. Crucial Limitations: What a Test Can Never Do",
        paragraphs: [
          "It is equally vital to understand what psychometric testing cannot do. It cannot predict with absolute certainty whether someone will be a successful surgeon, an innovative software architect, or a prosperous entrepreneur 15 years from now.",
          "Furthermore, a test score must never be used as a blunt instrument to disqualify a student from pursuing their passions. Human motivation, disciplined work ethic, emotional maturity, and mentorship play monumental roles in career outcomes.",
        ],
        callout: "A psychometric test is a conversation starter, not a verdict. It replaces vague speculation with objective data points so parents and students can ask better questions.",
      },
      {
        heading: "4. How Dubai Families Can Use Assessment Results Constructively",
        paragraphs: [
          "In Dubai's competitive academic environment, students often feel pressured by peer expectations or parental aspirations. A structured assessment offers neutral ground. When a student sees that their spatial and mechanical reasoning scores match their genuine love for design and problem-solving, it provides validation to explore architecture or industrial design alongside traditional engineering paths.",
          "At EKAA Rise, our AED 100 psychometric assessment is designed as an accessible gateway into this self-discovery process, paired with experienced counselling to translate raw percentiles into actionable school subject and university pathways.",
        ],
      },
    ],
    relatedSlugs: [
      "choosing-subjects-after-grade-10-dubai",
      "ib-vs-a-levels-university-admissions",
    ],
  },
  "choosing-subjects-after-grade-10-dubai": {
    slug: "choosing-subjects-after-grade-10-dubai",
    title: "Choosing Subjects After Grade 10 in Dubai: A Parent–Student Checklist",
    h1: "Choosing Subjects After Grade 10 in Dubai: A Parent–Student Checklist",
    metaTitle: "Choosing Subjects After Grade 10 in Dubai | Student Guide | EKAA Rise",
    metaDescription: "Practical questions for students and parents in Dubai weighing academic subjects, emerging interests and future university prerequisites.",
    readTime: "7 min read",
    publishDate: "October 2026",
    category: "Subject Choice",
    summary: "Grade 10 marks a defining crossroads in Dubai schools. Whether transitioning into the IB Diploma, A Levels, AP courses, or CBSE Senior Secondary, the subjects you choose now directly govern university degree eligibility worldwide.",
    heroImage: "/images/ekaa/articles/subject-selection-guide.webp",
    altText: "Dubai high school student and parent reviewing curriculum subject option sheets",
    sections: [
      {
        heading: "1. The Grade 10 Crossroads in Dubai's Multi-Curricular Landscape",
        paragraphs: [
          "Unlike educational systems with a single national track, Dubai is home to more than 200 private schools representing over 17 distinct curricula. By the end of Grade 10 (Year 11 in British schools), students must finalize high-stakes course selections: choosing 3–4 A Level subjects, 6 IB Diploma subjects (including 3 Higher Levels), AP course selections, or a CBSE stream (Science, Commerce, or Humanities).",
          "Because university admissions committees across the UK, Europe, Canada, and Singapore enforce strict prerequisite requirements, an uninformed subject choice in Grade 10 can quietly close the door to entire professions before an application is even drafted.",
        ],
      },
      {
        heading: "2. The Prerequisite Trap: Why You Must Work Backwards",
        paragraphs: [
          "The most common mistake families make is choosing subjects solely based on the current teacher or ease of getting high grades in Grade 10. Instead, you must reverse-engineer the decision from prospective degree categories:",
        ],
        bulletPoints: [
          "Engineering & Computer Science: Almost universally mandates Mathematics (Higher Level Analysis & Approaches in IB, or A Level Mathematics) plus Physics or Chemistry.",
          "Economics & Finance: Elite universities (such as LSE, Warwick, UCL, Toronto Rotman, and top US colleges) treat Mathematics as mandatory, often favouring pure mathematics over applied business studies.",
          "Medicine & Health Sciences: Chemistry is strictly non-negotiable across British and European medical schools, paired with either Biology or Mathematics.",
          "Law & Humanities: Values essay-rich subjects that develop textual critique, analytical logic, and source evaluation (History, English Literature, Politics, Economics).",
        ],
      },
      {
        heading: "3. The Parent–Student Decision Matrix: 5 Core Questions",
        paragraphs: [
          "Before signing course selection forms, sit down together and address these five concrete questions:",
        ],
        bulletPoints: [
          "1. What are the student's authentic cognitive strengths when under sustained academic pressure?",
          "2. Does this combination maintain at least two distinct, realistic degree pathways?",
          "3. Are we taking a course because of peer trends or genuine intellectual aptitude?",
          "4. Does the curriculum choice (e.g. 4 HLs or 4 A Levels) risk causing burnout and depressing total points?",
          "5. Have we reviewed the official undergraduate admissions pages of three target universities?",
        ],
      },
      {
        heading: "4. Where Objective Psychometrics Fit into the Equation",
        paragraphs: [
          "When parent aspirations and student interests seem at odds, objective testing bridges the gap. By evaluating cognitive velocity alongside interest patterns, families can identify intersections of high potential that both parents and students can enthusiastically support.",
        ],
      },
    ],
    relatedSlugs: [
      "ib-vs-a-levels-university-admissions",
      "study-abroad-application-timeline-dubai",
    ],
  },
  "ib-vs-a-levels-university-admissions": {
    slug: "ib-vs-a-levels-university-admissions",
    title: "IB vs A Levels: How Subject Choices Affect University Applications",
    h1: "IB vs A Levels: How Subject Choices Affect University Applications",
    metaTitle: "IB vs A Levels for University Applications | EKAA Rise",
    metaDescription: "Compare subject-choice considerations across IB and A Levels in Dubai, including course depth, breadth, prerequisites and global university admissions.",
    readTime: "8 min read",
    publishDate: "October 2026",
    category: "Admissions",
    summary: "Both the International Baccalaureate (IB) Diploma and British GCE A Levels are recognized gold standards worldwide. But their divergent philosophies—broad interdisciplinary rigour versus specialized subject depth—suit different student profiles.",
    heroImage: "/images/ekaa/articles/curriculum-comparison.webp",
    altText: "Comparative notebooks and academic reference materials illustrating IB and A Level structures",
    sections: [
      {
        heading: "1. Two World-Class Curricula with Divergent Philosophies",
        paragraphs: [
          "In Dubai's international school ecosystem, parents frequently ask: 'Is the IB Diploma or A Levels better for getting into top universities?' The truthful answer is that elite global universities do not have an institutional bias toward one or the other. However, each curriculum requires a fundamentally different student mindset to achieve peak performance.",
          "A Levels reward targeted vertical depth. A student passionate exclusively about STEM can take Mathematics, Further Mathematics, and Physics without having to write literature essays or study a foreign language. In contrast, the IB Diploma rewards well-rounded stamina, requiring 6 subjects spanning mathematics, science, language, humanities, and the arts, plus the Theory of Knowledge essay, Extended Essay, and CAS requirements.",
        ],
      },
      {
        heading: "2. Comparing University Admission Dynamics",
        paragraphs: [
          "How admissions committees in major study-abroad destinations perceive each system:",
        ],
        bulletPoints: [
          "United Kingdom: Both are natively understood. UK universities make offers on 3 A Level grades (e.g. A*AA) or overall IB points (e.g. 38 points with 6,6,6 at Higher Level). IB students often excel at independent university-style research due to the Extended Essay.",
          "United States: US admissions offices appreciate the holistic nature of the IB Diploma, which mirrors their collegiate liberal arts philosophy. However, strong A Level students who achieve top grades and demonstrate vibrant extracurricular leadership are admitted at equal rates.",
          "Canada: Canadian universities convert both readily. IB students with 30–36+ points receive conditional offers, while high A Level grades earn extensive first-year transfer credits.",
        ],
      },
      {
        heading: "3. Which Curriculum Fits Your Student Better?",
        paragraphs: [
          "Consider the IB Diploma if the student possesses balanced capabilities across verbal and quantitative disciplines, manages multi-tasking workloads effectively, and enjoys interdisciplinary enquiry.",
          "Consider A Levels if the student has very pronounced, clear-cut subject strengths (e.g. brilliant in math and sciences but fatigued by literary analysis), or prefers deep academic mastery in fewer subjects.",
        ],
      },
    ],
    relatedSlugs: [
      "choosing-subjects-after-grade-10-dubai",
      "study-abroad-application-timeline-dubai",
    ],
  },
  "study-abroad-application-timeline-dubai": {
    slug: "study-abroad-application-timeline-dubai",
    title: "Study Abroad Application Timeline for Students in Dubai",
    h1: "Study Abroad Application Timeline for Students in Dubai",
    metaTitle: "Study Abroad Application Timeline from Dubai | EKAA Rise",
    metaDescription: "A step-by-step planning guide for school students preparing international university applications from Dubai across Grades 9 through 12.",
    readTime: "7 min read",
    publishDate: "October 2026",
    category: "Planning",
    summary: "Global university admissions success is rarely decided in the final autumn of Grade 12. Learn how to sequence aptitude testing, profile building, university shortlisting, and application submissions across high school.",
    heroImage: "/images/ekaa/articles/timeline-guide.webp",
    altText: "Planning calendar and global map illustrating international application milestones",
    sections: [
      {
        heading: "1. The Multi-Year Arc: Why Starting in Grade 10 or 11 Matters",
        paragraphs: [
          "Many families in Dubai begin considering international universities only when Grade 12 begins. By September of senior year, however, students face a relentless storm of school exams, predicted grade assessments, leadership commitments, and looming application deadlines.",
          "Starting the strategic planning process in Grade 10 or early Grade 11 allows students to pace their efforts: conducting diagnostic psychometric assessments, strengthening academic prerequisites, exploring summer enrichment, and drafting essays with calm precision.",
        ],
      },
      {
        heading: "2. Chronological Roadmap from Dubai",
        paragraphs: [
          "Here is how a measured, low-stress preparation arc unfolds:",
        ],
        bulletPoints: [
          "Grade 10 (Year 11): Cognitive & Interest Discovery. Take a comprehensive psychometric test (such as the AED 100 EKAA Rise assessment) to align academic strengths with Grade 11 subject choices.",
          "Grade 11 Autumn (Year 12): Initial Research & Testing Strategy. Review target countries (UK, US, Canada, Europe, Australia). Decide whether standardized tests (SAT/ACT, IELTS) are required.",
          "Grade 11 Spring / Summer: Shortlisting & Profile Deepening. Build a balanced 10–12 university shortlist (Dream, Target, Safety). Draft Common App personal statements and UCAS drafts.",
          "Grade 12 Autumn (Year 13): Deadlines & Submissions. October 15 for Oxbridge and Medicine; November 1–15 for US Early Decision/Early Action; January 1–15 for US Regular Decision and UCAS standard deadlines.",
          "Grade 12 Spring: Decision Review & Visa Logistics. Compare offers and financial aid; submit housing deposits; finalize UAE attestation and student visa documentation.",
        ],
      },
      {
        heading: "3. Maintaining Balance and Student Wellbeing",
        paragraphs: [
          "The ultimate goal of early planning is not to add pressure, but to eliminate panic. When milestones are broken down into manageable monthly actions, students maintain high grades, enjoy their final school years, and present authentic, compelling applications to the world's finest universities.",
        ],
      },
    ],
    relatedSlugs: [
      "psychometric-tests-for-students-explained",
      "choosing-subjects-after-grade-10-dubai",
    ],
  },
};
