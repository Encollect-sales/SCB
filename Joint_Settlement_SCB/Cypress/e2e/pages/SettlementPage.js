
import { getBaseUrl } from '../utils/configUtils';
import 'cypress-wait-until';
import { faker } from '@faker-js/faker';


class JointSettlementPage {

    constructor(locators) {
        this.locators = locators;
    }
    
NavigateToSettlement() {
cy.contains('Settlement').click({ force: true });
cy.wait(2000);
cy.contains('Request Settlement').click({ force: true });
cy.wait(2000);
cy.get(this.locators.Flagged_As_Eligible).select('Yes');
cy.wait(2000);
cy.get(this.locators.searchbutton).click({ force: true });
cy.wait(5000);
cy.get('#loan-grid-column-filter-button').click({ force: true });
cy.wait(5000);
cy.contains('Principal Outstanding').click({ force: true });
cy.wait(2000);
cy.get('#loan-grid-column-filter-button').click({ force: true });
cy.wait(2000);
cy.get('.pagination-last > .page-link')
    .should('exist')
    .scrollIntoView();

cy.wait(1000);

cy.get('.pagination-last > .page-link')
    .click({ force: true });

cy.wait(5000);

const checkAccounts = () => {

    // cy.get('[name="itemsPerPage"]')
    //     .select('50');

    cy.wait(2000);

    cy.get('tbody > tr')
        .should('have.length.greaterThan', 0)
        .then($rows => {

            const totalAccounts = $rows.length;

            cy.log(`Accounts on current page: ${totalAccounts}`);

            const tryAccount = (index = 0) => {

                if (index >= totalAccounts) {

                    cy.log('No suitable account found on this page.');

                    cy.get('.pagination-prev > .page-link')
                        .should('exist')
                        .then($prev => {

                            const disabled =
                                $prev.is(':disabled') ||
                                $prev.hasClass('disabled') ||
                                $prev.attr('aria-disabled') === 'true';

                            if (disabled) {
                                throw new Error(
                                    'No suitable account found. First page reached.'
                                );
                            }

                            cy.log('Moving to previous page.');

                            cy.wrap($prev)
                                .scrollIntoView()
                                .click({ force: true });

                            cy.wait(4000);

                            checkAccounts();
                        });

                    return;
                }

                cy.log(`Checking account ${index + 1} of ${totalAccounts}`);

                cy.get('tbody > tr')
                    .eq(index)
                    .then($row => {

                        const principalText = $row
                            .find('td:nth-child(6)')
                            .text()
                            .trim();

                        const principalOutstanding = parseFloat(
                            principalText.replace(/[^0-9.-]/g, '')
                        );

                        cy.log(
                            `Principal Outstanding: ${principalOutstanding}`
                        );

                        if (principalOutstanding > 0) {

                            cy.log(
                                'Principal Outstanding is greater than 0. Clicking Action button.'
                            );

                            cy.wrap($row)
                                .find('#config-button')
                                .scrollIntoView()
                                .click({ force: true });

                            cy.wait(5000);

                            cy.get('body').then($body => {

                                const warningExists = $body
                                    .text()
                                    .includes(
                                        'A settlement request for this account'
                                    );

                                if (warningExists) {

                                    cy.log(
                                        'Warning found. Trying next account.'
                                    );

                                    tryAccount(index + 1);

                                    return;
                                }

                                const yesButton = $body
                                    .find('.modal-body:visible')
                                    .find('button')
                                    .filter(function () {

                                        return Cypress.$(this)
                                            .text()
                                            .trim()
                                            .toLowerCase() === 'yes';

                                    });

                                if (yesButton.length > 0) {

                                    cy.log(
                                        'YES popup found. Clicking Yes.'
                                    );

                                    cy.wrap(yesButton)
                                        .first()
                                        .click({ force: true });

                                    cy.log(
                                        'Settlement confirmation accepted.'
                                    );

                                    return;
                                }

                                cy.wait(3000);

                                cy.get('body').then($bodyRetry => {

                                    const retryWarning = $bodyRetry
                                        .text()
                                        .includes(
                                            'A settlement request for this account'
                                        );

                                    if (retryWarning) {

                                        cy.log(
                                            'Warning found after wait. Trying next account.'
                                        );

                                        tryAccount(index + 1);

                                        return;
                                    }

                                    const retryYesButton = $bodyRetry
                                        .find('.modal-body:visible')
                                        .find('button')
                                        .filter(function () {

                                            return Cypress.$(this)
                                                .text()
                                                .trim()
                                                .toLowerCase() === 'yes';

                                        });

                                    if (retryYesButton.length > 0) {

                                        cy.log(
                                            'YES popup found after wait. Clicking Yes.'
                                        );

                                        cy.wrap(retryYesButton)
                                            .first()
                                            .click({ force: true });

                                        return;
                                    }

                                    cy.log(
                                        'No popup found. Trying next account.'
                                    );

                                    tryAccount(index + 1);
                                });
                            });

                        } else {

                            cy.log(
                                `Principal Outstanding is ${principalOutstanding}. Skipping account.`
                            );

                            tryAccount(index + 1);
                        }
                    });
            };

            tryAccount();
        });
};

checkAccounts();

}
NavigateToSettlementRequestInformationPage(){
cy.get('[heading="Settlement Information"] > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').contains('Settlement Information').click({force:true});
cy.wait(2000);
cy.get('#settlementRemarks').type('ok');
cy.wait(2000);
cy.get('app-basic-information > .row > :nth-child(3)')
    .invoke('text')
    .then(amountText => {

        const principalOutstanding = parseFloat(
            amountText.replace(/[^0-9.]/g, '')
        );

        // Calculate exactly 15% waiver
        const waiverAmount = principalOutstanding * 0.16;

        // Settlement amount = 85% of outstanding
        const settlementAmount = principalOutstanding - waiverAmount;

        cy.log(`Principal Outstanding: ₹${principalOutstanding}`);
        cy.log(`15% Waiver Amount: ₹${waiverAmount.toFixed(2)}`);
        cy.log(`Settlement Amount: ₹${settlementAmount.toFixed(2)}`);

        cy.get('#settlementAmt')
            .clear()
            .type(settlementAmount.toFixed(2));
    });
cy.wait(2000);



}

Submittingthesettlementforapproval() {

    const path = 'cypress/fixtures/report.png';

    // Get Settlement Amount
    cy.get('#settlementAmt')
        .should('be.visible')
        .invoke('val')
        .then(settlementAmount => {

            expect(settlementAmount, 'Settlement Amount')
                .to.not.be.empty;

            // Open Settlement Tranches
            cy.get('[heading="Settlement Tranches"] > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click({ force: true });
            cy.wait(2000);

            // Enter same Settlement Amount in Installment Amount
            cy.get('#installmentAmount-').should('exist').clear({ force: true }).type(String(settlementAmount), { force: true });

            // Enter random future date - dd-MMM-yy
            cy.get('#installmentDate-')
                .should('exist')
                .click({ force: true })
                .then($input => {

                    const date = new Date();

                    // Random future date between 1 and 30 days
                    date.setDate(
                        date.getDate() +
                        Math.floor(Math.random() * 30) + 1
                    );

                    const day = String(date.getDate()).padStart(2, '0');
                    const month = date.toLocaleString('en-US', {
                        month: 'short'
                    });
                    const year = String(date.getFullYear()).slice(-2);

                    const futureDate = `${day}-${month}-${year}`;

                    cy.log(`Future Installment Date: ${futureDate}`);

                    cy.wrap($input).clear({ force: true }).type(futureDate, { force: true });
                });

            cy.wait(1000);
            cy.get('#fileInputChange-0').should('exist').click({ force: true });
            cy.get('input[type="file"]').first().selectFile(path, { force: true });
            cy.wait(2000);
            cy.contains('button', 'Submit').should('be.visible').click({ force: true });
        });
        cy.wait(6000);
     cy.contains('Settlement request raised successfully')
    .should('be.visible')
    .invoke('text')
    .should(
        'match',
        /Settlement request raised successfully\.\s*Your Settlement Request ID is \d+\./
    );

}

NavigateToMyactionqueue(){
    cy.contains('Settlement').click({ force: true });
    cy.wait(2000);
    cy.contains('My Action Queue').click({ force: true });
    cy.wait(2000);
    cy.contains('Under Evaluation').click({force:true});
    cy.wait(2000);
    cy.get('.form-select').select('50');
    cy.wait(2000);
    cy.get('tbody > tr').each($row => {

    const settlementId = $row.find('td:nth-child(2) .link').text().trim();
    const jaBadge = $row.find('td:nth-child(2) .badge-ja');

    if (jaBadge.length > 0) {
        cy.log(`Settlement Request ID ${settlementId} - JA Badge PRESENT`);

        expect(jaBadge.text().trim()).to.equal('JA');
    } else {
        cy.log(`Settlement Request ID ${settlementId} - JA Badge NOT PRESENT`);
    }
});
}

clickRandomJABadge(){
 cy.get('tbody > tr')
    .first()
    .then($row => {
        const jaBadge = $row.find('td:nth-child(2) .badge-ja');

        if (jaBadge.length > 0) {
            cy.log('First row has JA badge');

            cy.wrap($row)
                .find('div.form-check-group > label > input')
                .check({ force: true });
        }
    });

cy.wait(2000);
cy.get('#updateStatusBtn').should('be.enabled').click({ force: true });
}

Clickonanysettlementrequest(){
     cy.contains('Settlement').click({ force: true });
    cy.wait(2000);
    cy.contains('My Action Queue').click({ force: true });
    cy.wait(2000);
    cy.contains('Under Evaluation').click({force:true});
    cy.wait(2000);
    cy.get('.form-select').select('50');
    cy.wait(2000);
   cy.get('tbody > tr').each($row => {
    const jaBadge = $row.find('td:nth-child(2) .badge-ja');

    if (jaBadge.length > 0) {
        cy.log('JA Badge is PRESENT');

        cy.wrap($row)
            .find('div.form-check-group > label > input')
            .check({ force: true });

    } else {
        cy.log('JA Badge is NOT PRESENT');
    }
});

cy.wait(2000);
cy.get('#updateStatusBtn').should('be.enabled').click({ force: true });
}

Updatecasestatuspopup() {
    cy.contains('Update Case Status').scrollIntoView().should('exist');
    cy.wait(2000);
    cy.get('body').should('contain.text', 'Settlement ›');
    cy.wait(2000);
    cy.contains('Current Status').scrollIntoView().should('exist');
    cy.wait(2000);
    cy.contains('Action').scrollIntoView().should('exist');
    cy.wait(2000);
    cy.get('.form-field > .form-select').scrollIntoView().should('exist');
    cy.wait(2000);
    cy.get('.form-field > .form-select option').should('contain.text', 'Recommend');
    cy.wait(2000);
    cy.get('.form-field > .form-select option').should('contain.text', 'Deny');
    cy.wait(2000);
    cy.get('.form-field > .form-select option').should('contain.text', 'Renegotiate');
    cy.wait(2000);
    cy.contains('Remarks if any') .scrollIntoView() .should('exist');
    cy.wait(2000);
}

UpdateCaseStatusWithRecommend() {
    cy.get(this.locators.Action_Dropdown).scrollIntoView().should('exist') .select('Recommend');
    cy.wait(2000);
    cy.get(this.locators.Remarks_Field).scrollIntoView().should('exist').type('Recommend for further approval');
    cy.wait(2000);
    cy.get(this.locators.Update_Status_Button).scrollIntoView() .should('exist') .click({ force: true });
    cy.wait(2000);
cy.contains('Successs! Status updated').should('be.visible');    
cy.wait(2000);
}

popupshouldgetclosed(){
    cy.get(this.locators.closebutton).click({ force: true });
    cy.wait(2000);
   cy.get('.modal-body').should('not.exist');
    cy.wait(2000);
}
DenyCaseStatus() {

    cy.get(this.locators.Action_Dropdown).scrollIntoView().should('exist').select('Deny');
    cy.wait(2000);
    cy.get(this.locators.Remarks_Field).scrollIntoView().should('exist') .type('Request denied');
    cy.wait(2000);
    cy.get(this.locators.Update_Status_Button).scrollIntoView().should('exist').click({ force: true });
    cy.wait(2000);
    cy.contains('Success! Status updated').should('exist');
    cy.wait(2000);
}

RenegotiateCaseStatus() {
    const randomRemarks = faker.lorem.sentence();
    cy.get(this.locators.Action_Dropdown).scrollIntoView().should('exist').select('Renegotiate');
    cy.wait(2000);
    cy.get(this.locators.RenegotiateAmountfield).scrollIntoView().should('exist').type(randomRemarks);
    cy.wait(2000);
    cy.get(this.locators.Remarks_Field).scrollIntoView().should('exist').type('Request sent for renegotiation');
    cy.wait(2000);
    cy.get(this.locators.Update_Status_Button).scrollIntoView().should('exist').click({ force: true });
    cy.wait(2000);
    cy.contains('Re-Negotiate amount is required.').should('visible');
    cy.wait(2000);
}


RenegotiateCaseStatusvalidations() {
    
    cy.get(this.locators.Action_Dropdown).scrollIntoView().should('exist').select('Renegotiate');
    cy.wait(2000);
    cy.get(this.locators.RenegotiateAmountfield).scrollIntoView().should('exist').type('%^&%^&%^&');
    cy.wait(2000);
    cy.get(this.locators.Remarks_Field).scrollIntoView().should('exist').type('Request sent for renegotiation');
    cy.wait(2000);
    cy.get(this.locators.Update_Status_Button).scrollIntoView().should('exist').click({ force: true });
    cy.wait(2000);
    cy.contains('Re-Negotiate amount is required.').should('be.visible');
    cy.wait(2000);
}

RenegotiateCaseStatusvalid() {
    const renegotiateAmount = 10000;
    cy.get(this.locators.Action_Dropdown).scrollIntoView().should('exist').select('Renegotiate');
    cy.wait(2000);
    cy.get(this.locators.RenegotiateAmountfield).scrollIntoView().should('exist').clear().type(String(renegotiateAmount));
    cy.wait(2000);
    cy.get(':nth-child(4) > .form-field > .form-control').scrollIntoView().should('exist').type('Request sent for renegotiation');
    cy.wait(2000);
    cy.get(this.locators.Update_Status_Button).scrollIntoView().should('exist').click({ force: true });
    cy.wait(2000);
    cy.contains('Success! Status updated').scrollIntoView().should('exist');
    cy.wait(2000);
}
VerifyCityCollectionsHeadJointApprovalPopup() {
    cy.contains('Update Case Status').scrollIntoView().should('exist');
    cy.wait(2000);
    cy.contains('Settlement ›').scrollIntoView().should('exist');
    cy.wait(2000);
    cy.contains('Joint Approval Case').scrollIntoView().should('exist');
    cy.wait(2000);
    cy.contains('This case requires multiple approvers. Select your action below.').scrollIntoView().should('exist');
    cy.wait(2000);
    cy.contains('Current Status').scrollIntoView().should('exist');
    cy.wait(2000);
    cy.contains('Under Evaluation').scrollIntoView().should('exist');
    cy.wait(2000);
    cy.contains('Joint Approval').scrollIntoView().should('exist');
    cy.wait(2000);
    // cy.contains('0 of 2 approvals received').scrollIntoView().should('exist');
    cy.wait(2000);
    cy.contains('Regional Collections Head').scrollIntoView().should('exist');
    cy.wait(2000);
    cy.contains('Zonal Collections Head').scrollIntoView().should('exist');
    cy.wait(2000);
    cy.contains('Awaiting action').scrollIntoView().should('exist');
    cy.wait(2000);
    cy.contains('Action').scrollIntoView().should('exist');
    cy.wait(2000);
    cy.contains('Select Action').scrollIntoView().should('exist');
    cy.wait(2000);
    cy.contains('Approve').scrollIntoView().should('exist');
    cy.wait(2000);
    cy.contains('Reject').scrollIntoView().should('exist');
    cy.wait(2000);
    cy.contains('Only the pending joint approver for this case can submit an action.').scrollIntoView().should('exist');
    cy.wait(2000);
    cy.contains('Remarks').scrollIntoView().should('exist');
    cy.wait(2000);
}


RejectWithoutRejectionReasonandremarks() {
    cy.get(':nth-child(5) > .form-select').scrollIntoView().should('exist').select('Reject');
    cy.wait(2000);
    cy.contains('Submit').scrollIntoView().should('be.enabled').click({ force: true });
    cy.wait(2000);
    cy.contains('Rejection reason is required when rejecting a settlement.').scrollIntoView().should('exist');
    cy.wait(2000);
}

RejectWithoutRejectionReason() {
    cy.get(':nth-child(5) > .form-select').scrollIntoView().should('exist').select('Reject');
    cy.wait(2000);
    cy.get(this.locators.Remarks).type('ok');
    cy.wait(2000);
    cy.contains('Submit').scrollIntoView().should('be.enabled').click({ force: true });
    cy.wait(2000);
    cy.contains('Rejection reason is required').scrollIntoView().should('exist');
    cy.wait(2000);
}
RejectWithoutRemarks(){
    cy.get(':nth-child(5) > .form-select').scrollIntoView().should('exist').select('Reject');
    cy.wait(2000);
    cy.get(this.locators.Rejection_Reason).type('ok');
    cy.wait(2000);
    cy.contains('Submit').scrollIntoView().should('be.enabled').click({ force: true });
    cy.wait(2000);
    cy.contains('Remarks are required.').scrollIntoView().should('exist');
    cy.wait(2000);
}

ApproveWithoutRemarks() {
    cy.get(':nth-child(5) > .form-select').scrollIntoView().should('exist').select('Approve');
    cy.wait(2000);
    // cy.get(".form-control").type('ok');
    // cy.wait(2000);
    cy.contains('Submit').scrollIntoView().should('be.enabled').click({ force: true });
    cy.wait(2000);
}
ApproveWithRemarks(){
    cy.get(':nth-child(5) > .form-select').scrollIntoView().should('exist').select('Approve');
    cy.wait(2000);
    cy.get(".form-control").type('ok');
    cy.wait(2000);
    cy.contains('Submit').scrollIntoView().should('be.enabled').click({ force: true });
    cy.wait(2000);
    cy.contains('1 of 2 approvals received').should('exist');
    cy.wait(2000);
    cy.contains('Success!').should('exist');

}


Reject() {
    cy.get(':nth-child(5) > .form-select').scrollIntoView().should('exist').select('Reject');
    cy.wait(2000);
    cy.get(':nth-child(6) > .form-control').type('ok');
    cy.wait(2000);
    cy.get(':nth-child(7) > .form-control').type('ok');
    cy.wait(2000);
    cy.contains('Submit').scrollIntoView().should('be.enabled').click({ force: true });
    cy.wait(2000);
    cy.contains('Success!').scrollIntoView().should('exist');
    cy.wait(2000);
}
}

export default JointSettlementPage;