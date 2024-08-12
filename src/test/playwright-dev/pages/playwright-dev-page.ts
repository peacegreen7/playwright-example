import { expect, type Locator, type Page } from '@playwright/test';

export class PlaywrightDevPage {
  private page: Page;
  private getStartedLink: Locator;
  private gettingStartedHeader: Locator;
  private guidesLink: Locator;
  private pomLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getStartedLink = page.locator('a', { hasText: 'Get started' });
    this.gettingStartedHeader = page.locator('h1', { hasText: 'Installation' });
    this.guidesLink = page.locator('li', {
      hasText: 'Guides',
    });
    this.pomLink = page.locator('a', {
      hasText: 'Page Object Model',
    });

  }

  async goto() {
    await this.page.goto('https://playwright.dev');
  }

  async getStarted() {
    await this.getStartedLink.first().click();
    await expect(this.gettingStartedHeader).toBeVisible();
  }

  async guidesMenu() {
    await this.getStarted();
    await this.guidesLink.click();
  }

  async pageObjectModel() {
    await this.pomLink.click();
  }
}