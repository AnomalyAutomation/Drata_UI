//NOTE::: Had this been a real project I would break down the page objects
//into chunks that make sense for the software

//::: Bottom Navigation

class NavPage {
  //-----::Top Nav::-----\\
  //-----::Burger Nav::-----\\
  //-----::Bottom Nav::-----\\

  //||||-----Nav Actions-----||||\\
  //Note: This is where I would keep the Nav actions
  //to quickly goTo pages without button click by by extending the Base URL
  //Example:
  gotoAbout() {
    cy.visit("/about");
  }
}
export default NavPage;
