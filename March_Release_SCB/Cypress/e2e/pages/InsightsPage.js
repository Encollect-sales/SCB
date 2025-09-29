import { getLocators } from '../utils/locatorUtils';
import { getBaseUrl } from '../utils/configUtils';


class InsightsPage {
  constructor(locators) {
    this.locators = locators;
  }

  InsightsTestPage_01(){

   cy.get(this.locators.ClickOnInsights).click();
   cy.wait(1000);
   cy.get(this.locators.ClickOnAlocInsights).click();
   cy.wait(1000);
   cy.contains('Primary Allocation Insights').should("be.visible");
   cy.wait(1000);

    
  }

  InsightsTestPage_02(){

    cy.get(this.locators.ClickOnInsights).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnAlocInsights).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnprimaryAllocInsights).click();
    cy.wait(3000);
    cy.contains("Accounts by Allocation Status").scrollIntoView().should("be.visible");
    cy.wait(1000);
    cy.contains("Accounts Allocated by Collection Type").scrollIntoView().should("be.visible");
    cy.wait(1000);
    cy.contains("Top 10 Field Primary by Accounts Allocated").scrollIntoView().should("be.visible");
    cy.wait(1000);
    cy.contains("Top 10 Owners by Accounts Unallocated").scrollIntoView().should("be.visible");
    cy.wait(1000);
    cy.contains("Top 10 Tele-Calling Primary by Accounts Allocated").scrollIntoView().should("be.visible");
    cy.wait(1000);
    cy.contains("Allocated vs Unallocated Accounts by Total Overdue Amount Bucket").scrollIntoView().should("be.visible");
    cy.wait(1000);
    cy.contains("Allocated vs Unallocated Accounts by Current Bucket").scrollIntoView().should("be.visible");
    cy.wait(1000);
      

     
   }

   InsightsTestPage_03(){

    cy.get(this.locators.ClickOnInsights).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnAlocInsights).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnprimaryAllocInsights).click();
    cy.wait(3000);
    cy.get(this.locators.ClickOnGeoAndProAnalysis).click();
    cy.wait(1000);


   }

   InsightsTestPage_04(){

    cy.get(this.locators.ClickOnInsights).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnAlocInsights).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnprimaryAllocInsights).click();
    cy.wait(3000);
    cy.get(this.locators.ClickOnFilterBtn).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnByAgency).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnAgencyFieldPrimary).click();
    cy.wait(1000);
    cy.get(':nth-child(33)').click();
    cy.wait(1000);
    cy.get('.float-end').click();
    cy.wait(1000);
    cy.get('#statusParent').scrollIntoView().should("be.visible");
    cy.wait(1000);
    cy.get('#typeParent').scrollIntoView().should("be.visible");
    cy.wait(1000);
    cy.get('#overview > :nth-child(3)').scrollIntoView().should("be.visible");
    cy.wait(1000);
    cy.get('#overview > :nth-child(4)').scrollIntoView().should("be.visible");
    cy.wait(1000);
    cy.get('#overview > :nth-child(5)').scrollIntoView().should("be.visible");
    cy.wait(1000);
    cy.get('#overview > .justify-content').scrollIntoView().should("be.visible");
    cy.wait(1000);
    cy.get('#overview > :nth-child(7)').scrollIntoView().should("be.visible");
    cy.wait(1000);




    

   }
}

export default InsightsPage;
