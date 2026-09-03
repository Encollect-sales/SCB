import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import LegalBulkUploadPage from '../pages/LegalBulkUploadPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('Case Bulk Upload - Verify upload with only mandatory fields', () => {

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

    it('TC_058 - Verify upload with only mandatory fields', () => {

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

            const loanAccountNumber = '68210000005802';

            // Optional fields left blank
            const subLAN = '';

            const forum = '';

            const caseType = '';

            const cnrNumber = '';

            const filingDate = '2024-05-10';

            const caseNumber = 'CASE12345';

            const caseYear = '2024';

            const petitioner = faker.person.fullName();

            const respondent = faker.person.fullName();

            const lawyer = 'Adv. Suresh Patil';

            const nextHearingDate = '2028-12-31';

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
                B2: loanAccountNumber,
                C2: subLAN,
                D2: filingDate,
                E2: forum,
                F2: caseType,
                G2: caseNumber,
                H2: caseYear,
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
                sheetName,
                data

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
            // Verify Upload Success
            //====================================================

            legalPage.VerifyUploadSuccess();

            //====================================================
            // Navigate to Account Details
            //====================================================

            legalPage.OpenAccountDetailsScreen();

            legalPage.EnterLoanAccountNumber(loanAccountNumber);

            legalPage.OpenCustomerAccount();

            legalPage.ClickCaseDetailsTab();

            //====================================================
            // Verify Uploaded Case Details
            //====================================================

            legalPage.VerifyCaseDetails({

                fileNumber,

                loanAccountNumber,

                subLAN: '',

                caseFilingDate: formattedFilingDate,

                forum: '',

                caseType: '',

                caseNumber,

                caseYear,

                petitioner,

                respondent,

                cnr: '',

                lawyer,

                nextHearingDate: formattedNextHearingDate

            });

        });

    });

});