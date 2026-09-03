
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import SignalRNotificationPage from '../pages/SignalRNotificationPage';

const path = require('path');

describe('Agent Bulk Allocation Customer Level Agent  - Verify single notification for failed file upload', () => {

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

    it('Agent Bulk Allocation Account Level Agent ', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            cy.wait(7000);

            notificationPage.downloadTemplateAgentBulkAllocationCustomerLevelstaff();

            cy.wait(5000);

            const excelFileName = 'ENCollectSecondaryAllocationCollectionStaff_Customerlevel.xlsx';

            const downloadsFolder = Cypress.config('downloadsFolder');

            const sourceFilePath = path.join(
                downloadsFolder,
                excelFileName
            );

            cy.readFile(sourceFilePath, { timeout: 15000 }).should('exist');

            const sheetName = 'Sheet1';

            const data = {
                A2: '1667',
                B2: '4822',
                C2: '2027-08-08'
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

                notificationPage.uploadFileAgentBulkAllocationCustomerLevelstaff(excelFileName);

                cy.wait(6000);

                notificationPage.verifyTransactionIdDisplayed();

                // Verify exactly one success notification
                // notificationPage.verifySingleSuccessNotification();
                notificationPage.FailedNotificationCustomer();


            });

        });

    });

});

