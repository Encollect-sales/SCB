import { tr } from "@faker-js/faker";

class InsightsPage {
  constructor(locators) {
    this.locators = locators;
  }
  InsightsPage_01(){
    cy.wait(7000);
    cy.wait(2000);
    cy.get(this.locators.Insights).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Performance_insights).click({force:true});
    cy.wait(2000);
    cy.contains('Collection Performance Matrix').should('not.be.visible');
    cy.contains('Collection Performance By Bucket').scrollIntoView().should('be.visible');

  }
   InsightsPage_02(){
    cy.wait(7000);
    cy.wait(2000);
    cy.get(this.locators.Insights).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Performance_insights).click({force:true});
    cy.wait(2000);
    cy.contains('Collection Performance By Bucket').scrollIntoView().should('be.visible');


   }
    InsightsPage_03(){
    cy.wait(7000);
    cy.wait(2000);
    cy.get(this.locators.Insights).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Performance_insights).click({force:true});
    cy.wait(2000);
    cy.contains('Delinquency Movement Matrix').scrollIntoView().should('be.visible');
    }
    InsightsPage_04(){
    cy.wait(7000);
    cy.wait(2000);
     cy.get(this.locators.Insights).click({force:true});
     cy.wait(2000);
     cy.get(this.locators.Performance_insights).click({force:true});
     cy.wait(2000);
    cy.contains('Collection Performance By Bucket')
      .scrollIntoView()
      .should('be.visible');
    cy.get(this.locators.StackedBarChart)
      .should('be.visible');
    }
    

  InsightsPage_05(){
     cy.wait(7000);
     cy.wait(2000);
     cy.get(this.locators.Insights).click({force:true});
     cy.wait(2000);
     cy.get(this.locators.Performance_insights).click({force:true});
     cy.wait(2000);
     cy.contains("Collection Performance By Bucket").scrollIntoView().should('be.visible');
    cy.contains('NORM').scrollIntoView().should('be.visible');
    cy.contains('RB').scrollIntoView().should('be.visible');
    cy.contains('STAB').scrollIntoView().should('be.visible');
    cy.contains('RF').scrollIntoView().should('be.visible');


  }
  InsightsPage_06(){
  cy.wait(7000);
  cy.wait(2000);
  cy.get(this.locators.Insights).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Performance_insights).click({force:true});
  cy.wait(2000);
  cy.get(".overlay-container").click({force:true});
  cy.wait(2000);
  cy.get("bs-dropdown-container li:nth-child(2) span:nth-child(1)").click({force:true});
  cy.wait(2000);
  cy.contains('SMA-0').scrollIntoView().should('be.visible');
  cy.contains('SMA-1').scrollIntoView().should('be.visible');
  cy.contains('SMA-2').scrollIntoView().should('be.visible');
  cy.contains('NPA').scrollIntoView().should('be.visible');
  }

}

export default InsightsPage;