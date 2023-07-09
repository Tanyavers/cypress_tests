describe("Add Tariff Plan page", () => {
  it("Card Number is blank", () => {
    cy.visit("https://demo.guru99.com/payment-gateway/process_purchasetoy.php");

    cy.checkAlertErrorMessage("Check card number is 16 digits!");

    cy.checkInputAndTypeValue("card_nmuber", "1").clear();
    cy.checkSelectAndSelectValue("month", "5");
    cy.checkSelectAndSelectValue("year", "2025");
    cy.checkInputAndTypeValue("cvv_code", "111");

    cy.get("label#message1").should("be.visible").should("have.text", "Field must not be blank");

    cy.get('[name="submit"]').should("be.visible").click();
  });

  it("Card Number with 15 digits", () => {
    cy.visit("https://demo.guru99.com/payment-gateway/process_purchasetoy.php");

    cy.checkAlertErrorMessage("Check card number is 16 digits!");

    cy.checkInputAndTypeValue("card_nmuber", "123456789012345");
    cy.checkSelectAndSelectValue("month", "5");
    cy.checkSelectAndSelectValue("year", "2025");
    cy.checkInputAndTypeValue("cvv_code", "111");

    cy.get('[name="submit"]').should("be.visible").click();
  });

  it("Card Number with special characters", () => {
    cy.visit("https://demo.guru99.com/payment-gateway/process_purchasetoy.php");

    cy.checkInputAndTypeValue("card_nmuber", "+".repeat(16));
    cy.checkSelectAndSelectValue("month", "5");
    cy.checkSelectAndSelectValue("year", "2025");
    cy.checkInputAndTypeValue("cvv_code", "111");

    cy.get("label#message1").should("be.visible").should("have.text", "Special characters are not allowed");
  });

  it("Card Number with characters", () => {
    cy.visit("https://demo.guru99.com/payment-gateway/process_purchasetoy.php");

    cy.checkInputAndTypeValue("card_nmuber", "q".repeat(16));
    cy.checkSelectAndSelectValue("month", "5");
    cy.checkSelectAndSelectValue("year", "2025");
    cy.checkInputAndTypeValue("cvv_code", "111");

    cy.get("label#message1").should("be.visible").should("have.text", "Characters are not allowed");
  });

  it("Expiration Month is blank", () => {
    cy.visit("https://demo.guru99.com/payment-gateway/process_purchasetoy.php");

    cy.checkInputAndTypeValue("card_nmuber", "1".repeat(16));
    cy.checkSelectAndSelectValue("year", "2025");
    cy.checkInputAndTypeValue("cvv_code", "111");

    cy.get('[name="submit"]').should("be.visible").click();

    cy.get('select[name="month"]')
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
  });

  it("Expiration Year is blank", () => {
    cy.visit("https://demo.guru99.com/payment-gateway/process_purchasetoy.php");

    cy.checkInputAndTypeValue("card_nmuber", "1".repeat(16));
    cy.checkSelectAndSelectValue("month", "5");
    cy.checkInputAndTypeValue("cvv_code", "111");

    cy.get('[name="submit"]').should("be.visible").click();

    cy.get('select[name="year"]')
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
  });

  it("CVV Code is blank", () => {
    cy.visit("https://demo.guru99.com/payment-gateway/process_purchasetoy.php");

    cy.checkInputAndTypeValue("card_nmuber", "1".repeat(16));
    cy.checkSelectAndSelectValue("month", "5");
    cy.checkSelectAndSelectValue("year", "2025");
    cy.checkInputAndTypeValue("cvv_code", "1").clear();

    cy.get("label#message2").should("be.visible").should("have.text", "Field must not be blank");
  });

  it("CVV Code with characters", () => {
    cy.visit("https://demo.guru99.com/payment-gateway/process_purchasetoy.php");

    cy.checkInputAndTypeValue("card_nmuber", "1".repeat(16));
    cy.checkSelectAndSelectValue("month", "5");
    cy.checkSelectAndSelectValue("year", "2025");
    cy.checkInputAndTypeValue("cvv_code", "qwe");

    cy.get("label#message2").should("be.visible").should("have.text", "Characters are not allowed");
  });

  it("CVV Code with special characters", () => {
    cy.visit("https://demo.guru99.com/payment-gateway/process_purchasetoy.php");

    cy.checkInputAndTypeValue("card_nmuber", "1".repeat(16));
    cy.checkSelectAndSelectValue("month", "5");
    cy.checkSelectAndSelectValue("year", "2025");
    cy.checkInputAndTypeValue("cvv_code", "+++");

    cy.get("label#message2").should("be.visible").should("have.text", "Special characters are not allowed");
  });
});
