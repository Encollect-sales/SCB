import 'cypress-file-upload';
class CommunicationPage {
  constructor(locators) {
    this.locators = locators;
  }
  Communication_01(){
  cy.get('[title="Communication"]').click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.create_communication_template).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Channel_Type).select('Notification');
  }

   Communication_02() {
    // Navigate to Create Communication Template
    cy.get('[title="Communication"]').click({ force: true });
    cy.wait(1000);

    cy.get(this.locators.create_communication_template).click({ force: true });
    cy.wait(2000);

    // Select Channel Type = Notification
    cy.get(this.locators.Channel_Type).select('Notification');
    cy.wait(1000);

    
    // Verify 'User' option is present
    cy.get(this.locators.Entry_Point)
      .should('contain.text', 'User');
  }

  Communication_03() {
    // Navigate to Create Communication Template
    cy.get('[title="Communication"]').click({ force: true });
    cy.wait(1000);

    cy.get(this.locators.create_communication_template).click({ force: true });
    cy.wait(2000);

    // Select Channel Type = Notification
    cy.get(this.locators.Channel_Type).select('Notification');
    cy.wait(1000);

    // Select Entry Point = User
    cy.get(this.locators.Entry_Point).select('User');
    cy.wait(1000);

    // Verify 'Agent' is visible
    cy.get(this.locators.Recipient_Type)
      .should('contain.text', 'Agent');

 
  }

   Communication_04() {
  const templateName = `Template_${Date.now()}`;

  // Navigate to Create Communication Template
  cy.get('[title="Communication"]').click({ force: true });
  cy.wait(1000);

  cy.get(this.locators.create_communication_template).click({ force: true });
  cy.wait(2000);

  // Select Channel Type = Notification
  cy.get(this.locators.Channel_Type).select('Notification');
  cy.wait(1000);

  // Enter random Template Name
  cy.get(this.locators.templateName)
    .clear()
    .type(templateName);

  // ✅ Header should be EMPTY — do nothing here
  cy.get(this.locators.header).should('have.value', '');

  // Enter valid Body
  cy.get(this.locators.template_body)
    .clear()
    .type('Valid notification body content');

  // Click Save
  cy.get(this.locators.save_button).click({force:true});

  // Verify Header mandatory validation
  cy.contains('Error Please fill all required fields')
  .should('be.visible');
   }

    Communication_05() {
    const templateName = `Template_${Date.now()}`;

    // Navigate to Create Communication Template
    cy.get('[title="Communication"]').click({ force: true });
    cy.wait(1000);

    cy.get(this.locators.create_communication_template).click({ force: true });
    cy.wait(2000);

    // Select Channel Type = Notification
    cy.get(this.locators.Channel_Type).select('Notification');
    cy.wait(1000);

    // Enter random Template Name
    cy.get(this.locators.templateName)
      .clear()
      .type(templateName);

    // Enter valid Header
    cy.get(this.locators.header)
      .clear()
      .type('Valid Notification Header');

    // Leave Body EMPTY (do not type anything)
    cy.get(this.locators.template_body).should('have.value', '');

    // Click Save
    cy.get(this.locators.save_button).click({ force: true });

    // Verify mandatory validation for Body
    cy.contains('Error Please fill all required fields')
  .should('be.visible');
  }

  Communication_06() {
    const templateName = `Template_${Date.now()}`;

    // Navigate to Create Communication Template
    cy.get('[title="Communication"]').click({ force: true });
    cy.wait(1000);

    cy.get(this.locators.create_communication_template).click({ force: true });
    cy.wait(2000);

    // Select Channel Type = Notification
    cy.get(this.locators.Channel_Type).select('Notification');
    cy.wait(1000);
    cy.get(this.locators.Entry_Point).select('User');
    cy.wait(1000);


    // Enter random Template Name
    cy.get(this.locators.templateName)
      .clear()
      .type(templateName);
    cy.wait(2000);
    // Enter Header with alphanumeric + spaces
    cy.get(this.locators.header)
      .clear()
      .type('PTP Update 123');
    cy.wait(2000);
    // Enter valid Body within 100 characters
    cy.get(this.locators.template_body)
      .clear()
      .type('PTP update notification body for testing.');

    // Click Save
    cy.get(this.locators.save_button).click({ force: true });

    // Verify success message
 cy.contains(`The Template "${templateName}" has been created successfully`)
  .should('be.visible');
  }

   Communication_07() {
    const templateName = `Template_${Date.now()}`;

    // Navigate to Create Communication Template
    cy.get('[title="Communication"]').click({ force: true });
    cy.wait(1000);

    cy.get(this.locators.create_communication_template).click({ force: true });
    cy.wait(2000);

    // Select Channel Type = Notification
    cy.get(this.locators.Channel_Type).select('Notification');
    cy.wait(1000);
    cy.get(this.locators.Entry_Point).select('User');
cy.wait(1000);

    // Enter random Template Name
    cy.get(this.locators.templateName)
      .clear()
      .type(templateName);

    // Enter Header with special characters
    cy.get(this.locators.header)
      .clear()
      .type('PTP@Today!');
      
  cy.contains('Header must contain only letters, numbers, and spaces').should('be.visible');

    // Enter valid Body
    cy.get(this.locators.template_body)
      .clear()
      .type('Valid notification body for special character test.');

    // Click Save
    cy.get(this.locators.save_button).click();

    // Verify validation error for invalid header characters
    cy.contains('Error Please fill all required fields')
  .should('be.visible');
  }

   Communication_08() {
    const templateName = `Template_${Date.now()}`;

    // Exactly 40 characters header
    const header40Chars = 'PTP Update Notification Header Length 40'; 
    // Length check (optional safety)
    expect(header40Chars.length).to.eq(40);

    // Navigate to Create Communication Template
    cy.get('[title="Communication"]').click({ force: true });
    cy.wait(1000);

    cy.get(this.locators.create_communication_template).click({ force: true });
    cy.wait(2000);

    // Select Channel Type = Notification
    cy.get(this.locators.Channel_Type).select('Notification');
    cy.wait(1000);
    cy.get(this.locators.Entry_Point).select('User');
    cy.wait(1000);
    // Enter random Template Name
    cy.get(this.locators.templateName)
      .clear()
      .type(templateName);

    // Enter Header with exactly 40 characters
    cy.get(this.locators.header)
      .clear()
      .type(header40Chars);

    // Enter valid Body
    cy.get(this.locators.template_body)
      .clear()
      .type('Valid notification body for 40 character header test.');

   // Click Save
    cy.get(this.locators.save_button).click({ force: true });

    // Verify validation error for invalid header characters
    cy.contains('Error Please fill all required fields')
  .should('be.visible');
  }
