import { Given, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

Given('User navigates to page', async () => {
    try {
        await page.goto("https://www.google.com");
    } catch (error) {
        console.log("Log: " + error);
    }
});

Then('User sees page title is {string}', async function (expectedTitle: string) {
    const title = await page.title();
    expect(title).to.equal(expectedTitle);
});