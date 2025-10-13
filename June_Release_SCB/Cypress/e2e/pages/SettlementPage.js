import { getLocators } from '../utils/locatorUtils';
import { getBaseUrl } from '../utils/configUtils';
import { faker } from '@faker-js/faker';

class SettlementPage {
  constructor(locators) {
    this.locators = locators;
  }

SettlementTestPage_001(){

  cy.get(this.locators.ClickOn_Settlement).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_MyRequest).click();
  cy.wait(2000);
  cy.contains("My Requests").should("be.visible");
  cy.wait(2000);
   cy.get(this.locators.CLick_to_OpenSettlement).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Action_Btn).click();
  cy.wait(2000);
  cy.contains("View Settlement").should("be.visible");
  cy.wait(2000);
    cy.contains("Cancel Settlement").should("be.visible");
  cy.wait(2000);

}

SettlementTestPage_002(){

    cy.get(this.locators.ClickOn_Settlement).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_MyRequest).click();
  cy.wait(2000);
  cy.contains("My Requests").should("be.visible");
  cy.wait(2000);
   cy.get(this.locators.CLick_to_OpenSettlement).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Action_Btn).click();
  cy.wait(2000);
  cy.contains("View Settlement").should("be.visible").click();
  cy.wait(2000); 
    cy.contains("Workflow History").should("be.visible").click();
  cy.wait(2000);
  cy.contains("Action Date & Time").should("be.visible");
  cy.wait(2000);
    cy.contains("Application Status").should("be.visible");
  cy.wait(2000);
  cy.contains("Action Taken").scrollIntoView().should("be.visible");
  cy.wait(2000);
  
}

SettlementTestPage_003(){

   cy.get(this.locators.ClickOn_Settlement).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_MyRequest).click();
  cy.wait(2000);
  cy.contains("My Requests").should("be.visible");
  cy.wait(2000);
   cy.get(this.locators.CLick_to_OpenSettlement).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Action_Btn).click();
  cy.wait(2000);
  cy.contains("View Settlement").should("be.visible").click();
  cy.wait(2000); 

  cy.contains('Account Number:')
  .next()   
  .invoke('text')
  .then((accountnumber) => {
    cy.log('Account Number is: ' + accountnumber.trim());
    expect(accountnumber.trim()).to.not.be.empty;
  });
cy.wait(2000);

cy.contains('Customer Name:')
  .next()   
  .invoke('text')
  .then((customerName) => {
    cy.log('Customer Name is: ' + customerName.trim());
    expect(customerName.trim()).to.not.be.empty;
  });
  cy.wait(2000);

  cy.contains('Settlement Amount:')
  .next()   // element after the label
  .invoke('text')
  .then((settlementAmount) => {
    cy.log('Settlement Amount is: ' + settlementAmount.trim());
    expect(settlementAmount.trim()).to.not.be.empty;
  });
  
  cy.wait(2000);

}

SettlementTestPage_004(){

   cy.get(this.locators.ClickOn_Settlement).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_MyRequest).click();
  cy.wait(2000);
  cy.contains("My Requests").should("be.visible");
  cy.wait(2000);
   cy.get(this.locators.CLick_to_OpenSettlement).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Action_Btn).click();
  cy.wait(2000);
  cy.contains("View Settlement").should("be.visible").click();
  cy.wait(2000);
   cy.contains("Currently In Queue Of").should("be.visible").click();
  cy.wait(2000);
    cy.contains("Settlement Assigned Date & Time").scrollIntoView().should("be.visible");
  cy.wait(2000);

cy.get('app-currently-in-queue > .overflow-auto > .table > tbody > .ng-star-inserted > :nth-child(5)')
  .invoke('text')
  .then((dateTime) => {
    cy.log('Date & Time: ' + dateTime.trim());
    expect(dateTime.trim()).to.not.be.empty;
  });


}

SettlementTestPage_005(){

  cy.get(this.locators.ClickOn_Settlement).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_MyAction_queue).click();
  cy.wait(2000);
  cy.contains("My Action Queue").should("be.visible");
  cy.wait(2000);
  cy.contains("Under Evaluation").should("be.visible").click();
  cy.wait(2000);
  cy.get('tbody > :nth-child(1) > :nth-child(1) > .form-control-group > .form-check-group > label > input').click({force: true});
  cy.wait(2000);
    cy.get(this.locators.ClickOn_Update_casests_Btn).click();
  cy.wait(2000);
  cy.contains("Update Settlement Status").should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.Select_action).select("Recommend");
  cy.wait(2000);
   cy.get(this.locators.ClickOn_Remarks).type("Ok done");
  cy.wait(2000);
   cy.get(this.locators.Click_dialog_Submit).click();
  cy.wait(4000);
  cy.get('[role="alert"]').should('contain.text', 'Status updated for selected account(s) successfully.');
cy.wait(2000);
    
}




}




export default SettlementPage;
