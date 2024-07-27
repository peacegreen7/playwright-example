import { Before, After, setDefaultTimeout, BeforeAll, AfterAll } from '@cucumber/cucumber';
import { chromium, Browser, BrowserContext } from '@playwright/test';

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

After(async () => {
  await global.page.close();
  await contextBrowser.close();
});

AfterAll(async () => {
  await browser.close();
});

// Export the page object for reuse in other step definitions
export { page };
