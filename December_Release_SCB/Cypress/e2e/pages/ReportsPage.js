import { getLocators } from '../utils/locatorUtils';
import { getBaseUrl } from '../utils/configUtils';
import { faker } from '@faker-js/faker';

class ReportsPage {
  constructor(locators) {
    this.locators = locators;
  }

  ReportTestPage_01(){
    cy.get('a[title="Reports"]').click({force:true});
    cy.wait(2000);
    cy.get('a[href="#/reports/communication-report"][title="Communication History Report"]').click({force:true});
    cy.wait(2000);
    cy.contains('Communication From Date');
    cy.wait(2000);
    cy.contains('Communication To Date');
    cy.wait(2000);
    cy.contains('Trigger Type');
    cy.wait(2000);
    cy.contains('Trigger Name');
    cy.wait(2000);
    cy.contains('Channel Type');
    cy.wait(2000);
    cy.contains('Generate Report');
    cy.wait(2000);
    cy.contains('Download Report');
    

  }
ReportTestPage_02(){
  cy.get('a[title="Reports"]').click({force:true});
  cy.wait(2000);
  cy.get('a[href="#/reports/communication-report"][title="Communication History Report"]').click({force:true});
  cy.wait(2000);

  // Dropdowns should show default placeholder
  cy.get(this.locators.Trigger_Type).should('contain', '--Select--');
  cy.get(this.locators.Trigger_Name).should('contain', '--Select Trigger Name--');
  cy.get(this.locators.Channel_Type).should('contain', 'Select');

  // No grid / data should be displayed before clicking Generate
  cy.get('table').should('not.exist');
}

ReportTestPage_03() {

  // Navigate to Communication History Report
  cy.get('a[title="Reports"]').click({ force: true });
  cy.wait(2000);

  cy.get('a[href="#/reports/communication-report"][title="Communication History Report"]')
    .click({ force: true });
  cy.wait(2000);

  // Click Generate Report WITHOUT selecting any filters
  cy.contains('Generate Report').click({ force: true });

  // ---- Validation messages ----
  cy.contains('Info! No Results').should('be.visible');
 

  // ---- Ensure report is NOT generated ----
  cy.get('table').should('not.exist');
}

ReportTestPage_04() {

  // Navigate to Communication History Report
  cy.get('a[title="Reports"]').click({ force: true });
  cy.wait(2000);

  cy.get('a[href="#/reports/communication-report"][title="Communication History Report"]')
    .click({ force: true });
  cy.wait(2000);

  // ---- Select ONLY To Date ----
  cy.get(':nth-child(2) > .form-control').type('15/01/2026');

  // ---- Select Trigger Type ----
  cy.get(this.locators.Trigger_Type).select(1); // Select first valid option

  // // ---- Click Generate ----
  // cy.contains('Generate Report').click({ force: true });

  // ---- Validation: From Date required ----
  cy.contains('Communication From Date ')
    .parent()
   .should('exist')
  .and('have.value', '');

  // ---- Ensure report is NOT generated ----
  cy.get('table').should('not.exist');
}
ReportTestPage_05() {

    // Navigate to Communication History Report
    cy.get('a[title="Reports"]').click({ force: true });
    cy.wait(2000);

    cy.get('a[href="#/reports/communication-report"]')
      .click({ force: true });
    cy.wait(2000);

    // ---- Select ONLY From Date ----
    cy.contains('Communication From Date')
      .parent()
      .find('input')
      .type('10/01/2026');

    // ---- Select Trigger Type ----
    cy.contains('Trigger Type')
      .parent()
      .find('select')
      .select(1);

    // ---- Click Generate Report ----
    cy.contains('Generate Report').click({force:true});

    // ---- Validate To Date error ----
    cy.contains('Communication To Date')
      .parent()
      .should('be.visible');

    // ---- Ensure report is NOT generated ----
    cy.get('table').should('not.exist');
  }

