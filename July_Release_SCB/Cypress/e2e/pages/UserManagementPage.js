import { getLocators } from '../utils/locatorUtils';
import { getBaseUrl } from '../utils/configUtils';
import { faker } from '@faker-js/faker';

class UserManagementPage {
  constructor(locators) {
    this.locators = locators;
  }

UserManagementTestPage_101(){
 
  cy.get(this.locators.clickonusermanagement).click();
  cy.wait(1000);
  cy.get(this.locators.clickonAgencyEmpanelRequest).click({force: true});
  cy.wait(2000);
  cy.get(this.locators.ClickOnAddAgency).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOnAgency_Address_Details).click();
  cy.wait(2000);
  cy.contains("Registered Agency Address").should("be.visible");
  cy.wait(2000);

}

UserManagementTestPage_102(){
 
  cy.get(this.locators.clickonusermanagement).click();
  cy.wait(1000);
  cy.get(this.locators.clickonAgencyEmpanelRequest).click({force: true});
  cy.wait(2000);
  cy.get(this.locators.ClickOnAddAgency).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOnAgency_Address_Details).click();
  cy.wait(2000);
   cy.get(this.locators.Type_Agency_Address).type("Sunrise Residency Lakeview Avenue Near Central Park Opposite Grand Towers Whitefield Main Road Bengaluru Karnataka India Close To Schools Colleges Hospitals Shopping Centers And Public Transport");
  cy.wait(2000);

}

UserManagementTestPage_103(){


   const filePath = 'Aadhar.png';
  cy.get(this.locators.clickonusermanagement).click();
  cy.wait(1000);
  cy.get(this.locators.clickonAgencyEmpanelRequest).click({force: true});
  cy.wait(2000);
  cy.get(this.locators.ClickOnAddAgency).click();
  cy.wait(2000);
    cy.get(this.locators.fillAgencyName).type("ABCDEF");
    cy.wait(2000);

   cy.get(this.locators.selectRecommendingOfficer)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectRecommendingOfficer).select(randomValue);
  });
cy.wait(2000);

   cy.get(this.locators.selectAgencyType)
  .find('option')
  .then(options => {
    const optionCount = options.length;
    const randomIndex = Math.floor(Math.random() * (optionCount - 1)) + 1;

    const randomValue = options[randomIndex].value;

    cy.get(this.locators.selectAgencyType).select(randomValue, { force: true });
  });
cy.wait(2000);
    cy.get(this.locators.selectAgencySubType)
  .find('option')
  .then(options => {
    const optionCount = options.length;
    const randomIndex = Math.floor(Math.random() * (optionCount - 1)) + 1;

    const randomValue = options[randomIndex].value;

    cy.get(this.locators.selectAgencySubType).select(randomValue, { force: true });
  });
cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
    // cy.get(this.locators.clickongenerateENcollectcode).click();
    // cy.wait(2000);
    //Address Details
     cy.get(this.locators.ClickOnAgency_Address_Details).click();
  cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.Type_Agency_Address).type("Green Meadows Residency Fifth Cross Street Near Sunrise Park Opposite Lake View Towers Whitefield Main Road Bengaluru Karnataka India Close To Schools Hospitals Markets And Public Transport Facilities");
  cy.wait(2000);
    
    // Function to generate a random 10-digit number
    function generateRandomMobileNumber() {
      const prefix = '07'; // Assuming you want the number to start with '07'
      const randomNumber = Math.floor(Math.random() * 100000000); // Generates an 8-digit number
      const paddedNumber = String(randomNumber).padStart(8, '0'); // Pads with leading zeros if necessary
      return prefix + paddedNumber;
    }
    // Cypress test code
    cy.get(this.locators.mobilenumber).type(generateRandomMobileNumber());
    cy.wait(2000);
    //cy.get(this.locators.mobilenumber).type("0769875425");
    cy.wait(2000);
    cy.get(this.locators.areacode).type("1234");
    cy.wait(2000);
    cy.get(this.locators.landlinenumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.selectstate).select("All");
    cy.wait(2000);
    // Function to generate a random email address
    function generateRandomEmail() {
      const randomString = Math.random().toString(36).substring(2, 11); // Generates a random string
      return `user_${randomString}@yopmail.com`; // Concatenate to form an email address
    }

    // Cypress test code
    cy.get(this.locators.fillemailid).type(generateRandomEmail());
    cy.wait(2000);
    //cy.get(this.locators.fillemailid).type("sachin41@yopmail.com");
    cy.wait(2000);
    cy.get(this.locators.selectcity).select("All",{force: true});
    cy.wait(2000);
    cy.get(this.locators.postalcode).type("123456");
    cy.wait(2000);
    //Banking details
    cy.get(this.locators.clickonbankingdetails).click();
    cy.wait(2000);
    cy.get(this.locators.accountholdername).type("AJAY KUMAR");
    cy.wait(2000);
    cy.get(this.locators.bankaccountnumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.bankname)
  .find('option')
  .then(options => {
    const optionCount = options.length;
    const randomIndex = Math.floor(Math.random() * (optionCount - 1)) + 1;

    const randomValue = options[randomIndex].value;

    cy.get(this.locators.bankname).select(randomValue, { force: true });
  });
cy.wait(2000);

 cy.get(this.locators.bankbranchname)
  .find('option')
  .then(options => {
    const optionCount = options.length;
    const randomIndex = Math.floor(Math.random() * (optionCount - 1)) + 1;

    const randomValue = options[randomIndex].value;

    cy.get(this.locators.bankbranchname).select(randomValue, { force: true });
  });
cy.wait(2000);
    cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
    cy.wait(2000);
    //////////////////////////////////////Documentation_Details/////////////////////////////////////

    //const filePath = 'Aadhar.png';
    const filePath1 = 'adharcard.pdf';

    // Expand the documentation details section
    cy.get(':nth-child(4) > .nav-link > span').click();
    cy.wait(2000);
    //lick on various elements to interact with the UI
    cy.get('#waive--0').click();
    cy.wait(2000);
    cy.get('#waive--3').click();
    cy.wait(2000);
    cy.get('#waive--4').click();
    cy.wait(2000);
    cy.get('#waive--5').click();
    cy.wait(2000);
    cy.get('#waive--6').click();
    cy.wait(2000);
    cy.get('#agencyaddFileBtn-0').click();
    cy.wait(2000);
    cy.get('input[type="file"]').eq(0)
    .attachFile(filePath, { force: true });
    cy.wait(2000);
    cy.get('#agencydocTypeSelect-1').select('Pan Card');
    cy.get('#agencyaddFileBtn-1').click();
    cy.wait(2000);
    cy.get('input[type="file"]').eq(1)
    .attachFile(filePath1, { force: true });
    cy.wait(2000);
    cy.get('input[type="file"]').eq(1)
    .attachFile(filePath1, { force: true });
    cy.wait(2000);
    cy.get('#agencydocTypeSelect-2').select('Aadhar Card');
    cy.get('#agencyaddFileBtn-2').click();
    cy.wait(2000);
    cy.get('input[type="file"]').eq(2)
    .attachFile(filePath1, { force: true });
    cy.wait(2000);
    cy.get('input[type="file"]').eq(3)
    .attachFile(filePath1, { force: true });
    cy.wait(2000);
    cy.get('input[type="file"]').eq(4)
    .attachFile(filePath1, { force: true });
    cy.wait(2000);
    cy.get('input[type="file"]').eq(5)
    .attachFile(filePath1, { force: true });
    cy.wait(2000);
    //////-----------------
    cy.get(this.locators.scopeofword).click();
    cy.wait(2000);
    cy.get(this.locators.productgroup).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.product).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.subproduct).select("Personal Loan");
    cy.wait(2000);
    cy.get(':nth-child(6) > .nav-link > span').click();
    cy.wait(2000);
    cy.get(this.locators.selectpg).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.selectp).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.selectsubp).select("Personal Loan");
    cy.wait(2000);
    cy.get(this.locators.selectbucket).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectregion).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectState).select("All");
    cy.wait(2000);
    cy.get("div[class='p-0 overflow-auto']").scrollTo("right")
    cy.wait(2000);
    cy.get(this.locators.SelectCity).select("All");
    cy.wait(2000);

      cy.get(this.locators.selectmanager)
  .find('option')
  .then(options => {
    const optionCount = options.length;
    const randomIndex = Math.floor(Math.random() * (optionCount - 1)) + 1;

    const randomValue = options[randomIndex].value;

    cy.get(this.locators.selectmanager).select(randomValue, { force: true });
  });
cy.wait(2000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).type('02-04-2024').should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).type('01-05-2024').should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.Contactexpiredate).type('30-09-2026').should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.addremark).type("This is ok",{force:true});
    cy.wait(2000);
    cy.get(this.locators.saveagencyprofile).click().should("be.visible");
    cy.wait(2000);
   cy.contains("Agency profile is Saved as Draft.").should("be.visible");
   cy.wait(2000);
}

UserManagementTestPage_104(){


   const filePath = 'Aadhar.png';
  cy.get(this.locators.clickonusermanagement).click();
  cy.wait(1000);
  cy.get(this.locators.clickonAgencyEmpanelRequest).click({force: true});
  cy.wait(2000);
  cy.get(this.locators.ClickOnAddAgency).click();
  cy.wait(2000);
    cy.get(this.locators.fillAgencyName).type("ABCDEF");
    cy.wait(2000);

   cy.get(this.locators.selectRecommendingOfficer)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectRecommendingOfficer).select(randomValue);
  });
