/**
* Fetches test data from a specified fixture file.
* @param {string} fileName The name of the fixture file without the extension.
* @param {string} [dataKey] Optional key to fetch a specific part of the data.
* @returns {Promise} A promise that resolves with the requested test data.
*/
export const getTestData = (fileName, dataKey = null) => {
    return cy.fixture(fileName).then((data) => {
      if (dataKey) {
        return data[dataKey];
      }
      return data;
    });
  };