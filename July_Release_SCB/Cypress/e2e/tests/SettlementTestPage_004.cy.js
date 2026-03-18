import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import SettlementPage from '../pages/SettlementPage';

describe('Settlement - Under "My Action Queue" > "View My Settlement", the "Currently in Queue Of" section should show date and time for each item.', () => {
    let loginPage;
    let settlementpage; 

    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('SettlementPage').then(locators => {  
            settlementpage = new SettlementPage(locators); 
        });
    });

    it('Settlement - TC_ID_004', () => {
        getTestData('loginData', 'login3').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(7000);
                settlementpage.SettlementTestPage_004();            
            });
        });
    });