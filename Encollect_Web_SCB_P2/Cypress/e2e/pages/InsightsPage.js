import { getLocators } from '../utils/locatorUtils';
import { getBaseUrl } from '../utils/configUtils';


class InsightsPage {
  constructor(locators) {
    this.locators = locators;
  }

  clickonInsights001() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonprimaryallocationinsights).click();
    cy.wait(5000);
    cy.get('a[class="nav-link active"] span').contains('Overview').should('be.visible');
    cy.wait(1000);
  }

  clickonInsights002() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonprimaryallocationinsights).click();
    cy.wait(5000);
    cy.get('a[class="nav-link active"] span').contains('Overview').should('be.visible');
    cy.wait(1000);
    cy.contains('Total Accounts').should('be.visible');
    cy.wait(1000);
    cy.contains('Total Allocated Accounts to Primary').should('be.visible');
    cy.wait(1000);
    cy.contains('Total Unallocated Accounts to Primary').should('be.visible');
    cy.wait(1000);
    cy.contains('Total Amount').should('be.visible');
    cy.wait(1000);
    cy.contains('Total Allocated Amount to Primary').should('be.visible');
    cy.wait(1000);
    cy.contains('Total Unallocated Amount to Primary').should('be.visible');
    cy.wait(1000);
  }

  clickonInsights003() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonprimaryallocationinsights).click();
    cy.wait(10000);
    cy.get('.inner-container').scrollTo('0%', '50%');
    cy.wait(1000);
    cy.get('g.arc-group path.arc[fill="rgb(213, 72, 72)"]').click({ force: true });
    cy.wait(1500);
    cy.get('.toast-title').contains('All charts are cross filtered by').should('be.visible');
    cy.get('.toast-message').contains('Status : ACCOUNT NOT ALLOCATED').should('be.visible');
    cy.wait(1000);
  }

  clickonInsights004() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonprimaryallocationinsights).click();
    cy.wait(10000);
    cy.get('.inner-container').scrollTo('0%', '50%');
    cy.wait(1000);
    cy.get('g.arc-group path.arc[fill="rgb(30, 141, 137)"]').click({ force: true });
    cy.wait(1500);
    cy.get('.toast-title').contains('All charts are cross filtered by').should('be.visible');
    cy.get('.toast-message').contains('Status : ACCOUNT ALLOCATED').should('be.visible');
    cy.wait(1000);
  }

  clickonInsights005() {
    cy.get(this.locators.clickoninsight).click({force: true} );
    cy.wait(1000);
    cy.get(this.locators.clickonprimaryallocationinsights).click({force: true} );
    cy.wait(10000);
    cy.get('.inner-container').scrollTo('0%', '40%');
    cy.wait(1000);
    cy.get(this.locators.resetcrossfilters).click({force: true} );
    cy.wait(1000);
  }

  clickonInsights006() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonprimaryallocationinsights).click();
    cy.wait(10000);
    cy.get(':nth-child(3) > .card-header > .d-flex > .btn-group > [btnradio="bottom"]').click();
    cy.get(2000);
  cy.contains('h3', 'Bottom 10 Field Primary by Accounts Allocated').scrollIntoView().should('be.visible');

    cy.wait(1000);

  }

  clickonInsights007() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonprimaryallocationinsights).click();
    cy.wait(10000);
    cy.get(':nth-child(4) > .card-header > .d-flex > .btn-group > [btnradio="bottom"]').click({force:true});
    cy.wait(1000);
    cy.contains('h3', 'Bottom 10 Owners by Accounts Unallocated').should('exist');
    cy.wait(1000);

  }

  clickonInsights008() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonprimaryallocationinsights).click();
    cy.wait(10000);
    cy.get(':nth-child(5) > .card-header > .d-flex > .btn-group > [btnradio="bottom"]').click({force:true});
    cy.wait(1000);
    cy.contains('h3','Bottom 10 Tele-Calling Primary by Accounts Allocated').should('exist');
    cy.wait(1000);

  }

  clickonInsights009() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonprimaryallocationinsights).click();
    cy.wait(10000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.clickonexpandall).click();
    cy.wait(1000);
    cy.get('.inner-container').scrollTo('top');
    cy.wait(1000);
    cy.get(this.locators.clickonclosebutton).click();
    cy.wait(1000);

  }

  clickonInsights010() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonprimaryallocationinsights).click();
    cy.wait(10000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('ng-select[formcontrolname="metrics"] .ng-arrow-wrapper').click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option').contains('Amount').click();
    cy.wait(5000);

  }

  clickonInsights011() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonprimaryallocationinsights).click();
    cy.wait(10000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.clickonbyagency).click();
    cy.wait(1000);
    cy.get('ng-select[formcontrolname="agency"]').then($el => {
      const isOpen = $el.hasClass('ng-select-opened');
      if (!isOpen) {
        cy.get('ng-select[formcontrolname="agency"] .ng-arrow-wrapper').click();
      }
    });
    cy.get('.ng-dropdown-panel .ng-option').then($options => {
      const count = $options.length;
      const randomIndex = Math.floor(Math.random() * count);
      cy.wrap($options[randomIndex]).click();
    });

    cy.get(
      '#accordion-agency > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(2) > .form-ng-select > .ng-select-container > .ng-arrow-wrapper'
    )
      .should('be.visible')
      .click();

    // Step 2: Wait for the new dropdown panel to appear and select a random option
    cy.get('.ng-dropdown-panel')
      .should('be.visible') // Wait until the panel appears
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click();
        });
      });

  }

  clickonInsights012() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonprimaryallocationinsights).click();
    cy.wait(10000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.clickonbyallocationowner).click();
    cy.wait(1000);
    // Select a random option
    cy.get('#accordion-owner > .panel > .panel-collapse > .panel-body > form.ng-pristine > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });

  }

  clickonInsights013() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonprimaryallocationinsights).click();
    cy.wait(10000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.clickonbyproduct).click();
    cy.wait(1000);
    // Select a random option
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
      cy.get("body > app-root:nth-child(1) > app-menu-layout:nth-child(2) > main:nth-child(1) > section:nth-child(3) > div:nth-child(2) > app-money-movement-insight:nth-child(2) > div:nth-child(1) > app-offcanvas:nth-child(2) > fieldset:nth-child(1) > app-money-movement-insight-filter:nth-child(1) > div:nth-child(3) > accordion:nth-child(1) > accordion-group:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(3) > ng-select:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)").click({force:true});
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
clickonmoneymovementingistspage154() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
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

  clickonInsights014() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonprimaryallocationinsights).click();
    cy.wait(10000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.clickonbybucket).click();
    cy.wait(1000);
    // Select a random option
    cy.get('#accordion-bucket > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
    cy.get('#accordion-bucket > .panel > .panel-collapse > .panel-body > .ng-touched > :nth-child(2) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
  }


  clickonInsights015() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonprimaryallocationinsights).click();
    cy.wait(10000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.clickonbyGeography).click();
    cy.wait(1000);
    cy.scrollTo('bottom', { ensureScrollable: false });
    cy.wait(1000);
    // Select a random option
    cy.get('#accordion-geography > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
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
      });
      cy.get(':nth-child(4) > .form-ng-select > .ng-select-container').click({force:true});
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

  clickonInsights016() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonprimaryallocationinsights).click();
    cy.wait(8000);
    cy.get(this.locators.hoverOnIcon).click();
    cy.wait(1000);
    cy.contains('Total Accounts').should('be.visible');
    cy.wait(1000);
  }

  clickonInsights018() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonprimaryallocationinsights).click();
    cy.wait(10000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.clickonbyagency).click();
    cy.wait(1000);
    cy.get('ng-select[formcontrolname="agency"]').then($el => {
      const isOpen = $el.hasClass('ng-select-opened');
      if (!isOpen) {
        cy.get('ng-select[formcontrolname="agency"] .ng-arrow-wrapper').click();
      }
    });
    cy.get('.ng-dropdown-panel .ng-option').then($options => {
      const count = $options.length;
      const randomIndex = Math.floor(Math.random() * count);
      cy.wrap($options[randomIndex]).click();
    });
    cy.get('#accordion-agency > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(2) > .form-ng-select > .ng-select-container > .ng-arrow-wrapper').should('be.visible').click();
    // Step 2: Wait for the new dropdown panel to appear and select a random option
    cy.get('.ng-dropdown-panel')
      .should('be.visible') // Wait until the panel appears
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click();
        });
      });
    //Now Click on Detail Analysis

    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
  }

  clickonInsights019() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonprimaryallocationinsights).click();
    cy.wait(10000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.clickonbyallocationowner).click();
    cy.wait(1000);
    // Select a random option
    cy.get('#accordion-owner > .panel > .panel-collapse > .panel-body > form.ng-pristine > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });

    //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('span > .btn').click();
    cy.wait(5000)
  }

  clickonInsights020() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonprimaryallocationinsights).click();
    cy.wait(10000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.clickonbyproduct).click();
    cy.wait(1000);
    // Select a random option
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
      cy.get("body > app-root:nth-child(1) > app-menu-layout:nth-child(2) > main:nth-child(1) > section:nth-child(3) > div:nth-child(2) > app-money-movement-insight:nth-child(2) > div:nth-child(1) > app-offcanvas:nth-child(2) > fieldset:nth-child(1) > app-money-movement-insight-filter:nth-child(1) > div:nth-child(3) > accordion:nth-child(1) > accordion-group:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(3) > ng-select:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)").click({force:true});
      cy.wait(4000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
    //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('span > .btn').click();
    cy.wait(5000)
  }

  clickonInsights021() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonprimaryallocationinsights).click();
    cy.wait(10000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.clickonbybucket).click();
    cy.wait(1000);
    // Select a random option
    cy.get('#accordion-bucket > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
    cy.get('#accordion-bucket > .panel > .panel-collapse > .panel-body > .ng-touched > :nth-child(2) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
    //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('span > .btn').click();
    cy.wait(5000)

  }

  clickonInsights022() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonprimaryallocationinsights).click();
    cy.wait(10000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.clickonbyGeography).click();
    cy.wait(1000);
    cy.scrollTo('bottom', { ensureScrollable: false });
    cy.wait(1000);
    // Select a random option
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
      });
      cy.get(':nth-child(4) > .form-ng-select > .ng-select-container').click({force:true});
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
    //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('span > .btn').click();
    cy.wait(5000)

  }

  clickonInsights023() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonprimaryallocationinsights).click();
    cy.wait(10000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.clickonbyGeography).click();
    cy.wait(1000);
    cy.scrollTo('bottom', { ensureScrollable: false });
    cy.wait(1000);
    // Select a random option
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
      });
      cy.get(':nth-child(4) > .form-ng-select > .ng-select-container').click({force:true});
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
    //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('#close-button').click();
    cy.wait(1000)
    cy.get(':nth-child(4) > .page-link').click();
    cy.wait(1000)
    cy.get('.pagination-last > .page-link').click();
    cy.wait(1000)

  }

  clickonInsights024() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonprimaryallocationinsights).click();
    cy.wait(5000);
    cy.get('a[class="nav-link active"] span').contains('Overview').should('be.visible');
    cy.wait(1000);
    cy.get(this.locators.geoandproduct).click();
    cy.wait(1000);

  }

  clickonInsights025() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonprimaryallocationinsights).click();
    cy.wait(5000);
    cy.get('a[class="nav-link active"] span').contains('Overview').should('be.visible');
    cy.wait(1000);
    cy.get(this.locators.geoandproduct).click();
    cy.wait(1000);
    cy.get(this.locators.selectsubproduct).click();
    cy.wait(1000);

  }

  clickonSecondaryInsights026() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonsecondaryallocationinsights).click();
    cy.wait(5000);
    cy.get('a[class="nav-link active"] span').contains('Overview').should('be.visible');
    cy.wait(1000);
  }

  clickonSecondaryInsights027() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonsecondaryallocationinsights).click();
    cy.wait(5000);
    cy.get('a[class="nav-link active"] span').contains('Overview').should('be.visible');
    cy.wait(1000);
    cy.contains('Total Allocated Accounts to Primary').should('be.visible');
    cy.wait(1000);
    cy.contains('Total Allocated Accounts to Secondary').should('be.visible');
    cy.wait(1000);
    cy.contains('Total Unallocated Accounts to Secondary').should('be.visible');
    cy.wait(1000);
    cy.contains('Total Allocated Amount to Primary').should('be.visible');
    cy.wait(1000);
    cy.contains('Total Allocated Amount to Secondary').should('be.visible');
    cy.wait(1000);
    cy.contains('Total Unallocated Amount to Secondary').should('be.visible');
    cy.wait(1000);
  }

  clickonSecondaryInsights028() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonsecondaryallocationinsights).click();
    cy.wait(10000);
    cy.get('.inner-container').scrollTo('0%', '50%');
    cy.wait(1000);
    cy.get('rect[x="120"][y="0"][width="38"][height="38"][fill="#1E8D89"]').click({ force: true });
    cy.wait(1000);
  }

  clickonSecondaryInsights029() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonsecondaryallocationinsights).click();
    cy.wait(10000);
    cy.get('.inner-container').scrollTo('0%', '50%');
    cy.wait(1000);
    cy.get('rect[x="240"][y="80"][width="38"][height="38"][fill="#D54848"]').click({ force: true });
    cy.wait(1000);
  }

  clickonSecondaryInsights030() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonsecondaryallocationinsights).click();
    cy.wait(10000);
    cy.get('.inner-container').scrollTo('0%', '40%');
    cy.wait(1000);
    cy.get(this.locators.secondaryresetcrossfilters).click();
    cy.wait(1000);
  }

  clickonSecondaryInsights031() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonsecondaryallocationinsights).click();
    cy.wait(10000);
    cy.get('.inner-container').scrollTo('0%', '40%');
    cy.wait(1000);
    cy.get('[btnradio="bottom"]').click();
    cy.wait(1000);
    cy.get('.active.tab-pane > .chart-cards-container > :nth-child(4) > .card-header > h3').contains('Bottom 5 Owners by Secondary Unallocated').should('be.visible');
    cy.wait(1000);

  }

  clickonSecondaryInsights032() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonsecondaryallocationinsights).click();
    cy.wait(10000);
    cy.get('.inner-container').scrollTo('0%', '40%');
    cy.wait(1000);
    cy.get('[btnradio="top"]').click();
    cy.wait(1000);
    cy.get('tab:nth-child(1) div:nth-child(2) div:nth-child(4) div:nth-child(1) h3:nth-child(1)').contains('Top 5 Owners by Secondary Unallocated').should('be.visible');
    cy.wait(1000);

  }

  clickonSecondaryInsights033() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonsecondaryallocationinsights).click();
    cy.wait(10000);
    cy.get('.active.tab-pane > .chart-cards-container > :nth-child(5) > .card-header > .d-flex > .btn').click();
    cy.wait(1000);

  }

  clickonSecondaryInsights034() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonsecondaryallocationinsights).click();
    cy.wait(10000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.clickonexpandall).click();
    cy.wait(1000);
    cy.get('.inner-container').scrollTo('top');
    cy.wait(1000);
    cy.get(this.locators.clickonclosebutton).click();
    cy.wait(1000);

  }

  clickonSecondaryInsights035() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonsecondaryallocationinsights).click();
    cy.wait(10000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('ng-select[formcontrolname="metrics"] .ng-arrow-wrapper').click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option').contains('Amount').click();
    cy.wait(5000);

  }

  clickonSecondaryInsights036() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonsecondaryallocationinsights).click();
    cy.wait(10000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-user > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-user > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    // cy.get('ng-select[formcontrolname="agency"]').then($el => {
    //   const isOpen = $el.hasClass('ng-select-opened');
    //   if (!isOpen) {
    //     cy.get('ng-select[formcontrolname="agency"] .ng-arrow-wrapper').click();
    //   }
    // });
    cy.get('.ng-dropdown-panel .ng-option').then($options => {
      const count = $options.length;
      const randomIndex = Math.floor(Math.random() * count);
      cy.wrap($options[randomIndex]).click();
    });

    cy.get('#accordion-user > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(2) > .form-ng-select > .ng-select-container').should('be.visible').click();
    // Step 2: Wait for the new dropdown panel to appear and select a random option
    cy.get('.ng-dropdown-panel')
      .should('be.visible') // Wait until the panel appears
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click();
        });
      });

    cy.get('#accordion-user > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(3) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').should('be.visible').click();
    // Step 2: Wait for the new dropdown panel to appear and select a random option
    cy.get('.ng-dropdown-panel')
      .should('be.visible') // Wait until the panel appears
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click();
        });
      });

    cy.get('#accordion-user > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(4) > .form-ng-select > .ng-select-container').should('be.visible').click();
    // Step 2: Wait for the new dropdown panel to appear and select a random option
    cy.get('.ng-dropdown-panel')
      .should('be.visible') // Wait until the panel appears
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click();
        });
      });


  }

  clickonSecondaryInsights037() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonsecondaryallocationinsights).click();
    cy.wait(10000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.clickonbyallocationowner).click();
    cy.wait(1000);
    // Select a random option
    cy.get('#accordion-product > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });

  }

  clickonSecondaryInsights038() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonsecondaryallocationinsights).click();
    cy.wait(10000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.clickonbyproduct).click();
    cy.wait(1000);
    // Select a random option
    cy.get('#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-pristine > :nth-child(1) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
    cy.get('#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(2) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
    cy.get('#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(3) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });

  }

  clickonSecondaryInsights039() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonsecondaryallocationinsights).click();
    cy.wait(10000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.clickonbybucket).click();
    cy.wait(1000);
    // Select a random option
    cy.get('#accordion-bucket > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
    cy.get('#accordion-bucket > .panel > .panel-collapse > .panel-body > .ng-touched > :nth-child(2) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
  }


  clickonSecondaryInsights040() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonsecondaryallocationinsights).click();
    cy.wait(10000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.clickonbyGeography).click();
    cy.wait(1000);
    cy.scrollTo('bottom', { ensureScrollable: false });
    cy.wait(1000);
    // Select a random option
    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > .ng-dirty > :nth-child(2) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });

    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > .ng-dirty > :nth-child(3) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });


    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > .ng-dirty > :nth-child(4) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });


    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > .ng-dirty > :nth-child(5) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });

  }

  clickonSecondaryInsights041() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonsecondaryallocationinsights).click();
    cy.wait(8000);
    cy.get(this.locators.hoverOnIcon).click();
    cy.wait(1000);
    cy.get('.enc-tabs-1').contains('Total Accounts').should('be.visible');
    cy.wait(1000);
  }

  clickonSecondaryInsights042() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonsecondaryallocationinsights).click();
    cy.wait(10000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.clickonbyagency).click();
    cy.wait(1000);
    cy.get('ng-select[formcontrolname="agency"]').then($el => {
      const isOpen = $el.hasClass('ng-select-opened');
      if (!isOpen) {
        cy.get('ng-select[formcontrolname="agency"] .ng-arrow-wrapper').click();
      }
    });
    cy.get('.ng-dropdown-panel .ng-option').then($options => {
      const count = $options.length;
      const randomIndex = Math.floor(Math.random() * count);
      cy.wrap($options[randomIndex]).click();
    });
    cy.get('#accordion-agency > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(2) > .form-ng-select > .ng-select-container > .ng-arrow-wrapper').should('be.visible').click();
    // Step 2: Wait for the new dropdown panel to appear and select a random option
    cy.get('.ng-dropdown-panel')
      .should('be.visible') // Wait until the panel appears
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click();
        });
      });
    //Now Click on Detail Analysis

    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
  }

  clickonSecondaryInsights043() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonsecondaryallocationinsights).click();
    cy.wait(10000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.clickonbyallocationowner).click();
    cy.wait(1000);
    // Select a random option
    cy.get('#accordion-owner > .panel > .panel-collapse > .panel-body > form.ng-pristine > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });

    //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('span > .btn').click();
    cy.wait(5000)
  }

  clickonSecondaryInsights044() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonsecondaryallocationinsights).click();
    cy.wait(10000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.clickonbyproduct).click();
    cy.wait(1000);
    // Select a random option
    cy.get('#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-pristine > :nth-child(1) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
    cy.get('#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(2) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
    cy.get('#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(3) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
    //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('span > .btn').click();
    cy.wait(5000)
  }

  clickonSecondaryInsights045() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonsecondaryallocationinsights).click();
    cy.wait(10000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.clickonbybucket).click();
    cy.wait(1000);
    // Select a random option
    cy.get('#accordion-bucket > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
    cy.get('#accordion-bucket > .panel > .panel-collapse > .panel-body > .ng-touched > :nth-child(2) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
    //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('span > .btn').click();
    cy.wait(5000)

  }

  clickonSecondaryInsights046() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonsecondaryallocationinsights).click();
    cy.wait(10000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.clickonbyGeography).click();
    cy.wait(1000);
    cy.scrollTo('bottom', { ensureScrollable: false });
    cy.wait(1000);
    // Select a random option
    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > .ng-dirty > :nth-child(2) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });

    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > .ng-dirty > :nth-child(3) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });


    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > .ng-dirty > :nth-child(4) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });


    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > .ng-dirty > :nth-child(5) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
    //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('span > .btn').click();
    cy.wait(5000)

  }

  clickonSecondaryInsights047() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonsecondaryallocationinsights).click();
    cy.wait(10000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.clickonbyGeography).click();
    cy.wait(1000);
    cy.scrollTo('bottom', { ensureScrollable: false });
    cy.wait(1000);
    // Select a random option
    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > .ng-dirty > :nth-child(2) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });

    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > .ng-dirty > :nth-child(3) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });


    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > .ng-dirty > :nth-child(4) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });


    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > .ng-dirty > :nth-child(5) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
    //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('#close-button').click();
    cy.wait(1000)
    cy.get(':nth-child(4) > .page-link').click();
    cy.wait(1000)
    cy.get('.pagination-last > .page-link').click();
    cy.wait(1000)

  }

  clickonSecondaryInsights048() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonsecondaryallocationinsights).click();
    cy.wait(5000);
    cy.get('a[class="nav-link active"] span').contains('Overview').should('be.visible');
    cy.wait(1000);
    cy.get(this.locators.geoandproduct).click();
    cy.wait(1000);

  }

  clickonSecondaryInsights049() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonsecondaryallocationinsights).click();
    cy.wait(5000);
    cy.get('a[class="nav-link active"] span').contains('Overview').should('be.visible');
    cy.wait(1000);
    cy.get(this.locators.geoandproduct).click();
    cy.wait(1000);
    cy.get(this.locators.selectsubproduct).click();
    cy.wait(1000);

  }

  clickonTrailGapInsights050() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickontrailgapinsight).click();
    cy.wait(1000);
    cy.get('a[class="nav-link active"] span').contains('Overview').should('be.visible');
    cy.wait(1000);
  }

  clickonTrailGapInsights051() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickontrailgapinsight).click();
    cy.wait(1000);
    cy.get('a[class="nav-link active"] span').contains('Overview').should('be.visible');
    cy.wait(5000);
    cy.get('a[class="nav-link active"] span').contains('Overview').should('be.visible');
    cy.wait(1000);
    cy.contains('Total Accounts').should('be.visible');
    cy.wait(1000);
    cy.contains('Attemped Accounts').should('be.visible');
    cy.wait(1000);
    cy.contains('Unattemped Accounts').should('be.visible');
    cy.wait(1000);
    cy.contains('Total Amount').should('be.visible');
    cy.wait(1000);
    cy.contains('Attemped Amount').should('be.visible');
    cy.wait(1000);
    cy.contains('Unattemped Amount').should('be.visible');
    cy.wait(1000);
  }

  clickonTrailGapInsights052() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickontrailgapinsight).click();
    cy.wait(10000);
    cy.get('.inner-container').scrollTo('0%', '20%');
    cy.wait(1000);
    cy.get('path.arc[fill*="213"]').click({ force: true });
    cy.wait(1500);
    cy.contains('h3', 'Attempted vs Unattempted Accounts').should('be.visible');;
    cy.wait(1000);
  }

  clickonTrailGapInsights053() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickontrailgapinsight).click();
    cy.wait(10000);
    cy.get('.inner-container').scrollTo('0%', '20%');
    cy.wait(1000);
    cy.contains('h3', ' Attempted vs Unattempted Accounts By Field Primary ').should('be.visible');;
    cy.wait(1000);
  }

  clickonTrailGapInsights054() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickontrailgapinsight).click();
    cy.wait(10000);
    cy.get('.inner-container').scrollTo('0%', '20%');
    cy.wait(1000);
    cy.contains('h3', ' Top 5 Under Performing Field Primary Accounts (Unattempted %) ').should('be.visible');;
    cy.wait(1000);
  }

  clickonTrailGapInsights055() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickontrailgapinsight).click();
    cy.wait(10000);
    cy.get('.inner-container').scrollTo('0%', '20%');
    cy.wait(1000);
    cy.get(':nth-child(3) > .card-header > .d-flex > .btn-group > [btnradio="bottom"]').click();
    cy.wait(1000);
    cy.contains('h3', ' Bottom 5 Under Performing Field Primary Accounts (Unattempted %) ').should('be.visible');;
    cy.wait(1000);
  }

  clickonTrailGapInsights056() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickontrailgapinsight).click();
    cy.wait(10000);
    cy.get('.inner-container').scrollTo('0%', '20%');
    cy.wait(1000);
    cy.get('input[type="number"]').eq(0).clear().type('10', { force: true });;
    cy.wait(1000);
    cy.get(':nth-child(3) > .card-header > .d-flex > .btn-group > [btnradio="bottom"]').click();
    cy.wait(1000);
    cy.contains('h3', ' Performing Field Primary Accounts ').should('be.visible');;
    cy.wait(1000);
  }

  clickonTrailGapInsights057() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickontrailgapinsight).click();
    cy.wait(10000);
    cy.get('.inner-container').scrollTo('0%', '20%');
    cy.wait(1000);
    cy.get(':nth-child(4) > .card-header > .d-flex > .btn-group > [btnradio="bottom"]').click();
    cy.wait(1000);
    cy.contains('h3', ' Bottom 5 Under Performing Tele-Calling Primary Accounts(Unattempted %) ').should('be.visible');;
    cy.wait(1000);
  }

  clickonTrailGapInsights058() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickontrailgapinsight).click();
    cy.wait(10000);
    cy.get('.inner-container').scrollTo('0%', '20%');
    cy.wait(1000);
    cy.get('input[type="number"]').eq(1).clear().type('10', { force: true });;
    cy.wait(1000);
    cy.get(':nth-child(4) > .card-header > .d-flex > .btn-group > [btnradio="bottom"]').click();
    cy.wait(1000);
    cy.contains('h3', ' Performing Field Primary Accounts ').should('be.visible');;
    cy.wait(1000);
  }

  clickonTrailGapInsights059() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickontrailgapinsight).click();
    cy.wait(10000);
    cy.get('.inner-container').scrollTo('0%', '30%');
    cy.wait(1000);
    cy.get(':nth-child(5) > .card-header > .d-flex > .btn-group > [btnradio="bottom"]').click();
    cy.wait(1000);
    cy.contains('h3', ' Performing Field Secondary Accounts ').should('be.visible');;
    cy.wait(1000);
  }

  clickonTrailGapInsights060() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickontrailgapinsight).click();
    cy.wait(10000);
    cy.get('.inner-container').scrollTo('0%', '20%');
    cy.wait(1000);
    cy.get('input[type="number"]').eq(2).clear().type('10', { force: true });;
    cy.wait(1000);
    cy.get(':nth-child(5) > .card-header > .d-flex > .btn-group > [btnradio="bottom"]').click();
    cy.wait(1000);
    cy.contains('h3', ' Bottom 10 Under Performing Field Secondary Accounts (Unattempted %) ').should('be.visible');;
    cy.wait(1000);
  }

  clickonTrailGapInsights061() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickontrailgapinsight).click();
    cy.wait(10000);
    cy.get('.inner-container').scrollTo('0%', '30%');
    cy.wait(1000);
    cy.get(':nth-child(6) > .card-header > .d-flex > .btn-group > [btnradio="bottom"]').click();
    cy.wait(1000);
    cy.contains('h3', ' Bottom 5 Under Performing Tele-Calling Secondary Accounts(Unattempted %) ').should('be.visible');;
    cy.wait(1000);
  }

  clickonTrailGapInsights062() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickontrailgapinsight).click();
    cy.wait(10000);
    cy.get('.inner-container').scrollTo('0%', '20%');
    cy.wait(1000);
    cy.get('input[type="number"]').eq(3).clear().type('10', { force: true });;
    cy.wait(1000);
    cy.get(':nth-child(6) > .card-header > .d-flex > .btn-group > [btnradio="bottom"]').click();
    cy.wait(1000);
    cy.contains('h3', ' Bottom 10 Under Performing Tele-Calling Secondary Accounts(Unattempted %) ').should('be.visible');;
    cy.wait(1000);
  }

  clickonTrailGapInsights063() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickontrailgapinsight).click();
    cy.wait(10000);
    cy.get('.inner-container').scrollTo('0%', '60%');
    cy.wait(1000);
    cy.contains('h3', ' Attempted vs Unattempted Accounts by Tele-Calling Primary ').should('be.visible');;
    cy.wait(1000);
  }

  clickonTrailGapInsights064() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickontrailgapinsight).click();
    cy.wait(10000);
    cy.get('.inner-container').scrollTo('0%', '60%');
    cy.wait(1000);
    cy.contains('h3', ' Attempted vs Unattempted Accounts by Region ').should('be.visible');;
    cy.wait(1000);
  }

  clickonTrailGapInsights065() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickontrailgapinsight).click();
    cy.wait(10000);
    cy.get('.inner-container').scrollTo('0%', '60%');
    cy.wait(1000);
    cy.get('body > app-root:nth-child(1) > app-menu-layout:nth-child(1) > main:nth-child(1) > section:nth-child(3) > div:nth-child(2) > app-trail-gap-insight:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > tabset:nth-child(1) > div:nth-child(2) > tab:nth-child(1) > div:nth-child(2) > div:nth-child(8) > div:nth-child(1) > div:nth-child(2) > app-level-shift-button:nth-child(1) > div:nth-child(1) > button:nth-child(2)').click();
    cy.wait(1000);
    cy.contains('h3', ' Attempted vs Unattempted Accounts by State ').should('be.visible');;
    cy.wait(1000);
  }

  clickonTrailGapInsights066() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickontrailgapinsight).click();
    cy.wait(10000);
    cy.get('.inner-container').scrollTo('0%', '60%');
    cy.wait(1000);
    cy.contains('h3', ' Attempted vs Unattempted Accounts by Product Group ').should('be.visible');;
    cy.wait(1000);
  }

  clickonTrailGapInsights067() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickontrailgapinsight).click();
    cy.wait(10000);
    cy.get('.inner-container').scrollTo('0%', '60%');
    cy.wait(1000);
    cy.get('body > app-root:nth-child(1) > app-menu-layout:nth-child(1) > main:nth-child(1) > section:nth-child(3) > div:nth-child(2) > app-trail-gap-insight:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > tabset:nth-child(1) > div:nth-child(2) > tab:nth-child(1) > div:nth-child(2) > div:nth-child(9) > div:nth-child(1) > div:nth-child(2) > app-level-shift-button:nth-child(1) > div:nth-child(1) > button:nth-child(2) > svg-icon:nth-child(1) > svg:nth-child(1)').click();
    cy.wait(1000);
    cy.contains('h3', ' Attempted vs Unattempted Accounts by Product ').should('be.visible');;
    cy.wait(1000);
  }

  clickonTrailGapInsights068() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickontrailgapinsight).click();
    cy.wait(10000);
    cy.get('.inner-container').scrollTo('0%', '60%');
    cy.wait(1000);
    cy.contains('h3', ' Attempted vs Unattempted Accounts By Total Overdue Amount Bucket ').should('be.visible');;
    cy.wait(1000);
  }

  clickonTrailGapInsights069() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickontrailgapinsight).click();
    cy.wait(10000);
    cy.get('.inner-container').scrollTo('0%', '80%');
    cy.wait(1000);
    cy.contains('h3', ' Attempted vs Unattempted Accounts by Current Bucket ').should('be.visible');;
    cy.wait(1000);
  }


  clickonTrailGapInsights070() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickontrailgapinsight).click();
    cy.wait(10000);
    cy.get('.inner-container').scrollTo('0%', '90%');
    cy.wait(1000);
    cy.contains('Trail Gap - Product Group & Region Matrix').should('be.visible');;
    cy.wait(1000);
  }

  clickonTrailGapInsights071() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickontrailgapinsight).click();
    cy.wait(10000);
    cy.get('.inner-container').scrollTo('0%', '90%');
    cy.wait(1000);
    cy.get(':nth-child(12) > .card-header > .d-flex > .level-shift-button > .btn-group > :nth-child(2) > svg-icon > svg > g > [fill="currentColor"]').click();
    cy.wait(1000);
    cy.contains('Trail Gap - Product & Region Matrix').should('be.visible');;
    cy.wait(1000);
  }


  clickonTrailGapInsights072() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickontrailgapinsight).click();
    cy.wait(10000);
    cy.get('.inner-container').scrollTo('0%', '90%');
    cy.wait(1000);
    cy.contains('Trail Gap - Product Group & Region Matrix').should('be.visible');
    cy.wait(1000);
    cy.get(':nth-child(11) > .card-header > .d-flex > button[_ngcontent-ng-c2132142327=""] > svg-icon.icon-btn-svg > .icon-btn-svg').click();
    cy.wait(1000);
    cy.get(':nth-child(11) > .card-header > .d-flex > app-chart-type-switch > .btn > svg-icon.icon-btn-svg > .icon-btn-svg').click();
    cy.wait(1000);
    cy.get('bs-dropdown-container li:nth-child(2) span:nth-child(1)').click();
    cy.wait(1000);
  }

  clickonTrailGapInsights073() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickontrailgapinsight).click();
    cy.wait(10000);
    cy.get(':nth-child(2) > .nav-link > span').click();
    cy.wait(1000);
    cy.contains('Detailed Analysis Report').should('be.visible');
    cy.wait(1000);
  }

  clickonTrailGapInsights074() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickontrailgapinsight).click();
    cy.wait(10000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.clickonexpandall).click();
    cy.wait(1000);
    cy.get('.inner-container').scrollTo('top');
    cy.wait(1000);
    cy.get(this.locators.clickonclosebutton).click();
    cy.wait(1000);

  }

  clickonTrailGapInsights075() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickontrailgapinsight).click();
    cy.wait(10000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('ng-select[formcontrolname="metrics"] .ng-arrow-wrapper').click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option').contains('Amount').click();
    cy.wait(5000);

  }


  clickonTrailGapInsights076() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickontrailgapinsight).click();
    cy.wait(10000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-user > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-user > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > .form-ng-select').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel:visible .ng-option', { timeout: 10000 }).should('exist').then($options => {
      const count = $options.length;
      expect(count).to.be.greaterThan(0); // Guard against empty list
      const randomIndex = Math.floor(Math.random() * count);
      cy.wrap($options[randomIndex]).scrollIntoView().click({ force: true });
    });

    cy.get('#accordion-user > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(2) > .form-ng-select > .ng-select-container').should('be.visible').click();
    // Step 2: Wait for the new dropdown panel to appear and select a random option
    cy.get('.ng-dropdown-panel')
      .should('be.visible') // Wait until the panel appears
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click();
        });
      });


    cy.get('#accordion-user > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(3) > .form-ng-select > .ng-select-container').should('be.visible').click();
    // Step 2: Wait for the new dropdown panel to appear and select a random option
    cy.get('.ng-dropdown-panel')
      .should('be.visible') // Wait until the panel appears
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click();
        });
      });

    cy.get('#accordion-user > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(4) > .form-ng-select > .ng-select-container').should('be.visible').click();
    // Step 2: Wait for the new dropdown panel to appear and select a random option
    cy.get('.ng-dropdown-panel')
      .should('be.visible') // Wait until the panel appears
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click();
        });
      });


  }


  clickonTrailGapInsights077() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickontrailgapinsight).click();
    cy.wait(10000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.clickonbyproduct).click();
    cy.wait(1000);
    // Select a random option
    cy.get('#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-pristine > :nth-child(1) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
    cy.get('#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(2) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
    cy.get('#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(3) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });

  }

  clickonTrailGapInsights078() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickontrailgapinsight).click();
    cy.wait(10000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.clickonbybucket).click();
    cy.wait(1000);
    // Select a random option
    cy.get('#accordion-bucket > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
    cy.get('#accordion-bucket > .panel > .panel-collapse > .panel-body > .ng-touched > :nth-child(2) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
  }


  clickonTrailGapInsights079() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickontrailgapinsight).click();
    cy.wait(10000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.clickonbyGeography).click();
    cy.wait(1000);
    cy.scrollTo('bottom', { ensureScrollable: false });
    cy.wait(1000);
    // Select a random option
    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > .ng-dirty > :nth-child(2) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });

    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > .ng-dirty > :nth-child(3) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });


    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > .ng-dirty > :nth-child(4) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });


    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > .ng-dirty > :nth-child(5) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });

  }

  clickonTrailGapInsights080() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickontrailgapinsight).click();
    cy.wait(8000);
    cy.get('.purple > .overview-card-info-icon > svg-icon > svg > [d="M277 360h-42V235h42v125zm0-166h-42v-42h42v42z"]').click();
    cy.wait(1000);
    cy.get('.enc-tabs-1').contains('Total Accounts').should('be.visible');
    cy.wait(1000);
  }

  clickonTrailGapInsights081() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickontrailgapinsight).click();
    cy.wait(10000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-user > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-user > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > .form-ng-select').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel:visible .ng-option', { timeout: 10000 }).should('exist').then($options => {
      const count = $options.length;
      expect(count).to.be.greaterThan(0); // Guard against empty list
      const randomIndex = Math.floor(Math.random() * count);
      cy.wrap($options[randomIndex]).scrollIntoView().click({ force: true });
    });

    cy.get('#accordion-user > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(2) > .form-ng-select > .ng-select-container').should('be.visible').click();
    // Step 2: Wait for the new dropdown panel to appear and select a random option
    cy.get('.ng-dropdown-panel')
      .should('be.visible') // Wait until the panel appears
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click();
        });
      });


    cy.get('#accordion-user > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(3) > .form-ng-select > .ng-select-container').should('be.visible').click();
    // Step 2: Wait for the new dropdown panel to appear and select a random option
    cy.get('.ng-dropdown-panel')
      .should('be.visible') // Wait until the panel appears
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click();
        });
      });

    cy.get('#accordion-user > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(4) > .form-ng-select > .ng-select-container').should('be.visible').click();
    // Step 2: Wait for the new dropdown panel to appear and select a random option
    cy.get('.ng-dropdown-panel')
      .should('be.visible') // Wait until the panel appears
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click();
        });
      });

    //Now Click on Detail Analysis

    cy.get(':nth-child(2) > .nav-link > span').click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000)
  }

  clickonTrailGapInsights082() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickontrailgapinsight).click();
    cy.wait(10000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-user > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-user > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > .form-ng-select').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel:visible .ng-option', { timeout: 10000 }).should('exist').then($options => {
      const count = $options.length;
      expect(count).to.be.greaterThan(0); // Guard against empty list
      const randomIndex = Math.floor(Math.random() * count);
      cy.wrap($options[randomIndex]).scrollIntoView().click({ force: true });
    });

    //Now Click on Detail Analysis
    cy.get('body').click();
    cy.wait(1000)
    cy.get(':nth-child(2) > .nav-link > span').click();
    cy.wait(1000)
    cy.get('span > .btn').click();
    cy.wait(5000)
  }

  clickonTrailGapInsights083() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickontrailgapinsight).click();
    cy.wait(10000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.clickonbyproduct).click();
    cy.wait(1000);
    // Select a random option
    cy.get('#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-pristine > :nth-child(1) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
    cy.get('#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(2) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
    cy.get('#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(3) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });

    //Now Click on Detail Analysis
    cy.get('body').click();
    cy.wait(1000)
    cy.get(':nth-child(2) > .nav-link > span').click();
    cy.wait(1000)
    cy.get('span > .btn').click();
    cy.wait(5000)

}

clickonTrailGapInsights084() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickontrailgapinsight).click();
    cy.wait(10000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.clickonbybucket).click();
    cy.wait(1000);
    // Select a random option
    cy.get('#accordion-bucket > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
    //Now Click on Detail Analysis
    cy.get('body').click();
    cy.wait(1000)
    cy.get(':nth-child(2) > .nav-link > span').click();
    cy.wait(1000)
    cy.get('span > .btn').click();
    cy.wait(5000)  
  
  }

  clickonTrailGapInsights085() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickontrailgapinsight).click();
    cy.wait(10000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.clickonbyGeography).click();
    cy.wait(1000);
    cy.scrollTo('bottom', { ensureScrollable: false });
    cy.wait(1000);
    // Select a random option
    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > .ng-dirty > :nth-child(2) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });

    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > .ng-dirty > :nth-child(3) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });


    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > .ng-dirty > :nth-child(4) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });

    //Now Click on Detail Analysis
    cy.get('body').click();
    cy.wait(1000)
    cy.get(':nth-child(2) > .nav-link > span').click();
    cy.wait(1000)
    cy.get('span > .btn').click();
    cy.wait(5000)  
  }

  clickonTrailGapInsights086() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickontrailgapinsight).click();
    cy.wait(10000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.clickonbyGeography).click();
    cy.wait(1000);
    cy.scrollTo('bottom', { ensureScrollable: false });
    cy.wait(1000);
    // Select a random option
    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > .ng-dirty > :nth-child(2) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });

    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > .ng-dirty > :nth-child(3) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });


    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > .ng-dirty > :nth-child(4) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      
    //Now Click on Detail Analysis
    cy.get('body').click();
    cy.wait(1000);
    cy.get(':nth-child(2) > .nav-link > span').click();
    cy.wait(1000);
    cy.get('.toggle-menu-btn').click();
    cy.wait(2000); 
    cy.get(':nth-child(4) > .page-link').click();
    cy.wait(2000);
    cy.get(':nth-child(5) > .page-link').click();
    cy.wait(2000);
  }

    clickonTrailGapInsights087() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickontrailgapinsight).click();
    cy.wait(10000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.clickonbyGeography).click();
    cy.wait(1000);
    cy.scrollTo('bottom', { ensureScrollable: false });
    cy.wait(1000);
    // Select a random option
    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > .ng-dirty > :nth-child(2) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });

    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > .ng-dirty > :nth-child(3) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });


    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > .ng-dirty > :nth-child(4) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      
    //Now Click on Detail Analysis
    cy.get('body').click();
    cy.wait(1000);
    cy.get(':nth-child(2) > .nav-link > span').click();
    cy.wait(1000);
    cy.get('.toggle-menu-btn').click();
    cy.wait(2000); 
    cy.get(this.locators.clickonfilter).click();
    cy.wait(6000);
    cy.get('#ItemsPerPage').select('100');
    cy.wait(2000);
  }

  clickonAllocatedvsAchived092() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnAllocatedVsAchived).click();
    cy.wait(1000);
    cy.get('.nav-link.active').contains('Overview').should('be.visible');
    cy.wait(1000);
  }
