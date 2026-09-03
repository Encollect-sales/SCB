import { getLocators } from '../utils/locatorUtils';
import { getBaseUrl } from '../utils/configUtils';
import 'cypress-wait-until';
import { faker } from '@faker-js/faker';

class HomeProPage {

    constructor(locators) {
        this.locators = locators;
    }

    NavigateToSearchAccount() {

        cy.get(this.locators.searchAccountNumber).type("546456456");
        cy.wait(2000);
        cy.get(this.locators.searchButton).click({ force: true });
        cy.wait(2000);

    }

    VerifyLoanRadioButtonHidden() {

        cy.contains("Loan Account").should('not.exist');

    }

    VerifyCreditCardRadioButtonHidden() {

        cy.contains("Credit Card").should('not.exist');

    }

    VerifyLoanAccountNotVisibleInSearchFieldDropdown() {

    cy.get(this.locators.searchfielddropdown)
        .click({ force: true });
    cy.wait(2000);
    cy.contains('.ng-option-label', 'Loan Account')
        .should('not.exist');

}
    VerifycreditcardNotVisibleInSearchFieldDropdown() {

    cy.get(this.locators.searchfielddropdown)
        .click({ force: true });
    cy.wait(2000);
    cy.contains('.ng-option-label', 'Credit Card')
        .should('not.exist');

}
 
    

    VerifyPropertyCityField() {

        cy.get(this.locators.propertyCity).should('be.visible');

    }

    VerifyPropertyNameField() {

        cy.get(this.locators.propertyName).should('be.visible');

    }

    VerifyBuilderNameField() {

        cy.get(this.locators.builderName).should('be.visible');

    }

    VerifyBranchNameField() {

        cy.get(this.locators.branchName).should('be.visible');

    }
    NavigateToSearchField() {

        cy.contains('Select Search Fields').should('be.visible')
        cy.wait(2000);

}

   VerifySearchFieldsVisible(){
    cy.get(this.locators.searchfield).scrollIntoView().should('be.visible');
   }

VerifySearchResults() {
    cy.contains("Search Results").scrollIntoView().should('be.visible');

}
VerifySearchAccountUIAlignment() {

    // cy.contains(this.locators.searchSection).should('be.visible');
    // cy.wait(2000);
    cy.get(this.locators.customerName).scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.mobileNumber).scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.searchAccountNumber).scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.customerId).scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.builderName).scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.searchButton).should('be.visible');
    cy.wait(2000);
    cy.contains("Loan Account").should('not.exist');
    cy.wait(2000);
    cy.contains("Credit Card").should('not.exist');

}
VerifySearchFieldsVisible() {
    cy.contains('Customer ID').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('Customer Name').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('Account Number').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('Property City').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('Property Name').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('Builder Name').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('Branch Name').scrollIntoView().should('be.visible');

}
VerifyNoConsoleOrUIErrors() {

    cy.window().then((win) => {

        cy.stub(win.console, 'error').as('consoleError');

    });
    cy.wait(2000);
    cy.contains('Customer ID').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('Customer Name').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('Account Number').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.get('@consoleError').should('not.have.been.called');

}

VerifyRoleBasedRadioButtonsHidden() {

    cy.contains("Loan Account").should('not.exist');
    cy.wait(2000);
    cy.contains("Credit Card").should('not.exist');
    cy.wait(2000);
    cy.contains('Customer ID').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('Customer Name').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('Account Number').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('Property City').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('Property Name').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('Builder Name').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('Branch Name').scrollIntoView().should('be.visible');

}
VerifyPropertyCityField() {
    cy.get(this.locators.searchfield).click({ force: true });
    cy.wait(2000);
    cy.contains('div.ng-option', 'Property City').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.searchfielddropdown).click({ force: true });
    cy.wait(2000);
    cy.contains('Property City').scrollIntoView().should('be.visible');

}
VerifyBuilderNameField() {

    cy.contains('Builder Name').scrollIntoView().should('be.visible');

}
VerifyBranchNameField() {

    cy.contains('Branch Name').scrollIntoView().should('be.visible');

}

VerifyNewFieldsAreInputFields() {
    cy.get(this.locators.searchfield).click({ force: true });
    cy.wait(2000);
     cy.contains('div.ng-option', 'Property City').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.contains('div.ng-option', 'Property Name').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.searchfielddropdown).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.propertyCity).scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.propertyName).scrollIntoView().should('be.visible');
    cy.wait(2000);   
    cy.get(this.locators.builderName).scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.branchName).scrollIntoView().should('be.visible');
       

}

