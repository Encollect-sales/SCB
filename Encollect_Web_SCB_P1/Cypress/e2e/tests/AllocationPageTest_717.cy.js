
import { readExcelFile } from '../utils/excelUtils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import AllocationPage from '../pages/AllocationPage';
import { getLocators } from '../utils/locatorUtils';

describe('Allocation - Upload Collector Allocation Batch - User should be able to open the zip file and see the list of accounts which are not allocated to any of the staff, so that user can take those accounts and do the allocation to staff accordingly.', () => {
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

    it('Collector Level Allocation - TC_ID_717', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);

           allocationPage.clickonUpldCollectorallocation();
           allocationPage.fillCAtemplate3();
           allocationPage.clickonCAdownloadTemplate();

        });
    });
});
