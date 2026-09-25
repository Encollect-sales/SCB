import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import CommunicationPage from '../pages/CommunicationPage';

describe('TC_086 - Search Communication Templates', () => {

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

    it('TC_086_POS - Verify Search Communication Templates is available', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            communicationPage.verifySearchCommunicationTemplates();

        });

    });

});