Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('ResizeObserver loop')) {
      return false; // Prevents Cypress from failing the test
    }
  });
  
  describe('Login and Dashboard Functionality Test', () => {
    beforeEach(() => {
      //cy.visit('https://scba.sumeruentiger.com/web/#/login'); // Update with your actual login URL
      cy.visit('https://scbuat.sumeruentiger.com/web/#/login');
    });
  
    it('should login successfully with valid credentials and navigate to dashboard', () => {
      cy.get('#login-company-name').type("Encollect");
      cy.get('#ngb-typeahead-0-0').click();
      cy.wait(2000);
      cy.get('#login-email').type("rahmancbm@yopmail.com");
      cy.wait(2000);
      cy.get('#login-password').type("123@awAS");
      cy.wait(2000);
      cy.get('#login-submit-button').click();
      cy.wait(2000);
      cy.get('[role="alert"]').should('contain', 'Your account is locked due to 3 failed login attempts. Wait 24 hours to try again or reset your password to regain access immediately.');
      cy.wait(2000);
      cy.get('#login-forgot-password-link').click();
      cy.wait(2000);
      cy.get('#forgot-password-email').type("kamalesh@yopmail.com");
      cy.wait(1000);
      cy.get('#forgot-password-submit-button').click();
      cy.wait(3000); 
      //cy.get('[role="alert"]').should('contain', 'Password reset instructions have been sent via email and SMS.');
      cy.wait(2000)

    });
  });