import { getLocators } from '../utils/locatorUtils';
import { getBaseUrl } from '../utils/configUtils';
import { faker } from '@faker-js/faker';


class AgentEmpanelmentRequestPage {
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

    fillproductgroup(productgroup) {
     cy.get(this.locators.ProductGroup).select(productgroup);
   }

   validateproductgroup(productgroup) {

     const expectedValues = ['raju', 'pune', 'myso'];
  // // Get the dropdown element and its options
  cy.get(this.locators.ProductGroup).select(expectedValues).then(($select) => {
  //   // Get the options from the dropdown
   const actualValues = Array.from($select[0].options).map(option => option.text);

  //   // Compare actual and expected values
   expect(actualValues).to.deep.equal(expectedValues);
  });
  }

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

  fillareanpincode() {
    cy.get(this.locators.areapincode).type(4);
    cy.get(2000);
    cy.get(this.locators.apc).click();
    cy.get(this.locators.apcv)
    cy.get(this.locators.apcv).then(($el) => {
      const text = $el.text();
      cy.log(text);
    })
  }
  clickonload(load) {
    cy.get(this.locators.load).click(load);
  }


  fillnumberofaccount() {
    cy.get(this.locators.numberofaccount).type(20);
  }

  fillnumberofaccountwithoutType() {
    cy.get(this.locators.numberofaccount).type('{enter}');
  }
  AgentEnpalmentRequest88(){
    const filePath = 'Cypress/fixtures/Aadhar.png'
    cy.wait(2000);
    cy.get(this.locators.usermngt).click().should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.AgentEntReqst).click();
    cy.wait(2000);
    cy.get(this.locators.AddAgent).click();
    cy.wait(2000);

     cy.get(this.locators.SelectUsertype).select("Telecaller");
    cy.wait(1000);

    cy.get(this.locators.FirstName).type("Pranshu").should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.LastName).type("Raj").should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.Agencyname).select("Arun").should('be.visible');
    cy.wait(2000);
    // cy.get(this.locators.AgencySupervisorEmailId).type("pranshu@yopmail.com").should('be.visible');
    // cy.wait(2000);
 cy.get(this.locators.SelectAgencyReportManager).click(); 
cy.wait(2000);
cy.get('.ng-dropdown-panel .ng-option')        
  .then(options => {
    const randomIndex = Math.floor(Math.random() * options.length);
    cy.wrap(options[randomIndex]).click();   
  });
cy.wait(2000);


    cy.get(this.locators.dilarID).type("123").should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.DRACertificateDate).type("16-05-2024").should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.dratrainingdate).type("16-07-2024").should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.DRANumber).type("1234567", {force: true} ).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.Idtype).select("Pan card").should('be.visible');
    cy.wait(2000)
    cy.get(this.locators.UDIDNumberr).type("12345678909876543").should('be.visible');
    cy.wait(500);
     const encode = faker.number.int({ min: 10000, max: 99999 }).toString();
       cy.get('#agentCode').type(encode);
      cy.wait(2000);

    const filePath1 = 'Aadhar.png'
    cy.get('.upload-text').click();
    cy.wait(500);
    cy.get('input[type="file"]').attachFile(filePath1);
    cy.wait(500);


    cy.get(this.locators.Departmentdesignation).click({force: true});
    cy.wait(2000);
    cy.get(".form-control-group > :nth-child(3) > .btn").click();
    cy.wait(2000);
    cy.get(this.locators.Department).select("Agency Backend");
    cy.wait(2000);
    cy.get(this.locators.designation).select("Agency Backend");
    cy.wait(2000);
    cy.get(':nth-child(4) > .nav-link > span').click().should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.Address).type(" AAAAAAAAAAAAAAAA XXXXXXXXXXXXXXXXXX BBBBBBBBBBBBBB CCCCCCCCCCCCCCC");
    cy.wait(2000);
    cy.get('#stateId').select('All').should('be.visible');
    cy.wait(2000);
    cy.get("#cityId").select("All").should('be.visible');
    cy.wait(2000);
    cy.get("#landmarkId").type("xxxx Bank").should('be.visible');
    cy.wait(2000);
    cy.get("#pinId").type("845438");
    cy.wait(2000);
    cy.get('#emer_contactNO').type(8838506890);
    cy.wait(2000);
    cy.get('#bloodGroup').select("A-");
    cy.wait(2000);
    cy.get("#mobileTypeId").select("MO",{force : true});
    cy.wait(2000);
    // cy.get("input[placeholder='code']").type("3223").should('be.visible');
    // cy.wait(2000);
    //cy.get("input[name='primaryMobileNumber']").type("352407");
    //cy.wait(2000);
    function generateRandomMobileNumber() {
      const prefix = '07'; // Assuming you want the number to start with '07'
      const randomNumber = Math.floor(Math.random() * 200000000); // Generates an 8-digit number
      const paddedNumber = String(randomNumber).padStart(8, '0'); // Pads with leading zeros if necessary
      return prefix + paddedNumber;
    }
    // Cypress test code
    cy.get('input[name="primaryMobileNumber"]').type(generateRandomMobileNumber());
    cy.wait(500);
    //cy.get("#emailId").type("pranshu@yopmail.com");
    //cy.wait(2000);
    function generateRandomEmail() {
      const randomString = Math.random().toString(36).substring(2, 11); // Generates a random string
      return `user_${randomString}@yopmail.com`; // Concatenate to form an email address
    }

    // Cypress test code
    cy.get("#emailId").type(generateRandomEmail());
    cy.wait(500);
    cy.get("#dobId").type("11-06-2006");
    cy.wait(2000);
    cy.get("#fatherNameId").type(" Mr B Kumar",{force: true});
    cy.wait(2000);
    cy.get(this.locators.Banking_details).click().should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.cust_name).type("Pranshu raj").should('be.visible');
    cy.wait(2000);
    cy.get("input[placeholder='Enter Account Number']").type("456785678776543").should('be.visible');
    cy.wait(2000);
    cy.get("select[name='bankName']").select("BANK OF INDIA").should('be.visible');
    cy.wait(2000);
    cy.get("select[name='bankBranchId']").select("BANO").should('be.visible');
    cy.wait(2000);
    // cy.get(this.locators.ScopeOfWork).click().should('be.visible');
    // cy.wait(2000);
    // cy.get("#productGroup-0").select("All");
    // cy.wait(2000);
    // cy.get("#product-0").select("All");
    // cy.wait(2000);
    // cy.get("#subProduct-0").select("All").should('be.visible');
    // cy.wait(2000);
    // cy.get("#bucket-0").select("All").should('be.visible');
    // cy.wait(2000);
    // cy.get('#country-0').select("All").should('be.visible');
    // cy.wait(500);
    // cy.get("#region-0").select("All").should('be.visible');
    // cy.wait(2000);
    // cy.get("#state-0").select("All").should('be.visible');
    // cy.wait(2000);
    // cy.get("#city-0").select("All").should('be.visible');
    // cy.wait(2000);
    // cy.get("#branch-0").select("All").should('be.visible');
    // cy.wait(2000);
    // cy.get(":nth-child(9) > #Select").select("All").should('be.visible');
    // cy.wait(2000);
     // cy.get(this.locators.PlaceOfWork).click().should('be.visible');
    // cy.wait(2000);
    // cy.get(this.locators.pininput).type("845438").should('be.visible');
    // cy.wait(2000);
    // cy.get(':nth-child(8) > .nav-link').click().should('be.visible');
    // cy.wait(2000);
    // cy.get("#maxAccounts").type("2").should('be.visible');
    // cy.wait(2000);
    // cy.get(':nth-child(8) > .nav-link > span').click();
    // cy.wait(2000);
    // cy.get("#expYears").type("2").should('be.visible');
    // cy.wait(2000);
    // cy.get("select[name='cutomerPersona']").select("Self-cure customer").should('be.visible');
    // cy.wait(2000);
    // cy.get('#lanKnown').select("Hindi").should('be.visible');
    // cy.wait(2000);
    // cy.get('#perBand').select("LH").should('be.visible');
    // cy.wait(2000);

    //#############################Document&Details######################################### 
    cy.get(':nth-child(7) > .nav-link > span').click().should('be.visible');

    cy.wait(2000);
    cy.get("#docTypeSelect-0").select("Pan Card").should('be.visible');
    cy.wait(2000);
    cy.get('#addFileBtn-0').click();
    cy.get('input[type="file"]').eq(1).selectFile(filePath, { force: true });
    cy.wait(2000);
   
    cy.get('#docTypeSelect-1').select("Aadhar Card").should('be.visible');
    cy.wait(2000);
    cy.get('#addFileBtn-1').click();
    cy.get('input[type="file"]').eq(2).selectFile(filePath, { force: true });
    cy.wait(2000);

    cy.get("#docTypeSelect-2").select("Agency ID Card").should('be.visible');
    cy.wait(2000)
    cy.get('input[type="file"]').eq(3).selectFile(filePath, { force: true });
    cy.wait(2000);

    cy.get("#docTypeSelect-3").select("HOC Approval").should('be.visible');
    cy.wait(2000)
    cy.get('input[type="file"]').eq(4).selectFile(filePath, { force: true });
    cy.wait(2000);
   
