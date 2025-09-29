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

    it('User download the bulktrail template and make updates in the excel sheet and user upload the updated excel sheet - TC_ID_300', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            cy.wait(900);
            trailspage.TrailsTestPage_download_300();
            const sheetName = 'Sheet1';
            
            Cypress.on('uncaught:exception', (err, runnable) => {
                if (err.message.includes('ResizeObserver loop completed with undelivered notifications.')) {
                    return false;
                }
            });

            const data = {
                'A2': '1667',
                'B2': '1660',
                'C2': 'Yes',
                'D2': 'PTP',
                'E2': 'PTP',
                'F2': '2025-06-28',
                'G2': '96874@#5',
                'I2': 'Bulk upload dec 16',
                'J2': '9942413413',
                'K2': 'bakori',
                'L2': 'banglore',                                         
                'M2': 'jawa25@yopmail.com',
                'N2': 'permenant11',
                'O2': 'new116'
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
                trailspage.TrailsTestPage_upload_300();
            });
        });
    });
