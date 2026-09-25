import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import AIPoweredPage from '../pages/AIPoweredPage';

describe('TC_112_NEG - WA Bot access restriction', () => {
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

    it('Verify WA Bot is not accessible for restricted user', () => {
        getTestData('restrictedLoginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            aiPoweredPage.verifyWABotNotAccessible();
        });
    });
});