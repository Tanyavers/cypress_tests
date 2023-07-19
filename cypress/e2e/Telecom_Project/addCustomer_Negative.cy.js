describe("Add Customer page", () => {
  const BASE_URL = "https://demo.guru99.com/telecom/addcustomer.php";

  beforeEach(() => {
    cy.fixture("cookies").then((cookies) => {
      for (let [name, value] of Object.entries(cookies)) {
        cy.setCookie(name, JSON.stringify(value));
      }
    });
    cy.visit(BASE_URL);
  });

  it("fname", () => {
    cy.visit(BASE_URL);

    cy.checkAlertErrorMessage("please fill all fields");

    cy.fixture("Telecom_Project/addCustomerData").then((userData) => {
      cy.setValidInputData(userData, ["addr"]);
    });

    cy.checkFailedSubmitWithInputError("fname", "1234567", "#message", "Numbers are not allowed");
    cy.checkFailedSubmitWithInputError("fname", "+++++", "#message", "Special characters are not allowed");
    cy.checkFailedSubmitWithInputError("fname", null, "#message", "Customer name must not be blank");
  });

  it("lname", () => {
    cy.visit(BASE_URL);

    cy.checkAlertErrorMessage("please fill all fields");
    cy.fixture("Telecom_Project/addCustomerData").then((userData) => {
      cy.setValidInputData(userData, ["addr"]);
    });

    cy.checkFailedSubmitWithInputError("lname", "1234567", "#message50", "Numbers are not allowed");
    cy.checkFailedSubmitWithInputError("lname", "+++++", "#message50", "Special characters are not allowed");
    cy.checkFailedSubmitWithInputError("lname", null, "#message50", "Customer name must not be blank");
  });

  it("email", () => {
    cy.visit(BASE_URL);

    cy.checkAlertErrorMessage("please fill all fields");
    cy.fixture("Telecom_Project/addCustomerData").then((userData) => {
      cy.setValidInputData(userData, ["addr"]);
    });

    cy.checkFailedSubmitWithInputError("emailid", "1234567", "#message9", "Email-ID is not valid");
    cy.checkFailedSubmitWithInputError("emailid", "qwerty", "#message9", "Email-ID is not valid");
    cy.checkFailedSubmitWithInputError("emailid", "qwerty@qwerty.q", "#message9", "Email-ID is not valid");
    cy.checkFailedSubmitWithInputError("emailid", "qwerty@qwerty", "#message9", "Email-ID is not valid");
    cy.checkFailedSubmitWithInputError("emailid", null, "#message9", "Email-ID must not be blank");
  });

  it("addr", () => {
    cy.visit(BASE_URL);

    cy.checkAlertErrorMessage("please fill all fields");
    cy.fixture("Telecom_Project/addCustomerData").then((userData) => {
      cy.setValidInputData(userData, ["addr"]);
    });

    cy.checkFailedSubmitWithTextareaError("addr", "+", "#message3", "Special characters are not allowed");
    cy.checkFailedSubmitWithTextareaError("addr", " ", "#message3", "First character can not have space");
    cy.checkFailedSubmitWithTextareaError("addr", null, "#message3", "Address Field must not be blank");
  });

  it("telephoneno", () => {
    cy.visit(BASE_URL);

    cy.checkAlertErrorMessage("please fill all fields");
    cy.fixture("Telecom_Project/addCustomerData").then((userData) => {
      cy.setValidInputData(userData, ["addr"]);
    });

    cy.checkFailedSubmitWithInputError("telephoneno", "/", "#message7", "Special characters are not allowed");
    cy.checkFailedSubmitWithInputError("telephoneno", " 111", "#message7", "First character can not have space");
    cy.checkFailedSubmitWithInputError("telephoneno", "111 111", "#message7", "Characters are not allowed");
    cy.checkFailedSubmitWithInputError("telephoneno", "qwerty", "#message7", "Characters are not allowed");
    cy.checkFailedSubmitWithInputError("telephoneno", null, "#message7", "Mobile no must not be blank");
  });
});
