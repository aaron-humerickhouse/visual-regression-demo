import { assertElementLooks } from './../helpers/assertions'

describe('page', () => {
  it('should not regress', async () => {
    browser.url('/');
    const page = await $('body');
    await page.waitForDisplayed();

    await browser.execute(() => {
      // Hide all things likely to change
      const eleToHide = document.querySelector('article.ant-typography');
      eleToHide.style.visibility = 'hidden';

      // Make space a reasonable size to allow for content differences
      const contentEle = document.querySelector('#content-component');
      contentEle.style.minHeight="800px";
      contentEle.style.maxHeight="800px";
    });
    await browser.pause(1000);

    await assertElementLooks(browser, page.selector, 'Page');
  })
})
