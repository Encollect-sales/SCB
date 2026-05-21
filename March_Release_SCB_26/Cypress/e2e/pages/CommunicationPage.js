import { getLocators } from "../utils/locatorUtils";
import { getBaseUrl } from "../utils/configUtils";
import { faker } from "@faker-js/faker";

class CommunicationPage {
  constructor(locators) {
    this.locators = locators;
  }

 CommunicationPage_01(){
  cy.get(this.locators.Communication).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Create_communication).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.channel_type).select('Email');
  cy.wait(2000);
  cy.get(this.locators.entry_point).select('Account');
  cy.wait(2000);
  cy.get(this.locators.Recipient_Type).select('Customer');
  cy.contains('Allow this template to be sent by FOS/TC from account details screen').should('be.visible');
 

 }
 CommunicationPage_02(){
  cy.get(this.locators.Communication).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Create_communication).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.channel_type).select('Email');
  cy.wait(2000);
  cy.get(this.locators.entry_point).select('Account');
  cy.wait(2000);
  cy.get('#allowAccessYes')
    .should('exist')
    .and('be.visible');
  cy.get('#allowAccessNo')
    .should('exist')
    .and('be.visible');


 }
 CommunicationPage_03(){
  cy.get(this.locators.Communication).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Create_communication).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.channel_type).select('Email');
  cy.wait(2000);
  cy.get(this.locators.entry_point).select('Account');
  cy.wait(2000);
  cy.get('#allowAccessNo')
    .should('be.checked');
 }

 CommunicationPage_04(){

  cy.get(this.locators.Communication).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Create_communication).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.channel_type).select('Email');
  cy.wait(2000);
  cy.get(this.locators.entry_point).select('Account');
  cy.wait(2000);
  cy.get(this.locators.Recipient_Type).select('Customer');
  cy.wait(2000);
  cy.contains('Allow this template to be sent by FOS/TC from account details screen')
    .should('be.visible');
  cy.get('#allowAccessYes')
    .click()
    .should('be.checked');
 }
