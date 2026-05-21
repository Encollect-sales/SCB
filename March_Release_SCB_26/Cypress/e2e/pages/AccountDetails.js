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
  cy.get(this.locators.Dailer).click({force:true});
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

  cy.get(this.locators.Dailer).click({force:true});
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

cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span').click({force:true});

  cy.get(this.locators.toggle_button).click({force:true});

  cy.get(this.locators.Dailer)
    .first()
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

AccountDetails_04(){

  cy.get(this.locators.customer_accountnumber).type("1667");
  cy.wait(2000);
  cy.contains('button','Search').click({force:true});
  cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.toggle_button).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Dailer)
    .first()
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
  cy.get(this.locators.Dailer)
    .first()
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
  cy.get(this.locators.Dailer)
    .first()
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
  cy.get(this.locators.Dailer)
    .first()
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
  cy.get(this.locators.Dailer)
    .first()
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
  cy.get(this.locators.Dailer).click({force:true});
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
  cy.get(this.locators.Dailer).click({force:true});
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

  cy.get(this.locators.Dailer)
    .first()
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
  cy.get(this.locators.Dailer)
    .first()
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
  cy.get(this.locators.Dailer)
    .first()
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
  cy.get(this.locators.Dailer)
    .first()
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
  cy.get(this.locators.Dailer)
    .first()
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
  cy.get(this.locators.Dailer)
    .first()
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

