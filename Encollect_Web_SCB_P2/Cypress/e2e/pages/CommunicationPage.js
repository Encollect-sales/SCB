import { getLocators } from '../utils/locatorUtils';
import { getBaseUrl } from '../utils/configUtils';
import 'cypress-wait-until';
const { faker } = require('@faker-js/faker');

class CommunicationPage {
  constructor(locators) {
    this.locators = locators;
  }

  communicationModule() {
    cy.wait(2000);
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
    cy.get(this.locators.subjectline).type(subjectline);
    cy.wait(1000);
    cy.get(this.locators.templatebody).type("Please create one Email Communication template");
    cy.wait(1000);
    cy.get(this.locators.createtemplate).click();
    cy.wait(1000);
    cy.get('.toast-message').contains('created successfully.').should('be.visible')
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
    cy.get(this.locators.allowaccessno).click();
    cy.wait(1000);
    cy.get(this.locators.subjectline).type(subjectline);
    cy.wait(1000);
    cy.get(this.locators.templatebody).type("Please create one Email Communication template");
    cy.wait(1000);
    cy.get(this.locators.createtemplate).click();
    cy.wait(1000);
    cy.get('.toast-message').contains('created successfully.').should('be.visible')
    cy.wait(1000);
  }

  Communication154() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
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