CommunicationPage_05(){

  cy.get(this.locators.Communication).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Create_communication).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.channel_type).select('Email');
  cy.wait(2000);
  cy.get(this.locators.entry_point).select('Account');
  cy.wait(2000);
  cy.get(this.locators.Recipient_Type).select('Customer');
  cy.wait(2000);
  cy.get('#allowAccessYes')
    .click()
    .should('be.checked');
  cy.get('#allowAccessNo')
    .should('not.be.checked');
  cy.get('#allowAccessNo')
    .click()
    .should('be.checked');
  cy.get('#allowAccessYes')
    .should('not.be.checked');

}
CommunicationPage_06(){
   function generateRandomText(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return result;
}

const randomHeader = generateRandomText(10);
const randomTemplateName = generateRandomText(10);
const randomMessage = generateRandomText(20);
  cy.contains("Communication").click({force:true});
  cy.wait(2000);
  cy.contains("Create Communication Template").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.channel_type).select('Notification');
  cy.wait(2000);
  cy.get(this.locators.entry_point).select('Account');
  cy.wait(2000);
  cy.get(this.locators.Recipient_Type).select('Agent');
  cy.wait(2000);
  cy.get(this.locators.Header).type(randomHeader);
  cy.wait(2000);
  cy.get(this.locators.template_name).type(randomTemplateName);
  cy.wait(2000);
  cy.get(this.locators.MessageTemplate).type(randomMessage);
  cy.wait(2000);
  cy.get(".btn-secondary").click({force:true});
  cy.wait(3000);
  cy.get(this.locators.search_template).type(randomTemplateName);
  cy.wait(2000);
  cy.get(this.locators.Click_icon).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.view).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.preview).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.previewscreen).scrollIntoView().should('be.visible');
}
CommunicationPage_07(){
  function generateRandomText(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return result;
}

const randomHeader = generateRandomText(10);
const randomTemplateName = generateRandomText(10);
const randomMessage = generateRandomText(20);
  cy.contains("Communication").click({force:true});
  cy.wait(2000);
  cy.contains("Create Communication Template").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.channel_type).select('Notification');
  cy.wait(2000);
  cy.get(this.locators.entry_point).select('Account');
  cy.wait(2000);
  cy.get(this.locators.Recipient_Type).select('Agent');
  cy.wait(2000);
  cy.get(this.locators.Header).type(randomHeader);
  cy.wait(2000);
  cy.get(this.locators.template_name).type(randomTemplateName);
  cy.wait(2000);
  cy.get(this.locators.MessageTemplate).type(randomMessage);
  cy.wait(2000);
  cy.get(".btn-secondary").click({force:true});
  cy.wait(3000);
  cy.get(this.locators.search_template).type(randomTemplateName);
  cy.wait(2000);
  cy.get(this.locators.Click_icon).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.view).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.preview).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.previewscreen).scrollIntoView().should('be.visible');
  cy.wait(2000);
  cy.get(this.locators.template_body).scrollIntoView().should('be.visible');
  cy.wait(2000);
  cy.get(this.locators.template_body_inside_preview_screen).scrollIntoView().should('be.visible');
}
CommunicationPage_08(){
   function generateRandomText(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return result;
}

const randomHeader = generateRandomText(10);
const randomTemplateName = generateRandomText(10);
const randomMessage = generateRandomText(20);
  cy.contains("Communication").click({force:true});
  cy.wait(2000);
  cy.contains("Create Communication Template").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.channel_type).select('Notification');
  cy.wait(2000);
  cy.get(this.locators.entry_point).select('Account');
  cy.wait(2000);
  cy.get(this.locators.Recipient_Type).select('Agent');
  cy.wait(2000);
  cy.get(this.locators.Header).type(randomHeader);
  cy.wait(2000);
  cy.get(this.locators.template_name).type(randomTemplateName);
  cy.wait(2000);
  cy.get(this.locators.MessageTemplate).type(randomMessage);
  cy.wait(2000);
  cy.get(".btn-secondary").click({force:true});
  cy.wait(3000);
  cy.get(this.locators.search_template).type(randomTemplateName);
  cy.wait(2000);
  cy.get(this.locators.Click_icon).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.view).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.preview).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.previewscreen).scrollIntoView().should('be.visible');
  cy.wait(2000);
  cy.get(this.locators.template_header_inside_preview_screen).scrollIntoView().should('be.visible');

}
CommunicationPage_09(){
  function generateRandomText(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return result;
}

const randomHeader = generateRandomText(10);
const randomTemplateName = generateRandomText(10);
const randomMessage = generateRandomText(20);
  cy.contains("Communication").click({force:true});
  cy.wait(2000);
  cy.contains("Create Communication Template").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.channel_type).select('Notification');
  cy.wait(2000);
  cy.get(this.locators.entry_point).select('Account');
  cy.wait(2000);
  cy.get(this.locators.Recipient_Type).select('Agent');
  cy.wait(2000);
  cy.get(this.locators.Header).type(randomHeader);
  cy.wait(2000);
  cy.get(this.locators.template_name).type(randomTemplateName);
  cy.wait(2000);
  cy.get(this.locators.MessageTemplate).type(randomMessage);
  cy.wait(2000);
  cy.get(".btn-secondary").click({force:true});
  cy.wait(3000);
  cy.get(this.locators.search_template).type(randomTemplateName);
  cy.wait(2000);
  cy.get(this.locators.Click_icon).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.view).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.preview).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.previewscreen).should('exist');
  cy.wait(2000);
  cy.get(this.locators.template_header_inside_preview_screen).scrollIntoView().should('be.visible');
  cy.wait(2000);
  cy.get(this.locators.template_body_inside_preview_screen).scrollIntoView().should('be.visible');

}

