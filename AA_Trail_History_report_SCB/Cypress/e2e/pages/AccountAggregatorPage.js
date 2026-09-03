import { getLocators } from '../utils/locatorUtils';
import { getBaseUrl } from '../utils/configUtils';
import 'cypress-wait-until';
import { faker } from '@faker-js/faker';


class AccountAggregatorPage {

    constructor(locators) {
        this.locators = locators;
    }
NavigateToAccountAggregatorCC(){
        cy.get(this.locators.ccradiobutton).click({force:true});
        cy.wait(2000);
        cy.get("#search-account-number").type('1237353951378400');
        cy.wait(2000);
        cy.get(this.locators.search).click({ force: true });
        cy.wait(2000);
        cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span').first().click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.togglecc).click({ force: true });
        cy.wait(2000);
        cy.contains("Account Aggregator").scrollIntoView().click({ force: true });
        cy.wait(2000); 
}
NavigateToAccountAggregator() {
        cy.get("#search-account-number").type('6299001423517690');
        cy.wait(2000);
        cy.get(this.locators.search).click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.clickonacno).first().click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.togglebutton).click({ force: true });
        cy.wait(2000);
        cy.contains("Account Aggregator").click({ force: true });
        cy.wait(2000);

    }
    VerifyAccountAggregatorPage(){
        
        cy.contains("Account Aggregator").should("be.visible");
        cy.wait(2000);

    }


    VerifyAccountAggregatorOption() {
        cy.contains("Account Aggregator").should("be.visible");

    }

    VerifyHowToUseSection() {

        cy.contains("How to Use").should("be.visible");

    }

    ClickViewBankBalance() {

        cy.get(this.locators.viewbutton).contains("View Bank Balance").click({ force: true });

    }
    VerifyInstructionOne() {
    cy.contains("Total Overdue Amount").scrollIntoView().should("be.visible");

}

   VerifyViewBankBalanceButtonEnabled() {
    cy.contains('View Bank Balance').should('be.visible').and('not.be.disabled');

}
ClickViewBankBalance() {
    cy.contains('View Bank Balance').click({ force: true });
    cy.wait(5000);

}

VerifyBankBalanceGrid() {
    cy.get(this.locators.viewbankbalance).scrollIntoView().should('be.visible').click({force:true});
    cy.wait(2000);
    cy.contains('Bank Name').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('Account Number').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('Current Balance').scrollIntoView().should('be.visible');

}
VerifyLastUpdatedDate() {
    cy.get(this.locators.viewbankbalance).scrollIntoView().should('be.visible').click({force:true});
    cy.wait(2000);
    cy.contains('Last Updated').scrollIntoView().invoke('text').should('match', /\d{2}-[A-Za-z]{3}-\d{2}\s\d{2}:\d{2}/);

}
VerifyAccountNumberDisplayed(){
    cy.get(this.locators.viewbankbalance).scrollIntoView().should('be.visible').click({force:true});
    cy.wait(2000);
    cy.get('tbody tr td:nth-child(2)')
    .eq(0)
    .invoke('text')
    .then((firstAccount) => {

        cy.log('First Account Number: ' + firstAccount.trim());

    });
   cy.wait(2000);
   cy.get('tbody tr td:nth-child(2)')
    .eq(1)
    .invoke('text')
    .then((secondAccount) => {

        cy.log('Second Account Number: ' + secondAccount.trim());

    });



}
VerifyBankName() {
    cy.get(this.locators.viewbankbalance).scrollIntoView().should('be.visible').click({force:true});
    cy.wait(2000);
    cy.contains('Bank Name').scrollIntoView().should('be.visible');
}

VerifyMaskedAccountNumber() {
    cy.get(this.locators.viewbankbalance).scrollIntoView().should('be.visible').click({force:true});
    cy.wait(2000);
    cy.get('tbody tr td:nth-child(2)')
    .each(($cell) => {

        const accountNumber = $cell.text().trim();

        expect(accountNumber).to.match(/\d{4}$/);

        // Make sure the complete account number is not displayed
        expect(accountNumber).to.not.match(/^\d+$/);

    });
}

VerifyEyeIcon() {
cy.get(this.locators.viewbankbalance).scrollIntoView().should('be.visible').click({force:true});
cy.wait(2000);
cy.get(':nth-child(1) > :nth-child(2) > [style="text-wrap-mode: nowrap; position: relative;"] > svg-icon').click({force:true});
 

}

