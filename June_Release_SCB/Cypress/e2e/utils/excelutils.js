const xlsx = require('xlsx');

const readExcelFile = (filePath) => {
  try {
    const workbook = xlsx.readFile(filePath);
    const sheetsData = {};
    workbook.SheetNames.forEach((sheetName) => {
      const sheet = workbook.Sheets[sheetName];
      sheetsData[sheetName] = xlsx.utils.sheet_to_json(sheet);
    });
    return sheetsData;
  } catch (error) {
    console.error(`Error reading Excel file: ${error.message}`);
    return null;
  }
};

const writeExcelFile = (filePath, sheetName, data) => {
  let workbook;
  try {
    workbook = xlsx.readFile(filePath);
  } catch (e) {
    workbook = xlsx.utils.book_new();
  }

  let worksheet = workbook.Sheets[sheetName];
  if (!worksheet) {
    worksheet = xlsx.utils.aoa_to_sheet([[]]);
    xlsx.utils.book_append_sheet(workbook, worksheet, sheetName);
  }

  Object.entries(data).forEach(([cellRef, value]) => {
    const cell = xlsx.utils.decode_cell(cellRef);
    xlsx.utils.sheet_add_aoa(worksheet, [[value]], { origin: cell });
  });

  xlsx.writeFile(workbook, filePath);
  return null; // Return null to indicate that the task was handled
};


module.exports = { readExcelFile, writeExcelFile };