cy.wait(2000);
   cy.get(this.locators.selectAgencyType)
  .find('option')
  .then(options => {
    const optionCount = options.length;
    const randomIndex = Math.floor(Math.random() * (optionCount - 1)) + 1;

    const randomValue = options[randomIndex].value;

    cy.get(this.locators.selectAgencyType).select(randomValue, { force: true });
  });
cy.wait(2000);

  cy.get(this.locators.selectAgencySubType)
  .find('option')
  .then(options => {
    const optionCount = options.length;
    const randomIndex = Math.floor(Math.random() * (optionCount - 1)) + 1;

    const randomValue = options[randomIndex].value;

    cy.get(this.locators.selectAgencySubType).select(randomValue, { force: true });
  });
cy.wait(2000);

    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
    // cy.get(this.locators.clickongenerateENcollectcode).click();
    // cy.wait(2000);
    //Address Details
     cy.get(this.locators.ClickOnAgency_Address_Details).click();
  cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.Type_Agency_Address).type("Sunrise Residency Lakeview Avenue Near Central Park Whitefield Main Road Bengaluru Karnataka India");
  cy.wait(2000);
    
    // Function to generate a random 10-digit number
    function generateRandomMobileNumber() {
      const prefix = '07'; // Assuming you want the number to start with '07'
      const randomNumber = Math.floor(Math.random() * 100000000); // Generates an 8-digit number
      const paddedNumber = String(randomNumber).padStart(8, '0'); // Pads with leading zeros if necessary
      return prefix + paddedNumber;
    }
    // Cypress test code
    cy.get(this.locators.mobilenumber).type(generateRandomMobileNumber());
    cy.wait(2000);
    //cy.get(this.locators.mobilenumber).type("0769875425");
    cy.wait(2000);
    cy.get(this.locators.areacode).type("1234");
    cy.wait(2000);
    cy.get(this.locators.landlinenumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.selectstate).select("All");
    cy.wait(2000);
    // Function to generate a random email address
    function generateRandomEmail() {
      const randomString = Math.random().toString(36).substring(2, 11); // Generates a random string
      return `user_${randomString}@yopmail.com`; // Concatenate to form an email address
    }

    // Cypress test code
    cy.get(this.locators.fillemailid).type(generateRandomEmail());
    cy.wait(2000);
    //cy.get(this.locators.fillemailid).type("sachin41@yopmail.com");
    cy.wait(2000);
    cy.get(this.locators.selectcity).select("All",{force: true});
    cy.wait(2000);
    cy.get(this.locators.postalcode).type("123456");
    cy.wait(2000);
    //Banking details
    cy.get(this.locators.clickonbankingdetails).click();
    cy.wait(2000);
    cy.get(this.locators.accountholdername).type("AJAY KUMAR");
    cy.wait(2000);
    cy.get(this.locators.bankaccountnumber).type("1234567890");
    cy.wait(2000);

    cy.get(this.locators.bankname)
  .find('option')
  .then(options => {
    const optionCount = options.length;
    const randomIndex = Math.floor(Math.random() * (optionCount - 1)) + 1;

    const randomValue = options[randomIndex].value;

    cy.get(this.locators.bankname).select(randomValue, { force: true });
  });
cy.wait(2000);

 cy.get(this.locators.bankbranchname)
  .find('option')
  .then(options => {
    const optionCount = options.length;
    const randomIndex = Math.floor(Math.random() * (optionCount - 1)) + 1;

    const randomValue = options[randomIndex].value;

    cy.get(this.locators.bankbranchname).select(randomValue, { force: true });
  });
cy.wait(2000);

    cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
    cy.wait(2000);
    //////////////////////////////////////Documentation_Details/////////////////////////////////////

    //const filePath = 'Aadhar.png';
    const filePath1 = 'adharcard.pdf';

    // Expand the documentation details section
    cy.get(':nth-child(4) > .nav-link > span').click();
    cy.wait(2000);
    //lick on various elements to interact with the UI
    cy.get('#waive--0').click();
    cy.wait(2000);
    cy.get('#waive--3').click();
    cy.wait(2000);
    cy.get('#waive--4').click();
    cy.wait(2000);
    cy.get('#waive--5').click();
    cy.wait(2000);
    cy.get('#waive--6').click();
    cy.wait(2000);
    cy.get('#agencyaddFileBtn-0').click();
    cy.wait(2000);
    cy.get('input[type="file"]').eq(0)
    .attachFile(filePath, { force: true });
    cy.wait(2000);
    cy.get('#agencydocTypeSelect-1').select('Pan Card');
    cy.get('#agencyaddFileBtn-1').click();
    cy.wait(2000);
    cy.get('input[type="file"]').eq(1)
    .attachFile(filePath1, { force: true });
    cy.wait(2000);
    cy.get('input[type="file"]').eq(1)
    .attachFile(filePath1, { force: true });
    cy.wait(2000);
    cy.get('#agencydocTypeSelect-2').select('Aadhar Card');
    cy.get('#agencyaddFileBtn-2').click();
    cy.wait(2000);
    cy.get('input[type="file"]').eq(2)
    .attachFile(filePath1, { force: true });
    cy.wait(2000);
    cy.get('input[type="file"]').eq(3)
    .attachFile(filePath1, { force: true });
    cy.wait(2000);
    cy.get('input[type="file"]').eq(4)
    .attachFile(filePath1, { force: true });
    cy.wait(2000);
    cy.get('input[type="file"]').eq(5)
    .attachFile(filePath1, { force: true });
    cy.wait(2000);
    //////-----------------
    cy.get(this.locators.scopeofword).click();
    cy.wait(2000);
    cy.get(this.locators.productgroup).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.product).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.subproduct).select("Personal Loan");
    cy.wait(2000);
    cy.get(':nth-child(6) > .nav-link > span').click();
    cy.wait(2000);
    cy.get(this.locators.selectpg).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.selectp).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.selectsubp).select("Personal Loan");
    cy.wait(2000);
    cy.get(this.locators.selectbucket).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectregion).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectState).select("All");
    cy.wait(2000);
    cy.get("div[class='p-0 overflow-auto']").scrollTo("right")
    cy.wait(2000);
    cy.get(this.locators.SelectCity).select("All");
    cy.wait(2000);
     cy.get(this.locators.selectmanager)
  .find('option')
  .then(options => {
    const optionCount = options.length;
    const randomIndex = Math.floor(Math.random() * (optionCount - 1)) + 1;

    const randomValue = options[randomIndex].value;

    cy.get(this.locators.selectmanager).select(randomValue, { force: true });
  });
cy.wait(2000);
    cy.wait(2000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).type('02-04-2024').should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).type('01-05-2024').should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.Contactexpiredate).type('30-09-2026').should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.addremark).type("This is ok",{force:true});
    cy.wait(2000);
    cy.get(this.locators.saveagencyprofile).click().should("be.visible");
    cy.wait(2000);
   cy.contains("Agency profile is Saved as Draft.").should("be.visible");
   cy.wait(2000);
}

UserManagementTestPage_105(){


   const filePath = 'Aadhar.png';
  cy.get(this.locators.clickonusermanagement).click();
  cy.wait(1000);
  cy.get(this.locators.clickonAgencyEmpanelRequest).click({force: true});
  cy.wait(2000);
  cy.get(this.locators.ClickOnAddAgency).click();
  cy.wait(2000);
    cy.get(this.locators.fillAgencyName).type("ABCDEF");
    cy.wait(2000);

   cy.get(this.locators.selectRecommendingOfficer)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectRecommendingOfficer).select(randomValue);
  });
cy.wait(2000);
   cy.get(this.locators.selectAgencyType)
  .find('option')
  .then(options => {
    const optionCount = options.length;
    const randomIndex = Math.floor(Math.random() * (optionCount - 1)) + 1;

    const randomValue = options[randomIndex].value;

    cy.get(this.locators.selectAgencyType).select(randomValue, { force: true });
  });
cy.wait(2000);
    cy.get(this.locators.selectAgencySubType)
  .find('option')
  .then(options => {
    const optionCount = options.length;
    const randomIndex = Math.floor(Math.random() * (optionCount - 1)) + 1;

    const randomValue = options[randomIndex].value;

    cy.get(this.locators.selectAgencySubType).select(randomValue, { force: true });
  });
cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
    // cy.get(this.locators.clickongenerateENcollectcode).click();
    // cy.wait(2000);
    //Address Details
     cy.get(this.locators.ClickOnAgency_Address_Details).click();
  cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.Type_Agency_Address).type("Sunrise Re@dency Lakeview Street Near City Park Whitefie%ld Main Road Bengaluru Karnataka India");
  cy.wait(2000);
    
    // Function to generate a random 10-digit number
    function generateRandomMobileNumber() {
      const prefix = '07'; // Assuming you want the number to start with '07'
      const randomNumber = Math.floor(Math.random() * 100000000); // Generates an 8-digit number
      const paddedNumber = String(randomNumber).padStart(8, '0'); // Pads with leading zeros if necessary
      return prefix + paddedNumber;
    }
    // Cypress test code
    cy.get(this.locators.mobilenumber).type(generateRandomMobileNumber());
    cy.wait(2000);
    //cy.get(this.locators.mobilenumber).type("0769875425");
    cy.wait(2000);
    cy.get(this.locators.areacode).type("1234");
    cy.wait(2000);
    cy.get(this.locators.landlinenumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.selectstate).select("All");
    cy.wait(2000);
    // Function to generate a random email address
    function generateRandomEmail() {
      const randomString = Math.random().toString(36).substring(2, 11); // Generates a random string
      return `user_${randomString}@yopmail.com`; // Concatenate to form an email address
    }

    // Cypress test code
    cy.get(this.locators.fillemailid).type(generateRandomEmail());
    cy.wait(2000);
    //cy.get(this.locators.fillemailid).type("sachin41@yopmail.com");
    cy.wait(2000);
    cy.get(this.locators.selectcity).select("All",{force: true});
    cy.wait(2000);
    cy.get(this.locators.postalcode).type("123456");
    cy.wait(2000);
    //Banking details
    cy.get(this.locators.clickonbankingdetails).click();
    cy.wait(2000);
    cy.get(this.locators.accountholdername).type("AJAY KUMAR");
    cy.wait(2000);
    cy.get(this.locators.bankaccountnumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.bankname)
  .find('option')
  .then(options => {
    const optionCount = options.length;
    const randomIndex = Math.floor(Math.random() * (optionCount - 1)) + 1;

    const randomValue = options[randomIndex].value;

    cy.get(this.locators.bankname).select(randomValue, { force: true });
  });
cy.wait(2000);

 cy.get(this.locators.bankbranchname)
  .find('option')
  .then(options => {
    const optionCount = options.length;
    const randomIndex = Math.floor(Math.random() * (optionCount - 1)) + 1;

    const randomValue = options[randomIndex].value;

    cy.get(this.locators.bankbranchname).select(randomValue, { force: true });
  });
cy.wait(2000);
    cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
    cy.wait(2000);
    //////////////////////////////////////Documentation_Details/////////////////////////////////////

    //const filePath = 'Aadhar.png';
    const filePath1 = 'adharcard.pdf';

    // Expand the documentation details section
    cy.get(':nth-child(4) > .nav-link > span').click();
    cy.wait(2000);
    //lick on various elements to interact with the UI
    cy.get('#waive--0').click();
    cy.wait(2000);
    cy.get('#waive--3').click();
    cy.wait(2000);
    cy.get('#waive--4').click();
    cy.wait(2000);
    cy.get('#waive--5').click();
    cy.wait(2000);
    cy.get('#waive--6').click();
    cy.wait(2000);
    cy.get('#agencyaddFileBtn-0').click();
    cy.wait(2000);
    cy.get('input[type="file"]').eq(0)
    .attachFile(filePath, { force: true });
    cy.wait(2000);
    cy.get('#agencydocTypeSelect-1').select('Pan Card');
    cy.get('#agencyaddFileBtn-1').click();
    cy.wait(2000);
    cy.get('input[type="file"]').eq(1)
    .attachFile(filePath1, { force: true });
    cy.wait(2000);
    cy.get('input[type="file"]').eq(1)
    .attachFile(filePath1, { force: true });
    cy.wait(2000);
    cy.get('#agencydocTypeSelect-2').select('Aadhar Card');
    cy.get('#agencyaddFileBtn-2').click();
    cy.wait(2000);
    cy.get('input[type="file"]').eq(2)
    .attachFile(filePath1, { force: true });
    cy.wait(2000);
    cy.get('input[type="file"]').eq(3)
    .attachFile(filePath1, { force: true });
    cy.wait(2000);
    cy.get('input[type="file"]').eq(4)
    .attachFile(filePath1, { force: true });
    cy.wait(2000);
    cy.get('input[type="file"]').eq(5)
    .attachFile(filePath1, { force: true });
    cy.wait(2000);
    //////-----------------
    cy.get(this.locators.scopeofword).click();
    cy.wait(2000);
    cy.get(this.locators.productgroup).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.product).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.subproduct).select("Personal Loan");
    cy.wait(2000);
    cy.get(':nth-child(6) > .nav-link > span').click();
    cy.wait(2000);
    cy.get(this.locators.selectpg).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.selectp).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.selectsubp).select("Personal Loan");
    cy.wait(2000);
    cy.get(this.locators.selectbucket).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectregion).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectState).select("All");
    cy.wait(2000);
    cy.get("div[class='p-0 overflow-auto']").scrollTo("right")
    cy.wait(2000);
    cy.get(this.locators.SelectCity).select("All");
    cy.wait(2000);
     cy.get(this.locators.selectmanager)
  .find('option')
  .then(options => {
    const optionCount = options.length;
    const randomIndex = Math.floor(Math.random() * (optionCount - 1)) + 1;

    const randomValue = options[randomIndex].value;

    cy.get(this.locators.selectmanager).select(randomValue, { force: true });
  });
cy.wait(2000);
    cy.wait(2000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).type('02-04-2024').should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).type('01-05-2024').should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.Contactexpiredate).type('30-09-2026').should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.addremark).type("This is ok",{force:true});
    cy.wait(2000);
    cy.get(this.locators.saveagencyprofile).click().should("be.visible");
    cy.wait(2000);
   cy.contains("Special characters are not allowed in the input").should("be.visible");
   cy.wait(2000);
}

UserManagementTestPage_106(){


   const filePath = 'Aadhar.png';
  cy.get(this.locators.clickonusermanagement).click();
  cy.wait(1000);
  cy.get(this.locators.clickonAgencyEmpanelRequest).click({force: true});
  cy.wait(2000);
  cy.get(this.locators.ClickOnAddAgency).click();
  cy.wait(2000);
    cy.get(this.locators.fillAgencyName).type("ABCDEF");
    cy.wait(2000);

   cy.get(this.locators.selectRecommendingOfficer)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectRecommendingOfficer).select(randomValue);
  });
cy.wait(2000);
   cy.get(this.locators.selectAgencyType)
  .find('option')
  .then(options => {
    const optionCount = options.length;
    const randomIndex = Math.floor(Math.random() * (optionCount - 1)) + 1;

    const randomValue = options[randomIndex].value;

    cy.get(this.locators.selectAgencyType).select(randomValue, { force: true });
  });
cy.wait(2000);
    cy.get(this.locators.selectAgencySubType)
  .find('option')
  .then(options => {
    const optionCount = options.length;
    const randomIndex = Math.floor(Math.random() * (optionCount - 1)) + 1;

    const randomValue = options[randomIndex].value;

    cy.get(this.locators.selectAgencySubType).select(randomValue, { force: true });
  });
cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
    // cy.get(this.locators.clickongenerateENcollectcode).click();
    // cy.wait(2000);
    //Address Details
     cy.get(this.locators.ClickOnAgency_Address_Details).click();
  cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    
    // Function to generate a random 10-digit number
    function generateRandomMobileNumber() {
      const prefix = '07'; // Assuming you want the number to start with '07'
      const randomNumber = Math.floor(Math.random() * 100000000); // Generates an 8-digit number
      const paddedNumber = String(randomNumber).padStart(8, '0'); // Pads with leading zeros if necessary
      return prefix + paddedNumber;
    }
    // Cypress test code
    cy.get(this.locators.mobilenumber).type(generateRandomMobileNumber());
    cy.wait(2000);
    //cy.get(this.locators.mobilenumber).type("0769875425");
    cy.wait(2000);
    cy.get(this.locators.areacode).type("1234");
    cy.wait(2000);
    cy.get(this.locators.landlinenumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.selectstate).select("All");
    cy.wait(2000);
    // Function to generate a random email address
    function generateRandomEmail() {
      const randomString = Math.random().toString(36).substring(2, 11); // Generates a random string
      return `user_${randomString}@yopmail.com`; // Concatenate to form an email address
    }

    // Cypress test code
    cy.get(this.locators.fillemailid).type(generateRandomEmail());
    cy.wait(2000);
    //cy.get(this.locators.fillemailid).type("sachin41@yopmail.com");
    cy.wait(2000);
    cy.get(this.locators.selectcity).select("All",{force: true});
    cy.wait(2000);
    cy.get(this.locators.postalcode).type("123456");
    cy.wait(2000);
    //Banking details
    cy.get(this.locators.clickonbankingdetails).click();
    cy.wait(2000);
    cy.get(this.locators.accountholdername).type("AJAY KUMAR");
    cy.wait(2000);
    cy.get(this.locators.bankaccountnumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.bankname)
  .find('option')
  .then(options => {
    const optionCount = options.length;
    const randomIndex = Math.floor(Math.random() * (optionCount - 1)) + 1;

    const randomValue = options[randomIndex].value;

    cy.get(this.locators.bankname).select(randomValue, { force: true });
  });
cy.wait(2000);

 cy.get(this.locators.bankbranchname)
  .find('option')
  .then(options => {
    const optionCount = options.length;
    const randomIndex = Math.floor(Math.random() * (optionCount - 1)) + 1;

    const randomValue = options[randomIndex].value;

    cy.get(this.locators.bankbranchname).select(randomValue, { force: true });
  });
