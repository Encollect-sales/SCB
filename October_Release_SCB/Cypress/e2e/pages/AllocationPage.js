import { getLocators } from '../utils/locatorUtils';
import { getBaseUrl } from '../utils/configUtils';
import { faker } from '@faker-js/faker';

class AllocationPage {
  constructor(locators) {
    this.locators = locators;
  }
Allocation_sow_TestPage_01() {

    cy.wait(5000);

    cy.get(this.locators.ClickOn_Allocation).click({ force: true });
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Agency_Bulkupload).click({ force: true });
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Agency_Bulkalloc_Acclevel).click({ force: true });
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Productgroup).click({ force: true });
    cy.wait(2000);

    cy.get(".ng-dropdown-panel .ng-option")
      .should('have.length.greaterThan', 0)
      .then($options => {

        const actualOptions = [...$options].map(option =>
          option.innerText.trim()
        );

        cy.log(`Available Options: ${actualOptions.join(', ')}`);
        console.log('Available Options:', actualOptions);

        expect(actualOptions).to.include('Credit Card');
      });

    cy.wait(2000);
}

  Allocation_sow_TestPage_02() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agency_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agency_Bulkalloc_Acclevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Bucket).click()
    cy.wait(2000);

    const expectedNumbers = ["0", "1", "2", "3","3+"];

    cy.get(".ng-dropdown-panel .ng-option")
      .then($options => {
        const actual = [...$options].map(o => o.innerText.trim());
        expect(actual).to.deep.equal(expectedNumbers);
      });
    cy.wait(2000);


  }

  Allocation_sow_TestPage_03() {

    cy.get(this.locators.ClickOn_Allocation).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agency_Bulkupload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agency_Bulkalloc_Acclevel).click({force:true});
    cy.wait(2000);
    cy.get(':nth-child(6) > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click({force:true});
    cy.wait(2000);

    const expectedBranches = [ "India", "Korea"] ;

    cy.get(".ng-dropdown-panel .ng-option")
      .then($options => {
        const actual = [...$options].map(o => o.innerText.trim());
        expect(actual).to.deep.equal(expectedBranches);
      });
    cy.wait(2000);

  }

 Allocation_sow_TestPage_04() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Agency_Bulkupload).click();
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Agency_Bulkalloc_Acclevel).click();
    cy.wait(2000);

    cy.get(this.locators.ClickOn_CC_RadioBtn).click();
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Productgroup).click();
    cy.wait(2000);

    cy.get(".ng-dropdown-panel .ng-option")
      .then($options => {
        const actual = [...$options].map(o => o.innerText.trim());

        cy.log(`Available Options: ${actual.join(', ')}`);
        console.log('Available Options:', actual);

        expect(actual).to.include('Credit Card');
      });

    cy.wait(2000);
}
  Allocation_sow_TestPage_05() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agency_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agency_Bulkalloc_Acclevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_CC_RadioBtn).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Bucket).click()
    cy.wait(2000);

    const expectedNumbers = ["0", "1", "2", "3","3+"];

    cy.get(".ng-dropdown-panel .ng-option")
      .then($options => {
        const actual = [...$options].map(o => o.innerText.trim());
        expect(actual).to.deep.equal(expectedNumbers);
      });
    cy.wait(2000);


  }

  Allocation_sow_TestPage_06() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agency_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agency_Bulkalloc_Acclevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_CC_RadioBtn).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Branch).click()
    cy.wait(2000);

    const expectedBranches = [ 'India', 'Korea' ];

    cy.get(".ng-dropdown-panel .ng-option")
      .then($options => {
        const actual = [...$options].map(o => o.innerText.trim());
        expect(actual).to.deep.equal(expectedBranches);
      });
    cy.wait(2000);

  }

 Allocation_sow_TestPage_07() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Agency_Bulkupload).click();
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Agency_Bulkalloc_Cuslevel).click();
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Productgroup).click();
    cy.wait(2000);

    cy.get(".ng-dropdown-panel .ng-option")
      .then($options => {

        const actual = [...$options].map(option =>
          option.innerText.trim()
        );

        cy.log(`Available Options: ${actual.join(', ')}`);
        console.log('Available Options:', actual);

        expect(actual).to.include('Credit Card');
      });

    cy.wait(2000);
}

  Allocation_sow_TestPage_08() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agency_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agency_Bulkalloc_Cuslevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Bucket).click()
    cy.wait(2000);

    const expectedNumbers = ["0", "1", "2", "3","3+"];

    cy.get(".ng-dropdown-panel .ng-option")
      .then($options => {
        const actual = [...$options].map(o => o.innerText.trim());
        expect(actual).to.deep.equal(expectedNumbers);
      });
    cy.wait(2000);

  }

  Allocation_sow_TestPage_09() {

    cy.get(this.locators.ClickOn_Allocation).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agency_Bulkupload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agency_Bulkalloc_Cuslevel).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Branch).click()
    cy.wait(2000);

    const expectedBranches = ['India','Korea'];

    cy.get(".ng-dropdown-panel .ng-option")
      .then($options => {
        const actual = [...$options].map(o => o.innerText.trim());
        expect(actual).to.deep.equal(expectedBranches);
      });
    cy.wait(2000);

  }

 Allocation_sow_TestPage_10() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Agency_Bulkupload).click();
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Agency_Bulkalloc_Cuslevel).click();
    cy.wait(2000);

    cy.get(this.locators.ClickOn_CC_RadioBtn).click();
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Productgroup).click();
    cy.wait(2000);

    cy.get(".ng-dropdown-panel .ng-option")
      .then($options => {
        const actual = [...$options].map(o => o.innerText.trim());

        cy.log(`Available Options: ${actual.join(', ')}`);
        console.log('Available Options:', actual);

        expect(actual).to.include('Credit Card');
      });

    cy.wait(2000);
}
  Allocation_sow_TestPage_11() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agency_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agency_Bulkalloc_Cuslevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_CC_RadioBtn).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Bucket).click()
    cy.wait(2000);

    const expectedNumbers = ["0", "1", "2", "3","3+"];

    cy.get(".ng-dropdown-panel .ng-option")
      .then($options => {
        const actual = [...$options].map(o => o.innerText.trim());
        expect(actual).to.deep.equal(expectedNumbers);
      });
    cy.wait(2000);

  }

  Allocation_sow_TestPage_12() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agency_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agency_Bulkalloc_Cuslevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_CC_RadioBtn).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Branch).click()
    cy.wait(2000);

    const expectedBranches = [ 'India',  'Korea' ];

    cy.get(".ng-dropdown-panel .ng-option")
      .then($options => {
        const actual = [...$options].map(o => o.innerText.trim());
        expect(actual).to.deep.equal(expectedBranches);
      });
    cy.wait(2000);

  }
  Allocation_sow_TestPage_13() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Agent_Bulkupload).click();
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Agent_Bulkalloc_Acclevel).click();
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Productgroup).click();
    cy.wait(2000);

    cy.get(".ng-dropdown-panel .ng-option")
      .then($options => {
        const actual = [...$options].map(o => o.innerText.trim());

        cy.log(`Available Options: ${actual.join(', ')}`);
        console.log('Available Options:', actual);

        expect(actual).to.include('Credit Card');
      });

    cy.wait(2000);
}

  Allocation_sow_TestPage_14() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Bulkalloc_Acclevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Bucket).click()
    cy.wait(2000);

    const expectedNumbers = ["0", "1", "2", "3","3+"];

    cy.get(".ng-dropdown-panel .ng-option")
      .then($options => {
        const actual = [...$options].map(o => o.innerText.trim());
        expect(actual).to.deep.equal(expectedNumbers);
      });
    cy.wait(2000);

  }

  Allocation_sow_TestPage_15() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Bulkalloc_Acclevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Branch).click()
    cy.wait(2000);
   const expectedBranches = [ 'India', 'Korea' ];

    cy.get(".ng-dropdown-panel .ng-option")
      .then($options => {
        const actual = [...$options].map(o => o.innerText.trim());
        expect(actual).to.deep.equal(expectedBranches);
      });
    cy.wait(2000);

  }