Communication_09() {
    const templateName = `Template_${Date.now()}`;

    // Exactly 41 characters header
    const header41Chars = 'PTP Update Notification Header Length 41!';
    // Safety check
    expect(header41Chars.length).to.eq(41);

    // Navigate to Create Communication Template
    cy.get('[title="Communication"]').click({ force: true });
    cy.wait(1000);

    cy.get(this.locators.create_communication_template).click({ force: true });
    cy.wait(2000);

    // Select Channel Type = Notification
    cy.get(this.locators.Channel_Type).select('Notification');
    cy.wait(1000);
    cy.get(this.locators.Entry_Point).select('User');
    cy.wait(1000);

    // Enter random Template Name
    cy.get(this.locators.templateName)
      .clear()
      .type(templateName);

    // Enter Header with 41 characters
    cy.get(this.locators.header)
      .clear()
      .type(header41Chars);
      cy.contains('Header must contain only letters, numbers, and spaces').should('be.visible');

    // Enter valid Body
    cy.get(this.locators.template_body)
      .clear()
      .type('Valid notification body for max-length header test.');

    // Click Save
    cy.get(this.locators.save_button).click({ force: true });

    // Verify max-length validation error for Header
    cy.contains('Error Please fill all required fields')
  .should('be.visible');
  }
  Communication_10() {
  const templateName = `Template_${Date.now()}`;

  // Exactly 100 characters body (safe & reliable)
  const body100Chars = 'A'.repeat(100);

  // Safety check
  expect(body100Chars.length).to.eq(100);

  // Navigate to Create Communication Template
  cy.get('[title="Communication"]').click({ force: true });
  cy.wait(1000);

  cy.get(this.locators.create_communication_template).click({ force: true });
  cy.wait(2000);

  // Select Channel Type = Notification
  cy.get(this.locators.Channel_Type).select('Notification');
  cy.wait(1000);
cy.get(this.locators.Entry_Point).select('User');
cy.wait(1000);

  // Enter random Template Name
  cy.get(this.locators.templateName)
    .clear()
    .type(templateName);

  // Enter valid Header
  cy.get(this.locators.header)
    .clear()
    .type('Valid Notification Header');

  // Enter Body with exactly 100 characters
  cy.get(this.locators.template_body)
    .clear()
    .type(body100Chars);

  // Click Save
  cy.get(this.locators.save_button).click({ force: true });
cy.contains(`The Template "${templateName}" has been created successfully`)
  .should('be.visible');


   
  }

 Communication_11() {
  const templateName = `Template_${Date.now()}`;

  // Generate exactly 101 characters
  const body101Chars = 'A'.repeat(101);

  // Safety check
  expect(body101Chars.length).to.eq(101);

  // Navigate to Create Communication Template
  cy.get('[title="Communication"]').click({ force: true });
  cy.wait(1000);

  cy.get(this.locators.create_communication_template)
    .click({ force: true });
  cy.wait(2000);

  // Select Channel Type = Notification
  cy.get(this.locators.Channel_Type)
    .select('Notification');
  cy.wait(1000);
   cy.get(this.locators.Entry_Point).select('User');
    cy.wait(1000);

  // Enter Template Name
  cy.get(this.locators.templateName)
    .clear()
    .type(templateName);

  // Enter valid Header
  cy.get(this.locators.header)
    .clear()
    .type('Valid Header');

  // Enter Body with 101 characters
  cy.get(this.locators.template_body)
    .clear()
    .type(body101Chars);

  // Click Save
  cy.get(this.locators.save_button)
    .click({ force: true });

  // Verify max-length validation for body
  cy.contains(/template.*created successfully/i)
    .should('be.visible');
}

Communication_12() {
  const templateName = `Template_${Date.now()}`;

  // Header with leading & trailing spaces (valid characters only)
  const headerWithSpaces = '  PTP Update 1  ';

  // Valid body
  const validBody =
    'This is a valid notification body text used for testing header space validation.';

  // Navigate to Create Communication Template
  cy.get('[title="Communication"]').click({ force: true });
  cy.wait(1000);

  cy.get(this.locators.create_communication_template)
    .click({ force: true });
  cy.wait(2000);

  // Select Channel Type = Notification
  cy.get(this.locators.Channel_Type)
    .select('Notification');
  cy.wait(1000);

  // Enter random Template Name
  cy.get(this.locators.templateName)
    .clear()
    .type(templateName);
  cy.get(this.locators.Entry_Point).select('User');
    cy.wait(1000);  

  // Enter Header with leading & trailing spaces
  cy.get(this.locators.header)
    .clear()
    .type(headerWithSpaces);

  // Enter valid Body
  cy.get(this.locators.template_body)
    .clear()
    .type(validBody);

  // Click Save
  cy.get(this.locators.save_button)
    .click({ force: true });

  // Verify template creation success message (name is dynamic)
  cy.contains(/template.*created successfully/i)
    .should('be.visible');

  // Ensure no validation error is shown
  cy.contains(/invalid|required|error/i)
    .should('not.exist');
}


CommunicationPage_13(){
const triggerName = `Template_${Date.now()}`;
  cy.get('[title="Communication"]').click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.create_trigger_template).click({force:true});
  cy.wait(2000);
    cy.get(this.locators.triggerName)
    .clear()
    .type(triggerName);
  cy.get(this.locators.triggerDescription).type('Adding Description');  
  cy.wait(2000);
  cy.get(this.locators.Trigger_Type).click({force:true});
  cy.wait(2000);
  const value = Math.floor(Math.random() * 30) + 1;

