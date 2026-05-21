class InsightsPage {
  constructor(locators) {
    this.locators = locators;
  }

PerformanceInsight_01(){
      cy.get('[title="Insights"]').click({force:true});
      cy.wait(2000);
        cy.get(this.locators.performanceInsight).click({force:true});
      cy.wait(2000);
        // Visibility validation
        cy.get(this.locators.cards).scrollIntoView()
          .should('be.visible');

        cy.get(this.locators.table_charts).scrollIntoView()
          .should('be.visible');

}

PerformanceInsight_02() {
        // Navigate to Performance Insight
       cy.get('[title="Insights"]').click({force:true});
       cy.wait(2000);
      cy.get(this.locators.performanceInsight).click({force:true});
      cy.wait(2000);
        // Verify pie chart is visible (3D render check via class / svg)
        cy.get(this.locators.pieChart).scrollIntoView()
          .should('be.visible')
        
        // Hover on each pie slice and validate tooltip
    //    cy.get(this.locators.pieSlices)
    //       .first()
    //       .should('exist')
    //       .trigger('mouseover', { force: true });

   cy.get('path.arc')
  .eq(2)
  .scrollIntoView()
  .should('exist')
  .click({ force: true });
cy.contains(/Performance Status/i).should('exist');
cy.contains(/Accounts/i).should('exist');

    }

PerformanceInsight_03() {
        // Navigate to Performance Insight
         cy.get('[title="Insights"]').click({force:true});
       cy.wait(2000);
      cy.get(this.locators.performanceInsight).click({force:true});
      cy.wait(2000);
        // Verify pie chart is visible (3D render check via class / svg)
        cy.get(this.locators.pieChart).scrollIntoView()
          .should('be.visible')
        cy.get('path.arc')
          .eq(3)
          .trigger('mouseover', { force: true });

        cy.contains('%').should('exist');
        cy.contains(/Performance Status/i).should('exist');
        cy.contains(/Accounts/i).should('exist');
        cy.contains(/NaN/i).should('not.be.visible');

        // Hover AGAIN on same slice
        cy.get('path.arc')
          .eq(2)
          .trigger('mouseover', { force: true });

        cy.contains('%').should('exist');
        cy.contains(/NaN/i).should('not.be.visible');

        // Hover a DIFFERENT slice
        cy.get('path.arc')
          .eq(3)
          .trigger('mouseover', { force: true });

        cy.contains('%').should('exist');
        cy.contains(/Performance Status/i).should('exist');
        cy.contains(/Accounts/i).should('exist');
        cy.contains(/NaN/i).should('not.be.visible');
    }


    PerformanceInsight_04() {
        // Navigate to Performance Insight
      cy.get('[title="Insights"]').click({force:true});
      cy.wait(2000);
      cy.get(this.locators.performanceInsight).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.filter).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.expand_all).click({force:true});
      cy.wait(2000);
      const filterSections = [
  'Metric',
  'Performance Status',
  'Field Primary',
  'Tele-Calling Primary',
  'Field Secondary',
  'Tele-Calling Secondary',
  'Product Group',
  'Product',
  'Sub Product',
  'Current Bucket',
  'BOM Bucket',
  'Country',
  'Region',
  'State',
  'City',
  'Branch'
];

