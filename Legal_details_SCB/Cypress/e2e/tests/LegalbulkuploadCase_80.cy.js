import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import LegalBulkUploadPage from '../pages/LegalBulkUploadPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('Case Bulk Upload - Verify corrected failed rows can be re-uploaded', () => {

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

    it('TC_M016 - Verify corrected failed rows are uploaded successfully', () => {

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

            const downloadsFolder = Cypress.config('downloadsFolder');

            //====================================================
            // FIRST UPLOAD (Invalid Rows)
            //====================================================

            legalPage.DownloadCaseTemplate();

            const firstFilePath = path.join(
                downloadsFolder,
                fileName
            );

            const firstUploadData = {

                //---------------- Row 2 (Petitioner Blank) ----------------

                A2: `FN${faker.string.numeric(6)}`,
                B2: loanAccountNumber,
                C2: '',
                D2: '2024-05-10',
                E2: 'Civil Court',
                F2: 'Recovery',
                G2: 'CASE16001',
                H2: '2024',
                I2: '',
                J2: faker.person.fullName(),
                K2: '',
                L2: faker.person.fullName(),
                M2: '2028-12-31',

                //---------------- Row 3 (Lawyer Blank) ----------------

                A3: `FN${faker.string.numeric(6)}`,
                B3: loanAccountNumber,
                C3: '',
                D3: '2024-05-11',
                E3: 'Civil Court',
                F3: 'Recovery',
                G3: 'CASE16002',
                H3: '2024',
                I3: faker.person.fullName(),
                J3: faker.person.fullName(),
                K3: '',
                L3: '',
                M3: '2028-12-31'

            };

            cy.task('updateLegalBulkCell', {

                filePath: firstFilePath,
                sheetName,
                data: firstUploadData

            });

            cy.task('moveAllDownloadsToFixtures');

            legalPage.UploadCaseTemplate(fileName);

            legalPage.VerifyUploadFailed();

            //====================================================
            // SECOND UPLOAD (Corrected Rows)
            //====================================================

            legalPage.DownloadCaseTemplate();

            const secondFilePath = path.join(
                downloadsFolder,
                fileName
            );

            const correctedData = {

                //---------------- Corrected Row 2 ----------------

                A2: firstUploadData.A2,
                B2: loanAccountNumber,
                C2: '',
                D2: '2024-05-10',
                E2: 'Civil Court',
                F2: 'Recovery',
                G2: 'CASE16001',
                H2: '2024',
                I2: faker.person.fullName(),
                J2: faker.person.fullName(),
                K2: '',
                L2: faker.person.fullName(),
                M2: '2028-12-31',

                //---------------- Corrected Row 3 ----------------

                A3: firstUploadData.A3,
                B3: loanAccountNumber,
                C3: '',
                D3: '2024-05-11',
                E3: 'Civil Court',
                F3: 'Recovery',
                G3: 'CASE16002',
                H3: '2024',
                I3: faker.person.fullName(),
                J3: faker.person.fullName(),
                K3: '',
                L3: faker.person.fullName(),
                M3: '2028-12-31'

            };

            cy.task('updateLegalBulkCell', {

                filePath: secondFilePath,
                sheetName,
                data: correctedData

            });

            cy.task('moveAllDownloadsToFixtures');

            legalPage.UploadCaseTemplate(fileName);

            legalPage.VerifyUploadSuccess();

            //====================================================
            // Verify Status File
            //====================================================

            legalPage.getTransactionId().then((txnIdRaw) => {

                const txnId = txnIdRaw.trim();

                cy.log('Transaction ID : ' + txnId);

                legalPage.downloadStatusFile(txnId);

                cy.wait(8000);

                cy.task('findLatestFile', {

                    folder: downloadsFolder,
                    pattern: `BulkUploadOfCaseDetails_${txnId}`

                }).then((filePath) => {

                    expect(filePath).to.not.be.null;

                    cy.task('readCsv', filePath).then((rows) => {

                        expect(rows.length).to.equal(2);

                        rows.forEach((row) => {

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