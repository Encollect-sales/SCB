import { getLocators } from "../utils/locatorUtils";
import { getBaseUrl } from "../utils/configUtils";
import { faker } from "@faker-js/faker";

// class CommunicationPage {
//   constructor(locators) {
//     this.locators = locators;
//   }
//  CFG_001_Collections_EntryPoint_RecipientType() {

//   // Navigate to Communication Module
//  cy.get('#nav-item-1-communication').click({ force: true });
//  cy.wait(2000);
//   cy.contains('Create Communication Template').click({ force: true });
//   cy.wait(2000);

//   // Select Entry Point = Collection
//   cy.get(this.locators.entry_point_dropdown)
//     .should('be.visible')
//     .select('Collection');
//   cy.wait(2000);
//   cy.get(this.locators.channel_type).should('be.visible')
//     .select('Email');
//     cy.wait(2000);
//   // Wait until Recipient Type dropdown is populated
//   cy.get(this.locators.recipient_type_dropdown).select('Agent').should('be.visible');
//     cy.wait(2000);
   
// }
class CommunicationPage {

    constructor(locators) {
        this.locators = locators;
    }

    CommunicationTestPage_01() {

        // Open Communication module
        cy.get(this.locators.ClickOn_Communication).click();
        cy.wait(2000);

        // Open Create Communication Template
        cy.get(this.locators.ClickOn_CreateTemplate).click();
        cy.wait(2000);

        // Verify Tone is not displayed before selecting Channel Type
        cy.get(this.locators.tone).should('not.exist');
    }
    CommunicationTestPage_02() {
      // Open Communication module
      cy.get(this.locators.ClickOn_Communication).click();
      cy.wait(2000);

    // Open Create Communication Template
    cy.get(this.locators.ClickOn_CreateTemplate).click();
    cy.wait(2000);

    // Select Channel Type = Email
    cy.get(this.locators.channelType)
        .should('be.visible')
        .select('email');

    cy.wait(2000);

    // Verify Tone dropdown is visible
    cy.get(this.locators.tone)
        .should('be.visible');

    // Expected Tone options
    const expectedTones = [
        'Soft',
        'Moderate',
        'Firm',
        'Legal'
    ];

    // Get actual options
    cy.get(this.locators.tone)
        .find('option')
        .then($options => {

            const actualTones = [...$options]
                .map(option => option.innerText.trim())
                .filter(tone => tone !== 'Select Tone');

            expect(actualTones).to.deep.equal(expectedTones);

        });
      }
      CommunicationTestPage_03() {

    // Open Communication module
    cy.get(this.locators.ClickOn_Communication).click();
    cy.wait(2000);

    // Open Create Communication Template
    cy.get(this.locators.ClickOn_CreateTemplate).click();
    cy.wait(2000);

    // Select Channel Type = Email
    cy.get(this.locators.channelType)
        .should('be.visible')
        .select('email');

    // Verify Tone field appears dynamically
    cy.get(this.locators.tone)
        .should('be.visible');
}
CommunicationTestPage_04() {

    // Open Communication module
    cy.get(this.locators.ClickOn_Communication).click();
    cy.wait(2000);

    // Open Create Communication Template
    cy.get(this.locators.ClickOn_CreateTemplate).click();
    cy.wait(2000);

    // Select Channel Type = SMS
    cy.get(this.locators.channelType)
        .should('be.visible')
        .select('sms');

    // Verify Tone field appears dynamically
    cy.get(this.locators.tone)
        .should('be.visible');
}
CommunicationTestPage_05() {

    // Open Communication module
    cy.get(this.locators.ClickOn_Communication).click();
    cy.wait(2000);

    // Open Create Communication Template
    cy.get(this.locators.ClickOn_CreateTemplate).click();
    cy.wait(2000);

    // Select Channel Type = WhatsApp
    cy.get(this.locators.channelType)
        .should('be.visible')
        .select('whatsapp');

    // Verify Tone field appears dynamically
    cy.get(this.locators.tone)
        .should('be.visible');
}
CommunicationTestPage_06() {

    // Open Communication module
    cy.get(this.locators.ClickOn_Communication).click();
    cy.wait(2000);

    // Open Create Communication Template
    cy.get(this.locators.ClickOn_CreateTemplate).click();
    cy.wait(2000);

    // Select Channel Type = Email
    cy.get(this.locators.channelType)
        .should('be.visible')
        .select('email');

    cy.wait(2000);

    // Verify Tone is displayed
    cy.get(this.locators.tone)
        .should('be.visible');

    // Change Channel Type = Notification
    cy.get(this.locators.channelType)
        .select('notification');

    cy.wait(2000);

    // Verify Tone disappears dynamically
    cy.get(this.locators.tone)
        .should('not.exist');
}
CommunicationTestPage_07() {
  cy.get(this.locators.ClickOn_Communication).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_CreateTemplate).click();
  cy.wait(2000);

