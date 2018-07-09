const { numbers, calculatorScreen, keyCode } = require("../../PageObject");

describe("Check Start page", () => {
  it("Visit Home", () => {
    cy.visit("https://www.google.com/search?q=calculator");
    console.log("Numbers", numbers.one);
  });

  it("User should see a calculator", () => {
    cy.get("#cwmcwd").should("exist");
  });

  it("Should Click button 1", () => {
    cy.get(numbers.one.idLocator).click();
    cy.get("#cwos").contains(1);
  });
  it("Should Click button 2", () => {
    cy.get(numbers.two.idLocator).click();
  });
  it("Should Click button 3", () => {
    cy.get(numbers.three.idLocator).click();
  });
  it("Should Click button 4", () => {
    cy.get(numbers.four.idLocator).click();
  });
  it("Should Click button 5", () => {
    cy.get(numbers.five.idLocator).click();
    cy.get(keyCode.delete.idLocator).type(keyCode.delete.keyCode);
  });
  it("Should Click button 6", () => {
    cy.get(numbers.six.idLocator).click();
  });
  it("Should Click button 7", () => {
    cy.get(numbers.seven.idLocator).click();
  });
  it("Should Click button 8", () => {
    cy.get(numbers.eight.idLocator).click();
  });
  it("Should Click button 9", () => {
    cy.get(numbers.nine.idLocator).click();
    cy.get(numbers.multiply.idLocator).click();
    cy.get(numbers.two.idLocator).click();

    cy.get(keyCode.enter.idLocator).type(keyCode.enter.keyCode);
    cy.get(keyCode.delete.idLocator).type(keyCode.delete.keyCode);
    // {
    //   enter;
    // }
    // cy.get(numbers.result.idLocator).click();
  });
});
