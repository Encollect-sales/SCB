import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import AIPoweredPage from '../pages/AIPoweredPage';

describe('TC_109_POS - Navigate to AI Call', () => {
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

    it('Verify user can navigate to AI Call screen', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            aiPoweredPage.navigateToAICall();
        });
    });
});