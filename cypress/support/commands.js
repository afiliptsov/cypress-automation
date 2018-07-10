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
  cy.wait(100);
  cy.get(numberButton).click({ force: true });
  cy.get(calculatorScreen.resultOutput.idLocator).should(
    "contain",
    numberValue
  );
});

Cypress.Commands.add("clearInput", expectedDisplay => {
  cy.get(numbers.deleteCE.idLocator).click();
  cy.get(calculatorScreen.resultOutput.idLocator).should(
    "contain",
    expectedDisplay
  );
});

Cypress.Commands.add("mathOperations", (input1, operation, input2) => {
  cy.get(input1.idLocator).click({ force: true });

  cy.get(calculatorScreen.resultOutput.idLocator).should(
    "contain",
    input1.value
  );

  cy.get(operation.idLocator).click({ force: true });
  cy.get(calculatorScreen.resultOutput.idLocator).should(
    "contain",
    operation.displayValue
  );

  cy.get(input2.idLocator).click({ force: true });

  cy.get(calculatorScreen.resultOutput.idLocator).should(
    "contain",
    input2.value
  );

  cy.get(numbers.result.idLocator).click({ force: true });

  var math_it_up = {
    "+": function(x, y) {
      return x + y;
    },
    "-": function(x, y) {
      return x - y;
    },
    "*": function(x, y) {
      return x * y;
    },
    "/": function(x, y) {
      return x / y;
    }
  };
  cy.get(calculatorScreen.resultOutput.idLocator).should(
    "contain",
    math_it_up[operation.value](input1.value, input2.value)
  );
});

Cypress.Commands.add("clearInput", expectedDisplay => {
  cy.get(numbers.deleteCE.idLocator).click({ force: true });
  cy.get(calculatorScreen.resultOutput.idLocator).should(
    "contain",
    expectedDisplay
  );
});

Cypress.Commands.add("viewportVisibilityElements", () => {
  cy.get(calculatorScreen.calculatorComponent.idLocator).should("be.visible");
  cy.get(calculatorScreen.resultOutput.idLocator).should("be.visible");
  cy.get(numbers.one.idLocator).should("be.visible");
  cy.get(numbers.two.idLocator).should("be.visible");
  cy.get(numbers.three.idLocator).should("be.visible");
  cy.get(numbers.four.idLocator).should("be.visible");
  cy.get(numbers.five.idLocator).should("be.visible");
  cy.get(numbers.six.idLocator).should("be.visible");
  cy.get(numbers.seven.idLocator).should("be.visible");
  cy.get(numbers.eight.idLocator).should("be.visible");
  cy.get(numbers.nine.idLocator).should("be.visible");
  cy.get(numbers.zero.idLocator).should("be.visible");
  cy.get(numbers.deleteAC.idLocator).should("be.visible");
  cy.get(numbers.divide.idLocator).should("be.visible");
  cy.get(numbers.multiply.idLocator).should("be.visible");
  cy.get(numbers.subtract.idLocator).should("be.visible");
  cy.get(numbers.add.idLocator).should("be.visible");
  cy.get(numbers.result.idLocator).should("be.visible");
  cy.get(numbers.point.idLocator).should("be.visible");
});
