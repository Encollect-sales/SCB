import { getLocators } from '../utils/locatorUtils';
import { getBaseUrl } from '../utils/configUtils';

class PaymentsPage {
  constructor(locators) {
    this.locators = locators;
  }

  PaymentModule001() {
    cy.get(this.locators.payments).click();
    cy.wait(2000);
    cy.get(this.locators.onlinePaymentRequest).click();
    cy.wait(1000);
    cy.contains('Online Payment Requests').should('be.visible');
    cy.wait(1000);
  }

  PaymentModule002() {
    cy.get(this.locators.payments).click();
    cy.wait(2000);
    cy.get(this.locators.onlinePaymentRequest).click();
    cy.wait(1000);
    cy.get(this.locators.agencyUser).click();
    cy.wait(1000);
    cy.contains('Agency(s)').should('be.visible');
    cy.wait(1000);
  }

  PaymentModule003() {
    cy.get(this.locators.payments).click();
    cy.wait(2000);
    cy.get(this.locators.onlinePaymentRequest).click();
    cy.wait(1000);
    cy.contains('Online Payment Requests').should('be.visible');
    cy.wait(1000);
    cy.contains('From Date').should('be.visible');
    cy.wait(1000);
    cy.contains('To Date').should('be.visible');
    cy.wait(1000);
    cy.contains('Request Status').should('be.visible');
    cy.wait(1000);
    cy.contains('Request Mode').should('be.visible');
    cy.wait(1000);
    cy.contains('User Branch(s)').should('be.visible');
    cy.wait(1000);
    cy.contains('Staff(s)').should('be.visible');
    cy.wait(1000);
  }

  PaymentModule004() {
    cy.get(this.locators.payments).click();
    cy.wait(2000);
    cy.get(this.locators.onlinePaymentRequest).click();
    cy.wait(1000);
   cy.contains('Online Payment Requests').should('be.visible');
    cy.wait(1000);
    cy.contains('From Date').should('be.visible');
    cy.wait(1000);
    cy.contains('To Date').should('be.visible');
    cy.wait(1000);
    cy.contains('Request Status').should('be.visible');
    cy.wait(1000);
    cy.contains('Request Mode').should('be.visible');
    cy.wait(1000);
    cy.contains('User Branch(s)').should('be.visible');
    cy.wait(1000);
    cy.contains('Staff(s)').should('be.visible');
    cy.wait(1000);
    cy.get('#generate-report-button').should("be.disabled");
    cy.wait(1000);
  }

  PaymentModule005() {
    cy.get(this.locators.payments).click();
    cy.wait(2000);
    cy.get(this.locators.onlinePaymentRequest).click();
    cy.wait(1000);
    cy.get('#receiptDate_from').click(); // open datepicker
    cy.wait(1000);
    // STEP 1: Calculate the date 30 days before today
    const today = new Date();
    const targetDate = new Date(today);
    targetDate.setDate(today.getDate() - 30);
    const targetDay = targetDate.getDate();
    const targetMonth = targetDate.toLocaleString('default', { month: 'long' }); // e.g., 'September'
    const targetYear = targetDate.getFullYear();
    // STEP 2: Wait for calendar to be visible
    cy.get('.bs-datepicker-body', { timeout: 5000 }).should('be.visible');
    // STEP 3: Navigate back to correct month if needed
    cy.get('.bs-datepicker-head').then(($header) => {
      const headerText = $header.text();
      if (!headerText.includes(targetMonth) || !headerText.includes(targetYear)) {
        // Click "previous month" button until target month is shown
        function goBackToMonth() {
          cy.get('.bs-datepicker-head').then(($h) => {
            const text = $h.text();
            if (!text.includes(targetMonth) || !text.includes(targetYear)) {
              cy.get('.bs-datepicker-head .previous').click();
              cy.wait(300); // Wait for animation
              goBackToMonth(); // Repeat until correct
            }
          });
        }
        goBackToMonth();
      }

    });

    // STEP 4: Select the day
    cy.get('.bs-datepicker-body')
      .contains('span', new RegExp(`^${targetDay}$`))
      .not('.disabled')
      .click();
    cy.wait(1000);
    cy.get('#receiptDate_to').click(); // Open datepicker
    cy.get('.bs-datepicker-body', { timeout: 5000 }).should('be.visible');

    // Get today’s date
    const today1 = new Date();
    const todayDay = today1.getDate();

    // Select today's date in the calendar
    cy.get('.bs-datepicker-body')
      .contains('span', new RegExp(`^${todayDay}$`))
      .not('.disabled')
      .click();
    cy.wait(1000);
    cy.get('#generate-report-button').click();
    cy.wait(1000);
    cy.contains('Search Results').should('be.visible');
    cy.wait(1000);
  }


