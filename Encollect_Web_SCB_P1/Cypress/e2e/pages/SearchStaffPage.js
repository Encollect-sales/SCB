import { getLocators } from '../utils/locatorUtils';
import { getBaseUrl } from '../utils/configUtils';

class SearchStaffPage {
  constructor(locators) {
    this.locators = locators;
  }

  Clikonusermanagement() {
    cy.get(this.locators.clickonum).click();
  }

  Clikonaddstaff() {
    cy.get(this.locators.Clickonaddstaff).click().click();
  }

  fillemployeeID(employeeid) {
    cy.get(this.locators.EmployeeID).type(employeeid);
  }

  fillEmployeeID() {
    cy.get(this.locators.EmployeeID).type('{enter}');
    cy.get('.search-batch > :nth-child(1) > .col-md-6 > .error > :nth-child(1)').should('contain', 'Employee Id is required');
  }


  fillnewemployeeID() {
    cy.get(this.locators.EmployeeID).scrollIntoView().should('be.visible');
    cy.get(this.locators.EmployeeID).type(12323445);
    cy.scrollTo('bottom');
  }

  fillfirstname(firstname) {
    cy.get(this.locators.FirstName).type(firstname);
  }

  fillFirstName() {
    cy.get(this.locators.FirstName).click();
    cy.get(this.locators.LastName).click();
    cy.get(this.locators.FirstNameerror).then(($el) => {
      const text = $el.text();
      cy.log(text);
    })
    cy.get(this.locators.FirstName).type('*88');
    cy.get(this.locators.FirstNameerror1).then(($el) => {
      const text = $el.text();
      cy.log(text);
    })
    cy.get(this.locators.FirstName).type('0');
    cy.get(this.locators.FirstNameerror2).then(($el) => {
      const text = $el.text();
      cy.log(text);
    })
  }

  filllastname(lastname) {
    cy.get(this.locators.LastName).type(lastname);
  }

  fillLastName() {
    cy.get(this.locators.LastName).click();
    cy.get(this.locators.EmailID).click();
    cy.get(this.locators.LastNameerror).then(($el) => {
      const text = $el.text();
      cy.log(text);
    })

    cy.get(this.locators.LastName).type('*88');
    cy.get(this.locators.LastNameerror1).then(($el) => {
      const text = $el.text();
      cy.log(text);
    })
  }

  fillemailid(emailid) {
    cy.get(this.locators.EmailID).type(emailid);
  }

  fillmobilenumber(mobilenumber) {
    cy.get(this.locators.MobileNumber).type(mobilenumber);
  }

  ClikonARM() {
    cy.get(this.locators.ARM).click();
  }

  ClikonARMS() {
    cy.get(this.locators.ARMS).click();
  }

  //   fillproductgroup(productgroup) {
  //     cy.get(this.locators.ProductGroup).select(productgroup);
  //   }

  //   validateproductgroup(productgroup) {

  //     const expectedValues = ['raju', 'pune', 'myso'];
  // // Get the dropdown element and its options
  // cy.get(this.locators.ProductGroup).select(expectedValues).then(($select) => {
  //   // Get the options from the dropdown
  //   const actualValues = Array.from($select[0].options).map(option => option.text);

  //   // Compare actual and expected values
  //   expect(actualValues).to.deep.equal(expectedValues);
  // });
  // }

  fillproductgroup(productgroup) {
    cy.get(this.locators.ProductGroup).select(productgroup);
  }

  validateproductgroup() {
    const expectedValues = ['All', 'Consumre Loan', 'CONSUMERCONSUMERPENSIUNAN', 'CreditCard', 'ELSA Loams', 'Hm loans', 'HOME EQUITY', 'HOME LOAN', 'Janem Loans', 'Kanem Loans', 'Kathak Loan', 'lanem Loans', 'LOANS PRODUCTS', 'myso', 'Naven Loans', 'OTHER LOAN', 'Periode', 'pune', 'QUEEN Loans', 'Radon Loans', 'raju', 'Raman Loans', 'Reaven Loans', 'Reshma', 'Retail', 'Rishita Loans', 'salmaan', 'SCHOOL LOAN', 'STAFF LOAN', 'Sudarshan Loans', 'UNICARD2', 'UNSECURED LOAN', 'Vinayak Loans', 'Vinayk Loans', 'Viyanak Loans', 'WMUTAMAPRODUKTIF'];

    cy.get(this.locators.ProductGroup).then(($select) => {
      // Check if the dropdown allows multiple selections
      const isMultiSelect = $select.prop('multiple');

      if (isMultiSelect) {
        // For multi-select dropdowns
        cy.wrap($select).invoke('val').should('deep.equal', expectedValues);
        cy.log('Actual Values:', $select.val());
        cy.log('Expected Values:', expectedValues);
      }
      else {
        // For single-select dropdowns
        //const actualValue = $select.val() || ''; // Handle the case where no value is selected
        if (actualValue === '') {

          expect('All').to.equal(expectedValues[0]);
        } else {
          // Handle the case where the actual value is not an empty string
          expect(actualValue).to.equal(expectedValues[0]);
        }

        cy.log('Actual Value:', actualValue);
        cy.log('Expected Values:', expectedValues);
      }
    });
  }