CommunicationPage_010(){

function generateRandomText(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return result;
}

const randomHeader = generateRandomText(10);
const randomTemplateName = generateRandomText(10);
const randomMessage = generateRandomText(20);

cy.contains("Communication").click({force:true});
cy.wait(2000);

cy.contains("Create Communication Template").click({force:true});
cy.wait(2000);

cy.get(this.locators.channel_type).select('Email');
cy.wait(2000);

cy.get(this.locators.entry_point).select('Account');
cy.wait(2000);

cy.get(this.locators.Recipient_Type).select('Customer');
cy.wait(2000);

cy.get(this.locators.subjectline).type(randomHeader);
cy.wait(2000);

cy.get(this.locators.template_name).type(randomTemplateName);
cy.wait(2000);

cy.get(this.locators.template_body_email).type(randomMessage);
cy.wait(2000);

cy.get(".btn-secondary").click({force:true});
cy.wait(3000);

cy.get(this.locators.search_template).type(randomTemplateName);
cy.wait(2000);

cy.get(this.locators.Click_icon).click({force:true});
cy.wait(2000);

cy.get(this.locators.view).click({force:true});
cy.wait(2000);

cy.get(this.locators.preview).click({force:true});
cy.wait(2000);

cy.get(this.locators.previewscreengmail).should('exist');

}
CommunicationPage_011(){

function generateRandomText(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return result;
}

const randomHeader = generateRandomText(10);
const randomTemplateName = generateRandomText(10);
const randomMessage = generateRandomText(20);

cy.contains("Communication").click({force:true});
cy.wait(2000);

cy.contains("Create Communication Template").click({force:true});
cy.wait(2000);

cy.get(this.locators.channel_type).select('Email');
cy.wait(2000);

cy.get(this.locators.entry_point).select('Account');
cy.wait(2000);

cy.get(this.locators.Recipient_Type).select('Customer');
cy.wait(2000);

cy.get(this.locators.Header).type(randomHeader);
cy.wait(2000);

cy.get(this.locators.template_name).type(randomTemplateName);
cy.wait(2000);

cy.get(this.locators.MessageTemplate).type(randomMessage);
cy.wait(2000);

cy.get(".btn-secondary").click({force:true});
cy.wait(3000);

cy.get(this.locators.search_template).type(randomTemplateName);
cy.wait(2000);

cy.get(this.locators.Click_icon).click({force:true});
cy.wait(2000);

cy.get(this.locators.view).click({force:true});
cy.wait(2000);

cy.get(this.locators.preview).click({force:true});
cy.wait(2000);

cy.get(this.locators.previewscreengmail).should('exist');


cy.get(this.locators.gmail_body_inside_preview_screen)
  .scrollIntoView()
 .should('exist');

}
CommunicationPage_012(){

function generateRandomText(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return result;
}

const randomHeader = generateRandomText(10);
const randomTemplateName = generateRandomText(10);
const randomMessage = generateRandomText(20);

cy.contains("Communication").click({force:true});
cy.wait(2000);

cy.contains("Create Communication Template").click({force:true});
cy.wait(2000);

cy.get(this.locators.channel_type).select('Email');
cy.wait(2000);

cy.get(this.locators.entry_point).select('Account');
cy.wait(2000);

cy.get(this.locators.Recipient_Type).select('Customer');
cy.wait(2000);

cy.get(this.locators.Header).type(randomHeader);
cy.wait(2000);

cy.get(this.locators.template_name).type(randomTemplateName);
cy.wait(2000);

cy.get(this.locators.MessageTemplate).type(randomMessage);
cy.wait(2000);

cy.get(".btn-secondary").click({force:true});
cy.wait(3000);

cy.get(this.locators.search_template).type(randomTemplateName);
cy.wait(2000);

cy.get(this.locators.Click_icon).click({force:true});
cy.wait(2000);

cy.get(this.locators.view).click({force:true});
cy.wait(2000);

cy.get(this.locators.preview).click({force:true});
cy.wait(2000);

cy.get(this.locators.previewscreengmail).should('exist');

cy.get(this.locators.gmail_header_inside_preview_screen)
  .scrollIntoView()
  .should('exist');


}
CommunicationPage_013(){

function generateRandomText(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return result;
}

const randomHeader = generateRandomText(10);
const randomTemplateName = generateRandomText(10);
const randomMessage = generateRandomText(20);

cy.contains("Communication").click({force:true});
cy.wait(2000);

cy.contains("Create Communication Template").click({force:true});
cy.wait(2000);

cy.get(this.locators.channel_type).select('Email');
cy.wait(2000);

cy.get(this.locators.entry_point).select('Account');
cy.wait(2000);

cy.get(this.locators.Recipient_Type).select('Customer');
cy.wait(2000);

cy.get(this.locators.Header).type(randomHeader);
cy.wait(2000);

cy.get(this.locators.template_name).type(randomTemplateName);
cy.wait(2000);

cy.get(this.locators.MessageTemplate).type(randomMessage);
cy.wait(2000);

cy.get(".btn-secondary").click({force:true});
cy.wait(3000);

cy.get(this.locators.search_template).type(randomTemplateName);
cy.wait(2000);

cy.get(this.locators.Click_icon).click({force:true});
cy.wait(2000);

cy.get(this.locators.view).click({force:true});
cy.wait(2000);

cy.get(this.locators.preview).click({force:true});
cy.wait(2000);

cy.get(this.locators.previewscreengmail).should('exist');

cy.get(this.locators.gmail_header_inside_preview_screen)
  .scrollIntoView()
 .should('exist');

cy.get(this.locators.gmail_body_inside_preview_screen)
  .scrollIntoView()
  .should('exist');


}
CommunicationPage_014(){

function generateRandomText(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return result;
}

const randomHeader = generateRandomText(10);
const randomTemplateName = generateRandomText(10);
const randomMessage = generateRandomText(20);

cy.contains("Communication").click({force:true});
cy.wait(2000);
cy.contains("Create Communication Template").click({force:true});
cy.wait(2000);
cy.get(this.locators.channel_type).select('SMS');
cy.wait(2000);
cy.get(this.locators.entry_point).select('Account');
cy.wait(2000);
cy.get(this.locators.Recipient_Type).select('Customer');
cy.wait(2000);
cy.get(this.locators.smsheader).type(randomHeader);
cy.wait(2000);
cy.get(this.locators.template_name).type(randomTemplateName);
cy.wait(2000);
cy.get(this.locators.smstemplate).invoke('val', randomMessage).trigger('input');
cy.wait(2000);
cy.get(".btn-secondary").click({force:true});
cy.wait(3000);
cy.get(this.locators.search_template).type(randomTemplateName);
cy.wait(2000);
cy.get(this.locators.Click_icon).click({force:true});
cy.wait(2000);
cy.get(this.locators.view).click({force:true});
cy.wait(2000);
cy.get(this.locators.preview).click({force:true});
cy.wait(2000);
cy.get(this.locators.sms_preview_screen).should('exist');



}
CommunicationPage_015(){

function generateRandomText(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return result;
}

const randomHeader = generateRandomText(10);
const randomTemplateName = generateRandomText(10);
const randomMessage = generateRandomText(20);

cy.contains("Communication").click({force:true});
cy.wait(2000);
cy.contains("Create Communication Template").click({force:true});
cy.wait(2000);
cy.get(this.locators.channel_type).select('SMS');
cy.wait(2000);
cy.get(this.locators.entry_point).select('Account');
cy.wait(2000);
cy.get(this.locators.Recipient_Type).select('Customer');
cy.wait(2000);
cy.get(this.locators.smsheader).type(randomHeader);
cy.wait(2000);
cy.get(this.locators.template_name).type(randomTemplateName);
cy.wait(2000);
cy.get(this.locators.smstemplate).invoke('val', randomMessage).trigger('input');
cy.wait(2000);
cy.get(".btn-secondary").click({force:true});
cy.wait(3000);
cy.get(this.locators.search_template).type(randomTemplateName);
cy.wait(2000);
cy.get(this.locators.Click_icon).click({force:true});
cy.wait(2000);
cy.get(this.locators.view).click({force:true});
cy.wait(2000);
cy.get(this.locators.preview).click({force:true});
cy.wait(2000);
cy.get(this.locators.sms_preview_screen).should('exist');
cy.wait(2000);
cy.get(this.locators.sms_notification).should('exist');


}
CommunicationPage_016(){

function generateRandomText(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return result;
}

const randomHeader = generateRandomText(10);
const randomTemplateName = generateRandomText(10);
const randomMessage = generateRandomText(20);

cy.contains("Communication").click({force:true});
cy.wait(2000);

cy.contains("Create Communication Template").click({force:true});
cy.wait(2000);

cy.get(this.locators.channel_type).select('SMS');
cy.wait(2000);

cy.get(this.locators.entry_point).select('Account');
cy.wait(2000);

cy.get(this.locators.Recipient_Type).select('Customer');
cy.wait(2000);

cy.get(this.locators.smsheader).type(randomHeader);
cy.wait(2000);

cy.get(this.locators.template_name).type(randomTemplateName);
cy.wait(2000);

// Paste SMS Template
cy.get(this.locators.smstemplate)
  .invoke('val', randomMessage)
  .trigger('input');

cy.wait(2000);

// Save Template
cy.get(".btn-secondary").click({force:true});
cy.wait(3000);

// Search Template
cy.get(this.locators.search_template).type(randomTemplateName);
cy.wait(2000);

cy.get(this.locators.Click_icon).click({force:true});
cy.wait(2000);

cy.get(this.locators.view).click({force:true});
cy.wait(2000);

cy.get(this.locators.preview).click({force:true});
cy.wait(2000);

// Verify SMS Preview Screen
cy.get(this.locators.sms_preview_screen).should('be.visible');

// Verify Template Body is present
cy.get(this.locators.sms_notification)
  .should('contain', randomMessage);

// Verify no additional fields (example: header should not appear)
cy.get(this.locators.sms_preview_screen)
  .should('not.contain', randomHeader);

}

  CommunicationPage_017(){

function generateRandomText(length) {
const chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let result='';
for(let i=0;i<length;i++){
result+=chars.charAt(Math.floor(Math.random()*chars.length));
}
return result;
}

const randomHeader=generateRandomText(10);
const randomTemplateName=generateRandomText(10);
const randomMessage=generateRandomText(20);

cy.contains("Communication").click({force:true});
cy.wait(2000);
cy.contains("Create Communication Template").click({force:true});
cy.wait(2000);
cy.get(this.locators.channel_type).select('WhatsApp');
cy.wait(2000);
cy.get(this.locators.entry_point).select('Account');
cy.wait(2000);
cy.get(this.locators.Recipient_Type).select('Customer');
cy.wait(2000);
cy.get(this.locators.smsheader).type(randomHeader);
cy.wait(2000);
cy.get(this.locators.template_name).type(randomTemplateName);
cy.wait(2000);
cy.get(this.locators.smstemplate).invoke('val', randomMessage).trigger('input');
cy.wait(2000);
cy.get(".btn-secondary").click({force:true});
cy.wait(2000);
cy.get(this.locators.search_template).type(randomTemplateName);
cy.wait(2000);
cy.get(this.locators.Click_icon).click({force:true});
cy.wait(2000);
cy.get(this.locators.view).click({force:true});
cy.wait(2000);
cy.get(this.locators.preview).click({force:true});
cy.wait(2000);
cy.get(this.locators.whatsapptemplate).should('be.visible');

}