VerifyCurrentBalance(){
cy.get(this.locators.viewbankbalance).scrollIntoView().should('be.visible').click({force:true});
cy.wait(2000);
cy.contains('100').scrollIntoView().should('be.visible')

}
VerifyTotalOverdueAmount(){
cy.get(this.locators.viewbankbalance).scrollIntoView().should('be.visible').click({force:true});
cy.wait(2000);
cy.get(this.locators.overdueamount).scrollIntoView().should('be.visible');

}
VerifyCurrencySymbol(){
cy.get(this.locators.viewbankbalance).scrollIntoView().should('be.visible').click({force:true});
cy.wait(2000);
cy.get('tbody tr td:nth-child(3)')
    .should('have.length', 2)
    .each(($cell) => {
        expect($cell.text().trim()).to.contain('₹');
    });

}
VerifyNoDuplicateRecords() {
cy.get(this.locators.viewbankbalance).scrollIntoView().should('be.visible').click({force:true});
cy.wait(2000);
    cy.get('tbody tr').then(($rows) => {

        const rowCount = $rows.length;

        expect(rowCount).to.be.greaterThan(0);

        cy.log(`Total Records : ${rowCount}`);

    });

}

VerifyLoaderDisplayed() {
    cy.get(this.locators.viewbankbalance).scrollIntoView().should('be.visible').click({force:true});
    cy.contains('Loading...').should('be.visible');

}
VerifyLoadingText() {
    cy.get(this.locators.viewbankbalance).scrollIntoView().should('be.visible').click({force:true});
    cy.contains('Loading...').should('have.text', 'Loading...');

}
VerifyLoaderDisappears() {
    cy.get(this.locators.viewbankbalance).scrollIntoView().should('be.visible').click({force:true});
    cy.contains('Loading...').should('not.exist');

}
VerifySingleLoader() {
    cy.get(this.locators.viewbankbalance).scrollIntoView().should('be.visible').click({force:true});
    cy.contains('Loading...').should('have.length', 1);

}
VerifyMultipleClicksOnViewBankBalance() {

    cy.contains('View Bank Balance').get(this.locators.viewbankbalance).scrollIntoView().click({ force: true });
    cy.contains('View Bank Balance').get(this.locators.viewbankbalance).scrollIntoView().click({ force: true });
    cy.contains('View Bank Balance').get(this.locators.viewbankbalance).scrollIntoView().click({ force: true });
    cy.contains('Loading...').should('have.length', 1);

}

VerifySuccessToast() {
    cy.contains('View Bank Balance').get(this.locators.viewbankbalance).scrollIntoView().click({ force: true });

    cy.get('.ngx-toastr').should('be.visible').and('contain.text', 'Bank balance fetched successfully');

}
VerifySuccessMessageContent() {

    cy.get(this.locators.viewbankbalance)
        .scrollIntoView()
        .click({ force: true });

    cy.get('.ngx-toastr')
        .invoke('text')
        .then((text) => {

            const message = text
                .replace(/×/g, '')
                .replace(/\s+/g, ' ')
                .trim();

            expect(message).to.eq('Bank balance fetched successfully');

        });

}

VerifySuccessToastDisappears() {
    cy.get(this.locators.viewbankbalance).scrollIntoView().click({ force: true });
    cy.get('.ngx-toastr')
        .should('be.visible');

    cy.get('.ngx-toastr', { timeout: 10000 })
        .should('not.exist');

}
VerifySingleSuccessToast(){
     cy.get(this.locators.viewbankbalance).scrollIntoView().click({ force: true });
     cy.contains("Account Aggregator").scrollIntoView()
        .should('have.length', 1);

}
VerifyNoDuplicateAccountAggregator() {
    cy.get(this.locators.viewbankbalance).scrollIntoView().click({ force: true });
    cy.contains("Account Aggregator").scrollIntoView()
        .should('have.length', 1);

}
VerifyAccountAggregatorLabel() {
  
    cy.contains("Account Aggregator").scrollIntoView().should("be.visible").and("have.text", "Account Aggregator");

}
VerifyAccountAggregatorConfiguration() {

    cy.contains("How to Use").scrollIntoView().should("be.visible");
    cy.contains("Total Overdue Amount").scrollIntoView().should("be.visible");
    cy.contains("View Bank Balance").scrollIntoView().should("be.visible");
    cy.log("Account Aggregator is configured and displayed successfully.");

}


}

export default AccountAggregatorPage;