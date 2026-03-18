import { getLocators } from '../utils/locatorUtils';
import { getBaseUrl } from '../utils/configUtils';
import 'cypress-wait-until';
const { faker } = require('@faker-js/faker');

class CommunicationPage {
  constructor(locators) {
    this.locators = locators;
  }

  communicationModule() {
    cy.wait(5000);
    cy.get(this.locators.clickoncommunication).click();
  }

  dashboardModule() {
    cy.wait(1000);
    cy.get(this.locators.dashboard).click();
  }

  Communication152() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
   cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.entryPoint).select('Collection');
    cy.wait(2000);
    cy.get(this.locators.channelType).select('Email');
    cy.wait(2000);
    cy.get(this.locators.recipientType).select('Agent');
    cy.wait(2000);
    cy.get(this.locators.subjectline).type(subjectline);
    cy.wait(1000);
    cy.get(this.locators.templatebody).type("Please create one Email Communication template");
    cy.wait(1000);
    cy.get(this.locators.createtemplate).click();
    cy.wait(1000);
    cy.get('.toast-message').contains('created successfully').should('be.visible')
    cy.wait(1000);
  }

  Communication153() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.entryPoint).select('Collection');
    cy.wait(2000);
    cy.get(this.locators.channelType).select('Email');
    cy.wait(2000);
     cy.get(this.locators.recipientType).select('Agent');
    cy.wait(2000);
    cy.get(this.locators.allowaccessno).click();
    cy.wait(1000);
    cy.get(this.locators.subjectline).type(subjectline);
    cy.wait(1000);
    cy.get(this.locators.templatebody).type("Please create one Email Communication template");
    cy.wait(1000);
    cy.get(this.locators.createtemplate).click();
    cy.wait(1000);
    cy.get('.toast-message').contains('created successfully').should('be.visible')
    cy.wait(1000);
  }

  Communication154() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
   cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.entryPoint).select('Collection');
    cy.wait(2000);
    cy.get(this.locators.channelType).select('Email');
    cy.wait(2000);
    cy.get(this.locators.recipientType).select('Agent');
    cy.wait(2000);
    cy.get(this.locators.subjectline).type(subjectline);
    cy.wait(1000);
    cy.get(this.locators.templatebody).type("Please create one Email Communication template");
    cy.wait(1000);
    cy.get('[title="Add Var"]').click();
    cy.wait(1000);
    cy.get(this.locators.clickonvar).click();
    cy.wait(2000);
    cy.get(this.locators.clickondropdown).click();
    cy.wait(1000);
    cy.get('div[role="listbox"] .ng-option').then($options => {
      const count = $options.length;
      const randomIndex = Math.floor(Math.random() * count);
      cy.wrap($options[randomIndex]).click();
    });
    cy.get(this.locators.clickonmap).click();
    cy.wait(1000);
    cy.get(this.locators.createtemplate).click();
    cy.wait(1000);
    cy.get('.toast-message').contains('created successfully.').should('be.visible')
    cy.wait(1000);
  }

  Communication155() {
    cy.wait(5000);
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    //const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
   cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.entryPoint).select('Collection');
    cy.wait(2000);
    cy.get(this.locators.channelType).select('SMS');
    cy.wait(2000);
    cy.get(this.locators.recipientType).select('Agent');
    cy.wait(2000);
    cy.get(this.locators.Template_ID).type(Math.random().toString(36).substring(2,5));
    cy.wait(2000);
    cy.get('[title="Add Var"]').click();
    cy.wait(2000);
    cy.get('app-template-variable-mapping > .template-variable-mapping > span').click();
    cy.wait(2000);
cy.get('.ng-select-container input')
  .should('be.visible')
  .focus()
  .type(' ');
cy.get('.ng-dropdown-panel-items .ng-option')
  .should('be.visible')
  .should('have.length.greaterThan', 0)
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length);
    cy.wrap($options.eq(randomIndex)).click();
  });

    cy.wait(2000);
    cy.get(this.locators.clickonmap).click({force:true});
    cy.wait(1000);
    cy.get(this.locators.createtemplate).click();
    cy.wait(1000);
    cy.get('.toast-message').contains('created successfully.').should('be.visible')
    cy.wait(1000);
  }

  Communication156() {
   const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.entryPoint).select('Collection');
    cy.wait(2000);
    cy.get(this.locators.channelType).select('SMS');
    cy.wait(2000);
     cy.get(this.locators.recipientType).select('Agent');
    cy.wait(2000);
    cy.get(this.locators.allowaccessno).click();
    cy.wait(1000);
    cy.get(this.locators.subjectline).type(subjectline);
    cy.wait(1000);
    cy.get(this.locators.templatebody).type("Please create one Email Communication template");
    cy.wait(1000);
    cy.get(this.locators.createtemplate).click();
    cy.wait(1000);
    cy.get('.toast-message').contains('created successfully').should('be.visible')
    cy.wait(1000);
  }

  CreateCommunicationTask180() {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const randomname = "Template_" + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template_" + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.selectsms).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.subjectline).type(subjectline);
    cy.wait(1000);
    cy.get(this.locators.templatebody).type("Please create one Email Communication template");
    cy.wait(1000);
    cy.get(this.locators.addvariable).click();
    cy.wait(1000);
    cy.get(this.locators.addvar).click();
    cy.wait(1000);
    cy.get(this.locators.clickondropdown).click();
    cy.wait(1000);
    cy.get('div[role="listbox"] .ng-option').then($options => {
      const count = $options.length;
      const randomIndex = Math.floor(Math.random() * count);
      cy.wrap($options[randomIndex]).click();
    });
    cy.get(this.locators.clickonmap).click();
    cy.wait(1000);
    cy.get(this.locators.createtemplate).click();
    cy.wait(1000);
    cy.get('.toast-message').contains('created successfully.').should('be.visible')
    cy.wait(1000);
  }

  SearchCommunicationTask187() {
    cy.get(this.locators.search_communication_task).click();
    cy.wait(1000);
    cy.get(this.locators.searchcommunication_template).click();
    cy.wait(1000);
    cy.get('#tempType').select('SMS');
    cy.wait(1000);
    cy.get(this.locators.search).click();
    cy.wait(1000);
    cy.get(this.locators.delete_button).click();
    cy.wait(1000);
    cy.get('#confirm-dialog-okay').click();
    cy.wait(1000);
    cy.contains("Success!").should('be.visible');
    cy.wait(1000);
  }

  Communication157() {
     const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.entryPoint).select('Collection');
    cy.wait(2000);
    cy.get(this.locators.channelType).select('SMS');
    cy.wait(2000);
    cy.get(this.locators.recipientType).select('Agent');
    cy.wait(2000);
   cy.get(this.locators.Template_ID).type(Math.random().toString(36).substring(2,5));
   cy.wait(2000);
    cy.get('[title="Add Var"]').click();
    cy.wait(2000);
    cy.get('app-template-variable-mapping > .template-variable-mapping > span').click();
    cy.wait(2000);
cy.get('.ng-select-container input')
  .should('be.visible')
  .focus()
  .type(' ');
cy.get('.ng-dropdown-panel-items .ng-option')
  .should('be.visible')
  .should('have.length.greaterThan', 0)
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length);
    cy.wrap($options.eq(randomIndex)).click();
  });
    cy.wait(2000);
    cy.get(this.locators.clickonmap).click({force:true});
    cy.wait(1000);
    cy.get(this.locators.createtemplate).click();
    cy.wait(1000);
    cy.get('.toast-message').contains('created successfully.').should('be.visible')
    cy.wait(1000);
  }

  Communication158() {
     const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.entryPoint).select('Collection');
    cy.wait(2000);
    cy.get(this.locators.channelType).select('SMS');
    cy.wait(2000);
    cy.get(this.locators.recipientType).select('Agent');
    cy.wait(2000);
   cy.get(this.locators.Template_ID).type(Math.random().toString(36).substring(2,5));
   cy.wait(2000);
    cy.get('[title="Add Var"]').click();
    cy.wait(2000);
    cy.get('app-template-variable-mapping > .template-variable-mapping > span').click();
    cy.wait(2000);
cy.get('.ng-select-container input')
  .should('be.visible')
  .focus()
  .type(' ');
cy.get('.ng-dropdown-panel-items .ng-option')
  .should('be.visible')
  .should('have.length.greaterThan', 0)
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length);
    cy.wrap($options.eq(randomIndex)).click();
  });
    cy.wait(2000);
    cy.get(this.locators.clickonmap).click({force:true});
    cy.wait(1000);
    cy.get('.card-footer > .btn-outline-primary').click();
    cy.wait(1000);
    cy.contains('Search Communication Templates').should('be.visible');

    

  }

  Communication159() {
  
   const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.entryPoint).select('Collection');
    cy.wait(2000);
    cy.get(this.locators.channelType).select('Letter');
    cy.wait(2000);
    cy.get(this.locators.allowaccessno).click();
    cy.wait(1000);
    cy.get(this.locators.subjectline).type(subjectline);
    cy.wait(1000);
    cy.get(this.locators.templatebody).type("Please create one Email Communication template");
    cy.wait(1000);
    cy.get(this.locators.createtemplate).click();
    cy.wait(1000);
    cy.get('.toast-message').contains('created successfully').should('be.visible')
    cy.wait(1000);
  }


  Communication165() {
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.searchcommunicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.selecttemplatetype).select('Email');
    cy.wait(1000);
    cy.get(':nth-child(3) > .form-control').type('2024-12-18')
    cy.wait(1000);
    cy.get(this.locators.searchtemplate).click();
    cy.wait(1000);
    cy.contains('Search Results').should('be.visible');
    cy.wait(200);
  }


  Communication169() {
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.searchcommunicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.selecttemplatetype).select('Email');
    cy.wait(1000);
    cy.get(':nth-child(3) > .form-control').type('2024-12-17')
    cy.wait(1000);
    cy.get(this.locators.searchtemplate).click();
    cy.wait(1000);
    cy.contains('No result found.').should('be.visible');
    cy.wait(1000);
  }

  Communication175() {
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.createcommunicationtemplate).click();
    cy.wait(1000);
    //cy.get(this.locators.clickonEmail).click();
    //cy.wait(1000);
    cy.get(this.locators.createnewtemplate).click();
    cy.wait(1000);
    cy.get('.btn-secondary').click();
    cy.wait(1000);
    const randomName = faker.person.firstName();
    cy.get(this.locators.templatename).type(randomName);
    cy.wait(1000);
    cy.get(':nth-child(4) > .form-control-group > .form-control').type('body');
    cy.wait(1000);
    cy.get('.btn-secondary').click();
    cy.wait(1000);
    cy.contains('Success!').should('be.visible');
    cy.wait(1000);
  }

  Communication176() {
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.createcommunicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.clickonemail).click();
    cy.wait(1000);
    cy.get(this.locators.createnewtemplate).click();
    cy.wait(1000);
    cy.get('.btn-secondary').click();
    cy.wait(1000);
    const randomName = faker.person.firstName();
    const randomlastName = faker.person.lastName();
    const randomsubjectName = faker.lorem.sentence();
    const randombodyName = faker.lorem.paragraph();
    cy.get(this.locators.templatename).type(randomName);
    cy.wait(1000);
    cy.get(':nth-child(4) > .form-control-group > .form-control').type(randomlastName);;
    cy.wait(1000);
    cy.get('#ccm-body').type(randomsubjectName);
    cy.get('#ccm-subject').type(randombodyName);
    cy.get('.btn-secondary').click();
    cy.wait(1000);
    cy.contains('Success!').should('be.visible');
    cy.wait(1000);
  }

  ViewUploadLetterFileStatus216() {
    cy.wait(2000);
    cy.get(this.locators.viewUploadLetterFileStatus).click();
    cy.wait(2000);
    cy.get(this.locators.statusDropDown).select('Failed');
    cy.wait(2000);
    cy.get(this.locators.search_btn).click();
    cy.wait(1000);
    cy.get(this.locators.transactionID).should('be.visible');

  }

  ViewUploadLetterFileStatus217() {
    cy.wait(2000);
    cy.get(this.locators.viewUploadLetterFileStatus).click();
    cy.wait(2000);
    cy.get(this.locators.statusDropDown).select('Uploaded');
    cy.wait(2000);
    cy.get(this.locators.fileName).type('Communication File');
    cy.wait(2000);
    cy.get(this.locators.search_btn).click();
    cy.wait(1000);
    cy.get(this.locators.transactionID).should('be.visible');
    cy.wait(2000);
    cy.get('[role="alert"]').should(
      "contain.text",
      " No results found! "
    )
    cy.get(this.locators.popupmsg).then(($el) => {
      const text = $el.text();
      cy.log(text);

    })

  }

  CreateCommunicationTemplate161() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
   cy.wait(1000);
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.entryPoint).select('Collection');
    cy.wait(2000);
    cy.get(this.locators.channelType).select('Letter');
    cy.wait(2000);
    cy.get('.editor-container').type('New');
    cy.wait(2000);
    cy.get('[title="Add Var"]').click();
    cy.wait(2000);
   cy.get('app-template-variable-mapping > .template-variable-mapping > p > span').click();
    cy.wait(2000);
cy.get('.ng-select-container input')
  .should('be.visible')
  .focus()
  .type(' ');
cy.get('.ng-dropdown-panel-items .ng-option')
  .should('be.visible')
  .should('have.length.greaterThan', 0)
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length);
    cy.wrap($options.eq(randomIndex)).click();
  });
    cy.wait(2000);
    cy.get(this.locators.clickonmap).click({force:true});
    cy.wait(1000);
    cy.get('.card-footer > .btn-outline-primary').click();
    cy.wait(1000);
    cy.contains('Search Communication Templates').should('be.visible');

  }

CreateCommunicationTemplate162() {

  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const randomname = "Template " +
    Array.from({ length: 8 }, () =>
      letters[Math.floor(Math.random() * letters.length)]
    ).join("");

  cy.get(this.locators.communicationtemplate).click();
  cy.get(this.locators.templatename).type(randomname);

  cy.get(this.locators.entryPoint).select('Collection');
  cy.get(this.locators.channelType).select('Email');
  cy.get(this.locators.recipientType).select('Agent');

  // English Subject
  cy.get(this.locators.subjectline).type('New Line');

  // ✅ English Email Body (Rich Text Editor fix)
  cy.get('.editor-container')
    .find('[contenteditable="true"]')
    .should('be.visible')
    .click()
    .type("Please create one Email Communication template", { force: true });

  // ---------- Add Hindi Language ----------
  cy.get(this.locators.selectlanguage).click();
  cy.get(this.locators.clickondropdownlanguage).click();
  cy.contains('Hindi').click();
  cy.get(this.locators.addlanguage).click();
  cy.get(this.locators.selectHindiTemplate).should('be.visible').click();

  // ---------- Random Hindi Data ----------
  const hindiSubjects = [
    "नई पंक्ति",
    "महत्वपूर्ण सूचना",
    "कृपया ध्यान दें",
    "आपका अनुरोध प्राप्त हुआ",
    "नई अपडेट उपलब्ध",
    "ज़रूरी जानकारी",
    "आपके लिए संदेश"
  ];

  const hindiBodies = [
    "कृपया एक ईमेल संचार टेम्पलेट बनाएं",
    "यह एक परीक्षण संदेश है",
    "कृपया जानकारी की पुष्टि करें",
    "आपकी प्रक्रिया शुरू हो गई है",
    "हम जल्द ही आपसे संपर्क करेंगे",
    "धन्यवाद! आपका दिन शुभ हो",
    "कृपया इस ईमेल का उत्तर दें"
  ];

  const randomSubject =
    hindiSubjects[Math.floor(Math.random() * hindiSubjects.length)];

  const randomBody =
    hindiBodies[Math.floor(Math.random() * hindiBodies.length)];

  // Hindi Subject
  cy.get(this.locators.subjectline, { timeout: 10000 })
    .should('be.visible')
    .clear()
    .type(randomSubject);

  // ✅ Hindi Email Body (Rich Text Editor fix)
  cy.get('.editor-container')
    .find('[contenteditable="true"]')
    .should('be.visible')
    .click()
    .type(randomBody, { force: true });

  // Create Template
  cy.get(this.locators.createtemplate).click();

  // Success Toast Validation
  cy.contains('.toast-message', 'created successfully.')
    .should('be.visible');
}

