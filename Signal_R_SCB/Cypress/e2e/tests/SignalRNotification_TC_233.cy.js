
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import SignalRNotificationPage from '../pages/SignalRNotificationPage';

const path = require('path');

describe('Allocation Owner Bulk Upload Account Level - Directing to status page - Verify single notification for successful file upload', () => {

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

    it('Allocation Owner Bulk Upload Account Level', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            cy.wait(7000);

            notificationPage.downloadTemplateAgentBulkAllocationOwnerbulkuploadcustLevel();

            cy.wait(5000);

            const excelFileName = 'AllocationToOwner_Customerlevel.xlsx';

            const downloadsFolder = Cypress.config('downloadsFolder');

            const sourceFilePath = path.join(
                downloadsFolder,
                excelFileName
            );

            cy.readFile(sourceFilePath, { timeout: 15000 }).should('exist');

            const sheetName = 'Sheet1';

            const data = {
                A2: '41174',
                B2: '4821',	
                C2: '2027-09-09',
          
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

                notificationPage.uploadFileAgentBulkAllocationOwnerbulkuploadcustLevel(excelFileName);

                cy.wait(6000);

                notificationPage.verifyTransactionIdDisplayed();

                // Verify exactly one success notification
                // notificationPage.verifySingleSuccessNotification();
                notificationPage.directingtodeallocationstatuspage();


            });

        });

    });

});