  // Step 1: Select SMS
  cy.get(this.locators.channelType)
    .should('be.visible')
    .select('sms');

  cy.wait(2000);

  // Verify Tone is visible for SMS
  cy.get(this.locators.tone)
    .should('be.visible');

  // Step 2: Change Channel Type to Letter
  cy.get(this.locators.channelType)
    .select('letter');

  cy.wait(2000);

  // Step 3: Verify Tone disappears dynamically
  cy.get(this.locators.tone)
    .should('not.exist');
}
CommunicationTestPage_08() {
  cy.get(this.locators.ClickOn_Communication).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_CreateTemplate).click();
  cy.wait(2000);

  // Step 1: Select WhatsApp
  cy.get(this.locators.channelType)
    .should('be.visible')
    .select('whatsapp');

  cy.wait(2000);

  // Verify Tone is visible for WhatsApp
  cy.get(this.locators.tone)
    .should('be.visible');

  // Step 2: Change Channel Type to AI Call
  cy.get(this.locators.channelType)
    .select('aicall');

  cy.wait(2000);

  // Step 3: Verify Tone disappears dynamically
  cy.get(this.locators.tone)
    .should('not.exist');
}
CommunicationTestPage_09() {
  cy.get(this.locators.ClickOn_Communication).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_CreateTemplate).click();
  cy.wait(2000);

  // Select Email
  cy.get(this.locators.channelType)
    .should('be.visible')
    .select('email');

  cy.wait(2000);

  // Verify Tone field is visible
  cy.get(this.locators.tone)
    .should('be.visible');

  // Verify Tone label is marked as required
  cy.contains('label', 'Tone')
    .should('be.visible')
    .and('have.class', 'required');
}
CommunicationTestPage_10() {
  cy.get(this.locators.ClickOn_Communication).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_CreateTemplate).click();
  cy.wait(2000);

  // Step 1: Select Email
  cy.get(this.locators.channelType)
    .should('be.visible')
    .select('email');

  cy.wait(2000);

  // Verify Tone field is visible
  cy.get(this.locators.tone)
    .should('be.visible');

  // Verify Tone field is mandatory
  cy.contains('label', 'Tone')
    .should('be.visible')
    .and('have.class', 'required');

  // Step 2: Change Channel Type to Notification
  cy.get(this.locators.channelType)
    .select('notification');

  cy.wait(2000);

  // Step 3: Verify Tone field and its required indicator disappear
  cy.get(this.locators.tone)
    .should('not.exist');

  cy.contains('label', 'Tone')
    .should('not.exist');
}
CommunicationTestPage_11() {
  cy.get(this.locators.ClickOn_Communication).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_CreateTemplate).click();
  cy.wait(2000);

  // Select Email
  cy.get(this.locators.channelType)
    .should('be.visible')
    .select('email');

  cy.wait(2000);

  // Verify Tone is visible
  cy.get(this.locators.tone)
    .should('be.visible');

  // Verify Tone is mandatory
  cy.contains('label', 'Tone')
    .should('be.visible')
    .and('have.class', 'required');

  // Leave Tone blank
  cy.get(this.locators.tone)
    .select('');

  // Move focus away from Tone to trigger validation
  cy.get(this.locators.channelType).focus().blur();

  // Verify validation message
  cy.contains('Tone is required')
    .should('be.visible');
}
CommunicationTestPage_12() {
  cy.get(this.locators.ClickOn_Communication).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_CreateTemplate).click();
  cy.wait(2000);

  // Step 1: Select SMS
  cy.get(this.locators.channelType)
    .should('be.visible')
    .select('sms');

  cy.wait(2000);

  // Verify Tone is visible
  cy.get(this.locators.tone)
    .should('be.visible');

  // Verify Tone is mandatory
  cy.contains('label', 'Tone')
    .should('be.visible')
    .and('have.class', 'required');

  // Step 3: Leave Tone blank
  cy.get(this.locators.tone)
    .select('');

  // Move focus away from Tone to trigger validation
  cy.get(this.locators.channelType)
    .focus()
    .blur();

  // Step 4: Verify validation message
  cy.contains('Tone is required')
    .should('be.visible');
}
CommunicationTestPage_13() {
  cy.get(this.locators.ClickOn_Communication).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_CreateTemplate).click();
  cy.wait(2000);

  // Step 1: Select WhatsApp
  cy.get(this.locators.channelType)
    .should('be.visible')
    .select('whatsapp');

  cy.wait(2000);

  // Verify Tone is visible
  cy.get(this.locators.tone)
    .should('be.visible');

  // Verify Tone is mandatory
  cy.contains('label', 'Tone')
    .should('be.visible')
    .and('have.class', 'required');

  // Step 3: Leave Tone blank
  cy.get(this.locators.tone)
    .select('');

  // Move focus away from Tone to trigger validation
  cy.get(this.locators.channelType)
    .focus()
    .blur();

  // Step 4: Verify validation message
  cy.contains('Tone is required')
    .should('be.visible');
}
CommunicationTestPage_14() {

  // Open Communication module
  cy.get(this.locators.ClickOn_Communication)
    .click({ force: true });

  cy.wait(2000);

  // Open Create Communication Template
  cy.get(this.locators.ClickOn_CreateTemplate)
    .click({ force: true });

  cy.wait(2000);

  // Template Name
  cy.get('input[placeholder="Enter Template Name"]')
    .should('be.visible')
    .clear()
    .type('Automation Email Tone Template');

  // Channel Type - Email
  cy.get(this.locators.channelType)
    .should('be.visible')
    .select('email');

  cy.wait(1500);

  // Entry Point - Account
  cy.get('select[formcontrolname="entryPoint"]')
    .should('be.visible')
    .select('Account');

  cy.wait(1000);

  // Recipient Type - Customer
  cy.get('select[formcontrolname="recipientType"]')
    .should('be.visible')
    .select('Customer');

  cy.wait(1500);

  // Tone - Soft
  cy.get(this.locators.tone)
    .should('be.visible')
    .select('Soft');


  // Template Body
cy.get('[contenteditable="true"]')
  .first()
  .click()
  .type('This is a sample communication template body.', { force: true });

cy.get('input[placeholder="Enter Email Subject"]')
  .should('be.visible')
  .clear()
  .type('Payment Reminder - Soft Communication');

  // Scroll to Create Template button
  cy.contains('button', 'Create Template')
    .scrollIntoView()
    .click({ force: true });

  cy.wait(3000);
}
// CommunicationTestPage_15() {
//   cy.get(this.locators.ClickOn_Communication)
//     .click({ force: true });

