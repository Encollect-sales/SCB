const XLSX = require('xlsx');
const fs = require('fs');

const waitForFile = (filePath, timeout = 30000) => {
  const start = Date.now();

  return new Promise((resolve, reject) => {
    const check = () => {
      if (fs.existsSync(filePath)) return resolve(true);
      if (Date.now() - start > timeout) {
        return reject(new Error(`Excel file not found after ${timeout}ms: ${filePath}`));
      }
      setTimeout(check, 500);
    };
    check();
  });
};

const writeExcelFile = async (filePath, sheetName, data) => {
  await waitForFile(filePath);

  const workbook = XLSX.readFile(filePath);
  const worksheet = workbook.Sheets[sheetName];

  if (!worksheet) {
    throw new Error(`Sheet "${sheetName}" not found`);
  }

  Object.entries(data).forEach(([cell, value]) => {
    worksheet[cell] = { t: 's', v: value };
  });

  XLSX.writeFile(workbook, filePath);
  return true;
};

const readExcelFile = (filePath) => {
  const workbook = XLSX.readFile(filePath);
  return workbook;
};

module.exports = {
  readExcelFile,
  writeExcelFile
};