AccountDetails_023(){

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
  cy.get(this.locators.template_dropdown)
    .should('contain','Select Template');
  cy.get(this.locators.language_dropdown)
    .should('contain','Select Language');
  cy.get(this.locators.preview_button).click({force:true});
  cy.get(this.locators.preview_button).should('be.disabled');

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
AccountDetails_025(){}
AccountDetails_026(){

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
  cy.get(this.locators.template_dropdown)
  .type('dsjfdkgfdf');
  cy.contains('.ng-option-label', 'dsjfdkgfdf')
  .should('be.visible')
  .click();
  cy.get(this.locators.language_dropdown).click();
  cy.get('.ng-option-label')
  .should('have.length.greaterThan', 1);

}
AccountDetails_027(){
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
  cy.get(this.locators.template_dropdown).type('dsjfdkgfdf');   
  cy.contains('.ng-option-label', 'dsjfdkgfdf').click();
  cy.get(this.locators.language_dropdown).click();
  cy.get('.ng-option-label').contains('English').click();
  cy.get(this.locators.preview_button).should('be.enabled');
  
}
AccountDetails_028(){

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
   cy.get(this.locators.template_dropdown).type('dsjfdkgfdf');   
  cy.contains('.ng-option-label', 'dsjfdkgfdf').click();
  cy.get(this.locators.language_dropdown).click();
  cy.get('.ng-option-label').contains('English').click();
  cy.get(this.locators.preview_button).should('be.enabled').click({force:true});
  cy.wait(2000);
  cy.contains('Message Preview').should('be.visible');
 



}

AccountDetails_029(){

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
   cy.get(this.locators.template_dropdown).type('dsjfdkgfdf');   
  cy.contains('.ng-option-label', 'dsjfdkgfdf').click();
  cy.get(this.locators.language_dropdown).click();
  cy.get('.ng-option-label').contains('English').click();
  cy.get(this.locators.preview_button).should('be.enabled').click({force:true});
  cy.wait(2000);
  cy.contains('Message Preview').should('be.visible');
  cy.get(this.locators.sms).should('be.visible');

}

AccountDetails_030(){

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
   cy.get(this.locators.template_dropdown).type('dsjfdkgfdf');   
  cy.contains('.ng-option-label', 'dsjfdkgfdf').click();
  cy.get(this.locators.language_dropdown).click();
  cy.get('.ng-option-label').contains('English').click();
  cy.get(this.locators.preview_button).should('be.enabled').click({force:true});
  cy.wait(2000);
  cy.contains('Message Preview').should('be.visible');
  cy.get(this.locators.preview_button).click({force:true});
 



}


AccountDetails_031(){

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
   cy.get(this.locators.template_dropdown).type('dsjfdkgfdf');   
  cy.contains('.ng-option-label', 'dsjfdkgfdf').click();
  cy.get(this.locators.language_dropdown).click();
  cy.get('.ng-option-label').contains('English').click();
  cy.get(this.locators.preview_button).should('be.enabled').click({force:true});
  cy.wait(2000);
  cy.contains('Message Preview').should('be.visible');
  cy.get(this.locators.cancel_button).click({force:true});

}
AccountDetails_032(){
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
  cy.get(this.locators.template_dropdown).type('dsjfdkgfdf');   
  cy.contains('.ng-option-label', 'dsjfdkgfdf').click();
  cy.get(this.locators.language_dropdown).click();
  cy.get('.ng-option-label').contains('English').click();
  cy.get(this.locators.preview_button).should('be.enabled').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.note).scrollIntoView().should('be.visible'); 




}
AccountDetails_033(){
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
  cy.get(this.locators.template_dropdown).type('dsjfdkgfdf');   
  cy.contains('.ng-option-label', 'dsjfdkgfdf').click();
  cy.get(this.locators.language_dropdown).click();
  cy.get('.ng-option-label').contains('English').click();
  cy.get(this.locators.preview_button).should('be.enabled').click({force:true});
  cy.wait(2000);
  cy.contains('Message Preview').should('be.visible');
  cy.get(this.locators.preview_button).click({force:true});
  cy.contains('Success!').should('be.visible');    

}
AccountDetails_034(){
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
  cy.get(this.locators.template_dropdown).type('dsjfdkgfdf');   
  cy.contains('.ng-option-label', 'dsjfdkgfdf').click();
  cy.get(this.locators.language_dropdown).click();
  cy.get('.ng-option-label').contains('English').click();
  cy.get(this.locators.preview_button).should('be.enabled').click({force:true});
  cy.wait(2000);
  cy.contains('Message Preview').should('be.visible');
  cy.get(this.locators.preview_button).click({force:true});
  cy.contains('Success!').should('be.visible');
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

  cy.contains('button','Search').click({force:true});

  cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
  .click({force:true});

  cy.get(this.locators.toggle_button).click({force:true});

  cy.get(this.locators.case_details).click({force:true});

  cy.get(this.locators.email_address).select(1);

  cy.contains('button','Email').click({force:true});

  cy.contains('Send Email').should('be.visible');

  cy.contains('Select Template')
  .should('be.visible');

  cy.contains('Select Language')
  .should('be.visible');

}
AccountDetails_038(){

  cy.wait(2000);
  cy.get(this.locators.customer_accountnumber).type("1667");

  cy.contains('button','Search').click({force:true});

  cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
  .click({force:true});

  cy.get(this.locators.toggle_button).click({force:true});

  cy.get(this.locators.case_details).click({force:true});

  cy.get(this.locators.email_address).select(1);

  cy.contains('button','Email').click({force:true});

  cy.contains('Send Email').should('be.visible');

  cy.contains('button','Preview')
  .should('be.disabled');

}
AccountDetails_039(){

  cy.wait(2000);
  cy.get(this.locators.customer_accountnumber).type("1667");

  cy.contains('button','Search').click({force:true});

  cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
  .click({force:true});

  cy.get(this.locators.toggle_button).click({force:true});

  cy.get(this.locators.case_details).click({force:true});

  cy.get(this.locators.email_address).select(1);

  cy.contains('button','Email').click({force:true});

  cy.contains('Send Email').should('be.visible');

  cy.contains('button','Preview')
  .click({force:true});

  cy.contains('Select Template').should('be.visible');
  cy.contains('Select Language').should('be.visible');

}
AccountDetails_040(){

  cy.wait(2000);
  cy.get(this.locators.customer_accountnumber).type("1667");

  cy.contains('button','Search').click({force:true});

  cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
  .click({force:true});

  cy.get(this.locators.toggle_button).click({force:true});

  cy.get(this.locators.case_details).click({force:true});

  cy.get(this.locators.email_address).select(1);

  cy.contains('button','Email').click({force:true});

  cy.contains('Send Email').should('be.visible');

  cy.contains('button','Cancel')
  .click({force:true});

  cy.contains('Send Email')
  .should('not.exist');

  cy.contains('Case Details')
  .should('exist');

}
AccountDetails_041(){

cy.wait(2000)
cy.get(this.locators.customer_accountnumber).type("1667")
cy.contains('button','Search').click({force:true})
cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
.click({force:true})
cy.get(this.locators.toggle_button).click({force:true})
cy.wait(2000);
cy.get(this.locators.case_details).click({force:true})
cy.wait(2000);
cy.get(this.locators.email_address).select(1)
cy.wait(2000);
cy.contains('button','Email').click({force:true})
cy.wait(2000);
cy.contains('Send Email').should('be.visible')
cy.wait(2000);
cy.get(this.locators.template_dropdown).type("template");
cy.get('.ng-dropdown-panel-items').should('be.visible')

}
AccountDetails_042(){
cy.wait(2000)
cy.get(this.locators.customer_accountnumber).type("1667")
cy.contains('button','Search').click({force:true});
cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
.click({force:true});
cy.get(this.locators.toggle_button).click({force:true});
cy.wait(2000);
cy.get(this.locators.case_details).click({force:true});
cy.wait(2000);
cy.get(this.locators.email_address).select(1);
cy.wait(2000);
cy.contains('button','Email').click({force:true});
cy.wait(2000);
cy.get(this.locators.template_dropdown).type("new");
cy.wait(2000);
cy.get('.ng-dropdown-panel-items')
.should('not.contain','Disabled');

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
cy.get(this.locators.template_dropdown).type("new");
cy.wait(2000);
cy.get('.ng-option').first().click({force:true})
cy.get(this.locators.template_dropdown).type('TestQANew');   
cy.contains('.ng-option-label', 'TestQANew').click();
cy.get(this.locators.language_dropdown).click();
cy.get('.ng-option-label').should('have.length.greaterThan', 1);

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
cy.get(this.locators.template_dropdown).type('TestQANew');   
cy.contains('.ng-option-label', 'TestQANew').click();
cy.wait(2000);
cy.get(this.locators.language_dropdown).click();
cy.get('.ng-dropdown-panel .ng-option')
  .should('have.length.greaterThan', 0)
  .first()
  .click({ force: true });

}