CommunicationPage_018(){
  function generateRandomText(length) {
const chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let result='';
for(let i=0;i<length;i++){
result+=chars.charAt(Math.floor(Math.random()*chars.length));
}
return result;
}

const randomHeader=generateRandomText(10);
const randomTemplateName=generateRandomText(10);
const randomMessage=generateRandomText(20);

cy.contains("Communication").click({force:true});
cy.wait(2000);
cy.contains("Create Communication Template").click({force:true});
cy.wait(2000);
cy.get(this.locators.channel_type).select('WhatsApp');
cy.wait(2000);
cy.get(this.locators.entry_point).select('Account');
cy.wait(2000);
cy.get(this.locators.Recipient_Type).select('Customer');
cy.wait(2000);
cy.get(this.locators.smsheader).type(randomHeader);
cy.wait(2000);
cy.get(this.locators.template_name).type(randomTemplateName);
cy.wait(2000);
cy.get(this.locators.smstemplate).invoke('val', randomMessage).trigger('input');
cy.wait(2000);
cy.get(".btn-secondary").click({force:true});
cy.wait(2000);
cy.get(this.locators.search_template).type(randomTemplateName);
cy.wait(2000);
cy.get(this.locators.Click_icon).click({force:true});
cy.wait(2000);
cy.get(this.locators.view).click({force:true});
cy.wait(2000);
cy.get(this.locators.preview).click({force:true});
cy.wait(2000);
cy.get(this.locators.whatsapptemplate_body).should('be.visible');

}