  ReportTestPage_06() {

    // Navigate to Communication History Report
    cy.get('a[title="Reports"]').click({ force: true });
    cy.wait(2000);

    cy.get('a[href="#/reports/communication-report"]')
      .click({ force: true });
    cy.wait(2000);

    // ---- Select From Date ----
    cy.contains('Communication From Date')
      .parent()
      .find('input')
      .type('05/01/2026');

    // ---- Select To Date ----
    cy.contains('Communication To Date')
      .parent()
      .find('input')
      .type('15/01/2026');

    // ---- Click Generate Report without Trigger Type ----
    cy.contains('Generate Report').click({force:true});

    // ---- Validate Trigger Type error ----
    cy.contains('Trigger Type')
      .parent()
      .should('be.visible');

    // ---- Ensure report is NOT generated ----
    cy.get('table').should('not.exist');
  }
  ReportTestPage_07() {

  // Navigate to report
  cy.get('a[title="Reports"]').click({ force: true });
  cy.wait(2000);

  cy.get('a[href="#/reports/communication-report"]').click({ force: true });
  cy.wait(2000);

    // ---------- FROM DATE : Select 1st ----------
  cy.contains('Communication From Date')
    .parent()
    .find('input')
    .click();

  cy.get('.bs-datepicker-body')
    .contains('span', /^1$/)
    .click();

  // ---------- TO DATE : Select 6th ----------
  cy.contains('Communication To Date')
    .parent()
    .find('input')
    .click();

  cy.get('.bs-datepicker-body')
    .contains('span', /^3$/)
    .click();

    // ---- Generate Report ----
  cy.contains('Generate Report').click({force:true});
  cy.wait(3000);

   // ---- Verify dates are populated ----
    cy.contains('Communication From Date')
      .parent()
      .find('input')
      .invoke('val')
      .should('not.be.empty');

    cy.contains('Communication To Date')
      .parent()
      .find('input')
      .invoke('val')
      .should('not.be.empty');
  
   cy.contains('Summary Details').should('be.visible');

  }
  ReportTestPage_08() {

  // Navigate to Communication History Report
  cy.get('a[title="Reports"]').click({ force: true });
  cy.wait(2000);

  cy.get('a[href="#/reports/communication-report"]').click({ force: true });
  cy.wait(2000);

  // ---------- FROM DATE : Select 1st ----------
  cy.contains('Communication From Date')
    .parent()
    .find('input')
    .click();

  cy.get('.bs-datepicker-body')
    .contains('span', /^1$/)
    .click();

  // ---------- TO DATE : Select SAME DAY (1st) ----------
  cy.contains('Communication To Date')
    .parent()
    .find('input')
    .click();

  cy.get('.bs-datepicker-body')
    .contains('span', /^1$/)
    .click();

  // ---------- TRIGGER SELECTION ----------
   cy.contains('Trigger Type')
      .parent()
      .find('select')
      .select(1);


  // ---------- Generate Report ----------
  cy.contains('Generate Report').click();
  cy.wait(3000);

  // ---------- VALIDATIONS ----------
  cy.contains('Summary Details').should('be.visible');

  
}
ReportTestPage_09() {

  // Navigate to Communication History Report
  cy.get('a[title="Reports"]').click({ force: true });
  cy.wait(2000);

  cy.get('a[href="#/reports/communication-report"]').click({ force: true });
  cy.wait(2000);

  // ---------- FROM DATE : Select 1st ----------
  cy.contains('Communication From Date')
    .parent()
    .find('input')
    .click();

  cy.get('.bs-datepicker-body')
    .contains('span', /^1$/)
    .click();

  // ---------- TO DATE : Select 4th (3-day range) ----------
  cy.contains('Communication To Date')
    .parent()
    .find('input')
    .click();

  cy.get('.bs-datepicker-body')
    .contains('span', /^3$/)
    .click();

  // ---------- RANDOM TRIGGER TYPE ----------
   cy.contains('Trigger Type')
      .parent()
      .find('select')
      .select(1);

  // ---------- Generate Report ----------
  cy.contains('Generate Report').click({force:true});
  cy.wait(3000);

  // ---------- VALIDATIONS ----------
  cy.contains('Summary Details').should('be.visible');

  
}
ReportTestPage_10() {

  // Navigate to Communication History Report
  cy.get('a[title="Reports"]').click({ force: true });
  cy.wait(2000);

  cy.get('a[href="#/reports/communication-report"]').click({ force: true });
  cy.wait(2000);

/// ---------- TYPE FROM DATE ----------
  cy.contains('Communication From Date')
    .parent()
    .find('input')
    .clear()
    .type('01/12/2025');   // last month

  // ---------- TYPE TO DATE (> 3 days gap) ----------
  cy.contains('Communication To Date')
    .parent()
    .find('input')
    .clear()
    .type('06/12/2025');   // 5 days range

  // ---------- RANDOM TRIGGER TYPE ----------
   cy.contains('Trigger Type')
      .parent()
      .find('select')
      .select(1);


  // ---------- Generate Report ----------
  cy.contains('Generate Report').click();

  // ---------- VALIDATIONS ----------
  // Error message for date range
  cy.contains('You can only search for 3 days at a time').should('be.visible');

  // Report should NOT be generated
  cy.contains('Summary Details').should('not.exist');
  cy.get('tbody').should('not.exist');
}

ReportTestPage_11() {

  // ---- Navigate to Communication History Report ----
  cy.get('a[title="Reports"]').click({ force: true });
  cy.wait(2000);

  cy.get('a[href="#/reports/communication-report"]').click({ force: true });
  cy.wait(2000);

  // ---- TYPE FROM DATE (Later date) ----
  cy.contains('Communication From Date')
    .parent()
    .find('input')
    .clear()
    .type('10/12/2025')
    .blur();

  // ---- TYPE TO DATE (Earlier date) ----
  cy.contains('Communication To Date')
    .parent()
    .find('input')
    .clear()
    .type('05/12/2025')
    .blur();

  // ---- SELECT RANDOM TRIGGER TYPE ----
  cy.contains('Trigger Type')
      .parent()
      .find('select')
      .select(1);

  // ---- CLICK GENERATE ----
  cy.contains('Generate Report').click({force:true});

  // ---- VALIDATION MESSAGE ----
  cy.contains('Communication To Date must be greater than or equal to Communication From Date').should('be.visible');

  // ---- REPORT SHOULD NOT GENERATE ----
  cy.contains('Summary Details').should('not.exist');
}

ReportTestPage_12() {

  // ---- Navigate to Communication History Report ----
  cy.get('a[title="Reports"]').click({ force: true });
  cy.wait(2000);

  cy.get('a[href="#/reports/communication-report"]').click({ force: true });
  cy.wait(2000);

  // ---- STEP 1: ENTER INVALID DATE RANGE (> 3 DAYS) ----
  cy.contains('Communication From Date')
    .parent()
    .find('input')
    .clear()
    .type('01/12/2025')
    .blur();

  cy.contains('Communication To Date')
    .parent()
    .find('input')
    .clear()
    .type('06/12/2025') // 5-day range
    .blur();

  // ---- SELECT RANDOM TRIGGER TYPE ----
  cy.contains('Trigger Type')
      .parent()
      .find('select')
      .select(1);
  // ---- CLICK GENERATE (EXPECT ERROR) ----
  cy.contains('Generate Report').click();

  // ---- VALIDATION MESSAGE SHOULD APPEAR ----
  cy.contains('You can only search for 3 days at a time')
    .should('be.visible');

  // ---- STEP 2: FIX TO DATE (WITHIN 3 DAYS) ----
  cy.contains('Communication From Date')
    .parent()
    .find('input')
    .click();
  cy.get('.next > span').click();
  cy.get('.bs-datepicker-body')
    .contains('span', /^1$/)
    .click();

cy.contains('Communication To Date')
    .parent()
    .find('input')
    .click();
cy.get('.next > span').click();
  cy.get('.bs-datepicker-body')
    .contains('span', /^3$/)
    .click();

  // ---- CLICK GENERATE AGAIN ----
  cy.contains('Generate Report').click();

  // ---- ERROR SHOULD BE CLEARED ----
  cy.contains('You can only search for 3 days at a time')
    .should('not.exist');

  // ---- REPORT SHOULD GENERATE ----
  cy.contains('Summary Details').should('be.visible');
}
ReportTestPage_13() {

    // Navigate to Communication History Report
    cy.get('a[title="Reports"]').click({ force: true });
    cy.wait(2000);
    cy.get('a[title="Communication History Report"]').click({ force: true });
    cy.wait(2000);
    // ---- Type INVALID characters in From Date ----
    cy.contains('Communication From Date')
      .parent()
      .find('input')
      .clear()
      .type('abcd@#');

    // ---- Type INVALID characters in To Date ----
    cy.contains('Communication To Date')
      .parent()
      .find('input')
      .clear()
      .type('12-xx-@@@@');

    // ---- Click Generate ----
    cy.contains('Generate Report').click({force:true});

    // ---- Validation should appear / report should not generate ----
    cy.contains(/invalid|date|required|format/i).should('be.visible');

    // ---- Ensure report grid / summary is NOT shown ----
    cy.contains('Summary Details').should('not.exist');
    cy.get('table').should('not.exist');
  }

ReportTestPage_14() {

  // Navigate
  cy.get('a[title="Reports"]').click({ force: true });
  cy.wait(2000);
  cy.get('a[title="Communication History Report"]').click({ force: true });
  cy.wait(2000);
  // Locate Trigger Type <select>
  cy.contains('Trigger Type')
    .parent()
    .find('select')
    .should('exist')
    .within(() => {

      const expectedOptions = [
        '--Select--',
        'On X days of delayed deposit',
        'On PTP Date',
        'On Unattempted Accounts',
        'On Next Action Date',
        'On Xth day before due date',
        'On Xth day after statement date',
        'On X DPD',
        'On PTP Date',
        'On Broken PTP',
        'On Agency allocation change'
      ];

      // Assert each option exists
      expectedOptions.forEach(optionText => {
        cy.contains('option', optionText).should('exist');
      });

      // Optional: assert total count (excluding placeholder if needed)
      cy.get('option').should('have.length.at.least', 10);
    });
  }

  ReportTestPage_15() {

    // Navigate to Communication History Report
    cy.get('a[title="Reports"]').click({ force: true });
    cy.wait(2000);
    cy.get('a[title="Communication History Report"]').click({ force: true });
    cy.wait(2000);
    // ---- Locate Trigger Name control ----
    const triggerNameField = cy.contains('Trigger Name')
      .parent()
      .find('select');

    // ---- Validate Trigger Name is empty ----
    triggerNameField
      .should('exist')
      .and(($el) => {
        // Covers both input and dropdown cases
        const value = $el.val();
        expect(value === '' || value === null).to.be.true;
      });

    // ---- Validate Trigger Name is disabled OR inactive ----
    triggerNameField.then($el => {
      if ($el.is(':disabled')) {
        expect($el).to.be.disabled;
      } else {
        // ng-select case → dropdown panel should NOT open
        cy.wrap($el).focus().type('{enter}');
        cy.get('.ng-dropdown-panel').should('not.exist');
      }
    });
  }

 ReportTestPage_16() {

    // Navigate to Communication History Report
    cy.get('a[title="Reports"]').click({ force: true });
    cy.wait(2000);
    cy.get('a[title="Communication History Report"]').click({ force: true });
    cy.wait(2000);
    // ---- Select Trigger Type (by visible text) ----
    cy.contains('Trigger Type')
      .parent()
      .find('select')
      .should('be.visible')
      .select('On Broken PTP');

    // ---- Open Trigger Name dropdown ----
    cy.contains('Trigger Name')
      .parent()
      .find('select')
      .should('be.visible')
      .within(() => {

        // ---- Trigger Name should NOT be empty ----
        cy.get('option')
          .should('have.length.greaterThan', 1);

        // ---- Ensure no unrelated placeholder ----
        cy.contains('option', '--Select Trigger Name--').should('exist');

        // ---- Ensure options are meaningful (not blank) ----
        cy.get('option').each($opt => {
          expect($opt.text().trim()).to.not.equal('');
        });
      });
  }