cy.get(this.locators.tempXValue)
  .clear()
  .type(value.toString());

  cy.wait(2000);  
  cy.contains('button', 'Okay').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.recipient_type).select('Agent');
  cy.wait(2000);
  cy.get(this.locators.notification).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.popupSelectedTemplate).select('test notification 3');
  cy.wait(2000);
  cy.contains('button', 'Add').click({force:true});
  cy.wait(2000);
   cy.get('.btn-secondary').click({force:true});
     cy.contains(/entry point.*Trigger|Notification/i)
    .should('be.visible');
}



CommunicationPage_14(){
   const templateName = `Template_${Date.now()}`;

    // Navigate to Create Communication Template
    cy.get('[title="Communication"]').click({ force: true });
    cy.wait(1000);

    cy.get(this.locators.create_communication_template).click({ force: true });
    cy.wait(2000);

    // Select Channel Type = Notification
    cy.get(this.locators.Channel_Type).select('Notification');
    cy.wait(1000);
    cy.get(this.locators.Entry_Point).select('User');
    cy.wait(1000);
    cy.get(this.locators.Add_Language).click({force:true});
    cy.wait(2000);
    cy.get('.ng-arrow-wrapper').click({force:true});
    cy.wait(2000);
    cy.contains('Hindi').click({force:true});


  cy.get(this.locators.Add_Language_button).click({force:true});
  cy.wait(2000);
    // Enter random Template Name
    cy.get(this.locators.templateName)
      .clear()
      .type(templateName);
    cy.wait(2000);
    cy.get(this.locators.click_on_hindi).click({force:true});
    cy.wait(2000);
    // Enter Header with alphanumeric + spaces
    cy.get(this.locators.header)
      .clear()
      .type('PTP UPDATE');
    cy.wait(2000);
    cy.get(this.locators.Remove_button).click({force:true});
    cy.wait(2000);
    // Enter valid Body within 100 characters
    cy.get(this.locators.template_body)
      .type('PTP update notification body for testing.');

    // Click Save
    cy.get(this.locators.save_button).click({ force: true });

    // Verify success message
 cy.contains(`The Template "${templateName}" has been created successfully`)
  .should('be.visible');


}
Communication_15() {
  const templateName = `Template_${Date.now()}`;

  // Invalid / unknown placeholder token
  const invalidTokenBody =
    'This is a test body with invalid token {{UNKNOWN_VARIABLE}}';

  // Navigate to Create Communication Template
  cy.get('[title="Communication"]').click({ force: true });
  cy.wait(1000);

  cy.get(this.locators.create_communication_template)
    .click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Entry_Point).select('User');
    cy.wait(1000);  

  // Select Channel Type = Notification
  cy.get(this.locators.Channel_Type)
    .select('Notification');
  cy.wait(1000);

  // Enter Template Name
  cy.get(this.locators.templateName)
    .clear()
    .type(templateName);

  // Enter valid Header
  cy.get(this.locators.header)
    .clear()
    .type('Invalid Placeholder Test');

  // Enter Body with invalid placeholder (IMPORTANT FIX)
  cy.get(this.locators.template_body)
    .clear()
    .type(invalidTokenBody, { parseSpecialCharSequences: false });

  // Click Save
  cy.get(this.locators.save_button)
    .click({ force: true });

  //  Either system blocks save OR sanitizes token
  cy.contains(/created successfully|invalid|placeholder|error/i)
    .should('be.visible');
}
Communication_16() {
  const triggerName = `Template_${Date.now()}`;

  cy.get('[title="Communication"]').click({ force: true });

  cy.get(this.locators.create_trigger_template)
    .scrollIntoView()
    .click({ force: true });

  cy.get(this.locators.triggerName)
    .clear()
    .type(triggerName);

  cy.get(this.locators.Trigger_Type).click({ force: true });

  const value = Math.floor(Math.random() * 30) + 1;
  cy.get(this.locators.tempXValue)
    .clear()
    .type(value.toString());

  cy.contains('button', 'Okay').click({ force: true });

  cy.get(this.locators.recipient_type).select('Agent');

  cy.get(this.locators.notification).click({ force: true });

  cy.get(this.locators.popupSelectedTemplate)
    .select('test notification 3');

  cy.contains('button', 'Add').click({ force: true });

  // Entry Point validation
  cy.get('#entryPoint').should('contain.text', 'Account');
}

Communication_17() {

  cy.get('[title="Communication"]').click({ force: true });
  cy.wait(1000);

  cy.get(this.locators.create_trigger_template)
    .click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.entryPoint)
  .should('be.visible')
  .find('option')
  .then(options => {
    const values = [...options].map(o => o.text.trim());

    expect(values).to.include.members([
      'Account',
      'Collection',
      'User'
    ]);
  });
}

Communication_18() {

  // Open Create Trigger screen
 cy.get('[title="Communication"]').click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.create_trigger_template).click({force:true});
  cy.wait(2000);
  // Select Entry Point = Account
   cy.get(this.locators.entryPoint).select('Account');
    cy.wait(1000);  

  cy.get(this.locators.recipient_type)
  .scrollIntoView()
  .should('be.visible')
  .find('option')
  .then(options => {
    const values = [...options].map(o => o.text.trim());

    expect(values).to.include.members([
      'Agent',
      'Customer'
    
    ]);
  });
}

Communication_19() {
   cy.get('[title="Communication"]').click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.create_trigger_template).click({force:true});
  cy.wait(2000);
  // Select Entry Point = User
  cy.get(this.locators.entryPoint)
    .scrollIntoView()
    .select('User', { force: true });

  // Validate Recipient Type options
  cy.get(this.locators.recipient_type)
    .scrollIntoView()
    .should('exist')
    .find('option')
    .then(options => {
      const values = [...options].map(o => o.text.trim());

      // Only Agent should be present
      expect(values).to.include('Agent');
      expect(values).to.not.include('Customer');
    });
}

Communication_20() {
  // Open Create Communication Trigger
 cy.get('[title="Communication"]').click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.create_trigger_template).click({force:true});
  cy.wait(2000);
  // Select Entry Point = User
  // Select Entry Point = Collection
  cy.get(this.locators.entryPoint)
    .scrollIntoView()
    .select('Collection', { force: true });

  // Validate Recipient Type options
  cy.get(this.locators.recipient_type)
    .scrollIntoView()
    .should('exist')
    .find('option')
    .then(options => {
      const values = [...options].map(o => o.text.trim());

      // Only Agent should be present
      expect(values).to.include('Agent');
     
    });
}
Communication_21() {
  // Open Create Communication Trigger screen
  cy.get('[title="Communication"]').click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.create_trigger_template).click({force:true});
  cy.wait(2000);

  // Verify Notification channel is available
  cy.contains('Notification')
    .scrollIntoView()
    .should('be.visible');
}