clickonAllocatevsAchived093() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickontrailgapinsight).click();
    cy.wait(1000);
    cy.get('.nav-link.active').contains('Overview').should('be.visible');
    cy.wait(1000);
    cy.contains('Allocated Accounts').should('be.visible');
    cy.wait(1000);
    cy.contains('Collected Accounts').should('be.visible');
    cy.wait(1000);
    cy.contains('Uncollected Accounts').should('be.visible');
    cy.wait(1000);
    cy.contains('Allocated Amount').should('be.visible');
    cy.wait(1000);
    cy.contains('Collected Amount').should('be.visible');
    cy.wait(1000);
    cy.contains('Uncollected Amount').should('be.visible');
    cy.wait(1000);
  }
  clickonAllocatedvsAchived094() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnAllocatedVsAchived).click();
    cy.wait(1000);
    cy.contains('h3', 'Collected vs Uncollected by Total Accounts').should('be.visible');;
    cy.wait(1000);
  }

  clickonAllocatedVsAchived095() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnAllocatedVsAchived).click();
    cy.wait(1000);
    cy.contains('h3','Collected vs Uncollected Total Accounts by Field Primary').should('be.visible');
    cy.wait(1000);
  }
  clickonAllocatedVsAchived096() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnAllocatedVsAchived).click();
    cy.wait(1000);
    cy.contains('h3', 'Top 10 Field Primary by Total Accounts Collected').should('exist');
    cy.contains('h3', 'Top 10 Field Primary by Total Accounts Collected').scrollIntoView().should('be.visible');
    cy.wait(1000);
  }
   clickonAllocatedVsAchived097() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnAllocatedVsAchived).click();
    cy.wait(1000);
    cy.contains('h3', ' Top 10 Field Primary by Total Accounts Uncollected').should('exist');
    cy.contains('h3', ' Top 10 Field Primary by Total Accounts Uncollected').scrollIntoView().should('be.visible');
    cy.wait(1000);
  }
  clickonAllocatedVsAchived098() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnAllocatedVsAchived).click();
    cy.wait(1000);
    cy.contains('h3', ' Top 10 Field Secondary by Total Accounts Collected').should('exist');
    cy.contains('h3', ' Top 10 Field Secondary by Total Accounts Collected').scrollIntoView().should('be.visible');
    cy.wait(1000);
  }
  clickonAllocatedVsAchived099() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnAllocatedVsAchived).click();
    cy.wait(1000);
    cy.contains('h3', 'Top 10 Field Secondary by Total Accounts Uncollected').should('exist');
    cy.contains('h3', 'Top 10 Field Secondary by Total Accounts Uncollected').scrollIntoView().should('be.visible');
    cy.wait(1000);
  }
  clickonAllocatedVsAchived100() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnAllocatedVsAchived).click();
    cy.wait(1000);
    cy.contains('h3', 'Collected vs Uncollected Total Accounts by Tele-Calling Primary').should('exist');
    cy.contains('h3', 'Collected vs Uncollected Total Accounts by Tele-Calling Primary').scrollIntoView().should('be.visible');
    cy.wait(1000);
  }
  clickonAllocatedVsAchived101() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnAllocatedVsAchived).click();
    cy.wait(1000);
    cy.contains('h3', ' Collected vs Uncollected Total Accounts by Total Overdue Amount Bucket').should('exist');
    cy.contains('h3', ' Collected vs Uncollected Total Accounts by Total Overdue Amount Bucket').scrollIntoView().should('be.visible');
    cy.wait(1000);
  }
  clickonAllocatedVsAchived102() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnAllocatedVsAchived).click();
    cy.wait(1000);
    cy.contains('h3', 'Collected vs Uncollected').should('exist');
    cy.contains('h3', 'Collected vs Uncollected').scrollIntoView().should('be.visible');
    cy.wait(1000);
  }
  clickonAllocatedVsAchived103() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnAllocatedVsAchived).click();
    cy.wait(1000);
    cy.contains('Geography & Product Analysis').should('exist');
    cy.contains('Geography & Product Analysis')
    .scrollIntoView()
    .click({ force: true });

}
clickonAllocatedVsAchived104() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnAllocatedVsAchived).click();
    cy.wait(1000);
    cy.contains('Geography & Product Analysis').should('exist');
    cy.contains('Geography & Product Analysis')
    .scrollIntoView()
    .click({ force: true });
    cy.contains('h3', ' Uncollected by Region').should('exist');
    cy.contains('h3', ' Uncollected by Region').scrollIntoView().should('be.visible');
    cy.wait(1000);

}
clickonAllocatedVsAchived105() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnAllocatedVsAchived).click();
    cy.wait(1000);
    cy.contains('Geography & Product Analysis').should('exist');
    cy.contains('Geography & Product Analysis')
    .scrollIntoView()
    .click({ force: true });
    cy.contains('h3', ' Accounts Collected vs Uncollected by Region ').should('exist');
    cy.contains('h3', ' Accounts Collected vs Uncollected by Region ').scrollIntoView().should('be.visible');
    cy.wait(1000);

}
clickonAllocatedVsAchived106() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnAllocatedVsAchived).click();
    cy.wait(1000);
    cy.contains('Geography & Product Analysis').should('exist');
    cy.contains('Geography & Product Analysis')
    .scrollIntoView()
    .click({ force: true });
    cy.contains('h3', ' Uncollected by Product Group ').should('exist');
    cy.contains('h3', ' Uncollected by Product Group ').scrollIntoView().should('be.visible');
    cy.wait(1000);

}
clickonAllocatedVsAchived107() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnAllocatedVsAchived).click();
    cy.wait(1000);
    cy.contains('Geography & Product Analysis').should('exist');
    cy.contains('Geography & Product Analysis')
    .scrollIntoView()
    .click({ force: true });
    cy.contains('h3', 'Accounts Collected vs Uncollected by Product Group').should('exist');
    cy.contains('h3', 'Accounts Collected vs Uncollected by Product Group ').scrollIntoView().should('be.visible');
    cy.wait(1000);

}
clickonAllocatedVsAchived108() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnAllocatedVsAchived).click();
    cy.wait(1000);
    cy.contains('Geography & Product Analysis').should('exist');
    cy.contains('Geography & Product Analysis')
    .scrollIntoView()
    .click({ force: true });
    cy.contains('h3', 'Uncollected % - Product & Geography Matrix').should('exist');
    cy.contains('h3', 'Uncollected % - Product & Geography Matrix').scrollIntoView().should('be.visible');
    cy.wait(1000);

}
clickonAllocatedVsAchived109() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnAllocatedVsAchived).click();
    cy.wait(1000);
    cy.contains('Geography & Product Analysis').should('exist');
    cy.contains('Geography & Product Analysis')
    .scrollIntoView()
    .click({ force: true });
    cy.contains('h3', 'Uncollected % - Product & Geography Matrix').should('exist');
    cy.contains('h3', 'Uncollected % - Product & Geography Matrix').scrollIntoView().should('be.visible');
    cy.wait(1000);
    cy.get('.d-flex > .form-select').select('row');
}
clickonAllocatedVsAchived110() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnAllocatedVsAchived).click();
    cy.wait(1000);
    cy.contains('Geography & Product Analysis').should('exist');
    cy.contains('Geography & Product Analysis')
    .scrollIntoView()
    .click({ force: true });
    cy.contains('h3', 'Uncollected % - Product & Geography Matrix').should('exist');
    cy.contains('h3', 'Uncollected % - Product & Geography Matrix').scrollIntoView().should('be.visible');
    cy.wait(1000);
    cy.get('.d-flex > .form-select').select('Columns');
}


 clickonAllocatedVsAchived111() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnAllocatedVsAchived).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.clickonexpandall).click();
    cy.wait(1000);
    cy.get('.inner-container').scrollTo('top');
    cy.wait(1000);
    cy.get(this.locators.clickonclosebutton).click();
    cy.wait(1000);
 }
 clickonAllocatedVsAchived112() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnAllocatedVsAchived).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('ng-select[formcontrolname="metrics"] .ng-arrow-wrapper').click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option').contains('Amount').click();
    cy.wait(5000);

  }
  clickonAllocatedVsAchived113() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnAllocatedVsAchived).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonAgency).click();
    cy.wait(1000);
    cy.get(this.locators.selectonprimaryfield).click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel:visible .ng-option', { timeout: 10000 }).should('exist').then($options => {
      const count = $options.length;
      expect(count).to.be.greaterThan(0); // Guard against empty list
      const randomIndex = Math.floor(Math.random() * count);
    cy.wrap($options[randomIndex]).scrollIntoView().click({ force: true });
    });
    
    cy.get('#accordion-fieldPrimary > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(2) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel')
      .should('be.visible') // Wait until the panel appears
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click();
        });
      });

      cy.get('#accordion-fieldPrimary > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(3) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
      cy.wait(1000);
      cy.get('.ng-dropdown-panel')
      .should('be.visible') // Wait until the panel appears
      .within(() => {
      cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
       cy.wrap($options[randomIndex]).click();
        });
      });

      cy.get('#accordion-fieldPrimary > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(4) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
      cy.wait(1000);
      cy.get('.ng-dropdown-panel')
      .should('be.visible') // Wait until the panel appears
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click();
        });
      });
  }
