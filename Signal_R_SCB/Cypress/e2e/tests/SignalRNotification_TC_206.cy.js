
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import SignalRNotificationPage from '../pages/SignalRNotificationPage';

const path = require('path');

describe('Agent Bulk DeAllocation Customer Level agent- Verify single notification for successful file upload', () => {

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

    it('Agent Bulk DeAllocation Customer Level agent ', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            cy.wait(7000);

            notificationPage.downloadTemplateAgentBulkdeAllocationCustomerLevelagent();

            cy.wait(5000);

            const excelFileName = 'UnAllocation_acclevel.xlsx';

            const downloadsFolder = Cypress.config('downloadsFolder');

            const sourceFilePath = path.join(
                downloadsFolder,
                excelFileName
            );

            cy.readFile(sourceFilePath, { timeout: 15000 }).should('exist');

            const sheetName = 'Sheet1';

            const data = {
                A2: '68190000222635'
                
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

                notificationPage.uploadFileAgentBulkdeAllocationCustomerLevelagent(excelFileName);
                cy.wait(6000);
                notificationPage.verifyTransactionIdDisplayed();
                // notificationPage.verifySingleSuccessNotification();
                //notificationPage.directingtostatuspage();


            });

        });

    });

});

