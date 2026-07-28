
import { readExcelFile } from '../utils/excelUtils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import AllocationPage from '../pages/AllocationPage';
import { getLocators } from '../utils/locatorUtils';

describe('Allocation - Upload Agency Allocation Batch - 1.User should be able to download accounts by selecting anyone of the filers for checking the list of accounts which are allocated to agency.2. Without selecting the filters, if user clicked on download accounts button system will throw an error as "Please select any one of the filter"', () => {
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

    beforeEach(() => {
        // Clear cookies, localStorage, and sessionStorage before each test
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.window().then((window) => {
          window.sessionStorage.clear();
        });
      });

      
    it('Download Allocation TC_ID_693', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);

           allocationPage. Clickonallocation();
           allocationPage.fillproductgroup();
           allocationPage.fillproduct();
           allocationPage.fillsubproduct();
           allocationPage.fillBucketAndCountry();
           allocationPage.clickonAllcated();
           allocationPage.clickonDownload();
           allocationPage.clickonprimaryfile(); 

        });
    });
});
