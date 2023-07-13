describe("Product page", () => {
  const BASE_URL = "https://demo.guru99.com/payment-gateway/index.php";
  beforeEach(() => {
    cy.fixture("cookies.json").then((cookies) => {
      for (let [name, value] of Object.entries(cookies)) {
        cy.setCookie(name, JSON.stringify(value));
      }
    });
    cy.visit(BASE_URL);
  });

  it("Product with default quantity", () => {
    cy.visit(BASE_URL);

    cy.get('[type="submit"]').should("be.visible").click();
    cy.url()
      .should("contains", "https://demo.guru99.com/payment-gateway/process_purchasetoy.php")
      .get("h2")
      .contains("Payment Process")
      .and("have.css", "text-align", "center")
      .and("have.css", "color", "rgb(85, 85, 85)");
    cy.get('form[name="fbal"]').should("be.visible").contains("$20.00").should("contains.text", "$20.00").and("have.css", "color", "rgb(255, 0, 0)");;
    cy.get('input[type="submit"][name="submit"]')
      .should("be.visible")
      .contains("$20.00")
      .should("contains.value", "$20.00")
      .and("have.css", "color", "rgb(255, 255, 255)");
    cy.go("back");
  });

  it("Product with all quantities", () => {
    cy.visit(BASE_URL);

    for (let i = 2; i <= 9; i++) {
      cy.get('select[name="quantity"]').should("be.visible").select(`${i}`);

      cy.get('[type="submit"]').should("be.visible").click();
      cy.url()
        .should("contains", "https://demo.guru99.com/payment-gateway/process_purchasetoy.php")
        .get("h2")
        .contains("Payment Process");
      cy.get('form[name="fbal"]')
        .should("be.visible")
        .contains(`$${(i * 20).toFixed(2)}`)
        .should("contains.text", `$${(i * 20).toFixed(2)}`);
      cy.get('input[type="submit"][name="submit"]')
        .should("be.visible")
        .contains(`$${(i * 20).toFixed(2)}`)
        .should("contains.value", `$${(i * 20).toFixed(2)}`);
      cy.go("back");
    }
  });

  it("Check links on Product page", () => {
    const links = {
      "Guru99 Payment Gateway": "purchasetoy.php",
      Cart: "purchasetoy.php",
      "Generate Card Number": "cardnumber.php",
      "Check Credit Card Limit": "check_credit_balance.php",
    };

    cy.visit(BASE_URL);
    cy.get("nav#nav").should("be.visible");
    for (let [elementName, pageLink] of Object.entries(links)) {
      cy.get("nav#nav").then((_) => {
        cy.contains("a", elementName)
          .then((el) => {
            if (el[0].attributes.getNamedItem("target")) {
              cy.get(el).invoke("removeAttr", "target");
            }
          })
          .click();
        cy.url().should("contains", pageLink);
        cy.go("back");
      });
    }
  });
});
