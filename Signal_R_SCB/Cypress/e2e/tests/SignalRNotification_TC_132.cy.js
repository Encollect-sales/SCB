import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import SignalRNotificationPage from '../pages/SignalRNotificationPage';

const path = require('path');

describe('Agency Bulk Allocation Customer Level Telecalling Agency - Verify clicking notification redirects to Allocation Status screen', () => {

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

    it('Customer Level Field Agency - TC_45', () => {

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

                // Click on latest notification
                notificationPage.clickLatestNotification();

                cy.wait(3000);

                // Verify Allocation Status screen
                notificationPage.verifyAllocationStatusScreen();

            });

        });

    });

});