import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import SignalRNotificationPage from '../pages/SignalRNotificationPage';
const path = require('path');

describe('SignalR Notification - Customer Level Field Agency - Verify no failed notification for successful upload', () => {

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

    it('Customer Level Field Agency - TC_26', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            cy.wait(7000);
            notificationPage.downloadTemplatefieldcust();

            const excelFileName = 'PrimaryAgency_CustomerLevel.xlsx';
            const downloadsFolder = Cypress.config('downloadsFolder');
            const sourceFilePath = path.join(downloadsFolder, excelFileName);

            // Ensure the downloaded template actually exists before editing it
            cy.readFile(sourceFilePath, { timeout: 15000 }).should('exist');

            const sheetName = 'Sheet1';
            const data = {
                A2: '41174',
                B2: '84090',
                C2: '2026-07-28',
            };

            // Update Excel with valid data
            cy.task('updateagencybulkuploadCell', {
                filePath: sourceFilePath,
                sheetName,
                data
            })
            .then(() => {
                cy.log('Customer Level Excel updated successfully with valid data');
            })
            .then(() => {
                return cy.task('moveAllDownloadsToFixtures');
            })
            .then((result) => {

                cy.log(result);

                // Upload the valid file
                notificationPage.uploadFilefieldcust(excelFileName);

                // Wait for notification generation
                cy.wait(5000);

                // Verify only success notification appears
                notificationPage.verifySingleSuccessNotification();

                // Verify no failed notification appears
                notificationPage.verifyNoFailedNotification();

            });

        });

    });

});