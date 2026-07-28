import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import SignalRNotificationPage from '../pages/SignalRNotificationPage';
const path = require('path');

describe('Verify clicking notification redirects to Allocation Status', () => {

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

    it('SignalR Notification - TC_87', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            cy.wait(7000);

            notificationPage.downloadTemplate();

            cy.wait(5000);

            const sheetName = 'Sheet1';

            const data = {
                A2: '1667',
                B2: '99991',
                C2: '2026-07-31',

                A3: '1668',
                B3: '999999',
                C3: '2026-07-31'
            };

            const excelFileName = 'PrimaryTeleCallingAgency_Accountlevel.xlsx';

            const downloadsFolder = Cypress.config('downloadsFolder');

            const sourceFilePath = path.join(
                downloadsFolder,
                excelFileName
            );

            cy.task('updateagencybulkuploadCell', {
                filePath: sourceFilePath,
                sheetName,
                data
            })

            .then(() => {

                cy.log('Excel updated successfully');

            })

            .then(() => {

                return cy.task('moveAllDownloadsToFixtures');

            })

            .then(() => {

                notificationPage.uploadFile(excelFileName);

                notificationPage.SignalRNotification_94();

            });

        });

    });

});