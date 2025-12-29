import { getLocators } from '../utils/locatorUtils';
import { getBaseUrl } from '../utils/configUtils';


class UserManagementPage {
  constructor(locators) {
    this.locators = locators;
  }

  UserManagementModule(){
    cy.wait(5000);
    cy.get(this.locators.clickonusermanagement).click();
  }


  CreateAgency() {
    const filePath = 'Aadhar-image.png';
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click().click();
    cy.wait(2000);
    cy.get(this.locators.fillAgencyName).type("ABCDEF");
    cy.wait(2000);
    cy.get(this.locators.selectRecommendingOfficer).select("danny ng");
    cy.wait(2000);
    cy.get(this.locators.selectAgencyType).select("Bank Staff");
    cy.wait(2000);
    cy.get(this.locators.selectAgencySubType).select("BCC");
    cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
    cy.get(this.locators.clickongenerateENcollectcode).click();
    cy.wait(2000);
    //Address Details
    cy.get(this.locators.clickonaddressdetails).click();
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
    cy.wait(2000);
    cy.get(this.locators.mobilenumber).type("1769875429");
    cy.wait(2000);
    cy.get(this.locators.areacode).type("1234");
    cy.wait(2000);
    cy.get(this.locators.landlinenumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.selectstate).select("All");
    cy.wait(2000);
    cy.get(this.locators.fillemailid).type("sachin10@yopmail.com");
    cy.wait(2000);
    cy.get(this.locators.selectcity).select("All");
    cy.wait(2000);
    cy.get(this.locators.postalcode).type("123456");
    cy.wait(2000);
    //Banking details
    cy.get(this.locators.clickonbankingdetails).click();
    cy.wait(2000);
    cy.get(this.locators.accountholdername).type("AJAY KUMAR");
    cy.wait(2000);
    cy.get(this.locators.bankaccountnumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.bankname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.bankbranchname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
    cy.wait(2000);
    //Documentation details
    cy.get(this.locators.documentationdetails).click();
    cy.wait(2000);
    cy.get(this.locators.signagreeementW).click();
    cy.wait(2000);
    cy.get(this.locators.verificationreport).click();
    cy.wait(2000);
    cy.get(this.locators.rletter).click();
    cy.wait(2000);
    cy.get(this.locators.pbankdetails).click();
    cy.wait(2000);
    cy.get(this.locators.pitr).click();
    cy.wait(2000);
    cy.get(this.locators.kycid).select("Aadhar Card");
    cy.wait(2000);
    cy.get(this.locators.kycaddress).select("Driving Licence");
    cy.wait(2000);
    //cy.get(this.locators.addkycid).click({force: true});
    //cy.wait(1000);
    //cy.get(this.locators.addkycid).attachFile(filePath); // Corrected line to upload file
    //cy.wait(1000);
    // cy.get(this.locators.addkycaddress).click({force: true});
    // cy.wait(1000);
    // cy.get(this.locators.addkycaddress).attachFile(filePath); // Corrected line to upload file
    // cy.wait(1000);
    cy.get(this.locators.scopeofword).click();
    cy.wait(2000);
    cy.get(this.locators.productgroup).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.product).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.subproduct).select("Personal Loan");
    cy.wait(2000);

