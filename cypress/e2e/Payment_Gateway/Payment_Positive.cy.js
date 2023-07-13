describe("Payment Process page", () => {
  const BASE_URL = "https://demo.guru99.com/payment-gateway/process_purchasetoy.php";

  beforeEach(() => {
    cy.fixture("cookies.json").then((cookies) => {
      for (let [name, value] of Object.entries(cookies)) {
        cy.setCookie(name, JSON.stringify(value));
      }
    });
    cy.visit(BASE_URL);
  });

  it("Payment Process", () => {
    const cards = [
      {
        name: "visa",
        card_nmuber: "3731185631783138",
        month: "1",
        year: "2024",
        cvv_code: "864",
      },
      {
        name: "MasterCard",
        card_nmuber: "4000123456789010",
        month: "2",
        year: "2025",
        cvv_code: "291",
      },
      {
        name: "Discover",
        card_nmuber: "6011014570541938",
        month: "3",
        year: "2026",
        cvv_code: "378",
      },
    ];

    cy.visit(BASE_URL);

    for (let card of cards) {
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