CreateCommunicationTemplate163() {

  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const randomname = "Template " +
    Array.from({ length: 8 }, () =>
      letters[Math.floor(Math.random() * letters.length)]
    ).join("");

  const subjectline = "Template " +
    Array.from({ length: 30 }, () =>
      letters[Math.floor(Math.random() * letters.length)]
    ).join("");

  // Open Communication Template Page
  cy.get(this.locators.communicationtemplate).click();
  cy.get(this.locators.templatename).type(randomname);

  // Required dropdowns
  cy.get(this.locators.entryPoint).select('Collection');
  cy.get(this.locators.channelType).select('Email');
  cy.get(this.locators.recipientType).select('Agent');

  // English Subject
  cy.get(this.locators.subjectline)
    .should('be.visible')
    .type(subjectline);

  // ✅ English Email Body (Same as Hindi - NO iframe)
  cy.get('.editor-container')
    .find('[contenteditable="true"]')
    .should('be.visible')
    .click()
    .type("Please create one Email Communication template", { force: true });

  // ---------- Add Marathi Language ----------
  cy.get(this.locators.selectlanguage).click();
  cy.get(this.locators.clickondropdownlanguage).click();
  cy.contains('Marathi').click();
  cy.get(this.locators.addlanguage).click();

  // Open Marathi template tab
  cy.get(this.locators.selectMarathiTemplate)
    .should('be.visible')
    .click();

  // Marathi sentences
  const marathiSentences = [
    "तुमचं नाव काय आहे",
    "मी पुण्याहून आलो आहे.",
    "ही माहिती बरोबर आहे का",
    "कृपया येथे सही करा",
    "आपण पुढे चालू शकतो",
    "माझं उत्तर पाठवा",
    "तुमचं स्वागत आहे",
    "हे पान वाचून पूर्ण करा",
    "कृपया थोडा वेळ थांबा",
    "आपली विनंती नोंदवली गेली आहे"
  ];

  const marathisentence =
    marathiSentences[Math.floor(Math.random() * marathiSentences.length)];

  // Marathi Subject
  cy.get(this.locators.subjectline)
    .should('be.visible')
    .clear()
    .type(marathisentence);

  // ✅ Marathi Email Body (Same as Hindi - NO iframe)
  cy.get('.editor-container')
    .find('[contenteditable="true"]')
    .should('be.visible')
    .click()
    .type(marathisentence, { force: true });

  // Create Template
  cy.get(this.locators.createtemplate).click();

  // Success Validation
  cy.contains('.toast-message', 'created successfully.')
    .should('be.visible');
}

