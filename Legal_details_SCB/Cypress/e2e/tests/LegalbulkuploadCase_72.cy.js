import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import LegalBulkUploadPage from '../pages/LegalBulkUploadPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('Case Bulk Upload - Verify upload with date validation errors', () => {

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

    it('TC_M009 - Verify future Case Filing Date and past Next Hearing Date validations', () => {

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

                //---------------- Row 2 (Future Filing Date - Invalid) ----------------

                A2: `FN${faker.string.numeric(6)}`,
                B2: loanAccountNumber,
                C2: '',
                D2: '2035-01-01',
                E2: 'Civil Court',
                F2: 'Recovery',
                G2: 'CASE9001',
                H2: '2024',
                I2: faker.person.fullName(),
                J2: faker.person.fullName(),
                K2: `CNR${faker.string.numeric(12)}`,
                L2: faker.person.fullName(),
                M2: '2035-12-31',

                //---------------- Row 3 (Past Next Hearing Date - Invalid) ----------------

                A3: `FN${faker.string.numeric(6)}`,
                B3: loanAccountNumber,
                C3: '',
                D3: '2024-05-10',
                E3: 'Civil Court',
                F3: 'Recovery',
                G3: 'CASE9002',
                H3: '2024',
                I3: faker.person.fullName(),
                J3: faker.person.fullName(),
                K3: `CNR${faker.string.numeric(12)}`,
                L3: faker.person.fullName(),
                M3: '2024-01-01',

                //---------------- Row 4 (Valid) ----------------

                A4: `FN${faker.string.numeric(6)}`,
                B4: loanAccountNumber,
                C4: '',
                D4: '2024-05-10',
                E4: 'Civil Court',
                F4: 'Recovery',
                G4: 'CASE9003',
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

            //====================================================
            // Verify Upload Completed
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
                    // Read Status CSV
                    //====================================================

                    cy.task('readCsv', filePath).then((rows) => {

                        expect(rows.length).to.equal(3);

                        const futureDateRow = rows[0];
                        const pastHearingRow = rows[1];
                        const validRow = rows[2];

                        //====================================================
                        // Verify Future Filing Date Row
                        //====================================================

                        expect(futureDateRow['Status']).to.equal('Fail');

                        cy.log('Future Filing Date Remarks : ' + futureDateRow['Remarks']);

                        expect(futureDateRow['Remarks'])
                            .to.contain('Case Filing Date');

                        //====================================================
                        // Verify Past Next Hearing Date Row
                        //====================================================

                        expect(pastHearingRow['Status']).to.equal('Fail');

                        cy.log('Past Hearing Date Remarks : ' + pastHearingRow['Remarks']);

                        expect(pastHearingRow['Remarks'])
                            .to.contain('Next Hearing Date');

                        //====================================================
                        // Verify Valid Row
                        //====================================================

                        expect(validRow['Status']).to.equal('Success');

                        expect(validRow['Remarks'])
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