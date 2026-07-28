class AccountDetailsPage {
  constructor(locators) {
    this.locators = locators;
  }

 AccountDetails_01(){
  cy.wait(8000);
  cy.get(this.locators.customer_accountnumber).type("1667");
  cy.wait(2000);
  cy.get(this.locators.submit_button).click({force:true});
  cy.wait(2000);
  cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.toggle_button).click({force:true});
  cy.wait(2000);
  cy.contains('Dialer')
  .scrollIntoView()
  .click({force:true});
  cy.wait(2000);
cy.get(this.locators.mb_dropdown)
  .find('option')
  .not('[value=""]')     // skip -- Select --
  .then($options => {

    const randomIndex = Math.floor(Math.random() * $options.length);
    const value = $options[randomIndex].value;

    cy.get(this.locators.mb_dropdown).select(value);

  });
cy.get(this.locators.callbutton).click({force:true});
cy.wait(2000);
cy.contains('Connect Call Via:').should('be.visible');
 }

  AccountDetails_02(){

  cy.wait(8000);
  cy.get(this.locators.customer_accountnumber).type("1667");
  cy.wait(2000);
  cy.get(this.locators.submit_button).click({force:true});
  cy.wait(2000);
 cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.toggle_button).click({force:true});
  cy.wait(2000);
  cy.contains('Dialer')
  .scrollIntoView()
  .click({force:true});
  cy.wait(2000);
cy.get(this.locators.mb_dropdown)
  .find('option:not([value=""])')
  .then($options => {

    const randomIndex = Math.floor(Math.random() * $options.length);
    const value = $options[randomIndex].value;

    cy.get(this.locators.mb_dropdown).select(value, { force: true });

  });
  cy.get(this.locators.callbutton).click({force:true});

  // Verify popup
  cy.contains('Connect Call Via:').should('be.visible');
cy.get('.card-content')
  .should('be.visible')
  .within(() => {
    cy.contains('Ameyo').should('be.visible');
    cy.contains('IKONTEL').should('be.visible');
    cy.contains('TATA').should('be.visible');
  });
 
}
AccountDetails_03(){

  cy.get(this.locators.customer_accountnumber).type("1667");
  cy.wait(2000);
  cy.contains('button','Search').click({force:true});
  cy.wait(2000);
  cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.toggle_button).click({force:true});
  cy.wait(200)
cy.contains('Dialer')
  .scrollIntoView()
  .click({force:true});
  cy.wait(2000);

  cy.get(this.locators.mb_dropdown)
    .find('option:not([value=""])')
    .then($options => {
      const randomIndex = Math.floor(Math.random() * $options.length);
      const value = $options[randomIndex].value;
      cy.get(this.locators.mb_dropdown).select(value);
    });

  cy.get(this.locators.callbutton).click({force:true});

  cy.contains('Connect Call Via:').should('be.visible');

  cy.get('.card-content')
    .contains('IKONTEL')
    .should('be.visible')
    .click({force:true});
}

AccountDetails_04(){

  cy.get(this.locators.customer_accountnumber).type("1667");
  cy.wait(2000);
  cy.contains('button','Search').click({force:true});
  cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.toggle_button).click({force:true});
  cy.wait(2000);
  cy.contains('Dialer')
  .scrollIntoView()
  .click({force:true});

  cy.wait(2000);
  cy.get(this.locators.mb_dropdown)
    .find('option:not([value=""])')
    .then($options => {
      const randomIndex = Math.floor(Math.random() * $options.length);
      const value = $options[randomIndex].value;
      cy.get(this.locators.mb_dropdown).select(value);
    });
  cy.wait(2000);
  cy.get(this.locators.callbutton).click({force:true});
  cy.wait(2000);
  cy.contains('Connect Call Via:').should('be.visible');
  cy.wait(2000);
  cy.get('.card-content')
    .contains('IKONTEL')
    .should('be.visible')
    .click({force:true});
    cy.wait(2000);
  cy.contains('button','Proceed')
    .should('be.visible')
    .click({force:true});
  cy.wait(2000);   
  cy.contains('Success!').should('exist');

} 
AccountDetails_05(){
  cy.wait(2000);
  cy.get(this.locators.customer_accountnumber).type("1667");
  cy.wait(2000);
  cy.contains('button','Search').click({force:true});
  cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.toggle_button).click({force:true});
  cy.wait(2000);
 cy.contains('Dialer')
  .scrollIntoView()
  .click({force:true});
  cy.wait(2000);
  cy.get(this.locators.mb_dropdown)
    .find('option:not([value=""])')
    .then($options => {
      const randomIndex = Math.floor(Math.random() * $options.length);
      const value = $options[randomIndex].value;
      cy.get(this.locators.mb_dropdown).select(value);
    });
  cy.wait(2000);
  cy.get(this.locators.callbutton).click({force:true});
  cy.wait(2000);
  cy.contains('Connect Call Via:').should('be.visible');
  cy.wait(2000);
  cy.contains('button','Cancel')
    .should('be.visible')
    .click({force:true});
  cy.wait(2000);
  cy.contains('Connect Call Via:')
    .should('not.exist');

}
AccountDetails_06(){
  cy.wait(2000);
  cy.get(this.locators.customer_accountnumber).type("1667");
  cy.wait(2000);
  cy.contains('button','Search').click({force:true});
  cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.toggle_button).click({force:true});
  cy.wait(2000);
cy.contains('Dialer')
  .scrollIntoView()
  .click({force:true});
cy.wait(2000);
  cy.get(this.locators.mb_dropdown)
    .find('option:not([value=""])')
    .then($options => {
      const randomIndex = Math.floor(Math.random() * $options.length);
      const value = $options[randomIndex].value;
      cy.get(this.locators.mb_dropdown).select(value);
    });

  cy.get(this.locators.callbutton).click({force:true});

  // Verify popup opened
  cy.contains('Connect Call Via:').should('be.visible');

  // Click Proceed without selecting option
  cy.contains('button','Proceed')
    .should('be.visible')
    .click({force:true});

  // Verify call is NOT initiated
  cy.contains('Error!').should('not.exist');

}
AccountDetails_07(){
  cy.wait(2000);
  cy.wait(2000);
  cy.get(this.locators.customer_accountnumber).type("1667");
  cy.wait(2000);
  cy.contains('button','Search').click({force:true});
  cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.toggle_button).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Demographic_details).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.callbutton_on_dd).click({force:true});
  cy.wait(2000);
  cy.contains('Connect Call Via:').should('be.visible');
    cy.get('.card-content')
    .contains('IKONTEL')
    .should('be.visible')
    .click({force:true});
    cy.wait(2000);
 
}
AccountDetails_08(){
  cy.wait(5000);
  cy.get(this.locators.customer_accountnumber).type("1667");
  cy.wait(2000);
  cy.contains('button','Search').click({force:true});
  cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.toggle_button).click({force:true});
  cy.wait(2000);
 cy.contains('Dialer')
  .scrollIntoView()
  .click({force:true});
  cy.wait(2000);
  cy.get(this.locators.mb_dropdown)
    .find('option:not([value=""])')
    .then($options => {
      const randomIndex = Math.floor(Math.random() * $options.length);
      const value = $options[randomIndex].value;
      cy.get(this.locators.mb_dropdown).select(value);
    });
  cy.wait(2000);
  cy.get(this.locators.callbutton).click({force:true});
  cy.wait(2000);
  cy.contains('Connect Call Via:').should('be.visible');
  cy.wait(2000);
  cy.get('.card-content')
    .contains('Ameyo')
    .should('be.visible')
    .click({force:true});
  cy.wait(2000);
  cy.contains('button','Proceed')
    .should('be.visible')
    .click({force:true});
  cy.wait(2000);
 

}
AccountDetails_09(){

  cy.wait(5000);
  cy.get(this.locators.customer_accountnumber).type("1667");
  cy.wait(2000);
  cy.contains('button','Search').click({force:true});
  cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.toggle_button).click({force:true});
  cy.wait(2000);
 cy.contains('Dialer')
  .scrollIntoView()
  .click({force:true});
  cy.wait(2000);
  cy.get(this.locators.mb_dropdown)
    .find('option:not([value=""])')
    .then($options => {
      const randomIndex = Math.floor(Math.random() * $options.length);
      const value = $options[randomIndex].value;
      cy.get(this.locators.mb_dropdown).select(value);
    });
  cy.wait(2000);
  cy.get(this.locators.callbutton).click({force:true});
  cy.wait(2000); 
  cy.contains('Connect Call Via:').scrollIntoView().should('be.visible');
  cy.wait(2000);
  cy.get('.card-content')
    .contains('TATA')
    .should('be.visible')
    .click({force:true});
  cy.wait(2000);
  cy.contains('button','Proceed')
    .should('be.visible')
    .click({force:true});
  cy.wait(2000);
  cy.contains('Success!').should('exist');

}


 AccountDetails_010(){
  cy.wait(8000);

cy.get(this.locators.Credit_card_button).click({force:true});
cy.wait(2000);
cy.get(this.locators.customer_name).type("a");
cy.wait(2000);

  cy.get(this.locators.submit_button).click({force:true});
  cy.wait(2000);
  cy.get(':nth-child(1) > [title="Click to View Cutomer Details"] > [style="text-wrap-mode: nowrap; position: relative;"] > span').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.toggle_button).click({force:true});
  cy.wait(2000);
  cy.contains('Dialer')
  .scrollIntoView()
  .click({force:true});
  cy.wait(2000);
cy.get(this.locators.mb_dropdown)
  .find('option')
  .not('[value=""]')     // skip -- Select --
  .then($options => {

    const randomIndex = Math.floor(Math.random() * $options.length);
    const value = $options[randomIndex].value;

    cy.get(this.locators.mb_dropdown).select(value);

  });
cy.get(this.locators.callbutton).click({force:true});
cy.wait(2000);
cy.contains('Connect Call Via:').should('be.visible');
 }

  AccountDetails_011(){

  cy.wait(8000);
  cy.get(this.locators.Credit_card_button).click({force:true});
cy.wait(2000);
cy.get(this.locators.customer_name).type("a");
cy.wait(2000);

  cy.get(this.locators.submit_button).click({force:true});
  cy.wait(2000);
  cy.get(':nth-child(1) > [title="Click to View Cutomer Details"] > [style="text-wrap-mode: nowrap; position: relative;"] > span').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.toggle_button).click({force:true});
  cy.wait(2000);
  cy.contains('Dialer')
  .scrollIntoView()
  .click({force:true});
  cy.wait(2000);
  cy.get(this.locators.mb_dropdown)
  .find('option:not([value=""])')
  .then($options => {

    const randomIndex = Math.floor(Math.random() * $options.length);
    const value = $options[randomIndex].value;

    cy.get(this.locators.mb_dropdown).select(value, { force: true });

  });
  cy.get(this.locators.callbutton).click({force:true});

  // Verify popup
  cy.contains('Connect Call Via:').should('be.visible');
cy.get('.card-content')
  .should('be.visible')
  .within(() => {
    cy.contains('Ameyo').should('be.visible');
    cy.contains('IKONTEL').should('be.visible');
    cy.contains('TATA').should('be.visible');
  });
 
}
AccountDetails_012(){

  cy.get(this.locators.Credit_card_button).click({force:true});
cy.wait(2000);
cy.get(this.locators.customer_name).type("a");
cy.wait(2000);


  cy.contains('button','Search').click({force:true});

cy.get(':nth-child(1) > [title="Click to View Cutomer Details"] > [style="text-wrap-mode: nowrap; position: relative;"] > span').click({force:true});

  cy.get(this.locators.toggle_button).click({force:true});

 cy.contains('Dialer')
  .scrollIntoView()
  .click({force:true});

  cy.get(this.locators.mb_dropdown)
    .find('option:not([value=""])')
    .then($options => {
      const randomIndex = Math.floor(Math.random() * $options.length);
      const value = $options[randomIndex].value;
      cy.get(this.locators.mb_dropdown).select(value);
    });

  cy.get(this.locators.callbutton).click({force:true});

  cy.contains('Connect Call Via:').should('be.visible');

  cy.get('.card-content')
    .contains('IKONTEL')
    .should('be.visible')
    .click({force:true});
}

