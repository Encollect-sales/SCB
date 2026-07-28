import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import AllocationPage from '../pages/AllocationPage';
const path = require('path');
 
describe('Allocation - Addition of customer id column in the output files of all owner allocated files.', () => {
    let loginPage;
    let allocationpage;
 
    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });
 
        getLocators('AllocationPage').then(locators => {  
            allocationpage = new AllocationPage(locators);
        });
    });
 
    it('Allocation Module - TC_ID_19', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(900);
                allocationpage.AllocationTestPage_19_download();

                const sheetName = 'Sheet1';
                            
                            Cypress.on('uncaught:exception', (err, runnable) => {
                                if (err.message.includes('ResizeObserver loop completed with undelivered notifications.')) {
                                    return false;
                                }
                            });
                
                            const data = {
                                'A2': '10008932'
                            };
                
                            const downloadsFolder = Cypress.config('downloadsFolder');
                            const fixturesFolder = 'cypress/fixtures';
                            const excelFileName = 'AllocationToOwner_customeridLevel.xlsx';
                            const sourceFilePath = path.join(downloadsFolder, excelFileName);
                            const destFilePath = path.join(fixturesFolder, excelFileName);
                
                            // Update Excel File
                            cy.task('updateAllocationToOwner_customeridLevelCell', {
                                filePath: sourceFilePath,
                                sheetName: sheetName,
                                data: data
                            }).then(() => {
                                cy.log('Excel file updated successfully with new data');
                            });

                            cy.task('moveAllDownloadsToFixtures').then(result => {
                                cy.log(result);
                            });
               
                allocationpage.AllocationTestPage_19_upload();   
            });
        });
    });