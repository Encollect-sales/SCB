import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import RepoPage from '../pages/RepoPage';

describe('Repo - My Requests -  user click on pending sale / release and in the result table repo request id is visible and click in that it needs to show the details of the request id ', () => {
    let loginPage;
    let repopage; 

    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('Repo').then(locators => {  
            repopage = new RepoPage(locators); 
        });
    });

    it('Repo - TC_ID_35', () => {
        getTestData('loginData', 'Repologin1').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(2000);
                repopage.RepoTestPage_35();            
            });
        });
    });