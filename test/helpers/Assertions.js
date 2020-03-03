import ScreenshotService from '../services/ScreenshotService'

// TODO - .env
const SPECTRE_UI_URL = 'https://spectre.service.bcdev';

export async function assertElementLooks(browser, selector, name) {
  const screenshotService = new ScreenshotService();

  const result = await screenshotService.compareElement(selector, name, Number(process.env.RUN_ID), browser)

  if(!result.pass) {
    console.log(`Image comparison failed with a ${result.diff}% difference`)
  }
  console.log(`Image comparison results can be seen at ${SPECTRE_UI_URL}${result.url}`)

  expect(result.pass).toEqual(true)
}
