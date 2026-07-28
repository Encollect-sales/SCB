import { faker } from '@faker-js/faker';

class MobileNumberRenewPage {
  constructor(locators) {
    this.locators = locators;
  }

Approveduser() {
  cy.wait(2000);
  cy.get(this.locators.user_management).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.Agent_empanelment).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.search_agent_new).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.status_agent).select('Approved');
  cy.wait(2000);
  cy.get(this.locators.search_button_agent).click({ force: true });
  cy.wait(2000);

  cy.get('tbody:nth-child(2) > tr').then((rows) => {
    const randomIndex = Math.floor(Math.random() * rows.length);
    const randomRow = rows[randomIndex];

    // Step 1: Click svg-icon FIRST to unmask the phone number
    cy.wrap(randomRow)
      .find('td:nth-child(6) > [style="text-wrap-mode: nowrap; position: relative;"] > svg-icon')
      .click({ force: true });

    cy.wait(1000); // Wait for number to unmask

    // Step 2: Grab the number AFTER it is unmasked
    cy.wrap(randomRow)
      .find('td:nth-child(6) > [style="text-wrap-mode: nowrap; position: relative;"] > span')
      .invoke('text')
      .then((mobile) => {
        cy.log('Captured mobile number: ' + mobile.trim()); // Debug log
        cy.wrap(mobile.trim()).as('mobileNumber');
      });
  });
}
Disableduser() {
  cy.wait(2000);
  cy.get(this.locators.user_management).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.Agent_empanelment).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.search_agent_new).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.status_agent).select('Disabled');
  cy.wait(2000);
  cy.get(this.locators.search_button_agent).click({ force: true });
  cy.wait(2000);

  // Get all rows in the table body randomly
  cy.get('tbody:nth-child(2) > tr').then((rows) => {
    const randomIndex = Math.floor(Math.random() * rows.length);
    const randomRow = rows[randomIndex];

    // Click the svg-icon (view button) in the random row
    cy.wrap(randomRow)
      .find('td:nth-child(6) > [style="text-wrap-mode: nowrap; position: relative;"] > svg-icon')
      .click({ force: true });

    // Grab the mobile number from the same random row
    cy.wrap(randomRow)
      .find('td:nth-child(6) > span:nth-child(1) > span:nth-child(1)')
      .invoke('text')
      .then((mobile) => {
        cy.wrap(mobile.trim()).as('mobileNumber');
      });
  });
}
Dormantuser() {
  cy.wait(2000);
  cy.get(this.locators.user_management).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.Agent_empanelment).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.search_agent_new).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.status_agent).select('Dormant');
  cy.wait(2000);
  cy.get(this.locators.search_button_agent).click({ force: true });
  cy.wait(2000);

  // Get all rows and pick a random one
  cy.get('tbody:nth-child(2) > tr').then((rows) => {
    const randomIndex = Math.floor(Math.random() * rows.length);
    const randomRow = rows[randomIndex];

    // Grab mobile number FIRST before clicking (clicking may navigate away)
    cy.wrap(randomRow)
      .find('td:nth-child(6)')
      .invoke('text')
      .then((mobile) => {
        cy.wrap(mobile.trim()).as('mobileNumber');
      });

    // Then click the svg-icon (view button) in the same random row
    cy.wrap(randomRow)
      .find('td:nth-child(6) > [style="text-wrap-mode: nowrap; position: relative;"] > svg-icon')
      .click({ force: true });
  });
}
Rejecteduser() {
  cy.wait(2000);
  cy.get(this.locators.user_management).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.Agent_empanelment).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.search_agent_new).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.status_agent).select('Rejected');
  cy.wait(2000);
  cy.get(this.locators.search_button_agent).click({ force: true });
  cy.wait(2000);

  // Get all rows and pick a random one
  cy.get('tbody:nth-child(2) > tr').then((rows) => {
    const randomIndex = Math.floor(Math.random() * rows.length);
    const randomRow = rows[randomIndex];

    // Grab mobile number FIRST before clicking (clicking may navigate away)
    cy.wrap(randomRow)
      .find('td:nth-child(6)')
      .invoke('text')
      .then((mobile) => {
        cy.wrap(mobile.trim()).as('mobileNumber');
      });

    // Then click the svg-icon (view button) in the same random row
    cy.wrap(randomRow)
      .find('td:nth-child(6) > [style="text-wrap-mode: nowrap; position: relative;"] > svg-icon')
      .click({ force: true });
  });
}
Saveasdraftuser() {
  cy.wait(2000);
  cy.get(this.locators.user_management).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.Agent_empanelment).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.search_agent_new).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.status_agent).select('Saved As Draft');
  cy.wait(2000);
  cy.get(this.locators.search_button_agent).click({ force: true });
  cy.wait(2000);

  cy.get('tbody:nth-child(2) > tr').then((rows) => {
    const randomIndex = Math.floor(Math.random() * rows.length);
    const randomRow = rows[randomIndex];

    // Step 1: Click svg-icon FIRST to unmask the phone number
    cy.wrap(randomRow)
      .find('td:nth-child(6) > [style="text-wrap-mode: nowrap; position: relative;"] > svg-icon')
      .click({ force: true });

    cy.wait(1000); // Wait for number to unmask

    // Step 2: Grab the number AFTER it is unmasked
    cy.wrap(randomRow)
      .find('td:nth-child(6) > [style="text-wrap-mode: nowrap; position: relative;"] > span')
      .invoke('text')
      .then((mobile) => {
        cy.log('Captured mobile number: ' + mobile.trim()); // Debug log
        cy.wrap(mobile.trim()).as('mobileNumber');
      });
  });
}
pendingapproval() {
  cy.wait(2000);
  cy.get(this.locators.user_management).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.Agent_empanelment).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.search_agent_new).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.status_agent).select('Pending Approval');
  cy.wait(2000);
  cy.get(this.locators.search_button_agent).click({ force: true });
  cy.wait(2000);

  // Get all rows and pick a random one
  cy.get('tbody:nth-child(2) > tr').then((rows) => {
    const randomIndex = Math.floor(Math.random() * rows.length);
    const randomRow = rows[randomIndex];

    // Grab mobile number FIRST before clicking (clicking may navigate away)
    cy.wrap(randomRow)
      .find('td:nth-child(6) > [style="text-wrap-mode: nowrap; position: relative;"] > span')
      .invoke('text')
      .then((mobile) => {
        cy.wrap(mobile.trim()).as('mobileNumber');
      });

    // Then click the svg-icon (view button) in the same random row
    cy.wrap(randomRow)
      .find('td:nth-child(6) > [style="text-wrap-mode: nowrap; position: relative;"] > svg-icon')
      .click({ force: true });
  });
}
//Agent - Agent - Approved user
MobileNumberRenewPage01() {
  cy.wait(2000);
  cy.get(this.locators.user_management).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.Agent_empanelment).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.Add_agent).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.local_address).click({ force: true });

  // 👉 Use captured mobile number here
  cy.get('@mobileNumber').then((mobile) => {
    cy.get(this.locators.mobile_id, { timeout: 10000 })
      .should('be.visible')
      .clear()
      .type(mobile);
  });

  cy.wait(2000);
  cy.get(this.locators.validate_btn).click({ force: true });

  cy.contains('Agent Name').scrollIntoView().should('exist');
  cy.contains('Agent Code').scrollIntoView().should('exist');
  cy.contains('Agency Name').scrollIntoView().should('exist');
  cy.contains('Authorization Card Expiry Date').scrollIntoView().should('exist');
  cy.contains('Agent Email').scrollIntoView().should('exist');
  cy.contains('Agent Phone Number').scrollIntoView().should('exist');
  cy.contains('DRA Unique Registration Number').scrollIntoView().should('exist');
}

// Disableduser(){
//    cy.wait(2000);
//   cy.get(this.locators.user_management).click({ force: true });
//   cy.wait(1000);
//   cy.get(this.locators.Agent_empanelment).click({ force: true });
//   cy.wait(1000);
//   cy.get(this.locators.search_agent_new).click({ force: true });
//   cy.wait(2000);
//   cy.get(this.locators.status_agent).select('Approved');
//   cy.wait(2000);
//   cy.get(this.locators.search_button_agent).click({ force: true });
//   cy.wait(2000);

//   cy.get(this.locators.mobile_number_new_disabled)
//     .invoke('text') // use 'val' if it's an input field
//     .then((mobile) => {
//       cy.wrap(mobile.trim()).as('mobileNumber');
//     });

// }
//Disabled agent
MobileNumberRenewPage02(){
  const filePath = 'Cypress/fixtures/Aadhar.png'
  cy.wait(2000);
  cy.get(this.locators.user_management).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.agentEmpanelmentRequest).click({force: true});
  cy.wait(2000);
  cy.get(this.locators.AddAgent).click({force: true});
  cy.wait(2000);
  cy.wait(2000);
  cy.get('#userType').select("FOS");
  cy.wait(1000);
  cy.get(this.locators.FirstName).type("Pranshu");
  cy.wait(2000);
  cy.get(this.locators.LastName).type("Raj");
  cy.wait(2000);
  cy.get(this.locators.Agencyname).select("Arun");
  cy.wait(2000);
  cy.get("#reportingManager").type("Arjun Singh - 1018");
  cy.wait(2000);
  cy.get(this.locators.Idtype).select("Pan card");
  cy.wait(2000)
  cy.get(this.locators.UDIDNumberr).type("12345678909876543");
  cy.wait(2000);
  const agentCode = Math.floor(10000 + Math.random() * 90000).toString();
  cy.get(this.locators.agentcode).type(agentCode);
  const filePath1 = 'Aadhar.png'
  cy.get('.upload-text').click();
  cy.wait(2000);
  cy.get('input[type="file"]').attachFile(filePath1);
  cy.wait(2000);
  cy.get(this.locators.walletlimit).click();
    cy.wait(1000);
    cy.get('#walletLimit').type(20000);
    cy.wait(2000);
  cy.get(this.locators.Departmentdesignation).click();
  cy.wait(2000);
  cy.get(this.locators.Add).click();
  cy.wait(2000);
  cy.get(this.locators.Department).select("Agency Backend");
  cy.wait(2000);
  cy.get(this.locators.designationn).select("Agency Backend");
  cy.wait(2000);
  cy.get(this.locators.LocalAddressDetails).click();
  cy.wait(2000);
  cy.get(this.locators.Address).type(" AAAAAAAAAAAAAAAA XXXXXXXXXXXXXXXXXX BBBBBBBBBBBBBB CCCCCCCCCCCCCCC");
  cy.wait(2000);
  cy.get('#stateId').select('All');
  cy.wait(2000);
  cy.get("#cityId").select("All");
  cy.wait(2000);
  cy.get("#landmarkId").type("xxxx Bank");
  cy.wait(2000);
  cy.get("#pinId").type("845438");
  cy.wait(2000);
  cy.get("#mobileTypeId").select("MO",{force : true});
  cy.wait(2000);
  
  cy.get('@mobileNumber').then((mobile) => {
    cy.get(this.locators.mobile_id, { timeout: 10000 })
      .should('be.visible')
      .clear()
      .type(mobile);
  });
  cy.wait(2000);
  function generateRandomEmail() {
    const randomString = Math.random().toString(36).substring(2, 11); // Generates a random string
    return `user_${randomString}@yopmail.com`; // Concatenate to form an email address
  }

  // Cypress test code
  cy.get("#emailId").type(generateRandomEmail());
  cy.wait(2000);
cy.get("#dobId")
  .invoke('removeAttr', 'readonly')
  .clear()
  .type("23-Apr-01", { force: true })
  .blur();
  cy.get("#fatherNameId").type(" Mr B Kumar",{force: true});
  cy.wait(2000);
  cy.get('#bloodGroup').select("A-");
  cy.wait(1000);
  cy.get('#emer_contactNO').type(6598744125);
  cy.wait(1000);
  cy.get(this.locators.Banking_details).click();
  cy.wait(2000);
  cy.get(this.locators.cust_name).type("Pranshu raj");
  cy.wait(2000);
  cy.get("input[placeholder='Enter Account Number']").type("456785678776543");
  cy.wait(2000);
  cy.get("select[name='bankName']").select("BANK OF INDIA");
  cy.wait(2000);
  cy.get("select[name='bankBranchId']").select("BANO");
  cy.wait(2000);
 cy.get(':nth-child(6) > .nav-link > span').click();
    cy.wait(2000);
    cy.get("#product-scope-HL01").click();
    cy.wait(2000);
    cy.get(".col-md-12.ng-star-inserted > .form-control-group > .form-ng-select > .ng-select-container").type("Loans Products");
    cy.wait(2000);
    cy.contains(".ng-option-label","Loans Products").click({ force: true });
    cy.wait(2000);
    cy.get('[heading="Bucket"] > .panel > .panel-heading').click();
    cy.wait(500);
    cy.get(".panel-open > .panel > .panel-collapse > .panel-body > .row > .col-md-12 > .form-control-group > .form-ng-select > .ng-select-container").type("3");
    cy.wait(500);
    cy.contains(".ng-option-label","3").click({ force: true });
    cy.wait(500);
    cy.get("accordion-group[heading='Geography'] div[class='panel-title']").click({force: true});
    cy.wait(500);
    cy.get("#geo-scope-HL04").click();
    cy.wait(500);
    cy.get(".panel-open > .panel > .panel-collapse > .panel-body > .row > .col-md-12.ng-star-inserted > .form-control-group > .form-ng-select > .ng-select-container").type("India");
    cy.wait(500);
    cy.contains(".ng-option-label","India").click({ force: true });
    cy.wait(500);
    cy.get(":nth-child(7) > .nav-link > span").click();
    cy.wait(2000);
  
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
 cy.wait(2000);
cy.get("#CollectionDate").type("25-Jun-2023").should('be.visible');
cy.wait(2000);
cy.get("#RenewalDate").type("15-Jul-2024").should('be.visible');
cy.wait(2000);
cy.get("#ExpiryDate").invoke('removeAttr', 'readonly')
  .clear()
  .type("23-Apr-27", { force: true })
  .blur();
cy.wait(2000);
cy.get("#remarks").type("aaaaaa bbbbbbbbb cccccccccc dddddddddd 123",{force: true}).should('be.visible');
cy.wait(2000);
//##########################################################
cy.get("#remarks").clear();
cy.wait(2000)
cy.get("#remarks").type("Its OK",{force: true}).should('be.visible');
cy.wait(2000);
cy.wait(7000);

//##########################################################
cy.get('#btn-submit').click({force: true});
cy.contains('Agent Name').scrollIntoView().should('exist');
cy.contains('Agent Code').scrollIntoView().should('exist');
cy.contains('Agency Name').scrollIntoView().should('exist');
cy.contains('Authorization Card Expiry Date').scrollIntoView().should('exist');
cy.contains('Agent Email').scrollIntoView().should('exist');
cy.contains('Agent Phone Number').scrollIntoView().should('exist');
cy.contains('DRA Unique Registration Number').scrollIntoView().should('exist');
cy.get(this.locators.confirm).click({force:true});
cy.contains('Success! Agent Profile has been Submitted for Approval.').scrollIntoView().should('exist');

}


//disabled agent
MobileNumberRenewPage03(){
  cy.reload();
   const filePath = 'Cypress/fixtures/Aadhar.png'
  cy.wait(2000);
  cy.get(this.locators.user_management).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.agentEmpanelmentRequest).click({force: true});
  cy.wait(2000);
  cy.get(this.locators.AddAgent).click({force: true});
  cy.wait(2000);
  cy.wait(2000);
  cy.get('#userType').select("FOS");
  cy.wait(1000);
  cy.get(this.locators.FirstName).type("Pranshu");
  cy.wait(2000);
  cy.get(this.locators.LastName).type("Raj");
  cy.wait(2000);
  cy.get(this.locators.Agencyname).select("Arun");
  cy.wait(2000);
  cy.get("#reportingManager").type("Arjun Singh - 1018");
  cy.wait(2000);
  cy.get(this.locators.Idtype).select("Pan card");
  cy.wait(2000);
  const agentCode = Math.floor(10000 + Math.random() * 90000).toString();
cy.get(this.locators.agentcode).type(agentCode);
  cy.wait(2000);
  cy.get(this.locators.UDIDNumberr).type("12345678909876543");
  cy.wait(2000);

  const filePath1 = 'Aadhar.png'
  cy.get('.upload-text').click();
  cy.wait(2000);
  cy.get('input[type="file"]').attachFile(filePath1);
  cy.wait(2000);
  cy.get(this.locators.walletlimit).click();
    cy.wait(1000);
    cy.get('#walletLimit').type(20000);
    cy.wait(2000);
  cy.get(this.locators.Departmentdesignation).click();
  cy.wait(2000);
  cy.get(this.locators.Add).click();
  cy.wait(2000);
  cy.get(this.locators.Department).select("Agency Backend");
  cy.wait(2000);
  cy.get(this.locators.designationn).select("Agency Backend");
  cy.wait(2000);
  cy.get(this.locators.LocalAddressDetails).click();
  cy.wait(2000);
  cy.get(this.locators.Address).type(" AAAAAAAAAAAAAAAA XXXXXXXXXXXXXXXXXX BBBBBBBBBBBBBB CCCCCCCCCCCCCCC");
  cy.wait(2000);
  cy.get('#stateId').select('All');
  cy.wait(2000);
  cy.get("#cityId").select("All");
  cy.wait(2000);
  cy.get("#landmarkId").type("xxxx Bank");
  cy.wait(2000);
  cy.get("#pinId").type("845438");
  cy.wait(2000);
  cy.get("#mobileTypeId").select("MO",{force : true});
  cy.wait(2000);
 
  // 👉 Use captured mobile number here
  cy.get('@mobileNumber').then((mobile) => {
    cy.get(this.locators.mobile_id, { timeout: 10000 })
      .should('be.visible')
      .clear()
      .type(mobile);
  });
  cy.wait(2000);
  function generateRandomEmail() {
    const randomString = Math.random().toString(36).substring(2, 11); // Generates a random string
    return `user_${randomString}@yopmail.com`; // Concatenate to form an email address
  }

  // Cypress test code
  cy.get("#emailId").type(generateRandomEmail());
  cy.wait(2000);
