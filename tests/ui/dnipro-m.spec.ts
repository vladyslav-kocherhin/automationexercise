import { expect, test } from '@playwright/test';
import { HomePage } from '../../src/pages/home-page';

test.describe('Dnipro-m tests', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.openHomePage();
    });

    test('Should verify all elements in header', async () => {
        await expect(homePage.header.logo).toBeVisible();
        await expect(homePage.header.searchField).toBeVisible();
        await expect(homePage.header.catalogLogo).toBeVisible();
        await expect(homePage.header.catalogText).toBeVisible();
        await expect(homePage.header.bonusOption).toBeVisible();
        await expect(homePage.header.loginOption).toBeVisible();
        await expect(homePage.header.wishListOption).toBeVisible();
        await expect(homePage.header.comparisonOption).toBeVisible();
        await expect(homePage.header.cartOption).toBeVisible();
        await expect(homePage.header.newsMenuOption).toBeVisible();
        await expect(homePage.header.newsMenuOption).toHaveText('Новинки');
        await expect(homePage.header.promotionsMenuOption).toBeVisible();
        await expect(homePage.header.promotionsMenuOption).toHaveText('Акції');
        await expect(homePage.header.outletMenuOption).toBeVisible();
        await expect(homePage.header.outletMenuOption).toHaveText('Outlet');
        await expect(homePage.header.salonsMenuOption).toBeVisible();
        await expect(homePage.header.salonsMenuOption).toHaveText('Салони');
        await expect(homePage.header.franchiseMenuOption).toBeVisible();
        await expect(homePage.header.franchiseMenuOption).toHaveText('Франшиза');
        await expect(homePage.header.reviewsMenuOption).toBeVisible();
        await expect(homePage.header.reviewsMenuOption).toHaveText('Відгуки');
        await expect(homePage.header.serviceMenuOption).toBeVisible();
        await expect(homePage.header.serviceMenuOption).toHaveText('Сервіс');
        await expect(homePage.header.clientsMenuOption).toBeVisible();
        await expect(homePage.header.locationOption).toBeVisible();
        await expect(homePage.header.supportServiceOption).toBeVisible();
        await expect(homePage.header.supportServiceOption).toHaveText('Служба підтримки');
        await expect(homePage.header.languageSelectorOption).toBeVisible();
    });

    test('Should verify all elements in footer', async () => {
        await homePage.general.scrollPageToBottom();

        await expect(homePage.footer.franchiseMenuOption).toBeVisible();
        await expect(homePage.footer.franchiseMenuOption).toHaveText('Франшиза');
        await expect(homePage.footer.reviewsMenuOption).toBeVisible();
        await expect(homePage.footer.reviewsMenuOption).toHaveText('Відгуки');
        await expect(homePage.footer.blogMenuOption).toBeVisible();
        await expect(homePage.footer.blogMenuOption).toHaveText('Блог');
        await expect(homePage.footer.workMenuOption).toBeVisible();
        await expect(homePage.footer.workMenuOption).toHaveText('Робота');
        await expect(homePage.footer.newItemsMenuOption).toBeVisible();
        await expect(homePage.footer.newItemsMenuOption).toHaveText('Новинки');
        await expect(homePage.footer.blackFridayMenuOption).toBeVisible();
        await expect(homePage.footer.newsMenuOption).toBeVisible();
        await expect(homePage.footer.newsMenuOption).toHaveText('Новини');
        await expect(homePage.footer.promotionsKitsMenuOption).toBeVisible();
        await expect(homePage.footer.promotionsKitsMenuOption).toHaveText('Акційні набори');
        await expect(homePage.footer.loyaltyProgramsMenuOption).toBeVisible();
        await expect(homePage.footer.loyaltyProgramsMenuOption).toHaveText('Програма лояльності');
        await expect(homePage.footer.skillsClubMenuOption).toBeVisible();
        await expect(homePage.footer.skillsClubMenuOption).toHaveText('Клуб майстерності');

        await expect(homePage.footer.contactsMenuOption).toBeVisible();
        await expect(homePage.footer.contactsMenuOption).toHaveText('Контакти');
        await expect(homePage.footer.goodsReturnMenuOption).toBeVisible();
        await expect(homePage.footer.goodsReturnMenuOption).toHaveText('Повернення товару');
        await expect(homePage.footer.deliveryAndPaymentMenuOption).toBeVisible();
        await expect(homePage.footer.deliveryAndPaymentMenuOption).toHaveText('Доставка і оплата');
        await expect(homePage.footer.blackListMenuOption).toBeVisible();
        await expect(homePage.footer.blackListMenuOption).toHaveText('Чорний список');
        await expect(homePage.footer.fAQMenuOption).toBeVisible();
        await expect(homePage.footer.fAQMenuOption).toHaveText('Поширені питання');

        await expect(homePage.footer.serviceMenuOption).toBeVisible();
        await expect(homePage.footer.serviceMenuOption).toHaveText('Сервіс');

        await expect(homePage.footer.supportPhoneNumber).toBeVisible();
        await expect(homePage.footer.promotionsAndDiscountsMessage).toBeVisible();
        await expect(homePage.footer.promotionsAndDiscountsMessage).toHaveText('Сповіщення про нові акції, знижки та спецпропозиції');
        await expect(homePage.footer.emailField).toBeVisible();
        await expect(homePage.footer.subscribeButton).toBeVisible();
        await expect(homePage.footer.termsAndConditionsLink).toBeVisible();

        await expect(homePage.footer.copyright).toBeVisible();
        await expect(homePage.footer.visaLogo).toBeVisible();
        await expect(homePage.footer.masterCardLogo).toBeVisible();
        await expect(homePage.footer.privat24Logo).toBeVisible();
        await expect(homePage.footer.payPartLogo).toBeVisible();
        await expect(homePage.footer.monobankLogo).toBeVisible();
        await expect(homePage.footer.applePayLogo).toBeVisible();
        await expect(homePage.footer.googlePayLogo).toBeVisible();

        await expect(homePage.footer.facebookLogo).toBeVisible();
        await expect(homePage.footer.instagramLogo).toBeVisible();
        await expect(homePage.footer.twitterLogo).toBeVisible();
        await expect(homePage.footer.youtubeLogo).toBeVisible();
        await expect(homePage.footer.telegramLogo).toBeVisible();
        await expect(homePage.footer.whatsAppLogo).toBeVisible();
        await expect(homePage.footer.tikTokLogo).toBeVisible();
    });

    test('Should verify back to top button functionality', async () => {
        await expect(homePage.general.backToTopButton).not.toBeVisible();
        await homePage.general.scrollPageToBottom();
        await expect(homePage.general.backToTopButton).toBeVisible();
        await homePage.general.backToTopButton.click();
        await homePage.general.isPageAtTop();
        await expect(homePage.general.backToTopButton).not.toBeVisible();
    });
});
