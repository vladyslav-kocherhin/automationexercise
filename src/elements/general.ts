import { Locator, Page } from '@playwright/test';

export class General {
    public constructor(private readonly page: Page) {}

    public get accountDeletedMessage(): Locator {
        return this.page.locator('b:has-text("Account Deleted!")');
    }

    public get sliderSection(): Locator {
        return this.page.locator('#slider');
    }

    public get categoryFilter(): Locator {
        return this.page.locator('#accordian');
    }

    public get futureItemsSections(): Locator {
        return this.page.locator('div.features_items');
    }

    public get brandsSections(): Locator {
        return this.page.locator('div.brands_products');
    }

    public get recommendedItemsSections(): Locator {
        return this.page.locator('div.recommended_items');
    }

    public get Footer(): Locator {
        return this.page.locator('#footer');
    }

}
