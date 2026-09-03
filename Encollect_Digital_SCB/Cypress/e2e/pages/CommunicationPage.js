class CommunicationPage {

    constructor(locators) {
        this.locators = locators;
    }


    // =========================================================
    // TC_085 - Verify Communication module is visible
    // =========================================================

    verifyCommunicationMenu() {

        cy.contains('Communication').scrollIntoView().should('be.visible');

    }


    // =========================================================
    // TC_086 - Verify Search Communication Templates
    // =========================================================

    verifySearchCommunicationTemplates() {

        cy.contains('Communication').scrollIntoView().should('be.visible').click({force:true});
        cy.wait(2000);
        cy.contains('Search Communication Templates').scrollIntoView().should('be.visible');

    }


    // =========================================================
    // TC_087 - Verify Create Communication Template
    // =========================================================

    verifyCreateCommunicationTemplate() {

        cy.contains('Communication').should('be.visible').click({force:true});
        cy.wait(2000);
        cy.contains('Create Communication Template').should('be.visible');

    }


    // =========================================================
    // TC_088 - Verify Search Communication Triggers
    // =========================================================

    verifySearchCommunicationTriggers() {
        cy.contains('Communication').should('be.visible').click();
        cy.wait(2000);
        cy.contains('Search Communication Triggers').should('be.visible');

    }


    // =========================================================
    // TC_089 - Verify Create Communication Trigger
    // =========================================================

    verifyCreateCommunicationTrigger() {

        cy.contains('Communication').should('be.visible').click({force:true});
        cy.wait(2000);
        cy.contains('Create Communication Trigger').should('be.visible');

    }


    // =========================================================
    // TC_090 - Verify only 5 trigger types are available
    // =========================================================

    verifyFiveTriggerTypes() {
        cy.contains('Communication').should('be.visible').click({force:true});
        cy.wait(2000);
        cy.contains('Create Communication Trigger').should('be.visible').click({force:true});
        cy.wait(2000);
        cy.get('select')
            .filter(':visible')
            .first()
            .should('be.visible');

        cy.wait(2000);
        cy.contains('Xth day before due date').scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.contains('Xth day after statement date').scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.contains('On PTP Date').scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.contains('On Broken PTP').scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.contains('On X DPD').scrollIntoView().should('be.visible');

    }


    // =========================================================
    // TC_091 - Verify no extra trigger types are available
    // =========================================================

    verifyTriggerTypes() {
    cy.contains('Communication').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.contains('Create Communication Trigger').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.contains('Trigger Type').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('OnDigitalCampaign').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('On Xth day before due date').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('On Xth day after statement date').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('On X DPD').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('On PTP Date').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('On Broken PTP').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('On Agency allocation change').scrollIntoView().should('be.visible');
    cy.wait(2000);
}

// TC_092 - Verify entry point is Receivable
verifyEntryPointReceivable() {
    cy.contains('Communication').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.contains('Create Communication Template').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.contains('Receivable').scrollIntoView().should('be.visible');
    cy.wait(2000);
}

// TC_093 - Verify Payment Link variable is available
verifyPaymentLinkVariable() {
    cy.contains('Communication').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.contains('Create Communication Template').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.contains('Payment Link').scrollIntoView().should('be.visible');
    cy.wait(2000);
}

// TC_094 - Verify Payment Link is dynamic
verifyDynamicPaymentLink() {
    cy.contains('Communication').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.contains('Create Communication Template').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.contains('Payment Link').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
}

// TC_095 - Verify user can search communication templates
searchCommunicationTemplates() {
    cy.contains('Communication').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.contains('Search Communication Templates').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.get('input').filter(':visible').first().scrollIntoView().should('be.visible').type('Test');
    cy.wait(2000);
    cy.contains('Search').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
}

// TC_096 - Verify no templates found
verifyNoCommunicationTemplates() {
    cy.contains('Communication').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.contains('Search Communication Templates').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.get('input').filter(':visible').first().scrollIntoView().should('be.visible').type('InvalidTemplate12345');
    cy.wait(2000);
    cy.contains('Search').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.contains('No data available').scrollIntoView().should('be.visible');
}

// TC_097 - Verify user can create communication template
createCommunicationTemplate() {
    cy.contains('Communication').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.contains('Create Communication Template').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.contains('Save').scrollIntoView().click({ force: true });
    cy.wait(2000);
}

// TC_098 - Verify mandatory field validation
verifyCommunicationTemplateMandatoryValidation() {
    cy.contains('Communication').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.contains('Create Communication Template').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.contains('Save').scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.contains(/required|mandatory/i).should('be.visible');
}

// TC_099 - Verify user can search communication triggers
searchCommunicationTriggers() {
    cy.contains('Communication').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.contains('Search Communication Triggers').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.get('input').filter(':visible').first().scrollIntoView().should('be.visible').type('Test');
    cy.wait(2000);
    cy.contains('Search').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
}

selectRandomTriggerType() {
    cy.contains('Communication').scrollIntoView().should('be.visible').click({ force: true });     
    cy.wait(2000);     
    cy.contains('Search Communication Triggers').scrollIntoView().should('be.visible').click({ force: true });     
    cy.wait(2000);
    cy.get(".form-control").type('new');
    cy.wait(2000);
    cy.contains("No Communication Triggers found").scrollIntoView().should('be.visible')
   
}

// TC_101 - Verify trigger creation with valid data
createCommunicationTrigger() {
    cy.contains('Communication').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.contains('Create Communication Trigger').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.contains('Trigger Type').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('Save').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
}

// TC_102 - Verify mandatory validation in trigger creation
verifyTriggerMandatoryValidation() {
    cy.contains('Communication').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.contains('Create Communication Trigger').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.contains('Create Trigger').scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.contains(/select|required|mandatory/i).should('be.visible');
}

// TC_103 - Verify On PTP Date trigger
verifyOnPTPDateTrigger() {
    cy.contains('Communication').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.contains('Create Communication Trigger').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    const randomTriggerName = `Automation${Math.floor(Math.random() * 10000)}`; 
    cy.get(this.locators.triggername).scrollIntoView().should('be.visible').type(randomTriggerName);
    cy.wait(2000);
    cy.contains('On PTP Date').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    // // cy.get(this.locators.xvalue).type(30);
    // // cy.wait(2000);
    // cy.contains('Okay').scrollIntoView().should('be.visible');
    cy.get(this.locators.recipient).scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option').should('have.length.greaterThan', 0).then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length);
    cy.wrap($options[randomIndex]).scrollIntoView().should('be.visible').click({ force: true });
});
    cy.wait(2000);
    cy.contains("Create Trigger").scrollIntoView().click({force:true});
}