CreateCommunicationTemplate164() {

  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const randomname = "Template " +
    Array.from({ length: 8 }, () =>
      letters[Math.floor(Math.random() * letters.length)]
    ).join("");

  const subjectline = "Template " +
    Array.from({ length: 30 }, () =>
      letters[Math.floor(Math.random() * letters.length)]
    ).join("");

  // Open Communication Template Page
  cy.get(this.locators.communicationtemplate).click();

  cy.get(this.locators.templatename)
    .should('be.visible')
    .type(randomname);

  // Required dropdowns (Same as previous methods)
  cy.get(this.locators.entryPoint).select('Collection');
  cy.get(this.locators.channelType).select('Email');
  cy.get(this.locators.recipientType).select('Agent');

  // English Subject
  cy.get(this.locators.subjectline)
    .should('be.visible')
    .type(subjectline);

  // ✅ English Email Body (Rich Text Editor FIX)
  cy.get('.editor-container')
    .find('[contenteditable="true"]')
    .should('be.visible')
    .click()
    .type("Please create one Email Communication template", { force: true });

  // ---------- Add Kannada Language ----------
  cy.get(this.locators.selectlanguage).click();
  cy.get(this.locators.clickondropdownlanguage).click();
  cy.contains('Kannada').click();
  cy.get(this.locators.addlanguage).click();

  // Open Kannada template tab
  cy.get(this.locators.selectKannadaTemplate)
    .should('be.visible')
    .click();

  // Kannada sentences
  const kannadaSentences = [
    "ನಿಮ್ಮ ಹೆಸರು ಏನು",
    "ನಾನು ಪುಣೆಯಿಂದ ಬಂದಿದ್ದೇನೆ",
    "ಈ ಮಾಹಿತಿ ಸರಿಯಾಗಿದೆ",
    "ದಯವಿಟ್ಟು ಇಲ್ಲಿ ಸಹಿ ಮಾಡಿ",
    "ನಾವು ಮುಂದುವರಿಯಬಹುದು",
    "ನನ್ನ ಉತ್ತರ ಕಳುಹಿಸಿ",
    "ನಿಮ್ಮ ಸ್ವಾಗತ ಇದೆ",
    "ಈ ಪುಟವನ್ನು ಓದಿ ಪೂರ್ಣಗೊಳಿಸಿ",
    "ದಯವಿಟ್ಟು ಸ್ವಲ್ಪ ಕ್ಷಣ ನಿರೀಕ್ಷಿಸಿ",
    "ನಿಮ್ಮ ವಿನಂತಿಯನ್ನು ದಾಖಲಿಸಲಾಗಿದೆ"
  ];

  const kannadasentence =
    kannadaSentences[Math.floor(Math.random() * kannadaSentences.length)];

  // Kannada Subject
  cy.get(this.locators.subjectline)
    .should('be.visible')
    .clear()
    .type(kannadasentence);

  // ✅ Kannada Email Body (Rich Text Editor FIX)
  cy.get('.editor-container')
    .find('[contenteditable="true"]')
    .should('be.visible')
    .click()
    .type(kannadasentence, { force: true });

  // Create Template
  cy.get(this.locators.createtemplate).click();

  // Success Validation
  cy.contains('.toast-message', 'created successfully.')
    .should('be.visible');
}

 CreateCommunicationTemplate165() {

  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const randomname = "Template " +
    Array.from({ length: 8 }, () =>
      letters[Math.floor(Math.random() * letters.length)]
    ).join("");

  const subjectline = "Template " +
    Array.from({ length: 30 }, () =>
      letters[Math.floor(Math.random() * letters.length)]
    ).join("");

  // Open Communication Template Page
  cy.get(this.locators.communicationtemplate).click();

  cy.get(this.locators.templatename)
    .should('be.visible')
    .type(randomname);

  // Required dropdowns
  cy.get(this.locators.entryPoint).select('Collection');
  cy.get(this.locators.channelType).select('Email');
  cy.get(this.locators.recipientType).select('Agent');

  // English Subject
  cy.get(this.locators.subjectline)
    .should('be.visible')
    .type(subjectline);

  // ✅ English Email Body (Rich Text Editor FIX)
  cy.get('.editor-container')
    .find('[contenteditable="true"]')
    .should('be.visible')
    .click()
    .type("Please create one Email Communication template", { force: true });

  // ---------- Add Malayalam Language ----------
  cy.get(this.locators.selectlanguage).click();
  cy.get(this.locators.clickondropdownlanguage).click();
  cy.contains('Malayalam').click();
  cy.get(this.locators.addlanguage).click();

  // Open Malayalam template tab
  cy.get(this.locators.selectMalayalamTemplate)
    .should('be.visible')
    .click();

  // Malayalam sentences
  const malayalamSentences = [
    "നിന്റെ പേര് എന്താണ്",
    "ഞാൻ പുനെയിൽ നിന്ന് വന്നതാണ്",
    "ഈ വിവരങ്ങൾ ശരിയാണല്ലോ",
    "ദയവായി ഇവിടെ ഒപ്പിടുക",
    "നമുക്ക് തുടരാം",
    "എനിക്ക് ഉത്തരമയക്കൂ",
    "സ്വാഗതം",
    "ഈ പേജ് വായിച്ചു പൂർത്തിയാക്കുക",
    "ദയവായി കുറച്ച് നേരം കാത്തിരിക്കുക",
    "നിന്റെ അഭ്യർത്ഥന രജിസ്റ്റർ ചെയ്തിരിക്കുന്നു"
  ];

  const malayalamsentence =
    malayalamSentences[Math.floor(Math.random() * malayalamSentences.length)];

  // Malayalam Subject
  cy.get(this.locators.subjectline)
    .should('be.visible')
    .clear()
    .type(malayalamsentence);

  // ✅ Malayalam Email Body (Rich Text Editor FIX)
  cy.get('.editor-container')
    .find('[contenteditable="true"]')
    .should('be.visible')
    .click()
    .type(malayalamsentence, { force: true });

  // Create Template
  cy.get(this.locators.createtemplate).click();

  // Success Validation
  cy.contains('.toast-message', 'created successfully.')
    .should('be.visible');
}

 CreateCommunicationTemplate166() {

  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const randomname = "Template " +
    Array.from({ length: 8 }, () =>
      letters[Math.floor(Math.random() * letters.length)]
    ).join("");

  const subjectline = "Template " +
    Array.from({ length: 30 }, () =>
      letters[Math.floor(Math.random() * letters.length)]
    ).join("");

  // Open Communication Template Page
  cy.get(this.locators.communicationtemplate).click();

  cy.get(this.locators.templatename)
    .should('be.visible')
    .type(randomname);

  // Required dropdowns
  cy.get(this.locators.entryPoint).select('Collection');
  cy.get(this.locators.channelType).select('Email');
  cy.get(this.locators.recipientType).select('Agent');

  // English Subject
  cy.get(this.locators.subjectline)
    .should('be.visible')
    .type(subjectline);

  // ✅ English Email Body (Rich Text Editor FIX)
  cy.get('.editor-container')
    .find('[contenteditable="true"]')
    .should('be.visible')
    .click()
    .type("Please create one Email Communication template", { force: true });

  // ---------- Add Tamil Language ----------
  cy.get(this.locators.selectlanguage).click();
  cy.get(this.locators.clickondropdownlanguage).click();
  cy.contains('Tamil').click();
  cy.get(this.locators.addlanguage).click();

  // Open Tamil template tab
  cy.get(this.locators.selectTamilTemplate)
    .should('be.visible')
    .click();

  // Tamil sentences
  const tamilSentences = [
    "உங்கள் பெயர் என்ன",
    "நான் புனேயிலிருந்து வந்தேன்",
    "இந்த தகவல் சரியானதா",
    "தயவுசெய்து இங்கு கையொப்பமிடவும்",
    "நாம் தொடரலாம்",
    "எனது பதிலை அனுப்பு",
    "நீங்கள் வரவேற்கப்படுகிறீர்கள்",
    "இந்த பக்கத்தை வாசித்து முடிக்கவும்",
    "தயவுசெய்து சிறிது நேரம் காத்திருக்கவும்",
    "உங்கள் கோரிக்கை பதிவாகியுள்ளது"
  ];

  const tamilsentence =
    tamilSentences[Math.floor(Math.random() * tamilSentences.length)];

  // Tamil Subject
  cy.get(this.locators.subjectline)
    .should('be.visible')
    .clear()
    .type(tamilsentence);

  // ✅ Tamil Email Body (Rich Text Editor FIX)
  cy.get('.editor-container')
    .find('[contenteditable="true"]')
    .should('be.visible')
    .click()
    .type(tamilsentence, { force: true });

  // Create Template
  cy.get(this.locators.createtemplate).click();

  // Success Validation
  cy.contains('.toast-message', 'created successfully.')
    .should('be.visible');
}
 CreateCommunicationTemplate167() {

  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const randomname = "Template " +
    Array.from({ length: 8 }, () =>
      letters[Math.floor(Math.random() * letters.length)]
    ).join("");

  const subjectline = "Template " +
    Array.from({ length: 30 }, () =>
      letters[Math.floor(Math.random() * letters.length)]
    ).join("");

  // Open Communication Template Page
  cy.get(this.locators.communicationtemplate).click();

  cy.get(this.locators.templatename)
    .should('be.visible')
    .type(randomname);

  // Required dropdowns
  cy.get(this.locators.entryPoint).select('Collection');
  cy.get(this.locators.channelType).select('Email');
  cy.get(this.locators.recipientType).select('Agent');

  // English Subject
  cy.get(this.locators.subjectline)
    .should('be.visible')
    .type(subjectline);

  // ✅ English Email Body (Rich Text Editor FIX)
  cy.get('.editor-container')
    .find('[contenteditable="true"]')
    .should('be.visible')
    .click()
    .type("Please create one Email Communication template", { force: true });

  // ---------- Add Telugu Language ----------
  cy.get(this.locators.selectlanguage).click();
  cy.get(this.locators.clickondropdownlanguage).click();
  cy.contains('Telugu').click();
  cy.get(this.locators.addlanguage).click();

  // Open Telugu template tab
  cy.get(this.locators.selectTeluguTemplate)
    .should('be.visible')
    .click();

  // Telugu sentences
  const teluguSentences = [
    "మీ పేరు ఏమిటి",
    "నేను పుణె నుండి వచ్చాను",
    "ఈ సమాచారం సరైనదేనా",
    "దయచేసి ఇక్కడ సంతకం చేయండి",
    "మనము కొనసాగవచ్చు",
    "నాకు సమాధానం పంపండి",
    "మీకు స్వాగతం",
    "ఈ పేజీ చదివి పూర్తిచేయండి",
    "దయచేసి కొన్ని క్షణాలు వేచివుండండి",
    "మీ అభ్యర్థన నమోదు చేయబడింది"
  ];

  const telugusentence =
    teluguSentences[Math.floor(Math.random() * teluguSentences.length)];

  // Telugu Subject
  cy.get(this.locators.subjectline)
    .should('be.visible')
    .clear()
    .type(telugusentence);

  // ✅ Telugu Email Body (Rich Text Editor FIX)
  cy.get('.editor-container')
    .find('[contenteditable="true"]')
    .should('be.visible')
    .click()
    .type(telugusentence, { force: true });

  // Create Template
  cy.get(this.locators.createtemplate).click();

  // Success Validation
  cy.contains('.toast-message', 'created successfully.')
    .should('be.visible');
}

 CreateCommunicationTemplate168() {

  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const randomname = "Template " +
    Array.from({ length: 8 }, () =>
      letters[Math.floor(Math.random() * letters.length)]
    ).join("");

  // Open Communication Template Page
  cy.get(this.locators.communicationtemplate).click();

  cy.get(this.locators.templatename)
    .should('be.visible')
    .type(randomname);

  // Required dropdowns
  cy.get(this.locators.entryPoint).select('Collection');
  cy.get(this.locators.channelType).select('Email');
  cy.get(this.locators.recipientType).select('Agent');

  // Added Line Here
  cy.get(this.locators.allowaccessno).click();

  // English Subject
  cy.get(this.locators.subjectline)
    .should('be.visible')
    .type('New Line');

  // ✅ English Email Body (Rich Text Editor Fix)
  cy.get('.editor-container')
    .find('[contenteditable="true"]')
    .should('be.visible')
    .click()
    .type("Please create one Email Communication template", { force: true });

  // ---------- Add Hindi Language ----------
  cy.get(this.locators.selectlanguage).click();
  cy.get(this.locators.clickondropdownlanguage).click();
  cy.contains('Hindi').click();
  cy.get(this.locators.addlanguage).click();

  cy.get(this.locators.selectHindiTemplate)
    .should('be.visible')
    .click();

  // Hindi Data
  const hindiSubjects = [
    "नई पंक्ति",
    "महत्वपूर्ण सूचना",
    "कृपया ध्यान दें",
    "आपका अनुरोध प्राप्त हुआ",
    "नई अपडेट उपलब्ध",
    "ज़रूरी जानकारी",
    "आपके लिए संदेश"
  ];

  const hindiBodies = [
    "कृपया एक ईमेल संचार टेम्पलेट बनाएं",
    "यह एक परीक्षण संदेश है",
    "कृपया जानकारी की पुष्टि करें",
    "आपकी प्रक्रिया शुरू हो गई है",
    "हम जल्द ही आपसे संपर्क करेंगे",
    "धन्यवाद! आपका दिन शुभ हो",
    "कृपया इस ईमेल का उत्तर दें"
  ];

  const randomSubject =
    hindiSubjects[Math.floor(Math.random() * hindiSubjects.length)];

  const randomBody =
    hindiBodies[Math.floor(Math.random() * hindiBodies.length)];

  // Hindi Subject
  cy.get(this.locators.subjectline)
    .should('be.visible')
    .clear()
    .type(randomSubject);

  // ✅ Hindi Email Body
  cy.get('.editor-container')
    .find('[contenteditable="true"]')
    .should('be.visible')
    .click()
    .type(randomBody, { force: true });

  // Create Template
  cy.get(this.locators.createtemplate).click();

  // Success Toast Validation
  cy.contains('.toast-message', 'created successfully.')
    .should('be.visible');
}

  CreateCommunicationTemplate169() {

  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const randomname = "Template " +
    Array.from({ length: 8 }, () =>
      letters[Math.floor(Math.random() * letters.length)]
    ).join("");

  const subjectline = "Template " +
    Array.from({ length: 30 }, () =>
      letters[Math.floor(Math.random() * letters.length)]
    ).join("");

  cy.get(this.locators.communicationtemplate).click();

  cy.get(this.locators.templatename)
    .should('be.visible')
    .type(randomname);

  // Required dropdowns
  cy.get(this.locators.entryPoint).select('Collection');
  cy.get(this.locators.channelType).select('Email');
  cy.get(this.locators.recipientType).select('Agent');

  // ✅ Added here
  cy.get(this.locators.allowaccessno).click();

  // English Subject
  cy.get(this.locators.subjectline)
    .should('be.visible')
    .type(subjectline);

  // English Email Body
  cy.get('.editor-container')
    .find('[contenteditable="true"]')
    .should('be.visible')
    .click()
    .type("Please create one Email Communication template", { force: true });

  // ---------- Add Marathi Language ----------
  cy.get(this.locators.selectlanguage).click();
  cy.get(this.locators.clickondropdownlanguage).click();
  cy.contains('Marathi').click();
  cy.get(this.locators.addlanguage).click();

  cy.get(this.locators.selectMarathiTemplate)
    .should('be.visible')
    .click();

  const marathiSentences = [
    "तुमचं नाव काय आहे",
    "मी पुण्याहून आलो आहे",
    "ही माहिती बरोबर आहे का",
    "कृपया येथे सही करा",
    "आपण पुढे चालू शकतो",
    "माझं उत्तर पाठवा",
    "तुमचं स्वागत आहे",
    "हे पान वाचून पूर्ण करा",
    "कृपया थोडा वेळ थांबा",
    "आपली विनंती नोंदवली गेली आहे"
  ];

  const marathisentence =
    marathiSentences[Math.floor(Math.random() * marathiSentences.length)];

  cy.get(this.locators.subjectline)
    .clear()
    .type(marathisentence);

  cy.get('.editor-container')
    .find('[contenteditable="true"]')
    .click()
    .type(marathisentence, { force: true });

  cy.get(this.locators.createtemplate).click();

  cy.contains('.toast-message', 'created successfully.')
    .should('be.visible');
}

  CreateCommunicationTemplate170() {

  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const randomname = "Template " +
    Array.from({ length: 8 }, () =>
      letters[Math.floor(Math.random() * letters.length)]
    ).join("");

  const subjectline = "Template " +
    Array.from({ length: 30 }, () =>
      letters[Math.floor(Math.random() * letters.length)]
    ).join("");

  // Open Communication Template Page
  cy.get(this.locators.communicationtemplate).click();

  cy.get(this.locators.templatename)
    .should('be.visible')
    .type(randomname);

  // Required dropdowns
  cy.get(this.locators.entryPoint).select('Collection');
  cy.get(this.locators.channelType).select('Email');
  cy.get(this.locators.recipientType).select('Agent');

  // ✅ Allow Access = No
  cy.get(this.locators.allowaccessno).click();

  // English Subject
  cy.get(this.locators.subjectline)
    .should('be.visible')
    .type(subjectline);

  // English Email Body
  cy.get('.editor-container')
    .find('[contenteditable="true"]')
    .should('be.visible')
    .click()
    .type("Please create one Email Communication template", { force: true });

  // ---------- Add Kannada Language ----------
  cy.get(this.locators.selectlanguage).click();
  cy.get(this.locators.clickondropdownlanguage).click();
  cy.contains('Kannada').click();
  cy.get(this.locators.addlanguage).click();

  cy.get(this.locators.selectKannadaTemplate)
    .should('be.visible')
    .click();

  const kannadaSentences = [
    "ನಿಮ್ಮ ಹೆಸರು ಏನು",
    "ನಾನು ಪುಣೆಯಿಂದ ಬಂದಿದ್ದೇನೆ",
    "ಈ ಮಾಹಿತಿ ಸರಿಯಾಗಿದೆ",
    "ದಯವಿಟ್ಟು ಇಲ್ಲಿ ಸಹಿ ಮಾಡಿ",
    "ನಾವು ಮುಂದುವರಿಯಬಹುದು",
    "ನನ್ನ ಉತ್ತರ ಕಳುಹಿಸಿ",
    "ನಿಮ್ಮ ಸ್ವಾಗತ ಇದೆ",
    "ಈ ಪುಟವನ್ನು ಓದಿ ಪೂರ್ಣಗೊಳಿಸಿ",
    "ದಯವಿಟ್ಟು ಸ್ವಲ್ಪ ಕ್ಷಣ ನಿರೀಕ್ಷಿಸಿ",
    "ನಿಮ್ಮ ವಿನಂತಿಯನ್ನು ದಾಖಲಿಸಲಾಗಿದೆ"
  ];

  const kannadasentence =
    kannadaSentences[Math.floor(Math.random() * kannadaSentences.length)];

  // Kannada Subject
  cy.get(this.locators.subjectline)
    .clear()
    .type(kannadasentence);

  // Kannada Email Body
  cy.get('.editor-container')
    .find('[contenteditable="true"]')
    .click()
    .type(kannadasentence, { force: true });

  // Create Template
  cy.get(this.locators.createtemplate).click();

  // Success Validation
  cy.contains('.toast-message', 'created successfully.')
    .should('be.visible');
}

 CreateCommunicationTemplate171() {

  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const randomname = "Template " +
    Array.from({ length: 8 }, () =>
      letters[Math.floor(Math.random() * letters.length)]
    ).join("");

  const subjectline = "Template " +
    Array.from({ length: 30 }, () =>
      letters[Math.floor(Math.random() * letters.length)]
    ).join("");

  // Open Communication Template Page
  cy.get(this.locators.communicationtemplate).click();

  cy.get(this.locators.templatename)
    .should('be.visible')
    .type(randomname);

  // Required dropdowns
  cy.get(this.locators.entryPoint).select('Collection');
  cy.get(this.locators.channelType).select('Email');
  cy.get(this.locators.recipientType).select('Agent');

  // Allow Access = No
  cy.get(this.locators.allowaccessno).click();

  // English Subject
  cy.get(this.locators.subjectline)
    .should('be.visible')
    .type(subjectline);

  // English Email Body
  cy.get('.editor-container')
    .find('[contenteditable="true"]')
    .should('be.visible')
    .click()
    .type("Please create one Email Communication template", { force: true });

  // ---------- Add Malayalam Language ----------
  cy.get(this.locators.selectlanguage).click();
  cy.get(this.locators.clickondropdownlanguage).click();
  cy.contains('Malayalam').click();
  cy.get(this.locators.addlanguage).click();

  cy.get(this.locators.selectMalayalamTemplate)
    .should('be.visible')
    .click();

  const malayalamSentences = [
    "നിന്റെ പേര് എന്താണ്",
    "ഞാൻ പുനെയിൽ നിന്ന് വന്നതാണ്",
    "ഈ വിവരങ്ങൾ ശരിയാണല്ലോ",
    "ദയവായി ഇവിടെ ഒപ്പിടുക",
    "നമുക്ക് തുടരാം",
    "എനിക്ക് ഉത്തരമയക്കൂ",
    "സ്വാഗതം",
    "ഈ പേജ് വായിച്ചു പൂർത്തിയാക്കുക",
    "ദയവായി കുറച്ച് നേരം കാത്തിരിക്കുക",
    "നിന്റെ അഭ്യർത്ഥന രജിസ്റ്റർ ചെയ്തിരിക്കുന്നു"
  ];

  const malayalamsentence =
    malayalamSentences[Math.floor(Math.random() * malayalamSentences.length)];

  // Malayalam Subject
  cy.get(this.locators.subjectline)
    .clear()
    .type(malayalamsentence);

  // Malayalam Email Body
  cy.get('.editor-container')
    .find('[contenteditable="true"]')
    .click()
    .type(malayalamsentence, { force: true });

  // Create Template
  cy.get(this.locators.createtemplate).click();

  // Success Validation
  cy.contains('.toast-message', 'created successfully.')
    .should('be.visible');
}
 CreateCommunicationTemplate172() {

  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const randomname = "Template " +
    Array.from({ length: 8 }, () =>
      letters[Math.floor(Math.random() * letters.length)]
    ).join("");

  const subjectline = "Template " +
    Array.from({ length: 30 }, () =>
      letters[Math.floor(Math.random() * letters.length)]
    ).join("");

  // Open Communication Template Page
  cy.get(this.locators.communicationtemplate).click();

  cy.get(this.locators.templatename)
    .should('be.visible')
    .type(randomname);

  // Required dropdowns
  cy.get(this.locators.entryPoint).select('Collection');
  cy.get(this.locators.channelType).select('Email');
  cy.get(this.locators.recipientType).select('Agent');

  // Allow Access = No
  cy.get(this.locators.allowaccessno).click();

  // English Subject
  cy.get(this.locators.subjectline)
    .should('be.visible')
    .type(subjectline);

  // English Email Body
  cy.get('.editor-container')
    .find('[contenteditable="true"]')
    .should('be.visible')
    .click()
    .type("Please create one Email Communication template", { force: true });

  // ---------- Add Tamil Language ----------
  cy.get(this.locators.selectlanguage).click();
  cy.get(this.locators.clickondropdownlanguage).click();
  cy.contains('Tamil').click();
  cy.get(this.locators.addlanguage).click();

  cy.get(this.locators.selectTamilTemplate)
    .should('be.visible')
    .click();

  const tamilSentences = [
    "உங்கள் பெயர் என்ன",
    "நான் புனேயிலிருந்து வந்தேன்",
    "இந்த தகவல் சரியானது",
    "தயவுசெய்து இங்கே கையெழுத்திடுங்கள்",
    "நாம் தொடரலாம்",
    "எனக்கு பதில் அனுப்புங்கள்",
    "வரவேற்கிறோம்",
    "இந்த பக்கத்தை படித்து முடிக்கவும்",
    "தயவுசெய்து ஒரு நிமிடம் காத்திருக்கவும்",
    "உங்கள் கோரிக்கை பதிவு செய்யப்பட்டுள்ளது"
  ];

  const tamilsentence =
    tamilSentences[Math.floor(Math.random() * tamilSentences.length)];

  // Tamil Subject
  cy.get(this.locators.subjectline)
    .clear()
    .type(tamilsentence);

  // Tamil Email Body
  cy.get('.editor-container')
    .find('[contenteditable="true"]')
    .click()
    .type(tamilsentence, { force: true });

  // Create Template
  cy.get(this.locators.createtemplate).click();

  // Success Validation
  cy.contains('.toast-message', 'created successfully.')
    .should('be.visible');
}

 CreateCommunicationTemplate173() {

  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const randomname = "Template " +
    Array.from({ length: 8 }, () =>
      letters[Math.floor(Math.random() * letters.length)]
    ).join("");

  const subjectline = "Template " +
    Array.from({ length: 30 }, () =>
      letters[Math.floor(Math.random() * letters.length)]
    ).join("");

  // Open Communication Template Page
  cy.get(this.locators.communicationtemplate).click();

  cy.get(this.locators.templatename)
    .should('be.visible')
    .type(randomname);

  // Required dropdowns
  cy.get(this.locators.entryPoint).select('Collection');
  cy.get(this.locators.channelType).select('Email');
  cy.get(this.locators.recipientType).select('Agent');

  // Allow Access = No
  cy.get(this.locators.allowaccessno).click();

  // English Subject
  cy.get(this.locators.subjectline)
    .should('be.visible')
    .type(subjectline);

  // English Email Body
  cy.get('.editor-container')
    .find('[contenteditable="true"]')
    .should('be.visible')
    .click()
    .type("Please create one Email Communication template", { force: true });

  // ---------- Add Telugu Language ----------
  cy.get(this.locators.selectlanguage).click();
  cy.get(this.locators.clickondropdownlanguage).click();
  cy.contains('Telugu').click();
  cy.get(this.locators.addlanguage).click();

  cy.get(this.locators.selectTeluguTemplate)
    .should('be.visible')
    .click();

  const teluguSentences = [
    "మీ పేరు ఏమిటి",
    "నేను పుణె నుండి వచ్చాను",
    "ఈ సమాచారం సరైనది",
    "దయచేసి ఇక్కడ సంతకం చేయండి",
    "మనం కొనసాగవచ్చు",
    "నాకు సమాధానం పంపండి",
    "స్వాగతం",
    "ఈ పేజీని చదివి పూర్తి చేయండి",
    "దయచేసి ఒక నిమిషం వేచి ఉండండి",
    "మీ అభ్యర్థన నమోదు చేయబడింది"
  ];

  const telugusentence =
    teluguSentences[Math.floor(Math.random() * teluguSentences.length)];

  // Telugu Subject
  cy.get(this.locators.subjectline)
    .clear()
    .type(telugusentence);

  // Telugu Email Body
  cy.get('.editor-container')
    .find('[contenteditable="true"]')
    .click()
    .type(telugusentence, { force: true });

  // Create Template
  cy.get(this.locators.createtemplate).click();

  // Success Validation
  cy.contains('.toast-message', 'created successfully.')
    .should('be.visible');
}
CreateCommunicationTemplate174() {

  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomname = "Template " + Array.from({ length: 8 }, () => 
    letters[Math.floor(Math.random() * letters.length)]
  ).join("");

  cy.wait(1000);
  cy.get(this.locators.communicationtemplate).click();
  cy.wait(1000);

  cy.get(this.locators.entryPoint).select('Collection');
  cy.wait(2000);

  cy.get(this.locators.channelType).select('SMS');
  cy.wait(2000);

  cy.get(this.locators.recipientType).select('Agent');
  cy.wait(2000);

  cy.get('#allowAccessNo').click();
  cy.wait(3000);

  cy.get(this.locators.templatename).type(randomname);
  cy.wait(1000);

  cy.get(this.locators.template_id).type('Header');
  cy.wait(2000);

  cy.get('[title="Add Var"]').click({ force: true });
  cy.wait(2000);

  cy.get('app-template-variable-mapping > .template-variable-mapping > span').click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.clickondropdown).click();
  cy.wait(1000);

  cy.get('div[role="listbox"] .ng-option').then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length);
    cy.wrap($options[randomIndex]).click();
  });

  cy.get(this.locators.clickonmap).click();
  cy.wait(2000);

  cy.get(this.locators.temp_body_sms)
    .type("Please create one SMS Communication template");
  cy.wait(1000);

  // ✅ Language Selection Changed to Hindi
  cy.get(this.locators.selectlanguage).click();
  cy.wait(1000);

  cy.get(this.locators.clickondropdownlanguage).click();
  cy.wait(1000);

  cy.get(this.locators.selectHindiLanguage).contains('Hindi').click();
  cy.wait(1000);

  cy.get(this.locators.addlanguage).click();
  cy.wait(1000);

  cy.get(this.locators.selectHindiTemplate).click();
  cy.wait(1000);

  // ✅ Add Variable Again
  cy.get('[title="Add Var"]').click({ force: true });
  cy.wait(2000);

  cy.get('app-template-variable-mapping > .template-variable-mapping > span').click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.clickondropdown).click();
  cy.wait(1000);

  cy.get('div[role="listbox"] .ng-option').then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length);
    cy.wrap($options[randomIndex]).click();
  });

  cy.get(this.locators.clickonmap).click();
  cy.wait(2000);

  // ✅ Hindi Sentences
  const hindiSentences = [
    "आपका नाम क्या है?",
    "मैं दिल्ली से आया हूँ।",
    "क्या यह जानकारी सही है?",
    "कृपया यहाँ हस्ताक्षर करें।",
    "हम आगे बढ़ सकते हैं।",
    "कृपया उत्तर भेजें।",
    "आपका स्वागत है।",
    "कृपया इस पृष्ठ को पूरा पढ़ें।",
    "कृपया थोड़ी देर प्रतीक्षा करें।",
    "आपका अनुरोध दर्ज कर लिया गया है।"
  ];

  const hindiSentence = hindiSentences[Math.floor(Math.random() * hindiSentences.length)];

  cy.get(this.locators.temp_body_sms).type(hindiSentence);
  cy.wait(1000);

  cy.get(this.locators.createtemplate).click();
  cy.wait(1000);

  cy.get('.toast-message')
    .contains('created successfully.')
    .should('be.visible');
}
CreateCommunicationTemplate175() {

      const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomname = "Template " + Array.from({ length: 8 }, () => 
    letters[Math.floor(Math.random() * letters.length)]
  ).join("");

  cy.wait(1000);
  cy.get(this.locators.communicationtemplate).click();
  cy.wait(1000);

  cy.get(this.locators.entryPoint).select('Collection');
  cy.wait(2000);

  cy.get(this.locators.channelType).select('SMS');
  cy.wait(2000);

  cy.get(this.locators.recipientType).select('Agent');
  cy.wait(2000);
  cy.get('#allowAccessNo').click();
  cy.wait(3000);
  cy.get(this.locators.templatename).type(randomname);
  cy.wait(1000);

  cy.get(this.locators.template_id).type('Header');
  cy.wait(2000);
  cy.get('[title="Add Var"]').click({ force: true });
  cy.wait(2000);
 cy.get('app-template-variable-mapping > .template-variable-mapping > span').click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.clickondropdown).click();
  cy.wait(1000);
  cy.get('div[role="listbox"] .ng-option').then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length);
    cy.wrap($options[randomIndex]).click();
  });
  cy.get(this.locators.clickonmap).click();
  cy.wait(2000);
  cy.get(this.locators.temp_body_sms)
    .type("Please create one Email Communication template");
  cy.wait(1000);
  cy.get(this.locators.selectlanguage).click();
  cy.wait(1000);
  cy.get(this.locators.clickondropdownlanguage).click();
  cy.wait(1000);
  cy.get(this.locators.selectHindiLanguage).contains('Marathi').click();
  cy.wait(1000);
  cy.get(this.locators.addlanguage).click();
  cy.wait(1000);
  cy.get(this.locators.selectMarathiTemplate).click();
  cy.wait(1000);
  cy.get('[title="Add Var"]').click({ force: true });
  cy.wait(2000);
