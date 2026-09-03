import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import LegalBulkUploadPage from '../pages/LegalBulkUploadPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('Case Bulk Upload - Verify upload with mix of valid and invalid rows', () => {

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

    it('TC_M007 - Verify valid rows are processed and invalid rows are rejected', () => {

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

            const data = {

                //---------------- Row 2 (Valid) ----------------

                A2: `FN${faker.string.numeric(6)}`,
                B2: loanAccountNumber,
                C2: '',
                D2: '2024-05-10',
                E2: 'Civil Court',
                F2: 'Recovery',
                G2: 'CASE7001',
                H2: '2024',
                I2: faker.person.fullName(),
                J2: faker.person.fullName(),
                K2: `CNR${faker.string.numeric(12)}`,
                L2: faker.person.fullName(),
                M2: '2028-12-31',

                //---------------- Row 3 (Invalid - Petitioner Blank) ----------------

                A3: `FN${faker.string.numeric(6)}`,
                B3: loanAccountNumber,
                C3: '',
                D3: '2024-05-11',
                E3: 'Civil Court',
                F3: 'Recovery',
                G3: 'CASE7002',
                H3: '2024',
                I3: '',
                J3: faker.person.fullName(),
                K3: `CNR${faker.string.numeric(12)}`,
                L3: faker.person.fullName(),
                M3: '2028-12-31',

                //---------------- Row 4 (Invalid - Lawyer Blank) ----------------

                A4: `FN${faker.string.numeric(6)}`,
                B4: loanAccountNumber,
                C4: '',
                D4: '2024-05-12',
                E4: 'Civil Court',
                F4: 'Recovery',
                G4: 'CASE7003',
                H4: '2024',
                I4: faker.person.fullName(),
                J4: faker.person.fullName(),
                K4: `CNR${faker.string.numeric(12)}`,
                L4: '',
                M4: '2028-12-31',

                //---------------- Row 5 (Valid) ----------------

                A5: `FN${faker.string.numeric(6)}`,
                B5: loanAccountNumber,
                C5: '',
                D5: '2024-05-13',
                E5: 'Civil Court',
                F5: 'Recovery',
                G5: 'CASE7004',
                H5: '2024',
                I5: faker.person.fullName(),
                J5: faker.person.fullName(),
                K5: `CNR${faker.string.numeric(12)}`,
                L5: faker.person.fullName(),
                M5: '2028-12-31'

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

                        expect(rows.length).to.equal(4);

                        const row1 = rows[0];
                        const row2 = rows[1];
                        const row3 = rows[2];
                        const row4 = rows[3];

                        //====================================================
                        // Verify Row 1 (Success)
                        //====================================================

                        expect(row1['Status']).to.equal('Success');

                        expect(row1['Remarks'])
                            .to.satisfy(value =>
                                value === '' ||
                                value === null ||
                                value === undefined
                            );

                        //====================================================
                        // Verify Row 2 (Petitioner Blank)
                        //====================================================

                        expect(row2['Status']).to.equal('Fail');

                        cy.log('Row 2 Remarks : ' + row2['Remarks']);

                        expect(row2['Remarks'])
                            .to.contain('Petitioner');

                        //====================================================
                        // Verify Row 3 (Lawyer Blank)
                        //====================================================

                        expect(row3['Status']).to.equal('Fail');

                        cy.log('Row 3 Remarks : ' + row3['Remarks']);

                        expect(row3['Remarks'])
                            .to.contain('Lawyer');

                        //====================================================
                        // Verify Row 4 (Success)
                        //====================================================

                        expect(row4['Status']).to.equal('Success');

                        expect(row4['Remarks'])
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