AccountDetails_013(){

  cy.get(this.locators.Credit_card_button).click({force:true});
cy.wait(2000);
cy.get(this.locators.customer_name).type("a");
cy.wait(2000);

  cy.contains('button','Search').click({force:true});
  cy.get(':nth-child(1) > [title="Click to View Cutomer Details"] > [style="text-wrap-mode: nowrap; position: relative;"] > span').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.toggle_button).click({force:true});
  cy.wait(2000);
 cy.contains('Dialer')
  .scrollIntoView()
  .click({force:true});
  cy.wait(2000);
  cy.get(this.locators.mb_dropdown)
    .find('option:not([value=""])')
    .then($options => {
      const randomIndex = Math.floor(Math.random() * $options.length);
      const value = $options[randomIndex].value;
      cy.get(this.locators.mb_dropdown).select(value);
    });
  cy.wait(2000);
  cy.get(this.locators.callbutton).click({force:true});
  cy.wait(2000);
  cy.contains('Connect Call Via:').should('be.visible');
  cy.wait(2000);
  cy.get('.card-content')
    .contains('IKONTEL')
    .should('be.visible')
    .click({force:true});
    cy.wait(2000);
  cy.contains('button','Proceed')
    .should('be.visible')
    .click({force:true});
  cy.wait(2000);   
  cy.contains('Success!').should('exist');

} 
AccountDetails_014(){
  cy.wait(2000);
  cy.get(this.locators.Credit_card_button).click({force:true});
cy.wait(2000);
cy.get(this.locators.customer_name).type("a");
cy.wait(2000);

  cy.contains('button','Search').click({force:true});
  cy.get(':nth-child(1) > [title="Click to View Cutomer Details"] > [style="text-wrap-mode: nowrap; position: relative;"] > span').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.toggle_button).click({force:true});
  cy.wait(2000);
 cy.contains('Dialer')
  .scrollIntoView()
  .click({force:true});
  cy.wait(2000);
  cy.get(this.locators.mb_dropdown)
    .find('option:not([value=""])')
    .then($options => {
      const randomIndex = Math.floor(Math.random() * $options.length);
      const value = $options[randomIndex].value;
      cy.get(this.locators.mb_dropdown).select(value);
    });
  cy.wait(2000);
  cy.get(this.locators.callbutton).click({force:true});
  cy.wait(2000);
  cy.contains('Connect Call Via:').should('be.visible');
  cy.wait(2000);
  cy.contains('button','Cancel')
    .should('be.visible')
    .click({force:true});
  cy.wait(2000);
  cy.contains('Connect Call Via:')
    .should('not.exist');

}
AccountDetails_015(){
  cy.wait(2000);
  cy.get(this.locators.Credit_card_button).click({force:true});
cy.wait(2000);
cy.get(this.locators.customer_name).type("a");
cy.wait(2000);

  cy.contains('button','Search').click({force:true});
  cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.toggle_button).click({force:true});
  cy.wait(2000);
 cy.contains('Dialer')
  .scrollIntoView()
  .click({force:true});

  cy.get(this.locators.mb_dropdown)
    .find('option:not([value=""])')
    .then($options => {
      const randomIndex = Math.floor(Math.random() * $options.length);
      const value = $options[randomIndex].value;
      cy.get(this.locators.mb_dropdown).select(value);
    });

  cy.get(this.locators.callbutton).click({force:true});

  // Verify popup opened
  cy.contains('Connect Call Via:').should('be.visible');

  // Click Proceed without selecting option
  cy.contains('button','Proceed')
    .should('be.visible')
    .click({force:true});

  // Verify call is NOT initiated
  cy.contains('Error!').should('not.exist');

}
AccountDetails_016(){
  cy.wait(2000);
  cy.wait(2000);
  cy.get(this.locators.Credit_card_button).click({force:true});
cy.wait(2000);
cy.get(this.locators.customer_name).type("a");
cy.wait(2000);

  cy.contains('button','Search').click({force:true});
  cy.get(':nth-child(1) > [title="Click to View Cutomer Details"] > [style="text-wrap-mode: nowrap; position: relative;"] > span').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.toggle_button).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Demographic_details).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.callbutton_on_dd).click({force:true});
  cy.wait(2000);
  cy.contains('Connect Call Via:').should('be.visible');
    cy.get('.card-content')
    .contains('IKONTEL')
    .should('be.visible')
    .click({force:true});
    cy.wait(2000);
 
}
AccountDetails_017(){
  cy.wait(5000);
  cy.get(this.locators.Credit_card_button).click({force:true});
cy.wait(2000);
cy.get(this.locators.customer_name).type("a");
cy.wait(2000);

  cy.contains('button','Search').click({force:true});
  cy.get(':nth-child(1) > [title="Click to View Cutomer Details"] > [style="text-wrap-mode: nowrap; position: relative;"] > span').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.toggle_button).click({force:true});
  cy.wait(2000);
 cy.contains('Dialer')
  .scrollIntoView()
  .click({force:true});
  cy.wait(2000);
  cy.get(this.locators.mb_dropdown)
    .find('option:not([value=""])')
    .then($options => {
      const randomIndex = Math.floor(Math.random() * $options.length);
      const value = $options[randomIndex].value;
      cy.get(this.locators.mb_dropdown).select(value);
    });
  cy.wait(2000);
  cy.get(this.locators.callbutton).click({force:true});
  cy.wait(2000);
  cy.contains('Connect Call Via:').should('be.visible');
  cy.wait(2000);
  cy.get('.card-content')
    .contains('Ameyo')
    .should('be.visible')
    .click({force:true});
  cy.wait(2000);
  cy.contains('button','Proceed')
    .should('be.visible')
    .click({force:true});
  cy.wait(2000);
 

}
AccountDetails_018(){

  cy.wait(5000);
  cy.get(this.locators.Credit_card_button).click({force:true});
cy.wait(2000);
cy.get(this.locators.customer_name).type("a");
cy.wait(2000);

  cy.contains('button','Search').click({force:true});
  cy.get(':nth-child(1) > [title="Click to View Cutomer Details"] > [style="text-wrap-mode: nowrap; position: relative;"] > span').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.toggle_button).click({force:true});
  cy.wait(2000);
 cy.contains('Dialer')
  .scrollIntoView()
  .click({force:true});
  cy.wait(2000);
  cy.get(this.locators.mb_dropdown)
    .find('option:not([value=""])')
    .then($options => {
      const randomIndex = Math.floor(Math.random() * $options.length);
      const value = $options[randomIndex].value;
      cy.get(this.locators.mb_dropdown).select(value);
    });
  cy.wait(2000);
  cy.get(this.locators.callbutton).click({force:true});
  cy.wait(2000); 
  cy.contains('Connect Call Via:').scrollIntoView().should('be.visible');
  cy.wait(2000);
  cy.get('.card-content')
    .contains('TATA')
    .should('be.visible')
    .click({force:true});
  cy.wait(2000);
  cy.contains('button','Proceed')
    .should('be.visible')
    .click({force:true});
  cy.wait(2000);
  cy.contains('Success!').should('exist');

}
AccountDetails_019(){
 cy.wait(2000);
  cy.get(this.locators.customer_accountnumber).type("1667");
  cy.wait(2000);
  cy.contains('button','Search').click({force:true});
  cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.toggle_button).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.case_details).click({force:true});
  cy.wait(2000);
  cy.contains('Contact Number').scrollIntoView().should('be.visible');
  cy.get(this.locators.contact_number).should('be.visible');
  cy.wait(2000);
  cy.contains('button','SMS')
    .should('be.visible')
    .and('not.be.disabled');


}

AccountDetails_020(){
  cy.wait(2000);
  cy.get(this.locators.customer_accountnumber).type("1667");
  cy.wait(2000);
  cy.contains('button','Search').click({force:true});
  cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.toggle_button).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.case_details).click({force:true});
  cy.wait(2000);
  cy.contains('Contact Number').scrollIntoView().should('be.visible');
  cy.wait(2000);
  cy.get(this.locators.contact_number).should('be.visible');
  cy.wait(2000);
  cy.get(this.locators.contact_number).select(1);
  cy.wait(2000);
  cy.contains('button','SMS').click({force:true});
  cy.contains('Send Message').should('be.visible');
}
AccountDetails_021(){
  cy.wait(2000);
  cy.get(this.locators.customer_accountnumber).type("1667");
  cy.wait(2000);
  cy.contains('button','Search').click({force:true});
  cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.toggle_button).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.case_details).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.contact_number).select(1);
  cy.wait(2000);
  cy.contains('button','SMS').click({force:true});
  cy.contains('Send Message').should('be.visible');
  cy.contains('Select Template').should('be.visible');
  cy.contains('Select Language').should('be.visible');

}


AccountDetails_022(){
  cy.wait(2000);
  cy.get(this.locators.customer_accountnumber).type("1667");
  cy.wait(2000);
  cy.contains('button','Search').click({force:true});
  cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.toggle_button).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.case_details).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.contact_number).select(1);
  cy.wait(2000);
  cy.contains('button','SMS').click({force:true});
  cy.contains('button','Preview').should('be.visible').and('be.disabled');
}

AccountDetails_023() {

  cy.wait(2000);
  cy.get(this.locators.customer_accountnumber)
    .clear()
    .type("1667");
  cy.wait(2000);
  cy.contains('button', 'Search')
    .click({ force: true });
  cy.wait(2000);
  cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
    .click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.toggle_button)
    .click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.case_details)
    .click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.contact_number)
    .select(1, { force: true });
  cy.wait(2000);
  cy.contains('button', 'SMS')
    .click({ force: true });
  cy.wait(2000);
  cy.contains('Send Message')
    .should('be.visible');
  cy.get(this.locators.template_dropdown)
    .should('exist');
  cy.get(this.locators.language_dropdown)
    .should('exist');
  cy.get(this.locators.preview_button)
    .should('be.disabled');
  cy.get(this.locators.template_dropdown)
    .invoke('val')
    .should('eq', '');
  cy.get(this.locators.language_dropdown)
    .invoke('val')
    .should('eq', '');

}
AccountDetails_024(){

  cy.wait(2000);
  cy.get(this.locators.customer_accountnumber).type("1667");
  cy.wait(2000);
  cy.contains('button','Search').click({force:true});
  cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.toggle_button).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.case_details).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.contact_number).select(1);
  cy.wait(2000);
  cy.contains('button','SMS').click({force:true});
  cy.wait(2000);
  cy.contains('Send Message').should('be.visible');
  cy.contains('button','Cancel').click({force:true});
  cy.contains('Send Message').should('not.exist');
  cy.contains('Contact Number').should('be.visible');

}
AccountDetails_025(){

}
AccountDetails_026() {
  cy.wait(2000);
  cy.get(this.locators.customer_accountnumber)
    .clear()
    .type("1667");
  cy.wait(2000);
  cy.contains('button', 'Search')
    .click({ force: true });
  cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
    .click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.toggle_button)
    .click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.case_details)
    .click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.contact_number)
    .select(1, { force: true });
  cy.wait(2000);
  cy.contains('button', 'SMS')
    .click({ force: true });
  cy.contains('Send Message')
    .should('be.visible');
  // Open Template Dropdown
  cy.get(this.locators.template_dropdown)
    .click({ force: true });
  // Select random template option
  cy.get('.ng-option')
    .should('have.length.greaterThan', 0)
    .then(($options) => {

      const randomIndex = Math.floor(Math.random() * $options.length);

      cy.wrap($options[randomIndex]).click({ force: true });

    });

  cy.wait(2000);
  // Verify Language dropdown exists
  cy.get(this.locators.language_dropdown)
    .should('exist');
}
AccountDetails_027() {

  cy.wait(2000);
  cy.get(this.locators.customer_accountnumber)
    .type("1667");
  cy.wait(2000);
  cy.contains('button','Search')
    .click({force:true});
  cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
    .click({force:true});
  cy.wait(2000);
  cy.get(this.locators.toggle_button)
    .click({force:true});
  cy.wait(2000);
  cy.get(this.locators.case_details)
    .click({force:true});
  cy.wait(2000);
  cy.get(this.locators.contact_number)
    .select(1);
  cy.wait(2000);
  cy.contains('button','SMS')
    .click({force:true});
  cy.wait(2000);
  cy.get(this.locators.template_dropdown)
    .click({force:true});

  cy.get('.ng-option')
    .should('have.length.greaterThan', 0)
    .then(($options) => {

      const randomIndex = Math.floor(Math.random() * $options.length);

      cy.wrap($options[randomIndex]).click({force:true});

    });

  cy.wait(1000);
  cy.get(this.locators.language_dropdown)
    .click({force:true});

  cy.get('.ng-option-label')
    .then(($options) => {

      const randomIndex = Math.floor(Math.random() * $options.length);

      cy.wrap($options[randomIndex]).click({force:true});

    });

  cy.get(this.locators.preview_button)
    .should('be.enabled');
}
AccountDetails_028() {

  cy.wait(2000);

  cy.get(this.locators.customer_accountnumber)
    .clear()
    .type("1667");

  cy.wait(2000);

  cy.contains('button', 'Search').click({ force: true });

  cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
    .click({ force: true });

  cy.wait(2000);

  cy.get(this.locators.toggle_button).click({ force: true });

  cy.wait(2000);

  cy.get(this.locators.case_details).click({ force: true });

  cy.wait(2000);

  cy.get(this.locators.contact_number)
    .select(1, { force: true });

  cy.wait(2000);

  cy.contains('button', 'SMS').click({ force: true });

  cy.wait(2000);

  // Random Template Selection
  cy.get(this.locators.template_dropdown)
    .click({ force: true });

  cy.get('.ng-option')
    .should('have.length.greaterThan', 0)
    .then(($templates) => {

      const randomTemplate =
        Cypress._.random(0, $templates.length - 1);

      cy.wrap($templates.eq(randomTemplate))
        .click({ force: true });

    });

  cy.wait(1000);

  // Random Language Selection
  cy.get(this.locators.language_dropdown)
    .click({ force: true });

  cy.get('.ng-option')
    .should('have.length.greaterThan', 0)
    .then(($languages) => {

      const randomLanguage =
        Cypress._.random(0, $languages.length - 1);

      cy.wrap($languages.eq(randomLanguage))
        .click({ force: true });

    });

  cy.get(this.locators.preview_button)
    .should('be.enabled')
    .click({ force: true });

  cy.wait(2000);

  cy.contains('Message Preview')
    .should('be.visible');
}

