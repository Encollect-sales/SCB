
import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import LegalBulkUploadPage from '../pages/LegalBulkUploadPage';
import { faker } from '@faker-js/faker';

const path = require('path');

describe('Legal Bulk Upload - Valid WhatsApp Delivery Date Validation', () => {

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

    it('TC_046 - Verify upload succeeds with a valid WhatsApp Delivery Date', () => {

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

                if (
                    err.message.includes(
                        'ResizeObserver loop completed with undelivered notifications.'
                    )
                ) {
                    return false;
                }

                return true;
            });

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

                // Notice Date
                'I2': '2026-07-17',

                // WhatsApp Delivery Status
                'J2': 'Delivered',

                // Valid WhatsApp Delivery Date
                'K2': '2026-07-17',

                // SMS Delivery Status
                'L2': 'Delivered',

                // SMS Delivery Date
                'M2': '2026-07-17',

                // Physical Delivery Status
                'N2': 'Delivered',

                // Physical Delivery Date
                'O2': '2026-07-17',

                // Physical Tracking ID
                'P2': trackingId

            };

            const downloadsFolder = Cypress.config('downloadsFolder');

            const sourceFilePath = path.join(
                downloadsFolder,
                fileName
            );

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

            legalPage.EnterLoanAccountNumber(
                '68210000005802'
            );

            legalPage.OpenCustomerAccount();

            legalPage.ClickLegalDetailsTab();

            legalPage.VerifyLegalDetails({

                noticeReferenceNo,

                sarfaesiStage: 'Demand Notice Issued',

                sarfaesiStatus: 'In Progress',

                // Application displays: 17-Jul-26
                noticeDate: '17-Jul-26',

                whatsappStatus: 'Delivered',

                // Application displays: 17-Jul-26
                whatsappDate: '17-Jul-26',

                smsStatus: 'Delivered',

                // Application displays: 17-Jul-26
                smsDate: '17-Jul-26',

                physicalStatus: 'Delivered',

                // Application displays: 17-Jul-26
                physicalDate: '17-Jul-26',

                trackingId

            });

        });

    });

});
