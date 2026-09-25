import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import CollectionStrategyPage from '../pages/CollectionStrategyPage';

describe('TC_113_POS - Collection Strategy module', () => {
    let loginPage;
    let collectionStrategyPage;

    before(() => {
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });
        getLocators('CollectionStrategy').then(locators => {
            collectionStrategyPage = new CollectionStrategyPage(locators);
        });
    });

    it('Verify Collection Strategy module is visible', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            collectionStrategyPage.verifyCollectionStrategyVisible();
        });
    });
});