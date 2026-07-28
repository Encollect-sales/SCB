import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import PaymentbulkuploadPage from '../pages/PaymentbulkuploadPage';
const path = require('path');
import { faker } from '@faker-js/faker';

describe('Bulk Payment Upload - Only Foreclosure Amount Entered', () => {

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

    it('To verify that when only Foreclosure Amount is entered and it is equal to the Receipt Amount, the record is uploaded successfully.', () => {

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
            const physicalReceipt = faker.string.numeric(8);

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
                'K2': '11:11:11',
                'L2': physicalReceipt,
                'M2': '',
                'N2': '',
                'O2': 'Father',
                'P2': 'AWCNM1123S',

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

            paymentPage.BulkPaymentUpload_Processed();

        });

    });

});