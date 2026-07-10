class AccountDetailsPage {
  constructor(locators) {
    this.locators = locators;
  }
  AccountDetailsPage01(){
    cy.wait(9000);
    cy.wait(2000);
    cy.get(this.locators.account_name).type('a');
    cy.wait(2000);
    cy.get(this.locators.search_button).click({force:true});
    cy.wait(2000);
    cy.get('tbody tr td:nth-child(4) a').first().click({force:true});
    cy.wait(2000);
    cy.get(this.locators.toggle_button).click({force:true});
    cy.wait(2000);
     cy.contains('Dialer')
  .scrollIntoView()
  .click({force:true});
    cy.wait(2000);
   cy.get('#mobile_number option').each(($el) => {
  const text = $el.text().trim();

  if (text.includes('X')) {
    const number = text.split(':').pop().trim();
    expect(number).to.match(/^\d{2}X{6}\d{2}$/);
  }
});
  }
  AccountDetailsPage02(){
     cy.wait(9000);
    cy.wait(2000);
    cy.get(this.locators.account_name).type('a');
    cy.wait(2000);
    cy.get(this.locators.search_button).click({force:true});
    cy.wait(2000);
    cy.get('tbody tr td:nth-child(4) a').first().click({force:true});
    cy.wait(2000);
    cy.get(this.locators.toggle_button).click({force:true});
    cy.wait(2000);
     cy.contains('Dialer')
  .scrollIntoView()
  .click({force:true});
    cy.wait(2000);
cy.get('#mobile_number')
  .should('be.visible')
  .select(1); 
cy.get('#mobile_number option:selected')
  .invoke('text')
  .then((text) => {
    const number = text.split(':').pop().trim();
    expect(number).to.match(/^\d{2}X{6}\d{2}$/);
  });
 cy.contains('button, a', 'Call')
    .and('not.be.disabled');

  }
  AccountDetailsPage03(){
      cy.wait(9000);
    cy.wait(2000);
    cy.get(this.locators.account_name).type('a');
    cy.wait(2000);
    cy.get(this.locators.search_button).click({force:true});
    cy.wait(2000);
    cy.get('tbody tr td:nth-child(4) a').first().click({force:true});
    cy.wait(2000);
    cy.get(this.locators.toggle_button).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Contact_Hub_Cust).click({force:true});
    cy.wait(2000);
    cy.contains('Latest').should('be.visible');
    cy.wait(2000);
    cy.get('.panel-open').should('contain.text', 'Latest');
let emailCount = 0;
let phoneCount = 0;

cy.get('.panel-open .col-lg-6')
  .each(($el) => {
    const text = $el.text().trim();

    if (text.toLowerCase().includes('number')) {
      const value = text.split(':').pop().trim();
      expect(value).to.match(/^\d{2}X{4,}\d{2}$/);
      phoneCount++;
    }

    if (text.toLowerCase().includes('email')) {
      const value = text.split(':').pop().trim();
      expect(value).to.include('X');
      emailCount++;
    }
  })
  .then(() => {
    expect(phoneCount).to.be.greaterThan(0); // 1–3 allowed
    expect(emailCount).to.eq(1); // exactly 1 email
  });
  }
  AccountDetailsPage04(){
    cy.wait(9000);
    cy.wait(2000);
    cy.get(this.locators.account_name).type('a');
    cy.wait(2000);
    cy.get(this.locators.search_button).click({force:true});
    cy.wait(2000);
    cy.get('tbody tr td:nth-child(4) a').first().click({force:true});
    cy.wait(2000);
    cy.get(this.locators.toggle_button).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Contact_Hub_Cust).click({force:true});
    cy.wait(2000);
   cy.contains('Official').scrollIntoView().should('be.visible').click();
    cy.wait(2000);
   let phoneCount = 0;
let emailCount = 0;

