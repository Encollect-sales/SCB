import { readExcelFile } from '../utils/excelUtils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import AddStaffPage from '../pages/AddStaffPage';

describe('Add staff - Department and Designations - Agency Backend - User should be able to add department & designations by selecting department as "Agency Backend" and designation as "Agency Backend" user can also click on add button to add one more department and designation', () => {
    let loginPage;
    let addStaffPage;  // Declare addStaffPage here

    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('addstaffPage').then(locators => {  // Load locators for addstaffPage
            addStaffPage = new AddStaffPage(locators);  // Pass locators to the constructor
        });
    });

    it('Add Staff - TC_ID_553', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(2000);
                addStaffPage.Clikonusermanagement();  // Use the method without click
                addStaffPage.ClickonSttafEmp();
                cy.wait(2000);
                addStaffPage.Clikonaddstaff();
                cy.wait(2000);
                addStaffPage.clickondandd();
                cy.wait(2000);
                addStaffPage.fillDepartment('Audit and Risk', 0); 
                cy.wait(2000);
                addStaffPage.fillDesignation('Risk officer', 0); 
                addStaffPage.clickOnAdd(); 
                addStaffPage.fillDepartment('Audit and Risk', 0); 
                addStaffPage.fillDesignation('Risk officer', 0); 
            
            });
        }); 
    });