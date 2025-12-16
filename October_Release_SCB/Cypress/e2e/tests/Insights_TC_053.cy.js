import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import AllocationPage from '../pages/AllocationPage';
import InsightsPage from '../pages/InsightsPage';

describe('Money movement insights Bankstaff - Verify that Geo Hierarchy allows adding Region, Country, State, City, and Branch -', () => {
    let loginPage;
    let allocationpage; 
    //let paymentspage;
    let insightspage;

    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('insights').then(locators => {  
            insightspage = new InsightsPage(locators); 
        });
    });

    it('Insights -TC_Pay_053', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(2000);
                insightspage.TC_Ins_053();            
            });
        });
    });