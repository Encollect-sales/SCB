import 'cypress-file-upload';

class PaymentsPage {
  constructor(locators) {
    this.locators = locators;
  }

  
  TC_Pay_01(){
    cy.get('[title="Payments"]').click({force:true});
    cy.wait(1000);
    cy.get(this.locators.receipts).click({force:true});
    cy.wait(1000);
    cy.get(this.locators.walkin_cust).click({force:true});
    cy.wait(1000);
    const randomNumber = Math.floor(1000 + Math.random() * 90000); 
    cy.get(this.locators.Physical_Receipt_No).clear().type(randomNumber.toString(), { force: true });
    cy.wait(1000);
    cy.get(this.locators.Collector_ID).type('6', { force: true });
    cy.get('[id^="ngb-typeahead"] .ng-star-inserted').should('be.visible');
    cy.get('[id^="ngb-typeahead"] .ng-star-inserted').first().click({ force: true });

    cy.wait(1000);
    cy.get(this.locators.Relationship_With_Customer).select("Others");
    cy.wait(1000);
    cy.get(this.locators.Mode_Of_Payment).select("CASH");
    cy.wait(1000);
    const fields = [
  this.locators.field1,
  this.locators.field2,
  this.locators.field3,
  this.locators.field4,
  this.locators.field5,
  this.locators.field6
];

fields.forEach(selector => {
  const randomTwoDigit = Math.floor(10 + Math.random() * 90); // 10–99
  cy.get(selector).clear().type(randomTwoDigit.toString(), { force: true });
});

cy.get(this.locators.Customer_Account_Number).type('1667', { force: true });
cy.wait(1000);
cy.get('.btn-secondary').click();
cy.wait(2000);
cy.get(this.locators.button).click();
cy.wait(1000);
cy.get(this.locators.confirm).click();




  }
TC_Pay_02(){
    cy.get('[title="Payments"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.receipts).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.walkin_cust).click({force:true});
    cy.wait(2000);
    const randomNumber = Math.floor(1000 + Math.random() * 90000); 
    cy.get(this.locators.Physical_Receipt_No).clear().type(randomNumber.toString(), { force: true });
    cy.wait(2000);
    cy.get(this.locators.Collector_ID).type('System', { force: true });
    cy.get('[id^="ngb-typeahead"] .ng-star-inserted').should('be.visible');
    cy.get('[id^="ngb-typeahead"] .ng-star-inserted').first().click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Relationship_With_Customer).select("Others");
    cy.wait(2000);
    cy.get(this.locators.Mode_Of_Payment).select("CASH");
    cy.wait(2000);
    cy.get(this.locators.field1).type('10');
    cy.wait(2000);
cy.get(this.locators.Customer_Account_Number).type('LXBNG28019200749726 ', { force: true });
cy.wait(2000);
const filePath = 'payinslip.jpg'; 
cy.get(this.locators.fileuploadone).attachFile(filePath);
cy.wait(1000);
// cy.get(this.locators.fileuploadtwo).attachFile(filePath);
// cy.wait(1000);
cy.get(this.locators.button).click();
cy.wait(1000);
cy.get(this.locators.confirm).click();


  }
TC_Pay_03(){
    cy.get('[title="Payments"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.receipts).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.walkin_cust).click({force:true});
    cy.wait(2000);
    const randomNumber = Math.floor(1000 + Math.random() * 90000); 
    cy.get(this.locators.Physical_Receipt_No).clear().type(randomNumber.toString(), { force: true });
    cy.wait(2000);
    cy.get(this.locators.Collector_ID).type('System', { force: true });
    cy.get('[id^="ngb-typeahead"] .ng-star-inserted').should('be.visible');
    cy.get('[id^="ngb-typeahead"] .ng-star-inserted').first().click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Relationship_With_Customer).select("Others");
    cy.wait(2000);
    cy.get(this.locators.Mode_Of_Payment).select("CASH");
    cy.wait(2000);
    cy.get(this.locators.field1).type('10');
    cy.wait(2000);
    cy.get(this.locators.Customer_Account_Number).type('LXBNG28019200749726 ', { force: true });
    cy.wait(2000);
    const filePath = '5mb.jpg'; 
    cy.get(this.locators.fileuploadone).attachFile(filePath);
    cy.wait(2000);
// cy.get(this.locators.fileuploadtwo).attachFile(filePath);
// cy.wait(1000);
    cy.contains("The file you've chosen is too large (max 2MB). Please try aga").should('be.visible');


  }
TC_Pay_04(){
    cy.get('[title="Payments"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.receipts).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.walkin_cust).click({force:true});
    cy.wait(2000);
    const randomNumber = Math.floor(1000 + Math.random() * 90000); 
    cy.get(this.locators.Physical_Receipt_No).clear().type(randomNumber.toString(), { force: true });
    cy.wait(2000);
    cy.get(this.locators.Collector_ID).type('System', { force: true });
    cy.get('[id^="ngb-typeahead"] .ng-star-inserted').should('be.visible');
    cy.get('[id^="ngb-typeahead"] .ng-star-inserted').first().click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Relationship_With_Customer).select("Others");
    cy.wait(2000);
    cy.get(this.locators.Mode_Of_Payment).select("CASH");
    cy.wait(2000);
    cy.get(this.locators.field1).type('10');
    cy.wait(2000);
    cy.get(this.locators.Customer_Account_Number).type('LXBNG28019200749726 ', { force: true });
    cy.wait(2000);
    const filePath = 'AllocationToOwner.docx'; 
    cy.get(this.locators.fileuploadone).attachFile(filePath);
    cy.wait(2000);
    cy.get(this.locators.button).click();
    cy.wait(1000);
    cy.get(this.locators.confirm).click();

  }

TC_Pay_05(){
    cy.get('[title="Payments"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.receipts).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.walkin_cust).click({force:true});
    cy.wait(2000);
    const randomNumber = Math.floor(1000 + Math.random() * 90000); 
    cy.get(this.locators.Physical_Receipt_No).clear().type(randomNumber.toString(), { force: true });
    cy.wait(2000);
    cy.get(this.locators.Collector_ID).type('System', { force: true });
    cy.get('[id^="ngb-typeahead"] .ng-star-inserted').should('be.visible');
    cy.get('[id^="ngb-typeahead"] .ng-star-inserted').first().click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Relationship_With_Customer).select("Others");
    cy.wait(2000);
    cy.get(this.locators.Mode_Of_Payment).select("CASH");
    cy.wait(2000);
    cy.get(this.locators.field1).type('10');
    cy.wait(2000);
    cy.get(this.locators.Customer_Account_Number).type('LXBNG28019200749726 ', { force: true });
    cy.wait(2000);
    const filePath = 'Aadhar.png'; 
    cy.get(this.locators.fileuploadone).attachFile(filePath);
    cy.wait(2000);
    cy.get(this.locators.button).click();
    cy.wait(2000);
    cy.get(this.locators.confirm).click();
    cy.wait(2000);
    cy.contains("Success!").should('be.visible');
  }

TC_Pay_06(){
    cy.get('[title="Payments"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.receipts).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.walkin_cust).click({force:true});
    cy.wait(2000);
    const randomNumber = Math.floor(1000 + Math.random() * 90000); 
    cy.get(this.locators.Physical_Receipt_No).clear().type(randomNumber.toString(), { force: true });
    cy.wait(2000);
    cy.get(this.locators.Collector_ID).type('System', { force: true });
    cy.get('[id^="ngb-typeahead"] .ng-star-inserted').should('be.visible');
    cy.get('[id^="ngb-typeahead"] .ng-star-inserted').first().click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Relationship_With_Customer).select("Others");
    cy.wait(2000);
    cy.get(this.locators.Mode_Of_Payment).select("CASH");
    cy.wait(2000);
    cy.get(this.locators.field1).type('10');
    cy.wait(2000);
    cy.get(this.locators.Customer_Account_Number).type('LXBNG28019200749726 ', { force: true });
    cy.wait(2000);
    const filePath = 'Aadhar.png'; 
    cy.get(this.locators.fileuploadone).attachFile(filePath);
    cy.wait(2000);
    const filePathtwo = 'payinslip.png'; 
    cy.get(this.locators.fileuploadone).attachFile(filePathtwo);
    cy.wait(2000);
    cy.get(this.locators.button).click();
    cy.wait(2000);
    cy.get(this.locators.confirm).click();
    cy.wait(2000);
    //cy.contains("Success!").should('be.visible');
  }
  


