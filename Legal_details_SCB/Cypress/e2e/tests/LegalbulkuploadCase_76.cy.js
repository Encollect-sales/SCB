import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import LegalBulkUploadPage from '../pages/LegalBulkUploadPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('Case Bulk Upload - Verify upload with rows in random order', () => {

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

    it('TC_M012 - Verify upload succeeds when rows are in random order', () => {

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
            // Test Data (Random Order)
            //====================================================

            const loanAccountNumber = '68210000005802';

            const data = {

                //---------------- Row 2 ----------------
                // Latest Filing Date

                A2: `FN${faker.string.numeric(6)}`,
                B2: loanAccountNumber,
                C2: '',
                D2: '2024-12-20',
                E2: 'Civil Court',
                F2: 'Recovery',
                G2: 'CASE9005',
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
                D3: '2024-01-15',
                E3: 'High Court',
                F3: 'Civil',
                G3: 'CASE9002',
                H3: '2024',
                I3: faker.person.fullName(),
                J3: faker.person.fullName(),
                K3: `CNR${faker.string.numeric(12)}`,
                L3: faker.person.fullName(),
                M3: '2028-09-10',

                //---------------- Row 4 ----------------

                A4: `FN${faker.string.numeric(6)}`,
                B4: loanAccountNumber,
                C4: '',
                D4: '2024-08-18',
                E4: 'District Court',
                F4: 'Recovery',
                G4: 'CASE9008',
                H4: '2024',
                I4: faker.person.fullName(),
                J4: faker.person.fullName(),
                K4: `CNR${faker.string.numeric(12)}`,
                L4: faker.person.fullName(),
                M4: '2028-11-20',

                //---------------- Row 5 ----------------

                A5: `FN${faker.string.numeric(6)}`,
                B5: loanAccountNumber,
                C5: '',
                D5: '2024-03-25',
                E5: 'Civil Court',
                F5: 'Recovery',
                G5: 'CASE9001',
                H5: '2024',
                I5: faker.person.fullName(),
                J5: faker.person.fullName(),
                K5: `CNR${faker.string.numeric(12)}`,
                L5: faker.person.fullName(),
                M5: '2028-10-25',

                //---------------- Row 6 ----------------

                A6: `FN${faker.string.numeric(6)}`,
                B6: loanAccountNumber,
                C6: '',
                D6: '2024-06-11',
                E6: 'Sessions Court',
                F6: 'Civil',
                G6: 'CASE9004',
                H6: '2024',
                I6: faker.person.fullName(),
                J6: faker.person.fullName(),
                K6: `CNR${faker.string.numeric(12)}`,
                L6: faker.person.fullName(),
                M6: '2028-08-30'

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
            // Transaction ID
            //====================================================

            legalPage.getTransactionId().then((txnIdRaw) => {

                const txnId = txnIdRaw.trim();

                cy.log('Captured Transaction ID : ' + txnId);

                legalPage.downloadStatusFile(txnId);

                cy.wait(8000);

                cy.task('findLatestFile', {

                    folder: downloadsFolder,
                    pattern: `BulkUploadOfCaseDetails_${txnId}`

                }).then((filePath) => {

                    expect(filePath).to.not.be.null;

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