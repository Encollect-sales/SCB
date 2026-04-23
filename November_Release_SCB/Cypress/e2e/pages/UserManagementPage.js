import { getLocators } from "../utils/locatorUtils";
import { getBaseUrl } from "../utils/configUtils";
import { faker } from "@faker-js/faker";

class UserManagementPage {
  constructor(locators) {
    this.locators = locators;
  }

  RM_001_Agency_Reporting_Manager_Dropdown() {

 cy.get('#nav-item-1-user-management').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.agent).click({ force: true });
  cy.contains('Add Agent').click({ force: true });

   cy.get(this.locators.agency_name_dropdown)
    .should('be.visible')
    .select('DRG agency');

  // Validate label
  cy.contains('label', 'Agency Reporting Manager')
    .should('be.visible');

  // ✅ Agency Reporting Manager → ng-select
  cy.get(this.locators.agency_reporting_manager)
    .click({ force: true });

  // Verify dropdown options (ng-select)
  
 cy.get('.ng-dropdown-panel .ng-option')
    .should('exist')
    .each($option => {

      const text = $option.text().trim();

      //  Skip ng-select helper options
      if (
        text === 'No items found' ||
        text === 'Type to search' ||
        text === 'Loading...'
      ) {
        return;
      }

      // ✅ Validate format: FirstName LastName - ENCollect Code
      expect(text).to.match(
        /^[A-Za-z ]+ - \d+$/
      );
    });

  // Ensure single-select
  cy.get(this.locators.agency_reporting_manager)
    .should('not.have.class', 'ng-select-multiple');
}



 RM_002_No_Approved_Users_Agency() {
  cy.wait(2000);
 cy.get('#nav-item-1-user-management').click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.agent).click({ force: true });
  cy.contains('Add Agent').click({ force: true });

  // Wait until agencies are loaded
  cy.get(this.locators.agency_name_dropdown)
    .should('be.visible')
    .find('option')
    .should('have.length.at.least', 2);

  // Log available agencies (debug)
  cy.get(this.locators.agency_name_dropdown)
    .find('option')
    .each($opt => cy.log($opt.text()));

  // Select agency WITHOUT approved users (update text after logging)
  cy.get(this.locators.agency_name_dropdown)
    .select('ABCDEF');

  // Open Agency Reporting Manager dropdown
  cy.get(this.locators.agency_reporting_manager)
    .click({ force: true });

  // Validate empty state
  cy.get('.ng-dropdown-panel')
    .should('contain.text', 'No')
}

TC_DD_001(){
 cy.get('#nav-item-1-user-management').click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.agent).click({ force: true });
  cy.contains('Add Agent').click({ force: true });

  cy.get(this.locators.agency_name_dropdown)
    .should('be.visible')
    .find('option')
    .should('have.length.at.least', 2);

  cy.get(this.locators.agency_name_dropdown)
    .find('option')
    .each($opt => cy.log($opt.text()));
  cy.get(this.locators.agency_reporting_manager)
    .click({ force: true });
  cy.get('.ng-dropdown-panel')
    .should('contain.text', 'No')

}
TC_DD_003(){
 cy.get('#nav-item-1-user-management').click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.staff).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.add_staff).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Base_Branch_And_Reporting_Manager).click({force:true});
  cy.wait(2000);
  cy.get("#base-branch").select('Jaipur');
  cy.wait(2000);
cy.get('#spManager > .ng-select-container')
  .should('be.visible')
  .click();
cy.get('#spManager input')
  .should('be.visible')
  .type('a');
cy.get('.ng-dropdown-panel-items .ng-option-label')
  .should('have.length.greaterThan', 0)
  .then(options => {
    cy.wrap(options[Math.floor(Math.random() * options.length)]).click();
  });

}
TC_DD_020(){
 cy.get('#nav-item-1-user-management').click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.agent).click({ force: true });
  cy.wait(2000);
  cy.contains('Add Agent').click({ force: true });
  cy.contains('Agency Reporting Manager').should('be.visible');
  cy.get(this.locators.Manager).should('be.visible');
}
TC_DD_021(){
 cy.get('#nav-item-1-user-management').click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.agent).click({ force: true });
  cy.wait(2000);
  cy.contains('Add Agent').click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.submit).click({force:true});
  cy.contains('Please upload profile image.', { timeout: 10000 }).should('exist');


}
TC_DD_022(){
  cy.wait(3000);
 cy.get('#nav-item-1-user-management').click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.agent).click({ force: true });
  cy.wait(2000);
  cy.contains('Add Agent').click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.agency_name_dropdown).select('ABCDEF');
  cy.wait(2000);
 cy.get(this.locators.agency_reporting_manager)
  .type('Pranshu Raj - 1630');
cy.get('.ng-option-label')
  .should('not.contain', 'No items found')
  .and('have.length.greaterThan', 0);




}
TC_DD_023(){
 cy.get('#nav-item-1-user-management').click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.staff).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.add_staff).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.userType).select('FOS');
  cy.wait(2000);
