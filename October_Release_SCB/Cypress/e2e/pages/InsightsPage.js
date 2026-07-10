
class InsightsPage {
  constructor(locators) {
    this.locators = locators;
  }


TC_Ins_01() {

    cy.get('[title="Insights"]').click({ force: true });
    cy.wait(2000);

    cy.get(this.locators.primary_insights).click({ force: true });
    cy.wait(2000);

    cy.get(this.locators.filterbutton).click({ force: true });
    cy.wait(2000);

    cy.get('#accordion-product > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn')
        .click({ force: true });

    cy.wait(1000);

    // Product Group
    cy.get('#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > :nth-child(1) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input')
        .click({ force: true });

    cy.wait(4000);

    cy.get('.ng-dropdown-panel')
        .should('be.visible')
        .within(() => {
            cy.get('.ng-option').then($options => {
                const randomIndex = Math.floor(Math.random() * $options.length);
                cy.wrap($options[randomIndex]).click({ force: true });
            });
        });

    cy.wait(2000);

    // Product
    cy.get('#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(2) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input')
        .click({ force: true });

    cy.wait(4000);

    cy.get('.ng-dropdown-panel')
        .should('be.visible')
        .within(() => {
            cy.get('.ng-option').then($options => {
                const randomIndex = Math.floor(Math.random() * $options.length);
                cy.wrap($options[randomIndex]).click({ force: true });
            });
        });

    cy.wait(2000);

    // Sub Product
    cy.get('#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(3) > .form-ng-select > .ng-select-container')
        .click({ force: true });

    cy.wait(4000);

    cy.get('.ng-dropdown-panel')
        .should('be.visible')
        .within(() => {
            cy.get('.ng-option').then($options => {
                const randomIndex = Math.floor(Math.random() * $options.length);
                cy.wrap($options[randomIndex]).click({ force: true });
            });
        });

}

TC_Ins_02(){
  cy.get('[title="Insights"]').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.primary_insights).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.filterbutton).click({force:true});
  cy.wait(2000);
  cy.get('#accordion-product > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click({force:true});
      cy.wait(2000);
      cy.get("#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(2) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input").click({force:true});
      cy.wait(4000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      cy.wait(2000);
      cy.get("#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(3) > .form-ng-select > .ng-select-container").click({force:true});
      cy.wait(4000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });

}
TC_Ins_03(){
  cy.get('[title="Insights"]').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.primary_insights).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.filterbutton).click({force:true});
  cy.wait(2000);
  cy.get('#accordion-geography > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click({force: true});
    cy.wait(1000);
    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > :nth-child(1) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click({force:true});
    cy.wait(1000);
     cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(2) > .form-ng-select > .ng-select-container').click({force:true});
    cy.wait(1000);
     cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(3) > .form-ng-select > .ng-select-container').click({force:true});
    cy.wait(1000);
     cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });cy.get(':nth-child(4) > .form-ng-select > .ng-select-container').click({force:true});
    cy.wait(1000);
     cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      cy.get(':nth-child(5) > .form-ng-select > .ng-select-container').click({force:true});
    cy.wait(1000);
     cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
   
}

