class SignalRNotificationPage {
  constructor(locators) {
    this.locators = locators;
  }

  downloadTemplate() {

    cy.contains("Allocation").click({force:true});
    cy.wait(2000);
    cy.contains("Agency Bulk Upload").click({force:true});
    cy.wait(2000);
    cy.contains("Agency Bulk Allocation Account Level").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.teleCallingAgencyRadioDownload).check({ force: true });
    cy.wait(2000);
    cy.get(this.locators.downloadTemplateButton).click({ force: true });
  }
 downloadTemplatefield() {

    cy.contains("Allocation").click({force:true});
    cy.wait(2000);
    cy.contains("Agency Bulk Upload").click({force:true});
    cy.wait(2000);
    cy.contains("Agency Bulk Allocation Account Level").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.FieldAgencyRadioDownload).check({ force: true });
    cy.wait(2000);

  }
  downloadTemplateAgentBulkAllocationAccountLevelAgent(){
      cy.contains("Allocation").click({force:true});
    cy.wait(2000);
    cy.contains("Agent Bulk Upload").click({force:true});
    cy.wait(2000);
    cy.contains("Agent Bulk Allocation Account Level").click({force:true});
    cy.wait(2000);
    cy.get("#downloadTemplateType2").click({ force: true });
    cy.wait(2000);
    cy.get("#downloadTemplate1").click({force:true});


  }

  uploadFilefield(fileName) {

    cy.get(this.locators.fieldallocationType1).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.chooseFileInput)
        .selectFile(`cypress/fixtures/${fileName}`, {
            force: true
        });

    cy.wait(2000);
    cy.get(this.locators.uploadButton).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.okButton).click();
}


uploadFileAgentBulkAllocationAccountLevelAgent(excelFileName){
     cy.get("#AllocationType2").click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.chooseFileInput)
        .selectFile(`cypress/fixtures/${excelFileName}`, {
            force: true
        });

    cy.wait(2000);
    cy.get(this.locators.uploadButton).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.okButton).click();

}
uploadFile(fileName) {

    cy.get(this.locators.teleCallingAgencyRadioUpload).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.chooseFileInput)
        .selectFile(`cypress/fixtures/${fileName}`, {
            force: true
        });

    cy.wait(2000);
    cy.get(this.locators.uploadButton).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.okButton).click();
}
  SignalRNotification_01() {

    cy.get(this.locators.icon).click({ force: true });
  }

  SignalRNotification_02() {
    cy.get(this.locators.icon).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.panel).scrollIntoView().should('be.visible');
  }

  SignalRNotification_03() {
    cy.get(this.locators.icon).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.panel).scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.emptypanel).should('have.length', 0);
  }

  SignalRNotification_04() {
    cy.get(this.locators.icon).click({ force: true });
    cy.wait(2000);
    cy.contains("Show Only Unread").should('exist');
    cy.wait(2000);
    cy.get(this.locators.panel).scrollIntoView().should('be.visible');
  }

  SignalRNotification_05() {
    cy.get(this.locators.icon).click({ force: true });
    cy.wait(2000);
    cy.contains("Show Only Unread").should('exist');
    cy.wait(2000);
    cy.get(this.locators.unreadToggle).click({ force: true });
  }

  SignalRNotification_06() {
    cy.get(this.locators.icon).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.panel).scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('Clear All').should('exist').should('be.disabled');
  }

  SignalRNotification_07() {
   cy.get(this.locators.icon).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.panel).scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('Mark All as Read').should('exist').should('be.disabled');;
  }

  SignalRNotification_08() {
    cy.wait(2000);
    cy.get(this.locators.clearAllButton).should('be.visible').click({ force: true });
  }

  SignalRNotification_09() {
    cy.wait(2000);
    cy.get(this.locators.markAllReadButton).should('be.visible').click({ force: true });
  }

  SignalRNotification_10() {
    cy.wait(2000);
    cy.get(this.locators.icon).click({ force: true });
    cy.get(this.locators.panel).scrollIntoView().should('be.visible');
  }

