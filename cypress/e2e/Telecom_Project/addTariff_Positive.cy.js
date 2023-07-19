describe("Add Tariff Plan page", () => {
  const BASE_URL = "https://demo.guru99.com/telecom/addtariffplans.php";
  beforeEach(() => {
    cy.fixture("cookies").then((cookies) => {
      for (let [name, value] of Object.entries(cookies)) {
        cy.setCookie(name, JSON.stringify(value));
      }
    });
    cy.visit(BASE_URL);
  });

  it("Test UI on page", () => {
    cy.get(".left > .logo").should("be.visible");
    cy.get(".left > .logo").click();
    cy.url().should("contains", "/telecom/index.html");
    cy.go("back");

    cy.get("h1")
      .contains("Add Tariff Plans")
      .should("be.visible")
      .should("have.css", "color", "rgb(37, 162, 195)")
      .should("have.css", "text-align", "center");

    cy.get(":nth-child(1) > h3").contains("Monthly Rental").should("be.visible");
    cy.get(":nth-child(6) > h3").contains("Free Local Minutes").should("be.visible");
    cy.get(":nth-child(11) > h3").contains("Free International Minutes").should("be.visible");
    cy.get(":nth-child(16) > h3").contains("Free SMS Pack").should("be.visible");
    cy.get(":nth-child(21) > h3").contains("Local Per Minutes Charges").should("be.visible");
    cy.get(":nth-child(26) > h3").contains("International Per Minutes Charges").should("be.visible");
    cy.get(":nth-child(31) > h3").contains("SMS Per Charges").should("be.visible");
  });

  it("Add Tariff Plan", () => {
    cy.visit(BASE_URL);

    cy.checkInputAndTypeValue("rental", "1")
      .should("have.attr", "placeholder", "Monthly Rental")
      .and("have.attr", "maxlength", "5");
    cy.get("label#message2").should("not.be.visible");

    cy.checkInputAndTypeValue("local_minutes", "1")
      .should("have.attr", "placeholder", "Free Local Minutes")
      .and("have.attr", "maxlength", "5");
    cy.get("label#message3").should("not.be.visible");

    cy.checkInputAndTypeValue("inter_minutes", "1")
      .should("have.attr", "placeholder", "Free International Minutes")
      .and("have.attr", "maxlength", "5");
    cy.get("label#message4").should("not.be.visible");

    cy.checkInputAndTypeValue("sms_pack", "1")
      .should("have.attr", "placeholder", "Free SMS Pack")
      .and("have.attr", "maxlength", "5");
    cy.get("label#message5").should("not.be.visible");

    cy.checkInputAndTypeValue("minutes_charges", "1")
      .should("have.attr", "placeholder", "Local Per Minutes Charges")
      .and("have.attr", "maxlength", "3");
    cy.get("label#message6").should("not.be.visible");

    cy.checkInputAndTypeValue("inter_charges", "1")
      .should("have.attr", "placeholder", "Inter. Per Minutes Charges")
      .and("have.attr", "maxlength", "3");
    cy.get("label#message7").should("not.be.visible");

    cy.checkInputAndTypeValue("sms_charges", "1")
      .should("have.attr", "placeholder", "SMS Per Charges")
      .and("have.attr", "maxlength", "3");
    cy.get("label#message8").should("not.be.visible");

    cy.get('[name="submit"]').should("be.visible").click();
    cy.url().should("eq", BASE_URL).get("h2").contains("Congratulation you add Tariff Plan");
    cy.go("back");

    cy.checkInputAndTypeValue("rental", " 123 ");
    cy.checkInputAndTypeValue("local_minutes", " 123 ");
    cy.checkInputAndTypeValue("inter_minutes", " 123 ");
    cy.checkInputAndTypeValue("sms_pack", " 123 ");
    cy.checkInputAndTypeValue("minutes_charges", " 1 ");
    cy.checkInputAndTypeValue("inter_charges", " 1 ");
    cy.checkInputAndTypeValue("sms_charges", " 1 ");

    cy.get('[name="submit"]').should("be.visible").click();
    cy.url().should("eq", BASE_URL).get("h2").contains("Congratulation you add Tariff Plan");

    cy.log("Add tariff plan with spaces success");

    cy.go("back");

    cy.checkInputAndTypeValue("rental", "12345");
    cy.checkInputAndTypeValue("local_minutes", "12345");
    cy.checkInputAndTypeValue("inter_minutes", "12345");
    cy.checkInputAndTypeValue("sms_pack", "12345");
    cy.checkInputAndTypeValue("minutes_charges", "123");
    cy.checkInputAndTypeValue("inter_charges", "123");
    cy.checkInputAndTypeValue("sms_charges", "123");

    cy.get('[name="submit"]').should("be.visible").click();
    cy.url().should("eq", BASE_URL).get("h2").contains("Congratulation you add Tariff Plan");
    cy.go("back");
  });

  it("Reset btn", () => {
    cy.visit(BASE_URL);

    cy.checkInputAndTypeValue("rental", "1");
    cy.checkInputAndTypeValue("local_minutes", "1");
    cy.checkInputAndTypeValue("inter_minutes", "1");
    cy.checkInputAndTypeValue("sms_pack", "1");
    cy.checkInputAndTypeValue("minutes_charges", "1");
    cy.checkInputAndTypeValue("inter_charges", "1");
    cy.checkInputAndTypeValue("sms_charges", "1");

    cy.get('[value="Reset"][type="reset"]').should("be.visible").click();
    cy.get('[name="submit"]').should("be.visible").click();
    cy.url().should("eq", BASE_URL).get("h2").contains("Congratulation you add Tariff Plan");
    cy.go("back");
  });
});
