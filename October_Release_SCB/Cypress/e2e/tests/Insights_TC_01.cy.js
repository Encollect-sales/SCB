import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import InsightsPage from '../pages/InsightsPage';

describe('Primary Allocation Insights - Verify that Product Hierarchy allows adding Product Group, Product, and Sub Product', () => {

    let loginPage;
    let insightspage;

    it('Insights - TC_Ins_01', () => {

        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('insights').then(locators => {
            insightspage = new InsightsPage(locators);
        });

        getTestData('loginData', 'login2').then(user => {

            // ✅ Log to verify exact keys coming from Excel
            cy.log('Full user object: ' + JSON.stringify(user));
            cy.log('Companyname: ' + user.Companyname);
            cy.log('email: ' + user.email);
            cy.log('password: ' + user.password);

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            cy.wait(2000);

            insightspage.TC_Ins_01();

        });

    });

});