SearchByPropertyCity() {

    cy.get(this.locators.searchfielddropdown).click({ force: true });
    cy.wait(2000);
    cy.contains('div.ng-option', 'Property City').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(1000);
    cy.get(this.locators.searchfielddropdown).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.propertyCity).type('Visakhapatnam');
    cy.wait(2000);
    cy.get(this.locators.searchButton).click({ force: true });
    cy.wait(3000);

}


SearchByPropertyName() {

    cy.get(this.locators.searchfielddropdown) .click({ force: true });
    cy.wait(2000);
    cy.contains('div.ng-option', 'Property Name').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(1000);
    cy.get(this.locators.searchfielddropdown) .click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.propertyName).type('House');
    cy.wait(2000);
    cy.get(this.locators.searchButton).click({ force: true });
    cy.wait(3000);

}

VerifyPropertynameFieldselection() {
    cy.get(this.locators.searchfield).click({ force: true });
    cy.wait(2000);
    cy.contains('div.ng-option', 'Property Name').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.searchfielddropdown).click({ force: true });
    cy.wait(2000);
    cy.contains('Property Name').scrollIntoView().should('be.visible');

}

SearchByBuilderName() {

    cy.get(this.locators.builderName)
        .type('Mahesh goud');
    cy.wait(2000);
    cy.get(this.locators.searchButton)
        .click({ force: true });
    cy.wait(3000);

}
SearchByBranchName(){
   cy.get(this.locators.branchName).click({ force: true });
   cy.wait(2000);
   cy.get('.ng-dropdown-panel-items').contains('.ng-option', 'Delhi MAIN').scrollIntoView().should('be.visible').click({ force: true });
   cy.wait(2000); 
   cy.get(this.locators.searchButton).click({ force: true });
}


SearchByCustomerID() {
    cy.get(this.locators.customerId).type('456456546');
    cy.wait(2000);
    cy.get(this.locators.searchButton).click({ force: true });
    cy.wait(3000);

}
SearchUsingMultipleFields(){
   cy.get(this.locators.branchName).click({ force: true });
   cy.wait(2000);
   cy.get('.ng-dropdown-panel-items').contains('.ng-option', 'Delhi MAIN').scrollIntoView().should('be.visible').click({ force: true });
   cy.wait(2000); 
   cy.get(this.locators.searchButton).click({ force: true });
   cy.wait(2000);
   cy.contains("Search Results").scrollIntoView().should('be.visible');
   cy.wait(2000);
   cy.get(this.locators.customerId).type('456456546');
   cy.wait(2000);
   cy.get(this.locators.searchButton).click({ force: true });
   cy.wait(3000);
   cy.contains("Search Results").scrollIntoView().should('be.visible');
   cy.wait(2000);
   cy.get(this.locators.builderName).type('Mahesh goud');
   cy.wait(2000);
   cy.get(this.locators.searchButton).click({ force: true });
    cy.wait(2000);
    cy.contains("Search Results").scrollIntoView().should('be.visible');

}

SearchWithValidPropertyCity() {

    cy.get(this.locators.searchfielddropdown).click({ force: true });
    cy.wait(2000);
    cy.contains('div.ng-option', 'Property City').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.searchfielddropdown).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.propertyCity).clear().type('Visakhapatnam');
    cy.wait(2000);
    cy.get(this.locators.searchButton).click({ force: true });
    cy.wait(3000);
    cy.contains("Property City").get(this.locators.propertyCitygridresult).should('be.visible');
}

SearchWithValidPropertyName() {

    cy.get(this.locators.searchfielddropdown).click({ force: true });
    cy.wait(2000);
    cy.contains('div.ng-option', 'Property Name').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.searchfielddropdown).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.propertyName).clear().type('House');
    cy.wait(2000);
    cy.get(this.locators.searchButton).click({ force: true });
    cy.wait(3000);
    cy.contains("Property Name").get(this.locators.propertyNamegridresult).should('be.visible');
}

SearchWithValidBuilderName() {
    cy.wait(2000);
    cy.get(this.locators.builderName).type('Mahesh goud');
    cy.wait(2000);
    cy.get(this.locators.searchButton).click({ force: true });
    cy.wait(3000);
    cy.contains("Builder Name").get(this.locators.builderNamegridresult).scrollIntoView().should('be.visible');

}

