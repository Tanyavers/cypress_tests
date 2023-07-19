import links from "../../fixtures/Common_Elements/navbarLinks.json";

describe("Test site navbar", () => {
  const BASE_URL = "https://demo.guru99.com/";

  beforeEach(() => {
    cy.fixture("cookies").then((cookies) => {
      for (let [name, value] of Object.entries(cookies)) {
        cy.setCookie(name, JSON.stringify(value));
      }
    });
    cy.visit(BASE_URL);
  });

  it("Test non dropdown links on navbar", () => {
    cy.visit(BASE_URL);
    cy.get("#navbar-brand-centered").should("be.visible");
    cy.get("#navbar-brand-centered ul.nav.navbar-nav").should("be.visible");

    for (let [linkName, url] of Object.entries(links.commonLinks)) {
      cy.log(`Check ${linkName} link with ${url} url`);
      cy.CheckElementOnNavbar(linkName, url);
    }
  });

  it("Test dropdown links on navbar", () => {
    cy.visit(BASE_URL);
    cy.get("#navbar-brand-centered").should("be.visible");
    cy.get("#navbar-brand-centered ul.nav.navbar-nav").should("be.visible");

    for (let [linkName, subLinks] of Object.entries(links.dropdownLinks)) {
      for (let [subLinkName, url] of Object.entries(subLinks)) {
        cy.log(`Check ${subLinkName} link with ${url} url from ${linkName}`);
        cy.CheckDropdownElementOnNavbar(linkName, subLinkName, url, linkName === "SEO");
      }
    }
  });
});