SignalRNotification_11() {
    cy.wait(2000);
    cy.get(this.locators.icon).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.panel).scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.get('body').click(0, 0);
    cy.wait(2000);
    cy.get(this.locators.panel).should('not.exist');


}
SignalRNotification_12() {

    cy.get(this.locators.icon).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.panel).scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('No notifications found').should('be.visible');
    cy.wait(2000);
    cy.contains('Show Only Unread').should('be.visible');
    cy.wait(2000);
    cy.contains('Clear All').should('be.visible');
    cy.wait(2000);
    cy.url("https://scbdemo.sumeruentiger.com/web/#/login").should('include', '/dashboard');
}

  SignalRNotification_13() {
    // Step: Open and close panel multiple times
    // Expected: Panel should work consistently
    for (let i = 0; i < 3; i++) {
            cy.get(this.locators.icon).click({ force: true });
            cy.get(this.locators.panel).scrollIntoView().should('be.visible');
            cy.get(this.locators.icon).click({ force: true });
        }
  }

  SignalRNotification_14() {
    cy.get(this.locators.icon).should('be.visible').click({ force: true });
  }

  SignalRNotification_15() {

    // Verify dashboard is loaded
    cy.url("https://scbdemo.sumeruentiger.com/web/#/login").then((currentUrl) => {
    cy.wait(2000);  
    cy.get(this.locators.icon).click({ force: true });
    cy.wait(2000);  
    cy.get(this.locators.panel).scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains("Account Search").should('be.visible');
    cy.url("https://scbdemo.sumeruentiger.com/web/#/login").should('eq', currentUrl);
    });
}

  SignalRNotification_16() {
        cy.get(this.locators.icon).click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.panel).scrollIntoView().should('be.visible');
        cy.wait(2000);
       cy.get('.notification-content-container').first().find('.notification-header').should('be.visible');
       cy.get('.notification-content-container').first().find('.notification-content').should('be.visible');

  }



  SignalRNotification_18() {
    cy.get(this.locators.icon).should('be.visible').click({ force: true });
    cy.wait(5000);
    cy.contains('.notification-header', 'Account Level Agency Bulk Allocation Processed').scrollIntoView().should('be.visible');
  }
  

  SignalRNotification_19() {
    cy.wait(2000);
    cy.get(this.locators.icon).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.panel).scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.get('.notification-content-container').should('have.length.greaterThan', 0);
    cy.wait(2000);
   cy.get('.notification-content').then(($contents) => {

    const fileNames = [];

    [...$contents].forEach((el) => {

        const text = el.innerText;

        // Extract filename inside quotes
        const match = text.match(/"([^"]+\.xlsx)"/);

        if (match) {
            fileNames.push(match[1]);
        }
    });

    cy.log('File Names: ' + fileNames.join(', '));

    // Verify there are no duplicate filenames
    expect(new Set(fileNames).size).to.equal(fileNames.length);
});
}
SignalRNotification_20() {
    let latestFile;
    cy.wait(2000);
    cy.get(this.locators.panel).scrollIntoView.should('be.visible');
    cy.wait(2000);
   cy.get('.user-notification-list > :nth-child(1)')
  .find('.notification-content')
  .invoke('text')
  .then((text) => {

      const match = text.match(/PrimaryTeleCallingAgency_Accountlevel_\d+\.xlsx/);

      latestFile = match[0];

      cy.log(latestFile);

      // Example assertion
      expect(latestFile).to.contain('PrimaryTeleCallingAgency_Accountlevel_');
  });
}
  SignalRNotification_21() {
        cy.get(this.locators.panel).scrollIntoView().should('be.visible');
        cy.wait(5000);
        cy.get('.user-notification-container')
    .each(($el) => {
        cy.wrap($el)
            .should('have.css', 'background-color', 'rgb(255, 255, 255)');
    });
    cy.wait(2000);
    cy.contains("Mark All as Read").scrollIntoView().click({force:true});
    cy.wait(2000);
    cy.get(this.locators.unreadToggle).click({force:true});
       cy.get('.user-notification-list > :nth-child(1)')
  .invoke('css', 'background-color')
  .then((unreadColor) => {

      cy.get('.user-notification-list > :nth-child(2)')
        .invoke('css', 'background-color')
        .then((readColor) => {

            expect(unreadColor).to.not.equal(readColor);

        });

  });
  }

  SignalRNotification_22() {

    cy.wait(5000);
    cy.contains('.notification-header', 'Account Level Agency Bulk Allocation Processed').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(8000);
    cy.contains('Processed').should('be.visible');
  }

  SignalRNotification_23() {
     cy.get(this.locators.panel).scrollIntoView().should('be.visible');
     cy.wait(5000);
    cy.get(".user-notification-list > :nth-child(1)").click({force:true});

  }

  SignalRNotification_24() {
    cy.get(this.locators.panel).scrollIntoView().should('be.visible');
    cy.wait(5000);
    cy.get(this.locators.markAllReadButton).should('be.visible').click({ force: true });
  }

  SignalRNotification_25() {
    cy.get(this.locators.panel).scrollIntoView().should('be.visible');
    cy.wait(5000);
    cy.get(this.locators.clearAllButton).should('be.visible').click({ force: true });
  }

  SignalRNotification_26() {
    cy.get(this.locators.panel).scrollIntoView().should('exist');
    cy.wait(5000);
    cy.get(this.locators.unreadToggle).click({ force: true });
  }

  SignalRNotification_27() {
    cy.get(this.locators.panel).scrollIntoView().should('exist');
    cy.wait(5000);
    cy.get(this.locators.unreadToggle).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.unreadToggle).click({ force: true });
  }

  SignalRNotification_28() {
    cy.contains("Clear All").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.unreadToggle).click({ force: true });
  }

  SignalRNotification_29(beforeCount) {

    // Verify badge exists after upload
    cy.get('.badge')
        .should('exist')
        .invoke('text')
        .then((text) => {

            const afterCount = Number(text.trim());

            cy.log('Before Count : ' + beforeCount);
            cy.log('After Count : ' + afterCount);

            expect(afterCount).to.equal(beforeCount + 1);

        });

}

  SignalRNotification_30() {
   cy.get('.user-notification-list').scrollTo('bottom');
  }


  SignalRNotification_33() {

    let notificationText = '';
    cy.get(this.locators.panel).should('exist');
    cy.wait(2000);
    cy.get('.user-notification-list > :nth-child(1) .notification-content')
        .invoke('text')
        .then((text) => {

            notificationText = text.trim();

            cy.log('Notification Before Refresh: ' + notificationText);
            cy.reload();
            cy.wait(5000);
            cy.get(this.locators.icon).click({ force: true });
            cy.get(this.locators.panel)
                .should('exist');
            cy.get('.user-notification-list > :nth-child(1) .notification-content')
                .should('contain.text', notificationText);

        });

}


  SignalRNotification_36(excelFileName) {
    cy.wait(2000);
    cy.get(this.locators.teleCallingAgencyRadioUpload).check({ force: true });
    cy.wait(2000);
    cy.get(this.locators.chooseFileInput).selectFile(`cypress/fixtures/${excelFileName}`, { force: true });
    cy.wait(2000);
    cy.get(this.locators.uploadButton).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.confirmationPopup).should('be.visible');


}

 SignalRNotification_37(excelFileName) {
    cy.wait(2000);
    cy.get(this.locators.teleCallingAgencyRadioUpload).check({ force: true });
    cy.wait(2000);
    cy.get(this.locators.chooseFileInput).selectFile(`cypress/fixtures/${excelFileName}`, { force: true });
    cy.wait(2000);
    cy.get(this.locators.uploadButton).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.confirmationPopup).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.confirmationPopup).should('contain.text', excelFileName);
    cy.wait(2000);
    cy.get(this.locators.confirmationPopup).should('contain.text', 'Confirm File Upload?');
}
 SignalRNotification_38(excelFileName) {

    cy.get(this.locators.teleCallingAgencyRadioUpload).check({ force: true })
    cy.wait(2000);
    cy.get(this.locators.chooseFileInput).selectFile(`cypress/fixtures/${excelFileName}`, { force: true });
    cy.wait(2000);
    cy.get(this.locators.uploadButton).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.confirmationPopup).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.okButton).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.confirmationPopup).should('not.exist');
   
}

  SignalRNotification_39(excelFileName) {
    cy.wait(2000);
    cy.get(this.locators.teleCallingAgencyRadioUpload).check({ force: true });
    cy.wait(2000);
    cy.get(this.locators.chooseFileInput).selectFile(`cypress/fixtures/${excelFileName}`, { force: true });
    cy.wait(2000);
    cy.get(this.locators.uploadButton).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.confirmationPopup).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.confirmationPopup).should('contain.text', excelFileName);
    cy.wait(2000);
    cy.get(this.locators.closePopupButton).should('be.visible').click({ force: true });
  }

  SignalRNotification_40(excelFileName) {
    cy.wait(2000);
    cy.get(this.locators.teleCallingAgencyRadioUpload).check({ force: true });
    cy.wait(2000);
    cy.get(this.locators.chooseFileInput).selectFile(`cypress/fixtures/${excelFileName}`, { force: true });
    cy.wait(2000);
    cy.get(this.locators.uploadButton).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.confirmationPopup).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.closePopupButton).should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.confirmationPopup).should('not.exist');
}
 
  SignalRNotification_42(excelFileName) {

    cy.get(this.locators.teleCallingAgencyRadioUpload).check({ force: true });
    cy.wait(2000);
    cy.get(this.locators.chooseFileInput).selectFile(`cypress/fixtures/${excelFileName}`, { force: true });
    cy.wait(2000);
    cy.get(this.locators.uploadButton).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.confirmationPopup).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.okButton).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.successToast).should('be.visible');
}

  SignalRNotification_43(excelFileName) {

    cy.get(this.locators.teleCallingAgencyRadioUpload).check({ force: true });
    cy.wait(2000);
    cy.get(this.locators.chooseFileInput).selectFile(`cypress/fixtures/${excelFileName}`, { force: true });
    cy.wait(2000);
    cy.get(this.locators.uploadButton).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.okButton).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.successToast)
        .invoke('text')
        .should('match', /Transaction\s*ID[:\s]*\d+/i);
}

  

  SignalRNotification_47(excelFileName) {
     cy.get(this.locators.teleCallingAgencyRadioUpload).check({ force: true });
    cy.wait(2000);
    cy.get(this.locators.chooseFileInput).selectFile(`cypress/fixtures/${excelFileName}`, { force: true });
    cy.wait(2000);
    cy.get(this.locators.uploadButton).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.okButton).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.toastCloseIcon).should('be.visible').click({ force: true });
  }

 SignalRNotification_48(excelFileName) {

    this.uploadFile(excelFileName);
    cy.get(this.locators.teleCallingAgencyRadioUpload).check({ force: true });
    cy.wait(2000);
    cy.get(this.locators.chooseFileInput).selectFile(`cypress/fixtures/${excelFileName}`, { force: true });
    cy.wait(2000);
    cy.get(this.locators.uploadButton).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.okButton).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.errorToast).should('be.visible');

}

  SignalRNotification_49(excelFileName) {

    this.uploadFile(excelFileName);
    cy.get(this.locators.confirmationPopup).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.okButton).click({ force: true });
    cy.get(2000);
    cy.get(this.locators.errorToast)
        .should('be.visible')
        .invoke('text')
        .then((text) => {

            expect(text.trim()).to.not.equal('');

            cy.log(text);

        });

}

 

  SignalRNotification_67() {
    // Step: Click notification
    // Expected: Allocation Status page should open
    cy.get(this.locators.notificationItem).first().click({ force: true });
  }

  SignalRNotification_68() {
    // Step: Navigate via notification
    // Expected: Transaction ID should be prefilled
    cy.get(this.locators.notificationItem).first().click({ force: true });
  }

  SignalRNotification_69() {
    // Step: Click search
    // Expected: Correct record should be displayed
    cy.get(this.locators.searchButton).should('be.visible').click({ force: true });
  }

  SignalRNotification_70() {
    cy.wait(8000);
    cy.get('.user-notification-list > :nth-child(1)').click({ force: true });
    cy.wait(5000);
    cy.contains('.xlsx').scrollIntoView().should('be.visible');
    cy.contains('Processed').scrollIntoView().should('be.visible');


}

  SignalRNotification_72() {
     cy.wait(8000);
    cy.get('.user-notification-list > :nth-child(1)').click({ force: true });
    cy.wait(5000);
    cy.get(this.locators.downloadLink).scrollIntoView().click({ force: true });
  }

  SignalRNotification_73() {
    cy.get('.user-notification-list > :nth-child(1)').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.pagination).should('be.visible');
  }

 

  SignalRNotification_76(excelFileName) {
    
    cy.wait(8000);
    cy.get('.user-notification-list > :nth-child(1)').click({ force: true });
    cy.wait(8000);
    cy.contains('Failed').should('exist');
        

}

  SignalRNotification_78() {
      cy.get(this.locators.panel).scrollIntoView().should('be.visible');
      cy.wait(2000);
      cy.contains("Failed").scrollIntoView().should('exist');
  }

  SignalRNotification_79() {
    cy.get(this.locators.panel).scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.get('.user-notification-list > :nth-child(1)')
  .invoke('text')
  .then((text) => {
      cy.log(text);
      console.log(text);
  });
  }

  SignalRNotification_80() {
        cy.get(this.locators.panel).scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.contains("Account Level Agency Bulk Allocation Failed").scrollIntoView().should('exist');
      
  }

  SignalRNotification_81() {
          cy.get(this.locators.timestamp).should('exist');
  }


  SignalRNotification_83() {
    cy.get(this.locators.removeIcon).first().should('be.visible').click({ force: true });
  }

  SignalRNotification_84() {

    cy.get(this.locators.clearAllButton).should('be.visible').click({ force: true });
  }

  SignalRNotification_85() {
    cy.get(this.locators.markAllReadButton).should('be.visible').click({ force: true });
  }

  SignalRNotification_86() {
    cy.get(this.locators.unreadToggle).click({ force: true });
  }

  SignalRNotification_87() {
    cy.get('.user-notification-list > :nth-child(1)').should('be.visible');
    cy.wait(2000);
    cy.get('.user-notification-list > :nth-child(1)')
        .find('.notification-content')
        .should('contain.text', 'Partially Processed');

}
SignalRNotification_88() {
    cy.get(this.locators.panel).should('be.visible');
    cy.wait(2000);
    cy.get('.user-notification-list > :nth-child(1)')
        .find('.notification-header')
        .invoke('text')
        .then((text) => {

            cy.log(text);

            expect(text.trim()).to.contain('Partially Processed');

        });

}

