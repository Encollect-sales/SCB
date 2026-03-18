import { getLocators } from "../utils/locatorUtils";
import { getBaseUrl } from "../utils/configUtils";
import { faker } from "@faker-js/faker";

class CommunicationPage {
  constructor(locators) {
    this.locators = locators;
  }
 CFG_001_Collections_EntryPoint_RecipientType() {

  // Navigate to Communication Module
  cy.get('[title="Communication"]').click({ force: true });
  cy.contains('Create Communication Template').click({ force: true });

  // Select Entry Point = Collection
  cy.get(this.locators.entry_point_dropdown)
    .should('be.visible')
    .select('Collection');
  cy.wait(2000);
  cy.get(this.locators.channel_type).should('be.visible')
    .select('Email');
  // Wait until Recipient Type dropdown is populated
  cy.get(this.locators.recipient_type_dropdown).select('Agent').should('be.visible');
    
   
}



CFG_002_Collections_TriggerType_OnXDaysDelayedDeposit() {

  cy.get('[title="Communication"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Create Communication Trigger').click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.entry_point).select('Collection');
  cy.wait(2000);
  cy.get(this.locators.Trigger_type).click({force:true});
   cy.contains(
    'You have chosen the trigger type'
  ).should('be.visible');

  cy.contains(
    'On X days of delayed deposit'
  ).should('be.visible');

  // Provide X Value section
  cy.contains('Provide X Value')
    .should('be.visible');

  // X Value label
  cy.contains('X Value (In Days)')
    .should('be.visible');

}
CFG_003_Collections_XValue_Mandatory_Positive() {

  // Navigate to Create Communication Trigger
  cy.get('[title="Communication"]').click({ force: true });
  cy.contains('Create Communication Trigger').click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.triggertype).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.x_value_input)
    .should('be.visible')
    .and('be.enabled');

  // Enter valid positive numeric value
  cy.get(this.locators.x_value_input)
    .type('3')
    .should('have.value', '3');

  // Save trigger
  cy.get(this.locators.save_button)
    .should('be.enabled')
    .click();

}
CFG_004_Collections_XValue_Blank_Or_NonNumeric_NotAllowed() {

  // Navigate to Create Communication Trigger
  cy.get('[title="Communication"]').click({ force: true });
  cy.contains('Create Communication Trigger').click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.triggertype).click({force:true});

  // ---- Case 1: Blank X Value ----
  cy.get(this.locators.x_value_input)
    .should('be.visible')
    .clear();

  cy.get(this.locators.save_button).click({force:true});

  

  // ---- Case 2: Non-numeric X Value ----
  cy.get(this.locators.x_value_input)
    .clear()
    .type('abc');

  cy.get(this.locators.save_button).click({force:true});

 

}

CommunicationTestPage_01(){

cy.get(this.locators.ClickOn_Communication).click();
cy.wait(2000);
cy.get(this.locators.ClickOn_CreateTemplate).click();
cy.wait(2000);
cy.get(this.locators.Select_Entrypoint).select('Collection');
cy.wait(2000);

const expectedBranches = ["Select Recipient Type","Agent"];

cy.get(this.locators.Select_ReceiptType)
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedBranches);
  });
  cy.wait(1000);

}

CommunicationTestPage_02(){



}
CommunicationTestPage_03(){



}




}

export default CommunicationPage;