    PaymentModule006() {
    cy.get(this.locators.payments).click();
    cy.wait(2000);
    cy.get(this.locators.onlinePaymentRequest).click();
    cy.wait(1000);
    cy.get('#receiptDate_from').click(); // open datepicker
    cy.wait(1000);
    // STEP 1: Calculate the date 30 days before today
    const today = new Date();
    const targetDate = new Date(today);
    targetDate.setDate(today.getDate() - 30);
    const targetDay = targetDate.getDate();
    const targetMonth = targetDate.toLocaleString('default', { month: 'long' }); // e.g., 'September'
    const targetYear = targetDate.getFullYear();
    // STEP 2: Wait for calendar to be visible
    cy.get('.bs-datepicker-body', { timeout: 5000 }).should('be.visible');
    // STEP 3: Navigate back to correct month if needed
    cy.get('.bs-datepicker-head').then(($header) => {
      const headerText = $header.text();
      if (!headerText.includes(targetMonth) || !headerText.includes(targetYear)) {
        // Click "previous month" button until target month is shown
        function goBackToMonth() {
          cy.get('.bs-datepicker-head').then(($h) => {
            const text = $h.text();
            if (!text.includes(targetMonth) || !text.includes(targetYear)) {
              cy.get('.bs-datepicker-head .previous').click();
              cy.wait(300); // Wait for animation
              goBackToMonth(); // Repeat until correct
            }
          });
        }
        goBackToMonth();
      }

    });

    // STEP 4: Select the day
    cy.get('.bs-datepicker-body')
      .contains('span', new RegExp(`^${targetDay}$`))
      .not('.disabled')
      .click();
    cy.wait(1000);
    cy.get('#receiptDate_to').click(); // Open datepicker
    cy.get('.bs-datepicker-body', { timeout: 5000 }).should('be.visible');

    // Get today’s date
    const today1 = new Date();
    const todayDay = today1.getDate();

    // Select today's date in the calendar
    cy.get('.bs-datepicker-body')
      .contains('span', new RegExp(`^${todayDay}$`))
      .not('.disabled')
      .click();
    cy.wait(1000);
    cy.get('#generate-report-button').click();
    cy.wait(1000);
    cy.contains('Search Results').should('be.visible');
    cy.wait(1000);
    cy.get(':nth-child(4) > .page-link').click();
    cy.wait(1000);
  }