clickonAllocatedVsAchived114() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnAllocatedVsAchived).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.clickonproduct).click();
    cy.wait(1000);
    cy.get('#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });

      cy.get('#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(2) > .form-ng-select > .ng-select-container').click();
      cy.wait(1000);
       cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      cy.get('#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(3) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
      cy.wait(1000);
       cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
}
clickonAllocatedVsAchived115() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnAllocatedVsAchived).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.clickonbucket).click();
    cy.wait(1000);
    cy.get('#accordion-bucket > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
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
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
    
    
}
  clickonAllocatedVsAchived116() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnAllocatedVsAchived).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.clickongeography).click();
    cy.wait(1000);
    cy.scrollTo('bottom', { ensureScrollable: false });
    cy.wait(1000);
    // Select a random option
    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > .ng-dirty > :nth-child(2) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });

    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > .ng-dirty > :nth-child(3) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });


    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > .ng-dirty > :nth-child(4) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });


    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > .ng-dirty > :nth-child(5) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      
  
  }
  clickonAllocatedVsAchived117() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnAllocatedVsAchived).click();
    cy.wait(1000);
    cy.get('.active.tab-pane > .ng-star-inserted > .overview-cards > :nth-child(1) > .overview-card-info-icon > svg-icon > svg').click();
    cy.wait(1000);
    cy.get('.enc-tabs-1').contains('Allocated Accounts').should('be.visible');
    cy.wait(1000);
  }
  clickonAllocatedVsAchived118() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnAllocatedVsAchived).click();
    cy.wait(1000);
    cy.get('.active.tab-pane > .ng-star-inserted > .overview-cards > :nth-child(2) > .overview-card-info-icon > svg-icon > svg').click();
    cy.wait(1000);
    cy.get('.enc-tabs-2').contains('Collected Accounts').should('be.visible');
    cy.wait(1000);
    
  }
  clickonAllocatedVsAchived119() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnAllocatedVsAchived).click();
    cy.wait(1000);
    cy.get('.active.tab-pane > .ng-star-inserted > .overview-cards > :nth-child(3) > .overview-card-info-icon > svg-icon > svg').click();
    cy.wait(1000);
    cy.get('.enc-tabs-1').contains('Uncollected Accounts').should('be.visible');
    cy.wait(1000);
    
  }
  clickonAllocatedVsAchived120() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnAllocatedVsAchived).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonAgency).click();
    cy.wait(1000);
    cy.get(this.locators.selectonprimaryfield).click();
    cy.wait(1000);
     cy.get('.ng-dropdown-panel:visible .ng-option', { timeout: 10000 }).should('exist').then($options => {
      const count = $options.length;
      expect(count).to.be.greaterThan(0); // Guard against empty list
      const randomIndex = Math.floor(Math.random() * count);
      cy.wrap($options[randomIndex]).scrollIntoView().click({ force: true });
    });
    
    cy.get('#accordion-fieldPrimary > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(2) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel')
      .should('be.visible') // Wait until the panel appears
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click();
        });
      });

      cy.get('#accordion-fieldPrimary > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(3) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
      cy.wait(1000);
      cy.get('.ng-dropdown-panel')
      .should('be.visible') // Wait until the panel appears
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click();
        });
      });

      cy.get('#accordion-fieldPrimary > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(4) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
      cy.wait(1000);
      cy.get('.ng-dropdown-panel')
      .should('be.visible') // Wait until the panel appears
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click();
        });
      });
      //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000)
  
  }
  clickonAllocatedVsAchived121() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnAllocatedVsAchived).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.clickonproduct).click();
    cy.wait(1000);
    cy.get('#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });

      cy.get('#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(2) > .form-ng-select > .ng-select-container').click();
      cy.wait(1000);
       cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      cy.get('#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(3) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
      cy.wait(1000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
      cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
      cy.wrap($options[randomIndex]).click({ force: true });
        });
      });


      //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000)
}
clickonAllocatedVsAchived122() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnAllocatedVsAchived).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.clickonbucket).click();
    cy.wait(1000);
    cy.get('#accordion-bucket > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
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
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000)
    
}

  clickonAllocatedVsAchived123() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnAllocatedVsAchived).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.clickongeography).click();
    cy.wait(1000);
    cy.scrollTo('bottom', { ensureScrollable: false });
    cy.wait(1000);
    // Select a random option
    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > .ng-dirty > :nth-child(2) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });

    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > .ng-dirty > :nth-child(3) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });


    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > .ng-dirty > :nth-child(4) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });


    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > .ng-dirty > :nth-child(5) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
    //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000)
  
    }
  clickonAllocatedVsAchived124() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnAllocatedVsAchived).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonAgency).click();
    cy.wait(1000);
    cy.get(this.locators.selectonprimaryfield).click();
    cy.wait(1000);
     cy.get('.ng-dropdown-panel:visible .ng-option', { timeout: 10000 }).should('exist').then($options => {
      const count = $options.length;
      expect(count).to.be.greaterThan(0); // Guard against empty list
      const randomIndex = Math.floor(Math.random() * count);
      cy.wrap($options[randomIndex]).scrollIntoView().click({ force: true });
    });
    
    cy.get('#accordion-fieldPrimary > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(2) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel')
      .should('be.visible') // Wait until the panel appears
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click();
        });
      });

      cy.get('#accordion-fieldPrimary > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(3) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
      cy.wait(1000);
      cy.get('.ng-dropdown-panel')
      .should('be.visible') // Wait until the panel appears
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click();
        });
      });

      cy.get('#accordion-fieldPrimary > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(4) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
      cy.wait(1000);
      cy.get('.ng-dropdown-panel')
      .should('be.visible') // Wait until the panel appears
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click();
        });
      });
   //Now Click on geography and product analysis
    cy.get(':nth-child(2) > .nav-link > span').click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000)

  }
  clickonAllocatedVsAchived125() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnAllocatedVsAchived).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.clickonproduct).click();
    cy.wait(1000);
    cy.get('#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });

      cy.get('#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(2) > .form-ng-select > .ng-select-container').click();
      cy.wait(1000);
       cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      cy.get('#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(3) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
      cy.wait(1000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
      cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
      cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
    //Now Click on geography and product analysis
    cy.get(':nth-child(2) > .nav-link > span').click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000)
    }
clickonAllocatedVsAchived126() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnAllocatedVsAchived).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.clickongeography).click();
    cy.wait(1000);
    cy.scrollTo('bottom', { ensureScrollable: false });
    cy.wait(1000);
    // Select a random option
    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > .ng-dirty > :nth-child(2) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });

    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > .ng-dirty > :nth-child(3) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });


    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > .ng-dirty > :nth-child(4) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });


    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > .ng-dirty > :nth-child(5) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
    //Now Click on geography and product analysis
    cy.get(':nth-child(2) > .nav-link > span').click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000)
}
clickonAllocatedVsAchived124() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnAllocatedVsAchived).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonAgency).click();
    cy.wait(1000);
    cy.get(this.locators.selectonprimaryfield).click();
    cy.wait(1000);
     cy.get('.ng-dropdown-panel:visible .ng-option', { timeout: 10000 }).should('exist').then($options => {
      const count = $options.length;
      expect(count).to.be.greaterThan(0); // Guard against empty list
      const randomIndex = Math.floor(Math.random() * count);
      cy.wrap($options[randomIndex]).scrollIntoView().click({ force: true });
    });
    
    cy.get('#accordion-fieldPrimary > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(2) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel')
      .should('be.visible') // Wait until the panel appears
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click();
        });
      });

      cy.get('#accordion-fieldPrimary > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(3) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
      cy.wait(1000);
      cy.get('.ng-dropdown-panel')
      .should('be.visible') // Wait until the panel appears
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click();
        });
      });

      cy.get('#accordion-fieldPrimary > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(4) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
      cy.wait(1000);
      cy.get('.ng-dropdown-panel')
      .should('be.visible') // Wait until the panel appears
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click();
        });
      });
     //Now Click on geography and product analysis
    cy.get(':nth-child(2) > .nav-link > span').click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000) 
    }
    clickonAllocatedVsAchived128() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnAllocatedVsAchived).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonAgency).click();
    cy.wait(1000);
    cy.get(this.locators.selectonprimaryfield).click();
    cy.wait(1000);
     cy.get('.ng-dropdown-panel:visible .ng-option', { timeout: 10000 }).should('exist').then($options => {
      const count = $options.length;
      expect(count).to.be.greaterThan(0); // Guard against empty list
      const randomIndex = Math.floor(Math.random() * count);
      cy.wrap($options[randomIndex]).scrollIntoView().click({ force: true });
    });
    //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000)
    cy.get('span > .btn').click();
    cy.wait(5000)
  }
  clickonAllocatedVsAchived129() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnAllocatedVsAchived).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.clickonproduct).click();
    cy.wait(1000);
    cy.get('#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
    //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000)
    cy.get('span > .btn').click();
    cy.wait(5000)

    }

  clickonAllocatedVsAchived130() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnAllocatedVsAchived).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.clickonbucket).click();
    cy.wait(1000);
    cy.get('#accordion-bucket > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000)
    cy.get('span > .btn').click();
    cy.wait(5000)

    }
    clickonAllocatedVsAchived131() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnAllocatedVsAchived).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.clickongeography).click();
    cy.wait(1000);
    cy.scrollTo('bottom', { ensureScrollable: false });
    cy.wait(1000);
    // Select a random option
    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > .ng-dirty > :nth-child(2) > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
        cy.wrap($options[randomIndex]).click({ force: true });
        });
      });

    
       //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000)
    cy.get('span > .btn').click();
    cy.wait(5000)
    }
    clickonmoneymovementingistspage132() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.get('.nav-link.active').contains('Overview').should('be.visible');
    cy.wait(1000);
  }
  clickonmoneymovementingistspage133() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.get('.nav-link.active').contains('Overview').should('be.visible');
    cy.wait(1000);
    cy.contains('Total Amount').should('be.visible');
    cy.wait(1000);
    cy.contains('Amount with Agency').should('be.visible');
    cy.wait(1000);
    cy.contains('Amount with Agent').should('be.visible');
    cy.wait(1000);
    cy.contains('Deposited with Bank').should('be.visible');
    cy.wait(1000);
    cy.contains('Avg Days to Deposit').should('be.visible');
    cy.wait(1000);
    cy.contains('Avg Days in Collection').should('be.visible');
    cy.wait(1000);
     cy.contains('Collected Amount Out of Threshold').should('be.visible');
    cy.wait(1000);
    cy.contains('Collected Amount In Threshold').should('be.visible');
    cy.wait(1000);
  }
  clickonmoneymovementingistspage134() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.contains('h3', 'Top 5 Agency by Total Accounts ').should('exist');
    cy.contains('h3', 'Top 5 Agency by Total Accounts ').scrollIntoView().should('be.visible');
    cy.wait(1000);
  
  }
    clickonmoneymovementingistspage135() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.contains('h3', 'Top 5 Agency by Total Accounts ').should('exist');
    cy.contains('h3', 'Top 5 Agency by Total Accounts ').scrollIntoView().should('be.visible');
    cy.wait(1000);
  
  }
   clickonmoneymovementingistspage136() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.contains('h3', ' Top 5 Agents by Total Accounts ').should('exist');
    cy.contains('h3', ' Top 5 Agents by Total Accounts ').scrollIntoView().should('be.visible');
    cy.wait(1000);
  
  }
  clickonmoneymovementingistspage137() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.contains('h3', 'Total Accounts by Hold Days').should('exist');
    cy.contains('h3', 'Total Accounts by Hold Days').scrollIntoView().should('be.visible');
    cy.wait(1000);
  }
   clickonmoneymovementingistspage138() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.contains('h3', 'Collection Run Rate Comparison Chart').should('exist');
    cy.contains('h3', 'Collection Run Rate Comparison Chart').scrollIntoView().should('be.visible');
    cy.wait(1000);
  }
   clickonmoneymovementingistspage139() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.contains('h3', ' Collection Snapshot by Overdue Amount and Current Bucket ').should('exist');
    cy.contains('h3', ' Collection Snapshot by Overdue Amount and Current Bucket ').scrollIntoView().should('be.visible');
    cy.wait(1000);
  }
  clickonmoneymovementingistspage140() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.contains('Geography & Product Analysis').should('exist');
    cy.contains('Geography & Product Analysis')
    .scrollIntoView()
    .click({ force: true });
  }
  clickonmoneymovementingistspage141() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.contains('Geography & Product Analysis').should('exist');
    cy.contains('Geography & Product Analysis')
    .scrollIntoView()
    .click({ force: true });
    cy.contains('h3', 'Total Accounts by Region').should('exist');
    cy.contains('h3', 'Total Accounts by Region').scrollIntoView().should('be.visible');
    cy.wait(1000);
  }
 
  clickonmoneymovementingistspage142() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.contains('Geography & Product Analysis').should('exist');
    cy.contains('Geography & Product Analysis')
    .scrollIntoView()
    .click({ force: true });
    cy.contains('h3', ' Total Accounts by Region ').should('exist');
    cy.contains('h3', ' Total Accounts by Region ').scrollIntoView().should('be.visible');
    cy.wait(1000);
  }
  clickonmoneymovementingistspage143() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.contains('Geography & Product Analysis').should('exist');
    cy.contains('Geography & Product Analysis')
    .scrollIntoView()
    .click({ force: true });
    cy.contains('h3', 'Total Accounts by Product Group').should('exist');
    cy.contains('h3', 'Total Accounts by Product Group').scrollIntoView().should('be.visible');
    cy.wait(1000);
  }
   clickonmoneymovementingistspage144() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.contains('Geography & Product Analysis').should('exist');
    cy.contains('Geography & Product Analysis')
    .scrollIntoView()
    .click({ force: true });
    cy.contains('h3', ' Total Accounts by Product Group ').should('exist');
    cy.contains('h3', ' Total Accounts by Product Group ').scrollIntoView().should('be.visible');
    cy.wait(1000);
  }
   clickonmoneymovementingistspage145() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.contains('Geography & Product Analysis').should('exist');
    cy.contains('Geography & Product Analysis')
    .scrollIntoView()
    .click({ force: true });
    cy.contains('h3', 'Collection Trend').should('exist');
    cy.contains('h3', 'Collection Trend').scrollIntoView().should('be.visible');
    cy.wait(1000);
  }
  clickonmoneymovementingistspage146() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.contains('Geography & Product Analysis').should('exist');
    cy.contains('Geography & Product Analysis')
    .scrollIntoView()
    .click({ force: true });
    cy.contains('h3', 'Deposit Trend').should('exist');
    cy.contains('h3', 'Deposit Trend').scrollIntoView().should('be.visible');
    cy.wait(1000);
  }
  clickonmoneymovementingistspage147() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.clickonexpandall).click();
    cy.wait(1000);
    cy.get('.inner-container').scrollTo('top');
    cy.wait(1000);
    cy.get(this.locators.clickonclosebutton).click();
    cy.wait(1000);
}
clickonmoneymovementingistspage148() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('ng-select[formcontrolname="metrics"] .ng-arrow-wrapper').click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option').contains('Amount').click();
    cy.wait(5000);

  }
  clickonmoneymovementingistspage149() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-metric > .panel > .panel-collapse > .panel-body > form.ng-pristine > .form-control-group > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
     cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
  } 
   clickonmoneymovementingistspage150() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-threshold > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-threshold > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > .form-control').type("34");
    cy.wait(1000);
}
clickonmoneymovementingistspage151() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-receiptDate > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-receiptDate > .panel > .panel-collapse > .panel-body > form.ng-pristine > .form-control-group > .form-control').click();
    cy.wait(1000);
    cy.get('tbody > :nth-child(3) > :nth-child(1) > span').click();
    cy.wait(1000);
}
clickonmoneymovementingistspage152() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-user > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-user > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(6000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
 cy.get('#accordion-user > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(2) > .form-ng-select > .ng-select-container').click();
 cy.wait(1000);
   cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(6000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
}
clickonmoneymovementingistspage153() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click({force: true});
    cy.wait(1000);
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
      cy.get("body > app-root:nth-child(1) > app-menu-layout:nth-child(2) > main:nth-child(1) > section:nth-child(3) > div:nth-child(2) > app-money-movement-insight:nth-child(2) > div:nth-child(1) > app-offcanvas:nth-child(2) > fieldset:nth-child(1) > app-money-movement-insight-filter:nth-child(1) > div:nth-child(3) > accordion:nth-child(1) > accordion-group:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(3) > ng-select:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)").click({force:true});
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
clickonmoneymovementingistspage154() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
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
clickonmoneymovementingistspage155() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-geography > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
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
      });
      cy.get(':nth-child(4) > .form-ng-select > .ng-select-container').click({force:true});
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
clickonmoneymovementingistspage156() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-paymentMode > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-paymentMode > .panel > .panel-collapse > .panel-body > form.ng-untouched > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(7000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });

}
clickonmoneymovementingistspage157() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-paymentStatus > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-paymentStatus > .panel > .panel-collapse > .panel-body > form.ng-untouched > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(7000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
    

}
clickonmoneymovementingistspage158() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.get('.active.tab-pane > .ng-star-inserted > .overview-cards > :nth-child(1) > .overview-card-info-icon > svg-icon > svg').click();
    cy.wait(1000);
    cy.contains("Shows the total amount collected across all accounts").should("be.visible");
}
clickonmoneymovementingistspage159() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-metric > .panel > .panel-collapse > .panel-body > form.ng-pristine > .form-control-group > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
     cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true});
        });
      });
      //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000);
  } 
  clickonmoneymovementingistspage160() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-threshold > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-threshold > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > .form-control').type("34");
    cy.wait(1000);
    //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000)
}
   clickonmoneymovementingistspage161() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-receiptDate > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-receiptDate > .panel > .panel-collapse > .panel-body > form.ng-untouched > .form-control-group > .form-control').click();
    cy.wait(1000);
    cy.get('tbody > :nth-child(3) > :nth-child(1)').click();
    cy.wait(1000)
     //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000)
}
clickonmoneymovementingistspage162() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-user > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-user > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(6000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
 cy.get('#accordion-user > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(2) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
  cy.wait(10000);
   cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(8000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
            //Now Click on Detail Analysis
      cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000);
    }
    clickonmoneymovementingistspage163() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-product > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > :nth-child(1) > .form-ng-select > .ng-select-container').click({force:true});
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
      cy.get('#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(2) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click({force:true});
      cy.wait(4000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      cy.get('#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(3) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
      cy.wait(4000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000)
}
clickonmoneymovementingistspage164() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
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
      //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000);
}
clickonmoneymovementingistspage165() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-geography > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
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
      //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000);
}
clickonmoneymovementingistspage166() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-paymentMode > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-paymentMode > .panel > .panel-collapse > .panel-body > form.ng-untouched > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(7000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000);
}
clickonmoneymovementingistspage167() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-paymentStatus > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-paymentStatus > .panel > .panel-collapse > .panel-body > form.ng-untouched > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(7000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000);
    }
    clickonmoneymovementingistspage168() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-threshold > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-threshold > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > .form-control').type("34");
    cy.wait(1000);
    cy.get('#accordion-receiptDate > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(4000);
    cy.get('#accordion-receiptDate > .panel > .panel-collapse > .panel-body > .ng-dirty > .form-control-group > .form-control').click();
    cy.wait(6000);
    cy.get('tbody > :nth-child(3) > :nth-child(1) > span').click();
    cy.wait(4000);
    //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000);
    }
    clickonmoneymovementingistspage169() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-paymentMode > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-paymentMode > .panel > .panel-collapse > .panel-body > form.ng-untouched > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(7000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
    cy.get('#accordion-paymentStatus > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-paymentStatus > .panel > .panel-collapse > .panel-body > form.ng-valid > .form-control-group > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(7000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000);
    }
    clickonmoneymovementingistspage170() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-metric > .panel > .panel-collapse > .panel-body > form.ng-pristine > .form-control-group > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
     cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true});
        });
      });
   ///Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000)
    cy.get('span > .btn').click();
    cy.wait(5000)
  }
  clickonmoneymovementingistspage171() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-threshold > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-threshold > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > .form-control').type("34");
    cy.wait(1000);
    ///Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000)
    cy.get('span > .btn').click();
    cy.wait(5000);
  }
  clickonmoneymovementingistspage172() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-receiptDate > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-receiptDate > .panel > .panel-collapse > .panel-body > form.ng-untouched > .form-control-group > .form-control').click();
    cy.wait(1000);
    cy.get('tbody > :nth-child(3) > :nth-child(1)').click();
    cy.wait(1000)
    //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000)
    cy.get('span > .btn').click();
    cy.wait(5000);
  }
  clickonmoneymovementingistspage173() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-user > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-user > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(6000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000)
    cy.get('span > .btn').click();
    cy.wait(5000);
  }
