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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
const { numbers, calculatorScreen, keyCode } = require("../PageObject");

Cypress.Commands.add("verifyNumberButtonInput", (numberButton, numberValue) => {
  cy.get(numberButton).click();
  // cy.get(calculatorScreen.resultOutput).scrollIntoView();
  cy.get(calculatorScreen.resultOutput.idLocator).should(
    "contain",
    numberValue
  );
});

Cypress.Commands.add("clearInput", expectedDisplay => {
  cy.get(numbers.delete.idLocator).click();
  cy.get(calculatorScreen.resultOutput.idLocator).should(
    "contain",
    expectedDisplay
  );
});
