import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import LegalBulkUploadPage from '../pages/LegalBulkUploadPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('Case Bulk Upload - Verify upload with multiple valid records', () => {

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

    it('TC_M001 - Verify upload with multiple valid rows having unique File Numbers', () => {

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
            // Test Data - 5 Valid Records
            //====================================================

            const loanAccountNumber = '68210000005802';

            const data = {

                //---------------- Row 2 ----------------

                A2: `FN${faker.string.numeric(6)}`,
                B2: loanAccountNumber,
                C2: '',
                D2: '2024-05-10',
                E2: 'Civil Court',
                F2: 'Recovery',
                G2: 'CASE1001',
                H2: '2024',
                I2: faker.person.fullName(),
                J2: faker.person.fullName(),
                K2: `CNR${faker.string.numeric(12)}`,
                L2: faker.person.fullName(),
                M2: '2028-12-31',

                //---------------- Row 3 ----------------

                A3: `FN${faker.string.numeric(6)}`,
                B3: loanAccountNumber,
                C3: '',
                D3: '2024-04-18',
                E3: 'Civil Court',
                F3: 'Recovery',
                G3: 'CASE1002',
                H3: '2024',
                I3: faker.person.fullName(),
                J3: faker.person.fullName(),
                K3: `CNR${faker.string.numeric(12)}`,
                L3: faker.person.fullName(),
                M3: '2028-11-20',

                //---------------- Row 4 ----------------

                A4: `FN${faker.string.numeric(6)}`,
                B4: loanAccountNumber,
                C4: '',
                D4: '2024-03-15',
                E4: 'District Court',
                F4: 'Civil',
                G4: 'CASE1003',
                H4: '2024',
                I4: faker.person.fullName(),
                J4: faker.person.fullName(),
                K4: `CNR${faker.string.numeric(12)}`,
                L4: faker.person.fullName(),
                M4: '2028-10-10',

                //---------------- Row 5 ----------------

                A5: `FN${faker.string.numeric(6)}`,
                B5: loanAccountNumber,
                C5: '',
                D5: '2024-02-28',
                E5: 'High Court',
                F5: 'Recovery',
                G5: 'CASE1004',
                H5: '2024',
                I5: faker.person.fullName(),
                J5: faker.person.fullName(),
                K5: `CNR${faker.string.numeric(12)}`,
                L5: faker.person.fullName(),
                M5: '2028-09-18',

                //---------------- Row 6 ----------------

                A6: `FN${faker.string.numeric(6)}`,
                B6: loanAccountNumber,
                C6: '',
                D6: '2024-01-05',
                E6: 'Civil Court',
                F6: 'Recovery',
                G6: 'CASE1005',
                H6: '2024',
                I6: faker.person.fullName(),
                J6: faker.person.fullName(),
                K6: `CNR${faker.string.numeric(12)}`,
                L6: faker.person.fullName(),
                M6: '2028-08-25'

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
            // Verify Upload Success
            //====================================================

            legalPage.VerifyUploadSuccess();

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

                        expect(rows.length).to.equal(5);

                        rows.forEach((row, index) => {

                            cy.log(`Validating Row ${index + 1}`);

                            expect(row['Status']).to.equal('Success');

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