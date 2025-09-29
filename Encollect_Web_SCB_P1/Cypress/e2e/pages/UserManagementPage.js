import { getLocators } from '../utils/locatorUtils';
import { getBaseUrl } from '../utils/configUtils';
import { faker } from '@faker-js/faker';



class UserManagementPage {
  constructor(locators) {
    this.locators = locators;
  }

  UserManagementModule() {
    cy.get(this.locators.clickonusermanagement).click();
  }


  CreateAgency() {
    const filePath = 'Aadhar.png';
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.ClickOnAddAgency).click();
    cy.wait(2000);

    const agencyNameRaw = faker.word.sample({ length: { min: 6, max: 12 } });
const agencyName = agencyNameRaw.charAt(0).toUpperCase() + agencyNameRaw.slice(1);
cy.get(this.locators.fillAgencyName).type(agencyName);
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
  .then($options => {
    const optionsCount = $options.length;
    const randomIndex = Math.floor(Math.random() * optionsCount); 
    const randomValue = $options[randomIndex].value; 

    cy.get(this.locators.selectAgencyType).select(randomValue, { force: true });
  });

cy.wait(2000);
     cy.get(this.locators.selectAgencySubType)
  .find('option') 
  .then($options => {
    const optionsCount = $options.length;
    const randomIndex = Math.floor(Math.random() * optionsCount); 
    const randomValue = $options[randomIndex].value; 

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
    cy.get(this.locators.clickonaddressdetails).click();
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
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
    cy.get(this.locators.bankname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.bankbranchname).select("ADCC BANK");
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
    cy.get(this.locators.placeofwork).click();
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
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectmanager).select(randomValue);
  });cy.wait(2000);
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
    cy.wait(4000);
    //cy.contains("Agency profile is Saved as Draft.").should("be.visible");
  }

  CreateAgency75() {
    const filePath = 'Aadhar.png';
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.ClickOnAddAgency).click();
    cy.wait(2000);
   const agencyNameRaw = faker.word.sample({ length: { min: 6, max: 12 } });
const agencyName = agencyNameRaw.charAt(0).toUpperCase() + agencyNameRaw.slice(1);
cy.get(this.locators.fillAgencyName).type(agencyName);
cy.wait(2000);   
 cy.get(this.locators.selectRecommendingOfficer)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectRecommendingOfficer).select(randomValue);
  });
      cy.get(this.locators.selectAgencyType)
  .find('option') 
  .then($options => {
    const optionsCount = $options.length;
    const randomIndex = Math.floor(Math.random() * optionsCount); 
    const randomValue = $options[randomIndex].value; 

    cy.get(this.locators.selectAgencyType).select(randomValue, { force: true });
  });

cy.wait(2000);    

cy.get(this.locators.selectAgencySubType)
  .find('option') 
  .then($options => {
    const optionsCount = $options.length;
    const randomIndex = Math.floor(Math.random() * optionsCount); 
    const randomValue = $options[randomIndex].value; 

    cy.get(this.locators.selectAgencySubType).select(randomValue, { force: true });
  });

cy.wait(1000);
    cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
     // cy.get(this.locators.clickongenerateENcollectcode).click();
    // cy.wait(2000);
    //Address Details
    cy.get(this.locators.clickonaddressdetails).click();
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
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
    cy.get(this.locators.bankname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.bankbranchname).select("ADCC BANK");
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
    cy.get(this.locators.placeofwork).click();
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
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectmanager).select(randomValue);
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
    cy.get('#btn-submit').click();
    cy.wait(4000);
    cy.contains("Agency Profile has been Submitted for Approval.").should("be.visible");
  }

  CreateAgency008() {
    const filePath = 'Aadhar.png';
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click();
    cy.get(this.locators.ClickOnAddAgency).click();
    cy.wait(2000);
   const agencyNameRaw = faker.word.sample({ length: { min: 6, max: 12 } });
const agencyName = agencyNameRaw.charAt(0).toUpperCase() + agencyNameRaw.slice(1);
cy.get(this.locators.fillAgencyName).type(agencyName);
cy.wait(2000);   
 cy.get(this.locators.selectRecommendingOfficer)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectRecommendingOfficer).select(randomValue);
  });
      cy.get(this.locators.selectAgencyType)
  .find('option') 
  .then($options => {
    const optionsCount = $options.length;
    const randomIndex = Math.floor(Math.random() * optionsCount); 
    const randomValue = $options[randomIndex].value; 

    cy.get(this.locators.selectAgencyType).select(randomValue, { force: true });
  });

cy.wait(1000);     

cy.get(this.locators.selectAgencySubType)
  .find('option') 
  .then($options => {
    const optionsCount = $options.length;
    const randomIndex = Math.floor(Math.random() * optionsCount); 
    const randomValue = $options[randomIndex].value; 

    cy.get(this.locators.selectAgencySubType).select(randomValue, { force: true });
  });

cy.wait(1000);
    cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
     // cy.get(this.locators.clickongenerateENcollectcode).click();
    // cy.wait(2000);
    //Address Details
    cy.get(this.locators.clickonaddressdetails).click();
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
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
    cy.get(this.locators.selectcity).select("All");
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
    cy.get(this.locators.bankname).select("SBI");
    cy.wait(2000);
    cy.get(this.locators.bankbranchname).select("YamunaNagar");
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
    cy.get(this.locators.productgroup).select("All");
    cy.wait(2000);
    cy.get(this.locators.product).select("All");
    cy.wait(2000);
    cy.get(this.locators.subproduct).select("All");
    cy.wait(2000);
    cy.get(this.locators.placeofwork).click();
    cy.wait(2000);
    cy.get(this.locators.selectpg).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectp).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectsubp).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectbucket).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectregion).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectState).select("All");
    cy.wait(2000);
    cy.get("div[class='p-0 overflow-auto']").scrollTo("right");
    cy.wait(2000);
    cy.get(this.locators.SelectCity).select("All");
    cy.wait(2000);
       cy.get(this.locators.selectmanager)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectmanager).select(randomValue);
  });
  cy.wait(2000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).type('02-04-2024');
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).type('06-05-2024');
    cy.wait(2000);
    cy.get(this.locators.Contactexpiredate).type('30-09-2026');
    cy.wait(2000);
    cy.get(this.locators.addremark).type("This is ok",{force:true});
    cy.wait(2000);
    cy.get(this.locators.submitagency).click({force : true});
    cy.wait(3000);
    cy.contains("Agency Profile has been Submitted for Approval.").should("be.visible");
    cy.wait(4000);
   

  }
  CreateAgency008again(){
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(':nth-child(2) > a.ng-star-inserted > span').click();
    cy.wait(2000);
    cy.get('#Select').select("Approved");
    cy.wait(2000);
    cy.get('.btn').click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(5) > input').click();
    cy.wait(2000);
    //cy.get('.btn-danger.ng-star-inserted').click();
    //cy.wait(3000);
    //cy.get('.ng-trigger').should('be.visible');
    //cy.wait(3000);

  }

  SearchAgency_087(){

    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click();
    cy.wait(2000);



  }


  DisabledAgent(){
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get('.user-management > :nth-child(2) > :nth-child(2) > a.ng-star-inserted').click();
    cy.wait(2000);
    cy.get('.user-management > :nth-child(2) > :nth-child(2) > .sub-nav-list > :nth-child(2) > a').click();
    cy.wait(2000);
    cy.get('#empStatus').select("Approved");
    cy.wait(2000);
    cy.get('#btn-search').click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(9) > .form-control-group > .form-check-group > label > input').click();
    cy.wait(2000);
    cy.get('#disableReason').scrollIntoView().should('be.visible').type('Okay');
  cy.get('#btn-disable').click();
  cy.wait(300);
  }

  

  CreateAgency028() {
    const filePath = 'Aadhar.png';
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click();
    cy.get(this.locators.ClickOnAddAgency).click();
    cy.wait(2000);
   const agencyNameRaw = faker.word.sample({ length: { min: 6, max: 12 } });
const agencyName = agencyNameRaw.charAt(0).toUpperCase() + agencyNameRaw.slice(1);
cy.get(this.locators.fillAgencyName).type(agencyName);
cy.wait(2000);     
cy.get(this.locators.selectRecommendingOfficer)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectRecommendingOfficer).select(randomValue);
  });
      cy.get(this.locators.selectAgencyType)
  .find('option') 
  .then($options => {
    const optionsCount = $options.length;
    const randomIndex = Math.floor(Math.random() * optionsCount); 
    const randomValue = $options[randomIndex].value; 

    cy.get(this.locators.selectAgencyType).select(randomValue, { force: true });
  });

cy.wait(1000);    

cy.get(this.locators.selectAgencySubType)
  .find('option') 
  .then($options => {
    const optionsCount = $options.length;
    const randomIndex = Math.floor(Math.random() * optionsCount); 
    const randomValue = $options[randomIndex].value; 

    cy.get(this.locators.selectAgencySubType).select(randomValue, { force: true });
  });

cy.wait(1000);
    cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
    // cy.get(this.locators.clickongenerateENcollectcode).click();
    // cy.wait(2000);
    //Address Details
    cy.get(this.locators.clickonaddressdetails).click();
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
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
    cy.get(this.locators.selectcity).select("All");
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
    cy.get(this.locators.bankname).select("SBI");
    cy.wait(2000);
    cy.get(this.locators.bankbranchname).select("YamunaNagar");
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
    cy.get(this.locators.productgroup).select("All");
    cy.wait(2000);
    cy.get(this.locators.product).select("All");
    cy.wait(2000);
    cy.get(this.locators.subproduct).select("All");
    cy.wait(2000);
    cy.get(this.locators.placeofwork).click();
    cy.wait(2000);
    cy.get(this.locators.selectpg).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectp).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectsubp).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectbucket).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectregion).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectState).select("All");
    cy.wait(2000);
    cy.get("div[class='p-0 overflow-auto']").scrollTo("right");
    cy.wait(2000);
    cy.get(this.locators.SelectCity).select("All");
    cy.wait(2000);
       cy.get(this.locators.selectmanager)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectmanager).select(randomValue);
  });
  cy.wait(2000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).type('02-04-2024');
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).type('06-05-2024');
    cy.wait(2000);
    cy.get(this.locators.Contactexpiredate).type('30-09-2026');
    cy.wait(2000);
    cy.get(this.locators.addremark).type("This is ok",{force:true});
    cy.wait(2000);
    cy.get(this.locators.submitagency).click({force : true});
    cy.wait(2000);
    cy.contains("Agency Profile has been Submitted for Approval.").should("be.visible");
    cy.wait(7000)
   
  }

  

  CreateAgency028again() {
    const filePath = 'Aadhar.png';
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click();
    cy.wait(2000);
   const agencyNameRaw = faker.word.sample({ length: { min: 6, max: 12 } });
const agencyName = agencyNameRaw.charAt(0).toUpperCase() + agencyNameRaw.slice(1);
cy.get(this.locators.fillAgencyName).type(agencyName);
cy.wait(2000);    
cy.get(this.locators.selectRecommendingOfficer)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectRecommendingOfficer).select(randomValue);
  });
      cy.get(this.locators.selectAgencyType)
  .find('option') 
  .then($options => {
    const optionsCount = $options.length;
    const randomIndex = Math.floor(Math.random() * optionsCount); 
    const randomValue = $options[randomIndex].value; 

    cy.get(this.locators.selectAgencyType).select(randomValue, { force: true });
  });

cy.wait(1000);    
 cy.get(this.locators.selectAgencySubType)
  .find('option') 
  .then($options => {
    const optionsCount = $options.length;
    const randomIndex = Math.floor(Math.random() * optionsCount); 
    const randomValue = $options[randomIndex].value; 

    cy.get(this.locators.selectAgencySubType).select(randomValue, { force: true });
  });

cy.wait(1000);
    cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
     // cy.get(this.locators.clickongenerateENcollectcode).click();
    // cy.wait(2000);
    //Address Details
    cy.get(this.locators.clickonaddressdetails).click();
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
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
    cy.get(this.locators.selectcity).select("All");
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
    cy.get(this.locators.bankname).select("SBI");
    cy.wait(2000);
    cy.get(this.locators.bankbranchname).select("YamunaNagar");
    cy.wait(2000);
    cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
    cy.wait(2000);
    //////////////////////////////////////Documentation_Details/////////////////////////////////////

    // Expand the documentation details section
    cy.get('[heading="Documentation Details"] > .panel > .panel-heading > .panel-title > .accordion-toggle').click();
    cy.wait(2000);

    // Click on various elements to interact with the UI
    cy.get('.col-md-12 > .table-responsive > .table > tbody > :nth-child(1) > :nth-child(6) > .ng-untouched').click();
    cy.wait(2000);
    cy.get(':nth-child(4) > :nth-child(6) > .ng-untouched').click();
    cy.wait(2000);
    cy.get(':nth-child(5) > :nth-child(6) > .ng-untouched').click();
    cy.wait(2000);
    cy.get(':nth-child(6) > :nth-child(6) > .ng-untouched').click();
    cy.wait(2000);
    cy.get(':nth-child(7) > :nth-child(6) > .ng-untouched').click();
    cy.wait(2000);

    // Ensure the parent div is visible before proceeding
    cy.get('.panel-collapse.collapse').should('be.visible', { timeout: 20000 });

    // Select the option in the dropdown
    cy.get('tbody > :nth-child(2) > :nth-child(2) > .form-control').select('Pan Card', { force: true });
    cy.wait(2000);

    cy.wait(2000);

    cy.get('span.btn-file').eq(0).should('be.visible');

    // Select the file input element within the span and attach a file
    cy.get('span.btn-file input[type="file"]').eq(0).then($input => {
      // Force the visibility of the input
      $input.css('opacity', '0').attr('disabled', false);
      cy.wait(2000);
      // Use selectFile to attach the file
      cy.wrap($input).selectFile('cypress/fixtures/adharcard.pdf', { force: true });
    });

    // Ensure the file upload button is visible
    cy.get('span.btn-file').eq(1).should('be.visible');

    // Select the file input element within the span and attach a file
    cy.get('span.btn-file input[type="file"]').eq(1).then($input => {
      // Force the visibility of the input
      $input.css('opacity', '1').attr('disabled', false);
      cy.wait(2000);
      // Use selectFile to attach the file
      cy.wrap($input).selectFile('cypress/fixtures/adharcard.pdf', { force: true });
    });

    cy.wait(2000);

    // Ensure the parent div is visible before proceeding
    cy.get('.panel-collapse.collapse').should('be.visible', { timeout: 20000 });
    cy.wait(2000);

    // Select another option in the dropdown
    cy.get('tbody > :nth-child(3) > :nth-child(2) > .form-control').select('Ration Card', { force: true });
    cy.wait(2000);

    // // Enable the second file input field, attach the file
    // Ensure the file upload button is visible
    cy.get('span.btn-file').eq(2).should('be.visible');

    // Select the file input element within the span and attach a file
    cy.get('span.btn-file input[type="file"]').eq(2).then($input => {
      // Force the visibility of the input
      $input.css('opacity', '2').attr('disabled', false);
      cy.wait(2000);
      // Use selectFile to attach the file
      cy.wrap($input).selectFile('cypress/fixtures/adharcard.pdf', { force: true });
    });

    cy.wait(2000);



    cy.wait(2000);

    cy.get('span.btn-file').eq(3).should('be.visible');

    // Select the file input element within the span and attach a file
    cy.get('span.btn-file input[type="file"]').eq(3).then($input => {
      // Force the visibility of the input
      $input.css('opacity', '3').attr('disabled', false);
      cy.wait(2000);
      // Use selectFile to attach the file
      cy.wrap($input).selectFile('cypress/fixtures/adharcard.pdf', { force: true });
    });



    cy.wait(2000);

    cy.get('span.btn-file').eq(4).should('be.visible');

    // Select the file input element within the span and attach a file
    cy.get('span.btn-file input[type="file"]').eq(4).then($input => {
      // Force the visibility of the input
      $input.css('opacity', '4').attr('disabled', false);
      cy.wait(2000);
      // Use selectFile to attach the file
      cy.wrap($input).selectFile('cypress/fixtures/adharcard.pdf', { force: true });
    });



    cy.wait(2000);

    cy.get('span.btn-file').eq(5).should('be.visible');

    // Select the file input element within the span and attach a file
    cy.get('span.btn-file input[type="file"]').eq(5).then($input => {
      // Force the visibility of the input
      $input.css('opacity', '5').attr('disabled', false);
      cy.wait(2000);
      // Use selectFile to attach the file
      cy.wrap($input).selectFile('cypress/fixtures/adharcard.pdf', { force: true });
    });


    cy.wait(2000);

    cy.get('span.btn-file').eq(6).should('be.visible');

    // Select the file input element within the span and attach a file
    cy.get('span.btn-file input[type="file"]').eq(6).then($input => {
      // Force the visibility of the input
      $input.css('opacity', '6').attr('disabled', false);
      cy.wait(2000);
      // Use selectFile to attach the file
      cy.wrap($input).selectFile('cypress/fixtures/adharcard.pdf', { force: true });
    });

    // Ensure the parent div is visible before proceeding
    cy.get('.panel-collapse.collapse').should('be.visible', { timeout: 20000 });
    cy.wait(2000);


    //////-----------------
    cy.get(this.locators.scopeofword).click();
    cy.wait(2000);
    cy.get(this.locators.productgroup).select("All");
    cy.wait(2000);
    cy.get(this.locators.product).select("All");
    cy.wait(2000);
    cy.get(this.locators.subproduct).select("All");
    cy.wait(2000);
    cy.get(this.locators.placeofwork).click();
    cy.wait(2000);
    cy.get(this.locators.selectpg).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectp).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectsubp).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectbucket).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectregion).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectState).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectCity).select("All");
    cy.wait(2000);
       cy.get(this.locators.selectmanager)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectmanager).select(randomValue);
  });
  cy.wait(2000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).type('02-04-2024');
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).type('06-05-2024');
    cy.wait(2000);
    cy.get(this.locators.Contactexpiredate).type('30-09-2026');
    cy.wait(2000);
    cy.get(this.locators.addremark).type("This is ok",{force:true});
    cy.wait(3000);
    cy.get(this.locators.submitagency).click({force : true});
    cy.wait(3000);
   
  }

  CreateAgency029again() {
    const filePath = 'Aadhar.png';
    const filePath1 = 'adharcard.pdf';
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnAddAgency).click();
    // cy.get('#Select').select("Pending Approval");
    // cy.wait(3000);
    // cy.get('.btn').click();
    // cy.wait(3000);
    // cy.get('tbody > :nth-child(1) > :nth-child(5) > input').click();
    // cy.wait(3000);
    // cy.get('.btn-success').click();
    // cy.wait(3000);
    // cy.get('.ng-trigger').should('be.visible');
    // cy.wait(50000);
    // cy.get('#Select').select("Approved");
    // cy.wait(3000);
    // cy.get('.btn').click();
    // cy.wait(3000);
    // cy.get('tbody > :nth-child(1) > :nth-child(2)').should('be.visible');
    // cy.wait(50000);
    // cy.get('tbody > :nth-child(1) > :nth-child(5) > input').click();
    // cy.wait(3000);
    // cy.get('div > .btn-primary').click();
    // cy.wait(3000);
    // cy.get(this.locators.selectAgencyType).select("Collections");
    // cy.wait(3000);
    // cy.get(this.locators.selectAgencySubType).select("Tele calling");
    // cy.wait(3000);
    // cy.get('.col-md-12 > .btn-primary').click();
    // cy.wait(100);
    // cy.get('.ng-trigger').should('be.visible');
    // cy.wait(50000);
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
     //cy.contains("Create Agency").should("be.visible");
  }

  CreateAgency030() {
    const filePath = 'Aadhar.png';
    const filePath1 = 'adharcard.pdf';
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click();
    cy.get(this.locators.AddAgencey).click();
    cy.wait(2000);
   const agencyNameRaw = faker.word.sample({ length: { min: 6, max: 12 } });
const agencyName = agencyNameRaw.charAt(0).toUpperCase() + agencyNameRaw.slice(1);
cy.get(this.locators.fillAgencyName).type(agencyName);
cy.wait(2000);   
 cy.get(this.locators.selectRecommendingOfficer)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectRecommendingOfficer).select(randomValue);
  });
      cy.get(this.locators.selectAgencyType)
  .find('option') 
  .then($options => {
    const optionsCount = $options.length;
    const randomIndex = Math.floor(Math.random() * optionsCount); 
    const randomValue = $options[randomIndex].value; 

    cy.get(this.locators.selectAgencyType).select(randomValue, { force: true });
  });

cy.wait(1000);    
 cy.get(this.locators.selectAgencySubType)
  .find('option') 
  .then($options => {
    const optionsCount = $options.length;
    const randomIndex = Math.floor(Math.random() * optionsCount); 
    const randomValue = $options[randomIndex].value; 

    cy.get(this.locators.selectAgencySubType).select(randomValue, { force: true });
  });