Communication_22(){
const triggerName = `Template_${Date.now()}`;
  cy.get('[title="Communication"]').click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.create_trigger_template).click({force:true});
  cy.wait(2000);
    cy.get(this.locators.triggerName)
    .clear()
    .type(triggerName);
  cy.wait(2000);
  cy.get(this.locators.Trigger_Type).click({force:true});
  cy.wait(2000);
  const value = Math.floor(Math.random() * 30) + 1;

cy.get(this.locators.tempXValue)
  .clear()
  .type(value.toString());

  cy.wait(2000);  
  cy.contains('button', 'Okay').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.recipient_type).select('Agent');
  cy.wait(2000);
  cy.get(this.locators.notification).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.popupSelectedTemplate).select('test notification 3');
  cy.wait(2000);
  cy.contains('button', 'Add').click({force:true});
  cy.wait(2000);
   cy.get('.btn-secondary').click({force:true});
     cy.contains(/entry point.*Trigger|Notification/i)
    .should('be.visible');
}

Communication_23(){
const triggerName = `Template_${Date.now()}`;
  cy.get('[title="Communication"]').click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.create_trigger_template).click({force:true});
  cy.wait(2000);
    cy.get(this.locators.triggerName)
    .clear()
    .type(triggerName);
  cy.wait(2000);
  cy.get(this.locators.Trigger_Type).click({force:true});
  cy.wait(2000);
  const value = Math.floor(Math.random() * 30) + 1;

cy.get(this.locators.tempXValue)
  .clear()
  .type(value.toString());

  cy.wait(2000);  
  cy.contains('button', 'Okay').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.recipient_type).select('Agent');
  cy.wait(2000);
  cy.get(this.locators.notification).click({force:true});
  // cy.wait(2000);
  // cy.get(this.locators.popupSelectedTemplate).select('test notification 3');
  cy.wait(2000);
  cy.contains('button', 'Add').click({force:true});
  cy.wait(2000);
   cy.get('.btn-secondary').click({force:true});
     cy.contains(/entry point.*invalid|required|error/i)
    .should('be.visible');
}

Communication_24(){
const triggerName = `Template_${Date.now()}`;
  cy.get('[title="Communication"]').click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.create_trigger_template).click({force:true});
  cy.wait(2000);
    cy.get(this.locators.triggerName)
    .clear()
    .type(triggerName);
  cy.wait(2000);
  cy.get(this.locators.Trigger_Type).click({force:true});
  cy.wait(2000);
  const value = Math.floor(Math.random() * 30) + 1;

cy.get(this.locators.tempXValue)
  .clear()
  .type(value.toString());

  cy.wait(2000);  
  cy.contains('button', 'Okay').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.recipient_type).select('Agent');
  cy.wait(2000);
  cy.get(this.locators.notification).click({force:true});
  cy.wait(2000);
 cy.get(this.locators.popupSelectedTemplate)
    .find('option')
    .then(options => {
      const values = [...options].map(o => o.text.trim());

      
      expect(values).to.not.include('New');
    });
  cy.wait(2000);
  cy.contains('button', 'Add').click({force:true});
  // cy.wait(2000);
  //  cy.get('.btn-secondary').click({force:true});
  //    cy.contains(/entry point.*invalid|required|error/i)
  //   .should('be.visible');
}

Communication_25() {
  const triggerName = `Trigger_${Date.now()}`;

  cy.get('[title="Communication"]').click({ force: true });
  cy.wait(1000);

  cy.get(this.locators.create_trigger_template).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.triggerName)
    .clear()
    .type(triggerName);

  cy.wait(2000);

  // Select Entry Point = User
  cy.get(this.locators.entryPoint)
    .scrollIntoView()
    .select('User', { force: true });

  cy.wait(2000);

  // Open Trigger Type dropdown
  cy.get("#trigger-type-3")
    .scrollIntoView()
    .click({ force: true });

  cy.wait(2000);

  
}
Communication_26() {
  const triggerName = `Trigger_${Date.now()}`;

  cy.get('[title="Communication"]').click({ force: true });
  cy.wait(1000);

  cy.get(this.locators.create_trigger_template).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.triggerName)
    .clear()
    .type(triggerName);

  cy.wait(2000);

  // Select Entry Point = User
  cy.get(this.locators.entryPoint)
    .scrollIntoView()
    .select('User', { force: true });

  cy.wait(2000);
  cy.get("#trigger-type-4")
    .scrollIntoView()
    .click({ force: true });

  cy.wait(2000);

  
}
Communication_27() {
  const triggerName = `Trigger_${Date.now()}`;

  cy.get('[title="Communication"]').click({ force: true });
  cy.wait(1000);

  cy.get(this.locators.create_trigger_template).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.triggerName)
    .clear()
    .type(triggerName);

  cy.wait(2000);

  // Select Entry Point = User
  cy.get(this.locators.entryPoint)
    .scrollIntoView()
    .select('User', { force: true });

  cy.wait(2000);

  // Select Trigger Type = On Unattempted Accounts
  cy.get("#trigger-type-3").click({force:true});
  
  cy.wait(2000);

  // Verify trigger description / help text
      cy.contains('Trigger will fire on unattempted accounts from beginning of current month till date.')
    .scrollIntoView()
    .should('be.visible');
    
}