AccountDetails_045(){

cy.wait(2000)
cy.get(this.locators.customer_accountnumber).type("1667")
cy.wait(2000);
cy.contains('button','Search').click({force:true});
cy.wait(2000);
cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
.click({force:true})
cy.wait(2000);
cy.get(this.locators.toggle_button).click({force:true});
cy.wait(2000);
cy.get(this.locators.case_details).click({force:true});
cy.wait(2000);
cy.get(this.locators.email_address).select(1);
cy.wait(2000);
cy.contains('button','Email').click({force:true});
cy.wait(2000);
cy.contains('button','Preview').should('be.disabled');
cy.wait(2000);
cy.get(this.locators.template_dropdown).type('TestQANew');   
cy.contains('.ng-option-label', 'TestQANew').click();
cy.wait(2000);
cy.get(this.locators.language_dropdown).click();
cy.get('.ng-dropdown-panel .ng-option')
  .should('have.length.greaterThan', 0)
  .first()
  .click({ force: true });
cy.wait(2000);
cy.wait(2000);
cy.contains('button','Preview')
.should('not.be.disabled')

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
cy.get(this.locators.template_dropdown).type('TestQANew');   
cy.contains('.ng-option-label', 'TestQANew').click();
cy.wait(2000);
cy.get(this.locators.language_dropdown).click();
cy.get('.ng-dropdown-panel .ng-option')
  .should('have.length.greaterThan', 0)
  .first()
  .click({ force: true });
cy.contains('button','Preview').click({force:true})
cy.get(this.locators.gmail_subject).should('be.visible');
cy.get(this.locators.email_content).should('be.visible');


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
cy.get(this.locators.template_dropdown).type('TestQANew');   
cy.contains('.ng-option-label', 'TestQANew').click();
cy.wait(2000);
cy.get(this.locators.language_dropdown).click();
cy.get('.ng-dropdown-panel .ng-option')
  .should('have.length.greaterThan', 0)
  .first()
  .click({ force: true });
cy.contains('button','Preview').click({force:true});

cy.get(this.locators.gmail_subject).should('be.visible');
cy.get(this.locators.email_content).should('be.visible');

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
cy.get(this.locators.template_dropdown).type('TestQANew');   
cy.contains('.ng-option-label', 'TestQANew').click();
cy.wait(2000);
cy.get(this.locators.language_dropdown).click();
cy.get('.ng-dropdown-panel .ng-option')
  .should('have.length.greaterThan', 0)
  .first()
  .click({ force: true });
cy.contains('button','Preview').click({force:true});
cy.get(this.locators.gmail_subject).should('be.visible');
cy.get(this.locators.email_content).should('be.visible');
cy.get(this.locators.send_email).click({force:true});
cy.contains('Success! Email Sent Successfully')
  .should('be.visible');
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
cy.get(this.locators.template_dropdown).type('TestQANew');   
cy.contains('.ng-option-label', 'TestQANew').click();
cy.wait(2000);
cy.get(this.locators.language_dropdown).click();
cy.get('.ng-dropdown-panel .ng-option')
  .should('have.length.greaterThan', 0)
  .first()
  .click({ force: true });
cy.contains('button','Preview').click({force:true});
cy.get(this.locators.gmail_subject).should('be.visible');
cy.get(this.locators.email_content).should('be.visible');
cy.get(this.locators.cancel_button).click({force:true});

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
cy.get(this.locators.template_dropdown).type('TestQANew');   
cy.contains('.ng-option-label', 'TestQANew').click();
cy.wait(2000);
cy.get(this.locators.language_dropdown).click();
cy.get('.ng-dropdown-panel .ng-option')
  .should('have.length.greaterThan', 0)
  .first()
  .click({ force: true });
cy.contains('button','Preview').click({force:true});
cy.get(this.locators.gmail_subject).should('be.visible');
cy.get(this.locators.email_content).should('be.visible');
cy.get(this.locators.send_email).click({force:true});
cy.contains('Success! Email Sent Successfully')
  .should('be.visible').should('have.css', 'background-color', 'rgb(40, 167, 69)');
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
cy.get(this.locators.template_dropdown).type('TestQANew');   
cy.contains('.ng-option-label', 'TestQANew').click();
cy.wait(2000);
cy.get(this.locators.language_dropdown).click();
cy.get('.ng-dropdown-panel .ng-option')
  .should('have.length.greaterThan', 0)
  .first()
  .click({ force: true });
cy.contains('button','Preview').click({force:true});
cy.get(this.locators.gmail_subject).should('be.visible');
cy.get(this.locators.email_content).should('be.visible');
cy.get(this.locators.send_email).click({force:true});
cy.contains('Success! Email Sent Successfully')
  .should('be.visible');
cy.wait(2000);
cy.contains('Case Details').should('be.visible');


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
cy.get(this.locators.template_dropdown).type('TestQANew');   
cy.contains('.ng-option-label', 'TestQANew').click();
cy.wait(2000);
cy.get(this.locators.language_dropdown).click();
cy.get('.ng-dropdown-panel .ng-option')
  .should('have.length.greaterThan', 0)
  .first()
  .click({ force: true });
cy.contains('button','Preview').click({force:true});
cy.get(this.locators.gmail_subject).should('be.visible');
cy.get(this.locators.email_content).should('be.visible');
cy.get(this.locators.send_email).click({force:true});
cy.get('.alert-success')
  .should('be.visible')
  .and('contain','Success! Email Sent Successfully');
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
  cy.get(this.locators.mobile_number).type("8807940438");
  cy.wait(2000);
  cy.get(this.locators.submit_button_dashboard).click({force:true});
  cy.contains("Search Results").should('be.visible');
  cy.wait(2000);


}
AccountMobileNumber02(){
  cy.get(this.locators.mobile_number).type("8807940438");
  cy.wait(2000);
  cy.get(this.locators.submit_button_dashboard).click({force:true});
  cy.contains("Search Results").should('be.visible');
  cy.wait(2000);
  cy.get("td[class='link'] a span span").click({force:true});
  cy.wait(2000);
  cy.get('#selectedFullViewColumn').select("One Column");
  cy.contains('88XXXXXX38').scrollIntoView().should('be.visible');
  cy.get(':nth-child(5) > td > [style="text-wrap-mode: nowrap; position: relative;"] > svg-icon').click({force:true});
   cy.contains('8807940438').scrollIntoView().should('be.visible');
}
AccountMobileNumber03(){
   cy.get(this.locators.mobile_number).type("8807940438");
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
AccountMobileNumber04(){
  cy.get(this.locators.mobile_number).type("6657655653");
  cy.wait(2000);
  cy.get(this.locators.submit_button_dashboard).click({force:true});
  cy.wait(2000);
  cy.contains("Search Results").should('not.be.visible');

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

AccountDetails_055(){
  cy.get(this.locators.Credit_card_button).click({force:true});
 cy.wait(2000);
  cy.get(this.locators.cc_ac_field).type("4726428046987990");
  cy.wait(2000);
  cy.contains('button','Search').click({force:true});
 cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)').click({force:true});
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

AccountDetails_056(){
  cy.get(this.locators.Credit_card_button).click({force:true});
 cy.wait(2000);
  cy.get(this.locators.cc_ac_field).type("4726428046987990");
  cy.wait(2000);
  cy.contains('button','Search').click({force:true});
 cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)').click({force:true});
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


AccountDetails_057(){
  cy.get(this.locators.Credit_card_button).click({force:true});
 cy.wait(2000);
  cy.get(this.locators.cc_ac_field).type("4726428046987990");
  cy.wait(2000);
  cy.contains('button','Search').click({force:true});
 cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)').click({force:true});
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

AccountDetails_058(){

  cy.get(this.locators.Credit_card_button).click({force:true});
 cy.wait(2000);
  cy.get(this.locators.cc_ac_field).type("4726428046987990");
  cy.wait(2000);
  cy.contains('button','Search').click({force:true});
 cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)').click({force:true});
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
  cy.get(this.locators.template_dropdown)
    .should('contain','Select Template');
  cy.get(this.locators.language_dropdown)
    .should('contain','Select Language');
  cy.get(this.locators.preview_button).click({force:true});
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

AccountDetails_060(){}

AccountDetails_061(){

  cy.get(this.locators.Credit_card_button).click({force:true});
 cy.wait(2000);
  cy.get(this.locators.cc_ac_field).type("4726428046987990");
  cy.wait(2000);

  cy.contains('button','Search').click({force:true});

 cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)').click({force:true});
  cy.wait(2000);

  cy.get(this.locators.toggle_button).click({force:true});
  cy.wait(2000);

  cy.get(this.locators.case_details).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.contact_number).select(1);
  cy.wait(2000);
  cy.contains('button','SMS').click({force:true});
  cy.contains('Send Message').should('be.visible');
  cy.get(this.locators.template_dropdown)
  .type('dsjfdkgfdf');
  cy.contains('.ng-option-label', 'dsjfdkgfdf')
  .should('be.visible')
  .click();
  cy.get(this.locators.language_dropdown).click();
  cy.get('.ng-option-label')
  .should('have.length.greaterThan', 1);

}