AccountDetails_029() {

  cy.wait(2000);

  cy.get(this.locators.customer_accountnumber)
    .clear()
    .type("1667");

  cy.wait(2000);

  cy.contains('button', 'Search').click({ force: true });

  cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
    .click({ force: true });

  cy.wait(2000);

  cy.get(this.locators.toggle_button).click({ force: true });

  cy.wait(2000);

  cy.get(this.locators.case_details).click({ force: true });

  cy.wait(2000);

  cy.get(this.locators.contact_number)
    .select(1, { force: true });

  cy.wait(2000);

  cy.contains('button', 'SMS').click({ force: true });

  cy.wait(2000);

  // Random Template Selection
  cy.get(this.locators.template_dropdown)
    .click({ force: true });

  cy.get('.ng-option')
    .should('have.length.greaterThan', 0)
    .then(($templates) => {

      const randomTemplate =
        Cypress._.random(0, $templates.length - 1);

      cy.wrap($templates.eq(randomTemplate))
        .click({ force: true });

    });

  cy.wait(1000);

  // Random Language Selection
  cy.get(this.locators.language_dropdown)
    .click({ force: true });

  cy.get('.ng-option')
    .should('have.length.greaterThan', 0)
    .then(($languages) => {

      const randomLanguage =
        Cypress._.random(0, $languages.length - 1);

      cy.wrap($languages.eq(randomLanguage))
        .click({ force: true });

    });

  cy.get(this.locators.preview_button)
    .should('be.enabled')
    .click({ force: true });

  cy.wait(2000);

  cy.contains('Message Preview')
    .should('be.visible');

  cy.get(this.locators.sms)
    .should('be.visible');
}
AccountDetails_030() {
  cy.wait(2000);
  cy.get(this.locators.customer_accountnumber)
    .clear()
    .type("1667");

  cy.wait(2000);

  cy.contains('button', 'Search')
    .click({ force: true });

  cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
    .click({ force: true });

  cy.wait(2000);

  cy.get(this.locators.toggle_button)
    .click({ force: true });

  cy.wait(2000);

  cy.get(this.locators.case_details)
    .click({ force: true });

  cy.wait(2000);

  cy.get(this.locators.contact_number)
    .select(1, { force: true });

  cy.wait(2000);

  cy.contains('button', 'SMS')
    .click({ force: true });

  cy.wait(2000);

  // Select Random Template
  cy.get(this.locators.template_dropdown)
    .click({ force: true });

  cy.get('.ng-option')
    .should('have.length.greaterThan', 0)
    .then(($templates) => {

      const randomTemplate =
        Cypress._.random(0, $templates.length - 1);

      cy.wrap($templates.eq(randomTemplate))
        .click({ force: true });

    });

  cy.wait(2000);

  // Select Random Language
  cy.get(this.locators.language_dropdown)
    .click({ force: true });

  cy.get('.ng-option')
    .should('have.length.greaterThan', 0)
    .then(($languages) => {

      const randomLanguage =
        Cypress._.random(0, $languages.length - 1);

      cy.wrap($languages.eq(randomLanguage))
        .click({ force: true });

    });

  cy.wait(2000);

  // Verify Preview button enabled
  cy.get(this.locators.preview_button)
    .should('be.enabled')
    .click({ force: true });

  cy.wait(2000);

  // Verify Preview popup
  cy.contains('Message Preview')
    .should('be.visible');

  // Click Preview button again if required
  cy.get(this.locators.preview_button)
    .click({ force: true });

}


AccountDetails_031() {

  cy.wait(2000);

  cy.get(this.locators.customer_accountnumber)
    .clear()
    .type("1667");

  cy.wait(2000);

  cy.contains('button', 'Search')
    .click({ force: true });

  cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
    .click({ force: true });

  cy.wait(2000);

  cy.get(this.locators.toggle_button)
    .click({ force: true });

  cy.wait(2000);

  cy.get(this.locators.case_details)
    .click({ force: true });

  cy.wait(2000);

  cy.get(this.locators.contact_number)
    .select(1, { force: true });

  cy.wait(2000);

  cy.contains('button', 'SMS')
    .click({ force: true });

  cy.wait(2000);

  // Select Random Template
  cy.get(this.locators.template_dropdown)
    .click({ force: true });

  cy.get('.ng-option')
    .should('have.length.greaterThan', 0)
    .then(($options) => {

      const randomIndex = Cypress._.random(0, $options.length - 1);

      cy.wrap($options.eq(randomIndex))
        .click({ force: true });

    });

  cy.wait(1000);

  // Select English Language
  cy.get(this.locators.language_dropdown)
    .click({ force: true });

  cy.contains('.ng-option-label', 'English')
    .click({ force: true });

  cy.wait(1000);

  // Verify Preview button is enabled and click
  cy.get(this.locators.preview_button)
    .should('be.enabled')
    .click({ force: true });

  cy.wait(2000);

  // Verify Message Preview popup
  cy.contains('Message Preview')
    .should('be.visible');

  // Click Cancel
  cy.get(this.locators.cancel_button)
    .click({ force: true });

  // Verify Preview popup closed
  cy.contains('Message Preview')
    .should('not.exist');

}
AccountDetails_032(){

  cy.wait(2000);
  cy.get(this.locators.customer_accountnumber).type("1667");

  cy.wait(2000);

  cy.contains('button','Search').click({force:true});

  cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
    .click({force:true});

  cy.wait(2000);

  cy.get(this.locators.toggle_button).click({force:true});

  cy.wait(2000);

  cy.get(this.locators.case_details).click({force:true});

  cy.wait(2000);

  cy.get(this.locators.contact_number).select(1);

  cy.wait(2000);

  cy.contains('button','SMS').click({force:true});

  cy.wait(2000);

  // Random Template Selection
  cy.get(this.locators.template_dropdown)
    .click({ force: true });

  cy.get('.ng-option')
    .should('have.length.greaterThan', 0)
    .then(($options) => {

      const randomIndex = Cypress._.random(0, $options.length - 1);

      cy.wrap($options.eq(randomIndex))
        .click({ force: true });

    });

  // Select English Language
  cy.get(this.locators.language_dropdown)
    .click({ force: true });

  cy.get('.ng-option-label')
    .contains('English')
    .click({ force: true });

  cy.get(this.locators.preview_button)
    .should('be.enabled')
    .click({ force: true });

  cy.wait(2000);

  cy.get(this.locators.note)
    .scrollIntoView()
    .should('be.visible');

}
AccountDetails_033() {

  cy.wait(2000);

  cy.get(this.locators.customer_accountnumber)
    .type("1667");

  cy.wait(2000);

  cy.contains('button','Search')
    .click({force:true});

  cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
    .click({force:true});

  cy.wait(2000);

  cy.get(this.locators.toggle_button)
    .click({force:true});

  cy.wait(2000);

  cy.get(this.locators.case_details)
    .click({force:true});

  cy.wait(2000);

  cy.get(this.locators.contact_number)
    .select(1);

  cy.wait(2000);

  cy.contains('button','SMS')
    .click({force:true});

  cy.wait(2000);

  // =========================
  // TEMPLATE SELECTION (FIXED)
  // =========================
  cy.get(this.locators.template_dropdown)
    .click({force:true});

  cy.get('.ng-option')
    .should('be.visible')
    .first()
    .click({force:true});

  cy.wait(1000);

  // =========================
  // LANGUAGE SELECTION (FIXED)
  // =========================
  cy.get(this.locators.language_dropdown)
    .click({force:true});

  cy.get('.ng-option-label')
    .contains('English')
    .click({force:true});

  cy.wait(1000);

  // =========================
  // PREVIEW FLOW
  // =========================
  cy.get(this.locators.preview_button)
    .should('be.enabled')
    .click({force:true});

  cy.wait(2000);

  cy.contains('Message Preview')
    .should('be.visible');

  cy.get(this.locators.preview_button)
    .click({force:true});

  cy.contains('Success!')
    .should('be.visible');
}
AccountDetails_034() {

  cy.wait(2000);

  cy.get(this.locators.customer_accountnumber)
    .type("1667");

  cy.wait(2000);

  cy.contains('button','Search')
    .click({force:true});

  cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
    .click({force:true});

  cy.wait(2000);

  cy.get(this.locators.toggle_button)
    .click({force:true});

  cy.wait(2000);

  cy.get(this.locators.case_details)
    .click({force:true});

  cy.wait(2000);

  cy.get(this.locators.contact_number)
    .select(1);

  cy.wait(2000);

  cy.contains('button','SMS')
    .click({force:true});

  cy.wait(2000);

  // =========================
  // RANDOM TEMPLATE SELECTION
  // =========================
  cy.get(this.locators.template_dropdown)
    .click({force:true});

  cy.get('.ng-option')
    .should('have.length.greaterThan', 0)
    .then(($options) => {

      const randomIndex = Math.floor(Math.random() * $options.length);

      cy.wrap($options[randomIndex]).click({force:true});

    });

  cy.wait(1000);

  // =========================
  // RANDOM LANGUAGE SELECTION
  // =========================
  cy.get(this.locators.language_dropdown)
    .click({force:true});

  cy.get('.ng-option-label')
    .then(($options) => {

      const randomIndex = Math.floor(Math.random() * $options.length);

      cy.wrap($options[randomIndex]).click({force:true});

    });

  cy.wait(1000);

  // =========================
  // PREVIEW FLOW
  // =========================
  cy.get(this.locators.preview_button)
    .should('be.enabled')
    .click({force:true});

  cy.wait(2000);

  cy.contains('Message Preview')
    .should('be.visible');

  cy.get(this.locators.preview_button)
    .click({force:true});

  cy.contains('Success!')
    .should('be.visible');

  cy.contains('Account Details')
    .scrollIntoView()
    .should('be.visible');

  cy.contains('Case Details')
    .scrollIntoView()
    .should('be.visible');
}
AccountDetails_035(){


  cy.wait(2000);
  cy.get(this.locators.customer_accountnumber).type("1667");
  cy.wait(2000);

  cy.contains('button','Search').click({force:true});

  cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
  .click({force:true});

  cy.wait(2000);

  cy.get(this.locators.toggle_button).click({force:true});
  cy.wait(2000);

  cy.get(this.locators.case_details).click({force:true});
  cy.wait(2000);

  cy.contains('Email Address')
  .scrollIntoView({force:true})
  .should('exist');

  cy.get(this.locators.email_address).should('be.visible');

  cy.contains('button','Email')
  .should('be.visible')
  .and('not.be.disabled');
}

AccountDetails_036(){

  cy.wait(2000);
  cy.get(this.locators.customer_accountnumber).type("1667");

  cy.contains('button','Search').click({force:true});

  cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
  .click({force:true});

  cy.wait(2000);

  cy.get(this.locators.toggle_button).click({force:true});

  cy.get(this.locators.case_details).click({force:true});

  cy.get(this.locators.email_address).select(1);

  cy.contains('button','Email').click({force:true});

  cy.contains('Send Email')
  .should('be.visible');
}

AccountDetails_037(){

  cy.wait(2000);
  cy.get(this.locators.customer_accountnumber).type("1667");
  cy.wait(2000);
  cy.contains('button','Search').click({force:true});
  cy.wait(2000);
  cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
  .click({force:true});
  cy.wait(2000);
  cy.get(this.locators.toggle_button).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.case_details).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.email_address).select(1);
  cy.wait(2000);
  cy.contains('button','Email').click({force:true});
  cy.wait(2000);
  cy.contains('Send Email').should('be.visible');
  cy.wait(2000);
  cy.contains('Select Template')
  .should('be.visible');
  cy.wait(2000);
  cy.contains('Select Language')
  .should('be.visible');

}
AccountDetails_038(){

  cy.wait(2000);
  cy.get(this.locators.customer_accountnumber).type("1667");
  cy.wait(2000);
  cy.contains('button','Search').click({force:true});
  cy.wait(2000);
  cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
  .click({force:true});
  cy.wait(2000);
  cy.get(this.locators.toggle_button).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.case_details).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.email_address).select(1);
  cy.wait(2000);
  cy.contains('button','Email').click({force:true});
  cy.wait(2000);
  cy.contains('Send Email').should('be.visible');
  cy.wait(2000);
  cy.contains('button','Preview')
  .should('be.disabled');

}
AccountDetails_039(){

  
  cy.wait(2000);
  cy.get(this.locators.customer_accountnumber).type("1667");
  cy.wait(2000);
  cy.contains('button','Search').click({force:true});
  cy.wait(2000);
  cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
  .click({force:true});
  cy.wait(2000);
  cy.get(this.locators.toggle_button).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.case_details).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.email_address).select(1);
  cy.wait(2000);
  cy.contains('button','Email').click({force:true});
  cy.wait(2000);
  cy.contains('Send Email').should('be.visible');
  cy.wait(2000);
  cy.contains('button','Preview')
  .click({force:true});
  cy.wait(2000);
  cy.contains('Select Template').should('be.visible');
  cy.contains('Select Language').should('be.visible');

}
AccountDetails_040() {

    cy.wait(2000);

    cy.get(this.locators.customer_accountnumber)
        .clear()
        .type("1667");

    cy.wait(2000);

    cy.contains('button', 'Search')
        .click({ force: true });

    cy.wait(2000);

    cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
        .click({ force: true });

    cy.wait(2000);

    cy.get(this.locators.toggle_button)
        .click({ force: true });

    cy.wait(2000);

    cy.get(this.locators.case_details)
        .click({ force: true });

    cy.wait(2000);

    // Verify email dropdown exists
    cy.get(this.locators.email_address)
        .should('exist');

    // Verify options are loaded
    cy.get(this.locators.email_address)
        .find('option')
        .should('have.length.greaterThan', 1);

    // Select second email option
    cy.get(this.locators.email_address)
        .select(1, { force: true });

    cy.wait(2000);

    // Verify email is selected
    cy.get(this.locators.email_address)
        .invoke('val')
        .should('not.be.empty');

    // Click Email button
    cy.contains('button', 'Email')
        .click({ force: true });

    cy.wait(2000);

    // Verify Send Email popup is displayed
    cy.contains('Send Email')
        .should('be.visible');
    cy.wait(2000);
    cy.contains('button', 'Cancel')
        .click({ force: true });
    cy.wait(2000);
    cy.contains('Send Email')
        .should('not.exist');
    cy.wait(2000);    
    cy.contains('Case Details')
       .scrollIntoView();
}
AccountDetails_041() {

    cy.wait(2000);
    cy.get(this.locators.customer_accountnumber)
        .clear()
        .type("1667");
    cy.wait(2000);
    cy.contains('button', 'Search')
        .click({ force: true });
    cy.wait(2000);
    cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
        .click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.toggle_button)
        .click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.case_details)
        .click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.email_address)
        .scrollIntoView()
        .should('exist')
        .select(1, { force: true });

    cy.wait(2000);
    cy.contains('button', 'Email')
        .click({ force: true });

    cy.wait(2000);

    cy.contains('Send Email')
        .should('be.visible');

    cy.wait(2000);
    cy.get(this.locators.template_dropdown)
        .scrollIntoView()
        .click({ force: true });
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option')
        .should('have.length.greaterThan', 0)
        .first()
        .click({ force: true });
    cy.wait(2000);
    cy.get('.ng-dropdown-panel')
        .should('not.exist');

}
AccountDetails_042() {

  cy.wait(2000);

  cy.get(this.locators.customer_accountnumber)
    .clear()
    .type("1667");

  cy.contains('button', 'Search')
    .click({ force: true });

  cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
    .click({ force: true });

  cy.get(this.locators.toggle_button)
    .click({ force: true });

  cy.wait(2000);

  cy.get(this.locators.case_details)
    .click({ force: true });

  cy.wait(2000);

  cy.get(this.locators.email_address)
    .scrollIntoView()
    .select(1, { force: true });

  cy.wait(2000);

  cy.contains('button', 'Email')
    .click({ force: true });

  cy.wait(2000);

  // Open Template Dropdown
  cy.get(this.locators.template_dropdown)
    .scrollIntoView()
    .click({ force: true });

  // Select Random Template
  cy.get('.ng-dropdown-panel .ng-option')
    .should('have.length.greaterThan', 0)
    .then(($templates) => {

      const randomTemplate =
        Cypress._.random(0, $templates.length - 1);

      cy.wrap($templates.eq(randomTemplate))
        .click({ force: true });

    });

  cy.wait(2000);

  // Verify dropdown closed
  cy.get('.ng-dropdown-panel')
    .should('not.exist');

}
AccountDetails_043(){
cy.wait(2000);
cy.get(this.locators.customer_accountnumber).type("1667");
cy.wait(2000);
cy.contains('button','Search').click({force:true});
cy.wait(2000);
cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span').click({force:true});
cy.wait(2000);
cy.get(this.locators.toggle_button).click({force:true});
cy.wait(2000);
cy.get(this.locators.case_details).click({force:true});
cy.wait(2000);
cy.get(this.locators.email_address).select(1);
cy.wait(2000);
cy.contains('button','Email').click({force:true});
cy.wait(2000);
cy.get(this.locators.template_dropdown).click();
cy.get('.ng-dropdown-panel .ng-option').then(($templates) => {

  const indices = Cypress._.shuffle([...Array($templates.length).keys()]);

  const tryTemplate = (indexList) => {
    if (indexList.length === 0) {
      throw new Error('No template found with more than one language');
    }

    const [current, ...remaining] = indexList;

    cy.get(this.locators.template_dropdown).click();
    cy.get('.ng-dropdown-panel .ng-option').eq(current).click();

    cy.get(this.locators.language_dropdown).click();
    cy.get('.ng-dropdown-panel .ng-option').then(($langs) => {
      if ($langs.length > 1) {
        const randomLang = Cypress._.random(0, $langs.length - 1);
        cy.wrap($langs.eq(randomLang)).click();
      } else {
        cy.get('body').click(0, 0);
        tryTemplate(remaining);
      }
    });
  };

  tryTemplate(indices);
});
}

