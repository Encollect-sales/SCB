import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import AIPoweredPage from '../pages/AIPoweredPage';

describe('TC_107_POS - Verify AI Call submenu', () => {
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

    it('Verify AI Call submenu is available under AI Powered', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            aiPoweredPage.verifyAICallSubMenuVisible();
        });
    });
});