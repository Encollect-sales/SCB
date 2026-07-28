import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import LegalBulkUploadPage from '../pages/LegalBulkUploadPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('Legal Bulk Upload - Relationship Leading and Trailing Spaces Validation', () => {

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

    it('TC_078 - Verify upload succeeds when Relationship contains leading and trailing spaces', () => {

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

            const partyName = faker.person.fullName();
            const noticeReferenceNo = `NRN${faker.string.numeric(8)}`;
            const trackingId = `TRK${faker.string.numeric(10)}`;

            const data = {

                'A2': '210000001692',
                'B2': '68210000005802',
                'C2': partyName,

                // Relationship with leading/trailing spaces
                'D2': '  Father  ',

                'E2': 'Create',
                'F2': 'Demand Notice Issued',
                'G2': 'In Progress',
                'H2': noticeReferenceNo,
                'I2': '2026-07-17',
                'J2': 'Delivered',
                'K2': '2026-07-17',
                'L2': 'Delivered',
                'M2': '2026-07-17',
                'N2': 'Delivered',
                'O2': '2026-07-17',
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

            // Upload Template
            legalPage.UploadLegalTemplate(fileName);

            // Verify Upload Processed
            legalPage.BulkLegalUpload_Processed();

            // Navigate To Account Details
            legalPage.OpenAccountDetailsScreen();

            legalPage.EnterLoanAccountNumber('68210000005802');

            legalPage.OpenCustomerAccount();

            legalPage.ClickLegalDetailsTab();

            // Verify Record Exists
            legalPage.VerifyLegalDetails({

                noticeReferenceNo,
                sarfaesiStage: 'Demand Notice Issued',
                sarfaesiStatus: 'In Progress',
                noticeDate: '17/07/2026',
                whatsappStatus: 'Delivered',
                whatsappDate: '17/07/2026',
                smsStatus: 'Delivered',
                smsDate: '17/07/2026',
                physicalStatus: 'Delivered',
                physicalDate: '17/07/2026',
                trackingId

            });

        });

    });

});