AccountDetails_062(){
  cy.get(this.locators.Credit_card_button).click({force:true});
 cy.wait(2000);
  cy.get(this.locators.cc_ac_field).type("4726428046987990");
  cy.wait(2000);
  cy.contains('button','Search').click({force:true});
 cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.toggle_button).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.case_details).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.contact_number).select(1);
  cy.wait(2000);
  cy.contains('button','SMS').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.template_dropdown).type('dsjfdkgfdf');   
  cy.contains('.ng-option-label', 'dsjfdkgfdf').click();
  cy.get(this.locators.language_dropdown).click();
  cy.get('.ng-option-label').contains('English').click();
  cy.get(this.locators.preview_button).should('be.enabled');
  
}

AccountDetails_063(){

   cy.get(this.locators.Credit_card_button).click({force:true});
 cy.wait(2000);
  cy.get(this.locators.cc_ac_field).type("4726428046987990");
  cy.wait(2000);
  cy.contains('button','Search').click({force:true});
 cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.toggle_button).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.case_details).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.contact_number).select(1);
  cy.wait(2000);
  cy.contains('button','SMS').click({force:true});
  cy.wait(2000);        
   cy.get(this.locators.template_dropdown).type('dsjfdkgfdf');   
  cy.contains('.ng-option-label', 'dsjfdkgfdf').click();
  cy.get(this.locators.language_dropdown).click();
  cy.get('.ng-option-label').contains('English').click();
  cy.get(this.locators.preview_button).should('be.enabled').click({force:true});
  cy.wait(2000);
  cy.contains('Message Preview').should('be.visible');
 


}

AccountDetails_064(){

   cy.get(this.locators.Credit_card_button).click({force:true});
 cy.wait(2000);
  cy.get(this.locators.cc_ac_field).type("4726428046987990");
  cy.wait(2000);
  cy.contains('button','Search').click({force:true});
 cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.toggle_button).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.case_details).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.contact_number).select(1);
  cy.wait(2000);
  cy.contains('button','SMS').click({force:true});
  cy.wait(2000);        
   cy.get(this.locators.template_dropdown).type('dsjfdkgfdf');   
  cy.contains('.ng-option-label', 'dsjfdkgfdf').click();
  cy.get(this.locators.language_dropdown).click();
  cy.get('.ng-option-label').contains('English').click();
  cy.get(this.locators.preview_button).should('be.enabled').click({force:true});
  cy.wait(2000);
  cy.contains('Message Preview').should('be.visible');
  cy.get(this.locators.sms).should('be.visible');

}