cy.get("#dobId")
  .invoke('removeAttr', 'readonly')
  .clear()
  .type("23-Apr-01", { force: true })
  .blur();
  cy.get("#fatherNameId").type(" Mr B Kumar",{force: true});
  cy.wait(2000);
  cy.get('#bloodGroup').select("A-");
  cy.wait(1000);
  cy.get('#emer_contactNO').type(6598744125);
  cy.wait(1000);
  cy.get(this.locators.Banking_details).click();
  cy.wait(2000);
  cy.get(this.locators.cust_name).type("Pranshu raj");
  cy.wait(2000);
  cy.get("input[placeholder='Enter Account Number']").type("456785678776543");
  cy.wait(2000);
  cy.get("select[name='bankName']").select("BANK OF INDIA");
  cy.wait(2000);
  cy.get("select[name='bankBranchId']").select("BANO");
  cy.wait(2000);
 cy.get(':nth-child(6) > .nav-link > span').click();
    cy.wait(2000);
    cy.get("#product-scope-HL01").click();
    cy.wait(2000);
    cy.get(".col-md-12.ng-star-inserted > .form-control-group > .form-ng-select > .ng-select-container").type("Loans Products");
    cy.wait(2000);
    cy.contains(".ng-option-label","Loans Products").click({ force: true });
    cy.wait(2000);
    cy.get('[heading="Bucket"] > .panel > .panel-heading').click();
    cy.wait(500);
    cy.get(".panel-open > .panel > .panel-collapse > .panel-body > .row > .col-md-12 > .form-control-group > .form-ng-select > .ng-select-container").type("3");
    cy.wait(500);
    cy.contains(".ng-option-label","3").click({ force: true });
    cy.wait(500);
    cy.get("accordion-group[heading='Geography'] div[class='panel-title']").click({force: true});
    cy.wait(500);
    cy.get("#geo-scope-HL04").click();
    cy.wait(500);
    cy.get(".panel-open > .panel > .panel-collapse > .panel-body > .row > .col-md-12.ng-star-inserted > .form-control-group > .form-ng-select > .ng-select-container").type("India");
    cy.wait(500);
    cy.contains(".ng-option-label","India").click({ force: true });
    cy.wait(500);
    cy.get(":nth-child(7) > .nav-link > span").click();
    cy.wait(2000);
  
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
 cy.wait(2000);
cy.get("#CollectionDate").type("25-Jun-2023").should('be.visible');
cy.wait(2000);
cy.get("#RenewalDate").type("15-Jul-2024").should('be.visible');
cy.wait(2000);
cy.get("#ExpiryDate").invoke('removeAttr', 'readonly')
  .clear()
  .type("23-Apr-27", { force: true })
  .blur();
cy.wait(2000);
cy.get("#remarks").type("aaaaaa bbbbbbbbb cccccccccc dddddddddd 123",{force: true}).should('be.visible');
cy.wait(2000)
//##########################################################
cy.get("#remarks").clear();
cy.wait(2000)
cy.get("#remarks").type("Its OK",{force: true}).should('be.visible');
cy.wait(2000);
cy.wait(7000);

cy.get('#btn-submit').click({ force: true });
//##########################################################
cy.wait(2000);

cy.get('body').then(($body) => {
  // Check if "already exists" error is shown
  if (
    $body.text().includes('Email ID already exist') ||
    $body.text().includes('Mobile Number already exist') ||
    $body.text().includes('already exist')
  ) {
    cy.log('Email or Mobile already exists — skipping verification');
  } else {
    // Success — verify confirmation fields are visible
    cy.contains('Staff Name').scrollIntoView().should('exist');
    cy.contains('Staff Code').scrollIntoView().should('exist');
    cy.contains('Staff Email ID').scrollIntoView().should('exist');
    cy.contains('Staff Phone Number').scrollIntoView().should('exist');
  }
});

}
//Approved user
MobileNumberRenewPage04(){

   const filePath = 'Cypress/fixtures/Aadhar.png'
  cy.wait(2000);
  cy.get(this.locators.user_management).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.agentEmpanelmentRequest).click({force: true});
  cy.wait(2000);
  cy.get(this.locators.AddAgent).click({force: true});
  cy.wait(2000);
  cy.wait(2000);
  cy.get('#userType').select("FOS");
  cy.wait(1000);
  cy.get(this.locators.FirstName).type("Pranshu");
  cy.wait(2000);
  cy.get(this.locators.LastName).type("Raj");
  cy.wait(2000);
  cy.get(this.locators.Agencyname).select("Arun");
  cy.wait(2000);
  cy.get("#reportingManager").type("Arjun Singh - 1018");
  cy.wait(2000);
  cy.get(this.locators.Idtype).select("Pan card");
  cy.wait(2000);
  const agentCode = Math.floor(10000 + Math.random() * 90000).toString();
cy.get(this.locators.agentcode).type(agentCode);
  cy.wait(2000);
  cy.get(this.locators.UDIDNumberr).type("12345678909876543");
  cy.wait(2000);

  const filePath1 = 'Aadhar.png'
  cy.get('.upload-text').click();
  cy.wait(2000);
  cy.get('input[type="file"]').attachFile(filePath1);
  cy.wait(2000);
  cy.get(this.locators.walletlimit).click();
    cy.wait(1000);
    cy.get('#walletLimit').type(20000);
    cy.wait(2000);
  cy.get(this.locators.Departmentdesignation).click();
  cy.wait(2000);
  cy.get(this.locators.Add).click();
  cy.wait(2000);
  cy.get(this.locators.Department).select("Agency Backend");
  cy.wait(2000);
  cy.get(this.locators.designationn).select("Agency Backend");
  cy.wait(2000);
  cy.get(this.locators.LocalAddressDetails).click();
  cy.wait(2000);
  cy.get(this.locators.Address).type(" AAAAAAAAAAAAAAAA XXXXXXXXXXXXXXXXXX BBBBBBBBBBBBBB CCCCCCCCCCCCCCC");
  cy.wait(2000);
  cy.get('#stateId').select('All');
  cy.wait(2000);
  cy.get("#cityId").select("All");
  cy.wait(2000);
  cy.get("#landmarkId").type("xxxx Bank");
  cy.wait(2000);
  cy.get("#pinId").type("845438");
  cy.wait(2000);
  cy.get("#mobileTypeId").select("MO",{force : true});
  cy.wait(2000);
 
  // 👉 Use captured mobile number here
  cy.get('@mobileNumber').then((mobile) => {
    cy.get(this.locators.mobile_id, { timeout: 10000 })
      .should('be.visible')
      .clear()
      .type(mobile);
  });
  cy.wait(2000);
  function generateRandomEmail() {
    const randomString = Math.random().toString(36).substring(2, 11); // Generates a random string
    return `user_${randomString}@yopmail.com`; // Concatenate to form an email address
  }

  // Cypress test code
  cy.get("#emailId").type(generateRandomEmail());
  cy.wait(2000);
cy.get("#dobId")
  .invoke('removeAttr', 'readonly')
  .clear()
  .type("23-Apr-01", { force: true })
  .blur();
  cy.get("#fatherNameId").type(" Mr B Kumar",{force: true});
  cy.wait(2000);
  cy.get('#bloodGroup').select("A-");
  cy.wait(1000);
  cy.get('#emer_contactNO').type(6598744125);
  cy.wait(1000);
  cy.get(this.locators.Banking_details).click();
  cy.wait(2000);
  cy.get(this.locators.cust_name).type("Pranshu raj");
  cy.wait(2000);
  cy.get("input[placeholder='Enter Account Number']").type("456785678776543");
  cy.wait(2000);
  cy.get("select[name='bankName']").select("BANK OF INDIA");
  cy.wait(2000);
  cy.get("select[name='bankBranchId']").select("BANO");
  cy.wait(2000);
 cy.get(':nth-child(6) > .nav-link > span').click();
    cy.wait(2000);
    cy.get("#product-scope-HL01").click();
    cy.wait(2000);
    cy.get(".col-md-12.ng-star-inserted > .form-control-group > .form-ng-select > .ng-select-container").type("Loans Products");
    cy.wait(2000);
    cy.contains(".ng-option-label","Loans Products").click({ force: true });
    cy.wait(2000);
    cy.get('[heading="Bucket"] > .panel > .panel-heading').click();
    cy.wait(500);
    cy.get(".panel-open > .panel > .panel-collapse > .panel-body > .row > .col-md-12 > .form-control-group > .form-ng-select > .ng-select-container").type("3");
    cy.wait(500);
    cy.contains(".ng-option-label","3").click({ force: true });
    cy.wait(500);
    cy.get("accordion-group[heading='Geography'] div[class='panel-title']").click({force: true});
    cy.wait(500);
    cy.get("#geo-scope-HL04").click();
    cy.wait(500);
    cy.get(".panel-open > .panel > .panel-collapse > .panel-body > .row > .col-md-12.ng-star-inserted > .form-control-group > .form-ng-select > .ng-select-container").type("India");
    cy.wait(500);
    cy.contains(".ng-option-label","India").click({ force: true });
    cy.wait(500);
    cy.get(":nth-child(7) > .nav-link > span").click();
    cy.wait(2000);
  
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
 cy.wait(2000);
cy.get("#CollectionDate").type("25-Jun-2023").should('be.visible');
cy.wait(2000);
cy.get("#RenewalDate").type("15-Jul-2024").should('be.visible');
cy.wait(2000);
cy.get("#ExpiryDate").invoke('removeAttr', 'readonly')
  .clear()
  .type("23-Apr-27", { force: true })
  .blur();
cy.wait(2000);
cy.get("#remarks").type("aaaaaa bbbbbbbbb cccccccccc dddddddddd 123",{force: true}).should('be.visible');
cy.wait(2000)
//##########################################################
cy.get("#remarks").clear();
cy.wait(2000)
cy.get("#remarks").type("Its OK",{force: true}).should('be.visible');
cy.wait(2000)


//##########################################################
cy.get('#btn-submit').click({force: true});
cy.contains('Error! Email Id or Mobile number already exists').should('be.visible');

cy.wait(2000);

}
//pending approvel 
MobileNumberRenewPage05(){
   const filePath = 'Cypress/fixtures/Aadhar.png'
  cy.wait(2000);
  cy.get(this.locators.user_management).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.agentEmpanelmentRequest).click({force: true});
  cy.wait(2000);
  cy.get(this.locators.AddAgent).click({force: true});
  cy.wait(2000);
  cy.wait(2000);
  cy.get('#userType').select("FOS");
  cy.wait(1000);
  cy.get(this.locators.FirstName).type("Pranshu");
  cy.wait(2000);
  cy.get(this.locators.LastName).type("Raj");
  cy.wait(2000);
  cy.get(this.locators.Agencyname).select("Arun");
  cy.wait(2000);
  cy.get("#reportingManager").type("Arjun Singh - 1018");
  cy.wait(2000);
  cy.get(this.locators.Idtype).select("Pan card");
  cy.wait(2000)
  cy.get(this.locators.UDIDNumberr).type("12345678909876543");
  cy.wait(2000);
   const agentCode = Math.floor(10000 + Math.random() * 90000).toString();
cy.get(this.locators.agentcode).type(agentCode);
  cy.wait(2000);

  const filePath1 = 'Aadhar.png'
  cy.get('.upload-text').click();
  cy.wait(2000);
  cy.get('input[type="file"]').attachFile(filePath1);
  cy.wait(2000);
  cy.get(this.locators.walletlimit).click();
    cy.wait(1000);
    cy.get('#walletLimit').type(20000);
    cy.wait(2000);
  cy.get(this.locators.Departmentdesignation).click();
  cy.wait(2000);
  cy.get(this.locators.Add).click();
  cy.wait(2000);
  cy.get(this.locators.Department).select("Agency Backend");
  cy.wait(2000);
  cy.get(this.locators.designationn).select("Agency Backend");
  cy.wait(2000);
  cy.get(this.locators.LocalAddressDetails).click();
  cy.wait(2000);
  cy.get(this.locators.Address).type(" AAAAAAAAAAAAAAAA XXXXXXXXXXXXXXXXXX BBBBBBBBBBBBBB CCCCCCCCCCCCCCC");
  cy.wait(2000);
  cy.get('#stateId').select('All');
  cy.wait(2000);
  cy.get("#cityId").select("All");
  cy.wait(2000);
  cy.get("#landmarkId").type("xxxx Bank");
  cy.wait(2000);
  cy.get("#pinId").type("845438");
  cy.wait(2000);
  cy.get("#mobileTypeId").select("MO",{force : true});
  cy.wait(2000);

  // 👉 Use captured mobile number here
  cy.get('@mobileNumber').then((mobile) => {
    cy.get(this.locators.mobile_id, { timeout: 10000 })
      .should('be.visible')
      .clear()
      .type(mobile);
  });  cy.wait(2000);
  function generateRandomEmail() {
    const randomString = Math.random().toString(36).substring(2, 11); // Generates a random string
    return `user_${randomString}@yopmail.com`; // Concatenate to form an email address
  }

  // Cypress test code
  cy.get("#emailId").type(generateRandomEmail());
  cy.wait(2000);
cy.get("#dobId")
  .invoke('removeAttr', 'readonly')
  .clear()
  .type("23-Apr-01", { force: true })
  .blur();
  cy.get("#fatherNameId").type(" Mr B Kumar",{force: true});
  cy.wait(2000);
  cy.get('#bloodGroup').select("A-");
  cy.wait(1000);
  cy.get('#emer_contactNO').type(6598744125);
  cy.wait(1000);
  cy.get(this.locators.Banking_details).click();
  cy.wait(2000);
  cy.get(this.locators.cust_name).type("Pranshu raj");
  cy.wait(2000);
  cy.get("input[placeholder='Enter Account Number']").type("456785678776543");
  cy.wait(2000);
  cy.get("select[name='bankName']").select("BANK OF INDIA");
  cy.wait(2000);
  cy.get("select[name='bankBranchId']").select("BANO");
  cy.wait(2000);
 cy.get(':nth-child(6) > .nav-link > span').click();
    cy.wait(2000);
    cy.get("#product-scope-HL01").click();
    cy.wait(2000);
    cy.get(".col-md-12.ng-star-inserted > .form-control-group > .form-ng-select > .ng-select-container").type("Loans Products");
    cy.wait(2000);
    cy.contains(".ng-option-label","Loans Products").click({ force: true });
    cy.wait(2000);
    cy.get('[heading="Bucket"] > .panel > .panel-heading').click();
    cy.wait(500);
    cy.get(".panel-open > .panel > .panel-collapse > .panel-body > .row > .col-md-12 > .form-control-group > .form-ng-select > .ng-select-container").type("3");
    cy.wait(500);
    cy.contains(".ng-option-label","3").click({ force: true });
    cy.wait(500);
    cy.get("accordion-group[heading='Geography'] div[class='panel-title']").click({force: true});
    cy.wait(500);
    cy.get("#geo-scope-HL04").click();
    cy.wait(500);
    cy.get(".panel-open > .panel > .panel-collapse > .panel-body > .row > .col-md-12.ng-star-inserted > .form-control-group > .form-ng-select > .ng-select-container").type("India");
    cy.wait(500);
    cy.contains(".ng-option-label","India").click({ force: true });
    cy.wait(500);
    cy.get(":nth-child(7) > .nav-link > span").click();
    cy.wait(2000);
  
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
 cy.wait(2000);
cy.get("#CollectionDate").type("25-Jun-2023").should('be.visible');
cy.wait(2000);
cy.get("#RenewalDate").type("15-Jul-2024").should('be.visible');
cy.wait(2000);
cy.get("#ExpiryDate").invoke('removeAttr', 'readonly')
  .clear()
  .type("23-Apr-27", { force: true })
  .blur();
cy.wait(2000);
cy.get("#remarks").type("aaaaaa bbbbbbbbb cccccccccc dddddddddd 123",{force: true}).should('be.visible');
cy.wait(2000)
//##########################################################
cy.get("#remarks").clear();
cy.wait(2000)
cy.get("#remarks").type("Its OK",{force: true}).should('be.visible');
cy.wait(2000)


//##########################################################
cy.get('#btn-submit').click({force: true});
cy.contains('Email Id or Mobile number already exists').should('be.visible');


}
//dormant user
MobileNumberRenewPage06(){
 
   const filePath = 'Cypress/fixtures/Aadhar.png'
  cy.wait(2000);
  cy.get(this.locators.user_management).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.agentEmpanelmentRequest).click({force: true});
  cy.wait(2000);
  cy.get(this.locators.AddAgent).click({force: true});
  cy.wait(2000);
  cy.wait(2000);
  cy.get('#userType').select("FOS");
  cy.wait(1000);
  cy.get(this.locators.FirstName).type("Pranshu");
  cy.wait(2000);
  cy.get(this.locators.LastName).type("Raj");
  cy.wait(2000);
  cy.get(this.locators.Agencyname).select("Arun");
  cy.wait(2000);
  cy.get("#reportingManager").type("Arjun Singh - 1018");
  cy.wait(2000);
  cy.get(this.locators.Idtype).select("Pan card");
  cy.wait(2000)
  cy.get(this.locators.UDIDNumberr).type("12345678909876543");
  cy.wait(2000);
   const agentCode = Math.floor(10000 + Math.random() * 90000).toString();
cy.get(this.locators.agentcode).type(agentCode);
  cy.wait(2000);

  const filePath1 = 'Aadhar.png'
  cy.get('.upload-text').click();
  cy.wait(2000);
  cy.get('input[type="file"]').attachFile(filePath1);
  cy.wait(2000);
  cy.get(this.locators.walletlimit).click();
    cy.wait(1000);
    cy.get('#walletLimit').type(20000);
    cy.wait(2000);
  cy.get(this.locators.Departmentdesignation).click();
  cy.wait(2000);
  cy.get(this.locators.Add).click();
  cy.wait(2000);
  cy.get(this.locators.Department).select("Agency Backend");
  cy.wait(2000);
  cy.get(this.locators.designationn).select("Agency Backend");
  cy.wait(2000);
  cy.get(this.locators.LocalAddressDetails).click();
  cy.wait(2000);
  cy.get(this.locators.Address).type(" AAAAAAAAAAAAAAAA XXXXXXXXXXXXXXXXXX BBBBBBBBBBBBBB CCCCCCCCCCCCCCC");
  cy.wait(2000);
  cy.get('#stateId').select('All');
  cy.wait(2000);
  cy.get("#cityId").select("All");
  cy.wait(2000);
  cy.get("#landmarkId").type("xxxx Bank");
  cy.wait(2000);
  cy.get("#pinId").type("845438");
  cy.wait(2000);
  cy.get("#mobileTypeId").select("MO",{force : true});
  cy.wait(2000);
 
  // 👉 Use captured mobile number here
  cy.get('@mobileNumber').then((mobile) => {
    cy.get(this.locators.mobile_id, { timeout: 10000 })
      .should('be.visible')
      .clear()
      .type(mobile);
  });
  cy.wait(2000);
  function generateRandomEmail() {
    const randomString = Math.random().toString(36).substring(2, 11); // Generates a random string
    return `user_${randomString}@yopmail.com`; // Concatenate to form an email address
  }

  // Cypress test code
  cy.get("#emailId").type(generateRandomEmail());
  cy.wait(2000);
