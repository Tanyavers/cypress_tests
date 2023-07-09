describe("Add Customer page", () => {
  it("Add Customer", () => {
    cy.visit("https://demo.guru99.com/telecom/addcustomer.php");

    cy.checkInputAndTypeValue("fname", "tanya");
    cy.checkInputAndTypeValue("lname", "vershinina");
    cy.checkInputAndTypeValue("emailid", "test@test.com");
    cy.checkTextareaAndTypeValue("addr", "1234567");
    cy.checkInputAndTypeValue("telephoneno", "123456789123");

    cy.get('input[name="submit"]').should("be.visible").click();
    cy.url().should("contains", "https://demo.guru99.com/telecom/access.php");
    cy.go("back");

    cy.checkInputAndTypeValue("fname", "ta nya");
    cy.checkInputAndTypeValue("lname", "ver shinina");
    cy.checkInputAndTypeValue("emailid", " test@test.com");
    cy.checkTextareaAndTypeValue("addr", "lenina ");
    cy.checkInputAndTypeValue("telephoneno", "123456789123 ");

    cy.get('input[name="submit"]').should("be.visible").click();
    cy.url().should("contains", "https://demo.guru99.com/telecom/access.php");
    cy.go("back");

    cy.checkInputAndTypeValue("fname", "tanya ");
    cy.checkInputAndTypeValue("lname", "vershinina ");
    cy.checkInputAndTypeValue("emailid", "test@test.com");
    cy.checkTextareaAndTypeValue("addr", "len ina");
    cy.checkInputAndTypeValue("telephoneno", "+99999999999");

    cy.get('input[name="submit"]').should("be.visible").click();
    cy.url().should("contains", "https://demo.guru99.com/telecom/access.php");
    cy.go("back");
  });

  it("Add Inactive Customer", () => {
    cy.get("#pending").parent().children("label").should("be.visible").click();

    cy.checkInputAndTypeValue("fname", "tanya");
    cy.checkInputAndTypeValue("lname", "vershinina");
    cy.checkInputAndTypeValue("emailid", "test@test.com");
    cy.checkTextareaAndTypeValue("addr", "lenina");
    cy.checkInputAndTypeValue("telephoneno", "999999999999");

    cy.get('[name="submit"]').should("be.visible").click();
    cy.url()
      .should("contains", "https://demo.guru99.com/telecom/access.php")
      .get("h1")
      .contains("Access Details to Guru99 Telecom");
  });

  it("Reset btn", () => {
    cy.visit("https://demo.guru99.com/telecom/addcustomer.php");

    cy.checkInputAndTypeValue("fname", "tanya");
    cy.checkInputAndTypeValue("lname", "vershinina");
    cy.checkInputAndTypeValue("emailid", "test@test.com");
    cy.checkTextareaAndTypeValue("addr", "lenina");
    cy.checkInputAndTypeValue("telephoneno", "999999999999");

    cy.get('[value="Reset"][type="reset"]').should("be.visible").click();
    cy.get('[name="submit"]').should("be.visible").click();
    cy.url()
      .should("contains", "https://demo.guru99.com/telecom/access.php")
      .get("h1")
      .contains("Access Details to Guru99 Telecom");
    cy.go("back");
  });
});