cy.get('app-template-variable-mapping > .template-variable-mapping > span').click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.clickondropdown).click();
  cy.wait(1000);
  cy.get('div[role="listbox"] .ng-option').then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length);
    cy.wrap($options[randomIndex]).click();
  });
  cy.get(this.locators.clickonmap).click();
  cy.wait(2000);
 
  cy.wait(1000);

  const marathiSentences = [
    "तुमचं नाव काय आहे",
    "मी पुण्याहून आलो आहे.",
    "ही माहिती बरोबर आहे का",
    "कृपया येथे सही करा",
    "आपण पुढे चालू शकतो",
    "माझं उत्तर पाठवा",
    "तुमचं स्वागत आहे",
    "हे पान वाचून पूर्ण करा",
    "कृपया थोडा वेळ थांबा",
    "आपली विनंती नोंदवली गेली आहे"
  ];

  const marathisentence = marathiSentences[Math.floor(Math.random() * marathiSentences.length)];
  cy.get(this.locators.temp_body_sms).type(marathisentence);
  cy.wait(1000);
  
  cy.get(this.locators.createtemplate).click();
  cy.wait(1000);

  cy.get('.toast-message')
    .contains('created successfully.')
    .should('be.visible');
}

  CreateCommunicationTemplate176() {

  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomname = "Template " + Array.from({ length: 8 }, () => 
    letters[Math.floor(Math.random() * letters.length)]
  ).join("");

  cy.wait(1000);
  cy.get(this.locators.communicationtemplate).click();
  cy.wait(1000);

  cy.get(this.locators.entryPoint).select('Collection');
  cy.wait(2000);

  cy.get(this.locators.channelType).select('SMS');
  cy.wait(2000);

  cy.get(this.locators.recipientType).select('Agent');
  cy.wait(2000);

  cy.get('#allowAccessNo').click();
  cy.wait(3000);

  cy.get(this.locators.templatename).type(randomname);
  cy.wait(1000);

  cy.get(this.locators.template_id).type('Header');
  cy.wait(2000);

  cy.get('[title="Add Var"]').click({ force: true });
  cy.wait(2000);

  cy.get('app-template-variable-mapping > .template-variable-mapping > span').click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.clickondropdown).click();
  cy.wait(1000);

  cy.get('div[role="listbox"] .ng-option').then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length);
    cy.wrap($options[randomIndex]).click();
  });

  cy.get(this.locators.clickonmap).click();
  cy.wait(2000);

  cy.get(this.locators.temp_body_sms)
    .type("Please create one SMS Communication template");
  cy.wait(1000);

  cy.get(this.locators.selectlanguage).click();
  cy.wait(1000);

  cy.get(this.locators.clickondropdownlanguage).click();
  cy.wait(1000);

  cy.contains('Kannada').click();
  cy.wait(1000);

  cy.get(this.locators.addlanguage).click();
  cy.wait(1000);

  cy.get(this.locators.selectKannadaTemplate).click();
  cy.wait(1000);

  const kannadaSentences = [
    "ನಿಮ್ಮ ಹೆಸರು ಏನು?",
    "ನಾನು ಬೆಂಗಳೂರಿನಿಂದ ಬಂದಿದ್ದೇನೆ.",
    "ಈ ಮಾಹಿತಿ ಸರಿಯೇ?",
    "ದಯವಿಟ್ಟು ಇಲ್ಲಿ ಸಹಿ ಮಾಡಿ.",
    "ನಿಮಗೆ ಸ್ವಾಗತ."
  ];

  const sentence = kannadaSentences[Math.floor(Math.random() * kannadaSentences.length)];

  cy.get(this.locators.temp_body_sms).type(sentence);
  cy.wait(1000);

  cy.get(this.locators.createtemplate).click();
  cy.wait(1000);

  cy.get('.toast-message')
    .contains('created successfully.')
    .should('be.visible');
}
CreateCommunicationTemplate177() {

  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomname = "Template " + Array.from({ length: 8 }, () => 
    letters[Math.floor(Math.random() * letters.length)]
  ).join("");

  cy.wait(1000);
  cy.get(this.locators.communicationtemplate).click();
  cy.wait(1000);

  cy.get(this.locators.entryPoint).select('Collection');
  cy.wait(2000);

  cy.get(this.locators.channelType).select('SMS');
  cy.wait(2000);

  cy.get(this.locators.recipientType).select('Agent');
  cy.wait(2000);

  cy.get('#allowAccessNo').click();
  cy.wait(3000);

  cy.get(this.locators.templatename).type(randomname);
  cy.wait(1000);

  cy.get(this.locators.template_id).type('Header');
  cy.wait(2000);

  // ✅ DO NOT REMOVE
  cy.get('[title="Add Var"]').click({ force: true });
  cy.wait(2000);

  cy.get('app-template-variable-mapping > .template-variable-mapping > span').click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.clickondropdown).click();
  cy.wait(1000);

  cy.get('div[role="listbox"] .ng-option').then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length);
    cy.wrap($options[randomIndex]).click();
  });

  cy.get(this.locators.clickonmap).click();
  cy.wait(2000);

  cy.get(this.locators.temp_body_sms)
    .type("Please create one SMS Communication template");

  cy.get(this.locators.selectlanguage).click();
  cy.wait(1000);
  cy.get(this.locators.clickondropdownlanguage).click();
  cy.wait(1000);
  cy.contains('Malayalam').click();
  cy.wait(1000);

  cy.get(this.locators.addlanguage).click();
  cy.wait(1000);
  cy.get(this.locators.selectMalayalamTemplate).click();
  cy.wait(1000);

  const sentences = [
    "താങ്കളുടെ പേര് എന്താണ്?",
    "ഈ വിവരങ്ങൾ ശരിയാണോ?",
    "ദയവായി ഇവിടെ ഒപ്പിടുക.",
    "സ്വാഗതം."
  ];

  cy.get(this.locators.temp_body_sms)
    .type(sentences[Math.floor(Math.random() * sentences.length)]);

  cy.get(this.locators.createtemplate).click();
}

CreateCommunicationTemplate178() {

  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomname = "Template " + Array.from({ length: 8 }, () =>
    letters[Math.floor(Math.random() * letters.length)]
  ).join("");

  cy.wait(1000);
  cy.get(this.locators.communicationtemplate).click();
  cy.wait(1000);

  cy.get(this.locators.entryPoint).select('Collection');
  cy.wait(2000);

  cy.get(this.locators.channelType).select('SMS');
  cy.wait(2000);

  cy.get(this.locators.recipientType).select('Agent');
  cy.wait(2000);

  cy.get('#allowAccessNo').click();
  cy.wait(3000);

  cy.get(this.locators.templatename).type(randomname);
  cy.wait(1000);

  cy.get(this.locators.template_id).type('Header');
  cy.wait(2000);

  // ✅ DO NOT REMOVE
  cy.get('[title="Add Var"]').click({ force: true });
  cy.wait(2000);

  cy.get('app-template-variable-mapping > .template-variable-mapping > span')
    .click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.clickondropdown).click();
  cy.wait(1000);

  cy.get('div[role="listbox"] .ng-option').then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length);
    cy.wrap($options[randomIndex]).click();
  });

  cy.get(this.locators.clickonmap).click();
  cy.wait(2000);

  cy.get(this.locators.temp_body_sms)
    .type("Please create one SMS Communication template");

  cy.get(this.locators.selectlanguage).click();
  cy.wait(1000);
  cy.get(this.locators.clickondropdownlanguage).click();
  cy.wait(1000);
  cy.contains('Tamil').click();
  cy.wait(1000);

  cy.get(this.locators.addlanguage).click();
  cy.wait(1000);
  cy.get(this.locators.selectTamilTemplate).click();
  cy.wait(1000);

  const sentences = [
    "உங்கள் பெயர் என்ன?",
    "இந்த தகவல் சரியானதா?",
    "தயவுசெய்து கையெழுத்திடுங்கள்.",
    "வரவேற்கிறோம்."
  ];

  cy.get(this.locators.temp_body_sms)
    .type(sentences[Math.floor(Math.random() * sentences.length)]);

  cy.get(this.locators.createtemplate).click();
}

CreateCommunicationTemplate179() {

  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomname = "Template " + Array.from({ length: 8 }, () =>
    letters[Math.floor(Math.random() * letters.length)]
  ).join("");

  cy.wait(1000);
  cy.get(this.locators.communicationtemplate).click();
  cy.wait(1000);

  cy.get(this.locators.entryPoint).select('Collection');
  cy.wait(2000);

  cy.get(this.locators.channelType).select('SMS');
  cy.wait(2000);

  cy.get(this.locators.recipientType).select('Agent');
  cy.wait(2000);

  cy.get('#allowAccessNo').click();
  cy.wait(3000);

  cy.get(this.locators.templatename).type(randomname);
  cy.wait(1000);

  cy.get(this.locators.template_id).type('Header');
  cy.wait(2000);

  // ✅ DO NOT REMOVE
  cy.get('[title="Add Var"]').click({ force: true });
  cy.wait(2000);

  cy.get('app-template-variable-mapping > .template-variable-mapping > span')
    .click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.clickondropdown).click();
  cy.wait(1000);

  cy.get('div[role="listbox"] .ng-option').then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length);
    cy.wrap($options[randomIndex]).click();
  });

  cy.get(this.locators.clickonmap).click();
  cy.wait(2000);

  cy.get(this.locators.temp_body_sms)
    .type("Please create one SMS Communication template");

  cy.get(this.locators.selectlanguage).click();
  cy.wait(1000);
  cy.get(this.locators.clickondropdownlanguage).click();
  cy.wait(1000);
  cy.contains('Telugu').click();
  cy.wait(1000);

  cy.get(this.locators.addlanguage).click();
  cy.wait(1000);
  cy.get(this.locators.selectTeluguTemplate).click();
  cy.wait(1000);

  const sentences = [
    "మీ పేరు ఏమిటి?",
    "ఈ సమాచారం సరైనదేనా?",
    "దయచేసి సంతకం చేయండి.",
    "స్వాగతం."
  ];

  cy.get(this.locators.temp_body_sms)
    .type(sentences[Math.floor(Math.random() * sentences.length)]);

  cy.get(this.locators.createtemplate).click();
}


 CreateCommunicationTemplate180() {

  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomname = "Template " + Array.from({ length: 8 }, () =>
    letters[Math.floor(Math.random() * letters.length)]
  ).join("");

  cy.wait(1000);
  cy.get(this.locators.communicationtemplate).click();
  cy.wait(1000);

  cy.get(this.locators.entryPoint).select('Collection');
  cy.wait(2000);

  cy.get(this.locators.channelType).select('SMS');
  cy.wait(2000);

  cy.get(this.locators.recipientType).select('Agent');
  cy.wait(2000);

  // ✅ Updated here
  cy.get('#allowAccessYes').click();
  cy.wait(3000);

  cy.get(this.locators.templatename).type(randomname);
  cy.wait(1000);

  cy.get(this.locators.template_id).type('Header');
  cy.wait(2000);

  cy.get('[title="Add Var"]').click({ force: true });
  cy.wait(2000);

  cy.get('app-template-variable-mapping > .template-variable-mapping > span')
    .click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.clickondropdown).click();
  cy.wait(1000);

  cy.get('div[role="listbox"] .ng-option').then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length);
    cy.wrap($options[randomIndex]).click();
  });

  cy.get(this.locators.clickonmap).click();
  cy.wait(2000);

  cy.get(this.locators.temp_body_sms)
    .type("Please create one SMS Communication template");

  cy.get(this.locators.selectlanguage).click();
  cy.wait(1000);

  cy.get(this.locators.clickondropdownlanguage).click();
  cy.wait(1000);

  cy.contains('Telugu').click();
  cy.wait(1000);

  cy.get(this.locators.addlanguage).click();
  cy.wait(1000);

  // ✅ Added block after addlanguage (template_id removed)

  cy.get('[title="Add Var"]').click({ force: true });
  cy.wait(2000);

  cy.get('app-template-variable-mapping > .template-variable-mapping > span')
    .click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.clickondropdown).click();
  cy.wait(1000);

  cy.get('div[role="listbox"] .ng-option').then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length);
    cy.wrap($options[randomIndex]).click();
  });

  cy.get(this.locators.clickonmap).click();
  cy.wait(2000);

  const sentences = [
    "మీ పేరు ఏమిటి?",
    "ఈ సమాచారం సరైనదేనా?",
    "దయచేసి సంతకం చేయండి.",
    "స్వాగతం."
  ];

  cy.get(this.locators.temp_body_sms)
    .type(sentences[Math.floor(Math.random() * sentences.length)]);

  cy.get(this.locators.createtemplate).click();
}
CreateCommunicationTemplate181() {

  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomname = "Template " + Array.from({ length: 8 }, () =>
    letters[Math.floor(Math.random() * letters.length)]
  ).join("");

  cy.wait(1000);
  cy.get(this.locators.communicationtemplate).click();
  cy.wait(1000);

  cy.get(this.locators.entryPoint).select('Collection');
  cy.wait(2000);

  cy.get(this.locators.channelType).select('SMS');
  cy.wait(2000);

  cy.get(this.locators.recipientType).select('Agent');
  cy.wait(2000);

  cy.get('#allowAccessYes').click();
  cy.wait(3000);

  cy.get(this.locators.templatename).type(randomname);
  cy.wait(1000);

  cy.get(this.locators.template_id).type('Header');
  cy.wait(2000);

  cy.get('[title="Add Var"]').click({ force: true });
  cy.wait(2000);

  cy.get('app-template-variable-mapping > .template-variable-mapping > span')
    .click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.clickondropdown).click();
  cy.wait(1000);

  cy.get('div[role="listbox"] .ng-option').then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length);
    cy.wrap($options[randomIndex]).click();
  });

  cy.get(this.locators.clickonmap).click();
  cy.wait(2000);

  cy.get(this.locators.temp_body_sms)
    .type("Please create one SMS Communication template");

  cy.get(this.locators.selectlanguage).click();
  cy.wait(1000);

  cy.get(this.locators.clickondropdownlanguage).click();
  cy.wait(1000);

  cy.contains('Telugu').click();
  cy.wait(1000);

  cy.get(this.locators.addlanguage).click();
  cy.wait(1000);

  // Added block
  cy.get('[title="Add Var"]').click({ force: true });
  cy.wait(2000);

  cy.get('app-template-variable-mapping > .template-variable-mapping > span')
    .click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.clickondropdown).click();
  cy.wait(1000);

  cy.get('div[role="listbox"] .ng-option').then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length);
    cy.wrap($options[randomIndex]).click();
  });

  cy.get(this.locators.clickonmap).click();
  cy.wait(2000);

  const sentences = [
    "మీ పేరు ఏమిటి?",
    "ఈ సమాచారం సరైనదేనా?",
    "దయచేసి సంతకం చేయండి.",
    "స్వాగతం."
  ];

  cy.get(this.locators.temp_body_sms)
    .type(sentences[Math.floor(Math.random() * sentences.length)]);

  cy.get(this.locators.createtemplate).click();
}
CreateCommunicationTemplate182() {

  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomname = "Template " + Array.from({ length: 8 }, () =>
    letters[Math.floor(Math.random() * letters.length)]
  ).join("");

  cy.wait(1000);
  cy.get(this.locators.communicationtemplate).click();
  cy.wait(1000);

  cy.get(this.locators.entryPoint).select('Collection');
  cy.wait(2000);

  cy.get(this.locators.channelType).select('SMS');
  cy.wait(2000);

  cy.get(this.locators.recipientType).select('Agent');
  cy.wait(2000);

  cy.get('#allowAccessYes').click();
  cy.wait(3000);

  cy.get(this.locators.templatename).type(randomname);
  cy.wait(1000);

  cy.get(this.locators.template_id).type('Header');
  cy.wait(2000);

  cy.get('[title="Add Var"]').click({ force: true });
  cy.wait(2000);

  cy.get('app-template-variable-mapping > .template-variable-mapping > span')
    .click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.clickondropdown).click();
  cy.wait(1000);

  cy.get('div[role="listbox"] .ng-option').then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length);
    cy.wrap($options[randomIndex]).click();
  });

  cy.get(this.locators.clickonmap).click();
  cy.wait(2000);

  cy.get(this.locators.temp_body_sms)
    .type("Please create one SMS Communication template");

  cy.get(this.locators.selectlanguage).click();
  cy.wait(1000);

  cy.get(this.locators.clickondropdownlanguage).click();
  cy.wait(1000);

  cy.contains('Telugu').click();
  cy.wait(1000);

  cy.get(this.locators.addlanguage).click();
  cy.wait(1000);

  cy.get('[title="Add Var"]').click({ force: true });
  cy.wait(2000);

  cy.get('app-template-variable-mapping > .template-variable-mapping > span')
    .click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.clickondropdown).click();
  cy.wait(1000);

  cy.get('div[role="listbox"] .ng-option').then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length);
    cy.wrap($options[randomIndex]).click();
  });

  cy.get(this.locators.clickonmap).click();
  cy.wait(2000);

  const sentences = [
    "మీ పేరు ఏమిటి?",
    "ఈ సమాచారం సరైనదేనా?",
    "దయచేసి సంతకం చేయండి.",
    "స్వాగతం."
  ];

  cy.get(this.locators.temp_body_sms)
    .type(sentences[Math.floor(Math.random() * sentences.length)]);

  cy.get(this.locators.createtemplate).click();
}