cy.wait(1000);
    cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
     // cy.get(this.locators.clickongenerateENcollectcode).click();
    // cy.wait(2000);
    //Address Details
    cy.get(this.locators.clickonaddressdetails).click();
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
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
    cy.get(this.locators.selectcity).select("All");
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
    cy.get(this.locators.bankname).select("SBI");
    cy.wait(2000);
    cy.get(this.locators.bankbranchname).select("YamunaNagar");
    cy.wait(2000);
    cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
    cy.wait(2000);
    //////////////////////////////////////Documentation_Details/////////////////////////////////////

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
    cy.get(this.locators.productgroup).select("All");
    cy.wait(2000);
    cy.get(this.locators.product).select("All");
    cy.wait(2000);
    cy.get(this.locators.subproduct).select("All");
    cy.wait(2000);
    cy.get(this.locators.placeofwork).click();
    cy.wait(2000);
    cy.get(this.locators.selectpg).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectp).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectsubp).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectbucket).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectregion).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectState).select("All");
    cy.wait(2000);
    // cy.get(this.locators.SelectCity).select("All");
    // cy.wait(3000);
  //     cy.get(this.locators.selectmanager)
  // .find('option') 
  // .then($options => {
  //   const randomIndex = Math.floor(Math.random() * $options.length); 
  //   const randomValue = $options.eq(randomIndex).val(); 
  //   cy.get(this.locators.selectRecommendingOfficer).select(randomValue);
  // });
  // cy.wait(2000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).type('02-01-2025');
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).type('06-01-2025');
    cy.wait(2000);
    cy.get(this.locators.Contactexpiredate).type('30-09-2026');
    cy.wait(2000);
    cy.get(this.locators.addremark).type("This is ok",{force:true});
    cy.wait(2000);
    cy.get(this.locators.submitagency).click({force : true});
    cy.wait(3000);
    cy.contains("Please enter place of work.").should("be.visible");
   
  }

  CreateAgency030again() {
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(':nth-child(2) > a.ng-star-inserted > span').click();
    cy.wait(2000);
    cy.get('#Select').select("Pending Approval");
    cy.wait(2000);
    cy.get('.btn').click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(5) > input').click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > .ng-star-inserted > a').click();
    cy.wait(2000);
    cy.get(':nth-child(4) > .btn').click();
    cy.wait(2000);
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(':nth-child(2) > a.ng-star-inserted > span').click();
    cy.wait(2000);
    cy.get('#Select').select("Approved");
    cy.wait(2000);
    cy.get('.btn').click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(2)').should('be.visible');
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(5) > input').click();
    cy.wait(2000);
    cy.get('div > .btn-primary').click();
    cy.wait(2000);
    cy.get(this.locators.selectAgencyType).select("Collections");
    cy.wait(2000);
    cy.get(this.locators.selectAgencySubType).select("Tele calling");
    cy.wait(2000);
    cy.get('.col-md-12 > .btn-primary').click();
    cy.wait(3000);
    cy.get('.ng-trigger').should('be.visible');
    cy.wait(3000);
  }


  SearchAgencySubModule() {
    cy.get(this.locators.AgencyEnplmnt).click();
    cy.get(this.locators.SearchAgency).click();
  }

  ClickonSearchAgencyApprovedStatus() {
    cy.get(this.locators.SearchAgencyName).type('ABCDEF');
    cy.wait(2000);
  
    cy.get(this.locators.SAEmpanelmentStatus).select('Approved');
    cy.wait(2000);
    cy.get(this.locators.SAContactExpiryDate).type('07/04/2024');
    cy.wait(2000);
      cy.get(this.locators.SADeferredDate).type('28/02/2024');
    cy.wait(2000);
    cy.get(this.locators.SASearch).click();
  }

  ClickonSearchAgencyApprovedWithDeferralstatus() {
    cy.get(this.locators.SearchAgencyName).type('testdeffer');
    cy.wait(2000);
    cy.get(this.locators.SAEmpanelmentStatus).select('2: ApprovedWithDeferrals');
    cy.wait(2000);
    cy.get(this.locators.SAContactExpiryDate).type('07/04/2024');
    cy.wait(2000);
     cy.get(this.locators.SADeferredDate).type('28/02/2024');
    cy.wait(2000);
    cy.get(this.locators.SASearch).click();
  }

  ClickonSearchAgencyContractExpiredStatus() {
    cy.get(this.locators.SearchAgencyName).type('Bhuvan');
    cy.wait(2000);
   
    cy.get(this.locators.SAEmpanelmentStatus).select('3: ContractExpired');
    cy.wait(2000);
    cy.get(this.locators.SAContactExpiryDate).type('07/04/2024');
    cy.wait(2000);
     cy.get(this.locators.SADeferredDate).type('28/02/2024');
    cy.wait(2000);
    cy.get(this.locators.SASearch).click();
  }

  ClickonSearchAgencyDisabledStatus() {
    cy.get(this.locators.SearchAgencyName).type('Test');
    cy.wait(2000);
   
    cy.get(this.locators.SAEmpanelmentStatus).select('4: Disabled');
    cy.wait(2000);
    cy.get(this.locators.SAContactExpiryDate).type('07/04/2024');
    cy.wait(2000);
     cy.get(this.locators.SADeferredDate).type('28/02/2024');
    cy.wait(2000);
    cy.get(this.locators.SASearch).click();
  }

  ClickonSearchAgencyPendingApprovalStatus() {
    cy.get(this.locators.SearchAgencyName).type('ABCDEF');
    cy.wait(2000);
   
    cy.get(this.locators.SAEmpanelmentStatus).select('5: PendingApproval');
    cy.wait(2000);
    cy.get(this.locators.SAContactExpiryDate).type('07/04/2024');
    cy.wait(2000);
     cy.get(this.locators.SADeferredDate).type('28/02/2024');
    cy.wait(2000);
    cy.get(this.locators.SASearch).click();
  }

  ClickonSearchAgencyPendingApprovalWithDeferralsStatus() {
    cy.get(this.locators.SearchAgencyName).type('WAG25Jan');
    cy.wait(2000);
   
    cy.get(this.locators.SAEmpanelmentStatus).select('6: PendingApprovalWithDeferrals');
    cy.wait(2000);
    cy.get(this.locators.SAContactExpiryDate).type('07/04/2024');
    cy.wait(2000);
     cy.get(this.locators.SADeferredDate).type('28/02/2024');
    cy.wait(2000);
    cy.get(this.locators.SASearch).click();
  }

  ClickonSearchAgencyRejectedStatus() {
    cy.get(this.locators.SearchAgencyName).type('ABCD');
    cy.wait(2000);
   
    cy.get(this.locators.SAEmpanelmentStatus).select('7: Rejected');
    cy.wait(2000);
    cy.get(this.locators.SAContactExpiryDate).type('07/04/2024');
    cy.wait(2000);
     cy.get(this.locators.SADeferredDate).type('28/02/2024');
    cy.wait(2000);
    cy.get(this.locators.SASearch).click();
  }

  ClickonSearchAgencySavedAsDraftStatus() {
    cy.get(this.locators.SearchAgencyName).type('ABCD');
    cy.wait(2000);
  
    cy.get(this.locators.SAEmpanelmentStatus).select('Saved As Draft');
    cy.wait(2000);
    cy.get(this.locators.SAContactExpiryDate).type('07/04/2024');
    cy.wait(2000);
      cy.get(this.locators.SADeferredDate).type('28/02/2024');
    cy.wait(2000);
    cy.get(this.locators.SASearch).click();
  }

  ClickonAgencyEmpanelmentRequest() {
    cy.log('Attempting to click Agency Empanelment Request button');
    //cy.get(this.locators.AgencyEmpanelmentRequest).click({ force: true });
    cy.get(this.locators.AgencyEnplmnt).click({ force: true });
    cy.wait(2000);
  }

  ClickOnAddAgency(){

    cy.get('.user-management > :nth-child(2) > :nth-child(1) > .sub-nav-list > :nth-child(1) > a').click();


  }

  ClickonUseExistingCodeButton() {
    cy.get(this.locators.UseExistingCode).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.UseExistingCodeValue).click();
    cy.wait(2000);
    cy.get(this.locators.SaveAgencyProfile).click();
    cy.wait(2000);
    cy.get(this.locators.UseExistingCodeValueError).then(($el) => {
      const text = $el.text();
      cy.log(text);
    })

  }

  ClickonPrimaryOwnerCheckValidation() {
    cy.get(this.locators.clickonaddressdetails).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.PrimaryOwnerFirstName).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).click({ force: true });
    cy.contains("Primary Owner first name is required.").should("be.visible");


    cy.get(this.locators.PrimaryOwnerFirstName).clear();
    cy.get(this.locators.PrimaryOwnerFirstName).type('ABC123');
    cy.contains("Owner last name is required. ").should("be.visible");

    cy.get(this.locators.PrimaryOwnerFirstName).type('{selectall}{backspace}');
    cy.wait(2000);
    cy.get(this.locators.PrimaryOwnerFirstName).type('ABC EFG');
    cy.contains("Please enter valid Primary Owner first name. ").should("be.visible");
    

  }


  ClickonPrimaryOwnerCheckLastNameValidation() {
    cy.get(this.locators.clickonaddressdetails).click({ force: true });
    cy.get(this.locators.clickonaddressdetails).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.PrimaryOwnerLastName).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.PrimaryOwnerFirstName).click({ force: true });
    cy.wait(2000);
    cy.contains("Owner last name is required. ").should("be.visible");


    cy.get(this.locators.PrimaryOwnerLastName).clear();
    cy.get(this.locators.PrimaryOwnerLastName).type('ABC123');
    cy.contains("Primary Owner first name is required.").should("be.visible");


    cy.get(this.locators.PrimaryOwnerLastName).type('{selectall}{backspace}');
    cy.get(this.locators.PrimaryOwnerLastName).type('ABC EFG');
    cy.contains(" Please enter valid Last name. ").should("be.visible");

  }

  ClickonPrimaryOwnerCheckRegisteredAgencyAddressValidation() {
    cy.get(this.locators.clickonaddressdetails).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.RegisterAgencyAddress).click({ force: true });
   
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).click({ force: true });
    cy.get('app-local-address-details > form.ng-pristine > :nth-child(1) > :nth-child(2) > .form-control').click();
    cy.wait(2000);
    cy.contains("Registered Agency Address is required.").should("be.visible");
  }

  ClickonPrimaryOwnerCheckMobileNoValidation() {
    cy.get(this.locators.clickonaddressdetails).click({ force: true });
    
    //cy.get(':nth-child(3) > .nav-link').click();
    cy.wait(2000);
    cy.get(this.locators.MobileNumberfield).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.RegisterAgencyAddress).click({ force: true });
    cy.wait(2000);
    cy.contains("Mobile Number is required ").should("be.visible");

    

    cy.get(this.locators.MobileNumberfield).type('808099786');
    cy.wait(2000);
    cy.contains("10 digits are required ").should("be.visible");

  }

  ClickonAreaFieldValidation() {
    cy.get(this.locators.clickonaddressdetails).click({ force: true });
    
  
    cy.wait(2000);
    cy.get(this.locators.AreaField).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.LandlineNo).click({ force: true });
    cy.wait(2000);
    cy.contains("Area code is required ").should("be.visible");

    

    cy.get(this.locators.AreaField).type('A');
    cy.contains("Min. 2 digits are required").should("be.visible");

    cy.get(this.locators.AreaField).type('{selectall}{backspace}');
    cy.get(this.locators.AreaField).type('1');
    cy.contains("Min. 2 digits are required").should("be.visible");

    cy.get(this.locators.AreaField).type('{selectall}{backspace}');
    cy.get(this.locators.AreaField).type('12345');
    cy.log('Minimum 2 and maximum 4 digit are allowed')

  }

  ClickonLandLineNumberValidation() {
    cy.get(this.locators.clickonaddressdetails).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.LandlineNo).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.AreaField).click({ force: true });
    cy.wait(2000);
    cy.log('Local Number is required ')

    cy.get(this.locators.LandlineNo).type('A');
    cy.log('8 digits are required ')

    cy.get(this.locators.LandlineNo).type('{selectall}{backspace}');
    cy.get(this.locators.LandlineNo).type('12345');
    cy.log('8 digits are required ');

  }

  ClickonStateFieldValidation() {
    cy.get(this.locators.clickonaddressdetails).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.State).select('');
    cy.wait(2000);
    cy.get(this.locators.AreaField).click({ force: true });
    cy.wait(2000);
    cy.contains("State is required").should("be.visible");


  }

  ClickonCityFieldValidation() {
    cy.get(this.locators.clickonaddressdetails).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.City).select('');
    cy.wait(2000);
    cy.get(this.locators.AreaField).click({ force: true });
    cy.wait(2000);
    cy.contains("City is required ").should("be.visible");

  }

  ClickonEmailIdFieldValidation() {
    cy.get(this.locators.clickonaddressdetails).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.EmailIdField).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.AreaField).click({ force: true });
    cy.wait(2000);
    //cy.contains("Email is required ").should("be.visible");


    cy.get(this.locators.EmailIdField).clear();
    cy.wait(500);
    cy.get(this.locators.EmailIdField).type('abc@yopmail');
    cy.wait(3000);
    //cy.contains(" Enter valid email ").should("be.visible");

  }

  ClickonPostalCodeFieldValidation() {
    cy.get(this.locators.clickonaddressdetails).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.PostalCodeField).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.AreaField).click({ force: true });
    cy.wait(2000);
    //cy.contains("Pin Code is required").should("be.visible");


    cy.get(this.locators.PostalCodeField).clear();
    cy.get(this.locators.PostalCodeField).type('abc45');
    //cy.contains(" Enter valid 6 digit pincode ").should("be.visible");

   // cy.log('Postal code is a numeric field which has length of 6 digits');

  }

  ClickonAccountHolderNameFieldValidation() {
    cy.get(this.locators.BankingDetails).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.AccountHolderNameField).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.BankAccountNumberField).click({ force: true });
    cy.wait(2000);
    cy.contains("Please enter account holder name.").should("be.visible");

    cy.get(this.locators.AccountHolderNameField).type('Accountholdernamefieldvalidation');
    cy.wait(2000);
    cy.log(' Account holder name is a alphanumeric field with 30 characters of length');
  }

  ClickonBankNameFieldValidation() {
    cy.get(this.locators.BankingDetails).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.BankNameField).select('');
    cy.wait(2000);
    cy.get(this.locators.BankAccountNumberField).click({ force: true });
    cy.wait(2000);
    cy.contains("Please enter Bank name.").should("be.visible");
    
  }

  ClickonBankBranchNameFieldValidation() {
    cy.get(this.locators.BankingDetails).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.BankBranchNameField).select('');
    cy.wait(2000);
    cy.get(this.locators.BankAccountNumberField).click({ force: true });
    cy.wait(2000);
    cy.contains("Please enter Bank Branch name.").should("be.visible");
  }

  ClickonGSTTinNumberFieldValidation() {
    cy.get(this.locators.BankingDetails).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.GSTnumberField).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.BankAccountNumberField).click({ force: true });
    cy.wait(2000);
    cy.contains("Please enter GST number.").should("be.visible");

    cy.get(this.locators.GSTnumberField).type('BGHY2345GTFTUH');
    cy.wait(2000);
    cy.log('GST Number is a alpha numeric field with maximum length of 15');
  }

  ClickonBankAccNumberFieldValidation() {
    cy.get(this.locators.BankingDetails).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.BankAccountNumberField).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.BankNameField).select('');
    cy.wait(2000);
    cy.contains(" Please enter Bank Account Number. ").should("be.visible")

    cy.get(this.locators.BankAccountNumberField).type('acc123');
    cy.wait(2000);
    cy.contains("Please enter valid Bank Account Number.").should("be.visible")

    cy.get(this.locators.BankAccountNumberField).type('{selectall}{backspace}');
    cy.get(this.locators.BankAccountNumberField).type('201109858');
    cy.wait(2000);
    cy.contains("Bank Account Number should be minimum 10 characters. ").should("be.visible")



  }

  Datevalidation() {
    // cy.get(this.locators.clickonARD).click();
    // cy.wait(3000);
    //const filePath = 'Cypress/fixtures/Aadhar_image.png';
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.AgencyEnplmnt).click();
    cy.wait(2000);
    cy.get('.user-management > :nth-child(2) > :nth-child(1) > .sub-nav-list > :nth-child(1) > a').click();
    cy.get(this.locators.clickonAER).click().click();
    cy.wait(2000);
   const agencyNameRaw = faker.word.sample({ length: { min: 6, max: 12 } });
const agencyName = agencyNameRaw.charAt(0).toUpperCase() + agencyNameRaw.slice(1);
cy.get(this.locators.fillAgencyName).type(agencyName);
cy.wait(2000);    
cy.get(this.locators.selectRecommendingOfficer)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectRecommendingOfficer).select(randomValue);
  });
      cy.get(this.locators.selectAgencyType)
  .find('option') 
  .then($options => {
    const optionsCount = $options.length;
    const randomIndex = Math.floor(Math.random() * optionsCount); 
    const randomValue = $options[randomIndex].value; 

    cy.get(this.locators.selectAgencyType).select(randomValue, { force: true });
  });

cy.wait(1000);     
cy.get(this.locators.selectAgencySubType)
  .find('option') 
  .then($options => {
    const optionsCount = $options.length;
    const randomIndex = Math.floor(Math.random() * optionsCount); 
    const randomValue = $options[randomIndex].value; 

    cy.get(this.locators.selectAgencySubType).select(randomValue, { force: true });
  });

cy.wait(1000);
    cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
     // cy.get(this.locators.clickongenerateENcollectcode).click();
    // cy.wait(2000);
    //Address Details
    cy.get(this.locators.clickonaddressdetails).click();
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
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
    cy.get(this.locators.selectcity).select("All");
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
    cy.get(this.locators.bankname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.bankbranchname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
    cy.wait(2000);
    //Documentation details
    //////////////////////////////////////Documentation_Details/////////////////////////////////////
    const filePath = 'Aadhar.png';
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

    cy.get(this.locators.placeofwork).click();
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
    //cy.get(this.locators.SelectCity).select("All");
    cy.wait(2000);
    // cy.scrollTo('right')
    //cy.contains("div[class='p-0 overflow-auto'] div").scrollTo('right');
    //cy.get(this.locators.selectmanager).select("Ajit");
    cy.wait(2000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).type('02-04-2024');
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).type('01-03-2024');
    cy.get(this.locators.Contactexpiredate).type('11-09-2026');
    cy.wait(2000);
    cy.get(this.locators.addremark).type("This is ok",{force:true});
    cy.wait(2000);
    cy.get(this.locators.saveagencyprofile).click();
    cy.contains("Last Renewal Date must be greater than First Renewal date").should("be.visible");


  }

  DatevalidationforExpiryDate() {

    const filePath = 'Cypress/fixtures/Aadhar.png';
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.AgencyEnplmnt).click();
    cy.wait(2000);
    cy.get(this.locators.AddAgencey).click();
    cy.wait(2000);
   const agencyNameRaw = faker.word.sample({ length: { min: 6, max: 12 } });
const agencyName = agencyNameRaw.charAt(0).toUpperCase() + agencyNameRaw.slice(1);
cy.get(this.locators.fillAgencyName).type(agencyName);
cy.wait(2000);   
 cy.get(this.locators.selectRecommendingOfficer)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectRecommendingOfficer).select(randomValue);
  });
      cy.get(this.locators.selectAgencyType)
  .find('option') 
  .then($options => {
    const optionsCount = $options.length;
    const randomIndex = Math.floor(Math.random() * optionsCount); 
    const randomValue = $options[randomIndex].value; 

    cy.get(this.locators.selectAgencyType).select(randomValue, { force: true });
  });

cy.wait(1000);    
 cy.get(this.locators.selectAgencySubType)
  .find('option') 
  .then($options => {
    const optionsCount = $options.length;
    const randomIndex = Math.floor(Math.random() * optionsCount); 
    const randomValue = $options[randomIndex].value; 

    cy.get(this.locators.selectAgencySubType).select(randomValue, { force: true });
  });

cy.wait(1000);
    cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
     // cy.get(this.locators.clickongenerateENcollectcode).click();
    // cy.wait(2000);
    //Address Details
    cy.get(this.locators.clickonaddressdetails).click();
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
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
    cy.get(this.locators.selectcity).select("All");
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
    cy.get(this.locators.bankname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.bankbranchname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
    cy.wait(2000);
    //Documentation details
    cy.get(this.locators.documentationdetails).click();
    cy.wait(2000);
    // cy.get(this.locators.signagreeementW).click();
    // cy.wait(3000);
    // cy.get(this.locators.verificationreport).click();
    // cy.wait(3000);
    // cy.get(this.locators.rletter).click();
    // cy.wait(3000);
    // cy.get(this.locators.pbankdetails).click();
    // cy.wait(3000);
    // cy.get(this.locators.pitr).click();
    // cy.wait(3000);
    cy.get(this.locators.kycid).select("Aadhar Card");
    cy.wait(2000);
    cy.get(this.locators.kycaddress).select("Driving Licence");
    cy.wait(2000);
    //cy.get(this.locators.addkycid).click({force: true});

    //cy.get(this.locators.addkycid).attachFile(filePath); // Corrected line to upload file
    //cy.wait(2000);
    //cy.get(this.locators.UploadConfirm).click();
    cy.get(this.locators.scopeofword).click();
    cy.wait(2000);
    cy.get(this.locators.productgroup).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.product).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.subproduct).select("Personal Loan");
    cy.wait(2000);

    cy.get(this.locators.placeofwork).click();
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
    cy.get(this.locators.SelectCity).select("All");
    cy.wait(3000);
      cy.get(this.locators.selectmanager)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectmanager).select(randomValue);
  });// cy.wait(3000);
    cy.get(this.locators.clickonARD).scrollIntoView.click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).type('02-03-2023');
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).type('01-03-2024');
    cy.get(this.locators.Contactexpiredate).type('27-09-2023');
    cy.wait(2000);
    cy.get(this.locators.addremark).type("This is ok",{force:true});
    cy.wait(2000);
    cy.get(this.locators.saveagencyprofile).click();

   cy.contains("Contract Expiry Date must be greater than Last Renewal Date").should("be.visible");
  }

  ClickonSearchAgencyApprovedStatusWithSpecialChrctr() {

    cy.get(this.locators.SearchAgencyName).type('@ToursAndTravels');
    cy.wait(2000);
    cy.get(this.locators.SADeferredDate).type('28/02/2024');
    cy.wait(2000);
     cy.get(this.locators.SAContactExpiryDate).type('07/04/2025').should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.SAEmpanelmentStatus).select('1: Approved').should("be.visible");
    cy.wait(2000);
   
    cy.get(this.locators.SASearch).click();
    cy.get(this.locators.specialchrctrError).then(($el) => {
      const text = $el.text();
      cy.log(text);
    })

  }

  ClickonSearchAgencyStatusResultGrid() {
    cy.get(this.locators.SAEmpanelmentStatus).select('Approved With Deferrals');
    cy.wait(2000);
    cy.get(this.locators.SASearch).click();

    cy.log('User click on showing More agencies option');
    cy.get(this.locators.dropdownForMoreAgencies).select('10');
    cy.log('10 Results showing for agencies');

    // cy.get(this.locators.paginationNoNext).click();
    // cy.wait(3000);
    // cy.get(this.locators.paginationNoPrevious).click();

    // cy.get(this.locators.SAEmpanelmentStatus).select('8: SavedAsDraft');
    // cy.wait(3000);
    // cy.get(this.locators.SASearch).click();
    // cy.log('Results are showing for SavedAsDraft status')

  }

  ClickonDocumentationDetailsCheckValidation() {

    cy.get(this.locators.documentationdetails).click();
    cy.wait(2000);
    cy.get(this.locators.signagreeementW).select();
    cy.wait(2000);
    cy.get(this.locators.verificationreport).click();
    cy.wait(2000);
    cy.get(this.locators.rletter).click();
    cy.wait(2000);
    cy.get(this.locators.pbankdetails).click();
    cy.wait(2000);
    cy.get(this.locators.pitr).click();
    cy.wait(2000);
    cy.get(this.locators.kycid).select("Aadhar Card");
    cy.wait(2000);
    cy.get(this.locators.kycaddress).select("Driving Licence");

  }

  CreateAgency031() {
    const filePath = 'Aadhar.png';
    const filePath1 = 'adharcard.pdf';
   cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click();
    cy.get(this.locators.AddAgencey).click();
   const agencyNameRaw = faker.word.sample({ length: { min: 6, max: 12 } });
const agencyName = agencyNameRaw.charAt(0).toUpperCase() + agencyNameRaw.slice(1);
cy.get(this.locators.fillAgencyName).type(agencyName);
cy.wait(2000); 
   cy.get(this.locators.selectRecommendingOfficer)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectRecommendingOfficer).select(randomValue);
  });
      cy.get(this.locators.selectAgencyType)
  .find('option') 
  .then($options => {
    const optionsCount = $options.length;
    const randomIndex = Math.floor(Math.random() * optionsCount); 
    const randomValue = $options[randomIndex].value; 

    cy.get(this.locators.selectAgencyType).select(randomValue, { force: true });
  });

cy.wait(1000);    
 cy.get(this.locators.selectAgencySubType)
  .find('option') 
  .then($options => {
    const optionsCount = $options.length;
    const randomIndex = Math.floor(Math.random() * optionsCount); 
    const randomValue = $options[randomIndex].value; 

    cy.get(this.locators.selectAgencySubType).select(randomValue, { force: true });
  });

cy.wait(1000);
    cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
     // cy.get(this.locators.clickongenerateENcollectcode).click();
    // cy.wait(2000);
    //Address Details
    cy.get(this.locators.clickonaddressdetails).click();
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
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
    cy.get(this.locators.selectcity).select("All");
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
    cy.get(this.locators.bankname).select("SBI");
    cy.wait(2000);
    cy.get(this.locators.bankbranchname).select("YamunaNagar");
    cy.wait(2000);
    cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
    cy.wait(2000);
    //////////////////////////////////////Documentation_Details/////////////////////////////////////

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
    cy.get(this.locators.productgroup).select("All");
    cy.wait(2000);
    cy.get(this.locators.product).select("All");
    cy.wait(2000);
    cy.get(this.locators.subproduct).select("All");
    cy.wait(2000);
    cy.get(this.locators.placeofwork).click();
    cy.wait(2000);
    cy.get(this.locators.selectpg).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectp).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectsubp).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectbucket).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectregion).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectState).select("All");
    cy.wait(2000);
    // cy.get(this.locators.SelectCity).select("All");
    // cy.wait(3000);
    // cy.get(this.locators.selectmanager).select("Admin");
    // cy.wait(3000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).type('02-04-2024');
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).type('06-05-2024');
    cy.wait(2000);
    cy.get(this.locators.Contactexpiredate).type('30-09-2026');
    cy.wait(2000);
    cy.get(this.locators.addremark).type("This is ok",{force:true});
    cy.wait(2000);
    cy.get(this.locators.submitagency).click({force : true});
    cy.wait(3000);
    cy.contains("Please enter place of work.").should("be.visible");
  }

  CreateAgency032() {
    //const filePath = 'Aadhar-image.png';
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click();
    cy.get(this.locators.AddAgencey).click();
    cy.wait(2000);
   const agencyNameRaw = faker.word.sample({ length: { min: 6, max: 12 } });
const agencyName = agencyNameRaw.charAt(0).toUpperCase() + agencyNameRaw.slice(1);
cy.get(this.locators.fillAgencyName).type(agencyName);
cy.wait(2000);    
cy.get(this.locators.selectRecommendingOfficer)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectRecommendingOfficer).select(randomValue);
  });
      cy.get(this.locators.selectAgencyType)
  .find('option') 
  .then($options => {
    const optionsCount = $options.length;
    const randomIndex = Math.floor(Math.random() * optionsCount); 
    const randomValue = $options[randomIndex].value; 

    cy.get(this.locators.selectAgencyType).select(randomValue, { force: true });
  });