filterSections.forEach(section => {
  cy.contains(section)
    .should('exist')
    .scrollIntoView();
});
    } 
  PerformanceInsight_05(){
      cy.get('[title="Insights"]').click({force:true});
      cy.wait(2000);
      cy.get(this.locators.performanceInsight).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.filter).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.expand_all).click({force:true});
      cy.wait(2000);
  
       cy.get('#accordion-agency > .panel > .panel-collapse > .panel-body > form.ng-pristine > :nth-child(1) > .form-ng-select > .ng-select-container').click({force:true});
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
  

  cy.get('#accordion-agency > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(2) > .form-ng-select > .ng-select-container').click({force:true});
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


      cy.get('.panel-body > .ng-touched > :nth-child(3) > .form-ng-select > .ng-select-container').click({force:true});
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

      cy.get('.panel-body > .ng-touched > :nth-child(4) > .form-ng-select > .ng-select-container').click({force:true});
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
      cy.get('#accordion-product > .panel > .panel-collapse > .panel-body > .ng-touched > .ng-untouched.ng-star-inserted > :nth-child(1) > .form-ng-select > .ng-select-container').click({force:true});
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
      cy.get("#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > .ng-valid.ng-star-inserted > :nth-child(2) > .form-ng-select > .ng-select-container").click({force:true});
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
      cy.get("#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > .ng-valid.ng-star-inserted > :nth-child(3) > .form-ng-select > .ng-select-container").click({force:true});
      cy.wait(4000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });

    cy.wait(1000);
    cy.get('.ng-untouched.ng-star-inserted > :nth-child(1) > .form-ng-select > .ng-select-container').click({force:true});
     cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > form.ng-valid > .ng-valid.ng-star-inserted > :nth-child(2) > .form-ng-select > .ng-select-container').click({force:true});
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
      cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > form.ng-valid > .ng-valid.ng-star-inserted > :nth-child(3) > .form-ng-select > .ng-select-container').click({force:true});
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
      cy.get('.ng-valid.ng-star-inserted > :nth-child(4) > .form-ng-select > .ng-select-container').click({force:true});
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
    
     
    cy.get('#accordion-bucket > .panel > .panel-collapse > .panel-body > .ng-touched > :nth-child(1) > .form-ng-select > .ng-select-container').click({force:true});
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

      cy.get('#accordion-bucket > .panel > .panel-collapse > .panel-body > .ng-touched > :nth-child(2) > .form-ng-select > .ng-select-container').click({force:true});
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

PerformanceInsight_06() {

cy.get('[title="Insights"]').click({ force: true });
cy.wait(2000);

cy.get(this.locators.performanceInsight).click({ force: true });
cy.wait(2000);

cy.get(this.locators.filter).click({ force: true });
cy.wait(2000);

cy.get(this.locators.expand_all).click({ force: true });
cy.wait(2000);

// ===============================
// Field Primary (Agency Name)
// ===============================
cy.get('#accordion-agency .form-ng-select')
  .first()
  .scrollIntoView({ force: true })
  .find('.ng-select-container')
  .should('exist')
  .invoke('text')
  .then(text => {
    expect(text.trim()).to.not.equal('');
  });

// Try to edit (should NOT open)
cy.get('#accordion-agency .form-ng-select')
  .first()
  .click({ force: true });

// Dropdown must NOT appear
cy.get('.ng-dropdown-panel').should('not.exist');


// ===============================
// Tele-calling Primary
// ===============================
cy.get('#accordion-agency .form-ng-select')
  .eq(1)
  .scrollIntoView({ force: true })
  .find('.ng-select-container')
  .should('exist')
  .invoke('text')
  .then(text => {
    expect(text.trim()).to.not.equal('');
  });

// Try to edit (should NOT open)
cy.get('#accordion-agency .form-ng-select')
  .eq(1)
  .click({ force: true });

// Dropdown must NOT appear
cy.get('.ng-dropdown-panel').should('not.exist');
}

PerformanceInsight_07() {


cy.get('[title="Insights"]').click({ force: true });

  cy.contains("Performance Insight").scrollIntoView().click({force:true});
cy.wait(3000);

    cy.get(this.locators.filter)
      .should('exist')
      .click({ force: true });

    cy.get(this.locators.expand_all)
      .should('exist')
      .click({ force: true });


    // =============================
    // Attempt to edit Field Primary
    // =============================
    cy.get('#accordion-agency .form-ng-select')
      .first()
      .scrollIntoView({ force: true })
      .click({ force: true });

    // ❌ Dropdown should NOT open
    cy.get('.ng-dropdown-panel').should('not.exist');


    // =============================
    // Attempt to edit Tele-calling Primary
    // =============================
    cy.get('#accordion-agency .form-ng-select')
      .eq(1)
      .scrollIntoView({ force: true })
      .click({ force: true });

    // ❌ Dropdown should NOT open
    cy.get('.ng-dropdown-panel').should('not.exist');


}

