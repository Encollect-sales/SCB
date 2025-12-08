import { getLocators } from "../utils/locatorUtils";
import { getBaseUrl } from "../utils/configUtils";
const path = require("path");
import { faker } from '@faker-js/faker';

class IssueReceiptPage {
  constructor(locators) {
    this.locators = locators;
  }

IssueReceiptTestPage_01(){

    cy.get(this.locators.ClickOnPayment).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnReceipts).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnWalk_in_cus).click();
    cy.wait(1000);

 const randomNumber = faker.number.int({ min: 1000, max: 999999 });

cy.get(this.locators.ClickOn_Physical_Rec_no).type(randomNumber.toString());
cy.wait(2000);
cy.get(this.locators.ClickOn_Collec_Id).type(2, {force: true});
    cy.wait(2000);
    cy.get("h5[class='ng-star-inserted']").first().click({force: true});
    cy.wait(1000);
cy.get(this.locators.ClickOnCus_Acc_Num).type("68210000012749");
    cy.wait(3000);
    
    cy.get(this.locators.Select_Relationship_with_Cus).select("Herself/Himself");
    cy.wait(1000);
    cy.get(this.locators.Select_Mode_Of_Payment).select("CASH");
    cy.wait(1000);
    cy.get(this.locators.Type_EMI_Overdue).type("50000");
    cy.wait(1000);
    cy.get(this.locators.ClickOn_TotalAmt).click({force: true});
    cy.wait(1000);

   const filePath= 'Aadhar.png'
    cy.get('.card-content > :nth-child(1) > .form-control').click();
    cy.wait(2000);
    cy.get('input[type="file"]').attachFile(filePath);
    cy.wait(2000);

    cy.get(this.locators.Type_Pan_Num).type("panca9614b");
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Submit_Payment).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnOkay).click();
    cy.wait(9000);

    cy.get('.btn-primary').click();
    cy.wait(4000);

cy.get(this.locators.ClickOn_Physical_Rec_no).type(randomNumber.toString());
cy.wait(2000);
cy.get(this.locators.ClickOn_Collec_Id).type(2, {force: true});
    cy.wait(2000);
    cy.get("h5[class='ng-star-inserted']").first().click({force: true});
    cy.wait(1000);
cy.get(this.locators.ClickOnCus_Acc_Num).type("68210000012749");
    cy.wait(3000);
    cy.get(this.locators.Select_Relationship_with_Cus).select("Herself/Himself");
    cy.wait(1000);
    cy.get(this.locators.Select_Mode_Of_Payment).select("CASH");
    cy.wait(1000);
    cy.get(this.locators.Type_EMI_Overdue).type("50000");
    cy.wait(1000);
    cy.get(this.locators.ClickOn_TotalAmt).click({force: true});
    cy.wait(1000);

   const filePath1= 'Aadhar.png'
    cy.get('.card-content > :nth-child(1) > .form-control').click();
    cy.wait(2000);
    cy.get('input[type="file"]').attachFile(filePath1);
    cy.wait(2000);

    cy.get(this.locators.Type_Pan_Num).type("panca9614b");
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Submit_Payment).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnOkay).click();
    cy.wait(4000);
    cy.get(this.locators.ClickOnPayment).click();
    cy.wait(3000); 

}

IssueReceiptTestPage_02(){

     cy.get(this.locators.ClickOnPayment).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnReceipts).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnWalk_in_cus).click();
    cy.wait(1000);
    const randomNumber = faker.number.int({ min: 1000, max: 999999 });

cy.get(this.locators.ClickOn_Physical_Rec_no).type(randomNumber.toString());
cy.wait(2000);
cy.get(this.locators.ClickOn_Collec_Id).type(2, {force: true});
    cy.wait(2000);
    cy.get("h5[class='ng-star-inserted']").first().click({force: true});
    cy.wait(1000);