CommunicationPage_019(){
  function generateRandomText(length) {
const chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let result='';
for(let i=0;i<length;i++){
result+=chars.charAt(Math.floor(Math.random()*chars.length));
}
return result;
}

const randomHeader=generateRandomText(10);
const randomTemplateName=generateRandomText(10);
const randomMessage=generateRandomText(20);

cy.contains("Communication").click({force:true});
cy.wait(2000);
cy.contains("Create Communication Template").click({force:true});
cy.wait(2000);
cy.get(this.locators.channel_type).select('WhatsApp');
cy.wait(2000);
cy.get(this.locators.entry_point).select('Account');
cy.wait(2000);
cy.get(this.locators.Recipient_Type).select('Customer');
cy.wait(2000);
cy.get(this.locators.smsheader).type(randomHeader);
cy.wait(2000);
cy.get(this.locators.template_name).type(randomTemplateName);
cy.wait(2000);
cy.get(this.locators.smstemplate).invoke('val', randomMessage).trigger('input');
cy.wait(2000);
cy.get(".btn-secondary").click({force:true});
cy.wait(2000);
cy.get(this.locators.search_template).type(randomTemplateName);
cy.wait(2000);
cy.get(this.locators.Click_icon).click({force:true});
cy.wait(2000);
cy.get(this.locators.view).click({force:true});
cy.wait(2000);
cy.get(this.locators.preview).click({force:true});
cy.wait(2000);
cy.get(this.locators.whatsapptemplate_body).should('contain',randomMessage);
cy.wait(2000);
cy.get(this.locators.whatsapptemplate_body).should('not.contain',"Header");
}
CommunicationPage_020(){
function generateRandomText(length) {
const chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let result='';
for(let i=0;i<length;i++){
result+=chars.charAt(Math.floor(Math.random()*chars.length));
}
return result;
}

const randomHeader = generateRandomText(10);
const randomTemplateName = generateRandomText(10);
const randomMessage = generateRandomText(20);

cy.contains("Communication").click({force:true});
cy.wait(2000);
cy.contains("Create Communication Template").click({force:true});
cy.wait(2000);
// Select Channel Type = Letter
cy.get(this.locators.channel_type).select('Letter');
cy.wait(2000);
cy.get(this.locators.entry_point).select('Account');
cy.wait(2000);
cy.get(this.locators.Recipient_Type).select('Customer');
cy.wait(2000);
cy.get(this.locators.template_name).type(randomTemplateName);
cy.wait(2000);
cy.get(this.locators.letter_template).type(randomMessage);
cy.wait(2000);
cy.get(".btn-secondary").click({force:true});
cy.wait(2000);
cy.get(this.locators.search_template).type(randomTemplateName);
cy.wait(2000);
cy.get(this.locators.Click_icon).click({force:true});
cy.wait(2000);
cy.get(this.locators.view).click({force:true});
cy.wait(2000);
cy.get(this.locators.preview).click({force:true});
cy.wait(2000);
cy.get(this.locators.lettertemplate_body).should('contain', randomMessage);
cy.wait(2000);
cy.get(this.locators.preview_section).should('be.visible');

}
CommunicationPage_021(){

function generateRandomText(length) {
const chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let result='';
for(let i=0;i<length;i++){
result+=chars.charAt(Math.floor(Math.random()*chars.length));
}
return result;
}

const randomHeader = generateRandomText(10);
const randomTemplateName = generateRandomText(10);
const randomMessage = generateRandomText(20);

cy.contains("Communication").click({force:true});
cy.wait(2000);
cy.contains("Create Communication Template").click({force:true});
cy.wait(2000);
cy.get(this.locators.channel_type).select('Letter');
cy.wait(2000);
cy.get(this.locators.entry_point).select('Account');
cy.wait(2000);
cy.get(this.locators.Recipient_Type).select('Customer');
cy.wait(2000);
cy.get('input[type="file"]')
  .first()
  .selectFile('cypress/fixtures/header.png', { force: true })
cy.wait(2000);
cy.get(this.locators.template_name).type(randomTemplateName);
cy.wait(2000);
cy.get(this.locators.letter_template).type(randomMessage);
cy.wait(2000);
cy.get(".btn-secondary").click({force:true});
cy.wait(2000);
cy.get(this.locators.search_template).type(randomTemplateName);
cy.wait(2000);
cy.get(this.locators.Click_icon).click({force:true});
cy.wait(2000);
cy.get(this.locators.view).click({force:true});
cy.wait(2000);
cy.get(this.locators.preview).click({force:true});
cy.wait(2000);
cy.get(this.locators.lettertemplate_header)
  .should('be.visible')
  .and(($img) => {
      expect($img[0].naturalWidth).to.be.greaterThan(0)  })

}


