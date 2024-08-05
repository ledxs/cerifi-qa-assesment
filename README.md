## Cypress Test Documentation

### Overview
This document outlines the structure and usage of the automated test suite for the SauceDemo application. It covers the testing of the standard user's end-to-end purchase flow.

### Running Tests
- Open a terminal.
- Navigate to the project's root directory.
- Execute the command: `npx cypress run --spec "cypress/e2e/purchaseFlowStandardLogin.cy.js"`

### Structure of the Framework
├── e2e/
│ ├── purchaseFlowStandardLogin.cy.js
├── fixtures/
│ ├── users.json
├── pages/
│ ├── LoginPage.js
│ ├── ProductsPage.js
│ ├── CartPage.js
│ ├── CheckoutStepOnePage.js
│ ├── CheckoutStepTwoPage.js
│ ├── OrderConfirmationPage.js
├── support/
├── commands.js

### Key Directories
- **e2e**: Contains test cases.
- **fixtures**: Holds data files like user credentials.
- **pages**: Includes scripts for page interactions.

### How to Contribute
- Enhance the test by creating more page interaction scripts under the pages directory.
- Extend test cases by adding new `.cy.js` files in the e2e directory.

### Note
This framework is designed to be scalable and maintainable, leveraging the Page Object Model for ease of updates and readability.

### Challenge
- QA Automation Assessment.

# ----------------------------------------------------


# QA Automation Assessment

Welcome to the QA Automation assessment. You will be testing a fictional e-commerce application, SauceDemo, to ensure its functionality and user experience are robust.

## Challenge

We would like you to write end-to-end (E2E) tests for the SauceDemo application at [SauceDemo](https://www.saucedemo.com/) using Cypress. You have the freedom to choose a design pattern that you believe is suitable for this project. Your design choices will be assessed in the justification phase, so be mindful of your decisions.

## Objectives

- **Technical Skills**: Demonstrate your proficiency with Cypress by automating tests for the application.
- **Prioritization**: Show how you prioritize features to test, ensuring the most critical functionalities are covered.
- **Future-proofing**: Illustrate how your framework can be scalable and maintainable for future enhancements.
- **Documentation**: Include detailed documentation on how to set up and run your tests, ensuring that an interdepartmental team can easily follow your instructions.

## Instructions

1. **Fork and Clone**:
   - Fork this repository to your GitHub account.
   - Clone the forked repository to your local machine.

2. **Create a Branch**:
   - Create a new branch named `firstName-lastName` (e.g., `john-doe`).

3. **Write Your Scripts**:
   - Write your Cypress test scripts in the `cypress/e2e` folder.
   - Design and implement a framework that you believe is appropriate for the project.

4. **Documentation**:
   - Provide comprehensive documentation on how to run the tests.
   - Justify your design choices and explain how your framework can accommodate future needs.

5. **Commit and Push**:
   - Commit your changes with a meaningful message.
   - Push your branch to your GitHub repository.

6. **Pull Request**:
   - Submit a pull request to the original repository.

## Considerations

- Focus on creating a robust and maintainable test suite.
- Think about how you would structure your tests to cover critical functionalities.
- Ensure your documentation is clear and detailed enough for an interdepartmental team to understand and follow.

## Example Setup Instructions

Include the following in your documentation:

1. **Installation**:
   - Steps to install Cypress and any other dependencies.

2. **Running Tests**:
   - Commands to execute the test suite.

3. **Framework Explanation**:
   - A brief overview of the design pattern used and its benefits.

4. **Future-proofing**:
   - Explain how your framework can be extended or maintained as the application grows.

Good luck! 🍀
