import 'cypress-file-upload'; 
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import UserCreationPage from '../pages/UserCreationPage';
const path = require('path');
import { faker } from '@faker-js/faker';

describe('UserManagement -User entered Remarks in the bulk agent creation template.', () => {
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

    it('User download the agent template User entered Remarks in the bulk agent creation template. - TC_ID_02', () => {
        getTestData('loginData', 'login2').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            cy.wait(900);
            usercreationpage.UserCreationAgentTemplate_download();
            const sheetName = 'Sheet1';
            
            Cypress.on('uncaught:exception', (err, runnable) => {
                if (err.message.includes('ResizeObserver loop completed with undelivered notifications.')) {
                    return false;
                }
            });

                //############################################################################

           const firstName = faker.name.firstName();              // B2
            const lastName = faker.name.lastName();                // C2
         const phoneNumber = faker.number.int({ min: 1000000000, max: 9999999999 }).toString(); // 10-digit
         const email = `${firstName.toLowerCase()}@yopmail.com`; // N2 - short, simple
            //################################################################################

            const data = {
               'A2': 'Telecaller',
                'B2': firstName,
                'C2': lastName,
                'D2': '13911',
                'E2': '',
                'F2': '435454',
                'G2': '10-10-2020',
                'H2': '10-10-2020',
                'I2': '23577359447',
                'J2': 'Agency Frontend',
                'K2': 'Agent',
                'L2': '18-10-1979',
                'M2': phoneNumber,
                'N2': email,
                'O2': 'yop',
                'P2': 'bakori',
                'Q2': '765523',
                'R2': '19-10-2022',
                'S2': '19-10-2023',
                'T2': '10-10-2033',
                'U2': 're35sr',



            };

            
                                        const downloadsFolder = Cypress.config('downloadsFolder');
                                        const fixturesFolder = 'cypress/fixtures';
                                        const excelFileName = 'AgentTemplate.xlsx';
                                        const sourceFilePath = path.join(downloadsFolder, excelFileName);
                                        const destFilePath = path.join(fixturesFolder, excelFileName);
                            
                                        // Update Excel File
                                        cy.task('updateAgentTemplateCell', {
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
                usercreationpage.UserCreationAgentTemplate_upload_01();
            });
        });
    });
