Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return true;
});

module.exports = (on, config) => {
  on("before:browser:launch", (browser = {}, launchOptions) => {
    if (browser.name === "chrome") {
      launchOptions.args.push("--disable-web-security");
      launchOptions.args.push("--disable-site-isolation-trials");
      launchOptions.args.push("--max_old_space_size=1500");
      launchOptions.args.push("--disable-dev-shm-usage");
      return launchOptions;
    }
  });
};

import "cypress-real-events/support";
import "cypress-xpath";
require("cypress-xpath");
require("xpath");

// Cypress.on("window:before:load", (win) => {
//   cy.stub(win.console, "error").callsFake((msg) => {
//     // log out to the terminal
//     cy.now("task", "error", msg);
//     // log to Command Log and fail the test
//     throw new Error(msg);
//   });
// });