    cy.get(this.locators.placeofwork).click();
    cy.wait(2000);
    cy.get(this.locators.selectpg).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.selectp).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.selectsubp).select("Personal Loan");
    cy.wait(2000);
    cy.get(this.locators.selectbucket).select("11");
    cy.wait(2000);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectregion).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectState).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectCity).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectmanager).select("Ajit");
    cy.wait(2000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).click();
    cy.wait(2000);
    cy.get(this.locators.previousmonth).click();
    cy.wait(2000);
    cy.get(':nth-child(1) > :nth-child(7) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(3) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.Contactexpiredate).click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(8) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.saveagencyprofile).click();
    cy.wait(2000);

  }

  CreateAgency008() {
    const filePath = 'Aadhar-image.png';
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click().click();
    cy.wait(2000);
    cy.get(this.locators.fillAgencyName).type("ABCDEF");
    cy.wait(2000);
    cy.get(this.locators.selectRecommendingOfficer).select("danny ng");
    cy.wait(2000);
    cy.get(this.locators.selectAgencyType).select("Bank Staff");
    cy.wait(2000);
    cy.get(this.locators.selectAgencySubType).select("BCC");
    cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
    cy.get(this.locators.clickongenerateENcollectcode).click();
    cy.wait(2000);
    //Address Details
    cy.get(this.locators.clickonaddressdetails).click();
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
    cy.wait(2000);
    cy.get(this.locators.mobilenumber).type("0769875429");
    cy.wait(2000);
    cy.get(this.locators.areacode).type("1234");
    cy.wait(2000);
    cy.get(this.locators.landlinenumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.selectstate).select("All");
    cy.wait(2000);
    cy.get(this.locators.fillemailid).type("sachin10@yopmail.com");
    cy.wait(2000);
    cy.get(this.locators.selectcity).select("All");
    cy.wait(2000);
    cy.get(this.locators.postalcode).type("123456");
    cy.wait(2000);
    //Banking details
    cy.get(this.locators.clickonbankingdetails).click();
    cy.wait(2000);
    cy.get(this.locators.accountholdername).type("AJAY KUMAR");
    cy.wait(2000);
    cy.get(this.locators.bankaccountnumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.bankname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.bankbranchname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
    cy.wait(2000);
    //Documentation details
    cy.get(this.locators.documentationdetails).click();
    cy.wait(2000);
    cy.get(this.locators.signagreeementW).click();
    cy.wait(2000);
    cy.get(this.locators.verificationreport).click();
    cy.wait(2000);
    cy.get(this.locators.rletter).click();
    cy.wait(2000);
    cy.get(this.locators.pbankdetails).click();
    cy.wait(2000);
    cy.get(this.locators.pitr).click();
    cy.wait(2000);
    cy.get(this.locators.kycid).select("Aadhar Card");
    cy.wait(2000);
    cy.get(this.locators.kycaddress).select("Driving Licence");
    cy.wait(2000);

    // cy.get(this.locators.addkycid).click({force: true});
    // cy.get(this.locators.addkycid).attachFile(filePath); // Corrected line to upload file
    // cy.wait(1000);
    // //cy.get(this.locators.UploadConfirm).click();
    // cy.get(this.locators.addkycaddress).click({force: true});
    // cy.get(this.locators.addkycaddress).attachFile(filePath); // Corrected line to upload file
    // cy.wait(1000);

    cy.get(this.locators.scopeofword).click();
    cy.wait(2000);
    cy.get(this.locators.productgroup).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.product).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.subproduct).select("Personal Loan");
    cy.wait(2000);

    cy.get(this.locators.placeofwork).click();
    cy.wait(2000);
    cy.get(this.locators.selectpg).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.selectp).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.selectsubp).select("Personal Loan");
    cy.wait(2000);
    cy.get(this.locators.selectbucket).select("11");
    cy.wait(2000);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectregion).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectState).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectCity).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectmanager).select("Ajit");
    cy.wait(2000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).click();
    cy.wait(2000);
    cy.get(this.locators.previousmonth).click();
    cy.wait(2000);
    cy.get(':nth-child(1) > :nth-child(7) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(3) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.Contactexpiredate).click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(8) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.submitagency).click();
    cy.wait(2000);

  }

  CreateAgency028() {
    const filePath = 'Aadhar-image.png';
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click().click();
    cy.wait(2000);
    cy.get(this.locators.fillAgencyName).type("ABCDEF");
    cy.wait(2000);
    cy.get(this.locators.selectRecommendingOfficer).select("danny ng");
    cy.wait(2000);
    cy.get(this.locators.selectAgencyType).select("Bank Staff");
    cy.wait(2000);
    cy.get(this.locators.selectAgencySubType).select("BCC");
    cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
    cy.get(this.locators.clickongenerateENcollectcode).click();
    cy.wait(2000);
    //Address Details
    cy.get(this.locators.clickonaddressdetails).click();
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
    cy.wait(2000);
    cy.get(this.locators.mobilenumber).type("0769875429");
    cy.wait(2000);
    cy.get(this.locators.areacode).type("1234");
    cy.wait(2000);
    cy.get(this.locators.landlinenumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.selectstate).select("All");
    cy.wait(2000);
    cy.get(this.locators.fillemailid).type("sachin10@yopmail.com");
    cy.wait(2000);
    cy.get(this.locators.selectcity).select("All");
    cy.wait(2000);
    cy.get(this.locators.postalcode).type("123456");
    cy.wait(2000);
    //Banking details
    cy.get(this.locators.clickonbankingdetails).click();
    cy.wait(2000);
    cy.get(this.locators.accountholdername).type("AJAY KUMAR");
    cy.wait(2000);
    cy.get(this.locators.bankaccountnumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.bankname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.bankbranchname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
    cy.wait(2000);
    //Documentation details
    cy.get(this.locators.documentationdetails).click();
    cy.wait(2000);
    cy.get(this.locators.signagreeementW).click();
    cy.wait(2000);
    cy.get(this.locators.verificationreport).click();
    cy.wait(2000);
    cy.get(this.locators.rletter).click();
    cy.wait(2000);
    cy.get(this.locators.pbankdetails).click();
    cy.wait(2000);
    cy.get(this.locators.pitr).click();
    cy.wait(2000);
    cy.get(this.locators.kycid).select("Aadhar Card");
    cy.wait(2000);
    cy.get(this.locators.kycaddress).select("Driving Licence");
    cy.wait(2000);

    // cy.get(this.locators.addkycid).click({force: true});
    // cy.get(this.locators.addkycid).attachFile(filePath); // Corrected line to upload file
    // cy.wait(1000);
    // //cy.get(this.locators.UploadConfirm).click();
    // cy.get(this.locators.addkycaddress).click({force: true});
    // cy.get(this.locators.addkycaddress).attachFile(filePath); // Corrected line to upload file
    // cy.wait(1000);

    cy.get(this.locators.scopeofword).click();
    cy.wait(2000);
    cy.get(this.locators.productgroup).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.product).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.subproduct).select("Personal Loan");
    cy.wait(2000);

    cy.get(this.locators.placeofwork).click();
    cy.wait(2000);
    cy.get(this.locators.selectpg).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.selectp).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.selectsubp).select("Personal Loan");
    cy.wait(2000);
    cy.get(this.locators.selectbucket).select("11");
    cy.wait(2000);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectregion).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectState).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectCity).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectmanager).select("Ajit");
    cy.wait(2000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).click();
    cy.wait(2000);
    cy.get(this.locators.previousmonth).click();
    cy.wait(2000);
    cy.get(':nth-child(1) > :nth-child(7) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(3) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.Contactexpiredate).click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(8) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.submitagency).click();
    cy.wait(2000);

  }

  CreateAgency029() {
    const filePath = 'Aadhar-image.png';
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click().click();
    cy.wait(2000);
    cy.get(this.locators.fillAgencyName).type("ABCDEF");
    cy.wait(2000);
    cy.get(this.locators.selectRecommendingOfficer).select("danny ng");
    cy.wait(2000);
    cy.get(this.locators.selectAgencyType).select("Bank Staff");
    cy.wait(2000);
    cy.get(this.locators.selectAgencySubType).select("BCC Task Force");
    cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
    cy.get(this.locators.clickongenerateENcollectcode).click();
    cy.wait(2000);
    //Address Details
    cy.get(this.locators.clickonaddressdetails).click();
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
    cy.wait(2000);
    cy.get(this.locators.mobilenumber).type("0769875429");
    cy.wait(2000);
    cy.get(this.locators.areacode).type("1234");
    cy.wait(2000);
    cy.get(this.locators.landlinenumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.selectstate).select("All");
    cy.wait(2000);
    cy.get(this.locators.fillemailid).type("sachin10@yopmail.com");
    cy.wait(2000);
    cy.get(this.locators.selectcity).select("All");
    cy.wait(2000);
    cy.get(this.locators.postalcode).type("123456");
    cy.wait(2000);
    //Banking details
    cy.get(this.locators.clickonbankingdetails).click();
    cy.wait(2000);
    cy.get(this.locators.accountholdername).type("AJAY KUMAR");
    cy.wait(2000);
    cy.get(this.locators.bankaccountnumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.bankname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.bankbranchname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
    cy.wait(2000);
    //Documentation details
    cy.get(this.locators.documentationdetails).click();
    cy.wait(2000);
    cy.get(this.locators.signagreeementW).click();
    cy.wait(2000);
    cy.get(this.locators.verificationreport).click();
    cy.wait(2000);
    cy.get(this.locators.rletter).click();
    cy.wait(2000);
    cy.get(this.locators.pbankdetails).click();
    cy.wait(2000);
    cy.get(this.locators.pitr).click();
    cy.wait(2000);
    cy.get(this.locators.kycid).select("Aadhar Card");
    cy.wait(2000);
    cy.get(this.locators.kycaddress).select("Driving Licence");
    cy.wait(2000);

    // cy.get(this.locators.addkycid).click({force: true});
    // cy.get(this.locators.addkycid).attachFile(filePath); // Corrected line to upload file
    // cy.wait(1000);
    // //cy.get(this.locators.UploadConfirm).click();
    // cy.get(this.locators.addkycaddress).click({force: true});
    // cy.get(this.locators.addkycaddress).attachFile(filePath); // Corrected line to upload file
    // cy.wait(1000);

    cy.get(this.locators.scopeofword).click();
    cy.wait(2000);
    cy.get(this.locators.productgroup).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.product).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.subproduct).select("Personal Loan");
    cy.wait(2000);

    cy.get(this.locators.placeofwork).click();
    cy.wait(2000);
    cy.get(this.locators.selectpg).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.selectp).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.selectsubp).select("Personal Loan");
    cy.wait(2000);
    cy.get(this.locators.selectbucket).select("11");
    cy.wait(2000);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectregion).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectState).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectCity).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectmanager).select("Ajit");
    cy.wait(2000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).click();
    cy.wait(2000);
    cy.get(this.locators.previousmonth).click();
    cy.wait(2000);
    cy.get(':nth-child(1) > :nth-child(7) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(3) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.Contactexpiredate).click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(8) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.submitagency).click();
    cy.wait(2000);

  }

  CreateAgency030() {
    const filePath = 'Aadhar-image.png';
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click().click();
    cy.wait(2000);
    cy.get(this.locators.fillAgencyName).type("ABCDEF");
    cy.wait(2000);
    cy.get(this.locators.selectRecommendingOfficer).select("danny ng");
    cy.wait(2000);
    cy.get(this.locators.selectAgencyType).select("Bank Staff");
    cy.wait(2000);
    cy.get(this.locators.selectAgencySubType).select("Branches");
    cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
    cy.get(this.locators.clickongenerateENcollectcode).click();
    cy.wait(2000);
    //Address Details
    cy.get(this.locators.clickonaddressdetails).click();
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
    cy.wait(2000);
    cy.get(this.locators.mobilenumber).type("0769875429");
    cy.wait(2000);
    cy.get(this.locators.areacode).type("1234");
    cy.wait(2000);
    cy.get(this.locators.landlinenumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.selectstate).select("All");
    cy.wait(2000);
    cy.get(this.locators.fillemailid).type("sachin10@yopmail.com");
    cy.wait(2000);
    cy.get(this.locators.selectcity).select("All");
    cy.wait(2000);
    cy.get(this.locators.postalcode).type("123456");
    cy.wait(2000);
    //Banking details
    cy.get(this.locators.clickonbankingdetails).click();
    cy.wait(2000);
    cy.get(this.locators.accountholdername).type("AJAY KUMAR");
    cy.wait(2000);
    cy.get(this.locators.bankaccountnumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.bankname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.bankbranchname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
    cy.wait(2000);
    //Documentation details
    cy.get(this.locators.documentationdetails).click();
    cy.wait(2000);
    cy.get(this.locators.signagreeementW).click();
    cy.wait(2000);
    cy.get(this.locators.verificationreport).click();
    cy.wait(2000);
    cy.get(this.locators.rletter).click();
    cy.wait(2000);
    cy.get(this.locators.pbankdetails).click();
    cy.wait(2000);
    cy.get(this.locators.pitr).click();
    cy.wait(2000);
    cy.get(this.locators.kycid).select("Aadhar Card");
    cy.wait(2000);
    cy.get(this.locators.kycaddress).select("Driving Licence");
    cy.wait(2000);

    // cy.get(this.locators.addkycid).click({force: true});
    // cy.get(this.locators.addkycid).attachFile(filePath); // Corrected line to upload file
    // cy.wait(1000);
    // //cy.get(this.locators.UploadConfirm).click();
    // cy.get(this.locators.addkycaddress).click({force: true});
    // cy.get(this.locators.addkycaddress).attachFile(filePath); // Corrected line to upload file
    // cy.wait(1000);

    cy.get(this.locators.scopeofword).click();
    cy.wait(2000);
    cy.get(this.locators.productgroup).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.product).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.subproduct).select("Personal Loan");
    cy.wait(2000);

    cy.get(this.locators.placeofwork).click();
    cy.wait(2000);
    cy.get(this.locators.selectpg).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.selectp).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.selectsubp).select("Personal Loan");
    cy.wait(2000);
    cy.get(this.locators.selectbucket).select("11");
    cy.wait(2000);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectregion).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectState).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectCity).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectmanager).select("Ajit");
    cy.wait(2000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).click();
    cy.wait(2000);
    cy.get(this.locators.previousmonth).click();
    cy.wait(2000);
    cy.get(':nth-child(1) > :nth-child(7) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(3) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.Contactexpiredate).click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(2) > :nth-child(6) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.submitagency).click();
    cy.wait(2000);

  }

  SearchAgencySubModule(){
    cy.get('.user-management > :nth-child(2) > :nth-child(1) > a.ng-star-inserted').click();
    cy.wait(1000);
    cy.get(this.locators.SearchAgency).click();
  }

  ClickonSearchAgencyApprovedStatus(){
    cy.get(this.locators.SearchAgencyName).type('ToursAndTravels');
    cy.wait(2000);
    cy.get(this.locators.SADeferredDate).type('28/02/2024');
    cy.wait(2000);
    cy.get(this.locators.SAEmpanelmentStatus).select('1: Approved');
    cy.wait(2000);
    cy.get(this.locators.SAContactExpiryDate).type('07/04/2024');
    cy.wait(2000);
    cy.get(this.locators.SASearch).click();   
  }

  ClickonSearchAgencyApprovedWithDeferralstatus(){
    cy.get(this.locators.SearchAgencyName).type('ToursAndTravels');
    cy.wait(2000);
    cy.get(this.locators.SADeferredDate).type('28/02/2024');
    cy.wait(2000);
    cy.get(this.locators.SAEmpanelmentStatus).select('2: ApprovedWithDeferrals');
    cy.wait(2000);
    cy.get(this.locators.SAContactExpiryDate).type('07/04/2024');
    cy.wait(2000);
    cy.get(this.locators.SASearch).click();   
  }

  ClickonSearchAgencyContractExpiredStatus(){
    cy.get(this.locators.SearchAgencyName).type('ToursAndTravels');
    cy.wait(2000);
    cy.get(this.locators.SADeferredDate).type('28/02/2024');
    cy.wait(2000);
    cy.get(this.locators.SAEmpanelmentStatus).select('3: ContractExpired');
    cy.wait(2000);
    cy.get(this.locators.SAContactExpiryDate).type('07/04/2024');
    cy.wait(2000);
    cy.get(this.locators.SASearch).click();   
  }

  ClickonSearchAgencyDisabledStatus(){
    cy.get(this.locators.SearchAgencyName).type('ToursAndTravels');
    cy.wait(2000);
    cy.get(this.locators.SADeferredDate).type('28/02/2024');
    cy.wait(2000);
    cy.get(this.locators.SAEmpanelmentStatus).select('4: Disabled');
    cy.wait(2000);
    cy.get(this.locators.SAContactExpiryDate).type('07/04/2024');
    cy.wait(2000);
    cy.get(this.locators.SASearch).click();   
  }

  ClickonSearchAgencyPendingApprovalStatus(){
    cy.get(this.locators.SearchAgencyName).type('ToursAndTravels');
    cy.wait(2000);
    cy.get(this.locators.SADeferredDate).type('28/02/2024');
    cy.wait(2000);
    cy.get(this.locators.SAEmpanelmentStatus).select('5: PendingApproval');
    cy.wait(2000);
    cy.get(this.locators.SAContactExpiryDate).type('07/04/2024');
    cy.wait(2000);
    cy.get(this.locators.SASearch).click();   
  }

  ClickonSearchAgencyPendingApprovalWithDeferralsStatus(){
    cy.get(this.locators.SearchAgencyName).type('ToursAndTravels');
    cy.wait(2000);
    cy.get(this.locators.SADeferredDate).type('28/02/2024');
    cy.wait(2000);
    cy.get(this.locators.SAEmpanelmentStatus).select('6: PendingApprovalWithDeferrals');
    cy.wait(2000);
    cy.get(this.locators.SAContactExpiryDate).type('07/04/2024');
    cy.wait(2000);
    cy.get(this.locators.SASearch).click();   
  }

  ClickonSearchAgencyRejectedStatus(){
    cy.get(this.locators.SearchAgencyName).type('ToursAndTravels');
    cy.wait(2000);
    cy.get(this.locators.SADeferredDate).type('28/02/2024');
    cy.wait(2000);
    cy.get(this.locators.SAEmpanelmentStatus).select('7: Rejected');
    cy.wait(2000);
    cy.get(this.locators.SAContactExpiryDate).type('07/04/2024');
    cy.wait(2000);
    cy.get(this.locators.SASearch).click();   
  }

  ClickonSearchAgencySavedAsDraftStatus(){
    cy.get(this.locators.SearchAgencyName).type('ToursAndTravels');
    cy.wait(2000);
    cy.get(this.locators.SADeferredDate).type('28/02/2024');
    cy.wait(2000);
    cy.get(this.locators.SAEmpanelmentStatus).select('8: SavedAsDraft');
    cy.wait(2000);
    cy.get(this.locators.SAContactExpiryDate).type('07/04/2024');
    cy.wait(2000);
    cy.get(this.locators.SASearch).click();   
  }

  ClickonAgencyEmpanelmentRequest(){
    cy.log('Attempting to click Agency Empanelment Request button');
    cy.get(this.locators.AgencyEmpanelmentRequest).click({force: true});
    cy.wait(1000);
  }

  ClickonUseExistingCodeButton(){
    cy.get(this.locators.UseExistingCode).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.UseExistingCodeValue).click();
    cy.wait(2000);
    cy.get(this.locators.SaveAgencyProfile).click();
    cy.wait(2000);
    cy.get(this.locators.UseExistingCodeValueError).then(($el) => {
      const text = $el.text();
     cy.log(text);
     })

  }

  ClickonPrimaryOwnerCheckValidation(){
    cy.get(this.locators.clickonaddressdetails).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.PrimaryOwnerFirstName).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).click({force: true});
    cy.get(this.locators.primaryownerfirstnameErr).then(($el) => {
      const text = $el.text();
     cy.log(text);
     })


    cy.get(this.locators.PrimaryOwnerFirstName).clear();
    cy.get(this.locators.PrimaryOwnerFirstName).type('ABC123');
    cy.get(this.locators.primaryownerfirstnameErr).then(($el) => {
      const text = $el.text();
     cy.log(text);
     })

    cy.get(this.locators.PrimaryOwnerFirstName).type('{selectall}{backspace}');
    cy.wait(2000);
    cy.get(this.locators.PrimaryOwnerFirstName).type('ABC EFG');
    cy.get(this.locators.primaryownerfirstnameErr).then(($el) => {
       const text = $el.text();
      cy.log(text);
      }) 
    
  }


  ClickonPrimaryOwnerCheckLastNameValidation(){
    cy.get(this.locators.clickonaddressdetails).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.PrimaryOwnerLastName).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.PrimaryOwnerFirstName).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastnameErr).then(($el) => {
      const text = $el.text();
     cy.log(text);
     })
    
    cy.get(this.locators.PrimaryOwnerLastName).clear();
    cy.get(this.locators.PrimaryOwnerLastName).type('ABC123');
    cy.get(this.locators.primaryownerlastnameErr).then(($el) => {
      const text = $el.text();
     cy.log(text);
     })
    
    cy.get(this.locators.PrimaryOwnerLastName).type('{selectall}{backspace}');
    cy.get(this.locators.PrimaryOwnerLastName).type('ABC EFG');
    cy.get(this.locators.primaryownerlastnameErr).then(($el) => {
       const text = $el.text();
      cy.log(text);
      }) 

  }

  ClickonPrimaryOwnerCheckRegisteredAgencyAddressValidation(){
    cy.get(this.locators.clickonaddressdetails).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.RegisterAgencyAddress).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.RegisterAgencyAddressError).then(($el) => {
      const text = $el.text();
     cy.log(text);
     })

  }

  ClickonPrimaryOwnerCheckMobileNoValidation(){
    cy.get(this.locators.clickonaddressdetails).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.MobileNumberfield).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.RegisterAgencyAddress).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.MobileNumberfieldError).then(($el) => {
      const text = $el.text();
     cy.log(text);
     })

    cy.get(this.locators.MobileNumberfield).type('808099786');
    cy.wait(2000);
    cy.get(this.locators.MobileNumberfieldError).then(($el) => {
      const text = $el.text();
     cy.log(text);
     })

  }

  ClickonAreaFieldValidation(){
    cy.get(this.locators.clickonaddressdetails).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.AreaField).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.LandlineNo).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.AreafieldErr).then(($el) => {
      const text = $el.text();
     cy.log(text);
     })

    cy.get(this.locators.AreaField).type('A');
    cy.get(this.locators.AreafieldErr).then(($el) => {
      const text = $el.text();
     cy.log(text);
     })

    cy.get(this.locators.AreaField).type('{selectall}{backspace}');
    cy.get(this.locators.AreaField).type('1');
    cy.get(this.locators.AreafieldErr).then(($el) => {
      const text = $el.text();
     cy.log(text);
     }) 

     cy.get(this.locators.AreaField).type('{selectall}{backspace}');
     cy.get(this.locators.AreaField).type('12345');
     cy.log('Minimum 2 and maximum 4 digit are allowed')

  }

  ClickonLandLineNumberValidation(){
    cy.get(this.locators.clickonaddressdetails).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.LandlineNo).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.AreaField).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.LandLineNoError).then(($el) => {
      const text = $el.text();
     cy.log(text);
     })

    cy.get(this.locators.LandlineNo).type('A');
    cy.get(this.locators.LandLineNoError).then(($el) => {
      const text = $el.text();
     cy.log(text);
     })

     cy.get(this.locators.LandlineNo).type('{selectall}{backspace}');
     cy.get(this.locators.LandlineNo).type('12345');
     cy.log('Only 8 digit are allowed');

  }

  ClickonStateFieldValidation(){
    cy.get(this.locators.clickonaddressdetails).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.State).select('');
    cy.wait(2000);
    cy.get(this.locators.AreaField).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.StateError).then(($el) => {
      const text = $el.text();
     cy.log(text);
     })

  }

  ClickonCityFieldValidation(){
    cy.get(this.locators.clickonaddressdetails).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.City).select('');
    cy.wait(2000);
    cy.get(this.locators.AreaField).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.CityError).then(($el) => {
      const text = $el.text();
     cy.log(text);
     })

  }

  ClickonEmailIdFieldValidation(){
    cy.get(this.locators.clickonaddressdetails).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.EmailIdField).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.AreaField).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.EmailIdFieldError).then(($el) => {
      const text = $el.text();
     cy.log(text);
     })


     cy.get(this.locators.EmailIdField).clear();
     cy.get(this.locators.EmailIdField).type('abc@yopmail');
     cy.get(this.locators.EmailIdFieldError).then(($el) => {
       const text = $el.text();
      cy.log(text);
      }) 

  }

  ClickonPostalCodeFieldValidation(){
    cy.get(this.locators.clickonaddressdetails).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.PostalCodeField).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.AreaField).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.PostalCodeFieldError).then(($el) => {
      const text = $el.text();
     cy.log(text);
     })

    cy.get(this.locators.PostalCodeField).clear();
    cy.get(this.locators.PostalCodeField).type('abc45');
    cy.get(this.locators.PostalCodeFieldError).then(($el) => {
      const text = $el.text();
     cy.log(text);
     })
    cy.log('Postal code is a numeric field which has length of 6 digits');

  }

  ClickonAccountHolderNameFieldValidation(){
    cy.get(this.locators.BankingDetails).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.AccountHolderNameField).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.BankAccountNumberField).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.AccountHolderNameError).then(($el) => {
      const text = $el.text();
     cy.log(text);
     })

    cy.get(this.locators.AccountHolderNameField).type('Accountholdernamefieldvalidation');
    cy.wait(2000);
    cy.log(' Account holder name is a alphanumeric field with 30 characters of length');
  }

  ClickonBankNameFieldValidation(){
    cy.get(this.locators.BankingDetails).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.BankNameField).select('');
    cy.wait(2000);
    cy.get(this.locators.BankAccountNumberField).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.BankNameError).then(($el) => {
      const text = $el.text();
     cy.log(text);
     })

  }

  ClickonBankBranchNameFieldValidation(){
    cy.get(this.locators.BankingDetails).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.BankBranchNameField).select('');
    cy.wait(2000);
    cy.get(this.locators.BankAccountNumberField).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.BankBranchNameError).then(($el) => {
      const text = $el.text();
     cy.log(text);
     })
  }

  ClickonGSTTinNumberFieldValidation(){
    cy.get(this.locators.BankingDetails).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.GSTnumberField).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.BankAccountNumberField).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.GSTnumberFieldError).then(($el) => {
      const text = $el.text();
     cy.log(text);
     })

    cy.get(this.locators.GSTnumberField).type('BGHY2345GTFTUH');
     cy.wait(2000);
    cy.log('GST Number is a alpha numeric field with maximum length of 15');
  }

  ClickonBankAccNumberFieldValidation(){
    cy.get(this.locators.BankingDetails).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.BankAccountNumberField).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.BankNameField).select('');
    cy.wait(2000);
    cy.get(this.locators.BankAccountNumberError).then(($el) => {
      const text = $el.text();
     cy.log(text);
     })

     cy.get(this.locators.BankAccountNumberField).type('acc123');
     cy.wait(2000);
     cy.get(this.locators.BankAccountNumberError).then(($el) => {
      const text = $el.text();
     cy.log(text);
     })

     cy.get(this.locators.BankAccountNumberField).type('{selectall}{backspace}');
     cy.get(this.locators.BankAccountNumberField).type('201109858');
     cy.wait(2000);
     cy.get(this.locators.BankAccountNumberError).then(($el) => {
      const text = $el.text();
     cy.log(text);
     })


  }

  Datevalidation(){
    // cy.get(this.locators.clickonARD).click();
    // cy.wait(2000);
    const filePath = 'Aadhar-image.png';
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click();
    cy.wait(2000);
    cy.get("a[title='Add Agency']").click();
    cy.wait(2000);
    cy.get(this.locators.fillAgencyName).type("ABCDEF");
    cy.wait(2000);
    cy.get(this.locators.selectRecommendingOfficer).select("danny ng");
    cy.wait(2000);
    cy.get(this.locators.selectAgencyType).select("Bank Staff");
    cy.wait(2000);
    cy.get(this.locators.selectAgencySubType).select("BCC");
    cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
    cy.get(this.locators.clickongenerateENcollectcode).click();
    cy.wait(2000);
    //Address Details
    cy.get(this.locators.clickonaddressdetails).click();
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
    cy.wait(2000);
    cy.get(this.locators.mobilenumber).type("1769875429");
    cy.wait(2000);
    cy.get(this.locators.areacode).type("1234");
    cy.wait(2000);
    cy.get(this.locators.landlinenumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.selectstate).select("All");
    cy.wait(2000);
    cy.get(this.locators.fillemailid).type("sachin10@yopmail.com");
    cy.wait(2000);
    cy.get(this.locators.selectcity).select("All");
    cy.wait(2000);
    cy.get(this.locators.postalcode).type("123456");
    cy.wait(2000);
    //Banking details
    cy.get(this.locators.clickonbankingdetails).click();
    cy.wait(2000);
    cy.get(this.locators.accountholdername).type("AJAY KUMAR");
    cy.wait(2000);
    cy.get(this.locators.bankaccountnumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.bankname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.bankbranchname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
    cy.wait(2000);
   //////////////////////////////////////Documentation_Details/////////////////////////////////////
  //  const filePath = 'Aadhar.png';
   const filePath1 = 'Aadhar.png';
   // Expand the documentation details section
   cy.get(':nth-child(4) > .nav-link > span').click();
   cy.wait(2000);
   //lick on various elements to interact with the UI
   cy.get('#waive--0').click();
   cy.wait(1000);
   cy.get('#waive--3').click();
   cy.wait(1000);
   cy.get('#waive--4').click();
   cy.wait(1000);
   cy.get('#waive--5').click();
   cy.wait(1000);
   cy.get('#waive--6').click();
   cy.wait(1000);
   cy.get('#agencyaddFileBtn-0').click();
   cy.wait(1000);
   cy.get('input[type="file"]').eq(0)
   .attachFile(filePath, { force: true });
   cy.wait(1000);
   cy.get('#agencydocTypeSelect-1').select('Pan Card');
   cy.get('#agencyaddFileBtn-1').click();
   cy.wait(1000);
   cy.get('input[type="file"]').eq(1)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('input[type="file"]').eq(1)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('#agencydocTypeSelect-2').select('Aadhar Card');
   cy.get('#agencyaddFileBtn-2').click();
   cy.wait(1000);
   cy.get('input[type="file"]').eq(2)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('input[type="file"]').eq(3)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('input[type="file"]').eq(4)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('input[type="file"]').eq(5)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   //////-----------------
    cy.get(this.locators.scopeofword).click();
    cy.wait(2000);
    cy.get(this.locators.productgroup).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.product).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.subproduct).select("Personal Loan");
    cy.wait(2000);

    cy.get(":nth-child(6) > .nav-link").click();
    cy.wait(2000);
    cy.get(this.locators.selectpg).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.selectp).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.selectsubp).select("Personal Loan");
    cy.wait(2000);
    cy.get(this.locators.selectbucket).select("11");
    cy.wait(2000);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectregion).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectState).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectCity).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectmanager).select("Ajit");
    cy.wait(2000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).type('02-04-2024');
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).type('01-03-2024');
    cy.get(this.locators.Contactexpiredate).type('11-06-2026');
    cy.wait(2000);
    cy.get(this.locators.saveagencyprofile).click();
    // cy.get(this.locators.DateError).then(($el) => {
    //   const text = $el.text();
    //  cy.log(text);
    //  })


  }

  DatevalidationforExpiryDate(){

    const filePath = 'Aadhar_image.png';
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);

    
    cy.get(this.locators.clickonAER).click();
    cy.wait(2000);
    cy.get("a[title='Add Agency']").click();
    cy.wait(2000);
    cy.get(this.locators.fillAgencyName).type("ABCDEF");
    cy.wait(2000);
    cy.get(this.locators.selectRecommendingOfficer).select("danny ng");
    cy.wait(2000);
    cy.get(this.locators.selectAgencyType).select("Bank Staff");
    cy.wait(2000);
    cy.get(this.locators.selectAgencySubType).select("BCC");
    cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
    cy.get(this.locators.clickongenerateENcollectcode).click();
    cy.wait(2000);
    //Address Details
    cy.get(this.locators.clickonaddressdetails).click();
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
    cy.wait(2000);
    cy.get(this.locators.mobilenumber).type("1769875429");
    cy.wait(2000);
    cy.get(this.locators.areacode).type("1234");
    cy.wait(2000);
    cy.get(this.locators.landlinenumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.selectstate).select("All");
    cy.wait(2000);
    cy.get(this.locators.fillemailid).type("sachin10@yopmail.com");
    cy.wait(2000);
    cy.get(this.locators.selectcity).select("All");
    cy.wait(2000);
    cy.get(this.locators.postalcode).type("123456");
    cy.wait(2000);
    //Banking details
    cy.get(this.locators.clickonbankingdetails).click();
    cy.wait(2000);
    cy.get(this.locators.accountholdername).type("AJAY KUMAR");
    cy.wait(2000);
    cy.get(this.locators.bankaccountnumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.bankname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.bankbranchname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
    cy.wait(2000);
   //////////////////////////////////////Documentation_Details/////////////////////////////////////
  //  const filePath = 'Aadhar.png';
  const filePath1 = 'Aadhar.png';
  // Expand the documentation details section
  cy.get(':nth-child(4) > .nav-link > span').click();
  cy.wait(2000);
  //lick on various elements to interact with the UI
  cy.get('#waive--0').click();
  cy.wait(1000);
  cy.get('#waive--3').click();
  cy.wait(1000);
  cy.get('#waive--4').click();
  cy.wait(1000);
  cy.get('#waive--5').click();
  cy.wait(1000);
  cy.get('#waive--6').click();
  cy.wait(1000);
  cy.get('#agencyaddFileBtn-0').click();
  cy.wait(1000);
  cy.get('input[type="file"]').eq(0)
  .attachFile(filePath, { force: true });
  cy.wait(1000);
  cy.get('#agencydocTypeSelect-1').select('Pan Card');
  cy.get('#agencyaddFileBtn-1').click();
  cy.wait(1000);
  cy.get('input[type="file"]').eq(1)
  .attachFile(filePath1, { force: true });
  cy.wait(1000);
  cy.get('input[type="file"]').eq(1)
  .attachFile(filePath1, { force: true });
  cy.wait(1000);
  cy.get('#agencydocTypeSelect-2').select('Aadhar Card');
  cy.get('#agencyaddFileBtn-2').click();
  cy.wait(1000);
  cy.get('input[type="file"]').eq(2)
  .attachFile(filePath1, { force: true });
  cy.wait(1000);
  cy.get('input[type="file"]').eq(3)
  .attachFile(filePath1, { force: true });
  cy.wait(1000);
  cy.get('input[type="file"]').eq(4)
  .attachFile(filePath1, { force: true });
  cy.wait(1000);
  cy.get('input[type="file"]').eq(5)
  .attachFile(filePath1, { force: true });
  cy.wait(1000);
  //////-----------------
    cy.get(this.locators.scopeofword).click();
    cy.wait(2000);
    cy.get(this.locators.productgroup).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.product).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.subproduct).select("Personal Loan");
    cy.wait(2000);

     cy.get(":nth-child(6) > .nav-link").click();
    cy.wait(2000);
    cy.get(this.locators.selectpg).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.selectp).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.selectsubp).select("Personal Loan");
    cy.wait(2000);
    cy.get(this.locators.selectbucket).select("11");
    cy.wait(2000);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectregion).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectState).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectCity).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectmanager).select("Ajit");
    cy.wait(2000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).type('02-03-2023');
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).type('01-03-2024');
    cy.get(this.locators.Contactexpiredate).type('27-02-2024');
    cy.wait(2000);
    cy.get(this.locators.saveagencyprofile).click();

    // cy.get(this.locators.DateError).then(($el) => {
    //     const text = $el.text();
    //    cy.log(text);
    //    })
  }

  ClickonSearchAgencyApprovedStatusWithSpecialChrctr(){

    cy.get(this.locators.SearchAgencyName).type('@ToursAndTravels');
    cy.wait(2000);
    cy.get(this.locators.SADeferredDate).type('28/02/2024');
    cy.wait(2000);
    cy.get(this.locators.SAEmpanelmentStatus).select('1: Approved');
    cy.wait(2000);
    cy.get(this.locators.SAContactExpiryDate).type('07/04/2024');
    cy.wait(2000);
    cy.get(this.locators.SASearch).click();
    cy.get(this.locators.specialchrctrError).then(($el) => {
          const text = $el.text();
         cy.log(text);
         })

  }

  ClickonSearchAgencyStatusResultGrid(){
    cy.get(this.locators.SAEmpanelmentStatus).select('Approved');
    cy.wait(2000);
    cy.get(this.locators.SASearch).click();

    cy.log('User click on showing More agencies option');
    cy.get(this.locators.dropdownForMoreAgencies).select('10');
    cy.log('10 Results showing for agencies');

    cy.get(this.locators.paginationNoNext).click();
    cy.wait(2000);
    cy.get(this.locators.paginationNoPrevious).click();

    cy.get(this.locators.SAEmpanelmentStatus).select('SavedAsDraft');
    cy.wait(2000);
    cy.get(this.locators.SASearch).click();
    cy.log('Results are showing for SavedAsDraft status')

  }

  ClickonDocumentationDetailsCheckValidation(){

    cy.get(this.locators.documentationdetails).click();
    cy.wait(2000);
    cy.get(this.locators.signagreeementW).click();
    cy.wait(2000);
    cy.get(this.locators.verificationreport).click();
    cy.wait(2000);
    cy.get(this.locators.rletter).click();
    cy.wait(2000);
    cy.get(this.locators.pbankdetails).click();
    cy.wait(2000);
    cy.get(this.locators.pitr).click();
    cy.wait(2000);
    cy.get(this.locators.kycid).select("Aadhar Card");
    cy.wait(2000);
    cy.get(this.locators.kycaddress).select("Driving Licence");

  }

  




  CreateAgency031() {
    const filePath = 'Aadhar-image.png';
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click().click();
    cy.wait(2000);
    cy.get("a[title='Add Agency']").click();
    cy.wait(2000);
    cy.get(this.locators.fillAgencyName).type("ABCDEF");
    cy.wait(2000);
    cy.get(this.locators.selectRecommendingOfficer).select("danny ng");
    cy.wait(2000);
    cy.get(this.locators.selectAgencyType).select("Bank Staff");
    cy.wait(2000);
    cy.get(this.locators.selectAgencySubType).select("Regional Office");
    cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
    cy.get(this.locators.clickongenerateENcollectcode).click();
    cy.wait(2000);
    //Address Details
    cy.get(this.locators.clickonaddressdetails).click();
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
    cy.wait(2000);
    cy.get(this.locators.mobilenumber).type("0769875429");
    cy.wait(2000);
    cy.get(this.locators.areacode).type("1234");
    cy.wait(2000);
    cy.get(this.locators.landlinenumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.selectstate).select("All");
    cy.wait(2000);
    cy.get(this.locators.fillemailid).type("sachin10@yopmail.com");
    cy.wait(2000);
    cy.get(this.locators.selectcity).select("All");
    cy.wait(2000);
    cy.get(this.locators.postalcode).type("123456");
    cy.wait(2000);
    //Banking details
    cy.get(this.locators.clickonbankingdetails).click();
    cy.wait(2000);
    cy.get(this.locators.accountholdername).type("AJAY KUMAR");
    cy.wait(2000);
    cy.get(this.locators.bankaccountnumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.bankname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.bankbranchname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
    cy.wait(2000);
   //////////////////////////////////////Documentation_Details/////////////////////////////////////
  //  const filePath = 'Aadhar.png';
  const filePath1 = 'Aadhar.png';
  // Expand the documentation details section
  cy.get(':nth-child(4) > .nav-link > span').click();
  cy.wait(2000);
  //lick on various elements to interact with the UI
  cy.get('#waive--0').click();
  cy.wait(1000);
  cy.get('#waive--3').click();
  cy.wait(1000);
  cy.get('#waive--4').click();
  cy.wait(1000);
  cy.get('#waive--5').click();
  cy.wait(1000);
  cy.get('#waive--6').click();
  cy.wait(1000);
  cy.get('#agencyaddFileBtn-0').click();
  cy.wait(1000);
  cy.get('input[type="file"]').eq(0)
  .attachFile(filePath, { force: true });
  cy.wait(1000);
  cy.get('#agencydocTypeSelect-1').select('Pan Card');
  cy.get('#agencyaddFileBtn-1').click();
  cy.wait(1000);
  cy.get('input[type="file"]').eq(1)
  .attachFile(filePath1, { force: true });
  cy.wait(1000);
  cy.get('input[type="file"]').eq(1)
  .attachFile(filePath1, { force: true });
  cy.wait(1000);
  cy.get('#agencydocTypeSelect-2').select('Aadhar Card');
  cy.get('#agencyaddFileBtn-2').click();
  cy.wait(1000);
  cy.get('input[type="file"]').eq(2)
  .attachFile(filePath1, { force: true });
  cy.wait(1000);
  cy.get('input[type="file"]').eq(3)
  .attachFile(filePath1, { force: true });
  cy.wait(1000);
  cy.get('input[type="file"]').eq(4)
  .attachFile(filePath1, { force: true });
  cy.wait(1000);
  cy.get('input[type="file"]').eq(5)
  .attachFile(filePath1, { force: true });
  cy.wait(1000);
  //////-----------------

    cy.get(this.locators.scopeofword).click();
    cy.wait(2000);
    cy.get(this.locators.productgroup).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.product).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.subproduct).select("Personal Loan");
    cy.wait(2000);

    cy.get(this.locators.placeofwork).click();
    cy.wait(2000);
    cy.get(this.locators.selectpg).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.selectp).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.selectsubp).select("Personal Loan");
    cy.wait(2000);
    cy.get(this.locators.selectbucket).select("11");
    cy.wait(2000);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectregion).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectState).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectCity).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectmanager).select("Ajit");
    cy.wait(2000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).click();
    cy.wait(2000);
    cy.get(this.locators.previousmonth).click();
    cy.wait(2000);
    cy.get(':nth-child(1) > :nth-child(7) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(3) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.Contactexpiredate).click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(8) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.submitagency).click();
    cy.wait(2000);

  }

  CreateAgency032() {
    const filePath = 'Aadhar-image.png';
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click().click();
    cy.wait(2000);
    cy.get("a[title='Add Agency']").click();
    cy.wait(2000);
    cy.get(this.locators.fillAgencyName).type("ABCDEF");
    cy.wait(2000);
    cy.get(this.locators.selectRecommendingOfficer).select("danny ng");
    cy.wait(2000);
    cy.get(this.locators.selectAgencyType).select("Bank Staff");
    cy.wait(2000);
    cy.get(this.locators.selectAgencySubType).select("Regional Task Force");
    cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
    cy.get(this.locators.clickongenerateENcollectcode).click();
    cy.wait(2000);
    //Address Details
    cy.get(this.locators.clickonaddressdetails).click();
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
    cy.wait(2000);
    cy.get(this.locators.mobilenumber).type("0769875429");
    cy.wait(2000);
    cy.get(this.locators.areacode).type("1234");
    cy.wait(2000);
    cy.get(this.locators.landlinenumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.selectstate).select("All");
    cy.wait(2000);
    cy.get(this.locators.fillemailid).type("sachin10@yopmail.com");
    cy.wait(2000);
    cy.get(this.locators.selectcity).select("All");
    cy.wait(2000);
    cy.get(this.locators.postalcode).type("123456");
    cy.wait(2000);
    //Banking details
    cy.get(this.locators.clickonbankingdetails).click();
    cy.wait(2000);
    cy.get(this.locators.accountholdername).type("AJAY KUMAR");
    cy.wait(2000);
    cy.get(this.locators.bankaccountnumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.bankname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.bankbranchname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
    cy.wait(2000);
    //////////////////////////////////////Documentation_Details/////////////////////////////////////
  //  const filePath = 'Aadhar.png';
   const filePath1 = 'Aadhar.png';
   // Expand the documentation details section
   cy.get(':nth-child(4) > .nav-link > span').click();
   cy.wait(2000);
   //lick on various elements to interact with the UI
   cy.get('#waive--0').click();
   cy.wait(1000);
   cy.get('#waive--3').click();
   cy.wait(1000);
   cy.get('#waive--4').click();
   cy.wait(1000);
   cy.get('#waive--5').click();
   cy.wait(1000);
   cy.get('#waive--6').click();
   cy.wait(1000);
   cy.get('#agencyaddFileBtn-0').click();
   cy.wait(1000);
   cy.get('input[type="file"]').eq(0)
   .attachFile(filePath, { force: true });
   cy.wait(1000);
   cy.get('#agencydocTypeSelect-1').select('Pan Card');
   cy.get('#agencyaddFileBtn-1').click();
   cy.wait(1000);
   cy.get('input[type="file"]').eq(1)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('input[type="file"]').eq(1)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('#agencydocTypeSelect-2').select('Aadhar Card');
   cy.get('#agencyaddFileBtn-2').click();
   cy.wait(1000);
   cy.get('input[type="file"]').eq(2)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('input[type="file"]').eq(3)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('input[type="file"]').eq(4)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('input[type="file"]').eq(5)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   //////-----------------
    cy.get(this.locators.scopeofword).click();
    cy.wait(2000);
    cy.get(this.locators.productgroup).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.product).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.subproduct).select("Personal Loan");
    cy.wait(2000);

    cy.get(this.locators.placeofwork).click();
    cy.wait(2000);
    cy.get(this.locators.selectpg).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.selectp).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.selectsubp).select("Personal Loan");
    cy.wait(2000);
    cy.get(this.locators.selectbucket).select("11");
    cy.wait(2000);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectregion).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectState).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectCity).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectmanager).select("Ajit");
    cy.wait(2000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).click();
    cy.wait(2000);
    cy.get(this.locators.previousmonth).click();
    cy.wait(2000);
    cy.get(':nth-child(1) > :nth-child(7) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(3) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.Contactexpiredate).click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(8) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.submitagency).click();
    cy.wait(2000);

  }

  CreateAgency033() {
    const filePath = 'Aadhar-image.png';
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click().click();
    cy.wait(2000);
    cy.get("a[title='Add Agency']").click();
    cy.wait(2000);
    cy.get(this.locators.fillAgencyName).type("ABCDEF");
    cy.wait(2000);
    cy.get(this.locators.selectRecommendingOfficer).select("danny ng");
    cy.wait(2000);
    cy.get(this.locators.selectAgencyType).select("Bank Staff");
    cy.wait(2000);
    cy.get(this.locators.selectAgencySubType).select("Zonal Office");
    cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
    cy.get(this.locators.clickongenerateENcollectcode).click();
    cy.wait(2000);
    //Address Details
    cy.get(this.locators.clickonaddressdetails).click();
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
    cy.wait(2000);
    cy.get(this.locators.mobilenumber).type("0769875429");
    cy.wait(2000);
    cy.get(this.locators.areacode).type("1234");
    cy.wait(2000);
    cy.get(this.locators.landlinenumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.selectstate).select("All");
    cy.wait(2000);
    cy.get(this.locators.fillemailid).type("sachin10@yopmail.com");
    cy.wait(2000);
    cy.get(this.locators.selectcity).select("All");
    cy.wait(2000);
    cy.get(this.locators.postalcode).type("123456");
    cy.wait(2000);
    //Banking details
    cy.get(this.locators.clickonbankingdetails).click();
    cy.wait(2000);
    cy.get(this.locators.accountholdername).type("AJAY KUMAR");
    cy.wait(2000);
    cy.get(this.locators.bankaccountnumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.bankname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.bankbranchname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
    cy.wait(2000);
   //////////////////////////////////////Documentation_Details/////////////////////////////////////
  //  const filePath = 'Aadhar.png';
  const filePath1 = 'Aadhar.png';
  // Expand the documentation details section
  cy.get(':nth-child(4) > .nav-link > span').click();
  cy.wait(2000);
  //lick on various elements to interact with the UI
  cy.get('#waive--0').click();
  cy.wait(1000);
  cy.get('#waive--3').click();
  cy.wait(1000);
  cy.get('#waive--4').click();
  cy.wait(1000);
  cy.get('#waive--5').click();
  cy.wait(1000);
  cy.get('#waive--6').click();
  cy.wait(1000);
  cy.get('#agencyaddFileBtn-0').click();
  cy.wait(1000);
  cy.get('input[type="file"]').eq(0)
  .attachFile(filePath, { force: true });
  cy.wait(1000);
  cy.get('#agencydocTypeSelect-1').select('Pan Card');
  cy.get('#agencyaddFileBtn-1').click();
  cy.wait(1000);
  cy.get('input[type="file"]').eq(1)
  .attachFile(filePath1, { force: true });
  cy.wait(1000);
  cy.get('input[type="file"]').eq(1)
  .attachFile(filePath1, { force: true });
  cy.wait(1000);
  cy.get('#agencydocTypeSelect-2').select('Aadhar Card');
  cy.get('#agencyaddFileBtn-2').click();
  cy.wait(1000);
  cy.get('input[type="file"]').eq(2)
  .attachFile(filePath1, { force: true });
  cy.wait(1000);
  cy.get('input[type="file"]').eq(3)
  .attachFile(filePath1, { force: true });
  cy.wait(1000);
  cy.get('input[type="file"]').eq(4)
  .attachFile(filePath1, { force: true });
  cy.wait(1000);
  cy.get('input[type="file"]').eq(5)
  .attachFile(filePath1, { force: true });
  cy.wait(1000);
  //////-----------------
    cy.get(this.locators.scopeofword).click();
    cy.wait(2000);
    cy.get(this.locators.productgroup).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.product).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.subproduct).select("Personal Loan");
    cy.wait(2000);

    cy.get(this.locators.placeofwork).click();
    cy.wait(2000);
    cy.get(this.locators.selectpg).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.selectp).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.selectsubp).select("Personal Loan");
    cy.wait(2000);
    cy.get(this.locators.selectbucket).select("11");
    cy.wait(2000);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectregion).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectState).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectCity).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectmanager).select("Ajit");
    cy.wait(2000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).click();
    cy.wait(2000);
    cy.get(this.locators.previousmonth).click();
    cy.wait(2000);
    cy.get(':nth-child(1) > :nth-child(7) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(3) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.Contactexpiredate).click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(8) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.submitagency).click();
    cy.wait(2000);

  }

  CreateAgency034() {
    const filePath = 'Aadhar-image.png';
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click().click();
    cy.wait(2000);
    cy.get("a[title='Add Agency']").click();
    cy.wait(2000);
    cy.get(this.locators.fillAgencyName).type("ABCDEF");
    cy.wait(2000);
    cy.get(this.locators.selectRecommendingOfficer).select("danny ng");
    cy.wait(2000);
    cy.get(this.locators.selectAgencyType).select("Collections");
    cy.wait(2000);
    cy.get(this.locators.selectAgencySubType).select("Field Agents");
    cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
    cy.get(this.locators.clickongenerateENcollectcode).click();
    cy.wait(2000);
    //Address Details
    cy.get(this.locators.clickonaddressdetails).click();
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
    cy.wait(2000);
    cy.get(this.locators.mobilenumber).type("0769875429");
    cy.wait(2000);
    cy.get(this.locators.areacode).type("1234");
    cy.wait(2000);
    cy.get(this.locators.landlinenumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.selectstate).select("All");
    cy.wait(2000);
    cy.get(this.locators.fillemailid).type("sachin10@yopmail.com");
    cy.wait(2000);
    cy.get(this.locators.selectcity).select("All");
    cy.wait(2000);
    cy.get(this.locators.postalcode).type("123456");
    cy.wait(2000);
    //Banking details
    cy.get(this.locators.clickonbankingdetails).click();
    cy.wait(2000);
    cy.get(this.locators.accountholdername).type("AJAY KUMAR");
    cy.wait(2000);
    cy.get(this.locators.bankaccountnumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.bankname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.bankbranchname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
    cy.wait(2000);
    //////////////////////////////////////Documentation_Details/////////////////////////////////////
  //  const filePath = 'Aadhar.png';
   const filePath1 = 'Aadhar.png';
   // Expand the documentation details section
   cy.get(':nth-child(4) > .nav-link > span').click();
   cy.wait(2000);
   //lick on various elements to interact with the UI
   cy.get('#waive--0').click();
   cy.wait(1000);
   cy.get('#waive--3').click();
   cy.wait(1000);
   cy.get('#waive--4').click();
   cy.wait(1000);
   cy.get('#waive--5').click();
   cy.wait(1000);
   cy.get('#waive--6').click();
   cy.wait(1000);
   cy.get('#agencyaddFileBtn-0').click();
   cy.wait(1000);
   cy.get('input[type="file"]').eq(0)
   .attachFile(filePath, { force: true });
   cy.wait(1000);
   cy.get('#agencydocTypeSelect-1').select('Pan Card');
   cy.get('#agencyaddFileBtn-1').click();
   cy.wait(1000);
   cy.get('input[type="file"]').eq(1)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('input[type="file"]').eq(1)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('#agencydocTypeSelect-2').select('Aadhar Card');
   cy.get('#agencyaddFileBtn-2').click();
   cy.wait(1000);
   cy.get('input[type="file"]').eq(2)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('input[type="file"]').eq(3)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('input[type="file"]').eq(4)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('input[type="file"]').eq(5)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   //////-----------------
    cy.get(this.locators.scopeofword).click();
    cy.wait(2000);
    cy.get(this.locators.productgroup).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.product).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.subproduct).select("Personal Loan");
    cy.wait(2000);

    cy.get(this.locators.placeofwork).click();
    cy.wait(2000);
    cy.get(this.locators.selectpg).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.selectp).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.selectsubp).select("Personal Loan");
    cy.wait(2000);
    cy.get(this.locators.selectbucket).select("11");
    cy.wait(2000);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectregion).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectState).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectCity).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectmanager).select("Ajit");
    cy.wait(2000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).click();
    cy.wait(2000);
    cy.get(this.locators.previousmonth).click();
    cy.wait(2000);
    cy.get(':nth-child(1) > :nth-child(7) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(3) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.Contactexpiredate).click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(8) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.submitagency).click();
    cy.wait(2000);

  }

  CreateAgency035() {
    const filePath = 'Aadhar-image.png';
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click().click();
    cy.wait(2000);
    cy.get("a[title='Add Agency']").click();
    cy.wait(2000);
    cy.get(this.locators.fillAgencyName).type("ABCDEF");
    cy.wait(2000);
    cy.get(this.locators.selectRecommendingOfficer).select("danny ng");
    cy.wait(2000);
    cy.get(this.locators.selectAgencyType).select("Collections");
    cy.wait(2000);
    cy.get(this.locators.selectAgencySubType).select("Pick Up");
    cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
    cy.get(this.locators.clickongenerateENcollectcode).click();
    cy.wait(2000);
    //Address Details
    cy.get(this.locators.clickonaddressdetails).click();
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
    cy.wait(2000);
    cy.get(this.locators.mobilenumber).type("0769875429");
    cy.wait(2000);
    cy.get(this.locators.areacode).type("1234");
    cy.wait(2000);
    cy.get(this.locators.landlinenumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.selectstate).select("All");
    cy.wait(2000);
    cy.get(this.locators.fillemailid).type("sachin10@yopmail.com");
    cy.wait(2000);
    cy.get(this.locators.selectcity).select("All");
    cy.wait(2000);
    cy.get(this.locators.postalcode).type("123456");
    cy.wait(2000);
    //Banking details
    cy.get(this.locators.clickonbankingdetails).click();
    cy.wait(2000);
    cy.get(this.locators.accountholdername).type("AJAY KUMAR");
    cy.wait(2000);
    cy.get(this.locators.bankaccountnumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.bankname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.bankbranchname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
    cy.wait(2000);
    //////////////////////////////////////Documentation_Details/////////////////////////////////////
  //  const filePath = 'Aadhar.png';
   const filePath1 = 'Aadhar.png';
   // Expand the documentation details section
   cy.get(':nth-child(4) > .nav-link > span').click();
   cy.wait(2000);
   //lick on various elements to interact with the UI
   cy.get('#waive--0').click();
   cy.wait(1000);
   cy.get('#waive--3').click();
   cy.wait(1000);
   cy.get('#waive--4').click();
   cy.wait(1000);
   cy.get('#waive--5').click();
   cy.wait(1000);
   cy.get('#waive--6').click();
   cy.wait(1000);
   cy.get('#agencyaddFileBtn-0').click();
   cy.wait(1000);
   cy.get('input[type="file"]').eq(0)
   .attachFile(filePath, { force: true });
   cy.wait(1000);
   cy.get('#agencydocTypeSelect-1').select('Pan Card');
   cy.get('#agencyaddFileBtn-1').click();
   cy.wait(1000);
   cy.get('input[type="file"]').eq(1)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('input[type="file"]').eq(1)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('#agencydocTypeSelect-2').select('Aadhar Card');
   cy.get('#agencyaddFileBtn-2').click();
   cy.wait(1000);
   cy.get('input[type="file"]').eq(2)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('input[type="file"]').eq(3)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('input[type="file"]').eq(4)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('input[type="file"]').eq(5)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   //////-----------------

    cy.get(this.locators.scopeofword).click();
    cy.wait(2000);
    cy.get(this.locators.productgroup).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.product).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.subproduct).select("Personal Loan");
    cy.wait(2000);

    cy.get(this.locators.placeofwork).click();
    cy.wait(2000);
    cy.get(this.locators.selectpg).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.selectp).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.selectsubp).select("Personal Loan");
    cy.wait(2000);
    cy.get(this.locators.selectbucket).select("11");
    cy.wait(2000);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectregion).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectState).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectCity).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectmanager).select("Ajit");
    cy.wait(2000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).click();
    cy.wait(2000);
    cy.get(this.locators.previousmonth).click();
    cy.wait(2000);
    cy.get(':nth-child(1) > :nth-child(7) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(3) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.Contactexpiredate).click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(8) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.submitagency).click();
    cy.wait(2000);

  }

  CreateAgency036() {
    const filePath = 'Aadhar-image.png';
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click().click();
    cy.wait(2000);
    cy.get("a[title='Add Agency']").click();
    cy.wait(2000);
    cy.get(this.locators.fillAgencyName).type("ABCDEF");
    cy.wait(2000);
    cy.get(this.locators.selectRecommendingOfficer).select("danny ng");
    cy.wait(2000);
    cy.get(this.locators.selectAgencyType).select("Collections");
    cy.wait(2000);
    cy.get(this.locators.selectAgencySubType).select("Skip Agency");
    cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
    cy.get(this.locators.clickongenerateENcollectcode).click();
    cy.wait(2000);
    //Address Details
    cy.get(this.locators.clickonaddressdetails).click();
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
    cy.wait(2000);
    cy.get(this.locators.mobilenumber).type("0769875429");
    cy.wait(2000);
    cy.get(this.locators.areacode).type("1234");
    cy.wait(2000);
    cy.get(this.locators.landlinenumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.selectstate).select("All");
    cy.wait(2000);
    cy.get(this.locators.fillemailid).type("sachin10@yopmail.com");
    cy.wait(2000);
    cy.get(this.locators.selectcity).select("All");
    cy.wait(2000);
    cy.get(this.locators.postalcode).type("123456");
    cy.wait(2000);
    //Banking details
    cy.get(this.locators.clickonbankingdetails).click();
    cy.wait(2000);
    cy.get(this.locators.accountholdername).type("AJAY KUMAR");
    cy.wait(2000);
    cy.get(this.locators.bankaccountnumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.bankname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.bankbranchname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
    cy.wait(2000);
   //////////////////////////////////////Documentation_Details/////////////////////////////////////
  //  const filePath = 'Aadhar.png';
  const filePath1 = 'Aadhar.png';
  // Expand the documentation details section
  cy.get(':nth-child(4) > .nav-link > span').click();
  cy.wait(2000);
  //lick on various elements to interact with the UI
  cy.get('#waive--0').click();
  cy.wait(1000);
  cy.get('#waive--3').click();
  cy.wait(1000);
  cy.get('#waive--4').click();
  cy.wait(1000);
  cy.get('#waive--5').click();
  cy.wait(1000);
  cy.get('#waive--6').click();
  cy.wait(1000);
  cy.get('#agencyaddFileBtn-0').click();
  cy.wait(1000);
  cy.get('input[type="file"]').eq(0)
  .attachFile(filePath, { force: true });
  cy.wait(1000);
  cy.get('#agencydocTypeSelect-1').select('Pan Card');
  cy.get('#agencyaddFileBtn-1').click();
  cy.wait(1000);
  cy.get('input[type="file"]').eq(1)
  .attachFile(filePath1, { force: true });
  cy.wait(1000);
  cy.get('input[type="file"]').eq(1)
  .attachFile(filePath1, { force: true });
  cy.wait(1000);
  cy.get('#agencydocTypeSelect-2').select('Aadhar Card');
  cy.get('#agencyaddFileBtn-2').click();
  cy.wait(1000);
  cy.get('input[type="file"]').eq(2)
  .attachFile(filePath1, { force: true });
  cy.wait(1000);
  cy.get('input[type="file"]').eq(3)
  .attachFile(filePath1, { force: true });
  cy.wait(1000);
  cy.get('input[type="file"]').eq(4)
  .attachFile(filePath1, { force: true });
  cy.wait(1000);
  cy.get('input[type="file"]').eq(5)
  .attachFile(filePath1, { force: true });
  cy.wait(1000);
  //////-----------------

    cy.get(this.locators.scopeofword).click();
    cy.wait(2000);
    cy.get(this.locators.productgroup).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.product).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.subproduct).select("Personal Loan");
    cy.wait(2000);

    cy.get(this.locators.placeofwork).click();
    cy.wait(2000);
    cy.get(this.locators.selectpg).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.selectp).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.selectsubp).select("Personal Loan");
    cy.wait(2000);
    cy.get(this.locators.selectbucket).select("11");
    cy.wait(2000);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectregion).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectState).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectCity).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectmanager).select("Ajit");
    cy.wait(2000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).click();
    cy.wait(2000);
    cy.get(this.locators.previousmonth).click();
    cy.wait(2000);
    cy.get(':nth-child(1) > :nth-child(7) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(3) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.Contactexpiredate).click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(8) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.submitagency).click();
    cy.wait(2000);

  }

  CreateAgency037() {
    const filePath = 'Aadhar-image.png';
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click().click();
    cy.wait(2000);
    cy.get("a[title='Add Agency']").click();
    cy.wait(2000);
    cy.get(this.locators.fillAgencyName).type("ABCDEF");
    cy.wait(2000);
    cy.get(this.locators.selectRecommendingOfficer).select("danny ng");
    cy.wait(2000);
    cy.get(this.locators.selectAgencyType).select("Collections");
    cy.wait(2000);
    cy.get(this.locators.selectAgencySubType).select("Tele calling");
    cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
    cy.get(this.locators.clickongenerateENcollectcode).click();
    cy.wait(2000);
    //Address Details
    cy.get(this.locators.clickonaddressdetails).click();
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
    cy.wait(2000);
    cy.get(this.locators.mobilenumber).type("0769875429");
    cy.wait(2000);
    cy.get(this.locators.areacode).type("1234");
    cy.wait(2000);
    cy.get(this.locators.landlinenumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.selectstate).select("All");
    cy.wait(2000);
    cy.get(this.locators.fillemailid).type("sachin10@yopmail.com");
    cy.wait(2000);
    cy.get(this.locators.selectcity).select("All");
    cy.wait(2000);
    cy.get(this.locators.postalcode).type("123456");
    cy.wait(2000);
    //Banking details
    cy.get(this.locators.clickonbankingdetails).click();
    cy.wait(2000);
    cy.get(this.locators.accountholdername).type("AJAY KUMAR");
    cy.wait(2000);
    cy.get(this.locators.bankaccountnumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.bankname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.bankbranchname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
    cy.wait(2000);
   //////////////////////////////////////Documentation_Details/////////////////////////////////////
  //  const filePath = 'Aadhar.png';
  const filePath1 = 'Aadhar.png';
  // Expand the documentation details section
  cy.get(':nth-child(4) > .nav-link > span').click();
  cy.wait(2000);
  //lick on various elements to interact with the UI
  cy.get('#waive--0').click();
  cy.wait(1000);
  cy.get('#waive--3').click();
  cy.wait(1000);
  cy.get('#waive--4').click();
  cy.wait(1000);
  cy.get('#waive--5').click();
  cy.wait(1000);
  cy.get('#waive--6').click();
  cy.wait(1000);
  cy.get('#agencyaddFileBtn-0').click();
  cy.wait(1000);
  cy.get('input[type="file"]').eq(0)
  .attachFile(filePath, { force: true });
  cy.wait(1000);
  cy.get('#agencydocTypeSelect-1').select('Pan Card');
  cy.get('#agencyaddFileBtn-1').click();
  cy.wait(1000);
  cy.get('input[type="file"]').eq(1)
  .attachFile(filePath1, { force: true });
  cy.wait(1000);
  cy.get('input[type="file"]').eq(1)
  .attachFile(filePath1, { force: true });
  cy.wait(1000);
  cy.get('#agencydocTypeSelect-2').select('Aadhar Card');
  cy.get('#agencyaddFileBtn-2').click();
  cy.wait(1000);
  cy.get('input[type="file"]').eq(2)
  .attachFile(filePath1, { force: true });
  cy.wait(1000);
  cy.get('input[type="file"]').eq(3)
  .attachFile(filePath1, { force: true });
  cy.wait(1000);
  cy.get('input[type="file"]').eq(4)
  .attachFile(filePath1, { force: true });
  cy.wait(1000);
  cy.get('input[type="file"]').eq(5)
  .attachFile(filePath1, { force: true });
  cy.wait(1000);
  //////-----------------
    cy.get(this.locators.scopeofword).click();
    cy.wait(2000);
    cy.get(this.locators.productgroup).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.product).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.subproduct).select("Personal Loan");
    cy.wait(2000);

    cy.get(this.locators.placeofwork).click();
    cy.wait(2000);
    cy.get(this.locators.selectpg).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.selectp).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.selectsubp).select("Personal Loan");
    cy.wait(2000);
    cy.get(this.locators.selectbucket).select("11");
    cy.wait(2000);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectregion).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectState).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectCity).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectmanager).select("Ajit");
    cy.wait(2000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).click();
    cy.wait(2000);
    cy.get(this.locators.previousmonth).click();
    cy.wait(2000);
    cy.get(':nth-child(1) > :nth-child(7) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(3) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.Contactexpiredate).click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(8) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.submitagency).click();
    cy.wait(2000);

  }

  CreateAgency038() {
    const filePath = 'Aadhar-image.png';
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click().click();
    cy.wait(2000);
    cy.get("a[title='Add Agency']").click();
    cy.wait(2000);
    cy.get(this.locators.fillAgencyName).type("ABCDEF");
    cy.wait(2000);
    cy.get(this.locators.selectRecommendingOfficer).select("danny ng");
    cy.wait(2000);
    cy.get(this.locators.selectAgencyType).select("Recovery Agents");
    cy.wait(2000);
    cy.get(this.locators.selectAgencySubType).select("Field Agents");
    cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
    cy.get(this.locators.clickongenerateENcollectcode).click();
    cy.wait(2000);
    //Address Details
    cy.get(this.locators.clickonaddressdetails).click();
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
    cy.wait(2000);
    cy.get(this.locators.mobilenumber).type("0769875429");
    cy.wait(2000);
    cy.get(this.locators.areacode).type("1234");
    cy.wait(2000);
    cy.get(this.locators.landlinenumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.selectstate).select("All");
    cy.wait(2000);
    cy.get(this.locators.fillemailid).type("sachin10@yopmail.com");
    cy.wait(2000);
    cy.get(this.locators.selectcity).select("All");
    cy.wait(2000);
    cy.get(this.locators.postalcode).type("123456");
    cy.wait(2000);
    //Banking details
    cy.get(this.locators.clickonbankingdetails).click();
    cy.wait(2000);
    cy.get(this.locators.accountholdername).type("AJAY KUMAR");
    cy.wait(2000);
    cy.get(this.locators.bankaccountnumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.bankname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.bankbranchname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
    cy.wait(2000);
    //////////////////////////////////////Documentation_Details/////////////////////////////////////
  //  const filePath = 'Aadhar.png';
   const filePath1 = 'Aadhar.png';
   // Expand the documentation details section
   cy.get(':nth-child(4) > .nav-link > span').click();
   cy.wait(2000);
   //lick on various elements to interact with the UI
   cy.get('#waive--0').click();
   cy.wait(1000);
   cy.get('#waive--3').click();
   cy.wait(1000);
   cy.get('#waive--4').click();
   cy.wait(1000);
   cy.get('#waive--5').click();
   cy.wait(1000);
   cy.get('#waive--6').click();
   cy.wait(1000);
   cy.get('#agencyaddFileBtn-0').click();
   cy.wait(1000);
   cy.get('input[type="file"]').eq(0)
   .attachFile(filePath, { force: true });
   cy.wait(1000);
   cy.get('#agencydocTypeSelect-1').select('Pan Card');
   cy.get('#agencyaddFileBtn-1').click();
   cy.wait(1000);
   cy.get('input[type="file"]').eq(1)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('input[type="file"]').eq(1)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('#agencydocTypeSelect-2').select('Aadhar Card');
   cy.get('#agencyaddFileBtn-2').click();
   cy.wait(1000);
   cy.get('input[type="file"]').eq(2)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('input[type="file"]').eq(3)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('input[type="file"]').eq(4)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('input[type="file"]').eq(5)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   //////-----------------
    cy.get(this.locators.scopeofword).click();
    cy.wait(2000);
    cy.get(this.locators.productgroup).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.product).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.subproduct).select("Personal Loan");
    cy.wait(2000);

    cy.get(this.locators.placeofwork).click();
    cy.wait(2000);
    cy.get(this.locators.selectpg).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.selectp).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.selectsubp).select("Personal Loan");
    cy.wait(2000);
    cy.get(this.locators.selectbucket).select("11");
    cy.wait(2000);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectregion).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectState).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectCity).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectmanager).select("Ajit");
    cy.wait(2000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).click();
    cy.wait(2000);
    cy.get(this.locators.previousmonth).click();
    cy.wait(2000);
    cy.get(':nth-child(1) > :nth-child(7) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(3) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.Contactexpiredate).click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(8) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.submitagency).click();
    cy.wait(2000);

  }

  CreateAgency039() {
    const filePath = 'Aadhar-image.png';
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click().click();
    cy.wait(2000);
    cy.get("a[title='Add Agency']").click();
    cy.wait(2000);
    cy.get(this.locators.fillAgencyName).type("ABCDEF");
    cy.wait(2000);
    cy.get(this.locators.selectRecommendingOfficer).select("danny ng");
    cy.wait(2000);
    cy.get(this.locators.selectAgencyType).select("Recovery Agents");
    cy.wait(2000);
    cy.get(this.locators.selectAgencySubType).select("Valuer");
    cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
    cy.get(this.locators.clickongenerateENcollectcode).click();
    cy.wait(2000);
    //Address Details
    cy.get(this.locators.clickonaddressdetails).click();
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
    cy.wait(2000);
    cy.get(this.locators.mobilenumber).type("0769875429");
    cy.wait(2000);
    cy.get(this.locators.areacode).type("1234");
    cy.wait(2000);
    cy.get(this.locators.landlinenumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.selectstate).select("All");
    cy.wait(2000);
    cy.get(this.locators.fillemailid).type("sachin10@yopmail.com");
    cy.wait(2000);
    cy.get(this.locators.selectcity).select("All");
    cy.wait(2000);
    cy.get(this.locators.postalcode).type("123456");
    cy.wait(2000);
    //Banking details
    cy.get(this.locators.clickonbankingdetails).click();
    cy.wait(2000);
    cy.get(this.locators.accountholdername).type("AJAY KUMAR");
    cy.wait(2000);
    cy.get(this.locators.bankaccountnumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.bankname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.bankbranchname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
    cy.wait(2000);
    //////////////////////////////////////Documentation_Details/////////////////////////////////////
  //  const filePath = 'Aadhar.png';
   const filePath1 = 'Aadhar.png';
   // Expand the documentation details section
   cy.get(':nth-child(4) > .nav-link > span').click();
   cy.wait(2000);
   //lick on various elements to interact with the UI
   cy.get('#waive--0').click();
   cy.wait(1000);
   cy.get('#waive--3').click();
   cy.wait(1000);
   cy.get('#waive--4').click();
   cy.wait(1000);
   cy.get('#waive--5').click();
   cy.wait(1000);
   cy.get('#waive--6').click();
   cy.wait(1000);
   cy.get('#agencyaddFileBtn-0').click();
   cy.wait(1000);
   cy.get('input[type="file"]').eq(0)
   .attachFile(filePath, { force: true });
   cy.wait(1000);
   cy.get('#agencydocTypeSelect-1').select('Pan Card');
   cy.get('#agencyaddFileBtn-1').click();
   cy.wait(1000);
   cy.get('input[type="file"]').eq(1)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('input[type="file"]').eq(1)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('#agencydocTypeSelect-2').select('Aadhar Card');
   cy.get('#agencyaddFileBtn-2').click();
   cy.wait(1000);
   cy.get('input[type="file"]').eq(2)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('input[type="file"]').eq(3)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('input[type="file"]').eq(4)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('input[type="file"]').eq(5)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   //////-----------------

    cy.get(this.locators.scopeofword).click();
    cy.wait(2000);
    cy.get(this.locators.productgroup).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.product).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.subproduct).select("Personal Loan");
    cy.wait(2000);

    cy.get(this.locators.placeofwork).click();
    cy.wait(2000);
    cy.get(this.locators.selectpg).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.selectp).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.selectsubp).select("Personal Loan");
    cy.wait(2000);
    cy.get(this.locators.selectbucket).select("11");
    cy.wait(2000);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectregion).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectState).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectCity).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectmanager).select("Ajit");
    cy.wait(2000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).click();
    cy.wait(2000);
    cy.get(this.locators.previousmonth).click();
    cy.wait(2000);
    cy.get(':nth-child(1) > :nth-child(7) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(3) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.Contactexpiredate).click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(8) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.submitagency).click();
    cy.wait(2000);

  }

  CreateAgency040() {
    const filePath = 'Aadhar-image.png';
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click().click();
    cy.wait(2000);
    cy.get("a[title='Add Agency']").click();
    cy.wait(2000);
    cy.get(this.locators.fillAgencyName).type("ABCDEF");
    cy.wait(2000);
    cy.get(this.locators.selectRecommendingOfficer).select("danny ng");
    cy.wait(2000);
    cy.get(this.locators.selectAgencyType).select("Repossession Agency");
    cy.wait(2000);
    cy.get(this.locators.selectAgencySubType).select("Repossession Agent");
    cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
    cy.get(this.locators.clickongenerateENcollectcode).click();
    cy.wait(2000);
    //Address Details
    cy.get(this.locators.clickonaddressdetails).click();
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
    cy.wait(2000);
    cy.get(this.locators.mobilenumber).type("0769875429");
    cy.wait(2000);
    cy.get(this.locators.areacode).type("1234");
    cy.wait(2000);
    cy.get(this.locators.landlinenumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.selectstate).select("All");
    cy.wait(2000);
    cy.get(this.locators.fillemailid).type("sachin10@yopmail.com");
    cy.wait(2000);
    cy.get(this.locators.selectcity).select("All");
    cy.wait(2000);
    cy.get(this.locators.postalcode).type("123456");
    cy.wait(2000);
    //Banking details
    cy.get(this.locators.clickonbankingdetails).click();
    cy.wait(2000);
    cy.get(this.locators.accountholdername).type("AJAY KUMAR");
    cy.wait(2000);
    cy.get(this.locators.bankaccountnumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.bankname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.bankbranchname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
    cy.wait(2000);
     //////////////////////////////////////Documentation_Details/////////////////////////////////////
  //  const filePath = 'Aadhar.png';
   const filePath1 = 'Aadhar.png';
   // Expand the documentation details section
   cy.get(':nth-child(4) > .nav-link > span').click();
   cy.wait(2000);
   //lick on various elements to interact with the UI
   cy.get('#waive--0').click();
   cy.wait(1000);
   cy.get('#waive--3').click();
   cy.wait(1000);
   cy.get('#waive--4').click();
   cy.wait(1000);
   cy.get('#waive--5').click();
   cy.wait(1000);
   cy.get('#waive--6').click();
   cy.wait(1000);
   cy.get('#agencyaddFileBtn-0').click();
   cy.wait(1000);
   cy.get('input[type="file"]').eq(0)
   .attachFile(filePath, { force: true });
   cy.wait(1000);
   cy.get('#agencydocTypeSelect-1').select('Pan Card');
   cy.get('#agencyaddFileBtn-1').click();
   cy.wait(1000);
   cy.get('input[type="file"]').eq(1)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('input[type="file"]').eq(1)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('#agencydocTypeSelect-2').select('Aadhar Card');
   cy.get('#agencyaddFileBtn-2').click();
   cy.wait(1000);
   cy.get('input[type="file"]').eq(2)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('input[type="file"]').eq(3)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('input[type="file"]').eq(4)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('input[type="file"]').eq(5)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   //////-----------------

    cy.get(this.locators.scopeofword).click();
    cy.wait(2000);
    cy.get(this.locators.productgroup).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.product).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.subproduct).select("Personal Loan");
    cy.wait(2000);

    cy.get(this.locators.placeofwork).click();
    cy.wait(2000);
    cy.get(this.locators.selectpg).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.selectp).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.selectsubp).select("Personal Loan");
    cy.wait(2000);
    cy.get(this.locators.selectbucket).select("11");
    cy.wait(2000);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectregion).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectState).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectCity).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectmanager).select("Ajit");
    cy.wait(2000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).click();
    cy.wait(2000);
    cy.get(this.locators.previousmonth).click();
    cy.wait(2000);
    cy.get(':nth-child(1) > :nth-child(7) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(3) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.Contactexpiredate).click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(8) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.submitagency).click();
    cy.wait(2000);

  }

  CreateAgency041() {
    const filePath = 'Aadhar-image.png';
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click().click();
    cy.wait(2000);
    cy.get("a[title='Add Agency']").click();
    cy.wait(2000);
    cy.get(this.locators.fillAgencyName).type("ABCDEF");
    cy.wait(2000);
    cy.get(this.locators.selectRecommendingOfficer).select("danny ng");
    cy.wait(2000);
    cy.get(this.locators.selectAgencyType).select("Repossession Agency");
    cy.wait(2000);
    cy.get(this.locators.selectAgencySubType).select("Valuer");
    cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
    cy.get(this.locators.clickongenerateENcollectcode).click();
    cy.wait(2000);
    //Address Details
    cy.get(this.locators.clickonaddressdetails).click();
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
    cy.wait(2000);
    cy.get(this.locators.mobilenumber).type("0769875429");
    cy.wait(2000);
    cy.get(this.locators.areacode).type("1234");
    cy.wait(2000);
    cy.get(this.locators.landlinenumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.selectstate).select("All");
    cy.wait(2000);
    cy.get(this.locators.fillemailid).type("sachin10@yopmail.com");
    cy.wait(2000);
    cy.get(this.locators.selectcity).select("All");
    cy.wait(2000);
    cy.get(this.locators.postalcode).type("123456");
    cy.wait(2000);
    //Banking details
    cy.get(this.locators.clickonbankingdetails).click();
    cy.wait(2000);
    cy.get(this.locators.accountholdername).type("AJAY KUMAR");
    cy.wait(2000);
    cy.get(this.locators.bankaccountnumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.bankname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.bankbranchname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
    cy.wait(2000);
    //////////////////////////////////////Documentation_Details/////////////////////////////////////
  //  const filePath = 'Aadhar.png';
  const filePath1 = 'Aadhar.png';
  // Expand the documentation details section
  cy.get(':nth-child(4) > .nav-link > span').click();
  cy.wait(2000);
  //lick on various elements to interact with the UI
  cy.get('#waive--0').click();
  cy.wait(1000);
  cy.get('#waive--3').click();
  cy.wait(1000);
  cy.get('#waive--4').click();
  cy.wait(1000);
  cy.get('#waive--5').click();
  cy.wait(1000);
  cy.get('#waive--6').click();
  cy.wait(1000);
  cy.get('#agencyaddFileBtn-0').click();
  cy.wait(1000);
  cy.get('input[type="file"]').eq(0)
  .attachFile(filePath, { force: true });
  cy.wait(1000);
  cy.get('#agencydocTypeSelect-1').select('Pan Card');
  cy.get('#agencyaddFileBtn-1').click();
  cy.wait(1000);
  cy.get('input[type="file"]').eq(1)
  .attachFile(filePath1, { force: true });
  cy.wait(1000);
  cy.get('input[type="file"]').eq(1)
  .attachFile(filePath1, { force: true });
  cy.wait(1000);
  cy.get('#agencydocTypeSelect-2').select('Aadhar Card');
  cy.get('#agencyaddFileBtn-2').click();
  cy.wait(1000);
  cy.get('input[type="file"]').eq(2)
  .attachFile(filePath1, { force: true });
  cy.wait(1000);
  cy.get('input[type="file"]').eq(3)
  .attachFile(filePath1, { force: true });
  cy.wait(1000);
  cy.get('input[type="file"]').eq(4)
  .attachFile(filePath1, { force: true });
  cy.wait(1000);
  cy.get('input[type="file"]').eq(5)
  .attachFile(filePath1, { force: true });
  cy.wait(1000);
  //////-----------------
    cy.get(this.locators.scopeofword).click();
    cy.wait(2000);
    cy.get(this.locators.productgroup).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.product).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.subproduct).select("Personal Loan");
    cy.wait(2000);

    cy.get(this.locators.placeofwork).click();
    cy.wait(2000);
    cy.get(this.locators.selectpg).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.selectp).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.selectsubp).select("Personal Loan");
    cy.wait(2000);
    cy.get(this.locators.selectbucket).select("11");
    cy.wait(2000);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectregion).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectState).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectCity).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectmanager).select("Ajit");
    cy.wait(2000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).click();
    cy.wait(2000);
    cy.get(this.locators.previousmonth).click();
    cy.wait(2000);
    cy.get(':nth-child(1) > :nth-child(7) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(3) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.Contactexpiredate).click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(8) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.submitagency).click();
    cy.wait(2000);

  }

  CreateAgency042() {
    const filePath = 'Aadhar-image.png';
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click().click();
    cy.wait(2000);
    cy.get("a[title='Add Agency']").click();
    cy.wait(2000);
    cy.get(this.locators.fillAgencyName).type("ABCDEF");
    cy.wait(2000);
    cy.get(this.locators.selectRecommendingOfficer).select("danny ng");
    cy.wait(2000);
    cy.get(this.locators.selectAgencyType).select("Repossession Agency");
    cy.wait(2000);
    cy.get(this.locators.selectAgencySubType).select("Yard");
    cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
    cy.get(this.locators.clickongenerateENcollectcode).click();
    cy.wait(2000);
    //Address Details
    cy.get(this.locators.clickonaddressdetails).click();
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
    cy.wait(2000);
    cy.get(this.locators.mobilenumber).type("0769875429");
    cy.wait(2000);
    cy.get(this.locators.areacode).type("1234");
    cy.wait(2000);
    cy.get(this.locators.landlinenumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.selectstate).select("All");
    cy.wait(2000);
    cy.get(this.locators.fillemailid).type("sachin10@yopmail.com");
    cy.wait(2000);
    cy.get(this.locators.selectcity).select("All");
    cy.wait(2000);
    cy.get(this.locators.postalcode).type("123456");
    cy.wait(2000);
    //Banking details
    cy.get(this.locators.clickonbankingdetails).click();
    cy.wait(2000);
    cy.get(this.locators.accountholdername).type("AJAY KUMAR");
    cy.wait(2000);
    cy.get(this.locators.bankaccountnumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.bankname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.bankbranchname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
    cy.wait(2000);
     //////////////////////////////////////Documentation_Details/////////////////////////////////////
  //  const filePath = 'Aadhar.png';
   const filePath1 = 'Aadhar.png';
   // Expand the documentation details section
   cy.get(':nth-child(4) > .nav-link > span').click();
   cy.wait(2000);
   //lick on various elements to interact with the UI
   cy.get('#waive--0').click();
   cy.wait(1000);
   cy.get('#waive--3').click();
   cy.wait(1000);
   cy.get('#waive--4').click();
   cy.wait(1000);
   cy.get('#waive--5').click();
   cy.wait(1000);
   cy.get('#waive--6').click();
   cy.wait(1000);
   cy.get('#agencyaddFileBtn-0').click();
   cy.wait(1000);
   cy.get('input[type="file"]').eq(0)
   .attachFile(filePath, { force: true });
   cy.wait(1000);
   cy.get('#agencydocTypeSelect-1').select('Pan Card');
   cy.get('#agencyaddFileBtn-1').click();
   cy.wait(1000);
   cy.get('input[type="file"]').eq(1)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('input[type="file"]').eq(1)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('#agencydocTypeSelect-2').select('Aadhar Card');
   cy.get('#agencyaddFileBtn-2').click();
   cy.wait(1000);
   cy.get('input[type="file"]').eq(2)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('input[type="file"]').eq(3)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('input[type="file"]').eq(4)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('input[type="file"]').eq(5)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   //////-----------------
    cy.get(this.locators.scopeofword).click();
    cy.wait(2000);
    cy.get(this.locators.productgroup).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.product).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.subproduct).select("Personal Loan");
    cy.wait(2000);
    cy.get(this.locators.placeofwork).click();
    cy.wait(2000);
    cy.get(this.locators.selectpg).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.selectp).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.selectsubp).select("Personal Loan");
    cy.wait(2000);
    cy.get(this.locators.selectbucket).select("11");
    cy.wait(2000);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectregion).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectState).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectCity).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectmanager).select("Ajit");
    cy.wait(2000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).click();
    cy.wait(2000);
    cy.get(this.locators.previousmonth).click();
    cy.wait(2000);
    cy.get(':nth-child(1) > :nth-child(7) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(3) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.Contactexpiredate).click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(8) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.submitagency).click();
    cy.wait(2000);

  }


  CreateAgency043() {
    const filePath = 'Aadhar-image.png';
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click().click();
    cy.wait(2000);
    cy.get("a[title='Add Agency']").click();
    cy.wait(2000);
    cy.get(this.locators.fillAgencyName).type("ABCDEF");
    cy.wait(2000);
    cy.get(this.locators.selectRecommendingOfficer).select("danny ng");
    cy.wait(2000);
    cy.get(this.locators.selectAgencyType).select("Repossession Agency");
    cy.wait(2000);
    cy.get(this.locators.selectAgencySubType).select("Yard");
    cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
    cy.get(this.locators.clickongenerateENcollectcode).click();
    cy.wait(2000);
    //Address Details
    cy.get(this.locators.clickonaddressdetails).click();
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
    cy.wait(2000);
    cy.get(this.locators.mobilenumber).type("0769875429");
    cy.wait(2000);
    cy.get(this.locators.areacode).type("1234");
    cy.wait(2000);
    cy.get(this.locators.landlinenumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.selectstate).select("All");
    cy.wait(2000);
    cy.get(this.locators.fillemailid).type("sachin10@yopmail.com");
    cy.wait(2000);
    cy.get(this.locators.selectcity).select("All");
    cy.wait(2000);
    cy.get(this.locators.postalcode).type("123456");
    cy.wait(2000);
    //Banking details
    cy.get(this.locators.clickonbankingdetails).click();
    cy.wait(2000);
    cy.get(this.locators.accountholdername).type("AJAY KUMAR");
    cy.wait(2000);
    cy.get(this.locators.bankaccountnumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.bankname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.bankbranchname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
    cy.wait(2000);
     //////////////////////////////////////Documentation_Details/////////////////////////////////////
  //  const filePath = 'Aadhar.png';
   const filePath1 = 'Aadhar.png';
   // Expand the documentation details section
   cy.get(':nth-child(4) > .nav-link > span').click();
   cy.wait(2000);
   //lick on various elements to interact with the UI
   cy.get('#waive--0').click();
   cy.wait(1000);
   cy.get('#waive--3').click();
   cy.wait(1000);
   cy.get('#waive--4').click();
   cy.wait(1000);
   cy.get('#waive--5').click();
   cy.wait(1000);
   cy.get('#waive--6').click();
   cy.wait(1000);
   cy.get('#agencyaddFileBtn-0').click();
   cy.wait(1000);
   cy.get('input[type="file"]').eq(0)
   .attachFile(filePath, { force: true });
   cy.wait(1000);
   cy.get('#agencydocTypeSelect-1').select('Pan Card');
   cy.get('#agencyaddFileBtn-1').click();
   cy.wait(1000);
   cy.get('input[type="file"]').eq(1)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('input[type="file"]').eq(1)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('#agencydocTypeSelect-2').select('Aadhar Card');
   cy.get('#agencyaddFileBtn-2').click();
   cy.wait(1000);
   cy.get('input[type="file"]').eq(2)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('input[type="file"]').eq(3)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('input[type="file"]').eq(4)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('input[type="file"]').eq(5)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   //////-----------------

    cy.get(this.locators.scopeofword).click();
    cy.wait(2000);
    cy.get(this.locators.productgroup).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.product).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.subproduct).select("Personal Loan");
    cy.wait(2000);
    cy.get(this.locators.placeofwork).click();
    cy.wait(2000);
    cy.get(this.locators.selectpg).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.selectp).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.selectsubp).select("Personal Loan");
    cy.wait(2000);
    cy.get(this.locators.selectbucket).select("11");
    cy.wait(2000);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectregion).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectState).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectCity).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectmanager).select("Ajit");
    cy.wait(2000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).click();
    cy.wait(2000);
    cy.get(this.locators.previousmonth).click();
    cy.wait(2000);
    cy.get(':nth-child(1) > :nth-child(7) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(3) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.Contactexpiredate).click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(8) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.submitagency).click();
    cy.wait(2000);

  }

  CreateAgency044() {
    const filePath = 'Aadhar-image.png';
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click().click();
    cy.wait(2000);
    cy.get("a[title='Add Agency']").click();
    cy.wait(2000);
    cy.get(this.locators.fillAgencyName).type("ABCDEF");
    cy.wait(2000);
    cy.get(this.locators.selectRecommendingOfficer).select("danny ng");
    cy.wait(2000);
    cy.get(this.locators.selectAgencyType).select("Repossession Agency");
    cy.wait(2000);
    cy.get(this.locators.selectAgencySubType).select("Yard");
    cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
    cy.get(this.locators.clickongenerateENcollectcode).click();
    cy.wait(2000);
    //Address Details
    cy.get(this.locators.clickonaddressdetails).click();
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
    cy.wait(2000);
    cy.get(this.locators.mobilenumber).type("0769875429");
    cy.wait(2000);
    cy.get(this.locators.areacode).type("1234");
    cy.wait(2000);
    cy.get(this.locators.landlinenumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.selectstate).select("All");
    cy.wait(2000);
    cy.get(this.locators.fillemailid).type("sachin10@yopmail.com");
    cy.wait(2000);
    cy.get(this.locators.selectcity).select("All");
    cy.wait(2000);
    cy.get(this.locators.postalcode).type("123456");
    cy.wait(2000);
    //Banking details
    cy.get(this.locators.clickonbankingdetails).click();
    cy.wait(2000);
    cy.get(this.locators.accountholdername).type("AJAY KUMAR");
    cy.wait(2000);
    cy.get(this.locators.bankaccountnumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.bankname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.bankbranchname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
    cy.wait(2000);
     //////////////////////////////////////Documentation_Details/////////////////////////////////////
  //  const filePath = 'Aadhar.png';
   const filePath1 = 'Aadhar.png';
   // Expand the documentation details section
   cy.get(':nth-child(4) > .nav-link > span').click();
   cy.wait(2000);
   //lick on various elements to interact with the UI
   cy.get('#waive--0').click();
   cy.wait(1000);
   cy.get('#waive--3').click();
   cy.wait(1000);
   cy.get('#waive--4').click();
   cy.wait(1000);
   cy.get('#waive--5').click();
   cy.wait(1000);
   cy.get('#waive--6').click();
   cy.wait(1000);
   cy.get('#agencyaddFileBtn-0').click();
   cy.wait(1000);
   cy.get('input[type="file"]').eq(0)
   .attachFile(filePath, { force: true });
   cy.wait(1000);
   cy.get('#agencydocTypeSelect-1').select('Pan Card');
   cy.get('#agencyaddFileBtn-1').click();
   cy.wait(1000);
   cy.get('input[type="file"]').eq(1)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('input[type="file"]').eq(1)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('#agencydocTypeSelect-2').select('Aadhar Card');
   cy.get('#agencyaddFileBtn-2').click();
   cy.wait(1000);
   cy.get('input[type="file"]').eq(2)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('input[type="file"]').eq(3)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('input[type="file"]').eq(4)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('input[type="file"]').eq(5)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   //////-----------------

    cy.get(this.locators.scopeofword).click();
    cy.wait(2000);
    cy.get(this.locators.productgroup).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.product).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.subproduct).select("Personal Loan");
    cy.wait(2000);
    cy.get(this.locators.placeofwork).click();
    cy.wait(2000);
    cy.get(this.locators.selectpg).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.selectp).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.selectsubp).select("Personal Loan");
    cy.wait(2000);
    cy.get(this.locators.selectbucket).select("11");
    cy.wait(2000);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectregion).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectState).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectCity).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectmanager).select("Ajit");
    cy.wait(2000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).click();
    cy.wait(2000);
    cy.get(this.locators.previousmonth).click();
    cy.wait(2000);
    cy.get(':nth-child(1) > :nth-child(7) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(3) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.Contactexpiredate).click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(8) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.submitagency).click();
    cy.wait(2000);

  }

  CreateAgency046() {
    const filePath = 'Aadhar-image.png';
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get("a[title='Add Agency']").click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click().click();
    cy.wait(2000);
    cy.get(this.locators.fillAgencyName).type("ABCDEF");
    cy.wait(2000);
    cy.get(this.locators.selectRecommendingOfficer).select("danny ng");
    cy.wait(2000);
    cy.get(this.locators.selectAgencyType).select("Repossession Agency");
    cy.wait(2000);
    cy.get(this.locators.selectAgencySubType).select("Yard");
    cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
    cy.get(this.locators.clickongenerateENcollectcode).click();
    cy.wait(2000);
    //Address Details
    cy.get(this.locators.clickonaddressdetails).click();
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
    cy.wait(2000);
    cy.get(this.locators.mobilenumber).type("0769875429");
    cy.wait(2000);
    cy.get(this.locators.areacode).type("1234");
    cy.wait(2000);
    cy.get(this.locators.landlinenumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.selectstate).select("All");
    cy.wait(2000);
    cy.get(this.locators.fillemailid).type("sachin10@yopmail.com");
    cy.wait(2000);
    cy.get(this.locators.selectcity).select("All");
    cy.wait(2000);
    cy.get(this.locators.postalcode).type("123456");
    cy.wait(2000);
    //Banking details
    cy.get(this.locators.clickonbankingdetails).click();
    cy.wait(2000);
    cy.get(this.locators.accountholdername).type("AJAY KUMAR");
    cy.wait(2000);
    cy.get(this.locators.bankaccountnumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.bankname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.bankbranchname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
    cy.wait(2000);
    //////////////////////////////////////Documentation_Details/////////////////////////////////////
  //  const filePath = 'Aadhar.png';
  const filePath1 = 'Aadhar.png';
  // Expand the documentation details section
  cy.get(':nth-child(4) > .nav-link > span').click();
  cy.wait(2000);
  //lick on various elements to interact with the UI
  cy.get('#waive--0').click();
  cy.wait(1000);
  cy.get('#waive--3').click();
  cy.wait(1000);
  cy.get('#waive--4').click();
  cy.wait(1000);
  cy.get('#waive--5').click();
  cy.wait(1000);
  cy.get('#waive--6').click();
  cy.wait(1000);
  cy.get('#agencyaddFileBtn-0').click();
  cy.wait(1000);
  cy.get('input[type="file"]').eq(0)
  .attachFile(filePath, { force: true });
  cy.wait(1000);
  cy.get('#agencydocTypeSelect-1').select('Pan Card');
  cy.get('#agencyaddFileBtn-1').click();
  cy.wait(1000);
  cy.get('input[type="file"]').eq(1)
  .attachFile(filePath1, { force: true });
  cy.wait(1000);
  cy.get('input[type="file"]').eq(1)
  .attachFile(filePath1, { force: true });
  cy.wait(1000);
  cy.get('#agencydocTypeSelect-2').select('Aadhar Card');
  cy.get('#agencyaddFileBtn-2').click();
  cy.wait(1000);
  cy.get('input[type="file"]').eq(2)
  .attachFile(filePath1, { force: true });
  cy.wait(1000);
  cy.get('input[type="file"]').eq(3)
  .attachFile(filePath1, { force: true });
  cy.wait(1000);
  cy.get('input[type="file"]').eq(4)
  .attachFile(filePath1, { force: true });
  cy.wait(1000);
  cy.get('input[type="file"]').eq(5)
  .attachFile(filePath1, { force: true });
  cy.wait(1000);
  //////-----------------
    cy.get(this.locators.scopeofword).click();
    cy.wait(2000);
    cy.get(this.locators.productgroup).select(["Consumer Loan", "CreditCard"], { force: true });
    cy.wait(2000);
    cy.get(this.locators.product).select(["Unsecured", "CreditCard"], { force: true });
    cy.wait(2000);
    cy.get(this.locators.subproduct).select(["Personal Loan", "CreditCard"], { force: true });
    cy.wait(2000);
    //Placeofwork
    cy.get(this.locators.placeofwork).click();
    cy.wait(2000);
    cy.get(this.locators.selectpg).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.selectp).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.selectsubp).select("Personal Loan");
    cy.wait(2000);
    cy.get(this.locators.selectbucket).select("11");
    cy.wait(2000);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectregion).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectState).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectCity).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectmanager).select("Ajit");
    cy.wait(2000);
    cy.get(this.locators.clickonaddbutton).click();
    cy.wait(2000);
    cy.get(this.locators.selectpg2).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.selectp2).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.selectsubp2).select("Personal Loan");
    cy.wait(2000);
    cy.get(this.locators.selectbucket2).select("5");
    cy.wait(2000);
    cy.get(this.locators.selectcountry2).select("Kenya");
    cy.wait(2000);
    cy.get(this.locators.selectregion2).select("North");
    cy.wait(2000);
    cy.get(this.locators.SelectState2).select("Nairobi");
    cy.wait(2000);
    cy.get(this.locators.SelectCity2).select("Nairobi");
    cy.wait(2000);
    cy.get(this.locators.selectmanager2).select("Danny");
    cy.wait(2000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).click();
    cy.wait(2000);
    cy.get(this.locators.previousmonth).click();
    cy.wait(2000);
    cy.get(':nth-child(1) > :nth-child(7) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(3) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.Contactexpiredate).click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(8) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.submitagency).click();
    cy.wait(2000);

  }

  CreateAgency047() {
    const filePath = 'Aadhar-image.png';
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click().click();
    cy.wait(2000);
    cy.get("a[title='Add Agency']").click();
    cy.wait(2000);
    cy.get(this.locators.fillAgencyName).type("ABCDEF");
    cy.wait(2000);
    cy.get(this.locators.selectRecommendingOfficer).select("danny ng");
    cy.wait(2000);
    cy.get(this.locators.selectAgencyType).select("Repossession Agency");
    cy.wait(2000);
    cy.get(this.locators.selectAgencySubType).select("Yard");
    cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
    cy.get(this.locators.clickongenerateENcollectcode).click();
    cy.wait(2000);
    //Address Details
    cy.get(this.locators.clickonaddressdetails).click();
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
    cy.wait(2000);
    cy.get(this.locators.mobilenumber).type("0769875429");
    cy.wait(2000);
    cy.get(this.locators.areacode).type("1234");
    cy.wait(2000);
    cy.get(this.locators.landlinenumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.selectstate).select("All");
    cy.wait(2000);
    cy.get(this.locators.fillemailid).type("sachin10@yopmail.com");
    cy.wait(2000);
    cy.get(this.locators.selectcity).select("All");
    cy.wait(2000);
    cy.get(this.locators.postalcode).type("123456");
    cy.wait(2000);
    //Banking details
    cy.get(this.locators.clickonbankingdetails).click();
    cy.wait(2000);
    cy.get(this.locators.accountholdername).type("AJAY KUMAR");
    cy.wait(2000);
    cy.get(this.locators.bankaccountnumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.bankname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.bankbranchname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
    cy.wait(2000);
     //////////////////////////////////////Documentation_Details/////////////////////////////////////
  //  const filePath = 'Aadhar.png';
   const filePath1 = 'Aadhar.png';
   // Expand the documentation details section
   cy.get(':nth-child(4) > .nav-link > span').click();
   cy.wait(2000);
   //lick on various elements to interact with the UI
   cy.get('#waive--0').click();
   cy.wait(1000);
   cy.get('#waive--3').click();
   cy.wait(1000);
   cy.get('#waive--4').click();
   cy.wait(1000);
   cy.get('#waive--5').click();
   cy.wait(1000);
   cy.get('#waive--6').click();
   cy.wait(1000);
   cy.get('#agencyaddFileBtn-0').click();
   cy.wait(1000);
   cy.get('input[type="file"]').eq(0)
   .attachFile(filePath, { force: true });
   cy.wait(1000);
   cy.get('#agencydocTypeSelect-1').select('Pan Card');
   cy.get('#agencyaddFileBtn-1').click();
   cy.wait(1000);
   cy.get('input[type="file"]').eq(1)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('input[type="file"]').eq(1)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('#agencydocTypeSelect-2').select('Aadhar Card');
   cy.get('#agencyaddFileBtn-2').click();
   cy.wait(1000);
   cy.get('input[type="file"]').eq(2)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('input[type="file"]').eq(3)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('input[type="file"]').eq(4)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('input[type="file"]').eq(5)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   //////-----------------
    cy.get(this.locators.scopeofword).click();
    cy.wait(2000);
    cy.get(this.locators.productgroup).select(["Consumer Loan", "CreditCard"], { force: true });
    cy.wait(2000);
    cy.get(this.locators.product).select(["Unsecured", "CreditCard"], { force: true });
    cy.wait(2000);
    cy.get(this.locators.subproduct).select(["Personal Loan", "CreditCard"], { force: true });
    cy.wait(2000);
    //Placeofwork
    cy.get(this.locators.placeofwork).click();
    cy.wait(2000);
    cy.get(this.locators.selectpg).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.selectp).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.selectsubp).select("Personal Loan");
    cy.wait(2000);
    cy.get(this.locators.selectbucket).select("11");
    cy.wait(2000);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectregion).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectState).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectCity).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectmanager).select("Ajit");
    cy.wait(2000);
    cy.get(this.locators.clickonaddbutton).click();
    cy.wait(2000);
    cy.get(this.locators.selectpg2).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.selectp2).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.selectsubp2).select("Personal Loan");
    cy.wait(2000);
    cy.get(this.locators.selectbucket2).select("5");
    cy.wait(2000);
    cy.get(this.locators.selectcountry2).select("Kenya");
    cy.wait(2000);
    cy.get(this.locators.selectregion2).select("North");
    cy.wait(2000);
    cy.get(this.locators.SelectState2).select("Nairobi");
    cy.wait(2000);
    cy.get(this.locators.SelectCity2).select("Nairobi");
    cy.wait(2000);
    cy.get(this.locators.selectmanager2).select("Danny");
    cy.wait(2000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).click();
    cy.wait(2000);
    cy.get(this.locators.previousmonth).click();
    cy.wait(2000);
    cy.get(':nth-child(1) > :nth-child(7) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(3) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.Contactexpiredate).click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(8) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.addremark).type("This is ok");
    cy.wait(2000);
    cy.get(this.locators.submitagency).click();
    cy.wait(2000);


  }

  CreateAgency049() {
    const filePath = 'Aadhar-image.png';
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click().click();
    cy.wait(2000);
    cy.get("a[title='Add Agency']").click();
    cy.wait(2000);
    cy.get(this.locators.fillAgencyName).type("ABCDEF");
    cy.wait(2000);
    cy.get(this.locators.selectRecommendingOfficer).select("danny ng");
    cy.wait(2000);
    cy.get(this.locators.selectAgencyType).select("Repossession Agency");
    cy.wait(2000);
    cy.get(this.locators.selectAgencySubType).select("Yard");
    cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
    cy.get(this.locators.clickongenerateENcollectcode).click();
    cy.wait(2000);
    //Address Details
    cy.get(this.locators.clickonaddressdetails).click();
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
    cy.wait(2000);
    cy.get(this.locators.mobilenumber).type("0769875429");
    cy.wait(2000);
    cy.get(this.locators.areacode).type("1234");
    cy.wait(2000);
    cy.get(this.locators.landlinenumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.selectstate).select("All");
    cy.wait(2000);
    cy.get(this.locators.fillemailid).type("sachin10@yopmail.com");
    cy.wait(2000);
    cy.get(this.locators.selectcity).select("All");
    cy.wait(2000);
    cy.get(this.locators.postalcode).type("123456");
    cy.wait(2000);
    //Banking details
    cy.get(this.locators.clickonbankingdetails).click();
    cy.wait(2000);
    cy.get(this.locators.accountholdername).type("AJAY KUMAR");
    cy.wait(2000);
    cy.get(this.locators.bankaccountnumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.bankname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.bankbranchname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
    cy.wait(2000);
     //////////////////////////////////////Documentation_Details/////////////////////////////////////
  //  const filePath = 'Aadhar.png';
   const filePath1 = 'Aadhar.png';
   // Expand the documentation details section
   cy.get(':nth-child(4) > .nav-link > span').click();
   cy.wait(2000);
   //lick on various elements to interact with the UI
   cy.get('#waive--0').click();
   cy.wait(1000);
   cy.get('#waive--3').click();
   cy.wait(1000);
   cy.get('#waive--4').click();
   cy.wait(1000);
   cy.get('#waive--5').click();
   cy.wait(1000);
   cy.get('#waive--6').click();
   cy.wait(1000);
   cy.get('#agencyaddFileBtn-0').click();
   cy.wait(1000);
   cy.get('input[type="file"]').eq(0)
   .attachFile(filePath, { force: true });
   cy.wait(1000);
   cy.get('#agencydocTypeSelect-1').select('Pan Card');
   cy.get('#agencyaddFileBtn-1').click();
   cy.wait(1000);
   cy.get('input[type="file"]').eq(1)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('input[type="file"]').eq(1)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('#agencydocTypeSelect-2').select('Aadhar Card');
   cy.get('#agencyaddFileBtn-2').click();
   cy.wait(1000);
   cy.get('input[type="file"]').eq(2)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('input[type="file"]').eq(3)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('input[type="file"]').eq(4)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('input[type="file"]').eq(5)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   //////-----------------

    cy.get(this.locators.scopeofword).click();
    cy.wait(2000);
    cy.get(this.locators.productgroup).select(["Consumer Loan", "CreditCard"], { force: true });
    cy.wait(2000);
    cy.get(this.locators.product).select(["Unsecured", "CreditCard"], { force: true });
    cy.wait(2000);
    cy.get(this.locators.subproduct).select(["Personal Loan", "CreditCard"], { force: true });
    cy.wait(2000);
    //Placeofwork
    cy.get(this.locators.placeofwork).click();
    cy.wait(2000);
    cy.get(this.locators.selectpg).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.selectp).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.selectsubp).select("Personal Loan");
    cy.wait(2000);
    cy.get(this.locators.selectbucket).select("11");
    cy.wait(2000);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectregion).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectState).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectCity).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectmanager).select("Ajit");
    cy.wait(2000);
    cy.get(this.locators.clickonaddbutton).click();
    cy.wait(2000);
    cy.get(this.locators.selectpg2).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.selectp2).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.selectsubp2).select("Personal Loan");
    cy.wait(2000);
    cy.get(this.locators.selectbucket2).select("5");
    cy.wait(2000);
    cy.get(this.locators.selectcountry2).select("Kenya");
    cy.wait(2000);
    cy.get(this.locators.selectregion2).select("North");
    cy.wait(2000);
    cy.get(this.locators.SelectState2).select("Nairobi");
    cy.wait(2000);
    cy.get(this.locators.SelectCity2).select("Nairobi");
    cy.wait(2000);
    cy.get(this.locators.selectmanager2).select("Danny");
    cy.wait(2000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).click();
    cy.wait(2000);
    cy.get(this.locators.previousmonth).click();
    cy.wait(2000);
    cy.get(':nth-child(1) > :nth-child(7) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(3) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.Contactexpiredate).click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(8) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.addremark).type("This is ok");
    cy.wait(2000);
    cy.get(this.locators.saveagency).click();
    cy.wait(2000);


  }

  CreateAgency051() {
    const filePath = 'Aadhar-image.png';
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click().click();
    cy.wait(2000);
    cy.get("a[title='Add Agency']").click();
    cy.wait(2000);
    cy.get(this.locators.fillAgencyName).type("ABCDEF");
    cy.wait(2000);
    cy.get(this.locators.selectRecommendingOfficer).select("danny ng");
    cy.wait(2000);
    cy.get(this.locators.selectAgencyType).select("Repossession Agency");
    cy.wait(2000);
    cy.get(this.locators.selectAgencySubType).select("Yard");
    cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
    cy.get(this.locators.clickongenerateENcollectcode).click();
    cy.wait(2000);
    //Address Details
    cy.get(this.locators.clickonaddressdetails).click();
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
    cy.wait(2000);
    cy.get(this.locators.mobilenumber).type("0769875429");
    cy.wait(2000);
    cy.get(this.locators.areacode).type("1234");
    cy.wait(2000);
    cy.get(this.locators.landlinenumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.selectstate).select("All");
    cy.wait(2000);
    cy.get(this.locators.fillemailid).type("sachin10@yopmail.com");
    cy.wait(2000);
    cy.get(this.locators.selectcity).select("All");
    cy.wait(2000);
    cy.get(this.locators.postalcode).type("123456");
    cy.wait(2000);
    //Banking details
    cy.get(this.locators.clickonbankingdetails).click();
    cy.wait(2000);
    cy.get(this.locators.accountholdername).type("AJAY KUMAR");
    cy.wait(2000);
    cy.get(this.locators.bankaccountnumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.bankname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.bankbranchname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
    cy.wait(2000);
     //////////////////////////////////////Documentation_Details/////////////////////////////////////
  //  const filePath = 'Aadhar.png';
   const filePath1 = 'Aadhar.png';
   // Expand the documentation details section
   cy.get(':nth-child(4) > .nav-link > span').click();
   cy.wait(2000);
   //lick on various elements to interact with the UI
   cy.get('#waive--0').click();
   cy.wait(1000);
   cy.get('#waive--3').click();
   cy.wait(1000);
   cy.get('#waive--4').click();
   cy.wait(1000);
   cy.get('#waive--5').click();
   cy.wait(1000);
   cy.get('#waive--6').click();
   cy.wait(1000);
   cy.get('#agencyaddFileBtn-0').click();
   cy.wait(1000);
   cy.get('input[type="file"]').eq(0)
   .attachFile(filePath, { force: true });
   cy.wait(1000);
   cy.get('#agencydocTypeSelect-1').select('Pan Card');
   cy.get('#agencyaddFileBtn-1').click();
   cy.wait(1000);
   cy.get('input[type="file"]').eq(1)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('input[type="file"]').eq(1)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('#agencydocTypeSelect-2').select('Aadhar Card');
   cy.get('#agencyaddFileBtn-2').click();
   cy.wait(1000);
   cy.get('input[type="file"]').eq(2)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('input[type="file"]').eq(3)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('input[type="file"]').eq(4)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   cy.get('input[type="file"]').eq(5)
   .attachFile(filePath1, { force: true });
   cy.wait(1000);
   //////-----------------

    cy.get(this.locators.scopeofword).click();
    cy.wait(2000);
    cy.get(this.locators.productgroup).select(["Consumer Loan", "CreditCard"], { force: true });
    cy.wait(2000);
    cy.get(this.locators.product).select(["Unsecured", "CreditCard"], { force: true });
    cy.wait(2000);
    cy.get(this.locators.subproduct).select(["Personal Loan", "CreditCard"], { force: true });
    cy.wait(2000);
    //Placeofwork
    cy.get(this.locators.placeofwork).click();
    cy.wait(2000);
    cy.get(this.locators.selectpg).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.selectp).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.selectsubp).select("Personal Loan");
    cy.wait(2000);
    cy.get(this.locators.selectbucket).select("11");
    cy.wait(2000);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectregion).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectState).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectCity).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectmanager).select("Ajit");
    cy.wait(2000);
    cy.get(this.locators.clickonaddbutton).click();
    cy.wait(2000);
    cy.get(this.locators.selectpg2).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.selectp2).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.selectsubp2).select("Personal Loan");
    cy.wait(2000);
    cy.get(this.locators.selectbucket2).select("5");
    cy.wait(2000);
    cy.get(this.locators.selectcountry2).select("Kenya");
    cy.wait(2000);
    cy.get(this.locators.selectregion2).select("North");
    cy.wait(2000);
    cy.get(this.locators.SelectState2).select("Nairobi");
    cy.wait(2000);
    cy.get(this.locators.SelectCity2).select("Nairobi");
    cy.wait(2000);
    cy.get(this.locators.selectmanager2).select("Danny");
    cy.wait(2000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).click();
    cy.wait(2000);
    cy.get(this.locators.previousmonth).click();
    cy.wait(2000);
    cy.get(':nth-child(1) > :nth-child(7) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(3) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.Contactexpiredate).click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(8) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.addremark).type("This is ok");
    cy.wait(2000);
    cy.get(this.locators.cancel).click();
    cy.wait(2000);

  }

  CreateAgency052() {
    const filePath = 'Aadhar-image.png';
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click().click();
    cy.wait(2000);
    cy.get("a[title='Add Agency']").click();
    cy.wait(2000);
    cy.get(this.locators.fillAgencyName).type("ABCDEF");
    cy.wait(2000);
    cy.get(this.locators.selectRecommendingOfficer).select("danny ng");
    cy.wait(2000);
    cy.get(this.locators.selectAgencyType).select("Repossession Agency");
    cy.wait(2000);
    cy.get(this.locators.selectAgencySubType).select("Yard");
    cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDE1234F");
    cy.wait(2000);
    cy.get(this.locators.fillTINNumber).type("123456");
    cy.wait(2000);
    cy.get(this.locators.clickongenerateENcollectcode).click();
    cy.wait(2000);
    //Address Details
    cy.get(this.locators.clickonaddressdetails).click();
    cy.wait(2000);
    cy.get(this.locators.primaryownerfirstname).type("Sachin");
    cy.wait(2000);
    cy.get(this.locators.primaryownerlastname).type("Tendulkar");
    cy.wait(2000);
    cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
    cy.wait(2000);
    cy.get(this.locators.mobilenumber).type("0769875429");
    cy.wait(2000);
    cy.get(this.locators.areacode).type("1234");
    cy.wait(2000);
    cy.get(this.locators.landlinenumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.selectstate).select("All");
    cy.wait(2000);
    cy.get(this.locators.fillemailid).type("sachin10@yopmail.com");
    cy.wait(2000);
    cy.get(this.locators.selectcity).select("All");
    cy.wait(2000);
    cy.get(this.locators.postalcode).type("123456");
    cy.wait(2000);
    //Banking details
    cy.get(this.locators.clickonbankingdetails).click();
    cy.wait(2000);
    cy.get(this.locators.accountholdername).type("AJAY KUMAR");
    cy.wait(2000);
    cy.get(this.locators.bankaccountnumber).type("1234567890");
    cy.wait(2000);
    cy.get(this.locators.bankname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.bankbranchname).select("ADCC BANK");
    cy.wait(2000);
    cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
    cy.wait(2000);
    //////////////////////////////////////Documentation_Details/////////////////////////////////////
  //  const filePath = 'Aadhar.png';
  const filePath1 = 'Aadhar.png';
  // Expand the documentation details section
  cy.get(':nth-child(4) > .nav-link > span').click();
  cy.wait(2000);
  //lick on various elements to interact with the UI
  cy.get('#waive--0').click();
  cy.wait(1000);
  cy.get('#waive--3').click();
  cy.wait(1000);
  cy.get('#waive--4').click();
  cy.wait(1000);
  cy.get('#waive--5').click();
  cy.wait(1000);
  cy.get('#waive--6').click();
  cy.wait(1000);
  cy.get('#agencyaddFileBtn-0').click();
  cy.wait(1000);
  cy.get('input[type="file"]').eq(0)
  .attachFile(filePath, { force: true });
  cy.wait(1000);
  cy.get('#agencydocTypeSelect-1').select('Pan Card');
  cy.get('#agencyaddFileBtn-1').click();
  cy.wait(1000);
  cy.get('input[type="file"]').eq(1)
  .attachFile(filePath1, { force: true });
  cy.wait(1000);
  cy.get('input[type="file"]').eq(1)
  .attachFile(filePath1, { force: true });
  cy.wait(1000);
  cy.get('#agencydocTypeSelect-2').select('Aadhar Card');
  cy.get('#agencyaddFileBtn-2').click();
  cy.wait(1000);
  cy.get('input[type="file"]').eq(2)
  .attachFile(filePath1, { force: true });
  cy.wait(1000);
  cy.get('input[type="file"]').eq(3)
  .attachFile(filePath1, { force: true });
  cy.wait(1000);
  cy.get('input[type="file"]').eq(4)
  .attachFile(filePath1, { force: true });
  cy.wait(1000);
  cy.get('input[type="file"]').eq(5)
  .attachFile(filePath1, { force: true });
  cy.wait(1000);
  //////-----------------

    cy.get(this.locators.scopeofword).click();
    cy.wait(2000);
    cy.get(this.locators.productgroup).select(["Consumer Loan", "CreditCard"], { force: true });
    cy.wait(2000);
    cy.get(this.locators.product).select(["Unsecured", "CreditCard"], { force: true });
    cy.wait(2000);
    cy.get(this.locators.subproduct).select(["Personal Loan", "CreditCard"], { force: true });
    cy.wait(2000);
    //Placeofwork
    cy.get(this.locators.placeofwork).click();
    cy.wait(2000);
    cy.get(this.locators.selectpg).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.selectp).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.selectsubp).select("Personal Loan");
    cy.wait(2000);
    cy.get(this.locators.selectbucket).select("11");
    cy.wait(2000);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectregion).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectState).select("All");
    cy.wait(2000);
    cy.get(this.locators.SelectCity).select("All");
    cy.wait(2000);
    cy.get(this.locators.selectmanager).select("Ajit");
    cy.wait(2000);
    cy.get(this.locators.clickonaddbutton).click();
    cy.wait(2000);
    cy.get(this.locators.selectpg2).select("Consumer Loan");
    cy.wait(2000);
    cy.get(this.locators.selectp2).select("Unsecured");
    cy.wait(2000);
    cy.get(this.locators.selectsubp2).select("Personal Loan");
    cy.wait(2000);
    cy.get(this.locators.selectbucket2).select("5");
    cy.wait(2000);
    cy.get(this.locators.selectcountry2).select("Kenya");
    cy.wait(2000);
    cy.get(this.locators.selectregion2).select("North");
    cy.wait(2000);
    cy.get(this.locators.SelectState2).select("Nairobi");
    cy.wait(2000);
    cy.get(this.locators.SelectCity2).select("Nairobi");
    cy.wait(2000);
    cy.get(this.locators.selectmanager2).select("Danny");
    cy.wait(2000);
    cy.get(this.locators.clickonARD).click();
    cy.wait(2000);
    cy.get(this.locators.firstagreementdate).click();
    cy.wait(2000);
    cy.get(this.locators.previousmonth).click();
    cy.wait(2000);
    cy.get(':nth-child(1) > :nth-child(7) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.lastrenewaldate).click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(3) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.Contactexpiredate).click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(8) > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.addremark).type("This is ok");
    cy.wait(2000);
    cy.get(this.locators.reset).click();
    cy.wait(2000);

  }

  CreateAgency129() {
    const filePath = 'Aadhar-image.png';
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click().click();
    cy.wait(2000);
    cy.get("a[title='Add Agency']").click();
    cy.wait(2000);
    cy.get(this.locators.fillAgencyName).type(" ");
    cy.wait(2000);
    cy.get(this.locators.selectRecommendingOfficer).select("danny ng");
    cy.get(this.locators.agencynameerror).then(($el) => {
      const text = $el.text();
      cy.log(text);
    })
    cy.get(this.locators.fillAgencyName).type("ab");
    cy.wait(2000);
    cy.get(this.locators.selectRecommendingOfficer).select("danny ng");
    cy.get(this.locators.agencynameerror).then(($el) => {
      const text = $el.text();
      cy.log(text);
    })

  }

  CreateAgency130() {
    const filePath = 'Aadhar-image.png';
    cy.get(this.locators.clickonusermanagement).click();
    cy.wait(2000);
    cy.get(this.locators.clickonAER).click().click();
    cy.wait(2000);
    cy.get("a[title='Add Agency']").click();
    cy.wait(2000);
    cy.get(this.locators.fillAgencyName).type("ABCDEF");
    cy.wait(2000);
    cy.get(this.locators.selectRecommendingOfficer).select("danny ng");
    cy.wait(2000);
    cy.get(this.locators.selectAgencyType).select("Repossession Agency");
    cy.wait(2000);
    cy.get(this.locators.selectAgencySubType).select("Yard");
    cy.wait(2000);
    cy.get(this.locators.fillpancard).type("ABCDEfghijk");
    cy.wait(2000);
    cy.get(this.locators.agencynameerror).then(($el) => {
      const text = $el.text();
      cy.log(text);
    })
    cy.get(this.locators.fillpancard).type("1");
    cy.wait(2000);
    cy.get(this.locators.agencynameerror).then(($el) => {
      const text = $el.text();
      cy.log(text);
    })

  }

  SearchAgent79() {
  cy.get(this.locators.searchagent).click();
  cy.wait(2000);
  cy.get(this.locators.agentname).click();
  cy.wait(2000);
  cy.get(this.locators.empanelmentapprovalstatus).select("Approved");
  cy.wait(2000);
  cy.get(this.locators.searchbtn).click();
  cy.wait(1000);
  cy.scrollTo('bottom');
  cy.wait(2000);
  cy.get(this.locators.actioncheckbox).check();
  cy.scrollTo('bottom');
  cy.wait(2000);
  cy.get(this.locators.editbtn).click();
  cy.wait(2000);
  cy.scrollTo('top');
  cy.wait(2000);
  cy.get(this.locators.agencysupervisoremailid).type("abc@yopmail.com");
  cy.scrollTo('bottom');
  cy.wait(2000);
  cy.get(this.locators.submitagentprofile).click();
  cy.wait(2000);
  cy.get(this.locators.empanelmentapprovalstatus).select("Approved");
  cy.wait(2000);
  cy.get(this.locators.searchbtn).click();
  cy.wait(1000);
  cy.scrollTo('bottom');
  cy.wait(2000);
  cy.get(this.locators.actioncheckbox).check();
  cy.scrollTo('bottom');
  cy.wait(2000);
  cy.get(this.locators.disableagent).click();
  cy.wait(2000);
  cy.get(this.locators.clickoncancelbtn).click();


}