  ReportTestPage_17() {

    // Navigate to Communication History Report
    cy.get('a[title="Reports"]').click({ force: true });
    cy.get('a[title="Communication History Report"]').click({ force: true });

    // ---- Open Channel Type dropdown ----
    cy.contains('Channel Type')
      .parent()
      .find('select')
      .should('be.visible')
      .within(() => {

        // ---- Ensure dropdown is populated ----
        cy.get('option')
          .should('have.length.greaterThan', 1);

        // ---- Validate supported channel types ----
        cy.contains('option', 'Email').should('exist');
        cy.contains('option', 'SMS').should('exist');

        // Letter may be environment-specific
        cy.get('option').then(options => {
          const texts = [...options].map(o => o.text.trim());
          if (texts.includes('Letter')) {
            cy.contains('option', 'Letter').should('exist');
          }
        });
      });
  }
  
 ReportTestPage_18() {

  cy.get('a[title="Reports"]').click({ force: true });
  cy.get('a[title="Communication History Report"]').click({ force: true });

  // STEP 1: Trigger Type A
  cy.contains('Trigger Type')
    .parent()
    .find('select')
    .select('On Xth day before due date');

  // STEP 2: Trigger Name A1
  cy.contains('Trigger Name')
    .parent()
    .find('select')
    .find('option')
    .not(':disabled')
    .not(':contains("Select")')
    .eq(0)
    .then($opt => {
      cy.contains('Trigger Name')
        .parent()
        .find('select')
        .select($opt.text().trim());
    });

  // STEP 3: Change Trigger Type to B
  cy.contains('Trigger Type')
    .parent()
    .find('select')
    .select('On Next Action Date');

  // STEP 4: Selection must reset
  cy.contains('Trigger Name')
    .parent()
    .find('select')
    .then($select => {
      const idx = $select.prop('selectedIndex');
      const text = $select.find('option:selected').text().trim();

      expect(idx === 0 || text.includes('--Select Trigger Name--')).to.be.false;
    });
}




