import { getLocators } from '../utils/locatorUtils';
import { getBaseUrl } from '../utils/configUtils';


class ClearTreatmentPage {
  constructor(locators) {
    this.locators = locators;
  }

  segmentationModule(){
    cy.wait(2000);
    cy.get(this.locators.segmentation).click({force: true});
  }

  ClearTreatment300(){
    cy.wait(2000);
    cy.get(this.locators.clearsegmentation).click({force: true});
    cy.wait(3000);
    // cy.get(this.locators.cleartreatment_radiobtn).click({force : true});
    // cy.wait(2000);
    // cy.get(this.locators.actionClick).click();
    // cy.wait(500);
    cy.get('.form-control').type('testfriday march',{force : true});
    cy.wait(500);
    cy.get('#ngb-typeahead-1-0').click();
    cy.wait(500);
    cy.get('.btn').click();
    cy.wait(500);
    cy.get(this.locators.yesconfirmBtn).click();
    cy.wait(500);
    // cy.get('[role="alert"]').should(
    //   "contain.text",
    //   " Cleared Successfully! "
    // )
    // cy.get('div[aria-label="Cleared Successfully!"]').then(($el) => {
    //   const text = $el.text();
    //   cy.log(text);

    // })
    
     
  }

}

export default ClearTreatmentPage;
