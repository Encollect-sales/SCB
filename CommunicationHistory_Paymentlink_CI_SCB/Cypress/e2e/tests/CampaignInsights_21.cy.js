import {getTestData} from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import {getLocators} from '../utils/Locatorutils';
import CampaignInsightsPage from '../pages/CampaignInsightsPage';

describe('UAT-021 - Role Access',()=>{
let loginPage;
let campaignInsightsPage;

before(()=>{
getLocators('loginPage').then(locators=>{
loginPage=new LoginPage(locators);
});
getLocators('CampaignInsights').then(locators=>{
campaignInsightsPage=new CampaignInsightsPage(locators);
});
});

it('Verify Role Access for Campaign Insights',()=>{
getTestData('loginData','login').then(user=>{
loginPage.login(user.Companyname,user.email,user.password);
Cypress.on('uncaught:exception',err=>{
if(err.message.includes('ResizeObserver loop completed with undelivered notifications.')){
return false;
}
});
cy.wait(2000);
cy.contains("Collection Strategy").scrollIntoView().should('be.visible').click({force:true});
cy.wait(2000);
cy.contains('Campaign Insights',{timeout:15000}).scrollIntoView().should('be.visible');
});
});
});