import { test, expect } from '@playwright/test';
import { questions, scoreAssessment, readAttempt, answeredCount } from '../../src/lib/assessment';

test('complete original bank, correct reasoning, and reverse scoring', () => {
  expect(questions).toHaveLength(60);
  expect(new Set(questions.map(q => q.id)).size).toBe(60);
  const answers = Object.fromEntries(questions.map(q => [q.id, q.correct ?? (q.reverse ? 0 : 4)]));
  const result = scoreAssessment(answers);
  for (const section of result.scores) for (const d of section.dimensions) expect(d.score).toBe(100);
  expect(result.flatInterests).toBe(true);
  for (const q of questions.filter(q => q.correct !== undefined)) answers[q.id] = 4;
  expect(scoreAssessment(answers).scores[4].dimensions.every(d => d.score === 0)).toBe(true);
});
test('reject incomplete and out-of-range answers', () => {
  expect(() => scoreAssessment({})).toThrow();
  const answers = Object.fromEntries(questions.map(q => [q.id, 2]));
  answers[questions[0].id] = 99;
  expect(answeredCount(answers)).toBe(59);
  expect(() => scoreAssessment(answers)).toThrow();
  answers[questions[0].id] = 1.5;
  expect(() => scoreAssessment(answers)).toThrow();
});
test('different interests produce different suggestions', () => {
  const answerFor = (names: string[]) => Object.fromEntries(questions.map(q => [q.id, q.section === 'Interests' ? names.includes(q.dimension) ? 4 : 0 : 2]));
  expect(scoreAssessment(answerFor(['Practical', 'Investigative'])).careers[0].name).toBe('Engineering & technology');
  expect(scoreAssessment(answerFor(['Social', 'Creative'])).careers[0].name).toBe('Education & community work');
});
test('corrupted storage and invalid profiles cannot become complete reports', () => {
  expect(readAttempt('{broken')).toBeNull();
  expect(readAttempt('null')).toBeNull();
  expect(readAttempt(JSON.stringify({ version: 9 }))).toBeNull();
  const saved = readAttempt(JSON.stringify({version: 1, profile: {name: 'Student', grade: '10', curriculum: 'IB', age: 'under18', consent: true}, answers: { [questions[0].id]: 7 }, index: 999, completed: true, startedAt: new Date().toISOString()}));
  expect(saved?.completed).toBe(false);
  expect(saved?.index).toBe(59);
  expect(saved?.answers).toEqual({});
});