SearchAgent80() {
  cy.get(this.locators.searchagent).click();
  cy.wait(2000);
  cy.get(this.locators.agentname).click();
  cy.wait(2000);
  cy.get(this.locators.empanelmentapprovalstatus).select("Disabled");
  cy.wait(2000);
  cy.get(this.locators.searchbtn).click();
  cy.wait(1000);
  cy.get(this.locators.actioncheckbox).check();
  cy.scrollTo('bottom');
  cy.wait(2000);
  cy.get(this.locators.enableagentbtn).click();
  cy.wait(2000);
  cy.get(this.locators.clickoncancelbtn).click();
  


  
  
 }



 SearchAgent81() {
  cy.get(this.locators.searchagent).click();
  cy.wait(2000);
  cy.get(this.locators.agentname).click();
  cy.wait(2000);
  cy.get(this.locators.empanelmentapprovalstatus).select("Pending Approval");
  cy.wait(2000);
  cy.get(this.locators.searchbtn).click();
  cy.wait(1000);
  cy.get(this.locators.actioncheckbox).check();
  cy.scrollTo('bottom');
  cy.wait(2000);
  cy.get(this.locators.approvebtn).click();
  cy.wait(2000);
  cy.get(this.locators.rejectbtn).click();
  cy.wait(2000);
  cy.get(this.locators.clickoncancelbtn).click();
 }

 SearchAgent82() {
  cy.wait(2000);
  cy.get(this.locators.searchagent).click();
  cy.wait(2000);
  cy.get(this.locators.agentname).click();
  cy.wait(2000);
  cy.get(this.locators.empanelmentapprovalstatus).select("Rejected");
  cy.wait(2000);
  cy.get(this.locators.searchbtn).click();
  cy.wait(2000);
  cy.scrollTo('bottom');
  cy.wait(2000);
  cy.get(this.locators.actioncheckbox).check();
  cy.wait(2000);
  cy.get(this.locators.editbtn).click();
  cy.wait(2000);
  cy.get(this.locators.dialerid).type("12345678");
  cy.wait(1000);
  cy.scrollTo('bottom');
  cy.get(this.locators.canclebttonclick).click();
  cy.wait(2000);
  cy.get(this.locators.clickonusermanagement).click();
  cy.wait(2000);
  cy.get(this.locators.searchagent).click();
  cy.wait(2000);
  cy.get(this.locators.agentname).click();
  cy.wait(2000);
  cy.get(this.locators.empanelmentapprovalstatus).select("Rejected");
  cy.wait(2000);
  cy.get(this.locators.searchbtn).click();
  cy.wait(2000);
  cy.scrollTo('bottom');
  cy.wait(2000);
  cy.get(this.locators.actioncheckbox).check();
  cy.wait(2000);
  cy.get(this.locators.canclereject).click();



  
 
 }

 SearchAgent83() {
  cy.wait(2000);
  cy.get(this.locators.searchagent).click();
  cy.wait(2000);
  cy.get(this.locators.agentname).click();
  cy.wait(2000);
  cy.get(this.locators.empanelmentapprovalstatus).select("Saved As Draft");
  cy.wait(2000);
  cy.get(this.locators.searchbtn).click();
  cy.wait(2000);
  cy.scrollTo('bottom');
  cy.wait(2000);
  cy.get(this.locators.actioncheckbox).check();
  cy.wait(2000);
  cy.get(this.locators.editbtn).click();
  cy.wait(2000);
  cy.scrollTo('top');
  cy.get(this.locators.dratrainingdate).type("20-10-2023");
  cy.wait(1000);
  cy.scrollTo('bottom');
  cy.get(this.locators.canclebttonclick).click();
  cy.wait(2000);
  cy.get(this.locators.clickonusermanagement).click();
  cy.wait(2000);
  cy.get(this.locators.searchagent).click();
  cy.wait(2000);
  cy.get(this.locators.agentname).click();
  cy.wait(2000);
  cy.get(this.locators.empanelmentapprovalstatus).select("Rejected");
  cy.wait(2000);
  cy.get(this.locators.searchbtn).click();
  cy.wait(2000);
  cy.scrollTo('bottom');
  cy.wait(2000);
  cy.get(this.locators.actioncheckbox).check();
  cy.wait(2000);
  cy.get(this.locators.canclereject).click();
 
 
 }

 SearchAgent182(){
  cy.wait(2000);
  cy.get(this.locators.searchagent).click();
  cy.wait(2000);
  cy.get(this.locators.empanelmentapprovalstatus).select("Approved");
  cy.wait(2000);
  cy.get(this.locators.searchbtn).click();
  cy.wait(2000);
  cy.scrollTo('bottom');
  cy.wait(2000);
  cy.get(this.locators.nextbtn).click();
  cy.wait(2000);
  cy.get(this.locators.previouspagebtn).click();
  cy.wait(2000);
  cy.scrollTo('top');
  cy.wait(2000);
  cy.get(this.locators.empanelmentapprovalstatus).select("Rejected");
  cy.wait(2000);
  
 }






  SearchAgent181() {
    cy.wait(2000);
    cy.get(this.locators.ClickOnAgentEmpanelment).click();
    cy.wait(1000);
    cy.get(this.locators.searchagent).click();
    cy.wait(2000);
    // cy.get(this.locators.agentname).click();
    // cy.wait(2000);
    // cy.get(this.locators.agentname).type("Micra Loop");
    // cy.wait(2000);
    cy.get(this.locators.empanelmentapprovalstatus).select("Rejected");
    cy.wait(2000);
    cy.get(this.locators.searchbtn).click();
    cy.wait(1000);
    cy.get('tbody > :nth-child(1) > :nth-child(9) > .form-control-group > .form-check-group > label > input').click();
    cy.wait(2000);
    cy.get('#btn-edit').contains('Edit');
    cy.wait(2000);
    cy.get('#btn-cancel').contains('Cancel');
   }


  /* SearchAgent182(){
    cy.wait(4000);
    cy.get(this.locators.)


   }*/


  

   SearchAgent183() {
    cy.wait(2000);
    cy.get(this.locators.ClickOnAgentEmpanelment).click();
    cy.wait(1000);
    cy.get(this.locators.searchagent).click();
    cy.wait(2000);
    cy.get(this.locators.agentname).click();
    cy.wait(2000);
    cy.get(this.locators.searchbtn).click();
    cy.get('[role="alert"]').should("contain.text", "Please enter the mandatory field");


   }

   SearchAgent184() {
    cy.get(this.locators.ClickOnAgentEmpanelment).click();
    cy.wait(1000);
    cy.get(this.locators.searchagent).click();
    cy.wait(2000);
    cy.get(this.locators.agentname).click();
    cy.wait(2000);
    cy.get(this.locators.agentname).type("a");
    cy.wait(2000);
    cy.get(this.locators.searchbtn).click();
    cy.get('[class="errorFontSize ng-star-inserted"]').should("contain.text", "Agent name must be at least 2 characters long.")

   }

   SearchAgent185() {
    cy.get(this.locators.ClickOnAgentEmpanelment).click();
    cy.wait(1000);
    cy.get(this.locators.searchagent).click();
    cy.wait(2000);
    cy.get(this.locators.agencyname).type("12345");
    cy.wait(2000);
 cy.get('[class="ng-star-inserted"]').should("contain.text", "Please enter characters only.");

    cy.get(this.locators.agencyname).clear();
    cy.get(this.locators.agencyname).type("abcdefg");

   }

   SearchAgent186() {
    cy.get(this.locators.ClickOnAgentEmpanelment).click();
    cy.wait(1000);
    cy.get(this.locators.searchagent).click();
    cy.wait(2000);
    cy.get(this.locators.agentphonenumber).type("987654321");
    cy.wait(2000);
   cy.get('[class="ng-star-inserted"]').should("contain.text", "Enter valid 10 Agent Phone Number");

   }

