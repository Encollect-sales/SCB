const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');
 
module.exports = {
  updateExcelFile({ filePath, newData }) {
    return new Promise((resolve, reject) => {
      try {
        const resolvedFilePath = path.resolve(filePath);
        const workbook = xlsx.readFile(resolvedFilePath);
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
 
        // Convert worksheet to JSON array
        const jsonData = xlsx.utils.sheet_to_json(worksheet, { header: 1 });
 
        // Append new data to JSON array
        jsonData.push(newData);
 
        // Convert JSON array back to worksheet
        const newWorksheet = xlsx.utils.aoa_to_sheet(jsonData);
        workbook.Sheets[sheetName] = newWorksheet;
 
        // Write updated workbook to file
        xlsx.writeFile(workbook, resolvedFilePath);
 
        resolve('Excel file updated successfully');
      } catch (error) {
        reject(error);
      }
    });
  },
 
  // Define other tasks as needed
};