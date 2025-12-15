import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import PaymentsPage from '../pages/PaymentsPage';
import AgentEmpanelmentRequestPage from '../pages/AgentEmpanelmentRequestPage';

describe('Agent Empanelment Request - Create Agent - .User should be able to select all mandatory fields in place of work2.The dropdown values of all these fields coming from BE using Product, bucket and geography masters.3.User can click on "Add" button to add multiple product, bucket and geography at the same time.', () => {
    let loginPage;
    let agentemplimentationRequest; 

    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('agentemplimentationRequest').then(locators => {  
            agentemplimentationRequest = new AgentEmpanelmentRequestPage(locators); 
        });
    });

    it('Agent Empanelment Request - TC_ID_633', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(2000);
                agentemplimentationRequest.AgentEnpalmentRequest633();
            
            });
        });
    });