import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import LegalBulkUploadPage from '../pages/LegalBulkUploadPage';
import { faker } from '@faker-js/faker';
const path = require('path');

// Formats an ISO date string (e.g. '2026-07-17') the way the UI displays it,
// e.g. '17-Jul-2026'. The Excel upload template expects ISO format, but the
// frontend renders dates differently, so this is used only for UI assertions.
const toUiDate = (isoDate) => {

    const d = new Date(isoDate);
    const day = String(d.getDate()).padStart(2, '0');
    const month = d.toLocaleString('en-US', { month: 'short' });
    const year = d.getFullYear();

    return `${day}-${month}-${year}`;

};

describe('Legal Bulk Upload - Create And Update In Same File', () => {

    let loginPage;
    let legalPage;

    // Shared across both tests (Create -> Update)
    const fileName = 'BulkUploadOfSarfaesiDetails.xlsx';
    const sheetName = 'Sheet1';
    const loanAccountNumber = '68210000005802';

    let sourceFilePath;
    let noticeReferenceNo;
    let partyName;

    before(() => {

        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('LegalBulkUpload').then(locators => {
            legalPage = new LegalBulkUploadPage(locators);
        });

    });

    beforeEach(() => {

        Cypress.on('uncaught:exception', (err) => {

            if (err.message.includes('ResizeObserver loop completed with undelivered notifications.')) {
                return false;
            }

        });

    });

    it('TC_CF_012 - Create Record', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            cy.wait(2000);

            legalPage.DownloadLegalTemplate();

            //==============================
            // Test Data
            //==============================

            noticeReferenceNo = `NRN${faker.string.numeric(8)}`;
            partyName = faker.person.fullName();
            const trackingId = `TRK${faker.string.numeric(10)}`;

            // ISO date for the Excel upload template
            const noticeDateIso = '2026-07-17';

            const data = {

                'A2': '210000001692',
                'B2': loanAccountNumber,
                'C2': partyName,
                'D2': 'Father',
                'E2': 'Create',
                'F2': 'Demand Notice Issued',
                'G2': 'In Progress',
                'H2': noticeReferenceNo,
                'I2': noticeDateIso,
                'J2': 'Delivered',
                'K2': noticeDateIso,
                'L2': 'Delivered',
                'M2': noticeDateIso,
                'N2': 'Delivered',
                'O2': noticeDateIso,
                'P2': trackingId

            };

            const downloadsFolder = Cypress.config('downloadsFolder');

            sourceFilePath = path.join(
                downloadsFolder,
                fileName
            );

            cy.task('updateLegalBulkCell', {

                filePath: sourceFilePath,
                sheetName,
                data

            });

            cy.task('moveAllDownloadsToFixtures');

            //=========================================
            // Upload File
            //=========================================

            legalPage.UploadLegalTemplate(fileName);

            //=========================================
            // Verify Upload Success
            //=========================================

            legalPage.BulkLegalUpload_Processed();

            //=========================================
            // Verify Record in Legal Details
            //=========================================

            legalPage.OpenAccountDetailsScreen();

            legalPage.EnterLoanAccountNumber(loanAccountNumber);

            legalPage.OpenCustomerAccount();

            legalPage.ClickLegalDetailsTab();

            legalPage.VerifyLegalDetails({

                noticeReferenceNo: noticeReferenceNo,
                partyName: partyName,
                sarfaesiStage: 'Demand Notice Issued',
                sarfaesiStatus: 'In Progress',
                noticeDate: toUiDate(noticeDateIso),
                whatsappStatus: 'Delivered',
                whatsappDate: toUiDate(noticeDateIso),
                smsStatus: 'Delivered',
                smsDate: toUiDate(noticeDateIso),
                physicalStatus: 'Delivered',
                physicalDate: toUiDate(noticeDateIso),
                trackingId: trackingId

            });

        });

    });

    it('TC_CF_013 - Update Same Record', () => {

        //=========================================
        // Update The Same Record
        //=========================================

        const updatedTrackingId = `TRK${faker.string.numeric(10)}`;

        // ISO date for the Excel upload template
        const updatedDateIso = '2026-08-01';

        const updateData = {

            // Keep the same Customer ID
            'A2': '210000001692',

            // Keep the same Loan Account Number
            'B2': loanAccountNumber,

            // Keep the same Party Name
            'C2': partyName,

            'D2': 'Father',

            // Change only Upload Type
            'E2': 'Update',

            // Updated values
            'F2': 'Possession Notice',
            'G2': 'Completed',

            // Same Reference Number
            'H2': noticeReferenceNo,

            'I2': updatedDateIso,
            'J2': 'Delivered',
            'K2': updatedDateIso,
            'L2': 'Delivered',
            'M2': updatedDateIso,
            'N2': 'Delivered',
            'O2': updatedDateIso,

            // Updated Tracking Id
            'P2': updatedTrackingId

        };

        cy.task('updateLegalBulkCell', {

            filePath: sourceFilePath,
            sheetName,
            data: updateData

        });

        cy.task('moveAllDownloadsToFixtures');

        //=========================================
        // Upload Updated File
        //=========================================

        legalPage.UploadLegalTemplate(fileName);

        //=========================================
        // Verify Upload Success
        //=========================================

        legalPage.BulkLegalUpload_Processed();

        //=========================================
        // Verify Updated Record
        //=========================================

        legalPage.OpenAccountDetailsScreen();

        legalPage.EnterLoanAccountNumber(loanAccountNumber);

        legalPage.OpenCustomerAccount();

        legalPage.ClickLegalDetailsTab();

        legalPage.VerifyLegalDetails({

            noticeReferenceNo: noticeReferenceNo,
            partyName: partyName,
            sarfaesiStage: 'Possession Notice',
            sarfaesiStatus: 'Completed',
            noticeDate: toUiDate(updatedDateIso),
            whatsappStatus: 'Delivered',
            whatsappDate: toUiDate(updatedDateIso),
            smsStatus: 'Delivered',
            smsDate: toUiDate(updatedDateIso),
            physicalStatus: 'Delivered',
            physicalDate: toUiDate(updatedDateIso),
            trackingId: updatedTrackingId

        });

    });

});