PerformanceInsight_08(){
    
cy.get('[title="Insights"]').click({ force: true });
cy.wait(2000);
  cy.contains("Performance Insight").scrollIntoView().click({force:true});
cy.wait(3000);
cy.wait(2000);
    cy.get(this.locators.filter)
      .should('exist')
      .click({ force: true });
cy.wait(2000);
    cy.get(this.locators.expand_all)
      .should('exist')
      .click({ force: true });
cy.wait(2000);
    cy.get('form.ng-pristine > :nth-child(3) > .form-ng-select > .ng-select-container')
    .scrollIntoView({ force: true })
    .click({ force: true });
cy.wait(2000);
  cy.get('.ng-dropdown-panel')
    .should('exist')
    .within(() => {
      cy.get('.ng-option')
        .should('have.length.greaterThan', 0)
        .each(($option) => {
          cy.wrap($option)
            .invoke('text')
            .should('not.be.empty'); // users from same agency only
        });
    });

  // Close dropdown
  cy.get('body').click(0, 0);


  // ============================
  // Tele-calling Secondary
  // ============================
  cy.get('form.ng-pristine > :nth-child(4) > .form-ng-select > .ng-select-container')
    .scrollIntoView({ force: true })
    .click({ force: true });

  cy.get('.ng-dropdown-panel')
    .should('exist')
    .within(() => {
      cy.get('.ng-option')
        .should('have.length.greaterThan', 0)
        .each(($option) => {
          cy.wrap($option)
            .invoke('text')
            .should('not.be.empty');
        });
    });
}

PerformanceInsight_09() {
  cy.get('[title="Insights"]').click({ force: true });
cy.wait(2000);
  cy.contains("Performance Insight").scrollIntoView().click({force:true});
cy.wait(3000);
cy.wait(2000);
    cy.get(this.locators.filter)
      .should('exist')
      .click({ force: true });
cy.wait(2000);
    cy.get(this.locators.expand_all)
      .should('exist')
      .click({ force: true });
cy.wait(2000);

  const crossAgencyKeywords = [
    'Other Agency',
    'External',
    'Third Party',
    'XYZ Agency'   // replace with any known other-agency keyword
  ];

  // ============================
  // Field Secondary
  // ============================
  cy.get('form.ng-pristine > :nth-child(3) > .form-ng-select > .ng-select-container')
    .scrollIntoView({ force: true })
    .click({ force: true });

  cy.get('.ng-dropdown-panel')
    .should('exist')
    .within(() => {
      crossAgencyKeywords.forEach(keyword => {
        cy.contains(keyword).should('not.exist');
      });
    });

  // Close dropdown
  cy.get('body').click(0, 0);


  // ============================
  // Tele-calling Secondary
  // ============================
  cy.get('form.ng-pristine > :nth-child(4) > .form-ng-select > .ng-select-container')
    .scrollIntoView({ force: true })
    .click({ force: true });

  cy.get('.ng-dropdown-panel')
    .should('exist')
    .within(() => {
      crossAgencyKeywords.forEach(keyword => {
        cy.contains(keyword).should('not.exist');
      });
    });
}

