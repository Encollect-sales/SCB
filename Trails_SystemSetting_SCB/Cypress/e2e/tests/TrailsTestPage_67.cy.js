import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import TrailsPage from '../pages/TrailsPage';
const path = require('path');
import { faker } from '@faker-js/faker';

describe('Trails - RightPartyContact with value NO', () => {

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

    it('Verify system validation when RightPartyContact is set to NO during Bulk Trail Upload.', () => {

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

            const address =
                faker.location.streetAddress();


            // =====================================================
            // Excel Data
            // =====================================================

            const data = {

                'A2': '1667',
                'B2': '10145',

                // Right Party Contact = NO
                'C2': 'no',

                'D2': 'PTP',
                'E2': 'PTP',

                // Next Action Date
                'F2': '2027-12-22',

                // PTP Amount
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
                    'RightPartyContact value: NO'
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
            // Account Details Validation
            // =====================================================

            trailspage.AccountDetails({

                accountNumber: '1667',

                customerMet: 'No Contact',

                dispCode: 'PTP',

                ptpDate: '22-Dec-27',

                ptpAmount: '109',

                remarks: 'Bulk upload'

            });

        });

    });

});