import { Locator, Page } from '@playwright/test';

export class Header {
    public constructor(private readonly page: Page) {}

    public get logo(): Locator {
        return this.page.locator('img[plerdy-tracking-id="75861121901"]');
    }

    public get searchField(): Locator {
        return this.page.locator('input[plerdy-tracking-id="42442396301"]');
    }

    public get catalogLogo(): Locator {
        return this.page.locator('svg[plerdy-tracking-id="81995820316"]');
    }

    public get catalogText(): Locator {
        return this.page.locator('span[plerdy-tracking-id="74058840601"]');
    }

    public get bonusOption(): Locator {
        return this.page.locator('img[plerdy-tracking-id="49823979502"]');
    }

    public get loginOption(): Locator {
        return this.page.locator('svg[plerdy-tracking-id="61578164801"]');
    }

    public get wishListOption(): Locator {
        return this.page.locator('svg[plerdy-tracking-id="84293608501"]');
    }

    public get comparisonOption(): Locator {
        return this.page.locator('svg[plerdy-tracking-id="65681618301"]');
    }

    public get cartOption(): Locator {
        return this.page.locator('svg[plerdy-tracking-id="26104660701"]');
    }

    public get newsMenuOption(): Locator {
        return this.page.locator('a[plerdy-tracking-id="79743140802"]');
    }

    public get promotionsMenuOption(): Locator {
        return this.page.locator('a[plerdy-tracking-id="65508561501"]');
    }

    public get outletMenuOption(): Locator {
        return this.page.locator('a[plerdy-tracking-id="24942410302"]');
    }

    public get salonsMenuOption(): Locator {
        return this.page.locator('a[plerdy-tracking-id="15627859702"]');
    }

    public get franchiseMenuOption(): Locator {
        return this.page.locator('a[plerdy-tracking-id="68390394802"]');
    }

    public get reviewsMenuOption(): Locator {
        return this.page.locator('a[plerdy-tracking-id="27722905602"]');
    }

    public get serviceMenuOption(): Locator {
        return this.page.locator('a[plerdy-tracking-id="15018154102"]');
    }

    public get clientsMenuOption(): Locator {
        return this.page.locator('li[plerdy-tracking-id="79845501801"]');
    }

    public get locationOption(): Locator {
        return this.page.locator('li[plerdy-tracking-id="99366125001"]');
    }

    public get supportServiceOption(): Locator {
        return this.page.locator('div[plerdy-tracking-id="51370337401"]');
    }

    public get languageSelectorOption(): Locator {
        return this.page.locator('div[plerdy-tracking-id="31580287201"]');
    }

}
