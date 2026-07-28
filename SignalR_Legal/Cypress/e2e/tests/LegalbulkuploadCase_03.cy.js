import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import LegalBulkUploadPage from '../pages/LegalBulkUploadPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('Case Bulk Upload - File Number Validation', () => {

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

    it('TC_003 - Verify File Number at maximum boundary length (50 characters)', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            cy.wait(3000);

            legalPage.DownloadCaseTemplate();

            const sheetName = 'Sheet1';
            const fileName = 'BulkUploadOfCaseDetails.xlsx';

            Cypress.on('uncaught:exception', (err) => {

                if (err.message.includes('ResizeObserver loop completed with undelivered notifications.')) {
                    return false;
                }

            });

            //====================================================
            // Dynamic Test Data
            //====================================================

            // 50 Character File Number
            const fileNumber = faker.string.alphanumeric(50);

            const petitioner = faker.person.fullName();

            const respondent = faker.person.fullName();

            const lawyer = faker.person.fullName();

            const cnrNumber = `CNR${faker.string.numeric(12)}`;

            const filingDate = '2024-05-10';

            const nextHearingDate = '2027-08-15';

            const formattedFilingDate = new Date(filingDate)
                .toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: 'short',
                    year: '2-digit'
                })
                .replace(/ /g, '-');

            const formattedNextHearingDate = new Date(nextHearingDate)
                .toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: 'short',
                    year: '2-digit'
                })
                .replace(/ /g, '-');

            const data = {

                A2: fileNumber,
                B2: '68210000005802',
                C2: '',
                D2: filingDate,
                E2: 'Civil Court',
                F2: 'Recovery',
                G2: 'CASE12345',
                H2: '2024',
                I2: petitioner,
                J2: respondent,
                K2: cnrNumber,
                L2: lawyer,
                M2: nextHearingDate

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

            legalPage.VerifyUploadSuccess();
                        //====================================================
            // Navigate to Account Details
            //====================================================

            legalPage.OpenAccountDetailsScreen();

            legalPage.EnterLoanAccountNumber('68210000005802');

            legalPage.OpenCustomerAccount();

            legalPage.ClickCaseDetailsTab();

            //====================================================
            // Verify Uploaded Data
            //====================================================

            legalPage.VerifyCaseDetails({

                fileNumber,

                loanAccountNumber: '68210000005802',

                subLAN: '',

                caseFilingDate: formattedFilingDate,

                forum: 'Civil Court',

                caseType: 'Recovery',

                caseNumber: 'CASE12345',

                caseYear: '2024',

                petitioner,

                respondent,

                cnr: cnrNumber,

                lawyer,

                nextHearingDate: formattedNextHearingDate

            });

        });

    });

});