Allocation_sow_TestPage_16() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Agent_Bulkupload).click();
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Agent_Bulkalloc_Acclevel).click();
    cy.wait(2000);

    cy.get(this.locators.ClickOn_CC_RadioBtn).click();
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Productgroup).click();
    cy.wait(2000);

    cy.get(".ng-dropdown-panel .ng-option")
      .then($options => {
          const actual = [...$options].map(o => o.innerText.trim());
          expect(actual).to.include("Credit Card");
      });

    cy.contains('.ng-option', 'Credit Card')
      .click();

    cy.wait(2000);
}

  Allocation_sow_TestPage_17() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Bulkalloc_Acclevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_CC_RadioBtn).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Bucket).click()
    cy.wait(2000);

    const expectedNumbers = ["0", "1", "2", "3","3+"];

    cy.get(".ng-dropdown-panel .ng-option")
      .then($options => {
        const actual = [...$options].map(o => o.innerText.trim());
        expect(actual).to.deep.equal(expectedNumbers);
      });
    cy.wait(2000);

  }

  Allocation_sow_TestPage_18() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Bulkalloc_Acclevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_CC_RadioBtn).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Branch).click()
    cy.wait(2000);
   const expectedBranches = [ 'India', 'Korea' ];

    cy.get(".ng-dropdown-panel .ng-option")
      .then($options => {
        const actual = [...$options].map(o => o.innerText.trim());
        expect(actual).to.deep.equal(expectedBranches);
      });
    cy.wait(2000);

  }
Allocation_sow_TestPage_19() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Agent_Bulkupload).click();
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Agent_Bulkalloc_Cuslevel).click();
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Productgroup).click();
    cy.wait(2000);

    cy.get(".ng-dropdown-panel .ng-option")
      .should('have.length.greaterThan', 0)
      .then($options => {

        const actual = [...$options].map(option =>
          option.innerText.trim()
        );

        cy.log(`Available Options: ${actual.join(', ')}`);
        console.log('Available Options:', actual);

        expect(actual).to.include('Credit Card');
      });

    cy.wait(2000);
}

  Allocation_sow_TestPage_20() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Bulkalloc_Cuslevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Bucket).click()
    cy.wait(2000);

    const expectedNumbers = ["0", "1", "2", "3","3+"];

    cy.get(".ng-dropdown-panel .ng-option")
      .then($options => {
        const actual = [...$options].map(o => o.innerText.trim());
        expect(actual).to.deep.equal(expectedNumbers);
      });
    cy.wait(2000);

  }

  Allocation_sow_TestPage_21() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Bulkalloc_Cuslevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Branch).click()
    cy.wait(2000);
   const expectedBranches = [ 'India', 'Korea' ];

    cy.get(".ng-dropdown-panel .ng-option")
      .then($options => {
        const actual = [...$options].map(o => o.innerText.trim());
        expect(actual).to.deep.equal(expectedBranches);
      });
    cy.wait(2000);

  }

 Allocation_sow_TestPage_22() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Agent_Bulkupload).click();
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Agent_Bulkalloc_Cuslevel).click();
    cy.wait(2000);

    cy.get(this.locators.ClickOn_CC_RadioBtn).click();
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Productgroup).click();
    cy.wait(2000);

    cy.get(".ng-dropdown-panel .ng-option")
      .then($options => {

        const actual = [...$options].map(option =>
          option.innerText.trim()
        );

        cy.log(actual.join(', '));
        console.log('Available Options:', actual);

        expect(actual).to.include('Credit Card');
      });

    cy.wait(2000);
}
  Allocation_sow_TestPage_23() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Bulkalloc_Cuslevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_CC_RadioBtn).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Bucket).click()
    cy.wait(2000);

    const expectedNumbers = ["0", "1", "2", "3","3+"];

    cy.get(".ng-dropdown-panel .ng-option")
      .then($options => {
        const actual = [...$options].map(o => o.innerText.trim());
        expect(actual).to.deep.equal(expectedNumbers);
      });
    cy.wait(2000);

  }

  Allocation_sow_TestPage_24() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Bulkalloc_Cuslevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_CC_RadioBtn).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Branch).click()
    cy.wait(2000);
   const expectedBranches = [ 'India', 'Korea' ];

    cy.get(".ng-dropdown-panel .ng-option")
      .then($options => {
        const actual = [...$options].map(o => o.innerText.trim());
        expect(actual).to.deep.equal(expectedBranches);
      });
    cy.wait(2000);

  }

Allocation_sow_TestPage_25() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Owner_Bulkupload).click();
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Owner_Bulkalloc_Acclevel).click();
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Productgroup).click();
    cy.wait(2000);

    cy.get(".ng-dropdown-panel .ng-option")
      .then($options => {
        const actual = [...$options].map(o => o.innerText.trim());

        // Verify Credit Card is present
        expect(actual).to.include("Credit Card");
      });

    cy.wait(2000);
}
  Allocation_sow_TestPage_26() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Owner_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Owner_Bulkalloc_Acclevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Bucket).click()
    cy.wait(2000);

    const expectedNumbers = ["0", "1", "2", "3","3+"];

    cy.get(".ng-dropdown-panel .ng-option")
      .then($options => {
        const actual = [...$options].map(o => o.innerText.trim());
        expect(actual).to.deep.equal(expectedNumbers);
      });
    cy.wait(2000);

  }

  Allocation_sow_TestPage_27() {


    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Owner_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Owner_Bulkalloc_Acclevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Branch).click()
    cy.wait(2000);
   const expectedBranches = [ 'India', 'Korea' ];

    cy.get(".ng-dropdown-panel .ng-option")
      .then($options => {
        const actual = [...$options].map(o => o.innerText.trim());
        expect(actual).to.deep.equal(expectedBranches);
      });
    cy.wait(2000);


  }
Allocation_sow_TestPage_28() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Owner_Bulkupload).click();
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Owner_Bulkalloc_Cuslevel).click();
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Productgroup).click();
    cy.wait(2000);

    cy.get(".ng-dropdown-panel .ng-option")
      .then($options => {

        const actual = [...$options].map(o => o.innerText.trim());

        cy.log('Available Options: ' + actual.join(', '));
        console.log('Available Options:', actual);

        expect(actual).to.include('Credit Card');
      });

    cy.wait(2000);
}

  Allocation_sow_TestPage_29() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Owner_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Owner_Bulkalloc_Cuslevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Bucket).click()
    cy.wait(2000);

    const expectedNumbers = ["0", "1", "2", "3","3+"];

    cy.get(".ng-dropdown-panel .ng-option")
      .then($options => {
        const actual = [...$options].map(o => o.innerText.trim());
        expect(actual).to.deep.equal(expectedNumbers);
      });
    cy.wait(2000);

  }

  Allocation_sow_TestPage_30() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Owner_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Owner_Bulkalloc_Cuslevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Branch).click()
    cy.wait(2000);
   const expectedBranches = [ 'India', 'Korea' ];

    cy.get(".ng-dropdown-panel .ng-option")
      .then($options => {
        const actual = [...$options].map(o => o.innerText.trim());
        expect(actual).to.deep.equal(expectedBranches);
      });
    cy.wait(2000);


  }
