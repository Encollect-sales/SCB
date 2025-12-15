
import { readExcelFile } from '../utils/excelUtils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import AllocationPage from '../pages/AllocationPage';
import { getLocators } from '../utils/locatorUtils';

describe('Allocation - Secondary Allocation by filters - In the result grid, user should be able to see list of accounts which are allocated and not allocated.User should be able to select one or more loan accounts to allocate account to TC agent or field agent', () => {
    let loginPage;
    let allocationPage;  

    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('allocationPage').then(locators => {  
            allocationPage = new AllocationPage(locators);  
        });
    });

    it('Allocate Button - TC_ID_766', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);

           //allocationPage.ClickOnAllocateButtonSAF();
           allocationPage.ClickOnSearchResultAllocationSAF();
        });
    });
});
