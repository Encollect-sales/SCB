import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import LegalBulkUploadPage from '../pages/LegalBulkUploadPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('Legal Bulk Upload - Today Notice Date Validation', () => {

    let loginPage;
    let legalPage;

    before(() => {

        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('LegalBulkUpload').then(locators => {
            legalPage = new LegalBulkUploadPage(locators);
        });

    });

    it('TC_039 - Verify upload succeeds when Notice Date is today', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            cy.wait(2000);

            legalPage.DownloadLegalTemplate();

            const sheetName = 'Sheet1';
            const fileName = 'BulkUploadOfSarfaesiDetails.xlsx';

            Cypress.on('uncaught:exception', (err) => {

                if (err.message.includes('ResizeObserver loop completed with undelivered notifications.')) {
                    return false;
                }

            });

            const today = new Date().toISOString().split('T')[0];
            const todayDisplay = new Date().toLocaleDateString('en-GB');

            const partyName = faker.person.fullName();
            const noticeReferenceNo = `NRN${faker.string.numeric(8)}`;
            const trackingId = `TRK${faker.string.numeric(10)}`;

            const data = {

                'A2': '210000001692',
                'B2': '68210000005802',
                'C2': partyName,
                'D2': 'Father',
                'E2': 'Create',
                'F2': 'Demand Notice Issued',
                'G2': 'In Progress',
                'H2': noticeReferenceNo,
                'I2': today,
                'J2': 'Delivered',
                'K2': today,
                'L2': 'Delivered',
                'M2': today,
                'N2': 'Delivered',
                'O2': today,
                'P2': trackingId

            };

            const downloadsFolder = Cypress.config('downloadsFolder');
            const sourceFilePath = path.join(downloadsFolder, fileName);

            cy.task('updateLegalBulkCell', {
                filePath: sourceFilePath,
                sheetName,
                data
            }).then(() => {
                cy.log('Excel updated successfully');
            });

            cy.task('moveAllDownloadsToFixtures').then(result => {
                cy.log(result);
            });

            legalPage.UploadLegalTemplate(fileName);

            legalPage.BulkLegalUpload_Processed();

            legalPage.OpenAccountDetailsScreen();

            legalPage.EnterLoanAccountNumber('68210000005802');

            legalPage.OpenCustomerAccount();

            legalPage.ClickLegalDetailsTab();

            legalPage.VerifyLegalDetails({

                noticeReferenceNo,
                sarfaesiStage: 'Demand Notice Issued',
                sarfaesiStatus: 'In Progress',
                noticeDate: todayDisplay,
                whatsappStatus: 'Delivered',
                whatsappDate: todayDisplay,
                smsStatus: 'Delivered',
                smsDate: todayDisplay,
                physicalStatus: 'Delivered',
                physicalDate: todayDisplay,
                trackingId

            });

        });

    });

});