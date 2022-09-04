// Notes: Cypress runs Async in the background
//import example from "/Drata_UI/cypress/fixtures/example.json";
import example from "../../fixtures/example.json";
import ResourcesPage from "../../support/pageObjects/resources/ResourcesPage";

// let windowErrorSpy;
// Cypress.on("window:before:load", (win) => {
//   windowErrorSpy = cy.spy(win.console, "error");
// });
// const DELAY = 1000;

describe("Burger Navigation", function () {
  const Resource = new ResourcesPage();
  before(() => {
    //I would load my fixture here if I was using it inside of an IT block,
    //Since I'm running a forEach on my fixture data, I instead import it in.
  });

  // afterEach(() => {
  //   cy.wait(DELAY).then(() => {
  //     expect(windowErrorSpy).to.not.be.called;
  //   });
  // });

  example.sideNav.forEach((pair) => {
    it(`Verifying ${pair[0]} / ${pair[1]} : Plus pm screen element contains: ${pair[2]}`, () => {
      cy.visit("");
      cy.navValidation(pair[0], pair[1], pair[2]);
    });
  });

  //Example test that uses stored WebElement in page objects as validation

  it("Verify Resources / All Case Studies Resources Contains: Case Studies Button", () => {
    cy.visit("");
    cy.navValEl("Resources", "All Resources", Resource.caseStudies);
  });

  it("Verify Resources / All Resources Contains: Case Studies Button", () => {
    cy.visit("");
    cy.navValEl("Resources", "All Resources", Resource.all);
  });
});
