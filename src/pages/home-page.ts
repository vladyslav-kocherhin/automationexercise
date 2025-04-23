import { Page } from '@playwright/test';
import { Header } from 'src/elements/header';
import { Footer } from 'src/elements/footer';
import { General } from 'src/elements/general';

export class HomePage {
    public header: Header;
    public footer: Footer;
    public general: General;

    public constructor(private readonly page: Page) {
        this.header = new Header(page);
        this.footer = new Footer(page);
        this.general = new General(page);
    }

    public async openHomePage(): Promise<void> {
        await this.page.goto('https://dnipro-m.ua/');
    }

}

