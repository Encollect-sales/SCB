import { readExcelFile } from '../utils/excelUtils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import loginPage1 from '../pages/LoginPage1';
import { getLocators } from '../utils/locatorUtils';
import AddStaffPage from '../pages/AddStaffPage';

describe('User Management - Add Staff-Once staff submitted for approval, email notification to be received on the provided email id.', () => {
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

    it('Add Staff - TC_ID_80', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);


            cy.task('getExcelData', '../fixtures/userManagementData.xlsx').then((excelData) => {
                const firstRow = excelData['Sheet1'][0];
                cy.wait(2000);
                addStaffPage.Clikonusermanagement();  // Use the method without click
                addStaffPage.Clikonaddstaff();
                addStaffPage.selectUserType();
                addStaffPage.fillemployeeID(firstRow.EmployeeID);  // Correct method name and pass the argument
                addStaffPage.fillfirstname(firstRow.FirstName);
                addStaffPage.filllastname(firstRow.LastName);
                addStaffPage.fillemailid(firstRow.EmailID);
                addStaffPage.fillmobilenumber(firstRow.MobileNumber);
               addStaffPage.typeexistingcode();

                addStaffPage.clickondandd();
                cy.wait(2000);
                // addStaffPage.clickOnAdd();
                // cy.wait(2000);
                addStaffPage.fillDepartment('Audit and Risk', 0); 
                addStaffPage.fillDesignation('Audit Manager', 0); 
                cy.wait(1000);

                addStaffPage.clickonWallet();
                addStaffPage.ClikonSOW();
                cy.wait(2000);
                addStaffPage.ScopeOfWorkTestPage_03();
                cy.wait(2000);
                addStaffPage.clickonbbrm();
                cy.wait(2000);
                addStaffPage.fillbasebranch();
                cy.wait(2000);
                
                // addStaffPage.clickonPlaceOkWork();
                // cy.wait(2000);
                // addStaffPage.ClickOnSkill();
                // cy.wait(5000);
                addStaffPage.clickonsubmitstaffprofile();
                cy.wait(5000);
                //addStaffPage.Assertin();
                addStaffPage.clickcancel();
               cy.wait(2000);
              

               

               
                
                      });
                    }); 
                });


               

              



                
});
                
           
        
   