clickonmoneymovementingistspage174() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-product > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > :nth-child(1) > .form-ng-select > .ng-select-container').click({force:true});
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
      //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000)
    cy.get('span > .btn').click();
    cy.wait(5000);
  }
  clickonmoneymovementingistspage175() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
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
      //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000)
    cy.get('span > .btn').click();
    cy.wait(5000);
  }
  clickonmoneymovementingistspage176() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-geography > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > :nth-child(1) > .form-ng-select > .ng-select-container').click({force:true});
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
      //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000)
    cy.get('span > .btn').click();
    cy.wait(5000);
}
clickonmoneymovementingistspage177() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-paymentMode > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-paymentMode > .panel > .panel-collapse > .panel-body > form.ng-untouched > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(7000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000)
    cy.get('span > .btn').click();
    cy.wait(5000);
}
clickonmoneymovementingistspage178() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-paymentStatus > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-paymentStatus > .panel > .panel-collapse > .panel-body > form.ng-untouched > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(8000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000)
    cy.get('span > .btn').click();
    cy.wait(5000);
}
 clickonmoneymovementingistspage179() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-threshold > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-threshold > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > .form-control').type("34");
    cy.wait(1000);
    cy.get('#accordion-receiptDate > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(4000);
    cy.get('#accordion-receiptDate > .panel > .panel-collapse > .panel-body > .ng-dirty > .form-control-group > .form-control').click();
    cy.wait(6000);
    cy.get('tbody > :nth-child(3) > :nth-child(1) > span').click();
    cy.wait(4000);
    //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000)
    cy.get('span > .btn').click();
    cy.wait(5000);
}
clickonmoneymovementingistspage180() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-paymentMode > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-paymentMode > .panel > .panel-collapse > .panel-body > form.ng-untouched > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(7000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
    cy.get('#accordion-paymentStatus > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-paymentStatus > .panel > .panel-collapse > .panel-body > form.ng-valid > .form-control-group > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(7000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000)
    cy.get('span > .btn').click();
    cy.wait(5000);
}
 clickonmoneymovementingistspage181() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.get('.nav-link.active').contains('Overview').should('be.visible');
    cy.wait(1000);
  }
  clickonmoneymovementingistspage182() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.get('.nav-link.active').contains('Overview').should('be.visible');
    cy.wait(1000);
    cy.contains('Total Amount').should('be.visible');
    cy.wait(1000);
    cy.contains('Amount with Staff').should('be.visible');
    cy.wait(1000);
    cy.contains('Deposited with Bank').should('be.visible');
    cy.wait(1000);
    cy.contains('Avg Days to Deposit').should('be.visible');
    cy.wait(1000);
    cy.contains('Avg Days in Collection').should('be.visible');
    cy.wait(1000);
    cy.contains('Collected Amount Out of Threshold').should('be.visible');
    cy.wait(1000);
    cy.contains('Collected Amount In Threshold').should('be.visible');
    cy.wait(1000);
  }
   clickonmoneymovementingistspage183() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.contains('h3', "Top 5 User's Branch by Total Accounts ").should('exist');
    cy.contains('h3', "Top 5 User's Branch by Total Accounts" ).scrollIntoView().should('be.visible');
    cy.wait(1000);
  
  }
   clickonmoneymovementingistspage184() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.contains('h3', "Top 5 Staff Names by Total Accounts ").should('exist');
    cy.contains('h3', "Top 5 Staff Names by Total Accounts" ).scrollIntoView().should('be.visible');
    cy.wait(1000);
  
  }
   clickonmoneymovementingistspage185() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.contains('h3', "Total Accounts by Total Overdue Amount").should('exist');
    cy.contains('h3', "Total Accounts by Total Overdue Amount" ).scrollIntoView().should('be.visible');
    cy.wait(1000);
  }
  clickonmoneymovementingistspage186() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.contains('h3', "Total Accounts by Hold Days").should('exist');
    cy.contains('h3', "Total Accounts by Hold Days" ).scrollIntoView().should('be.visible');
    cy.wait(1000);
  
  }
  clickonmoneymovementingistspage187() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.contains('h3', "Collection Snapshot by Overdue Amount and Current Bucket").should('exist');
    cy.contains('h3', "Collection Snapshot by Overdue Amount and Current Bucket" ).scrollIntoView().should('be.visible');
    cy.wait(1000);
  
  }
   clickonmoneymovementingistspage188() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.contains('h3', "Collection Run Rate Comparison Chart").should('exist');
    cy.contains('h3', "Collection Run Rate Comparison Chart" ).scrollIntoView().should('be.visible');
    cy.wait(1000);
  
  }
 
  clickonmoneymovementingistspage189() {
   cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.contains('Geography & Product Analysis').should('exist');
    cy.contains('Geography & Product Analysis')
    .scrollIntoView()
    .click({ force: true });
  }
  clickonmoneymovementingistspage190() {
   cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.contains('Geography & Product Analysis').should('exist');
    cy.contains('Geography & Product Analysis')
    .scrollIntoView()
    .click({ force: true });
    cy.contains('h3', 'Total Accounts by Region').should('exist');
    cy.contains('h3', 'Total Accounts by Region').scrollIntoView().should('be.visible');
    cy.wait(1000);
  }
  clickonmoneymovementingistspage191() {
   cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.contains('Geography & Product Analysis').should('exist');
    cy.contains('Geography & Product Analysis')
    .scrollIntoView()
    .click({ force: true });
    cy.contains('h3', 'Total Accounts by Region').should('exist');
    cy.contains('h3', 'Total Accounts by Region').scrollIntoView().should('be.visible');
    cy.wait(1000);
  }
  clickonmoneymovementingistspage192() {
   cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.contains('Geography & Product Analysis').should('exist');
    cy.contains('Geography & Product Analysis')
    .scrollIntoView()
    .click({ force: true });
    cy.contains('h3', 'Total Accounts by Product Group').should('exist');
    cy.contains('h3', 'Total Accounts by Product Group').scrollIntoView().should('be.visible');
    cy.wait(1000);
  }
  clickonmoneymovementingistspage193() {
   cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.contains('Geography & Product Analysis').should('exist');
    cy.contains('Geography & Product Analysis')
    .scrollIntoView()
    .click({ force: true });
    cy.contains('h3', 'Total Accounts by Product Group').should('exist');
    cy.contains('h3', 'Total Accounts by Product Group').scrollIntoView().should('be.visible');
    cy.wait(1000);
  }
  clickonmoneymovementingistspage194() {
   cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.contains('Geography & Product Analysis').should('exist');
    cy.contains('Geography & Product Analysis')
    .scrollIntoView()
    .click({ force: true });
    cy.contains('h3', 'Collection Trend').should('exist');
    cy.contains('h3', 'Collection Trend').scrollIntoView().should('be.visible');
    cy.wait(1000);
  }
  clickonmoneymovementingistspage195() {
   cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.contains('Geography & Product Analysis').should('exist');
    cy.contains('Geography & Product Analysis')
    .scrollIntoView()
    .click({ force: true });
    cy.contains('h3', 'Deposit Trend').should('exist');
    cy.contains('h3', 'Deposit Trend').scrollIntoView().should('be.visible');
    cy.wait(1000);
  }
