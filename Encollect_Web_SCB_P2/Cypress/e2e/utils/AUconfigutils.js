export const getBaseUrl = () => {
  return cy.fixture('config').then((config) => {
      return config.AUbaseUrl;
  });
};
