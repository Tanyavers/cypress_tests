describe("Add Tariff Plan page", () => {
  it("Add Tariff Plan", () => {
    cy.visit("https://demo.guru99.com/telecom/addtariffplans.php");

    cy.checkInputAndTypeValue("rental", "1");
    cy.checkInputAndTypeValue("local_minutes", "1");
    cy.checkInputAndTypeValue("inter_minutes", "1");
    cy.checkInputAndTypeValue("sms_pack", "1");
    cy.checkInputAndTypeValue("minutes_charges", "1");
    cy.checkInputAndTypeValue("inter_charges", "1");
    cy.checkInputAndTypeValue("sms_charges", "1");

    cy.get('[name="submit"]').should("be.visible").click();
    cy.url()
      .should("eq", "https://demo.guru99.com/telecom/addtariffplans.php")
      .get("h2")
      .contains("Congratulation you add Tariff Plan");
    cy.go("back");

    cy.checkInputAndTypeValue("rental", " 123 ");
    cy.checkInputAndTypeValue("local_minutes", " 123 ");
    cy.checkInputAndTypeValue("inter_minutes", " 123 ");
    cy.checkInputAndTypeValue("sms_pack", " 123 ");
    cy.checkInputAndTypeValue("minutes_charges", " 1 ");
    cy.checkInputAndTypeValue("inter_charges", " 1 ");
    cy.checkInputAndTypeValue("sms_charges", " 1 ");

    cy.get('[name="submit"]').should("be.visible").click();
    cy.url()
      .should("eq", "https://demo.guru99.com/telecom/addtariffplans.php")
      .get("h2")
      .contains("Congratulation you add Tariff Plan");
    cy.go("back");

    cy.checkInputAndTypeValue("rental", "12345");
    cy.checkInputAndTypeValue("local_minutes", "12345");
    cy.checkInputAndTypeValue("inter_minutes", "12345");
    cy.checkInputAndTypeValue("sms_pack", "12345");
    cy.checkInputAndTypeValue("minutes_charges", "123");
    cy.checkInputAndTypeValue("inter_charges", "123");
    cy.checkInputAndTypeValue("sms_charges", "123");

    cy.get('[name="submit"]').should("be.visible").click();
    cy.url()
      .should("eq", "https://demo.guru99.com/telecom/addtariffplans.php")
      .get("h2")
      .contains("Congratulation you add Tariff Plan");
    cy.go("back");
  });
});

it("Reset btn", () => {
  cy.visit("https://demo.guru99.com/telecom/addtariffplans.php");

  cy.checkInputAndTypeValue("rental", "1");
  cy.checkInputAndTypeValue("local_minutes", "1");
  cy.checkInputAndTypeValue("inter_minutes", "1");
  cy.checkInputAndTypeValue("sms_pack", "1");
  cy.checkInputAndTypeValue("minutes_charges", "1");
  cy.checkInputAndTypeValue("inter_charges", "1");
  cy.checkInputAndTypeValue("sms_charges", "1");

  cy.get('[value="Reset"][type="reset"]').should("be.visible").click();
  cy.get('[name="submit"]').should("be.visible").click();
  cy.url()
    .should("eq", "https://demo.guru99.com/telecom/addtariffplans.php")
    .get("h2")
    .contains("Congratulation you add Tariff Plan");
  cy.go("back");
});
