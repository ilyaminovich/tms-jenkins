import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pageobjects/homePage'
import { ContactPage } from '../src/pageobjects/contactPage';
import { SubscribePage } from '../src/pageobjects/subscribePage';


test.describe.configure({ mode: "serial", retries: 0 });

const projects = ['chromium', 'firefox', 'Mobile Chrome'];

for (const project of projects) {
  test.describe(`Test 3dnews in ${project}`, () => {
    
    test('Проверка заголовка страницы', async ({ page }) => {
      const homePage = new HomePage(page);

      await homePage.openPage();
      await homePage.checkTitle();
    });

      test('Наличие раздела Офис', async ({ page }) => {
      const homePage = new HomePage(page);
      const contactPage = new ContactPage(page);

      await homePage.openPage();
      await homePage.clickOnContactsLink();
      await contactPage.checkThatHeaderIsVisible();
  });

    test('Неуспешная подписка на рассылку (невалидный e-mail)', async ({ page }) => {
      const subscribePage = new SubscribePage(page);

      await subscribePage.openPage();
      await subscribePage.subscriptionToNewsletterUpdates();
      await subscribePage.checkErrorSubscribe();
  });

    test('Отображение текущей даты на главной странице', async ({ page }) => {
      const homePage = new HomePage(page);

      await homePage.openPage();
      await homePage.checkCurrentDate();
});

    test('Переход на главную страницу по клику на логотип', async ({ page }) => {
      const subscribePage = new SubscribePage(page);
      const homePage = new HomePage(page);

      await subscribePage.openPage();
      await subscribePage.clickOnLogo();
      const currentURL = page.url();
      expect(currentURL).toBe(homePage.urlPage);
});
  });
}