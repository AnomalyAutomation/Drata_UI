# Cypress_Drata
**Run Notes:**
Node ver. v16.13.0
.nvmrc file added


**CMD Line Execution:**

- "npm run Election"
  - Run on Electron - Update Package HTML file for MochaAwesome Reporting - Update cypress Dashboard Reporting
- "npm run Chrome"
  - Run on Chrome - Update Package HTML file for MochaAwesome Reporting - Update cypress Dashboard Reporting
- "npm run chrome-Head"
  - Run on Chrome – Headed - Update Package HTML file for MochaAwesome Reporting - Update cypress Dashboard Reporting

**Git Actions Execution:**

- https://github.com/AnomalyAutomation/Drata\_UI/actions/workflows/drataRemote.yml
- Proceed to Above URL \> Click [run workflow] \> Click [run Workflow]

**Run time Speed:**

- Run time is currently 10 minutes:
  - Only One Spec with all the tests
  - In real time multiple specs would run parallel – meaning more tests in the same time
  - Due to time constraints and searching for elements by text it also takes longer, colaborating with devs to work in unique locators, even in helping to narrow scope would also knock the time down for a test such as this.  I could have used locators looking for the :nth... but those can change frequiently dependent on the site functionality
  - The Spec is hitting each Side Nav button, then validating URL, and waiting for desired page element to be visible (Also adding to time)
  - Tests are writing to MochaAwesome, as well as recording to Cypress Dashboard, which could be removed for an optimized speed

**Reporting:**

- MochaAwesome:
  - HTML file inside of Project that updates each time test is ran.
  - C:/Drata\_UI/mochawesome-report/mochawesome.html
- Cypress Dashboard:
  - Screenshots, and recordings saved into the cloud on Cypress Dashboard (Users must be invited)
  - Displays historic graphs, analytics, logs, etc.
- Git Action:
  - After running through git a summary view is available with any fails, as well as general overview.

Framework Notes: testing in iPhone viewport

- Testing side Nav \> Verify URL \> Verify Element
- Spying on Window for errors in console and will fail if so will report after each test.
  - I did this for a visual of a pass, but commented out code in my e2e.js for "failOnConsoleError()" which will do the same thing but only notify you if a fail appears
- I created custom commands for the test:
  - Hamburger nav: Looks to see if side nav is open, if not opens it then selections a section and link. Since many of the elements do no have unique locators I made the arguments go based off of text contained in elements and narrowed the scope of view for the elements to search through. IF a nav is requested that doesn't require a sub link then that step is skipped.
  - One Validation method to work with data driven test derived from the Fixtures Json. Since everything was text based and this could easily be updated.
  - Another validation method to show an example of finding elements by locator and looking for visibility
- **Page Objects:**
  - I added a few folders but this would be determined project by project
  - Only the Resources class is utilized, as I added some page objects to assert against as an example