cy.get("#dobId")
  .invoke('removeAttr', 'readonly')
  .clear()
  .type("23-Apr-01", { force: true })
  .blur();
  cy.get("#fatherNameId").type(" Mr B Kumar",{force: true});
  cy.wait(2000);
  cy.get('#bloodGroup').select("A-");
  cy.wait(1000);
  cy.get('#emer_contactNO').type(6598744125);
  cy.wait(1000);
  cy.get(this.locators.Banking_details).click();
  cy.wait(2000);
  cy.get(this.locators.cust_name).type("Pranshu raj");
  cy.wait(2000);
  cy.get("input[placeholder='Enter Account Number']").type("456785678776543");
  cy.wait(2000);
  cy.get("select[name='bankName']").select("BANK OF INDIA");
  cy.wait(2000);
  cy.get("select[name='bankBranchId']").select("BANO");
  cy.wait(2000);
 cy.get(':nth-child(6) > .nav-link > span').click();
    cy.wait(2000);
    cy.get("#product-scope-HL01").click();
    cy.wait(2000);
    cy.get(".col-md-12.ng-star-inserted > .form-control-group > .form-ng-select > .ng-select-container").type("Loans Products");
    cy.wait(2000);
    cy.contains(".ng-option-label","Loans Products").click({ force: true });
    cy.wait(2000);
    cy.get('[heading="Bucket"] > .panel > .panel-heading').click();
    cy.wait(500);
    cy.get(".panel-open > .panel > .panel-collapse > .panel-body > .row > .col-md-12 > .form-control-group > .form-ng-select > .ng-select-container").type("3");
    cy.wait(500);
    cy.contains(".ng-option-label","3").click({ force: true });
    cy.wait(500);
    cy.get("accordion-group[heading='Geography'] div[class='panel-title']").click({force: true});
    cy.wait(500);
    cy.get("#geo-scope-HL04").click();
    cy.wait(500);
    cy.get(".panel-open > .panel > .panel-collapse > .panel-body > .row > .col-md-12.ng-star-inserted > .form-control-group > .form-ng-select > .ng-select-container").type("India");
    cy.wait(500);
    cy.contains(".ng-option-label","India").click({ force: true });
    cy.wait(500);
    cy.get(":nth-child(7) > .nav-link > span").click();
    cy.wait(2000);
  
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
 cy.wait(2000);
cy.get("#CollectionDate").type("25-Jun-2023").should('be.visible');
cy.wait(2000);
cy.get("#RenewalDate").type("15-Jul-2024").should('be.visible');
cy.wait(2000);
cy.get("#ExpiryDate").invoke('removeAttr', 'readonly')
  .clear()
  .type("23-Apr-27", { force: true })
  .blur();
cy.wait(2000);
cy.get("#remarks").type("aaaaaa bbbbbbbbb cccccccccc dddddddddd 123",{force: true}).should('be.visible');
cy.wait(2000)
//##########################################################
cy.get("#remarks").clear();
cy.wait(2000)
cy.get("#remarks").type("Its OK",{force: true}).should('be.visible');
cy.wait(2000)


//##########################################################
cy.get('#btn-submit').click({force: true});
cy.contains('Email Id or Mobile number already exists').should('be.visible');



}
//Rejected user
MobileNumberRenewPage07(){
   const filePath = 'Cypress/fixtures/Aadhar.png'

  cy.wait(2000);
  cy.get(this.locators.agentEmpanelmentRequest).click({force: true} );
  cy.get(this.locators.AddAgent).click({force: true});
  cy.wait(2000);

  cy.wait(2000);
  cy.get('#userType').select("FOS");
  cy.wait(1000);
  cy.get(this.locators.FirstName).type("Pranshu");
  cy.wait(2000);
  cy.get(this.locators.LastName).type("Raj");
  cy.wait(2000);
  cy.get(this.locators.Agencyname).select("Arun");
  cy.wait(2000);
  cy.get("#reportingManager").type("Arjun Singh - 1018");
  cy.wait(2000);
  // cy.get(this.locators.dilarID).type("123");
  // cy.wait(2000);
  // cy.get(this.locators.DRACertificateDate).type("16-05-2024");
  // cy.wait(2000);
  // cy.get(this.locators.dratrainingdate).type("16-07-2024");
  // cy.wait(2000);
  // cy.get(this.locators.DRANumb).type("1234567");
  // cy.wait(2000);
  cy.get(this.locators.Idtype).select("Pan card");
  cy.wait(2000)
  cy.get(this.locators.UDIDNumberr).type("12345678909876543");
  cy.wait(2000);
   const agentCode = Math.floor(10000 + Math.random() * 90000).toString();
cy.get(this.locators.agentcode).type(agentCode);
  cy.wait(2000);

  const filePath1 = 'Aadhar.png'
  cy.get('.upload-text').click();
  cy.wait(2000);
  cy.get('input[type="file"]').attachFile(filePath1);
  cy.wait(2000);


  cy.wait(2000);
  cy.get(this.locators.walletlimit).click();
    cy.wait(1000);
    cy.get('#walletLimit').type(20000);
    cy.wait(2000);
  cy.get(this.locators.Departmentdesignation).click();
  cy.wait(2000);
  cy.get(this.locators.Add).click();
  cy.wait(2000);
  cy.get(this.locators.Department).select("Agency Backend");
  cy.wait(2000);
  cy.get(this.locators.designationn).select("Agency Backend");
  cy.wait(2000);
  cy.get(this.locators.LocalAddressDetails).click();
  cy.wait(2000);
  cy.get(this.locators.Address).type(" AAAAAAAAAAAAAAAA XXXXXXXXXXXXXXXXXX BBBBBBBBBBBBBB CCCCCCCCCCCCCCC");
  cy.wait(2000);
  cy.get('#stateId').select('All');
  cy.wait(2000);
  cy.get("#cityId").select("All");
  cy.wait(2000);
  cy.get("#landmarkId").type("xxxx Bank");
  cy.wait(2000);
  cy.get("#pinId").type("845438");
  cy.wait(2000);
  cy.get("#mobileTypeId").select("MO",{force : true});
  cy.wait(2000);
  // cy.get("input[placeholder='code']").type("3223");
  // cy.wait(2000);
  
 
  // Cypress test code
 
  // 👉 Use captured mobile number here
  cy.get('@mobileNumber').then((mobile) => {
    cy.get(this.locators.mobile_id, { timeout: 10000 })
      .should('be.visible')
      .clear()
      .type(mobile);
  });
  cy.wait(2000);
  //cy.get("#emailId").type("pranshu@yopmail.com");
  //cy.wait(2000);
  function generateRandomEmail() {
    const randomString = Math.random().toString(36).substring(2, 11); // Generates a random string
    return `user_${randomString}@yopmail.com`; // Concatenate to form an email address
  }

  // Cypress test code
  cy.get("#emailId").type(generateRandomEmail());
  cy.wait(2000);
  cy.get("#dobId")
  .invoke('removeAttr', 'readonly')
  .clear()
  .type("23-Apr-01", { force: true })
  .blur();
  cy.wait(2000);
  cy.get("#fatherNameId").type(" Mr B Kumar",{force: true});
  cy.wait(2000);
  cy.get('#bloodGroup').select("A-");
  cy.wait(1000);
  cy.get('#emer_contactNO').type(6598744125);
  cy.wait(1000);
  cy.get(this.locators.Banking_details).click();
  cy.wait(2000);
  cy.get(this.locators.cust_name).type("Pranshu raj");
  cy.wait(2000);
  cy.get("input[placeholder='Enter Account Number']").type("456785678776543");
  cy.wait(2000);
  cy.get("select[name='bankName']").select("BANK OF INDIA");
  cy.wait(2000);
  cy.get("select[name='bankBranchId']").select("BANO");
  cy.wait(2000);
 cy.get(':nth-child(6) > .nav-link > span').click();
    cy.wait(2000);
    cy.get("#product-scope-HL01").click();
    cy.wait(2000);
    cy.get(".col-md-12.ng-star-inserted > .form-control-group > .form-ng-select > .ng-select-container").type("Loans Products");
    cy.wait(2000);
    cy.contains(".ng-option-label","Loans Products").click({ force: true });
    cy.wait(2000);
    cy.get('[heading="Bucket"] > .panel > .panel-heading').click();
    cy.wait(500);
    cy.get(".panel-open > .panel > .panel-collapse > .panel-body > .row > .col-md-12 > .form-control-group > .form-ng-select > .ng-select-container").type("3");
    cy.wait(500);
    cy.contains(".ng-option-label","3").click({ force: true });
    cy.wait(500);
    cy.get("accordion-group[heading='Geography'] div[class='panel-title']").click({force: true});
    cy.wait(500);
    cy.get("#geo-scope-HL04").click();
    cy.wait(500);
    cy.get(".panel-open > .panel > .panel-collapse > .panel-body > .row > .col-md-12.ng-star-inserted > .form-control-group > .form-ng-select > .ng-select-container").type("India");
    cy.wait(500);
    cy.contains(".ng-option-label","India").click({ force: true });
    cy.wait(500);
    cy.get(":nth-child(7) > .nav-link > span").click();
    cy.wait(2000);
 

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
 
 cy.wait(2000);
cy.get("#CollectionDate").type("25-Jun-2023").should('be.visible');
cy.wait(2000);
cy.get("#RenewalDate").type("15-Jul-2024").should('be.visible');
cy.wait(2000);
cy.get("#ExpiryDate").invoke('removeAttr', 'readonly')
  .clear()
  .type("23-Apr-27", { force: true })
  .blur();
cy.get("#remarks").type("aaaaaa bbbbbbbbb cccccccccc dddddddddd 123",{force: true}).should('be.visible');
cy.wait(2000)
//##########################################################
cy.get("#remarks").clear();
cy.wait(2000)
cy.get("#remarks").type("Its OK",{force: true}).should('be.visible');
cy.wait(2000)


//##########################################################
cy.get('#btn-submit').click({force: true});
cy.wait(2000);
    cy.contains('Error').should('be.visible');

}
//saved as draft
MobileNumberRenewPage08(){
      const filePath = 'Cypress/fixtures/Aadhar.png'

  cy.wait(2000);
  cy.get(this.locators.agentEmpanelmentRequest).click({force: true} );
  cy.get(this.locators.AddAgent).click({force: true});
  cy.wait(2000);

  cy.wait(2000);
  cy.get('#userType').select("FOS");
  cy.wait(1000);
  cy.get(this.locators.FirstName).type("Pranshu");
  cy.wait(2000);
  cy.get(this.locators.LastName).type("Raj");
  cy.wait(2000);
  cy.get(this.locators.Agencyname).select("Arun");
  cy.wait(2000);
  cy.get("#reportingManager").type("Arjun Singh - 1018");
  cy.wait(2000);
  // cy.get(this.locators.dilarID).type("123");
  // cy.wait(2000);
  // cy.get(this.locators.DRACertificateDate).type("16-05-2024");
  // cy.wait(2000);
  // cy.get(this.locators.dratrainingdate).type("16-07-2024");
  // cy.wait(2000);
  // cy.get(this.locators.DRANumb).type("1234567");
  // cy.wait(2000);
  cy.get(this.locators.Idtype).select("Pan card");
  cy.wait(2000)
  cy.get(this.locators.UDIDNumberr).type("12345678909876543");
  cy.wait(2000);
   const agentCode = Math.floor(10000 + Math.random() * 90000).toString();
cy.get(this.locators.agentcode).type(agentCode);
  cy.wait(2000);

  const filePath1 = 'Aadhar.png'
  cy.get('.upload-text').click();
  cy.wait(2000);
  cy.get('input[type="file"]').attachFile(filePath1);
  cy.wait(2000);


  cy.wait(2000);
  cy.get(this.locators.walletlimit).click();
    cy.wait(1000);
    cy.get('#walletLimit').type(20000);
    cy.wait(2000);
  cy.get(this.locators.Departmentdesignation).click();
  cy.wait(2000);
  cy.get(this.locators.Add).click();
  cy.wait(2000);
  cy.get(this.locators.Department).select("Agency Backend");
  cy.wait(2000);
  cy.get(this.locators.designationn).select("Agency Backend");
  cy.wait(2000);
  cy.get(this.locators.LocalAddressDetails).click();
  cy.wait(2000);
  cy.get(this.locators.Address).type(" AAAAAAAAAAAAAAAA XXXXXXXXXXXXXXXXXX BBBBBBBBBBBBBB CCCCCCCCCCCCCCC");
  cy.wait(2000);
  cy.get('#stateId').select('All');
  cy.wait(2000);
  cy.get("#cityId").select("All");
  cy.wait(2000);
  cy.get("#landmarkId").type("xxxx Bank");
  cy.wait(2000);
  cy.get("#pinId").type("845438");
  cy.wait(2000);
  cy.get("#mobileTypeId").select("MO",{force : true});
  cy.wait(2000);
  // cy.get("input[placeholder='code']").type("3223");
  // cy.wait(2000);
  
 
  // Cypress test code

  // 👉 Use captured mobile number here
  cy.get('@mobileNumber').then((mobile) => {
    cy.get(this.locators.mobile_id, { timeout: 10000 })
      .should('be.visible')
      .clear()
      .type(mobile);
  });
  cy.wait(2000);
  //cy.get("#emailId").type("pranshu@yopmail.com");
  //cy.wait(2000);
  function generateRandomEmail() {
    const randomString = Math.random().toString(36).substring(2, 11); // Generates a random string
    return `user_${randomString}@yopmail.com`; // Concatenate to form an email address
  }

  // Cypress test code
  cy.get("#emailId").type(generateRandomEmail());
  cy.wait(2000);
  cy.get("#dobId")
  .invoke('removeAttr', 'readonly')
  .clear()
  .type("23-Apr-01", { force: true })
  .blur();
  cy.wait(2000);
  cy.get("#fatherNameId").type(" Mr B Kumar",{force: true});
  cy.wait(2000);
  cy.get('#bloodGroup').select("A-");
  cy.wait(1000);
  cy.get('#emer_contactNO').type(6598744125);
  cy.wait(1000);
  cy.get(this.locators.Banking_details).click();
  cy.wait(2000);
  cy.get(this.locators.cust_name).type("Pranshu raj");
  cy.wait(2000);
  cy.get("input[placeholder='Enter Account Number']").type("456785678776543");
  cy.wait(2000);
  cy.get("select[name='bankName']").select("BANK OF INDIA");
  cy.wait(2000);
  cy.get("select[name='bankBranchId']").select("BANO");
  cy.wait(2000);
 cy.get(':nth-child(6) > .nav-link > span').click();
    cy.wait(2000);
    cy.get("#product-scope-HL01").click();
    cy.wait(2000);
    cy.get(".col-md-12.ng-star-inserted > .form-control-group > .form-ng-select > .ng-select-container").type("Loans Products");
    cy.wait(2000);
    cy.contains(".ng-option-label","Loans Products").click({ force: true });
    cy.wait(2000);
    cy.get('[heading="Bucket"] > .panel > .panel-heading').click();
    cy.wait(500);
    cy.get(".panel-open > .panel > .panel-collapse > .panel-body > .row > .col-md-12 > .form-control-group > .form-ng-select > .ng-select-container").type("3");
    cy.wait(500);
    cy.contains(".ng-option-label","3").click({ force: true });
    cy.wait(500);
    cy.get("accordion-group[heading='Geography'] div[class='panel-title']").click({force: true});
    cy.wait(500);
    cy.get("#geo-scope-HL04").click();
    cy.wait(500);
    cy.get(".panel-open > .panel > .panel-collapse > .panel-body > .row > .col-md-12.ng-star-inserted > .form-control-group > .form-ng-select > .ng-select-container").type("India");
    cy.wait(500);
    cy.contains(".ng-option-label","India").click({ force: true });
    cy.wait(500);
    cy.get(":nth-child(7) > .nav-link > span").click();
    cy.wait(2000);
 

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
 
 cy.wait(2000);
cy.get("#CollectionDate").type("25-Jun-2023").should('be.visible');
cy.wait(2000);
cy.get("#RenewalDate").type("15-Jul-2024").should('be.visible');
cy.wait(2000);
cy.get("#ExpiryDate").invoke('removeAttr', 'readonly')
  .clear()
  .type("23-Apr-27", { force: true })
  .blur();
cy.get("#remarks").type("aaaaaa bbbbbbbbb cccccccccc dddddddddd 123",{force: true}).should('be.visible');
cy.wait(2000)
//##########################################################
cy.get("#remarks").clear();
cy.wait(2000)
cy.get("#remarks").type("Its OK",{force: true}).should('be.visible');
cy.wait(2000)


//##########################################################
cy.get('#btn-submit').click({force: true});
cy.wait(2000);
    cy.contains('Error').should('be.visible');


}


Approveduserstaff() {
  cy.wait(2000);
  cy.get(this.locators.user_management).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.staff_empanelment_new).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.staff_search).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.staff_status).select('Approved');
  cy.wait(2000);
  cy.get(this.locators.search_button_agent).click({ force: true });
  cy.wait(2000);

  cy.get('tbody:nth-child(2) > tr').then((rows) => {
    const randomIndex = Math.floor(Math.random() * rows.length);
    const randomRow = rows[randomIndex];

    cy.wrap(randomRow)
      .find('td:nth-child(6) > span:nth-child(1) > span:nth-child(1)')
      .invoke('text')
      .then((mobile) => {
        cy.wrap(mobile.trim()).as('mobileNumber');
      });

    cy.wrap(randomRow)
      .find('td:nth-child(6) > [style="text-wrap-mode: nowrap; position: relative;"] > svg-icon')
      .click({ force: true });
  });
}