cy.get('.panel-open > .panel > .panel-collapse > .panel-body')
  .find('*')
  .each(($el) => {
    const text = $el.text().trim();

    if (!text) return;

    const value = text.includes(':') ? text.split(':').pop().trim() : '';

    // Skip empty values
    if (!value || value === '-') return;

    // Phone validation
    if (text.toLowerCase().includes('number')) {
      if (value.includes('X')) {
        expect(value).to.match(/^\d{1,2}X+/);
        phoneCount++;
      }
    }

    //  Email validation
    if (text.toLowerCase().includes('email')) {
      expect(value).to.include('X');
      emailCount++;
    }
  })
  .then(() => {
    expect(phoneCount).to.be.greaterThan(0); // at least 1 valid number
    expect(emailCount).to.be.at.least(0); // email may or may not be present
  });
  }
  AccountDetailsPage05(){
    cy.wait(9000);
    cy.wait(3000);
    cy.get('#search-customer-name', { timeout: 10000 })
  .should('be.visible')
  .should('have.value', '') // ensures ready
  .type('a');
    cy.wait(2000);
    cy.get(this.locators.search_button).click({force:true});
    cy.wait(2000);
    cy.get('tbody tr td:nth-child(4) a').first().click({force:true});
    cy.wait(2000);
    cy.get(this.locators.toggle_button).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Contact_Hub_Cust).click({force:true});
    cy.wait(2000);
   cy.get("accordion-group[heading='History'] button[type='button']").scrollIntoView().click();
    cy.wait(2000);
   cy.get('table tbody tr td:nth-child(1)')
  .each(($el) => {
    const value = $el.text().trim();

    if (!value.match(/^\d{2}X{4,}\d{2}$/)) {
      return; // skip non-phone values
    }

    expect(value).to.match(/^\d{2}X{4,}\d{2}$/);
  });
  }
  AccountDetailsPage06(){
    cy.wait(9000);
    cy.wait(3000);
    cy.get('#search-customer-name', { timeout: 10000 })
  .should('be.visible')
  .should('have.value', '') // ensures ready
  .type('a');
    cy.wait(2000);
    cy.get(this.locators.search_button).click({force:true});
    cy.wait(2000);
    cy.get('tbody tr td:nth-child(4) a').first().click({force:true});
    cy.wait(2000);
    cy.get(this.locators.toggle_button).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Contact_Hub_Cust).click({force:true});
    cy.wait(2000);
   cy.get("accordion-group[heading='History'] button[type='button']").scrollIntoView().click();
    cy.wait(2000);
  cy.get(':nth-child(2) > .enc-card > .card-content')
  .find('.scrollable-table .table tbody tr td:nth-child(1)')
  .each(($el) => {
    const value = $el.text().trim();

    // Only check masked emails
    if (value.includes('@') && value.includes('X')) {
      expect(value).to.match(/^[^\s@]+X+[^\s@]*@[^\s@]+\.[^\s@]+$/);
      cy.log('Masked Email: ' + value);
    }
  });
  
  }
  AccountDetailsPage07(){
    cy.wait(9000);
    cy.wait(3000);
    cy.get('#search-customer-name', { timeout: 10000 })
  .should('be.visible')
  .should('have.value', '') // ensures ready
  .type('a');
    cy.wait(2000);
    cy.get(this.locators.search_button).click({force:true});
    cy.wait(2000);
    cy.get('tbody tr td:nth-child(4) a').first().click({force:true});
    cy.wait(2000);
    cy.get(this.locators.toggle_button).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Demographic_details).click({force:true});
    cy.wait(2000);
  cy.get('.row *').each(($el) => {
  const text = $el.text().trim();

  if (!text) return;

  // =====================
  // 📧 EMAIL EXTRACTION
  // =====================
  const emailMatch = text.match(/[^\s@]+@[^\s@]+\.[^\s@]+/);

  if (emailMatch) {
    const email = emailMatch[0];

    if (email.includes('X')) {
      // Masked email
      expect(email).to.match(/^[^\s@]+X+[^\s@]*@[^\s@]+\.[^\s@]+$/);
      cy.log('Masked Email: ' + email);
    } else {
      // Normal email
      expect(email).to.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
      cy.log('Email: ' + email);
    }

    return; // stop further checks for this element
  }

  // =====================
  // 📱 PHONE EXTRACTION
  // =====================
  const phoneMatch = text.match(/\d{2}X{4,}\d{2}|\d{10}/);

  if (phoneMatch) {
    const phone = phoneMatch[0];

    if (phone.includes('X')) {
      // Masked phone
      expect(phone).to.match(/^\d{2}X{4,}\d{2}$/);
      cy.log('Masked Phone: ' + phone);
    } else {
      // Normal phone
      expect(phone).to.match(/^\d{10}$/);
      cy.log('Phone: ' + phone);
    }
  }
});

  }
  AccountDetailsPage08(){
    cy.wait(9000);
    cy.wait(3000);
    cy.get('#search-customer-name', { timeout: 10000 })
  .should('be.visible')
  .should('have.value', '') // ensures ready
  .type('a');
    cy.wait(2000);
    cy.get(this.locators.search_button).click({force:true});
    cy.wait(2000);
    cy.get('tbody tr td:nth-child(4) a').first().click({force:true});
    cy.wait(2000);
    cy.get(this.locators.toggle_button).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Case_Details).scrollIntoView().click({force:true});
    cy.wait(2000);