  TC_Pay_07(){
    cy.get('[title="Payments"]').click({force:true});
    cy.wait(1000);
    cy.get("#nav-item-2-deposit-slip").click({force:true});
    cy.wait(1000);
    cy.get("#nav-item-3-create-deposit-slip").click({force:true});
    cy.wait(1000);
    cy.get(this.locators.Product_Group).select("All");
    cy.wait(1000);
    const randomFourDigit = Math.floor(1000 + Math.random() * 9000); 
    cy.get(this.locators.CMS_PayIn_Slip_id).type(randomFourDigit.toString());
    cy.wait(1000);
    cy.get(":nth-child(3) > .form-control-group > .form-select")
  .scrollIntoView()
  .select("CASH", { force: true });
    cy.wait(1000);
    cy.get(this.locators.Deposit_account_number)
  .find('option')
  .then($options => {

    const randomIndex = Math.floor(Math.random() * ($options.length - 1)) + 1; // skips first option

    const randomValue = $options[randomIndex].value;

    cy.get(this.locators.Deposit_account_number)
      .select(randomValue);

  });
    cy.wait(1000);
   // Account Holder Name
cy.get(this.locators.Account_holder_name)
  .find('option')
  .then($options => {
    const randomIndex = Math.floor(Math.random() * ($options.length - 1)) + 1;
    cy.get(this.locators.Account_holder_name)
      .select($options[randomIndex].value);
  });

cy.wait(1000);

// Deposit Bank Name
cy.get(this.locators.Deposit_bank_name)
  .find('option')
  .then($options => {
    const randomIndex = Math.floor(Math.random() * ($options.length - 1)) + 1;
    cy.get(this.locators.Deposit_bank_name)
      .select($options[randomIndex].value);
  });

cy.wait(1000);

// Deposit Branch
cy.get(this.locators.Deposit_branch)
  .find('option')
  .then($options => {
    const randomIndex = Math.floor(Math.random() * ($options.length - 1)) + 1;
    cy.get(this.locators.Deposit_branch)
      .select($options[randomIndex].value);
  });

cy.wait(1000);
cy.get(this.locators.Date_of_deposit)
  .click({ force: true });

cy.get('.bs-datepicker-body')
  .should('be.visible');

cy.get('.bs-datepicker-body td span')
  .not('.is-other-month')
  .first()
  .click({ force: true });

cy.wait(1000);    
cy.get('.ng-select-container').click({ force: true });
cy.wait(2000);
cy.get('.ng-input > input').click({force:true});
cy.wait(2000);  
cy.get('.ng-dropdown-panel-items .ng-option-label')
  .should('be.visible')
  .then($options => {
    const count = $options.length;
    const randomIndex = Math.floor(Math.random() * count);
    cy.wrap($options[randomIndex]).click({ force: true });
  });

    cy.wait(1000);
    cy.get(this.locators.submit_button).click();
    cy.wait(1000);
    cy.contains('Upload PayIn Slip').should('be.visible');
    cy.wait(1000);
    cy.get(this.locators.fileupload).should('be.visible').and('not.be.disabled');
    const fileName = "payinslip.jpg";
    cy.get(this.locators.fileupload).attachFile(fileName);
    cy.wait(1000);
    cy.get(this.locators.generate).click();


  }

    TC_Pay_010(){
    cy.get('[title="Payments"]').click({force:true});
    cy.wait(1000);
    cy.get("#nav-item-2-deposit-slip").click({force:true});
    cy.wait(1000);
    cy.get("#nav-item-3-create-deposit-slip").click({force:true});
    cy.wait(1000);
    cy.get(this.locators.Product_Group).select("All");
    cy.wait(1000);
    const randomFourDigit = Math.floor(1000 + Math.random() * 9000); 
    cy.get(this.locators.CMS_PayIn_Slip_id).type(randomFourDigit.toString());
    cy.wait(1000);
cy.get(":nth-child(3) > .form-control-group > .form-select")
  .scrollIntoView()
  .select("CASH", { force: true });
    cy.wait(1000);
 // Select random Deposit Account Number
cy.get(this.locators.Deposit_account_number)
  .find('option')
  .then($options => {
    const randomIndex = Math.floor(Math.random() * ($options.length - 1)) + 1;
    cy.get(this.locators.Deposit_account_number)
      .select($options[randomIndex].value);
  });

cy.wait(1000);

// Select random Account Holder Name
cy.get(this.locators.Account_holder_name)
  .find('option')
  .then($options => {
    const randomIndex = Math.floor(Math.random() * ($options.length - 1)) + 1;
    cy.get(this.locators.Account_holder_name)
      .select($options[randomIndex].value);
  });

cy.wait(1000);

// Select random Deposit Bank Name
cy.get(this.locators.Deposit_bank_name)
  .find('option')
  .then($options => {
    const randomIndex = Math.floor(Math.random() * ($options.length - 1)) + 1;
    cy.get(this.locators.Deposit_bank_name)
      .select($options[randomIndex].value);
  });

cy.wait(1000);

// Select random Deposit Branch
cy.get(this.locators.Deposit_branch)
  .find('option')
  .then($options => {
    const randomIndex = Math.floor(Math.random() * ($options.length - 1)) + 1;
    cy.get(this.locators.Deposit_branch)
      .select($options[randomIndex].value);
  });

cy.wait(1000);

// Current date in DD-MMM-YY format (e.g. 16-Jun-26)
const today = new Date();

const day = String(today.getDate()).padStart(2, '0');

const months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

const month = months[today.getMonth()];
const year = String(today.getFullYear()).slice(-2);

const formattedDate = `${day}-${month}-${year}`;

cy.get(this.locators.Date_of_deposit)
  .invoke('removeAttr', 'readonly')
  .clear()
  .type(formattedDate, { force: true });

cy.wait(1000);

// Open Batch ID dropdown
cy.get('.ng-select-container').click({ force: true });

// Select random Batch ID
cy.get('.ng-dropdown-panel-items .ng-option-label')
  .should('be.visible')
  .then($options => {
    const count = $options.length;
    const randomIndex = Math.floor(Math.random() * count);

    cy.wrap($options[randomIndex]).click({ force: true });
  });

cy.wait(1000);
    cy.wait(1000);
    cy.get(this.locators.submit_button).click();
    cy.wait(1000);
    const fileName = "3mb.jpg";
    cy.get(this.locators.fileupload).attachFile(fileName);
    //cy.wait(6000);
    //cy.get(".col-12 > .btn-secondary").click();
    //cy.wait(500);
    cy.contains("Error").should('be.visible');

    }

