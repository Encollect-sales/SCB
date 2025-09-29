
import { readExcelFile } from '../utils/excelUtils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import AllocationPage from '../pages/AllocationPage';
import { getLocators } from '../utils/locatorUtils';

describe('Allocation - Secondary Allocation by filters -  User selected Product Group as "School Loan", Product as " School Loan" and Sub product as "School Loan ', () => {
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

    it('Geography Filter - TC_ID_762', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
           //allocationPage.ClickonSABFGeography();
            allocationPage.AllocationFilter_672();

        });
    });
});