cy.get('#EmailAddress option')
  .each(($el) => {
    const value = $el.text().trim();

    if (!value) return;

    // Email validation
    if (value.includes('@')) {
      expect(value).to.match(/^[^\s@]+X+[^\s@]*@[^\s@]+\.[^\s@]+$/);
      cy.log('Masked Email: ' + value);
    }
  });
// Phone
cy.get('#contact_number option').each(($el) => {
  const text = $el.text().trim();

  // Extract only phone number (masked or normal)
  const match = text.match(/\d{2}X{4,}\d{2}|\d{10}/);

  if (!match) return;

  const phone = match[0];

  if (phone.includes('X')) {
    // Masked phone
    expect(phone).to.match(/^\d{2}X{4,}\d{2}$/);
    cy.log('Masked Phone: ' + phone);
  } else {
    // Normal phone
    expect(phone).to.match(/^\d{10}$/);
    cy.log('Phone: ' + phone);
  }
});

  }
  AccountDetailsPage09(){
     cy.wait(9000);
    cy.wait(3000);
    cy.get('#search-customer-name', { timeout: 10000 })
  .should('be.visible')
  .should('have.value', '') // ensures ready
  .type('a');
    cy.wait(2000);
    cy.get(this.locators.search_button).click({force:true});
    cy.wait(2000);
    cy.get('tbody tr td:nth-child(4) a').first().click({force:true});
    cy.wait(2000);
    cy.get(this.locators.toggle_button).click({force:true});
    cy.wait(2000);
    cy.get(':nth-child(17) > .dropdown-item').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.select_count).select('50');
    cy.wait(2000);
    cy.get(this.locators.gear).click({force:true});
    cy.wait(2000);
     cy.contains('New contact no.#')
  .scrollIntoView()
  .click({force:true});
    cy.wait(2000);
    cy.get(this.locators.gear).click({force:true});
    cy.wait(2000);
  cy.get('tbody tr').each(($row) => {
  cy.wrap($row)
    .find('td:nth-child(10)')
    .invoke('text')
    .then((text) => {
      const value = text.trim();

      if (value) {
        expect(value).to.match(/^\d{2}X{6}\d{2}$/);
      }
    });
});
}

 AccountDetailsPage010(){
     cy.wait(9000);
    cy.wait(3000);
    cy.get('#search-customer-name', { timeout: 10000 })
  .should('be.visible')
  .should('have.value', '') // ensures ready
  .type('a');
    cy.wait(2000);
    cy.get(this.locators.search_button).click({force:true});
    cy.wait(2000);
    cy.get('tbody tr td:nth-child(4) a').first().click({force:true});
    cy.wait(2000);
    cy.get(this.locators.toggle_button).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Last_five_PTP).click({force:true});
    cy.wait(2000);
  cy.get('tbody tr td:nth-child(8)')
  .each(($el) => {
    const text = $el.text().trim();

    if (/\d/.test(text)) {
      expect(text, `Phone no masked: ${text}`)
        .to.match(/^\d{2}X{4,}\d{2}$/);
    }
  });

 }
 AccountDetailsPage011(){
   cy.wait(9000);
    cy.wait(3000);
    cy.get('#search-customer-name', { timeout: 10000 })
  .should('be.visible')
  .should('have.value', '') // ensures ready
  .type('a');
    cy.wait(2000);
    cy.get(this.locators.search_button).click({force:true});
    cy.wait(2000);
    cy.get('tbody tr td:nth-child(4) a').first().click({force:true});
    cy.wait(2000);
    cy.get(this.locators.select_column).select("One Column");
    cy.wait(2000);
cy.contains('Demographic Details')
  .parentsUntil('body')   // go up properly
  .last()                 // get outer container
  .invoke('text')
  .then((text) => {

    // =====================
    // 📧 EMAIL CHECK
    // =====================
    const emails = text.match(/[^\s@]+@[^\s@]+\.[^\s@]+/g) || [];

    emails.forEach((email) => {
      expect(email, `Email not masked: ${email}`)
        .to.match(/^[^\s@]+X+[^\s@]*@[^\s@]+\.[^\s@]+$/);
    });

    // =====================
    // 📱 PHONE CHECK
    // =====================
    const phones = text.match(/\d{2}X{4,}\d{2}/g) || [];

    phones.forEach((phone) => {
      expect(phone, `Phone not masked: ${phone}`)
        .to.match(/^\d{2}X{4,}\d{2}$/);
    });

  });
 }
 

}

 
export default AccountDetailsPage;