AccountDetails_065(){

   cy.get(this.locators.Credit_card_button).click({force:true});
 cy.wait(2000);
  cy.get(this.locators.cc_ac_field).type("4726428046987990");
  cy.wait(2000);
  cy.contains('button','Search').click({force:true});
 cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.toggle_button).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.case_details).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.contact_number).select(1);
  cy.wait(2000);
  cy.contains('button','SMS').click({force:true});
  cy.wait(2000);        
   cy.get(this.locators.template_dropdown).type('dsjfdkgfdf');   
  cy.contains('.ng-option-label', 'dsjfdkgfdf').click();
  cy.get(this.locators.language_dropdown).click();
  cy.get('.ng-option-label').contains('English').click();
  cy.get(this.locators.preview_button).should('be.enabled').click({force:true});
  cy.wait(2000);
  cy.contains('Message Preview').should('be.visible');
  cy.get(this.locators.preview_button).click({force:true});
 


}


AccountDetails_066(){

  cy.get(this.locators.Credit_card_button).click({force:true});
 cy.wait(2000);
  cy.get(this.locators.cc_ac_field).type("4726428046987990");
  cy.wait(2000);
  cy.contains('button','Search').click({force:true});
 cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.toggle_button).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.case_details).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.contact_number).select(1);
  cy.wait(2000);
  cy.contains('button','SMS').click({force:true});
  cy.wait(2000);        
   cy.get(this.locators.template_dropdown).type('dsjfdkgfdf');   
  cy.contains('.ng-option-label', 'dsjfdkgfdf').click();
  cy.get(this.locators.language_dropdown).click();
  cy.get('.ng-option-label').contains('English').click();
  cy.get(this.locators.preview_button).should('be.enabled').click({force:true});
  cy.wait(2000);
  cy.contains('Message Preview').should('be.visible');
  cy.get(this.locators.cancel_button).click({force:true});

}

AccountDetails_067(){
  cy.get(this.locators.Credit_card_button).click({force:true});
 cy.wait(2000);
  cy.get(this.locators.cc_ac_field).type("4726428046987990");
  cy.wait(2000);
  cy.contains('button','Search').click({force:true});
 cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.toggle_button).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.case_details).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.contact_number).select(1);
  cy.wait(2000);
  cy.contains('button','SMS').click({force:true});
  cy.wait(2000);    
  cy.get(this.locators.template_dropdown).type('dsjfdkgfdf');   
  cy.contains('.ng-option-label', 'dsjfdkgfdf').click();
  cy.get(this.locators.language_dropdown).click();
  cy.get('.ng-option-label').contains('English').click();
  cy.get(this.locators.preview_button).should('be.enabled').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.note).scrollIntoView().should('be.visible'); 


}

AccountDetails_068(){
  cy.get(this.locators.Credit_card_button).click({force:true});
 cy.wait(2000);
  cy.get(this.locators.cc_ac_field).type("4726428046987990");
  cy.wait(2000);
  cy.contains('button','Search').click({force:true});
 cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.toggle_button).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.case_details).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.contact_number).select(1);
  cy.wait(2000);
  cy.contains('button','SMS').click({force:true});
  cy.wait(2000);        
  cy.get(this.locators.template_dropdown).type('dsjfdkgfdf');   
  cy.contains('.ng-option-label', 'dsjfdkgfdf').click();
  cy.get(this.locators.language_dropdown).click();
  cy.get('.ng-option-label').contains('English').click();
  cy.get(this.locators.preview_button).should('be.enabled').click({force:true});
  cy.wait(2000);
  cy.contains('Message Preview').should('be.visible');
  cy.get(this.locators.preview_button).click({force:true});
  cy.contains('Success!').should('be.visible');    

}

AccountDetails_069(){
   cy.get(this.locators.Credit_card_button).click({force:true});
 cy.wait(2000);
  cy.get(this.locators.cc_ac_field).type("4726428046987990");
  cy.wait(2000);
  cy.contains('button','Search').click({force:true});
 cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.toggle_button).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.case_details).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.contact_number).select(1);
  cy.wait(2000);
  cy.contains('button','SMS').click({force:true});
  cy.wait(2000);        
  cy.get(this.locators.template_dropdown).type('dsjfdkgfdf');   
  cy.contains('.ng-option-label', 'dsjfdkgfdf').click();
  cy.get(this.locators.language_dropdown).click();
  cy.get('.ng-option-label').contains('English').click();
  cy.get(this.locators.preview_button).should('be.enabled').click({force:true});
  cy.wait(2000);
  cy.contains('Message Preview').should('be.visible');
  cy.get(this.locators.preview_button).click({force:true});
  cy.contains('Success!').should('be.visible');
  cy.contains('Account Details')
  .scrollIntoView()
  .should('be.visible');
  cy.contains('Case Details')
  .scrollIntoView()
  .should('be.visible');


}

AccountDetails_070(){


  cy.get(this.locators.Credit_card_button).click({force:true});
 cy.wait(2000);
  cy.get(this.locators.cc_ac_field).type("4726428046987990");
  cy.wait(2000);

  cy.contains('button','Search').click({force:true});

 cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)').click({force:true});

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