AccountDetails_044(){

cy.wait(2000)
cy.get(this.locators.customer_accountnumber).type("1667")
cy.wait(2000);
cy.contains('button','Search').click({force:true})
cy.wait(2000);
cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
.click({force:true})
cy.wait(2000);
cy.get(this.locators.toggle_button).click({force:true})
cy.wait(2000);
cy.get(this.locators.case_details).click({force:true})
cy.wait(2000);
cy.get(this.locators.email_address).select(1)
cy.wait(2000);
cy.contains('button','Email').click({force:true})
cy.wait(2000);

cy.get(this.locators.template_dropdown).click();
cy.get('.ng-dropdown-panel .ng-option').then(($templates) => {

  const indices = Cypress._.shuffle([...Array($templates.length).keys()]);

  const tryTemplate = (indexList) => {
    if (indexList.length === 0) {
      throw new Error('No template found with more than one language');
    }

    const [current, ...remaining] = indexList;

    cy.get(this.locators.template_dropdown).click();
    cy.get('.ng-dropdown-panel .ng-option').eq(current).click();

    cy.wait(2000);

    cy.get(this.locators.language_dropdown).click();
    cy.get('.ng-dropdown-panel .ng-option').then(($langs) => {
      if ($langs.length > 1) {

        // Select first language
        cy.wrap($langs.eq(0)).click({ force: true });

        // Reopen and select second language
        cy.get(this.locators.language_dropdown).click();
        cy.get('.ng-dropdown-panel .ng-option').eq(1).click({ force: true });

        // Verify only one language is selected (single select check)
        cy.get(this.locators.language_dropdown)
          .find('.ng-value-label')
          .should('have.length', 1);

      } else if ($langs.length === 1) {
        // Only one language available — just select it
        cy.wrap($langs.eq(0)).click({ force: true });

      } else {
        // No languages found — try next template
        cy.get('body').click(0, 0);
        tryTemplate(remaining);
      }
    });
  };

  tryTemplate(indices);
});
}

AccountDetails_045() {

    cy.wait(2000);
    cy.get(this.locators.customer_accountnumber).type("1667");
    cy.wait(2000);
    cy.contains('button', 'Search').click({ force: true });
    cy.wait(2000);
    cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
        .click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.toggle_button).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.case_details).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.email_address).select(1);
    cy.wait(2000);
    cy.contains('button', 'Email').click({ force: true });
    cy.wait(2000);
    cy.contains('button', 'Preview').should('be.disabled');
    cy.get(this.locators.template_dropdown)
        .should('be.visible')
        .click({ force: true });

    cy.get('.ng-dropdown-panel .ng-option')
        .should('have.length.greaterThan', 0)
        .then(($templates) => {

            const randomTemplate =
                Cypress._.random(0, $templates.length - 1);

            cy.wrap($templates.eq(randomTemplate))
                .scrollIntoView()
                .click({ force: true });
        });

    cy.wait(2000);
    cy.contains('button', 'Preview').should('be.disabled');
    cy.get(this.locators.language_dropdown)
        .should('be.visible')
        .click({ force: true });

    cy.get('.ng-dropdown-panel .ng-option')
        .should('have.length.greaterThan', 0)
        .then(($languages) => {

            const randomLanguage =
                Cypress._.random(0, $languages.length - 1);

            cy.wrap($languages.eq(randomLanguage))
                .scrollIntoView()
                .click({ force: true });
        });

    cy.wait(2000);

    // Verify Preview button is enabled
    cy.contains('button', 'Preview')
        .should('not.be.disabled');
}
AccountDetails_046(){
cy.wait(2000);
cy.get(this.locators.customer_accountnumber).type("1667")
cy.wait(2000);
cy.contains('button','Search').click({force:true});
cy.wait(2000);
cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
.click({force:true})
cy.wait(2000);
cy.get(this.locators.toggle_button).click({force:true});
cy.wait(2000);
cy.get(this.locators.case_details).click({force:true})
cy.wait(2000);
cy.get(this.locators.email_address).select(1)
cy.wait(2000);
cy.contains('button','Email').click({force:true});
cy.wait(2000);

// Step 1: Select Template dynamically
cy.get(this.locators.template_dropdown).click();
cy.get('.ng-dropdown-panel .ng-option').then(($templates) => {

  const indices = Cypress._.shuffle([...Array($templates.length).keys()]);

  const tryTemplate = (indexList) => {
    if (indexList.length === 0) {
      throw new Error('No template found with any language');
    }

    const [current, ...remaining] = indexList;

    cy.get(this.locators.template_dropdown).click();
    cy.get('.ng-dropdown-panel .ng-option').eq(current).click();

    cy.wait(2000);

    // Step 2: Open language dropdown
    cy.get(this.locators.language_dropdown).click();
    cy.get('.ng-dropdown-panel .ng-option').then(($langs) => {

      if ($langs.length > 0) {
        // Step 3: Select random language
        const randomLang = Cypress._.random(0, $langs.length - 1);
        cy.wrap($langs.eq(randomLang)).click({ force: true });

        cy.wait(2000);

        // Step 4: Click Preview button
        cy.contains('button', 'Preview').click({ force: true });

        cy.wait(2000);

        // Step 5: Verify gmail subject and email content are visible
        cy.get(this.locators.gmail_subject).should('be.visible');
        cy.get(this.locators.email_content).should('be.visible');

      } else {
        // No languages — try next template
        cy.get('body').click(0, 0);
        tryTemplate(remaining);
      }
    });
  };

  tryTemplate(indices);
});
}


AccountDetails_047(){
cy.wait(2000);
cy.get(this.locators.customer_accountnumber).type("1667")
cy.wait(2000);
cy.contains('button','Search').click({force:true});
cy.wait(2000);
cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span').click({force:true})
cy.wait(2000);
cy.get(this.locators.toggle_button).click({force:true});
cy.wait(2000);
cy.get(this.locators.case_details).click({force:true})
cy.wait(2000);
cy.get(this.locators.email_address).select(1)
cy.wait(2000);
cy.contains('button','Email').click({force:true});
cy.wait(2000);

// Step 1: Select Template dynamically
cy.get(this.locators.template_dropdown).click();
cy.get('.ng-dropdown-panel .ng-option').then(($templates) => {

  const indices = Cypress._.shuffle([...Array($templates.length).keys()]);

  const tryTemplate = (indexList) => {
    if (indexList.length === 0) {
      throw new Error('No template found with any language');
    }

    const [current, ...remaining] = indexList;

    cy.get(this.locators.template_dropdown).click();
    cy.get('.ng-dropdown-panel .ng-option').eq(current).click();

    cy.wait(2000);

    // Step 2: Open language dropdown
    cy.get(this.locators.language_dropdown).click();
    cy.get('.ng-dropdown-panel .ng-option').then(($langs) => {

      if ($langs.length > 0) {
        // Step 3: Select random language
        const randomLang = Cypress._.random(0, $langs.length - 1);
        cy.wrap($langs.eq(randomLang)).click({ force: true });

        cy.wait(2000);

        // Step 4: Click Preview button
        cy.contains('button', 'Preview').click({ force: true });

        cy.wait(2000);

        // Step 5: Verify gmail subject and email content are visible
        cy.get(this.locators.gmail_subject).should('be.visible');
        cy.get(this.locators.email_content).should('be.visible');

      } else {
        // No languages — try next template
        cy.get('body').click(0, 0);
        tryTemplate(remaining);
      }
    });
  };

  tryTemplate(indices);
});
}



AccountDetails_048(){
cy.wait(2000);
cy.get(this.locators.customer_accountnumber).type("1667")
cy.wait(2000);
cy.contains('button','Search').click({force:true});
cy.wait(2000);
cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span').click({force:true})
cy.wait(2000);
cy.get(this.locators.toggle_button).click({force:true});
cy.wait(2000);
cy.get(this.locators.case_details).click({force:true})
cy.wait(2000);
cy.get(this.locators.email_address).select(1)
cy.wait(2000);
cy.contains('button','Email').click({force:true});
cy.wait(2000);

// Step 1: Select Template dynamically
cy.get(this.locators.template_dropdown).click();
cy.get('.ng-dropdown-panel .ng-option').then(($templates) => {

  const indices = Cypress._.shuffle([...Array($templates.length).keys()]);

  const tryTemplate = (indexList) => {
    if (indexList.length === 0) {
      throw new Error('No template found with any language');
    }

    const [current, ...remaining] = indexList;

    cy.get(this.locators.template_dropdown).click();
    cy.get('.ng-dropdown-panel .ng-option').eq(current).click();

    cy.wait(2000);

    // Step 2: Open language dropdown
    cy.get(this.locators.language_dropdown).click();
    cy.get('.ng-dropdown-panel .ng-option').then(($langs) => {

      if ($langs.length > 0) {
        // Step 3: Select random language
        const randomLang = Cypress._.random(0, $langs.length - 1);
        cy.wrap($langs.eq(randomLang)).click({ force: true });

        cy.wait(2000);

        // Step 4: Click Preview button
        cy.contains('button', 'Preview').click({ force: true });

        cy.wait(2000);

        // Step 5: Verify gmail subject and email content are visible
        cy.get(this.locators.gmail_subject).should('be.visible');
        cy.get(this.locators.email_content).should('be.visible');

        // Step 6: Send the email
        cy.get(this.locators.send_email).click({ force: true });

        cy.wait(2000);

        // Step 7: Verify success message
        cy.contains('Success! Email Sent Successfully')
          .should('be.visible');

      } else {
        // No languages — try next template
        cy.get('body').click(0, 0);
        tryTemplate(remaining);
      }
    });
  };

  tryTemplate(indices);
});
}
AccountDetails_049(){
cy.wait(2000);
cy.get(this.locators.customer_accountnumber).type("1667")
cy.wait(2000);
cy.contains('button','Search').click({force:true});
cy.wait(2000);
cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span').click({force:true})
cy.wait(2000);
cy.get(this.locators.toggle_button).click({force:true});
cy.wait(2000);
cy.get(this.locators.case_details).click({force:true})
cy.wait(2000);
cy.get(this.locators.email_address).select(1)
cy.wait(2000);
cy.contains('button','Email').click({force:true});
cy.wait(2000);

// Step 1: Select Template dynamically
cy.get(this.locators.template_dropdown).click();
cy.get('.ng-dropdown-panel .ng-option').then(($templates) => {

  const indices = Cypress._.shuffle([...Array($templates.length).keys()]);

  const tryTemplate = (indexList) => {
    if (indexList.length === 0) {
      throw new Error('No template found with any language');
    }

    const [current, ...remaining] = indexList;

    cy.get(this.locators.template_dropdown).click();
    cy.get('.ng-dropdown-panel .ng-option').eq(current).click();

    cy.wait(2000);

    // Step 2: Open language dropdown
    cy.get(this.locators.language_dropdown).click();
    cy.get('.ng-dropdown-panel .ng-option').then(($langs) => {

      if ($langs.length > 0) {
        // Step 3: Select random language
        const randomLang = Cypress._.random(0, $langs.length - 1);
        cy.wrap($langs.eq(randomLang)).click({ force: true });

        cy.wait(2000);

        // Step 4: Click Preview button
        cy.contains('button', 'Preview').click({ force: true });

        cy.wait(2000);

        // Step 5: Verify gmail subject and email content are visible
        cy.get(this.locators.gmail_subject).should('be.visible');
        cy.get(this.locators.email_content).should('be.visible');

        // Step 6: Click Cancel button
        cy.get(this.locators.cancel_button).click({ force: true });

      } else {
        // No languages — try next template
        cy.get('body').click(0, 0);
        tryTemplate(remaining);
      }
    });
  };

  tryTemplate(indices);
});
}