        TC_Pay_08(){
    cy.get('[title="Payments"]').click({force:true});
    cy.wait(1000);
    cy.get("#nav-item-2-deposit-slip").click({force:true});
    cy.wait(1000);
    cy.get("#nav-item-3-create-deposit-slip").click({force:true});
    cy.wait(1000);
    cy.get(this.locators.Product_Group).select("All");
    cy.wait(1000);
    const randomFourDigit = Math.floor(1000 + Math.random() * 9000); 
    cy.get(this.locators.CMS_PayIn_Slip_id).type(randomFourDigit.toString());
    cy.wait(1000);
cy.get(":nth-child(3) > .form-control-group > .form-select")
  .scrollIntoView()
  .select("CASH", { force: true });
   cy.get(this.locators.Deposit_account_number)
  .find('option')
  .then($options => {
    const randomIndex = Math.floor(Math.random() * ($options.length - 1)) + 1;
    cy.get(this.locators.Deposit_account_number)
      .select($options[randomIndex].value);
  });

cy.wait(1000);

// Select random Account Holder Name
cy.get(this.locators.Account_holder_name)
  .find('option')
  .then($options => {
    const randomIndex = Math.floor(Math.random() * ($options.length - 1)) + 1;
    cy.get(this.locators.Account_holder_name)
      .select($options[randomIndex].value);
  });

cy.wait(1000);

// Select random Deposit Bank Name
cy.get(this.locators.Deposit_bank_name)
  .find('option')
  .then($options => {
    const randomIndex = Math.floor(Math.random() * ($options.length - 1)) + 1;
    cy.get(this.locators.Deposit_bank_name)
      .select($options[randomIndex].value);
  });

cy.wait(1000);

// Select random Deposit Branch
cy.get(this.locators.Deposit_branch)
  .find('option')
  .then($options => {
    const randomIndex = Math.floor(Math.random() * ($options.length - 1)) + 1;
    cy.get(this.locators.Deposit_branch)
      .select($options[randomIndex].value);
  });

cy.wait(1000);

// Current date in DD-MMM-YY format (e.g. 16-Jun-26)
const today = new Date();

const day = String(today.getDate()).padStart(2, '0');

const months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

const month = months[today.getMonth()];
const year = String(today.getFullYear()).slice(-2);

const formattedDate = `${day}-${month}-${year}`;

cy.get(this.locators.Date_of_deposit)
  .invoke('removeAttr', 'readonly')
  .clear()
  .type(formattedDate, { force: true });

cy.wait(1000);

// Open Batch ID dropdown
cy.get('.ng-select-container').click({ force: true });

// Select random Batch ID
cy.get('.ng-dropdown-panel-items .ng-option-label')
  .should('be.visible')
  .then($options => {
    const count = $options.length;
    const randomIndex = Math.floor(Math.random() * count);

    cy.wrap($options[randomIndex]).click({ force: true });
  });
    cy.wait(1000);
    cy.get(this.locators.submit_button).click();
    cy.wait(1000);
    const fileName = "report.png";
    cy.get(this.locators.fileupload).attachFile(fileName);
    //cy.wait(6000);
    cy.get(".col-12 > .btn-secondary").click();
    cy.wait(500);
    cy.contains("Success!").should('be.visible');

    }

     TC_Pay_09(){
    cy.get('[title="Payments"]').click({force:true});
    cy.wait(1000);
   cy.get("#nav-item-2-deposit-slip").click({force:true});
    cy.wait(1000);
    cy.get("#nav-item-3-create-deposit-slip").click({force:true});
    cy.wait(1000);
    cy.get(this.locators.Product_Group).select("All");
    cy.wait(1000);
    const randomFourDigit = Math.floor(1000 + Math.random() * 9000); 
    cy.get(this.locators.CMS_PayIn_Slip_id).type(randomFourDigit.toString());
    cy.wait(1000);
cy.get(":nth-child(3) > .form-control-group > .form-select")
  .scrollIntoView()
  .select("CASH", { force: true });
    cy.wait(1000);
    cy.get(this.locators.Deposit_account_number).select("324550");
    cy.wait(1000);
    cy.get(this.locators.Account_holder_name).select("My Bank");
    cy.wait(1000);
    cy.get(this.locators.Deposit_bank_name).select("Mpesa Paybill Number");
    cy.wait(1000);
    cy.get(this.locators.Deposit_branch).select("Across the globe");
    cy.wait(1000);
    const today = new Date();
const day = String(today.getDate()).padStart(2, '0');
const month = String(today.getMonth() + 1).padStart(2, '0');
const year = today.getFullYear();

const formattedDate = `${day}/${month}/${year}`;

cy.get(this.locators.Date_of_deposit).clear().type(formattedDate);

    cy.wait(1000);    
   cy.get('.ng-select-container').click({ force: true });


cy.get('.ng-input > input')
  .clear()
  .type("31", { force: true });


cy.get('.ng-dropdown-panel-items .ng-option-label')
  .should('be.visible')
  .then($options => {
    const count = $options.length;

  
    const randomIndex = Math.floor(Math.random() * count);


    cy.wrap($options[randomIndex]).click({ force: true });
  });
    cy.wait(1000);
    cy.get(this.locators.submit_button).click();
    cy.wait(1000);
    const fileName = "Aadhar.png";
    cy.get(this.locators.fileupload).attachFile(fileName);
 
    cy.wait(1000);
    cy.get(this.locators.generate).click();

  }
 TC_Pay_011() {

  cy.get('[title="Payments"]').click({ force: true });
  cy.wait(1000);

  cy.get("#nav-item-2-deposit-slip").click({ force: true });
  cy.wait(1000);

  cy.get("#nav-item-3-create-deposit-slip").click({ force: true });
  cy.wait(1000);

  cy.get(this.locators.Product_Group).select("All");
  cy.wait(1000);

  // Generate random 4-digit Pay-In Slip ID
  const randomFourDigit = Math.floor(1000 + Math.random() * 9000);
  cy.get(this.locators.CMS_PayIn_Slip_id).type(randomFourDigit.toString());

  cy.wait(1000);

  cy.get(":nth-child(3) > .form-control-group > .form-select")
    .scrollIntoView()
    .select("CASH", { force: true });

  cy.wait(1000);

  // Select random Deposit Account Number
  cy.get(this.locators.Deposit_account_number)
    .find('option')
    .then(options => {
      const randomOption = options[Math.floor(Math.random() * (options.length - 1)) + 1];
      cy.get(this.locators.Deposit_account_number).select(randomOption.value);
    });

  cy.wait(1000);

  // Select random Account Holder Name
  cy.get(this.locators.Account_holder_name)
    .find('option')
    .then(options => {
      const randomOption = options[Math.floor(Math.random() * (options.length - 1)) + 1];
      cy.get(this.locators.Account_holder_name).select(randomOption.value);
    });

  cy.wait(1000);

  // Select random Deposit Bank Name
  cy.get(this.locators.Deposit_bank_name)
    .find('option')
    .then(options => {
      const randomOption = options[Math.floor(Math.random() * (options.length - 1)) + 1];
      cy.get(this.locators.Deposit_bank_name).select(randomOption.value);
    });

  cy.wait(1000);

  // Select random Deposit Branch
  cy.get(this.locators.Deposit_branch)
    .find('option')
    .then(options => {
      const randomOption = options[Math.floor(Math.random() * (options.length - 1)) + 1];
      cy.get(this.locators.Deposit_branch).select(randomOption.value);
    });

  cy.wait(1000);

  // Enter current date in DD-MMM-YY format (e.g. 16-Jun-26)
  const today = new Date();

  const day = String(today.getDate()).padStart(2, '0');

  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const month = months[today.getMonth()];
  const year = String(today.getFullYear()).slice(-2);

  const formattedDate = `${day}-${month}-${year}`;

  cy.log(`Date Entered: ${formattedDate}`);

  cy.get(this.locators.Date_of_deposit)
    .invoke('removeAttr', 'readonly')
    .clear()
    .type(formattedDate, { force: true });

  cy.wait(1000);

  // Open Batch ID dropdown
  cy.get('.ng-select-container').click({ force: true });

  // Select random Batch ID
  cy.get('.ng-dropdown-panel-items .ng-option')
    .should('have.length.greaterThan', 0)
    .then($options => {
      const randomIndex = Math.floor(Math.random() * $options.length);

      cy.wrap($options[randomIndex])
        .scrollIntoView()
        .click({ force: true });
    });

  cy.wait(1000);

  // Submit
  cy.get(this.locators.submit_button)
    .should('be.visible')
    .click({ force: true });

  cy.wait(1000);

  // Upload file
  const fileName = "payinslip.jpg";
  cy.get(this.locators.fileupload)
    .attachFile(fileName);

  cy.wait(5000);

  // Verify upload success button
  cy.get(".d-flex > .btn")
    .should('be.visible')
    .and('not.be.disabled');

  cy.wait(5000);

  // Generate
  cy.get(this.locators.generate)
    .should('be.visible')
    .click({ force: true });

}

