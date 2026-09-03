import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import SignalRNotificationPage from '../pages/SignalRNotificationPage';

const path = require('path');

describe('Customer Level Field Agency - Verify invalid file upload notification', () => {

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

    it('Customer Level Field Agency - TC_30', () => {

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

            // Invalid data
            const data = {
                A2: '999999',
                B2: '999999',
                C2: '2026-07-28'
            };

            // Update Excel
            cy.task('updateagencybulkuploadCell', {
                filePath: sourceFilePath,
                sheetName,
                data
            })
            .then(() => {

                cy.log('Customer Level Excel updated successfully with invalid data');

                return cy.task('moveAllDownloadsToFixtures');

            })
            .then((result) => {

                cy.log(result);

                // Upload invalid file
                notificationPage.uploadFilefieldcust(excelFileName);

                cy.wait(5000);

                // Open Notification Panel
                notificationPage.SignalRNotification_24();
                cy.wait(2000);
                notificationPage.verifySingleFailedNotification();
                notificationPage.verifyNoSuccessNotification();

            });

        });

    });

});