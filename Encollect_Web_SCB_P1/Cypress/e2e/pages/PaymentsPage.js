import { getLocators } from '../utils/locatorUtils';
import { getBaseUrl } from '../utils/configUtils';

class PaymentsPage {
  constructor(locators) {
    this.locators = locators;
  }

  PaymentModule() {
    cy.wait(2000);
    cy.wait(6000);
    cy.get(this.locators.payments).click();
    cy.wait(2000);
    cy.contains('Receive Money from Collector').should('be.visible');
  }

  PaymentModule_38() {
    cy.get(this.locators.payments).click();
    cy.wait(2000);
    cy.get(this.locators.CliCkRMFC).click();
    cy.wait(2000);
    cy.contains('Collector Code:').should('be.visible');
    cy.wait(2000);
    cy.contains('Collector Name').should('be.visible');
    cy.wait(2000);
    cy.contains('Receipt From Date').should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.EnterCollCode).type("22");
    cy.wait(2000);
    cy.get('typeahead-container .dropdown-item')
      .should('have.length.greaterThan', 0) // wait until at least one item is present
      .then($items => {
        const itemCount = $items.length;
        const randomIndex = Math.floor(Math.random() * itemCount);
        // Step 3: Click the randomly selected item
        cy.wrap($items[randomIndex]).click();
      });
    //cy.get('#ngb-typeahead-1-4 > .ng-star-inserted').click()
    cy.wait(2000);
    const today = new Date();
    const pastDate = new Date();
    pastDate.setDate(today.getDate() - 30);

    // Helper function to format date as DD/MM/YYYY
    function formatDate(date) {
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    }

    const formattedPastDate = formatDate(pastDate);
    const formattedToday = formatDate(today);
    cy.get(this.locators.EnterRecDate).type(formattedPastDate);
    cy.wait(2000);
    cy.get('#receipt-to-date').type(formattedToday);
    cy.wait(2000);
    // cy.get(this.locators.EnterRecDate).type("01/05/2025");
    // cy.wait(2000);
    // cy.get('#receipt-to-date').type("25/05/2025");
    // cy.wait(2000);
    cy.get(this.locators.ClickOnSearch).click({ force: true });
    cy.wait(4000);
    cy.get('.client').click();
    cy.wait(2000);

  }

  PaymentModule_39() {
    cy.get('#nav-item-1-payments').click({force:true});
    cy.wait(2000);
    cy.get('#nav-item-2-receive-money-from-collector').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.payments).click();
    cy.wait(2000);
    cy.get(this.locators.CliCkRMFC).click({ force: true });
    cy.wait(5000);
    cy.get(this.locators.EnterCollCode).type("22");
    cy.wait(2000);
    cy.get('typeahead-container .dropdown-item')
      .should('have.length.greaterThan', 0) // wait until at least one item is present
      .then($items => {
        const itemCount = $items.length;
        const randomIndex = Math.floor(Math.random() * itemCount);

        // Step 3: Click the randomly selected item
        cy.wrap($items[randomIndex]).click();
      });
    //cy.get('#ngb-typeahead-2-1 > .ng-star-inserted').click()
    cy.wait(2000);
    const today = new Date();
    const pastDate = new Date();
    pastDate.setDate(today.getDate() - 30);

    // Helper function to format date as DD/MM/YYYY
    function formatDate(date) {
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    }

    const formattedPastDate = formatDate(pastDate);
    const formattedToday = formatDate(today);

cy.get(this.locators.EnterRecDate).invoke('removeAttr', 'readonly').clear().type(formattedPastDate);
cy.wait(2000);
cy.get('#receipt-to-date').invoke('removeAttr', 'readonly').clear().type(formattedToday);
    // cy.get(this.locators.EnterRecDate).type("01/05/2025");
    // cy.wait(2000);
    // cy.get('#receipt-to-date').type("27/05/2025");
    cy.wait(2000);
    cy.get(this.locators.ClickOnSearch).click({ force: true });
    cy.wait(5000);

  }
  PaymentModule_40() {
    cy.get('#nav-item-1-payments').click();
    cy.wait(2000);
    cy.get('#nav-item-2-receive-money-from-collector')
    cy.wait(2000);
    cy.get(this.locators.CliCkRMFC).click({ force: true });
    cy.wait(5000);
    cy.get(this.locators.EnterCollCode).type("22");
    cy.wait(2000);
    cy.get('typeahead-container .dropdown-item')
      .should('have.length.greaterThan', 0) // wait until at least one item is present
      .then($items => {
        const itemCount = $items.length;
        const randomIndex = Math.floor(Math.random() * itemCount);

        // Step 3: Click the randomly selected item
        cy.wrap($items[randomIndex]).click();
      });
    //cy.get('#ngb-typeahead-2-1 > .ng-star-inserted').click()
    cy.wait(2000);
    const today = new Date();
    const pastDate = new Date();
    pastDate.setDate(today.getDate() - 30);

    // Helper function to format date as DD/MM/YYYY
    function formatDate(date) {
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    }

    const formattedPastDate = formatDate(pastDate);
    const formattedToday = formatDate(today);

cy.get(this.locators.EnterRecDate).invoke('removeAttr', 'readonly').clear().type(formattedPastDate);
cy.wait(2000);
cy.get('#receipt-to-date').invoke('removeAttr', 'readonly').clear().type(formattedToday);
    // cy.get(this.locators.EnterRecDate).type("01/05/2025");
    // cy.wait(2000);
    // cy.get('#receipt-to-date').type("27/05/2025");
    cy.wait(2000);
    cy.get(this.locators.ClickOnSearch).click({ force: true });
    cy.wait(5000);

  }
  PaymentModule_41() {
     cy.get('#nav-item-1-payments').click();
    cy.wait(2000);
    cy.get('#nav-item-2-receive-money-from-collector')
    cy.wait(2000);
    cy.get(this.locators.CliCkRMFC).click({ force: true });
    cy.wait(5000);
    cy.get(this.locators.EnterCollCode).type("22");
    cy.wait(2000);
    cy.get('typeahead-container .dropdown-item')
      .should('have.length.greaterThan', 0) // wait until at least one item is present
      .then($items => {
        const itemCount = $items.length;
        const randomIndex = Math.floor(Math.random() * itemCount);

        // Step 3: Click the randomly selected item
        cy.wrap($items[randomIndex]).click();
      });
    //cy.get('#ngb-typeahead-2-1 > .ng-star-inserted').click()
    cy.wait(2000);
    const today = new Date();
    const pastDate = new Date();
    pastDate.setDate(today.getDate() - 30);

    // Helper function to format date as DD/MM/YYYY
    function formatDate(date) {
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    }

    const formattedPastDate = formatDate(pastDate);
    const formattedToday = formatDate(today);

   cy.get(this.locators.EnterRecDate)
  .invoke('removeAttr', 'readonly')
  .clear()
  .type(formattedPastDate);
cy.wait(2000);
cy.get('#receipt-to-date')
  .invoke('removeAttr', 'readonly')
  .clear()
  .type(formattedToday);
    // cy.get(this.locators.EnterRecDate).type("01/05/2025");
    // cy.wait(2000);
    // cy.get('#receipt-to-date').type("27/05/2025");
    // cy.wait(2000);
    cy.get(this.locators.ClickOnSearch).click({ force: true });
    cy.wait(5000);
  }
  PaymentModule_42() {
    cy.get('#nav-item-1-payments').click();
    cy.wait(2000);
    cy.get('#nav-item-2-receive-money-from-collector')
    cy.wait(2000);
    cy.get(this.locators.CliCkRMFC).click({ force: true });
    cy.wait(5000);
    cy.get(this.locators.EnterCollCode).type("22");
    cy.wait(2000);
    cy.get('typeahead-container .dropdown-item')
      .should('have.length.greaterThan', 0) // wait until at least one item is present
      .then($items => {
        const itemCount = $items.length;
        const randomIndex = Math.floor(Math.random() * itemCount);

        // Step 3: Click the randomly selected item
        cy.wrap($items[randomIndex]).click();
      });
    //cy.get('#ngb-typeahead-2-1 > .ng-star-inserted').click()
    cy.wait(2000);
    const today = new Date();
    const pastDate = new Date();
    pastDate.setDate(today.getDate() - 30);

    // Helper function to format date as DD/MM/YYYY
    function formatDate(date) {
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    }

    const formattedPastDate = formatDate(pastDate);
    const formattedToday = formatDate(today);

    cy.get(this.locators.EnterRecDate).type(formattedPastDate);
    cy.wait(2000);
    cy.get('#receipt-to-date').type(formattedToday);
    cy.wait(2000);
    // cy.get(this.locators.EnterRecDate).type("01/05/2025");
    // cy.wait(2000);
    // cy.get('#receipt-to-date').type("27/05/2025");
    // cy.wait(2000);
    cy.get(this.locators.ClickOnSearch).click({ force: true });
    cy.wait(5000);

  }

  PaymentModule_43() {
    cy.get('#nav-item-1-payments').click({force:true});
    cy.wait(2000);
    cy.get('#nav-item-2-receive-money-from-collector').click({force:true});
    cy.wait(2000);
    // cy.get(this.locators.payments).click();
    // cy.wait(2000);
    // cy.get(this.locators.payments).click();
    // cy.wait(2000);
    cy.get(this.locators.ClickBOP).click();
    cy.wait(2000);
    cy.get(this.locators.ClickCBOP).click();
    cy.wait(2000);
    cy.contains('Create Batch of Payments').should('be.visible');

  }

  PaymentModule_44() {
     cy.get('#nav-item-1-payments').click();
    cy.wait(2000);
    cy.get('#nav-item-2-receive-money-from-collector')
    cy.wait(2000);
    // cy.get(this.locators.payments).click();
    // cy.wait(2000);
    cy.get(this.locators.ClickBOP).click();
    cy.wait(2000);
    cy.get(this.locators.ClickCBOP).click();
    cy.wait(2000);
    cy.contains('Product Group').should('be.visible');
    cy.wait(2000);
    cy.contains('Payment Mode').should('be.visible');
    cy.wait(2000);
    cy.contains('Collector Code').should('be.visible');
    cy.wait(2000);
    cy.contains('Collector Name').should('be.visible');
    cy.wait(2000);
    cy.contains('Date Received at Agency From Date').should('be.visible');
    cy.wait(2000);
    cy.contains('Date Received at Agency To Date').should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.CB_Product_group).select('All');
    cy.wait(2000);
    cy.get(this.locators.CB_Payment_mode).select('CASH');
    cy.wait(2000);
   const today = new Date();
    const pastDate = new Date();
    pastDate.setDate(today.getDate() - 30);

    // Helper function to format date as DD/MM/YYYY
    function formatDate(date) {
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    }

    const formattedPastDate = formatDate(pastDate);
    const formattedToday = formatDate(today);

    cy.get('#search-from-date').type(formattedPastDate);
    cy.wait(2000);
    cy.get('#search-to-date').type(formattedToday);
    cy.wait(2000);
    cy.get('body').click();
    // cy.get('.today-date').click();
    // cy.wait(2000);
    cy.get(this.locators.ClickOnSearch).click()
    cy.wait(5000);
  }

  PaymentModule_45() {
    cy.contains('Receipt No').should('be.visible');
    cy.contains('Product Group').should('be.visible');
    cy.contains('Receipt Date').should('be.visible');
    cy.contains('Customer Name').should('be.visible');
    cy.contains('Customer Account No').should('be.visible');
    cy.contains('Mode of Payment').should('be.visible');
    cy.contains('Instrument No').should('be.visible');
    cy.contains('Drawee Bank & Drawee Branch').should('be.visible');
    // cy.contains('EMI Overdue Amount').should('be.visible');

  }
  checkbox() {
    cy.wait(2000);
    cy.get('label > .ng-untouched').click()
    cy.wait(2000);
    cy.get(this.locators.ClickOnSubmit).click();



  }
  checkbox1() {
    cy.wait(2000);
    // cy.get('label > .ng-untouched').click()
    // cy.wait(2000);
    // cy.get(this.locators.ClickOnCancel).click();



  }

  SearchandPrintBatch050() {
    cy.get(this.locators.payments).click();
    cy.get(this.locators.ClickBOP).click();
    cy.get(this.locators.SearchandPrintBatch).click().click();
    cy.contains('Search and Print Batch').should('be.visible');


  }

  SearchandPrintBatch051() {
    cy.get(this.locators.payments).click();
    cy.wait(2000);
    cy.get(this.locators.ClickBOP).click();
    cy.wait(2000);
    cy.get(this.locators.SearchandPrintBatch).click({force: true}).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.fillbranchid).click();   // open the ng-select dropdown
    cy.wait(2000);