cy.get(this.locators.ClickOnCus_Acc_Num).type("68210000012749");
    cy.wait(3000);
    cy.get(this.locators.Select_Relationship_with_Cus).select("Herself/Himself");
    cy.wait(1000);
    cy.get(this.locators.Select_Mode_Of_Payment).select("CASH");
    cy.wait(1000);
    cy.get(this.locators.Type_EMI_Overdue).type("199000");
    cy.wait(1000);
    cy.get(this.locators.ClickOn_TotalAmt).click({force: true});
    cy.wait(1000);

   const filePath= 'Aadhar.png'
    cy.get('.card-content > :nth-child(1) > .form-control').click();
    cy.wait(2000);
    cy.get('input[type="file"]').attachFile(filePath);
    cy.wait(2000);

    cy.get(this.locators.Type_Pan_Num).type("panca9614b");
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Submit_Payment).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnOkay).click();
    cy.wait(4000);
    cy.get('[role="alert"]')
      .should('be.visible')
      .and('contain', 'As per RBI guidelines, you are not permitted to collect a total amount of more than Rs. 1,99,999 in cash in a day or in a single transaction. Your pending limit for today is Rs. 199999.');
    cy.get(this.locators.ClickOnPayment).click();
    cy.wait(3000); 
}

IssueReceiptTestPage_03(){

      cy.get(this.locators.ClickOnPayment).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnReceipts).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnWalk_in_cus).click();
    cy.wait(1000);
    const randomNumber = faker.number.int({ min: 1000, max: 999999 });

cy.get(this.locators.ClickOn_Physical_Rec_no).type(randomNumber.toString());
cy.wait(2000);
cy.get(this.locators.ClickOn_Collec_Id).type(2, {force: true});
    cy.wait(2000);
    cy.get("h5[class='ng-star-inserted']").first().click({force: true});
    cy.wait(1000);
cy.get(this.locators.ClickOnCus_Acc_Num).type("68210000012749");
    cy.wait(3000);
    cy.get(this.locators.Select_Relationship_with_Cus).select("Herself/Himself");
    cy.wait(1000);
    cy.get(this.locators.Select_Mode_Of_Payment).select("CASH");
    cy.wait(1000);
    cy.get(this.locators.Type_EMI_Overdue).type("250000");
    cy.wait(1000);
    cy.get(this.locators.ClickOn_TotalAmt).click({force: true});
    cy.wait(1000);

   const filePath= 'Aadhar.png'
    cy.get('.card-content > :nth-child(1) > .form-control').click();
    cy.wait(2000);
    cy.get('input[type="file"]').attachFile(filePath);
    cy.wait(2000);

    cy.get(this.locators.Type_Pan_Num).type("panca9614b");
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Submit_Payment).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnOkay).click();
    cy.wait(3000);
    cy.get('[role="alert"]')
      .should('be.visible')
      .and('contain', 'As per RBI guidelines, you are not permitted to collect a total amount of more than Rs. 1,99,999 in cash in a day or in a single transaction. Your pending limit for today is Rs. 199999.');


}

IssueReceiptTestPage_04(){

    cy.get(this.locators.ClickOnPayment).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnReceipts).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnWalk_in_cus).click();
    cy.wait(1000);
    const randomNumber = faker.number.int({ min: 1000, max: 999999 });

cy.get(this.locators.ClickOn_Physical_Rec_no).type(randomNumber.toString());
cy.wait(2000);
cy.get(this.locators.ClickOn_Collec_Id).type(2, {force: true});
    cy.wait(2000);
    cy.get("h5[class='ng-star-inserted']").first().click({force: true});
    cy.wait(1000);