SearchWithValidBranchName() {
   cy.wait(2000);
   cy.get(this.locators.branchName).click({ force: true });
   cy.wait(2000);
   cy.get('.ng-dropdown-panel-items').contains('.ng-option', 'Delhi MAIN').scrollIntoView().should('be.visible').click({ force: true });
   cy.wait(2000); 
   cy.get(this.locators.searchButton).click({ force: true });
   cy.wait(3000);
   cy.contains("Branch Name").get(this.locators.branchNamegridresult).scrollIntoView().should('be.visible'); 
}
VerifyImportFieldMapping(){
    
    cy.get(this.locators.searchfielddropdown).click({ force: true });
    cy.wait(2000);
    cy.contains('div.ng-option', 'Property City').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.contains('div.ng-option', 'Property Name').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.contains('div.ng-option', 'Loan Account Last 4 Digits').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.searchfielddropdown).click({ force: true });
    cy.wait(2000);
    cy.contains('Customer Name:').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('Mobile Number:').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('Account Number:').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('Customer ID:').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('Branch Name:').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('Builder Name:').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('Property City:').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('Property Name:').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('Loan Account Last 4 Digits:').scrollIntoView().should('be.visible');

}

SearchImportedPropertyCity() {
    cy.get(this.locators.cancelbutton).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Searchinputfield).type("Property City");
    cy.wait(2000);
    cy.contains('div.ng-option', 'Property City').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.searchfielddropdown).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.propertyCity).type('Visakhapatnam');
    cy.wait(2000);
    cy.get(this.locators.searchButton).click({ force: true });
    cy.wait(3000);
   

}

SearchImportedPropertyName() {

    cy.get(this.locators.cancelbutton).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Searchinputfield).type("Property Name");
    cy.wait(2000);
    cy.contains('div.ng-option', 'Property Name').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.searchfielddropdown).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.propertyName).type('House');
    cy.wait(2000);
    cy.get(this.locators.searchButton).click({ force: true });
    cy.wait(3000);

}

SearchImportedBuilderName() {

    cy.get(this.locators.cancelbutton).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Searchinputfield).type("Builder Name");
    cy.wait(2000);
    cy.contains('div.ng-option', 'Builder Name').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.searchfielddropdown).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.builderName).type('Mahesh goud');
    cy.wait(2000);
    cy.get(this.locators.searchButton).click({ force: true });
    cy.wait(3000);

}

SearchImportedBranchName() {
    cy.get(this.locators.cancelbutton).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Searchinputfield).type("Branch Name");
    cy.wait(2000);
    cy.contains('div.ng-option', 'Branch Name').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.searchfielddropdown).click({ force: true });
    cy.wait(2000);
    cy.get(".col-md-6 > .form-control-group > .form-ng-select > .ng-select-container").click({ force: true });
    cy.wait(2000);
    cy.get('.ng-dropdown-panel-items').contains('.ng-option', 'Delhi MAIN').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.searchButton).click({ force: true });
    cy.wait(3000);

}

VerifyBlankSearchForNewFields() {

    cy.get(this.locators.cancelbutton).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Searchinputfield).type("Property City");
    cy.wait(2000);
    cy.contains('div.ng-option', 'Property City').scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.searchButton).click({ force: true });
    cy.wait(3000);
    cy.get(this.locators.searchButton).should('be.visible');

}

VerifyMaximumFieldLengthValidation() {

    cy.get(this.locators.cancelbutton).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Searchinputfield).type("Property Name");
    cy.wait(2000);
    cy.contains('div.ng-option', 'Property Name').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.propertyName).type('ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ');
    cy.wait(2000);
    cy.get(this.locators.searchButton).click({ force: true });
    cy.wait(3000);
    cy.get(this.locators.propertyName).should('be.visible');

}

VerifyRoleBasedAccessToNewFields() {

    cy.get(this.locators.cancelbutton).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Searchinputfield).type("Property City");
    cy.wait(2000);
    cy.contains('div.ng-option', 'Property City').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.cancelbutton).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Searchinputfield).type("Property Name");
    cy.wait(2000);
    cy.contains('div.ng-option', 'Property Name').scrollIntoView() .should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.cancelbutton).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Searchinputfield).type("Builder Name");
    cy.wait(2000);
    cy.contains('div.ng-option', 'Builder Name').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.cancelbutton).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Searchinputfield).type("Branch Name");
    cy.wait(2000);
    cy.contains('div.ng-option', 'Branch Name').scrollIntoView() .should('be.visible');

}