cy.wait(1000);   
 cy.get(this.locators.selectAgencySubType)
  .find('option') 
  .then($options => {
    const optionsCount = $options.length;
    const randomIndex = Math.floor(Math.random() * optionsCount); 
    const randomValue = $options[randomIndex].value; 

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
    cy.get(this.locators.clickonaddressdetails).click();
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
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
    cy.get(this.locators.selectcity).select("All");
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
    cy.get(this.locators.bankname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.bankbranchname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
    cy.wait(2000);
    //////////////////////////////////////Documentation_Details/////////////////////////////////////

    const filePath = 'Aadhar.png';
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

    cy.get(this.locators.placeofwork).click();
    cy.wait(2000);
    cy.get(this.locators.selectpg).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.selectp).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.selectsubp).select("Personal Loan",{force: true});
    cy.wait(2000);
    cy.get(this.locators.selectbucket).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectregion).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectState).select("All");
    cy.wait(2000);
    // cy.get(this.locators.SelectCity).select("All");
    // cy.wait(3000);
    //  cy.get(this.locators.selectmanager)
  // .find('option') 
  // .then($options => {
  //   const randomIndex = Math.floor(Math.random() * $options.length); 
  //   const randomValue = $options.eq(randomIndex).val(); 
  //   cy.get(this.locators.selectRecommendingOfficer).select(randomValue);
  // });// cy.wait(3000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).type('02-04-2024');
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).type('01-05-2024');
    cy.wait(2000);
    cy.get(this.locators.Contactexpiredate).type('01-09-2026');
    cy.wait(2000);
    cy.get(this.locators.addremark).type("This is ok",{force:true});
    cy.wait(2000);
    cy.get(this.locators.submitagency).click({force: true});
    cy.wait(3000);
    cy.contains("Please enter place of work.").should("be.visible");

  }

  CreateAgency033() {
    //const filePath = 'Aadhar-image.png';
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click();
    cy.wait(2000);
    cy.get(this.locators.AddAgencey).click();
    cy.wait(2000);
   const agencyNameRaw = faker.word.sample({ length: { min: 6, max: 12 } });
const agencyName = agencyNameRaw.charAt(0).toUpperCase() + agencyNameRaw.slice(1);
cy.get(this.locators.fillAgencyName).type(agencyName);
cy.wait(2000);     
cy.get(this.locators.selectRecommendingOfficer)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectRecommendingOfficer).select(randomValue);
  });
      cy.get(this.locators.selectAgencyType)
  .find('option') 
  .then($options => {
    const optionsCount = $options.length;
    const randomIndex = Math.floor(Math.random() * optionsCount); 
    const randomValue = $options[randomIndex].value; 

    cy.get(this.locators.selectAgencyType).select(randomValue, { force: true });
  });

cy.wait(1000);    
cy.get(this.locators.selectAgencySubType).select("Regional Task Force");
    cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
     // cy.get(this.locators.clickongenerateENcollectcode).click();
    // cy.wait(2000);
    //Address Details
    cy.get(this.locators.clickonaddressdetails).click();
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345",{force:true});
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
    cy.get(this.locators.selectcity).select("All");
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
    cy.get(this.locators.bankname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.bankbranchname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
    cy.wait(2000);
    //////////////////////////////////////Documentation_Details/////////////////////////////////////

    const filePath = 'Aadhar.png';
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

    cy.get(this.locators.placeofwork).click();
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
    // cy.get(this.locators.SelectState).select("All");
    // cy.wait(3000);
    // cy.get(this.locators.SelectCity).select("All");
    // cy.wait(3000);
  //    cy.get(this.locators.selectmanager)
  // .find('option') 
  // .then($options => {
  //   const randomIndex = Math.floor(Math.random() * $options.length); 
  //   const randomValue = $options.eq(randomIndex).val(); 
  //   cy.get(this.locators.selectRecommendingOfficer).select(randomValue);
  // });cy.wait(2000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).type('02-04-2024');
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).type('01-05-2024');
    cy.wait(2000);
    cy.get(this.locators.Contactexpiredate).type('01-09-2026');
    cy.wait(2000);
    cy.get(this.locators.addremark).type("This is ok",{force:true});
    cy.wait(3000);
    cy.get(this.locators.submitagency).click({force: true});
    cy.wait(2000);
    cy.contains("Please enter place of work.").should("be.visible");

  }

  CreateAgency034() {
    
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click();
    cy.get(this.locators.AddAgencey).click();
    cy.wait(2000);
   const agencyNameRaw = faker.word.sample({ length: { min: 6, max: 12 } });
const agencyName = agencyNameRaw.charAt(0).toUpperCase() + agencyNameRaw.slice(1);
cy.get(this.locators.fillAgencyName).type(agencyName);
cy.wait(2000);   
 cy.get(this.locators.selectRecommendingOfficer)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectRecommendingOfficer).select(randomValue);
  });
      cy.get(this.locators.selectAgencyType)
  .find('option') 
  .then($options => {
    const optionsCount = $options.length;
    const randomIndex = Math.floor(Math.random() * optionsCount); 
    const randomValue = $options[randomIndex].value; 

    cy.get(this.locators.selectAgencyType).select(randomValue, { force: true });
  });

cy.wait(1000);   

 cy.get(this.locators.selectAgencySubType)
  .find('option') 
  .then($options => {
    const optionsCount = $options.length;
    const randomIndex = Math.floor(Math.random() * optionsCount); 
    const randomValue = $options[randomIndex].value; 

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
    cy.get(this.locators.clickonaddressdetails).click();
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
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
    cy.get(this.locators.selectcity).select("All");
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
    cy.get(this.locators.bankname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.bankbranchname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
    cy.wait(2000);
    //////////////////////////////////////Documentation_Details/////////////////////////////////////

    const filePath = 'Aadhar.png';
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

    cy.get(this.locators.placeofwork).click();
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
    // cy.get(this.locators.SelectCity).select("All");
    // cy.wait(3000);
    //  cy.get(this.locators.selectmanager)
  // .find('option') 
  // .then($options => {
  //   const randomIndex = Math.floor(Math.random() * $options.length); 
  //   const randomValue = $options.eq(randomIndex).val(); 
  //   cy.get(this.locators.selectRecommendingOfficer).select(randomValue);
  // });// cy.wait(3000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).type('02-04-2024');
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).type('01-05-2024');
    cy.wait(2000);
    cy.get(this.locators.Contactexpiredate).type('11-09-2026');
    cy.wait(2000);
    cy.get(this.locators.addremark).type("This is ok",{force:true});
    cy.wait(2000);
    cy.get(this.locators.submitagency).click({force: true});
    cy.wait(3000);
    cy.contains("Please enter place of work.").should("be.visible");

  }

  CreateAgency035() {
    //const filePath = 'Aadhar-image.png';
    cy.wait(2000);
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click();
    cy.get(this.locators.AddAgencey).click();
    cy.wait(2000);
   const agencyNameRaw = faker.word.sample({ length: { min: 6, max: 12 } });
const agencyName = agencyNameRaw.charAt(0).toUpperCase() + agencyNameRaw.slice(1);
cy.get(this.locators.fillAgencyName).type(agencyName);
cy.wait(2000);    
 cy.get(this.locators.selectRecommendingOfficer)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectRecommendingOfficer).select(randomValue);
  });
      cy.get(this.locators.selectAgencyType)
  .find('option') 
  .then($options => {
    const optionsCount = $options.length;
    const randomIndex = Math.floor(Math.random() * optionsCount); 
    const randomValue = $options[randomIndex].value; 

    cy.get(this.locators.selectAgencyType).select(randomValue, { force: true });
  });

