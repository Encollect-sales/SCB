import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import PaymentbulkuploadPage from '../pages/PaymentbulkuploadPage';
const path = require('path');
import { faker } from '@faker-js/faker';

describe('Bulk Payment Upload - Error Report Generation', () => {

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

    it('To verify that an error report is generated with only the failed records after a partially processed upload.', () => {

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

            const data = {
                // ---- Row 2 ----
                // External System Transaction ID
                'A2': transactionId2,
                // Account Number
                'B2': '1667',
                // Receipt Date
                'C2': '2025-09-23',
                // Receipt Amount
                'D2': '500',
                // Mode Of Payment
                'E2': 'Cash',
                // Drawee Bank Name
                'F2': '',
                // Drawee Branch Name
                'G2': '',
                // Instrument Date
                'H2': '',
                // Instrument Number
                'I2': '',
                // Deposit Branch Code (IFSC)
                'J2': '',
                // Receipt Time
                'K2': '11:11:11',
                // Physical Receipt Number
                'L2': receiptNo2,
                // Agency ID
                'M2': '',
                // Collector ID
                'N2': '',
                // Relationship With Customer
                'O2': 'Father',
                // PAN Number
                'P2': 'AWCNM1123S',
                // Foreclosure Amount
                'Q2': '0',
                // EMI Overdue Amount
                'R2': '0',
                // Bounce Charges
                'S2': '0',
                // Other Charges
                'T2': '0',
                // Penal Charges
                'U2': '0',
                // Settlement Amount
                'V2': '0',
                // CC Breakup 1
                'W2': '500',
                // CC Breakup 2
                'X2': '0',
                // CC Breakup 3
                'Y2': '0',
                // CC Breakup 4
                'Z2': '0',
                // CC Breakup 5
                'AA2': '0',
                // CC Breakup 6
                'AB2': '0',
                // DataPH1
                'AC2': '',
                // DataPH2
                'AD2': '',
                // DataPH3
                'AE2': '',
                // DataPH4
                'AF2': '',
                // DataPH5
                'AG2': '',

                // ---- Row 3 ----
                // External System Transaction ID
                'A3': transactionId3,
                // Account Number
                'B3': '',
                // Receipt Date
                'C3': '2025-09-23',
                // Receipt Amount
                'D3': '500',
                // Mode Of Payment
                'E3': 'Cash',
                // Drawee Bank Name
                'F3': '',
                // Drawee Branch Name
                'G3': '',
                // Instrument Date
                'H3': '',
                // Instrument Number
                'I3': '',
                // Deposit Branch Code (IFSC)
                'J3': '',
                // Receipt Time
                'K3': '11:11:11',
                // Physical Receipt Number
                'L3': receiptNo3,
                // Agency ID
                'M3': '',
                // Collector ID
                'N3': '',
                // Relationship With Customer
                'O3': 'Father',
                // PAN Number
                'P3': 'AWCNM1123S',
                // Foreclosure Amount
                'Q3': '0',
                // EMI Overdue Amount
                'R3': '0',
                // Bounce Charges
                'S3': '0',
                // Other Charges
                'T3': '0',
                // Penal Charges
                'U3': '0',
                // Settlement Amount
                'V3': '0',
                // CC Breakup 1
                'W3': '500',
                // CC Breakup 2
                'X3': '0',
                // CC Breakup 3
                'Y3': '0',
                // CC Breakup 4
                'Z3': '0',
                // CC Breakup 5
                'AA3': '0',
                // CC Breakup 6
                'AB3': '0',
                // DataPH1
                'AC3': '',
                // DataPH2
                'AD3': '',
                // DataPH3
                'AE3': '',
                // DataPH4
                'AF3': '',
                // DataPH5
                'AG3': '',
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
            paymentPage.verifyErrorReportGenerated();
        });

    });

});
