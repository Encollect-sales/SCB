import { getLocators } from "../utils/locatorUtils";
import { getBaseUrl } from "../utils/configUtils";
import { faker } from "@faker-js/faker";

class CommunicationPage {
  constructor(locators) {
    this.locators = locators;
  }
 CFG_001_Collections_EntryPoint_RecipientType() {

  // Navigate to Communication Module
 cy.get('#nav-item-1-communication').click({ force: true });
 cy.wait(2000);
  cy.contains('Create Communication Template').click({ force: true });
  cy.wait(2000);

  // Select Entry Point = Collection
  cy.get(this.locators.entry_point_dropdown)
    .should('be.visible')
    .select('Collection');
  cy.wait(2000);
  cy.get(this.locators.channel_type).should('be.visible')
    .select('Email');
    cy.wait(2000);
  // Wait until Recipient Type dropdown is populated
  cy.get(this.locators.recipient_type_dropdown).select('Agent').should('be.visible');
    cy.wait(2000);
   
}



CFG_002_Collections_TriggerType_OnXDaysDelayedDeposit() {

 cy.get('#nav-item-1-communication').click({ force: true });
  cy.wait(2000);
  cy.contains('Create Communication Trigger').click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.entry_point).select('Collection');
  cy.wait(2000);
  cy.get(this.locators.Trigger_type).click({force:true});
    cy.wait(2000);
   cy.contains('You have chosen the trigger type').should('be.visible');
  cy.wait(2000);
  cy.contains('On X days of delayed deposit').should('be.visible');
  cy.wait(2000);
  // Provide X Value section
  cy.contains('Provide X Value').should('be.visible');

  // X Value label
  cy.contains('X Value (In Days)')
    .should('be.visible');

}
CFG_003_Collections_XValue_Mandatory_Positive() {

  // Navigate to Create Communication Trigger
 cy.get('#nav-item-1-communication').click({ force: true });
  cy.contains('Create Communication Trigger').click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.triggertypexday).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.x_value_input).should('be.visible').and('be.enabled');
  cy.wait(2000);
  // Enter valid positive numeric value
  cy.get(this.locators.x_value_input).type('3').should('have.value', '3');
  cy.wait(2000);
  // Save trigger
  cy.get(this.locators.save_button).should('be.enabled').click();
    cy.wait(2000);

}
CFG_004_Collections_XValue_Blank_Or_NonNumeric_NotAllowed() {
  cy.get('#nav-item-1-communication').click({ force: true });
  cy.wait(2000);
  cy.contains('Create Communication Trigger').click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.triggertypexday).click({force:true});
  cy.wait(2000);
  // cy.get(this.locators.triggertype).click({force:true});
  // cy.wait(2000);
  cy.get(this.locators.x_value_input).click();
  cy.wait(2000);
  cy.contains('X Value is required').should('be.visible');
  cy.wait(2000);
  cy.get(this.locators.save_button).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.x_value_input).clear().type('abc');
  cy.wait(2000);
  cy.get(this.locators.save_button).click({force:true});
  cy.wait(2000);
 

}

CommunicationTestPage_01() {

  cy.get(this.locators.ClickOn_Communication).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_CreateTemplate).click();
  cy.wait(2000);
  cy.get(this.locators.channel_type).select('Email');
  cy.wait(2000);
  cy.get(this.locators.Select_Entrypoint).select('Collection');
  cy.wait(2000);

  const expectedBranches = ["Select Recipient Type", "Agent"];

  cy.get(this.locators.Select_ReceiptType)
    .find('option')
    .then($options => {
      const actual = [...$options].map(o => o.innerText.trim());
      cy.log('Actual options: ' + JSON.stringify(actual));
      expectedBranches.forEach(expected => {
        expect(actual).to.include(expected);
      });
    });

  cy.wait(1000);

}

CommunicationTestPage_02(){



}
CommunicationTestPage_03(){



}




}

export default CommunicationPage;