    PaymentModule007() {
    cy.get(this.locators.payments).click();
    cy.wait(2000);
    cy.get(this.locators.onlinePaymentRequest).click();
    cy.wait(1000);
    cy.get('#receiptDate_from').click(); // open datepicker
    cy.wait(1000);
    // STEP 1: Calculate the date 30 days before today
    const today = new Date();
    const targetDate = new Date(today);
    targetDate.setDate(today.getDate() - 30);
    const targetDay = targetDate.getDate();
    const targetMonth = targetDate.toLocaleString('default', { month: 'long' }); // e.g., 'September'
    const targetYear = targetDate.getFullYear();
    // STEP 2: Wait for calendar to be visible
    cy.get('.bs-datepicker-body', { timeout: 5000 }).should('be.visible');
    // STEP 3: Navigate back to correct month if needed
    cy.get('.bs-datepicker-head').then(($header) => {
      const headerText = $header.text();
      if (!headerText.includes(targetMonth) || !headerText.includes(targetYear)) {
        // Click "previous month" button until target month is shown
        function goBackToMonth() {
          cy.get('.bs-datepicker-head').then(($h) => {
            const text = $h.text();
            if (!text.includes(targetMonth) || !text.includes(targetYear)) {
              cy.get('.bs-datepicker-head .previous').click();
              cy.wait(300); // Wait for animation
              goBackToMonth(); // Repeat until correct
            }
          });
        }
        goBackToMonth();
      }

    });

    // STEP 4: Select the day
    cy.get('.bs-datepicker-body')
      .contains('span', new RegExp(`^${targetDay}$`))
      .not('.disabled')
      .click();
    cy.wait(1000);
    cy.get('#receiptDate_to').click(); // Open datepicker
    cy.get('.bs-datepicker-body', { timeout: 5000 }).should('be.visible');

    // Get today’s date
    const today1 = new Date();
    const todayDay = today1.getDate();

    // Select today's date in the calendar
    cy.get('.bs-datepicker-body')
      .contains('span', new RegExp(`^${todayDay}$`))
      .not('.disabled')
      .click();
    cy.wait(1000);
    cy.get('#generate-report-button').click();
    cy.wait(1000);
    cy.contains('Search Results').should('be.visible');
    cy.wait(1000);
    cy.get(':nth-child(4) > .page-link').click();
    cy.wait(1000);
    cy.get('.pagination-count > .form-select').select('50');
    cy.wait(1000);
  }