   TC_Pay_012(){
    cy.get('[title="Payments"]').click({force:true});
    cy.wait(1000);
    cy.get("#nav-item-2-deposit-slip").click({force:true});
    cy.wait(1000);
    cy.get("#nav-item-3-create-deposit-slip").click({force:true});
    cy.wait(1000);
    cy.get(this.locators.Product_Group).select("All");
    cy.wait(1000);
    const randomFourDigit = Math.floor(1000 + Math.random() * 9000); 
    cy.get(this.locators.CMS_PayIn_Slip_id).type(randomFourDigit.toString());
    cy.wait(1000);
cy.get(":nth-child(3) > .form-control-group > .form-select")
  .scrollIntoView()
  .select("CASH", { force: true });
    cy.wait(1000);
   cy.get(this.locators.Deposit_account_number)
  .find('option')
  .then($options => {
    const randomIndex = Math.floor(Math.random() * ($options.length - 1)) + 1;
    cy.get(this.locators.Deposit_account_number)
      .select($options[randomIndex].value);
  });

cy.wait(1000);

// Select random Account Holder Name
cy.get(this.locators.Account_holder_name)
  .find('option')
  .then($options => {
    const randomIndex = Math.floor(Math.random() * ($options.length - 1)) + 1;
    cy.get(this.locators.Account_holder_name)
      .select($options[randomIndex].value);
  });

cy.wait(1000);

// Select random Deposit Bank Name
cy.get(this.locators.Deposit_bank_name)
  .find('option')
  .then($options => {
    const randomIndex = Math.floor(Math.random() * ($options.length - 1)) + 1;
    cy.get(this.locators.Deposit_bank_name)
      .select($options[randomIndex].value);
  });

cy.wait(1000);

// Select random Deposit Branch
cy.get(this.locators.Deposit_branch)
  .find('option')
  .then($options => {
    const randomIndex = Math.floor(Math.random() * ($options.length - 1)) + 1;
    cy.get(this.locators.Deposit_branch)
      .select($options[randomIndex].value);
  });

cy.wait(1000);

// Current date in DD-MMM-YY format (e.g. 16-Jun-26)
const today = new Date();

const day = String(today.getDate()).padStart(2, '0');

const months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

const month = months[today.getMonth()];
const year = String(today.getFullYear()).slice(-2);

const formattedDate = `${day}-${month}-${year}`;

cy.get(this.locators.Date_of_deposit)
  .invoke('removeAttr', 'readonly')
  .clear()
  .type(formattedDate, { force: true });

cy.wait(1000);

// Open Batch ID dropdown
cy.get('.ng-select-container').click({ force: true });

// Select random Batch ID
cy.get('.ng-dropdown-panel-items .ng-option-label')
  .should('be.visible')
  .then($options => {
    const count = $options.length;
    const randomIndex = Math.floor(Math.random() * count);

    cy.wrap($options[randomIndex]).click({ force: true });
  });

    cy.wait(1000);
    cy.get(this.locators.submit_button).click();
    cy.wait(1000);
    const fileName = "Aadhar.png";
    cy.get(this.locators.fileupload).attachFile(fileName);
    cy.wait(1000);
    cy.get(this.locators.generate).click();
    cy.wait(500);
    cy.contains("Success!").should('be.visible');
    cy.contains(/ENCollect generated PayIn Slip ID \d{4}/).should('be.visible');


  }


TC_Pay_013(){
    cy.get('[title="Payments"]').click({force:true});
    cy.wait(1000);
    cy.get("#nav-item-2-deposit-slip").click({force:true});
    cy.wait(1000);
    cy.get("#nav-item-3-create-deposit-slip").click({force:true});
    cy.wait(1000);
    cy.get(this.locators.Product_Group).select("All");
    cy.wait(1000);
    const randomFourDigit = Math.floor(1000 + Math.random() * 9000); 
    cy.get(this.locators.CMS_PayIn_Slip_id).type(randomFourDigit.toString());
    cy.wait(1000);
cy.get(":nth-child(3) > .form-control-group > .form-select")
  .scrollIntoView()
  .select("CASH", { force: true });
    cy.wait(1000);
   cy.get(this.locators.Deposit_account_number)
  .find('option')
  .then($options => {
    const randomIndex = Math.floor(Math.random() * ($options.length - 1)) + 1;
    cy.get(this.locators.Deposit_account_number)
      .select($options[randomIndex].value);
  });

cy.wait(1000);

// Select random Account Holder Name
cy.get(this.locators.Account_holder_name)
  .find('option')
  .then($options => {
    const randomIndex = Math.floor(Math.random() * ($options.length - 1)) + 1;
    cy.get(this.locators.Account_holder_name)
      .select($options[randomIndex].value);
  });

cy.wait(1000);

// Select random Deposit Bank Name
cy.get(this.locators.Deposit_bank_name)
  .find('option')
  .then($options => {
    const randomIndex = Math.floor(Math.random() * ($options.length - 1)) + 1;
    cy.get(this.locators.Deposit_bank_name)
      .select($options[randomIndex].value);
  });

cy.wait(1000);

// Select random Deposit Branch
cy.get(this.locators.Deposit_branch)
  .find('option')
  .then($options => {
    const randomIndex = Math.floor(Math.random() * ($options.length - 1)) + 1;
    cy.get(this.locators.Deposit_branch)
      .select($options[randomIndex].value);
  });

cy.wait(1000);

// Current date in DD-MMM-YY format (e.g. 16-Jun-26)
const today = new Date();

const day = String(today.getDate()).padStart(2, '0');

const months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

const month = months[today.getMonth()];
const year = String(today.getFullYear()).slice(-2);

const formattedDate = `${day}-${month}-${year}`;

cy.get(this.locators.Date_of_deposit)
  .invoke('removeAttr', 'readonly')
  .clear()
  .type(formattedDate, { force: true });

cy.wait(1000);

// Open Batch ID dropdown
cy.get('.ng-select-container').click({ force: true });

// Select random Batch ID
cy.get('.ng-dropdown-panel-items .ng-option-label')
  .should('be.visible')
  .then($options => {
    const count = $options.length;
    const randomIndex = Math.floor(Math.random() * count);

    cy.wrap($options[randomIndex]).click({ force: true });
  });

    cy.wait(1000);
    cy.get(this.locators.submit_button).click();
    cy.wait(1000);
    const fileName = "website.jpg";
    cy.get(this.locators.fileupload).attachFile(fileName);
    cy.wait(1000);
    cy.contains('Submit').should('be.visible').and('not.be.disabled');
    cy.wait(1000);
    cy.contains('Preview').should('be.visible').and('not.be.disabled');
    cy.wait(1000);
    cy.contains('Generate PayIn Slip').should('be.visible').and('not.be.disabled');
    cy.wait(1000);
    cy.get(this.locators.generate).click();
    




  }
  TC_Pay_014(){
    cy.get('[title="Payments"]').click({force:true});
    cy.wait(1000);
    cy.get("#nav-item-2-deposit-slip").click({force:true});
    cy.wait(1000);
    cy.get("#nav-item-3-create-deposit-slip").click({force:true});
    cy.wait(1000);
    cy.get(this.locators.Product_Group).select("All");
    cy.wait(1000);
    const randomFourDigit = Math.floor(1000 + Math.random() * 9000); 
    cy.get(this.locators.CMS_PayIn_Slip_id).type(randomFourDigit.toString());
    cy.wait(1000);
cy.get(":nth-child(3) > .form-control-group > .form-select")
  .scrollIntoView()
  .select("CASH", { force: true });
    cy.wait(1000);
    cy.get(this.locators.Deposit_account_number)
  .find('option')
  .then($options => {
    const randomIndex = Math.floor(Math.random() * ($options.length - 1)) + 1;
    cy.get(this.locators.Deposit_account_number)
      .select($options[randomIndex].value);
  });

cy.wait(1000);

// Select random Account Holder Name
cy.get(this.locators.Account_holder_name)
  .find('option')
  .then($options => {
    const randomIndex = Math.floor(Math.random() * ($options.length - 1)) + 1;
    cy.get(this.locators.Account_holder_name)
      .select($options[randomIndex].value);
  });

cy.wait(1000);

// Select random Deposit Bank Name
cy.get(this.locators.Deposit_bank_name)
  .find('option')
  .then($options => {
    const randomIndex = Math.floor(Math.random() * ($options.length - 1)) + 1;
    cy.get(this.locators.Deposit_bank_name)
      .select($options[randomIndex].value);
  });

cy.wait(1000);

// Select random Deposit Branch
cy.get(this.locators.Deposit_branch)
  .find('option')
  .then($options => {
    const randomIndex = Math.floor(Math.random() * ($options.length - 1)) + 1;
    cy.get(this.locators.Deposit_branch)
      .select($options[randomIndex].value);
  });

cy.wait(1000);

// Current date in DD-MMM-YY format (e.g. 16-Jun-26)
const today = new Date();

const day = String(today.getDate()).padStart(2, '0');

const months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

const month = months[today.getMonth()];
const year = String(today.getFullYear()).slice(-2);

const formattedDate = `${day}-${month}-${year}`;

cy.get(this.locators.Date_of_deposit)
  .invoke('removeAttr', 'readonly')
  .clear()
  .type(formattedDate, { force: true });

cy.wait(1000);

// Open Batch ID dropdown
cy.get('.ng-select-container').click({ force: true });

// Select random Batch ID
cy.get('.ng-dropdown-panel-items .ng-option-label')
  .should('be.visible')
  .then($options => {
    const count = $options.length;
    const randomIndex = Math.floor(Math.random() * count);

    cy.wrap($options[randomIndex]).click({ force: true });
  });

    cy.wait(1000);
    cy.get(this.locators.submit_button).click();
    cy.wait(1000);
    const fileName = "Staff.xlsx";
    cy.get(this.locators.fileupload).attachFile(fileName);
    cy.wait(1000);
    cy.get(this.locators.generate).click();
    cy.wait(1000);
    cy.contains("Warning!").should("be.visible");
    cy.contains("You can only upload files with extension jpeg, jpg and png").should("be.visible");


  }
   TC_Pay_015(){
    cy.get('[title="Payments"]').click({force:true});
    cy.wait(1000);
    cy.get("#nav-item-2-deposit-slip").click({force:true});
    cy.wait(1000);
    cy.get("#nav-item-3-create-deposit-slip").click({force:true});
    cy.wait(1000);
    cy.get(this.locators.Product_Group).select("All");
    cy.wait(1000);
    const randomFourDigit = Math.floor(1000 + Math.random() * 9000); 
    cy.get(this.locators.CMS_PayIn_Slip_id).type(randomFourDigit.toString());
    cy.wait(1000);
cy.get(":nth-child(3) > .form-control-group > .form-select")
  .scrollIntoView()
  .select("CASH", { force: true });
    cy.wait(1000);
    cy.get(this.locators.Deposit_account_number)
  .find('option')
  .then($options => {
    const randomIndex = Math.floor(Math.random() * ($options.length - 1)) + 1;
    cy.get(this.locators.Deposit_account_number)
      .select($options[randomIndex].value);
  });

cy.wait(1000);

// Select random Account Holder Name
cy.get(this.locators.Account_holder_name)
  .find('option')
  .then($options => {
    const randomIndex = Math.floor(Math.random() * ($options.length - 1)) + 1;
    cy.get(this.locators.Account_holder_name)
      .select($options[randomIndex].value);
  });

cy.wait(1000);

// Select random Deposit Bank Name
cy.get(this.locators.Deposit_bank_name)
  .find('option')
  .then($options => {
    const randomIndex = Math.floor(Math.random() * ($options.length - 1)) + 1;
    cy.get(this.locators.Deposit_bank_name)
      .select($options[randomIndex].value);
  });

cy.wait(1000);

// Select random Deposit Branch
cy.get(this.locators.Deposit_branch)
  .find('option')
  .then($options => {
    const randomIndex = Math.floor(Math.random() * ($options.length - 1)) + 1;
    cy.get(this.locators.Deposit_branch)
      .select($options[randomIndex].value);
  });

cy.wait(1000);

// Current date in DD-MMM-YY format (e.g. 16-Jun-26)
const today = new Date();

const day = String(today.getDate()).padStart(2, '0');

const months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

const month = months[today.getMonth()];
const year = String(today.getFullYear()).slice(-2);

const formattedDate = `${day}-${month}-${year}`;

cy.get(this.locators.Date_of_deposit)
  .invoke('removeAttr', 'readonly')
  .clear()
  .type(formattedDate, { force: true });

cy.wait(1000);

// Open Batch ID dropdown
cy.get('.ng-select-container').click({ force: true });

// Select random Batch ID
cy.get('.ng-dropdown-panel-items .ng-option-label')
  .should('be.visible')
  .then($options => {
    const count = $options.length;
    const randomIndex = Math.floor(Math.random() * count);

    cy.wrap($options[randomIndex]).click({ force: true });
  });
    cy.wait(1000);
    cy.get(this.locators.submit_button).click();
    cy.wait(1000);
    // const fileName = "Staff.xlsx";
    // cy.get(this.locators.fileupload).attachFile(fileName);
    // cy.wait(1000);
    cy.get(this.locators.generate).click({force:true});
    cy.wait(1000);
    // cy.contains("Warning!").should("be.visible");
    // cy.contains("You can only upload files with extension jpeg, jpg and png").should("be.visible");


  }


