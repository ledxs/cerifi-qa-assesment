class OrderConfirmationPage {
    elements = {
      thankYouMessage: () => cy.get('.complete-header'),
      thankYouInfoMessage: () => cy.get('.complete-text'),
      backToHomeButton: () => cy.get('button[data-test="back-to-products"]')
    };
  
    verifyThankYouMessage(expectedMessage) {
      this.elements.thankYouMessage().should('have.text', expectedMessage);
    }
  
    verifyDispatchInformation(expectedInfo) {
      this.elements.thankYouInfoMessage().should('have.text', expectedInfo);
    }
  
    returnToHome() {
      this.elements.backToHomeButton().click();
    }
  }
  
  export default OrderConfirmationPage;
  