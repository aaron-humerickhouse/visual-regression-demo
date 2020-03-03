import { assertElementLooks } from './../helpers/assertions'

describe('site header', () => {
  it('should not regress', async () => {
    browser.url('/');
    const header = await $('#header-component');
    await header.waitForDisplayed();

    await assertElementLooks(browser, header.selector, 'Header Component');
  })
})
