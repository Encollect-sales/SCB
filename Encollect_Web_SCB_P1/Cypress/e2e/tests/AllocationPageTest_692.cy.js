
import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import AllocationPage from '../pages/AllocationPage';
import { getLocators } from '../utils/locatorUtils';

describe('Allocation - Upload Agency Allocation Batch -  User should be able to click on primary allocation file under file name column so that a zip file will get downloaded.5.User should be able to open the zip file and see the list of accounts which are not allocated to any of the agency, so that user can take those accounts and do the allocation to agencies accordingly.', () => {
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


    it('Download Allocation TC_ID_692', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            cy.wait(2000);
           allocationPage.Clickonallocation();
           cy.wait(2000);
       
           allocationPage.fillproductgroup();
           allocationPage.fillproduct();
           allocationPage.fillsubproduct();
           allocationPage.clickNotAllcated();
           allocationPage.clickonDownload();
           allocationPage.clickonprimaryfile();

        });
    });
});
