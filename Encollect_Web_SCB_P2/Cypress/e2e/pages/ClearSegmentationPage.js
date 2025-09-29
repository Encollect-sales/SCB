import { getLocators } from '../utils/locatorUtils';
import { getBaseUrl } from '../utils/configUtils';


class ClearSegmentationPage {
  constructor(locators) {
    this.locators = locators;
  }

  segmentationModule(){
    cy.wait(2000);
    cy.get("a[title='Segmentation & Treatment'] span[class='ng-star-inserted']").click();
    cy.wait(500);
    cy.get(this.locators.clearsegmentation).click();
  }

  ClearSegmentation298(){
    cy.wait(2000);
    cy.get(this.locators.clearsegmentation).click();
    cy.wait(4000);
    //cy.get(this.locators.clearsegmentationradiobtn).click();
    cy.wait(2000);
    cy.get(this.locators.selectsegmentation).type("Segmentation11",{force:true});
    cy.wait(2000);
    
  
  }

  ClearSegmentation299(){
    cy.wait(2000);
    cy.get(this.locators.clearsegmentation).click();
    cy.wait(4000);
    //cy.get(this.locators.clearsegmentationradiobtn).click();
    cy.wait(2000);
    cy.get(this.locators.selectsegmentation).type("Segmentation11",{force:true});
    cy.wait(2000);
    cy.get(this.locators.segclick).click();
    cy.wait(4000);
    cy.get(this.locators.clearsegclick).should('be visible').click();
    cy.wait(4000);
    cy.get(this.locators.clearsegclickconfirm).click();
    cy.wait(4000);
}

ClearSegment299(){

  cy.wait(500);
  cy.get(":nth-child(8) > a.ng-star-inserted > span").click();
  cy.wait(200);
  cy.get(this.locators.selectsegmentation).type("Segmentation11",{force:true});
  cy.wait(200);
  cy.get("strong").click();
  cy.wait(200);
  cy.get(".btn").click();
  cy.wait(200);
  cy.get("#confirm-dialog-okay").click();
 }


}

export default ClearSegmentationPage;