AccountDetails_071(){
  cy.get(this.locators.Credit_card_button).click({force:true});
 cy.wait(2000);
  cy.get(this.locators.cc_ac_field).type("4726428046987990");

  cy.contains('button','Search').click({force:true});

 cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)').click({force:true});

  cy.wait(2000);

  cy.get(this.locators.toggle_button).click({force:true});

  cy.get(this.locators.case_details).click({force:true});

  cy.get(this.locators.email_address).select(1);

  cy.contains('button','Email').click({force:true});

  cy.contains('Send Email')
  .should('be.visible');
}

AccountDetails_072(){
  cy.get(this.locators.Credit_card_button).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.cc_ac_field).type("4726428046987990");

  cy.contains('button','Search').click({force:true});

 cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)').click({force:true});

  cy.get(this.locators.toggle_button).click({force:true});

  cy.get(this.locators.case_details).click({force:true});

  cy.get(this.locators.email_address).select(1);

  cy.contains('button','Email').click({force:true});

  cy.contains('Send Email').should('be.visible');

  cy.contains('Select Template')
  .should('be.visible');

  cy.contains('Select Language')
  .should('be.visible');

}

AccountDetails_073(){
  cy.get(this.locators.Credit_card_button).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.cc_ac_field).type("4726428046987990");
 
  cy.contains('button','Search').click({force:true});

 cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)').click({force:true});

  cy.get(this.locators.toggle_button).click({force:true});

  cy.get(this.locators.case_details).click({force:true});

  cy.get(this.locators.email_address).select(1);

  cy.contains('button','Email').click({force:true});

  cy.contains('Send Email').should('be.visible');

  cy.contains('button','Preview')
  .should('be.disabled');

}

AccountDetails_074(){
  cy.get(this.locators.Credit_card_button).click({force:true});
 cy.wait(2000);
  cy.get(this.locators.cc_ac_field).type("4726428046987990");

  cy.contains('button','Search').click({force:true});

 cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)').click({force:true});

  cy.get(this.locators.toggle_button).click({force:true});

  cy.get(this.locators.case_details).click({force:true});

  cy.get(this.locators.email_address).select(1);

  cy.contains('button','Email').click({force:true});

  cy.contains('Send Email').should('be.visible');

  cy.contains('button','Preview')
  .click({force:true});

  cy.contains('Select Template').should('be.visible');
  cy.contains('Select Language').should('be.visible');

}

AccountDetails_075(){
  cy.get(this.locators.Credit_card_button).click({force:true});
 cy.wait(2000);
  cy.get(this.locators.cc_ac_field).type("4726428046987990");

  cy.contains('button','Search').click({force:true});

 cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)').click({force:true});

  cy.get(this.locators.toggle_button).click({force:true});

  cy.get(this.locators.case_details).click({force:true});

  cy.get(this.locators.email_address).select(1);

  cy.contains('button','Email').click({force:true});

  cy.contains('Send Email').should('be.visible');

  cy.contains('button','Cancel')
  .click({force:true});

  cy.contains('Send Email')
  .should('not.exist');

  cy.contains('Case Details')
  .should('exist');

}

AccountDetails_076(){
cy.get(this.locators.Credit_card_button).click({force:true});
 cy.wait(2000);
cy.get(this.locators.cc_ac_field).type("4726428046987990")
cy.contains('button','Search').click({force:true})
cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)').click({force:true});
cy.get(this.locators.toggle_button).click({force:true})
cy.wait(2000);
cy.get(this.locators.case_details).click({force:true})
cy.wait(2000);
cy.get(this.locators.email_address).select(1)
cy.wait(2000);
cy.contains('button','Email').click({force:true})
cy.wait(2000);
cy.contains('Send Email').should('be.visible')
cy.wait(2000);
cy.get(this.locators.template_dropdown).type("template");
cy.get('.ng-dropdown-panel-items').should('be.visible')

}

AccountDetails_077(){
cy.get(this.locators.Credit_card_button).click({force:true});
 cy.wait(2000);
cy.get(this.locators.cc_ac_field).type("4726428046987990");
cy.contains('button','Search').click({force:true});
cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)').click({force:true});
cy.get(this.locators.toggle_button).click({force:true});
cy.wait(2000);
cy.get(this.locators.case_details).click({force:true});
cy.wait(2000);
cy.get(this.locators.email_address).select(1);
cy.wait(2000);
cy.contains('button','Email').click({force:true});
cy.wait(2000);
cy.get(this.locators.template_dropdown).type("new");
cy.wait(2000);
cy.get('.ng-dropdown-panel-items')
.should('not.contain','Disabled');

}

AccountDetails_078(){
cy.get(this.locators.Credit_card_button).click({force:true});
 cy.wait(2000);  
cy.get(this.locators.cc_ac_field).type("4726428046987990");
cy.wait(2000);
cy.contains('button','Search').click({force:true});
cy.wait(2000);
cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)').click({force:true});
cy.wait(2000);
cy.get(this.locators.toggle_button).click({force:true});
cy.wait(2000);
cy.get(this.locators.case_details).click({force:true});
cy.wait(2000);
cy.get(this.locators.email_address).select(1);
cy.wait(2000);
cy.contains('button','Email').click({force:true});
cy.wait(2000);
cy.get(this.locators.template_dropdown).type("new");
cy.wait(2000);
cy.get('.ng-option').first().click({force:true})
cy.get(this.locators.template_dropdown).type('TestQANew');   
cy.contains('.ng-option-label', 'TestQANew').click();
cy.get(this.locators.language_dropdown).click();
cy.get('.ng-option-label').should('have.length.greaterThan', 1);

}

