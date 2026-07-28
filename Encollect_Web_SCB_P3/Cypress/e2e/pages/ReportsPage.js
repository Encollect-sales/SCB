import { th } from '@faker-js/faker';
import { getLocators } from '../utils/Locatorutils';
import { getBaseUrl } from '../utils/configutils';

class ReportsPage {
  constructor(locators) {
    this.locators = locators;



  }
  ReoprtPaymentTestPage_302() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Payment Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Product_group).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);

    cy.get('#receiptDate_from').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 30);
    const pastDay = pastDate.getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', pastDay).click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    const today = new Date().getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', today).click();
    cy.wait(1000);
    cy.get('#generate-report-button').click();
    cy.wait(2000);


  }
  ReoprtPaymentTestPage_303() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Payment Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Product_group).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get('#receiptDate_from').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 30);
    const pastDay = pastDate.getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', pastDay).click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    const today = new Date().getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', today).click();
    cy.wait(1000);
    cy.get('#generate-report-button').click();
    cy.wait(2000);
    //cy.get(this.locators.DownloadReport).click().should('be.visible');
    //cy.wait(300);

  }
  ReportPaymentTestPage_304() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Payment Report").scrollIntoView().should("be.visible").click();
    cy.wait(400);
    cy.get(this.locators.ClickOn_Product_group).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get('#receiptDate_from').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 30);
    const pastDay = pastDate.getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', pastDay).click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    const today = new Date().getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', today).click();
    cy.wait(1000);
    cy.get('#generate-report-button').click();
    cy.wait(2000);
  }


  ReportPaymentTestPage_305() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Payment Report").scrollIntoView().should("be.visible").click();
    cy.wait(400);
    cy.get('#agencyUserRadio').click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Product_group).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get('#receiptDate_from').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 30);
    const pastDay = pastDate.getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', pastDay).click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    const today = new Date().getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', today).click();
    cy.wait(1000);
    cy.get('#generate-report-button').click();
    cy.wait(2000);
  }

  ReportPaymentTestPage_306() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Payment Report").scrollIntoView().should("be.visible").click();
    cy.wait(400);
    cy.get(this.locators.ClickOn_Product_group).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(1) > .form-control-group > .form-ng-select > .ng-select-container > .ng-arrow-wrapper').click();
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(6) > .form-control-group > .form-ng-select > .ng-select-container').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get('#receiptDate_from').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 30);
    const pastDay = pastDate.getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', pastDay).click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    const today = new Date().getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', today).click();
    cy.wait(1000);
    cy.get('#generate-report-button').click();
    cy.wait(2000);;

  }


  ReportPaymentTestPage_307() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Payment Report").scrollIntoView().should("be.visible").click();
    cy.wait(400);
    cy.get('#agencyUserRadio').click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Product_group).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(1) > .form-control-group > .form-ng-select > .ng-select-container > .ng-arrow-wrapper').click();
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(6) > .form-control-group > .form-ng-select > .ng-select-container').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get('#receiptDate_from').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 30);
    const pastDay = pastDate.getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', pastDay).click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    const today = new Date().getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', today).click();
    cy.wait(1000);
    cy.get('#generate-report-button').click();
    cy.wait(2000);;
  }

  ReportPaymentTestPage_308() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Payment Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Product_group).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(1) > .form-control-group > .form-ng-select > .ng-select-container > .ng-arrow-wrapper').click();
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(6) > .form-control-group > .form-ng-select > .ng-select-container').click();
    cy.get(".ng-option").last().click();
    cy.wait(2000);
    cy.get(':nth-child(7) > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get('#receiptDate_from').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 30);
    const pastDay = pastDate.getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', pastDay).click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    const today = new Date().getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', today).click();
    cy.wait(1000);
    cy.get('#generate-report-button').click();
    cy.wait(2000);;
    //cy.get('.inner-layout-container').scrollTo('bottom');
    // cy.wait(2000);
    // cy.contains('Search Result').should('be.visible');
    // cy.wait(2000);
    //cy.get('#downloadReport').click();
    // cy.wait(2000);

  }

  ReportPaymentTestPage_309() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Payment Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get('#agencyUserRadio').click();
    cy.get(this.locators.ClickOn_Product_group).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(1) > .form-control-group > .form-ng-select > .ng-select-container > .ng-arrow-wrapper').click();
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(6) > .form-control-group > .form-ng-select > .ng-select-container').click();
    cy.get(".ng-option").last().click();
    cy.wait(2000);
    cy.get(':nth-child(7) > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get('#receiptDate_from').click({force: true});
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 30);
    const pastDay = pastDate.getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', pastDay).click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    const today = new Date().getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', today).click();
    cy.wait(1000);
    cy.get('#generate-report-button').click();
    cy.wait(2000);;
    //cy.get('.inner-layout-container').scrollTo('bottom');
    // cy.wait(2000);
    // cy.contains('Search Result').should('be.visible');
    // cy.wait(2000);
    //cy.get('#downloadReport').click();
    // cy.wait(2000);

  }


  ReportPaymentTestPage_310() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Payment Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Product_group).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(1) > .form-control-group > .form-ng-select > .ng-select-container > .ng-arrow-wrapper').click();
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(6) > .form-control-group > .form-ng-select > .ng-select-container').click();
    cy.get(".ng-option").last().click();
    cy.wait(2000);
    cy.get(':nth-child(7) > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(8) > .form-control-group > .form-ng-select > .ng-select-container').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get('#receiptDate_from').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 30);
    const pastDay = pastDate.getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', pastDay).click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    const today = new Date().getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', today).click();
    cy.wait(1000);
    cy.get('#generate-report-button').click();
    cy.wait(2000);;
    //cy.get('.inner-layout-container').scrollTo('bottom');
    //cy.wait(500);
    //cy.contains('Search Result').should('be.visible');
    //cy.wait(500);
    //cy.get('#downloadReport').click();
    //cy.wait(2000);
    //cy.get('.pagination-count > .form-select').select('10');
    //cy.wait(2000);

  }


  ReportPaymentTestPage_311() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Payment Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get('#agencyUserRadio').click();
    cy.get(this.locators.ClickOn_Product_group).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(1) > .form-control-group > .form-ng-select > .ng-select-container > .ng-arrow-wrapper').click();
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(6) > .form-control-group > .form-ng-select > .ng-select-container').click();
    cy.get(".ng-option").last().click();
    cy.wait(2000);
    cy.get(':nth-child(7) > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(8) > .form-control-group > .form-ng-select > .ng-select-container').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get('#receiptDate_from').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 30);
    const pastDay = pastDate.getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', pastDay).click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    const today = new Date().getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', today).click();
    cy.wait(1000);
    cy.get('#generate-report-button').click();
    cy.wait(2000);;
    //cy.get('.inner-layout-container').scrollTo('bottom');
    //cy.wait(500);
    //cy.contains('Search Result').should('be.visible');
    //cy.wait(500);
    //cy.get('#downloadReport').click();
    //cy.wait(2000);
    //cy.get('.pagination-count > .form-select').select('10');
    //cy.wait(2000);
  }
  ReportPaymentTestPage_312() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Payment Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Product_group).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(1) > .form-control-group > .form-ng-select > .ng-select-container > .ng-arrow-wrapper').click();
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(6) > .form-control-group > .form-ng-select > .ng-select-container').click();
    cy.get(".ng-option").last().click();
    cy.wait(2000);
    cy.get(':nth-child(7) > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(8) > .form-control-group > .form-ng-select > .ng-select-container').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(9) > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get('#receiptDate_from').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 30);
    const pastDay = pastDate.getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', pastDay).click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    const today = new Date().getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', today).click();
    cy.wait(1000);
    cy.get('#generate-report-button').click();
    cy.wait(2000);;
    //cy.get('.inner-layout-container').scrollTo('bottom');
    //cy.wait(500);
    //cy.contains('Search Result').should('be.visible');
    //cy.wait(500);
    //cy.get('#downloadReport').click();
    //cy.wait(2000);
    //cy.get('.pagination-count > .form-select').select('10');
    //cy.wait(2000);
  }
  ReportPaymentTestPage_313() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Payment Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get('#agencyUserRadio').click();
    cy.get(this.locators.ClickOn_Product_group).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(1) > .form-control-group > .form-ng-select > .ng-select-container > .ng-arrow-wrapper').click();
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(6) > .form-control-group > .form-ng-select > .ng-select-container').click();
    cy.get(".ng-option").last().click();
    cy.wait(2000);
    cy.get(':nth-child(7) > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(8) > .form-control-group > .form-ng-select > .ng-select-container').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(9) > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get('#receiptDate_from').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 30);
    const pastDay = pastDate.getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', pastDay).click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    const today = new Date().getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', today).click();
    cy.wait(1000);
    cy.get('#generate-report-button').click();
    cy.wait(2000);;
    //cy.get('.inner-layout-container').scrollTo('bottom');
    //cy.wait(500);
    //cy.contains('Search Result').should('be.visible');
    //cy.wait(500);
    //cy.get('#downloadReport').click();
    //cy.wait(2000);
    //cy.get('.pagination-count > .form-select').select('10');
    //cy.wait(2000);

  }

  ReportPaymentTestPage_314() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Payment Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get('#agencyUserRadio').click();
    cy.get(this.locators.ClickOn_Product_group).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(1) > .form-control-group > .form-ng-select > .ng-select-container > .ng-arrow-wrapper').click();
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(6) > .form-control-group > .form-ng-select > .ng-select-container').click();
    cy.get(".ng-option").last().click();
    cy.wait(2000);
    cy.get(':nth-child(7) > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(8) > .form-control-group > .form-ng-select > .ng-select-container').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(9) > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get('#receiptDate_from').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 30);
    const pastDay = pastDate.getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', pastDay).click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    const today = new Date().getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', today).click();
    cy.wait(1000);
    cy.get('#generate-report-button').click();
    cy.wait(2000);
  }
  ReportPaymentTestPage_315() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Payment Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Product_group).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(1) > .form-control-group > .form-ng-select > .ng-select-container > .ng-arrow-wrapper').click();
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(6) > .form-control-group > .form-ng-select > .ng-select-container').click();
    cy.get(".ng-option").last().click();
    cy.wait(2000);
    cy.get(':nth-child(7) > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(8) > .form-control-group > .form-ng-select > .ng-select-container').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(9) > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(10) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get('#receiptDate_from').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 30);
    const pastDay = pastDate.getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', pastDay).click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    const today = new Date().getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', today).click();
    cy.wait(1000);
    cy.get('#generate-report-button').click();
    cy.wait(2000);
  }

  ReportPaymentTestPage_316() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Payment Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get('#agencyUserRadio').click();
    cy.get(this.locators.ClickOn_Product_group).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(1) > .form-control-group > .form-ng-select > .ng-select-container > .ng-arrow-wrapper').click();
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(6) > .form-control-group > .form-ng-select > .ng-select-container').click();
    cy.get(".ng-option").last().click();
    cy.wait(2000);
    cy.get(':nth-child(7) > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(8) > .form-control-group > .form-ng-select > .ng-select-container').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(9) > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(10) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get('#receiptDate_from').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 30);
    const pastDay = pastDate.getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', pastDay).click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    const today = new Date().getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', today).click();
    cy.wait(1000);
    cy.get('#generate-report-button').click();
    cy.wait(300)
  }

  ReoprtPaymentTestPage_317() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Payment Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Product_group).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(1) > .form-control-group > .form-ng-select > .ng-select-container > .ng-arrow-wrapper').click();
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(6) > .form-control-group > .form-ng-select > .ng-select-container').click();
    cy.get(".ng-option").last().click();
    cy.wait(2000);
    cy.get(':nth-child(7) > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(8) > .form-control-group > .form-ng-select > .ng-select-container').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(9) > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(10) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get('#receiptDate_from').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 30);
    const pastDay = pastDate.getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', pastDay).click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    const today = new Date().getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', today).click();
    cy.wait(1000);
    cy.get('#generate-report-button').click();
    cy.wait(2000);
  }

  ReoprtPaymentTestPage_318() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Payment Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get('#agencyUserRadio').click();
    cy.get(this.locators.ClickOn_Product_group).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(1) > .form-control-group > .form-ng-select > .ng-select-container > .ng-arrow-wrapper').click();
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(6) > .form-control-group > .form-ng-select > .ng-select-container').click();
    cy.get(".ng-option").last().click();
    cy.wait(2000);
    cy.get(':nth-child(7) > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(8) > .form-control-group > .form-ng-select > .ng-select-container').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(9) > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(10) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(11) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get('#receiptDate_from').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 30);
    const pastDay = pastDate.getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', pastDay).click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    const today = new Date().getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', today).click();
    cy.wait(1000);
    cy.get('#generate-report-button').click();
    cy.wait(2000);

  }

  ReoprtPaymentTestPage_320() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Payment Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Product_group).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(1) > .form-control-group > .form-ng-select > .ng-select-container > .ng-arrow-wrapper').click();
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(6) > .form-control-group > .form-ng-select > .ng-select-container').click();
    cy.get(".ng-option").last().click();
    cy.wait(2000);
    cy.get(':nth-child(7) > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(8) > .form-control-group > .form-ng-select > .ng-select-container').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(9) > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(10) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(11) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get('#receiptDate_from').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 30);
    const pastDay = pastDate.getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', pastDay).click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    const today = new Date().getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', today).click();
    cy.wait(1000);
    cy.get('#generate-report-button').click();
    cy.wait(2000);



  }
  ReoprtPaymentTestPage_321() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Payment Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get('#agencyUserRadio').click();
    cy.get(this.locators.ClickOn_Product_group).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(1) > .form-control-group > .form-ng-select > .ng-select-container > .ng-arrow-wrapper').click();
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get('#payment_status').select("Failed");
    cy.get('#receiptDate_from').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 30);
    const pastDay = pastDate.getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', pastDay).click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    const today = new Date().getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', today).click();
    cy.wait(1000);
    cy.get('#generate-report-button').click();


  }
  ReoprtPaymentTestPage_323() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Payment Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Product_group).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(1) > .form-control-group > .form-ng-select > .ng-select-container > .ng-arrow-wrapper').click();
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get('#payment_status').select("Failed");
    cy.wait(1000);
    cy.get('#receiptDate_from').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 30);
    const pastDay = pastDate.getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', pastDay).click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    const today = new Date().getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', today).click();
    cy.wait(1000);
    cy.get('#generate-report-button').click();


  }
  ReoprtPaymentTestPage_324() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Payment Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get('#agencyUserRadio').click();
    cy.get(this.locators.ClickOn_Product_group).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(1) > .form-control-group > .form-ng-select > .ng-select-container > .ng-arrow-wrapper').click();
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get('#payment_status').select("With Agent");
    cy.wait(1000);
    cy.get('#receiptDate_from').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 30);
    const pastDay = pastDate.getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', pastDay).click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    const today = new Date().getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', today).click();
    cy.wait(1000);
    cy.get('#generate-report-button').click();
  }
  ReoprtPaymentTestPage_326() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Payment Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Product_group).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(1) > .form-control-group > .form-ng-select > .ng-select-container > .ng-arrow-wrapper').click();
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get('#payment_status').select("With Agent");
    cy.wait(1000);
    cy.get('#receiptDate_from').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 30);
    const pastDay = pastDate.getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', pastDay).click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    const today = new Date().getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', today).click();
    cy.wait(1000);
    cy.get('#generate-report-button').click();
  }
  ReoprtPaymentTestPage_327() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Payment Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Product Group").should("be.visible");
    cy.wait(1000);
    cy.contains("Product(s)").should("be.visible");
    cy.wait(1000);
    cy.contains("Sub Product(s)").should("be.visible");
    cy.wait(1000);
    cy.contains("Bucket(s)").should("be.visible");
    cy.wait(1000);
    cy.contains("Country(s)").should("be.visible");
    cy.wait(1000);
    cy.contains("Region(s)").should("be.visible");
    cy.wait(1000);
    cy.contains("State(s)").should("be.visible");
    cy.wait(1000);
    cy.contains("City(s)").should("be.visible");
    cy.wait(1000);
    cy.contains("Branch(s)").should("be.visible");
    cy.wait(1000);
    cy.contains("User Branch(s)").should("be.visible");
    cy.wait(1000);
    cy.contains("Staff(s)").should("be.visible");
    cy.wait(1000);
    cy.contains("Payment Status").should("be.visible");
    cy.wait(1000);
    cy.contains("Receipt From Date").scrollIntoView().should("be.visible");
    cy.wait(1000);
    cy.contains("Receipt To Date").should("be.visible");
    cy.wait(1000);
  }
  ReoprtPaymentTestPage_345() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
  cy.contains("Performance Reports").scrollIntoView().should("be.visible").click();
cy.wait(1000);
  cy.contains("Performance Report (MTD)").should("be.visible").click()
    cy.wait(300)
    cy.get(this.locators.ClickOn_Product_group).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);


  }
  ReoprtPaymentTestPage_347() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
  cy.contains("Performance Reports").scrollIntoView().should("be.visible").click();
cy.wait(1000);
  cy.contains("Performance Report (MTD)").should("be.visible").click()
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(6) > .form-control-group > .form-ng-select > .ng-select-container').click();
    cy.get(".ng-option").last().click();
    cy.wait(2000);

  }

  ReoprtPaymentTestPage_348() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
  cy.contains("Performance Reports").scrollIntoView().should("be.visible").click();
cy.wait(1000);
  cy.contains("Performance Report (MTD)").should("be.visible").click()
    cy.wait(300)
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(6) > .form-control-group > .form-ng-select > .ng-select-container').click();
    cy.get(".ng-option").last().click();
    cy.wait(2000);
    cy.get(':nth-child(7) > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(8) > .form-control-group > .form-ng-select > .ng-select-container').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);



  }
  ReoprtPaymentTestPage_349() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
  cy.contains("Performance Reports").scrollIntoView().should("be.visible").click();
cy.wait(1000);
  cy.contains("Performance Report (MTD)").should("be.visible").click()
    cy.wait(300)
      / cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(6) > .form-control-group > .form-ng-select > .ng-select-container').click();
    cy.get(".ng-option").last().click();
    cy.wait(2000);
    cy.get(':nth-child(7) > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(8) > .form-control-group > .form-ng-select > .ng-select-container').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(9) > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);


  }
  ReoprtPaymentTestPage_350() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
  cy.contains("Performance Reports").scrollIntoView().should("be.visible").click();
cy.wait(1000);
  cy.contains("Performance Report (MTD)").should("be.visible").click()
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agency_RadioBtn).click();
    cy.wait(2000);
 

  }
  ReoprtPaymentTestPage_351() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
  cy.contains("Performance Reports").scrollIntoView().should("be.visible").click();
cy.wait(1000);
  cy.contains("Performance Report (MTD)").should("be.visible").click()
    cy.wait(300)
    cy.get(this.locators.ClickOn_Agency_RadioBtn).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Product_group).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);

  }

  ReoprtPaymentTestPage_352() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
  cy.contains("Performance Reports").scrollIntoView().should("be.visible").click();
cy.wait(1000);
  cy.contains("Performance Report (MTD)").should("be.visible").click()
    cy.wait(300)
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);

  }
  ReoprtPaymentTestPage_353() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
  cy.contains("Performance Reports").scrollIntoView().should("be.visible").click();
cy.wait(1000);
  cy.contains("Performance Report (MTD)").should("be.visible").click()
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Product_group).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(1) > .form-control-group > .form-ng-select > .ng-select-container > .ng-arrow-wrapper').click();
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get('#generate-report-button').click();
  }

  ReoprtPaymentTestPage_354() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
  cy.contains("Performance Reports").scrollIntoView().should("be.visible").click();