cy.wait(1000);    
cy.get(this.locators.selectAgencySubType).select("Zonal Office");
    cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
     // cy.get(this.locators.clickongenerateENcollectcode).click();
    // cy.wait(2000);
    //Address Details
    cy.get(this.locators.clickonaddressdetails).click();
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
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
    cy.get(this.locators.selectcity).select("All");
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
    cy.get(this.locators.bankname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.bankbranchname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
    cy.wait(2000);
    //////////////////////////////////////Documentation_Details/////////////////////////////////////

    const filePath = 'Aadhar.png';
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

    cy.get(this.locators.placeofwork).click();
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
    cy.get(this.locators.SelectCity).select("All");
    cy.wait(3000);
      cy.get(this.locators.selectmanager)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectmanager).select(randomValue);
  });cy.wait(3000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).type('02-04-2024');
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).type('01-05-2024');
    cy.wait(2000);
    cy.get(this.locators.Contactexpiredate).type('11-09-2026').should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.addremark).type("This is ok",{force:true}).should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.submitagency).click({force: true}).should("be.visible");
    cy.wait(4000);
    //cy.contains("Please enter place of work.").should("be.visible");

  }

  CreateAgency036() {
    //const filePath = 'Aadhar-image.png';
    cy.wait(2000);
    cy.get(this.locators.clickonusermanagement).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click();
    cy.wait(2000);
    cy.get(this.locators.AddAgencey).click();
    cy.wait(2000);
   const agencyNameRaw = faker.word.sample({ length: { min: 6, max: 12 } });
const agencyName = agencyNameRaw.charAt(0).toUpperCase() + agencyNameRaw.slice(1);
cy.get(this.locators.fillAgencyName).type(agencyName);
cy.wait(2000);    

cy.get(this.locators.selectRecommendingOfficer)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectRecommendingOfficer).select(randomValue);
  });
    cy.get(this.locators.selectAgencyType).select("Collections");
    cy.wait(2000);
    cy.get(this.locators.selectAgencySubType)
  .find('option') 
  .then($options => {
    const optionsCount = $options.length;
    const randomIndex = Math.floor(Math.random() * optionsCount); 
    const randomValue = $options[randomIndex].value; 

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
    cy.get(this.locators.clickonaddressdetails).click();
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
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
    cy.get(this.locators.selectcity).select("All");
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
    cy.get(this.locators.bankname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.bankbranchname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
    cy.wait(2000);
    //////////////////////////////////////Documentation_Details/////////////////////////////////////

    const filePath = 'Aadhar.png';
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

    cy.get(this.locators.placeofwork).click();
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
    cy.get(this.locators.SelectCity).select("All");
    cy.wait(3000);
      cy.get(this.locators.selectmanager)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectmanager).select(randomValue);
  });cy.wait(3000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).type('02-04-2024');
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).type('01-05-2024').should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.Contactexpiredate).type('30-09-2026').should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.addremark).type("This is ok",{force:true}).should("be.visible");
    cy.wait(3000);
    cy.get(this.locators.submitagency).click({force: true}).should("be.visible");
    cy.wait(4000);
    //cy.contains("Please enter place of work.").should("be.visible");

  }

  CreateAgency037() {
    cy.wait(2000);
    //const filePath = 'Aadhar-image.png';
    cy.get(this.locators.clickonusermanagement).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click();
    cy.wait(2000);
    cy.get(this.locators.AddAgencey).click();
    cy.wait(2000);
   const agencyNameRaw = faker.word.sample({ length: { min: 6, max: 12 } });
const agencyName = agencyNameRaw.charAt(0).toUpperCase() + agencyNameRaw.slice(1);
cy.get(this.locators.fillAgencyName).type(agencyName);
cy.wait(2000);  

cy.get(this.locators.selectRecommendingOfficer)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectRecommendingOfficer).select(randomValue);
  });
    cy.get(this.locators.selectAgencyType).select("Collections");
    cy.wait(2000);
    cy.get(this.locators.selectAgencySubType).select("Pick up");
    cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
     // cy.get(this.locators.clickongenerateENcollectcode).click();
    // cy.wait(2000);
    //Address Details
    cy.get(this.locators.clickonaddressdetails).click();
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
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
    cy.get(this.locators.selectcity).select("All");
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
    cy.get(this.locators.bankname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.bankbranchname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
    cy.wait(2000);
    //////////////////////////////////////Documentation_Details/////////////////////////////////////

    const filePath = 'Aadhar.png';
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

    cy.get(this.locators.placeofwork).click();
    cy.wait(2000);
    cy.get(this.locators.selectpg).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.selectp).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.selectsubp).select("Personal Loan");
    cy.wait(2000);
    cy.get(this.locators.selectbucket).select("1");
    cy.wait(2000);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectregion).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectState).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectCity).select("All");
    cy.wait(3000);
      cy.get(this.locators.selectmanager)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectmanager).select(randomValue);
  });cy.wait(3000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).type('02-04-2024');
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).type('01-05-2024');
    cy.wait(2000);
    cy.get(this.locators.Contactexpiredate).type('01-09-2026').should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.addremark).type("This is ok",{force:true}).should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.submitagency).click({force: true}).should("be.visible");
    cy.wait(4000);
    //cy.contains("Please enter place of work.").should("be.visible");

  }

  CreateAgency038() {
    cy.wait(2000);
    //const filePath = 'Aadhar-image.png';
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click();
    cy.wait(2000);
    cy.get(this.locators.AddAgencey).click();
    cy.wait(2000);
    
   const agencyNameRaw = faker.word.sample({ length: { min: 6, max: 12 } });
const agencyName = agencyNameRaw.charAt(0).toUpperCase() + agencyNameRaw.slice(1);
cy.get(this.locators.fillAgencyName).type(agencyName);
cy.wait(2000);   

cy.get(this.locators.selectRecommendingOfficer)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectRecommendingOfficer).select(randomValue);
  });
    cy.get(this.locators.selectAgencyType).select("Collections");
    cy.wait(2000);
    cy.get(this.locators.selectAgencySubType).select("Skip Agency");
    cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
     // cy.get(this.locators.clickongenerateENcollectcode).click();
    // cy.wait(2000);
    //Address Details
    cy.get(this.locators.clickonaddressdetails).click();
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
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
    cy.get(this.locators.selectcity).select("All");
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
    cy.get(this.locators.bankname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.bankbranchname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
    cy.wait(2000);
    //////////////////////////////////////Documentation_Details/////////////////////////////////////

    const filePath = 'Aadhar.png';
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

    cy.get(this.locators.placeofwork).click();
    cy.wait(2000);
    cy.get(this.locators.selectpg).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.selectp).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.selectsubp).select("Personal Loan");
    cy.wait(2000);
    cy.get(this.locators.selectbucket).select("1");
    cy.wait(2000);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectregion).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectState).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectCity).select("All");
    cy.wait(3000);
      cy.get(this.locators.selectmanager)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectmanager).select(randomValue);
  });cy.wait(3000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).type('02-04-2024');
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).type('01-05-2024');
    cy.wait(2000);
    cy.get(this.locators.Contactexpiredate).type('31-10-2026').should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.addremark).type("This is ok",{force:true}).should("be.visible");
    cy.wait(3000);
    cy.get(this.locators.submitagency).click({force: true}).should("be.visible");
    cy.wait(3000);
    cy.contains("Please enter place of work.").should("be.visible");

  }

  CreateAgency039() {
    cy.wait(2000);
   //const filePath = 'Aadhar-image.png';
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click();
    cy.wait(2000);
    cy.get(this.locators.AddAgencey).click();
    cy.wait(2000);
   const agencyNameRaw = faker.word.sample({ length: { min: 6, max: 12 } });
const agencyName = agencyNameRaw.charAt(0).toUpperCase() + agencyNameRaw.slice(1);
cy.get(this.locators.fillAgencyName).type(agencyName);
cy.wait(2000);    
cy.get(this.locators.selectRecommendingOfficer)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectRecommendingOfficer).select(randomValue);
  });
    cy.get(this.locators.selectAgencyType).select("Collections");
    cy.wait(2000);
    cy.get(this.locators.selectAgencySubType).select("Tele calling");
    cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
     // cy.get(this.locators.clickongenerateENcollectcode).click();
    // cy.wait(2000);
    //Address Details
    cy.get(this.locators.clickonaddressdetails).click();
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
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
    cy.get(this.locators.selectcity).select("All");
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
    cy.get(this.locators.bankname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.bankbranchname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
    cy.wait(2000);
    //////////////////////////////////////Documentation_Details/////////////////////////////////////

    const filePath = 'Aadhar.png';
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

    cy.get(this.locators.placeofwork).click();
    cy.wait(2000);
    cy.get(this.locators.selectpg).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.selectp).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.selectsubp).select("Personal Loan");
    cy.wait(2000);
    cy.get(this.locators.selectbucket).select("1");
    cy.wait(2000);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectregion).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectState).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectCity).select("All");
    cy.wait(3000);
      cy.get(this.locators.selectmanager)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectmanager).select(randomValue);
  });cy.wait(3000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).type('02-04-2024');
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).type('01-05-2024');
    cy.wait(2000);
    cy.get(this.locators.Contactexpiredate).type('31-08-2026').should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.addremark).type("This is ok",{force:true}).should("be.visible");
    cy.wait(3000);
    cy.get(this.locators.submitagency).click({force: true}).should("be.visible");
    cy.wait(3000);
    //cy.contains("Please enter place of work.").should("be.visible");

  }

  CreateAgency040() {
    //const filePath = 'Aadhar-image.png';
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click();
    cy.wait(2000);
    cy.get(this.locators.AddAgencey).click();
    cy.wait(2000);
   const agencyNameRaw = faker.word.sample({ length: { min: 6, max: 12 } });
const agencyName = agencyNameRaw.charAt(0).toUpperCase() + agencyNameRaw.slice(1);
cy.get(this.locators.fillAgencyName).type(agencyName);
cy.wait(2000);    

cy.get(this.locators.selectRecommendingOfficer)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectRecommendingOfficer).select(randomValue);
  });
    cy.get(this.locators.selectAgencyType).select("Repossession Agency");
    cy.wait(2000);
    cy.get(this.locators.selectAgencySubType).select("Repossession Agent");
    cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
     // cy.get(this.locators.clickongenerateENcollectcode).click();
    // cy.wait(2000);
    //Address Details
    cy.get(this.locators.clickonaddressdetails).click();
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
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
    cy.get(this.locators.selectcity).select("All");
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
    cy.get(this.locators.bankname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.bankbranchname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
    cy.wait(2000);
    //////////////////////////////////////Documentation_Details/////////////////////////////////////

    const filePath = 'Aadhar.png';
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

    cy.get(this.locators.placeofwork).click();
    cy.wait(2000);
    cy.get(this.locators.selectpg).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.selectp).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.selectsubp).select("Personal Loan");
    cy.wait(2000);
    cy.get(this.locators.selectbucket).select("1");
    cy.wait(2000);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectregion).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectState).select("All");
    cy.wait(2000);
    cy.get("div[class='p-0 overflow-auto']").scrollTo("right");
    cy.wait(2000);
    cy.get(this.locators.SelectCity).select("All");
    cy.wait(2000);
      cy.get(this.locators.selectmanager)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectmanager).select(randomValue);
  });cy.wait(2000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).type('02-04-2024');
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).type('01-05-2024');
    cy.wait(2000);
    cy.get(this.locators.Contactexpiredate).type('31-08-2026');
    cy.wait(2000);
    cy.get(this.locators.addremark).type("This is ok",{force:true});
    cy.wait(3000);
    cy.get("#btn-cancel").click({force: true});
    cy.wait(3000);

  }

  CreateAgency041() {
    cy.wait(2000);
    //const filePath = 'Aadhar-image.png';
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click();
    cy.wait(2000);
    cy.get(this.locators.AddAgencey).click();
    cy.wait(2000);
   const agencyNameRaw = faker.word.sample({ length: { min: 6, max: 12 } });
const agencyName = agencyNameRaw.charAt(0).toUpperCase() + agencyNameRaw.slice(1);
cy.get(this.locators.fillAgencyName).type(agencyName);
cy.wait(2000);   

cy.get(this.locators.selectRecommendingOfficer)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectRecommendingOfficer).select(randomValue);
  });
    cy.get(this.locators.selectAgencyType).select("Recovery Agents");
    cy.wait(2000);
    cy.get(this.locators.selectAgencySubType).select("Valuer");
    cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
     // cy.get(this.locators.clickongenerateENcollectcode).click();
    // cy.wait(2000);
    //Address Details
    cy.get(this.locators.clickonaddressdetails).click();
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
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
    cy.get(this.locators.selectcity).select("All");
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
    cy.get(this.locators.bankname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.bankbranchname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
    cy.wait(2000);
    //////////////////////////////////////Documentation_Details/////////////////////////////////////

    const filePath = 'Aadhar.png';
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

    cy.get(this.locators.placeofwork).click();
    cy.wait(2000);
    cy.get(this.locators.selectpg).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.selectp).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.selectsubp).select("Personal Loan");
    cy.wait(2000);
    cy.get(this.locators.selectbucket).select("1");
    cy.wait(2000);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectregion).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectState).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectCity).select("All");
    cy.wait(3000);
      cy.get(this.locators.selectmanager)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectmanager).select(randomValue);
  });cy.wait(3000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).type('02-04-2024');
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).type('01-05-2024');
    cy.wait(2000);
    cy.get(this.locators.Contactexpiredate).type('31-08-2026');
    cy.wait(2000);
    cy.get(this.locators.addremark).type("This is ok",{force:true}).should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.submitagency).click({force:true}).should("be.visible");
    cy.wait(3000);
    //cy.contains("Please enter place of work.").should("be.visible");

  }

  CreateAgency042() {
    cy.wait(2000);
    //const filePath = 'Aadhar-image.png';
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click();
    cy.wait(2000);
    cy.get(this.locators.AddAgencey).click();
    cy.wait(2000);
   const agencyNameRaw = faker.word.sample({ length: { min: 6, max: 12 } });
const agencyName = agencyNameRaw.charAt(0).toUpperCase() + agencyNameRaw.slice(1);
cy.get(this.locators.fillAgencyName).type(agencyName);
cy.wait(2000);    

cy.get(this.locators.selectRecommendingOfficer)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectRecommendingOfficer).select(randomValue);
  });
    cy.get(this.locators.selectAgencyType).select("Repossession Agency");
    cy.wait(2000);
    cy.get(this.locators.selectAgencySubType).select("Repossession Agent");
    cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
     // cy.get(this.locators.clickongenerateENcollectcode).click();
    // cy.wait(2000);
    //Address Details
    cy.get(this.locators.clickonaddressdetails).click();
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
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
    cy.get(this.locators.selectcity).select("All");
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
    cy.get(this.locators.bankname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.bankbranchname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
    cy.wait(2000);
    //////////////////////////////////////Documentation_Details/////////////////////////////////////

    const filePath = 'Aadhar.png';
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

    cy.get(this.locators.placeofwork).click();
    cy.wait(2000);
    cy.get(this.locators.selectpg).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.selectp).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.selectsubp).select("Personal Loan");
    cy.wait(2000);
    cy.get(this.locators.selectbucket).select("1");
    cy.wait(2000);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectregion).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectState).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectCity).select("All");
    cy.wait(3000);
      cy.get(this.locators.selectmanager)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectmanager).select(randomValue);
  });cy.wait(3000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).type('02-04-2024');
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).type('01-05-2024');
    cy.wait(2000);
    cy.get(this.locators.Contactexpiredate).type('31-08-2026').should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.addremark).type("This is ok",{force:true}).should("be.visible");
    cy.wait(3000);
    cy.get(this.locators.submitagency).click({force:true}).should("be.visible");
    cy.wait(3000);
    //cy.contains("Please enter place of work.").should("be.visible");

  }


  CreateAgency043() {
    cy.wait(2000);
    //const filePath = 'Aadhar-image.png';
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click();
    cy.wait(2000);
    cy.get(this.locators.AddAgencey).click();
    cy.wait(2000);
   const agencyNameRaw = faker.word.sample({ length: { min: 6, max: 12 } });
const agencyName = agencyNameRaw.charAt(0).toUpperCase() + agencyNameRaw.slice(1);
cy.get(this.locators.fillAgencyName).type(agencyName);
cy.wait(2000);    

cy.get(this.locators.selectRecommendingOfficer)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectRecommendingOfficer).select(randomValue);
  });
    cy.get(this.locators.selectAgencyType).select("Repossession Agency");
    cy.wait(2000);
    cy.get(this.locators.selectAgencySubType).select("Yard");
    cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
     // cy.get(this.locators.clickongenerateENcollectcode).click();
    // cy.wait(2000);
    //Address Details
    cy.get(this.locators.clickonaddressdetails).click();
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
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
    cy.get(this.locators.selectcity).select("All");
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
    cy.get(this.locators.bankname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.bankbranchname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
    cy.wait(2000);
    //////////////////////////////////////Documentation_Details/////////////////////////////////////

    const filePath = 'Aadhar.png';
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

    cy.get(this.locators.placeofwork).click();
    cy.wait(2000);
    cy.get(this.locators.selectpg).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.selectp).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.selectsubp).select("Personal Loan");
    cy.wait(2000);
    cy.get(this.locators.selectbucket).select("1");
    cy.wait(2000);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectregion).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectState).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectCity).select("All");
    cy.wait(3000);
      cy.get(this.locators.selectmanager)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectmanager).select(randomValue);
  });cy.wait(3000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).type('02-04-2024');
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).type('01-05-2024');
    cy.wait(2000);
    cy.get(this.locators.Contactexpiredate).type('31-08-2026').should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.addremark).type("This is ok",{force:true}).should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.submitagency).click({force:true}).should("be.visible");
    cy.wait(3000);

  }

  CreateAgency044() {
    cy.wait(2000);
    //const filePath = 'Aadhar-image.png';
    cy.get(this.locators.clickonusermanagement).click( {force: true});
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click();
    cy.wait(2000);
    cy.get(this.locators.AddAgencey).click();
    cy.wait(2000);
   const agencyNameRaw = faker.word.sample({ length: { min: 6, max: 12 } });
const agencyName = agencyNameRaw.charAt(0).toUpperCase() + agencyNameRaw.slice(1);
cy.get(this.locators.fillAgencyName).type(agencyName);
cy.wait(2000);   

cy.get(this.locators.selectRecommendingOfficer)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectRecommendingOfficer).select(randomValue);
  });
    cy.get(this.locators.selectAgencyType).select("Repossession Agency");
    cy.wait(2000);
    cy.get(this.locators.selectAgencySubType).select("Valuer");
    cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
     // cy.get(this.locators.clickongenerateENcollectcode).click();
    // cy.wait(2000);
    //Address Details
    cy.get(this.locators.clickonaddressdetails).click();
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
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
    cy.get(this.locators.selectcity).select("All");
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
    cy.get(this.locators.bankname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.bankbranchname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
    cy.wait(2000);
    //////////////////////////////////////Documentation_Details/////////////////////////////////////

    const filePath = 'Aadhar.png';
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

    cy.get(this.locators.placeofwork).click();
    cy.wait(2000);
    cy.get(this.locators.selectpg).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.selectp).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.selectsubp).select("Personal Loan");
    cy.wait(2000);
    cy.get(this.locators.selectbucket).select("1");
    cy.wait(2000);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectregion).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectState).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectCity).select("All");
    cy.wait(2000);
      cy.get(this.locators.selectmanager)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectmanager).select(randomValue);
  });cy.wait(2000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).type('02-04-2024');
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).type('01-05-2024');
    cy.wait(2000);
    cy.get(this.locators.Contactexpiredate).type('31-08-2026').should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.addremark).type("This is ok",{force:true}).should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.submitagency).click({force:true}).should("be.visible");
    cy.wait(3000);
    //cy.contains("Please enter place of work.").should("be.visible");

  }

  CreateAgency046() {
    cy.wait(2000);
    //const filePath = 'Aadhar-image.png';
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click();
    cy.wait(2000);
    cy.get(this.locators.AddAgencey).click();
   const agencyNameRaw = faker.word.sample({ length: { min: 6, max: 12 } });
const agencyName = agencyNameRaw.charAt(0).toUpperCase() + agencyNameRaw.slice(1);
cy.get(this.locators.fillAgencyName).type(agencyName);
cy.wait(2000);    

cy.get(this.locators.selectRecommendingOfficer)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectRecommendingOfficer).select(randomValue);
  });
    cy.get(this.locators.selectAgencyType).select("Repossession Agency");
    cy.wait(2000);
    cy.get(this.locators.selectAgencySubType).select("Yard");
    cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
     // cy.get(this.locators.clickongenerateENcollectcode).click();
    // cy.wait(2000);
    //Address Details
    cy.get(this.locators.clickonaddressdetails).click();
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
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
    cy.get(this.locators.selectcity).select("All");
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
    cy.get(this.locators.bankname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.bankbranchname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
    cy.wait(2000);
    //////////////////////////////////////Documentation_Details/////////////////////////////////////

    const filePath = 'Aadhar.png';
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

    cy.get(this.locators.placeofwork).click();
    cy.wait(2000);
    cy.get(this.locators.selectpg).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.selectp).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.selectsubp).select("Personal Loan");
    cy.wait(2000);
    cy.get(this.locators.selectbucket).select("1");
    cy.wait(2000);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectregion).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectState).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectCity).select("All");
    cy.wait(3000);
      cy.get(this.locators.selectmanager)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectmanager).select(randomValue);
  });cy.wait(3000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).type('02-04-2024');
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).type('01-05-2024');
    cy.wait(2000);
    cy.get(this.locators.Contactexpiredate).type('31-08-2026').should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.addremark).type("This is ok",{force:true}).should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.submitagency).click({force:true});
    cy.wait(3000);

  }

  CreateAgency047() {
    cy.wait(2000);
    //const filePath = 'Aadhar-image.png';
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click();
    cy.wait(2000);
    cy.get(this.locators.AddAgencey).click();
    cy.wait(2000);
   const agencyNameRaw = faker.word.sample({ length: { min: 6, max: 12 } });
const agencyName = agencyNameRaw.charAt(0).toUpperCase() + agencyNameRaw.slice(1);
cy.get(this.locators.fillAgencyName).type(agencyName);
cy.wait(2000);  

cy.get(this.locators.selectRecommendingOfficer)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectRecommendingOfficer).select(randomValue);
  });
    cy.get(this.locators.selectAgencyType).select("Recovery Agents");
    cy.wait(2000);
    cy.get(this.locators.selectAgencySubType).select("Field Agents");
    cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
     // cy.get(this.locators.clickongenerateENcollectcode).click();
    // cy.wait(2000);
    //Address Details
    cy.get(this.locators.clickonaddressdetails).click();
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
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
    cy.get(this.locators.selectcity).select("All");
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
    cy.get(this.locators.bankname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.bankbranchname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.gstnumber).type("ADCC123456ABCD").should("be.visible");
    cy.wait(2000);
    //////////////////////////////////////Documentation_Details/////////////////////////////////////

    const filePath = 'Aadhar.png';
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

    cy.get(this.locators.placeofwork).click();
    cy.wait(2000);
    cy.get(this.locators.selectpg).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.selectp).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.selectsubp).select("Personal Loan");
    cy.wait(2000);
    cy.get(this.locators.selectbucket).select("1");
    cy.wait(2000);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectregion).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectState).select("All");
    cy.wait(2000);
    cy.get("div[class='p-0 overflow-auto']").scrollTo("right")
    cy.get(this.locators.SelectCity).select("All");
    cy.wait(2000);
      cy.get(this.locators.selectmanager)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectmanager).select(randomValue);
  });cy.wait(2000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).type('02-04-2024');
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).type('01-05-2024');
    cy.wait(2000);
    cy.get(this.locators.Contactexpiredate).type('30-09-2026');
    cy.wait(2000);
    cy.get(this.locators.addremark).type("This is ok",{force:true});
    cy.wait(2000);
    cy.get(this.locators.submitagency).click({force:true}).should("be.visible");
    cy.wait(3000);
    // cy.contains("The ContractExpireDate field is required.").should("be.visible");

  }

  CreateAgency049() {
    cy.wait(2000);
   // const filePath = 'Aadhar-image.png';
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click();
    cy.wait(2000);
    cy.get(this.locators.AddAgencey).click();
    cy.wait(2000);
   const agencyNameRaw = faker.word.sample({ length: { min: 6, max: 12 } });
const agencyName = agencyNameRaw.charAt(0).toUpperCase() + agencyNameRaw.slice(1);
cy.get(this.locators.fillAgencyName).type(agencyName);
cy.wait(2000);    

cy.get(this.locators.selectRecommendingOfficer)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectRecommendingOfficer).select(randomValue);
  });
    cy.get(this.locators.selectAgencyType).select("Repossession Agency");
    cy.wait(2000);
    cy.get(this.locators.selectAgencySubType).select("Yard");
    cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
     // cy.get(this.locators.clickongenerateENcollectcode).click();
    // cy.wait(2000);
    //Address Details
    cy.get(this.locators.clickonaddressdetails).click();
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
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
    cy.get(this.locators.selectcity).select("All");
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
    cy.get(this.locators.bankname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.bankbranchname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
    cy.wait(2000);
    //////////////////////////////////////Documentation_Details/////////////////////////////////////

    const filePath = 'Aadhar.png';
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

    cy.get(this.locators.placeofwork).click();
    cy.wait(2000);
    cy.get(this.locators.selectpg).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.selectp).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.selectsubp).select("Personal Loan");
    cy.wait(2000);
    cy.get(this.locators.selectbucket).select("1");
    cy.wait(2000);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectregion).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectState).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectCity).select("All");
    cy.wait(2000);
      cy.get(this.locators.selectmanager)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectmanager).select(randomValue);
  });cy.wait(2000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).type('02-04-2024');
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).type('01-05-2024');
    cy.wait(2000);
    cy.get(this.locators.Contactexpiredate).type('31-08-2026');
    cy.wait(2000);
    cy.get(this.locators.addremark).type("This is ok",{force:true});
    cy.wait(2000);
    cy.get(this.locators.saveagency).click({force:true}).should("be.visible");
    cy.wait(3000);
    // cy.contains("Agency profile is Saved as Draft").should("be.visible");



  }

  CreateAgency051() {
    cy.wait(2000);
    //const filePath = 'Aadhar-image.png';
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click();
    cy.wait(2000);
    cy.get(this.locators.AddAgencey).click();
    cy.wait(2000);
   const agencyNameRaw = faker.word.sample({ length: { min: 6, max: 12 } });
const agencyName = agencyNameRaw.charAt(0).toUpperCase() + agencyNameRaw.slice(1);
cy.get(this.locators.fillAgencyName).type(agencyName);
cy.wait(2000);  
  cy.get(this.locators.selectRecommendingOfficer)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectRecommendingOfficer).select(randomValue);
  });
    cy.get(this.locators.selectAgencyType).select("Repossession Agency");
    cy.wait(2000);
    cy.get(this.locators.selectAgencySubType).select("Yard");
    cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
     // cy.get(this.locators.clickongenerateENcollectcode).click();
    // cy.wait(2000);
    //Address Details
    cy.get(this.locators.clickonaddressdetails).click();
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
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
    cy.get(this.locators.selectcity).select("All");
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
    cy.get(this.locators.bankname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.bankbranchname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
    cy.wait(2000);
    //////////////////////////////////////Documentation_Details/////////////////////////////////////

    const filePath = 'Aadhar.png';
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

    cy.get(this.locators.placeofwork).click();
    cy.wait(2000);
    cy.get(this.locators.selectpg).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.selectp).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.selectsubp).select("Personal Loan");
    cy.wait(2000);
    cy.get(this.locators.selectbucket).select("1");
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
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectmanager).select(randomValue);
  });cy.wait(2000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).type('02-04-2024');
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).type('01-05-2024');
    cy.wait(2000);
    cy.get(this.locators.Contactexpiredate).type('30-09-2026');
    cy.wait(2000);
    cy.get(this.locators.addremark).type("This is ok",{force:true});
    cy.wait(3000);
    
  }

  CreateAgency052() {
    cy.wait(2000);
    //const filePath = 'Aadhar-image.png';
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click();
    cy.wait(2000);
    cy.get(this.locators.AddAgencey).click();
    cy.wait(2000);
   const agencyNameRaw = faker.word.sample({ length: { min: 6, max: 12 } });
const agencyName = agencyNameRaw.charAt(0).toUpperCase() + agencyNameRaw.slice(1);
cy.get(this.locators.fillAgencyName).type(agencyName);
cy.wait(2000);   

cy.get(this.locators.selectRecommendingOfficer)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectRecommendingOfficer).select(randomValue);
  });
    cy.get(this.locators.selectAgencyType).select("Repossession Agency");
    cy.wait(2000);
    cy.get(this.locators.selectAgencySubType).select("Yard");
    cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
     // cy.get(this.locators.clickongenerateENcollectcode).click();
    // cy.wait(2000);
    //Address Details
    cy.get(this.locators.clickonaddressdetails).click();
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
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
    cy.get(this.locators.selectcity).select("All");
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
    cy.get(this.locators.bankname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.bankbranchname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
    cy.wait(2000);
    //////////////////////////////////////Documentation_Details/////////////////////////////////////

    const filePath = 'Aadhar.png';
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
    cy.get(this.locators.placeofwork).click();
    cy.wait(2000);
    cy.get(this.locators.selectpg).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.selectp).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.selectsubp).select("Personal Loan");
    cy.wait(2000);
    cy.get(this.locators.selectbucket).select("1");
    cy.wait(2000);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectregion).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectState).select("All");
    cy.wait(2000);
    cy.get("div[class='p-0 overflow-auto']").scrollTo("right");
    cy.wait(2000);
    cy.get(this.locators.SelectCity).select("All");
    cy.wait(2000);
      cy.get(this.locators.selectmanager)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectmanager).select(randomValue);
  });cy.wait(2000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).type('02-04-2024');
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).type('01-05-2024');
    cy.wait(2000);
    cy.get(this.locators.Contactexpiredate).type('31-08-2026');
    cy.wait(2000);
    cy.get(this.locators.addremark).type("This is ok",{force:true});
    cy.wait(2000);
    cy.get(this.locators.reset).click({force:true});
    cy.wait(3000);

  }

  CreateAgency612(){
    cy.wait(2000);
     //const filePath = 'Aadhar-image.png';
     cy.get(this.locators.clickonusermanagement).click();
     cy.wait(2000);
     cy.get(this.locators.clickonAER).click();
     cy.wait(2000);
     cy.get(this.locators.AddAgencey).click();
     cy.wait(2000);
    const agencyNameRaw = faker.word.sample({ length: { min: 6, max: 12 } });
const agencyName = agencyNameRaw.charAt(0).toUpperCase() + agencyNameRaw.slice(1);
cy.get(this.locators.fillAgencyName).type(agencyName);
cy.wait(2000);  
    
     cy.get(this.locators.selectRecommendingOfficer)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectRecommendingOfficer).select(randomValue);
  });
     cy.get(this.locators.selectAgencyType).select("Repossession Agency");
     cy.wait(2000);
     cy.get(this.locators.selectAgencySubType).select("Yard");
     cy.wait(2000);
     cy.get(this.locators.fillpancard).type("ABCDE1234F");
     cy.wait(2000);
     cy.get(this.locators.fillTINNumber).type("123456");
     cy.wait(2000);
     cy.get(this.locators.clickongenerateENcollectcode).click();
     cy.wait(2000);
     //Address Details
     cy.get(this.locators.clickonaddressdetails).click();
     cy.wait(2000);
     cy.get(this.locators.primaryownerfirstname).type("Sachin");
     cy.wait(2000);
     cy.get(this.locators.primaryownerlastname).type("Tendulkar");
     cy.wait(2000);
     cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
     cy.wait(2000);
     cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
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
     cy.get(this.locators.selectcity).select("All");
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
     cy.get(this.locators.bankname).select("ADCC BANK");
     cy.wait(2000);
     cy.get(this.locators.bankbranchname).select("ADCC BANK");
     cy.wait(2000);
     cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
     cy.wait(2000);
     //////////////////////////////////////Documentation_Details/////////////////////////////////////
 
     const filePath = 'Aadhar.png';
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
 
     cy.get(this.locators.placeofwork).click();
     cy.wait(2000);
     cy.get(this.locators.selectpg).select("Consumer Loan");
     cy.wait(2000);
     cy.get(this.locators.selectp).select("Unsecured");
     cy.wait(2000);
     cy.get(this.locators.selectsubp).select("Personal Loan");
     cy.wait(2000);
     cy.get(this.locators.selectbucket).select("1");
     cy.wait(2000);
     cy.get(this.locators.selectcountry).select("All");
     cy.wait(2000);
     cy.get(this.locators.selectregion).select("All");
     cy.wait(2000);
     cy.get(this.locators.SelectState).select("All");
     cy.wait(2000);
     cy.get("div[class='p-0 overflow-auto']").scrollTo("right");
     cy.wait(2000);
     cy.get(this.locators.SelectCity).select("All");
     cy.wait(2000);
       cy.get(this.locators.selectmanager)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectmanager).select(randomValue);
  }); cy.wait(2000);
     cy.get(this.locators.clickonARD).click();
     cy.wait(2000);
     cy.get(this.locators.firstagreementdate).type('02-04-2024');
     cy.wait(2000);
     cy.get(this.locators.lastrenewaldate).type('01-05-2024');
     cy.wait(2000);
     cy.get(this.locators.Contactexpiredate).type('31-08-2026');
     cy.wait(2000);
     cy.get(this.locators.addremark).type("This is ok",{force:true});
     cy.wait(2000);
     cy.get('#btn-save').click();
     cy.wait(3000);
     cy.contains("Agency profile is Saved as Draft.").should("be.visible");


  }

  CreateAgency615(){
    cy.wait(2000);
    //const filePath = 'Aadhar-image.png';
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click();
    cy.wait(2000);
    cy.get(this.locators.AddAgencey).click();
    cy.wait(2000);
   const agencyNameRaw = faker.word.sample({ length: { min: 6, max: 12 } });
const agencyName = agencyNameRaw.charAt(0).toUpperCase() + agencyNameRaw.slice(1);
cy.get(this.locators.fillAgencyName).type(agencyName);
cy.wait(2000);    

cy.get(this.locators.selectRecommendingOfficer)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectRecommendingOfficer).select(randomValue);
  });
    cy.get(this.locators.selectAgencyType).select("Repossession Agency");
    cy.wait(2000);
    cy.get(this.locators.selectAgencySubType).select("Yard");
    cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
     // cy.get(this.locators.clickongenerateENcollectcode).click();
    // cy.wait(2000);
    //Address Details
    cy.get(this.locators.clickonaddressdetails).click();
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
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
    cy.get(this.locators.selectcity).select("All");
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
    cy.get(this.locators.bankname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.bankbranchname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
    cy.wait(2000);
    //////////////////////////////////////Documentation_Details/////////////////////////////////////

    const filePath = 'Aadhar.png';
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

    cy.get(this.locators.placeofwork).click();
    cy.wait(2000);
    cy.get(this.locators.selectpg).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.selectp).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.selectsubp).select("Personal Loan");
    cy.wait(2000);
    cy.get(this.locators.selectbucket).select("1");
    cy.wait(2000);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectregion).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectState).select("All");
    cy.wait(2000);
    cy.get("div[class='p-0 overflow-auto']").scrollTo("right");
    cy.wait(2000);
    cy.get(this.locators.SelectCity).select("All");
    cy.wait(2000);
      cy.get(this.locators.selectmanager)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectmanager).select(randomValue);
  });cy.wait(2000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).type('02-04-2024');
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).type('01-05-2024');
    cy.wait(2000);
    cy.get(this.locators.Contactexpiredate).type('30-09-2026').should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.addremark).type("This is ok",{force:true}).should("be.visible");
    cy.wait(2000);
    cy.get('#btn-reset').click();
    cy.wait(3000);
    


 }


  CreateAgency613(){
    cy.wait(2000);
    //const filePath = 'Aadhar-image.png';
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click();
    cy.wait(2000);
    cy.get(this.locators.AddAgencey).click();
    cy.wait(2000);
   const agencyNameRaw = faker.word.sample({ length: { min: 6, max: 12 } });
const agencyName = agencyNameRaw.charAt(0).toUpperCase() + agencyNameRaw.slice(1);
cy.get(this.locators.fillAgencyName).type(agencyName);
cy.wait(2000);    

cy.get(this.locators.selectRecommendingOfficer)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectRecommendingOfficer).select(randomValue);
  });
    cy.get(this.locators.selectAgencyType).select("Repossession Agency");
    cy.wait(2000);
    cy.get(this.locators.selectAgencySubType).select("Yard");
    cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
     // cy.get(this.locators.clickongenerateENcollectcode).click();
    // cy.wait(2000);
    //Address Details
    cy.get(this.locators.clickonaddressdetails).click();
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
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
    cy.get(this.locators.selectcity).select("All");
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
    cy.get(this.locators.bankname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.bankbranchname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
    cy.wait(2000);
    //////////////////////////////////////Documentation_Details/////////////////////////////////////

    const filePath = 'Aadhar.png';
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

    cy.get(this.locators.placeofwork).click();
    cy.wait(2000);
    cy.get(this.locators.selectpg).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.selectp).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.selectsubp).select("Personal Loan");
    cy.wait(2000);
    cy.get(this.locators.selectbucket).select("1");
    cy.wait(2000);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectregion).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectState).select("All");
    cy.wait(2000);
    cy.get("div[class='p-0 overflow-auto']").scrollTo("right");
    cy.wait(2000);
    cy.get(this.locators.SelectCity).select("All");
    cy.wait(2000);
      cy.get(this.locators.selectmanager)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectmanager).select(randomValue);
  });cy.wait(2000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).type('02-04-2024');
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).type('01-05-2024');
    cy.wait(2000);
    cy.get(this.locators.Contactexpiredate).type('31-08-2026');
    cy.wait(2000);
    cy.get(this.locators.addremark).type("This is ok",{force:true});
    cy.wait(2000);
    cy.get('#btn-submit').click();
    cy.wait(4000);
    cy.contains("Agency Profile has been Submitted for Approval.").should("be.visible");


 }


  CreateAgency129() {
    cy.wait(2000);
    //const filePath = 'Aadhar-image.png';
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click();
    cy.wait(2000);
    cy.get(this.locators.AddAgencey).click();
    cy.wait(2000);
    cy.get(this.locators.fillAgencyName).type(" ");
    cy.wait(2000);
    cy.get(this.locators.selectRecommendingOfficer)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectRecommendingOfficer).select(randomValue);
  });
    cy.contains("Agency Name is required.").should("be.visible");
    cy.wait(1000);
    cy.get(this.locators.fillAgencyName).type("ab");
    cy.wait(2000);
    cy.get(this.locators.selectRecommendingOfficer)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectRecommendingOfficer).select(randomValue);
  });
  cy.wait(1000);
    cy.contains("Agency Name must be at least 4 characters long").should("be.visible")

  }

  CreateAgency130() {
    cy.wait(2000);
    const filePath = 'Aadhar-image.png';
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click();
    cy.wait(2000);
    cy.get(this.locators.AddAgencey).click();
    cy.wait(2000);
   const agencyNameRaw = faker.word.sample({ length: { min: 6, max: 12 } });
const agencyName = agencyNameRaw.charAt(0).toUpperCase() + agencyNameRaw.slice(1);
cy.get(this.locators.fillAgencyName).type(agencyName);
cy.wait(2000);  

cy.get(this.locators.selectRecommendingOfficer)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectRecommendingOfficer).select(randomValue);
  });
    cy.get(this.locators.selectAgencyType).select("Repossession Agency");
    cy.wait(2000);
    cy.get(this.locators.selectAgencySubType).select("Yard");
    cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDEfghijk");
    cy.wait(2000);
    cy.contains("Enter a valid pan card number.").should("be.visible");
    cy.get(this.locators.fillpancard).type("1");
    cy.wait(2000);
    cy.contains("Enter a valid pan card number.").should("be.visible");

  }

  CreateAgency131() {
    cy.wait(2000);
    const filePath = 'Aadhar-image.png';
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click();
    cy.wait(2000);
    cy.get(this.locators.AddAgencey).click();
    cy.wait(2000);
   const agencyNameRaw = faker.word.sample({ length: { min: 6, max: 12 } });
const agencyName = agencyNameRaw.charAt(0).toUpperCase() + agencyNameRaw.slice(1);
cy.get(this.locators.fillAgencyName).type(agencyName);
cy.wait(2000);   

cy.get(this.locators.selectRecommendingOfficer)
  .find('option') 
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length); 
    const randomValue = $options.eq(randomIndex).val(); 
    cy.get(this.locators.selectRecommendingOfficer).select(randomValue);
  });
    cy.get(this.locators.selectAgencyType).select("Repossession Agency");
    cy.wait(2000);
    cy.get(this.locators.selectAgencySubType).select("Yard");
    cy.wait(2000);
    cy.get(this.locators.fillTIN).type("ABCD");
    cy.wait(2000);
    cy.contains("Enter a valid TIN Number").should("be.visible");
    //cy.get(this.locators.fillpancard).type("1");
    cy.wait(2000);
    cy.contains("Enter a valid TIN Number").should("be.visible");
  }

  SearchAgent() {
    cy.get(this.locators.AgentEnplmnt).click();
    cy.get(this.locators.searchagent).click();
    cy.get(this.locators.approvalstatus).select('Pending Approval');
    cy.get(this.locators.search).click();
    cy.get(this.locators.action).click().should("be.visible");
    cy.get(this.locators.approve).click().should("be.visible");
    cy.get('.ng-trigger').should('be.visible');
  }

  UserManagementTestPage_044_File_Download(){
    cy.wait(2000);
    cy.get(this.locators.UserMangment).click();
    cy.wait(2000);
    cy.get(this.locators.BulkUpload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickUserCreation).click();
    cy.wait(2000);
    cy.get(this.locators.Radio_Agent).click({ multiple: true });
    cy.wait(2000);
    cy.get(this.locators.DownloadButton).click();
    cy.wait(2000);
  }

  UserManagementTestPage_044_File_Upload() {
    const filePath = 'AgentTemplate.xlsx';
    
    // Start the file upload process
    cy.get("input[name='attachedFile']").click({ force: true });
    cy.wait(2000);
    cy.get('input[type="file"]').attachFile(filePath);
    cy.wait(2000);
    
    // Click the button to upload the file
    cy.get(':nth-child(2) > .enc-card > .card-content > :nth-child(3) > .btn').click();
    cy.wait(2000);
    
    // Click OK after the upload
    cy.get(this.locators.ClickOK).click();
    cy.wait(2000);
    
    // Capture and assert the success message with the Transaction ID
    cy.contains("File Uploaded Successfully. Transaction ID :").should("be.visible").then(($message) => {
        // Extract the Transaction ID from the message
        const transactionId = $message.text().match(/Transaction ID : (\d+)/)[1];
        
        // Assert that the Transaction ID is numeric
        expect(transactionId).to.match(/^\d+$/);  // Check if the Transaction ID is numeric
        
        // Adjust the length check: ensure it's at least 17 digits (for your case)
        expect(transactionId.length).to.be.greaterThan(16);  // Check if length is greater than 16 (or whatever the minimum is)
        
        // Optionally, store the Transaction ID for future use if needed
        cy.wrap(transactionId).as('transactionId');
        
        // Optionally, verify that the stored transaction ID matches the format
        cy.get('@transactionId').should('match', /^\d+$/);
        cy.wrap(transactionId).as('transactionId');
        cy.wait(2000);
        cy.get('.user-management > :nth-child(2) > :nth-child(4) > .sub-nav-list > :nth-child(2) > a').click();
        cy.wait(2000);
        cy.get(':nth-child(4) > .form-control').type(transactionId);   
        cy.wait(2000);
        cy.get('.btn').click();
            cy.wait(2000);
        cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
        cy.wait(2000);
    });
}