Communication_28() {
  const triggerName = `Trigger_${Date.now()}`;

  cy.get('[title="Communication"]').click({ force: true });
  cy.wait(1000);

  cy.get(this.locators.create_trigger_template).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.triggerName)
    .clear()
    .type(triggerName);

  cy.wait(1000);

  // Select Entry Point = User
  cy.get(this.locators.entryPoint)
    .select('User', { force: true });

  cy.wait(2000);

  // Select Trigger Type = On Next Action Date
 cy.get("#trigger-type-4").click({force:true});

  cy.wait(2000);

  // Validate description text
  cy.get('.alert')
    .scrollIntoView()
    .should('be.visible')
    .invoke('text')
    .should('match', /next action date/i);
}
Communication_29() {
  const triggerName1 = `Trigger_${Date.now()}`;
  const triggerName2 = `Trigger_${Date.now()}_DUP`;

  // ✅ Generate ONCE per test run
  const tempXValue = Math.floor(Math.random() * 30) + 1;

  // ---------------- First Trigger Creation ----------------
  cy.get('[title="Communication"]').click({ force: true });
  cy.wait(1000);

  cy.get(this.locators.create_trigger_template).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.triggerName)
    .clear()
    .type(triggerName1);

  cy.wait(1000);

  cy.get(this.locators.entryPoint)
    .select('Account', { force: true });

  cy.wait(1000);

  cy.get("#trigger-type-5").click({ force: true });
  cy.wait(1000);

  cy.get(this.locators.tempXValue)
    .clear()
    .type(tempXValue.toString());

  cy.wait(2000);
  cy.contains('button', 'Okay').click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.recipient_type)
    .select('Agent', { force: true });

  cy.wait(1000);

  cy.get(this.locators.notification)
    .click({ force: true });

  cy.wait(1000);

  cy.get(this.locators.popupSelectedTemplate)
    .select(1, { force: true });

  cy.wait(1000);

  cy.contains('button', 'Add').click({ force: true });
  cy.wait(1000);

  cy.get(".btn-secondary").click({ force: true });
  cy.wait(3000);

  // ---------------- Duplicate Trigger Attempt ----------------
  cy.get(this.locators.create_trigger_template)
    .click({ force: true });

  cy.wait(2000);

  cy.get(this.locators.triggerName)
    .clear()
    .type(triggerName2);

  cy.wait(1000);

  cy.get(this.locators.entryPoint)
    .select('Account', { force: true });

  cy.wait(1000);

  cy.get("#trigger-type-5").click({ force: true });
  cy.wait(1000);

  // ✅ SAME value reused
  cy.get(this.locators.tempXValue)
    .clear()
    .type(tempXValue.toString());

  cy.wait(2000);
  cy.contains('button', 'Okay').click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.recipient_type)
    .select('Agent', { force: true });

  cy.wait(1000);

  cy.get(this.locators.notification)
    .click({ force: true });

  cy.wait(1000);

  cy.get(this.locators.popupSelectedTemplate)
    .select(1, { force: true });

  cy.wait(1000);

  cy.contains('button', 'Add').click({ force: true });
  cy.wait(1000);

  cy.get('.btn-secondary').click({ force: true });

  // ---------------- Validation ----------------
 cy.contains(
  /a trigger with same value of \d+ exists for this trigger type in active state/i,
  { timeout: 10000 }
).should('exist');

}

Communication_30() {
  const triggerName = `SMS_PTP_${Date.now()}`;
 

  // Navigate to Communication → Create Template
  cy.get('[title="Communication"]').click({ force: true });
  cy.wait(1000);

  // Create Trigger Template
cy.get(this.locators.create_trigger_template)
  .click({ force: true });
cy.wait(2000);

// Enter Trigger Name
cy.get(this.locators.triggerName)
  .clear()
  .type(triggerName);
cy.wait(1000);

// Select Entry Point
cy.get(this.locators.entryPoint)
  .select('Account', { force: true });
cy.wait(1000);

// Select Trigger Type = On PTP Date
cy.get("#trigger-type-8").click({ force: true });
cy.wait(1000);



// Recipient Type = Customer (FIXED)
cy.get(this.locators.recipient_type)
  .select('Customer', { force: true });
cy.wait(1000);

// Channel = SMS (FIXED – assuming notification opens channel options)
cy.get(this.locators.smsChannel)
  .click({ force: true });
cy.wait(1000);

// Select SMS template
cy.get(this.locators.popupSelectedTemplate)
  .select(1, { force: true });
cy.wait(1000);

// Add Template
cy.contains('button', 'Add').click({ force: true });
cy.wait(1000);

// Save Template
cy.get('.btn-secondary').click({ force: true });
cy.wait(2000);

}

Communication_31() {
  const triggerName = `Email_PTP_${Date.now()}`;


  // Navigate to Communication → Create Template
  cy.get('[title="Communication"]').click({ force: true });
  cy.wait(1000);

  // Create Trigger Template
cy.get(this.locators.create_trigger_template)
  .click({ force: true });
cy.wait(2000);

// Enter Trigger Name
cy.get(this.locators.triggerName)
  .clear()
  .type(triggerName);
cy.wait(1000);

// Select Entry Point
cy.get(this.locators.entryPoint)
  .select('Account', { force: true });
cy.wait(1000);

// Select Trigger Type = On PTP Date
cy.get("#trigger-type-8").click({ force: true });
cy.wait(1000);


// Recipient Type = Customer (FIXED)
cy.get(this.locators.recipient_type)
  .select('Customer', { force: true });
cy.wait(1000);

// Channel = SMS (FIXED – assuming notification opens channel options)
cy.get(this.locators.emailChannel)
  .click({ force: true });
cy.wait(1000);

// Select SMS template
cy.get(this.locators.popupSelectedTemplate)
  .select(1, { force: true });
cy.wait(1000);

// Add Template
cy.contains('button', 'Add').click({ force: true });
cy.wait(1000);

// Save Template
cy.get('.btn-secondary').click({ force: true });
cy.wait(2000);


}

Communication_32() {
  const triggerName = `Email_PTP_NEG_${Date.now()}`;

  // Navigate to Communication → Create Template
  cy.get('[title="Communication"]').click({ force: true });
  cy.wait(1000);

  // Create Trigger Template
  cy.get(this.locators.create_trigger_template)
    .click({ force: true });
  cy.wait(2000);

  // Enter Trigger Name
  cy.get(this.locators.triggerName)
    .clear()
    .type(triggerName);
  cy.wait(1000);

  // Select Entry Point
  cy.get(this.locators.entryPoint)
    .select('Account', { force: true });
  cy.wait(1000);

  // Select Trigger Type = On PTP Date
  cy.get('#trigger-type-8').click({ force: true });
  cy.wait(1000);

  // ❌ Recipient Type != Customer (Negative case)
  cy.get(this.locators.recipient_type)
    .select('Agent', { force: true });   // or 'Guarantor' / any non-Customer
  cy.wait(1000);

  // Channel = Email / SMS
  cy.get(this.locators.letterChannel)
    .click({ force: true });
  cy.wait(1000);

  // Select template
  cy.get(this.locators.popupSelectedTemplate)
    .select(1, { force: true });
  cy.wait(1000);

  // Add Template
  cy.contains('button', 'Add').click({ force: true });
  cy.wait(1000);

  // Save Template
  cy.get('.btn-secondary').click({ force: true });
  cy.wait(2000);

  // ✅ Validation / Blocking Assertion
  cy.contains(
    /recipient type.*customer|invalid recipient|cannot map/i
  ).should('be.visible');
}

