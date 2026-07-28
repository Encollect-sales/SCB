import 'cypress-file-upload'; 
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import TrailsPage from '../pages/TrailsPage';
const path = require('path');

describe('Trails - Bulk trail upload  -', () => {
    let loginPage;
    let trailspage;

    before(() => {
        
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('TrailsPage').then(locators => {  
            trailspage = new TrailsPage(locators);
        });
    });

    it('User download the bulktrail template and make updates in the excel sheet and user upload the updated excel sheet - TC_ID_293', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            cy.wait(900);
            trailspage.TrailsTestPage_293();
            const sheetName = 'Sheet1';
            
            Cypress.on('uncaught:exception', (err, runnable) => {
                if (err.message.includes('ResizeObserver loop completed with undelivered notifications.')) {
                    return false;
                }
            });

            const data = {
                'A2': '1667',
                'B2': '1660',
                'C2': 'No Contact',
                'D2': 'PTP',
                'E2': 'PTP',
                'F2': '2025-02-28',
                'G2': '412',
                'H2': ' ',
                'I2': 'Feb',
                'J2': '8837506890',
                'K2': 'bakori',
                'L2': 'pune',
                'M2': 'arun02@yopmail.com',
                'N2': 'permanent',
                'O2': 'bus stop'
            };

            const downloadsFolder = Cypress.config('downloadsFolder');
            const fixturesFolder = 'cypress/fixtures';
            const excelFileName = 'Bulktrail.xlsx';
            const sourceFilePath = path.join(downloadsFolder, excelFileName);
            const destFilePath = path.join(fixturesFolder, excelFileName);

            // Update Excel File
            cy.task('updateBulktrailCell', {
                filePath: sourceFilePath,
                sheetName: sheetName,
                data: data
            }).then(() => {
                cy.log('Excel file updated successfully with new data');
            });

            //  Move File to Fixtures before Uploading
            cy.task('moveAllDownloadsToFixtures').then(result => {
                cy.log(result); // Log file move result
                
                // Upload the file from `fixtures/`
                cy.wait(2000);
                cy.get('input[type="file"]').attachFile(excelFileName, { force: true });
                cy.wait(2000);
                cy.get('.fileupload-new').click({ force: true });
                cy.wait(2000);
                cy.get('#confirm-dialog-okay').click();
                cy.wait(3000);
            });
        });
    });
});