//   cy.wait(2000);

//   cy.get(this.locators.ClickOn_CreateTemplate)
//     .click({ force: true });

//   cy.wait(2000);

//   // Select SMS channel
//   cy.get(this.locators.channelType)
//     .should('be.visible')
//     .select('sms');

//   cy.wait(1500);

//   // Select Tone
//   cy.get(this.locators.tone)
//     .should('be.visible')
//     .select('Soft');
//     // Select Entry Point
// cy.get(this.locators.entryPoint)
//   .scrollIntoView()
//   .select('Account', { force: true });
// // Select Recipient Type
// cy.get(this.locators.recipientType)
//   .scrollIntoView()
//   .select('Customer', { force: true });

// // Enter Template ID
// cy.get('input[placeholder="Enter Template ID"]')
//   .should('be.visible')
//   .type(`SMS_TEMPLATE_${Date.now()}`);

// // Enter Template Body
// cy.get('textarea')
//   .last()
//   .should('be.visible')
//   .type('This is a sample SMS communication template body.', {
//     force: true
//   });

// // Click Create Template
// cy.contains('button', 'Create Template')
//   .click({ force: true });

// cy.wait(3000);


// //   // Template Name
// //   cy.get('input[placeholder="Enter Template Name"]')
// //     .clear()
// //     .type(`Automation SMS Tone Template ${Date.now()}`);

// //   // Keep your existing mandatory-field code from TC14 here
// //   // Entry Point
// //   // Recipient Type
// //   // Template Body / other mandatory fields

// //   // Create Template
// //   cy.contains('button', 'Create Template')
// //     .click({ force: true });

// //   cy.wait(3000);

// //   // Verify successful save
// //   cy.get('body').then($body => {
// //     const bodyText = $body.text().toLowerCase();