Allocation_sow_TestPage_31() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Alloc_Filters).click();
    cy.wait(2000);

    cy.get(this.locators.CLickOn_Agency_Allocfilter).click();
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Filter_Productgroup).click();
    cy.wait(2000);

    cy.get(".ng-dropdown-panel .ng-option")
      .then($options => {

        const actual = [...$options].map(o => o.innerText.trim());

        cy.log('Available Options: ' + actual.join(', '));
        console.log('Available Options:', actual);

        expect(actual).to.include('Credit Card');
      });
}
Allocation_sow_TestPage_32() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Alloc_Filters).click();
    cy.wait(2000);

    cy.get(this.locators.CLickOn_Agency_Allocfilter).click({ force: true });
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Bucketfilter)
      .should('be.visible')
      .click({ force: true });

    cy.wait(2000);
    cy.get('.panel-open > .panel > .panel-collapse > .panel-body > .row > app-hierarchy-form-field.col-lg-4 > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click({force:true});
    cy.wait(2000);
    const expectedNumbers = ["0", "1", "2", "3", "3+"];

    cy.get('.ng-option', { timeout: 10000 })
      .should('have.length', 5)
      .then(($options) => {

          const actual = [...$options]
            .map(option => option.innerText.trim());

          cy.log('Actual Values: ' + actual.join(', '));

          expect(actual).to.deep.equal(expectedNumbers);
      });
}
Allocation_sow_TestPage_33() {

    cy.get(this.locators.ClickOn_Allocation).click({ force: true });
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Alloc_Filters).click({ force: true });
    cy.wait(2000);

    cy.get(this.locators.CLickOn_Agency_Allocfilter).click({ force: true });
    cy.wait(2000);

    // Open Geography Filter
    cy.get('[heading="  Geography Filter"] .btn')
      .click({ force: true });
    cy.wait(2000);

    // Open Geography dropdown
    cy.get('.ng-select-container')
      .first()
      .scrollIntoView()
      .click({ force: true });

    cy.wait(2000);

    // Verify dropdown is opened
    cy.get('.ng-dropdown-panel', { timeout: 15000 })
      .should('be.visible');

    // Get all options
    cy.get('.ng-dropdown-panel .ng-option')
      .should('have.length.at.least', 1)
      .then($options => {

          const actual = [...$options].map(option =>
              option.innerText
                  .replace(/\u00A0/g, ' ')
                  .replace(/\s+/g, ' ')
                  .trim()
                  .toLowerCase()
          );

          cy.log('ACTUAL OPTIONS: ' + actual.join(' | '));
          console.log('ACTUAL OPTIONS:', actual);

          // Check India exists
          expect(
              actual.some(option => option.includes('India')),
              'India should be present in dropdown'
          ).to.be.true;

          // Check Korea exists
          expect(
              actual.some(option => option.includes('Korea')),
              'Korea should be present in dropdown'
          ).to.be.true;

      });

    cy.wait(2000);
}
Allocation_sow_TestPage_34() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Alloc_Filters).click();
    cy.wait(2000);

    cy.get(this.locators.CLickOn_Agency_Allocfilter).click();
    cy.wait(2000);

    // Expand Geography Filter
    cy.get('[heading="  Geography Filter"] > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn')
      .click({ force: true });

    cy.wait(2000);

    // Open Geography dropdown
    cy.get('.panel-open .ng-select-container')
      .first()
      .scrollIntoView()
      .click({ force: true });

    cy.wait(2000);

    // Verify options are displayed
    cy.get('.ng-option', { timeout: 10000 })
      .should('have.length.greaterThan', 0)
      .then(($options) => {

          const actual = [...$options].map(option =>
              option.innerText.trim()
          );

          cy.log('Actual Values: ' + actual.join(', '));
          console.log('Actual Values:', actual);

          expect(actual).to.include('India');
          expect(actual).to.include('Korea');

      });
}
Allocation_sow_TestPage_35() {

    cy.get(this.locators.ClickOn_Allocation).click({ force: true });
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Alloc_Filters).click({ force: true });
    cy.wait(2000);

    cy.get(this.locators.CLickOn_Agent_Allocfilter).click({ force: true });
    cy.wait(2000);

    cy.get('[heading="Bucket Filter"] > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn')
      .click({ force: true });

    cy.wait(2000);

    // Open Bucket dropdown
    cy.get('.panel-open > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn')
      .closest('.panel')
      .find('.ng-select-container')
      .first()
      .click({ force: true });

    cy.wait(2000);

    // Verify dropdown is opened
    cy.get('.ng-dropdown-panel', { timeout: 10000 })
      .should('exist')
      .and('be.visible');

    cy.wait(2000);

    // Verify options are displayed
    cy.get('.ng-dropdown-panel .ng-option', { timeout: 10000 })
      .should('have.length.at.least', 1);

    cy.wait(2000);

    // Capture and validate dropdown values
    cy.get('.ng-dropdown-panel .ng-option')
      .then(($options) => {

          const actual = [...$options].map(el =>
              el.innerText
                .replace(/[\n\r\t]/g, '')
                .replace(/\s+/g, ' ')
                .trim()
          );

          cy.log('ACTUAL OPTIONS FOUND: ' + JSON.stringify(actual));
          console.log('ACTUAL OPTIONS FOUND:', actual);

          const expectedNumbers = ["0", "1", "2", "3", "3+"];

          expect(actual).to.deep.equal(expectedNumbers);

      });

    // Close dropdown by clicking outside
    cy.get('body').click(0, 0, { force: true });

    // Verify dropdown is closed
    cy.get('.ng-dropdown-panel').should('not.exist');

    cy.wait(300);
}
Allocation_sow_TestPage_36() {

  
  cy.get(this.locators.ClickOn_Allocation).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Alloc_Filters).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.CLickOn_Agent_Allocfilter).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Agent_Geofilter).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Filter_Geo)
    .closest('.panel')
    .find('ng-select .ng-select-container, .ng-select .ng-select-container')
    .first()
    .click({ force: true });
    cy.wait(2000);
  cy.get('.ng-dropdown-panel', { timeout: 10000 })
    .should('exist')
    .and('be.visible');
  cy.wait(2000);
  cy.get('.ng-dropdown-panel .ng-option', { timeout: 10000 })
    .should('have.length.at.least', 1);
  cy.wait(2000);
  const expectedBranches = ['India', 'Korea'];

  cy.get('.ng-dropdown-panel .ng-option')
    .then($options => {
      const actual = [...$options].map(el =>
        el.innerText
          .replace(/[\n\r\t]/g, '')
          .replace(/\s+/g, ' ')
          .trim()
      );

      cy.log('ACTUAL GEO OPTIONS: ' + JSON.stringify(actual));
      expect(actual).to.deep.equal(expectedBranches);
    });
  cy.get(this.locators.ClickOn_Filter_Geo)
    .closest('.panel')
    .find('input[role="combobox"]')
    .first()
    .type('{esc}', { force: true });

  cy.get('.ng-dropdown-panel').should('not.exist');

  cy.wait(300);
}
  Allocation_UT_TestPage_01() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agency_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agency_Bulkalloc_Acclevel).click();
    cy.wait(2000);
    cy.contains("Account Type").should("be.visible");
    cy.wait(2000);

  }

  Allocation_UT_TestPage_02() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agency_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agency_Bulkalloc_Acclevel).click();
    cy.wait(2000);
    const expectedOptions = ['Delinquent', 'Non-Delinquent'];

    cy.get(this.locators.ClickOn_UserType)
      .find('option')
      .then($options => {
        const actual = [...$options].map(o => o.text.trim());
        expect(actual).to.deep.equal(expectedOptions);
      });

    cy.wait(2000);


  }

  Allocation_UT_TestPage_03() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agency_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agency_Bulkalloc_Acclevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_CC_RadioBtn).click();
    cy.wait(2000);
    cy.contains("Account Type").should("be.visible");
    cy.wait(2000);

  }

  Allocation_UT_TestPage_04() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agency_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agency_Bulkalloc_Acclevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_CC_RadioBtn).click();
    cy.wait(2000);
    const expectedOptions = ['Delinquent', 'Non-Delinquent'];

    cy.get(this.locators.ClickOn_UserType)
      .find('option')
      .then($options => {
        const actual = [...$options].map(o => o.text.trim());
        expect(actual).to.deep.equal(expectedOptions);
      });

    cy.wait(2000);

  }

  Allocation_UT_TestPage_05() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agency_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agency_Bulkalloc_Cuslevel).click();
    cy.wait(2000);
    cy.contains("Account Type").should("be.visible");
    cy.wait(2000);
  }

  Allocation_UT_TestPage_06() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agency_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agency_Bulkalloc_Cuslevel).click();
    cy.wait(2000);
    const expectedOptions = ['Delinquent', 'Non-Delinquent'];

    cy.get(this.locators.ClickOn_UserType)
      .find('option')
      .then($options => {
        const actual = [...$options].map(o => o.text.trim());
        expect(actual).to.deep.equal(expectedOptions);
      });

    cy.wait(2000);
  }

  Allocation_UT_TestPage_07() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agency_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agency_Bulkalloc_Cuslevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_CC_RadioBtn).click();
    cy.wait(2000);
    cy.contains("Account Type").should("be.visible");
    cy.wait(2000);
  }

  Allocation_UT_TestPage_08() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agency_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agency_Bulkalloc_Cuslevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_CC_RadioBtn).click();
    cy.wait(2000);
    const expectedOptions = ['Delinquent', 'Non-Delinquent'];

    cy.get(this.locators.ClickOn_UserType)
      .find('option')
      .then($options => {
        const actual = [...$options].map(o => o.text.trim());
        expect(actual).to.deep.equal(expectedOptions);
      });

    cy.wait(2000);
  }

  Allocation_UT_TestPage_09() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Bulkalloc_Acclevel).click();
    cy.wait(2000);
    cy.contains("Account Type").should("be.visible");
    cy.wait(2000);
  }

  Allocation_UT_TestPage_10() {


    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Bulkalloc_Acclevel).click();
    cy.wait(2000);
    const expectedOptions = ['Delinquent', 'Non-Delinquent'];

    cy.get(this.locators.ClickOn_UserType)
      .find('option')
      .then($options => {
        const actual = [...$options].map(o => o.text.trim());
        expect(actual).to.deep.equal(expectedOptions);
      });

    cy.wait(2000);
  }

  Allocation_UT_TestPage_11() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Bulkalloc_Acclevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_CC_RadioBtn).click();
    cy.wait(2000);
    cy.contains("Account Type").should("be.visible");
    cy.wait(2000);
  }

  Allocation_UT_TestPage_12() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Bulkalloc_Acclevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_CC_RadioBtn).click();
    cy.wait(2000);
    const expectedOptions = ['Delinquent', 'Non-Delinquent'];

    cy.get(this.locators.ClickOn_UserType)
      .find('option')
      .then($options => {
        const actual = [...$options].map(o => o.text.trim());
        expect(actual).to.deep.equal(expectedOptions);
      });

    cy.wait(2000);

  }

  Allocation_UT_TestPage_13() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Bulkalloc_Cuslevel).click();
    cy.wait(2000);
    cy.contains("Account Type").should("be.visible");
    cy.wait(2000);
  }

  Allocation_UT_TestPage_14() {


    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Bulkalloc_Cuslevel).click();
    cy.wait(2000);
    const expectedOptions = ['Delinquent', 'Non-Delinquent'];

    cy.get(this.locators.ClickOn_UserType)
      .find('option')
      .then($options => {
        const actual = [...$options].map(o => o.text.trim());
        expect(actual).to.deep.equal(expectedOptions);
      });

    cy.wait(2000);
  }

  Allocation_UT_TestPage_15() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Bulkalloc_Cuslevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_CC_RadioBtn).click();
    cy.wait(2000);
    cy.contains("Account Type").should("be.visible");
    cy.wait(2000);
  }

  Allocation_UT_TestPage_16() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Bulkalloc_Cuslevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_CC_RadioBtn).click();
    cy.wait(2000);
    const expectedOptions = ['Delinquent', 'Non-Delinquent'];

    cy.get(this.locators.ClickOn_UserType)
      .find('option')
      .then($options => {
        const actual = [...$options].map(o => o.text.trim());
        expect(actual).to.deep.equal(expectedOptions);
      });

    cy.wait(2000);

  }

  Allocation_UT_TestPage_17() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Owner_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Owner_Bulkalloc_Acclevel).click();
    cy.wait(2000);
    cy.contains("Account Type").should("be.visible");
    cy.wait(2000);
  }

  Allocation_UT_TestPage_18() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Owner_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Owner_Bulkalloc_Acclevel).click();
    cy.wait(2000);
    const expectedOptions = ['Delinquent', 'Non-Delinquent'];

    cy.get(this.locators.ClickOn_UserType)
      .find('option')
      .then($options => {
        const actual = [...$options].map(o => o.text.trim());
        expect(actual).to.deep.equal(expectedOptions);
      });

    cy.wait(2000);
  }

  Allocation_UT_TestPage_19() {
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Owner_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Owner_Bulkalloc_Cuslevel).click();
    cy.wait(2000);
    cy.contains("Account Type").should("be.visible");
    cy.wait(2000);
  }

  Allocation_UT_TestPage_20() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Owner_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Owner_Bulkalloc_Cuslevel).click();
    cy.wait(2000);
    const expectedOptions = ['Delinquent', 'Non-Delinquent'];

    cy.get(this.locators.ClickOn_UserType)
      .find('option')
      .then($options => {
        const actual = [...$options].map(o => o.text.trim());
        expect(actual).to.deep.equal(expectedOptions);
      });

    cy.wait(2000);

  }

 Allocation_UT_TestPage_21() {

  cy.get(this.locators.ClickOn_Allocation).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_Agency_Bulkupload).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_Agency_Bulkalloc_Acclevel).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_UserType)
    .contains("Delinquent")
    .should("be.visible");

  // PRODUCT GROUP
  cy.get(this.locators.ClickOn_Productgroup)
    .click({ force: true });

  cy.get('.ng-dropdown-panel')
    .should('be.visible');

  cy.get('.ng-dropdown-panel .ng-option')
    .each(($el) => {
      cy.wrap($el)
        .scrollIntoView()
        .click({ force: true });

      cy.wait(500);
    });

  cy.get('body').click(); // close dropdown

  // BUCKET
  cy.get(this.locators.ClickOn_Bucket)
    .click({ force: true });

  cy.get('.ng-dropdown-panel')
    .should('be.visible');

  cy.get('.ng-dropdown-panel .ng-option')
    .each(($el) => {
      cy.wrap($el)
        .scrollIntoView()
        .click({ force: true });

      cy.wait(500);
    });

  cy.get('body').click();

  // COUNTRY
  cy.get(this.locators.ClickOn_Country)
    .click({ force: true });

  cy.get('.ng-dropdown-panel')
    .should('be.visible');

  cy.get('.ng-dropdown-panel .ng-option')
    .each(($el) => {
      cy.wrap($el)
        .scrollIntoView()
        .click({ force: true });

      cy.wait(500);
    });

  cy.get('body').click();

  cy.get(this.locators.ClickOn_DownloadAccounts).click();
  cy.wait(2000);

  cy.contains("Search Result").should("be.visible");
}
  Allocation_UT_TestPage_22() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agency_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agency_Bulkalloc_Acclevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_UserType).select('Non-Delinquent', { force: true });
    cy.wait(2000);
    cy.contains("Bucket(s)").should("not.exist");
    cy.wait(2000);

  }

 Allocation_UT_TestPage_23() {

  cy.get(this.locators.ClickOn_Allocation).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_Agency_Bulkupload).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_Agency_Bulkalloc_Acclevel).click();
  cy.wait(2000);

  // ✅ FIX: native select dropdown
  cy.get(this.locators.ClickOn_UserType)
    .should('be.visible')
    .select('Non-Delinquent');

  cy.wait(2000);

  // PRODUCT GROUP (ng-select)
  cy.get(this.locators.ClickOn_Productgroup)
    .click({ force: true });

  cy.contains('.ng-option', 'Credit')
    .should('be.visible')
    .click({ force: true });

  cy.get('body').click(0, 0);

  cy.wait(2000);

  // COUNTRY (ng-select)
  cy.get(this.locators.Click_Country_WithoutBUcket)
    .click({ force: true });

  cy.contains('.ng-option', 'India')
    .should('be.visible')
    .click({ force: true });

  cy.get('body').click(0, 0);

  cy.wait(2000);

  cy.get(this.locators.ClickOn_DownloadAccounts).click();

  cy.contains("Search Result").should("be.visible");
}