// TC_104 - Verify On Broken PTP trigger
verifyOnBrokenPTPTrigger() {
    cy.contains('Communication').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.contains('Create Communication Trigger').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    const randomTriggerName = `Automation${Math.floor(Math.random() * 10000)}`; 
    cy.get(this.locators.triggername).scrollIntoView().should('be.visible').type(randomTriggerName);
    cy.wait(2000);
    cy.contains('On Broken PTP').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    // cy.get(this.locators.xvalue).type(30);
    // cy.wait(2000);
    // cy.contains('Okay').scrollIntoView().should('be.visible');
    cy.get(this.locators.recipient).scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option').should('have.length.greaterThan', 0).then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length);
    cy.wrap($options[randomIndex]).scrollIntoView().should('be.visible').click({ force: true });
});
    cy.wait(2000);
    cy.contains("Create Trigger").scrollIntoView().click({force:true});
}

// TC_105 - Verify On X DPD trigger
verifyOnXDPDTrigger() {
    cy.contains('Communication').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.contains('Create Communication Trigger').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    const randomTriggerName = `Automation${Math.floor(Math.random() * 10000)}`; 
    cy.get(this.locators.triggername).scrollIntoView().should('be.visible').type(randomTriggerName);
    cy.wait(2000);
    cy.contains('On X DPD').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.xvalue).type(30);
    cy.wait(2000);
    cy.contains('Okay').scrollIntoView().should('be.visible');
    cy.get(this.locators.recipient).scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option').should('have.length.greaterThan', 0).then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length);
    cy.wrap($options[randomIndex]).scrollIntoView().should('be.visible').click({ force: true });
});
    cy.wait(2000);
    cy.contains("Create Trigger").scrollIntoView().click({force:true});
}


}

export default CommunicationPage;