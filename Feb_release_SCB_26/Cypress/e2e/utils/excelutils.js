const xlsx = require('xlsx');

// Function to read the Excel file
const readExcelFile = (filePath) => {
  try {
    const workbook = xlsx.readFile(filePath);
    const sheetsData = {};
    workbook.SheetNames.forEach((sheetName) => {
      const sheet = workbook.Sheets[sheetName];
      sheetsData[sheetName] = xlsx.utils.sheet_to_json(sheet);
    });
    return sheetsData;  // Return all sheets' data as an object
  } catch (error) {
    console.error(`Error reading Excel file: ${error.message}`);
    return null;
  }
};

// Function to write data to Excel file
const writeExcelFile = (filePath, sheetName, data) => {
  let workbook;

  try {
    // Try to read existing workbook, or create a new one if not found
    workbook = xlsx.readFile(filePath);
  } catch (e) {
    workbook = xlsx.utils.book_new();  // Create a new workbook if file doesn't exist
  }

  let worksheet = workbook.Sheets[sheetName];
  if (!worksheet) {
    worksheet = xlsx.utils.aoa_to_sheet([[]]);  // Create a new sheet if not found
    xlsx.utils.book_append_sheet(workbook, worksheet, sheetName);
  }

  // Loop through the provided data and write it to the correct cell
  Object.entries(data).forEach(([cellRef, value]) => {
    const cell = xlsx.utils.decode_cell(cellRef); // Decode cell reference like 'A2', 'B3', etc.
    xlsx.utils.sheet_add_aoa(worksheet, [[value]], { origin: cell });
  });

  // Write the updated workbook back to the file
  xlsx.writeFile(workbook, filePath);
  return null;  // Return null indicating successful write
};

module.exports = { readExcelFile, writeExcelFile };
