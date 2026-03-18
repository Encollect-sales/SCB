import { getLocators } from '../utils/locatorUtils';
import { getBaseUrl } from '../utils/configUtils';
import { faker } from '@faker-js/faker';

class AllocationPage {
  constructor(locators) {
    this.locators = locators;
  }

  Allocation_sow_TestPage_01() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agency_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agency_Bulkalloc_Acclevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Productgroup).click()
    cy.wait(2000);

    const expectedOption = ["CreditCard"];

    cy.get(".ng-dropdown-panel .ng-option")
      .then($options => {
        const actual = [...$options].map(o => o.innerText.trim());
        expect(actual).to.deep.equal(expectedOption);
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

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agency_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agency_Bulkalloc_Acclevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Branch).click()
    cy.wait(2000);

    const expectedBranches = ["Chennai Main", "Pallikaranai","Velachery"];

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
    cy.get(this.locators.ClickOn_Productgroup).click()
    cy.wait(2000);

    const expectedOption = ["CreditCard"];

    cy.get(".ng-dropdown-panel .ng-option")
      .then($options => {
        const actual = [...$options].map(o => o.innerText.trim());
        expect(actual).to.deep.equal(expectedOption);
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

    const expectedBranches = ["Chennai Main", "Pallikaranai","Velachery"];

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
    cy.get(this.locators.ClickOn_Productgroup).click()
    cy.wait(2000);

    const expectedOption = ["CreditCard"];

    cy.get(".ng-dropdown-panel .ng-option")
      .then($options => {
        const actual = [...$options].map(o => o.innerText.trim());
        expect(actual).to.deep.equal(expectedOption);
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

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agency_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agency_Bulkalloc_Cuslevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Branch).click()
    cy.wait(2000);

    const expectedBranches = ["Chennai Main", "Pallikaranai","Velachery"];

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
    cy.get(this.locators.ClickOn_Productgroup).click()
    cy.wait(2000);

    const expectedOption = ["CreditCard"];

    cy.get(".ng-dropdown-panel .ng-option")
      .then($options => {
        const actual = [...$options].map(o => o.innerText.trim());
        expect(actual).to.deep.equal(expectedOption);
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

    const expectedBranches = ["Chennai Main", "Pallikaranai","Velachery"];

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
    cy.get(this.locators.ClickOn_Productgroup).click()
    cy.wait(2000);

    const expectedOption = ["CreditCard"];

    cy.get(".ng-dropdown-panel .ng-option")
      .then($options => {
        const actual = [...$options].map(o => o.innerText.trim());
        expect(actual).to.deep.equal(expectedOption);
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

    const expectedBranches = ["Chennai Main", "Pallikaranai","Velachery"];

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
    cy.get(this.locators.ClickOn_Productgroup).click()
    cy.wait(2000);

    const expectedOption = ["CreditCard"];

    cy.get(".ng-dropdown-panel .ng-option")
      .then($options => {
        const actual = [...$options].map(o => o.innerText.trim());
        expect(actual).to.deep.equal(expectedOption);
      });
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

    const expectedBranches = ["Chennai Main", "Pallikaranai","Velachery"];

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
    cy.get(this.locators.ClickOn_Productgroup).click()
    cy.wait(2000);

    const expectedOption = ["CreditCard"];

    cy.get(".ng-dropdown-panel .ng-option")
      .then($options => {
        const actual = [...$options].map(o => o.innerText.trim());
        expect(actual).to.deep.equal(expectedOption);
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

    const expectedBranches = ["Chennai Main", "Pallikaranai","Velachery"];

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
    cy.get(this.locators.ClickOn_Productgroup).click()
    cy.wait(2000);

    const expectedOption = ["CreditCard"];

    cy.get(".ng-dropdown-panel .ng-option")
      .then($options => {
        const actual = [...$options].map(o => o.innerText.trim());
        expect(actual).to.deep.equal(expectedOption);
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

    const expectedBranches = ["Chennai Main", "Pallikaranai","Velachery"];

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
    cy.get(this.locators.ClickOn_Productgroup).click()
    cy.wait(2000);

    const expectedOption = ["CreditCard"];

    cy.get(".ng-dropdown-panel .ng-option")
      .then($options => {
        const actual = [...$options].map(o => o.innerText.trim());
        expect(actual).to.deep.equal(expectedOption);
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

    const expectedBranches = ["Chennai Main", "Pallikaranai","Velachery"];

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
    cy.get(this.locators.ClickOn_Productgroup).click()
    cy.wait(2000);

    const expectedOption = ["CreditCard"];

    cy.get(".ng-dropdown-panel .ng-option")
      .then($options => {
        const actual = [...$options].map(o => o.innerText.trim());
        expect(actual).to.deep.equal(expectedOption);
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

    const expectedBranches = ["Chennai Main", "Pallikaranai","Velachery"];

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
    cy.get(this.locators.ClickOn_Filter_Productgroup).click()
    cy.wait(2000);

    const expectedOption = ["CreditCard"];

    cy.get(".ng-dropdown-panel .ng-option")
      .then($options => {
        const actual = [...$options].map(o => o.innerText.trim());
        expect(actual).to.deep.equal(expectedOption);
      });
    cy.wait(2000);

  }

  Allocation_sow_TestPage_32() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Alloc_Filters).click();
    cy.wait(2000);
    cy.get(this.locators.CLickOn_Agency_Allocfilter).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Bucketfilter).click()
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter_Bucket).click()
    cy.wait(2000);

    const expectedNumbers = ["0", "1", "2", "3","3+"];

    cy.get(".ng-dropdown-panel .ng-option")
      .then($options => {
        const actual = [...$options].map(o => o.innerText.trim());
        expect(actual).to.deep.equal(expectedNumbers);
      });
    cy.wait(2000);

  }

  Allocation_sow_TestPage_33() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Alloc_Filters).click();
    cy.wait(2000);
    cy.get(this.locators.CLickOn_Agency_Allocfilter).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Geofilter).click()
    cy.wait(2000);
    cy.get(this.locators.lickOn_Filter_Geo).click()
    cy.wait(2000);

    const expectedBranches = ["Chennai Main", "Pallikaranai","Velachery"];

    cy.get(".ng-dropdown-panel .ng-option")
      .then($options => {
        const actual = [...$options].map(o => o.innerText.trim());
        expect(actual).to.deep.equal(expectedBranches);
      });
    cy.wait(2000);

  }

  Allocation_sow_TestPage_34() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Alloc_Filters).click();
    cy.wait(2000);
    cy.get(this.locators.CLickOn_Agent_Allocfilter).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter_Productgroup).click()
    cy.wait(2000);

    const expectedOption = ["CreditCard"];

    cy.get(".ng-dropdown-panel .ng-option")
      .then($options => {
        const actual = [...$options].map(o => o.innerText.trim());
        expect(actual).to.deep.equal(expectedOption);
      });
    cy.wait(2000);

  }

  Allocation_sow_TestPage_35() {


    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Alloc_Filters).click();
    cy.wait(2000);
    cy.get(this.locators.CLickOn_Agent_Allocfilter).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Bucketfilter).click({ force: true })
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter_Bucket).click()
    cy.wait(2000);

    const expectedNumbers = ["0", "1", "2", "3","3+"];

    cy.get(".ng-dropdown-panel .ng-option")
      .then($options => {
        const actual = [...$options].map(o => o.innerText.trim());
        expect(actual).to.deep.equal(expectedNumbers);
      });
    cy.wait(2000);

  }

  Allocation_sow_TestPage_36() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Alloc_Filters).click();
    cy.wait(2000);
    cy.get(this.locators.CLickOn_Agent_Allocfilter).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Geofilter).click({ force: true })
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter_Geo).click()
    cy.wait(2000);

    const expectedBranches = ["Chennai Main", "Pallikaranai","Velachery"];

    cy.get(".ng-dropdown-panel .ng-option")
      .then($options => {
        const actual = [...$options].map(o => o.innerText.trim());
        expect(actual).to.deep.equal(expectedBranches);
      });
    cy.wait(2000);

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
    cy.get(this.locators.ClickOn_UserType).contains("Delinquent").should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Productgroup).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(1000); // wait between selections (adjust if needed)
        });
      });
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Bucket).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(1000); // wait between selections (adjust if needed)
        });
      });

    cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(1000); // wait between selections (adjust if needed)
        });
      });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_DownloadAccounts).click();
    cy.wait(2000);

    cy.contains("Search Result").should("be.visible");
    cy.wait(2000);
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
    cy.get(this.locators.ClickOn_UserType).select('Non-Delinquent', { force: true });
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Productgroup).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(1000); // wait between selections (adjust if needed)
        });
      });
    cy.wait(2000);

    cy.get(this.locators.Click_Country_WithoutBUcket).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(1000); // wait between selections (adjust if needed)
        });
      });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_DownloadAccounts).click();
    cy.wait(2000);

    cy.contains("Search Result").should("be.visible");
    cy.wait(2000);


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
    cy.get(this.locators.ClickOn_UserType).contains("Delinquent").should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Productgroup).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(1000); // wait between selections (adjust if needed)
        });
      });
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Bucket).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(1000); // wait between selections (adjust if needed)
        });
      });

    cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(1000); // wait between selections (adjust if needed)
        });
      });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_DownloadAccounts).click();
    cy.wait(2000);

    cy.contains("Search Result").should("be.visible");
    cy.wait(2000);


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
    cy.get(this.locators.ClickOn_UserType).select('Non-Delinquent', { force: true });
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Productgroup).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(1000); // wait between selections (adjust if needed)
        });
      });
    cy.wait(2000);

    cy.get(this.locators.Click_Country_WithoutBUcket).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(1000); // wait between selections (adjust if needed)
        });
      });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_DownloadAccounts).click();
    cy.wait(2000);

    cy.contains("Search Result").should("be.visible");
    cy.wait(2000);


  }

  Allocation_UT_TestPage_27() {

     cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agency_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agency_Bulkalloc_Cuslevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_UserType).contains("Delinquent").should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Productgroup).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(1000); // wait between selections (adjust if needed)
        });
      });
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Bucket).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(1000); // wait between selections (adjust if needed)
        });
      });

    cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(1000); // wait between selections (adjust if needed)
        });
      });
    cy.wait(2000);
    cy.get(this.locators.Click_Downloads_Agency_Cuslevel).click();
    cy.wait(2000);

    cy.contains("Search Result").should("be.visible");
    cy.wait(2000);


  }

  Allocation_UT_TestPage_28() {

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
    cy.get(this.locators.ClickOn_UserType).select('Non-Delinquent', { force: true });
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Productgroup).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(1000); // wait between selections (adjust if needed)
        });
      });
    cy.wait(2000);

    cy.get(this.locators.Click_Country_WithoutBUcket).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(1000); // wait between selections (adjust if needed)
        });
      });
    cy.wait(2000);
    cy.get(this.locators.Click_Downloads_Agency_Cuslevel).click();
    cy.wait(2000);

    cy.contains("Search Result").should("be.visible");
    cy.wait(2000);

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
    cy.get(this.locators.ClickOn_UserType).contains("Delinquent").should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Productgroup).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(1000); // wait between selections (adjust if needed)
        });
      });
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Bucket).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(1000); // wait between selections (adjust if needed)
        });
      });

    cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(1000); // wait between selections (adjust if needed)
        });
      });
    cy.wait(2000);
    cy.get(this.locators.Click_Downloads_Agency_Cuslevel).click();
    cy.wait(2000);

    cy.contains("Search Result").should("be.visible");
    cy.wait(2000);

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
    cy.get(this.locators.ClickOn_UserType).select('Non-Delinquent', { force: true });
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Productgroup).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(1000); // wait between selections (adjust if needed)
        });
      });
    cy.wait(2000);

    cy.get(this.locators.Click_Country_WithoutBUcket).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(1000); // wait between selections (adjust if needed)
        });
      });
    cy.wait(2000);
    cy.get(this.locators.Click_Downloads_Agency_Cuslevel).click();
    cy.wait(2000);

    cy.contains("Search Result").should("be.visible");
    cy.wait(2000);

  }

  Allocation_UT_TestPage_33() {

      cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Bulkalloc_Acclevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_UserType).contains("Delinquent").should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Productgroup).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(1000); // wait between selections (adjust if needed)
        });
      });
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Bucket).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(1000); // wait between selections (adjust if needed)
        });
      });

    cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(1000); // wait between selections (adjust if needed)
        });
      });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_DownloadAccounts).click();
    cy.wait(2000);

    cy.contains("Search Result").should("be.visible");
    cy.wait(2000);

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
    cy.get(this.locators.ClickOn_UserType).select('Non-Delinquent', { force: true });
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Productgroup).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(1000); // wait between selections (adjust if needed)
        });
      });
    cy.wait(2000);

    cy.get(this.locators.Click_Country_WithoutBUcket).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(1000); // wait between selections (adjust if needed)
        });
      });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_DownloadAccounts).click();
    cy.wait(2000);

    cy.contains("Search Result").should("be.visible");
    cy.wait(2000);

  }

 Allocation_UT_TestPage_36(){

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Bulkalloc_Acclevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_CC_RadioBtn).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_UserType).contains("Delinquent").should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Productgroup).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(1000); // wait between selections (adjust if needed)
        });
      });
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Bucket).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(1000); // wait between selections (adjust if needed)
        });
      });

    cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(1000); // wait between selections (adjust if needed)
        });
      });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_DownloadAccounts).click();
    cy.wait(2000);

    cy.contains("Search Result").should("be.visible");
    cy.wait(2000);

}