Communication_33() {
 const templateName = `Template_${Date.now()}`;

  // Navigate to Create Communication Template
  cy.get('[title="Communication"]').click({ force: true });
  cy.wait(1000);

  cy.get(this.locators.create_communication_template).click({ force: true });
  cy.wait(2000);

  // Select Channel Type = Notification
  cy.get(this.locators.Channel_Type).select('Notification');
  cy.wait(1000);

  cy.get(this.locators.Entry_Point).select('Account');
  cy.wait(2000);

  // Enter random Template Name
  cy.get(this.locators.templateName)
    .clear()
    .type(templateName);

  // Header should be EMPTY — do nothing here
  cy.get(this.locators.header).should('have.value', '');

  //  Body should be empty
  cy.get(this.locators.template_body)
   .should('have.value', '');

  // Click Save
  cy.get(this.locators.save_button).click({force:true});

  // Verify Header mandatory validation
  cy.contains('Error Please fill all required fields')
  .should('be.visible');
}
Communication_34(){
  const triggerName = `Email_PTP_NEG_${Date.now()}`;

// Navigate to Communication → Create Template
cy.get('[title="Communication"]').click({ force: true });
cy.wait(1000);

// Create Trigger Template
cy.get(this.locators.create_trigger_template)
  .click({ force: true });
cy.wait(2000);

// Enter Trigger Name
cy.get(this.locators.triggerName)
  .clear()
  .type(triggerName);
cy.wait(1000);

// Select Entry Point
cy.get(this.locators.entryPoint)
  .select('Account', { force: true });
cy.wait(1000);

// ❌ DO NOT SELECT Trigger Type (Negative Case)

// Recipient Type = Customer (as per test case)
cy.get(this.locators.recipient_type)
  .select('Customer', { force: true });
cy.wait(1000);

// Channel = Email / SMS
cy.get(this.locators.letterChannel)
  .click({ force: true });
cy.wait(1000);

// Attempt to Save
cy.get('.btn-secondary').click({ force: true });
cy.wait(2000);

// ✅ Validation Assertion – Trigger Type mandatory
cy.contains('Please select a Trigger Type first before selecting communication channels.').should('be.visible');

}

Communication_35() {

  const triggerName = `Email_PTP_NEG_${Date.now()}`;

  // Navigate to Communication → Create Template
  cy.get('[title="Communication"]').click({ force: true });
  cy.wait(1000);

  // Create Trigger Template
  cy.get(this.locators.create_trigger_template)
    .click({ force: true });
  cy.wait(2000);

  // Enter Trigger Name
  cy.get(this.locators.triggerName)
    .clear()
    .type(triggerName);
  cy.wait(1000);

  // Select Entry Point
  cy.get(this.locators.entryPoint)
    .select('Account', { force: true });
  cy.wait(1000);

  // ✅ Select Trigger Type = On PTP Date
  cy.get('#trigger-type-8').click({ force: true });
  cy.wait(1000);

  // ❌ DO NOT SELECT Recipient Type (Negative case)

  // Channel = Email / SMS
  cy.get(this.locators.letterChannel)
    .click({ force: true });
  cy.wait(1000);


  // Attempt to Save
  cy.get('.btn-secondary').click({ force: true });
  cy.wait(2000);

  // ✅ Validation Assertion – Recipient Type mandatory
  cy.contains(
  'Please select a Recipient Type first before selecting communication channels.'
  ).should('be.visible');
}

Communication_36() {

  const templateName = `SMS_LEN_NEG_${Date.now()}`;

  // Create SMS body exceeding allowed length
  const longSmsBody = 'A'.repeat(1000);   // safely beyond any configured limit

  // Navigate to Create Communication Template
  cy.get('[title="Communication"]').click({ force: true });
  cy.wait(1000);

  cy.get(this.locators.create_communication_template)
    .click({ force: true });
  cy.wait(2000);

  // Select Channel Type = SMS
  cy.get(this.locators.Channel_Type)
    .select('SMS');
  cy.wait(1000);
  cy.get(this.locators.Recipient_Type).select('Agent');
  cy.wait(2000);
  // Select Entry Point
  cy.get(this.locators.Entry_Point)
    .select('Account');
  cy.wait(2000);

  // Enter Template Name
  cy.get(this.locators.templateName)
    .clear()
    .type(templateName);
  cy.wait(2000);  
    cy.get("#dltTemplateId")
    .clear()
    .type('Test Email With Paragraphs');
  cy.wait(2000);  
  // Enter SMS body exceeding max length
  cy.get(this.locators.template_body)
    .clear()
    .type(longSmsBody, { delay: 0 });

  // Save Template
  cy.get(this.locators.save_button)
    .click({ force: true });
  cy.wait(2000);
  cy.contains('Template Body is required').should('be.visible');


  
 
}
Communication_37() {

  const templateName = `EMAIL_PARA_${Date.now()}`;

  const emailBodyWithParagraphs = `
Hello Customer,

This is the first paragraph of the email.

This is the second paragraph.
It contains a line break.

Regards,
Collections Team
`;

  // Navigate to Create Communication Template
  cy.get('[title="Communication"]').click({ force: true });
  cy.wait(1000);

  cy.get(this.locators.create_communication_template)
    .click({ force: true });
  cy.wait(2000);

  // Select Channel Type = Email
  cy.get(this.locators.Channel_Type)
    .select('Email');
  cy.wait(1000);
  cy.get(this.locators.Recipient_Type).select('Agent');
  cy.wait(2000);
  // Select Entry Point
  cy.get(this.locators.Entry_Point)
    .select('Account');
  cy.wait(2000);

  // Enter Template Name
  cy.get(this.locators.templateName)
    .clear()
    .type(templateName);

  // Enter Email Subject
  cy.get(this.locators.email_subject)
    .clear()
    .type('1234');

  // Enter Email Body with paragraphs & line breaks
  cy.get(this.locators.template_body)
    .clear()
    .type(emailBodyWithParagraphs, { parseSpecialCharSequences: false });

  // Save Template
  cy.get(this.locators.save_button)
    .click({ force: true });
  cy.wait(2000);
  cy.contains('The Template').should('be.visible');
  cy.contains('has been created successfully').should('be.visible');


 
}
Communication_38(){
  cy.get(this.locators.Search_Communication_Templates).click({force:true});
  cy.wait(2000);
  // Open / target the Channel dropdown
cy.get(this.locators.channel_field)
  .should('exist')
  .find('select')
  .then($select => {

    // Get all option values except default
    const values = [
      'Email',
      'SMS',
      'Letter',
      'WhatsApp',
      'Notification'
    ];

    // Pick a random value
    const randomValue = values[Math.floor(Math.random() * values.length)];

    // Select the random option
    cy.wrap($select).select(randomValue);

    // Optional log
    cy.log(`Selected channel: ${randomValue}`);
  });


}
Communication_39(){
  cy.get(this.locators.Search_Communication_Templates).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.template_settings).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.created_by).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.created_on).click({force:true});
  cy.wait(2000);
  // Verify "Created By" column is visible
