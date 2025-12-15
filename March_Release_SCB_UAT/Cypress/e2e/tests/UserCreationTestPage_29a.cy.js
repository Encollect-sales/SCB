import 'cypress-file-upload'; 
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import UserCreationPage from '../pages/UserCreationPage';
const path = require('path');
import { faker } from '@faker-js/faker';

describe('UserManagement -If user enters Pancard number more than 10 characters then system will throw an error as Pancard Number can not  be more than 10 characters', () => {
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

    it('User download the agent template If user enters Pancard number more than 10 characters then system will throw an error as Pancard Number can not  be more than 10 characters- TC_ID_02', () => {
        getTestData('loginData', 'login2').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            cy.wait(900);
            usercreationpage.UserCreationAgencyTemplate_download();
            const sheetName = 'Sheet1';
            
            Cypress.on('uncaught:exception', (err, runnable) => {
                if (err.message.includes('ResizeObserver loop completed with undelivered notifications.')) {
                    return false;
                }
            });

              //############################################################################################

            const agencycode = faker.number.int({ min: 100000, max: 999999 }).toString();
            const name = faker.name.firstName()
         
              const phonenumber = faker.number.int({ min: 1000000000, max: 9999999999 }).toString(); // 10-digit
         const email = `${name.toLowerCase()}@yopmail.com`; // N2 - short, simple

         //###########################################################################################################

            const data = {
                'A2': 'Yes',
                'B2': '',
                'C2': agencycode,
                'D2':name,
                'E2': '4408',
                'F2': 'Collections',
                'G2': 'Field Agents',
                'H2': '12345321',
                'I2':'PANCA9614BPANCA9614B',
                'J2':'hamad',
                'K2':'P',
                'L2':'Pune',
                'M2':'wiki field',
                'N2':phonenumber,
                'O2':email,
                'P2':'12-10-2022',
                'Q2':'13-10-2023',
                'R2':'10-10-2032',
                'S2':'Bulk upload',


            };

            
                                        const downloadsFolder = Cypress.config('downloadsFolder');
                                        const fixturesFolder = 'cypress/fixtures';
                                        const excelFileName = 'AgencyTemplate.xlsx';
                                        const sourceFilePath = path.join(downloadsFolder, excelFileName);
                                        const destFilePath = path.join(fixturesFolder, excelFileName);
                            
                                        // Update Excel File
                                        cy.task('updateAgencyTemplateCell', {
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
                usercreationpage.UserCreationAgencyTemplate_upload();
            });
        });
    });
