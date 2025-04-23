import { Locator, Page } from '@playwright/test';

export class Header {
    public constructor(private readonly page: Page) {}

    public get header(): Locator {
        return this.page.locator('#header');
    }

    public get signupLoginButton(): Locator {
        return this.page.locator('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(4)');
    }

    public get loggedInAs(): Locator {
        return this.page.locator('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(10) > a > i');
    }

    public get deleteAccountButton(): Locator {
        return this.page.locator('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(5) > a');
    }

    public get logoutButton(): Locator {
        return this.page.locator('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(4) > a');
    }
}

