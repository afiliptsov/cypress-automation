const { numbers } = require("../../PageObject");

describe("Verify the visibility of calculator elements on the screen", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(100);
  });

  it("[Macbook-15] Check visibility of elements", () => {
    cy.viewport("macbook-15");
    cy.viewportVisibilityElements();
  });
  it("[Macbook-11] Check visibility of elements", () => {
    cy.viewport("macbook-11");
    cy.viewportVisibilityElements();
  });
  it("[ipad-2] Check visibility of elements", () => {
    cy.viewport("ipad-2");
    cy.viewportVisibilityElements();
  });
  it("[iphone-6+] Check visibility of elements", () => {
    cy.viewport("iphone-6+");
    cy.viewportVisibilityElements();
  });
  it("[iphone-5] Check visibility of elements", () => {
    cy.viewport("iphone-5");
    cy.viewportVisibilityElements();
  });
});