  TC_Pay_016(){
    cy.get('[title="Payments"]').click({force:true});
    cy.wait(1000);
    cy.get(".payments > :nth-child(2) > :nth-child(3) > a.ng-star-inserted").click({force:true});
    cy.wait(1000);
    cy.get("a[title='Search and View Deposit Slip']").click({force:true});
    cy.wait(1000);
    cy.get(this.locators.payments_mode).select("CASH");
    cy.wait(1000);
    cy.get(this.locators.sub_btn).click();
    cy.wait(1000);
    cy.get(this.locators.pagination_count_dropdown).select("50");
    cy.wait(1000);
    cy.get(':nth-child(n) > :nth-child(1) > .form-control-group > .form-radio-group > label > input')
  .then($radios => {
    const randomIndex = Math.floor(Math.random() * $radios.length);
    cy.wrap($radios[randomIndex]).click({ force: true });
});
    cy.contains("Uploaded PayIn Slip Image").scrollIntoView().should("be.visible");

  }
  TC_Pay_017(){
    cy.get('[title="Payments"]').click({force:true});
    cy.wait(1000);
    cy.get(".payments > :nth-child(2) > :nth-child(3) > a.ng-star-inserted").click({force:true});
    cy.wait(1000);
    cy.get("a[title='Search and View Deposit Slip']").click({force:true});
    cy.wait(1000);
    cy.get(this.locators.payments_mode).select("CASH");
    cy.wait(1000);
    cy.get(this.locators.sub_btn).click();
    cy.wait(1000);
    cy.get(this.locators.pagination_count_dropdown).select("50");
    cy.wait(1000);
    cy.get(':nth-child(n) > :nth-child(1) > .form-control-group > .form-radio-group > label > input')
  .then($radios => {
    const randomIndex = Math.floor(Math.random() * $radios.length);
    cy.wrap($radios[randomIndex]).click({ force: true });
});
    cy.contains("Uploaded PayIn Slip Image").scrollIntoView().should("be.visible");
    cy.wait(5000);
    cy.get(".mt-2").click();

  }

