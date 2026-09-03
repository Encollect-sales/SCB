import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import LegalBulkUploadPage from '../pages/LegalBulkUploadPage';
const path = require('path');

describe('Notice Bulk Upload - Verify 200 Valid Records', () => {

    let loginPage;
    let legalPage;

    before(() => {

        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('LegalBulkUpload').then(locators => {
            legalPage = new LegalBulkUploadPage(locators);
        });

    });

    it('TC_E2E_200 - Verify upload of 200 valid Notice records', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            cy.wait(3000);

            legalPage.DownloadLegalNoticeTemplate();

            const fileName = 'BulkUploadOfNoticeDetails.xlsx';
            const sheetName = 'Sheet1';

            Cypress.on('uncaught:exception', (err) => {

                if (err.message.includes('ResizeObserver loop completed with undelivered notifications.')) {
                    return false;
                }

            });

            //====================================================
            // Generate 200 Valid Records
            //====================================================

            const data = {};

            const uniquePrefix = Date.now();

            for (let row = 2; row <= 201; row++) {

                // Customer Id (Constant)
                data[`A${row}`] = "41174";

                // Loan Account Number (Constant)
                data[`B${row}`] = "1667";

                // Upload Type
                data[`C${row}`] = "Create";

                // Party Name
                data[`D${row}`] = `Party ${row}`;

                // Relationship
                data[`E${row}`] = "Self";

                // Notice Type
                data[`F${row}`] = "Demand Notice";

                // Unique Notice Reference Number
                data[`G${row}`] = `NREF${uniquePrefix}${row}`;

                // Notice Date
                data[`H${row}`] = "2026-07-20";

                // WhatsApp Delivery Status
                data[`I${row}`] = "Delivered";

                // WhatsApp Delivery Date
                data[`J${row}`] = "2026-07-21";

                // SMS Delivery Status
                data[`K${row}`] = "Delivered";

                // SMS Delivery Date
                data[`L${row}`] = "2026-07-21";

                // Physical Delivery Status
                data[`M${row}`] = "Delivered";

                // Physical Delivery Date
                data[`N${row}`] = "2026-07-22";

                // Physical Tracking Id
                data[`O${row}`] = `TRK${uniquePrefix}${row}`;

            }

            //====================================================
            // Update Excel
            //====================================================

            const downloadsFolder = Cypress.config('downloadsFolder');

            const sourceFilePath = path.join(
                downloadsFolder,
                fileName
            );

            cy.task('updateLegalBulkCell', {

                filePath: sourceFilePath,
                sheetName,
                data

            });

            cy.task('moveAllDownloadsToFixtures');
                        //====================================================
            // Upload File
            //====================================================

            legalPage.UploadLegalNoticeTemplate(fileName);

            legalPage.VerifyUploadNoticeSuccess();

            //====================================================
            // Verify Status Report
            //====================================================

            legalPage.getTransactionId().then((txnIdRaw) => {

                const txnId = txnIdRaw.trim();

                cy.log("Transaction ID : " + txnId);

                legalPage.downloadStatusFile(txnId);

                cy.wait(8000);

                cy.task("findLatestFile", {

                    folder: downloadsFolder,
                    pattern: `BulkUploadOfNoticeDetails_${txnId}`

                }).then((filePath) => {

                    expect(filePath).to.not.be.null;

                    cy.task("readCsv", filePath).then((rows) => {

                        //====================================================
                        // Verify Total Records
                        //====================================================

                        expect(rows.length).to.equal(200);

                        let successCount = 0;
                        let failCount = 0;

                        rows.forEach((row, index) => {

                            cy.log(
                                `Row ${index + 1} : ${row["Status"]}`
                            );

                            if (
                                row["Status"] === "Success" ||
                                row["Status"] === "Processed"
                            ) {

                                successCount++;

                            }

                            if (
                                row["Status"] === "Fail" ||
                                row["Status"] === "Failed"
                            ) {

                                failCount++;

                            }

                        });

                        cy.log("Successful Records : " + successCount);
                        cy.log("Failed Records : " + failCount);

                        expect(successCount).to.equal(200);
                        expect(failCount).to.equal(0);

                    });

                });

            });

        });

    });

});