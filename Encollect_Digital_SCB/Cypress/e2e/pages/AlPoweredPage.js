class AIPoweredPage {

    constructor(locators) {
        this.locators = locators;
    }

    verifyAIPoweredMenuVisible() {
        cy.contains('AI Powered').scrollIntoView().should('be.visible');
        cy.wait(2000);
    }

    verifyAICallSubMenuVisible() {
        cy.contains('AI Powered').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.contains('AI Call').scrollIntoView().should('be.visible');
        cy.wait(2000);
    }

    verifyWABotSubMenuVisible() {
        cy.contains('AI Powered').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.contains('WA Bot').scrollIntoView().should('be.visible');
        cy.wait(2000);
    }

    navigateToAICall() {
        cy.contains('AI Powered').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.contains('AI Call').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.url().should('include', 'ai');
        cy.wait(2000);
    }

    navigateToWABot() {
        cy.contains('AI Powered').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.contains('WA Bot').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.url().should('include', 'wa');
        cy.wait(2000);
    }
}

export default AIPoweredPage;