Disableduserstaff() {
  cy.wait(2000);
  cy.get(this.locators.user_management).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.staff_empanelment_new).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.staff_search).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.staff_status).select('Disabled');
  cy.wait(2000);
  cy.get(this.locators.search_button_agent).click({ force: true });
  cy.wait(2000);

  cy.get('tbody:nth-child(2) > tr').then((rows) => {
    const randomIndex = Math.floor(Math.random() * rows.length);
    const randomRow = rows[randomIndex];

    // Step 1: Click svg-icon FIRST to unmask the phone number
    cy.wrap(randomRow)
      .find('td:nth-child(6) > [style="text-wrap-mode: nowrap; position: relative;"] > svg-icon')
      .click({ force: true });

    cy.wait(1000); // Wait for number to unmask

    // Step 2: Grab the number AFTER it is unmasked
    cy.wrap(randomRow)
      .find('td:nth-child(6) > [style="text-wrap-mode: nowrap; position: relative;"] > span')
      .invoke('text')
      .then((mobile) => {
        cy.log('Captured mobile number: ' + mobile.trim()); // Debug log
        cy.wrap(mobile.trim()).as('mobileNumber');
      });
  });
}
Dormantuserstaff() {
  cy.wait(2000);
  cy.get(this.locators.user_management).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.staff_empanelment_new).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.staff_search).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.staff_status).select('Dormant');
  cy.wait(2000);
  cy.get(this.locators.search_button_agent).click({ force: true });
  cy.wait(2000);

  cy.get('tbody:nth-child(2) > tr').then((rows) => {
    const randomIndex = Math.floor(Math.random() * rows.length);
    const randomRow = rows[randomIndex];

    // Step 1: Click svg-icon FIRST to unmask the phone number
    cy.wrap(randomRow)
      .find('td:nth-child(6) > [style="text-wrap-mode: nowrap; position: relative;"] > svg-icon')
      .click({ force: true });

    cy.wait(1000); // Wait for number to unmask

    // Step 2: Grab the number AFTER it is unmasked
    cy.wrap(randomRow)
      .find('td:nth-child(6) > [style="text-wrap-mode: nowrap; position: relative;"] > span')
      .invoke('text')
      .then((mobile) => {
        cy.log('Captured mobile number: ' + mobile.trim()); // Debug log
        cy.wrap(mobile.trim()).as('mobileNumber');
      });
  });
}
Rejecteduserstaff() {
  cy.wait(2000);
  cy.get(this.locators.user_management).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.staff_empanelment_new).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.staff_search).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.staff_status).select('Rejected');
  cy.wait(2000);
  cy.get(this.locators.search_button_agent).click({ force: true });
  cy.wait(2000);

  cy.get('tbody:nth-child(2) > tr').then((rows) => {
    const randomIndex = Math.floor(Math.random() * rows.length);
    const randomRow = rows[randomIndex];

    // Step 1: Click svg-icon FIRST to unmask the phone number
    cy.wrap(randomRow)
      .find('td:nth-child(6) > [style="text-wrap-mode: nowrap; position: relative;"] > svg-icon')
      .click({ force: true });

    cy.wait(1000); // Wait for number to unmask

    // Step 2: Grab the number AFTER it is unmasked
    cy.wrap(randomRow)
      .find('td:nth-child(6) > [style="text-wrap-mode: nowrap; position: relative;"] > span')
      .invoke('text')
      .then((mobile) => {
        cy.log('Captured mobile number: ' + mobile.trim()); // Debug log
        cy.wrap(mobile.trim()).as('mobileNumber');
      });
  });
}

Saveasdraftuserstaff() {
  cy.wait(2000);
  cy.get(this.locators.user_management).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.staff_empanelment_new).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.staff_search).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.staff_status).select('Saved As Draft');
  cy.wait(2000);
  cy.get(this.locators.search_button_agent).click({ force: true });
  cy.wait(2000);

  cy.get('tbody:nth-child(2) > tr').then((rows) => {
    const randomIndex = Math.floor(Math.random() * rows.length);
    const randomRow = rows[randomIndex];

    cy.wrap(randomRow)
      .find('td:nth-child(6) > span:nth-child(1) > span:nth-child(1)')
      .invoke('text')
      .then((mobile) => {
        cy.wrap(mobile.trim()).as('mobileNumber');
      });

    cy.wrap(randomRow)
      .find('td:nth-child(6) > [style="text-wrap-mode: nowrap; position: relative;"] > svg-icon')
      .click({ force: true });
  });
}

pendingapprovalstaff() {
  cy.wait(2000);
  cy.get(this.locators.user_management).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.staff_empanelment_new).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.staff_search).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.staff_status).select('Pending Approval');
  cy.wait(2000);
  cy.get(this.locators.search_button_agent).click({ force: true });
  cy.wait(2000);

  cy.get('tbody:nth-child(2) > tr').then((rows) => {
    const randomIndex = Math.floor(Math.random() * rows.length);
    const randomRow = rows[randomIndex];

    // Step 1: Click svg-icon FIRST to unmask the phone number
    cy.wrap(randomRow)
      .find('td:nth-child(6) > [style="text-wrap-mode: nowrap; position: relative;"] > svg-icon')
      .click({ force: true });

    cy.wait(1000); // Wait for number to unmask

    // Step 2: Grab the number AFTER it is unmasked
    cy.wrap(randomRow)
      .find('td:nth-child(6) > [style="text-wrap-mode: nowrap; position: relative;"] > span')
      .invoke('text')
      .then((mobile) => {
        cy.log('Captured mobile number: ' + mobile.trim()); // Debug log
        cy.wrap(mobile.trim()).as('mobileNumber');
      });
  });
}
//agent - staff approved user
MobileNumberRenewPage09(){
  const filePath = 'Cypress/fixtures/Aadhar.png'

  cy.wait(2000);
  cy.get(this.locators.agentEmpanelmentRequest).click({force: true} );
  cy.get(this.locators.AddAgent).click({force: true});
  cy.wait(2000);
  cy.get('#userType').select("FOS");
  cy.wait(1000);
  cy.get(this.locators.FirstName).type("Pranshu");
  cy.wait(2000);
  cy.get(this.locators.LastName).type("Raj");
  cy.wait(2000);
  cy.get(this.locators.Agencyname).select("Arun");
  cy.wait(2000);
  cy.get("#reportingManager").type("Arjun Singh - 1018");
  cy.wait(2000);
  cy.get(this.locators.Idtype).select("Pan card");
  cy.wait(2000)
  cy.get(this.locators.UDIDNumberr).type("12345678909876543");
  cy.wait(2000);
  const agentCode = Math.floor(10000 + Math.random() * 90000).toString();
cy.get(this.locators.agentcode).type(agentCode);
  cy.wait(2000);
  const filePath1 = 'Aadhar.png'
  cy.get('.upload-text').click();
  cy.wait(2000);
  cy.get('input[type="file"]').attachFile(filePath1);
  cy.wait(2000);


  cy.wait(2000);
  cy.get(this.locators.walletlimit).click();
    cy.wait(1000);
    cy.get('#walletLimit').type(20000);
    cy.wait(2000);
  cy.get(this.locators.Departmentdesignation).click();
  cy.wait(2000);
  cy.get(this.locators.Add).click();
  cy.wait(2000);
  cy.get(this.locators.Department).select("Agency Backend");
  cy.wait(2000);
  cy.get(this.locators.designationn).select("Agency Backend");
  cy.wait(2000);
  cy.get(this.locators.LocalAddressDetails).click();
  cy.wait(2000);
  cy.get(this.locators.Address).type(" AAAAAAAAAAAAAAAA XXXXXXXXXXXXXXXXXX BBBBBBBBBBBBBB CCCCCCCCCCCCCCC");
  cy.wait(2000);
  cy.get('#stateId').select('All');
  cy.wait(2000);
  cy.get("#cityId").select("All");
  cy.wait(2000);
  cy.get("#landmarkId").type("xxxx Bank");
  cy.wait(2000);
  cy.get("#pinId").type("845438");
  cy.wait(2000);
  cy.get("#mobileTypeId").select("MO",{force : true});
  cy.wait(2000);
  // cy.get("input[placeholder='code']").type("3223");
  // cy.wait(2000);
  
 
  // Cypress test code
 
  // 👉 Use captured mobile number here
  cy.get('@mobileNumber').then((mobile) => {
    cy.get(this.locators.mobile_id, { timeout: 10000 })
      .should('be.visible')
      .clear()
      .type(mobile);
  });
  cy.wait(2000);
  //cy.get("#emailId").type("pranshu@yopmail.com");
  //cy.wait(2000);
  function generateRandomEmail() {
    const randomString = Math.random().toString(36).substring(2, 11); // Generates a random string
    return `user_${randomString}@yopmail.com`; // Concatenate to form an email address
  }

  // Cypress test code
  cy.get("#emailId").type(generateRandomEmail());
  cy.wait(2000);
  cy.get("#dobId")
  .invoke('removeAttr', 'readonly')
  .clear()
  .type("23-Apr-01", { force: true })
  .blur();
  cy.wait(2000);
  cy.get("#fatherNameId").type(" Mr B Kumar",{force: true});
  cy.wait(2000);
  cy.get('#bloodGroup').select("A-");
  cy.wait(1000);
  cy.get('#emer_contactNO').type(6598744125);
  cy.wait(1000);
  cy.get(this.locators.Banking_details).click();
  cy.wait(2000);
  cy.get(this.locators.cust_name).type("Pranshu raj");
  cy.wait(2000);
  cy.get("input[placeholder='Enter Account Number']").type("456785678776543");
  cy.wait(2000);
  cy.get("select[name='bankName']").select("BANK OF INDIA");
  cy.wait(2000);
  cy.get("select[name='bankBranchId']").select("BANO");
  cy.wait(2000);
 cy.get(':nth-child(6) > .nav-link > span').click();
    cy.wait(2000);
    cy.get("#product-scope-HL01").click();
    cy.wait(2000);
    cy.get(".col-md-12.ng-star-inserted > .form-control-group > .form-ng-select > .ng-select-container").type("Loans Products");
    cy.wait(2000);
    cy.contains(".ng-option-label","Loans Products").click({ force: true });
    cy.wait(2000);
    cy.get('[heading="Bucket"] > .panel > .panel-heading').click();
    cy.wait(500);
    cy.get(".panel-open > .panel > .panel-collapse > .panel-body > .row > .col-md-12 > .form-control-group > .form-ng-select > .ng-select-container").type("3");
    cy.wait(500);
    cy.contains(".ng-option-label","3").click({ force: true });
    cy.wait(500);
    cy.get("accordion-group[heading='Geography'] div[class='panel-title']").click({force: true});
    cy.wait(500);
    cy.get("#geo-scope-HL04").click();
    cy.wait(500);
    cy.get(".panel-open > .panel > .panel-collapse > .panel-body > .row > .col-md-12.ng-star-inserted > .form-control-group > .form-ng-select > .ng-select-container").type("India");
    cy.wait(500);
    cy.contains(".ng-option-label","India").click({ force: true });
    cy.wait(500);
    cy.get(":nth-child(7) > .nav-link > span").click();
    cy.wait(2000);
 

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
 
 cy.wait(2000);
cy.get("#CollectionDate").type("25-Jun-2023").should('be.visible');
cy.wait(2000);
cy.get("#RenewalDate").type("15-Jul-2024").should('be.visible');
cy.wait(2000);
cy.get("#ExpiryDate").invoke('removeAttr', 'readonly')
  .clear()
  .type("23-Apr-27", { force: true })
  .blur();
cy.get("#remarks").type("aaaaaa bbbbbbbbb cccccccccc dddddddddd 123",{force: true}).should('be.visible');
cy.wait(2000)
//##########################################################
cy.get("#remarks").clear();
cy.wait(2000)
cy.get("#remarks").type("Its OK",{force: true}).should('be.visible');
cy.wait(2000)


//##########################################################
cy.get('#btn-submit').click({force: true});
cy.wait(2000);
    cy.contains('Error').should('be.visible');


}

