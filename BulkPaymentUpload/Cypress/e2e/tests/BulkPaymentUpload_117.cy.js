import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import PaymentbulkuploadPage from '../pages/PaymentbulkuploadPage';
const path = require('path');
import { faker } from '@faker-js/faker';

describe('Bulk Payment Upload - IFSC Code Exceeds Maximum Length', () => {

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

    it('Verify upload fails when IFSC Code exceeds 20 characters', () => {

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
                if (err.message.includes('ResizeObserver loop completed with undelivered notifications.')) {
                    return false;
                }
            });

            const transactionId = faker.string.numeric(10);
            const chequeNo = faker.string.numeric(6);
            const receiptNo = faker.string.numeric(8);

            const data = {

                'A2': transactionId,
                'B2': '1667',
                'C2': '2025-09-23',
                'D2': '500',

                'E2': 'Cheque',

                'F2': 'HDFC Bank',
                'G2': 'MG Road Branch',
                'H2': '2025-09-22',
                'I2': chequeNo,

                // IFSC > 20 Characters
                'J2': 'SBIN000123456789012345',

                'K2': '11:15:00',
                'L2': receiptNo,

                'M2': '',
                'N2': '',
                'O2': 'Father',
                'P2': 'ABCDE1234F',

                'Q2': '500',
                'R2': '0',
                'S2': '0',
                'T2': '0',
                'U2': '0',
                'V2': '0',
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

            paymentPage.BulkPaymentUpload_Failed();

        });

    });

});