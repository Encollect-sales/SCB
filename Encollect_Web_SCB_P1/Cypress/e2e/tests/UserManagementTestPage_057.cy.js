import { readExcelFile } from '../utils/excelUtils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import UserManagementPage from '../pages/UserManagementPage';
const { faker } = require('@faker-js/faker');

describe('User Management- User Management -User to enter First Name in the bulk upload of agency and user creation', () => {
    let loginPage;
    let usermanagementpage; 

    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('DbsToScbs').then(locators => {  
            usermanagementpage = new UserManagementPage(locators); 
        });
    });

    it('Payment - TC_ID_057', () => { 
        getTestData('loginData', 'login2').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            cy.wait(2000);
            usermanagementpage.UserManagementTestPage_057_File_Download();
            const sheetName = 'BulkAgentUploadTemplate';
            
            Cypress.on('uncaught:exception', (err, runnable) => {
                if (err.message.includes('ResizeObserver loop completed with undelivered notifications.')) {
                    // ignore the error
                    return false
                }
            });

            function generateBranchCode() {
                return faker.string.alphanumeric(6).toUpperCase();  // Generates a random 6-character alphanumeric code
            }
            
            function generateBankName() {
                return `${faker.company.name()} Bank`;  // Using faker's company name and adding "Bank"
            }

            const data = {
                'A2':"123456",  // Random First Name
                'B2': faker.name.lastName(),    // Random Last Name
                'C2': faker.string.alphanumeric(6).toUpperCase(),  // Random Agency Code
                'D2': faker.internet.email(),  // Random Supervisor Email
                'E2': faker.string.alphanumeric(8),  // Random Dialer ID
                'F2': faker.date.past(2).toISOString().split('T')[0], // Random DRACertification Date (2 years ago)
                'G2': faker.date.past(2).toISOString().split('T')[0],  // Random DRATraining Date (2 years ago)
                'H2': faker.string.alphanumeric(10),  // Random DRA Unique Registration Number
                'I2': faker.commerce.department(),  // Random Department
                'J2': faker.name.jobTitle(),  // Random Designation
                'K2': faker.date.past(30, new Date('2000-01-01')).toISOString().split('T')[0],  // Random Date of Birth (born before 2000)
                'L2': faker.string.numeric(10), 
                'M2': faker.internet.email(),  // Random Email ID
                'N2': " @#$$$$$$$$$#",  // Random Father's Name
                'O2': faker.address.streetAddress(),  // Random Residential Address
                'P2': faker.address.zipCode(),  // Random Postal Code
                'Q2': faker.date.past(5).toISOString().split('T')[0],  // Random Employment Date (5 years ago)
                'R2': faker.date.past(1).toISOString().split('T')[0],  // Random Last Renewal Date (1 year ago)
                'S2': faker.date.future(1).toISOString().split('T')[0],  // Random Authorization Card Expiry Date (next year)
                'T2': faker.lorem.sentence()
            };

            const excelFileName = 'AgentTemplate.xlsx'; // Ensure this file is in the correct format
            const downloadsFolder = Cypress.config('downloadsFolder');
            const filePath = 'cypress/fixtures/AgentTemplate.xlsx';

            // Use Cypress task to update the Excel file with dynamic data in row 2
            cy.task('updateAgentTemplateCell', {
                filePath: filePath,
                sheetName: sheetName,
                data: data
            }).then(() => {
                cy.log('Excel file updated successfully with new data');
                cy.wait(2000);   
                usermanagementpage.UserManagementTestPage_057_File_Upload();              
            });
        });
    });
}); 
