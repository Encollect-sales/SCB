
import { readExcelFile } from '../utils/excelUtils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import AllocationPage from '../pages/AllocationPage';
import { getLocators } from '../utils/locatorUtils';

describe('Allocation - Primary Allocation Status -  user should be able to scroll up and select any other drop down value under status field.', () => {
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

    it('Invalid Transaction ID - TC_ID_797', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            allocationPage.ClickonPrmryAllocationStatusInvalidTrans();

        });
    });
});
