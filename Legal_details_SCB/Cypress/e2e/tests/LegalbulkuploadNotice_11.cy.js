import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import LegalBulkUploadPage from '../pages/LegalBulkUploadPage';
const path = require('path');

describe('Notice Bulk Upload - Create and Update Existing Notice Reference Number', () => {

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

    it('TC_UT_02 - Verify Create and Update with the same Notice Reference Number', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            cy.wait(3000);

            const fileName = 'BulkUploadOfNoticeDetails.xlsx';
            const sheetName = 'Sheet1';

            Cypress.on('uncaught:exception', (err) => {

                if (err.message.includes(
                    'ResizeObserver loop completed with undelivered notifications.'
                )) {
                    return false;
                }

            });

            const downloadsFolder = Cypress.config('downloadsFolder');

            const sourceFilePath = path.join(
                downloadsFolder,
                fileName
            );

            //====================================================
            // UNIQUE NOTICE REFERENCE NUMBER (avoids collision
            // with data that may already exist from earlier runs)
            //====================================================

            const noticeReferenceNo = `NREF-EXIST-UPDATE-${Date.now()}`;

            //====================================================
            // STEP 1 - DOWNLOAD TEMPLATE FOR CREATE
            //====================================================

            legalPage.DownloadLegalNoticeTemplate();

            cy.wait(3000);

            //====================================================
            // STEP 2 - CREATE NOTICE
            //====================================================

            const createData = {

                A2: '41174',
                B2: '1667',
                C2: 'Create',
                D2: 'Rajesh Kumar',
                E2: 'Self',
                F2: 'Demand Notice',
                G2: noticeReferenceNo,
                H2: '2026-07-20',
                I2: 'Delivered',
                J2: '2026-07-21',
                K2: 'Delivered',
                L2: '2026-07-21',
                M2: 'Delivered',
                N2: '2026-07-22',
                O2: 'TRK20260722001',

            };

            //====================================================
            // UPDATE EXCEL - CREATE
            //====================================================

            cy.task('updateLegalBulkCell', {

                filePath: sourceFilePath,
                sheetName,
                data: createData

            });

            cy.task('moveAllDownloadsToFixtures');

            //====================================================
            // UPLOAD CREATE FILE
            //====================================================

            legalPage.UploadLegalNoticeTemplate(fileName);

            legalPage.VerifyUploadNoticeSuccess();

            //====================================================
            // VERIFY CREATE STATUS REPORT
            //====================================================

            legalPage.getTransactionId().then((createTxnIdRaw) => {

                const createTxnId = createTxnIdRaw.trim();

                cy.log('CREATE Transaction ID : ' + createTxnId);

                legalPage.downloadStatusFile(createTxnId);

                cy.wait(8000);

                cy.task('findLatestFile', {

                    folder: downloadsFolder,
                    pattern: `BulkUploadOfNoticeDetails_${createTxnId}`

                }).then((filePath) => {

                    expect(filePath).to.not.be.null;

                    cy.task('readCsv', filePath).then((rows) => {

                        expect(rows.length).to.equal(1);

                        const row = rows[0];

                        expect(row['Status']).to.equal('Success');

                        cy.log('CREATE Remarks : ' + row['Remarks']);

                        expect(row['Remarks'] || '').to.equal('');

                    });

                });

            });

            //====================================================
            // STEP 3 - DOWNLOAD TEMPLATE AGAIN FOR UPDATE
            //====================================================

            cy.wait(3000);

            legalPage.DownloadLegalNoticeTemplate();

            cy.wait(3000);

            //====================================================
            // STEP 4 - UPDATE SAME NOTICE
            // Same row as Create (same reference number, same
            // other fields) — only C2 changes from 'Create' to
            // 'Update'.
            //====================================================

            const updateData = {

                ...createData,
                C2: 'Update',

            };

            //====================================================
            // UPDATE EXCEL - UPDATE
            //====================================================

            cy.task('updateLegalBulkCell', {

                filePath: sourceFilePath,
                sheetName,
                data: updateData

            });

            cy.task('moveAllDownloadsToFixtures');

            //====================================================
            // UPLOAD UPDATE FILE
            //====================================================

            legalPage.UploadLegalNoticeTemplate(fileName);

            legalPage.VerifyUploadNoticeSuccess();

            //====================================================
            // VERIFY UPDATE STATUS REPORT
            //====================================================

            legalPage.getTransactionId().then((updateTxnIdRaw) => {

                const updateTxnId = updateTxnIdRaw.trim();

                cy.log('UPDATE Transaction ID : ' + updateTxnId);

                legalPage.downloadStatusFile(updateTxnId);

                cy.wait(8000);

                cy.task('findLatestFile', {

                    folder: downloadsFolder,
                    pattern: `BulkUploadOfNoticeDetails_${updateTxnId}`

                }).then((filePath) => {

                    expect(filePath).to.not.be.null;

                    cy.task('readCsv', filePath).then((rows) => {

                        expect(rows.length).to.equal(1);

                        const row = rows[0];

                        expect(row['Status']).to.equal('Success');

                        cy.log('UPDATE Remarks : ' + row['Remarks']);

                        expect(row['Remarks'] || '').to.equal('');

                    });

                });

            });

        });

    });

});