AccountDetails_079(){

cy.get(this.locators.Credit_card_button).click({force:true});
 cy.wait(2000);
cy.get(this.locators.cc_ac_field).type("4726428046987990");
cy.wait(2000);
cy.contains('button','Search').click({force:true})
cy.wait(2000);
cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)').click({force:true});
cy.wait(2000);
cy.get(this.locators.toggle_button).click({force:true})
cy.wait(2000);
cy.get(this.locators.case_details).click({force:true})
cy.wait(2000);
cy.get(this.locators.email_address).select(1)
cy.wait(2000);
cy.contains('button','Email').click({force:true})
cy.wait(2000);
cy.get(this.locators.template_dropdown).type('TestQANew');   
cy.contains('.ng-option-label', 'TestQANew').click();
cy.wait(2000);
cy.get(this.locators.language_dropdown).click();
cy.get('.ng-dropdown-panel .ng-option')
  .should('have.length.greaterThan', 0)
  .first()
  .click({ force: true });

}

AccountDetails_080(){

cy.get(this.locators.Credit_card_button).click({force:true});
 cy.wait(2000);
cy.get(this.locators.cc_ac_field).type("4726428046987990");
cy.wait(2000);
cy.contains('button','Search').click({force:true});
cy.wait(2000);
cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)').click({force:true});
cy.wait(2000);
cy.get(this.locators.toggle_button).click({force:true});
cy.wait(2000);
cy.get(this.locators.case_details).click({force:true});
cy.wait(2000);
cy.get(this.locators.email_address).select(1);
cy.wait(2000);
cy.contains('button','Email').click({force:true});
cy.wait(2000);
cy.contains('button','Preview').should('be.disabled');
cy.wait(2000);
cy.get(this.locators.template_dropdown).type('TestQANew');   
cy.contains('.ng-option-label', 'TestQANew').click();
cy.wait(2000);
cy.get(this.locators.language_dropdown).click();
cy.get('.ng-dropdown-panel .ng-option')
  .should('have.length.greaterThan', 0)
  .first()
  .click({ force: true });
cy.wait(2000);
cy.wait(2000);
cy.contains('button','Preview')
.should('not.be.disabled')

}

AccountDetails_081(){
cy.get(this.locators.Credit_card_button).click({force:true});
 cy.wait(2000);  
cy.get(this.locators.cc_ac_field).type("4726428046987990")
cy.wait(2000);
cy.contains('button','Search').click({force:true});
cy.wait(2000);
cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)').click({force:true});
cy.wait(2000);
cy.get(this.locators.toggle_button).click({force:true});
cy.wait(2000);
cy.get(this.locators.case_details).click({force:true})
cy.wait(2000);
cy.get(this.locators.email_address).select(1)
cy.wait(2000);
cy.contains('button','Email').click({force:true});
cy.get(this.locators.template_dropdown).type('TestQANew');   
cy.contains('.ng-option-label', 'TestQANew').click();
cy.wait(2000);
cy.get(this.locators.language_dropdown).click();
cy.get('.ng-dropdown-panel .ng-option')
  .should('have.length.greaterThan', 0)
  .first()
  .click({ force: true });
cy.contains('button','Preview').click({force:true})
cy.get(this.locators.gmail_subject).should('be.visible');
cy.get(this.locators.email_content).should('be.visible');


}


AccountDetails_082(){
cy.get(this.locators.Credit_card_button).click({force:true});
 cy.wait(2000);  
cy.get(this.locators.cc_ac_field).type("4726428046987990")
cy.wait(2000);
cy.contains('button','Search').click({force:true});
cy.wait(2000);
cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)').click({force:true});
cy.wait(2000);
cy.get(this.locators.toggle_button).click({force:true});
cy.wait(2000);
cy.get(this.locators.case_details).click({force:true})
cy.wait(2000);
cy.get(this.locators.email_address).select(1)
cy.wait(2000);
cy.contains('button','Email').click({force:true});
cy.get(this.locators.template_dropdown).type('TestQANew');   
cy.contains('.ng-option-label', 'TestQANew').click();
cy.wait(2000);
cy.get(this.locators.language_dropdown).click();
cy.get('.ng-dropdown-panel .ng-option')
  .should('have.length.greaterThan', 0)
  .first()
  .click({ force: true });
cy.contains('button','Preview').click({force:true});

cy.get(this.locators.gmail_subject).should('be.visible');
cy.get(this.locators.email_content).should('be.visible');

}



AccountDetails_083(){
cy.get(this.locators.Credit_card_button).click({force:true});
 cy.wait(2000);  
cy.get(this.locators.cc_ac_field).type("4726428046987990")
cy.wait(2000);
cy.contains('button','Search').click({force:true});
cy.wait(2000);
cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)').click({force:true});
cy.wait(2000);
cy.get(this.locators.toggle_button).click({force:true});
cy.wait(2000);
cy.get(this.locators.case_details).click({force:true})
cy.wait(2000);
cy.get(this.locators.email_address).select(1)
cy.wait(2000);
cy.contains('button','Email').click({force:true});
cy.get(this.locators.template_dropdown).type('TestQANew');   
cy.contains('.ng-option-label', 'TestQANew').click();
cy.wait(2000);
cy.get(this.locators.language_dropdown).click();
cy.get('.ng-dropdown-panel .ng-option')
  .should('have.length.greaterThan', 0)
  .first()
  .click({ force: true });
cy.contains('button','Preview').click({force:true});
cy.get(this.locators.gmail_subject).should('be.visible');
cy.get(this.locators.email_content).should('be.visible');
cy.get(this.locators.send_email).click({force:true});
cy.contains('Success! Email Sent Successfully')
  .should('be.visible');
}