SignalRNotification_89() {

    cy.wait(10000);

    cy.get(this.locators.icon).click({ force: true });

    cy.wait(2000);

    cy.get(this.locators.panel)
        .should('be.visible');

    cy.get('.user-notification-list > :nth-child(1)')
        .find('.notification-content')
        .invoke('text')
        .then((text) => {

            cy.log(text);

            expect(text.toLowerCase()).to.contain('partially');

            expect(text.toLowerCase()).to.contain('processed');

        });

}

SignalRNotification_90() {

    cy.wait(10000);

    cy.get(this.locators.icon).click({ force: true });

    cy.wait(2000);

    cy.get(this.locators.panel)
        .should('be.visible');

    cy.get('.user-notification-list > :nth-child(1)')
        .find('.notification-content')
        .invoke('text')
        .then((text) => {

            const match = text.match(/PrimaryTeleCallingAgency_Accountlevel_\d+\.xlsx/);

            expect(match).to.not.be.null;

            cy.log('Uploaded File : ' + match[0]);

        });

}

SignalRNotification_91() {

    cy.wait(10000);

    cy.get(this.locators.icon).click({ force: true });

    cy.wait(2000);

    cy.get(this.locators.panel)
        .should('be.visible');

    cy.get('.user-notification-list > :nth-child(1)')
        .find('.notification-content')
        .should('contain.text', 'Tele Calling Agency');

}

