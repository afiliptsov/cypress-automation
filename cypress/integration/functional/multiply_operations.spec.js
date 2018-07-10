const { numbers } = require("../../PageObject");

describe("Verify that the user is able to multiply", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(300);
  });
  // it("Visit Home", () => {
  //   cy.visit("/");
  // });
  it("Should multiply 9 * 9", () => {
    cy.mathOperations(numbers.nine, numbers.multiply, numbers.nine);
  });

  it("Should multiply 0 * 5", () => {
    cy.mathOperations(numbers.zero, numbers.multiply, numbers.five);
  });
});