/////////////////////////////////////////////////////////////////////////////////



   EnableDisableStaff550(){
    cy.wait(2000);
    cy.get(this.locators.ClcikStaffEnplm).click();
    cy.get(this.locators.clickonsearchstaff).click().should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.empanelmentapprovalstatus).select("Disabled").should("be.visible");
   }

   EnableDisableStaff551(){
    cy.wait(2000);
    cy.get(this.locators.ClcikStaffEnplm).click();
    cy.get(this.locators.clickonsearchstaff).click().should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.empanelmentapprovalstatus).select("Disabled").should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.search).click().should("be.visible");
   }

   EnableDisableStaff552(){
    cy.wait(2000);
    cy.get(this.locators.ClcikStaffEnplm).click();
    cy.wait(2000);
    cy.get(this.locators.clickonsearchstaff).click();
    cy.wait(2000);
    cy.get(this.locators.empanelmentapprovalstatus).select("Disabled").should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.search).click().should("be.visible");
    cy.wait(2000);
    //cy.scrollTo('bottom');
    cy.get('body > app-root:nth-child(1) > app-menu-layout:nth-child(2) > main:nth-child(1) > section:nth-child(3) > div:nth-child(2) > app-search:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(9) > div:nth-child(1) > div:nth-child(1) > label:nth-child(1) > input:nth-child(1)').click().should("be.visible");
   }

   EnableDisableStaff553(){
    cy.wait(2000);
    cy.get(this.locators.ClcikStaffEnplm).click();
    cy.get(this.locators.clickonsearchstaff).click();
    cy.wait(2000);
    cy.get(this.locators.empanelmentapprovalstatus).select("Disabled");
    cy.wait(2000);
    cy.get(this.locators.search).click().should("be.visible");
    cy.wait(2000);
    //cy.scrollTo('bottom');
    cy.get('body > app-root:nth-child(1) > app-menu-layout:nth-child(2) > main:nth-child(1) > section:nth-child(3) > div:nth-child(2) > app-search:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(9) > div:nth-child(1) > div:nth-child(1) > label:nth-child(1) > input:nth-child(1)').click().should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.enablestaff).click().should("be.visible");
   }

   EnableDisableAgency554(){
    cy.wait(2000);
    cy.get(this.locators.ClcikAgncyEnplm).click();
    cy.get(this.locators.clickonsearchagaencyf).click();
    cy.wait(2000);
    cy.get(this.locators.searchagencyempanelmentapprovalstatus).select("Disabled");
   }

   EnableDisableAgency555(){
    cy.wait(2000);
    cy.get(this.locators.ClcikAgncyEnplm).click();
    cy.get(this.locators.clickonsearchagaencyf).click();
    cy.wait(2000);
    cy.get(this.locators.searchagencyempanelmentapprovalstatus).select("Disabled");
    cy.wait(2000);
    cy.get(this.locators.searchagency_submitbtn).click();
   }

   EnableDisableAgency556(){
    cy.wait(2000);
    cy.get(this.locators.ClcikAgncyEnplm).click();
    cy.get(this.locators.clickonsearchagaencyf).click();
    cy.wait(2000);
    cy.get(this.locators.searchagencyempanelmentapprovalstatus).select("Disabled");
    cy.wait(2000);
    cy.get(this.locators.searchagency_submitbtn).click();
    cy.wait(2000);
    cy.get(this.locators.agencyaction_checkbox).click().should("be.visible");
   }

   EnableDisableAgency557(){
    cy.wait(2000);
    cy.get(this.locators.ClcikAgncyEnplm).click();
    cy.get(this.locators.clickonsearchagaencyf).click();
    cy.wait(2000);
    cy.get(this.locators.searchagencyempanelmentapprovalstatus).select("Disabled");
    cy.wait(2000);
    cy.get(this.locators.searchagency_submitbtn).click();
    cy.wait(2000);
    // cy.get(this.locators.agencyaction_checkbox).click();
    // cy.wait(2000);
    // cy.scrollTo('bottom');
    // cy.wait(2000);
    // cy.get(this.locators.enableagency).click();
   }

   EnableDisableAgent558(){
    cy.wait(2000);
    cy.get(this.locators.ClcikAgntEnplm).click();
    cy.get(this.locators.clickonsearchagent).click();
    cy.wait(2000);
    cy.get(this.locators.searchagentempanelmentapprovalstatus).select("Disabled").should("be.visible");
   }

   EnableDisableAgent559(){
    cy.wait(2000);
    cy.get(this.locators.ClcikAgntEnplm).click();
    cy.get(this.locators.clickonsearchagent).click();
    cy.wait(2000);
    cy.get(this.locators.searchagentempanelmentapprovalstatus).select("Disabled").should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.searchagent_submitbtn).click().should("be.visible");
   }

   EnableDisableAgent560(){
    cy.wait(2000);
    cy.get(this.locators.ClcikAgntEnplm).click();
    cy.get(this.locators.clickonsearchagent).click();
    cy.wait(2000);
    cy.get(this.locators.searchagentempanelmentapprovalstatus).select("Disabled");
    cy.wait(2000);
    cy.get(this.locators.searchagent_submitbtn).click().should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.agentaction_checkbox).click().should("be.visible");
   }

   EnableDisableAgent561(){
    cy.wait(2000);
    cy.get(this.locators.ClcikAgntEnplm).click();
    cy.get(this.locators.clickonsearchagent).click();
    cy.wait(4000);
    cy.get(this.locators.searchagentempanelmentapprovalstatus).select("Disabled").should("be.visible");;
    cy.wait(1000);
    cy.get(this.locators.searchagent_submitbtn).click().should("be.visible");;
    cy.wait(1000);
    cy.get(this.locators.agentaction_checkboxtwo).click().should("be.visible");;
    cy.wait(1000)
    cy.get(this.locators.enablestaff).click().should("be.visible");;
    cy.wait(2000);
    // cy.get('[role="alert"]').should(
    //   "contain.text",
    //   "Agent enabled Successfully"
    // )
    // cy.get(this.locators.enabledpopup).then(($el) => {
    //   const text = $el.text();
    //   cy.log(text);

    // })
   }


   LockedProfile922(){
    cy.wait(2000);
    cy.get(this.locators.clickonlockedprofile).click();
    cy.wait(2000);
    cy.get(this.locators.username).click().should("be.visible");;
    cy.wait(2000);
    cy.get(this.locators.searchbtn).click().should("be.visible");;
    cy.wait(2000);
    cy.get('[role="alert"]').should(
      "contain.text",
      "Please select the user type"
    )
    // cy.get(this.locators.popupmsg).then(($el) => {
    //   const text = $el.text();
    //   cy.log(text);

    // })
   }

   LockedProfile923(){
    cy.wait(2000);
    cy.get(this.locators.clickonlockedprofile).click();
    cy.wait(2000);
    cy.get(this.locators.username).type("abcdefg");
    cy.wait(2000);
    cy.get(this.locators.username).clear();
    cy.wait(2000);
    cy.get(this.locators.username).type("abcd@11");
    cy.get('[class="ng-star-inserted"]').should(
      "contain.text",
      "Please enter characters only."
    )
    // cy.get(this.locators.name_errormsg).then(($el) => {
    //   const text = $el.text();
    //   cy.log(text);

    // })
   }


   LockedProfile924(){
    cy.wait(2000);
    cy.get(this.locators.clickonlockedprofile).click();
    cy.wait(2000);
    cy.get(this.locators.userphonenumber).type("9876543210");
    cy.wait(2000);
    cy.get(this.locators.userphonenumber).clear();
    cy.wait(2000);
    cy.get(this.locators.userphonenumber).type("9876@a");
    cy.get('[class="ng-star-inserted"]').should(
      "contain.text",
      "Please enter numbers only."
    )
    // cy.get(this.locators.phone_errormsg).then(($el) => {
    //   const text = $el.text();
    //   cy.log(text);

    // })
   }

   LockedProfile926(){
    cy.wait(2000);
    cy.get(this.locators.clickonlockedprofile).click();
    cy.wait(2000);
    cy.get(this.locators.user_type).select('Staff');
    cy.wait(2000);
    cy.get(this.locators.search_lockedprofileBtn).click();
    cy.wait(2000);
    // cy.get(this.locators.action_checkbox).click();
    // cy.wait(2000);
    // //cy.scrollTo('bottom');
    // cy.wait(2000);
    // cy.get(this.locators.unblock_btn).click();
    // cy.wait(1000);
    // cy.get('[role="alert"]').should(
    //   "contain.text",
    //   "Reason is required for unblock the user"
    // )
    // cy.get(this.locators.unblock_errormsg).then(($el) => {
    //   const text = $el.text();
    //   cy.log(text);

    // })
   }

   AgentEmpanelmentRequest880(){
    cy.wait(2000);
    cy.get(this.locators.agentEmpanelmentRequest).click();
    cy.get(this.locators.AddAgent).click();
    cy.wait(2000);
    cy.get(this.locators.fname).click();
    cy.wait(2000);
    cy.get(this.locators.click).click();
    cy.wait(2000);
    cy.get('[class="ng-star-inserted"]').should(
      "contain.text",
      " First name is required "
    )
    

    cy.wait(1000);
    cy.get(this.locators.fname).type('Darshana@');
    cy.wait(2000);
    cy.get('[class="ng-star-inserted"]').should(
      "contain.text",
      " Please enter characters only. "
    )
    

    cy.wait(1000);
    cy.get(this.locators.fname).clear();
    cy.wait(2000);
    cy.get(this.locators.fname).type('abcdefghijklmnpqrstuvwx');

    cy.wait(1000);
    cy.get(this.locators.fname).clear();
    cy.wait(2000);
    cy.get(this.locators.fname).type('a');
    cy.wait(2000);
    cy.get('[class="ng-star-inserted"]').should(
      "contain.text",
      " Name must be at least 2 characters long. "
    )
    // cy.get(this.locators.name_errmsg).then(($el) => {
    //   const text = $el.text();
    //   cy.log(text);

    // })

  }

  AgentEmpanelmentRequest884(){
    cy.wait(2000);
    cy.get(this.locators.agentEmpanelmentRequest).click();
    cy.get(this.locators.AddAgent).click();
    cy.wait(2000);
    cy.get(this.locators.dialer_id).type('1234@#');
    cy.wait(1000);
    cy.get('.form-error > .ng-star-inserted').should(
      "contain.text",
      " Please enter Valid Dialer ID "
    )
    // cy.get(this.locators.dialer_id_errmsg).then(($el) => {
    //   const text = $el.text();
    //   cy.log(text);

    // })

    cy.wait(2000);
    cy.get(this.locators.dialer_id).clear();
    cy.wait(1000);
    cy.get(this.locators.dialer_id).type('1234567890');

  }

  AgentEmpanelmentRequest901(){
    const filePath = 'png5mb.png'
    const filePath1 = 'Cypress/fixtures/Aadhar-image.png'
    const filePath2 = 'Cypress/fixtures/Free_Test_Data_1MB_JPG.jpg'
    cy.wait(2000);
    cy.get(this.locators.agentEmpanelmentRequest).click();
    cy.get(this.locators.AddAgent).click();
    cy.wait(2000);
    //cy.scrollTo('bottom');
    cy.wait(2000);
    cy.get(this.locators.documentation_details).click({force : true});
    cy.wait(1000);
    cy.get(this.locators.id_proof).select('Pan Card');
    cy.wait(1000);
    cy.get('.upload-text').click({force: true});
    cy.wait(2000);
    cy.get('input[type="file"]').attachFile(filePath);
    cy.wait(2000);
    // cy.wait(1000);
    // cy.wait(2000);
    // cy.contains("File size is more than 2MB").should("be.visible");
    // cy.wait(2000);
    //cy.contains("File name should not contain special characters and spaces.").should("be.visible");
    // cy.get(this.locators.document_upload_errmsg).then(($el) => {
    //   const text = $el.text();
    //   cy.log(text);

    // })

    // cy.get(this.locators.id_proof).select('Aadhar Card');
    // cy.wait(1000);
    // cy.get(this.locators.uploadfile).selectFile(filePath1, { force: true });
    // cy.wait(1000);
    // cy.log(" File Uploaded Successfully");

    // cy.get(this.locators.id_proof).select('Aadhar Card');
    // cy.wait(1000);
    // cy.get(this.locators.uploadfile).selectFile(filePath2, { force: true });
    // cy.wait(1000);
    // cy.get('[role="alert"]').should(
    //   "contain.text",
    //   " File name should not contain special characters and spaces. "
    // )
    // cy.get(this.locators.address_errmsg).then(($el) => {
    //   const text = $el.text();
    //   cy.log(text);

    // })

  }

  AgentEmpanelmentRequest902(){
    const filePath = 'Cypress/fixtures/Free_Test_Data_1MB_JPG.jpg'
    // const filePath1 = 'Cypress/fixtures/Aadhar-image.png'
    cy.wait(2000);
    cy.get(this.locators.agentEmpanelmentRequest).click();
    cy.get(this.locators.AddAgent).click();
    cy.wait(2000);
    cy.get(this.locators.fname).type('darshana');
    cy.wait(2000);
    cy.get(this.locators.lname).type('shelar');
    cy.wait(2000);
    cy.get(this.locators.agencyName).select('snap');
    cy.wait(2000);
    cy.get(this.locators.ID_type).select('Aadhar Card');
    cy.wait(2000);
    cy.get(this.locators.UDID_NO).type('123456');
    cy.wait(2000);

    // const filePath1 = 'Aadhar.png'
    // cy.get('.upload-text').click();
    // cy.wait(2000);
    // cy.get('input[type="file"]').attachFile(filePath1);
    // cy.wait(2000);



    cy.get(this.locators.walletlimit).click();
    cy.wait(1000);
    cy.get('#walletLimit').type(20000);
    cy.wait(2000);
    cy.get(this.locators.local_address_details).click();
    cy.wait(2000);
    cy.get(this.locators.residential_address).type('Kharadi');
    cy.wait(2000);
    cy.get('#stateId').select('All');
    cy.wait(2000);
    cy.get(this.locators.city).select('All');
    cy.wait(2000);
    cy.get(this.locators.postal_code).type('411011');
    cy.wait(2000);
    cy.get(this.locators.email_ID).type('darshana@gmail.com');
    cy.wait(2000);
    cy.get(this.locators.type).select('MO',{force : true});
    cy.wait(2000);
    cy.get(this.locators.LocalNumber).type('9876543210');
    cy.wait(2000);
    cy.get(this.locators.DOB).type('09-01-1998');
    cy.wait(2000);
    cy.get(this.locators.fatherName).type('asdfghjjk',{force: true});
    cy.wait(2000);
    cy.get(this.locators.scopeOfWork).click();
    cy.wait(2000);
    cy.get("#product-scope-HL01").click();
    cy.wait(2000);
    cy.get(".col-md-12.ng-star-inserted > .form-control-group > .form-ng-select > .ng-select-container").type("Loan Products");
    cy.wait(2000);
    cy.contains(".ng-option-label","Loan Products").click({ force: true });
    cy.wait(2000);
    cy.get('[heading="Bucket"] > .panel > .panel-heading').click();
    cy.wait(500);
    cy.get(".panel-open > .panel > .panel-collapse > .panel-body > .row > .col-md-12 > .form-control-group > .form-ng-select > .ng-select-container").type("3");
    cy.wait(500);
    cy.contains(".ng-option-label","3").click({ force: true });
    cy.wait(500);
    cy.get("accordion-group[heading='Geography'] div[class='panel-title']").click({force: true});
    cy.wait(500);
    cy.get("#geo-scope-HL04").click();
    cy.wait(500);
    cy.get(".panel-open > .panel > .panel-collapse > .panel-body > .row > .col-md-12.ng-star-inserted > .form-control-group > .form-ng-select > .ng-select-container").type("India");
    cy.wait(500);
    cy.contains(".ng-option-label","India").click({ force: true });
    cy.get(this.locators.documentation_details).click();
    cy.wait(2000);
   //###############################################



   //######################################################
    cy.get(this.locators.employmentAndRenewalDetails).click();
    cy.wait(1000);
    cy.get(this.locators.collectionEmploymentDate).type('03-07-2024');
    cy.wait(1000);
    cy.get(this.locators.lastRenewalDate).type('01-07-2024');
    cy.wait(1000);
    cy.get(this.locators.expirayDate).type('03-07-2023');
    cy.wait(1000);
    cy.get(this.locators.save_btn).click({force: true});
    cy.wait(2000);
    //cy.get('[role="alert"]').should("contain.text", " Last Renewal Date must be greater than Collection Employment Date ")
    // cy.get(this.locators.RenewalDate_errmsg).then(($el) => {
    //   const text = $el.text();
    //   cy.log(text);

    // })


  }

  AgentEmpanelmentRequest903(){
    const filePath = 'Cypress/fixtures/Free_Test_Data_1MB_JPG.jpg'
    const filePath1 = 'Cypress/fixtures/Aadhar-image.png'
    cy.wait(2000);
    cy.get(this.locators.agentEmpanelmentRequest).click();
    cy.get(this.locators.AddAgent).click();
    cy.wait(2000);
    cy.get(this.locators.fname).type('darshana');
    cy.wait(2000);
    cy.get(this.locators.lname).type('shelar');
    cy.wait(2000);
    cy.get(this.locators.agencyName).select('snap');
    cy.wait(2000);
    cy.get(this.locators.ID_type).select('Aadhar Card');
    cy.wait(2000);
    cy.get(this.locators.UDID_NO).type('123456');
    cy.wait(2000);
    cy.get(this.locators.walletlimit).click();
    cy.wait(1000);
    cy.get('#walletLimit').type(20000);
    //cy.get(this.locators.browse_Btn).selectFile(filePath, { force: true });
    cy.wait(1000);
    cy.get(this.locators.local_address_details).click();
    cy.wait(2000);
    cy.get(this.locators.residential_address).type('Kharadi');
    cy.wait(2000);
    cy.get('#stateId').select('All');
    cy.wait(2000);
    cy.get(this.locators.city).select('All');
    cy.wait(2000);
    cy.get(this.locators.postal_code).type('411011');
    cy.wait(2000);
    cy.get(this.locators.email_ID).type('darshana@gmail.com');
    cy.wait(2000);
    cy.get(this.locators.type).select('MO',{force : true});
    cy.wait(2000);
    cy.get(this.locators.LocalNumber).type('9876543210');
    cy.wait(2000);
    cy.get(this.locators.DOB).type('09-01-1998');
    cy.wait(2000);
    cy.get('#fatherNameId').type('asdfghjjk');
    cy.wait(2000);
    cy.get(this.locators.scopeOfWork).click();
    cy.wait(2000);
    cy.get("#product-scope-HL01").click();
    cy.wait(2000);
    cy.get(".col-md-12.ng-star-inserted > .form-control-group > .form-ng-select > .ng-select-container").type("Loan Products");
    cy.wait(2000);
    cy.contains(".ng-option-label","Loan Products").click({ force: true });
    cy.wait(2000);
    cy.get('[heading="Bucket"] > .panel > .panel-heading').click();
    cy.wait(500);
    cy.get(".panel-open > .panel > .panel-collapse > .panel-body > .row > .col-md-12 > .form-control-group > .form-ng-select > .ng-select-container").type("3");
    cy.wait(500);
    cy.contains(".ng-option-label","3").click({ force: true });
    cy.wait(500);
    cy.get("accordion-group[heading='Geography'] div[class='panel-title']").click({force: true});
    cy.wait(500);
    cy.get("#geo-scope-HL04").click();
    cy.wait(500);
    cy.get(".panel-open > .panel > .panel-collapse > .panel-body > .row > .col-md-12.ng-star-inserted > .form-control-group > .form-ng-select > .ng-select-container").type("India");
    cy.wait(500);
    cy.contains(".ng-option-label","India").click({ force: true });
    cy.get(this.locators.documentation_details).click();
    cy.wait(2000);
    cy.get(this.locators.id_proof).select('Aadhar Card');
    cy.wait(2000);
    //cy.get(this.locators.uploadfile).selectFile(filePath1, { force: true });
    cy.wait(2000);
    cy.get(this.locators.adress_proof).select('Aadhar Card');
    cy.wait(2000);
    // cy.get(this.locators.upload_address).selectFile(filePath1, { force: true });
    // cy.wait(2000);
    // cy.get(this.locators.upload_agencyID_card).selectFile(filePath1, { force: true });
    // cy.wait(2000);
    // cy.get(this.locators.upload_HOC_approval).selectFile(filePath1, { force: true });
    // cy.wait(2000);
    // cy.get(this.locators.upload_DRA_Certificate).selectFile(filePath1, { force: true });
    // cy.wait(2000);
    cy.get(this.locators.employmentAndRenewalDetails).click();
    cy.wait(1000);
    cy.get(this.locators.collectionEmploymentDate).type('01-07-2024');
    cy.wait(1000);
    cy.get(this.locators.lastRenewalDate).type('04-07-2024');
    cy.wait(1000);
    cy.get(this.locators.expirayDate).type('04-07-2024');
    cy.wait(1000);
    cy.get(this.locators.save_btn).click();
    cy.wait(2000);
    // cy.get('[role="alert"]').should("contain.text", " Authorization Card Expiry Date must be greater than Last Renewal Date ")
    // cy.get(this.locators.cardExpiry_errmsg).then(($el) => {
    //   const text = $el.text();
    //   cy.log(text);

   // })
  }

  AgentEmpanelmentRequest881(){
    cy.wait(2000);
    cy.get(this.locators.agentEmpanelmentRequest).click();
    cy.get(this.locators.AddAgent).click();
    cy.wait(2000);
    cy.get(this.locators.lname).click();
    cy.wait(2000);
    cy.get('#btn-save').click();
    cy.wait(2000);
    cy.get('[class="ng-star-inserted"]').should(
      "contain.text",
      " Last name is required "
    )
    // cy.get(this.locators.lname_errmsg).then(($el) => {
    //   const text = $el.text();
    //   cy.log(text);

    // })

    cy.wait(1000);
    cy.get(this.locators.lname).type('Darshana@');
    cy.wait(2000);
    cy.get('[class="ng-star-inserted"]').should(
      "contain.text",
      " Please enter characters only. "
    )
    // cy.get(this.locators.lname1_errmsg).then(($el) => {
    //   const text = $el.text();
    //   cy.log(text);

    // })

    cy.get(this.locators.lname).clear();
    cy.wait(2000);
    cy.get(this.locators.lname).type('abcdefghijklmnpqrstuvwx');
    cy.wait(2000);
    cy.log("24 Characters Accepted")

  }


  AgentEmpanelmentRequest882(){
    cy.wait(2000);
    cy.get(this.locators.agentEmpanelmentRequest).click();
    cy.get(this.locators.AddAgent).click();
    cy.wait(2000);
   // cy.get(this.locators.agency_supervisor_emaiID).click();
    cy.wait(2000);
    //cy.scrollTo('top');
    cy.wait(2000);
    cy.get(this.locators.agencyName).select('--Select--');
    cy.wait(2000);
    cy.get(this.locators.click).click();
    cy.wait(2000);
    cy.get('[class="ng-star-inserted"]').should(
      "contain.text",
      " Agency name is required "
    )
    // cy.get(this.locators.agencyName_errmsg).then(($el) => {
    //   const text = $el.text();
    //   cy.log(text);

    // })

  }

  AgentEmpanelmentRequest883(){
    cy.wait(2000);
    cy.get(this.locators.agentEmpanelmentRequest).click();
    cy.get(this.locators.AddAgent).click();
    cy.wait(2000);
    cy.get(this.locators.agency_supervisor_emaiID).type('darshan@gmail');
    cy.wait(2000);
    cy.get('.form-error > .ng-star-inserted').should(
      "contain.text",
      " Please Enter Valid E-mail ID "
    )
    // cy.get(this.locators.agency_supervisor_emaiID_errmsg).then(($el) => {
    //   const text = $el.text();
    //   cy.log(text);

    // })

  }

  LocalAddDetailils891(){
    cy.wait(2000);
    cy.get(this.locators.agentEmpanelmentRequest).click();
    cy.get(this.locators.AddAgent).click();
    cy.wait(2000);
    cy.get(this.locators.LocalAddDetails).click();
    cy.wait(2000);
    cy.get(this.locators.PostalCode).click();
    cy.wait(2000);
    cy.get(this.locators.Landmark).click();
    cy.wait(2000);
    cy.get('[class="ng-star-inserted"]').should("contain.text"," Pin Code is required ")
    // cy.get(this.locators.Pinerror).then(($el) => {
    //   const text = $el.text();
    //   cy.log(text);
    // })
    cy.wait(2000);
    cy.get(this.locators.PostalCode).type("@");
    cy.wait(2000);
    cy.get('[class="ng-star-inserted"]').should("contain.text"," Enter valid 6 digit pincode ")
    // cy.get(this.locators.Pinerror).then(($el) => {
    //   const text = $el.text();
    //   cy.log(text);
    // })
    cy.wait(2000);
    cy.get(this.locators.PostalCode).type("122");
    cy.wait(2000);
    cy.get('[class="ng-star-inserted"]').should("contain.text"," Enter valid 6 digit pincode ")
  //   cy.get(this.locators.Pinerror).then(($el) => {
  //     const text = $el.text();
  //     cy.log(text);
  //  })
   }

   
   LocalAddDetailils892(){
    cy.wait(2000);
    cy.get(this.locators.agentEmpanelmentRequest).click();
    cy.get(this.locators.AddAgent).click();
    cy.wait(2000);
    cy.get(this.locators.LocalAddDetails).click();
    cy.wait(2000);
    cy.get(this.locators.mail).click();
    cy.wait(2000);
    cy.get(this.locators.dob).click();
    cy.wait(2000);
    cy.get('.form-error > .ng-star-inserted').should("contain.text"," Email is required ")
    // cy.get(this.locators.mailerror).then(($el) => {
    //   const text = $el.text();
    //   cy.log(text);
    // })
    cy.wait(2000);
    cy.get(this.locators.mail).type("abc@yop.c", { force: true });
    cy.wait(2000);
    cy.get('.form-error > .ng-star-inserted').should("contain.text"," Enter a valid email ")
    // cy.get(this.locators.mailerror).then(($el) => {
    //   const text = $el.text();
    //   cy.log(text);
    // })
   }

   LocalAddDetailils893(){

    cy.wait(2000);
    cy.get(this.locators.agentEmpanelmentRequest).click();
    cy.get(this.locators.AddAgent).click();
    cy.wait(2000);
    cy.get(this.locators.LocalAddDetails).click();
    cy.wait(2000);
    cy.get(this.locators.dob).click();
    cy.wait(2000);
    cy.get(this.locators.mail).type("abc@yop.c", { force: true });
    cy.wait(2000);
    cy.contains("Date of birth is required").should("be.visible");
    cy.wait(2000);



   }

   LocalAddDetailils894(){

    cy.wait(2000);
    cy.get(this.locators.agentEmpanelmentRequest).click();
    cy.get(this.locators.AddAgent).click();
    cy.wait(2000);
    cy.get(this.locators.LocalAddDetails).click();
    cy.wait(2000);
    cy.get('#fatherNameId').click();
    cy.wait(2000);
    cy.get(this.locators.mail).click();
    cy.wait(2000);
    cy.contains("Father name is required").should("be.visible");
    cy.wait(2000);
    cy.get('#fatherNameId').type("@#$$%");
    cy.wait(2000);
    cy.contains("Enter valid name").should("be.visible");
    cy.wait(2000);



   }

   LocalAddDetailils895(){

    cy.wait(2000);
    cy.get(this.locators.agentEmpanelmentRequest).click();
    cy.get(this.locators.AddAgent).click();
    cy.wait(2000);
    cy.get(this.locators.LocalAddDetails).click();
    cy.wait(2000);
    cy.get('#mobileTypeId').select("MO",{force: true});
    cy.wait(2000);
    cy.get('#mobileNumberId').click();
    cy.wait(2000);
    cy.get('#fatherNameId').click();
    cy.wait(2000);
    cy.contains("Mobile Number is required").should("be.visible");
    cy.wait(2000);
    cy.get('#mobileNumberId').type("@#$%");
    cy.wait(2000);
    cy.contains("Only numbers allowed and must be 10 digits").should("be.visible");
    cy.wait(2000);

   
    



   }
  

   UserManagement_885() {
    // Click on User Management section
  
    cy.get(this.locators.agentEmpanelmentRequest).click();
    cy.get(this.locators.AddAgent).click();
  
    // Click on Agent Registration
    // cy.get(this.locators.AgentRe).click();
    // cy.wait(600);
  
    // Clear any existing value in DRA Unique Registration Number field (if needed)
    cy.get(this.locators.DRAUnique).clear();
  
    // Type invalid input (special characters or alphabets) into DRA Unique Registration Number field
    cy.get(this.locators.DRAUnique).type('123@');
  
    cy.get('[class="ng-star-inserted"]').should("contain.text"," Please enter Valid DRA Unique Registration Number. ")
    // cy.get(this.locators.DRAUniquegname_errmsg).then(($el) => {
    //   const text = $el.text();
    //   cy.log(text);

    // })
  }
  UserManagement_886() {
  // Click on User Management section
  cy.get(this.locators.agentEmpanelmentRequest).click();
    cy.get(this.locators.AddAgent).click();
  cy.wait(600);

  // Click on Agent Registration
  //cy.get(this.locators.AgentRe).click();
  cy.wait(600);
  cy.get(this.locators.IDtype).select('--Select--');
  cy.wait(600);


  
  //cy.get('[class="ng-star-inserted"]').should("contain.text"," Id Type is required ")
  // cy.get(this.locators.IDType_errmsg).then(($el) => {
  //   const text = $el.text();
  //   cy.log(text);

  // })
}
UserManagement_887() {
  // Click on User Management section
  cy.get(this.locators.agentEmpanelmentRequest).click();
  cy.get(this.locators.AddAgent).click();
  cy.wait(600);

  // Click on Agent Registration
  //cy.get(this.locators.AgentRe).click();
  cy.wait(600);
  cy.get(this.locators.UDIDNumber).click();
  cy.wait(600);
  cy.get(this.locators.DRAUnique).click();
  
  //cy.get('[class="ng-star-inserted"]').should("contain.text"," Please Enter UDID Number ")
  // cy.get(this.locators.UDIDNumbererrmsg).then(($el) => {
  //   const text = $el.text();
  //   cy.log(text);
  // })

    cy.get(this.locators.UDIDNumber).type('123');
  cy.wait(600);
  //cy.get('[class="ng-star-inserted"]').should("contain.text"," UDID Number must be 6 digits long ")
  // cy.get(this.locators.UDIDNumbererrmsg1).then(($el) => {
  //   const text = $el.text();
  //   cy.log(text);

  // })

}
UserManagement_888(){
  cy.wait(4000);
  cy.get(this.locators.agentEmpanelmentRequest).click();
  cy.get(this.locators.AddAgent).click();
 
  cy.wait(600);
  //cy.get(this.locators.AgentRe).click();
  cy.wait(600);
  cy.get(this.locators.LocalAdress).click();
  cy.wait(800);
  cy.get(this.locators.LocalReAdress).click();
  cy.wait(800);
  cy.get(this.locators.LandMark).click({force: true});
  cy.wait(800);
  cy.get('[class="ng-star-inserted"]').should("contain.text"," Address is required ")
    // cy.get(this.locators.Addressmsg_errmsg).then(($el) => {
    //   const text = $el.text();
    //   cy.log(text);

    // })
}
  UserManagement_889(){
    cy.wait(4000);
    cy.get(this.locators.agentEmpanelmentRequest).click();
    cy.get(this.locators.AddAgent).click();
    cy.wait(600);
    //cy.get(this.locators.AgentRe).click();
    cy.wait(600);
    cy.get(this.locators.LocalAdress).click();
    cy.wait(800);
    cy.get('#stateId').select('-- Select State --');
    cy.wait(800);
    cy.get(this.locators.LocalReAdress).click();
    cy.wait(800);
    

    cy.get('[class="ng-star-inserted"]').should("contain.text"," State is required ")
    // cy.get(this.locators.Addressmsg_errmsg1).then(($el) => {
    //   const text = $el.text();
    //   cy.log(text);

    // })
  }
  UserManagement_890(){
    cy.wait(4000);
    cy.get(this.locators.agentEmpanelmentRequest).click();
    cy.get(this.locators.AddAgent).click();
    cy.wait(600);
    //cy.get(this.locators.AgentRe).click();
    cy.wait(600);
    cy.get(this.locators.LocalAdress).click();
    cy.wait(800);
    cy.get('#cityId').select('-- Select City --');
    cy.wait(800);
    cy.get(this.locators.LocalReAdress).click();
    cy.wait(800);
    cy.get('[class="ng-star-inserted"]').should("contain.text"," City is required ")
    // cy.get(this.locators.errmsg2).then(($el) => {
    //   const text = $el.text();
    //   cy.log(text);
    // })
  }

  AgentEnpalmentRequest896(){

    cy.wait(2000);
    cy.get(this.locators.agentEmpanelmentRequest).click();
    cy.get(this.locators.AddAgent).click();
    cy.wait(2000);
    cy.get(this.locators.LocalAdress).click();
    cy.wait(2000);
    cy.get("select[name='mobileType']").select("LL",{force : true});
    cy.wait(2000);
  cy.get("#areaCodeId").type(" ");
    cy.wait(2000);
    cy.get(this.locators.text_code).type("@");
    cy.wait(2000);
    
    cy.get(this.locators.text_code).clear();
    cy.wait(2000);
    cy.get(this.locators.text_code).type("1");
    cy.wait(2000);
    
    cy.wait(2000);
    cy.get(this.locators.text_code).clear();
    cy.wait(2000);
    cy.get(this.locators.text_code).type("123");
    cy.wait(2000);

    cy.get("#areaCodeId").type("@");
    cy.wait(2000);
   cy.contains("Only numbers are allowed").should("be.visible");
 

   }

   AgentEnpalmentRequest897(){

    cy.wait(2000);
    cy.get(this.locators.agentEmpanelmentRequest).click();
    cy.get(this.locators.AddAgent).click();
    cy.wait(2000);
    cy.get(this.locators.LocalAdress).click();
    cy.wait(2000);
    cy.get("select[name='mobileType']").select("LL",{force : true});
    cy.wait(2000);
    cy.get(this.locators.text_code).type("3456");
    cy.wait(2000);
    cy.get(this.locators.loc_number).click();
    cy.wait(2000);
    cy.get(this.locators.loc_number).type("@&*$%#");
    cy.wait(2000);
    cy.contains("Only numbers allowed and must be 10 digits").should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.loc_number).clear();
    cy.wait(2000);
    cy.get(this.locators.loc_number).type("a");
    cy.wait(2000);
    cy.get(this.locators.loc_number).clear();
    cy.wait(2000);
    cy.get(this.locators.loc_number).type("23456");
    cy.wait(2000);
    cy.contains("Only numbers allowed and must be 10 digits").should("be.visible");

   }
   AgentEnpalmentRequest898(){

    cy.wait(2000);
    cy.get(this.locators.agentEmpanelmentRequest).click();
    cy.get(this.locators.AddAgent).click();
    cy.wait(2000);
    cy.get(this.locators.Banking_details).click();
    cy.wait(2000);
    cy.get(this.locators.cust_name).type("1234");
    cy.wait(2000);
    cy.contains("Enter valid account holder name.").should("be.visible");
    cy.get(this.locators.cust_name).clear();
    cy.wait(2000);
    cy.get(this.locators.cust_name).type("@#");
    cy.wait(2000);
    cy.contains("Enter valid account holder name.").should("be.visible");
    cy.get(this.locators.cust_name).clear();
    cy.wait(2000);
    cy.get(this.locators.cust_name).type("qwertyuiopasdfghjklzxcvbnmqwertyuiop");
    cy.wait(2000);


    
   }
   AgentEnpalmentRequest899(){

    cy.wait(2000);
    cy.get(this.locators.agentEmpanelmentRequest).click();
    cy.get(this.locators.AddAgent).click();
    cy.wait(2000);
    cy.get(this.locators.Banking_details).click();
    cy.wait(2000);
    cy.get(this.locators.Bank_acc_no).type("@");
    cy.wait(2000);
    cy.get(this.locators.Bank_acc_no).clear();
    cy.wait(2000);
    cy.get(this.locators.Bank_acc_no).type("abc");
    cy.wait(2000);
    cy.get(this.locators.Bank_acc_no).clear();
    cy.wait(2000);
    cy.get(this.locators.Bank_acc_no).type("12345");
    cy.wait(2000);
    cy.contains("Bank Account Number should be minimum 10 characters.").should("be.visible");
    

    
   }

   AgentEnpalmentRequest900(){
    // const filePath = '170pxReceiptSwiss.jpg'
    const filePath1 = 'Aadhar-image.png'
    

    cy.wait(2000);
    cy.get(this.locators.agentEmpanelmentRequest).click();
    cy.get(this.locators.AddAgent).click();
    cy.wait(2000);
    // const filePath1 = 'Aadhar.png'
    cy.get('.upload-text').click();
    cy.wait(2000);
    cy.get('input[type="file"]').attachFile(filePath1);
    cy.wait(2000);
    cy.contains("Filename should not contain any special characters").should("be.visible");
    cy.wait(2000);

    const filePath2 = 'AllocationToOwner.xlsx'
    cy.get('.upload-text').click();
    cy.wait(2000);
    cy.get('input[type="file"]').attachFile(filePath2);
    cy.wait(2000);

    
   }

   Bulk_Enable_Disable_Agent_Staf975(){
    const filePath = 'Cypress/fixtures/Agents.xlsx'

    cy.get("a[title='Bulk Upload']").click();
    cy.wait(2000);

    cy.get(this.locators.EnableDisable).click();
    cy.wait(2000);
    //cy.get(this.locators.ClickUpload).click();
    cy.wait(2000);
    cy.get('#fileTypeAgent').click();
    // cy.get(this.locators.TemplateForUpload).select("Template for Agent");
    // cy.wait(2000);
    cy.get(this.locators.AgentTemplateDownload).click();
    cy.wait(2000);
    cy.get(this.locators.AgentStaff).click();
    cy.wait(2000);
    cy.get(this.locators.AgentUpload).selectFile(filePath, { force: true });
    cy.wait(2000);
    cy.get('#btn-upload').click();
    cy.get('#confirm-dialog-okay').click();
    cy.wait(2000);
    cy.contains("File Uploaded Successfully. Transaction ID :").should("be.visible")
    cy.wait(2000);



   }
   Bulk_Enable_Disable_Agent_Staf976(){
    const filePath = 'Cypress/fixtures/Agents.xlsx'
    cy.get("a[title='Bulk Upload']").click();
    cy.wait(2000);

    cy.get(this.locators.EnableDisable).click();
    cy.wait(2000);
    //cy.get(this.locators.ClickUpload).click();
    cy.wait(2000);
    cy.get('#fileTypeAgent').click();
    //cy.get(this.locators.TemplateForUpload).select("Template for Agent");
    cy.wait(2000);
    cy.get(this.locators.AgentTemplateDownload).click();
    cy.wait(2000);
    cy.get(this.locators.AgentStaff).click();
    cy.wait(2000);
    cy.get(this.locators.AgentUpload).selectFile(filePath, { force: true });
    cy.wait(2000);
    cy.get('#btn-upload').click();
    cy.get('#confirm-dialog-okay').click();
    cy.wait(2000);
    cy.contains("File Uploaded Successfully. Transaction ID :").should("be.visible")
    cy.wait(1000);

   }

   Bulk_Enable_Disable_Agent_Staf977(){
    const filePath = 'Cypress/fixtures/Staff.xlsx'
    cy.get("a[title='Bulk Upload']").click();
    cy.wait(2000);

    cy.wait(2000);
    cy.get(this.locators.EnableDisable).click();
    cy.wait(2000);
    //cy.get(this.locators.ClickUpload).click();
    cy.wait(2000);
    cy.get('#fileTypeStaff').click();
    //cy.get(this.locators.TemplateForUpload).select("Template for Staff");
    cy.wait(2000);
    cy.get(this.locators.AgentTemplateDownload).click();
    cy.wait(2000);
    cy.get('#uploadFileTypeStaff').click();
    cy.wait(2000);
    cy.get(this.locators.AgentUpload).selectFile(filePath, { force: true });
    cy.wait(2000);
    cy.get('#btn-upload').click();
    cy.get('#confirm-dialog-okay').click();
    cy.wait(2000);
    cy.wait(2000);
    cy.contains("File Uploaded Successfully. Transaction ID :").should("be.visible")
    cy.wait(1000);
   }


   Bulk_Enable_Disable_Agent_Staf978(){
    const filePath = 'Cypress/fixtures/Staffdis.xlsx'
    cy.get("a[title='Bulk Upload']").click();
    cy.wait(2000);

    cy.wait(2000);
    cy.get(this.locators.EnableDisable).click();
    cy.wait(2000);
    //cy.get(this.locators.ClickUpload).click();
    cy.wait(2000);
    cy.get('#fileTypeStaff').click();
    //cy.get(this.locators.TemplateForUpload).select("Template for Staff");
    cy.wait(2000);
    cy.get(this.locators.AgentTemplateDownload).click();
    cy.wait(2000);
    cy.get('#uploadFileTypeStaff').click();
    cy.wait(2000);
    cy.get(this.locators.AgentUpload).selectFile(filePath, { force: true });
    cy.wait(2000);
    cy.get('#btn-upload').click();
    cy.get('#confirm-dialog-okay').click();
    cy.wait(2000);
    cy.wait(2000);
    cy.contains("File Uploaded Successfully. Transaction ID :").should("be.visible")
    cy.wait(2000);

   }

   AgentEnpalmentRequest904(){

    const filePath = 'Cypress/fixtures/Aadhar.png'

    cy.wait(2000);
    cy.get(this.locators.agentEmpanelmentRequest).click({force: true} );
    cy.get(this.locators.AddAgent).click();
    cy.wait(2000);
  
    cy.wait(2000);
    cy.get('#userType').select("FOS");
    cy.wait(1000);
    cy.get(this.locators.FirstName).type("Pranshu");
    cy.wait(2000);
    cy.get(this.locators.LastName).type("Raj");
    cy.wait(2000);
    cy.get(this.locators.Agencyname).select("Arun");
    cy.wait(2000);
    // cy.get(this.locators.AgencyE).type("pranshu@yopmail.com");
    // cy.wait(2000);
    cy.get(this.locators.dilarID).type("123");
    cy.wait(2000);
    cy.get(this.locators.DRACertificateDate).type("16-05-2024");
    cy.wait(2000);
    cy.get(this.locators.dratrainingdate).type("16-07-2024");
    cy.wait(2000);
    cy.get(this.locators.DRANumb).type("1234567");
    cy.wait(2000);
    cy.get(this.locators.Idtype).select("Pan card");
    cy.wait(2000)
    cy.get(this.locators.UDIDNumberr).type("12345678909876543");
    cy.wait(2000);

    const filePath1 = 'Aadhar.png'
    cy.get('.upload-text').click();
    cy.wait(2000);
    cy.get('input[type="file"]').attachFile(filePath1);
    cy.wait(2000);


    cy.wait(2000);
    cy.get(this.locators.walletlimit).click();
    cy.wait(1000);
    cy.get('#walletLimit').type(20000);
    cy.wait(2000);
    cy.get(this.locators.Departmentdesignation).click();
    cy.wait(2000);
    cy.get(this.locators.Add).click();
    cy.wait(2000);
    cy.get(this.locators.Department).select("Agency Backend");
    cy.wait(2000);
    cy.get(this.locators.designationn).select("Agency Backend");
    cy.wait(2000);
    cy.get(this.locators.LocalAddressDetails).click();
    cy.wait(2000);
    cy.get(this.locators.Address).type(" AAAAAAAAAAAAAAAA XXXXXXXXXXXXXXXXXX BBBBBBBBBBBBBB CCCCCCCCCCCCCCC");
    cy.wait(2000);
    cy.get('#stateId').select('All');
    cy.wait(2000);
    cy.get("#cityId").select("All");
    cy.wait(2000);
    cy.get("#landmarkId").type("xxxx Bank");
    cy.wait(2000);
    cy.get("#pinId").type("845438");
    cy.wait(2000);
    cy.get("#mobileTypeId").select("MO",{force : true});
    cy.wait(2000);
    // cy.get("input[placeholder='code']").type("3223");
    // cy.wait(2000);
    
    function generateRandomMobileNumber() {
      const prefix = '07'; // Assuming you want the number to start with '07'
      const randomNumber = Math.floor(Math.random() * 10000000000); // Generates an 8-digit number
      const paddedNumber = String(randomNumber).padStart(8, '0'); // Pads with leading zeros if necessary
      return prefix + paddedNumber;
    }
    // Cypress test code
    cy.get('input[name="primaryMobileNumber"]').type(generateRandomMobileNumber());
    cy.wait(2000);
    //cy.get("#emailId").type("pranshu@yopmail.com");
    //cy.wait(2000);
    function generateRandomEmail() {
      const randomString = Math.random().toString(36).substring(2, 11); // Generates a random string
      return `user_${randomString}@yopmail.com`; // Concatenate to form an email address
    }

    // Cypress test code
    cy.get("#emailId").type(generateRandomEmail());
    cy.wait(2000);
    cy.get("#dobId").type("11-06-20006");
    cy.wait(2000);
    cy.get("#fatherNameId").type(" Mr B Kumar",{force: true});
    cy.wait(2000);
    cy.get('#bloodGroup').select("A-");
    cy.wait(1000);
    cy.get('#emer_contactNO').type(6598741245);
    cy.wait(1000);
    cy.get(this.locators.Banking_details).click();
    cy.wait(2000);
    cy.get(this.locators.cust_name).type("Pranshu raj");
    cy.wait(2000);
    cy.get("input[placeholder='Enter Account Number']").type("456785678776543");
    cy.wait(2000);
    cy.get("select[name='bankName']").select("BANK OF INDIA");
    cy.wait(2000);
    cy.get("select[name='bankBranchId']").select("BANO");
    cy.wait(2000);
    cy.get(':nth-child(6) > .nav-link > span').click();
    cy.wait(2000);
    cy.get("#product-scope-HL01").click();
    cy.wait(2000);
    cy.get(".col-md-12.ng-star-inserted > .form-control-group > .form-ng-select > .ng-select-container").type("Loan Products");
    cy.wait(2000);
    cy.contains(".ng-option-label","Loan Products").click({ force: true });
    cy.wait(2000);
    cy.get('[heading="Bucket"] > .panel > .panel-heading').click();
    cy.wait(500);
    cy.get(".panel-open > .panel > .panel-collapse > .panel-body > .row > .col-md-12 > .form-control-group > .form-ng-select > .ng-select-container").type("3");
    cy.wait(500);
    cy.contains(".ng-option-label","3").click({ force: true });
    cy.wait(500);
    cy.get("accordion-group[heading='Geography'] div[class='panel-title']").click({force: true});
    cy.wait(500);
    cy.get("#geo-scope-HL04").click();
    cy.wait(500);
    cy.get(".panel-open > .panel > .panel-collapse > .panel-body > .row > .col-md-12.ng-star-inserted > .form-control-group > .form-ng-select > .ng-select-container").type("India");
    cy.wait(500);
    cy.contains(".ng-option-label","India").click({ force: true });
    cy.wait(500);
    cy.get(":nth-child(7) > .nav-link > span").click();
    cy.wait(2000);
    // cy.get("#areaPin").type("845438");
    // cy.wait(2000);

    // cy.get(':nth-child(8) > .nav-link > span').click();
    // cy.wait(2000);
    // cy.get("#maxAccounts").type("2");
    // cy.wait(2000);

    // cy.get(':nth-child(8) > .nav-link > span').click();
    // cy.wait(2000);
    // cy.get("#maxAccounts").type("2").should('be.visible');
    // cy.wait(2000);
    // cy.get(':nth-child(9) > .nav-link > span').click();
    // cy.wait(2000);
    // cy.get("#expYears").type("2").should('be.visible');
    // cy.wait(2000);
    // cy.get("select[name='cutomerPersona']").select("Self-cure customer").should('be.visible');
    // cy.wait(2000);
    // cy.get('#lanKnown').select("Hindi").should('be.visible');
    // cy.wait(2000);
    // cy.get('#perBand').select("LH").should('be.visible');
    // cy.wait(2000);


    //#############################Document&Details######################################### 
    cy.get(':nth-child(7) > .nav-link > span').click().should('be.visible');

    cy.wait(2000);
    cy.get("#docTypeSelect-0").select("Pan Card").should('be.visible');
    cy.wait(2000);
    cy.get('#addFileBtn-0').click();
    cy.get('input[type="file"]').eq(1).selectFile(filePath, { force: true });
    cy.wait(2000);
   
    cy.get('#docTypeSelect-1').select("Aadhar Card").should('be.visible');
    cy.wait(2000);
    cy.get('#addFileBtn-1').click();
    cy.get('input[type="file"]').eq(2).selectFile(filePath, { force: true });
    cy.wait(2000);

    cy.get("#docTypeSelect-2").select("Agency ID Card").should('be.visible');
    cy.wait(2000)
    cy.get('input[type="file"]').eq(3).selectFile(filePath, { force: true });
    cy.wait(2000);

    cy.get("#docTypeSelect-3").select("HOC Approval").should('be.visible');
    cy.wait(2000)
    cy.get('input[type="file"]').eq(4).selectFile(filePath, { force: true });
    cy.wait(2000);
   
//#############################Document&Details######################################### 

cy.get(':nth-child(8) > .nav-link > span').click().should('be.visible');
cy.wait(2000);

//  cy.get('#CollectionDate').click().should('be.visible');
//  cy.wait(2000)
// //choose previous month
//  cy.get("button[class='current ng-star-inserted'] span").click()
//  cy.wait(2000)
// //choose next month 
//   cy.get("tbody > :nth-child(1) > :nth-child(1) > span").click()
//   cy.wait(2000);
//   cy.get('.bs-datepicker-container').contains('8').click()
 
 cy.wait(2000);
//choose date 2

cy.get("#CollectionDate").type("25-06-2023").should('be.visible');
cy.wait(2000);
cy.get("#RenewalDate").type("15-07-2024").should('be.visible');
cy.wait(2000);
cy.get("#ExpiryDate").type("15-07-2026").should('be.visible');
cy.wait(2000);
cy.get("#remarks").type("aaaaaa bbbbbbbbb cccccccccc dddddddddd 123",{force: true}).should('be.visible');
cy.wait(2000)
cy.get('#btn-submit').click({force: true});
cy.wait(2000);
cy.contains("Agent Profile has been Submitted for Approval.").should("be.visible");


    
}