SignalRNotification_92() {
    cy.get(this.locators.panel).should('be.visible');
    cy.wait(2000);
    cy.get('.user-notification-list > :nth-child(1)')
        .find('.notification-time')
        .should('be.visible')
        .invoke('text')
        .then((time) => {

            cy.log(time);

            expect(time.trim()).to.not.equal('');

        });

}


SignalRNotification_93() {
    cy.get(this.locators.panel).should('be.visible');
    cy.wait(2000);
    cy.get('.user-notification-list > :nth-child(1)')
        .find('.notification-content')
        .invoke('text')
        .then((text) => {

            expect(text.toLowerCase()).to.contain('Partially');

            expect(text.toLowerCase()).to.contain('Processed');

        });

}

SignalRNotification_94() {
    cy.get(this.locators.panel).should('be.visible');
    cy.wait(2000);
    cy.get('.user-notification-list > :nth-child(1)')
        .click({ force: true });

    cy.wait(5000);
    cy.url("https://scbdemo.sumeruentiger.com/web/#/login").should('include', 'allocation-status');

}

SignalRNotification_95() {
    cy.get(this.locators.icon).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.panel).should('be.visible');
    cy.wait(2000);
    cy.get('.user-notification-list > :nth-child(1)').should('have.css', 'background-color', 'rgb(255, 255, 255)');
    cy.wait(2000);
    cy.get(this.locators.markAllAsRead).click({ force: true });
    cy.wait(3000);
    cy.get('.user-notification-list > :nth-child(1)').should('not.have.css', 'background-color', 'rgb(255, 255, 255)');

}

SignalRNotification_96() {
    cy.get(this.locators.icon).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.panel).should('be.visible');
    cy.wait(2000);
    cy.get('.user-notification-list > :nth-child(1)').should('exist');
    cy.wait(2000);
    cy.get(this.locators.clearAll).click({ force: true });
    cy.wait(3000);
    cy.get('.user-notification-list').should('not.contain', 'Partially');

}
SignalRNotification_97(excelFileName) {
    cy.get(this.locators.icon).click({ force: true });
    cy.wait(2000);
    cy.get('.user-notification-list > :nth-child(1)').click({ force: true });
    cy.wait(5000);
    cy.get(this.locators.uploadedFileName).should('contain.text', excelFileName.replace('.xlsx', ''));

}


SignalRNotification_98(){
    cy.get(this.locators.icon).click({ force: true });
    cy.wait(2000);
    cy.get('.user-notification-list > :nth-child(1)')
        .click({ force: true });
    cy.wait(5000);
    cy.get(this.locators.successCount)
        .invoke('text')
        .then((count) => {

            cy.log('Success Count : ' + count);

            expect(Number(count.trim())).to.equal(1);

        });

}



SignalRNotification_99() {
    cy.wait(10000);
    cy.get(this.locators.icon).click({ force: true });
    cy.wait(2000);
    cy.get('.user-notification-list > :nth-child(1)').click({ force: true });
    cy.wait(5000);
    cy.get(this.locators.failedCount)
        .invoke('text')
        .then((count) => {

            cy.log('Failed Count : ' + count);

            expect(Number(count.trim())).to.equal(1);

        });
      }


  SignalRNotification_100() {
    cy.wait(2000);
    cy.get('.user-notification-list > :nth-child(1)').click({ force: true });
    cy.wait(5000);
    cy.get(this.locators.downloadStatusLink).should('be.visible').click({ force: true });
    cy.wait(5000);

}

SignalRNotification_101() {
    cy.wait(2000);
    cy.get('.user-notification-list > :nth-child(1)')
        .find('.notification-content')
        .invoke('text')
        .then((notificationText) => {

            cy.wrap(notificationText).as('notificationText');

        });

    cy.reload();
    cy.wait(8000);
    cy.get(this.locators.icon).click({ force: true });
    cy.wait(2000);
    cy.get('@notificationText').then((notificationText) => {

        cy.get('.user-notification-list > :nth-child(1)')
            .find('.notification-content')
            .should('contain.text', notificationText);

    });

}

verifySingleSuccessNotification(){
      cy.get(this.locators.panel).scrollIntoView().should('be.visible');
      cy.wait(2000);
      cy.contains("Processed").scrollIntoView().should('be.visible');
       cy.get('.notification-content-container').first().scrollIntoView().find('.notification-header').should('be.visible');
       cy.get('.notification-content-container').first().scrollIntoView().find('.notification-content').should('be.visible');

}

SignalRNotification_103(){
      cy.get(this.locators.panel).scrollIntoView().should('be.visible');
      cy.wait(2000);
      cy.contains("Failed").should('not.exist');
}
SignalRNotification_104(){
   cy.get(this.locators.panel).scrollIntoView().should('be.visible');
   cy.wait(2000);
   cy.contains("Show Only Unread").should('exist');
   cy.wait(2000);
  cy.get(this.locators.unreadToggle).click({ force: true });


}
SignalRNotification_105(){
  cy.get(this.locators.panel).scrollIntoView().should('be.visible');
   cy.wait(2000);
    cy.get('.badge')
        .should('be.visible')
        .invoke('text')
        .then((count) => {

            const badgeCount = count.trim();

            cy.log('Unread Notification Count: ' + badgeCount);

            console.log('Unread Notification Count:', badgeCount);

        });

}

SignalRNotification_106(){
   let notificationCount;
    cy.get(this.locators.icon).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.panel).scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.get('.badge')
        .should('be.visible')
        .invoke('text')
        .then((text) => {

            notificationCount = text.trim();

            cy.log('Count before reload: ' + notificationCount);

            cy.reload();

            cy.wait(5000);

            cy.get('.badge')
                .should('be.visible')
                .invoke('text')
                .then((newText) => {

                    const newCount = newText.trim();

                    cy.log('Count after reload: ' + newCount);

                    expect(newCount).to.equal(notificationCount);

                });

        });
}

SignalRNotification_107(){
    const fileName = 'PrimaryTeleCallingAgency_Accountlevel.xlsx';

    cy.get(this.locators.uploadButton)
        .selectFile(`cypress/fixtures/${fileName}`, {
            force: true
        });
    cy.wait(2000);
    cy.get(this.locators.uploadSubmitButton).click({force:true});
    cy.wait(2000)
    cy.get(this.locators.panel).scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('Failed').should('be.visible');
    cy.contains('Success').should('not.exist');


}
SignalRNotification_108(){

         cy.get('.badge')
        .should('be.visible')
        .invoke('text')
        .then(text => {

            cy.log('Unread Notification Count : ' + text.trim());

        });

}
verifyAllocationStatusScreen(){
    cy.get(this.locators.panel).scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.get('.user-notification-list > :nth-child(1)').click({ force: true });
    cy.wait(2000);
    cy.contains('Agency Allocation Status').should('be.visible');


}
verifyclearallNotification(){
    cy.get(this.locators.panel).scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.clearall).click({force:true});
}

