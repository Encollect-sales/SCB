import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import SignalRNotificationPage from '../pages/SignalRNotificationPage';

const path = require('path');

describe('TC_52 - Agency Bulk Deallocation Account Level(field) - Verify unread notification count accuracy', () => {

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

    it('Agency Bulk Deallocation Account Level - TC_52', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            cy.wait(7000);

            // Download Account Level Template
            notificationPage.downloadTemplatedeallocationaccount();

            cy.wait(5000);

            const excelFileName = 'UnAllocation_acclevel.xlsx';

            const downloadsFolder = Cypress.config('downloadsFolder');

            const sourceFilePath = path.join(
                downloadsFolder,
                excelFileName
            );

            // Verify downloaded file exists
            cy.readFile(sourceFilePath, { timeout: 15000 }).should('exist');

            const sheetName = 'Sheet1';

            const data = {
                A2: '1667'
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

                // Upload File
                notificationPage.uploadFileTemplatedeallocationaccount(excelFileName);

                cy.wait(6000);

                // Open Notification Panel
                notificationPage.SignalRNotification_01();

                // Capture unread notification count
                notificationPage.getUnreadNotificationCount().then((countBefore) => {

                    cy.log('Unread Count Before: ' + countBefore);

                    // Mark first notification as read
                    notificationPage.markFirstNotificationAsRead();

                    cy.wait(3000);

                    // Open Notification Panel again
                    notificationPage.SignalRNotification_01();

                    // Capture updated unread count
                    notificationPage.getUnreadNotificationCount().then((countAfter) => {

                        cy.log('Unread Count After: ' + countAfter);

                        expect(Number(countAfter)).to.eq(Number(countBefore) - 1);

                    });

                });

            });

        });

    });

});