UserManagementTestPage_045_File_Download(){
    cy.wait(2000);
    cy.get(this.locators.UserMangment).click();
    cy.wait(2000);
    cy.get(this.locators.BulkUpload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickUserCreation).click();
    cy.wait(2000);
    cy.get(this.locators.Radio_Agent).click({ multiple: true });
    cy.wait(2000);
    cy.get(this.locators.DownloadButton).click();
    cy.wait(2000);

}

UserManagementTestPage_045_File_Upload() {
  const filePath = 'AgentTemplate.xlsx';
  
  // Start the file upload process
  cy.get("input[name='attachedFile']").click({ force: true });
  cy.wait(2000);
  cy.get('input[type="file"]').attachFile(filePath);
  cy.wait(2000);
  
  // Click the button to upload the file
  cy.get(':nth-child(2) > .enc-card > .card-content > :nth-child(3) > .btn').click();
  cy.wait(2000);
  
  // Click OK after the upload
  cy.get(this.locators.ClickOK).click();
  cy.wait(2000);
  
  // Capture and assert the success message with the Transaction ID
  cy.contains("File Uploaded Successfully. Transaction ID :").should("be.visible").then(($message) => {
      // Extract the Transaction ID from the message
      const transactionId = $message.text().match(/Transaction ID : (\d+)/)[1];
      
      // Assert that the Transaction ID is numeric
      expect(transactionId).to.match(/^\d+$/);  // Check if the Transaction ID is numeric
      
      // Adjust the length check: ensure it's at least 17 digits (for your case)
      expect(transactionId.length).to.be.greaterThan(16);  // Check if length is greater than 16 (or whatever the minimum is)
      
      // Optionally, store the Transaction ID for future use if needed
      cy.wrap(transactionId).as('transactionId');
      
      // Optionally, verify that the stored transaction ID matches the format
      cy.get('@transactionId').should('match', /^\d+$/);
      cy.wrap(transactionId).as('transactionId');
      cy.wait(2000);
      cy.get('.user-management > :nth-child(2) > :nth-child(4) > .sub-nav-list > :nth-child(2) > a').click();
      cy.wait(2000);
      cy.get(':nth-child(4) > .form-control').type(transactionId);  
      cy.wait(2000);
      cy.get('.btn').click();
          cy.wait(2000);
      cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
      cy.wait(2000);
  });
}
///###################################################################################
UserManagementTestPage_046_File_Download(){
  cy.wait(2000);
  cy.get(this.locators.UserMangment).click();
  cy.wait(2000);
  cy.get(this.locators.BulkUpload).click();
  cy.wait(2000);
  cy.get(this.locators.ClickUserCreation).click();
  cy.wait(2000);
  cy.get(this.locators.Radio_Agent).click({ multiple: true });
  cy.wait(2000);
  cy.get(this.locators.DownloadButton).click();
  cy.wait(2000);

}


UserManagementTestPage_046_File_Upload() {
  const filePath = 'AgentTemplate.xlsx';
  
  // Start the file upload process
  cy.get("input[name='attachedFile']").click({ force: true });
  cy.wait(2000);
  cy.get('input[type="file"]').attachFile(filePath);
  cy.wait(2000);
  
  // Click the button to upload the file
  cy.get(':nth-child(2) > .enc-card > .card-content > :nth-child(3) > .btn').click();
  cy.wait(2000);
  
  // Click OK after the upload
  cy.get(this.locators.ClickOK).click();
  cy.wait(2000);
  
  // Capture and assert the success message with the Transaction ID
  cy.contains("File Uploaded Successfully. Transaction ID :").should("be.visible").then(($message) => {
      // Extract the Transaction ID from the message
      const transactionId = $message.text().match(/Transaction ID : (\d+)/)[1];
      
      // Assert that the Transaction ID is numeric
      expect(transactionId).to.match(/^\d+$/);  // Check if the Transaction ID is numeric
      
      // Adjust the length check: ensure it's at least 17 digits (for your case)
      expect(transactionId.length).to.be.greaterThan(16);  // Check if length is greater than 16 (or whatever the minimum is)
      
      // Optionally, store the Transaction ID for future use if needed
      cy.wrap(transactionId).as('transactionId');
      
      // Optionally, verify that the stored transaction ID matches the format
      cy.get('@transactionId').should('match', /^\d+$/);
      cy.wrap(transactionId).as('transactionId');
      cy.wait(2000);
      cy.get('.user-management > :nth-child(2) > :nth-child(4) > .sub-nav-list > :nth-child(2) > a').click();
      cy.wait(2000);
      cy.get(':nth-child(4) > .form-control').type(transactionId);  
      cy.wait(2000);
      cy.get('.btn').click();
          cy.wait(4000);
      cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
      cy.wait(2000);
  });
}

///###################################################################################

 ///###################################################################################
 UserManagementTestPage_047_File_Download(){
  cy.wait(2000);
  cy.get(this.locators.UserMangment).click();
  cy.wait(2000);
  cy.get(this.locators.BulkUpload).click();
  cy.wait(2000);
  cy.get(this.locators.ClickUserCreation).click();
  cy.wait(2000);
  cy.get(this.locators.Radio_Agent).click({ multiple: true });
  cy.wait(2000);
  cy.get(this.locators.DownloadButton).click();
  cy.wait(2000);

}


UserManagementTestPage_047_File_Upload() {
  const filePath = 'AgentTemplate.xlsx';
  
  // Start the file upload process
  cy.get("input[name='attachedFile']").click({ force: true });
  cy.wait(2000);
  cy.get('input[type="file"]').attachFile(filePath);
  cy.wait(2000);
  
  // Click the button to upload the file
  cy.get(':nth-child(2) > .enc-card > .card-content > :nth-child(3) > .btn').click();
  cy.wait(2000);
  
  // Click OK after the upload
  cy.get(this.locators.ClickOK).click();
  cy.wait(2000);
  
  // Capture and assert the success message with the Transaction ID
  cy.contains("File Uploaded Successfully. Transaction ID :").should("be.visible").then(($message) => {
      // Extract the Transaction ID from the message
      const transactionId = $message.text().match(/Transaction ID : (\d+)/)[1];
      
      // Assert that the Transaction ID is numeric
      expect(transactionId).to.match(/^\d+$/);  // Check if the Transaction ID is numeric
      
      // Adjust the length check: ensure it's at least 17 digits (for your case)
      expect(transactionId.length).to.be.greaterThan(16);  // Check if length is greater than 16 (or whatever the minimum is)
      
      // Optionally, store the Transaction ID for future use if needed
      cy.wrap(transactionId).as('transactionId');
      
      // Optionally, verify that the stored transaction ID matches the format
      cy.get('@transactionId').should('match', /^\d+$/);
      cy.wrap(transactionId).as('transactionId');
      cy.wait(2000);
      cy.get('.user-management > :nth-child(2) > :nth-child(4) > .sub-nav-list > :nth-child(2) > a').click();
      cy.wait(2000);
      cy.get(':nth-child(4) > .form-control').type(transactionId);   
      cy.get('.btn').click();
      cy.wait(4000);
      cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
      cy.wait(2000);
  });
}

///###################################################################################

  ///###################################################################################
  UserManagementTestPage_048_File_Download(){
  cy.wait(2000);
  cy.get(this.locators.UserMangment).click();
  cy.wait(2000);
  cy.get(this.locators.BulkUpload).click();
  cy.wait(2000);
  cy.get(this.locators.ClickUserCreation).click();
  cy.wait(2000);
  cy.get(this.locators.Radio_Agent).click({ multiple: true });
  cy.wait(2000);
  cy.get(this.locators.DownloadButton).click();
  cy.wait(2000);

}


UserManagementTestPage_048_File_Upload() {
  const filePath = 'AgentTemplate.xlsx';
  
  // Start the file upload process
  cy.get("input[name='attachedFile']").click({ force: true });
  cy.wait(2000);
  cy.get('input[type="file"]').attachFile(filePath);
  cy.wait(2000);
  
  // Click the button to upload the file
  cy.get(':nth-child(2) > .enc-card > .card-content > :nth-child(3) > .btn').click();
  cy.wait(2000);
  
  // Click OK after the upload
  cy.get(this.locators.ClickOK).click();
  cy.wait(2000);
  
  // Capture and assert the success message with the Transaction ID
  cy.contains("File Uploaded Successfully. Transaction ID :").should("be.visible").then(($message) => {
      // Extract the Transaction ID from the message
      const transactionId = $message.text().match(/Transaction ID : (\d+)/)[1];
      
      // Assert that the Transaction ID is numeric
      expect(transactionId).to.match(/^\d+$/);  // Check if the Transaction ID is numeric
      
      // Adjust the length check: ensure it's at least 17 digits (for your case)
      expect(transactionId.length).to.be.greaterThan(16);  // Check if length is greater than 16 (or whatever the minimum is)
      
      // Optionally, store the Transaction ID for future use if needed
      cy.wrap(transactionId).as('transactionId');
      
      // Optionally, verify that the stored transaction ID matches the format
      cy.get('@transactionId').should('match', /^\d+$/);
      cy.wrap(transactionId).as('transactionId');
      cy.wait(2000);
      cy.get('.user-management > :nth-child(2) > :nth-child(4) > .sub-nav-list > :nth-child(2) > a').click();
      cy.wait(2000);
      cy.get(':nth-child(4) > .form-control').type(transactionId);  
      cy.get('.btn').click();
      cy.wait(4000);
      cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
      cy.wait(2000);
  });
}

///###################################################################################

 ///###################################################################################
 UserManagementTestPage_049_File_Download(){
  cy.wait(2000);
  cy.get(this.locators.UserMangment).click();
  cy.wait(2000);
  cy.get(this.locators.BulkUpload).click();
  cy.wait(2000);
  cy.get(this.locators.ClickUserCreation).click();
  cy.wait(2000);
  cy.get(this.locators.Radio_Agent).click({ multiple: true });
  cy.wait(2000);
  cy.get(this.locators.DownloadButton).click();
  cy.wait(2000);

}


UserManagementTestPage_049_File_Upload() {
  const filePath = 'AgentTemplate.xlsx';
  
  // Start the file upload process
  cy.get("input[name='attachedFile']").click({ force: true });
  cy.wait(2000);
  cy.get('input[type="file"]').attachFile(filePath);
  cy.wait(2000);
  
  // Click the button to upload the file
  cy.get(':nth-child(2) > .enc-card > .card-content > :nth-child(3) > .btn').click();
  cy.wait(2000);
  
  // Click OK after the upload
  cy.get(this.locators.ClickOK).click();
  cy.wait(2000);
  
  // Capture and assert the success message with the Transaction ID
  cy.contains("File Uploaded Successfully. Transaction ID :").should("be.visible").then(($message) => {
      // Extract the Transaction ID from the message
      const transactionId = $message.text().match(/Transaction ID : (\d+)/)[1];
      
      // Assert that the Transaction ID is numeric
      expect(transactionId).to.match(/^\d+$/);  // Check if the Transaction ID is numeric
      
      // Adjust the length check: ensure it's at least 17 digits (for your case)
      expect(transactionId.length).to.be.greaterThan(16);  // Check if length is greater than 16 (or whatever the minimum is)
      
      // Optionally, store the Transaction ID for future use if needed
      cy.wrap(transactionId).as('transactionId');
      
      // Optionally, verify that the stored transaction ID matches the format
      cy.get('@transactionId').should('match', /^\d+$/);
      cy.wrap(transactionId).as('transactionId');
      cy.wait(2000);
      cy.get('.user-management > :nth-child(2) > :nth-child(4) > .sub-nav-list > :nth-child(2) > a').click();
      cy.wait(500);
      cy.get('.user-management > :nth-child(2) > :nth-child(4) > .sub-nav-list > :nth-child(2) > a').click();
      cy.wait(2000);
      cy.get(':nth-child(4) > .form-control').type(transactionId);  
      cy.wait(2000); 
      cy.get('.btn').click();
      cy.wait(4000);
      cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
      cy.wait(2000);
  });
}

///###################################################################################

 ///###################################################################################
 UserManagementTestPage_050_File_Download(){
  cy.wait(2000);
  cy.get(this.locators.UserMangment).click();
  cy.wait(2000);
  cy.get(this.locators.BulkUpload).click();
  cy.wait(2000);
  cy.get(this.locators.ClickUserCreation).click();
  cy.wait(2000);
  cy.get(this.locators.Radio_Agent).click({ multiple: true });
  cy.wait(2000);
  cy.get(this.locators.DownloadButton).click();
  cy.wait(2000);

}


UserManagementTestPage_050_File_Upload() {
  const filePath = 'AgentTemplate.xlsx';
  
  // Start the file upload process
  cy.get("input[name='attachedFile']").click({ force: true });
  cy.wait(2000);
  cy.get('input[type="file"]').attachFile(filePath);
  cy.wait(2000);
  
  // Click the button to upload the file
  cy.get(':nth-child(2) > .enc-card > .card-content > :nth-child(3) > .btn').click();
  cy.wait(2000);
  
  // Click OK after the upload
  cy.get(this.locators.ClickOK).click();
  cy.wait(2000);
  
  // Capture and assert the success message with the Transaction ID
  cy.contains("File Uploaded Successfully. Transaction ID :").should("be.visible").then(($message) => {
      // Extract the Transaction ID from the message
      const transactionId = $message.text().match(/Transaction ID : (\d+)/)[1];
      
      // Assert that the Transaction ID is numeric
      expect(transactionId).to.match(/^\d+$/);  // Check if the Transaction ID is numeric
      
      // Adjust the length check: ensure it's at least 17 digits (for your case)
      expect(transactionId.length).to.be.greaterThan(16);  // Check if length is greater than 16 (or whatever the minimum is)
      
      // Optionally, store the Transaction ID for future use if needed
      cy.wrap(transactionId).as('transactionId');
      
      // Optionally, verify that the stored transaction ID matches the format
      cy.get('@transactionId').should('match', /^\d+$/);
      cy.wrap(transactionId).as('transactionId');
      cy.wait(2000);
      cy.get('.user-management > :nth-child(2) > :nth-child(4) > .sub-nav-list > :nth-child(2) > a').click();
      cy.wait(2000);
      cy.get(':nth-child(4) > .form-control').type(transactionId);  
      cy.wait(2000);
      cy.get('.btn').click();
      cy.wait(4000);
      cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
      cy.wait(2000);
  });
}

///###################################################################################

///###################################################################################
UserManagementTestPage_051_File_Download(){
  cy.wait(2000);
  cy.get(this.locators.UserMangment).click();
  cy.wait(2000);
  cy.get(this.locators.BulkUpload).click();
  cy.wait(2000);
  cy.get(this.locators.ClickUserCreation).click();
  cy.wait(2000);
  cy.get(this.locators.Radio_Agent).click({ multiple: true });
  cy.wait(2000);
  cy.get(this.locators.DownloadButton).click();
  cy.wait(2000);

}


UserManagementTestPage_051_File_Upload() {
  const filePath = 'AgentTemplate.xlsx';
  
  // Start the file upload process
  cy.get("input[name='attachedFile']").click({ force: true });
  cy.wait(2000);
  cy.get('input[type="file"]').attachFile(filePath);
  cy.wait(2000);
  
  // Click the button to upload the file
  cy.get(':nth-child(2) > .enc-card > .card-content > :nth-child(3) > .btn').click();
  cy.wait(2000);
  
  // Click OK after the upload
  cy.get(this.locators.ClickOK).click();
  cy.wait(2000);
  
  // Capture and assert the success message with the Transaction ID
  cy.contains("File Uploaded Successfully. Transaction ID :").should("be.visible").then(($message) => {
      // Extract the Transaction ID from the message
      const transactionId = $message.text().match(/Transaction ID : (\d+)/)[1];
      
      // Assert that the Transaction ID is numeric
      expect(transactionId).to.match(/^\d+$/);  // Check if the Transaction ID is numeric
      
      // Adjust the length check: ensure it's at least 17 digits (for your case)
      expect(transactionId.length).to.be.greaterThan(16);  // Check if length is greater than 16 (or whatever the minimum is)
      
      // Optionally, store the Transaction ID for future use if needed
      cy.wrap(transactionId).as('transactionId');
      
      // Optionally, verify that the stored transaction ID matches the format
      cy.get('@transactionId').should('match', /^\d+$/);
      cy.wrap(transactionId).as('transactionId');
      cy.wait(2000);
      cy.get('.user-management > :nth-child(2) > :nth-child(4) > .sub-nav-list > :nth-child(2) > a').click();
      cy.wait(2000);
      cy.get(':nth-child(4) > .form-control').type(transactionId);  
      cy.wait(2000);
      cy.get('.btn').click();
      cy.wait(4000);
      cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
      cy.wait(2000);
  });
}

///###################################################################################
///###################################################################################
UserManagementTestPage_052_File_Download(){
  cy.wait(2000);
  cy.get(this.locators.UserMangment).click();
  cy.wait(2000);
  cy.get(this.locators.BulkUpload).click();
  cy.wait(2000);
  cy.get(this.locators.ClickUserCreation).click();
  cy.wait(2000);
  cy.get(this.locators.Radio_Agent).click({ multiple: true });
  cy.wait(2000);
  cy.get(this.locators.DownloadButton).click();
  cy.wait(2000);

}


UserManagementTestPage_052_File_Upload() {
  const filePath = 'AgentTemplate.xlsx';
  
  // Start the file upload process
  cy.get("input[name='attachedFile']").click({ force: true });
  cy.wait(2000);
  cy.get('input[type="file"]').attachFile(filePath);
  cy.wait(2000);
  
  // Click the button to upload the file
  cy.get(':nth-child(2) > .enc-card > .card-content > :nth-child(3) > .btn').click();
  cy.wait(2000);
  
  // Click OK after the upload
  cy.get(this.locators.ClickOK).click();
  cy.wait(2000);
  
  // Capture and assert the success message with the Transaction ID
  cy.contains("File Uploaded Successfully. Transaction ID :").should("be.visible").then(($message) => {
      // Extract the Transaction ID from the message
      const transactionId = $message.text().match(/Transaction ID : (\d+)/)[1];
      
      // Assert that the Transaction ID is numeric
      expect(transactionId).to.match(/^\d+$/);  // Check if the Transaction ID is numeric
      
      // Adjust the length check: ensure it's at least 17 digits (for your case)
      expect(transactionId.length).to.be.greaterThan(16);  // Check if length is greater than 16 (or whatever the minimum is)
      
      // Optionally, store the Transaction ID for future use if needed
      cy.wrap(transactionId).as('transactionId');
      
      // Optionally, verify that the stored transaction ID matches the format
      cy.get('@transactionId').should('match', /^\d+$/);
      cy.wrap(transactionId).as('transactionId');
      cy.wait(2000);
      cy.get('.user-management > :nth-child(2) > :nth-child(4) > .sub-nav-list > :nth-child(2) > a').click();
      cy.wait(2000);
      cy.get(':nth-child(4) > .form-control').type(transactionId);
      cy.wait(2000); 
      cy.get('.btn').click();
      cy.wait(4000);
      cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
      cy.wait(2000);
  });
}

///###################################################################################

 ///###################################################################################
 UserManagementTestPage_053_File_Download(){
  cy.wait(2000);
  cy.get(this.locators.UserMangment).click();
  cy.wait(2000);
  cy.get(this.locators.BulkUpload).click();
  cy.wait(2000);
  cy.get(this.locators.ClickUserCreation).click();
  cy.wait(2000);
  cy.get(this.locators.Radio_Agent).click({ multiple: true });
  cy.wait(2000);
  cy.get(this.locators.DownloadButton).click();
  cy.wait(2000);

}


UserManagementTestPage_053_File_Upload() {
  const filePath = 'AgentTemplate.xlsx';
  
  // Start the file upload process
  cy.get("input[name='attachedFile']").click({ force: true });
  cy.wait(2000);
  cy.get('input[type="file"]').attachFile(filePath);
  cy.wait(2000);
  
  // Click the button to upload the file
  cy.get(':nth-child(2) > .enc-card > .card-content > :nth-child(3) > .btn').click();
  cy.wait(2000);
  
  // Click OK after the upload
  cy.get(this.locators.ClickOK).click();
  cy.wait(2000);
  
  // Capture and assert the success message with the Transaction ID
  cy.contains("File Uploaded Successfully. Transaction ID :").should("be.visible").then(($message) => {
      // Extract the Transaction ID from the message
      const transactionId = $message.text().match(/Transaction ID : (\d+)/)[1];
      
      // Assert that the Transaction ID is numeric
      expect(transactionId).to.match(/^\d+$/);  // Check if the Transaction ID is numeric
      
      // Adjust the length check: ensure it's at least 17 digits (for your case)
      expect(transactionId.length).to.be.greaterThan(16);  // Check if length is greater than 16 (or whatever the minimum is)
      
      // Optionally, store the Transaction ID for future use if needed
      cy.wrap(transactionId).as('transactionId');
      
      // Optionally, verify that the stored transaction ID matches the format
      cy.get('@transactionId').should('match', /^\d+$/);
      cy.wrap(transactionId).as('transactionId');
      cy.wait(2000);
      cy.get('.user-management > :nth-child(2) > :nth-child(4) > .sub-nav-list > :nth-child(2) > a').click();
      cy.wait(2000);
      cy.get(':nth-child(4) > .form-control').type(transactionId);  
      cy.wait(2000);
      cy.get('.btn').click();
      cy.wait(4000);
      cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
      cy.wait(2000);
  });
}

