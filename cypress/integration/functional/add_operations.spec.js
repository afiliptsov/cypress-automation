const { numbers, calculatorScreen, keyCode } = require("../../PageObject");

describe("Verify that the user is able to add", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(150);
  });
  it("Should add 2 + 3", () => {
    cy.mathOperations(numbers.two, numbers.add, numbers.three);
  });

  it("Should add 9 + 5", () => {
    cy.mathOperations(numbers.nine, numbers.add, numbers.five);
  });
});
