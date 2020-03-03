const fs = require('fs');
const SpectreClient = require('nodeclient-spectre');

// TODO - .env
const SPECTRE_API_HOST= 'http://spectre.linkerd:4140';
const PROJECT = 'Visual Regression';
const SUITE = 'Demo';

class ScreenshotService {
  browser;
  spectreClient = new SpectreClient(SPECTRE_API_HOST);

  compareElement = async (selector, name, runId, browser) => {
    this.browser = browser;
    const results = await this.takeImage(selector, name);
    const imageName = `${results.path}/${results.fileName}`;

    const screenshot = this.readImage(imageName);

    return await this.postImage(screenshot, name, runId);
  };

  instantiateRun = async () => {
    const response = await this.spectreClient.createTestrun(PROJECT, SUITE);

    return response.id;
  };

  takeImage = async (selector, name) => {
    const ele = await this.browser.$(selector);
    await ele.waitForDisplayed();

    return await this.browser.saveElement(await $(selector), name, { /* some options*/ });
  };

  readImage = (imageName) => {
    // read binary data
    const screenshot = fs.readFileSync(imageName);

    // convert binary data to base64 encoded string
    return Buffer.from(screenshot).toString('base64');
  };

  postImage = async (screenshot, name, runId) => {
    let screenSize = '';
    if(typeof(this.browser.capabilities.deviceName) === "undefined" ) {
      const windowSize = this.browser.getWindowSize();
      screenSize = `${windowSize.width}x${windowSize.height}`;
    } else {
      screenSize = this.browser.config.capabilities.browser;
    }

    return await this.spectreClient.submitScreenshot(
      name, // test name
      this.browser.config.capabilities.browserName, // browser
      screenSize, // screen size
      screenshot, // screenshot
      runId, // run id
      '', // crop area
      '', // source-url
      30, // fuzz-level
      '' // highlight color
    );
  }
}

export default ScreenshotService;
