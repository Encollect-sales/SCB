import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import LegalBulkUploadPage from '../pages/LegalBulkUploadPage';
const path = require('path');

describe('Notice Bulk Upload - TC_E2E_02 - Combination File (200 Records)', () => {

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

    it('TC_E2E_02 - Verify Combination File Upload', () => {

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

            const data = {};
            const uniquePrefix = Date.now();

            //====================================================
            // Generate 200 Valid Records
            //====================================================

            for (let row = 2; row <= 201; row++) {

                data[`A${row}`] = "41174";
                data[`B${row}`] = "1667";
                data[`C${row}`] = "Create";
                data[`D${row}`] = `Party ${row}`;
                data[`E${row}`] = "Self";
                data[`F${row}`] = "Demand Notice";
                data[`G${row}`] = `NREF${uniquePrefix}${row}`;
                data[`H${row}`] = "2026-07-20";
                data[`I${row}`] = "Delivered";
                data[`J${row}`] = "2026-07-21";
                data[`K${row}`] = "Delivered";
                data[`L${row}`] = "2026-07-21";
                data[`M${row}`] = "Delivered";
                data[`N${row}`] = "2026-07-22";
                data[`O${row}`] = `TRK${uniquePrefix}${row}`;

            }

            //====================================================
            // Blank Customer Id (10 Rows) - all 10 fail
            //====================================================

            [
                20,40,60,80,100,
                120,140,160,180,200
            ].forEach(row => {

                data[`A${row}`] = "";

            });

            //====================================================
            // Future Notice Date (10 Rows) - all 10 fail
            //====================================================

            [
                21,41,61,81,101,
                121,141,161,181,201
            ].forEach(row => {

                data[`H${row}`] = "2035-12-31";

            });

            //====================================================
            // Duplicate Notice Reference Numbers (10 Rows / 5 pairs)
            //
            // IMPORTANT: only the SECOND row in each pair is expected
            // to fail with 'Reference Number should be unique'. The
            // first occurrence of a given reference number is a
            // legitimate, unique record at the time it's processed
            // and is expected to succeed. So these 10 rows contribute
            // 5 successes + 5 failures, not 10 failures.
            //====================================================

            data["G22"] = "DUP001";
            data["G23"] = "DUP001";

            data["G42"] = "DUP002";
            data["G43"] = "DUP002";

            data["G62"] = "DUP003";
            data["G63"] = "DUP003";

            data["G82"] = "DUP004";
            data["G83"] = "DUP004";

            data["G102"] = "DUP005";
            data["G103"] = "DUP005";

            //====================================================
            // Invalid Upload Type (5 Rows) - all 5 fail
            //====================================================

            [
                24,
                64,
                104,
                144,
                184
            ].forEach(row => {

                data[`C${row}`] = "Modify";

            });

            //====================================================
            // Customer Id > 50 Characters (5 Rows) - all 5 fail
            //====================================================

            const longCustomerId = "C".repeat(51);

            [
                25,
                65,
                105,
                145,
                185
            ].forEach(row => {

                data[`A${row}`] = longCustomerId;

            });

            //====================================================
            // Blank Tracking Id (5 Rows) - all 5 fail
            //====================================================

            [
                26,
                66,
                106,
                146,
                186
            ].forEach(row => {

                data[`O${row}`] = "";

            });

            //====================================================
            // Blank Notice Type (5 Rows) - all 5 fail
            //====================================================

            [
                27,
                67,
                107,
                147,
                187
            ].forEach(row => {

                data[`F${row}`] = "";

            });

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

            legalPage.BulkNoticeUpload_PartiallyProcessed();

            //====================================================
            // Verify Status Report
            //====================================================

            legalPage.getTransactionId().then((txnIdRaw) => {

                const txnId = txnIdRaw.trim();

                cy.log("Transaction ID : " + txnId);

                legalPage.downloadStatusFile(txnId);

                cy.wait(8000);

                cy.task('findLatestFile', {

                    folder: downloadsFolder,
                    pattern: `BulkUploadOfNoticeDetails_${txnId}`

                }).then((filePath) => {

                    expect(filePath).to.not.be.null;

                    cy.task('readCsv', filePath).then((rows) => {

                        expect(rows.length).to.equal(200);

                        let successCount = 0;
                        let failCount = 0;

                        rows.forEach((record) => {

                            const status = (record["Status"] || "").trim();

                            if (
                                status === "Success" ||
                                status === "Processed"
                            ) {
                                successCount++;
                            }

                            if (
                                status === "Fail" ||
                                status === "Failed"
                            ) {
                                failCount++;

                                expect(record["Remarks"]).to.not.equal("");
                            }

                        });

                        cy.log("Success Count : " + successCount);
                        cy.log("Fail Count : " + failCount);

                        //====================================================
                        // Expected breakdown of the 50 "touched" rows:
                        //   Blank Customer Id ........ 10 fail
                        //   Future Notice Date ....... 10 fail
                        //   Duplicate Reference No ...  5 fail (5 of the
                        //                                10 rows succeed -
                        //                                first occurrence
                        //                                of each pair)
                        //   Invalid Upload Type .......  5 fail
                        //   Customer Id > 50 chars ....  5 fail
                        //   Blank Tracking Id .........  5 fail
                        //   Blank Notice Type .........  5 fail
                        //   ------------------------------------
                        //   Total fail ................ 45
                        //   Total success ............. 200 - 45 = 155
                        //====================================================

                        expect(successCount).to.equal(150);
                        expect(failCount).to.equal(50);

                    });

                });

            });

        });

    });

});