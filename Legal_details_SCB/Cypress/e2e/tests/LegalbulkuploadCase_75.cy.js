import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import LegalBulkUploadPage from '../pages/LegalBulkUploadPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('Case Bulk Upload - Verify downloadable error report', () => {

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

    it('TC_M011 - Verify downloadable error report contains row-wise validation errors', () => {

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
            // 7 Valid Records
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
            // Invalid Row 9 - File Number Blank
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
            // Invalid Row 10 - Petitioner Blank
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
            // Invalid Row 11 - Lawyer Blank
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

            legalPage.UploadCaseTemplate(fileName);

            legalPage.VerifyUploadFailed();

            //====================================================
            // Transaction ID
            //====================================================

            legalPage.getTransactionId().then((txnIdRaw) => {

                const txnId = txnIdRaw.trim();

                cy.log('Transaction ID : ' + txnId);

                //====================================================
                // Download Error Report
                //====================================================

                legalPage.downloadStatusFile(txnId);

                cy.wait(8000);

                cy.task('findLatestFile', {

                    folder: downloadsFolder,
                    pattern: `BulkUploadOfCaseDetails_${txnId}`

                }).then((filePath) => {

                    expect(filePath).to.not.be.null;

                    cy.task('readCsv', filePath).then((rows) => {

                        expect(rows.length).to.equal(10);

                        //====================================================
                        // Verify Failed Rows
                        //====================================================

                        const failedRows = rows.filter(r => r.Status === 'Fail');

                        expect(failedRows.length).to.equal(3);

                        expect(failedRows[0]['Remarks'])
                            .to.contain('File Number');

                        expect(failedRows[1]['Remarks'])
                            .to.contain('Petitioner');

                        expect(failedRows[2]['Remarks'])
                            .to.contain('Lawyer');

                        //====================================================
                        // Verify Success Rows
                        //====================================================

                        const successRows = rows.filter(r => r.Status === 'Success');

                        expect(successRows.length).to.equal(7);

                        successRows.forEach(row => {

                            expect(row['Remarks'])
                                .to.satisfy(value =>
                                    value === '' ||
                                    value === null ||
                                    value === undefined
                                );

                        });

                    });

                });

            });

        });

    });

});