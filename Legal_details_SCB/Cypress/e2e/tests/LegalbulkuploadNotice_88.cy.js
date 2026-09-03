import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import LegalBulkUploadPage from '../pages/LegalBulkUploadPage';
const path = require('path');

describe('Notice Bulk Upload - Verify Unicode Characters in Party Name', () => {

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

    it('TC_SEC_010 - Verify Unicode characters are handled correctly', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            cy.wait(3000);

            legalPage.DownloadLegalNoticeTemplate();

            const fileName = 'BulkUploadOfNoticeDetails.xlsx';
            const sheetName = 'Sheet1';

            Cypress.on('uncaught:exception', (err) => {

                if (err.message.includes('ResizeObserver loop completed with undelivered notifications.')) {
                    return false;
                }

            });

            const data = {

                A2: '41174',
                B2: '1667',
                C2: 'Create',

                // Unicode Party Name
                D2: '𝓐𝓓𝓜𝓘𝓝 😀 ＡＤＭＩＮ 𝐀𝐃𝐌𝐈𝐍',

                E2: 'Self',
                F2: 'Demand Notice',
                G2: `UNICODE${Date.now()}`,
                H2: '2026-07-20',
                I2: 'Delivered',
                J2: '2026-07-21',
                K2: 'Delivered',
                L2: '2026-07-21',
                M2: 'Delivered',
                N2: '2026-07-22',
                O2: 'TRACK10001'

            };

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

            legalPage.UploadLegalNoticeTemplate(fileName);

            // Change to "Failed" if your application rejects Unicode.
            legalPage.VerifyUploadNoticeSuccess();

            legalPage.getTransactionId().then((txnIdRaw) => {

                const txnId = txnIdRaw.trim();

                legalPage.downloadStatusFile(txnId);

                cy.wait(8000);

                cy.task('findLatestFile', {

                    folder: downloadsFolder,
                    pattern: `BulkUploadOfNoticeDetails_${txnId}`

                }).then((filePath) => {

                    expect(filePath).to.not.be.null;

                    cy.task('readCsv', filePath).then((rows) => {

                        expect(rows.length).to.equal(1);

                        expect(
                            rows[0]['Status'] === 'Success' ||
                            rows[0]['Status'] === 'Processed'
                        ).to.be.true;

                    });

                });

            });

        });

    });

});