cy.wait(1000);
  cy.contains("Performance Report (MTD)").should("be.visible").click()
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Product_group).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(1) > .form-control-group > .form-ng-select > .ng-select-container > .ng-arrow-wrapper').click();
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get('#generate-report-button').click();

  }
  ReoprtPaymentTestPage_355() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
  cy.contains("Performance Reports").scrollIntoView().should("be.visible").click();
cy.wait(1000);
  cy.contains("Performance Report (MTD)").should("be.visible").click()
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Product_group).click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(1) > .form-control-group > .form-ng-select > .ng-select-container > .ng-arrow-wrapper').click();
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(6) > .form-control-group > .form-ng-select > .ng-select-container').click();
    cy.get(".ng-option").last().click();
    cy.wait(2000);
    cy.get(':nth-child(7) > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(8) > .form-control-group > .form-ng-select > .ng-select-container').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(9) > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get('#generate-report-button').click();

  }

  ReoprtPaymentTestPage_356() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
  cy.contains("Performance Reports").scrollIntoView().should("be.visible").click();
cy.wait(1000);
  cy.contains("Performance Report (MTD)").should("be.visible").click()
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Product_group).click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(2) > :nth-child(2) > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(3) > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get('#generate-report-button').click();

  }
  ReoprtPaymentTestPage_357() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
  cy.contains("Performance Reports").scrollIntoView().should("be.visible").click();
cy.wait(1000);
  cy.contains("Performance Report (MTD)").should("be.visible").click()
    cy.wait(2000);
   cy.get(this.locators.ClickOn_Agency_RadioBtn).click();
   cy.wait(2000);
    cy.get(this.locators.ClickOn_Product_group).click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(2) > :nth-child(2) > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(3) > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get('#generate-report-button').click();
cy.wait(4000);
  }
  ReoprtPaymentTestPage_358() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
  cy.contains("Performance Reports").scrollIntoView().should("be.visible").click();
cy.wait(1000);
  cy.contains("Performance Report (MTD)").should("be.visible").click()
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agency_RadioBtn).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Product_group).click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(2) > :nth-child(2) > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(3) > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(6) > .form-control-group > .form-ng-select > .ng-select-container').click();
    cy.get(".ng-option").last().click();
    cy.wait(2000);
    cy.get(':nth-child(7) > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(8) > .form-control-group > .form-ng-select > .ng-select-container').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(9) > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get('#generate-report-button').click();
    cy.wait(4000);


  }

  ReoprtPaymentTestPage_359() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
  cy.contains("Performance Reports").scrollIntoView().should("be.visible").click();
cy.wait(1000);
  cy.contains("Performance Report (MTD)").should("be.visible").click()
    cy.wait(2000);
  cy.get(this.locators.ClickOn_Agency_RadioBtn).click();
    cy.wait(2000);
    cy.contains("Product Group(s)").should("be.visible");
    cy.wait(1000);
    cy.contains("Product(s)").should("be.visible");
    cy.wait(1000);
    cy.contains("Sub Product(s)").should("be.visible");
    cy.wait(1000);
    cy.contains("Bucket(s)").should("be.visible");
    cy.wait(1000);
    cy.contains("Country(s)").should("be.visible");
    cy.wait(1000);
    cy.contains("Region(s)").should("be.visible");
    cy.wait(1000);
    cy.contains("State(s)").should("be.visible");
    cy.wait(1000);
    cy.contains("City(s)").should("be.visible");
    cy.wait(1000);
    cy.contains("Branch(s)").should("be.visible");
    cy.wait(1000);
    cy.contains("Agency(s)").should("be.visible");
    cy.wait(1000);
    cy.contains("Agent(s)").should("be.visible");
    cy.wait(1000);


  }
  ReoprtPaymentTestPage_360() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
      cy.contains("Allocation Reports").scrollIntoView().should("be.visible").click();
    cy.wait(5000);
     cy.contains("Agency Allocation Gap Report").scrollIntoView().should("be.visible").click();
    cy.wait(5000);
    //cy.get(this.locators.click_productgroup).select('All', { force: true });
    //cy.wait(1000);
    //cy.get(this.locators.product).select('All', { force: true });
    //cy.wait(1000);
    //cy.get(this.locators.Subproduct).select('All', { force: true });
    //cy.wait(1000);
    //cy.get(this.locators.BOM).select('All', { force: true });
    //cy.wait(1000);
    //cy.get(this.locators.ClickongenerateBtn).click({ force: true });
    //cy.wait(1000);
    //    cy.contains("Reports").scrollIntoView().should("be.visible").click();
    //  cy.wait(2000);
    //cy.get(this.locators.clickonAllocationreoprt).click().scrollIntoView();
    //cy.wait(300);





  }
  ReoprtPaymentTestPage_361() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
      cy.contains("Allocation Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
     cy.contains("Agency Allocation Gap Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.Clickon_Productgroup).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);

  }

  ReoprtPaymentTestPage_362() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
      cy.contains("Allocation Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
     cy.contains("Agency Allocation Gap Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.Clickon_Productgroup).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickOn_Product).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);


  }
  ReoprtPaymentTestPage_363() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
      cy.contains("Allocation Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
     cy.contains("Agency Allocation Gap Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.Clickon_Productgroup).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickOn_Product).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickOn_SubProduct).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);


  }
  ReoprtPaymentTestPage_364() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
      cy.contains("Allocation Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
     cy.contains("Agency Allocation Gap Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.Clickon_Productgroup).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickOn_Product).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickOn_SubProduct).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
  }
  ReoprtPaymentTestPage_366() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
      cy.contains("Allocation Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
     cy.contains("Agency Allocation Gap Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.Clickon_Productgroup).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickOn_Product).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickOn_SubProduct).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);


  }
  ReoprtPaymentTestPage_367() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
      cy.contains("Allocation Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
     cy.contains("Agency Allocation Gap Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.Clickon_Productgroup).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickOn_Product).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickOn_SubProduct).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickOn_Region).click();
    cy.wait(2000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);

  }
  ReoprtPaymentTestPage_368() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
      cy.contains("Allocation Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
     cy.contains("Agency Allocation Gap Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.Clickon_Productgroup).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickOn_Product).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickOn_SubProduct).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickOn_Region).click();
    cy.wait(2000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickOn_State).click();
    cy.wait(2000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);


  }
  ReoprtPaymentTestPage_369() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
      cy.contains("Allocation Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
     cy.contains("Agency Allocation Gap Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.Clickon_Productgroup).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickOn_Product).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickOn_SubProduct).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickOn_Region).click();
    cy.wait(2000);
    cy.get(".ng-option").last().click();
    cy.get(this.locators.ClickOn_State).click();
    cy.wait(2000);
    cy.get(".ng-option").last().click();
    cy.get(this.locators.ClickOn_City).click();
    cy.wait(2000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);


  }
  ReoprtPaymentTestPage_370() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
      cy.contains("Allocation Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
     cy.contains("Agency Allocation Gap Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.Clickon_Productgroup).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickOn_Product).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickOn_SubProduct).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickOn_Region).click();
    cy.wait(2000);
    cy.get(".ng-option").last().click();
    cy.get(this.locators.ClickOn_State).click();
    cy.wait(2000);
    cy.get(".ng-option").last().click();
    cy.get(this.locators.ClickOn_City).click();
    cy.wait(2000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickOn_Branch).click();
    cy.wait(2000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);





  }
  ReoprtPaymentTestPage_372() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
      cy.contains("Allocation Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
     cy.contains("Agency Allocation Gap Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.Clickon_Onwer).click();
    cy.wait(2000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);

  }
  ReoprtPaymentTestPage_373() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
      cy.contains("Allocation Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
     cy.contains("Agency Allocation Gap Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.Clickon_Productgroup).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickOn_Product).click();
    cy.wait(1000);
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.Click_Generate_Report_button).click();





  }
  ReoprtPaymentTestPage_374() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
      cy.contains("Allocation Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
     cy.contains("Agency Allocation Gap Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.Clickon_Productgroup).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickOn_Product).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.Click_Generate_Report_button).click();


  }
  ReoprtPaymentTestPage_375() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
      cy.contains("Allocation Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
     cy.contains("Agency Allocation Gap Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.Clickon_Productgroup).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickOn_Product).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickOn_SubProduct).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.Click_Generate_Report_button).click();
  }

  ReoprtPaymentTestPage_376() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
      cy.contains("Allocation Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
     cy.contains("Agency Allocation Gap Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.Clickon_Productgroup).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickOn_Product).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.Click_Generate_Report_button).click();

  }
  ReoprtPaymentTestPage_378() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
      cy.contains("Allocation Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
     cy.contains("Agency Allocation Gap Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.Clickon_Productgroup).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickOn_Product).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickOn_Region).click();
    cy.wait(2000);
    cy.get(".ng-option").last().click();
    cy.get(this.locators.ClickOn_State).click();
    cy.wait(2000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.Click_Generate_Report_button).click();

  }
  ReoprtPaymentTestPage_379() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
      cy.contains("Allocation Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
     cy.contains("Agency Allocation Gap Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.Clickon_Productgroup).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickOn_Product).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickOn_Region).click();
    cy.wait(2000);
    cy.get(".ng-option").last().click();
    cy.get(this.locators.ClickOn_State).click();
    cy.wait(2000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.Click_Generate_Report_button).click();



  }
  ReoprtPaymentTestPage_380() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
      cy.contains("Allocation Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
     cy.contains("Agency Allocation Gap Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.Clickon_Productgroup).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickOn_Product).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickOn_Region).click();
    cy.wait(2000);
    cy.get(".ng-option").last().click();
    cy.get(this.locators.ClickOn_State).click();
    cy.wait(2000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickOn_City).click();
    cy.wait(2000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.Click_Generate_Report_button).click();



  }
  ReoprtPaymentTestPage_381() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
      cy.contains("Allocation Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
     cy.contains("Agency Allocation Gap Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.Clickon_Productgroup).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option')
      .each(($option) => {
        cy.wrap($option).click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.Clickon_Productgroup).click();
        cy.wait(2000);
      });
    cy.get(this.locators.ClickOn_Product).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option')
      .each(($option) => {
        cy.wrap($option).click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.Clickon_Bucket).click();
        cy.wait(2000);
      });
    cy.get(this.locators.ClickOn_Country).click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.Click_Generate_Report_button).click();
  }



  ReoprtPaymentTestPage_382() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
      cy.contains("Allocation Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
     cy.contains("Agency Allocation Gap Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.Clickon_Productgroup).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option')
      .each(($option) => {
        cy.wrap($option).click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.Clickon_Productgroup).click();
        cy.wait(2000);
      });
    cy.get(this.locators.ClickOn_Product).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option')
      .each(($option) => {
        cy.wrap($option).click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.Clickon_Bucket).click();
        cy.wait(2000);
      });
    cy.get(this.locators.ClickOn_Country).click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.Click_Generate_Report_button).click();
    cy.get('#download-report-button').click(({ force: true}));
    cy.wait(2000);
  }

  ReoprtPaymentTestPage_383() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
      cy.contains("Allocation Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
     cy.contains("Agency Allocation Gap Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.Clickon_Productgroup).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option')
      .each(($option) => {
        cy.wrap($option).click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.Clickon_Productgroup).click();
        cy.wait(2000);
      });
    cy.get(this.locators.ClickOn_Product).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option')
      .each(($option) => {
        cy.wrap($option).click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.Clickon_Bucket).click();
        cy.wait(2000);
      });
    cy.get(this.locators.ClickOn_Country).click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.Click_Generate_Report_button).click();
    cy.wait(12000);
    cy.get('#download-report-button').click({force: true});
    cy.wait(2000);
    // cy.contains("Agency Allocated & Un-Allocated Accounts Pie Report").should("be.visible");
    // cy.wait(2000);
  }

  ReoprtPaymentTestPage_384() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
      cy.contains("Allocation Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
     cy.contains("Agency Allocation Gap Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.Clickon_Productgroup).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickOn_Product).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option')
      .each(($option) => {
        cy.wrap($option).click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.Clickon_Bucket).click();
        cy.wait(2000);
      });
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.Click_Generate_Report_button).click();
    cy.wait(2000);
    cy.get('#download-report-button').click();
    cy.wait(2000);
    cy.contains("Agency Allocated & Un-Allocated Accounts Pie Report").should("be.visible");
    cy.wait(2000);

  }


  ReoprtPaymentTestPage_385() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
      cy.contains("Trail Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
     cy.contains("Trail Gap Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);


  }

  ReoprtPaymentTestPage_386() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
      cy.contains("Trail Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
     cy.contains("Trail Gap Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.Clickon_Productgroup).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);

  }
  ReoprtPaymentTestPage_387() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
      cy.contains("Trail Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
     cy.contains("Trail Gap Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.Clickon_Productgroup).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickonTrail_Product).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);



  }
  ReoprtPaymentTestPage_388() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
      cy.contains("Trail Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
     cy.contains("Trail Gap Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.Clickon_Productgroup).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickonTrail_Product).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickOn_SubProduct).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);


  }
  ReoprtPaymentTestPage_389() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
      cy.contains("Trail Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
     cy.contains("Trail Gap Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.Clickon_Productgroup).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickonTrail_Product).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickOn_SubProduct).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
  }
  ReoprtPaymentTestPage_390() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
      cy.contains("Trail Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
     cy.contains("Trail Gap Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.Clickon_Productgroup).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickonTrail_Product).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
  }

  ReoprtPaymentTestPage_391() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
      cy.contains("Trail Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
     cy.contains("Trail Gap Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.Clickon_Productgroup).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickonTrail_Product).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Region).click();
    cy.wait(2000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);


  }
  ReoprtPaymentTestPage_392() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
      cy.contains("Trail Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
     cy.contains("Trail Gap Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.Clickon_Productgroup).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickonTrail_Product).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Region).click();
    cy.wait(2000);
    cy.get(".ng-option").last().click();
    cy.get(this.locators.ClickOn_State).click();
    cy.wait(2000);
    cy.get(".ng-option").last().click();

  }
  ReoprtPaymentTestPage_393() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
      cy.contains("Trail Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
     cy.contains("Trail Gap Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.Clickon_Productgroup).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option')
      .each(($option) => {
        cy.wrap($option).click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.Clickon_Productgroup).click();
        cy.wait(2000);
      });
    cy.get(this.locators.ClickonTrail_Product).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Region).click();
    cy.wait(2000);
    cy.get(".ng-option").last().click();
    cy.get(this.locators.ClickOn_State).click();
    cy.wait(2000);
    cy.get(".ng-option").last().click();
    cy.get(this.locators.Click_Generate_Report_button).click();

  }
  ReoprtPaymentTestPage_394() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
      cy.contains("Trail Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
     cy.contains("Trail Gap Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.Clickon_Productgroup).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option')
      .each(($option) => {
        cy.wrap($option).click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.Clickon_Productgroup).click();
        cy.wait(2000);
      });
    cy.get(':nth-child(1) > .form-control-group > .form-ng-select > .ng-select-container > .ng-arrow-wrapper').click();
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option')
      .each(($option) => {
        cy.wrap($option).click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.Clickon_Bucket).click();
        cy.wait(2000);
      });
    cy.get(this.locators.ClickOn_Country).click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.Click_Generate_Report_button).click();
    cy.get('#download-report-button').click();


  }


  ReoprtPaymentTestPage_395() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
      cy.contains("Trail Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
     cy.contains("Trail Gap Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.Clickon_Productgroup).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option')
      .each(($option) => {
        cy.wrap($option).click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.Clickon_Productgroup).click();
        cy.wait(2000);
      });
    cy.get(':nth-child(1) > .form-control-group > .form-ng-select > .ng-select-container > .ng-arrow-wrapper').click();
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option')
      .each(($option) => {
        cy.wrap($option).click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.Clickon_Bucket).click();
        cy.wait(2000);
      });
    cy.get(this.locators.ClickOn_Country).click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.Click_Generate_Report_button).click();
    cy.wait(12000);
    cy.contains('Search Result').scrollIntoView().should('be.visible'); 
    cy.wait(2000);
    cy.get('#download-report-button').click();
    cy.wait(2000);
    // cy.contains("Agency Allocated & Un-Allocated Accounts Pie Report").should("be.visible");



  }
  ReoprtPaymentTestPage_396() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
      cy.contains("Trail Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
     cy.contains("Trail Gap Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get('[for="agencyUserRadio"]').click();



  }
  ReoprtPaymentTestPage_397() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
      cy.contains("Trail Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
     cy.contains("Trail Gap Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get('[for="agencyUserRadio"]').click();
    cy.get(this.locators.Clickon_Productgroup).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickonTrail_Product).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Region).click();
    cy.wait(2000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);

  }
  ReoprtPaymentTestPage_398() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
      cy.contains("Trail Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
     cy.contains("Trail Gap Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.Clickon_Productgroup).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option')
      .each(($option) => {
        cy.wrap($option).click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.Clickon_Productgroup).click();
        cy.wait(2000);
      });
    cy.get(':nth-child(1) > .form-control-group > .form-ng-select > .ng-select-container > .ng-arrow-wrapper').click();
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option')
      .each(($option) => {
        cy.wrap($option).click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.Clickon_Bucket).click();
        cy.wait(2000);
      });
    cy.get(this.locators.ClickOn_Country).click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.Click_Generate_Report_button).click();
    cy.get('#download-report-button').click();

  }
  ReoprtPaymentTestPage_399() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });

      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
      cy.contains("Trail Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
     cy.contains("Trail Gap Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.Clickon_Productgroup).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option')
      .each(($option) => {
        cy.wrap($option).click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.Clickon_Productgroup).click();
        cy.wait(2000);
      });
    cy.get(':nth-child(1) > .form-control-group > .form-ng-select > .ng-select-container > .ng-arrow-wrapper').click();
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option')
      .each(($option) => {
        cy.wrap($option).click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.Clickon_Bucket).click();
        cy.wait(2000);
      });
    cy.get(this.locators.ClickOn_Country).click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.Click_Generate_Report_button).click();
    cy.wait(3000);
    cy.get('#download-report-button').click();
    cy.contains("Search Result").should("be.visible");


  }

  ReoprtPaymentTestPage_406() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
      cy.contains("Trail Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
     cy.contains("Trail Gap Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.Clickon_Productgroup).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option')
      .each(($option) => {
        cy.wrap($option).click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.Clickon_Productgroup).click();
        cy.wait(2000);
      });
    cy.get(':nth-child(1) > .form-control-group > .form-ng-select > .ng-select-container > .ng-arrow-wrapper').click();
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option')
      .each(($option) => {
        cy.wrap($option).click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.Clickon_Bucket).click();
        cy.wait(2000);
      });
    cy.get(this.locators.ClickOn_Country).click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(this.locators.Click_Generate_Report_button).click();
    cy.wait(3000);
    cy.get('#download-report-button').click();
    cy.contains("Search Result").should("be.visible");







  }
  ReoprtPaymentTestPage_409() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    
    cy.wait(2000);
    cy.contains("Money Movement Report").click({ force: true });
    cy.get(this.locators.Clickon_Productgroup).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option')
      .each(($option) => {
        cy.wrap($option).click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.Clickon_Productgroup).click();
        cy.wait(2000);
      });
    cy.get(':nth-child(1) > .form-control-group > .form-ng-select > .ng-select-container > .ng-arrow-wrapper').click();
    cy.get(this.locators.Clickon_Bucket).click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(6) > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
     cy.get('#receiptDate_from').click();
                        cy.wait(500);
                        cy.get('.previous > span').click();
                        cy.wait(500);
                        const pastDate = new Date();
                        pastDate.setDate(pastDate.getDate() - 25);
                        const pastDay = pastDate.getDate().toString();
                        cy.get('.bs-datepicker-body').contains('span', pastDay).click();
                        cy.wait(500);
                        cy.get('#receiptDate_to').click();
                        cy.wait(500);
                        const today = new Date().getDate().toString();
                        cy.get('.bs-datepicker-body').contains('span', today).click();
                        cy.wait(2000);

    cy.get('#generate-report-button').click();


    //cy.get('.ng-trigger').should('contain','You can only search for thirty two day receipt at a time');


  }
  ReoprtPaymentTestPage_412() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Money Movement Report").click({ force: true });
    cy.wait(400);
    cy.get(this.locators.Clickon_Productgroup).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option')
      .each(($option) => {
        cy.wrap($option).click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.Clickon_Productgroup).click();
        cy.wait(2000);
      });
    cy.get(':nth-child(1) > .form-control-group > .form-ng-select > .ng-select-container > .ng-arrow-wrapper').click();
    cy.get(this.locators.Clickon_Bucket).click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(6) > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);

        cy.get('#receiptDate_from').click();
                        cy.wait(500);
                        cy.get('.previous > span').click();
                        cy.wait(500);
                        const pastDate = new Date();
                        pastDate.setDate(pastDate.getDate() - 25);
                        const pastDay = pastDate.getDate().toString();
                        cy.get('.bs-datepicker-body').contains('span', pastDay).click();
                        cy.wait(500);
                        cy.get('#receiptDate_to').click();
                        cy.wait(500);
                        const today = new Date().getDate().toString();
                        cy.get('.bs-datepicker-body').contains('span', today).click();
                        cy.wait(2000);

 
    cy.get('#generate-report-button').click();
     cy.wait(2000);
    cy.contains("Search Result").scrollIntoView().should("be.visible");


  }
  ReoprtPaymentTestPage_414() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Money Movement Report").click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Clickon_Productgroup).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option')
      .each(($option) => {
        cy.wrap($option).click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.Clickon_Productgroup).click();
        cy.wait(2000);
      });
    cy.get(':nth-child(1) > .form-control-group > .form-ng-select > .ng-select-container > .ng-arrow-wrapper').click();
    cy.get(this.locators.Clickon_Bucket).click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(6) > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
   cy.get('#receiptDate_from').click();
                        cy.wait(500);
                        cy.get('.previous > span').click();
                        cy.wait(500);
                        const pastDate = new Date();
                        pastDate.setDate(pastDate.getDate() - 25);
                        const pastDay = pastDate.getDate().toString();
                        cy.get('.bs-datepicker-body').contains('span', pastDay).click();
                        cy.wait(500);
                        cy.get('#receiptDate_to').click();
                        cy.wait(500);
                        const today = new Date().getDate().toString();
                        cy.get('.bs-datepicker-body').contains('span', today).click();
                        cy.wait(2000);