///###################################################################################

 ///###################################################################################
 UserManagementTestPage_054_File_Download(){
  cy.wait(2000);
  cy.get(this.locators.UserMangment).click();
  cy.wait(2000);
  cy.get(this.locators.BulkUpload).click();
  cy.wait(2000);
  cy.get(this.locators.ClickUserCreation).click();
  cy.wait(2000);
  cy.get(this.locators.Radio_Agent).click({ multiple: true });
  cy.wait(2000);
  cy.get(this.locators.DownloadButton).click();
  cy.wait(2000);

}


UserManagementTestPage_054_File_Upload() {
  const filePath = 'AgentTemplate.xlsx';
  
  // Start the file upload process
  cy.get("input[name='attachedFile']").click({ force: true });
  cy.wait(2000);
  cy.get('input[type="file"]').attachFile(filePath);
  cy.wait(2000);
  
  // Click the button to upload the file
  cy.get(':nth-child(2) > .enc-card > .card-content > :nth-child(3) > .btn').click();
  cy.wait(2000);
  
  // Click OK after the upload
  cy.get(this.locators.ClickOK).click();
  cy.wait(2000);
  
  // Capture and assert the success message with the Transaction ID
  cy.contains("File Uploaded Successfully. Transaction ID :").should("be.visible").then(($message) => {
      // Extract the Transaction ID from the message
      const transactionId = $message.text().match(/Transaction ID : (\d+)/)[1];
      
      // Assert that the Transaction ID is numeric
      expect(transactionId).to.match(/^\d+$/);  // Check if the Transaction ID is numeric
      
      // Adjust the length check: ensure it's at least 17 digits (for your case)
      expect(transactionId.length).to.be.greaterThan(16);  // Check if length is greater than 16 (or whatever the minimum is)
      
      // Optionally, store the Transaction ID for future use if needed
      cy.wrap(transactionId).as('transactionId');
      
      // Optionally, verify that the stored transaction ID matches the format
      cy.get('@transactionId').should('match', /^\d+$/);
      cy.wrap(transactionId).as('transactionId');
      cy.wait(2000);
      cy.get('.user-management > :nth-child(2) > :nth-child(4) > .sub-nav-list > :nth-child(2) > a').click();
      cy.wait(2000);
      cy.get(':nth-child(4) > .form-control').type(transactionId);  
      cy.wait(2000);
      cy.get('.btn').click();
      cy.wait(4000);
      cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
      cy.wait(2000);
  });
}

///###################################################################################
 ///###################################################################################
 UserManagementTestPage_055_File_Download(){
  cy.wait(2000);
  cy.get(this.locators.UserMangment).click();
  cy.wait(2000);
  cy.get(this.locators.BulkUpload).click();
  cy.wait(2000);
  cy.get(this.locators.ClickUserCreation).click();
  cy.wait(2000);
  cy.get(this.locators.Radio_Agent).click({ multiple: true });
  cy.wait(2000);
  cy.get(this.locators.DownloadButton).click();
  cy.wait(2000);

}


UserManagementTestPage_055_File_Upload() {
  const filePath = 'AgentTemplate.xlsx';
  
  // Start the file upload process
  cy.get("input[name='attachedFile']").click({ force: true });
  cy.wait(2000);
  cy.get('input[type="file"]').attachFile(filePath);
  cy.wait(2000);
  
  // Click the button to upload the file
  cy.get(':nth-child(2) > .enc-card > .card-content > :nth-child(3) > .btn').click();
  cy.wait(2000);
  
  // Click OK after the upload
  cy.get(this.locators.ClickOK).click();
  cy.wait(2000);
  
  // Capture and assert the success message with the Transaction ID
  cy.contains("File Uploaded Successfully. Transaction ID :").should("be.visible").then(($message) => {
      // Extract the Transaction ID from the message
      const transactionId = $message.text().match(/Transaction ID : (\d+)/)[1];
      
      // Assert that the Transaction ID is numeric
      expect(transactionId).to.match(/^\d+$/);  // Check if the Transaction ID is numeric
      
      // Adjust the length check: ensure it's at least 17 digits (for your case)
      expect(transactionId.length).to.be.greaterThan(16);  // Check if length is greater than 16 (or whatever the minimum is)
      
      // Optionally, store the Transaction ID for future use if needed
      cy.wrap(transactionId).as('transactionId');
      
      // Optionally, verify that the stored transaction ID matches the format
      cy.get('@transactionId').should('match', /^\d+$/);
      cy.wrap(transactionId).as('transactionId');
      cy.wait(2000);
      cy.get('.user-management > :nth-child(2) > :nth-child(4) > .sub-nav-list > :nth-child(2) > a').click();
      cy.wait(2000);
      cy.get(':nth-child(4) > .form-control').type(transactionId);  
      cy.wait(2000);
      cy.get('.btn').click();
      cy.wait(4000);
      cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
      cy.wait(2000);
  });
}

///###################################################################################
  ///###################################################################################
  UserManagementTestPage_056_File_Download(){
  cy.wait(2000);
  cy.get(this.locators.UserMangment).click();
  cy.wait(2000);
  cy.get(this.locators.BulkUpload).click();
  cy.wait(2000);
  cy.get(this.locators.ClickUserCreation).click();
  cy.wait(2000);
  cy.get(this.locators.Radio_Agent).click({ multiple: true });
  cy.wait(2000);
  cy.get(this.locators.DownloadButton).click();
  cy.wait(2000);

}


UserManagementTestPage_056_File_Upload() {
  const filePath = 'AgentTemplate.xlsx';
  
  // Start the file upload process
  cy.get("input[name='attachedFile']").click({ force: true });
  cy.wait(2000);
  cy.get('input[type="file"]').attachFile(filePath);
  cy.wait(2000);
  
  // Click the button to upload the file
  cy.get(':nth-child(2) > .enc-card > .card-content > :nth-child(3) > .btn').click();
  cy.wait(2000);
  
  // Click OK after the upload
  cy.get(this.locators.ClickOK).click();
  cy.wait(2000);
  
  // Capture and assert the success message with the Transaction ID
  cy.contains("File Uploaded Successfully. Transaction ID :").should("be.visible").then(($message) => {
      // Extract the Transaction ID from the message
      const transactionId = $message.text().match(/Transaction ID : (\d+)/)[1];
      
      // Assert that the Transaction ID is numeric
      expect(transactionId).to.match(/^\d+$/);  // Check if the Transaction ID is numeric
      
      // Adjust the length check: ensure it's at least 17 digits (for your case)
      expect(transactionId.length).to.be.greaterThan(16);  // Check if length is greater than 16 (or whatever the minimum is)
      
      // Optionally, store the Transaction ID for future use if needed
      cy.wrap(transactionId).as('transactionId');
      
      // Optionally, verify that the stored transaction ID matches the format
      cy.get('@transactionId').should('match', /^\d+$/);
      cy.wrap(transactionId).as('transactionId');
      cy.wait(2000);
      cy.get('.user-management > :nth-child(2) > :nth-child(4) > .sub-nav-list > :nth-child(2) > a').click();
      cy.wait(2000);
      cy.get(':nth-child(4) > .form-control').type(transactionId);  
      cy.wait(3000);
      cy.get('.btn').click();
      cy.wait(4000);
      cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
      cy.wait(2000);
  });
}

///###################################################################################
 ///###################################################################################
 UserManagementTestPage_057_File_Download(){
  cy.wait(2000);
  cy.get(this.locators.UserMangment).click();
  cy.wait(2000);
  cy.get(this.locators.BulkUpload).click();
  cy.wait(2000);
  cy.get(this.locators.ClickUserCreation).click();
  cy.wait(2000);
  cy.get(this.locators.Radio_Agent).click({ multiple: true });
  cy.wait(2000);
  cy.get(this.locators.DownloadButton).click();
  cy.wait(2000);

}


UserManagementTestPage_057_File_Upload() {
  const filePath = 'AgentTemplate.xlsx';
  
  // Start the file upload process
  cy.get("input[name='attachedFile']").click({ force: true });
  cy.wait(2000);
  cy.get('input[type="file"]').attachFile(filePath);
  cy.wait(2000);
  
  // Click the button to upload the file
  cy.get(':nth-child(2) > .enc-card > .card-content > :nth-child(3) > .btn').click();
  cy.wait(2000);
  
  // Click OK after the upload
  cy.get(this.locators.ClickOK).click();
  cy.wait(2000);
  
  // Capture and assert the success message with the Transaction ID
  cy.contains("File Uploaded Successfully. Transaction ID :").should("be.visible").then(($message) => {
      // Extract the Transaction ID from the message
      const transactionId = $message.text().match(/Transaction ID : (\d+)/)[1];
      
      // Assert that the Transaction ID is numeric
      expect(transactionId).to.match(/^\d+$/);  // Check if the Transaction ID is numeric
      
      // Adjust the length check: ensure it's at least 17 digits (for your case)
      expect(transactionId.length).to.be.greaterThan(16);  // Check if length is greater than 16 (or whatever the minimum is)
      
      // Optionally, store the Transaction ID for future use if needed
      cy.wrap(transactionId).as('transactionId');
      
      // Optionally, verify that the stored transaction ID matches the format
      cy.get('@transactionId').should('match', /^\d+$/);
      cy.wrap(transactionId).as('transactionId');
      cy.wait(2000);
      cy.get('.user-management > :nth-child(2) > :nth-child(4) > .sub-nav-list > :nth-child(2) > a').click();
      cy.wait(2000);
      cy.get(':nth-child(4) > .form-control').type(transactionId);  
      cy.wait(2000);
      cy.get('.btn').click();
      cy.wait(4000);
      cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
      cy.wait(2000);
  });
}

///###################################################################################
 ///###################################################################################
 UserManagementTestPage_058_File_Download(){
  cy.wait(2000);
  cy.get(this.locators.UserMangment).click();
  cy.wait(2000);
  cy.get(this.locators.BulkUpload).click();
  cy.wait(2000);
  cy.get(this.locators.ClickUserCreation).click();
  cy.wait(2000);
  cy.get(this.locators.Radio_Agent).click({ multiple: true });
  cy.wait(2000);
  cy.get(this.locators.DownloadButton).click();
  cy.wait(2000);

}


UserManagementTestPage_058_File_Upload() {
  const filePath = 'AgentTemplate.xlsx';
  
  // Start the file upload process
  cy.get("input[name='attachedFile']").click({ force: true });
  cy.wait(2000);
  cy.get('input[type="file"]').attachFile(filePath);
  cy.wait(2000);
  
  // Click the button to upload the file
  cy.get(':nth-child(2) > .enc-card > .card-content > :nth-child(3) > .btn').click();
  cy.wait(2000);
  
  // Click OK after the upload
  cy.get(this.locators.ClickOK).click();
  cy.wait(2000);
  
  // Capture and assert the success message with the Transaction ID
  cy.contains("File Uploaded Successfully. Transaction ID :").should("be.visible").then(($message) => {
      // Extract the Transaction ID from the message
      const transactionId = $message.text().match(/Transaction ID : (\d+)/)[1];
      
      // Assert that the Transaction ID is numeric
      expect(transactionId).to.match(/^\d+$/);  // Check if the Transaction ID is numeric
      
      // Adjust the length check: ensure it's at least 17 digits (for your case)
      expect(transactionId.length).to.be.greaterThan(16);  // Check if length is greater than 16 (or whatever the minimum is)
      
      // Optionally, store the Transaction ID for future use if needed
      cy.wrap(transactionId).as('transactionId');
      
      // Optionally, verify that the stored transaction ID matches the format
      cy.get('@transactionId').should('match', /^\d+$/);
      cy.wrap(transactionId).as('transactionId');
      cy.wait(2000);
      cy.get('.user-management > :nth-child(2) > :nth-child(4) > .sub-nav-list > :nth-child(2) > a').click();
      cy.wait(2000);
      cy.get(':nth-child(4) > .form-control').type(transactionId);  
      cy.wait(2000);
      cy.get('.btn').click();
      cy.wait(4000);
      cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
      cy.wait(2000);
  });
}

///###################################################################################

  ///###################################################################################
  UserManagementTestPage_059_File_Download(){
  cy.wait(2000);
  cy.get(this.locators.UserMangment).click();
  cy.wait(2000);
  cy.get(this.locators.BulkUpload).click();
  cy.wait(2000);
  cy.get(this.locators.ClickUserCreation).click();
  cy.wait(2000);
  cy.get(this.locators.Radio_Agent).click({ multiple: true });
  cy.wait(2000);
  cy.get(this.locators.DownloadButton).click();
  cy.wait(2000);

}


UserManagementTestPage_059_File_Upload() {
  const filePath = 'AgentTemplate.xlsx';
  
  // Start the file upload process
  cy.get("input[name='attachedFile']").click({ force: true });
  cy.wait(2000);
  cy.get('input[type="file"]').attachFile(filePath);
  cy.wait(2000);
  
  // Click the button to upload the file
  cy.get(':nth-child(2) > .enc-card > .card-content > :nth-child(3) > .btn').click();
  cy.wait(2000);
  
  // Click OK after the upload
  cy.get(this.locators.ClickOK).click();
  cy.wait(2000);
  
  // Capture and assert the success message with the Transaction ID
  cy.contains("File Uploaded Successfully. Transaction ID :").should("be.visible").then(($message) => {
      // Extract the Transaction ID from the message
      const transactionId = $message.text().match(/Transaction ID : (\d+)/)[1];
      
      // Assert that the Transaction ID is numeric
      expect(transactionId).to.match(/^\d+$/);  // Check if the Transaction ID is numeric
      
      // Adjust the length check: ensure it's at least 17 digits (for your case)
      expect(transactionId.length).to.be.greaterThan(16);  // Check if length is greater than 16 (or whatever the minimum is)
      
      // Optionally, store the Transaction ID for future use if needed
      cy.wrap(transactionId).as('transactionId');
      
      // Optionally, verify that the stored transaction ID matches the format
      cy.get('@transactionId').should('match', /^\d+$/);
      cy.wrap(transactionId).as('transactionId');
      cy.wait(2000);
      cy.get('.user-management > :nth-child(2) > :nth-child(4) > .sub-nav-list > :nth-child(2) > a').click();
      cy.wait(2000);
      cy.get(':nth-child(4) > .form-control').type(transactionId);  
      cy.wait(2000);
      cy.get('.btn').click();
      cy.wait(4000);
      cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
      cy.wait(2000);
  });
}

///###################################################################################
 ///###################################################################################
 UserManagementTestPage_060_File_Download(){
  cy.wait(2000);
  cy.get(this.locators.UserMangment).click();
  cy.wait(2000);
  cy.get(this.locators.BulkUpload).click();
  cy.wait(2000);
  cy.get(this.locators.ClickUserCreation).click();
  cy.wait(2000);
  cy.get(this.locators.Radio_Agent).click({ multiple: true });
  cy.wait(2000);
  cy.get(this.locators.DownloadButton).click();
  cy.wait(2000);

}


UserManagementTestPage_060_File_Upload() {
  const filePath = 'AgentTemplate.xlsx';
  
  // Start the file upload process
  cy.get("input[name='attachedFile']").click({ force: true });
  cy.wait(2000);
  cy.get('input[type="file"]').attachFile(filePath);
  cy.wait(2000);
  
  // Click the button to upload the file
  cy.get(':nth-child(2) > .enc-card > .card-content > :nth-child(3) > .btn').click();
  cy.wait(2000);
  
  // Click OK after the upload
  cy.get(this.locators.ClickOK).click();
  cy.wait(2000);
  
  // Capture and assert the success message with the Transaction ID
  cy.contains("File Uploaded Successfully. Transaction ID :").should("be.visible").then(($message) => {
      // Extract the Transaction ID from the message
      const transactionId = $message.text().match(/Transaction ID : (\d+)/)[1];
      
      // Assert that the Transaction ID is numeric
      expect(transactionId).to.match(/^\d+$/);  // Check if the Transaction ID is numeric
      
      // Adjust the length check: ensure it's at least 17 digits (for your case)
      expect(transactionId.length).to.be.greaterThan(16);  // Check if length is greater than 16 (or whatever the minimum is)
      
      // Optionally, store the Transaction ID for future use if needed
      cy.wrap(transactionId).as('transactionId');
      
      // Optionally, verify that the stored transaction ID matches the format
      cy.get('@transactionId').should('match', /^\d+$/);
      cy.wrap(transactionId).as('transactionId');
      cy.wait(2000);
      cy.get('.user-management > :nth-child(2) > :nth-child(4) > .sub-nav-list > :nth-child(2) > a').click();
      cy.wait(2000);
      cy.get(':nth-child(4) > .form-control').type(transactionId); 
      cy.wait(2000); 
      cy.get('.btn').click();
      cy.wait(4000);
      cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
      cy.wait(2000);
  });
}

///###################################################################################
 ///###################################################################################
 UserManagementTestPage_061_File_Download(){
  cy.wait(2000);
  cy.get(this.locators.UserMangment).click();
  cy.wait(2000);
  cy.get(this.locators.BulkUpload).click();
  cy.wait(2000);
  cy.get(this.locators.ClickUserCreation).click();
  cy.wait(2000);
  cy.get(this.locators.Radio_Agent).click({ multiple: true });
  cy.wait(2000);
  cy.get(this.locators.DownloadButton).click();
  cy.wait(2000);

}


UserManagementTestPage_061_File_Upload() {
  const filePath = 'AgentTemplate.xlsx';
  
  // Start the file upload process
  cy.get("input[name='attachedFile']").click({ force: true });
  cy.wait(2000);
  cy.get('input[type="file"]').attachFile(filePath);
  cy.wait(2000);
  
  // Click the button to upload the file
  cy.get(':nth-child(2) > .enc-card > .card-content > :nth-child(3) > .btn').click();
  cy.wait(2000);
  
  // Click OK after the upload
  cy.get(this.locators.ClickOK).click();
  cy.wait(2000);
  
  // Capture and assert the success message with the Transaction ID
  cy.contains("File Uploaded Successfully. Transaction ID :").should("be.visible").then(($message) => {
      // Extract the Transaction ID from the message
      const transactionId = $message.text().match(/Transaction ID : (\d+)/)[1];
      
      // Assert that the Transaction ID is numeric
      expect(transactionId).to.match(/^\d+$/);  // Check if the Transaction ID is numeric
      
      // Adjust the length check: ensure it's at least 17 digits (for your case)
      expect(transactionId.length).to.be.greaterThan(16);  // Check if length is greater than 16 (or whatever the minimum is)
      
      // Optionally, store the Transaction ID for future use if needed
      cy.wrap(transactionId).as('transactionId');
      
      // Optionally, verify that the stored transaction ID matches the format
      cy.get('@transactionId').should('match', /^\d+$/);
      cy.wrap(transactionId).as('transactionId');
      cy.wait(2000);
      cy.get('.user-management > :nth-child(2) > :nth-child(4) > .sub-nav-list > :nth-child(2) > a').click();
      cy.wait(2000);
      cy.get(':nth-child(4) > .form-control').type(transactionId);  
      cy.wait(2000);
      cy.get('.btn').click();
      cy.wait(4000);
      cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
      cy.wait(2000);
  });
}

///###################################################################################
  ///###################################################################################
  UserManagementTestPage_062_File_Download(){
  cy.wait(2000);
  cy.get(this.locators.UserMangment).click();
  cy.wait(2000);
  cy.get(this.locators.BulkUpload).click();
  cy.wait(2000);
  cy.get(this.locators.ClickUserCreation).click();
  cy.wait(2000);
  cy.get(this.locators.Radio_Agent).click({ multiple: true });
  cy.wait(2000);
  cy.get(this.locators.DownloadButton).click();
  cy.wait(2000);

}


UserManagementTestPage_062_File_Upload() {
  const filePath = 'AgentTemplate.xlsx';
  
  // Start the file upload process
  cy.get("input[name='attachedFile']").click({ force: true });
  cy.wait(2000);
  cy.get('input[type="file"]').attachFile(filePath);
  cy.wait(2000);
  
  // Click the button to upload the file
  cy.get(':nth-child(2) > .enc-card > .card-content > :nth-child(3) > .btn').click();
  cy.wait(2000);
  
  // Click OK after the upload
  cy.get(this.locators.ClickOK).click();
  cy.wait(2000);
  
  // Capture and assert the success message with the Transaction ID
  cy.contains("File Uploaded Successfully. Transaction ID :").should("be.visible").then(($message) => {
      // Extract the Transaction ID from the message
      const transactionId = $message.text().match(/Transaction ID : (\d+)/)[1];
      
      // Assert that the Transaction ID is numeric
      expect(transactionId).to.match(/^\d+$/);  // Check if the Transaction ID is numeric
      
      // Adjust the length check: ensure it's at least 17 digits (for your case)
      expect(transactionId.length).to.be.greaterThan(16);  // Check if length is greater than 16 (or whatever the minimum is)
      
      // Optionally, store the Transaction ID for future use if needed
      cy.wrap(transactionId).as('transactionId');
      
      // Optionally, verify that the stored transaction ID matches the format
      cy.get('@transactionId').should('match', /^\d+$/);
      cy.wrap(transactionId).as('transactionId');
      cy.wait(2000);
      cy.get('.user-management > :nth-child(2) > :nth-child(4) > .sub-nav-list > :nth-child(2) > a').click();
      cy.wait(2000);
      cy.get(':nth-child(4) > .form-control').type(transactionId);  
      cy.wait(2000);
      cy.get('.btn').click();
      cy.wait(4000);
      cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
      cy.wait(2000);
  });
}

///###################################################################################

 ///###################################################################################
 UserManagementTestPage_063_File_Download(){
  cy.wait(2000);
  cy.get(this.locators.UserMangment).click();
  cy.wait(2000);
  cy.get(this.locators.BulkUpload).click();
  cy.wait(2000);
  cy.get(this.locators.ClickUserCreation).click();
  cy.wait(2000);
  cy.get(this.locators.Radio_Agent).click({ multiple: true });
  cy.wait(2000);
  cy.get(this.locators.DownloadButton).click();
  cy.wait(2000);

}


UserManagementTestPage_063_File_Upload() {
  const filePath = 'AgentTemplate.xlsx';
  
  // Start the file upload process
  cy.get("input[name='attachedFile']").click({ force: true });
  cy.wait(2000);
  cy.get('input[type="file"]').attachFile(filePath);
  cy.wait(2000);
  
  // Click the button to upload the file
  cy.get(':nth-child(2) > .enc-card > .card-content > :nth-child(3) > .btn').click();
  cy.wait(2000);
  
  // Click OK after the upload
  cy.get(this.locators.ClickOK).click();
  cy.wait(2000);
  
  // Capture and assert the success message with the Transaction ID
  cy.contains("File Uploaded Successfully. Transaction ID :").should("be.visible").then(($message) => {
      // Extract the Transaction ID from the message
      const transactionId = $message.text().match(/Transaction ID : (\d+)/)[1];
      
      // Assert that the Transaction ID is numeric
      expect(transactionId).to.match(/^\d+$/);  // Check if the Transaction ID is numeric
      
      // Adjust the length check: ensure it's at least 17 digits (for your case)
      expect(transactionId.length).to.be.greaterThan(16);  // Check if length is greater than 16 (or whatever the minimum is)
      
      // Optionally, store the Transaction ID for future use if needed
      cy.wrap(transactionId).as('transactionId');
      
      // Optionally, verify that the stored transaction ID matches the format
      cy.get('@transactionId').should('match', /^\d+$/);
      cy.wrap(transactionId).as('transactionId');
      cy.wait(2000);
      cy.get('.user-management > :nth-child(2) > :nth-child(4) > .sub-nav-list > :nth-child(2) > a').click();
      cy.wait(2000);
      cy.get(':nth-child(4) > .form-control').type(transactionId);  
      cy.wait(2000);
      cy.get('.btn').click();
      cy.wait(4000);
      cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
      cy.wait(2000);
  });
}