clickonmoneymovementingistspage196() {
   cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.clickonexpandall).click();
    cy.wait(1000);
    cy.get('.inner-container').scrollTo('top');
    cy.wait(1000);
    cy.get(this.locators.clickonclosebutton).click();
    cy.wait(1000);
}
 clickonmoneymovementingistspage197() {
   cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('ng-select[formcontrolname="metrics"] .ng-arrow-wrapper').click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option').contains('Amount').click();
    cy.wait(5000);

  }
  clickonmoneymovementingistspage198() {
   cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-metric > .panel > .panel-collapse > .panel-body > form.ng-pristine > .form-control-group > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
     cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
  } 
  clickonmoneymovementingistspage199() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-threshold > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-threshold > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > .form-control').type("34");
    cy.wait(1000);
}
clickonmoneymovementingistspage200() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-receiptDate > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-receiptDate > .panel > .panel-collapse > .panel-body > form.ng-pristine > .form-control-group > .form-control').click();
    cy.wait(1000);
    cy.get('tbody > :nth-child(3) > :nth-child(1) > span').click();
    cy.wait(1000);
}
clickonmoneymovementingistspage201() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-user > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-user > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(6000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
    }
   clickonmoneymovementingistspage202() {
    cy.get(this.locators.clickoninsight).click( {force: true} );
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click( {force: true} );
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click( {force: true} );
    cy.wait(1000);
    cy.get('#accordion-product > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
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
      cy.get("body > app-root:nth-child(1) > app-menu-layout:nth-child(2) > main:nth-child(1) > section:nth-child(3) > div:nth-child(2) > app-money-movement-insight:nth-child(2) > div:nth-child(1) > app-offcanvas:nth-child(2) > fieldset:nth-child(1) > app-money-movement-insight-filter:nth-child(1) > div:nth-child(3) > accordion:nth-child(1) > accordion-group:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(3) > ng-select:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)").click({force:true});
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
 clickonmoneymovementingistspage203() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
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
clickonmoneymovementingistspage204() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-geography > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
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
clickonmoneymovementingistspage205() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-paymentMode > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-paymentMode > .panel > .panel-collapse > .panel-body > form.ng-untouched > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(7000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });

}
clickonmoneymovementingistspage206() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-paymentStatus > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-paymentStatus > .panel > .panel-collapse > .panel-body > form.ng-untouched > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(7000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
    

}
clickonmoneymovementingistspage207() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.get('.active.tab-pane > .ng-star-inserted > .overview-cards > :nth-child(1) > .overview-card-info-icon > svg-icon > svg').click();
    cy.wait(1000);
    cy.contains("Shows the total amount collected across all accounts").should("be.visible");
   cy.wait(1000);
}
clickonmoneymovementingistspage208() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-metric > .panel > .panel-collapse > .panel-body > form.ng-pristine > .form-control-group > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
     cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true});
        });
      });
      //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000);
  } 
 clickonmoneymovementingistspage209() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-threshold > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-threshold > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > .form-control').type("34");
    cy.wait(1000);
    //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000)
}
clickonmoneymovementingistspage210() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-receiptDate > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-receiptDate > .panel > .panel-collapse > .panel-body > form.ng-untouched > .form-control-group > .form-control').click();
    cy.wait(1000);
    cy.get('tbody > :nth-child(3) > :nth-child(1)').click();
    cy.wait(1000)
     //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000)
}
clickonmoneymovementingistspage211() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-user > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-user > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(6000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
//  cy.get('#accordion-user > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(2) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
//   cy.wait(10000);
//    cy.get('.ng-dropdown-panel').should('be.visible')
//       .within(() => {
//         cy.wait(8000);
//         cy.get('.ng-option').then($options => {
//           const count = $options.length;
//           const randomIndex = Math.floor(Math.random() * count);
//           cy.wrap($options[randomIndex]).click({ force: true });
//         });
//       });
      //Now Click on Detail Analysis
      cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000);
    }