cy.get(this.locators.ClickOnCus_Acc_Num).type("68210000012749");
    cy.wait(3000);
    cy.get(this.locators.Select_Relationship_with_Cus).select("Herself/Himself");
    cy.wait(1000);
    cy.get(this.locators.Select_Mode_Of_Payment).select("CASH");
    cy.wait(1000);
    cy.get(this.locators.Type_EMI_Overdue).type("50000");
    cy.wait(1000);
    cy.get(this.locators.ClickOn_TotalAmt).click({force: true});
    cy.wait(1000);

   const filePath= 'Aadhar.png'
    cy.get('.card-content > :nth-child(1) > .form-control').click();
    cy.wait(2000);
    cy.get('input[type="file"]').attachFile(filePath);
    cy.wait(2000);

    cy.get(this.locators.Type_Pan_Num).type("panca9614b");
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Submit_Payment).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnOkay).click();
    cy.wait(4000);
    cy.get('.card-content').should("be.visible");
    cy.wait(3000);
    cy.get(this.locators.ClickOnPayment).click();
    cy.wait(3000);


}

IssueReceiptTestPage_05(){

     cy.get(this.locators.ClickOnPayment).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnReceipts).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnWalk_in_cus).click();
    cy.wait(1000);
    const randomNumber = faker.number.int({ min: 1000, max: 999999 });

cy.get(this.locators.ClickOn_Physical_Rec_no).type(randomNumber.toString());
cy.wait(2000);
cy.get(this.locators.ClickOn_Collec_Id).type(2, {force: true});
    cy.wait(2000);
    cy.get("h5[class='ng-star-inserted']").first().click({force: true});
    cy.wait(1000);
cy.get(this.locators.ClickOnCus_Acc_Num).type("68210000012749");
    cy.wait(3000);
    cy.get(this.locators.Select_Relationship_with_Cus).select("Herself/Himself");
    cy.wait(1000);
    cy.get(this.locators.Select_Mode_Of_Payment).select("CASH");
    cy.wait(1000);
    cy.get(this.locators.Type_EMI_Overdue).type("50000");
    cy.wait(1000);
    cy.get(this.locators.ClickOn_TotalAmt).click({force: true});
    cy.wait(1000);

   const filePath= 'Aadhar.png'
    cy.get('.card-content > :nth-child(1) > .form-control').click();
    cy.wait(2000);
    cy.get('input[type="file"]').attachFile(filePath);
    cy.wait(2000);

    cy.get(this.locators.Type_Pan_Num).type("panca9614b");
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Submit_Payment).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnOkay).click();
    cy.wait(4000);

    cy.get('.btn-primary').click();
    cy.wait(4000);
     cy.get(this.locators.ClickOnCus_Acc_Num).type("68200000020152");
    cy.wait(3000);
    cy.get(this.locators.ClickOn_Physical_Rec_no).type("565247");
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Collec_Id).type(2235);
    cy.wait(2000);
    cy.get("h5[class='ng-star-inserted']").click();
    cy.wait(1000);
    cy.get(this.locators.Select_Relationship_with_Cus).select("Herself/Himself");
    cy.wait(1000);
    cy.get(this.locators.Select_Mode_Of_Payment).select("CASH");
    cy.wait(1000);
    cy.get(this.locators.Type_EMI_Overdue).type("50000");
    cy.wait(1000);
    cy.get(this.locators.ClickOn_TotalAmt).click({force: true});
    cy.wait(1000);

   const filePath1= 'Aadhar.png'
    cy.get('.card-content > :nth-child(1) > .form-control').click();
    cy.wait(2000);
    cy.get('input[type="file"]').attachFile(filePath1);
    cy.wait(2000);

    cy.get(this.locators.Type_Pan_Num).type("panca9614b");
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Submit_Payment).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnOkay).click();
    cy.wait(9000);
    cy.get(this.locators.ClickOnPayment).click();
    cy.wait(3000); 

}

IssueReceiptTestPage_06(){

 cy.get(this.locators.ClickOnPayment).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnReceipts).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnWalk_in_cus).click();
    cy.wait(1000);
   const randomNumber = faker.number.int({ min: 1000, max: 999999 });

cy.get(this.locators.ClickOn_Physical_Rec_no).type(randomNumber.toString());
cy.wait(2000);
cy.get(this.locators.ClickOn_Collec_Id).type(2, {force: true});
    cy.wait(2000);
    cy.get("h5[class='ng-star-inserted']").first().click({force: true});
    cy.wait(1000);