///###################################################################################
 ///###################################################################################
 UserManagementTestPage_064_File_Download(){
  cy.wait(2000);
  cy.get(this.locators.UserMangment).click();
  cy.wait(2000);
  cy.get(this.locators.BulkUpload).click();
  cy.wait(2000);
  cy.get(this.locators.ClickUserCreation).click();
  cy.wait(2000);
  cy.get(this.locators.Radio_Agency).click({ multiple: true });
  cy.wait(2000);
  cy.get(this.locators.DownloadButton1).click();
  cy.wait(2000);

}


UserManagementTestPage_064_File_Upload() {
  const filePath = 'AgencyTemplate.xlsx';
  
  // Start the file upload process
  cy.get("input[name='attachedFile']").click({ force: true });
  cy.wait(2000);
  cy.get('input[type="file"]').attachFile(filePath);
  cy.wait(2000);
  
  // Click the button to upload the file
  cy.get(':nth-child(2) > .enc-card > .card-content > :nth-child(3) > .btn').click();
  cy.wait(2000);
  
  // Click OK after the upload
  cy.get(this.locators.ClickOK).click();
  cy.wait(2000);
  
  // Capture and assert the success message with the Transaction ID
  cy.contains("File Uploaded Successfully. Transaction ID :").should("be.visible").then(($message) => {
      // Extract the Transaction ID from the message
      const transactionId = $message.text().match(/Transaction ID : (\d+)/)[1];
      
      // Assert that the Transaction ID is numeric
      expect(transactionId).to.match(/^\d+$/);  // Check if the Transaction ID is numeric
      
      // Adjust the length check: ensure it's at least 17 digits (for your case)
      expect(transactionId.length).to.be.greaterThan(16);  // Check if length is greater than 16 (or whatever the minimum is)
      
      // Optionally, store the Transaction ID for future use if needed
      cy.wrap(transactionId).as('transactionId');
      
      // Optionally, verify that the stored transaction ID matches the format
      cy.get('@transactionId').should('match', /^\d+$/);
      cy.wrap(transactionId).as('transactionId');
      cy.wait(2000);
      cy.get('.user-management > :nth-child(2) > :nth-child(4) > .sub-nav-list > :nth-child(2) > a').click();
      cy.wait(2000);
      cy.get(':nth-child(4) > .form-control').type(transactionId);
      cy.wait(2000);  
      cy.get('.btn').click();
      cy.wait(4000);
      cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
      cy.wait(2000);
  });
}

///###################################################################################

   ///###################################################################################
   UserManagementTestPage_065_File_Download(){
  cy.wait(2000);
  cy.get(this.locators.UserMangment).click();
  cy.wait(2000);
  cy.get(this.locators.BulkUpload).click();
  cy.wait(2000);
  cy.get(this.locators.ClickUserCreation).click();
  cy.wait(2000);
  cy.get(this.locators.Radio_Agency).click({ multiple: true });
  cy.wait(2000);
  cy.get(this.locators.DownloadButton1).click();
  cy.wait(2000);

}


UserManagementTestPage_065_File_Upload() {
  const filePath = 'AgencyTemplate.xlsx';
  
  // Start the file upload process
  cy.get("input[name='attachedFile']").click({ force: true });
  cy.wait(2000);
  cy.get('input[type="file"]').attachFile(filePath);
  cy.wait(2000);
  
  // Click the button to upload the file
  cy.get(':nth-child(2) > .enc-card > .card-content > :nth-child(3) > .btn').click();
  cy.wait(2000);
  
  // Click OK after the upload
  cy.get(this.locators.ClickOK).click();
  cy.wait(2000);
  
  // Capture and assert the success message with the Transaction ID
  cy.contains("File Uploaded Successfully. Transaction ID :").should("be.visible").then(($message) => {
      // Extract the Transaction ID from the message
      const transactionId = $message.text().match(/Transaction ID : (\d+)/)[1];
      
      // Assert that the Transaction ID is numeric
      expect(transactionId).to.match(/^\d+$/);  // Check if the Transaction ID is numeric
      
      // Adjust the length check: ensure it's at least 17 digits (for your case)
      expect(transactionId.length).to.be.greaterThan(16);  // Check if length is greater than 16 (or whatever the minimum is)
      
      // Optionally, store the Transaction ID for future use if needed
      cy.wrap(transactionId).as('transactionId');
      
      // Optionally, verify that the stored transaction ID matches the format
      cy.get('@transactionId').should('match', /^\d+$/);
      cy.wrap(transactionId).as('transactionId');
      cy.wait(2000);
      cy.get('.user-management > :nth-child(2) > :nth-child(4) > .sub-nav-list > :nth-child(2) > a').click();
      cy.wait(2000);
      cy.get(':nth-child(4) > .form-control').type(transactionId);  
      cy.wait(2000);
      cy.get('.btn').click();
      cy.wait(4000);
      cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
      cy.wait(2000);
  });
}

///###################################################################################
  ///###################################################################################
  UserManagementTestPage_066_File_Download(){
  cy.wait(2000);
  cy.get(this.locators.UserMangment).click();
  cy.wait(2000);
  cy.get(this.locators.BulkUpload).click();
  cy.wait(2000);
  cy.get(this.locators.ClickUserCreation).click();
  cy.wait(2000);
  cy.get(this.locators.Radio_Agency).click({ multiple: true });
  cy.wait(2000);
  cy.get(this.locators.DownloadButton1).click();
  cy.wait(2000);

}


UserManagementTestPage_066_File_Upload() {
  const filePath = 'AgencyTemplate.xlsx';
  
  // Start the file upload process
  cy.get("input[name='attachedFile']").click({ force: true });
  cy.wait(2000);
  cy.get('input[type="file"]').attachFile(filePath);
  cy.wait(2000);
  
  // Click the button to upload the file
  cy.get(':nth-child(2) > .enc-card > .card-content > :nth-child(3) > .btn').click();
  cy.wait(2000);
  
  // Click OK after the upload
  cy.get(this.locators.ClickOK).click();
  cy.wait(2000);
  
  // Capture and assert the success message with the Transaction ID
  cy.contains("File Uploaded Successfully. Transaction ID :").should("be.visible").then(($message) => {
      // Extract the Transaction ID from the message
      const transactionId = $message.text().match(/Transaction ID : (\d+)/)[1];
      
      // Assert that the Transaction ID is numeric
      expect(transactionId).to.match(/^\d+$/);  // Check if the Transaction ID is numeric
      
      // Adjust the length check: ensure it's at least 17 digits (for your case)
      expect(transactionId.length).to.be.greaterThan(16);  // Check if length is greater than 16 (or whatever the minimum is)
      
      // Optionally, store the Transaction ID for future use if needed
      cy.wrap(transactionId).as('transactionId');
      
      // Optionally, verify that the stored transaction ID matches the format
      cy.get('@transactionId').should('match', /^\d+$/);
      cy.wrap(transactionId).as('transactionId');
      cy.wait(2000);
      cy.get('.user-management > :nth-child(2) > :nth-child(4) > .sub-nav-list > :nth-child(2) > a').click();
      cy.wait(2000);
      cy.get(':nth-child(4) > .form-control').type(transactionId);  
      cy.wait(2000);
      cy.get('.btn').click();
      cy.wait(4000);
      cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
      cy.wait(2000);
  });
}

///###################################################################################

  ///###################################################################################
  UserManagementTestPage_067_File_Download(){
  cy.wait(2000);
  cy.get(this.locators.UserMangment).click();
  cy.wait(2000);
  cy.get(this.locators.BulkUpload).click();
  cy.wait(2000);
  cy.get(this.locators.ClickUserCreation).click();
  cy.wait(2000);
  cy.get(this.locators.Radio_Agency).click({ multiple: true });
  cy.wait(2000);
  cy.get(this.locators.DownloadButton1).click();
  cy.wait(2000);

}


UserManagementTestPage_067_File_Upload() {
  const filePath = 'AgencyTemplate.xlsx';
  
  // Start the file upload process
  cy.get("input[name='attachedFile']").click({ force: true });
  cy.wait(2000);
  cy.get('input[type="file"]').attachFile(filePath);
  cy.wait(2000);
  
  // Click the button to upload the file
  cy.get(':nth-child(2) > .enc-card > .card-content > :nth-child(3) > .btn').click();
  cy.wait(2000);
  
  // Click OK after the upload
  cy.get(this.locators.ClickOK).click();
  cy.wait(2000);
  
  // Capture and assert the success message with the Transaction ID
  cy.contains("File Uploaded Successfully. Transaction ID :").should("be.visible").then(($message) => {
      // Extract the Transaction ID from the message
      const transactionId = $message.text().match(/Transaction ID : (\d+)/)[1];
      
      // Assert that the Transaction ID is numeric
      expect(transactionId).to.match(/^\d+$/);  // Check if the Transaction ID is numeric
      
      // Adjust the length check: ensure it's at least 17 digits (for your case)
      expect(transactionId.length).to.be.greaterThan(16);  // Check if length is greater than 16 (or whatever the minimum is)
      
      // Optionally, store the Transaction ID for future use if needed
      cy.wrap(transactionId).as('transactionId');
      
      // Optionally, verify that the stored transaction ID matches the format
      cy.get('@transactionId').should('match', /^\d+$/);
      cy.wrap(transactionId).as('transactionId');
      cy.wait(2000);
      cy.get('.user-management > :nth-child(2) > :nth-child(4) > .sub-nav-list > :nth-child(2) > a').click();
      cy.wait(2000);
      cy.get(':nth-child(4) > .form-control').type(transactionId);  
      cy.wait(2000);
      cy.get('.btn').click();
      cy.wait(4000);
      cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
      cy.wait(2000);
  });
}

///###################################################################################
  ///###################################################################################
  UserManagementTestPage_068_File_Download(){
  cy.wait(2000);
  cy.get(this.locators.UserMangment).click();
  cy.wait(2000);
  cy.get(this.locators.BulkUpload).click();
  cy.wait(2000);
  cy.get(this.locators.ClickUserCreation).click();
  cy.wait(2000);
  cy.get(this.locators.Radio_Agency).click({ multiple: true });
  cy.wait(2000);
  cy.get(this.locators.DownloadButton1).click();
  cy.wait(2000);

}


UserManagementTestPage_068_File_Upload() {
  const filePath = 'AgencyTemplate.xlsx';
  
  // Start the file upload process
  cy.get("input[name='attachedFile']").click({ force: true });
  cy.wait(2000);
  cy.get('input[type="file"]').attachFile(filePath);
  cy.wait(2000);
  
  // Click the button to upload the file
  cy.get(':nth-child(2) > .enc-card > .card-content > :nth-child(3) > .btn').click();
  cy.wait(2000);
  
  // Click OK after the upload
  cy.get(this.locators.ClickOK).click();
  cy.wait(2000);
  
  // Capture and assert the success message with the Transaction ID
  cy.contains("File Uploaded Successfully. Transaction ID :").should("be.visible").then(($message) => {
      // Extract the Transaction ID from the message
      const transactionId = $message.text().match(/Transaction ID : (\d+)/)[1];
      
      // Assert that the Transaction ID is numeric
      expect(transactionId).to.match(/^\d+$/);  // Check if the Transaction ID is numeric
      
      // Adjust the length check: ensure it's at least 17 digits (for your case)
      expect(transactionId.length).to.be.greaterThan(16);  // Check if length is greater than 16 (or whatever the minimum is)
      
      // Optionally, store the Transaction ID for future use if needed
      cy.wrap(transactionId).as('transactionId');
      
      // Optionally, verify that the stored transaction ID matches the format
      cy.get('@transactionId').should('match', /^\d+$/);
      cy.wrap(transactionId).as('transactionId');
      cy.wait(2000);
      cy.get('.user-management > :nth-child(2) > :nth-child(4) > .sub-nav-list > :nth-child(2) > a').click();
      cy.wait(2000);
      cy.get(':nth-child(4) > .form-control').type(transactionId); 
      cy.wait(2000); 
      cy.get('.btn').click();
      cy.wait(4000);
      cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
      cy.wait(2000);
  });
}

///###################################################################################
   ///###################################################################################
UserManagementTestPage_069_File_Download(){
  cy.wait(2000);
  cy.get(this.locators.UserMangment).click();
  cy.wait(2000);
  cy.get(this.locators.BulkUpload).click();
  cy.wait(2000);
  cy.get(this.locators.ClickUserCreation).click();
  cy.wait(2000);
  cy.get(this.locators.Radio_Agency).click({ multiple: true });
  cy.wait(2000);
  cy.get(this.locators.DownloadButton1).click();
  cy.wait(2000);

}


UserManagementTestPage_069_File_Upload() {
  const filePath = 'AgencyTemplate.xlsx';
  
  // Start the file upload process
  cy.get("input[name='attachedFile']").click({ force: true });
  cy.wait(2000);
  cy.get('input[type="file"]').attachFile(filePath);
  cy.wait(2000);
  
  // Click the button to upload the file
  cy.get(':nth-child(2) > .enc-card > .card-content > :nth-child(3) > .btn').click();
  cy.wait(2000);
  
  // Click OK after the upload
  cy.get(this.locators.ClickOK).click();
  cy.wait(2000);
  
  // Capture and assert the success message with the Transaction ID
  cy.contains("File Uploaded Successfully. Transaction ID :").should("be.visible").then(($message) => {
      // Extract the Transaction ID from the message
      const transactionId = $message.text().match(/Transaction ID : (\d+)/)[1];
      
      // Assert that the Transaction ID is numeric
      expect(transactionId).to.match(/^\d+$/);  // Check if the Transaction ID is numeric
      
      // Adjust the length check: ensure it's at least 17 digits (for your case)
      expect(transactionId.length).to.be.greaterThan(16);  // Check if length is greater than 16 (or whatever the minimum is)
      
      // Optionally, store the Transaction ID for future use if needed
      cy.wrap(transactionId).as('transactionId');
      
      // Optionally, verify that the stored transaction ID matches the format
      cy.get('@transactionId').should('match', /^\d+$/);
      cy.wrap(transactionId).as('transactionId');
      cy.wait(2000);
      cy.get('.user-management > :nth-child(2) > :nth-child(4) > .sub-nav-list > :nth-child(2) > a').click();
      cy.wait(2000);
      cy.get(':nth-child(4) > .form-control').type(transactionId); 
      cy.wait(2000); 
      cy.get('.btn').click();
      cy.wait(4000);
      cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
      cy.wait(2000);
  });
}

///###################################################################################
   ///###################################################################################
  UserManagementTestPage_070_File_Download(){
  cy.wait(2000);
  cy.get(this.locators.UserMangment).click();
  cy.wait(2000);
  cy.get(this.locators.BulkUpload).click();
  cy.wait(2000);
  cy.get(this.locators.ClickUserCreation).click();
  cy.wait(2000);
  cy.get(this.locators.Radio_Agency).click({ multiple: true });
  cy.wait(2000);
  cy.get(this.locators.DownloadButton1).click();
  cy.wait(2000);

}


UserManagementTestPage_070_File_Upload() {
  const filePath = 'AgencyTemplate.xlsx';
  
  // Start the file upload process
  cy.get("input[name='attachedFile']").click({ force: true });
  cy.wait(2000);
  cy.get('input[type="file"]').attachFile(filePath);
  cy.wait(2000);
  
  // Click the button to upload the file
  cy.get(':nth-child(2) > .enc-card > .card-content > :nth-child(3) > .btn').click();
  cy.wait(2000);
  
  // Click OK after the upload
  cy.get(this.locators.ClickOK).click();
  cy.wait(2000);
  
  // Capture and assert the success message with the Transaction ID
  cy.contains("File Uploaded Successfully. Transaction ID :").should("be.visible").then(($message) => {
      // Extract the Transaction ID from the message
      const transactionId = $message.text().match(/Transaction ID : (\d+)/)[1];
      
      // Assert that the Transaction ID is numeric
      expect(transactionId).to.match(/^\d+$/);  // Check if the Transaction ID is numeric
      
      // Adjust the length check: ensure it's at least 17 digits (for your case)
      expect(transactionId.length).to.be.greaterThan(16);  // Check if length is greater than 16 (or whatever the minimum is)
      
      // Optionally, store the Transaction ID for future use if needed
      cy.wrap(transactionId).as('transactionId');
      
      // Optionally, verify that the stored transaction ID matches the format
      cy.get('@transactionId').should('match', /^\d+$/);
      cy.wrap(transactionId).as('transactionId');
      cy.wait(2000);
      cy.get('.user-management > :nth-child(2) > :nth-child(4) > .sub-nav-list > :nth-child(2) > a').click();
      cy.wait(2000);
      cy.get(':nth-child(4) > .form-control').type(transactionId);  
      cy.wait(2000);
      cy.get('.btn').click();
      cy.wait(4000);
      cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
      cy.wait(2000);
  });
}

///###################################################################################
  ///###################################################################################
  UserManagementTestPage_071_File_Download(){
  cy.wait(2000);
  cy.get(this.locators.UserMangment).click();
  cy.wait(2000);
  cy.get(this.locators.BulkUpload).click();
  cy.wait(2000);
  cy.get(this.locators.ClickUserCreation).click();
  cy.wait(2000);
  cy.get(this.locators.Radio_Agency).click({ multiple: true });
  cy.wait(2000);
  cy.get(this.locators.DownloadButton1).click();
  cy.wait(2000);

}


UserManagementTestPage_071_File_Upload() {
  const filePath = 'AgencyTemplate.xlsx';
  
  // Start the file upload process
  cy.get("input[name='attachedFile']").click({ force: true });
  cy.wait(2000);
  cy.get('input[type="file"]').attachFile(filePath);
  cy.wait(2000);
  
  // Click the button to upload the file
  cy.get(':nth-child(2) > .enc-card > .card-content > :nth-child(3) > .btn').click();
  cy.wait(2000);
  
  // Click OK after the upload
  cy.get(this.locators.ClickOK).click();
  cy.wait(2000);
  
  // Capture and assert the success message with the Transaction ID
  cy.contains("File Uploaded Successfully. Transaction ID :").should("be.visible").then(($message) => {
      // Extract the Transaction ID from the message
      const transactionId = $message.text().match(/Transaction ID : (\d+)/)[1];
      
      // Assert that the Transaction ID is numeric
      expect(transactionId).to.match(/^\d+$/);  // Check if the Transaction ID is numeric
      
      // Adjust the length check: ensure it's at least 17 digits (for your case)
      expect(transactionId.length).to.be.greaterThan(16);  // Check if length is greater than 16 (or whatever the minimum is)
      
      // Optionally, store the Transaction ID for future use if needed
      cy.wrap(transactionId).as('transactionId');
      
      // Optionally, verify that the stored transaction ID matches the format
      cy.get('@transactionId').should('match', /^\d+$/);
      cy.wrap(transactionId).as('transactionId');
      cy.wait(2000);
      cy.get('.user-management > :nth-child(2) > :nth-child(4) > .sub-nav-list > :nth-child(2) > a').click();
      cy.wait(2000);
      cy.get(':nth-child(4) > .form-control').type(transactionId);  
      cy.wait(2000);
      cy.get('.btn').click();
      cy.wait(4000);
      cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
      cy.wait(2000);
  });
}

///###################################################################################

   ///###################################################################################
  UserManagementTestPage_072_File_Download(){
  cy.wait(2000);
  cy.get(this.locators.UserMangment).click();
  cy.wait(2000);
  cy.get(this.locators.BulkUpload).click();
  cy.wait(2000);
  cy.get(this.locators.ClickUserCreation).click();
  cy.wait(2000);
  cy.get(this.locators.Radio_Agency).click({ multiple: true });
  cy.wait(2000);
  cy.get(this.locators.DownloadButton1).click();
  cy.wait(2000);

}


UserManagementTestPage_072_File_Upload() {
  const filePath = 'AgencyTemplate.xlsx';
  
  // Start the file upload process
  cy.get("input[name='attachedFile']").click({ force: true });
  cy.wait(2000);
  cy.get('input[type="file"]').attachFile(filePath);
  cy.wait(2000);
  
  // Click the button to upload the file
  cy.get(':nth-child(2) > .enc-card > .card-content > :nth-child(3) > .btn').click();
  cy.wait(2000);
  
  // Click OK after the upload
  cy.get(this.locators.ClickOK).click();
  cy.wait(2000);
  
  // Capture and assert the success message with the Transaction ID
  cy.contains("File Uploaded Successfully. Transaction ID :").should("be.visible").then(($message) => {
      // Extract the Transaction ID from the message
      const transactionId = $message.text().match(/Transaction ID : (\d+)/)[1];
      
      // Assert that the Transaction ID is numeric
      expect(transactionId).to.match(/^\d+$/);  // Check if the Transaction ID is numeric
      
      // Adjust the length check: ensure it's at least 17 digits (for your case)
      expect(transactionId.length).to.be.greaterThan(16);  // Check if length is greater than 16 (or whatever the minimum is)
      
      // Optionally, store the Transaction ID for future use if needed
      cy.wrap(transactionId).as('transactionId');
      
      // Optionally, verify that the stored transaction ID matches the format
      cy.get('@transactionId').should('match', /^\d+$/);
      cy.wrap(transactionId).as('transactionId');
      cy.wait(2000);
      cy.get('.user-management > :nth-child(2) > :nth-child(4) > .sub-nav-list > :nth-child(2) > a').click();
      cy.wait(2000);
      cy.get(':nth-child(4) > .form-control').type(transactionId);  
      cy.wait(2000);
      cy.get('.btn').click();
      cy.wait(4000);
      cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
      cy.wait(2000);
  });
}

///###################################################################################
   ///###################################################################################
  UserManagementTestPage_073_File_Download(){
  cy.wait(2000);
  cy.get(this.locators.UserMangment).click();
  cy.wait(2000);
  cy.get(this.locators.BulkUpload).click();
  cy.wait(2000);
  cy.get(this.locators.ClickUserCreation).click();
  cy.wait(2000);
  cy.get(this.locators.Radio_Agency).click({ multiple: true });
  cy.wait(2000);
  cy.get(this.locators.DownloadButton1).click();
  cy.wait(2000);

}


UserManagementTestPage_073_File_Upload() {
  const filePath = 'AgencyTemplate.xlsx';
  
  // Start the file upload process
  cy.get("input[name='attachedFile']").click({ force: true });
  cy.wait(2000);
  cy.get('input[type="file"]').attachFile(filePath);
  cy.wait(2000);
  
  // Click the button to upload the file
  cy.get(':nth-child(2) > .enc-card > .card-content > :nth-child(3) > .btn').click();
  cy.wait(2000);
  
  // Click OK after the upload
  cy.get(this.locators.ClickOK).click();
  cy.wait(2000);
  
  // Capture and assert the success message with the Transaction ID
  cy.contains("File Uploaded Successfully. Transaction ID :").should("be.visible").then(($message) => {
      // Extract the Transaction ID from the message
      const transactionId = $message.text().match(/Transaction ID : (\d+)/)[1];
      
      // Assert that the Transaction ID is numeric
      expect(transactionId).to.match(/^\d+$/);  // Check if the Transaction ID is numeric
      
      // Adjust the length check: ensure it's at least 17 digits (for your case)
      expect(transactionId.length).to.be.greaterThan(16);  // Check if length is greater than 16 (or whatever the minimum is)
      
      // Optionally, store the Transaction ID for future use if needed
      cy.wrap(transactionId).as('transactionId');
      
      // Optionally, verify that the stored transaction ID matches the format
      cy.get('@transactionId').should('match', /^\d+$/);
      cy.wrap(transactionId).as('transactionId');
      cy.wait(2000);
      cy.get('.user-management > :nth-child(2) > :nth-child(4) > .sub-nav-list > :nth-child(2) > a').click();
      cy.wait(2000);
      cy.get(':nth-child(4) > .form-control').type(transactionId); 
      cy.wait(2000); 
      cy.get('.btn').click();
      cy.wait(4000);
      cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
      cy.wait(2000);
  });
}