  TC_Pay_017(){
    cy.get('[title="Payments"]').click({force:true});
    cy.wait(1000);
    cy.get(".payments > :nth-child(2) > :nth-child(3) > a.ng-star-inserted").click({force:true});
    cy.wait(1000);
    cy.get("a[title='Search and View Deposit Slip']").click({force:true});
    cy.wait(1000);
    cy.get(this.locators.payments_mode).select("CASH");
    cy.wait(1000);
    cy.get(this.locators.sub_btn).click();
    cy.wait(1000);
    cy.get(this.locators.pagination_count_dropdown).select("50");
    cy.wait(1000);
    cy.get(':nth-child(n) > :nth-child(1) > .form-control-group > .form-radio-group > label > input')
  .then($radios => {
    const randomIndex = Math.floor(Math.random() * $radios.length);
    cy.wrap($radios[randomIndex]).click({ force: true });
});
    cy.contains("Uploaded PayIn Slip Image").scrollIntoView().should("be.visible");
    cy.wait(5000);
    cy.get(".payments > :nth-child(2) > :nth-child(3) > a.ng-star-inserted").click({force:true});
    cy.wait(1000);
    cy.get(".payments > :nth-child(2) > :nth-child(3) > .sub-nav-list > :nth-child(2) > a']").click({force:true});
    cy.wait(1000);
    cy.get(this.locators.payments_mode).select("CASH");
    cy.wait(1000);
    cy.get(this.locators.sub_btn).click();
    cy.wait(1000);
    cy.get(this.locators.pagination_count_dropdown).select("50");
    cy.wait(1000);
    cy.get(':nth-child(n) > :nth-child(1) > .form-control-group > .form-radio-group > label > input')
  .then($radios => {
    const randomIndex = Math.floor(Math.random() * $radios.length);
    cy.wrap($radios[randomIndex]).click({ force: true });
});
    cy.contains("Uploaded PayIn Slip Image").scrollIntoView().should("be.visible");
    cy.wait(5000);
  
  }

  TC_Pay_019(){
    cy.get('[title="Payments"]').click({force:true});
    cy.wait(1000);
    cy.get(".payments > :nth-child(2) > :nth-child(3) > a.ng-star-inserted").click({force:true});
    cy.wait(1000);
    cy.get("a[title='Search and View Deposit Slip']").click({force:true});
    cy.wait(1000);
    cy.get(this.locators.payments_mode).select("CASH");
    cy.wait(1000);
    cy.get(this.locators.sub_btn).click({force:true});
    cy.wait(1000);
    cy.get(this.locators.pagination_count_dropdown).select("10");
    cy.wait(1000);
    cy.get(this.locators.sub_btn).click({force:true});
    cy.wait(1000);
    cy.get(this.locators.pagination_count_dropdown).select("15");
    cy.wait(1000);
    cy.get(this.locators.sub_btn).click({force:true});
    cy.wait(1000);
    cy.get(this.locators.pagination_count_dropdown).select("20");
    cy.wait(1000);
    cy.get(this.locators.sub_btn).click({force:true});
    cy.wait(1000);
    cy.get(this.locators.pagination_count_dropdown).select("30");
    cy.wait(1000);
    cy.get(this.locators.sub_btn).click({force:true});
    cy.wait(1000);
    cy.get(this.locators.pagination_count_dropdown).select("40");
    cy.wait(1000);
    cy.get(this.locators.sub_btn).click({force:true});
    cy.wait(1000);
    cy.get(this.locators.pagination_count_dropdown).select("50");
   
  }

  TC_Pay_024(){
    cy.get('[title="Payments"]').click({force:true});
    cy.wait(1000);
    cy.get(".payments > :nth-child(2) > :nth-child(3) > a.ng-star-inserted").click({force:true});
    cy.wait(1000);
    cy.get("a[title='Acknowledge Deposit Slip']").click({force:true});
    cy.wait(1000);
    cy.get("#paymentMode").select("CASH");
    cy.wait(1000);
    cy.get(".btn").click();
    cy.wait(1000);
    cy.get(".pagination-count > .form-select").select("50");
    cy.wait(1000);
    cy.get("#payinslip-grid-column-filter-button").click();
    cy.wait(1000);
    cy.get(":nth-child(8) > .dropdown-item > .form-check-input").click();
    cy.wait(1000);
    cy.get("tbody > tr").then($rows => {

  let countNoImage = 0;

  $rows.each((index, row) => {
    const cell = Cypress.$(row).find("td:nth-child(9)");

    // If .text-primary or img is NOT present → no image
    if (cell.find(".text-primary").length === 0 && cell.find("img").length === 0) {
      countNoImage++;
    }
  });

  cy.log("Total rows WITHOUT image: " + countNoImage);
});
   
   
  }


  TC_Pay_025(){
    cy.get('[title="Payments"]').click({force:true});
    cy.wait(1000);
    cy.get(".payments > :nth-child(2) > :nth-child(2) > a.ng-star-inserted").click({force:true});
    cy.wait(1000);
    cy.get(".payments > :nth-child(2) > :nth-child(2) > .sub-nav-list > :nth-child(2) > a").click({force:true});
    cy.wait(1000);
    cy.get('input').type('2');   
    cy.get('.ng-dropdown-panel-items').should('be.visible');
    cy.get('.ng-dropdown-panel-items .ng-option-label').then($options => {
    const count = $options.length;
    const randomIndex = Math.floor(Math.random() * count);

    cy.wrap($options[randomIndex]).click();
});
   cy.get(this.locators.search_btn).click({force: true});
   cy.wait(1000);
   cy.contains('Batch Status').should('be.visible');

  }


  TC_Pay_026(){
    cy.get('[title="Payments"]').click({force:true});
    cy.wait(1000);
    cy.get(".payments > :nth-child(2) > :nth-child(2) > a.ng-star-inserted").click({force:true});
    cy.wait(1000);
    cy.get(".payments > :nth-child(2) > :nth-child(2) > .sub-nav-list > :nth-child(2) > a").click({force:true});
    cy.wait(1000);
    cy.get('.ng-select-container input').type('2', { force: true });
    cy.get('.ng-dropdown-panel-items').should('be.visible');
    cy.get('.ng-dropdown-panel-items .ng-option-label').then($options => {
    const count = $options.length;
    const randomIndex = Math.floor(Math.random() * count);

    cy.wrap($options[randomIndex]).click();
});
   cy.get(this.locators.search_btn).click({force: true});
   cy.wait(1000);
   cy.contains("Agent Code", { timeout: 10000 })
  .scrollIntoView()
  .should("exist")
  .and(($el) => {
    expect($el.is(':visible')).to.be.true;
  });
   cy.wait(1000);
   cy.contains("Agent Name").should("be.visible");
   cy.get('tr.ng-star-inserted > :nth-child(7)').each(($cell) => {
    const fullName = $cell.text().trim();          

    const parts = fullName.split(" ");             
    const firstName = parts[0];                     
    const lastName = parts.slice(1).join(" ");      

    cy.log("First Name: " + firstName);
    cy.log("Last Name: " + lastName);
});


  }
  TC_Pay_041(){
   cy.get('[title="Payments"]').click({force:true});
   cy.wait(1000);
   cy.get(this.locators.batch_of_payments).click({force:true});
   cy.wait(1000); 
   cy.get(this.locators.search_and_edit).click({force:true});
   cy.wait(5000);
   cy.get('.ng-select-container input').type('31', { force: true });
   cy.get('.ng-dropdown-panel-items').should('be.visible');
   cy.get('.ng-dropdown-panel-items .ng-option-label').then($options => {
   const count = $options.length;
   const randomIndex = Math.floor(Math.random() * count);

    cy.wrap($options[randomIndex]).click();
});
   cy.get(this.locators.search_btn).click({force: true});
   cy.wait(1000);



  }

  TC_Pay_042(){
      cy.get('[title="Payments"]').click({force:true});
   cy.wait(1000);
   cy.get(this.locators.batch_of_payments).click({force:true});
   cy.wait(1000); 
   cy.get(this.locators.search_and_edit).click({force:true});
   cy.wait(5000);
   cy.get('.ng-select-container input').type('3', { force: true });
   cy.get('.ng-dropdown-panel-items').should('be.visible');
   cy.get('.ng-dropdown-panel-items .ng-option-label').then($options => {
   const count = $options.length;
   const randomIndex = Math.floor(Math.random() * count);

    cy.wrap($options[randomIndex]).click();
});
   cy.get(this.locators.search_btn).click({force: true});
   cy.wait(1000);



  }
  TC_Pay_044(){
   cy.get('[title="Payments"]').click({force:true});
   cy.wait(1000);
   cy.get(this.locators.batch_of_payments).click({force:true});
   cy.wait(1000); 
   cy.get(this.locators.search_and_edit).click({force:true});
   cy.wait(5000);
  cy.get('.ng-select-container').click({ force: true });

cy.get('.ng-dropdown-panel-items .ng-option')
  .should('have.length.greaterThan', 0)
  .first()
  .click({ force: true });
  cy.wait(2000);
   cy.get(this.locators.search_btn).click({force: true});
   cy.wait(5000);
   cy.contains('Batch Details').should('be.visible');
   cy.contains('Batch ID').should('be.visible');
   cy.contains('Product Group').should('be.visible');
   cy.contains('Mode Of Payment').should('be.visible');
   cy.contains('Batch Status').should('be.visible');
   cy.contains('Agency/Branch').should('be.visible');
   cy.contains('Total Amount').should('be.visible');


  }

