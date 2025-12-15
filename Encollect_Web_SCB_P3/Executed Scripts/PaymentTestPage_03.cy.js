import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import PaymentPage from '../pages/PaymentPage';
const path = require('path');


describe('Payment - Bulk Payments Upload - Logged in user to upload the bulk payment file after filling the data in the template.', () => {
    let loginPage;
    let paymentpage; 

    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('PaymentPage').then(locators => {  
            paymentpage = new  PaymentPage(locators); 
        });
    });

    it('Payment - Bulk Payments Upload - TC_ID_03', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(2000);
                paymentpage.PaymentTestPage_download_03();

                const sheetName = 'Sheet1';
                            
                Cypress.on('uncaught:exception', (err, runnable) => {
                    if (err.message.includes('ResizeObserver loop completed with undelivered notifications.')) {
                        return false;
                    }
                });
    
                const data = {
                    'A2': '212',
                    'B2': '1667',
                    'C2': '2025-03-06',
                    'D2': '100',
                    'E2': 'Cash',
                    'R2': '100'
                };
    
                const downloadsFolder = Cypress.config('downloadsFolder');
                const fixturesFolder = 'cypress/fixtures';
                const excelFileName = 'BulkPaymentsUploadTemplate.xlsx';
                const sourceFilePath = path.join(downloadsFolder, excelFileName);
                const destFilePath = path.join(fixturesFolder, excelFileName);
    
                // Update Excel File
                cy.task('updateBulkPaymentsUploadTemplateCell', {
                    filePath: sourceFilePath,
                    sheetName: sheetName,
                    data: data
                }).then(() => {
                    cy.log('Excel file updated successfully with new data');
                });

                cy.task('moveAllDownloadsToFixtures').then(result => {
                    cy.log(result);
                });
   
    paymentpage.PaymentTestPage_03_upload(); 
              
               
                         
            });
        });
    });