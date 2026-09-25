import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import SettlementPage from '../pages/SettlementPage';

describe('Settlement -Approving process form collection head ids (L3)-Verify whether the JA (Joint Approval) badge is displayed. ', () => {

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

    it( 'Verify whether the JA (Joint Approval) badge is displayed.', () => {

        getTestData('loginData', 'CityCollectionHeadLogin').then(user => {

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

            settlementPage.NavigateToMyactionqueue();
            // settlementPage.Updatecasestatuspopup();
            // settlementPage.RenegotiateCaseStatus();

        });

    });

});