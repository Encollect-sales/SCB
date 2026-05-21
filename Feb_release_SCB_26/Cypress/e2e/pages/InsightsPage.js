class InsightsPage {
  constructor(locators) {
    this.locators = locators;
  }
   InsightsPage01(){
     cy.wait(9000);
    cy.get(this.locators.Insights).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.performance_insights).click({force:true});
    cy.wait(9000);
    cy.get(this.locators.click_on_filter).click({force:true});
    cy.wait(2000);
    cy.contains('By NPA Stage Id')
  .scrollIntoView()
  .click({ force: true });
  cy.wait(2000);
   cy.get('#accordion-npaStageId input')
  .scrollIntoView()
  .click({ force: true });
cy.get('.ng-option-label').should('contain', 'Yes');
cy.get('.ng-option-label').should('contain', 'No');
   }

   InsightsPage02(){
     cy.wait(9000);
    cy.get(this.locators.Insights).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.performance_insights).click({force:true});
    cy.wait(9000);
    cy.get(this.locators.click_on_filter).click({force:true});
    cy.wait(2000);
    cy.contains('By NPA Stage Id')
  .scrollIntoView()
  .click({ force: true });
cy.wait(2000);
cy.get('#accordion-npaStageId input')
  .scrollIntoView()
  .click({ force: true });
cy.contains('.ng-option-label', 'Yes').click({force:true});

   }
    InsightsPage03(){
       cy.wait(9000);
    cy.get(this.locators.Insights).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.performance_insights).click({force:true});
    cy.wait(9000);
    cy.get(this.locators.click_on_filter).click({force:true});
    cy.wait(2000);
    cy.contains('By NPA Stage Id').scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get('#accordion-npaStageId input').scrollIntoView().click({ force: true });
    cy.wait(2000);
cy.contains('.ng-option-label', 'Yes').click({force:true});
cy.wait(2000);
cy.get(this.locators.close).click({force:true});
cy.wait(2000);
const expectedValues = ['SMA-0', 'SMA-1', 'SMA-2', 'NPA', 'Out Of Delinquency'];
cy.get('tr.fixed-column').each(($row, index) => {
  cy.wrap($row)
    .find(':nth-child(2)')
    .should('contain', expectedValues[index]);
});
cy.wait(2000);
cy.get('tbody tr:nth-child(1)')
  .find('.text-muted')
  .should('have.length', 4)
  .each(($el) => {
    cy.wrap($el)
      .invoke('text')
      .should('include', '(0%)');
  });
cy.wait(2000);
cy.get('tbody tr').eq(1).within(() => {
  cy.get('.text-muted')
    .should('have.length', 4)
    .each(($el) => {
      cy.wrap($el)
        .invoke('text')
        .then((text) => {
          expect(text.trim()).to.match(/\(0%\)/);
        });
    });
});
cy.wait(2000);
cy.get('tbody tr').eq(2).within(() => {
  cy.get('.text-muted')
    .should('have.length', 4)
    .each(($el) => {
      cy.wrap($el)
        .invoke('text')
        .then((text) => {
          expect(text.trim()).to.match(/\(0%\)/);
        });
    });
});


    }
    InsightsPage04(){
    cy.wait(9000);
    cy.get(this.locators.Insights).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.performance_insights).click({force:true});
    cy.wait(9000);
    cy.get(this.locators.click_on_filter).click({force:true});
    cy.wait(2000);
    cy.contains('By NPA Stage Id').scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get('#accordion-npaStageId input').scrollIntoView().click({ force: true });
    cy.wait(2000);
cy.contains('.ng-option-label', 'No').click({force:true});
cy.wait(2000);

    }
    InsightsPage05(){
    cy.wait(9000);
    cy.get(this.locators.Insights).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.performance_insights).click({force:true});
    cy.wait(9000);
    cy.get(this.locators.click_on_filter).click({force:true});
    cy.wait(2000);
    cy.contains('By NPA Stage Id').scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get('#accordion-npaStageId input').scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.contains('.ng-option-label', 'No').click({force:true});
    cy.wait(2000);
    cy.get('tbody tr:nth-child(4)')
  .find('.text-muted')
  .should('have.length', 5)
  .each(($el) => {
    cy.wrap($el)
      .invoke('text')
      .should('include', '(0%)');
  });
    }
    InsightsPage06(){
    cy.wait(9000);
    cy.get(this.locators.Insights).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.performance_insights).click({force:true});
    cy.wait(9000);
    cy.get(this.locators.click_on_filter).click({force:true});
    cy.wait(2000);
    cy.contains('By NPA Stage Id').scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get('#accordion-npaStageId input').scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.contains('.ng-option-label', 'Yes').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.detailed_analysis).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Download_button).click({force:true});

     }
      InsightsPage07(){
         cy.wait(9000);
    cy.get(this.locators.Insights).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.performance_insights).click({force:true});
    cy.wait(9000);
    cy.get(this.locators.click_on_filter).click({force:true});
    cy.wait(2000);
    cy.contains('By NPA Stage Id').scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get('#accordion-npaStageId input').scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.contains('.ng-option-label', 'No').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.detailed_analysis).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Download_button).click({force:true});

      }
  }
 
export default InsightsPage;