clickonmoneymovementingistspage212() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-product > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
   cy.get('#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > :nth-child(1) > .form-ng-select > .ng-select-container').click({force:true});
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
      cy.get('#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(2) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click({force:true});
      cy.wait(4000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      cy.get('#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(3) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
      cy.wait(4000);
      cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000)
}
clickonmoneymovementingistspage213() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
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
      //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000);
}
clickonmoneymovementingistspage214() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-geography > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
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
      //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000);
}
clickonmoneymovementingistspage215() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-paymentMode > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-paymentMode > .panel > .panel-collapse > .panel-body > form.ng-untouched > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(7000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000);
}
clickonmoneymovementingistspage216() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-paymentStatus > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-paymentStatus > .panel > .panel-collapse > .panel-body > form.ng-untouched > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(7000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000);
    }
clickonmoneymovementingistspage217() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-threshold > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-threshold > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > .form-control').type("34");
    cy.wait(1000);
    cy.get('#accordion-receiptDate > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(4000);
    cy.get('#accordion-receiptDate > .panel > .panel-collapse > .panel-body > .ng-dirty > .form-control-group > .form-control').click();
    cy.wait(6000);
    cy.get('tbody > :nth-child(3) > :nth-child(1) > span').click();
    cy.wait(4000);
    //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000);
    }
 clickonmoneymovementingistspage218() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-paymentMode > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-paymentMode > .panel > .panel-collapse > .panel-body > form.ng-untouched > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(7000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
    cy.get('#accordion-paymentStatus > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-paymentStatus > .panel > .panel-collapse > .panel-body > form.ng-valid > .form-control-group > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(7000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000);
    }
clickonmoneymovementingistspage219() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-metric > .panel > .panel-collapse > .panel-body > form.ng-pristine > .form-control-group > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
     cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true});
        });
      });
   ///Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000)
    cy.get('span > .btn').click();
    cy.wait(5000)
  }
  clickonmoneymovementingistspage220() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-threshold > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-threshold > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > .form-control').type("34");
    cy.wait(1000);
    ///Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000)
    cy.get('span > .btn').click();
    cy.wait(5000);
  }
  clickonmoneymovementingistspage221() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-receiptDate > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-receiptDate > .panel > .panel-collapse > .panel-body > form.ng-untouched > .form-control-group > .form-control').click();
    cy.wait(1000);
    cy.get('tbody > :nth-child(3) > :nth-child(1)').click();
    cy.wait(1000)
    //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000)
    cy.get('span > .btn').click();
    cy.wait(5000);
  }
  clickonmoneymovementingistspage222() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-user > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-user > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(6000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000)
    cy.get('span > .btn').click();
    cy.wait(5000);
  }
  clickonmoneymovementingistspage223() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-product > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-product > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > :nth-child(1) > .form-ng-select > .ng-select-container').click({force:true});
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
      //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000)
    cy.get('span > .btn').click();
    cy.wait(5000);
  }
clickonmoneymovementingistspage224() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
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
      //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000)
    cy.get('span > .btn').click();
    cy.wait(5000);
  }
 clickonmoneymovementingistspage225() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-geography > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
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
      //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000)
    cy.get('span > .btn').click();
    cy.wait(5000);
}
clickonmoneymovementingistspage226() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-paymentMode > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-paymentMode > .panel > .panel-collapse > .panel-body > form.ng-untouched > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(7000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000)
    cy.get('span > .btn').click();
    cy.wait(5000);
}
clickonmoneymovementingistspage227() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-paymentStatus > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-paymentStatus > .panel > .panel-collapse > .panel-body > form.ng-untouched > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(8000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000)
    cy.get('span > .btn').click();
    cy.wait(5000);
}

clickonmoneymovementingistspage228() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-threshold > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-threshold > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > .form-control').type("34");
    cy.wait(1000);
    cy.get('#accordion-receiptDate > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(4000);
    cy.get('#accordion-receiptDate > .panel > .panel-collapse > .panel-body > .ng-dirty > .form-control-group > .form-control').click();
    cy.wait(6000);
    cy.get('tbody > :nth-child(3) > :nth-child(1) > span').click();
    cy.wait(4000);
    //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000)
    cy.get('span > .btn').click();
    cy.wait(5000);
}
clickonmoneymovementingistspage229() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get('#accordion-paymentMode > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-paymentMode > .panel > .panel-collapse > .panel-body > form.ng-untouched > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(7000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
    cy.get('#accordion-paymentStatus > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(1000);
    cy.get('#accordion-paymentStatus > .panel > .panel-collapse > .panel-body > form.ng-valid > .form-control-group > .form-ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(7000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      //Now Click on Detail Analysis
    cy.get(this.locators.clickOnDetailedAnalysis).click();
    cy.wait(1000)
    cy.get('.toggle-menu-btn > img').click();
    cy.wait(1000)
    cy.get('span > .btn').click();
    cy.wait(5000);
}
clickonmoneymovementingistspage230() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.clickonbyGeography).click();
    cy.wait(1000);
    cy.scrollTo('bottom', { ensureScrollable: false });
    cy.wait(1000);
    // Select a random option
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
      });
      cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(3) > .form-ng-select > .ng-select-container').click({force:true});
    cy.wait(1000);
     cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      })
        cy.get(':nth-child(4) > .form-ng-select > .ng-select-container').click({force:true});
        
    cy.wait(1000);
     cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(5000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      })
    //Now Click on Detail Analysis
    cy.get('body').click();
    cy.wait(1000);
    cy.get('.toggle-menu-btn').click();
    cy.wait(2000); 
    cy.get(this.locators.clickonfilter).click();
    cy.wait(6000);
    cy.get('#ItemsPerPage').select('10');
    cy.wait(2000);
  }
  clickonmoneymovementingistspage231() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.clickonbyGeography).click();
    cy.wait(1000);
    cy.scrollTo('bottom', { ensureScrollable: false });
    cy.wait(1000);
    // Select a random option
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
     
      })
       //Now Click on Detail Analysis
    cy.get('body').click();
    cy.wait(1000);
    cy.get('.toggle-menu-btn').click();
    cy.wait(2000); 
    cy.get(this.locators.clickonfilter).click();
    cy.wait(6000);
    cy.get('#ItemsPerPage').select('50');
    cy.wait(2000);
  }
  clickonmoneymovementingistspage232() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.clickonbyGeography).click();
    cy.wait(1000);
    cy.scrollTo('bottom', { ensureScrollable: false });
    cy.wait(1000);
    // Select a random option
    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > form.ng-untouched > :nth-child(1) > :nth-child(1) > .form-ng-select > .ng-select-container').click({force:true});
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(2) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click({force:true});
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });

    cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(3) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click({force:true});
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });


    cy.get(':nth-child(4) > .form-ng-select > .ng-select-container').click({force:true});
    cy.wait(1000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
      
    //Now Click on Detail Analysis
    cy.get('body').click();
    cy.wait(1000);
   ///
    cy.get('.toggle-menu-btn').click();
    cy.wait(2000); 
    // cy.get(':nth-child(4) > .page-link').click();
    // cy.wait(2000);
    // cy.get(':nth-child(5) > .page-link').click();
    // cy.wait(2000);
    // cy.get(':nth-child(6) > .page-link').click();
    // cy.wait(2000);
    // cy.get(':nth-child(7) > .page-link').click();
    // cy.wait(2000);
    // cy.get('.pagination-next > .page-link').click();
    // cy.wait(2000);
  }
  clickonmoneymovementingistspage233() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.get(':nth-child(3) > .nav-link > span').click();
    cy.wait(1000);
    cy.get('#loan-grid-column-filter-button').click();
    cy.wait(2000);
  }
