import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import MastersUploadPage from '../pages/MasterUploadPage';

describe('ENCollect Digital - Bulk Upload Masters - Select Master Template', () => {

    let loginPage;
    let mastersUploadPage;

    before(() => {

        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('MastersUpload').then(locators => {
            mastersUploadPage = new MastersUploadPage(locators);
        });

        Cypress.on('uncaught:exception', (err) => {

            if (err.message.includes('ResizeObserver loop completed with undelivered notifications.')) {
                return false;
            }

        });

    });

    it('TC_017_POS - Verify user can select a master template', () => {

        getTestData('loginData', 'login').then(user => {

            // Login
            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            // Navigate to Bulk Upload Masters
            mastersUploadPage.NavigateToBulkUploadMasters();

            // Select Bank Master
            mastersUploadPage.selectMasterTemplate(
                'Bank Master',
                '1'
            );

            // Verify selected master template is displayed
            cy.get('#download-template-type')
                .find('option:selected')
                .should('have.text', ' Bank Master ');

        });

    });

});