CreateCommunicationTemplate183() {

  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomname = "Template " + Array.from({ length: 8 }, () =>
    letters[Math.floor(Math.random() * letters.length)]
  ).join("");

  cy.wait(1000);
  cy.get(this.locators.communicationtemplate).click();
  cy.wait(1000);

  cy.get(this.locators.entryPoint).select('Collection');
  cy.wait(2000);

  cy.get(this.locators.channelType).select('SMS');
  cy.wait(2000);

  cy.get(this.locators.recipientType).select('Agent');
  cy.wait(2000);

  cy.get('#allowAccessYes').click();
  cy.wait(3000);

  cy.get(this.locators.templatename).type(randomname);
  cy.wait(1000);

  cy.get(this.locators.template_id).type('Header');
  cy.wait(2000);

  cy.get('[title="Add Var"]').click({ force: true });
  cy.wait(2000);

  cy.get('app-template-variable-mapping > .template-variable-mapping > span')
    .click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.clickondropdown).click();
  cy.wait(1000);

  cy.get('div[role="listbox"] .ng-option').then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length);
    cy.wrap($options[randomIndex]).click();
  });

  cy.get(this.locators.clickonmap).click();
  cy.wait(2000);

  cy.get(this.locators.temp_body_sms)
    .type("Please create one SMS Communication template");

  cy.get(this.locators.selectlanguage).click();
  cy.wait(1000);

  cy.get(this.locators.clickondropdownlanguage).click();
  cy.wait(1000);

  cy.contains('Telugu').click();
  cy.wait(1000);

  cy.get(this.locators.addlanguage).click();
  cy.wait(1000);

  cy.get('[title="Add Var"]').click({ force: true });
  cy.wait(2000);

  cy.get('app-template-variable-mapping > .template-variable-mapping > span')
    .click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.clickondropdown).click();
  cy.wait(1000);

  cy.get('div[role="listbox"] .ng-option').then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length);
    cy.wrap($options[randomIndex]).click();
  });

  cy.get(this.locators.clickonmap).click();
  cy.wait(2000);

  const sentences = [
    "మీ పేరు ఏమిటి?",
    "ఈ సమాచారం సరైనదేనా?",
    "దయచేసి సంతకం చేయండి.",
    "స్వాగతం."
  ];

  cy.get(this.locators.temp_body_sms)
    .type(sentences[Math.floor(Math.random() * sentences.length)]);

  cy.get(this.locators.createtemplate).click();
}
CreateCommunicationTemplate184() {

  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomname = "Template " + Array.from({ length: 8 }, () =>
    letters[Math.floor(Math.random() * letters.length)]
  ).join("");

  cy.wait(1000);
  cy.get(this.locators.communicationtemplate).click();
  cy.wait(1000);

  cy.get(this.locators.entryPoint).select('Collection');
  cy.wait(2000);

  cy.get(this.locators.channelType).select('SMS');
  cy.wait(2000);

  cy.get(this.locators.recipientType).select('Agent');
  cy.wait(2000);

  cy.get('#allowAccessYes').click();
  cy.wait(3000);

  cy.get(this.locators.templatename).type(randomname);
  cy.wait(1000);

  cy.get(this.locators.template_id).type('Header');
  cy.wait(2000);

  cy.get('[title="Add Var"]').click({ force: true });
  cy.wait(2000);

  cy.get('app-template-variable-mapping > .template-variable-mapping > span')
    .click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.clickondropdown).click();
  cy.wait(1000);

  cy.get('div[role="listbox"] .ng-option').then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length);
    cy.wrap($options[randomIndex]).click();
  });

  cy.get(this.locators.clickonmap).click();
  cy.wait(2000);

  cy.get(this.locators.temp_body_sms)
    .type("Please create one SMS Communication template");

  cy.get(this.locators.selectlanguage).click();
  cy.wait(1000);

  cy.get(this.locators.clickondropdownlanguage).click();
  cy.wait(1000);

  cy.contains('Telugu').click();
  cy.wait(1000);

  cy.get(this.locators.addlanguage).click();
  cy.wait(1000);

  cy.get('[title="Add Var"]').click({ force: true });
  cy.wait(2000);

  cy.get('app-template-variable-mapping > .template-variable-mapping > span')
    .click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.clickondropdown).click();
  cy.wait(1000);

  cy.get('div[role="listbox"] .ng-option').then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length);
    cy.wrap($options[randomIndex]).click();
  });

  cy.get(this.locators.clickonmap).click();
  cy.wait(2000);

  const sentences = [
    "మీ పేరు ఏమిటి?",
    "ఈ సమాచారం సరైనదేనా?",
    "దయచేసి సంతకం చేయండి.",
    "స్వాగతం."
  ];

  cy.get(this.locators.temp_body_sms)
    .type(sentences[Math.floor(Math.random() * sentences.length)]);

  cy.get(this.locators.createtemplate).click();
}
CreateCommunicationTemplate185() {

  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomname = "Template " + Array.from({ length: 8 }, () =>
    letters[Math.floor(Math.random() * letters.length)]
  ).join("");

  cy.wait(1000);
  cy.get(this.locators.communicationtemplate).click();
  cy.wait(1000);

  cy.get(this.locators.entryPoint).select('Collection');
  cy.wait(2000);

  cy.get(this.locators.channelType).select('SMS');
  cy.wait(2000);

  cy.get(this.locators.recipientType).select('Agent');
  cy.wait(2000);

  cy.get('#allowAccessYes').click();
  cy.wait(3000);

  cy.get(this.locators.templatename).type(randomname);
  cy.wait(1000);

  cy.get(this.locators.template_id).type('Header');
  cy.wait(2000);

  cy.get('[title="Add Var"]').click({ force: true });
  cy.wait(2000);

  cy.get('app-template-variable-mapping > .template-variable-mapping > span')
    .click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.clickondropdown).click();
  cy.wait(1000);

  cy.get('div[role="listbox"] .ng-option').then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length);
    cy.wrap($options[randomIndex]).click();
  });

  cy.get(this.locators.clickonmap).click();
  cy.wait(2000);

  cy.get(this.locators.temp_body_sms)
    .type("Please create one SMS Communication template");

  cy.get(this.locators.selectlanguage).click();
  cy.wait(1000);

  cy.get(this.locators.clickondropdownlanguage).click();
  cy.wait(1000);

  cy.contains('Telugu').click();
  cy.wait(1000);

  cy.get(this.locators.addlanguage).click();
  cy.wait(1000);

  cy.get('[title="Add Var"]').click({ force: true });
  cy.wait(2000);

  cy.get('app-template-variable-mapping > .template-variable-mapping > span')
    .click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.clickondropdown).click();
  cy.wait(1000);

  cy.get('div[role="listbox"] .ng-option').then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length);
    cy.wrap($options[randomIndex]).click();
  });

  cy.get(this.locators.clickonmap).click();
  cy.wait(2000);

  const sentences = [
    "మీ పేరు ఏమిటి?",
    "ఈ సమాచారం సరైనదేనా?",
    "దయచేసి సంతకం చేయండి.",
    "స్వాగతం."
  ];

  cy.get(this.locators.temp_body_sms)
    .type(sentences[Math.floor(Math.random() * sentences.length)]);

  cy.get(this.locators.createtemplate).click();
}


  CreateCommunicationTemplate186() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
     cy.wait(1000);
  cy.get(this.locators.communicationtemplate).click();
  cy.wait(1000);
  cy.get(this.locators.entryPoint).select('Collection');
  cy.wait(2000);
  cy.get(this.locators.channelType).select('Letter');
  cy.wait(2000);
  cy.get(this.locators.recipientType).select('Customer');
  cy.wait(2000);
  cy.get(this.locators.templatename).type(randomname);
  cy.wait(1000);
  cy.get(this.locators.hindiTemplateBody)
  .type("Please create one Email Communication template");
    cy.wait(1000);
    cy.get(this.locators.selectlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.clickondropdownlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.selectHindiLanguage).contains('Hindi').click();
    cy.wait(1000);
    cy.get(this.locators.addlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.selectHindiTemplate).click();
    cy.wait(1000);
    const hindiSentences = [
      "आपका नाम क्या है?",                // What is your name?
      "मैं दिल्ली से आया हूँ।",           // I am from Delhi.
      "यह जानकारी सही है क्या?",         // Is this information correct?
      "कृपया यहाँ हस्ताक्षर करें।",      // Please sign here.
      "हम आगे बढ़ सकते हैं।",            // We can proceed further.
      "उत्तर भेजिए।",                    // Send the answer.
      "आपका स्वागत है!",                // You are welcome!
      "इस पृष्ठ को पूरा पढ़ें।",         // Read this page completely.
      "कृपया थोड़ी देर प्रतीक्षा करें।", // Please wait a moment.
      "आपका अनुरोध दर्ज कर लिया गया है।" // Your request has been recorded.
    ];
    const hindiSentence = hindiSentences[Math.floor(Math.random() * hindiSentences.length)];
    cy.get(this.locators.hindiTemplateBody).type(hindiSentence);
    cy.wait(1000);
    cy.get(this.locators.createtemplate).click();
    cy.wait(1000);
    cy.get('.toast-message').contains('created successfully.').should('be.visible')
    cy.wait(1000);
  }

 CreateCommunicationTemplate187() {

  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomname = "Template " + Array.from({ length: 8 }, () =>
    letters[Math.floor(Math.random() * letters.length)]
  ).join("");

  const subjectline = "Template " + Array.from({ length: 30 }, () =>
    letters[Math.floor(Math.random() * letters.length)]
  ).join("");

  cy.wait(1000);
  cy.get(this.locators.communicationtemplate).click();
  cy.wait(1000);

  // ✅ Same structure as 186
  cy.get(this.locators.entryPoint).select('Collection');
  cy.wait(2000);

  cy.get(this.locators.channelType).select('Letter');
  cy.wait(2000);

  cy.get(this.locators.recipientType).select('Customer');
  cy.wait(2000);

  cy.get(this.locators.templatename).type(randomname);
  cy.wait(1000);

  // Default English body (same like 186)
  cy.get(this.locators.hindiTemplateBody)
    .type("Please create one Email Communication template");
  cy.wait(1000);

  cy.get(this.locators.selectlanguage).click();
  cy.wait(1000);

  cy.get(this.locators.clickondropdownlanguage).click();
  cy.wait(1000);

  cy.get(this.locators.selectHindiLanguage)
    .contains('Marathi')
    .click();
  cy.wait(1000);

  cy.get(this.locators.addlanguage).click();
  cy.wait(1000);

  cy.get(this.locators.selectMarathiTemplate).click();
  cy.wait(1000);

  const marathiSentences = [
    "तुमचं नाव काय आहे",
    "मी पुण्याहून आलो आहे.",
    "ही माहिती बरोबर आहे का",
    "कृपया येथे सही करा",
    "आपण पुढे चालू शकतो",
    "माझं उत्तर पाठवा",
    "तुमचं स्वागत आहे",
    "हे पान वाचून पूर्ण करा",
    "कृपया थोडा वेळ थांबा",
    "आपली विनंती नोंदवली गेली आहे"
  ];

  const marathisentence =
    marathiSentences[Math.floor(Math.random() * marathiSentences.length)];

  cy.get(this.locators.marathiTemplateBody)
    .type(marathisentence);
  cy.wait(1000);

  cy.get(this.locators.createtemplate).click();
  cy.wait(1000);

  cy.get('.toast-message')
    .contains('created successfully.')
    .should('be.visible');

  cy.wait(1000);
}

  CreateCommunicationTemplate188() {

  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomname = "Template " + Array.from({ length: 8 }, () =>
    letters[Math.floor(Math.random() * letters.length)]
  ).join("");

  const subjectline = "Template " + Array.from({ length: 30 }, () =>
    letters[Math.floor(Math.random() * letters.length)]
  ).join("");

  cy.wait(1000);
  cy.get(this.locators.communicationtemplate).click();
  cy.wait(1000);

  // ✅ Same structure as 186
  cy.get(this.locators.entryPoint).select('Collection');
  cy.wait(2000);

  cy.get(this.locators.channelType).select('Letter');
  cy.wait(2000);

  cy.get(this.locators.recipientType).select('Customer');
  cy.wait(2000);

  cy.get(this.locators.templatename).type(randomname);
  cy.wait(1000);

  // Default English body first (like 186)
  cy.get(this.locators.kannadaTemplateBody)
    .type("Please create one Email Communication template");
  cy.wait(1000);

  cy.get(this.locators.selectlanguage).click();
  cy.wait(1000);

  cy.get(this.locators.clickondropdownlanguage).click();
  cy.wait(1000);

  cy.get(this.locators.selectHindiLanguage)
    .contains('Kannada')
    .click();
  cy.wait(1000);

  cy.get(this.locators.addlanguage).click();
  cy.wait(1000);

  cy.get(this.locators.selectKannadaTemplate).click();
  cy.wait(1000);

  const kannadaSentences = [
    "ನಿಮ್ಮ ಹೆಸರು ಏನು",
    "ನಾನು ಪುಣೆಯಿಂದ ಬಂದಿದ್ದೇನೆ",
    "ಈ ಮಾಹಿತಿ ಸರಿಯಾಗಿದೆ",
    "ದಯವಿಟ್ಟು ಇಲ್ಲಿ ಸಹಿ ಮಾಡಿ",
    "ನಾವು ಮುಂದುವರಿಯಬಹುದು",
    "ನನ್ನ ಉತ್ತರ ಕಳುಹಿಸಿ",
    "ನಿಮ್ಮ ಸ್ವಾಗತ ಇದೆ",
    "ಈ ಪುಟವನ್ನು ಓದಿ ಪೂರ್ಣಗೊಳಿಸಿ",
    "ದಯವಿಟ್ಟು ಸ್ವಲ್ಪ ಕ್ಷಣ ನಿರೀಕ್ಷಿಸಿ",
    "ನಿಮ್ಮ ವಿನಂತಿಯನ್ನು ದಾಖಲಿಸಲಾಗಿದೆ"
  ];

  const kannadasentence =
    kannadaSentences[Math.floor(Math.random() * kannadaSentences.length)];

  cy.get(this.locators.kannadaTemplateBody)
    .type(kannadasentence);
  cy.wait(1000);

  cy.get(this.locators.createtemplate).click();
  cy.wait(1000);

  cy.get('.toast-message')
    .contains('created successfully.')
    .should('be.visible');

  cy.wait(1000);
}

