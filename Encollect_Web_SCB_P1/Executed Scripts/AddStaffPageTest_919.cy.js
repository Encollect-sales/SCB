
import { readExcelFile } from '../utils/excelUtils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import AddStaffPage from '../pages/AddStaffPage';

describe('Add Staff- Add staff -User should be able to enter data in all mandatory fields in Add staff screen and Able to save/submit the user profile', () => {
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

    it('Add Staff - TC_ID_919', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);


            cy.task('getExcelData', '../fixtures/userManagementData.xlsx').then((excelData) => {
                const firstRow = excelData['Sheet1'][0];
                cy.wait(2000);
                addStaffPage.Clikonusermanagement();  // Use the method without click
                addStaffPage.Clikonaddstaff();
                const employeeId = addStaffPage.fillemployeeID();

                //addStaffPage.fillemployeeID(firstRow.EmployeeID);  // Correct method name and pass the argument
                addStaffPage.fillfirstname(firstRow.FirstName);
                addStaffPage.filllastname(firstRow.LastName);
                addStaffPage.fillemailid(firstRow.EmailID);
                addStaffPage.fillmobilenumber(firstRow.MobileNumber);
               

                
                cy.get(':nth-child(2) > .nav-link').click();
                cy.wait(2000);
                addStaffPage.clickOnAdd();
                cy.wait(2000);
                addStaffPage.fillDepartment('Agency Backend', 0); 
                addStaffPage.fillDesignation('Agency Backend', 0); 

                  addStaffPage.ClikonSOW();
                cy.wait(2000);
                addStaffPage.ScopeOfWorkTestPage_01();
                cy.wait(2000);

                 cy.get(':nth-child(4) > .nav-link').click();
                cy.wait(2000);
                cy.get('#walletLimit').type(10000);
                cy.wait(1000);


                cy.wait(2000);
                addStaffPage.clickonbbrm();
                cy.wait(2000);
                addStaffPage.fillbasebranch();
                cy.wait(2000);
                
                // addStaffPage.Clickonplaceofwork();
                // cy.wait(2000);
                // addStaffPage.fillareanpincode();
                // cy.wait(2000);
                
            });
        });
    });
});
