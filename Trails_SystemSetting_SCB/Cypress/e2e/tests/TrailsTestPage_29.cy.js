import 'cypress-file-upload'; 
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import TrailsPage from '../pages/TrailsPage';
const path = require('path');
import { faker } from '@faker-js/faker';

describe('Trails - Invalid Agreement ID. Spaces are not allowed.', () => {
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

    it('The system should reject the Agreement ID containing spaces and display an appropriate validation error message. The Trail record should not be created or processed.', () => {
        getTestData('loginData', 'login2').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            cy.wait(900);
            trailspage.BulkTrailTemplate_download();
            const sheetName = 'Sheet1';
            
            Cypress.on('uncaught:exception', (err, runnable) => {
                if (err.message.includes('ResizeObserver loop completed with undelivered notifications.')) {
                    return false;
                }
            });

            //############################################################################

         const city = faker.location.city();    
         const phoneNumber = faker.number.int({ min: 1000000000, max: 9999999999 }).toString(); // 10-digit

         const email = `${faker.string.alpha({ length: 8 }).toLowerCase()}@yopmail.com`;
         const address = faker.location.streetAddress();
         
         const city1 = faker.location.city();    
         const phoneNumber1 = faker.number.int({ min: 1000000000, max: 9999999999 }).toString(); // 10-digit

         const email1 = `${faker.string.alpha({ length: 8 }).toLowerCase()}@yopmail.com`;
         const address1 = faker.location.streetAddress();
            //################################################################################

            const data = {
                'A2':'18765',
                'B2': '10031',
                'C2': 'yes',
                'D2': 'PTP',
                'E2': 'PTP',
                'F2': '2027/12/22',
                'G2': '109',
                'H2':' ',
                'I2':'Bulk upload',
                'J2': phoneNumber1,
                'K2': city1,
                'L2': address1,
                'M2': email1,
                'N2': 'permenant',
                'O2' : 'new',
                 
                'A3': 'AG#123',        
'B3': '10031',
'C3': 'ss',
'D3': 'PTP',
'E3': 'PTP',
'F3': '2027/12/22',
'G3': '109',
'H3': ' ',
'I3': 'Bulk upload',
'J3': phoneNumber,
'K3': city,
'L3': address,
'M3': email,
'N3': 'permenant',
'O3': 'new'



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
            
                                        cy.task('moveAllDownloadsToFixtures').then(result => {
                                            cy.log(result);
                                        });
                
                // Upload the file from `fixtures/`
                trailspage.BulkTrail_Partially_Processed();
            });
        });
    });
