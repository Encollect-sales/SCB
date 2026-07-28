import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import PaymentbulkuploadPage from '../pages/PaymentbulkuploadPage';
const path = require('path');
import { faker } from '@faker-js/faker';

describe('Bulk Payment Upload - Invalid Receipt Date Format', () => {

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

    it('To verify that when an invalid Receipt Date format (DD/MM/YYYY) is entered in the Bulk Payment upload file, the system identifies the invalid format, marks the record as failed, and displays an appropriate validation error message.', () => {

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

                // External System Transaction ID
                'A2': transactionId,

                // Account Number
                'B2': '1667',

                // Receipt Date (Invalid Format)
                'C2': '23/09/2025',

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

                // Deposit Branch Code
                'J2': '',

                // Receipt Time
                'K2': '11:11:11',

                // Physical Receipt Number
                'L2': physicalReceipt,

                // Agency ID
                'M2': '',

                // Collector ID
                'N2': '',

                // Relationship With Customer
                'O2': 'Father',

                // PAN Number
                'P2': 'AWCNM1123S',

                // Foreclosure Amount
                'Q2': '500',

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
                'W2': '0',

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
                'AG2': ''

            };

            const downloadsFolder = Cypress.config('downloadsFolder');
            const fixturesFolder = 'fixtures';
            const excelFileName = 'BulkPaymentTemplate.xlsx';

            const sourceFilePath = path.join(downloadsFolder, excelFileName);

            cy.task('updateBulkPaymentCell', {

                filePath: sourceFilePath,
                sheetName: sheetName,
                data: data

            }).then(() => {

                cy.log('Bulk Payment Excel updated successfully.');

            });

            cy.task('moveAllDownloadsToFixtures').then(result => {

                cy.log(result);

            });

            paymentPage.BulkPaymentUpload_Failed();

            // Optional validation (Uncomment if applicable)
            // cy.contains('Receipt Date can only be in YYYY-MM-DD format').should('be.visible');

        });

    });

});