CreateCommunicationTemplate189() {

  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomname = "Template " + Array.from({ length: 8 }, () =>
    letters[Math.floor(Math.random() * letters.length)]
  ).join("");

  const subjectline = "Template " + Array.from({ length: 30 }, () =>
    letters[Math.floor(Math.random() * letters.length)]
  ).join("");

  cy.wait(1000);
  cy.get(this.locators.communicationtemplate).click();
  cy.wait(1000);

  // ✅ Same structure as 186
  cy.get(this.locators.entryPoint).select('Collection');
  cy.wait(2000);

  cy.get(this.locators.channelType).select('Letter');
  cy.wait(2000);

  cy.get(this.locators.recipientType).select('Customer');
  cy.wait(2000);

  cy.get(this.locators.templatename).type(randomname);
  cy.wait(1000);

  // Default English body first (same as 186 pattern)
  cy.get(this.locators.malayalamTemplateBody)
    .type("Please create one Email Communication template");
  cy.wait(1000);

  cy.get(this.locators.selectlanguage).click();
  cy.wait(1000);

  cy.get(this.locators.clickondropdownlanguage).click();
  cy.wait(1000);

  cy.get(this.locators.selectHindiLanguage)
    .contains('Malayalam')
    .click();
  cy.wait(1000);

  cy.get(this.locators.addlanguage).click();
  cy.wait(1000);

  cy.get(this.locators.selectMalayalamTemplate).click();
  cy.wait(1000);

  const malayalamSentences = [
    "നിന്റെ പേര് എന്താണ്",
    "ഞാൻ പുനെയിൽ നിന്ന് വന്നതാണ്",
    "ഈ വിവരങ്ങൾ ശരിയാണല്ലോ",
    "ദയവായി ഇവിടെ ഒപ്പിടുക",
    "നമുക്ക് തുടരാം",
    "എനിക്ക് ഉത്തരമയക്കൂ",
    "സ്വാഗതം",
    "ഈ പേജ് വായിച്ചു പൂർത്തിയാക്കുക",
    "ദയവായി കുറച്ച് നേരം കാത്തിരിക്കുക",
    "നിന്റെ അഭ്യർത്ഥന രജിസ്റ്റർ ചെയ്തിരിക്കുന്നു"
  ];

  const malayalamsentence =
    malayalamSentences[Math.floor(Math.random() * malayalamSentences.length)];

  cy.get(this.locators.malayalamTemplateBody)
    .type(malayalamsentence);
  cy.wait(1000);

  cy.get(this.locators.createtemplate).click();
  cy.wait(1000);

  cy.get('.toast-message')
    .contains('created successfully.')
    .should('be.visible');

  cy.wait(1000);
}

 CreateCommunicationTemplate190() {

  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomname = "Template " + Array.from({ length: 8 }, () =>
    letters[Math.floor(Math.random() * letters.length)]
  ).join("");

  cy.wait(1000);
  cy.get(this.locators.communicationtemplate).click();
  cy.wait(1000);

  // ✅ Same structure as 186
  cy.get(this.locators.entryPoint).select('Collection');
  cy.wait(2000);

  cy.get(this.locators.channelType).select('Letter');
  cy.wait(2000);

  cy.get(this.locators.recipientType).select('Customer');
  cy.wait(2000);

  cy.get(this.locators.templatename).type(randomname);
  cy.wait(1000);

  // Default English body first
  cy.get(this.locators.tamilTemplateBody)
    .type("Please create one Email Communication template");
  cy.wait(1000);

  cy.get(this.locators.selectlanguage).click();
  cy.wait(1000);

  cy.get(this.locators.clickondropdownlanguage).click();
  cy.wait(1000);

  cy.get(this.locators.selectHindiLanguage)
    .contains('Tamil')
    .click();
  cy.wait(1000);

  cy.get(this.locators.addlanguage).click();
  cy.wait(1000);

  cy.get(this.locators.selectTamilTemplate).click();
  cy.wait(1000);

  const tamilSentences = [
    "உங்கள் பெயர் என்ன",
    "நான் புனேயிலிருந்து வந்தேன்",
    "இந்த தகவல் சரியானதா",
    "தயவுசெய்து இங்கு கையொப்பமிடவும்",
    "நாம் தொடரலாம்",
    "எனது பதிலை அனுப்பு",
    "நீங்கள் வரவேற்கப்படுகிறீர்கள்",
    "இந்த பக்கத்தை வாசித்து முடிக்கவும்",
    "தயவுசெய்து சிறிது நேரம் காத்திருக்கவும்",
    "உங்கள் கோரிக்கை பதிவாகியுள்ளது"
  ];

  const tamilsentence =
    tamilSentences[Math.floor(Math.random() * tamilSentences.length)];

  cy.get(this.locators.tamilTemplateBody).type(tamilsentence);
  cy.wait(1000);

  cy.get(this.locators.createtemplate).click();
  cy.wait(1000);

  cy.get('.toast-message')
    .contains('created successfully.')
    .should('be.visible');

  cy.wait(1000);
}

 CreateCommunicationTemplate191() {

  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomname = "Template " + Array.from({ length: 8 }, () =>
    letters[Math.floor(Math.random() * letters.length)]
  ).join("");

  cy.wait(1000);
  cy.get(this.locators.communicationtemplate).click();
  cy.wait(1000);

  // ✅ Same structure as 186
  cy.get(this.locators.entryPoint).select('Collection');
  cy.wait(2000);

  cy.get(this.locators.channelType).select('Letter');
  cy.wait(2000);

  cy.get(this.locators.recipientType).select('Customer');
  cy.wait(2000);

  cy.get(this.locators.templatename).type(randomname);
  cy.wait(1000);

  // Default English body first
  cy.get(this.locators.teluguTemplateBody)
    .type("Please create one Email Communication template");
  cy.wait(1000);

  cy.get(this.locators.selectlanguage).click();
  cy.wait(1000);

  cy.get(this.locators.clickondropdownlanguage).click();
  cy.wait(1000);

  cy.get(this.locators.selectHindiLanguage)
    .contains('Telugu')
    .click();
  cy.wait(1000);

  cy.get(this.locators.addlanguage).click();
  cy.wait(1000);

  cy.get(this.locators.selectTeluguTemplate).click();
  cy.wait(1000);

  const teluguSentences = [
    "మీ పేరు ఏమిటి",
    "నేను పుణె నుండి వచ్చాను",
    "ఈ సమాచారం సరైనదేనా",
    "దయచేసి ఇక్కడ సంతకం చేయండి",
    "మనము కొనసాగవచ్చు",
    "నాకు సమాధానం పంపండి",
    "మీకు స్వాగతం",
    "ఈ పేజీ చదివి పూర్తిచేయండి",
    "దయచేసి కొన్ని క్షణాలు వేచివుండండి",
    "మీ అభ్యర్థన నమోదు చేయబడింది"
  ];

  const telugusentence =
    teluguSentences[Math.floor(Math.random() * teluguSentences.length)];

  cy.get(this.locators.teluguTemplateBody).type(telugusentence);
  cy.wait(1000);

  cy.get(this.locators.createtemplate).click();
  cy.wait(1000);

  cy.get('.toast-message')
    .contains('created successfully.')
    .should('be.visible');

  cy.wait(1000);
}
  CreateCommunicationTemplate192() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
     cy.get(this.locators.entryPoint).select('Collection');
  cy.wait(2000);
  cy.get(this.locators.channelType).select('Letter');
  cy.wait(2000);
  cy.get(this.locators.recipientType).select('Customer');
  cy.wait(2000);
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get('[title="Add Var"]').click({force:true});
    cy.wait(2000);
    cy.get('app-template-variable-mapping > .template-variable-mapping > p > span').click({force:true});
    cy.wait(2000);
     cy.get(this.locators.clickondropdown).click();
    cy.wait(1000);
    cy.get('div[role="listbox"] .ng-option').then($options => {
      const count = $options.length;
      const randomIndex = Math.floor(Math.random() * count);
      cy.wrap($options[randomIndex]).click();
    });
    cy.get(this.locators.clickonmap).click();
  cy.wait(2000);
    cy.get(this.locators.selectlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.clickondropdownlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.selectHindiLanguage).contains('Hindi').click();
    cy.wait(1000);
    cy.get(this.locators.addlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.selectHindiTemplate).click();
    cy.wait(1000);
    cy.get('[title="Add Var"]').click({force:true});
    cy.wait(2000);
    cy.get('app-template-variable-mapping > .template-variable-mapping > p > span').click({force:true});
    cy.wait(2000);
     cy.get(this.locators.clickondropdown).click();
    cy.wait(1000);
    cy.get('div[role="listbox"] .ng-option').then($options => {
      const count = $options.length;
      const randomIndex = Math.floor(Math.random() * count);
      cy.wrap($options[randomIndex]).click();
    });
    cy.get(this.locators.clickonmap).click();
    cy.wait(1000);
    const hindiSentences = [
      "आपका नाम क्या है?",                // What is your name?
      "मैं दिल्ली से आया हूँ।",           // I am from Delhi.
      "यह जानकारी सही है क्या?",         // Is this information correct?
      "कृपया यहाँ हस्ताक्षर करें।",      // Please sign here.
      "हम आगे बढ़ सकते हैं।",            // We can proceed further.
      "उत्तर भेजिए।",                    // Send the answer.
      "आपका स्वागत है!",                // You are welcome!
      "इस पृष्ठ को पूरा पढ़ें।",         // Read this page completely.
      "कृपया थोड़ी देर प्रतीक्षा करें।", // Please wait a moment.
      "आपका अनुरोध दर्ज कर लिया गया है।" // Your request has been recorded.
    ];
    const hindiSentence = hindiSentences[Math.floor(Math.random() * hindiSentences.length)];
    cy.get(this.locators.hindiTemplateBody).type(hindiSentence);
    cy.wait(1000);
    cy.get(this.locators.createtemplate).click();
    cy.wait(1000);
    cy.get('.toast-message').contains('created successfully.').should('be.visible')
    cy.wait(1000);
  }
CreateCommunicationTemplate193() {
  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");

  cy.wait(1000);
  cy.get(this.locators.communicationtemplate).click();
  cy.wait(1000);

  cy.get(this.locators.entryPoint).select('Collection');
  cy.wait(2000);
  cy.get(this.locators.channelType).select('Letter');
  cy.wait(2000);
  cy.get(this.locators.recipientType).select('Customer');
  cy.wait(2000);

  cy.get(this.locators.templatename).type(randomname);
  cy.wait(1000);

  // -------- First Variable Mapping --------
  cy.get('[title="Add Var"]').click({ force: true });
  cy.wait(2000);
  cy.get('app-template-variable-mapping > .template-variable-mapping > p > span').click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.clickondropdown).click();
  cy.wait(1000);

  cy.get('div[role="listbox"] .ng-option').then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length);
    cy.wrap($options[randomIndex]).click();
  });

  cy.get(this.locators.clickonmap).click();
  cy.wait(2000);

  cy.get(".editor-container")
    .type(' Please create one Email Communication template');
  cy.wait(2000);

  // -------- Language Selection --------
  cy.get(this.locators.selectlanguage).click();
  cy.wait(1000);
  cy.get(this.locators.clickondropdownlanguage).click();
  cy.wait(1000);
  cy.get(this.locators.selectHindiLanguage).contains('Marathi').click();
  cy.wait(1000);
  cy.get(this.locators.addlanguage).click();
  cy.wait(1000);

  cy.get(this.locators.selectMarathiTemplate).click();
  cy.wait(1000);

  // -------- Second Variable Mapping --------
  cy.get('[title="Add Var"]').click({ force: true });
  cy.wait(2000);
  cy.get('app-template-variable-mapping > .template-variable-mapping > p > span').click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.clickondropdown).click();
  cy.wait(1000);

  cy.get('div[role="listbox"] .ng-option').then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length);
    cy.wrap($options[randomIndex]).click();
  });

  cy.get(this.locators.clickonmap).click();
  cy.wait(1000);

  const marathiSentences = [
    "तुमचं नाव काय आहे",
    "मी पुण्याहून आलो आहे.",
    "ही माहिती बरोबर आहे का",
    "कृपया येथे सही करा",
    "आपण पुढे चालू शकतो",
    "माझं उत्तर पाठवा",
    "तुमचं स्वागत आहे",
    "हे पान वाचून पूर्ण करा",
    "कृपया थोडा वेळ थांबा",
    "आपली विनंती नोंदवली गेली आहे"
  ];

  const marathiSentence = marathiSentences[Math.floor(Math.random() * marathiSentences.length)];
  cy.get(this.locators.marathiTemplateBody).type(marathiSentence);

  cy.wait(1000);
  cy.get(this.locators.createtemplate).click();
  cy.wait(1000);
  cy.get('.toast-message').contains('created successfully.').should('be.visible');
}

CreateCommunicationTemplate194() {
  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");

  cy.wait(1000);
  cy.get(this.locators.communicationtemplate).click();
  cy.wait(1000);

  cy.get(this.locators.entryPoint).select('Collection');
  cy.wait(2000);
  cy.get(this.locators.channelType).select('Letter');
  cy.wait(2000);
  cy.get(this.locators.recipientType).select('Customer');
  cy.wait(2000);

  cy.get(this.locators.templatename).type(randomname);
  cy.wait(1000);

  // First Variable Mapping
  cy.get('[title="Add Var"]').click({ force: true });
  cy.wait(2000);
  cy.get('app-template-variable-mapping > .template-variable-mapping > p > span').click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.clickondropdown).click();
  cy.wait(1000);
  cy.get('div[role="listbox"] .ng-option').then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length);
    cy.wrap($options[randomIndex]).click();
  });
  cy.get(this.locators.clickonmap).click();
  cy.wait(2000);

  cy.get(".editor-container")
    .type(' Please create one Email Communication template');
  cy.wait(2000);

  // Language Selection
  cy.get(this.locators.selectlanguage).click();
  cy.wait(1000);
  cy.get(this.locators.clickondropdownlanguage).click();
  cy.wait(1000);
  cy.get(this.locators.selectHindiLanguage).contains('Kannada').click();
  cy.wait(1000);
  cy.get(this.locators.addlanguage).click();
  cy.wait(1000);

  cy.get(this.locators.selectKannadaTemplate).click();
  cy.wait(1000);

  // Second Variable Mapping
  cy.get('[title="Add Var"]').click({ force: true });
  cy.wait(2000);
  cy.get('app-template-variable-mapping > .template-variable-mapping > p > span').click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.clickondropdown).click();
  cy.wait(1000);
  cy.get('div[role="listbox"] .ng-option').then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length);
    cy.wrap($options[randomIndex]).click();
  });
  cy.get(this.locators.clickonmap).click();
  cy.wait(1000);

  const kannadaSentences = [
    "ನಿಮ್ಮ ಹೆಸರು ಏನು",
    "ನಾನು ಪುಣೆಯಿಂದ ಬಂದಿದ್ದೇನೆ",
    "ಈ ಮಾಹಿತಿ ಸರಿಯಾಗಿದೆ",
    "ದಯವಿಟ್ಟು ಇಲ್ಲಿ ಸಹಿ ಮಾಡಿ",
    "ನಾವು ಮುಂದುವರಿಯಬಹುದು",
    "ನನ್ನ ಉತ್ತರ ಕಳುಹಿಸಿ",
    "ನಿಮ್ಮ ಸ್ವಾಗತ ಇದೆ",
    "ಈ ಪುಟವನ್ನು ಓದಿ ಪೂರ್ಣಗೊಳಿಸಿ",
    "ದಯವಿಟ್ಟು ಸ್ವಲ್ಪ ಕ್ಷಣ ನಿರೀಕ್ಷಿಸಿ",
    "ನಿಮ್ಮ ವಿನಂತಿಯನ್ನು ದಾಖಲಿಸಲಾಗಿದೆ"
  ];

  const kannadaSentence = kannadaSentences[Math.floor(Math.random() * kannadaSentences.length)];
  cy.get(this.locators.kannadaTemplateBody).type(kannadaSentence);

  cy.wait(1000);
  cy.get(this.locators.createtemplate).click();
  cy.wait(1000);
  cy.get('.toast-message').contains('created successfully.').should('be.visible');
}

