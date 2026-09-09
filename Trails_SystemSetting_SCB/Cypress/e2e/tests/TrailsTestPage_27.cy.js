import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import TrailsPage from '../pages/TrailsPage';
const path = require('path');
import { faker } from '@faker-js/faker';

describe('Trails - Agreement ID – Alphanumeric Value is Allowed ', () => {

    let loginPage;
    let trailspage;

    before(() => {

        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('Trails').then(locators => {
            trailspage = new TrailsPage(locators);
        });

    });

    it('When a valid Agreement ID containing spaces is provided in the Bulk Trail Upload file, the system incorrectly rejects the record and displays an error stating that the account number does not exist', () => {

        getTestData('loginData', 'login2').then(user => {

            // Login
            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            cy.wait(900);

            // Download Bulk Trail Template
            trailspage.BulkTrailTemplate_download();

            const sheetName = 'Sheet1';

            Cypress.on('uncaught:exception', (err, runnable) => {

                if (
                    err.message.includes(
                        'ResizeObserver loop completed with undelivered notifications.'
                    )
                ) {
                    return false;
                }

            });

            // ########################################################
            // Generate random data
            // ########################################################

            const city = faker.location.city();

            const phoneNumber = faker.number.int({
                min: 1000000000,
                max: 9999999999
            }).toString();

            const email =
                `${faker.string.alpha({ length: 8 }).toLowerCase()}@yopmail.com`;

            const address = faker.location.streetAddress();

            // ########################################################
            // Excel Data
            // ########################################################

            const data = {

                'A2': '1667',
                'B2': '10145',
                'C2': 'yes',
                'D2': 'PTP',
                'E2': 'PTP',
                'F2': '2027-12-22',
                'G2': '109',
                'H2': ' ',
                'I2': 'Bulk upload',
                'J2': phoneNumber,
                'K2': city,
                'L2': address,
                'M2': email,
                'N2': 'permenant',
                'O2': 'new'

            };

            // ########################################################
            // File Path
            // ########################################################

            const downloadsFolder =
                Cypress.config('downloadsFolder');

            const fixturesFolder = 'fixtures';

            const excelFileName = 'Bulktrail.xlsx';

            const sourceFilePath =
                path.join(
                    downloadsFolder,
                    excelFileName
                );

            const destFilePath =
                path.join(
                    fixturesFolder,
                    excelFileName
                );

            // ########################################################
            // Update Excel File
            // ########################################################

            cy.task('updateBulktrailCell', {

                filePath: sourceFilePath,

                sheetName: sheetName,

                data: data

            }).then(() => {

                cy.log(
                    'Excel file updated successfully with new data'
                );

            });

            // ########################################################
            // Move File To Fixtures
            // ########################################################

            cy.task('moveAllDownloadsToFixtures').then(result => {

                cy.log(result);

            });

            // ########################################################
            // Upload Bulk Trail File
            // ########################################################

            trailspage.Bulktrail_Processed();

            cy.wait(3000);

            // ########################################################
            // Verify Uploaded Data Under Account Details
            // ########################################################

            trailspage.AccountDetails({

                accountNumber: '1667',

                customerMet: 'Met Customer',

                // modeOfCommunication: 'PTP',

                dispCode: 'PTP',

                ptpDate: '22-Dec-27',

                ptpAmount: '109',

                remarks: 'Bulk upload'

            });

        });

    });

});