
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import SignalRNotificationPage from '../pages/SignalRNotificationPage';

const path = require('path');

describe('Agency Bulk Allocation Customer Level Telecalling Agency - Verify multiple sequential uploads', () => {

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

    it('Customer Level Field Agency - TC_43', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            cy.wait(7000);
            cy.get(".btn.btn-shade-danger").click({force:true});
            const excelFileName = 'PrimaryTelecallingAgency_CustomerLevel.xlsx';
            const downloadsFolder = Cypress.config('downloadsFolder');

            // =======================
            // First Upload
            // =======================

            notificationPage.downloadTemplatetelecust();

            cy.wait(5000);

            let sourceFilePath = path.join(
                downloadsFolder,
                excelFileName
            );

            cy.readFile(sourceFilePath, { timeout: 15000 }).should('exist');

            cy.task('updateagencybulkuploadCell', {
                filePath: sourceFilePath,
                sheetName: 'Sheet1',
                data: {
                    A2: '41174',
                    B2: '1203',
                    C2: '2026-07-28'
                }
            })
            .then(() => {

                return cy.task('moveAllDownloadsToFixtures');

            })
            .then(() => {

                notificationPage.uploadFiletelecust(excelFileName);

            });

            cy.wait(25000);

            // =======================
            // Second Upload
            // =======================

            notificationPage.downloadTemplatetelecust();

            cy.wait(5000);

            sourceFilePath = path.join(
                downloadsFolder,
                excelFileName
            );

            cy.readFile(sourceFilePath, { timeout: 15000 }).should('exist');

            cy.task('updateagencybulkuploadCell', {
                filePath: sourceFilePath,
                sheetName: 'Sheet1',
                data: {
                    A2: '41175',
                    B2: '1203',
                    C2: '2026-07-28'
                }
            })
            .then(() => {

                return cy.task('moveAllDownloadsToFixtures');

            })
            .then(() => {

                notificationPage.uploadFiletelecust(excelFileName);

            });

            cy.wait(20000);

            // =======================
            // Third Upload
            // =======================

            notificationPage.downloadTemplatetelecust();

            cy.wait(5000);

            sourceFilePath = path.join(
                downloadsFolder,
                excelFileName
            );

            cy.readFile(sourceFilePath, { timeout: 15000 }).should('exist');

            cy.task('updateagencybulkuploadCell', {
                filePath: sourceFilePath,
                sheetName: 'Sheet1',
                data: {
                    A2: '41176',
                    B2: '1203',
                    C2: '2026-07-28'
                }
            })
            .then(() => {

                return cy.task('moveAllDownloadsToFixtures');

            })
            .then(() => {

                notificationPage.uploadFiletelecust(excelFileName);

            });

            cy.wait(20000);

            // Verify notification panel
            notificationPage.openNotificationPanel();

            // Verify three success notifications are displayed
            notificationPage.verifySuccessNotificationCount(3);

        });

    });

});

