describe("Add Customer page", () => {
  const BASE_URL = "https://demo.guru99.com/telecom/addcustomer.php";
  const ACCESS_URL = "https://demo.guru99.com/telecom/access.php";
  const CHECK_VALID_URL = "https://demo.guru99.com/telecom/assigntariffplantocustomer.php";

  beforeEach(() => {
    cy.fixture("cookies").then((cookies) => {
      for (let [name, value] of Object.entries(cookies)) {
        cy.setCookie(name, JSON.stringify(value));
      }
    });
    cy.visit(BASE_URL);
  });

  it("Add active customer", () => {
    cy.visit(BASE_URL);

    cy.checkInputAndTypeValue("fname", "tanya");
    cy.checkInputAndTypeValue("lname", "vershinina");
    cy.checkInputAndTypeValue("emailid", "test@test.com");
    cy.checkTextareaAndTypeValue("addr", "1234567");
    cy.checkInputAndTypeValue("telephoneno", "123456789123");

    cy.get('input[name="submit"]').should("be.visible").click();
    cy.url().should("contains", ACCESS_URL);
    cy.go("back");

    cy.checkInputAndTypeValue("fname", "ta nya");
    cy.checkInputAndTypeValue("lname", "ver shinina");
    cy.checkInputAndTypeValue("emailid", " test@test.com");
    cy.checkTextareaAndTypeValue("addr", "lenina ");
    cy.checkInputAndTypeValue("telephoneno", "123456789123 ");

    cy.get('input[name="submit"]').should("be.visible").click();
    cy.url().should("contains", ACCESS_URL);
    cy.go("back");

    let name = "tanya ";

    cy.get('label[for="done"]').should("be.visible").click();
    cy.checkInputAndTypeValue("fname", name);
    cy.checkInputAndTypeValue("lname", "vershinina ");
    cy.checkInputAndTypeValue("emailid", "test@test.com");
    cy.checkTextareaAndTypeValue("addr", "len ina");
    cy.checkInputAndTypeValue("telephoneno", "+99999999999");

    cy.get('input[name="submit"]').should("be.visible").click();
    cy.url().should("contains", ACCESS_URL);

    cy.get("table")
      .contains("Customer ID")
      .parent()
      .next()
      .children("h3")
      .invoke("text")
      .then((text) => {
        cy.url().should("eq", `${ACCESS_URL}?uid=${text}`);

        cy.visit(CHECK_VALID_URL);

        cy.get("h1")
          .contains("Add Tariff Plan to Customer")
          .should("be.visible")
          .and("have.css", "color", "rgb(37, 162, 195)")
          .and("have.css", "text-align", "center");

        cy.get(":nth-child(2) > h3").contains("Enter Your Customer ID").should("be.visible");
        cy.checkInputAndTypeValue("customer_id", text).should("have.attr", "placeholder", "Enter Your Customer ID");
        cy.get("label#message2").should("not.be.visible");
        cy.get('[name="submit"]').should("be.visible").click();

        cy.url().should("eq", CHECK_VALID_URL);
        cy.get("h1")
          .contains("Add Tariff Plan to Customer")
          .should("be.visible")
          .and("have.css", "color", "rgb(37, 162, 195)")
          .and("have.css", "text-align", "center");
        cy.get("marquee h3").should("be.visible").and("contains.text", name);
        cy.get("font")
          .contains("ACTIVE")
          .should("have.text", "ACTIVE")
          .and("be.visible")
          .and("have.css", "color", "rgb(255, 0, 0)")
          .and("have.css", "text-align", "right");
      });
  });

  it("Add Inactive Customer", () => {
    cy.visit(BASE_URL);

    let name = "tanya";

    cy.get('label[for="pending"]').should("be.visible").click();
    cy.checkInputAndTypeValue("fname", name);
    cy.checkInputAndTypeValue("lname", "vershinina ");
    cy.checkInputAndTypeValue("emailid", "test@test.com");
    cy.checkTextareaAndTypeValue("addr", "len ina");
    cy.checkInputAndTypeValue("telephoneno", "+99999999999");

    cy.get('input[name="submit"]').should("be.visible").click();
    cy.url().should("contains", ACCESS_URL);
    cy.log(`Success add customer with name: ${name}`);
    cy.get("table")
      .contains("Customer ID")
      .parent()
      .next()
      .children("h3")
      .invoke("text")
      .then((text) => {
        cy.log(`customer add with id = ${text}`);
        cy.url().should("eq", `${ACCESS_URL}?uid=${text}`);

        cy.visit(CHECK_VALID_URL);

        cy.get("h1")
          .contains("Add Tariff Plan to Customer")
          .should("be.visible")
          .and("have.css", "color", "rgb(37, 162, 195)")
          .and("have.css", "text-align", "center");

        cy.get(":nth-child(2) > h3").contains("Enter Your Customer ID").should("be.visible");
        cy.checkInputAndTypeValue("customer_id", text).should("have.attr", "placeholder", "Enter Your Customer ID");
        cy.get("label#message2").should("not.be.visible");
        cy.get('[name="submit"]').should("be.visible").click();

        cy.url().should("eq", CHECK_VALID_URL);
        cy.get("h1")
          .contains("Add Tariff Plan to Customer")
          .should("be.visible")
          .and("have.css", "color", "rgb(37, 162, 195)")
          .and("have.css", "text-align", "center");
        cy.get("marquee h3").should("be.visible").and("contains.text", name);
        cy.get("font")
          .contains("INACTIVE")
          .should("have.text", "INACTIVE")
          .and("be.visible")
          .and("have.css", "color", "rgb(255, 0, 0)")
          .and("have.css", "text-align", "right");
      });
  });

  it("Reset btn", () => {
    cy.visit(BASE_URL);

    cy.checkInputAndTypeValue("fname", "tanya");
    cy.checkInputAndTypeValue("lname", "vershinina");
    cy.checkInputAndTypeValue("emailid", "test@test.com");
    cy.checkTextareaAndTypeValue("addr", "lenina");
    cy.checkInputAndTypeValue("telephoneno", "999999999999");

    cy.get('[value="Reset"][type="reset"]').should("be.visible").click();
    cy.get('[name="submit"]').should("be.visible").click();
    cy.url().should("contains", ACCESS_URL).get("h1").contains("Access Details to Guru99 Telecom");
    cy.go("back");
  });
});
