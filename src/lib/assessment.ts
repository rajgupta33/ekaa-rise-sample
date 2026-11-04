/** Original EKAA exploratory item bank. Version changes invalidate saved attempts. */
export const VERSION = 1;
export const STORAGE_KEY = 'ekaa-career-explorer-v1';
export const sections = ['Interests', 'Working style', 'Motivators', 'Learning preferences', 'Reasoning'] as const;
export type Section = typeof sections[number];
export type Question = { id: string; section: Section; dimension: string; text: string; reverse?: boolean; options?: string[]; correct?: number; explanation?: string };
const groups: [Section, string, string[]][] = [
  ['Interests', 'Practical', ['Build or repair a useful object.', 'Work with tools, machines, or materials.', 'Try an outdoor project with a visible result.']],
  ['Interests', 'Investigative', ['Investigate why an experiment produced a result.', 'Analyse data to answer a question.', 'Explore how a scientific discovery works.']],
  ['Interests', 'Creative', ['Design a poster, story, or short film.', 'Develop an original approach to a project.', 'Express ideas through art, music, or writing.']],
  ['Interests', 'Social', ['Help a classmate understand a difficult idea.', 'Support someone who is struggling with a task.', 'Organise an activity that helps the community.']],
  ['Interests', 'Enterprising', ['Pitch an idea to persuade an audience.', 'Lead a team toward a shared goal.', 'Plan a small business or fundraising event.']],
  ['Interests', 'Organised', ['Organise information into clear records.', 'Check a budget or schedule for mistakes.', 'Create a reliable system for tracking tasks.']],
  ['Working style', 'Curiosity', ['I enjoy exploring unfamiliar topics.', 'I look for different ways to solve a problem.', 'I prefer to avoid unfamiliar ideas.']],
  ['Working style', 'Planning', ['I break a large assignment into smaller steps.', 'I check my work before submitting it.', 'I often begin tasks without considering the deadline.']],
  ['Working style', 'Collaboration', ['I ask others for their perspective.', 'I enjoy building an idea with a group.', 'I find it hard to make room for other people’s ideas.']],
  ['Working style', 'Initiative', ['I volunteer to begin when a task is unclear.', 'I feel comfortable explaining my ideas to others.', 'I wait for someone else to make every decision.']],
  ['Motivators', 'Impact', ['Doing work that helps others matters to me.', 'I want my work to improve my community.', 'Making a useful contribution motivates me.']],
  ['Motivators', 'Autonomy', ['I value choosing how to approach my work.', 'Having space to try my own ideas matters to me.', 'I am motivated by responsibility for my decisions.']],
  ['Motivators', 'Growth', ['Learning new skills is important in my future work.', 'I value challenges that help me improve.', 'I would enjoy work that keeps introducing new ideas.']],
  ['Motivators', 'Stability', ['A predictable routine is important to me.', 'I value clear expectations in my work.', 'Reliable working conditions matter to me.']],
  ['Learning preferences', 'Examples', ['Worked examples help me start a new topic.', 'Diagrams and concrete examples help me review.']],
  ['Learning preferences', 'Discussion', ['Explaining a topic aloud helps me understand it.', 'Discussing questions with others helps me learn.']],
  ['Learning preferences', 'Practice', ['Trying a task myself helps me understand it.', 'Short practice exercises help me remember a topic.']],
];
export const questions: Question[] = groups.flatMap(([section, dimension, texts], group) => texts.map((text, i) => ({ id: `q${group}-${i}`, section, dimension, text, reverse: section === 'Working style' && i === 2 })));
const reasoning: [string, string, string[], number, string][] = [
  ['Numerical', 'A notebook costs AED 12. What do 5 notebooks cost?', ['AED 50', 'AED 60', 'AED 72', 'AED 17'], 1, '12 × 5 = 60.'],
  ['Numerical', 'What is 15% of 200?', ['15', '20', '30', '45'], 2, '200 × 0.15 = 30.'],
  ['Numerical', 'A club has 18 members. The ratio of juniors to seniors is 2:1. How many juniors are there?', ['6', '9', '12', '15'], 2, 'There are three equal parts; two parts are 12 members.'],
  ['Numerical', 'Four scores are 6, 8, 10, and 12. What is their mean?', ['8', '9', '10', '12'], 1, 'The total is 36, divided by 4 gives 9.'],
  ['Logical', 'What comes next: 3, 6, 12, 24, …?', ['27', '36', '42', '48'], 3, 'Each term is twice the previous term.'],
  ['Logical', 'All members of Club A study a language. Noor is in Club A. What must be true?', ['Noor studies a language', 'Noor speaks three languages', 'Everyone studies a language', 'Noor leads Club A'], 0, 'The rule applies to every member, including Noor.'],
  ['Logical', 'Maya finished before Omar. Omar finished before Sara. Who finished first?', ['Sara', 'Omar', 'Maya', 'Cannot tell'], 2, 'The order is Maya, Omar, Sara.'],
  ['Logical', 'A robot faces north, turns right, then turns right again. Which direction does it face?', ['North', 'East', 'South', 'West'], 2, 'Two right turns take north to east to south.'],
  ['Verbal', 'Which word is closest in meaning to “brief”?', ['Short', 'Loud', 'Complex', 'Late'], 0, 'Brief means short in duration or length.'],
  ['Verbal', 'Book is to reading as instrument is to …', ['Painting', 'Measuring only', 'Playing', 'Printing'], 2, 'A book is read; a musical instrument is played.'],
  ['Verbal', '“The library opens every weekday except Wednesday.” On which day is it definitely open?', ['Sunday', 'Wednesday', 'Saturday', 'Tuesday'], 3, 'Tuesday is a weekday and is not the exception.'],
  ['Verbal', '“Some students cycle to school.” Which conclusion is supported?', ['All students cycle', 'At least one student cycles', 'No students walk', 'Most students cycle'], 1, 'Some establishes at least one, but not all or most.'],
];
questions.push(...reasoning.map(([dimension, text, options, correct, explanation], i): Question => ({ id: `r${i}`, section: 'Reasoning', dimension, text, options: [...options, 'I’m not sure'], correct, explanation })));
export type Answers = Record<string, number>;
export const labels = (q: Question) => q.options ?? (q.section === 'Interests' ? ['Strongly dislike', 'Dislike', 'Neutral / unsure', 'Enjoy', 'Strongly enjoy'] : ['Strongly disagree', 'Disagree', 'Neutral / unsure', 'Agree', 'Strongly agree']);
export function validAnswer(q: Question, answer: unknown): answer is number { return typeof answer === 'number' && Number.isInteger(answer) && answer >= 0 && answer < labels(q).length; }
export const answeredCount = (answers: Answers, bank: Question[] = defaultQuestions) => bank.filter(q => validAnswer(q, answers[q.id])).length;
export const careers = [
  { name: 'Engineering & technology', interests: ['Practical', 'Investigative'], subjects: 'Mathematics, physics, computing', project: 'Build a simple prototype and document how you tested it.' },
  { name: 'Science & research', interests: ['Investigative', 'Organised'], subjects: 'Sciences, mathematics, research methods', project: 'Run a small experiment and explain the evidence.' },
  { name: 'Design & creative media', interests: ['Creative', 'Practical'], subjects: 'Art, design, media, computing', project: 'Create a three-piece portfolio around a problem you care about.' },
  { name: 'Education & community work', interests: ['Social', 'Creative'], subjects: 'Languages, humanities, social sciences', project: 'Design and deliver a short lesson or community activity.' },
  { name: 'Business & entrepreneurship', interests: ['Enterprising', 'Organised'], subjects: 'Economics, business, mathematics', project: 'Interview potential customers and draft a small business plan.' },
  { name: 'Communication & law', interests: ['Enterprising', 'Social'], subjects: 'Languages, history, humanities', project: 'Prepare both sides of a debate using reliable evidence.' },
  { name: 'Health & life sciences', interests: ['Investigative', 'Social'], subjects: 'Biology, chemistry, mathematics', project: 'Interview a health professional about their training and daily work.' },
  { name: 'Data & computing', interests: ['Investigative', 'Creative'], subjects: 'Mathematics, computing, statistics', project: 'Explore a public dataset or build a small app.' },
  { name: 'Finance & operations', interests: ['Organised', 'Enterprising'], subjects: 'Mathematics, economics, business', project: 'Create a budget and compare two ways to use limited resources.' },
  { name: 'Environment & sustainability', interests: ['Practical', 'Social'], subjects: 'Geography, biology, environmental science', project: 'Audit waste or energy use and propose a measurable improvement.' },
];
const defaultQuestions = questions;
export function scoreAssessment(answers: Answers, bank: Question[] = defaultQuestions) {
  const questions = bank;
  if (answeredCount(answers, questions) !== questions.length) throw new Error('Please answer every question before generating your report.');
  const scores = sections.map(section => ({ section, dimensions: Array.from(new Set(questions.filter(q => q.section === section).map(q => q.dimension))).map(name => {
    const items = questions.filter(q => q.section === section && q.dimension === name);
    const total = items.reduce((sum, q) => sum + (q.correct !== undefined ? Number(answers[q.id] === q.correct) : q.reverse ? 4 - answers[q.id] : answers[q.id]), 0);
    return { name, score: Math.round(total / (items.length * (section === 'Reasoning' ? 1 : 4)) * 100), total, count: items.length };
  }) }));
  const interest = scores[0].dimensions;
  const ranked = careers.map(c => ({ ...c, score: Math.round(c.interests.reduce((sum, name) => sum + interest.find(d => d.name === name)!.score, 0) / c.interests.length) })).sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));
  return { scores, careers: ranked, flatInterests: Math.max(...interest.map(d => d.score)) - Math.min(...interest.map(d => d.score)) < 15 };
}
export type Profile = { name: string; grade: string; curriculum: string; age: string; consent: boolean };
export type Attempt = { assessmentId?: string; version: number; profile: Profile; answers: Answers; index: number; completed: boolean; startedAt: string };
export function readAttempt(raw: string, bank: Question[] = defaultQuestions, assessmentId?: string, grade?: string): Attempt | null {
  const questions = bank;
  try {
    const value = JSON.parse(raw);
    if (assessmentId && (value.assessmentId !== assessmentId || value.profile?.grade !== grade)) return null;
    if (value.version !== VERSION || !value.profile || typeof value.profile.name !== 'string' || !value.profile.name.trim() || value.profile.name.length > 60 || !['4', '5', '6', '7', '8', '9', '10', '11', '12', 'University'].includes(value.profile.grade) || !['IB', 'British', 'American', 'CBSE', 'Other'].includes(value.profile.curriculum) || !['under18', 'adult'].includes(value.profile.age) || value.profile.consent !== true || typeof value.startedAt !== 'string' || !Number.isFinite(Date.parse(value.startedAt)) || !value.answers || typeof value.answers !== 'object') return null;
    const answers: Answers = {};
    for (const q of questions) if (validAnswer(q, value.answers[q.id])) answers[q.id] = value.answers[q.id];
    return { assessmentId: value.assessmentId, version: VERSION, profile: value.profile, answers, index: Number.isInteger(value.index) ? Math.max(0, Math.min(questions.length - 1, value.index)) : 0, completed: value.completed === true && answeredCount(answers, questions) === questions.length, startedAt: value.startedAt };
  } catch { return null; }
}
