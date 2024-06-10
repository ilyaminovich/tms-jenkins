import Page from '../pageobjects/page'
import { $ } from '@wdio/globals';

class HomePage extends Page {

    constructor() {
        super();
    }

    get searchStringElement() { return $('input[placeholder="Фильмы, сериалы, персоны"]'); }
    get logo() { return $('img.styles_img__3hWmL.kinopoisk-header-logo__img'); };
    get personalAccountButton() { return $('button.styles_loginButton__LWZQp'); };
    get watchMovieButtonElement() { return $('.branding-yandex-plus-button_root__tbyW3'); };
    get movieTicketSectionElement() { return $("//a[@class='styles_link__KtvyW'][contains(text(), 'Билеты в кино')]"); };


    public async searchForMovie(movieTitle: string) {
        const searchField = await this.searchStringElement;
        await searchField.setValue(movieTitle);
        await browser.keys('Enter');
    }
}

export default HomePage;