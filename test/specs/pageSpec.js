import { assertElementLooks } from './../helpers/assertions'

describe('page', () => {
  it('should not regress', async () => {
    browser.url('/');
    const page = await $('body');
    await page.waitForDisplayed();

    await assertElementLooks(browser, page.selector, 'Page');
  })
})
