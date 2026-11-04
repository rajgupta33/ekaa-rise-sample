import {test, expect} from '@playwright/test';
import {gradeAssessments} from '../../src/lib/grade-assessments';
import {scoreAssessment, readAttempt, VERSION} from '../../src/lib/assessment';

test('grade banks are distinct, complete, correctly scored and isolated', () => {
  expect(gradeAssessments).toHaveLength(9);
  const ids = gradeAssessments.flatMap(a => a.questions.map(q => q.id));
  expect(new Set(ids).size).toBe(ids.length);
  const unique = gradeAssessments.flatMap(a => a.questions.filter(q => ['Interests','Reasoning'].includes(q.section)).map(q => q.text));
  expect(new Set(unique).size).toBe(unique.length);
  for (const a of gradeAssessments) {
    expect(a.questions).toHaveLength(a.junior ? 40 : 48);
    const answers = Object.fromEntries(a.questions.map(q => [q.id, q.correct ?? (q.reverse ? 0 : 4)]));
    const result = scoreAssessment(answers, a.questions);
    for(const s of result.scores) for(const d of s.dimensions) expect(d.score).toBe(100);
    expect(() => scoreAssessment({}, a.questions)).toThrow();
    const raw = JSON.stringify({assessmentId:a.id, version:VERSION, profile:{name:'Test',grade:a.grade,curriculum:'IB',age:'under18',consent:true}, answers, index:0, completed:true, startedAt:new Date().toISOString()});
    expect(readAttempt(raw,a.questions,a.id,a.grade)?.completed).toBe(true);
    const other = gradeAssessments.find(b => b.id !== a.id)!;
    expect(readAttempt(raw,other.questions,other.id,other.grade)).toBeNull();
  }
});

test('catalogue filters and mobile layout', async ({page}) => {
  await page.setViewportSize({width:390,height:844});
  await page.goto('/career-assessment');
  await expect(page.locator('.catalogue-card')).toHaveCount(9);
  for(const [name,count] of [['Grades 4–7',4],['Grades 8–10',3],['Grades 11–12',2]] as const) {
    await page.getByRole('button',{name,exact:true}).click();
    await expect(page.locator('.catalogue-card')).toHaveCount(count);
  }
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await page.screenshot({path:'test-results/grade-catalogue-mobile.png',fullPage:true});
});

for(const a of gradeAssessments) test(`Grade ${a.grade}: complete, resume and download its own report`,async ({page}) => {
  await page.goto('/career-assessment');
  await page.getByRole('link',{name:`Start Grade ${a.grade} assessment`,exact:true}).click();
  await expect(page.getByLabel('Current grade')).toHaveValue(a.grade);
  await expect(page.getByLabel('Current grade')).toBeDisabled();
  await page.getByLabel('First name or nickname').fill('Student');
  await page.getByLabel('Curriculum',{exact:true}).selectOption('IB');
  await page.getByLabel('Age group').selectOption('under18');
  await page.getByRole('checkbox').check();
  await page.getByRole('button',{name:'Start my assessment'}).click();
  await expect(page.getByRole('button',{name:'Continue',exact:true})).toBeDisabled();
  for(let i=0;i<a.questions.length;i++) {
    const q = a.questions[i];
    await expect(page.locator('#question-title')).toHaveText(q.text);
    await page.getByRole('radio').nth(q.correct ?? (i % 5)).check();
    if(i === 2) {
      await page.reload();
      await page.getByRole('button',{name:'Resume assessment'}).click();
      await expect(page.getByRole('radio').nth(2)).toBeChecked();
    }
    await page.getByRole('button',{name:i === a.questions.length-1 ? 'Review answers' : 'Continue',exact:true}).click();
  }
  await page.getByRole('button',{name:'Generate my report'}).click();
  await expect(page.getByText('2/2 correct')).toHaveCount(3);
  await expect(page.getByRole('heading',{name:`Your Grade ${a.grade} next steps.`})).toBeVisible();
  if(a.junior) await expect(page.getByRole('heading',{name:'Activities to try next.'})).toBeVisible();
  const pending=page.waitForEvent('download');
  await page.getByRole('button',{name:'Download report (.txt)'}).click();
  const download=await pending;
  expect(download.suggestedFilename()).toBe(`ekaa-${a.id}-report.txt`);
  await page.goto('/career-assessment');
  await expect(page.getByRole('link',{name:`Report ready Grade ${a.grade} assessment`})).toBeVisible();
  const other=gradeAssessments.find(b=>b.id!==a.id)!;
  await page.getByRole('link',{name:`Start Grade ${other.grade} assessment`,exact:true}).click();
  await expect(page.getByRole('button',{name:'Start my assessment'})).toBeVisible();
});
