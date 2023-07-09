describe("Negative tests for Add Tariff Plan page", () => {
  const validInputData = {
    rental: "1",
    local_minutes: "1",
    inter_minutes: "1",
    sms_pack: "1",
    minutes_charges: "1",
    inter_charges: "1",
    sms_charges: "1",
  };

  it("negative Add Tariff Plan", () => {
    cy.visit("https://demo.guru99.com/telecom/addtariffplans.php");

    cy.checkAlertErrorMessage("please fill all fields Correct Value");
    cy.get('[name="submit"]').should("be.visible").click();
  });

  it("test Monthly Rental field", () => {
    cy.visit("https://demo.guru99.com/telecom/addtariffplans.php");

    cy.checkAlertErrorMessage("please fill all fields Correct Value");
    cy.setValidInputData(validInputData);

    cy.checkFailedSubmitWithInputError("rental", null, "label#message2", "Number must not be blank");
    cy.checkFailedSubmitWithInputError("rental", "qwert", "label#message2", "Characters are not allowed");
    cy.checkFailedSubmitWithInputError("rental", "     ", "label#message2", "Characters are not allowed");
    cy.checkFailedSubmitWithInputError("rental", "---++", "label#message2", "Special characters are not allowed");
  });

  it("test Free Local Minutes field", () => {
    cy.visit("https://demo.guru99.com/telecom/addtariffplans.php");

    cy.checkAlertErrorMessage("please fill all fields Correct Value");
    cy.setValidInputData(validInputData);

    cy.checkFailedSubmitWithInputError("local_minutes", null, "label#message3", "Number must not be blank");
    cy.checkFailedSubmitWithInputError("local_minutes", "qwert", "label#message3", "Characters are not allowed");
    cy.checkFailedSubmitWithInputError("local_minutes", "     ", "label#message3", "Characters are not allowed");
    cy.checkFailedSubmitWithInputError(
      "local_minutes",
      "---++",
      "label#message3",
      "Special characters are not allowed"
    );
  });

  it("test Free International Minutes field", () => {
    cy.visit("https://demo.guru99.com/telecom/addtariffplans.php");

    cy.checkAlertErrorMessage("please fill all fields Correct Value");
    cy.setValidInputData(validInputData);

    cy.checkFailedSubmitWithInputError("inter_minutes", null, "label#message4", "Number must not be blank");
    cy.checkFailedSubmitWithInputError("inter_minutes", "qwert", "label#message4", "Characters are not allowed");
    cy.checkFailedSubmitWithInputError("inter_minutes", "     ", "label#message4", "Characters are not allowed");
    cy.checkFailedSubmitWithInputError(
      "inter_minutes",
      "---++",
      "label#message4",
      "Special characters are not allowed"
    );
  });

  it("test Free SMS Pack field", () => {
    cy.visit("https://demo.guru99.com/telecom/addtariffplans.php");

    cy.checkAlertErrorMessage("please fill all fields Correct Value");
    cy.setValidInputData(validInputData);

    cy.checkFailedSubmitWithInputError("sms_pack", null, "label#message5", "Number must not be blank");
    cy.checkFailedSubmitWithInputError("sms_pack", "qwert", "label#message5", "Characters are not allowed");
    cy.checkFailedSubmitWithInputError("sms_pack", "     ", "label#message5", "Characters are not allowed");
    cy.checkFailedSubmitWithInputError("sms_pack", "---++", "label#message5", "Special characters are not allowed");
  });

  it("test Local Per Minutes Charges field", () => {
    cy.visit("https://demo.guru99.com/telecom/addtariffplans.php");

    cy.checkAlertErrorMessage("please fill all fields Correct Value");
    cy.setValidInputData(validInputData);

    cy.checkFailedSubmitWithInputError("minutes_charges", null, "label#message6", "Number must not be blank");
    cy.checkFailedSubmitWithInputError("minutes_charges", "qwert", "label#message6", "Characters are not allowed");
    cy.checkFailedSubmitWithInputError("minutes_charges", "     ", "label#message6", "Characters are not allowed");
    cy.checkFailedSubmitWithInputError(
      "minutes_charges",
      "---++",
      "label#message6",
      "Special characters are not allowed"
    );
  });

  it("test International Per Minutes Charges field", () => {
    cy.visit("https://demo.guru99.com/telecom/addtariffplans.php");

    cy.checkAlertErrorMessage("please fill all fields Correct Value");
    cy.setValidInputData(validInputData);

    cy.checkFailedSubmitWithInputError("inter_charges", null, "label#message7", "Number must not be blank");
    cy.checkFailedSubmitWithInputError("inter_charges", "qwert", "label#message7", "Characters are not allowed");
    cy.checkFailedSubmitWithInputError("inter_charges", "     ", "label#message7", "Characters are not allowed");
    cy.checkFailedSubmitWithInputError(
      "inter_charges",
      "---++",
      "label#message7",
      "Special characters are not allowed"
    );
  });

  it("test SMS Per Charges field", () => {
    cy.visit("https://demo.guru99.com/telecom/addtariffplans.php");

    cy.checkAlertErrorMessage("please fill all fields Correct Value");
    cy.setValidInputData(validInputData);

    cy.checkFailedSubmitWithInputError("sms_charges", null, "label#message8", "Number must not be blank");
    cy.checkFailedSubmitWithInputError("sms_charges", "qwert", "label#message8", "Characters are not allowed");
    cy.checkFailedSubmitWithInputError("sms_charges", "     ", "label#message8", "Characters are not allowed");
    cy.checkFailedSubmitWithInputError("sms_charges", "---++", "label#message8", "Special characters are not allowed");
  });
});