Allocation_UT_TestPage_24() {

  cy.get(this.locators.ClickOn_Allocation).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_Agency_Bulkupload).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_Agency_Bulkalloc_Acclevel).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_CC_RadioBtn).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_UserType)
    .should('be.visible')
    .contains("Delinquent")
    .should("be.visible");

  // ---------------- PRODUCT GROUP ----------------
  cy.get(this.locators.ClickOn_Productgroup)
    .click({ force: true });

  cy.get('.ng-dropdown-panel').should('be.visible');

  cy.contains('.ng-option', 'Credit')   // keep ONLY if confirmed in UI
    .click({ force: true });

  cy.get('body').click(0, 0);

  cy.wait(2000);

  // ---------------- BUCKET ----------------
  cy.get(this.locators.ClickOn_Bucket)
    .click({ force: true });

  cy.get('.ng-dropdown-panel')
    .should('be.visible');

  cy.get('.ng-option')
    .should('have.length.greaterThan', 0);

  // ⚠️ IMPORTANT: replace THIS with actual UI value
  cy.contains('.ng-option', '3+')   // <-- example only
    .should('be.visible')
    .click({ force: true });

  cy.get('body').click(0, 0);

  cy.wait(2000);

  // ---------------- COUNTRY ----------------
  cy.get(this.locators.ClickOn_Country)
    .click({ force: true });

  cy.get('.ng-dropdown-panel')
    .should('be.visible');

  cy.contains('.ng-option', 'India')
    .should('be.visible')
    .click({ force: true });

  cy.get('body').click(0, 0);

  cy.wait(2000);

  // ---------------- DOWNLOAD ----------------
  cy.get(this.locators.ClickOn_DownloadAccounts).click();

  cy.contains("Search Result")
    .should("be.visible");
}
  Allocation_UT_TestPage_25() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agency_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agency_Bulkalloc_Acclevel).click();
    cy.wait(2000);
      cy.get(this.locators.ClickOn_CC_RadioBtn).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_UserType).select('Non-Delinquent', { force: true });
    cy.wait(2000);
    cy.contains("Bucket(s)").should("not.exist");
    cy.wait(2000);

  }

 Allocation_UT_TestPage_26() {

  cy.get(this.locators.ClickOn_Allocation).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_Agency_Bulkupload).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_Agency_Bulkalloc_Acclevel).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_CC_RadioBtn).click();
  cy.wait(2000);

  // ---------------- USER TYPE (NATIVE SELECT) ----------------
  cy.get(this.locators.ClickOn_UserType)
    .should('be.visible')
    .select('Non-Delinquent');   // ✅ FIXED

  cy.wait(2000);

  // ---------------- PRODUCT GROUP (NG-SELECT) ----------------
  cy.get(this.locators.ClickOn_Productgroup)
    .click({ force: true });

  cy.get('.ng-dropdown-panel')
    .should('be.visible');

  cy.contains('.ng-option', 'Credit')   // ⚠️ change if UI value differs
    .should('be.visible')
    .click({ force: true });

  cy.get('body').click(0, 0); // close dropdown
  cy.wait(2000);

  // ---------------- COUNTRY (NG-SELECT) ----------------
  cy.get(this.locators.Click_Country_WithoutBUcket)
    .click({ force: true });

  cy.get('.ng-dropdown-panel')
    .should('be.visible');

  cy.contains('.ng-option', 'India')   // ⚠️ replace if different value
    .should('be.visible')
    .click({ force: true });

  cy.get('body').click(0, 0);
  cy.wait(2000);

  // ---------------- DOWNLOAD ----------------
  cy.get(this.locators.ClickOn_DownloadAccounts).click();

  cy.contains("Search Result")
    .should("be.visible");
 }