AccountDetails_050(){
cy.wait(2000);
cy.get(this.locators.customer_accountnumber).type("1667")
cy.wait(2000);
cy.contains('button','Search').click({force:true});
cy.wait(2000);
cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span').click({force:true})
cy.wait(2000);
cy.get(this.locators.toggle_button).click({force:true});
cy.wait(2000);
cy.get(this.locators.case_details).click({force:true})
cy.wait(2000);
cy.get(this.locators.email_address).select(1)
cy.wait(2000);
cy.contains('button','Email').click({force:true});
cy.wait(2000);

// Step 1: Select Template dynamically
cy.get(this.locators.template_dropdown).click();
cy.get('.ng-dropdown-panel .ng-option').then(($templates) => {

  const indices = Cypress._.shuffle([...Array($templates.length).keys()]);

  const tryTemplate = (indexList) => {
    if (indexList.length === 0) {
      throw new Error('No template found with any language');
    }

    const [current, ...remaining] = indexList;

    cy.get(this.locators.template_dropdown).click();
    cy.get('.ng-dropdown-panel .ng-option').eq(current).click();

    cy.wait(2000);

    // Step 2: Open language dropdown
    cy.get(this.locators.language_dropdown).click();
    cy.get('.ng-dropdown-panel .ng-option').then(($langs) => {

      if ($langs.length > 0) {
        // Step 3: Select random language
        const randomLang = Cypress._.random(0, $langs.length - 1);
        cy.wrap($langs.eq(randomLang)).click({ force: true });

        cy.wait(2000);

        // Step 4: Click Preview button
        cy.contains('button', 'Preview').click({ force: true });

        cy.wait(2000);

        // Step 5: Verify gmail subject and email content are visible
        cy.get(this.locators.gmail_subject).should('be.visible');
        cy.get(this.locators.email_content).should('be.visible');

        // Step 6: Send the email
        cy.get(this.locators.send_email).click({ force: true });

       cy.contains('Success! Email Sent Successfully').should('be.visible');

      cy.contains('Success!')
  .should('have.css', 'color', 'rgb(32, 200, 32)');
      } else {
        // No languages — try next template
        cy.get('body').click(0, 0);
        tryTemplate(remaining);
      }
    });
  };

  tryTemplate(indices);
});
}

AccountDetails_051(){
cy.wait(2000);
cy.get(this.locators.customer_accountnumber).type("1667")
cy.wait(2000);
cy.contains('button','Search').click({force:true});
cy.wait(2000);
cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span').click({force:true})
cy.wait(2000);
cy.get(this.locators.toggle_button).click({force:true});
cy.wait(2000);
cy.get(this.locators.case_details).click({force:true})
cy.wait(2000);
cy.get(this.locators.email_address).select(1)
cy.wait(2000);
cy.contains('button','Email').click({force:true});
cy.wait(2000);

// Step 1: Select Template dynamically
cy.get(this.locators.template_dropdown).click();
cy.get('.ng-dropdown-panel .ng-option').then(($templates) => {

  const indices = Cypress._.shuffle([...Array($templates.length).keys()]);

  const tryTemplate = (indexList) => {
    if (indexList.length === 0) {
      throw new Error('No template found with any language');
    }

    const [current, ...remaining] = indexList;

    cy.get(this.locators.template_dropdown).click();
    cy.get('.ng-dropdown-panel .ng-option').eq(current).click();

    cy.wait(2000);

    // Step 2: Open language dropdown
    cy.get(this.locators.language_dropdown).click();
    cy.get('.ng-dropdown-panel .ng-option').then(($langs) => {

      if ($langs.length > 0) {
        // Step 3: Select random language
        const randomLang = Cypress._.random(0, $langs.length - 1);
        cy.wrap($langs.eq(randomLang)).click({ force: true });

        cy.wait(2000);

        // Step 4: Click Preview button
        cy.contains('button', 'Preview').click({ force: true });

        cy.wait(2000);

        // Step 5: Verify gmail subject and email content are visible
        cy.get(this.locators.gmail_subject).should('be.visible');
        cy.get(this.locators.email_content).should('be.visible');

        // Step 6: Send the email
        cy.get(this.locators.send_email).click({ force: true });

        cy.wait(2000);

        // Step 7: Verify success message is visible
        cy.contains('Success! Email Sent Successfully')
          .should('be.visible');

        cy.wait(2000);

        // Step 8: Verify Case Details is visible after email sent
        cy.contains('Case Details').scrollIntoView().should('exist');

      } else {
        // No languages — try next template
        cy.get('body').click(0, 0);
        tryTemplate(remaining);
      }
    });
  };

  tryTemplate(indices);
});
}
AccountDetails_052(){
cy.wait(2000);
cy.get(this.locators.customer_accountnumber).type("1667")
cy.wait(2000);
cy.contains('button','Search').click({force:true});
cy.wait(2000);
cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span').click({force:true})
cy.wait(2000);
cy.get(this.locators.toggle_button).click({force:true});
cy.wait(2000);
cy.get(this.locators.case_details).click({force:true})
cy.wait(2000);
cy.get(this.locators.email_address).select(1)
cy.wait(2000);
cy.contains('button','Email').click({force:true});
cy.wait(2000);

// Step 1: Select Template dynamically
cy.get(this.locators.template_dropdown).click();
cy.get('.ng-dropdown-panel .ng-option').then(($templates) => {

  const indices = Cypress._.shuffle([...Array($templates.length).keys()]);

  const tryTemplate = (indexList) => {
    if (indexList.length === 0) {
      throw new Error('No template found with any language');
    }

    const [current, ...remaining] = indexList;

    cy.get(this.locators.template_dropdown).click();
    cy.get('.ng-dropdown-panel .ng-option').eq(current).click();

    cy.wait(2000);

    // Step 2: Open language dropdown
    cy.get(this.locators.language_dropdown).click();
    cy.get('.ng-dropdown-panel .ng-option').then(($langs) => {

      if ($langs.length > 0) {
        // Step 3: Select random language
        const randomLang = Cypress._.random(0, $langs.length - 1);
        cy.wrap($langs.eq(randomLang)).click({ force: true });

        cy.wait(2000);

        // Step 4: Click Preview button
        cy.contains('button', 'Preview').click({ force: true });

        cy.wait(2000);

        // Step 5: Verify gmail subject and email content are visible
        cy.get(this.locators.gmail_subject).should('be.visible');
        cy.get(this.locators.email_content).should('be.visible');

        // Step 6: Send the email
        cy.get(this.locators.send_email).click({ force: true });

        cy.wait(2000);

        // Step 7: Verify success alert is visible and contains correct message
         cy.contains('Success! Email Sent Successfully')
          .should('be.visible');
      } else {
        // No languages — try next template
        cy.get('body').click(0, 0);
        tryTemplate(remaining);
      }
    });
  };

  tryTemplate(indices);
});
}

AccountDetails_053(){
   cy.wait(2000);
cy.get(this.locators.customer_accountnumber).type("1667")
cy.wait(2000);
cy.contains('button','Search').click({force:true});
cy.wait(2000);
cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span').click({force:true})
cy.wait(2000);
cy.get(this.locators.toggle_button).click({force:true});
cy.wait(2000);
cy.get(this.locators.case_details).click({force:true})
cy.wait(2000);
cy.get(this.locators.email_button).click({force:true});
cy.wait(2000);
cy.contains('Warning! Please select Email')
  .should('be.visible');

}

AccountMobileNumber01(){
  // cy.get(this.locators.customer_name).type('a');
  // cy.wait(2000);
  // cy.get(this.locators.submit_button).click({force:true});
  // cy.wait(2000);
  // cy.get(':nth-child(1) > :nth-child(4) > a > [style="text-wrap-mode: nowrap; position: relative;"] > span').click({force:true});
  // cy.wait(2000);
  cy.get(this.locators.mobile_number).type("9845643115");
  cy.wait(2000);
  cy.get(this.locators.submit_button_dashboard).click({force:true});
  cy.contains("Search Results").should('be.visible');
  cy.wait(2000);


}
AccountMobileNumber02(){
  cy.get(this.locators.mobile_number).type("9845643115");
  cy.wait(2000);
  cy.get(this.locators.submit_button_dashboard).click({force:true});
  cy.contains("Search Results").should('be.visible');
  cy.wait(2000);
  cy.get("td[class='link'] a span span")
    .first()
    .click({ force: true });
  cy.wait(2000);
  cy.get('#selectedFullViewColumn').select("One Column");
  cy.contains('98XXXXXX15').scrollIntoView().should('be.visible');
  cy.get(':nth-child(5) > td > [style="text-wrap-mode: nowrap; position: relative;"] > svg-icon').click({force:true});
   cy.contains('9845643115').scrollIntoView().should('be.visible');
}
AccountMobileNumber03(){
   cy.get(this.locators.mobile_number).type("9845643115");
  cy.wait(2000);
  cy.get(this.locators.submit_button_dashboard).click({force:true});
   cy.contains('Customer Name').should('exist');
  cy.contains('Customer ID').should('exist');
  cy.contains('Current Bucket').should('exist');
  cy.contains('Account Number').should('exist');
  cy.contains('EMI Amount').should('exist');
  cy.contains('Month Opening Bucket').should('exist');
  cy.contains('Total Overdue Amount').should('exist');

}
AccountMobileNumber04() {
  cy.get(this.locators.mobile_number).type("6657655653");
  cy.wait(2000);
  cy.get(this.locators.submit_button_dashboard).click({ force: true });
  cy.wait(2000);
  cy.contains("Search Results").should('not.exist');
}

AccountMobileNumber05(){
  cy.get(this.locators.mobile_number).type("6657655653");
  cy.wait(2000);
  cy.get(this.locators.submit_button_dashboard).click({force:true});
  cy.contains("Info! No records were found for searched criteria. Please change the search criteria").should('be.visible');
 

}

AccountMobileNumber06(){
  cy.get(this.locators.credit_card).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.cc_mobile_number_field).type("9960075360");
  cy.wait(2000);
  cy.get(this.locators.submit_button_dashboard).click({force:true});
  cy.contains("Search Results").should('be.visible');
  cy.wait(2000);
}

AccountMobileNumber07(){
  cy.get(this.locators.credit_card).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.cc_mobile_number_field).type("9960075360");
  cy.wait(2000);
  cy.get(this.locators.submit_button_dashboard).click({force:true});
  cy.get(':nth-child(1) > [title="Click to View Cutomer Details"] > [style="text-wrap-mode: nowrap; position: relative;"] > span').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.toggle).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Demographic_details_cc).click({force:true});
  cy.wait(2000);
  cy.contains('99XXXXXX60').scrollIntoView().should('be.visible');
  cy.wait(2000);
  cy.get(':nth-child(5) > .table > tbody > tr > td > [style="text-wrap-mode: nowrap; position: relative;"] > svg-icon').click({force:true});
  cy.wait(2000);
  cy.contains('9960075360').scrollIntoView().should('be.visible');
}

AccountMobileNumber08(){
   cy.get(this.locators.credit_card).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.cc_mobile_number_field).type("9960075360");
  cy.wait(2000);
  cy.get(this.locators.submit_button_dashboard).click({force:true});
  cy.contains('Customer Name').should('exist');
  cy.contains('Customer ID').should('exist');
  cy.contains('Current Bucket').should('exist');
  cy.contains('Account Number').should('exist');
  cy.contains('EMI Amount').should('exist');
  cy.contains('Month Opening Bucket').should('exist');
  cy.contains('Total Overdue Amount').should('exist');
 
}

AccountMobileNumber09(){
  cy.get(this.locators.credit_card).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.cc_mobile_number_field).type("9960075360");
  cy.wait(2000);
  cy.get(this.locators.submit_button_dashboard).click({force:true});
  cy.wait(2000);
  cy.contains("Search Results").should('not.be.visible');
}

AccountMobileNumber010(){
  cy.get(this.locators.credit_card).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.cc_mobile_number_field).type("9960075360");
  cy.wait(2000);
  cy.get(this.locators.submit_button_dashboard).click({force:true});
  cy.contains("Info! No records were found for searched criteria. Please change the search criteria").should('be.visible');
 

}
AccountDetails_054(){
 cy.get(this.locators.Credit_card_button).click({force:true});
 cy.wait(2000);
  cy.get(this.locators.cc_ac_field).type("4726428046987990");
  cy.wait(2000);
  cy.contains('button','Search').click({force:true});
 cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.toggle).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.cc_case_details).click({force:true});
  cy.wait(2000);
  cy.contains('Contact Number').scrollIntoView().should('be.visible');
  cy.get(this.locators.contact_number).should('be.visible');
  cy.wait(2000);
  cy.contains('button','SMS')
    .should('be.visible')
    .and('not.be.disabled');


}

AccountDetails_055(){
  cy.get(this.locators.Credit_card_button).click({force:true});
 cy.wait(2000);
  cy.get(this.locators.cc_ac_field).type("4726428046987990");
  cy.wait(2000);
  cy.contains('button','Search').click({force:true});
 cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)').click({force:true});
  cy.wait(2000);
    cy.get(this.locators.toggle).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.cc_case_details).click({force:true});
  cy.wait(2000);
  cy.contains('Contact Number').scrollIntoView().should('be.visible');
  cy.wait(2000);
  cy.get(this.locators.contact_number).should('be.visible');
  cy.wait(2000);
  cy.get(this.locators.contact_number).select(1);
  cy.wait(2000);
  cy.contains('button','SMS').click({force:true});
  cy.contains('Send Message').should('be.visible');
}

AccountDetails_056(){
  cy.get(this.locators.Credit_card_button).click({force:true});
 cy.wait(2000);
  cy.get(this.locators.cc_ac_field).type("4726428046987990");
  cy.wait(2000);
  cy.contains('button','Search').click({force:true});
 cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.toggle).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.cc_case_details).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.contact_number).select(1);
  cy.wait(2000);
  cy.contains('button','SMS').click({force:true});
  cy.contains('Send Message').should('be.visible');
  cy.contains('Select Template').should('be.visible');
  cy.contains('Select Language').should('be.visible');

}


