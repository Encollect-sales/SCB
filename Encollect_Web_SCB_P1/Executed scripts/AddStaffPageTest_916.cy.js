import { readExcelFile } from '../utils/excelUtils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import AddStaffPage from '../pages/AddStaffPage';

describe('Usermanagement- Add Staff - .User clicked on mobile number field but did not enter any value then system should show an error as "Mobile Number is required" below to the field.', () => {
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

    it('Add Staff - TC_ID_916', () => {
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
                addStaffPage.fillLastName(firstRow.lastname);             
            });
        });
    });
});
