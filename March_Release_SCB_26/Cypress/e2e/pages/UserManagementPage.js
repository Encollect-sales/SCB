import { faker } from "@faker-js/faker";
class UserManagementPage {
  constructor(locators) {
    this.locators = locators;
  }

 
UserManagementPage_01(){
   cy.get(this.locators.user_management).click({force:true});
   cy.wait(2000);
    cy.get(this.locators.Agent).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.search_agent).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Agent_name).type('Testing Qa');
    cy.wait(2000);
    cy.get(this.locators.status).select("Approved");
    cy.wait(2000);
    cy.get(this.locators.search_button).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.checkbox).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.edit_agent).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Department).click({force:true});
    cy.wait(2000);
    cy.contains("Department").scrollIntoView().should('be.visible');
    cy.get('#designation-select-0').should('be.visible');


}
UserManagementPage_02(){
    cy.get(this.locators.user_management).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Agent).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.search_agent).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Agent_name).type('Testing Qa');
    cy.wait(2000);
    cy.get(this.locators.status).select("Approved");
    cy.wait(2000);
    cy.get(this.locators.search_button).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.checkbox).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.edit_agent).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Department).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.delete_button).click({force:true});
    cy.wait(2000);
    cy.get('#department-select-0').select("Agency Backend");
    cy.wait(2000);
    cy.get('#designation-select-0').select("Agency Backend");

}
UserManagementPage_03(){

   cy.get(this.locators.user_management).click({force:true});
   cy.wait(2000);
    cy.get(this.locators.staff).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.add_staff).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.staffnamefield).type('supervisoryQA Supervisor');
    cy.wait(2000);
    cy.get(this.locators.status).select("Approved");
    cy.wait(2000);
    cy.get(this.locators.search_button).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.staff_checkbox).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.edit_agent).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.staffdepartment).click({force:true});
    cy.wait(2000);
    cy.contains("Department").scrollIntoView().should('be.visible');
    cy.get('#designation-select-0').should('be.visible');


}
UserManagementPage_04(){
    cy.get(this.locators.user_management).click({force:true});
    cy.wait(2000);
      cy.get(this.locators.staff).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.add_staff).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.staffnamefield).type('supervisoryQA Supervisor');
    cy.wait(2000);
    cy.get(this.locators.status).select("Approved");
    cy.wait(2000);
    cy.get(this.locators.search_button).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.staff_checkbox).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.edit_agent).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.staffdepartment).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.delete_button).click({force:true});
    cy.wait(2000);
    cy.get('#department-select-0').select("Collections");
    cy.wait(2000);
    cy.get('#designation-select-0').select("Collections Supervisor");

}

}
 
export default UserManagementPage;