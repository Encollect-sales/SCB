import 'cypress-file-upload'; 
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import TrailsPage from '../pages/TrailsPage';
const path = require('path');
import { faker } from '@faker-js/faker';

describe('Trails - PTP Amount Empty with Action Code and Result Code as BPTP', () => {
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

    it('Verify system behavior when PTP Amount is left empty while Action Code and Result Code are set to BPTP during bulk upload.', () => {
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
            //################################################################################

            const data = {
                'A2':'18765',
                'B2': '67609',
                'C2': 'yes',
                'D2': 'BPTP',
                'E2': 'BPTP',
                'F2': '2027/12/22',
                'G2': ' ',
                'H2': ' ',
                'I2':'Bulk upload',
                'J2': phoneNumber,
                'K2': city,
                'L2': address,
                'M2': email,
                'N2': 'permenant',
                'O2' : 'new'

                


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
                trailspage.Bulktrail_Failed();
            });
        });
    });
