import { questions as generalQuestions, type Question } from './assessment';

export type GradeAssessment = {
  id: string;
  grade: string;
  title: string;
  description: string;
  focus: string;
  minutes: string;
  questions: Question[];
  nextSteps: string[];
  junior: boolean;
};

// Each grade has original activity items and its own reasoning problems.
// Shared reflection items measure the same dimensions across school stages.
const activities: Record<number, string[]> = {
  4: ['Make a bridge with paper and blocks.', 'Plant seeds and look after them.', 'Find out which objects float in water.', 'Look closely at insects and draw what you see.', 'Invent a character for a picture story.', 'Make a colourful pattern with shapes.', 'Show a new classmate where things are.', 'Explain the rules of a game to a friend.', 'Suggest a game for your group to play.', 'Invite classmates to join a class activity.', 'Sort a collection by colour or size.', 'Keep track of the books your group borrows.'],
  5: ['Make a moving model with cardboard and string.', 'Measure wood or paper for a craft project.', 'Compare how plants grow in light and shade.', 'Work out why a simple machine moves.', 'Create a comic strip with your own ending.', 'Make sounds and music for a short story.', 'Help a younger pupil practise reading.', 'Plan a kind welcome for a new pupil.', 'Present a class idea for a fundraising stall.', 'Help your group choose a project to try.', 'Record the scores for a class tournament.', 'Plan which materials a craft group needs.'],
  6: ['Build a model shelter that can stand in wind.', 'Assemble a simple circuit with a teacher.', 'Compare the results of two science experiments.', 'Use a chart to investigate a school question.', 'Design a book cover for a new audience.', 'Write and act out a short scene.', 'Help a friend practise a difficult skill.', 'Create instructions that younger pupils can follow.', 'Persuade your class to try a new club.', 'Organise the jobs for a group event.', 'Create a timetable for several activities.', 'Check a class survey for missing answers.'],
  7: ['Improve a model so it uses fewer materials.', 'Try a practical challenge involving gears or levers.', 'Investigate how changing one variable affects a result.', 'Compare two explanations using evidence.', 'Design a poster that communicates without many words.', 'Create a short animation or illustrated story.', 'Help classmates work through a disagreement.', 'Teach a club member a skill you enjoy.', 'Present an idea for improving your school.', 'Coordinate a small group challenge.', 'Organise survey responses in a spreadsheet.', 'Track supplies and spending for a class activity.'],
  8: ['Prototype a useful object for a school problem.', 'Test how different materials perform in a design.', 'Investigate a local environmental question.', 'Explore patterns in a small public dataset.', 'Design a visual identity for a school club.', 'Create a story that presents different viewpoints.', 'Plan an activity that includes quieter classmates.', 'Support a peer who is learning a new subject.', 'Pitch a student enterprise idea.', 'Lead a team through a project deadline.', 'Build a spreadsheet to organise project tasks.', 'Check a project budget against its receipts.'],
  9: ['Design a product with clear practical constraints.', 'Troubleshoot a model or device that is not working.', 'Compare scientific claims and the evidence behind them.', 'Use data to investigate a question about your community.', 'Build a portfolio of original design ideas.', 'Create a short film about an issue you care about.', 'Run a peer study session on a difficult topic.', 'Plan a volunteering activity around a real need.', 'Present a proposal to a student council.', 'Test demand for a small student-run service.', 'Organise information for a research project.', 'Compare costs and schedules for two event plans.'],
  10: ['Explore how an engineering design solves a real problem.', 'Build and test a prototype with measurable requirements.', 'Compare the methods used in two research projects.', 'Analyse a dataset and explain an unexpected result.', 'Develop a design brief into a portfolio piece.', 'Write an article that makes a complex idea accessible.', 'Interview someone about their experience in a helping profession.', 'Create a learning resource for younger students.', 'Build a business proposal with a clear audience.', 'Lead a project that needs negotiation and decisions.', 'Compare degree prerequisites in a structured table.', 'Create a reliable system for tracking a multi-stage project.'],
  11: ['Evaluate the practical trade-offs in an engineering project.', 'Test a technical solution and document its limitations.', 'Develop a research question for an extended project.', 'Use statistics to assess the strength of a claim.', 'Produce a portfolio project and explain your creative process.', 'Create a media piece for a specific audience and purpose.', 'Design a peer mentoring session around individual needs.', 'Investigate how a community service supports its users.', 'Pitch a project to people who could support it.', 'Coordinate a team with different roles and priorities.', 'Plan milestones for several university-related tasks.', 'Audit a project record for inconsistencies.'],
  12: ['Investigate a practical challenge faced by a professional team.', 'Create a technical prototype to include in a course portfolio.', 'Critically review research connected to a possible degree.', 'Explain a data-based conclusion and its uncertainty.', 'Develop a final creative project with feedback from an audience.', 'Communicate a specialist topic through a clear visual narrative.', 'Evaluate how a support programme meets people’s needs.', 'Mentor a younger student through an important decision.', 'Present a proposal with a budget and a delivery plan.', 'Manage a project where stakeholders want different outcomes.', 'Compare course structures and application requirements systematically.', 'Maintain accurate records across a complex project.'],
};

