class CampaignInsightsPage{
constructor(locators){
this.locators=locators;
}

verifyLandingDashboard(){
cy.contains('Digital Campaign Insights',{timeout:15000}).should('be.visible');
cy.contains('Total Accounts',{timeout:15000}).should('be.visible');
cy.contains('Communications Sent',{timeout:15000}).should('be.visible');
cy.contains('Contactable',{timeout:15000}).should('be.visible');
cy.contains('Non-Contactable',{timeout:15000}).should('be.visible');
cy.contains('Collected Accounts',{timeout:15000}).should('be.visible');
cy.contains('Collected Amount',{timeout:15000}).should('be.visible');
cy.contains('Cost',{timeout:15000}).should('be.visible');
cy.contains('Campaign Effectiveness',{timeout:15000}).should('be.visible');
}

verifyDefaultDataLoad(){
cy.contains('Digital Campaign Insights',{timeout:15000}).should('be.visible');
cy.contains('Campaign Effectiveness',{timeout:15000}).scrollIntoView().should('be.visible');
cy.get('table',{timeout:15000}).should('be.visible');
}

verifyCampaignFilter(){
cy.get(this.locators.campaignFilter,{timeout:15000}).click({force:true});
cy.wait(2000);
cy.get(this.locators.campaignOption,{timeout:10000}).then($options=>{
const randomIndex=Math.floor(Math.random()*$options.length);
cy.wrap($options[randomIndex]).click({force:true});
});
cy.wait(2000);
cy.get(this.locators.applyButton,{timeout:10000}).click({force:true});
cy.wait(2000);
cy.contains('Campaign Effectiveness',{timeout:15000}).scrollIntoView().should('be.visible');
}

verifyCombinedFilters(){
cy.get(this.locators.campaignFilter,{timeout:15000}).click({force:true});
cy.get(this.locators.campaignOption,{timeout:10000}).first().click({force:true});
cy.get(this.locators.segmentFilter,{timeout:10000}).click({force:true});
cy.get(this.locators.segmentOption,{timeout:10000}).first().click({force:true});
cy.get(this.locators.strategyFilter,{timeout:10000}).click({force:true});
cy.get(this.locators.strategyOption,{timeout:10000}).first().click({force:true});
cy.get(this.locators.dateRange,{timeout:10000}).click({force:true});
cy.wait(1000);
cy.get(this.locators.applyButton,{timeout:10000}).click({force:true});
cy.wait(2000);
cy.contains('Campaign Effectiveness',{timeout:15000}).scrollIntoView().should('be.visible');
}

verifyEmptyResult(){
cy.get(this.locators.campaignFilter,{timeout:15000}).click({force:true});
cy.wait(2000);
cy.get(this.locators.searchCampaign,{timeout:10000}).clear().type('InvalidCampaign12345');
cy.wait(2000);
cy.get(this.locators.campaignOption,{timeout:10000}).should('not.contain.text','InvalidCampaign12345');
}

verifyKPICards(){
cy.contains('Total Accounts',{timeout:15000}).should('be.visible');
cy.wait(2000);
cy.contains('Communications Sent',{timeout:15000}).should('be.visible');
cy.wait(2000);
cy.contains('Contactable',{timeout:15000}).should('be.visible');
cy.wait(2000);
cy.contains('Non-Contactable',{timeout:15000}).should('be.visible');
cy.wait(2000);
cy.contains('Collected Accounts',{timeout:15000}).should('be.visible');
cy.wait(2000);
cy.contains('Collected Amount',{timeout:15000}).should('be.visible');
cy.wait(2000);
cy.contains('Cost',{timeout:15000}).should('be.visible');
}


verifyBusinessReporting(){
cy.contains('Digital Campaign Insights',{timeout:15000}).should('be.visible');
cy.contains('Campaign Effectiveness',{timeout:15000}).should('be.visible');
cy.contains('Channel Effectiveness',{timeout:15000}).scrollIntoView().should('be.visible');
cy.contains('Total Accounts',{timeout:15000}).scrollIntoView().should('be.visible');
cy.contains('Communications Sent',{timeout:15000}).scrollIntoView().should('be.visible');
cy.contains('Collected Accounts',{timeout:15000}).scrollIntoView().should('be.visible');
cy.contains('Collected Amount',{timeout:15000}).scrollIntoView().should('be.visible');
cy.contains('Cost',{timeout:15000}).scrollIntoView().should('be.visible');
}
verifyContactablePercentage(){
cy.get('.green > .overview-card-content > .justify-content-end > .desc').should('contain.text','%');
cy.get('.red > .overview-card-content > .justify-content-end > .desc').should('contain.text','%');
}
verifyCompliance(){
cy.contains('Digital Campaign Insights',{timeout:15000}).scrollIntoView().should('be.visible');
cy.contains('Campaign Effectiveness',{timeout:15000}).scrollIntoView().should('be.visible');
cy.contains('Channel Effectiveness',{timeout:15000}).scrollIntoView().should('be.visible');
cy.get('table',{timeout:15000}).should('be.visible');
}


verifyCampaignAccountLevel(){
cy.contains('Campaign Effectiveness',{timeout:15000}).should('be.visible');
cy.contains('Account Level',{timeout:15000}).click({force:true});
cy.get('table',{timeout:15000}).should('be.visible');
cy.get('thead').should('contain.text','Campaign Name');
cy.get('thead').should('contain.text','Runs');
cy.get('thead').should('contain.text','Total Accounts');
}

verifyCampaignCommunicationLevel(){
cy.contains('Communication Level',{timeout:15000}).click({force:true});
cy.wait(2000);
cy.get('table',{timeout:15000}).should('be.visible');
cy.get('thead').should('contain.text','Campaign Name');
cy.get('thead').should('contain.text','Sent');
cy.get('thead').should('contain.text','Pending');
cy.get('thead').should('contain.text','Failed');
cy.get('thead').should('contain.text','Delivered');
cy.get('thead').should('contain.text','Reached');
}

verifyRunsDrillDown(){
cy.get('tbody tr',{timeout:15000}).should('have.length.greaterThan',0);
cy.wait(2000);
cy.get(':nth-child(1) > :nth-child(2) > .count-btn').scrollIntoView().click({force:true});
cy.wait(2000);
cy.contains('Run ID',{timeout:10000}).scrollIntoView().should('be.visible');
cy.contains('Start',{timeout:10000}).scrollIntoView().should('be.visible');
cy.contains('End',{timeout:10000}).scrollIntoView().should('be.visible');
}

verifySingleRunNoDrillDown(){
cy.get('tbody tr',{timeout:15000}).should('have.length.greaterThan',0);
cy.get('tbody tr').first().scrollIntoView().should('be.visible');
}

verifyChannelAccountLevel(){
// cy.contains('Account Level',{timeout:15000}).click({force:true});
cy.contains('Channel Effectiveness',{timeout:15000}).scrollIntoView().should('be.visible');
cy.get('body').should('contain.text','WhatsApp');
cy.get('body').should('contain.text','SMS');
cy.get('body').should('contain.text','Email');
cy.get('body').should('contain.text','AI Call');
}

verifyChannelCommunicationLevel(){
// cy.contains('Communication Level',{timeout:15000}).click({force:true});
// cy.wait(1500);
cy.contains('Channel Effectiveness',{timeout:15000}).scrollIntoView().should('be.visible');
cy.get('body').should('contain.text','Sent');
cy.get('body').should('contain.text','Pending');
cy.get('body').should('contain.text','Failed');
cy.get('body').should('contain.text','Delivered');
cy.get('body').should('contain.text','Reached');
}

verifyTotalAccountsConsistency(){
cy.contains('Total Accounts',{timeout:15000}).scrollIntoView().should('be.visible');
cy.get('tbody tr',{timeout:15000}).should('have.length.greaterThan',0);
}

verifyCost(){
cy.contains('Cost',{timeout:15000}).should('be.visible');
cy.get('body').should('contain.text','₹');
}

verifyCollections(){
cy.contains('Collected Accounts',{timeout:15000}).scrollIntoView().should('be.visible');
cy.contains('Collected Amount',{timeout:15000}).scrollIntoView().should('be.visible');
}

verifyCollectedViaLink(){
// cy.contains('Communication Level',{timeout:15000}).click({force:true});
// cy.wait(1500);
cy.contains('Channel Effectiveness',{timeout:15000}).scrollIntoView().should('be.visible');
cy.get(':nth-child(6) > .card-content > .table > thead > tr > :nth-child(9)').should('contain.text','Collected Via Link');
}

verifyCommunicationFunnel(){
cy.contains('Communication Level',{timeout:15000}).click({force:true});
cy.wait(1500);
cy.get('body').should('contain.text','Pending');
cy.get('body').should('contain.text','Failed');
cy.get('body').should('contain.text','Delivered');
cy.get('body').should('contain.text','Reached');
}

verifyEngagement(){
cy.contains('Engaged',{timeout:15000}).scrollIntoView().should('be.visible');
}

verifyDashboardRefresh(){
cy.get(this.locators.campaignFilter,{timeout:15000}).click({force:true});
cy.get(this.locators.campaignOption,{timeout:10000}).first().click({force:true});
cy.get(this.locators.applyButton,{timeout:10000}).click({force:true});
cy.wait(2000);
cy.contains('Digital Campaign Insights',{timeout:15000}).should('be.visible');
}

verifyTabsRetainFilters(){
cy.get(this.locators.campaignFilter,{timeout:15000}).click({force:true});
cy.get(this.locators.campaignOption,{timeout:10000}).first().click({force:true});
cy.get(this.locators.applyButton,{timeout:10000}).click({force:true});
cy.wait(2000);
cy.contains('Communication Level',{timeout:15000}).scrollIntoView().click({force:true});
cy.wait(1000);
// cy.contains('Account Level',{timeout:15000}).click({force:true});
// cy.wait(1000);
cy.contains('Digital Campaign Insights',{timeout:15000}).scrollIntoView().should('be.visible');
}

verifyHistoricalReporting(){
cy.get(this.locators.dateRange,{timeout:15000}).click({force:true});
cy.wait(2000);
cy.get(this.locators.applyButton,{timeout:10000}).click({force:true});
cy.wait(2000);
cy.contains('Campaign Effectiveness',{timeout:15000}).should('be.visible');
}

verifyCompletedCampaignsOnly(){
cy.contains('Digital Campaign Insights',{timeout:15000}).should('be.visible');
cy.get('table',{timeout:15000}).should('be.visible');
}

verifyAmountDisplay(){
cy.contains('Collected Amount',{timeout:15000}).should('be.visible');
cy.get('body').should('contain.text','₹');
}

verifyChannelCost(){
cy.contains('Channel Effectiveness',{timeout:15000}).scrollIntoView().should('be.visible');
cy.get('body').should('contain.text','Cost');
}
}

export default CampaignInsightsPage;