  TC_Pay_046(){
   cy.get('[title="Payments"]').click({force:true});
   cy.wait(1000);
   cy.get(this.locators.batch_of_payments).click({force:true});
   cy.wait(1000); 
   cy.get(this.locators.search_and_edit).click({force:true});
   cy.wait(5000);
   cy.get(this.locators.search_btn).click({force: true});
   cy.wait(500);
   cy.contains('Error!').should('be.visible');
   cy.contains('The BatchId field is required').should('be.visible');

  }

   TC_Pay_049(){
   cy.get('[title="Payments"]').click({force:true});
   cy.wait(2000);
   cy.get(this.locators.Deposit_slip).click({force:true});
   cy.wait(2000); 
   cy.get(this.locators.searchandview).click({force: true});
   cy.wait(2000);
   cy.get(this.locators.Mode_of_Payment).select('CASH');
   cy.wait(2000);
   cy.get(this.locators.submit).click();
   cy.wait(2000);
   cy.get(":nth-child(1) > :nth-child(1) > .form-control-group > .form-radio-group > label > input").click();
   cy.wait(2000);
   cy.get(".btn").click();
   
   }

    TC_Pay_021(){
    cy.get('[title="Payments"]').click({force:true});
    cy.wait(2000);
    cy.get(".payments > :nth-child(2) > :nth-child(3) > a.ng-star-inserted").click({force:true});
    cy.wait(2000);
    cy.get("a[title='Acknowledge Deposit Slip']").click({force:true});
    cy.wait(2000);
    cy.get("#paymentMode").select("CASH");
    cy.wait(2000);
    cy.get(".btn").click();
    cy.wait(2000);
    cy.get(".pagination-count > .form-select").select("50");
    cy.wait(2000);
    cy.get("#payinslip-grid-column-filter-button").click();
    cy.wait(2000);
    cy.get(":nth-child(8) > .dropdown-item > .form-check-input").click();
    cy.wait(2000);
    cy.get(":nth-child(3) > :nth-child(10) > .form-control-group > .form-check-group > label > input").click({force: true});
    cy.wait(2000);
    cy.get(":nth-child(2) > :nth-child(9) > .mt-2 > .text-primary").click({force: true});

  }


TC_Pay_022() {

  cy.get('[title="Payments"]').click({ force: true });
  cy.wait(1000);

  cy.get(".payments > :nth-child(2) > :nth-child(3) > a.ng-star-inserted")
    .click({ force: true });
  cy.wait(1000);

  cy.get("a[title='Acknowledge Deposit Slip']").click({ force: true });
  cy.wait(1000);

  cy.get("#paymentMode").select("CASH");
  cy.wait(1000);

  cy.get(".btn").click();
  cy.wait(1000);

  cy.get(".pagination-count > .form-select").select("50");
  cy.wait(1000);

  cy.get("#payinslip-grid-column-filter-button").click();
  cy.wait(1000);

  cy.get(":nth-child(8) > .dropdown-item > .form-check-input").click();
  cy.wait(1000);

  cy.get("tbody > tr").then($rows => {
    const totalRows = $rows.length;

  cy.get("td:nth-child(9) .mt-2").then($imgs => {

      const totalImages = $imgs.length;
      const noImage = totalRows - totalImages;

      let countJPG = 0;
      let countPNG = 0;

      $imgs.each((i, el) => {
        const fileName =
          el.getAttribute("href")?.toLowerCase() ||
          el.innerText?.toLowerCase() ||
          "";

        if (fileName.endsWith(".png")) {
          countPNG++;
        } else if (fileName.endsWith(".jpg") || fileName.endsWith(".jpeg")) {
          countJPG++;
        }
      });

      cy.log("Total Rows: " + totalRows);
      cy.log("PNG Count: " + countPNG);
      cy.log("JPG/JPEG Count: " + countJPG);

    });
  });

}

TC_Pay_057(){
  cy.get(this.locators.account_page).click({force:true});
  cy.wait(2000);
  cy.get(".ng-clear-wrapper").click();
  cy.wait(2000);
  cy.get(".ng-select-container").click({force:true});
  cy.wait(2000);
  cy.get(".ng-input > input").type("Customer Name");
  cy.wait(2000);
  cy.get(".ng-option-label").click();
  cy.wait(2000);
  cy.get(".ng-select-container").click({force:true});
  cy.wait(2000);
  cy.get("#search-customer-name").type("A");
  cy.wait(2000);
  cy.get(this.locators.btn).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.dropdown).select("50");
  cy.wait(2000);
  cy.get('tbody > tr > td:nth-child(4) > a').then($links => {
  const count = $links.length;
  const randomIndex = Math.floor(Math.random() * count);
  cy.wrap($links[randomIndex]).click({force: true});
});
   cy.contains('Previous').should('exist');
   cy.contains('Next').should('exist');  
}


TC_Pay_058(){
  cy.get(this.locators.account_page).click({force:true});
  cy.wait(2000);
  cy.get(".ng-clear-wrapper").click();
  cy.wait(2000);
  cy.get(".ng-select-container").click({force:true});
  cy.wait(2000);
  cy.get(".ng-input > input").type("Customer Name");
  cy.wait(2000);
  cy.get(".ng-option-label").click();
  cy.wait(2000);
  cy.get(".ng-select-container").click({force:true});
  cy.wait(2000);
  cy.get("#search-customer-name").type("A");
  cy.wait(2000);
  cy.get(this.locators.btn).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.dropdown).select("50");
  cy.wait(2000);
  cy.get(this.locators.firstaccount).click({force:true});
  cy.wait(2000);
  cy.contains('Previous') .should('be.disabled');
  cy.contains('Next').should('be.enabled');
  
}
TC_Pay_059(){
  cy.get(this.locators.account_page).click({force:true});
  cy.wait(2000);
  cy.get(".ng-clear-wrapper").click();
  cy.wait(2000);
  cy.get(".ng-select-container").click({force:true});
  cy.wait(2000);
  cy.get(".ng-input > input").type("Customer Name");
  cy.wait(2000);
  cy.get(".ng-option-label").click();
  cy.wait(2000);
  cy.get(".ng-select-container").click({force:true});
  cy.wait(2000);
  cy.get("#search-customer-name").type("A");
  cy.wait(2000);
  cy.get(this.locators.btn).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.dropdown).select("50");
  cy.wait(2000);
  cy.get(".pagination-last > .page-link").click();
  cy.wait(2000);
  cy.get(this.locators.lastaccount).click({force:true});
  cy.wait(2000);
  cy.contains('Previous').should('be.enabled');
  cy.contains('Next').should('be.disabled');
  
}

TC_Pay_060(){
   cy.get(this.locators.account_page).click({force:true});
  cy.wait(2000);
  cy.get(".ng-clear-wrapper").click();
  cy.wait(2000);
  cy.get(".ng-select-container").click({force:true});
  cy.wait(2000);
  cy.get(".ng-input > input").type("Customer Name");
  cy.wait(2000);
  cy.get(".ng-option-label").click();
  cy.wait(2000);
  cy.get(".ng-select-container").click({force:true});
  cy.wait(2000);
  cy.get("#search-customer-name").type("A");
  cy.wait(2000);
  cy.get(this.locators.btn).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.dropdown).select("50");
  cy.wait(2000);
  cy.get(".pagination-last > .page-link").click();
  cy.wait(2000);
  cy.get('tbody > tr > td:nth-child(4) > a').then($links => {
  const count = $links.length;
  const randomIndex = Math.floor(Math.random() * (count - 1)) + 1;
  cy.wrap($links[randomIndex]).click({ force: true });
});
  cy.wait(2000);
  cy.contains('Previous').should('be.enabled');
  cy.contains('Next').should('be.enabled');

}

