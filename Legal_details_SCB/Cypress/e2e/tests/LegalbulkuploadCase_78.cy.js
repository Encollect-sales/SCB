import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import LegalBulkUploadPage from '../pages/LegalBulkUploadPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('Case Bulk Upload - Verify duplicate File Number across two uploads', () => {

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

    it('TC_M014 - Verify second upload rejects previously uploaded File Number', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            cy.wait(3000);

            const fileName = 'BulkUploadOfCaseDetails.xlsx';
            const sheetName = 'Sheet1';

            Cypress.on('uncaught:exception', (err) => {

                if (err.message.includes('ResizeObserver loop completed with undelivered notifications.')) {
                    return false;
                }

            });

            const loanAccountNumber = '68210000005802';
            const duplicateFileNumber = `FN${faker.string.numeric(6)}`;

            const downloadsFolder = Cypress.config('downloadsFolder');

            //====================================================
            // FIRST UPLOAD
            //====================================================

            legalPage.DownloadCaseTemplate();

            const firstFile = path.join(downloadsFolder, fileName);

            const firstData = {

                A2: duplicateFileNumber,
                B2: loanAccountNumber,
                C2: '',
                D2: '2024-05-10',
                E2: 'Civil Court',
                F2: 'Recovery',
                G2: 'CASE14001',
                H2: '2024',
                I2: faker.person.fullName(),
                J2: faker.person.fullName(),
                K2: `CNR${faker.string.numeric(12)}`,
                L2: faker.person.fullName(),
                M2: '2028-12-31'

            };

            cy.task('updateLegalBulkCell', {

                filePath: firstFile,
                sheetName,
                data: firstData

            });

            cy.task('moveAllDownloadsToFixtures');

            legalPage.UploadCaseTemplate(fileName);

            legalPage.VerifyUploadSuccess();

            cy.wait(5000);

            //====================================================
            // SECOND UPLOAD
            //====================================================

            legalPage.DownloadCaseTemplate();

            const secondFile = path.join(downloadsFolder, fileName);

            const secondData = {

                A2: duplicateFileNumber, // Same File Number
                B2: loanAccountNumber,
                C2: '',
                D2: '2024-05-11',
                E2: 'Civil Court',
                F2: 'Recovery',
                G2: 'CASE14002',
                H2: '2024',
                I2: faker.person.fullName(),
                J2: faker.person.fullName(),
                K2: `CNR${faker.string.numeric(12)}`,
                L2: faker.person.fullName(),
                M2: '2028-12-31'

            };

            cy.task('updateLegalBulkCell', {

                filePath: secondFile,
                sheetName,
                data: secondData

            });

            cy.task('moveAllDownloadsToFixtures');

            legalPage.UploadCaseTemplate(fileName);

            legalPage.VerifyUploadFailed();

            //====================================================
            // VERIFY STATUS REPORT
            //====================================================

            legalPage.getTransactionId().then((txnIdRaw) => {

                const txnId = txnIdRaw.trim();

                legalPage.downloadStatusFile(txnId);

                cy.wait(8000);

                cy.task('findLatestFile', {

                    folder: downloadsFolder,
                    pattern: `BulkUploadOfCaseDetails_${txnId}`

                }).then((filePath) => {

                    expect(filePath).to.not.be.null;

                    cy.task('readCsv', filePath).then((rows) => {

                        expect(rows.length).to.equal(1);

                        expect(rows[0]['Status']).to.equal('Fail');

                        expect(rows[0]['Remarks'])
                            .to.contain('File Number');

                        expect(rows[0]['Remarks'])
                            .to.contain('unique');

                    });

                });

            });

        });

    });

});