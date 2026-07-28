import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import PaymentbulkuploadPage from '../pages/PaymentbulkuploadPage';
const path = require('path');
import { faker } from '@faker-js/faker';

describe('Bulk Payment Upload - Multiple Valid Records', () => {

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

    it('To verify that a file containing multiple valid records is uploaded and all records are processed successfully.', () => {

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
            const transactionId4 = faker.string.numeric(10);
            const receiptNo4 = faker.string.numeric(8);
            const transactionId5 = faker.string.numeric(10);
            const receiptNo5 = faker.string.numeric(8);
            const transactionId6 = faker.string.numeric(10);
            const receiptNo6 = faker.string.numeric(8);

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
                'B3': '1667',
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

                // ---- Row 4 ----
                // External System Transaction ID
                'A4': transactionId4,
                // Account Number
                'B4': '1667',
                // Receipt Date
                'C4': '2025-09-23',
                // Receipt Amount
                'D4': '500',
                // Mode Of Payment
                'E4': 'Cash',
                // Drawee Bank Name
                'F4': '',
                // Drawee Branch Name
                'G4': '',
                // Instrument Date
                'H4': '',
                // Instrument Number
                'I4': '',
                // Deposit Branch Code (IFSC)
                'J4': '',
                // Receipt Time
                'K4': '11:11:11',
                // Physical Receipt Number
                'L4': receiptNo4,
                // Agency ID
                'M4': '',
                // Collector ID
                'N4': '',
                // Relationship With Customer
                'O4': 'Father',
                // PAN Number
                'P4': 'AWCNM1123S',
                // Foreclosure Amount
                'Q4': '0',
                // EMI Overdue Amount
                'R4': '0',
                // Bounce Charges
                'S4': '0',
                // Other Charges
                'T4': '0',
                // Penal Charges
                'U4': '0',
                // Settlement Amount
                'V4': '0',
                // CC Breakup 1
                'W4': '500',
                // CC Breakup 2
                'X4': '0',
                // CC Breakup 3
                'Y4': '0',
                // CC Breakup 4
                'Z4': '0',
                // CC Breakup 5
                'AA4': '0',
                // CC Breakup 6
                'AB4': '0',
                // DataPH1
                'AC4': '',
                // DataPH2
                'AD4': '',
                // DataPH3
                'AE4': '',
                // DataPH4
                'AF4': '',
                // DataPH5
                'AG4': '',

                // ---- Row 5 ----
                // External System Transaction ID
                'A5': transactionId5,
                // Account Number
                'B5': '1667',
                // Receipt Date
                'C5': '2025-09-23',
                // Receipt Amount
                'D5': '500',
                // Mode Of Payment
                'E5': 'Cash',
                // Drawee Bank Name
                'F5': '',
                // Drawee Branch Name
                'G5': '',
                // Instrument Date
                'H5': '',
                // Instrument Number
                'I5': '',
                // Deposit Branch Code (IFSC)
                'J5': '',
                // Receipt Time
                'K5': '11:11:11',
                // Physical Receipt Number
                'L5': receiptNo5,
                // Agency ID
                'M5': '',
                // Collector ID
                'N5': '',
                // Relationship With Customer
                'O5': 'Father',
                // PAN Number
                'P5': 'AWCNM1123S',
                // Foreclosure Amount
                'Q5': '0',
                // EMI Overdue Amount
                'R5': '0',
                // Bounce Charges
                'S5': '0',
                // Other Charges
                'T5': '0',
                // Penal Charges
                'U5': '0',
                // Settlement Amount
                'V5': '0',
                // CC Breakup 1
                'W5': '500',
                // CC Breakup 2
                'X5': '0',
                // CC Breakup 3
                'Y5': '0',
                // CC Breakup 4
                'Z5': '0',
                // CC Breakup 5
                'AA5': '0',
                // CC Breakup 6
                'AB5': '0',
                // DataPH1
                'AC5': '',
                // DataPH2
                'AD5': '',
                // DataPH3
                'AE5': '',
                // DataPH4
                'AF5': '',
                // DataPH5
                'AG5': '',

                // ---- Row 6 ----
                // External System Transaction ID
                'A6': transactionId6,
                // Account Number
                'B6': '1667',
                // Receipt Date
                'C6': '2025-09-23',
                // Receipt Amount
                'D6': '500',
                // Mode Of Payment
                'E6': 'Cash',
                // Drawee Bank Name
                'F6': '',
                // Drawee Branch Name
                'G6': '',
                // Instrument Date
                'H6': '',
                // Instrument Number
                'I6': '',
                // Deposit Branch Code (IFSC)
                'J6': '',
                // Receipt Time
                'K6': '11:11:11',
                // Physical Receipt Number
                'L6': receiptNo6,
                // Agency ID
                'M6': '',
                // Collector ID
                'N6': '',
                // Relationship With Customer
                'O6': 'Father',
                // PAN Number
                'P6': 'AWCNM1123S',
                // Foreclosure Amount
                'Q6': '0',
                // EMI Overdue Amount
                'R6': '0',
                // Bounce Charges
                'S6': '0',
                // Other Charges
                'T6': '0',
                // Penal Charges
                'U6': '0',
                // Settlement Amount
                'V6': '0',
                // CC Breakup 1
                'W6': '500',
                // CC Breakup 2
                'X6': '0',
                // CC Breakup 3
                'Y6': '0',
                // CC Breakup 4
                'Z6': '0',
                // CC Breakup 5
                'AA6': '0',
                // CC Breakup 6
                'AB6': '0',
                // DataPH1
                'AC6': '',
                // DataPH2
                'AD6': '',
                // DataPH3
                'AE6': '',
                // DataPH4
                'AF6': '',
                // DataPH5
                'AG6': '',
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

            paymentPage.BulkPaymentUpload_Success();
        });

    });

});