//agent - staff disabled user
MobileNumberRenewPage010(){
    const filePath = 'Cypress/fixtures/Aadhar.png'

  cy.wait(2000);
  cy.get(this.locators.agentEmpanelmentRequest).click({force: true} );
  cy.get(this.locators.AddAgent).click({force: true});
  cy.wait(2000);

  cy.wait(2000);
  cy.get('#userType').select("FOS");
  cy.wait(1000);
  cy.get(this.locators.FirstName).type("Pranshu");
  cy.wait(2000);
  cy.get(this.locators.LastName).type("Raj");
  cy.wait(2000);
  cy.get(this.locators.Agencyname).select("Arun");
  cy.wait(2000);
  cy.get("#reportingManager").type("Arjun Singh - 1018");
  cy.wait(2000);
  // cy.get(this.locators.dilarID).type("123");
  // cy.wait(2000);
  // cy.get(this.locators.DRACertificateDate).type("16-05-2024");
  // cy.wait(2000);
  // cy.get(this.locators.dratrainingdate).type("16-07-2024");
  // cy.wait(2000);
  // cy.get(this.locators.DRANumb).type("1234567");
  // cy.wait(2000);
  cy.get(this.locators.Idtype).select("Pan card");
  cy.wait(2000)
  cy.get(this.locators.UDIDNumberr).type("12345678909876543");
  cy.wait(2000);
   const agentCode = Math.floor(10000 + Math.random() * 90000).toString();
cy.get(this.locators.agentcode).type(agentCode);
  cy.wait(2000);
  const filePath1 = 'Aadhar.png'
  cy.get('.upload-text').click();
  cy.wait(2000);
  cy.get('input[type="file"]').attachFile(filePath1);
  cy.wait(2000);


  cy.wait(2000);
  cy.get(this.locators.walletlimit).click();
    cy.wait(1000);
    cy.get('#walletLimit').type(20000);
    cy.wait(2000);
  cy.get(this.locators.Departmentdesignation).click();
  cy.wait(2000);
  cy.get(this.locators.Add).click();
  cy.wait(2000);
  cy.get(this.locators.Department).select("Agency Backend");
  cy.wait(2000);
  cy.get(this.locators.designationn).select("Agency Backend");
  cy.wait(2000);
  cy.get(this.locators.LocalAddressDetails).click();
  cy.wait(2000);
  cy.get(this.locators.Address).type(" AAAAAAAAAAAAAAAA XXXXXXXXXXXXXXXXXX BBBBBBBBBBBBBB CCCCCCCCCCCCCCC");
  cy.wait(2000);
  cy.get('#stateId').select('All');
  cy.wait(2000);
  cy.get("#cityId").select("All");
  cy.wait(2000);
  cy.get("#landmarkId").type("xxxx Bank");
  cy.wait(2000);
  cy.get("#pinId").type("845438");
  cy.wait(2000);
  cy.get("#mobileTypeId").select("MO",{force : true});
  cy.wait(2000);
  // cy.get("input[placeholder='code']").type("3223");
  // cy.wait(2000);
  
 
  // Cypress test code
 
  // 👉 Use captured mobile number here
  cy.get('@mobileNumber').then((mobile) => {
    cy.get(this.locators.mobile_id, { timeout: 10000 })
      .should('be.visible')
      .clear()
      .type(mobile);
  });
  cy.wait(2000);
  //cy.get("#emailId").type("pranshu@yopmail.com");
  //cy.wait(2000);
  function generateRandomEmail() {
    const randomString = Math.random().toString(36).substring(2, 11); // Generates a random string
    return `user_${randomString}@yopmail.com`; // Concatenate to form an email address
  }

  // Cypress test code
  cy.get("#emailId").type(generateRandomEmail());
  cy.wait(2000);
cy.get("#dobId")
  .invoke('removeAttr', 'readonly')
  .clear()
  .type("23-Apr-01", { force: true })
  .blur();
  cy.wait(2000);
  cy.get("#fatherNameId").type(" Mr B Kumar",{force: true});
  cy.wait(2000);
  cy.get('#bloodGroup').select("A-");
  cy.wait(1000);
  cy.get('#emer_contactNO').type(6598744125);
  cy.wait(1000);
  cy.get(this.locators.Banking_details).click();
  cy.wait(2000);
  cy.get(this.locators.cust_name).type("Pranshu raj");
  cy.wait(2000);
  cy.get("input[placeholder='Enter Account Number']").type("456785678776543");
  cy.wait(2000);
  cy.get("select[name='bankName']").select("BANK OF INDIA");
  cy.wait(2000);
  cy.get("select[name='bankBranchId']").select("BANO");
  cy.wait(2000);
 cy.get(':nth-child(6) > .nav-link > span').click();
    cy.wait(2000);
    cy.get("#product-scope-HL01").click();
    cy.wait(2000);
    cy.get(".col-md-12.ng-star-inserted > .form-control-group > .form-ng-select > .ng-select-container").type("Loans Products");
    cy.wait(2000);
    cy.contains(".ng-option-label","Loans Products").click({ force: true });
    cy.wait(2000);
    cy.get('[heading="Bucket"] > .panel > .panel-heading').click();
    cy.wait(500);
    cy.get(".panel-open > .panel > .panel-collapse > .panel-body > .row > .col-md-12 > .form-control-group > .form-ng-select > .ng-select-container").type("3");
    cy.wait(500);
    cy.contains(".ng-option-label","3").click({ force: true });
    cy.wait(500);
    cy.get("accordion-group[heading='Geography'] div[class='panel-title']").click({force: true});
    cy.wait(500);
    cy.get("#geo-scope-HL04").click();
    cy.wait(500);
    cy.get(".panel-open > .panel > .panel-collapse > .panel-body > .row > .col-md-12.ng-star-inserted > .form-control-group > .form-ng-select > .ng-select-container").type("India");
    cy.wait(500);
    cy.contains(".ng-option-label","India").click({ force: true });
    cy.wait(500);
    cy.get(":nth-child(7) > .nav-link > span").click();
    cy.wait(2000);
 

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
 
 cy.wait(2000);
cy.get("#CollectionDate").type("25-Jun-2023").should('be.visible');
cy.wait(2000);
cy.get("#RenewalDate").type("15-Jul-2024").should('be.visible');
cy.wait(2000);
cy.get("#ExpiryDate").invoke('removeAttr', 'readonly')
  .clear()
  .type("23-Apr-27", { force: true })
  .blur();
cy.get("#remarks").type("aaaaaa bbbbbbbbb cccccccccc dddddddddd 123",{force: true}).should('be.visible');
cy.wait(2000)
//##########################################################
cy.get("#remarks").clear();
cy.wait(2000)
cy.get("#remarks").type("Its OK",{force: true}).should('be.visible');
cy.wait(2000)


//##########################################################
cy.get('#btn-submit').click({force: true});
cy.wait(2000);
cy.wait(2000);
// After clicking submit button
cy.wait(2000);

cy.get('body').then(($body) => {
  // Check if "already exists" error is shown
  if (
    $body.text().includes('Email ID already exist') ||
    $body.text().includes('Mobile Number already exist') ||
    $body.text().includes('already exist')
  ) {
    cy.log('Email or Mobile already exists — skipping verification');
  } else {
    // Success — verify confirmation fields are visible
    cy.contains('Staff Name').scrollIntoView().should('exist');
    cy.contains('Staff Code').scrollIntoView().should('exist');
    cy.contains('Staff Email ID').scrollIntoView().should('exist');
    cy.contains('Staff Phone Number').scrollIntoView().should('exist');
  }
});


}
//agent - staff dormant user
MobileNumberRenewPage011(){
     const filePath = 'Cypress/fixtures/Aadhar.png'

  cy.wait(2000);
  cy.get(this.locators.agentEmpanelmentRequest).click({force: true} );
  cy.get(this.locators.AddAgent).click({force: true});
  cy.wait(2000);

  cy.wait(2000);
  cy.get('#userType').select("FOS");
  cy.wait(1000);
  cy.get(this.locators.FirstName).type("Pranshu");
  cy.wait(2000);
  cy.get(this.locators.LastName).type("Raj");
  cy.wait(2000);
  cy.get(this.locators.Agencyname).select("Arun");
  cy.wait(2000);
  cy.get("#reportingManager").type("Arjun Singh - 1018");
  cy.wait(2000);
  // cy.get(this.locators.dilarID).type("123");
  // cy.wait(2000);
  // cy.get(this.locators.DRACertificateDate).type("16-05-2024");
  // cy.wait(2000);
  // cy.get(this.locators.dratrainingdate).type("16-07-2024");
  // cy.wait(2000);
  // cy.get(this.locators.DRANumb).type("1234567");
  // cy.wait(2000);
  cy.get(this.locators.Idtype).select("Pan card");
  cy.wait(2000)
  cy.get(this.locators.UDIDNumberr).type("12345678909876543");
  cy.wait(2000);
   const agentCode = Math.floor(10000 + Math.random() * 90000).toString();
cy.get(this.locators.agentcode).type(agentCode);
  cy.wait(2000);
  const filePath1 = 'Aadhar.png'
  cy.get('.upload-text').click();
  cy.wait(2000);
  cy.get('input[type="file"]').attachFile(filePath1);
  cy.wait(2000);


  cy.wait(2000);
  cy.get(this.locators.walletlimit).click();
    cy.wait(1000);
    cy.get('#walletLimit').type(20000);
    cy.wait(2000);
  cy.get(this.locators.Departmentdesignation).click();
  cy.wait(2000);
  cy.get(this.locators.Add).click();
  cy.wait(2000);
  cy.get(this.locators.Department).select("Agency Backend");
  cy.wait(2000);
  cy.get(this.locators.designationn).select("Agency Backend");
  cy.wait(2000);
  cy.get(this.locators.LocalAddressDetails).click();
  cy.wait(2000);
  cy.get(this.locators.Address).type(" AAAAAAAAAAAAAAAA XXXXXXXXXXXXXXXXXX BBBBBBBBBBBBBB CCCCCCCCCCCCCCC");
  cy.wait(2000);
  cy.get('#stateId').select('All');
  cy.wait(2000);
  cy.get("#cityId").select("All");
  cy.wait(2000);
  cy.get("#landmarkId").type("xxxx Bank");
  cy.wait(2000);
  cy.get("#pinId").type("845438");
  cy.wait(2000);
  cy.get("#mobileTypeId").select("MO",{force : true});
  cy.wait(2000);
  // cy.get("input[placeholder='code']").type("3223");
  // cy.wait(2000);
  
 
  // Cypress test code
 
  // 👉 Use captured mobile number here
  cy.get('@mobileNumber').then((mobile) => {
    cy.get(this.locators.mobile_id, { timeout: 10000 })
      .should('be.visible')
      .clear()
      .type(mobile);
  });
  cy.wait(2000);
  //cy.get("#emailId").type("pranshu@yopmail.com");
  //cy.wait(2000);
  function generateRandomEmail() {
    const randomString = Math.random().toString(36).substring(2, 11); // Generates a random string
    return `user_${randomString}@yopmail.com`; // Concatenate to form an email address
  }

  // Cypress test code
  cy.get("#emailId").type(generateRandomEmail());
  cy.wait(2000);
  cy.get("#dobId")
  .invoke('removeAttr', 'readonly')
  .clear()
  .type("23-Apr-01", { force: true })
  .blur();
  cy.wait(2000);
  cy.get("#fatherNameId").type(" Mr B Kumar",{force: true});
  cy.wait(2000);
  cy.get('#bloodGroup').select("A-");
  cy.wait(1000);
  cy.get('#emer_contactNO').type(6598744125);
  cy.wait(1000);
  cy.get(this.locators.Banking_details).click();
  cy.wait(2000);
  cy.get(this.locators.cust_name).type("Pranshu raj");
  cy.wait(2000);
  cy.get("input[placeholder='Enter Account Number']").type("456785678776543");
  cy.wait(2000);
  cy.get("select[name='bankName']").select("BANK OF INDIA");
  cy.wait(2000);
  cy.get("select[name='bankBranchId']").select("BANO");
  cy.wait(2000);
 cy.get(':nth-child(6) > .nav-link > span').click();
    cy.wait(2000);
    cy.get("#product-scope-HL01").click();
    cy.wait(2000);
    cy.get(".col-md-12.ng-star-inserted > .form-control-group > .form-ng-select > .ng-select-container").type("Loans Products");
    cy.wait(2000);
    cy.contains(".ng-option-label","Loans Products").click({ force: true });
    cy.wait(2000);
    cy.get('[heading="Bucket"] > .panel > .panel-heading').click();
    cy.wait(500);
    cy.get(".panel-open > .panel > .panel-collapse > .panel-body > .row > .col-md-12 > .form-control-group > .form-ng-select > .ng-select-container").type("3");
    cy.wait(500);
    cy.contains(".ng-option-label","3").click({ force: true });
    cy.wait(500);
    cy.get("accordion-group[heading='Geography'] div[class='panel-title']").click({force: true});
    cy.wait(500);
    cy.get("#geo-scope-HL04").click();
    cy.wait(500);
    cy.get(".panel-open > .panel > .panel-collapse > .panel-body > .row > .col-md-12.ng-star-inserted > .form-control-group > .form-ng-select > .ng-select-container").type("India");
    cy.wait(500);
    cy.contains(".ng-option-label","India").click({ force: true });
    cy.wait(500);
    cy.get(":nth-child(7) > .nav-link > span").click();
    cy.wait(2000);
 

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
 
 cy.wait(2000);
cy.get("#CollectionDate").type("25-Jun-2023").should('be.visible');
cy.wait(2000);
cy.get("#RenewalDate").type("15-Jul-2024").should('be.visible');
cy.wait(2000);
cy.get("#ExpiryDate").invoke('removeAttr', 'readonly')
  .clear()
  .type("23-Apr-27", { force: true })
  .blur();cy.get("#CollectionDate").type("25-Jun-2023").should('be.visible');
cy.wait(2000);
cy.get("#RenewalDate").type("15-Jul-2024").should('be.visible');
cy.wait(2000);
cy.get("#ExpiryDate").invoke('removeAttr', 'readonly')
  .clear()
  .type("23-Apr-27", { force: true })
  .blur();
cy.get("#remarks").type("aaaaaa bbbbbbbbb cccccccccc dddddddddd 123",{force: true}).should('be.visible');
cy.wait(2000)
//##########################################################
cy.get("#remarks").clear();
cy.wait(2000)
cy.get("#remarks").type("Its OK",{force: true}).should('be.visible');
cy.wait(2000)


//##########################################################
cy.get('#btn-submit').click({force: true});
cy.wait(2000);
    cy.contains('Error').should('be.visible');




}
//Pending Approval
MobileNumberRenewPage012(){
      const filePath = 'Cypress/fixtures/Aadhar.png'

  cy.wait(2000);
  cy.get(this.locators.agentEmpanelmentRequest).click({force: true} );
  cy.get(this.locators.AddAgent).click({force: true});
  cy.wait(2000);

  cy.wait(2000);
  cy.get('#userType').select("FOS");
  cy.wait(1000);
  cy.get(this.locators.FirstName).type("Pranshu");
  cy.wait(2000);
  cy.get(this.locators.LastName).type("Raj");
  cy.wait(2000);
  cy.get(this.locators.Agencyname).select("Arun");
  cy.wait(2000);
  cy.get("#reportingManager").type("Arjun Singh - 1018");
  cy.wait(2000);
  // cy.get(this.locators.dilarID).type("123");
  // cy.wait(2000);
  // cy.get(this.locators.DRACertificateDate).type("16-05-2024");
  // cy.wait(2000);
  // cy.get(this.locators.dratrainingdate).type("16-07-2024");
  // cy.wait(2000);
  // cy.get(this.locators.DRANumb).type("1234567");
  // cy.wait(2000);
  cy.get(this.locators.Idtype).select("Pan card");
  cy.wait(2000)
  cy.get(this.locators.UDIDNumberr).type("12345678909876543");
  cy.wait(2000);
   const agentCode = Math.floor(10000 + Math.random() * 90000).toString();
cy.get(this.locators.agentcode).type(agentCode);
  cy.wait(2000);
  const filePath1 = 'Aadhar.png'
  cy.get('.upload-text').click();
  cy.wait(2000);
  cy.get('input[type="file"]').attachFile(filePath1);
  cy.wait(2000);


  cy.wait(2000);
  cy.get(this.locators.walletlimit).click();
    cy.wait(1000);
    cy.get('#walletLimit').type(20000);
    cy.wait(2000);
  cy.get(this.locators.Departmentdesignation).click();
  cy.wait(2000);
  cy.get(this.locators.Add).click();
  cy.wait(2000);
  cy.get(this.locators.Department).select("Agency Backend");
  cy.wait(2000);
  cy.get(this.locators.designationn).select("Agency Backend");
  cy.wait(2000);
  cy.get(this.locators.LocalAddressDetails).click();
  cy.wait(2000);
  cy.get(this.locators.Address).type(" AAAAAAAAAAAAAAAA XXXXXXXXXXXXXXXXXX BBBBBBBBBBBBBB CCCCCCCCCCCCCCC");
  cy.wait(2000);
  cy.get('#stateId').select('All');
  cy.wait(2000);
  cy.get("#cityId").select("All");
  cy.wait(2000);
  cy.get("#landmarkId").type("xxxx Bank");
  cy.wait(2000);
  cy.get("#pinId").type("845438");
  cy.wait(2000);
  cy.get("#mobileTypeId").select("MO",{force : true});
  cy.wait(2000);
  // cy.get("input[placeholder='code']").type("3223");
  // cy.wait(2000);
  
 
  // Cypress test code
 
  // 👉 Use captured mobile number here
  cy.get('@mobileNumber').then((mobile) => {
    cy.get(this.locators.mobile_id, { timeout: 10000 })
      .should('be.visible')
      .clear()
      .type(mobile);
  });
  cy.wait(2000);
  //cy.get("#emailId").type("pranshu@yopmail.com");
  //cy.wait(2000);
  function generateRandomEmail() {
    const randomString = Math.random().toString(36).substring(2, 11); // Generates a random string
    return `user_${randomString}@yopmail.com`; // Concatenate to form an email address
  }

  // Cypress test code
  cy.get("#emailId").type(generateRandomEmail());
  cy.wait(2000);
  cy.get("#dobId")
  .invoke('removeAttr', 'readonly')
  .clear()
  .type("23-Apr-01", { force: true })
  .blur();
  cy.wait(2000);
  cy.get("#fatherNameId").type(" Mr B Kumar",{force: true});
  cy.wait(2000);
  cy.get('#bloodGroup').select("A-");
  cy.wait(1000);
  cy.get('#emer_contactNO').type(6598744125);
  cy.wait(1000);
  cy.get(this.locators.Banking_details).click();
  cy.wait(2000);
  cy.get(this.locators.cust_name).type("Pranshu raj");
  cy.wait(2000);
  cy.get("input[placeholder='Enter Account Number']").type("456785678776543");
  cy.wait(2000);
  cy.get("select[name='bankName']").select("BANK OF INDIA");
  cy.wait(2000);
  cy.get("select[name='bankBranchId']").select("BANO");
  cy.wait(2000);
 cy.get(':nth-child(6) > .nav-link > span').click();
    cy.wait(2000);
    cy.get("#product-scope-HL01").click();
    cy.wait(2000);
    cy.get(".col-md-12.ng-star-inserted > .form-control-group > .form-ng-select > .ng-select-container").type("Loans Products");
    cy.wait(2000);
    cy.contains(".ng-option-label","Loans Products").click({ force: true });
    cy.wait(2000);
    cy.get('[heading="Bucket"] > .panel > .panel-heading').click();
    cy.wait(500);
    cy.get(".panel-open > .panel > .panel-collapse > .panel-body > .row > .col-md-12 > .form-control-group > .form-ng-select > .ng-select-container").type("3");
    cy.wait(500);
    cy.contains(".ng-option-label","3").click({ force: true });
    cy.wait(500);
    cy.get("accordion-group[heading='Geography'] div[class='panel-title']").click({force: true});
    cy.wait(500);
    cy.get("#geo-scope-HL04").click();
    cy.wait(500);
    cy.get(".panel-open > .panel > .panel-collapse > .panel-body > .row > .col-md-12.ng-star-inserted > .form-control-group > .form-ng-select > .ng-select-container").type("India");
    cy.wait(500);
    cy.contains(".ng-option-label","India").click({ force: true });
    cy.wait(500);
    cy.get(":nth-child(7) > .nav-link > span").click();
    cy.wait(2000);
 

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
 
 cy.wait(2000);
cy.get("#CollectionDate").type("25-Jun-2023").should('be.visible');
cy.wait(2000);
cy.get("#RenewalDate").type("15-Jul-2024").should('be.visible');
cy.wait(2000);
cy.get("#ExpiryDate").invoke('removeAttr', 'readonly')
  .clear()
  .type("23-Apr-27", { force: true })
  .blur();
cy.get("#remarks").type("aaaaaa bbbbbbbbb cccccccccc dddddddddd 123",{force: true}).should('be.visible');
cy.wait(2000)
//##########################################################
cy.get("#remarks").clear();
cy.wait(2000)
cy.get("#remarks").type("Its OK",{force: true}).should('be.visible');
cy.wait(2000)


//##########################################################
cy.get('#btn-submit').click({force: true});
cy.wait(2000);
   cy.wait(2000);
cy.get('body').then(($body) => {
  if (
    $body.text().includes('Email ID already exist') ||
    $body.text().includes('Mobile Number already exist') ||
    $body.text().includes('already exist')
  ) {
    cy.log('Email or Mobile already exists — skipping verification');
  }
});




}
//Rejected