type ReasoningItem = [string, string, string[], number, string];
const reasoning: Record<number, ReasoningItem[]> = {
  4: [
    ['Numerical', 'There are 4 bags with 3 marbles in each. How many marbles are there?', ['7', '12', '9', '16'], 1, 'Four groups of three make 12.'],
    ['Numerical', 'A ribbon is 20 cm long. You cut off 7 cm. How much is left?', ['13 cm', '27 cm', '14 cm', '7 cm'], 0, '20 minus 7 is 13.'],
    ['Logical', 'What comes next: 2, 4, 6, 8, …?', ['9', '12', '10', '16'], 2, 'Add 2 each time.'],
    ['Logical', 'A red box is inside a blue box. Where is the red box?', ['Above the blue box', 'Inside the blue box', 'Beside the blue box', 'We cannot tell'], 1, 'The statement tells us the red box is inside.'],
    ['Verbal', 'Which word means the opposite of “empty”?', ['Quiet', 'Small', 'Full', 'Open'], 2, 'Full is the opposite of empty.'],
    ['Verbal', '“Mina packed her bag before lunch.” What happened first?', ['Lunch', 'Packing the bag', 'Going home', 'We cannot tell'], 1, 'Before lunch means she packed first.'],
  ],
  5: [
    ['Numerical', 'A class shares 24 cards equally among 6 pupils. How many does each get?', ['3', '4', '6', '8'], 1, '24 divided by 6 is 4.'],
    ['Numerical', 'What is one quarter of 28?', ['4', '14', '7', '21'], 2, 'A quarter is one of four equal parts: 28 ÷ 4 = 7.'],
    ['Logical', 'What comes next: 5, 10, 15, 20, …?', ['21', '30', '24', '25'], 3, 'Add 5 each time.'],
    ['Logical', 'Aisha is ahead of Ben in a queue. Ben is ahead of Chen. Who is first among these three?', ['Aisha', 'Ben', 'Chen', 'Cannot tell'], 0, 'The order is Aisha, Ben, Chen.'],
    ['Verbal', 'Which word is closest in meaning to “tiny”?', ['Heavy', 'Small', 'Fast', 'Bright'], 1, 'Tiny means very small.'],
    ['Verbal', '“Only the blue team brought pencils.” Which team definitely brought pencils?', ['Red', 'Green', 'Blue', 'Every team'], 2, 'The sentence names the blue team.'],
  ],
  6: [
    ['Numerical', 'A bottle holds 1.5 litres. How much do 4 full bottles hold?', ['4.5 litres', '6 litres', '5.5 litres', '7 litres'], 1, '1.5 × 4 = 6 litres.'],
    ['Numerical', 'A club has 40 members. Half attend on Monday. How many attend?', ['10', '30', '20', '25'], 2, 'Half of 40 is 20.'],
    ['Logical', 'What comes next: 1, 4, 7, 10, …?', ['11', '12', '13', '14'], 2, 'The difference between terms is 3.'],
    ['Logical', 'Every library helper wears a badge. Sam is a library helper. What follows?', ['Sam owns the library', 'Sam wears a badge', 'Everyone with a badge is a helper', 'Sam reads every book'], 1, 'The rule applies to Sam because Sam is a helper.'],
    ['Verbal', 'Which word is closest in meaning to “select”?', ['Choose', 'Forget', 'Carry', 'Repeat'], 0, 'Select means choose.'],
    ['Verbal', '“The match was postponed because of rain.” What caused the delay?', ['The players', 'The score', 'The rain', 'The crowd'], 2, 'Because of rain gives the reason for the postponement.'],
  ],
  7: [
    ['Numerical', 'What is 20% of 150?', ['20', '25', '30', '35'], 2, 'One fifth of 150 is 30.'],
    ['Numerical', 'The ratio of red to blue counters is 2:3. There are 25 counters. How many are red?', ['5', '10', '15', '20'], 1, 'Five equal parts total 25. Two parts total 10.'],
    ['Logical', 'What comes next: 2, 6, 18, 54, …?', ['108', '72', '162', '216'], 2, 'Multiply by 3 each time.'],
    ['Logical', 'You face east and turn left, then turn left again. Which direction are you facing?', ['East', 'North', 'South', 'West'], 3, 'East to north to west.'],
    ['Verbal', 'Which word is closest in meaning to “accurate”?', ['Quick', 'Correct', 'Complicated', 'Popular'], 1, 'Accurate means correct or precise.'],
    ['Verbal', '“Although the route was longer, it was safer.” What is the main contrast?', ['Length and safety', 'Speed and cost', 'Weather and time', 'Distance and colour'], 0, 'The sentence contrasts greater length with greater safety.'],
  ],
  8: [
    ['Numerical', 'An item costs 80 units and has a 15% discount. What is the new price?', ['65', '68', '72', '75'], 1, '15% of 80 is 12. Subtracting 12 gives 68.'],
    ['Numerical', 'A cyclist covers 18 km in 1.5 hours. What is the average speed?', ['9 km/h', '12 km/h', '15 km/h', '27 km/h'], 1, 'Speed is distance divided by time: 18 ÷ 1.5 = 12.'],
    ['Logical', 'What comes next: 1, 4, 9, 16, …?', ['20', '24', '25', '32'], 2, 'These are square numbers: the next is 5² = 25.'],
    ['Logical', 'No members of Group A are in Group B. Lina is in Group A. What must be true?', ['Lina leads Group A', 'Lina is not in Group B', 'Group B is empty', 'Lina is in both groups'], 1, 'The two groups have no members in common.'],
    ['Verbal', 'Which word is closest in meaning to “infer”?', ['Copy exactly', 'Conclude from evidence', 'Refuse to answer', 'Remember a date'], 1, 'To infer is to reach a conclusion from evidence.'],
    ['Verbal', '“The proposal is feasible, but expensive.” Which statement is supported?', ['It cannot be done', 'It can be done, though it costs a lot', 'It has already succeeded', 'It has no disadvantages'], 1, 'Feasible means possible to carry out.'],
  ],
  9: [
    ['Numerical', 'A value increases from 120 to 150. What is the percentage increase?', ['20%', '25%', '30%', '50%'], 1, 'The increase is 30, and 30 ÷ 120 × 100 = 25%.'],
    ['Numerical', 'Solve 3x + 7 = 28. What is x?', ['5', '6', '7', '9'], 2, 'Subtract 7 and divide 21 by 3.'],
    ['Logical', 'What comes next: 2, 3, 5, 8, 12, …?', ['14', '16', '17', '20'], 2, 'The differences are 1, 2, 3, 4, so the next difference is 5.'],
    ['Logical', 'If a device is charging, its light is on. The light is off. What follows?', ['The device is charging', 'The device is not charging', 'The device is broken', 'The battery is full'], 1, 'Charging requires the light to be on, so an off light rules out charging under this rule.'],
    ['Verbal', 'Which word is closest in meaning to “ambiguous”?', ['Certain', 'Open to more than one interpretation', 'Very brief', 'Irrelevant'], 1, 'Ambiguous wording can have more than one meaning.'],
    ['Verbal', 'A report says “Most respondents preferred option A.” What can you conclude?', ['All respondents chose A', 'More than half preferred A', 'A is objectively best', 'Nobody preferred B'], 1, 'Most means more than half, but does not mean everyone.'],
  ],
  10: [
    ['Numerical', 'A price of 100 rises by 10%, then falls by 10%. What is the final price?', ['100', '99', '90', '101'], 1, '100 × 1.1 × 0.9 = 99.'],
    ['Numerical', 'The mean of five scores is 16. Four scores total 62. What is the fifth score?', ['16', '17', '18', '20'], 2, 'The total is 5 × 16 = 80. The remaining score is 80 − 62 = 18.'],
    ['Logical', 'Some artists are scientists. All scientists in a club are readers. Must some artists in that club be readers?', ['Yes, always', 'No, the artists who are scientists may not be in the club', 'All artists must be readers', 'No scientists are readers'], 1, 'The first statement does not place those people in the club.'],
    ['Logical', 'A task needs P before Q, and Q before R. Which order is valid?', ['Q, P, R', 'R, Q, P', 'P, Q, R', 'P, R, Q'], 2, 'Both ordering conditions require P, then Q, then R.'],
    ['Verbal', 'Which statement is a hypothesis that can be tested?', ['Blue is the nicest colour', 'Plants given more light will grow taller over two weeks', 'Science is interesting', 'Gardens should be beautiful'], 1, 'Light and height can be measured in a defined comparison.'],
    ['Verbal', '“Attendance increased after the new programme began.” Does this alone prove the programme caused the increase?', ['Yes', 'No, other factors could explain the change', 'It proves the programme failed', 'It proves everyone attended'], 1, 'Sequence in time alone does not establish cause.'],
  ],
  11: [
    ['Numerical', 'A course grade is 40% coursework and 60% exam. Scores are 80 and 70. What is the weighted grade?', ['72', '74', '75', '76'], 1, '0.4 × 80 + 0.6 × 70 = 74.'],
    ['Numerical', 'Two fair coins are tossed. What is the probability of exactly one head?', ['1/4', '1/2', '3/4', '1'], 1, 'HT and TH are two of four equally likely outcomes.'],
    ['Logical', 'A project can start only if funding and approval are both secured. Funding is secured, but approval is pending. Can it start under this rule?', ['Yes', 'No', 'Only on a weekday', 'Only with volunteers'], 1, 'Both conditions are required, and approval has not been secured.'],
    ['Logical', 'What comes next: 3, 7, 15, 31, …?', ['47', '62', '63', '65'], 2, 'Multiply by 2 and add 1 each time.'],
    ['Verbal', 'A study surveyed only members of a sports club about exercise habits. What limits generalising its result to all students?', ['The sample may not represent all students', 'Surveys never give information', 'Exercise cannot be measured', 'Every student belongs to the club'], 0, 'Club members may have different exercise habits from other students.'],
    ['Verbal', '“The evidence is consistent with the explanation.” What does this most carefully mean?', ['The explanation is certainly the only one', 'The evidence fits the explanation, but alternatives may remain', 'There is no evidence', 'The explanation has been disproved'], 1, 'Consistency supports an explanation without proving it uniquely true.'],
  ],
  12: [
    ['Numerical', 'A project spends 30% of its budget on materials and 25% on travel. If 900 units remain, what was the total budget?', ['1,500', '1,800', '2,000', '2,250'], 2, '45% remains. 900 ÷ 0.45 = 2,000.'],
    ['Numerical', 'A test has 4 equally likely outcomes on each of two independent trials. What is the probability of one specified outcome on both trials?', ['1/4', '1/8', '1/16', '1/2'], 2, 'Multiply the independent probabilities: 1/4 × 1/4 = 1/16.'],
    ['Logical', 'Exactly one of A and B is true. A is false. What follows?', ['B is true', 'B is false', 'Both are false', 'Neither can be known'], 0, 'Exactly one must be true, so it must be B.'],
    ['Logical', 'A team needs at least one designer and one programmer. Jo can do both. Can Jo alone meet these skill requirements?', ['Yes', 'No, two people are explicitly required', 'Only with a manager', 'Only if Jo is a researcher'], 0, 'The requirements specify skills, not a minimum number of people.'],
    ['Verbal', 'An argument claims a course is best because it has the most applicants. Which assumption needs checking?', ['Popularity reliably indicates course quality or fit', 'Applicants exist', 'Courses have names', 'Applications can be counted'], 0, 'Popularity alone does not establish quality or suitability.'],
    ['Verbal', 'Two reports reach different conclusions from the same data. What is the most useful first step?', ['Choose the more confident report', 'Compare their methods and assumptions', 'Ignore both automatically', 'Average the conclusions without checking'], 1, 'Different methods or assumptions can explain the disagreement.'],
  ],
};