CommunicationPage_022(){

function generateRandomText(length) {
const chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let result='';
for(let i=0;i<length;i++){
result+=chars.charAt(Math.floor(Math.random()*chars.length));
}
return result;
}

const randomHeader = generateRandomText(10);
const randomTemplateName = generateRandomText(10);
const randomMessage = generateRandomText(20);

cy.contains("Communication").click({force:true});
cy.wait(2000);
cy.contains("Create Communication Template").click({force:true});
cy.wait(2000);
cy.get(this.locators.channel_type).select('Letter');
cy.wait(2000);
cy.get(this.locators.entry_point).select('Account');
cy.wait(2000);
cy.get(this.locators.Recipient_Type).select('Customer');
cy.wait(2000);
cy.get('input[type="file"]')
.first()
.selectFile('cypress/fixtures/header.png', { force: true });
cy.wait(2000);
cy.get(this.locators.template_name).type(randomTemplateName);
cy.wait(2000);
cy.get(this.locators.letter_template).type(randomMessage);
cy.wait(2000);
cy.get(".btn-secondary").click({force:true});
cy.wait(2000);
cy.get(this.locators.search_template).type(randomTemplateName);
cy.wait(2000);
cy.get(this.locators.Click_icon).click({force:true});
cy.wait(2000);
cy.get(this.locators.view).click({force:true});
cy.wait(2000);
cy.get(this.locators.preview).click({force:true});
cy.wait(2000);
cy.get(this.locators.lettertemplate_header)
.should('be.visible')
.and(($img) => {
expect($img[0].naturalWidth).to.be.greaterThan(0)
});
cy.get(this.locators.lettertemplate_body)
.should('be.visible')
.and('contain', randomMessage);

}