AccountDetails_084(){
cy.get(this.locators.Credit_card_button).click({force:true});
 cy.wait(2000);  
cy.get(this.locators.cc_ac_field).type("4726428046987990")
cy.wait(2000);
cy.contains('button','Search').click({force:true});
cy.wait(2000);
cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)').click({force:true});
cy.wait(2000);
cy.get(this.locators.toggle_button).click({force:true});
cy.wait(2000);
cy.get(this.locators.case_details).click({force:true})
cy.wait(2000);
cy.get(this.locators.email_address).select(1)
cy.wait(2000);
cy.contains('button','Email').click({force:true});
cy.get(this.locators.template_dropdown).type('TestQANew');   
cy.contains('.ng-option-label', 'TestQANew').click();
cy.wait(2000);
cy.get(this.locators.language_dropdown).click();
cy.get('.ng-dropdown-panel .ng-option')
  .should('have.length.greaterThan', 0)
  .first()
  .click({ force: true });
cy.contains('button','Preview').click({force:true});
cy.get(this.locators.gmail_subject).should('be.visible');
cy.get(this.locators.email_content).should('be.visible');
cy.get(this.locators.cancel_button).click({force:true});

}

AccountDetails_085(){
  cy.get(this.locators.Credit_card_button).click({force:true});
cy.wait(2000);
cy.get(this.locators.cc_ac_field).type("4726428046987990")
cy.wait(2000);
cy.contains('button','Search').click({force:true});
cy.wait(2000);
cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)').click({force:true});
cy.wait(2000);
cy.get(this.locators.toggle_button).click({force:true});
cy.wait(2000);
cy.get(this.locators.case_details).click({force:true})
cy.wait(2000);
cy.get(this.locators.email_address).select(1)
cy.wait(2000);
cy.contains('button','Email').click({force:true});
cy.get(this.locators.template_dropdown).type('TestQANew');   
cy.contains('.ng-option-label', 'TestQANew').click();
cy.wait(2000);
cy.get(this.locators.language_dropdown).click();
cy.get('.ng-dropdown-panel .ng-option')
  .should('have.length.greaterThan', 0)
  .first()
  .click({ force: true });
cy.contains('button','Preview').click({force:true});
cy.get(this.locators.gmail_subject).should('be.visible');
cy.get(this.locators.email_content).should('be.visible');
cy.get(this.locators.send_email).click({force:true});
cy.contains('Success! Email Sent Successfully')
  .should('be.visible').should('have.css', 'background-color', 'rgb(40, 167, 69)');
}

AccountDetails_086(){
  cy.get(this.locators.Credit_card_button).click({force:true});
 cy.wait(2000);
cy.get(this.locators.cc_ac_field).type("4726428046987990")
cy.wait(2000);
cy.contains('button','Search').click({force:true});
cy.wait(2000);
cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)').click({force:true});
cy.wait(2000);
cy.get(this.locators.toggle_button).click({force:true});
cy.wait(2000);
cy.get(this.locators.case_details).click({force:true})
cy.wait(2000);
cy.get(this.locators.email_address).select(1)
cy.wait(2000);
cy.contains('button','Email').click({force:true});
cy.get(this.locators.template_dropdown).type('TestQANew');   
cy.contains('.ng-option-label', 'TestQANew').click();
cy.wait(2000);
cy.get(this.locators.language_dropdown).click();
cy.get('.ng-dropdown-panel .ng-option')
  .should('have.length.greaterThan', 0)
  .first()
  .click({ force: true });
cy.contains('button','Preview').click({force:true});
cy.get(this.locators.gmail_subject).should('be.visible');
cy.get(this.locators.email_content).should('be.visible');
cy.get(this.locators.send_email).click({force:true});
cy.contains('Success! Email Sent Successfully')
  .should('be.visible');
cy.wait(2000);
cy.contains('Case Details').should('be.visible');


}

AccountDetails_087(){
  cy.get(this.locators.Credit_card_button).click({force:true});
 cy.wait(2000);
cy.get(this.locators.cc_ac_field).type("4726428046987990")
cy.wait(2000);
cy.contains('button','Search').click({force:true});
cy.wait(2000);
cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) span:nth-child(1)').click({force:true});
cy.wait(2000);
cy.get(this.locators.toggle_button).click({force:true});
cy.wait(2000);
cy.get(this.locators.case_details).click({force:true})
cy.wait(2000);
cy.get(this.locators.email_address).select(1)
cy.wait(2000);
cy.contains('button','Email').click({force:true});
cy.get(this.locators.template_dropdown).type('TestQANew');   
cy.contains('.ng-option-label', 'TestQANew').click();
cy.wait(2000);
cy.get(this.locators.language_dropdown).click();
cy.get('.ng-dropdown-panel .ng-option')
  .should('have.length.greaterThan', 0)
  .first()
  .click({ force: true });
cy.contains('button','Preview').click({force:true});
cy.get(this.locators.gmail_subject).should('be.visible');
cy.get(this.locators.email_content).should('be.visible');
cy.get(this.locators.send_email).click({force:true});
cy.get('.alert-success')
  .should('be.visible')
  .and('contain','Success! Email Sent Successfully');
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
cy.get(this.locators.toggle_button).click({force:true});
cy.wait(2000);
cy.get(this.locators.case_details).click({force:true})
cy.wait(2000);
cy.get(this.locators.email_button).click({force:true});
cy.wait(2000);
cy.contains('Warning! Please select Email')
  .should('be.visible');

}
}
export default AccountDetailsPage;
