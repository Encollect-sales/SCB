import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import LegalBulkUploadPage from '../pages/LegalBulkUploadPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('Case Bulk Upload - Verify upload with existing and non-existing Loan Account Numbers', () => {

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

    it('TC_M015 - Verify invalid Loan Account Number is rejected while valid records are processed', () => {

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

            const validLoanAccount = '68210000005802';
            const invalidLoanAccount = 'LAN999999';

            const data = {

                //---------------- Row 2 (Valid) ----------------

                A2: `FN${faker.string.numeric(6)}`,
                B2: validLoanAccount,
                C2: '',
                D2: '2024-05-10',
                E2: 'Civil Court',
                F2: 'Recovery',
                G2: 'CASE15001',
                H2: '2024',
                I2: faker.person.fullName(),
                J2: faker.person.fullName(),
                K2: `CNR${faker.string.numeric(12)}`,
                L2: faker.person.fullName(),
                M2: '2028-12-31',

                //---------------- Row 3 (Invalid Loan Account) ----------------

                A3: `FN${faker.string.numeric(6)}`,
                B3: invalidLoanAccount,
                C3: '',
                D3: '2024-05-11',
                E3: 'Civil Court',
                F3: 'Recovery',
                G3: 'CASE15002',
                H3: '2024',
                I3: faker.person.fullName(),
                J3: faker.person.fullName(),
                K3: `CNR${faker.string.numeric(12)}`,
                L3: faker.person.fullName(),
                M3: '2028-12-31',

                //---------------- Row 4 (Valid) ----------------

                A4: `FN${faker.string.numeric(6)}`,
                B4: validLoanAccount,
                C4: '',
                D4: '2024-05-12',
                E4: 'Civil Court',
                F4: 'Recovery',
                G4: 'CASE15003',
                H4: '2024',
                I4: faker.person.fullName(),
                J4: faker.person.fullName(),
                K4: `CNR${faker.string.numeric(12)}`,
                L4: faker.person.fullName(),
                M4: '2028-12-31'

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

            legalPage.VerifyUploadFailed();

            //====================================================
            // Get Transaction ID
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

                        expect(rows.length).to.equal(3);

                        const validRow1 = rows[0];
                        const invalidRow = rows[1];
                        const validRow2 = rows[2];

                        //====================================================
                        // Row 1
                        //====================================================

                        expect(validRow1['Status']).to.equal('Success');

                        expect(validRow1['Remarks'])
                            .to.satisfy(value =>
                                value === '' ||
                                value === null ||
                                value === undefined
                            );

                        //====================================================
                        // Row 2
                        //====================================================

                        expect(invalidRow['Status']).to.equal('Fail');

                        cy.log('Invalid Row Remarks : ' + invalidRow['Remarks']);

                        expect(invalidRow['Remarks'])
                            .to.contain('Account Number');

                        // If your application gives the exact validation,
                        // you can use:
                        // expect(invalidRow['Remarks'])
                        //     .to.contain('Account Number does not exist');

                        //====================================================
                        // Row 3
                        //====================================================

                        expect(validRow2['Status']).to.equal('Success');

                        expect(validRow2['Remarks'])
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