//#############################Document&Details######################################### 

     cy.get(':nth-child(8) > .nav-link > span').click().should('be.visible');
     cy.wait(2000);

    //  cy.get('#CollectionDate').click().should('be.visible');
    //  cy.wait(2000)
    // //choose previous month
    //  cy.get("button[class='current ng-star-inserted'] span").click()
    //  cy.wait(2000)
    // //choose next month 
    //   cy.get("tbody > :nth-child(1) > :nth-child(1) > span").click()
    //   cy.wait(2000);
    //   cy.get('.bs-datepicker-container').contains('8').click()
      
      cy.wait(2000);
    //choose date 2

    cy.get("#CollectionDate").type("25/06/2023").should('be.visible');
    cy.wait(2000);
    cy.get("#RenewalDate").type("15-07-2024").should('be.visible');
    cy.wait(2000);
    cy.get("#ExpiryDate").type("15-07-2026").should('be.visible');
    cy.wait(2000);
    cy.get("#remarks").type("aaaaaa bbbbbbbbb cccccccccc dddddddddd 123",{force: true}).should('be.visible');
    cy.wait(2000)
    cy.get('#btn-submit').click();
    cy.wait(500);
    //cy.contains("Agent Profile has been Submitted for Approval.").should("be.visible");
    
    
   }
   AgentEnpalmentRequest89(){
    const filePath = 'Cypress/fixtures/Aadhar.png'

    cy.wait(2000);
    cy.get(this.locators.usermngt).click().should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.AgentEntReqst).click();
    cy.get(this.locators.AddAgent).click();
    cy.wait(2000);
    cy.get(':nth-child(2) > .nav-link > span').click({force: true});
    cy.wait(2000);
    cy.get(".form-control-group > :nth-child(3) > .btn").click();
    cy.wait(2000);
    cy.get(this.locators.Department).select("Agency Backend");
    cy.wait(2000);
    cy.get(this.locators.designation).select("Agency Backend");
    cy.wait(2000);
    cy.get(':nth-child(4) > .nav-link > span').click().should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.Address).type(" AAAAAAAAAAAAAAAA XXXXXXXXXXXXXXXXXX BBBBBBBBBBBBBB CCCCCCCCCCCCCCC");
    cy.wait(2000);
    cy.get('#stateId').select('All').should('be.visible');
    cy.wait(2000);
    cy.get("#cityId").select("All").should('be.visible');
    cy.wait(2000);
    cy.get("#landmarkId").type("xxxx Bank").should('be.visible');
    cy.wait(2000);
    cy.get("#pinId").type("845438");
    cy.wait(2000);
    cy.get('#emer_contactNO').type(8838506890);
    cy.wait(2000);
    cy.get('#bloodGroup').select("A-");
    cy.wait(2000);
    cy.get("#mobileTypeId").select("MO",{force : true});
    cy.wait(2000);
    //cy.get("input[placeholder='code']").type("3223").should('be.visible');
    //cy.wait(2000);
    //cy.get("input[name='primaryMobileNumber']").type("352407");
    //cy.wait(2000);
    function generateRandomMobileNumber() {
      const prefix = '07'; // Assuming you want the number to start with '07'
      const randomNumber = Math.floor(Math.random() * 200000000); // Generates an 8-digit number
      const paddedNumber = String(randomNumber).padStart(8, '0'); // Pads with leading zeros if necessary
      return prefix + paddedNumber;
    }
    // Cypress test code
    cy.get('input[name="primaryMobileNumber"]').type(generateRandomMobileNumber());
    cy.wait(500);
    //cy.get("#emailId").type("pranshu@yopmail.com");
    //cy.wait(2000);
    function generateRandomEmail() {
      const randomString = Math.random().toString(36).substring(2, 11); // Generates a random string
      return `user_${randomString}@yopmail.com`; // Concatenate to form an email address
    }

    // Cypress test code
    cy.get("#emailId").type(generateRandomEmail());
    cy.wait(500);
    cy.get("#dobId").type("11-06-2006");
    cy.wait(2000);
    cy.get("#fatherNameId").type(" Mr B Kumar",{force: true});
    cy.wait(2000);
    cy.get(this.locators.Banking_details).click().should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.cust_name).type("Pranshu raj").should('be.visible');
    cy.wait(2000);
    cy.get("input[placeholder='Enter Account Number']").type("456785678776543").should('be.visible');
    cy.wait(2000);
    cy.get("select[name='bankName']").select("BANK OF INDIA").should('be.visible');
    cy.wait(2000);
    cy.get("select[name='bankBranchId']").select("BANO").should('be.visible');
    cy.wait(2000);
    // cy.get(this.locators.ScopeOfWork).click().should('be.visible');
    // cy.get("#productGroup-0").select("All");
    // cy.wait(2000);
    // cy.get("#product-0").select("All");
    // cy.wait(2000);
    // cy.get("#subProduct-0").select("All").should('be.visible');
    // cy.wait(2000);
    // cy.get("#bucket-0").select("All").should('be.visible');
    // cy.wait(2000);
    // cy.get("#region-0").select("All").should('be.visible');
    // cy.wait(2000);
    // cy.get("#state-0").select("All").should('be.visible');
    // cy.wait(2000);
    // cy.get("#city-0").select("All").should('be.visible');
    // cy.wait(2000);
    // cy.get("#branch-0").select("All").should('be.visible');
    // cy.wait(2000);
    // cy.get(this.locators.PlaceOfWork).click().should('be.visible');
    // cy.wait(2000);
    // cy.get(this.locators.pininput).type("845438").should('be.visible');
    // cy.wait(2000);
    // cy.get(':nth-child(8) > .nav-link > span').click();
    // cy.wait(2000);
    // cy.get("#maxAccounts").type("2").should('be.visible');
    // cy.wait(2000);
   
    

   }
   AgentEnpalmentRequest90(){
    const filePath = 'Cypress/fixtures/Aadhar.png'

    cy.wait(2000);
    cy.get(this.locators.usermngt).click().should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.AgentEntReqst).click();
    cy.get(this.locators.AddAgent).click();
    //////////////////////////////////////Documentation_Details/////////////////////////////////////
    // const filePath = 'Aadhar.png';
    // const filePath1 = 'adharcard.pdf';
    cy.get(':nth-child(7) > .nav-link > span').click().should('be.visible');

    cy.wait(2000);
    cy.get("#docTypeSelect-0").select("Pan Card").should('be.visible');
    cy.wait(2000);
    cy.get('#addFileBtn-0').click();
    cy.get('input[type="file"]').eq(1).selectFile(filePath, { force: true });
    cy.wait(2000);
   
    cy.get('#docTypeSelect-1').select("Aadhar Card").should('be.visible');
    cy.wait(2000);
    cy.get('#addFileBtn-1').click();
    cy.get('input[type="file"]').eq(2).selectFile(filePath, { force: true });
    cy.wait(2000);

    cy.get("#docTypeSelect-2").select("Agency ID Card").should('be.visible');
    cy.wait(2000)
    cy.get('input[type="file"]').eq(3).selectFile(filePath, { force: true });
    cy.wait(2000);

    cy.get("#docTypeSelect-3").select("HOC Approval").should('be.visible');
    cy.wait(2000)
    cy.get('input[type="file"]').eq(4).selectFile(filePath, { force: true });
    cy.wait(2000);
   

   }
   AgentEnpalmentRequest91(){
    const filePath = 'Cypress/fixtures/Aadhar.png'

    cy.wait(2000);
    cy.get(this.locators.usermngt).click().should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.AgentEntReqst).click();
    cy.wait(2000);
    cy.get(this.locators.AddAgent).click();
    cy.wait(500);

      cy.get(this.locators.SelectUsertype).select("FOS");
    cy.wait(1000);

    cy.get(this.locators.FirstName).type("Pranshu").should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.LastName).type("Raj", {force: true}).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.Agencyname).select("Arun").should('be.visible');
    cy.wait(2000);
    // cy.get(this.locators.AgencySupervisorEmailId).type("pranshu@yopmail.com").should('be.visible');
    // cy.wait(2000);

     cy.get(this.locators.SelectAgencyReportManager).click(); 
cy.wait(2000);
cy.get('.ng-dropdown-panel .ng-option')        
  .then(options => {
    const randomIndex = Math.floor(Math.random() * options.length);
    cy.wrap(options[randomIndex]).click();   
  });
