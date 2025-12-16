import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import AllocationPage from '../pages/AllocationPage';
import PaymentsPage from '../pages/PaymentsPage';

describe('Payments - Verify saving receipt after uploading image -', () => {
    let loginPage;
    let allocationpage; 
    let paymentspage;

    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('payments').then(locators => {  
            paymentspage = new PaymentsPage(locators); 
        });
    });

    it('Payments Reports -TC_Pay_05', () => {
        getTestData('loginData', 'login2').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(2000);
                paymentspage.TC_Pay_05();            
            });
        });
    });