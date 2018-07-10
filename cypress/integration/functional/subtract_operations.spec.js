const { numbers, calculatorScreen, keyCode } = require("../../PageObject");

describe("Verify that the user is able to subtract", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(300);
  });
  // it("Visit Home", () => {
  //   cy.visit("/");
  // });
  it("Should subtract 8 - 3", () => {
    cy.mathOperations(numbers.eight, numbers.subtract, numbers.three);
  });
  it("Should subtract 7 - 6", () => {
    cy.mathOperations(numbers.seven, numbers.subtract, numbers.six);
  });
});
