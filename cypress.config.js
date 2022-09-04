//Drata Notes: Upped the default view port to test under laptop conditions
//Could lower to test hamburger - smaller viewport view

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ufe57m",
  reporter: "mochawesome",
  e2e: {
    //numTestsKeptInMemory: 3,
    pageLoadTimeout: 70000,
    baseUrl: "https://drata.com",
    includeShadowDom: true,
    viewportWidth: 414,
    viewportHeight: 896,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/integration/*/*.js",
    defaultCommandTimeout: 10000,
    chromeWebSecurity: false,
    env: {
      //Future consideration of env --env cmd line val changes
    },
  },
});