cy.wait(2000);
    cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
    cy.wait(2000);
    //////////////////////////////////////Documentation_Details/////////////////////////////////////

    //const filePath = 'Aadhar.png';
    const filePath1 = 'adharcard.pdf';

    // Expand the documentation details section
    cy.get(':nth-child(4) > .nav-link > span').click();
    cy.wait(2000);
    //lick on various elements to interact with the UI
    cy.get('#waive--0').click();
    cy.wait(2000);
    cy.get('#waive--3').click();
    cy.wait(2000);
    cy.get('#waive--4').click();
    cy.wait(2000);
    cy.get('#waive--5').click();
    cy.wait(2000);
    cy.get('#waive--6').click();
    cy.wait(2000);
    cy.get('#agencyaddFileBtn-0').click();
    cy.wait(2000);
    cy.get('input[type="file"]').eq(0)
    .attachFile(filePath, { force: true });
    cy.wait(2000);
    cy.get('#agencydocTypeSelect-1').select('Pan Card');
    cy.get('#agencyaddFileBtn-1').click();
    cy.wait(2000);
    cy.get('input[type="file"]').eq(1)
    .attachFile(filePath1, { force: true });
    cy.wait(2000);
    cy.get('input[type="file"]').eq(1)
    .attachFile(filePath1, { force: true });
    cy.wait(2000);
    cy.get('#agencydocTypeSelect-2').select('Aadhar Card');
    cy.get('#agencyaddFileBtn-2').click();
    cy.wait(2000);
    cy.get('input[type="file"]').eq(2)
    .attachFile(filePath1, { force: true });
    cy.wait(2000);
    cy.get('input[type="file"]').eq(3)
    .attachFile(filePath1, { force: true });
    cy.wait(2000);
    cy.get('input[type="file"]').eq(4)
    .attachFile(filePath1, { force: true });
    cy.wait(2000);
    cy.get('input[type="file"]').eq(5)
    .attachFile(filePath1, { force: true });
    cy.wait(2000);
    //////-----------------
    cy.get(this.locators.scopeofword).click();
    cy.wait(2000);
    cy.get(this.locators.productgroup).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.product).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.subproduct).select("Personal Loan");
    cy.wait(2000);
    cy.get(':nth-child(6) > .nav-link > span').click();
    cy.wait(2000);
    cy.get(this.locators.selectpg).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.selectp).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.selectsubp).select("Personal Loan");
    cy.wait(2000);
    cy.get(this.locators.selectbucket).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectregion).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectState).select("All");
    cy.wait(2000);
    cy.get("div[class='p-0 overflow-auto']").scrollTo("right")
    cy.wait(2000);
    cy.get(this.locators.SelectCity).select("All");
    cy.wait(2000);
     cy.get(this.locators.selectmanager)
  .find('option')
  .then(options => {
    const optionCount = options.length;
    const randomIndex = Math.floor(Math.random() * (optionCount - 1)) + 1;

    const randomValue = options[randomIndex].value;

    cy.get(this.locators.selectmanager).select(randomValue, { force: true });
  });
cy.wait(2000);
    cy.wait(2000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).type('02-04-2024').should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).type('01-05-2024').should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.Contactexpiredate).type('30-09-2026').should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.addremark).type("This is ok",{force:true});
    cy.wait(2000);
    cy.get(this.locators.saveagencyprofile).click().should("be.visible");
    cy.wait(2000);
   cy.get('[role="alert"]').should('contain.text', 'The AddressLine field is required.');

   cy.wait(2000);
}

UserManagementTestPage_107(){
  cy.get(this.locators.clickonusermanagement).click();
  cy.wait(1000);
  cy.get(this.locators.clickonAgencyEmpanelRequest).click({force: true});
  cy.wait(2000);
  cy.get(this.locators.ClickOnAddAgency).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOnAgency_Address_Details).click();
  cy.wait(2000);
   cy.get(this.locators.Type_Agency_Address).type("Green Meadows Residency Fifth Cross Street Near Sunrise Park Opposite Lake View Towers Whitefield Main Road Bengaluru Karnataka India Situated Close To Reputed Schools Colleges Major IT Parks Shopping Malls Supermarkets Hospitals Banks And Public Transport Facilities Making It A Convenient Residential Location For Families Professionals And Students Alike");
  cy.wait(2000);

}
UserManagementTestPage_108(){


   const filePath = 'Aadhar.png';
  cy.get(this.locators.clickonusermanagement).click();
  cy.wait(1000);
  cy.get(this.locators.clickonAgencyEmpanelRequest).click({force: true});
  cy.wait(2000);
  cy.get(this.locators.ClickOnAddAgency).click();
  cy.wait(2000);
    cy.get(this.locators.fillAgencyName).type("ABCDEF");
    cy.wait(2000);

   cy.get(this.locators.selectRecommendingOfficer)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectRecommendingOfficer).select(randomValue);
  });
cy.wait(2000);
   cy.get(this.locators.selectAgencyType)
  .find('option')
  .then(options => {
    const optionCount = options.length;
    const randomIndex = Math.floor(Math.random() * (optionCount - 1)) + 1;

    const randomValue = options[randomIndex].value;

    cy.get(this.locators.selectAgencyType).select(randomValue, { force: true });
  });
cy.wait(2000);
    cy.get(this.locators.selectAgencySubType)
  .find('option')
  .then(options => {
    const optionCount = options.length;
    const randomIndex = Math.floor(Math.random() * (optionCount - 1)) + 1;

    const randomValue = options[randomIndex].value;

    cy.get(this.locators.selectAgencySubType).select(randomValue, { force: true });
  });
cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
    // cy.get(this.locators.clickongenerateENcollectcode).click();
    // cy.wait(2000);
    //Address Details
     cy.get(this.locators.ClickOnAgency_Address_Details).click();
  cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.Type_Agency_Address).type("Green Meadows Res#%$%idency Fifth Cross Street Near Sunrise Park Opposite Lake View Towers Whitefield Main Road Bengaluru Karnataka India Situated Close To Reputed Schools Colleges Major IT Parks Shopping Malls Supermarkets Hospitals Banks And Public Transport Facilities Making It A Convenient Residential Location For Families Professionals And Students Alike");
  cy.wait(2000);
    
    // Function to generate a random 10-digit number
    function generateRandomMobileNumber() {
      const prefix = '07'; // Assuming you want the number to start with '07'
      const randomNumber = Math.floor(Math.random() * 100000000); // Generates an 8-digit number
      const paddedNumber = String(randomNumber).padStart(8, '0'); // Pads with leading zeros if necessary
      return prefix + paddedNumber;
    }
    // Cypress test code
    cy.get(this.locators.mobilenumber).type(generateRandomMobileNumber());
    cy.wait(2000);
    //cy.get(this.locators.mobilenumber).type("0769875425");
    cy.wait(2000);
    cy.get(this.locators.areacode).type("1234");
    cy.wait(2000);
    cy.get(this.locators.landlinenumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.selectstate).select("All");
    cy.wait(2000);
    // Function to generate a random email address
    function generateRandomEmail() {
      const randomString = Math.random().toString(36).substring(2, 11); // Generates a random string
      return `user_${randomString}@yopmail.com`; // Concatenate to form an email address
    }

    // Cypress test code
    cy.get(this.locators.fillemailid).type(generateRandomEmail());
    cy.wait(2000);
    //cy.get(this.locators.fillemailid).type("sachin41@yopmail.com");
    cy.wait(2000);
    cy.get(this.locators.selectcity).select("All",{force: true});
    cy.wait(2000);
    cy.get(this.locators.postalcode).type("123456");
    cy.wait(2000);
    //Banking details
    cy.get(this.locators.clickonbankingdetails).click();
    cy.wait(2000);
    cy.get(this.locators.accountholdername).type("AJAY KUMAR");
    cy.wait(2000);
    cy.get(this.locators.bankaccountnumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.bankname)
  .find('option')
  .then(options => {
    const optionCount = options.length;
    const randomIndex = Math.floor(Math.random() * (optionCount - 1)) + 1;

    const randomValue = options[randomIndex].value;

    cy.get(this.locators.bankname).select(randomValue, { force: true });
  });
cy.wait(2000);

 cy.get(this.locators.bankbranchname)
  .find('option')
  .then(options => {
    const optionCount = options.length;
    const randomIndex = Math.floor(Math.random() * (optionCount - 1)) + 1;

    const randomValue = options[randomIndex].value;

    cy.get(this.locators.bankbranchname).select(randomValue, { force: true });
  });
