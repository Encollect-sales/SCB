import { getLocators } from '../utils/locatorUtils';
import { getBaseUrl } from '../utils/configUtils';


class UserManagementPage {
  constructor(locators) {
    this.locators = locators;
  }

UserManagementTestPage_01(){

cy.contains("User Management").scrollIntoView().should("be.visible").click();
 cy.wait(1000);
 cy.contains("Agent Empanelment").scrollIntoView().should("be.visible").click();
 cy.wait(1000);
cy.contains("Add Agent").scrollIntoView().should("be.visible").click();
 cy.wait(1000);
//  cy.contains("Wallet Limit").should("be.visible");
//  cy.wait(1000);
 cy.get(this.locators.ClickOnWalletLimit).click();
 cy.wait(1000);
 cy.get('#walletLimit').type(20000);
 cy.wait(1000);
 cy.get(this.locators.ClickOnSearchAgent).click();
 cy.wait(1000);
 cy.get('#empStatus').select("Approved");
 cy.wait(2000);
 cy.get(this.locators.ClickOnSearchButton).click();
 cy.wait(2000);
 cy.contains("Search Result").should("be.visible");
 cy.wait(1000);


}

UserManagementTestPage_02(){

   cy.contains("User Management").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.contains("Staff Empanelment").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
   cy.contains("Add Staff ").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    //cy.contains("Wallet Limit").should("be.visible");
    cy.wait(1000);
    cy.get(this.locators.ClickOnWalletLimit).click();
    cy.wait(1000);
    cy.get('#walletLimit').type(20000);
    cy.wait(1000);
    cy.get('.user-management > :nth-child(2) > :nth-child(3) > .sub-nav-list > :nth-child(2) > a').click();
    cy.wait(1000);
    cy.get('#empStatus').select("Approved");
    cy.wait(2000);
    cy.get(this.locators.ClickOnSearchButton).click();
    cy.wait(2000);
    cy.contains("Search Result").should("be.visible");
    cy.wait(1000)
}

UserManagementTestPage_03(){

   cy.contains("User Management").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
cy.contains("Agency Empanelment ").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Add Agency").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnAddressDetails).click();
    cy.wait(1000);
    cy.contains("Primary Owner Middle Name").should("be.visible");
    cy.wait(1000);
    cy.get(this.locators.ClickOnMiddleName).type(5689);
    cy.wait(1000);
    cy.contains("Please enter valid Primary Owner middle name.").should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.ClickOnMiddleName).clear().type("arun");
    cy.wait(1000);

}

UserManagementTestPage_04(){

   cy.contains("User Management").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.contains("Agent Empanelment").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
   cy.contains("Add Agent").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.contains("Middle Name").should("be.visible");
    cy.wait(1000);
    cy.get('#mName').type("a");
    cy.wait(1000);
    cy.contains("Middle Name must be at least 2 characters long").should("be.visible");
    cy.wait(1000);
    cy.get('#mName').clear().type(56);
    cy.wait(1000);
    cy.contains("Please enter characters only.").should("be.visible");
    cy.wait(1000);
    cy.get('#mName').clear().type("Arun");
    cy.wait(1000);


}

UserManagementTestPage_05(){

   cy.contains("User Management").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.contains("Staff Empanelment").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
   cy.contains("Add Staff ").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.contains("Middle Name").should("be.visible");
    cy.wait(1000);
    cy.get('#mName').type("a");
    cy.wait(1000);
    cy.contains("Middle Name must be at least 2 characters long").should("be.visible");
    cy.wait(1000);
    cy.get('#mName').clear().type(56);                
    cy.wait(1000);
    cy.contains("Please Enter Valid Middle Name.").should("be.visible");
    cy.wait(1000);
    cy.get('#mName').clear().type("Arun");
    cy.wait(1000);


}

UserManagementTestPage_1082(){

 cy.contains("User Management").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.contains("Agent Empanelment").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
   cy.contains("Add Agent").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.contains("Middle Name").should("be.visible");
    cy.wait(1000);
    cy.get('#mName').type("a");
    cy.wait(1000);
    cy.contains("Middle Name must be at least 2 characters long").should("be.visible");
    cy.wait(1000);
    cy.get('#mName').clear().type(56);
    cy.wait(1000);
    cy.contains("Please enter characters only.").should("be.visible");
    cy.wait(1000);
    cy.get('#mName').clear().type("Arun");
    cy.wait(1000);

}

UserManagementTestPage_1083(){

   cy.contains("User Management").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.contains("Staff Empanelment").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
   cy.contains("Add Staff ").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.contains("Middle Name").should("be.visible");
    cy.wait(1000);
    cy.get('#mName').type("a");
    cy.wait(1000);
    cy.contains("Middle Name must be at least 2 characters long").should("be.visible");
    cy.wait(1000);
    cy.get('#mName').clear().type(56);                
    cy.wait(1000);
    cy.contains("Please Enter Valid Middle Name.").should("be.visible");
    cy.wait(1000);
    cy.get('#mName').clear().type("Arun");
    cy.wait(1000);

}









}

export default UserManagementPage;
