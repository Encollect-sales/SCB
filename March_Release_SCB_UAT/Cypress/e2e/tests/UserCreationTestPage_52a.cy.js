import 'cypress-file-upload'; 
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import UserCreationPage from '../pages/UserCreationPage';
const path = require('path');
import { faker } from '@faker-js/faker';

describe('UserManagement -If entered Department does not exist in db then system will throw an error as "Department is invalid"', () => {
    let loginPage;
    let usercreationpage;

    before(() => {
        
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('UserCreationPage').then(locators => {  
            usercreationpage = new UserCreationPage(locators);
        });
    });

    it('If entered Department does not exist in db then system will throw an error as "Department is invalid"- TC_ID_52a', () => {
        getTestData('loginData', 'login2').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            cy.wait(900);
            usercreationpage.UserCreationStaffTemplate_download();
            const sheetName = 'Sheet1';
            
            Cypress.on('uncaught:exception', (err, runnable) => {
                if (err.message.includes('ResizeObserver loop completed with undelivered notifications.')) {
                    return false;
                }
            });

              //############################################################################
           
               const empid = faker.number.int({ min: 10000, max: 99999 }).toString();
           const fn = faker.name.firstName();             
            const ln = faker.name.lastName();                
         const phno = faker.number.int({ min: 1000000000, max: 9999999999 }).toString(); 
         const email = `${fn.toLowerCase()}@yopmail.com`; 
            //################################################################################
            
            const data = {
            
                            'A2': 'Telecaller',
                            'B2': empid,
                            'C2': fn,
                            'D2': ln,
                            'E2': email,
                            'F2': phno,
                            'G2': 'Audit and Branch',
                            'H2': 'Audit Manager',
                            'I2': 'Bangalore',                        

            };

            
                                        const downloadsFolder = Cypress.config('downloadsFolder');
                                        const fixturesFolder = 'cypress/fixtures';
                                        const excelFileName = 'StaffTemplate.xlsx';
                                        const sourceFilePath = path.join(downloadsFolder, excelFileName);
                                        const destFilePath = path.join(fixturesFolder, excelFileName);
                            
                                        // Update Excel File
                                        cy.task('updateStaffTemplateCell', {
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
                usercreationpage.UserCreationStaffTemplate_upload();
            });
        });
    });
