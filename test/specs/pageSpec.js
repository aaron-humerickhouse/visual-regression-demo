import { assertElementLooks } from './../helpers/assertions'

describe('page', () => {
  it('should not regress', async () => {
    browser.url('/');
<<<<<<< HEAD
    const page = await $('body');
    await page.waitForDisplayed();

=======
    const page = $('body');
    page.waitForDisplayed();
    
>>>>>>> Step 1
    await assertElementLooks(browser, page.selector, 'Page');
  })
})
