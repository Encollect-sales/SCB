
import { readExcelFile } from '../utils/excelUtils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import AllocationPage from '../pages/AllocationPage';
import { getLocators } from '../utils/locatorUtils';

describe('Allocation - Secondary Allocation by filters -.All fields under Product filters are cascading drop down values. The values under dropdown are populated based on item selected by user from another dropdown list.', () => {
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

    it('Product Filter - TC_ID_759', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);

           allocationPage.ClickonallocationSAF();
           allocationPage.fillproductgroupSAF2();
           allocationPage.fillproductSAF2();
           allocationPage.fillsubproductSAF3();

        });
    });
});
