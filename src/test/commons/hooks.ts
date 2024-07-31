import { Before, After, setDefaultTimeout, BeforeAll, AfterAll, Status } from '@cucumber/cucumber';
import { chromium, Browser, BrowserContext } from '@playwright/test';
import fs from 'fs';
import path from 'path';

let browser: Browser;
let contextBrowser: BrowserContext;

setDefaultTimeout(60000);

BeforeAll(async () => {
  browser = await chromium.launch({ headless: false });
});

Before(async () => {
  contextBrowser = await browser.newContext();
  const page = await contextBrowser.newPage();
  global.page = page;
});

After(async function (scenario) {
  if (scenario.result?.status === Status.FAILED) {
    const screenshotPath = path.resolve(`screenshots/${scenario.pickle.name.replace(/ /g, '_')}.png`);
    await global.page.screenshot({ path: screenshotPath });
    this.attach(fs.readFileSync(screenshotPath), 'image/png');
  }

  await global.page.close();
  await contextBrowser.close();
});

AfterAll(async () => {
  await browser.close();
});

// Export the page object for reuse in other step definitions
export { page };
