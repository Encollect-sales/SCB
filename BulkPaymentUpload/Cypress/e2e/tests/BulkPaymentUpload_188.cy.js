import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import PaymentbulkuploadPage from '../pages/PaymentbulkuploadPage';
const path = require('path');
import { faker } from '@faker-js/faker';

describe('Bulk Payment Upload - Maximum Supported Records', () => {

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

    it('To verify that a file containing the maximum supported number of valid records is uploaded successfully without errors.', () => {

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

            // Maximum number of records supported by a single bulk upload file (adjust to actual system limit)
            const MAX_RECORDS = 500;

            // Build one valid row of data for a given Excel row index
            const buildRow = (rowIndex) => {
                const transactionId = faker.string.numeric(10);
                const receiptNo = faker.string.numeric(8);
                return {
                    [`A${rowIndex}`]: transactionId,   // External System Transaction ID
                    [`B${rowIndex}`]: '1667',           // Account Number
                    [`C${rowIndex}`]: '2025-09-23',     // Receipt Date
                    [`D${rowIndex}`]: '500',            // Receipt Amount
                    [`E${rowIndex}`]: 'Cash',            // Mode Of Payment
                    [`F${rowIndex}`]: '',                 // Drawee Bank Name
                    [`G${rowIndex}`]: '',                 // Drawee Branch Name
                    [`H${rowIndex}`]: '',                 // Instrument Date
                    [`I${rowIndex}`]: '',                 // Instrument Number
                    [`J${rowIndex}`]: '',                 // Deposit Branch Code (IFSC)
                    [`K${rowIndex}`]: '11:11:11',          // Receipt Time
                    [`L${rowIndex}`]: receiptNo,            // Physical Receipt Number
                    [`M${rowIndex}`]: '',                   // Agency ID
                    [`N${rowIndex}`]: '',                   // Collector ID
                    [`O${rowIndex}`]: 'Father',              // Relationship With Customer
                    [`P${rowIndex}`]: 'AWCNM1123S',           // PAN Number
                    [`Q${rowIndex}`]: '0',                    // Foreclosure Amount
                    [`R${rowIndex}`]: '0',                    // EMI Overdue Amount
                    [`S${rowIndex}`]: '0',                    // Bounce Charges
                    [`T${rowIndex}`]: '0',                    // Other Charges
                    [`U${rowIndex}`]: '0',                    // Penal Charges
                    [`V${rowIndex}`]: '0',                    // Settlement Amount
                    [`W${rowIndex}`]: '500',                   // CC Breakup 1
                    [`X${rowIndex}`]: '0',                     // CC Breakup 2
                    [`Y${rowIndex}`]: '0',                     // CC Breakup 3
                    [`Z${rowIndex}`]: '0',                     // CC Breakup 4
                    [`AA${rowIndex}`]: '0',                    // CC Breakup 5
                    [`AB${rowIndex}`]: '0',                    // CC Breakup 6
                    [`AC${rowIndex}`]: '',                     // DataPH1
                    [`AD${rowIndex}`]: '',                     // DataPH2
                    [`AE${rowIndex}`]: '',                     // DataPH3
                    [`AF${rowIndex}`]: '',                     // DataPH4
                    [`AG${rowIndex}`]: ''                      // DataPH5
                };
            };

            // Row 2 through MAX_RECORDS + 1 (header occupies row 1)
            let data = {};
            for (let rowIndex = 2; rowIndex <= MAX_RECORDS + 1; rowIndex++) {
                data = { ...data, ...buildRow(rowIndex) };
            }

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
            paymentPage.verifyAllRecordsProcessed(MAX_RECORDS);
        });

    });

});
