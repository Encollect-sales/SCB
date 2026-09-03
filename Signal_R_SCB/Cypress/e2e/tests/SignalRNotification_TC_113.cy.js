import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import SignalRNotificationPage from '../pages/SignalRNotificationPage';
const path = require('path');

describe('SignalR Notification - Customer Level Field Agency - Verify single success notification', () => {

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

    it('Customer Level Field Agency - TC_01', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            cy.wait(7000);
            notificationPage.downloadTemplatefieldcust();
            cy.wait(5000);
            const sheetName = 'Sheet1';
            const data = {
                A2: '41174',
                B2: '84090',
                C2: '2026-07-28'
            };

            const fileName = 'PrimaryAgency_CustomerLevel.xlsx';

            const downloadsFolder = Cypress.config('downloadsFolder');

            const sourceFilePath = path.join(
                downloadsFolder,
                fileName
            );

            // Update Excel
            cy.task('updateagencybulkuploadCell', {
                filePath: sourceFilePath,
                sheetName,
                data
            })
            .then(() => {
                cy.log('Customer Level Excel updated successfully');
            })
            .then(() => {
                return cy.task('moveAllDownloadsToFixtures');
            })
            .then((result) => {

                cy.log(result);

                // Upload updated file
                notificationPage.uploadFilefieldcust(fileName);

                // Wait for notification generation
                cy.wait(5000);

                // Verify only one success notification is generated
                notificationPage.verifySingleSuccessNotification();

            });

        });

    });

});