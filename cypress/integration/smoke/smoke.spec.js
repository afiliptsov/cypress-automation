const { numbers, calculatorScreen, keyCode } = require("../../PageObject");

describe("Verify the visibility of the elements on the screen", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(150);
  });
  it("Verify the visibility of the elements on the screen", () => {
    cy.viewport("macbook-15");
    cy.wait(200);
    cy.viewportVisibilityElements();
  });
});

describe("Verify math operations", () => {
  it("Should subtract 8 - 3", () => {
    cy.mathOperations(numbers.eight, numbers.subtract, numbers.three);
  });
  it("Should multiply 9 * 9", () => {
    cy.mathOperations(numbers.nine, numbers.multiply, numbers.nine);
  });
  it("Should divide 8 / 2", () => {
    cy.mathOperations(numbers.eight, numbers.divide, numbers.two);
  });
  it("Should add 2 + 3", () => {
    cy.mathOperations(numbers.two, numbers.add, numbers.three);
  });

  describe("Verify that the user is able to delete last number", () => {
    it("Should input number 12", () => {
      cy.verifyNumberButtonInput(numbers.one.idLocator, numbers.one.value);
      cy.verifyNumberButtonInput(numbers.two.idLocator, numbers.two.value);
    });
    it("Should delete 2", () => {
      cy.clearInput("1");
    });
  });
});
