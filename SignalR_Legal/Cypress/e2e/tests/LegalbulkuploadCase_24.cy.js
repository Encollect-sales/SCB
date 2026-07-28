import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import LegalBulkUploadPage from '../pages/LegalBulkUploadPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('Case Bulk Upload - Verify valid Case Type is accepted', () => {

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

    it('TC_024 - Verify valid Case Type is accepted', () => {

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

const petitioner = faker.person.fullName();

const respondent = faker.person.fullName();

const lawyer = faker.person.fullName();

const cnrNumber = `CNR${faker.string.numeric(12)}`;

const filingDate = '2024-05-10';

const nextHearingDate = '2027-08-15';

const caseType = 'Civil Recovery Suit';

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
    C2: '',
    D2: filingDate,
    E2: 'Civil Court',
    F2: caseType,
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
            // Verify Upload Failed
            //====================================================

            legalPage.VerifyUploadFailed();
                        //====================================================
            // Get Transaction ID
         legalPage.VerifyCaseDetails({

    fileNumber,

    loanAccountNumber,

    subLAN: '',

    caseFilingDate: formattedFilingDate,

    forum: 'Civil Court',

    caseType,

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

