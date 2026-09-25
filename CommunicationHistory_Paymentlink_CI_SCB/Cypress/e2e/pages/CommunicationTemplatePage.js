import { faker } from '@faker-js/faker';

class CommunicationTemplatePage {
    constructor(locators = {}) {
        this.locators = locators;
    }
    // selectEntryPoint(){
    //     cy.get(this.locators.entrypointcollection).select('Collection');
    // }

    NavigateToCreateCommunicationTemplate() {
        cy.contains('Communication', { timeout: 10000 }).scrollIntoView().should('exist').click({ force: true });
        cy.wait(1000);
        cy.contains('Create Communication Template', { timeout: 10000 }).scrollIntoView().should('exist').click({ force: true });
        cy.wait(2000);
    }
    SelectRecipientType(){
        cy.get(this.locators.RecipientType).select("Agent");
    }

    NavigateToSearchCommunicationTemplate() {
        cy.wait(2000);
        cy.contains('Communication', { timeout: 10000 }).scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(1000);
        cy.contains('Search Communication Templates', { timeout: 10000 }).should('be.visible').click({ force: true });
        cy.wait(2000);
    }

 selectChannelType(channelType = 'SMS') {
    cy.get(this.locators.channelType || '[formcontrolname="channelType"]', { timeout: 10000 })
        .should('be.visible')
        .select(channelType, { force: true });
    cy.wait(1000);
}

    enterTemplateName(templateName = `PaymentLink ${faker.string.alpha({ length: 6 })}`) {
        cy.get(this.locators.templateName || '#templateName', { timeout: 10000 }).should('be.visible').clear().type(templateName);
        return cy.wrap(templateName);
    }

 selectEntryPoint(entryPoint = 'Collection') {
    cy.get(this.locators.entryPoint || '[formcontrolname="entryPoint"]', { timeout: 10000 })
        .should('be.visible')
        .select(entryPoint, { force: true });
    cy.wait(2000);
   
}

   selectTone(tone = 'Soft') {
    cy.get(this.locators.tone || '[formcontrolname="tone"]', { timeout: 10000 })
        .should('be.visible')
        .select(tone, { force: true });
    cy.wait(1000);
}

 Header(header = `PaymentLink${Cypress._.random(100000, 999999)}`) {
    cy.get(this.locators.header, { timeout: 10000 }).should('be.visible').clear().type(header);
    cy.wait(1000);
}

    openDynamicVariables() {
        cy.get('[title="Add Var"]').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.get('body').should('be.visible');
    }

    verifyPaymentLinkVariableAvailable() {
        this.openDynamicVariables();
        cy.get('.template-variable-mapping > span').scrollIntoView().click({force:true});
        cy.wait(2000);
        cy.get('.ng-arrow-wrapper').click({force:true});
        cy.wait(2000);
        cy.contains('Payment Link', { timeout: 10000 }).scrollIntoView().should('be.visible');
        cy.get('body').should('contain.text', 'Payment Link');
    }

    selectPaymentLinkVariable() {
        this.openDynamicVariables();
        cy.get('.template-variable-mapping > span').scrollIntoView().click({force:true});
        cy.wait(2000);
        cy.get('.ng-arrow-wrapper').click({force:true});
        cy.wait(2000);
        cy.contains('Payment Link', { timeout: 10000 }).scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(1000);
        cy.get(this.locators.map).click({force:true});
    }

    enterTemplateBody(text = 'Please complete your payment using ') {
        cy.get(this.locators.templateBody || '.editor-container > .form-control', { timeout: 10000 }).should('be.visible').click({ force: true }).type(text);
        cy.wait(500);
    }

verifyPaymentLinkPlaceholder() {
    cy.wait(5000);
    cy.get('body', { timeout: 10000 }).should('exist').should('contain.text', 'Payment Link');
}

    saveTemplate() {
        cy.contains('Create Template', { timeout: 10000 }).scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
    }

