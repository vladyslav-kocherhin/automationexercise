import { Locator, Page } from '@playwright/test';

export class LoginForm {
    public constructor(private readonly page: Page) {}

    public get loginTitle(): Locator {
        return this.page.locator('div[class="login-form"]');
    }

    public get emailInput(): Locator {
        return this.page.locator('#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > input[type=email]:nth-child(2)');
    }

    public get passwordInput(): Locator {
        return this.page.locator('#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > input[type=password]:nth-child(3)');
    }

    public get loginButton(): Locator {
        return this.page.locator('#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > button');
    }
}