TC_Pay_061(){
   cy.get(this.locators.account_page).click({force:true});
  cy.wait(2000);
  cy.get(".ng-clear-wrapper").click();
  cy.wait(2000);
  cy.get(".ng-select-container").click({force:true});
  cy.wait(2000);
  cy.get(".ng-input > input").type("Customer Name");
  cy.wait(2000);
  cy.get(".ng-option-label").click();
  cy.wait(2000);
  cy.get(".ng-select-container").click({force:true});
  cy.wait(2000);
  cy.get("#search-customer-name").type("A");
  cy.wait(2000);
  cy.get(this.locators.btn).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.dropdown).select("50");
  cy.wait(2000);
  cy.get(".pagination-last > .page-link").click();
  cy.wait(2000);
  cy.get('tbody > tr > td:nth-child(4) > a').then($links => {
  const count = $links.length;
  const randomIndex = Math.floor(Math.random() * (count - 1)) + 1;
  cy.wrap($links[randomIndex]).click({ force: true });
});
  cy.wait(2000);
  cy.contains('Previous').should('be.enabled');
  cy.contains('Next').should('be.enabled');
  cy.wait(2000);
  cy.get(this.locators.next_button).click({force:true});
  cy.wait(2000);
  cy.contains('Name').should('exist');
  cy.contains('Account Number').should('exist');
  cy.contains('Customer ID').should('exist');
  cy.contains('Product').should('exist');
  cy.contains('Total Overdue Amount').should('exist');


}

TC_Pay_062(){
  cy.get(this.locators.account_page).click({force:true});
  cy.wait(2000);
  cy.get(".ng-clear-wrapper").click();
  cy.wait(2000);
  cy.get(".ng-select-container").click({force:true});
  cy.wait(2000);
  cy.get(".ng-input > input").type("Customer Name");
  cy.wait(2000);
  cy.get(".ng-option-label").click();
  cy.wait(2000);
  cy.get(".ng-select-container").click({force:true});
  cy.wait(2000);
  cy.get("#search-customer-name").type("A");
  cy.wait(2000);
  cy.get(this.locators.btn).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.dropdown).select("50");
  cy.wait(2000);
  cy.get(".pagination-last > .page-link").click();
  cy.wait(2000);
  cy.get('tbody > tr > td:nth-child(4) > a').then($links => {
  const count = $links.length;
  const randomIndex = Math.floor(Math.random() * (count - 1)) + 1;
  cy.wrap($links[randomIndex]).click({ force: true });
});
  cy.wait(2000);
  cy.contains('Previous').should('be.enabled');
  cy.contains('Next').should('be.enabled');
  cy.wait(2000);
  cy.get(this.locators.Previous_Button).click({force:true});
  cy.wait(2000);
  cy.contains('Name').should('exist');
  cy.contains('Account Number').should('exist');
  cy.contains('Customer ID').should('exist');
  cy.contains('Product').should('exist');
  cy.contains('Total Overdue Amount').should('exist');


}

 TC_Pay_033(){
    cy.get('[title="Payments"]').click({force:true});
    cy.wait(1000);
    cy.get("#nav-item-2-deposit-slip").click({force:true});
    cy.wait(1000);
    cy.get("#nav-item-3-search-and-print-batch").click({force:true});
    cy.wait(2000);
   // Open dropdown
   cy.get('.ng-arrow-wrapper')
  .click({ force: true });

cy.get('.ng-option-label')
  .first()
  .click({ force: true });
   cy.get(this.locators.search_btn).click({force: true});
   cy.wait(1000);
   cy.contains('Batch Status').should('be.visible');

  }

  TC_Pay_035(){
    cy.get('[title="Payments"]').click({force:true});
    cy.wait(1000);
     cy.get("#nav-item-2-deposit-slip").click({force:true});
    cy.wait(1000);
    cy,get("#nav-item-3-search-and-print-batch").click({force:true});
    cy.wait(2000);
   // Open dropdown
    cy.get('.ng-select-container').click({ force: true });

    // Select random option
    cy.get('.ng-option-label')
        .should('have.length.greaterThan', 0)
        .then($options => {

            const maxOptions = Math.min(12, $options.length); // first 12 options
            const randomIndex = Math.floor(Math.random() * maxOptions);

            const optionText = $options.eq(randomIndex).text().trim();

            cy.contains('.ng-option-label', optionText)
                .click({ force: true });

        });

   cy.get(this.locators.search_btn).click({force: true});
   cy.wait(1000);
   cy.contains('Batch Status').should('be.visible');

  }



TC_Pay_034() {

    cy.get('[title="Payments"]').click({ force: true });
    cy.wait(1000);

    cy.get("#nav-item-2-deposit-slip").click({ force: true });
    cy.wait(1000);

    cy.get("#nav-item-3-search-and-print-batch").click({ force: true });
    cy.wait(2000);

    cy.get('.ng-arrow-wrapper')
  .click({ force: true });

cy.get('.ng-option-label')
  .should('have.length.greaterThan', 0)
  .then($options => {

    const maxOptions = Math.min(12, $options.length); // first 12 options
    const randomIndex = Math.floor(Math.random() * maxOptions);

    cy.wrap($options[randomIndex])
      .scrollIntoView()
      .click({ force: true });
  });
    cy.wait(1000);

    // Click Search
    cy.get(this.locators.search_btn).click({ force: true });
    cy.wait(1000);

    // Verify Staff Code column
    cy.contains("Staff Code", { timeout: 10000 })
        .scrollIntoView()
        .should("be.visible");

    // Verify Staff Name column
    cy.contains("Staff Name")
        .should("be.visible");

    // Get First Name and Last Name
    cy.get('tbody > tr > :nth-child(7)').each(($cell) => {

        const fullName = $cell.text().trim();

        const parts = fullName.split(" ");
        const firstName = parts[0];
        const lastName = parts.slice(1).join(" ");

        cy.log(`First Name: ${firstName}`);
        cy.log(`Last Name: ${lastName}`);

    });

}
 TC_Pay_036(){
    cy.get('[title="Payments"]').click({force:true});
    cy.wait(1000);
    cy.get("#nav-item-2-deposit-slip").click({force:true});
    cy.wait(1000);
    cy,get("#nav-item-3-search-and-print-batch").click({force:true});
    cy.wait(2000);
cy.get('.ng-dropdown-panel-items .ng-option')
  .should('have.length.greaterThan', 0)
  .first()
  .click({ force: true });

cy.get(this.locators.search_btn).click({ force: true });
cy.wait(1000);

const headers = [
  "Branch ID",
  "Branch Name",
  "Batch ID",
  "Batch Generation Date",
  "Mode Of Payment",
  "Batch Amount",
  "Batch Status",
  "Staff Code",
  "Staff Name"
];

headers.forEach(header => {
  cy.contains('th', header).should('be.visible');
});
}

TC_Pay_043() {

    cy.get('[title="Payments"]').click({ force: true });
    cy.wait(1000);

    cy.get(this.locators.batch_of_payments).click({ force: true });
    cy.wait(1000);

    cy.get(this.locators.search_and_edit).click({ force: true });
    cy.wait(5000);

    cy.get('.ng-arrow-wrapper')
  .click({ force: true });

  cy.get('.ng-option-label')
  .should('have.length.greaterThan', 0)
  .then($options => {

    const maxOptions = Math.min(12, $options.length); // first 12 options
    const randomIndex = Math.floor(Math.random() * maxOptions);

    cy.wrap($options[randomIndex])
      .scrollIntoView()
      .click({ force: true });
  });

    cy.wait(1000);

    cy.get(this.locators.search_btn).click({ force: true });
    cy.wait(1000);

    cy.contains("CollectionBatchCreated", { timeout: 10000 })
        .should("be.visible");

}



























}

export default PaymentsPage;