AccountDetails_057(){
  cy.get(this.locators.Credit_card_button).click({force:true});
 cy.wait(2000);
  cy.get(this.locators.cc_ac_field).type("4726428046987990");
  cy.wait(2000);
  cy.contains('button','Search').click({force:true});
 cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.toggle).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.cc_case_details).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.contact_number).select(1);
  cy.wait(2000);
  cy.contains('button','SMS').click({force:true});
  cy.contains('button','Preview').should('be.visible').and('be.disabled');
}

AccountDetails_058(){
cy.get(this.locators.Credit_card_button).click({force:true});
cy.wait(2000);
cy.get(this.locators.cc_ac_field).type("4726428046987990");
cy.wait(2000);
cy.contains('button','Search').click({force:true});
cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)').click({force:true});
cy.wait(2000);
cy.get(this.locators.toggle).click({force:true});
cy.wait(2000);
cy.get(this.locators.cc_case_details).click({force:true});
cy.wait(2000);
cy.get(this.locators.contact_number).select(1);
cy.wait(2000);
cy.contains('button','SMS').click({force:true});
cy.wait(2000);
// Step 1: Verify Send Message is visible
cy.contains('Send Message').should('be.visible');
cy.wait(2000);
// Verify 'Select Template' placeholder is visible
cy.contains('Select Template').should('be.visible');
cy.wait(2000);
// Verify 'Select Language' placeholder is visible
cy.contains('Select Language').should('be.visible');
cy.wait(2000);
// Step 4: Verify Preview button is disabled without Template and Language selected
cy.get(this.locators.preview_button).should('be.disabled');

}
AccountDetails_059(){

  cy.get(this.locators.Credit_card_button).click({force:true});
 cy.wait(2000);
  cy.get(this.locators.cc_ac_field).type("4726428046987990");
  cy.wait(2000);
  cy.contains('button','Search').click({force:true});
 cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.toggle).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.cc_case_details).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.contact_number).select(1);
  cy.wait(2000);
  cy.contains('button','SMS').click({force:true});
  cy.wait(2000);
  cy.contains('Send Message').should('be.visible');
  cy.contains('button','Cancel').click({force:true});
  cy.contains('Send Message').should('not.exist');
  cy.contains('Contact Number').should('be.visible');

}

AccountDetails_060(){}

AccountDetails_061(){
cy.get(this.locators.Credit_card_button).click({force:true});
cy.wait(2000);
cy.get(this.locators.cc_ac_field).type("4726428046987990");
cy.wait(2000);
cy.contains('button','Search').click({force:true});
cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)').click({force:true});
cy.wait(2000);
cy.get(this.locators.toggle).click({force:true});
cy.wait(2000);
cy.get(this.locators.cc_case_details).click({force:true});
cy.wait(2000);
cy.get(this.locators.contact_number).select(1);
cy.wait(2000);
cy.contains('button','SMS').click({force:true});
cy.wait(2000);

// Step 1: Verify Send Message is visible
cy.contains('Send Message').should('be.visible');

// Step 2: Select Template dynamically
cy.get(this.locators.template_dropdown).click();
cy.get('.ng-dropdown-panel .ng-option').then(($templates) => {

  const indices = Cypress._.shuffle([...Array($templates.length).keys()]);

  const tryTemplate = (indexList) => {
    if (indexList.length === 0) {
      throw new Error('No template found with more than one language');
    }

    const [current, ...remaining] = indexList;

    cy.get(this.locators.template_dropdown).click();
    cy.get('.ng-dropdown-panel .ng-option').eq(current).click();

    cy.wait(2000);

    // Step 3: Open language dropdown
    cy.get(this.locators.language_dropdown).click();
    cy.get('.ng-dropdown-panel .ng-option').then(($langs) => {

      if ($langs.length > 1) {
        // Step 4: Verify language dropdown has more than 1 option
        cy.wrap($langs).should('have.length.greaterThan', 1);

      } else {
        // Not enough languages — try next template
        cy.get('body').click(0, 0);
        tryTemplate(remaining);
      }
    });
  };

  tryTemplate(indices);
});
}
AccountDetails_062(){
cy.get(this.locators.Credit_card_button).click({force:true});
cy.wait(2000);
cy.get(this.locators.cc_ac_field).type("4726428046987990");
cy.wait(2000);
cy.contains('button','Search').click({force:true});
cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)').click({force:true});
cy.wait(2000);
cy.get(this.locators.toggle).click({force:true});
cy.wait(2000);
cy.get(this.locators.cc_case_details).click({force:true});
cy.wait(2000);
cy.get(this.locators.contact_number).select(1);
cy.wait(2000);
cy.contains('button','SMS').click({force:true});
cy.wait(2000);

// Step 1: Select Template dynamically
cy.get(this.locators.template_dropdown).click();
cy.get('.ng-dropdown-panel .ng-option').then(($templates) => {

  const indices = Cypress._.shuffle([...Array($templates.length).keys()]);

  const tryTemplate = (indexList) => {
    if (indexList.length === 0) {
      throw new Error('No template found with any language');
    }

    const [current, ...remaining] = indexList;

    cy.get(this.locators.template_dropdown).click();
    cy.get('.ng-dropdown-panel .ng-option').eq(current).click();

    cy.wait(2000);

    // Step 2: Open language dropdown
    cy.get(this.locators.language_dropdown).click();
    cy.get('.ng-dropdown-panel .ng-option').then(($langs) => {

      if ($langs.length > 0) {
        // Step 3: Select random language
        const randomLang = Cypress._.random(0, $langs.length - 1);
        cy.wrap($langs.eq(randomLang)).click({ force: true });

        cy.wait(2000);

        // Step 4: Verify Preview button is enabled
        cy.get(this.locators.preview_button).should('be.enabled');

      } else {
        // No languages — try next template
        cy.get('body').click(0, 0);
        tryTemplate(remaining);
      }
    });
  };

  tryTemplate(indices);
});
}

AccountDetails_063(){
cy.get(this.locators.Credit_card_button).click({force:true});
cy.wait(2000);
cy.get(this.locators.cc_ac_field).type("4726428046987990");
cy.wait(2000);
cy.contains('button','Search').click({force:true});
cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)').click({force:true});
cy.wait(2000);
cy.get(this.locators.toggle).click({force:true});
cy.wait(2000);
cy.get(this.locators.cc_case_details).click({force:true});
cy.wait(2000);
cy.get(this.locators.contact_number).select(1);
cy.wait(2000);
cy.contains('button','SMS').click({force:true});
cy.wait(2000);

// Step 1: Select Template dynamically
cy.get(this.locators.template_dropdown).click();
cy.get('.ng-dropdown-panel .ng-option').then(($templates) => {

  const indices = Cypress._.shuffle([...Array($templates.length).keys()]);

  const tryTemplate = (indexList) => {
    if (indexList.length === 0) {
      throw new Error('No template found with any language');
    }

    const [current, ...remaining] = indexList;

    cy.get(this.locators.template_dropdown).click();
    cy.get('.ng-dropdown-panel .ng-option').eq(current).click();

    cy.wait(2000);

    // Step 2: Open language dropdown
    cy.get(this.locators.language_dropdown).click();
    cy.get('.ng-dropdown-panel .ng-option').then(($langs) => {

      if ($langs.length > 0) {
        // Step 3: Select random language
        const randomLang = Cypress._.random(0, $langs.length - 1);
        cy.wrap($langs.eq(randomLang)).click({ force: true });

        cy.wait(2000);

        // Step 4: Verify Preview button is enabled and click it
        cy.get(this.locators.preview_button)
          .should('be.enabled')
          .click({ force: true });

        cy.wait(2000);

        // Step 5: Verify Message Preview is visible
        cy.contains('Message Preview').should('be.visible');

      } else {
        // No languages — try next template
        cy.get('body').click(0, 0);
        tryTemplate(remaining);
      }
    });
  };

  tryTemplate(indices);
});
}
AccountDetails_064(){
cy.get(this.locators.Credit_card_button).click({force:true});
cy.wait(2000);
cy.get(this.locators.cc_ac_field).type("4726428046987990");
cy.wait(2000);
cy.contains('button','Search').click({force:true});
cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)').click({force:true});
cy.wait(2000);
cy.get(this.locators.toggle).click({force:true});
cy.wait(2000);
cy.get(this.locators.cc_case_details).click({force:true});
cy.wait(2000);
cy.get(this.locators.contact_number).select(1);
cy.wait(2000);
cy.contains('button','SMS').click({force:true});
cy.wait(2000);
cy.get(this.locators.template_dropdown).click();
cy.get('.ng-dropdown-panel .ng-option').then(($templates) => {

  const indices = Cypress._.shuffle([...Array($templates.length).keys()]);

  const tryTemplate = (indexList) => {
    if (indexList.length === 0) {
      throw new Error('No template found with any language');
    }

    const [current, ...remaining] = indexList;

    cy.get(this.locators.template_dropdown).click();
    cy.get('.ng-dropdown-panel .ng-option').eq(current).click();

    cy.wait(2000);

    // Step 2: Open language dropdown
    cy.get(this.locators.language_dropdown).click();
    cy.get('.ng-dropdown-panel .ng-option').then(($langs) => {

      if ($langs.length > 0) {
        // Step 3: Select random language
        const randomLang = Cypress._.random(0, $langs.length - 1);
        cy.wrap($langs.eq(randomLang)).click({ force: true });

        cy.wait(2000);

        // Step 4: Verify Preview button is enabled and click it
        cy.get(this.locators.preview_button)
          .should('be.enabled')
          .click({ force: true });

        cy.wait(2000);

        // Step 5: Verify Message Preview is visible
        cy.contains('Message Preview').should('be.visible');

        // Step 6: Verify SMS content is visible
        cy.get(this.locators.sms).should('be.visible');

      } else {
        // No languages — try next template
        cy.get('body').click(0, 0);
        tryTemplate(remaining);
      }
    });
  };

  tryTemplate(indices);
});
}
AccountDetails_065(){
cy.get(this.locators.Credit_card_button).click({force:true});
cy.wait(2000);
cy.get(this.locators.cc_ac_field).type("4726428046987990");
cy.wait(2000);
cy.contains('button','Search').click({force:true});
cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)').click({force:true});
cy.wait(2000);
cy.get(this.locators.toggle).click({force:true});
cy.wait(2000);
cy.get(this.locators.cc_case_details).click({force:true});
cy.wait(2000);
cy.get(this.locators.contact_number).select(1);
cy.wait(2000);
cy.contains('button','SMS').click({force:true});
cy.wait(2000);

// Step 1: Select Template dynamically
cy.get(this.locators.template_dropdown).click();
cy.get('.ng-dropdown-panel .ng-option').then(($templates) => {

  const indices = Cypress._.shuffle([...Array($templates.length).keys()]);

  const tryTemplate = (indexList) => {
    if (indexList.length === 0) {
      throw new Error('No template found with any language');
    }

    const [current, ...remaining] = indexList;

    cy.get(this.locators.template_dropdown).click();
    cy.get('.ng-dropdown-panel .ng-option').eq(current).click();

    cy.wait(2000);

    // Step 2: Open language dropdown
    cy.get(this.locators.language_dropdown).click();
    cy.get('.ng-dropdown-panel .ng-option').then(($langs) => {

      if ($langs.length > 0) {
        // Step 3: Select random language
        const randomLang = Cypress._.random(0, $langs.length - 1);
        cy.wrap($langs.eq(randomLang)).click({ force: true });

        cy.wait(2000);

        // Step 4: Verify Preview button is enabled and click it
        cy.get(this.locators.preview_button)
          .should('be.enabled')
          .click({ force: true });

        cy.wait(2000);

        // Step 5: Verify Message Preview is visible
        cy.contains('Message Preview').should('be.visible');

        // Step 6: Click Preview button again to send
        cy.get(this.locators.preview_button).click({ force: true });

      } else {
        // No languages — try next template
        cy.get('body').click(0, 0);
        tryTemplate(remaining);
      }
    });
  };

  tryTemplate(indices);
});
}


AccountDetails_066(){
cy.get(this.locators.Credit_card_button).click({force:true});
cy.wait(2000);
cy.get(this.locators.cc_ac_field).type("4726428046987990");
cy.wait(2000);
cy.contains('button','Search').click({force:true});
cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)').click({force:true});
cy.wait(2000);
cy.get(this.locators.toggle).click({force:true});
cy.wait(2000);
cy.get(this.locators.cc_case_details).click({force:true});
cy.wait(2000);
cy.get(this.locators.contact_number).select(1);
cy.wait(2000);
cy.contains('button','SMS').click({force:true});
cy.wait(2000);

// Step 1: Select Template dynamically
cy.get(this.locators.template_dropdown).click();
cy.get('.ng-dropdown-panel .ng-option').then(($templates) => {

  const indices = Cypress._.shuffle([...Array($templates.length).keys()]);

  const tryTemplate = (indexList) => {
    if (indexList.length === 0) {
      throw new Error('No template found with any language');
    }

    const [current, ...remaining] = indexList;

    cy.get(this.locators.template_dropdown).click();
    cy.get('.ng-dropdown-panel .ng-option').eq(current).click();

    cy.wait(2000);

    // Step 2: Open language dropdown
    cy.get(this.locators.language_dropdown).click();
    cy.get('.ng-dropdown-panel .ng-option').then(($langs) => {

      if ($langs.length > 0) {
        // Step 3: Select random language
        const randomLang = Cypress._.random(0, $langs.length - 1);
        cy.wrap($langs.eq(randomLang)).click({ force: true });

        cy.wait(2000);

        // Step 4: Verify Preview button is enabled and click it
        cy.get(this.locators.preview_button)
          .should('be.enabled')
          .click({ force: true });

        cy.wait(2000);

        // Step 5: Verify Message Preview is visible
        cy.contains('Message Preview').should('be.visible');

        // Step 6: Click Cancel button
        cy.get(this.locators.cancel_button).click({ force: true });

      } else {
        // No languages — try next template
        cy.get('body').click(0, 0);
        tryTemplate(remaining);
      }
    });
  };

  tryTemplate(indices);
});
}

