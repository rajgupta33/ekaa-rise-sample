export interface Destination {
  slug: string;
  name: string;
  countryCode: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  tagline: string;
  overview: string;
  heroImage: string;
  altText: string;
  accentColor: string;
  undergraduateFocus: string;
  mastersFocus: string;
  curriculumNotes: {
    curriculum: string;
    note: string;
  }[];
  applicationTimeline: {
    phase: string;
    description: string;
  }[];
  keyHighlights: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const destinations: Record<string, Destination> = {
  uk: {
    slug: "uk",
    name: "United Kingdom",
    countryCode: "GB",
    h1: "Study in the UK from Dubai: University Admissions Guidance",
    metaTitle: "Study in the UK from Dubai | University Admissions Guidance | EKAA Rise",
    metaDescription: "Explore UK course choices, entry criteria and undergraduate (UCAS) or Master's application planning with EKAA Rise in Dubai.",
    tagline: "Academic depth, course-specific admissions, and internationally renowned degrees.",
    overview: "The UK higher education system is distinguished by academic precision and early course focus. Rather than general education years, students apply directly to a specific subject course (e.g. Mechanical Engineering, Law, Economics, Biomedical Science). For students in Dubai from British, IB, American or CBSE schools, this makes curriculum subject choices and demonstrated academic curiosity critical from the start.",
    heroImage: "/images/ekaa/destinations/uk.webp",
    altText: "Historic and modern collegiate courtyard of a university in the United Kingdom",
    accentColor: "#1B3B52",
    undergraduateFocus: "Undergraduate applications are managed centrally through UCAS (up to five course choices). Most 3-year degrees in England/Wales and 4-year degrees in Scotland require specific subject prerequisites (such as Mathematics at Higher Level or A Level for STEM, or Essay-based subjects for Humanities).",
    mastersFocus: "Taught Master's (MSc, MA, LLM) typically run 1 full year (12 months), providing rigorous, fast-track academic qualification with structured research dissertations.",
    curriculumNotes: [
      {
        curriculum: "British / A Levels",
        note: "Direct alignment with UK expectations. Typical offers require 3 A Levels (e.g. AAA to ABB). Subject combinations must mirror university prerequisite lists.",
      },
      {
        curriculum: "IB Diploma",
        note: "Highly valued across Russell Group universities. Points range from 32 to 42, with strict minimum score requirements in Higher Level (HL) subjects.",
      },
      {
        curriculum: "American High School / AP",
        note: "High school diploma must usually be supplemented by 3 to 5 relevant Advanced Placement (AP) exams with scores of 4 or 5.",
      },
      {
        curriculum: "CBSE / CISCE",
        note: "Many top UK universities accept Grade 12 board marks (typically 80% to 95% depending on course and institution).",
      },
    ],
    applicationTimeline: [
      { phase: "October 15 (Year 13 / Grade 12)", description: "UCAS deadline for Oxford, Cambridge, Medicine, Dentistry and Veterinary science courses." },
      { phase: "Late January", description: "Standard equal consideration deadline for most undergraduate degree courses." },
      { phase: "Spring / Early Summer", description: "Offer decisions received, firm and insurance choices selected, student visa preparation starts." },
    ],
    keyHighlights: [
      "Fast-track 3-year bachelor's degrees (4 years in Scotland) and 1-year taught master's",
      "Centralised UCAS application with a single cohesive personal statement",
      "Clear conditional offer thresholds based on predicted or final exam grades",
      "Strong historical alignment with Dubai international school curricula",
    ],
    faqs: [
      {
        question: "Can I apply to both Oxford and Cambridge in the same cycle?",
        answer: "No, under UCAS regulations undergraduate applicants can apply to Oxford or Cambridge, but not both in the same academic year.",
      },
      {
        question: "Do UK universities require English language tests for Dubai students?",
        answer: "Students with strong grades in GCSE/IGCSE English (typically grade B/6+) or IB English are often exempted; otherwise IELTS Academic or alternative recognised tests are required.",
      },
      {
        question: "What is the difference between Russell Group and other UK universities?",
        answer: "The Russell Group is an association of 24 research-intensive UK universities. While prestigious, excellent specialised courses and strong graduate outcomes exist across many modern UK institutions.",
      },
    ],
  },
  usa: {
    slug: "usa",
    name: "United States",
    countryCode: "US",
    h1: "Study in the USA from Dubai: College & University Guidance",
    metaTitle: "Study in the USA from Dubai | College Admissions Guide | EKAA Rise",
    metaDescription: "Understand US college choices, holistic applications, Common App essays and programme fit for students preparing from Dubai.",
    tagline: "Intellectual flexibility, holistic review, and interdisciplinary breadth.",
    overview: "American higher education prioritises personal exploration, interdisciplinary discovery and campus engagement. Students often apply to colleges rather than fixed, unalterable majors, allowing them to explore subjects before declaring a major in their sophomore or junior year. Admissions committees look holistically at the student's 4-year high school trajectory, personal essays, intellectual curiosity and extracurricular contribution.",
    heroImage: "/images/ekaa/destinations/usa.webp",
    altText: "Sunlit American university campus lawn with collegiate brick and stone buildings",
    accentColor: "#1A3A54",
    undergraduateFocus: "Four-year bachelor's degree (BA / BS) combining general education requirements with your chosen major and elective minors. Applications are submitted via the Common Application, Coalition Application, or university-specific portals.",
    mastersFocus: "Graduate programmes (MS, MA, MBA) range from 1 to 2 years, requiring transcripts, statements of purpose, letters of recommendation, and in some disciplines GRE/GMAT scores or portfolios.",
    curriculumNotes: [
      {
        curriculum: "IB Diploma & American High School",
        note: "Rigorous course selections (HL courses, AP courses, Honours) are evaluated within the context of your school profile and 4-year cumulative transcript.",
      },
      {
        curriculum: "British / A Levels",
        note: "IGCSE and AS/A Level transcripts are converted into US academic credits. High A Level grades frequently earn advanced collegiate credit.",
      },
      {
        curriculum: "CBSE / Indian Boards",
        note: "Grades 9 through 12 mark sheets are evaluated to build the 4-year transcript, alongside school recommendations and standardized test optional policies.",
      },
    ],
    applicationTimeline: [
      { phase: "November 1–15 (Early Action / Early Decision)", description: "Accelerated deadlines for students with strong completed profiles seeking early outcomes." },
      { phase: "January 1–15 (Regular Decision)", description: "Primary application deadline for the vast majority of US universities and liberal arts colleges." },
      { phase: "March–April", description: "Admission decisions released; financial aid and campus fit evaluated before the May 1 National Candidate Reply Date." },
    ],
    keyHighlights: [
      "Holistic evaluation beyond raw grades: essays, leadership, activities, and recommendation letters",
      "Curricular flexibility to combine diverse interests (e.g. Computer Science + Philosophy)",
      "Test-optional and test-flexible admissions policies widely adopted",
      "Extensive campus research, internship, and collegiate extracurricular ecosystems",
    ],
    faqs: [
      {
        question: "Is SAT or ACT required for US universities?",
        answer: "Many US institutions continue to operate test-optional policies, though several prominent universities (such as MIT, Dartmouth, Yale, Purdue) have reinstated standardized testing requirements. EKAA helps evaluate your testing strategy per target institution.",
      },
      {
        question: "What is the difference between Early Decision and Early Action?",
        answer: "Early Decision (ED) is legally binding—if accepted, you commit to enroll and withdraw other applications. Early Action (EA) is non-binding and allows you to compare offers until May 1.",
      },
    ],
  },
  canada: {
    slug: "canada",
    name: "Canada",
    countryCode: "CA",
    h1: "Study in Canada from Dubai: Admissions & Programme Planning",
    metaTitle: "Study in Canada from Dubai | University Application Guidance | EKAA Rise",
    metaDescription: "Explore Canadian university pathways, co-op work-term opportunities, provincial entry requirements and realistic planning from Dubai.",
    tagline: "Academic excellence, world-class research, and practical co-op pathways.",
    overview: "Canada's public universities are known globally for rigorous academics, predictable fee structures, and safe, multicultural campus communities. From large U15 research universities (e.g. Toronto, UBC, McGill) to medium-sized universities renowned for experiential learning (e.g. Waterloo, McMaster), Canadian degrees provide globally recognised qualifications.",
    heroImage: "/images/ekaa/destinations/canada.webp",
    altText: "Modern Canadian university building surrounded by vibrant seasonal trees",
    accentColor: "#17364B",
    undergraduateFocus: "Typically 4-year honours bachelor's degrees. Many Canadian programmes feature integrated Co-op (cooperative education), alternating academic study terms with paid professional work semesters.",
    mastersFocus: "Direct thesis-based Master's (MSc, MA) or course-based professional degrees (MEng, MFin, MBA) with clear research or industry-focused specialisations.",
    curriculumNotes: [
      {
        curriculum: "IB Diploma",
        note: "Competitive programmes look for total scores typically between 30 and 38+, with specific grade minimums in prerequisite math and science courses.",
      },
      {
        curriculum: "British / A Levels",
        note: "Minimum 5 IGCSEs and 2 to 3 A Levels required. Certain courses (Engineering, Business) demand specific A Level Math or Physics grades.",
      },
      {
        curriculum: "CBSE / ICSE",
        note: "Strong alignment with Canadian entry requirements. Class 10 and predicted/final Class 12 marks form the core of admission evaluation.",
      },
    ],
    applicationTimeline: [
      { phase: "November to Mid-January", description: "Early admission deadlines for universities like Toronto, UBC, and Ontario universities via OUAC." },
      { phase: "February to March", description: "Document submission portals, supplemental essays, video interviews and mid-year grades uploaded." },
      { phase: "April to May", description: "Conditional offers issued with explicit grade maintenance expectations." },
    ],
    keyHighlights: [
      "Co-op work terms providing genuine hands-on industry experience during degrees",
      "Standardised provincial admission portals like OUAC in Ontario",
      "Strong STEM, Business, Computer Science, and Environmental research faculties",
      "Transparent admission averages published by faculty and programme",
    ],
    faqs: [
      {
        question: "How does the Co-op system work in Canada?",
        answer: "Co-op alternates classroom semesters with full-time, paid work terms in your field of study. You graduate with 12 to 16 months of verified work experience.",
      },
      {
        question: "What are the latest study permit rules for Canada?",
        answer: "Canada now requires a Provincial Attestation Letter (PAL) from the provincial government for most undergraduate study permit applications. Up-to-date IRCC guidelines should be reviewed closely.",
      },
    ],
  },
  australia: {
    slug: "australia",
    name: "Australia",
    countryCode: "AU",
    h1: "Study in Australia from Dubai: University Application Planning",
    metaTitle: "Study in Australia from Dubai | University Admissions Help | EKAA Rise",
    metaDescription: "Explore Australian university courses, Group of Eight (Go8) institutions, eligibility, intakes and study planning from Dubai.",
    tagline: "Innovative research, flexible double degrees, and global city campuses.",
    overview: "Australia's top universities, including the prestigious Group of Eight (Go8) (such as Melbourne, Sydney, UNSW, ANU, Queensland), combine world-class research facilities with vibrant campus lifestyles. With primary intakes in February (Semester 1) and July (Semester 2), Australian universities offer exceptional alignment for southern and northern hemisphere school calendars.",
    heroImage: "/images/ekaa/destinations/australia.webp",
    altText: "Sunny modern Australian university campus courtyard with airy architecture",
    accentColor: "#1C3E52",
    undergraduateFocus: "3-year bachelor's degrees, or 4-year combined / double degrees (e.g. Bachelor of Commerce & Bachelor of Science, or Law & Arts) allowing students to graduate with two distinct qualifications.",
    mastersFocus: "1.5 to 2-year postgraduate degrees with strong practical industry integration, clinical placements, and accredited professional bodies.",
    curriculumNotes: [
      {
        curriculum: "IB Diploma",
        note: "Direct conversion to the Australian Tertiary Admission Rank (ATAR). Scores of 30+ grant entry into wide ranges of competitive courses.",
      },
      {
        curriculum: "British / A Levels",
        note: "Aggregate score calculated from best 3 A Levels. Clear published cut-offs for almost every degree programme.",
      },
      {
        curriculum: "CBSE / CISCE",
        note: "Calculated from best 4 academic subjects in Class 12 board examinations (excluding physical education and work experience).",
      },
    ],
    applicationTimeline: [
      { phase: "April to September", description: "Applications open for the primary February (Semester 1) intake of the following year." },
      { phase: "October to December", description: "Offers issued, acceptances finalized, and Confirmation of Enrolment (CoE) generated for visa filing." },
      { phase: "February", description: "Semester 1 orientation and start of academic teaching." },
    ],
    keyHighlights: [
      "Popular double-degree options completing two qualifications in 4 to 5 years",
      "Two main intakes per calendar year (February and July) providing intake flexibility",
      "Group of Eight (Go8) universities ranked consistently in the global top 50–100",
      "Predictable academic cut-offs based directly on school completion grades",
    ],
    faqs: [
      {
        question: "Can Dubai students start in July instead of February?",
        answer: "Yes, many Australian undergraduate and postgraduate courses offer a mid-year July intake, which matches well with students graduating high school in June.",
      },
    ],
  },
  germany: {
    slug: "germany",
    name: "Germany",
    countryCode: "DE",
    h1: "Study in Germany from Dubai: Degree & Eligibility Guidance",
    metaTitle: "Study in Germany from Dubai | Eligibility & University Guide | EKAA Rise",
    metaDescription: "Understand German degree options, English-taught programmes, academic eligibility (Abitur equivalence) and application preparation.",
    tagline: "Engineering prestige, tuition-free public universities, and rigorous science.",
    overview: "Germany is a global leader in technology, engineering, data science and natural sciences. Most state universities (Universitäten) charge minimal or zero tuition fees for both EU and non-EU students (with modest administrative semester fees). However, academic qualification equivalence (Abitur equivalence) is strictly monitored by the Central Office for Foreign Education (anabin).",
    heroImage: "/images/ekaa/destinations/germany.webp",
    altText: "Contemporary German university research facility and glass-fronted library",
    accentColor: "#122C3C",
    undergraduateFocus: "3 to 3.5-year bachelor's degrees. While many engineering and scientific degrees are taught in German, the number of fully English-taught bachelor's programmes has grown significantly in international universities and public technical universities.",
    mastersFocus: "2-year Master of Science (MSc) degrees, a vast majority of which in STEM and Business fields are taught 100% in English with no tuition fees at public universities.",
    curriculumNotes: [
      {
        curriculum: "IB Diploma",
        note: "Must strictly satisfy the Kultusministerkonferenz (KMK) requirements (specific HL subjects, minimum language and math requirements) for direct university entrance.",
      },
      {
        curriculum: "British / A Levels",
        note: "Must meet specific combinations of 3–4 subjects (including language, mathematics/science) for direct entrance; otherwise a 1-year preparatory Studienkolleg is required.",
      },
      {
        curriculum: "CBSE / CISCE",
        note: "Generally requires completion of 1 year of recognized higher education or attending a Studienkolleg + Feststellungsprüfung (FSP) before university entry.",
      },
    ],
    applicationTimeline: [
      { phase: "April to May", description: "Document verification via uni-assist and preliminary review documentation (VPD)." },
      { phase: "July 15", description: "Firm national deadline for the winter semester starting in October." },
      { phase: "August to September", description: "Admission letters issued and blocked bank account setup for visa application." },
    ],
    keyHighlights: [
      "Low to zero tuition fees at world-renowned public universities and TU9 technical institutes",
      "Strong research partnerships with industry leaders (Siemens, Bosch, BMW, Fraunhofer)",
      "Vast catalogue of English-taught Master's degrees in engineering, IT and business",
      "Rigorous qualification matching via anabin and uni-assist portals",
    ],
    faqs: [
      {
        question: "Can I study in Germany completely in English?",
        answer: "Yes, hundreds of Master's programmes and an increasing number of Bachelor's degrees are taught entirely in English. Learning basic conversational German is recommended for daily life and internships.",
      },
    ],
  },
  ireland: {
    slug: "ireland",
    name: "Ireland",
    countryCode: "IE",
    h1: "Study in Ireland from Dubai: University Admissions Guidance",
    metaTitle: "Study in Ireland from Dubai | University Admissions Guide | EKAA Rise",
    metaDescription: "Explore Irish universities (Trinity College, UCD), tech hub connections, degree pathways and application planning from Dubai.",
    tagline: "European headquarters of global tech, world-renowned heritage, and vibrant campuses.",
    overview: "Ireland is the only native English-speaking country in the European Union, hosting the European headquarters of Google, Apple, Meta, Pfizer, and Microsoft. Its historic universities, led by Trinity College Dublin (TCD), University College Dublin (UCD), University of Galway and University College Cork (UCC), offer 3 to 4-year honours bachelor's degrees and 1-year master's degrees with direct links into Silicon Docks tech and pharmaceutical employers.",
    heroImage: "/images/ekaa/destinations/ireland.webp",
    altText: "Traditional stone academic courtyard and green library lawn in an Irish university",
    accentColor: "#153347",
    undergraduateFocus: "3 to 4-year Honours Bachelor's Degrees with early focus in specialized areas (Computer Science, Pharmacy, Finance, International Commerce).",
    mastersFocus: "1-year taught master's degrees offering intensive academic coursework connected directly to Dublin's multinational commercial ecosystem.",
    curriculumNotes: [
      {
        curriculum: "IB Diploma & A Levels",
        note: "Direct admission conversion matrices. High demand for STEM requires specific higher-level mathematics scores.",
      },
      {
        curriculum: "American High School & CBSE",
        note: "Evaluated holistically based on senior secondary exam results and school transcripts.",
      },
    ],
    applicationTimeline: [
      { phase: "November to February", description: "Direct international applications or CAO portal submissions open." },
      { phase: "March to April", description: "Assessment of academic transcripts and issuance of conditional offers." },
      { phase: "May to June", description: "Offer acceptance and preparation of Irish student visa documentation." },
    ],
    keyHighlights: [
      "The English-speaking gateway to the European Union and multinational employment",
      "Global top-ranked universities including Trinity College Dublin and UCD",
      "1-year intensive Master's programmes with high career applicability",
      "Thriving innovation hubs in Dublin, Cork and Galway",
    ],
    faqs: [
      {
        question: "Why choose Ireland over other European study destinations?",
        answer: "Ireland combines a fully English-speaking environment with access to the European single market, renowned academic traditions, and major tech and pharma corporate headquarters.",
      },
    ],
  },
};
