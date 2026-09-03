import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import SignalRNotificationPage from '../pages/SignalRNotificationPage';

const path = require('path');

describe('TC_76 - Agent Bulk Allocation Account Level Staff - Verify unread notification count accuracy', () => {

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

    it('Agent Bulk Allocation Account Level Staff - TC_76', () => {

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

                // Capture the unread count before reading
                notificationPage.getUnreadNotificationCount();

                // Mark notifications as read
                notificationPage.markNotificationsAsRead();

                cy.wait(2000);

                // Verify the unread count updates correctly
                notificationPage.verifyUnreadNotificationCountUpdated();

            });

        });

    });

});