cy.get('.ng-dropdown-panel .ng-option').then(($options) => {
  const randomIndex = Math.floor(Math.random() * $options.length); // pick random index
  cy.wrap($options[randomIndex]).click();  // click random option
});

   cy.wait(2000);
    cy.get(this.locators.clickonsearchPBL).click({ force: true });
    cy.get("body app-root a:nth-child(4)").invoke('text').then((text) => {
      cy.log(`Extracted Text: ${text}`);
      expect(text.trim()).to.equal('Print Batch List');
    });
  }

  SearchandPrintBatch059() {
    cy.get(this.locators.payments).click();
    cy.get(this.locators.ClickReceipts).click();
    cy.get(this.locators.EmailandSMS).click();

  }

  SearchandPrintBatch060() {
    cy.get(this.locators.payments).click();
    cy.wait(2000);
    cy.get(this.locators.ClickReceipts).click();
    cy.wait(2000);
    cy.get(this.locators.EmailandSMS).click().click();
    cy.wait(2000);
    cy.get(this.locators.fillcustomreaccountnumber).type('IDRID17000203');
    cy.wait(2000);
    cy.get(this.locators.ClickFromDate).type("01/10/2024");
    cy.wait(2000);

    cy.get(this.locators.ClickToDate).click().click();
    cy.wait(2000);
    cy.get('.today-date').click();
    cy.wait(2000);
    cy.get(this.locators.searchereceipt).click();
    // cy.get('.breadcrumb > :nth-child(3)').invoke('text').then((text) => {
    //   cy.log(`Extracted Text: ${text}`);
    //   expect(text.trim()).to.equal('Search and send duplicate email e-receipt and sms');
    // });

  }

  SearchandPrintBatch061() {
    cy.get('#nav-item-1-payments').click();
    cy.wait(2000);
    cy.get('#nav-item-2-batch-of-payments').click();
    cy.wait(2000);
    cy.get('#nav-item-3-search-and-edit-batch').click();
    cy.wait(2000);
    cy.get(this.locators.EmailandSMS).click().click();
    cy.wait(2000);
    cy.get(this.locators.fillcustomreaccountnumber).type('IDRID17000203');
    cy.wait(2000);
    cy.get(this.locators.ClickFromDate).type("01-Jan-2024");
    cy.wait(2000);
    cy.get(this.locators.ClickToDate).click().click();
    cy.wait(2000);

    cy.get('.today-date').click();
    cy.get(this.locators.searchereceipt).click();
    // cy.get('.history-table > h3').invoke('text').then((text) => {
    //   cy.log(`Extracted Text: ${text}`);
    //   expect(text.trim()).to.equal('Search Result');
    // });

  }

  SearchandPrintBatch062() {
    cy.get(this.locators.payments).click();
    cy.wait(2000);
    cy.get('.payments > :nth-child(2) > :nth-child(4) > a.ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.EmailandSMS).click().click();
    cy.wait(2000);
    cy.get(this.locators.fillcustomreaccountnumber).type('IDRID17000203');
    cy.wait(2000);
    cy.get(this.locators.ClickFromDate).type("01/10/2024");
    cy.wait(2000);

    cy.get(this.locators.ClickToDate).click().click();
    cy.wait(2000);

    cy.get('.today-date').click();
    cy.get(this.locators.searchereceipt).click();
    cy.wait(2000);
    //cy.get(this.locators.clickonemail).click();
    //cy.wait(2000);
    // cy.get('.ng-tns-c2308121496-7.ng-trigger > .ng-tns-c2308121496-7').invoke('text').then((text) => {
    //   cy.log(`Extracted Text: ${text}`);
    //   expect(text.trim()).to.equal('Email notification sent!');
    // });
    // cy.get(this.locators.clickonphone).click();
    // cy.wait(2000);
    // cy.get('.ng-tns-c2308121496-8.ng-trigger > .ng-tns-c2308121496-8').invoke('text').then((text) => {
    //   cy.log(`Extracted Text: ${text}`);
    //   expect(text.trim()).to.equal('SMS notification sent!');
    // });

  }

  SearchandEditBatch063() {
    cy.get(this.locators.payments).click();
    cy.get(this.locators.ClickBOP).click();
    cy.get(this.locators.SearchandEditBatch).click().click();
    cy.contains('Search and Edit Batch').should('be.visible');
  }

  SearchandEditBatch064() {
    cy.get(this.locators.payments).click();
    cy.get(this.locators.ClickBOP).click();
    cy.get(this.locators.SearchandEditBatch).click().click();
    cy.wait(2000);
   cy.get(this.locators.fillbranchid).click();   // open the ng-select dropdown
cy.wait(1000);

cy.get('.ng-dropdown-panel .ng-option').then(($options) => {
  const randomIndex = Math.floor(Math.random() * $options.length); // pick random index
  cy.wrap($options[randomIndex]).click();  // click random option
});

   cy.wait(2000);


    cy.get(this.locators.searchbranchID).click();
    cy.wait(2000);
    cy.contains('Batch Details').should('be.visible');
cy.wait(2000);
  }
  SearchandEditBatch_063() {
    cy.get(this.locators.payments).click();
    cy.get(this.locators.ClickBOP).click();
    cy.get(this.locators.SearchandEditBatch).click().click();
    cy.wait(2000);
     cy.get(this.locators.fillbranchid).click();   // open the ng-select dropdown
cy.wait(1000);

cy.get('.ng-dropdown-panel .ng-option').then(($options) => {
  const randomIndex = Math.floor(Math.random() * $options.length); // pick random index
  cy.wrap($options[randomIndex]).click();  // click random option
});

   cy.wait(2000);


    cy.get(this.locators.searchbranchID).click();
    cy.wait(2000);
    cy.contains('Batch Details').should('be.visible');
cy.wait(2000);

    cy.contains('Batch ID').should('be.visible');
    cy.wait(2000);
    cy.contains('Product Group').should('be.visible');
    cy.wait(2000);
    cy.contains('Mode Of Payment').should('be.visible');
    cy.wait(2000);
    cy.contains('Batch Status').should('be.visible');
    cy.wait(2000);
    cy.contains('Agency/Branch').should('be.visible');
    cy.wait(2000);
    cy.contains('Total Amount').should('be.visible');
    cy.wait(2000);
  

  }

  SearchandEditBatch_064() {
    cy.get(this.locators.payments).click();
    cy.get(this.locators.ClickBOP).click();
    cy.get(this.locators.SearchandEditBatch).click().click();
    cy.wait(2000);
   cy.get(this.locators.fillbranchid).click();   // open the ng-select dropdown
cy.wait(1000);

cy.get('.ng-dropdown-panel .ng-option').then(($options) => {
  const randomIndex = Math.floor(Math.random() * $options.length); // pick random index
  cy.wrap($options[randomIndex]).click();  // click random option
});

   cy.wait(2000);
    cy.get(this.locators.searchbranchID).click();
    cy.wait(2000);
    cy.get(this.locators.ClciChe).click();
    cy.wait(2000);
    cy.get(this.locators.ClickRemove).click();


  }
  SearchandEditBatch_065() {
    cy.get(this.locators.payments).click();
    cy.get(this.locators.ClickBOP).click();
    cy.get(this.locators.SearchandEditBatch).click().click();
    cy.wait(2000);
    cy.get(this.locators.fillbranchid).click();   // open the ng-select dropdown
cy.wait(1000);

cy.get('.ng-dropdown-panel .ng-option').then(($options) => {
  const randomIndex = Math.floor(Math.random() * $options.length); // pick random index
  cy.wrap($options[randomIndex]).click();  // click random option
});

   cy.wait(2000);
    cy.get(this.locators.searchbranchID).click();
    cy.wait(2000);
    cy.get(this.locators.ClciChe).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnCancel).click();


  }


  SearchandEditBatch065() {
    cy.get(this.locators.payments).click();
    cy.get(this.locators.ClickBOP).click();
    cy.get(this.locators.SearchandEditBatch).click().click();
    cy.wait(2000);
    cy.get(this.locators.fillbranchid).click();   // open the ng-select dropdown
cy.wait(1000);

cy.get('.ng-dropdown-panel .ng-option').then(($options) => {
  const randomIndex = Math.floor(Math.random() * $options.length); // pick random index
  cy.wrap($options[randomIndex]).click();  // click random option
});

   cy.wait(2000);
    cy.get(this.locators.searchbranchID).click();

    cy.get('thead > tr > :nth-child(2)').invoke('text').then((text) => {
      cy.log(`Extracted Text: ${text}`);
      expect(text.trim()).to.equal('Receipt No');
    }); 
  }

  SearchandEditBatch066() {
    cy.get(this.locators.payments).click();
    cy.get(this.locators.ClickBOP).click();
    cy.get(this.locators.SearchandEditBatch).click().click();
    cy.wait(2000);
    cy.get(this.locators.fillbranchid).click();   // open the ng-select dropdown
cy.wait(1000);

cy.get('.ng-dropdown-panel .ng-option').then(($options) => {
  const randomIndex = Math.floor(Math.random() * $options.length); // pick random index
  cy.wrap($options[randomIndex]).click();  // click random option
});

   cy.wait(2000);
    cy.get(this.locators.searchbranchID).click();
    cy.wait(2000);
    cy.get(this.locators.selectreceipt).click();
    cy.wait(2000);
    cy.get(this.locators.clickonsearch66).click();
    cy.wait(2000);
    cy.get(this.locators.confirmbutton66).click();
    cy.wait(2000);
    cy.get('thead > tr > :nth-child(2)').invoke('text').then((text) => {
    cy.log(`Extracted Text: ${text}`);
    expect(text.trim()).to.equal('Receipt No');
    });

  }

  SearchandEditBatch067() {
    cy.get(this.locators.payments).click();
    cy.get(this.locators.ClickBOP).click();
    cy.get(this.locators.SearchandEditBatch).click().click();
    cy.wait(2000);
     cy.get(this.locators.fillbranchid).click();   // open the ng-select dropdown
cy.wait(1000);

cy.get('.ng-dropdown-panel .ng-option').then(($options) => {
  const randomIndex = Math.floor(Math.random() * $options.length); // pick random index
  cy.wrap($options[randomIndex]).click();  // click random option
});

   cy.wait(2000);
    cy.get(this.locators.searchbranchID).click();
    cy.wait(2000);
    //cy.get(this.locators.selectreceipt).click();
    cy.wait(2000);
    //cy.get(this.locators.clickonsearch66).click();
    //cy.wait(2000);
    //cy.get(this.locators.cancelbutton67).click();
    //cy.wait(2000);    
  }


  SearchandEditBatch068() {
    cy.get(this.locators.payments).click();
    cy.get(this.locators.ClickBOP).click();
    cy.get(this.locators.SearchandEditBatch).click().click();
    cy.wait(2000);
    cy.get(this.locators.searchbranchID).click({force:true});
    cy.wait(2000);
    cy.get('[role="alert"]').should('contain.text', 'The BatchId field is required.');
    cy.wait(2000);
        
  }
  ClickBOP() {
    
    cy.get(this.locators.ClickBOP).click();



  }
  ClickOnCreateBatchOfPayment() {
    cy.wait(2000);
    cy.wait(6000);
    cy.get(this.locators.payments).click();
    cy.wait(2000);
    cy.contains('Receive Money from Collector').should('be.visible').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Create_batch_of_payment).click({ force: true });
  }

  ClickOnCreateBatchOfPayment_SearchBtnEnable() {
    cy.get(this.locators.CB_Product_group).select('Consumer Loan');
    cy.wait(2000);
    cy.get(this.locators.CB_Payment_mode).select('CASH');
    cy.wait(2000);
    cy.get(this.locators.CB_From_date).type('08/01/2024');
    cy.wait(2000);
    cy.get(this.locators.CB_To_date).type('07/05/2024');
    cy.wait(2000);
    // cy.get('.btn').should('not.be.disabled');
    cy.get(this.locators.CB_search_btn).then($button => {
      // Check if the button has the 'disabled' attribute
      if ($button.is('not.be.disabled')) {
        // If the button is disabled
        cy.log('Button is disabled');
      } else {
        // If the button is enabled
        cy.log('Button is enabled');
      }
    });
  }

  ClickOnCreateBatchOfPayment_SearchBtnClick() {
    cy.get('#nav-item-1-payments').click({force:true});
    cy.wait(2000);
    cy.get('#nav-item-2-batch-of-payments').click({force:true});
    cy.wait(2000);
    cy.get('#nav-item-3-create-batch-of-payments').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.CB_Product_group).select('All');
    cy.wait(2000);
    cy.get(this.locators.CB_Payment_mode).select('CASH');
    cy.wait(2000);
    cy.get(this.locators.CB_From_date).clear().type('10-Jan-01', { force: true });
    cy.wait(2000);
    cy.get(this.locators.CB_To_date).clear().type('22-Mar-26', { force: true });
    cy.wait(2000);
    cy.get(this.locators.CB_search_btn).click({ force: true });

  }

  ClickOnCreateBatchOfPayment_ConfirmBatchCreation() {
      cy.get('#nav-item-1-payments').click({force:true});
    cy.wait(2000);
    cy.get('#nav-item-2-batch-of-payments').click({force:true});
    cy.wait(2000);
    cy.get('#nav-item-3-create-batch-of-payments').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.CB_Product_group).select('All');
    cy.wait(2000);
    cy.get(this.locators.CB_Payment_mode).select('CASH');
    cy.wait(2000);
    cy.get(this.locators.CB_From_date).type('01-Feb-2025');
    cy.wait(2000);
    cy.get(this.locators.CB_To_date).type('27-Feb-2025');
    cy.wait(2000);
    cy.get(this.locators.CB_search_btn).click({ force: true });
    cy.wait(2000);
    // cy.get(this.locators.CB_serch_result).click();
    // cy.wait(2000);
    // cy.get(this.locators.CB_summary_submit, { timeout: 20000 }).should('be.visible');
    // cy.get(this.locators.CB_summary_cancel, { timeout: 20000 }).should('be.visible');
    // cy.get(this.locators.CB_summary_submit).click();
    // cy.wait(2000);
    // cy.get(this.locators.Confirm_batch_creation_yes).click();
    cy.wait(2000);
    // cy.get(this.locators.statusMsg).then(($el) => {
    //   const text = $el.text();
    //   cy.log(text);
    //  })


  }

  ClickOnCreateBatchOfPayment_cancelBtnClick() {
    cy.get(this.locators.CB_Product_group).select('All');
    cy.wait(2000);
    cy.get(this.locators.CB_Payment_mode).select('CASH');
    cy.wait(2000);
    cy.get(this.locators.CB_From_date).type('16/11/2023');
    cy.wait(2000);
    cy.get(this.locators.CB_To_date).type('29/04/2024');
    cy.wait(2000);
    cy.get(this.locators.CB_search_btn).click({ force: true });
    cy.wait(2000);
    //cy.get(this.locators.CB_serch_result).click();
    //cy.wait(2000);
    // cy.get(this.locators.CB_summary_submit).click();
    // cy.wait(2000);
    // cy.get(this.locators.Cancel_batch_creation).click();

  }

  ClickOnCreateBatchOfPayment_DataError() {
    cy.get(this.locators.CB_Product_group).select('Consumer Loan');
    cy.wait(2000);
    cy.get(this.locators.CB_Payment_mode).select('CASH');
    cy.wait(2000);
    cy.get(this.locators.CB_From_date).type('08/01/2024');
    cy.wait(2000);
    cy.get(this.locators.CB_To_date).type('08/01/2024');
    cy.wait(2000);
    cy.get(this.locators.CB_search_btn).click({ force: true });
    //cy.get(this.locators.CB_statusMsg).then(($el) => {
    //const text = $el.text();
    //cy.log(text);
    //})
  }

  Depositslip() {

    cy.get(this.locators.Depositslip).click();



  }

  ClickOnCreatePayInSlip() {
    cy.get(this.locators.Create_PayIn_slip).click();
  }

  ClickOnCreatePayInSlip_SubmitBtn() {
    cy.get(this.locators.CPS_product_grp).select('Consumer Loan');
    cy.wait(2000);
    cy.get(this.locators.CPS_Payin_ID).type('12345');
    cy.wait(2000);
    cy.get(this.locators.CPS_Payment_mode).select('CASH');
    cy.wait(2000);
    cy.get(this.locators.CPS_Acc_num).select('012000026008');
    cy.wait(2000);
    cy.get(this.locators.CPS_holder_name).select('My Bank');
    cy.wait(2000);
    cy.get(this.locators.CPS_bank_name).select('FAMILY BANK LIMITED');
    cy.wait(2000);
    cy.get(this.locators.CPS_branch).select('All the branches');
    cy.wait(2000);
    cy.get(this.locators.CPS_DOdeposit).click();
    cy.wait(2000);
    cy.get('.today-date').click();
    cy.wait(1000);
    cy.get('.ng-select-container') 
      .click(); 

    cy.get('.ng-option') 
      .first() 
      .click();
    cy.wait(2000);
    cy.get(this.locators.CPS_submit).click({ force: true });

  }

  ClickOnCreatePayInSlip_elementCheck() {
    cy.get(this.locators.CPS_product_grp).select('Consumer Loan');
    cy.wait(2000);
    cy.get(this.locators.CPS_Payin_ID).type('12345');
    cy.wait(2000);
    cy.get(this.locators.CPS_Payment_mode).select('CASH');
    cy.wait(2000);
    cy.get(this.locators.CPS_Acc_num).select('012000026008');
    cy.wait(2000);
    cy.get(this.locators.CPS_holder_name).select('My Bank');
    cy.wait(2000);
    cy.get(this.locators.CPS_bank_name).select('FAMILY BANK LIMITED');
    cy.wait(2000);
    cy.get(this.locators.CPS_branch).select('All the branches');
    cy.wait(2000);
    cy.get(this.locators.CPS_DOdeposit).click();
    cy.wait(2000);
    cy.get('.today-date').click();
    cy.wait(1000);
    cy.get('.ng-select-container') // Locate the dropdown container
      .click(); // Open the dropdown

    cy.get('.ng-option') // Locate the options within the dropdown
      .first() // Match the desired option by its text
      .click();
    cy.get(this.locators.CPS_submit).click({ force: true });
    cy.wait(2000);
    // cy.get(this.locators.total_amt, { timeout: 20000 }).should('be.visible');
    // cy.wait(2000);
    // cy.get(this.locators.reset_link, { timeout: 20000 }).should('be.visible');
    // cy.wait(2000);
    // cy.get(this.locators.generate_paySlip, { timeout: 20000 }).should('be.visible');
    // cy.wait(2000);
    // cy.get(this.locators.cancel_Btn, { timeout: 20000 }).should('be.visible');

  }

  ClickOnCreatePayInSlip_generate_paySlip() {
    cy.get(this.locators.CPS_product_grp).select('Consumer Loan');
    cy.wait(2000);
    cy.get(this.locators.CPS_Payin_ID).type('12386');
    cy.wait(2000);
    cy.get(this.locators.CPS_Payment_mode).select('CASH');
    cy.wait(2000);
    cy.get(this.locators.CPS_Acc_num).select('012000026008');
    cy.wait(2000);
    cy.get(this.locators.CPS_holder_name).select('My Bank');
    cy.wait(2000);
    cy.get(this.locators.CPS_bank_name).select('FAMILY BANK LIMITED');
    cy.wait(2000);
    cy.get(this.locators.CPS_branch).select('All the branches');
    cy.wait(2000);
    cy.get(this.locators.CPS_DOdeposit).click();
    cy.wait(2000);
     cy.get('.today-date').click();
    cy.wait(1000);
    cy.get(this.locators.CPS_DOdepositdate).click();
    cy.wait(2000);
    
    cy.get('.ng-select-container') // Locate the dropdown container
      .click(); // Open the dropdown

    cy.get('.ng-option') // Locate the options within the dropdown
      .first() // Match the desired option by its text
      .click();
    cy.get(this.locators.CPS_submit).click({ force: true });
    cy.wait(2000);
    // cy.get(this.locators.generate_paySlip, { timeout: 20000 }).should('be.visible');
    // cy.get(this.locators.generate_paySlip).click({force: true});
    // cy.get(this.locators.CB_Print, { timeout: 20000 }).should('be.visible');
    // cy.get(this.locators.CB_Print).click({force: true});

  }

  ClickOnCreatePayInSlip_cancel_paySlip() {
    cy.get(this.locators.CPS_product_grp).select('Consumer Loan');
    cy.wait(2000);
    cy.get(this.locators.CPS_Payin_ID).type('12345');
    cy.wait(2000);
    cy.get(this.locators.CPS_Payment_mode).select('CASH');
    cy.wait(2000);
    cy.get(this.locators.CPS_Acc_num).select('012000026008');
    cy.wait(2000);
    cy.get(this.locators.CPS_holder_name).select('My Bank');
    cy.wait(2000);
    cy.get(this.locators.CPS_bank_name).select('FAMILY BANK LIMITED');
    cy.wait(2000);
    cy.get(this.locators.CPS_branch).select('All the branches');
    cy.wait(2000);
    cy.get(this.locators.CPS_DOdeposit).click();
    cy.wait(2000);
      cy.get('.today-date').click();
    cy.wait(1000);
    cy.get(this.locators.CPS_DOdepositdate).click();
    cy.wait(2000);
   
    cy.get('.ng-select-container') // Locate the dropdown container
      .click(); // Open the dropdown

    cy.get('.ng-option') // Locate the options within the dropdown
      .first() // Match the desired option by its text
      .click();
    cy.wait(2000);
    cy.get(this.locators.CPS_submit).click({ force: true });
    cy.wait(2000);
    // cy.get(this.locators.cancel_Btn, { timeout: 20000 }).should('be.visible');
    // cy.get(this.locators.cancel_Btn).click({force: true});

  }

  ClickOnCreatePayInSlip_resetLink() {
    cy.get(this.locators.CPS_product_grp).select('Consumer Loan');
    cy.wait(2000);
    cy.get(this.locators.CPS_Payin_ID).type('12345');
    cy.wait(2000);
    cy.get(this.locators.CPS_Payment_mode).select('CASH');
    cy.wait(2000);
    cy.get(this.locators.CPS_Acc_num).select('012000026008');
    cy.wait(2000);
    cy.get(this.locators.CPS_holder_name).select('My Bank');
    cy.wait(2000);
    cy.get(this.locators.CPS_bank_name).select('FAMILY BANK LIMITED');
    cy.wait(2000);
    cy.get(this.locators.CPS_branch).select('All the branches');
    cy.wait(2000);
    cy.get(this.locators.CPS_DOdeposit).click();
    cy.wait(2000);
         cy.get('.today-date').click();
    cy.wait(1000);
    cy.get(this.locators.CPS_DOdepositdate).click();
    cy.wait(2000);

    cy.get('.ng-select-container') // Locate the dropdown container
      .click(); // Open the dropdown

    cy.get('.ng-option') // Locate the options within the dropdown
      .first() // Match the desired option by its text
      .click();
    cy.wait(2000);
    cy.get(this.locators.CPS_submit).click({ force: true });
    cy.wait(2000);
    // cy.get(this.locators.reset_link, { timeout: 20000 }).should('be.visible');
    // cy.wait(2000);
    // cy.get(this.locators.reset_link).click({force: true});

  }

  ClickOnCreatePayInSlip_updateData() {
    cy.get(this.locators.CPS_product_grp).select('Consumer Loan');
    cy.wait(2000);
    cy.get(this.locators.CPS_Payin_ID).type('12345');
    cy.wait(2000);
    cy.get(this.locators.CPS_Payment_mode).select('CASH');
    cy.wait(2000);
    cy.get(this.locators.CPS_Acc_num).select('012000026008');
    cy.wait(2000);
    cy.get(this.locators.CPS_holder_name).select('My Bank');
    cy.wait(2000);
    cy.get(this.locators.CPS_bank_name).select('FAMILY BANK LIMITED');
    cy.wait(2000);
    cy.get(this.locators.CPS_branch).select('All the branches');
    cy.wait(2000);
    //cy.get(this.locators.CPS_DOdeposit).click();
    //cy.wait(2000);
    //cy.get(this.locators.CPS_DOdepositdate).click();
    //cy.wait(2000);
    //cy.get(this.locators.CPS_batch_id).select('2891');
    cy.wait(2000);
    cy.get('input[name="depositDate"]').click();
    cy.wait(2000);
    cy.get('.today-date').click();
    cy.wait(2000);
    cy.get('.ng-select-container') // Locate the dropdown container
      .click(); // Open the dropdown

    cy.get('.ng-option') // Locate the options within the dropdown
      .first() // Match the desired option by its text
      .click();
    cy.wait(2000);
    cy.get(this.locators.CPS_submit).click({ force: true });
    cy.wait(2000);
    //cy.get(this.locators.generate_paySlip, { timeout: 20000 }).should('be.visible');
    cy.get(this.locators.generate_paySlip).click({ force: true });

  }

  ClickOnWalkInCustomerReceipt() {
    cy.get(this.locators.receipts).click();
    cy.get(this.locators.Walkin_customer_receipt).click();
    cy.wait(2000);
    cy.get(this.locators.WCR_cancel).click();
  }

  ClickOnWalkInCustomerReceipt_PRN_Err() {
    cy.get(this.locators.receipts).click();
    cy.get(this.locators.Walkin_customer_receipt).click();
    cy.wait(2000);
    cy.get(this.locators.WCR_physical_receipt).click();
    cy.wait(2000);
    cy.get(this.locators.WCR_collector_name).click();
    cy.get(this.locators.WCR_physical_receipt_Err).then(($el) => {
      const text = $el.text();
      cy.log(text);
    })

  }

  ClickOnWalkInCustomerReceipt_CAccNo_Err() {
    cy.get(this.locators.receipts).click();
    cy.get(this.locators.Walkin_customer_receipt).click();
    cy.wait(2000);
    cy.get(this.locators.WCR_Customer_ACC_number).click();
    cy.wait(2000);
    cy.get(this.locators.WCR_collector_name).click();
    cy.wait(2000);
    cy.get(this.locators.WCR_Customer_ACC_number_Err).then(($el) => {
      const text = $el.text();
      cy.log(text);
    })

  }

  ClickOnWalkInCustomerReceipt_RelationshipWithCustomer_Err() {
    cy.get(this.locators.receipts).click();
    cy.get(this.locators.Walkin_customer_receipt).click();
    cy.wait(2000);
    cy.get(this.locators.WCR_Relationship_with_customer).select('--Select--');
    cy.get(this.locators.WCR_Relationship_with_customer_Err).then(($el) => {
      const text = $el.text();
      cy.log(text);
    })

  }

  ClickOnWalkInCustomerReceipt_resetlink() {
    cy.get(this.locators.receipts).click();
    cy.get(this.locators.Walkin_customer_receipt).click();
    cy.wait(2000);
    cy.get(this.locators.WCR_physical_receipt).type('12345');
    cy.wait(2000);
    cy.get(this.locators.WCR_crdt_collector_id).type('12345');
    cy.wait(2000);
    cy.get(this.locators.WCR_physical_receipt_date).type('29/03/2024');
    cy.wait(2000);
    cy.get(this.locators.WCR_Customer_ACC_number).type('1667');
    cy.wait(2000);
    cy.get(this.locators.WCR_Relationship_with_customer).select('Herself/Himself');
    cy.wait(2000);
    cy.get(this.locators.WCR_mode_Of_Payment).select('CASH');
    cy.wait(2000);
    // cy.get(this.locators.WCR_reset, { timeout: 20000 }).should('be.visible');
    cy.get(this.locators.WCR_reset).click();
    cy.wait(2000);
    cy.get(this.locators.WCR_physical_receipt).click();

  }

  ClickOnCentral_ops_acknowledging_payin_slip() {
    cy.get(this.locators.Depositslip).click();
    cy.get(this.locators.Central_ops_acknowledging_payin_slip).click();
  }

  ClickOnCentral_ops_acknowledging_payin_slip_RadioBtn_visibility() {
    cy.get(this.locators.Depositslip).click();
    cy.get(this.locators.Central_ops_acknowledging_payin_slip).click();
    cy.wait(2000);
    cy.get(this.locators.Radio_btn1, { timeout: 20000 }).should('be.visible');
    cy.get(this.locators.Radio_btn2, { timeout: 20000 }).should('be.visible');
  }

  ClickOnCentral_ops_acknowledging_payin_slip_RadioBtn1() {
    cy.get(this.locators.Depositslip).click();
    cy.get(this.locators.Central_ops_acknowledging_payin_slip).click();
    cy.wait(2000);
    cy.get(this.locators.Radio_btn1).click({ force: true });
    cy.get(this.locators.Payin_slip_no, { timeout: 20000 }).should('be.visible');
    cy.get(this.locators.search_btn, { timeout: 20000 }).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.Payin_slip_no).type('012000026008');
    cy.wait(2000);
    cy.get(this.locators.Search_btn_radio1).click();
  }

  ClickOnC_opsAcknowledgingPayinSlip_Result_grid() {
    cy.get(this.locators.Depositslip).click();
     cy.wait(2000);
    cy.get(this.locators.Central_ops_acknowledging_payin_slip).click();
    cy.wait(2000);
    cy.get(this.locators.Radio_btn1).click({ force: true });
     cy.wait(2000);
    cy.get(this.locators.Payin_slip_no, { timeout: 20000 }).should('be.visible');
     cy.wait(2000);
    cy.get(this.locators.Search_btn_radio1, { timeout: 20000 }).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.Payin_slip_no).type('7160');
    cy.wait(2000);
    cy.get(this.locators.Search_btn_radio1).click();
     cy.wait(2000);
     cy.get('.form-check-group > label > input').click();
     cy.wait(2000);
    cy.get(this.locators.Clear_section, { timeout: 20000 }).scrollIntoView().should('be.visible');
     cy.wait(2000);
    cy.get(this.locators.deposit_slip_verified_by_ops, { timeout: 20000 }).scrollIntoView().should('be.visible');

  }

  ClickOnC_opsAcknowledgingPayinSlip_YesConfirm() {
    cy.get(this.locators.Depositslip).click();
     cy.wait(2000);
    cy.get(this.locators.Central_ops_acknowledging_payin_slip).click();
    cy.wait(2000);
    cy.get(this.locators.Radio_btn1).click({ force: true });
     cy.wait(2000);
    cy.get(this.locators.Payin_slip_no, { timeout: 20000 }).should('be.visible');
     cy.wait(2000);
    cy.get(this.locators.Search_btn_radio1, { timeout: 20000 }).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.Payin_slip_no).type('7160');
    cy.wait(2000);
    cy.get(this.locators.Search_btn_radio1).click();
     cy.wait(2000);
      cy.get('.form-check-group > label > input').click();
     cy.wait(2000);
    cy.get(this.locators.Clear_section, { timeout: 20000 }).scrollIntoView().should('be.visible');
     cy.wait(2000);
    cy.get(this.locators.deposit_slip_verified_by_ops, { timeout: 20000 }).scrollIntoView().should('be.visible');
    cy.wait(2000);
    // cy.get('.form-check-group > label > input').click();
    //  cy.wait(2000);
    cy.get(this.locators.deposit_slip_verified_by_ops).click();
     cy.wait(2000);
    cy.get(this.locators.Yes_confirm).click();

  }

  ClickOnC_opsAcknowledgingPayinSlip_updation_msg() {
    cy.get(this.locators.Depositslip).click();
     cy.wait(2000);
    cy.get(this.locators.Central_ops_acknowledging_payin_slip).click();
    cy.wait(2000);
    cy.get(this.locators.Radio_btn1).click({ force: true });
     cy.wait(2000);
    cy.get(this.locators.Payin_slip_no, { timeout: 20000 }).scrollIntoView().should('be.visible');
     cy.wait(2000);
    cy.get(this.locators.search_btn, { timeout: 20000 }).scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.Payin_slip_no).type('7160');
    cy.wait(2000);
    cy.get(this.locators.Search_btn_radio1).click();
     cy.wait(2000);
      cy.get('.form-check-group > label > input').click();
     cy.wait(2000);
    cy.get(this.locators.Clear_section, { timeout: 20000 }).should('be.visible');
     cy.wait(2000);
    cy.get(this.locators.deposit_slip_verified_by_ops, { timeout: 20000 }).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.checkbox1).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.deposit_slip_verified_by_ops).click();
     cy.wait(2000);
    cy.get(this.locators.Yes_confirm).click();
    //cy.get(this.locators.Update_msg).then(($el) => {
    //const text = $el.text();
    //cy.log(text);
    //})

  }

  ClickOnC_opsAcknowledgingPayinSlip_Cancel_workflow() {
    cy.get(this.locators.Depositslip).click();
     cy.wait(2000);
    cy.get(this.locators.Central_ops_acknowledging_payin_slip).click();
    cy.wait(2000);
    cy.get(this.locators.Radio_btn1).click({ force: true });
     cy.wait(2000);
    cy.get(this.locators.Payin_slip_no, { timeout: 20000 }).scrollIntoView().should('be.visible');
     cy.wait(2000);
    cy.get(this.locators.Search_btn_radio1, { timeout: 20000 }).scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.Payin_slip_no).type('7160');
    cy.wait(2000);
    cy.get(this.locators.Search_btn_radio1).click();
     cy.wait(2000);
      cy.get('.form-check-group > label > input').click();
     cy.wait(2000);
    cy.get(this.locators.Clear_section, { timeout: 20000 }).should('be.visible');
     cy.wait(2000);
    cy.get(this.locators.deposit_slip_verified_by_ops, { timeout: 20000 }).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.checkbox1).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Clear_section).click();
    //  cy.get(this.locators.cancel_workflow).click();

  }

  ClickOnCentral_ops_acknowledging_payin_slip_RadioBtn2() {
    cy.get(this.locators.Depositslip).click();
     cy.wait(2000);
    cy.get(this.locators.Central_ops_acknowledging_payin_slip).click();
    cy.wait(2000);
    cy.get(this.locators.Radio_btn2).click({ force: true });
     cy.wait(2000);
    cy.get(this.locators.Payin_slip_amt, { timeout: 20000 }).should('be.visible');
     cy.wait(2000);
    cy.get(this.locators.Deposit_mode, { timeout: 20000 }).should('be.visible');
     cy.wait(2000);
    cy.get(this.locators.Deposit_date_from, { timeout: 20000 }).should('be.visible');
     cy.wait(2000);
    cy.get(this.locators.Deposit_date_To, { timeout: 20000 }).should('be.visible');
     cy.wait(2000);

  }

  ClickOnCentral_ops_acknowledging_payin_slip_SearchBtn_err() {
    cy.get(this.locators.Depositslip).click();
     cy.wait(2000);
    cy.get(this.locators.Central_ops_acknowledging_payin_slip).click();
    cy.wait(2000);
    cy.get(this.locators.Radio_btn1).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Search_btn_radio1).click({ force: true });
     cy.wait(2000);
    //cy.get(this.locators.serchErr_msg).then(($el) => {
    //const text = $el.text();
    //cy.log(text);
    //})

  }

  ClickOnCentral_ops_acknowledging_payin_slip_specl_chrctr() {
    cy.get(this.locators.Depositslip).click();
     cy.wait(2000);
    cy.get(this.locators.Central_ops_acknowledging_payin_slip).click();
    cy.wait(2000);
    cy.get(this.locators.Radio_btn1).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Payin_slip_no).type('@@##$')
     cy.wait(2000);
    cy.get(this.locators.Search_btn_radio1).click({ force: true });
    //cy.get(this.locators.spcl_vhrctr_err).then(($el) => {
    //const text = $el.text();
    //cy.log(text);
    //})

  }

  ClickOnCentral_ops_acknowledging_payin_slip_serchBtn_radio2() {
    cy.get(this.locators.Depositslip).click();
    cy.get(this.locators.Central_ops_acknowledging_payin_slip).click();
    cy.wait(2000);
    cy.get(this.locators.Radio_btn2).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.search_btn).click({ force: true });
    //cy.get(this.locators.serchErr_msg_radio2).then(($el) => {
    //const text = $el.text();
    //cy.log(text);
    //})

  }

  ClickOnCentral_ops_acknowledging_payin_slip_IncorrectValue() {
    cy.get(this.locators.Depositslip).click();
    cy.get(this.locators.Central_ops_acknowledging_payin_slip).click();
    cy.wait(2000);
    cy.get(this.locators.Radio_btn2).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Payin_slip_amt).type('123456');
    cy.get(this.locators.search_btn).click({ force: true });
    //cy.get(this.locators.serchErr_radio2).then(($el) => {
    //const text = $el.text();
    //cy.log(text);
    //})

  }

  ClickOnWalkInCustomerReceipt_visibility() {
    cy.get(this.locators.receipts).click();
    cy.get(this.locators.Walkin_customer_receipt, { timeout: 20000 }).should('be.visible');
    cy.get(this.locators.Walkin_customer_receipt).click();

  }

  ClickOnWalkInCustomerReceipt_submit_payment() {
    cy.get(this.locators.receipts).click();
    cy.get(this.locators.Walkin_customer_receipt, { timeout: 20000 }).should('be.visible');
    cy.get(this.locators.Walkin_customer_receipt).click();
    cy.wait(2000);
    cy.get(this.locators.WCR_upload_receipt).should('exist').attachFile('170px-ReceiptSwiss.jpg');
    cy.wait(2000);
    cy.get(this.locators.WCR_Loan_Acc_radioBtn).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.WCR_collector_id).type('A ANBUSELVAN');
    cy.wait(2000);
    cy.get(this.locators.WCR_physical_receipt).type('2000015870');
    cy.wait(2000);
    cy.get(this.locators.WCR_physical_receipt_date).type('31/03/2024');
    cy.wait(2000);
    cy.get(this.locators.WCR_Customer_ACC_number).type('1667');
    cy.wait(2000);
    cy.get(this.locators.WCR_Relationship_with_customer).select('Herself/Himself');
    cy.wait(2000);
    cy.get(this.locators.WCR_mode_Of_Payment).select('CASH');
    cy.wait(2000);
    cy.get(this.locators.WCR_other_charges).type('11');
    cy.wait(2000);
    cy.get(this.locators.WCR_submit_payment).click({ force: true });
    cy.wait(2000);
  }

  ClickOnWalkInCustomerReceipt_mode_of_paymentr_Err() {
    cy.get(this.locators.receipts).click();
    cy.get(this.locators.Walkin_customer_receipt).click();
    cy.wait(2000);
    cy.get(this.locators.WCR_mode_Of_Payment).select('--Select--');
    cy.get(this.locators.WCR_mode_of_payment_Err).then(($el) => {
      const text = $el.text();
      cy.log(text);
    })

  }

  ClickOnWalkInCustomerReceipt_without_receipt_submit_payment() {
    cy.get(this.locators.receipts).click();
    cy.get(this.locators.Walkin_customer_receipt, { timeout: 2000 }).should('be.visible');
    cy.get(this.locators.Walkin_customer_receipt).click();
    cy.wait(2000);
    cy.fixture('ffc127d-sample_receipt.png').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'report.png',
        mimeType: 'png',
      });
    });
    //cy.get('.search-batch > :nth-child(1) > .col-md-6').click({force: true});
    cy.wait(2000);
    cy.get(this.locators.WCR_Loan_Acc_radioBtn).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.WCR_collector_id).type('ADMIN');
    cy.wait(2000);
  cy.get('[id^="ngb-typeahead-"] > .ng-star-inserted') 
  .first() 
  .click();

    cy.wait(2000);


    //cy.get(this.locators.CollectorName).type('a')
    //cy.wait(2000);
    //cy.get(this.locators.CollectorName).type('TestStaffTwo test'); // Type the full value you want
   // Wait for the dropdown options to appear
    //cy.get(this.locators.CollectorName) // Replace with the appropriate selector for the dropdown options
    //.contains('Admin Two') // Make sure the text matches what you expect
    //.click(); // Click the option to select it
    cy.wait(2000);
    // cy.get(this.locators.WCR_physical_receipt).type('2000015870');
    // cy.wait(2000);
   function generateRandomMobileNumber() {
  const randomNumber = Math.floor(Math.random() * 100000000); // 8-digit number
  return String(randomNumber).padStart(8, '0'); // Always 8 digits
}

