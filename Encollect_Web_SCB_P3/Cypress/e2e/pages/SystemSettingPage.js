import { getLocators } from '../utils/Locatorutils';
import { getBaseUrl } from '../utils/configutils';
import 'cypress-file-upload';

class SystemSettingPage {
  constructor(locators) {
    this.locators = locators;
  }

  systemSettingModule(){
    cy.wait(2000);
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
  }
  SystemSettingTestPage_1091(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
 
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Bank Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
    cy.log('File Downloaded sucessfully')
    cy.wait(2000);

    const filePath = 'Cypress/downloads/ProductMasterTemplate.xlsx'

    cy.get(this.locators.SelectPWUF).select('Bank Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx', 'base64').then(fileContent => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
    });
    
   // cy.contains('File Uploaded Successfully. Transaction ID :').should('be.visible');
    cy.wait(2000);
    
    

  }
    SystemSettingTestPage_1141(){
   cy.contains("User Management").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Staff Empanelment ").click();
    cy.wait(2000);
    cy.contains("Add Staff").click();
   // cy.get(this.locators.clickonaddstaff).click();
    cy.wait(2000);
    cy.contains("Base Branch And Reporting Manager").click();
    //cy.get(this.locators.clickonbaseBranch).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.UsermanagementModule).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.CheackdropdownofbranchName).select('Delhi A',{force:true}).should('contain','Delhi A');
    cy.wait(2000);
   
    

  }
  SystemSettingTestPage_1195(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Masters Upload Status").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.ImportStatusSearchbtn).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Alertbox).should('contain','File Type is mandatory',{force:true});
    cy.wait(2000);
    
   
  }
  SystemSettingTestPage_1227(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Masters Upload Status").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.ImportStatusSearchbtn).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Alertbox).should('contain','File Type is mandatory',{force:true});
    cy.wait(2000);
  }
  SystemSettingTestPage_1092(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
 
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Bank Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);

    const filePath = 'Cypress/downloads/ProductMasterTemplate.xlsx'



    cy.get(this.locators.SelectPWUF).select('Bank Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("#upload-template-file").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.wait(2000);
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(4000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
    
  }
  SystemSettingTestPage_1094(){
   cy.contains("User Management").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Agency Empanelment").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Add Agency").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get("a.nav-link").contains("Scope of Work").click();
    cy.wait(2000);
    cy.get(this.locators.productgroup).select('All',{force:true}).should('contain','All');
    cy.wait(2000);
    cy.get(this.locators.subproductgroup).select('All',{force:true}).should('contain','All');
    cy.wait(2000);
    

   

  }
  SystemSettingTestPage_1289(){
   cy.contains("User Management").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Agent Empanelment").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Add Agent").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Departments & Designations").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.clickonAdd).click({force:true});
    cy.wait(2000);
   cy.get(this.locators.DepartmentDropdown).then($select => {
  const options = $select.find('option');
  // Skip the first option (index 0) which is usually the placeholder "--Select--"
  const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1;
  const randomValue = options[randomIndex].value;

  cy.wrap($select)
    .select(randomValue, { force: true })
    .should('have.value', randomValue);
});
    cy.wait(2000);

    cy.get(this.locators.Designationdropdown).then($select => {
  const options = $select.find('option');
  // Skip the first option (index 0) which is usually the placeholder "--Select--"
  const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1;
  const randomValue = options[randomIndex].value;

  cy.wrap($select)
    .select(randomValue, { force: true })
    .should('have.value', randomValue);
});
cy.wait(2000);
    
   

  }
  SystemSettingTestPage_1095(){
   cy.contains("User Management").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Agency Empanelment").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Add Agency").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get("a.nav-link").contains("Scope of Work").click();
    cy.wait(2000);
    cy.get(this.locators.productgroup).select('All',{force:true}).should('contain','All');
    cy.wait(2000);
    cy.get(this.locators.subproductgroup).select('All',{force:true}).should('contain','All');
    cy.wait(2000);

  }
  SystemSettingTestPage_1342(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Deposit Bank Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Deposit Bank Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
    
        
      

  }
  SystemSettingTestPage_1343(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Deposit Bank Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Deposit Bank Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
    
        
  }
  SystemSettingTestPage_1341(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Deposit Bank Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Deposit Bank Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
    

  }
  SystemSettingTestPage_1345(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Deposit Bank Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Deposit Bank Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
    

  }


  
  SystemSettingTestPage_1119(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
 
    cy.wait(2000);
   cy.contains("Masters Upload Status").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get('select[name="fileType"]').select('Bank Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Searchbtn).click();
    cy.wait(2000);
    

  }
  SystemSettingTestPage_1102(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Bank Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
    const filePath = 'Cypress/downloads/ProductMasterTemplate.xlsx'
    cy.get('.form-inline > .form-control').select('Bank Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get('.btn-success').click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
      }

  
  SystemSettingTestPage_1118(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
 
    cy.wait(2000);
   cy.contains("Masters Upload Status").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.ImportStatusSearchbtn).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Alertbox).should('contain','File Type is mandatory',{force:true});
    cy.wait(2000);
  }
  SystemSettingTestPage_1290(){
   cy.contains("User Management").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Agent Empanelment").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Add Agent").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Departments & Designations").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.clickonAdd).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DepartmentDropdown).select('Agency Backend',{force:true}).should('contain','Agency Backend');
    cy.wait(2000);
    cy.get(this.locators.Designationdropdown).select('Agency Backend',{force:true}).should('contain','Agency Backend');
    cy.wait(2000);
    
      


  }
  SystemSettingTestPage_1327(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Bank Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Bank Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
      
      


  }
  SystemSettingTestPage_1331(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Bank Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
    const filePath = 'Cypress/downloads/ProductMasterTemplate.xlsx'

    cy.get(this.locators.SelectPWUF).select('Bank Master',{force:true})
    cy.wait(2000);
    cy.fixture('BankMasterrTemplatee.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'BankMasterrTemplatee.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
     cy.contains("User Management").scrollIntoView().should("be.visible").click();
      cy.wait(2000);
      cy.contains("Agency Empanelment").scrollIntoView().should("be.visible").click();
      cy.wait(8000);
      cy.get(this.locators.ClickAddAgency).click();
      cy.wait(2000);
      cy.contains("Banking Details").click({force:true});
      cy.wait(2000);
      cy.get(this.locators.SelectBankName).select('SBI',{force:true}).should('contain','SBI');
      cy.wait(2000);
      
      
      


  }
  SystemSettingTest_1104(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
 
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Bucket Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Bucket Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
      
      
  }
    SystemSettingTestPage_1213(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
 
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.selectMasterTemplate).select('Disposition Master')
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Disposition Master');
    cy.wait(2000);
    cy.fixture('BucketMasterTemplate.csv').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'BucketMasterTemplate.csv',
        mimeType: 'text/csv',
      });

     });
     cy.wait(2000);
    cy.get('[role="alert"]').should("contain.text","You can only upload the file with extension xls or xlsx")
    cy.wait(2000);
       
        
      }
    SystemSettingTest_1148(){
       cy.contains("System Settings").scrollIntoView().should("be.visible").click();
      cy.wait(2000);
      cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
      cy.wait(2000);
      cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
      cy.wait(2000);
      cy.get(this.locators.selectMasterTemplate).select('Base Branch Master')
      cy.wait(2000);
      cy.get('div[class="form-inline"] select[name="template"]').select('Base Branch Master');
      cy.wait(2000);
      cy.fixture('BucketMasterTemplate.csv').then((fileContent) => {
        cy.get("input[name='attachedFile']").attachFile({
          fileContent,
          fileName: 'BucketMasterTemplate.csv',
          mimeType: 'text/csv',
        });
  
       });
       cy.wait(2000);
      cy.get('[role="alert"]').should("contain.text"," You can only upload the file with extension xls or xlsx ")
      cy.wait(2000);
         
          
    }   
    SystemSettingTest_1198(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Disposition Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
    }
    SystemSettingTestPage_1181(){
       cy.contains("System Settings").scrollIntoView().should("be.visible").click();
      cy.wait(2000);
     cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
      cy.wait(2000);
     cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
      cy.wait(2000);
      cy.get(this.locators.selectMasterTemplate).select('Bank Master')
      cy.wait(2000);
      cy.get(this.locators.SelectPWUF).select('Bank Master');
      cy.wait(2000);
      cy.fixture('BucketMasterTemplate.csv').then((fileContent) => {
        cy.get("input[name='attachedFile']").attachFile({
          fileContent,
          fileName: 'BucketMasterTemplate.csv',
          mimeType: 'text/csv',
        });
  
       });
       cy.wait(2000);
      // cy.get('[role="alert"]').should("contain.text"," You can only upload the file with extension xls or xlsx ")
      // cy.wait(2000);
      } 
          
 
    SystemSettingTestPage_1120(){
       cy.contains("System Settings").scrollIntoView().should("be.visible").click();
      cy.wait(2000);
      cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
      cy.wait(2000);
     cy.contains("Masters Upload Status").scrollIntoView().should("be.visible").click();
      cy.wait(2000);
      cy.get('select[name="fileType"]').select('Bank Master',{force:true});
      cy.wait(2000);
      cy.get(this.locators.ImportStatusSearchbtn).click({force:true});
      cy.wait(2000);

  }
  SystemSettingTestPage_1121(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
 
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Bucket Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
    cy.log('File Downloaded Sucessfully!')
    cy.wait(2000);

    // cy.fixture('BucketMasterTemplate.csv').then((fileContent) => {
    //   cy.get("input[name='attachedFile']").attachFile({
    //     fileContent,
    //     fileName: 'BucketMasterTemplate.csv',
    //     mimeType: 'text/csv',
    //   });

    //  });
    //  cy.wait(2000);
    // cy.get('[role="alert"]').should("contain.text","You can only upload the file with extension xls or xlsx")
    // cy.wait(2000);
       




    }

    SystemSettingTestPage_1122(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
 
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Bucket Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Bucket Master',{force:true})
    cy.wait(2000);
    cy.fixture('BucketMasterTemplateExtraField.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'BucketMasterTemplateExtraField.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
    }
     SystemSettingTestPage_1208(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
 
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Disposition Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Disposition Master',{force:true})
    cy.wait(2000);
    cy.fixture('BucketMasterTemplateExtraField.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'BucketMasterTemplateExtraField.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
    

    }
    SystemSettingTestPage_1209(){
       cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
 
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Disposition Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Disposition Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
      
  
    

    }
    SystemSettingTestPage_1207(){
       cy.contains("System Settings").scrollIntoView().should("be.visible").click();
      cy.wait(2000);
     cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
      cy.wait(2000);
     cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
      cy.wait(2000);
      cy.get(this.locators.SelectMaster).select('Disposition Master',{force:true});
      cy.wait(2000);
      cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
      cy.wait(2000);
      cy.get(this.locators.SelectPWUF).select('Disposition Master',{force:true})
      cy.wait(2000);
      cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
        cy.get("input[name='attachedFile']").attachFile({
          fileContent,
          fileName: 'ProductMasterTemplate.xlsx',
          mimeType: 'text/csv',
        });
        cy.get(this.locators.uploadFileBtn).click({force:true});
        cy.wait(2000);
        cy.get(this.locators.ClickOnOK).click({force:true});
        cy.wait(2000);
          });
        //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
        cy.wait(2000);
        
  
    


    }
    SystemSettingTestPage_1206(){
       cy.contains("System Settings").scrollIntoView().should("be.visible").click();
      cy.wait(2000);
     cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
      cy.wait(2000);
     cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
      cy.wait(2000);
      cy.get(this.locators.SelectMaster).select('Disposition Master',{force:true});
      cy.wait(2000);
      cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
      cy.wait(2000);
      cy.get(this.locators.SelectPWUF).select('Disposition Master',{force:true})
      cy.wait(2000);
      cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
        cy.get("input[name='attachedFile']").attachFile({
          fileContent,
          fileName: 'ProductMasterTemplate.xlsx',
          mimeType: 'text/csv',
        });
        cy.get(this.locators.uploadFileBtn).click({force:true});
        cy.wait(2000);
        cy.get(this.locators.ClickOnOK).click({force:true});
        cy.wait(2000);
          });
        //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
        cy.wait(2000);
        
        
  
    
        }
    SystemSettingTestPage_1199(){
       cy.contains("System Settings").scrollIntoView().should("be.visible").click();
      cy.wait(2000);
     cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
      cy.wait(2000);
     cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
      cy.wait(2000);
      cy.get(this.locators.SelectMaster).select('Disposition Master',{force:true});
      cy.wait(2000);
      cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
      cy.wait(2000);
      cy.get(this.locators.SelectPWUF).select('Disposition Master',{force:true})
      cy.wait(2000);
      cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
        cy.get("input[name='attachedFile']").attachFile({
          fileContent,
          fileName: 'ProductMasterTemplate.xlsx',
          mimeType: 'text/csv',
        });
        cy.get(this.locators.uploadFileBtn).click({force:true});
        cy.wait(2000);
        cy.get(this.locators.ClickOnOK).click({force:true});
        cy.wait(2000);
          });
        //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
        cy.wait(2000);
        
        
    }
    SystemSettingTestPage_1211(){
       cy.contains("System Settings").scrollIntoView().should("be.visible").click();
      cy.wait(2000);
     cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
      cy.wait(2000);
     cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
      cy.wait(2000);
      cy.get(this.locators.SelectMaster).select('Disposition Master',{force:true});
      cy.wait(2000);
      cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
      cy.wait(2000);
      cy.get(this.locators.SelectPWUF).select('Disposition Master',{force:true})
      cy.wait(2000);
      cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
        cy.get("input[name='attachedFile']").attachFile({
          fileContent,
          fileName: 'ProductMasterTemplate.xlsx',
          mimeType: 'text/csv',
        });
        cy.get(this.locators.uploadFileBtn).click({force:true});
        cy.wait(2000);
        cy.get(this.locators.ClickOnOK).click({force:true});
        cy.wait(2000);
          });
        //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
        cy.wait(2000);
                

    }
    SystemSettingTestPage_1216(){
       cy.contains("System Settings").scrollIntoView().should("be.visible").click();
      cy.wait(2000);
     cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
      cy.wait(2000);
     cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
      cy.wait(2000);
      cy.get(this.locators.SelectMaster).select('Disposition Master',{force:true});
      cy.wait(2000);
      cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
      cy.wait(2000);
      cy.get(this.locators.SelectPWUF).select('Disposition Master',{force:true})
      cy.wait(2000);
      cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
        cy.get("input[name='attachedFile']").attachFile({
          fileContent,
          fileName: 'ProductMasterTemplate.xlsx',
          mimeType: 'text/csv',
        });
        cy.get(this.locators.uploadFileBtn).click({force:true});
        cy.wait(2000);
        cy.get(this.locators.ClickOnOK).click({force:true});
        cy.wait(2000);
          });
        //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
        cy.wait(2000);
        
        

    }
    SystemSettingTestPage_1179(){
       cy.contains("System Settings").scrollIntoView().should("be.visible").click();
      cy.wait(2000);
     cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
      cy.wait(2000);
     cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
      cy.wait(2000);
      cy.get(this.locators.SelectMaster).select('Bank Master',{force:true});
      cy.wait(2000);
      cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
      cy.wait(2000);
      cy.get(this.locators.SelectPWUF).select('Bank Master',{force:true})
      cy.wait(2000);
      cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
        cy.get("input[name='attachedFile']").attachFile({
          fileContent,
          fileName: 'ProductMasterTemplate.xlsx',
          mimeType: 'text/csv',
        });
        cy.get(this.locators.uploadFileBtn).click({force:true});
        cy.wait(2000);
        cy.get(this.locators.ClickOnOK).click({force:true});
        cy.wait(2000);
          });
        //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
        cy.wait(2000);
        
    }
    SystemSettingTestPage_1125(){
      cy.wait(2000)
     cy.contains("User Management").scrollIntoView().should("be.visible").click();
      cy.wait(2000);
      cy.contains("Agency Empanelment").scrollIntoView().should("be.visible").click();
      cy.wait(2000);
      cy.get(this.locators.ClickAddAgency).click();
      cy.wait(2000);
      cy.get("a.nav-link").contains("Place of Work").click();
      cy.wait(2000);
    cy.get(this.locators.Bucketdropdown).select('All',{force:true}).should('contain',"All");
    cy.wait(2000);
    
    
  
    }
    
    
  SystemSettingTestPage_1135(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
 
    cy.wait(2000);
    cy.get(this.locators.uploadAccountImportStatus).click({force : true});
    cy.wait(2000);
    cy.get('select[name="fileType"]').select('Bucket Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Searchbtn).click();
    cy.wait(2000);
  }

  SystemSettingTestPage_1136(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnMasterUpload).click({force:true});
    cy.wait(2000);
   cy.contains("Masters Upload Status").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get('select[name="fileType"]').select('Bucket Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.EnterFileName).type('BucketMasterTemplate_202310100642000987.xlsx',{force:true});
    cy.wait(800);
    cy.get(this.locators.SelectStatus).select('Processed',{force:true});
    cy.wait(800);
    cy.get(this.locators.EnterTransId).type('20231010064301612',{force:true});
    cy.wait(800);
    cy.get(this.locators.Searchbtn).click();
    cy.wait(2000);


  }
  SystemSettingTestPage_1162(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.accountImportMasterstatus).click({force:true});
    cy.wait(2000);
    cy.get('select[name="fileType"]').select('Base Branch Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Searchbtn).click();
    cy.wait(2000);
  }
  SystemSettingTestPage_1163(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.ClicOnMU).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.accountImportMasterstatus).click({force:true});
    cy.wait(2000);
    cy.get('select[name="fileType"]').select('Base Branch Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.EnterFileName).type('BaseBranchMasterTemplate_20231010060040335.xlsx',{force:true});
    cy.wait(800);
    cy.get(this.locators.SelectStatus).select('Uploaded',{force:true});
    cy.wait(800);
    cy.get(this.locators.EnterTransId).type('20231010060041194',{force:true});
    cy.wait(800);
    cy.get(this.locators.Searchbtn).click();
    cy.wait(2000);
    // cy.get('Search Result').should('be.visible');
    // cy.wait(800);
  }
  SystemSettingTestPage_1229(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.accountImportMasterstatus).click({force:true});
    cy.wait(2000);
    cy.get('select[name="fileType"]').select('Disposition Master',{force:true});
    cy.wait(2000);
    cy.get('.btn').click({force:true});
    cy.wait(800);
    
  }
  SystemSettingTestPage_1196(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.ClicOnMU).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.accountImportMasterstatus).click({force:true});
    cy.wait(2000);
    cy.get('select[name="fileType"]').select('Bank Master',{force:true});
    cy.wait(2000);
    cy.get('.btn').click({force:true})
    cy.wait(800);
  


  }
  SystemSettingTestPage_1228(){
    cy.get(this.locators.clickOnSystemSetting).click({force:true});
    cy.wait(2000);
   cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.accountImportMasterstatus).click({force:true});
    cy.wait(2000);
    cy.get('select[name="fileType"]').select('Disposition Master',{force:true});
    cy.wait(2000);
    cy.get('.btn').click({force:true});
    cy.wait(800);
    // cy.get('.history-table > h3').should('be.visible').click();
    // cy.wait(800);
  }
  SystemSettingTestPage_1229(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.accountImportMasterstatus).click({force:true});
    cy.wait(2000);
    cy.get('select[name="fileType"]').select('Disposition Master',{force:true});
    cy.wait(2000);
    cy.get('.btn').click({force:true});
    cy.wait(800);
    // cy.get('.history-table > h3').should('be.visible').click();
    // cy.wait(800);
  }
  SystemSettingTestPage_1305(){
    cy.get('[title="System Settings"]').click({force:true});
      cy.wait(2000);
     cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
      cy.wait(2000);
      cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
      cy.wait(2000);
      cy.get(this.locators.SelectMaster).select('Bank Master',{force:true});
      cy.wait(2000);
      cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
      cy.wait(20000);

      const filePath = 'Cypress/downloads/BankMasterTemplate.xlsx'

      cy.get(this.locators.SelectPWUF).select('Bank Master',{force:true})
      cy.wait(2000);
      cy.fixture('BankMasterTemplate.xlsx').then((fileContent) => {
        cy.get("input[name='attachedFile']").attachFile({
          fileContent,
          fileName: 'BankMasterTemplate.xlsx',
          mimeType: 'text/csv',
        });
        cy.get(this.locators.uploadFileBtn).click({force:true});
        cy.wait(2000);
        cy.get('.btn-success').click({force:true});
        cy.wait(2000);
          });
        //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
        cy.wait(2000);   
  }

  SystemSettingTestPage_1306(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Bank Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);


    const filePath = 'Cypress/downloads/BankMasterTemplate.xlsx'



    cy.get(this.locators.SelectPWUF).select('Bank Master',{force:true})
    cy.wait(2000);
    cy.fixture('BankMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'BankMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.wait(20000);
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get('.btn-success').click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
      
   
  }
  
  

  SystemSettingTestPage_1309(){
   cy.contains("User Management").scrollIntoView().should("be.visible").click();
      cy.wait(2000);
      cy.get(this.locators.clickonagenceyimplimentatinReq).click();
      cy.wait(2000);
      cy.get('[heading="Banking Details"] > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click({force:true});
      cy.wait(2000);
      cy.get(this.locators.SelectBankName).select('SBI',{force:true}).should('contain','SBI');
      cy.wait(2000);
  }
  SystemSettingTestPage_1308(){
   cy.contains("User Management").scrollIntoView().should("be.visible").click();
      cy.wait(2000);
      cy.get(this.locators.clickonagenceyimplimentatinReq).click();
      cy.wait(2000);
      cy.get('[heading="Banking Details"] > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click({force:true});
      cy.wait(2000);
      cy.get(this.locators.SelectBankName).select('SBI',{force:true}).should('contain','SBI');
      cy.wait(2000);

  }
  SystemSettingTestPage_1102(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
 
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Bank Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Bank Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
      }
  SystemSettingTestPage_1316(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Bank Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Bank Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
      
  }
  SystemSettingTestPage_1318(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.selectMasterTemplate).select('Bank Master')
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Bank Master');
    cy.wait(2000);
    cy.fixture('BucketMasterTemplate.csv').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'BucketMasterTemplate.csv',
        mimeType: 'text/csv',
      });

     });
     cy.wait(2000);
    cy.get('[role="alert"]').should("contain.text","You can only upload the file with extension xls or xlsx")
    cy.wait(2000);
       
      }
  
  
  SystemSettingTestPage_1351(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Deposit Bank Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Deposit Bank Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
      
  }
  SystemSettingTestPage_1352(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Deposit Bank Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Deposit Bank Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
      
  }


  

  

  


  

  

  

  

  
  SystemSettingTestPage_1303(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.accountImportMasterstatus).click({force:true});
    cy.wait(2000);
    cy.get('select[name="fileType"]').select('Department and Designation Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Searchbtn).click();
    cy.wait(2000);
    // cy.get('.history-table > h3').should('be.visible').click();
    // cy.wait(800);
  }
  SystemSettingTestPage_1304(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.accountImportMasterstatus).click({force:true});
    cy.wait(2000);
    cy.get('select[name="fileType"]').select('Department and Designation Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Searchbtn).click();
    cy.wait(2000);
  //   cy.get('.history-table > h3').should('be.visible').click();
  //   cy.wait(800);
  }
  SystemSettingTestPage_1333(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.accountImportMasterstatus).click({force:true});
    cy.wait(2000);
    cy.get('select[name="fileType"]').select('Department and Designation Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Searchbtn).click();
    cy.wait(2000);
    // cy.get('.history-table > h3').should('be.visible').click();
    // cy.wait(800); 
  }
  SystemSettingTestPage_1332(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Masters Upload Status").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.ImportStatusSearchbtn).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Alertbox).should('contain','File Type is mandatory',{force:true});
    cy.wait(2000);

  }
  SystemSettingTestPage_1334(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.accountImportMasterstatus).click({force:true});
    cy.wait(2000);
    cy.get('select[name="fileType"]').select('Bank Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Searchbtn).click();
    cy.wait(2000);
    // cy.get('.history-table > h3').should('be.visible').click();
    // cy.wait(800); 
  
  }
  SystemSettingTestPage_1357(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Masters Upload Status").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.ImportStatusSearchbtn).click({force:true});
    cy.wait(2000);
    //cy.get(this.locators.Alertbox).should('contain','File Type is mandatory',{force:true});
    //cy.wait(2000);
  }
  SystemSettingTestPage_1358(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.accountImportMasterstatus).click({force:true});
    cy.wait(2000);
    cy.get('select[name="fileType"]').select('Deposit Bank Master',{force:true});
    cy.wait(2000);
    cy.get('.btn').click();
    cy.wait(2000);
    // cy.get('.history-table > h3').should('be.visible').click();
    // cy.wait(800); 
  
  }
  SystemSettingTestPage_1359(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.accountImportMasterstatus).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.EnterFileType).select('Deposit Bank Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.EnterFileName).type('depositbankmas_20231115041048948.xlsx',{force:true});
    cy.wait(800);
    cy.get(this.locators.SelectStatus).select('Uploaded',{force:true});
    cy.wait(800);
    cy.get(this.locators.EnterTransId).type('20231115041049544',{force:true});
    cy.wait(800);
    cy.get(this.locators.Searchbtn).click({force:true});
    cy.wait(4000);
    //cy.contains("Search Result").should("be.visible");
  }
  SystemSettingTestPage_1338(){
    cy.get(this.locators.clickOnPyment).click();
    cy.wait(800);
    cy.get(this.locators.PayinSlip).click({force:true});
    cy.wait(800);
    cy.get(this.locators.ClickDipoSlip).click();
    cy.wait(2000);
    cy.get(this.locators.Banknumber).select('324550',{force:true}).should('contain','XX4550');
    cy.wait(800);
    cy.get(this.locators.Bankname).select('My Bank',{force:true}).should('contain','My Bank');
    cy.wait(800);
    cy.get(this.locators.BranchName).select('Mpesa Paybill Number').should('contain','Mpesa Paybill Number');
    cy.wait(800);
    
  }
  SystemSettingTestPage_1339(){
    cy.get(this.locators.clickOnPyment).click();
    cy.wait(800);
    cy.get(this.locators.PayinSlip).click({force:true});
    cy.wait(800);
    cy.get(this.locators.ClickDipoSlip).click();
    cy.wait(2000);
    cy.get(this.locators.Banknumber).select('324550',{force:true}).should('contain','XX4550');
    cy.wait(800);
    cy.get(this.locators.Bankname).select('My Bank',{force:true}).should('contain','My Bank');
    cy.wait(800);
    cy.get(this.locators.BranchName).select('Mpesa Paybill Number').should('contain','Mpesa Paybill Number');
    cy.wait(800);
  }
  SystemSettingTestPage_1097(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Product Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);

     const filePath = 'Cypress/downloads/ProductMasterTemplate.xlsx'


    cy.get('.form-inline > .form-control').select('Product Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get('.btn-success').click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
      


  }
  SystemSettingTestPage_1100(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Product Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
    cy.get('.form-inline > .form-control').select('Product Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get('.btn-success').click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
      



  

  }
  SystemSettingTestPage_1335(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(800);
    cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(800);
    cy.get('body > app-root:nth-child(1) > div:nth-child(1) > div:nth-child(2) > app-navbar:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > span:nth-child(2)').click({force:true});
    cy.wait(800);
    cy.get(':nth-child(1) > .form-group > .form-control').select(' Deposit Bank Master',{force:true});
    cy.wait(800);
    cy.get('.col-md-12.ng-star-inserted > .btn').click({force:true});
    cy.wait(800);
    cy.log('File downloaded Sucessfully');
  }
  SystemSettingTestPage_1120(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(800);
      cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
 
    cy.wait(800);
   cy.contains("Masters Upload Status").scrollIntoView().should("be.visible").click();
    cy.wait(800);
    cy.get(this.locators.EnterFileType).select('Bank Master',{force:true});
    cy.wait(800);
    cy.get(this.locators.EnterFileName).type('AccountImportTemplate_20231009092956656.xlsx',{force:true});
    cy.wait(800);
    cy.get(this.locators.SelectStatus).select('Uploaded',{force:true});
    cy.wait(800);
    cy.get(this.locators.EnterTransId).type('20231009092956969',{force:true});
    cy.wait(800);
    cy.get(this.locators.ImportStatusSearchbtn).click({force:true});
    cy.wait(800);
   // cy.contains('Search Result').should('be.visible');
   // cy.wait(800);

  }
  
  

  SystemSettingTestPage_1164(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Bank Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.downloadBucketMaster).click()
  }

  SystemSettingTestPage_1165(){

    const filePath = 'Cypress/fixtures/GeomasterMasterTemplate.xlsx'

     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.ClickBLUM).click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Bank Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.downloadBucketMaster).click()
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select("Bank Master");
    cy.wait(2000);
    cy.get("input[name='attachedFile']").selectFile(filePath, { force:true });
    cy.wait(2000);
    cy.get(this.locators.uploadFileBtn).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.ClickOnOK).click();
    cy.wait(2000);
  }
  
  SystemSettingTestPage_1166(){

    const filePath = 'Cypress/fixtures/GeomasterMasterTemplate.xlsx'

     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.ClickBLUM).click();
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select("Bank Master");
    cy.wait(2000);
    cy.get("input[name='attachedFile']").selectFile(filePath, { force:true });
    cy.wait(2000);
    cy.get(this.locators.uploadFileBtn).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.ClickOnOK).click();
  }

  SystemSettingTestPage_1167(){
   cy.contains("User Management").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Agency Empanelment").click();
    cy.wait(2000);
    cy.get("a[title='Add Agency']").click({force:true});
    cy.wait(2000);
    cy.contains("Place of Work").click();
    
  }
  SystemSettingTestPage_1168(){
   cy.contains("User Management").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Agency Empanelment").click();
    cy.wait(2000);
    cy.get("a[title='Add Agency']").click({force:true});
    cy.wait(2000);
    cy.contains("Place of Work").click();
  }

  SystemSettingTestPage_1169(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Bank Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Bank Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      
      cy.get(this.locators.ClickOnOK).click();
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
      


  }

  SystemSettingTestPage_1170(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Bank Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Bank Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      
      
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
      

  }
  SystemSettingTestPage_1171(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Bank Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Bank Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
      

  }

  SystemSettingTestPage_1172(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Bank Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Bank Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
      

  }

  SystemSettingTestPage_1173(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Bank Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Bank Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
      

  }

  SystemSettingTestPage_1174(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Bank Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Bank Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
      

  }

  SystemSettingTestPage_1175(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Bank Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Bank Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
      
      

  }


  SystemSettingTestPage_1176(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Bank Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Bank Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
      
      

  }

  SystemSettingTestPage_1177(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(5000);
    cy.get(this.locators.SelectMaster).select('Bank Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Bank Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
      
      }

  SystemSettingTestPage_1178(){

     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Bank Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Bank Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
      

  }


  SystemSettingTestPage_1182(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Bank Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
    cy.get('.form-inline > .form-control').select('Bank Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
      

  }

  SystemSettingTestPage_1183(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Bank Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Bank Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
      

  }

  SystemSettingTestPage_1186(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Geo Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Geo Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
      

  }

  SystemSettingTestPage_1294(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Department and Designation Master',{force:true});
    cy.wait(2000);
    //y.get(':nth-child(2) > .btn').click({force:true}).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Department and Designation Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
      

  }
  SystemSettingTestPage_1287(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Department and Designation Master',{force:true});
    cy.wait(2000);
    //cy.get(':nth-child(2) > .btn').click({force:true}).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Department and Designation Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
      

  }

  SystemSettingTestPage_1295(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Department and Designation Master',{force:true});
    cy.wait(2000);
    //cy.get(':nth-child(2) > .btn').click({force:true}).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Department and Designation Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
      

  }

  SystemSettingTestPage_1296(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Department and Designation Master',{force:true});
    cy.wait(2000);
    
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Department and Designation Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
      

  }

  SystemSettingTestPage_1297(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Department and Designation Master',{force:true});
    cy.wait(2000);
   
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Department and Designation Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
      

  }
  SystemSettingTestPage_1298(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Department and Designation Master',{force:true});
    cy.wait(2000);
   
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Department and Designation Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
      

  }

  SystemSettingTestPage_1299(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Department and Designation Master',{force:true});
    cy.wait(2000);
    
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Department and Designation Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
      

  }

  SystemSettingTestPage_1200(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Department and Designation Master',{force:true});
    cy.wait(2000);
    
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Department and Designation Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
      

  }

  SystemSettingTestPage_1301(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Department and Designation Master',{force:true});
    cy.wait(2000);
    
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Department and Designation Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
      

  }

  SystemSettingTestPage_1302(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Masters Upload Status").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.ImportStatusSearchbtn).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Alertbox).should('contain','File Type is mandatory',{force:true});
    cy.wait(2000);
  }
  

  


    

  SystemSettingTestPage_1305(){
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
   cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Bank Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Bank Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
      
  }

  SystemSettingTestPage_1306(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Bank Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Bank Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
      
  }

  SystemSettingTestPage_1307(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Bank Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);

    const filePath = 'Cypress/downloads/BankMasterTemplate.xlsx'

    cy.get(this.locators.SelectPWUF).select('Bank Master',{force:true})
    cy.wait(2000);
    cy.fixture('BankMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'BankMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
      
  }

  SystemSettingTestPage_1308(){

    cy.wait(100);
   cy.contains("User Management").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Agency Empanelment").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Add Agency").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Banking Details").click();
    cy.get("select[name='bankName']").select("ADCC BANK");
    cy.wait(2000);
  }

  SystemSettingTestPage_1309(){

    cy.wait(100);
   cy.contains("User Management").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Agency Empanelment").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Add Agency").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Banking Details").click();
    cy.get("select[name='bankName']").select("ADCC BANK");
    cy.wait(2000);
  }

  SystemSettingTestPage_1310(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Bank Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);

     const filePath = 'Cypress/downloads/BankMasterTemplate.xlsx'

    cy.get(this.locators.SelectPWUF).select('Bank Master',{force:true})
    cy.wait(2000);
    cy.fixture('BankMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'BankMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
      
  }

  SystemSettingTestPage_1311(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Bank Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);

         const filePath = 'Cypress/downloads/BankMasterTemplate.xlsx'

    cy.get(this.locators.SelectPWUF).select('Bank Master',{force:true})
    cy.wait(2000);
    cy.fixture('BankMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'BankMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
      
    
  }

  SystemSettingTestPage_1312(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Bank Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);

     const filePath = 'Cypress/downloads/BankMasterTemplate.xlsx'

    cy.get(this.locators.SelectPWUF).select('Bank Master',{force:true})
    cy.wait(2000);
    cy.fixture('BankMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'BankMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
      
  }
  
  SystemSettingTestPage_1313(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Bank Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);

         const filePath = 'Cypress/downloads/BankMasterTemplate.xlsx'


    cy.get(this.locators.SelectPWUF).select('Bank Master',{force:true})
    cy.wait(2000);
    cy.fixture('BankMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'BankMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
      
  }

  SystemSettingTestPage_1314(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Bank Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);

    const filePath = 'Cypress/downloads/BankMasterTemplate.xlsx'

    cy.get(this.locators.SelectPWUF).select('Bank Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
      
  }

  SystemSettingTestPage_1315(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Bank Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);

    const filePath = 'Cypress/downloads/BankMasterTemplate.xlsx'

    cy.get(this.locators.SelectPWUF).select('Bank Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
      
  }

  SystemSettingTestPage_1093(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
 
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Bank Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);

    //  const filePath = 'Cypress/downloads/ProductMasterTemplate.xlsx'

    // cy.get(this.locators.SelectPWUF).select('Product Master',{force:true})
    // cy.wait(2000);
    // cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
    //   cy.get("input[name='attachedFile']").attachFile({
    //     fileContent,
    //     fileName: 'ProductMasterTemplate.xlsx',
    //     mimeType: 'text/csv',
    //   });
    //   cy.get(this.locators.uploadFileBtn).click({force:true});
    //   cy.wait(2000);
    //   cy.get(this.locators.ClickOnOK).click({force:true});
    //   cy.wait(2000);
    //     });
    //   //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
    //   cy.wait(2000);
      
  }

  SystemSettingTestPage_file_upload_1093(){
   const filePath = 'Cypress/downloads/ProductMasterTemplate.xlsx'

    cy.get(this.locators.SelectPWUF).select('Bank Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx', 'base64').then(fileContent => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
    });
    
   // cy.contains('File Uploaded Successfully. Transaction ID :').should('be.visible');
    cy.wait(2000);
  }

  SystemSettingTestPage_1096(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
 
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Bank Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);

    
    // cy.get(this.locators.SelectPWUF).select('Bank Master',{force:true})
    // cy.wait(2000);
    // cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
    //   cy.get("input[name='attachedFile']").attachFile({
    //     fileContent,
    //     fileName: 'ProductMasterTemplate.xlsx',
    //     mimeType: 'text/csv',
    //   });
    //   cy.get(this.locators.uploadFileBtn).click({force:true});
    //   cy.wait(2000);
    //   cy.get(this.locators.ClickOnOK).click({force:true});
    //   cy.wait(2000);
    //     });
    //   //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
    //   cy.wait(2000);
      
  }

  SystemSettingTestPage_file_upload_1096(){
    const filePath = 'Cypress/downloads/ProductMasterTemplate.xlsx'
 
     cy.get(this.locators.SelectPWUF).select('Bank Master',{force:true})
     cy.wait(2000);
     cy.fixture('ProductMasterTemplate.xlsx', 'base64').then(fileContent => {
       cy.get("input[name='attachedFile']").attachFile({
         fileContent,
         fileName: 'ProductMasterTemplate.xlsx',
         mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
       });
       cy.get(this.locators.uploadFileBtn).click({force:true});
       cy.wait(2000);
       cy.get(this.locators.ClickOnOK).click({force:true});
       cy.wait(2000);
     });
    // cy.contains('File Uploaded Successfully. Transaction ID :').should('be.visible');
     cy.wait(2000);
   }

  SystemSettingTestPage_1097(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
 
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Bank Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Bank Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
      
  }

  SystemSettingTestPage_1098(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
 
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Bank Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);

    const filePath = 'Cypress/downloads/ProductMasterTemplate.xlsx'

    cy.get(this.locators.SelectPWUF).select('Bank Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      ////cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      //cy.wait(2000);
  }

  SystemSettingTestPage_1099(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
 
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Bank Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);


     const filePath = 'Cypress/downloads/ProductMasterTemplate.xlsx'

    cy.get(this.locators.SelectPWUF).select('Bank Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
  }
  SystemSettingTestPage_1100(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
 
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Bank Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);

     const filePath = 'Cypress/downloads/ProductMasterTemplate.xlsx'

    cy.get(this.locators.SelectPWUF).select('Bank Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
  }

  SystemSettingTestPage_1101(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
 
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Bank Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);

    const filePath = 'Cypress/downloads/ProductMasterTemplate.xlsx'
     
    cy.get(this.locators.SelectPWUF).select('Bank Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
    }


  SystemSettingTestPage_1103(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
 
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Bank Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
    const filePath = 'Cypress/downloads/ProductMasterTemplate.xlsx'
     
    cy.get(this.locators.SelectPWUF).select('Bank Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
  }


  SystemSettingTestPage_1105(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
 
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Bank Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
    const filePath = 'Cypress/downloads/ProductMasterTemplate.xlsx'
     
    cy.get(this.locators.SelectPWUF).select('Bank Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
  }

  SystemSettingTestPage_1124(){
    cy.wait(2000)
   cy.contains("User Management").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Agency Empanelment").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.ClickAddAgency).click();
    cy.wait(2000);
    cy.get("a.nav-link").contains("Place of Work").click();
    cy.wait(2000);
    
  }

  


  SystemSettingTestPage_1199(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Disposition Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Disposition Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      ////cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      //cy.wait(2000);
  }

  SystemSettingTestPage_12000(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Disposition Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Disposition Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
  }
  SystemSettingTestPage_1203(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Disposition Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Disposition Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
  }
  SystemSettingTestPage_1204(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Disposition Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Disposition Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
  }

  SystemSettingTestPage_1205(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Disposition Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Disposition Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
  }

  SystemSettingTestPage_1208(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Disposition Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Disposition Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
  }

  SystemSettingTestPage_1210(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Disposition Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Disposition Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
  }

  SystemSettingTestPage_1216(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Disposition Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Disposition Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
  }

  SystemSettingTestPage_1217(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
   cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Disposition Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Disposition Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
  }

  SystemSettingTestPage_1218(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Disposition Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Disposition Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
  }

  SystemSettingTestPage_1219(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Disposition Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Disposition Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
  }

  SystemSettingTestPage_1220(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Disposition Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Disposition Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      // //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      // cy.wait(2000);
  }
  SystemSettingTestPage_1221(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Disposition Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
    cy.get('.form-inline > .form-control').select('Disposition Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get('.btn-success').click({force:true});
      cy.wait(2000);
        });
      ////cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      //cy.wait(2000);
  }
  SystemSettingTestPage_1222(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Disposition Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Disposition Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
  }

  SystemSettingTestPage_1223(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Disposition Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Disposition Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
  }

  SystemSettingTestPage_1224(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Disposition Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Disposition Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
  }

  SystemSettingTestPage_1225(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Disposition Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Disposition Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
  }


  SystemSettingTestPage_1226(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Disposition Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Disposition Master',{force:true})
    cy.wait(2000);
    cy.fixture('ProductMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplate.xlsx',
        mimeType: 'text/csv',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(2000);
        });
      //cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force:true});
      cy.wait(2000);
  }

  SystemSettingTestPage_1335(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Disposition Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.Downloadproduct).click({force:true}).should('be.visible');
    cy.wait(2000);
  }

  SystemSettingTestPage_1340(){

    const filePath = 'Cypress/fixtures/DepositBankMasterTemplate.xlsx'

     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select("Deposit Bank Master");
    cy.wait(2000);
    cy.get("input[name='attachedFile']").selectFile(filePath, { force:true });
    cy.wait(2000);
    cy.get(this.locators.uploadFileBtn).click({force:true});
  }

  SystemSettingTestPage_1341(){

    const filePath = 'Cypress/fixtures/DepositBankMasterTemplate.xlsx'

     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select("Deposit Bank Master");
    cy.wait(2000);
    cy.get("input[name='attachedFile']").selectFile(filePath, { force:true });
    cy.wait(2000);
    cy.get(this.locators.uploadFileBtn).click({force:true});
  }

  SystemSettingTestPage_1354(){

    const filePath = 'Cypress/fixtures/DepositBankMasterTemplate.xlsx'

     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Deposit Bank Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.downloadBucketMaster).click( {force:true});
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select("Deposit Bank Master");
    cy.wait(2000);
    cy.get("input[name='attachedFile']").selectFile(filePath, { force:true });
    cy.wait(2000);
    cy.get(this.locators.uploadFileBtn).click({force:true});
  }
  SystemSettingTestPage_1353(){

    const filePath = 'Cypress/fixtures/DepositBankMasterTemplate.xlsx'

     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Deposit Bank Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.downloadBucketMaster).click();
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select("Deposit Bank Master");
    cy.wait(2000);
    cy.get("input[name='attachedFile']").selectFile(filePath, { force:true });
    cy.wait(2000);
    cy.get(this.locators.uploadFileBtn).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.ClickOnOK).click({force:true});
    cy.wait(2000);
  }

  SystemSettingTestPage_1344(){

    const filePath = 'Cypress/fixtures/DepositBankMasterTemplate.xlsx'

     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectMaster).select('Deposit Bank Master',{force:true});
    cy.wait(2000);
    cy.get(this.locators.downloadBucketMaster).click();
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select("Deposit Bank Master");
    cy.wait(2000);
    cy.get("input[name='attachedFile']").selectFile(filePath, { force:true });
    cy.wait(2000);
    cy.get(this.locators.uploadFileBtn).click({force:true});
  }

  SystemSettingTestPage_1291(){

    const filePath = 'Cypress/fixtures/DepartmentAndDesiginationMasterTemplate.xlsx'

     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select("Department and Designation Master");
    cy.wait(2000);
    cy.get("input[name='attachedFile']").selectFile(filePath, { force:true });
    cy.wait(2000);
    cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
  }


  SystemSettingTestPage_1292(){

    const filePath = 'Cypress/fixtures/DepartmentAndDesiginationMasterTemplate.xlsx'

     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select("Department and Designation Master");
    cy.wait(2000);
    cy.get("input[name='attachedFile']").selectFile(filePath, { force:true });
    cy.wait(2000);
    cy.get(this.locators.uploadFileBtn).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.ClickOnOK).click({force:true});
  }


  SystemSettingTestPage_1293(){

    const filePath = 'Cypress/fixtures/DepartmentAndDesiginationMasterTemplate.xlsx'

     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
   cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select("Department and Designation Master");
    cy.wait(2000);
    cy.get("input[name='attachedFile']").selectFile(filePath, { force:true });
    cy.wait(2000);
    cy.get(this.locators.uploadFileBtn).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.ClickOnOK).click({force:true});
  }

  SystemSettingTestPage_1143(){

    const filePath = 'Cypress/fixtures/BaseBranchMasterTemplate.xlsx'

     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(600);
   cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    
    cy.get("#upload-template-type").select("Base Branch Master");
    cy.wait(2000);
    cy.get("input[name='attachedFile']").selectFile(filePath, { force:true });
    cy.wait(2000);
    cy.get("#upload-template-button").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.ClickOnOK).click();
  }

  SystemSettingTestPage_1144(){

    const filePath = 'Cypress/fixtures/BaseBranchMasterTemplate.xlsx'

     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(600);
   cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    
    cy.get("#upload-template-type").select("Base Branch Master");
    cy.wait(2000);
    cy.get("input[name='attachedFile']").selectFile(filePath, { force:true });
    cy.wait(2000);
    cy.get("#upload-template-button").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.ClickOnOK).click();
  }

  SystemSettingTestPage_1145(){

    const filePath = 'Cypress/fixtures/BaseBranchMasterTemplate.xlsx'

     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(600);
   cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    
    cy.get("#upload-template-type").select("Base Branch Master");
    cy.wait(2000);
    cy.get("input[name='attachedFile']").selectFile(filePath, { force:true });
    cy.wait(2000);
    cy.get("#upload-template-button").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.ClickOnOK).click();
  }
  systemSettingModule(){
    cy.wait(2000);
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
  }

  BucketMaster1126(){
    cy.wait(600);
      cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
 
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.selectMasterTemplate).select('Bucket Master')
    cy.wait(2000);
    cy.get(this.locators.downloadBucketMaster).click();
    cy.wait(2000);
    cy.log('Template Dowloaded');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Bucket Master');
    cy.wait(2000);
    cy.fixture('BucketMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'BucketMasterTemplate.xlsx',
        mimeType: 'text/xlsx',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.get(this.locators.ClickOnOK).click();
      cy.wait(2000);
     });
     cy.wait(4000);
    cy.get('[role="alert"]').should("contain.text","File Uploaded Successfully. Transaction ID : ")
    cy.wait(2000);
    cy.log("File Uploaded Successfully");
  }

  BucketMaster1128(){
    cy.wait(600);
      cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
 
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.selectMasterTemplate).select('Bucket Master')
    cy.wait(2000);
    cy.get(this.locators.downloadBucketMaster).click();
    cy.wait(2000);
    cy.log('Template Dowloaded');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Bucket Master');
    cy.wait(2000);
    cy.fixture('BucketMasterTemplate.csv').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'BucketMasterTemplate.csv',
        mimeType: 'text/csv',
      });

     });
     cy.wait(2000);
    cy.get('[role="alert"]').should("contain.text","You can only upload the file with extension xls or xlsx")
    cy.wait(2000);
  }


  BucketMaster1134(){
    cy.wait(600);
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
 
    cy.wait(2000);
    cy.get(this.locators.uploadAccountImportStatus).click({force : true});
    cy.wait(2000);
    cy.get(this.locators.searchBtn).click({force : true});
    cy.wait(2000);
    cy.get('[role="alert"]').should(
      "contain.text",
      "File Type is mandatory"
    )
  }


  BucketMaster1129(){
    cy.wait(600);
      cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
 
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.selectMasterTemplate).select('Bucket Master')
    cy.wait(2000);
    cy.get(this.locators.downloadBucketMaster).click();
    cy.wait(2000);
    cy.log('Template Dowloaded');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Bucket Master');
    cy.wait(2000);
    cy.fixture('BucketMasterTemplateExtraField.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'BucketMasterTemplateExtraField.xlsx',
        mimeType: 'text/xlsx',
      });

      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.get(this.locators.ClickOnOK).click();
      cy.wait(2000);
      
     });
     cy.wait(4000);
     cy.get('[role="alert"]').should(
      "contain.text",
      "File Uploaded Successfully. Transaction ID : "
    )
     cy.wait(2000);
     cy.log("File Uploaded Successfully");
    
  }

  BaseBranchMaster1137(){
    cy.wait(600);
   cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.selectMasterTemplate).select('Base Branch Master');
    cy.wait(2000);
    cy.get(this.locators.downloadBucketMaster).click();
    cy.wait(2000);
    cy.log('Template Dowloaded');
    cy.wait(2000);
    cy.get(this.locators.SelectUploadType).select('Base Branch Master');
    cy.wait(2000);
    cy.fixture('BaseBranchMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'BaseBranchMasterTemplate.xlsx',
        mimeType: 'text/xlsx',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.get(this.locators.ClickOnOK).click();
      cy.wait(2000);
     });
     cy.wait(4000);
    cy.get('[role="alert"]').should("contain.text","File Uploaded Successfully. Transaction ID : ")
    cy.wait(2000);
    cy.log("File Uploaded Successfully");

  }


  BaseBranchMaster1138(){
    cy.wait(600);
   cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.selectMasterTemplate).select('Base Branch Master');
    cy.wait(2000);
    cy.get(this.locators.downloadBucketMaster).click();
    cy.wait(2000);
    cy.log('Template Dowloaded');
    cy.wait(2000);
    cy.get(this.locators.SelectUploadType).select('Base Branch Master');
    cy.wait(2000);
    cy.fixture('BaseBranchMasterTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'BaseBranchMasterTemplate.xlsx',
        mimeType: 'text/xlsx',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.get(this.locators.ClickOnOK).click();
      cy.wait(2000);
     });
     cy.wait(4000);
    cy.get('[role="alert"]').should("contain.text","File Uploaded Successfully. Transaction ID : ")
    cy.wait(2000);
    cy.log("File Uploaded Successfully");

  }
  BaseBranchMaster1146(){
    cy.wait(600);
   cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.selectMasterTemplate).select('Base Branch Master');
    cy.wait(2000);
    cy.get(this.locators.downloadBucketMaster).click();
    cy.wait(2000);
    cy.log('Template Dowloaded');
    cy.wait(2000);
    cy.get(this.locators.SelectUploadType).select('Base Branch Master');
    cy.wait(2000);
    cy.fixture('BaseBranchMasterTemplateNoData.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'BaseBranchMasterTemplateNoData.xlsx',
        mimeType: 'text/xlsx',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.get(this.locators.ClickOnOK).click();
      cy.wait(2000);
     });
     cy.wait(4000);
    cy.get('[role="alert"]').should("contain.text","File Uploaded Successfully. Transaction ID : ")
    cy.wait(2000);
    cy.log("File Uploaded Successfully");

  }



  BaseBranchMaster1150(){
    cy.wait(600);
   cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.selectMasterTemplate).select('Base Branch Master');
    cy.wait(2000);
    cy.get(this.locators.downloadBucketMaster).click();
    cy.wait(2000);
    cy.log('Template Dowloaded');
    cy.wait(2000);
    cy.get(this.locators.SelectUploadType).select('Base Branch Master');
    cy.wait(2000);
    cy.fixture('BaseBranchMasterTemplate_ExtraFields.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'BaseBranchMasterTemplate_ExtraFields.xlsx',
        mimeType: 'text/xlsx',
      });
      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.get(this.locators.ClickOnOK).click();
      cy.wait(2000);
     });
     cy.wait(4000);
    cy.get('[role="alert"]').should("contain.text","File Uploaded Successfully. Transaction ID : ")
    cy.wait(2000);
    cy.log("File Uploaded Successfully");

  }

  BaseBranchMaster1161(){
    cy.wait(600);
   cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.bulkUploadMasterStatus).click({force : true});
    cy.wait(2000);
    cy.get(this.locators.searchBtn).click({force : true});
    cy.wait(2000);
    cy.get('[role="alert"]').should(
      "contain.text",
      "File Type is mandatory"
    )
  }


  BucketMaster1130(){
    cy.wait(600);
      cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
 
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.selectMasterTemplate).select('Bucket Master')
    cy.wait(2000);
    cy.log('Template Dowloaded');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Bucket Master');
    cy.wait(2000);
    cy.fixture('BucketMasterTemplate_10Records.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'BucketMasterTemplate_10Records.xlsx',
        mimeType: 'text/xlsx',
      });

      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.get(this.locators.ClickOnOK).click();
      cy.wait(2000);
      
     });
     cy.wait(4000);
     cy.get('[role="alert"]').should(
      "contain.text",
      "File Uploaded Successfully. Transaction ID : "
    )
     cy.wait(2000);
     cy.log("File Uploaded Successfully");
    
  }



  BucketMaster1132(){
    cy.wait(2000);
    cy.get('body > app-root:nth-child(1) > div:nth-child(1) > div:nth-child(2) > app-navbar:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)').click();
    cy.wait(2000);
    cy.get('body > app-root:nth-child(1) > div:nth-child(1) > div:nth-child(2) > app-navbar:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > span:nth-child(2)').click({force : true});
    cy.wait(2000);
    cy.get(this.locators.selectMasterTemplate).select('Bucket Master')
    cy.wait(2000);
    cy.get(this.locators.downloadBucketMaster).click();
    cy.wait(2000);
    cy.log('Template Dowloaded');
    cy.wait(2000);
    cy.get('div[class="form-inline"] select[name="template"]').select('Bucket Master');
    cy.wait(2000);
    cy.fixture('BucketMasterTemplate_10Record_Duplicate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'BucketMasterTemplate_10Record_Duplicate.xlsx',
        mimeType: 'text/xlsx',
      });

      cy.get('.btn-success').click();
      cy.wait(2000);
      
     });
     cy.wait(4000);
     cy.get('[role="alert"]').should(
      "contain.text",
      "File Uploaded Successfully. Transaction ID : "
    )
     cy.wait(2000);
     cy.log("File Uploaded Successfully");
    
  }

  BucketMaster1133(){
    cy.wait(600);
      cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
 
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.selectMasterTemplate).select('Bucket Master')
    cy.wait(2000);
    cy.get(this.locators.downloadBucketMaster).click();
    cy.wait(2000);
    cy.log('Template Dowloaded');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Bucket Master');
    cy.wait(2000);
    cy.fixture('BucketMasterTemplate_10Records.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'BucketMasterTemplate_10Records.xlsx',
        mimeType: 'text/xlsx',
      });

      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.get(this.locators.ClickOnOK).click();
      cy.wait(2000);
      
     });
     cy.wait(4000);
     cy.get('[role="alert"]').should(
      "contain.text",
      "File Uploaded Successfully. Transaction ID : "
    )
     cy.wait(2000);
     cy.log("File Uploaded Successfully");
    
  }


  BaseBranchMaster1148(){
    cy.wait(600);
      cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
 
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.selectMasterTemplate).select('Bucket Master')
    cy.wait(2000);
    cy.get(this.locators.downloadBucketMaster).click({force:true} );
    cy.wait(2000);
    cy.log('Template Dowloaded');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Bucket Master');
    cy.wait(2000);
    cy.fixture('BaseBranchMasterTemplateChangedExtension.csv').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'BBaseBranchMasterTemplateChangedExtension.csv',
        mimeType: 'text/csv',
      });

     });
     cy.wait(2000);
    cy.get('[role="alert"]').should("contain.text","You can only upload the file with extension xls or xlsx")
   
  }


  BaseBranchMaster1149(){
    cy.wait(600);
      cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
 
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.selectMasterTemplate).select('Bucket Master')
    cy.wait(2000);
    cy.get(this.locators.downloadBucketMaster).click();
    cy.wait(2000);
    cy.log('Template Dowloaded');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Bucket Master');
    cy.wait(2000);
    cy.fixture('BaseBranchMasterTemplateSequenceChanged.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'BaseBranchMasterTemplateSequenceChanged.xlsx',
        mimeType: 'text/xlsx',
      });

      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.get(this.locators.ClickOnOK).click();
      cy.wait(2000);
      
     });
     cy.wait(4000);
     cy.get('[role="alert"]').should(
      "contain.text",
      "File Uploaded Successfully. Transaction ID : "
    )
     cy.wait(2000);
     cy.log("File Uploaded Successfully");
    
  }


  DispositionCodeMaster1214(){
    cy.wait(2000);
      cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
 
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.selectMasterTemplate).select('Disposition Master')
    cy.wait(2000);
    cy.get(this.locators.downloadBucketMaster).click();
    cy.wait(2000);
    cy.log('Template Dowloaded');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Disposition Master');
    cy.wait(2000);
    cy.fixture('DispositionMasterTemplateSequenceChanged.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'DispositionMasterTemplateSequenceChanged.xlsx',
        mimeType: 'text/xlsx',
      });

      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.get(this.locators.ClickOnOK).click();
      cy.wait(2000);
      
     });
     cy.wait(4000);
     cy.get('[role="alert"]').should(
      "contain.text",
      "File Uploaded Successfully. Transaction ID : "
    )
     cy.wait(2000);
     cy.log("File Uploaded Successfully");
    
  }


  DispositionCodeMaster1215(){
    cy.wait(2000);
      cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
 
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.selectMasterTemplate).select('Disposition Master')
    cy.wait(2000);
    cy.get(this.locators.downloadBucketMaster).click({force:true});
    cy.wait(2000);
    cy.log('Template Dowloaded');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Disposition Master');
    cy.wait(2000);
    cy.fixture('DispositionMasterTemplateNewFields.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'DispositionMasterTemplateNewFields.xlsx',
        mimeType: 'text/xlsx',
      });

      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.get(this.locators.ClickOnOK).click();
      cy.wait(2000);
      
     });
     cy.wait(4000);
     cy.get('[role="alert"]').should(
      "contain.text",
      "File Uploaded Successfully. Transaction ID : "
    )
     cy.wait(2000);
     cy.log("File Uploaded Successfully");
    
  }


  DepartmentAndDesignationMaster1286(){
    cy.wait(2000);
      cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
 
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.get(this.locators.selectMasterTemplate).select('Department and Designation Master')
    cy.wait(2000);
    cy.get(this.locators.downloadBucketMaster).click();
    cy.wait(2000);
    cy.log('Template Dowloaded');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Department and Designation Master');
    cy.wait(2000);
    cy.fixture('DepartmentAndDesiginationMasterTemplateUpdatedDepartDesig.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'DepartmentAndDesiginationMasterTemplateUpdatedDepartDesig.xlsx',
        mimeType: 'text/xlsx',
      });

      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.get(this.locators.ClickOnOK).click();
      cy.wait(2000);
      
     });
     cy.wait(4000);
     cy.get('[role="alert"]').should(
      "contain.text",
      "File Uploaded Successfully. Transaction ID : "
    )
     cy.wait(2000);
     cy.log("File Uploaded Successfully");
    
  }


  DepositeBankMaster1346(){
    cy.wait(2000);
      cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
 
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.selectMasterTemplate).select('Deposit Bank Master')
    cy.wait(2000);
    cy.get(this.locators.downloadBucketMaster).click();
    cy.wait(2000);
    cy.log('Template Dowloaded');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Deposit Bank Master');
    cy.wait(2000);
    cy.fixture('DepositBankMasterTemplateNoData.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'DepositBankMasterTemplateNoData.xlsx',
        mimeType: 'text/xlsx',
      });

      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.get(this.locators.ClickOnOK).click();
      cy.wait(2000);
      
     });
     cy.wait(4000);
     cy.get('[role="alert"]').should(
      "contain.text",
      "File Uploaded Successfully. Transaction ID : "
    )
     cy.wait(2000);
     cy.log("File Uploaded Successfully");
    
  }

  DepositeBankMaster1348(){
    cy.wait(2000);
      cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
 
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.selectMasterTemplate).select('Deposit Bank Master')
    cy.wait(2000);
    cy.get(this.locators.downloadBucketMaster).click();
    cy.wait(2000);
    cy.log('Template Dowloaded');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Deposit Bank Master');
    cy.wait(2000);
    cy.fixture('DepositBankMasterTemplateExtensionChanged.csv').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'DepositBankMasterTemplateExtensionChanged.csv',
        mimeType: 'text/csv',
      });

     });
     //cy.wait(2000);
    //cy.get('[role="alert"]').should("contain.text"," You can only upload the file with extension xls or xlsx ")
   
  }

  DepositeBankMaster1336(){
    cy.wait(2000);
      cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
 
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.selectMasterTemplate).select('Deposit Bank Master')
    cy.wait(2000);
    cy.get(this.locators.downloadBucketMaster).click();
    cy.wait(2000);
    cy.log('Template Dowloaded');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Deposit Bank Master');
    cy.wait(2000);
    cy.fixture('DepositBankMasterTemplate_10Records.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'DepositBankMasterTemplate_10Records.xlsx',
        mimeType: 'text/xlsx',
      });

      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.get(this.locators.ClickOnOK).click();
      cy.wait(2000);
      
     });
     cy.wait(4000);
     cy.get('[role="alert"]').should(
      "contain.text",
      "File Uploaded Successfully. Transaction ID : "
    )
     cy.wait(2000);
     cy.log("File Uploaded Successfully");
    
  }


  DepositeBankMaster1337(){
    cy.wait(2000);
      cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
 
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.selectMasterTemplate).select('Deposit Bank Master')
    cy.wait(2000);
    cy.get(this.locators.downloadBucketMaster).click();
    cy.wait(2000);
    cy.log('Template Dowloaded');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Deposit Bank Master');
    cy.wait(2000);
    cy.fixture('DepositBankMasterTemplate_10Records.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'DepositBankMasterTemplate_10Records.xlsx',
        mimeType: 'text/xlsx',
      });

      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.get(this.locators.ClickOnOK).click();
      cy.wait(2000);
      
     });
     cy.wait(4000);
     cy.get('[role="alert"]').should(
      "contain.text",
      "File Uploaded Successfully. Transaction ID : "
    )
     cy.wait(2000);
     cy.log("File Uploaded Successfully");
    
  }


  DepositeBankMaster1349(){
    cy.wait(2000);
      cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
 
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.selectMasterTemplate).select('Deposit Bank Master')
    cy.wait(2000);
    cy.get(this.locators.downloadBucketMaster).click();
    cy.wait(2000);
    cy.log('Template Dowloaded');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Deposit Bank Master');
    cy.wait(2000);
    cy.fixture('DepositBankMasterTemplateSequenceChanged.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'DepositBankMasterTemplateSequenceChanged.xlsx',
        mimeType: 'text/xlsx',
      });

      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.get(this.locators.ClickOnOK).click();
      cy.wait(2000);
      
     });
     cy.wait(4000);
     cy.get('[role="alert"]').should(
      "contain.text",
      "File Uploaded Successfully. Transaction ID : "
    )
     cy.wait(2000);
     cy.log("File Uploaded Successfully");
    
  }


  DepositeBankMaster1350(){
    cy.wait(2000);
      cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
 
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.selectMasterTemplate).select('Deposit Bank Master')
    cy.wait(2000);
    cy.get(this.locators.downloadBucketMaster).click();
    cy.wait(2000);
    cy.log('Template Dowloaded');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Deposit Bank Master');
    cy.wait(2000);
    cy.fixture('DepositBankMasterTemplateNewFieldAdded.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'DepositBankMasterTemplateNewFieldAdded.xlsx',
        mimeType: 'text/xlsx',
      });

      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.get(this.locators.ClickOnOK).click();
      cy.wait(2000);
      
     });
     cy.wait(4000);
     cy.get('[role="alert"]').should(
      "contain.text",
      "File Uploaded Successfully. Transaction ID : "
    )
     cy.wait(2000);
     cy.log("File Uploaded Successfully");
    
  }

  BankMaster1318(){
    cy.wait(2000);
   cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.selectMasterTemplate).select('Bank Master')
    cy.wait(2000);
    cy.get(this.locators.downloadBucketMaster).click();
    cy.wait(2000);
    cy.log('Template Dowloaded');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Bank Master');
    cy.wait(2000);
    cy.fixture('BankMasterTemplate.csv').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'BankMasterTemplate.csv',
        mimeType: 'text/csv',
      });

     });
     cy.wait(2000);
    cy.get('[role="alert"]').should("contain.text","You can only upload the file with extension xls or xlsx")
   
  }


  BankMaster1319(){
    cy.wait(2000);
   cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.get(this.locators.selectMasterTemplate).select('Bank Master')
    cy.wait(2000);
    cy.get(this.locators.downloadBucketMaster).click();
    cy.wait(2000);
    cy.log('Template Dowloaded');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Bank Master');
    cy.wait(2000);
    cy.fixture('BankMasterTemplateSequenceChanged.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'BankMasterTemplateSequenceChanged.xlsx',
        mimeType: 'text/xlsx',
      });

      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      
     });
    
    
  }


  BankMaster1320(){
    cy.wait(2000);
   cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.selectMasterTemplate).select('Bank Master')
    cy.wait(2000);
    cy.get(this.locators.downloadBucketMaster).click();
    cy.wait(2000);
    cy.log('Template Dowloaded');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Bank Master');
    cy.wait(2000);
    cy.fixture('BankMasterTemplateNewFieldAdded.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'BankMasterTemplateNewFieldAdded.xlsx',
        mimeType: 'text/xlsx',
      });

      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(4000);
      cy.get(this.locators.ClickOnOK).click({force:true});
      cy.wait(4000);
     });
     cy.wait(4000);
     cy.get('[role="alert"]').should(
      "contain.text",
      "File Uploaded Successfully. Transaction ID : "
    )
     cy.wait(2000);
     cy.log("File Uploaded Successfully");
    
  }


  DepartmentAndDesignationMaster1297(){
    cy.wait(2000);
    cy.get('body > app-root:nth-child(1) > div:nth-child(1) > div:nth-child(2) > app-navbar:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)').click();
    cy.wait(2000);
    cy.get('body > app-root:nth-child(1) > div:nth-child(1) > div:nth-child(2) > app-navbar:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > span:nth-child(2)').click({force : true});
    cy.wait(2000);
    cy.get(this.locators.selectMasterTemplate).select('Department and Designation Master')
    cy.wait(2000);
    cy.get(this.locators.downloadBucketMaster).click();
    cy.wait(2000);
    cy.log('Template Dowloaded');
    cy.wait(2000);
    cy.get('div[class="form-inline"] select[name="template"]').select('Department and Designation Master');
    cy.wait(2000);
    cy.fixture('DepartmentAndDesiginationMasterTemplateNoData.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'DepartmentAndDesiginationMasterTemplateNoData.xlsx',
        mimeType: 'text/xlsx',
      });

      cy.get('.btn-success').click();
      cy.wait(2000);
      
     });
     cy.wait(4000);
     cy.get('[role="alert"]').should(
      "contain.text",
      "File Uploaded Successfully. Transaction ID : "
    )
     cy.wait(2000);
     cy.log("File Uploaded Successfully");
    
  }

  BankMaster1299(){
    cy.wait(2000);
    cy.get('body > app-root:nth-child(1) > div:nth-child(1) > div:nth-child(2) > app-navbar:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)').click();
    cy.wait(2000);
    cy.get('body > app-root:nth-child(1) > div:nth-child(1) > div:nth-child(2) > app-navbar:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > span:nth-child(2)').click({force : true});
    cy.wait(2000);
    cy.get(this.locators.selectMasterTemplate).select('Department and Designation Master')
    cy.wait(2000);
    cy.get(this.locators.downloadBucketMaster).click();
    cy.wait(2000);
    cy.log('Template Dowloaded');
    cy.wait(2000);
    cy.get('div[class="form-inline"] select[name="template"]').select('Department and Designation Master');
    cy.wait(2000);
    cy.fixture('DepartmentAndDesiginationMasterTemplateExtensionChanged.csv').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'BDepartmentAndDesiginationMasterTemplateExtensionChanged.csv',
        mimeType: 'text/csv',
      });

     });
     cy.wait(2000);
    cy.get('[role="alert"]').should("contain.text"," You can only upload the file with extension xls or xlsx ")
   
  }


  ProductMaster1106(){
    cy.wait(2000);
      cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
 
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.selectMasterTemplate).select('Bank Master')
    cy.wait(2000);
    cy.get(this.locators.downloadBucketMaster).click();
    cy.wait(2000);
    cy.log('Template Dowloaded');
    const filePath = 'Cypress/downloads/ProductMasterTemplate.xlsx'

    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Bank Master');
    cy.wait(2000);
    cy.fixture('ProductMasterTemplateNewFieldAdded.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'ProductMasterTemplateNewFieldAdded.xlsx',
        mimeType: 'text/xlsx',
      });

      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click();
      cy.wait(4000);
     });
     cy.wait(4000);
     cy.get('[role="alert"]').should(
      "contain.text",
      "File Uploaded Successfully. Transaction ID : "
    )
     cy.wait(2000);
     cy.log("File Uploaded Successfully");
    
  }

  BucketMaster1123(){
    cy.wait(2000);
      cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
 
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.selectMasterTemplate).select('Bucket Master')
    cy.wait(2000);
    cy.get(this.locators.downloadBucketMaster).click();
    cy.wait(2000);
    cy.log('Template Dowloaded');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Bucket Master');
    cy.wait(2000);
    cy.fixture('BucketMasterTemplate10Records.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'BucketMasterTemplate10Records.xlsx',
        mimeType: 'text/xlsx',
      });

      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);

      cy.get(this.locators.ClickOnOK).click();
      cy.wait(2000);
      
     });
     cy.wait(4000);
     cy.get('[role="alert"]').should(
      "contain.text",
      "File Uploaded Successfully. Transaction ID : "
    )
     cy.wait(2000);
     cy.log("File Uploaded Successfully");
    
  }


  BucketMaster1132(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
      cy.contains("Masters Upload").scrollIntoView().should("be.visible").click();
 
    cy.wait(2000);
    cy.contains("Bulk Upload Masters").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.selectMasterTemplate).select('Bucket Master')
    cy.wait(2000);
    cy.get(this.locators.downloadBucketMaster).click();
    cy.wait(2000);
    cy.log('Template Dowloaded');
    cy.wait(2000);
    cy.get(this.locators.SelectPWUF).select('Bucket Master');
    cy.wait(2000);
    cy.fixture('BucketMasterTemplate10Records.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'BucketMasterTemplate10Records.xlsx',
        mimeType: 'text/xlsx',
      });

      cy.get(this.locators.uploadFileBtn).click({force:true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOK).click();
      cy.wait(2000);
      
     });
     cy.wait(4000);
     cy.get('[role="alert"]').should(
      "contain.text",
      "File Uploaded Successfully. Transaction ID : "
    )
     cy.wait(2000);
     cy.log("File Uploaded Successfully");
    
  }

  


  // DefineACM1377(){
  //    cy.contains("System Settings").scrollIntoView().should("be.visible").click();

  //   cy.wait(2000);
  //   cy.get(this.locators.web_submodule).click({force : true});
  //   cy.wait(2000);
  //   cy.log("clicked On Web");
  //   cy.wait(2000);
  //   cy.get(this.locators.mobile_submodule).click({force : true});
  //   cy.wait(2000);
  //   cy.log("clicked On Mobile");
  //   cy.wait(2000);

  // }

  // DefineACM1378(){
  //    cy.contains("System Settings").scrollIntoView().should("be.visible").click();
  //   cy.wait(2000);
  //   cy.get(this.locators.defineACM).click();
  //   cy.wait(2000);
  //   cy.get(this.locators.web_submodule).click({force : true});
  //   cy.wait(2000);
  //   cy.log("clicked On Web");
  //   cy.wait(2000);
  //   cy.contains("Department").should('be.visible');
  //   cy.wait(2000);
  //   cy.wait(2000);
  //   cy.contains('Designation:').should('be.visible');
  //   cy.wait(2000);
  //   cy.contains('Accountability').should('be.visible');
  //   cy.wait(2000);
  //   cy.get(this.locators.SeleDept).select("CRM")
  //   cy.wait(2000);
  //   cy.get(this.locators.searchBtn).should('be.visible');

  // }

  // DefineACM1379(){
  //    cy.contains("System Settings").scrollIntoView().should("be.visible").click();
  //   cy.wait(2000);
  //   cy.get(this.locators.defineACM).click();
  //   cy.wait(2000);
  //   cy.get(this.locators.web_submodule).click({force : true});
  //   cy.wait(2000);
  //   cy.log("clicked On Web");
  //   cy.wait(2000);
  //   cy.wait(2000);
  //   cy.get(this.locators.SeleDept).select('System', {force : true});
  //   cy.wait(2000);
  //   cy.get(this.locators.designation).select('Administrator');
  //   cy.wait(2000);
  //   cy.get(this.locators.searchBtn).click();
  //   cy.wait(2000);
  //   // cy.contains("Dashboard").should('be.visible');
  //   // cy.wait(2000);
  //   cy.contains("User Management").scrollIntoView().should('be.visible');
  //   cy.wait(2000);
  //   cy.contains("Allocation").scrollIntoView().should('be.visible');
  //   cy.wait(2000);
  //   cy.contains("Trails").scrollIntoView().should('be.visible');
  //   cy.wait(2000);
  //   cy.contains("Payments").scrollIntoView().should('be.visible');
  //   cy.wait(2000);
  //   cy.contains("Geo Report").scrollIntoView().should('be.visible');
  //   cy.wait(2000);
  //   // cy.contains("Digital ID Card").scrollIntoView().should('be.visible');
  //   // cy.wait(2000);
  //   // cy.contains("Target Setting").scrollIntoView().should('be.visible');
  //   // cy.wait(2000);
  //   // cy.contains("Curing Tools").scrollIntoView().should('be.visible');
  //   // cy.wait(2000);
  //   // cy.contains("Segmentation").scrollIntoView().should('be.visible');
  //   // cy.wait(2000);
  //   // cy.get(this.locators.SystemSetting).should('be.visible');
  //   // cy.wait(2000);
  //   // cy.get(this.locators.Communication).should('be.visible');
  //   // cy.wait(2000);
  //   // cy.get(this.locators.Reports).should('be.visible');

  
  // }


  // DefineACM1380(){
  //    cy.contains("System Settings").scrollIntoView().should("be.visible").click();
  //   cy.wait(2000);
  //   cy.wait(2000);
  //   cy.get(this.locators.defineACM).click();
  //   cy.wait(2000);
  //   cy.get(this.locators.web_submodule).click({force : true});
  //   cy.wait(2000);
  //   cy.log("clicked On Web");
  //   cy.wait(2000);
    
  //   cy.wait(2000);
  //   cy.wait(2000);
  //   cy.get(this.locators.SeleDept).select('System', {force : true});
  //   cy.wait(2000);
  //   cy.get(this.locators.designation).select('Administrator');
  //   cy.wait(2000);
  //   cy.get(this.locators.searchBtn).click();
  //   cy.wait(20000);
  //   cy.get(':nth-child(2) > .nav-link').click();
  //   cy.wait(2000);
  //   cy.contains("Create Agent").should('be.visible');
  //   cy.wait(2000);
  //   //cy.contains("Search Agent").should('be.visible');
  //   cy.wait(2000);
  //   cy.contains("Edit Agent").should('be.visible');
  //   cy.wait(2000);
  //   //cy.contains("View Agent	").should('be.visible');
  //   cy.wait(2000);
  //   // cy.get(this.locators.createAgentCheckBox).uncheck();
  //   // cy.wait(2000);
  //   // cy.get(this.locators.createAgentCheckBox).check();
  //   // cy.wait(2000);
  //   // cy.get(this.locators.createAgentCheckBox).uncheck();
  //   // cy.wait(2000);
  //   // cy.get(this.locators.createAgentCheckBox).check();
  //   cy.wait(2000);
  //   cy.get(this.locators.UpdateBtn).click();

  // }

  // DefineACM1381(){
  //    cy.contains("System Settings").scrollIntoView().should("be.visible").click();
  //   cy.wait(2000);
  //   cy.get(this.locators.defineACM).click();
  //   cy.wait(2000);
  //   cy.get(this.locators.web_submodule).click({force : true});
  //   cy.wait(2000);
  //   cy.log("clicked On Web");
  //   cy.wait(2000);
  //   cy.wait(2000);
  //   cy.get(this.locators.department).select('System', {force : true});
  //   cy.wait(2000);
  //   cy.get(this.locators.designation).select('Administrator');
  //   cy.wait(2000);
  //   cy.get(this.locators.searchBtn).click({force : true});
  //   cy.wait(2000);
  //   cy.get(":nth-child(2) > .nav-link").click();
  //   cy.wait(2000);
  //   cy.contains("Create Agent").should('be.visible');
  //   cy.wait(2000);
  //   //cy.contains("Search Agent").should('be.visible');
  //   cy.wait(2000);
  //   cy.contains("Edit Agent").should('be.visible');
  //   cy.wait(2000);
  //   // cy.get(this.locators.createAgentCheckBox).uncheck();
  //   // cy.wait(2000);
  //   // cy.get(this.locators.createAgentCheckBox).check();
  //   // cy.wait(2000);
  //   // cy.get(this.locators.createAgentCheckBox).uncheck();
  //   // cy.wait(2000);
  //   // cy.get(this.locators.createAgentCheckBox).check();
  //   cy.wait(2000);
  //   cy.get(this.locators.UpdateBtn).click();
  //   cy.wait(700);
  //   cy.contains('Access Control has been updated successfully.').should("be.visible");
      
     
   
    

  // }


  // DefineACM1382(){
  //    cy.contains("System Settings").scrollIntoView().should("be.visible").click();
  //   cy.wait(2000);
  //   cy.get(this.locators.defineACM).click();
  //   cy.wait(2000);
  //   cy.get(this.locators.web_submodule).click({force : true});
  //   cy.wait(2000);
  //   cy.log("clicked On Web");
  //   cy.wait(2000);
  //   cy.wait(2000);
  //   cy.get(this.locators.department).select('System', {force : true});
  //   cy.wait(2000);
  //   cy.get(this.locators.designation).select('Administrator');
  //   cy.wait(2000);
  //   cy.get(this.locators.searchBtn).click({force : true});
  //   cy.wait(2000);
  //   cy.get(":nth-child(2) > .nav-link").click();
  //   cy.wait(2000);
  //   cy.contains("Create Agent").should('be.visible');
  //   cy.wait(2000);
  //   //cy.contains("Search Agent").should('be.visible');
  //   cy.wait(2000);
  //   cy.contains("Edit Agent").should('be.visible');
  //   cy.wait(2000);
  //   // cy.get(this.locators.createAgentCheckBox).uncheck();
  //   // cy.wait(2000);
  //   // cy.get(this.locators.createAgentCheckBox).check();
  //   // cy.wait(2000);
  //   // cy.get(this.locators.createAgentCheckBox).uncheck();
  //   // cy.wait(2000);
  //   // cy.get(this.locators.createAgentCheckBox).check();
  //   // cy.wait(2000);
  //   cy.get(this.locators.UpdateBtn).click();
  //   cy.wait(700);
  //   cy.contains('Access Control has been updated successfully.').should("be.visible");
  //   cy.wait(2000);
  //   cy.reload();
  //   cy.wait(2000);
  //   cy.log("Page Refreshed");
  //   cy.wait(2000);
  //   cy.get(this.locators.UsermanagementModule).should('be.visible');

  // }


  // DefineACM1384(){
  //    cy.contains("System Settings").scrollIntoView().should("be.visible").click();
  //   cy.wait(2000);
  //   cy.get(this.locators.defineACM).click();
  //   cy.wait(2000);
  //   cy.get(this.locators.web_submodule).click({force : true});
  //   cy.wait(2000);
  //   cy.log("clicked On Web");
  //   cy.wait(2000);
  //   cy.get(this.locators.department).select('Agency Backend', {force : true});
  //   cy.wait(2000);
  //   cy.get(this.locators.designation).select('Agency Backend');
  //   cy.wait(2000);
  //   cy.get(this.locators.searchBtn).click({force : true});
  //   cy.wait(2000);
  //   cy.get(':nth-child(4) > .nav-link').click();
  //   cy.wait(2000);
  //   // cy.get(this.locators.Allocation).click();
  //   // cy.wait(2000);
  //   // cy.get(this.locators.Trails).click();
  //   // cy.wait(2000);
  //   // cy.get(this.locators.Payments).click();
  //   // cy.wait(2000);
  //   // cy.get(this.locators.GeoReports).click();
  //   // cy.wait(2000);
  //   // cy.get(this.locators.DigitalIDCard).click();
  //   // cy.wait(2000);
  //   // cy.get(this.locators.TargetSetting).click();
  //   // cy.wait(2000);
  //   // cy.get(this.locators.CuringTools).click();
  //   // cy.wait(2000);
  //   // cy.get(this.locators.Segmentation).click();
  //   // cy.wait(2000);
  //   // cy.get(this.locators.SystemSetting).click();
  //   // cy.wait(2000);
  //   // cy.get(this.locators.Communication).click();
  //   // cy.wait(2000);
  //   // cy.get(this.locators.Reports).click();
  //   cy.wait(2000);
  //   cy.get(this.locators.UpdateBtn).click();
  //   cy.wait(700);
  //   cy.contains('Access Control has been updated successfully.').scrollIntoView().should("be.visible");
  //   cy.wait(2000);
  //   cy.reload();
  //   cy.wait(2000);
  //   cy.log("Page Refreshed");
  //   cy.wait(2000);
  //   cy.get(this.locators.UsermanagementModule).should('be.visible');
  // }

  DefineACM1385(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.defineACM).click();
    cy.wait(2000);
    cy.get(this.locators.web_submodule).click({force : true});
    cy.wait(2000);
    cy.log("clicked On Web");
    cy.wait(2000);
    cy.get(this.locators.mobile_submodule).click({force : true});
    cy.wait(2000);
    cy.log("clicked On Mobile");
    cy.wait(2000);
  }


  DefineACM1386(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.defineACM).click();
    cy.wait(2000);
    cy.get(this.locators.mobile_submodule).click({force : true});
    cy.wait(2000);
    cy.log("clicked On Mobile");
    cy.wait(2000);
    cy.get(this.locators.searchBtn).should('not.be.enabled');
    cy.wait(2000);
    cy.get(this.locators.department).select('Agency Backend', {force : true});
    cy.wait(2000);
    cy.get(this.locators.designation).select('Agency Backend');
    cy.wait(2000);
    cy.get(this.locators.accountability).should('have.attr', 'readonly');
    cy.wait(2000);
    cy.get(this.locators.searchBtn).should('be.enabled');
  }


  DefineACM1387(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.defineACM).click();
    cy.wait(2000);
    cy.get(this.locators.mobile_submodule).click({force : true});
    cy.wait(2000);
    cy.log("clicked On Web");
    cy.wait(2000);
    cy.get(this.locators.department).select('System', {force : true});
    cy.wait(2000);
    cy.get(this.locators.designation).select('Administrator');
    cy.wait(2000);
    cy.get(this.locators.searchBtn).click();
    cy.wait(2000);
    cy.contains("My Accounts").should('be.visible');
    cy.wait(2000);
    cy.contains("Account Detail Actions").scrollIntoView().should('be.visible');
    cy.wait(2000);
    // cy.get(this.locators.dashboard).should('be.visible');
    // cy.wait(2000);
    // cy.get(':nth-child(4) > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').should('be.visible');
    // cy.wait(2000);
    cy.get(this.locators.UpdateBtn).should('be.visible');

  }


  DefineACM1388(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.defineACM).click();
    cy.wait(2000);
    cy.get(this.locators.mobile_submodule).click({force : true});
    cy.wait(2000);
    cy.log("clicked On Web");
    cy.wait(2000);
    cy.get(this.locators.department).select('System', {force : true});
    cy.wait(2000);
    cy.get(this.locators.designation).select('Administrator');
    cy.wait(2000);
    cy.get(this.locators.searchBtn).click();
    cy.wait(2000);
    // cy.get(this.locators.dashboard).click();
    // cy.wait(2000);
    cy.contains("Issue Receipt").should('be.visible');
    cy.wait(2000);
    cy.contains("My Receipts").should('be.visible');
    cy.wait(2000);
    cy.contains("My Accounts").should('be.visible');
    cy.wait(2000);
    cy.contains("Scope").should('be.visible');
    cy.wait(2000);
    cy.contains("Has Access").should('be.visible');
    cy.wait(2000);
    // cy.scrollTo('bottom');
    // cy.wait(2000);
    cy.get(this.locators.UpdateBtn).click();
  
  }


  DefineACM1389(){
     cy.contains("System Settings").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.defineACM).click();
    cy.wait(2000);
    cy.get(this.locators.mobile_submodule).click({force : true});
    cy.wait(2000);
    cy.log("clicked On Web");
    cy.wait(2000);
    cy.get(this.locators.department).select('System', {force : true});
    cy.wait(2000);
    cy.get(this.locators.designation).select('Administrator');
    cy.wait(2000);
    cy.get(this.locators.searchBtn).click();
    cy.wait(2000);
    //cy.get(this.locators.dashboard).click();
    cy.wait(2000);
    cy.contains("Issue Receipt").should('be.visible');
    cy.wait(2000);
    cy.contains("My Receipts").should('be.visible');
    cy.wait(2000);
    cy.contains("My Accounts").should('be.visible');
    cy.wait(2000);
    cy.contains("Scope").should('be.visible');
    cy.wait(2000);
    cy.contains("Has Access").should('be.visible');
    cy.wait(2000);
   
    cy.get(this.locators.UpdateBtn).click();
    cy.wait(700);
    cy.contains('Access Control has been updated successfully.').should("be.visible")

}




}
export default SystemSettingPage;
