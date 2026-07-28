import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import PaymentbulkuploadPage from '../pages/PaymentbulkuploadPage';
const path = require('path');
import { faker } from '@faker-js/faker';

describe('Bulk Payment Upload - Invalid Mode of Payment', () => {

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

    it('To verify that when an invalid Mode of Payment is entered in the Bulk Payment upload file, the system identifies the invalid value, marks the record as failed, and displays an appropriate validation error message.', () => {

        getTestData('loginData', 'login2').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            cy.wait(1000);

            paymentPage.DownloadPaymentTemplate();

            const sheetName = 'Sheet1';

            Cypress.on('uncaught:exception', (err, runnable) => {
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
                'E2': 'Credit Card',
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
            const fixturesFolder = 'fixtures';
            const excelFileName = 'BulkPaymentTemplate.xlsx';

            const sourceFilePath = path.join(downloadsFolder, excelFileName);
            const destFilePath = path.join(fixturesFolder, excelFileName);

            cy.task('updateBulkPaymentCell', {
                filePath: sourceFilePath,
                sheetName: sheetName,
                data: data
            }).then(() => {
                cy.log('Excel file updated successfully with new data');
            });

            cy.task('moveAllDownloadsToFixtures').then(result => {
                cy.log(result);
            });

            paymentPage.BulkPaymentUpload_Failed();

        });

    });

});