cy.get(this.locators.WCR_physical_receipt).type(generateRandomMobileNumber());
cy.wait(2000);

    cy.wait(2000);
    cy.get(this.locators.WCR_physical_receipt_date).type('31/03/2024', { force: true });
    cy.wait(2000);
    cy.get(this.locators.WCR_Customer_ACC_number).type('1667');
    cy.wait(2000);
    cy.get(this.locators.WCR_Relationship_with_customer).select('Herself/Himself');
    cy.wait(2000);
    cy.get(this.locators.WCR_mode_Of_Payment).select('CASH');
    cy.wait(2000);
    cy.get(this.locators.WCR_other_charges).type('11');
    cy.wait(2000);
    cy.get(this.locators.WCR_submit_payment).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.SubmitPayment).click();
    // cy.wait(2000);
    // cy.get('body > app-root:nth-child(1) > div:nth-child(1) > div:nth-child(2) > app-navbar:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(5) > div:nth-child(1) > a:nth-child(1) > span:nth-child(2)').click();
    // cy.wait(2000);
    // cy.get('body > app-root:nth-child(1) > div:nth-child(1) > div:nth-child(2) > app-navbar:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1) > span:nth-child(2)').click();
    // cy.wait(2000);
    // cy.get('#batch_list').select('2929',{force:true});
    // cy.wait(2000);
    // cy.get('.btn').click({force: true});
    // cy.wait(2000);
    // cy.get('tbody > .ng-star-inserted > :nth-child(1) > a').click();
    // cy.wait(2000);
    // cy.get('.inside_table.ng-star-inserted > .table-responsive > .table > tbody > .ng-star-inserted > :nth-child(1)').click().should('be.visible');
    // cy.wait(2000);

  }

  ClickOnWalkInCustomerReceipt_upload_request_change() {
    cy.get(this.locators.receipts).click();
    cy.get(this.locators.Walkin_customer_receipt, { timeout: 20000 }).should('be.visible');
    cy.get(this.locators.Walkin_customer_receipt).click();
    cy.wait(2000);
    cy.get(this.locators.WCR_checkbox_mailId).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.WCR_mailId).type('abc@yopmail.com');
    cy.wait(2000);
    cy.get(this.locators.WCR_checkbox_number).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.WCR_number).type('8234567891');
    cy.wait(2000);
    // cy.get(this.locators.WCR_upload_request_change, { timeout: 20000 }).should('be.visible');
    cy.get(this.locators.WCR_upload_request_change).click({ force: true });

  }

  ClickOnWalkInCustomerReceipt_creditcard_options_visibility() {
    cy.get(this.locators.receipts).click();
    cy.wait(2000);
    cy.get(this.locators.Walkin_customer_receipt, { timeout: 20000 }).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.Walkin_customer_receipt).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.WCR_creditCard_radioBtn).click({ force: true });
    cy.wait(2000);
    // cy.get(this.locators.WCR_crdt_Upload_physical_receipt_image_btn, { timeout: 20000 }).should('be.visible');
    // cy.get(this.locators.WCR_loan_and_creditcard_radio_btn, { timeout: 20000 }).should('be.visible');
    cy.get(this.locators.WCR_crdt_physical_receipt_no, { timeout: 20000 }).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.WCR_crdt_collector_id, { timeout: 20000 }).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.WCR_crdt_collector_name, { timeout: 20000 }).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.WCR_crdtphysical_receipt_date, { timeout: 20000 }).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.WCR_crdt_credit_card_number, { timeout: 20000 }).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.WCR_crdt_customer_name, { timeout: 20000 }).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.WCR_crdt_ptp_amount, { timeout: 20000 }).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.WCR_crdt_statemented_balance, { timeout: 20000 }).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.WCR_crdt_minimum_due_amount, { timeout: 20000 }).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.WCR_crdt_relationship_with_customer, { timeout: 20000 }).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.WCR_crdt_mode_of_payment, { timeout: 20000 }).should('be.visible');
    cy.wait(2000);
    //  cy.get(this.locators.WCR_crdt_amount_description_table, { timeout: 20000 }).should('be.visible');
    //cy.get(this.locators.WCR_crdt_pan, { timeout: 20000 }).should('be.visible');

    cy.get(this.locators.WCR_crdt_email_id, { timeout: 20000 }).scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.WCR_crdt_mobile_number, { timeout: 20000 }).should('be.visible');
    cy.wait(2000);
    //cy.get(this.locators.WCR_crdt_submit_payment, { timeout: 20000 }).should('be.visible');
    //cy.get(this.locators.WCR_crdt_cancel, { timeout: 20000 }).should('be.visible');
    //cy.get(this.locators.WCR_crdt_reset_button, { timeout: 20000 }).should('be.visible');

  }

  SearchandViewPayinSlip069() {
    cy.get(this.locators.payments).click();
    cy.wait(2000);
    cy.get(this.locators.Depositslip).click();
    cy.wait(2000);
    cy.get(this.locators.SearchandViewPayinSlip069).click().click();
    cy.wait(2000);
    cy.contains("Search and View Deposit Slip").should('be.visible');
    cy.wait(2000);

  }

  SearchandViewPayinSlip071() {
    cy.get(this.locators.payments).click();
    cy.wait(2000);
    cy.get(this.locators.Depositslip).click();
    cy.wait(2000);
    cy.get(this.locators.SearchandViewPayinSlip069).click().click();
cy.wait(2000);
    cy.get(this.locators.selectproductgroup071).select('Consumer Loan');
cy.wait(2000);


    cy.get(this.locators.selectmodeofpayment071).select('CASH');
    cy.wait(2000);
    cy.get(this.locators.clickonsearch071).click();
    cy.wait(2000);

  }

  SearchandViewPayinSlip072() {
    cy.get(this.locators.payments).click();
    cy.wait(2000);
    cy.get(this.locators.Depositslip).click();
    cy.wait(2000);
    cy.get(this.locators.SearchandViewPayinSlip069).click().click();
    cy.wait(2000);
    cy.get(this.locators.selectproductgroup071).select('Credit Card', { force: true });
    cy.wait(2000);
    cy.get(this.locators.selectmodeofpayment071).select('CASH');
    cy.wait(2000);
    cy.get(this.locators.clickonsearch071).click();
    cy.wait(2000);
    cy.get(this.locators.Searchandviewpayinslip).then(($el) => {
    const text = $el.text();
    cy.log(text);
    })
    cy.get(this.locators.Searchandviewpayinslip).click();
    cy.wait(2000);
  }
  ReceiptCancellationrequest_071() {

    cy.get(this.locators.payments).click();
    cy.wait(2000);
    cy.get(this.locators.receipts).click();
    cy.wait(2000);
    cy.get(this.locators.ClickRRCR).click();


  }
  ReceiptCancellationrequest_072() {
    cy.wait(2000);
    cy.contains("Customer Account Number").should('be.visible');
    cy.wait(2000);
    cy.contains("Receipt Issuance From Date").should('be.visible');
    cy.wait(2000);
    cy.contains("Receipt Issuance To Date").should('be.visible');


  }
  ReceiptCancellationrequest_073() {

    cy.get(this.locators.payments).click();
    cy.wait(2000);
    cy.get(this.locators.receipts).click();
    cy.wait(2000);
    cy.get(this.locators.ClickRRCR).click();
    cy.wait(2000);
    cy.get(this.locators.EnterCusAccNo).type("6563336746376");
    cy.get('.btn').click();

  }
  ReceiptCancellationRequestApprovalRejection_074() {
    cy.get(this.locators.payments).click();
    cy.wait(2000);
    cy.get(this.locators.receipts).click();
    cy.wait(2000);
    cy.get(this.locators.ClickARCR).click();


  }
  ReceiptCancellationRequestApprovalRejection_075() {

    cy.wait(2000);
    cy.contains("Customer Account Number:").should('be.visible');
    cy.wait(2000);
    cy.contains("Receipt Issuance From Date:").should('be.visible');
    cy.wait(2000);
    cy.contains("Receipt Issuance To Date:").should('be.visible');
    cy.wait(2000);
    // cy.contains("Search").should('be.visible');


  }

  ReceiptCancellationRequestApprovalRejection_076() {
    cy.get(this.locators.payments).click();
    cy.wait(2000);
    cy.get(this.locators.receipts).click();
    cy.wait(2000);
    cy.get(this.locators.ClickARCR).click();
    cy.wait(2000);
    cy.get(this.locators.fillcustomreaccountnumber).type("63543746373");
    cy.wait(2000);
    cy.get("button[type='submit']").click();



  }

  ReceiptCancellationRequestApprovalRejection_077() {
    cy.get(this.locators.payments).click();
    cy.wait(2000);
    cy.get(this.locators.receipts).click();
    cy.wait(2000);
    cy.get(this.locators.ClickARCR).click();
    cy.wait(2000);
    cy.get(this.locators.fillcustomreaccountnumber).type("63543746373");
    cy.wait(2000);
    cy.get("button[type='submit']").click();



  }


  SearchandPrintBatch1398() {
    cy.get(this.locators.payments).click();
    cy.wait(2000);
    cy.get(this.locators.ClickBOP).click();
cy.wait(2000);
    cy.get(this.locators.SearchandPrintBatch).click();   // open the ng-select dropdown
cy.wait(2000);
cy.get(this.locators.Select_BatchID).click();
cy.wait(2000);
cy.get('.ng-dropdown-panel .ng-option').then(($options) => {
  const randomIndex = Math.floor(Math.random() * $options.length); // pick random index
  cy.wrap($options[randomIndex]).click();  // click random option
});
cy.wait(1000);
    cy.get(this.locators.clickonsearch1398).click({ force: true });
    cy.wait(2000);
    cy.get('[role="alert"]').should('contain.text', 'Batches loaded successfully!');
       cy.wait(2000);
  }


  SearchandViewPayinSlipID1399() {
    cy.wait(20000)
    cy.get(this.locators.payments).click();
    cy.get(this.locators.Depositslip).click();
    cy.get(this.locators.SearchandViewPayinSlipID1399).click().click();
    cy.wait(2000);
    cy.get(this.locators.clickonsearch1399).click({ force: true });
    //cy.get(this.locators.selectatlistone1399).then(($el) => {
    //const text = $el.text();
    //cy.log(text);
    //})
  }


  sendduplicateemailereceiptSMS1412() {
    cy.get(this.locators.payments).click();
    cy.wait(2000);
    cy.get(this.locators.receipts).click();
    cy.wait(2000);
    cy.get(this.locators.sendduplicateemailereceiptSMS1412).click().click();
    cy.wait(2000);
    cy.get(this.locators.customreaccountnumber1412).type('1667');
    cy.wait(2000);
    cy.get("input[name='fromdate']").click();
    cy.get('.previous > span').click();
    cy.get('.previous > span').click();
    cy.get('.previous > span').click();
    cy.get('.previous > span').click();
    cy.get('.previous > span').click();
    cy.get('.previous > span').click();
    cy.get('tbody > :nth-child(1) > :nth-child(7) > .ng-star-inserted').click();
    cy.get("input[name='todate']").click();
    cy.get('.previous > span').click();
    cy.get('.previous > span').click();
    cy.get('.previous > span').click();
    cy.get('.previous > span').click();
    cy.get('.previous > span').click();
    cy.get('.previous > span').click();
    cy.get(':nth-child(5) > :nth-child(3) > .ng-star-inserted').click();
    cy.get(this.locators.clickonsearch1399).click({ force: true });
    // cy.get(this.locators.searchandsend).then(($el) => {
    //   const text = $el.text();
    //  cy.log(text);
    //  })
  }

 sendduplicateemailereceiptSMS1413() {
    cy.get(this.locators.payments).click();
    cy.wait(2000);

    cy.get(this.locators.receipts).click();
    cy.wait(2000);

    cy.get(this.locators.sendduplicateemailereceiptSMS1412)
      .click({ force: true });

    cy.wait(2000);

    cy.get(this.locators.customreaccountnumber1412)
      .click()
      .clear()
      .type('1434545646');

    // Select the first Agent ID field (since the locator matches 2 elements)
    cy.get(this.locators.agentid1414)
      .first()
      .should('be.visible')
      .clear()
      .type('@123#12');

    cy.get(this.locators.clickonsearch1399)
      .click({ force: true });

    cy.get(this.locators.Customrenumberisrequired)
      .should('be.visible')
      .then(($el) => {
        cy.log($el.text().trim());
      });
}

  sendduplicateemailereceiptSMS1414() {
    cy.get(this.locators.payments).click();
    cy.get(this.locators.receipts).click();
    cy.wait(2000);
    cy.get(this.locators.sendduplicateemailereceiptSMS1412).click().click();
    cy.get(this.locators.customreaccountnumber1412).type('1434545646');
    cy.get(this.locators.agentid1414).type('@123#12');
    cy.get(this.locators.validagentid1414).then(($el) => {
      const text = $el.text();
      cy.log(text);
    })
  }

  sendduplicateemailereceiptSMS1415() {
    cy.get(this.locators.payments).click();
     cy.wait(2000);
    cy.get(this.locators.receipts).click();
    cy.wait(2000);
    cy.get(this.locators.sendduplicateemailereceiptSMS1412).click();
     cy.wait(2000);
    cy.get(this.locators.customreaccountnumber1412).type('1434545646');
     cy.wait(2000);
    cy.get(this.locators.customername1415).type('@123#12');
     cy.wait(2000);
    cy.get(this.locators.validagentid1414).then(($el) => {
      const text = $el.text();
      cy.log(text);
    })
  }

  sendduplicateemailereceiptSMS1424() {
    cy.get(this.locators.payments).click();
     cy.wait(2000);
    cy.get(this.locators.ClickBOP).click();
     cy.wait(2000);
    cy.get(this.locators.Searchandeditbatch1424).click();

 cy.wait(2000);
cy.get('input').click();
cy.wait(1000);
cy.get('.ng-dropdown-panel .ng-option').then(($options) => {
  const randomIndex = Math.floor(Math.random() * $options.length); // pick random index
  cy.wrap($options[randomIndex]).click();  // click random option
});

    cy.wait(2000);
    cy.get(this.locators.clickonsearch1399).click({ force: true });
    // cy.get(this.locators.validagentid1414).then(($el) => {
    // const text = $el.text();
    // cy.log(text);
    // })
  }


  sendduplicateemailereceiptSMS1425() {
    cy.get(this.locators.payments).click();
    cy.wait(2000);
    cy.get(this.locators.ClickBOP).click();
    cy.wait(2000);
    cy.get(this.locators.Searchandeditbatch1424).click();
    cy.wait(2000);
   cy.get('input').click();
cy.wait(1000);
cy.get('.ng-dropdown-panel .ng-option').then(($options) => {
  const randomIndex = Math.floor(Math.random() * $options.length); // pick random index
  cy.wrap($options[randomIndex]).click();  // click random option
});

    cy.wait(2000);
    cy.get(this.locators.clickonsearch1399).click({ force: true });
    // cy.get(this.locators.validagentid1414).then(($el) => {
    //   const text = $el.text();
    //  cy.log(text);
    // })
  }


  sendduplicateemailereceiptSMS1426() {
    cy.get(this.locators.payments).click();
    cy.get(this.locators.ClickBOP).click();
    cy.get(this.locators.Searchandeditbatch1424).click().click();
    cy.get('input').click();
cy.wait(1000);
cy.get('.ng-dropdown-panel .ng-option').then(($options) => {
  const randomIndex = Math.floor(Math.random() * $options.length); // pick random index
  cy.wrap($options[randomIndex]).click();  // click random option
});

    cy.wait(2000);
    cy.get(this.locators.clickonsearch1399).click({ force: true });
    // cy.get(this.locators.validagentid1414).then(($el) => {
    //   const text = $el.text();
    //  cy.log(text);
    //  })
  }

  PaymentModule_119() {

    cy.get(this.locators.payments).click();
    cy.wait(2000);
    cy.get(this.locators.ClickBOP).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnRBPB).click();
    cy.wait(2000);
    cy.get(this.locators.EnterBatchID).type("3162");
    cy.wait(2000);
    cy.get(this.locators.ClickOnSearch).click();
    cy.wait(2000);
    // cy.contains("Receipt No").should("be.visible")
    // cy.wait(2000);
    // cy.contains("Product Group").should("be.visible")
    // cy.wait(2000);
    // cy.contains("Receipt Date").should("be.visible")
    // cy.wait(2000);
    // cy.contains("Customer Name").should("be.visible")
    // cy.wait(2000);
    // cy.contains("Customer Account No").should("be.visible")
    // cy.wait(2000);
    // cy.contains("Mode of Payment").should("be.visible")
    // cy.wait(2000);
    // cy.contains("Instrument No").should("be.visible")
    // cy.wait(2000);
    // cy.contains("Drawee Bank & Drawee Branch").should("be.visible")
    // cy.wait(2000);


  }
  PaymentModule_120() {

    cy.get(this.locators.payments).click();
    cy.wait(2000);
    cy.get(this.locators.ClickBOP).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnRBPB).click();
    cy.wait(2000);
    cy.get(this.locators.EnterBatchID).type("3159");
    cy.wait(2000);
    cy.get(this.locators.ClickOnBatchSearch).click();
    cy.wait(2000);
    // cy.contains("Receipt No").should("be.visible")
    // cy.wait(2000);
    // cy.contains("Product Group").should("be.visible")
    // cy.wait(2000);
    // cy.contains("Receipt Date").should("be.visible")
    // cy.wait(2000);
    // cy.contains("Customer Name").should("be.visible")
    // cy.wait(2000);
    // cy.contains("Customer Account No").should("be.visible")
    // cy.wait(2000);
    // cy.contains("Mode of Payment").should("be.visible")
    // cy.wait(2000);
    // cy.contains("Instrument No").should("be.visible")
    // cy.wait(2000);
    // cy.contains("Drawee Bank & Drawee Branch").should("be.visible")
    // cy.wait(2000);


  }

  PaymentModule_121() {

    cy.get(this.locators.payments).click();
    cy.wait(2000);
    cy.get(this.locators.ClickBOP).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnRBPB).click();
    cy.wait(2000);
    cy.get(this.locators.EnterBatchID).type("3159");
    cy.wait(2000);
    cy.get(this.locators.ClickOnBatchSearch).click();
    cy.wait(2000);
    //cy.get(this.locators.ClickOnCheckBox).click();
    cy.wait(2000);
    //cy.get(this.locators.ClickOnSubmit).click();
  }
  PaymentModule_122() {

    cy.get(this.locators.payments).click();
    cy.wait(2000);
    cy.get(this.locators.ClickBOP).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnRBPB).click();
    cy.wait(2000);
    cy.get(this.locators.EnterBatchID).type("3159");
    cy.wait(2000);
    cy.get(this.locators.ClickOnBatchSearch).click();
    cy.wait(2000);
    // cy.get(this.locators.ClickOnCheckBox).click();
    // cy.wait(2000);
    // cy.get(this.locators.ClickOnCancel).click();
  }

  SearchStaffTestPage_01(){

    cy.get(this.locators.clickonum).click();
    cy.wait(2000);
    cy.get(this.locators.ClickonSttafEmp).click();
    cy.wait(2000);
    cy.get(this.locators.SearchStaff).click();
    cy.wait(2000);
    cy.get(this.locators.Select_status).select("Approved");
    cy.wait(2000);
    cy.get(this.locators.ClickOn_search).click();
    cy.wait(3000);
    cy.contains("Search Result").should("be.visible");
    cy.wait(3000);

  }

  SearchStaffTestPage_02(){

     cy.get(this.locators.clickonum).click();
    cy.wait(2000);
    cy.get(this.locators.ClickonSttafEmp).click();
    cy.wait(2000);
    cy.get(this.locators.SearchStaff).click();
    cy.wait(2000);
    cy.get(this.locators.Select_status).select("Disabled");
    cy.wait(2000);
    cy.get(this.locators.ClickOn_search).click();
    cy.wait(3000);
    cy.contains("Search Result").should("be.visible");
    cy.wait(3000);
    cy.get(':nth-child(1) > :nth-child(9) > .form-control-group > .form-check-group > label > input').click();
    cy.wait(2000);
    cy.get('#btn-enable').click();
    cy.wait(3000);


  }

  SearchStaffTestPage_03(){

  cy.get(this.locators.clickonum).click();
    cy.wait(2000);
    cy.get(this.locators.ClickonSttafEmp).click();
    cy.wait(2000);
    cy.get(this.locators.SearchStaff).click();
    cy.wait(2000);
    cy.get(this.locators.Select_status).select("Pending Approval");
    cy.wait(2000);
    cy.get(this.locators.ClickOn_search).click();
    cy.wait(3000);
    cy.contains("Search Result").should("be.visible");
    cy.wait(3000);
     cy.get(':nth-child(1) > :nth-child(9) > .form-control-group > .form-check-group > label > input').click();
    cy.wait(2000);
    cy.get('#btn-approve').click();
    cy.wait(3000);

  }

  SearchStaffTestPage_04(){

   cy.get(this.locators.clickonum).click();
    cy.wait(2000);
    cy.get(this.locators.ClickonSttafEmp).click();
    cy.wait(2000);
    cy.get(this.locators.SearchStaff).click();
    cy.wait(2000);
    cy.get(this.locators.Select_status).select("Pending Approval");
    cy.wait(2000);
    cy.get(this.locators.ClickOn_search).click();
    cy.wait(3000);
    cy.contains("Search Result").should("be.visible");
    cy.wait(3000);
     cy.get(':nth-child(1) > :nth-child(9) > .form-control-group > .form-check-group > label > input').click();
    cy.wait(2000);
    cy.get('#btn-reject').click();
    cy.wait(3000);


  }

  SearchStaffTestPage_05(){

    cy.get(this.locators.clickonum).click();
    cy.wait(2000);
    cy.get(this.locators.ClickonSttafEmp).click();
    cy.wait(2000);
    cy.get(this.locators.SearchStaff).click();
    cy.wait(2000);
    cy.get(this.locators.Select_Dept).select("Audit and Risk");
    cy.wait(2000);
    cy.get(this.locators.ClickOn_search).click();
    cy.wait(3000);
    cy.get('[role="alert"]').should('be.visible').and('contain', 'Please enter the mandatory field');
    cy.wait(3000);

  }

  SearchStaffTestPage_06(){

    cy.get(this.locators.clickonum).click();
    cy.wait(2000);
    cy.get(this.locators.ClickonSttafEmp).click();
    cy.wait(2000);
    cy.get(this.locators.SearchStaff).click();
    cy.wait(2000);
    cy.get(this.locators.Select_Dept).select("Audit and Risk");
    cy.wait(2000);
     cy.get(this.locators.Select_Designation).select("Audit Manager");
    cy.wait(2000);
     cy.get(this.locators.Select_status).select("Approved");
    cy.wait(2000);
    cy.get(this.locators.ClickOn_search).click();
    cy.wait(3000);
     cy.contains("Search Result").should("be.visible");
    cy.wait(3000)

  }

  SearchStaffTestPage_07(){

     cy.get(this.locators.clickonum).click();
    cy.wait(2000);
    cy.get(this.locators.ClickonSttafEmp).click();
    cy.wait(2000);
    cy.get(this.locators.SearchStaff).click();
    cy.wait(2000);
    // cy.get(this.locators.Select_Dept).select("Audit and Risk");
    // cy.wait(2000);
    //  cy.get(this.locators.Select_Designation).select("Audit Manager");
    // cy.wait(2000);
     cy.get(this.locators.Select_status).select("Disabled");
    cy.wait(2000);
    cy.get(this.locators.ClickOn_search).click();
    cy.wait(3000);
     cy.contains("Search Result").should("be.visible");
    cy.wait(3000)

  }

  SearchStaffTestPage_08(){

      cy.get(this.locators.clickonum).click();
    cy.wait(2000);
    cy.get(this.locators.ClickonSttafEmp).click();
    cy.wait(2000);
    cy.get(this.locators.SearchStaff).click();
    cy.wait(2000);
    cy.get(this.locators.Select_Dept).select("Audit and Risk");
    cy.wait(2000);
     cy.get(this.locators.Select_Designation).select("Audit Manager");
    cy.wait(2000);
     cy.get(this.locators.Select_status).select("Approved");
    cy.wait(2000);
    cy.get(this.locators.ClickOn_search).click();
    cy.wait(3000);
     cy.contains("Search Result").should("be.visible");
    cy.wait(3000);
    cy.get(':nth-child(1) > :nth-child(9) > .form-control-group > .form-check-group > label > input').click();
    cy.wait(1000);
    cy.get('#btn-disbale').click();
    cy.wait(3000);


  }
  

}

export default PaymentsPage;
