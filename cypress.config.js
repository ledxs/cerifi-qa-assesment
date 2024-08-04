const { defineConfig } = require("Cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    env: {
      login_url: '/login',
      products_url: '/inventory.html'
    },
    retries: 2,
    video: true,
    pageLoadTimeout: 90000,
    setupNodeEvents(on, config) {
    },
  }
});