CommunicationPage_023(){

function generateRandomText(length) {
const chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let result='';
for(let i=0;i<length;i++){
result+=chars.charAt(Math.floor(Math.random()*chars.length));
}
return result;
}

const randomTemplateName = generateRandomText(10);
const randomMessage = generateRandomText(20);

cy.contains("Communication").click({force:true});
cy.wait(2000);
cy.contains("Create Communication Template").click({force:true});
cy.wait(2000);
cy.get(this.locators.channel_type).select('Letter');
cy.wait(2000);
cy.get(this.locators.entry_point).select('Account');
cy.wait(2000);
cy.get(this.locators.Recipient_Type).select('Customer');
cy.wait(2000);
cy.get('input[type="file"]').eq(0)
.selectFile('cypress/fixtures/footer.png', { force: true });
cy.wait(2000);
cy.get('input[type="file"]').eq(1)
.selectFile('cypress/fixtures/footer.png', { force: true });
cy.wait(2000);
cy.get(this.locators.template_name).type(randomTemplateName);
cy.wait(2000);
cy.get(this.locators.letter_template).type(randomMessage);
cy.wait(2000);
cy.get(".btn-secondary").click({force:true});
cy.wait(2000);
cy.get(this.locators.search_template).type(randomTemplateName);
cy.wait(2000);
cy.get(this.locators.Click_icon).click({force:true});
cy.wait(2000);
cy.get(this.locators.view).click({force:true});
cy.wait(2000);
cy.get(this.locators.preview).click({force:true});
cy.wait(2000);
cy.get(this.locators.lettertemplate_footer)
.should('be.visible')
.and(($img) => {
expect($img[0].naturalWidth).to.be.greaterThan(0)
});

}

CommunicationPage_024(){

function generateRandomText(length) {
const chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let result='';
for(let i=0;i<length;i++){
result+=chars.charAt(Math.floor(Math.random()*chars.length));
}
return result;
}

const randomTemplateName = generateRandomText(10);
const randomMessage = generateRandomText(6); // longer text to create multi-page preview

cy.contains("Communication").click({force:true});
cy.wait(2000);
cy.contains("Create Communication Template").click({force:true});
cy.wait(2000);
cy.get(this.locators.channel_type).select('Letter');
cy.wait(2000);
cy.get(this.locators.entry_point).select('Account');
cy.wait(2000);
cy.get(this.locators.Recipient_Type).select('Customer');
cy.wait(2000);
// Upload Header
cy.get('input[type="file"]').eq(0)
.selectFile('cypress/fixtures/header.png', { force: true });
cy.wait(2000);
// Upload Footer
cy.get('input[type="file"]').eq(1)
.selectFile('cypress/fixtures/footer.png', { force: true });
cy.wait(2000);
// Template Name
cy.get(this.locators.template_name).type(randomTemplateName);
cy.wait(2000);
// Add long body text for multi-page preview
cy.get(this.locators.letter_template).type(randomMessage);
cy.wait(2000);
// Save template
cy.get(".btn-secondary").click({force:true});
cy.wait(2000);
// Search template
cy.get(this.locators.search_template).type(randomTemplateName);
cy.wait(2000);
cy.get(this.locators.Click_icon).click({force:true});
cy.wait(2000);
cy.get(this.locators.view).click({force:true});
cy.wait(2000);
cy.get(this.locators.preview).click({force:true});
cy.wait(2000);
cy.get(this.locators.lettertemplate_header)
  .should('be.visible')
cy.get(this.locators.lettertemplate_footer)
  .should('be.visible')
}


