import {getTestData} from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import {getLocators} from '../utils/Locatorutils';
import CampaignInsightsPage from '../pages/CampaignInsightsPage';

describe('UAT-002 - Verify Default Campaign Data Load',()=>{
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

it('Verify completed campaigns are displayed by default',()=>{
getTestData('loginData','login').then(user=>{
loginPage.login(user.Companyname,user.email,user.password);
Cypress.on('uncaught:exception',err=>{
if(err.message.includes('ResizeObserver loop completed with undelivered notifications.')){
return false;
}
});
cy.contains('Campaign Insights',{timeout:15000}).click({force:true});
cy.wait(2000);
campaignInsightsPage.verifyDefaultDataLoad();
});
});
});