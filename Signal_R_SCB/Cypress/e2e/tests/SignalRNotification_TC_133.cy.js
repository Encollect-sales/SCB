import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import SignalRNotificationPage from '../pages/SignalRNotificationPage';

const path = require('path');

describe('Agency Bulk Allocation Customer Level Telecalling Agency - Verify Clear All button', () => {

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

    it('Customer Level Field Agency - TC_46', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            cy.wait(7000);

            // Download Customer Level Template
            notificationPage.downloadTemplatetelecust();

            cy.wait(5000);

            const excelFileName = 'PrimaryTelecallingAgency_CustomerLevel.xlsx';

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
                B2: '1203',
                C2: '2026-07-28'
            };

            // Update Excel file
            cy.task('updateagencybulkuploadCell', {
                filePath: sourceFilePath,
                sheetName,
                data
            })
            .then(() => {

                // Move updated file to fixtures
                return cy.task('moveAllDownloadsToFixtures');

            })
            .then(() => {

                // Upload updated file
                notificationPage.uploadFiletelecust(excelFileName);

                cy.wait(6000);

                // Open Notification Panel
                notificationPage.openNotificationPanel();

                // Verify notification is present
                notificationPage.verifySingleSuccessNotification();

                // Click Clear All button
                notificationPage.clickClearAllButton();

                cy.wait(2000);

                // Verify notification queue is empty
                notificationPage.verifyNotificationQueueEmpty();

            });

        });

    });

});