cy.wait(2000);

    cy.get(this.locators.dilarID).type("123").should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.DRACertificateDate).type("16-05-2024").should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.dratrainingdate).type("16-07-2024").should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.DRANumber).type("1234567").should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.Idtype).select("Pan card").should('be.visible');
    cy.wait(2000)
    cy.get(this.locators.UDIDNumberr).type("12345678909876543").should('be.visible');
    cy.wait(2000);

     const encode = faker.number.int({ min: 10000, max: 99999 }).toString();
       cy.get('#agentCode').type(encode);
      cy.wait(2000);

    const filePath1 = 'Aadhar.png'
    cy.get('.upload-text').click();
    cy.wait(500);
    cy.get('input[type="file"]').attachFile(filePath1);
    cy.wait(500);

    cy.wait(2000);
    cy.get(':nth-child(2) > .nav-link > span').click();
    cy.wait(2000);
    cy.get(".form-control-group > :nth-child(3) > .btn").click();
    cy.wait(2000);
    cy.get(this.locators.Department).select("Agency Backend");
    cy.wait(2000);
    cy.get(this.locators.designation).select("Agency Backend");
    cy.wait(2000);
    cy.get(':nth-child(4) > .nav-link > span').click().should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.Address).type(" AAAAAAAAAAAAAAAA XXXXXXXXXXXXXXXXXX BBBBBBBBBBBBBB CCCCCCCCCCCCCCC");
    cy.wait(2000);
    cy.get('#stateId').select('All').should('be.visible');
    cy.wait(2000);
    cy.get("select[name='city']").select("All").should('be.visible');
    cy.wait(2000);
    cy.get("input[placeholder='Enter Address Landmark']").type("xxxx Bank").should('be.visible');
    cy.wait(2000);
    cy.get("#pinId").type("845438");
    cy.wait(2000);
    cy.get('#emer_contactNO').type(8838506890);
    cy.wait(2000);
    cy.get('#bloodGroup').select("A-");
    cy.wait(2000);
    cy.get("#mobileTypeId").select("MO",{force : true});
    cy.wait(2000);
    // cy.get("input[placeholder='code']").type("3223").should('be.visible');
    // cy.wait(2000);
    //cy.get("input[name='primaryMobileNumber']").type("352407");
    //cy.wait(2000);
    function generateRandomMobileNumber() {
      const prefix = '8'; // Assuming you want the number to start with '07'
      const randomNumber = Math.floor(Math.random() * 20000000000); // Generates an 8-digit number
      const paddedNumber = String(randomNumber).padStart(8, '0'); // Pads with leading zeros if necessary
      return prefix + paddedNumber;
    }
    // Cypress test code
    cy.get('input[name="primaryMobileNumber"]').type(generateRandomMobileNumber());
    cy.wait(500);
    //cy.get("#emailId").type("pranshu@yopmail.com");
    //cy.wait(2000);
    function generateRandomEmail() {
      const randomString = Math.random().toString(36).substring(2, 11); // Generates a random string
      return `user_${randomString}@yopmail.com`; // Concatenate to form an email address
    }

    // Cypress test code
    cy.get("#emailId").type(generateRandomEmail());
    cy.wait(500);
    cy.get("#dobId").type("11-06-2006");
    cy.wait(2000);
    cy.get("#fatherNameId").type("Kumar", {force: true});
    cy.wait(2000);
    cy.get(this.locators.Banking_details).click().should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.cust_name).type("Pranshu raj").should('be.visible');
    cy.wait(2000);
    cy.get("input[placeholder='Enter Account Number']").type("456785678776543").should('be.visible');
    cy.wait(2000);
    cy.get("select[name='bankName']").select("BANK OF INDIA").should('be.visible');
    cy.wait(2000);
    cy.get("select[name='bankBranchId']").select("BANO").should('be.visible');
    cy.wait(2000);
    // cy.get(this.locators.ScopeOfWork).click().should('be.visible');
    // cy.wait(2000);
    // cy.get("#productGroup-0").select("All");
    // cy.wait(2000);
    // cy.get("#product-0").select("All");
    // cy.wait(2000);
    // cy.get("#subProduct-0").select("All").should('be.visible');
    // cy.wait(2000);
    // cy.get("#bucket-0").select("All").should('be.visible');
    // cy.wait(2000);
    // cy.get("#country-0").select("All").should('be.visible');
    // cy.wait(2000);
    // cy.get("#region-0").select("All").should('be.visible');
    // cy.wait(2000);
    // cy.get("#state-0").select("All").should('be.visible');
    // cy.wait(2000);
    // cy.get("#city-0").select("All").should('be.visible');
    // cy.wait(2000);
    // cy.get("#branch-0").select("All").should('be.visible');
    // cy.wait(2000);
     // cy.get(this.locators.PlaceOfWork).click().should('be.visible');
    // cy.wait(2000);
    // cy.get(this.locators.pininput).type("845438").should('be.visible');
    // cy.wait(2000);
    // cy.get(':nth-child(8) > .nav-link > span').click().should('be.visible');
    // cy.wait(2000);
    // cy.get("#maxAccounts").type("2").should('be.visible');
    // cy.wait(2000);
    // cy.get(':nth-child(8) > .nav-link > span').click().should('be.visible');
    // cy.wait(2000);
    // cy.get("#expYears").type("2").should('be.visible');
    // cy.wait(2000);
    // cy.get("select[name='cutomerPersona']").select("Self-cure customer").should('be.visible');
    // cy.wait(2000);
    // cy.get('#lanKnown').select("English").should('be.visible');
    // cy.wait(2000);
    // cy.get('#perBand').select("LH").should('be.visible');
    // cy.wait(2000);
    // cy.get('[heading="Documentation Details"] > .panel > .panel-heading > .panel-title > .accordion-toggle').click().should('be.visible');
    // cy.wait(2000);

    cy.get(':nth-child(7) > .nav-link > span').click().should('be.visible');

    cy.wait(2000);
    cy.get("#docTypeSelect-0").select("Pan Card").should('be.visible');
    cy.wait(2000);
    cy.get('#addFileBtn-0').click();
    cy.get('input[type="file"]').eq(1).selectFile(filePath, { force: true });
    cy.wait(2000);
   
    cy.get('#docTypeSelect-1').select("Aadhar Card").should('be.visible');
    cy.wait(2000);
    cy.get('#addFileBtn-1').click();
    cy.get('input[type="file"]').eq(2).selectFile(filePath, { force: true });
    cy.wait(2000);

    cy.get("#docTypeSelect-2").select("Agency ID Card").should('be.visible');
    cy.wait(2000)
    cy.get('input[type="file"]').eq(3).selectFile(filePath, { force: true });
    cy.wait(2000);

    cy.get("#docTypeSelect-3").select("HOC Approval").should('be.visible');
    cy.wait(2000)
    cy.get('input[type="file"]').eq(4).selectFile(filePath, { force: true });
    cy.wait(2000);

     cy.get(':nth-child(8) > .nav-link > span').click().should('be.visible');
     cy.wait(2000);

    //choose date 2

    cy.get("#CollectionDate").type("25/06/2023").should('be.visible');
    cy.wait(2000);
    cy.get("#RenewalDate").type("15-07-2024").should('be.visible');
    cy.wait(2000);
    cy.get("#ExpiryDate").type("15-07-2026").should('be.visible');
    cy.wait(2000);
    cy.get("#remarks").type("aaaaaa bbbbbbbbb cccccccccc dddddddddd 123",{force: true}).should('be.visible');
    cy.wait(2000)
    cy.get('#btn-submit').click();
    cy.wait(3000);
    cy.get('#empStatus').select("Pending Approval");
    cy.wait(300);
    cy.get('.btn').click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(10) > .form-control-group > .form-check-group > label > input').click();
    cy.wait(2000);
    cy.get('#btn-Approve').click();
    cy.wait(2000);




   }
   AgentEnpalmentRequest624(){
    const filePath = 'Cypress/fixtures/Aadhar.png'

    cy.wait(2000);
    cy.get(this.locators.usermngt).click().should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.AgentEntReqst).click();
    cy.wait(2000);
    cy.get(this.locators.AddAgent).click();
    cy.wait(500);
    cy.get(this.locators.FirstName).type("Pranshu").should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.LastName).type("Raj").should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.Agencyname).select("Arun").should('be.visible');
    cy.wait(2000);
    // cy.get(this.locators.AgencySupervisorEmailId).type("pranshu@yopmail.com").should('be.visible');
    // cy.wait(2000);

    cy.get(this.locators.SelectAgencyReportManager).click(); 
cy.wait(2000);
cy.get('.ng-dropdown-panel .ng-option')        
  .then(options => {
    const randomIndex = Math.floor(Math.random() * options.length);
    cy.wrap(options[randomIndex]).click();   
  });