cy.wait(2000);
    cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
    cy.wait(2000);
    //////////////////////////////////////Documentation_Details/////////////////////////////////////

    //const filePath = 'Aadhar.png';
    const filePath1 = 'adharcard.pdf';

    // Expand the documentation details section
    cy.get(':nth-child(4) > .nav-link > span').click();
    cy.wait(2000);
    //lick on various elements to interact with the UI
    cy.get('#waive--0').click();
    cy.wait(2000);
    cy.get('#waive--3').click();
    cy.wait(2000);
    cy.get('#waive--4').click();
    cy.wait(2000);
    cy.get('#waive--5').click();
    cy.wait(2000);
    cy.get('#waive--6').click();
    cy.wait(2000);
    cy.get('#agencyaddFileBtn-0').click();
    cy.wait(2000);
    cy.get('input[type="file"]').eq(0)
    .attachFile(filePath, { force: true });
    cy.wait(2000);
    cy.get('#agencydocTypeSelect-1').select('Pan Card');
    cy.get('#agencyaddFileBtn-1').click();
    cy.wait(2000);
    cy.get('input[type="file"]').eq(1)
    .attachFile(filePath1, { force: true });
    cy.wait(2000);
    cy.get('input[type="file"]').eq(1)
    .attachFile(filePath1, { force: true });
    cy.wait(2000);
    cy.get('#agencydocTypeSelect-2').select('Aadhar Card');
    cy.get('#agencyaddFileBtn-2').click();
    cy.wait(2000);
    cy.get('input[type="file"]').eq(2)
    .attachFile(filePath1, { force: true });
    cy.wait(2000);
    cy.get('input[type="file"]').eq(3)
    .attachFile(filePath1, { force: true });
    cy.wait(2000);
    cy.get('input[type="file"]').eq(4)
    .attachFile(filePath1, { force: true });
    cy.wait(2000);
    cy.get('input[type="file"]').eq(5)
    .attachFile(filePath1, { force: true });
    cy.wait(2000);
    //////-----------------
    cy.get(this.locators.scopeofword).click();
    cy.wait(2000);
    cy.get(this.locators.productgroup).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.product).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.subproduct).select("Personal Loan");
    cy.wait(2000);
    cy.get(':nth-child(6) > .nav-link > span').click();
    cy.wait(2000);
    cy.get(this.locators.selectpg).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.selectp).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.selectsubp).select("Personal Loan");
    cy.wait(2000);
    cy.get(this.locators.selectbucket).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectregion).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectState).select("All");
    cy.wait(2000);
    cy.get("div[class='p-0 overflow-auto']").scrollTo("right")
    cy.wait(2000);
    cy.get(this.locators.SelectCity).select("All");
    cy.wait(2000);
     cy.get(this.locators.selectmanager)
  .find('option')
  .then(options => {
    const optionCount = options.length;
    const randomIndex = Math.floor(Math.random() * (optionCount - 1)) + 1;

    const randomValue = options[randomIndex].value;

    cy.get(this.locators.selectmanager).select(randomValue, { force: true });
  });
cy.wait(2000);
    cy.wait(2000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).type('02-04-2024').should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).type('01-05-2024').should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.Contactexpiredate).type('30-09-2026').should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.addremark).type("This is ok",{force:true});
    cy.wait(2000);
    cy.get(this.locators.saveagencyprofile).click().should("be.visible");
    cy.wait(2000);
   cy.contains("Special characters are not allowed in the input").should("be.visible");
   cy.wait(2000);
}

UserManagementTestPage_109(){

  cy.get(this.locators.clickonusermanagement).click();
  cy.wait(1000);
  cy.get(this.locators.clickonAgentEmpanelRequest).click({force: true});
  cy.wait(2000);
  cy.get(this.locators.ClickOn_AddAgent).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOnAgent_Address_Details).click();
  cy.wait(2000);
  cy.contains("Local Residential Address").should("be.visible");
  cy.wait(2000);

}

UserManagementTestPage_110(){

cy.get(this.locators.clickonusermanagement).click();
  cy.wait(1000);
  cy.get(this.locators.clickonAgentEmpanelRequest).click({force: true});
  cy.wait(2000);
  cy.get(this.locators.ClickOn_AddAgent).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOnAgent_Address_Details).click();
  cy.wait(2000);
   cy.get(this.locators.Type_Agent_Address).type("Sunrise Residency Lakeview Avenue Near Central Park Opposite Grand Towers Whitefield Main Road Bengaluru Karnataka India Close To Schools Colleges Hospitals Shopping Centers And Public Transport");
  cy.wait(2000);



}

UserManagementTestPage_111(){

  const filePath = "Cypress/fixtures/Aadhar.png";

  cy.get(this.locators.clickonusermanagement).click();
  cy.wait(1000);
  cy.get(this.locators.clickonAgentEmpanelRequest).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.ClickOn_AddAgent).click();
  cy.wait(2000);
  cy.get(this.locators.SelectUsertype).select("Others");
  cy.wait(1000);

  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  cy.get(this.locators.FirstName).type(firstName);
  cy.wait(2000);

  cy.get(this.locators.LastName).type(lastName);
  cy.wait(2000);

  cy.get(this.locators.Agencyname)
    .find("option")
    .then((options) => {
      const randomIndex = Math.floor(Math.random() * options.length); // get random index
      const randomValue = options[randomIndex].value; // get value of random option
      cy.get(this.locators.Agencyname).select(randomValue); // select it
    });

   cy.get(this.locators.SelectAgencyReportManager).click(); 
cy.wait(2000);
cy.get('.ng-dropdown-panel .ng-option')        
  .then(options => {
    const randomIndex = Math.floor(Math.random() * options.length);
    cy.wrap(options[randomIndex]).click();   
  });

  cy.wait(2000);
  cy.get(this.locators.dilarID).type("123").should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.DRACertificateDate)
    .type("16-05-2024")
    .should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.dratrainingdate).type("16-07-2024").should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.DRANumber).type("1234567").should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.Idtype).select("Pan card").should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.UDIDNumberr)
    .type("12345678909876543")
    .should("be.visible");
  cy.wait(2000);

  const filePath1 = "Aadhar.png";
  cy.get(".upload-text").click();
  cy.wait(500);
  cy.get('input[type="file"]').attachFile(filePath1);
  cy.wait(500);

  cy.wait(2000);
  cy.get(":nth-child(2) > .nav-link > span").click();
  cy.wait(2000);
  cy.get(".form-control-group > :nth-child(3) > .btn").click();
  cy.wait(2000);
  cy.get(this.locators.Department).select("Agency Backend");
  cy.wait(2000);
  cy.get(this.locators.designation).select("Agency Backend");
  cy.wait(2000);
  cy.get(":nth-child(4) > .nav-link > span").click().should("be.visible");
  cy.wait(2000);
 cy.get(this.locators.Type_Agent_Address).type("Sunrise Residency Lakeview Avenue Near Central Park Opposite Grand Towers Whitefield Main Road Bengaluru Karnataka India Close To Schools Colleges Hospitals Shopping Centers And Public Transport Facility");
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

    function generateRandomMobileNumber() {
      const prefix = '07'; 
      const randomNumber = Math.floor(Math.random() * 200000000);
      const paddedNumber = String(randomNumber).padStart(8, '0');  
      return prefix + paddedNumber;
    }
    // Cypress test code
    cy.get('input[name="primaryMobileNumber"]').type(generateRandomMobileNumber());
    cy.wait(500);
    function generateRandomEmail() {
      const randomString = Math.random().toString(36).substring(2, 11); 
      return `user_${randomString}@yopmail.com`; 
    }

    // Cypress test code
    cy.get("#emailId").type(generateRandomEmail());
    cy.wait(500);
    cy.get("#dobId").type("11-06-20006");
    cy.wait(2000);
  const randomName = faker.person.fullName().replace(/[^a-zA-Z ]/g, '');
   cy.get("#fatherNameId").type(randomName, { force: true });
cy.wait(2000);
    cy.get(this.locators.Banking_details).click().should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.cust_name).type("Pranshu raj").should('be.visible');
    cy.wait(2000);
    cy.get("input[placeholder='Enter Account Number']").type("456785678776543").should('be.visible');
    cy.wait(2000);

cy.get("select[name='bankName']")
  .find("option")
  .then(options => {
    const count = options.length;
    const randomIndex = Math.floor(Math.random() * (count - 1)) + 1; 
    const randomValue = options[randomIndex].value;

    cy.get("select[name='bankName']").select(randomValue);
  });

cy.wait(1500);
cy.get("select[name='bankBranchId']")
  .find("option")
  .then(options => {
    const count = options.length;
    const randomIndex = Math.floor(Math.random() * (count - 1)) + 1;
    const randomValue = options[randomIndex].value;

    cy.get("select[name='bankBranchId']").select(randomValue);
  });

cy.wait(1500);


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
  cy.contains("Agent Profile has been Submitted for Approval.").should("be.visible")
  cy.wait(2000);


}

UserManagementTestPage_112(){

   const filePath = "Cypress/fixtures/Aadhar.png";

  cy.get(this.locators.clickonusermanagement).click();
  cy.wait(1000);
  cy.get(this.locators.clickonAgentEmpanelRequest).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.ClickOn_AddAgent).click();
  cy.wait(2000);
  cy.get(this.locators.SelectUsertype).select("Others");
  cy.wait(1000);

  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  cy.get(this.locators.FirstName).type(firstName);
  cy.wait(2000);

  cy.get(this.locators.LastName).type(lastName);
  cy.wait(2000);

  cy.get(this.locators.Agencyname)
    .find("option")
    .then((options) => {
      const randomIndex = Math.floor(Math.random() * options.length); // get random index
      const randomValue = options[randomIndex].value; // get value of random option
      cy.get(this.locators.Agencyname).select(randomValue); // select it
    });
cy.wait(2000);
 cy.get(this.locators.SelectAgencyReportManager).click(); 