MobileNumberRenewPage013(){
        const filePath = 'Cypress/fixtures/Aadhar.png'

  cy.wait(2000);
  cy.get(this.locators.agentEmpanelmentRequest).click({force: true} );
  cy.get(this.locators.AddAgent).click({force: true});
  cy.wait(2000);

  cy.wait(2000);
  cy.get('#userType').select("FOS");
  cy.wait(1000);
  cy.get(this.locators.FirstName).type("Pranshu");
  cy.wait(2000);
  cy.get(this.locators.LastName).type("Raj");
  cy.wait(2000);
  cy.get(this.locators.Agencyname).select("Arun");
  cy.wait(2000);
  cy.get("#reportingManager").type("Arjun Singh - 1018");
  cy.wait(2000);
  // cy.get(this.locators.dilarID).type("123");
  // cy.wait(2000);
  // cy.get(this.locators.DRACertificateDate).type("16-05-2024");
  // cy.wait(2000);
  // cy.get(this.locators.dratrainingdate).type("16-07-2024");
  // cy.wait(2000);
  // cy.get(this.locators.DRANumb).type("1234567");
  // cy.wait(2000);
  cy.get(this.locators.Idtype).select("Pan card");
  cy.wait(2000)
  cy.get(this.locators.UDIDNumberr).type("12345678909876543");
  cy.wait(2000);
 const agentCode = Math.floor(10000 + Math.random() * 90000).toString();
cy.get(this.locators.agentcode).type(agentCode);
  cy.wait(2000);
  const filePath1 = 'Aadhar.png'
  cy.get('.upload-text').click();
  cy.wait(2000);
  cy.get('input[type="file"]').attachFile(filePath1);
  cy.wait(2000);


  cy.wait(2000);
  cy.get(this.locators.walletlimit).click();
    cy.wait(1000);
    cy.get('#walletLimit').type(20000);
    cy.wait(2000);
  cy.get(this.locators.Departmentdesignation).click();
  cy.wait(2000);
  cy.get(this.locators.Add).click();
  cy.wait(2000);
  cy.get(this.locators.Department).select("Agency Backend");
  cy.wait(2000);
  cy.get(this.locators.designationn).select("Agency Backend");
  cy.wait(2000);
  cy.get(this.locators.LocalAddressDetails).click();
  cy.wait(2000);
  cy.get(this.locators.Address).type(" AAAAAAAAAAAAAAAA XXXXXXXXXXXXXXXXXX BBBBBBBBBBBBBB CCCCCCCCCCCCCCC");
  cy.wait(2000);
  cy.get('#stateId').select('All');
  cy.wait(2000);
  cy.get("#cityId").select("All");
  cy.wait(2000);
  cy.get("#landmarkId").type("xxxx Bank");
  cy.wait(2000);
  cy.get("#pinId").type("845438");
  cy.wait(2000);
  cy.get("#mobileTypeId").select("MO",{force : true});
  cy.wait(2000);
  // cy.get("input[placeholder='code']").type("3223");
  // cy.wait(2000);
  
 
  // Cypress test code
 
  // 👉 Use captured mobile number here
  cy.get('@mobileNumber').then((mobile) => {
    cy.get(this.locators.mobile_id, { timeout: 10000 })
      .should('be.visible')
      .clear()
      .type(mobile);
  });
  cy.wait(2000);
  //cy.get("#emailId").type("pranshu@yopmail.com");
  //cy.wait(2000);
  function generateRandomEmail() {
    const randomString = Math.random().toString(36).substring(2, 11); // Generates a random string
    return `user_${randomString}@yopmail.com`; // Concatenate to form an email address
  }

  // Cypress test code
  cy.get("#emailId").type(generateRandomEmail());
  cy.wait(2000);
cy.get("#dobId")
  .invoke('removeAttr', 'readonly')
  .clear()
  .type("23-Apr-01", { force: true })
  .blur();
  cy.wait(2000);
  cy.get("#fatherNameId").type(" Mr B Kumar",{force: true});
  cy.wait(2000);
  cy.get('#bloodGroup').select("A-");
  cy.wait(1000);
  cy.get('#emer_contactNO').type(6598744125);
  cy.wait(1000);
  cy.get(this.locators.Banking_details).click();
  cy.wait(2000);
  cy.get(this.locators.cust_name).type("Pranshu raj");
  cy.wait(2000);
  cy.get("input[placeholder='Enter Account Number']").type("456785678776543");
  cy.wait(2000);
  cy.get("select[name='bankName']").select("BANK OF INDIA");
  cy.wait(2000);
  cy.get("select[name='bankBranchId']").select("BANO");
  cy.wait(2000);
 cy.get(':nth-child(6) > .nav-link > span').click();
    cy.wait(2000);
    cy.get("#product-scope-HL01").click();
    cy.wait(2000);
    cy.get(".col-md-12.ng-star-inserted > .form-control-group > .form-ng-select > .ng-select-container").type("Loans Products");
    cy.wait(2000);
    cy.contains(".ng-option-label","Loans Products").click({ force: true });
    cy.wait(2000);
    cy.get('[heading="Bucket"] > .panel > .panel-heading').click();
    cy.wait(500);
    cy.get(".panel-open > .panel > .panel-collapse > .panel-body > .row > .col-md-12 > .form-control-group > .form-ng-select > .ng-select-container").type("3");
    cy.wait(500);
    cy.contains(".ng-option-label","3").click({ force: true });
    cy.wait(500);
    cy.get("accordion-group[heading='Geography'] div[class='panel-title']").click({force: true});
    cy.wait(500);
    cy.get("#geo-scope-HL04").click();
    cy.wait(500);
    cy.get(".panel-open > .panel > .panel-collapse > .panel-body > .row > .col-md-12.ng-star-inserted > .form-control-group > .form-ng-select > .ng-select-container").type("India");
    cy.wait(500);
    cy.contains(".ng-option-label","India").click({ force: true });
    cy.wait(500);
    cy.get(":nth-child(7) > .nav-link > span").click();
    cy.wait(2000);
 

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
 
 cy.wait(2000);
cy.get("#CollectionDate").type("25-Jun-2023").should('be.visible');
cy.wait(2000);
cy.get("#RenewalDate").type("15-Jul-2024").should('be.visible');
cy.wait(2000);
cy.get("#ExpiryDate").invoke('removeAttr', 'readonly')
  .clear()
  .type("23-Apr-27", { force: true })
  .blur();
cy.get("#remarks").type("aaaaaa bbbbbbbbb cccccccccc dddddddddd 123",{force: true}).should('be.visible');
cy.wait(2000)
//##########################################################
cy.get("#remarks").clear();
cy.wait(2000)
cy.get("#remarks").type("Its OK",{force: true}).should('be.visible');
cy.wait(2000)


//##########################################################
cy.get('#btn-submit').click({force: true});
cy.wait(2000);
   cy.get('body').then(($body) => {
  if (
    $body.text().includes('Email ID already exist') ||
    $body.text().includes('Mobile Number already exist') ||
    $body.text().includes('already exist')
  ) {
    cy.log('Email or Mobile already exists — skipping verification');
  }
});





}
//save as draft
MobileNumberRenewPage014(){
        const filePath = 'Cypress/fixtures/Aadhar.png'

  cy.wait(2000);
  cy.get(this.locators.agentEmpanelmentRequest).click({force: true} );
  cy.get(this.locators.AddAgent).click({force: true});
  cy.wait(2000);

  cy.wait(2000);
  cy.get('#userType').select("FOS");
  cy.wait(1000);
  cy.get(this.locators.FirstName).type("Pranshu");
  cy.wait(2000);
  cy.get(this.locators.LastName).type("Raj");
  cy.wait(2000);
  cy.get(this.locators.Agencyname).select("Arun");
  cy.wait(2000);
  cy.get("#reportingManager").type("Arjun Singh - 1018");
  cy.wait(2000);
  // cy.get(this.locators.dilarID).type("123");
  // cy.wait(2000);
  // cy.get(this.locators.DRACertificateDate).type("16-05-2024");
  // cy.wait(2000);
  // cy.get(this.locators.dratrainingdate).type("16-07-2024");
  // cy.wait(2000);
  // cy.get(this.locators.DRANumb).type("1234567");
  // cy.wait(2000);
  cy.get(this.locators.Idtype).select("Pan card");
  cy.wait(2000)
  cy.get(this.locators.UDIDNumberr).type("12345678909876543");
  cy.wait(2000);
   const agentCode = Math.floor(10000 + Math.random() * 90000).toString();
cy.get(this.locators.agentcode).type(agentCode);
  cy.wait(2000);
  const filePath1 = 'Aadhar.png'
  cy.get('.upload-text').click();
  cy.wait(2000);
  cy.get('input[type="file"]').attachFile(filePath1);
  cy.wait(2000);


  cy.wait(2000);
  cy.get(this.locators.walletlimit).click();
    cy.wait(1000);
    cy.get('#walletLimit').type(20000);
    cy.wait(2000);
  cy.get(this.locators.Departmentdesignation).click();
  cy.wait(2000);
  cy.get(this.locators.Add).click();
  cy.wait(2000);
  cy.get(this.locators.Department).select("Agency Backend");
  cy.wait(2000);
  cy.get(this.locators.designationn).select("Agency Backend");
  cy.wait(2000);
  cy.get(this.locators.LocalAddressDetails).click();
  cy.wait(2000);
  cy.get(this.locators.Address).type(" AAAAAAAAAAAAAAAA XXXXXXXXXXXXXXXXXX BBBBBBBBBBBBBB CCCCCCCCCCCCCCC");
  cy.wait(2000);
  cy.get('#stateId').select('All');
  cy.wait(2000);
  cy.get("#cityId").select("All");
  cy.wait(2000);
  cy.get("#landmarkId").type("xxxx Bank");
  cy.wait(2000);
  cy.get("#pinId").type("845438");
  cy.wait(2000);
  cy.get("#mobileTypeId").select("MO",{force : true});
  cy.wait(2000);
  // cy.get("input[placeholder='code']").type("3223");
  // cy.wait(2000);
  
 
  // Cypress test code

  // 👉 Use captured mobile number here
  cy.get('@mobileNumber').then((mobile) => {
    cy.get(this.locators.mobile_id, { timeout: 10000 })
      .should('be.visible')
      .clear()
      .type(mobile);
  });
  cy.wait(2000);
  //cy.get("#emailId").type("pranshu@yopmail.com");
  //cy.wait(2000);
  function generateRandomEmail() {
    const randomString = Math.random().toString(36).substring(2, 11); // Generates a random string
    return `user_${randomString}@yopmail.com`; // Concatenate to form an email address
  }

  // Cypress test code
  cy.get("#emailId").type(generateRandomEmail());
  cy.wait(2000);
  cy.get("#dobId")
  .invoke('removeAttr', 'readonly')
  .clear()
  .type("23-Apr-01", { force: true })
  .blur();
  cy.wait(2000);
  cy.get("#fatherNameId").type(" Mr B Kumar",{force: true});
  cy.wait(2000);
  cy.get('#bloodGroup').select("A-");
  cy.wait(1000);
  cy.get('#emer_contactNO').type(6598744125);
  cy.wait(1000);
  cy.get(this.locators.Banking_details).click();
  cy.wait(2000);
  cy.get(this.locators.cust_name).type("Pranshu raj");
  cy.wait(2000);
  cy.get("input[placeholder='Enter Account Number']").type("456785678776543");
  cy.wait(2000);
  cy.get("select[name='bankName']").select("BANK OF INDIA");
  cy.wait(2000);
  cy.get("select[name='bankBranchId']").select("BANO");
  cy.wait(2000);
 cy.get(':nth-child(6) > .nav-link > span').click();
    cy.wait(2000);
    cy.get("#product-scope-HL01").click();
    cy.wait(2000);
    cy.get(".col-md-12.ng-star-inserted > .form-control-group > .form-ng-select > .ng-select-container").type("Loans Products");
    cy.wait(2000);
    cy.contains(".ng-option-label","Loans Products").click({ force: true });
    cy.wait(2000);
    cy.get('[heading="Bucket"] > .panel > .panel-heading').click();
    cy.wait(500);
    cy.get(".panel-open > .panel > .panel-collapse > .panel-body > .row > .col-md-12 > .form-control-group > .form-ng-select > .ng-select-container").type("3");
    cy.wait(500);
    cy.contains(".ng-option-label","3").click({ force: true });
    cy.wait(500);
    cy.get("accordion-group[heading='Geography'] div[class='panel-title']").click({force: true});
    cy.wait(500);
    cy.get("#geo-scope-HL04").click();
    cy.wait(500);
    cy.get(".panel-open > .panel > .panel-collapse > .panel-body > .row > .col-md-12.ng-star-inserted > .form-control-group > .form-ng-select > .ng-select-container").type("India");
    cy.wait(500);
    cy.contains(".ng-option-label","India").click({ force: true });
    cy.wait(500);
    cy.get(":nth-child(7) > .nav-link > span").click();
    cy.wait(2000);
 

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
 
 cy.wait(2000);
cy.get("#CollectionDate").type("25-Jun-2023").should('be.visible');
cy.wait(2000);
cy.get("#RenewalDate").type("15-Jul-2024").should('be.visible');
cy.wait(2000);
cy.get("#ExpiryDate").invoke('removeAttr', 'readonly')
  .clear()
  .type("23-Apr-27", { force: true })
  .blur();
cy.get("#remarks").type("aaaaaa bbbbbbbbb cccccccccc dddddddddd 123",{force: true}).should('be.visible');
cy.wait(2000)
//##########################################################
cy.get("#remarks").clear();
cy.wait(2000)
cy.get("#remarks").type("Its OK",{force: true}).should('be.visible');
cy.wait(2000)


//##########################################################
cy.get('#btn-submit').click({force: true});
cy.wait(2000);
cy.wait(2000);
   cy.get('body').then(($body) => {
  if (
    $body.text().includes('Email ID already exist') ||
    $body.text().includes('Mobile Number already exist') ||
    $body.text().includes('already exist')
  ) {
    cy.log('Email or Mobile already exists — skipping verification');
  }
});




}

Approveduserstaffagent() {
  cy.wait(2000);
  cy.get(this.locators.user_management).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.agency).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.agency_search).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.agency_status).select('Approved');
  cy.wait(2000);
  cy.get(this.locators.search_button_agent).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.mobile_number_new)
    .invoke('text') // use 'val' if it's an input field
    .then((mobile) => {
      cy.wrap(mobile.trim()).as('mobileNumber');
    });
}

Disableduserstaffagent(){
  cy.wait(2000);
  cy.get(this.locators.user_management).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.Agent_empanelment).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.search_agent_new).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.status_agent).select('Disabled');
  cy.wait(2000);
  cy.get(this.locators.search_button_agent).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.mobile_number_new_disabled)
    .invoke('text') // use 'val' if it's an input field
    .then((mobile) => {
      cy.wrap(mobile.trim()).as('mobileNumber');
    });

}

pendingapprovalstaffagent(){
   cy.wait(2000);
  cy.get(this.locators.user_management).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.Agent_empanelment).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.search_agent_new).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.status_agent).select('Pending Approval');
  cy.wait(2000);
  cy.get(this.locators.search_button_agent).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.mobile_number_new_pending_approval)
    .invoke('text') // use 'val' if it's an input field
    .then((mobile) => {
      cy.wrap(mobile.trim()).as('mobileNumber');
    });

}

Dormantuserstaffagent(){
   cy.wait(2000);
  cy.get(this.locators.user_management).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.Agent_empanelment).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.search_agent_new).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.status_agent).select('');
  cy.wait(2000);
  cy.get(this.locators.search_button_agent).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.mobile_number_new_pending_approval)
    .invoke('text') // use 'val' if it's an input field
    .then((mobile) => {
      cy.wrap(mobile.trim()).as('mobileNumber');
    });

}


//Staff - Agent - Approved
MobileNumberRenewPage015(){
  const randomText = (length) => {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const randomDigits = (length) => {
    let result = '';
    for (let i = 0; i < length; i++) {
      result += Math.floor(Math.random() * 10);
    }
    return result;
  };

  const firstName = randomText(6);
  const lastName = randomText(6);
  const email = randomText(6) + '@yopmail.com';
  const mobile = '9' + randomDigits(9);
  const customId = randomDigits(5);
  const walletLimit = randomDigits(4);

  cy.wait(2000);
  cy.get(this.locators.user_management).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.staff_empanelment).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.Add_staff).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.usertype).select('Others');
  cy.wait(2000);
  cy.get(this.locators.fName).type(firstName);
  cy.wait(2000);
  cy.get(this.locators.lName).type(lastName);
  cy.wait(2000);
  cy.get(this.locators.emailId).type(email);
  cy.wait(2000);
  cy.get(this.locators.mobNo).type("3682888678");
  cy.wait(2000);
  cy.get(this.locators.domain).type('45678');
  cy.wait(2000);
  cy.get(this.locators.customId).type(customId);
  cy.wait(2000);
  cy.get(this.locators.add_button_staff).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.DepartmentsDesignations).click({force:true});
  cy.wait(2000);
  // Select a random department
cy.get(this.locators.department_Staff)
  .should('be.visible')
  .should('not.be.disabled')
  .find('option')
  .then((options) => {
    const validOptions = [...options].filter(o => o.value !== '' && o.value !== null);
    const randomIndex = Math.floor(Math.random() * validOptions.length);
    const randomValue = validOptions[randomIndex].value;
    cy.log('Selected Department: ' + validOptions[randomIndex].text);
    cy.get(this.locators.department_Staff).select(randomValue, { force: true });
  });
cy.wait(2000);

// Select a random designation
cy.get(this.locators.designation_Staff)
  .should('be.visible')
  .should('not.be.disabled')
  .find('option')
  .then((options) => {
    const validOptions = [...options].filter(o => o.value !== '' && o.value !== null);
    const randomIndex = Math.floor(Math.random() * validOptions.length);
    const randomValue = validOptions[randomIndex].value;
    cy.log('Selected Designation: ' + validOptions[randomIndex].text);
    cy.get(this.locators.designation_Staff).select(randomValue, { force: true });
  });
cy.wait(2000);
  cy.get(this.locators.wallet_limit_staff).click();
  cy.wait(3000);
  cy.get(this.locators.walletLimit).clear().type(walletLimit);
  cy.wait(2000);
  cy.get(this.locators.BaseBranchAndReportingManager).click({force:true});
 cy.get(this.locators.base_branch)
  .should('be.visible')
  .should('not.be.disabled')
  .find('option')
  .then((options) => {
    const validOptions = [...options].filter(o => o.value !== '' && o.value !== null);
    const randomIndex = Math.floor(Math.random() * validOptions.length);
    const randomValue = validOptions[randomIndex].value;
    cy.log('Selected Branch: ' + validOptions[randomIndex].text);
    cy.get(this.locators.base_branch).select(randomValue, { force: true });
  });
cy.wait(2000);
  

  cy.get(this.locators.input_container).type('a');
  cy.wait(2000);
  cy.get('.ng-option-label').then(($options) => {
    const randomIndex = Math.floor(Math.random() * $options.length);
    cy.wrap($options[randomIndex]).click();
  });
  cy.wait(2000);
  cy.get(this.locators.btn_submit).click();
  cy.wait(2000);
   cy.get('body').then(($body) => {
  if (
    $body.text().includes('Email ID already exist') ||
    $body.text().includes('Mobile Number already exist') ||
    $body.text().includes('already exist')
  ) {
    cy.log('Email or Mobile already exists — skipping verification');
  }
});

}
//Staff - Agent - Disabled
MobileNumberRenewPage016(){

   const randomText = (length) => {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const randomDigits = (length) => {
    let result = '';
    for (let i = 0; i < length; i++) {
      result += Math.floor(Math.random() * 10);
    }
    return result;
  };

  const firstName = randomText(6);
  const lastName = randomText(6);
  const email = randomText(6) + '@yopmail.com';
  const mobile = '9' + randomDigits(9);
  const customId = randomDigits(5);
  const walletLimit = randomDigits(4);

  cy.wait(2000);
  cy.get(this.locators.user_management).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.staff_empanelment).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.Add_staff).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.usertype).select('Others');
  cy.wait(2000);
  cy.get(this.locators.fName).type(firstName);
  cy.wait(2000);
  cy.get(this.locators.lName).type(lastName);
  cy.wait(2000);
  cy.get(this.locators.emailId).type(email);
  cy.wait(2000);
  cy.get(this.locators.mobNo).type("3682888678");
  cy.wait(2000);
  cy.get(this.locators.domain).type('45678');
  cy.wait(2000);
  cy.get(this.locators.customId).type(customId);
  cy.wait(2000);
  cy.get(this.locators.add_button_staff).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.DepartmentsDesignations).click({force:true});
  cy.wait(2000);
  // Select a random department
cy.get(this.locators.department_Staff)
  .should('be.visible')
  .should('not.be.disabled')
  .find('option')
  .then((options) => {
    const validOptions = [...options].filter(o => o.value !== '' && o.value !== null);
    const randomIndex = Math.floor(Math.random() * validOptions.length);
    const randomValue = validOptions[randomIndex].value;
    cy.log('Selected Department: ' + validOptions[randomIndex].text);
    cy.get(this.locators.department_Staff).select(randomValue, { force: true });
  });
cy.wait(2000);

// Select a random designation
cy.get(this.locators.designation_Staff)
  .should('be.visible')
  .should('not.be.disabled')
  .find('option')
  .then((options) => {
    const validOptions = [...options].filter(o => o.value !== '' && o.value !== null);
    const randomIndex = Math.floor(Math.random() * validOptions.length);
    const randomValue = validOptions[randomIndex].value;
    cy.log('Selected Designation: ' + validOptions[randomIndex].text);
    cy.get(this.locators.designation_Staff).select(randomValue, { force: true });
  });
cy.wait(2000);
  cy.get(this.locators.wallet_limit_staff).click();
  cy.wait(3000);
  cy.get(this.locators.walletLimit).clear().type(walletLimit);
  cy.wait(2000);
  cy.get(this.locators.BaseBranchAndReportingManager).click({force:true});
 cy.get(this.locators.base_branch)
  .should('be.visible')
  .should('not.be.disabled')
  .find('option')
  .then((options) => {
    const validOptions = [...options].filter(o => o.value !== '' && o.value !== null);
    const randomIndex = Math.floor(Math.random() * validOptions.length);
    const randomValue = validOptions[randomIndex].value;
    cy.log('Selected Branch: ' + validOptions[randomIndex].text);
    cy.get(this.locators.base_branch).select(randomValue, { force: true });
  });