VerifyCurrentBucketInGearSettings() {
    // cy.get(this.locators.searchButton).click({ force: true });
    // cy.wait(3000);
    cy.get(this.locators.gearSettings).click({ force: true });
    cy.wait(2000);
    cy.contains('Current Bucket').scrollIntoView().should('be.visible');
    cy.wait(2000);
   cy.get(":nth-child(3) > .card-content").should('not.contain', 'Current Bucket');
}

VerifyEMIAmountInGearSettings() {

    // cy.get(this.locators.searchButton).click({ force: true });
    // cy.wait(3000);
    cy.get(this.locators.gearSettings).click({ force: true });
    cy.wait(2000);
    cy.contains('EMI Amount').scrollIntoView().should('be.visible');
    cy.get(':nth-child(3) > .card-content').should('not.contain.text', 'EMI Amount');

}

VerifyMonthOpeningBucketInGearSettings() {

    // cy.get(this.locators.searchButton).click({ force: true });
    // cy.wait(3000);
    cy.get(this.locators.gearSettings).click({ force: true });
    cy.wait(2000);
    cy.contains('Month Opening Bucket').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.get(':nth-child(3) > .card-content').should('not.contain.text', 'Month Opening Bucket');

}


    VerifyTotalOverdueAmountInGearSettings() {

    // cy.get(this.locators.searchButton).click({ force: true });
    // cy.wait(3000);
    cy.get(this.locators.gearSettings).click({ force: true });
    cy.wait(2000);
    cy.contains('Total Overdue Amount').scrollIntoView() .should('be.visible');
    cy.get(':nth-child(3) > .card-content').should('not.contain.text', 'Total Overdue Amount');

}


VerifyFieldsNotDisplayedInGrid() {

    cy.get(this.locators.searchButton).click({ force: true });
    cy.wait(3000);
    cy.get('body').should('not.contain', 'Current Bucket');

    cy.get('body').should('not.contain', 'EMI Amount');

    cy.get('body').should('not.contain', 'Month Opening Bucket');

    cy.get('body').should('not.contain', 'Total Overdue Amount');

}

EnableCurrentBucketFromGearSettings() {
    // cy.get(this.locators.searchButton).click({ force: true });
    // cy.wait(3000);
    cy.get(this.locators.gearSettings).click({ force: true });
    cy.wait(2000);
    cy.contains('Current Bucket').scrollIntoView().should('be.visible').click({force:true});
    cy.wait(2000);
    cy.contains('Current Bucket').scrollIntoView().should('be.visible');

}


VerifySpecialCharactersInNewFields() {

    cy.get(this.locators.cancelbutton).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Searchinputfield).type("Property City");
    cy.wait(2000);
    cy.contains('div.ng-option', 'Property City').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.propertyCity).type('@#$%^&*!');
    cy.wait(2000);
    cy.get(this.locators.searchButton).click({ force: true });
    cy.wait(3000);
    cy.get(this.locators.searchButton).should('be.visible');

}
EnableEMIAmountFromGearSettings() {
    cy.get(this.locators.searchButton).click({ force: true });
    cy.wait(3000);
    cy.get(this.locators.gearSettings).click({ force: true });
    cy.wait(2000);
    cy.contains('EMI Amount').scrollIntoView().should('be.visible').click({force:true});
    cy.wait(2000);
    cy.contains('EMI Amount').scrollIntoView().should('be.visible');

}

EnableMonthOpeningBucketFromGearSettings() {
    // cy.get(this.locators.searchButton).click({ force: true });
    // cy.wait(3000);
    cy.get(this.locators.gearSettings).click({ force: true });
    cy.wait(2000);
    cy.contains('Month Opening Bucket').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('Month Opening Bucket').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(3000);
    cy.contains('Month Opening Bucket').scrollIntoView().should('be.visible');

}

EnableTotalOverdueAmountFromGearSettings() {
    cy.get(this.locators.gearSettings).click({ force: true });
    cy.wait(2000);
    cy.contains('Total Overdue Amount').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('Total Overdue Amount').scrollIntoView().should('be.visible').click({force:true});
    cy.wait(2000);
    cy.contains('Total Overdue Amount').scrollIntoView().should('be.visible');

}

VerifyPropertyCityColumn() {

    cy.get(this.locators.propertyCitygridresult).contains('Property City').scrollIntoView().should('be.visible');

}

VerifyPropertyNameColumn() {

    cy.get(this.locators.propertyNamegridresult).contains('Property Name').scrollIntoView().should('be.visible');

}

VerifyBranchNameColumn() {
    cy.get(this.locators.branchNamegridresult).contains('Branch Name').scrollIntoView().should('be.visible');

}