Allocation_UT_TestPage_37(){

   cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Bulkalloc_Acclevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_CC_RadioBtn).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_UserType).select('Non-Delinquent', { force: true });
    cy.wait(2000);
    cy.contains("Bucket(s)").should("not.exist");
    cy.wait(2000);

}

Allocation_UT_TestPage_38(){

   cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Bulkalloc_Acclevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_CC_RadioBtn).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_UserType).select('Non-Delinquent', { force: true });
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Productgroup).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(1000); // wait between selections (adjust if needed)
        });
      });
    cy.wait(2000);

    cy.get(this.locators.Click_Country_WithoutBUcket).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(1000); // wait between selections (adjust if needed)
        });
      });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_DownloadAccounts).click();
    cy.wait(2000);

    cy.contains("Search Result").should("be.visible");
    cy.wait(2000);

}

Allocation_UT_TestPage_39(){

   cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Bulkalloc_Cuslevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_UserType).contains("Delinquent").should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Productgroup).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(1000); // wait between selections (adjust if needed)
        });
      });
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Bucket).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(1000); // wait between selections (adjust if needed)
        });
      });

    cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(1000); // wait between selections (adjust if needed)
        });
      });
    cy.wait(2000);
    cy.get(this.locators.Click_Downloads_Agency_Cuslevel).click();
    cy.wait(2000);

    cy.contains("Search Result").should("be.visible");
    cy.wait(2000);

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

