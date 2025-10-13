const path = require('path');
const { readExcelFile } = require('../utils/excelUtils');
module.exports = (on, config) => {
  on('task', {
    getExcelData() {
      const filePath = path.resolve('../fixtures/userManagementData.xlsx');
      return readExcelFile(filePath);
    },
  });
};