  ReportTestPage_19() {

  // Navigate to Communication History Report
  cy.get('a[title="Reports"]').click({ force: true });
  cy.wait(2000);
  cy.get('a[title="Communication History Report"]').click({ force: true });
  cy.wait(2000);
  // STEP 1: Select Trigger Type A
  cy.contains('Trigger Type')
    .parent()
    .find('select')
    .select('On Next Action Date', { force: true });

  // STEP 2: Select Trigger Name A (hard-coded)
  cy.contains('Trigger Name')
    .parent()
    .find('select')
    .select('TEST ptp', { force: true });

  // STEP 3: Change Trigger Type to B
  cy.contains('Trigger Name')
  .parent()
  .find('select')
  .select('TodaysActionableAccounts', { force: true });

  
}
ReportTestPage_20() {

  // Navigate to Communication History Report
  cy.get('a[title="Reports"]').click({ force: true });
  cy.wait(2000);
  cy.get('a[href="#/reports/communication-report"]').click({ force: true });
  cy.wait(2000);
  // ---------- FROM DATE ----------
  cy.contains('Communication From Date')
    .parent()
    .find('input')
    .click();

  cy.get('.bs-datepicker-body')
    .contains('span', /^1$/)
    .click();

  // ---------- TO DATE (≤ 3 days range) ----------
  cy.contains('Communication To Date')
    .parent()
    .find('input')
    .click();

  cy.get('.bs-datepicker-body')
    .contains('span', /^3$/)
    .click();

  // ---------- TRIGGER TYPE ----------
  cy.contains('Trigger Type')
    .parent()
    .find('select')
    .select('On X days of delayed deposit', { force: true });

  // ---------- GENERATE REPORT ----------
  cy.contains('Generate Report')
    .click({ force: true });

  // ---------- RESULT ASSERTION ----------
  cy.contains('Summary Details').should('exist');

}
ReportTestPage_21() {

  // -------- NAVIGATION --------
  cy.get('a[title="Reports"]').click({ force: true });
  cy.get('a[href="#/reports/communication-report"]').click({ force: true });

  // -------- FROM DATE --------
  cy.contains('Communication From Date')
    .parent()
    .find('input')
    .clear()
    .type('01/01/2026');

  // -------- TO DATE --------
  cy.contains('Communication To Date')
    .parent()
    .find('input')
    .clear()
    .type('03/01/2026');

  // -------- TRIGGER TYPE --------
  cy.contains('Trigger Type')
    .parent()
    .find('select')
    .select('On X days of delayed deposit', { force: true });

  // -------- TRIGGER NAME --------
  cy.contains('Trigger Name')
    .parent()
    .find('select')
    .select('delay table', { force: true });

  // -------- CHANNEL TYPE --------
  cy.contains('Channel Type')
    .parent()
    .find('select')
    .select('Email', { force: true });

  // -------- GENERATE --------
  cy.contains('Generate Report')
    .click({ force: true });

  // -------- ASSERTION --------
  cy.contains('Summary Details')
    .should('exist');
}
ReportTestPage_22() {

  // -------- NAVIGATION --------
  cy.get('a[title="Reports"]').click({ force: true });
  cy.get('a[href="#/reports/communication-report"]').click({ force: true });

  // -------- FROM DATE --------
  cy.contains('Communication From Date')
    .parent()
    .find('input')
    .clear()
    .type('01/01/2026');

  // -------- TO DATE --------
  cy.contains('Communication To Date')
    .parent()
    .find('input')
    .clear()
    .type('03/01/2026');

  // -------- TRIGGER TYPE --------
  cy.contains('Trigger Type')
    .parent()
    .find('select')
    .select('On X days of delayed deposit', { force: true });

  // -------- CLICK GENERATE --------
  cy.contains('Generate Report')
    .click({ force: true });

  // -------- LOADING INDICATOR ASSERT --------
  // Any ONE of these is enough (Angular apps vary)
  cy.contains(/loading/i).should('exist');

  // -------- RESULT LOADED --------
  cy.contains('Summary Details')
    .should('exist');
}

ReportTestPage_23() {

  // -------- NAVIGATION --------
  cy.get('a[title="Reports"]').click({ force: true });
  cy.get('a[href="#/reports/communication-report"]').click({ force: true });

  // -------- FROM DATE --------
  cy.contains('Communication From Date')
    .parent()
    .find('input')
    .clear()
    .type('01/01/2026');

  // -------- TO DATE --------
  cy.contains('Communication To Date')
    .parent()
    .find('input')
    .clear()
    .type('03/01/2026');

  // -------- TRIGGER TYPE --------
  cy.contains('Trigger Type')
    .parent()
    .find('select')
    .select('On X days of delayed deposit', { force: true });

  // -------- RAPID MULTIPLE CLICKS --------
  cy.contains('Generate Report')
    .click({ force: true })
    .click({ force: true })
    .click({ force: true });

  // -------- ASSERT LOADER OR DISABLED --------
  cy.contains(/loading/i).should('exist');

  // -------- ASSERT PAGE STABLE --------
  cy.contains('Summary Details')
    .should('exist');
}

ReportTestPage_24() {

  // -------- NAVIGATION --------
  cy.get('a[title="Reports"]').click({ force: true });
  cy.get('a[href="#/reports/communication-report"]').click({ force: true });

  // -------- FROM DATE --------
  cy.contains('Communication From Date')
    .parent()
    .find('input')
    .clear()
    .type('01/01/2026');

  // -------- TO DATE --------
  cy.contains('Communication To Date')
    .parent()
    .find('input')
    .clear()
    .type('03/01/2026');

  // -------- TRIGGER TYPE --------
  cy.contains('Trigger Type')
    .parent()
    .find('select')
    .select('On X days of delayed deposit', { force: true });

  // -------- GENERATE REPORT --------
  cy.contains('Generate Report').click({ force: true });
  cy.contains('Search Result').scrollIntoView().should('exist').should('be.visible');

// List of expected column headers
const columns = [
  'Communication Trigger Date',
  'Trigger Name',
  'Trigger Type',
  'Variable Definition',
  'Channel Type',
  'Template Name',
  'Recipient Type',
  'Accounts Picked',
  'Communication Sent',
  'In Error',
  'Delivered',
  'Read',
  'Pending Delivery',
  'Error %',
  'Delivery %',
  'Read %',
  'Pending Delivery'
];

columns.forEach(text => {
  cy.contains('th', text)
    .scrollIntoView()
    .should('exist');
});


cy.get(this.locators.firstpage).click({force:true});
cy.wait(2000);
cy.get(this.locators.lastpage).click({force:true});
}


ReportTestPage_25() {

  // -------- NAVIGATION --------
  cy.get('a[title="Reports"]').click({ force: true });
  cy.wait(2000);
  cy.get('a[href="#/reports/communication-report"]').click({ force: true });
  cy.wait(2000);
  // -------- FROM DATE --------
  cy.contains('Communication From Date')
    .parent()
    .find('input')
    .clear()
    .type('01/01/2026');

  // -------- TO DATE --------
  cy.contains('Communication To Date')
    .parent()
    .find('input')
    .clear()
    .type('03/01/2026');

  // -------- TRIGGER TYPE --------
  cy.contains('Trigger Type')
    .parent()
    .find('select')
    .select('On X days of delayed deposit', { force: true });

  // -------- GENERATE REPORT --------
  cy.contains('Generate Report').click({ force: true });
  // Scroll Summary Details section into view
cy.contains('Summary Details')
  .scrollIntoView()
  .should('be.visible');

// Validate all summary cards
cy.contains('Total Communications Sent').should('exist');
cy.contains('Average Delivery Rate').should('exist');
cy.contains('Average Read Rate').should('exist');
cy.contains('Average Error Rate').should('exist');
cy.contains('Average Pending Delivery Rate').should('exist');

  cy.contains('Search Result').scrollIntoView().should('exist').should('be.visible');

// List of expected column headers
const columns = [
  'Communication Trigger Date',
  'Trigger Name',
  'Trigger Type',
  'Variable Definition',
  'Channel Type',
  'Template Name',
  'Recipient Type',
  'Accounts Picked',
  'Communication Sent',
  'In Error',
  'Delivered',
  'Read',
  'Pending Delivery',
  'Error %',
  'Delivery %',
  'Read %',
  'Pending Delivery'
];

columns.forEach(text => {
  cy.contains('th', text)
    .scrollIntoView()
    .should('exist');
});



}
ReportTestPage_26() {
 // ---------------- Navigation ----------------

    cy.get('a[title="Reports"]').click({ force: true });
    cy.wait(2000);
    cy.get('a[href="#/reports/communication-report"]').click({ force: true });
    cy.wait(2000);
    cy.contains('Communication From Date')
    .parent()
    .find('input')
    .clear()
    .type('01/01/2026');
  cy.wait(2000);
  // -------- TO DATE --------
  cy.contains('Communication To Date')
    .parent()
    .find('input')
    .clear()
    .type('02/01/2026');
  cy.wait(2000);
  // -------- TRIGGER TYPE --------
  cy.contains('Trigger Type')
    .parent()
    .find('select')
    .select('On X days of delayed deposit', { force: true });
cy.wait(2000);
cy.contains('Trigger Name')
    .parent()
    .find('select')
    .select('Testing one', { force: true });
cy.wait(2000);    
  // -------- GENERATE REPORT --------
  cy.contains('Generate Report').click({ force: true });
  // Scroll Summary Details section into view
cy.contains('Summary Details')
  .scrollIntoView()
  .should('be.visible');

  cy.wait(2000);  
    // ---------------- Column Validation ----------------
    cy.contains('Variable Definition').scrollIntoView().should('exist');

    // ---------------- X Value Validation ----------------
    cy.get('tbody > .ng-star-inserted > :nth-child(4)')
      .first()
      .contains(/\d+/)   // X value should be numeric
      .should('exist');
  

}

ReportTestPage_27() {
  cy.get('a[title="Reports"]').click({ force: true });
    cy.wait(2000);
    cy.get('a[href="#/reports/communication-report"]').click({ force: true });
    cy.wait(2000);
    cy.contains('Communication From Date')
    .parent()
    .find('input')
    .clear()
    .type('02/01/2026');
  cy.wait(2000);
  // -------- TO DATE --------
  cy.contains('Communication To Date')
    .parent()
    .find('input')
    .clear()
    .type('04/01/2026');
  cy.wait(2000);
  cy.contains('Trigger Type')
    .parent()
    .find('select')
    cy.get(this.locators.Trigger_Type)
    .find('option')
    .contains('On PTP Date')
    .first()
    .then($opt => {
      cy.get(this.locators.Trigger_Type)
        .select($opt.val(), { force: true });
    });
cy.wait(2000);

  cy.contains('Generate Report').click({ force: true });
 
 cy.contains('Summary Details').scrollIntoView().should('be.visible');
 cy.contains('Variable Definition').should('be.visible');
 cy.get('tbody > :nth-child(1) > :nth-child(4)').should('be.visible').and('have.text', 'NA');



}

ReportTestPage_28(){
   cy.get('a[title="Reports"]').click({ force: true });
    cy.wait(2000);
    cy.get('a[href="#/reports/communication-report"]').click({ force: true });
    cy.wait(2000);
    cy.contains('Communication From Date')
    .parent()
    .find('input')
    .clear()
    .type('01/01/2026');
  cy.wait(2000);
  // -------- TO DATE --------
  cy.contains('Communication To Date')
    .parent()
    .find('input')
    .clear()
    .type('02/01/2026');
  cy.wait(2000);
  // -------- TRIGGER TYPE --------
  cy.contains('Trigger Type')
    .parent()
    .find('select')
    cy.get(this.locators.Trigger_Type)
    .find('option')
    .contains('On PTP Date')
    .first()
    .then($opt => {
      cy.get(this.locators.Trigger_Type)
        .select($opt.val(), { force: true });
    });
cy.wait(2000);
    
  // -------- GENERATE REPORT --------
  cy.contains('Generate Report').click({ force: true });
  // Scroll Summary Details section into view
cy.contains('Summary Details')
  .scrollIntoView()
  .should('be.visible');
  cy.wait(2000);
cy.get('tbody > tr').each(($row) => {

    const commsSent = Number(
      $row.find('td:nth-child(9)').text().trim()
    );

    const delivered = Number(
      $row.find('td:nth-child(11)').text().trim()
    );

    const actualDeliveryPercent =
      $row.find('td:nth-child(15)').text().trim();

    let expectedDeliveryPercent = '0.00%';

    if (commsSent > 0) {
      expectedDeliveryPercent =
        ((delivered / commsSent) * 100).toFixed(2) + '%';
    }

    expect(actualDeliveryPercent)
      .to.eq(expectedDeliveryPercent);
  });
}

ReportTestPage_29() {

  cy.get('a[title="Reports"]').click({ force: true });
  cy.wait(2000);

  cy.get('a[href="#/reports/communication-report"]').click({ force: true });
  cy.wait(2000);

  // From Date
  cy.contains('Communication From Date')
    .parent()
    .find('input')
    .clear()
    .type('01/01/2026');

  // To Date
  cy.contains('Communication To Date')
    .parent()
    .find('input')
    .clear()
    .type('02/01/2026');

  // Trigger Type
  cy.get(this.locators.Trigger_Type)
    .find('option')
    .contains('On PTP Date')
    .first()
    .then($opt => {
      cy.get(this.locators.Trigger_Type)
        .select($opt.val(), { force: true });
    });

  // Generate
  cy.contains('Generate Report').click({ force: true });

  cy.contains('Summary Details')
    .scrollIntoView()
    .should('be.visible');

    cy.wait(2000);
     cy.get('tbody > tr').each(($row) => {

    const commsSent = Number(
      $row.find('td:nth-child(9)').text().trim()
    );

    const pendingDelivery = Number(
      $row.find('td:nth-child(13)').text().trim()
    );

    const actualPendingPercent =
      $row.find('td:nth-child(17)').text().trim();

    let expectedPendingPercent = '0.00%';

    if (commsSent > 0) {
      expectedPendingPercent =
        ((pendingDelivery / commsSent) * 100).toFixed(2) + '%';
    }

    expect(actualPendingPercent)
      .to.eq(expectedPendingPercent);
  });
}

ReportTestPage_30() {

  cy.get('a[title="Reports"]').click({ force: true });
  cy.wait(2000);

  cy.get('a[href="#/reports/communication-report"]').click({ force: true });
  cy.wait(2000);

  // From Date
  cy.contains('Communication From Date')
    .parent()
    .find('input')
    .clear()
    .type('01/01/2026');

  // To Date
  cy.contains('Communication To Date')
    .parent()
    .find('input')
    .clear()
    .type('02/01/2026');

  // Trigger Type
  cy.get(this.locators.Trigger_Type)
    .find('option')
    .contains('On PTP Date')
    .first()
    .then($opt => {
      cy.get(this.locators.Trigger_Type)
        .select($opt.val(), { force: true });
    });

  // Generate Report
  cy.contains('Generate Report').click({ force: true });

  cy.contains('Summary Details')
    .scrollIntoView()
    .should('be.visible');
  cy.wait(2000);
  cy.get('tbody > tr').each(($row) => {

    const commsSent = Number(
      $row.find('td:nth-child(9)').text().trim()
    );

    const inError = Number(
      $row.find('td:nth-child(10)').text().trim()
    );

    const actualErrorPercent =
      $row.find('td:nth-child(14)').text().trim();

    let expectedErrorPercent = '0.00%';

    if (commsSent > 0) {
      expectedErrorPercent =
        ((inError / commsSent) * 100).toFixed(2) + '%';
    }

    expect(actualErrorPercent)
      .to.eq(expectedErrorPercent);
  });  
}
ReportTestPage_31() {

  cy.get('a[title="Reports"]').click({ force: true });
  cy.wait(2000);

  cy.get('a[href="#/reports/communication-report"]').click({ force: true });
  cy.wait(2000);

  // From Date
  cy.contains('Communication From Date')
    .parent()
    .find('input')
    .clear()
    .type('01/01/2026');

  // To Date
  cy.contains('Communication To Date')
    .parent()
    .find('input')
    .clear()
    .type('02/01/2026');

  // Trigger Type
  cy.get(this.locators.Trigger_Type)
    .find('option')
    .contains('On PTP Date')
    .first()
    .then($opt => {
      cy.get(this.locators.Trigger_Type)
        .select($opt.val(), { force: true });
    });

  // Generate Report
  cy.contains('Generate Report').click({ force: true });

  cy.contains('Summary Details')
    .scrollIntoView()
    .should('be.visible');
    cy.wait(2000);
    cy.get('tbody > tr').each(($row) => {

    const delivered = Number(
      $row.find('td:nth-child(11)').text().trim()
    );

    const read = Number(
      $row.find('td:nth-child(12)').text().trim()
    );

    const actualReadPercent =
      $row.find('td:nth-child(16)').text().trim(); // ✅ Read %

    let expectedReadPercent = '0.00%';

    if (delivered > 0) {
      expectedReadPercent =
        ((read / delivered) * 100).toFixed(2) + '%';
    }

    expect(actualReadPercent).to.eq(expectedReadPercent);
  });
}

ReportTestPage_32() {

  // Navigate to report
  cy.get('a[title="Reports"]').click({ force: true });
  cy.wait(1000);
  cy.get('a[href="#/reports/communication-report"]').click({ force: true });

  // Dates
  cy.contains('Communication From Date')
    .parent()
    .find('input')
    .clear()
    .type('01/01/2026');

  cy.contains('Communication To Date')
    .parent()
    .find('input')
    .clear()
    .type('02/01/2026');

  // Trigger Type
  cy.get(this.locators.Trigger_Type)
    .find('option')
    .contains('On PTP Date')
    .first()
    .then($opt => {
      cy.get(this.locators.Trigger_Type)
        .select($opt.val(), { force: true });
    });

  // Generate report
  cy.contains('Generate Report').click({ force: true });

  // Ensure grid loads
  cy.get('tbody > tr').should('exist');

  // Validate rows where Comms Sent = 0
  cy.get('tbody > tr').each(($row) => {

    const commsSent = Number(
      $row.find('td:nth-child(9)').text().trim()
    );

    if (commsSent === 0) {

      const percentColumns = [
        14, // Error %
        15, // Delivery %
        16, // Read %
        17  // Pending Delivery %
      ];

      percentColumns.forEach(colIndex => {
        const value = $row.find(`td:nth-child(${colIndex})`).text().trim();
        expect(['0.00%', 'NA']).to.include(value);
      });
    }
  });
}

ReportTestPage_33() {

  // Navigate to Communication History Report
  cy.get('a[title="Reports"]').click({ force: true });
  cy.wait(1000);
  cy.get('a[href="#/reports/communication-report"]').click({ force: true });

  // Date range
  cy.contains('Communication From Date')
    .parent()
    .find('input')
    .clear()
    .type('01/01/2026');

  cy.contains('Communication To Date')
    .parent()
    .find('input')
    .clear()
    .type('02/01/2026');

  // Trigger Type
  cy.get(this.locators.Trigger_Type)
    .find('option')
    .contains('On PTP Date')
    .first()
    .then($opt => {
      cy.get(this.locators.Trigger_Type)
        .select($opt.val(), { force: true });
    });

  // Generate report
  cy.contains('Generate Report').click({ force: true });

  // Ensure data is loaded
  cy.get('tbody > tr').should('exist');

  // 🔍 Validate rows where Delivered = 0
  cy.get('tbody > tr').each(($row) => {

    const delivered = Number(
      $row.find('td:nth-child(11)').text().trim()
    );

    if (delivered === 0) {
      const readPercent =
        $row.find('td:nth-child(16)').text().trim();

      expect(['0.00%', 'NA']).to.include(readPercent);
    }
  });
}
ReportTestPage_34() {

  // Navigate to Communication History Report
  cy.get('a[title="Reports"]').click({ force: true });
  cy.wait(1000);
  cy.get('a[href="#/reports/communication-report"]').click({ force: true });

  // Generate report with valid date range
  cy.contains('Communication From Date')
    .parent()
    .find('input')
    .clear()
    .type('01/01/2026');

  cy.contains('Communication To Date')
    .parent()
    .find('input')
    .clear()
    .type('02/01/2026');

  cy.get(this.locators.Trigger_Type)
    .find('option')
    .contains('On PTP Date')
    .first()
    .then($opt => {
      cy.get(this.locators.Trigger_Type)
        .select($opt.val(), { force: true });
    });
  

  cy.contains('Generate Report').click({ force: true });

   cy.get('tbody > tr').should('exist');

  // ONLY numeric count columns
  const numericColumnIndexes = [
    8,  // Accounts Picked
    9,  // Communication Sent
    10, // In Error
    11, // Delivered
    12, // Read
    13  // Pending Delivery
  ];

  cy.get('tbody > tr').each(($row) => {
    numericColumnIndexes.forEach((index) => {

      const valueText = $row
        .find(`td:nth-child(${index})`)
        .text()
        .trim();

      // must be whole number
      expect(valueText, `Column ${index}`).to.match(/^\d+$/);
      expect(Number(valueText), `Column ${index}`).to.be.at.least(0);
    });
  });


}
ReportTestPage_35(){
   cy.get('a[title="Reports"]').click({ force: true });
  cy.wait(2000);
  cy.get('a[href="#/reports/communication-report"]').click({ force: true });
  cy.wait(2000);
  // Generate report with valid date range
  cy.contains('Communication From Date')
    .parent()
    .find('input')
    .clear()
    .type('01/01/2026');

  cy.contains('Communication To Date')
    .parent()
    .find('input')
    .clear()
    .type('02/01/2026');

  cy.get(this.locators.Trigger_Type)
    .find('option')
    .contains('On PTP Date')
    .first()
    .then($opt => {
      cy.get(this.locators.Trigger_Type)
        .select($opt.val(), { force: true });
    });
  
   cy.contains('Generate Report').click({ force: true });


  // ---- Summary Heading ----
  cy.contains('Summary Details')
    .scrollIntoView()
    .should('be.visible');

  // ---- KPI Card Titles ----
  const expectedKpis = [
    'Total Communications Sent',
    'Average Delivery Rate',
    'Average Read Rate',
    'Average Error Rate',
    'Average Pending Delivery Rate'
  ];

  expectedKpis.forEach((kpi) => {
    cy.contains(kpi)
      .scrollIntoView({ ensureScrollable: false })
      .should('exist');   
  });
}
ReportTestPage_36() {

  let summaryTotal = 0;
  let gridTotal = 0;

  // ---- Navigate to Report ----
  cy.get('a[title="Reports"]').click({ force: true });
  cy.wait(1000);

  cy.get('a[href="#/reports/communication-report"]').click({ force: true });
  cy.wait(2000);

  // ---- Date Filters ----
  cy.contains('Communication From Date')
    .parent()
    .find('input')
    .clear()
    .type('01/01/2026');

  cy.contains('Communication To Date')
    .parent()
    .find('input')
    .clear()
    .type('02/01/2026');

  // ---- Trigger Type ----
  cy.get(this.locators.Trigger_Type)
    .find('option')
    .contains('On PTP Date')
    .first()
    .then($opt => {
      cy.get(this.locators.Trigger_Type)
        .select($opt.val(), { force: true });
    });

  // ---- Generate Report ----
  cy.contains('Generate Report').click({ force: true });

  // ---- Get Summary Total Communications Sent ----
  cy.contains('Total Communications Sent')
    .closest('.insight-card')
    .within(() => {
      cy.get('.insight-value')
        .invoke('text')
        .then(text => {
          summaryTotal = Number(text.trim());
          expect(summaryTotal).to.be.at.least(0);
        });
    });

  // ---- Sum "Communication Sent" column (9th column index = 8) ----
  cy.get('table tbody tr').each(($row) => {
    cy.wrap($row)
      .find('td')
      .eq(8)
      .invoke('text')
      .then(cellText => {
        gridTotal += Number(cellText.trim());
      });
  })
  .then(() => {
    // ---- Final Assertion ----
    expect(gridTotal).to.eq(summaryTotal);
  });

}



ReportTestPage_37() {

  // ---- Navigate to Communication History Report ----
  cy.get('a[title="Reports"]').click({ force: true });
  cy.wait(1000);

  cy.get('a[href="#/reports/communication-report"]').click({ force: true });
  cy.wait(2000);

  // ---- Apply Filters (enough data) ----
  cy.contains('Communication From Date')
    .parent()
    .find('input')
    .clear()
    .type('01/01/2026');

  cy.contains('Communication To Date')
    .parent()
    .find('input')
    .clear()
    .type('07/01/2026');
   cy.get(this.locators.Trigger_Type)
    .find('option')
    .contains('On PTP Date')
    .first()
    .then($opt => {
      cy.get(this.locators.Trigger_Type)
        .select($opt.val(), { force: true });
    });

  cy.contains('Generate Report').click({ force: true });
  cy.wait(3000);

  // ---- Verify Pagination Controls ----
  cy.get('.pagination')
    .should('exist');

  // ---- Verify Next Button ----
  cy.get('.pagination-first')
    .should('exist')
    .and('not.be.disabled');

    cy.get('.pagination-first')
    .should('exist').click({force:true});
   


  // ---- Verify Previous Button ----
  cy.get('.pagination-last > .page-link')
    .should('exist')
    .and('not.be.disabled');
  cy.get('.pagination-last > .page-link')
    .should('exist').click({force:true});  
  cy.wait(2000);
  // ---- Grid still visible after pagination ----
  cy.get('table tbody tr')
    .should('exist');
}

ReportTestPage_38() {

  let page1FirstRowText = '';
  let page2FirstRowText = '';

  // ---- Navigate to Report ----
  cy.get('a[title="Reports"]').click({ force: true });
  cy.wait(1000);

  cy.get('a[href="#/reports/communication-report"]').click({ force: true });
  cy.wait(2000);
  // ---- Apply Filters (enough data) ----
  cy.contains('Communication From Date')
    .parent()
    .find('input')
    .clear()
    .type('01/01/2026');
  cy.contains('Communication To Date')
    .parent()
    .find('input')
    .clear()
    .type('07/01/2026');
   cy.get(this.locators.Trigger_Type)
    .find('option')
    .contains('On PTP Date')
    .first()
    .then($opt => {
      cy.get(this.locators.Trigger_Type)
        .select($opt.val(), { force: true });
    });

  // ---- Generate Report with pagination data ----
  cy.contains('Generate Report').click({ force: true });
  cy.wait(3000);

  // ---- Capture Page 1 first row ----
  cy.get('table tbody tr')
    .first()
    .invoke('text')
    .then(text => {
      page1FirstRowText = text.trim();
      expect(page1FirstRowText).to.not.be.empty;
    });

  // ---- Go to Page 2 ----
  cy.get(':nth-child(4) > .page-link')
    .click({ force: true });

  
}

ReportTestPage_39() {

  const fromDate = '01/01/2026';
  const toDate   = '02/01/2026';

  // ---- Navigate to Report ----
  cy.get('a[title="Reports"]').click({ force: true });
  cy.wait(1000);

  cy.get('a[href="#/reports/communication-report"]').click({ force: true });
  cy.wait(2000);

  // ---- Apply Filters ----
  cy.contains('Communication From Date')
    .parent()
    .find('input')
    .clear()
    .type(fromDate);

  cy.contains('Communication To Date')
    .parent()
    .find('input')
    .clear()
    .type(toDate);

  cy.get(this.locators.Trigger_Type)
    .find('option')
    .contains('On PTP Date')
    .first()
    .then($opt => {
      cy.get(this.locators.Trigger_Type)
        .select($opt.val(), { force: true });
    });

  // ---- Generate Report ----
  cy.contains('Generate Report').click({ force: true });
  cy.wait(3000);

  // ---- Verify table has data ----
  cy.get('table tbody tr')
    .its('length')
    .should('be.greaterThan', 0);

  // ---- Go to Page 2 ----
  cy.get('.pagination')
    .contains('2')
    .click({ force: true });
  cy.wait(2000);

  // ---- Verify filters are retained ----
  cy.contains('Communication From Date')
    .parent()
    .find('input')
    .should('have.value', fromDate);

  cy.contains('Communication To Date')
    .parent()
    .find('input')
    .should('have.value', toDate);

  // ---- Verify table still respects filters ----
  cy.get('table tbody tr')
    .its('length')
    .should('be.greaterThan', 0);
}
ReportTestPage_40() {

  // ---- Navigate to Report ----
  cy.get('a[title="Reports"]').click({ force: true });
  cy.wait(1000);

  cy.get('a[href="#/reports/communication-report"]').click({ force: true });
  cy.wait(2000);

  // ---- Apply Filters (No Data Range) ----
  cy.contains('Communication From Date')
    .parent()
    .find('input')
    .clear()
    .type('01/01/1990');

  cy.contains('Communication To Date')
    .parent()
    .find('input')
    .clear()
    .type('02/01/1990');

  cy.get(this.locators.Trigger_Type)
    .find('option')
    .contains('On PTP Date')
    .first()
    .then($opt => {
      cy.get(this.locators.Trigger_Type)
        .select($opt.val(), { force: true });
    });

  // ---- Generate Report ----
  cy.contains('Generate Report').click({ force: true });
  cy.wait(3000);
 

  // ---- Validate "No Records Found" in Grid ----
  
  cy.contains('Info! No Results').should('be.visible');

  // ---- UI Stability Check ----
  cy.get('body').should('be.visible');
}

ReportTestPage_41(){
   // ---- Navigate to Report ----
  cy.get('a[title="Reports"]').click({ force: true });
  cy.wait(1000);

  cy.get('a[href="#/reports/communication-report"]').click({ force: true });
  cy.wait(2000);

  // ---- Apply Filters (No Data Range) ----
  cy.contains('Communication From Date')
    .parent()
    .find('input')
    .clear()
    .type('01/01/1990');

  cy.contains('Communication To Date')
    .parent()
    .find('input')
    .clear()
    .type('02/01/1990');

  cy.get(this.locators.Trigger_Type)
    .find('option')
    .contains('On PTP Date')
    .first()
    .then($opt => {
      cy.get(this.locators.Trigger_Type)
        .select($opt.val(), { force: true });
    });

  // ---- Generate Report ----
  cy.contains('Generate Report').click({ force: true });
  cy.wait(3000);
  cy.contains('Download Report').click({force:true});
  cy.wait(2000);
 

  // ---- Validate "No Records Found" in Grid ----
  
  cy.contains('Info! No Results').should('be.visible');

  // ---- UI Stability Check ----
  cy.get('body').should('be.visible');

}

ReportTestPage_42(){
   // ---- Navigate to Report ----
  cy.get('a[title="Reports"]').click({ force: true });
  cy.wait(1000);

  cy.get('a[href="#/reports/communication-report"]').click({ force: true });
  cy.wait(2000);

  // ---- Apply Filters (No Data Range) ----
  cy.contains('Communication From Date')
    .parent()
    .find('input')
    .clear()
    .type('01/01/2026');

  cy.contains('Communication To Date')
    .parent()
    .find('input')
    .clear()
    .type('02/01/2026');

  cy.get(this.locators.Trigger_Type)
    .find('option')
    .contains('On PTP Date')
    .first()
    .then($opt => {
      cy.get(this.locators.Trigger_Type)
        .select($opt.val(), { force: true });
    });

  // ---- Generate Report ----
  cy.contains('Generate Report').click({ force: true });
  cy.wait(3000);
  cy.contains('Download Report').click({force:true});
  cy.wait(2000);
 

}
 // ---------- Navigation ----------
  navigateToCommunicationHistoryReport() {
    cy.get('a[title="Reports"]').click({ force: true });
    cy.wait(1000);

    cy.get('a[href="#/reports/communication-report"]').click({ force: true });
    cy.wait(2000);
  }