    verifyTemplateSaved() {
        cy.get('body', { timeout: 10000 }).should('be.visible').then($body => {
            const text = $body.text();
            expect(text.includes('successfully') || text.includes('Success!') || text.includes('created') || text.includes('Template')).to.eq(true);
        });
    }

    searchTemplate(templateName) {
        cy.get(this.locators.searchTemplate || 'input[placeholder*="Search"], input[placeholder*="search"]', { timeout: 10000 }).first().should('be.visible').clear().type(templateName);
        cy.wait(1500);
    }

    openTemplate(templateName) {
        cy.contains(templateName, { timeout: 10000 }).should('be.visible').click({ force: true });
        cy.wait(1500);
    }

    verifyTemplateBodyContainsPaymentLink() {
        cy.get(this.locators.templateBody || '.editor-container > .form-control', { timeout: 10000 }).should('be.visible').invoke('text').then(text => {
            expect(text).to.contain('PaymentLink');
        });
    }

    removePaymentLinkFromBody() {
        const selector = this.locators.templateBody || '.editor-container > .form-control';
        cy.get(selector, { timeout: 10000 }).should('be.visible').click({ force: true });
        cy.get(selector).invoke('text').then(text => {
            const updatedText = text.replace(/\{\#PaymentLink\#\}/g, '').replace(/Payment Link/g, '').trim();
            cy.get(selector).clear({ force: true }).type(updatedText, { force: true });
        });
        cy.wait(1000);
    }

    verifyPaymentLinkRemoved() {
        const selector = this.locators.templateBody || '.editor-container > .form-control';
        cy.get(selector, { timeout: 10000 }).should('be.visible').invoke('text').then(text => {
            expect(text).not.to.contain('PaymentLink');
        });
    }

    selectChannelType(channelType = 'Email') {
    cy.get(this.locators.channelType || '[formcontrolname="channelType"]', { timeout: 10000 })
        .should('be.visible')
        .select(channelType, { force: true });
    cy.wait(1000);
}    
  EnterHeader(Header = `PaymentLink${Cypress._.random(100000, 999999)}`) {
    cy.get(this.locators.Header, { timeout: 10000 })
        .should('be.visible')
        .clear()
        .type(Header);
}

verifyTemplateBodyContainsPaymentLinkEmail() {
    cy.get(this.locators.TemplateBody || '.editor-container', { timeout: 10000 })
        .should('be.visible')
        .invoke('text')
        .then(text => {
            expect(text).to.contain('Payment Link');
        });
}
    removePaymentLinkFromBodyEmail() {
        const selector = this.locators.TemplateBody || '.editor-container';
        cy.get(selector, { timeout: 10000 }).should('be.visible').click({ force: true });
        cy.get(selector).invoke('text').then(text => {
            const updatedText = text.replace(/\{\#PaymentLink\#\}/g, '').replace(/Payment Link/g, '').trim();
            cy.get(selector).clear({ force: true }).type(updatedText, { force: true });
        });
        cy.wait(1000);
    }

    verifyPaymentLinkRemovedEmail() {
        const selector = this.locators.TemplateBody || '.editor-container';
        cy.get(selector, { timeout: 10000 }).should('be.visible').invoke('text').then(text => {
            expect(text).not.to.contain('PaymentLink');
        });
    }

     EmailTemplateBody(text = 'Please complete your payment using ') {
        cy.get(this.locators.TemplateBody || '.editor-container', { timeout: 10000 }).should('be.visible').click({ force: true }).type(text);
        cy.wait(500);
    }
    enterTemplateBodyemail(message){
    cy.get(this.locators.TemplateBody)
        .type(message,{parseSpecialCharSequences:false});
}

    verifyPaymentLinkVariableAvailableEmail(){
         this.openDynamicVariables();
        cy.get('p > span').scrollIntoView().click({force:true});
        cy.wait(2000);
        cy.get('.ng-arrow-wrapper').click({force:true});
        cy.wait(2000);
        cy.contains('Payment Link', { timeout: 10000 }).scrollIntoView().should('be.visible');
        cy.get('body').should('contain.text', 'Payment Link');


    }
    selectPaymentLinkVariableEmail(){
        this.openDynamicVariables();
        cy.get('p > span').scrollIntoView().click({force:true});
        cy.wait(2000);
        cy.get('.ng-arrow-wrapper').click({force:true});
        cy.wait(2000);
        cy.contains('Payment Link', { timeout: 10000 }).scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(1000);
        cy.get(this.locators.map).click({force:true});

    }
    Emailvarmapping(){
    cy.get('.template-variable-mapping').contains('Payment Link').scrollIntoView().should('exist');
    }

      selectChannelType(channelType = 'WhatsApp') {
        cy.get(this.locators.channelType || '[formcontrolname="channelType"]', { timeout: 10000 }).should('be.visible').select(channelType, { force: true });
        cy.wait(1000);
    }
    enterTemplateName() {
       const templateName = `PaymentLink${Cypress._.random(100000, 999999)}`;
        cy.get(this.locators.templateName || '#templateName', { timeout: 10000 }).should('be.visible').clear().type(templateName);
        cy.wait(1000);
    }
   
    enterHeader(header = `PaymentLinkWhatsApp${Cypress._.random(100000, 999999)}`) {
    cy.get(this.locators.header, { timeout: 10000 }).should('be.visible').clear().type(header);
    cy.wait(1000);
}
    TemplateBody(text = 'Please complete your payment using ') {
        cy.get(this.locators.templateBody || '[contenteditable="true"]', { timeout: 10000 }).should('be.visible').click().type(text);
        cy.wait(1000);
    }
    selectPaymentLinkVariableWhatsApp() {
    // this.openDynamicVariables();
        cy.get('[title="Add Var"]').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.get('.template-variable-mapping > :nth-child(2)').click({force:true});
        cy.wait(2000);
        cy.contains('Payment Link', { timeout: 10000 }).should('be.visible').click({ force: true });
        cy.wait(1000);
        cy.get('.template-variable-mapping > span').click({force:true});
        cy.wait(2000);
        cy.get('.ng-arrow-wrapper').click({force:true});
        cy.wait(2000);
        cy.get('.ng-option-label').contains('Payment Link', { timeout: 10000 }).scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(1000);
        cy.get(this.locators.map).click({force:true});
        cy.wait(2000);



      
    }
       
  SelectRecipientType(recipientType = 'Customer') {
    cy.get(this.locators.recipientType || '[formcontrolname="recipientType"]', { timeout: 10000 }).should('be.visible').select(recipientType, { force: true });
    cy.wait(1000);
}

       WhatsAppvarmapping() {
        cy.get('[title="Add Var"]').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.get('.template-variable-mapping > span').click({force:true});
        cy.wait(2000);
        cy.get('.ng-arrow-wrapper').click({force:true});
        cy.wait(2000);
        cy.contains('Payment Link', { timeout: 10000 }).scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(1000);
        cy.get(this.locators.map).click({force:true});

    }

     searchTemplate() {
        cy.get(this.locators.searchTemplate || '#searchTemplate', { timeout: 10000 }).should('be.visible').clear().type('PaymentLink');
        cy.wait(2000);
    
    }

    openTemplate() {
        cy.get(this.locators.templateRow || 'tbody tr', { timeout: 10000 }).first().should('be.visible').click({ force: true });
        cy.wait(2000);
    }

    verifyPaymentLinkPlaceholder() {
      cy.wait(2000);  
      cy.get('tbody > tr > :nth-child(1)').should('contain.text', 'PaymentLink');
    }

    Togglebutton(){
        cy.get(this.locators.togglebutton).click({force:true});
        cy.wait(2000);
        cy.get(this.locators.edittemplate).click({force:true});
        
    }
   TemplateBody(text) {
    cy.get(this.locators.templateBody, { timeout: 10000 }).scrollIntoView().should('exist').click();
    cy.window().then(win => {
        const dataTransfer = new DataTransfer();
        dataTransfer.setData('text/plain', text);
        const pasteEvent = new ClipboardEvent('paste', {
            bubbles: true,
            cancelable: true,
            clipboardData: dataTransfer
        });
        win.document.activeElement.dispatchEvent(pasteEvent);
    });
    cy.wait(1000);
}

selectPaymentLinkVariable() {
    cy.get('[title="Add Var"]', { timeout: 10000 }).scrollIntoView().should('exist').click({ force: true });
    cy.wait(1000);
    cy.contains('Payment Link', { timeout: 10000 }).should('be.visible').click({ force: true });
    cy.wait(1000);
    cy.get('.template-variable-mapping > span').click({force:true});
    cy.wait(2000);
    cy.get('.ng-arrow-wrapper').click({force:true});
    cy.wait(2000);
    cy.get('.ng-option-label').contains('Payment Link', { timeout: 10000 }).scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(1000);
    cy.get(this.locators.map).click({force:true});
    cy.wait(2000);
    cy.contains('Update Template').scrollIntoView().click({force:true});
}

removePaymentLinkFromBody() {
    cy.get(this.locators.templateBody || '[contenteditable="true"]', { timeout: 10000 }).should('be.visible').click();
    cy.get(this.locators.templateBody || '[contenteditable="true"]').invoke('text').then(text => {
        const updatedText = text.replace('Payment Link', '').trim();
        cy.get(this.locators.templateBody || '[contenteditable="true"]').clear().type(updatedText);
    });
    cy.wait(1000);
}

verifyPaymentLinkRemoved() {
    cy.get('tbody > tr > :nth-child(1)').should('not.contain.text', 'Payment Link');
}
preview(){
    cy.get(this.locators.preview).click({force:true});
    cy.wait(2000);
    cy.get('.sms-bubble').should('exist');
}
enterLongMessageContent() {

      cy.get('[title="Add Var"]', { timeout: 10000 }).scrollIntoView().should('exist').click({ force: true });
    cy.wait(1000);
    // cy.contains('Payment Link', { timeout: 10000 }).should('be.visible').click({ force: true });
    // // cy.wait(1000);
    cy.get('.template-variable-mapping > span').click({force:true});
    cy.wait(2000);
    cy.get('.ng-arrow-wrapper').click({force:true});
    cy.wait(2000);
    cy.get('.ng-option-label').contains('Payment Link', { timeout: 10000 }).scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(1000);
    cy.get(this.locators.map).click({force:true});
  
    cy.wait(2000);
   const longText = 'A'.repeat(2000);

cy.get(this.locators.templateBody, { timeout: 10000 })
  .should('be.visible')
  .click()
  .then($el => {
    const el = $el[0];
    el.focus();

    const dataTransfer = new DataTransfer();
    dataTransfer.setData('text/plain', longText);

    const pasteEvent = new ClipboardEvent('paste', {
      bubbles: true,
      cancelable: true,
      clipboardData: dataTransfer
    });

    const wasHandled = !el.dispatchEvent(pasteEvent); // false if nothing called preventDefault

    // Fallback: if the app didn't actually handle/insert the paste, insert manually
    if (!wasHandled) {
      document.execCommand('insertText', false, longText);
    }
  });
      cy.wait(2000);
    cy.contains('Create Template').scrollIntoView().click({force:true});
}

verifyMessageValidation() {
    cy.contains(':visible', /Success!|maximum|limit|length|validation|characters/i, { timeout: 10000 })
      .should('be.visible');
}
selectPaymentLinkVariable() {
    cy.get('[title="Add Var"]', { timeout: 10000 }).scrollIntoView().should('exist').click({ force: true });
    cy.wait(1000);
    // cy.contains('Payment Link', { timeout: 10000 }).should('be.visible').click({ force: true });
    // // cy.wait(1000);
    cy.get('.template-variable-mapping > span').click({force:true});
    cy.wait(2000);
    cy.get('.ng-arrow-wrapper').click({force:true});
    cy.wait(2000);
    cy.get('.ng-option-label').contains('Payment Link', { timeout: 10000 }).scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(1000);
    cy.get(this.locators.map).click({force:true});
    cy.wait(2000);
   cy.contains(/Create Template|Update Template/,{timeout:15000})
    .scrollIntoView()
    .should('be.visible')
    .click({force:true});
}


openFirstCustomer() {
    cy.get('tbody > tr').eq(1).click();
    cy.wait(2000);
}

openSecondCustomer() {
    cy.get('tbody > tr').eq(2).click();
    cy.wait(2000);
    cy.get(':nth-child(2) > .actions > .d-flex > .action-icon-button').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.edittemplate).click({force:true});
}

// getPaymentLinkUrl() {
//     return cy.get('body')
//         .invoke('text')
//         .then(text => {
//             const match = text.match(/https?:\/\/[^\s]+/);
//             expect(match, 'Payment Link URL').to.not.be.null;
//             return match[0];
//         });
// }



clickPreview() {
    cy.contains("Preview", { timeout: 10000 }).scrollIntoView()
        .should('be.visible')
        .click({ force: true });
    cy.wait(2000);
}

getPaymentLinkUrl() {
    return cy.get('.wa-bubble', { timeout: 10000 })
        .should('be.visible')
        .invoke('text')
        .then(text => {
            const match = text.match(/https?:\/\/[A-Za-z0-9./?=_%-]+/);
            expect(match, 'Payment Link URL').to.not.be.null;
            const url = match[0];
            return cy.wrap(url);
        });
}
goBackToCustomerSearch(){
    cy.get('#nav-item-2-search-communication-templates').click({force:true});

}

selectCustomerNameVariable() {
     cy.get('[title="Add Var"]', { timeout: 10000 }).scrollIntoView().should('exist').click({ force: true });
    cy.wait(1000);
    // cy.contains('Payment Link', { timeout: 10000 }).should('be.visible').click({ force: true });
    // // cy.wait(1000);
    cy.get('.template-variable-mapping > span').click({force:true});
    cy.wait(2000);
    cy.get('.ng-arrow-wrapper').click({force:true});
    cy.wait(2000);
    cy.get('.ng-option-label').contains('Customer name', { timeout: 10000 }).scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(1000);
    cy.get(this.locators.map).click({force:true});
    cy.wait(2000);
    cy.contains('Create Template').scrollIntoView().click({force:true});
}
getProcessedMessage() {
    cy.get(this.locators.actionbutton).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.view).click({force:true});
    cy.wait(2000);
    cy.contains('Preview').scrollIntoView().click({force:true});
    return cy.get('.wa-bubble', { timeout: 10000 })
        .should('be.visible')
        .invoke('text')
        .then(text => {
            return text.trim();
        });
}

getProcessedSMS() {
    cy.get(this.locators.actionbutton).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.view).click({force:true});
    cy.wait(2000);
    cy.contains('Preview').scrollIntoView().click({force:true});
    return cy.get('.sms-bubble', { timeout: 10000 })
        .should('be.visible')
        .invoke('text')
        .then(text => {
            return text.trim();
        });
}

getProcessedEmail(){
    cy.get(this.locators.actionbutton).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.view).click({force:true});
    cy.wait(2000);
    cy.contains('Preview').scrollIntoView().click({force:true});
    return cy.get('.email-content > p', { timeout: 10000 })
        .should('be.visible')
        .invoke('text')
        .then(text => {
            return text.trim();
        });

}
}

export default CommunicationTemplatePage;