import { Given, Then, When } from "@cucumber/cucumber"
import { PlaywrightDevPage } from "../pages/playwright-dev-page";
import { expect } from "@playwright/test";

let playwrightDev: PlaywrightDevPage;

Given('User navigates to Playwright Dev page', async function () {
    const { page } = global;  // Ensure `page` is available in the context
    playwrightDev = new PlaywrightDevPage(page);
    await playwrightDev.goto();
});

When('User opens menu item Guides on the left side menu', async () => {
    await playwrightDev.guidesMenu();
});

Then('User selects item Page object models', async () => {
    await playwrightDev.pageObjectModel();
});

Then('User sees page article with content {string}', async (title: string) => {
    await expect(page.locator('article')).toContainText(title);
});