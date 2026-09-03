import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import SignalRNotificationPage from '../pages/SignalRNotificationPage';

const path = require('path');

describe('TC_40 - Verify unread notification count accuracy', () => {

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

    it('Agency Bulk Allocation Customer Level Telecalling Agency - TC_40', () => {

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

            // Update Excel
            cy.task('updateagencybulkuploadCell', {
                filePath: sourceFilePath,
                sheetName,
                data
            })
            .then(() => {

                return cy.task('moveAllDownloadsToFixtures');

            })
            .then(() => {

                // Upload file
                notificationPage.uploadFiletelecust(excelFileName);

                cy.wait(6000);

                // Open notification panel
                notificationPage.SignalRNotification_01();

                // Capture unread count before reading notification
                notificationPage.getUnreadNotificationCount().then((countBefore) => {

                    cy.log('Unread Count Before : ' + countBefore);

                    // Mark first notification as read
                    notificationPage.markFirstNotificationAsRead();

                    cy.wait(3000);

                    // Open notification panel again if it closes automatically
                    notificationPage.SignalRNotification_01();

                    // Verify unread count decreases by one
                    notificationPage.getUnreadNotificationCount().then((countAfter) => {

                        cy.log('Unread Count After : ' + countAfter);

                        expect(Number(countAfter)).to.eq(Number(countBefore) - 1);

                    });

                });

            });

        });

    });

});