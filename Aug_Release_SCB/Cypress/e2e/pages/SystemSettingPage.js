import { getLocators } from '../utils/Locatorutils';
import { getBaseUrl } from '../utils/configutils';
import 'cypress-file-upload';

class SystemSettingPage {
  constructor(locators) {
    this.locators = locators;
  }

  systemSettingModule(){
    cy.wait(2000);
    cy.contains("System Settings").click();
  }

  ManageMaster001(){
    cy.wait(2000);
     cy.contains("Manage Masters").scrollIntoView().click();
  }

  ManageMaster002(){
    cy.wait(2000);
     cy.contains("Manage Masters").scrollIntoView().click();
    cy.wait(2000);
 cy.contains("Product Hierarchy").scrollIntoView().click();
    cy.wait(2000);
  }

  ManageMaster003(){
    cy.wait(2000);
     cy.contains("Manage Masters").scrollIntoView().click();
    cy.wait(2000);
 cy.contains("Product Hierarchy").scrollIntoView().click();
    cy.wait(2000);
    cy.contains("Product Hierarchy").should('be.visible');
    cy.wait(2000);
    cy.contains("Product Group").should('be.visible');
    cy.wait(2000);
    cy.contains("Product").should('be.visible');
    cy.wait(2000);
    cy.contains("Sub Product").should('be.visible');
    cy.wait(2000);
  }

  ManageMaster004(){
    cy.wait(2000);
     cy.contains("Manage Masters").scrollIntoView().click();
    cy.wait(2000);
 cy.contains("Product Hierarchy").scrollIntoView().click();
    cy.wait(2000);
    cy.get(this.locators.addConsumerLoan).click();
    cy.wait(2000);
    cy.get(this.locators.addProductName).click();
    cy.wait(2000);

  }

  ManageMaster005(){
    cy.wait(2000);
     cy.contains("Manage Masters").scrollIntoView().click();
    cy.wait(2000);
     cy.contains("Geo Hierarchy").scrollIntoView().click();
    cy.wait(2000);
    cy.contains("Geo Hierarchy").should('be.visible');
    cy.wait(500);
    cy.contains("Country").should('be.visible');
    cy.wait(500);
    cy.contains("Region").should('be.visible');
    cy.wait(500);
    cy.contains("State").should('be.visible');
    cy.wait(500);

  }

    ManageMaster006(){
    cy.wait(2000);
     cy.contains("Manage Masters").scrollIntoView().click();
    cy.wait(2000);
     cy.contains("Geo Hierarchy").scrollIntoView().click();
    cy.wait(2000);
    cy.contains("Geo Hierarchy").should('be.visible');
    cy.wait(500);
    cy.get(this.locators.clickOnCountry).click();
    cy.wait(500);
    cy.get(this.locators.clickonSouth).click();
    cy.wait(500);

  }

    ManageMaster007(){
    cy.wait(2000);
     cy.contains("Manage Masters").scrollIntoView().click();
    cy.wait(2000);
     cy.contains("Geo Hierarchy").scrollIntoView().click();
    cy.wait(2000);
    cy.contains("Geo Hierarchy").should('be.visible');
    cy.wait(500);
    cy.get(this.locators.clickOnCountry).click();
    cy.wait(500);
    cy.get(this.locators.clickonNorth).click();
    cy.wait(500);

  }

    ManageMaster008(){
    cy.wait(2000);
     cy.contains("Manage Masters").scrollIntoView().click();
    cy.wait(2000);
     cy.contains("Geo Hierarchy").scrollIntoView().click();
    cy.wait(2000);
    cy.contains("Geo Hierarchy").should('be.visible');
    cy.wait(500);
    cy.get(this.locators.clickOnCountry).click();
    cy.wait(500);
    cy.get(this.locators.clickonWest).click();
    cy.wait(500);

  }

    ManageMaster009(){
    cy.wait(2000);
     cy.contains("Manage Masters").scrollIntoView().click();
    cy.wait(2000);
     cy.contains("Geo Hierarchy").scrollIntoView().click();
    cy.wait(2000);
    cy.contains("Geo Hierarchy").should('be.visible');
    cy.wait(500);
    cy.get(this.locators.clickOnCountry).click();
    cy.wait(500);
    cy.get(this.locators.clickonEast).click();
    cy.wait(500);

  }

    ManageMaster010(){
    cy.wait(2000);
     cy.contains("Manage Masters").scrollIntoView().click();
    cy.wait(2000);
     cy.contains("Geo Hierarchy").scrollIntoView().click();
    cy.wait(2000);
    cy.contains("Geo Hierarchy").should('be.visible');
    cy.wait(500);
    cy.get(this.locators.clickOnCountry).click();
    cy.wait(500);
    cy.get(this.locators.clickonEast).click();
    cy.wait(500);

  }

  
}
export default SystemSettingPage;
