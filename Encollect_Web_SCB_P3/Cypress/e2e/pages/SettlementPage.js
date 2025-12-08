import { th } from "@faker-js/faker";
import { getLocators } from "../utils/Locatorutils";
import { getBaseUrl } from "../utils/configutils";
import "cypress-file-upload";

class SettlementPage {
  constructor(locators) {
    this.locators = locators;
  }

  SettlementTestPage_01() {
    cy.get(this.locators.ClickOnSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnFindEligibleCases).click();
    cy.wait(1000);
    cy.contains("Current DPD").should("be.visible");
    cy.wait(1000);
    cy.contains("Total Overdue").should("be.visible");
    cy.wait(1000);
    cy.contains("Total Outstanding").should("be.visible");
    cy.wait(1000);
    cy.contains("Customer ID").should("be.visible");
    cy.wait(1000);
    cy.contains("NPA Flag").should("be.visible");
    cy.wait(1000);
    cy.contains("Flagged As Eligible").should("be.visible");
    cy.wait(1000);
  }

  SettlementTestPage_02() {
    cy.get(this.locators.ClickOnSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnFindEligibleCases).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnSearchBtn).click();
    cy.wait(5000);
    cy.contains("Search Results").should("be.visible");
    cy.wait(2000);
  }

  SettlementTestPage_03() {

    cy.get(this.locators.ClickOnSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnFindEligibleCases).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnSearchBtn).click();
    cy.wait(5000);
    cy.contains("Account Number").should("be.visible");
    cy.wait(1000);
    cy.contains("Customer ID").should("be.visible");
    cy.wait(1000);
    cy.contains("Flagged As Eligible").should("be.visible");
    cy.wait(1000);
    cy.contains("Current DPD").should("be.visible");
    cy.wait(1000);
    cy.contains("NPA Flag").should("be.visible");
    cy.wait(1000);
    // cy.contains("Principal Outstanding (Rs)").should("be.visible");
    // cy.wait(1000);

  }

  SettlementTestPage_04() {

    cy.get(this.locators.ClickOnSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnFindEligibleCases).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnSearchBtn).click();
    cy.wait(5000);
    cy.get(this.locators.ClickOnAccountNumber).click();
    cy.wait(3000);
    cy.contains("Account Details").should("be.visible");
    cy.wait(3000);

  }

  SettlementTestPage_05() {

    cy.get(this.locators.ClickOnSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnFindEligibleCases).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnSearchBtn).click();
    cy.wait(5000);
    cy.get(this.locators.ClickOnCustomerID).click();
    cy.wait(4000);
    cy.contains("Search Results").should("be.visible");
    cy.wait(2000);
  }

  SettlementTestPage_06() {
    cy.get(this.locators.ClickOnSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnFindEligibleCases).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnSearchBtn).click();
    cy.wait(5000);
    cy.get(this.locators.ClickOnAccountNumber).click();
    cy.wait(3000);
    cy.contains("Account Details").should("be.visible");
    cy.wait(3000);

  }

  SettlementTestPage_07() {

    cy.get(this.locators.ClickOnSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnFindEligibleCases).click();
    cy.wait(1000);
    cy.get(this.locators.SelectFlagedAsEligible).should('contain', 'No');
    cy.wait(5000);
    cy.get(this.locators.ClickOnSearchBtn).click();
    cy.wait(5000);
    cy.get(this.locators.SelectFlagedAsEligible).select("Yes");
    cy.wait(5000);
    cy.get(this.locators.ClickOnSearchBtn).click();
    cy.wait(5000);
  }

  SettlementTestPage_08() {

    cy.get(this.locators.ClickOnSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnFindEligibleCases).click();
    cy.wait(1000);
    cy.get(this.locators.TypeCustomerID).type(1234);
    cy.wait(1000);
    cy.get(this.locators.ClickOnSearchBtn).click();
    cy.wait(3000);
    cy.get('[role="alert"]').should('contain.text', 'No Results Found!');
    cy.wait(2000);
  }

  SettlementTestPage_09() {

    cy.get(this.locators.ClickOnSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnFindEligibleCases).click();
    cy.wait(1000);
    cy.get(this.locators.TypeCustomerID).type(1234);
    cy.wait(1000);
    cy.get(this.locators.ClickOnSearchBtn).click();
    cy.wait(3000);
    cy.get(this.locators.TypeCustomerID).should('have.value', '1234');
    cy.wait(1000);
    cy.get(this.locators.SelectFlagedAsEligible).should('contain', 'No');
    cy.wait(2000);
  }

  SettlementTestPage_10() {

    cy.get(this.locators.ClickOnSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnFindEligibleCases).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnSearchBtn).click();
    cy.wait(5000);
    cy.get(this.locators.TickBox2).click();
    cy.wait(1000);
    cy.get(this.locators.TickBox3).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnFlagAsEligible).scrollIntoView().click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnDialogYes).click();
    cy.wait(2000);
    cy.contains('[role="alert"]', 'Selected account(s) are flagged as Eligible for Settlement.').should('be.visible');
    cy.wait(2000);

  }

  SettlementTestPage_11() {
    cy.get(this.locators.ClickOnSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnFindEligibleCases).click();
    cy.wait(1000);
    cy.get(this.locators.SelectFlagedAsEligible).select("--Select--");
    cy.wait(2000);
    cy.get(this.locators.ClickOnSearchBtn).click({ force: true });
    cy.wait(2000);
  }

  SettlementTestPage_12() { }

  SettlementTestPage_13() {

    cy.get(this.locators.ClickOnSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnFindEligibleCases).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnSearchBtn).click();
    cy.wait(5000);
    cy.get(this.locators.TickBox2).click();
    cy.wait(1000);
    cy.get(this.locators.TickBox3).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnFlagAsEligible).scrollIntoView().click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnDialogYes).click();
    cy.wait(2000);
    cy.contains('[role="alert"]', 'Selected account(s) are flagged as Eligible for Settlement.').should('be.visible');
    cy.wait(2000);

  }

  SettlementTestPage_14() {

    cy.get(this.locators.ClickOnSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnFindEligibleCases).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnSearchBtn).click();
    cy.wait(5000);
    cy.get(this.locators.TickBox2).click();
    cy.wait(1000);
    cy.get(this.locators.TickBox3).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnFlagAsEligible).scrollIntoView().click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnDialogYes).click();
    cy.wait(2000);
    cy.contains('[role="alert"]', 'Selected account(s) are flagged as Eligible for Settlement.').should('be.visible');
    cy.wait(2000);

  }

  SettlementTestPage_15() {

    cy.get(this.locators.ClickOnSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnFindEligibleCases).click();
    cy.wait(1000);
    cy.get(this.locators.TypeCurrentDPDFrom).type(1);
    cy.wait(1000);
    cy.get(this.locators.TypeCurrentDPDTo).type(100);
    cy.wait(1000);
    cy.get(this.locators.TypeTotalOutstandingFrom).type(10);
    cy.wait(1000);
    cy.get(this.locators.TypeTotalOutstandingTo).type(10000);
    cy.wait(1000);
    cy.get(this.locators.ClickOnSearchBtn).click();
    cy.wait(5000);
    cy.contains("Search Results").should("be.visible");
    cy.wait(2000);

  }

  SettlementTestPage_16() {

    cy.get(this.locators.ClickOnSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnFindEligibleCases).click();
    cy.wait(1000);
    // cy.get(this.locators.TypeCurrentDPDFrom).type(1);
    // cy.wait(1000);
    // cy.get(this.locators.TypeCurrentDPDTo).type(100);
    // cy.wait(1000);
    cy.get(this.locators.TypeCustomerID).type(210000003738);
    cy.wait(1000);
    cy.get(this.locators.ClickOnSearchBtn).click();
    cy.wait(3000);
    cy.contains("Search Results").should("be.visible");
    cy.wait(2000);
  }

  SettlementTestPage_17() {

    cy.get(this.locators.ClickOnSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnFindEligibleCases).click();
    cy.wait(1000);
    cy.get(this.locators.TypeCurrentDPDFrom).type(1);
    cy.wait(1000);
    cy.get(this.locators.TypeCurrentDPDTo).type(100);
    cy.wait(1000);
    cy.get(this.locators.TypeCustomerID).type(180522);
    cy.wait(1000);
    cy.get(this.locators.ClickOnSearchBtn).click();
    cy.wait(3000);
    cy.get('[role="alert"]').should('contain.text', 'No Results Found!');
    cy.wait(2000);
  }

  SettlementTestPage_18() {
    cy.get(this.locators.ClickOnSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnFindEligibleCases).click();
    cy.wait(1000);
    cy.get(this.locators.TypeCurrentDPDFrom).type(1);
    cy.wait(1000);
    cy.get(this.locators.TypeCurrentDPDTo).type(100);
    cy.wait(1000);
    cy.get(this.locators.ClickOnFindEligibleCases).click();
    cy.wait(1000);
    cy.get(this.locators.SelectFlagedAsEligible).select("Yes");
    cy.wait(5000);
    cy.get(this.locators.ClickOnSearchBtn).click();
    cy.wait(3000);
    cy.contains('Search Results').should('be.visible');
    cy.wait(2000);
  }

  SettlementTestPage_19() {
    cy.get(this.locators.ClickOnSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.requestSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnSearch).click();
    cy.wait(1000);
    cy.get('.mt-4 > .card-content').scrollTo('right');
    cy.wait(1000);
    cy.get('.pagination-count > .form-select').select('50');
    cy.wait(1000);
    let stopChecking = false;
    const maxRows = 50;
    function tryRow(index) {
      if (index > maxRows || stopChecking) return;
      const selector = `:nth-child(${index}) > :nth-child(6) > #config-button`;
      cy.get('body').then($body => {
        if (stopChecking) return;
        if ($body.find(selector).length > 0) {
          cy.log(`Trying row ${index}`);
          cy.get(selector).click({ force: true });

          cy.wait(3000); // wait for modal to appear

          // Check if "already created" message appears in full body
          cy.get('body').then($body => {
            const bodyText = $body.text().toLowerCase();

            if (
              bodyText.includes('a settlement request for this account') &&
              bodyText.includes('has already been created')
            ) {
              cy.log(`Settlement already exists for row ${index}, trying next row...`);
              cy.wait(3000).then(() => tryRow(index + 1));
            } else {
              // Check specifically for the confirmation popup in the modal
              cy.get('p').then($modal => {
                const modalText = $modal.text().toLowerCase();

                if (modalText.includes('are you sure you want to proceed with settlement request?')) {
                  cy.log('Found valid account at row ${index}. Proceeding...');
                  stopChecking = true;

                  cy.get('#confirm-dialog-okay').click();
                } else {
                  cy.log(`Modal doesn't match, moving to next row...`);
                  cy.wait(3000).then(() => tryRow(index + 1));
                }
              });
            }
          });
        } else {
          cy.log(`No button found at row ${index}, trying next`);
          cy.wait(3000).then(() => tryRow(index + 1));
        }
      });
    }
    tryRow(1);
  }

  SettlementTestPage_20() {
    cy.get(this.locators.ClickOnSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.requestSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnSearch).click();
    cy.wait(1000);
  }
  SettlementTestPage_21() {
    cy.get(this.locators.ClickOnSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.requestSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnSearch).click();
    cy.wait(1000);
    cy.get('.mt-4 > .card-content').scrollTo('right');
    cy.wait(1000);
    cy.get('.pagination-count > .form-select').select('50');
    cy.wait(1000);
    let stopChecking = false;
    const maxRows = 50;
    function tryRow(index) {
      if (index > maxRows || stopChecking) return;
      const selector = `:nth-child(${index}) > :nth-child(6) > #config-button`;
      cy.get('body').then($body => {
        if (stopChecking) return;
        if ($body.find(selector).length > 0) {
          cy.log(`Trying row ${index}`);
          cy.get(selector).click({ force: true });

          cy.wait(3000); // wait for modal to appear

          // Check if "already created" message appears in full body
          cy.get('body').then($body => {
            const bodyText = $body.text().toLowerCase();

            if (
              bodyText.includes('a settlement request for this account') &&
              bodyText.includes('has already been created')
            ) {
              cy.log(`Settlement already exists for row ${index}, trying next row...`);
              cy.wait(3000).then(() => tryRow(index + 1));
            } else {
              // Check specifically for the confirmation popup in the modal
              cy.get('p').then($modal => {
                const modalText = $modal.text().toLowerCase();

                if (modalText.includes('are you sure you want to proceed with settlement request?')) {
                  cy.log('Found valid account at row ${index}. Proceeding...');
                  stopChecking = true;

                  cy.get('#confirm-dialog-okay').click();
                } else {
                  cy.log(`Modal doesn't match, moving to next row...`);
                  cy.wait(3000).then(() => tryRow(index + 1));
                }
              });
            }
          });
        } else {
          cy.log(`No button found at row ${index}, trying next`);
          cy.wait(3000).then(() => tryRow(index + 1));
        }
      });
    }
    tryRow(1);
  }

  SettlementTestPage_22() {
    cy.get(this.locators.ClickOnSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.requestSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnSearch).click();
    cy.wait(1000);
    cy.get('.mt-4 > .card-content').scrollTo('right');
    cy.wait(1000);
    cy.get('.pagination-count > .form-select').select('50');
    cy.wait(1000);
    let stopChecking = false;
    const maxRows = 50;
    function tryRow(index) {
      if (index > maxRows || stopChecking) return;
      const selector = `:nth-child(${index}) > :nth-child(6) > #config-button`;
      cy.get('body').then($body => {
        if (stopChecking) return;
        if ($body.find(selector).length > 0) {
          cy.log(`Trying row ${index}`);
          cy.get(selector).click({ force: true });

          cy.wait(3000); // wait for modal to appear

          // Check if "already created" message appears in full body
          cy.get('body').then($body => {
            const bodyText = $body.text().toLowerCase();

            if (
              bodyText.includes('a settlement request for this account') &&
              bodyText.includes('has already been created')
            ) {
              cy.log(`Settlement already exists for row ${index}, trying next row...`);
              cy.wait(3000).then(() => tryRow(index + 1));
            } else {
              // Check specifically for the confirmation popup in the modal
              cy.get('p').then($modal => {
                const modalText = $modal.text().toLowerCase();

                if (modalText.includes('are you sure you want to proceed with settlement request?')) {
                  cy.log('Found valid account at row ${index}. Proceeding...');
                  stopChecking = true;

                  cy.get('#confirm-dialog-okay').click();
                } else {
                  cy.log(`Modal doesn't match, moving to next row...`);
                  cy.wait(3000).then(() => tryRow(index + 1));
                }
              });
            }
          });
        } else {
          cy.log(`No button found at row ${index}, trying next`);
          cy.wait(3000).then(() => tryRow(index + 1));
        }
      });
    }
    tryRow(1);
    cy.contains('Settlement Request Information').should('be.visible');
    cy.wait(3000);
  }

  SettlementTestPage_23() {

    cy.get(this.locators.ClickOnSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.requestSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnSearch).click();
    cy.wait(1000);
    cy.get('.mt-4 > .card-content').scrollTo('right');
    cy.wait(1000);
    cy.get('.pagination-count > .form-select').select('50');
    cy.wait(1000);
    let stopChecking = false;
    const maxRows = 50;
    function tryRow(index) {
      if (index > maxRows || stopChecking) return;
      const selector = `:nth-child(${index}) > :nth-child(6) > #config-button`;
      cy.get('body').then($body => {
        if (stopChecking) return;
        if ($body.find(selector).length > 0) {
          cy.log(`Trying row ${index}`);
          cy.get(selector).click({ force: true });

          cy.wait(3000); // wait for modal to appear

          // Check if "already created" message appears in full body
          cy.get('body').then($body => {
            const bodyText = $body.text().toLowerCase();

            if (
              bodyText.includes('a settlement request for this account') &&
              bodyText.includes('has already been created')
            ) {
              cy.log(`Settlement already exists for row ${index}, trying next row...`);
              cy.wait(3000).then(() => tryRow(index + 1));
            } else {
              // Check specifically for the confirmation popup in the modal
              cy.get('p').then($modal => {
                const modalText = $modal.text().toLowerCase();

                if (modalText.includes('are you sure you want to proceed with settlement request?')) {
                  cy.log('Found valid account at row ${index}. Proceeding...');
                  stopChecking = true;

                  cy.get('#confirm-dialog-cancel').click();
                } else {
                  cy.log(`Modal doesn't match, moving to next row...`);
                  cy.wait(3000).then(() => tryRow(index + 1));
                }
              });
            }
          });
        } else {
          cy.log(`No button found at row ${index}, trying next`);
          cy.wait(3000).then(() => tryRow(index + 1));
        }
      });
    }
    tryRow(1);
  }

  SettlementTestPage_24() {
    cy.get(this.locators.ClickOnSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.requestSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnSearch).click();
    cy.wait(1000);
    cy.get(this.locators.clickonaction).click({ force: true });
    cy.wait(1000);
    cy.get(".toast-message").contains('has already been created and is still open.')
  }

  SettlementTestPage_25() {
    cy.get(this.locators.ClickOnSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.requestSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnSearch).click();
    cy.wait(1000);
    cy.get('.mt-4 > .card-content').scrollTo('right');
    cy.wait(1000);
    cy.get('.pagination-count > .form-select').select('50');
    cy.wait(1000);
    let stopChecking = false;
    const maxRows = 50;
    function tryRow(index) {
      if (index > maxRows || stopChecking) return;
      const selector = `:nth-child(${index}) > :nth-child(6) > #config-button`;
      cy.get('body').then($body => {
        if (stopChecking) return;
        if ($body.find(selector).length > 0) {
          cy.log(`Trying row ${index}`);
          cy.get(selector).click({ force: true });

          cy.wait(3000); // wait for modal to appear

          // Check if "already created" message appears in full body
          cy.get('body').then($body => {
            const bodyText = $body.text().toLowerCase();

            if (
              bodyText.includes('a settlement request for this account') &&
              bodyText.includes('has already been created')
            ) {
              cy.log(`Settlement already exists for row ${index}, trying next row...`);
              cy.wait(3000).then(() => tryRow(index + 1));
            } else {
              // Check specifically for the confirmation popup in the modal
              cy.get('p').then($modal => {
                const modalText = $modal.text().toLowerCase();

                if (modalText.includes('are you sure you want to proceed with settlement request?')) {
                  cy.log('Found valid account at row ${index}. Proceeding...');
                  stopChecking = true;

                  cy.get('#confirm-dialog-okay').click();
                } else {
                  cy.log(`Modal doesn't match, moving to next row...`);
                  cy.wait(3000).then(() => tryRow(index + 1));
                }
              });
            }
          });
        } else {
          cy.log(`No button found at row ${index}, trying next`);
          cy.wait(3000).then(() => tryRow(index + 1));
        }
      });
    }
    tryRow(1);
    cy.get(this.locators.viewCustomerAccountDetails).click();
    cy.wait(3000);
    cy.get(this.locators.clickOnYes).click();
    cy.wait(3000);
    cy.contains('Account Details').should('be.visible');
    cy.wait(3000);

  }

  SettlementTestPage_26() {
    cy.get(this.locators.ClickOnSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.requestSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnSearch).click();
    cy.wait(1000);
    cy.get('.mt-4 > .card-content').scrollTo('right');
    cy.wait(1000);
    cy.get('.pagination-count > .form-select').select('50');
    cy.wait(1000);
    let stopChecking = false;
    const maxRows = 50;
    function tryRow(index) {
      if (index > maxRows || stopChecking) return;
      const selector = `:nth-child(${index}) > :nth-child(6) > #config-button`;
      cy.get('body').then($body => {
        if (stopChecking) return;
        if ($body.find(selector).length > 0) {
          cy.log(`Trying row ${index}`);
          cy.get(selector).click({ force: true });

          cy.wait(3000); // wait for modal to appear

          // Check if "already created" message appears in full body
          cy.get('body').then($body => {
            const bodyText = $body.text().toLowerCase();

            if (
              bodyText.includes('a settlement request for this account') &&
              bodyText.includes('has already been created')
            ) {
              cy.log(`Settlement already exists for row ${index}, trying next row...`);
              cy.wait(3000).then(() => tryRow(index + 1));
            } else {
              // Check specifically for the confirmation popup in the modal
              cy.get('p').then($modal => {
                const modalText = $modal.text().toLowerCase();

                if (modalText.includes('are you sure you want to proceed with settlement request?')) {
                  cy.log('Found valid account at row ${index}. Proceeding...');
                  stopChecking = true;

                  cy.get('#confirm-dialog-okay').click();
                } else {
                  cy.log(`Modal doesn't match, moving to next row...`);
                  cy.wait(3000).then(() => tryRow(index + 1));
                }
              });
            }
          });
        } else {
          cy.log(`No button found at row ${index}, trying next`);
          cy.wait(3000).then(() => tryRow(index + 1));
        }
      });
    }
    tryRow(1);
    cy.get(this.locators.settlementInformation).click();
    cy.wait(1000);
    cy.get(this.locators.settlementAmount).type('100');
    cy.wait(1000);
    cy.get(this.locators.remark).type('This is ok');
    cy.wait(1000);
    cy.get(this.locators.settlementTranches).click();
    cy.wait(1000);
    cy.get(this.locators.installmentAmount).type('100');
    cy.wait(1000);
    cy.get(this.locators.dueDate).click();
    cy.get('.bs-datepicker-body span').not('.disabled').not('.is-other-month').then($dates => {
      const validDates = Cypress._.filter($dates, el => {
        const day = parseInt(el.innerText);
        return !isNaN(day);
      });
      // Pick a random date from the list
      const randomIndex = Cypress._.random(0, validDates.length - 1);
      const randomDate = validDates[randomIndex];
      // Click the random date
      cy.wrap(randomDate).click();
    });
    cy.wait(1000);
    cy.get(this.locators.uploadDocument).click();
    cy.wait(1000);
    cy.get(this.locators.selectDateSettlement).select('Yes');
    cy.wait(1000);
    cy.get(this.locators.dateOfDeath).click();
    cy.wait(1000);
    cy.get('.bs-datepicker-body span').not('.disabled').not('.is-other-month').then($dates => {
      const validDates = Cypress._.filter($dates, el => {
        const day = parseInt(el.innerText);
        return !isNaN(day);
      });
      // Pick a random date from the list
      const randomIndex = Cypress._.random(0, validDates.length - 1);
      const randomDate = validDates[randomIndex];
      // Click the random date
      cy.wrap(randomDate).click();
    });


  }

  SettlementTestPage_27() {
    cy.get(this.locators.ClickOnSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.requestSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnSearch).click();
    cy.wait(1000);
    cy.get('.mt-4 > .card-content').scrollTo('right');
    cy.wait(1000);
    cy.get('.pagination-count > .form-select').select('50');
    cy.wait(1000);
    let stopChecking = false;
    const maxRows = 50;
    function tryRow(index) {
      if (index > maxRows || stopChecking) return;
      const selector = `:nth-child(${index}) > :nth-child(6) > #config-button`;
      cy.get('body').then($body => {
        if (stopChecking) return;
        if ($body.find(selector).length > 0) {
          cy.log(`Trying row ${index}`);
          cy.get(selector).click({ force: true });

          cy.wait(3000); // wait for modal to appear

          // Check if "already created" message appears in full body
          cy.get('body').then($body => {
            const bodyText = $body.text().toLowerCase();

            if (
              bodyText.includes('a settlement request for this account') &&
              bodyText.includes('has already been created')
            ) {
              cy.log(`Settlement already exists for row ${index}, trying next row...`);
              cy.wait(3000).then(() => tryRow(index + 1));
            } else {
              // Check specifically for the confirmation popup in the modal
              cy.get('p').then($modal => {
                const modalText = $modal.text().toLowerCase();

                if (modalText.includes('are you sure you want to proceed with settlement request?')) {
                  cy.log('Found valid account at row ${index}. Proceeding...');
                  stopChecking = true;

                  cy.get('#confirm-dialog-okay').click();
                } else {
                  cy.log(`Modal doesn't match, moving to next row...`);
                  cy.wait(3000).then(() => tryRow(index + 1));
                }
              });
            }
          });
        } else {
          cy.log(`No button found at row ${index}, trying next`);
          cy.wait(3000).then(() => tryRow(index + 1));
        }
      });
    }
    tryRow(1);
    cy.get(this.locators.settlementInformation).click();
    cy.wait(1000);
    cy.get(this.locators.settlementAmount).type('100');
    cy.wait(1000);
    cy.get(this.locators.remark).type('This is ok');
    cy.wait(1000);
    cy.get(this.locators.settlementTranches).click();
    cy.wait(1000);
    cy.get(this.locators.installmentAmount).type('100');
    cy.wait(1000);
    cy.get(this.locators.dueDate).click();
    cy.get('.bs-datepicker-body span').not('.disabled').not('.is-other-month').then($dates => {
      const validDates = Cypress._.filter($dates, el => {
        const day = parseInt(el.innerText);
        return !isNaN(day);
      });
      // Pick a random date from the list
      const randomIndex = Cypress._.random(0, validDates.length - 1);
      const randomDate = validDates[randomIndex];
      // Click the random date
      cy.wrap(randomDate).click();
    });
    cy.wait(1000);
    cy.get(this.locators.uploadDocument).click();
    cy.wait(1000);
    cy.get(this.locators.selectDateSettlement).select('Yes');
    cy.wait(1000);
    cy.get(this.locators.dateOfDeath).click();
    cy.wait(1000);
    cy.get('.bs-datepicker-body span').not('.disabled').not('.is-other-month').then($dates => {
      const validDates = Cypress._.filter($dates, el => {
        const day = parseInt(el.innerText);
        return !isNaN(day);
      });
      // Pick a random date from the list
      const randomIndex = Cypress._.random(0, validDates.length - 1);
      const randomDate = validDates[randomIndex];
      // Click the random date
      cy.wrap(randomDate).click();
    });
    cy.wait(2000);
    const path = '/tester.jpg'
    cy.get(':nth-child(1) > td.ng-star-inserted > .upload-btn-wrapper > .hidden-input').attachFile(path)
    cy.wait(5000);
  }

  SettlementTestPage_28() {
    cy.get(this.locators.ClickOnSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.requestSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnSearch).click();
    cy.wait(1000);
    cy.get('.mt-4 > .card-content').scrollTo('right');
    cy.wait(1000);
    cy.get('.pagination-count > .form-select').select('50');
    cy.wait(1000);
    let stopChecking = false;
    const maxRows = 50;
    function tryRow(index) {
      if (index > maxRows || stopChecking) return;
      const selector = `:nth-child(${index}) > :nth-child(6) > #config-button`;
      cy.get('body').then($body => {
        if (stopChecking) return;
        if ($body.find(selector).length > 0) {
          cy.log(`Trying row ${index}`);
          cy.get(selector).click({ force: true });

          cy.wait(3000); // wait for modal to appear

          // Check if "already created" message appears in full body
          cy.get('body').then($body => {
            const bodyText = $body.text().toLowerCase();

            if (
              bodyText.includes('a settlement request for this account') &&
              bodyText.includes('has already been created')
            ) {
              cy.log(`Settlement already exists for row ${index}, trying next row...`);
              cy.wait(3000).then(() => tryRow(index + 1));
            } else {
              // Check specifically for the confirmation popup in the modal
              cy.get('p').then($modal => {
                const modalText = $modal.text().toLowerCase();

                if (modalText.includes('are you sure you want to proceed with settlement request?')) {
                  cy.log('Found valid account at row ${index}. Proceeding...');
                  stopChecking = true;

                  cy.get('#confirm-dialog-okay').click();
                } else {
                  cy.log(`Modal doesn't match, moving to next row...`);
                  cy.wait(3000).then(() => tryRow(index + 1));
                }
              });
            }
          });
        } else {
          cy.log(`No button found at row ${index}, trying next`);
          cy.wait(3000).then(() => tryRow(index + 1));
        }
      });
    }
    tryRow(1);
    cy.get(this.locators.settlementInformation).click();
    cy.wait(1000);
    cy.get(this.locators.settlementAmount).type('100');
    cy.wait(1000);
    cy.get(this.locators.remark).type('This is ok');
    cy.wait(1000);
    cy.get(this.locators.settlementTranches).click();
    cy.wait(1000);
    cy.get(this.locators.installmentAmount).type('100');
    cy.wait(1000);
    cy.get(this.locators.dueDate).click();
    cy.get('.bs-datepicker-body span').not('.disabled').not('.is-other-month').then($dates => {
      const validDates = Cypress._.filter($dates, el => {
        const day = parseInt(el.innerText);
        return !isNaN(day);
      });
      // Pick a random date from the list
      const randomIndex = Cypress._.random(0, validDates.length - 1);
      const randomDate = validDates[randomIndex];
      // Click the random date
      cy.wrap(randomDate).click();
    });
    cy.wait(1000);
    cy.get(this.locators.uploadDocument).click();
    cy.wait(1000);
    const path = '/tester.jpg'
    cy.get(':nth-child(1) > td.ng-star-inserted > .upload-btn-wrapper > .hidden-input').attachFile(path)
    cy.wait(3000);
    cy.get(this.locators.submit).click();
    cy.wait(8000);
    cy.contains('Your Settlement Request ID is').invoke('text').then((text) => {
      const id = text.match(/\d+/)[0]; // extract digits using RegEx
      cy.wrap(id).as('requestId');     // save the ID for later use
    });

  }

  SettlementTestPage_29() {
    cy.get(this.locators.ClickOnSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.requestSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnSearch).click();
    cy.wait(1000);
    cy.get('.mt-4 > .card-content').scrollTo('right');
    cy.wait(1000);
    cy.get('.pagination-count > .form-select').select('50');
    cy.wait(1000);
    let stopChecking = false;
    const maxRows = 50;
    function tryRow(index) {
      if (index > maxRows || stopChecking) return;
      const selector = `:nth-child(${index}) > :nth-child(6) > #config-button`;
      cy.get('body').then($body => {
        if (stopChecking) return;
        if ($body.find(selector).length > 0) {
          cy.log(`Trying row ${index}`);
          cy.get(selector).click({ force: true });

          cy.wait(3000); // wait for modal to appear

          // Check if "already created" message appears in full body
          cy.get('body').then($body => {
            const bodyText = $body.text().toLowerCase();

            if (
              bodyText.includes('a settlement request for this account') &&
              bodyText.includes('has already been created')
            ) {
              cy.log(`Settlement already exists for row ${index}, trying next row...`);
              cy.wait(3000).then(() => tryRow(index + 1));
            } else {
              // Check specifically for the confirmation popup in the modal
              cy.get('p').then($modal => {
                const modalText = $modal.text().toLowerCase();

                if (modalText.includes('are you sure you want to proceed with settlement request?')) {
                  cy.log('Found valid account at row ${index}. Proceeding...');
                  stopChecking = true;

                  cy.get('#confirm-dialog-okay').click();
                } else {
                  cy.log(`Modal doesn't match, moving to next row...`);
                  cy.wait(3000).then(() => tryRow(index + 1));
                }
              });
            }
          });
        } else {
          cy.log(`No button found at row ${index}, trying next`);
          cy.wait(3000).then(() => tryRow(index + 1));
        }
      });
    }
    tryRow(1);
    cy.get(this.locators.settlementInformation).click();
    cy.wait(1000);
    cy.get(this.locators.settlementAmount).type('100');
    cy.wait(1000);
    cy.get(this.locators.remark).type('This is ok');
    cy.wait(1000);
    cy.get(this.locators.settlementTranches).click();
    cy.wait(1000);
    cy.get(this.locators.installmentAmount).type('100');
    cy.wait(1000);
    cy.get(this.locators.dueDate).click();
    cy.get('.bs-datepicker-body span').not('.disabled').not('.is-other-month').then($dates => {
      const validDates = Cypress._.filter($dates, el => {
        const day = parseInt(el.innerText);
        return !isNaN(day);
      });
      // Pick a random date from the list
      const randomIndex = Cypress._.random(0, validDates.length - 1);
      const randomDate = validDates[randomIndex];
      // Click the random date
      cy.wrap(randomDate).click();
    });
    cy.wait(1000);
    cy.get(this.locators.uploadDocument).click();
    cy.wait(1000);
    cy.get(this.locators.selectDateSettlement).select('Yes');
    cy.wait(1000);
    cy.get(this.locators.dateOfDeath).click();
    cy.wait(1000);
    cy.get('.bs-datepicker-body span').not('.disabled').not('.is-other-month').then($dates => {
      const validDates = Cypress._.filter($dates, el => {
        const day = parseInt(el.innerText);
        return !isNaN(day);
      });
      // Pick a random date from the list
      const randomIndex = Cypress._.random(0, validDates.length - 1);
      const randomDate = validDates[randomIndex];
      // Click the random date
      cy.wrap(randomDate).click();
    });
    cy.wait(2000);
    const path = '/tester.jpg'
    cy.get(':nth-child(1) > td.ng-star-inserted > .upload-btn-wrapper > .hidden-input').attachFile(path)
    cy.wait(3000);
    cy.get(':nth-child(2) > td.ng-star-inserted > .upload-btn-wrapper > .hidden-input').attachFile(path)
    cy.wait(3000);
    cy.get(this.locators.submit).click();
    cy.wait(8000);
    cy.contains('Your Settlement Request ID is').invoke('text').then((text) => {
      const id = text.match(/\d+/)[0]; // extract digits using RegEx
      cy.wrap(id).as('requestId');     // save the ID for later use
    });

  }

  SettlementTestPage_30() {
    cy.get(this.locators.ClickOnSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.requestSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnSearch).click();
    cy.wait(1000);
    cy.get('.mt-4 > .card-content').scrollTo('right');
    cy.wait(1000);
    cy.get('.pagination-count > .form-select').select('50');
    cy.wait(1000);
    let stopChecking = false;
    const maxRows = 50;
    function tryRow(index) {
      if (index > maxRows || stopChecking) return;
      const selector = `:nth-child(${index}) > :nth-child(6) > #config-button`;
      cy.get('body').then($body => {
        if (stopChecking) return;
        if ($body.find(selector).length > 0) {
          cy.log(`Trying row ${index}`);
          cy.get(selector).click({ force: true });

          cy.wait(2000); // wait for modal to appear

          // Check if "already created" message appears in full body
          cy.get('body').then($body => {
            const bodyText = $body.text().toLowerCase();

            if (
              bodyText.includes('a settlement request for this account') &&
              bodyText.includes('has already been created')
            ) {
              cy.log(`Settlement already exists for row ${index}, trying next row...`);
              cy.wait(3000).then(() => tryRow(index + 1));
            } else {
              // Check specifically for the confirmation popup in the modal
              cy.get('p').then($modal => {
                const modalText = $modal.text().toLowerCase();

                if (modalText.includes('are you sure you want to proceed with settlement request?')) {
                  cy.log('Found valid account at row ${index}. Proceeding...');
                  stopChecking = true;

                  cy.get('#confirm-dialog-okay').click();
                } else {
                  cy.log(`Modal doesn't match, moving to next row...`);
                  cy.wait(3000).then(() => tryRow(index + 1));
                }
              });
            }
          });
        } else {
          cy.log(`No button found at row ${index}, trying next`);
          cy.wait(3000).then(() => tryRow(index + 1));
        }
      });
    }
    tryRow(1);
    cy.contains('Basic Information').should('be.visible');
    cy.wait(500);
    cy.contains('Current Bucket').should('be.visible');
    cy.wait(500);
    cy.contains('Charges Outstanding').should('be.visible');
    cy.wait(500);
    cy.contains('Principal Outstanding').should('be.visible');
    cy.wait(500);
    cy.contains('Interest Outstanding').should('be.visible');
    cy.wait(500);
    cy.contains('Number of EMIs Due').should('be.visible');
    cy.wait(500);


  }


  SettlementTestPage_31() {
    cy.get(this.locators.ClickOnSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.requestSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnSearch).click();
    cy.wait(1000);
    cy.get('.mt-4 > .card-content').scrollTo('right');
    cy.wait(1000);
    cy.get('.pagination-count > .form-select').select('50');
    cy.wait(1000);
    let stopChecking = false;
    const maxRows = 50;
    function tryRow(index) {
      if (index > maxRows || stopChecking) return;
      const selector = `:nth-child(${index}) > :nth-child(6) > #config-button`;
      cy.get('body').then($body => {
        if (stopChecking) return;
        if ($body.find(selector).length > 0) {
          cy.log(`Trying row ${index}`);
          cy.get(selector).click({ force: true });

          cy.wait(2000); // wait for modal to appear

          // Check if "already created" message appears in full body
          cy.get('body').then($body => {
            const bodyText = $body.text().toLowerCase();

            if (
              bodyText.includes('a settlement request for this account') &&
              bodyText.includes('has already been created')
            ) {
              cy.log(`Settlement already exists for row ${index}, trying next row...`);
              cy.wait(3000).then(() => tryRow(index + 1));
            } else {
              // Check specifically for the confirmation popup in the modal
              cy.get('p').then($modal => {
                const modalText = $modal.text().toLowerCase();

                if (modalText.includes('are you sure you want to proceed with settlement request?')) {
                  cy.log('Found valid account at row ${index}. Proceeding...');
                  stopChecking = true;

                  cy.get('#confirm-dialog-okay').click();
                } else {
                  cy.log(`Modal doesn't match, moving to next row...`);
                  cy.wait(3000).then(() => tryRow(index + 1));
                }
              });
            }
          });
        } else {
          cy.log(`No button found at row ${index}, trying next`);
          cy.wait(3000).then(() => tryRow(index + 1));
        }
      });
    }
    tryRow(1);
    cy.get(this.locators.viewCustomerAccountDetails).click();
    cy.wait(3000);
    cy.get(this.locators.clickOnYes).click();
    cy.wait(3000);
    cy.contains('Account Details').should('be.visible');
    cy.wait(3000);

  }

  SettlementTestPage_32() {
    cy.get(this.locators.ClickOnSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.requestSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnSearch).click();
    cy.wait(1000);
    cy.get('.mt-4 > .card-content').scrollTo('right');
    cy.wait(1000);
    cy.get('.pagination-count > .form-select').select('50');
    cy.wait(1000);
    let stopChecking = false;
    const maxRows = 50;
    function tryRow(index) {
      if (index > maxRows || stopChecking) return;
      const selector = `:nth-child(${index}) > :nth-child(6) > #config-button`;
      cy.get('body').then($body => {
        if (stopChecking) return;
        if ($body.find(selector).length > 0) {
          cy.log(`Trying row ${index}`);
          cy.get(selector).click({ force: true });

          cy.wait(2000); // wait for modal to appear

          // Check if "already created" message appears in full body
          cy.get('body').then($body => {
            const bodyText = $body.text().toLowerCase();

            if (
              bodyText.includes('a settlement request for this account') &&
              bodyText.includes('has already been created')
            ) {
              cy.log(`Settlement already exists for row ${index}, trying next row...`);
              cy.wait(2000).then(() => tryRow(index + 1));
            } else {
              // Check specifically for the confirmation popup in the modal
              cy.get('p').then($modal => {
                const modalText = $modal.text().toLowerCase();

                if (modalText.includes('are you sure you want to proceed with settlement request?')) {
                  cy.log('Found valid account at row ${index}. Proceeding...');
                  stopChecking = true;

                  cy.get('#confirm-dialog-okay').click();
                } else {
                  cy.log(`Modal doesn't match, moving to next row...`);
                  cy.wait(2000).then(() => tryRow(index + 1));
                }
              });
            }
          });
        } else {
          cy.log(`No button found at row ${index}, trying next`);
          cy.wait(2000).then(() => tryRow(index + 1));
        }
      });
    }
    tryRow(1);
    cy.get(this.locators.settlementInformation).click();
    cy.wait(1000);
    cy.contains('Number of Installments:').should('be.visible');
    cy.wait(1000);
    cy.contains('Settlement Amount (Rs):').should('be.visible');
    cy.wait(1000);
    cy.contains('Settlement Date for Dues Calculation:').should('be.visible');
    cy.wait(1000);

  }

  SettlementTestPage_33() {
    cy.get(this.locators.ClickOnSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.requestSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnSearch).click();
    cy.wait(1000);
    cy.get('.mt-4 > .card-content').scrollTo('right');
    cy.wait(1000);
    cy.get('.pagination-count > .form-select').select('50');
    cy.wait(1000);
    let stopChecking = false;
    const maxRows = 50;
    function tryRow(index) {
      if (index > maxRows || stopChecking) return;
      const selector = `:nth-child(${index}) > :nth-child(6) > #config-button`;
      cy.get('body').then($body => {
        if (stopChecking) return;
        if ($body.find(selector).length > 0) {
          cy.log(`Trying row ${index}`);
          cy.get(selector).click({ force: true });

          cy.wait(2000); // wait for modal to appear

          // Check if "already created" message appears in full body
          cy.get('body').then($body => {
            const bodyText = $body.text().toLowerCase();

            if (
              bodyText.includes('a settlement request for this account') &&
              bodyText.includes('has already been created')
            ) {
              cy.log(`Settlement already exists for row ${index}, trying next row...`);
              cy.wait(2000).then(() => tryRow(index + 1));
            } else {
              // Check specifically for the confirmation popup in the modal
              cy.get('p').then($modal => {
                const modalText = $modal.text().toLowerCase();

                if (modalText.includes('are you sure you want to proceed with settlement request?')) {
                  cy.log('Found valid account at row ${index}. Proceeding...');
                  stopChecking = true;

                  cy.get('#confirm-dialog-okay').click();
                } else {
                  cy.log(`Modal doesn't match, moving to next row...`);
                  cy.wait(2000).then(() => tryRow(index + 1));
                }
              });
            }
          });
        } else {
          cy.log(`No button found at row ${index}, trying next`);
          cy.wait(2000).then(() => tryRow(index + 1));
        }
      });
    }
    tryRow(1);
    cy.get(this.locators.settlementInformation).click();
    cy.wait(1000);
    cy.contains('Waiver Details').should('be.visible');
    cy.wait(1000);
    cy.contains('Charge Type').should('be.visible');
    cy.wait(1000);
    cy.contains('Amount As Per CBS (Rs)').should('be.visible');
    cy.wait(1000);
    cy.contains('Apportionment Amount (Rs)').should('be.visible');
    cy.wait(1000);

  }

  SettlementTestPage_34() {
    cy.get(this.locators.ClickOnSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.requestSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnSearch).click();
    cy.wait(1000);
    cy.get('.mt-4 > .card-content').scrollTo('right');
    cy.wait(1000);
    cy.get('.pagination-count > .form-select').select('50');
    cy.wait(1000);
    let stopChecking = false;
    const maxRows = 50;
    function tryRow(index) {
      if (index > maxRows || stopChecking) return;
      const selector = `:nth-child(${index}) > :nth-child(6) > #config-button`;
      cy.get('body').then($body => {
        if (stopChecking) return;
        if ($body.find(selector).length > 0) {
          cy.log(`Trying row ${index}`);
          cy.get(selector).click({ force: true });

          cy.wait(2000); // wait for modal to appear

          // Check if "already created" message appears in full body
          cy.get('body').then($body => {
            const bodyText = $body.text().toLowerCase();

            if (
              bodyText.includes('a settlement request for this account') &&
              bodyText.includes('has already been created')
            ) {
              cy.log(`Settlement already exists for row ${index}, trying next row...`);
              cy.wait(2000).then(() => tryRow(index + 1));
            } else {
              // Check specifically for the confirmation popup in the modal
              cy.get('p').then($modal => {
                const modalText = $modal.text().toLowerCase();

                if (modalText.includes('are you sure you want to proceed with settlement request?')) {
                  cy.log('Found valid account at row ${index}. Proceeding...');
                  stopChecking = true;

                  cy.get('#confirm-dialog-okay').click();
                } else {
                  cy.log(`Modal doesn't match, moving to next row...`);
                  cy.wait(2000).then(() => tryRow(index + 1));
                }
              });
            }
          });
        } else {
          cy.log(`No button found at row ${index}, trying next`);
          cy.wait(2000).then(() => tryRow(index + 1));
        }
      });
    }
    tryRow(1);
    cy.get(this.locators.settlementInformation).click();
    cy.wait(1000);
    cy.get('.inner-layout-container').scrollTo('bottom');
    cy.wait(1000);
    cy.contains('Settlement Remarks:').should('be.visible');
    cy.wait(1000);

  }

  SettlementTestPage_35() {
    cy.get(this.locators.ClickOnSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.requestSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnSearch).click();
    cy.wait(1000);
    cy.get('.mt-4 > .card-content').scrollTo('right');
    cy.wait(1000);
    cy.get('.pagination-count > .form-select').select('50');
    cy.wait(1000);
    let stopChecking = false;
    const maxRows = 50;
    function tryRow(index) {
      if (index > maxRows || stopChecking) return;
      const selector = `:nth-child(${index}) > :nth-child(6) > #config-button`;
      cy.get('body').then($body => {
        if (stopChecking) return;
        if ($body.find(selector).length > 0) {
          cy.log(`Trying row ${index}`);
          cy.get(selector).click({ force: true });

          cy.wait(2000); // wait for modal to appear

          // Check if "already created" message appears in full body
          cy.get('body').then($body => {
            const bodyText = $body.text().toLowerCase();

            if (
              bodyText.includes('a settlement request for this account') &&
              bodyText.includes('has already been created')
            ) {
              cy.log(`Settlement already exists for row ${index}, trying next row...`);
              cy.wait(2000).then(() => tryRow(index + 1));
            } else {
              // Check specifically for the confirmation popup in the modal
              cy.get('p').then($modal => {
                const modalText = $modal.text().toLowerCase();

                if (modalText.includes('are you sure you want to proceed with settlement request?')) {
                  cy.log('Found valid account at row ${index}. Proceeding...');
                  stopChecking = true;

                  cy.get('#confirm-dialog-okay').click();
                } else {
                  cy.log(`Modal doesn't match, moving to next row...`);
                  cy.wait(2000).then(() => tryRow(index + 1));
                }
              });
            }
          });
        } else {
          cy.log(`No button found at row ${index}, trying next`);
          cy.wait(2000).then(() => tryRow(index + 1));
        }
      });
    }
    tryRow(1);
    cy.get(this.locators.settlementTranches).click();
    cy.wait(1000);
    cy.get('.inner-layout-container').scrollTo('bottom');
    cy.wait(1000);
    cy.contains('One Time Settlement (Preferred)').should('be.visible');
    cy.wait(1000);

  }

  SettlementTestPage_36() {
    cy.get(this.locators.ClickOnSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.requestSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnSearch).click();
    cy.wait(1000);
    cy.get('.mt-4 > .card-content').scrollTo('right');
    cy.wait(1000);
    cy.get('.pagination-count > .form-select').select('50');
    cy.wait(1000);
    let stopChecking = false;
    const maxRows = 50;
    function tryRow(index) {
      if (index > maxRows || stopChecking) return;
      const selector = `:nth-child(${index}) > :nth-child(6) > #config-button`;
      cy.get('body').then($body => {
        if (stopChecking) return;
        if ($body.find(selector).length > 0) {
          cy.log(`Trying row ${index}`);
          cy.get(selector).click({ force: true });

          cy.wait(2000); // wait for modal to appear

          // Check if "already created" message appears in full body
          cy.get('body').then($body => {
            const bodyText = $body.text().toLowerCase();

            if (
              bodyText.includes('a settlement request for this account') &&
              bodyText.includes('has already been created')
            ) {
              cy.log(`Settlement already exists for row ${index}, trying next row...`);
              cy.wait(2000).then(() => tryRow(index + 1));
            } else {
              // Check specifically for the confirmation popup in the modal
              cy.get('p').then($modal => {
                const modalText = $modal.text().toLowerCase();

                if (modalText.includes('are you sure you want to proceed with settlement request?')) {
                  cy.log('Found valid account at row ${index}. Proceeding...');
                  stopChecking = true;

                  cy.get('#confirm-dialog-okay').click();
                } else {
                  cy.log(`Modal doesn't match, moving to next row...`);
                  cy.wait(2000).then(() => tryRow(index + 1));
                }
              });
            }
          });
        } else {
          cy.log(`No button found at row ${index}, trying next`);
          cy.wait(2000).then(() => tryRow(index + 1));
        }
      });
    }
    tryRow(1);
    cy.get(this.locators.settlementInformation).click();
    cy.wait(1000);
    cy.get(this.locators.numberOfInstallment).select('2');
    cy.wait(1000);
    cy.get(this.locators.settlementTranches).click();
    cy.wait(1000);
    cy.get('.inner-layout-container').scrollTo('bottom');
    cy.wait(1000);
    cy.contains('Staggered Settlement (Maximum 3').should('be.visible');
    cy.wait(1000);

  }

  SettlementTestPage_37() {
    cy.get(this.locators.ClickOnSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.requestSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnSearch).click();
    cy.wait(1000);
    cy.get('.mt-4 > .card-content').scrollTo('right');
    cy.wait(1000);
    cy.get('.pagination-count > .form-select').select('50');
    cy.wait(1000);
    let stopChecking = false;
    const maxRows = 50;
    function tryRow(index) {
      if (index > maxRows || stopChecking) return;
      const selector = `:nth-child(${index}) > :nth-child(6) > #config-button`;
      cy.get('body').then($body => {
        if (stopChecking) return;
        if ($body.find(selector).length > 0) {
          cy.log(`Trying row ${index}`);
          cy.get(selector).click({ force: true });

          cy.wait(2000); // wait for modal to appear

          // Check if "already created" message appears in full body
          cy.get('body').then($body => {
            const bodyText = $body.text().toLowerCase();

            if (
              bodyText.includes('a settlement request for this account') &&
              bodyText.includes('has already been created')
            ) {
              cy.log(`Settlement already exists for row ${index}, trying next row...`);
              cy.wait(2000).then(() => tryRow(index + 1));
            } else {
              // Check specifically for the confirmation popup in the modal
              cy.get('p').then($modal => {
                const modalText = $modal.text().toLowerCase();

                if (modalText.includes('are you sure you want to proceed with settlement request?')) {
                  cy.log('Found valid account at row ${index}. Proceeding...');
                  stopChecking = true;

                  cy.get('#confirm-dialog-okay').click();
                } else {
                  cy.log(`Modal doesn't match, moving to next row...`);
                  cy.wait(2000).then(() => tryRow(index + 1));
                }
              });
            }
          });
        } else {
          cy.log(`No button found at row ${index}, trying next`);
          cy.wait(2000).then(() => tryRow(index + 1));
        }
      });
    }
    tryRow(1);
    cy.get(this.locators.settlementInformation).click();
    cy.wait(1000);
    cy.get(this.locators.numberOfInstallment).select('2');
    cy.wait(1000);
    cy.get(this.locators.settlementTranches).click();
    cy.wait(1000);
    cy.get('.inner-layout-container').scrollTo('bottom');
    cy.wait(1000);
    cy.contains('Staggered Settlement (Maximum 3').should('be.visible');
    cy.wait(1000);
    cy.contains('S.No').should('be.visible');
    cy.wait(1000);
    cy.contains('1').should('be.visible');
    cy.wait(1000);
    cy.contains('2').should('be.visible');
    cy.wait(1000);

  }

  SettlementTestPage_38() {
    cy.get(this.locators.ClickOnSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.requestSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnSearch).click();
    cy.wait(1000);
    cy.get('.mt-4 > .card-content').scrollTo('right');
    cy.wait(1000);
    cy.get('.pagination-count > .form-select').select('50');
    cy.wait(1000);
    let stopChecking = false;
    const maxRows = 50;
    function tryRow(index) {
      if (index > maxRows || stopChecking) return;
      const selector = `:nth-child(${index}) > :nth-child(6) > #config-button`;
      cy.get('body').then($body => {
        if (stopChecking) return;
        if ($body.find(selector).length > 0) {
          cy.log(`Trying row ${index}`);
          cy.get(selector).click({ force: true });

          cy.wait(2000); // wait for modal to appear

          // Check if "already created" message appears in full body
          cy.get('body').then($body => {
            const bodyText = $body.text().toLowerCase();

            if (
              bodyText.includes('a settlement request for this account') &&
              bodyText.includes('has already been created')
            ) {
              cy.log(`Settlement already exists for row ${index}, trying next row...`);
              cy.wait(2000).then(() => tryRow(index + 1));
            } else {
              // Check specifically for the confirmation popup in the modal
              cy.get('p').then($modal => {
                const modalText = $modal.text().toLowerCase();

                if (modalText.includes('are you sure you want to proceed with settlement request?')) {
                  cy.log('Found valid account at row ${index}. Proceeding...');
                  stopChecking = true;

                  cy.get('#confirm-dialog-okay').click();
                } else {
                  cy.log(`Modal doesn't match, moving to next row...`);
                  cy.wait(2000).then(() => tryRow(index + 1));
                }
              });
            }
          });
        } else {
          cy.log(`No button found at row ${index}, trying next`);
          cy.wait(2000).then(() => tryRow(index + 1));
        }
      });
    }
    tryRow(1);
    cy.get(this.locators.settlementInformation).click();
    cy.wait(1000);
    cy.get(this.locators.numberOfInstallment).select('2');
    cy.wait(1000);
    cy.get(this.locators.settlementTranches).click();
    cy.wait(1000);
    cy.get('.inner-layout-container').scrollTo('bottom');
    cy.wait(1000);
    cy.contains('Staggered Settlement (Maximum 3').should('be.visible');
    cy.wait(1000);
    cy.contains('S.No').should('be.visible');
    cy.wait(1000);
    cy.contains('Installment Amount (₹)').should('be.visible');
    cy.wait(1000);
    cy.contains('Installment Due Date').should('be.visible');
    cy.wait(1000);

  }

  SettlementTestPage_39() {
    cy.get(this.locators.ClickOnSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.requestSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnSearch).click();
    cy.wait(1000);
    cy.get('.mt-4 > .card-content').scrollTo('right');
    cy.wait(1000);
    cy.get('.pagination-count > .form-select').select('50');
    cy.wait(1000);
    let stopChecking = false;
    const maxRows = 50;
    function tryRow(index) {
      if (index > maxRows || stopChecking) return;
      const selector = `:nth-child(${index}) > :nth-child(6) > #config-button`;
      cy.get('body').then($body => {
        if (stopChecking) return;
        if ($body.find(selector).length > 0) {
          cy.log(`Trying row ${index}`);
          cy.get(selector).click({ force: true });

          cy.wait(2000); // wait for modal to appear

          // Check if "already created" message appears in full body
          cy.get('body').then($body => {
            const bodyText = $body.text().toLowerCase();

            if (
              bodyText.includes('a settlement request for this account') &&
              bodyText.includes('has already been created')
            ) {
              cy.log(`Settlement already exists for row ${index}, trying next row...`);
              cy.wait(2000).then(() => tryRow(index + 1));
            } else {
              // Check specifically for the confirmation popup in the modal
              cy.get('p').then($modal => {
                const modalText = $modal.text().toLowerCase();

                if (modalText.includes('are you sure you want to proceed with settlement request?')) {
                  cy.log('Found valid account at row ${index}. Proceeding...');
                  stopChecking = true;

                  cy.get('#confirm-dialog-okay').click();
                } else {
                  cy.log(`Modal doesn't match, moving to next row...`);
                  cy.wait(2000).then(() => tryRow(index + 1));
                }
              });
            }
          });
        } else {
          cy.log(`No button found at row ${index}, trying next`);
          cy.wait(2000).then(() => tryRow(index + 1));
        }
      });
    }
    tryRow(1);
    cy.get(this.locators.settlementInformation).click();
    cy.wait(1000);
    cy.get(this.locators.numberOfInstallment).select('2');
    cy.wait(1000);
    cy.get(this.locators.settlementTranches).click();
    cy.wait(1000);
    cy.get('.inner-layout-container').scrollTo('bottom');
    cy.wait(1000);
    cy.contains('Staggered Settlement (Maximum 3').should('be.visible');
    cy.wait(1000);
    cy.get(this.locators.dueDate).click();
    cy.get('.bs-datepicker-body span').not('.disabled').not('.is-other-month').then($dates => {
      const validDates = Cypress._.filter($dates, el => {
        const day = parseInt(el.innerText);
        return !isNaN(day);
      });
      // Pick a random date from the list
      const randomIndex = Cypress._.random(0, validDates.length - 1);
      const randomDate = validDates[randomIndex];
      // Click the random date
      cy.wrap(randomDate).click();
    });
    cy.wait(1000);
    cy.get(this.locators.dueDateOne).click();
    cy.get('.bs-datepicker-body span').not('.disabled').not('.is-other-month').then($dates => {
      const validDates = Cypress._.filter($dates, el => {
        const day = parseInt(el.innerText);
        return !isNaN(day);
      });
      // Pick a random date from the list
      const randomIndex = Cypress._.random(0, validDates.length - 1);
      const randomDate = validDates[randomIndex];
      // Click the random date
      cy.wrap(randomDate).click();
    });
    cy.wait(1000);


  }

  SettlementTestPage_40() {
    cy.get(this.locators.ClickOnSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.requestSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnSearch).click();
    cy.wait(1000);
    cy.get('.mt-4 > .card-content').scrollTo('right');
    cy.wait(1000);
    cy.get('.pagination-count > .form-select').select('50');
    cy.wait(1000);
    let stopChecking = false;
    const maxRows = 50;
    function tryRow(index) {
      if (index > maxRows || stopChecking) return;
      const selector = `:nth-child(${index}) > :nth-child(6) > #config-button`;
      cy.get('body').then($body => {
        if (stopChecking) return;
        if ($body.find(selector).length > 0) {
          cy.log(`Trying row ${index}`);
          cy.get(selector).click({ force: true });

          cy.wait(3000); // wait for modal to appear

          // Check if "already created" message appears in full body
          cy.get('body').then($body => {
            const bodyText = $body.text().toLowerCase();

            if (
              bodyText.includes('a settlement request for this account') &&
              bodyText.includes('has already been created')
            ) {
              cy.log(`Settlement already exists for row ${index}, trying next row...`);
              cy.wait(3000).then(() => tryRow(index + 1));
            } else {
              // Check specifically for the confirmation popup in the modal
              cy.get('p').then($modal => {
                const modalText = $modal.text().toLowerCase();

                if (modalText.includes('are you sure you want to proceed with settlement request?')) {
                  cy.log('Found valid account at row ${index}. Proceeding...');
                  stopChecking = true;

                  cy.get('#confirm-dialog-okay').click();
                } else {
                  cy.log(`Modal doesn't match, moving to next row...`);
                  cy.wait(3000).then(() => tryRow(index + 1));
                }
              });
            }
          });
        } else {
          cy.log(`No button found at row ${index}, trying next`);
          cy.wait(3000).then(() => tryRow(index + 1));
        }
      });
    }
    tryRow(1);
    cy.get(this.locators.settlementInformation).click();
    cy.wait(1000);
    cy.get(this.locators.settlementAmount).type('100');
    cy.wait(1000);
    cy.get(this.locators.remark).type('This is ok');
    cy.wait(1000);
    cy.get(this.locators.settlementTranches).click();
    cy.wait(1000);
    cy.get(this.locators.installmentAmount).type('100');
    cy.wait(1000);
    cy.get(this.locators.dueDate).click();
    cy.get('.bs-datepicker-body span').not('.disabled').not('.is-other-month').then($dates => {
      const validDates = Cypress._.filter($dates, el => {
        const day = parseInt(el.innerText);
        return !isNaN(day);
      });
      // Pick a random date from the list
      const randomIndex = Cypress._.random(0, validDates.length - 1);
      const randomDate = validDates[randomIndex];
      // Click the random date
      cy.wrap(randomDate).click();
    });
    cy.wait(1000);
    cy.get(this.locators.uploadDocument).click();
    cy.wait(1000);
    cy.get(this.locators.selectDateSettlement).select('Yes');
    cy.wait(1000);
  }

  SettlementTestPage_41() {
    cy.get(this.locators.ClickOnSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.requestSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnSearch).click();
    cy.wait(1000);
    cy.get('.mt-4 > .card-content').scrollTo('right');
    cy.wait(1000);
    cy.get('.pagination-count > .form-select').select('50');
    cy.wait(1000);
    let stopChecking = false;
    const maxRows = 50;
    function tryRow(index) {
      if (index > maxRows || stopChecking) return;
      const selector = `:nth-child(${index}) > :nth-child(6) > #config-button`;
      cy.get('body').then($body => {
        if (stopChecking) return;
        if ($body.find(selector).length > 0) {
          cy.log(`Trying row ${index}`);
          cy.get(selector).click({ force: true });

          cy.wait(3000); // wait for modal to appear

          // Check if "already created" message appears in full body
          cy.get('body').then($body => {
            const bodyText = $body.text().toLowerCase();

            if (
              bodyText.includes('a settlement request for this account') &&
              bodyText.includes('has already been created')
            ) {
              cy.log(`Settlement already exists for row ${index}, trying next row...`);
              cy.wait(3000).then(() => tryRow(index + 1));
            } else {
              // Check specifically for the confirmation popup in the modal
              cy.get('p').then($modal => {
                const modalText = $modal.text().toLowerCase();

                if (modalText.includes('are you sure you want to proceed with settlement request?')) {
                  cy.log('Found valid account at row ${index}. Proceeding...');
                  stopChecking = true;

                  cy.get('#confirm-dialog-okay').click();
                } else {
                  cy.log(`Modal doesn't match, moving to next row...`);
                  cy.wait(3000).then(() => tryRow(index + 1));
                }
              });
            }
          });
        } else {
          cy.log(`No button found at row ${index}, trying next`);
          cy.wait(3000).then(() => tryRow(index + 1));
        }
      });
    }
    tryRow(1);
    cy.get(this.locators.settlementInformation).click();
    cy.wait(1000);
    cy.get(this.locators.settlementAmount).type('100');
    cy.wait(1000);
    cy.get(this.locators.remark).type('This is ok');
    cy.wait(1000);
    cy.get(this.locators.settlementTranches).click();
    cy.wait(1000);
    cy.get(this.locators.installmentAmount).type('100');
    cy.wait(1000);
    cy.get(this.locators.dueDate).click();
    cy.get('.bs-datepicker-body span').not('.disabled').not('.is-other-month').then($dates => {
      const validDates = Cypress._.filter($dates, el => {
        const day = parseInt(el.innerText);
        return !isNaN(day);
      });
      // Pick a random date from the list
      const randomIndex = Cypress._.random(0, validDates.length - 1);
      const randomDate = validDates[randomIndex];
      // Click the random date
      cy.wrap(randomDate).click();
    });
    cy.wait(1000);
    cy.get(this.locators.uploadDocument).click();
    cy.wait(1000);
    cy.get(this.locators.selectDateSettlement).select('Yes');
    cy.wait(1000);
    cy.contains('Request Letter*').should('be.visible');
    cy.wait(1000);
    cy.contains('Death Certificate*').should('be.visible');
  }

  SettlementTestPage_42() {
    cy.get(this.locators.ClickOnSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.requestSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnSearch).click();
    cy.wait(1000);
    cy.get('.mt-4 > .card-content').scrollTo('right');
    cy.wait(1000);
    cy.get('.pagination-count > .form-select').select('50');
    cy.wait(1000);
    let stopChecking = false;
    const maxRows = 50;
    function tryRow(index) {
      if (index > maxRows || stopChecking) return;
      const selector = `:nth-child(${index}) > :nth-child(6) > #config-button`;
      cy.get('body').then($body => {
        if (stopChecking) return;
        if ($body.find(selector).length > 0) {
          cy.log(`Trying row ${index}`);
          cy.get(selector).click({ force: true });

          cy.wait(3000); // wait for modal to appear

          // Check if "already created" message appears in full body
          cy.get('body').then($body => {
            const bodyText = $body.text().toLowerCase();

            if (
              bodyText.includes('a settlement request for this account') &&
              bodyText.includes('has already been created')
            ) {
              cy.log(`Settlement already exists for row ${index}, trying next row...`);
              cy.wait(3000).then(() => tryRow(index + 1));
            } else {
              // Check specifically for the confirmation popup in the modal
              cy.get('p').then($modal => {
                const modalText = $modal.text().toLowerCase();

                if (modalText.includes('are you sure you want to proceed with settlement request?')) {
                  cy.log('Found valid account at row ${index}. Proceeding...');
                  stopChecking = true;

                  cy.get('#confirm-dialog-okay').click();
                } else {
                  cy.log(`Modal doesn't match, moving to next row...`);
                  cy.wait(3000).then(() => tryRow(index + 1));
                }
              });
            }
          });
        } else {
          cy.log(`No button found at row ${index}, trying next`);
          cy.wait(3000).then(() => tryRow(index + 1));
        }
      });
    }
    tryRow(1);
    cy.get(this.locators.settlementInformation).click();
    cy.wait(1000);
    cy.get(this.locators.settlementAmount).type('100');
    cy.wait(1000);
    cy.get(this.locators.remark).type('This is ok');
    cy.wait(1000);
    cy.get(this.locators.settlementTranches).click();
    cy.wait(1000);
    cy.get(this.locators.installmentAmount).type('100');
    cy.wait(1000);
    cy.get(this.locators.dueDate).click();
    cy.get('.bs-datepicker-body span').not('.disabled').not('.is-other-month').then($dates => {
      const validDates = Cypress._.filter($dates, el => {
        const day = parseInt(el.innerText);
        return !isNaN(day);
      });
      // Pick a random date from the list
      const randomIndex = Cypress._.random(0, validDates.length - 1);
      const randomDate = validDates[randomIndex];
      // Click the random date
      cy.wrap(randomDate).click();
    });
    cy.wait(1000);
    cy.get(this.locators.uploadDocument).click();
    cy.wait(1000);
    const path = '/tester.jpg'
    cy.get(':nth-child(1) > td.ng-star-inserted > .upload-btn-wrapper > .hidden-input').attachFile(path)
    cy.wait(2000);
  }


  SettlementTestPage_43() {
    cy.get(this.locators.ClickOnSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.requestSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnSearch).click();
    cy.wait(1000);
    cy.get('.mt-4 > .card-content').scrollTo('right');
    cy.wait(1000);
    cy.get('.pagination-count > .form-select').select('50');
    cy.wait(1000);
    let stopChecking = false;
    const maxRows = 50;
    function tryRow(index) {
      if (index > maxRows || stopChecking) return;
      const selector = `:nth-child(${index}) > :nth-child(6) > #config-button`;
      cy.get('body').then($body => {
        if (stopChecking) return;
        if ($body.find(selector).length > 0) {
          cy.log(`Trying row ${index}`);
          cy.get(selector).click({ force: true });

          cy.wait(3000); // wait for modal to appear

          // Check if "already created" message appears in full body
          cy.get('body').then($body => {
            const bodyText = $body.text().toLowerCase();

            if (
              bodyText.includes('a settlement request for this account') &&
              bodyText.includes('has already been created')
            ) {
              cy.log(`Settlement already exists for row ${index}, trying next row...`);
              cy.wait(3000).then(() => tryRow(index + 1));
            } else {
              // Check specifically for the confirmation popup in the modal
              cy.get('p').then($modal => {
                const modalText = $modal.text().toLowerCase();

                if (modalText.includes('are you sure you want to proceed with settlement request?')) {
                  cy.log('Found valid account at row ${index}. Proceeding...');
                  stopChecking = true;

                  cy.get('#confirm-dialog-okay').click();
                } else {
                  cy.log(`Modal doesn't match, moving to next row...`);
                  cy.wait(3000).then(() => tryRow(index + 1));
                }
              });
            }
          });
        } else {
          cy.log(`No button found at row ${index}, trying next`);
          cy.wait(3000).then(() => tryRow(index + 1));
        }
      });
    }
    tryRow(1);
    cy.get(this.locators.settlementInformation).click();
    cy.wait(1000);
    cy.get(this.locators.settlementAmount).type('100');
    cy.wait(1000);
    cy.get(this.locators.remark).type('This is ok');
    cy.wait(1000);
    cy.get(this.locators.settlementTranches).click();
    cy.wait(1000);
    cy.get(this.locators.installmentAmount).type('100');
    cy.wait(1000);
    cy.get(this.locators.dueDate).click();
    cy.get('.bs-datepicker-body span').not('.disabled').not('.is-other-month').then($dates => {
      const validDates = Cypress._.filter($dates, el => {
        const day = parseInt(el.innerText);
        return !isNaN(day);
      });
      // Pick a random date from the list
      const randomIndex = Cypress._.random(0, validDates.length - 1);
      const randomDate = validDates[randomIndex];
      // Click the random date
      cy.wrap(randomDate).click();
    });
    cy.wait(1000);
    cy.get(this.locators.uploadDocument).click();
    cy.wait(1000);
    const path = '/tester.jpg'
    cy.get(':nth-child(1) > td.ng-star-inserted > .upload-btn-wrapper > .hidden-input').attachFile(path)
    cy.wait(3000);
    cy.get(this.locators.submit).click();
    cy.wait(8000);
    cy.contains('Your Settlement Request ID is').invoke('text').then((text) => {
      const id = text.match(/\d+/)[0]; // extract digits using RegEx
      cy.wrap(id).as('requestId');     // save the ID for later use
    });

  }

  SettlementTestPage_44() {
    cy.get(this.locators.ClickOnSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.requestSettlement).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnSearch).click();
    cy.wait(1000);
    cy.get('.mt-4 > .card-content').scrollTo('right');
    cy.wait(1000);
    cy.get('.pagination-count > .form-select').select('50');
    cy.wait(1000);
    let stopChecking = false;
    const maxRows = 50;
    function tryRow(index) {
      if (index > maxRows || stopChecking) return;
      const selector = `:nth-child(${index}) > :nth-child(6) > #config-button`;
      cy.get('body').then($body => {
        if (stopChecking) return;
        if ($body.find(selector).length > 0) {
          cy.log(`Trying row ${index}`);
          cy.get(selector).click({ force: true });

          cy.wait(3000); // wait for modal to appear

          // Check if "already created" message appears in full body
          cy.get('body').then($body => {
            const bodyText = $body.text().toLowerCase();

            if (
              bodyText.includes('a settlement request for this account') &&
              bodyText.includes('has already been created')
            ) {
              cy.log(`Settlement already exists for row ${index}, trying next row...`);
              cy.wait(3000).then(() => tryRow(index + 1));
            } else {
              // Check specifically for the confirmation popup in the modal
              cy.get('p').then($modal => {
                const modalText = $modal.text().toLowerCase();

                if (modalText.includes('are you sure you want to proceed with settlement request?')) {
                  cy.log('Found valid account at row ${index}. Proceeding...');
                  stopChecking = true;

                  cy.get('#confirm-dialog-okay').click();
                } else {
                  cy.log(`Modal doesn't match, moving to next row...`);
                  cy.wait(3000).then(() => tryRow(index + 1));
                }
              });
            }
          });
        } else {
          cy.log(`No button found at row ${index}, trying next`);
          cy.wait(3000).then(() => tryRow(index + 1));
        }
      });
    }
    tryRow(1);
    cy.get(this.locators.settlementInformation).click();
    cy.wait(1000);
    cy.get(this.locators.settlementAmount).type('100');
    cy.wait(1000);
    cy.get(this.locators.remark).type('This is ok');
    cy.wait(1000);
    cy.get(this.locators.settlementTranches).click();
    cy.wait(1000);
    cy.get(this.locators.installmentAmount).type('100');
    cy.wait(1000);
    cy.get(this.locators.dueDate).click();
    cy.get('.bs-datepicker-body span').not('.disabled').not('.is-other-month').then($dates => {
      const validDates = Cypress._.filter($dates, el => {
        const day = parseInt(el.innerText);
        return !isNaN(day);
      });
      // Pick a random date from the list
      const randomIndex = Cypress._.random(0, validDates.length - 1);
      const randomDate = validDates[randomIndex];
      // Click the random date
      cy.wrap(randomDate).click();
    });
    cy.wait(1000);
    cy.get(this.locators.uploadDocument).click();
    cy.wait(1000);
    const path = '/tester.jpg'
    cy.get(':nth-child(1) > td.ng-star-inserted > .upload-btn-wrapper > .hidden-input').attachFile(path)
    cy.wait(3000);
    cy.get(this.locators.submit).click();
    cy.wait(8000);
    cy.contains('Your Settlement Request ID is').invoke('text').then((text) => {
      const id = text.match(/\d+/)[0];
      cy.wrap(id).as('requestId');
      cy.writeFile('cypress/fixtures/requestId.json', { requestId: id });
    });
    cy.wait(4000);
    cy.get(this.locators.myRequest).click();
    cy.wait(4000);
    cy.get(this.locators.underevaluation).click();
    cy.wait(1000);
    cy.get('.pagination-count > .form-select').select('50');
    cy.wait(1000);
    cy.get('div.card-content.overflow-auto').scrollTo('bottom');
    cy.wait(1000);
    cy.get('@requestId').then((requestId) => {
      // Find the <a> tag in the table with the exact request ID and click it
      cy.get('table').contains('a', requestId).scrollIntoView().should('be.visible').click({ force: true });
    });
  }

  SettlementTestPage_45() {
    cy.readFile('cypress/fixtures/requestId.json').then((data) => {
      const requestId = data.requestId;
      cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.myActionQueue).click();
      cy.wait(4000);
      cy.get(this.locators.clickOnUnderEvaluation).click();
      cy.wait(1000);
      cy.get('.pagination-count > .form-select').select('50');
      cy.wait(1000);
      cy.get('div.card-content.overflow-auto').scrollTo('bottom');
      cy.wait(1000);
      cy.get('table')
        .contains('a', requestId)
        .scrollIntoView()
        .should('be.visible')
        .parents('tr')
        .find('input[type="checkbox"]')
        .check({ force: true });
      cy.wait(1000);
      cy.get('table').contains('a', requestId).scrollIntoView().should('be.visible').click({ force: true });
      cy.wait(1000);
      cy.contains('Settlement').should('be.visible');
      cy.wait(1000);
      cy.get(this.locators.clickOnUpdateButton).click();
      cy.wait(1000);
      cy.get(this.locators.action).select('Recommend');
      cy.wait(1000);
      cy.get(this.locators.addRemark).type('This is ok');
      cy.wait(1000);
      cy.get(this.locators.clickOnSubmit).click();
      cy.wait(3000);
      cy.get('').contains('Status updated for selected account(s) successfully.').should('be.visible');
      cy.wait(3000);
    });

  }

  SettlementTestPage_46() {
    cy.readFile('cypress/fixtures/requestId.json').then((data) => {
      const requestId = data.requestId;
      cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.myActionQueue).click();
      cy.wait(4000);
      cy.get(this.locators.clickOnUnderEvaluation).click();
      cy.wait(1000);
      cy.get('.pagination-count > .form-select').select('50');
      cy.wait(1000);
      cy.get('div.card-content.overflow-auto').scrollTo('bottom');
      cy.wait(1000);
      cy.get('table')
        .contains('a', requestId)
        .scrollIntoView()
        .should('be.visible')
        .parents('tr')
        .find('input[type="checkbox"]')
        .check({ force: true });
      cy.wait(1000);
      cy.get('table').contains('a', requestId).scrollIntoView().should('be.visible').click({ force: true });
      cy.wait(1000);
      cy.contains('Settlement').should('be.visible');
      cy.wait(1000);
      // cy.get(this.locators.clickOnUpdateButton).click();
      // cy.wait(1000);
      // cy.get(this.locators.action).select('Recommend');
      // cy.wait(1000);
      // cy.get(this.locators.addRemark).type('This is ok');
      // cy.wait(1000);
      // cy.get(this.locators.clickOnSubmit).click();
      // cy.wait(3000);
      // cy.get('').contains('Status updated for selected account(s) successfully.').should('be.visible');
      // cy.wait(3000);
      cy.get(this.locators.uploadDocument).click();
      cy.wait(1000);
      cy.get(this.locators.clickOnRequestLetterLink).click();
      cy.wait(1000);

    });

  }

  SettlementTestPage_47() {
    cy.readFile('cypress/fixtures/requestId.json').then((data) => {
      const requestId = data.requestId;
      cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.myActionQueue).click();
      cy.wait(4000);
      cy.get(this.locators.clickOnUnderEvaluation).click();
      cy.wait(1000);
      cy.get('.pagination-count > .form-select').select('50');
      cy.wait(1000);
      cy.get('div.card-content.overflow-auto').scrollTo('bottom');
      cy.wait(1000);
      cy.get('table')
        .contains('a', requestId)
        .scrollIntoView()
        .should('be.visible')
        .parents('tr')
        .find('input[type="checkbox"]')
        .check({ force: true });
      cy.wait(1000);
      cy.get('table').contains('a', requestId).scrollIntoView().should('be.visible').click({ force: true });
      cy.wait(1000);
      cy.contains('Settlement').should('be.visible');
      cy.wait(1000);
      cy.get(this.locators.clickOnUpdateButton).click();
      cy.wait(1000);
      cy.get(this.locators.action).select('Deny');
      cy.wait(1000);
      //cy.get(this.locators.addRemark).type('This is ok');
      cy.wait(1000);
      cy.get(this.locators.clickOnSubmit).click();
      cy.wait(2000);
      cy.get('.ng-trigger').contains('Remarks are required.').should('be.visible');
      cy.wait(3000);
    });

  }

  SettlementTestPage_48() {
    cy.readFile('cypress/fixtures/requestId.json').then((data) => {
      const requestId = data.requestId;
      cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.myActionQueue).click();
      cy.wait(4000);
      cy.get(this.locators.clickOnUnderEvaluation).click();
      cy.wait(1000);
      cy.get('.pagination-count > .form-select').select('50');
      cy.wait(1000);
      cy.get('div.card-content.overflow-auto').scrollTo('bottom');
      cy.wait(1000);
      cy.get('table')
        .contains('a', requestId)
        .scrollIntoView()
        .should('be.visible')
        .parents('tr')
        .find('input[type="checkbox"]')
        .check({ force: true });
      cy.wait(1000);
      cy.get('table').contains('a', requestId).scrollIntoView().should('be.visible').click({ force: true });
      cy.wait(1000);
      cy.contains('Settlement').should('be.visible');
      cy.wait(1000);
      cy.get(this.locators.clickOnUpdateButton).click();
      cy.wait(1000);
      cy.get(this.locators.action).select('Recommend');
      cy.wait(1000);
      cy.get(this.locators.addRemark).type('This is ok');
      cy.wait(1000);
      cy.get(this.locators.clickOnSubmit).click();
      cy.wait(3000);
      cy.get('.toast-message').contains('Status updated for selected account(s) successfully.').should('be.visible');
      cy.wait(3000);
    });

  }

  SettlementTestPage_49() {
    cy.readFile('cypress/fixtures/requestId.json').then((data) => {
      const requestId = data.requestId;
      cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.myActionQueue).click();
      cy.wait(4000);
      cy.get(this.locators.clickOnUnderEvaluation).click();
      cy.wait(1000);
      cy.get('.pagination-count > .form-select').select('50');
      cy.wait(1000);
      cy.get('div.card-content.overflow-auto').scrollTo('bottom');
      cy.wait(1000);
      cy.get('table')
        .contains('a', requestId)
        .scrollIntoView()
        .should('be.visible')
        .parents('tr')
        .find('input[type="checkbox"]')
        .check({ force: true });
      cy.wait(1000);
      cy.get('table').contains('a', requestId).scrollIntoView().should('be.visible').click({ force: true });
      cy.wait(1000);
      cy.contains('Settlement').should('be.visible');
      cy.wait(1000);
      cy.get(this.locators.clickOnUpdateButton).click();
      cy.wait(1000);
      cy.get(this.locators.action).select('Approve');
      cy.wait(1000);
      cy.get(this.locators.addRemark).type('This is ok');
      cy.wait(1000);
      cy.get(this.locators.clickOnSubmit).click();
      cy.wait(3000);
      cy.get('.toast-message').contains('Status updated for selected account(s) successfully.').should('be.visible');
      cy.wait(3000);
    });

  }

  SettlementTestPage_50() {
    cy.readFile('cypress/fixtures/requestId.json').then((data) => {
      const requestId = data.requestId;
      cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.myActionQueue).click();
      cy.wait(4000);
      cy.get(this.locators.clickOnUnderEvaluation).click();
      cy.wait(1000);
      cy.get('.pagination-count > .form-select').select('50');
      cy.wait(1000);
      cy.get('div.card-content.overflow-auto').scrollTo('bottom');
      cy.wait(1000);
      cy.get('table')
        .contains('a', requestId)
        .scrollIntoView()
        .should('be.visible')
        .parents('tr')
        .find('input[type="checkbox"]')
        .check({ force: true });
      cy.wait(1000);
      cy.get('table').contains('a', requestId).scrollIntoView().should('be.visible').click({ force: true });
      cy.wait(1000);
      cy.contains('Settlement').should('be.visible');
      cy.wait(1000);
      cy.get(this.locators.clickOnUpdateButton).click();
      cy.wait(1000);
      cy.get(this.locators.action).select('Deny');
      cy.wait(1000);
      //cy.get(this.locators.addRemark).type('This is ok');
      cy.wait(1000);
      cy.get(this.locators.clickOnSubmit).click();
      cy.wait(2000);
      cy.get('.ng-trigger').contains('Remarks are required.').should('be.visible');
      cy.wait(3000);
    });

  }

  SettlementTestPage_51() {
    cy.readFile('cypress/fixtures/requestId.json').then((data) => {
      const requestId = data.requestId;
      cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.myActionQueue).click();
      cy.wait(4000);
      cy.get(this.locators.clickOnUnderEvaluation).click();
      cy.wait(1000);
      cy.get('.pagination-count > .form-select').select('50');
      cy.wait(1000);
      cy.get('div.card-content.overflow-auto').scrollTo('bottom');
      cy.wait(1000);
      cy.get('table')
        .contains('a', requestId)
        .scrollIntoView()
        .should('be.visible')
        .parents('tr')
        .find('input[type="checkbox"]')
        .check({ force: true });
      cy.wait(1000);
      cy.get('table').contains('a', requestId).scrollIntoView().should('be.visible').click({ force: true });
      cy.wait(1000);
      cy.contains('Settlement').should('be.visible');
      cy.wait(1000);
      // cy.get(this.locators.clickOnUpdateButton).click();
      // cy.wait(1000);
      // cy.get(this.locators.action).select('Recommend');
      // cy.wait(1000);
      // cy.get(this.locators.addRemark).type('This is ok');
      // cy.wait(1000);
      // cy.get(this.locators.clickOnSubmit).click();
      // cy.wait(3000);
      // cy.get('').contains('Status updated for selected account(s) successfully.').should('be.visible');
      // cy.wait(3000);
      cy.get(this.locators.uploadDocument).click();
      cy.wait(1000);
      cy.get(this.locators.clickOnRequestLetterLink).click();
      cy.wait(1000);

    });

  }

  SettlementTestPage_52() {
    cy.readFile('cypress/fixtures/requestId.json').then((data) => {
      const requestId = data.requestId;
      cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.myActionQueue).click();
      cy.wait(4000);
      cy.get(this.locators.clickOnUnderEvaluation).click();
      cy.wait(1000);
      cy.get('.pagination-count > .form-select').select('50');
      cy.wait(1000);
      cy.get('div.card-content.overflow-auto').scrollTo('bottom');
      cy.wait(1000);
      cy.get('table')
        .contains('a', requestId)
        .scrollIntoView()
        .should('be.visible')
        .parents('tr')
        .find('input[type="checkbox"]')
        .check({ force: true });
      cy.wait(1000);
      cy.get('table').contains('a', requestId).scrollIntoView().should('be.visible').click({ force: true });
      cy.wait(1000);
      cy.contains('Settlement').should('be.visible');
      cy.wait(1000);
      // cy.get(this.locators.clickOnUpdateButton).click();
      // cy.wait(1000);
      // cy.get(this.locators.action).select('Recommend');
      // cy.wait(1000);
      // cy.get(this.locators.addRemark).type('This is ok');
      // cy.wait(1000);
      // cy.get(this.locators.clickOnSubmit).click();
      // cy.wait(3000);
      // cy.get('').contains('Status updated for selected account(s) successfully.').should('be.visible');
      // cy.wait(3000);
      cy.get(this.locators.uploadDocument).click();
      cy.wait(1000);
      cy.get(this.locators.clickOnRequestLetterLink).click();
      cy.wait(1000);

    });

  }

  SettlementTestPage_53() {
    cy.readFile('cypress/fixtures/requestId.json').then((data) => {
      const requestId = data.requestId;
      cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.myActionQueue).click();
      cy.wait(4000);
      cy.get(this.locators.clickOnUnderEvaluation).click();
      cy.wait(1000);
      cy.get('.pagination-count > .form-select').select('50');
      cy.wait(1000);
      cy.get('div.card-content.overflow-auto').scrollTo('bottom');
      cy.wait(1000);
      cy.get('table')
        .contains('a', requestId)
        .scrollIntoView()
        .should('be.visible')
        .parents('tr')
        .find('input[type="checkbox"]')
        .check({ force: true });
      cy.wait(1000);
      cy.get('table').contains('a', requestId).scrollIntoView().should('be.visible').click({ force: true });
      cy.wait(1000);
      cy.contains('Settlement').should('be.visible');
      cy.wait(1000);
      cy.get(this.locators.clickOnUpdateButton).click();
      cy.wait(1000);
      cy.get(this.locators.action).select('Deny');
      cy.wait(1000);
      cy.get(this.locators.addRemark).type('This is not ok');
      cy.wait(1000);
      cy.get(this.locators.clickOnSubmit).click();
      cy.wait(2000);
      cy.get('.ng-trigger').contains('Status updated for selected account(s) successfully.').should('be.visible');
      cy.wait(3000);
    });

  }

  SettlementTestPage_54() {
    cy.readFile('cypress/fixtures/requestId.json').then((data) => {
      const requestId = data.requestId;
      cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.myRequest).click();
      cy.wait(2000);
      cy.contains('Settlement').should('be.visible');
      cy.wait(1000);
      cy.contains('Summary Of Open Settlements').should('be.visible');
      cy.wait(1000);
      cy.contains('Current Status').should('be.visible');
      cy.wait(1000);
      cy.contains('Count').should('be.visible');
      cy.wait(1000);
      cy.contains('Amount (₹)').should('be.visible');
      cy.wait(1000);
      cy.contains('Total').should('be.visible');
      cy.wait(1000);
    })
  }

  SettlementTestPage_55() {
    cy.readFile('cypress/fixtures/requestId.json').then((data) => {
      const requestId = data.requestId;
      cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.myRequest).click();
      cy.wait(2000);
      cy.contains('Settlement').should('be.visible');
      cy.wait(1000);
      cy.contains('Summary Of Closed Settlements').should('be.visible');
      cy.wait(1000);
      cy.contains('Current Status').should('be.visible');
      cy.wait(1000);
      cy.contains('Count').should('be.visible');
      cy.wait(1000);
      cy.contains('Amount (₹)').should('be.visible');
      cy.wait(1000);
      cy.contains('Total').should('be.visible');
      cy.wait(1000);
    })
  }

  SettlementTestPage_56() {
    cy.readFile('cypress/fixtures/requestId.json').then((data) => {
      const requestId = data.requestId;
      cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.myRequest).click();
      cy.wait(2000);
      cy.contains('Settlement').should('be.visible');
      cy.wait(1000);
      cy.contains('Aging From Requested Date (Open Settlements)').should('be.visible');
      cy.wait(1000);
      cy.contains('Day Range').should('be.visible');
      cy.wait(1000);
      cy.contains('Count').should('be.visible');
      cy.wait(1000);
      cy.contains('Amount (₹)').should('be.visible');
      cy.wait(1000);
      cy.contains('Total').should('be.visible');
      cy.wait(1000);
    })
  }

  SettlementTestPage_57() {
    cy.readFile('cypress/fixtures/requestId.json').then((data) => {
      const requestId = data.requestId;
      cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.myRequest).click();
      cy.wait(2000);
      cy.contains('Settlement').should('be.visible');
      cy.wait(1000);
      cy.contains('Aging Since Last Actioned (Open Settlements)').should('be.visible');
      cy.wait(1000);
      cy.contains('Day Range').should('be.visible');
      cy.wait(1000);
      cy.contains('Count').should('be.visible');
      cy.wait(1000);
      cy.contains('Amount (₹)').should('be.visible');
      cy.wait(1000);
      cy.contains('Total').should('be.visible');
      cy.wait(1000);
    })
  }

  SettlementTestPage_58() {
    cy.readFile('cypress/fixtures/requestId.json').then((data) => {
      const requestId = data.requestId;
      cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.myRequest).click();
      cy.wait(2000);
      cy.get(':nth-child(1) > .card-header > .info-icon > img').click();
      cy.wait(1000);
      cy.get(':nth-child(2) > .card-header > .info-icon > img').click();
      cy.wait(1000);
      cy.get(':nth-child(3) > .card-header > .info-icon > img').click();
      cy.wait(1000);
      cy.get(':nth-child(4) > .card-header > .info-icon > img').click();
      cy.wait(1000);

    })
  }

  SettlementTestPage_59() {
    cy.readFile('cypress/fixtures/requestId.json').then((data) => {
      const requestId = data.requestId;
      cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.myRequest).click();
      cy.wait(2000);
      cy.get(':nth-child(1) > .card-header > .info-icon > img').click();
      cy.wait(1000);
      cy.get(':nth-child(2) > .card-header > .info-icon > img').click();
      cy.wait(1000);
      cy.get(':nth-child(3) > .card-header > .info-icon > img').click();
      cy.wait(1000);
      cy.get(':nth-child(4) > .card-header > .info-icon > img').click();
      cy.wait(1000);

    })
  }

  SettlementTestPage_60() {
    cy.readFile('cypress/fixtures/requestId.json').then((data) => {
      const requestId = data.requestId;
      cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.myRequest).click();
      cy.wait(2000);
      cy.get(':nth-child(1) > .card-header > .info-icon > img').click();
      cy.wait(1000);
      cy.get(':nth-child(1) > .enc-card-content > .table > tbody > :nth-child(1) > .w-50 > .status-link').click();
      cy.wait(1000);

    })
  }

  SettlementTestPage_61() {
    cy.readFile('cypress/fixtures/requestId.json').then((data) => {
      const requestId = data.requestId;
      cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.myRequest).click();
      cy.wait(2000);
      cy.get(':nth-child(1) > .card-header > .info-icon > img').click();
      cy.wait(1000);
      cy.get(':nth-child(1) > .enc-card-content > .table > tbody > :nth-child(2) > .w-50 > .status-link').click();
      cy.wait(1000);

    })
  }

  SettlementTestPage_62() {
    cy.readFile('cypress/fixtures/requestId.json').then((data) => {
      const requestId = data.requestId;
      cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.myRequest).click();
      cy.wait(2000);
      cy.get(':nth-child(1) > .card-header > .info-icon > img').click();
      cy.wait(1000);
      cy.get(':nth-child(1) > .enc-card-content > .table > tbody > :nth-child(2) > .w-50 > .status-link').click();
      cy.wait(1000);

    })
  }

  SettlementTestPage_63() {
    cy.readFile('cypress/fixtures/requestId.json').then((data) => {
      const requestId = data.requestId;
      cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.myRequest).click();
      cy.wait(2000);
      cy.get(':nth-child(1) > .card-header > .info-icon > img').click();
      cy.wait(1000);
      cy.get(':nth-child(1) > .enc-card-content > .table > tbody > :nth-child(2) > .w-50 > .status-link').click();
      cy.wait(1000);
      cy.contains('Settlement Request ID').should('be.visible');
      cy.wait(1000);
      cy.contains('Account Number').should('be.visible');
      cy.wait(1000);
      cy.contains('Customer Name').should('be.visible');
      cy.wait(1000);
      cy.contains('Settlement Amount (₹)').should('be.visible');
      cy.wait(1000);
    })
  }

  SettlementTestPage_64() {
    cy.readFile('cypress/fixtures/requestId.json').then((data) => {
      const requestId = data.requestId;
      cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.searchSettlement).click();
      cy.wait(2000);
      cy.get(this.locators.applicationStatus).select('Customer Accepted Offer');
      cy.wait(1000);
      cy.get(this.locators.clickSearchSettlement).click();
      cy.wait(2000);
    })
  }

  SettlementTestPage_65() {
    cy.readFile('cypress/fixtures/requestId.json').then((data) => {
      const requestId = data.requestId;
      cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.searchSettlement).click();
      cy.wait(2000);
      cy.get(this.locators.applicationStatus).select('Customer Accepted Offer');
      cy.wait(1000);
      cy.get(this.locators.clickSearchSettlement).click();
      cy.wait(2000);
      cy.get('.link > a').then(($links) => {
        const randomIndex = Math.floor(Math.random() * $links.length);
        cy.wrap($links[randomIndex]).click(); // or perform other actions
      });
    })
    cy.wait(1000);
    cy.get(this.locators.workflowHistory).click();
    cy.wait(1000);

  }

  SettlementTestPage_66() {
    cy.readFile('cypress/fixtures/requestId.json').then((data) => {
      const requestId = data.requestId;
      cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.searchSettlement).click();
      cy.wait(2000);
      cy.get(this.locators.applicationStatus).select('Customer Accepted Offer');
      cy.wait(1000);
      cy.get(this.locators.clickSearchSettlement).click();
      cy.wait(2000);
      cy.get('.link > a').then(($links) => {
        const randomIndex = Math.floor(Math.random() * $links.length);
        cy.wrap($links[randomIndex]).click(); // or perform other actions
      });
    })
    cy.wait(1000);

  }

  SettlementTestPage_67() {
    cy.readFile('cypress/fixtures/requestId.json').then((data) => {
      const requestId = data.requestId;
      cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.searchSettlement).click();
      cy.wait(2000);
      cy.get(this.locators.applicationStatus).select('Customer Accepted Offer');
      cy.wait(1000);
      cy.get(this.locators.clickSearchSettlement).click();
      cy.wait(2000);
      cy.get('.link > a').then(($links) => {
        const randomIndex = Math.floor(Math.random() * $links.length);
        cy.wrap($links[randomIndex]).click();
      });
    })
    cy.wait(1000);

  }

  SettlementTestPage_68() {
    cy.readFile('cypress/fixtures/requestId.json').then((data) => {
      const requestId = data.requestId;
      cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.searchSettlement).click();
      cy.wait(2000);
      cy.get(this.locators.applicationStatus).select('Customer Accepted Offer');
      cy.wait(1000);
      cy.get(this.locators.clickSearchSettlement).click();
      cy.wait(2000);
    })
    cy.wait(1000);
    cy.contains('Search Results').should('be.visible');
    cy.wait(1000);

  }

  SettlementTestPage_69() {
    cy.readFile('cypress/fixtures/requestId.json').then((data) => {
      const requestId = data.requestId;
      cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.myRequest).click();
      cy.wait(1000);
      cy.contains('Summary Of Open Settlements').should('be.visible');
      cy.wait(1000);
      cy.contains('Summary Of Closed Settlements').should('be.visible');
      cy.wait(1000);
    })


  }

  SettlementTestPage_70() {
    cy.readFile('cypress/fixtures/requestId.json').then((data) => {
      const requestId = data.requestId;
      cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.searchSettlement).click();
      cy.wait(2000);
      cy.get(this.locators.agingStatus).select('>10');
      cy.wait(1000);
      cy.get(this.locators.clickSearchSettlement).click();
      cy.wait(2000);
    })

  }

    SettlementTestPage_71() {
    cy.readFile('cypress/fixtures/requestId.json').then((data) => {
      const requestId = data.requestId;
      cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.myActionQueue).click();
      cy.wait(4000);
      cy.get(this.locators.clickOnUnderEvaluation1).click();
      cy.wait(1000);
      cy.get('.pagination-count > .form-select').select('50');
      cy.wait(1000);
      cy.get('div.card-content.overflow-auto').scrollTo('bottom');
      cy.wait(1000);
      cy.get('table')
        .contains('a', requestId)
        .scrollIntoView()
        .should('be.visible')
        .parents('tr')
        .find('input[type="checkbox"]')
        .check({ force: true });
      cy.wait(1000);
      cy.get('table').contains('a', requestId).scrollIntoView().should('be.visible').click({ force: true });
      cy.wait(1000);
      cy.contains('Settlement').should('be.visible');
      cy.wait(1000);
      cy.get(this.locators.clickOnUpdateButton).click();
      cy.wait(1000);
      cy.get(this.locators.action).select('Recommend');
      cy.wait(1000);
      cy.get(this.locators.addRemark).type('This is ok');
      cy.wait(1000);
      cy.get(this.locators.clickOnSubmit).click();
      cy.wait(3000);
      cy.get('.toast-message').contains('Status updated for selected account(s) successfully.').should('be.visible');
      cy.wait(3000);
    });

  }

    SettlementTestPage_72() {
    cy.readFile('cypress/fixtures/requestId.json').then((data) => {
      const requestId = data.requestId;
      cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.myActionQueue).click();
      cy.wait(4000);
      cy.get(this.locators.clickOnUnderEvaluation1).click();
      cy.wait(1000);
      cy.get('.pagination-count > .form-select').select('50');
      cy.wait(1000);
      cy.get('div.card-content.overflow-auto').scrollTo('bottom');
      cy.wait(1000);
      cy.get('table')
        .contains('a', requestId)
        .scrollIntoView()
        .should('be.visible')
        .parents('tr')
        .find('input[type="checkbox"]')
        .check({ force: true });
      cy.wait(1000);
      cy.get('table').contains('a', requestId).scrollIntoView().should('be.visible').click({ force: true });
      cy.wait(1000);
      cy.contains('Settlement').should('be.visible');
      cy.wait(1000);
      cy.get(this.locators.clickOnUpdateButton).click();
      cy.wait(1000);
      cy.get(this.locators.action).select('Recommend');
      cy.wait(1000);
      cy.get(this.locators.addRemark).type('This is ok');
      cy.wait(1000);
      cy.get(this.locators.clickOnSubmit).click();
      cy.wait(3000);
      cy.get('.toast-message').contains('Status updated for selected account(s) successfully.').should('be.visible');
      cy.wait(3000);
    });

  }

    SettlementTestPage_73() {
    cy.readFile('cypress/fixtures/requestId.json').then((data) => {
      const requestId = data.requestId;
      cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.myActionQueue).click();
      cy.wait(4000);
      cy.get(this.locators.clickOnUnderEvaluation1).click();
      cy.wait(1000);
      cy.get('.pagination-count > .form-select').select('50');
      cy.wait(1000);
      cy.get('div.card-content.overflow-auto').scrollTo('bottom');
      cy.wait(1000);
      cy.get('table')
        .contains('a', requestId)
        .scrollIntoView()
        .should('be.visible')
        .parents('tr')
        .find('input[type="checkbox"]')
        .check({ force: true });
      cy.wait(1000);
      cy.get('table').contains('a', requestId).scrollIntoView().should('be.visible').click({ force: true });
      cy.wait(1000);
      cy.contains('Settlement').should('be.visible');
      cy.wait(1000);
      cy.get(this.locators.clickOnUpdateButton).click();
      cy.wait(1000);
      cy.get(this.locators.action).select('Deny');
      cy.wait(1000);
      //cy.get(this.locators.addRemark).type('This is ok');
      cy.wait(1000);
      cy.get(this.locators.clickOnSubmit).click();
      cy.wait(2000);
      cy.get('.ng-trigger').contains('Remarks are required.').should('be.visible');
      cy.wait(3000);
    });

  }

   SettlementTestPage_74() {
    cy.readFile('cypress/fixtures/requestId.json').then((data) => {
      const requestId = data.requestId;
      cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.myActionQueue).click();
      cy.wait(4000);
      cy.get(this.locators.clickOnUnderEvaluation1).click();
      cy.wait(1000);
      cy.get('.pagination-count > .form-select').select('50');
      cy.wait(1000);
      cy.get('div.card-content.overflow-auto').scrollTo('bottom');
      cy.wait(1000);
      cy.get('table')
        .contains('a', requestId)
        .scrollIntoView()
        .should('be.visible')
        .parents('tr')
        .find('input[type="checkbox"]')
        .check({ force: true });
      cy.wait(1000);
      cy.get('table').contains('a', requestId).scrollIntoView().should('be.visible').click({ force: true });
      cy.wait(1000);
      cy.contains('Settlement').should('be.visible');
      cy.wait(1000);
      cy.get(this.locators.clickOnUpdateButton).click();
      cy.wait(1000);
      cy.get(this.locators.action).select('Deny');
      cy.wait(1000);
      cy.get(this.locators.addRemark).type('This is NOT ok');
      cy.wait(1000);
      cy.get(this.locators.clickOnSubmit).click();
      cy.wait(2000);
      cy.get('.ng-trigger').contains('Status updated for selected account(s) successfully.').should('be.visible');
      cy.wait(3000);
    });

  }

  SettlementTestPage_75() {
    cy.readFile('cypress/fixtures/requestId.json').then((data) => {
      const requestId = data.requestId;
      cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.myActionQueue).click();
      cy.wait(4000);
      cy.get(this.locators.clickOnUnderEvaluation).click();
      cy.wait(1000);
      cy.get('.pagination-count > .form-select').select('50');
      cy.wait(1000);
      cy.get('div.card-content.overflow-auto').scrollTo('bottom');
      cy.wait(1000);
      cy.get('table')
        .contains('a', requestId)
        .scrollIntoView()
        .should('be.visible')
        .parents('tr')
        .find('input[type="checkbox"]')
        .check({ force: true });
      cy.wait(1000);
      cy.get('table').contains('a', requestId).scrollIntoView().should('be.visible').click({ force: true });
      cy.wait(1000);
      cy.contains('Settlement').should('be.visible');
      cy.wait(1000);
      cy.get(this.locators.clickOnUpdateButton).click();
      cy.wait(1000);
      cy.get(this.locators.action).select('Recommend');
      cy.wait(1000);
      cy.get(this.locators.clickOnSubmit).click();
      cy.wait(3000);
      cy.get('.toast-message').contains('Remarks are required.').should('be.visible')
      cy.wait(1000);
    });

  }

    SettlementTestPage_76() {
    cy.readFile('cypress/fixtures/requestId.json').then((data) => {
      const requestId = data.requestId;
      cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.myRequest).click();
      cy.wait(2000);
      cy.get(this.locators.customerAcceptedOffer).click();
      cy.wait(2000);
      cy.get(this.locators.clickOnSettlementRequestID).click();
      cy.wait(2000);
      cy.get(this.locators.uploadDocument).click();
      cy.wait(1000);
      cy.get('.inner-layout-container').scrollTo('bottom');
      cy.wait(1000);
      cy.contains('Settlement Letter').should('be.visible');
      cy.wait(1000);
      cy.contains('Customer Signed Settlement Letter').should('be.visible');
      cy.wait(1000);
    })
  }

    SettlementTestPage_77() {
    cy.readFile('cypress/fixtures/requestId.json').then((data) => {
      const requestId = data.requestId;
      cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.myRequest).click();
      cy.wait(2000);
      cy.get(this.locators.customerAcceptedOffer).click();
      cy.wait(2000);
      cy.get(this.locators.clickOnSettlementRequestID).click();
      cy.wait(2000);
      cy.get(this.locators.uploadDocument).click();
      cy.wait(1000);
      cy.get('.inner-layout-container').scrollTo('bottom');
      cy.wait(1000);
      cy.contains('Settlement Letter').should('be.visible');
      cy.wait(1000);
      cy.contains('Customer Signed Settlement Letter').should('be.visible');
      cy.wait(1000);
      cy.get(this.locators.downloadSettlementLetter).click();
      cy.wait(1000);
      cy.get(this.locators.customerSignedSettlementLetter).click();
      cy.wait(1000);
    })
  }

   SettlementTestPage_78() {
    cy.readFile('cypress/fixtures/requestId.json').then((data) => {
      const requestId = data.requestId;
      cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.searchSettlement).click();
      cy.wait(2000);
      cy.get(this.locators.applicationStatus).select('Under Evaluation');
      cy.wait(1000);
      cy.get(this.locators.clickSearchSettlement).click();
      cy.wait(2000);
      cy.contains('Search Results').should('be.visible');
      cy.wait(1000);
    })
  }

     SettlementTestPage_79() {
    cy.readFile('cypress/fixtures/requestId.json').then((data) => {
      const requestId = data.requestId;
      cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.searchSettlement).click();
      cy.wait(2000);
      cy.get(this.locators.applicationStatus).select('Pending Customer Acceptance');
      cy.wait(1000);
      cy.get(this.locators.clickSearchSettlement).click();
      cy.wait(2000);
      cy.contains('Search Results').should('be.visible');
      cy.wait(1000);
    })
  }

     SettlementTestPage_80() {
    cy.readFile('cypress/fixtures/requestId.json').then((data) => {
      const requestId = data.requestId;
      cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.searchSettlement).click();
      cy.wait(2000);
      cy.get(this.locators.applicationStatus).select('Request Rejected');
      cy.wait(1000);
      cy.get(this.locators.clickSearchSettlement).click();
      cy.wait(2000);
      cy.contains('Search Results').should('be.visible');
      cy.wait(1000);
    })
  }

  SettlementTestPage_81() {
    cy.readFile('cypress/fixtures/requestId.json').then((data) => {
      const requestId = data.requestId;
      cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.searchSettlement).click();
      cy.wait(2000);
      cy.get(this.locators.applicationStatus).select('Customer Accepted Offer');
      cy.wait(1000);
      cy.get(this.locators.clickSearchSettlement).click();
      cy.wait(2000);
      cy.contains('Search Results').should('be.visible');
      cy.wait(1000);
    })
  }  


   SettlementTestPage_82() {
    cy.readFile('cypress/fixtures/requestId.json').then((data) => {
      const requestId = data.requestId;
      cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.myRequest).click();
      cy.wait(2000);
      cy.get(this.locators.dayrangeonetofive).click();
      cy.wait(1000);
      cy.contains('Search Results').should('be.visible');
      cy.wait(1000);
    })

  }

   SettlementTestPage_83() {
    cy.readFile('cypress/fixtures/requestId.json').then((data) => {
      const requestId = data.requestId;
      cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.myRequest).click();
      cy.wait(2000);
      cy.get(this.locators.dayrangesixtoten).click();
      cy.wait(1000);
      cy.contains('Search Results').should('be.visible');
      cy.wait(1000);
    })

  }

   SettlementTestPage_84() {
    cy.readFile('cypress/fixtures/requestId.json').then((data) => {
      const requestId = data.requestId;
      cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.myRequest).click();
      cy.wait(2000);
      cy.get(this.locators.dayrangemorethanten).click();
      cy.wait(1000);
      cy.contains('Search Results').should('be.visible');
      cy.wait(1000);
    })

  }

   SettlementTestPage_85() {
    cy.readFile('cypress/fixtures/requestId.json').then((data) => {
      const requestId = data.requestId;
      cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.myRequest).click();
      cy.wait(2000);
      cy.get(this.locators.lastactiondayrangeonetofive).click();
      cy.wait(1000);
      cy.contains('Search Results').should('be.visible');
      cy.wait(1000);
    })

  }   

   SettlementTestPage_86() {
    cy.readFile('cypress/fixtures/requestId.json').then((data) => {
      const requestId = data.requestId;
      cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.myRequest).click();
      cy.wait(2000);
      cy.get(this.locators.lastactiondayrangesixtoten).click();
      cy.wait(1000);
      cy.contains('Search Results').should('be.visible');
      cy.wait(1000);
    })
  }

   SettlementTestPage_87() {
    cy.readFile('cypress/fixtures/requestId.json').then((data) => {
      const requestId = data.requestId;
      cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.myRequest).click();
      cy.wait(2000);
      cy.get(':nth-child(1) > .card-header > .info-icon > img').click();
      cy.wait(1000);
      cy.get(':nth-child(1) > .enc-card-content > .table > tbody > :nth-child(1) > .w-50 > .status-link').click();
      cy.wait(1000);

    })
  }

   SettlementTestPage_88() {
      cy.readFile('cypress/fixtures/requestId.json').then((data) => {
      const requestId = data.requestId;
      cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.myRequest).click();
      cy.wait(2000);
      cy.get(this.locators.lastactiondayrangemorethanten).click();
      cy.wait(1000);
      cy.contains('Search Results').should('be.visible');
      cy.wait(1000);
    })
  }

   SettlementTestPage_89() {
       cy.readFile('cypress/fixtures/requestId.json').then((data) => {
      const requestId = data.requestId;
      cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.myRequest).click();
      cy.wait(2000);
      cy.get(this.locators.requestRejected).click();
      cy.wait(1000);
      cy.contains('Search Results').should('be.visible');
      cy.wait(1000);

    })
  }

   SettlementTestPage_90() {
      cy.readFile('cypress/fixtures/requestId.json').then((data) => {
      const requestId = data.requestId;
      cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.myRequest).click();
      cy.wait(2000);
      cy.get(this.locators.pendingCustomerAcceptance).click();
      cy.wait(1000);
      cy.contains('Search Results').should('be.visible');
      cy.wait(1000);

    })
  }

   SettlementTestPage_91() {
      cy.readFile('cypress/fixtures/requestId.json').then((data) => {
      const requestId = data.requestId;
      cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.myRequest).click();
      cy.wait(2000);
      cy.get(this.locators.nderNuegotiation).click();
      cy.wait(1000);
      cy.contains('Search Results').should('be.visible');
      cy.wait(1000);

    })
  }

   SettlementTestPage_92() {
      cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.searchSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.clickOnSearch).click();
      cy.wait(1000);
      cy.get(this.locators.configureColumns).click();
      cy.wait(1000);
  }

   SettlementTestPage_93() {
      cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.searchSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.clickOnSearch).click();
      cy.wait(1000);
      cy.get(this.locators.configureColumns).click();
      cy.wait(1000);
      cy.get(this.locators.selectNPAFlag).contains('NPA Flag').parents('li').find('input[type="checkbox"]').click({ force: true });
      cy.wait(1000);
      cy.get('body').click();
      cy.wait(1000);
      cy.contains('NPA Flag').should('be.visible');
      cy.wait(1000);
  }

   SettlementTestPage_94() {
       cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.searchSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.clickOnSearch).click();
      cy.wait(1000);
      cy.get(this.locators.configureColumns).click();
      cy.wait(1000);
      cy.get(this.locators.selectNPAFlag).contains('Principal Waiver %').parents('li').find('input[type="checkbox"]').click({ force: true });
      cy.wait(1000);
      cy.get('body').click();
      cy.wait(1000);
  }

   SettlementTestPage_95() {
      cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.searchSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.clickOnSearch).click();
      cy.wait(1000);
      cy.get(this.locators.configureColumns).click();
      cy.wait(1000);
      cy.get(this.locators.selectNPAFlag).contains('Interest Waiver %').parents('li').find('input[type="checkbox"]').click({ force: true });
      cy.wait(1000);
      cy.get('body').click();
      cy.wait(1000);
  }

   SettlementTestPage_96() {
      cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.searchSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.clickOnSearch).click();
      cy.wait(1000);
      cy.get(this.locators.configureColumns).click();
      cy.wait(1000);
      cy.get(this.locators.selectNPAFlag).contains('Current Status').parents('li').find('input[type="checkbox"]').click({ force: true });
      cy.wait(1000);
      cy.get('body').click();
      cy.wait(1000);
  }

   SettlementTestPage_97() {
      cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.searchSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.clickOnSearch).click();
      cy.wait(1000);
      cy.get(this.locators.configureColumns).click();
      cy.wait(1000);
      cy.get(this.locators.selectNPAFlag).contains('Requestor').parents('li').find('input[type="checkbox"]').click({ force: true });
      cy.wait(1000);
      cy.get('body').click();
      cy.wait(1000);
  }

   SettlementTestPage_98() {
       cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.searchSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.clickOnSearch).click();
      cy.wait(1000);
      cy.get(this.locators.configureColumns).click();
      cy.wait(1000);
      cy.get(this.locators.selectNPAFlag).contains('Aging In Current Status (In Days)').parents('li').find('input[type="checkbox"]').click({ force: true });
      cy.wait(1000);
      cy.get('body').click();
      cy.wait(1000);

  }

   SettlementTestPage_99() {
      cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.searchSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.clickOnSearch).click();
      cy.wait(1000);
      cy.get(this.locators.configureColumns).click();
      cy.wait(1000);
      cy.get(this.locators.selectNPAFlag).contains('Aging In Current Status (In Days)').parents('li').find('input[type="checkbox"]').click({ force: true });
      cy.wait(1000);
      cy.get('body').click();
      cy.wait(1000);
      cy.get('.inner-layout-container').scrollTo('bottom');
      cy.wait(1000);
      cy.get('.pagination-count > .form-select').select('50', {force: true} );
      cy.wait(1000);

  }

   SettlementTestPage_100() {
      cy.get(this.locators.ClickOnSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.searchSettlement).click();
      cy.wait(1000);
      cy.get(this.locators.clickOnSearch).click();
      cy.wait(1000);
      cy.get(this.locators.configureColumns).click();
      cy.wait(1000);
      cy.get(this.locators.selectNPAFlag).contains('Aging In Current Status (In Days)').parents('li').find('input[type="checkbox"]').click({ force: true });
      cy.wait(1000);
      cy.get('body').click();
      cy.wait(1000);
      cy.get('.inner-layout-container').scrollTo('bottom');
      cy.wait(1000);
      cy.get('.pagination-count > .form-select').select('50', {force: true} );
      cy.wait(1000);
      cy.get('thead > tr > :nth-child(2)').click();
      cy.wait(1000);
      cy.get('thead > tr > :nth-child(2)').click();
      cy.wait(1000);
  }


}

export default SettlementPage;
