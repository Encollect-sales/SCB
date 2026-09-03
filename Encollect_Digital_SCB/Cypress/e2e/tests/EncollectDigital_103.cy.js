import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import CommunicationPage from '../pages/CommunicationPage';

describe('TC_103_POS - On PTP Date Trigger', () => {
    let loginPage;
    let communicationPage;

    before(() => {
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });
        getLocators('Communication').then(locators => {
            communicationPage = new CommunicationPage(locators);
        });
    });

    it('Verify trigger creation for On PTP Date', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            communicationPage.verifyOnPTPDateTrigger();
        });
    });
});