cy.get('#generate-report-button').click();
    cy.wait(2000);
    cy.get('#download-report-button').click();
    cy.wait(3000);
    cy.contains("Search Result").scrollIntoView().should("be.visible");
    cy.wait(2000);
  
  }

  ReoprtPaymentTestPage_415() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
  
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Money Movement Report").click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Clickon_Productgroup).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option')
      .each(($option) => {
        cy.wrap($option).click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.Clickon_Productgroup).click();
        cy.wait(2000);
      });
    cy.get(':nth-child(1) > .form-control-group > .form-ng-select > .ng-select-container > .ng-arrow-wrapper').click();
    cy.get(this.locators.Clickon_Bucket).click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(6) > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
     cy.get('#receiptDate_from').click();
                        cy.wait(500);
                        cy.get('.previous > span').click();
                        cy.wait(500);
                        const pastDate = new Date();
                        pastDate.setDate(pastDate.getDate() - 25);
                        const pastDay = pastDate.getDate().toString();
                        cy.get('.bs-datepicker-body').contains('span', pastDay).click();
                        cy.wait(500);
                        cy.get('#receiptDate_to').click();
                        cy.wait(500);
                        const today = new Date().getDate().toString();
                        cy.get('.bs-datepicker-body').contains('span', today).click();
                        cy.wait(2000);

    cy.get('#generate-report-button').click();
    cy.wait(2000);
    cy.contains("Search Result").scrollIntoView().should("be.visible");
  }

  ReoprtPaymentTestPage_417() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Money Movement Report").click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Clickon_Productgroup).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option')
      .each(($option) => {
        cy.wrap($option).click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.Clickon_Productgroup).click();
        cy.wait(2000);
      });
    cy.get(':nth-child(1) > .form-control-group > .form-ng-select > .ng-select-container > .ng-arrow-wrapper').click();
    cy.get(this.locators.Clickon_Bucket).click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(6) > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
     cy.get('#receiptDate_from').click();
                        cy.wait(500);
                        cy.get('.previous > span').click();
                        cy.wait(500);
                        const pastDate = new Date();
                        pastDate.setDate(pastDate.getDate() - 25);
                        const pastDay = pastDate.getDate().toString();
                        cy.get('.bs-datepicker-body').contains('span', pastDay).click();
                        cy.wait(500);
                        cy.get('#receiptDate_to').click();
                        cy.wait(500);
                        const today = new Date().getDate().toString();
                        cy.get('.bs-datepicker-body').contains('span', today).click();
                        cy.wait(2000);

    cy.get('#generate-report-button').click();
    cy.wait(2000);
    cy.contains("Search Result").scrollIntoView().should("be.visible");
  }
  ReoprtPaymentTestPage_427() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Supervisory Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get('[heading="Product Filter"] > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Supervisory_PG).click();
    cy.wait(2000);

      cy.get('.ng-dropdown-panel .ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
 cy.wait(2000);

 cy.get('[heading="Bucket Filter"] > .panel > .panel-heading > .panel-title').click();
    cy.wait(2000);

  cy.get(this.locators.ClickOn_Supervisory_Bucket).click();
    cy.wait(2000);

      cy.get('.ng-dropdown-panel .ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
 cy.wait(2000);

 cy.get('[heading="  Geography Filter"] > .panel > .panel-heading > .panel-title').click();
    cy.wait(2000);

  cy.get(this.locators.ClickOn_Supervisory_Country).click();
    cy.wait(2000);

      cy.get('.ng-dropdown-panel .ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
 cy.wait(2000);
   
    cy.get(this.locators.ClickGenrtReport).click({ force: true });
    cy.wait(2000);
    cy.log('Generated sucessfully');
    cy.contains("Search Result").scrollIntoView().should("be.visible");
    cy.wait(2000);

  }


  ReoprtPaymentTestPage_428() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Supervisory Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get('[heading="Product Filter"] > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Supervisory_PG).click();
    cy.wait(2000);

      cy.get('.ng-dropdown-panel .ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
 cy.wait(2000);

   cy.get(this.locators.ClikcOn_Supervisory_Product).click();
    cy.wait(2000);

      cy.get('.ng-dropdown-panel .ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
 cy.wait(2000);
   cy.get(this.locators.ClickOn_Supervisory_SubProduct).click();
    cy.wait(2000);

      cy.get('.ng-dropdown-panel .ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
 cy.wait(2000);
   
    cy.get(this.locators.ClickGenrtReport).click({ force: true });
    cy.wait(2000);
    cy.get('[role="alert"]').should('contain', 'Please select at least one Bucket.');
    cy.wait(2000);
     cy.contains("Search Result").scrollIntoView().should("be.visible");
    cy.wait(2000);

  }
  ReoprtPaymentTestPage_429() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Supervisory Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get('[heading="Product Filter"] > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Supervisory_PG).click();
    cy.wait(2000);

      cy.get('.ng-dropdown-panel .ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
 cy.wait(2000);

  cy.get(this.locators.ClikcOn_Supervisory_Product).click();
    cy.wait(2000);

      cy.get('.ng-dropdown-panel .ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
 cy.wait(2000);
   cy.get(this.locators.ClickOn_Supervisory_SubProduct).click();
    cy.wait(2000);

      cy.get('.ng-dropdown-panel .ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
 cy.wait(2000);

 cy.get('[heading="Bucket Filter"] > .panel > .panel-heading > .panel-title').click();
    cy.wait(2000);

  cy.get(this.locators.ClickOn_Supervisory_Bucket).click();
    cy.wait(2000);

      cy.get('.ng-dropdown-panel .ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
 cy.wait(2000);

 cy.get('[heading="  Geography Filter"] > .panel > .panel-heading > .panel-title').click();
    cy.wait(2000);

  cy.get(this.locators.ClickOn_Supervisory_Country).click();
    cy.wait(2000);

      cy.get('.ng-dropdown-panel .ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
 cy.wait(2000);
   
    cy.get(this.locators.ClickGenrtReport).click({ force: true });
    cy.wait(2000);
    cy.log('Generated sucessfully');

     cy.contains("Search Result").scrollIntoView().should("be.visible");
    cy.wait(2000);

  }
  ReportsModule() {
    cy.wait(2000);
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
    cy.get(this.locators.clickonreports).click();
  }

   TrailIntensityReportTestPage_400() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
      cy.contains("Trail Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Trail Gap Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);

  }

  TrailIntensityReportTestPage_401() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
      cy.contains("Trail Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
     cy.contains("Trail Gap Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.Select_trailGap_BUcket).click();
    cy.wait(2000);

      cy.get('.ng-dropdown-panel .ng-option')
      .each(($option) => {
        cy.wrap($option).click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.Select_trailGap_BUcket).click();
        cy.wait(2000);
      });
    cy.wait(2000);


  }

  TrailIntensityReportTestPage_402() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
      cy.contains("Trail Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
     cy.contains("Trail Gap Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
     cy.get(this.locators.Select_trailGap_Country).click();
    cy.wait(2000);

     cy.get('.ng-dropdown-panel .ng-option')
      .each(($option) => {
        cy.wrap($option).click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.Select_trailGap_Country).click();
        cy.wait(2000);
      });
    cy.wait(2000);
  }

  TrailIntensityReportTestPage_403() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
      cy.contains("Trail Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
     cy.contains("Trail Gap Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    //cy.get('#inlineRadio2').click();

      cy.get(this.locators.Select_trailGap_Country).click();
    cy.wait(2000);

     cy.get('.ng-dropdown-panel .ng-option')
      .each(($option) => {
        cy.wrap($option).click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.Select_trailGap_Country).click();
        cy.wait(2000);
      });
    cy.wait(2000);

      cy.get(this.locators.Select_trailGap_Region).click();
    cy.wait(2000);

     cy.get('.ng-dropdown-panel .ng-option')
      .each(($option) => {
        cy.wrap($option).click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.Select_trailGap_Region).click();
        cy.wait(2000);
      });
    cy.wait(2000);

      cy.get(this.locators.Select_trailGap_State).click();
    cy.wait(2000);

     cy.get('.ng-dropdown-panel .ng-option')
      .each(($option) => {
        cy.wrap($option).click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.Select_trailGap_State).click();
        cy.wait(2000);
      });
    cy.wait(2000);

      cy.get(this.locators.select_city).click();
    cy.wait(2000);

     cy.get('.ng-dropdown-panel .ng-option')
      .each(($option) => {
        cy.wrap($option).click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.select_city).click();
        cy.wait(2000);
      });
    cy.wait(2000);

    //   cy.get(this.locators.Select_trailGap_Branch).click();
    // cy.wait(2000);

    //  cy.get('.ng-dropdown-panel .ng-option')
    //   .each(($option) => {
    //     cy.wrap($option).click({ force: true });
    //     cy.wait(2000);
    //     cy.get(this.locators.Select_trailGap_Branch).click();
    //     cy.wait(2000);
    //   });
    // cy.wait(2000);

   
  }

  TrailIntensityReportTestPage_404() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
      cy.contains("Trail Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
     cy.contains("Trail Gap Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get('#agencyUserRadio').click();
    cy.wait(2000);
    cy.get(':nth-child(11) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click({force:true});
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option').then($options => {
  const count = $options.length;
  const randomIndex = Math.floor(Math.random() * count);   // pick one random option

  cy.wrap($options[randomIndex]).click({ force: true });
});
 cy.wait(2000);
  }

  TrailIntensityReportTestPage_405() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
      cy.contains("Trail Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
     cy.contains("Trail Gap Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get('#agencyUserRadio').click();
    cy.get(':nth-child(10) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click({force:true});
    cy.wait(2000);

     cy.get('.ng-dropdown-panel .ng-option').then($options => {
  const count = $options.length;
  const randomIndex = Math.floor(Math.random() * count);   // pick one random option

  cy.wrap($options[randomIndex]).click({ force: true });
});
 cy.wait(2000);
  }

  MoneyMovementReportTestPage_408() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Money Movement Report").click({ force: true });
    cy.wait(400);

  }

  MoneyMovementReportTestPage_410() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Money Movement Report").click({ force: true });
    cy.wait(400);
    cy.contains("Product Group(s)").should("be.visible");
    cy.wait(1000);
    cy.contains("Product(s)").should("be.visible");
    cy.wait(1000);
    cy.contains("Sub Product(s)").should("be.visible");
    cy.wait(1000);
    cy.contains("Bucket").should("be.visible");
    cy.wait(1000);
    cy.contains("NPA Stage ID").should("be.visible");
    cy.wait(1000);
    cy.contains("Country(s)").should("be.visible");
    cy.wait(1000);
    cy.contains("Region(s)").should("be.visible");
    cy.wait(1000);
    cy.contains("State(s)").should("be.visible");
    cy.wait(1000);
    cy.contains("City(s)").should("be.visible");
    cy.wait(1000);
    //cy.contains("Branch").should("be.visible");
    //cy.wait(1000);
    cy.contains("Receipt From Date").should("be.visible");
    cy.wait(1000);
    cy.contains("Receipt To Date").should("be.visible");
    cy.wait(1000);
    cy.contains("User Branch(s)").scrollIntoView().should("be.visible");
    cy.wait(1000);
    //cy.get('ul.sub-nav-list').should('have.css', 'height');
    // cy.contains("Staff").should("be.visible");
    //cy.wait(1000);





  }

  MoneyMovementReportTestPage_418() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Money Movement Report").click({ force: true });
    cy.wait(400);

    cy.get(this.locators.ClickOn_Product_group).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option')
      .each(($option) => {
        cy.wrap($option).click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.ClickOn_Product_group).click();
        cy.wait(2000);
      });
    cy.get('body').click(0, 0);
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(1000); // wait between selections (adjust if needed)
        });
      });
    cy.get(this.locators.ClickOn_Country_MM).click();
    cy.wait(2000);
    cy.contains('India').click({ force: true });

    cy.wait(2000);
    cy.get('#receiptDate_from').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 30);
    const pastDay = pastDate.getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', pastDay).click({force: true});
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    const today = new Date().getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', today).click({force: true});
    cy.wait(2000);


    cy.get('#generate-report-button').click();
    cy.wait(3000);
    cy.contains("Search Result").scrollIntoView().should("be.visible");
    cy.wait(2000);




  }

  MoneyMovementReportTestPage_419() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Money Movement Report").click({ force: true });
    cy.wait(400);
    cy.get(this.locators.ClickOn_Product_group).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(1) > .form-control-group > .form-ng-select > .ng-select-container > .ng-arrow-wrapper').click()
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(6) > .form-control-group').click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(7) > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get('#receiptDate_from').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 30);
    const pastDay = pastDate.getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', pastDay).click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    const today = new Date().getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', today).click();
    cy.wait(1000);
  }

  MoneyMovementReportTestPage_420() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Money Movement Report").click({ force: true });
    cy.get(this.locators.ClickOn_Product_group).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option')
      .each(($option) => {
        cy.wrap($option).click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.ClickOn_Product_group).click();
        cy.wait(2000);
      });
    cy.get('body').click(0, 0);
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(1000); // wait between selections (adjust if needed)
        });
      });
    cy.get(this.locators.ClickOn_Country_MM).click();
    cy.wait(2000);
    cy.contains('India').click({ force: true });
    cy.wait(2000);

    cy.get(':nth-child(7) > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(2000);

    cy.get('.ng-option').each(($option) => {
      cy.wrap($option).click();

      // Assert that the selected value is visible in the UI
      cy.wrap($option).invoke('text').then((text) => {
        cy.contains(text.trim()).should('be.visible');
      });

      // Reopen dropdown if it closes automatically
      cy.get(':nth-child(7) > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input')
        .click({ force: true });
    });

    cy.get('#receiptDate_from').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 30);
    const pastDay = pastDate.getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', pastDay).click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    const today = new Date().getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', today).click();
    cy.wait(1000);


    cy.get('#generate-report-button').click();
    cy.wait(3000);
    cy.contains("Search Result").scrollIntoView().should("be.visible");
    cy.wait(2000);

  }

  MoneyMovementReportTestPage_421() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Money Movement Report").click({ force: true });
    cy.get(this.locators.ClickOn_Product_group).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option')
      .each(($option) => {
        cy.wrap($option).click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.ClickOn_Product_group).click();
        cy.wait(2000);
      });
    cy.get('body').click(0, 0);
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(1000);
        });
      });
    cy.get(this.locators.ClickOn_Country_MM).click();
    cy.wait(2000);
    cy.contains('India').click({ force: true });
    cy.wait(2000);

    cy.get(':nth-child(7) > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(2000);
    cy.contains('South').click({ force: true });
    cy.wait(2000);

    cy.get(':nth-child(8) > .form-control-group > .form-ng-select > .ng-select-container').click();
    cy.wait(2000);

    cy.get('.ng-option').each(($option) => {
      cy.wrap($option).click();
      cy.wrap($option).invoke('text').then((text) => {
        cy.contains(text.trim()).should('be.visible');
      });
      cy.get(':nth-child(8) > .form-control-group > .form-ng-select > .ng-select-container').click({ force: true });
    });
    cy.wait(2000);

    cy.get('#receiptDate_from').click({ force: true });
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 30);
    const pastDay = pastDate.getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', pastDay).click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    const today = new Date().getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', today).click();
    cy.wait(1000);


    cy.get('#generate-report-button').click();
    cy.wait(3000);
    cy.contains("Search Result").scrollIntoView().should("be.visible");
    cy.wait(2000);
  }

  MoneyMovementReportTestPage_422() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Money Movement Report").click({ force: true });
    cy.get(this.locators.ClickOn_Product_group).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option')
      .each(($option) => {
        cy.wrap($option).click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.ClickOn_Product_group).click();
        cy.wait(2000);
      });
    cy.get('body').click(0, 0);
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(1000); // wait between selections (adjust if needed)
        });
      });
    cy.get(this.locators.ClickOn_Country_MM).click();
    cy.wait(2000);
    cy.contains('India').click({ force: true });
    cy.wait(2000);

    cy.get(':nth-child(7) > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(2000);
    cy.contains('South').click({ force: true });
    cy.wait(2000);

    cy.get(':nth-child(8) > .form-control-group > .form-ng-select > .ng-select-container').click();
    cy.wait(2000);
    cy.contains('Karnataka').click({ force: true });
    cy.wait(2000);

    cy.get(':nth-child(9) > .form-control-group > .form-ng-select > .ng-select-container').click();
    cy.wait(2000);
    cy.get('.ng-option').each(($option) => {
      cy.wrap($option).click();
      cy.wrap($option).invoke('text').then((text) => {
        cy.contains(text.trim()).should('be.visible');
      });
      cy.get(':nth-child(9) > .form-control-group > .form-ng-select > .ng-select-container').click({ force: true });
    });
    cy.wait(2000);

    cy.get('#receiptDate_from').click({ force: true });
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 30);
    const pastDay = pastDate.getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', pastDay).click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    const today = new Date().getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', today).click();
    cy.wait(1000);


    cy.get('#generate-report-button').click();
    cy.wait(3000);
    cy.contains("Search Result").scrollIntoView().should("be.visible");
    cy.wait(2000);
  }

  MoneyMovementReportTestPage_423() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Money Movement Report").click({ force: true });
    cy.get(this.locators.ClickOn_Product_group).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option')
      .each(($option) => {
        cy.wrap($option).click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.ClickOn_Product_group).click();
        cy.wait(2000);
      });
    cy.get('body').click(0, 0);
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.get('.ng-option').each(($option) => {
          cy.wrap($option).click({ force: true });
          cy.wait(1000); // wait between selections (adjust if needed)
        });
      });
    cy.get(this.locators.ClickOn_Country_MM).click();
    cy.wait(2000);
    cy.contains('India').click({ force: true });
    cy.wait(2000);

    cy.get(':nth-child(7) > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(2000);
    cy.contains('South').click({ force: true });
    cy.wait(2000);

    cy.get(':nth-child(8) > .form-control-group > .form-ng-select > .ng-select-container').click();
    cy.wait(2000);
    cy.contains('Karnataka').click({ force: true });
    cy.wait(2000);

    cy.get(':nth-child(9) > .form-control-group > .form-ng-select > .ng-select-container').click();
    cy.wait(2000);
    cy.contains('Bangalore').click({ force: true });
    cy.wait(2000);


    cy.get(':nth-child(10) > .form-control-group > .form-ng-select > .ng-select-container').click();
    cy.wait(2000);
    cy.get('.ng-option').each(($option) => {
      cy.wrap($option).click();
      cy.wrap($option).invoke('text').then((text) => {
        cy.contains(text.trim()).should('be.visible');
      });
      cy.get(':nth-child(10) > .form-control-group > .form-ng-select > .ng-select-container').click({ force: true });
    });
    cy.wait(2000);

    cy.get('#receiptDate_from').click({ force: true });
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 30);
    const pastDay = pastDate.getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', pastDay).click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    const today = new Date().getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', today).click();
    cy.wait(1000);


    cy.get('#generate-report-button').click();
    cy.wait(3000);
    cy.contains("Search Result").scrollIntoView().should("be.visible");
    cy.wait(2000);
  }

  MoneyMovementReportTestPage_424() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Money Movement Report").click({ force: true });
    cy.wait(400);
    cy.get(this.locators.ClickOn_Product_group).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(1) > .form-control-group > .form-ng-select > .ng-select-container > .ng-arrow-wrapper').click()
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(6) > .form-control-group').click();
    cy.wait(2000);
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get(':nth-child(7) > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.get(".ng-option").last().click();
    cy.wait(2000);
    // Open the dropdown
    cy.get(':nth-child(8) > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();

    // Get all options and select them one by one
    cy.get('.ng-option').each(($option) => {
      cy.wrap($option).click();
      // Reopen dropdown if it closes after each click
      cy.get(':nth-child(8) > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    });

    cy.wait(2000);
    cy.get(':nth-child(8) > .form-control-group > .form-ng-select > .ng-select-container > .ng-arrow-wrapper').click();
    cy.get('#receiptDate_from').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 30);
    const pastDay = pastDate.getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', pastDay).click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    const today = new Date().getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', today).click();
    cy.wait(1000);
    cy.get(':nth-child(13) > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.get('.ng-option').each(($el) => {
      cy.wrap($el).click({ force: true });
      cy.wait(1000);
    });
    cy.wait(2000);
    cy.get('#generate-report-button').click();
    cy.wait(2000);
  }

  SupervisoryReportTestPage_425() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.wait(2000);
    cy.contains("Supervisory Report").scrollIntoView().should("be.visible").click();
    cy.wait(400);
    cy.get('accordion-group[heading="Product Filter"] div[role="button"]').click();
    cy.wait(400);
     cy.get(this.locators.ClickOn_Supervisory_PG).click();
    cy.wait(2000);

      cy.get('.ng-dropdown-panel .ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
 cy.wait(2000);

 cy.get('[heading="  Geography Filter"] > .panel > .panel-heading > .panel-title').click();
    cy.wait(2000);

  cy.get(this.locators.ClickOn_Supervisory_Country).click();
    cy.wait(2000);

      cy.get('.ng-dropdown-panel .ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
 cy.wait(2000);

  cy.get(this.locators.ClickGenrtReport).click({ force: true });
    cy.wait(2000);
    cy.get('[role="alert"]').should('contain', 'Please select at least one Bucket.');
    cy.wait(2000);
  }

  SupervisoryReportTestPage_426() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.wait(2000);
    cy.contains("Supervisory Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get('accordion-group[heading="Product Filter"] div[role="button"]').click();
    cy.wait(400);
     cy.get(this.locators.ClickOn_Supervisory_PG).click();
    cy.wait(2000);

      cy.get('.ng-dropdown-panel .ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
 cy.wait(2000);

 cy.get('[heading="Bucket Filter"] > .panel > .panel-heading > .panel-title').click();
    cy.wait(2000);

  cy.get(this.locators.ClickOn_Supervisory_Bucket).click();
    cy.wait(2000);

      cy.get('.ng-dropdown-panel .ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
 cy.wait(2000);

    cy.get(this.locators.ClickGenrtReport).click({ force: true });
    cy.wait(2000);

    cy.get('[role="alert"]').should('contain', 'The Geos field is required.');
    cy.wait(2000);

  }

  CollectionIntensityTestPage_01() {

    Cypress.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes('ResizeObserver loop')) {
        return false; // Prevents Cypress from failing the test
      }
    });

      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(3000);
    cy.contains("Collection Intensity Report").scrollIntoView().should("be.visible");
    cy.wait(1000);

  }

  CollectionIntensityTestPage_02() {

      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
      cy.contains("Collection Intensity Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.ClickBankStaff_Radio).click();
    cy.wait(2000);
    cy.contains("Product Group").should("be.visible");
    cy.wait(1000);
    cy.contains("Product").should("be.visible");
    cy.wait(1000);
    cy.contains("Sub Product").should("be.visible");
    cy.wait(1000);
    cy.contains("Country").should("be.visible");
    cy.wait(1000);
    cy.contains("Region").should("be.visible");
    cy.wait(1000);
    cy.contains("State").should("be.visible");
    cy.wait(1000);
    cy.contains("City").should("be.visible");
    cy.wait(1000);
    cy.contains("BOM Bucket").should("be.visible");
    cy.wait(1000);
    cy.contains("Trail/Receipt From").should("be.visible");
    cy.wait(1000);
    cy.contains("Trail/Receipt To").should("be.visible");
    cy.wait(1000);
    // cy.contains("Branch").should("be.visible");
    // cy.wait(1000);
    cy.contains("Staff Name").should("be.visible");
    cy.wait(1000);


  }

  CollectionIntensityTestPage_03() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
      cy.contains("Collection Intensity Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.ClickBankStaff_Radio).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBOMBucket).select("All");
    cy.wait(1000);
    cy.get('#receiptDate_from').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get('.today-date').click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnGenerateReportBtn).click();
    cy.wait(9000);


  }

  CollectionIntensityTestPage_04() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
      cy.contains("Collection Intensity Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.ClickBankStaff_Radio).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBOMBucket).select("All");
    cy.wait(1000);
    cy.get('#receiptDate_from').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get('.today-date').click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnGenerateReportBtn).click();
    cy.wait(3000);
    cy.contains("Collector Branch/Agency Name").scrollIntoView().should("be.visible");
    cy.wait(1000);
    cy.contains("Allocated Agent/Staff Name").should("be.visible");
    cy.wait(1000);
    cy.contains("Customer Account No").should("be.visible");
    cy.wait(1000);
    cy.contains("Customer Name").should("be.visible");
    cy.wait(1000);
    cy.get('.mt-4 > .card-content').scrollTo(500, 0);
    cy.wait(1000);
    cy.contains("Date of Allocation").should("be.visible");
    cy.wait(1000);
    cy.contains("Total Dues").should("be.visible");
    cy.wait(1000);
    cy.contains("Date of 1st Call").should("be.visible");
    cy.wait(1000);
    cy.contains("Date of 1st Visit").should("be.visible");
    cy.wait(1000);
    cy.get('.mt-4 > .card-content').scrollTo(1000, 0);
    cy.wait(1000);
    cy.contains("Time of 1st Call").should("be.visible");
    cy.wait(1000);
    cy.contains("Time of 1st Visit").should("be.visible");
    cy.wait(1000);
    cy.contains("Total Calls Till Date").should("be.visible");
    cy.wait(1000);
    cy.get('.mt-4 > .card-content').scrollTo(1500, 0);
    cy.wait(1000);
    cy.contains("Total Visits Till Date").should("be.visible");
    cy.wait(1000);
    cy.contains("Total Collection").should("be.visible");
    cy.wait(1000);
    cy.contains("Pending Collection").should("be.visible");
    cy.wait(1000);

  }

  CollectionIntensityTestPage_05() {

      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
      cy.contains("Collection Intensity Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.ClickBankStaff_Radio).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBOMBucket).select("All");
    cy.wait(1000);
    cy.get('#receiptDate_from').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnGenerateReportBtn).click();
    cy.wait(10000);
    cy.get('.mt-4 > .card-content').scrollIntoView().should("be.visible");
    cy.wait(1000);
    cy.contains("Customer Account No").should("be.visible");
    cy.wait(1000);

  }

  CollectionIntensityTestPage_06() {

      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
      cy.contains("Collection Intensity Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.ClickBankStaff_Radio).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBOMBucket).select("All");
    cy.wait(1000);
    cy.get('#receiptDate_from').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnGenerateReportBtn).click();
    cy.wait(10000);
    cy.get('.mt-4 > .card-content').scrollIntoView().should("be.visible");
    cy.wait(1000);


  }

  CollectionIntensityTestPage_07() {

      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
      cy.contains("Collection Intensity Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.ClickBankStaff_Radio).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBOMBucket).select("All");
    cy.wait(1000);
    cy.get('#receiptDate_from').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnGenerateReportBtn).click();
    cy.wait(10000);
    cy.get('.mt-4 > .card-content').scrollIntoView().should("be.visible");
    cy.wait(1000);


  }

  CollectionIntensityTestPage_08() {

      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
      cy.contains("Collection Intensity Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.ClickBankStaff_Radio).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBOMBucket).select("All");
    cy.wait(1000);
    cy.get('#receiptDate_from').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnGenerateReportBtn).click();
    cy.wait(9000);
    cy.get(this.locators.ClickonDownloadreportBtn).click();
    cy.wait(1000);


  }

  CollectionIntensityTestPage_09() {

      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
      cy.contains("Collection Intensity Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.ClickAgencyStaff_Radio).click();
    cy.wait(1000);
    cy.contains("Product Group").should("be.visible");
    cy.wait(1000);
    cy.contains("Product").should("be.visible");
    cy.wait(1000);
    cy.contains("Sub Product").should("be.visible");
    cy.wait(1000);
    cy.contains("Country").should("be.visible");
    cy.wait(1000);
    cy.contains("Region").should("be.visible");
    cy.wait(1000);
    cy.contains("State").should("be.visible");
    cy.wait(1000);
    cy.contains("City").should("be.visible");
    cy.wait(1000);
    cy.get(this.locators.ClickOnGenerateReportBtn).should('be.disabled');
    cy.wait(2000);
    cy.get(this.locators.ClickonDownloadreportBtn).should('be.disabled');
    cy.wait(1000);
    cy.contains("BOM Bucket").should("be.visible");
    cy.wait(1000);
    cy.contains("Trail/Receipt From").should("be.visible");
    cy.wait(1000);
    cy.contains("Trail/Receipt To").should("be.visible");
    cy.wait(1000);
    // cy.contains("Agency").should("be.visible");
    // cy.wait(1000);
    // cy.contains("Agent").should("be.visible");
    // cy.wait(1000);
    cy.get(this.locators.ClickOnBOMBucket).select("All");
    cy.wait(1000);
    cy.get('#receiptDate_from').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnGenerateReportBtn).should('be.enabled').click();
    cy.wait(10000);
    cy.get(this.locators.ClickonDownloadreportBtn).should('be.enabled');
    cy.wait(1000);

  }

  CollectionIntensityTestPage_10() {

      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
      cy.contains("Collection Intensity Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.ClickAgencyStaff_Radio).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBOMBucket).select("All");
    cy.wait(1000);
    cy.get('#receiptDate_from').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnGenerateReportBtn).click();
    cy.wait(5000);

  }

  CollectionIntensityTestPage_11() {

      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
      cy.contains("Collection Intensity Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.ClickAgencyStaff_Radio).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBOMBucket).select("All");
    cy.wait(1000);
    cy.get('#receiptDate_from').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnGenerateReportBtn).click();
    cy.wait(10000);
    cy.contains("Collector Branch/Agency Name").scrollIntoView().should("be.visible");
    cy.wait(1000);
    cy.contains("Allocated Agent/Staff Name").should("be.visible");
    cy.wait(1000);
    cy.contains("Customer Account No").should("be.visible");
    cy.wait(1000);
    cy.contains("Customer Name").should("be.visible");
    cy.wait(1000);
    cy.get('.mt-4 > .card-content').scrollTo(500, 0);
    cy.wait(1000);
    cy.contains("Date of Allocation").should("be.visible");
    cy.wait(1000);
    cy.contains("Total Dues").should("be.visible");
    cy.wait(1000);
    cy.contains("Date of 1st Call").should("be.visible");
    cy.wait(1000);
    cy.contains("Date of 1st Visit").should("be.visible");
    cy.wait(1000);
    cy.get('.mt-4 > .card-content').scrollTo(1000, 0);
    cy.wait(1000);
    cy.contains("Time of 1st Call").should("be.visible");
    cy.wait(1000);
    cy.contains("Time of 1st Visit").should("be.visible");
    cy.wait(1000);
    cy.contains("Total Calls Till Date").should("be.visible");
    cy.wait(1000);
    cy.get('.mt-4 > .card-content').scrollTo(1500, 0);
    cy.wait(1000);
    cy.contains("Total Visits Till Date").should("be.visible");
    cy.wait(1000);
    cy.contains("Total Collection").should("be.visible");
    cy.wait(1000);
    cy.contains("Pending Collection").should("be.visible");
    cy.wait(1000);


  }

  CollectionIntensityTestPage_12() {

      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
      cy.contains("Collection Intensity Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.ClickAgencyStaff_Radio).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBOMBucket).select("All");
    cy.wait(1000);
    cy.get('#receiptDate_from').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnGenerateReportBtn).click();
    cy.wait(10000);
    cy.get('.mt-4 > .card-content').scrollIntoView().should("be.visible");
    cy.wait(1000);
    cy.contains("Customer Account No").should("be.visible");
    cy.wait(1000);

  }

  CollectionIntensityTestPage_13() {

      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
      cy.contains("Collection Intensity Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.ClickAgencyStaff_Radio).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBOMBucket).select("All");
    cy.wait(1000);
    cy.get(this.locators.ClickOnReceiptFrom).type("01/03/2025");
    cy.wait(1000);
    cy.get(this.locators.ClickOnReceiptTo).click({ force: true });
    cy.wait(2000);
    cy.get('.today-date').click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnGenerateReportBtn).click();
    cy.wait(10000);
    cy.get('.mt-4 > .card-content').scrollIntoView().should("be.visible");
    cy.wait(1000);

  }

  CollectionIntensityTestPage_14() {

      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
      cy.contains("Collection Intensity Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.ClickAgencyStaff_Radio).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBOMBucket).select("All");
    cy.wait(1000);
    cy.get('#receiptDate_from').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnGenerateReportBtn).click();
    cy.wait(10000);
    cy.get('.mt-4 > .card-content').scrollIntoView().should("be.visible");
    cy.wait(1000);


  }

  CollectionIntensityTestPage_15() {


      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
      cy.contains("Collection Intensity Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.ClickAgencyStaff_Radio).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBOMBucket).select("All");
    cy.wait(1000);
    cy.get('#receiptDate_from').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnGenerateReportBtn).click();
    cy.wait(10000);
    cy.get(this.locators.ClickonDownloadreportBtn).click();
    cy.wait(1000);

  }



  CollectionTrendTestPage_01() {

    Cypress.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes('ResizeObserver loop')) {
        return false; // Prevents Cypress from failing the test
      }
    });

      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(3000);
    cy.contains("Collection Trend Report").scrollIntoView().should("be.visible");
    cy.wait(1000);

  }

  CollectionTrendTestPage_02() {

      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(3000);
    cy.contains("Collection Trend Report").scrollIntoView().should("be.visible").click();
    cy.wait(3000);
    cy.get(this.locators.ClickBankStaff_Radio).click();
    cy.wait(1000);
    cy.contains("Product Group").should("be.visible");
    cy.wait(1000);
    cy.contains("Product").should("be.visible");
    cy.wait(1000);
    cy.contains("Sub Product").should("be.visible");
    cy.wait(1000);
    cy.contains("Country").should("be.visible");
    cy.wait(1000);
    cy.contains("Region").should("be.visible");
    cy.wait(1000);
    cy.contains("State").should("be.visible");
    cy.wait(1000);
    cy.contains("City").should("be.visible");
    cy.wait(1000);
    cy.contains("BOM Bucket").should("be.visible");
    cy.wait(1000);
    cy.contains("Receipt From Date").should("be.visible");
    cy.wait(1000);
    cy.contains("Receipt To Date").should("be.visible");
    cy.wait(1000);
    // cy.contains("Branch").should("be.visible");
    // cy.wait(1000);
    cy.contains("Staff Name").should("be.visible");
    cy.wait(1000);
    cy.get(this.locators.ClickOnGenerateReportBtn).should('be.disabled');
    cy.wait(2000);
    cy.get(this.locators.ClickonDownloadreportBtn).should('be.disabled');
    cy.wait(1000);
    cy.get(this.locators.ClickOnBOMBucket).select("All");
    cy.wait(1000);
    cy.get('#receiptDate_from').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnGenerateReportBtn).should('be.enabled').click();
    cy.wait(9000);
    cy.get(this.locators.ClickonDownloadreportBtn).should('be.enabled');
    cy.wait(1000);

  }

  CollectionTrendTestPage_03() {

      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.contains("Collection Trend Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.ClickBankStaff_Radio).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBOMBucket).select("All");
    cy.wait(1000);
    cy.get('#receiptDate_from').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnGenerateReportBtn).click();
    cy.wait(10000);
    cy.get('.mt-4 > .card-content').scrollIntoView().should("be.visible");
    cy.wait(2000);

  }

  CollectionTrendTestPage_04() {

      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.contains("Collection Trend Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.ClickAgencyStaff_Radio).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBOMBucket).select("All");
    cy.wait(1000);
    cy.get('#receiptDate_from').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnGenerateReportBtn).click();
    cy.wait(9000);
    cy.contains("Collector Branch/Agency Name").scrollIntoView().should("be.visible");
    cy.wait(1000);
    cy.contains("Allocated Agent/Staff Name").should("be.visible");
    cy.wait(1000);
    cy.contains("Collected Agent/Staff Name").should("be.visible");
    cy.wait(1000);
    cy.get('.mt-4 > .card-content').scrollTo(400, 0);
    cy.wait(1000);
    cy.contains("Customer Account No").should("be.visible");
    cy.wait(1000);
    cy.contains("Customer Name").should("be.visible");
    cy.wait(1000);
    cy.contains("No. of Calls").should("be.visible");
    cy.wait(1000);
    cy.contains("No. of Visits").should("be.visible");
    cy.wait(1000);
    cy.get('.mt-4 > .card-content').scrollTo(900, 0);
    cy.wait(1000);
    cy.contains("Count of PTP").should("be.visible");
    cy.wait(1000);
    cy.contains("Latest Collection date within date range").should("be.visible");
    cy.wait(1000);
    cy.get('.mt-4 > .card-content').scrollTo(1300, 0);
    cy.wait(1000);
    cy.contains("Count of receipts within date range").should("be.visible");
    cy.wait(1000);
    cy.get('.mt-4 > .card-content').scrollTo(1500, 0);
    cy.wait(1000);
    cy.contains("Sum of Collected amount within date range").should("be.visible");
    cy.wait(1000);
    cy.get('.mt-4 > .card-content').scrollTo(1700, 0);
    cy.wait(1000);
    cy.contains("Latest Mode of collection within date range").should("be.visible");
    cy.wait(1000);


  }

  CollectionTrendTestPage_05() {

      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.contains("Collection Trend Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.ClickBankStaff_Radio).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBOMBucket).select("All");
    cy.wait(1000);
    cy.get('#receiptDate_from').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnGenerateReportBtn).click();
    cy.wait(9000);
    cy.get('.mt-4 > .card-content').scrollIntoView().should("be.visible");
    cy.wait(1000);


  }

  CollectionTrendTestPage_06() {

      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.contains("Collection Trend Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.ClickBankStaff_Radio).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBOMBucket).select("All");
    cy.wait(1000);
    cy.get('#receiptDate_from').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnGenerateReportBtn).click();
    cy.wait(9000);
    cy.get('.mt-4 > .card-content').scrollIntoView().should("be.visible");
    cy.wait(1000);


  }

  CollectionTrendTestPage_07() {

      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.contains("Collection Trend Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.ClickBankStaff_Radio).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBOMBucket).select("All");
    cy.wait(1000);
    cy.get('#receiptDate_from').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnGenerateReportBtn).click();
    cy.wait(9000);
    cy.get('.mt-4 > .card-content').scrollIntoView().should("be.visible");
    cy.wait(1000);


  }

  CollectionTrendTestPage_08() {

      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.contains("Collection Trend Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.ClickBankStaff_Radio).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBOMBucket).select("All");
    cy.wait(1000);
    cy.get('#receiptDate_from').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnGenerateReportBtn).click();
    cy.wait(9000);
    cy.get('.form-control-group > .btn').scrollIntoView().should("be.visible");
    cy.wait(1000);


  }

  CollectionTrendTestPage_09() {

      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.contains("Collection Trend Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.ClickBankStaff_Radio).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBOMBucket).select("All");
    cy.wait(1000);
    cy.get('#receiptDate_from').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnGenerateReportBtn).click();
    cy.wait(9000);
    cy.get('.form-control-group > .btn').scrollIntoView().click();
    cy.wait(2000);
    cy.get('.inner-layout-container').scrollTo(0, 1100);
    cy.wait(2000);


  }

  CollectionTrendTestPage_10() {

      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.contains("Collection Trend Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.ClickBankStaff_Radio).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBOMBucket).select("All");
    cy.wait(1000);
    cy.get('#receiptDate_from').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnGenerateReportBtn).click();
    cy.wait(9000);
    cy.get(this.locators.ClickonDownloadreportBtn).click();
    cy.wait(3000);

  }

  CollectionTrendTestPage_11() {

      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.contains("Collection Trend Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.ClickAgencyStaff_Radio).click();
    cy.wait(1000);
    cy.contains("Product Group").should("be.visible");
    cy.wait(1000);
    cy.contains("Product").should("be.visible");
    cy.wait(1000);
    cy.contains("Sub Product").should("be.visible");
    cy.wait(1000);
    cy.contains("Country").should("be.visible");
    cy.wait(1000);
    cy.contains("Region").should("be.visible");
    cy.wait(1000);
    cy.contains("State").should("be.visible");
    cy.wait(1000);
    cy.contains("City").should("be.visible");
    cy.wait(1000);
    cy.contains("BOM Bucket").should("be.visible");
    cy.wait(1000);
    cy.contains("Receipt From Date").should("be.visible");
    cy.wait(1000);
    cy.contains("Receipt To Date").should("be.visible");
    cy.wait(1000);
    // cy.contains("Agency").should("be.visible");
    // cy.wait(1000);
    // cy.contains("Agent").should("be.visible");
    // cy.wait(1000);
    cy.get(this.locators.ClickOnGenerateReportBtn).should('be.disabled');
    cy.wait(2000);
    cy.get(this.locators.ClickonDownloadreportBtn).should('be.disabled');
    cy.wait(1000);
    cy.get(this.locators.ClickOnBOMBucket).select("All");
    cy.wait(1000);
    cy.get('#receiptDate_from').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnGenerateReportBtn).should('be.enabled').click();
    cy.wait(10000);
    cy.get(this.locators.ClickonDownloadreportBtn).should('be.enabled');
    cy.wait(1000);


  }

  CollectionTrendTestPage_12() {

      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.contains("Collection Trend Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.ClickAgencyStaff_Radio).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBOMBucket).select("All");
    cy.wait(1000);
    cy.get('#receiptDate_from').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnGenerateReportBtn).click();
    cy.wait(10000);
    cy.get('.mt-4 > .card-content').scrollIntoView().should("be.visible");
    cy.wait(2000);


  }

  CollectionTrendTestPage_13() {

      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.contains("Collection Trend Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.ClickAgencyStaff_Radio).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBOMBucket).select("All");
    cy.wait(1000);
    cy.get('#receiptDate_from').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnGenerateReportBtn).click();
    cy.wait(10000);
    cy.contains("Collector Branch/Agency Name").scrollIntoView().should("be.visible");
    cy.wait(1000);
    cy.contains("Allocated Agent/Staff Name").should("be.visible");
    cy.wait(1000);
    cy.contains("Collected Agent/Staff Name").should("be.visible");
    cy.wait(1000);
    cy.get('.mt-4 > .card-content').scrollTo(400, 0);
    cy.wait(1000);
    cy.contains("Customer Account No").should("be.visible");
    cy.wait(1000);
    cy.contains("Customer Name").should("be.visible");
    cy.wait(1000);
    cy.contains("No. of Calls").should("be.visible");
    cy.wait(1000);
    cy.contains("No. of Visits").should("be.visible");
    cy.wait(1000);
    cy.get('.mt-4 > .card-content').scrollTo(900, 0);
    cy.wait(1000);
    cy.contains("Count of PTP").should("be.visible");
    cy.wait(1000);
    cy.contains("Latest Collection date within date range").should("be.visible");
    cy.wait(1000);
    cy.get('.mt-4 > .card-content').scrollTo(1300, 0);
    cy.wait(1000);
    cy.contains("Count of receipts within date range").should("be.visible");
    cy.wait(1000);
    cy.get('.mt-4 > .card-content').scrollTo(1500, 0);
    cy.wait(1000);
    cy.contains("Sum of Collected amount within date range").should("be.visible");
    cy.wait(1000);
    cy.get('.mt-4 > .card-content').scrollTo(1700, 0);
    cy.wait(1000);
    cy.contains("Latest Mode of collection within date range").should("be.visible");
    cy.wait(1000);


  }

  CollectionTrendTestPage_14() {

      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.contains("Collection Trend Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.ClickAgencyStaff_Radio).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBOMBucket).select("All");
    cy.wait(1000);
    cy.get('#receiptDate_from').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnGenerateReportBtn).click();
    cy.wait(10000);
    cy.get('.mt-4 > .card-content').scrollIntoView().should("be.visible");
    cy.wait(1000);


  }

  CollectionTrendTestPage_15() {

      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.contains("Collection Trend Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.ClickAgencyStaff_Radio).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBOMBucket).select("All");
    cy.wait(1000);
    cy.get('#receiptDate_from').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnGenerateReportBtn).click();
    cy.wait(10000);
    cy.get('.mt-4 > .card-content').scrollIntoView().should("be.visible");
    cy.wait(1000);


  }

  CollectionTrendTestPage_16() {

      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.contains("Collection Trend Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.ClickAgencyStaff_Radio).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBOMBucket).select("All");
    cy.wait(1000);
    cy.get('#receiptDate_from').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnGenerateReportBtn).click();
    cy.wait(10000);
    cy.get('.mt-4 > .card-content').scrollIntoView().should("be.visible");
    cy.wait(1000);


  }

  CollectionTrendTestPage_17() {

      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.contains("Collection Trend Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.ClickAgencyStaff_Radio).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBOMBucket).select("All");
    cy.wait(1000);
    cy.get('#receiptDate_from').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnGenerateReportBtn).click();
    cy.wait(10000);
    cy.get('.form-control-group > .btn').scrollIntoView().should("be.visible");
    cy.wait(1000);


  }

  CollectionTrendTestPage_18() {

      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.contains("Collection Trend Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.ClickAgencyStaff_Radio).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBOMBucket).select("All");
    cy.wait(1000);
    cy.get('#receiptDate_from').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnGenerateReportBtn).click();
    cy.wait(10000);
    cy.get('.form-control-group > .btn').scrollIntoView().click();
    cy.wait(2000);
    cy.get('.inner-layout-container').scrollTo(0, 1100);
    cy.wait(2000);


  }

  CollectionTrendTestPage_19() {

      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.contains("Collection Trend Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.ClickAgencyStaff_Radio).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBOMBucket).select("All");
    cy.wait(1000);
    cy.get('#receiptDate_from').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get('#receiptDate_to').click();
    cy.wait(2000);
    cy.get('.bs-datepicker-body').click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnGenerateReportBtn).click();
    cy.wait(10000);
    cy.get(this.locators.ClickonDownloadreportBtn).click();
    cy.wait(3000);

  }

  VisitIntensityTestPage_01() {

      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(3000);
    cy.contains("Visit Intensity Report").scrollIntoView().should("be.visible");
    cy.wait(1000);

  }

  VisitIntensityTestPage_02() {

      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(3000);
    cy.contains("Visit Intensity Report").scrollIntoView().should("be.visible").click();
    cy.wait(3000);
    cy.get(this.locators.ClickBankStaff_Radio).click();
    cy.wait(1000);
    cy.contains("Product Group").should("be.visible");
    cy.wait(1000);
    cy.contains("Product").should("be.visible");
    cy.wait(1000);
    cy.contains("Sub Product").should("be.visible");
    cy.wait(1000);
    cy.contains("Country").should("be.visible");
    cy.wait(1000);
    cy.contains("Region").should("be.visible");
    cy.wait(1000);
    cy.contains("State").should("be.visible");
    cy.wait(1000);
    cy.contains("City").should("be.visible");
    cy.wait(1000);
    cy.contains("BOM Bucket").should("be.visible");
    cy.wait(1000);
    // cy.contains("Branch").should("be.visible");
    // cy.wait(1000);
    cy.contains("Staff Name").should("be.visible");
    cy.wait(1000);
    cy.get(this.locators.ClickOnGenerateReportBtn).should('be.disabled');
    cy.wait(2000);
    cy.get(this.locators.ClickonDownloadreportBtn).should('be.disabled');
    cy.wait(1000);
    cy.get(this.locators.ClickOnBOMBucket).select("All");
    cy.wait(1000);
    cy.get(this.locators.ClickOnGenerateReportBtn).should('be.enabled').click();
    cy.wait(9000);
    cy.get(this.locators.ClickonDownloadreportBtn).should('be.enabled');
    cy.wait(1000);


  }

  VisitIntensityTestPage_03() {

      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.contains("Visit Intensity Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.ClickBankStaff_Radio).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBOMBucket).select("All");
    cy.wait(1000);
    cy.get(this.locators.ClickOnGenerateReportBtn).click();
    cy.wait(10000);
    cy.get('.mt-4 > .card-content').scrollIntoView().should("be.visible");
    cy.wait(1000);

  }

  VisitIntensityTestPage_04() {

      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.contains("Visit Intensity Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.ClickBankStaff_Radio).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBOMBucket).select("All");
    cy.wait(1000);
    cy.get(this.locators.ClickOnGenerateReportBtn).click();
    cy.wait(10000);
    cy.get('.inner-layout-container').scrollTo(0, 1000);
    cy.wait(2000);
    cy.contains("Collector Branch/Agency Name").should("be.visible");
    cy.wait(1000);
    cy.contains("Allocated Agent/Staff Name").should("be.visible");
    cy.wait(1000);
    cy.contains("Account No").should("be.visible");
    cy.wait(1000);
    cy.contains("Customer Name").should("be.visible");
    cy.wait(1000);
    cy.contains("No. of Calls").should("be.visible");
    cy.wait(1000);
    cy.contains("No. of Times No Contact").should("be.visible");
    cy.wait(1000);
    // cy.get('.mt-4 > .card-content').scrollTo(0,500);
    // cy.wait(1000);
    // cy.contains("No. of Visits").should("be.visible");
    // cy.wait(1000);
    // cy.contains("No. of Times Not Met").should("be.visible");
    // cy.wait(1000);
    // cy.contains("Count of PTP").should("be.visible");
    // cy.wait(1000);
    // cy.get('.mt-4 > .card-content').scrollTo(1300,0);
    // cy.wait(1000);
    // cy.contains("Count of Broken PTP").should("be.visible");
    // cy.wait(1000);
    // cy.contains("Collected Amount").should("be.visible");
    // cy.wait(1000);



  }

  VisitIntensityTestPage_05() {

      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.contains("Visit Intensity Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.ClickBankStaff_Radio).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBOMBucket).select("All");
    cy.wait(1000);
    cy.get(this.locators.ClickOnGenerateReportBtn).click();
    cy.wait(10000);
    cy.get('.mt-4 > .card-content').scrollIntoView().should("be.visible");
    cy.wait(1000);

  }

  VisitIntensityTestPage_06() {

      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.contains("Visit Intensity Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.ClickBankStaff_Radio).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBOMBucket).select("All");
    cy.wait(1000);
    cy.get(this.locators.ClickOnGenerateReportBtn).click();
    cy.wait(10000);
    cy.get('.mt-4 > .card-content').scrollIntoView().should("be.visible");
    cy.wait(1000);

  }

  VisitIntensityTestPage_07() {

      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.contains("Visit Intensity Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.ClickBankStaff_Radio).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBOMBucket).select("All");
    cy.wait(1000);
    cy.get(this.locators.ClickOnGenerateReportBtn).click();
    cy.wait(10000);
    cy.get('.mt-4 > .card-content').scrollIntoView().should("be.visible");
    cy.wait(1000);

  }

  VisitIntensityTestPage_08() {

      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.contains("Visit Intensity Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.ClickBankStaff_Radio).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBOMBucket).select("All");
    cy.wait(1000);
    cy.get(this.locators.ClickOnGenerateReportBtn).click();
    cy.wait(10000);
    cy.get(this.locators.ClickonDownloadreportBtn).click();
    cy.wait(2000);
  }

  VisitIntensityTestPage_09() {

      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.contains("Visit Intensity Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.ClickBankStaff_Radio).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBOMBucket).select("All");
    cy.wait(1000);
    cy.get(this.locators.ClickOnGenerateReportBtn).click();
    cy.wait(10000);
    cy.get('.inner-layout-container').scrollTo(0, 1000);
    cy.wait(2000);

  }

  VisitIntensityTestPage_10() {

      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.contains("Visit Intensity Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.ClickAgencyStaff_Radio).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBOMBucket).select("All");
    cy.wait(1000);
    cy.get(this.locators.ClickOnGenerateReportBtn).click();
    cy.wait(10000);
    cy.get('.mt-4 > .card-content').scrollIntoView().should("be.visible");
    cy.wait(1000);

  }

  VisitIntensityTestPage_11() {

      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.contains("Visit Intensity Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.ClickAgencyStaff_Radio).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBOMBucket).select("All");
    cy.wait(1000);
    cy.get(this.locators.ClickOnGenerateReportBtn).click();
    cy.wait(10000);
    cy.get('.inner-layout-container').scrollTo(0, 1000);
    cy.wait(2000);
    cy.contains("Collector Branch/Agency Name").should("be.visible");
    cy.wait(1000);
    cy.contains("Allocated Agent/Staff Name").should("be.visible");
    cy.wait(1000);
    cy.contains("Account No").should("be.visible");
    cy.wait(1000);
    cy.contains("Customer Name").should("be.visible");
    cy.wait(1000);
    cy.contains("No. of Calls").should("be.visible");
    cy.wait(1000);
    cy.contains("No. of Times No Contact").should("be.visible");
    cy.wait(1000);
    // cy.get('.mt-4 > .card-content').scrollTo(0,500);
    // cy.wait(1000);
    // cy.contains("No. of Visits").should("be.visible");
    // cy.wait(1000);
    // cy.contains("No. of Times Not Met").should("be.visible");
    // cy.wait(1000);
    // cy.contains("Count of PTP").should("be.visible");
    // cy.wait(1000);
    // cy.get('.mt-4 > .card-content').scrollTo(1300,0);
    // cy.wait(1000);
    // cy.contains("Count of Broken PTP").should("be.visible");
    // cy.wait(1000);
    // cy.contains("Collected Amount").should("be.visible");
    // cy.wait(1000);


  }

  VisitIntensityTestPage_12() {

      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.contains("Visit Intensity Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.ClickAgencyStaff_Radio).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBOMBucket).select("All");
    cy.wait(1000);
    cy.get(this.locators.ClickOnGenerateReportBtn).click();
    cy.wait(10000);
    cy.get('.mt-4 > .card-content').scrollIntoView().should("be.visible");
    cy.wait(1000);

  }

  VisitIntensityTestPage_13() {

      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.contains("Visit Intensity Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.ClickAgencyStaff_Radio).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBOMBucket).select("All");
    cy.wait(1000);
    cy.get(this.locators.ClickOnGenerateReportBtn).click();
    cy.wait(2000);
    cy.get('.mt-4 > .card-content').scrollIntoView().should("be.visible");
    cy.wait(1000);

  }

  VisitIntensityTestPage_14() {

      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.contains("Visit Intensity Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.ClickAgencyStaff_Radio).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBOMBucket).select("All");
    cy.wait(1000);
    cy.get(this.locators.ClickOnGenerateReportBtn).click();
    cy.wait(2000);
    cy.get('.mt-4 > .card-content').scrollIntoView().should("be.visible");
    cy.wait(1000);

  }

  VisitIntensityTestPage_15() {

      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.contains("Visit Intensity Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.ClickAgencyStaff_Radio).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBOMBucket).select("All");
    cy.wait(1000);
    cy.get(this.locators.ClickOnGenerateReportBtn).click();
    cy.wait(10000);
    cy.get(this.locators.ClickonDownloadreportBtn).click();
    cy.wait(2000);

  }

  VisitIntensityTestPage_16() {

      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.contains("Visit Intensity Report").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.ClickAgencyStaff_Radio).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBOMBucket).select("All");
    cy.wait(1000);
    cy.get(this.locators.ClickOnGenerateReportBtn).click();
    cy.wait(2000);
    cy.get('.inner-layout-container').scrollTo(0, 1000);
    cy.wait(2000);

  }

  allocatedVsAchievedReports_001() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Allocation Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
  cy.contains("Allocated vs Achieved Report").scrollIntoView().should("be.visible").click();
cy.wait(2000);
    cy.wait(2000);
  }


  allocatedVsAchievedReports_002() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Allocation Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
  cy.contains("Allocated vs Achieved Report").scrollIntoView().should("be.visible").click();
cy.wait(2000);
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Product_group).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option')
      .each(($option) => {
        cy.wrap($option).click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.ClickOn_Product_group).click();
        cy.wait(2000);
      });
    cy.get('body').click(0, 0);
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(3000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
    cy.contains('India').click({ force: true });
    cy.get(this.locators.Click_Generate_Report_button).click();
    cy.wait(2000);
    cy.get('.btn-outline-dark').click();


  }

  allocatedVsAchievedReports_003() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Allocation Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
  cy.contains("Allocated vs Achieved Report").scrollIntoView().should("be.visible").click();
cy.wait(2000);
    cy.wait(2000);
    cy.get('#agencyUserRadio').click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Product_group).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option')
      .each(($option) => {
        cy.wrap($option).click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.ClickOn_Product_group).click();
        cy.wait(2000);
      });
    cy.get('body').click(0, 0);
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(3000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
    cy.contains('India').click({ force: true });
    cy.get(this.locators.Click_Generate_Report_button).click();
    cy.wait(2000);
    cy.get('.inner-layout-container').scrollTo('bottom');
    cy.wait(2000);
    cy.get('h3').should('be.visible');
    cy.wait(2000);
    cy.get('.btn-outline-dark').click();
    cy.wait(2000);

  }

  allocatedVsAchievedReports_004() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Allocation Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
  cy.contains("Allocated vs Achieved Report").scrollIntoView().should("be.visible").click();
cy.wait(2000);
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Product_group).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option')
      .each(($option) => {
        cy.wrap($option).click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.ClickOn_Product_group).click();
        cy.wait(2000);
      });
    cy.get('body').click(0, 0);
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(2000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
    cy.contains('India').click({ force: true });
    cy.get(this.locators.Click_Generate_Report_button).click();
    cy.wait(2000);
    cy.get('.inner-layout-container').scrollTo('bottom');
    cy.wait(2000);
    cy.get('h3').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.get('.btn-outline-dark').click();
    cy.wait(2000);

  }

  allocatedVsAchievedReports_005() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Allocation Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
  cy.contains("Allocated vs Achieved Report").scrollIntoView().should("be.visible").click();
cy.wait(2000);
    cy.wait(2000);
    cy.get('#agencyUserRadio').click();
    cy.get(this.locators.ClickOn_Product_group).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option')
      .each(($option) => {
        cy.wrap($option).click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.ClickOn_Product_group).click();
        cy.wait(2000);
      });
    cy.get('body').click(0, 0);
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(3000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
    cy.contains('India').click({ force: true });
    cy.get(this.locators.Click_Generate_Report_button).click();
    cy.wait(2000);
    cy.get('.inner-layout-container').scrollTo('bottom');
    cy.wait(2000);
    cy.get('h3').should('be.visible');
    cy.wait(2000);
    cy.get('.btn-outline-dark').click();
    cy.wait(2000);

  }


  allocatedVsAchievedReports_006() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Allocation Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
  cy.contains("Allocated vs Achieved Report").scrollIntoView().should("be.visible").click();
cy.wait(2000);
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Product_group).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option')
      .each(($option) => {
        cy.wrap($option).click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.ClickOn_Product_group).click();
        cy.wait(2000);
      });
    cy.get('body').click(0, 0);
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(3000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
    cy.contains('India').click({ force: true });
    cy.get(this.locators.Click_Generate_Report_button).click();
    cy.wait(2000);
    cy.get('.btn-outline-dark').click();
    cy.wait(2000);
    cy.get('.inner-layout-container').scrollTo('bottom');
    cy.wait(2000);
    cy.get('h3').should('be.visible');
    cy.wait(2000);
    cy.get('.btn-outline-dark').click();
    cy.wait(2000);
    cy.contains('Count of Accounts').should('be.visible');
    cy.wait(2000);
    cy.contains('Overdue Amounts').should('be.visible');
    cy.wait(2000);

  }

  allocatedVsAchievedReports_007() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Allocation Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
  cy.contains("Allocated vs Achieved Report").scrollIntoView().should("be.visible").click();
cy.wait(2000);
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Product_group).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option')
      .each(($option) => {
        cy.wrap($option).click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.ClickOn_Product_group).click();
        cy.wait(2000);
      });
    cy.get('body').click(0, 0);
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(3000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
    cy.contains('India').click({ force: true });
    cy.get(this.locators.Click_Generate_Report_button).click();
    cy.wait(2000);
    cy.get('.btn-outline-dark').click();
    cy.wait(2000);
    cy.get('.inner-layout-container').scrollTo('bottom');
    cy.wait(2000);
    cy.get('h3').should('be.visible');
    cy.wait(2000);
    cy.get('.btn-outline-dark').click();
    cy.wait(2000);
    cy.contains('Count of Accounts').should('be.visible');
    cy.wait(2000);
    cy.contains('Overdue Amounts').should('be.visible');
    cy.wait(2000);
    cy.get('thead > :nth-child(1) > :nth-child(2)').contains('Product').should('be.visible');
    cy.wait(2000);
    cy.get('thead > :nth-child(1) > :nth-child(3)').contains('Bucket').should('be.visible');
    cy.wait(2000);
    cy.get('thead > :nth-child(2) > :nth-child(1)').contains('Allocated').should('be.visible');
    cy.wait(2000);
    cy.get('thead > :nth-child(2) > :nth-child(2)').contains('Collected').should('be.visible');
    cy.wait(2000);
    cy.get('thead > :nth-child(2) > :nth-child(3)').contains('Pending').should('be.visible');
    cy.wait(2000);
    cy.get('thead > :nth-child(2) > :nth-child(4)').contains('Allocated').should('be.visible');
    cy.wait(2000);
    cy.get('thead > :nth-child(2) > :nth-child(5)').contains('Collected').should('be.visible');
    cy.wait(2000);


  }


  allocatedVsAchievedReports_008() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Allocation Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
  cy.contains("Allocated vs Achieved Report").scrollIntoView().should("be.visible").click();