TC_Ins_04(){
  cy.get('[title="Insights"]').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.primary_insights).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.filterbutton).click({force:true});
  cy.wait(2000);
  cy.get('#accordion-bucket > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-bucket > .panel > .panel-collapse > .panel-body > form.ng-pristine > :nth-child(1) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
     cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });

      cy.get('#accordion-bucket > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(2) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
      cy.wait(1000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
  

}
TC_Ins_05(){
  cy.get('[title="Insights"]').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.secondary_insights).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.filterbutton).click({force:true});
  cy.wait(2000);
  cy.get('#accordion-product > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click({force:true});
    cy.wait(1000);
    cy.get('#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > :nth-child(1) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click({force:true});
    cy.wait(4000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(3000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      cy.wait(2000);
      cy.get("#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(2) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input").click({force:true});
      cy.wait(4000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      cy.wait(2000);
      cy.get("#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(3) > .form-ng-select > .ng-select-container").click({force:true});
      cy.wait(4000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });



}

TC_Ins_06(){
  cy.get('[title="Insights"]').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.secondary_insights).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.filterbutton).click({force:true});
  cy.wait(2000);
 cy.get('#accordion-product > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click({force:true});
      cy.wait(2000);
      cy.get("#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(2) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input").click({force:true});
      cy.wait(4000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      cy.wait(2000);
      cy.get("#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(3) > .form-ng-select > .ng-select-container").click({force:true});
      cy.wait(4000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });

}

TC_Ins_07(){
  cy.get('[title="Insights"]').click({ force: true });
cy.wait(2000);

cy.get(this.locators.secondary_insights).click({ force: true });
cy.wait(2000);

cy.get(this.locators.filterbutton).click({ force: true });
cy.wait(2000);

cy.get('#accordion-geography > .panel > .panel-heading .btn')
  .click({ force: true });
cy.wait(1000);

function selectRandom() {
  cy.get('.ng-dropdown-panel:visible').first().should('be.visible')
    .within(() => {
      cy.get('.ng-option').then($options => {
        const count = $options.length;
        const randomIndex = Math.floor(Math.random() * count);
        cy.wrap($options[randomIndex]).click({ force: true });
      });
    });
}
cy.get('#accordion-geography .panel-body input').eq(0)
  .click({ force: true });
cy.wait(1000);
selectRandom();
cy.get('#accordion-geography .panel-body .ng-select-container').eq(1)
  .click({ force: true });
cy.wait(1000);
selectRandom();
cy.get('#accordion-geography .panel-body .ng-select-container').eq(2)
  .click({ force: true });
cy.wait(1000);
selectRandom();
cy.get('#accordion-geography .panel-body .ng-select-container').eq(3)
  .click({ force: true });
cy.wait(1000);
selectRandom();
cy.get('#accordion-geography .panel-body .ng-select-container').eq(4)
  .click({ force: true });
cy.wait(1000);
selectRandom();

}
TC_Ins_08(){
  cy.get('[title="Insights"]').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.secondary_insights).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.filterbutton).click({force:true});
  cy.wait(2000);
    cy.get('#accordion-bucket > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click({force: true});
    cy.wait(1000);
    cy.get('#accordion-bucket > .panel > .panel-collapse > .panel-body > form.ng-pristine > :nth-child(1) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click({force: true});
    cy.wait(1000);
     cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });

      cy.get('#accordion-bucket > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(2) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
      cy.wait(1000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
  

    }

  TC_Ins_09(){
  cy.get('[title="Insights"]').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Trail_Gap_Insights).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.filterbutton).click({force:true});
  cy.wait(2000);
  cy.get('#accordion-product > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click({force:true});
    cy.wait(1000);
    cy.get('#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > :nth-child(1) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click({force:true});
    cy.wait(4000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(3000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      cy.wait(2000);
      cy.get("#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(2) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input").click({force:true});
      cy.wait(4000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      cy.wait(2000);
      cy.get("#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(3) > .form-ng-select > .ng-select-container").click({force:true});
      cy.wait(4000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });



    }
      TC_Ins_010(){
  cy.get('[title="Insights"]').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Trail_Gap_Insights).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.filterbutton).click({force:true});
  cy.wait(2000);
  cy.get('#accordion-product > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click({force:true});
      cy.wait(2000);
      cy.get("#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(2) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input").click({force:true});
      cy.wait(4000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      cy.wait(2000);
      cy.get("#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(3) > .form-ng-select > .ng-select-container").click({force:true});
      cy.wait(4000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });

    }

   TC_Ins_011() {

  const selectRandomOption = (dropdownLocator) => {
    cy.get(dropdownLocator)
      .first()
      .click({ force: true });

    // cy.get('.ng-dropdown-panel:visible')
    //   .should('be.visible');

    // cy.get('.ng-dropdown-panel:visible .ng-option')
    //   .should('have.length.greaterThan', 0)
    //   .then($options => {
    //     const randomIndex = Math.floor(Math.random() * $options.length);
    //     cy.wrap($options.eq(randomIndex))
    //       .scrollIntoView()
    //       .click({ force: true });
    //   });

    cy.wait(1000);
  };

  cy.get('[title="Insights"]').click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.Trail_Gap_Insights).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.filterbutton).click({ force: true });
  cy.wait(2000);

  cy.get('#accordion-geography > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn')
    .click({ force: true });

  cy.wait(1000);

  selectRandomOption(
    '#accordion-geography > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > :nth-child(1) > .form-ng-select > .ng-select-container'
  );

  selectRandomOption(
    '#accordion-geography > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(2) > .form-ng-select > .ng-select-container'
  );

  selectRandomOption(
    '#accordion-geography > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(3) > .form-ng-select > .ng-select-container'
  );

  selectRandomOption(
    ':nth-child(4) > .form-ng-select > .ng-select-container'
  );

  selectRandomOption(
    ':nth-child(5) > .form-ng-select > .ng-select-container'
  );

}
TC_Ins_012(){

    cy.get('[title="Insights"]').click({force:true});
    cy.wait(2000);

    cy.get(this.locators.Trail_Gap_Insights).click({force:true});
    cy.wait(2000);

    cy.get(this.locators.filterbutton).click({force:true});
    cy.wait(2000);

    cy.get('#accordion-bucket > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click({force:true});
    cy.wait(1000);

    // First Dropdown
    cy.get('#accordion-bucket > .panel > .panel-collapse > .panel-body > form.ng-pristine > :nth-child(1) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input')
      .click({force:true});

    cy.wait(1000);

    cy.get('.ng-option').then($options => {
        const count = $options.length;
        const randomIndex = Math.floor(Math.random() * count);
        cy.wrap($options[randomIndex]).click({ force: true });
    });

    cy.wait(2000);

    // Second Dropdown
    cy.get('#accordion-bucket > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(2) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input')
      .click({force:true});

    cy.wait(1000);

    cy.get('.ng-option').then($options => {
        const count = $options.length;
        const randomIndex = Math.floor(Math.random() * count);
        cy.wrap($options[randomIndex]).click({ force: true });
    });

}

      TC_Ins_013(){
         cy.get('[title="Insights"]').click({force:true});
         cy.wait(2000);
         cy.get(this.locators.Accountvsallocated).click({force:true});
         cy.wait(2000);
         cy.get(this.locators.filterbutton).click({force:true});
         cy.wait(2000);
         cy.get('#accordion-product > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click({force:true});
    cy.wait(1000);
    cy.get('#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > :nth-child(1) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click({force:true});
    cy.wait(4000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(3000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      cy.wait(2000);
      cy.get("#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(2) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input").click({force:true});
      cy.wait(4000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      cy.wait(2000);
      cy.get("#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(3) > .form-ng-select > .ng-select-container").click({force:true});
      cy.wait(4000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });



      }

       TC_Ins_014(){
         cy.get('[title="Insights"]').click({force:true});
         cy.wait(2000);
         cy.get(this.locators.Accountvsallocated).click({force:true});
         cy.wait(2000);
         cy.get(this.locators.filterbutton).click({force:true});
         cy.wait(2000);
       cy.get('#accordion-product > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click({force:true});
      cy.wait(2000);
      cy.get("#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(2) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input").click({force:true});
      cy.wait(4000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      cy.wait(2000);
      cy.get("#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(3) > .form-ng-select > .ng-select-container").click({force:true});
      cy.wait(4000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });


      }

       TC_Ins_015(){
cy.get('[title="Insights"]').click({ force: true });
cy.get(this.locators.Accountvsallocated).click({ force: true });
cy.get(this.locators.filterbutton).click({ force: true });
cy.get('#accordion-geography .accordion-toggle .btn').click({ force: true });
const selectRandomOption = () => {
  cy.get('.ng-dropdown-panel:visible').first().should('be.visible')
    .within(() => {
      cy.get('.ng-option').then($options => {
        const count = $options.length;
        const randomIndex = Math.floor(Math.random() * count);
        cy.wrap($options[randomIndex]).click({ force: true });
      });
    });
};

cy.get('#accordion-geography form .form-ng-select').eq(0)
  .find('.ng-select-container')
  .click({ force: true });
selectRandomOption();
cy.get('#accordion-geography form .form-ng-select').eq(1)
  .find('.ng-select-container')
  .click({ force: true });
selectRandomOption();
cy.get('#accordion-geography form .form-ng-select').eq(2)
  .find('.ng-select-container')
  .click({ force: true });
selectRandomOption();
cy.get('#accordion-geography form .form-ng-select').eq(3)
  .find('.ng-select-container')
  .click({ force: true });
selectRandomOption();

cy.get('#accordion-geography form .form-ng-select').eq(4)
  .find('.ng-select-container')
  .click({ force: true });
selectRandomOption();


       }

         TC_Ins_016(){
         cy.get('[title="Insights"]').click({force:true});
         cy.wait(2000);
         cy.get(this.locators.Accountvsallocated).click({force:true});
         cy.wait(2000);
         cy.get(this.locators.filterbutton).click({force:true});
         cy.wait(2000);
     
          cy.get('#accordion-bucket > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-bucket > .panel > .panel-collapse > .panel-body > form.ng-pristine > :nth-child(1) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
     cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      cy.wait(2000);
      cy.get('#accordion-bucket > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(2) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
      cy.wait(1000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
  


    }
      TC_Ins_017(){
         cy.get('[title="Insights"]').click({force:true});
         cy.wait(2000);
         cy.get("#nav-item-2-money-movement-insights-\(agency-staff\)").click({force:true});
         cy.wait(2000);
         cy.get(this.locators.filterbutton).click({force:true});
         cy.wait(2000);
  cy.get('#accordion-product > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click({force:true});
    cy.wait(1000);
    cy.get('#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > :nth-child(1) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click({force:true});
    cy.wait(4000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(3000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      cy.wait(2000);
      cy.get("#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(2) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input").click({force:true});
      cy.wait(4000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      cy.wait(2000);
      cy.get("#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(3) > .form-ng-select > .ng-select-container").click({force:true});
      cy.wait(4000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });



      }

      TC_Ins_018(){
         cy.get('[title="Insights"]').click({force:true});
         cy.wait(2000);
         cy.contains('Money Movement Insights (Agency Staff)').click({force:true});
         cy.wait(2000);
         cy.get(this.locators.filterbutton).click({force:true});
         cy.wait(2000);
      cy.get('#accordion-product > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click({force:true});
      cy.wait(2000);
      cy.get("#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(2) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input").click({force:true});
      cy.wait(4000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      cy.wait(2000);
      cy.get("#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(3) > .form-ng-select > .ng-select-container").click({force:true});
      cy.wait(4000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });



      }

         TC_Ins_019(){
         cy.get('[title="Insights"]').click({force:true});
         cy.wait(2000);
         cy.contains('Money Movement Insights (Agency Staff)').click({force:true});
         cy.wait(2000);
         cy.get(this.locators.filterbutton).click({force:true});
         cy.wait(2000);
          cy.get('#accordion-geography > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click({force: true});
    cy.wait(1000);
    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > :nth-child(1) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click({force:true});
    cy.wait(1000);
     cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(2) > .form-ng-select > .ng-select-container').click({force:true});
    cy.wait(1000);
     cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(3) > .form-ng-select > .ng-select-container').click({force:true});
    cy.wait(1000);
     cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });cy.get(':nth-child(4) > .form-ng-select > .ng-select-container').click({force:true});
    cy.wait(1000);
     cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      cy.get(':nth-child(5) > .form-ng-select > .ng-select-container').click({force:true});
    cy.wait(1000);
     cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
   
}

TC_Ins_020(){
  cy.get('[title="Insights"]').click({force:true});
  cy.wait(2000);
  cy.contains('Money Movement Insights (Agency Staff)').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.filterbutton).click({force:true});
  cy.wait(2000);
  cy.get('#accordion-bucket > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-bucket > .panel > .panel-collapse > .panel-body > form.ng-pristine > :nth-child(1) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
     cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });

      cy.get('#accordion-bucket > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(2) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
      cy.wait(1000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });


    }

   TC_Ins_021(){
   cy.get('[title="Insights"]').click({force:true});
  cy.wait(2000);
 cy.contains('Money Movement Insights (Bank Staff)').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.filterbutton).click({force:true});
  cy.wait(2000);
  cy.get('#accordion-product > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click({force:true});
    cy.wait(1000);
    cy.get('#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > :nth-child(1) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click({force:true});
    cy.wait(4000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(3000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      cy.wait(2000);
      cy.get("#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(2) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input").click({force:true});
      cy.wait(4000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      cy.wait(2000);
      cy.get("#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(3) > .form-ng-select > .ng-select-container").click({force:true});
      cy.wait(4000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });



   }

    TC_Ins_022(){
   cy.get('[title="Insights"]').click({force:true});
  cy.wait(2000);
 cy.contains('Money Movement Insights (Bank Staff)').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.filterbutton).click({force:true});
  cy.wait(2000);
  cy.get('#accordion-product > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click({force:true});
   cy.wait(2000);
      cy.get("#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(2) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input").click({force:true});
      cy.wait(4000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      cy.wait(2000);
      cy.get("#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(3) > .form-ng-select > .ng-select-container").click({force:true});
      cy.wait(4000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });



   }

     TC_Ins_023(){
  cy.get('[title="Insights"]').click({force:true});
  cy.wait(2000);
 cy.contains('Money Movement Insights (Bank Staff)').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.filterbutton).click({force:true});
  cy.wait(2000);
   cy.get('#accordion-geography > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click({force: true});
    cy.wait(1000);
    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > :nth-child(1) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click({force:true});
    cy.wait(1000);
     cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(2) > .form-ng-select > .ng-select-container').click({force:true});
    cy.wait(1000);
     cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(3) > .form-ng-select > .ng-select-container').click({force:true});
    cy.wait(1000);
     cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });cy.get(':nth-child(4) > .form-ng-select > .ng-select-container').click({force:true});
    cy.wait(1000);
     cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      cy.get(':nth-child(5) > .form-ng-select > .ng-select-container').click({force:true});
    cy.wait(1000);
     cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
   


     }

     TC_Ins_024(){
  cy.get('[title="Insights"]').click({force:true});
  cy.wait(2000);
 cy.contains('Money Movement Insights (Bank Staff)').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.filterbutton).click({force:true});
  cy.wait(2000);
  cy.get('#accordion-bucket > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-bucket > .panel > .panel-collapse > .panel-body > form.ng-pristine > :nth-child(1) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
     cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });

      cy.get('#accordion-bucket > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(2) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
      cy.wait(1000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });




     }


      TC_Ins_025(){
    cy.get('[title="Insights"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.primary_insights).click({force:true});
    cy.wait(2000);
     cy.contains("Primary Allocation Insights").scrollIntoView().should("be.visible");
    cy.get(this.locators.filterbutton).click({force:true});
    cy.get(2000);
    cy.contains("Select Metrics").scrollIntoView().should("be.visible");
    cy.contains("By Agency").scrollIntoView().should("be.visible");
    //cy.contains("By Allocation Owner").scrollIntoView().should("be.visible");
    cy.contains("By Product").scrollIntoView().should("be.visible");
    cy.contains("By Bucket").scrollIntoView().should("be.visible");
    cy.contains("By Geography").scrollIntoView().should("be.visible");


      }

    TC_Ins_026(){
    cy.get('[title="Insights"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.secondary_insights).click({force:true});
    cy.wait(2000); 
    cy.contains("Secondary Allocation Insights").scrollIntoView().should("be.visible");
    cy.get(this.locators.filterbutton).click({force:true});
    cy.get(2000);
    cy.contains("Select Metrics").scrollIntoView().should("be.visible");
    cy.contains("By Agency").scrollIntoView().should("be.visible");
    //cy.contains("By Allocation Owner").scrollIntoView().should("be.visible");
    cy.contains("By Product").scrollIntoView().should("be.visible");
    cy.contains("By Bucket").scrollIntoView().should("be.visible");
    cy.contains("By Geography").scrollIntoView().should("be.visible");
    

    }

     TC_Ins_027(){
    cy.get('[title="Insights"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Trail_Gap_Insights).click({force:true});
    cy.wait(2000); 
    cy.contains("Trail Gap Insights").scrollIntoView().should("be.visible");
    cy.get(this.locators.filterbutton).click({force:true});
    cy.get(2000);
    cy.contains("Select Metrics").scrollIntoView().should("be.visible");
    cy.contains("By Agency").scrollIntoView().should("be.visible");
    //cy.contains("By Allocation Owner").scrollIntoView().should("be.visible");
    cy.contains("By Product").scrollIntoView().should("be.visible");
    cy.contains("By Bucket").scrollIntoView().should("be.visible");
    cy.contains("By Geography").scrollIntoView().should("be.visible");

    

    }

      TC_Ins_028(){
    cy.get('[title="Insights"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Accountvsallocated).scrollIntoView().click({force:true});
    cy.wait(2000); 
    cy.contains("Allocated vs Achieved Insights").should("be.visible");
   cy.get(this.locators.filterbutton).click({force:true});
    cy.get(2000);
    cy.contains('Select Metrics').scrollIntoView().should('be.visible');
cy.contains('Select Agency').scrollIntoView().should('be.visible');
cy.contains('By Product').scrollIntoView().should('be.visible');
cy.contains('By Bucket').scrollIntoView().should('be.visible');
cy.contains('By Geography').scrollIntoView().should('be.visible');

    }

      TC_Ins_029(){
    cy.get('[title="Insights"]').click({force:true});
    cy.wait(2000);
    cy.contains('Money Movement Insights (Agency Staff)').click({force:true});
    cy.wait(2000); 
    cy.contains("Money Movement Insights (Agency Staff)").scrollIntoView().should("be.visible");
    cy.get(this.locators.filterbutton).click({force:true});
    cy.get(2000);
   cy.contains('Select Metrics').scrollIntoView().should('be.visible');
cy.contains('Select Threshold').scrollIntoView().should('be.visible');
cy.contains('By Receipt Date').scrollIntoView().should('be.visible');
cy.contains('By User').scrollIntoView().should('be.visible');
cy.contains('By Product').scrollIntoView().should('be.visible');
cy.contains('By Bucket').scrollIntoView().should('be.visible');
cy.contains('By Geography').scrollIntoView().should('be.visible');
cy.contains('By Payment Mode').scrollIntoView().should('be.visible');
cy.contains('By Payment Status').scrollIntoView().should('be.visible');


    

    }


     TC_Ins_030(){
    cy.get('[title="Insights"]').click({force:true});
    cy.wait(2000);
   cy.contains('Money Movement Insights (Bank Staff)').click({force:true});
    cy.wait(2000); 
    cy.contains("Money Movement Insights (Bank Staff)").scrollIntoView().should("be.visible");
    cy.get(this.locators.filterbutton).click({force:true});
    cy.get(2000);
   cy.contains('Select Metrics').scrollIntoView().should('be.visible');
cy.contains('Select Threshold').scrollIntoView().should('be.visible');
cy.contains('By Receipt Date').scrollIntoView().should('be.visible');
cy.contains('By User').should('be.visible');
cy.contains('By Product').scrollIntoView().should('be.visible');
cy.contains('By Bucket').scrollIntoView().should('be.visible');
cy.contains('By Geography').scrollIntoView().should('be.visible');
cy.contains('By Payment Mode').scrollIntoView().should('be.visible');
cy.contains('By Payment Status').scrollIntoView().should('be.visible');


    }

TC_Ins_031(){

  cy.get('[title="Insights"]').click({force:true});
  cy.wait(2000);

  cy.get(this.locators.primary_insights).click({force:true});
  cy.wait(2000);

  cy.get(this.locators.filterbutton).click({force:true});
  cy.wait(2000);

  // Expand Product Accordion if collapsed
  cy.get('#accordion-product .panel-heading .btn')
    .click({force:true});

  cy.wait(2000);

  // Product Type
  cy.get("#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(1) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input")
    .click({force:true});

  cy.wait(2000);

  cy.get('.ng-option').then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length);
    cy.wrap($options[randomIndex]).click({force:true});
  });

  // Product Category
  cy.get("#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(2) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input")
    .click({force:true});

  cy.wait(2000);

  cy.get('.ng-option').then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length);
    cy.wrap($options[randomIndex]).click({force:true});
  });

  // Product Name
  cy.get("#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(3) > .form-ng-select > .ng-select-container")
    .click({force:true});

  cy.wait(2000);

  cy.get('.ng-option').then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length);
    cy.wrap($options[randomIndex]).click({force:true});
  });

}

   
   TC_Ins_032(){
      cy.get('[title="Insights"]').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.primary_insights).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.filterbutton).click({force:true});
  cy.wait(2000);
  cy.get('#accordion-product > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click({force:true});
      cy.wait(2000);
      cy.get("#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(2) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input").click({force:true});
      cy.wait(4000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      cy.wait(2000);
      cy.get("#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(3) > .form-ng-select > .ng-select-container").click({force:true});
      cy.wait(4000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });


    }


     TC_Ins_033(){
        cy.get('[title="Insights"]').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.primary_insights).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.filterbutton).click({force:true});
  cy.wait(2000);
  cy.get('#accordion-geography > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click({force: true});
    cy.wait(1000);
    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > :nth-child(1) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click({force:true});
    cy.wait(1000);
     cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(2) > .form-ng-select > .ng-select-container').click({force:true});
    cy.wait(1000);
     cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(3) > .form-ng-select > .ng-select-container').click({force:true});
    cy.wait(1000);
     cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });cy.get(':nth-child(4) > .form-ng-select > .ng-select-container').click({force:true});
    cy.wait(1000);
     cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      cy.get(':nth-child(5) > .form-ng-select > .ng-select-container').click({force:true});
    cy.wait(1000);
     cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
   


     }

       TC_Ins_034(){

          cy.get('[title="Insights"]').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.primary_insights).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.filterbutton).click({force:true});
  cy.wait(2000);
  cy.get('#accordion-bucket > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-bucket > .panel > .panel-collapse > .panel-body > form.ng-pristine > :nth-child(1) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
     cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });

      cy.get('#accordion-bucket > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(2) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
      cy.wait(1000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });

       }

      TC_Ins_035(){

        cy.get('[title="Insights"]').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.secondary_insights).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.filterbutton).click({force:true});
  cy.wait(2000);
  cy.get('#accordion-product > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click({force:true});
    cy.wait(1000);
    cy.get('#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > :nth-child(1) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click({force:true});
    cy.wait(4000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(3000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      cy.wait(2000);
      cy.get("#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(2) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input").click({force:true});
      cy.wait(4000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      cy.wait(2000);
      cy.get("#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(3) > .form-ng-select > .ng-select-container").click({force:true});
      cy.wait(4000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });


  }

   TC_Ins_036(){

     cy.get('[title="Insights"]').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.secondary_insights).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.filterbutton).click({force:true});
  cy.wait(2000);
 cy.get('#accordion-product > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click({force:true});
      cy.wait(2000);
      cy.get("#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(2) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input").click({force:true});
      cy.wait(4000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      cy.wait(2000);
      cy.get("#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(3) > .form-ng-select > .ng-select-container").click({force:true});
      cy.wait(4000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });


   }

     TC_Ins_037(){
       cy.get('[title="Insights"]').click({ force: true });
cy.wait(2000);

cy.get(this.locators.secondary_insights).click({ force: true });
cy.wait(2000);

cy.get(this.locators.filterbutton).click({ force: true });
cy.wait(2000);

cy.get('#accordion-geography > .panel > .panel-heading .btn')
  .click({ force: true });
cy.wait(1000);

function selectRandom() {
  cy.get('.ng-dropdown-panel:visible').first().should('be.visible')
    .within(() => {
      cy.get('.ng-option').then($options => {
        const count = $options.length;
        const randomIndex = Math.floor(Math.random() * count);
        cy.wrap($options[randomIndex]).click({ force: true });
      });
    });
}
cy.get('#accordion-geography .panel-body input').eq(0)
  .click({ force: true });
cy.wait(1000);
selectRandom();
cy.get('#accordion-geography .panel-body .ng-select-container').eq(1)
  .click({ force: true });
cy.wait(1000);
selectRandom();
cy.get('#accordion-geography .panel-body .ng-select-container').eq(2)
  .click({ force: true });
cy.wait(1000);
selectRandom();
cy.get('#accordion-geography .panel-body .ng-select-container').eq(3)
  .click({ force: true });
cy.wait(1000);
selectRandom();
cy.get('#accordion-geography .panel-body .ng-select-container').eq(4)
  .click({ force: true });
cy.wait(1000);
selectRandom();


     }
  TC_Ins_038(){
      cy.get('[title="Insights"]').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.secondary_insights).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.filterbutton).click({force:true});
  cy.wait(2000);
    cy.get('#accordion-bucket > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click({force: true});
    cy.wait(1000);
    cy.get('#accordion-bucket > .panel > .panel-collapse > .panel-body > form.ng-pristine > :nth-child(1) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click({force: true});
    cy.wait(1000);
     cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });

      cy.get('#accordion-bucket > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(2) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
      cy.wait(1000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
  

    }

     TC_Ins_039(){

      cy.get('[title="Insights"]').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Trail_Gap_Insights).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.filterbutton).click({force:true});
  cy.wait(2000);
  cy.get('#accordion-product > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click({force:true});
    cy.wait(1000);
    cy.get('#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > :nth-child(1) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click({force:true});
    cy.wait(4000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(3000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      cy.wait(2000);
      cy.get("#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(2) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input").click({force:true});
      cy.wait(4000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      cy.wait(2000);
      cy.get("#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(3) > .form-ng-select > .ng-select-container").click({force:true});
      cy.wait(4000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });

     }
 TC_Ins_040(){
  cy.get('[title="Insights"]').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Trail_Gap_Insights).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.filterbutton).click({force:true});
  cy.wait(2000);
  cy.get('#accordion-product > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click({force:true});
      cy.wait(2000);
      cy.get("#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(2) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input").click({force:true});
      cy.wait(4000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      cy.wait(2000);
      cy.get("#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(3) > .form-ng-select > .ng-select-container").click({force:true});
      cy.wait(4000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });

    }

       TC_Ins_041(){
  cy.get('[title="Insights"]').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Trail_Gap_Insights).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.filterbutton).click({force:true});
  cy.wait(2000);
  cy.get('#accordion-geography > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click({force: true});
    cy.wait(1000);
    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > :nth-child(1) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click({force:true});
    cy.wait(1000);
     cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(2) > .form-ng-select > .ng-select-container').click({force:true});
    cy.wait(1000);
     cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(3) > .form-ng-select > .ng-select-container').click({force:true});
    cy.wait(1000);
     cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });cy.get(':nth-child(4) > .form-ng-select > .ng-select-container').click({force:true});
    cy.wait(1000);
     cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      cy.get(':nth-child(5) > .form-ng-select > .ng-select-container').click({force:true});
    cy.wait(1000);
     cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
   
  

 }

 TC_Ins_042(){
     cy.get('[title="Insights"]').click({force:true});
         cy.wait(2000);
         cy.get(this.locators.Trail_Gap_Insights).click({force:true});
         cy.wait(2000);
         cy.get(this.locators.filterbutton).click({force:true});
         cy.wait(2000);
         cy.get('#accordion-bucket > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-bucket > .panel > .panel-collapse > .panel-body > form.ng-pristine > :nth-child(1) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
     cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      cy.wait(2000);
      cy.get('#accordion-bucket > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(2) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
      cy.wait(1000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
  

 }


 TC_Ins_043(){
 cy.get('[title="Insights"]').click({force:true});
         cy.wait(2000);
         cy.get(this.locators.Accountvsallocated).click({force:true});
         cy.wait(2000);
         cy.get(this.locators.filterbutton).click({force:true});
         cy.wait(2000);
         cy.get('#accordion-product > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click({force:true});
    cy.wait(1000);
    cy.get('#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > :nth-child(1) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click({force:true});
    cy.wait(4000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(3000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      cy.wait(2000);
      cy.get("#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(2) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input").click({force:true});
      cy.wait(4000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      cy.wait(2000);
      cy.get("#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(3) > .form-ng-select > .ng-select-container").click({force:true});
      cy.wait(4000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });



      }

       TC_Ins_044(){
         cy.get('[title="Insights"]').click({force:true});
         cy.wait(2000);
         cy.get(this.locators.Accountvsallocated).click({force:true});
         cy.wait(2000);
         cy.get(this.locators.filterbutton).click({force:true});
         cy.wait(2000);
       cy.get('#accordion-product > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click({force:true});
      cy.wait(2000);
      cy.get("#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(2) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input").click({force:true});
      cy.wait(4000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      cy.wait(2000);
      cy.get("#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(3) > .form-ng-select > .ng-select-container").click({force:true});
      cy.wait(4000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });


      }

       TC_Ins_045(){
cy.get('[title="Insights"]').click({ force: true });
cy.get(this.locators.Accountvsallocated).click({ force: true });
cy.get(this.locators.filterbutton).click({ force: true });
cy.get('#accordion-geography .accordion-toggle .btn').click({ force: true });
const selectRandomOption = () => {
  cy.get('.ng-dropdown-panel:visible').first().should('be.visible')
    .within(() => {
      cy.get('.ng-option').then($options => {
        const count = $options.length;
        const randomIndex = Math.floor(Math.random() * count);
        cy.wrap($options[randomIndex]).click({ force: true });
      });
    });
};

cy.get('#accordion-geography form .form-ng-select').eq(0)
  .find('.ng-select-container')
  .click({ force: true });
selectRandomOption();
cy.get('#accordion-geography form .form-ng-select').eq(1)
  .find('.ng-select-container')
  .click({ force: true });
selectRandomOption();
cy.get('#accordion-geography form .form-ng-select').eq(2)
  .find('.ng-select-container')
  .click({ force: true });
selectRandomOption();
cy.get('#accordion-geography form .form-ng-select').eq(3)
  .find('.ng-select-container')
  .click({ force: true });
selectRandomOption();

cy.get('#accordion-geography form .form-ng-select').eq(4)
  .find('.ng-select-container')
  .click({ force: true });
selectRandomOption();


       }

         TC_Ins_046(){
         cy.get('[title="Insights"]').click({force:true});
         cy.wait(2000);
         cy.get(this.locators.Accountvsallocated).click({force:true});
         cy.wait(2000);
         cy.get(this.locators.filterbutton).click({force:true});
         cy.wait(2000);
     
          cy.get('#accordion-bucket > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-bucket > .panel > .panel-collapse > .panel-body > form.ng-pristine > :nth-child(1) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
     cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      cy.wait(2000);
      cy.get('#accordion-bucket > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(2) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
      cy.wait(1000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
  


    }
      TC_Ins_047(){
         cy.get('[title="Insights"]').click({force:true});
         cy.wait(2000);
         cy.contains('Money Movement Insights (Agency Staff)').click({force:true});
         cy.wait(2000);
         cy.get(this.locators.filterbutton).click({force:true});
         cy.wait(2000);
  cy.get('#accordion-product > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click({force:true});
    cy.wait(1000);
    cy.get('#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > :nth-child(1) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click({force:true});
    cy.wait(4000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(3000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      cy.wait(2000);
      cy.get("#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(2) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input").click({force:true});
      cy.wait(4000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      cy.wait(2000);
      cy.get("#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(3) > .form-ng-select > .ng-select-container").click({force:true});
      cy.wait(4000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });



      }

      TC_Ins_048(){
         cy.get('[title="Insights"]').click({force:true});
         cy.wait(2000);
         cy.contains('Money Movement Insights (Agency Staff)').click({force:true});
         cy.wait(2000);
         cy.get(this.locators.filterbutton).click({force:true});
         cy.wait(2000);
      cy.get('#accordion-product > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click({force:true});
      cy.wait(2000);
      cy.get("#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(2) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input").click({force:true});
      cy.wait(4000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      cy.wait(2000);
      cy.get("#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(3) > .form-ng-select > .ng-select-container").click({force:true});
      cy.wait(4000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });



      }

         TC_Ins_049(){
         cy.get('[title="Insights"]').click({force:true});
         cy.wait(2000);
         cy.contains('Money Movement Insights (Agency Staff)').click({force:true});
         cy.wait(2000);
         cy.get(this.locators.filterbutton).click({force:true});
         cy.wait(2000);
          cy.get('#accordion-geography > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click({force: true});
    cy.wait(1000);
    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > :nth-child(1) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click({force:true});
    cy.wait(1000);
     cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(2) > .form-ng-select > .ng-select-container').click({force:true});
    cy.wait(1000);
     cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(3) > .form-ng-select > .ng-select-container').click({force:true});
    cy.wait(1000);
     cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });cy.get(':nth-child(4) > .form-ng-select > .ng-select-container').click({force:true});
    cy.wait(1000);
     cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      cy.get(':nth-child(5) > .form-ng-select > .ng-select-container').click({force:true});
    cy.wait(1000);
     cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
   
}

TC_Ins_050(){
  cy.get('[title="Insights"]').click({force:true});
  cy.wait(2000);
  cy.contains('Money Movement Insights (Agency Staff)').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.filterbutton).click({force:true});
  cy.wait(2000);
  cy.get('#accordion-bucket > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-bucket > .panel > .panel-collapse > .panel-body > form.ng-pristine > :nth-child(1) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
     cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });

      cy.get('#accordion-bucket > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(2) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
      cy.wait(1000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });


    }

   TC_Ins_051(){
   cy.get('[title="Insights"]').click({force:true});
  cy.wait(2000);
 cy.contains('Money Movement Insights (Bank Staff)').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.filterbutton).click({force:true});
  cy.wait(2000);
  cy.get('#accordion-product > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click({force:true});
    cy.wait(1000);
    cy.get('#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > :nth-child(1) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click({force:true});
    cy.wait(4000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(3000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      cy.wait(2000);
      cy.get("#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(2) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input").click({force:true});
      cy.wait(4000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      cy.wait(2000);
      cy.get("#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(3) > .form-ng-select > .ng-select-container").click({force:true});
      cy.wait(4000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });



   }

    TC_Ins_052(){
   cy.get('[title="Insights"]').click({force:true});
  cy.wait(2000);
 cy.contains('Money Movement Insights (Bank Staff)').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.filterbutton).click({force:true});
  cy.wait(2000);
  cy.get('#accordion-product > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click({force:true});
   cy.wait(2000);
      cy.get("#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(2) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input").click({force:true});
      cy.wait(4000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      cy.wait(2000);
      cy.get("#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(3) > .form-ng-select > .ng-select-container").click({force:true});
      cy.wait(4000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });



   }

     TC_Ins_053(){
  cy.get('[title="Insights"]').click({force:true});
  cy.wait(2000);
 cy.contains('Money Movement Insights (Bank Staff)').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.filterbutton).click({force:true});
  cy.wait(2000);
   cy.get('#accordion-geography > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click({force: true});
    cy.wait(1000);
    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > :nth-child(1) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click({force:true});
    cy.wait(1000);
     cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(2) > .form-ng-select > .ng-select-container').click({force:true});
    cy.wait(1000);
     cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(3) > .form-ng-select > .ng-select-container').click({force:true});
    cy.wait(1000);
     cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });cy.get(':nth-child(4) > .form-ng-select > .ng-select-container').click({force:true});
    cy.wait(1000);
     cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      cy.get(':nth-child(5) > .form-ng-select > .ng-select-container').click({force:true});
    cy.wait(1000);
     cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
   


     }

     TC_Ins_054(){
  cy.get('[title="Insights"]').click({force:true});
  cy.wait(2000);
 cy.contains('Money Movement Insights (Bank Staff)').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.filterbutton).click({force:true});
  cy.wait(2000);
  cy.get('#accordion-bucket > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-bucket > .panel > .panel-collapse > .panel-body > form.ng-pristine > :nth-child(1) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
     cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });

      cy.get('#accordion-bucket > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(2) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
      cy.wait(1000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });




     }





    


    












}
 
export default InsightsPage;