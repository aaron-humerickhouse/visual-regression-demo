import { assertElementLooks } from './../helpers/assertions'

describe('page', () => {
  it('should not regress', async () => {
    browser.url('/');
    const page = await $('body');
    await page.waitForDisplayed();

    await browser.execute(() => {
      const elesToHide = document.querySelectorAll('#content-component div.ant-typography');
      elesToHide.forEach(function (ele, i) {
        // perform some operation on a value;
        ele.style.visibility = 'hidden';
      });
    });

    await assertElementLooks(browser, page.selector, 'Page');
  })
})
