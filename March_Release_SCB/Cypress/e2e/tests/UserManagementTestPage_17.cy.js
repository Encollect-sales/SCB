import 'cypress-file-upload'; 
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import UserManagementPage from '../pages/UserManagementPage';
const path = require('path');

describe('UserManagement -ENCollect system will throw an error as "User is not approved" when staff current status is not approved.', () => {
    let loginPage;
    let usermanagementpage;

    before(() => {
        
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('UserManagementPage').then(locators => {  
            usermanagementpage = new UserManagementPage(locators);
        });
    });

    it('User download the agent template and make updates in the excel sheet and user upload the updated excel sheet - TC_ID_17', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            cy.wait(900);
            usermanagementpage.UserManagementTestPage_download_17();
            const sheetName = 'Sheet1';
            
            Cypress.on('uncaught:exception', (err, runnable) => {
                if (err.message.includes('ResizeObserver loop completed with undelivered notifications.')) {
                    return false;
                }
            });

            const data = {
                'A2': '4174',
                'B2': 'Disable',
                'C2': 'test',
                
                
            };

            
                                        const downloadsFolder = Cypress.config('downloadsFolder');
                                        const fixturesFolder = 'cypress/fixtures';
                                        const excelFileName = 'Staff.xlsx';
                                        const sourceFilePath = path.join(downloadsFolder, excelFileName);
                                        const destFilePath = path.join(fixturesFolder, excelFileName);
                            
                                        // Update Excel File
                                        cy.task('updateStaffCell', {
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
                usermanagementpage.UserManagementTestPage_upload_17();
            });
        });
    });
