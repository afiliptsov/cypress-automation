const { numbers, calculatorScreen } = require("../../PageObject");

describe("Verify the visibility of calculator elements on the screen", () => {
  it("Visit Home", () => {
    cy.visit("/");
  });

  it("Calculator component should be visible", () => {
    cy.get(calculatorScreen.calculatorComponent.idLocator).should("be.visible");
  });
  it("Input/Output", () => {
    cy.get(calculatorScreen.resultOutput.idLocator).should("be.visible");
  });
  it("Number 1 should be visible", () => {
    cy.get(numbers.one.idLocator).should("be.visible");
  });
  it("Number 2 should be visible", () => {
    cy.get(numbers.two.idLocator).should("be.visible");
  });
  it("Number 3 should be visible", () => {
    cy.get(numbers.three.idLocator).should("be.visible");
  });
  it("Number 4 should be visible", () => {
    cy.get(numbers.four.idLocator).should("be.visible");
  });
  it("Number 5 should be visible", () => {
    cy.get(numbers.five.idLocator).should("be.visible");
  });
  it("Number 6 should be visible", () => {
    cy.get(numbers.six.idLocator).should("be.visible");
  });
  it("Number 7 should be visible", () => {
    cy.get(numbers.seven.idLocator).should("be.visible");
  });
  it("Number 8 should be visible", () => {
    cy.get(numbers.eight.idLocator).should("be.visible");
  });
  it("Number 9 should be visible", () => {
    cy.get(numbers.nine.idLocator).should("be.visible");
  });
  it("Number 0 should be visible", () => {
    cy.get(numbers.zero.idLocator).should("be.visible");
  });
  it("Delete (AC) button should be visible", () => {
    cy.get(numbers.deleteAC.idLocator).should("be.visible");
  });
  it("Delete (CE) button should be visible", () => {
    cy.get(numbers.four.idLocator)
      .invoke("width")
      .should("be.gt", 0);
    cy.get(numbers.four.idLocator).click();
    cy.get(numbers.deleteCE.idLocator).should("be.visible");
    cy.get(numbers.deleteCE.idLocator).click();
  });
  it("Divide button should be visible", () => {
    cy.get(numbers.divide.idLocator).should("be.visible");
  });
  it("Multiply button should be visible", () => {
    cy.get(numbers.multiply.idLocator).should("be.visible");
  });
  it("Subtract button should be visible", () => {
    cy.get(numbers.subtract.idLocator).should("be.visible");
  });
  it("Add button should be visible", () => {
    cy.get(numbers.add.idLocator).should("be.visible");
  });
  it("Result button should be visible", () => {
    cy.get(numbers.result.idLocator).should("be.visible");
  });
  it("Point button should be visible", () => {
    cy.get(numbers.point.idLocator).should("be.visible");
  });
});
