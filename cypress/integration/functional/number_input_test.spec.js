const { numbers } = require("../../PageObject");

describe("Verify that the user is able to input numbers", () => {
  it("Visit Home", () => {
    cy.visit("/");
    cy.wait(150);
  });

  it("Should Click button 1", () => {
    cy.verifyNumberButtonInput(numbers.one.idLocator, numbers.one.value);
  });
  it("Should Click button 2", () => {
    cy.verifyNumberButtonInput(numbers.two.idLocator, numbers.two.value);
  });
  it("Should Click button 3", () => {
    cy.verifyNumberButtonInput(numbers.three.idLocator, numbers.three.value);
  });
  it("Should Click button 4", () => {
    cy.verifyNumberButtonInput(numbers.four.idLocator, numbers.four.value);
  });
  it("Should Click button 5", () => {
    cy.verifyNumberButtonInput(numbers.five.idLocator, numbers.five.value);
  });
  it("Should Click button 6", () => {
    cy.verifyNumberButtonInput(numbers.six.idLocator, numbers.six.value);
  });
  it("Should Click button 7", () => {
    cy.verifyNumberButtonInput(numbers.seven.idLocator, numbers.seven.value);
  });
  it("Should Click button 8", () => {
    cy.verifyNumberButtonInput(numbers.eight.idLocator, numbers.eight.value);
  });
  it("Should Click button 9", () => {
    cy.verifyNumberButtonInput(numbers.nine.idLocator, numbers.nine.value);
  });
  it("Should Click button 0", () => {
    cy.verifyNumberButtonInput(numbers.zero.idLocator, numbers.zero.value);
  });
});
