import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import AIPoweredPage from '../pages/AIPoweredPage';

describe('TC_106_POS - Verify AI Powered module is visible', () => {
    let loginPage;
    let aiPoweredPage;

    before(() => {
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });
        getLocators('AIPowered').then(locators => {
            aiPoweredPage = new AIPoweredPage(locators);
        });
    });

    it('Verify AI Powered module is visible in left navigation', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            aiPoweredPage.verifyAIPoweredMenuVisible();
        });
    });
});