const gradeDescriptions: Record<number, [string, string, string]> = {
  4: ['My curiosity map', 'Discover favourite activities, ways to learn, and simple problem-solving.', 'Try new activities with a trusted adult.'],
  5: ['Discover what I enjoy', 'Explore growing interests through familiar school and everyday activities.', 'Choose a new club, book or hands-on activity.'],
  6: ['My strengths in action', 'Reflect on projects, teamwork and learning as school becomes more varied.', 'Notice which parts of a project give you energy.'],
  7: ['Explore my possibilities', 'Connect interests with school projects and new experiences.', 'Explore broadly before thinking about subject choices.'],
  8: ['My subject discovery', 'Explore the activities and subjects you want to understand more deeply.', 'Compare subject interests through small experiments.'],
  9: ['My subject direction', 'Reflect on emerging interests, project habits and possible study areas.', 'Build questions for a subject-choice conversation.'],
  10: ['My subject-choice compass', 'Explore interests and reasoning alongside the subject decisions ahead.', 'Compare possible subject combinations with your school.'],
  11: ['My degree exploration', 'Connect projects, motivations and interests with possible degree areas.', 'Investigate course content and relevant experience.'],
  12: ['My next-chapter plan', 'Reflect on your direction as you compare courses and prepare your next move.', 'Turn a course shortlist into a practical plan.'],
};

