import { readExcelFile } from '../utils/excelUtils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import AddStaffPage from '../pages/AddStaffPage';

describe('Add Staff - Scope of Work - User should be able to select all fields in Scope of work The dropdown values of all these fields coming from BE using Product, bucket and geography masters.', () => {
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

    it('Add Staff - TC_ID_649', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);


            cy.task('getExcelData', '../fixtures/userManagementData.xlsx').then((excelData) => {
                const firstRow = excelData['Sheet1'][0];
                cy.wait(2000);
                addStaffPage.Clikonusermanagement();
                addStaffPage.Clikonaddstaff();
                const employeeId = addStaffPage.fillemployeeID();
                //addStaffPage.fillemployeeID(firstRow.EmployeeID); 
                addStaffPage.fillfirstname(firstRow.FirstName);
                addStaffPage.filllastname(firstRow.LastName);
                addStaffPage.fillemailid(firstRow.EmailID);
                addStaffPage.fillmobilenumber(firstRow.MobileNumber);
                addStaffPage.ClikonSOW();
               
                cy.wait(2000);

                addStaffPage.ScopeOfWorkTestPage_02();
                  addStaffPage.clickonbbrm();
             addStaffPage.fillbasebranch();
              

            });
        });
    });
});
