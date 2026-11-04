import {test,expect} from '@playwright/test';
test('price is revealed only after student details and consent',async({page})=>{
 await page.goto('/book-psychometric-test');
 await expect(page.locator('body')).not.toContainText('AED 100');
 await page.getByPlaceholder('e.g. Sarah Jenkins').fill('Parent Test');
 await page.getByPlaceholder('e.g. Michael Jenkins').fill('Student Test');
 await page.getByRole('button',{name:'Continue to Contact & Consent'}).click();
 await expect(page.locator('body')).not.toContainText('AED 100');
 await page.getByRole('button',{name:'Review my assessment'}).click();
 await expect(page.locator('body')).not.toContainText('AED 100');
 await page.getByPlaceholder('name@example.com').fill('parent@example.com');
 await page.getByPlaceholder('+971 50 123 4567').fill('+971501234567');
 for(const checkbox of await page.getByRole('checkbox').all()) await checkbox.check();
 await page.getByRole('button',{name:'Review my assessment'}).click();
 await expect(page.getByText('AED 100',{exact:true})).toBeVisible();
 await expect(page.getByText('Student Test',{exact:true})).toBeVisible();
 await page.getByRole('button',{name:'Back',exact:true}).click();
 await expect(page.locator('body')).not.toContainText('AED 100');
});
test('premium homepage interactive sections and responsive layout',async({page})=>{
 const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('/');
 await expect(page.getByRole('heading',{level:1})).toContainText('You’re here to rise.');
 await expect(page.locator('body')).not.toContainText('AED 100');
 await page.getByRole('tab',{name:'Motivators',exact:true}).click();
 await expect(page.getByRole('tabpanel')).toContainText('Find what makes the effort worthwhile.');
 await page.getByRole('tab',{name:'Motivators',exact:true}).press('ArrowRight');
 await expect(page.getByRole('tab',{name:'Learning',exact:true})).toBeFocused();
 await page.getByRole('button',{name:'Grades 11–12',exact:true}).click();
 await expect(page.getByRole('link',{name:'Explore my next step'})).toHaveAttribute('href','/career-counselling-dubai');
 await page.evaluate(()=>scrollTo(0,0));await page.screenshot({path:'test-results/premium-desktop.png',fullPage:true});
 for(const width of [390,768,1440]){
  await page.setViewportSize({width,height:900});
  expect(await page.evaluate(()=>document.documentElement.scrollWidth <= innerWidth)).toBe(true);
 }
 await page.setViewportSize({width:390,height:844});await page.evaluate(()=>scrollTo(0,0));
 await page.screenshot({path:'test-results/premium-mobile.png',fullPage:true});
 await page.emulateMedia({reducedMotion:'reduce'});
 expect(await page.locator('.ring-two').evaluate(el=>getComputedStyle(el).animationName)).toBe('none');
 expect(errors).toEqual([]);
});
test('public pages contain no early fee reveal',async({page})=>{
 for(const route of ['/psychometric-test-dubai','/faq','/about','/resources','/book-consultation','/contact','/terms-and-conditions']){
  await page.goto(route);await expect(page.locator('body')).not.toContainText('AED 100');
 }
});
