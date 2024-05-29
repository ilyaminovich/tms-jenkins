import Page from '../pageobjects/page'
import { $ } from '@wdio/globals';

class HomePage extends Page {
    public logoElement: string;
    public loginButtonPersonalAccount: string;
    public searchStringElement: string;
    public searchResultsTitleElement: string;
    public watchMovieButtonElement: string;
    public movieTicketSectionElement: string;

    constructor() {
        super();
        this.logoElement = 'img.styles_img__3hWmL.kinopoisk-header-logo__img';
        this.loginButtonPersonalAccount  = 'button.styles_loginButton__LWZQp';
        this.searchStringElement = 'input[placeholder="Фильмы, сериалы, персоны"]';
        this.searchResultsTitleElement = 'a[href="/film/325/sr/1/"][class="js-serp-metrika"][data-url="/film/325"][data-id="325"][data-type="film"]'
        this.watchMovieButtonElement = "//button[contains(text(), 'Смотреть кино')]";
        this.movieTicketSectionElement = "//a[@class='styles_link__KtvyW'][contains(text(), 'Билеты в кино')]"
    }

    get logo() {
        return $(this.logoElement);
    }

    get getButtonPersonalAccount() {
        return $(this.loginButtonPersonalAccount);
    }

    public async searchForMovie(movieTitle: string) {
        const searchField = await $(this.searchStringElement);
        await searchField.setValue(movieTitle);
        await browser.keys('Enter');
    }
}

export default HomePage;