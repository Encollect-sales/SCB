
import { readExcelFile } from '../utils/excelUtils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import AllocationPage from '../pages/AllocationPage';
import { getLocators } from '../utils/locatorUtils';

describe('Allocation - Primary Allocation by filters - User should be able to select the dropdown values of Product Group, Product and Sub Product Under product filter. User selected Product Group as "Home Loan", Product as "Home Loan " and Sub product as " Home Construction"' , () => {
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

    it('Product Filter - TC_ID_743', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);

           allocationPage.ClickonallocationPAF();
           allocationPage.fillproductgroupPAF4();
           allocationPage.fillproductPAF4();
           allocationPage.fillsubproductPAF4();

        });
    });
});