VerifyPropertyCityData() {

    cy.get("tbody tr td:nth-child(4)").contains('Visakhapatnam').scrollIntoView().should('be.visible');

}

VerifyPropertyNameData() {

    cy.get("tbody tr td:nth-child(5)").contains('House').scrollIntoView().should('be.visible');

}

VerifyBuilderNameData() {
    cy.get("tbody tr td:nth-child(6)").contains('Mahesh goud').scrollIntoView().should('be.visible');

}

VerifyBranchNameData() {
    cy.get("tbody tr td:nth-child(7)")
        .scrollIntoView({ block: 'center', inline: 'center' })
        .should(($td) => {
            expect($td.text().trim()).to.eq('Delhi Main');
        });

}

VerifyHorizontalScrolling() {
    cy.get(":nth-child(3) > .card-content").scrollTo('right');
    cy.wait(2000);
    cy.contains('Branch Name').should('exist');
    cy.contains('Property Name').should('exist');

}

VerifyPropertyCitySorting(){
    cy.get(this.locators.propertyCitygridresult).scrollIntoView().click({force:true});
}

VerifyPropertyNameSorting() {
 
    cy.get(this.locators.propertyNamegridresult).scrollIntoView().click({force:true});
}

VerifyBuilderNameSorting(){
    cy.get(this.locators.builderNamegridresult).scrollIntoView().click({force:true});

}

VerifyBranchNameSorting(){
    cy.get(this.locators.branchNamegridresult).scrollIntoView().click({force:true});
}

VerifyNoUIDistortion() {

    cy.get(this.locators.searchButton).click({ force: true });
    cy.wait(3000);
    cy.contains('Property City').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('Property Name').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('Builder Name').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('Branch Name').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.get(":nth-child(3) > .card-content").should('exist');
    cy.wait(2000);
    cy.get(":nth-child(3) > .card-content").scrollTo('right');
    cy.wait(2000);
    cy.contains('Branch Name').should('exist');

}

VerifyResetClearsNewFields() {

    cy.get(this.locators.clearbutton).click({ force: true });
    cy.wait(1000);
}

VerifyAssetDetailsIn360View() {

    cy.get(this.locators.accountnumber).click({ force: true });
    cy.wait(3000);
    cy.get(this.locators.toggle).click({force:true});
    cy.wait(2000);
    cy.contains('Asset Details').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(4000);
    cy.contains('Asset Details').scrollIntoView().should('be.visible');
    cy.contains('Property Type:').scrollIntoView().should('exist');
    cy.wait(2000);
    cy.contains('Property Details:').scrollIntoView().should('exist');
    cy.wait(2000);
    cy.contains('Property Name:').scrollIntoView().should('exist');
    cy.wait(2000);
    cy.contains('Valuation Amount:').scrollIntoView().should('exist');
    cy.wait(2000);
    cy.contains('Valuation Date:').scrollIntoView().should('exist');
    cy.wait(2000);
    cy.contains('Valuer Name:')
        .scrollIntoView()
        .should('exist');

    cy.wait(2000);
    cy.contains('Current Value:')
        .scrollIntoView()
        .should('exist');

     cy.wait(2000);
    cy.contains('Next Valuation Date:')
        .scrollIntoView()
        .should('exist');

    cy.wait(2000);
    cy.contains('LTV At Disbursal:')
        .scrollIntoView()
        .should('exist');

     cy.wait(2000);
    cy.contains('LTV Current:')
        .scrollIntoView()
        .should('exist');

     cy.wait(2000);
    cy.contains('Property Registration Number:')
        .scrollIntoView()
        .should('exist');

     cy.wait(2000);
    cy.contains('Property Description:')
        .scrollIntoView()
        .should('exist');

     cy.wait(2000);
    cy.contains('Physical Address:')
        .scrollIntoView()
        .should('exist');

     cy.wait(2000);
    cy.contains('Property Verification Tag:')
        .scrollIntoView()
        .should('exist');

    cy.wait(2000);
    cy.contains('Market Value:')
        .scrollIntoView()
        .should('exist');

    cy.wait(2000);
    cy.contains('CRO Name:')
        .scrollIntoView()
        .should('exist');

     cy.wait(2000);
    cy.contains('Sales Point Code:')
        .scrollIntoView()
        .should('exist');

    cy.wait(2000);
    cy.contains('Sales Point Name:')
        .scrollIntoView()
        .should('exist');
}
}

export default HomeProPage;