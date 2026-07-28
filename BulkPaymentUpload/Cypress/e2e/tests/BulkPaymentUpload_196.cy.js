import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import PaymentbulkuploadPage from '../pages/PaymentbulkuploadPage';
const path = require('path');
import { faker } from '@faker-js/faker';

describe('Bulk Payment Upload - Duplicate External System Transaction ID', () => {

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

    it('To verify that valid records are processed and a record with a duplicate External System Transaction ID is rejected.', () => {

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

            const transactionId2 = faker.string.numeric(10);
            const receiptNo2 = faker.string.numeric(8);
            const transactionId3 = faker.string.numeric(10);
            const receiptNo3 = faker.string.numeric(8);
            // Row 4 intentionally re-uses transactionId2 to create a duplicate External System Transaction ID
            const receiptNo4 = faker.string.numeric(8);

            const data = {
                // ---- Row 2 (valid) ----
                'A2': transactionId2, 'B2': '1667', 'C2': '2025-09-23', 'D2': '500', 'E2': 'Cash',
                'F2': '', 'G2': '', 'H2': '', 'I2': '', 'J2': '', 'K2': '11:11:11', 'L2': receiptNo2,
                'M2': '', 'N2': '', 'O2': 'Father', 'P2': 'AWCNM1123S', 'Q2': '0', 'R2': '0', 'S2': '0',
                'T2': '0', 'U2': '0', 'V2': '0', 'W2': '500', 'X2': '0', 'Y2': '0', 'Z2': '0',
                'AA2': '0', 'AB2': '0', 'AC2': '', 'AD2': '', 'AE2': '', 'AF2': '', 'AG2': '',

                // ---- Row 3 (valid) ----
                'A3': transactionId3, 'B3': '1667', 'C3': '2025-09-23', 'D3': '500', 'E3': 'Cash',
                'F3': '', 'G3': '', 'H3': '', 'I3': '', 'J3': '', 'K3': '11:11:11', 'L3': receiptNo3,
                'M3': '', 'N3': '', 'O3': 'Father', 'P3': 'AWCNM1123S', 'Q3': '0', 'R3': '0', 'S3': '0',
                'T3': '0', 'U3': '0', 'V3': '0', 'W3': '500', 'X3': '0', 'Y3': '0', 'Z3': '0',
                'AA3': '0', 'AB3': '0', 'AC3': '', 'AD3': '', 'AE3': '', 'AF3': '', 'AG3': '',

                // ---- Row 4 (duplicate External System Transaction ID) ----
                'A4': transactionId2, 'B4': '1667', 'C4': '2025-09-23', 'D4': '500', 'E4': 'Cash',
                'F4': '', 'G4': '', 'H4': '', 'I4': '', 'J4': '', 'K4': '11:11:11', 'L4': receiptNo4,
                'M4': '', 'N4': '', 'O4': 'Father', 'P4': 'AWCNM1123S', 'Q4': '0', 'R4': '0', 'S4': '0',
                'T4': '0', 'U4': '0', 'V4': '0', 'W4': '500', 'X4': '0', 'Y4': '0', 'Z4': '0',
                'AA4': '0', 'AB4': '0', 'AC4': '', 'AD4': '', 'AE4': '', 'AF4': '', 'AG4': '',
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

            paymentPage.BulkPaymentUpload_PartiallyProcessed();
        });

    });

});