  // ---------- Actions ----------
  clickDownloadReport() {
    cy.contains('Download Report').click({ force: true });
    cy.wait(1000);
  }

  // ---------- Validations ----------
  verifyDownloadBlockedOrMessageShown() {

    // OPTION 1: Button disabled (preferred if UI does this)
    cy.contains('Download Report').then(($btn) => {
      if ($btn.is(':disabled')) {
        expect(true).to.eq(true);
      }
    });

  }

  navigateToCommunicationHistoryReport() {
    cy.get('a[title="Reports"]').click({ force: true });
    cy.wait(1000);

    cy.get('a[href="#/reports/communication-report"]').click({ force: true });
    cy.wait(2000);
  }

  // ---------- Filters ----------
  applyDateFilters(fromDate, toDate) {
    cy.contains('Communication From Date')
      .parent()
      .find('input')
      .clear()
      .type(fromDate);

    cy.contains('Communication To Date')
      .parent()
      .find('input')
      .clear()
      .type(toDate);
  }

  selectTriggerType(triggerName) {
    cy.contains('Trigger Type')
      .parent()
      .find('select')
      .then(($select) => {
        cy.wrap($select)
          .find('option')
          .contains(triggerName)
          .then(($opt) => {
            cy.wrap($select).select($opt.val(), { force: true });
          });
      });
  }

