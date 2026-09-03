import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import CollectionStrategyPage from '../pages/CollectionStrategyPage';

describe('TC_116_POS - Design Digital Strategy submenu', () => {
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

    it('Verify Design Digital Strategy submenu is visible', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            collectionStrategyPage.verifyDesignDigitalStrategyVisible();
        });
    });
});