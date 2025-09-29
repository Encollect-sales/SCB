
import { readExcelFile } from '../utils/excelUtils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import AllocationPage from '../pages/AllocationPage';
import { getLocators } from '../utils/locatorUtils';

describe('Allocation - Secondary Allocation by filters -User selected Product Group as "Credit Card", Product as "Credit Card" and Sub product as "Credit Card"', () => {
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

    it('Product Filter - TC_ID_758', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);

           //allocationPage.ClickonallocationSAF();
           //allocationPage.fillproductgroupSAF2();
           //allocationPage.fillproductSAF2();
           //allocationPage.fillsubproductSAF2();//
           allocationPage.ClickonallocationSAF();
           allocationPage.fillproductgroupSAF1();
           allocationPage.fillproductSAF1();
           allocationPage.fillsubproductSAF1();


        });
    });
});
