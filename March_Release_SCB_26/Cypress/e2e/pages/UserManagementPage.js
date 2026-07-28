import { faker } from "@faker-js/faker";
class UserManagementPage {
  constructor(locators) {
    this.locators = locators;
  }

 
UserManagementPage_01(){
   cy.get(this.locators.user_management).click({force:true});
   cy.wait(2000);
    cy.get(this.locators.Agent).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.search_agent).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.status).select("Approved");
    cy.wait(2000);
    cy.get(this.locators.search_button).click({force:true});
    cy.wait(2000);
     cy.get(this.locators.pagecount).type('50');
    cy.wait(2000);
    cy.get('tbody > tr > :nth-child(10) > .form-control-group > .form-check-group > label > input')
  .then(($checkboxes) => {
    const randomIndex = Cypress._.random(0, $checkboxes.length - 1);
    cy.wrap($checkboxes.eq(randomIndex)).click({ force: true });
  });
    cy.get(this.locators.edit_agent).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.departmentagent).click({force:true});
    cy.wait(2000);
    cy.contains("Department").scrollIntoView().should('be.visible');
    cy.get('#designation-select-0').should('be.visible');


}
UserManagementPage_02(){
cy.get(this.locators.user_management).click({force:true});
cy.wait(2000);
cy.get(this.locators.Agent).click({force:true});
cy.wait(2000);
cy.get(this.locators.search_agent).click({force:true});
cy.wait(2000);
cy.get(this.locators.status).select("Approved");
cy.wait(2000);
cy.get(this.locators.search_button).click({force:true});
cy.wait(2000);
cy.get(this.locators.pagecount).type('50');
cy.wait(2000);

// Select random checkbox from the list
cy.get('tbody > tr > :nth-child(10) > .form-control-group > .form-check-group > label > input')
  .then(($checkboxes) => {
    const randomIndex = Cypress._.random(0, $checkboxes.length - 1);
    cy.get('tbody > tr > :nth-child(10) > .form-control-group > .form-check-group > label > input')
      .eq(randomIndex)
      .click({ force: true });
  });
cy.wait(2000);
cy.get(this.locators.edit_agent).click({force:true});
cy.wait(2000);
cy.get(this.locators.departmentagent).click({force:true});
cy.wait(2000);
cy.get(":nth-child(3) > .btn").click({force:true});
cy.wait(2000);

// Select random Department (any index)
cy.get('[id^="department-select-"]').first().find('option').then(($options) => {
  const options = $options.toArray().filter(o => o.value !== '');
  const randomDept = Cypress._.sample(options).value;
  cy.get('[id^="department-select-"]').first().select(randomDept, { force: true });
  cy.wait(2000);
});

// Select random Designation (any index)
cy.get('[id^="designation-select-"]').first().find('option').then(($options) => {
  const options = $options.toArray().filter(o => o.value !== '');
  const randomDesig = Cypress._.sample(options).value;
  cy.get('[id^="designation-select-"]').first().select(randomDesig, { force: true });
  cy.wait(2000);
});
}
UserManagementPage_03(){
cy.get(this.locators.user_management).click({force:true});
cy.wait(2000);
cy.get(this.locators.staff).click({force:true});
cy.wait(2000);
cy.get("#nav-item-3-search-staff").click({force:true});
cy.wait(2000);
cy.get(this.locators.status).select("Approved");
cy.wait(2000);
cy.get(this.locators.search_button).click({force:true});
cy.wait(2000);

// Select random checkbox
cy.get(':nth-child(1) > :nth-child(9) > .form-control-group > .form-check-group > label > input')
  .then(($checkboxes) => {
    const randomIndex = Cypress._.random(0, $checkboxes.length - 1);
    cy.get(':nth-child(1) > :nth-child(9) > .form-control-group > .form-check-group > label > input')
      .eq(randomIndex)
      .click({ force: true });
  });

cy.get(this.locators.edit_agent).click({force:true});
cy.wait(2000);
cy.get(':nth-child(2) > .nav-link > span').click({force:true});
cy.wait(2000);
cy.wait(2000);
cy.wait(2000);
cy.get('[id^="department-select-"]').first().should('be.visible');


}
UserManagementPage_04(){
  cy.get(this.locators.user_management).click({force:true});
cy.wait(2000);
cy.get(this.locators.staff).click({force:true});
cy.wait(2000);
cy.get("#nav-item-3-search-staff").click({force:true});
cy.wait(2000);
cy.get(this.locators.status).select("Approved");
cy.wait(2000);
cy.get(this.locators.search_button).click({force:true});
cy.wait(2000);

// Select random checkbox
cy.get(':nth-child(1) > :nth-child(9) > .form-control-group > .form-check-group > label > input')
  .then(($checkboxes) => {
    const randomIndex = Cypress._.random(0, $checkboxes.length - 1);
    cy.get(':nth-child(1) > :nth-child(9) > .form-control-group > .form-check-group > label > input')
      .eq(randomIndex)
      .click({ force: true });
  });

cy.get(this.locators.edit_agent).click({force:true});
cy.wait(2000);
cy.get(':nth-child(2) > .nav-link > span').click({force:true});
cy.wait(2000);
 
    cy.get('[id^="department-select-"]').first().find('option').then(($options) => {
  const options = $options.toArray().filter(o => o.value !== '');
  const randomDept = Cypress._.sample(options).value;
  cy.get('[id^="department-select-"]').first().select(randomDept, { force: true });
  cy.wait(2000);
});
cy.wait(2000);
cy.get('[id^="desination-select-"]').first().find('option').then(($options) => {
  const options = $options.toArray().filter(o => o.value !== '');
  const randomDesig = Cypress._.sample(options).value;
  cy.get('[id^="desination-select-"]').first().select(randomDesig, { force: true });
  cy.wait(2000);
});

}

}
 
export default UserManagementPage;