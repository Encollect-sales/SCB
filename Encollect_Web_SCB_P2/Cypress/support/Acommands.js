import 'cypress-file-upload';
require ('@4tw/cypress-drag-drop')
Cypress.Commands.add('dragAndDrop', { prevSubject: 'element' }, (subject, targetEl) => {
  const dataTransfer = new DataTransfer();
  cy.get(targetEl).then(target => {
    cy.wrap(subject)
      .trigger('dragstart', { dataTransfer });
    cy.wrap(target)
      .trigger('drop', { dataTransfer });
  });
  cy.wrap(subject).trigger('dragend');
});
 
Cypress.Commands.add('dragAndDrop', { prevSubject: 'element' }, (subject, target) => {
  const BUTTON_INDEX = 0;
  const SLOPPY_CLICK_THRESHOLD = 10;
 
  cy.wrap(subject)
    .trigger('mousedown', { button: BUTTON_INDEX });
 
  cy.get('body')
    .trigger('mousemove', { clientX: 0, clientY: 0 })
    .trigger('mousemove', {
      clientX: SLOPPY_CLICK_THRESHOLD,
      clientY: SLOPPY_CLICK_THRESHOLD
    });
 
  cy.get(target)
    .trigger('mousemove', {
      clientX: SLOPPY_CLICK_THRESHOLD,
      clientY: SLOPPY_CLICK_THRESHOLD
    })
    .trigger('mousemove', { clientX: 0, clientY: 0 })
    .trigger('mouseup', { force: true });
});
 

// Cypress/support/commands.js
 
const path = require('path');
 
Cypress.Commands.add('updateExcelFile', ({ filePath, data }) => {
  // Resolve the absolute path to the Excel file in Cypress/downloads
  const resolvedFilePath = path.resolve('cypress', 'downloads', filePath);
 
  return cy.task('updateExcelFile', { filePath: resolvedFilePath, data });
});