AgentEnpalmentRequest905(){

  const filePath = 'Cypress/fixtures/Aadhar.png'

  cy.wait(2000);
  cy.get(this.locators.agentEmpanelmentRequest).click({force: true} );
  cy.get(this.locators.AddAgent).click();
  cy.wait(2000);

  cy.wait(2000);
  cy.get('#userType').select("FOS");
  cy.wait(1000);
  cy.get(this.locators.FirstName).type("Pranshu");
  cy.wait(2000);
  cy.get(this.locators.LastName).type("Raj");
  cy.wait(2000);
  cy.get(this.locators.Agencyname).select("Arun");
  cy.wait(2000);
  cy.get("#reportingManager").type("Arjun Singh - 1018");
  cy.wait(2000);
  cy.get(this.locators.dilarID).type("123");
  cy.wait(2000);
  cy.get(this.locators.DRACertificateDate).type("16-05-2024");
  cy.wait(2000);
  cy.get(this.locators.dratrainingdate).type("16-07-2024");
  cy.wait(2000);
  cy.get(this.locators.DRANumb).type("1234567");
  cy.wait(2000);
  cy.get(this.locators.Idtype).select("Pan card");
  cy.wait(2000)
  cy.get(this.locators.UDIDNumberr).type("12345678909876543");
  cy.wait(2000);

  const filePath1 = 'Aadhar.png'
  cy.get('.upload-text').click();
  cy.wait(2000);
  cy.get('input[type="file"]').attachFile(filePath1);
  cy.wait(2000);


  cy.wait(2000);
  cy.get(this.locators.walletlimit).click();
    cy.wait(1000);
    cy.get('#walletLimit').type(20000);
    cy.wait(2000);
  cy.get(this.locators.Departmentdesignation).click();
  cy.wait(2000);
  cy.get(this.locators.Add).click();
  cy.wait(2000);
  cy.get(this.locators.Department).select("Agency Backend");
  cy.wait(2000);
  cy.get(this.locators.designationn).select("Agency Backend");
  cy.wait(2000);
  cy.get(this.locators.LocalAddressDetails).click();
  cy.wait(2000);
  cy.get(this.locators.Address).type(" AAAAAAAAAAAAAAAA XXXXXXXXXXXXXXXXXX BBBBBBBBBBBBBB CCCCCCCCCCCCCCC");
  cy.wait(2000);
  cy.get('#stateId').select('All');
  cy.wait(2000);
  cy.get("#cityId").select("All");
  cy.wait(2000);
  cy.get("#landmarkId").type("xxxx Bank");
  cy.wait(2000);
  cy.get("#pinId").type("845438");
  cy.wait(2000);
  cy.get("#mobileTypeId").select("MO",{force : true});
  cy.wait(2000);
  // cy.get("input[placeholder='code']").type("3223");
  // cy.wait(2000);
  
  function generateRandomMobileNumber() {
    const prefix = '07'; // Assuming you want the number to start with '07'
    const randomNumber = Math.floor(Math.random() * 10000000000); // Generates an 8-digit number
    const paddedNumber = String(randomNumber).padStart(8, '0'); // Pads with leading zeros if necessary
    return prefix + paddedNumber;
  }
  // Cypress test code
  cy.get('input[name="primaryMobileNumber"]').type(generateRandomMobileNumber());
  cy.wait(2000);
  //cy.get("#emailId").type("pranshu@yopmail.com");
  //cy.wait(2000);
  function generateRandomEmail() {
    const randomString = Math.random().toString(36).substring(2, 11); // Generates a random string
    return `user_${randomString}@yopmail.com`; // Concatenate to form an email address
  }

  // Cypress test code
  cy.get("#emailId").type(generateRandomEmail());
  cy.wait(2000);
  cy.get("#dobId").type("11-06-20006");
  cy.wait(2000);
  cy.get("#fatherNameId").type(" Mr B Kumar",{force: true});
  cy.wait(2000);
  cy.get('#bloodGroup').select("A-");
  cy.wait(1000);
  cy.get('#emer_contactNO').type(6598744125);
  cy.wait(1000);
  cy.get(this.locators.Banking_details).click();
  cy.wait(2000);
  cy.get(this.locators.cust_name).type("Pranshu raj");
  cy.wait(2000);
  cy.get("input[placeholder='Enter Account Number']").type("456785678776543");
  cy.wait(2000);
  cy.get("select[name='bankName']").select("BANK OF INDIA");
  cy.wait(2000);
  cy.get("select[name='bankBranchId']").select("BANO");
  cy.wait(2000);
 cy.get(':nth-child(6) > .nav-link > span').click();
    cy.wait(2000);
    cy.get("#product-scope-HL01").click();
    cy.wait(2000);
    cy.get(".col-md-12.ng-star-inserted > .form-control-group > .form-ng-select > .ng-select-container").type("Loan Products");
    cy.wait(2000);
    cy.contains(".ng-option-label","Loan Products").click({ force: true });
    cy.wait(2000);
    cy.get('[heading="Bucket"] > .panel > .panel-heading').click();
    cy.wait(500);
    cy.get(".panel-open > .panel > .panel-collapse > .panel-body > .row > .col-md-12 > .form-control-group > .form-ng-select > .ng-select-container").type("3");
    cy.wait(500);
    cy.contains(".ng-option-label","3").click({ force: true });
    cy.wait(500);
    cy.get("accordion-group[heading='Geography'] div[class='panel-title']").click({force: true});
    cy.wait(500);
    cy.get("#geo-scope-HL04").click();
    cy.wait(500);
    cy.get(".panel-open > .panel > .panel-collapse > .panel-body > .row > .col-md-12.ng-star-inserted > .form-control-group > .form-ng-select > .ng-select-container").type("India");
    cy.wait(500);
    cy.contains(".ng-option-label","India").click({ force: true });
    cy.wait(500);
    cy.get(":nth-child(7) > .nav-link > span").click();
    cy.wait(2000);
    // cy.get("#areaPin").type("845438");
    // cy.wait(2000);

    // cy.get(':nth-child(8) > .nav-link > span').click();
    // cy.wait(2000);
    // cy.get("#maxAccounts").type("2");
    // cy.wait(2000);

    // cy.get(':nth-child(8) > .nav-link > span').click();
    // cy.wait(2000);
    // cy.get("#maxAccounts").type("2").should('be.visible');
    // cy.wait(2000);
    // cy.get(':nth-child(9) > .nav-link > span').click();
    // cy.wait(2000);
    // cy.get("#expYears").type("2").should('be.visible');
    // cy.wait(2000);
    // cy.get("select[name='cutomerPersona']").select("Self-cure customer").should('be.visible');
    // cy.wait(2000);
    // cy.get('#lanKnown').select("Hindi").should('be.visible');
    // cy.wait(2000);
    // cy.get('#perBand').select("LH").should('be.visible');
    // cy.wait(2000);


    //#############################Document&Details######################################### 
    cy.get(':nth-child(7) > .nav-link > span').click().should('be.visible');

    cy.wait(2000);
    cy.get("#docTypeSelect-0").select("Pan Card").should('be.visible');
    cy.wait(2000);
    cy.get('#addFileBtn-0').click();
    cy.get('input[type="file"]').eq(1).selectFile(filePath, { force: true });
    cy.wait(2000);
   
    cy.get('#docTypeSelect-1').select("Aadhar Card").should('be.visible');
    cy.wait(2000);
    cy.get('#addFileBtn-1').click();
    cy.get('input[type="file"]').eq(2).selectFile(filePath, { force: true });
    cy.wait(2000);

    cy.get("#docTypeSelect-2").select("Agency ID Card").should('be.visible');
    cy.wait(2000)
    cy.get('input[type="file"]').eq(3).selectFile(filePath, { force: true });
    cy.wait(2000);

    cy.get("#docTypeSelect-3").select("HOC Approval").should('be.visible');
    cy.wait(2000)
    cy.get('input[type="file"]').eq(4).selectFile(filePath, { force: true });
    cy.wait(2000);
   
//#############################Document&Details######################################### 

cy.get(':nth-child(8) > .nav-link > span').click().should('be.visible');
cy.wait(2000);

//  cy.get('#CollectionDate').click().should('be.visible');
//  cy.wait(2000)
// //choose previous month
//  cy.get("button[class='current ng-star-inserted'] span").click()
//  cy.wait(2000)
// //choose next month 
//   cy.get("tbody > :nth-child(1) > :nth-child(1) > span").click()
//   cy.wait(2000);
//   cy.get('.bs-datepicker-container').contains('8').click()
 
 cy.wait(2000);
//choose date 2

cy.get("#CollectionDate").type("25-06-2023").should('be.visible');
cy.wait(2000);
cy.get("#RenewalDate").type("15-07-2024").should('be.visible');
cy.wait(2000);
cy.get("#ExpiryDate").type("15-07-2026").should('be.visible');
cy.wait(2000);
cy.get("#remarks").type("aaaaaa bbbbbbbbb cccccccccc dddddddddd 123",{force: true}).should('be.visible');
cy.wait(2000)
//##########################################################
cy.get("#remarks").clear();
cy.wait(2000)
cy.get("#remarks").type("Its OK",{force: true}).should('be.visible');
cy.wait(2000)


//##########################################################
cy.get('#btn-submit').click({force: true});
cy.wait(2000);
cy.contains("Agent Profile has been Submitted for Approval.").should("be.visible");
}


