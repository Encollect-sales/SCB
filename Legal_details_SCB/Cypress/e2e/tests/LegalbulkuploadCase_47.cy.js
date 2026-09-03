import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import LegalBulkUploadPage from '../pages/LegalBulkUploadPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('Case Bulk Upload - Verify CNR exceeding maximum length is rejected', () => {

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

    it('TC_047 - Verify CNR exceeding maximum length is rejected', () => {

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
            // Dynamic Test Data
            //====================================================

            const fileNumber = `FN${faker.string.numeric(6)}`;

            const loanAccountNumber = '68210000005802';

            const petitioner = faker.person.fullName();

            const respondent = faker.person.fullName();

            const lawyer = faker.person.fullName();

            const cnrNumber = faker.string.alphanumeric(51);

            const filingDate = '2024-05-10';

            const nextHearingDate = '2027-08-15';

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
                J2: respondent,
                K2: cnrNumber,
                L2: lawyer,
                M2: nextHearingDate

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
                        // Verify Error Message
                        //====================================================

                        expect(errorRow['Remarks'])
                            .to.contain('CNR length is invalid');

                        // expect(errorRow['Remarks'])
                        //     .to.contain('50');

                        //====================================================
                        // Verify Other Fields Passed
                        //====================================================

                        expect(errorRow['Remarks'])
                            .to.not.contain('Loan Account Number');

                        expect(errorRow['Remarks'])
                            .to.not.contain('File Number');

                        expect(errorRow['Remarks'])
                            .to.not.contain('Case Filing Date');

                        expect(errorRow['Remarks'])
                            .to.not.contain('Petitioner');

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