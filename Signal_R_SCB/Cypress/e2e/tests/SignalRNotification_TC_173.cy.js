import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import SignalRNotificationPage from '../pages/SignalRNotificationPage';

const path = require('path');

describe('TC_79 - Agent Bulk Allocation Account Level Staff - Verify multiple sequential uploads', () => {

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

    it('Agent Bulk Allocation Account Level Staff - TC_79', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            cy.wait(7000);

            const sheetName = 'Sheet1';
            const downloadsFolder = Cypress.config('downloadsFolder');
            const excelFileName = 'ENCollectSecondaryAllocationCollectionStaff_Accountlevel.xlsx';

            // Sequential Upload 1
            notificationPage.downloadTemplateAgentBulkAllocationAccountLevelStaff();
            cy.wait(5000);

            let sourceFilePath = path.join(downloadsFolder, excelFileName);
            cy.readFile(sourceFilePath, { timeout: 15000 }).should('exist');

            cy.task('updateagencybulkuploadCell', {
                filePath: sourceFilePath,
                sheetName,
                data: { A2: '1667' }
            })
            .then(() => cy.task('moveAllDownloadsToFixtures'))
            .then(() => {

                notificationPage.uploadFileAgentBulkAllocationAccountLevelStaff(excelFileName);
                cy.wait(6000);
                notificationPage.verifySingleSuccessNotification();

            })
            .then(() => {

                // Sequential Upload 2
                notificationPage.downloadTemplateAgentBulkAllocationAccountLevelStaff();
                cy.wait(5000);

                sourceFilePath = path.join(downloadsFolder, excelFileName);
                cy.readFile(sourceFilePath, { timeout: 15000 }).should('exist');

                cy.task('updateagencybulkuploadCell', {
                    filePath: sourceFilePath,
                    sheetName,
                    data: { A2: '1667' }
                })
                .then(() => cy.task('moveAllDownloadsToFixtures'))
                .then(() => {

                    notificationPage.uploadFileAgentBulkAllocationAccountLevelStaff(excelFileName);
                    cy.wait(6000);
                    notificationPage.verifySingleSuccessNotification();

                })
                .then(() => {

                    // Sequential Upload 3
                    notificationPage.downloadTemplateAgentBulkAllocationAccountLevelStaff();
                    cy.wait(5000);

                    sourceFilePath = path.join(downloadsFolder, excelFileName);
                    cy.readFile(sourceFilePath, { timeout: 15000 }).should('exist');

                    cy.task('updateagencybulkuploadCell', {
                        filePath: sourceFilePath,
                        sheetName,
                        data: { A2: '1667' }
                    })
                    .then(() => cy.task('moveAllDownloadsToFixtures'))
                    .then(() => {

                        notificationPage.uploadFileAgentBulkAllocationAccountLevelStaff(excelFileName);
                        cy.wait(6000);
                        notificationPage.verifySingleSuccessNotification();

                        // Verify total notification count matches number of uploads
                        notificationPage.verifyNotificationCountMatchesUploads(3);

                    });

                });

            });

        });

    });

});