CreateCommunicationTemplate195() {
  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");

  cy.wait(1000);
  cy.get(this.locators.communicationtemplate).click();
  cy.wait(1000);

  cy.get(this.locators.entryPoint).select('Collection');
  cy.wait(2000);
  cy.get(this.locators.channelType).select('Letter');
  cy.wait(2000);
  cy.get(this.locators.recipientType).select('Customer');
  cy.wait(2000);

  cy.get(this.locators.templatename).type(randomname);
  cy.wait(1000);

  // First Variable Mapping
  cy.get('[title="Add Var"]').click({ force: true });
  cy.wait(2000);
  cy.get('app-template-variable-mapping > .template-variable-mapping > p > span').click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.clickondropdown).click();
  cy.wait(1000);
  cy.get('div[role="listbox"] .ng-option').then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length);
    cy.wrap($options[randomIndex]).click();
  });
  cy.get(this.locators.clickonmap).click();
  cy.wait(2000);

  cy.get(".editor-container")
    .type(' Please create one Email Communication template');
  cy.wait(2000);

  // Language Selection
  cy.get(this.locators.selectlanguage).click();
  cy.wait(1000);
  cy.get(this.locators.clickondropdownlanguage).click();
  cy.wait(1000);
  cy.get(this.locators.selectHindiLanguage).contains('Malayalam').click();
  cy.wait(1000);
  cy.get(this.locators.addlanguage).click();
  cy.wait(1000);

  cy.get(this.locators.selectMalayalamTemplate).click();
  cy.wait(1000);

  // Second Variable Mapping
  cy.get('[title="Add Var"]').click({ force: true });
  cy.wait(2000);
  cy.get('app-template-variable-mapping > .template-variable-mapping > p > span').click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.clickondropdown).click();
  cy.wait(1000);
  cy.get('div[role="listbox"] .ng-option').then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length);
    cy.wrap($options[randomIndex]).click();
  });
  cy.get(this.locators.clickonmap).click();
  cy.wait(1000);

  const malayalamSentences = [
    "നിന്റെ പേര് എന്താണ്",
    "ഞാൻ പുനെയിൽ നിന്ന് വന്നതാണ്",
    "ഈ വിവരങ്ങൾ ശരിയാണല്ലോ",
    "ദയവായി ഇവിടെ ഒപ്പിടുക",
    "നമുക്ക് തുടരാം",
    "എനിക്ക് ഉത്തരമയക്കൂ",
    "സ്വാഗതം",
    "ഈ പേജ് വായിച്ചു പൂർത്തിയാക്കുക",
    "ദയവായി കുറച്ച് നേരം കാത്തിരിക്കുക",
    "നിന്റെ അഭ്യർത്ഥന രജിസ്റ്റർ ചെയ്തിരിക്കുന്നു"
  ];

  const malayalamSentence = malayalamSentences[Math.floor(Math.random() * malayalamSentences.length)];
  cy.get(this.locators.malayalamTemplateBody).type(malayalamSentence);

  cy.wait(1000);
  cy.get(this.locators.createtemplate).click();
  cy.wait(1000);
  cy.get('.toast-message').contains('created successfully.').should('be.visible');
}

CreateCommunicationTemplate196() {
  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");

  cy.wait(1000);
  cy.get(this.locators.communicationtemplate).click();
  cy.wait(1000);

  cy.get(this.locators.entryPoint).select('Collection');
  cy.wait(2000);
  cy.get(this.locators.channelType).select('Letter');
  cy.wait(2000);
  cy.get(this.locators.recipientType).select('Customer');
  cy.wait(2000);

  cy.get(this.locators.templatename).type(randomname);
  cy.wait(1000);

  // -------- First Variable Mapping --------
  cy.get('[title="Add Var"]').click({ force: true });
  cy.wait(2000);
  cy.get('app-template-variable-mapping > .template-variable-mapping > p > span').click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.clickondropdown).click();
  cy.wait(1000);

  cy.get('div[role="listbox"] .ng-option').then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length);
    cy.wrap($options[randomIndex]).click();
  });

  cy.get(this.locators.clickonmap).click();
  cy.wait(2000);

  cy.get(".editor-container")
    .type(' Please create one Email Communication template');
  cy.wait(2000);

  // -------- Language Selection --------
  cy.get(this.locators.selectlanguage).click();
  cy.wait(1000);
  cy.get(this.locators.clickondropdownlanguage).click();
  cy.wait(1000);
  cy.get(this.locators.selectHindiLanguage).contains('Tamil').click();
  cy.wait(1000);
  cy.get(this.locators.addlanguage).click();
  cy.wait(1000);

  cy.get(this.locators.selectTamilTemplate).click();
  cy.wait(1000);

  // -------- Second Variable Mapping --------
  cy.get('[title="Add Var"]').click({ force: true });
  cy.wait(2000);
  cy.get('app-template-variable-mapping > .template-variable-mapping > p > span').click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.clickondropdown).click();
  cy.wait(1000);

  cy.get('div[role="listbox"] .ng-option').then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length);
    cy.wrap($options[randomIndex]).click();
  });

  cy.get(this.locators.clickonmap).click();
  cy.wait(1000);

  const tamilSentences = [
    "உங்கள் பெயர் என்ன",
    "நான் புனேயிலிருந்து வந்தேன்",
    "இந்த தகவல் சரியானதா",
    "தயவுசெய்து இங்கு கையொப்பமிடவும்",
    "நாம் தொடரலாம்",
    "எனது பதிலை அனுப்பு",
    "நீங்கள் வரவேற்கப்படுகிறீர்கள்",
    "இந்த பக்கத்தை வாசித்து முடிக்கவும்",
    "தயவுசெய்து சிறிது நேரம் காத்திருக்கவும்",
    "உங்கள் கோரிக்கை பதிவாகியுள்ளது"
  ];

  const tamilSentence = tamilSentences[Math.floor(Math.random() * tamilSentences.length)];
  cy.get(this.locators.tamilTemplateBody).type(tamilSentence);

  cy.wait(1000);
  cy.get(this.locators.createtemplate).click();
  cy.wait(1000);
  cy.get('.toast-message').contains('created successfully.').should('be.visible');
}

