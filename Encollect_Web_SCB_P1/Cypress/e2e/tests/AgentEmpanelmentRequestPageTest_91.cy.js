import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import PaymentsPage from '../pages/PaymentsPage';
import AgentEmpanelmentRequestPage from '../pages/AgentEmpanelmentRequestPage';

describe('Agent Empanelment Request - Create Agent - Once agent submitted for approval, email notification to be received on the provided email id.', () => {
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

    it('Agent Empanelment Request - TC_ID_91', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(2000);
                agentemplimentationRequest.AgentEnpalmentRequest91();
            
            });
        });
    });