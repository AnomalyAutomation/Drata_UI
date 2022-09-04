//:: For time sake I'm combining the Home/Customers/Auditor Pages Here

//NOTE::: Had this been a real project I would break down the page objects
//into chunks that make sense for the software

class ResourcesPage {
  //-----::Home...::-----\\
  caseStudies() {
    return cy.get("#case-studies");
  }

  all() {
    return cy.get("#all");
  }
}
export default ResourcesPage;
