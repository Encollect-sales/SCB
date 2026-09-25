import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import CollectionStrategyPage from '../pages/CollectionStrategyPage';

describe('TC_117_POS - Digital Strategies submenu', () => {
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

    it('Verify Digital Strategies submenu is visible', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            collectionStrategyPage.verifyDigitalStrategiesVisible();
        });
    });
});