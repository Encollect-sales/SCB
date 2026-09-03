import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import LegalBulkUploadPage from '../pages/LegalBulkUploadPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('Case Bulk Upload - Verify duplicate File Number in same upload', () => {

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

    it('TC_M005 - Verify duplicate File Number within same upload file', () => {

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

            const duplicateFileNumber = `FN${faker.string.numeric(6)}`;
            const loanAccountNumber = '68210000005802';

            const data = {

                //---------------- Row 2 (Valid) ----------------

                A2: duplicateFileNumber,
                B2: loanAccountNumber,
                C2: '',
                D2: '2024-05-10',
                E2: 'Civil Court',
                F2: 'Recovery',
                G2: 'CASE5001',
                H2: '2024',
                I2: faker.person.fullName(),
                J2: faker.person.fullName(),
                K2: `CNR${faker.string.numeric(12)}`,
                L2: faker.person.fullName(),
                M2: '2028-12-31',

                //---------------- Row 3 (Duplicate) ----------------

                A3: duplicateFileNumber,
                B3: loanAccountNumber,
                C3: '',
                D3: '2024-05-15',
                E3: 'Civil Court',
                F3: 'Recovery',
                G3: 'CASE5002',
                H3: '2024',
                I3: faker.person.fullName(),
                J3: faker.person.fullName(),
                K3: `CNR${faker.string.numeric(12)}`,
                L3: faker.person.fullName(),
                M3: '2028-12-31'

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

            });

            cy.task('moveAllDownloadsToFixtures');

            //====================================================
            // Upload File
            //====================================================

            legalPage.UploadCaseTemplate(fileName);

            //====================================================
            // Verify Upload Completed
            //====================================================

            legalPage.BulkCaseUpload_PartiallyProcessed();

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
                    // Read Status CSV
                    //====================================================

                    cy.task('readCsv', filePath).then((rows) => {

                        expect(rows.length).to.equal(2);

                        const firstRow = rows[0];
                        const secondRow = rows[1];

                        //====================================================
                        // Verify First Row
                        //====================================================

                        expect(firstRow['Status']).to.equal('Success');

                        expect(firstRow['Remarks'])
                            .to.satisfy(value =>
                                value === '' ||
                                value === null ||
                                value === undefined
                            );

                        //====================================================
                        // Verify Duplicate Row
                        //====================================================

                        expect(secondRow['Status']).to.equal('Fail');

                        cy.log('Duplicate Row Remarks : ' + secondRow['Remarks']);

                        expect(secondRow['Remarks'])
                            .to.contain('File Number');

                        expect(secondRow['Remarks'])
                            .to.contain('unique');

                    });

                });

            });

        });

    });

});