Allocation_UT_TestPage_27() {

  cy.get(this.locators.ClickOn_Allocation).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_Agency_Bulkupload).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_Agency_Bulkalloc_Cuslevel).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_UserType)
    .contains("Delinquent")
    .should("be.visible");

  // ---------------- PRODUCT GROUP ----------------
  cy.get(this.locators.ClickOn_Productgroup)
    .click({ force: true });

  cy.get('.ng-dropdown-panel').should('be.visible');

  cy.contains('.ng-option', 'Credit')   // ⚠️ replace if UI differs
    .should('be.visible')
    .click({ force: true });

  cy.get('body').click(0, 0);
  cy.wait(2000);

  // ---------------- BUCKET ----------------
  cy.get(this.locators.ClickOn_Bucket)
    .click({ force: true });

  cy.get('.ng-dropdown-panel').should('be.visible');

  cy.contains('.ng-option', '1')   // ⚠️ replace with real value
    .should('be.visible')
    .click({ force: true });

  cy.get('body').click(0, 0);
  cy.wait(2000);

  // ---------------- COUNTRY ----------------
  cy.get(this.locators.ClickOn_Country)
    .click({ force: true });

  cy.get('.ng-dropdown-panel').should('be.visible');

  cy.contains('.ng-option', 'India')
    .should('be.visible')
    .click({ force: true });

  cy.get('body').click(0, 0);
  cy.wait(2000);

  // ---------------- DOWNLOAD ----------------
  cy.get(this.locators.Click_Downloads_Agency_Cuslevel)
    .click();

  cy.contains("Search Result")
    .should("be.visible");
}

  Allocation_UT_TestPage_28() {
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agency_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agency_Bulkalloc_Cuslevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_UserType).select('Non-Delinquent', { force: true });
    cy.wait(2000);
    cy.contains("Bucket(s)").should("not.exist");
    cy.wait(2000);

  }
Allocation_UT_TestPage_29() {

  cy.get(this.locators.ClickOn_Allocation).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_Agency_Bulkupload).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_Agency_Bulkalloc_Cuslevel).click();
  cy.wait(2000);

  // ---------------- USER TYPE (NATIVE SELECT) ----------------
  cy.get(this.locators.ClickOn_UserType)
    .should('be.visible')
    .select('Non-Delinquent');

  cy.wait(2000);

  // ---------------- PRODUCT GROUP (NG-SELECT) ----------------
  cy.get(this.locators.ClickOn_Productgroup)
    .click({ force: true });

  cy.get('.ng-dropdown-panel')
    .should('be.visible');

  cy.contains('.ng-option', 'Credit')   // ⚠️ replace if needed
    .should('be.visible')
    .click({ force: true });

  cy.get('body').click(0, 0);
  cy.wait(2000);

  // ---------------- COUNTRY (NG-SELECT) ----------------
  cy.get(this.locators.Click_Country_WithoutBUcket)
    .click({ force: true });

  cy.get('.ng-dropdown-panel')
    .should('be.visible');

  cy.contains('.ng-option', 'India')
    .should('be.visible')
    .click({ force: true });

  cy.get('body').click(0, 0);
  cy.wait(2000);

  // ---------------- DOWNLOAD ----------------
  cy.get(this.locators.Click_Downloads_Agency_Cuslevel)
    .click();

  cy.contains("Search Result")
    .should("be.visible");
}

