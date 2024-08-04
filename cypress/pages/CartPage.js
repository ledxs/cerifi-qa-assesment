class CartPage {
  elements = {
    cartItems: () => cy.get('.cart_item'),
    checkoutButton: () => cy.get('button[data-test="checkout"]'),
    itemPrices: () => cy.get('.inventory_item_price')
  };

  verifyItemCount(expectedCount) {
    this.elements.cartItems().should('have.length', expectedCount);
  }

  verifyItemPrices() {
    this.elements.itemPrices().each(($el) => {
      // Ensure price format
      expect($el.text()).to.match(/^\$\d+\.\d{2}$/); 
    });
  }

  proceedToCheckout() {
    this.elements.checkoutButton().click();
  }
}

export default CartPage;