CreateCommunicationTemplate197() {
  cy.wait(4000);
  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");

  cy.wait(1000);
  cy.get(this.locators.communicationtemplate).click();
  cy.wait(1000);

  cy.get(this.locators.entryPoint).select('Collection');
  cy.wait(2000);
  cy.get(this.locators.channelType).select('Letter');
  cy.wait(2000);
  cy.get(this.locators.recipientType).select('Customer');
  cy.wait(2000);

  cy.get(this.locators.templatename).type(randomname);
  cy.wait(1000);

  // -------- First Variable Mapping --------
  cy.get('[title="Add Var"]').click({ force: true });
  cy.wait(2000);
  cy.get('app-template-variable-mapping > .template-variable-mapping > p > span').click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.clickondropdown).click();
  cy.wait(1000);

  cy.get('div[role="listbox"] .ng-option').then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length);
    cy.wrap($options[randomIndex]).click();
  });

  cy.get(this.locators.clickonmap).click();
  cy.wait(2000);

  cy.get(".editor-container")
    .type(' Please create one Email Communication template');
  cy.wait(2000);

  // -------- Language Selection --------
  cy.get(this.locators.selectlanguage).click();
  cy.wait(1000);
  cy.get(this.locators.clickondropdownlanguage).click();
  cy.wait(1000);
  cy.get(this.locators.selectHindiLanguage).contains('Telugu').click();
  cy.wait(1000);
  cy.get(this.locators.addlanguage).click();
  cy.wait(1000);

  cy.get(this.locators.selectTeluguTemplate).click();
  cy.wait(1000);

  // -------- Second Variable Mapping --------
  cy.get('[title="Add Var"]').click({ force: true });
  cy.wait(2000);
  cy.get('app-template-variable-mapping > .template-variable-mapping > p > span').click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.clickondropdown).click();
  cy.wait(1000);

  cy.get('div[role="listbox"] .ng-option').then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length);
    cy.wrap($options[randomIndex]).click();
  });

  cy.get(this.locators.clickonmap).click();
  cy.wait(1000);

  const teluguSentences = [
    "మీ పేరు ఏమిటి",
    "నేను పుణె నుండి వచ్చాను",
    "ఈ సమాచారం సరైనదేనా",
    "దయచేసి ఇక్కడ సంతకం చేయండి",
    "మనము కొనసాగవచ్చు",
    "నాకు సమాధానం పంపండి",
    "మీకు స్వాగతం",
    "ఈ పేజీ చదివి పూర్తిచేయండి",
    "దయచేసి కొన్ని క్షణాలు వేచివుండండి",
    "మీ అభ్యర్థన నమోదు చేయబడింది"
  ];

  const teluguSentence = teluguSentences[Math.floor(Math.random() * teluguSentences.length)];
  cy.get(this.locators.teluguTemplateBody).type(teluguSentence);

  cy.wait(1000);
  cy.get(this.locators.createtemplate).click();
  cy.wait(1000);
  cy.get('.toast-message').contains('created successfully.').should('be.visible');
}

  CreateCommunicationTemplate198() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.wait(1000);
  cy.get(this.locators.communicationtemplate).click();
  cy.wait(1000);
  cy.get(this.locators.entryPoint).select('Collection');
  cy.wait(2000);
  cy.get(this.locators.channelType).select('Notification');
  cy.wait(2000);
  cy.get(this.locators.recipientType).select('Agent');
  cy.wait(2000);
    cy.get(this.locators.templatename).type(randomname);
  cy.wait(1000);
  cy.get(this.locators.Notification_header).type('New Header');
  cy.wait(2000);
 cy.get(this.locators.templatebody).type("Please create one Email Communication template");
    cy.wait(1000);
    cy.get(this.locators.selectlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.clickondropdownlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.selectHindiLanguage).contains('Hindi').click();
    cy.wait(1000);
    cy.get(this.locators.addlanguage).click();
    cy.wait(1000);
 
    cy.get(this.locators.selectHindiTemplate).click();
    cy.wait(1000);
    const hindiSentences = [
      "आपका नाम क्या है?",                // What is your name?
      "मैं दिल्ली से आया हूँ।",           // I am from Delhi.
      "यह जानकारी सही है क्या?",         // Is this information correct?
      "कृपया यहाँ हस्ताक्षर करें।",      // Please sign here.
      "हम आगे बढ़ सकते हैं।",            // We can proceed further.
      "उत्तर भेजिए।",                    // Send the answer.
      "आपका स्वागत है!",                // You are welcome!
      "इस पृष्ठ को पूरा पढ़ें।",         // Read this page completely.
      "कृपया थोड़ी देर प्रतीक्षा करें।", // Please wait a moment.
      "आपका अनुरोध दर्ज कर लिया गया है।" // Your request has been recorded.
    ];
    const hindiSentence = hindiSentences[Math.floor(Math.random() * hindiSentences.length)];
    cy.get(this.locators.hindiTemplateBody).type(hindiSentence);
    cy.wait(1000);
    cy.get(this.locators.Notification_header).type('New Header');
    cy.wait(2000);
    cy.get(this.locators.createtemplate).click();
    cy.wait(1000);
    cy.get('.toast-message').contains('created successfully.').should('be.visible')
    cy.wait(1000);
  }

  CreateCommunicationTemplate199() {

  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomname = "Template " + Array.from({ length: 8 }, () => 
    letters[Math.floor(Math.random() * letters.length)]
  ).join("");

  cy.wait(1000);
  cy.get(this.locators.communicationtemplate).click();
  cy.wait(1000);

  cy.get(this.locators.entryPoint).select('Collection');
  cy.wait(2000);

  cy.get(this.locators.channelType).select('Notification');
  cy.wait(2000);

  cy.get(this.locators.recipientType).select('Agent');
  cy.wait(2000);

  cy.get(this.locators.templatename).type(randomname);
  cy.wait(1000);

  cy.get(this.locators.Notification_header).type('New Header');
  cy.wait(2000);

  cy.get(this.locators.templatebody)
    .type("Please create one Email Communication template");
  cy.wait(1000);

  // Language Selection
  cy.get(this.locators.selectlanguage).click();
  cy.wait(1000);
  cy.get(this.locators.clickondropdownlanguage).click();
  cy.wait(1000);
  cy.get(this.locators.selectHindiLanguage).contains('Marathi').click();
  cy.wait(1000);
  cy.get(this.locators.addlanguage).click();
  cy.wait(1000);

  cy.get(this.locators.selectMarathiTemplate).click();
  cy.wait(1000);

  const marathiSentences = [
    "तुमचं नाव काय आहे",
    "मी पुण्याहून आलो आहे.",
    "ही माहिती बरोबर आहे का",
    "कृपया येथे सही करा",
    "आपण पुढे चालू शकतो",
    "माझं उत्तर पाठवा",
    "तुमचं स्वागत आहे",
    "हे पान वाचून पूर्ण करा",
    "कृपया थोडा वेळ थांबा",
    "आपली विनंती नोंदवली गेली आहे"
  ];

  const marathisentence = marathiSentences[Math.floor(Math.random() * marathiSentences.length)];
  cy.get(this.locators.marathiTemplateBody).type(marathisentence);
  cy.wait(1000);
   cy.get(this.locators.Notification_header).type('New Header');
  cy.wait(2000);
  cy.get(this.locators.createtemplate).click();
  cy.wait(1000);

  cy.get('.toast-message')
    .contains('created successfully.')
    .should('be.visible');
}
 CreateCommunicationTemplate200() {

  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomname = "Template " + Array.from({ length: 8 }, () =>
    letters[Math.floor(Math.random() * letters.length)]
  ).join("");

  cy.wait(1000);
  cy.get(this.locators.communicationtemplate).click();
  cy.wait(1000);
  cy.get(this.locators.entryPoint).select('Collection');
  cy.wait(2000);
  cy.get(this.locators.channelType).select('Notification');
  cy.wait(2000);
  cy.get(this.locators.recipientType).select('Agent');
  cy.wait(2000);
  cy.get(this.locators.templatename).type(randomname);
  cy.wait(1000);
  cy.get(this.locators.Notification_header).type('New Header');
  cy.wait(2000);
  cy.get(this.locators.templatebody)
    .type("Please create one Email Communication template");
  cy.wait(1000);

  // Language Selection
  cy.get(this.locators.selectlanguage).click();
  cy.wait(1000);
  cy.get(this.locators.clickondropdownlanguage).click();
  cy.wait(1000);
  cy.get(this.locators.selectHindiLanguage).contains('Kannada').click();
  cy.wait(1000);
  cy.get(this.locators.addlanguage).click();
  cy.wait(1000);

  cy.get(this.locators.selectKannadaTemplate).click();
  cy.wait(1000);

  const kannadaSentences = [
    "ನಿಮ್ಮ ಹೆಸರು ಏನು",
    "ನಾನು ಪುಣೆಯಿಂದ ಬಂದಿದ್ದೇನೆ",
    "ಈ ಮಾಹಿತಿ ಸರಿಯಾಗಿದೆ",
    "ದಯವಿಟ್ಟು ಇಲ್ಲಿ ಸಹಿ ಮಾಡಿ",
    "ನಾವು ಮುಂದುವರಿಯಬಹುದು",
    "ನನ್ನ ಉತ್ತರ ಕಳುಹಿಸಿ",
    "ನಿಮ್ಮ ಸ್ವಾಗತ ಇದೆ",
    "ಈ ಪುಟವನ್ನು ಓದಿ ಪೂರ್ಣಗೊಳಿಸಿ",
    "ದಯವಿಟ್ಟು ಸ್ವಲ್ಪ ಕ್ಷಣ ನಿರೀಕ್ಷಿಸಿ",
    "ನಿಮ್ಮ ವಿನಂತಿಯನ್ನು ದಾಖಲಿಸಲಾಗಿದೆ"
  ];

  const kannadasentence =
    kannadaSentences[Math.floor(Math.random() * kannadaSentences.length)];

  cy.get(this.locators.kannadaTemplateBody).type(kannadasentence);
  cy.wait(1000);
  cy.get(this.locators.Notification_header).type('New Header');
  cy.wait(2000);
  cy.get(this.locators.createtemplate).click();
  cy.wait(1000);

  cy.get('.toast-message')
    .contains('created successfully.')
    .should('be.visible');
}
 CreateCommunicationTemplate201() {

  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomname = "Template " + Array.from({ length: 8 }, () =>
    letters[Math.floor(Math.random() * letters.length)]
  ).join("");

  cy.wait(1000);
  cy.get(this.locators.communicationtemplate).click();
  cy.wait(1000);

  cy.get(this.locators.entryPoint).select('Collection');
  cy.wait(2000);

  cy.get(this.locators.channelType).select('Notification');
  cy.wait(2000);

  cy.get(this.locators.recipientType).select('Agent');
  cy.wait(2000);

  cy.get(this.locators.templatename).type(randomname);
  cy.wait(1000);

  cy.get(this.locators.Notification_header).type('New Header');
  cy.wait(2000);

  cy.get(this.locators.templatebody)
    .type("Please create one Email Communication template");
  cy.wait(1000);

  cy.get(this.locators.selectlanguage).click();
  cy.wait(1000);
  cy.get(this.locators.clickondropdownlanguage).click();
  cy.wait(1000);
  cy.get(this.locators.selectHindiLanguage).contains('Malayalam').click();
  cy.wait(1000);
  cy.get(this.locators.addlanguage).click();
  cy.wait(1000);

  cy.get(this.locators.selectMalayalamTemplate).click();
  cy.wait(1000);

  const malayalamSentences = [
    "നിന്റെ പേര് എന്താണ്",
    "ഞാൻ പുനെയിൽ നിന്ന് വന്നതാണ്",
    "ഈ വിവരങ്ങൾ ശരിയാണല്ലോ",
    "ദയവായി ഇവിടെ ഒപ്പിടുക",
    "നമുക്ക് തുടരാം",
    "എനിക്ക് ഉത്തരമയക്കൂ",
    "സ്വാഗതം",
    "ഈ പേജ് വായിച്ചു പൂർത്തിയാക്കുക",
    "ദയവായി കുറച്ച് നേരം കാത്തിരിക്കുക",
    "നിന്റെ അഭ്യർത്ഥന രജിസ്റ്റർ ചെയ്തിരിക്കുന്നു"
  ];

  const malayalamsentence =
    malayalamSentences[Math.floor(Math.random() * malayalamSentences.length)];

  cy.get(this.locators.malayalamTemplateBody).type(malayalamsentence);
  cy.wait(1000);
  cy.get(this.locators.Notification_header).type('New Header');
  cy.wait(2000);
  cy.get(this.locators.createtemplate).click();
  cy.wait(1000);

  cy.get('.toast-message')
    .contains('created successfully.')
    .should('be.visible');
}
  CreateCommunicationTemplate202() {

  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomname = "Template " + Array.from({ length: 8 }, () =>
    letters[Math.floor(Math.random() * letters.length)]
  ).join("");

  cy.wait(1000);
  cy.get(this.locators.communicationtemplate).click();
  cy.wait(1000);

  cy.get(this.locators.entryPoint).select('Collection');
  cy.wait(2000);

  cy.get(this.locators.channelType).select('Notification');
  cy.wait(2000);

  cy.get(this.locators.recipientType).select('Agent');
  cy.wait(2000);

  cy.get(this.locators.templatename).type(randomname);
  cy.wait(1000);

  cy.get(this.locators.Notification_header).type('New Header');
  cy.wait(2000);

  cy.get(this.locators.templatebody)
    .type("Please create one Email Communication template");
  cy.wait(1000);

  cy.get(this.locators.selectlanguage).click();
  cy.wait(1000);
  cy.get(this.locators.clickondropdownlanguage).click();
  cy.wait(1000);
  cy.get(this.locators.selectHindiLanguage).contains('Tamil').click();
  cy.wait(1000);
  cy.get(this.locators.addlanguage).click();
  cy.wait(1000);

  cy.get(this.locators.selectTamilTemplate).click();
  cy.wait(1000);

  const tamilSentences = [
    "உங்கள் பெயர் என்ன",
    "நான் புனேயிலிருந்து வந்தேன்",
    "இந்த தகவல் சரியானதா",
    "தயவுசெய்து இங்கு கையொப்பமிடவும்",
    "நாம் தொடரலாம்",
    "எனது பதிலை அனுப்பு",
    "நீங்கள் வரவேற்கப்படுகிறீர்கள்",
    "இந்த பக்கத்தை வாசித்து முடிக்கவும்",
    "தயவுசெய்து சிறிது நேரம் காத்திருக்கவும்",
    "உங்கள் கோரிக்கை பதிவாகியுள்ளது"
  ];

  const tamilsentence =
    tamilSentences[Math.floor(Math.random() * tamilSentences.length)];

  cy.get(this.locators.tamilTemplateBody).type(tamilsentence);
  cy.wait(1000);
  cy.get(this.locators.Notification_header).type('New Header');
  cy.wait(3000);
  cy.get(this.locators.createtemplate).click();
  cy.wait(1000);

  cy.get('.toast-message')
    .contains('created successfully.')
    .should('be.visible');
}

 CreateCommunicationTemplate203() {

  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomname = "Template " + Array.from({ length: 8 }, () =>
    letters[Math.floor(Math.random() * letters.length)]
  ).join("");

  cy.wait(1000);
  cy.get(this.locators.communicationtemplate).click();
  cy.wait(1000);

  cy.get(this.locators.entryPoint).select('Collection');
  cy.wait(2000);

  cy.get(this.locators.channelType).select('Notification');
  cy.wait(2000);

  cy.get(this.locators.recipientType).select('Agent');
  cy.wait(2000);

  cy.get(this.locators.templatename).type(randomname);
  cy.wait(1000);

  cy.get(this.locators.Notification_header).type('New Header');
  cy.wait(2000);

  cy.get(this.locators.templatebody)
    .type("Please create one Email Communication template");
  cy.wait(1000);

  cy.get(this.locators.selectlanguage).click();
  cy.wait(1000);
  cy.get(this.locators.clickondropdownlanguage).click();
  cy.wait(1000);
  cy.get(this.locators.selectHindiLanguage).contains('Telugu').click();
  cy.wait(1000);
  cy.get(this.locators.addlanguage).click();
  cy.wait(1000);

  cy.get(this.locators.selectTeluguTemplate).click();
  cy.wait(1000);

  const teluguSentences = [
    "మీ పేరు ఏమిటి",
    "నేను పుణె నుండి వచ్చాను",
    "ఈ సమాచారం సరైనదేనా",
    "దయచేసి ఇక్కడ సంతకం చేయండి",
    "మనము కొనసాగవచ్చు",
    "నాకు సమాధానం పంపండి",
    "మీకు స్వాగతం",
    "ఈ పేజీ చదివి పూర్తిచేయండి",
    "దయచేసి కొన్ని క్షణాలు వేచివుండండి",
    "మీ అభ్యర్థన నమోదు చేయబడింది"
  ];

  const telugusentence =
    teluguSentences[Math.floor(Math.random() * teluguSentences.length)];

  cy.get(this.locators.teluguTemplateBody).type(telugusentence);
  cy.wait(1000);
  cy.get(this.locators.Notification_header).type('New Header');
  cy.wait(3000);
  cy.get(this.locators.createtemplate).click();
  cy.wait(1000);

  cy.get('.toast-message')
    .contains('created successfully.')
    .should('be.visible');
}
  AccountDetailsScreeen196() {
    // Add a global exception handler for uncaught exceptions
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // returning false here prevents Cypress from failing the test
      return false;
    });

    cy.get('.ng-arrow-wrapper').click();
    cy.wait(1000);
    cy.contains('span.ng-option-label', 'Customer Name').click();
    cy.wait(1000);
    cy.get(this.locators.customer_Name).type('A dhanalaxmi', { force: true });
    cy.get('#search-submit-button').click();
    cy.get("tr.ng-star-inserted > :nth-child(4) > a").click();
    cy.wait(2000);
    cy.get('#toggleButton > img').click();
    cy.wait(2000);
    cy.get(':nth-child(12) > .dropdown-item').click({ force: true })


  }

  CreateCommunicationTask177() {
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.createcommunicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.clickonletter).click();
    cy.wait(1000);
    cy.get(this.locators.createnewtemplate).click();
    cy.wait(1000);
    cy.get('.btn-secondary').click();
    cy.wait(1000);
    const randomName = faker.person.firstName();
    cy.get(this.locators.templatename).type(randomName);
    cy.wait(1000);
    cy.get(':nth-child(3) > .form-control-group > .form-control').type('my home');
    cy.wait(1000);
    cy.get(':nth-child(6) > .form-control-group > .form-control').type('body');
    cy.wait(1000);
    cy.get(':nth-child(4) > .form-control-group > .form-control').type('subject');
    cy.wait(1000);
    cy.get('.btn-secondary').click();
    cy.wait(1000);
    cy.contains('Success!').should('be.visible');
    cy.wait(1000);

  }

  CreateCommunicationTask178() {
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.createcommunicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.clickonletter).click();
    cy.wait(1000);
    cy.get(this.locators.createnewtemplate).click();
    cy.wait(1000);
    cy.get('.btn-secondary').click();
    cy.wait(1000);
    //const randomName = faker.person.firstName();
    cy.get(this.locators.templatename).type('Lane');
    cy.wait(1000);
    cy.get(':nth-child(3) > .form-control-group > .form-control').type('my home');
    cy.wait(1000);
    cy.get(':nth-child(6) > .form-control-group > .form-control').type('body');
    cy.wait(1000);
    cy.get(':nth-child(4) > .form-control-group > .form-control').type('subject');
    cy.wait(1000);
    cy.get('.btn-secondary').click();
    cy.wait(1000);
    cy.contains('A template with same name already exists.').should('be.visible');
    cy.wait(1000);

  }

  CreateCommunicationTask179() {
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.createcommunicationtemplate).click();
    cy.wait(1000);
  }

  CreateCommunicationTemplate160() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.entryPoint).select('Collection');
    cy.wait(2000);
    cy.get(this.locators.channelType).select('Letter');
    cy.wait(2000);
    cy.get('.editor-container').type('New');
    cy.wait(2000);
    cy.get(this.locators.createtemplate).click();
    cy.wait(1000);
    cy.get('.toast-message').contains('created successfully.').should('be.visible')
    cy.wait(1000);
  }

  CreateCommunicationTask181() {
    cy.wait(2000);
    cy.get("a[title='Communication Template']").click();
    cy.wait(2000);
    cy.get(this.locators.create_communication_task).click();
    cy.wait(2000);
    cy.get(this.locators.template_Name).type('Test');
    cy.wait(2000);
    cy.get('#ngb-typeahead-1-0').click();
    cy.wait(1000);
    cy.get(this.locators.proceedToCreateCommunicationTask).click();
    cy.wait(1000);
    cy.get(this.locators.task_name).type('Communication Task');
    cy.wait(1000);
    // cy.get(this.locators.frequency_weekly).click();
    // cy.wait(1000);
    // cy.get('.col-sm-3 > .form-control').select('Sunday');
    // cy.wait(1000);
    // cy.get(this.locators.frequency_monthly).click();
    // cy.wait(1000);
    // cy.get(this.locators.datepicker).type('12/06/2024');

  }

  SearchCommunicationTemplate168() {
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.searchcommunicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.selecttemplatetype).select('Email');
    cy.wait(1000);
    cy.get(':nth-child(3) > .form-control').type('2024-12-18')
    cy.wait(1000);
    cy.get(this.locators.searchtemplate).click();
    cy.wait(1000);
    cy.contains('Search Results').should('be.visible');
    cy.wait(200);
    // cy.get('[title="Enable"] > .fa').click();
    // cy.wait(1000);
    // cy.get('#confirm-dialog-okay').click();
    // cy.wait(1000);
    // cy.contains('Success!').should('be.visible');
    // cy.wait(1000);

  }

  SearchCommunicationTemplate170() {
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.searchcommunicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.selecttemplatetype).select('Email');
    cy.wait(1000);
    cy.get(':nth-child(3) > .form-control').type('2024-12-18')
    cy.wait(1000);
    cy.get(this.locators.searchtemplate).click();
    cy.wait(1000);
    cy.contains('Search Results').should('be.visible');
    cy.wait(200);
  }


  SearchCommunicationTemplate171() {
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.searchcommunicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.selecttemplatetype).select('SMS');
    cy.wait(1000);
    cy.get(':nth-child(3) > .form-control').type('2024-11-06')
    cy.wait(1000);
    cy.get(this.locators.searchtemplate).click();
    cy.wait(1000);
    cy.contains('Search Results').should('be.visible');
    cy.wait(200);
  }

  AccountDetailsScreeen195() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // returning false here prevents Cypress from failing the test
      return false;
    });

    cy.wait(1000);
    cy.get(this.locators.customer_Name).type('A dhanalaxmi', { force: true });
    cy.wait(2000);

    cy.get('#search-submit-button').click();
    cy.wait(2000);
    cy.get(".link > a").click();

    cy.get('#toggleButton > img').click();
    cy.wait(2000);
    cy.get(':nth-child(12) > .dropdown-item').click({ force: true })

  }


  AccountDetailsScreeen197() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // returning false here prevents Cypress from failing the test
      return false;
    });

    cy.get('.ng-arrow-wrapper').click();
    cy.wait(1000);
    cy.contains('span.ng-option-label', 'Customer Name').click();

    cy.wait(1000);
    cy.get(this.locators.customer_Name).type('A dhanalaxmi', { force: true });
    cy.get('#search-submit-button').click();
    cy.get("tr.ng-star-inserted > :nth-child(4) > a").click();
    cy.wait(2000);
    cy.get('#toggleButton > img').click();
    cy.wait(2000);
    cy.get(':nth-child(12) > .dropdown-item').click({ force: true })



  }

  communication202() {
    cy.get(this.locators.communication).click();
    cy.wait(1000);
    cy.get(this.locators.uploadletterstatus).click();
    cy.wait(1000);
    cy.get(this.locators.selectcommunicationtask).click();
    cy.wait(1000);
    cy.get(this.locators.selecttextt).click();
    cy.wait(1000);
    cy.get(this.locators.communicationstatus).select('Generated');
    cy.wait(1000);
    cy.get(this.locators.downloadfile).click();
  }

  fileuploadcommunication202() {
    cy.wait(1000);
    const filePath = 'Cypress/downloads/executionHistory.xlsx'
    //cy.get(this.locators.clickonupload).click();
    cy.get(this.locators.returnedletters).click();
    cy.wait(1000);
    cy.get(this.locators.clickonupload).selectFile(filePath, { force: true });
    cy.wait(1000);
    cy.get(this.locators.yesconfirm).click();
    cy.wait(1000);
    cy.contains('File Uploaded Successfully.').should('be.visible');
    cy.wait(1000);
  }

  communication206() {
    cy.get(this.locators.communication).click();
    cy.wait(1000);
    cy.get(this.locators.uploadletterstatus).click();
    cy.wait(1000);
    cy.get(this.locators.selectcommunicationtask).click();
    cy.wait(1000);
    cy.get(this.locators.selecttextt).click();
    cy.wait(1000);
    cy.get(this.locators.communicationstatus).select('Generated');
    cy.wait(1000);
    cy.get(this.locators.downloadfile).click();
  }

  fileuploadcommunication206() {
    cy.wait(1000);
    const filePath = 'Cypress/downloads/executionHistory.xlsx'
    //cy.get(this.locators.clickonupload).click();
    cy.get(this.locators.returnedletters).click();
    cy.wait(1000);
    cy.get(this.locators.clickonupload).selectFile(filePath, { force: true });
    cy.wait(1000);
    cy.get(this.locators.yesconfirm).click();
    cy.wait(1000);
    cy.contains('File Uploaded Successfully.').should('be.visible');
    cy.wait(1000);
  }


  CreateCommunicationTask180() {
    cy.wait(1000);
    cy.get(this.locators.create_communication_task).click();
    cy.wait(1000);
    cy.get(this.locators.SMS).click();
    cy.wait(1000);
    cy.get(this.locators.template_Name).type('Automated SMS Templateuufahozwh');
    cy.wait(1000);
    cy.get(this.locators.nonnumericvalue).click();
    cy.wait(1000);
    cy.get(this.locators.proceedToCreateCommunicationTask).click();
    cy.wait(1000);
    cy.get(this.locators.communicationtaskname).type('Frank');
    cy.wait(1000);
    cy.get(this.locators.proceedbutton).click();
    cy.wait(1000);
    cy.get(this.locators.parameter).type('CUSTOMERNAME');
    cy.wait(1000);
    cy.get(this.locators.customername).click();
    cy.wait(1000);
    cy.get(this.locators.function).select('Equal to');
  }

  SearchCommunicationTask194() {
    cy.wait(1000);
    cy.get(this.locators.srch_cm_task).click();
    cy.wait(200);
    cy.get(this.locators.comm_chnl).select("SMS");
    cy.wait(200);
    cy.get(this.locators.srch).click();
    cy.wait(200);
    //cy.get(":nth-child(3) > :nth-child(7) > a").click();

    //cy.get(".modal-body > #flip-scroll > .table > tbody > :nth-child(1) > :nth-child(2) > a").click();
    cy.wait(200);


  }


}

export default CommunicationPage;