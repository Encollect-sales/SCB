export const getBaseUrl = () => {
  // Get the environment variable (defaults to 'QA' if not specified)
  const env = Cypress.env('ENV') || 'QA'; // Default to 'QA' if ENV is not set
 
  // Load the fixture and modify the base URL dynamically based on the environment
  return cy.fixture('config').then((config) => {
    // Modify the baseUrl based on the environment (QA or UAT)
    if (env === 'UAT') {
      config.baseUrl = 'https://scbuat.sumeruentiger.com/web/#/login'; // UAT URL
    } else {
      config.baseUrl = 'https://scbdemo.sumeruentiger.com/web/#login'; // QA URL
    }
   
    return config.baseUrl;
  });
};