cy.wait(2000);
    cy.wait(2000);
    cy.get('#agencyUserRadio').click();
    cy.get(this.locators.ClickOn_Product_group).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option')
      .each(($option) => {
        cy.wrap($option).click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.ClickOn_Product_group).click();
        cy.wait(2000);
      });
    cy.get('body').click(0, 0);
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(3000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
    cy.contains('India').click({ force: true });
    cy.get(this.locators.Click_Generate_Report_button).click();
    cy.wait(2000);
    cy.get('.btn-outline-dark').click();
    cy.wait(2000);
    cy.get('.inner-layout-container').scrollTo('bottom');
    cy.wait(2000);
    cy.get('h3').should('be.visible');
    cy.wait(2000);
    cy.get('.btn-outline-dark').click();
    cy.wait(2000);
    cy.contains('Count of Accounts').should('be.visible');
    cy.wait(2000);
    cy.contains('Overdue Amounts').should('be.visible');
    cy.wait(2000);
    cy.get('thead > :nth-child(1) > :nth-child(2)').contains('Product').should('be.visible');
    cy.wait(2000);
    cy.get('thead > :nth-child(1) > :nth-child(3)').contains('Bucket').should('be.visible');
    cy.wait(2000);
    cy.get('thead > :nth-child(2) > :nth-child(1)').contains('Allocated').should('be.visible');
    cy.wait(2000);
    cy.get('thead > :nth-child(2) > :nth-child(2)').contains('Collected').should('be.visible');
    cy.wait(2000);
    cy.get('thead > :nth-child(2) > :nth-child(3)').contains('Pending').should('be.visible');
    cy.wait(2000);
    cy.get('thead > :nth-child(2) > :nth-child(4)').contains('Allocated').should('be.visible');
    cy.wait(2000);
    cy.get('thead > :nth-child(2) > :nth-child(5)').contains('Collected').should('be.visible');
    cy.wait(2000);



  }

  allocatedVsAchievedReports_009() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Allocation Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
  cy.contains("Allocated vs Achieved Report").scrollIntoView().should("be.visible").click();
