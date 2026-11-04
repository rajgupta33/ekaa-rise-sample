import { test, expect, Page } from '@playwright/test';
import { questions, STORAGE_KEY } from '../../src/lib/assessment';
async function start(page: Page) {
  await page.goto('/career-assessment/general');
  await page.getByLabel('First name or nickname').fill('Aarav');
  await page.getByLabel('Current grade').selectOption('10');
  await page.getByLabel('Curriculum', {exact:true}).selectOption('IB');
  await page.getByLabel('Age group').selectOption('under18');
  await page.getByRole('checkbox').check();
  await page.getByRole('button', {name:'Start my assessment'}).click();
}
test('student completes all 60, resumes, edits, downloads and clears report', async ({page}) => {
  const errors: string[] = []; page.on('pageerror', e => errors.push(e.message));
  await start(page);
  await expect(page.getByRole('button', {name:'Continue', exact:true})).toBeDisabled();
  await page.getByRole('button', {name:'Review all questions'}).click();
  await expect(page.getByRole('button', {name:'Generate my report'})).toBeDisabled();
  await page.getByRole('button', {name:'Question 1: unanswered',exact:true}).click();
  for(let i=0;i<questions.length;i++) {
    await expect(page.locator('#question-title')).toHaveText(questions[i].text);
    await page.getByRole('radio').nth(questions[i].correct ?? (i % 5)).check();
    if(i === 4) {
      await page.reload();
      await page.getByRole('button', {name:'Resume assessment'}).click();
      await expect(page.getByRole('radio').nth(4)).toBeChecked();
    }
    await page.getByRole('button', {name: i === questions.length-1 ? 'Review answers' : 'Continue',exact:true}).click();
  }
  await page.getByRole('button', {name:'Generate my report'}).click();
  await expect(page.getByRole('heading', {name:/Aarav,/})).toBeVisible();
  await expect(page.getByText('4/4 correct')).toHaveCount(3);
  await expect(page.locator('.career-grid article')).toHaveCount(4);
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', {name:'Download report (.txt)'}).click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe('ekaa-career-report.txt');
  const stream = await download.createReadStream(); let report='';
  for await (const chunk of stream!) report += chunk.toString();
  expect(report).toContain('Student: Aarav'); expect(report).toContain('REASONING REVIEW');
  await page.reload(); await page.getByRole('button', {name:'View my report'}).click();
  await page.getByRole('button', {name:'Review / change my answers'}).click();
  await page.getByRole('button', {name:'Question 1: answered',exact:true}).click();
  await page.getByRole('radio').nth(4).check();
  await page.getByRole('button', {name:'Review all questions'}).click();
  await page.getByRole('button', {name:'Generate my report'}).click();
  await page.screenshot({path:'test-results/assessment-results.png',fullPage:true});
  await page.getByRole('button', {name:'Clear saved attempt',exact:true}).click();
  await page.getByRole('button', {name:'Clear and start again'}).click();
  await expect(page.getByRole('button', {name:'Start my assessment'})).toBeVisible();
  expect(await page.evaluate(key=>localStorage.getItem(key), STORAGE_KEY)).toBeNull();
  expect(errors).toEqual([]);
});
test('mobile layout, form validation and keyboard selection', async ({page}) => {
  await page.setViewportSize({width:390,height:844});
  await page.goto('/career-assessment/general');
  await page.getByRole('button', {name:'Start my assessment'}).click();
  await expect(page.getByLabel('First name or nickname')).toBeVisible();
  await page.screenshot({path:'test-results/assessment-mobile.png',fullPage:true});
  expect(await page.evaluate(()=>document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await start(page);
  await page.getByRole('radio').first().focus(); await page.keyboard.press('Space');
  await expect(page.getByRole('radio').first()).toBeChecked();
  await expect(page.getByRole('button',{name:'Continue',exact:true})).toBeEnabled();
  expect(await page.evaluate(()=>document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await page.screenshot({path:'test-results/assessment-question-mobile.png',fullPage:true});
});
test('blocked storage remains usable and explains save limitation', async ({page}) => {
  await page.addInitScript(()=>{ Storage.prototype.setItem = () => {throw new Error('blocked');}; });
  await start(page);
  await expect(page.getByRole('status')).toContainText('could not be saved');
  await page.getByRole('radio').first().check();
  await page.getByRole('button',{name:'Continue',exact:true}).click();
  await expect(page.locator('#question-title')).toHaveText(questions[1].text);
});