AgentEnpalmentRequest906(){
  cy.wait(2000);
  cy.get(this.locators.agentEmpanelmentRequest).click({force: true} );
  cy.wait(2000);
  cy.get(this.locators.searchagent).click().should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.EnterAgentName).type("Abhishek").should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.SelectEPStatus).select("Approved").should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.SearcButton).click();
  cy.wait(2000);
  cy.contains("No Results Found!").should("be.visible");
}

AgentEnpalmentRequest907(){
  cy.wait(2000);
  cy.get(this.locators.agentEmpanelmentRequest).click({force: true} );
  cy.wait(2000);
  cy.get(this.locators.searchagent).click().should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.SelectEPStatus).select("Approved").should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.SearcButton).click();
  cy.wait(2000);
  cy.contains("Search Result").should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.ClickNext).click();
  cy.wait(2000);
  cy.get(this.locators.SelectEPStatus).select("Rejected").should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.SearcButton).click().should("be.visible");
  cy.wait(2000);

}

AgentEnpalmentRequest908(){
  cy.wait(2000);
  cy.get(this.locators.agentEmpanelmentRequest).click({force: true} );
  cy.wait(2000);
  cy.get(this.locators.searchagent).click().should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.SearcButton).click();
  cy.wait(2000);
  cy.contains("Please enter the mandatory field").should("be.visible");
  cy.wait(2000);
}