  fillproduct(product) {
    cy.get(this.locators.Product).select(product);
  }

  fillsubproduct(subproduct) {
    cy.get(this.locators.SubProduct).select(subproduct);
  }

  fillbucket(bucket) {
    cy.get(this.locators.Bucket).select(bucket);
  }

  fillcountry(country) {
    cy.get(this.locators.Country).select(country);
  }

  fillregion(region) {
    cy.get(this.locators.Region).select(region);
  }

  fillstate(state) {
    cy.get(this.locators.State).select(state);
  }

  fillcity(city) {
    cy.get(this.locators.City).select(city);
  }

  fillbranch(branch) {
    cy.get(this.locators.Branch).select(branch);
  }

  fillreportingagencies(reportingagencies) {
    cy.get(this.locators.ReportingAgencies).type(reportingagencies);
    cy.wait(2000);
    cy.get(this.locators.clickRA).click();
  }

  fillsupervisingmanager(supervisingmanager) {
    cy.get(this.locators.SupervisingManager).type(supervisingmanager);
    cy.wait(2000);
    cy.get(this.locators.clickSM).click();
  }

  Clickonscopeofwork() {
    cy.get(this.locators.clickScopeofWork).click();
  }

  Clickonsow() {
    cy.get(this.locators.SOW).click();
  }

  fillproductgroups(productgroups) {
    cy.get(this.locators.ProductGroups).select(productgroups);
  }

  fillproducts(products) {
    cy.get(this.locators.products).select(products);
  }

  fillsubproducts(subproducts) {
    cy.get(this.locators.subproducts).select(subproducts);
  }

  fillBuckets(Buckets) {
    cy.get(this.locators.Buckets).select(Buckets);
  }

  fillCountries(Countries) {
    cy.get(this.locators.Countries).select(Countries);
  }

  fillRegions(Regions) {
    cy.get(this.locators.Regions).select(Regions);
  }


  fillStates(States) {
    cy.get(this.locators.States).select(States);
  }

  fillCities(Cities) {
    cy.get(this.locators.Cities).select(Cities);
  }

  fillBranches(Branches) {
    cy.get(this.locators.Branches).select(Branches);
  }

  fillSmanager(Smanager) {
    cy.get(this.locators.Smanager).type(Smanager);
    cy.wait(2000);
    cy.get(this.locators.clicksupermanager).click();
  }

  fillSmanager1(Smanager) {
    cy.get(this.locators.Smanager).type(Smanager);
    cy.wait(2000);
    cy.get(this.locators.clicksupermanager1).click();
  }

  clickondandd() {
    cy.get(this.locators.dandd).click();
    cy.get(this.locators.add).click();
  }

  clickOnAdd() {
    cy.get(this.locators.add).click();
  }

  fillDepartment(department, index) {
    cy.get(this.locators.DepartmentDrop).eq(index).select(department);
  }
  
  fillDesignation(designation, index) {
    cy.get(this.locators.DesignationDrop).eq(index).select(designation);
  }

  clickonaddbutton() {
    cy.get(this.locators.addbutton).click();
  }


  clickonbbrm(bbrm) {
    cy.get(this.locators.bbrm).click(bbrm);
  }


  fillbasebranch(basebranch) {
    cy.get(this.locators.basebranch).select(basebranch);
  }

  fillsprm(sprm) {
    cy.get(this.locators.sprm).select(sprm);
  }

  Clickonplaceofwork(placeofwork) {
    cy.get(this.locators.placeofwork).click(placeofwork);
  }


}

export default SearchStaffPage;
