import { Given, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

Given('User navigates to page', async () => {
    try {
        await page.goto("https://www.google.com");
    } catch (error) {
        console.log("Log: " + error);
    }
});

Then('User see page title', async () => {
    try {
        const title = await page.title;
        expect(title.toEqual('Google'));
    } catch (error) {
        console.log("Log: " + error);
    }
});