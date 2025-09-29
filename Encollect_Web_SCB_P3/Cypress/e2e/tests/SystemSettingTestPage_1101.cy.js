import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import SystemSettingPage from '../pages/SystemSettingPage';
const { faker } = require('@faker-js/faker');
 
describe('System Setting - Master Upload -Admin uploaded Product master file with 10 records but for all records sub product  is not updated', () => {
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
 
    it('Master Upload- TC_ID_1101-  An email will trigger on admin email id with an attachment', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(900);
                systemsettingpage.SystemSettingTestPage_1101();
               
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
     'A2': faker.commerce.department(), // Random product group
     'B2': faker.commerce.productName(), // Random product
     'C2': faker.commerce.productAdjective(), // Random subproduct
     'A3': faker.commerce.department(),
     'B3': faker.commerce.productName(),
     'C3': faker.commerce.productAdjective(),
     'A4': faker.commerce.department(),
     'B4': faker.commerce.productName(),
     'C4': faker.commerce.productAdjective(),
     'A5': faker.commerce.department(),
     'B5': faker.commerce.productName(),
     'C5': faker.commerce.productAdjective(),
     'A6': faker.commerce.department(),
     'B6': faker.commerce.productName(),
     'C6': faker.commerce.productAdjective(),
     'A7': faker.commerce.department(),
     'B7': faker.commerce.productName(),
     'C7': faker.commerce.productAdjective(),
     'A8': faker.commerce.department(),
     'B8': faker.commerce.productName(),
     'C8': faker.commerce.productAdjective(),
     'A9': faker.commerce.department(),
     'B9': faker.commerce.productName(),
     'C9': faker.commerce.productAdjective(),
     'A10': faker.commerce.department(),
     'B10': faker.commerce.productName(),
     'C10': faker.commerce.productAdjective(),
     'A11': faker.commerce.department(),
     'B11': faker.commerce.productName(),
     'C11': faker.commerce.productAdjective()
   };

   const excelFileName = 'ProductMasterTemplate.xlsx'; // Ensure this file is in the correct format
   const downloadsFolder = Cypress.config('downloadsFolder');
   const filePath = 'cypress/downloads/ProductMasterTemplate.xlsx';

   // Use Cypress task to update the Excel file with dynamic data
   cy.task('updateProductMasterTemplateCell', {
     filePath: filePath,
     sheetName: sheetName,
     data: data
   }).then(() => {
     cy.log('Excel file updated successfully with new data');
     
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