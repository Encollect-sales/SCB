import { getLocators } from '../utils/locatorUtils';
import { getBaseUrl } from '../utils/configUtils';

class AddStaffPage {
  constructor(locators) {
    this.locators = locators;
  }

  DD_647(){

    cy.wait(5000);
    cy.get(':nth-child(3) > .nav-link > span').click();
    cy.wait(5000);
    cy.get('.form-control-group > :nth-child(3) > #btn-add').click();
    cy.wait(5000);


  }

  DD_80(){

    cy.get(':nth-child(3) > .nav-link > span').click();
    cy.wait(5000);
    cy.get('.form-control-group > :nth-child(3) > #btn-add').click();
    cy.wait(5000);
    cy.get('#department-select-0').select("Audit and Risk");
    cy.wait(5000);
    cy.get('#designation-select-0').select("Audit Manager");
    cy.wait(5000);




  }
  
 Assertin(){
  cy.contains("Collection staff Profile has been Submitted for Approval.").should("be.visible");
 }

  Scroll2(){

    cy.get("staff-scope-of-work div[class='card-content p-0 overflow-auto']").scrollTo("right");
  }

  AddStaff_80(){
    cy.wait(2000);
    cy.get(this.locators.clickonum).click({force: true});
    cy.wait(5000);
    cy.get(this.locators.ClickonSttafEmp).click();
    cy.wait(5000);
    cy.get(this.locators.Clickonaddstaff).click();
    cy.wait(5000);
    
  }

  fillFirstName() {
    cy.get(this.locators.FirstName).click();
    cy.get(this.locators.LastName).click();
  }
  scroll(){

    cy.get("staff-arm-scope-of-work div[class='card-content p-0 overflow-auto']").scrollTo("right");
  }

  Clikonusermanagement() {
    cy.wait(5000);
    cy.get(this.locators.clickonum).click({force: true});
  }

  ClickonSttafEmp(){

    cy.wait(5000);
    cy.get(this.locators.ClickonSttafEmp).click();
    

  }

  clickSearchStaff(){

    cy.get(this.locators.SearchStaff).click();
  }

selectUserType(){
  cy.get(this.locators.SelectUsertype).select("FOS");
    cy.wait(1000);

}
  
typeexistingcode(){

const randomNum = Math.floor(10000 + Math.random() * 90000);
cy.get('#customId').type(randomNum);
cy.wait(2000);



}

  Clikonaddstaff() {
    cy.get(this.locators.Clickonaddstaff).click({force: true});
  }

  Approval(){
    cy.wait(5000);
    cy.get('#empStatus').select("Pending Approval");
    cy.wait(5000);
    cy.get('#btn-search').click();
    cy.wait(5000);
    // cy.get(":nth-child(1) > :nth-child(8) > .form-control-group > .form-check-group > label > input").click();
    // cy.wait(5000);
    // cy.get("#btn-approve").click();
    // cy.wait(5000);
    // cy.contains("Staff Approved Successfully").should("be.visible");
  }

  SelfApprove(){
    cy.wait(2000);
    cy.get('#empStatus').select("Pending Approval");
    cy.wait(2000);
    cy.get('#btn-search').click();
    cy.wait(4000);
    cy.get(":nth-child(1) > :nth-child(9) > .form-control-group > .form-check-group > label > input").click();
    cy.wait(2000);
    cy.get("#btn-approve").click();
    cy.wait(2000);
    cy.contains("You do not have permission to approve.").should("be.visible");


  }

  UpdateStaff(){
    cy.wait(2000);
    cy.get('#empStatus').select("Saved As Draft");
    cy.wait(2000);
    cy.get('#btn-search').click();
    cy.wait(2000);
    cy.get(":nth-child(1) > :nth-child(9) > .form-control-group > .form-check-group > label > input").click();
    cy.wait(2000);
    cy.get('#btn-edit').click();
    cy.wait(2000);
    cy.get('#lastName').clear({force: true} ).type("Kumar");
    cy.wait(2000);
    // cy.get('#lastName').type("Kumar");
    // cy.wait(2000);
    cy.get(':nth-child(5) > .nav-link').click();
    cy.wait(2000);
     cy.get('#spManager > .ng-select-container > .ng-arrow-wrapper').type("A");
    cy.wait(3000);
cy.get('.ng-option-label')
  .then($options => {
    const optionsCount = $options.length;
    const randomIndex = Math.floor(Math.random() * optionsCount);
    cy.wrap($options[randomIndex]).click({ force: true });
  });
  cy.wait(2000);

    cy.get('#btn-update').click();
    cy.wait(8000);
    cy.contains("Collection staff updated successfully.").should("be.visible");
    cy.wait(2000);


  }