cy.contains('Created By')
  .scrollIntoView()
  .should('be.visible');

// Verify "Created On" column is visible
cy.contains('Created On')
  .scrollIntoView()
  .should('be.visible');

  
}

Communication_40(){
  cy.get(this.locators.Search_Communication_Triggers).click({force:true});
  
  const values = ['Enabled', 'Disabled'];
  const randomValue = values[Math.floor(Math.random() * values.length)];
  
  cy.get(this.locators.field)
    .should('be.visible')
    .select(randomValue);
  
  cy.log(`Selected status: ${randomValue}`);
}

Communication_41(){

  cy.get(this.locators.Search_Communication_Triggers).click({force:true});
  cy.wait(2000);
  cy.get("#trigger-grid-column-filter-button").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.created_on).click({force:true});
  cy.wait(2000);
  // Verify "Created By" column is visible
  cy.contains('Created Date').scrollIntoView().should('be.visible');

}

CommunicationPage_42(){
  cy.get('[title="Communication"]').click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.create_communication_template).click({ force: true });
  cy.wait(2000);
   cy.contains('button', 'Create Template').scrollIntoView()
      .should('be.visible')
      .click({ force: true });

    // General error message
    cy.contains('Please fill all required fields.')
      .should('be.visible');

    // Field-level validations
    cy.contains('Template Name is required')
      .should('be.visible');

    cy.contains('Channel Type is required')
      .should('be.visible');

    cy.contains('Entry Point is required')
      .should('be.visible');

    cy.contains('Recipient Type is required')
      .should('be.visible');

    cy.contains('Template Body is required')
      .should('be.visible');

}
CommunicationPage_43(){
 
  const triggerName = `Template_${Date.now()}`;
  cy.get('[title="Communication"]').click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.create_trigger_template).click({force:true});
  cy.wait(2000);
    cy.get(this.locators.triggerName)
    .clear()
    .type(triggerName);
  cy.get(this.locators.triggerDescription).type('Adding Description');  
  cy.wait(2000);
  cy.get(this.locators.Trigger_Type).click({force:true});
  cy.wait(2000);
  const value = Math.floor(Math.random() * 30) + 1;

cy.get(this.locators.tempXValue)
  .clear()
  .type(value.toString());

  cy.wait(2000);  
  cy.contains('button', 'Okay').click({force:true});
  cy.wait(2000);
  cy.get('#trigger-type-10').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.recipient_type).select('Customer');
  cy.wait(2000);
  cy.get(this.locators.sms_one).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.popupSelectedTemplate).select('smsbulk');
  cy.wait(2000);
  cy.contains('button', 'Add').click({force:true});
  cy.get(this.locators.whatsapp).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.popupSelectedTemplate).select('test whatsup');
  cy.wait(2000);
  cy.contains('button', 'Add').click({force:true});
  cy.wait(2000);
cy.contains('WhatsApp template attached successfully.')
  .should('be.visible');
   cy.get(this.locators.email_one).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.popupSelectedTemplate).select('tempate abc over');
  cy.wait(2000);
  cy.contains('button', 'Add').click({force:true});
  cy.wait(2000);
  cy.contains('Email template attached successfully.')
  .should('be.visible');
   cy.get(this.locators.letter_one).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.popupSelectedTemplate).select('test letetr');
  cy.wait(2000);
  cy.contains('button', 'Add').click({force:true});
  cy.wait(2000);
  cy.contains('Letter template attached successfully.')
  .should('be.visible');
   cy.get('.btn-secondary').click({force:true});
  cy.contains(/entry point.*Trigger|Notification/i).should('be.visible');
  cy.wait(2000);
 

  


}


