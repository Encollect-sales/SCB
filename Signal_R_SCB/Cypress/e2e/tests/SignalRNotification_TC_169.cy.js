import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import SignalRNotificationPage from '../pages/SignalRNotificationPage';

const path = require('path');

describe('TC_75 - Agent Bulk Allocation Account Level Staff - Verify unread notification toggle functionality', () => {

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

    it('Agent Bulk Allocation Account Level Staff - TC_75', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            cy.wait(7000);

            notificationPage.downloadTemplateAgentBulkAllocationAccountLevelStaff();

            cy.wait(5000);

            const excelFileName = 'ENCollectSecondaryAllocationCollectionStaff_Accountlevel.xlsx';

            const downloadsFolder = Cypress.config('downloadsFolder');

            const sourceFilePath = path.join(
                downloadsFolder,
                excelFileName
            );

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

                notificationPage.uploadFileAgentBulkAllocationAccountLevelStaff(excelFileName);

                cy.wait(6000);

                notificationPage.verifyTransactionIdDisplayed();

                // Mark a few notifications as read
                notificationPage.markNotificationsAsRead();

                cy.wait(2000);

                // Enable the unread notifications toggle
                notificationPage.enableUnreadNotificationToggle();

                cy.wait(2000);

                // Only unread notifications should be visible
                notificationPage.verifyOnlyUnreadNotificationsDisplayed();

            });

        });

    });

});
