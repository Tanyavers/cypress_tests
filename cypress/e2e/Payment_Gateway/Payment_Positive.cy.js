describe("Payment Process page", () => {
  const BASE_URL = "https://demo.guru99.com/payment-gateway/process_purchasetoy.php";

  beforeEach(() => {
    cy.fixture("cookies").then((cookies) => {
      for (let [name, value] of Object.entries(cookies)) {
        cy.setCookie(name, JSON.stringify(value));
      }
    });
    cy.visit(BASE_URL);
  });

  it("Payment Process", () => {
    cy.visit(BASE_URL);
    cy.fixture("Payment_Gateway/cards").then((cards) => {
      for (let card of cards) {
        cy.log(`Start test for  ${card.name} card`);
        cy.checkInputAndTypeValue("card_nmuber", card.card_nmuber);
        cy.checkSelectAndSelectValue("month", card.month);
        cy.checkSelectAndSelectValue("year", card.year);
        cy.checkInputAndTypeValue("cvv_code", card.cvv_code);

        cy.get('[name="submit"]').should("be.visible").click();
        cy.url()
          .should("contains", "https://demo.guru99.com/payment-gateway/genearte_orderid.php?uid")
          .get("h2")
          .contains("Payment successfull!");
        cy.go("back");
      }
    });
  });
});
