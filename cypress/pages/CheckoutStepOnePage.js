class CheckoutStepOnePage {
    elements = {
      firstNameInput: () => cy.get('input[data-test="firstName"]'),
      lastNameInput: () => cy.get('input[data-test="lastName"]'),
      postalCodeInput: () => cy.get('input[data-test="postalCode"]'),
      continueButton: () => cy.get('input[data-test="continue"]')
    };
  
    enterUserInfo(userInfo) {
      const { firstName, lastName, zipCode } = userInfo;
      this.elements.firstNameInput().type(firstName);
      this.elements.lastNameInput().type(lastName);
      this.elements.postalCodeInput().type(zipCode);
      this.elements.continueButton().click();
    }
  }
  
  export default CheckoutStepOnePage;
  