    PaymentModule008() {
    cy.get(this.locators.payments).click();
    cy.wait(2000);
    cy.get(this.locators.onlinePaymentRequest).click();
    cy.wait(1000);
    cy.get(this.locators.agencyUser).click();
    cy.get('#receiptDate_from').click(); // open datepicker
    cy.wait(1000);
    // STEP 1: Calculate the date 30 days before today
    const today = new Date();
    const targetDate = new Date(today);
    targetDate.setDate(today.getDate() - 30);
    const targetDay = targetDate.getDate();
    const targetMonth = targetDate.toLocaleString('default', { month: 'long' }); // e.g., 'September'
    const targetYear = targetDate.getFullYear();
    // STEP 2: Wait for calendar to be visible
    cy.get('.bs-datepicker-body', { timeout: 5000 }).should('be.visible');
    // STEP 3: Navigate back to correct month if needed
    cy.get('.bs-datepicker-head').then(($header) => {
      const headerText = $header.text();
      if (!headerText.includes(targetMonth) || !headerText.includes(targetYear)) {
        // Click "previous month" button until target month is shown
        function goBackToMonth() {
          cy.get('.bs-datepicker-head').then(($h) => {
            const text = $h.text();
            if (!text.includes(targetMonth) || !text.includes(targetYear)) {
              cy.get('.bs-datepicker-head .previous').click();
              cy.wait(300); // Wait for animation
              goBackToMonth(); // Repeat until correct
            }
          });
        }
        goBackToMonth();
      }

    });

    // STEP 4: Select the day
    cy.get('.bs-datepicker-body')
      .contains('span', new RegExp(`^${targetDay}$`))
      .not('.disabled')
      .click();
    cy.wait(1000);
    cy.get('#receiptDate_to').click(); // Open datepicker
    cy.get('.bs-datepicker-body', { timeout: 5000 }).should('be.visible');

    // Get today’s date
    const today1 = new Date();
    const todayDay = today1.getDate();

    // Select today's date in the calendar
    cy.get('.bs-datepicker-body')
      .contains('span', new RegExp(`^${todayDay}$`))
      .not('.disabled')
      .click();
    cy.wait(1000);
    cy.get('#generate-report-button').click();
    cy.wait(1000);
    cy.contains('Search Results').should('be.visible');
    cy.wait(1000);

}

PaymentModule009() {
    cy.get(this.locators.payments).click();
    cy.wait(2000);
    cy.get(this.locators.onlinePaymentRequest).click();
    cy.wait(1000);
    cy.get(this.locators.agencyUser).click();
    cy.get('#receiptDate_from').click(); // open datepicker
    cy.wait(1000);
    // STEP 1: Calculate the date 30 days before today
    const today = new Date();
    const targetDate = new Date(today);
    targetDate.setDate(today.getDate() - 30);
    const targetDay = targetDate.getDate();
    const targetMonth = targetDate.toLocaleString('default', { month: 'long' }); // e.g., 'September'
    const targetYear = targetDate.getFullYear();
    // STEP 2: Wait for calendar to be visible
    cy.get('.bs-datepicker-body', { timeout: 5000 }).should('be.visible');
    // STEP 3: Navigate back to correct month if needed
    cy.get('.bs-datepicker-head').then(($header) => {
      const headerText = $header.text();
      if (!headerText.includes(targetMonth) || !headerText.includes(targetYear)) {
        // Click "previous month" button until target month is shown
        function goBackToMonth() {
          cy.get('.bs-datepicker-head').then(($h) => {
            const text = $h.text();
            if (!text.includes(targetMonth) || !text.includes(targetYear)) {
              cy.get('.bs-datepicker-head .previous').click();
              cy.wait(300); // Wait for animation
              goBackToMonth(); // Repeat until correct
            }
          });
        }
        goBackToMonth();
      }

    });

    // STEP 4: Select the day
    cy.get('.bs-datepicker-body')
      .contains('span', new RegExp(`^${targetDay}$`))
      .not('.disabled')
      .click();
    cy.wait(1000);
    cy.get('#receiptDate_to').click(); // Open datepicker
    cy.get('.bs-datepicker-body', { timeout: 5000 }).should('be.visible');

    // Get today’s date
    const today1 = new Date();
    const todayDay = today1.getDate();

    // Select today's date in the calendar
    cy.get('.bs-datepicker-body')
      .contains('span', new RegExp(`^${todayDay}$`))
      .not('.disabled')
      .click();
    cy.wait(1000);
    cy.get('#generate-report-button').click();
    cy.wait(1000);
    cy.contains('Search Results').should('be.visible');
    cy.wait(1000);
    cy.get(':nth-child(4) > .page-link').click();
    cy.wait(1000);

}
  
    PaymentModule010() {
    cy.get(this.locators.payments).click();
    cy.wait(2000);
    cy.get(this.locators.onlinePaymentRequest).click();
    cy.wait(1000);
    cy.get(this.locators.agencyUser).click();
    cy.wait(1000);
    cy.get('#receiptDate_from').click(); // open datepicker
    cy.wait(1000);
    // STEP 1: Calculate the date 30 days before today
    const today = new Date();
    const targetDate = new Date(today);
    targetDate.setDate(today.getDate() - 30);
    const targetDay = targetDate.getDate();
    const targetMonth = targetDate.toLocaleString('default', { month: 'long' }); // e.g., 'September'
    const targetYear = targetDate.getFullYear();
    // STEP 2: Wait for calendar to be visible
    cy.get('.bs-datepicker-body', { timeout: 5000 }).should('be.visible');
    // STEP 3: Navigate back to correct month if needed
    cy.get('.bs-datepicker-head').then(($header) => {
      const headerText = $header.text();
      if (!headerText.includes(targetMonth) || !headerText.includes(targetYear)) {
        // Click "previous month" button until target month is shown
        function goBackToMonth() {
          cy.get('.bs-datepicker-head').then(($h) => {
            const text = $h.text();
            if (!text.includes(targetMonth) || !text.includes(targetYear)) {
              cy.get('.bs-datepicker-head .previous').click();
              cy.wait(300); // Wait for animation
              goBackToMonth(); // Repeat until correct
            }
          });
        }
        goBackToMonth();
      }

    });

    // STEP 4: Select the day
    cy.get('.bs-datepicker-body')
      .contains('span', new RegExp(`^${targetDay}$`))
      .not('.disabled')
      .click();
    cy.wait(1000);
    cy.get('#receiptDate_to').click(); // Open datepicker
    cy.get('.bs-datepicker-body', { timeout: 5000 }).should('be.visible');

    // Get today’s date
    const today1 = new Date();
    const todayDay = today1.getDate();

    // Select today's date in the calendar
    cy.get('.bs-datepicker-body')
      .contains('span', new RegExp(`^${todayDay}$`))
      .not('.disabled')
      .click();
    cy.wait(1000);
    cy.get('#generate-report-button').click();
    cy.wait(1000);
    cy.contains('Search Results').should('be.visible');
    cy.wait(1000);
    cy.get(':nth-child(4) > .page-link').click();
    cy.wait(1000);
    cy.get('.pagination-count > .form-select').select('50');
    cy.wait(1000);
  }  