cy.wait(2000);
    cy.wait(2000);
    cy.get('#agencyUserRadio').click();
    cy.get(this.locators.ClickOn_Product_group).click();
    cy.wait(2000);
    cy.contains('Loan Product').click({ force: true });
    cy.wait(1000);
    cy.get('body').click(0, 0);
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option')
      .each(($option) => {
        cy.wrap($option).click({ force: true });
        cy.wait(2000);
      });
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
    cy.contains('India').click({ force: true });
    cy.get(this.locators.Click_Generate_Report_button).click();
    cy.wait(2000);
    cy.get('.btn-outline-dark').click();
    cy.wait(2000);
    cy.get('.inner-layout-container').scrollTo('bottom');
    cy.wait(2000);
    cy.get('h3').should('be.visible');
    cy.wait(15000);
    cy.contains('Count of Accounts').should('be.visible');
    cy.wait(2000);
    // cy.contains('Overdue Amounts').scrollIntoView().should('be.visible');
    // cy.wait(2000);
    cy.get('thead > :nth-child(1) > :nth-child(2)').contains('Product').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.get('thead > :nth-child(1) > :nth-child(3)').contains('Bucket').should('be.visible');
    cy.wait(2000);
    cy.get('thead > :nth-child(2) > :nth-child(1)').contains('Allocated').should('be.visible');
    cy.wait(2000);
    cy.get('thead > :nth-child(2) > :nth-child(2)').contains('Collected').should('be.visible');
    cy.wait(2000);
    cy.get('thead > :nth-child(2) > :nth-child(3)').contains('Pending').should('be.visible');
    cy.wait(2000);
    cy.get('thead > :nth-child(2) > :nth-child(4)').contains('Allocated').should('be.visible');
    cy.wait(2000);
    cy.get('thead > :nth-child(2) > :nth-child(5)').contains('Collected').scrollIntoView().should('be.visible');
    cy.wait(2000);



  }

  allocatedVsAchievedReports_010() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Allocation Reports").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
  cy.contains("Allocated vs Achieved Report").scrollIntoView().should("be.visible").click();
