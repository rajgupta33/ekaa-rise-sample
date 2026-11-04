import {test,expect} from '@playwright/test';

test('service pages offer selectable plans, download and preserved detail',async({page})=>{
 for(const path of ['/career-counselling-dubai','/subject-selection-counselling-dubai','/for-parents','/about','/our-process','/study-abroad-consultants-dubai','/study-abroad/undergraduate-admissions','/study-abroad/masters-admissions']){
  await page.goto(path);await expect(page.locator('.interior-hero h1')).toBeVisible();
  await page.locator('.interior-choice-list>button').nth(1).click();
  await expect(page.locator('.interior-choice-list>button').nth(1)).toHaveAttribute('aria-pressed','true');
  await page.locator('.plan-checklist input').first().check();await expect(page.locator('.plan-status')).toContainText('1 of 3');
  await page.getByRole('button',{name:'Reset this plan'}).click();await expect(page.locator('.plan-status')).toContainText('0 of 3');
  await page.locator('.interior-deep>summary').click();await expect(page.locator('.interior-deep')).toHaveAttribute('open','');
  await expect(page.locator('body')).not.toContainText('AED 100');
 }
 const downloaded=page.waitForEvent('download');await page.getByRole('button',{name:'Save my plan'}).click();const file=await downloaded;expect(file.suggestedFilename()).toBe('ekaa-my-next-steps.txt');
 const stream=await file.createReadStream();let text='';for await(const part of stream!)text+=part.toString();expect(text).toContain('Explore a new field');
});
test('subject planner and destination comparisons update',async({page})=>{
 await page.goto('/subject-selection-counselling-dubai');await page.getByLabel('My curriculum').selectOption('CBSE');await page.getByLabel('My priority').selectOption('Balance my workload');await expect(page.locator('.interior-subject-plan .interior-callout')).toContainText('CBSE: Balance my workload');
 await page.goto('/study-abroad-consultants-dubai');await page.getByLabel('Destination 1').selectOption('australia');await expect(page.locator('.interior-compare-grid article').first()).toContainText('Australia');await expect(page.getByRole('link',{name:'Explore Australia',exact:true})).toHaveAttribute('href','/study-abroad/australia');
});
test('all country pages have usable level, curriculum and timeline controls',async({page})=>{
 for(const country of ['uk','usa','canada','australia','germany','ireland']){
  await page.goto(`/study-abroad/${country}`);await page.getByRole('button',{name:'Master’s',exact:true}).click();await expect(page.locator('.country-intro .interior-callout h3')).toContainText('Master’s');
  await page.locator('.interior-subject-plan .interior-pills button').nth(1).click();await expect(page.locator('.interior-subject-plan .interior-pills button').nth(1)).toHaveAttribute('aria-pressed','true');
  await expect(page.getByRole('button',{name:'Previous stage'})).toBeDisabled();await page.getByRole('button',{name:'Next stage'}).click();await expect(page.locator('.timeline-large')).toHaveText('02');await page.getByRole('button',{name:'Previous stage'}).click();await expect(page.locator('.timeline-large')).toHaveText('01');
 }
});
test('resource search, empty state, article navigation and text size',async({page})=>{
 await page.goto('/resources');await page.getByRole('button',{name:'Subject Choice',exact:true}).click();await expect(page.locator('.resource-grid>a')).toHaveCount(1);
 await page.getByRole('searchbox').fill('no-such-guide-123');await expect(page.getByText('No guides found for that search.')).toBeVisible();await page.getByRole('button',{name:'Show all guides'}).click();await expect(page.locator('.resource-grid>a')).toHaveCount(4);
 await page.locator('.resource-grid>a').first().click();await page.getByRole('button',{name:'Larger text'}).click();await expect(page.locator('#article-content')).toHaveClass(/reading-large/);await page.getByLabel('Jump to a section').selectOption('article-section-1');await expect(page.locator('#article-section-1')).toBeFocused();await page.getByRole('button',{name:'Standard text'}).click();await expect(page.locator('#article-content')).not.toHaveClass(/reading-large/);
});
test('interior desktop and mobile layouts have no page overflow',async({page})=>{
 const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
 for(const width of [390,1280]){
  await page.setViewportSize({width,height:900});
  for(const path of ['/career-counselling-dubai','/subject-selection-counselling-dubai','/study-abroad/uk','/resources','/book-psychometric-test','/contact','/faq']){
   await page.goto(path);expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),path).toBe(true);
  }
  await page.goto('/career-counselling-dubai');await page.screenshot({path:`test-results/interior-career-${width}.png`,fullPage:true});
  await page.goto('/study-abroad/uk');await page.screenshot({path:`test-results/interior-country-${width}.png`,fullPage:true});
 }
 expect(errors).toEqual([]);
});
