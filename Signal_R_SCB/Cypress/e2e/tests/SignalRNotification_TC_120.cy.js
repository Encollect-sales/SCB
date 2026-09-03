import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import SignalRNotificationPage from '../pages/SignalRNotificationPage';

const path = require('path');

describe('Customer Level Field Agency - Verify correct notification message', () => {

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

    it('Customer Level Field Agency - TC_32', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            cy.wait(7000);

            // Download Customer Level Template
            notificationPage.downloadTemplatefieldcust();

            cy.wait(5000);

            const excelFileName = 'PrimaryAgency_CustomerLevel.xlsx';
            const downloadsFolder = Cypress.config('downloadsFolder');
            const sourceFilePath = path.join(
                downloadsFolder,
                excelFileName
            );

            // Verify downloaded file exists
            cy.readFile(sourceFilePath, { timeout: 15000 }).should('exist');

            const sheetName = 'Sheet1';

            const data = {
                A2: '41174',
                B2: '84090',
                C2: '2026-07-28'
            };

            // Update Excel
            cy.task('updateagencybulkuploadCell', {
                filePath: sourceFilePath,
                sheetName,
                data
            })
            .then(() => {

                cy.log('Customer Level Excel updated successfully');

                return cy.task('moveAllDownloadsToFixtures');

            })
            .then((result) => {

                cy.log(result);

                // Upload file
                notificationPage.uploadFilefieldcust(excelFileName);

                cy.wait(2000);
                notificationPage.SignalRNotification_120();

            });

        });

    });

});