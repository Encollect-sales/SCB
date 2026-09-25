import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import SettlementPage from '../pages/SettlementPage';

describe('Settlement - Zonal collection head L6-Verify Joint Approval Case popup details for City Collections Head', () => {

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

    it( 'Verify Joint Approval Case popup details for City Collections Head', () => {

        getTestData('loginData', 'ZonalCollectionHeadLogin').then(user => {

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
            settlementPage.clickRandomJABadge();
            settlementPage.VerifyCityCollectionsHeadJointApprovalPopup();
          

        });

    });

});