const dimensions = ['Practical', 'Investigative', 'Creative', 'Social', 'Enterprising', 'Organised'];
const juniorWorking = [
  ['Curiosity', 'I like finding out about something new.', 'I enjoy asking how things work.'],
  ['Planning', 'I gather what I need before starting a task.', 'I check that I have finished each part of a task.'],
  ['Collaboration', 'I listen when a classmate has a different idea.', 'I enjoy making something with other people.'],
  ['Initiative', 'I am willing to try a task that is new to me.', 'I share an idea when my group needs help getting started.'],
];
const juniorMotivators = [
  ['Impact', 'I feel pleased when my work helps someone.', 'Making things better for my class matters to me.'],
  ['Autonomy', 'I like choosing how to do part of a project.', 'I enjoy trying my own ideas.'],
  ['Growth', 'Learning a new skill makes me feel proud.', 'I like seeing how I improve with practice.'],
  ['Stability', 'I like knowing what will happen next in a task.', 'Clear instructions help me feel ready to begin.'],
];

export const gradeAssessments: GradeAssessment[] = Object.entries(gradeDescriptions).map(([gradeText, description]) => {
  const grade = Number(gradeText);
  const id = `grade-${grade}`;
  const junior = grade <= 7;
  const interestItems: Question[] = activities[grade].map((text, index) => ({
    id: `${id}-interest-${index}`, section: 'Interests', dimension: dimensions[Math.floor(index / 2)], text,
  }));
  const reflectionItems: Question[] = junior
    ? [
        ...juniorWorking.flatMap(([dimension, ...texts]) => texts.map(text => ({section: 'Working style' as const, dimension, text}))),
        ...juniorMotivators.flatMap(([dimension, ...texts]) => texts.map(text => ({section: 'Motivators' as const, dimension, text}))),
        ...generalQuestions.filter(q => q.section === 'Learning preferences'),
      ].map((q, index) => ({...q, id: `${id}-reflection-${index}`}))
    : generalQuestions.filter(q => !['Interests', 'Reasoning'].includes(q.section)).map(q => ({...q, id: `${id}-${q.id}`}));
  const reasoningItems: Question[] = reasoning[grade].map(([dimension, text, options, correct, explanation], index) => ({
    id: `${id}-reasoning-${index}`, section: 'Reasoning', dimension, text,
    options: [...options, 'I’m not sure'], correct, explanation,
  }));
  return {
    id, grade: gradeText, title: description[0], description: description[1], focus: description[2],
    minutes: junior ? '15–20' : '20–25', junior,
    questions: [...interestItems, ...reflectionItems, ...reasoningItems],
    nextSteps: [
      description[2],
      junior ? 'Ask a parent or teacher to help you choose two activities from your report. Try each without worrying about being good at it.' : 'Pick two areas from your report and compare them with your schoolwork, projects and experiences.',
      grade <= 8 ? 'Keep a short note of what you enjoyed and what you would like to try again.' : grade <= 10 ? 'Discuss available subjects, workload and course prerequisites with your school adviser before making a choice.' : 'Read the current course descriptions and entry requirements on the institutions’ own websites.',
      'Share your report with a trusted adult or adviser. Your interests can change as you gain experience.',
    ],
  };
});

