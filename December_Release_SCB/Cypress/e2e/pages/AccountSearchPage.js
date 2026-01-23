class CommunicationPage {
  constructor(locators) {
    this.locators = locators;
  }

  AccountSearchPage_01() {

  cy.get(this.locators.Account_search).click({ force: true });
  cy.wait(1000);

  cy.get(this.locators.Account_number).type('1667');
  cy.wait(2000);

  cy.get(this.locators.Search_Button).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.click_number).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.Button).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.Payment_History_page).click({ force: true });
  cy.wait(2000);

  // Open gear/settings
  cy.get(this.locators.Settings_Page).click({ force: true });
  cy.wait(2000);

  // Verify Transaction ID option is present
  cy.get(this.locators.Trans_option).scrollIntoView()
    .should('be.visible');

  //  Enable Transaction ID (if checkbox / toggle)
 cy.get(this.locators.Trans_option)
  .scrollIntoView()
  .should('exist').click({force:true});

  // Disable Transaction ID
  cy.get(this.locators.Trans_option)
   .scrollIntoView()
    .click({ force: true })
    .should('not.be.checked');
}

AccountSearchPage_02() {
      cy.get(this.locators.Account_search).click({ force: true });
  cy.wait(1000);

  cy.get(this.locators.Account_number).type('1667');
  cy.wait(2000);

  cy.get(this.locators.Search_Button).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.click_number).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.Button).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.Payment_History_page).click({ force: true });
  cy.wait(2000);

  // Open gear/settings
  cy.get(this.locators.Settings_Page).click({ force: true });
  cy.wait(2000);

  // Verify Payer/Receipt Image option exists
  cy.get(this.locators.Payer_Receipt_Image_option)
    .should('exist');
  // Enable the option
  cy.get(this.locators.Payer_Receipt_Image_option)
    .click({ force: true });
  // Disable the option
  cy.get(this.locators.Payer_Receipt_Image_option)
    .click({ force: true });
}

AccountSearchPage_03() {
   cy.get(this.locators.Account_search).click({ force: true });
  cy.wait(1000);

  cy.get(this.locators.Account_number).type('1667');
  cy.wait(2000);

  cy.get(this.locators.Search_Button).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.click_number).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.Button).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.Payment_History_page).click({ force: true });
  cy.wait(2000);  

  // Open gear/settings
  cy.get(this.locators.Settings_Page).click({ force: true });
  cy.wait(1000);

  // Enable Transaction ID column
  cy.get(this.locators.Trans_option)
    .should('exist')
    .click({ force: true });

  cy.wait(2000);

 cy.get('tbody > :nth-child(3) > :nth-child(4)')
    .invoke('text')
    .then((paymentMode) => {

      const mode = paymentMode.trim();

      // Ensure this test runs only for offline payments
      expect(['CASH']).to.include(mode);

      // Get Transaction ID value
      cy.get(':nth-child(3) > :nth-child(10)')
        .invoke('text')
        .then((txnId) => {

          const transactionId = txnId.trim();

          // ✅ Assert Transaction ID is blank / null
          expect(
            transactionId === '' ||
            transactionId === '-' ||
            transactionId === 'N/A'
          ).to.be.true;
        });
    });
}

AccountSearchPage_04() {
  cy.get(this.locators.Account_search).click({ force: true });
  cy.wait(1000);

  cy.get(this.locators.Account_number).type('1667');
  cy.wait(2000);

  cy.get(this.locators.Search_Button).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.click_number).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.Button).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.Payment_History_page).click({ force: true });
  cy.wait(2000);  

  // Open gear/settings
  cy.get(this.locators.Settings_Page).click({ force: true });
  cy.wait(1000);


  // Turn OFF Transaction ID toggle
  cy.get(this.locators.Trans_option)
    .should('exist')
 
  // Assert Transaction ID column is hidden from grid
  cy.get('tbody > :nth-child(1) > :nth-child(10)')
    .should('not.exist');
}

AccountSearchPage_05() {
    cy.get(this.locators.Account_search).click({ force: true });
  cy.wait(1000);

  cy.get(this.locators.Account_number).type('1667');
  cy.wait(2000);

  cy.get(this.locators.Search_Button).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.click_number).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.Button).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.Payment_History_page).click({ force: true });
  cy.wait(2000);  

  // Open gear/settings
  cy.get(this.locators.Settings_Page).click({ force: true });
  cy.wait(1000);

  // Enable Transaction ID
  cy.get(this.locators.Trans_option)
    .should('exist')
    .click({ force: true });

  // Enable Payer / Receipt Image
  cy.get(this.locators.Payer_Receipt_Image_option)
    .should('exist')
    .click({ force: true });

  cy.wait(2000);

  // ✅ Validate Transaction ID column exists
  cy.get('tbody > :nth-child(1) > :nth-child(10)')
    .should('exist');

  // ✅ Validate grid rows have consistent column count
  cy.get('table thead tr th').then(($headers) => {
    const headerCount = $headers.length;

    cy.get('table tbody tr').each(($row) => {
      cy.wrap($row)
        .find('td')
        .should('have.length', headerCount);
    });
  });

  // ✅ Grid usability: table still scrollable / interactable
  cy.get('table')
    .should('exist')
    .scrollIntoView();
}

AccountSearchPage_06() {

  cy.get(this.locators.Account_search).click({ force: true });
  cy.wait(1000);

  cy.get(this.locators.Account_number).type('1667');
  cy.wait(2000);

  cy.get(this.locators.Search_Button).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.click_number).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.Button).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.Payment_History_page).click({ force: true });
  cy.wait(2000);  

  // Open gear/settings
  cy.get(this.locators.Settings_Page).click({ force: true });
  cy.wait(1000);

  // Enable Transaction ID
  cy.get(this.locators.Trans_option)
    .should('exist')
    .click({ force: true });

  cy.wait(2000);

  // ✅ Validate Transaction ID exists on FIRST page
  cy.get('tbody > :nth-child(1) > :nth-child(10)')
    .should('exist')
    .invoke('text')
    .then((page1TxnId) => {
      expect(page1TxnId.trim()).to.not.eq('null');
      expect(page1TxnId.trim()).to.not.eq('undefined');
    });

  // 👉 Go to LAST page
  cy.get(this.locators.pagelast).click({ force: true });
  cy.wait(2000);

  // ✅ Validate Transaction ID exists on LAST page
  cy.get('tbody > :nth-child(1) > :nth-child(10)')
    .should('exist')
    .invoke('text')
    .then((lastPageTxnId) => {
      expect(lastPageTxnId.trim()).to.not.eq('null');
      expect(lastPageTxnId.trim()).to.not.eq('undefined');
    });

  // 👉 Go BACK to FIRST page
  cy.get(this.locators.pagefirst).click({ force: true });
  cy.wait(2000);

  // ✅ Validate Transaction ID still exists after returning to FIRST page
  cy.get('tbody > :nth-child(1) > :nth-child(10)')
    .should('exist');
}



  }
export default CommunicationPage;
   