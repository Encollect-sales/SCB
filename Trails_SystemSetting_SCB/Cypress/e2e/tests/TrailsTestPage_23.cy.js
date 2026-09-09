import 'cypress-file-upload';
import path from 'path';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import TrailsPage from '../pages/TrailsPage';
import { faker } from '@faker-js/faker';

describe('Trails - Correct details and file is getting processed', () => {

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

    beforeEach(() => {

        // Register the uncaught:exception handler before any UI action runs,
        // so it's active for the download step too (previously it was added
        // after BulkTrailTemplate_download(), which meant an error thrown
        // during the download wouldn't have been suppressed).
        Cypress.on('uncaught:exception', (err) => {

            if (
                err.message.includes(
                    'ResizeObserver loop completed with undelivered notifications.'
                )
            ) {
                return false;
            }

            // Let any other uncaught exception fail the test as normal.
            return true;

        });

    });

    it('User downloads Bulk Trail template, updates Excel, uploads file and verifies Trail History details', () => {

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

            // ---------------------------------------------------------
            // Generate random test data
            // ---------------------------------------------------------

            const city = faker.location.city();

            const phoneNumber = faker.number
                .int({
                    min: 1000000000,
                    max: 9999999999
                })
                .toString();

            const email =
                `${faker.string.alpha({ length: 8 }).toLowerCase()}@yopmail.com`;

            const address = faker.location.streetAddress();

            // ---------------------------------------------------------
            // Excel data
            // ---------------------------------------------------------

            const excelData = {

                'A2': '1667',
                'B2': '10145',
                'C2': 'yes',
                'D2': 'PTP',
                'E2': 'PTP',
                'F2': '2027-12-22',
                'G2': '109',
                'H2': '', // was ' ' (single space) - use an actual empty value
                'I2': 'Bulk upload',
                'J2': phoneNumber,
                'K2': city,
                'L2': address,
                'M2': email,
                'N2': 'permenant',
                'O2': 'new'

            };

            // ---------------------------------------------------------
            // Data which is actually visible in Trail History
            // ---------------------------------------------------------

            const trailHistoryData = {

                accountNumber: '1667',
                customerMet: 'Met Customer',
                // modeOfCommunication: 'PTP',
                dispCode: 'PTP',
                ptpDate: '22-Dec-27 00:00:00',
                ptpAmount: '109',
                remarks: 'Bulk upload'

            };

            // ---------------------------------------------------------
            // File paths
            // ---------------------------------------------------------

            const downloadsFolder = Cypress.config('downloadsFolder');
            const excelFileName = 'Bulktrail.xlsx';

            const sourceFilePath = path.join(
                downloadsFolder,
                excelFileName
            );

            // ---------------------------------------------------------
            // Update downloaded Excel file, THEN move it, THEN upload it.
            // These three steps are now explicitly chained/nested so the
            // dependency between them is clear from the code itself,
            // rather than relying only on Cypress's implicit command queue.
            // ---------------------------------------------------------

            cy.task('updateBulktrailCell', {

                filePath: sourceFilePath,
                sheetName: sheetName,
                data: excelData

            }).then(() => {

                cy.log('Excel file updated successfully with new data');

                cy.task('moveAllDownloadsToFixtures').then(result => {

                    cy.log(result);

                    // Upload and process Bulk Trail file
                    trailspage.Bulktrail_Processed();

                    cy.wait(3000);

                    // Open Account Details and verify uploaded data
                    trailspage.AccountDetails(trailHistoryData);

                });

            });

        });

    });

});