//Selenium WebDriver

import driver from "../../constants/driver";
import { HomePage } from '../../src/pageObjects/homePage';
import { HeaderPage } from '../../src/pageObjects/headerPage';
import { LoginPage } from '../../src/pageObjects/loginPage';
import { CatalogPage } from '../../src/pageObjects/catalogPage';
import { RegistrationPage } from '../../src/pageObjects/registrationPage';
// import PageFactory from "../../src/pageObjects/pageFactory";

const homePage = HomePage.getInstance();
const homePageSecond = HomePage.getInstance(); //для проверки Singleton
const headerPage = new HeaderPage(driver);
const loginPage = new LoginPage(driver);
const catalogPage = new CatalogPage(driver);
const registrationPage = new RegistrationPage(driver);

// PageFactory
// const homePage = PageFactory.getPage(driver, "HomePage") as HomePage
// const headerPage = PageFactory.getPage(driver, "HeaderPage") as HeaderPage
// const loginPage = PageFactory.getPage(driver, "LoginPage") as LoginPage
// const catalogPage = PageFactory.getPage(driver, "CatalogPage") as CatalogPage
// const registrationPage = PageFactory.getPage(driver, "RegistrationPage") as RegistrationPage


jest.setTimeout(100000);

describe('Onliner.by UI Tests', () => {

    beforeAll(async () => {
        await driver;
    });


    describe('CSS', () => {

        beforeEach(async () => {
            await homePage.maximizeWindow();
            await homePage.openPage();
        });


        it('Неудачная попытка входа', async () => {
            await headerPage.clickOnEnterLoginButton();
            await loginPage.login('loginTEST', 'password');
            const errorMessageText = await loginPage.waitForElementToBeLocatedAndGetText();
            expect(errorMessageText).toEqual('Неверный логин или пароль');
        });

        it('Открытие раздела "Каталог"', async () => {
            await headerPage.clickCatalogSectionButton();
            await catalogPage.waitForPageLoad();
            const urlCatalogSection = await catalogPage.getCurrentUrlValue();
            expect(urlCatalogSection).toBe('https://catalog.onliner.by/');
        });
    });

    describe('XPath', () => {

        beforeEach(async () => {
            await registrationPage.maximizeWindow();
            await registrationPage.openPage();
        });

            it('Проверка валидации "Минимум 8 символов" к полю пароль', async () => {
                await registrationPage.enterPassword("Qwerty");
                const textPasswordValidationMessage = await registrationPage.findElementAndGetText();
                expect(textPasswordValidationMessage).toEqual('Минимум 8 символов');
            });
  

            it('Отображение страницы подтверждения e-mail', async () => {
                await registrationPage.registration('kukak.test@tut.by', '123Qwerty', '123Qwerty', true);
                const emailButtonText = await registrationPage.waitForElementToBeLocatedAndGetText();
                expect(emailButtonText).toEqual('Перейти в почту');
            });
    });  
    
    describe('By', () => {

        beforeEach(async () => {
            await homePage.maximizeWindow();
            await homePage.openPage();
        });

        it('Открытие раздела "Регистрация"', async () => {
            await headerPage.clickOnEnterLoginButton();
            await loginPage.clickOnRegisterButton();
            await registrationPage.waitForPageLoad(6000);
            const currentUrl = await registrationPage.getCurrentUrlValue();
            expect(currentUrl).toBe('https://profile.onliner.by/registration');
        });
    });    

    afterAll(async () => {
            await driver.quit();
    });    
});





//проверка, что Singleton применен
if (homePage === homePageSecond) {
    console.log("Объекты равны");
} else {
    console.log("Объекты не равны");
}