clickonmoneymovementingistspage234() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.get(':nth-child(3) > .nav-link > span').click();
    cy.wait(1000);
    cy.get('#loan-grid-column-filter-button').click();
    cy.wait(2000);
    cy.get(':nth-child(1) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
}
clickonmoneymovementingistspage235() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.get(':nth-child(3) > .nav-link > span').click();
    cy.wait(1000);
    cy.get('#loan-grid-column-filter-button').click();
    cy.wait(2000);
    cy.get(':nth-child(2) > .dropdown-item > .flex-grow-1').click();
   // cy.get(':nth-child(2) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
}
clickonmoneymovementingistspage236() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.get(':nth-child(3) > .nav-link > span').click();
    cy.wait(1000);
    cy.get('#loan-grid-column-filter-button').click();
    cy.wait(2000);
    cy.get(':nth-child(1) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(2) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(3) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(4) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(5) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
}
clickonmoneymovementingistspage237() {
    cy.get(this.locators.clickoninsight).click({force:true});
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click({force:true});
    cy.wait(1000);
    cy.get(':nth-child(3) > .nav-link > span').click({force:true});
    cy.wait(1000);
    cy.get('#loan-grid-column-filter-button').click({force:true});
    cy.wait(2000);
    cy.get(':nth-child(1) > .dropdown-item > .flex-grow-1').click({force:true});
    cy.wait(1000);
    cy.get('#loan-grid-column-filter-button').click({force:true});
    cy.wait(2000);
     cy.get('th.ng-star-inserted').filter(':contains("Field Primary Name")').scrollIntoView().should('be.visible');
     cy.get('th.ng-star-inserted').filter(':contains("Agent Name")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Product Group")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Product ")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Sub Produc")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Current Bucket")').scrollIntoView().should('be.visible');
     cy.get('th.ng-star-inserted').filter(':contains("BOM Bucket")').scrollIntoView().should('be.visible');
     cy.get('th.ng-star-inserted').filter(':contains("Region")').scrollIntoView().should('be.visible');
     cy.get('th.ng-star-inserted').filter(':contains("State")').scrollIntoView().should('be.visible');
      cy.get('th.ng-star-inserted').filter(':contains("City")').scrollIntoView().should('be.visible');
      cy.get('th.ng-star-inserted').filter(':contains("Branch")').scrollIntoView().should('be.visible');
       cy.get('th.ng-star-inserted').filter(':contains("Loan Amount Bucket")').scrollIntoView().should('be.visible');
}
clickonmoneymovementingistspage238() {
    cy.get(this.locators.clickoninsight).click({force:true});
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click({force:true});
    cy.wait(1000);
    cy.get(':nth-child(3) > .nav-link > span').click({force:true});
    cy.wait(1000);
    cy.get('#loan-grid-column-filter-button').click({force:true});
    cy.wait(2000);
    cy.get(':nth-child(2) > .dropdown-item > .flex-grow-1').click({force:true});
    cy.wait(1000);
    cy.get('#loan-grid-column-filter-button').click({force:true});
    cy.wait(2000);
     cy.get('th.ng-star-inserted').filter(':contains("Field Primary Name")').scrollIntoView().should('be.visible');
     cy.get('th.ng-star-inserted').filter(':contains("Agent Name")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Product Group")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Product ")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Sub Produc")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Current Bucket")').scrollIntoView().should('be.visible');
     cy.get('th.ng-star-inserted').filter(':contains("BOM Bucket")').scrollIntoView().should('be.visible');
     cy.get('th.ng-star-inserted').filter(':contains("Region")').scrollIntoView().should('be.visible');
     cy.get('th.ng-star-inserted').filter(':contains("State")').scrollIntoView().should('be.visible');
      cy.get('th.ng-star-inserted').filter(':contains("City")').scrollIntoView().should('be.visible');
      cy.get('th.ng-star-inserted').filter(':contains("Branch")').scrollIntoView().should('be.visible');
       cy.get('th.ng-star-inserted').filter(':contains("Days Bucket")').scrollIntoView().should('be.visible');

}
clickonmoneymovementingistspage239() {
    cy.get(this.locators.clickoninsight).click({force:true});
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click({force:true});
    cy.wait(1000);
    cy.get(':nth-child(3) > .nav-link > span').click({force:true});
    cy.wait(1000);
    cy.get('#loan-grid-column-filter-button').click({force:true});
    cy.wait(2000);
    cy.get(':nth-child(3) > .dropdown-item > .flex-grow-1').click({force:true});
    cy.wait(1000);
    cy.get('#loan-grid-column-filter-button').click({force:true});
    cy.wait(2000);
     cy.get('th.ng-star-inserted').filter(':contains("Field Primary Name")').scrollIntoView().should('be.visible');
     cy.get('th.ng-star-inserted').filter(':contains("Agent Name")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Product Group")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Product ")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Sub Produc")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Current Bucket")').scrollIntoView().should('be.visible');
     cy.get('th.ng-star-inserted').filter(':contains("BOM Bucket")').scrollIntoView().should('be.visible');
     cy.get('th.ng-star-inserted').filter(':contains("Region")').scrollIntoView().should('be.visible');
     cy.get('th.ng-star-inserted').filter(':contains("State")').scrollIntoView().should('be.visible');
      cy.get('th.ng-star-inserted').filter(':contains("City")').scrollIntoView().should('be.visible');
      cy.get('th.ng-star-inserted').filter(':contains("Branch")').scrollIntoView().should('be.visible');
       cy.get('th.ng-star-inserted').filter(':contains("Agency/FOS/Deposited With Bank")').scrollIntoView().should('be.visible');

}
clickonmoneymovementingistspage240() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.get(':nth-child(3) > .nav-link > span').click({force:true});
    cy.wait(1000);
    cy.get('#loan-grid-column-filter-button').click({force:true});
    cy.wait(2000);
    cy.get(':nth-child(4) > .dropdown-item > .flex-grow-1').click({force:true});
    cy.wait(1000);
    cy.get('#loan-grid-column-filter-button').click({force:true});
    cy.wait(5000);
     cy.get('th.ng-star-inserted').filter(':contains("Field Primary Name")').scrollIntoView().should('be.visible');
     cy.get('th.ng-star-inserted').filter(':contains("Agent Name")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Product Group")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Product ")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Sub Produc")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Current Bucket")').scrollIntoView().should('be.visible');
     cy.get('th.ng-star-inserted').filter(':contains("BOM Bucket")').scrollIntoView().should('be.visible');
     cy.get('th.ng-star-inserted').filter(':contains("Region")').scrollIntoView().should('be.visible');
     cy.get('th.ng-star-inserted').filter(':contains("State")').scrollIntoView().should('be.visible');
      cy.get('th.ng-star-inserted').filter(':contains("City")').scrollIntoView().should('be.visible');
      cy.get('th.ng-star-inserted').filter(':contains("Branch")').scrollIntoView().should('be.visible');
       cy.get('th.ng-star-inserted').filter(':contains("Account Number")').scrollIntoView().should('be.visible');

}
clickonmoneymovementingistspage241() {
    cy.get(this.locators.clickoninsight).click({force:true});
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click({force:true});
    cy.wait(1000);
    cy.get(':nth-child(3) > .nav-link > span').click({force:true});
    cy.wait(1000);
    cy.get('#loan-grid-column-filter-button').click({force:true});
    cy.wait(2000);
    cy.get(':nth-child(5) > .dropdown-item > .flex-grow-1').click({force:true});
    cy.wait(1000);
    cy.get('#loan-grid-column-filter-button').click({force:true});
    cy.wait(2000);
     cy.get('th.ng-star-inserted').filter(':contains("Field Primary Name")').scrollIntoView().should('be.visible');
     cy.get('th.ng-star-inserted').filter(':contains("Agent Name")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Product Group")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Product ")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Sub Produc")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Current Bucket")').scrollIntoView().should('be.visible');
     cy.get('th.ng-star-inserted').filter(':contains("BOM Bucket")').scrollIntoView().should('be.visible');
     cy.get('th.ng-star-inserted').filter(':contains("Region")').scrollIntoView().should('be.visible');
     cy.get('th.ng-star-inserted').filter(':contains("State")').scrollIntoView().should('be.visible');
      cy.get('th.ng-star-inserted').filter(':contains("City")').scrollIntoView().should('be.visible');
      cy.get('th.ng-star-inserted').filter(':contains("Branch")').scrollIntoView().should('be.visible');
       cy.get('th.ng-star-inserted').filter(':contains("Total Overdue Amount")').scrollIntoView().should('be.visible');

}
clickonmoneymovementingistspage242() {
    cy.get(this.locators.clickoninsight).click({force:true});
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click({force:true});
    cy.wait(1000);
    cy.get(':nth-child(3) > .nav-link > span').click({force:true});
    cy.wait(1000);
    cy.get('#loan-grid-column-filter-button').click({force:true});
    cy.wait(2000);
    cy.get(':nth-child(1) > .dropdown-item > .flex-grow-1').click({force:true});
    cy.wait(1000);
    cy.get(':nth-child(2) > .dropdown-item > .flex-grow-1').click({force:true});
    cy.wait(1000);
    cy.get(':nth-child(3) > .dropdown-item > .flex-grow-1').click({force:true});
    cy.wait(1000);
    cy.get(':nth-child(4) > .dropdown-item > .flex-grow-1').click({force:true});
    cy.wait(1000);
    cy.get(':nth-child(5) > .dropdown-item > .flex-grow-1').click({force:true});
    cy.wait(1000);
    cy.get('#loan-grid-column-filter-button').click({force:true});
    cy.wait(2000);
     cy.get('th.ng-star-inserted').filter(':contains("Field Primary Name")').scrollIntoView().should('be.visible');
     cy.get('th.ng-star-inserted').filter(':contains("Agent Name")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Product Group")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Product ")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Sub Produc")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Current Bucket")').scrollIntoView().should('be.visible');
     cy.get('th.ng-star-inserted').filter(':contains("BOM Bucket")').scrollIntoView().should('be.visible');
     cy.get('th.ng-star-inserted').filter(':contains("Region")').scrollIntoView().should('be.visible');
     cy.get('th.ng-star-inserted').filter(':contains("State")').scrollIntoView().should('be.visible');
      cy.get('th.ng-star-inserted').filter(':contains("City")').scrollIntoView().should('be.visible');
      cy.get('th.ng-star-inserted').filter(':contains("Branch")').scrollIntoView().should('be.visible');
      cy.get('th.ng-star-inserted').filter(':contains("Loan Amount Bucket")').scrollIntoView().should('be.visible');
      cy.get('th.ng-star-inserted').filter(':contains("Days Bucket")').scrollIntoView().should('be.visible');
      cy.get('th.ng-star-inserted').filter(':contains("Agency/FOS/Deposited With Bank")').scrollIntoView().should('be.visible');
      cy.get('th.ng-star-inserted').filter(':contains("Account Number")').scrollIntoView().should('be.visible');
       cy.get('th.ng-star-inserted').filter(':contains("Total Overdue Amount")').scrollIntoView().should('be.visible');

}
clickonmoneymovementingistspage243() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementinsightsbankstaffpage).click();
    cy.wait(1000);
    cy.get(':nth-child(5) > .card-header > .d-flex > .form-control').clear();
    cy.get(':nth-child(5) > .card-header > .d-flex > .form-control').type(4);
    cy.wait(1000);
    

}
clickonAllocatedVsAchived244() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnAllocatedVsAchived).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonAgency).click();
    cy.wait(1000);
    cy.get(this.locators.selectonprimaryfield).click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel:visible .ng-option', { timeout: 10000 }).should('exist').then($options => {
      const count = $options.length;
      expect(count).to.be.greaterThan(0); // Guard against empty list
      const randomIndex = Math.floor(Math.random() * count);
    cy.wrap($options[randomIndex]).scrollIntoView().click({ force: true });
    });
    
    cy.get('#accordion-fieldPrimary > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(2) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel')
      .should('be.visible') // Wait until the panel appears
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click();
        });
      });

      cy.get('#accordion-fieldPrimary > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(3) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
      cy.wait(1000);
      cy.get('.ng-dropdown-panel')
      .should('be.visible') // Wait until the panel appears
      .within(() => {
      cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
       cy.wrap($options[randomIndex]).click();
        });
      });

      cy.get('#accordion-fieldPrimary > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(4) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
      cy.wait(1000);
      cy.get('.ng-dropdown-panel')
      .should('be.visible') // Wait until the panel appears
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click();
        });
      });
       
    //Now Click on Detail Analysis
    cy.get('body').click();
    cy.wait(1000);
    cy.get('.toggle-menu-btn').click();
    cy.wait(2000); 
    cy.get(this.locators.clickonfilter).click();
    cy.wait(6000);
    cy.get('#ItemsPerPage').select('10');
    cy.wait(2000);
  }
  clickonAllocatedVsAchived245() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnAllocatedVsAchived).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonAgency).click();
    cy.wait(1000);
    cy.get(this.locators.selectonprimaryfield).click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel:visible .ng-option', { timeout: 10000 }).should('exist').then($options => {
      const count = $options.length;
      expect(count).to.be.greaterThan(0); // Guard against empty list
      const randomIndex = Math.floor(Math.random() * count);
    cy.wrap($options[randomIndex]).scrollIntoView().click({ force: true });
    });
    
    cy.get('#accordion-fieldPrimary > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(2) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel')
      .should('be.visible') // Wait until the panel appears
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click();
        });
      });

      cy.get('#accordion-fieldPrimary > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(3) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
      cy.wait(1000);
      cy.get('.ng-dropdown-panel')
      .should('be.visible') // Wait until the panel appears
      .within(() => {
      cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
       cy.wrap($options[randomIndex]).click();
        });
      });

      cy.get('#accordion-fieldPrimary > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(4) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
      cy.wait(1000);
      cy.get('.ng-dropdown-panel')
      .should('be.visible') // Wait until the panel appears
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click();
        });
      });
       
    //Now Click on Detail Analysis
    cy.get('body').click();
    cy.wait(1000);
    cy.get('.toggle-menu-btn').click();
    cy.wait(2000); 
    cy.get(this.locators.clickonfilter).click();
    cy.wait(6000);
    cy.get('#ItemsPerPage').select('50');
    cy.wait(2000);
  }
  
   clickonAllocatedVsAchived246() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnAllocatedVsAchived).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonAgency).click();
    cy.wait(1000);
    cy.get(this.locators.selectonprimaryfield).click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel:visible .ng-option', { timeout: 10000 }).should('exist').then($options => {
      const count = $options.length;
      expect(count).to.be.greaterThan(0); // Guard against empty list
      const randomIndex = Math.floor(Math.random() * count);
    cy.wrap($options[randomIndex]).scrollIntoView().click({ force: true });
    });
    
    cy.get('#accordion-fieldPrimary > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(2) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('.ng-dropdown-panel')
      .should('be.visible') // Wait until the panel appears
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click();
        });
      });

      cy.get('#accordion-fieldPrimary > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(3) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
      cy.wait(1000);
      cy.get('.ng-dropdown-panel')
      .should('be.visible') // Wait until the panel appears
      .within(() => {
      cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
       cy.wrap($options[randomIndex]).click();
        });
      });

      cy.get('#accordion-fieldPrimary > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(4) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
      cy.wait(1000);
      cy.get('.ng-dropdown-panel')
      .should('be.visible') // Wait until the panel appears
      .within(() => {
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click();
        });
      });
       //Now Click on Detail Analysis
    cy.get('body').click();
    cy.wait(1000);
   ///
    cy.get('.toggle-menu-btn').click();
    cy.wait(2000); 
    cy.get(':nth-child(4) > .page-link').click()
    cy.wait(2000);
    cy.get(':nth-child(5) > .page-link').click();
    cy.wait(2000);
    cy.get(':nth-child(6) > .page-link').click();
    cy.wait(2000);
    cy.get(':nth-child(7) > .page-link').click();
    cy.wait(2000);
    cy.get('.pagination-next > .page-link').click();
    cy.wait(2000);
  }

