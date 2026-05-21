import { getLocators } from '../utils/locatorUtils';
import { getBaseUrl } from '../utils/configUtils';

class PaymentPage {
constructor(locators) {
this.locators = locators;
}
         PaymentTestPage_131(){
                        cy.wait(5000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.ClickRecMonColl).click().should("be.visible");

                       
                    }

                    PaymentTestPage_132(){
                        cy.wait(5000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.ClickRecMonColl).click();
                        cy.wait(5000);
                        cy.contains("Collector Code:").should("be.visible");
                        cy.wait(5000);
                        cy.contains("Collector Name").should("be.visible");
                        cy.wait(5000);
                        cy.contains("Receipt From Date").should("be.visible");
                        cy.wait(5000);
                        cy.get(this.locators.SearchButton2).click({force:true});
                        cy.wait(5000);



                       
                    }
                    
                    PaymentTestPage_133(){
                        cy.wait(1000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(1000);
                        cy.get(this.locators.ClickRecMonColl).click();
                        cy.wait(1000);
                        cy.get('#collector-code').clear().type('5');
                        cy.get('[id^="ngb-typeahead-"] > .ng-star-inserted').first().click({ force: true });
                  cy.get(this.locators.RecDate).clear().type('29-Apr-26');
                  cy.get(this.locators.TODate).clear().type('29-Apr-26');
                        cy.wait(1000);
                        cy.get(this.locators.SearchButton2).click({force:true});
                        cy.wait(1000);
                        cy.contains("Receipt No").should("be.visible");
                        cy.wait(1000);
                        cy.contains("Product Group").should("be.visible");
                        cy.wait(1000);
                        cy.contains("Receipt Date").should("be.visible");
                        cy.wait(1000);
                        cy.contains("Customer Name").should("be.visible");
                        cy.wait(1000);
                        cy.contains("Customer Name").should("be.visible");
                        cy.wait(1000);
                        cy.get(".card-content.p-0.overflow-auto").scrollTo("right");
                        cy.wait(1000);
                        cy.contains("Mode of Payment").should("be.visible",{force:true});
                        cy.wait(5000);
                        cy.contains("Instrument No").should("be.visible",{force:true});
                        cy.wait(5000);
                        cy.contains("Drawee Bank & Drawee Branch").should("be.visible");
                        cy.wait(5000);
                        cy.contains("EMI Overdue Amount").should("be.visible");
                        cy.wait(5000);
                        cy.contains("Foreclosure Amount").should("be.visible");
                        cy.wait(5000);
                        cy.contains("Bounce Charges").should("be.visible");
                        cy.wait(5000);
                        cy.contains("Penal Amount").should("be.visible");
                        cy.wait(5000);
                        cy.contains("Settlement Amount").should("be.visible");
                        cy.wait(1000);
                        cy.contains("Others").should("be.visible");
                        cy.wait(1000);
                        cy.contains("Total Amount").should("be.visible");
                        cy.wait(1000);
                        cy.contains("Transaction Number").should("be.visible");
                        cy.wait(1000);
                        cy.get("input[class='ng-untouched ng-pristine ng-valid']").click();
                        cy.wait(1000);



                       
                    }
                    
                    PaymentTestPage_134(){
                        cy.wait(5000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(1000);
                        cy.get(this.locators.ClickRecMonColl).click();
                        cy.wait(1000);
                        cy.get(this.locators.EnterCollCode).type("21526");
                       cy.get('[id^="ngb-typeahead-"] > .ng-star-inserted').contains('21526').click({ force: true });
                        cy.wait(1000);
                        // cy.get('#collector-name').type("Branchcollectionofficer test");
                        // cy.wait(1000);
                        cy.get(this.locators.RecDate).clear().type('30-Jan-26');
                        cy.get(this.locators.TODate).clear().type('01-Feb-26');
                        cy.wait(3000);
                        cy.get(this.locators.SearchButton2).click({force:true});
                        cy.wait(1000);
                        // cy.get("input[class='ng-untouched ng-pristine ng-valid']").click();
                        // cy.wait(5000);
                        // cy.contains("Summary").should("be.visible");
                        // cy.wait(5000);
                        // cy.(this.locators.Submit).should("be.visible");
                        // cy.wait(5000);
                        // cy.get(this.locators.Cancle).should("be.visible");



                       
                    }
                    
                    PaymentTestPage_135(){
                        cy.wait(5000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(1000);
                        cy.get(this.locators.ClickRecMonColl).click();
                        cy.wait(1000);
                        cy.get(this.locators.EnterCollCode).type("210");
                        cy.wait(1000);
                        cy.get('#collector-name').type("arun");
                        cy.wait(1000);
                        cy.get(this.locators.RecDate).type("30/05/2025");
                        cy.wait(1000);
                        cy.get(this.locators.TODate).click();
                        cy.wait(1000);
                        cy.get('tbody tr:nth-child(1) td:nth-child(1) span:nth-child(1)').click();
                        cy.wait(1000);
                        cy.get(this.locators.SearchButton2).click({force:true});
                        cy.wait(1000);
                        // cy.get("input[class='ng-untouched ng-pristine ng-valid']").click();
                        // cy.wait(5000);
                        // cy.get(this.locators.Submit).click().should("be.visible");
                        // cy.wait(5000);
                        // cy.get(this.locators.ConCnacle).click();


                       
                    }

                    PaymentTestPage_136(){
                        cy.wait(1000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(1000);
                        cy.get(this.locators.ClickRecMonColl).click();
                        cy.wait(1000);
                        cy.get(this.locators.EnterCollCode).type("210");
                        cy.wait(1000);
                        cy.get('#collector-name').type("arun");
                        cy.wait(1000);
                        cy.get(this.locators.RecDate).type("30/05/2025");
                        cy.wait(1000);
                        cy.get(this.locators.TODate).click();
                        cy.wait(1000);
                        cy.get('tbody tr:nth-child(1) td:nth-child(1) span:nth-child(1)').click();
                        cy.wait(1000);
                        cy.get(this.locators.SearchButton2).click({force:true});
                        cy.wait(1000);
                        // cy.get("input[class='ng-untouched ng-pristine ng-valid']").click();
                        // cy.wait(5000);
                        // cy.get(this.locators.Cancle).click();
                        // cy.wait(5000); 
                    }

                    PaymentTestPage_137(){
                        cy.wait(1000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(1000);
                        cy.get(this.locators.BatchOfPayment).click();
                        cy.wait(1000);
                        cy.get(this.locators.CreateBOP).click();
                        cy.wait(1000);
                        
                    }

                    PaymentTestPage_138(){
                        cy.wait(5000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.BatchOfPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.CreateBOP).click();
                        cy.wait(5000);
                        cy.contains("Product Group").should("be.visible");
                        cy.wait(5000);
                        cy.contains("Payment Mode ").should("be.visible");
                        cy.wait(5000);
                        cy.contains("Collector Code").should("be.visible");
                        cy.wait(5000);
                        cy.contains("Collector Name").should("be.visible");
                        cy.wait(5000);
                        cy.contains("Date Received at Agency From Date ").should("be.visible");
                        cy.wait(5000);
                        cy.contains("Date Received at Agency To Date").should("be.visible");
                        cy.wait(5000);
                        cy.get(this.locators.SearchButton2).click({force: true} );
                        cy.wait(5000);
                        
                        
                    }

                    PaymentTestPage_139(){
                        cy.wait(1000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(1000);
                        cy.get(this.locators.BatchOfPayment).click();
                        cy.wait(1000);
                        cy.get(this.locators.CreateBOP).click();
                        cy.wait(1000);
                        cy.get(this.locators.PD_Group).select("All");
                        cy.wait(1000);
                        cy.get(this.locators.POfMode).select("CASH");
                        cy.wait(1000);
                        cy.get(this.locators.DateFrom).type("01/12/2025");
                        cy.wait(1000);
                        cy.get(this.locators.DateTo).type("04/12/2025");
                        cy.wait(1000);
                        cy.get(this.locators.SearchButton2).click({force: true} );
                        cy.wait(3000);
                        cy.contains("Receipt No").should("be.visible");
                        cy.wait(1000);
                        cy.contains("Product Group").should("be.visible");
                        cy.wait(1000);
                        cy.contains("Receipt Date").should("be.visible");
                        cy.wait(1000);
                        cy.contains("Customer Name").should("be.visible");
                        cy.wait(1000);
                        cy.contains("Customer Account No").should("be.visible");
                        cy.wait(1000);
                        cy.get(".card-content.p-0.overflow-auto").scrollTo("right");
                        cy.wait(2000);
                        // cy.contains("Mode of Payment").should("be.visible");
                        // cy.wait(5000);
                        // cy.contains("Instrument No").should("be.visible");
                        // cy.wait(5000);
                        // cy.contains("Drawee Bank & Drawee Branch").should("be.visible");
                        // cy.wait(5000);
                        // cy.contains("EMI Overdue Amount").should("be.visible");
                        // cy.wait(5000);
                        // cy.contains("Foreclosure Amount").should("be.visible");
                        // cy.wait(5000);
                        // cy.contains("Bounce Charges").should("be.visible");
                        // cy.wait(5000);
                        // cy.contains("Penal Amount").should("be.visible");
                        // cy.wait(5000);
                        cy.contains("Settlement Amount").scrollIntoView().should("be.visible");
                        cy.wait(1000);
                        cy.contains("Others").scrollIntoView().should("be.visible");
                        cy.wait(1000);
                        cy.contains("Total Amount").scrollIntoView().should("be.visible");
                        cy.wait(1000);
                        cy.contains("Transaction Number").scrollIntoView().should("be.visible");
                        cy.wait(1000);



                    }

                    PaymentTestPage_140(){
                        cy.wait(1000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(1000);
                        cy.get(this.locators.BatchOfPayment).click();
                        cy.wait(1000);
                        cy.get(this.locators.CreateBOP).click();
                        cy.wait(1000);
                        cy.get(this.locators.PD_Group).select("All");
                        cy.wait(1000);
                        cy.get(this.locators.POfMode).select("CASH");
                        cy.wait(1000);
                     cy.get(this.locators.DateFrom).clear().type('29-Apr-26');
                     cy.get(this.locators.DateTo).clear().type('29-Apr-26');
                        cy.get(this.locators.SearchButton2).click({force: true} );
                        cy.wait(3000);
                        // cy.get("tr[class='ng-star-inserted'] input[type='checkbox']").click({ multiple: true });
                        // cy.wait(1000);
                        // cy.get(this.locators.Submit).click();
                        // cy.wait(1000);
                        // cy.get(this.locators.ClickOk).click();
                        // cy.wait(1000);
                        // cy.contains("Batch created with ID:").should("be.visible");
                        // cy.wait(1000);

                    }

                    PaymentTestPage_141(){
                        cy.wait(1000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(1000);
                        cy.get(this.locators.BatchOfPayment).click();
                        cy.wait(1000);
                        cy.get(this.locators.CreateBOP).click();
                        cy.wait(1000);
                        cy.get(this.locators.PD_Group).select("All");
                        cy.wait(1000);
                        cy.get(this.locators.POfMode).select("CASH");
                        cy.wait(1000);
                        cy.get(this.locators.DateFrom).clear().type('29-Apr-26');
                        cy.get(this.locators.DateTo).clear().type('29-Apr-26');
                        cy.wait(1000);
                        cy.get(this.locators.SearchButton2).click({force: true} );
                        // cy.wait(1000);
                        // cy.get("tr[class='ng-star-inserted'] input[type='checkbox']").click({ multiple: true });
                        // cy.wait(1000);
                        // cy.get(this.locators.cancle_Button).click();
                        // cy.wait(1000);
                        // cy.contains("Account Search").should("be.visible");
                        

                    }

                    PaymentTestPage_142(){
                        cy.wait(5000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.BatchOfPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.ClickSearcAndPrint).click().should("be.visible");
                        cy.wait(5000);
                    }

                    
                    PaymentTestPage_143(){
                        cy.wait(5000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.BatchOfPayment).click();
                        cy.wait(1000);
                        cy.get(this.locators.ClickSearcAndPrint).click().should("be.visible");
                        cy.wait(1000);
                        cy.get('#search-batch-id') .click()
                        cy.wait(1000);
                          cy.get('.ng-dropdown-panel .ng-option').then(options => {
    const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1;
    cy.wrap(options[randomIndex]).click();
});
                        cy.wait(1000);
                        cy.get(this.locators.SearchButton2).click({force: true});
                        cy.wait(1000);
                        cy.contains("Batch ID").should("be.visible");
                        cy.wait(1000);
                        cy.contains("Batch Generation Date").should("be.visible");
                        cy.wait(1000);
                        cy.contains("Mode Of Payment").should("be.visible");
                        cy.wait(1000);
                        cy.contains("Batch Amount").should("be.visible");
                    }

                    PaymentTestPage_144(){
                        cy.wait(1000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(1000);
                        cy.get(this.locators.BatchOfPayment).click();
                        cy.wait(1000);
                        cy.get(this.locators.ClickDipositSlip).click();
                        cy.wait(1000);
                        cy.get(this.locators.CreateDipSlip).click();
                        cy.wait(1000);

                    }
                    PaymentTestPage_145(){
                        cy.wait(1000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(1000);
                        cy.get(this.locators.BatchOfPayment).click();
                        cy.wait(1000);
                        cy.get(this.locators.ClickDipositSlip).click();
                        cy.wait(1000);
                        cy.get(this.locators.CreateDipSlip).click();
                        cy.wait(1000);
                        cy.contains("Product Group").should("be.visible");
                        cy.wait(1000);
                        cy.contains("CMS PayIn Slip ID").should("be.visible");
                        cy.wait(1000);
                        cy.contains("Payment Mode").should("be.visible");
                        cy.wait(1000);
                        cy.contains("Deposit Account Number ").should("be.visible");
                        cy.wait(1000);
                        cy.contains("Account Holder Name").should("be.visible");
                        cy.wait(1000);
                        cy.contains("Deposit Bank Name").should("be.visible");
                        cy.wait(1000);
                        cy.contains("Deposit Branch ").should("be.visible");
                        cy.wait(1000);
                        cy.contains("Date of Deposit ").should("be.visible");
                        cy.wait(1000);
                        cy.contains("Batch ID").should("be.visible");
                        cy.wait(1000);
                        cy.get(this.locators.Pd_Group).select("All");
                        cy.wait(1000);
                       //###################################################################
                        const randomNum = Math.floor(Math.random() * 900) + 100;
    
                        // Log the random number for debugging
                        cy.log('Generated Random Number:', randomNum);
                    
                        // Example: Use the random number to fill an input field
                        cy.get(this.locators.CMSPay_In).type(randomNum.toString());

                        //###################################################################
                    
                        
                        cy.wait(1000);
                        cy.get(this.locators.Paym_mode).select("CASH");
                        cy.wait(1000);
                        cy.get(this.locators.Depo_Accoun_No).select("012000026008");
                        cy.wait(1000);
                        cy.get(this.locators.Account_Holder_name).select("My Bank");
                        cy.wait(1000);
                        cy.get(this.locators.Depo_bank_name).select("FAMILY BANK LIMITED");
                        cy.wait(1000);
                        cy.get(this.locators.DepoBranch).select("All the branches");
                        cy.wait(1000);
                        cy.get(this.locators.DepoDate).click();
                        cy.wait(1000);
                        cy.get('.today-date').click();
                        cy.wait(1000);
                        cy.get(this.locators.BatchID).click()
                        cy.wait(1000);
                        cy.get('.ng-dropdown-panel .ng-option').then(options => {
    const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1;
    cy.wrap(options[randomIndex]).click();
});
                        cy.wait(1000);
                        //cy.get(this.locators.SubmitButton).click();

                    }

                    PaymentTestPage_146(){
                        cy.wait(1000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(1000);
                        cy.get(this.locators.BatchOfPayment).click();
                        cy.wait(1000);
                        cy.get(this.locators.ClickDipositSlip).click();
                        cy.wait(1000);
                        cy.get(this.locators.CreateDipSlip).click();
                        cy.wait(1000);
                        cy.get(this.locators.Pd_Group).select("All");
                        cy.wait(1000);
                        //###################################################################
                        const randomNum = Math.floor(Math.random() * 900) + 100;
    
                        // Log the random number for debugging
                        cy.log('Generated Random Number:', randomNum);
                    
                        // Example: Use the random number to fill an input field
                        cy.get(this.locators.CMSPay_In).type(randomNum.toString());

                        //###################################################################
                        cy.wait(1000);
                        cy.get(this.locators.Paym_mode).select("CASH");
                        cy.wait(1000);
                        cy.get(this.locators.Depo_Accoun_No).select("012000026008");
                        cy.wait(1000);
                        cy.get(this.locators.Account_Holder_name).select("My Bank");
                        cy.wait(1000);
                        cy.get(this.locators.Depo_bank_name).select("FAMILY BANK LIMITED");
                        cy.wait(1000);
                        cy.get(this.locators.DepoBranch).select("All the branches");
                        cy.wait(1000);
                        cy.get(this.locators.DepoDate).click();
                        cy.wait(1000);
                        cy.get('.today-date').click();
                        cy.wait(1000);
                        cy.get(this.locators.BatchID).click()
                        cy.wait(1000);
                     cy.get('.ng-dropdown-panel .ng-option').then(options => {
    const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1;
    cy.wrap(options[randomIndex]).click();
});
                        cy.wait(1000);
                        cy.get(this.locators.SubmitButton).click();
                        cy.wait(3000);
                        cy.contains("Total Deposit Amount (₹)").should("be.visible");
                        cy.wait(1000);
                        cy.contains("Generate PayIn Slip").should("be.visible");
                        cy.wait(1000);
                        cy.get(this.locators.Reset_Section).should("be.visible");
                        cy.wait(1000);
                        cy.get(this.locators.Cancel).should("be.visible");
                        cy.wait(1000);

                    }

                    PaymentTestPage_147(){
                        cy.wait(1000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(1000);
                        cy.get(this.locators.BatchOfPayment).click();
                        cy.wait(1000);
                        cy.get(this.locators.ClickDipositSlip).click();
                        cy.wait(1000);
                        cy.get(this.locators.CreateDipSlip).click();
                        cy.wait(1000);
                        cy.get(this.locators.Pd_Group).select("All");
                        cy.wait(1000);
                         //###################################################################
                         const randomNum = Math.floor(Math.random() * 900) + 100;
    
                         // Log the random number for debugging
                         cy.log('Generated Random Number:', randomNum);
                     
                         // Example: Use the random number to fill an input field
                         cy.get(this.locators.CMSPay_In).type(randomNum.toString());
 
                         //###################################################################
                        cy.wait(1000);
                        cy.get(this.locators.Paym_mode).select("CASH");
                        cy.wait(1000);
                        cy.get(this.locators.Depo_Accoun_No).select("012000026008");
                        cy.wait(1000);
                        cy.get(this.locators.Account_Holder_name).select("My Bank");
                        cy.wait(1000);
                        cy.get(this.locators.Depo_bank_name).select("FAMILY BANK LIMITED");
                        cy.wait(1000);
                        cy.get(this.locators.DepoBranch).select("All the branches");
                        cy.wait(1000);
                        cy.get(this.locators.DepoDate).click();
                        cy.wait(1000);
                        cy.get('.today-date').click();
                        cy.wait(1000);
                        cy.get(this.locators.BatchID).click()
                        cy.wait(1000);
                     cy.get('.ng-dropdown-panel .ng-option').then(options => {
    const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1;
    cy.wrap(options[randomIndex]).click();
});
                        cy.wait(1000);
                        cy.get(this.locators.SubmitButton).click({force:true});
                        cy.wait(3000);
                        // cy.get(this.locators.generate_paySlip).click();
                        // cy.wait(5000);
                        // cy.contains("ENCollect generated Payinslip ID").should("be.visible");
                        // cy.wait(5000);
                        // cy.get(this.locators.PrintButton).click();

                        
                    }

                    PaymentTestPage_148(){
                        cy.wait(1000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(1000);
                        cy.get(this.locators.BatchOfPayment).click();
                        cy.wait(1000);
                        cy.get(this.locators.ClickDipositSlip).click();
                        cy.wait(1000);
                        cy.get(this.locators.CreateDipSlip).click();
                        cy.wait(1000);
                        cy.get(this.locators.Pd_Group).select("All");
                        cy.wait(1000);
                          //###################################################################
                          const randomNum = Math.floor(Math.random() * 900) + 100;
    
                          // Log the random number for debugging
                          cy.log('Generated Random Number:', randomNum);
                      
                          // Example: Use the random number to fill an input field
                          cy.get(this.locators.CMSPay_In).type(randomNum.toString());
  
                          //###################################################################
                        cy.wait(1000);
                        cy.get(this.locators.Paym_mode).select("CASH");
                        cy.wait(1000);
                        cy.get(this.locators.Depo_Accoun_No).select("012000026008");
                        cy.wait(1000);
                        cy.get(this.locators.Account_Holder_name).select("My Bank");
                        cy.wait(1000);
                        cy.get(this.locators.Depo_bank_name).select("FAMILY BANK LIMITED");
                        cy.wait(1000);
                        cy.get(this.locators.DepoBranch).select("All the branches");
                        cy.wait(1000);
                        cy.get(this.locators.DepoDate).click();
                        cy.wait(1000);
                        cy.get('.today-date').click();
                        cy.wait(1000);
                        cy.wait(1000);
                        cy.get(this.locators.BatchID).click();
                        cy.wait(1000);
                           cy.get('.ng-dropdown-panel .ng-option').then(options => {
    const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1;
    cy.wrap(options[randomIndex]).click();
});
                        cy.wait(1000);
                        cy.get(this.locators.SubmitButton).click().should("be.visible");
                        cy.wait(1000);
                        cy.get(this.locators.Cancel).click();
                        cy.wait(3000);
                        // cy.contains("Account Search").should("be.visible");
                       

                        
                    }

                    PaymentTestPage_149(){
                        cy.wait(1000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(1000);
                        cy.get(this.locators.BatchOfPayment).click();
                        cy.wait(1000);
                        cy.get(this.locators.ClickDipositSlip).click();
                        cy.wait(1000);
                        cy.get(this.locators.CreateDipSlip).click();
                        cy.wait(1000);
                        cy.get(this.locators.Pd_Group).select("All");
                        cy.wait(1000);
                        //###################################################################
                        const randomNum = Math.floor(Math.random() * 900) + 100;
    
                        // Log the random number for debugging
                        cy.log('Generated Random Number:', randomNum);
                    
                        // Example: Use the random number to fill an input field
                        cy.get(this.locators.CMSPay_In).type(randomNum.toString());

                        //###################################################################
                        cy.wait(1000);
                        cy.get(this.locators.Paym_mode).select("CASH");
                        cy.wait(1000);
                        cy.get(this.locators.Depo_Accoun_No).select("012000026008");
                        cy.wait(1000);
                        cy.get(this.locators.Account_Holder_name).select("My Bank");
                        cy.wait(1000);
                        cy.get(this.locators.Depo_bank_name).select("FAMILY BANK LIMITED");
                        cy.wait(1000);
                        cy.get(this.locators.DepoBranch).select("All the branches");
                        cy.wait(1000);
                        cy.get(this.locators.DepoDate).click();
                        cy.wait(1000);
                        cy.get('.today-date').click();
                        cy.wait(1000);
                        cy.wait(1000);
                        cy.get(this.locators.BatchID).click();
                        cy.wait(1000);
                        cy.get('.ng-dropdown-panel').contains('3201').click();
                        cy.wait(1000);
                        cy.get(this.locators.SubmitButton).click().should("be.visible");
                        cy.wait(3000);
                        cy.get(this.locators.Reset_Section).click();
                        cy.wait(1000);
                        cy.contains("Create Deposit Slip").should("be.visible");
                        cy.wait(1000);
                       
                       

                        
                    }
                    PaymentTestPage_150(){
                        cy.wait(1000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(1000);
                        cy.get(this.locators.BatchOfPayment).click();
                        cy.wait(1000);
                        cy.get(this.locators.ClickDipositSlip).click();
                        cy.wait(1000);
                        cy.get(this.locators.CreateDipSlip).click();
                        cy.wait(1000);
                        cy.get(this.locators.Pd_Group).select("All");
                        cy.wait(1000);
                      //###################################################################
                      const randomNum = Math.floor(Math.random() * 900) + 100;
    
                      // Log the random number for debugging
                      cy.log('Generated Random Number:', randomNum);
                  
                      // Example: Use the random number to fill an input field
                      cy.get(this.locators.CMSPay_In).type(randomNum.toString());

                      //###################################################################
                        cy.wait(1000);
                        cy.get(this.locators.Paym_mode).select("CASH");
                        cy.wait(1000);
                        cy.get(this.locators.Depo_Accoun_No).select("012000026008");
                        cy.wait(1000);
                        cy.get(this.locators.Account_Holder_name).select("My Bank");
                        cy.wait(1000);
                        cy.get(this.locators.Depo_bank_name).select("FAMILY BANK LIMITED");
                        cy.wait(1000);
                        cy.get(this.locators.DepoBranch).select("All the branches");
                        cy.wait(1000);
                        cy.get(this.locators.DepoDate).click();
                        cy.wait(1000);
                        cy.get('.today-date').click();
                        cy.wait(1000);
                        cy.wait(1000);
                        cy.get(this.locators.BatchID).click();
                        cy.wait(1000);
                           cy.get('.ng-dropdown-panel .ng-option').then(options => {
    const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1;
    cy.wrap(options[randomIndex]).click();
});
                        cy.wait(1000);
                        cy.get(this.locators.SubmitButton).click().should("be.visible");
                        cy.wait(3000);
                        cy.get(this.locators.Reset_Section).click();
                        cy.wait(1000);
                        cy.contains("Create Deposit Slip").should("be.visible");
                        cy.wait(1000);
                    }

                    PaymentTestPage_151(){
                        cy.wait(5000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.Receipts).click();
                        cy.wait(5000);
                        cy.get(this.locators.SendReceipts).click().should("be.visible");
                        cy.wait(5000);
                    }
                    PaymentTestPage_152(){
                        cy.wait(5000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.Receipts).click();
                        cy.wait(5000);
                        cy.get(this.locators.SendReceipts).click().should("be.visible");
                        cy.wait(5000);
                        
                        cy.wait(5000);
                        cy.get(this.locators.Cust_Acc_No).type("1667").should("be.visible");
                        cy.wait(5000);
                        // cy.get(this.locators.Agent_ID).type("").should("be.visible");
                        // cy.wait(5000);
                        // cy.get(this.locators.Cust_Name).type("").should("be.visible");
                        // cy.wait(5000);
                        cy.get(this.locators.From_date).type("29-Apr-26").should("be.visible");
                        cy.wait(5000);
                        cy.get(this.locators.To_date).type("29-Apr-26").should("be.visible");
                        cy.wait(5000);
                        cy.get(this.locators.SubmitButton).click({force: true});
                        cy.wait(5000);
                    }
                    PaymentTestPage_153(){
                        cy.wait(1000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(1000);
                        cy.get(this.locators.Receipts).click();
                        cy.wait(1000);
                        cy.get(this.locators.SendReceipts).click().should("be.visible");
                        cy.wait(1000);
                        cy.get(this.locators.Cust_Acc_No).type("1667").should("be.visible");
                        cy.wait(1000);
                        cy.get(this.locators.From_date).type("29-Apr-26").should("be.visible");
                        cy.wait(1000);
                        cy.get(this.locators.To_date).type("29-Apr-26").should("be.visible");
                        cy.wait(1000);
                        cy.get(this.locators.SubmitButton).click({force: true});
                        cy.wait(1000);
                        cy.contains("Receipt No").should("be.visible");
                        cy.wait(1000);
                        cy.contains("Receipt Date").should("be.visible");
                        cy.wait(1000);
                        cy.contains("Collector Name").should("be.visible");
                        cy.wait(1000);
                        cy.contains("Collector ID").should("be.visible");
                        cy.wait(1000);
                        cy.get('#grid > .card-content').scrollTo(500,0);
                        cy.wait(500);
                        // cy.contains("Customer Name").should("be.visible");
                        // cy.wait(1000);
                        cy.contains("Customer Account No").should("be.visible");
                        cy.wait(1000);
                        cy.contains("Product Name").should("be.visible");
                        cy.wait(1000);
                        cy.contains("Mode of Payment").should("be.visible");
                        cy.wait(1000);
                        cy.get('#grid > .card-content').scrollTo(1000,0);
                        cy.wait(500);
                        cy.contains("Email").should("be.visible");
                        cy.wait(1000);
                        cy.contains("Mobile").should("be.visible");
                        cy.wait(1000);
                        cy.contains("Collected Amount(₹)").should("be.visible");
                    }

                    PaymentTestPage_154(){
                        cy.wait(1000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(1000);
                        cy.get(this.locators.Receipts).click();
                        cy.wait(1000);
                        cy.get(this.locators.SendReceipts).click().should("be.visible");
                        cy.wait(1000);
                        cy.get(this.locators.From_date).type("29-Apr-26").should("be.visible");
                        cy.wait(1000);
                        cy.get(this.locators.To_date).type("29-Apr-26").should("be.visible");
                        cy.wait(1000);
                        cy.get(this.locators.Cust_Acc_No).type("1667").should("be.visible");
                        cy.wait(1000);
                        cy.get(this.locators.SubmitButton).click({force: true});
                        cy.wait(1000);
                        cy.get(':nth-child(1) > :nth-child(12) > .d-flex > .fa-envelope').click({force: true});
                        cy.wait(1000);
                        cy.contains("Email notification sent!").should("be.visible");
                        cy.wait(1000);
                        cy.get(':nth-child(1) > :nth-child(12) > .d-flex > .fa-sms').click({force: true});
                        cy.wait(1000);
                        cy.contains("SMS notification sent!").should("be.visible");
                        cy.wait(1000);
                     

                    }

                    PaymentTestPage_155(){
                        cy.wait(1000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(1000);
                        cy.get(this.locators.BatchOfPayment).click().should("be.visible");
                        cy.wait(1000);
                        cy.get(this.locators.SearchAndEdit).click().should("be.visible");
                        cy.wait(1000);

                    }
                    PaymentTestPage_156(){
                        cy.wait(1000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(1000);
                        cy.get(this.locators.BatchOfPayment).click().should("be.visible");
                        cy.wait(1000);
                        cy.get(this.locators.SearchAndEdit).click().should("be.visible");
                        cy.wait(1000);
                        cy.contains("Batch ID").should("be.visible");
                        // cy.wait(1000);
                        // cy.contains("Batch Status").should("be.visible");
                        // cy.wait(1000);
                        // cy.contains("Batch Creation From Date").should("be.visible");
                        // cy.wait(1000);
                        // cy.contains("Batch Creation To Date").should("be.visible");
                        cy.wait(1000);
                       cy.get('.ng-arrow-wrapper').click({force:true});
cy.wait(2000);
cy.get('.ng-dropdown-panel .ng-option').then(options => {
    const randomIndex = Math.floor(Math.random() * options.length);
    cy.wrap(options[randomIndex]).click();
});
cy.wait(2000);
                        cy.get(this.locators.SearchButton2).click();
                        cy.wait(1000);
                        cy.contains("Batch Details").should("be.visible");
                 
                    }

                    PaymentTestPage_157(){
                        cy.wait(1000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(1000);
                        cy.get(this.locators.BatchOfPayment).click().should("be.visible");
                        cy.wait(1000);
                        cy.get(this.locators.SearchAndEdit).click().should("be.visible");
                        cy.wait(1000);
                          cy.wait(1000);
                       cy.get('.ng-arrow-wrapper').click({force:true});
cy.wait(2000);
cy.get('.ng-dropdown-panel .ng-option').then(options => {
    const randomIndex = Math.floor(Math.random() * options.length);
    cy.wrap(options[randomIndex]).click();
});
cy.wait(2000);
                        cy.get(this.locators.SearchButton2).click();
                        cy.wait(1000);
                        cy.get(".inner-layout-container").scrollTo("bottom");
                        cy.wait(1000);
                        cy.contains("Receipt No") .scrollIntoView().should("be.visible");
                        cy.wait(1000);
                        cy.contains("Product Group").scrollIntoView().should("be.visible");
                        cy.wait(1000);
                        cy.contains("Receipt Date").scrollIntoView().should("be.visible");
                        cy.wait(1000);
                        cy.contains("Customer Name").scrollIntoView().should("be.visible");
                        cy.wait(1000);
                        cy.get(".card-content.p-0.overflow-auto").scrollTo("right");
                        cy.wait(1000);
                        // cy.contains("Customer Account No").should("be.visible");
                        // cy.wait(5000);
                        // cy.contains("Mode Of Payment").should("be.visible");
                        // cy.wait(5000);
                        // cy.contains("Instrument No").should("be.visible");
                        // cy.wait(5000);
                        // cy.contains("Instrument Date").should("be.visible");
                        // cy.wait(5000);
                        // cy.contains("Drawee Bank & Drawee Branch").should("be.visible");
                        // cy.wait(5000);
                        // cy.contains("EMI Overdue Amount").should("be.visible");
                        // cy.wait(5000);
                        // cy.contains("Foreclosure Amount").should("be.visible");
                        // cy.wait(5000);
                        // cy.contains("Bounce Charges").should("be.visible");
                        // cy.wait(5000);
                        cy.contains("Penal Amount").scrollIntoView().should("be.visible");
                        cy.wait(500);
                        cy.contains("Settlement Amount").scrollIntoView().should("be.visible");
                        cy.wait(500);
                        cy.contains("Transaction Number").scrollIntoView().should("be.visible");
                        cy.wait(500);
                        cy.get(this.locators.cancle_Button).should("be.visible");
                        cy.wait(1000);
                 
                    }

                    PaymentTestPage_158(){
                        cy.wait(1000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(1000);
                        cy.get(this.locators.BatchOfPayment).click().should("be.visible");
                        cy.wait(1000);
                        cy.get(this.locators.SearchAndEdit).click().should("be.visible");
                        cy.wait(1000);
                         cy.wait(1000);
                       cy.get('.ng-arrow-wrapper').click({force:true});
cy.wait(2000);
cy.get('.ng-dropdown-panel .ng-option').then(options => {
    const randomIndex = Math.floor(Math.random() * options.length);
    cy.wrap(options[randomIndex]).click();
});
cy.wait(2000);
                        cy.wait(1000)
                        cy.get(this.locators.SearchButton2).click();
                        cy.wait(1000);
                        cy.get("tbody > :nth-child(1) > :nth-child(1) > .form-control-group > .form-check-group > label > input").click({ force: true });
                        cy.wait(1000);
                        // cy.get(this.locators.Save).click();
                        // cy.wait(1000);
                        //cy.get(this.locators.ClickOk).click();
                    }
                    
                    PaymentTestPage_159(){
                        cy.wait(1000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(1000);
                        cy.get(this.locators.BatchOfPayment).click().should("be.visible");
                        cy.wait(1000);
                        cy.get(this.locators.SearchAndEdit).click().should("be.visible");
                        cy.wait(1000);
                         cy.get('.ng-arrow-wrapper').click({force:true});
cy.wait(2000);
cy.get('.ng-dropdown-panel .ng-option').then(options => {
    const randomIndex = Math.floor(Math.random() * options.length);
    cy.wrap(options[randomIndex]).click();
});
cy.wait(2000);
                        cy.get(this.locators.SearchButton2).click();
                        cy.wait(1000);
                        cy.get("label > .ng-untouched").eq(0).click({ force: true });
                        // cy.wait(1000);
                        // cy.get(this.locators.cancle_Button).click();
                        // cy.wait(1000);
                        // cy.contains("Account Search").scrollIntoView().should("be.visible");
                        
                    }

                    PaymentTestPage_160(){
                        cy.wait(1000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(1000);
                        cy.get(this.locators.BatchOfPayment).click().should("be.visible");
                        cy.wait(1000);
                        cy.get(this.locators.SearchAndEdit).click().should("be.visible");
                        cy.wait(1000);
                         cy.get('.ng-arrow-wrapper').click({force:true});
cy.wait(2000);
cy.get('.ng-dropdown-panel .ng-option').then(options => {
    const randomIndex = Math.floor(Math.random() * options.length);
    cy.wrap(options[randomIndex]).click();
});
cy.wait(2000);
                        cy.get(this.locators.SearchButton2).click();
                        cy.wait(1000);
                        cy.get(":nth-child(2) > :nth-child(1) > .form-control-group > .form-check-group > label > input").click({ multiple: true, force: true });
                        cy.wait(1000);
                        cy.get(this.locators.Save).click();
                        cy.wait(1000);
                        //cy.get(this.locators.ClickOk).click();
                    }

                    PaymentTestPage_161(){
                        cy.wait(5000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.BatchOfPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.ClickDipositSlip).click();
                        cy.wait(5000);
                        cy.get(this.locators.SearchAndView).click().should("be.visible");

                    }
                    PaymentTestPage_162(){
                        cy.wait(5000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.BatchOfPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.ClickDipositSlip).click();
                        cy.wait(5000);
                        cy.get(this.locators.SearchAndView).click().should("be.visible");
                        cy.wait(5000);
                        cy.contains("Product Group:").should("be.visible")
                        cy.wait(5000);
                        cy.contains("PayIn Slip No (Manual):").should("be.visible")
                        cy.wait(5000);
                        cy.contains("Mode of Payment").should("be.visible")
                        cy.wait(5000);
                        cy.contains("ENCollect PayIn Slip No").should("be.visible")
                        cy.wait(5000);
                        cy.contains("PayIn Slip From Date").should("be.visible")
                        cy.wait(5000);
                        cy.contains("PayIn Slip To Date").should("be.visible")

                    }

                    PaymentTestPage_163(){
                        cy.wait(5000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.BatchOfPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.ClickDipositSlip).click();
                        cy.wait(5000);
                        cy.get(this.locators.SearchAndView).click().should("be.visible");
                        cy.wait(5000);
                        cy.get(this.locators.Mode_of_Pay).select("CASH");
                        cy.wait(5000);
                        cy.get(this.locators.pay_in_slip_from).type("01/01/2024");
                        cy.wait(5000);
                        cy.get(this.locators.pay_in_slip_date).type("10/02/2025");
                        cy.wait(5000);
                        cy.get(this.locators.ClickOnSearch).click().click();


                    }

                    PaymentTestPage_164(){
                        cy.wait(3000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.BatchOfPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.ClickDipositSlip).click();
                        cy.wait(5000);
                        cy.get(this.locators.SearchAndView).click().should("be.visible");
                        cy.wait(5000);
                        cy.get(this.locators.Mode_of_Pay).select("CHEQUE");
                        cy.wait(5000);
                        cy.get(this.locators.pay_in_slip_from).type("01/01/2025");
                        cy.wait(5000);
                        cy.get(this.locators.pay_in_slip_date).type("01/01/2025");
                        cy.wait(5000);
                        cy.get(this.locators.ClickOnSearch).click().click();
                    }

                    PaymentTestPage_165(){
                        cy.wait(3000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.Receipts).click();
                        cy.wait(5000);
                        cy.get(this.locators.ReCipt_cancel_req).click().should("be.visible");
                        cy.wait(5000);

                    }
                    PaymentTestPage_166(){
                        cy.wait(5000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.Receipts).click();
                        cy.wait(5000);
                        cy.get(this.locators.ReCipt_cancel_req).click().should("be.visible");
                        cy.wait(5000);
                        cy.contains("Customer Account Number").should("be.visible");
                        cy.wait(5000);
                        cy.contains("Receipt Issuance From Date").should("be.visible");
                        cy.wait(5000);
                        cy.contains("Receipt Issuance To Date").should("be.visible");
                        cy.wait(5000);
                        cy.get(this.locators.Recipt_issua_fromDate).type("08/02/2025");
                        cy.wait(5000);
                        cy.get(this.locators.Recipt_issua_ToDate).type("10/02/2025");
                        cy.wait(5000);
                        cy.get(this.locators.ClickOnSearch).click();

                    }

                    PaymentTestPage_167(){
                        cy.wait(5000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.Receipts).click();
                        cy.wait(5000);
                        cy.get(this.locators.ReCipt_cancel_req).click().should("be.visible");
                        cy.wait(5000);
                        cy.get(this.locators.Recipt_issua_fromDate).type("08/02/2025");
                        cy.wait(5000);
                        cy.get(this.locators.Recipt_issua_ToDate).type("10/02/2025");
                        cy.wait(5000);
                        cy.get(this.locators.ClickOnSearch).click();

                    }

                    PaymentTestPage_168(){
                        cy.wait(3000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.Receipts).click();
                        cy.wait(5000);
                        cy.get(this.locators.Action_Recipt_cancel_req).click().should("be.visible");
                        cy.wait(5000);

                    }

                    PaymentTestPage_169(){
                        cy.wait(3000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.Receipts).click();
                        cy.wait(5000);
                        cy.get(this.locators.Action_Recipt_cancel_req).click().should("be.visible");
                        cy.wait(5000);
                        cy.contains("Customer Account Number").should("be.visible");
                        cy.wait(5000);
                        cy.contains("Receipt Issuance From Date").should("be.visible");
                        cy.wait(5000);
                        cy.contains("Receipt Issuance To Date").should("be.visible");
                        cy.wait(5000);

                    }

                    PaymentTestPage_170(){
                        cy.wait(3000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.Receipts).click();
                        cy.wait(5000);
                        cy.get(this.locators.Action_Recipt_cancel_req).click().should("be.visible");
                        cy.wait(5000);
                        cy.get(this.locators.Recipt_issua_fromDate).type("08/02/2025");
                        cy.wait(5000);
                        cy.get(this.locators.Recipt_issua_ToDate).type("10/02/2025");
                        cy.wait(5000);
                        cy.get(this.locators.ClickOnSearch).click();

                    }

                    PaymentTestPage_171(){
                        cy.wait(3000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.Receipts).click();
                        cy.wait(5000);
                        cy.get(this.locators.Action_Recipt_cancel_req).click().should("be.visible");
                        cy.wait(5000);
                        cy.get(this.locators.Recipt_issua_fromDate).type("08/02/2025");
                        cy.wait(5000);
                        cy.get(this.locators.Recipt_issua_ToDate).type("10/02/2025");
                        cy.wait(5000);
                        cy.get(this.locators.ClickOnSearch).click();

                    }

                    PaymentTestPage_172(){
                        cy.wait(3000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.Receipts).click();
                        cy.wait(5000);
                        cy.get(this.locators.Walkin_Recipt).click().should("be.visible");
                        cy.wait(5000);
                    }

                    PaymentTestPage_173(){
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.Receipts).click();
                        cy.wait(5000);
                        cy.get(this.locators.Walkin_Recipt).click().should("be.visible");
                        cy.wait(1000);
                        cy.contains("Physical Receipt No").should("be.visible");
                        cy.wait(1000);
                        cy.contains("Collector ID").should("be.visible");
                        cy.wait(1000);
                        cy.contains("Collector Name").should("be.visible");
                        cy.wait(1000);

                        cy.contains("PTP Amount").should("be.visible");
                        cy.wait(1000);
                        cy.contains("EMI Amount").should("be.visible");
                        cy.wait(1000);
                        cy.contains("POS").should("be.visible");
                        cy.wait(1000);

                        cy.contains("Penal Charges").should("be.visible");
                        cy.wait(1000);
                        cy.contains("Bounce Charges").should("be.visible");
                        cy.wait(1000);
                        cy.contains("Total EMI OS").should("be.visible");
                        cy.wait(1000);

                        cy.contains("Total Overdue").scrollIntoView().should("be.visible");
                        cy.wait(1000);
                        cy.contains("Relationship With Customer").should("be.visible");
                        cy.wait(1000);
                        cy.contains("Mode Of Payment").should("be.visible");
                        cy.wait(1000);

                        // cy.contains("Amount Description").should("be.visible");
                        // cy.wait(5000);
                        // cy.contains("Contact Information").should("be.visible");
                        // cy.wait(5000);
                        // cy.contains("Submit payment").should("be.visible");
                        // cy.wait(5000);

                        // cy.contains("Reset").should("be.visible");
                        // cy.wait(5000);
                        // cy.contains("Cancel").should("be.visible");
                        // cy.wait(5000);
                        
                    }

                    PaymentTestPage_174(){

                        cy.wait(3000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.Receipts).click();
                        cy.wait(2000);
                        cy.get(this.locators.Walkin_Recipt).click().should("be.visible");
                        cy.wait(2000);
                        cy.get(this.locators.Physical_receipt).type("1234");
                        cy.wait(2000);
                        cy.get(this.locators.Coll_Id).type("2038");
                        cy.wait(2000);
                        // cy.get('#ngb-typeahead-1-0').click();
                        // cy.wait(5000);
                        cy.get(this.locators.Cust_Acc_Number).type("1234567890");
                        cy.wait(2000);
                        cy.get(this.locators.Rel_with_Customer).select("Others");
                        cy.wait(2000);
                        cy.get(this.locators.Mode_of_payment).select("CASH",{force: true});

                        // /########################Document Upload##########
                        const filePath = 'Cypress/fixtures/Aadhar.png'
                        cy.get("input[name='attachedFile']").selectFile(filePath);
                        cy.wait(2000);
                        // ##########################################################
                        cy.get(this.locators.Emi_Over_Due).type("5000");
                        cy.wait(2000);
                        cy.get(this.locators.Email_Checkbox).click();
                        cy.wait(2000);
                        cy.get(this.locators.EnterEmail_id).type("Abc@yopmail.com");
                        cy.wait(2000);
                        cy.get(this.locators.Phone_Checkbox).click();
                        cy.wait(2000);
                        cy.get(this.locators.Enter_mobile).type("9865754678");
                        cy.wait(5000);
                        cy.get(this.locators.Submit_payment).click().should("be.visible");

                    }

                    PaymentTestPage_175(){

                        cy.wait(3000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(1000);
                        cy.get(this.locators.Receipts).click();
                        cy.wait(1000);
                        cy.get(this.locators.Walkin_Recipt).click().should("be.visible");
                        cy.wait(1000);
                        const randomNumber = Math.floor(10000000 + Math.random() * 90000000);  
                        cy.get(this.locators.Physical_receipt).type(randomNumber.toString());
                        cy.wait(1000);
                        cy.get(this.locators.Coll_Id).type("6");
                       cy.get('[id^="ngb-typeahead-"] > .ng-star-inserted').first().click({ force: true });
                        cy.wait(1000);
                        // cy.get(':nth-child(3) > .form-control-group > .form-control').type("arun");
                        // cy.wait(1000);
                        // cy.get('#ngb-typeahead-1-0').click();
                        // cy.wait(5000);
                        cy.get(this.locators.Cust_Acc_Number).type("ABCD123456");
                        cy.wait(1000);
                        cy.get(this.locators.Rel_with_Customer).select("Others");
                        cy.wait(1000);
                        cy.get(this.locators.Mode_of_payment).select("CASH",{force: true});

                        // /########################Document Upload##########
                        const filePath = 'Cypress/fixtures/Aadhar.png'
                        cy.get("input[name='attachedFile']").selectFile(filePath);
                        cy.wait(1000);
                        // ##########################################################
                        cy.get("input[name='yOverdueAmount']").type("10", { force: true });
                        cy.wait(1000);
                        cy.get(this.locators.Email_Checkbox).click();
                        cy.wait(1000);
                        cy.get(this.locators.EnterEmail_id).type("Abc@yopmail.com");
                        cy.wait(1000);
                        cy.get(this.locators.Phone_Checkbox).click();
                        cy.wait(1000);
                        cy.get(this.locators.Enter_mobile).type("9865754678");
                        cy.wait(3000);
                        cy.get(this.locators.Submit_payment).click().should("be.visible");
                        cy.wait(3000);
                        cy.get(this.locators.ClickOk).click();
                        cy.wait(5000);


                    }

                    PaymentTestPage_176(){

                        cy.wait(3000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(1000);
                        cy.get(this.locators.Receipts).click();
                        cy.wait(1000);
                        cy.get(this.locators.Walkin_Recipt).click().should("be.visible");
                        cy.wait(1000);
                        const randomNumber = Math.floor(10000000 + Math.random() * 90000000);  
                        cy.get(this.locators.Physical_receipt).type(randomNumber.toString());
                        cy.wait(1000);
                       cy.get(this.locators.Coll_Id).type("6");
                       cy.get('[id^="ngb-typeahead-"] > .ng-star-inserted').first().click({ force: true });
                        cy.wait(1000);
                        // cy.get(':nth-child(3) > .form-control-group > .form-control').type("arun");
                        // cy.wait(1000);
                        // cy.get('#ngb-typeahead-1-0').click();
                        // cy.wait(5000);
                        cy.get(this.locators.Cust_Acc_Number).type("ABCD123456");
                        cy.wait(1000);
                        cy.get(this.locators.Rel_with_Customer).select("Others");
                        cy.wait(1000);
                        cy.get(this.locators.Mode_of_payment).select("CASH",{force: true});

                        // /########################Document Upload##########
                        const filePath = 'Cypress/fixtures/Aadhar.png'
                        cy.get("input[name='attachedFile']").selectFile(filePath);
                        cy.wait(1000);
                        // ##########################################################
                        cy.get("input[name='yOverdueAmount']").type("10", { force: true });
                        cy.wait(1000);
                        cy.get(this.locators.Email_Checkbox).click();
                        cy.wait(1000);
                        cy.get(this.locators.EnterEmail_id).type("Abc@yopmail.com");
                        cy.wait(1000);
                        cy.get(this.locators.Phone_Checkbox).click();
                        cy.wait(1000);
                        cy.get(this.locators.Enter_mobile).type("9865754678");
                        cy.wait(3000);
                        cy.get(this.locators.Submit_payment).click().should("be.visible");
                        cy.wait(3000);
                        cy.get(this.locators.ConCnacle).click().should("be.visible");

                    }

                    
                    PaymentTestPage_177(){

                     cy.wait(3000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(1000);
                        cy.get(this.locators.Receipts).click();
                        cy.wait(1000);
                        cy.get(this.locators.Walkin_Recipt).click().should("be.visible");
                        cy.wait(1000);
                        const randomNumber = Math.floor(10000000 + Math.random() * 90000000);  
                        cy.get(this.locators.Physical_receipt).type(randomNumber.toString());
                        cy.wait(1000);
                         cy.get(this.locators.Coll_Id).type("6");
                       cy.get('[id^="ngb-typeahead-"] > .ng-star-inserted').first().click({ force: true });
                        cy.wait(1000);
                        // cy.get(':nth-child(3) > .form-control-group > .form-control').type("arun");
                        // cy.wait(1000);
                        // cy.get('#ngb-typeahead-1-0').click();
                        // cy.wait(5000);
                        cy.get(this.locators.Cust_Acc_Number).type("ABCD123456");
                        cy.wait(1000);
                        cy.get(this.locators.Rel_with_Customer).select("Others");
                        cy.wait(1000);
                        cy.get(this.locators.Mode_of_payment).select("CASH",{force: true});

                        // /########################Document Upload##########
                        const filePath = 'Cypress/fixtures/Aadhar.png'
                        cy.get("input[name='attachedFile']").selectFile(filePath);
                        cy.wait(1000);
                        // ##########################################################
                        cy.get("input[name='yOverdueAmount']").type("10", { force: true });
                        cy.wait(1000);
                        cy.get(this.locators.Email_Checkbox).click();
                        cy.wait(1000);
                        cy.get(this.locators.EnterEmail_id).type("Abc@yopmail.com");
                        cy.wait(1000);
                        cy.get(this.locators.Phone_Checkbox).click();
                        cy.wait(1000);
                        cy.get(this.locators.Enter_mobile).type("9865754678");
                        cy.wait(3000);
                        cy.get(this.locators.Reset).click();
                        

                    }

                    PaymentTestPage_178(){

                        cy.wait(4000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(1000);
                        cy.get(this.locators.Receipts).click();
                        cy.wait(1000);
                        cy.get(this.locators.Walkin_Recipt).click().should("be.visible");
                        cy.wait(1000);
                        cy.get(this.locators.Physical_receipt).type("123");
                        cy.wait(1000);
                        cy.get(this.locators.Physical_receipt).clear();
                        cy.wait(1000);
                        cy.contains("Please provide Physical Receipt Number").should("be.visible");

                    }

                    PaymentTestPage_179(){

                        cy.wait(4000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(1000);
                        cy.get(this.locators.Receipts).click();
                        cy.wait(1000);
                        cy.get(this.locators.Walkin_Recipt).click().should("be.visible");
                        cy.wait(1000);
                        cy.get(this.locators.Cust_Acc_Number).type("123");
                        cy.wait(1000);
                        cy.get(this.locators.Cust_Acc_Number).clear();
                        cy.wait(1000);
                        cy.contains("Please provide Customer Account Number").should("be.visible");

                    }
                    PaymentTestPage_180(){

                        cy.wait(4000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(1000);
                        cy.get(this.locators.Receipts).click();
                        cy.wait(1000);
                        cy.get(this.locators.Walkin_Recipt).click().should("be.visible");
                        cy.wait(1000);
                        cy.get(this.locators.Rel_with_Customer).select("--Select--")
                        cy.wait(1000);
                        
                        cy.contains("Please provide Relationship with customer.").should("be.visible");

                    }

                    PaymentTestPage_181(){

                        cy.wait(4000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(1000);
                        cy.get(this.locators.Receipts).click();
                        cy.wait(1000);
                        cy.get(this.locators.Walkin_Recipt).click().should("be.visible");
                        cy.wait(1000);
                        cy.get(this.locators.Mode_of_payment).select("--Select--")
                        cy.wait(1000);
                        
                        cy.contains("Please provide Mode of Payment").should("be.visible");

                    }

                    PaymentTestPage_182(){

                        cy.wait(3000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(1000);
                        cy.get(this.locators.Receipts).click();
                        cy.wait(1000);
                        cy.get(this.locators.Walkin_Recipt).click().should("be.visible");
                        cy.wait(1000);
                        cy.get(this.locators.Physical_receipt).type("12340005");
                        cy.wait(1000);
                        cy.get(this.locators.Coll_Id).type("2030");
                        cy.wait(1000);
                        cy.get(':nth-child(3) > .form-control-group > .form-control').type("arun");
                        cy.wait(1000);
                        cy.get(this.locators.Cust_Acc_Number).type("ABCD123456");
                        cy.wait(1000);
                        cy.get(this.locators.Rel_with_Customer).select("Others");
                        cy.wait(1000);
                        cy.get(this.locators.Mode_of_payment).select("CASH");

                        // /########################Document Upload##########
                        const filePath = 'Cypress/fixtures/Aadhar.png'
                        cy.get("input[name='attachedFile']").selectFile(filePath);
                        cy.wait(1000);
                        // ##########################################################
                        cy.get(this.locators.Emi_Over_Due).type("5000");
                        cy.wait(1000);
                        cy.get(this.locators.Email_Checkbox).click();
                        cy.wait(1000);
                        cy.get(this.locators.EnterEmail_id).type("Abc@yopmail.com");
                        cy.wait(1000);
                        cy.get(this.locators.Phone_Checkbox).click();
                        cy.wait(1000);
                        cy.get(this.locators.Enter_mobile).type("9865754678");
                        cy.wait(1000);
                        cy.get(this.locators.Submit_payment).click();
                        cy.wait(1000);
                        //cy.contains("Please Enter PAN Number").should("be.visible");
                        

                    }

                    PaymentTestPage_183(){

               

                        cy.wait(3000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(1000);
                        cy.get(this.locators.Receipts).click();
                        cy.wait(1000);
                        cy.get(this.locators.Walkin_Recipt).click().should("be.visible");
                        cy.wait(1000);
                        const randomNumber = Math.floor(10000000 + Math.random() * 90000000);  
                        cy.get(this.locators.Physical_receipt).type(randomNumber.toString());
                        cy.wait(1000);
                      cy.get(this.locators.Coll_Id).type("6");
                       cy.get('[id^="ngb-typeahead-"] > .ng-star-inserted').first().click({ force: true });
                        cy.wait(1000);
                        // cy.get(':nth-child(3) > .form-control-group > .form-control').type("arun");
                        // cy.wait(1000);
                        // cy.get('#ngb-typeahead-1-0').click();
                        // cy.wait(5000);
                        cy.get(this.locators.Cust_Acc_Number).type("ABCD123456");
                        cy.wait(1000);
                        cy.get(this.locators.Rel_with_Customer).select("Others");
                        cy.wait(1000);
                        cy.get(this.locators.Mode_of_payment).select("CASH",{force: true});

                        // /########################Document Upload##########
                        // const filePath = 'Cypress/fixtures/Aadhar.png'
                        // cy.get("input[name='attachedFile']").selectFile(filePath);
                        cy.wait(1000);
                        // ##########################################################
                        cy.get("input[name='yOverdueAmount']").type("10", { force: true });
                        cy.wait(1000);
                        cy.get(this.locators.Email_Checkbox).click();
                        cy.wait(1000);
                        cy.get(this.locators.EnterEmail_id).type("Abc@yopmail.com");
                        cy.wait(1000);
                        cy.get(this.locators.Phone_Checkbox).click();
                        cy.wait(1000);
                        cy.get(this.locators.Enter_mobile).type("9865754678");
                        cy.wait(3000);
                        cy.get(this.locators.Submit_payment).click().should("be.visible");
                        cy.wait(3000);
                        cy.contains("please upload physical receipt image").should("be.visible");
                        

                    }

                    PaymentTestPage_184(){

                      
                        cy.wait(3000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(1000);
                        cy.get(this.locators.Receipts).click();
                        cy.wait(1000);
                        cy.get(this.locators.Walkin_Recipt).click().should("be.visible");
                        cy.wait(1000);
                        const randomNumber = Math.floor(10000000 + Math.random() * 90000000);  
                        cy.get(this.locators.Physical_receipt).type(randomNumber.toString());
                        cy.wait(1000);
                       cy.get(this.locators.Coll_Id).type("6");
                       cy.get('[id^="ngb-typeahead-"] > .ng-star-inserted').first().click({ force: true });
                        cy.wait(1000);
                        // cy.get(':nth-child(3) > .form-control-group > .form-control').type("arun");
                        // cy.wait(1000);
                        // cy.get('#ngb-typeahead-1-0').click();
                        // cy.wait(5000);
                        cy.get(this.locators.Cust_Acc_Number).type("ABCD123456");
                        cy.wait(1000);
                        cy.get(this.locators.Rel_with_Customer).select("Others");
                        cy.wait(1000);
                        cy.get(this.locators.Mode_of_payment).select("CASH",{force: true});

                        // /########################Document Upload##########
                        const filePath = 'Cypress/fixtures/Aadhar.png'
                        cy.get("input[name='attachedFile']").selectFile(filePath);
                        cy.wait(1000);
                        // ##########################################################
                        cy.get("input[name='yOverdueAmount']").type("10", { force: true });
                        cy.wait(1000);
                        cy.get(this.locators.Email_Checkbox).click();
                        cy.wait(1000);
                        cy.get(this.locators.EnterEmail_id).type("Abc@yopmail.com");
                        cy.wait(1000);
                        cy.get(this.locators.Phone_Checkbox).click();
                        cy.wait(1000);
                        cy.get(this.locators.Enter_mobile).type("9865754678");
                        cy.wait(3000);
                        cy.get(this.locators.Submit_payment).click();
                        cy.wait(1000);
                        
                        

                    }

                    PaymentTestPage_185(){

                       cy.wait(3000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(1000);
                        cy.get(this.locators.Receipts).click();
                        cy.wait(1000);
                        cy.get(this.locators.Walkin_Recipt).click().should("be.visible");
                        cy.wait(1000);
                        const randomNumber = Math.floor(10000000 + Math.random() * 90000000);  
                        cy.get(this.locators.Physical_receipt).type(randomNumber.toString());
                        cy.wait(1000);
                     cy.get(this.locators.Coll_Id).type("6");
                       cy.get('[id^="ngb-typeahead-"] > .ng-star-inserted').first().click({ force: true });
                        cy.wait(1000);
                        // cy.get(':nth-child(3) > .form-control-group > .form-control').type("arun");
                        // cy.wait(1000);
                        // cy.get('#ngb-typeahead-1-0').click();
                        // cy.wait(5000);
                        cy.get(this.locators.Cust_Acc_Number).type("ABCD123456");
                        cy.wait(1000);
                        cy.get(this.locators.Rel_with_Customer).select("Others");
                        cy.wait(1000);
                        cy.get(this.locators.Mode_of_payment).select("CASH",{force: true});

                        // /########################Document Upload##########
                        const filePath = 'Cypress/fixtures/Aadhar.png'
                        cy.get("input[name='attachedFile']").selectFile(filePath);
                        cy.wait(1000);
                        // ##########################################################
                        cy.get("input[name='yOverdueAmount']").type("10", { force: true });
                        cy.wait(1000);
                        cy.get(this.locators.Email_Checkbox).click();
                        cy.wait(1000);
                        cy.get(this.locators.EnterEmail_id).type("Abc@yopmail.com");
                        cy.wait(1000);
                        cy.get(this.locators.Phone_Checkbox).click();
                        cy.wait(1000);
                        cy.get(this.locators.Enter_mobile).type("9865754678");
                        cy.wait(3000);
                        cy.get(this.locators.Submit_payment).click();
                        cy.wait(1000);
                        
                        

                    }

                    PaymentTestPage_186(){

                        cy.wait(3000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(1000);
                        cy.get(this.locators.BatchOfPayment).click();
                        cy.wait(1000);
                        cy.get(this.locators.Received_btach_of_payment).click();
                        cy.wait(1000);
                        cy.get(this.locators.Search_batch_id).type("3026");
                        cy.wait(1000);
                        cy.get(this.locators.Search_button).click().should("be.visible");

                    }
                    PaymentTestPage_187(){

                        cy.wait(3000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.BatchOfPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.Received_btach_of_payment).click();
                        cy.wait(5000);
                        cy.get(this.locators.Search_batch_id).type("3026");
                        cy.wait(5000);
                        cy.get(this.locators.Search_button).click().should("be.visible");

                    }
                    PaymentTestPage_188(){

                        cy.wait(3000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.BatchOfPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.Received_btach_of_payment).click();
                        cy.wait(5000);
                        cy.get(this.locators.Search_batch_id).type("3026");
                        cy.wait(5000);
                        cy.get(this.locators.Search_button).click().should("be.visible");
                        cy.wait(5000);
                        // cy.contains("Receipt No").should("be.visible");
                        // cy.wait(5000);
                        // cy.contains("Product Group").should("be.visible");
                        // cy.wait(5000);
                        // cy.contains("Receipt Date").should("be.visible");
                        // cy.wait(5000);
                        // cy.contains("Customer Name").should("be.visible");
                        // cy.wait(5000);
                        // cy.contains("Customer Account No").should("be.visible");
                        // cy.wait(5000);
                        // cy.get(".card-content.p-0.overflow-auto").scrollTo("right");
                        // cy.contains("Mode of Payment").should("be.visible");
                        // cy.wait(5000);
                        // cy.contains("Instrument No").should("be.visible");
                        // cy.wait(5000);
                        // cy.contains("Drawee Bank & Drawee Branch").should("be.visible");
                        // cy.wait(5000);
                        // cy.contains("EMI Overdue Amount").should("be.visible");
                        // cy.wait(5000);
                        // cy.contains("Foreclosure Amount").should("be.visible");
                        // cy.wait(5000);
                        // cy.contains("Bounce Charges").should("be.visible");
                        // cy.wait(5000);
                        // cy.contains("Penal Amount").should("be.visible");
                        // cy.wait(5000);
                        // cy.contains("Settlement Amount").should("be.visible");
                        // cy.wait(5000);
                        // cy.contains("Others").should("be.visible");
                        // cy.wait(5000);
                        // cy.contains("Total Amount").should("be.visible");
                        // cy.wait(5000);
                        // cy.contains("Transaction Number").should("be.visible");
                        // cy.wait(5000);
                        

                    }

                    PaymentTestPage_189(){

                        cy.wait(3000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.BatchOfPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.Received_btach_of_payment).click();
                        cy.wait(5000);
                        cy.get(this.locators.Search_batch_id).type("3128");
                        cy.wait(5000);
                        cy.get(this.locators.Search_button).click().should("be.visible");
                        cy.wait(5000);
                        // cy.get('.ng-star-inserted > :nth-child(17) > .form-control-group > .form-check-group > label > input').click();
                        // cy.wait(5000);
                        // cy.get(this.locators.Submit_butt).click();
                        // cy.wait(5000);
                        // //cy.get(this.locators.ClickOk).click();
                    }

                    PaymentTestPage_190(){

                        cy.wait(3000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.BatchOfPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.Received_btach_of_payment).click();
                        cy.wait(5000);
                        cy.get(this.locators.Search_batch_id).type("3128");
                        cy.wait(5000);
                        cy.get(this.locators.Search_button).click().should("be.visible");
                        cy.wait(5000);
                        // cy.get('.ng-star-inserted > :nth-child(17) > .form-control-group > .form-check-group > label > input').click();
                        // cy.wait(5000);
                        // cy.get(this.locators.Submit_butt).click();
                        // cy.wait(5000);
                        // cy.get(this.locators.ConCnacle).should("be.visible");
                    }

                    PaymentTestPage_191(){

                        cy.wait(3000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.Recev_Monney_from_coll).click();
                        cy.wait(5000);
                        cy.get(this.locators.Enter_Coll_code).type("@#$%");
                        cy.wait(5000);
                        cy.contains("No Field Exists!").should("be.visible");
                        cy.wait(5000);

                    }

                    PaymentTestPage_192(){

                        cy.wait(3000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.BatchOfPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.CreateBOP).click();
                        cy.wait(5000);
                        cy.get(this.locators.PD_Group).select("All");
                        cy.wait(5000);
                        cy.get(this.locators.POfMode).select("CASH");
                        cy.wait(5000);
                        cy.get(this.locators.DateFrom).type("01/01/2025");
                        cy.wait(5000);
                        cy.get(this.locators.DateTo).type("02/02/2025");
                        cy.wait(5000);
                        cy.get(this.locators.SearchButton2).click({force: true} );
                        cy.wait(5000);
                        cy.contains("No results found!").should("be.visible");
                        cy.wait(5000);

                    }
                    PaymentTestPage_193(){
                        cy.wait(5000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.BatchOfPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.ClickSearcAndPrint).click().should("be.visible");
                        cy.wait(5000);
                        cy.get('.ng-arrow-wrapper').click({force:true});
                        cy.wait(5000);
                       cy.get('.ng-dropdown-panel .ng-option').then(options => {
    const randomIndex = Math.floor(Math.random() * options.length);
    cy.wrap(options[randomIndex]).click();
});
                        cy.wait(5000);
                        cy.get(this.locators.SearchButton2).click({force: true});
                        cy.wait(5000);
                        //cy.get('tbody > .ng-star-inserted > :nth-child(1) > a').click();
                    }

                    PaymentTestPage_194(){
                        cy.wait(3000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.BatchOfPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.ClickDipositSlip).click();
                        cy.wait(5000);
                        cy.get(this.locators.SearchAndView).click().should("be.visible");
                        cy.wait(5000);
                        cy.get(this.locators.ClickOnSearch).click().click();
                        cy.wait(5000);
                        cy.contains("Please select at least one search criteria.").should("be.visible");

                    }

                    PaymentTestPage_195(){
                        cy.wait(3000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.ClickDipositSlip).click();
                        cy.wait(5000);
                        cy.get(this.locators.Acknowledge_Slip).click().should("be.visible");
                        cy.wait(5000);

                    }

                    PaymentTestPage_196(){
                        cy.wait(10000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.ClickDipositSlip).click();
                        cy.wait(5000);
                        cy.get(this.locators.Acknowledge_Slip).click().should("be.visible");
                        cy.wait(5000);
                        cy.contains("Search By CMS PayIn Slip No").should("be.visible");
                        cy.wait(1000);
                        cy.contains("Search By Amount, Mode of Payment, Deposit Date").should("be.visible");
                        cy.wait(1000);
                        cy.contains("Search").click({force: true});
                    
                    }

                    PaymentTestPage_197(){
                        cy.wait(10000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.ClickDipositSlip).click();
                        cy.wait(5000);
                        cy.get(this.locators.Acknowledge_Slip).click().should("be.visible");
                        cy.wait(5000);
                        cy.get(this.locators.Radio_Search_by_Encoll).click();
                        cy.wait(5000);
                        cy.get(this.locators.Encoll_payin_Slip_No).type("12345678900");
                        cy.wait(5000);
                        cy.get(this.locators.Search).click();
                        cy.wait(5000);
                        // cy.contains("Search Result").should("be.visible");

                    }

                    PaymentTestPage_198(){
                        cy.wait(1000);
                        cy.get(this.locators.ClickPayment).click({force:true});
                        cy.wait(1000);
                        cy.get(this.locators.ClickDipositSlip).click();
                        cy.wait(1000);
                        cy.get(this.locators.Acknowledge_Slip).click().should("be.visible");
                        cy.wait(1000);
                        cy.get(this.locators.Radio_Search_by_Encoll).click();
                        cy.wait(1000);
                        cy.get(this.locators.Encoll_payin_Slip_No).type("2451545485");
                        cy.wait(1000);
                        cy.get(this.locators.Search).click();
                        cy.wait(1000);
                        cy.contains("Deposit Slip Verified by OPS").scrollIntoView().should("be.visible");
                        cy.wait(1000);
                        cy.get('.form-check-group > label > input').click({force:true});
                        cy.wait(2000);
                        cy.contains("Clear Selection").should("be.visible");

                    }

                    PaymentTestPage_199(){
                        cy.wait(1000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(1000);
                        cy.get(this.locators.ClickDipositSlip).click();
                        cy.wait(1000);
                        cy.get(this.locators.Acknowledge_Slip).click().should("be.visible");
                        cy.wait(1000);
                        cy.get(this.locators.Radio_Search_by_Encoll).click();
                        cy.wait(1000);
                        cy.get(this.locators.Encoll_payin_Slip_No).type("2451545485");
                        cy.wait(1000);
                        cy.get(this.locators.Search).click();
                        cy.wait(1000);
                        cy.get('.form-check-group > label > input').click();
                        cy.wait(1000);
                        cy.contains("Deposit Slip Verified by OPS").click();
                        cy.wait(1000);
                       

                    }

                    PaymentTestPage_200(){
                        cy.wait(1000);
                        cy.get(this.locators.ClickPayment).click({force:true});
                        cy.wait(1000);
                       cy.get('#nav-item-2-deposit-slip').click({force:true});
                        cy.wait(2000);
                        cy.get('#nav-item-3-search-and-view-deposit-slip').click({force:true});
                        cy.wait(2000);
                        cy.get(':nth-child(1) > .form-control-group > .form-select').select('Consumer Loan');
                        cy.wait(2000);
                        cy.get('.btn').click({force:true});
                        cy.wait(2000);
                       cy.get('.pagination-count > .form-select').select("50");
                       let slipNo;   // declare outside

// Step 1: Copy from table (Page A)
cy.get('tbody tr')
  .last()
  .find('td')
  .eq(1)
  .invoke('text')
  .then((text) => {
      slipNo = text.trim();
      cy.log('Copied: ' + slipNo);
  });
             
                        cy.wait(1000);
                        cy.get(this.locators.Acknowledge_Slip).click().should("be.visible");
                        cy.wait(1000);
                        cy.get(this.locators.Radio_Search_by_Encoll).click();
                        cy.wait(1000);
                     cy.get(this.locators.Encoll_payin_Slip_No)
  .should('be.visible')
  .then(() => {
      cy.get(this.locators.Encoll_payin_Slip_No)
        .clear()
        .type(slipNo);
  });
                        cy.wait(1000);
                        cy.get(this.locators.Search).click();
                        cy.wait(1000);
                        cy.get('.form-check-group > label > input').click();
                        cy.wait(1000);
                        cy.contains("Deposit Slip Verified by OPS").click();
                        cy.wait(1000);
                        cy.get(this.locators.ClickOk).click();
                        cy.wait(1000);
                        cy.contains("PayIn Slip updated successfully.").should("be.visible");
                        cy.wait(1000);
                       

                    }

                    PaymentTestPage_201(){
                        cy.wait(10000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.ClickDipositSlip).click();
                        cy.wait(5000);
                        cy.get(this.locators.Acknowledge_Slip).click().should("be.visible");
                        cy.wait(5000);
                        cy.get(this.locators.Radio_Search_by_Encoll).click();
                        cy.wait(5000);
                        cy.get(this.locators.Encoll_payin_Slip_No).type("2451545485");
                        cy.wait(5000);
                        cy.get(this.locators.Search).click();
                        cy.wait(5000);
                        cy.get('.form-check-group > label > input').click({force:true});
                        cy.wait(5000);
                        cy.contains("Clear Selection").click();

                    }

                    PaymentTestPage_202(){
                        cy.wait(10000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.ClickDipositSlip).click();
                        cy.wait(5000);
                        cy.get(this.locators.Acknowledge_Slip).click().should("be.visible");
                        cy.wait(5000);
                        cy.contains("PayIn Slip Amount").should("be.visible");
                        cy.wait(5000);
                        cy.contains("Payment Mode").should("be.visible");
                        cy.wait(5000);
                        cy.contains("Deposit From Date").should("be.visible");
                        cy.wait(5000);
                        cy.contains("Deposit To Date").should("be.visible");
                        cy.wait(5000);

                    }

                    PaymentTestPage_203(){
                        cy.wait(10000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.ClickDipositSlip).click();
                        cy.wait(5000);
                        cy.get(this.locators.Acknowledge_Slip).click().should("be.visible");
                        cy.wait(5000);
                        cy.get(this.locators.Search).click();
                        cy.wait(5000);
                        cy.contains("Please enter search criteria.").should("be.visible");
                        cy.wait(5000);

                    }

                    PaymentTestPage_204(){
                        cy.wait(10000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.ClickDipositSlip).click();
                        cy.wait(5000);
                        cy.get(this.locators.Acknowledge_Slip).click().should("be.visible");
                        cy.wait(5000);
                        cy.get(this.locators.Radio_Search_by_Encoll).click();
                        cy.wait(5000);
                        cy.get(this.locators.Encoll_payin_Slip_No).type("@#$%");
                        cy.wait(5000);
                        cy.get(this.locators.Search).click();
                        cy.wait(500);
                        cy.contains("Invalid request payload.").should("be.visible");
                       

                    }

                    PaymentTestPage_205(){
                        cy.wait(10000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.ClickDipositSlip).click();
                        cy.wait(5000);
                        cy.get(this.locators.Acknowledge_Slip).click().should("be.visible");
                        cy.wait(5000);
                        cy.get(this.locators.Search).click();
                        cy.wait(5000);
                        cy.contains("Please enter search criteria.").should("be.visible");
                        cy.wait(5000);

                    }

                    PaymentTestPage_206(){
                        cy.wait(10000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.ClickDipositSlip).click();
                        cy.wait(5000);
                        cy.get(this.locators.Acknowledge_Slip).click().should("be.visible");
                        cy.wait(5000);
                        cy.get(this.locators.payin_Slip_ammount).type("!@#$$")
                        cy.wait(5000)
                        cy.get(this.locators.Search).click();
                        cy.wait(5000);
                        cy.contains("Please enter search criteria.").should("be.visible");
                        cy.wait(5000);

                    }

                    PaymentTestPage_207(){
                        cy.wait(5000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.Receipts).click();
                        cy.wait(5000);
                        cy.get(this.locators.SendReceipts).click().should("be.visible");
                        cy.wait(5000);
                        
                        cy.wait(5000);
                        cy.get(this.locators.Cust_Acc_No).type("68210000012749").should("be.visible");
                        cy.wait(5000);
                        cy.get(this.locators.Agent_ID).type("12344").should("be.visible");
                        cy.wait(5000);
                        cy.get(this.locators.Cust_Name).type("asdfff").should("be.visible");
                        cy.wait(5000);
                        cy.get(this.locators.From_date).type("01/11/2025").should("be.visible");
                        cy.wait(5000);
                        cy.get(this.locators.To_date).type("06/11/2025").should("be.visible");
                        cy.wait(5000);
                        cy.get(this.locators.SubmitButton).click({force: true});
                        cy.wait(500);
                        // cy.contains("No results found!").should("be.visible");

                    }

                    PaymentTestPage_208(){
                        cy.wait(5000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(2000);
                        cy.get(this.locators.Receipts).click();
                        cy.wait(2000);
                        cy.get(this.locators.SendReceipts).click().should("be.visible");
                        cy.wait(2000);
                         cy.get(this.locators.From_date).type("01-Apr-26").should("be.visible");
                        cy.wait(2000);
                        cy.get(this.locators.To_date).type("02-Apr-26").should("be.visible");
                        cy.wait(2000);
                        cy.get(this.locators.Agent_ID).type("12345").should("be.visible");
                        cy.wait(2000);
                        cy.get("button[type='submit']").click({force:true});
                        cy.wait(500);
                        cy.contains("AgreementId field is required").should("be.visible")
                    }
                    PaymentTestPage_209(){
                        cy.wait(1000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(1000);
                        cy.get(this.locators.Receipts).click();
                        cy.wait(1000);
                        cy.get(this.locators.SendReceipts).click().should("be.visible");
                        cy.wait(1000);
                        cy.get(this.locators.Agent_ID).type("@#$%").should("be.visible");
                        cy.wait(1000);
                        cy.contains("Please enter valid agent ID.").should("be.visible")
                    }
                    PaymentTestPage_210(){
                        cy.wait(1000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(1000);
                        cy.get(this.locators.Receipts).click();
                        cy.wait(1000);
                        cy.get(this.locators.SendReceipts).click().should("be.visible");
                        cy.wait(1000);
                        
                        cy.wait(1000);
                        cy.get(this.locators.Cust_Acc_No).type("68210000012749").should("be.visible");
                        cy.wait(1000);
                        cy.get(this.locators.Agent_ID).type("12344").should("be.visible");
                        cy.wait(1000);
                        cy.get(this.locators.Cust_Name).type("@#$$%").should("be.visible");
                        cy.wait(1000);
                        cy.contains("Please enter valid Customer Name.").should("be.visible");
                        cy.wait(1000);
                    }

                    PaymentTestPage_211(){
                        cy.wait(1000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(1000);
                        cy.get(this.locators.Receipts).click();
                        cy.wait(1000);
                        cy.get(this.locators.ReCipt_cancel_req).click().should("be.visible");
                        cy.wait(1000);
                      
                        cy.get(this.locators.Recipt_issua_ToDate).click();
                        cy.wait(1000);
                        cy.get('.today-date').click();
                        cy.wait(1000);
                        cy.get(this.locators.ClickOnSearch).click();
                        cy.wait(3000);
                        cy.get("tbody tr:nth-child(1) td:nth-child(1) div:nth-child(1) div:nth-child(1) label:nth-child(1) input:nth-child(1)").click();
                        cy.wait(1000);
                        cy.get(this.locators.Request_Cancel).click({ multiple: true });
                        cy.wait(1000);
                        cy.get(this.locators.Reason_of_canc).type("Nothing");
                        cy.wait(1000);
                        cy.get(this.locators.Cancle_Yes).click();
                    }
                    PaymentTestPage_212(){
                        cy.wait(5000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.Receipts).click();
                        cy.wait(5000);
                        cy.get(this.locators.ReCipt_cancel_req).click().should("be.visible");
                        cy.wait(5000);
                      
                        cy.get(this.locators.Recipt_issua_ToDate).click();
                        cy.wait(5000);
                        cy.get('.today-date').click();
                        cy.wait(5000);
                        cy.get(this.locators.ClickOnSearch).click();
                        cy.wait(5000);
                        cy.get("tbody tr:nth-child(1) td:nth-child(1) div:nth-child(1) div:nth-child(1) label:nth-child(1) input:nth-child(1)").click();
                        cy.wait(5000);
                        cy.get(this.locators.Request_Cancel).click({ multiple: true });
                        cy.wait(5000);
                        cy.get(this.locators.Reason_of_canc).type("Nothing");
                        cy.wait(5000);
                        cy.get(this.locators.Cancel_No).click();
                    }

                    PaymentTestPage_213(){
                        cy.wait(5000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.Receipts).click();
                        cy.wait(5000);
                        cy.get(this.locators.ReCipt_cancel_req).click().should("be.visible");
                        cy.wait(5000);
                      
                        
                        cy.get(this.locators.ClickOnSearch).click();
                        cy.wait(5000);
                        cy.contains("Any one of the field is mandatory").should("be.visible");
                      
                    }
                    PaymentTestPage_214(){
                        cy.wait(5000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.Receipts).click();
                        cy.wait(5000);
                        cy.get(this.locators.ReCipt_cancel_req).click().should("be.visible");
                        cy.wait(5000);
                      
                        cy.get(this.locators.Recipt_issua_ToDate).click();
                        cy.wait(5000);
                        cy.get('.today-date').click();
                        cy.wait(5000);
                        cy.get(this.locators.ClickOnSearch).click();
                        cy.wait(5000);
                        cy.wait(5000);
                        cy.get(this.locators.Request_Cancel).click({ multiple: true });
                        cy.wait(5000);
                        cy.contains("Plese select atleast one receipt!").should("be.visible");
                       
                    }

                    PaymentTestPage_215(){
                        cy.wait(5000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.Receipts).click();
                        cy.wait(5000);
                        cy.get(this.locators.Action_Recipt_cancel_req).click().should("be.visible");
                        cy.wait(5000);
                        cy.get(this.locators.Recipt_issua_ToDate).click();
                        cy.wait(5000);
                        cy.get('.today-date').click();
                        cy.wait(5000);
                        cy.get(this.locators.ClickOnSearch).click();
                        cy.wait(5000);
                        cy.get("tbody tr:nth-child(1) td:nth-child(1) div:nth-child(1) div:nth-child(1) label:nth-child(1) input:nth-child(1)").click();
                        cy.wait(5000);
                        cy.get(this.locators.Approve).click();
                        cy.wait(5000);
                        cy.get(this.locators.Reason_of_canc).type("Nothing");
                        cy.wait(5000);
                        cy.get(this.locators.Cancle_Yes).click();


                    }

                    
                    PaymentTestPage_216(){
                        cy.wait(5000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.Receipts).click();
                        cy.wait(5000);
                        cy.get(this.locators.Action_Recipt_cancel_req).click().should("be.visible");
                        cy.wait(5000);
                        cy.get(this.locators.Recipt_issua_ToDate).click();
                        cy.wait(5000);
                        cy.get('.today-date').click();
                        cy.wait(5000);
                        cy.get(this.locators.ClickOnSearch).click();
                        cy.wait(5000);
                        cy.get("select[name='itemsPerPage']").select("50");
                        cy.wait(2000);
//                       cy.get("payment-reciept-cancellation-approve-reject table tbody tr")
//   .then($rows => {
//     const idx = Math.floor(Math.random() * $rows.length);
//     cy.wrap($rows[idx])
//       .find("label")
//       .first()
//       .click({ force: true });
//   });
//                         cy.wait(2000);
//                         cy.get(this.locators.Approve).click();
//                         cy.wait(2000);
//                         cy.get(this.locators.Reason_of_canc).type("Nothing");
//                         cy.wait(2000);
//                         cy.get(this.locators.Cancel_No).click();


                    }

                    PaymentTestPage_217(){
                        cy.wait(5000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.Receipts).click();
                        cy.wait(5000);
                        cy.get(this.locators.Action_Recipt_cancel_req).click().should("be.visible");
                        cy.wait(5000);
                        cy.get(this.locators.ClickOnSearch).click();
                        cy.wait(5000);
                        cy.contains("Any one of the field is mandatory").should("be.visible");
                      
                    }

                    PaymentTestPage_218(){
                        cy.wait(5000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(5000);
                        cy.get(this.locators.Receipts).click();
                        cy.wait(5000);
                        cy.get(this.locators.Action_Recipt_cancel_req).click().should("be.visible");
                        cy.wait(5000);
                      
                        cy.get(this.locators.Recipt_issua_ToDate).click();
                        cy.wait(5000);
                        cy.get('.today-date').click();
                        cy.wait(5000);
                        cy.get(this.locators.ClickOnSearch).click();
                        cy.wait(5000);
                        cy.wait(5000);
                        cy.get(this.locators.Request_Cancel).click({ multiple: true });
                        cy.wait(5000);
                        //cy.contains("Plese select atleast one receipt!").should("be.visible");
                       
                    }
                    PaymentTestPage_219(){
                        cy.wait(1000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(1000);
                        cy.get(this.locators.BatchOfPayment).click().should("be.visible");
                        cy.wait(1000);
                        cy.get(this.locators.SearchAndEdit).click().should("be.visible");
                        cy.wait(1000);
                       cy.get('.ng-arrow-wrapper').click({force:true});

cy.get('.ng-dropdown-panel .ng-option').then(options => {
    const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1;
    cy.wrap(options[randomIndex]).click();
});
                        // cy.get(this.locators.Batch_status).select("Payment Batch Dissolved");
                        // cy.wait(1000);
                        cy.get(this.locators.SearchButton2).click();
                        cy.wait(1000);
                        cy.contains("Search Result").should("be.visible");
                 
                        
                    }
                    PaymentTestPage_220(){
                        cy.wait(1000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(1000);
                        cy.get(this.locators.BatchOfPayment).click().should("be.visible");
                        cy.wait(1000);
                        cy.get(this.locators.SearchAndEdit).click().should("be.visible");
                        cy.wait(1000);
                        cy.get('.ng-arrow-wrapper').click({force:true});

cy.get('.ng-dropdown-panel .ng-option').then(options => {
    const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1;
    cy.wrap(options[randomIndex]).click();
});
                        cy.wait(1000);
                        cy.get(this.locators.SearchButton2).click();
                        cy.wait(1000);
                        cy.contains("Search Result").should("be.visible");
                 
                        
                    }
                    PaymentTestPage_221(){
                        cy.wait(1000);
                        cy.get(this.locators.ClickPayment).click();
                        cy.wait(1000);
                        cy.get(this.locators.BatchOfPayment).click().should("be.visible");
                        cy.wait(1000);
                        cy.get(this.locators.SearchAndEdit).click().should("be.visible");
                        cy.wait(1000);
                          cy.get('.ng-arrow-wrapper').click({force:true});

cy.get('.ng-dropdown-panel .ng-option').then(options => {
    const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1;
    cy.wrap(options[randomIndex]).click();
});
                        cy.get(this.locators.SearchButton2).click();
                        cy.wait(1000);
                        cy.contains("Search Result").should("be.visible");
                 
                        
                    }



}

export default PaymentPage;