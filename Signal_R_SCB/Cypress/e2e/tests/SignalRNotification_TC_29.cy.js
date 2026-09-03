import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import SignalRNotificationPage from '../pages/SignalRNotificationPage';
const path = require('path');

describe('SignalR Notification - Verify notification count badge update', () => {

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

    it('SignalR Notification - TC_29', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            cy.wait(7000);

            let beforeCount = 0;

            // Check notification badge BEFORE upload
            cy.get('body').then(($body) => {

                if ($body.find('.badge').length > 0) {

                    cy.get('.badge')
                        .invoke('text')
                        .then(text => {

                            beforeCount = Number(text.trim());

                            cy.log('Before Count : ' + beforeCount);

                        });

                } else {

                    beforeCount = 0;

                    cy.log('No notification badge found');

                }

            })

            .then(() => {

                // Download template
                notificationPage.downloadTemplate();

                cy.wait(5000);

                const sheetName = 'Sheet1';

                const data = {
                    A2: '1667',
                    B2: '99991',
                    C2: '2026-07-31'
                };

                const excelFileName = 'PrimaryTeleCallingAgency_Accountlevel.xlsx';

                const downloadsFolder = Cypress.config('downloadsFolder');

                const sourceFilePath = path.join(
                    downloadsFolder,
                    excelFileName
                );

                return cy.task('updateagencybulkuploadCell', {
                    filePath: sourceFilePath,
                    sheetName,
                    data
                })
                .then(() => cy.task('moveAllDownloadsToFixtures'))
                .then(() => {

                    // Upload file
                    notificationPage.uploadFile(excelFileName);

                    // Wait for notification generation
                    cy.wait(5000);

                    // Verify badge count increased
                    notificationPage.SignalRNotification_29(beforeCount);

                });

            });

        });

    });

});