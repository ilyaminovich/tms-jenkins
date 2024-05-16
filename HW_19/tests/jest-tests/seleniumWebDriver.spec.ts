//Selenium WebDriver

import {Builder, By, until, WebDriver, Key} from 'selenium-webdriver';
import 'chromedriver';


describe('Onliner.by UI Tests', () => {
    let driver: WebDriver;

    beforeAll(async () => {
        driver = await new Builder().forBrowser('chrome').build();
    });


    describe('CSS', () => {

        beforeEach(async () => {
            await driver.manage().window().maximize();
            await driver.get('https://www.onliner.by/');
        });


        it('Неудачная попытка входа', async () => {
        //Клик по кнопке "Вход"
            const loginButton = await driver.findElement(By.css('div.auth-bar__item.auth-bar__item--text'));
            await loginButton.click(); 
        //Ввод невалидных учетных данных
            const username = await driver.findElement(By.css("input[placeholder='Ник или e-mail']"));
            await username.sendKeys('loginTEST');
            const password = await driver.findElement(By.css("input[placeholder='Пароль']"));
            await password.sendKeys('password');
        //Клик по кнопке "Войти"
            const loginButtonAut = await driver.findElement(By.css("button.auth-button.auth-button_primary"));
            await loginButtonAut.click();
        //Проверка наличия сообщения об ошибке
            const errorMessage = await driver.wait(until.elementLocated(By.css('div.auth-form__description_error')), 5000);
            const errorMessageText = await errorMessage.getText();
            expect(errorMessageText).toContain('Неверный логин или пароль');
        });

        it('Открытие раздела "Каталог"', async () => {
            const catalogButton = await driver.findElement(By.css("a.b-main-navigation__link:nth-child(2)> span.b-main-navigation__text"));
            await catalogButton.click();
            await driver.wait(until.urlIs('https://catalog.onliner.by/'), 10000);
            const currentUrl = await driver.getCurrentUrl();
            expect(currentUrl).toBe('https://catalog.onliner.by/');
        });
    });

    describe('XPath', () => {

        beforeEach(async () => {
            await driver.manage().window().maximize();
            await driver.get('https://profile.onliner.by/registration');
        });

            it('Проверка валидации "Минимум 8 символов" к полю пароль', async () => {
                const password = await driver.findElement(By.xpath('//input[@placeholder="Придумайте пароль"]'));
                await password.sendKeys('Qwertyu');
                const message = await driver.findElement(By.xpath("//div[contains(text(), 'Минимум 8 символов') and contains(@class, 'auth-form__description')][contains(@class, 'auth-form__description_primary')][contains(@class, 'auth-form__description_tiny')][contains(@class, 'auth-form__description_condensed-other')]"));
                const MessageValidation = await message.getText();
                expect(MessageValidation).toContain('Минимум 8 символов');
            });
  

            it('Отображение страницы подтверждения e-mail', async () => {
                const email = await driver.findElement(By.xpath('//input[@placeholder="Ваш e-mail"]'));
                await email.sendKeys('bovidoc487@nweal.com');
                const password = await driver.findElement(By.xpath('//input[@placeholder="Придумайте пароль"]'));
                await password.sendKeys('123Qwerty');
                const passwordRepeat = await driver.findElement(By.xpath('//input[@placeholder="Повторите пароль"]'));
                await passwordRepeat.sendKeys('123Qwerty');
                const checkbox = await driver.findElement(By.xpath('//span[@class="auth-form__checkbox-sign"]'));
                await checkbox.click();
                const registrationButton = await driver.findElement(By.xpath('//button[@class="auth-button auth-button_primary auth-button_middle auth-form__button auth-form__button_width_full"]'));
                await registrationButton.click();
                const button = await driver.wait(until.elementLocated(By.xpath('//a[@class="auth-button auth-button_appendant auth-button_middle auth-form__button auth-form__button_width_full"]')), 5000);
                const buttonText = await button.getText();
                expect(buttonText).toContain('Перейти в почту');
            });
    });  
    
    describe('By', () => {

        beforeEach(async () => {
            await driver.manage().window().maximize();
            await driver.get('https://www.onliner.by/');
        });

        it('Открытие раздела "Каталог"', async () => {
            const catalogButton = await driver.findElement(By.className('b-main-navigation__text'));
            await catalogButton.click();
            await driver.wait(until.urlIs('https://catalog.onliner.by/'), 10000);
            const currentUrl = await driver.getCurrentUrl();
            expect(currentUrl).toBe('https://catalog.onliner.by/');
        });
    });    

        afterAll(async () => {
            await driver.quit();
        });    
});