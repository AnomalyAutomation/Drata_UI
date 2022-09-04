// Notes: Cypress runs Async in the background
import example from "/Cypress_Drata/cypress/fixtures/example.json";
import ResourcesPage from "../../support/pageObjects/resources/ResourcesPage";
// let windowErrorSpy;
// Cypress.on("window:before:load", (win) => {
//   windowErrorSpy = cy.spy(win.console, "error");
// });
// const DELAY = 1000;

describe("Burger Navigation", function () {
  const Resource = new ResourcesPage();
  before(() => {
    //Loading Fixtures to Drive my data from
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
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