cy.wait(2000);
cy.get('.ng-dropdown-panel .ng-option')        
  .then(options => {
    const randomIndex = Math.floor(Math.random() * options.length);
    cy.wrap(options[randomIndex]).click();   
  });

  cy.wait(2000);
  cy.get(this.locators.dilarID).type("123").should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.DRACertificateDate)
    .type("16-05-2024")
    .should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.dratrainingdate).type("16-07-2024").should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.DRANumber).type("1234567").should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.Idtype).select("Pan card").should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.UDIDNumberr)
    .type("12345678909876543")
    .should("be.visible");
  cy.wait(2000);

  const filePath1 = "Aadhar.png";
  cy.get(".upload-text").click();
  cy.wait(500);
  cy.get('input[type="file"]').attachFile(filePath1);
  cy.wait(500);

  cy.wait(2000);
  cy.get(":nth-child(2) > .nav-link > span").click();
  cy.wait(2000);
  cy.get(".form-control-group > :nth-child(3) > .btn").click();
  cy.wait(2000);
  cy.get(this.locators.Department).select("Agency Backend");
  cy.wait(2000);
  cy.get(this.locators.designation).select("Agency Backend");
  cy.wait(2000);
  cy.get(":nth-child(4) > .nav-link > span").click().should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.Type_Agent_Address).type("Sunrise Residency Lakeview Avenue Near Central Park Whitefield Main Road Bengaluru Karnataka India");
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

    function generateRandomMobileNumber() {
      const prefix = '07'; 
      const randomNumber = Math.floor(Math.random() * 200000000);
      const paddedNumber = String(randomNumber).padStart(8, '0');  
      return prefix + paddedNumber;
    }
    // Cypress test code
    cy.get('input[name="primaryMobileNumber"]').type(generateRandomMobileNumber());
    cy.wait(500);
    function generateRandomEmail() {
      const randomString = Math.random().toString(36).substring(2, 11); 
      return `user_${randomString}@yopmail.com`; 
    }

    // Cypress test code
    cy.get("#emailId").type(generateRandomEmail());
    cy.wait(500);
    cy.get("#dobId").type("11-06-20006");
    cy.wait(2000);
    
  const randomName = faker.person.fullName().replace(/[^a-zA-Z ]/g, '');
   cy.get("#fatherNameId").type(randomName, { force: true });
cy.wait(2000);
    cy.get(this.locators.Banking_details).click().should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.cust_name).type("Pranshu raj").should('be.visible');
    cy.wait(2000);
    cy.get("input[placeholder='Enter Account Number']").type("456785678776543").should('be.visible');
    cy.wait(2000);

cy.get("select[name='bankName']")
  .find("option")
  .then(options => {
    const count = options.length;
    const randomIndex = Math.floor(Math.random() * (count - 1)) + 1; 
    const randomValue = options[randomIndex].value;

    cy.get("select[name='bankName']").select(randomValue);
  });

cy.wait(1500);
cy.get("select[name='bankBranchId']")
  .find("option")
  .then(options => {
    const count = options.length;
    const randomIndex = Math.floor(Math.random() * (count - 1)) + 1;
    const randomValue = options[randomIndex].value;

    cy.get("select[name='bankBranchId']").select(randomValue);
  });

cy.wait(1500);


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
  cy.contains("Agent Profile has been Submitted for Approval.").should("be.visible")
  cy.wait(2000);


}

UserManagementTestPage_113(){

  const filePath = "Cypress/fixtures/Aadhar.png";

  cy.get(this.locators.clickonusermanagement).click();
  cy.wait(1000);
  cy.get(this.locators.clickonAgentEmpanelRequest).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.ClickOn_AddAgent).click();
  cy.wait(2000);
  cy.get(this.locators.SelectUsertype).select("Others");
  cy.wait(1000);

  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  cy.get(this.locators.FirstName).type(firstName);
  cy.wait(2000);

  cy.get(this.locators.LastName).type(lastName);
  cy.wait(2000);

  cy.get(this.locators.Agencyname)
    .find("option")
    .then((options) => {
      const randomIndex = Math.floor(Math.random() * options.length); // get random index
      const randomValue = options[randomIndex].value; // get value of random option
      cy.get(this.locators.Agencyname).select(randomValue); // select it
    });
cy.wait(2000);
  cy.get(this.locators.SelectAgencyReportManager).click(); 
cy.wait(2000);
cy.get('.ng-dropdown-panel .ng-option')        
  .then(options => {
    const randomIndex = Math.floor(Math.random() * options.length);
    cy.wrap(options[randomIndex]).click();   
  });

  cy.wait(2000);
  cy.get(this.locators.dilarID).type("123").should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.DRACertificateDate)
    .type("16-05-2024")
    .should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.dratrainingdate).type("16-07-2024").should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.DRANumber).type("1234567").should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.Idtype).select("Pan card").should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.UDIDNumberr)
    .type("12345678909876543")
    .should("be.visible");
  cy.wait(2000);

  const filePath1 = "Aadhar.png";
  cy.get(".upload-text").click();
  cy.wait(500);
  cy.get('input[type="file"]').attachFile(filePath1);
  cy.wait(500);

  cy.wait(2000);
  cy.get(":nth-child(2) > .nav-link > span").click();
  cy.wait(2000);
  cy.get(".form-control-group > :nth-child(3) > .btn").click();
  cy.wait(2000);
  cy.get(this.locators.Department).select("Agency Backend");
  cy.wait(2000);
  cy.get(this.locators.designation).select("Agency Backend");
  cy.wait(2000);
  cy.get(":nth-child(4) > .nav-link > span").click().should("be.visible");
  cy.wait(2000);
   cy.get(this.locators.Type_Agent_Address).type("Sunrise Re@dency Lakeview Street Near City Park Whitefie%ld Main Road Bengaluru Karnataka India");
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

    function generateRandomMobileNumber() {
      const prefix = '07'; 
      const randomNumber = Math.floor(Math.random() * 200000000);
      const paddedNumber = String(randomNumber).padStart(8, '0');  
      return prefix + paddedNumber;
    }
    // Cypress test code
    cy.get('input[name="primaryMobileNumber"]').type(generateRandomMobileNumber());
    cy.wait(500);
    function generateRandomEmail() {
      const randomString = Math.random().toString(36).substring(2, 11); 
      return `user_${randomString}@yopmail.com`; 
    }

    // Cypress test code
    cy.get("#emailId").type(generateRandomEmail());
    cy.wait(500);
    cy.get("#dobId").type("11-06-20006");
    cy.wait(2000);
  const randomName = faker.person.fullName().replace(/[^a-zA-Z ]/g, '');
   cy.get("#fatherNameId").type(randomName, { force: true });
cy.wait(2000);
    cy.get(this.locators.Banking_details).click().should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.cust_name).type("Pranshu raj").should('be.visible');
    cy.wait(2000);
    cy.get("input[placeholder='Enter Account Number']").type("456785678776543").should('be.visible');
    cy.wait(2000);

cy.get("select[name='bankName']")
  .find("option")
  .then(options => {
    const count = options.length;
    const randomIndex = Math.floor(Math.random() * (count - 1)) + 1; 
    const randomValue = options[randomIndex].value;

    cy.get("select[name='bankName']").select(randomValue);
  });

cy.wait(1500);
cy.get("select[name='bankBranchId']")
  .find("option")
  .then(options => {
    const count = options.length;
    const randomIndex = Math.floor(Math.random() * (count - 1)) + 1;
    const randomValue = options[randomIndex].value;

    cy.get("select[name='bankBranchId']").select(randomValue);
  });

cy.wait(1500);


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
   cy.contains("Special characters are not allowed in the input").should("be.visible");
   cy.wait(2000);


}

UserManagementTestPage_114(){

  const filePath = "Cypress/fixtures/Aadhar.png";

  cy.get(this.locators.clickonusermanagement).click();
  cy.wait(1000);
  cy.get(this.locators.clickonAgentEmpanelRequest).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.ClickOn_AddAgent).click();
  cy.wait(2000);
  cy.get(this.locators.SelectUsertype).select("Others");
  cy.wait(1000);

  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  cy.get(this.locators.FirstName).type(firstName);
  cy.wait(2000);

  cy.get(this.locators.LastName).type(lastName);
  cy.wait(2000);

  cy.get(this.locators.Agencyname)
    .find("option")
    .then((options) => {
      const randomIndex = Math.floor(Math.random() * options.length); // get random index
      const randomValue = options[randomIndex].value; // get value of random option
      cy.get(this.locators.Agencyname).select(randomValue); // select it
    });
cy.wait(2000);
  cy.get(this.locators.SelectAgencyReportManager).click(); 
