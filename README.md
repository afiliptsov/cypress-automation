# Google Calculator Test Automation Framework

This is Automated test which was build to test Google Calculator Functionality using Cypress.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Installing

A step by step series of examples that tell you how to get a development env running

Navigate to the folder where your project is located.

#### Run this command in Terminal to install Npm packages.

```
npm i
```

- [NPM](https://docs.npmjs.com/cli/install) - If you want to know what does "npm i" do

### How to run tests:

This command will execute **all avaliable** tests:

```
npm run test:e2e
```

This command will execute **functional** tests:

```
npm test:e2e:functional
```

This command will execute **smoke** tests:

```
npm run test:e2e:smoke
```

This command will open **Cypress GUI**:

```
npm run cypress open
```

## Custom Commands

In order to avoid code duplication in project i wrote custom commands which are located in **support/commands.js**

Using those commands (functions) allows us to write test in **extremely simple way and avoid code duplication**.

### Example:

Code below will execute math operation: **9 \* 9** and will verify that the answer is correct automatically **(81)**.

```
cy.mathOperations(numbers.nine, numbers.multiply, numbers.nine);
```

Example of another math operation:
Code below will execute math operation: **7 - 6** and will verify that the answer is correct automatically **(1)**.

```
cy.mathOperations(numbers.seven, numbers.subtract, numbers.six);
```

Code below will make a click on calculator button and automatically verify that this value was displayed on calculator:
It requires **two parameters**:
**numbers.one.idLocator** - Is an Identifier**(ID)** of a button which we want to click.
**numbers.one.value** - Is a **Numeric value** of a button.
(Numeric value is needed in order to compare Calculator output with expected result)

```
cy.verifyNumberButtonInput(numbers.one.idLocator, numbers.one.value);
```

## Page Object

In order to avoid code duplication i am using Page Object. In this example i made just a Single Page Object, but of course bigger size app will contain multiple page objects.
**This is an example of a Page Object element:**

```
  nine: {
    value: 9,
    idLocator: "#cwbt15"
  }
```

```
  multiply: {
    value: "*",
    displayValue: "×",
    idLocator: "#cwbt26"
  }
```

It will allow us to in our test to **Referencing** to this data instead of re-declaring it over and over.

## P.S.

**Cypress** is new tool and during my work i experienced multiple issues which i want to note:

1.  In my test i was needed to add a wait because from time to time i had a failure on Button click.
    [Url to this issue](https://github.com/cypress-io/cypress/issues/695 "Url to this issue")

```
cy.wait(150);
```

I spend over 4 hours by looking for the solution because "wait" is considered a bad practice, but none of the solutions worked.
This one** will not** work aswell:

```
cy.get('#query-btn').invoke('width').should('be.gt', 0)
```

2.  As well as on force clicks i was needed to add because click were not always being executed.

```
{ force: true }
```

3.  **If you will run the test too often Google may time your test out and bring a captcha screen.**

## Authors

- **Anton Filiptsov**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
