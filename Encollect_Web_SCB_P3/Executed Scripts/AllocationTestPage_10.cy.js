import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import AllocationPage from '../pages/AllocationPage';
const path = require('path');
 
describe('Allocation - Logged in user to click on customer id level sub menu to download the secondary allocation templates of field agent or tele calling agent or staff.', () => {
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
 
    it('Allocation Module - TC_ID_10', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(900);
                allocationpage.AllocationTestPage_10_download();

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
                            const excelFileName = 'ENCollectSecondaryAllocationCollectionStaff_Customerlevel.xlsx';
                            const sourceFilePath = path.join(downloadsFolder, excelFileName);
                            const destFilePath = path.join(fixturesFolder, excelFileName);
                
                            // Update Excel File
                            cy.task('updateENCollectSecondaryAllocationCollectionStaff_CustomerlevelCell', {
                                filePath: sourceFilePath,
                                sheetName: sheetName,
                                data: data
                            }).then(() => {
                                cy.log('Excel file updated successfully with new data');
                            });

                            cy.task('moveAllDownloadsToFixtures').then(result => {
                                cy.log(result);
                            });
               
                allocationpage.AllocationTestPage_10_upload();   
            });
        });
    });