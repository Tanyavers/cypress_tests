describe("Test Telecom Project sidebar", () => {
  const BASE_URL = "https://demo.guru99.com/telecom/index.html";

  beforeEach(() => {
    cy.fixture("cookies").then((cookies) => {
      for (let [name, value] of Object.entries(cookies)) {
        cy.setCookie(name, JSON.stringify(value));
      }
    });
    cy.visit(BASE_URL);
  });

  it("Test sidebar links", () => {
    cy.visit(BASE_URL);
    cy.get("nav.left").should("be.visible");

    cy.fixture("Telecom_Project/sidebarLinks").then((links) => {
      for (let [name, url] of Object.entries(links)) {
        cy.log(`Check ${name} link with ${url} url`);
        cy.CheckLinksOnSidebar(name, url, BASE_URL.includes(url));
      }
    });
  });

  it("Test sidebar links", () => {
    cy.visit(BASE_URL);
    cy.get('nav.left a[href="#menu"]').should("be.visible").click();
    cy.get("nav#menu").should("be.visible");
    cy.get("nav#menu a.close").should("be.visible").click();
    cy.get("nav#menu").should("not.be.visible");
  });
});
