import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import SystemSettingPage from '../pages/SystemSettingPage';
const { faker } = require('@faker-js/faker');
 
describe('System Setting - Bank Master - Admin after uploading the bank master file back to ENCollect admin should receive a notification on email id with the status..', () => {
    let loginPage;
    let systemsettingpage;
 
    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });
 
        getLocators('SystemSettingPage').then(locators => {  
            systemsettingpage = new SystemSettingPage(locators);
        });
    });
 
    it('Master Upload- TC_ID_1307- Admin should be able to see the status of all 10 records in the attachment received on email id".', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(900);
                systemsettingpage.SystemSettingTestPage_1307();

                 // Define the Excel sheet data using Faker
    const sheetName = 'Sheet1';
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
        'A2': generateBankName(),
        'B2': `${faker.address.city()} Branch`,
        'C2': generateBranchCode(),            
        'A3': generateBankName(),                  
        'B3': `${faker.address.city()} Branch`,                    
        'C3': generateBranchCode(),
        'A4': generateBankName(),
        'B4': `${faker.address.city()} Branch`,
        'C4': generateBranchCode(),            
         'A5': generateBankName(),                  
         'B5': `${faker.address.city()} Branch`,                    
         'C5': generateBranchCode(),  
        'A6': generateBankName(),
         'B6': `${faker.address.city()} Branch`,
         'C6': generateBranchCode(),            
         'A7': generateBankName(),                  
         'B7': `${faker.address.city()} Branch`,                    
         'C7': generateBranchCode(),  
         'A8': generateBankName(),
         'B8': `${faker.address.city()} Branch`,
         'C8': generateBranchCode(),            
         'A9': generateBankName(),                  
         'B9': `${faker.address.city()} Branch`,                    
         'C9': generateBranchCode(),  
         'A10': generateBankName(),
         'B10': `${faker.address.city()} Branch`,
         'C10': generateBranchCode(),            
         'A11': generateBankName(),                  
         'B11': `${faker.address.city()} Branch`,                    
         'C11': generateBranchCode(),  
       };

    const excelFileName = 'BankMasterTemplate.xlsx'; // Ensure this file is in the correct format
    const downloadsFolder = Cypress.config('downloadsFolder');
    const filePath = 'cypress/downloads/BankMasterTemplate.xlsx';

    // Use Cypress task to update the Excel file with dynamic data
    cy.task('updateBankMasterTemplateCell', {
      filePath: filePath,
      sheetName: sheetName,
      data: data
    }).then(() => {
      cy.log('Excel file updated successfully with new data');
      
      //systemsettingpage.SystemSettingTestPage_file_upload_1093();
      cy.wait(2000);
      cy.origin('https://yopmail.com', () => {
        cy.wait(2000);
      cy.visit('https://yopmail.com');
      cy.get('#login').type('rahmancbm@yopmail.com');  // Type the email address
      cy.get('.material-icons-outlined.f36').click();
    });
    });
  });
});
});
               
 