AccountDetails_067(){
cy.get(this.locators.Credit_card_button).click({force:true});
cy.wait(2000);
cy.get(this.locators.cc_ac_field).type("4726428046987990");
cy.wait(2000);
cy.contains('button','Search').click({force:true});
cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)').click({force:true});
cy.wait(2000);
cy.get(this.locators.toggle).click({force:true});
cy.wait(2000);
cy.get(this.locators.cc_case_details).click({force:true});
cy.wait(2000);
cy.get(this.locators.contact_number).select(1);
cy.wait(2000);
cy.contains('button','SMS').click({force:true});
cy.wait(2000);

// Step 1: Select Template dynamically
cy.get(this.locators.template_dropdown).click();
cy.get('.ng-dropdown-panel .ng-option').then(($templates) => {

  const indices = Cypress._.shuffle([...Array($templates.length).keys()]);

  const tryTemplate = (indexList) => {
    if (indexList.length === 0) {
      throw new Error('No template found with any language');
    }

    const [current, ...remaining] = indexList;

    cy.get(this.locators.template_dropdown).click();
    cy.get('.ng-dropdown-panel .ng-option').eq(current).click();

    cy.wait(2000);

    // Step 2: Open language dropdown
    cy.get(this.locators.language_dropdown).click();
    cy.get('.ng-dropdown-panel .ng-option').then(($langs) => {

      if ($langs.length > 0) {
        // Step 3: Select random language
        const randomLang = Cypress._.random(0, $langs.length - 1);
        cy.wrap($langs.eq(randomLang)).click({ force: true });

        cy.wait(2000);

        // Step 4: Verify Preview button is enabled and click it
        cy.get(this.locators.preview_button)
          .should('be.enabled')
          .click({ force: true });

        cy.wait(2000);

        // Step 5: Verify note is visible
        cy.get(this.locators.note)
          .scrollIntoView()
          .should('be.visible');

      } else {
        // No languages — try next template
        cy.get('body').click(0, 0);
        tryTemplate(remaining);
      }
    });
  };

  tryTemplate(indices);
});
}
AccountDetails_068(){
cy.get(this.locators.Credit_card_button).click({force:true});
cy.wait(2000);
cy.get(this.locators.cc_ac_field).type("4726428046987990");
cy.wait(2000);
cy.contains('button','Search').click({force:true});
cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)').click({force:true});
cy.wait(2000);
cy.get(this.locators.toggle).click({force:true});
cy.wait(2000);
cy.get(this.locators.cc_case_details).click({force:true});
cy.wait(2000);
cy.get(this.locators.contact_number).select(1);
cy.wait(2000);
cy.contains('button','SMS').click({force:true});
cy.wait(2000);

// Step 1: Select Template dynamically
cy.get(this.locators.template_dropdown).click();
cy.get('.ng-dropdown-panel .ng-option').then(($templates) => {

  const indices = Cypress._.shuffle([...Array($templates.length).keys()]);

  const tryTemplate = (indexList) => {
    if (indexList.length === 0) {
      throw new Error('No template found with any language');
    }

    const [current, ...remaining] = indexList;

    cy.get(this.locators.template_dropdown).click();
    cy.get('.ng-dropdown-panel .ng-option').eq(current).click();

    cy.wait(2000);

    // Step 2: Open language dropdown
    cy.get(this.locators.language_dropdown).click();
    cy.get('.ng-dropdown-panel .ng-option').then(($langs) => {

      if ($langs.length > 0) {
        // Step 3: Select random language
        const randomLang = Cypress._.random(0, $langs.length - 1);
        cy.wrap($langs.eq(randomLang)).click({ force: true });

        cy.wait(2000);

        // Step 4: Verify Preview button is enabled and click it
        cy.get(this.locators.preview_button)
          .should('be.enabled')
          .click({ force: true });

        cy.wait(2000);

        // Step 5: Verify Message Preview is visible
        cy.contains('Message Preview').should('be.visible');

        // Step 6: Click Preview button again to send
        cy.get(this.locators.preview_button).click({ force: true });

        cy.wait(2000);

        // Step 7: Verify Success message
        cy.contains('Success!').should('be.visible');

      } else {
        // No languages — try next template
        cy.get('body').click(0, 0);
        tryTemplate(remaining);
      }
    });
  };

  tryTemplate(indices);
});
}

AccountDetails_069(){
cy.get(this.locators.Credit_card_button).click({force:true});
cy.wait(2000);
cy.get(this.locators.cc_ac_field).type("4726428046987990");
cy.wait(2000);
cy.contains('button','Search').click({force:true});
cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)').click({force:true});
cy.wait(2000);
cy.get(this.locators.toggle).click({force:true});
cy.wait(2000);
cy.get(this.locators.cc_case_details).click({force:true});
cy.wait(2000);
cy.get(this.locators.contact_number).select(1);
cy.wait(2000);
cy.contains('button','SMS').click({force:true});
cy.wait(2000);

// Step 1: Select Template dynamically
cy.get(this.locators.template_dropdown).click();
cy.get('.ng-dropdown-panel .ng-option').then(($templates) => {

  const indices = Cypress._.shuffle([...Array($templates.length).keys()]);

  const tryTemplate = (indexList) => {
    if (indexList.length === 0) {
      throw new Error('No template found with any language');
    }

    const [current, ...remaining] = indexList;

    cy.get(this.locators.template_dropdown).click();
    cy.get('.ng-dropdown-panel .ng-option').eq(current).click();

    cy.wait(2000);

    // Step 2: Open language dropdown
    cy.get(this.locators.language_dropdown).click();
    cy.get('.ng-dropdown-panel .ng-option').then(($langs) => {

      if ($langs.length > 0) {
        // Step 3: Select random language
        const randomLang = Cypress._.random(0, $langs.length - 1);
        cy.wrap($langs.eq(randomLang)).click({ force: true });

        cy.wait(2000);

        // Step 4: Verify Preview button is enabled and click it
        cy.get(this.locators.preview_button)
          .should('be.enabled')
          .click({ force: true });

        cy.wait(2000);

        // Step 5: Verify Message Preview is visible
        cy.contains('Message Preview').should('be.visible');

        // Step 6: Click Preview button again to send
        cy.get(this.locators.preview_button).click({ force: true });

        cy.wait(2000);

        // Step 7: Verify Success message
        cy.contains('Success!').should('be.visible');

        // Step 8: Verify Account Details and Case Details are visible
        cy.contains('Account Details')
          .scrollIntoView()
          .should('be.visible');

        cy.contains('Case Details')
          .scrollIntoView()
          .should('be.visible');

      } else {
        // No languages — try next template
        cy.get('body').click(0, 0);
        tryTemplate(remaining);
      }
    });
  };

  tryTemplate(indices);
});
}

AccountDetails_070(){

  cy.get(this.locators.Credit_card_button).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.cc_ac_field).type("4726428046987990");
  cy.wait(2000);
  cy.contains('button','Search').click({force:true});
  cy.wait(2000);
  cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.toggle_button_cc).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.case_details_cc).click({force:true});
  cy.wait(2000);
  cy.contains('Email Address')
  .scrollIntoView({force:true})
  .should('exist');
  cy.get(this.locators.email_address).should('be.visible');

  cy.contains('button','Email')
  .should('be.visible')
  .and('not.be.disabled');
}

AccountDetails_071(){
  cy.get(this.locators.Credit_card_button).click({force:true});
 cy.wait(2000);
  cy.get(this.locators.cc_ac_field).type("4726428046987990");

  cy.contains('button','Search').click({force:true});

 cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)').click({force:true});

  cy.wait(2000);

  cy.get(this.locators.toggle_button_cc).click({force:true});

  cy.get(this.locators.case_details_cc).click({force:true});

  cy.get(this.locators.email_address).select(1);

  cy.contains('button','Email').click({force:true});

  cy.contains('Send Email')
  .should('be.visible');
}

AccountDetails_072(){
  cy.get(this.locators.Credit_card_button).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.cc_ac_field).type("4726428046987990");
  cy.wait(2000);
  cy.contains('button','Search').click({force:true});
  cy.wait(2000);
 cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.toggle_button_cc).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.case_details_cc).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.email_address).select(1);
  cy.wait(2000);
  cy.contains('button','Email').click({force:true});
  cy.wait(2000);
  cy.contains('Send Email').should('be.visible');
  cy.wait(2000);
  cy.contains('Select Template')
  .should('be.visible');
  cy.wait(2000);
  cy.contains('Select Language')
  .should('be.visible');

}

AccountDetails_073(){
  cy.get(this.locators.Credit_card_button).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.cc_ac_field).type("4726428046987990");
  cy.wait(2000);
  cy.contains('button','Search').click({force:true});
  cy.wait(2000);
  cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.toggle_button_cc).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.case_details_cc).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.email_address).select(1);
  cy.wait(2000);
  cy.contains('button','Email').click({force:true});
  cy.wait(2000);
  cy.contains('Send Email').should('be.visible');
  cy.wait(2000);
  cy.contains('button','Preview')
  .should('be.disabled');

}

AccountDetails_074(){
  cy.get(this.locators.Credit_card_button).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.cc_ac_field).type("4726428046987990");
  cy.wait(2000);
  cy.contains('button','Search').click({force:true});
  cy.wait(2000);
  cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.toggle_button_cc).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.case_details_cc).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.email_address).select(1);
  cy.wait(2000);
  cy.contains('button','Email').click({force:true});
  cy.wait(2000);
  cy.contains('Send Email').should('be.visible');
  cy.wait(2000);
  cy.contains('button','Preview')
  .click({force:true});
  cy.wait(2000);
  cy.contains('Select Template').should('be.visible');
  cy.contains('Select Language').should('be.visible');

}

AccountDetails_075(){
  cy.get(this.locators.Credit_card_button).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.cc_ac_field).type("4726428046987990");
  cy.wait(2000);
  cy.contains('button','Search').click({force:true});
  cy.wait(2000);
  cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.toggle_button_cc).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.case_details_cc).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.email_address).select(1);
  cy.wait(2000);
  cy.contains('button','Email').click({force:true});
  cy.wait(2000);
  cy.contains('Send Email').should('be.visible');
  cy.wait(2000);
  cy.contains('button','Cancel')
  .click({force:true});
  cy.wait(2000);
  cy.contains('Send Email')
  .should('not.exist');
  cy.wait(2000);
  cy.contains('Case Details')
  .should('exist');

}
AccountDetails_076() {

  cy.get(this.locators.Credit_card_button).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.cc_ac_field)
    .clear()
    .type("4726428046987990");

  cy.contains('button', 'Search')
    .click({ force: true });

  cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)')
    .click({ force: true });

  cy.wait(2000);

  cy.get(this.locators.toggle_button_cc)
    .click({ force: true });

  cy.wait(2000);

  cy.get(this.locators.case_details_cc)
    .click({ force: true });

  cy.wait(2000);

  cy.get(this.locators.email_address)
    .scrollIntoView()
    .select(1, { force: true });

  cy.wait(2000);

  cy.contains('button', 'Email')
    .click({ force: true });

  cy.wait(2000);

  cy.contains('Send Email')
    .should('be.visible');

  // Open Template Dropdown
  cy.get(this.locators.template_dropdown)
    .scrollIntoView()
    .click({ force: true });

  // Select Random Template
  cy.get('.ng-dropdown-panel .ng-option')
    .should('have.length.greaterThan', 0)
    .then(($templates) => {

      const randomIndex = Cypress._.random(0, $templates.length - 1);

      cy.get('.ng-dropdown-panel .ng-option')
        .eq(randomIndex)
        .click({ force: true });

    });

  cy.wait(2000);

  // Verify dropdown closed after selection
  cy.get('.ng-dropdown-panel')
    .should('not.exist');

}
AccountDetails_077() {

  cy.get(this.locators.Credit_card_button).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.cc_ac_field)
    .clear()
    .type("4726428046987990");

  cy.contains('button', 'Search').click({ force: true });

  cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)')
    .click({ force: true });

  cy.wait(2000);

  cy.get(this.locators.toggle_button_cc).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.case_details_cc).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.email_address)
    .select(1, { force: true });

  cy.wait(2000);

  cy.contains('button', 'Email').click({ force: true });
  cy.wait(2000);

  // Open Template Dropdown
  cy.get(this.locators.template_dropdown)
    .click({ force: true });

  // Select Random Template
  cy.get('.ng-dropdown-panel .ng-option')
    .should('have.length.greaterThan', 0)
    .then(($templates) => {

      const randomTemplate =
        Cypress._.random(0, $templates.length - 1);

      cy.get('.ng-dropdown-panel .ng-option')
        .eq(randomTemplate)
        .click({ force: true });

    });

  cy.wait(2000);

  // Verify dropdown closed after selection
  cy.get('.ng-dropdown-panel')
    .should('not.exist');
}


AccountDetails_078() {

  cy.get(this.locators.Credit_card_button).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.cc_ac_field).type("4726428046987990");
  cy.wait(2000);

  cy.contains('button', 'Search').click({ force: true });
  cy.wait(2000);

  cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)')
    .click({ force: true });

  cy.wait(2000);

  cy.get(this.locators.toggle_button_cc).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.case_details_cc).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.email_address).select(1);
  cy.wait(2000);

  cy.contains('button', 'Email').click({ force: true });
  cy.wait(2000);

  // Dynamic Template Selection
  cy.get(this.locators.template_dropdown).click({ force: true });

  cy.get('.ng-dropdown-panel .ng-option')
    .should('have.length.greaterThan', 0)
    .then(($templates) => {

      const randomTemplate = Cypress._.random(0, $templates.length - 1);

      cy.wrap($templates.eq(randomTemplate))
        .click({ force: true });

    });

  cy.wait(2000);

  // Dynamic Language Verification
  cy.get(this.locators.language_dropdown).click({ force: true });

  cy.get('.ng-dropdown-panel .ng-option')
    .should('have.length.greaterThan', 1);

}