verifyTransactionIdDisplayed(){
    cy.get(this.locators.panel).scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.transactionId).should('be.visible');
    cy.wait(2000);
}

 downloadTemplatefieldcust() {

    cy.contains("Allocation").click({force:true});
    cy.wait(2000);
    cy.contains("Agency Bulk Upload").click({force:true});
    cy.wait(2000);
    cy.contains("Agency Bulk Allocation Customer Level").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.downloadbutton).click({force:true});

  }
   uploadFilefieldcust(fileName) {
      cy.get(this.locators.inputfile)
        .selectFile(`cypress/fixtures/${fileName}`, {
            force: true
        });
    cy.wait(2000);
    cy.get(this.locators.uploadbtn).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.okButton).click();
}

verifyNoFailedNotification(){
   cy.get(this.locators.panel).scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.get('.user-notification-list > :nth-child(1)').should('not.contain', 'Failed');

}

captureUnreadCount(){
    cy.get(this.locators.unreadCount)
        .invoke('text')
        .then((count) => {
            cy.wrap(Number(count)).as('beforeCount');
        });

}
SignalRNotification_155(){
  cy.get(".user-notification-list > :nth-child(1)").click({force:true});
  cy.wait(2000);

}
verifyUnreadCountUpdated() {

    cy.get('@beforeCount').then((beforeCount) => {

        cy.get(this.locators.unreadCount)
            .invoke('text')
            .then((afterCount) => {

                expect(Number(afterCount)).to.eq(beforeCount - 1);

            });

    });

}


  SignalRNotification_117() {
    cy.get('.action-btn').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.panel).scrollIntoView().should('be.visible');
    cy.wait(5000);
    cy.get(this.locators.markAllReadButton).should('be.visible').click({ force: true });
  }

verifyNotificationDisplayed() {

    cy.get(this.locators.notificationList)
        .should('be.visible')
        .and('have.length.greaterThan', 0);

}

verifySingleFailedNotification() {
    cy.get('.form-toggle-group > label > .ng-untouched').click({force:true});
    cy.wait(2000);
    cy.contains('Failed').should('be.visible');
}

verifyNoSuccessNotification() {
    cy.contains('Success').should('not.exist');
}



 SignalRNotification_119() {

    cy.get(".badge")
        .invoke('text')
        .then(text => {
            expect(parseInt(text)).to.be.greaterThan(3);
        });

}
SignalRNotification_120() {

    cy.contains('Success!').should('be.visible');

    cy.contains('File Uploaded Successfully.').should('be.visible');

    cy.contains('Transaction ID').should('be.visible');

}

SignalRNotification_121() {
    cy.get(this.locators.notificationMessage).first().click({force:true});
    cy.wait(3000);
    cy.contains('Agency Allocation Status')
        .should('be.visible');

}
SignalRNotification_122() {

    cy.contains('Clear All').scrollIntoView().click({force:true});
    cy.wait(2000);
    cy.get(this.locators.notificationList)
        .should('have.length', 0);

}
SignalRNotification_123() {

    cy.contains('Failed!').should('be.visible');

    cy.contains('Transaction ID').should('be.visible');


}

SignalRNotification_124(){
    cy.contains('Success!').should('not.exist');

    cy.contains('Failed!').should('be.visible');
}

SignalRNotification_127() {

    // Verify only one Success notification
    cy.contains('Success!')
        .should('have.length', 1);

    cy.contains('File Uploaded Successfully.')
        .should('be.visible');

    cy.contains('Transaction ID')
        .should('be.visible');

    // Verify no Failed notification is displayed
    cy.contains('Failed!')
        .should('not.exist');

}


  downloadTemplatetelecust() {

    cy.contains("Allocation").click({force:true});
    cy.wait(2000);
    cy.contains("Agency Bulk Upload").click({force:true});
    cy.wait(2000);
    cy.contains("Agency Bulk Allocation Customer Level").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.downloadtemplatelecallingcustbtn).check({ force: true });
    cy.wait(2000);
    cy.get(this.locators.downloadbtntelecust).contains('Download Template').scrollIntoView().click({ force: true });
  }

    uploadFiletelecust(fileName) {

    cy.get(this.locators.uploadtemplatelecallingcustbtn).click({ force: true });
    cy.wait(2000);
    cy.get(".form-control")
        .selectFile(`cypress/fixtures/${fileName}`, {
            force: true
        });

    cy.wait(2000);
    cy.get(this.locators.upload).contains('Upload').scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.okButton).click();
}

verifyNoFailedNotification() {

    cy.get('body').then(($body) => {

        if ($body.find(".user-notification-list > :nth-child(1)").length > 0) {

            cy.get(".user-notification-list > :nth-child(1)")
                .should('have.length', 0);

        } else {

            cy.log('No failed notification found.');

        }

    });

}

markFirstNotificationAsRead() {
    cy.get(".user-notification-list > :nth-child(1)").click({force:true});
}
unreadtoggle(){
      cy.get("label > .ng-untouched").click({force:true});
}
enableUnreadToggle() {
    cy.get(this.locators.icon).click({ force: true });
    cy.wait(2000);
    cy.get("label > .ng-untouched").click({force:true});
}

verifyOnlyUnreadNotificationsDisplayed() {
    cy.get(".user-notification-list > :nth-child(1)")
        .each(($notification) => {
            cy.wrap($notification).should('be.visible');
        });
}

disableUnreadToggle() {
    // cy.get(this.locators.icon).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.unreadToggle).click({force:true});
}

getUnreadNotificationCount() {
    return cy.get(".badge")
        .invoke('text')
        .then(text => {
            return text.trim();
        });
}

markFirstnotificationAsRead(){
     cy.wait(5000);
    cy.get(".user-notification-list")
        .first()
        .click();

}
markFirstNotificationAsRead() {
    cy.get(this.locators.icon).click({ force: true });
    cy.wait(5000);
    cy.get(".user-notification-list")
        .first()
        .click();
}


openNotificationPanel() {
    cy.get(this.locators.icon).click({force:true});
}

verifySingleSuccessNotification() {
    cy.get(this.locators.icon).click({force:true});
    cy.wait(2000);
    cy.get(".user-notification-list")
        .children()
        .should('have.length', 1);

    cy.contains(".user-notification-list", 'Success')
        .should('be.visible');
}

