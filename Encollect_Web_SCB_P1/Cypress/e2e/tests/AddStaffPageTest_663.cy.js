import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import AddStaffPage from '../pages/AddStaffPage';

describe('Department and Designations - .User should be able to add department & designations by selecting department as "Collections staff backend" and designation as "collections backend officer"', () => {
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

    it('Add Staff - TC_ID_663', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(2000);
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
                    cy.wait(500);
                addStaffPage.clickondandd();
                cy.wait(500);
                addStaffPage.seleDD63();
            
            });
        });
    });});