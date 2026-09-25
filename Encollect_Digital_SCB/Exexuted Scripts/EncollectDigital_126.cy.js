import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import CollectionStrategyPage from '../pages/CollectionStrategyPage';

describe('TC_126_POS - Navigate to Digital Campaigns', () => {
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

    it('Verify user can navigate to Digital Campaigns', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            collectionStrategyPage.navigateToDigitalCampaigns();
        });
    });
});