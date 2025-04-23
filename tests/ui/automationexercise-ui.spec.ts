import { expect, test } from '@playwright/test';
import { HomePage } from '../../src/pages/home-page';

test.describe('automationexercis tests', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.openHomePage();
    });

    test('Should log in and delete account successfully', async () => {
        await expect(homePage.header.header).toBeVisible();

        await homePage.header.signupLoginButton.click();
        await expect(homePage.loginForm.loginTitle).toBeVisible();

        await homePage.loginForm.emailInput.fill('vladyslav.kocherhin@gmail.com');
        await homePage.loginForm.passwordInput.fill('Vk22041995');
        await homePage.loginForm.loginButton.click();

        await expect(homePage.header.deleteAccountButton).toBeVisible();
        await expect(homePage.header.logoutButton).toBeVisible();
    });

    test('Main page should contain all elements', async () => {
        await expect(homePage.header.header).toBeVisible();
        await expect(homePage.general.sliderSection).toBeVisible();
        await expect(homePage.general.categoryFilter).toBeVisible();
        await expect(homePage.general.futureItemsSections).toBeVisible();
        await expect(homePage.general.brandsSections).toBeVisible();
        await expect(homePage.general.recommendedItemsSections).toBeVisible();
        await expect(homePage.general.Footer).toBeVisible();
    });

});