export function getGradeAssessment(id: string) {
  return gradeAssessments.find(assessment => assessment.id === id);
}

export const juniorActivities: Record<string, {name: string; project: string}> = {
  'Engineering & technology': {name: 'Building & making', project: 'With an adult, make a paper bridge and test how much it can hold.'},
  'Science & research': {name: 'Exploring & experimenting', project: 'Grow two seeds in different conditions and draw what changes.'},
  'Design & creative media': {name: 'Art & storytelling', project: 'Create a comic or model that tells a story of your own.'},
  'Education & community work': {name: 'Helping & teaching', project: 'Explain a favourite game or skill to someone younger.'},
  'Business & entrepreneurship': {name: 'Ideas & organising', project: 'Plan an imaginary class stall and list what it would need.'},
  'Communication & law': {name: 'Speaking & listening', project: 'Prepare a short talk and ask someone what they understood.'},
  'Health & life sciences': {name: 'Caring & living things', project: 'With an adult, learn how to care for a plant or observe wildlife safely.'},
  'Data & computing': {name: 'Patterns & puzzles', project: 'Make a simple pattern puzzle and ask a friend to solve it.'},
  'Finance & operations': {name: 'Numbers & planning', project: 'Make a pretend budget for a class celebration.'},
  'Environment & sustainability': {name: 'Nature & community', project: 'With an adult, notice one way to reduce waste at home or school.'},
};