PerformanceInsight_010() {
  // Navigate to Insights
    cy.get('[title="Insights"]').click({ force: true });
cy.wait(2000);
  cy.contains("Performance Insight").scrollIntoView().click({force:true});
cy.wait(3000);
cy.wait(2000);
    cy.get(this.locators.filter)
      .should('exist')
      .click({ force: true });
cy.wait(2000);
    cy.get(this.locators.expand_all)
      .should('exist')
      .click({ force: true });
cy.wait(2000);
cy.get(this.locators.peer_to_peer).click({force:true});
cy.wait(2000);
 

  // Select multiple options AT ONCE (multi-select)
cy.get('#accordion-performanceStatus > .panel > .panel-collapse > .panel-body > form.ng-valid > .form-control-group > .form-ng-select > .ng-select-container')
  .should('be.visible')
  .click({ force: true });

// Select NORM option
cy.get('.ng-dropdown-panel')
  .should('be.visible')
  .within(() => {
    cy.contains('.ng-option', 'NORM').click({ force: true });
  });

   cy.get('#accordion-performanceStatus > .panel > .panel-collapse > .panel-body > form.ng-valid > .form-control-group > .form-ng-select > .ng-select-container')
  .should('be.visible')
  .click({ force: true });

// Select NORM option
cy.get('.ng-dropdown-panel')
  .should('be.visible')
  .within(() => {
    cy.contains('.ng-option', 'RB').click({ force: true });
  });

 cy.get('#accordion-performanceStatus > .panel > .panel-collapse > .panel-body > form.ng-valid > .form-control-group > .form-ng-select > .ng-select-container')
  .should('be.visible')
  .click({ force: true });

// Select NORM option
cy.get('.ng-dropdown-panel')
  .should('be.visible')
  .within(() => {
    cy.contains('.ng-option', 'STAB').click({ force: true });
  });

cy.contains('Top 10 Field Agent by Resolution').scrollIntoView()
  .should('be.visible');

cy.wait(2000);
cy.get(':nth-child(2) > .card-header > .d-flex > .btn-group > [btnradio="bottom"]').click({force:true});





}
PerformanceInsight_011(){
   cy.get('[title="Insights"]').click({ force: true });
cy.wait(2000);
  cy.contains("Performance Insight").scrollIntoView().click({force:true});
cy.wait(3000);
cy.wait(2000);
    cy.get(this.locators.filter)
      .should('exist')
      .click({ force: true });
cy.wait(2000);
    cy.get(this.locators.expand_all)
      .should('exist')
      .click({ force: true });
cy.wait(2000);
cy.get(this.locators.Detailed_analysis).click({force:true});
cy.wait(2000);
const columns = [
  'Account Number',
  'Product Group',
  'Product',
  'Sub Product',
  'Country',
  'Region',
  'State',
  'City',
  'Branch',
  'BOM Bucket',
  'Current Bucket'
];

columns.forEach((column) => {
  cy.contains('th', column)
    .scrollIntoView()
    .should('exist');
});

// Click settings (gear) button
cy.get(this.locators.settings_button)
  .should('be.visible')
  .click({ force: true });

// Verify options inside settings panel
cy.get('bs-dropdown-container > div.dropdown > ul.dropdown-menu')   // 🔁 replace with actual container selector
  .should('be.visible')
  .within(() => {

    const gearOptions = [
      'Performance Status',
      'Rollback or Rollforward Or Normalized',
      'BOM POS',
      'Current POS'
    ];

    gearOptions.forEach((option) => {
      cy.contains(option)
        .scrollIntoView()
        .should('be.visible');
    });
  });

}
PerformanceInsight_012(){
   cy.get('[title="Insights"]').click({ force: true });
cy.wait(2000);
  cy.contains("Performance Insight").scrollIntoView().click({force:true});
cy.wait(3000);
cy.wait(2000);
    cy.get(this.locators.filter)
      .should('exist')
      .click({ force: true });
cy.wait(2000);
    cy.get(this.locators.expand_all)
      .should('exist')
      .click({ force: true });
cy.get('#accordion-performanceStatus > .panel > .panel-collapse > .panel-body > form.ng-valid > .form-control-group > .form-ng-select > .ng-select-container').click({force:true});
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
PerformanceInsight_013(){
  cy.get('[title="Insights"]').click({ force: true });
cy.wait(2000);
  cy.contains("Performance Insight").scrollIntoView().click({force:true});
cy.wait(3000);
cy.wait(2000);
    cy.get(this.locators.filter)
      .should('exist')
      .click({ force: true });
cy.wait(2000);
    cy.get(this.locators.expand_all)
      .should('exist')
      .click({ force: true });
cy.get('#accordion-agency > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > .form-ng-select > .ng-select-container').click({force:true});
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
cy.get('#accordion-agency > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(2) > .form-ng-select > .ng-select-container').click({force:true});
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
 cy.get('form.ng-valid > :nth-child(3) > .form-ng-select > .ng-select-container').click({force:true});  
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
  cy.get('form.ng-valid > :nth-child(4) > .form-ng-select > .ng-select-container').click({force:true});
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

PerformanceInsight_014(){
   cy.get('[title="Insights"]').click({ force: true });
cy.wait(2000);
  cy.contains("Performance Insight").scrollIntoView().click({force:true});
cy.wait(3000);
cy.wait(2000);
    cy.get(this.locators.filter)
      .should('exist')
      .click({ force: true });
cy.wait(2000);
    cy.get(this.locators.expand_all)
      .should('exist')
      .click({ force: true });
cy.wait(2000);
cy.get('#accordion-bucket > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > .form-ng-select > .ng-select-container').click({force:true});
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
cy.get('#accordion-bucket > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(2) > .form-ng-select > .ng-select-container').click({force:true});
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
PerformanceInsight_015(){
   cy.get('[title="Insights"]').click({ force: true });
cy.wait(2000);
  cy.contains("Performance Insight").scrollIntoView().click({force:true});
cy.wait(3000);
cy.wait(2000);
    cy.get(this.locators.filter)
      .should('exist')
      .click({ force: true });
cy.wait(2000);
    cy.get(this.locators.expand_all)
      .should('exist')
      .click({ force: true });
cy.wait(2000);
cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > form.ng-untouched > .ng-untouched.ng-star-inserted > :nth-child(1) > .form-ng-select > .ng-select-container').click({force:true});
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
cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > form.ng-valid > .ng-valid.ng-star-inserted > :nth-child(2) > .form-ng-select > .ng-select-container').click({force:true});   
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
cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > form.ng-valid > .ng-valid.ng-star-inserted > :nth-child(3) > .form-ng-select > .ng-select-container').click({force:true});
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
cy.get('.ng-valid.ng-star-inserted > :nth-child(4) > .form-ng-select > .ng-select-container').click({force:true});
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
PerformanceInsight_016(){
  cy.get('[title="Insights"]').click({ force: true });
cy.wait(2000);
  cy.contains("Performance Insight").scrollIntoView().click({force:true});
cy.wait(3000);
cy.wait(2000);
    cy.get(this.locators.filter)
      .should('exist')
      .click({ force: true });
cy.wait(2000);
    cy.get(this.locators.expand_all)
      .should('exist')
      .click({ force: true });
cy.wait(2000);
    cy.get('#accordion-metric > .panel > .panel-collapse > .panel-body > form.ng-valid > .form-control-group > .form-ng-select > .ng-select-container')
  .should('be.visible')
  .click({ force: true });
cy.get('.ng-dropdown-panel')
  .should('be.visible')
  .within(() => {
    cy.contains('.ng-option', 'Amount').click({ force: true });
  });
cy.get('#accordion-performanceStatus > .panel > .panel-collapse > .panel-body > form.ng-valid > .form-control-group > .form-ng-select > .ng-select-container').click({force:true});
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
PerformanceInsight_017(){
  cy.get('[title="Insights"]').click({ force: true });
cy.wait(2000);
  cy.contains("Performance Insight").scrollIntoView().click({force:true});
cy.wait(3000);
cy.wait(2000);
    cy.get(this.locators.filter)
      .should('exist')
      .click({ force: true });
cy.wait(2000);
    cy.get(this.locators.expand_all)
      .should('exist')
      .click({ force: true });
cy.wait(2000);
    cy.get('#accordion-metric > .panel > .panel-collapse > .panel-body > form.ng-valid > .form-control-group > .form-ng-select > .ng-select-container')
  .should('be.visible')
  .click({ force: true });
cy.get('.ng-dropdown-panel')
  .should('be.visible')
  .within(() => {
    cy.contains('.ng-option', 'Amount').click({ force: true });
  });
  cy.get('#accordion-agency > .panel > .panel-collapse > .panel-body > .ng-touched > :nth-child(1) > .form-ng-select > .ng-select-container').click({force:true});
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
cy.get('#accordion-agency > .panel > .panel-collapse > .panel-body > .ng-touched > :nth-child(2) > .form-ng-select > .ng-select-container').click({force:true});
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
 cy.get('form.ng-valid > :nth-child(3) > .form-ng-select > .ng-select-container').click({force:true});  
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
  cy.get('form.ng-valid > :nth-child(4) > .form-ng-select > .ng-select-container').click({force:true});
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

PerformanceInsight_018(){
  cy.get('[title="Insights"]').click({ force: true });
cy.wait(2000);
  cy.contains("Performance Insight").scrollIntoView().click({force:true});
cy.wait(3000);
cy.wait(2000);
    cy.get(this.locators.filter)
      .should('exist')
      .click({ force: true });
cy.wait(2000);
    cy.get(this.locators.expand_all)
      .should('exist')
      .click({ force: true });
cy.wait(2000);
    cy.get('#accordion-metric > .panel > .panel-collapse > .panel-body > form.ng-valid > .form-control-group > .form-ng-select > .ng-select-container')
  .should('be.visible')
  .click({ force: true });
cy.get('.ng-dropdown-panel')
  .should('be.visible')
  .within(() => {
    cy.contains('.ng-option', 'Amount').click({ force: true });
  });

cy.get('#accordion-bucket > .panel > .panel-collapse > .panel-body > .ng-touched > :nth-child(1) > .form-ng-select > .ng-select-container').click({force:true});
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
cy.get('#accordion-bucket > .panel > .panel-collapse > .panel-body > .ng-touched > :nth-child(2) > .form-ng-select > .ng-select-container').click({force:true});
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
PerformanceInsight_019(){
   cy.get('[title="Insights"]').click({ force: true });
cy.wait(2000);
  cy.contains("Performance Insight").scrollIntoView().click({force:true});
cy.wait(3000);
cy.wait(2000);
    cy.get(this.locators.filter)
      .should('exist')
      .click({ force: true });
cy.wait(2000);
    cy.get(this.locators.expand_all)
      .should('exist')
      .click({ force: true });
cy.wait(2000);
 cy.get('#accordion-metric > .panel > .panel-collapse > .panel-body > form.ng-valid > .form-control-group > .form-ng-select > .ng-select-container')
  .should('be.visible')
  .click({ force: true });
cy.get('.ng-dropdown-panel')
  .should('be.visible')
  .within(() => {
    cy.contains('.ng-option', 'Amount').click({ force: true });
  });
  cy.wait(2000);
cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > .ng-touched > .ng-untouched.ng-star-inserted > :nth-child(1) > .form-ng-select > .ng-select-container').click({force:true});
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
cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > form.ng-valid > .ng-valid.ng-star-inserted > :nth-child(2) > .form-ng-select > .ng-select-container').click({force:true});   
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
cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > form.ng-valid > .ng-valid.ng-star-inserted > :nth-child(3) > .form-ng-select > .ng-select-container').click({force:true});
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
cy.get('.ng-valid.ng-star-inserted > :nth-child(4) > .form-ng-select > .ng-select-container').click({force:true});
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
PerformanceInsight_020(){
   cy.get('[title="Insights"]').click({ force: true });
cy.wait(2000);
  cy.contains("Performance Insight").scrollIntoView().click({force:true});
cy.wait(3000);
cy.wait(2000);
    cy.get(this.locators.filter)
      .should('exist')
      .click({ force: true });
cy.wait(2000);
    cy.get(this.locators.expand_all)
      .should('exist')
      .click({ force: true });
cy.wait(2000);
cy.get('#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-untouched > .ng-untouched.ng-star-inserted > :nth-child(1) > .form-ng-select > .ng-select-container').click({force:true});
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
      cy.get("#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > .ng-valid.ng-star-inserted > :nth-child(2) > .form-ng-select > .ng-select-container").click({force:true});
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
      cy.get("#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > .ng-valid.ng-star-inserted > :nth-child(3) > .form-ng-select > .ng-select-container").click({force:true});
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

    PerformanceInsight_021(){
   cy.get('[title="Insights"]').click({ force: true });
cy.wait(2000);
  cy.contains("Performance Insight").scrollIntoView().click({force:true});
cy.wait(3000);
cy.wait(2000);
    cy.get(this.locators.filter)
      .should('exist')
      .click({ force: true });
cy.wait(2000);
    cy.get(this.locators.expand_all)
      .should('exist')
      .click({ force: true });
cy.wait(2000);
cy.get('#accordion-metric > .panel > .panel-collapse > .panel-body > form.ng-valid > .form-control-group > .form-ng-select > .ng-select-container')
  .should('be.visible')
  .click({ force: true });
cy.get('.ng-dropdown-panel')
  .should('be.visible')
  .within(() => {
    cy.contains('.ng-option', 'Amount').click({ force: true });
  });
  cy.wait(2000);
cy.get('#accordion-product > .panel > .panel-collapse > .panel-body > .ng-touched > .ng-untouched.ng-star-inserted > :nth-child(1) > .form-ng-select > .ng-select-container').click({force:true});
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
      cy.get("#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > .ng-valid.ng-star-inserted > :nth-child(2) > .form-ng-select > .ng-select-container").click({force:true});
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
      cy.get("#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > .ng-valid.ng-star-inserted > :nth-child(3) > .form-ng-select > .ng-select-container").click({force:true});
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
   PerformanceInsight_022() {

  // -----------------------------
  // Navigate to Performance Insight
  // -----------------------------
  cy.get('[title="Insights"]').click({ force: true });
  cy.wait(2000);
  
  cy.get(this.locators.performanceInsight)
    .should('exist')
    .click({ force: true });

  // -----------------------------
  // Open Detailed Analysis
  // -----------------------------
  cy.contains('button', 'Detailed Analysis')
    .should('exist')
    .click({ force: true });
    
  cy.get(this.locators.filter)
    .should('exist')
    .click({ force: true });
  cy.wait(2000);
  
  cy.get(this.locators.expand_all)
    .should('exist')
    .click({ force: true });
  cy.wait(2000);

  // -----------------------------
  // Select Metric: Amount
  // -----------------------------
  cy.get('#accordion-metric > .panel > .panel-collapse > .panel-body > form.ng-valid > .form-control-group > .form-ng-select > .ng-select-container')
    .should('be.visible')
    .click({ force: true });
    
  cy.get('.ng-dropdown-panel')
    .should('be.visible')
    .within(() => {
      cy.contains('.ng-option', 'Amount').click({ force: true });
    });
  cy.wait(2000);

  // -----------------------------
  // Select Product filters (1st dropdown)
  // -----------------------------
  cy.get('#accordion-product > .panel > .panel-collapse > .panel-body > .ng-touched > .ng-untouched.ng-star-inserted > :nth-child(1) > .form-ng-select > .ng-select-container')
    .click({ force: true });
  cy.wait(2000);
  
  cy.get('.ng-dropdown-panel')
    .should('be.visible')
    .within(() => {
      cy.get('.ng-option').then($options => {
        const count = $options.length;
        const randomIndex = Math.floor(Math.random() * count);
        cy.wrap($options[randomIndex]).click({ force: true });
      });
    });
  cy.wait(2000);

  // -----------------------------
  // Select Product filters (2nd dropdown)
  // -----------------------------
  cy.get("#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > .ng-valid.ng-star-inserted > :nth-child(2) > .form-ng-select > .ng-select-container")
    .click({ force: true });
  cy.wait(2000);
  
  cy.get('.ng-dropdown-panel')
    .should('be.visible')
    .within(() => {
      cy.get('.ng-option').then($options => {
        const count = $options.length;
        const randomIndex = Math.floor(Math.random() * count);
        cy.wrap($options[randomIndex]).click({ force: true });
      });
    });
  cy.wait(2000);

  // -----------------------------
  // Select Product filters (3rd dropdown)
  // -----------------------------
  cy.get("#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > .ng-valid.ng-star-inserted > :nth-child(3) > .form-ng-select > .ng-select-container")
    .click({ force: true });
  cy.wait(2000);
  
  cy.get('.ng-dropdown-panel')
    .should('be.visible')
    .within(() => {
      cy.get('.ng-option').then($options => {
        const count = $options.length;
        const randomIndex = Math.floor(Math.random() * count);
        cy.wrap($options[randomIndex]).click({ force: true });
      });
    });
  cy.wait(2000);

  // -----------------------------
  // Verify default table columns
  // -----------------------------
  const baseColumns = [
    'Account Number',
    'Product Group',
    'Product',
    'Sub Product',
    'Country',
    'Region',
    'State',
    'City',
    'Branch',
    'BOM Bucket',
    'Current Bucket'
  ];

  baseColumns.forEach((column) => {
    cy.contains('th', column, { timeout: 10000 })
      .scrollIntoView()
      .should('exist');
  });

  // -----------------------------
  // Open Settings (Gear) dropdown and select all
  // -----------------------------
  cy.get("#loan-grid-column-filter-button")
    .should('be.visible')
    .click({force:true});
// Click all 4 dropdown items
cy.get('.dropdown-item > .flex-grow-1')
  .should('have.length', 4)
  .click({ multiple: true, force: true });
cy.wait(2000);
cy.get('#loan-grid-column-filter-button').click({force:true});
cy.wait(2000);
cy.get('#close-button').scrollIntoView().click({force:true});
  // -----------------------------
  // Verify additional columns are now visible
  // -----------------------------
  const additionalColumns = [
    'Performance Status',
    'Rollback or Rollforward Or Normalized',
    'BOM POS',
    'Current POS'
  ];

 const newColumns = [
  { index: 12, name: 'Performance Status' },
  { index: 13, name: 'Rollback or Rollforward Or Normalized' },
  { index: 14, name: 'BOM POS' },
  { index: 15, name: 'Current POS' }
];

newColumns.forEach((col) => {
  cy.get(`thead > tr > :nth-child(${col.index})`)
    .scrollIntoView()
    .should('be.visible')
    .and('contain.text', col.name);
});


}

 PerformanceInsight_023() {

  cy.get('[title="Insights"]').click({ force: true });
cy.wait(2000);
  cy.contains("Performance Insight").scrollIntoView().click({force:true});
cy.wait(3000);

  // -----------------------------
  // Open Detailed Analysis
  // -----------------------------
cy.contains('button', 'Detailed Analysis')
  .should('exist')
  .click({ force: true });
  cy.get(this.locators.filter)
      .should('exist')
      .click({ force: true });
cy.wait(2000);
    cy.get(this.locators.expand_all)
      .should('exist')
      .click({ force: true });
cy.wait(2000);
cy.get('#accordion-metric > .panel > .panel-collapse > .panel-body > form.ng-valid > .form-control-group > .form-ng-select > .ng-select-container')
  .should('be.visible')
  .click({ force: true });
cy.get('.ng-dropdown-panel')
  .should('be.visible')
  .within(() => {
    cy.contains('.ng-option', 'Amount').click({ force: true });
  });
  cy.wait(2000);
cy.get('#accordion-product > .panel > .panel-collapse > .panel-body > .ng-touched > .ng-untouched.ng-star-inserted > :nth-child(1) > .form-ng-select > .ng-select-container').click({force:true});
cy.get('.ng-dropdown-panel')
  .should('be.visible')
  .within(() => {
    cy.contains('.ng-option', 'Creditcard').click({ force: true });
  });
   
  
  cy.get(this.locators.settings_button)
    .should('be.visible')
    .click();

  // -----------------------------
  // Select ALL options from Settings
  // -----------------------------
  cy.get('bs-dropdown-container ul.dropdown-menu')
    .should('be.visible')
    .find('li')
    .each(($option) => {
      cy.wrap($option)
        .scrollIntoView()
        .click({ force: true });
    });
  cy.get(this.locators.settings_button).click({force:true});   
  cy.wait(2000);
  cy.get(this.locators.Download_button).click({force:true});

 }
 PerformanceInsight_024(){
  cy.get('[title="Insights"]').click({ force: true });
cy.wait(2000);
  cy.contains("Performance Insight").scrollIntoView().click({force:true});
cy.wait(3000);
cy.contains('Total').should('be.visible');
cy.contains('Resolution').should('be.visible');
cy.contains('Normalization').should('be.visible');
cy.contains('Roll Back').should('be.visible');
cy.contains('Stabilized').should('be.visible');
cy.contains('Roll Forward').should('be.visible');
cy.wait(2000);  
const sectionHeadings = [
  'Delinquency Movement Matrix',
  'Collection Performance Matrix',
  'Overall Collection Performance Matrix',
  'Resolved vs Unresolved by Bucket'
];

sectionHeadings.forEach((heading) => {
  cy.contains(heading, { timeout: 10000 })
    .scrollIntoView()
    .should('be.visible');
});

 }
PerformanceInsight_025(){
  cy.get('[title="Insights"]').click({ force: true });
cy.wait(2000);
  cy.contains("Performance Insight").scrollIntoView().click({force:true});
cy.wait(3000);
      cy.wait(2000);
      cy.get(this.locators.geography_tab).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.down_arrow).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.up_arrow).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.product_grp_down_arrow).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.product_grp_up_arrow).click({force:true});



}
PerformanceInsight_026(){
   cy.get('[title="Insights"]').click({ force: true });
cy.wait(2000);
  cy.contains("Performance Insight").scrollIntoView().click({force:true});
cy.wait(3000);
cy.wait(2000);
cy.get(':nth-child(3) > .nav-link').click({force:true});
cy.wait(2000);
  cy.get('div.card-header')
    .find('button.btn')
    .first()
    .scrollIntoView()
    .click({ force: true });
 
}



  }
export default InsightsPage;
   