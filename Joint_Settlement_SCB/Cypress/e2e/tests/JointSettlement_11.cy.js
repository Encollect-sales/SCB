import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import SettlementPage from '../pages/SettlementPage';

describe('Settlement - CollectionManager L2-Verify user can renegotiate the settlement request with remarks - Text validation for amount field', () => {

    let loginPage;
    let settlementPage;

    before(() => {

        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('Settlement').then(locators => {
            settlementPage = new SettlementPage(locators);
        });

    });

    it( 'Verify user can renegotiate the settlement request with remarks', () => {

        getTestData('loginData', 'CollectionManagerLogin').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            Cypress.on('uncaught:exception', (err) => {

                if (err.message.includes('ResizeObserver loop completed with undelivered notifications.')) {
                    return false;
                }

            });

            settlementPage.Clickonanysettlementrequest();
            settlementPage.Updatecasestatuspopup();
            settlementPage.RenegotiateCaseStatus();

        });

    });

});