cy.get(this.locators.ClickOnCus_Acc_Num).type("68210000012749");
    cy.wait(3000);
    cy.get(this.locators.Select_Relationship_with_Cus).select("Herself/Himself");
    cy.wait(1000);
    cy.get(this.locators.Select_Mode_Of_Payment).select("ONLINE PAYMENT");
    cy.wait(1000);
    cy.get(this.locators.Select_Payment_Partner).select("Paynimo");
    cy.wait(2000);
    cy.get(this.locators.Type_EMI_Overdue).type("50000");
    cy.wait(1000);
    cy.get(this.locators.ClickOn_TotalAmt).click({force: true});
    cy.wait(1000);

   const filePath= 'Aadhar.png'
    cy.get('.card-content > :nth-child(1) > .form-control').click();
    cy.wait(2000);
    cy.get('input[type="file"]').attachFile(filePath);
    cy.wait(2000);

    cy.get(this.locators.Type_Pan_Num).type("panca9614b");
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Submit_Payment).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnOkay).click();
    cy.wait(3000);
    cy.get(this.locators.ClickOnPayment).click();
    cy.wait(3000);

}

IssueReceiptTestPage_07(){

    cy.get(this.locators.ClickOnPayment).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnReceipts).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnWalk_in_cus).click();
    cy.wait(1000);
   const randomNumber = faker.number.int({ min: 1000, max: 999999 });

cy.get(this.locators.ClickOn_Physical_Rec_no).type(randomNumber.toString());
cy.wait(2000);
cy.get(this.locators.ClickOn_Collec_Id).type(2, {force: true});
    cy.wait(2000);
    cy.get("h5[class='ng-star-inserted']").first().click({force: true});
    cy.wait(1000);
cy.get(this.locators.ClickOnCus_Acc_Num).type("68210000012749");
    cy.wait(3000);
    cy.get(this.locators.Select_Relationship_with_Cus).select("Herself/Himself");
    cy.wait(1000);
    cy.get(this.locators.Select_Mode_Of_Payment).select("ONLINE TRANSFER");
    cy.wait(1000);
    cy.get(this.locators.Type_Trans_Id).type("SBI5689785");
    cy.wait(2000);
    cy.get(this.locators.Type_EMI_Overdue).type("50000");
    cy.wait(1000);
    cy.get(this.locators.ClickOn_TotalAmt).click({force: true});
    cy.wait(1000);

   const filePath= 'Aadhar.png'
    cy.get('.card-content > :nth-child(1) > .form-control').click();
    cy.wait(2000);
    cy.get('input[type="file"]').attachFile(filePath);
    cy.wait(2000);

    cy.get(this.locators.Type_Pan_Num).type("panca9614b");
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Submit_Payment).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnOkay).click();
    cy.wait(3000);
    cy.get(this.locators.ClickOnPayment).click();
    cy.wait(3000);

}

IssueReceiptTestPage_08(){

    cy.get(this.locators.ClickOnPayment).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnReceipts).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnWalk_in_cus).click();
    cy.wait(1000);
   const randomNumber = faker.number.int({ min: 1000, max: 999999 });

cy.get(this.locators.ClickOn_Physical_Rec_no).type(randomNumber.toString());
cy.wait(2000);
cy.get(this.locators.ClickOn_Collec_Id).type(2, {force: true});
    cy.wait(2000);
    cy.get("h5[class='ng-star-inserted']").first().click({force: true});
    cy.wait(1000);
