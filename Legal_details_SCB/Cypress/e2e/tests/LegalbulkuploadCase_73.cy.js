import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import LegalBulkUploadPage from '../pages/LegalBulkUploadPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('Case Bulk Upload - Verify upload summary counts', () => {

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

    it('TC_M010 - Verify upload summary count after uploading 10 records', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            cy.wait(3000);

            legalPage.DownloadCaseTemplate();

            const fileName = 'BulkUploadOfCaseDetails.xlsx';
            const sheetName = 'Sheet1';

            Cypress.on('uncaught:exception', (err) => {

                if (err.message.includes('ResizeObserver loop completed with undelivered notifications.')) {
                    return false;
                }

            });

            const loanAccountNumber = '68210000005802';

            const data = {};

            //====================================================
            // Rows 2-8 : Valid (7 Records)
            //====================================================

            for (let row = 2; row <= 8; row++) {

                data[`A${row}`] = `FN${faker.string.numeric(6)}`;
                data[`B${row}`] = loanAccountNumber;
                data[`C${row}`] = '';
                data[`D${row}`] = '2024-05-10';
                data[`E${row}`] = 'Civil Court';
                data[`F${row}`] = 'Recovery';
                data[`G${row}`] = `CASE${1000 + row}`;
                data[`H${row}`] = '2024';
                data[`I${row}`] = faker.person.fullName();
                data[`J${row}`] = faker.person.fullName();
                data[`K${row}`] = `CNR${faker.string.numeric(12)}`;
                data[`L${row}`] = faker.person.fullName();
                data[`M${row}`] = '2028-12-31';

            }

            //====================================================
            // Row 9 - Blank File Number
            //====================================================

            data.A9 = '';
            data.B9 = loanAccountNumber;
            data.C9 = '';
            data.D9 = '2024-05-10';
            data.E9 = 'Civil Court';
            data.F9 = 'Recovery';
            data.G9 = 'CASE1009';
            data.H9 = '2024';
            data.I9 = faker.person.fullName();
            data.J9 = faker.person.fullName();
            data.K9 = '';
            data.L9 = faker.person.fullName();
            data.M9 = '2028-12-31';

            //====================================================
            // Row 10 - Blank Petitioner
            //====================================================

            data.A10 = `FN${faker.string.numeric(6)}`;
            data.B10 = loanAccountNumber;
            data.C10 = '';
            data.D10 = '2024-05-10';
            data.E10 = 'Civil Court';
            data.F10 = 'Recovery';
            data.G10 = 'CASE1010';
            data.H10 = '2024';
            data.I10 = '';
            data.J10 = faker.person.fullName();
            data.K10 = '';
            data.L10 = faker.person.fullName();
            data.M10 = '2028-12-31';

            //====================================================
            // Row 11 - Blank Lawyer
            //====================================================

            data.A11 = `FN${faker.string.numeric(6)}`;
            data.B11 = loanAccountNumber;
            data.C11 = '';
            data.D11 = '2024-05-10';
            data.E11 = 'Civil Court';
            data.F11 = 'Recovery';
            data.G11 = 'CASE1011';
            data.H11 = '2024';
            data.I11 = faker.person.fullName();
            data.J11 = faker.person.fullName();
            data.K11 = '';
            data.L11 = '';
            data.M11 = '2028-12-31';

            //====================================================
            // Update Excel
            //====================================================

            const downloadsFolder = Cypress.config('downloadsFolder');

            const sourceFilePath = path.join(downloadsFolder, fileName);

            cy.task('updateLegalBulkCell', {

                filePath: sourceFilePath,
                sheetName,
                data

            });

            cy.task('moveAllDownloadsToFixtures');

            //====================================================
            // Upload File
            //====================================================

            legalPage.UploadCaseTemplate(fileName);

            legalPage.VerifyUploadFailed();

            //====================================================
            // Verify Summary Counts
            //====================================================

            legalPage.verifyTotalCount('10');
            legalPage.verifySuccessCount('7');
            legalPage.verifyFailedCount('3');

            //====================================================
            // Transaction ID
            //====================================================

            legalPage.getTransactionId().then((txnIdRaw) => {

                const txnId = txnIdRaw.trim();

                legalPage.downloadStatusFile(txnId);

                cy.wait(8000);

                cy.task('findLatestFile', {

                    folder: downloadsFolder,
                    pattern: `BulkUploadOfCaseDetails_${txnId}`

                }).then((filePath) => {

                    cy.task('readCsv', filePath).then((rows) => {

                        expect(rows.length).to.equal(10);

                        const successRows = rows.filter(r => r.Status === 'Success');
                        const failedRows = rows.filter(r => r.Status === 'Fail');

                        expect(successRows.length).to.equal(7);
                        expect(failedRows.length).to.equal(3);

                    });

                });

            });

        });

    });

});