  Communication155() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.selectsms).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.templatebody).type("Please create one Email Communication template");
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
    cy.get(this.locators.selectsms).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.allowaccessno).click();
    cy.wait(1000);
    cy.get(this.locators.templatebody).type("Please create one Email Communication template");
    cy.wait(1000);
    cy.get(this.locators.createtemplate).click();
    cy.wait(1000);
    cy.get('.toast-message').contains('created successfully.').should('be.visible')
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
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.selectsms).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.templatebody).type("Please create one Email Communication template");
    cy.wait(1000);
    cy.get(this.locators.addvariable).click();
    cy.wait(1000);
    cy.get(this.locators.addvarone).click();
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

  Communication158() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.selectsms).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.templatebody).type("Please create one Email Communication template");
    cy.wait(1000);
    cy.get(this.locators.addvariable).click();
    cy.wait(1000);
    cy.get(this.locators.addvarone).click();
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
    cy.get('.card-footer > .btn-outline-primary').click();
    cy.wait(1000);

  }

  Communication159() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.selectletter).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.templatebody).type("Please create one Email Communication template");
    cy.wait(1000);
    cy.get(this.locators.createtemplate).click();
    cy.wait(1000);
    cy.get('.toast-message').contains('created successfully.').should('be.visible')
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
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.selectletter).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.templatebody).type("Please create one Letter Communication template");
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
    cy.get('.card-footer > .btn-outline-primary').click();
    cy.wait(1000);
  }

  CreateCommunicationTemplate162() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.selectlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.clickondropdownlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.selectHindiLanguage).contains('Hindi').click();
    cy.wait(1000);
    cy.get(this.locators.addlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.subjectline).type(subjectline);
    cy.wait(1000);
    cy.get(this.locators.templatebody).type("Please create one Email Communication template");
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
    cy.get(this.locators.hindiEmailSubject).type(hindiSentence);
    cy.wait(1000);
    cy.get(this.locators.hindiTemplateBody).type(hindiSentence);
    cy.wait(1000);
    cy.get(this.locators.createtemplate).click();
    cy.wait(1000);
    cy.get('.toast-message').contains('created successfully.').should('be.visible')
    cy.wait(1000);
  }

  CreateCommunicationTemplate163() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.selectlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.clickondropdownlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.selectHindiLanguage).contains('Marathi').click();
    cy.wait(1000);
    cy.get(this.locators.addlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.subjectline).type(subjectline);
    cy.wait(1000);
    cy.get(this.locators.templatebody).type("Please create one Email Communication template");
    cy.wait(1000);
    cy.get(this.locators.selectMarathiTemplate).click();
    cy.wait(1000);
    const marathiSentences = [
      "तुमचं नाव काय आहे",                  // What is your name?
      "मी पुण्याहून आलो आहे.",              // I am from Pune.
      "ही माहिती बरोबर आहे का",           // Is this information correct?
      "कृपया येथे सही करा",               // Please sign here.
      "आपण पुढे चालू शकतो",               // We can proceed further.
      "माझं उत्तर पाठवा",                 // Send me the answer.
      "तुमचं स्वागत आहे",                 // You are welcome!
      "हे पान वाचून पूर्ण करा",           // Complete reading this page.
      "कृपया थोडा वेळ थांबा",             // Please wait a moment.
      "आपली विनंती नोंदवली गेली आहे"     // Your request has been recorded.
    ];
    const marathisentence = marathiSentences[Math.floor(Math.random() * marathiSentences.length)];
    cy.get(this.locators.marathiiEmailSubject).type(marathisentence);
    cy.wait(1000);
    cy.get(this.locators.marathiTemplateBody).type(marathisentence);
    cy.wait(1000);
    cy.get(this.locators.createtemplate).click();
    cy.wait(1000);
    cy.get('.toast-message').contains('created successfully.').should('be.visible')
    cy.wait(1000);
  }

  CreateCommunicationTemplate164() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.selectlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.clickondropdownlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.selectHindiLanguage).contains('Kannada').click();
    cy.wait(1000);
    cy.get(this.locators.addlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.subjectline).type(subjectline);
    cy.wait(1000);
    cy.get(this.locators.templatebody).type("Please create one Email Communication template");
    cy.wait(1000);
    cy.get(this.locators.selectKannadaTemplate).click();
    cy.wait(1000);
    const kannadaSentences = [
      "ನಿಮ್ಮ ಹೆಸರು ಏನು",                       // What is your name?
      "ನಾನು ಪುಣೆಯಿಂದ ಬಂದಿದ್ದೇನೆ",            // I am from Pune.
      "ಈ ಮಾಹಿತಿ ಸರಿಯಾಗಿದೆ",                     // Is this information correct?
      "ದಯವಿಟ್ಟು ಇಲ್ಲಿ ಸಹಿ ಮಾಡಿ",              // Please sign here.
      "ನಾವು ಮುಂದುವರಿಯಬಹುದು",                 // We can proceed further.
      "ನನ್ನ ಉತ್ತರ ಕಳುಹಿಸಿ",                  // Send me the answer.
      "ನಿಮ್ಮ ಸ್ವಾಗತ ಇದೆ",                     // You are welcome!
      "ಈ ಪುಟವನ್ನು ಓದಿ ಪೂರ್ಣಗೊಳಿಸಿ",           // Complete reading this page.
      "ದಯವಿಟ್ಟು ಸ್ವಲ್ಪ ಕ್ಷಣ ನಿರೀಕ್ಷಿಸಿ",        // Please wait a moment.
      "ನಿಮ್ಮ ವಿನಂತಿಯನ್ನು ದಾಖಲಿಸಲಾಗಿದೆ"       // Your request has been recorded.
    ];
    const kannadasentence = kannadaSentences[Math.floor(Math.random() * kannadaSentences.length)];
    cy.get(this.locators.kannadaEmailSubject).type(kannadasentence);
    cy.wait(1000);
    cy.get(this.locators.kannadaTemplateBody).type(kannadasentence);
    cy.wait(1000);
    cy.get(this.locators.createtemplate).click();
    cy.wait(1000);
    cy.get('.toast-message').contains('created successfully.').should('be.visible')
    cy.wait(1000);
  }

  CreateCommunicationTemplate165() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.selectlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.clickondropdownlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.selectHindiLanguage).contains('Malayalam').click();
    cy.wait(1000);
    cy.get(this.locators.addlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.subjectline).type(subjectline);
    cy.wait(1000);
    cy.get(this.locators.templatebody).type("Please create one Email Communication template");
    cy.wait(1000);
    cy.get(this.locators.selectMalayalamTemplate).click();
    cy.wait(1000);

    const malayalamSentences = [
      "നിന്റെ പേര് എന്താണ്",                       // What is your name
      "ഞാൻ പുനെയിൽ നിന്ന് വന്നതാണ്",            // I am from Pune
      "ഈ വിവരങ്ങൾ ശരിയാണല്ലോ",                   // This information is correct
      "ദയവായി ഇവിടെ ഒപ്പിടുക",                  // Please sign here
      "നമുക്ക് തുടരാം",                          // We can proceed further
      "എനിക്ക് ഉത്തരമയക്കൂ",                      // Send me the answer
      "സ്വാഗതം",                                // You are welcome
      "ഈ പേജ് വായിച്ചു പൂർത്തിയാക്കുക",          // Complete reading this page
      "ദയവായി കുറച്ച് നേരം കാത്തിരിക്കുക",         // Please wait a moment
      "നിന്റെ അഭ്യർത്ഥന രജിസ്റ്റർ ചെയ്തിരിക്കുന്നു" // Your request has been recorded
    ];

    // Optional: strip any lingering special characters just in case
    const sanitizedSentences = malayalamSentences.map(s => s.replace(/[^\u0D00-\u0D7F\s]/g, ''));
    const malayalamsentence = sanitizedSentences[Math.floor(Math.random() * sanitizedSentences.length)];
    cy.get(this.locators.malayalamEmailSubject).type(malayalamsentence);
    cy.wait(1000);
    cy.get(this.locators.malayalamTemplateBody).type(malayalamsentence);
    cy.wait(1000);
    cy.get(this.locators.createtemplate).click();
    cy.wait(1000);
    cy.get('.toast-message').contains('created successfully.').should('be.visible')
    cy.wait(1000);
  }

  CreateCommunicationTemplate166() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.selectlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.clickondropdownlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.selectHindiLanguage).contains('Tamil').click();
    cy.wait(1000);
    cy.get(this.locators.addlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.subjectline).type(subjectline);
    cy.wait(1000);
    cy.get(this.locators.templatebody).type("Please create one Email Communication template");
    cy.wait(1000);
    cy.get(this.locators.selectTamilTemplate).click();
    cy.wait(1000);

    const tamilSentences = [
      "உங்கள் பெயர் என்ன",                     // What is your name
      "நான் புனேயிலிருந்து வந்தேன்",           // I am from Pune
      "இந்த தகவல் சரியானதா",                  // Is this information correct
      "தயவுசெய்து இங்கு கையொப்பமிடவும்",       // Please sign here
      "நாம் தொடரலாம்",                        // We can proceed further
      "எனது பதிலை அனுப்பு",                  // Send me the answer
      "நீங்கள் வரவேற்கப்படுகிறீர்கள்",          // You are welcome
      "இந்த பக்கத்தை வாசித்து முடிக்கவும்",       // Complete reading this page
      "தயவுசெய்து சிறிது நேரம் காத்திருக்கவும்",  // Please wait a moment
      "உங்கள் கோரிக்கை பதிவாகியுள்ளது"         // Your request has been recorded
    ];

    // Optional sanitization (removes non-Tamil and non-space characters)
    const sanitizedTamilSentences = tamilSentences.map(s => s.replace(/[^\u0B80-\u0BFF\s]/g, ''));

    const tamilsentence = sanitizedTamilSentences[Math.floor(Math.random() * sanitizedTamilSentences.length)];

    cy.get(this.locators.tamilEmailSubject).type(tamilsentence);
    cy.wait(1000);
    cy.get(this.locators.tamilTemplateBody).type(tamilsentence);
    cy.wait(1000);
    cy.get(this.locators.createtemplate).click();
    cy.wait(1000);
    cy.get('.toast-message').contains('created successfully.').should('be.visible')
    cy.wait(1000);
  }

  CreateCommunicationTemplate167() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.selectlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.clickondropdownlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.selectHindiLanguage).contains('Telugu').click();
    cy.wait(1000);
    cy.get(this.locators.addlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.subjectline).type(subjectline);
    cy.wait(1000);
    cy.get(this.locators.templatebody).type("Please create one Email Communication template");
    cy.wait(1000);
    cy.get(this.locators.selectTeluguTemplate).click();
    cy.wait(1000);

    const teluguSentences = [
      "మీ పేరు ఏమిటి",                      // What is your name
      "నేను పుణె నుండి వచ్చాను",             // I am from Pune
      "ఈ సమాచారం సరైనదేనా",                // Is this information correct
      "దయచేసి ఇక్కడ సంతకం చేయండి",           // Please sign here
      "మనము కొనసాగవచ్చు",                   // We can proceed further
      "నాకు సమాధానం పంపండి",               // Send me the answer
      "మీకు స్వాగతం",                      // You are welcome
      "ఈ పేజీ చదివి పూర్తిచేయండి",          // Complete reading this page
      "దయచేసి కొన్ని క్షణాలు వేచివుండండి",    // Please wait a moment
      "మీ అభ్యర్థన నమోదు చేయబడింది"         // Your request has been recorded
    ];

    // Optional sanitization (removes non-Telugu and non-space characters)
    const sanitizedTeluguSentences = teluguSentences.map(s => s.replace(/[^\u0C00-\u0C7F\s]/g, ''));
    const telugusentence = sanitizedTeluguSentences[Math.floor(Math.random() * sanitizedTeluguSentences.length)];
    cy.get(this.locators.teluguEmailSubject).type(telugusentence);
    cy.wait(1000);
    cy.get(this.locators.teluguTemplateBody).type(telugusentence);
    cy.wait(1000);
    cy.get(this.locators.createtemplate).click();
    cy.wait(1000);
    cy.get('.toast-message').contains('created successfully.').should('be.visible')
    cy.wait(1000);
  }

  CreateCommunicationTemplate168() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.allowaccessno).click();
    cy.wait(1000);
    cy.get(this.locators.selectlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.clickondropdownlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.selectHindiLanguage).contains('Hindi').click();
    cy.wait(1000);
    cy.get(this.locators.addlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.subjectline).type(subjectline);
    cy.wait(1000);
    cy.get(this.locators.templatebody).type("Please create one Email Communication template");
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
    cy.get(this.locators.hindiEmailSubject).type(hindiSentence);
    cy.wait(1000);
    cy.get(this.locators.hindiTemplateBody).type(hindiSentence);
    cy.wait(1000);
    cy.get(this.locators.createtemplate).click();
    cy.wait(1000);
    cy.get('.toast-message').contains('created successfully.').should('be.visible')
    cy.wait(1000);
  }

  CreateCommunicationTemplate169() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.allowaccessno).click();
    cy.wait(1000);
    cy.get(this.locators.selectlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.clickondropdownlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.selectHindiLanguage).contains('Marathi').click();
    cy.wait(1000);
    cy.get(this.locators.addlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.subjectline).type(subjectline);
    cy.wait(1000);
    cy.get(this.locators.templatebody).type("Please create one Email Communication template");
    cy.wait(1000);
    cy.get(this.locators.selectMarathiTemplate).click();
    cy.wait(1000);
    const marathiSentences = [
      "तुमचं नाव काय आहे",                  // What is your name?
      "मी पुण्याहून आलो आहे.",              // I am from Pune.
      "ही माहिती बरोबर आहे का",           // Is this information correct?
      "कृपया येथे सही करा",               // Please sign here.
      "आपण पुढे चालू शकतो",               // We can proceed further.
      "माझं उत्तर पाठवा",                 // Send me the answer.
      "तुमचं स्वागत आहे",                 // You are welcome!
      "हे पान वाचून पूर्ण करा",           // Complete reading this page.
      "कृपया थोडा वेळ थांबा",             // Please wait a moment.
      "आपली विनंती नोंदवली गेली आहे"     // Your request has been recorded.
    ];
    const marathisentence = marathiSentences[Math.floor(Math.random() * marathiSentences.length)];
    cy.get(this.locators.marathiiEmailSubject).type(marathisentence);
    cy.wait(1000);
    cy.get(this.locators.marathiTemplateBody).type(marathisentence);
    cy.wait(1000);
    cy.get(this.locators.createtemplate).click();
    cy.wait(1000);
    cy.get('.toast-message').contains('created successfully.').should('be.visible')
    cy.wait(1000);
  }

  CreateCommunicationTemplate170() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.allowaccessno).click();
    cy.wait(1000);
    cy.get(this.locators.selectlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.clickondropdownlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.selectHindiLanguage).contains('Kannada').click();
    cy.wait(1000);
    cy.get(this.locators.addlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.subjectline).type(subjectline);
    cy.wait(1000);
    cy.get(this.locators.templatebody).type("Please create one Email Communication template");
    cy.wait(1000);
    cy.get(this.locators.selectKannadaTemplate).click();
    cy.wait(1000);
    const kannadaSentences = [
      "ನಿಮ್ಮ ಹೆಸರು ಏನು",                       // What is your name?
      "ನಾನು ಪುಣೆಯಿಂದ ಬಂದಿದ್ದೇನೆ",            // I am from Pune.
      "ಈ ಮಾಹಿತಿ ಸರಿಯಾಗಿದೆ",                     // Is this information correct?
      "ದಯವಿಟ್ಟು ಇಲ್ಲಿ ಸಹಿ ಮಾಡಿ",              // Please sign here.
      "ನಾವು ಮುಂದುವರಿಯಬಹುದು",                 // We can proceed further.
      "ನನ್ನ ಉತ್ತರ ಕಳುಹಿಸಿ",                  // Send me the answer.
      "ನಿಮ್ಮ ಸ್ವಾಗತ ಇದೆ",                     // You are welcome!
      "ಈ ಪುಟವನ್ನು ಓದಿ ಪೂರ್ಣಗೊಳಿಸಿ",           // Complete reading this page.
      "ದಯವಿಟ್ಟು ಸ್ವಲ್ಪ ಕ್ಷಣ ನಿರೀಕ್ಷಿಸಿ",        // Please wait a moment.
      "ನಿಮ್ಮ ವಿನಂತಿಯನ್ನು ದಾಖಲಿಸಲಾಗಿದೆ"       // Your request has been recorded.
    ];
    const kannadasentence = kannadaSentences[Math.floor(Math.random() * kannadaSentences.length)];
    cy.get(this.locators.kannadaEmailSubject).type(kannadasentence);
    cy.wait(1000);
    cy.get(this.locators.kannadaTemplateBody).type(kannadasentence);
    cy.wait(1000);
    cy.get(this.locators.createtemplate).click();
    cy.wait(1000);
    cy.get('.toast-message').contains('created successfully.').should('be.visible')
    cy.wait(1000);
  }

  CreateCommunicationTemplate171() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.allowaccessno).click();
    cy.wait(1000);
    cy.get(this.locators.selectlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.clickondropdownlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.selectHindiLanguage).contains('Malayalam').click();
    cy.wait(1000);
    cy.get(this.locators.addlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.subjectline).type(subjectline);
    cy.wait(1000);
    cy.get(this.locators.templatebody).type("Please create one Email Communication template");
    cy.wait(1000);
    cy.get(this.locators.selectMalayalamTemplate).click();
    cy.wait(1000);

    const malayalamSentences = [
      "നിന്റെ പേര് എന്താണ്",                       // What is your name
      "ഞാൻ പുനെയിൽ നിന്ന് വന്നതാണ്",            // I am from Pune
      "ഈ വിവരങ്ങൾ ശരിയാണല്ലോ",                   // This information is correct
      "ദയവായി ഇവിടെ ഒപ്പിടുക",                  // Please sign here
      "നമുക്ക് തുടരാം",                          // We can proceed further
      "എനിക്ക് ഉത്തരമയക്കൂ",                      // Send me the answer
      "സ്വാഗതം",                                // You are welcome
      "ഈ പേജ് വായിച്ചു പൂർത്തിയാക്കുക",          // Complete reading this page
      "ദയവായി കുറച്ച് നേരം കാത്തിരിക്കുക",         // Please wait a moment
      "നിന്റെ അഭ്യർത്ഥന രജിസ്റ്റർ ചെയ്തിരിക്കുന്നു" // Your request has been recorded
    ];

    // Optional: strip any lingering special characters just in case
    const sanitizedSentences = malayalamSentences.map(s => s.replace(/[^\u0D00-\u0D7F\s]/g, ''));
    const malayalamsentence = sanitizedSentences[Math.floor(Math.random() * sanitizedSentences.length)];
    cy.get(this.locators.malayalamEmailSubject).type(malayalamsentence);
    cy.wait(1000);
    cy.get(this.locators.malayalamTemplateBody).type(malayalamsentence);
    cy.wait(1000);
    cy.get(this.locators.createtemplate).click();
    cy.wait(1000);
    cy.get('.toast-message').contains('created successfully.').should('be.visible')
    cy.wait(1000);
  }

  CreateCommunicationTemplate172() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.allowaccessno).click();
    cy.wait(1000);
    cy.get(this.locators.selectlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.clickondropdownlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.selectHindiLanguage).contains('Tamil').click();
    cy.wait(1000);
    cy.get(this.locators.addlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.subjectline).type(subjectline);
    cy.wait(1000);
    cy.get(this.locators.templatebody).type("Please create one Email Communication template");
    cy.wait(1000);
    cy.get(this.locators.selectTamilTemplate).click();
    cy.wait(1000);

    const tamilSentences = [
      "உங்கள் பெயர் என்ன",                     // What is your name
      "நான் புனேயிலிருந்து வந்தேன்",           // I am from Pune
      "இந்த தகவல் சரியானதா",                  // Is this information correct
      "தயவுசெய்து இங்கு கையொப்பமிடவும்",       // Please sign here
      "நாம் தொடரலாம்",                        // We can proceed further
      "எனது பதிலை அனுப்பு",                  // Send me the answer
      "நீங்கள் வரவேற்கப்படுகிறீர்கள்",          // You are welcome
      "இந்த பக்கத்தை வாசித்து முடிக்கவும்",       // Complete reading this page
      "தயவுசெய்து சிறிது நேரம் காத்திருக்கவும்",  // Please wait a moment
      "உங்கள் கோரிக்கை பதிவாகியுள்ளது"         // Your request has been recorded
    ];

    // Optional sanitization (removes non-Tamil and non-space characters)
    const sanitizedTamilSentences = tamilSentences.map(s => s.replace(/[^\u0B80-\u0BFF\s]/g, ''));

    const tamilsentence = sanitizedTamilSentences[Math.floor(Math.random() * sanitizedTamilSentences.length)];

    cy.get(this.locators.tamilEmailSubject).type(tamilsentence);
    cy.wait(1000);
    cy.get(this.locators.tamilTemplateBody).type(tamilsentence);
    cy.wait(1000);
    cy.get(this.locators.createtemplate).click();
    cy.wait(1000);
    cy.get('.toast-message').contains('created successfully.').should('be.visible')
    cy.wait(1000);
  }

  CreateCommunicationTemplate173() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.allowaccessno).click();
    cy.wait(1000);
    cy.get(this.locators.selectlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.clickondropdownlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.selectHindiLanguage).contains('Telugu').click();
    cy.wait(1000);
    cy.get(this.locators.addlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.subjectline).type(subjectline);
    cy.wait(1000);
    cy.get(this.locators.templatebody).type("Please create one Email Communication template");
    cy.wait(1000);
    cy.get(this.locators.selectTeluguTemplate).click();
    cy.wait(1000);

    const teluguSentences = [
      "మీ పేరు ఏమిటి",                      // What is your name
      "నేను పుణె నుండి వచ్చాను",             // I am from Pune
      "ఈ సమాచారం సరైనదేనా",                // Is this information correct
      "దయచేసి ఇక్కడ సంతకం చేయండి",           // Please sign here
      "మనము కొనసాగవచ్చు",                   // We can proceed further
      "నాకు సమాధానం పంపండి",               // Send me the answer
      "మీకు స్వాగతం",                      // You are welcome
      "ఈ పేజీ చదివి పూర్తిచేయండి",          // Complete reading this page
      "దయచేసి కొన్ని క్షణాలు వేచివుండండి",    // Please wait a moment
      "మీ అభ్యర్థన నమోదు చేయబడింది"         // Your request has been recorded
    ];

    // Optional sanitization (removes non-Telugu and non-space characters)
    const sanitizedTeluguSentences = teluguSentences.map(s => s.replace(/[^\u0C00-\u0C7F\s]/g, ''));
    const telugusentence = sanitizedTeluguSentences[Math.floor(Math.random() * sanitizedTeluguSentences.length)];
    cy.get(this.locators.teluguEmailSubject).type(telugusentence);
    cy.wait(1000);
    cy.get(this.locators.teluguTemplateBody).type(telugusentence);
    cy.wait(1000);
    cy.get(this.locators.createtemplate).click();
    cy.wait(1000);
    cy.get('.toast-message').contains('created successfully.').should('be.visible')
    cy.wait(1000);
  }

  CreateCommunicationTemplate174() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.selectsms).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.allowaccessno).click();
    cy.wait(1000);
    cy.get(this.locators.selectlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.clickondropdownlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.selectHindiLanguage).contains('Hindi').click();
    cy.wait(1000);
    cy.get(this.locators.addlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.templatebody).type("Please create one Email Communication template");
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
    cy.get(this.locators.hindiEmailSubject).type(hindiSentence);
    cy.wait(1000);
    cy.get(this.locators.hindiTemplateBody).type(hindiSentence);
    cy.wait(1000);
    cy.get(this.locators.createtemplate).click();
    cy.wait(1000);
    cy.get('.toast-message').contains('created successfully.').should('be.visible')
    cy.wait(1000);
  }

  CreateCommunicationTemplate175() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.selectsms).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.allowaccessno).click();
    cy.wait(1000);
    cy.get(this.locators.selectlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.clickondropdownlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.selectHindiLanguage).contains('Marathi').click();
    cy.wait(1000);
    cy.get(this.locators.addlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.templatebody).type("Please create one Email Communication template");
    cy.wait(1000);
    cy.get(this.locators.selectMarathiTemplate).click();
    cy.wait(1000);
    const marathiSentences = [
      "तुमचं नाव काय आहे",                  // What is your name?
      "मी पुण्याहून आलो आहे.",              // I am from Pune.
      "ही माहिती बरोबर आहे का",           // Is this information correct?
      "कृपया येथे सही करा",               // Please sign here.
      "आपण पुढे चालू शकतो",               // We can proceed further.
      "माझं उत्तर पाठवा",                 // Send me the answer.
      "तुमचं स्वागत आहे",                 // You are welcome!
      "हे पान वाचून पूर्ण करा",           // Complete reading this page.
      "कृपया थोडा वेळ थांबा",             // Please wait a moment.
      "आपली विनंती नोंदवली गेली आहे"     // Your request has been recorded.
    ];
    const marathisentence = marathiSentences[Math.floor(Math.random() * marathiSentences.length)];
    cy.get(this.locators.marathiiEmailSubject).type(marathisentence);
    cy.wait(1000);
    cy.get(this.locators.marathiTemplateBody).type(marathisentence);
    cy.wait(1000);
    cy.get(this.locators.createtemplate).click();
    cy.wait(1000);
    cy.get('.toast-message').contains('created successfully.').should('be.visible')
    cy.wait(1000);
  }

  CreateCommunicationTemplate176() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.selectsms).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.allowaccessno).click();
    cy.wait(1000);
    cy.get(this.locators.selectlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.clickondropdownlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.selectHindiLanguage).contains('Kannada').click();
    cy.wait(1000);
    cy.get(this.locators.addlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.templatebody).type("Please create one Email Communication template");
    cy.wait(1000);
    cy.get(this.locators.selectKannadaTemplate).click();
    cy.wait(1000);
    const kannadaSentences = [
      "ನಿಮ್ಮ ಹೆಸರು ಏನು",                       // What is your name?
      "ನಾನು ಪುಣೆಯಿಂದ ಬಂದಿದ್ದೇನೆ",            // I am from Pune.
      "ಈ ಮಾಹಿತಿ ಸರಿಯಾಗಿದೆ",                     // Is this information correct?
      "ದಯವಿಟ್ಟು ಇಲ್ಲಿ ಸಹಿ ಮಾಡಿ",              // Please sign here.
      "ನಾವು ಮುಂದುವರಿಯಬಹುದು",                 // We can proceed further.
      "ನನ್ನ ಉತ್ತರ ಕಳುಹಿಸಿ",                  // Send me the answer.
      "ನಿಮ್ಮ ಸ್ವಾಗತ ಇದೆ",                     // You are welcome!
      "ಈ ಪುಟವನ್ನು ಓದಿ ಪೂರ್ಣಗೊಳಿಸಿ",           // Complete reading this page.
      "ದಯವಿಟ್ಟು ಸ್ವಲ್ಪ ಕ್ಷಣ ನಿರೀಕ್ಷಿಸಿ",        // Please wait a moment.
      "ನಿಮ್ಮ ವಿನಂತಿಯನ್ನು ದಾಖಲಿಸಲಾಗಿದೆ"       // Your request has been recorded.
    ];
    const kannadasentence = kannadaSentences[Math.floor(Math.random() * kannadaSentences.length)];
    cy.get(this.locators.kannadaEmailSubject).type(kannadasentence);
    cy.wait(1000);
    cy.get(this.locators.kannadaTemplateBody).type(kannadasentence);
    cy.wait(1000);
    cy.get(this.locators.createtemplate).click();
    cy.wait(1000);
    cy.get('.toast-message').contains('created successfully.').should('be.visible')
    cy.wait(1000);
  }

  CreateCommunicationTemplate177() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.selectsms).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.allowaccessno).click();
    cy.wait(1000);
    cy.get(this.locators.selectlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.clickondropdownlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.selectHindiLanguage).contains('Malayalam').click();
    cy.wait(1000);
    cy.get(this.locators.addlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.templatebody).type("Please create one Email Communication template");
    cy.wait(1000);
    cy.get(this.locators.selectMalayalamTemplate).click();
    cy.wait(1000);

    const malayalamSentences = [
      "നിന്റെ പേര് എന്താണ്",                       // What is your name
      "ഞാൻ പുനെയിൽ നിന്ന് വന്നതാണ്",            // I am from Pune
      "ഈ വിവരങ്ങൾ ശരിയാണല്ലോ",                   // This information is correct
      "ദയവായി ഇവിടെ ഒപ്പിടുക",                  // Please sign here
      "നമുക്ക് തുടരാം",                          // We can proceed further
      "എനിക്ക് ഉത്തരമയക്കൂ",                      // Send me the answer
      "സ്വാഗതം",                                // You are welcome
      "ഈ പേജ് വായിച്ചു പൂർത്തിയാക്കുക",          // Complete reading this page
      "ദയവായി കുറച്ച് നേരം കാത്തിരിക്കുക",         // Please wait a moment
      "നിന്റെ അഭ്യർത്ഥന രജിസ്റ്റർ ചെയ്തിരിക്കുന്നു" // Your request has been recorded
    ];

    // Optional: strip any lingering special characters just in case
    const sanitizedSentences = malayalamSentences.map(s => s.replace(/[^\u0D00-\u0D7F\s]/g, ''));
    const malayalamsentence = sanitizedSentences[Math.floor(Math.random() * sanitizedSentences.length)];
    cy.get(this.locators.malayalamEmailSubject).type(malayalamsentence);
    cy.wait(1000);
    cy.get(this.locators.malayalamTemplateBody).type(malayalamsentence);
    cy.wait(1000);
    cy.get(this.locators.createtemplate).click();
    cy.wait(1000);
    cy.get('.toast-message').contains('created successfully.').should('be.visible')
    cy.wait(1000);
  }

  CreateCommunicationTemplate178() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.selectsms).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.allowaccessno).click();
    cy.wait(1000);
    cy.get(this.locators.selectlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.clickondropdownlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.selectHindiLanguage).contains('Tamil').click();
    cy.wait(1000);
    cy.get(this.locators.addlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.templatebody).type("Please create one Email Communication template");
    cy.wait(1000);
    cy.get(this.locators.selectTamilTemplate).click();
    cy.wait(1000);

    const tamilSentences = [
      "உங்கள் பெயர் என்ன",                     // What is your name
      "நான் புனேயிலிருந்து வந்தேன்",           // I am from Pune
      "இந்த தகவல் சரியானதா",                  // Is this information correct
      "தயவுசெய்து இங்கு கையொப்பமிடவும்",       // Please sign here
      "நாம் தொடரலாம்",                        // We can proceed further
      "எனது பதிலை அனுப்பு",                  // Send me the answer
      "நீங்கள் வரவேற்கப்படுகிறீர்கள்",          // You are welcome
      "இந்த பக்கத்தை வாசித்து முடிக்கவும்",       // Complete reading this page
      "தயவுசெய்து சிறிது நேரம் காத்திருக்கவும்",  // Please wait a moment
      "உங்கள் கோரிக்கை பதிவாகியுள்ளது"         // Your request has been recorded
    ];

    // Optional sanitization (removes non-Tamil and non-space characters)
    const sanitizedTamilSentences = tamilSentences.map(s => s.replace(/[^\u0B80-\u0BFF\s]/g, ''));

    const tamilsentence = sanitizedTamilSentences[Math.floor(Math.random() * sanitizedTamilSentences.length)];

    cy.get(this.locators.tamilEmailSubject).type(tamilsentence);
    cy.wait(1000);
    cy.get(this.locators.tamilTemplateBody).type(tamilsentence);
    cy.wait(1000);
    cy.get(this.locators.createtemplate).click();
    cy.wait(1000);
    cy.get('.toast-message').contains('created successfully.').should('be.visible')
    cy.wait(1000);
  }

  CreateCommunicationTemplate179() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.selectsms).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.allowaccessno).click();
    cy.wait(1000);
    cy.get(this.locators.selectlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.clickondropdownlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.selectHindiLanguage).contains('Telugu').click();
    cy.wait(1000);
    cy.get(this.locators.addlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.templatebody).type("Please create one Email Communication template");
    cy.wait(1000);
    cy.get(this.locators.selectTeluguTemplate).click();
    cy.wait(1000);

    const teluguSentences = [
      "మీ పేరు ఏమిటి",                      // What is your name
      "నేను పుణె నుండి వచ్చాను",             // I am from Pune
      "ఈ సమాచారం సరైనదేనా",                // Is this information correct
      "దయచేసి ఇక్కడ సంతకం చేయండి",           // Please sign here
      "మనము కొనసాగవచ్చు",                   // We can proceed further
      "నాకు సమాధానం పంపండి",               // Send me the answer
      "మీకు స్వాగతం",                      // You are welcome
      "ఈ పేజీ చదివి పూర్తిచేయండి",          // Complete reading this page
      "దయచేసి కొన్ని క్షణాలు వేచివుండండి",    // Please wait a moment
      "మీ అభ్యర్థన నమోదు చేయబడింది"         // Your request has been recorded
    ];

    // Optional sanitization (removes non-Telugu and non-space characters)
    const sanitizedTeluguSentences = teluguSentences.map(s => s.replace(/[^\u0C00-\u0C7F\s]/g, ''));
    const telugusentence = sanitizedTeluguSentences[Math.floor(Math.random() * sanitizedTeluguSentences.length)];
    cy.get(this.locators.teluguEmailSubject).type(telugusentence);
    cy.wait(1000);
    cy.get(this.locators.teluguTemplateBody).type(telugusentence);
    cy.wait(1000);
    cy.get(this.locators.createtemplate).click();
    cy.wait(1000);
    cy.get('.toast-message').contains('created successfully.').should('be.visible')
    cy.wait(1000);
  }

  CreateCommunicationTemplate180() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.selectsms).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.selectlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.clickondropdownlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.selectHindiLanguage).contains('Hindi').click();
    cy.wait(1000);
    cy.get(this.locators.addlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.templatebody).type("Please create one Email Communication template");
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
    cy.get(this.locators.hindiEmailSubject).type(hindiSentence);
    cy.wait(1000);
    cy.get(this.locators.hindiTemplateBody).type(hindiSentence);
    cy.wait(1000);
    cy.get(this.locators.createtemplate).click();
    cy.wait(1000);
    cy.get('.toast-message').contains('created successfully.').should('be.visible')
    cy.wait(1000);
  }

  CreateCommunicationTemplate181() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.selectsms).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.selectlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.clickondropdownlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.selectHindiLanguage).contains('Marathi').click();
    cy.wait(1000);
    cy.get(this.locators.addlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.templatebody).type("Please create one Email Communication template");
    cy.wait(1000);
    cy.get(this.locators.selectMarathiTemplate).click();
    cy.wait(1000);
    const marathiSentences = [
      "तुमचं नाव काय आहे",                  // What is your name?
      "मी पुण्याहून आलो आहे.",              // I am from Pune.
      "ही माहिती बरोबर आहे का",           // Is this information correct?
      "कृपया येथे सही करा",               // Please sign here.
      "आपण पुढे चालू शकतो",               // We can proceed further.
      "माझं उत्तर पाठवा",                 // Send me the answer.
      "तुमचं स्वागत आहे",                 // You are welcome!
      "हे पान वाचून पूर्ण करा",           // Complete reading this page.
      "कृपया थोडा वेळ थांबा",             // Please wait a moment.
      "आपली विनंती नोंदवली गेली आहे"     // Your request has been recorded.
    ];
    const marathisentence = marathiSentences[Math.floor(Math.random() * marathiSentences.length)];
    cy.get(this.locators.marathiTemplateBody).type(marathisentence);
    cy.wait(1000);
    cy.get(this.locators.createtemplate).click();
    cy.wait(1000);
    cy.get('.toast-message').contains('created successfully.').should('be.visible')
    cy.wait(1000);
  }

  CreateCommunicationTemplate182() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.selectsms).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.selectlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.clickondropdownlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.selectHindiLanguage).contains('Kannada').click();
    cy.wait(1000);
    cy.get(this.locators.addlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.templatebody).type("Please create one Email Communication template");
    cy.wait(1000);
    cy.get(this.locators.selectKannadaTemplate).click();
    cy.wait(1000);
    const kannadaSentences = [
      "ನಿಮ್ಮ ಹೆಸರು ಏನು",                       // What is your name?
      "ನಾನು ಪುಣೆಯಿಂದ ಬಂದಿದ್ದೇನೆ",            // I am from Pune.
      "ಈ ಮಾಹಿತಿ ಸರಿಯಾಗಿದೆ",                     // Is this information correct?
      "ದಯವಿಟ್ಟು ಇಲ್ಲಿ ಸಹಿ ಮಾಡಿ",              // Please sign here.
      "ನಾವು ಮುಂದುವರಿಯಬಹುದು",                 // We can proceed further.
      "ನನ್ನ ಉತ್ತರ ಕಳುಹಿಸಿ",                  // Send me the answer.
      "ನಿಮ್ಮ ಸ್ವಾಗತ ಇದೆ",                     // You are welcome!
      "ಈ ಪುಟವನ್ನು ಓದಿ ಪೂರ್ಣಗೊಳಿಸಿ",           // Complete reading this page.
      "ದಯವಿಟ್ಟು ಸ್ವಲ್ಪ ಕ್ಷಣ ನಿರೀಕ್ಷಿಸಿ",        // Please wait a moment.
      "ನಿಮ್ಮ ವಿನಂತಿಯನ್ನು ದಾಖಲಿಸಲಾಗಿದೆ"       // Your request has been recorded.
    ];
    const kannadasentence = kannadaSentences[Math.floor(Math.random() * kannadaSentences.length)];
    cy.get(this.locators.kannadaTemplateBody).type(kannadasentence);
    cy.wait(1000);
    cy.get(this.locators.createtemplate).click();
    cy.wait(1000);
    cy.get('.toast-message').contains('created successfully.').should('be.visible')
    cy.wait(1000);
  }

  CreateCommunicationTemplate183() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.selectsms).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.selectlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.clickondropdownlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.selectHindiLanguage).contains('Malayalam').click();
    cy.wait(1000);
    cy.get(this.locators.addlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.templatebody).type("Please create one Email Communication template");
    cy.wait(1000);
    cy.get(this.locators.selectMalayalamTemplate).click();
    cy.wait(1000);

    const malayalamSentences = [
      "നിന്റെ പേര് എന്താണ്",                       // What is your name
      "ഞാൻ പുനെയിൽ നിന്ന് വന്നതാണ്",            // I am from Pune
      "ഈ വിവരങ്ങൾ ശരിയാണല്ലോ",                   // This information is correct
      "ദയവായി ഇവിടെ ഒപ്പിടുക",                  // Please sign here
      "നമുക്ക് തുടരാം",                          // We can proceed further
      "എനിക്ക് ഉത്തരമയക്കൂ",                      // Send me the answer
      "സ്വാഗതം",                                // You are welcome
      "ഈ പേജ് വായിച്ചു പൂർത്തിയാക്കുക",          // Complete reading this page
      "ദയവായി കുറച്ച് നേരം കാത്തിരിക്കുക",         // Please wait a moment
      "നിന്റെ അഭ്യർത്ഥന രജിസ്റ്റർ ചെയ്തിരിക്കുന്നു" // Your request has been recorded
    ];

    // Optional: strip any lingering special characters just in case
    const sanitizedSentences = malayalamSentences.map(s => s.replace(/[^\u0D00-\u0D7F\s]/g, ''));
    const malayalamsentence = sanitizedSentences[Math.floor(Math.random() * sanitizedSentences.length)];
    cy.get(this.locators.malayalamTemplateBody).type(malayalamsentence);
    cy.wait(1000);
    cy.get(this.locators.createtemplate).click();
    cy.wait(1000);
    cy.get('.toast-message').contains('created successfully.').should('be.visible')
    cy.wait(1000);
  }

  CreateCommunicationTemplate184() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.selectsms).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.selectlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.clickondropdownlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.selectHindiLanguage).contains('Tamil').click();
    cy.wait(1000);
    cy.get(this.locators.addlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.templatebody).type("Please create one Email Communication template");
    cy.wait(1000);
    cy.get(this.locators.selectTamilTemplate).click();
    cy.wait(1000);

    const tamilSentences = [
      "உங்கள் பெயர் என்ன",                     // What is your name
      "நான் புனேயிலிருந்து வந்தேன்",           // I am from Pune
      "இந்த தகவல் சரியானதா",                  // Is this information correct
      "தயவுசெய்து இங்கு கையொப்பமிடவும்",       // Please sign here
      "நாம் தொடரலாம்",                        // We can proceed further
      "எனது பதிலை அனுப்பு",                  // Send me the answer
      "நீங்கள் வரவேற்கப்படுகிறீர்கள்",          // You are welcome
      "இந்த பக்கத்தை வாசித்து முடிக்கவும்",       // Complete reading this page
      "தயவுசெய்து சிறிது நேரம் காத்திருக்கவும்",  // Please wait a moment
      "உங்கள் கோரிக்கை பதிவாகியுள்ளது"         // Your request has been recorded
    ];

    // Optional sanitization (removes non-Tamil and non-space characters)
    const sanitizedTamilSentences = tamilSentences.map(s => s.replace(/[^\u0B80-\u0BFF\s]/g, ''));

    const tamilsentence = sanitizedTamilSentences[Math.floor(Math.random() * sanitizedTamilSentences.length)];
    cy.get(this.locators.tamilTemplateBody).type(tamilsentence);
    cy.wait(1000);
    cy.get(this.locators.createtemplate).click();
    cy.wait(1000);
    cy.get('.toast-message').contains('created successfully.').should('be.visible')
    cy.wait(1000);
  }

  CreateCommunicationTemplate185() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.selectsms).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.selectlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.clickondropdownlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.selectHindiLanguage).contains('Telugu').click();
    cy.wait(1000);
    cy.get(this.locators.addlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.templatebody).type("Please create one Email Communication template");
    cy.wait(1000);
    cy.get(this.locators.selectTeluguTemplate).click();
    cy.wait(1000);

    const teluguSentences = [
      "మీ పేరు ఏమిటి",                      // What is your name
      "నేను పుణె నుండి వచ్చాను",             // I am from Pune
      "ఈ సమాచారం సరైనదేనా",                // Is this information correct
      "దయచేసి ఇక్కడ సంతకం చేయండి",           // Please sign here
      "మనము కొనసాగవచ్చు",                   // We can proceed further
      "నాకు సమాధానం పంపండి",               // Send me the answer
      "మీకు స్వాగతం",                      // You are welcome
      "ఈ పేజీ చదివి పూర్తిచేయండి",          // Complete reading this page
      "దయచేసి కొన్ని క్షణాలు వేచివుండండి",    // Please wait a moment
      "మీ అభ్యర్థన నమోదు చేయబడింది"         // Your request has been recorded
    ];

    // Optional sanitization (removes non-Telugu and non-space characters)
    const sanitizedTeluguSentences = teluguSentences.map(s => s.replace(/[^\u0C00-\u0C7F\s]/g, ''));
    const telugusentence = sanitizedTeluguSentences[Math.floor(Math.random() * sanitizedTeluguSentences.length)];
    cy.get(this.locators.teluguTemplateBody).type(telugusentence);
    cy.wait(1000);
    cy.get(this.locators.createtemplate).click();
    cy.wait(1000);
    cy.get('.toast-message').contains('created successfully.').should('be.visible')
    cy.wait(1000);
  }

  CreateCommunicationTemplate186() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.selectletter).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.selectlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.clickondropdownlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.selectHindiLanguage).contains('Hindi').click();
    cy.wait(1000);
    cy.get(this.locators.addlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.templatebody).type("Please create one Email Communication template");
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
    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.selectletter).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.selectlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.clickondropdownlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.selectHindiLanguage).contains('Marathi').click();
    cy.wait(1000);
    cy.get(this.locators.addlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.templatebody).type("Please create one Email Communication template");
    cy.wait(1000);
    cy.get(this.locators.selectMarathiTemplate).click();
    cy.wait(1000);
    const marathiSentences = [
      "तुमचं नाव काय आहे",                  // What is your name?
      "मी पुण्याहून आलो आहे.",              // I am from Pune.
      "ही माहिती बरोबर आहे का",           // Is this information correct?
      "कृपया येथे सही करा",               // Please sign here.
      "आपण पुढे चालू शकतो",               // We can proceed further.
      "माझं उत्तर पाठवा",                 // Send me the answer.
      "तुमचं स्वागत आहे",                 // You are welcome!
      "हे पान वाचून पूर्ण करा",           // Complete reading this page.
      "कृपया थोडा वेळ थांबा",             // Please wait a moment.
      "आपली विनंती नोंदवली गेली आहे"     // Your request has been recorded.
    ];
    const marathisentence = marathiSentences[Math.floor(Math.random() * marathiSentences.length)];
    cy.get(this.locators.marathiTemplateBody).type(marathisentence);
    cy.wait(1000);
    cy.get(this.locators.createtemplate).click();
    cy.wait(1000);
    cy.get('.toast-message').contains('created successfully.').should('be.visible')
    cy.wait(1000);
  }

  CreateCommunicationTemplate188() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.selectletter).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.selectlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.clickondropdownlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.selectHindiLanguage).contains('Kannada').click();
    cy.wait(1000);
    cy.get(this.locators.addlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.templatebody).type("Please create one Email Communication template");
    cy.wait(1000);
    cy.get(this.locators.selectKannadaTemplate).click();
    cy.wait(1000);
    const kannadaSentences = [
      "ನಿಮ್ಮ ಹೆಸರು ಏನು",                       // What is your name?
      "ನಾನು ಪುಣೆಯಿಂದ ಬಂದಿದ್ದೇನೆ",            // I am from Pune.
      "ಈ ಮಾಹಿತಿ ಸರಿಯಾಗಿದೆ",                     // Is this information correct?
      "ದಯವಿಟ್ಟು ಇಲ್ಲಿ ಸಹಿ ಮಾಡಿ",              // Please sign here.
      "ನಾವು ಮುಂದುವರಿಯಬಹುದು",                 // We can proceed further.
      "ನನ್ನ ಉತ್ತರ ಕಳುಹಿಸಿ",                  // Send me the answer.
      "ನಿಮ್ಮ ಸ್ವಾಗತ ಇದೆ",                     // You are welcome!
      "ಈ ಪುಟವನ್ನು ಓದಿ ಪೂರ್ಣಗೊಳಿಸಿ",           // Complete reading this page.
      "ದಯವಿಟ್ಟು ಸ್ವಲ್ಪ ಕ್ಷಣ ನಿರೀಕ್ಷಿಸಿ",        // Please wait a moment.
      "ನಿಮ್ಮ ವಿನಂತಿಯನ್ನು ದಾಖಲಿಸಲಾಗಿದೆ"       // Your request has been recorded.
    ];
    const kannadasentence = kannadaSentences[Math.floor(Math.random() * kannadaSentences.length)];
    cy.get(this.locators.kannadaTemplateBody).type(kannadasentence);
    cy.wait(1000);
    cy.get(this.locators.createtemplate).click();
    cy.wait(1000);
    cy.get('.toast-message').contains('created successfully.').should('be.visible')
    cy.wait(1000);
  }

  CreateCommunicationTemplate189() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.selectletter).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.selectlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.clickondropdownlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.selectHindiLanguage).contains('Malayalam').click();
    cy.wait(1000);
    cy.get(this.locators.addlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.templatebody).type("Please create one Email Communication template");
    cy.wait(1000);
    cy.get(this.locators.selectMalayalamTemplate).click();
    cy.wait(1000);

    const malayalamSentences = [
      "നിന്റെ പേര് എന്താണ്",                       // What is your name
      "ഞാൻ പുനെയിൽ നിന്ന് വന്നതാണ്",            // I am from Pune
      "ഈ വിവരങ്ങൾ ശരിയാണല്ലോ",                   // This information is correct
      "ദയവായി ഇവിടെ ഒപ്പിടുക",                  // Please sign here
      "നമുക്ക് തുടരാം",                          // We can proceed further
      "എനിക്ക് ഉത്തരമയക്കൂ",                      // Send me the answer
      "സ്വാഗതം",                                // You are welcome
      "ഈ പേജ് വായിച്ചു പൂർത്തിയാക്കുക",          // Complete reading this page
      "ദയവായി കുറച്ച് നേരം കാത്തിരിക്കുക",         // Please wait a moment
      "നിന്റെ അഭ്യർത്ഥന രജിസ്റ്റർ ചെയ്തിരിക്കുന്നു" // Your request has been recorded
    ];

    // Optional: strip any lingering special characters just in case
    const sanitizedSentences = malayalamSentences.map(s => s.replace(/[^\u0D00-\u0D7F\s]/g, ''));
    const malayalamsentence = sanitizedSentences[Math.floor(Math.random() * sanitizedSentences.length)];
    cy.get(this.locators.malayalamTemplateBody).type(malayalamsentence);
    cy.wait(1000);
    cy.get(this.locators.createtemplate).click();
    cy.wait(1000);
    cy.get('.toast-message').contains('created successfully.').should('be.visible')
    cy.wait(1000);
  }

  CreateCommunicationTemplate190() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.selectletter).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.selectlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.clickondropdownlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.selectHindiLanguage).contains('Tamil').click();
    cy.wait(1000);
    cy.get(this.locators.addlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.templatebody).type("Please create one Email Communication template");
    cy.wait(1000);
    cy.get(this.locators.selectTamilTemplate).click();
    cy.wait(1000);

    const tamilSentences = [
      "உங்கள் பெயர் என்ன",                     // What is your name
      "நான் புனேயிலிருந்து வந்தேன்",           // I am from Pune
      "இந்த தகவல் சரியானதா",                  // Is this information correct
      "தயவுசெய்து இங்கு கையொப்பமிடவும்",       // Please sign here
      "நாம் தொடரலாம்",                        // We can proceed further
      "எனது பதிலை அனுப்பு",                  // Send me the answer
      "நீங்கள் வரவேற்கப்படுகிறீர்கள்",          // You are welcome
      "இந்த பக்கத்தை வாசித்து முடிக்கவும்",       // Complete reading this page
      "தயவுசெய்து சிறிது நேரம் காத்திருக்கவும்",  // Please wait a moment
      "உங்கள் கோரிக்கை பதிவாகியுள்ளது"         // Your request has been recorded
    ];

    // Optional sanitization (removes non-Tamil and non-space characters)
    const sanitizedTamilSentences = tamilSentences.map(s => s.replace(/[^\u0B80-\u0BFF\s]/g, ''));
    const tamilsentence = sanitizedTamilSentences[Math.floor(Math.random() * sanitizedTamilSentences.length)];
    cy.get(this.locators.tamilTemplateBody).type(tamilsentence);
    cy.wait(1000);
    cy.get(this.locators.createtemplate).click();
    cy.wait(1000);
    cy.get('.toast-message').contains('created successfully.').should('be.visible')
    cy.wait(1000);
  }

  CreateCommunicationTemplate191() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.selectletter).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.selectlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.clickondropdownlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.selectHindiLanguage).contains('Telugu').click();
    cy.wait(1000);
    cy.get(this.locators.addlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.templatebody).type("Please create one Email Communication template");
    cy.wait(1000);
    cy.get(this.locators.selectTeluguTemplate).click();
    cy.wait(1000);

    const teluguSentences = [
      "మీ పేరు ఏమిటి",                      // What is your name
      "నేను పుణె నుండి వచ్చాను",             // I am from Pune
      "ఈ సమాచారం సరైనదేనా",                // Is this information correct
      "దయచేసి ఇక్కడ సంతకం చేయండి",           // Please sign here
      "మనము కొనసాగవచ్చు",                   // We can proceed further
      "నాకు సమాధానం పంపండి",               // Send me the answer
      "మీకు స్వాగతం",                      // You are welcome
      "ఈ పేజీ చదివి పూర్తిచేయండి",          // Complete reading this page
      "దయచేసి కొన్ని క్షణాలు వేచివుండండి",    // Please wait a moment
      "మీ అభ్యర్థన నమోదు చేయబడింది"         // Your request has been recorded
    ];

    // Optional sanitization (removes non-Telugu and non-space characters)
    const sanitizedTeluguSentences = teluguSentences.map(s => s.replace(/[^\u0C00-\u0C7F\s]/g, ''));
    const telugusentence = sanitizedTeluguSentences[Math.floor(Math.random() * sanitizedTeluguSentences.length)];
    cy.get(this.locators.teluguTemplateBody).type(telugusentence);
    cy.wait(1000);
    cy.get(this.locators.createtemplate).click();
    cy.wait(1000);
    cy.get('.toast-message').contains('created successfully.').should('be.visible')
    cy.wait(1000);
  }

  CreateCommunicationTemplate192() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.selectletter).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.selectlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.clickondropdownlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.selectHindiLanguage).contains('Hindi').click();
    cy.wait(1000);
    cy.get(this.locators.addlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.templatebody).type("Please create one Email Communication template");
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

  CreateCommunicationTemplate193() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.selectletter).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.selectlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.clickondropdownlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.selectHindiLanguage).contains('Marathi').click();
    cy.wait(1000);
    cy.get(this.locators.addlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.templatebody).type("Please create one Email Communication template");
    cy.wait(1000);
    cy.get(this.locators.selectMarathiTemplate).click();
    cy.wait(1000);
    const marathiSentences = [
      "तुमचं नाव काय आहे",                  // What is your name?
      "मी पुण्याहून आलो आहे.",              // I am from Pune.
      "ही माहिती बरोबर आहे का",           // Is this information correct?
      "कृपया येथे सही करा",               // Please sign here.
      "आपण पुढे चालू शकतो",               // We can proceed further.
      "माझं उत्तर पाठवा",                 // Send me the answer.
      "तुमचं स्वागत आहे",                 // You are welcome!
      "हे पान वाचून पूर्ण करा",           // Complete reading this page.
      "कृपया थोडा वेळ थांबा",             // Please wait a moment.
      "आपली विनंती नोंदवली गेली आहे"     // Your request has been recorded.
    ];
    const marathisentence = marathiSentences[Math.floor(Math.random() * marathiSentences.length)];
    cy.get(this.locators.marathiTemplateBody).type(marathisentence);
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

  CreateCommunicationTemplate194() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.selectletter).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.selectlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.clickondropdownlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.selectHindiLanguage).contains('Kannada').click();
    cy.wait(1000);
    cy.get(this.locators.addlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.templatebody).type("Please create one Email Communication template");
    cy.wait(1000);
    cy.get(this.locators.selectKannadaTemplate).click();
    cy.wait(1000);
    const kannadaSentences = [
      "ನಿಮ್ಮ ಹೆಸರು ಏನು",                       // What is your name?
      "ನಾನು ಪುಣೆಯಿಂದ ಬಂದಿದ್ದೇನೆ",            // I am from Pune.
      "ಈ ಮಾಹಿತಿ ಸರಿಯಾಗಿದೆ",                     // Is this information correct?
      "ದಯವಿಟ್ಟು ಇಲ್ಲಿ ಸಹಿ ಮಾಡಿ",              // Please sign here.
      "ನಾವು ಮುಂದುವರಿಯಬಹುದು",                 // We can proceed further.
      "ನನ್ನ ಉತ್ತರ ಕಳುಹಿಸಿ",                  // Send me the answer.
      "ನಿಮ್ಮ ಸ್ವಾಗತ ಇದೆ",                     // You are welcome!
      "ಈ ಪುಟವನ್ನು ಓದಿ ಪೂರ್ಣಗೊಳಿಸಿ",           // Complete reading this page.
      "ದಯವಿಟ್ಟು ಸ್ವಲ್ಪ ಕ್ಷಣ ನಿರೀಕ್ಷಿಸಿ",        // Please wait a moment.
      "ನಿಮ್ಮ ವಿನಂತಿಯನ್ನು ದಾಖಲಿಸಲಾಗಿದೆ"       // Your request has been recorded.
    ];
    const kannadasentence = kannadaSentences[Math.floor(Math.random() * kannadaSentences.length)];
    cy.get(this.locators.kannadaTemplateBody).type(kannadasentence);
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

  CreateCommunicationTemplate195() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.selectletter).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.selectlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.clickondropdownlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.selectHindiLanguage).contains('Malayalam').click();
    cy.wait(1000);
    cy.get(this.locators.addlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.templatebody).type("Please create one Email Communication template");
    cy.wait(1000);
    cy.get(this.locators.selectMalayalamTemplate).click();
    cy.wait(1000);

    const malayalamSentences = [
      "നിന്റെ പേര് എന്താണ്",                       // What is your name
      "ഞാൻ പുനെയിൽ നിന്ന് വന്നതാണ്",            // I am from Pune
      "ഈ വിവരങ്ങൾ ശരിയാണല്ലോ",                   // This information is correct
      "ദയവായി ഇവിടെ ഒപ്പിടുക",                  // Please sign here
      "നമുക്ക് തുടരാം",                          // We can proceed further
      "എനിക്ക് ഉത്തരമയക്കൂ",                      // Send me the answer
      "സ്വാഗതം",                                // You are welcome
      "ഈ പേജ് വായിച്ചു പൂർത്തിയാക്കുക",          // Complete reading this page
      "ദയവായി കുറച്ച് നേരം കാത്തിരിക്കുക",         // Please wait a moment
      "നിന്റെ അഭ്യർത്ഥന രജിസ്റ്റർ ചെയ്തിരിക്കുന്നു" // Your request has been recorded
    ];

    // Optional: strip any lingering special characters just in case
    const sanitizedSentences = malayalamSentences.map(s => s.replace(/[^\u0D00-\u0D7F\s]/g, ''));
    const malayalamsentence = sanitizedSentences[Math.floor(Math.random() * sanitizedSentences.length)];
    cy.get(this.locators.malayalamTemplateBody).type(malayalamsentence);
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

  CreateCommunicationTemplate196() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.selectletter).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.selectlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.clickondropdownlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.selectHindiLanguage).contains('Tamil').click();
    cy.wait(1000);
    cy.get(this.locators.addlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.templatebody).type("Please create one Email Communication template");
    cy.wait(1000);
    cy.get(this.locators.selectTamilTemplate).click();
    cy.wait(1000);

    const tamilSentences = [
      "உங்கள் பெயர் என்ன",                     // What is your name
      "நான் புனேயிலிருந்து வந்தேன்",           // I am from Pune
      "இந்த தகவல் சரியானதா",                  // Is this information correct
      "தயவுசெய்து இங்கு கையொப்பமிடவும்",       // Please sign here
      "நாம் தொடரலாம்",                        // We can proceed further
      "எனது பதிலை அனுப்பு",                  // Send me the answer
      "நீங்கள் வரவேற்கப்படுகிறீர்கள்",          // You are welcome
      "இந்த பக்கத்தை வாசித்து முடிக்கவும்",       // Complete reading this page
      "தயவுசெய்து சிறிது நேரம் காத்திருக்கவும்",  // Please wait a moment
      "உங்கள் கோரிக்கை பதிவாகியுள்ளது"         // Your request has been recorded
    ];

    // Optional sanitization (removes non-Tamil and non-space characters)
    const sanitizedTamilSentences = tamilSentences.map(s => s.replace(/[^\u0B80-\u0BFF\s]/g, ''));
    const tamilsentence = sanitizedTamilSentences[Math.floor(Math.random() * sanitizedTamilSentences.length)];
    cy.get(this.locators.tamilTemplateBody).type(tamilsentence);
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

  CreateCommunicationTemplate197() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.selectletter).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.selectlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.clickondropdownlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.selectHindiLanguage).contains('Telugu').click();
    cy.wait(1000);
    cy.get(this.locators.addlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.templatebody).type("Please create one Email Communication template");
    cy.wait(1000);
    cy.get(this.locators.selectTeluguTemplate).click();
    cy.wait(1000);

    const teluguSentences = [
      "మీ పేరు ఏమిటి",                      // What is your name
      "నేను పుణె నుండి వచ్చాను",             // I am from Pune
      "ఈ సమాచారం సరైనదేనా",                // Is this information correct
      "దయచేసి ఇక్కడ సంతకం చేయండి",           // Please sign here
      "మనము కొనసాగవచ్చు",                   // We can proceed further
      "నాకు సమాధానం పంపండి",               // Send me the answer
      "మీకు స్వాగతం",                      // You are welcome
      "ఈ పేజీ చదివి పూర్తిచేయండి",          // Complete reading this page
      "దయచేసి కొన్ని క్షణాలు వేచివుండండి",    // Please wait a moment
      "మీ అభ్యర్థన నమోదు చేయబడింది"         // Your request has been recorded
    ];

    // Optional sanitization (removes non-Telugu and non-space characters)
    const sanitizedTeluguSentences = teluguSentences.map(s => s.replace(/[^\u0C00-\u0C7F\s]/g, ''));
    const telugusentence = sanitizedTeluguSentences[Math.floor(Math.random() * sanitizedTeluguSentences.length)];
    cy.get(this.locators.teluguTemplateBody).type(telugusentence);
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

  CreateCommunicationTemplate198() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.selectletter).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.selectlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.clickondropdownlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.selectHindiLanguage).contains('Hindi').click();
    cy.wait(1000);
    cy.get(this.locators.addlanguage).click();
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

  CreateCommunicationTemplate199() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.selectletter).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.selectlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.clickondropdownlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.selectHindiLanguage).contains('Marathi').click();
    cy.wait(1000);
    cy.get(this.locators.addlanguage).click();
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
    cy.get(this.locators.selectMarathiTemplate).click();
    cy.wait(1000);
    const marathiSentences = [
      "तुमचं नाव काय आहे",                  // What is your name?
      "मी पुण्याहून आलो आहे.",              // I am from Pune.
      "ही माहिती बरोबर आहे का",           // Is this information correct?
      "कृपया येथे सही करा",               // Please sign here.
      "आपण पुढे चालू शकतो",               // We can proceed further.
      "माझं उत्तर पाठवा",                 // Send me the answer.
      "तुमचं स्वागत आहे",                 // You are welcome!
      "हे पान वाचून पूर्ण करा",           // Complete reading this page.
      "कृपया थोडा वेळ थांबा",             // Please wait a moment.
      "आपली विनंती नोंदवली गेली आहे"     // Your request has been recorded.
    ];
    const marathisentence = marathiSentences[Math.floor(Math.random() * marathiSentences.length)];
    cy.get(this.locators.marathiTemplateBody).type(marathisentence);
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

  CreateCommunicationTemplate200() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.selectletter).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.selectlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.clickondropdownlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.selectHindiLanguage).contains('Kannada').click();
    cy.wait(1000);
    cy.get(this.locators.addlanguage).click();
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
    cy.get(this.locators.selectKannadaTemplate).click();
    cy.wait(1000);
    const kannadaSentences = [
      "ನಿಮ್ಮ ಹೆಸರು ಏನು",                       // What is your name?
      "ನಾನು ಪುಣೆಯಿಂದ ಬಂದಿದ್ದೇನೆ",            // I am from Pune.
      "ಈ ಮಾಹಿತಿ ಸರಿಯಾಗಿದೆ",                     // Is this information correct?
      "ದಯವಿಟ್ಟು ಇಲ್ಲಿ ಸಹಿ ಮಾಡಿ",              // Please sign here.
      "ನಾವು ಮುಂದುವರಿಯಬಹುದು",                 // We can proceed further.
      "ನನ್ನ ಉತ್ತರ ಕಳುಹಿಸಿ",                  // Send me the answer.
      "ನಿಮ್ಮ ಸ್ವಾಗತ ಇದೆ",                     // You are welcome!
      "ಈ ಪುಟವನ್ನು ಓದಿ ಪೂರ್ಣಗೊಳಿಸಿ",           // Complete reading this page.
      "ದಯವಿಟ್ಟು ಸ್ವಲ್ಪ ಕ್ಷಣ ನಿರೀಕ್ಷಿಸಿ",        // Please wait a moment.
      "ನಿಮ್ಮ ವಿನಂತಿಯನ್ನು ದಾಖಲಿಸಲಾಗಿದೆ"       // Your request has been recorded.
    ];
    const kannadasentence = kannadaSentences[Math.floor(Math.random() * kannadaSentences.length)];
    cy.get(this.locators.kannadaTemplateBody).type(kannadasentence);
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

  CreateCommunicationTemplate201() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.selectletter).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.selectlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.clickondropdownlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.selectHindiLanguage).contains('Malayalam').click();
    cy.wait(1000);
    cy.get(this.locators.addlanguage).click();
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
    cy.get(this.locators.selectMalayalamTemplate).click();
    cy.wait(1000);

    const malayalamSentences = [
      "നിന്റെ പേര് എന്താണ്",                       // What is your name
      "ഞാൻ പുനെയിൽ നിന്ന് വന്നതാണ്",            // I am from Pune
      "ഈ വിവരങ്ങൾ ശരിയാണല്ലോ",                   // This information is correct
      "ദയവായി ഇവിടെ ഒപ്പിടുക",                  // Please sign here
      "നമുക്ക് തുടരാം",                          // We can proceed further
      "എനിക്ക് ഉത്തരമയക്കൂ",                      // Send me the answer
      "സ്വാഗതം",                                // You are welcome
      "ഈ പേജ് വായിച്ചു പൂർത്തിയാക്കുക",          // Complete reading this page
      "ദയവായി കുറച്ച് നേരം കാത്തിരിക്കുക",         // Please wait a moment
      "നിന്റെ അഭ്യർത്ഥന രജിസ്റ്റർ ചെയ്തിരിക്കുന്നു" // Your request has been recorded
    ];

    // Optional: strip any lingering special characters just in case
    const sanitizedSentences = malayalamSentences.map(s => s.replace(/[^\u0D00-\u0D7F\s]/g, ''));
    const malayalamsentence = sanitizedSentences[Math.floor(Math.random() * sanitizedSentences.length)];
    cy.get(this.locators.malayalamTemplateBody).type(malayalamsentence);
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

  CreateCommunicationTemplate202() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.selectletter).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.selectlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.clickondropdownlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.selectHindiLanguage).contains('Tamil').click();
    cy.wait(1000);
    cy.get(this.locators.addlanguage).click();
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
    cy.get(this.locators.selectTamilTemplate).click();
    cy.wait(1000);

    const tamilSentences = [
      "உங்கள் பெயர் என்ன",                     // What is your name
      "நான் புனேயிலிருந்து வந்தேன்",           // I am from Pune
      "இந்த தகவல் சரியானதா",                  // Is this information correct
      "தயவுசெய்து இங்கு கையொப்பமிடவும்",       // Please sign here
      "நாம் தொடரலாம்",                        // We can proceed further
      "எனது பதிலை அனுப்பு",                  // Send me the answer
      "நீங்கள் வரவேற்கப்படுகிறீர்கள்",          // You are welcome
      "இந்த பக்கத்தை வாசித்து முடிக்கவும்",       // Complete reading this page
      "தயவுசெய்து சிறிது நேரம் காத்திருக்கவும்",  // Please wait a moment
      "உங்கள் கோரிக்கை பதிவாகியுள்ளது"         // Your request has been recorded
    ];

    // Optional sanitization (removes non-Tamil and non-space characters)
    const sanitizedTamilSentences = tamilSentences.map(s => s.replace(/[^\u0B80-\u0BFF\s]/g, ''));
    const tamilsentence = sanitizedTamilSentences[Math.floor(Math.random() * sanitizedTamilSentences.length)];
    cy.get(this.locators.tamilTemplateBody).type(tamilsentence);
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

  CreateCommunicationTemplate203() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomname = "Template " + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template " + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.selectletter).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.selectlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.clickondropdownlanguage).click();
    cy.wait(1000);
    cy.get(this.locators.selectHindiLanguage).contains('Telugu').click();
    cy.wait(1000);
    cy.get(this.locators.addlanguage).click();
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
    cy.get(this.locators.selectTeluguTemplate).click();
    cy.wait(1000);

    const teluguSentences = [
      "మీ పేరు ఏమిటి",                      // What is your name
      "నేను పుణె నుండి వచ్చాను",             // I am from Pune
      "ఈ సమాచారం సరైనదేనా",                // Is this information correct
      "దయచేసి ఇక్కడ సంతకం చేయండి",           // Please sign here
      "మనము కొనసాగవచ్చు",                   // We can proceed further
      "నాకు సమాధానం పంపండి",               // Send me the answer
      "మీకు స్వాగతం",                      // You are welcome
      "ఈ పేజీ చదివి పూర్తిచేయండి",          // Complete reading this page
      "దయచేసి కొన్ని క్షణాలు వేచివుండండి",    // Please wait a moment
      "మీ అభ్యర్థన నమోదు చేయబడింది"         // Your request has been recorded
    ];

    // Optional sanitization (removes non-Telugu and non-space characters)
    const sanitizedTeluguSentences = teluguSentences.map(s => s.replace(/[^\u0C00-\u0C7F\s]/g, ''));
    const telugusentence = sanitizedTeluguSentences[Math.floor(Math.random() * sanitizedTeluguSentences.length)];
    cy.get(this.locators.teluguTemplateBody).type(telugusentence);
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
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const randomname = "Template_" + Array.from({ length: 8 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const subjectline = "Template_" + Array.from({ length: 30 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    cy.wait(1000);
    cy.get(this.locators.communicationtemplate).click();
    cy.wait(1000);
    cy.get(this.locators.selectletter).click();
    cy.wait(1000);
    cy.get(this.locators.templatename).type(randomname);
    cy.wait(1000);
    cy.get(this.locators.templatebody).type("Please create one Letter Communication template");
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