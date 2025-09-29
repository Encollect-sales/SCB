import { readExcelFile } from '../utils/excelUtils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import AddStaffPage from '../pages/AddStaffPage';

describe('User Management -Submit staff profile -User will click on submit staff profile button only when allmandatory details are entered in create staff', () => {
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

    it('Add Staff - TC_ID_683', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);


            cy.task('getExcelData', '../fixtures/userManagementData.xlsx').then((excelData) => {
                const firstRow = excelData['Sheet1'][0];
                cy.wait(2000);
                 addStaffPage.Clikonusermanagement();  // Use the method without click
                addStaffPage.ClickonSttafEmp(); 
                addStaffPage.Clikonaddstaff();
                // addStaffPage.selectUserType();
                addStaffPage.fillemployeeID(firstRow.EmployeeID);  // Correct method name and pass the argument
                addStaffPage.fillfirstname(firstRow.FirstName);
                addStaffPage.filllastname(firstRow.LastName);
                addStaffPage.fillemailid(firstRow.EmailID);
                addStaffPage.fillmobilenumber(firstRow.MobileNumber);
                
                addStaffPage.clickondandd();
                cy.wait(500);
                // addStaffPage.clickOnAdd();
                // cy.wait(500);
                addStaffPage.fillDepartment('Audit and Risk', 0); 
                addStaffPage.fillDesignation('Audit Manager', 0); 
                cy.wait(1000);

                addStaffPage.clickonWallet();

                addStaffPage.clickonbbrm();
                cy.wait(500);
                addStaffPage.fillbasebranch();
                cy.wait(500);
                
                // addStaffPage.clickonPlaceOkWork();
                // cy.wait(500);
                // addStaffPage.ClickOnSkill();
                // cy.wait(3000);
                addStaffPage.clickonsubmitstaffprofile();
                cy.wait(3000);

                addStaffPage.errormessage();
                cy.wait(3000);
            });
           
        });

        });
    });

