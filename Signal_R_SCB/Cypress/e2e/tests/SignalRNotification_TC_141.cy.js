import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import SignalRNotificationPage from '../pages/SignalRNotificationPage';

const path = require('path');

describe('TC_55 - Agency Bulk Deallocation Account Level(field) - Verify multiple sequential uploads', () => {

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

    it('Agency Bulk Deallocation Account Level - TC_55', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            cy.wait(20000);
            cy.get(".btn.btn-shade-danger").click({force:true});
            cy.wait(2000);
            const excelFileName = 'UnAllocation_acclevel.xlsx';
            const downloadsFolder = Cypress.config('downloadsFolder');
            const sourceFilePath = path.join(downloadsFolder, excelFileName);
            const sheetName = 'Sheet1';

            // ---------- First Upload ----------
            notificationPage.downloadTemplatedeallocationaccount();

            cy.wait(5000);

            cy.readFile(sourceFilePath, { timeout: 15000 }).should('exist');

            cy.task('updateagencybulkuploadCell', {
                filePath: sourceFilePath,
                sheetName,
                data: {
                    A2: '1667'
                }
            })
            .then(() => cy.task('moveAllDownloadsToFixtures'))
            .then(() => {

                notificationPage.uploadFileTemplatedeallocationaccount(excelFileName);

                cy.wait(25000);

            });

            // ---------- Second Upload ----------
            notificationPage.downloadTemplatedeallocationaccount();

            cy.wait(25000);

            cy.task('updateagencybulkuploadCell', {
                filePath: sourceFilePath,
                sheetName,
                data: {
                    A2: '1667'
                }
            })
            .then(() => cy.task('moveAllDownloadsToFixtures'))
            .then(() => {

                notificationPage.uploadFileTemplatedeallocationaccount(excelFileName);

                cy.wait(25000);

            });

            // ---------- Third Upload ----------
            notificationPage.downloadTemplatedeallocationaccount();

            cy.wait(25000);

            cy.task('updateagencybulkuploadCell', {
                filePath: sourceFilePath,
                sheetName,
                data: {
                    A2: '1667'
                }
            })
            .then(() => cy.task('moveAllDownloadsToFixtures'))
            .then(() => {

                notificationPage.uploadFileTemplatedeallocationaccount(excelFileName);

                cy.wait(25000);

                // // Open Notification Panel
                // notificationPage.SignalRNotification_01();

             
                notificationPage.verifyNotificationCount(3);

            });

        });

    });

});