import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import TrailsPage from '../pages/TrailsPage';
const path = require('path');
import { faker } from '@faker-js/faker';

describe('Trails - New Area Alphanumeric', () => {

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

    it('Verify that Alphanumeric value is accepted in New Area during Bulk Trail Upload', () => {

        getTestData('loginData', 'login2').then(user => {

            // =====================================================
            // Login
            // =====================================================

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            cy.wait(900);

            // =====================================================
            // Download Bulk Trail Template
            // =====================================================

            trailspage.BulkTrailTemplate_download();

            const sheetName = 'Sheet1';

            // =====================================================
            // Handle ResizeObserver Exception
            // =====================================================

            Cypress.on('uncaught:exception', (err, runnable) => {

                if (
                    err.message.includes(
                        'ResizeObserver loop completed with undelivered notifications.'
                    )
                ) {
                    return false;
                }

            });

            // =====================================================
            // Generate Random Data
            // =====================================================

            const phoneNumber = faker.number.int({
                min: 1000000000,
                max: 9999999999
            }).toString();

            const email =
                `${faker.string.alpha({ length: 8 }).toLowerCase()}@yopmail.com`;

            const address =
                faker.location.streetAddress();

            // =====================================================
            // Excel Data
            // =====================================================

            const data = {

                'A2': '1667',
                'B2': '10169',
                'C2': 'yes',
                'D2': 'PTP',
                'E2': 'PTP',
                'F2': '2027-12-22',
                'G2': '109',
                'H2': ' ',
                'I2': 'Bulk upload',
                'J2': phoneNumber,

                // New Area - Alphanumeric value
                'K2': 'Area123',

                'L2': address,
                'M2': email,
                'N2': 'permenant',
                'O2': 'new'

            };

            // =====================================================
            // File Path
            // =====================================================

            const downloadsFolder =
                Cypress.config('downloadsFolder');

            const excelFileName =
                'Bulktrail.xlsx';

            const sourceFilePath =
                path.join(
                    downloadsFolder,
                    excelFileName
                );

            // =====================================================
            // Update Excel File
            // =====================================================

            cy.task('updateBulktrailCell', {
                filePath: sourceFilePath,
                sheetName: sheetName,
                data: data
            }).then(() => {

                cy.log(
                    'Excel file updated successfully'
                );

                cy.log(
                    'New Area uploaded: Area123'
                );

            });

            // =====================================================
            // Move File To Fixtures
            // =====================================================

            cy.task('moveAllDownloadsToFixtures').then(result => {

                cy.log(result);

            });

            // =====================================================
            // Upload Bulk Trail File
            // =====================================================

            trailspage.Bulktrail_Processed();

            cy.wait(5000);

            // =====================================================
            // Verify Data Under Account Details
            // =====================================================

            trailspage.AccountDetailsarea({

                accountNumber: '1667',

                customerMet: 'Met Customer',

                dispCode: 'PTP',

                ptpDate: '22-Dec-27',

                ptpAmount: '109',

                remarks: 'Bulk upload',

                newArea: 'Area123'

            });

        });

    });

});