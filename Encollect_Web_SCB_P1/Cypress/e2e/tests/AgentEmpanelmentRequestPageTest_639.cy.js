import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import PaymentsPage from '../pages/PaymentsPage';
import AgentEmpanelmentRequestPage from '../pages/AgentEmpanelmentRequestPage';

describe('Agent Empanelment Request - Create Agent - User will click on save agent profile button only when all mandatory details are not entered then the status will be saved as draft', () => {
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

    it('Agent Empanelment Request - TC_ID_639', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(2000);
                agentemplimentationRequest.AgentEnpalmentRequest639();
            
            });
        });
    });