  clickcancel(){

    cy.wait(2000);
    cy.get('#empStatus').select("Pending Approval");
    cy.wait(2000);
    cy.get('#btn-search').click();
    cy.wait(4000);
    cy.get(":nth-child(1) > :nth-child(9) > .form-control-group > .form-check-group > label > input").click();
    cy.wait(2000);
    cy.get("#btn-cancel").click();
    cy.wait(2000);
  }
 
  fillemployeeID() {
    const randomId = Math.floor(Math.random() * 900000) + 200000; // Generate a random 6-digit ID
    const employeeId = randomId.toString(); // Convert to string
    cy.get(this.locators.EmployeeID) // Get the input field using the locator
      .type(employeeId); // Type the generated ID into the field
 
    return employeeId; // Return the generated ID if needed elsewhere
 
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
    cy.contains("Last Name is required").should("be.visible");
    cy.wait(5000);

    cy.get(this.locators.LastName).type('*88');
    cy.contains("Please Enter Valid Last Name.").should("be.visible");
    
  }

  fillemailid(emailid) {
    function generateRandomEmail() {
      const randomString = Math.random().toString(36).substring(2, 11); // Generates a random string
      return `user_${randomString}@yopmail.com`; // Concatenate to form an email address
    }
  
    cy.wait(1000);
    cy.get(this.locators.EmailID).type(generateRandomEmail());
    cy.wait(1000);
   
  }
  

  fillmobilenumber() {
    function generateRandomMobileNumber() {
      const prefix = '07'; // Assuming you want the number to start with '07'
      const randomNumber = Math.floor(Math.random() * 200000000); // Generates an 8-digit number
      const paddedNumber = String(randomNumber).padStart(8, '0'); // Pads with leading zeros if necessary
      return prefix + paddedNumber;
      
    }
    cy.get("#mobNo").type(generateRandomMobileNumber());
      cy.wait(2000);
    //cy.get(this.locators.MobileNumber).type(mobilenumber);
  }

  ClikonARM() {
    cy.get(this.locators.ARM).click();
  }

   ClikonSOW() {
    cy.get(':nth-child(3) > .nav-link > span').click();
  }