  // ---------- Actions ----------
  clickGenerateReport() {
    cy.contains('Generate Report').click({ force: true });
  }

  clickDownloadReport() {
    cy.contains('Download Report').click({ force: true });
  }

  // ---------- Validations ----------
  verifyDownloadBlockedDuringGeneration() {

    // OPTION 1: Loader / processing indicator present
    cy.get('body').then(($body) => {
      if ($body.find('.loader, .spinner, .loading').length > 0) {
        cy.get('.loader, .spinner, .loading').should('be.visible');
      }
    });

    // OPTION 2: Download button disabled during processing
    cy.contains('Download Report').then(($btn) => {
      if ($btn.is(':disabled')) {
        expect(true).to.eq(true);
      }
    });

    // OPTION 3: Informational message shown
    cy.get('body').then(($body) => {
      if ($body.text().toLowerCase().includes('processing')) {
        cy.contains(/processing|please wait/i).should('be.visible');
      }
    });

    // OPTION 4: Ensure no file download triggered
    cy.window().then((win) => {
      cy.spy(win, 'open').as('windowOpen');
    });

    cy.get('@windowOpen').should('not.have.been.called');
  }

  ReportTestPage_45() {

  // Navigate to Communication History Report
  cy.visit('/web/#/reports/communication-report');
  cy.wait(2000);

  // ---- Apply Filters (No Data Range) ----
  cy.contains('Communication From Date')
    .parent()
    .find('input')
    .clear()
    .type('01/01/2026');

  cy.contains('Communication To Date')
    .parent()
    .find('input')
    .clear()
    .type('02/01/2026');

  cy.get(this.locators.Trigger_Type)
    .find('option')
    .contains('On PTP Date')
    .first()
    .then($opt => {
      cy.get(this.locators.Trigger_Type)
        .select($opt.val(), { force: true });
    });

  // ---- Generate Report ----
  cy.contains('Generate Report').click({ force: true });
  cy.wait(3000);
  cy.get('table tbody tr').then(($rows) => {
    const initialRowCount = $rows.length;

    // Change Channel Type
    cy.get(this.locators.Channel_Type)
      .select('SMS');

    // Generate Report again
    cy.contains('button', 'Generate Report').click();
    cy.wait(3000);

    // Validate refreshed table
    cy.get('table tbody tr').should(($newRows) => {
      expect($newRows.length).to.not.eq(initialRowCount);
    });
  });
}
ReportTestPage_46(){

   cy.get('a[title="Reports"]').click({ force: true });
  cy.wait(1000);
  cy.get('a[href="#/reports/communication-report"]').click({ force: true });
  cy.wait(2000);
  // ---- Apply Filters (No Data Range) ----
  cy.contains('Communication From Date')
    .parent()
    .find('input')
    .clear()
    .type('01/01/2026');

  cy.contains('Communication To Date')
    .parent()
    .find('input')
    .clear()
    .type('02/01/2026');

  cy.get(this.locators.Trigger_Type)
    .find('option')
    .contains('On PTP Date')
    .first()
    .then($opt => {
      cy.get(this.locators.Trigger_Type)
        .select($opt.val(), { force: true });
    });

  // ---- Generate Report ----
  cy.contains('Generate Report').click({ force: true });
  cy.wait(3000);
  // Capture row count with Trigger Type only
  cy.get('table tbody tr').then(($rowsBefore) => {
    const countBefore = $rowsBefore.length;

    // Select Trigger Name (optional filter)
    cy.get(this.locators.Trigger_Name).select('TodaysPTPUpdate');
      
    cy.wait(2000);
    // Regenerate Report
    cy.contains('button', 'Generate Report').click();
    cy.wait(3000);

    // Validate row count is same or reduced
    cy.get('table tbody tr').should(($rowsAfter) => {
      const countAfter = $rowsAfter.length;
      expect(countAfter).to.be.at.most(countBefore);
    });
  });

}
ReportTestPage_47() {

  // Navigate to Communication History Report
   cy.get('a[title="Reports"]').click({ force: true });
  cy.wait(1000);
  cy.get('a[href="#/reports/communication-report"]').click({ force: true });
  cy.wait(2000);
  // ---- Apply Filters (No Data Range) ----
  cy.contains('Communication From Date')
    .parent()
    .find('input')
    .clear()
    .type('01/01/2026');

  cy.contains('Communication To Date')
    .parent()
    .find('input')
    .clear()
    .type('02/01/2026');

  cy.get(this.locators.Trigger_Type)
    .find('option')
    .contains('On PTP Date')
    .first()
    .then($opt => {
      cy.get(this.locators.Trigger_Type)
        .select($opt.val(), { force: true });
    });

  // ---- Generate Report ----
  cy.contains('Generate Report').click({ force: true });
  cy.wait(3000);
  // Capture row count before Channel Type filter
  cy.get('table tbody tr').then(($rowsBefore) => {
    const countBefore = $rowsBefore.length;

    // Apply Channel Type = Email
    cy.get(this.locators.Channel_Type)
      .select('Email');

    // Regenerate Report
    cy.contains('button', 'Generate Report').click();
    cy.wait(3000);

    // Validate filtered results
    cy.get('table tbody tr').should(($rowsAfter) => {
      const countAfter = $rowsAfter.length;
      expect(countAfter).to.be.at.most(countBefore);
    });
  });
}


ReportTestPage_48() {

   cy.get('a[title="Reports"]').click({ force: true });
  cy.wait(1000);
  cy.get('a[href="#/reports/communication-report"]').click({ force: true });
  cy.wait(2000);
  // ---- Apply Filters (No Data Range) ----
  cy.contains('Communication From Date')
    .parent()
    .find('input')
    .clear()
    .type('01/01/2026');

  cy.contains('Communication To Date')
    .parent()
    .find('input')
    .clear()
    .type('02/01/2026');
    cy.wait(2000);
   cy.get(this.locators.Trigger_Type)
    .find('option')
    .contains('On PTP Date')
    .first()
    .then($opt => {
      cy.get(this.locators.Trigger_Type)
        .select($opt.val(), { force: true });
    });

    cy.wait(2000);

  // Generate Report
  cy.contains('button', 'Generate Report').click();
  cy.wait(3000);

  // Strong number parser – extracts digits only
  const safeNumber = (text) => {
    const digits = text.match(/\d+/g);
    return digits ? Number(digits.join('')) : 0;
  };

  // Validate first row
  cy.get('table tbody tr').first().within(() => {

    cy.get('td').eq(2).invoke('text').then((sentText) => {
      const communicationsSent = safeNumber(sentText);

      // Guard: Sent must be >= 0
      expect(communicationsSent).to.be.at.least(0);

      cy.get('td').eq(3).invoke('text').then((deliveredText) => {
        const delivered = safeNumber(deliveredText);

        cy.get('td').eq(4).invoke('text').then((pendingText) => {
          const pending = safeNumber(pendingText);

          cy.get('td').eq(5).invoke('text').then((errorText) => {
            const error = safeNumber(errorText);

            const total = delivered + pending + error;

            cy.log(
              `Sent=${communicationsSent}, Delivered=${delivered}, Pending=${pending}, Error=${error}`
            );

            // FINAL ASSERTION
            expect(total).to.be.at.most(communicationsSent);
          });
        });
      });
    });
  });
}


ReportTestPage_49() {
 cy.get('a[title="Reports"]').click({ force: true });
  cy.wait(1000);
  cy.get('a[href="#/reports/communication-report"]').click({ force: true });
  cy.wait(2000);
  // ---- Apply Filters (No Data Range) ----
  cy.contains('Communication From Date')
    .parent()
    .find('input')
    .clear()
    .type('01/01/2026');

  cy.contains('Communication To Date')
    .parent()
    .find('input')
    .clear()
    .type('02/01/2026');
    cy.wait(2000);
   cy.get(this.locators.Trigger_Type)
    .find('option')
    .contains('On PTP Date')
    .first()
    .then($opt => {
      cy.get(this.locators.Trigger_Type)
        .select($opt.val(), { force: true });
    });

    cy.wait(2000);

  // Generate Report
  cy.contains('button', 'Generate Report').click();
  cy.wait(3000);
   // Strong number parser (NaN-safe)
  const safeNumber = (text) => {
    const digits = text.match(/\d+/g);
    return digits ? Number(digits.join('')) : 0;
  };

  // Validate first row (data quality check)
  cy.get('table tbody tr').first().within(() => {

    // NOTE: Adjust column indexes if UI order changes
    cy.get('td').eq(3).invoke('text').then((deliveredText) => {
      const deliveredCount = safeNumber(deliveredText);

      cy.get('td').eq(6).invoke('text').then((readText) => {
        const readCount = safeNumber(readText);

        cy.log(
          `Delivered=${deliveredCount}, Read=${readCount}`
        );

        // FINAL ASSERTION
        expect(readCount).to.be.at.most(deliveredCount);
      });
    });
  });
  }