cy.wait(2000);
cy.get('.ng-dropdown-panel .ng-option')        
  .then(options => {
    const randomIndex = Math.floor(Math.random() * options.length);
    cy.wrap(options[randomIndex]).click();   
  });

  cy.wait(2000);
  cy.get(this.locators.dilarID).type("123").should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.DRACertificateDate)
    .type("16-05-2024")
    .should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.dratrainingdate).type("16-07-2024").should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.DRANumber).type("1234567").should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.Idtype).select("Pan card").should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.UDIDNumberr)
    .type("12345678909876543")
    .should("be.visible");
  cy.wait(2000);

  const filePath1 = "Aadhar.png";
  cy.get(".upload-text").click();
  cy.wait(500);
  cy.get('input[type="file"]').attachFile(filePath1);
  cy.wait(500);

  cy.wait(2000);
  cy.get(":nth-child(2) > .nav-link > span").click();
  cy.wait(2000);
  cy.get(".form-control-group > :nth-child(3) > .btn").click();
  cy.wait(2000);
  cy.get(this.locators.Department).select("Agency Backend");
  cy.wait(2000);
  cy.get(this.locators.designation).select("Agency Backend");
  cy.wait(2000);
  cy.get(":nth-child(4) > .nav-link > span").click().should("be.visible");
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

    function generateRandomMobileNumber() {
      const prefix = '07'; 
      const randomNumber = Math.floor(Math.random() * 200000000);
      const paddedNumber = String(randomNumber).padStart(8, '0');  
      return prefix + paddedNumber;
    }
    // Cypress test code
    cy.get('input[name="primaryMobileNumber"]').type(generateRandomMobileNumber());
    cy.wait(500);
    function generateRandomEmail() {
      const randomString = Math.random().toString(36).substring(2, 11); 
      return `user_${randomString}@yopmail.com`; 
    }

    // Cypress test code
    cy.get("#emailId").type(generateRandomEmail());
    cy.wait(500);
    cy.get("#dobId").type("11-06-20006");
    cy.wait(2000);
  const randomName = faker.person.fullName().replace(/[^a-zA-Z ]/g, '');
   cy.get("#fatherNameId").type(randomName, { force: true });
cy.wait(2000);
    cy.get(this.locators.Banking_details).click().should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.cust_name).type("Pranshu raj").should('be.visible');
    cy.wait(2000);
    cy.get("input[placeholder='Enter Account Number']").type("456785678776543").should('be.visible');
    cy.wait(2000);

cy.get("select[name='bankName']")
  .find("option")
  .then(options => {
    const count = options.length;
    const randomIndex = Math.floor(Math.random() * (count - 1)) + 1; 
    const randomValue = options[randomIndex].value;

    cy.get("select[name='bankName']").select(randomValue);
  });

cy.wait(1500);
cy.get("select[name='bankBranchId']")
  .find("option")
  .then(options => {
    const count = options.length;
    const randomIndex = Math.floor(Math.random() * (count - 1)) + 1;
    const randomValue = options[randomIndex].value;

    cy.get("select[name='bankBranchId']").select(randomValue);
  });

cy.wait(1500);


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
      cy.get('[role="alert"]').should('contain.text', 'Please fill all the required fields with valid data.');
   cy.wait(2000);

}

UserManagementTestPage_115(){

    cy.get(this.locators.clickonusermanagement).click();
  cy.wait(1000);
  cy.get(this.locators.clickonAgentEmpanelRequest).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.ClickOn_AddAgent).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOnAgent_Address_Details).click();
  cy.wait(2000);
    cy.get(this.locators.Type_Agent_Address).type("Green Meadows Residency Fifth Cross Street Near Sunrise Park Opposite Lake View Towers Whitefield Main Road Bengaluru Karnataka India Situated Close To Reputed Schools Colleges Major IT Parks Shopping Malls Supermarkets Hospitals Banks And Public Transport Facilities Making It A Convenient Residential Location For Families Professionals And Students Alike");
  cy.wait(2000);


}

UserManagementTestPage_116(){

 const filePath = "Cypress/fixtures/Aadhar.png";

  cy.get(this.locators.clickonusermanagement).click();
  cy.wait(1000);
  cy.get(this.locators.clickonAgentEmpanelRequest).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.ClickOn_AddAgent).click();
  cy.wait(2000);
  cy.get(this.locators.SelectUsertype).select("Others");
  cy.wait(1000);

  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  cy.get(this.locators.FirstName).type(firstName);
  cy.wait(2000);

  cy.get(this.locators.LastName).type(lastName);
  cy.wait(2000);

  cy.get(this.locators.Agencyname)
    .find("option")
    .then((options) => {
      const randomIndex = Math.floor(Math.random() * options.length); // get random index
      const randomValue = options[randomIndex].value; // get value of random option
      cy.get(this.locators.Agencyname).select(randomValue); // select it
    });
cy.wait(2000);
  cy.get(this.locators.SelectAgencyReportManager).click(); 
cy.wait(2000);
cy.get('.ng-dropdown-panel .ng-option')        
  .then(options => {
    const randomIndex = Math.floor(Math.random() * options.length);
    cy.wrap(options[randomIndex]).click();   
  });

  cy.wait(2000);
  cy.get(this.locators.dilarID).type("123").should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.DRACertificateDate)
    .type("16-05-2024")
    .should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.dratrainingdate).type("16-07-2024").should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.DRANumber).type("1234567").should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.Idtype).select("Pan card").should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.UDIDNumberr)
    .type("12345678909876543")
    .should("be.visible");
  cy.wait(2000);

  const filePath1 = "Aadhar.png";
  cy.get(".upload-text").click();
  cy.wait(500);
  cy.get('input[type="file"]').attachFile(filePath1);
  cy.wait(500);

  cy.wait(2000);
  cy.get(":nth-child(2) > .nav-link > span").click();
  cy.wait(2000);
  cy.get(".form-control-group > :nth-child(3) > .btn").click();
  cy.wait(2000);
  cy.get(this.locators.Department).select("Agency Backend");
  cy.wait(2000);
  cy.get(this.locators.designation).select("Agency Backend");
  cy.wait(2000);
  cy.get(":nth-child(4) > .nav-link > span").click().should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.Type_Agent_Address).type("Green Meadows Residency Fifth Cross Street Near Sunrise Park Opposite Lake View Towers Whitefield Main Road Bengaluru Karnataka India Situated Close To Reputed Schools Colleges Major IT Parks Shopping Malls Supermarkets Hospitals Banks And Public Transport Facilities Making It A Convenient Residential Location For Families Professionals And Students Alike");
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

    function generateRandomMobileNumber() {
      const prefix = '07'; 
      const randomNumber = Math.floor(Math.random() * 200000000);
      const paddedNumber = String(randomNumber).padStart(8, '0');  
      return prefix + paddedNumber;
    }
    // Cypress test code
    cy.get('input[name="primaryMobileNumber"]').type(generateRandomMobileNumber());
    cy.wait(500);
    function generateRandomEmail() {
      const randomString = Math.random().toString(36).substring(2, 11); 
      return `user_${randomString}@yopmail.com`; 
    }

    // Cypress test code
    cy.get("#emailId").type(generateRandomEmail());
    cy.wait(500);
    cy.get("#dobId").type("11-06-20006");
    cy.wait(2000);
  const randomName = faker.person.fullName().replace(/[^a-zA-Z ]/g, '');
   cy.get("#fatherNameId").type(randomName, { force: true });
cy.wait(2000);
    cy.get(this.locators.Banking_details).click().should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.cust_name).type("Pranshu raj").should('be.visible');
    cy.wait(2000);
    cy.get("input[placeholder='Enter Account Number']").type("456785678776543").should('be.visible');
    cy.wait(2000);

cy.get("select[name='bankName']")
  .find("option")
  .then(options => {
    const count = options.length;
    const randomIndex = Math.floor(Math.random() * (count - 1)) + 1; 
    const randomValue = options[randomIndex].value;

    cy.get("select[name='bankName']").select(randomValue);
  });

cy.wait(1500);
cy.get("select[name='bankBranchId']")
  .find("option")
  .then(options => {
    const count = options.length;
    const randomIndex = Math.floor(Math.random() * (count - 1)) + 1;
    const randomValue = options[randomIndex].value;

    cy.get("select[name='bankBranchId']").select(randomValue);
  });

cy.wait(1500);


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
  cy.contains("Agent Profile has been Submitted for Approval.").should("be.visible")
  cy.wait(2000);


}

PanCardTestPage_01(){

  cy.get(this.locators.clickonusermanagement).click();
  cy.wait(1000);
  cy.get(this.locators.clickonAgencyEmpanelRequest).click({force: true});
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Search_Agency).click();
  cy.wait(2000);
  cy.get(this.locators.Select_Agency_status).select("Approved");
  cy.wait(2000);
  cy.get(this.locators.Click_On_Submit).click();
  cy.wait(4000);
  cy.get('tbody > :nth-child(2) > :nth-child(5) > .form-control-group > .form-check-group > label > input').click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Edit).click();
  cy.wait(3000);
  cy.contains("Edit Agency").should("be.visible");
  cy.wait(1000);
  cy.get(this.locators.ClickOn_Pancard).clear();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Pancard).clear().type("BNZAA1234F");
  cy.wait(2000);
  cy.get(":nth-child(2) > .nav-link > span").click().should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.Type_Agency_Address).type("Sunrise Residency Lakeview Street Near City Park Whitefield Main Road Bengaluru Karnataka India");
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Submit_afterEdit).click({force: true});
  cy.wait(3000);
  cy.get('[role="alert"]').should('be.visible').and('contain', 'Agency Profile has been Submitted for Approval.');
  cy.wait(2000);

}


 generateRandomPAN() {
        // Generate the PAN and store it in Cypress.env (to persist across tests)
        const generatedPAN = faker.string.alpha({ length: 5 }).toUpperCase() + 
                             faker.number.int({ min: 1000, max: 9999 }) + 
                             faker.string.alpha({ length: 1 }).toUpperCase();
        Cypress.env('generatedPAN', generatedPAN);  // Store it in Cypress.env
        return generatedPAN;
 }