AccountDetails_079() {

  cy.get(this.locators.Credit_card_button).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.cc_ac_field).type("4726428046987990");
  cy.wait(2000);

  cy.contains('button', 'Search').click({ force: true });
  cy.wait(2000);

  cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)')
    .click({ force: true });

  cy.wait(2000);

  cy.get(this.locators.toggle_button_cc).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.case_details_cc).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.email_address).select(1);
  cy.wait(2000);

  cy.contains('button', 'Email').click({ force: true });
  cy.wait(2000);

  // Dynamic Template Selection
  cy.get(this.locators.template_dropdown).click({ force: true });

  cy.get('.ng-dropdown-panel .ng-option')
    .should('have.length.greaterThan', 0)
    .then(($templates) => {

      const randomTemplate = Cypress._.random(0, $templates.length - 1);

      cy.wrap($templates.eq(randomTemplate))
        .click({ force: true });

    });

  cy.wait(2000);

  // Dynamic Language Selection
  cy.get(this.locators.language_dropdown).click({ force: true });

  cy.get('.ng-dropdown-panel .ng-option')
    .should('have.length.greaterThan', 0)
    .then(($langs) => {

      const randomLang = Cypress._.random(0, $langs.length - 1);

      cy.wrap($langs.eq(randomLang))
        .click({ force: true });

    });

}



AccountDetails_080() {

  cy.get(this.locators.Credit_card_button).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.cc_ac_field).type("4726428046987990");
  cy.wait(2000);

  cy.contains('button', 'Search').click({ force: true });
  cy.wait(2000);

  cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)')
    .click({ force: true });

  cy.wait(2000);

  cy.get(this.locators.toggle_button_cc).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.case_details_cc).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.email_address).select(1);
  cy.wait(2000);

  cy.contains('button', 'Email').click({ force: true });
  cy.wait(2000);

  cy.contains('button', 'Preview')
    .should('be.disabled');

  // Dynamic Template Selection
  cy.get(this.locators.template_dropdown).click({ force: true });

  cy.get('.ng-dropdown-panel .ng-option')
    .should('have.length.greaterThan', 0)
    .then(($templates) => {

      const randomTemplate = Cypress._.random(0, $templates.length - 1);

      cy.wrap($templates.eq(randomTemplate))
        .click({ force: true });

    });

  cy.wait(2000);

  // Dynamic Language Selection
  cy.get(this.locators.language_dropdown).click({ force: true });

  cy.get('.ng-dropdown-panel .ng-option')
    .should('have.length.greaterThan', 0)
    .then(($langs) => {

      const randomLang = Cypress._.random(0, $langs.length - 1);

      cy.wrap($langs.eq(randomLang))
        .click({ force: true });

    });

  cy.wait(2000);

  cy.contains('button', 'Preview')
    .should('not.be.disabled');

}



AccountDetails_081() {

  cy.get(this.locators.Credit_card_button).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.cc_ac_field).type("4726428046987990");
  cy.wait(2000);

  cy.contains('button', 'Search').click({ force: true });
  cy.wait(2000);

  cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)')
    .click({ force: true });

  cy.wait(2000);

  cy.get(this.locators.toggle_button_cc).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.case_details_cc).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.email_address).select(1);
  cy.wait(2000);

  cy.contains('button', 'Email').click({ force: true });

  // Dynamic Template Selection
  cy.get(this.locators.template_dropdown).click({ force: true });

  cy.get('.ng-dropdown-panel .ng-option')
    .should('have.length.greaterThan', 0)
    .then(($templates) => {

      const randomTemplate = Cypress._.random(0, $templates.length - 1);

      cy.wrap($templates.eq(randomTemplate))
        .click({ force: true });

    });

  cy.wait(2000);

  // Dynamic Language Selection
  cy.get(this.locators.language_dropdown).click({ force: true });

  cy.get('.ng-dropdown-panel .ng-option')
    .should('have.length.greaterThan', 0)
    .then(($langs) => {

      const randomLang = Cypress._.random(0, $langs.length - 1);

      cy.wrap($langs.eq(randomLang))
        .click({ force: true });

    });

  cy.contains('button', 'Preview').click({ force: true });

  cy.get(this.locators.gmail_subject)
    .should('be.visible');

  cy.get(this.locators.email_content)
    .should('be.visible');

}
AccountDetails_082() {

  cy.get(this.locators.Credit_card_button).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.cc_ac_field).type("4726428046987990");
  cy.wait(2000);

  cy.contains('button', 'Search').click({ force: true });
  cy.wait(2000);

  cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)')
    .click({ force: true });

  cy.wait(2000);

  cy.get(this.locators.toggle_button_cc).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.case_details_cc).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.email_address).select(1);
  cy.wait(2000);

  cy.contains('button', 'Email').click({ force: true });

  // Dynamic Template Selection
  cy.get(this.locators.template_dropdown).click({ force: true });

  cy.get('.ng-dropdown-panel .ng-option')
    .should('have.length.greaterThan', 0)
    .then(($templates) => {

      const randomTemplate = Cypress._.random(0, $templates.length - 1);

      cy.wrap($templates.eq(randomTemplate))
        .click({ force: true });

    });

  cy.wait(2000);

  // Dynamic Language Selection
  cy.get(this.locators.language_dropdown).click({ force: true });

  cy.get('.ng-dropdown-panel .ng-option')
    .should('have.length.greaterThan', 0)
    .then(($langs) => {

      const randomLang = Cypress._.random(0, $langs.length - 1);

      cy.wrap($langs.eq(randomLang))
        .click({ force: true });

    });

  cy.contains('button', 'Preview').click({ force: true });

  cy.get(this.locators.gmail_subject)
    .should('be.visible');

  cy.get(this.locators.email_content)
    .should('be.visible');

}



AccountDetails_083() {

  cy.get(this.locators.Credit_card_button).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.cc_ac_field).type("4726428046987990");
  cy.wait(2000);

  cy.contains('button', 'Search').click({ force: true });
  cy.wait(2000);

  cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)')
    .click({ force: true });

  cy.wait(2000);

  cy.get(this.locators.toggle_button_cc).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.case_details_cc).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.email_address).select(1);
  cy.wait(2000);

  cy.contains('button', 'Email').click({ force: true });

  // Dynamic Template Selection
  cy.get(this.locators.template_dropdown).click({ force: true });

  cy.get('.ng-dropdown-panel .ng-option')
    .should('have.length.greaterThan', 0)
    .then(($templates) => {

      const randomTemplate = Cypress._.random(0, $templates.length - 1);

      cy.wrap($templates.eq(randomTemplate))
        .click({ force: true });

    });

  cy.wait(2000);

  // Dynamic Language Selection
  cy.get(this.locators.language_dropdown).click({ force: true });

  cy.get('.ng-dropdown-panel .ng-option')
    .should('have.length.greaterThan', 0)
    .then(($langs) => {

      const randomLang = Cypress._.random(0, $langs.length - 1);

      cy.wrap($langs.eq(randomLang))
        .click({ force: true });

    });

  cy.contains('button', 'Preview').click({ force: true });

  cy.get(this.locators.gmail_subject)
    .should('be.visible');

  cy.get(this.locators.email_content)
    .should('be.visible');

  cy.get(this.locators.send_email)
    .click({ force: true });

  cy.contains('Success! Email Sent Successfully')
    .should('be.visible');

}



AccountDetails_084() {

  cy.get(this.locators.Credit_card_button).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.cc_ac_field).type("4726428046987990");
  cy.wait(2000);

  cy.contains('button', 'Search').click({ force: true });
  cy.wait(2000);

  cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)')
    .click({ force: true });

  cy.wait(2000);

  cy.get(this.locators.toggle_button_cc).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.case_details_cc).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.email_address).select(1);
  cy.wait(2000);

  cy.contains('button', 'Email').click({ force: true });

  // Dynamic Template Selection
  cy.get(this.locators.template_dropdown).click({ force: true });

  cy.get('.ng-dropdown-panel .ng-option')
    .should('have.length.greaterThan', 0)
    .then(($templates) => {

      const randomTemplate = Cypress._.random(0, $templates.length - 1);

      cy.wrap($templates.eq(randomTemplate))
        .click({ force: true });

    });

  cy.wait(2000);

  // Dynamic Language Selection
  cy.get(this.locators.language_dropdown).click({ force: true });

  cy.get('.ng-dropdown-panel .ng-option')
    .should('have.length.greaterThan', 0)
    .then(($langs) => {

      const randomLang = Cypress._.random(0, $langs.length - 1);

      cy.wrap($langs.eq(randomLang))
        .click({ force: true });

    });

  cy.contains('button', 'Preview').click({ force: true });

  cy.get(this.locators.gmail_subject)
    .should('be.visible');

  cy.get(this.locators.email_content)
    .should('be.visible');

  cy.get(this.locators.cancel_button)
    .click({ force: true });

}



AccountDetails_085() {

  cy.get(this.locators.Credit_card_button).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.cc_ac_field).type("4726428046987990");
  cy.wait(2000);

  cy.contains('button', 'Search').click({ force: true });
  cy.wait(2000);

  cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)')
    .click({ force: true });

  cy.wait(2000);

  cy.get(this.locators.toggle_button_cc).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.case_details_cc).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.email_address).select(1);
  cy.wait(2000);

  cy.contains('button', 'Email').click({ force: true });

  // Dynamic Template Selection
  cy.get(this.locators.template_dropdown).click({ force: true });

  cy.get('.ng-dropdown-panel .ng-option')
    .should('have.length.greaterThan', 0)
    .then(($templates) => {

      const randomTemplate = Cypress._.random(0, $templates.length - 1);

      cy.wrap($templates.eq(randomTemplate))
        .click({ force: true });

    });

  cy.wait(2000);

  // Dynamic Language Selection
  cy.get(this.locators.language_dropdown).click({ force: true });

  cy.get('.ng-dropdown-panel .ng-option')
    .should('have.length.greaterThan', 0)
    .then(($langs) => {

      const randomLang = Cypress._.random(0, $langs.length - 1);

      cy.wrap($langs.eq(randomLang))
        .click({ force: true });

    });

  cy.contains('button', 'Preview').click({ force: true });

  cy.get(this.locators.gmail_subject)
    .should('be.visible');

  cy.get(this.locators.email_content)
    .should('be.visible');

  cy.get(this.locators.send_email)
    .click({ force: true });
cy.contains('Success! Email Sent Successfully')
  .should('be.visible')
  .invoke('css', 'background-color')
  .should('match', /rgb|rgba/);  


}



AccountDetails_086() {

  cy.get(this.locators.Credit_card_button).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.cc_ac_field).type("4726428046987990");
  cy.wait(2000);

  cy.contains('button', 'Search').click({ force: true });
  cy.wait(2000);

  cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)')
    .click({ force: true });

  cy.wait(2000);

  cy.get(this.locators.toggle_button_cc).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.case_details_cc).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.email_address).select(1);
  cy.wait(2000);

  cy.contains('button', 'Email').click({ force: true });

  // Dynamic Template Selection
  cy.get(this.locators.template_dropdown).click({ force: true });

  cy.get('.ng-dropdown-panel .ng-option')
    .should('have.length.greaterThan', 0)
    .then(($templates) => {

      const randomTemplate = Cypress._.random(0, $templates.length - 1);

      cy.wrap($templates.eq(randomTemplate))
        .click({ force: true });

    });

  cy.wait(2000);

  // Dynamic Language Selection
  cy.get(this.locators.language_dropdown).click({ force: true });

  cy.get('.ng-dropdown-panel .ng-option')
    .should('have.length.greaterThan', 0)
    .then(($langs) => {

      const randomLang = Cypress._.random(0, $langs.length - 1);

      cy.wrap($langs.eq(randomLang))
        .click({ force: true });

    });

  cy.contains('button', 'Preview').click({ force: true });

  cy.get(this.locators.gmail_subject)
    .should('be.visible');

  cy.get(this.locators.email_content)
    .should('be.visible');

  cy.get(this.locators.send_email)
    .click({ force: true });

  cy.contains('Success! Email Sent Successfully')
    .should('be.visible');

  cy.wait(2000);

  cy.contains('Case Details').scrollIntoView();
   

}



AccountDetails_087() {

  cy.get(this.locators.Credit_card_button).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.cc_ac_field).type("4726428046987990");
  cy.wait(2000);

  cy.contains('button', 'Search').click({ force: true });
  cy.wait(2000);

  cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)')
    .click({ force: true });

  cy.wait(2000);

  cy.get(this.locators.toggle_button_cc).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.case_details_cc).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.email_address).select(1);
  cy.wait(2000);

  cy.contains('button', 'Email').click({ force: true });

  // Dynamic Template Selection
  cy.get(this.locators.template_dropdown).click({ force: true });

  cy.get('.ng-dropdown-panel .ng-option')
    .should('have.length.greaterThan', 0)
    .then(($templates) => {

      const randomTemplate = Cypress._.random(0, $templates.length - 1);

      cy.wrap($templates.eq(randomTemplate))
        .click({ force: true });

    });

  cy.wait(2000);

  // Dynamic Language Selection
  cy.get(this.locators.language_dropdown).click({ force: true });

  cy.get('.ng-dropdown-panel .ng-option')
    .should('have.length.greaterThan', 0)
    .then(($langs) => {

      const randomLang = Cypress._.random(0, $langs.length - 1);

      cy.wrap($langs.eq(randomLang))
        .click({ force: true });

    });

  cy.contains('button', 'Preview').click({ force: true });

  cy.get(this.locators.gmail_subject)
    .should('be.visible');

  cy.get(this.locators.email_content)
    .should('be.visible');

  cy.get(this.locators.send_email)
    .click({ force: true });
cy.contains('Success! Email Sent Successfully')
  .should('be.visible')
  .invoke('css', 'background-color')
  .should('match', /rgb|rgba/);  

}

AccountDetails_088(){
  cy.get(this.locators.Credit_card_button).click({force:true});
 cy.wait(2000);
cy.get(this.locators.cc_ac_field).type("4726428046987990")
cy.wait(2000);
cy.contains('button','Search').click({force:true});
cy.wait(2000);
cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)').click({force:true});
cy.wait(2000);
 cy.get(this.locators.toggle_button_cc).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.case_details_cc).click({force:true});
  cy.wait(2000);
cy.get(this.locators.email_button).click({force:true});
cy.wait(2000);
cy.contains('Warning! Please select Email')
  .should('be.visible');

}
}
export default AccountDetailsPage;