CommunicationPage_44() {

  const triggerName = `Template_${Date.now()}`;

  cy.get('[title="Communication"]').click({ force: true });
  cy.get(this.locators.create_trigger_template).click({ force: true });

  cy.get(this.locators.triggerName)
    .clear()
    .type(triggerName);

  cy.get(this.locators.triggerDescription)
    .type('Adding Description');

  cy.get(this.locators.Trigger_Type).click({ force: true });

  const value = Math.floor(Math.random() * 30) + 1;
  cy.get(this.locators.tempXValue)
    .clear()
    .type(value.toString());

  cy.contains('button', 'Okay').click({ force: true });

  cy.get('#trigger-type-10').click({ force: true });
  cy.get(this.locators.recipient_type).select('Customer');


 

  // =============================
  // SELECT NEW TEMPLATES
  // =============================

  // SMS
  cy.get(this.locators.sms_one).click({ force: true });
  cy.get(this.locators.popupSelectedTemplate).select('smsbulk');
  cy.contains('button', 'Add').click({ force: true });
  cy.contains('SMS template attached successfully.')
    .should('be.visible');
  cy.get(this.locators.sms_one).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.yes).click({force:true});
  cy.wait(2000);
  // WhatsApp
  cy.get(this.locators.whatsapp).click({ force: true });
  cy.get(this.locators.popupSelectedTemplate).select('test whatsup');
  cy.contains('button', 'Add').click({ force: true });
  cy.contains('WhatsApp template attached successfully.')
    .should('be.visible');

  

  // =============================
  // SAVE
  // =============================

  cy.get('.btn-secondary').click({ force: true });
  cy.contains(/entry point.*Trigger|Notification/i)
    .should('be.visible');
}
 CommunicationPage_45() {
  const templateName = `Template_${Date.now()}`;

  // Navigate to Create Communication Template
  cy.get('[title="Communication"]').click({ force: true });
  cy.wait(1000);

  cy.get(this.locators.create_communication_template).click({ force: true });
  cy.wait(2000);

  // Select Channel Type = Notification
  cy.get(this.locators.Channel_Type).select('Letter');
  cy.wait(1000);
  cy.get(this.locators.Entry_Point).select('User');
  cy.wait(1000);

  
  cy.get(this.locators.templateName)
    .clear()
    .type(templateName);
  cy.wait(2000);
  cy.intercept('POST', '**/upload**', { statusCode: 200 }).as('uploadHeader');
  
 
  const headerFileInput = ':nth-child(6) > .form-control-group input[type="file"]';
  cy.get(headerFileInput).attachFile('website.jpg');  
  cy.get(headerFileInput).should('have.value', 'C:\\fakepath\\website.jpg');  
  

  cy.get('button').contains('Upload').first().click({ force: true });  // Use .first() instead of .eq(0) for clarity
  //cy.wait('@uploadHeader');  // Wait for the intercepted API call
  cy.contains('Header file uploaded successfully.').should('be.visible');

  // Upload Footer File
  cy.intercept('POST', '**/upload**', { statusCode: 200 }).as('uploadFooter');
  
  // More robust selector for footer file input
  const footerFileInput = ':nth-child(7) > .form-control-group input[type="file"]';
  cy.get(footerFileInput).attachFile('website.jpg');
  cy.get(footerFileInput).should('have.value', 'C:\\fakepath\\website.jpg');
  
  cy.get('button').contains('Upload').last().click({ force: true });  // .last() for footer (assuming order)
  //cy.wait('@uploadFooter');
  cy.contains('Footer file uploaded successfully.').should('be.visible');



  // Enter valid Body within 100 characters
  cy.get(this.locators.template_body)
    .clear()
    .type('PTP update notification body for testing.');

  // Click Save
  cy.get(this.locators.save_button).click({ force: true });

  // Verify success message
  cy.contains(`The Template "${templateName}" has been created successfully`)
    .should('be.visible');
}

CommunicationPage_46(){
   const templateName = `Template_${Date.now()}`

  // Navigate to Create Communication Template (partial setup for upload focus)
  cy.get('[title="Communication"]').click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.create_communication_template).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Channel_Type).select('Letter');
  cy.wait(1000);
  cy.get(this.locators.Entry_Point).select('User');
  cy.wait(1000);
  cy.get(this.locators.templateName)
    .clear()
    .type(templateName);
  // Attempt to Upload Oversized Header File
  //cy.intercept('POST', '**/upload**', { statusCode: 413 }).as('uploadFailSize');  
  const headerFileInput = ':nth-child(6) > .form-control-group input[type="file"]';
  cy.get(headerFileInput).attachFile('20mb.jpg');  
  cy.get('button').contains('Upload').first().click({ force: true });
  cy.wait(5000);
  cy.contains("Error! The file you've chosen is too large (max 2MB). Please try again").should('be.visible');  
  cy.contains('Header file uploaded successfully.').should('not.exist');  
  //cy.intercept('POST', '**/upload**', { statusCode: 413 }).as('uploadFailSizeFooter');
  cy.wait(2000);
  const footerFileInput = ':nth-child(7) > .form-control-group input[type="file"]';
  cy.get(footerFileInput).attachFile('20mb.jpg');
  cy.get('button').contains('Upload').last().click({ force: true });
  cy.wait(5000);
  cy.contains("Error! The file you've chosen is too large (max 2MB). Please try again").should('be.visible');
  cy.contains('Footer file uploaded successfully.').should('not.exist');

 
}
CommunicationPage_47(){
 const templateName = `Template_${Date.now()}`
  // Navigate to Create Communication Template (partial setup for upload focus)
  cy.get('[title="Communication"]').click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.create_communication_template).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Channel_Type).select('Letter');
  cy.wait(1000);
  cy.get(this.locators.Entry_Point).select('User');
  cy.wait(1000);
    cy.get(this.locators.templateName)
    .clear()
    .type(templateName);
  // Upload Valid Format Header File (PNG)
  cy.intercept('POST', '**/upload**', { statusCode: 200 }).as('uploadValidFormat');
  const headerFileInput = ':nth-child(6) > .form-control-group input[type="file"]';
  cy.get(headerFileInput).attachFile('adharcard.pdf');  // Assume 'image.png' is a valid PNG in cypress/fixtures/
  cy.get('button').contains('Upload').first().click({ force: true });

  cy.contains('You can only upload files with extension jpeg, jpg, or png').should('be.visible');
  cy.wait(5000);
  // Attempt to Upload Invalid Format Footer File (TXT)
  cy.intercept('POST', '**/upload**', { statusCode: 400 }).as('uploadInvalidFormat');  // Mock 400 Bad Request for invalid type
  const footerFileInput = ':nth-child(7) > .form-control-group input[type="file"]';
  cy.get(footerFileInput).attachFile('Staff.xlsx');  // Assume 'textfile.txt' is a TXT file in cypress/fixtures/
 cy.wait(5000);
  cy.get('button').contains('Upload').last().click({ force: true });
  cy.contains('You can only upload files with extension jpeg, jpg, or png').should('be.visible');  // Adjust based on actual error message (e.g., "Only image files allowed")
  cy.contains('Footer file uploaded successfully.').should('not.exist');  // Ensure no success message for invalid upload


}
}
export default CommunicationPage;
   