AgentEnpalmentRequest909(){
  cy.wait(2000);
  cy.get(this.locators.agentEmpanelmentRequest).click({force: true} );
  cy.wait(2000);
  cy.get(this.locators.searchagent).click().should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.EnterAgentName).type("a")
  cy.wait(2000);
  cy.get(this.locators.SearcButton).click();
  cy.wait(2000);
  cy.contains("Agent name must be at least 2 characters long.").should("be.visible");
  cy.wait(2000);
}
AgentEnpalmentRequest910(){
  cy.wait(2000);
  cy.get(this.locators.agentEmpanelmentRequest).click({force: true} );
  cy.wait(2000);
  cy.get(this.locators.searchagent).click().should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.EnterAgentName).type("@#$%^@#$%")
  cy.wait(2000);
  cy.get(this.locators.SearcButton).click();
  cy.wait(2000);
  // cy.contains("Please enter the mandatory field.").should("be.visible");
  // cy.wait(2000);
}

AgentEnpalmentRequest911(){
  cy.wait(2000);
  cy.get(this.locators.agentEmpanelmentRequest).click({force: true} );
  cy.wait(2000);
  cy.get(this.locators.searchagent).click().should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.phonenumber).type("123456789876")
  cy.wait(2000);
  cy.get(this.locators.SearcButton).click();
  cy.wait(2000);
  cy.contains("Please enter the mandatory field").should("be.visible");
  cy.wait(2000);
}












   SearchAgent92(){

    cy.wait(2000);
    cy.get(this.locators.ClcikAgntEnplm).click();
    cy.wait(2000);
    cy.get(this.locators.searchagent).click();
    cy.wait(2000);
    cy.get(this.locators.SelectEPStatus).select("Pending Approval");
    cy.wait(2000);
    cy.get(this.locators.button).click();
    cy.wait(2000);
    cy.get('#action').click();

   }