Allocation_UT_TestPage_41(){

  cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Bulkalloc_Cuslevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_UserType).select('Non-Delinquent', { force: true });
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Productgroup).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(1000); // wait between selections (adjust if needed)
        });
      });
    cy.wait(2000);

    cy.get(this.locators.Click_Country_WithoutBUcket).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(1000); // wait between selections (adjust if needed)
        });
      });
    cy.wait(2000);
    cy.get(this.locators.Click_Downloads_Agency_Cuslevel).click();
    cy.wait(2000);

    cy.contains("Search Result").should("be.visible");
    cy.wait(2000);

}

Allocation_UT_TestPage_42(){

  cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Bulkalloc_Cuslevel).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_CC_RadioBtn).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_UserType).contains("Delinquent").should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Productgroup).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(1000); // wait between selections (adjust if needed)
        });
      });
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Bucket).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(1000); // wait between selections (adjust if needed)
        });
      });

    cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(1000); // wait between selections (adjust if needed)
        });
      });
    cy.wait(2000);
    cy.get(this.locators.Click_Downloads_Agency_Cuslevel).click();
    cy.wait(2000);

    cy.contains("Search Result").should("be.visible");
    cy.wait(2000);


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

Allocation_UT_TestPage_44(){

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

    cy.get(this.locators.ClickOn_Productgroup).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(1000); // wait between selections (adjust if needed)
        });
      });
    cy.wait(2000);

    cy.get(this.locators.Click_Country_WithoutBUcket).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(1000); // wait between selections (adjust if needed)
        });
      });
    cy.wait(2000);
    cy.get(this.locators.Click_Downloads_Agency_Cuslevel).click();
    cy.wait(2000);

    cy.contains("Search Result").should("be.visible");
    cy.wait(2000);

}