verifySuccessNotificationCount(expectedCount) {
    cy.get(this.locators.icon).click({force:true});
    cy.wait(2000);
    cy.get('.user-notification-list')
        .children()
        .should('have.length', expectedCount);

}
clickLatestNotification() {
    cy.get('.user-notification-list')
        .children()
        .first()
        .click();
}

verifyAllocationStatusScreen() {
    cy.url('https://entqa.sumeruentiger.com/scb/web/#/login').should('include', 'AllocationStatus');
}

clickClearAllButton() {

    cy.get(this.locators.clearAllButton).click({force:true});

}

verifyNotificationQueueEmpty() {

    cy.get(this.locators.notificationList).children().should('have.length', 0);

}

verifySingleFailedNotification() {

    cy.get('.user-notification-list')
        .children()
        .should('have.length', 1);

    cy.get('.user-notification-list')
        .should('contain.text', 'Failed');

}
verifyFailedNotificationCount(){
    cy.get('.user-notification-list').children();
    cy.wait(2000);
    cy.get('.user-notification-list').should('contain.text', 'Failed');


}

  downloadTemplatedeallocationaccount() {

    cy.contains("Allocation").click({force:true});
    cy.wait(2000);
    cy.contains("Agency Bulk Upload").click({force:true});
    cy.wait(2000);
    cy.contains("Agency Bulk Deallocation Account Level").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.agencydeallocation).click({ force: true });
  }

  
  uploadFileTemplatedeallocationaccount(excelFileName) {

    cy.get(this.locators.chooseFileInput)
        .selectFile(`cypress/fixtures/${excelFileName}`, {
            force: true
        });

    cy.wait(2000);
    cy.get(this.locators.uploadbutton).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.okButton).click();
}

 downloadTemplateallocationaccount() {

    cy.contains("Allocation").click({force:true});
    cy.wait(2000);
    cy.contains("Agency Bulk Upload").click({force:true});
    cy.wait(2000);
    cy.contains("Agency Bulk Deallocation Account Level").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.FieldAgencyRadioDownload).check({ force: true });
    cy.wait(2000);

  }
  SignalRNotification_135() {

    cy.wait(5000);
    cy.contains('.notification-header', 'Account Level Agency Bulk Deallocation Processed').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(8000);
    cy.contains('Processed').should('be.visible');
  }
  verifyNoFailedNotification(){
     cy.wait(5000);
    cy.contains('.notification-header', 'Account Level Agency Bulk Deallocation Failed').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(8000);
    cy.contains('Failed').should('be.visible');
  }
//  verifyOnlyUnreadNotificationsDisplayed() {
//     cy.get(".user-notification-list")
//         .its('length')
//         .should('be.greaterThan', 0);
//  }

clickFirstNotification() {

    cy.get(this.locators.notificationList)
        .first()
        .click();

}

verifyRedirectToDeallocationStatus() {

    cy.contains('Agency Allocation Status').scrollIntoView()
        .should('be.visible');

}

clickClearAll() {

    cy.get(this.locators.clearAllButton)
        .click();

}

verifyNotificationsCleared() {

    cy.get(this.locators.notificationList)
        .should('have.length', 0);

}
verifyTransactionIdDisplayed() {

    cy.get(this.locators.transactionId)
        .should('be.visible')
        .invoke('text')
        .should('not.be.empty');

}

 uploadFiletelecustdeallo(excelFileName) {
    cy.get('#AllocationType2').click({force:true});
    cy.wait(2000);
    cy.get("#AttachedFile")
        .selectFile(`cypress/fixtures/${excelFileName}`, {
            force: true
        });

    cy.wait(2000);
    cy.get(this.locators.uploadbutton).contains('Upload').scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.okButton).click();
}

downloadTemplateCustomerLevelDeallocation(){
    cy.contains("Allocation").click({force:true});
    cy.wait(2000);
    cy.contains("Agency Bulk Upload").click({force:true});
    cy.wait(2000);
    cy.contains("Agency Bulk Deallocation Customer Level").click({force:true});
    cy.wait(2000);
    // cy.get(this.locators.agencydeallocation).click({ force: true });

}
uploadFileCustomerLevelDeallocation(excelFileName){
     cy.get(this.locators.chooseFileInput)
        .selectFile(`cypress/fixtures/${excelFileName}`, {
            force: true
        });

    cy.wait(2000);
    cy.get(this.locators.uploadbutton).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.okButton).click();
    

}

downloadTemplateCustomerLevelDeallocationField(){
     cy.contains("Allocation").click({force:true});
    cy.wait(2000);
    cy.contains("Agency Bulk Upload").click({force:true});
    cy.wait(2000);
    cy.contains("Agency Bulk Allocation Customer Level").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.download).check({ force: true });
    cy.wait(2000);



}

uploadFileCustomerLevelDeallocationfield(excelFileName){
    
    cy.get("#AttachedFile")
        .selectFile(`cypress/fixtures/${excelFileName}`, {
            force: true
        });

    cy.wait(2000);
    cy.get(this.locators.uploadbutton).contains('Upload').scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.okButton).click();

}

verifySingleSuccessNotification() {

    cy.get(".success").first().should('contain.text', 'Account Level Agent Bulk Allocation Processed');

}

verifySingleFailedNotification() {

    cy.get(this.locators.notificationMessage)
        .should('have.length', 1)
        .first()
        .should('contain.text', 'Failed');

}

verifyNoFailedNotification() {

    cy.get(this.locators.notificationMessage)
        .should('not.contain', 'Failed');

}

verifyNoSuccessNotification() {

    cy.get(this.locators.notificationMessage)
        .should('not.contain', 'Success');

}

verifyNotificationCount(count) {

    cy.get(this.locators.notificationMessage)
        .should('have.length', count);

}

verifySingleNotification() {

    cy.get(this.locators.notificationMessage)
        .should('have.length', 1);

}

verifyThreeNotificationsDisplayed() {

    cy.get(this.locators.notificationMessage)
        .should('have.length', 3);

}

verifyNotificationMessage(message) {

    cy.get(this.locators.notificationMessage)
        .first()
        .should('contain.text', message);

}

clickNotification() {

    cy.get(this.locators.notificationMessage)
        .first()
        .click();

}

verifyRedirectToCustomerLevelDeallocationStatus() {

   cy.contains('Agency Bulk Deallocation Customer Level Status')
        .should('be.visible');


   

}

clickClearAll() {

    cy.get(this.locators.clearAllButton)
        .click();

}

verifyNotificationQueueEmpty() {

    cy.get(this.locators.notificationMessage)
        .should('have.length', 0);

}

markNotificationAsRead() {

    cy.get(this.locators.notificationMessage)
        .first()
        .click();

}

enableUnreadToggle() {

    cy.get(this.locators.unreadToggle)
        .click();

}

