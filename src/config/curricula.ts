export interface CurriculumGuide {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  dubaiContext: string;
  coreStructure: string;
  strategicConsiderations: string[];
  commonMisconceptions: string[];
  samplePathways: {
    targetDegree: string;
    recommendedSubjects: string;
    rationale: string;
  }[];
  questionsToAsk: string[];
}

export const curriculaData: Record<string, CurriculumGuide> = {
  ib: {
    id: "ib",
    name: "IB Diploma Programme (IBDP)",
    badge: "International Baccalaureate",
    tagline: "Breadth across six subject groups with targeted Higher Level specialisation.",
    dubaiContext: "Prominently offered across premier international schools in Dubai (such as Jumeirah English Speaking School, Dubai International Academy, Emirates International School, and GEMS World Academy).",
    coreStructure: "Students select 6 subjects: exactly 3 (or maximum 4) at Higher Level (HL) and 3 at Standard Level (SL), covering Language & Literature, Language Acquisition, Individuals & Societies, Sciences, Mathematics, and the Arts. Plus the DP Core: Theory of Knowledge (TOK), Extended Essay (EE), and Creativity, Activity, Service (CAS).",
    strategicConsiderations: [
      "Higher Level (HL) subjects determine university degree eligibility. For example, UK Engineering and Computer Science require HL Mathematics (Analysis & Approaches) and HL Physics.",
      "Medicine admissions often require HL Chemistry and either HL Biology or HL Mathematics.",
      "Economics and Business at top institutions often require HL Mathematics (Analysis & Approaches preferred over Applications & Interpretation).",
      "Do not overload with 4 HLs unless there is a clear strategic advantage; maintaining a 38+ total diploma score with 3 strong HLs is almost always preferable.",
    ],
    commonMisconceptions: [
      "Myth: 'Any HL Math satisfies university STEM prerequisites.' Fact: Analysis & Approaches (AA) HL is vastly preferred over Applications & Interpretation (AI) for Engineering, Physical Sciences and top Economics courses.",
      "Myth: 'Taking 4 HLs guarantees admission advantage.' Fact: Offers are given on 3 HL scores; a 4th HL can add unnecessary workload and depress overall diploma points.",
    ],
    samplePathways: [
      {
        targetDegree: "Engineering / Computer Science",
        recommendedSubjects: "HL: Math AA, Physics, Computer Science/Chemistry. SL: English Lit, Economics, Spanish/French.",
        rationale: "Ensures full compliance with premier Russell Group, Canadian U15, and US Engineering faculty requirements.",
      },
      {
        targetDegree: "Economics / Finance / Business",
        recommendedSubjects: "HL: Math AA (or AI HL for specific business schools), Economics, History/Business. SL: Physics/Biology, English, Second Language.",
        rationale: "Delivers quantitative rigour required by LSE, Warwick, UCL, Wharton and top Canadian business faculties.",
      },
      {
        targetDegree: "Medicine / Biomedical Sciences",
        recommendedSubjects: "HL: Chemistry, Biology, Math AA (or Physics). SL: English, Psychology, Second Language.",
        rationale: "Fulfills mandatory UK, Irish, and European medical council subject requirements.",
      },
    ],
    questionsToAsk: [
      "Does the student's Math choice (AA vs AI) match their prospective university destination guidelines?",
      "Are the HL subjects realistic for maintaining a competitive overall score (36–42+)?",
      "How will the chosen subject combination affect EE and internal assessment workload in Year 12 and 13?",
    ],
  },
  british: {
    id: "british",
    name: "British Curriculum (GCSE & A Levels)",
    badge: "Cambridge & Edexcel A Levels",
    tagline: "Focused depth and early academic specialisation in 3 to 4 subjects.",
    dubaiContext: "Long-established across prestigious British curriculum schools in Dubai (such as Dubai College, Dubai English Speaking College, Kings' School Al Barsha, and GEMS Wellington International).",
    coreStructure: "Following 8 to 10 IGCSE examinations in Grade 10 (Year 11), students specialize in 3 (occasionally 4) A Level subjects in Year 12 (AS) and Year 13 (A2), allowing intense focus on their intended field of study.",
    strategicConsiderations: [
      "Select subjects with strong complementary synergies (e.g. Mathematics, Physics, Chemistry for Engineering; or History, English Literature, Politics for Law).",
      "Most top universities make offers based on 3 A Level grades (e.g. A*AA or AAA). Taking 4 A Levels is only beneficial if grades do not suffer or if Further Mathematics is the 4th subject.",
      "Facilitating subjects (Mathematics, Further Mathematics, Physics, Chemistry, Biology, English Literature, History) preserve maximum flexibility across global institutions.",
      "A Levels convert readily into advanced standing credits at North American universities.",
    ],
    commonMisconceptions: [
      "Myth: 'You need 4 A Levels to get into Oxford or Cambridge.' Fact: Standard offers are strictly for 3 A Levels (with Further Maths being the common exception for Math/Physics applicants).",
      "Myth: 'A Level Business is required to study Business at university.' Fact: Economics or Mathematics is usually considered more rigorous by elite business faculties.",
    ],
    samplePathways: [
      {
        targetDegree: "Mechanical / Aerospace Engineering",
        recommendedSubjects: "A Levels: Mathematics, Physics, Chemistry (or Further Mathematics).",
        rationale: "The golden standard combination for Imperial College London, Cambridge, Bristol, and top US institutions.",
      },
      {
        targetDegree: "Law / International Relations",
        recommendedSubjects: "A Levels: History, English Literature, Politics (or Economics/Mathematics).",
        rationale: "Cultivates analytical writing, source evaluation, and critical debate expected by elite law faculties.",
      },
      {
        targetDegree: "Computer Science & AI",
        recommendedSubjects: "A Levels: Mathematics, Further Mathematics, Computer Science (or Physics).",
        rationale: "Addresses the intense discrete mathematical foundations required by top global computing departments.",
      },
    ],
    questionsToAsk: [
      "Do the chosen 3 A Levels satisfy the essential prerequisites for the student's top 5 target degree courses?",
      "Is Further Mathematics necessary or advised for the student's chosen technical pathway?",
      "How do the student's IGCSE grades in English Language and Mathematics align with standard university matriculation rules?",
    ],
  },
  american: {
    id: "american",
    name: "American Curriculum & Advanced Placement (AP)",
    badge: "US High School Diploma + AP",
    tagline: "Continuous 4-year cumulative GPA paired with rigorous college-level AP courses.",
    dubaiContext: "Offered at respected Dubai American schools (such as American School of Dubai, GEMS Dubai American Academy, and Collegiate International School).",
    coreStructure: "Students build a 4-year transcript (Grades 9 to 12) fulfilling graduation credit requirements across English, Mathematics, Sciences, Social Studies, World Languages, and Electives. Students enhance academic rigour by taking College Board Advanced Placement (AP) courses in Grades 10–12.",
    strategicConsiderations: [
      "The cumulative GPA (unweighted and weighted) across all four years matters significantly for US admissions.",
      "Course rigour (taking Honours and APs relative to what the high school offers) is the single most critical factor in academic evaluation.",
      "For UK, Canadian and European universities, an American High School Diploma alone is often insufficient without 3 to 5 standardized AP exam scores of 4 or 5.",
      "AP Calculus BC, AP Physics C, AP Chemistry and AP Biology serve as recognized international degree prerequisites.",
    ],
    commonMisconceptions: [
      "Myth: 'Grade 9 does not matter for college.' Fact: US admissions calculate cumulative GPA from Grade 9 through Grade 12; an early dip can lower your 4-year average.",
      "Myth: 'Taking 8 APs with grade B is better than taking 4 APs with grade A.' Fact: Admissions officers look for excellence within rigorous subjects, not reckless course loading.",
    ],
    samplePathways: [
      {
        targetDegree: "Pre-Med / Neuroscience",
        recommendedSubjects: "APs: AP Biology, AP Chemistry, AP Calculus AB/BC, AP Psychology, AP English Language.",
        rationale: "Demonstrates life science proficiency required by competitive pre-health tracks and international biomedical courses.",
      },
      {
        targetDegree: "Data Science & Applied Analytics",
        recommendedSubjects: "APs: AP Calculus BC, AP Statistics, AP Computer Science A, AP Physics 1.",
        rationale: "Combines algorithmic computational reasoning with advanced quantitative calculus and probability.",
      },
    ],
    questionsToAsk: [
      "Does the student's balance of AP and Honours courses demonstrate upward academic trajectory?",
      "Are target international universities expecting specific AP exam scores to validate the American diploma?",
      "Is the high school unweighted vs weighted GPA policy clear to the admissions committees?",
    ],
  },
  cbse: {
    id: "cbse",
    name: "CBSE / Indian Curriculum",
    badge: "Central Board of Secondary Education",
    tagline: "Structured stream specialisation: Science, Commerce, and Humanities.",
    dubaiContext: "Represented by major educational groups in Dubai (such as The Indian High School, GEMS Modern Academy, Delhi Private School, and Our Own English High School).",
    coreStructure: "Following Grade 10 Board examinations, students select one of three defined streams for Grades 11 and 12: Science (PCM/PCB), Commerce (with or without Mathematics), or Humanities/Arts, examined externally in Grade 12 by the CBSE board.",
    strategicConsiderations: [
      "Subject choice in Grade 11 establishes permanent academic boundaries for Grade 12; changing streams midway is challenging.",
      "Mathematics is vital: Commerce students wishing to study Economics or Finance abroad MUST take Mathematics (Standard/Applied) to satisfy international degree prerequisites.",
      "Science students considering international universities should pay close attention to English Language scores and extracurricular profile development.",
      "International university application cycles operate on predicted Grade 12 marks in October–January, months before CBSE board results in May.",
    ],
    commonMisconceptions: [
      "Myth: 'CBSE students cannot apply to liberal arts colleges in the USA.' Fact: US colleges enthusiastically welcome CBSE students who demonstrate holistic interests and leadership.",
      "Myth: 'Commerce without Math is fine for studying Finance abroad.' Fact: Top UK, Canadian, and Australian business programmes require senior secondary Mathematics.",
    ],
    samplePathways: [
      {
        targetDegree: "Commerce / Global Finance",
        recommendedSubjects: "CBSE: Accountancy, Business Studies, Economics, Mathematics, English Core.",
        rationale: "Keeps quantitative options completely open for premier international business and economics degrees.",
      },
      {
        targetDegree: "Biotechnology & Healthcare",
        recommendedSubjects: "CBSE: Physics, Chemistry, Biology, Mathematics (or Biotechnology/Psychology), English.",
        rationale: "PCMB provides universal eligibility across both clinical and engineering/biotech admissions worldwide.",
      },
    ],
    questionsToAsk: [
      "Is Mathematics included in the student's stream to keep international finance and STEM pathways viable?",
      "How will the school prepare early predicted grades for autumn international university application deadlines?",
      "Has the student planned for English proficiency documentation (IELTS/TOEFL) where required?",
    ],
  },
};
