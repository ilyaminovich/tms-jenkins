import { HomePage } from "../support/pages/homePage"
import { TopBar } from "../support/pages/topBar"
import { LoginPage } from "../support/pages/loginPage"
import { RegistrationPage } from "../support/pages/registrationPage"

const homePage = new HomePage();
const navigstionBar = new TopBar();
const loginPage = new LoginPage();
const registrationPage = new RegistrationPage();


describe("Test `Drive2.ru`", ()=> {

    describe("Test top bar links", ()=> {
        beforeEach(() => {
            homePage.openPage();
    });
        it("click on LoginButton", ()=> {
            cy.fixture("linkName.json").then((fixture) => {
                const { LOGIN_LINK } = fixture

                navigstionBar.clickOnTopBarLink(LOGIN_LINK);
                loginPage.checkThatUrlIs();
            })
        })
        it("click on RegistrationButton", ()=> {
            cy.fixture("linkName.json").then((fixture) => {
                const { SIGNUP_LINK } = fixture

                navigstionBar.clickOnTopBarLink(SIGNUP_LINK);
                registrationPage.checkThatUrlIs();       
            });
        });
    });
    describe("Test personal account login", ()=> {
        beforeEach(() => {
            loginPage.openPage();
    });
        it("Unsuccessful login with invalid credentials", () => {
            cy.fixture("errorMessage.json").then((errorFixture) => {
                const { INVALID_LOGIN_OR_PASSWORD } = errorFixture

                cy.fixture("userData.json").then((usersFixture) => {
                    const { USER_INVALID } = usersFixture;
                    const USER = USER_INVALID.find((u: { PHONE?: string }) => u.PHONE);

                        cy.login(USER.PHONE, USER.PASSWORD);
                        loginPage.checkValidationError(INVALID_LOGIN_OR_PASSWORD);
                });
            });
        });

        it("An error message appears when you enter an incorrect phone number", () => {
            cy.fixture("errorMessage.json").then((fixture) => {
                const { EMAIL_OR_PHONE_NUMBER_REQUIRED } = fixture

                cy.fixture("userData.json").then((usersFixture) => {
                    const { USER_INVALID_DATA } = usersFixture;
                    const USER = USER_INVALID_DATA.find((u: { PHONE?: string }) => u.PHONE);

                        cy.login(USER.PHONE, USER.PASSWORD);
                        loginPage.checkValidationError(EMAIL_OR_PHONE_NUMBER_REQUIRED);
                });
            });
        });
    })

    describe('Search functionality', () => {
        beforeEach(() => {
            homePage.openPage();
        });
        
        it("Performs a search", () => {
            const query = 'Lamborghini'

                cy.search(query);
                cy.get('[data-slot="site-search.results"]').should('exist');
                cy.get('[data-slot="site-search.results"]').should('contain', query);
        });
  
        
        it('Intercepting and checking API response using cryptouid and cryptouid_sign', () => {
            // Перехват запроса, при необходимости изменение данных
            cy.intercept('GET', 'https://matchid.adfox.yandex.ru/getcookie', (req) => {
                req.reply({
                    statusCode: 200,
                    body: {
                        cryptouid: "17539208544009170762",
                        cryptouid_sign: "0d11033fe2b01181651a4e014b728599"
                    }
                });
            }).as('getCryptouid');
      
            cy.search('Audi');
            cy.wait('@getCryptouid').then((interception) => {
                expect(interception.response?.statusCode).to.equal(200);
                expect(interception.response?.body).to.have.property('cryptouid', "17539208544009170762");
                expect(interception.response?.body).to.have.property('cryptouid_sign', "0d11033fe2b01181651a4e014b728599");
            });
        });
    });
})