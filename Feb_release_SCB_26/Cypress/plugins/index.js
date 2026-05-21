const path = require('path');
const { readExcelFile } = require('../utils/excelUtils');
module.exports = (on, config) => {
  on('task', {
    getExcelData() {
      const filePath = path.resolve('../fixtures/userManagementData.xlsx');
      return readExcelFile(filePath);
    },
      // Task to read ProductMasterTemplate.xlsx or any other file
      getProductMasterTemplateData({ filePath }) {
        const resolvedFilePath = path.resolve(filePath || 'cypress/downloads/ProductMasterTemplate.xlsx'); // Ensure the correct path here
        return readExcelFile(resolvedFilePath); // Reads the Excel file
      },
  });
};