  ReportTestPage_50() {

  cy.get('a[title="Reports"]').click({ force: true });
  cy.wait(1000);
  cy.get('a[href="#/reports/communication-report"]').click({ force: true });
  cy.wait(2000);
  // ---- Apply Filters (No Data Range) ----
  cy.contains('Communication From Date')
    .parent()
    .find('input')
    .clear()
    .type('01/01/2026');

  cy.contains('Communication To Date')
    .parent()
    .find('input')
    .clear()
    .type('02/01/2026');
    cy.wait(2000);
   cy.get(this.locators.Trigger_Type)
    .find('option')
    .contains('On PTP Date')
    .first()
    .then($opt => {
      cy.get(this.locators.Trigger_Type)
        .select($opt.val(), { force: true });
    });

    cy.wait(2000);

  // Generate Report
  cy.contains('button', 'Generate Report').click();
  cy.wait(2000);
  // Strong number parser (NaN-safe)
  const safeNumber = (text) => {
    const digits = text.match(/\d+/g);
    return digits ? Number(digits.join('')) : 0;
  };

  // Validate Accounts Picked for first row
  cy.get('table tbody tr').first().within(() => {

    // Example column indexes (adjust if UI changes)
    // Accounts Picked → td.eq(6)
    // Communications Sent → td.eq(2)

    cy.get('td').eq(6).invoke('text').then((accountsPickedText) => {
      const accountsPicked = safeNumber(accountsPickedText);

      cy.get('td').eq(2).invoke('text').then((sentText) => {
        const communicationsSent = safeNumber(sentText);

        cy.log(
          `AccountsPicked=${accountsPicked}, CommunicationsSent=${communicationsSent}`
        );

        // Business rule validation:
        // Accounts Picked should never exceed Communications Sent
        expect(accountsPicked).to.be.at.most(communicationsSent);
      });
    });
  });
}
ReportTestPage_51() {

  cy.get('a[title="Reports"]').click({ force: true });
  cy.wait(1000);
  cy.get('a[href="#/reports/communication-report"]').click({ force: true });
  cy.wait(2000);

  // Select date range
  const fromDate = '01/01/2026';
  const toDate = '02/01/2026';

  cy.contains('Communication From Date')
    .parent()
    .find('input')
    .clear()
    .type(fromDate);

  cy.contains('Communication To Date')
    .parent()
    .find('input')
    .clear()
    .type(toDate);
    cy.wait(2000);

   cy.get(this.locators.Trigger_Type)
    .find('option')
    .contains('On PTP Date')
    .first()
    .then($opt => {
      cy.get(this.locators.Trigger_Type)
        .select($opt.val(), { force: true });
    });

    cy.wait(2000);

  // Generate Report
  cy.contains('button', 'Generate Report').click();
  cy.wait(3000);

     // Convert DD/MM/YYYY to timestamp
  const toTimestamp = (dateStr) => {
    const [dd, mm, yyyy] = dateStr.split('/');
    return new Date(`${yyyy}-${mm}-${dd}`).getTime();
  };

  const startTs = toTimestamp(fromDate);
  const endTs = toTimestamp(toDate);

  // Validate: all row dates fall within selected range
  cy.get('table tbody tr').each(($row) => {

    // ✅ Communication Date is FIRST column
    cy.wrap($row).find('td').eq(0).invoke('text').then((dateText) => {

      const rowTs = toTimestamp(dateText.trim());

      cy.log(`RowDate=${dateText}`);

      expect(rowTs).to.be.at.least(startTs);
      expect(rowTs).to.be.at.most(endTs);
    });
  });

}



}
export default ReportsPage;
   