verifyOnlyUnreadNotificationsDisplayed() {

    cy.get(this.locators.unreadNotification)
        .each(($el) => {

            cy.wrap($el)
                .should('have.class', 'unread');

        });

}

verifyUnreadNotificationCount() {

    cy.get(this.locators.unreadCount)
        .invoke('text')
        .then((text) => {

            expect(Number(text.trim())).to.be.greaterThan(-1);

        });

}

verifyNotificationPersistence() {

    cy.get(this.locators.notificationMessage)
        .should('exist');

}

verifyNotificationGeneratedAfterTransactionId() {

    cy.get(this.locators.transactionId)
        .should('be.visible');

    cy.get(this.locators.notificationMessage)
        .should('have.length', 1);

}

downloadTemplateAgentBulkAllocationAccountLevelStaff(){
    cy.contains("Allocation").click({force:true});
    cy.wait(2000);
    cy.contains("Agent Bulk Upload").click({force:true});
    cy.wait(2000);
    cy.contains("Agent Bulk Allocation Account Level").scrollIntoView().click({force:true});
    cy.wait(2000);
    cy.get(this.locators.downloadagentstaff).click({ force: true });
    cy.wait(2000);

}
uploadFileAgentBulkAllocationAccountLevelStaff(excelFileName){
        cy.get("#AttachedFile")
        .selectFile(`cypress/fixtures/${excelFileName}`, {
            force: true
        });

    cy.wait(2000);
    cy.get(this.locators.uploadfileupload).contains('Upload').scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.okButton).click();


}

FailedNotification(){
    cy.get('.user-notification-list > :nth-child(1)').should('exist');
    cy.wait(2000);
    cy.contains('Account Level Agent Bulk Allocation Failed').should('exist');
}
allbuttons(){
    cy.get('.footer-content > .btn-shade-primary').contains('Mark All as Read');
    cy.wait(2000);
    cy.get('.btn-shade-danger').contains('Clear All');
    cy.wait(2000);
    cy.get('.form-toggle-group > label > .ng-untouched').click({force:true});
    cy.wait(2000);
    cy.get('.form-toggle-group > label > .ng-untouched').click({force:true});

}
directingtostatuspage(){
    cy.get('.user-notification-list > :nth-child(1)').click({force:true});
    cy.wait(2000);
    cy.contains('Agent Allocation Status').should('exist');
}


  downloadTemplateAgentBulkAllocationAccountLevelTelecaller(){
    cy.contains("Allocation").click({force:true});
    cy.wait(2000);
    cy.contains("Agent Bulk Upload").click({force:true});
    cy.wait(2000);
    cy.contains("Agent Bulk Allocation Account Level").click({force:true});
    cy.wait(2000);
    cy.get('#downloadTemplateType3').click({ force: true });
    cy.wait(2000);
    cy.get('#downloadTemplate2').click({force:true});


  }
  uploadFileAgentBulkAllocationAccountLevelTelecaller(excelFileName){
   cy.get('#allocationType3').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.chooseFileInput)
        .selectFile(`cypress/fixtures/${excelFileName}`, {
            force: true
        });

    cy.wait(2000);
    cy.get(this.locators.uploadButton).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.okButton).click();

}

 downloadTemplateAgentBulkAllocationCustomerLevelstaff(){
    cy.contains("Allocation").click({force:true});
    cy.wait(2000);
    cy.contains("Agent Bulk Upload").click({force:true});
    cy.wait(2000);
    cy.contains("Agent Bulk Allocation Customer Level").click({force:true});
    cy.wait(2000);
    cy.get('#downloadTemplateType1').click({ force: true });
    cy.wait(2000);
    cy.get('.card-content > :nth-child(2) > .btn').click({ force: true });
  


  }
  uploadFileAgentBulkAllocationCustomerLevelstaff(excelFileName){
    cy.wait(2000);
    cy.get(".form-control")
        .selectFile(`cypress/fixtures/${excelFileName}`, {
            force: true
        });

    cy.wait(2000);
    cy.get(".card-content > :nth-child(3) > .btn").click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.okButton).click();

}
FailedNotificationCustomer(){
    cy.get('.user-notification-list > :nth-child(1)').should('exist');
    cy.wait(2000);
    cy.contains('Customer Level Agent Bulk Allocation Failed').should('exist');

}


downloadTemplateAgentBulkAllocationCustomerLevelagent(){
    cy.contains("Allocation").click({force:true});
    cy.wait(2000);
    cy.contains("Agent Bulk Upload").click({force:true});
    cy.wait(2000);
    cy.contains("Agent Bulk Allocation Customer Level").click({force:true});
    cy.wait(2000);
    cy.get('#downloadTemplateType2').click({ force: true });
    cy.wait(2000);
    cy.get('.card-content > :nth-child(2) > .btn').click({ force: true });
  


  }
  uploadFileAgentBulkAllocationCustomerLevelagent(excelFileName){
    cy.get(':nth-child(2) > .enc-card > .card-content > :nth-child(1) > .form-radio-group > :nth-child(2) > .ng-valid').click({force:true});
    cy.wait(2000);
    cy.get(".form-control")
        .selectFile(`cypress/fixtures/${excelFileName}`, {
            force: true
        });

    cy.wait(2000);
    cy.get(".card-content > :nth-child(3) > .btn").click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.okButton).click();

}

downloadTemplateAgentBulkAllocationCustomerLeveltelecaller(){
     cy.contains("Allocation").click({force:true});
    cy.wait(2000);
    cy.contains("Agent Bulk Upload").click({force:true});
    cy.wait(2000);
    cy.contains("Agent Bulk Allocation Customer Level").click({force:true});
    cy.wait(2000);
    cy.get('#downloadTemplateType3').click({ force: true });
    cy.wait(2000);
    cy.get('.card-content > :nth-child(2) > .btn').click({ force: true });
  


}

  uploadFileAgentBulkAllocationCustomerLeveltelecaller(excelFileName){
   cy.get('.form-radio-group > :nth-child(3) > .ng-untouched').click({force:true});
    cy.wait(2000);
    cy.get(".form-control")
        .selectFile(`cypress/fixtures/${excelFileName}`, {
            force: true
        });

    cy.wait(2000);
    cy.get(".card-content > :nth-child(3) > .btn").click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.okButton).click();

}