cy.wait(2000);


    cy.get(this.locators.dilarID).type("123").should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.DRACertificateDate).type("16-05-2024").should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.dratrainingdate).type("16-07-2024").should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.DRANumber).type("1234567").should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.Idtype).select("Pan card").should('be.visible');
    cy.wait(2000)
    cy.get(this.locators.UDIDNumberr).type("12345678909876543").should('be.visible');
    cy.wait(2000);

     const encode = faker.number.int({ min: 10000, max: 99999 }).toString();
       cy.get('#agentCode').type(encode);
      cy.wait(2000);


    const filePath1 = 'Aadhar.png'
    cy.get('.upload-text').click();
    cy.wait(500);
    cy.get('input[type="file"]').attachFile(filePath1);
    cy.wait(500);
    

   }
   AgentEnpalmentRequest880(){
    const filePath = 'Cypress/fixtures/Aadhar.png'

    cy.wait(2000);
    cy.get(this.locators.usermngt).click().should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.AgentEntReqst).click();
    cy.wait(2000);
    cy.get(this.locators.FirstName).click();
    cy.wait(2000);
    cy.get('#lname').click();
    cy.wait(2000);
    cy.get('.error > .ng-star-inserted').should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.FirstName).type("123@");
    cy.wait(2000);
    cy.get(':nth-child(1) > .error > .ng-star-inserted').should('be.visible');
    cy.wait(2000);



   }
   AgentEnpalmentRequest625(){
    cy.wait(2000);
    cy.get(this.locators.usermngt).click().should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.AgentEntReqst).click();
    cy.wait(2000);
    cy.get(this.locators.AddAgent).click();
    cy.wait(500);
    cy.get(':nth-child(2) > .nav-link > span').click({force: true});
    cy.wait(2000);
    cy.get(this.locators.Add).click();
    cy.wait(2000);
    cy.get('#department-select-0').select("Agency Backend").should('be.visible');
    cy.wait(2000);
    cy.get('#designation-select-0').select("Agency Backend").should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.Add).click();
    cy.get('#department-select-0').select("Agency Backend").should('be.visible');
    cy.wait(2000);
    cy.get('#designation-select-0').select("Agency Backend").should('be.visible');
    cy.wait(2000);

   }
   AgentEnpalmentRequest626(){
    cy.wait(2000);
    cy.get(this.locators.usermngt).click().should('be.visible').should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.AgentEntReqst).click();
    cy.wait(2000);
    cy.get(this.locators.AddAgent).click();
    cy.wait(500);
    cy.get(':nth-child(2) > .nav-link > span').click({force: true});
    cy.wait(2000);
    cy.get(this.locators.Add).click();
    cy.wait(2000);
    cy.get('#department-select-0').select("Agency Backend").should('be.visible');
    cy.wait(2000);
    cy.get('#designation-select-0').select("Agency Cashier").should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.Add).click();
    cy.get('#department-select-1').select("Agency Backend").should('be.visible');
    cy.wait(2000);
    cy.get('#designation-select-1').select("Agency Backend").should('be.visible');
    cy.wait(2000);
    
}
AgentEnpalmentRequest627(){
  cy.wait(2000);
    cy.get(this.locators.usermngt).click().should('be.visible').should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.AgentEntReqst).click();
    cy.wait(2000);
    cy.get(this.locators.AddAgent).click();
    cy.wait(500);
    cy.get(':nth-child(2) > .nav-link > span').click({force: true});
    cy.wait(2000);
    cy.get(this.locators.Add).click();
    cy.wait(2000);
    cy.get('#department-select-0').select("Agency Backend").should('be.visible');
    cy.wait(2000);
    cy.get('#designation-select-0').select("Agency Owner").should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.Add).click();
    cy.get('#department-select-1').select("Agency Backend").should('be.visible');
    cy.wait(2000);
    cy.get('#designation-select-1').select("Agency Backend").should('be.visible');
    cy.wait(2000);


}
AgentEnpalmentRequest628(){
  cy.wait(2000);
  cy.get(this.locators.usermngt).click().should('be.visible').should('be.visible');
  cy.wait(2000);
  cy.get(this.locators.AgentEntReqst).click();
  cy.get(this.locators.AddAgent).click();
  cy.wait(500);
  cy.get(':nth-child(2) > .nav-link > span').click({force: true});
  cy.wait(2000);
  cy.get(this.locators.Add).click();
  cy.wait(2000);
  cy.get('#department-select-0').select('Agency Frontend').should('be.visible').should('be.visible');
  cy.wait(300);
  cy.get('#designation-select-0').select("Agency Supervisor").should('be.visible').should('be.visible');
  cy.wait(300);
  cy.get(this.locators.Add).click();
    cy.get('#department-select-1').select("Agency Backend").should('be.visible');
    cy.wait(2000);
    cy.get('#designation-select-1').select("Agency Backend").should('be.visible');
    cy.wait(2000);


}
AgentEnpalmentRequest629(){
  cy.wait(2000);
  cy.get(this.locators.usermngt).click().should('be.visible').should('be.visible');
  cy.wait(2000);
  cy.get(this.locators.AgentEntReqst).click();
  cy.wait(2000);
  cy.get(this.locators.AddAgent).click();
  cy.wait(500);
  cy.get(':nth-child(2) > .nav-link > span').click({force: true});
  cy.wait(2000);
  cy.get(this.locators.Add).click();
  cy.wait(2000);
  cy.get('#department-select-0').select('Agency Frontend').should('be.visible');
  cy.wait(300);
  cy.get('#designation-select-0').select("Agent").should('be.visible');
  cy.wait(300);
  cy.get(this.locators.Add).click();
    cy.get('#department-select-1').select("Agency Backend").should('be.visible');
    cy.wait(2000);
    cy.get('#designation-select-1').select("Agency Backend").should('be.visible');
    cy.wait(2000);

}
AgentEnpalmentRequest630(){
  cy.wait(2000);
  cy.get(this.locators.usermngt).click().should('be.visible');
  cy.wait(2000);
  cy.get(this.locators.AgentEntReqst).click();
  cy.wait(2000);
  cy.get(this.locators.AddAgent).click();
  cy.wait(500);
  cy.get(':nth-child(2) > .nav-link > span').click({force: true});
  cy.wait(2000);
  cy.get(this.locators.Add).click();
  cy.wait(2000);
  cy.get('#department-select-0').select('Agency Frontend').should('be.visible');
  cy.wait(300);
  cy.get('#designation-select-0').select("Telecaller").should('be.visible');
  cy.wait(300);
  cy.get(this.locators.Add).click();
    cy.get('#department-select-1').select("Agency Backend").should('be.visible');
    cy.wait(2000);
    cy.get('#designation-select-1').select("Agency Backend").should('be.visible');
    cy.wait(2000);

}
AgentEnpalmentRequest631(){
  const filePath = 'Cypress/fixtures/Aadhar.png'

    cy.wait(2000);
    cy.get(this.locators.usermngt).click().should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.AgentEntReqst).click();
    cy.wait(2000);
    cy.get(this.locators.AddAgent).click();
    cy.wait(500);

    cy.get(this.locators.SelectUsertype).select("FOS");
    cy.wait(1000);

    cy.get(this.locators.FirstName).type("Pranshu").should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.LastName).type("Raj").should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.Agencyname).select("Arun").should('be.visible');
    cy.wait(2000);
    // cy.get(this.locators.AgencySupervisorEmailId).type("pranshu@yopmail.com").should('be.visible');
    // cy.wait(2000);

     cy.get(this.locators.SelectAgencyReportManager).click(); 
cy.wait(2000);
cy.get('.ng-dropdown-panel .ng-option')        
  .then(options => {
    const randomIndex = Math.floor(Math.random() * options.length);
    cy.wrap(options[randomIndex]).click();   
  });
cy.wait(2000);


    cy.get(this.locators.dilarID).type("123").should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.DRACertificateDate).type("16-05-2024").should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.dratrainingdate).type("16-07-2024").should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.DRANumber).type("1234567").should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.Idtype).select("Pan card").should('be.visible');
    cy.wait(2000)
    cy.get(this.locators.UDIDNumberr).type("12345678909876543").should('be.visible');
    cy.wait(2000);

     const encode = faker.number.int({ min: 10000, max: 99999 }).toString();
       cy.get('#agentCode').type(encode);
      cy.wait(2000);

    const filePath1 = 'Aadhar.png'
    cy.get('.upload-text').click();
    cy.wait(500);
    cy.get('input[type="file"]').attachFile(filePath1);
    cy.wait(500);
    
    cy.wait(2000);
    cy.get(':nth-child(2) > .nav-link > span').click( {force: true});
    cy.wait(2000);
    cy.get(this.locators.Add).click();
    cy.wait(2000);
    cy.get(this.locators.Department).select("Agency Backend");
    cy.wait(2000);
    cy.get(this.locators.designation).select("Agency Backend");
    cy.wait(2000);
    cy.get(':nth-child(4) > .nav-link').click().should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.Address).type(" AAAAAAAAAAAAAAAA XXXXXXXXXXXXXXXXXX BBBBBBBBBBBBBB CCCCCCCCCCCCCCC");
    cy.wait(2000);
    cy.get('#stateId').select('All').should('be.visible');
    cy.wait(2000);
    cy.get("select[name='city']").select("All").should('be.visible');
    cy.wait(2000);
    cy.get("input[placeholder='Enter Address Landmark']").type("xxxx Bank").should('be.visible');
    cy.wait(2000);
    cy.get('#bloodGroup').select("A-");
    cy.wait(2000);
    cy.get('#emer_contactNO').type(8956748596);
    cy.wait(2000);
    cy.get("#pinId").type("845438");
    cy.wait(2000);
    cy.get("#mobileTypeId").select("MO",{force : true});
    cy.wait(2000);
    // cy.get("input[placeholder='code']").type("3223").should('be.visible');
    // cy.wait(2000);
   
    function generateRandomMobileNumber() {
      const prefix = '07'; // Assuming you want the number to start with '07'
      const randomNumber = Math.floor(Math.random() * 200000000); // Generates an 8-digit number
      const paddedNumber = String(randomNumber).padStart(8, '0'); // Pads with leading zeros if necessary
      return prefix + paddedNumber;
    }
    // Cypress test code
    cy.get('input[name="primaryMobileNumber"]').type(generateRandomMobileNumber());
    cy.wait(500);
    //cy.get("#emailId").type("pranshu@yopmail.com");
    //cy.wait(2000);
    function generateRandomEmail() {
      const randomString = Math.random().toString(36).substring(2, 11); // Generates a random string
      return `user_${randomString}@yopmail.com`; // Concatenate to form an email address
    }

    // Cypress test code
    cy.get("#emailId").type(generateRandomEmail());
    cy.wait(500);
    cy.get("#dobId").type("11-06-2006");
    cy.wait(2000);
    cy.get("#fatherNameId").type("Kumar", {force: true});
    cy.wait(2000);
    cy.get(this.locators.Banking_details).click().should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.cust_name).type("Pranshu raj").should('be.visible');
    cy.wait(2000);
    cy.get("input[placeholder='Enter Account Number']").type("456785678776543").should('be.visible');
    cy.wait(2000);
    cy.get("select[name='bankName']").select("BANK OF INDIA").should('be.visible');
    cy.wait(2000);
    cy.get("select[name='bankBranchId']").select("BANO").should('be.visible');
    cy.wait(2000);
    // cy.get(this.locators.ScopeOfWork).click().should('be.visible');
    // cy.wait(2000);
   

    // cy.get(this.locators.Productoption1).click();
    // cy.wait(1000);
    // cy.get(this.locators.productoption1_Suboptions).click();
    // cy.wait(3000);
    // cy.get(this.locators.selectsuboptions).click();
    // cy.wait(1000);




     // cy.get(this.locators.PlaceOfWork).click().should('be.visible');
    // cy.wait(2000);
    // cy.get(this.locators.pininput).type("845438").should('be.visible');
    // cy.wait(2000);
    // cy.get(':nth-child(8) > .nav-link > span').click().should('be.visible');
    // cy.wait(2000);
    // cy.get("#maxAccounts").type("2").should('be.visible');
    // cy.wait(2000);
    // cy.get(':nth-child(8) > .nav-link > span').click().should('be.visible');
    // cy.wait(2000);
    // cy.get("input[name='experiance']").type("2").should('be.visible');
    // cy.wait(2000);
    // cy.get("select[name='cutomerPersona']").select("Self-cure customer").should('be.visible');
    // cy.wait(2000);
    // cy.get('#lanKnown').select("Hindi").should('be.visible');
    // cy.wait(2000);
    // cy.get('#perBand').select("LH").should('be.visible');
    // cy.wait(2000);
    // cy.get('.right-btn').click();

    //#####################################################Docu&Details###########################
    cy.get(':nth-child(7) > .nav-link > span').click().should('be.visible');

    cy.wait(2000);
    cy.get("#docTypeSelect-0").select("Pan Card").should('be.visible');
    cy.wait(2000);
    cy.get('#addFileBtn-0').click();
    cy.get('input[type="file"]').eq(1).selectFile(filePath, { force: true });
    cy.wait(2000);
   
    cy.get('#docTypeSelect-1').select("Aadhar Card").should('be.visible');
    cy.wait(2000);
    cy.get('#addFileBtn-1').click();
    cy.get('input[type="file"]').eq(2).selectFile(filePath, { force: true });
    cy.wait(2000);

    cy.get("#docTypeSelect-2").select("Agency ID Card").should('be.visible');
    cy.wait(2000)
    cy.get('input[type="file"]').eq(3).selectFile(filePath, { force: true });
    cy.wait(2000);

    