cy.get(this.locators.ClickOnCus_Acc_Num).type("68210000012749");
    cy.wait(3000);
    cy.get(this.locators.Select_Relationship_with_Cus).select("Herself/Himself");
    cy.wait(1000);
    cy.get(this.locators.Select_Mode_Of_Payment).select("ONLINE PAYMENT");
    cy.wait(1000);
    cy.get(this.locators.Select_Payment_Partner).select("Paynimo");
    cy.wait(2000);
    cy.get(this.locators.Type_EMI_Overdue).type("50000");
    cy.wait(1000);
    cy.get(this.locators.ClickOn_TotalAmt).click({force: true});
    cy.wait(1000);

   const filePath= 'Aadhar.png'
    cy.get('.card-content > :nth-child(1) > .form-control').click();
    cy.wait(2000);
    cy.get('input[type="file"]').attachFile(filePath);
    cy.wait(2000);

    cy.get(this.locators.Type_Pan_Num).type("panca9614b");
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Submit_Payment).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnOkay).click();
    cy.wait(3000);
    cy.get(this.locators.ClickOn_Home).click();
    cy.wait(3000);
    cy.get(this.locators.ClickOnPayment).click();
    cy.wait(3000);

}

IssueReceiptTestPage_09(){

cy.get(this.locators.ClickOnPayment).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnReceipts).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnWalk_in_cus).click();
    cy.wait(1000);
   const randomNumber = faker.number.int({ min: 1000, max: 999999 });

cy.get(this.locators.ClickOn_Physical_Rec_no).type(randomNumber.toString());
cy.wait(2000);
cy.get(this.locators.ClickOn_Collec_Id).type(2, {force: true});
    cy.wait(2000);
    cy.get("h5[class='ng-star-inserted']").first().click({force: true});
    cy.wait(1000);
cy.get(this.locators.ClickOnCus_Acc_Num).type("68210000012749");
    cy.wait(3000);
    cy.get(this.locators.Select_Relationship_with_Cus).select("Herself/Himself");
    cy.wait(1000);
    cy.get(this.locators.Select_Mode_Of_Payment).select("CASH");
    cy.wait(1000);
    cy.get(this.locators.Type_EMI_Overdue).type("50000");
    cy.wait(1000);
    cy.get(this.locators.ClickOn_TotalAmt).click({force: true});
    cy.wait(1000);

   const filePath= 'Aadhar.png'
    cy.get('.card-content > :nth-child(1) > .form-control').click();
    cy.wait(2000);
    cy.get('input[type="file"]').attachFile(filePath);
    cy.wait(2000);

    cy.get(this.locators.Type_Pan_Num).type("d567g9614b");
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Submit_Payment).click();
    cy.wait(2000);
    cy.contains("Invalid PAN Number").should("be.visible");
    cy.wait(2000);

}

IssueReceiptTestPage_10(){

cy.get(this.locators.ClickOnPayment).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnReceipts).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnWalk_in_cus).click();
    cy.wait(1000);
    const randomNumber = faker.number.int({ min: 1000, max: 999999 });

cy.get(this.locators.ClickOn_Physical_Rec_no).type(randomNumber.toString());
cy.wait(2000);
cy.get(this.locators.ClickOn_Collec_Id).type(2, {force: true});
    cy.wait(2000);
    cy.get("h5[class='ng-star-inserted']").first().click({force: true});
    cy.wait(1000);
cy.get(this.locators.ClickOnCus_Acc_Num).type("68210000012749");
    cy.wait(3000);
    cy.get(this.locators.Select_Relationship_with_Cus).select("Herself/Himself");
    cy.wait(1000);
    cy.get(this.locators.Select_Mode_Of_Payment).select("ONLINE TRANSFER");
    cy.wait(1000);
    cy.get(this.locators.Type_Trans_Id).type("SBI56897458");
    cy.wait(2000);
    cy.get(this.locators.Type_EMI_Overdue).type("50000");
    cy.wait(1000);
    cy.get(this.locators.ClickOn_TotalAmt).click({force: true});
    cy.wait(1000);

   const filePath= 'Aadhar.png'
    cy.get('.card-content > :nth-child(1) > .form-control').click();
    cy.wait(2000);
    cy.get('input[type="file"]').attachFile(filePath);
    cy.wait(2000);

    cy.get(this.locators.Type_Pan_Num).type("panca9614b");
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Submit_Payment).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnOkay).click();
    cy.wait(3000);
    cy.get(this.locators.ClickOnPayment).click();
    cy.wait(3000);


}




 
}

export default IssueReceiptPage;
