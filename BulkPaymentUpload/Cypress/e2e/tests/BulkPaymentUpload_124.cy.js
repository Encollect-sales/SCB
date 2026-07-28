import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import PaymentbulkuploadPage from '../pages/PaymentbulkuploadPage';
const path = require('path');
import { faker } from '@faker-js/faker';

describe('Bulk Payment Upload - All Breakup Amount Fields Blank', () => {

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

    it('Verify upload fails when all breakup amount fields are blank', () => {

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
            const receiptNo = faker.string.numeric(8);

            const data = {

                'A2': transactionId,
                'B2': '1667',
                'C2': '2025-09-23',
                'D2': '500',

                'E2': 'Cash',

                'F2': '',
                'G2': '',
                'H2': '',
                'I2': '',
                'J2': '',

                'K2': '11:15:00',
                'L2': receiptNo,

                'M2': '',
                'N2': '',
                'O2': 'Father',
                'P2': 'ABCDE1234F',

                // All Breakup Amounts Left Blank
                'Q2': '',
                'R2': '',
                'S2': '',
                'T2': '',
                'U2': '',
                'V2': '',
                'W2': '',
                'X2': '',
                'Y2': '',
                'Z2': '',
                'AA2': '',
                'AB2': '',

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