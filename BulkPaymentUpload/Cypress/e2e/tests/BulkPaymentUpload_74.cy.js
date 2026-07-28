import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import PaymentbulkuploadPage from '../pages/PaymentbulkuploadPage';
const path = require('path');
import { faker } from '@faker-js/faker';

describe('Bulk Payment Upload - Multiple Valid Records Upload', () => {

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

    it('To verify that the system successfully uploads multiple valid payment records.', () => {

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

            const txn1 = faker.string.numeric(10);
            const txn2 = faker.string.numeric(10);

            const receipt1 = faker.string.numeric(8);
            const receipt2 = faker.string.numeric(8);

            const data = {

                // Row 2
                'A2': txn1,
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
                'L2': receipt1,
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
                'AG2': '',

                // Row 3
                'A3': txn2,
                'B3': '1667',
                'C3': '2025-09-23',
                'D3': '700',
                'E3': 'Cash',
                'F3': '',
                'G3': '',
                'H3': '',
                'I3': '',
                'J3': '',
                'K3': '11:20:00',
                'L3': receipt2,
                'M3': '',
                'N3': '',
                'O3': 'Father',
                'P3': 'AWCNM1123S',
                'Q3': '700',
                'R3': '0',
                'S3': '0',
                'T3': '0',
                'U3': '0',
                'V3': '0',
                'W3': '0',
                'X3': '0',
                'Y3': '0',
                'Z3': '0',
                'AA3': '0',
                'AB3': '0',
                'AC3': '',
                'AD3': '',
                'AE3': '',
                'AF3': '',
                'AG3': ''

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