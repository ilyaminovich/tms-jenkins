import HomePage from './home.page';
import LoginPage from './login.page';
import SearchResultPage from './searchResult.page';

class PageFactory {
    static getPage(pageName: string) {
        switch (pageName) {
            case 'home':
                return new HomePage();
            case 'login':
                return new LoginPage();
            case 'searchResult':
                return new SearchResultPage();
            default:
                throw new Error(`No page found with name: ${pageName}`);
        }
    }
}

export default PageFactory;