cy.get("#docTypeSelect-3").select("HOC Approval").should('be.visible');
cy.wait(2000)
cy.get('input[type="file"]').eq(4).selectFile(filePath, { force: true });
cy.wait(2000);

          //####################################################

     cy.get(':nth-child(8) > .nav-link').click().should('be.visible');
     cy.wait(2000);

    //  cy.get('#CollectionDate').click().should('be.visible');
    //  cy.wait(2000)
    // //choose previous month
    //  cy.get("button[class='current ng-star-inserted'] span").click()
    //  cy.wait(2000)
    // //choose next month 
    //   cy.get("tbody > :nth-child(1) > :nth-child(1) > span").click()
    //   cy.wait(2000);
    //   cy.get('.bs-datepicker-container').contains('8').click()
      
      cy.wait(2000);
    //choose date 2

    cy.get("#CollectionDate").type("25/06/2003").should('be.visible');
    cy.wait(2000);
    cy.get("#RenewalDate").type("15-07-2024").should('be.visible');
    cy.wait(2000);
    cy.get("#ExpiryDate").type("15-07-2026").should('be.visible');
    cy.wait(5000);
    cy.get("#remarks").type("aaaaaa bbbbbbbbb cccccccccc dddddddddd 123",{force: true} ).should('be.visible');
    cy.wait(2000);
    cy.get('#btn-save').click();
    cy.wait(300);
    cy.contains("Agent profile is Saved as Draft.").should("be.visible");
    

}
AgentEnpalmentRequest632(){
  const filePath = 'Cypress/fixtures/Aadhar.png'

  cy.wait(2000);
  cy.get(this.locators.usermngt).click().should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.AgentEntReqst).click();
    cy.wait(2000);
    cy.get(this.locators.AddAgent).click();
  cy.wait(2000);
  cy.get(this.locators.Banking_details).click().should('be.visible');
  cy.wait(2000);
  cy.get(this.locators.cust_name).type("Pranshu raj").should('be.visible');
  cy.wait(2000);
  cy.get("input[placeholder='Enter Account Number']").type("456785678776543").should('be.visible');
  cy.wait(2000);
  cy.get("select[name='bankName']").select("BANK OF INDIA").should('be.visible');
  cy.wait(2000);
  cy.get("select[name='bankBranchId']").select("BANO").should('be.visible');
  cy.wait(2000);

}
AgentEnpalmentRequest633(){ 
  cy.wait(2000);
  cy.get(this.locators.usermngt).click().should('be.visible');
  cy.wait(2000);
  cy.get(this.locators.AgentEntReqst).click();
  cy.wait(2000);
  cy.get(this.locators.AddAgent).click();
  cy.wait(500);
  cy.get(":nth-child(6) > .nav-link > span").click().should('be.visible');
  cy.wait(2000);
  cy.get(this.locators.Productoption1).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBucketHead).click();
  cy.wait(1000);
   cy.get(this.locators.ClickOnBucket).click();
  cy.wait(1000);
   

}
AgentEnpalmentRequest634(){
  cy.wait(2000);
  cy.get(this.locators.usermngt).click().should('be.visible');
  cy.wait(2000);
  cy.get(this.locators.AgentEntReqst).click();
  cy.wait(2000);
  cy.get(this.locators.AddAgent).click();
  cy.wait(500);
   cy.get(':nth-child(3) > .nav-link > span').click().should('be.visible');
    cy.wait(2000);
  cy.get('#walletLimit').type(500000);
  cy.wait(2000);

}
AgentEnpalmentRequest635(){
  const filePath = 'Cypress/fixtures/Aadhar_AboveSize.jpg'

  cy.wait(2000);
  cy.get(this.locators.usermngt).click().should('be.visible');
  cy.wait(2000);
  cy.get(this.locators.AgentEntReqst).click();
  cy.wait(2000);
  cy.get(this.locators.AddAgent).click();
  cy.wait(2000);
 cy.get(':nth-child(7) > .nav-link > span').click().should('be.visible');

  cy.wait(2000);
  cy.get("#docTypeSelect-0").select("Pan Card").should('be.visible');
  cy.wait(2000);
  cy.get('#addFileBtn-0').click();
  cy.get('input[type="file"]').eq(1).selectFile(filePath, { force: true });
  cy.wait(2000);

  cy.contains("File names should not contain special characters or spaces.").should("be.visible");
  cy.wait(2000);
}
AgentEnpalmentRequest636(){
   const filePath = 'Cypress/fixtures/AadharAboveSize.jpg'

  cy.wait(2000);
  cy.get(this.locators.usermngt).click().should('be.visible');
  cy.wait(2000);
  cy.get(this.locators.AgentEntReqst).click();
  cy.wait(2000);
  cy.get(this.locators.AddAgent).click();
  cy.wait(2000);

  cy.get(':nth-child(7) > .nav-link > span').click().should('be.visible');

  cy.wait(2000);
  cy.get("#docTypeSelect-0").select("Pan Card").should('be.visible');
  cy.wait(2000);
  cy.get('#addFileBtn-0').click();
  cy.get('input[type="file"]').eq(1).selectFile(filePath, { force: true });
  cy.wait(2000);

  cy.contains("File size must not exceed 2 MB.").should("be.visible");
  cy.wait(2000);

}
AgentEnpalmentRequest637(){
   const filePath = 'Cypress/fixtures/Aadhar.png'
  cy.wait(2000);
  cy.get(this.locators.usermngt).click().should('be.visible');
  cy.wait(2000);
  cy.get(this.locators.AgentEntReqst).click();
  cy.wait(2000);
  cy.get(this.locators.AddAgent).click();
  cy.wait(2000);
  cy.get(':nth-child(7) > .nav-link > span').click().should('be.visible');

  cy.wait(2000);
  cy.get("#docTypeSelect-0").select("Pan Card").should('be.visible');
  cy.wait(2000);
  cy.get('#addFileBtn-0').click();
  cy.get('input[type="file"]').eq(1).selectFile(filePath, { force: true });
  cy.wait(2000);
 
  cy.get('#docTypeSelect-1').select("Aadhar Card").should('be.visible');
  cy.wait(2000);
  cy.get('#addFileBtn-1').click();
  cy.get('input[type="file"]').eq(2).selectFile(filePath, { force: true });
  cy.wait(2000);

  cy.get("#docTypeSelect-2").select("Agency ID Card").should('be.visible');
  cy.wait(2000)
  cy.get('input[type="file"]').eq(3).selectFile(filePath, { force: true });
  cy.wait(2000);
 
  
cy.get("#docTypeSelect-3").select("HOC Approval").should('be.visible');
cy.wait(2000)
cy.get('input[type="file"]').eq(4).selectFile(filePath, { force: true });
cy.wait(2000);
   
}
AgentEnpalmentRequest638(){
  cy.wait(2000);
  cy.get(this.locators.usermngt).click().should('be.visible');
  cy.wait(2000);
  cy.get(this.locators.AgentEntReqst).click();
  cy.wait(2000);
  cy.get(this.locators.AddAgent).click();
  cy.wait(2000);
  cy.get(':nth-child(8) > .nav-link > span').click().should('be.visible');
     cy.wait(2000);

     cy.get('#CollectionDate').click({force: true}).should('be.visible');
     cy.wait(2000)
    //choose previous month
     cy.get("button[class='current ng-star-inserted'] span").click()
     cy.wait(2000)
    //choose next month 
      cy.get("tbody > :nth-child(1) > :nth-child(1) > span").click()
      cy.wait(2000);
      cy.get('.bs-datepicker-container').contains('8').click()
      
      cy.wait(2000);
    //choose date 2

    cy.get("#CollectionDate").type("25/06/2003").should('be.visible');
    cy.wait(2000);
    cy.get("#RenewalDate").type("15-07-2024").should('be.visible');
    cy.wait(2000);
    cy.get("#ExpiryDate").type("13-07-2026").should('be.visible');

}
AgentEnpalmentRequest639(){
  const filePath = 'Cypress/fixtures/Aadhar.png'

  cy.wait(2000);
  cy.get(this.locators.usermngt).click().should('be.visible');
  cy.wait(2000);
  cy.get(this.locators.AgentEntReqst).click();
  cy.wait(2000);
  cy.get(this.locators.AddAgent).click();
  cy.wait(2000);

   cy.get(this.locators.SelectUsertype).select("FOS");
    cy.wait(1000);

  cy.wait(2000);
  cy.get(this.locators.FirstName).type("Pranshu").should('be.visible');
  cy.wait(2000);
  cy.get(this.locators.LastName).type("Raj").should('be.visible');
  cy.wait(2000);
  cy.get(this.locators.Agencyname).select("Arun").should('be.visible');
  cy.wait(2000);
  // cy.get(this.locators.AgencySupervisorEmailId).type("pranshu@yopmail.com").should('be.visible');
  // cy.wait(2000);

   cy.get(this.locators.SelectAgencyReportManager).click(); 
cy.wait(2000);
cy.get('.ng-dropdown-panel .ng-option')        
  .then(options => {
    const randomIndex = Math.floor(Math.random() * options.length);
    cy.wrap(options[randomIndex]).click();   
  });
cy.wait(2000);

  cy.get(this.locators.dilarID).type("123").should('be.visible');
  cy.wait(2000);
  cy.get(this.locators.DRACertificateDate).type("16-05-2024").should('be.visible');
  cy.wait(2000);
  cy.get(this.locators.dratrainingdate).type("16-07-2024").should('be.visible');
  cy.wait(2000);
  cy.get(this.locators.DRANumber).type("1234567").should('be.visible');
  cy.wait(2000);
  cy.get(this.locators.Idtype).select("Pan card").should('be.visible');
  cy.wait(2000)
  cy.get(this.locators.UDIDNumberr).type("12345678909876543").should('be.visible');
  cy.wait(2000);

   const encode = faker.number.int({ min: 10000, max: 99999 }).toString();
       cy.get('#agentCode').type(encode);
      cy.wait(2000);

  const filePath1 = 'Aadhar.png'
  cy.get('.upload-text').click();
  cy.wait(500);
  cy.get('input[type="file"]').attachFile(filePath1);
  cy.wait(500);
   
  
  cy.get(':nth-child(2) > .nav-link > span').click();
  cy.wait(2000);
  cy.get(".form-control-group > :nth-child(3) > .btn").click();
  cy.wait(2000);
  cy.get(this.locators.Department).select("Agency Backend");
  cy.wait(2000);
  cy.get(this.locators.designation).select("Agency Backend");
  cy.wait(2000);
  cy.get(':nth-child(4) > .nav-link > span').click().should('be.visible');
  cy.wait(2000);
  cy.get(this.locators.Address).type(" AAAAAAAAAAAAAAAA XXXXXXXXXXXXXXXXXX BBBBBBBBBBBBBB CCCCCCCCCCCCCCC");
  cy.wait(2000);
  cy.get('#stateId').select('All').should('be.visible');
  cy.wait(2000);
  cy.get("select[name='city']").select("All").should('be.visible');
  cy.wait(2000);
  cy.get("input[placeholder='Enter Address Landmark']").type("xxxx Bank").should('be.visible');
  cy.wait(2000);
  cy.get("#pinId").type("845438");
  cy.wait(2000);
  cy.get('#bloodGroup').select("A-");
  cy.wait(2000);
  cy.get('#emer_contactNO').type(8956748596);
  cy.wait(2000);
  cy.get("#mobileTypeId").select("MO",{force : true});
  cy.wait(2000);
  // cy.get("#areaCodeId").type("3223").should('be.visible');
  // cy.wait(2000);
  //cy.get("input[name='primaryMobileNumber']").type("352407");
  //cy.wait(2000);
  function generateRandomMobileNumber() {
    const prefix = '07'; // Assuming you want the number to start with '07'
    const randomNumber = Math.floor(Math.random() * 200000000); // Generates an 8-digit number
    const paddedNumber = String(randomNumber).padStart(8, '0'); // Pads with leading zeros if necessary
    return prefix + paddedNumber;
  }
  // Cypress test code
  cy.get('input[name="primaryMobileNumber"]').type(generateRandomMobileNumber());
  cy.wait(500);
  //cy.get("#emailId").type("pranshu@yopmail.com");
  //cy.wait(2000);
  function generateRandomEmail() {
    const randomString = Math.random().toString(36).substring(2, 11); // Generates a random string
    return `user_${randomString}@yopmail.com`; // Concatenate to form an email address
  }

  // Cypress test code
  cy.get("#emailId").type(generateRandomEmail());
  cy.wait(500);
  cy.get("#dobId").type("11-06-2006");
  cy.wait(2000);
  cy.get("#fatherNameId").type("Kumar", {force: true});
  cy.wait(2000);
  cy.get(":nth-child(5) > .nav-link > span").click().should('be.visible');
  cy.wait(2000);
  cy.get(this.locators.cust_name).type("Pranshu raj").should('be.visible');
  cy.wait(2000);
  cy.get("input[placeholder='Enter Account Number']").type("456785678776543").should('be.visible');
  cy.wait(2000);
  cy.get("select[name='bankName']").select("BANK OF INDIA").should('be.visible');
  cy.wait(2000);
  cy.get("select[name='bankBranchId']").select("BANO").should('be.visible');
  cy.wait(500);
  // cy.get(":nth-child(6) > .nav-link > span").click().should('be.visible');
  // cy.wait(2000);
  // cy.get("#productGroup-0").select("All");
  // cy.wait(2000);
  // cy.get("#product-0").select("All");
  // cy.wait(2000);
  // cy.get("#subProduct-0").select("All").should('be.visible');
  // cy.wait(2000);
  // cy.get("#bucket-0").select("All").should('be.visible');
  // cy.wait(2000);
  // cy.get("#country-0").select("All").should('be.visible');
  // cy.wait(2000);
  // cy.get("#country-0").select("All").should('be.visible');
  // cy.wait(2000);
  // cy.get("#region-0").select("All").should('be.visible');
  // cy.wait(2000);
  // cy.get("#state-0").select("All").should('be.visible');
  // cy.wait(2000);
  // cy.get("#city-0").select("All").should('be.visible');
  // cy.wait(2000);
  // cy.get(":nth-child(7) > .nav-link > span").click().should('be.visible');
  // cy.wait(2000);
  // cy.get("#areaPin").type("845438").should('be.visible');
  // cy.wait(2000);
  // cy.get(':nth-child(7) > .nav-link > span').click().should('be.visible');
  // cy.wait(2000);
  // cy.get("#maxAccounts").type("2").should('be.visible');
  // cy.wait(2000);
  // cy.get(':nth-child(8) > .nav-link > span').click().should('be.visible');
  // cy.wait(2000);
  // cy.get("input[name='experiance']").type("2").should('be.visible');
  // cy.wait(2000);
  // cy.get("select[name='cutomerPersona']").select("Self-cure customer").should('be.visible');
  // cy.wait(2000);
  // cy.get('#lanKnown').select("Hindi").should('be.visible');
  // cy.wait(2000);
  // cy.get('#perBand').select("LH").should('be.visible');
  // cy.wait(2000);
  cy.get(':nth-child(7) > .nav-link > span').click().should('be.visible');

    cy.wait(2000);
    cy.get("#docTypeSelect-0").select("Pan Card").should('be.visible');
    cy.wait(2000);
    cy.get('#addFileBtn-0').click();
    cy.get('input[type="file"]').eq(1).selectFile(filePath, { force: true });
    cy.wait(2000);
   
    cy.get('#docTypeSelect-1').select("Aadhar Card").should('be.visible');
    cy.wait(2000);
    cy.get('#addFileBtn-1').click();
    cy.get('input[type="file"]').eq(2).selectFile(filePath, { force: true });
    cy.wait(2000);

    cy.get("#docTypeSelect-2").select("Agency ID Card").should('be.visible');
    cy.wait(2000)
    cy.get('input[type="file"]').eq(3).selectFile(filePath, { force: true });
    cy.wait(2000);

    
cy.get("#docTypeSelect-3").select("HOC Approval").should('be.visible');
cy.wait(2000)
cy.get('input[type="file"]').eq(4).selectFile(filePath, { force: true });
cy.wait(2000);
   
   cy.get(':nth-child(8) > .nav-link > span').click().should('be.visible');
   cy.wait(2000);

  //  cy.get('#CollectionDate').click().should('be.visible');
  //  cy.wait(2000)
  // //choose previous month
  //  cy.get("button[class='current ng-star-inserted'] span").click()
  //  cy.wait(2000)
  // //choose next month 
  //   cy.get("tbody > :nth-child(1) > :nth-child(1) > span").click()
  //   cy.wait(2000);
  //   cy.get('.bs-datepicker-container').contains('8').click()
    
  //   cy.wait(2000);
  //choose date 2

  cy.get("#CollectionDate").type("25/06/2003").should('be.visible');
  cy.wait(2000);
  cy.get("#RenewalDate").type("15-07-2024").should('be.visible');
  cy.wait(2000);
  cy.get("#ExpiryDate").type("15-07-2026").should('be.visible');
  cy.wait(2000);
  cy.get("#remarks").type("aaaaaa bbbbbbbbb cccccccccc dddddddddd 123", {force: true}).should('be.visible');
  cy.wait(2000);
  cy.get('#btn-save').click();
  cy.wait(300);
  cy.contains("Agent profile is Saved as Draft.").should("be.visible");
  

}
AgentEnpalmentRequest640(){
  const filePath = 'Cypress/fixtures/Aadhar.png'

  cy.wait(2000);
  cy.get(this.locators.usermngt).click().should('be.visible');
  cy.wait(2000);
  cy.get(this.locators.AgentEntReqst).click();
  cy.wait(2000);
  cy.get(this.locators.AddAgent).click();
  cy.wait(2000);

   cy.get(this.locators.SelectUsertype).select("Telecaller");
    cy.wait(1000);


  cy.get(this.locators.FirstName).type("Pranshu").should('be.visible');
  cy.wait(2000);
  cy.get(this.locators.LastName).type("Raj").should('be.visible');
  cy.wait(2000);
  cy.get(this.locators.Agencyname).select("Arun").should('be.visible');
  cy.wait(2000);
  // cy.get(this.locators.AgencySupervisorEmailId).type("pranshu@yopmail.com").should('be.visible');
  // cy.wait(2000);

   cy.get(this.locators.SelectAgencyReportManager).click(); 
cy.wait(2000);
cy.get('.ng-dropdown-panel .ng-option')        
  .then(options => {
    const randomIndex = Math.floor(Math.random() * options.length);
    cy.wrap(options[randomIndex]).click();   
  });
cy.wait(2000);


  cy.get(this.locators.dilarID).type("123").should('be.visible');
  cy.wait(2000);
  cy.get(this.locators.DRACertificateDate).type("16-05-2024").should('be.visible');
  cy.wait(2000);
  cy.get(this.locators.dratrainingdate).type("16-07-2024").should('be.visible');
  cy.wait(2000);
  cy.get(this.locators.DRANumber).type("1234567").should('be.visible');
  cy.wait(2000);
  cy.get(this.locators.Idtype).select("Pan card").should('be.visible');
  cy.wait(2000)
  cy.get(this.locators.UDIDNumberr).type("12345678909876543").should('be.visible');
  cy.wait(2000);

  const encode = faker.number.int({ min: 10000, max: 99999 }).toString();
       cy.get('#agentCode').type(encode);
      cy.wait(2000);

  const filePath1 = 'Aadhar.png'
    cy.get('.upload-text').click();
    cy.wait(500);
    cy.get('input[type="file"]').attachFile(filePath1);
    cy.wait(500);

  cy.wait(2000);
  cy.get(':nth-child(2) > .nav-link > span').click();
  cy.wait(2000);
  cy.get(this.locators.Add).click();
  cy.wait(2000);
  cy.get(this.locators.Department).select("Agency Backend");
  cy.wait(2000);
  cy.get(this.locators.designation).select("Agency Backend");
  cy.wait(2000);
  cy.get(':nth-child(4) > .nav-link > span').click().should('be.visible');
  cy.wait(2000);
  cy.get(this.locators.Address).type(" AAAAAAAAAAAAAAAA XXXXXXXXXXXXXXXXXX BBBBBBBBBBBBBB CCCCCCCCCCCCCCC");
  cy.wait(2000);
  cy.get('#stateId').select('All').should('be.visible');
  cy.wait(2000);
  cy.get("select[name='city']").select("All").should('be.visible');
  cy.wait(2000);
  cy.get("input[placeholder='Enter Address Landmark']").type("xxxx Bank").should('be.visible');
  cy.wait(2000);
  cy.get("#pinId").type("845438");
  cy.wait(2000);
  cy.get('#bloodGroup').select("A-");
  cy.wait(2000);
  cy.get('#emer_contactNO').type(8956748596);
  cy.wait(2000);
  cy.get("#mobileTypeId").select("MO",{force : true});
  cy.wait(2000);
  // cy.get("input[placeholder='code']").type("3223").should('be.visible');
  // cy.wait(2000);
  
  function generateRandomMobileNumber() {
    const prefix = '07'; // Assuming you want the number to start with '07'
    const randomNumber = Math.floor(Math.random() * 200000000); // Generates an 8-digit number
    const paddedNumber = String(randomNumber).padStart(8, '0'); // Pads with leading zeros if necessary
    return prefix + paddedNumber;
  }
  // Cypress test code
  cy.get('input[name="primaryMobileNumber"]').type(generateRandomMobileNumber());
  cy.wait(500);
 
  function generateRandomEmail() {
    const randomString = Math.random().toString(36).substring(2, 11); // Generates a random string
    return `user_${randomString}@yopmail.com`; // Concatenate to form an email address
  }

  // Cypress test code
  cy.get("#emailId").type(generateRandomEmail());
  cy.wait(500);
  cy.get("#dobId").type("11-06-2006");
  cy.wait(2000);
  cy.get("#fatherNameId").type("Kumar", {force: true});
  cy.wait(2000);
  cy.get(":nth-child(5) > .nav-link > span").click().should('be.visible');
  cy.wait(2000);
  cy.get(this.locators.cust_name).type("Pranshu raj").should('be.visible');
  cy.wait(2000);
  cy.get("input[placeholder='Enter Account Number']").type("456785678776543").should('be.visible');
  cy.wait(2000);
  cy.get("select[name='bankName']").select("BANK OF INDIA").should('be.visible');
  cy.wait(2000);
  cy.get("select[name='bankBranchId']").select("BANO").should('be.visible');
  cy.wait(2000);
  // cy.get(this.locators.ScopeOfWork).click().should('be.visible');
  // cy.wait(2000);
  // cy.get("#productGroup-0").select("All");
  // cy.wait(2000);
  // cy.get("#product-0").select("All");
  // cy.wait(2000);
  // cy.get("#subProduct-0").select("All").should('be.visible');
  // cy.wait(2000);
  // cy.get("#bucket-0").select("All").should('be.visible');
  // cy.wait(2000);
  // cy.get("#country-0").select("All").should('be.visible');
  // cy.wait(2000);
  // cy.get("#country-0").select("All").should('be.visible');
  // cy.wait(2000);
  // cy.get("#region-0").select("All").should('be.visible');
  // cy.wait(2000);
  // cy.get("#state-0").select("All").should('be.visible');
  // cy.wait(2000);
  // cy.get("#city-0").select("All").should('be.visible');
  // cy.wait(2000);
  // cy.get(":nth-child(7) > .nav-link > span").click().should('be.visible');
  // cy.wait(2000);
  // cy.get("#areaPin").type("845438").should('be.visible');
  // cy.wait(2000);
  // cy.get(':nth-child(7) > .nav-link > span').click().should('be.visible');
  // cy.wait(2000);
  // cy.get("#maxAccounts").type("2").should('be.visible');
  // cy.wait(2000);
  // cy.get(':nth-child(8) > .nav-link > span').click().should('be.visible');
  // cy.wait(2000);
  // cy.get("input[name='experiance']").type("2").should('be.visible');
  // cy.wait(2000);
  // cy.get("select[name='cutomerPersona']").select("Self-cure customer").should('be.visible');
  // cy.wait(2000);
  // cy.get('#lanKnown').select("Hindi").should('be.visible');
  // cy.wait(2000);
  // cy.get('#perBand').select("LH").should('be.visible');
  // cy.wait(2000);


  cy.get(':nth-child(7) > .nav-link > span').click().should('be.visible');

  cy.wait(2000);
  cy.get("#docTypeSelect-0").select("Pan Card").should('be.visible');
  cy.wait(2000);
  cy.get('#addFileBtn-0').click();
  cy.get('input[type="file"]').eq(1).selectFile(filePath, { force: true });
  cy.wait(2000);
 
  cy.get('#docTypeSelect-1').select("Aadhar Card").should('be.visible');
  cy.wait(2000);
  cy.get('#addFileBtn-1').click();
  cy.get('input[type="file"]').eq(2).selectFile(filePath, { force: true });
  cy.wait(2000);

  cy.get("#docTypeSelect-2").select("Agency ID Card").should('be.visible');
  cy.wait(2000)
  cy.get('input[type="file"]').eq(3).selectFile(filePath, { force: true });
  cy.wait(2000);

  cy.get("#docTypeSelect-3").select("HOC Approval").should('be.visible');
    cy.wait(2000)
    cy.get('input[type="file"]').eq(4).selectFile(filePath, { force: true });
    cy.wait(2000);


   cy.get(':nth-child(8) > .nav-link > span').click().should('be.visible');
   cy.wait(2000);

  //  cy.get('#CollectionDate').click().should('be.visible');
  //  cy.wait(2000)
  // //choose previous month
  //  cy.get("button[class='current ng-star-inserted'] span").click()
  //  cy.wait(2000)
  // //choose next month 
  //   cy.get("tbody > :nth-child(1) > :nth-child(1) > span").click()
  //   cy.wait(2000);
  //   cy.get('.bs-datepicker-container').contains('8').click()
    
    cy.wait(2000);
  //choose date 2

  cy.get("#CollectionDate").type("25/06/2003").should('be.visible');
  cy.wait(2000);
  cy.get("#RenewalDate").type("15-07-2024").should('be.visible');
  cy.wait(2000);
  cy.get("#ExpiryDate").type("15-07-2026").should('be.visible');
  cy.wait(2000);
  cy.get("#remarks").type("aaaaaa bbbbbbbbb cccccccccc dddddddddd 123",{force:true}).should('be.visible');
  cy.wait(2000);
  cy.get('#btn-submit').click();
  cy.wait(500);
  cy.contains("Agent Profile has been Submitted for Approval.").should("be.visible");
  

}

