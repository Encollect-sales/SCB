import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import TrailsPage from '../pages/TrailsPage';
const path = require('path');
import { faker } from '@faker-js/faker';

describe('Trails - Entering Present date in Next Action Date column', () => {

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

    it('Verify that the system accepts the current date as the Next Action Date, as per business rules.', () => {

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

            // Handle ResizeObserver exception
            Cypress.on('uncaught:exception', (err, runnable) => {

                if (
                    err.message.includes(
                        'ResizeObserver loop completed with undelivered notifications.'
                    )
                ) {
                    return false;
                }

            });

            // Generate random data
            const city = faker.location.city();

            const phoneNumber = faker.number.int({
                min: 1000000000,
                max: 9999999999
            }).toString();

            const email =
                `${faker.string.alpha({ length: 8 }).toLowerCase()}@yopmail.com`;

            const address = faker.location.streetAddress();

            // Generate current date
            // Format: YYYY-MM-DD
            // Example: 2026-09-03

            const today = new Date();

            const year = today.getFullYear();

            const month = String(today.getMonth() + 1).padStart(2, '0');

            const day = String(today.getDate()).padStart(2, '0');

            const currentDate = `${year}-${month}-${day}`;

            cy.log(`Current Date: ${currentDate}`);

            // Excel data
            const data = {

                'A2': '1667',
                'B2': '10169',
                'C2': 'yes',
                'D2': 'PTP',
                'E2': 'PTP',

                // Current date in Next Action Date
                'F2': currentDate,

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

            // File details
            const downloadsFolder =
                Cypress.config('downloadsFolder');

            const fixturesFolder =
                'cypress/fixtures';

            const excelFileName =
                'Bulktrail.xlsx';

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

            // Update Excel file
            cy.task('updateBulktrailCell', {

                filePath: sourceFilePath,

                sheetName: sheetName,

                data: data

            }).then(() => {

                cy.log(
                    'Excel file updated successfully with current date'
                );

            });

            // Move updated file to fixtures
            cy.task('moveAllDownloadsToFixtures').then(result => {

                cy.log(result);

            });

            // Upload the file
            trailspage.Bulktrail_Processed();

            cy.wait(3000);

            // Verify uploaded data under Account Details
            trailspage.AccountDetailsptp({

                accountNumber: '1667',

                customerMet: 'Met Customer',

                // modeOfCommunication: 'PTP',

                dispCode: 'PTP',

                ptpDate: currentDate,

                ptpAmount: '109',

                remarks: 'Bulk upload'

            });

        });

    });

});