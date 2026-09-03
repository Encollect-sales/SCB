import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import LegalBulkUploadPage from '../pages/LegalBulkUploadPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('Case Bulk Upload - Verify Duplicate File Number across multiple rows in same upload', () => {

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

    it('TC_005 - Verify Duplicate File Number across multiple rows in same upload', () => {

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

            const petitioner1 = faker.person.fullName();
            const respondent1 = faker.person.fullName();
            const lawyer1 = faker.person.fullName();

            const petitioner2 = faker.person.fullName();
            const respondent2 = faker.person.fullName();
            const lawyer2 = faker.person.fullName();

            const cnrNumber1 = `CNR${faker.string.numeric(12)}`;
            const cnrNumber2 = `CNR${faker.string.numeric(12)}`;

            const filingDate = '2024-05-10';
            const nextHearingDate = '2027-08-15';

            const data = {

                //==========================
                // Row 1 (Valid)
                //==========================

                A2: fileNumber,
                B2: '68210000005802',
                C2: '',
                D2: filingDate,
                E2: 'Civil Court',
                F2: 'Recovery',
                G2: 'CASE10001',
                H2: '2024',
                I2: petitioner1,
                J2: respondent1,
                K2: cnrNumber1,
                L2: lawyer1,
                M2: nextHearingDate,

                //==========================
                // Row 2 (Duplicate File Number)
                //==========================

                A3: fileNumber,
                B3: '68210000005802',
                C3: '',
                D3: filingDate,
                E3: 'Civil Court',
                F3: 'Recovery',
                G3: 'CASE10002',
                H3: '2024',
                I3: petitioner2,
                J3: respondent2,
                K3: cnrNumber2,
                L3: lawyer2,
                M3: nextHearingDate

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
                sheetName: sheetName,
                data: data

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
            // Verify Upload Status
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

                    expect(filePath, 'Downloaded status file should exist')
                        .to.not.be.null;

                    //====================================================
                    // Read CSV
                    //====================================================

                    cy.task('readCsv', filePath).then((rows) => {

                        expect(rows.length).to.equal(2);

                        //=========================================
                        // First Row Validation
                        //=========================================

                        expect(rows[0]['Status']).to.equal('Success');

                        expect(rows[0]['Remarks']).to.satisfy(
                            (value) => value === '' || value === null
                        );

                        //=========================================
                        // Second Row Validation
                        //=========================================

                        expect(rows[1]['Status']).to.equal('Fail');

                        expect(rows[1]['Remarks'])
                            .to.contain('File Number should be unique');

                    });

                });

            });

        });

    });

});