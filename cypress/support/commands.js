import * as _ from "lodash";

// Custom Command to Check if side nav is open, if not then
// open nav and open the selection by text as well as the link wanted
Cypress.Commands.add("burgerNav", (section, link) => {
  let url = "";
  cy.get("#sidenav-content").then(($el) => {
    const navClass = $el.attr("class");
    if (!navClass.includes("show-nav")) {
      cy.get("[id*='open-menu']:visible").click();
    } else {
      cy.log("Side Nav is Already Open");
    }
  });
  //Grabbing all links in the currently opened block and iterating for matching Argument 'section'
  cy.get("ul[id*='menu-2'] li a.elementor-item").each(($el) => {
    const desiredSection = $el.text();
    if (desiredSection.includes(section)) {
      if (_.isNull(link)) {
        url = $el.attr("href");
        cy.wrap($el).click();
        cy.url().then((urls) => {
          expect(url).to.contain(urls);
        });
      } else {
        cy.wrap($el).click();
      }
      return false;
    }
  });
  //Checking if Nav is a sub catagory, if so iterates/clicks/asserts sub-nav
  if (!_.isNull(link)) {
    //Grabbing all links in the currently opened block and iterating for matching Argument 'link'
    cy.get("ul[style='width: auto; display: block;'] li a").each(($el) => {
      const desiredLink = $el.text();
      if (desiredLink.includes(link)) {
        url = $el.attr("href");
        cy.wrap($el).click();
        cy.url().then((urls) => {
          expect(url).to.contain(urls);
        });

        return false;
      }
    });
  }
});

//Custom Validation for Burger nav - Validate element on page
Cypress.Commands.add("navValidation", (section, link, elementTXT) => {
  Cypress.log({
    displayName: "Burger Nav Test",
    message:
      "Verifying: " +
      section +
      "/" +
      link +
      " :Plus on screen element contains: " +
      elementTXT,
  });
  cy.burgerNav(section, link).then(() => {
    cy.contains(elementTXT, { matchCase: false }).should("be.visible");
  });
});

Cypress.Commands.add("navValEl", (section, link, webElement) => {
  Cypress.log({
    displayName: "Burger Nav Test",
    message:
      "Verifying: " +
      section +
      "/" +
      link +
      " :Plus on screen element contains: " +
      webElement,
  });
  cy.burgerNav(section, link).then(() => {
    cy.get(webElement).should("be.visible");
  });
});