const firstName = faker.person.firstName();
const lastName  = faker.person.lastName();
const employeeId = faker.number.int({ min: 100000, max: 999999 });
const email = faker.internet.email({ firstName, lastName });
cy.wait(2000);
const mobile =
  faker.number.int({ min: 6000000000, max: 9999999999 }).toString();

cy.get(this.locators.mobile_number)
  .clear()
  .type(mobile);
cy.wait(2000);
cy.get(this.locators.first_name).type(firstName);
cy.wait(2000);
cy.get(this.locators.last_name).type(lastName);
cy.wait(2000);
cy.get(this.locators.employeeid).type(employeeId.toString());
cy.wait(2000);
cy.get(this.locators.emailid).type(email);
cy.wait(2000);
const customerId = Math.floor(100000 + Math.random() * 900000);
cy.get(this.locators.customer_id).type(customerId.toString());
cy.wait(2000);
cy.get(this.locators.Department_and_designation).click({force:true});
cy.wait(2000);
cy.get(this.locators.add_btn).click({force:true});
cy.wait(2000);
 cy.get(this.locators.department).then($select => {
  const options = $select.find('option');
  const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1; 
  const randomValue = options[randomIndex].value;

  cy.wrap($select).select(randomValue);
});
// cy.get(this.locators.department).select('Collections Staff Backend');
// cy.wait(2000);
// cy.get(this.locators.designation).select('Staff');
cy.wait(2000);
 cy.get(this.locators.designation).then($select => {
  const options = $select.find('option');
  const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1; 
  const randomValue = options[randomIndex].value;

  cy.wrap($select).select(randomValue);
});
cy.wait(2000);
cy.get(this.locators.scope_to_work).click({force:true});
cy.wait(2000);
cy.get(this.locators.ClickOn_productgroup).click();
    cy.wait(1000);
    cy.get(this.locators.Select_product_group).click();
    cy.wait(1000);
    cy.get(".ng-option").eq(3).click();
    cy.wait(1000);
    cy.get(this.locators.Product_Panel).click()
    cy.wait(2000);
     cy.get(this.locators.ClickOnBucket_head).click();
    cy.wait(1000);
    cy.get(this.locators.Bucket_panel_open).click();
    cy.wait(3000);
    cy.get(".ng-option").eq(2).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnGeography_head).click();
    cy.wait(1000);
    cy.get('#geo-scope-HL06').click();
    cy.wait(2000);
    cy.get(this.locators.Geography_panel_open).click();
    cy.wait(2000);
     cy.get(".ng-option").eq(1).click();
    cy.wait(2000);
    cy.get(this.locators.geography_Panel_close).click();
    cy.wait(3000);
// cy.get("#product-scope-HL01").click();
//     cy.wait(2000);
//     cy.get(".col-md-12.ng-star-inserted > .form-control-group > .form-ng-select > .ng-select-container").type("Loan Products");
//     cy.wait(2000);
//     cy.contains(".ng-option-label","Loan Products").click({ force: true });
//     cy.wait(2000);
//     cy.get('[heading="Bucket"] > .panel > .panel-heading').click();
//     cy.wait(500);
//     cy.get(".panel-open > .panel > .panel-collapse > .panel-body > .row > .col-md-12 > .form-control-group > .form-ng-select > .ng-select-container").type("3");
//     cy.wait(500);
//     cy.contains(".ng-option-label","3").click({ force: true });
//     cy.wait(500);
//     cy.get("accordion-group[heading='Geography'] div[class='panel-title']").click({force: true});
//     cy.wait(500);
//     cy.get("#geo-scope-HL04").click();
//     cy.wait(500);
//     cy.get(".panel-open > .panel > .panel-collapse > .panel-body > .row > .col-md-12.ng-star-inserted > .form-control-group > .form-ng-select > .ng-select-container").type("India");
//     cy.wait(500);
//     cy.contains(".ng-option-label","India").click({ force: true });
//     cy.wait(2000);
const wallet_limit_field = faker.number.int({
  min: 1000,
  max: 100000
});
cy.wait(2000);
cy.get(this.locators.wallet_limit).click({force:true});
cy.wait(2000);
cy.get(this.locators.wallet_limit_field)
  .type(wallet_limit_field.toString());
cy.wait(2000);
 cy.get(this.locators.Base_Branch_And_Reporting_Manager).click({force:true});
  cy.wait(2000);
  cy.get("#base-branch").select('Jaipur');
  cy.wait(2000);
cy.get('#spManager > .ng-select-container')
  .should('be.visible')
  .click();
cy.get('#spManager input')
  .should('be.visible')
  .type('a');
cy.get('.ng-dropdown-panel-items .ng-option-label')
  .should('have.length.greaterThan', 0)
  .then(options => {
    cy.wrap(options[Math.floor(Math.random() * options.length)]).click();
  });
 cy.get(this.locators.save_button).click({force:true});
 cy.contains('Success!').should('be.visible');
  cy.contains('Collection staff profile is Saved as Draft').should('be.visible');







}









}

export default UserManagementPage;