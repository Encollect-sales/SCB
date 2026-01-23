import 'cypress-file-upload'; 
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import TrailsPage from '../pages/TrailsPage';
const path = require('path');
import { faker } from '@faker-js/faker';

describe('Trails - NewEmailID Alphanumeric', () => {
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

    it('Upload file with alphanumeric NewEmailID', () => {
        getTestData('loginData', 'login2').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            cy.wait(900);
            trailspage.BulkTrailTemplate_download();

            const sheetName = 'Sheet1';

            Cypress.on('uncaught:exception', () => false);

            const city = faker.location.city();    
            const phoneNumber = faker.number.int({ min: 1000000000, max: 9999999999 }).toString();
            const address = faker.location.streetAddress();

            const data = {
                'A2':'18765',
                'B2':'10031',
                'C2':'yes',
                'D2':'PTP',
                'E2':'PTP',
                'F2':'2027/12/22',
                'G2':'109',
                'H2':' ',
                'I2':'Bulk upload',
                'J2': phoneNumber,
                'K2': city,
                'L2': address,
                'M2':'email12345',     // ❌ Alphanumeric
                'N2':'permenant',
                'O2':'new'
            };

            const downloadsFolder = Cypress.config('downloadsFolder');
            const fixturesFolder = 'cypress/fixtures';
            const excelFileName = 'Bulktrail.xlsx';

            cy.task('updateBulktrailCell', {
                filePath: path.join(downloadsFolder, excelFileName),
                sheetName,
                data
            });

            cy.task('moveAllDownloadsToFixtures');
            trailspage.Bulktrail_Failed();
        });
    });
});
