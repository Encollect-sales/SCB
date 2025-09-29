
/**
 * Fetches locators from the JSON file.
 * @param {string} pageName The name of the page object locators to retrieve.
 * @returns {Object} An object containing the locators for the specified page.
 */
export const getLocators = (pageName) => {
    return cy.fixture('locators').then((locators) => {
      if (locators[pageName]) {
        return locators[pageName];
      } else {
        throw new Error(`Locators for page '${pageName}' not found.`);
      }
    });
  };