Allocation_UT_TestPage_30() {

  cy.get(this.locators.ClickOn_Allocation).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_Agency_Bulkupload).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_Agency_Bulkalloc_Cuslevel).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_CC_RadioBtn).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_UserType)
    .contains("Delinquent")
    .should("be.visible");

  // ---------------- PRODUCT GROUP ----------------
  cy.get(this.locators.ClickOn_Productgroup)
    .click({ force: true });

  cy.get('.ng-dropdown-panel')
    .should('be.visible');

  cy.contains('.ng-option', 'Credit')   // ⚠️ replace with real value if needed
    .should('be.visible')
    .click({ force: true });

  cy.get('body').click(0, 0); // close dropdown
  cy.wait(2000);

  // ---------------- BUCKET ----------------
  cy.get(this.locators.ClickOn_Bucket)
    .click({ force: true });

  cy.get('.ng-dropdown-panel')
    .should('be.visible');

  cy.contains('.ng-option', '0')   // ⚠️ replace with actual value
    .should('be.visible')
    .click({ force: true });

  cy.get('body').click(0, 0);
  cy.wait(2000);

  // ---------------- COUNTRY ----------------
  cy.get(this.locators.ClickOn_Country)
    .click({ force: true });

  cy.get('.ng-dropdown-panel')
    .should('be.visible');

  cy.contains('.ng-option', 'India')
    .should('be.visible')
    .click({ force: true });

  cy.get('body').click(0, 0);
  cy.wait(2000);

  // ---------------- DOWNLOAD ----------------
  cy.get(this.locators.Click_Downloads_Agency_Cuslevel)
    .click();

  cy.contains("Search Result")
    .should("be.visible");
}
  Allocation_UT_TestPage_31() {

      cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agency_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agency_Bulkalloc_Cuslevel).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_CC_RadioBtn).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_UserType).select('Non-Delinquent', { force: true });
    cy.wait(2000);
    cy.contains("Bucket(s)").should("not.exist");
    cy.wait(2000);

  }

Allocation_UT_TestPage_32() {

  cy.get(this.locators.ClickOn_Allocation).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_Agency_Bulkupload).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_Agency_Bulkalloc_Cuslevel).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_CC_RadioBtn).click();
  cy.wait(2000);

  // ---------------- USER TYPE (NATIVE SELECT) ----------------
  cy.get(this.locators.ClickOn_UserType)
    .should('be.visible')
    .select('Non-Delinquent');

  cy.wait(2000);

  // ---------------- PRODUCT GROUP (NG-SELECT) ----------------
  cy.get(this.locators.ClickOn_Productgroup)
    .click({ force: true });

  cy.get('.ng-dropdown-panel').should('be.visible');

  cy.contains('.ng-option', 'Credit')   // ⚠️ replace if needed
    .should('be.visible')
    .click({ force: true });

  cy.get('body').click(0, 0);
  cy.wait(2000);

  // ---------------- COUNTRY (NG-SELECT) ----------------
  cy.get(this.locators.Click_Country_WithoutBUcket)
    .click({ force: true });

  cy.get('.ng-dropdown-panel').should('be.visible');

  cy.contains('.ng-option', 'India')
    .should('be.visible')
    .click({ force: true });

  cy.get('body').click(0, 0);
  cy.wait(2000);

  // ---------------- DOWNLOAD ----------------
  cy.get(this.locators.Click_Downloads_Agency_Cuslevel).click();

  cy.contains("Search Result")
    .should("be.visible");
}
  Allocation_UT_TestPage_33() {

  cy.get(this.locators.ClickOn_Allocation).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_Agent_Bulkupload).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_Agent_Bulkalloc_Acclevel).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_UserType)
    .contains("Delinquent")
    .should("be.visible");

  // ---------------- PRODUCT GROUP ----------------
  cy.get(this.locators.ClickOn_Productgroup)
    .click({ force: true });

  cy.get('.ng-dropdown-panel').should('be.visible');

  cy.contains('.ng-option', 'Credit')   // ⚠️ replace if needed
    .should('be.visible')
    .click({ force: true });

  cy.get('body').click(0, 0);
  cy.wait(2000);

  // ---------------- BUCKET ----------------
  cy.get(this.locators.ClickOn_Bucket)
    .click({ force: true });

  cy.get('.ng-dropdown-panel').should('be.visible');

  cy.contains('.ng-option', '2','0')   // ⚠️ replace with actual value
    .should('be.visible')
    .click({ force: true });

  cy.get('body').click(0, 0);
  cy.wait(2000);

  // ---------------- COUNTRY ----------------
  cy.get(this.locators.ClickOn_Country)
    .click({ force: true });

  cy.get('.ng-dropdown-panel').should('be.visible');

  cy.contains('.ng-option', 'India')
    .should('be.visible')
    .click({ force: true });

  cy.get('body').click(0, 0);
  cy.wait(2000);

  // ---------------- DOWNLOAD ----------------
  cy.get(this.locators.ClickOn_DownloadAccounts).click();

  cy.contains("Search Result")
    .should("be.visible");
}

  Allocation_UT_TestPage_34() {

      cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Bulkalloc_Acclevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_UserType).select('Non-Delinquent', { force: true });
    cy.wait(2000);
    cy.contains("Bucket(s)").should("not.exist");
    cy.wait(2000);

  }
Allocation_UT_TestPage_35() {

  cy.get(this.locators.ClickOn_Allocation).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_Agent_Bulkupload).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_Agent_Bulkalloc_Acclevel).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_UserType)
    .should('be.visible')
    .select('Non-Delinquent');

  cy.wait(2000);

  // ---------------- PRODUCT GROUP ----------------
  cy.get(this.locators.ClickOn_Productgroup)
    .click({ force: true });

  cy.get('.ng-dropdown-panel').should('be.visible');

  cy.contains('.ng-option', 'Credit')   // ⚠️ replace if needed
    .should('be.visible')
    .click({ force: true });

  cy.get('body').click(0, 0);
  cy.wait(2000);

  // ---------------- COUNTRY ----------------
  cy.get(this.locators.Click_Country_WithoutBUcket)
    .click({ force: true });

  cy.get('.ng-dropdown-panel').should('be.visible');

  cy.contains('.ng-option', 'India')
    .should('be.visible')
    .click({ force: true });

  cy.get('body').click(0, 0);
  cy.wait(2000);

  // ---------------- DOWNLOAD ----------------
  cy.get(this.locators.ClickOn_DownloadAccounts).click();

  cy.contains("Search Result")
    .should("be.visible");
}

Allocation_UT_TestPage_36() {

  cy.get(this.locators.ClickOn_Allocation).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_Agent_Bulkupload).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_Agent_Bulkalloc_Acclevel).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_CC_RadioBtn).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_UserType)
    .contains("Delinquent")
    .should("be.visible");

  // ---------------- PRODUCT GROUP ----------------
  cy.get(this.locators.ClickOn_Productgroup)
    .click({ force: true });

  cy.get('.ng-dropdown-panel').should('be.visible');

  cy.contains('.ng-option', 'Credit')   // ⚠️ replace if needed
    .should('be.visible')
    .click({ force: true });

  cy.get('body').click(0, 0); // close dropdown
  cy.wait(2000);

  // ---------------- BUCKET ----------------
  cy.get(this.locators.ClickOn_Bucket)
    .click({ force: true });

  cy.get('.ng-dropdown-panel').should('be.visible');

  cy.contains('.ng-option', '3')   // ⚠️ replace with actual value
    .should('be.visible')
    .click({ force: true });

  cy.get('body').click(0, 0);
  cy.wait(2000);

  // ---------------- COUNTRY ----------------
  cy.get(this.locators.ClickOn_Country)
    .click({ force: true });

  cy.get('.ng-dropdown-panel').should('be.visible');

  cy.contains('.ng-option', 'India')
    .should('be.visible')
    .click({ force: true });

  cy.get('body').click(0, 0);
  cy.wait(2000);

  // ---------------- DOWNLOAD ----------------
  cy.get(this.locators.ClickOn_DownloadAccounts).click();

  cy.contains("Search Result")
    .should("be.visible");
}
Allocation_UT_TestPage_37() {

  // WAIT UNTIL PAGE IS READY (NO LOADER DEPENDENCY)
  cy.get(this.locators.ClickOn_Allocation, { timeout: 20000 })
    .should('be.visible')
    .and('not.be.disabled');

  cy.get(this.locators.ClickOn_Allocation).click();

  cy.get(this.locators.ClickOn_Agent_Bulkupload)
    .should('be.visible')
    .click();

  cy.get(this.locators.ClickOn_Agent_Bulkalloc_Acclevel)
    .should('be.visible')
    .click();

  cy.get(this.locators.ClickOn_CC_RadioBtn)
    .should('be.visible')
    .click();

  cy.get(this.locators.ClickOn_UserType)
    .should('be.visible')
    .select('Non-Delinquent');

  cy.contains("Bucket(s)").should("not.exist");
}

