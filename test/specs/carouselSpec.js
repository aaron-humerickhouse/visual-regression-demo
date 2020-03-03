import { assertElementLooks } from './../helpers/assertions'

const ITEM_PARENT_SELECTOR = 'ul.slick-dots';
const FIRST_ITEM_SELECTOR = `${ITEM_PARENT_SELECTOR} li:nth-child(1)`;
const SECOND_ITEM_SELECTOR = `${ITEM_PARENT_SELECTOR} li:nth-child(2)`;
const THIRD_ITEM_SELECTOR = `${ITEM_PARENT_SELECTOR} li:nth-child(3)`;
const FOURTH_ITEM_SELECTOR = `${ITEM_PARENT_SELECTOR} li:nth-child(4)`;

describe('carousel images', () => {
  it('should not regress', async () => {
    browser.url('/');
    const carousel = await $('#carousel-component');
    await carousel.waitForDisplayed();

    let ele = await $(FIRST_ITEM_SELECTOR);
    ele.click();
    await assertElementLooks(browser, carousel.selector, 'First Carousel Image');

    ele = await $(SECOND_ITEM_SELECTOR);
    ele.click();
    await assertElementLooks(browser, carousel.selector, 'Second Carousel Image');

    ele = await $(THIRD_ITEM_SELECTOR);
    ele.click();
    await assertElementLooks(browser, carousel.selector, 'Third Carousel Image');

    ele = await $(FOURTH_ITEM_SELECTOR);
    ele.click();
    await assertElementLooks(browser, carousel.selector, 'Fourth Carousel Image');
  })
});
