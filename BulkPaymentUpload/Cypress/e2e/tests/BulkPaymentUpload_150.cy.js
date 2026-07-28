import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import PaymentbulkuploadPage from '../pages/PaymentbulkuploadPage';
const path = require('path');
import { faker } from '@faker-js/faker';

describe('Bulk Payment Upload - Multiple Records Failing for Different Reasons', () => {

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

    it('Verify system validates every row independently and reports all errors', () => {

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

            const futureDate = '2099-12-31';

            const data = {

                // =========================
                // Row 2 - Blank Account Number
                // =========================

                'A2': faker.string.numeric(10),
                'B2': '',
                'C2': '2025-09-23',
                'D2': '500',
                'E2': 'Cash',
                'K2': '10:10:10',
                'L2': faker.string.numeric(8),

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

                // =========================
                // Row 3 - Future Receipt Date
                // =========================

                'A3': faker.string.numeric(10),
                'B3': '1667',
                'C3': futureDate,
                'D3': '600',
                'E3': 'Cash',
                'K3': '10:15:00',
                'L3': faker.string.numeric(8),

                'Q3': '600',
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

                // =========================
                // Row 4 - Negative Receipt Amount
                // =========================

                'A4': faker.string.numeric(10),
                'B4': '1667',
                'C4': '2025-09-23',
                'D4': '-500',
                'E4': 'Cash',
                'K4': '10:20:00',
                'L4': faker.string.numeric(8),

                'Q4': '-500',
                'R4': '0',
                'S4': '0',
                'T4': '0',
                'U4': '0',
                'V4': '0',
                'W4': '0',
                'X4': '0',
                'Y4': '0',
                'Z4': '0',
                'AA4': '0',
                'AB4': '0',

                // =========================
                // Row 5 - Invalid Mode of Payment
                // =========================

                'A5': faker.string.numeric(10),
                'B5': '1667',
                'C5': '2025-09-23',
                'D5': '800',
                'E5': 'Bitcoin',
                'K5': '10:25:00',
                'L5': faker.string.numeric(8),

                'Q5': '800',
                'R5': '0',
                'S5': '0',
                'T5': '0',
                'U5': '0',
                'V5': '0',
                'W5': '0',
                'X5': '0',
                'Y5': '0',
                'Z5': '0',
                'AA5': '0',
                'AB5': '0'

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

        

            // Verify upload completes and error report is generated
            paymentPage.BulkPaymentUpload_Processed();

        
        });

    });

});