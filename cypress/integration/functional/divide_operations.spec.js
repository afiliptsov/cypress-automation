const { numbers, calculatorScreen, keyCode } = require("../../PageObject");

describe("Verify that the user is able to divide", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(300);
  });
  // it("Visit Home", () => {
  //   cy.visit("/");
  // });
  it("Should divide 8 / 2", () => {
    cy.mathOperations(numbers.eight, numbers.divide, numbers.two);
  });

  it("Should divide 5 / 5", () => {
    cy.mathOperations(numbers.five, numbers.divide, numbers.five);
  });
});
