import { Page } from '@playwright/test';
import { Header } from 'src/elements/header';
import { General } from 'src/elements/general';
import { LoginForm } from 'src/elements/login';

export class HomePage {
    public header: Header;
    public general: General;
    public loginForm: LoginForm;

    public constructor(private readonly page: Page) {
        this.header = new Header(page);
        this.general = new General(page);
        this.loginForm = new LoginForm(page);
    }

    public async openHomePage(): Promise<void> {
        await this.page.goto('http://automationexercise.com');
    }

}