  PaymentModule011() {
    cy.get(this.locators.payments).click();
    cy.wait(2000);
    cy.get(this.locators.onlinePaymentRequest).click();
    cy.wait(1000);
    cy.get(this.locators.agencyUser).click();
    cy.wait(1000);
    cy.get('#receiptDate_from').click(); // open datepicker
    cy.wait(1000);
    // STEP 1: Calculate the date 30 days before today
    const today = new Date();
    const targetDate = new Date(today);
    targetDate.setDate(today.getDate() - 30);
    const targetDay = targetDate.getDate();
    const targetMonth = targetDate.toLocaleString('default', { month: 'long' }); // e.g., 'September'
    const targetYear = targetDate.getFullYear();
    // STEP 2: Wait for calendar to be visible
    cy.get('.bs-datepicker-body', { timeout: 5000 }).should('be.visible');
    // STEP 3: Navigate back to correct month if needed
    cy.get('.bs-datepicker-head').then(($header) => {
      const headerText = $header.text();
      if (!headerText.includes(targetMonth) || !headerText.includes(targetYear)) {
        // Click "previous month" button until target month is shown
        function goBackToMonth() {
          cy.get('.bs-datepicker-head').then(($h) => {
            const text = $h.text();
            if (!text.includes(targetMonth) || !text.includes(targetYear)) {
              cy.get('.bs-datepicker-head .previous').click();
              cy.wait(300); // Wait for animation
              goBackToMonth(); // Repeat until correct
            }
          });
        }
        goBackToMonth();
      }

    });

    // STEP 4: Select the day
    cy.get('.bs-datepicker-body')
      .contains('span', new RegExp(`^${targetDay}$`))
      .not('.disabled')
      .click();
    cy.wait(1000);
    cy.get('#receiptDate_to').click(); // Open datepicker
    cy.get('.bs-datepicker-body', { timeout: 5000 }).should('be.visible');

    // Get today’s date
    const today1 = new Date();
    const todayDay = today1.getDate();

    // Select today's date in the calendar
    cy.get('.bs-datepicker-body')
      .contains('span', new RegExp(`^${todayDay}$`))
      .not('.disabled')
      .click();
    cy.wait(1000);
    cy.get('#generate-report-button').click();
    cy.wait(1000);
    cy.contains('Search Results').should('be.visible');
    cy.wait(1000);
    cy.get(':nth-child(4) > .page-link').click();
    cy.wait(1000);
    cy.get('.card-header > div > .btn').click();
    cy.wait(1000);
    cy.get('.card-header > div > .btn').click();
    cy.wait(1000);
  }  

}

export default PaymentsPage;
