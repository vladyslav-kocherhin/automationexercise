import { Locator, Page } from '@playwright/test';

export class General {
    public constructor(private readonly page: Page) {}

    public async scrollPageToBottom(): Promise<void> {
        await this.page.evaluate(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
    }

    public get backToTopButton(): Locator {
        return this.page.locator('button[plerdy-tracking-id="30620250601"]');
    }

    public async isPageAtTop(): Promise<boolean> {
        const scrollY = await this.page.evaluate(() => window.scrollY);
        return scrollY === 0;
    }

}