PanCardTestPage_02(){

  const generatedPAN = this.generateRandomPAN();

   cy.get(this.locators.clickonusermanagement).click();
  cy.wait(1000);
  cy.get(this.locators.clickonAgencyEmpanelRequest).click({force: true});
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Search_Agency).click();
  cy.wait(2000);
  cy.get(this.locators.Type_Agency_Name).type("Kinder");
  cy.wait(2000);
  cy.get(this.locators.Select_Agency_status).select("Approved");
  cy.wait(2000);
  cy.get(this.locators.Click_On_Submit).click();
  cy.wait(4000);
  cy.get('tbody > :nth-child(1) > :nth-child(5) > .form-control-group > .form-check-group > label > input').click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Edit).click();
  cy.wait(3000);
  cy.contains("Edit Agency").should("be.visible");
  cy.wait(1000);
  cy.get(this.locators.ClickOn_Pancard).clear();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Pancard).type(generatedPAN);
  cy.wait(2000);
  // cy.get(":nth-child(2) > .nav-link > span").click().should("be.visible");
  // cy.wait(2000);
  // cy.get(this.locators.Type_Agency_Address).clear().type("Sunrise Residency Lakeview Street Near City Park Whitefield Main Road Bengaluru Karnataka India");
  // cy.wait(2000);
  cy.get(this.locators.ClickOn_Submit_afterEdit).click();
  cy.wait(8000);
  cy.get('[role="alert"]').should('be.visible').and('contain', 'Agency Profile has been Submitted for Approval.');
  cy.wait(2000);

}

PanCardTestPage_02a(){

  const generatedPAN = Cypress.env('generatedPAN');

   cy.get(this.locators.clickonusermanagement).click();
  cy.wait(1000);
  cy.get(this.locators.clickonAgencyEmpanelRequest).click({force: true});
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Search_Agency).click();
  cy.wait(2000);
   cy.get(this.locators.Type_Agency_Name).type("Kinder");
  cy.wait(2000);
  cy.get(this.locators.Select_Agency_status).select("Pending Approval");
  cy.wait(2000);
  cy.get(this.locators.Click_On_Submit).click();
  cy.wait(4000);
  cy.get('tbody > :nth-child(1) > :nth-child(5) > .form-control-group > .form-check-group > label > input').click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Approve).click();
  cy.wait(2000);  
    cy.get('[role="alert"]').should('be.visible').and('contain', 'Agency Approved Successfully');
  cy.wait(4000);
    cy.get(this.locators.Type_Agency_Name).clear().type("Kinder");
  cy.wait(2000);
  cy.get(this.locators.Select_Agency_status).select("Approved");
  cy.wait(2000);
  cy.get(this.locators.Click_On_Submit).click();
  cy.wait(6000);
  cy.get('tbody > :nth-child(1) > :nth-child(5) > .form-control-group > .form-check-group > label > input').click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Edit).click();
  cy.wait(7000);
  cy.contains("Edit Agency").should("be.visible");
  cy.wait(1000);
   cy.get(this.locators.ClickOn_Pancard).should("have.value", generatedPAN); 
  cy.wait(2000);

}

PanCardTestPage_03(){

 cy.get(this.locators.clickonusermanagement).click();
  cy.wait(1000);
  cy.get(this.locators.clickonAgencyEmpanelRequest).click({force: true});
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Search_Agency).click();
  cy.wait(2000);
  cy.get(this.locators.Select_Agency_status).select("Approved");
  cy.wait(2000);
  cy.get(this.locators.Click_On_Submit).click();
  cy.wait(4000);
  cy.get('tbody > :nth-child(2) > :nth-child(5) > .form-control-group > .form-check-group > label > input').click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Edit).click();
  cy.wait(3000);
  cy.contains("Edit Agency").should("be.visible");
  cy.wait(1000);
  cy.get(this.locators.ClickOn_Pancard).clear();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Pancard).clear().type("124589");
  cy.wait(2000);
   cy.contains("Enter a valid pan card number.").should("be.visible");
   cy.wait(2000);


}

PanCardTestPage_04(){

 cy.get(this.locators.clickonusermanagement).click();
  cy.wait(1000);
  cy.get(this.locators.clickonAgencyEmpanelRequest).click({force: true});
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Search_Agency).click();
  cy.wait(2000);
  cy.get(this.locators.Select_Agency_status).select("Approved");
  cy.wait(2000);
  cy.get(this.locators.Click_On_Submit).click();
  cy.wait(4000);
  cy.get('tbody > :nth-child(2) > :nth-child(5) > .form-control-group > .form-check-group > label > input').click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Edit).click();
  cy.wait(3000);
  cy.contains("Edit Agency").should("be.visible");
  cy.wait(1000);
  cy.get(this.locators.ClickOn_Pancard).clear();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Pancard).clear();
  cy.wait(2000);
   cy.contains("Please enter pan card number.").should("be.visible");
   cy.wait(2000);

}

PanCardTestPage_05(){

 cy.get(this.locators.clickonusermanagement).click();
  cy.wait(1000);
  cy.get(this.locators.clickonAgencyEmpanelRequest).click({force: true});
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Search_Agency).click();
  cy.wait(2000);
    cy.get(this.locators.Type_Agency_Name).type("Kinder");
  cy.wait(2000);
  cy.get(this.locators.Select_Agency_status).select("Approved");
  cy.wait(2000);
  cy.get(this.locators.Click_On_Submit).click();
  cy.wait(4000);
  cy.get('tbody > :nth-child(2) > :nth-child(5) > .form-control-group > .form-check-group > label > input').click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Edit).click();
  cy.wait(3000);
  cy.contains("Edit Agency").should("be.visible");
  cy.wait(2000);

  cy.get(this.locators.ClickOn_Pancard).invoke("val").as("copiedPan");
cy.wait(2000);

  cy.get(this.locators.ClickOn_Pancard).clear();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Pancard).type("BNZAA1234F");
  cy.wait(2000);  
   cy.get(this.locators.Clickon_Cancel_afteredit).click();
  cy.wait(2000);

    cy.get(this.locators.ClickOn_Search_Agency).click();
  cy.wait(2000);
    cy.get(this.locators.Type_Agency_Name).type("Kinder");
  cy.wait(2000);
  cy.get(this.locators.Select_Agency_status).select("Approved");
  cy.wait(2000);
  cy.get(this.locators.Click_On_Submit).click();
  cy.wait(4000);
  cy.get('tbody > :nth-child(2) > :nth-child(5) > .form-control-group > .form-check-group > label > input').click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Edit).click();
  cy.wait(3000);
  cy.contains("Edit Agency").should("be.visible");
  cy.wait(1000);
  
  cy.get("@copiedPan").then((panValue) => {
  cy.get(this.locators.ClickOn_Pancard)
    .invoke("val")
    .should("eq", panValue);
});
cy.wait(2000);
   

}

PanCardTestPage_06(){



}
PanCardTestPage_07(){

   cy.get(this.locators.clickonusermanagement).click();
  cy.wait(1000);
  cy.get(this.locators.clickonAgencyEmpanelRequest).click({force: true});
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Search_Agency).click();
  cy.wait(2000);
  cy.get(this.locators.Select_Agency_status).select("Approved");
  cy.wait(2000);
  cy.get(this.locators.Click_On_Submit).click();
  cy.wait(4000);
  cy.get('tbody > :nth-child(2) > :nth-child(5) > .form-control-group > .form-check-group > label > input').click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Edit).click();
  cy.wait(3000);
  cy.contains("Edit Agency").should("be.visible");
  cy.wait(1000);
  cy.get(this.locators.ClickOn_Pancard).clear();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Pancard).clear().type("ADER@89$4");
  cy.wait(2000);
   cy.contains("Enter a valid pan card number.").should("be.visible");
   cy.wait(2000);

}

PanCardTestPage_08(){

  cy.get(this.locators.clickonusermanagement).click();
  cy.wait(1000);
  cy.get(this.locators.clickonAgencyEmpanelRequest).click({force: true});
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Search_Agency).click();
  cy.wait(2000);
  cy.get(this.locators.Type_Agency_Name).type("Kinder");
  cy.wait(2000);
  cy.get(this.locators.Select_Agency_status).select("Approved");
  cy.wait(2000);
  cy.get(this.locators.Click_On_Submit).click();
  cy.wait(4000);
  cy.get('tbody > :nth-child(2) > :nth-child(5) > .form-control-group > .form-check-group > label > input').click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Edit).click();
  cy.wait(3000);
  cy.contains("Edit Agency").should("be.visible");
  cy.wait(1000);
  cy.get(':nth-child(8) > .nav-link > span').click();
  cy.wait(2000);

  const today = new Date().toLocaleDateString("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});
cy.contains(today).should("be.visible");
cy.wait(2000);
  cy.contains("AgencyApproved").should("be.visible");
  cy.wait(2000);
  cy.contains("AgencyPendingApproval").should("be.visible");
  cy.wait(2000);



}


}




export default UserManagementPage;
