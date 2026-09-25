import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import SettlementPage from '../pages/SettlementPage';

describe('Settlement - Taking the percentage value of Interest Outstanding', () => {

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

    it('TC_001 - Taking the percentage value of Interest Outstanding', () => {

        getTestData('loginData', 'BranchManagerLogin').then(user => {

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

            settlementPage.NavigateToSettlement();
            settlementPage.NavigateToSettlementRequestInformationPage();

        });

    });

});