const { numbers, calculatorScreen } = require("../../PageObject");

describe("Verify that the user is able mathematical operations with decimals", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(300);
  });
  it("Should add 0.9 + 3.2", () => {
    cy.verifyNumberButtonInput(numbers.zero.idLocator, numbers.zero.value);
    cy.verifyNumberButtonInput(
      numbers.point.idLocator,
      numbers.point.displayValue
    );
    cy.verifyNumberButtonInput(numbers.nine.idLocator, numbers.nine.value);
    cy.verifyNumberButtonInput(numbers.add.idLocator, numbers.add.displayValue);
    cy.verifyNumberButtonInput(numbers.three.idLocator, numbers.three.value);
    cy.verifyNumberButtonInput(
      numbers.point.idLocator,
      numbers.point.displayValue
    );
    cy.verifyNumberButtonInput(numbers.two.idLocator, numbers.two.value);
    cy.get(numbers.result.idLocator).click();
    cy.get(calculatorScreen.resultOutput.idLocator).should("contain", "4.1");
  });
});
