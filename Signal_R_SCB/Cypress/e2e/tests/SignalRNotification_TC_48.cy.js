import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import SignalRNotificationPage from '../pages/SignalRNotificationPage';
const path = require('path');

describe('SignalR Notification - Verify behavior if upload fails after confirmation', () => {

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

    it('SignalR Notification - TC_48', () => {

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
                A2: '',
                B2: '',
                C2: ''
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
                return cy.task('moveAllDownloadsToFixtures');
            })

            .then(() => {

                notificationPage.SignalRNotification_48(excelFileName);

            });

        });

    });

});