describe("Test Telecom Project sidebar", () => {
  it("Test sidebar", () => {
    const BASE_URL = "https://demo.guru99.com/telecom/index.html";
    const links = {
      Home: "index.html",
      "Add Customer": "addcustomer.php",
      "Add Tariff Plans": "addtariffplans.php",
      "Add Tariff Plan to Customer": "assigntariffplantocustomer.php",
      "Pay Billing": "billing.php",
    };

    cy.visit(BASE_URL);

    cy.get("nav.left").should("be.visible");

    for (let [name, url] of Object.entries(links)) {
      cy.CheckLinksOnSidebar(name, url, BASE_URL.includes(url));
    }
  });
});
