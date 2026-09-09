import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import TrailsPage from '../pages/TrailsPage';
const path = require('path');
import { faker } from '@faker-js/faker';

describe('Trails - New Address Alphanumeric', () => {

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

    it('Verify Alphanumeric value is accepted in New Address during Bulk Trail Upload', () => {

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

            const city = faker.location.city();

            const phoneNumber = faker.number.int({
                min: 1000000000,
                max: 9999999999
            }).toString();

            const email =
                `${faker.string.alpha({ length: 8 }).toLowerCase()}@yopmail.com`;


            // =====================================================
            // Excel Data
            // =====================================================

            const data = {

                'A2': '1667',
                'B2': '10145',
                'C2': 'yes',
                'D2': 'PTP',
                'E2': 'PTP',

                // Next Action Date
                'F2': '2027-12-22',

                // PTP Amount
                'G2': '109',

                'H2': ' ',
                'I2': 'Bulk upload',
                'J2': phoneNumber,

                // New Area
                'K2': city,

                // New Address - Alphanumeric
                'L2': 'Address123Block9',

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
                    'New Address: Address123Block9'
                );

            });


            // =====================================================
            // Move Updated File To Fixtures
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
            // Account Details
            // =====================================================

            trailspage.AccountDetails({

                accountNumber: '1667',

                customerMet: 'Met Customer',

                dispCode: 'PTP',

                ptpDate: '22-Dec-27',

                ptpAmount: '109',

                newAddress: 'Address123Block9',

                remarks: 'Bulk upload'

            });

        });

    });

});