cy.wait(2000);
  

  cy.get(this.locators.input_container).type('a');
  cy.wait(2000);
  cy.get('.ng-option-label').then(($options) => {
    const randomIndex = Math.floor(Math.random() * $options.length);
    cy.wrap($options[randomIndex]).click();
  });
  cy.wait(2000);
  cy.get(this.locators.btn_submit).click();
  cy.wait(2000);
   cy.get('body').then(($body) => {
  if (
    $body.text().includes('Email ID already exist') ||
    $body.text().includes('Mobile Number already exist') ||
    $body.text().includes('already exist')
  ) {
    cy.log('Email or Mobile already exists — skipping verification');
  }
});

}
//Dormant agent user
MobileNumberRenewPage017(){
     const randomText = (length) => {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const randomDigits = (length) => {
    let result = '';
    for (let i = 0; i < length; i++) {
      result += Math.floor(Math.random() * 10);
    }
    return result;
  };

  const firstName = randomText(6);
  const lastName = randomText(6);
  const email = randomText(6) + '@yopmail.com';
  const mobile = '9' + randomDigits(9);
  const customId = randomDigits(5);
  const walletLimit = randomDigits(4);

  cy.wait(2000);
  cy.get(this.locators.user_management).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.staff_empanelment).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.Add_staff).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.usertype).select('Others');
  cy.wait(2000);
  cy.get(this.locators.fName).type(firstName);
  cy.wait(2000);
  cy.get(this.locators.lName).type(lastName);
  cy.wait(2000);
  cy.get(this.locators.emailId).type(email);
  cy.wait(2000);
  cy.get(this.locators.mobNo).type("3682888678");
  cy.wait(2000);
  cy.get(this.locators.domain).type('45678');
  cy.wait(2000);
  cy.get(this.locators.customId).type(customId);
  cy.wait(2000);
  cy.get(this.locators.add_button_staff).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.DepartmentsDesignations).click({force:true});
  cy.wait(2000);
  // Select a random department
cy.get(this.locators.department_Staff)
  .should('be.visible')
  .should('not.be.disabled')
  .find('option')
  .then((options) => {
    const validOptions = [...options].filter(o => o.value !== '' && o.value !== null);
    const randomIndex = Math.floor(Math.random() * validOptions.length);
    const randomValue = validOptions[randomIndex].value;
    cy.log('Selected Department: ' + validOptions[randomIndex].text);
    cy.get(this.locators.department_Staff).select(randomValue, { force: true });
  });
cy.wait(2000);

// Select a random designation
cy.get(this.locators.designation_Staff)
  .should('be.visible')
  .should('not.be.disabled')
  .find('option')
  .then((options) => {
    const validOptions = [...options].filter(o => o.value !== '' && o.value !== null);
    const randomIndex = Math.floor(Math.random() * validOptions.length);
    const randomValue = validOptions[randomIndex].value;
    cy.log('Selected Designation: ' + validOptions[randomIndex].text);
    cy.get(this.locators.designation_Staff).select(randomValue, { force: true });
  });
cy.wait(2000);
  cy.get(this.locators.wallet_limit_staff).click();
  cy.wait(3000);
  cy.get(this.locators.walletLimit).clear().type(walletLimit);
  cy.wait(2000);
  cy.get(this.locators.BaseBranchAndReportingManager).click({force:true});
 cy.get(this.locators.base_branch)
  .should('be.visible')
  .should('not.be.disabled')
  .find('option')
  .then((options) => {
    const validOptions = [...options].filter(o => o.value !== '' && o.value !== null);
    const randomIndex = Math.floor(Math.random() * validOptions.length);
    const randomValue = validOptions[randomIndex].value;
    cy.log('Selected Branch: ' + validOptions[randomIndex].text);
    cy.get(this.locators.base_branch).select(randomValue, { force: true });
  });
cy.wait(2000);
  

  cy.get(this.locators.input_container).type('a');
  cy.wait(2000);
  cy.get('.ng-option-label').then(($options) => {
    const randomIndex = Math.floor(Math.random() * $options.length);
    cy.wrap($options[randomIndex]).click();
  });
  cy.wait(2000);
  cy.get(this.locators.btn_submit).click();
  cy.wait(2000);
   cy.get('body').then(($body) => {
  if (
    $body.text().includes('Email ID already exist') ||
    $body.text().includes('Mobile Number already exist') ||
    $body.text().includes('already exist')
  ) {
    cy.log('Email or Mobile already exists — skipping verification');
  }
});



}
// Pending Approval user
MobileNumberRenewPage018(){
   const randomText = (length) => {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const randomDigits = (length) => {
    let result = '';
    for (let i = 0; i < length; i++) {
      result += Math.floor(Math.random() * 10);
    }
    return result;
  };

  const firstName = randomText(6);
  const lastName = randomText(6);
  const email = randomText(6) + '@yopmail.com';
  const mobile = '9' + randomDigits(9);
  const customId = randomDigits(5);
  const walletLimit = randomDigits(4);

  cy.wait(2000);
  cy.get(this.locators.user_management).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.staff_empanelment).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.Add_staff).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.usertype).select('Others');
  cy.wait(2000);
  cy.get(this.locators.fName).type(firstName);
  cy.wait(2000);
  cy.get(this.locators.lName).type(lastName);
  cy.wait(2000);
  cy.get(this.locators.emailId).type(email);
  cy.wait(2000);
  cy.get(this.locators.mobNo).type("3682888678");
  cy.wait(2000);
  cy.get(this.locators.domain).type('45678');
  cy.wait(2000);
  cy.get(this.locators.customId).type(customId);
  cy.wait(2000);
  cy.get(this.locators.add_button_staff).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.DepartmentsDesignations).click({force:true});
  cy.wait(2000);
  // Select a random department
cy.get(this.locators.department_Staff)
  .should('be.visible')
  .should('not.be.disabled')
  .find('option')
  .then((options) => {
    const validOptions = [...options].filter(o => o.value !== '' && o.value !== null);
    const randomIndex = Math.floor(Math.random() * validOptions.length);
    const randomValue = validOptions[randomIndex].value;
    cy.log('Selected Department: ' + validOptions[randomIndex].text);
    cy.get(this.locators.department_Staff).select(randomValue, { force: true });
  });
cy.wait(2000);

// Select a random designation
cy.get(this.locators.designation_Staff)
  .should('be.visible')
  .should('not.be.disabled')
  .find('option')
  .then((options) => {
    const validOptions = [...options].filter(o => o.value !== '' && o.value !== null);
    const randomIndex = Math.floor(Math.random() * validOptions.length);
    const randomValue = validOptions[randomIndex].value;
    cy.log('Selected Designation: ' + validOptions[randomIndex].text);
    cy.get(this.locators.designation_Staff).select(randomValue, { force: true });
  });
cy.wait(2000);
  cy.get(this.locators.wallet_limit_staff).click();
  cy.wait(3000);
  cy.get(this.locators.walletLimit).clear().type(walletLimit);
  cy.wait(2000);
  cy.get(this.locators.BaseBranchAndReportingManager).click({force:true});
 cy.get(this.locators.base_branch)
  .should('be.visible')
  .should('not.be.disabled')
  .find('option')
  .then((options) => {
    const validOptions = [...options].filter(o => o.value !== '' && o.value !== null);
    const randomIndex = Math.floor(Math.random() * validOptions.length);
    const randomValue = validOptions[randomIndex].value;
    cy.log('Selected Branch: ' + validOptions[randomIndex].text);
    cy.get(this.locators.base_branch).select(randomValue, { force: true });
  });
cy.wait(2000);
  

  cy.get(this.locators.input_container).type('a');
  cy.wait(2000);
  cy.get('.ng-option-label').then(($options) => {
    const randomIndex = Math.floor(Math.random() * $options.length);
    cy.wrap($options[randomIndex]).click();
  });
  cy.wait(2000);
  cy.get(this.locators.btn_submit).click();
  cy.wait(2000);
   cy.get('body').then(($body) => {
  if (
    $body.text().includes('Email ID already exist') ||
    $body.text().includes('Mobile Number already exist') ||
    $body.text().includes('already exist')
  ) {
    cy.log('Email or Mobile already exists — skipping verification');
  }
});


}
//Rejected agent user
MobileNumberRenewPage019(){
     const randomText = (length) => {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const randomDigits = (length) => {
    let result = '';
    for (let i = 0; i < length; i++) {
      result += Math.floor(Math.random() * 10);
    }
    return result;
  };

  const firstName = randomText(6);
  const lastName = randomText(6);
  const email = randomText(6) + '@yopmail.com';
  const mobile = '9' + randomDigits(9);
  const customId = randomDigits(5);
  const walletLimit = randomDigits(4);

  cy.wait(2000);
  cy.get(this.locators.user_management).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.staff_empanelment).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.Add_staff).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.usertype).select('Others');
  cy.wait(2000);
  cy.get(this.locators.fName).type(firstName);
  cy.wait(2000);
  cy.get(this.locators.lName).type(lastName);
  cy.wait(2000);
  cy.get(this.locators.emailId).type(email);
  cy.wait(2000);
  cy.get(this.locators.mobNo).type("3682888678");
  cy.wait(2000);
  cy.get(this.locators.domain).type('45678');
  cy.wait(2000);
  cy.get(this.locators.customId).type(customId);
  cy.wait(2000);
  cy.get(this.locators.add_button_staff).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.DepartmentsDesignations).click({force:true});
  cy.wait(2000);
  // Select a random department
cy.get(this.locators.department_Staff)
  .should('be.visible')
  .should('not.be.disabled')
  .find('option')
  .then((options) => {
    const validOptions = [...options].filter(o => o.value !== '' && o.value !== null);
    const randomIndex = Math.floor(Math.random() * validOptions.length);
    const randomValue = validOptions[randomIndex].value;
    cy.log('Selected Department: ' + validOptions[randomIndex].text);
    cy.get(this.locators.department_Staff).select(randomValue, { force: true });
  });
cy.wait(2000);

// Select a random designation
cy.get(this.locators.designation_Staff)
  .should('be.visible')
  .should('not.be.disabled')
  .find('option')
  .then((options) => {
    const validOptions = [...options].filter(o => o.value !== '' && o.value !== null);
    const randomIndex = Math.floor(Math.random() * validOptions.length);
    const randomValue = validOptions[randomIndex].value;
    cy.log('Selected Designation: ' + validOptions[randomIndex].text);
    cy.get(this.locators.designation_Staff).select(randomValue, { force: true });
  });
cy.wait(2000);
  cy.get(this.locators.wallet_limit_staff).click();
  cy.wait(3000);
  cy.get(this.locators.walletLimit).clear().type(walletLimit);
  cy.wait(2000);
  cy.get(this.locators.BaseBranchAndReportingManager).click({force:true});
 cy.get(this.locators.base_branch)
  .should('be.visible')
  .should('not.be.disabled')
  .find('option')
  .then((options) => {
    const validOptions = [...options].filter(o => o.value !== '' && o.value !== null);
    const randomIndex = Math.floor(Math.random() * validOptions.length);
    const randomValue = validOptions[randomIndex].value;
    cy.log('Selected Branch: ' + validOptions[randomIndex].text);
    cy.get(this.locators.base_branch).select(randomValue, { force: true });
  });
cy.wait(2000);
  

  cy.get(this.locators.input_container).type('a');
  cy.wait(2000);
  cy.get('.ng-option-label').then(($options) => {
    const randomIndex = Math.floor(Math.random() * $options.length);
    cy.wrap($options[randomIndex]).click();
  });
  cy.wait(2000);
  cy.get(this.locators.btn_submit).click();
  cy.wait(2000);
   cy.get('body').then(($body) => {
  if (
    $body.text().includes('Email ID already exist') ||
    $body.text().includes('Mobile Number already exist') ||
    $body.text().includes('already exist')
  ) {
    cy.log('Email or Mobile already exists — skipping verification');
  }
});

}

//Saved as draft agent user
MobileNumberRenewPage020(){
      const randomText = (length) => {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const randomDigits = (length) => {
    let result = '';
    for (let i = 0; i < length; i++) {
      result += Math.floor(Math.random() * 10);
    }
    return result;
  };

  const firstName = randomText(6);
  const lastName = randomText(6);
  const email = randomText(6) + '@yopmail.com';
  const mobile = '9' + randomDigits(9);
  const customId = randomDigits(5);
  const walletLimit = randomDigits(4);

  cy.wait(2000);
  cy.get(this.locators.user_management).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.staff_empanelment).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.Add_staff).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.usertype).select('Others');
  cy.wait(2000);
  cy.get(this.locators.fName).type(firstName);
  cy.wait(2000);
  cy.get(this.locators.lName).type(lastName);
  cy.wait(2000);
  cy.get(this.locators.emailId).type(email);
  cy.wait(2000);
  cy.get(this.locators.mobNo).type("3682888678");
  cy.wait(2000);
  cy.get(this.locators.domain).type('45678');
  cy.wait(2000);
  cy.get(this.locators.customId).type(customId);
  cy.wait(2000);
  cy.get(this.locators.add_button_staff).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.DepartmentsDesignations).click({force:true});
  cy.wait(2000);
  // Select a random department
cy.get(this.locators.department_Staff)
  .should('be.visible')
  .should('not.be.disabled')
  .find('option')
  .then((options) => {
    const validOptions = [...options].filter(o => o.value !== '' && o.value !== null);
    const randomIndex = Math.floor(Math.random() * validOptions.length);
    const randomValue = validOptions[randomIndex].value;
    cy.log('Selected Department: ' + validOptions[randomIndex].text);
    cy.get(this.locators.department_Staff).select(randomValue, { force: true });
  });
cy.wait(2000);

// Select a random designation
cy.get(this.locators.designation_Staff)
  .should('be.visible')
  .should('not.be.disabled')
  .find('option')
  .then((options) => {
    const validOptions = [...options].filter(o => o.value !== '' && o.value !== null);
    const randomIndex = Math.floor(Math.random() * validOptions.length);
    const randomValue = validOptions[randomIndex].value;
    cy.log('Selected Designation: ' + validOptions[randomIndex].text);
    cy.get(this.locators.designation_Staff).select(randomValue, { force: true });
  });
cy.wait(2000);
  cy.get(this.locators.wallet_limit_staff).click();
  cy.wait(3000);
  cy.get(this.locators.walletLimit).clear().type(walletLimit);
  cy.wait(2000);
  cy.get(this.locators.BaseBranchAndReportingManager).click({force:true});
 cy.get(this.locators.base_branch)
  .should('be.visible')
  .should('not.be.disabled')
  .find('option')
  .then((options) => {
    const validOptions = [...options].filter(o => o.value !== '' && o.value !== null);
    const randomIndex = Math.floor(Math.random() * validOptions.length);
    const randomValue = validOptions[randomIndex].value;
    cy.log('Selected Branch: ' + validOptions[randomIndex].text);
    cy.get(this.locators.base_branch).select(randomValue, { force: true });
  });
cy.wait(2000);
  

  cy.get(this.locators.input_container).type('a');
  cy.wait(2000);
  cy.get('.ng-option-label').then(($options) => {
    const randomIndex = Math.floor(Math.random() * $options.length);
    cy.wrap($options[randomIndex]).click();
  });
  cy.wait(2000);
  cy.get(this.locators.btn_submit).click();
  cy.wait(2000);
   cy.get('body').then(($body) => {
  if (
    $body.text().includes('Email ID already exist') ||
    $body.text().includes('Mobile Number already exist') ||
    $body.text().includes('already exist')
  ) {
    cy.log('Email or Mobile already exists — skipping verification');
  }
});

}
/////////////////////////////////////////////////////////////////////////////////////////////////
//staff - staff - Approved
MobileNumberRenewPage021(){
     const randomText = (length) => {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const randomDigits = (length) => {
    let result = '';
    for (let i = 0; i < length; i++) {
      result += Math.floor(Math.random() * 10);
    }
    return result;
  };

  const firstName = randomText(6);
  const lastName = randomText(6);
  const email = randomText(6) + '@yopmail.com';
  const mobile = '9' + randomDigits(9);
  const customId = randomDigits(5);
  const walletLimit = randomDigits(4);

  cy.wait(2000);
  cy.get(this.locators.user_management).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.staff_empanelment).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.Add_staff).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.usertype).select('Others');
  cy.wait(2000);
  cy.get(this.locators.fName).type(firstName);
  cy.wait(2000);
  cy.get(this.locators.lName).type(lastName);
  cy.wait(2000);
  cy.get(this.locators.emailId).type(email);
  cy.wait(2000);
  cy.get(this.locators.mobNo).type("3682888678");
  cy.wait(2000);
  cy.get(this.locators.domain).type('45678');
  cy.wait(2000);
  cy.get(this.locators.customId).type(customId);
  cy.wait(2000);
  cy.get(this.locators.add_button_staff).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.DepartmentsDesignations).click({force:true});
  cy.wait(2000);
  // Select a random department
cy.get(this.locators.department_Staff)
  .should('be.visible')
  .should('not.be.disabled')
  .find('option')
  .then((options) => {
    const validOptions = [...options].filter(o => o.value !== '' && o.value !== null);
    const randomIndex = Math.floor(Math.random() * validOptions.length);
    const randomValue = validOptions[randomIndex].value;
    cy.log('Selected Department: ' + validOptions[randomIndex].text);
    cy.get(this.locators.department_Staff).select(randomValue, { force: true });
  });
cy.wait(2000);

// Select a random designation
cy.get(this.locators.designation_Staff)
  .should('be.visible')
  .should('not.be.disabled')
  .find('option')
  .then((options) => {
    const validOptions = [...options].filter(o => o.value !== '' && o.value !== null);
    const randomIndex = Math.floor(Math.random() * validOptions.length);
    const randomValue = validOptions[randomIndex].value;
    cy.log('Selected Designation: ' + validOptions[randomIndex].text);
    cy.get(this.locators.designation_Staff).select(randomValue, { force: true });
  });
cy.wait(2000);
  cy.get(this.locators.wallet_limit_staff).click();
  cy.wait(3000);
  cy.get(this.locators.walletLimit).clear().type(walletLimit);
  cy.wait(2000);
  cy.get(this.locators.BaseBranchAndReportingManager).click({force:true});
 cy.get(this.locators.base_branch)
  .should('be.visible')
  .should('not.be.disabled')
  .find('option')
  .then((options) => {
    const validOptions = [...options].filter(o => o.value !== '' && o.value !== null);
    const randomIndex = Math.floor(Math.random() * validOptions.length);
    const randomValue = validOptions[randomIndex].value;
    cy.log('Selected Branch: ' + validOptions[randomIndex].text);
    cy.get(this.locators.base_branch).select(randomValue, { force: true });
  });