Allocation_UT_TestPage_38() {

  cy.get(this.locators.ClickOn_Allocation).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_Agent_Bulkupload).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_Agent_Bulkalloc_Acclevel).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_CC_RadioBtn).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_UserType)
    .should('be.visible')
    .select('Non-Delinquent');
  cy.wait(2000);
  // ---------------- PRODUCT GROUP ----------------
  cy.get(this.locators.ClickOn_Productgroup)
    .click({ force: true });
  cy.wait(2000);
  cy.get('.ng-dropdown-panel').should('be.visible');
  cy.wait(2000);
  cy.contains('.ng-option', 'Credit')   // ⚠️ change if needed
    .should('be.visible')
    .click({ force: true });
  cy.wait(2000);
  cy.get('body').click(0, 0); // close dropdown
  cy.wait(1500);
  // ---------------- COUNTRY ----------------
  cy.get(this.locators.Click_Country_WithoutBUcket)
    .click({ force: true });
  cy.wait(2000);
  cy.get('.ng-dropdown-panel').should('be.visible');
  cy.wait(2000);
  cy.contains('.ng-option', 'India')
    .should('be.visible')
    .click({ force: true });
  cy.wait(2000);
  cy.get('body').click(0, 0);
  cy.wait(1500);
  // ---------------- DOWNLOAD ----------------
  cy.get(this.locators.ClickOn_DownloadAccounts)
    .click();
  cy.wait(2000);
  cy.contains("Search Result")
    .should("be.visible");
}

Allocation_UT_TestPage_39() {

  cy.get(this.locators.ClickOn_Allocation).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_Agent_Bulkupload).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_Agent_Bulkalloc_Cuslevel).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_UserType)
    .contains("Delinquent")
    .should("be.visible");

  // Product Group
  cy.get(this.locators.ClickOn_Productgroup)
    .click({ force: true });

  cy.get('.ng-dropdown-panel .ng-option')
    .first()
    .click({ force: true });

  cy.get('body').click(0, 0);   // close dropdown

  // Bucket
  cy.get(this.locators.ClickOn_Bucket)
    .click({ force: true });

  cy.get('.ng-dropdown-panel .ng-option')
    .first()
    .click({ force: true });

  cy.get('body').click(0, 0);

  // Country
  cy.get(this.locators.ClickOn_Country)
    .click({ force: true });

  cy.get('.ng-dropdown-panel .ng-option')
    .first()
    .click({ force: true });

  cy.get('body').click(0, 0);

  cy.get(this.locators.Click_Downloads_Agency_Cuslevel)
    .click();

  cy.contains("Search Result").should("be.visible");
}
Allocation_UT_TestPage_40(){

   cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Bulkalloc_Cuslevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_UserType).select('Non-Delinquent', { force: true });
    cy.wait(2000);
    cy.contains("Bucket(s)").should("not.exist");
    cy.wait(2000);

}
Allocation_UT_TestPage_41() {

  cy.get(this.locators.ClickOn_Allocation).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_Agent_Bulkupload).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_Agent_Bulkalloc_Cuslevel).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_UserType)
    .select('Non-Delinquent', { force: true });

  cy.wait(2000);

  // PRODUCT GROUP
  cy.get(this.locators.ClickOn_Productgroup)
    .click({ force: true });

  cy.get('.ng-dropdown-panel')
    .should('be.visible');

  cy.get('.ng-dropdown-panel .ng-option')
    .first()
    .click({ force: true });

  // Close dropdown
  cy.get('body').click(0, 0);
  cy.wait(2000);

  // COUNTRY
  cy.get(this.locators.Click_Country_WithoutBUcket)
    .click({ force: true });

  cy.get('.ng-dropdown-panel')
    .should('be.visible');

  cy.get('.ng-dropdown-panel .ng-option')
    .first()
    .click({ force: true });

  // Close dropdown
  cy.get('body').click(0, 0);
  cy.wait(2000);

  // DOWNLOAD
  cy.get(this.locators.Click_Downloads_Agency_Cuslevel)
    .click({ force: true });

  cy.wait(3000);

  // VERIFY SEARCH RESULT EXISTS
  cy.contains('Search Result')
    .should('exist');
}
Allocation_UT_TestPage_42() {

  cy.get(this.locators.ClickOn_Allocation).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_Agent_Bulkupload).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_Agent_Bulkalloc_Cuslevel).click();
  cy.wait(2000);

  // CC Radio Button
  cy.get(this.locators.ClickOn_CC_RadioBtn)
    .click({ force: true });

  cy.wait(2000);

  // Verify Delinquent User Type
  cy.get(this.locators.ClickOn_UserType)
    .contains('Delinquent')
    .should('be.visible');

  // PRODUCT GROUP
  cy.get(this.locators.ClickOn_Productgroup)
    .click({ force: true });

  cy.get('.ng-dropdown-panel')
    .should('be.visible');

  cy.get('.ng-dropdown-panel .ng-option')
    .first()
    .click({ force: true });

  // Close dropdown
  cy.get('body').click(0, 0);
  cy.wait(1500);

  // BUCKET
  cy.get(this.locators.ClickOn_Bucket)
    .click({ force: true });

  cy.get('.ng-dropdown-panel')
    .should('be.visible');

  cy.get('.ng-dropdown-panel .ng-option')
    .first()
    .click({ force: true });

  // Close dropdown
  cy.get('body').click(0, 0);
  cy.wait(1500);

  // COUNTRY
  cy.get(this.locators.ClickOn_Country)
    .click({ force: true });

  cy.get('.ng-dropdown-panel')
    .should('be.visible');

  cy.get('.ng-dropdown-panel .ng-option')
    .first()
    .click({ force: true });

  // Close dropdown
  cy.get('body').click(0, 0);
  cy.wait(1500);

  // DOWNLOAD
  cy.get(this.locators.Click_Downloads_Agency_Cuslevel)
    .click({ force: true });

  cy.wait(3000);

  // VERIFY
  cy.contains('Search Result')
    .should('exist');
}
Allocation_UT_TestPage_43(){

  cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Bulkalloc_Cuslevel).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_CC_RadioBtn).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_UserType).select('Non-Delinquent', { force: true });
    cy.wait(2000);
    cy.contains("Bucket(s)").should("not.exist");
    cy.wait(2000);

}

