import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import AllocationPage from '../pages/AllocationPage';
const path = require('path');
 
describe('Allocation - ENCollect system will throw an error as Invalid customer id when customer id does not exist in db.', () => {
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
 
    it('Allocation Module - TC_ID_04', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(900);
                allocationpage.AllocationTestPage_04_download();

                const sheetName = 'Sheet1';
                            
                            Cypress.on('uncaught:exception', (err, runnable) => {
                                if (err.message.includes('ResizeObserver loop completed with undelivered notifications.')) {
                                    return false;
                                }
                            });
                
                            const data = {
                                'A2': '41174',
                                'B2': '1660',
                                'C2': '2025-20-11'
                            };
                
                            const downloadsFolder = Cypress.config('downloadsFolder');
                            const fixturesFolder = 'cypress/fixtures';
                            const excelFileName = 'PrimaryAgency_Customerlevel.xlsx';
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
               
                allocationpage.AllocationTestPage_04_upload();   
            });
        });
    });