clickonAllocatedVsAchived247() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnAllocatedVsAchived).click();
    cy.wait(1000);
    cy.get(':nth-child(3) > .nav-link > span').click();
    cy.wait(1000);
    cy.get('#loan-grid-column-filter-button').click();
    cy.wait(2000);
}
clickonAllocatedVsAchived248() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnAllocatedVsAchived).click();
    cy.wait(1000);
    cy.get(':nth-child(3) > .nav-link > span').click();
    cy.wait(1000);
    cy.get('#loan-grid-column-filter-button').click();
    cy.wait(2000);
    cy.get(':nth-child(1) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(2) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(3) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(4) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(5) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(6) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(7) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(8) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(9) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(10) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(11) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(12) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(13) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(14) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(15) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(16) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(17) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(18) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(19) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(20) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
}
clickonAllocatedVsAchived249() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnAllocatedVsAchived).click();
    cy.wait(1000);
    cy.get(':nth-child(3) > .nav-link > span').click();
    cy.wait(1000);
    cy.get('#loan-grid-column-filter-button').click();
    cy.wait(2000);
    cy.get(':nth-child(1) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
     cy.get(':nth-child(9) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(17) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(20) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
}
clickonAllocatedVsAchived250() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnAllocatedVsAchived).click();
    cy.wait(1000);
    cy.get(':nth-child(3) > .nav-link > span').click();
    cy.wait(1000);
    cy.get('#loan-grid-column-filter-button').click();
    cy.wait(2000);
    cy.get(':nth-child(1) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get('#loan-grid-column-filter-button').click();
    cy.wait(2000);
    cy.get('th.ng-star-inserted').filter(':contains("Account Number")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Product Group")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Product ")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Sub Product")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Current Bucket")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("BOM Bucket")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Zone")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Region")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("State")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("City")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Branch")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("BOM POS")').scrollIntoView().should('be.visible');
    
}
clickonAllocatedVsAchived251() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnAllocatedVsAchived).click();
    cy.wait(1000);
    cy.get(':nth-child(3) > .nav-link > span').click();
    cy.wait(1000);
    cy.get('#loan-grid-column-filter-button').click();
    cy.wait(2000);
    cy.get(':nth-child(5) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get('#loan-grid-column-filter-button').click();
    cy.wait(2000);
    cy.get('th.ng-star-inserted').filter(':contains("Account Number")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Product Group")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Product ")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Sub Product")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Current Bucket")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("BOM Bucket")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Zone")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Region")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("State")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("City")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Branch")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Charges Overdue")').scrollIntoView().should('be.visible');
    
}
clickonAllocatedVsAchived252() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnAllocatedVsAchived).click();
    cy.wait(1000);
    cy.get(':nth-child(3) > .nav-link > span').click();
    cy.wait(1000);
    cy.get('#loan-grid-column-filter-button').click();
    cy.wait(2000);
    cy.get(':nth-child(8) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get('#loan-grid-column-filter-button').click();
    cy.wait(2000);
    cy.get('th.ng-star-inserted').filter(':contains("Account Number")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Product Group")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Product ")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Sub Product")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Current Bucket")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("BOM Bucket")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Zone")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Region")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("State")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("City")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Branch")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Amount Outstanding")').scrollIntoView().should('be.visible');
    
}
clickonAllocatedVsAchived253() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnAllocatedVsAchived).click();
    cy.wait(1000);
    cy.get(':nth-child(3) > .nav-link > span').click();
    cy.wait(1000);
    cy.get('#loan-grid-column-filter-button').click();
    cy.wait(2000);
    cy.get(':nth-child(14) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get('#loan-grid-column-filter-button').click();
    cy.wait(2000);
    cy.get('th.ng-star-inserted').filter(':contains("Account Number")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Product Group")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Product ")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Sub Product")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Current Bucket")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("BOM Bucket")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Zone")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Region")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("State")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("City")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Branch")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Field Primary name")').scrollIntoView().should('be.visible');
    
}
clickonAllocatedVsAchived254() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnAllocatedVsAchived).click();
    cy.wait(1000);
    cy.get(':nth-child(3) > .nav-link > span').click();
    cy.wait(1000);
    cy.get('#loan-grid-column-filter-button').click();
    cy.wait(2000);
    cy.get(':nth-child(20) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get('#loan-grid-column-filter-button').click();
    cy.wait(2000);
    cy.get('th.ng-star-inserted').filter(':contains("Account Number")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Product Group")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Product ")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Sub Product")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Current Bucket")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("BOM Bucket")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Zone")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Region")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("State")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("City")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Branch")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Last Modified Date and Time")').scrollIntoView().should('be.visible');
    
}
clickonAllocatedVsAchived255() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnAllocatedVsAchived).click();
    cy.wait(1000);
    cy.get(':nth-child(3) > .nav-link > span').click();
    cy.wait(1000);
    cy.get('#loan-grid-column-filter-button').click();
    cy.wait(2000);
    cy.get(':nth-child(1) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(2) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(3) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(4) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(5) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(6) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(7) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(8) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(9) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(10) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(11) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(12) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(13) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(14) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(15) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(16) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(17) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(18) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(19) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(20) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get('#loan-grid-column-filter-button').click();
    cy.wait(2000)
    cy.get('th.ng-star-inserted').filter(':contains("Account Number")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Product Group")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Product ")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Sub Product")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Current Bucket")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("BOM Bucket")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Zone")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Region")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("State")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("City")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Branch")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("BOM POS")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Current POS")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Principal Overdue")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Interest Overdue")').scrollIntoView().should('be.visible');
     cy.get('th.ng-star-inserted').filter(':contains("Charges Overdue")').scrollIntoView().should('be.visible');
     cy.get('th.ng-star-inserted').filter(':contains("Total Overdue")').scrollIntoView().should('be.visible');
     cy.get('th.ng-star-inserted').filter(':contains("NPA Flag")').scrollIntoView().should('be.visible');
     cy.get('th.ng-star-inserted').filter(':contains("Amount Outstanding")').scrollIntoView().should('be.visible');
     cy.get('th.ng-star-inserted').filter(':contains("Allocation Owner Name")').scrollIntoView().should('be.visible');
     cy.get('th.ng-star-inserted').filter(':contains("Allocation Owner Designation")').scrollIntoView().should('be.visible');
     cy.get('th.ng-star-inserted').filter(':contains("Allocation Owner ID")').scrollIntoView().should('be.visible');
     cy.get('th.ng-star-inserted').filter(':contains("TC Primary Name")').scrollIntoView().should('be.visible');
     cy.get('th.ng-star-inserted').filter(':contains("TC Primary ID")').scrollIntoView().should('be.visible');
     cy.get('th.ng-star-inserted').filter(':contains("Field Primary Name")').scrollIntoView().should('be.visible');
     cy.get('th.ng-star-inserted').filter(':contains("Field Primary ID")').scrollIntoView().should('be.visible');
     cy.get('th.ng-star-inserted').filter(':contains("TC Primary Allocation Status")').scrollIntoView().should('be.visible');
     cy.get('th.ng-star-inserted').filter(':contains("Field Primary Allocation Status")').scrollIntoView().should('be.visible');
    // cy.get('th.ng-star-inserted').filter(':contains("Primary Allocation Status")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Secondary Allocation Status")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Last Modified Date and Time")').scrollIntoView().should('be.visible');
}
clickonmoneymovementingistspage256() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.clickonbyGeography).click();
    cy.wait(1000);
    cy.scrollTo('bottom', { ensureScrollable: false });
    cy.wait(1000);
    // Select a random option

    cy.get('#accordion-geography > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
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
      });
      cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(3) > .form-ng-select > .ng-select-container').click({force:true});
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
    //Now Click on Detail Analysis
    cy.get('body').click();
    cy.wait(1000);
    cy.get('.toggle-menu-btn').click();
    cy.wait(2000); 
    cy.get(this.locators.clickonfilter).click();
    cy.wait(6000);
    cy.get('#ItemsPerPage').select('10');
    cy.wait(2000);
  }
  clickonmoneymovementingistspage257() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.clickonbyGeography).click();
    cy.wait(1000);
    cy.scrollTo('bottom', { ensureScrollable: false });
    cy.wait(1000);
    // Select a random option
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
      });
       //Now Click on Detail Analysis
    cy.get('body').click();
    cy.wait(1000);
    cy.get('.toggle-menu-btn').click();
    cy.wait(2000); 
    cy.get(this.locators.clickonfilter).click();
    cy.wait(6000);
    cy.get('#ItemsPerPage').select('50');
    cy.wait(2000);
  }
  clickonmoneymovementingistspage258() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.get(this.locators.clickonfilter).click();
    cy.wait(1000);
    cy.get(this.locators.clickonbyGeography).click();
    cy.wait(1000);
    cy.scrollTo('bottom', { ensureScrollable: false });
    cy.wait(1000);
    // Select a random option
    cy.get('#accordion-geography > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
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
      });
      cy.get('#accordion-geography > .panel > .panel-collapse > .panel-body > form.ng-valid > :nth-child(1) > :nth-child(3) > .form-ng-select > .ng-select-container').click({force:true});
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
      
    //Now Click on Detail Analysis
    cy.get('body').click();
    cy.wait(1000);
   ///
    cy.get('.toggle-menu-btn').click({force: true});
    cy.wait(2000); 
    cy.get(':nth-child(4) > .page-link').click({force: true});
    cy.wait(2000);
    cy.get(':nth-child(5) > .page-link').click({force: true});
    cy.wait(2000);
    // cy.get(':nth-child(6) > .page-link').click({force: true});
    // cy.wait(2000);
    // cy.get(':nth-child(7) > .page-link').click({force: true});
    // cy.wait(2000);
    // cy.get('.pagination-next > .page-link').click({force: true});
    // cy.wait(2000);
  }
  clickonmoneymovementingistspage259() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.get(':nth-child(3) > .nav-link > span').click();
    cy.wait(1000);
    cy.get('#loan-grid-column-filter-button').click();
    cy.wait(2000);
  }
clickonmoneymovementingistspage260() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.get(':nth-child(3) > .nav-link > span').click();
    cy.wait(1000);
    cy.get('#loan-grid-column-filter-button').click();
    cy.wait(2000);
    cy.get(':nth-child(1) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(2) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(3) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(4) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(5) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
}
clickonmoneymovementingistspage261() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.get(':nth-child(3) > .nav-link > span').click();
    cy.wait(1000);
    cy.get('#loan-grid-column-filter-button').click();
    cy.wait(2000);
    cy.get(':nth-child(1) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(3) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(5) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
}
clickonmoneymovementingistspage262() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.get(':nth-child(3) > .nav-link > span').click();
    cy.wait(1000);
    cy.get('#loan-grid-column-filter-button').click();
    cy.wait(2000);
    cy.get(':nth-child(1) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get('#loan-grid-column-filter-button').click( {force: true});
    cy.wait(2000);
    cy.get('th.ng-star-inserted').filter(':contains("Field Primary Name")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Agent Name")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Product Group")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Product ")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Sub Produc")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Current Bucket")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("BOM Bucket")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Region")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("State")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("City")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Branch")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Loan Amount Bucket")').scrollIntoView().should('be.visible');
      
}
clickonmoneymovementingistspage263() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.get(':nth-child(3) > .nav-link > span').click({force:true});
    cy.wait(1000);
    cy.get('#loan-grid-column-filter-button').click();
    cy.wait(2000);
    cy.get(':nth-child(1) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(2) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(3) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(4) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(5) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get('#loan-grid-column-filter-button').click({force:true});
    cy.wait(2000);
    cy.get('th.ng-star-inserted').filter(':contains("Field Primary Name")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Agent Name")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Product Group")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Product ")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Sub Produc")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Current Bucket")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("BOM Bucket")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Region")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("State")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("City")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Branch")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Loan Amount Bucket")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Days Bucket")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Agency/FOS/Deposited With Bank")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Account Number")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Total Overdue Amount")').scrollIntoView().should('be.visible');

}
clickonmoneymovementingistspage264() {
    cy.get(this.locators.clickoninsight).click();
    cy.wait(1000);
    cy.get(this.locators.clickonmoneymovementingistspage).click();
    cy.wait(1000);
    cy.get(':nth-child(3) > .nav-link > span').click();
    cy.wait(1000);
    cy.get('#loan-grid-column-filter-button').click();
    cy.wait(2000);
    cy.get(':nth-child(1) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(3) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get(':nth-child(5) > .dropdown-item > .flex-grow-1').click();
    cy.wait(1000);
    cy.get('#loan-grid-column-filter-button').click({force:true});
    cy.wait(2000);
    cy.get('th.ng-star-inserted').filter(':contains("Field Primary Name")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Agent Name")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Product Group")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Product ")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Sub Produc")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Current Bucket")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("BOM Bucket")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Region")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("State")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("City")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Branch")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Loan Amount Bucket")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Agency/FOS/Deposited With Bank")').scrollIntoView().should('be.visible');
    cy.get('th.ng-star-inserted').filter(':contains("Total Overdue Amount")').scrollIntoView().should('be.visible');

}
}
export default InsightsPage;