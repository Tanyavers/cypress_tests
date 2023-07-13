// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("setValidInputData", (initData, textareas = []) => {
  for (let [inputName, inputValue] of Object.entries(initData)) {
    if (textareas.includes(inputName)) {
      cy.checkTextareaAndTypeValue(inputName, inputValue);
    } else {
      cy.checkInputAndTypeValue(inputName, inputValue);
    }
  }
});

Cypress.Commands.add("checkFailedSubmitWithInputError", (inputName, inputValue, errorElement, errorText) => {
  if (inputValue !== null) {
    cy.checkInputAndTypeValue(inputName, inputValue);
  } else {
    cy.get(`input[name="${inputName}"]`).clear();
  }
  cy.get(errorElement).should("be.visible").and("have.text", errorText);
  cy.get('[name="submit"]').should("be.visible").click();
});

Cypress.Commands.add("checkFailedSubmitWithTextareaError", (inputName, inputValue, errorElement, errorText) => {
  if (inputValue !== null) {
    cy.checkTextareaAndTypeValue(inputName, inputValue);
  } else {
    cy.get(`textarea[name="${inputName}"]`).clear();
  }
  cy.get(errorElement).should("be.visible").and("have.text", errorText);
  cy.get('[name="submit"]').should("be.visible").click();
});

Cypress.Commands.add("CheckElementOnNavbar", (elementName, pageLink) => {
  cy.get("#navbar-brand-centered").then((_) => {
    cy.contains("a", elementName)
      .then((el) => {
        el[0].href = el[0].href.replace("http", "https");
      })
      .click();
    cy.url().should("contains", pageLink);
    cy.go("back");
  });
});

Cypress.Commands.add("CheckDropdownElementOnNavbar", (parentElement, elementName, pageLink, needChangePrtcl) => {
  cy.get("#navbar-brand-centered")
    .contains("a", parentElement)
    .click()
    .then((el) => {
      cy.get(el.parent().children("ul"))
        .contains("a", elementName)
        .then((el) => {
          if (needChangePrtcl) {
            el[0].href = el[0].href.replace("http", "https");
          }
        })
        .click()
        .url()
        .should("contains", pageLink);
      cy.go("back");
    });
});

Cypress.Commands.add("CheckLinksOnSidebar", (elementName, pageLink, needGoBack) => {
  cy.get('nav.left a[href="#menu"]')
    .should("be.visible")
    .click()
    .then(() => {
      cy.get("nav#menu").should("be.visible").contains("a", elementName).click("right", { force: true });
      cy.wait(1_000);
      cy.url().should("contains", pageLink);
      needGoBack ?? cy.go("back");
    });
});

Cypress.Commands.add("checkInputAndTypeValue", (inputName, inputValue) => {
  cy.get(`input[name="${inputName}"]`).should("be.visible").clear().type(inputValue);
});

Cypress.Commands.add("checkTextareaAndTypeValue", (textareaName, textareaValue) => {
  cy.get(`textarea[name="${textareaName}"]`).should("be.visible").clear().type(textareaValue);
});

Cypress.Commands.add("checkSelectAndSelectValue", (selectName, selectValue) => {
  cy.get(`select[name="${selectName}"]`).should("be.visible").select(selectValue);
});

Cypress.Commands.add("checkAlertErrorMessage", (errorMessage) => {
  cy.on("window:alert", (text) => {
    cy.expect(text).to.eq(errorMessage);
    return true;
  });
  cy.on("window:confirm", () => true);
});
