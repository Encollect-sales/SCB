import { getLocators } from '../utils/locatorUtils';
import { getBaseUrl } from '../utils/configUtils';
import path from 'path';
 
class AllocationHistoryPage {
    constructor() {
        this.locators = {}; // Initialize locators object
        this.downloadsFolder = 'cypress/downloads'; // Adjust based on your actual downloads folder
 
        // Load locators asynchronously
        getLocators('AllocationHistoryPage').then((locators) => {
            this.locators = locators;
        });
    }
 
    AccountSearch546() {
        cy.wait(2000);
        cy.get(this.locators.allocation).click();
        cy.wait(500);
        cy.get("a[title='Agency Bulk Upload']").click();

        cy.wait(1000);
        cy.get('.allocation > :nth-child(2) > :nth-child(1) > .sub-nav-list > :nth-child(2) > a').click();
        cy.wait(500);
        //cy.scrollTo('bottom');
        cy.wait(500);
        // cy.get(".card-content > :nth-child(2) > .btn").select("Allocation Template For Allocation Owner");
        cy.get('#downloadTemplateType1').click();
        cy.wait(500);
        cy.get(this.locators.downloadTemplateOfPrimaryAllocationFile).click();
    }
 
 
    // Method to upload the Excel file
    fileuploadAllocationHistory546() {
        const filePath = 'Cypress/downloads/PrimaryAgency_Customerlevel.xlsx'
        const newRowData = ['abc', 'omg', 'kyc'];
        cy.get('#allocationType1').click();
        cy.wait(1000);
        cy.get('.form-control').selectFile(filePath, { force: true });
        cy.wait(1000);
        cy.get('.card-content > :nth-child(3) > .btn').click();
        cy.wait(1000);
        cy.get(this.locators.yesconfirm1).should('be.visible').click({force :true});
        cy.wait(1000);
     
        // Return cy commands to maintain Cypress chain
        return cy.readFile(filePath, { timeout: 60000 });
      }

      AccountSearch547() {
        cy.wait(2000);
        cy.get(this.locators.allocation).click();
        cy.wait(1000);
        cy.get(this.locators.uploadCollectorAllocationBatch).click();
        cy.wait(500);
        cy.scrollTo('bottom');
        cy.wait(500);
        cy.get('.col-md-12 > .form-control').select("Allocation Template For Collection Staff");
        cy.wait(500);
        cy.get(this.locators.downloadTemplateOfPrimaryAllocationFile).click();
    }

    // Method to upload the Excel file
    fileuploadAllocationHistory547() {
        const filePath = 'Cypress/downloads/PrimaryAgency_Customerlevel.xlsx'
        const newRowData = ['abc','omg', 'kyc'];
        cy.get('#allocationType1').click();
        cy.wait(1000);
        cy.get('.form-control')
        .selectFile(filePath, { force: true });
        cy.wait(1000);
        cy.get('.card-content > :nth-child(3) > .btn').click();
        cy.wait(1000);
        cy.get(this.locators.yesconfirm1).should('be.visible').click({force :true});
        cy.wait(1000);
     
        // Return cy commands to maintain Cypress chain
        return cy.readFile(filePath, { timeout: 60000 });
      }


}
 
export default AllocationHistoryPage;