CommunicationPage_025(){
cy.contains("Communication").click({force:true});
cy.wait(2000);
cy.contains("Search Communication Templates").click({force:true});
cy.wait(2000);
cy.get(this.locators.gear_settings).should('be.visible');
}

CommunicationPage_026(){
cy.contains("Communication").click({force:true});
cy.wait(2000);
cy.contains("Search Communication Templates").click({force:true});
cy.wait(2000);
cy.get(this.locators.gear_settings).click({force:true});
cy.wait(2000);
cy.get('.dropdown-menu').should('not.contain', 'Template Name');
cy.get('.dropdown-menu').should('not.contain', 'Channel');
cy.get('.dropdown-menu').should('not.contain', 'Languages');
cy.get('.dropdown-menu').should('not.contain', 'Connected Triggers');
cy.get('.dropdown-menu').should('not.contain', 'Status');
}

CommunicationPage_027(){
  cy.contains("Communication").click({force:true});
  cy.wait(2000);
  cy.contains("Search Communication Templates").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.gear_settings).should('be.visible').click({force:true});
  cy.wait(2000);
  cy.get('.dropdown-menu').contains('Created By').click({ force: true });
  cy.wait(2000);
  cy.get('.dropdown-menu').contains('Created On').click({ force: true });
 


}
CommunicationPage_028(){
  cy.contains("Communication").click({force:true});
  cy.wait(2000);
  cy.contains("Search Communication Templates").click({force:true});
  cy.wait(2000);
  // Open Gear Settings
cy.get(this.locators.gear_settings).click({ force: true });

// Deselect Created By
cy.get('.dropdown-menu')
  .contains('Created By')
  .click({ force: true });

// Verify it is deselected
cy.get('.dropdown-menu')
  .contains('Created By')
    .click({ force: true })
  .should('not.be.checked');


// Deselect Created On
cy.get('.dropdown-menu')
  .contains('Created On')
  .click({ force: true });

// Verify it is deselected
cy.get('.dropdown-menu')
  .contains('Created On')
  .click({ force: true })
  .should('not.be.checked');

}

CommunicationPage_029(){
  cy.contains("Communication").click({force:true});
  cy.wait(2000);
  cy.contains("Search Communication Templates").click({force:true});
  cy.wait(2000);
cy.get(this.locators.gear_settings).click({ force: true });
cy.get('.dropdown-menu').contains('Created By').click({ force: true });
cy.get('.dropdown-menu').contains('Created On').click({ force: true });
cy.get('thead > tr > th').last().should('contain', 'Created On');
cy.get('thead > tr > th').eq(-2).should('contain', 'Created By');
}
CommunicationPage_030(){
  cy.contains("Communication").click({force:true});
  cy.wait(2000);
  cy.contains("Search Communication Templates").click({force:true});
  cy.wait(2000);
  
const standardFields = [
  'Template Name',
  'Channel',
  'Languages',
  'Connected Triggers',
  'Status'
];
cy.wait(2000);
cy.get(this.locators.gear_settings).click({ force: true });
cy.wait(2000);
cy.get('.dropdown-menu').contains('Created By').click({ force: true });
cy.wait(2000);
cy.get('.dropdown-menu').contains('Created On').click({ force: true });
cy.wait(2000);
cy.get('.dropdown-menu').contains('Created By').click({ force: true });
cy.wait(2000);
cy.get('.dropdown-menu').contains('Created On').click({ force: true });

standardFields.forEach(field => {
  cy.get('thead > tr > th').contains(field).should('be.visible');
});
}

CommunicationPage_031(){
  cy.get(this.locators.customer_name).type("a");
  cy.wait(2000);
  cy.get(this.locators.submit_button).click({force:true});
  cy.wait(2000);
  cy.get(':nth-child(1) > :nth-child(4) > a > [style="text-wrap-mode: nowrap; position: relative;"] > span').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.toggle_button).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.payment_history).click({force:true});
  cy.wait(2000);
cy.get(this.locators.ac_details_gear_icon).click({ force: true });
cy.wait(2000);
cy.get('.dropdown-menu').contains('Payer/Receipt Image').click({ force: true });
cy.get('.dropdown-menu').contains('Transaction Id').click({ force: true });

// Verify they appear at the end of the table
cy.get('thead > tr > th').last().should('contain', 'Transaction Id');
cy.get('thead > tr > th').eq(-2).should('contain', 'Payer/Receipt Image');

}



}

export default CommunicationPage;
