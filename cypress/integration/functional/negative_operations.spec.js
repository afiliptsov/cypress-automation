const { numbers, calculatorScreen } = require("../../PageObject");

describe("Verify that the user is able to use negative values", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(150);
  });
  it("Should add -2 + -2", () => {
    cy.verifyNumberButtonInput(
      numbers.subtract.idLocator,
      numbers.subtract.displayValue
    );
    cy.verifyNumberButtonInput(numbers.two.idLocator, numbers.two.value);

    cy.verifyNumberButtonInput(numbers.add.idLocator, numbers.add.displayValue);

    cy.verifyNumberButtonInput(
      numbers.subtract.idLocator,
      numbers.subtract.displayValue
    );
    cy.verifyNumberButtonInput(numbers.two.idLocator, numbers.two.value);

    cy.get(numbers.result.idLocator).click();

    cy.get(calculatorScreen.resultOutput.idLocator).should("contain", "-4");
  });
  it("Should multiply -8 * -4", () => {
    cy.verifyNumberButtonInput(
      numbers.subtract.idLocator,
      numbers.subtract.displayValue
    );
    cy.verifyNumberButtonInput(numbers.eight.idLocator, numbers.eight.value);

    cy.verifyNumberButtonInput(
      numbers.multiply.idLocator,
      numbers.multiply.displayValue
    );

    cy.verifyNumberButtonInput(
      numbers.subtract.idLocator,
      numbers.subtract.displayValue
    );
    cy.verifyNumberButtonInput(numbers.four.idLocator, numbers.four.value);

    cy.get(numbers.result.idLocator).click();

    cy.get(calculatorScreen.resultOutput.idLocator).should("contain", "32");
  });
});