AgentEnpalmentRequest981(){
const filePath = 'Aadhar-image.png';
cy.wait(2000);
cy.get(this.locators.ClcikAgncyEnplm).click();
cy.wait(2000);
cy.get(this.locators.ClickAddAgency).click();
cy.wait(2000);
cy.get(this.locators.fillAgencyName).type("ABCDEF");
cy.wait(2000);
cy.get(this.locators.selectRecommendingOfficer).select("danny ng");
cy.wait(2000);
cy.get(this.locators.selectAgencyType).select("Bank Staff");
cy.wait(2000);
cy.get(this.locators.selectAgencySubType).select("BCC");
cy.wait(2000);
cy.get(this.locators.fillpancard).type("ABCDE1234F");
cy.wait(2000);
cy.get(this.locators.fillTINNumber).type("123456");
cy.wait(2000);
//cy.get(this.locators.clickongenerateENcollectcode).click({force: true});
cy.wait(2000);

// Address Details
cy.get(this.locators.clickonaddressdetails).click();
cy.wait(2000);
cy.get(this.locators.primaryownerfirstname).type("Sachin");
cy.wait(2000);
cy.get(this.locators.primaryownerlastname).type("Tendulkar");
cy.wait(2000);
cy.get(this.locators.registeredagencyaddress).type("Azad maidam Mumbai Fort 4212345");
cy.wait(2000);

// Function to generate a random 10-digit number
function generateRandomMobileNumber() {
  const prefix = '07'; 
  const randomNumber = Math.floor(Math.random() * 10000000000);
  const paddedNumber = String(randomNumber).padStart(8, '0');
  return prefix + paddedNumber;
}

// Cypress test code
cy.get(this.locators.mobilenumber).type(generateRandomMobileNumber());
cy.wait(2000);
cy.get(this.locators.areacode).type("1234");
cy.wait(2000);
cy.get(this.locators.landlinenumber).type("1234567890");
cy.wait(2000);
cy.get(this.locators.selectstate).select("All");
cy.wait(2000);

// Function to generate a random email address
function generateRandomEmail() {
  const randomString = Math.random().toString(36).substring(2, 11);
  return `user_${randomString}@yopmail.com`; 
}

cy.get(this.locators.fillemailid).type(generateRandomEmail());
cy.wait(2000);
cy.get(this.locators.selectcity).select("All");
cy.wait(2000);
cy.get(this.locators.postalcode).type("123456");
cy.wait(2000);

// Banking details
cy.get(this.locators.clickonbankingdetails).click();
cy.wait(2000);
cy.get(this.locators.accountholdername).type("AJAY KUMAR");
cy.wait(2000);
cy.get(this.locators.bankaccountnumber).type("1234567890");
cy.wait(2000);
cy.get(this.locators.bankname).select("SBI");
cy.wait(2000);
cy.get(this.locators.bankbranchname).select("YamunaNagar");
cy.wait(2000);
cy.get(this.locators.gstnumber).type("ADCC123456ABCD");
cy.wait(2000);

// Documentation Details
cy.get(':nth-child(4) > .nav-link > span').click();
cy.wait(2000);

// // Click on various elements to interact with the UI
// cy.get('.col-md-12 > .table-responsive > .table > tbody > :nth-child(1) > :nth-child(6) > .ng-untouched').click();
// cy.wait(1000);
// cy.get(':nth-child(4) > :nth-child(6) > .ng-untouched').click();
// cy.wait(1000);
// cy.get(':nth-child(5) > :nth-child(6) > .ng-untouched').click();
// cy.wait(1000);
// cy.get(':nth-child(6) > :nth-child(6) > .ng-untouched').click();
// cy.wait(1000);
// cy.get(':nth-child(7) > :nth-child(6) > .ng-untouched').click();
cy.wait(1000);

// Ensure the parent div is visible before proceeding
//cy.get('.panel-collapse.collapse').should('be.visible', { timeout: 10000 });

// // Select the option in the dropdown
// cy.get('tbody > :nth-child(2) > :nth-child(2) > .form-control').select('Pan Card', { force: true });
// cy.wait(1000);

// // Upload files
// for (let i = 0; i < 7; i++) {
//   cy.get(`span.btn-file`).eq(i).should('be.visible');
//   cy.get(`span.btn-file input[type="file"]`).eq(i).then($input => {
//     $input.css('opacity', `${i}`).attr('disabled', false);
//     cy.wait(2000);
//     cy.wrap($input).selectFile('cypress/fixtures/Aadhar-image.png', { force: true });
//   });
//   cy.wait(1000);
// }

// // Ensure the parent div is visible before proceeding
// cy.get('.panel-collapse.collapse').should('be.visible', { timeout: 10000 });
// cy.wait(2000);

// Scope of work selection
cy.get(this.locators.scopeofword).click();
cy.wait(2000);
cy.get(this.locators.productgroup).select("All");
cy.wait(2000);
cy.get(this.locators.product).select("All");
cy.wait(2000);
cy.get(this.locators.subproduct).select("All");
cy.wait(2000);
cy.get(":nth-child(6) > .nav-link > span").click({force: true});
cy.wait(2000);
cy.get(this.locators.selectpg).select("All");
cy.wait(2000);
cy.get(this.locators.selectp).select("All");
cy.wait(2000);
cy.get(this.locators.selectsubp).select("All");
cy.wait(2000);
cy.get(this.locators.selectbucket).select("All");
cy.wait(2000);
cy.get(this.locators.selectcountry).select("All");
cy.wait(2000);
cy.get(this.locators.selectregion).select("All");
cy.wait(2000);
cy.get(this.locators.SelectState).select("All");
cy.wait(2000);
cy.get(this.locators.SelectCity).select("All");
cy.wait(2000);
cy.get(this.locators.selectmanager).select("Admin");
cy.wait(2000);
cy.get(this.locators.clickonARD).click();
cy.wait(2000);

// Get current date in DD-MM-YYYY format
const currentDate = new Date();
const day = String(currentDate.getDate()).padStart(2, '0');
const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are 0-based
const year = currentDate.getFullYear();
const formattedDate = `${day}-${month}-${year}`;

cy.get(this.locators.firstagreementdate).type(formattedDate);
cy.wait(1000);

// Set lastrenewaldate to be greater than firstagreementdate (e.g., one month later)
const futureDate = new Date(currentDate);
futureDate.setMonth(currentDate.getMonth() + 1);
const futureDay = String(futureDate.getDate()).padStart(2, '0');
const futureMonth = String(futureDate.getMonth() + 1).padStart(2, '0');
const futureYear = futureDate.getFullYear();
const formattedFutureDate = `${futureDay}-${futureMonth}-${futureYear}`;

cy.get(this.locators.lastrenewaldate).type(formattedFutureDate);
cy.wait(1000);

cy.get(this.locators.Contactexpiredate).type('30-12-2025');
cy.wait(1000);
cy.get(this.locators.submitagency).click({force: true});
cy.wait(2000);

   
  }
  AgentEnpalmentRequest982(){
    // const filePath = 'Cypress/fixtures/ReceiptSwiss.jpg'

    cy.wait(2000);
    cy.get(this.locators.usermngt).click().should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.AgentEntReqst).click();
    cy.wait(2000);
    cy.get(this.locators.FirstName).type("Pranshu").should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.LastName).type("Raj").should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.Agencyname).select("Arun").should('be.visible');
    cy.wait(2000);
    
    cy.get(this.locators.dilarID).type("123").should('be.visible');
    cy.wait(2000);
    
    cy.get(this.locators.dratrainingdate).type("16-07-2024").should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.DRANumb).type("1234567").should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.Idtype).select("Pan card").should('be.visible');
    cy.wait(2000)
    cy.get(this.locators.UDIDNumberr).type("12345678909876543").should('be.visible');
    cy.wait(2000);

    const filePath1 = 'Aadhar.png'
    cy.get('.upload-text').click();
    cy.wait(2000);
    cy.get('input[type="file"]').attachFile(filePath1);
    cy.wait(2000);

    cy.wait(2000);
    cy.get(this.locators.Departmentdesignation).click();
    cy.wait(2000);
    cy.get(this.locators.Add).click();
    cy.wait(2000);
    cy.get(this.locators.Department).select("Agency Backend");
    cy.wait(2000);
    cy.get(this.locators.designation).select("Agency Backend");
    cy.wait(2000);
    cy.get("div[class='router-container'] li:nth-child(4) a:nth-child(1) span:nth-child(1)").click().should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.Address).type(" AAAAAAAAAAAAAAAA XXXXXXXXXXXXXXXXXX BBBBBBBBBBBBBB CCCCCCCCCCCCCCC");
    cy.wait(2000);
    cy.get('#cityId').select('All').should('be.visible');
    cy.wait(2000);
    cy.get("select[name='city']").select("All").should('be.visible');
    cy.wait(2000);
    cy.get("input[placeholder='Enter Address Landmark']").type("xxxx Bank").should('be.visible');
    cy.wait(2000);
    cy.get("#pinId").type("845438");
    cy.wait(2000);
    cy.get(".col-md-2 > .form-control").select("LL",{force : true});
    cy.wait(2000);
    cy.get("input[placeholder='code']").type("3223").should('be.visible');
    cy.wait(2000);
    //cy.get("input[name='primaryMobileNumber']").type("352407");
    //cy.wait(2000);
    function generateRandomMobileNumber() {
      const prefix = '07'; // Assuming you want the number to start with '07'
      const randomNumber = Math.floor(Math.random() * 10000000000); // Generates an 8-digit number
      const paddedNumber = String(randomNumber).padStart(8, '0'); // Pads with leading zeros if necessary
      return prefix + paddedNumber;
    }
    // Cypress test code
    cy.get('input[name="primaryMobileNumber"]').type(generateRandomMobileNumber());
    cy.wait(2000);
    //cy.get("#emailId").type("pranshu@yopmail.com");
    //cy.wait(2000);
    function generateRandomEmail() {
      const randomString = Math.random().toString(36).substring(2, 11); // Generates a random string
      return `user_${randomString}@yopmail.com`; // Concatenate to form an email address
    }

    // Cypress test code
    cy.get("#emailId").type(generateRandomEmail());
    cy.wait(2000);
    cy.get("#DateOfBirth").type("11-06-20006");
    cy.wait(2000);
    cy.get(".ng-invalid.ng-dirty > :nth-child(1) > :nth-child(8) > .form-control").type(" Mr B Kumar",{force: true});
    cy.wait(2000);
    cy.get(this.locators.Banking_details).click().should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.cust_name).type("Pranshu raj").should('be.visible');
    cy.wait(2000);
    cy.get("input[placeholder='Enter Account Number']").type("456785678776543").should('be.visible');
    cy.wait(2000);
    cy.get("select[name='bankName']").select("BANK OF INDIA").should('be.visible');
    cy.wait(2000);
    cy.get("select[name='bankBranchId']").select("BANO").should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.ScopeOfWork).click().should('be.visible');
    cy.wait(2000);
    cy.get(".col-md-12 > .history-table > #flip-scroll > .table > tbody > tr.ng-star-inserted > :nth-child(1) > .form-control").select("All",{force: true});
    cy.wait(2000);
    cy.get(".col-md-12 > .history-table > #flip-scroll > .table > tbody > tr.ng-star-inserted > :nth-child(2) > .form-control").select("All",{force: true});
    cy.wait(2000);
    cy.get("tr.ng-star-inserted > :nth-child(3) > .form-control").select("All",{force: true}).should('be.visible');
    cy.wait(2000);
    cy.get(":nth-child(4) > #Select").select("All").should('be.visible');
    cy.wait(2000);
    cy.get("tr.ng-star-inserted > :nth-child(5) > .form-control").select("All",{force: true}).should('be.visible');
    cy.wait(2000);
    cy.get("tr.ng-star-inserted > :nth-child(6) > .form-control").select("All",{force: true}).should('be.visible');
    cy.wait(2000);
    cy.get("tr.ng-star-inserted > :nth-child(7) > .form-control").select("All",{force: true}).should('be.visible');
    cy.wait(2000);
    cy.get(":nth-child(8) > #Select").select("All",{force: true}).should('be.visible');
    cy.wait(2000);
    cy.get(":nth-child(9) > #Select").select("All",{force: true}).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.PlaceOfWork).click().should('be.visible');
    cy.wait(2000);
    cy.get('.panel-body > .col-md-6 > .form-control').type("845438").should('be.visible');
    cy.wait(2000);
    cy.get('[heading="Load"] > .panel > .panel-heading > .panel-title > .accordion-toggle').click().should('be.visible');
    cy.wait(2000);
    cy.get(".panel-body > .row > .col-md-6 > .form-control").type("2").should('be.visible');
    cy.wait(2000);
    cy.get('[heading="Skills"] > .panel > .panel-heading > .panel-title > .accordion-toggle').click().should('be.visible');
    cy.wait(2000);
    cy.get("input[name='experiance']").type("2").should('be.visible');
    cy.wait(2000);
    cy.get('[heading="Skills"] > .panel > .panel-collapse > .panel-body > .row > :nth-child(2) > .form-control').select("Self-cure customer").should('be.visible');
    cy.wait(2000);
    cy.get('[heading="Skills"] > .panel > .panel-collapse > .panel-body > .row > :nth-child(3) > .form-control').select("Hindi").should('be.visible');
    cy.wait(2000);
    cy.get('[heading="Skills"] > .panel > .panel-collapse > .panel-body > .row > :nth-child(4) > .form-control').select("LH").should('be.visible');
    cy.wait(2000);
    cy.get('[heading="Documentation Details"] > .panel > .panel-heading > .panel-title > .accordion-toggle').click().should('be.visible');
    cy.wait(2000);
    cy.get(".col-md-12 > .table-responsive > .table > tbody > :nth-child(1) > :nth-child(2) > .form-control").select("Pan Card").should('be.visible');
    cy.wait(2000)
    cy.get("body > app-root:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > create-agent:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > div:nth-child(6) > div:nth-child(2) > accordion:nth-child(1) > accordion-group:nth-child(8) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > app-documents:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(4) > div:nth-child(1) > span:nth-child(1) > input:nth-child(2)").selectFile(filePath1, { force: true });
    cy.wait(2000);
    cy.get("tbody > :nth-child(2) > :nth-child(2) > .form-control").select("Aadhar Card").should('be.visible');
    cy.wait(2000);
    cy.get("body > app-root:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > create-agent:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > div:nth-child(6) > div:nth-child(2) > accordion:nth-child(1) > accordion-group:nth-child(8) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > app-documents:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(2) > td:nth-child(4) > div:nth-child(1) > span:nth-child(1) > input:nth-child(2)").selectFile(filePath1, { force: true });
    cy.wait(2000);
    cy.get("tbody tr:nth-child(3) td:nth-child(2) select:nth-child(1)").select("Agency ID Card").should('be.visible');
    cy.wait(2000)
     cy.get("body > app-root:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > create-agent:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > div:nth-child(6) > div:nth-child(2) > accordion:nth-child(1) > accordion-group:nth-child(8) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > app-documents:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(3) > td:nth-child(4) > div:nth-child(1) > span:nth-child(1) > input:nth-child(2)").selectFile(filePath1,{force:true});
     cy.wait(2000);
     cy.get("tbody > :nth-child(4) > :nth-child(2) > .form-control").select("HOC Approval").should('be.visible');
     cy.wait(2000);
     cy.get("body > app-root:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > create-agent:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > div:nth-child(6) > div:nth-child(2) > accordion:nth-child(1) > accordion-group:nth-child(8) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > app-documents:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(4) > td:nth-child(4) > div:nth-child(1) > span:nth-child(1) > input:nth-child(2)").selectFile(filePath1,{force:true});
     cy.wait(2000);
     cy.get("tbody > :nth-child(5) > :nth-child(2) > .form-control").select("Police Verification Certificate").should('be.visible');
     cy.wait(2000);
     cy.get("body > app-root:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > create-agent:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > div:nth-child(6) > div:nth-child(2) > accordion:nth-child(1) > accordion-group:nth-child(8) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > app-documents:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(5) > td:nth-child(4) > div:nth-child(1) > span:nth-child(1) > input:nth-child(2)").selectFile(filePath1,{force:true});
     cy.wait(2000);
     cy.get('[heading="Employment and Renewal Details"] > .panel > .panel-heading > .panel-title > .accordion-toggle').click().should('be.visible');
     cy.wait(2000);

     cy.get('#CollectionDate').click().should('be.visible');
     cy.wait(2000)
    //choose previous month
     cy.get("button[class='current ng-star-inserted'] span").click()
     cy.wait(2000)
    //choose next month 
      cy.get("tbody > :nth-child(1) > :nth-child(1) > span").click()
      cy.wait(2000);
      cy.get('.bs-datepicker-container').contains('8').click()
      
      cy.wait(2000);
    //choose date 2

    // Function to get the current date in DD-MM-YYYY format
function getCurrentDate() {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = today.getFullYear();
  return `${day}-${month}-${year}`;
}

// Now integrating it into your block
cy.get("#CollectionDate").type(getCurrentDate()).should('be.visible'); // Current date
cy.wait(2000);
cy.get("#RenewalDate").type(getCurrentDate()).should('be.visible');;
cy.wait(2000);
cy.get("#ExpiryDate").type("15-07-2026").should('be.visible');
cy.wait(2000);
cy.get(".panel-body > .row > .col-md-12 > .form-control")
  .type("aaaaaa bbbbbbbbb cccccccccc dddddddddd 123")
  .should('be.visible');
cy.wait(2000);

    
    
   
  }
  AgentEnpalmentRequest983(){
    const filePath = 'Cypress/fixtures/ReceiptSwiss.jpg'

    cy.wait(2000);
    cy.get(this.locators.usermngt).click().should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.AgentEntReqst).click();
    cy.wait(2000);
    // cy.get(this.locators.ClickOnAdd_Agent).click();
    // cy.wait(1000);
    cy.get(':nth-child(10) > .nav-link > span').click().should('be.visible');
    cy.wait(2000);
    cy.get(".col-md-12 > .table-responsive > .table > tbody > :nth-child(1) > :nth-child(2) > .form-control").select("Pan Card").should('be.visible');
    cy.wait(2000)
    
    cy.get("tbody > :nth-child(2) > :nth-child(2) > .form-control").select("Aadhar Card").should('be.visible');
    cy.wait(2000);
   
    cy.get("tbody tr:nth-child(3) td:nth-child(2) select:nth-child(1)").select("Agency ID Card").should('be.visible');
    cy.wait(2000)
     
     cy.get("tbody > :nth-child(4) > :nth-child(2) > .form-control").select("HOC Approval").should('be.visible');
     cy.wait(2000);
    
     cy.get("tbody > :nth-child(5) > :nth-child(2) > .form-control").select("Police Verification Certificate").should('be.visible');
     cy.wait(2000);
     
  }
  AgentEnpalmentRequest984(){
    // Navigate to User Management section
cy.get(this.locators.clickonusermanagement).click();
cy.wait(2000);
cy.get('body > app-root:nth-child(1) > div:nth-child(1) > div:nth-child(2) > app-navbar:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(4) > a:nth-child(1) > span:nth-child(2)').click();
cy.wait(2000);




        // Now that we have both email and mobile number, we can use them in other parts of the script
        cy.get(':nth-child(3) > :nth-child(1) > #Select').select("Disabled");
        cy.wait(2000);
        cy.get('.btn').click( {force: true} );
        cy.wait(2000);
        cy.get('tbody > :nth-child(1) > :nth-child(8) > input').click();
        cy.wait(2000);
        cy.get('tbody > :nth-child(1) > .ng-star-inserted > a').click();
        cy.wait(2000);
        cy.get('accordion-group[heading="Local Address Details"] button[type="button"]').click();
        cy.wait(2000);
// Get the email and mobile number from the website (assuming both are in elements with proper selectors)
cy.get('input[placeholder="Enter E-mail Id"]')  // Change the selector to the actual element containing the email
  .invoke('text')  // Get the text value (email)
  .then((email) => {
    cy.get('input[name="primaryMobileNumber"]')  // Change the selector to the actual element containing the mobile number
      .invoke('text')  // Get the text value (mobile number)
      .then((mobileNumber) => {
        // Paste the copied email into the email input field in Local Address Details
        
      });     
    });
   

    cy.wait(2000);
    cy.get(this.locators.usermngt).click().should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.AgentEntReqst).click();
    cy.wait(2000);
    cy.get("#fname").type("Tina").should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.LastName).type("m").should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.Agencyname).select("Arun").should('be.visible');
    cy.wait(2000);
    
    cy.get(this.locators.dilarID).type("123").should('be.visible');
    cy.wait(2000);
    
    cy.get(this.locators.dratrainingdate).type("16-07-2024").should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.DRANumb).type("1234567").should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.Idtype).select("Pan card").should('be.visible');
    cy.wait(2000);
    const filePath = 'Cypress/fixtures/ReceiptSwiss.jpg';
    cy.get(this.locators.UDIDNumberr).type("12345678909876543").should('be.visible');
    cy.wait(2000);
    cy.get('body > app-root:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > create-agent:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > div:nth-child(6) > div:nth-child(1) > span:nth-child(2) > input:nth-child(1)').selectFile(filePath,{force: true});
    cy.wait(2000);
    cy.get('[heading="Departments & Designations"] > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(2000);
    cy.get(this.locators.Add).click();
    cy.wait(2000);
    cy.get(this.locators.Department).select("Agency Backend");
    cy.wait(2000);
    cy.get(this.locators.designation).select("Agency Backend");
    cy.wait(2000);
    cy.get('[heading="Local Address Details"] > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click().should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.Address).type(" AAAAAAAAAAAAAAAA XXXXXXXXXXXXXXXXXX BBBBBBBBBBBBBB CCCCCCCCCCCCCCC");
    cy.wait(2000);
    cy.get('.ng-invalid.ng-dirty > :nth-child(1) > :nth-child(2) > .row > :nth-child(1) > .form-control').select('All').should('be.visible');
    cy.wait(2000);
    cy.get("select[name='city']").select("All").should('be.visible');
    cy.wait(2000);
    cy.get("input[placeholder='Enter Address Landmark']").type("xxxx Bank").should('be.visible');
    cy.wait(2000);
    cy.get("#pin").type("845438");
    cy.wait(2000);
    cy.get(".col-md-2 > .form-control").select("LL",{force : true});
    cy.wait(2000);
    cy.get("input[placeholder='code']").type("3223").should('be.visible');
    cy.wait(2000);
    
    cy.get(".col-md-4 > div > .form-control").type("3322114455");
    cy.wait(2000);
    cy.get('.ng-invalid.ng-dirty > :nth-child(1) > :nth-child(6) > .form-control').type("tina07@yopmail.com");
    cy.wait(2000);
    cy.get('.ng-invalid.ng-dirty > :nth-child(1) > :nth-child(9) > .form-control').type('A');
    cy.wait(2000);
    cy.get("#DateOfBirth").type("11-06-20006");
    cy.wait(2000);
    cy.get(".ng-invalid.ng-dirty > :nth-child(1) > :nth-child(8) > .form-control").type(" Mr B Kumar",{force: true});
    cy.wait(2000);
    cy.get(this.locators.Banking_details).click().should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.cust_name).type("Tina").should('be.visible');
    cy.wait(2000);
    cy.get("input[placeholder='Enter Account Number']").type("456785678776543").should('be.visible');
    cy.wait(2000);
    cy.get("select[name='bankName']").select("BANK OF INDIA").should('be.visible');
    cy.wait(2000);
    cy.get("select[name='bankBranchId']").select("BANO").should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.ScopeOfWork).click().should('be.visible');
    cy.wait(2000);
    cy.get(".col-md-12 > .history-table > #flip-scroll > .table > tbody > tr.ng-star-inserted > :nth-child(1) > .form-control").select("All",{force: true});
    cy.wait(2000);
    cy.get(".col-md-12 > .history-table > #flip-scroll > .table > tbody > tr.ng-star-inserted > :nth-child(2) > .form-control").select("All",{force: true});
    cy.wait(2000);
    cy.get("tr.ng-star-inserted > :nth-child(3) > .form-control").select("All",{force: true}).should('be.visible');
    cy.wait(2000);
    cy.get(":nth-child(4) > #Select").select("All").should('be.visible');
    cy.wait(2000);
    cy.get("tr.ng-star-inserted > :nth-child(5) > .form-control").select("All",{force: true}).should('be.visible');
    cy.wait(2000);
    cy.get("tr.ng-star-inserted > :nth-child(6) > .form-control").select("All",{force: true}).should('be.visible');
    cy.wait(2000);
    cy.get("tr.ng-star-inserted > :nth-child(7) > .form-control").select("All",{force: true}).should('be.visible');
    cy.wait(2000);
    cy.get(":nth-child(8) > #Select").select("All",{force: true}).should('be.visible');
    cy.wait(2000);
    cy.get(":nth-child(9) > #Select").select("All",{force: true}).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.PlaceOfWork).click().should('be.visible');
    cy.wait(2000);
    cy.get('.panel-body > .col-md-6 > .form-control').type("845438").should('be.visible');
    cy.wait(2000);
    cy.get('[heading="Load"] > .panel > .panel-heading > .panel-title > .accordion-toggle').click().should('be.visible');
    cy.wait(2000);
    cy.get(".panel-body > .row > .col-md-6 > .form-control").type("2").should('be.visible');
    cy.wait(2000);
    cy.get('[heading="Skills"] > .panel > .panel-heading > .panel-title > .accordion-toggle').click().should('be.visible');
    cy.wait(2000);
    cy.get("input[name='experiance']").type("2").should('be.visible');
    cy.wait(2000);
    cy.get('[heading="Skills"] > .panel > .panel-collapse > .panel-body > .row > :nth-child(2) > .form-control').select("Self-cure customer").should('be.visible');
    cy.wait(2000);
    cy.get('[heading="Skills"] > .panel > .panel-collapse > .panel-body > .row > :nth-child(3) > .form-control').select("Hindi").should('be.visible');
    cy.wait(2000);
    cy.get('[heading="Skills"] > .panel > .panel-collapse > .panel-body > .row > :nth-child(4) > .form-control').select("LH").should('be.visible');
    cy.wait(2000);
    cy.get('[heading="Documentation Details"] > .panel > .panel-heading > .panel-title > .accordion-toggle').click().should('be.visible');
    cy.wait(2000);
    cy.get(".col-md-12 > .table-responsive > .table > tbody > :nth-child(1) > :nth-child(2) > .form-control").select("Pan Card").should('be.visible');
    cy.wait(2000)
    cy.get("body > app-root:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > create-agent:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > div:nth-child(6) > div:nth-child(2) > accordion:nth-child(1) > accordion-group:nth-child(8) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > app-documents:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(4) > div:nth-child(1) > span:nth-child(1) > input:nth-child(2)").selectFile(filePath, { force: true });
    cy.wait(2000);
    cy.get("tbody > :nth-child(2) > :nth-child(2) > .form-control").select("Aadhar Card").should('be.visible');
    cy.wait(2000);
    cy.get("body > app-root:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > create-agent:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > div:nth-child(6) > div:nth-child(2) > accordion:nth-child(1) > accordion-group:nth-child(8) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > app-documents:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(2) > td:nth-child(4) > div:nth-child(1) > span:nth-child(1) > input:nth-child(2)").selectFile(filePath, { force: true });
    cy.wait(2000);
    cy.get("tbody tr:nth-child(3) td:nth-child(2) select:nth-child(1)").select("Agency ID Card").should('be.visible');
    cy.wait(2000)
     cy.get("body > app-root:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > create-agent:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > div:nth-child(6) > div:nth-child(2) > accordion:nth-child(1) > accordion-group:nth-child(8) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > app-documents:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(3) > td:nth-child(4) > div:nth-child(1) > span:nth-child(1) > input:nth-child(2)").selectFile(filePath,{force:true});
     cy.wait(2000);
     cy.get("tbody > :nth-child(4) > :nth-child(2) > .form-control").select("HOC Approval").should('be.visible');
     cy.wait(2000);
     cy.get("body > app-root:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > create-agent:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > div:nth-child(6) > div:nth-child(2) > accordion:nth-child(1) > accordion-group:nth-child(8) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > app-documents:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(4) > td:nth-child(4) > div:nth-child(1) > span:nth-child(1) > input:nth-child(2)").selectFile(filePath,{force:true});
     cy.wait(2000);
     cy.get("tbody > :nth-child(5) > :nth-child(2) > .form-control").select("Police Verification Certificate").should('be.visible');
     cy.wait(2000);
     cy.get("body > app-root:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > create-agent:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > div:nth-child(6) > div:nth-child(2) > accordion:nth-child(1) > accordion-group:nth-child(8) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > app-documents:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(5) > td:nth-child(4) > div:nth-child(1) > span:nth-child(1) > input:nth-child(2)").selectFile(filePath,{force:true});
     cy.wait(2000);
     cy.get('[heading="Employment and Renewal Details"] > .panel > .panel-heading > .panel-title > .accordion-toggle').click().should('be.visible');
     cy.wait(2000);

     cy.get('#CollectionDate').click().should('be.visible');
     cy.wait(2000)
    //choose previous month
     cy.get("button[class='current ng-star-inserted'] span").click()
     cy.wait(2000)
    //choose next month 
      cy.get("tbody > :nth-child(1) > :nth-child(1) > span").click()
      cy.wait(2000);
      cy.get('.bs-datepicker-container').contains('8').click()
      
      cy.wait(2000);
    //choose date 2

    // Function to get the current date in DD-MM-YYYY format
function getCurrentDate() {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = today.getFullYear();
  return `${day}-${month}-${year}`;
}

// Now integrating it into your block
cy.get("#CollectionDate").type(getCurrentDate()).should('be.visible'); // Current date
cy.wait(2000);
cy.get("#RenewalDate").type(getCurrentDate()).should('be.visible');;
cy.wait(2000);
cy.get("#ExpiryDate").type("15-07-2026").should('be.visible');
cy.wait(2000);
cy.get(".panel-body > .row > .col-md-12 > .form-control")
  .type("aaaaaa bbbbbbbbb cccccccccc dddddddddd 123")
  .should('be.visible');
cy.wait(2000);
cy.get(':nth-child(6) > :nth-child(3) > .btn-primary').click();
cy.wait(2000);

    

  }

}

export default UserManagementPage;
