import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import PaymentbulkuploadPage from '../pages/PaymentbulkuploadPage';
const path = require('path');
import { faker } from '@faker-js/faker';

describe('TC_077 - Only Other Charges Amount Entered', () => {

    let loginPage;
    let paymentPage;

    before(() => {

        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('BulkPaymentUpload').then(locators => {
            paymentPage = new PaymentbulkuploadPage(locators);
        });

    });

    it('Verify upload is successful when only Other Charges amount is entered', () => {

        getTestData('loginData', 'login2').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            cy.wait(1000);

            paymentPage.DownloadPaymentTemplate();

            const sheetName = 'Sheet1';

            Cypress.on('uncaught:exception', (err) => {
                if (err.message.includes('ResizeObserver')) {
                    return false;
                }
            });

            const transactionId = faker.string.numeric(10);
            const receiptNo = faker.string.numeric(8);

            const data = {

                // Mandatory Fields
                'A2': transactionId,
                'B2': '1667',
                'C2': '2025-09-23',
                'D2': '500',
                'E2': 'Cash',

                // Cheque/DD fields blank
                'F2': '',
                'G2': '',
                'H2': '',
                'I2': '',
                'J2': '',

                'K2': '11:30:15',
                'L2': receiptNo,

                'M2': '',
                'N2': '',
                'O2': 'Father',
                'P2': 'ABCDE1234F',

                // Breakup Amounts
                'Q2': '0',      // Foreclosure
                'R2': '0',      // EMI Overdue
                'S2': '0',      // Bounce Charges

                // Only Other Charges
                'T2': '500',

                'U2': '0',      // Penal Charges
                'V2': '0',      // Settlement
                'W2': '0',
                'X2': '0',
                'Y2': '0',
                'Z2': '0',
                'AA2': '0',
                'AB2': '0',

                'AC2': '',
                'AD2': '',
                'AE2': '',
                'AF2': '',
                'AG2': ''

            };

            const downloadsFolder = Cypress.config('downloadsFolder');
            const excelFileName = 'BulkPaymentTemplate.xlsx';
            const sourceFilePath = path.join(downloadsFolder, excelFileName);

            cy.task('updateBulkPaymentCell', {
                filePath: sourceFilePath,
                sheetName,
                data
            });

            cy.task('moveAllDownloadsToFixtures');

            // Upload and verify success
            paymentPage.BulkPaymentUpload_Processed();

        });

    });

});