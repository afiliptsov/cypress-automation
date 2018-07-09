const { numbers, calculatorScreen, keyCode } = require("../../PageObject");

describe("Verify that the user is able to delete last number", () => {
  it("Visit Home", () => {
    cy.visit("/");
  });

  it("Should input number 12", () => {
    cy.verifyNumberButtonInput(numbers.one.idLocator, numbers.one.value);
    cy.verifyNumberButtonInput(numbers.two.idLocator, numbers.two.value);
  });

  it("Should delete 2", () => {
    cy.clearInput("1");
  });
});

describe("Verify that the user is able to delete multiple numbers", () => {
  it("Visit Home", () => {
    cy.visit("/");
  });

  it("Should input number 12", () => {
    cy.verifyNumberButtonInput(numbers.one.idLocator, numbers.one.value);
    cy.verifyNumberButtonInput(numbers.two.idLocator, numbers.two.value);
    cy.verifyNumberButtonInput(numbers.three.idLocator, numbers.three.value);
  });

  it("Should delete 3 and 2", () => {
    cy.clearInput("12");
    cy.clearInput("1");
  });
});

describe("Verify that the user is able to delete using Delete Key", () => {
  it("Visit Home", () => {
    cy.visit("/");
  });

  it("Should input number 12", () => {
    cy.verifyNumberButtonInput(numbers.one.idLocator, numbers.one.value);
    cy.verifyNumberButtonInput(numbers.two.idLocator, numbers.two.value);
  });

  it("Should delete 2", () => {
    cy.get(keyCode.delete.idLocator).type(keyCode.delete.keyCode);
    cy.get(calculatorScreen.resultOutput.idLocator).should("contain", "1");
  });
});

describe("Verify that after mathematical operation Clicking Delete will erase all input", () => {
  it("Visit Home", () => {
    cy.visit("/");
  });

  it("Should multiply 4 x 5", () => {
    cy.verifyNumberButtonInput(numbers.four.idLocator, numbers.four.value);
    cy.get(numbers.multiply.idLocator).click();
    cy.verifyNumberButtonInput(numbers.five.idLocator, numbers.five.value);
    cy.get(numbers.result.idLocator).click();
  });

  it("Delete should erase all values from display and place 0", () => {
    cy.get(numbers.result.idLocator).click();
    cy.get(calculatorScreen.resultOutput.idLocator).should("contain", "0");
  });
});

describe("Verify that after mathematical Pressing Clicking Delete will erase all input", () => {
  it("Visit Home", () => {
    cy.visit("/");
  });

  it("Should multiply 4 x 5", () => {
    cy.verifyNumberButtonInput(numbers.four.idLocator, numbers.four.value);
    cy.get(numbers.multiply.idLocator).click();
    cy.verifyNumberButtonInput(numbers.five.idLocator, numbers.five.value);
    cy.get(numbers.result.idLocator).click();
  });

  it("Delete should erase all values from display and place 0", () => {
    cy.get(keyCode.delete.idLocator).type(keyCode.delete.keyCode);
    cy.get(calculatorScreen.resultOutput.idLocator).should("contain", "0");
  });
});
