const { defineConfig } = require('cypress');
const path = require('path');
 
module.exports = defineConfig({
  projectId: 'tb2cx2',
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    //testIsolation: false,
    setupNodeEvents(on, config) {
      // Import tasks and register them
      const tasks = require('./cypress/plugins/tasks');
      on('task', tasks);
 
      // Set up mochawesome reporter
      require('cypress-mochawesome-reporter/plugin')(on);
      require('@shelex/cypress-allure-plugin/writer')(on, config);
  
 
      // Define custom tasks related to Excel/CSV handling
      on('task', {
        getExcelData(filePath) {
          const resolvedFilePath = path.join(config.projectRoot, 'cypress', 'e2e', filePath);
          return excelUtils.readExcelFile(resolvedFilePath);
        },
        updateExcelCell({ filePath, sheetName, data }) {
          return excelUtils.writeExcelFile(filePath, sheetName, data);
        },
      });
 
      // Return the config object
      return config;
    },
    specPattern: 'cypress/e2e/tests/**/*.cy.js',
    screenshotOnRunFailure: true,
    video: false,
    
  },

  env: {
    allure: true, // Enable Allure environment
  },
  
});