cy.wait(2000);
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Product_group).click();
    cy.wait(2000);
    cy.contains('Loan Product').click({ force: true });
    cy.wait(1000);
    cy.get('body').click(0, 0);
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option')
      .each(($option) => {
        cy.wrap($option).click({ force: true });
        cy.wait(2000);
      });
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
    cy.contains('India').click({ force: true });
    cy.get(this.locators.Click_Generate_Report_button).click();
    cy.wait(2000);
    cy.get('.btn-outline-dark').click();
    cy.wait(2000);
    cy.get('.inner-layout-container').scrollTo('bottom');
    cy.wait(2000);
    cy.get('h3').should('be.visible');
    cy.wait(2000);
    cy.contains('Count of Accounts').should('be.visible');
    cy.wait(2000);
    cy.contains('Overdue Amounts').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.get('thead > :nth-child(1) > :nth-child(2)').contains('Product').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.get('thead > :nth-child(1) > :nth-child(3)').contains('Bucket').should('be.visible');
    cy.wait(2000);
    cy.get('thead > :nth-child(2) > :nth-child(1)').contains('Allocated').should('be.visible');
    cy.wait(2000);
    cy.get('thead > :nth-child(2) > :nth-child(2)').contains('Collected').should('be.visible');
    cy.wait(2000);
    cy.get('thead > :nth-child(2) > :nth-child(3)').contains('Pending').should('be.visible');
    cy.wait(2000);
    cy.get('thead > :nth-child(2) > :nth-child(4)').contains('Allocated').should('be.visible');
    cy.wait(2000);
    cy.get('thead > :nth-child(2) > :nth-child(5)').contains('Collected').should('be.visible');
    cy.wait(2000);



  }

  trailHistoryReport_001() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Trail Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Trail History Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get('#agencyUserRadio').click();

  }

  trailHistoryReport_002() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Trail Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Trail History Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get('#agencyUserRadio').click();
    cy.wait(2000);
    cy.get('#discCodeGroup').then($select => {
      const allValues = [...$select[0].options].map(option => option.value);
      cy.get('#discCodeGroup').select('BPTP');
    });
    cy.wait(1000);
    cy.get('#discCode').then($select => {
      const allValues = [...$select[0].options].map(option => option.value);
      cy.get('#discCode').select('BPTP');
    });
    cy.wait(1000);
    //  cy.get(this.locators.ClickGenrtReport).click({ force: true });
    // cy.wait(2000);

  }


  trailHistoryReport_003() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Trail Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Trail History Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get('#agencyUserRadio').click();
    cy.wait(2000);
    // cy.get('#bOMBucket').select('All');
    // cy.wait(2000);
    // cy.get('#trailDate_from').click();
    // cy.wait(2000);
    // cy.get('.previous > span').click();
    // cy.wait(2000);
    // cy.get('.bs-datepicker-body').click();
    // cy.wait(2000);
    //// cy.get('#trailDate_to').click();
    // cy.wait(2000);
    //const today = new Date().getDate().toString();
    // cy.get('.bs-datepicker-body').contains('span', today).click();
    // cy.wait(2000);
    cy.get('#discCodeGroup').then($select => {
      const allValues = [...$select[0].options].map(option => option.value);
      cy.get('#discCodeGroup').select('BPTP');
    });
    cy.wait(1000);
    cy.get('#discCode').then($select => {
      const allValues = [...$select[0].options].map(option => option.value);
      cy.get('#discCode').select('BPTP');
    });
    cy.wait(1000);
    //cy.get(this.locators.ClickGenrtReport).click({ force: true });
    //cy.wait(2000);

  }

  trailHistoryReport_004() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Trail Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Trail History Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.Clickon_Productgroup).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickonTrail_Product).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);

     cy.get('#trailDate_from').click();
                        cy.wait(500);
                        cy.get('.previous > span').click();
                        cy.wait(500);
                        const pastDate = new Date();
                        pastDate.setDate(pastDate.getDate() - 30);
                        const pastDay = pastDate.getDate().toString();
                        cy.get('.bs-datepicker-body').contains('span', pastDay).click();
                        cy.wait(500);
                        cy.get('#trailDate_to').click();
                        cy.wait(500);
                        const today = new Date().getDate().toString();
                        cy.get('.bs-datepicker-body').contains('span', today).click();
                        cy.wait(1000);

    cy.get('#discCodeGroup').then($select => {
      const allValues = [...$select[0].options].map(option => option.value);
      cy.get('#discCodeGroup').select(allValues);
    });
    cy.wait(1000);
    cy.get('#discCode').then($select => {
      const allValues = [...$select[0].options].map(option => option.value);
      cy.get('#discCode').select(allValues);
    });
    cy.wait(1000);
    cy.get('#downloadReport').click();

  }

  trailHistoryReport_005() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Trail Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Trail History Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.Clickon_Productgroup).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option')
      .each(($option) => {
        cy.wrap($option).click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.Clickon_Productgroup).click();
        cy.wait(2000);
      });
    cy.get(this.locators.ClickonTrail_Product).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);

   cy.get('#trailDate_from').click();
                        cy.wait(500);
                        cy.get('.previous > span').click();
                        cy.wait(500);
                        const pastDate = new Date();
                        pastDate.setDate(pastDate.getDate() - 30);
                        const pastDay = pastDate.getDate().toString();
                        cy.get('.bs-datepicker-body').contains('span', pastDay).click();
                        cy.wait(500);
                        cy.get('#trailDate_to').click();
                        cy.wait(500);
                        const today = new Date().getDate().toString();
                        cy.get('.bs-datepicker-body').contains('span', today).click();
                        cy.wait(1000);

    cy.get('#discCodeGroup').then($select => {
      const allValues = [...$select[0].options].map(option => option.value);
      cy.get('#discCodeGroup').select(allValues);
    });
    cy.wait(1000);
    cy.get('#discCode').then($select => {
      const allValues = [...$select[0].options].map(option => option.value);
      cy.get('#discCode').select(allValues);
    });
    cy.wait(1000);
    cy.get('#downloadReport').click();

  }


  trailHistoryReport_006() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Trail Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Trail History Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get('#agencyUserRadio').click();
    cy.wait(2000);
    cy.get(this.locators.Clickon_Productgroup).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickonTrail_Product).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
   
   cy.get('#trailDate_from').click();
                        cy.wait(500);
                        cy.get('.previous > span').click();
                        cy.wait(500);
                        const pastDate = new Date();
                        pastDate.setDate(pastDate.getDate() - 30);
                        const pastDay = pastDate.getDate().toString();
                        cy.get('.bs-datepicker-body').contains('span', pastDay).click();
                        cy.wait(500);
                        cy.get('#trailDate_to').click();
                        cy.wait(500);
                        const today = new Date().getDate().toString();
                        cy.get('.bs-datepicker-body').contains('span', today).click();
                        cy.wait(1000);
                        
    cy.get('#discCodeGroup').then($select => {
      const allValues = [...$select[0].options].map(option => option.value);
      cy.get('#discCodeGroup').select(allValues);
    });
    cy.wait(1000);
    cy.get('#discCode').then($select => {
      const allValues = [...$select[0].options].map(option => option.value);
      cy.get('#discCode').select(allValues);
    });
    cy.wait(1000);
    cy.get('#downloadReport').click();
  }

  trailHistoryReport_007() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Trail Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Trail History Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get('#agencyUserRadio').click();
    cy.wait(2000);
    cy.get(this.locators.Clickon_Productgroup).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickonTrail_Product).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
   
   cy.get('#trailDate_from').click();
                        cy.wait(500);
                        cy.get('.previous > span').click();
                        cy.wait(500);
                        const pastDate = new Date();
                        pastDate.setDate(pastDate.getDate() - 30);
                        const pastDay = pastDate.getDate().toString();
                        cy.get('.bs-datepicker-body').contains('span', pastDay).click();
                        cy.wait(500);
                        cy.get('#trailDate_to').click();
                        cy.wait(500);
                        const today = new Date().getDate().toString();
                        cy.get('.bs-datepicker-body').contains('span', today).click();
                        cy.wait(1000);
                        
    cy.get('#discCodeGroup').then($select => {
      const allValues = [...$select[0].options].map(option => option.value);
      cy.get('#discCodeGroup').select(allValues);
    });
    cy.wait(1000);
    cy.get('#discCode').then($select => {
      const allValues = [...$select[0].options].map(option => option.value);
      cy.get('#discCode').select(allValues);
    });
    cy.wait(1000);
    cy.get('#downloadReport').click();
    cy.wait(2000);
  }

  trailHistoryReport_008() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Trail Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Trail History Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get('#agencyUserRadio').click();
    cy.wait(2000);
    cy.get(this.locators.Clickon_Productgroup).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickonTrail_Product).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
  
   cy.get('#trailDate_from').click();
                        cy.wait(500);
                        cy.get('.previous > span').click();
                        cy.wait(500);
                        const pastDate = new Date();
                        pastDate.setDate(pastDate.getDate() - 30);
                        const pastDay = pastDate.getDate().toString();
                        cy.get('.bs-datepicker-body').contains('span', pastDay).click();
                        cy.wait(500);
                        cy.get('#trailDate_to').click();
                        cy.wait(500);
                        const today = new Date().getDate().toString();
                        cy.get('.bs-datepicker-body').contains('span', today).click();
                        cy.wait(1000);
                        
    cy.get('#discCodeGroup').then($select => {
      const allValues = [...$select[0].options].map(option => option.value);
      cy.get('#discCodeGroup').select('BPTP');
    });
    cy.wait(1000);
    cy.get('#discCode').then($select => {
      const allValues = [...$select[0].options].map(option => option.value);
      cy.get('#discCode').select('BPTP');
    });
    cy.wait(1000);
    cy.get('#downloadReport').click();
    cy.wait(2000);

  }

  trailHistoryReport_009() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Trail Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Trail History Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.wait(2000);
    cy.get('#agencyUserRadio').click();
    cy.wait(2000);
    cy.get(this.locators.Clickon_Productgroup).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickonTrail_Product).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_SubProduct).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
  
   cy.get('#trailDate_from').click();
                        cy.wait(500);
                        cy.get('.previous > span').click();
                        cy.wait(500);
                        const pastDate = new Date();
                        pastDate.setDate(pastDate.getDate() - 30);
                        const pastDay = pastDate.getDate().toString();
                        cy.get('.bs-datepicker-body').contains('span', pastDay).click();
                        cy.wait(500);
                        cy.get('#trailDate_to').click();
                        cy.wait(500);
                        const today = new Date().getDate().toString();
                        cy.get('.bs-datepicker-body').contains('span', today).click();
                        cy.wait(1000);
                        
    cy.get('#discCodeGroup').then($select => {
      const allValues = [...$select[0].options].map(option => option.value);
      cy.get('#discCodeGroup').select('BPTP');
    });
    cy.wait(1000);
    cy.get('#discCode').then($select => {
      const allValues = [...$select[0].options].map(option => option.value);
      cy.get('#discCode').select('BPTP');
    });
    cy.wait(1000);
    cy.get('#downloadReport').click();
    cy.wait(2000);
  }

  trailHistoryReport_010() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Trail Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Trail History Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.Clickon_Productgroup).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option')
      .each(($option) => {
        cy.wrap($option).click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.Clickon_Productgroup).click();
        cy.wait(2000);
      });
    cy.get(this.locators.ClickonTrail_Product).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_SubProduct).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
   
   cy.get('#trailDate_from').click();
                        cy.wait(500);
                        cy.get('.previous > span').click();
                        cy.wait(500);
                        const pastDate = new Date();
                        pastDate.setDate(pastDate.getDate() - 30);
                        const pastDay = pastDate.getDate().toString();
                        cy.get('.bs-datepicker-body').contains('span', pastDay).click();
                        cy.wait(500);
                        cy.get('#trailDate_to').click();
                        cy.wait(500);
                        const today = new Date().getDate().toString();
                        cy.get('.bs-datepicker-body').contains('span', today).click();
                        cy.wait(1000);
                        
    cy.get('#discCodeGroup').then($select => {
      const allValues = [...$select[0].options].map(option => option.value);
      cy.get('#discCodeGroup').select('BPTP');
    });
    cy.wait(1000);
    cy.get('#discCode').then($select => {
      const allValues = [...$select[0].options].map(option => option.value);
      cy.get('#discCode').select('BPTP');
    });
    cy.wait(1000);
    cy.get('#downloadReport').click();
    cy.wait(2000);

  }

  trailHistoryReport_011() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Trail Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Trail History Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.Clickon_Productgroup).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option')
      .each(($option) => {
        cy.wrap($option).click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.Clickon_Productgroup).click();
        cy.wait(2000);
      });
    cy.get(this.locators.ClickonTrail_Product).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_SubProduct).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
   
   cy.get('#trailDate_from').click();
                        cy.wait(500);
                        cy.get('.previous > span').click();
                        cy.wait(500);
                        const pastDate = new Date();
                        pastDate.setDate(pastDate.getDate() - 30);
                        const pastDay = pastDate.getDate().toString();
                        cy.get('.bs-datepicker-body').contains('span', pastDay).click();
                        cy.wait(500);
                        cy.get('#trailDate_to').click();
                        cy.wait(500);
                        const today = new Date().getDate().toString();
                        cy.get('.bs-datepicker-body').contains('span', today).click();
                        cy.wait(1000);
                        
    cy.get('#discCodeGroup').then($select => {
      const allValues = [...$select[0].options].map(option => option.value);
      cy.get('#discCodeGroup').select('BPTP');
    });
    cy.wait(1000);
    cy.get('#discCode').then($select => {
      const allValues = [...$select[0].options].map(option => option.value);
      cy.get('#discCode').select('BPTP');
    });
    cy.wait(1000);
    cy.get('#downloadReport').click();
    cy.wait(2000);
  }

  trailHistoryReport_012() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Trail Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Trail History Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.Clickon_Productgroup).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option')
      .each(($option) => {
        cy.wrap($option).click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.Clickon_Productgroup).click();
        cy.wait(2000);
      });
    cy.get(this.locators.ClickonTrail_Product).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_SubProduct).click();
    cy.wait(1000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.Clickon_Bucket).click();
    cy.wait(2000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickOn_Country).click();
    cy.wait(2000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
    cy.get(this.locators.ClickOn_Region).click();
    cy.wait(2000);
   cy.get('.ng-option').each(($el) => {
  cy.wrap($el).click({ force: true });
  cy.wait(1000);   // wait 1 second after each click
});
cy.wait(2000);
   
   cy.get('#trailDate_from').click();
                        cy.wait(500);
                        cy.get('.previous > span').click();
                        cy.wait(500);
                        const pastDate = new Date();
                        pastDate.setDate(pastDate.getDate() - 30);
                        const pastDay = pastDate.getDate().toString();
                        cy.get('.bs-datepicker-body').contains('span', pastDay).click();
                        cy.wait(500);
                        cy.get('#trailDate_to').click();
                        cy.wait(500);
                        const today = new Date().getDate().toString();
                        cy.get('.bs-datepicker-body').contains('span', today).click();
                        cy.wait(1000);
                        
    cy.get('#discCodeGroup').then($select => {
      const allValues = [...$select[0].options].map(option => option.value);
      cy.get('#discCodeGroup').select('BPTP');
    });
    cy.wait(1000);
    cy.get('#discCode').then($select => {
      const allValues = [...$select[0].options].map(option => option.value);
      cy.get('#discCode').select('BPTP');
    });
    cy.wait(1000);
    cy.get('#downloadReport').click();
    cy.wait(2000);

  }

  trailHistoryReport_013() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Trail Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Trail History Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   
   cy.get('#trailDate_from').click();
                        cy.wait(500);
                        cy.get('.previous > span').click();
                        cy.wait(500);
                        const pastDate = new Date();
                        pastDate.setDate(pastDate.getDate() - 30);
                        const pastDay = pastDate.getDate().toString();
                        cy.get('.bs-datepicker-body').contains('span', pastDay).click();
                        cy.wait(500);
                        cy.get('#trailDate_to').click();
                        cy.wait(500);
                        const today = new Date().getDate().toString();
                        cy.get('.bs-datepicker-body').contains('span', today).click();
                        cy.wait(1000);
                        
    cy.get('#discCodeGroup').then($select => {
      const allValues = [...$select[0].options].map(option => option.value);
      cy.get('#discCodeGroup').select('CB');
    });
    cy.wait(1000);
    cy.get('#discCode').then($select => {
      const allValues = [...$select[0].options].map(option => option.value);
      cy.get('#discCode').select('GV');
    });
    cy.wait(1000);
    cy.get('#downloadReport').click({ force: true });
    cy.wait(2000);

  }

  trailHistoryReport_014() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Trail Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Trail History Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   
   cy.get('#trailDate_from').click();
                        cy.wait(500);
                        cy.get('.previous > span').click();
                        cy.wait(500);
                        const pastDate = new Date();
                        pastDate.setDate(pastDate.getDate() - 30);
                        const pastDay = pastDate.getDate().toString();
                        cy.get('.bs-datepicker-body').contains('span', pastDay).click();
                        cy.wait(500);
                        cy.get('#trailDate_to').click();
                        cy.wait(500);
                        const today = new Date().getDate().toString();
                        cy.get('.bs-datepicker-body').contains('span', today).click();
                        cy.wait(1000);
                        
    cy.get('#discCodeGroup').then($select => {
      const allValues = [...$select[0].options].map(option => option.value);
      cy.get('#discCodeGroup').select('CB');
    });
    cy.wait(1000);
    cy.get('#discCode').then($select => {
      const allValues = [...$select[0].options].map(option => option.value);
      cy.get('#discCode').select('GV');
    });
    cy.wait(1000);
    cy.get('#downloadReport').should("be.disabled");
    cy.wait(2000);

  }

  trailHistoryReport_015() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Trail Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Trail History Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   
   cy.get('#trailDate_from').click();
                        cy.wait(500);
                        cy.get('.previous > span').click();
                        cy.wait(500);
                        const pastDate = new Date();
                        pastDate.setDate(pastDate.getDate() - 30);
                        const pastDay = pastDate.getDate().toString();
                        cy.get('.bs-datepicker-body').contains('span', pastDay).click();
                        cy.wait(500);
                        cy.get('#trailDate_to').click();
                        cy.wait(500);
                        const today = new Date().getDate().toString();
                        cy.get('.bs-datepicker-body').contains('span', today).click();
                        cy.wait(1000);
                        
    cy.get('#discCodeGroup').then($select => {
      const allValues = [...$select[0].options].map(option => option.value);
      cy.get('#discCodeGroup').select('CB');
    });
    cy.wait(1000);
    cy.get('#discCode').then($select => {
      const allValues = [...$select[0].options].map(option => option.value);
      cy.get('#discCode').select('GV');
    });
    cy.wait(1000);
    cy.get('#downloadReport').click({ force: true });
    cy.wait(2000);

  }

  trailHistoryReport_016() {
    cy.get(this.locators.clickonreport).click({force:true});
    cy.wait(2000);
      cy.contains("Trail Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Trail History Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    // cy.get(this.locators.Product_Group).click({force:true});
    // cy.wait(2000);
    // cy.get('.ng-dropdown-panel .ng-option').contains('Cards').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_TrailHistory_Bucket).click({force:true});
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option').contains('1').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Select_trailGap_Country).click({force:true});
    cy.get('.ng-dropdown-panel .ng-option').contains('Tamilnadu').click({ force: true });
    cy.wait(2000);
cy.get('#trailDate_from').click();
                        cy.wait(500);
                        cy.get('.previous > span').click();
                        cy.wait(500);
                        const pastDate = new Date();
                        pastDate.setDate(pastDate.getDate() - 30);
                        const pastDay = pastDate.getDate().toString();
                        cy.get('.bs-datepicker-body').contains('span', pastDay).click();
                        cy.wait(500);
                        cy.get('#trailDate_to').click();
                        cy.wait(500);
                        const today = new Date().getDate().toString();
                        cy.get('.bs-datepicker-body').contains('span', today).click();
                        cy.wait(1000);
    cy.get('#discCodeGroup').then($select => {
      const allValues = [...$select[0].options].map(option => option.value);
      cy.get('#discCodeGroup').select('Contact');
    });
    cy.wait(1000);
    cy.get('#discCode').then($select => {
      const allValues = [...$select[0].options].map(option => option.value);
      cy.get('#discCode').select('CB');
    });
    cy.wait(1000);
    cy.get('#downloadReport').click({ force: true });
    cy.wait(2000);
    cy.get('[role="alert"]').should('contain', 'Please fill all required fields');
 cy.wait(2000);

  }

  trailHistoryReport_017() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Trail Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Trail History Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_TrailHistory_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option').contains('1').click({ force: true });
    cy.wait(2000);
    
   cy.get('#trailDate_from').click();
                        cy.wait(500);
                        cy.get('.previous > span').click();
                        cy.wait(500);
                        const pastDate = new Date();
                        pastDate.setDate(pastDate.getDate() - 30);
                        const pastDay = pastDate.getDate().toString();
                        cy.get('.bs-datepicker-body').contains('span', pastDay).click();
                        cy.wait(500);
                        cy.get('#trailDate_to').click();
                        cy.wait(500);
                        const today = new Date().getDate().toString();
                        cy.get('.bs-datepicker-body').contains('span', today).click();
                        cy.wait(1000);
                        
    cy.get('#discCodeGroup').then($select => {
      const allValues = [...$select[0].options].map(option => option.value);
      cy.get('#discCodeGroup').select('Contact');
    });
    cy.wait(1000);
    cy.get('#discCode').then($select => {
      const allValues = [...$select[0].options].map(option => option.value);
      cy.get('#discCode').select('CB');
    });
    cy.wait(1000);
    cy.get('#downloadReport').click({ force: true });
    cy.wait(2000);
     cy.get('[role="alert"]').should('contain', 'Please fill all required fields');
 cy.wait(2000);

  }

  trailHistoryReport_018() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Trail Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Trail History Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_TrailHistory_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option').contains('1').click({ force: true });
    cy.wait(2000);
   
   cy.get('#trailDate_from').click();
                        cy.wait(500);
                        cy.get('.previous > span').click();
                        cy.wait(500);
                        const pastDate = new Date();
                        pastDate.setDate(pastDate.getDate() - 30);
                        const pastDay = pastDate.getDate().toString();
                        cy.get('.bs-datepicker-body').contains('span', pastDay).click();
                        cy.wait(500);
                        cy.get('#trailDate_to').click();
                        cy.wait(500);
                        const today = new Date().getDate().toString();
                        cy.get('.bs-datepicker-body').contains('span', today).click();
                        cy.wait(1000);
                        
    cy.get('#discCodeGroup').then($select => {
      const allValues = [...$select[0].options].map(option => option.value);
      cy.get('#discCodeGroup').select('Contact');
    });
    cy.wait(1000);
    cy.get('#discCode').then($select => {
      const allValues = [...$select[0].options].map(option => option.value);
      cy.get('#discCode').select('CB');
    });
    cy.wait(1000);
    cy.get('#downloadReport').click({ force: true });
    cy.wait(2000);
     cy.get('[role="alert"]').should('contain', 'Please fill all required fields');
 cy.wait(2000);

  }

  trailHistoryReport_019() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Trail Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Trail History Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_TrailHistory_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option').contains('1').click({ force: true });
    cy.wait(2000);
  
   cy.get('#trailDate_from').click();
                        cy.wait(500);
                        cy.get('.previous > span').click();
                        cy.wait(500);
                        const pastDate = new Date();
                        pastDate.setDate(pastDate.getDate() - 30);
                        const pastDay = pastDate.getDate().toString();
                        cy.get('.bs-datepicker-body').contains('span', pastDay).click();
                        cy.wait(500);
                        cy.get('#trailDate_to').click();
                        cy.wait(500);
                        const today = new Date().getDate().toString();
                        cy.get('.bs-datepicker-body').contains('span', today).click();
                        cy.wait(1000);
                        
    cy.get('#discCodeGroup').then($select => {
      const allValues = [...$select[0].options].map(option => option.value);
      cy.get('#discCodeGroup').select('Contact');
    });
    cy.wait(1000);
    cy.get('#discCode').then($select => {
      const allValues = [...$select[0].options].map(option => option.value);
      cy.get('#discCode').select('CB');
    });
    cy.wait(1000);
    cy.get("#downloadReport").click({ force: true });
    cy.wait(2000);
     cy.get('[role="alert"]').should('contain', 'Please fill all required fields');
 cy.wait(2000);

  }

  trailHistoryReport_020() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Trail Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Trail History Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.get(this.locators.ClickOn_TrailHistory_Bucket).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option').contains('1').click({ force: true });
    cy.wait(2000);
  
   cy.get('#trailDate_from').click();
                        cy.wait(500);
                        cy.get('.previous > span').click();
                        cy.wait(500);
                        const pastDate = new Date();
                        pastDate.setDate(pastDate.getDate() - 30);
                        const pastDay = pastDate.getDate().toString();
                        cy.get('.bs-datepicker-body').contains('span', pastDay).click();
                        cy.wait(500);
                        cy.get('#trailDate_to').click();
                        cy.wait(500);
                        const today = new Date().getDate().toString();
                        cy.get('.bs-datepicker-body').contains('span', today).click();
                        cy.wait(1000);
                        
    cy.get('#discCodeGroup').then($select => {
      const allValues = [...$select[0].options].map(option => option.value);
      cy.get('#discCodeGroup').select('Contact');
    });
    cy.wait(1000);
    cy.get('#discCode').then($select => {
      const allValues = [...$select[0].options].map(option => option.value);
      cy.get('#discCode').select('CB');
    });
    cy.wait(1000);
    cy.get('#downloadReport').click({ force: true });
    cy.wait(2000);
     cy.get('[role="alert"]').should('contain', 'Please fill all required fields');
 cy.wait(2000);

  }

  attendanceReport_001() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Attendance Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(':nth-child(5) > .form-control').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 30);
    const pastDay = pastDate.getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', pastDay).click();
    cy.wait(2000);
    cy.get(':nth-child(6) > .form-control').click();
    cy.wait(2000);
    const today = new Date().getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', today).click();
    cy.wait(1000);
    cy.get('.btn-secondary').click();
    cy.wait(3000);
    cy.contains('Search Result').scrollIntoView().should("be.visible");
    cy.wait(2000);

  }

  attendanceReport_002() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Attendance Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(':nth-child(5) > .form-control').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 30);
    const pastDay = pastDate.getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', pastDay).click();
    cy.wait(2000);
    cy.get(':nth-child(6) > .form-control').click();
    cy.wait(2000);
    const today = new Date().getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', today).click();
    cy.wait(1000);
    cy.get('.btn-secondary').click();
    cy.wait(3000);
    cy.contains('Search Result').scrollIntoView().should("be.visible");
    cy.wait(2000);
    cy.get('.btn-outline-dark').click();
    cy.wait(1000);

  }


  attendanceReport_003() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Attendance Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get('.form-radio-group > :nth-child(2) > #reportType-1').click();
    cy.wait(2000);
    cy.get(':nth-child(2) > .form-select').select('Tony');
    cy.wait(2000);
    cy.get(':nth-child(5) > .form-control').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 30);
    const pastDay = pastDate.getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', pastDay).click();
    cy.wait(2000);
    cy.get(':nth-child(6) > .form-control').click();
    cy.wait(2000);
    const today = new Date().getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', today).click();
    cy.wait(1000);
    cy.get('.btn-secondary').click();
    cy.wait(3000);
    cy.contains('Search Result').scrollIntoView().should("be.visible");
    cy.wait(2000);
    cy.get('.btn-outline-dark').click();
    cy.wait(1000);

  }

  attendanceReport_004() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Attendance Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get('.form-radio-group > :nth-child(2) > #reportType-1').click();
    cy.wait(2000);
    cy.get(':nth-child(2) > .form-select').select('Tony');
    cy.wait(2000);
    cy.get(':nth-child(5) > .form-control').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 30);
    const pastDay = pastDate.getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', pastDay).click();
    cy.wait(2000);
    cy.get(':nth-child(6) > .form-control').click();
    cy.wait(2000);
    const today = new Date().getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', today).click();
    cy.wait(1000);
    cy.get('.btn-secondary').click();
    cy.wait(3000);
    cy.contains('Search Result').scrollIntoView().should("be.visible");
    cy.wait(2000);
    cy.get('.btn-outline-dark').click();
    cy.wait(1000);

  }

  attendanceReport_005() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Attendance Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(':nth-child(5) > .form-control').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 30);
    const pastDay = pastDate.getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', pastDay).click();
    cy.wait(2000);
    cy.get(':nth-child(6) > .form-control').click();
    cy.wait(2000);
    const today = new Date().getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', today).click();
    cy.wait(1000);
    cy.get('.btn-secondary').click();
    cy.wait(3000);
    cy.contains('Search Result').scrollIntoView().should("be.visible");
    cy.wait(2000);
    cy.get('.btn-outline-dark').click();
    cy.wait(1000);
    cy.get('tbody > :nth-child(1) > :nth-child(1) > .form-control-group > .form-radio-group > label > input').click();
    cy.wait(1000);
    //cy.contains('Attendance Details').scrollIntoView().should('be.visible');
    // cy.wait(1000);

  }


  attendanceReport_006() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Attendance Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get('.form-radio-group > :nth-child(2) > #reportType-1').click();
    cy.wait(2000);
    cy.get(':nth-child(2) > .form-select').select('Tony');
    cy.wait(2000);
    cy.get(':nth-child(5) > .form-control').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 30);
    const pastDay = pastDate.getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', pastDay).click();
    cy.wait(2000);
    cy.get(':nth-child(6) > .form-control').click();
    cy.wait(2000);
    const today = new Date().getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', today).click();
    cy.wait(1000);
    cy.get('.btn-secondary').click();
    cy.wait(3000);
    cy.contains('Search Result').should('be.visible');
    cy.wait(2000);
    cy.get('.btn-outline-dark').click();
    cy.wait(1000);
    cy.get('tbody > :nth-child(1) > :nth-child(1) > .form-control-group > .form-radio-group > label > input').click();
    cy.wait(1000);
    cy.contains('Attendance Details').should('be.visible');
    cy.wait(1000);

  }

  attendanceReport_007() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Attendance Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get('.form-radio-group > :nth-child(2) > #reportType-1').click();
    cy.wait(2000);
    cy.get(':nth-child(2) > .form-select').select('Tony');
    cy.wait(2000);
    cy.get(':nth-child(5) > .form-control').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 30);
    const pastDay = pastDate.getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', pastDay).click();
    cy.wait(2000);
    cy.get(':nth-child(6) > .form-control').click();
    cy.wait(2000);
    const today = new Date().getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', today).click();
    cy.wait(1000);
    cy.get('.btn-secondary').click();
    cy.wait(3000);
    cy.contains('Search Result').should('be.visible');
    cy.wait(2000);
    cy.get('.btn-outline-dark').click();
    cy.wait(1000);

  }

  attendanceReport_008() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Attendance Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get('.form-radio-group > :nth-child(2) > #reportType-1').click();
    cy.wait(2000);
    cy.get(':nth-child(2) > .form-select').select('Tony');
    cy.wait(2000);
    cy.get(':nth-child(5) > .form-control').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 30);
    const pastDay = pastDate.getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', pastDay).click();
    cy.wait(2000);
    cy.get(':nth-child(6) > .form-control').click();
    cy.wait(2000);
    const today = new Date().getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', today).click();
    cy.wait(1000);
    cy.get('.btn-secondary').click();
    cy.wait(3000);
    cy.contains('Search Result').should('be.visible');
    cy.wait(2000);
    cy.get('.btn-outline-dark').click();
    cy.wait(1000);

  }


  attendanceReport_009() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Attendance Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get('.form-radio-group > :nth-child(2) > #reportType-1').click();
    cy.wait(2000);
    cy.get(':nth-child(2) > .form-select').select('Tony');
    cy.wait(2000);
    cy.get(':nth-child(5) > .form-control').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 30);
    const pastDay = pastDate.getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', pastDay).click();
    cy.wait(2000);
    cy.get(':nth-child(6) > .form-control').click();
    cy.wait(2000);
    const today = new Date().getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', today).click();
    cy.wait(1000);
    cy.get('.btn-secondary').click();
    cy.wait(3000);
    cy.contains('Search Result').should('be.visible');
    cy.wait(2000);
    cy.get('.btn-outline-dark').click();
    cy.wait(1000);

  }


  attendanceReport_010() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Attendance Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get('.form-radio-group > :nth-child(2) > #reportType-1').click();
    cy.wait(2000);
    cy.get(':nth-child(2) > .form-select').select('Tony');
    cy.wait(2000);
    cy.get(':nth-child(5) > .form-control').click();
    cy.wait(2000);
    cy.get('.previous > span').click();
    cy.wait(2000);
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 30);
    const pastDay = pastDate.getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', pastDay).click();
    cy.wait(2000);
    cy.get(':nth-child(6) > .form-control').click();
    cy.wait(2000);
    const today = new Date().getDate().toString();
    cy.get('.bs-datepicker-body').contains('span', today).click();
    cy.wait(1000);
    cy.get('.btn-secondary').click();
    cy.wait(3000);
    cy.contains('Search Result').should('be.visible');
    cy.wait(2000);
    cy.get('.btn-outline-dark').click();
    cy.wait(1000);

  }
  CashWalletLimitReportPage01() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Cash Wallet Limit Report").click();
    cy.wait(2000);
    cy.get("#empStatus").select('Disabled');
    cy.wait(2000);
  }
  CashWalletLimitReportPage02() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Cash Wallet Limit Report").click();
    cy.wait(2000);
    cy.get("#empStatus").select('Approved');
    cy.wait(2000);
  }
  CashWalletLimitReportPage03() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Cash Wallet Limit Report").click();
    cy.wait(2000);
    cy.get("#empStatus").select('Disabled');
    cy.wait(2000);
  }
  CashWalletLimitReportPage04() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Cash Wallet Limit Report").click();
    cy.wait(2000);
    cy.get("#empStatus").select('Dormant');
    cy.wait(2000);
  }
  CashWalletLimitReportPage05() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Cash Wallet Limit Report").click();
    cy.wait(2000);
    cy.get("#empStatus").select('Pending Approval');
    cy.wait(2000);
  }
  CashWalletLimitReportPage06() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Cash Wallet Limit Report").click();
    cy.wait(2000);
    cy.get("#empStatus").select('Rejected');
    cy.wait(2000);
    cy.get('.btn-secondary').click();
  }
  CashWalletLimitReportPage07() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Cash Wallet Limit Report").click();
    cy.wait(2000);
    cy.get('.form-radio-group > :nth-child(2) > #inlineRadio2').click();
    cy.wait(1000);

  }
  CashWalletLimitReportPage08() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Cash Wallet Limit Report").click();
    cy.wait(2000);
    cy.get('.form-radio-group > :nth-child(2) > #inlineRadio2').click();
    cy.wait(1000);
    cy.get("#empStatus").select('Approved');
    cy.wait(2000);
    cy.get('.btn-secondary').click();
  }
  CashWalletLimitReportPage09() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Cash Wallet Limit Report").click();
    cy.wait(2000);
    cy.get('.form-radio-group > :nth-child(2) > #inlineRadio2').click();
    cy.wait(1000);
    cy.get("#empStatus").select('Disabled');
    cy.wait(2000);
    cy.get('.btn-secondary').click();
  }
  CashWalletLimitReportPage10() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Cash Wallet Limit Report").click();
    cy.wait(2000);
    cy.get('.form-radio-group > :nth-child(2) > #inlineRadio2').click();
    cy.wait(1000);
    cy.get("#empStatus").select('Dormant');
    cy.wait(2000);
    cy.get('.btn-secondary').click();
  }
  CashWalletLimitReportPage11() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Cash Wallet Limit Report").click();
    cy.wait(2000);
    cy.get('.form-radio-group > :nth-child(2) > #inlineRadio2').click();
    cy.wait(1000);
    cy.get("#empStatus").select('Pending Approval');
    cy.wait(2000);
    cy.get('.btn-secondary').click();
  }
  CashWalletLimitReportPage12() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Cash Wallet Limit Report").click();
    cy.wait(2000);
    cy.get('.form-radio-group > :nth-child(2) > #inlineRadio2').click();
    cy.wait(1000);
    cy.get("#empStatus").select('Rejected');
    cy.wait(2000);
    cy.get('#agency_name').type('TRRagency');
    cy.get('strong').click();
    cy.wait(2000);
    cy.wait(2000);
    cy.get('.btn-secondary').click();
  }
  CashWalletLimitReportPage13() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Cash Wallet Limit Report").click();
    cy.wait(2000);
    cy.get('.form-radio-group > :nth-child(2) > #inlineRadio2').click();
    cy.wait(1000);
    cy.get("#empStatus").select('Rejected');
    cy.wait(2000);
    cy.get('#agency_name').type('TRRagency');
    cy.wait(2000);
    cy.get('strong').click();
    cy.wait(2000);
    cy.get('.btn-secondary').click();
    cy.wait(2000);
  }
  CashWalletLimitReportPage14() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Cash Wallet Limit Report").click();
    cy.wait(2000);
    cy.get("#empStatus").select('Rejected');
    cy.wait(2000);
    cy.get('#branch_name').type('Delhi A');
    cy.wait(2000);
    cy.get('#ngb-typeahead-1-0').click();
    cy.wait(2000);
    cy.get('.btn-secondary').click();
    cy.wait(2000);
    //cy.get(this.locators.ClickGenrtReport).click({ force: true });
    //cy.wait(400);
  }
  CashWalletLimitReportPage15() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Cash Wallet Limit Report").click();
    cy.wait(2000);
    cy.get('.btn-secondary').click();
    cy.wait(2000);
    cy.contains('Any one filter is mandatory').should('be.visible');

  }
  Customercontactreport16() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Customer Contact Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);

  }
  Customercontactreport17() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Customer Contact Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(':nth-child(1) > .form-select').select("All");
    cy.wait(2000);
  }
  Customercontactreport18() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Customer Contact Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(':nth-child(1) > .form-select').select("All");
    cy.wait(2000);
    cy.get(':nth-child(2) > .form-select').select("All");
    cy.wait(2000);
  }
  Customercontactreport19() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Customer Contact Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(':nth-child(1) > .form-select').select("All");
    cy.wait(2000);
    cy.get(':nth-child(2) > .form-select').select("All");
    cy.wait(2000);
    cy.get(':nth-child(3) > .form-select').select("All");
    cy.wait(2000);
  }
  Customercontactreport20() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Customer Contact Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(':nth-child(4) > .form-select').select("India");
    cy.wait(2000);
  }
  Customercontactreport21() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Customer Contact Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(':nth-child(4) > .form-select').select("India");
    cy.wait(2000);
    cy.get(':nth-child(5) > .form-select').select("West");
    cy.wait(2000);
  }
  Customercontactreport22() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Customer Contact Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(':nth-child(4) > .form-select').select("India");
    cy.wait(2000);
    cy.get(':nth-child(5) > .form-select').select("West");
    cy.wait(2000);
    cy.get(':nth-child(6) > .form-select').select("Manipur");
    cy.wait(2000);


  }
  Customercontactreport23() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Customer Contact Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(':nth-child(4) > .form-select').select("India");
    cy.wait(2000);
    cy.get(':nth-child(5) > .form-select').select("West");
    cy.wait(2000);
    cy.get(':nth-child(6) > .form-select').select("Manipur");
    cy.wait(2000);
    cy.get(':nth-child(7) > .form-select').select("Imphal")
    cy.wait(2000);



  }
  Customercontactreport24() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Customer Contact Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(':nth-child(8) > .form-select').select("All");
    cy.wait(2000);
    cy.get(':nth-child(9) > .form-control').click();
    cy.wait(2000);
    cy.get('.today-date').click();
    cy.wait(2000);
    cy.get(':nth-child(10) > .form-control').click();
    cy.wait(2000);
    cy.get('.today-date').click();
    cy.wait(2000);
  }
  Customercontactreport25() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Customer Contact Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(':nth-child(9) > .form-control').click();
    cy.wait(2000);
    cy.get('.today-date').click();
    cy.wait(2000);
  }
  Customercontactreport26() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Customer Contact Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.wait(2000); cy.get(':nth-child(9) > .form-control').click();
    cy.wait(2000);
    cy.get('.today-date').click();
    cy.wait(2000);
    cy.get(':nth-child(10) > .form-control').click();
    cy.wait(2000);
    cy.get('.today-date').click();
    cy.wait(2000);
  }
  Customercontactreport27() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Customer Contact Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(':nth-child(1) > .form-select').select("All");
    cy.wait(2000);
    cy.get(':nth-child(2) > .form-select').select("All");
    cy.wait(2000);
    cy.get(':nth-child(3) > .form-select').select("All");
    cy.wait(2000);
    cy.get(':nth-child(4) > .form-select').select("India");
    cy.wait(2000);
    cy.get(':nth-child(5) > .form-select').select("West");
    cy.wait(2000);
    cy.get(':nth-child(6) > .form-select').select("Manipur");
    cy.wait(2000);
    cy.get(':nth-child(7) > .form-select').select("Imphal");
    cy.wait(2000);
    cy.get(':nth-child(8) > .form-select').select("All");
    cy.wait(2000);
    cy.get(':nth-child(9) > .form-control').click();
    cy.wait(2000);
    cy.get('.today-date').click();
    cy.wait(2000);
    cy.get(':nth-child(10) > .form-control').click();
    cy.wait(2000);
    cy.get('.today-date').click();
    cy.wait(2000);
  }
  Customercontactreport28() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Customer Contact Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(':nth-child(1) > .form-select').select("All");
    cy.wait(2000);
    cy.get(':nth-child(2) > .form-select').select("All");
    cy.wait(2000);
    cy.get(':nth-child(3) > .form-select').select("All");
    cy.wait(2000);
    cy.get(':nth-child(4) > .form-select').select("India");
    cy.wait(2000);
    cy.get(':nth-child(5) > .form-select').select("West");
    cy.wait(2000);
    cy.get(':nth-child(6) > .form-select').select("Manipur");
    cy.wait(2000);
    cy.get(':nth-child(7) > .form-select').select("Imphal");
    cy.wait(2000);
    cy.get(':nth-child(8) > .form-select').select("All");
    cy.wait(2000);
    cy.get(':nth-child(9) > .form-control').click();
    cy.wait(2000);
    cy.get('.today-date').click();
    cy.wait(2000);
    cy.get(':nth-child(10) > .form-control').click();
    cy.wait(2000);
    cy.get('.today-date').click();
    cy.wait(2000);
    cy.get('.btn').click();
    cy.wait(2000);
  }
  Customercontactreport29() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Customer Contact Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(':nth-child(8) > .form-select').select("All");
    cy.wait(2000);
    cy.get(':nth-child(9) > .form-control').click();
    cy.wait(2000);
    cy.get('.today-date').click();
    cy.wait(2000);
    cy.get(':nth-child(10) > .form-control').click();
    cy.wait(2000);
    cy.get('.today-date').click();
    cy.wait(2000);
    cy.get('.btn').click();
    cy.wait(2000);
  }
  Customercontactreport30() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Customer Contact Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(':nth-child(4) > .form-select').select("India");
    cy.wait(2000);
    cy.get(':nth-child(8) > .form-select').select("All");
    cy.wait(2000);
    cy.get(':nth-child(9) > .form-control').click();
    cy.wait(2000);
    cy.get('.today-date').click();
    cy.wait(2000);
    cy.get(':nth-child(10) > .form-control').click();
    cy.wait(2000);
    cy.get('.today-date').click();
    cy.wait(2000);
    cy.get('.btn').click();
    cy.wait(2000);
  }
  Customercontactreport31() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Customer Contact Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(':nth-child(4) > .form-select').select("India");
    cy.wait(2000);
    cy.get(':nth-child(5) > .form-select').select("South");
    cy.wait(2000);
    cy.get(':nth-child(8) > .form-select').select("All");
    cy.wait(2000);
    cy.get(':nth-child(9) > .form-control').click();
    cy.wait(2000);
    cy.get('.today-date').click();
    cy.wait(2000);
    cy.get(':nth-child(10) > .form-control').click();
    cy.wait(2000);
    cy.get('.today-date').click();
    cy.wait(2000);
    cy.get('.btn').click();
    cy.wait(2000);
  }
  Customercontactreport32() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Customer Contact Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(':nth-child(4) > .form-select').select("India");
    cy.wait(2000);
    cy.get(':nth-child(5) > .form-select').select("South");
    cy.wait(2000);
    cy.get(':nth-child(6) > .form-select').select("Karnataka");
    cy.wait(2000);
    cy.get(':nth-child(8) > .form-select').select("All");
    cy.wait(2000);
    cy.get(':nth-child(9) > .form-control').click();
    cy.wait(2000);
    cy.get('.today-date').click();
    cy.wait(2000);
    cy.get(':nth-child(10) > .form-control').click();
    cy.wait(2000);
    cy.get('.today-date').click();
    cy.wait(2000);
    cy.get('.btn').click();
    cy.wait(2000);
  }
  Customercontactreport33() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Customer Contact Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(':nth-child(4) > .form-select').select("India");
    cy.wait(2000);
    cy.get(':nth-child(5) > .form-select').select("South");
    cy.wait(2000);
    cy.get(':nth-child(6) > .form-select').select("Karnataka");
    cy.wait(2000);
    cy.get(':nth-child(7) > .form-select').select("Mysore");
    cy.wait(2000);
    cy.get(':nth-child(8) > .form-select').select("All");
    cy.wait(2000);
    cy.get(':nth-child(9) > .form-control').click();
    cy.wait(2000);
    cy.get('.today-date').click();
    cy.wait(2000);
    cy.get(':nth-child(10) > .form-control').click();
    cy.wait(2000);
    cy.get('.today-date').click();
    cy.wait(2000);
    cy.get('.btn').click();
    cy.wait(2000);
  }
  Customercontactreport34() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Customer Contact Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(':nth-child(1) > .form-select').select("All");
    cy.wait(2000);
    cy.get(':nth-child(8) > .form-select').select("All");
    cy.wait(2000);
    cy.get(':nth-child(9) > .form-control').click();
    cy.wait(2000);
    cy.get('.today-date').click();
    cy.wait(2000);
    cy.get(':nth-child(10) > .form-control').click();
    cy.wait(2000);
    cy.get('.today-date').click();
    cy.wait(2000);
    cy.get('.btn').click();
    cy.wait(2000);
  }
  Customercontactreport35() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Customer Contact Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(':nth-child(1) > .form-select').select("Consumer Loan");
    cy.wait(2000);
    cy.get(':nth-child(2) > .form-select').select("Unsecured");
    cy.wait(2000);
    cy.wait(1000);
    cy.get(':nth-child(8) > .form-select').select("1");
    cy.wait(2000);
    cy.get(':nth-child(9) > .form-control').click();
    cy.wait(2000);
    cy.get('.today-date').click();
    cy.wait(2000);
    cy.get(':nth-child(10) > .form-control').click();
    cy.wait(2000);
    cy.get('.today-date').click();
    cy.wait(2000);
    cy.get('.btn').click();
    cy.wait(2000);
  }
  Customercontactreport36() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Customer Contact Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(':nth-child(1) > .form-select').select("Consumer Loan");
    cy.wait(2000);
    cy.get(':nth-child(2) > .form-select').select("Unsecured");
    cy.wait(2000);
    cy.get(':nth-child(3) > .form-select').select("Personal Loan");
    cy.wait(2000);
    cy.get(':nth-child(8) > .form-select').select("1");
    cy.wait(2000);
    cy.get(':nth-child(9) > .form-control').click();
    cy.wait(2000);
    cy.get('.today-date').click();
    cy.wait(2000);
    cy.get(':nth-child(10) > .form-control').click();
    cy.wait(2000);
    cy.get('.today-date').click();
    cy.wait(2000);
    cy.get('.btn').click();
    cy.wait(2000);
  }
  Customercontactreport37() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Customer Contact Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get('.search-batch > :nth-child(2)');
    cy.wait(2000);
    cy.contains('Download Report').should('be.visible');
    cy.wait(2000);

  }
  Customercontactreport38() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Customer Contact Report").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get('.title');
    cy.wait(2000);
    cy.contains('Customer Contact Report').should('be.visible');
    cy.wait(2000);

  }
  VisitIntensityReport39() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
     cy.contains("Visit Intensity Report").scrollIntoView().should("be.visible").click();
    cy.get(1000);
    cy.get(':nth-child(1) > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(3000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });



  }
  VisitIntensityReport40() {
      cy.contains("Reports").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
     cy.contains("Visit Intensity Report").scrollIntoView().should("be.visible").click();
    cy.get(1000);
    cy.get(':nth-child(1) > .form-control-group > .form-ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel').should('be.visible')
      .within(() => {
        cy.wait(3000);
        cy.get('.ng-option').then($options => {
          const count = $options.length;
          const randomIndex = Math.floor(Math.random() * count);
          cy.wrap($options[randomIndex]).click({ force: true });
        });
      });



  }
}
export default ReportsPage;
