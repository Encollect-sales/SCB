import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import SettlementPage from '../pages/SettlementPage';

describe('Settlement - When a settlement is approved or recommended, a celebration screen should appear.', () => {
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

    it('Settlement - TC_ID_005', () => {
        getTestData('loginData', 'login4').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(2000);
                settlementpage.SettlementTestPage_005();            
            });
        });
    });