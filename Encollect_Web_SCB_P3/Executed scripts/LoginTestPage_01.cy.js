Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('ResizeObserver loop')) {
      return false; // Prevents Cypress from failing the test
    }
  });
  
  describe('Login and Dashboard Functionality Test', () => {
    beforeEach(() => {
      //cy.visit('https://scbqa.sumeruentiger.com/web/#/login'); // Update with your actual login URL
      cy.visit('https://scbuat.sumeruentiger.com/web/#/login');
    });
  
    it('should login successfully with valid credentials and navigate to dashboard', () => {
      cy.get('#login-company-name').type("Encollect");
      cy.get('#ngb-typeahead-0-0').click();
      cy.wait(2000);
      cy.get('#login-email').type("rahmancbm@yopmail.com");
      cy.wait(2000);
      cy.get('#login-password').type("123@adAS");
      cy.wait(2000);
      cy.get('#login-submit-button').click();
      cy.wait(2000);
      //cy.get('[role="alert"]').should('contain', 'Incorrect Password, you have 2 attempts remaining');

    });
  });