AgentEnpalmentRequest641(){
  const filePath = 'Cypress/fixtures/Aadhar.png'

  cy.wait(2000);
  cy.get(this.locators.usermngt).click().should('be.visible');
  cy.wait(2000);
  cy.get(this.locators.AgentEntReqst).click();
  cy.wait(2000);
  cy.get(this.locators.AddAgent).click();
  cy.wait(2000);

   cy.get(this.locators.SelectUsertype).select("Others");
    cy.wait(1000);


  cy.get(this.locators.FirstName).type("Pranshu").should('be.visible');
  cy.wait(2000);
  cy.get(this.locators.LastName).type("Raj").should('be.visible');
  cy.wait(2000);
  cy.get(this.locators.Agencyname).select("Arun").should('be.visible');
  cy.wait(2000);
  // cy.get(this.locators.AgencySupervisorEmailId).type("pranshu@yopmail.com").should('be.visible');
  // cy.wait(2000);

   cy.get(this.locators.SelectAgencyReportManager).click(); 
cy.wait(2000);
cy.get('.ng-dropdown-panel .ng-option')        
  .then(options => {
    const randomIndex = Math.floor(Math.random() * options.length);
    cy.wrap(options[randomIndex]).click();   
  });
cy.wait(2000);

  cy.get(this.locators.dilarID).type("123").should('be.visible');
  cy.wait(2000);
  cy.get(this.locators.DRACertificateDate).type("16-05-2024").should('be.visible');
  cy.wait(2000);
  cy.get(this.locators.dratrainingdate).type("16-07-2024").should('be.visible');
  cy.wait(2000);
  cy.get(this.locators.DRANumber).type("1234567").should('be.visible');
  cy.wait(2000);
  cy.get(this.locators.Idtype).select("Pan card").should('be.visible');
  cy.wait(2000)
  cy.get(this.locators.UDIDNumberr).type("12345678909876543").should('be.visible');
  cy.wait(2000);

   const encode = faker.number.int({ min: 10000, max: 99999 }).toString();
       cy.get('#agentCode').type(encode);
      cy.wait(2000);

  const filePath1 = 'Aadhar.png'
    cy.get('.upload-text').click();
    cy.wait(500);
    cy.get('input[type="file"]').attachFile(filePath1);
    cy.wait(500);


  cy.wait(2000);
  cy.get(':nth-child(2) > .nav-link > span').click();
  cy.wait(2000);
  cy.get(this.locators.Add).click();
  cy.wait(2000);
  cy.get(this.locators.Department).select("Agency Backend");
  cy.wait(2000);
  cy.get(this.locators.designation).select("Agency Backend");
  cy.wait(2000);
  cy.get(':nth-child(4) > .nav-link > span').click().should('be.visible');
  cy.wait(2000);
  cy.get(this.locators.Address).type(" AAAAAAAAAAAAAAAA XXXXXXXXXXXXXXXXXX BBBBBBBBBBBBBB CCCCCCCCCCCCCCC");
  cy.wait(2000);
  cy.get('#stateId').select('All').should('be.visible');
  cy.wait(2000);
  cy.get("select[name='city']").select("All").should('be.visible');
  cy.wait(2000);
  cy.get("input[placeholder='Enter Address Landmark']").type("xxxx Bank").should('be.visible');
  cy.wait(2000);
  cy.get("#pinId").type("845438");
  cy.wait(2000);
  cy.get('#bloodGroup').select("A-");
  cy.wait(2000);
  cy.get('#emer_contactNO').type(8956748596);
  cy.wait(2000);
  cy.get("#mobileTypeId").select("MO",{force : true});
  cy.wait(2000);
  // cy.get("input[placeholder='code']").type("3223").should('be.visible');
  // cy.wait(2000);
  //cy.get("input[name='primaryMobileNumber']").type("352407");
  //cy.wait(2000);
  function generateRandomMobileNumber() {
    const prefix = '07'; // Assuming you want the number to start with '07'
    const randomNumber = Math.floor(Math.random() * 200000000); // Generates an 8-digit number
    const paddedNumber = String(randomNumber).padStart(8, '0'); // Pads with leading zeros if necessary
    return prefix + paddedNumber;
  }
  // Cypress test code
  cy.get('input[name="primaryMobileNumber"]').type(generateRandomMobileNumber());
  cy.wait(500);
  //cy.get("#emailId").type("pranshu@yopmail.com");
  //cy.wait(2000);
  function generateRandomEmail() {
    const randomString = Math.random().toString(36).substring(2, 11); // Generates a random string
    return `user_${randomString}@yopmail.com`; // Concatenate to form an email address
  }

  // Cypress test code
  cy.get("#emailId").type(generateRandomEmail());
  cy.wait(500);
  cy.get("#dobId").type("11-06-2006");
  cy.wait(2000);
  cy.get("#fatherNameId").type("Kumar", {force: true});
  cy.wait(2000);
  cy.get(":nth-child(5) > .nav-link > span").click().should('be.visible');
  cy.wait(2000);
  cy.get(this.locators.cust_name).type("Pranshu raj").should('be.visible');
  cy.wait(2000);
  cy.get("input[placeholder='Enter Account Number']").type("456785678776543").should('be.visible');
  cy.wait(2000);
  cy.get("select[name='bankName']").select("BANK OF INDIA").should('be.visible');
  cy.wait(2000);
  cy.get("select[name='bankBranchId']").select("BANO").should('be.visible');
  cy.wait(2000);
  // cy.get(this.locators.ScopeOfWork).click().should('be.visible');
  // cy.wait(2000);
  // cy.get("#productGroup-0").select("All");
  // cy.wait(2000);
  // cy.get("#product-0").select("All");
  // cy.wait(2000);
  // cy.get("#subProduct-0").select("All").should('be.visible');
  // cy.wait(2000);
  // cy.get("#bucket-0").select("All").should('be.visible');
  // cy.wait(2000);
  // cy.get("#country-0").select("All").should('be.visible');
  // cy.wait(2000);
  // cy.get("#country-0").select("All").should('be.visible');
  // cy.wait(2000);
  // cy.get("#region-0").select("All").should('be.visible');
  // cy.wait(2000);
  // cy.get("#state-0").select("All").should('be.visible');
  // cy.wait(2000);
  // cy.get("#city-0").select("All").should('be.visible');
  // cy.wait(2000);
  // cy.get(":nth-child(7) > .nav-link > span").click().should('be.visible');
  // cy.wait(2000);
  // cy.get("#areaPin").type("845438").should('be.visible');
  // cy.wait(2000);
  // cy.get(':nth-child(7) > .nav-link > span').click().should('be.visible');
  // cy.wait(2000);
  // cy.get("#maxAccounts").type("2").should('be.visible');
  // cy.wait(2000);
  // cy.get(':nth-child(8) > .nav-link > span').click().should('be.visible');
  // cy.wait(2000);
  // cy.get("input[name='experiance']").type("2").should('be.visible');
  // cy.wait(2000);
  // cy.get("select[name='cutomerPersona']").select("Self-cure customer").should('be.visible');
  // cy.wait(2000);
  // cy.get('#lanKnown').select("Hindi").should('be.visible');
  // cy.wait(2000);
  // cy.get('#perBand').select("LH").should('be.visible');
  // cy.wait(2000);
  cy.get(':nth-child(7) > .nav-link > span').click().should('be.visible');

  cy.wait(2000);
  cy.get("#docTypeSelect-0").select("Pan Card").should('be.visible');
  cy.wait(2000);
  cy.get('#addFileBtn-0').click();
  cy.get('input[type="file"]').eq(1).selectFile(filePath, { force: true });
  cy.wait(2000);
 
  cy.get('#docTypeSelect-1').select("Aadhar Card").should('be.visible');
  cy.wait(2000);
  cy.get('#addFileBtn-1').click();
  cy.get('input[type="file"]').eq(2).selectFile(filePath, { force: true });
  cy.wait(2000);

  cy.get("#docTypeSelect-2").select("Agency ID Card").should('be.visible');
  cy.wait(2000)
  cy.get('input[type="file"]').eq(3).selectFile(filePath, { force: true });
  cy.wait(2000);


   cy.get(':nth-child(8) > .nav-link > span').click().should('be.visible');
   cy.wait(2000);

  //  cy.get('#CollectionDate').click().should('be.visible');
  //  cy.wait(2000)
  // //choose previous month
  //  cy.get("button[class='current ng-star-inserted'] span").click()
  //  cy.wait(2000)
  // //choose next month 
  //   cy.get("tbody > :nth-child(1) > :nth-child(1) > span").click()
  //   cy.wait(2000);
  //   cy.get('.bs-datepicker-container').contains('8').click()
    
  //   cy.wait(2000);
  //choose date 2

  cy.get("#CollectionDate").type("25/06/2003").should('be.visible');
  cy.wait(2000);
  cy.get("#RenewalDate").type("15-07-2024").should('be.visible');
  cy.wait(2000);
  cy.get("#ExpiryDate").type("15-07-2026").should('be.visible');
  cy.wait(2000);
  cy.get("#remarks").type("aaaaaa bbbbbbbbb cccccccccc dddddddddd 123",{force:true}).should('be.visible');
  cy.wait(2000);
  cy.get('#btn-cancel').click();
  cy.wait(300);
}








}

export default AgentEmpanelmentRequestPage;
