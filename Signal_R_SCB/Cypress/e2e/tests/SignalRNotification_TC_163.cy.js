import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import SignalRNotificationPage from '../pages/SignalRNotificationPage';

const path = require('path');

describe('TC_251 - Agency Bulk Deallocation Customer Level - Validate notification count', () => {

    let loginPage;
    let notificationPage;

    before(() => {

        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('SignalRNotification').then(locators => {
            notificationPage = new SignalRNotificationPage(locators);
        });

    });

    it('Agency Bulk Deallocation Customer Level - TC_251', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            cy.wait(7000);

            notificationPage.downloadTemplateCustomerLevelDeallocationField();

            cy.wait(5000);

            const excelFileName = 'CustomerLevel_Deallocation.xlsx';

            const downloadsFolder = Cypress.config('downloadsFolder');

            const sourceFilePath = path.join(downloadsFolder, excelFileName);

            cy.readFile(sourceFilePath, { timeout: 15000 }).should('exist');

            const sheetName = 'Sheet1';

            const data = {
                A2: '1667'
            };

            cy.task('updateagencybulkuploadCell', {
                filePath: sourceFilePath,
                sheetName,
                data
            })
            .then(() => {

                return cy.task('moveAllDownloadsToFixtures');

            })
            .then(() => {

                notificationPage.uploadFileCustomerLevelDeallocationfield(excelFileName);

                cy.wait(6000);

                notificationPage.verifyTransactionIdDisplayed();

                // Expected after bug fix
                notificationPage.verifySingleNotification();

            });

        });

    });

});