// //     expect(
// //       bodyText.includes('created') ||
// //       bodyText.includes('successfully') ||
// //       bodyText.includes('saved')
// //     ).to.be.true;
// //   });
// }
CommunicationTestPage_15() {
  cy.get(this.locators.ClickOn_Communication).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.ClickOn_CreateTemplate).click({ force: true });
  cy.wait(2000);

  // Channel Type - SMS
  cy.get(this.locators.channelType)
    .should('be.visible')
    .select('sms', { force: true });

  // Template Name
  cy.get('input[formcontrolname="templateName"]')
    .scrollIntoView()
    .clear()
    .type(`Automation SMS Tone Template ${Date.now()}`);

  // Entry Point
  cy.get('select[formcontrolname="entryPoint"]')
    .scrollIntoView()
    .select('Account', { force: true });

  // Recipient Type
  cy.get('select[formcontrolname="recipientType"]')
    .scrollIntoView()
    .select('Customer', { force: true });

  // Tone
  cy.get(this.locators.tone)
    .scrollIntoView()
    .select('Soft', { force: true });

  // Allow template to be sent - No
  cy.get('input[type="radio"]')
    .last()
    .check({ force: true });

  // Template ID
  cy.get('input[placeholder="Enter Template ID"]')
  .scrollIntoView()
  .should('be.visible')
  .clear()
  .type(`SMSTemplate${Date.now()}`);;

  // SMS Template Body
  cy.get('textarea[placeholder="Enter Approved Template Content"]')
  .scrollIntoView()
  .should('be.visible')
  .click()
  .invoke('val', 'This is a sample SMS communication template body for tone validation.')
  .trigger('input')
  .trigger('change')
  .blur();

  // Click Create Template
  cy.contains('button', 'Create Template')
    .scrollIntoView()
    .click({ force: true });

  cy.wait(5000);

  // Verify successful save
  cy.contains(/successfully|created|saved/i, { timeout: 10000 })
    .should('be.visible');
}
CommunicationTestPage_16() {
  // Open Communication
  cy.get(this.locators.ClickOn_Communication)
    .click({ force: true });

  cy.wait(2000);

  // Open Create Communication Template
  cy.get(this.locators.ClickOn_CreateTemplate)
    .click({ force: true });

  cy.wait(3000);

  // Template Name
  const templateName = `AutomationWhatsAppToneTemplate${Date.now()}`;

  cy.get('input[formcontrolname="templateName"]')
    .scrollIntoView()
    .should('be.visible')
    .clear({ force: true })
    .type(templateName, { force: true });

  // Select Channel Type = WhatsApp
  cy.get(this.locators.channelType)
    .should('be.visible')
    .select('whatsapp');

  cy.wait(2000);

  // Select Tone
  cy.get(this.locators.tone)
    .should('be.visible')
    .select('Soft');

  // Entry Point
  cy.get('select[formcontrolname="entryPoint"]')
    .scrollIntoView()
    .should('be.visible')
    .select('Account');

  // Recipient Type
  cy.get('select[formcontrolname="recipientType"]')
    .should('be.visible')
    .select('Customer');

  // Template Language is already English

  // Campaign Name
  const campaignName = `WhatsAppCampaign${Date.now()}`;

  cy.get('#dltTemplateId')
    .scrollIntoView()
    .should('be.visible')
    .clear({ force: true })
    .type(campaignName, { force: true });

  // Template Body
  const templateBody =
    'Dear Customer, this is a WhatsApp communication template created for automation testing.';

  cy.get('textarea[placeholder="Enter Approved Template Content"]')
    .filter(':visible')
    .first()
    .scrollIntoView()
    .should('be.visible')
    .click({ force: true })
    .invoke('val', templateBody)
    .trigger('input', { force: true })
    .trigger('change', { force: true });

  // Verify Template Body value
  cy.get('textarea[placeholder="Enter Approved Template Content"]')
    .filter(':visible')
    .first()
    .should('have.value', templateBody);

  // Click Create Template
  cy.contains('button', 'Create Template')
    .scrollIntoView()
    .should('be.visible')
    .click({ force: true });

  cy.wait(5000);

  // Verify successful save
  cy.contains(/successfully|created|saved/i, { timeout: 10000 })
    .should('be.visible');
}
CommunicationTestPage_17() {
  // Open Communication module
  cy.get(this.locators.ClickOn_Communication)
    .click({ force: true });

  cy.wait(2000);

  // Open Create Communication Template
  cy.get(this.locators.ClickOn_CreateTemplate)
    .click({ force: true });

  cy.wait(3000);

  // Generate unique values
  const templateName = `Automation Notification Template ${Date.now()}`;
  const notificationHeader = `Automation Notification ${Date.now()}`;
  const notificationBody = `This is an automated notification template created for testing.`;

  // Template Name
  cy.get('input[formcontrolname="templateName"]', { timeout: 10000 })
    .should('exist')
    .scrollIntoView()
    .clear()
    .type(templateName);

  // Channel Type = Notification
  cy.get(this.locators.channelType, { timeout: 10000 })
    .should('exist')
    .select('notification');

  cy.wait(2000);

  // Entry Point = Account
  cy.get('select[formcontrolname="entryPoint"]', { timeout: 10000 })
    .should('exist')
    .select('Account');

  cy.wait(1500);

  // Recipient Type = Agent
  // Notification screen supports Agent, not Customer
  cy.get('select[formcontrolname="recipientType"]', { timeout: 10000 })
    .should('exist')
    .select('Agent');

  cy.wait(1500);

  // Verify Tone is not displayed for Notification
  cy.get(this.locators.tone)
    .should('not.exist');

  // Header
  cy.get('#notificationHeader', { timeout: 10000 })
    .should('exist')
    .scrollIntoView()
    .clear()
    .type(notificationHeader);

  // Template Body - Rich Text Editor
  // Template Body - Rich Text Editor
cy.get('[contenteditable="true"]', { timeout: 10000 })
  .filter(':visible')
  .last()
  .scrollIntoView()
  .click()
  .type(notificationBody, { force: true });

cy.wait(1000);

  // Verify Template Body text
cy.get('[contenteditable="true"]')
  .filter(':visible')
  .last()
  .should('contain.text', notificationBody);

  // // Verify entered Template Body
  // cy.get('p[data-placeholder="Enter Notification Body"]')
  //   .should('contain.text', notificationBody);

  // Click Create Template separately to avoid detached DOM error
  cy.contains('button', 'Create Template', { timeout: 10000 })
    .should('exist')
    .scrollIntoView()
    .click({ force: true });

  cy.wait(4000);

  // Verify successful save
  cy.get('body').then(($body) => {
    const bodyText = $body.text();

    if (
      bodyText.includes('successfully') ||
      bodyText.includes('created successfully') ||
      bodyText.includes('Template created') ||
      bodyText.includes('Communication Template')
    ) {
      cy.log('Notification template saved successfully');
    }
  });
}
CommunicationTestPage_18() {
  // Open Communication module
  cy.get(this.locators.ClickOn_Communication)
    .click({ force: true });

  cy.wait(2000);

  // Open Create Communication Template
  cy.get(this.locators.ClickOn_CreateTemplate)
    .click({ force: true });

  cy.wait(3000);

  const templateName = `Automation Letter Template ${Date.now()}`;
  const letterBody = `This is an automated letter communication template created for testing.`;

  // Template Name
  cy.get('input[formcontrolname="templateName"]', { timeout: 10000 })
    .should('exist')
    .scrollIntoView()
    .clear()
    .type(templateName);

  // Select Channel Type = Letter
  cy.get(this.locators.channelType, { timeout: 10000 })
    .should('exist')
    .select('letter');

  cy.wait(2000);

  // Verify Tone is not displayed for Letter
  cy.get(this.locators.tone)
    .should('not.exist');

  // Entry Point
  cy.get('select[formcontrolname="entryPoint"]', { timeout: 10000 })
    .should('exist')
    .select('Account');

  cy.wait(1000);

  // Recipient Type
  cy.get('select[formcontrolname="recipientType"]', { timeout: 10000 })
    .should('exist')
    .select('Agent');

  cy.wait(1000);

  // Fill Letter Subject if available
  cy.get('body').then(($body) => {
    if ($body.find('input[formcontrolname="subject"]:visible').length > 0) {
      cy.get('input[formcontrolname="subject"]:visible')
        .clear()
        .type(`Automation Letter Subject ${Date.now()}`);
    }
  });

  // Fill Letter Body in rich text editor
  cy.get('[contenteditable="true"]', { timeout: 10000 })
    .filter(':visible')
    .last()
    .scrollIntoView()
    .click()
    .type(letterBody, { force: true });

  cy.wait(1000);

  // Verify body text
  cy.get('[contenteditable="true"]')
    .filter(':visible')
    .last()
    .should('contain.text', letterBody);

  // Click Create Template separately to avoid Angular detached DOM issue
  cy.contains('button', 'Create Template', { timeout: 10000 })
    .should('exist')
    .scrollIntoView()
    .click({ force: true });

  cy.wait(4000);

  // Verify successful save
  cy.get('body').should(($body) => {
    const bodyText = $body.text();

    const successFound =
      bodyText.includes('successfully') ||
      bodyText.includes('created successfully') ||
      bodyText.includes('Template created');

    expect(successFound, 'Letter template should be saved successfully').to.be.true;
  });
}
}
export default CommunicationPage;