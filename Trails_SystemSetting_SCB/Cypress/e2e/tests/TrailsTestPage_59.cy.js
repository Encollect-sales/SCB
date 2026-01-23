import 'cypress-file-upload'; 
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import TrailsPage from '../pages/TrailsPage';
const path = require('path');
import { faker } from '@faker-js/faker';

describe('Trails - New Address Special Characters', () => {
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

    it('Special characters in New Address', () => {
        getTestData('loginData', 'login2').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            cy.wait(900);

            trailspage.BulkTrailTemplate_download();
            const sheetName = 'Sheet1';

            Cypress.on('uncaught:exception', (err) => {
                if (err.message.includes('ResizeObserver loop completed with undelivered notifications.')) {
                    return false;
                }
            });

            const city = faker.location.city();
            const phoneNumber = faker.number.int({ min: 1000000000, max: 9999999999 }).toString();
            const email = `${faker.string.alpha({ length: 8 }).toLowerCase()}@yopmail.com`;

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
                'L2':'@@@###$$$',          // ❌ SPECIAL CHARACTERS
                'M2': email,
                'N2':'permenant',
                'O2':'new'
            };

            const downloadsFolder = Cypress.config('downloadsFolder');
            const excelFileName = 'Bulktrail.xlsx';
            const sourceFilePath = path.join(downloadsFolder, excelFileName);

            cy.task('updateBulktrailCell', {
                filePath: sourceFilePath,
                sheetName,
                data
            });

            cy.task('moveAllDownloadsToFixtures');
            trailspage.Bulktrail_Failed();
        });
    });
});
