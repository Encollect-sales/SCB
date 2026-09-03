class PaymentsPage {

    constructor(locators) {
        this.locators = locators;
    }

    // TC_129_POS
    verifyPaymentsMenuVisible() {
        cy.contains('Payments').scrollIntoView().should('be.visible');
        cy.wait(2000);
    }

    // TC_130_POS
    verifyOnlinePaymentRequestsVisible() {
        cy.contains('Payments').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.contains('Online Payment Requests').scrollIntoView().should('be.visible');
        cy.wait(2000);
    }

    // TC_131_POS
    navigateToOnlinePaymentRequests() {
        cy.contains('Payments').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.contains('Online Payment Requests').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.contains('Online Payment Requests').should('be.visible');
        cy.wait(2000);
    }

    // TC_132_POS
    selectBankStaff() {
        cy.contains('Payments').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.contains('Online Payment Requests').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.contains('Bank Staff').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.contains('Bank Staff').should('be.visible');
        cy.wait(2000);
    }

    // TC_133_POS
    selectAgencyStaff() {
        cy.contains('Payments').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.contains('Online Payment Requests').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.contains('Agency Staff').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.contains('Agency Staff').should('be.visible');
        cy.wait(2000);
    }

    // TC_134_POS
    enterFromDateAndToDate() {
       cy.contains('Payments').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.contains('Online Payment Requests').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.contains('From Date').scrollIntoView().should('be.visible');
        cy.wait(2000);
        const today = new Date();
        const todayDate = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}`;
        const oldDate = `01/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}`;
        cy.get(this.locators.fromdate).eq(0).should('be.visible').click({ force: true }).clear().type(oldDate);
        cy.wait(2000);
        cy.contains('To Date').scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.get(this.locators.Todate).should('be.visible').click({ force: true }).type(todayDate);
        cy.wait(2000);
    }

    // TC_135_NEG
    verifyFromDateGreaterThanToDate() {
        cy.contains('Payments').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.contains('Online Payment Requests').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.contains('From Date').scrollIntoView().should('be.visible');
        cy.wait(2000);
        const today = new Date();
        const todayDate = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}`;
        const oldDate = `01/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}`;
        cy.get(this.locators.fromdate).eq(0).should('be.visible').click({ force: true }).clear().type(oldDate);
        cy.wait(2000);
        cy.contains('To Date').scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.get(this.locators.Todate).should('be.visible').click({ force: true }).type(todayDate);
        cy.wait(2000);
        cy.get(this.locators.search).contains('Search').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.contains(/greater|invalid|from date|to date|date/i).should('be.visible');
        cy.wait(2000);
    }

    // TC_136_POS
    verifyRequestStatusDropdown() {
        cy.contains('Payments').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.contains('Online Payment Requests').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.contains('Request Status').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.get('#request_status').should('have.length.greaterThan', 0);
        cy.wait(2000);
    }

    // TC_137_POS
    selectUserBranch() {
        cy.contains('Payments').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.contains('Online Payment Requests').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.contains('User Branch').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.get('.ng-dropdown-panel .ng-option').first().scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
    }

    // TC_138_POS
    selectStaff() {
        cy.contains('Payments').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.contains('Online Payment Requests').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.contains('Online Payment Requests').scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.get(this.locators.companyUserRadio).scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
    }

    // TC_139_NEG
    verifyMandatoryFieldValidation() {
        cy.contains('Payments').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.contains('Online Payment Requests').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.search).contains('Search').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.contains(/required|mandatory|please select|please enter/i).should('be.visible');
        cy.wait(2000);
    }

    // TC_140_NEG
    verifyPaymentsNotVisible() {
        cy.contains('Payments').should('not.exist');
        cy.wait(2000);
    }
}

export default PaymentsPage;