downloadTemplateAgentBulkdeAllocationCustomerLevelstaff(){
     cy.contains("Allocation").click({force:true});
    cy.wait(2000);
    cy.contains("Agent Bulk Upload").click({force:true});
    cy.wait(2000);
    cy.contains("Agent Bulk Deallocation Account Level").click({force:true});
    cy.wait(2000);
    cy.get('#downloadTemplate').click({ force: true });
    cy.wait(2000);
    
  


}

  uploadFileAgentBulkdeAllocationCustomerLevelstaff(excelFileName){
 
   cy.get('#AttachedFile')
        .selectFile(`cypress/fixtures/${excelFileName}`, {
            force: true
        });

    cy.wait(2000);
    cy.get('#upload').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.okButton).click();

}
directingtodeallocationstatuspage(){
    cy.get('.user-notification-list > :nth-child(1)').click({force:true});
    cy.wait(2000);
    cy.contains('Agent Deallocation Status').should('exist');
}
downloadTemplateAgentBulkdeAllocationCustomerLevelagent(){
      cy.contains("Allocation").click({force:true});
    cy.wait(2000);
    cy.contains("Agent Bulk Upload").click({force:true});
    cy.wait(2000);
    cy.contains("Agent Bulk Deallocation Account Level").click({force:true});
    cy.wait(2000);
    cy.get('#downloadTemplate').click({ force: true });
    cy.wait(2000);

}

uploadFileAgentBulkdeAllocationCustomerLevelagent(excelFileName){
cy.get('#allocationType2').click({force:true});
cy.wait(2000);
   cy.get('#AttachedFile')
        .selectFile(`cypress/fixtures/${excelFileName}`, {
            force: true
        });

    cy.wait(2000);
    cy.get('#upload').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.okButton).click();

}

downloadTemplateAgentBulkdeAllocationCustomerLeveltelecaller(){
    cy.contains("Allocation").click({force:true});
    cy.wait(2000);
    cy.contains("Agent Bulk Upload").click({force:true});
    cy.wait(2000);
    cy.contains("Agent Bulk Deallocation Account Level").click({force:true});
    cy.wait(2000);
    cy.get('#downloadTemplate').click({ force: true });
    cy.wait(2000);

}

uploadFileAgentBulkdeAllocationCustomerLeveltelecaller(excelFileName){
cy.get('#allocationType3').click({force:true});
cy.wait(2000);
   cy.get('#AttachedFile')
        .selectFile(`cypress/fixtures/${excelFileName}`, {
            force: true
        });

    cy.wait(2000);
    cy.get('#upload').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.okButton).click();

}

downloadTemplateAgentBulkdeAllocationLevelstaff(){
    cy.contains("Allocation").click({force:true});
    cy.wait(2000);
    cy.contains("Agent Bulk Upload").click({force:true});
    cy.wait(2000);
    cy.contains("Agent Bulk Deallocation Customer Level").click({force:true});
    cy.wait(2000);
    cy.get(':nth-child(1) > .enc-card > .card-content > .ng-untouched > div > .btn').click({ force: true });
    cy.wait(2000);

}

uploadFileAgentBulkdeAllocationLevelstaff(excelFileName){
// cy.get('#allocationType3').click({force:true});
// cy.wait(2000);
   cy.get('#AttachedFile')
        .selectFile(`cypress/fixtures/${excelFileName}`, {
            force: true
        });

    cy.wait(2000);
    cy.get('#upload').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.okButton).click();

}
fileprocessed(){
    cy.contains("Processed").should("exist");
}
FailedNotificationCustomerDeallocation(){
     cy.contains("Failed").should("exist");

}
downloadTemplateAgentBulkdeAllocationLevelagent(){
    cy.contains("Allocation").click({force:true});
    cy.wait(2000);
    cy.contains("Agent Bulk Upload").click({force:true});
    cy.wait(2000);
    cy.contains("Agent Bulk Deallocation Customer Level").click({force:true});
    cy.wait(2000);
    cy.get(':nth-child(1) > .enc-card > .card-content > .ng-untouched > div > .btn').click({ force: true });
    cy.wait(2000);

}

uploadFileAgentBulkdeAllocationLevelagent(excelFileName){
cy.get('#allocationType2').click({force:true});
cy.wait(2000);
   cy.get('#AttachedFile')
        .selectFile(`cypress/fixtures/${excelFileName}`, {
            force: true
        });

    cy.wait(2000);
    cy.get('#upload').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.okButton).click();

}

downloadTemplateAgentBulkdeAllocationLeveltelecaller(){
    cy.contains("Allocation").click({force:true});
    cy.wait(2000);
    cy.contains("Agent Bulk Upload").click({force:true});
    cy.wait(2000);
    cy.contains("Agent Bulk Deallocation Customer Level").click({force:true});
    cy.wait(2000);
    cy.get(':nth-child(1) > .enc-card > .card-content > .ng-untouched > div > .btn').click({ force: true });
    cy.wait(2000);

}

uploadFileAgentBulkdeAllocationLeveltelecaller(excelFileName){
cy.get('#allocationType3').click({force:true});
cy.wait(2000);
   cy.get('#AttachedFile')
        .selectFile(`cypress/fixtures/${excelFileName}`, {
            force: true
        });

    cy.wait(2000);
    cy.get('#upload').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.okButton).click();

}

downloadTemplateAgentBulkAllocationOwnerbulkuploadaccountLevel(){
    cy.contains("Allocation").click({force:true});
    cy.wait(2000);
    cy.contains("Agent Bulk Upload").click({force:true});
    cy.wait(2000);
    cy.contains("Allocation Owner Bulk Upload").click({force:true});
    cy.wait(2000);
    cy.contains("Allocation Owner Bulk Upload Account Level").click({force:true});
    cy.wait(2000);
    cy.get('#downloadTemplate3').click({ force: true });
    cy.wait(2000);

}

uploadFileAgentBulkAllocationOwnerbulkuploadaccountLevel(excelFileName){
// cy.get('#allocationType3').click({force:true});
cy.wait(2000);
   cy.get('#AttachedFile')
        .selectFile(`cypress/fixtures/${excelFileName}`, {
            force: true
        });

    cy.wait(2000);
    cy.get('#fileUploadConfirmation').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.okButton).click();

}



downloadTemplateAgentBulkAllocationOwnerbulkuploadcustLevel(){
    cy.contains("Allocation").click({force:true});
    cy.wait(2000);
    cy.contains("Agent Bulk Upload").click({force:true});
    cy.wait(2000);
    cy.contains("Allocation Owner Bulk Upload").click({force:true});
    cy.wait(2000);
    cy.contains("Allocation Owner Bulk Upload Customer Level").click({force:true});
    cy.wait(2000);
    cy.get('.col-md-12 > .btn').click({ force: true });
    cy.wait(2000);

}

uploadFileAgentBulkAllocationOwnerbulkuploadcustLevel(excelFileName){
// cy.get('#allocationType3').click({force:true});
cy.wait(2000);
   cy.get('#uploadTemp')
        .selectFile(`cypress/fixtures/${excelFileName}`, {
            force: true
        });

    cy.wait(2000);
    cy.get('#upload').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.okButton).click();

}
}

export default SignalRNotificationPage;
