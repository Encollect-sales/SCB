import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import RepoPage from '../pages/RepoPage';

describe('Repo -  user enter the request repo and see the clear button must be enabled', () => {
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

    it('Repo - TC_ID_09', () => {
        getTestData('loginData', 'Repologin1').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(2000);
                repopage.RepoTestPage_09();            
            });
        });
    });