Allocation_UT_TestPage_44() {

  cy.get(this.locators.ClickOn_Allocation).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Agent_Bulkupload).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Agent_Bulkalloc_Cuslevel).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_CC_RadioBtn).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_UserType).select('Non-Delinquent', { force: true });
  cy.wait(2000);

  // Fix: use { force: true } to handle ng-select input being covered
  cy.get(this.locators.ClickOn_Productgroup).click({ force: true });
  cy.wait(2000);

  cy.get('.ng-dropdown-panel').should('be.visible')
    .within(() => {
      cy.get('.ng-option').each(($option) => {
        cy.wrap($option).click({ force: true });
        cy.wait(1000);
      });
    });
  cy.wait(2000);

  // Fix: use { force: true } here as well for the same reason
  cy.get(this.locators.Click_Country_WithoutBUcket).click({ force: true });
  cy.wait(2000);

  cy.get('.ng-dropdown-panel').should('be.visible')
    .within(() => {
      cy.get('.ng-option').each(($option) => {
        cy.wrap($option).click({ force: true });
        cy.wait(1000);
      });
    });
  cy.wait(2000);

  cy.get(this.locators.Click_Downloads_Agency_Cuslevel).click();
  cy.wait(2000);

  cy.contains("Search Result").should("be.visible");
  cy.wait(2000);
}

Allocation_UT_TestPage_45() {

  cy.get(this.locators.ClickOn_Allocation).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Owner_Bulkupload).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Owner_Bulkalloc_Acclevel).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.ClickOn_UserType).contains("Delinquent").should("be.visible");
  cy.wait(2000);

  // Fix: force click to bypass ng-option-label covering the input
  cy.get(this.locators.ClickOn_Productgroup).click({ force: true });
  cy.wait(2000);

  cy.get('.ng-dropdown-panel').should('be.visible')
    .within(() => {
      cy.get('.ng-option').each(($option) => {
        cy.wrap($option).click({ force: true });
        cy.wait(1000);
      });
    });
  cy.wait(2000);

  // Fix: force click for the same ng-select overlap reason
  cy.get(this.locators.ClickOn_Bucket).click({ force: true });
  cy.wait(2000);

  cy.get('.ng-dropdown-panel').should('be.visible')
    .within(() => {
      cy.get('.ng-option').each(($option) => {
        cy.wrap($option).click({ force: true });
        cy.wait(1000);
      });
    });
  cy.wait(2000);

  // Fix: force click for the same ng-select overlap reason
  cy.get(this.locators.ClickOn_Country).click({ force: true });
  cy.wait(2000);

  cy.get('.ng-dropdown-panel').should('be.visible')
    .within(() => {
      cy.get('.ng-option').each(($option) => {
        cy.wrap($option).click({ force: true });
        cy.wait(1000);
      });
    });
  cy.wait(2000);

  cy.get(this.locators.ClickOn_DownloadAccounts).click();
  cy.wait(2000);

  cy.contains("Search Result").should("be.visible");
  cy.wait(2000);
}
Allocation_UT_TestPage_46(){

   cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Owner_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Owner_Bulkalloc_Acclevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_UserType).select('Non-Delinquent', { force: true });
    cy.wait(2000);
    cy.contains("Bucket(s)").should("not.exist");
    cy.wait(2000);

}

Allocation_UT_TestPage_47() {

    cy.get(this.locators.ClickOn_Allocation).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Owner_Bulkupload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Owner_Bulkalloc_Acclevel).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.ClickOn_UserType).select('Non-Delinquent', { force: true });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Productgroup).click({ force: true });
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option')
      .each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(500);
      });
    cy.wait(2000);
    cy.get('body').click(0, 0, { force: true });
    cy.wait(2000);
    cy.get('.ng-dropdown-panel').should('not.exist');
    cy.wait(2000);
    cy.get(this.locators.Click_Country_WithoutBUcket).click({ force: true });
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option')
      .each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(500);
      });
    cy.wait(2000);
    cy.get('body').click(0, 0, { force: true });
    cy.wait(2000);
    cy.get('.ng-dropdown-panel').should('not.exist');
    cy.wait(2000);
    cy.get(this.locators.ClickOn_DownloadAccounts).click({ force: true });

    cy.wait(2000);

    cy.contains('Search Result').scrollIntoView();
      
    cy.wait(2000);
}

Allocation_UT_TestPage_48() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Owner_Bulkupload).click();
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Owner_Bulkalloc_Cuslevel).click();
    cy.wait(2000);

    cy.get(this.locators.ClickOn_UserType)
      .contains("Delinquent")
      .should("be.visible");

    cy.wait(2000);

    // Product Group
    cy.get(this.locators.ClickOn_Productgroup)
      .click({ force: true });

    cy.wait(2000);

    cy.get('.ng-dropdown-panel .ng-option')
      .each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(500);
      });

    // Close Product Group dropdown
    cy.get('body').click(0, 0, { force: true });
    cy.wait(1000);

    // Bucket
    cy.get(this.locators.ClickOn_Bucket)
      .click({ force: true });

    cy.wait(2000);

    cy.get('.ng-dropdown-panel .ng-option')
      .each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(500);
      });

    // Close Bucket dropdown
    cy.get('body').click(0, 0, { force: true });
    cy.wait(1000);

    // Country
    cy.get(this.locators.ClickOn_Country)
      .click({ force: true });

    cy.wait(2000);

    cy.get('.ng-dropdown-panel .ng-option')
      .each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(500);
      });

    // Close Country dropdown
    cy.get('body').click(0, 0, { force: true });
    cy.wait(1000);

    cy.get(this.locators.ClickOn_DownloadAccounts)
      .click({ force: true });

    cy.wait(2000);

    cy.contains("Search Result")
      .scrollIntoView().should("be.visible");
}

Allocation_UT_TestPage_49(){

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Owner_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Owner_Bulkalloc_Cuslevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_UserType).select('Non-Delinquent', { force: true });
    cy.wait(2000);
    cy.contains("Bucket(s)").should("not.exist");
    cy.wait(2000);

}

Allocation_UT_TestPage_50() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Owner_Bulkupload).click();
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Owner_Bulkalloc_Cuslevel).click();
    cy.wait(2000);

    cy.get(this.locators.ClickOn_UserType)
      .select('Non-Delinquent', { force: true });
    cy.wait(2000);

    // Product Group
    cy.get(this.locators.ClickOn_Productgroup)
      .scrollIntoView()
      .click({ force: true });

    cy.get('.ng-dropdown-panel')
      .should('be.visible');

    cy.get('.ng-option').then(($options) => {
        const count = $options.length;

        for (let i = 0; i < count; i++) {

            cy.get(this.locators.ClickOn_Productgroup)
              .click({ force: true });

            cy.get('.ng-dropdown-panel')
              .should('be.visible');

            cy.get('.ng-option')
              .eq(i)
              .click({ force: true });

            cy.wait(500);
        }
    });

    // Close Product Group dropdown
    cy.get('body').click(0, 0, { force: true });
    cy.wait(1000);

    cy.get('.ng-dropdown-panel').should('not.exist');

    // Country Without Bucket
    cy.get(this.locators.Click_Country_WithoutBUcket)
      .scrollIntoView()
      .click({ force: true });

    cy.get('.ng-dropdown-panel')
      .should('be.visible');

    cy.get('.ng-option').then(($options) => {
        const count = $options.length;

        for (let i = 0; i < count; i++) {

            cy.get(this.locators.Click_Country_WithoutBUcket)
              .click({ force: true });

            cy.get('.ng-dropdown-panel')
              .should('be.visible');

            cy.get('.ng-option')
              .eq(i)
              .click({ force: true });

            cy.wait(500);
        }
    });

    // Close Country dropdown
    cy.get('body').click(0, 0, { force: true });
    cy.wait(1000);

    cy.get('.ng-dropdown-panel').should('not.exist');

    // Download Accounts
    cy.get(this.locators.ClickOn_DownloadAccounts)
      .scrollIntoView()
      .click({ force: true });

    cy.contains("Search Result")
      .should("be.visible");

    cy.wait(2000);
}




}




export default AllocationPage;