   ScopeOfWorkTestPage_01(){

    cy.get(this.locators.ClickOn_productgroup).click();
    cy.wait(1000);
    cy.get(this.locators.Select_product_group).click();
    cy.wait(1000);
    cy.get(".ng-option").first().click();
    cy.wait(1000);
    cy.get(this.locators.Product_Panel).click()
    cy.wait(2000);
     cy.get(this.locators.ClickOnBucket_head).click();
    cy.wait(1000);
    cy.get(this.locators.Bucket_panel_open).click();
    cy.wait(3000);
    cy.get(".ng-option").first().click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnGeography_head).click();
    cy.wait(1000);
    cy.get('#geo-scope-HL04').click();
    cy.wait(2000);
    cy.get(this.locators.Geography_panel_open).click();
    cy.wait(2000);
     cy.get(".ng-option").first().click();
    cy.wait(2000);
    cy.get(this.locators.geography_Panel_close).click();
    cy.wait(3000);


  }

     ScopeOfWorkTestPage_02(){

    cy.get(this.locators.ClickOn_productgroup).click();
    cy.wait(1000);
    cy.get(this.locators.Select_product_group).click();
    cy.wait(1000);
    cy.get(".ng-option").eq(1).click();
    cy.wait(1000);
    cy.get(this.locators.Product_Panel).click()
    cy.wait(2000);
     cy.get(this.locators.ClickOnBucket_head).click();
    cy.wait(1000);
    cy.get(this.locators.Bucket_panel_open).click();
    cy.wait(3000);
    cy.get(".ng-option").eq(1).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnGeography_head).click();
    cy.wait(1000);
    cy.get('#geo-scope-HL04').click();
    cy.wait(2000);
    cy.get(this.locators.Geography_panel_open).click();
    cy.wait(2000);
     cy.get(".ng-option").first().click();
    cy.wait(2000);
    cy.get(this.locators.geography_Panel_close).click();
    cy.wait(3000);

     }

     ScopeOfWorkTestPage_03(){

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

  fillstate() {
    cy.get(this.locators.State).select('All');
  }

  fillcity() {
    cy.wait(5000);
    //cy.get(".scroll-nav-container.ng-star-inserted").scrollTo("left",{ensureScrollable: false});
    cy.wait(5000);
    cy.get(this.locators.City).select('All');
  }

  fillbranch(branch) {
    cy.get(this.locators.Branch).select(branch);
  }

  fillreportingagencies(reportingagencies) {
    cy.get(this.locators.ReportingAgencies).type(reportingagencies);
    cy.wait(2000);
    // cy.get(this.locators.clickRA).click();
  }

  fillsupervisingmanager(supervisingmanager) {
    cy.get(this.locators.SupervisingManager).type(supervisingmanager);
    cy.wait(5000);
    cy.get(this.locators.clickSM).click();
  }

  Clickonscopeofwork() {
    cy.get(this.locators.clickScopeofWork).click({force: true});
  }
  Clickonscopeofwork1() {
    cy.get(":nth-child(2) > .nav-link > span").click({force: true});
  }


  Clickonsow() {
    cy.get(this.locators.SOW).click();
  }

  fillproductgroups(productgroups) {
    cy.get(this.locators.ProductGroups).select(productgroups,{force: true});
  }

  fillproducts(products) {
    cy.get(this.locators.products).select("All", { force: true });
  }

  fillsubproducts(subproducts) {
    cy.get(this.locators.subproducts).select(subproducts);
  }

  fillBuckets(Buckets) {
    cy.get(this.locators.Buckets).select("All");
  }

  fillCountries(Countries) {
    cy.get(this.locators.Countries).select(Countries);
  }

  fillRegions(Regions) {
    cy.get(this.locators.Regions).select(Regions,{force: true});
  }


  fillStates(States) {
    cy.get(this.locators.States).select(States);
  }

  fillCities(Cities) {
    cy.get(this.locators.Cities).select(Cities,{force: true});
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
    cy.get(this.locators.clicksupermanager).click();
  }

  clickondandd() {
    cy.get(":nth-child(2) > .nav-link > span").click();
    cy.wait(2000);
    cy.get('#btn-add').click();
  }
  clickondandd79() {
    cy.get(":nth-child(4) > .nav-link > span").click();
    cy.wait(2000);
    cy.get('.form-control-group > :nth-child(3) > #btn-add').click();
  }
  clickondandd1() {
    cy.get(":nth-child(2) > .nav-link > span").click();
    cy.wait(2000);
    cy.get('#btn-add').click();
  }
  seleDD(){
    cy.get('#btn-add').click({force: true});
    cy.get('#department-select-0').select("Audit and Risk");
    cy.wait(5000);
    cy.get('#designation-select-0').select("Audit Manager");
    //cy.contains('Add Collections Staff').should("be.visible");



  }
  seleDD1(){
    cy.wait(5000);
    cy.get('#department-select-0').select("Audit and Risk");
    cy.wait(5000);
    cy.get('#designation-select-0').select("Audit Officer");
    cy.get('#btn-add').click();
    cy.get('#department-select-1').select("Audit and Risk");
    cy.wait(5000);
    cy.get('#designation-select-1').select("Audit Officer");
  }

  seleDD2(){
    cy.get('#department-select-0').select("Audit and Risk");
    cy.wait(5000);
    cy.get('#designation-select-0').select("Audit Officer");
    cy.get('#btn-add').click();
    cy.get('#department-select-1').select("Audit and Risk");
    cy.wait(5000);
    cy.get('#designation-select-1').select("Audit Officer");
  }
  seleDD54(){
    cy.get('#btn-add').click();
    cy.get('#department-select-0').select("Branch Backend");
    cy.wait(5000);
    cy.get('#designation-select-0').select("Branch Cashier");
    cy.get('#btn-add').click();
    cy.get('#department-select-1').select("Audit and Risk");
    cy.wait(5000);
    cy.get('#designation-select-1').select("Audit Officer")
  }
  seleDD55(){
    cy.get('#btn-add').click();
    cy.wait(5000);
    cy.get('#department-select-0').select("Branch Backend");
    cy.wait(5000);
    cy.get('#designation-select-0').select("Branch Manager");
    cy.wait(5000);
    cy.get('#btn-add').click();
    cy.get('#department-select-1').select("Audit and Risk");
    cy.wait(5000);
    cy.get('#designation-select-1').select("Audit Officer")
  }
  seleDD56(){
    cy.get('#btn-add').click();
    cy.wait(5000);
    cy.get('#department-select-0').select("Branch Frontend");
    cy.wait(5000);
    cy.get('#designation-select-0').select("Branch Collection Officer");
    cy.wait(5000);
    cy.get('#btn-add').click();
    cy.get('#department-select-1').select("Audit and Risk");
    cy.wait(5000);
    cy.get('#designation-select-1').select("Audit Officer")
  }

  seleDD57(){
    cy.get('#btn-add').click();
    cy.wait(5000);
    cy.get('#department-select-0').select("Branch Frontend");
    cy.wait(5000);
    cy.get('#designation-select-0').select("Branch Supervisor");
    cy.wait(5000);
    cy.get('#btn-add').click();
    cy.get('#department-select-1').select("Audit and Risk");
    cy.wait(5000);
    cy.get('#designation-select-1').select("Audit Officer");
  }

  seleDD58(){
    cy.get('#btn-add').click();
    cy.wait(5000);
    cy.get('#department-select-0').select("Branch Frontend");
    cy.wait(5000);
    cy.get('#designation-select-0').select("Branch Tele-Collection Officer");
    cy.wait(5000);
    cy.get('#btn-add').click();
    cy.get('#department-select-1').select("Audit and Risk");
    cy.wait(5000);
    cy.get('#designation-select-1').select("Audit Officer");
  }
  seleDD59(){
    cy.get('#btn-add').click();
    cy.wait(5000);
    cy.get('#department-select-0').select("Branch Frontend");
    cy.wait(5000);
    cy.get('#designation-select-0').select("Branch Tele-Collection Officer");
    cy.wait(5000);
    cy.get('#btn-add').click();
    cy.get('#department-select-1').select("Audit and Risk");
    cy.wait(5000);
    cy.get('#designation-select-1').select("Audit Officer");
  }

  seleDD60(){

    cy.get('#btn-add').click();
    cy.wait(5000);
    cy.get('#department-select-0').select("Branch Frontend");
    cy.wait(5000);
    cy.get('#designation-select-0').select("Branch Tele-Collection Officer");
    cy.wait(5000);
    cy.get('#btn-add').click();
    cy.get('#department-select-1').select("Audit and Risk");
    cy.wait(5000);
    cy.get('#designation-select-1').select("Audit Officer");
  }

  seleDD61(){
    cy.get('#btn-add').click();
    cy.wait(5000);
    cy.get('#department-select-0').select("Branch Frontend");
    cy.wait(5000);
    cy.get('#designation-select-0').select("Branch Tele-Collection Officer");
    cy.wait(5000);
    cy.get('#btn-add').click();
    cy.get('#department-select-1').select("Audit and Risk");
    cy.wait(5000);
    cy.get('#designation-select-1').select("Audit Officer");
  }

  seleDD62(){
    cy.get('#btn-add').click();
    cy.wait(5000);
    cy.get('#department-select-0').select("Branch Frontend");
    cy.wait(5000);
    cy.get('#designation-select-0').select("Branch Tele-Collection Officer");
    cy.wait(5000);
    cy.get('#btn-add').click();
    cy.get('#department-select-1').select("Audit and Risk");
    cy.wait(5000);
    cy.get('#designation-select-1').select("Audit Officer");
  }
  seleDD63(){
    cy.get('#btn-add').click();
    cy.wait(5000);
    cy.get('#department-select-0').select("Branch Frontend");
    cy.wait(5000);
    cy.get('#designation-select-0').select("Branch Tele-Collection Officer");
    cy.wait(5000);
    cy.get('#btn-add').click();
    cy.get('#department-select-1').select("Audit and Risk");
    cy.wait(5000);
    cy.get('#designation-select-1').select("Audit Officer");
  }

  seleDD64(){
    cy.get('#btn-add').click();
    cy.wait(5000);
    cy.get('#department-select-0').select("Branch Frontend");
    cy.wait(5000);
    cy.get('#designation-select-0').select("Branch Tele-Collection Officer");
    cy.wait(5000);
    cy.get('#btn-add').click();
    cy.get('#department-select-1').select("Audit and Risk");
    cy.wait(5000);
    cy.get('#designation-select-1').select("Audit Officer");
  }

  seleDD65(){
    cy.get('#btn-add').click();
    cy.wait(5000);
    cy.get('#department-select-0').select("Branch Frontend");
    cy.wait(5000);
    cy.get('#designation-select-0').select("Branch Tele-Collection Officer");
    cy.wait(5000);
    cy.get('#btn-add').click();
    cy.get('#department-select-1').select("Audit and Risk");
    cy.wait(5000);
    cy.get('#designation-select-1').select("Audit Officer");
  }
  seleDD66(){
    cy.get('#btn-add').click();
    cy.wait(5000);
    cy.get('#department-select-0').select("Branch Frontend");
    cy.wait(5000);
    cy.get('#designation-select-0').select("Branch Tele-Collection Officer");
    cy.wait(5000);
    cy.get('#btn-add').click();
    cy.get('#department-select-1').select("Audit and Risk");
    cy.wait(5000);
    cy.get('#designation-select-1').select("Audit Officer");
  }
  seleDD67(){
    cy.get('#btn-add').click();
    cy.wait(5000);
    cy.get('#department-select-0').select("Branch Frontend");
    cy.wait(5000);
    cy.get('#designation-select-0').select("Branch Tele-Collection Officer");
    cy.wait(5000);
    cy.get('#btn-add').click();
    cy.get('#department-select-1').select("Audit and Risk");
    cy.wait(5000);
    cy.get('#designation-select-1').select("Audit Officer");
  }
  seleDD68(){
    cy.get('#btn-add').click();
    cy.wait(5000);
    cy.get('#department-select-0').select("Branch Frontend");
    cy.wait(5000);
    cy.get('#designation-select-0').select("Branch Tele-Collection Officer");
    cy.wait(5000);
    cy.get('#btn-add').click();
    cy.get('#department-select-1').select("Audit and Risk");
    cy.wait(5000);
    cy.get('#designation-select-1').select("Audit Officer");
  }
  seleDD69(){
    cy.get('#btn-add').click();
    cy.wait(5000);
    cy.get('#department-select-0').select("Branch Frontend");
    cy.wait(5000);
    cy.get('#designation-select-0').select("Branch Tele-Collection Officer");
    cy.wait(5000);
    cy.get('#btn-add').click();
    cy.get('#department-select-1').select("Audit and Risk");
    cy.wait(5000);
    cy.get('#designation-select-1').select("Audit Officer");
  }

  seleDD70(){
    cy.get('#btn-add').click();
    cy.wait(5000);
    cy.get('#department-select-0').select("Branch Frontend");
    cy.wait(5000);
    cy.get('#designation-select-0').select("Branch Tele-Collection Officer");
    cy.wait(5000);
    cy.get('#btn-add').click();
    cy.get('#department-select-1').select("Audit and Risk");
    cy.wait(5000);
    cy.get('#designation-select-1').select("Audit Officer");
  }
  seleDD71(){
    cy.get('#btn-add').click();
    cy.wait(5000);
    cy.get('#department-select-0').select("Branch Frontend");
    cy.wait(5000);
    cy.get('#designation-select-0').select("Branch Tele-Collection Officer");
    cy.wait(5000);
    cy.get('#btn-add').click();
    cy.get('#department-select-1').select("Audit and Risk");
    cy.wait(5000);
    cy.get('#designation-select-1').select("Audit Officer");
  }

  seleDD72(){
    cy.get('#btn-add').click();
    cy.wait(5000);
    cy.get('#department-select-0').select("Branch Frontend");
    cy.wait(5000);
    cy.get('#designation-select-0').select("Branch Tele-Collection Officer");
    cy.wait(5000);
    cy.get('#btn-add').click();
    cy.get('#department-select-1').select("Audit and Risk");
    cy.wait(5000);
    cy.get('#designation-select-1').select("Audit Officer");
  }

  seleDD73(){
    cy.get('#btn-add').click({force: true});
    cy.wait(5000);
    cy.get('#department-select-0').select("Branch Frontend");
    cy.wait(5000);
    cy.get('#designation-select-0').select("Branch Tele-Collection Officer");
    cy.wait(5000);
    cy.get('#btn-add').click();
    cy.get('#department-select-1').select("Audit and Risk");
    cy.wait(5000);
    cy.get('#designation-select-1').select("Audit Officer");
  }
  seleDD74(){
    cy.get('#btn-add').click();
    cy.wait(5000);
    cy.get('#department-select-0').select("Branch Frontend");
    cy.wait(5000);
    cy.get('#designation-select-0').select("Branch Tele-Collection Officer");
    cy.wait(5000);
    cy.get('#btn-add').click();
    cy.get('#department-select-1').select("Audit and Risk");
    cy.wait(5000);
    cy.get('#designation-select-1').select("Audit Officer");
  }
  seleDD75(){
    cy.get('#btn-add').click();
    cy.wait(5000);
    cy.get('#department-select-0').select("Branch Frontend");
    cy.wait(5000);
    cy.get('#designation-select-0').select("Branch Tele-Collection Officer");
    cy.wait(5000);
    cy.get('#btn-add').click();
    cy.get('#department-select-1').select("Audit and Risk");
    cy.wait(5000);
    cy.get('#designation-select-1').select("Audit Officer");
  }
  seleDD76(){
    cy.get('#btn-add').click();
    cy.wait(5000);
    cy.get('#department-select-0').select("Branch Frontend");
    cy.wait(5000);
    cy.get('#designation-select-0').select("Branch Tele-Collection Officer");
    cy.wait(5000);
    cy.get('#btn-add').click();
    cy.get('#department-select-1').select("Audit and Risk");
    cy.wait(5000);
    cy.get('#designation-select-1').select("Audit Officer");
  }
  // clickOnAdd1() {
  //   cy.get("body > app-root:nth-child(1) > app-menu-layout:nth-child(1) > main:nth-child(1) > section:nth-child(3) > div:nth-child(2) > umm-staff-create:nth-child(2) > div:nth-child(1) > form:nth-child(3) > div:nth-child(1) > div:nth-child(1) > tabset:nth-child(1) > div:nth-child(2) > tab:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(1)").click({force: true});
  //   cy.wait(5000);
  //   cy.get('#department-select-0').select("Branch Backend");
  //   cy.wait(5000);
  //   cy.get("#designation-select-0").select("Branch Manager");
  // }
  clickOnAdd() {
    cy.get("#btn-add").click({force: true});
    cy.wait(5000);
  }

  fillDepartment() {
    // cy.get(this.locators.DepartmentDrop).eq(1).click();

   cy.get(this.locators.DepartmentDrop)
  .find('option')
  .then($options => {
    const optionsCount = $options.length;
    const randomIndex = Math.floor(Math.random() * optionsCount);
    const randomValue = $options[randomIndex].value;
    cy.get(this.locators.DepartmentDrop).select(randomValue, { force: true });
  });


  }
  
  fillDesignation(designation, index) {
    // cy.get(this.locators.DesignationDrop).eq(index).select(designation);

    cy.get(this.locators.DesignationDrop)
  .find('option')
  .then($options => {
    const optionsCount = $options.length;
    const randomIndex = Math.floor(Math.random() * optionsCount);
    const randomValue = $options[randomIndex].value;
    cy.get(this.locators.DesignationDrop).select(randomValue, { force: true });
  });
  }

  clickonaddbutton() {
    cy.get(this.locators.addbutton).click();
  }

  clickonbbrm1() {
    cy.get(":nth-child(5) > .nav-link > span").click( {force: true});
  }
  clickonbbrm3() {
    cy.get(":nth-child(5) > .nav-link > span").click( {force: true});
  }

  clickonbbrm(bbrm) {
    cy.get(this.locators.bbrm).click(bbrm);
    cy.wait(2000)
  }

clickonWallet(){

  cy.get(':nth-child(4) > .nav-link > span').click();
  cy.wait(1000);
  cy.get('#walletLimit').type(10000);
  cy.wait(2000);

}

clickonPlaceOkWork(){

  cy.get(this.locators.placeofwork).click();
  cy.wait(1000);
  cy.get('.active > .row > .col-md-6 > .form-control').type(458978);
  cy.wait(2000);
}

ClickOnSkill(){

  cy.get(this.locators.skill).click();
  cy.wait(1000);
   cy.get('#expYears').type(3);
  cy.wait(1000);
cy.get(`[value="1: 'English'"]`).click().should('be.visible');
cy.wait(2000);


}

Sucessmessage(){

  cy.get('[role="alert"]', { timeout: 10000 }).should('be.visible').and('contain.text', 'Collection staff profile is Saved as Draft');

}

errormessage(){

   cy.get('[role="alert"]', { timeout: 10000 }).should('be.visible').and('contain.text', 'Please fill all the mandatory fields inside Basic Information tab');

}
  fillbasebranch() {

   cy.get(this.locators.basebranch)
  .find('option') 
  .then($options => {
    const optionsCount = $options.length;
    const randomIndex = Math.floor(Math.random() * optionsCount); 
    const randomValue = $options[randomIndex].value; 

    cy.get(this.locators.basebranch).select(randomValue, { force: true });
  });

cy.wait(1000);


    cy.get('#spManager > .ng-select-container > .ng-arrow-wrapper').type("A");
    cy.wait(3000);
cy.get('.ng-option-label')
  .then($options => {
    const optionsCount = $options.length;
    const randomIndex = Math.floor(Math.random() * optionsCount);
    cy.wrap($options[randomIndex]).click({ force: true });
  });
  cy.wait(2000);

  }
  basebranch(){
    cy.get(':nth-child(5) > .nav-link > span').click();
    cy.get('#base-branch').select("All");
    
  }
  ClickRight(){

    cy.get('.right-btn').click();
  }
  clickondandd12(){


    cy.get(':nth-child(4) > .nav-link > span').click();
    cy.wait(20000);
    cy.get('#btn-add').click({force: true});
    cy.wait(5000);
  }

  fillsprm(sprm) {
    cy.get('#spManager').select("Asok Kumar",{force: true});
  }
  Clickonplaceofwork78(placeofwork) {
    cy.get(":nth-child(4) > .nav-link > span").click(placeofwork);
  }
  Clickonplaceofwork(placeofwork) {
    cy.get(this.locators.placeofwork).click(placeofwork);
  }

  fillareanpincode() {
    cy.get(':nth-child(6) > .nav-link > span').click();
    cy.wait(2000);
    cy.get(this.locators.areapincode).type(457889);
    cy.get(2000);
    // cy.get(this.locators.apc).click();
    // cy.get(this.locators.apcv)
    // cy.get(this.locators.apcv).then(($el) => {
    //   const text = $el.text();
    //   cy.log(text);
    // })
  }
  clickonload(load) {
    cy.get(this.locators.load).click(load);
  }


  fillnumberofaccount() {
    cy.get(this.locators.numberofaccount).type(20,{force: true});
  }

  fillnumberofaccountwithoutType() {
    cy.get(this.locators.numberofaccount).type('{enter}',{force: true});
  }

  clickonskill() {
    cy.get(this.locators.skill).click();
  }

  fillexperienceinyear() {
    cy.get(this.locators.experienceinyear).type(15,{force: true});
    cy.get(2000);
  }

  fillcustomerpersona(customerpersona) {
    cy.get(this.locators.customerpersona).select(customerpersona,{force: true});
    cy.get(2000);
  }

  fillLanguage(Language) {
    cy.get(this.locators.Language).select(Language,{force: true});
    cy.get(2000);
  }

  fillPerformanceband(Performanceband) {
    cy.get(this.locators.Performanceband).select(Performanceband,{force: true});
    cy.get(2000);
  }

  clickonChangelog() {
    cy.get(this.locators.Changelog).click();
    cy.get(2000);
  }

  fillchangelog(changelog) {
    cy.get(this.locators.changelog).type('This is good',{force: true});
    cy.get(2000);
  }

  clickonsubmitstaffprofile() {
    cy.get(this.locators.submitstaffprofile).click({force: true});
    cy.get(5000);
  }

  clickonsvestaffprofile() {
    cy.get(this.locators.savestaffprofile).click();
    cy.get(5000);
    cy.get(this.locators.errormessage).then(($el) => {
      const text = $el.text();
      cy.log(text);
    })
  }

  clickonsavestaffprofile(){

    cy.get('#btn-save').click();
    cy.wait(4000);
  }

  clickonsubmitstaffprofilebb() {
    cy.get(this.locators.submitstaffprofile).should('be.disabled');
  }

  clickonuserprofile() {
    cy.get(this.locators.userprofile).click();
    cy.get(5000);
    cy.get(this.locators.logout).click();
  }
  CreateAgency001again() {
    cy.get(':nth-child(2) > .nav-item-hold > a > .nav-text').click();
    cy.wait(5000);
    cy.get('body > app-root:nth-child(1) > div:nth-child(1) > div:nth-child(2) > app-navbar:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(6) > a:nth-child(1) > span:nth-child(2)').click();
    cy.wait(5000);
    cy.get(':nth-child(5) > .form-control').select("Pending Approval");
    cy.wait(5000);
    cy.get('.btn').click();
    cy.wait(5000);
    cy.get(':nth-child(1) > :nth-child(7) > input').click();
    cy.wait(5000);
   
  }
  CreateAgency002again() {
    cy.get(':nth-child(2) > .nav-item-hold > a > .nav-text').click();
    cy.wait(5000);
    cy.get('body > app-root:nth-child(1) > div:nth-child(1) > div:nth-child(2) > app-navbar:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(6) > a:nth-child(1) > span:nth-child(2)').click();
    cy.wait(5000);
    cy.get(':nth-child(5) > .form-control').select("Approved");
    cy.wait(5000);
  }
  CreateAgency003again() {
    cy.get(':nth-child(2) > .nav-item-hold > a > .nav-text').click();
    cy.wait(5000);
    cy.get('body > app-root:nth-child(1) > div:nth-child(1) > div:nth-child(2) > app-navbar:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(6) > a:nth-child(1) > span:nth-child(2)').click();
    cy.wait(5000);
    cy.get(':nth-child(5) > .form-control').select("Rejected");
    cy.wait(5000);
  }
  ApprovedStaff(){
    cy.get(':nth-child(2) > .nav-item-hold > a > .nav-text').click();
    cy.wait(5000);
    cy.get('body > app-root:nth-child(1) > div:nth-child(1) > div:nth-child(2) > app-navbar:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(6) > a:nth-child(1) > span:nth-child(2)').click();
    cy.wait(5000);
    cy.get(':nth-child(5) > .form-control').select("Pending Approval");
    cy.wait(5000);
    cy.get('.btn').click();
    cy.wait(5000);
    cy.get(':nth-child(1) > :nth-child(7) > input').click();
    cy.wait(5000);
    cy.get('.row > :nth-child(1) > :nth-child(1) > .form-control', { timeout: 20000 })
  .should('be.visible') // Ensure the element is visible before typing
  .type('Okay');
  cy.get('.btn-success').click();
  cy.wait(300);
  }

  DisabledStaff(){
    cy.get(':nth-child(2) > .nav-item-hold > a > .nav-text').click();
    cy.wait(5000);
    cy.get('body > app-root:nth-child(1) > div:nth-child(1) > div:nth-child(2) > app-navbar:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(6) > a:nth-child(1) > span:nth-child(2)').click();
    cy.wait(5000);
    cy.get(':nth-child(5) > .form-control').select("Approved");
    cy.wait(5000);
    cy.get('.btn').click();
    cy.wait(5000);
    cy.get(':nth-child(1) > :nth-child(7) > input').click();
    cy.wait(5000);
    cy.get('.row > :nth-child(1) > :nth-child(1) > .form-control', { timeout: 20000 })
  .should('be.visible') // Ensure the element is visible before typing
  .type('Okay');
  cy.get('.btn-warning').click();
  cy.wait(300);
  }
  RejectedStaff(){
    cy.get(':nth-child(2) > .nav-item-hold > a > .nav-text').click();
    cy.wait(5000);
    cy.get('body > app-root:nth-child(1) > div:nth-child(1) > div:nth-child(2) > app-navbar:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(6) > a:nth-child(1) > span:nth-child(2)').click();
    cy.wait(5000);
    cy.get(':nth-child(5) > .form-control').select("Rejected");
    cy.wait(5000);
    cy.get('.btn').click();
    cy.wait(5000);
    cy.get(':nth-child(1) > :nth-child(7) > input').click();
    cy.wait(5000);
    cy.get('.row > :nth-child(1) > :nth-child(1) > .form-control', { timeout: 20000 })
  .should('be.visible') // Ensure the element is visible before typing
  .type('Okay');
  cy.get('.btn-warning').click();
  cy.wait(300);
  }
  

  clickoncancel() {
    cy.get(this.locators.cancelbutton).click();

  }

  // fillpendingforapproval() {
  //   cy.get(this.locators.pendingforapproval).select(['Pending Approval'], { force: true });
  //   cy.get(2000);

  // }

  // clickonsearch() {
  //   cy.get(this.locators.search).click();
  //   cy.get(5000);

  // }

  // clickonaction() {
  //   cy.get(this.locators.action).click();
  //   cy.get(5000);

  // }

  // clickonapprove() {
  //   cy.get(this.locators.approve).click();
  //   cy.get(5000);

  Addstaff_912(){

    cy.get(this.locators.clickonum).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.ClickonSttafEmp).click();
    cy.wait(2000);
    cy.get(this.locators.Clickonaddstaff).click({force: true});
    cy.wait(2000);
    cy.get('#domainId').click();
    cy.wait(2000);
    cy.get('#btn-save').click();
    cy.wait(2000);
    cy.contains("Employee ID is required").should("be.visible");
    cy.wait(2000);



  }

  Addstaff_913(){

    cy.get(this.locators.clickonum).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.ClickonSttafEmp).click();
    cy.wait(2000);
    cy.get(this.locators.Clickonaddstaff).click({force: true});
    cy.wait(2000);
    cy.get('#fName').click();
    cy.wait(2000);
    cy.get('#btn-save').click();
    cy.wait(2000);
    cy.contains("First Name is required").should("be.visible");
    cy.wait(2000);
  }

  Addstaff_915(){

    cy.get(this.locators.clickonum).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.ClickonSttafEmp).click();
    cy.wait(2000);
    cy.get(this.locators.Clickonaddstaff).click({force: true});
    cy.wait(2000);
    cy.get('#emailId').click();
    cy.wait(2000);
    cy.get('#btn-save').click();
    cy.wait(2000);
    cy.contains("E-mail ID is required").should("be.visible");
    cy.wait(2000);
    cy.get('#emailId').type("gdgfgfgfg");
    cy.wait(2000);
    cy.get('#btn-save').click();
    cy.wait(2000);
    cy.contains("Enter a valid E-mail ID.").should("be.visible");
    cy.wait(2000);
  }

   }
export default AddStaffPage;
