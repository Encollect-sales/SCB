class GeoreportsPage {
  constructor(locators) {
    this.locators = locators;
  }
  GeoReports_01(){
 cy.get('[title="Geo Report"]').click({ force: true });
 cy.wait(2000);
 cy.get(this.locators.travelgeoreports).click({force:true});
 cy.wait(2000);
 const expectedFields = [
  'Agency Name',
  'Agent Name',
  'Agent Code',
  'Date'
];

expectedFields.forEach((label) => {
  cy.contains(label)
    .scrollIntoView()
    .should('be.visible');
});
cy.wait(2000);

  }


  GeoReports_02(){
 cy.get('[title="Geo Report"]').click({ force: true });
 cy.wait(2000);
 cy.get(this.locators.travelgeoreports).click({force:true});
 cy.wait(2000);
 cy.get(this.locators.bank_user).click({force:true});
 const expectedFields = [
 
  'Branch Name',
  'Staff Name',
  'Staff Code',
  'Date'
];

expectedFields.forEach((label) => {
  cy.contains(label)
    .scrollIntoView()
    .should('be.visible');
});
cy.wait(2000);

  }

  }
export default GeoreportsPage;