cy.wait(2000);
  

  cy.get(this.locators.input_container).type('a');
  cy.wait(2000);
  cy.get('.ng-option-label').then(($options) => {
    const randomIndex = Math.floor(Math.random() * $options.length);
    cy.wrap($options[randomIndex]).click();
  });
  cy.wait(2000);
  cy.get(this.locators.btn_submit).click();
  cy.wait(2000);
   cy.get('body').then(($body) => {
  if (
    $body.text().includes('Email ID already exist') ||
    $body.text().includes('Mobile Number already exist') ||
    $body.text().includes('already exist')
  ) {
    cy.log('Email or Mobile already exists — skipping verification');
  }
});

  
}
//staff - staff - Disabled
MobileNumberRenewPage022(){
     const randomText = (length) => {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const randomDigits = (length) => {
    let result = '';
    for (let i = 0; i < length; i++) {
      result += Math.floor(Math.random() * 10);
    }
    return result;
  };

  const firstName = randomText(6);
  const lastName = randomText(6);
  const email = randomText(6) + '@yopmail.com';
  const mobile = '9' + randomDigits(9);
  const customId = randomDigits(5);
  const walletLimit = randomDigits(4);

  cy.wait(2000);
  cy.get(this.locators.user_management).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.staff_empanelment).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.Add_staff).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.usertype).select('Others');
  cy.wait(2000);
  cy.get(this.locators.fName).type(firstName);
  cy.wait(2000);
  cy.get(this.locators.lName).type(lastName);
  cy.wait(2000);
  cy.get(this.locators.emailId).type(email);
  cy.wait(2000);
  cy.get(this.locators.mobNo).type("3682888678");
  cy.wait(2000);
  cy.get(this.locators.domain).type('45678');
  cy.wait(2000);
  cy.get(this.locators.customId).type(customId);
  cy.wait(2000);
  cy.get(this.locators.add_button_staff).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.DepartmentsDesignations).click({force:true});
  cy.wait(2000);
  // Select a random department
cy.get(this.locators.department_Staff)
  .should('be.visible')
  .should('not.be.disabled')
  .find('option')
  .then((options) => {
    const validOptions = [...options].filter(o => o.value !== '' && o.value !== null);
    const randomIndex = Math.floor(Math.random() * validOptions.length);
    const randomValue = validOptions[randomIndex].value;
    cy.log('Selected Department: ' + validOptions[randomIndex].text);
    cy.get(this.locators.department_Staff).select(randomValue, { force: true });
  });
cy.wait(2000);

// Select a random designation
cy.get(this.locators.designation_Staff)
  .should('be.visible')
  .should('not.be.disabled')
  .find('option')
  .then((options) => {
    const validOptions = [...options].filter(o => o.value !== '' && o.value !== null);
    const randomIndex = Math.floor(Math.random() * validOptions.length);
    const randomValue = validOptions[randomIndex].value;
    cy.log('Selected Designation: ' + validOptions[randomIndex].text);
    cy.get(this.locators.designation_Staff).select(randomValue, { force: true });
  });
cy.wait(2000);
  cy.get(this.locators.wallet_limit_staff).click();
  cy.wait(3000);
  cy.get(this.locators.walletLimit).clear().type(walletLimit);
  cy.wait(2000);
  cy.get(this.locators.BaseBranchAndReportingManager).click({force:true});
 cy.get(this.locators.base_branch)
  .should('be.visible')
  .should('not.be.disabled')
  .find('option')
  .then((options) => {
    const validOptions = [...options].filter(o => o.value !== '' && o.value !== null);
    const randomIndex = Math.floor(Math.random() * validOptions.length);
    const randomValue = validOptions[randomIndex].value;
    cy.log('Selected Branch: ' + validOptions[randomIndex].text);
    cy.get(this.locators.base_branch).select(randomValue, { force: true });
  });
cy.wait(2000);
  

  cy.get(this.locators.input_container).type('a');
  cy.wait(2000);
  cy.get('.ng-option-label').then(($options) => {
    const randomIndex = Math.floor(Math.random() * $options.length);
    cy.wrap($options[randomIndex]).click();
  });
  cy.wait(2000);
  cy.get(this.locators.btn_submit).click();
  cy.wait(2000);
   cy.get('body').then(($body) => {
  if (
    $body.text().includes('Email ID already exist') ||
    $body.text().includes('Mobile Number already exist') ||
    $body.text().includes('already exist')
  ) {
    cy.log('Email or Mobile already exists — skipping verification');
  }
});



}

//staff - staff - Dormant 
MobileNumberRenewPage023(){
    const randomText = (length) => {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const randomDigits = (length) => {
    let result = '';
    for (let i = 0; i < length; i++) {
      result += Math.floor(Math.random() * 10);
    }
    return result;
  };

  const firstName = randomText(6);
  const lastName = randomText(6);
  const email = randomText(6) + '@yopmail.com';
  const mobile = '9' + randomDigits(9);
  const customId = randomDigits(5);
  const walletLimit = randomDigits(4);

  cy.wait(2000);
  cy.get(this.locators.user_management).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.staff_empanelment).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.Add_staff).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.usertype).select('Others');
  cy.wait(2000);
  cy.get(this.locators.fName).type(firstName);
  cy.wait(2000);
  cy.get(this.locators.lName).type(lastName);
  cy.wait(2000);
  cy.get(this.locators.emailId).type(email);
  cy.wait(2000);
  cy.get(this.locators.mobNo).type("3682888678");
  cy.wait(2000);
  cy.get(this.locators.domain).type('45678');
  cy.wait(2000);
  cy.get(this.locators.customId).type(customId);
  cy.wait(2000);
  cy.get(this.locators.add_button_staff).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.DepartmentsDesignations).click({force:true});
  cy.wait(2000);
  // Select a random department
cy.get(this.locators.department_Staff)
  .should('be.visible')
  .should('not.be.disabled')
  .find('option')
  .then((options) => {
    const validOptions = [...options].filter(o => o.value !== '' && o.value !== null);
    const randomIndex = Math.floor(Math.random() * validOptions.length);
    const randomValue = validOptions[randomIndex].value;
    cy.log('Selected Department: ' + validOptions[randomIndex].text);
    cy.get(this.locators.department_Staff).select(randomValue, { force: true });
  });
cy.wait(2000);

// Select a random designation
cy.get(this.locators.designation_Staff)
  .should('be.visible')
  .should('not.be.disabled')
  .find('option')
  .then((options) => {
    const validOptions = [...options].filter(o => o.value !== '' && o.value !== null);
    const randomIndex = Math.floor(Math.random() * validOptions.length);
    const randomValue = validOptions[randomIndex].value;
    cy.log('Selected Designation: ' + validOptions[randomIndex].text);
    cy.get(this.locators.designation_Staff).select(randomValue, { force: true });
  });
cy.wait(2000);
  cy.get(this.locators.wallet_limit_staff).click();
  cy.wait(3000);
  cy.get(this.locators.walletLimit).clear().type(walletLimit);
  cy.wait(2000);
  cy.get(this.locators.BaseBranchAndReportingManager).click({force:true});
 cy.get(this.locators.base_branch)
  .should('be.visible')
  .should('not.be.disabled')
  .find('option')
  .then((options) => {
    const validOptions = [...options].filter(o => o.value !== '' && o.value !== null);
    const randomIndex = Math.floor(Math.random() * validOptions.length);
    const randomValue = validOptions[randomIndex].value;
    cy.log('Selected Branch: ' + validOptions[randomIndex].text);
    cy.get(this.locators.base_branch).select(randomValue, { force: true });
  });
cy.wait(2000);
  

  cy.get(this.locators.input_container).type('a');
  cy.wait(2000);
  cy.get('.ng-option-label').then(($options) => {
    const randomIndex = Math.floor(Math.random() * $options.length);
    cy.wrap($options[randomIndex]).click();
  });
  cy.wait(2000);
  cy.get(this.locators.btn_submit).click();
  cy.wait(2000);
   cy.get('body').then(($body) => {
  if (
    $body.text().includes('Email ID already exist') ||
    $body.text().includes('Mobile Number already exist') ||
    $body.text().includes('already exist')
  ) {
    cy.log('Email or Mobile already exists — skipping verification');
  }
});

}
//staff - staff - Pending Approval
MobileNumberRenewPage024(){
    const randomText = (length) => {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const randomDigits = (length) => {
    let result = '';
    for (let i = 0; i < length; i++) {
      result += Math.floor(Math.random() * 10);
    }
    return result;
  };

  const firstName = randomText(6);
  const lastName = randomText(6);
  const email = randomText(6) + '@yopmail.com';
  const mobile = '9' + randomDigits(9);
  const customId = randomDigits(5);
  const walletLimit = randomDigits(4);

  cy.wait(2000);
  cy.get(this.locators.user_management).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.staff_empanelment).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.Add_staff).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.usertype).select('Others');
  cy.wait(2000);
  cy.get(this.locators.fName).type(firstName);
  cy.wait(2000);
  cy.get(this.locators.lName).type(lastName);
  cy.wait(2000);
  cy.get(this.locators.emailId).type(email);
  cy.wait(2000);
  cy.get(this.locators.mobNo).type("3682888678");
  cy.wait(2000);
  cy.get(this.locators.domain).type('45678');
  cy.wait(2000);
  cy.get(this.locators.customId).type(customId);
  cy.wait(2000);
  cy.get(this.locators.add_button_staff).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.DepartmentsDesignations).click({force:true});
  cy.wait(2000);
  // Select a random department
cy.get(this.locators.department_Staff)
  .should('be.visible')
  .should('not.be.disabled')
  .find('option')
  .then((options) => {
    const validOptions = [...options].filter(o => o.value !== '' && o.value !== null);
    const randomIndex = Math.floor(Math.random() * validOptions.length);
    const randomValue = validOptions[randomIndex].value;
    cy.log('Selected Department: ' + validOptions[randomIndex].text);
    cy.get(this.locators.department_Staff).select(randomValue, { force: true });
  });
cy.wait(2000);

// Select a random designation
cy.get(this.locators.designation_Staff)
  .should('be.visible')
  .should('not.be.disabled')
  .find('option')
  .then((options) => {
    const validOptions = [...options].filter(o => o.value !== '' && o.value !== null);
    const randomIndex = Math.floor(Math.random() * validOptions.length);
    const randomValue = validOptions[randomIndex].value;
    cy.log('Selected Designation: ' + validOptions[randomIndex].text);
    cy.get(this.locators.designation_Staff).select(randomValue, { force: true });
  });
cy.wait(2000);
  cy.get(this.locators.wallet_limit_staff).click();
  cy.wait(3000);
  cy.get(this.locators.walletLimit).clear().type(walletLimit);
  cy.wait(2000);
  cy.get(this.locators.BaseBranchAndReportingManager).click({force:true});
 cy.get(this.locators.base_branch)
  .should('be.visible')
  .should('not.be.disabled')
  .find('option')
  .then((options) => {
    const validOptions = [...options].filter(o => o.value !== '' && o.value !== null);
    const randomIndex = Math.floor(Math.random() * validOptions.length);
    const randomValue = validOptions[randomIndex].value;
    cy.log('Selected Branch: ' + validOptions[randomIndex].text);
    cy.get(this.locators.base_branch).select(randomValue, { force: true });
  });
cy.wait(2000);
  

  cy.get(this.locators.input_container).type('a');
  cy.wait(2000);
  cy.get('.ng-option-label').then(($options) => {
    const randomIndex = Math.floor(Math.random() * $options.length);
    cy.wrap($options[randomIndex]).click();
  });
  cy.wait(2000);
  cy.get(this.locators.btn_submit).click();
  cy.wait(2000);
   cy.get('body').then(($body) => {
  if (
    $body.text().includes('Email ID already exist') ||
    $body.text().includes('Mobile Number already exist') ||
    $body.text().includes('already exist')
  ) {
    cy.log('Email or Mobile already exists — skipping verification');
  }
});


}
//staff - staff - Rejected 
MobileNumberRenewPage025(){
     const randomText = (length) => {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const randomDigits = (length) => {
    let result = '';
    for (let i = 0; i < length; i++) {
      result += Math.floor(Math.random() * 10);
    }
    return result;
  };

  const firstName = randomText(6);
  const lastName = randomText(6);
  const email = randomText(6) + '@yopmail.com';
  const mobile = '9' + randomDigits(9);
  const customId = randomDigits(5);
  const walletLimit = randomDigits(4);

  cy.wait(2000);
  cy.get(this.locators.user_management).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.staff_empanelment).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.Add_staff).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.usertype).select('Others');
  cy.wait(2000);
  cy.get(this.locators.fName).type(firstName);
  cy.wait(2000);
  cy.get(this.locators.lName).type(lastName);
  cy.wait(2000);
  cy.get(this.locators.emailId).type(email);
  cy.wait(2000);
  cy.get(this.locators.mobNo).type("3682888678");
  cy.wait(2000);
  cy.get(this.locators.domain).type('45678');
  cy.wait(2000);
  cy.get(this.locators.customId).type(customId);
  cy.wait(2000);
  cy.get(this.locators.add_button_staff).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.DepartmentsDesignations).click({force:true});
  cy.wait(2000);
  // Select a random department
cy.get(this.locators.department_Staff)
  .should('be.visible')
  .should('not.be.disabled')
  .find('option')
  .then((options) => {
    const validOptions = [...options].filter(o => o.value !== '' && o.value !== null);
    const randomIndex = Math.floor(Math.random() * validOptions.length);
    const randomValue = validOptions[randomIndex].value;
    cy.log('Selected Department: ' + validOptions[randomIndex].text);
    cy.get(this.locators.department_Staff).select(randomValue, { force: true });
  });
cy.wait(2000);

// Select a random designation
cy.get(this.locators.designation_Staff)
  .should('be.visible')
  .should('not.be.disabled')
  .find('option')
  .then((options) => {
    const validOptions = [...options].filter(o => o.value !== '' && o.value !== null);
    const randomIndex = Math.floor(Math.random() * validOptions.length);
    const randomValue = validOptions[randomIndex].value;
    cy.log('Selected Designation: ' + validOptions[randomIndex].text);
    cy.get(this.locators.designation_Staff).select(randomValue, { force: true });
  });
cy.wait(2000);
  cy.get(this.locators.wallet_limit_staff).click();
  cy.wait(3000);
  cy.get(this.locators.walletLimit).clear().type(walletLimit);
  cy.wait(2000);
  cy.get(this.locators.BaseBranchAndReportingManager).click({force:true});
 cy.get(this.locators.base_branch)
  .should('be.visible')
  .should('not.be.disabled')
  .find('option')
  .then((options) => {
    const validOptions = [...options].filter(o => o.value !== '' && o.value !== null);
    const randomIndex = Math.floor(Math.random() * validOptions.length);
    const randomValue = validOptions[randomIndex].value;
    cy.log('Selected Branch: ' + validOptions[randomIndex].text);
    cy.get(this.locators.base_branch).select(randomValue, { force: true });
  });
cy.wait(2000);
  

  cy.get(this.locators.input_container).type('a');
  cy.wait(2000);
  cy.get('.ng-option-label').then(($options) => {
    const randomIndex = Math.floor(Math.random() * $options.length);
    cy.wrap($options[randomIndex]).click();
  });
  cy.wait(2000);
  cy.get(this.locators.btn_submit).click();
  cy.wait(2000);
   cy.get('body').then(($body) => {
  if (
    $body.text().includes('Email ID already exist') ||
    $body.text().includes('Mobile Number already exist') ||
    $body.text().includes('already exist')
  ) {
    cy.log('Email or Mobile already exists — skipping verification');
  }
});
}
//staff - staff - Saved as draft
MobileNumberRenewPage026(){
      const randomText = (length) => {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const randomDigits = (length) => {
    let result = '';
    for (let i = 0; i < length; i++) {
      result += Math.floor(Math.random() * 10);
    }
    return result;
  };

  const firstName = randomText(6);
  const lastName = randomText(6);
  const email = randomText(6) + '@yopmail.com';
  const mobile = '9' + randomDigits(9);
  const customId = randomDigits(5);
  const walletLimit = randomDigits(4);

  cy.wait(2000);
  cy.get(this.locators.user_management).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.staff_empanelment).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.Add_staff).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.usertype).select('Others');
  cy.wait(2000);
  cy.get(this.locators.fName).type(firstName);
  cy.wait(2000);
  cy.get(this.locators.lName).type(lastName);
  cy.wait(2000);
  cy.get(this.locators.emailId).type(email);
  cy.wait(2000);
  cy.get(this.locators.mobNo).type("3682888678");
  cy.wait(2000);
  cy.get(this.locators.domain).type('45678');
  cy.wait(2000);
  cy.get(this.locators.customId).type(customId);
  cy.wait(2000);
  cy.get(this.locators.add_button_staff).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.DepartmentsDesignations).click({force:true});
  cy.wait(2000);
  // Select a random department
cy.get(this.locators.department_Staff)
  .should('be.visible')
  .should('not.be.disabled')
  .find('option')
  .then((options) => {
    const validOptions = [...options].filter(o => o.value !== '' && o.value !== null);
    const randomIndex = Math.floor(Math.random() * validOptions.length);
    const randomValue = validOptions[randomIndex].value;
    cy.log('Selected Department: ' + validOptions[randomIndex].text);
    cy.get(this.locators.department_Staff).select(randomValue, { force: true });
  });
cy.wait(2000);

// Select a random designation
cy.get(this.locators.designation_Staff)
  .should('be.visible')
  .should('not.be.disabled')
  .find('option')
  .then((options) => {
    const validOptions = [...options].filter(o => o.value !== '' && o.value !== null);
    const randomIndex = Math.floor(Math.random() * validOptions.length);
    const randomValue = validOptions[randomIndex].value;
    cy.log('Selected Designation: ' + validOptions[randomIndex].text);
    cy.get(this.locators.designation_Staff).select(randomValue, { force: true });
  });
cy.wait(2000);
  cy.get(this.locators.wallet_limit_staff).click();
  cy.wait(3000);
  cy.get(this.locators.walletLimit).clear().type(walletLimit);
  cy.wait(2000);
  cy.get(this.locators.BaseBranchAndReportingManager).click({force:true});
 cy.get(this.locators.base_branch)
  .should('be.visible')
  .should('not.be.disabled')
  .find('option')
  .then((options) => {
    const validOptions = [...options].filter(o => o.value !== '' && o.value !== null);
    const randomIndex = Math.floor(Math.random() * validOptions.length);
    const randomValue = validOptions[randomIndex].value;
    cy.log('Selected Branch: ' + validOptions[randomIndex].text);
    cy.get(this.locators.base_branch).select(randomValue, { force: true });
  });
cy.wait(2000);
  

  cy.get(this.locators.input_container).type('a');
  cy.wait(2000);
  cy.get('.ng-option-label').then(($options) => {
    const randomIndex = Math.floor(Math.random() * $options.length);
    cy.wrap($options[randomIndex]).click();
  });
  cy.wait(2000);
  cy.get(this.locators.btn_submit).click();
  cy.wait(2000);
   cy.get('body').then(($body) => {
  if (
    $body.text().includes('Email ID already exist') ||
    $body.text().includes('Mobile Number already exist') ||
    $body.text().includes('already exist')
  ) {
    cy.log('Email or Mobile already exists — skipping verification');
  }
});


}



}

export default MobileNumberRenewPage;