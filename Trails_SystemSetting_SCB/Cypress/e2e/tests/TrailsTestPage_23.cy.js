import 'cypress-file-upload'; 
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import TrailsPage from '../pages/TrailsPage';
const path = require('path');
import { faker } from '@faker-js/faker';

describe('Trails - Entering correct detailes and file is getting processed  ', () => {
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

    it('User download the Bulktrail template and make updates in the excel sheet and user upload the updated excel', () => {
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
                'A2':'1667',
                'B2': '1668',
                'C2': 'yes',
                'D2': 'PTP',
                'E2': 'PTP',
                'F2': '2027-12-22',
                'G2': '109',
                'H2':' ',
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
                trailspage.Bulktrail_Processed();
            });
        });
    });