///###################################################################################
   ///###################################################################################
 UserManagementTestPage_074_File_Download(){
  cy.wait(2000);
  cy.get(this.locators.UserMangment).click();
  cy.wait(2000);
  cy.get(this.locators.BulkUpload).click();
  cy.wait(2000);
  cy.get(this.locators.ClickUserCreation).click();
  cy.wait(2000);
  cy.get(this.locators.Radio_Agency).click({ multiple: true });
  cy.wait(2000);
  cy.get(this.locators.DownloadButton1).click();
  cy.wait(2000);

}


UserManagementTestPage_074_File_Upload() {
  const filePath = 'AgencyTemplate.xlsx';
  
  // Start the file upload process
  cy.get("input[name='attachedFile']").click({ force: true });
  cy.wait(2000);
  cy.get('input[type="file"]').attachFile(filePath);
  cy.wait(2000);
  
  // Click the button to upload the file
  cy.get(':nth-child(2) > .enc-card > .card-content > :nth-child(3) > .btn').click();
  cy.wait(2000);
  
  // Click OK after the upload
  cy.get(this.locators.ClickOK).click();
  cy.wait(2000);
  
  // Capture and assert the success message with the Transaction ID
  cy.contains("File Uploaded Successfully. Transaction ID :").should("be.visible").then(($message) => {
      // Extract the Transaction ID from the message
      const transactionId = $message.text().match(/Transaction ID : (\d+)/)[1];
      
      // Assert that the Transaction ID is numeric
      expect(transactionId).to.match(/^\d+$/);  // Check if the Transaction ID is numeric
      
      // Adjust the length check: ensure it's at least 17 digits (for your case)
      expect(transactionId.length).to.be.greaterThan(16);  // Check if length is greater than 16 (or whatever the minimum is)
      
      // Optionally, store the Transaction ID for future use if needed
      cy.wrap(transactionId).as('transactionId');
      
      // Optionally, verify that the stored transaction ID matches the format
      cy.get('@transactionId').should('match', /^\d+$/);
      cy.wrap(transactionId).as('transactionId');
      cy.wait(2000);
      cy.get('.user-management > :nth-child(2) > :nth-child(4) > .sub-nav-list > :nth-child(2) > a').click();
      cy.wait(2000);
      cy.get(':nth-child(4) > .form-control').type(transactionId);
      cy.wait(2000);  
      cy.get('.btn').click();
      cy.wait(4000);
      cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
      cy.wait(2000);
  });
}

///###################################################################################
  ///###################################################################################
  UserManagementTestPage_075_File_Download(){
  cy.wait(2000);
  cy.get(this.locators.UserMangment).click();
  cy.wait(2000);
  cy.get(this.locators.BulkUpload).click();
  cy.wait(2000);
  cy.get(this.locators.ClickUserCreation).click();
  cy.wait(2000);
  cy.get(this.locators.Radio_Agency).click({ multiple: true });
  cy.wait(2000);
  cy.get(this.locators.DownloadButton1).click();
  cy.wait(2000);

}


UserManagementTestPage_075_File_Upload() {
  const filePath = 'AgencyTemplate.xlsx';
  
  // Start the file upload process
  cy.get("input[name='attachedFile']").click({ force: true });
  cy.wait(2000);
  cy.get('input[type="file"]').attachFile(filePath);
  cy.wait(2000);
  
  // Click the button to upload the file
  cy.get(':nth-child(2) > .enc-card > .card-content > :nth-child(3) > .btn').click();
  cy.wait(2000);
  
  // Click OK after the upload
  cy.get(this.locators.ClickOK).click();
  cy.wait(2000);
  
  // Capture and assert the success message with the Transaction ID
  cy.contains("File Uploaded Successfully. Transaction ID :").should("be.visible").then(($message) => {
      // Extract the Transaction ID from the message
      const transactionId = $message.text().match(/Transaction ID : (\d+)/)[1];
      
      // Assert that the Transaction ID is numeric
      expect(transactionId).to.match(/^\d+$/);  // Check if the Transaction ID is numeric
      
      // Adjust the length check: ensure it's at least 17 digits (for your case)
      expect(transactionId.length).to.be.greaterThan(16);  // Check if length is greater than 16 (or whatever the minimum is)
      
      // Optionally, store the Transaction ID for future use if needed
      cy.wrap(transactionId).as('transactionId');
      
      // Optionally, verify that the stored transaction ID matches the format
      cy.get('@transactionId').should('match', /^\d+$/);
      cy.wrap(transactionId).as('transactionId');
      cy.wait(2000);
      cy.get('.user-management > :nth-child(2) > :nth-child(4) > .sub-nav-list > :nth-child(2) > a').click();
      cy.wait(2000);
      cy.get(':nth-child(4) > .form-control').type(transactionId);  
      cy.wait(2000);
      cy.get('.btn').click();
      cy.wait(4000);
      cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
      cy.wait(2000);
  });
}

///###################################################################################
  ///###################################################################################
UserManagementTestPage_076_File_Download(){
  cy.wait(2000);
  cy.get(this.locators.UserMangment).click();
  cy.wait(2000);
  cy.get(this.locators.BulkUpload).click();
  cy.wait(2000);
  cy.get(this.locators.ClickUserCreation).click();
  cy.wait(2000);
  cy.get(this.locators.Radio_Agency).click({ multiple: true });
  cy.wait(2000);
  cy.get(this.locators.DownloadButton1).click();
  cy.wait(2000);

}


UserManagementTestPage_076_File_Upload() {
  const filePath = 'AgencyTemplate.xlsx';
  
  // Start the file upload process
  cy.get("input[name='attachedFile']").click({ force: true });
  cy.wait(2000);
  cy.get('input[type="file"]').attachFile(filePath);
  cy.wait(2000);
  
  // Click the button to upload the file
  cy.get(':nth-child(2) > .enc-card > .card-content > :nth-child(3) > .btn').click();
  cy.wait(2000);
  
  // Click OK after the upload
  cy.get(this.locators.ClickOK).click();
  cy.wait(2000);
  
  // Capture and assert the success message with the Transaction ID
  cy.contains("File Uploaded Successfully. Transaction ID :").should("be.visible").then(($message) => {
      // Extract the Transaction ID from the message
      const transactionId = $message.text().match(/Transaction ID : (\d+)/)[1];
      
      // Assert that the Transaction ID is numeric
      expect(transactionId).to.match(/^\d+$/);  // Check if the Transaction ID is numeric
      
      // Adjust the length check: ensure it's at least 17 digits (for your case)
      expect(transactionId.length).to.be.greaterThan(16);  // Check if length is greater than 16 (or whatever the minimum is)
      
      // Optionally, store the Transaction ID for future use if needed
      cy.wrap(transactionId).as('transactionId');
      
      // Optionally, verify that the stored transaction ID matches the format
      cy.get('@transactionId').should('match', /^\d+$/);
      cy.wrap(transactionId).as('transactionId');
      cy.wait(2000);
      cy.get('.user-management > :nth-child(2) > :nth-child(4) > .sub-nav-list > :nth-child(2) > a').click();
      cy.wait(2000);
      cy.get(':nth-child(4) > .form-control').type(transactionId);  
      cy.wait(2000);
      cy.get('.btn').click();
      cy.wait(4000);
      cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
      cy.wait(2000);
  });
}

///###################################################################################

  ///###################################################################################
UserManagementTestPage_077_File_Download(){
  cy.wait(2000);
  cy.get(this.locators.UserMangment).click();
  cy.wait(2000);
  cy.get(this.locators.BulkUpload).click();
  cy.wait(2000);
  cy.get(this.locators.ClickUserCreation).click();
  cy.wait(2000);
  cy.get(this.locators.Radio_Agency).click({ multiple: true });
  cy.wait(2000);
  cy.get(this.locators.DownloadButton1).click();
  cy.wait(2000);

}


UserManagementTestPage_077_File_Upload() {
  const filePath = 'AgencyTemplate.xlsx';
  
  // Start the file upload process
  cy.get("input[name='attachedFile']").click({ force: true });
  cy.wait(2000);
  cy.get('input[type="file"]').attachFile(filePath);
  cy.wait(2000);
  
  // Click the button to upload the file
  cy.get(':nth-child(2) > .enc-card > .card-content > :nth-child(3) > .btn').click();
  cy.wait(2000);
  
  // Click OK after the upload
  cy.get(this.locators.ClickOK).click();
  cy.wait(2000);
  
  // Capture and assert the success message with the Transaction ID
  cy.contains("File Uploaded Successfully. Transaction ID :").should("be.visible").then(($message) => {
      // Extract the Transaction ID from the message
      const transactionId = $message.text().match(/Transaction ID : (\d+)/)[1];
      
      // Assert that the Transaction ID is numeric
      expect(transactionId).to.match(/^\d+$/);  // Check if the Transaction ID is numeric
      
      // Adjust the length check: ensure it's at least 17 digits (for your case)
      expect(transactionId.length).to.be.greaterThan(16);  // Check if length is greater than 16 (or whatever the minimum is)
      
      // Optionally, store the Transaction ID for future use if needed
      cy.wrap(transactionId).as('transactionId');
      
      // Optionally, verify that the stored transaction ID matches the format
      cy.get('@transactionId').should('match', /^\d+$/);
      cy.wrap(transactionId).as('transactionId');
      cy.wait(2000);
      cy.get('.user-management > :nth-child(2) > :nth-child(4) > .sub-nav-list > :nth-child(2) > a').click();
      cy.wait(2000);
      cy.get(':nth-child(4) > .form-control').type(transactionId);  
      cy.wait(2000);
      cy.get('.btn').click();
      cy.wait(4000);
      cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
      cy.wait(2000);
  });
}

///###################################################################################

   ///###################################################################################
UserManagementTestPage_078_File_Download(){
  cy.wait(2000);
  cy.get(this.locators.UserMangment).click();
  cy.wait(2000);
  cy.get(this.locators.BulkUpload).click();
  cy.wait(2000);
  cy.get(this.locators.ClickUserCreation).click();
  cy.wait(2000);
  cy.get(this.locators.Radio_Agency).click({ multiple: true });
  cy.wait(2000);
  cy.get(this.locators.DownloadButton1).click();
  cy.wait(2000);

}


UserManagementTestPage_078_File_Upload() {
  const filePath = 'AgencyTemplate.xlsx';
  
  // Start the file upload process
  cy.get("input[name='attachedFile']").click({ force: true });
  cy.wait(2000);
  cy.get('input[type="file"]').attachFile(filePath);
  cy.wait(2000);
  
  // Click the button to upload the file
  cy.get(':nth-child(2) > .enc-card > .card-content > :nth-child(3) > .btn').click();
  cy.wait(2000);
  
  // Click OK after the upload
  cy.get(this.locators.ClickOK).click();
  cy.wait(2000);
  
  // Capture and assert the success message with the Transaction ID
  cy.contains("File Uploaded Successfully. Transaction ID :").should("be.visible").then(($message) => {
      // Extract the Transaction ID from the message
      const transactionId = $message.text().match(/Transaction ID : (\d+)/)[1];
      
      // Assert that the Transaction ID is numeric
      expect(transactionId).to.match(/^\d+$/);  // Check if the Transaction ID is numeric
      
      // Adjust the length check: ensure it's at least 17 digits (for your case)
      expect(transactionId.length).to.be.greaterThan(16);  // Check if length is greater than 16 (or whatever the minimum is)
      
      // Optionally, store the Transaction ID for future use if needed
      cy.wrap(transactionId).as('transactionId');
      
      // Optionally, verify that the stored transaction ID matches the format
      cy.get('@transactionId').should('match', /^\d+$/);
      cy.wrap(transactionId).as('transactionId');
      cy.wait(2000);
      cy.get('.user-management > :nth-child(2) > :nth-child(4) > .sub-nav-list > :nth-child(2) > a').click();
      cy.wait(2000);
      cy.get(':nth-child(4) > .form-control').type(transactionId);  
      cy.wait(2000);
      cy.get('.btn').click();
      cy.wait(4000);
      cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
      cy.wait(2000);
  });
}

///###################################################################################
 ///###################################################################################
 UserManagementTestPage_079_File_Download(){
  cy.wait(2000);
  cy.get(this.locators.UserMangment).click();
  cy.wait(2000);
  cy.get(this.locators.BulkUpload).click();
  cy.wait(2000);
  cy.get(this.locators.ClickUserCreation).click();
  cy.wait(2000);
  cy.get(this.locators.Radio_Agency).click({ multiple: true });
  cy.wait(2000);
  cy.get(this.locators.DownloadButton1).click();
  cy.wait(2000);

}


UserManagementTestPage_079_File_Upload() {
  const filePath = 'AgencyTemplate.xlsx';
  
  // Start the file upload process
  cy.get("input[name='attachedFile']").click({ force: true });
  cy.wait(2000);
  cy.get('input[type="file"]').attachFile(filePath);
  cy.wait(2000);
  
  // Click the button to upload the file
  cy.get(':nth-child(2) > .enc-card > .card-content > :nth-child(3) > .btn').click();
  cy.wait(2000);
  
  // Click OK after the upload
  cy.get(this.locators.ClickOK).click();
  cy.wait(2000);
  
  // Capture and assert the success message with the Transaction ID
  cy.contains("File Uploaded Successfully. Transaction ID :").should("be.visible").then(($message) => {
      // Extract the Transaction ID from the message
      const transactionId = $message.text().match(/Transaction ID : (\d+)/)[1];
      
      // Assert that the Transaction ID is numeric
      expect(transactionId).to.match(/^\d+$/);  // Check if the Transaction ID is numeric
      
      // Adjust the length check: ensure it's at least 17 digits (for your case)
      expect(transactionId.length).to.be.greaterThan(16);  // Check if length is greater than 16 (or whatever the minimum is)
      
      // Optionally, store the Transaction ID for future use if needed
      cy.wrap(transactionId).as('transactionId');
      
      // Optionally, verify that the stored transaction ID matches the format
      cy.get('@transactionId').should('match', /^\d+$/);
      cy.wrap(transactionId).as('transactionId');
      cy.wait(2000);
      cy.get('.user-management > :nth-child(2) > :nth-child(4) > .sub-nav-list > :nth-child(2) > a').click();
      cy.wait(2000);
      cy.get(':nth-child(4) > .form-control').type(transactionId);  
      cy.wait(2000);
      cy.get('.btn').click();
      cy.wait(4000);
      cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
      cy.wait(2000);
  });
}

///###################################################################################

  ///###################################################################################
  UserManagementTestPage_080_File_Download(){
  cy.wait(2000);
  cy.get(this.locators.UserMangment).click();
  cy.wait(2000);
  cy.get(this.locators.BulkUpload).click();
  cy.wait(2000);
  cy.get(this.locators.ClickUserCreation).click();
  cy.wait(2000);
  cy.get(this.locators.Radio_Agency).click({ multiple: true });
  cy.wait(2000);
  cy.get(this.locators.DownloadButton1).click();
  cy.wait(2000);

}


UserManagementTestPage_080_File_Upload() {
  const filePath = 'AgencyTemplate.xlsx';
  
  // Start the file upload process
  cy.get("input[name='attachedFile']").click({ force: true });
  cy.wait(2000);
  cy.get('input[type="file"]').attachFile(filePath);
  cy.wait(2000);
  
  // Click the button to upload the file
  cy.get(':nth-child(2) > .enc-card > .card-content > :nth-child(3) > .btn').click();
  cy.wait(2000);
  
  // Click OK after the upload
  cy.get(this.locators.ClickOK).click();
  cy.wait(2000);
  
  // Capture and assert the success message with the Transaction ID
  cy.contains("File Uploaded Successfully. Transaction ID :").should("be.visible").then(($message) => {
      // Extract the Transaction ID from the message
      const transactionId = $message.text().match(/Transaction ID : (\d+)/)[1];
      
      // Assert that the Transaction ID is numeric
      expect(transactionId).to.match(/^\d+$/);  // Check if the Transaction ID is numeric
      
      // Adjust the length check: ensure it's at least 17 digits (for your case)
      expect(transactionId.length).to.be.greaterThan(16);  // Check if length is greater than 16 (or whatever the minimum is)
      
      // Optionally, store the Transaction ID for future use if needed
      cy.wrap(transactionId).as('transactionId');
      
      // Optionally, verify that the stored transaction ID matches the format
      cy.get('@transactionId').should('match', /^\d+$/);
      cy.wrap(transactionId).as('transactionId');
      cy.wait(2000);
      cy.get('.user-management > :nth-child(2) > :nth-child(4) > .sub-nav-list > :nth-child(2) > a').click();
      cy.wait(2000);
      cy.get(':nth-child(4) > .form-control').type(transactionId);  
      cy.wait(2000);
      cy.get('.btn').click();
      cy.wait(4000);
      cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
      cy.wait(2000);
  });
}

///###################################################################################
  ///###################################################################################
  UserManagementTestPage_081_File_Download(){
  cy.wait(2000);
  cy.get(this.locators.UserMangment).click();
  cy.wait(2000);
  cy.get(this.locators.BulkUpload).click();
  cy.wait(2000);
  cy.get(this.locators.ClickUserCreation).click();
  cy.wait(2000);
  cy.get(this.locators.Radio_Agency).click({ multiple: true });
  cy.wait(2000);
  cy.get(this.locators.DownloadButton1).click();
  cy.wait(2000);

}


UserManagementTestPage_081_File_Upload() {
  const filePath = 'AgencyTemplate.xlsx';
  
  // Start the file upload process
  cy.get("input[name='attachedFile']").click({ force: true });
  cy.wait(2000);
  cy.get('input[type="file"]').attachFile(filePath);
  cy.wait(2000);
  
  // Click the button to upload the file
  cy.get(':nth-child(2) > .enc-card > .card-content > :nth-child(3) > .btn').click();
  cy.wait(2000);
  
  // Click OK after the upload
  cy.get(this.locators.ClickOK).click();
  cy.wait(2000);
  
  // Capture and assert the success message with the Transaction ID
  cy.contains("File Uploaded Successfully. Transaction ID :").should("be.visible").then(($message) => {
      // Extract the Transaction ID from the message
      const transactionId = $message.text().match(/Transaction ID : (\d+)/)[1];
      
      // Assert that the Transaction ID is numeric
      expect(transactionId).to.match(/^\d+$/);  // Check if the Transaction ID is numeric
      
      // Adjust the length check: ensure it's at least 17 digits (for your case)
      expect(transactionId.length).to.be.greaterThan(16);  // Check if length is greater than 16 (or whatever the minimum is)
      
      // Optionally, store the Transaction ID for future use if needed
      cy.wrap(transactionId).as('transactionId');
      
      // Optionally, verify that the stored transaction ID matches the format
      cy.get('@transactionId').should('match', /^\d+$/);
      cy.wrap(transactionId).as('transactionId');
      cy.wait(2000);
      cy.get('.user-management > :nth-child(2) > :nth-child(4) > .sub-nav-list > :nth-child(2) > a').click();
      cy.wait(2000);
      cy.get(':nth-child(4) > .form-control').type(transactionId);  
      cy.wait(2000);
      cy.get('.btn').click();
      cy.wait(4000);
      cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
      cy.wait(2000);
  });
}

///###################################################################################
  ///###################################################################################
UserManagementTestPage_082_File_Download(){
  cy.wait(2000);
  cy.get(this.locators.UserMangment).click();
  cy.wait(2000);
  cy.get(this.locators.BulkUpload).click();
  cy.wait(2000);
  cy.get(this.locators.ClickUserCreation).click();
  cy.wait(2000);
  cy.get(this.locators.Radio_Agency).click({ multiple: true });
  cy.wait(2000);
  cy.get(this.locators.DownloadButton1).click();
  cy.wait(2000);

}


UserManagementTestPage_082_File_Upload() {
  const filePath = 'AgencyTemplate.xlsx';
  
  // Start the file upload process
  cy.get("input[name='attachedFile']").click({ force: true });
  cy.wait(2000);
  cy.get('input[type="file"]').attachFile(filePath);
  cy.wait(2000);
  
  // Click the button to upload the file
  cy.get(':nth-child(2) > .enc-card > .card-content > :nth-child(3) > .btn').click();
  cy.wait(2000);
  
  // Click OK after the upload
  cy.get(this.locators.ClickOK).click();
  cy.wait(2000);
  
  // Capture and assert the success message with the Transaction ID
  cy.contains("File Uploaded Successfully. Transaction ID :").should("be.visible").then(($message) => {
      // Extract the Transaction ID from the message
      const transactionId = $message.text().match(/Transaction ID : (\d+)/)[1];
      
      // Assert that the Transaction ID is numeric
      expect(transactionId).to.match(/^\d+$/);  // Check if the Transaction ID is numeric
      
      // Adjust the length check: ensure it's at least 17 digits (for your case)
      expect(transactionId.length).to.be.greaterThan(16);  // Check if length is greater than 16 (or whatever the minimum is)
      
      // Optionally, store the Transaction ID for future use if needed
      cy.wrap(transactionId).as('transactionId');
      
      // Optionally, verify that the stored transaction ID matches the format
      cy.get('@transactionId').should('match', /^\d+$/);
      cy.wrap(transactionId).as('transactionId');
      cy.wait(2000);
      cy.get('.user-management > :nth-child(2) > :nth-child(4) > .sub-nav-list > :nth-child(2) > a').click();
      cy.wait(2000);
      cy.get(':nth-child(4) > .form-control').type(transactionId);   
      cy.wait(2000);
      cy.get('.btn').click();    
      cy.wait(2000);
      cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
      cy.wait(2000);
  });
}

///###################################################################################

UserManagementTestPage_083(){
    cy.wait(2000);
    cy.get(this.locators.UserMangment).click();
    cy.wait(2000);
    cy.get(this.locators.BulkUpload).click();
    cy.wait(2000);
    cy.get(this.locators.UserCreationUploadStatus).click();
    cy.wait(2000);
    cy.contains("File Name").should("be.visible");
    cy.wait(2000);
    cy.contains("File Upload Date").should("be.visible");
    cy.wait(2000);
    cy.contains("Status").should("be.visible");
    cy.wait(2000);
    cy.contains("Transaction ID").should("be.visible");
    cy.wait(2000);

  }

  UserManagementTestPage_085(){
    cy.wait(2000);
    cy.get(this.locators.UserMangment).click();
    cy.wait(2000);
    cy.get(this.locators.BulkUpload).click();
    cy.wait(2000);
    cy.get(this.locators.UserCreationUploadStatus).click();
    cy.wait(2000);
    cy.get(this.locators.SelectStatus).select("Failed");
    cy.wait(2000);
    cy.get(this.locators.Search).click();
    cy.wait(4000);
    cy.contains("Download Status File").should("be.visible");
    cy.wait(2000);

  }

  UserManagementTestPage_086(){
    cy.wait(2000);
    cy.get(this.locators.UserMangment).click();
    cy.wait(2000);
    cy.get(this.locators.BulkUpload).click();
    cy.wait(2000);
    cy.get(this.locators.UserCreationUploadStatus).click();
    cy.wait(2000);
    cy.get(this.locators.SelectStatus).select("Failed");
    cy.wait(2000);
    cy.get(this.locators.Search).click();
    cy.wait(4000);
    cy.contains("Download Status File").should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.ClickHere).click();

  }

  UserManagementTestPage_087(){
    cy.wait(2000);
    cy.get(this.locators.UserMangment).click();
    cy.wait(2000);
    cy.get(this.locators.BulkUpload).click();
    cy.wait(2000);
    cy.get(this.locators.UserCreationUploadStatus).click();
    cy.wait(2000);
    cy.get(this.locators.SelectStatus).select("Failed");
    cy.wait(2000);
    cy.get(this.locators.Search).click();
    cy.wait(4000);
    cy.contains("Download Status File").should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.ClickHere).click();

  }

  UserManagementTestPage_088(){
    cy.wait(2000);
    cy.get(this.locators.UserMangment).click();
    cy.wait(2000);
    cy.get(this.locators.BulkUpload).click();
    cy.wait(2000);
    cy.get(this.locators.UserCreationUploadStatus).click();
    cy.wait(2000);
    cy.get(this.locators.Search).click();
    cy.wait(2000);
    cy.contains("Enter at least one filter value").should("be.visible");

  }








}




export default UserManagementPage;
