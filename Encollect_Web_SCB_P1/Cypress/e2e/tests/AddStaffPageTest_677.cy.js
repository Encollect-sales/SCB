import { readExcelFile } from '../utils/excelUtils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import AddStaffPage from '../pages/AddStaffPage';

describe('Usermanagement - Base Branch and Reporting - manager User should be able to enter data in all mandatory fields in Add staff screen', () => {
    let loginPage;
    let addStaffPage;  

    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('addstaffPage').then(locators => {  // Load locators for addstaffPage
            addStaffPage = new AddStaffPage(locators);  // Pass locators to the constructor
        });
    });

    it('Add Staff - TC_ID_677', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);


            cy.task('getExcelData', '../fixtures/userManagementData.xlsx').then((excelData) => {
                const firstRow = excelData['Sheet1'][0];
                cy.wait(2000);
                addStaffPage.Clikonusermanagement();  // Use the method without click
                addStaffPage.Clikonaddstaff();
                const employeeId = addStaffPage.fillemployeeID();

                //addStaffPage.fillemployeeID(firstRow.EmployeeID);  // Correct method name and pass the argument
                addStaffPage.clickonbbrm3(); 
                cy.wait(500);
                addStaffPage.fillbasebranch();
                cy.wait(500);
                
                
               

            });
        });
    });
});