Allocation_UT_TestPage_45(){

   cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Owner_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Owner_Bulkalloc_Acclevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_UserType).contains("Delinquent").should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Productgroup).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(1000); // wait between selections (adjust if needed)
        });
      });
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Bucket).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(1000); // wait between selections (adjust if needed)
        });
      });

    cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(1000); // wait between selections (adjust if needed)
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

Allocation_UT_TestPage_47(){

  cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Owner_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Owner_Bulkalloc_Acclevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_UserType).select('Non-Delinquent', { force: true });
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Productgroup).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(1000); // wait between selections (adjust if needed)
        });
      });
    cy.wait(2000);

    cy.get(this.locators.Click_Country_WithoutBUcket).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(1000); // wait between selections (adjust if needed)
        });
      });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_DownloadAccounts).click();
    cy.wait(2000);

    cy.contains("Search Result").should("be.visible");
    cy.wait(2000);

}

Allocation_UT_TestPage_48(){

  cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Owner_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Owner_Bulkalloc_Cuslevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_UserType).contains("Delinquent").should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Productgroup).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(1000); // wait between selections (adjust if needed)
        });
      });
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Bucket).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(1000); // wait between selections (adjust if needed)
        });
      });

    cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(1000); // wait between selections (adjust if needed)
        });
      });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_DownloadAccounts).click();
    cy.wait(2000);

    cy.contains("Search Result").should("be.visible");
    cy.wait(2000);

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

Allocation_UT_TestPage_50(){

   cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Owner_Bulkupload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Owner_Bulkalloc_Cuslevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_UserType).select('Non-Delinquent', { force: true });
    cy.wait(2000);

    cy.get(this.locators.ClickOn_Productgroup).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(1000); // wait between selections (adjust if needed)
        });
      });
    cy.wait(2000);

    cy.get(this.locators.Click_Country_WithoutBUcket).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(1000); // wait between selections (adjust if needed)
        });
      });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_DownloadAccounts).click();
    cy.wait(2000);

    cy.contains("Search Result").should("be.visible");
    cy.wait(2000);

}




}




export default AllocationPage;
