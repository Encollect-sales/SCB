import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import LegalBulkUploadPage from '../pages/LegalBulkUploadPage';
const path = require('path');

describe('Case Bulk Upload - Verify multiple invalid fields in a single row', () => {

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

    it('TC_061 - Verify multiple validation errors are displayed for a single row', () => {

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

            //====================================================
            // Test Data
            //====================================================

            const loanAccountNumber = '68210000005802';

            // Invalid fields
            const fileNumber = '';

            const petitioner = '';

            // Future filing date (Invalid)
            const filingDate = '2028-12-31';

            const data = {

                A2: fileNumber,
                B2: loanAccountNumber,
                C2: '',
                D2: filingDate,
                E2: 'Civil Court',
                F2: 'Recovery',
                G2: 'CASE12345',
                H2: '2024',
                I2: petitioner,
                J2: 'Ramesh Kumar',
                K2: '',
                L2: 'Adv. Suresh Patil',
                M2: '2029-01-01'

            };

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

            }).then(() => {

                cy.log('Excel updated successfully');

            });

            //====================================================
            // Move File
            //====================================================

            cy.task('moveAllDownloadsToFixtures').then(result => {

                cy.log(result);

            });

            //====================================================
            // Upload File
            //====================================================

            legalPage.UploadCaseTemplate(fileName);

                        //====================================================
            // Verify Upload Failed
            //====================================================

            legalPage.VerifyUploadFailed();

            //====================================================
            // Get Transaction ID
            //====================================================

            legalPage.getTransactionId().then((txnIdRaw) => {

                const txnId = txnIdRaw.trim();

                cy.log('Captured Transaction ID : ' + txnId);

                //====================================================
                // Download Status File
                //====================================================

                legalPage.downloadStatusFile(txnId);

                cy.wait(8000);

                //====================================================
                // Find Downloaded Status File
                //====================================================

                cy.task('findLatestFile', {

                    folder: downloadsFolder,
                    pattern: `BulkUploadOfCaseDetails_${txnId}`

                }).then((filePath) => {

                    expect(filePath).to.not.be.null;

                    //====================================================
                    // Read CSV
                    //====================================================

                    cy.task('readCsv', filePath).then((rows) => {

                        expect(rows.length).to.be.greaterThan(0);

                        const errorRow = rows[0];

                        cy.log('Remarks : ' + errorRow['Remarks']);

                        //====================================================
                        // Verify Status
                        //====================================================

                        expect(errorRow['Status']).to.equal('Fail');

                        //====================================================
                        // Verify Multiple Error Messages
                        //====================================================

                        expect(errorRow['Remarks'])
                            .to.contain('File Number');

                        expect(errorRow['Remarks'])
                            .to.contain('Petitioner');

                        expect(errorRow['Remarks'])
                            .to.contain('Case Filing Date');

                        // Verify all three validations are reported

                        expect(errorRow['Remarks'])
                            .to.satisfy(remarks =>
                                remarks.includes('File Number') &&
                                remarks.includes('Petitioner') &&
                                remarks.includes('Case Filing Date')
                            );

                        //====================================================
                        // Ensure no unrelated validation errors
                        //====================================================

                        expect(errorRow['Remarks'])
                            .to.not.contain('Loan Account Number');

                        expect(errorRow['Remarks'])
                            .to.not.contain('Case Number');

                        expect(errorRow['Remarks'])
                            .to.not.contain('Case Year');

                        expect(errorRow['Remarks'])
                            .to.not.contain('Respondent');

                        expect(errorRow['Remarks'])
                            .to.not.contain('Lawyer');

                    });

                });

            });

        });

    });

});